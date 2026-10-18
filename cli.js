#!/usr/bin/env node

// src/cli/uhuu-components.js
import process from "node:process";

// src/cli/brand-command.js
import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// src/uhuu/utility/json.js
var isPlainObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
var textOf = (value) => typeof value === "string" && value.trim() !== "" ? value.trim() : void 0;

// src/uhuu/brand-kit/brand-kit-assets.js
var ABSOLUTE = /^https?:\/\//i;
function brandKitBaseUrl(brandKit, sourceUrl) {
  const own = isPlainObject(brandKit) ? textOf(brandKit.baseUrl) : void 0;
  if (own) return own.replace(/\/+$/, "");
  const source = textOf(sourceUrl);
  if (!source || !ABSOLUTE.test(source)) return void 0;
  try {
    return new URL(".", source).toString().replace(/\/+$/, "");
  } catch {
    return void 0;
  }
}
function resolveBrandKitUrl(value, base) {
  const url = textOf(value);
  if (!url || /\s/.test(url)) return void 0;
  if (ABSOLUTE.test(url) || /^data:/i.test(url)) return url;
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//")) return void 0;
  if (!base) return url;
  try {
    return new URL(url, `${base}/`).toString();
  } catch {
    return void 0;
  }
}
var LOGO_KIND = { primary: "primary", logo: "primary", lockup: "primary", mark: "mark", icon: "mark", symbol: "mark", wordmark: "wordmark" };
var fileOf = (files) => isPlainObject(files) ? textOf(files.svg) : void 0;
function brandKitLogo(brandKit, options = {}) {
  if (!isPlainObject(brandKit)) return null;
  const kind = LOGO_KIND[String(options.kind ?? "primary").toLowerCase()] ?? "primary";
  const background = options.background === "dark" ? "dark" : "light";
  const base = brandKitBaseUrl(brandKit, options.sourceUrl);
  const alt = textOf(brandKit.name);
  const found = logoFromSystem(brandKit, kind, background, base, alt, options);
  if (found || kind !== "wordmark") return found;
  return brandKitLogo(brandKit, { ...options, kind: "primary" });
}
function pickByLocale(variants, locale) {
  const unlocalized = variants.filter((variant) => !textOf(variant.locale));
  const wanted = textOf(locale)?.toLowerCase();
  if (!wanted) return unlocalized[0] ?? variants[0];
  const language = wanted.split("-")[0];
  return variants.find((variant) => textOf(variant.locale)?.toLowerCase() === wanted) ?? variants.find((variant) => textOf(variant.locale)?.toLowerCase().split("-")[0] === language) ?? unlocalized[0] ?? variants[0];
}
function logoFromSystem(brandKit, kind, background, base, alt, options = {}) {
  const variants = Array.isArray(brandKit.logoSystem?.variants) ? brandKit.logoSystem.variants.filter(isPlainObject) : [];
  const ofKind = variants.filter((variant2) => variant2.kind === kind && fileOf(variant2.files));
  const ordered = [
    ...ofKind.filter((item) => item.background === background),
    ...ofKind.filter((item) => item.background === "any"),
    ...ofKind.filter((item) => item.background !== background && item.background !== "any")
  ];
  const wantedName = textOf(options.name)?.toLowerCase();
  const named = wantedName ? ordered.filter((item) => textOf(item.id)?.toLowerCase() === wantedName || textOf(item.name)?.toLowerCase() === wantedName) : [];
  const candidates = named.length ? named : ordered;
  const fitting = candidates.filter((item) => item.background === background || item.background === "any");
  const variant = pickByLocale(fitting.length ? fitting : candidates, options.locale);
  if (!variant) return null;
  const src = resolveBrandKitUrl(fileOf(variant.files), base);
  if (!src) return null;
  return {
    src,
    alt: textOf(variant.name) ?? alt,
    kind,
    background: variant.background,
    ...textOf(variant.locale) ? { locale: variant.locale } : {}
  };
}

