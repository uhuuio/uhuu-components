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
if (!release || typeof release !== 'object' || Array.isArray(release)) {
  problems.push('release manifest is not an object');
} else {
  if (release.version !== pkg.version) {
    problems.push(`package.json is ${pkg.version}, but the files were built as ${release.version}`);
  }
  const descriptorHash = crypto.createHash('sha256').update(read('package.json')).digest('hex');
  const descriptorMatches = descriptorHash === release.descriptorSha256;
  if (!descriptorMatches) problems.push('package.json is not the descriptor the build produced');
  const files = release.files;
  const expectedFiles = Array.isArray(pkg.files) ? pkg.files : [];
  const complete = files && typeof files === 'object' && !Array.isArray(files) && expectedFiles.length > 0 &&
    expectedFiles.length === Object.keys(files).length && expectedFiles.every((file) => Object.hasOwn(files, file));
  if (!complete) problems.push('release file list is incomplete or does not match the built descriptor');
  for (const file of complete && descriptorMatches ? expectedFiles : []) {
    const expected = files[file];
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
