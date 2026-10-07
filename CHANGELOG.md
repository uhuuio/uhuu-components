# Changelog

All notable changes to the `uhuu-components` Storybook workspace are documented here.

## 0.3.1 (unreleased)

### Changed

- Generate the delivery README from owning Storybook package documentation and include the source CHANGELOG with every release. Public documentation describes current static/flow, editor, image and BrandKit APIs.
- Ship one UMD artifact, `uhuu-components.umd.cjs`, for CommonJS and browser-global use, with its matching source map. The duplicate `.umd.js` is removed from future releases; package-root ESM and CommonJS entries remain compatible. Direct `.umd.js` URLs must stay on their existing pinned release or migrate to `.umd.cjs`.
- Replace the public handoff repository’s unrelated application ignore rules with package-specific rules. The published 0.3.0 artifacts remain immutable.

## 0.3.0

### Changed

- `BrandKitProvider` applies a Brand Kit `brandkit.json.runtime` block (`version: 2`, brandkit.json
  "2.0") as published, with the token chains skipped:
  - shadcn/ui role variables, `--<role>` and `--color-<role>` (`--primary`, `--muted-foreground`,
    `--chart-1` …), so Tailwind v4's `bg-primary` / `text-muted-foreground` resolve with no bridge;
  - the `--color-kit-*` / `--font-kit-*` aliases with the meanings templates were written against
    (`kit-muted` is grey text, `kit-secondary` the strong second brand colour);
  - `--font-<role>`.
  Entries are re-validated against an allowlist of names (a published document cannot set
  `--radius` or `--spacing`) and the colour policy. Fonts come from `runtime.fontStylesheets` and
  `runtime.fontFaces` (through the same `@font-face` builder), so only what the four font roles use
  is loaded. Any other `runtime` (including the never-published `version: 1`) is ignored and the
  chains apply. `defaults` still fill gaps; the kit wins.
- **Colour policy:** `oklch()` and `oklab()` with plain components pass as written (Brand Kit
  publishes oklch; Chrome prints it since 111). Relative colour syntax and nested functions are
  still skipped.
- Kits without `runtime` (template-bundled kits) also land Brand Kit's
  `tokens.light.semantic` roles on `--<role>` / `--color-<role>`. Flat tokens never feed a role:
  extracted kits use some of these words with other meanings (`muted` is grey text there).
- New `BrandKitJson.runtime` / `colorMode` types (`BrandKitRuntimeBlock`, `version: 2`).
- **The provider loads the kit.** `src` fetches a brandkit.json (`brandKitSourceUrl(payload)` reads
  `brandKitUrl`, `kit-…` ids with `brandKitTeamId`, or `brandKit.storage.publicUrl`); the `brandKit`
  prop renders until it arrives and when the fetch fails. `status` (and `data-uhuu-brand-kit-status`
  on the scope element) is `idle`, `loading`, `ready` or `error`. `loadBrandKit` is exported.