// src/uhuu/brand-kit/brand-kit-css-vars.js
var BRAND_KIT_RUNTIME_VERSION = 3;
var ROLE_NAMES = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring"
];
var RUNTIME_ROLE_NAME = new RegExp(`^--(?:color-)?(?:${ROLE_NAMES.join("|")})$`);
function brandKitRuntime(brandKit) {
  const runtime = isPlainObject(brandKit) ? brandKit.runtime : void 0;
  return isPlainObject(runtime) && runtime.version === BRAND_KIT_RUNTIME_VERSION && isPlainObject(runtime.light) ? runtime : void 0;
}
var OK_COMPONENT = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)";
var OKLAB = new RegExp(`^ok(?:lch|lab)\\(\\s*${OK_COMPONENT}\\s+${OK_COMPONENT}\\s+${OK_COMPONENT}(?:\\s*\\/\\s*${OK_COMPONENT})?\\s*\\)$`, "i");
var NUMBER = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)";
var HSL_TRIPLET = new RegExp(
  `^(${NUMBER})(deg|turn|rad|grad)?\\s+(${NUMBER})%\\s+(${NUMBER})%(?:\\s*\\/\\s*(${NUMBER})(%)?)?$`,
  "i"
);
var HSL_FUNCTION = new RegExp(
  `^hsla?\\(\\s*(${NUMBER})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${NUMBER})%\\s*(?:,\\s*|\\s+)(${NUMBER})%\\s*(?:(?:,|\\/)\\s*(${NUMBER})(%)?\\s*)?\\)$`,
  "i"
);
var HUE_UNIT = { deg: 1, turn: 360, rad: 180 / Math.PI, grad: 0.9 };

