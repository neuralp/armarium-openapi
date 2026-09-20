import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../api/src/apis/files-api.ts', import.meta.url), 'utf8');

test('upload request exposes optional exact worksheet name and serializes it', () => {
  assert.match(source, /sheetName\?: string;/);
  assert.match(source, /if \(requestParameters\['sheetName'\] != null\)\s*\{\s*formParams\.append\('sheetName', requestParameters\['sheetName'\] as any\);/);
});
