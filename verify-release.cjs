// Copied into dist/ by createDistPackageJson.js and run by `npm publish` in the handoff checkout
// (the delivered package.json's `prepublishOnly`). It refuses to publish files that were not built
// together for this version: 0.3.6 shipped 0.3.5's bundle because a stale handoff was published.
// The version is the one uhuu-storybook's package.json gave the build.
'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const problems = [];
const read = (file) => fs.readFileSync(path.join(dir, file));
const pkg = JSON.parse(read('package.json'));

let release = null;
try {
  release = JSON.parse(read('release.json'));
} catch {
  problems.push('release.json is missing: this checkout was not handed off from a build');
}
if (release) {
  if (release.version !== pkg.version) {
    problems.push(`package.json is ${pkg.version}, but the files were built as ${release.version}`);
  }
  for (const [file, expected] of Object.entries(release.files ?? {})) {
    let actual = null;
    try { actual = crypto.createHash('sha256').update(read(file)).digest('hex'); } catch { /* reported below */ }
    if (actual !== expected) problems.push(`${file} is not the file the build produced`);
  }
}

if (problems.length) {
  console.error(`uhuu-components ${pkg.version}: release check failed\n- ${problems.join('\n- ')}`);
  console.error('Rebuild and hand off from the tagged source: pnpm release:handoff in uhuu-storybook.');
  process.exit(1);
}
console.log(`uhuu-components ${pkg.version}: release check passed`);
