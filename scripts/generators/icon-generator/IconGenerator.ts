import { performance } from 'perf_hooks';

import { Generator } from '../../core/Types';
import { Logger } from '../../core/Logger';
import { FileWriter } from '../../core/FileWriter';

import { iconConfig } from './config';
import { scan } from './scanner';
import { validate } from './validator';
import { generate } from './IconSourceBuilder';
import { Formatter } from 'scripts/core/Formatter';

export class IconGenerator implements Generator {
  readonly name = 'icons';

  async run(): Promise<void> {
    const start = performance.now();

    try {
      Logger.info('Scanning icons...');

      const icons = scan(iconConfig.directory);

      Logger.success(`Found ${icons.length} SVGs`);

      validate(icons);

      Logger.success('Validation passed');

      const generated = generate(icons);

      const formatted = Formatter.format(generated);

      FileWriter.write(iconConfig.output, formatted);

      Logger.success('Generated index.ts');

      const end = performance.now();

      Logger.info(`Done in ${(end - start).toFixed(1)}ms`);
    } catch (error) {
      Logger.error(error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }
}