- **Assets from the kit.** `useBrandKit()` adds `logo({ kind, background })` (Brand Kit's
  `logoSystem` first, then `logos`, then template-bundled shapes), `collection(kind)` (the assigned
  media collection's promoted version, items resolved), `mapStyle(mode)`, `env(keys)` and
  `resolveUrl(path)`, all resolving relative paths against the kit's `baseUrl` or its source URL.
  The same functions are exported (`brandKitLogo`, `brandKitCollection`, `brandKitMapStyle`,
  `brandKitEnv`). Templates delete their copied `src/brandkit/brand-kit-client.js` and
  `BrandKitContext.jsx`; the registry-style.json request they made is gone (`runtime` carries the
  shadcn roles).
- The Brand Kit Switcher story renders through `BrandKitProvider` and includes Brand Kit's golden
  kit (`test/fixtures/golden-brandkit.json`, copied from uhuu-brandkit, brandkit.json "2.0").
- The copy of `dist/` into the open-source handoff checkout is an explicit step,
  `npm run release:handoff` (`scripts/handoffDist.js`, with `HANDOFF_DIR` / `--handoff-dir` and
  `--dry-run`). `npm run build` writes only under `dist/` and no longer overwrites the public
  package tree as a side effect. `scripts/release-components.sh` runs build → handoff → verify.
  Covered by `test/handoff-dist.test.mjs`.
- Release pipeline (`.github/workflows/release-components.yml`): installs with pnpm
  (`pnpm/action-setup` reading the new `packageManager` pin, `pnpm install --frozen-lockfile`,
  pnpm store cache) instead of `npm ci` against the absent `package-lock.json`; runs the test suite
  after the build; reads `HANDOFF_REPO_TOKEN` / `NPM_TOKEN` only in the opt-in jobs through `env:`
  with fail-fast checks, publishes through `actions/setup-node`'s registry `.npmrc`, and keeps
  `GITHUB_TOKEN` read-only. `pnpm test` now builds first (`pnpm test:unit` skips the build).

## 0.2.98

### Added

- `getDialogProps` is exported for binding a template's own element to a dialog, using the same
  renderer guard and markers as `Editable` and `ImageBlock`.
- `imageUrl` provides shared thumbnail sizing, source encoding, SVG pass-through and empty-image
  handling. See [image-url.md](docs/image-url.md).
- `BrandKitProvider` and `useBrandKit` share token mapping, font loading and CSS variable scoping.
  Brand fallbacks stay in templates. Font assets honor face-level stylesheets, root-relative URLs
  and declared Google Fonts styles. See [brand-kit-runtime.md](docs/brand-kit-runtime.md).

### Removed

- The unused internal `imgOptim` / `imgBlank` helpers (`src/uhuu/utility/helpers.js`). They were
  never exported from the package root.

### Fixed

- Empty `text`, `textarea` and `markdown` bindings stay clickable in the interactive editor.
  `Editable` and `Static.FlowDocument` mark empty text content; elements bound with `getDialogProps`
  use `data-uhuu-type` and `:empty`. The one-line affordance is scoped to editor screen output.
  Templates control whether empty fields preserve space or disappear in print.
- The library continues to leave Markdown rendering and typography to templates; wrap the
  template's renderer in `Editable` and pass `null` for empty text. No Markdown runtime is bundled.

## 0.2.96

### Added

- **Cover spread geometry for perfect binding (`Static.planCoverSpread`, `Static.resolveSheetSize`).**
  Pure, DOM-free planner in `src/uhuu/pagination-static/spread-core.js` that turns
  `pageFormat.binding = { spine, glue }` plus the filtered cover pages into the printer's two
  wide sheets — outer (back cover · spine · front cover) and inner (inside front · blank
  spine + glue zones · inside back) — with panel, spine and glue boxes in mm. Verified in
  `test/cover-spread-core.test.mjs` against the approved Lienhardt InDesign export
  (429 × 303 mm with 3 mm bleed) and the hand-coded Prozentbuch A6 cover sheet. `BindingConfig`
  is typed on `pageFormat` / `PrintConfig.pageFormat` (see `docs/printer-cover-spine-support.md`).
- **`Static.CoverSpread` — one physical cover sheet for the Static-only template path.**
  `sheet="outer"` renders back cover · spine · front cover, `sheet="inner"` inside front · blank
  spine + glue masks · inside back. Panels are ordinary `Static.Sheet`s clipped at the spine, so
  ImageBlock/overlays keep their bleed contract and full-bleed artwork is cut cleanly at the spine;
  glue zones and the inner spine are masked to `--uhuu-paper-color`. With `showBleed` the spine and
  glue strips carry hatched, labelled screen-only guides. Without a binding the panels degrade to
  two plain sheets. Story: `Pagination/Cover Spread` (Lienhardt A4, Prozentbuch A6, outer only,
  saddle-stitch fallback, print preview). Rendered-DOM contract tested from the built package in
  `test/cover-spread-render.test.mjs`.
- **`PageEditor` composes perfect-binding cover spreads.** With `pageFormat.binding = { type: 'perfect',
  spine, glue }` and `pageFilter.mode === 'cover'`, the filtered cover pages are laid out on the
  printer's sheets through `Static.CoverSpread`: outer (back cover · spine · front cover) and inner
  (inside front · blank spine + glue masks · inside back). `binding` is ignored in `all`/`text`
  modes, so it can live in the base page format or in `printConfigs.cover.pageFormat`; the dev
  print switcher picks it up unchanged. `two_pages` preview is coerced to single-page while a
  spread is active. Cover page components receive a `spread` prop (`{ sheet, side, spine, glue,
  bleed }`), and `templateConfig.spine.component` paints the outer spine strip (`SpineComponentProps`).
  Thumbnails, add/reorder dialogs and flow measurement always use a binding-less setup so the
  `@page` size never flips. Unsupported cases (coverPageCount other than 1 or 2, saddle stitch)
  fall back to plain cover pages with a one-time dev warning. Decision logic is pure
  (`cover-spread-layout.js`, tested in `test/cover-spread-layout.test.mjs`); stories under
  `EditorShell/Cover Spine`.
- **Sheet-level CSS vars drive `@page`.** `--uhuu-sheet-width/height` default to page + bleed and
  become `2 × width + spine + 2 × bleed` while `setup.binding.spine > 0`, alongside
  `--uhuu-spine-width`, `--uhuu-glue-width` and `--uhuu-paper-color`. `PageSizeUtils.resolveCssVars`
  exposes the map; `config.page` now also carries `binding` and `sheet`.

### Changed

- **`PageSizeUtils.pageParams` returns the page config without a DOM.** Root CSS vars are only
  written when `document` exists, but `ConfigContext` consumers (Sheet, CoverSpread, ImageBlock) now
  see the same `page` during server rendering as in the browser; previously the context was empty on
  the server.

### Fixed

- **Editable nodes no longer override template layout utilities.** The indicator's fallback
  `position: relative` now lives in Tailwind's `components` layer, so a template's normal
  `absolute` utility wins in the editor as it does in renderer mode. Existing inline, important,
  and wrapper workarounds remain compatible but are no longer needed.

### Changed

- **`PageEditor` now opens fitted to the page.** `defaultZoomMode` defaults to `fit-page`
  instead of `manual`, so a document loads with a whole sheet visible rather than at the
  numeric `defaultZoom` (80%), which left large formats cropped on both axes until the author
  opened the zoom menu. Fit keeps tracking layout and viewport changes until a manual zoom
  (toolbar entry, ± buttons, Ctrl/Cmd-wheel or pinch) clears it. Pass
  `defaultZoomMode="manual"` to restore the previous numeric-zoom start.

### Fixed

- **A starting fit mode no longer flashes the unfitted page.** Fit cannot resolve during the
  first commit — `Section` publishes its natural size from an effect — so the editor painted
  `defaultZoom` for a frame or two before snapping to the fitted zoom. The sheet stack now stays
  `visibility: hidden` (still laid out, so the measurements fit needs keep arriving) until the
  first fit lands, with a 1s reveal fallback so an unmeasurable document can never stay hidden.

- **Pointer-anchored zoom now holds the point it was given.** The focal correction measured the
  whole page stack, but the stack's height is *affine* in zoom rather than proportional — every
  section contributes a header and spacer that stay a fixed pixel size, so it measures
  `naturalTotal * zoom + chromeTotal`. `zoomFocalScrollDelta` maps a point by the ratio of the
  before/after rects, which only holds for a uniformly scaled box, so the anchor drifted by the
  accumulated chrome: **~64px going 122% → 200%**, and worse the deeper the target sat in the
  document. The correction now anchors on the individual sheet under the pointer
  (`pickZoomFocalAnchor`), which *is* uniformly scaled, making the mapping exact. Note the
  earlier "sub-pixel" verification of this path was circular — it re-derived the expected
  position with the same formula under test — so the drift went unnoticed.

- **Fit to Page no longer behaves like Fit to Width, and Fit to Height no longer overshoots.**
  The pan viewport's geometry lived only in `section-page-resizer.css`, and not every consumer
  ends up with that stylesheet — Template Studio renders the editor in an iframe whose document
  never receives it. Without those rules the pane degraded to a plain block reporting its whole
  content height (measured: **4711px inside a 665px iframe**), so fit divided by a viewport
  seven times too tall: Fit to Height computed **413%** (clamped to `maxZoom`) and Fit to Page,
  being `min(width, height)`, always collapsed to the width value. The pane and its content box
  now carry their load-bearing geometry as inline styles, and `resolveFitPaneHeight` clamps the
  measured pane to the space actually visible in its own document, so a mis-sized pane can no
  longer corrupt fit. Verified in the Studio iframe: pane height now tracks the iframe viewport
  (665 → 851 on resize) and Fit to Width / Fit to Height resolve to distinct values
  (84.1% / 47.4%) where they were previously 90.2% / 413%.

## 0.2.90

### Fixed

- **A zoomed-in page can be scrolled to on both sides.** `SectionPageResizer` had no scroll
  container of its own, so it rode the document scroller while centering the page stack with
  `items-center`. Horizontal overflow was therefore split evenly to the left and right, and
  because `scrollLeft` cannot go negative the left half was permanently unreachable —
  measured at 277px of a 554px overflow in a 716px viewport. The editor now renders its own
  pan viewport, so every pixel of the sheet is reachable at any zoom, in single-page and
  facing modes alike.
- **Pointer-anchored zoom no longer drifts once zoomed in.** The scroll correction clamped at
  `scrollLeft: 0` whenever the anchor sat left of centre, silently losing the point under the
  cursor. With a real scroller on both axes the anchor now holds to sub-pixel accuracy
  wherever scroll range exists.
- **The toolbar zoom controls keep their place.** `+` / `−` and the `%` input previously did
  no scroll correction at all and drifted the viewport; all zoom entry points now share one
  path and anchor on the centre of the visible pane.
- **Fit to Width / Height / Page measure real space.** Fit used fixed `32px` / `120px` insets
  against the window; it now uses the pane's own box, its rendered gutters, and the measured
  section chrome.

### Changed

- **`SectionPageResizer` scrolls itself rather than the document.** Hosts that already provide
  a scroller and want the previous behavior can pass `scrollMode="document"`. Note that the
  editor no longer grows the page, so host-level page scrolling is replaced by pane scrolling.

## 0.2.87

### Fixed

- **The image options menu ("Edit image" / "Annotate") stays on the image in bleed and spread
  mode.** It was rendered as a sibling of the absolutely positioned image container, so it
  anchored to the page and landed in the page header — templates using `top`/`left`/`right`/
  `bottom` insets (satellite and cadastral spreads) had to reposition it by hand. It is now
  anchored to the image rect, clamped to the page the image renders on, so both halves of a
  spread get the menu on their own visible corner. Bleed, spread and the anchor share one
  width calculation (`image-anchor-geometry.ts`) so they cannot drift apart.

## 0.2.86

### Fixed

- **Wheel / pinch zoom keeps the pointer-anchored location.** After Ctrl/Cmd-wheel or trackpad
  pinch, SectionPageResizer corrects document scroll so content under the pointer (e.g. a later
  page) does not jump toward the first page as sheet heights grow.

## 0.2.85

### Added

- **PageEditor / SectionPageResizer support Ctrl/Cmd-wheel and trackpad-pinch zoom.** Plain wheel
  still scrolls; modifier or pinch zooms proportionally (~0.3%/px, rAF-batched) and clears fit
  mode the same way the toolbar ± controls do.

## 0.2.84

### Fixed

- **Single-page Fit to Page no longer sums every stacked sheet width.** Fit targets the first
  sheet only (facing mode still fits the first pair). Multi-page documents no longer clamp to
  `minZoom` (e.g. 25%) on load when `defaultZoomMode="fit-page"`.

### Added

- Added `Static.FlowColumns` and `Static.planFlowColumnChunks` for bounded, non-recursive
  sequential/parallel Flow stories. Each column advances its measured cursor independently on
  every output page, exhausted tracks preserve their geometry, and all leaf keep/break/header,
  oversized-item, and no-progress behavior continues to come from the existing Flow planner.
- Added column-scoped render hooks for track width, distribution, stack alignment, and measured
  child spacing so authoring previews and published output can consume one authoritative plan.

### Fixed

- Discarded short-page placement attempts no longer emit false unplaceable diagnostics when a
  whole column group is successfully retried on a fresh page.
- Keep-with-next and avoid-break bundles now retry on a fresh physical page when the remaining
  space would orphan their first leaf; composite header height determines whether that retry can
  succeed.
- Repeated group headers retain continuation and `repeatHeader: false` state independently inside
  each column, with header measurements scoped by column group, track, and group key.
- Column plans now reject duplicate/missing layout identities and leaf indexes before rendering,
  terminate a page after controlled unplaceable output, and fail closed on any no-progress state.
- Measurement and output now share a geometry-invariant track contract: page-dependent column
  styles and unmeasured vertical wrapper spacing are unsupported, while measured child margins
  remain the canonical stack-gap mechanism.

- **PageEditor can now start in a layout-tracking fit mode.** `defaultZoomMode="fit-page"`
  measures the current preview viewport and sheets directly, then keeps fit current through content
  and viewport changes until the author chooses a manual zoom.

- **The package root is now a real dual ESM/CommonJS public API.** `import { Static } from
  "uhuu-components"` resolves to the ESM bundle while CommonJS consumers resolve a `.cjs` copy of
  the UMD bundle. Consumers no longer need a distribution-file deep import.

- Aligned `src/index.d.ts` with the actual minimal root runtime exports (`Static`, `EditorShell`,
  `ImageBlock`, `Editable`) so TypeScript consumers are not offered imports that fail at runtime.
- Corrected the ImageBlock manifest to describe the existing root named import from
  `uhuu-components`, not an unpublished `uhuu-components/ImageBlock` subpath.
- Made handoff checksum comparison explicit via `--compare-handoff` and kept CI npm publishing
  downstream of a synced handoff repo checkout.
- Fixed the cross-repo Print Document Contract link in `docs/print-mode.md`.

### Added

- GitHub Actions release workflow (`.github/workflows/release-components.yml`): tag `v*` or
  `workflow_dispatch` build, dist integrity checks, sha256 bundle output, version bump guard vs npm
  `latest`, optional handoff sync (`HANDOFF_REPO_TOKEN`) and npm publish (`NPM_TOKEN`).
- Release verification script `scripts/verifyDistRelease.js`, manual fallback
  `scripts/release-components.sh`, and `npm run release:verify`.
- Component manifest pilot for `ImageBlock` (`src/manifests/image-block.manifest.json`) with JSON Schema (`src/manifests/component-manifest.schema.json`), docs (`docs/component-manifests.md`), validation test (`test/manifests.test.mjs`), and Storybook manifest story (`stories/ImageBlockManifest.stories.tsx`).
