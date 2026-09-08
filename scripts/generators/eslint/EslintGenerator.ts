import path from 'path';
import fs from 'fs';
import { Generator, DirectoryNode } from '../../core/Types';
import { FileWalker } from '../../core/FileWalker';
import { FileWriter } from '../../core/FileWriter';
import { Logger } from '../../core/Logger';

import config from './config';
import { build } from './builder';
import { RestrictedImportRule } from './types';

export class EslintGenerator implements Generator {
  readonly name = 'eslint';

  private walker = new FileWalker();

  async run(): Promise<void> {
    const rules: RestrictedImportRule[] = [];

    for (const item of config) {
      const root = path.join(process.cwd(), item.directory);
      if (!fs.existsSync(root)) {
        Logger.warn(`Skipping "${item.directory}" (directory not found).`);
        continue;
      }
      const tree = this.walker.walk(root);

      this.collect(tree, item.importFrom, rules);
    }

    const output = build(rules);

    const destination = path.join(
      process.cwd(),
      'scripts/generated/restricted-imports.js',
    );

    FileWriter.write(destination, output);

    Logger.success('Restricted imports generated.');
  }

  private collect(
    node: DirectoryNode,
    importFrom: string,
    rules: RestrictedImportRule[],
  ) {
    for (const file of node.files) {
      if (!/\.(ts|tsx)$/.test(file)) continue;

      if (file === 'index.ts') continue;

      if (file.startsWith('_')) continue;

      const name = file.replace(/\.(ts|tsx)$/, '');

      rules.push({
        group: [`${importFrom}/${name}`],
        message: `Import ${name} from "${importFrom}" instead.`,
      });
    }

    for (const child of node.directories) {
      this.collect(child, importFrom, rules);
    }
  }
}
