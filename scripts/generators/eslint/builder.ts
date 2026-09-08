import { RestrictedImportRule } from './types';

export function build(rules: RestrictedImportRule[]): string {
  const contents = rules
    .sort((a, b) => a.group[0].localeCompare(b.group[0]))
    .map(
      rule => `  {
    group: ['${rule.group[0]}'],
    message: '${rule.message}',
  },`,
    )
    .join('\n');

  return `/**
 * AUTO-GENERATED FILE.
 * DO NOT EDIT MANUALLY.
 */

module.exports = [
${contents}
];`;
}
