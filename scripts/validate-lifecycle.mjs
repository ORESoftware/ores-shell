import fs from 'node:fs';

const lifecycle = JSON.parse(fs.readFileSync(new URL('../LIFECYCLE.json', import.meta.url), 'utf8'));
const readme = fs.readFileSync(new URL('../readme.md', import.meta.url), 'utf8');
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const fail = (message) => {
  console.error(`lifecycle validation failed: ${message}`);
  process.exitCode = 1;
};

if (lifecycle.repository !== 'ORESoftware/ores-shell') fail('repository mismatch');
if (lifecycle.package !== pkg.name) fail('package name mismatch');
if (lifecycle.status !== 'legacy') fail('status must remain legacy');
if (lifecycle.authority !== false) fail('legacy repository must not claim authority');
if (lifecycle.mutable_dependencies_allowed !== false) fail('mutable dependencies must remain forbidden');
if (lifecycle.compatibility_policy?.new_features !== 'forbidden') fail('new features must remain forbidden');
if (!readme.includes('Lifecycle: legacy / compatibility-only')) fail('README legacy banner missing');
if (!readme.includes('ORESoftware/ores-cli')) fail('README ores-cli migration boundary missing');
if (!readme.includes('ORESoftware/ores-gha-workflows')) fail('README workflow migration boundary missing');
if (!pkg.oresLifecycle || pkg.oresLifecycle.status !== lifecycle.status) fail('package lifecycle metadata mismatch');

if (!process.exitCode) console.log('ores-shell lifecycle policy: ok');