// src/uhuu/brand-kit/brand-kit-preview.js
var VERSION = /^v[1-9]\d*$/;
var VERSION_IN_PATH = /\/versions\/(v[1-9]\d*)\//;
var VERSION_DOCUMENT = /\/versions\/v[1-9]\d*\/brandkit\.json$/;
var DOCUMENT_VERSION = /^3(\.\d+){0,2}$/;
var LOCAL_HOSTS = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]"]);
var BRANDKIT_TRUSTED_ORIGINS = Object.freeze([
  "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com",
  "https://brandkit.uhuu.io",
  "https://uhuu-layout-kit.s3.eu-west-1.amazonaws.com"
]);
function isTrustedOrigin(url, extraOrigins = []) {
  if (LOCAL_HOSTS.has(url.hostname)) return true;
  return [...BRANDKIT_TRUSTED_ORIGINS, ...extraOrigins].some((origin) => parseUrl(origin)?.origin === url.origin);
}
function parseUrl(value, base) {
  try {
    return new URL(value, base);
  } catch {
    return null;
  }
}
function isFetchable(url) {
  return Boolean(url) && !url.username && !url.password && (url.protocol === "https:" || url.protocol === "http:" && LOCAL_HOSTS.has(url.hostname));
}
function isBrandKitVersionUrl(value) {
  const url = typeof value === "string" ? parseUrl(value) : null;
  return isFetchable(url) && VERSION_DOCUMENT.test(url.pathname);
}
function brandKitUrlVersion(value) {
  const url = typeof value === "string" ? parseUrl(value, "http://localhost/") : null;
  return url ? VERSION_IN_PATH.exec(url.pathname)?.[1] : void 0;
}
function brandKitRelease(brandKit) {
  const release = isPlainObject(brandKit) && isPlainObject(brandKit.generator) ? brandKit.generator.release : void 0;
  if (!isPlainObject(release)) return void 0;
  const version = textOf(release.version);
  const url = textOf(release.url);
  if (!version || !VERSION.test(version) || !isBrandKitVersionUrl(url)) return void 0;
  const teamId = typeof release.teamId === "number" ? String(release.teamId) : textOf(release.teamId);
  const kitId = textOf(release.kitId);
  const appUrl = textOf(release.appUrl);
  return { version, url, ...teamId ? { teamId } : {}, ...kitId ? { kitId } : {}, ...appUrl ? { appUrl } : {} };
}
function brandKitVersionUrl(release, version) {
  const url = new URL(release.url);
  url.pathname = url.pathname.replace(VERSION_IN_PATH, `/versions/${version}/`);
  return url.toString();
}
function brandKitLatestManifestUrl(release) {
  const app = release?.appUrl ? parseUrl(release.appUrl) : null;
  if (!isFetchable(app) || !release.teamId || !release.kitId) return void 0;
  const base = release.appUrl.replace(/\/+$/, "");
  return `${base}/api/brandkit/teams/${encodeURIComponent(release.teamId)}/kits/${encodeURIComponent(release.kitId)}/versions/latest/export/manifest.json`;
}
function resolveBrandCandidate(value, options = {}) {
  const input = typeof value === "string" ? value.trim() : "";
  const kinds = `a version (v9), a version link (\u2026/versions/vN/brandkit.json)${options.origin ? " or a path on this page's origin (/candidate.json)" : ""}`;
  if (!input) return { input, error: `it is empty: pass ${kinds}` };
  if (VERSION.test(input)) {
    const release = brandKitRelease(options.brandKit);
    if (!release) {
      return { input, error: `${input} needs the template's brandkit.json to name its published version (generator.release); pass the version link instead` };
    }
    return { input, url: brandKitVersionUrl(release, input), version: input };
  }
  if (options.origin && input.startsWith("/") && !input.startsWith("//")) {
    const page = parseUrl(options.origin);
    const url2 = page ? parseUrl(input, page) : null;
    if (!url2 || url2.origin !== page.origin) return { input, error: `${input} is not a path on this page's origin` };
    const version = VERSION_IN_PATH.exec(url2.pathname)?.[1];
    return { input, url: url2.toString(), ...version ? { version } : {} };
  }
  const url = /^https?:\/\//i.test(input) ? parseUrl(input) : null;
  if (!url) return { input, error: `${input} is not ${kinds}` };
  if (!isFetchable(url)) return { input, error: `${input} is not an https link without credentials` };
  if (!isTrustedOrigin(url, options.extraOrigins)) {
    return { input, error: `${url.origin} is not a Brand Kit origin (${BRANDKIT_TRUSTED_ORIGINS.join(", ")})` };
  }
  if (!VERSION_DOCUMENT.test(url.pathname)) {
    return {
      input,
      error: `${input} is not a published version (\u2026/versions/vN/brandkit.json): a kit's root brandkit.json and versions/latest change with every publish`
    };
  }
  return { input, url: url.toString(), version: VERSION_IN_PATH.exec(url.pathname)[1] };
}
function brandKitDocumentProblem(document) {
  if (!isPlainObject(document)) return "it is not a JSON object";
  if (typeof document.version !== "string" || !DOCUMENT_VERSION.test(document.version)) {
    return `its version is ${JSON.stringify(document.version ?? null)}, not 3.x`;
  }
  if (!isPlainObject(document.runtime) || document.runtime.version !== 3) return "it has no runtime version 3";
  return void 0;
}
function brandKitLabel(brandKit, version = brandKitRelease(brandKit)?.version) {
  const name = isPlainObject(brandKit) ? textOf(brandKit.name) : void 0;
  return [name, version].filter(Boolean).join(" ") || void 0;
}
function runtimeVariables(brandKit) {
  const light = brandKitRuntime(brandKit)?.light ?? {};
  return Object.fromEntries(Object.entries(light).filter(([, value]) => typeof value === "string" || typeof value === "number").map(([name, value]) => [name, String(value)]));
}
function fontFamilies(brandKit) {
  if (!isPlainObject(brandKit)) return {};
  const fonts = isPlainObject(brandKit.fonts) ? brandKit.fonts : {};
  const assignments = isPlainObject(brandKit.assignments) ? brandKit.assignments : {};
  const families = {};
  const assigned = /* @__PURE__ */ new Set();
  for (const [slot, id] of Object.entries(assignments)) {
    if (!slot.startsWith("font.") || typeof id !== "string") continue;
    assigned.add(id);
    const family = isPlainObject(fonts[id]) ? textOf(fonts[id].family) : void 0;
    if (family) families[slot.slice("font.".length)] = family;
  }
  for (const [key, font] of Object.entries(fonts)) {
    const family = isPlainObject(font) ? textOf(font.family) : void 0;
    if (family && !assigned.has(key) && !(key in families)) families[key] = family;
  }
  return families;
}
function logoFiles(brandKit) {
  const files = {};
  for (const kind of ["primary", "mark"]) {
    const light = brandKitLogo(brandKit, { kind, background: "light" })?.src;
    const dark = brandKitLogo(brandKit, { kind, background: "dark" })?.src;
    if (light) files[kind] = light;
    if (dark && dark !== light) files[`${kind} on dark`] = dark;
  }
  return files;
}
function compare(kind, before, after, changes) {
  for (const name of /* @__PURE__ */ new Set([...Object.keys(before), ...Object.keys(after)])) {
    if (before[name] === after[name]) continue;
    changes.push({ kind, name, ...name in before ? { before: before[name] } : {}, ...name in after ? { after: after[name] } : {} });
  }
}
function brandKitChanges(before, after) {
  const changes = [];
  compare("variable", runtimeVariables(before), runtimeVariables(after), changes);
  compare("font", fontFamilies(before), fontFamilies(after), changes);
  compare("logo", logoFiles(before), logoFiles(after), changes);
  return changes;
}
function describeBrandKitChange(change) {
  const label = change.kind === "font" ? `Font ${change.name}` : change.kind === "logo" ? `Logo ${change.name}` : change.name;
  if (change.before === void 0) return `${label}: added, ${change.after}`;
  if (change.after === void 0) return `${label}: removed (was ${change.before})`;
  return `${label}: ${change.before} \u2192 ${change.after}`;
}

