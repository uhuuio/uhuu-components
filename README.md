<!-- Generated from uhuu-storybook/docs/package-readme.md; edit the owning source. -->

# Uhuu Components

React components for printable documents with fixed pages, static flow pagination, interactive editing, image bleed/spread layouts and BrandKit styling.

## Install

```sh
npm install uhuu-components@^0.3.1 react react-dom
```

The delivery package declares React and React DOM `^18.0.0 || ^19.0.0` peers. Both must use the same React installation. Local owning verification uses React 19; the declared React 18 range is not evidence of a tested React 18 release. UI dependencies are bundled; React and React DOM remain external. No Next dependency is required by the delivery package.

## Fixed pages and static flow

```jsx
import { Static } from 'uhuu-components'

export function Document() {
  return (
    <Static.Pagination>
      <Static.Sheet width={210} height={297}>
        <h1>Document</h1>
      </Static.Sheet>
    </Static.Pagination>
  )
}
```

Page dimensions and bleed use millimetres. `Static.FlowPage`, `Static.FlowArea`, `Static.Flow` and `Static.FlowColumns` paginate explicit content inside static pages. Templates keep their layout and data rules. See [static flow pagination](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/static-flow-pagination.md) and [cover/spine printing](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/printer-cover-spine-support.md).

## Editor and field dialogs

`EditorShell` exports `TemplateDataProvider`, `PageEditor`, `InteractiveModeProvider`, `useInteractive` and `useIntegrationAdapter`. PageEditor owns the editing shell, page management and print filtering; its dialogs and internal helpers are not separate package exports.

```jsx
import { Editable, getDialogProps } from 'uhuu-components'

<Editable dialog={{ path: 'title', type: 'text', value: title }}>{title}</Editable>
<p {...getDialogProps({ dialog: { path: 'intro', type: 'textarea', value: intro } })}>
  {intro}
</p>
```

Dialog click handlers are omitted in renderer mode. Empty text bindings remain editable; templates control their print visibility and Markdown renderer. See the [editor shell guide](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/editor-shell.md).

## Images and BrandKit

Use public `ImageBlock` with `mode="bleed"`, `mode="spread"` or `mode="auto"`; internal ImageBleed and ImageSpread components are not package exports. `imageUrl` provides print-aware thumbnail URLs and preserves SVG/data/relative URLs.

```jsx
import { BrandKitProvider, ImageBlock, imageUrl } from 'uhuu-components'

<BrandKitProvider brandKit={brandKit}>
  <img src={imageUrl(cover)} alt="" />
  <ImageBlock src={cover} mode="bleed" width={210} height={297} bleed={3} />
</BrandKitProvider>
```

`BrandKitProvider` and `useBrandKit` apply accepted kit runtime tokens, load declared fonts and expose logo, collection, map and environment helpers. `src` can fetch a kit while `brandKit` supplies its fallback. See [BrandKit runtime](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/brand-kit-runtime.md) and [image URLs](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/image-url.md).

## Package entries and ownership

ESM imports and CommonJS `require('uhuu-components')` expose the same public root API. The single UMD artifact is `uhuu-components.umd.cjs`; it also exposes `UhuuComponents` when loaded as a browser script. Direct URLs to older `.umd.js` files remain part of those pinned releases; future releases use `.umd.cjs`.

See [distribution surface](https://github.com/uhuuio/uhuu-storybook/blob/main/docs/distribution-surface.md) for the measured exports and bundled dependency boundary. Release notes are included in `CHANGELOG.md`.

Source, stories, documentation and release generation belong to [uhuu-storybook](https://github.com/uhuuio/uhuu-storybook). The [uhuu-components delivery repository](https://github.com/uhuuio/uhuu-components) contains generated releases. Build in Storybook, then explicitly hand off the reviewed artifacts. The generated README must be changed in Storybook's `docs/package-readme.md`.
