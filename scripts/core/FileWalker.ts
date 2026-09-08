import fs from 'fs';
import path from 'path';

import { DirectoryNode } from './Types';
import { config } from 'scripts/config';

export class FileWalker {
  walk(directory: string): DirectoryNode {
    const entries = fs.readdirSync(directory, {
      withFileTypes: true,
    });

    const node: DirectoryNode = {
      name: path.basename(directory),
      path: directory,
      files: [],
      directories: [],
    };

    for (const entry of entries) {
      if (entry.name.startsWith('.')) {
        continue;
      }

      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (config.ignoreDirectories.includes(entry.name)) {
          continue;
        }

        node.directories.push(this.walk(fullPath));
      } else {
        node.files.push(entry.name);
      }
    }

    return node;
  }
}