// src/cli/brand-command.js
var DEFAULT_BRAND_FILE = "src/brand/brandkit.json";
var STATUS_TIMEOUT_MS = 5e3;
var DOWNLOAD_TIMEOUT_MS = 2e4;
var USAGE = `Usage: uhuu-components brand <command> [--file <path>]

Commands:
  brand status                  The brand version the template holds, and whether a newer one is published
  brand activate <vN | link>    Replace the brand file with a published version: v9, or a
                                https://\u2026/versions/vN/brandkit.json link

Options:
  --file <path>   The template's brand file (default: ${DEFAULT_BRAND_FILE})
  -h, --help      This help

Preview a version before activating it: open the template's development page with ?brand=v9.`;
var messageOf = (error) => error instanceof Error ? error.message : String(error);
var decode = (bytes) => new TextDecoder().decode(bytes);
var versionNumber = (version) => Number(version.slice(1));
function parseArgs(args) {
  const positional = [];
  let file = DEFAULT_BRAND_FILE;
  let help = false;
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "-h" || arg === "--help") help = true;
    else if (arg === "--file") {
      file = args[i + 1];
      i += 1;
      if (!file) return { error: "--file needs a path" };
    } else if (arg.startsWith("--file=")) {
      file = arg.slice("--file=".length);
      if (!file) return { error: "--file needs a path" };
    } else if (arg.startsWith("-")) return { error: `unknown option ${arg}` };
    else positional.push(arg);
  }
  return { positional, file, help };
}
async function readBrandFile(file) {
  let bytes;
  try {
    bytes = await readFile(file);
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
  let document;
  try {
    document = JSON.parse(decode(bytes));
  } catch {
    document = void 0;
  }
  return { bytes, document };
}
async function newestVersion(manifestUrl, doFetch) {
  const response = await doFetch(manifestUrl, { redirect: "manual", signal: AbortSignal.timeout(STATUS_TIMEOUT_MS) });
  await response.body?.cancel?.().catch(() => {
  });
  const location = response.headers?.get?.("location");
  if (response.status >= 300 && response.status < 400 && location) {
    const version = brandKitUrlVersion(new URL(location, manifestUrl).toString());
    if (version) return version;
    throw new Error(`Brand Kit redirected to ${location}, which names no version`);
  }
  if (response.status === 404) throw new Error("Brand Kit has no published version of this brand (404)");
  throw new Error(`Brand Kit answered ${response.status} instead of a redirect`);
}
async function brandStatus({ file, shown, io }) {
  let held;
  try {
    held = await readBrandFile(file);
  } catch (error) {
    io.log(`Could not read ${shown}: ${messageOf(error)}`);
    return;
  }
  if (!held) {
    io.log(`No brand file at ${shown}. Take a published version with: uhuu-components brand activate <\u2026/versions/vN/brandkit.json>`);
    return;
  }
  if (!isPlainObject(held.document)) {
    io.log(`${shown} is not a brandkit.json (not a JSON object).`);
    return;
  }
  const release = brandKitRelease(held.document);
  const name = brandKitLabel(held.document, null) ?? "The brand";
  if (!release) {
    io.log(
      `${name} (${shown}) does not name its published version (no generator.release), so newer versions cannot be looked up.
  Take a version by its link to start: uhuu-components brand activate <\u2026/versions/vN/brandkit.json>`
    );
    return;
  }
  const label = brandKitLabel(held.document);
  const manifest = brandKitLatestManifestUrl(release);
  if (!manifest) {
    io.log(`${label} (${shown}) \xB7 its generator.release names no Brand Kit app (appUrl), so newer versions cannot be looked up.`);
    return;
  }
  let newest;
  try {
    if (typeof io.fetch !== "function") throw new Error("this Node has no fetch (Node 18 or newer needed)");
    newest = await newestVersion(manifest, io.fetch);
  } catch (error) {
    io.log(`${label} (${shown}) \xB7 could not check for newer versions: ${messageOf(error)}`);
    return;
  }
  const ahead = versionNumber(newest) - versionNumber(release.version);
  if (ahead > 0) {
    io.log(
      `${label} \xB7 ${newest} available (${ahead} newer)
  Preview: open the template with ?brand=${newest}
  Take it: uhuu-components brand activate ${newest}`
    );
  } else if (ahead === 0) {
    io.log(`${label} \xB7 up to date`);
  } else {
    io.log(`${label} \xB7 the newest published version is ${newest}`);
  }
}
async function download(url, doFetch) {
  const response = await doFetch(url, { headers: { accept: "application/json" }, signal: AbortSignal.timeout(DOWNLOAD_TIMEOUT_MS) });
  if (!response.ok) throw new Error(`answered ${response.status}`);
  if (response.redirected && response.url && !isBrandKitVersionUrl(response.url)) {
    throw new Error(`redirected to ${response.url}, which is not a published version`);
  }
  return Buffer.from(await response.arrayBuffer());
}
function commitMessage(before, after, version) {
  const from = brandKitRelease(before)?.version;
  const name = brandKitLabel(after, null) ?? brandKitLabel(before, null) ?? "brand";
  const previousName = brandKitLabel(before, null);
  if (previousName && previousName !== name) return `Brand: ${brandKitLabel(before) ?? previousName} \u2192 ${brandKitLabel(after, version)}`;
  return from ? `Brand: ${name} ${from} \u2192 ${version}` : `Brand: ${name} ${version}`;
}
async function brandActivate({ target, file, shown, io }) {
  let held;
  try {
    held = await readBrandFile(file);
  } catch (error) {
    io.error(`Not activated: could not read ${shown} (${messageOf(error)}).`);
    return 1;
  }
  const candidate = resolveBrandCandidate(target, { brandKit: held?.document, extraOrigins: io.extraOrigins });
  if ("error" in candidate) {
    io.error(`Not activated: ${candidate.error}.`);
    return 1;
  }
  if (typeof io.fetch !== "function") {
    io.error("Not activated: this Node has no fetch (Node 18 or newer needed).");
    return 1;
  }
  let bytes;
  try {
    bytes = await download(candidate.url, io.fetch);
  } catch (error) {
    io.error(`Not activated: ${candidate.url} ${messageOf(error)}.`);
    return 1;
  }
  let document;
  try {
    document = JSON.parse(decode(bytes));
  } catch {
    io.error(`Not activated: ${candidate.url} is not JSON.`);
    return 1;
  }
  const problem = brandKitDocumentProblem(document);
  if (problem) {
    io.error(`Not activated: ${candidate.url} is not a current Brand Kit document (${problem}).`);
    return 1;
  }
  const before = held?.document;
  const label = brandKitLabel(document, candidate.version);
  if (held && Buffer.compare(held.bytes, bytes) === 0) {
    io.log(`${shown} already holds ${label}; nothing written.`);
    return 0;
  }
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, bytes);
  const from = before === void 0 ? void 0 : brandKitLabel(before) ?? "a brand without a version";
  const changes = before === void 0 ? [] : brandKitChanges(before, document);
  const message = commitMessage(before, document, candidate.version);
  const lines = [
    `Activated ${label} in ${shown}${from ? ` (was ${from})` : ""}.`,
    `  Written as published: ${bytes.length} bytes from ${candidate.url}`,
    ""
  ];
  if (before === void 0) {
    lines.push(held ? `${shown} was not JSON before, so there is nothing to compare.` : `${shown} is new.`);
  } else if (changes.length) {
    lines.push(`What changed (${changes.length}):`, ...changes.map((change) => `  ${describeBrandKitChange(change)}`));
  } else {
    lines.push("No runtime variable, font or logo changed.");
  }
  lines.push(
    "",
    "Check the template (pages, pagination, print preview), then commit:",
    `  git add ${shown} && git commit -m ${JSON.stringify(message)}`
  );
  io.log(lines.join("\n"));
  return 0;
}
async function runCli(args, io) {
  const parsed = parseArgs(args);
  if (parsed.error) {
    io.error(`uhuu-components: ${parsed.error}

${USAGE}`);
    return 1;
  }
  const [group, command, ...rest] = parsed.positional;
  if (parsed.help) {
    io.log(USAGE);
    return 0;
  }
  if (group !== "brand" || command !== "status" && command !== "activate") {
    const named = [group, command].filter(Boolean).join(" ");
    io.error(`${named ? `uhuu-components: unknown command "${named}"

` : ""}${USAGE}`);
    return 1;
  }
  const file = path.resolve(io.cwd, parsed.file);
  const shown = parsed.file;
  if (command === "status") {
    try {
      await brandStatus({ file, shown, io });
    } catch (error) {
      io.log(`Could not check ${shown}: ${messageOf(error)}`);
    }
    return 0;
  }
  if (rest.length !== 1) {
    io.error(`brand activate takes one version: v9, or a \u2026/versions/vN/brandkit.json link.

${USAGE}`);
    return 1;
  }
  return brandActivate({ target: rest[0], file, shown, io });
}

// src/cli/uhuu-components.js
runCli(process.argv.slice(2), {
  cwd: process.cwd(),
  fetch: globalThis.fetch,
  // Extra Brand Kit origins (a CDN, a staging deployment), comma-separated.
  extraOrigins: (process.env.UHUU_BRANDKIT_ORIGINS ?? "").split(",").map((origin) => origin.trim()).filter(Boolean),
  log: (text) => process.stdout.write(`${text}
`),
  error: (text) => process.stderr.write(`${text}
`)
}).then(
  (code) => {
    process.exitCode = code;
  },
  (error) => {
    process.stderr.write(`uhuu-components: ${error?.stack ?? error}
`);
    process.exitCode = 1;
  }
);
