import { Logger } from './core/Logger';
import { BarrelGenerator } from './generators/barrel/BarrelGenerator';
import { EslintGenerator } from './generators/eslint/EslintGenerator';
import { IconGenerator } from './generators/icon-generator/IconGenerator';

const generators = {
  barrel: new BarrelGenerator(),
  icons: new IconGenerator(),
  eslint: new EslintGenerator(),
};

async function main() {
  const [, , command = 'all'] = process.argv;

  if (command === 'all') {
    for (const generator of Object.values(generators)) {
      Logger.info(`Running ${generator.name}...`);
      await generator.run();
    }

    return;
  }

  const generator = generators[command as keyof typeof generators];

  if (!generator) {
    Logger.error(`Unknown generator "${command}"`);

    Logger.info('Available generators:');
    Object.keys(generators).forEach(name => Logger.info(`- ${name}`));

    process.exit(1);
  }

  Logger.info(`Running ${generator.name}...`);

  await generator.run();
}

main().catch(error => {
  Logger.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
