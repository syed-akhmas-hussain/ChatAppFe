import path from 'path';

import { Generator, DirectoryNode } from '../../core/Types';
import { FileWalker } from '../../core/FileWalker';
import { FileWriter } from '../../core/FileWriter';
import { Logger } from '../../core/Logger';

import { config } from 'scripts/config';
import barrelConfig from './config';

export class BarrelGenerator implements Generator {
  readonly name = 'barrel';

  private walker = new FileWalker();

  async run(): Promise<void> {
    for (const directory of barrelConfig.include) {
      const root = path.join(process.cwd(), config.root, directory);

      const tree = this.walker.walk(root);

      this.generate(tree);
    }

    Logger.success('Barrels generated successfully.');
  }

  private generate(node: DirectoryNode) {
    const exports = node.files
      .filter(file => {
        if (!/\.(ts|tsx)$/.test(file)) return false;

        if (config.ignoreFiles.includes(file)) return false;

        if (config.ignorePatterns.some(pattern => pattern.test(file)))
          return false;

        return true;
      })
      .map(file => file.replace(/\.(ts|tsx)$/, ''))
      .sort()
      .map(name => `export * from './${name}';`);

    const indexPath = path.join(node.path, 'index.ts');

    if (exports.length === 0) {
      FileWriter.remove(indexPath);
    } else {
      FileWriter.write(indexPath, `${exports.join('\n')}\n`);
      Logger.info(indexPath);
    }

    for (const child of node.directories) {
      this.generate(child);
    }
  }
}
