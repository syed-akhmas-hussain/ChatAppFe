export interface RestrictedImportConfig {
  directory: string;
  importFrom: string;
}

export interface RestrictedImportRule {
  group: string[];
  message: string;
}
