export interface Generator {
  readonly name: string;
  run(): Promise<void>;
}

export interface DirectoryNode {
  name: string;
  path: string;
  files: string[];
  directories: DirectoryNode[];
}
