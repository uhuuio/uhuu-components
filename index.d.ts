// Public API for `uhuu-components` (mirrors src/index.js). Copied to dist/index.d.ts on build.
import type {
  ComponentType,
  CSSProperties,
  HTMLAttributes,
  ImgHTMLAttributes,
  Key,
  MouseEventHandler,
  ReactElement,
  ReactEventHandler,
  ReactNode,
} from "react";

export interface StaticFlowItemMeta {
  breakBefore?: boolean;
  breakAfter?: boolean;
  keepWithNext?: boolean | number;
  /** Never split the item; with `groupKey`, also move its avoid-break group as one. */
  avoidBreakInside?: boolean;
  groupKey?: string;
  /** An item split between the lines of its `Flow.Text`: fewest lines on a piece that ends a page. Default 2. */
  orphans?: number;
  /** An item split between the lines of its `Flow.Text`: fewest lines on the piece that starts the next page. Default 2. */
  widows?: number;
  /**
   * The screen view (`PageEditor` `view="screen"`): where print would scale the item onto a page of
   * its own (taller than its page, and not split by a `Flow.Text`), it is drawn whole at full
   * size and its sheet grows to hold it. Taller than any page, it starts right under what precedes
   * it. Print ignores it, and so does an item inside a `Flow.Columns` column group.
   */
  growSheet?: boolean;
}

/**
 * The lines of an item's `Flow.Text` (`Flow.measure.readFlowTextLines`), in layout px
 * from the item's measured origin: each line box's top and bottom, and the UTF-16 text offset
 * (across the FlowText's text nodes in order) where it starts. `end`: the text's length.
 */
export interface StaticFlowItemLines {
  /** `hyphen`: the line ends with a hyphen the browser drew (`hyphens: auto`, a soft hyphen). */
  lines: Array<{ top: number; bottom: number; start: number; hyphen?: boolean }>;
  end: number;
  justify: boolean;
  /** The text's computed CSS `orphans` / `widows`, where the browser reports them; the item's meta wins. */
  orphans?: number;
  widows?: number;
}

/** One piece of an item split between the lines of its `Flow.Text`. */
export interface StaticFlowTextSplit {
  /** 0-based piece number. */
  part: number;
  parts: number;
  /** The piece's text: UTF-16 offsets `[from, to)` across the FlowText's text. */
  from: number;
  to: number;
  /** Justified text: a piece that ends mid-paragraph justifies its last line too. */
  justify?: boolean;
  /** The planned height of the piece's lines, in layout px. */
  textHeight?: number;
  /**
   * Text offsets where the piece's measured lines broke with a hyphen (`hyphens: auto`, a soft
   * hyphen), its own end included: the piece breaks there again, and ends with a hyphen there.
   */
  hyphens?: number[];
}

/** Why an item's FlowText cannot split, or splits but may not match its plan. */
export type StaticFlowTextIssue =
  | "multiple-flow-text"
  | "inline-flow-text"
  | "unsupported-content"
  | "rewrapping-text-wrap";

/** A separately measured group whose header may repeat on virtual continuation pages. */
export interface StaticFlowItemGroup {
  key: string;
  repeatHeader?: boolean;
  /**
   * The screen view (`PageEditor` `view="screen"`): the group is one unit, its header and every item
   * on one sheet. It fits the room left, or moves whole to a page that holds it; taller than any
   * page, it starts right under what precedes it and its sheet grows (`--uhuu-sheet-growth`). Print
   * ignores it, and so does a `Flow.Columns` column group.
   */
  growSheet?: boolean;
}

export interface StaticFlowFragmentContext<TItem = unknown> {
  flowId: string;
  pageIndex: number;
  pageCount: number;
  itemIndex: number;
  itemKey: Key;
  item: TItem;
  groupKey?: string;
  isFirst: boolean;
  isLast: boolean;
  isFirstInFragment: boolean;
  isLastInFragment: boolean;
  isFirstInGroup: boolean;
  isFirstInGroupOnPage: boolean;
  /** The item is on a continuation page of the Flow. */
  isContinuation: boolean;
  /** The group resumed from the preceding virtual page. */
  isGroupContinuation: boolean;
  /**
   * Present on every piece of an item split between the lines of its `Flow.Text`; absent for
   * an item rendered whole and in the measurement copy, which renders the whole item.
   */
  split?: { part: number; parts: number; from: number; to: number };
}

export interface StaticFlowUnplaceableItem {
  index: number;
  key: string;
  height: number;
  headerHeight: number;
  requiredHeight: number;
  availableHeight: number;
  /** Present when the item belongs to a FlowColumns track. */
  columnId?: string;
  groupKey?: string;
  reason: "item-too-tall" | "item-with-header-too-tall";
}

export interface StaticFlowUnplaceableContext {
  flowId: string;
  pageIndex: number;
  pageCount: number;
}

/** A repeatable group-header insertion point in one measured flow chunk. */
export interface StaticFlowGroupHeaderFragment {
  groupKey: string;
  itemIndex: number;
  isContinuation: boolean;
}

export interface StaticFlowChunk {
  /** Flattened visual reading order for this page; `layout` preserves parallel track identity. */
  indexes: number[];
  keys: string[];
  /** Track-local source predecessor for the first item in this continuation fragment. */
  previousSourceIndex?: number;
  groupHeaders?: StaticFlowGroupHeaderFragment[];
  unplaceable?: StaticFlowUnplaceableItem;
  layout?: StaticFlowLayoutFragment[];
  /** The pieces of items split between lines on this page, by item index. */
  splits?: Record<number, StaticFlowTextSplit>;
  /**
   * How much taller than its page this sheet is drawn, in px, to hold an item with `growSheet`
   * (the screen view). The sheet exposes it as `--uhuu-sheet-growth`.
   */
  growth?: number;
}

export interface StaticFlowColumn {
  id: string;
  indexes: number[];
}

export type StaticFlowLayoutNode =
  | { kind: "item"; index: number }
  | { kind: "columns"; id: string; columns: StaticFlowColumn[] }
  /**
   * One text set in `columns` columns, read as a newspaper: `indexes` (reading order) fill the first
   * column, then the next, then the first column of the next sheet. Items move whole. Columns get
   * ids `column-1` … `column-<n>` (`getColumnProps`, `data-uhuu-flow-column`) and equal widths.
   */
  | {
      kind: "flowingColumns";
      id: string;
      indexes: number[];
      /** How many columns, 1 or more. */
      columns: number;
      /**
       * The group's last sheet: "balance" (default) evens its columns out, "auto" fills them in
       * order, as CSS `column-fill`.
       */
      columnFill?: "balance" | "auto";
    };

export interface StaticFlowColumnFragment {
  id: string;
  chunk: StaticFlowChunk;
}

export type StaticFlowLayoutFragment =
  | { kind: "items"; chunk: StaticFlowChunk }
  | { kind: "columns"; id: string; columns: StaticFlowColumnFragment[] };

export interface StaticFlowMeasurement {
  flowId: string;
  chunks: StaticFlowChunk[];
  signature: string;
  unplaceableItems?: StaticFlowUnplaceableItem[];
}

/**
 * Diagnostic counters for one pagination pass. They never influence a
 * pagination decision; pass one in to assert cost budgets in tests or to
 * profile a slow document.
 */
export interface StaticFlowPlanMetrics {
  /** Leaf-item reads during chunking, protected-group checks, and lookahead. */
  scannedItems: number;
  /** Calls into the leaf chunker: one per page per track, plus retries. */
  chunkerCalls: number;
  /** Fresh-page retries computed, whether or not the retry was taken. */
  freshPageAttempts: number;
  /** Output pages produced. */
  pages: number;
}

/**
 * The DOM reads `Flow.Area` measures a laid-out Flow with. Hosts that run
 * their own Flow canvas (an editor drawing the same document) must use these
 * instead of re-deriving them: the planner is deterministic, so a difference in
 * how height or transform scale is read here is the one thing that can still
 * move a page boundary between an editor and its delivered document.
 */
export interface StaticFlowMeasureApi {
  /** Product of every ancestor CSS transform, so heights normalize to layout space. */
  getEffectiveScale: (element: HTMLElement) => number;
  /** Border-box height plus vertical margins, in layout space. */
  getOuterHeight: (element: HTMLElement, scale?: number) => number;
  /** @internal Library measurement detail; retained for compatibility. */
  readItemMeta: (element: HTMLElement) => StaticFlowItemMeta;
  /** @internal Library measurement detail; retained for compatibility. */
  readHeaderGroupKey: (element: HTMLElement) => string | undefined;
  /** @internal Library measurement detail; retained for compatibility. */
  readHeaderGroupRepeats: (itemElements: HTMLElement[]) => Record<string, boolean>;
  /**
   * @internal The header groups whose items carry `data-uhuu-flow-header-grow-sheet`
   * (`getItemGroup` `growSheet`, the screen view), for `headerGroupGrows`.
   */
  readHeaderGroupGrows: (itemElements: HTMLElement[]) => Record<string, boolean>;
  /** `unwrapped`: heights from `readUnwrappedHeights`, used for the headers it covers. */
  readHeaderGroupHeights: (
    root: HTMLElement,
    scale?: number,
    unwrapped?: ReadonlyMap<HTMLElement, number>
  ) => Record<string, number>;
  /**
   * Heights of the items and group headers an `asChild` Flow renders as direct children of its
   * root, from positions: margins collapse without a wrapper, so each item is the distance from
   * the bottom of the element before it (the area's top for the first) to its own bottom.
   * @internal Library measurement detail; retained for compatibility.
   */
  readUnwrappedHeights: (area: HTMLElement, flow: HTMLElement, scale?: number) => Map<HTMLElement, number>;
  /** Every measured leaf under `root`, in document order. */
  readFlowItemElements: (root: HTMLElement) => HTMLElement[];
  /**
   * The first of `items` that does not lie below the item before it in `area` (beside it, in
   * another column), or `null`: such a flow cannot be planned (`unstacked-flow-items`).
   * @internal Library measurement detail; retained for compatibility.
   */
  readUnstackedItem: (area: HTMLElement, flow: HTMLElement, items: HTMLElement[]) => HTMLElement | null;
  /**
   * A CSS length with an absolute unit (`"20mm"`, `"12px"`) or a number of px, in CSS px;
   * `undefined` for anything else. What `breakReserve` is read with.
   * @internal Library measurement detail; retained for compatibility.
   */
  parseAbsoluteLength: (value: number | string | undefined) => number | undefined;
  /** @internal Library measurement detail; retained for compatibility. */
  parseKeepWithNext: (value: string | undefined) => boolean | number;
  /** @internal Library measurement detail; retained for compatibility. */
  serializeKeepWithNext: (value: StaticFlowItemMeta['keepWithNext']) => string | undefined;
  /**
   * `orphans` / `widows` attribute values: a positive whole number, else `undefined`.
   * @internal Library measurement detail; retained for compatibility.
   */
  parseLineCount: (value: string | undefined) => number | undefined;
  /** @internal Library measurement detail; retained for compatibility. */
  serializeLineCount: (value: number | undefined) => string | undefined;
  /**
   * The `Flow.Text` elements of `item` itself (not those of a Flow nested in it).
   * @internal Library measurement detail; retained for compatibility.
   */
  readItemFlowTexts: (item: HTMLElement) => HTMLElement[];
  /**
   * The lines of the one `Flow.Text` in a measured item, for `Flow.planChunks({ lines })`, or
   * `undefined` when it has none or cannot split (`report` says why). `height` is the item's
   * measured height (`getOuterHeight`, or `readUnwrappedHeights` for `asChild`).
   * @internal Library measurement detail; retained for compatibility.
   */
  readFlowTextLines: (
    item: HTMLElement,
    height: number,
    scale?: number,
    report?: (issue: StaticFlowTextIssue, element: HTMLElement) => void
  ) => StaticFlowItemLines | undefined;
  /**
   * FNV-1a. For opaque change-detection tokens compared only for equality.
   * @internal Library measurement detail; retained for compatibility.
   */
  hashString: (value: string) => string;
}

/** Input for `Flow.planChunks`, using heights measured by the consumer. */
export interface StaticFlowPlanInput {
  heights?: number[];
  keys?: string[];
  metas?: StaticFlowItemMeta[];
  /** The first page's region height. */
  availableHeight?: number;
  /** The region height of every later page (`measureContinuation`). Default: `availableHeight`. */
  continuationHeight?: number;
  headerGroupKeys?: Array<string | null | undefined>;
  headerGroupHeights?: Record<string, number>;
  headerGroupRepeats?: Record<string, boolean>;
  /** Header groups that are one unit on one sheet (`getItemGroup` `growSheet`, the screen view). */
  headerGroupGrows?: Record<string, boolean>;
  onUnplaceableItem?: (item: StaticFlowUnplaceableItem) => void;
  /** @internal Filled with the planner's work counters (hosts tuning their own canvas). */
  metrics?: StaticFlowPlanMetrics;
  /**
   * @internal Line metrics per item, as `Flow.measure.readFlowTextLines` reads them (hosts that run
   * their own Flow canvas); `undefined` for items that do not split. An item that does not fit the room left is split at a line (chunks gain `splits`).
   * Without `lines` the plan is item-level. `Flow.planColumnChunks` does not split.
   */
  lines?: Array<StaticFlowItemLines | undefined>;
  /**
   * Room kept free at the bottom of every page the flow breaks from, in px; the page it ends on
   * keeps its full region, so a flow that fits one page plans as without it. 0 by default; a
   * reserve of a page or more is ignored. `Flow.planColumnChunks` does not take it.
   */
  breakReserve?: number;
}

/** Input for `Flow.planColumnChunks`, using globally indexed leaf measurements. */
export interface StaticFlowColumnPlanInput extends StaticFlowPlanInput {
  nodes: StaticFlowLayoutNode[];
  columnHeaderGroupHeights?: Record<string, Record<string, Record<string, number>>>;
  columnHeaderGroupRepeats?: Record<string, Record<string, Record<string, boolean>>>;
}

export interface ImageBlockDialog {
  path: string;
  /** The dialog to open. A frame message (`Frame.editDialog`) has `frame` instead. */
  type?: "image" | "satellite";
  [key: string]: unknown;
}

export interface ImageBlockAnnotationValue {
  annotationSvg?: string;
  annotations?: unknown[];
}

export interface ImageBlockAnnotation {
  path: string;
  value?: ImageBlockAnnotationValue;
  [key: string]: unknown;
}

export interface ImageBlockProps {
  src?: string;
  alt?: string;
  onError?: ReactEventHandler<HTMLImageElement>;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  backgroundColor?: string;
  /**
   * `auto` (an image in the flow of the page), `bleed` (positioned on the page by its geometry, into
   * the bleed where it touches an edge) or `spread` (one half of an image across two facing pages).
   * Unset: `spread` when `side` is set, `bleed` when any of `width`, `height`, `left`, `right`,
   * `top`, `bottom` is set, else `auto`.
   */
  mode?: "bleed" | "spread" | "auto";
  /**
   * `spread`: which page of the pair this half is on: `start` (or `left`) the left page, `end` (or
   * `right`) the right one. `left` / `right` as a cover spread's `spread.side` names them.
   */
  side?: "start" | "end" | "left" | "right";
  /** Geometry in mm from the trim box, as every page dimension: the image's width. */
  width?: number;
  /** Geometry in mm: the image's height. */
  height?: number;
  /** Geometry in mm: distance from the left trim edge (0 runs into the bleed). */
  left?: number;
  /** Geometry in mm: distance from the right trim edge (0 runs into the bleed). */
  right?: number;
  /** Geometry in mm: distance from the top trim edge (0 runs into the bleed). */
  top?: number;
  /** Geometry in mm: distance from the bottom trim edge (0 runs into the bleed). */
  bottom?: number;
  /** Page width in mm; default from the page setup (ConfigContext). */
  pageWidth?: number;
  /** Page height in mm; default from the page setup. */
  pageHeight?: number;
  /** Bleed in mm; default from the page setup. */
  bleed?: number;
  dialog?: ImageBlockDialog;
  annotation?: ImageBlockAnnotation;
  overlaySvg?: string;
  overlayClassName?: string;
  options?: unknown[];
  /**
   * Extra props (className, handlers, data attributes) merged into the click target that `dialog`
   * binds. Applied in `auto` mode, where ImageBlock renders that element itself. In `bleed` and
   * `spread` modes the image is positioned on the page and its element is the library's: there
   * `dialogProps` is not applied, and neither are `className`, `style`, `imageStyle`, `imageProps`,
   * `renderImage` and `placeholder` (development builds warn). Style the image with
   * `imageClassName`; `children` render over it only with `dialog`, `annotation`, `overlaySvg` or
   * `options`.
   */
  dialogProps?: Record<string, unknown>;
  placeholder?: ReactNode;
  children?: ReactNode;
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
  renderImage?: (props: ImgHTMLAttributes<HTMLImageElement>) => ReactNode;
}

export const ImageBlock: ComponentType<ImageBlockProps>;

export interface EditableProps {
  className?: string;
  dialog?: object;
  children?: ReactNode;
}

/**
 * Wraps its children in a `div` bound to `dialog`. The element is rendered even when the
 * children are empty (null, false, whitespace): it is the click target. A bound, empty
 * Editable carries `uhuu-text-empty`, which gets a one-line box in the editor.
 * Template CSS controls print layout. Only text/textarea/markdown dialogs get the marker.
 * Pass `null`, not a renderer element around an empty string.
 */
export const Editing: {
  /** A region that opens its dialog in the editor; wraps its children in a bound element. */
  Editable: ComponentType<EditableProps>;
  /**
   * The props Editable and ImageBlock attach, for a template's own element: renderer guard and
   * `data-uhuu-type` included. `{}` without a dialog.
   */
  getDialogProps(props: { dialog?: object | null } | null | undefined): DialogBindingProps;
};

/** What `getDialogProps` returns. Spread it onto the element that renders the field. */
export interface DialogBindingProps {
  /** Marks the element for the editor (`""`). */
  "data-uhuu"?: string;
  /** `dialog.type`, so CSS can tell an empty text binding from an empty image. */
  "data-uhuu-type"?: string;
  /** Opens the dialog in the interactive editor. Never set in renderer mode (`window.$uhuu_renderer`). */
  onClick?: MouseEventHandler<HTMLElement>;
}

// --- Image URLs (src/uhuu/image/image-url.js). See docs/image-url.md. ---

/** An image as payloads store it: an ImageObject, the dialogs' legacy `{ url }`, a URL, or nothing. */
export type ImageSource =
  | string
  | {
      contentUrl?: string;
      url?: string;
      src?: string;
      encodingFormat?: string;
      mimeType?: string;
      [key: string]: unknown;
    }
  | null
  | undefined;

export interface ImageUrlOptions {
  /** Print-product sizing. Default: the host's `$uhuu.is.printProduct()` (false without a host). */
  print?: boolean;
  /** Screen size as `WxH`. Default `2000x2000`. */
  size?: string;
  /** Print size as `WxH`. Default `4000x4000`. */
  printSize?: string;
  /** Thumbnail output format, e.g. `image/jpeg`. Default: the source's own (keeps transparency). */
  format?: string;
}

/**
 * The thumbnailer URL to render an image at: print-aware size, encoded source URL, SVG/`data:`/
 * relative sources passed through, already-thumbnailed URLs rebuilt rather than nested.
 * No image returns `undefined`, which renders no `src` attribute.
 */
export function imageUrl(src: ImageSource, options?: ImageUrlOptions): string | undefined;

// --- Image frames (src/uhuu/frame/). See docs/frame-block.md. ---
// test/frame-vendor.test.mjs checks the types mirrored from the vendored `uhuu.frame.v1` module.

/** Which legacy image wins when an old value carries both a generated image and a pick. */
export type FrameLegacyPrecedence = "generated" | "pick";

/** The image shown now and the overlay saved at `annotationPath`: what an editor without frames annotates. */
export interface FrameLegacyCurrent {
  image?: string;
  annotation?: unknown;
}

/** One dialog a frame offers: its type, its title in the chooser, and that dialog's own options. */
export interface FrameDialogEntry {
  type: string;
  title?: string;
  /** The dialog's configuration (coordinates, styles, zoom, `visualGallery`, …). */
  config?: Record<string, unknown>;
  /** Other options for that dialog (`imageGalleryPath`, `galleryUpload`, …). */
  [key: string]: unknown;
}

/** What `$uhuu.editFrame` takes (uhuu-sdk): the slot and the dialogs it offers. */
export interface FrameDeclaration {
  /** Where the frame is saved. */
  path: string;
  /** The dialogs that create the image (`map`, `satellite`, `cadastral`, `image`, …), in chooser order. */
  sources: FrameDialogEntry[];
  /** Overlays drawn over the shown image (`annotation`). */
  layers?: FrameDialogEntry[];
  /** Transforms offered on the shown image (`image-editor`, `ai-marketing-studio`). Default: all the editor offers; `false` for none. */
  transforms?: string[] | false;
  /** Crop aspect ratio, width / height. */
  ratio?: number;
  /** Which image an old document shows when it holds both a generated image and a pick. Default `'generated'`. */
  legacyPrecedence?: FrameLegacyPrecedence;
  /** Whether an old map whose upload failed shows its unsaved render (`'show'`, default) or the placeholder (`'ignore'`). */
  legacyDataImage?: 'show' | 'ignore';
  /** An overlay saved at its own path before frames. Pass its value as FrameBlock's `annotation`. */
  annotationPath?: string;
}

export interface FrameBlockProps extends FrameDeclaration, Omit<ImageBlockProps, "src" | "dialog" | "annotation"> {
  /** The value at `path`: a frame, or anything saved there before frames. */
  value?: unknown;
  /** Also draw a source's own outline (cadastral `annotationSvg`); off because the cadastral image has it baked in. */
  intrinsicOverlays?: boolean;
  /** The overlay value saved at `annotationPath`; read as the active source's layer until the frame holds its own. */
  annotation?: ImageBlockAnnotationValue | null;
  /** Rendered instead of the frame's image: a template adapter's own URL. */
  src?: string;
  /** `imageUrl` options for the shown image (`print`, `size`, `printSize`, `format`). */
  imageUrlOptions?: ImageUrlOptions;
}

/** Opening a frame from a template's own element, or as an ImageBlock `dialog`. */
export const Frame: {
  /**
   * An image slot several dialogs write (map, satellite, cadastral, gallery pick, crop, annotation),
   * stored as a `uhuu.frame.v1` value. Renders the shown image through `imageUrl` with every overlay
   * of the active source over it, and opens `$uhuu.editFrame` on click in the editor (`editDialog`
   * with the legacy `types` on an older SDK; nothing in renderer mode). Layout props are ImageBlock's.
   */
  Block: ComponentType<FrameBlockProps>;
  /**
   * Opens a frame from a template's own click handler: `$uhuu.editFrame` when the SDK has it, else
   * `editDialog` with `Frame.editDialog`'s message. No host, no call.
   */
  open(declaration: FrameDeclaration, current?: FrameLegacyCurrent | null): void;
  /**
   * `{ path, frame, types }`: the message `$uhuu.editFrame` sends, for an `ImageBlock` `dialog` or an
   * SDK without `editFrame`. `types` is the chooser an editor without frames shows. `null` without a
   * `path` or a source with a `type`.
   */
  editDialog(
    declaration: FrameDeclaration,
    current?: FrameLegacyCurrent | null,
  ): { path: string; frame: Omit<FrameDeclaration, "path">; types: Record<string, unknown>[] } | null;
};

// --- Brand-kit runtime (src/uhuu/brand-kit/). See docs/brand-kit-runtime.md. ---

export interface BrandKitFontFile {
  src: string;
  weight?: number | string;
  style?: "normal" | "italic";
  format?: string;
}

export interface BrandKitFont {
  id?: string;
  family?: string;
  /** Role-keyed fonts (`fonts.body`, `fonts.heading`): the stack after `family`. */
  fallback?: string;
  source?: string;
  provider?: string;
  cssUrl?: string;
  weights?: number[];
  styles?: Array<"normal" | "italic">;
  files?: BrandKitFontFile[];
  faces?: Array<{
    weight?: number;
    style?: "normal" | "italic";
    cssUrl?: string;
    files?: BrandKitFontFile[] | Record<string, string>;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

/** A brandkit.json document. Only the parts the runtime reads are typed. */
export interface BrandKitJson {
  version?: string | number;
  id?: string;
  name?: string;
  baseUrl?: string;
  assignments?: Record<string, string>;
  fonts?: Record<string, BrandKitFont> | BrandKitFont[];
  tokens?: {
    light?: {
      semantic?: Record<string, string | undefined>;
      aliases?: Record<string, string | Record<string, string | undefined> | undefined>;
    };
    primitives?: { typography?: Record<string, unknown>; [key: string]: unknown };
    [token: string]: unknown;
  };
  colorMode?: "light" | "manual" | "shade";
  /** Template variables Brand Kit precomputed at publish for current public 1.x documents. */
  runtime?: BrandKitRuntimeBlock;
  /** What wrote the document; a published version names itself in `release`. */
  generator?: { name?: string; release?: BrandKitRelease; [key: string]: unknown };
  [key: string]: unknown;
}

/**
 * `generator.release` of a published version's document (older documents have none): it lets
 * `?brand=v9` and `uhuu-components brand status | activate v9` name another version of the brand a
 * template's `src/brand/brandkit.json` holds.
 */
export interface BrandKitRelease {
  teamId: string;
  kitId: string;
  /** `v1`, `v2`… */
  version: string;
  /** This version's immutable `…/versions/vN/brandkit.json`. */
  url: string;
  /** The Brand Kit app's origin, which says which version is newest. */
  appUrl?: string;
}

/**
 * `brandkit.json.runtime` (public 1.x): canonical semantic and font-role variables, ready to
 * apply, and the fonts to load. It cannot carry template layout or decoration tokens.
 */
export interface BrandKitRuntimeBlock {
  version: 1;
  light: Record<string, string>;
  fontStylesheets?: string[];
  fontFaces?: Array<{
    family: string;
    src: string;
    weight?: number;
    style?: "normal" | "italic";
    format?: string;
    ascentOverride?: number;
    descentOverride?: number;
    lineGapOverride?: number;
  }>;
}

export interface BrandKitLogo {
  /** Absolute SVG URL. */
  src: string;
  alt?: string;
  kind: "primary" | "mark" | "wordmark";
  background?: "light" | "dark" | "any";
  /** The language a named or language version is for. */
  locale?: string;
}

export interface BrandKitCollectionItem {
  key: string;
  /** Absolute URL. */
  src: string;
  label?: string;
  name?: string;
  type?: string;
  mimeType?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface BrandKitCollection {
  id: string;
  name?: string;
  type?: string;
  versionId?: string;
  items: BrandKitCollectionItem[];
}

export interface BrandKitMapStyle {
  url: string;
  name?: string;
  source: "extensions.maps";
}

export type BrandKitLogoKind = "primary" | "logo" | "lockup" | "mark" | "icon" | "symbol" | "wordmark";
export type BrandKitMediaKind = "photos" | "icons" | "graphics" | "backgrounds" | "templates";

/** What `useBrandKit()` returns. */
export interface BrandKitRuntime {
  /** The kit being rendered: the fetched one, else the `brandKit` prop. */
  brandKit: BrandKitJson | null;
  /** Canonical semantic, extension-colour and font-role variables as the provider's scope element carries them. */
  cssVars: Record<string, string>;
  /** Where the rendered kit came from (`src` once fetched, else the `sourceUrl` prop). */
  sourceUrl?: string;
  /** `idle` without `src` (the `brandKit` prop renders); `loading` until it arrives; `ready`; `error`. */
  status: "idle" | "loading" | "ready" | "error";
  /**
   * A logo resolved from `logoSystem`. Default `{ kind: "primary", background: "light" }`.
   * `name` and `locale` pick a named or language version, falling back to the standard logo.
   */
  logo(options?: { kind?: BrandKitLogoKind; background?: "light" | "dark"; name?: string; locale?: string }): BrandKitLogo | null;
  /** The brand's chart colors as hex when it set them, else `fallback` (the template's). */
  chartPalette(options?: { fallback?: string[]; count?: number }): BrandChartPalette;
  /**
   * One chart colour set for the printed chart and the chart dialog's `config.brand`: the brand's
   * chart colours when it set them (as many as `defaults.palette` has), else `defaults.palette`; the
   * template's `ink`, `line`, `muted` and `surface` when it passes them, else the kit's foreground,
   * border, muted-foreground and background. All `#rrggbb`.
   */
  chartBrand(defaults?: ChartBrand): ChartBrand;
  /** The brand's default locale and currency (`extensions.locale`); `payload.locale` wins over it. */
  locale: { locale?: string; currency?: string };
  /** Public 1.x: canonical kind/id and active-version selection. */
  collection(kindOrId: BrandKitMediaKind | string, options?: { versionId?: string }): BrandKitCollection | null;
  mapStyle(mode: "micro" | "macro"): BrandKitMapStyle | null;
  /** A kit-relative asset path made absolute. */
  resolveUrl(path: unknown): string | undefined;
}

export interface BrandKitProviderProps {
  /**
   * The kit to render, usually the template's own `src/brand/brandkit.json`; with `src`, the fallback
   * until the fetched kit arrives or when the fetch fails.
   */
  brandKit?: BrandKitJson | null;
  /** A brandkit.json URL to fetch, usually `BrandKit.selection(payload).src`. */
  src?: string | null;
  /** Brand values the template opts into beyond colours and fonts: `{ radius: true }` adds `--radius*`. Stable object. */
  adopt?: { radius?: boolean };
  /** Custom properties for whatever the kit leaves out; the kit wins. Pass a stable object. */
  defaults?: Record<string, string>;
  /** Where a `brandKit` passed in came from; its directory resolves relative URLs when the kit has no `baseUrl`. */
  sourceUrl?: string;
  /** Called with each kit fetched from `src`; never for a development preview (`?brand=`). */
  onLoad?: (brandKit: BrandKitJson) => void;
  /** Called when `src` fails to load; never for a development preview. Default: `console.error`. */
  onError?: (error: unknown) => void;
  /** For the scope element. `style` is applied last, so `{ display: "block" }` gives it a box. */
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** A chart's colours, as the chart dialog's `config.brand` (`ChartDialogBrand`) takes them. */
export interface ChartBrand {
  palette?: string[];
  ink?: string;
  line?: string;
  muted?: string;
  surface?: string;
}

export interface BrandChartPalette {
  colors: string[];
  source: "brand" | "template";
}

/** Brand Kit for code outside a `BrandKitProvider`; inside one, `useBrandKit()` has the kit's own helpers. */
export const BrandKit: {
  /**
   * Scopes a kit's CSS variables around the pages and their overlay chrome, on a `display: contents`
   * element (`data-uhuu-brand-kit-status` tells a print step when a fetched kit has arrived), and
   * loads the fonts the kit declares. Colours are hex, `rgb()`/`rgba()`, `oklch()`/`oklab()` or
   * keywords: HSL is converted, anything else is skipped as if absent.
   *
   * On a development host, and never when `$uhuu_renderer` is set, `?brand=` on the page URL (`v9`, a
   * `…/versions/vN/brandkit.json` link, or a same-origin path) renders that candidate instead, under a
   * bar with what changed and Stop. It is written nowhere and never printed.
   */
  Provider: ComponentType<BrandKitProviderProps>;
  /** The nearest `BrandKitProvider`'s runtime, or `null` outside one. */
  useBrandKit(): BrandKitRuntime | null;
  /** Brand Kit's production location for published kits. */
  publicBaseUrl: string;
  /**
   * Which brand a document renders: a pinned `payload.brand` (unpinned warns), then none: the
   * template's own current `brandkit.json` (`brandKit` prop) renders.
   * `pinned` is true when `src` is an immutable `…/versions/vN/brandkit.json` (and for a preset, which
   * fetches nothing). A `version: "vN"` beside a kit's root `…/kits/<kit>/brandkit.json` selects that
   * version's URL; a version alone pins nothing.
   */
  selection(
    payload: Record<string, unknown> | null | undefined,
  ): { source: "payload" | "none"; src: string | null; pinned: boolean; presetId?: string };
  /** Fetches a brandkit.json; rejects on network errors, non-2xx and non-object bodies. */
  load(url: string, options?: { fetch?: typeof fetch; signal?: AbortSignal }): Promise<BrandKitJson>;
};

export interface InteractiveModeContextValue {
  interactive: boolean;
  setInteractive: (interactive: boolean) => void;
  enableDevTools?: boolean;
  /** The shell's resolved interface language (`de`, `fr`, `it`, `en`, or what the template passed). */
  locale: string;
  /**
   * The shell chrome's resolved appearance, so template-owned chrome (a floating button, a panel)
   * can follow it. Pages are paper: never style document content with it.
   */
  appearance: EditorShellAppearance;
}

/** The editor shell's chrome appearance (docs/editor-shell-appearance.md). */
export type EditorShellAppearance = "light" | "dark";

/**
 * A label as one string, or one string per language: `{ en: 'Cover', de: 'Titelseite' }`.
 * Accepted wherever `templateConfig` and `pageOptions` take a `label` (pages, groups, options,
 * select and colour values) and by `reorderTitle` / `reorderDescription`. Resolved in the shell's
 * language, then English, then the first entry.
 */
export type LocalizedText = string | Record<string, string>;

/** Editor shell words, nested as in the English catalog (docs/editor-shell-translations.md). */
export type EditorShellTranslations = { [key: string]: string | EditorShellTranslations };

export interface InteractiveModeProviderProps {
  children: ReactNode;
  defaultInteractive?: boolean;
  enableDevTools?: boolean;
  /**
   * The shell's interface language. Default: the host's (uhuu-app's locale from the SDK
   * handshake), then `?lang=`, `<html lang>`, the browser's languages, then `en`.
   */
  locale?: string;
  /**
   * Per-language overrides of the shell's words, or a whole catalog for a language the package
   * does not ship: `{ de: { toolbar: { add: 'Neu' } }, rm: romanshCatalog }`. Pass a stable object.
   */
  translations?: Record<string, EditorShellTranslations>;
  /**
   * Forces the shell chrome's appearance. Default: the host's (the uhuu document editor's
   * handshake `appearance` and later `appearance` messages), then `?appearance=`, then `light`.
   * Pages never follow it.
   */
  appearance?: EditorShellAppearance;
}

export interface BrandKitOption {
  id: string;
  name: string;
}

/** @deprecated Nothing takes or returns it; use `PageItem`. Removed in 0.5.0. */
export interface PageEditorItem {
  id?: string;
  templateId?: string;
  componentKey?: string;
  pages?: PageEditorItem[];
  [key: string]: unknown;
}

export interface PageEditorState {
  key: string;
  items: PageItem[];
  totalPages: number;
  updatedAt: string;
}

/**
 * The `page` a PageEditor page component receives: its page item (id, component key, saved
 * page-option values) and the sheet being rendered. A `hasFlow` page renders one sheet per flow
 * chunk; its continuation sheets share the page's `id`.
 */
export interface PageEditorPage extends StandalonePage {
  id: string;
  componentKey?: string;
  templateId?: string;
  label?: LocalizedText;
  hasFlow?: boolean;
  /** The sheet's position among the page's sheets: `0` on the first, `n` on its n-th continuation. */
  virtualPageIndex: number;
  /**
   * How many sheets the page renders: its longest flow's chunk count, `1` without flow. The last
   * sheet is `virtualPageIndex === virtualPageCount - 1`. PageEditor's hidden measurement copy
   * renders the logical page, `0` of `1` (the continuation copy of `measureContinuation`: `1` of
   * `2`), as `totalPages` there is the logical total; see docs/static-flow-pagination.md.
   */
  virtualPageCount: number;
  [key: string]: unknown;
}

/** Dialog paths and the resolved integration for one logical page. */
export interface PageDataBinding {
  payload: any;
  pageId: string;
  pagePayload?: any;
  parentGroupId?: string;
  integration: { instanceId: string | null; data?: any; path: (subPath?: string) => string | null };
  paths: {
    integration: (subPath?: string) => string | null;
    page: (subPath?: string) => string | null;
    group: (subPath?: string) => string | null;
    document: (subPath?: string) => string | null;
  };
  defaults: { imageGalleryPath?: string | null };
}

/** The props PageEditor passes to a page component. */
export interface PageComponentProps {
  payload?: Record<string, unknown>;
  /** The page's own payload slot (`payload.pages[...]`). */
  pagePayload?: Record<string, unknown>;
  /** Integration data for this page (its group's, else its own). */
  integration?: Record<string, unknown>;
  pageId?: string;
  templateId?: string;
  componentKey?: string;
  /** 1-based position in the flow-expanded document. */
  pageNum?: number;
  /** Sheets in the flow-expanded document. */
  totalPages?: number;
  page?: PageEditorPage;
  parentGroup?: PageGroup;
  /** Dialog path helpers and defaults (docs/page-data-binding.md). */
  dataBinding?: PageDataBinding;
  /** Set while the page is a panel of a perfect-binding cover spread. */
  spread?: SpreadInfo;
}

export interface PageFilterConfig {
  mode?: "all" | "cover" | "text" | "custom";
  coverPageCount?: number;
  ranges?: Array<{ start: number; end: number }>;
  [key: string]: unknown;
}

export interface PrintConfig {
  label: string;
  filter: PageFilterConfig | null;
  pageFormat?: { bleed?: number; binding?: BindingConfig | null; [key: string]: unknown };
}

export type PrintConfigMap = Record<string, PrintConfig>;

/**
 * Initial PageEditor zoom preference; fit modes follow layout until manually adjusted.
 * PageEditor defaults to `fit-page`.
 */
export type PageEditorDefaultZoomMode = "manual" | "fit-width" | "fit-height" | "fit-page";

/**
 * `templateConfig.pageManagement`: which page-management controls the editor shell offers. Like a
 * map API's UI options, `locked` turns every control off at once and each control key overrides it
 * either way: `{ locked: true }` for a print product whose pages the template computes,
 * `{ locked: true, rename: true }` to allow renaming only, `{ add: false }` to hide adding alone.
 * When add, remove, reorder and duplicate are all off, the template owns the page list and a saved
 * page order is ignored (page-option settings saved on a page are kept). Default: every control on.
 */
export interface PageManagementOptions {
  /** Master switch: every control below off unless it is set to `true`. */
  locked?: boolean;
  /** Add pages or groups: toolbar Add, the page menu's Add page, the add dialog. */
  add?: boolean;
  /** Delete a page or group: page menu, reorder dialog. */
  remove?: boolean;
  /** Reorder: toolbar Reorder dialog, the page menu's Move up / Move down. */
  reorder?: boolean;
  /** Duplicate a page or group: page menu. */
  duplicate?: boolean;
  /** Rename a page or group: page menu. */
  rename?: boolean;
}

/** A page or group the shell supplies to page-option callbacks. */
export type PageItem = StandalonePage | PageGroup;

export interface StandalonePage {
  kind: "page";
  id: string;
  componentKey?: string;
  dataKey?: string;
  templateId?: string;
  label?: LocalizedText;
  className?: string;
  hasFlow?: boolean;
  repeatable?: boolean;
  maxInstances?: number | null;
  integration?: "required" | "optional" | "none" | { mode?: "required" | "optional" | "none" };
  pageNum?: number;
  component?: ComponentType<any>;
  [key: string]: any;
}

export interface PageGroup {
  kind: "group";
  id: string;
  templateId?: string;
  repeatable?: boolean;
  maxInstances?: number | null;
  integration?: StandalonePage["integration"];
  label?: LocalizedText;
  pages: Array<Omit<StandalonePage, "pageNum" | "kind"> & { id: string }>;
  pageNum?: never;
  [key: string]: any;
}

/** Page blueprint in `templateConfig.pages`; metadata applies whenever that layout is used. */
export interface PageTemplateDefinition {
  label?: LocalizedText;
  className?: string;
  componentKey?: string;
  dataKey?: string;
  component?: ComponentType<any>;
  hasFlow?: boolean;
  repeatable?: boolean;
  maxInstances?: number | null;
  thumbnail?: string;
  integration?: StandalonePage["integration"];
  allowAsSinglePage?: boolean;
  strictPosition?: "start" | "end";
}

export interface PageComponentKeysContext {
  payload: any;
  item?: PageGroup;
  parent?: PageItem;
}

/** Group blueprint; record keys provide `id`, array and inline definitions supply it themselves. */
export interface GroupDefinition {
  id: string;
  label?: LocalizedText;
  thumbnail?: string;
  repeatable?: boolean;
  maxInstances?: number | null;
  pageComponentKeys?: string[] | ((context: PageComponentKeysContext) => string[]);
  integration?: StandalonePage["integration"];
  strictPosition?: "start" | "end";
}

export interface PageEditorTemplateConfig {
  initial: Array<string | (Partial<StandalonePage> & { id: string }) | GroupDefinition>;
  pageManagement?: PageManagementOptions;
  groups?: GroupDefinition[] | Record<string, Omit<GroupDefinition, "id"> & { id?: string }>;
  pageComponentKeys?: string[];
  pages?: Record<string, PageTemplateDefinition>;
  pageComponents?: Record<string, ComponentType<any>>;
  spine?: PageEditorSpineConfig;
  payload?: any;
  /** Template-owned metadata may accompany the shell configuration. */
  [key: string]: unknown;
}

export interface PageOptionSelectValue {
  label: LocalizedText;
  /** Matched to the stored value as a string (`2` is `"2"`); a payload option writes it typed by `valueType`. */
  value: string | number | boolean;
  hex?: string;
}

type PageOptionTarget = string | ((item: PageItem) => boolean);
type BasePageOption = {
  id: string;
  label: LocalizedText;
  description?: LocalizedText;
  appliesTo?: PageOptionTarget | PageOptionTarget[];
  onChange?: (id: string, value: string, context: { item?: PageItem; updateItem: (patch: Partial<PageItem>) => void }) => void;
  applyPatch?: (value: string, item?: PageItem) => Partial<PageItem> | void;
};

export type SelectPageOption = BasePageOption & {
  type: "select";
  options: PageOptionSelectValue[];
  getValue: (item: PageItem) => string | number | boolean;
};
export type TogglePageOption = BasePageOption & { type: "toggle"; getValue: (item: PageItem) => boolean };
export type SliderPageOption = BasePageOption & {
  type: "slider"; min: number; max: number; step: number; getValue: (item: PageItem) => number;
};
export type CounterPageOption = BasePageOption & {
  type: "counter"; min: number; max: number; step: number; getValue: (item: PageItem) => number;
};
export type ColorSeriesPageOption = BasePageOption & {
  type: "color-series"; options: PageOptionSelectValue[]; getValue: (item: PageItem) => string;
};
export type PageOption = SelectPageOption | TogglePageOption | SliderPageOption | CounterPageOption | ColorSeriesPageOption;

/** How a payload option writes a choice: default `boolean` for a toggle, `number` for a slider or counter, else `string`. */
export type OptionValueType = "string" | "number" | "boolean";

/** What a payload option (a page option without callbacks, or a document option) adds to its control. */
interface PayloadOptionStorage {
  /** Shown while the payload holds no value (`stored ?? defaultValue`). */
  defaultValue?: any;
  /** The stored key. Default: `id`. */
  field?: string;
  valueType?: OptionValueType;
}

type PayloadOptionFor<Option> = Option extends PageOption
  ? Omit<Option, "getValue" | "onChange" | "applyPatch"> & PayloadOptionStorage
  : never;
/** A page option stored automatically in `payload.pages[pageId]`, without custom callbacks. */
export type PayloadOptionDefinition = PayloadOptionFor<PageOption>;

/** The corner of PageEditor's floating toolbar. */
export type ToolbarPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export interface PageEditorProps {
  /** Pages, groups and initial items; `pageManagement` sets the page-management controls. */
  templateConfig: PageEditorTemplateConfig;
  payload?: Record<string, unknown>;
  onPayloadChange?: (nextPayload: Record<string, unknown>) => void;
  pageFormat?: {
    width: number;
    height: number;
    preview?: "single_page" | "two_pages";
    bleed?: number;
    /** Perfect-binding spine/glue; only applied while `pageFilter.mode === 'cover'`. */
    binding?: BindingConfig | null;
    [key: string]: unknown;
  };
  pageOptions?: Array<PageOption | PayloadOptionDefinition>;
  pageFilter?: PageFilterConfig;
  printConfigs?: PrintConfigMap;
  defaultZoomMode?: PageEditorDefaultZoomMode;
  /**
   * The corner the floating toolbar (page count, Add, Reorder, document options, zoom) starts in.
   * Default `bottom-right`. A user moves it from the zoom menu; their corner is remembered in the
   * browser and wins over this one.
   */
  toolbarPosition?: ToolbarPosition;
  /**
   * What the pages are drawn for: `print` (default), the document as it prints, or `screen`, the
   * document read on screen (a host's "Print" switch). Pages read it with `Static.useView()` and
   * decide what changes (a table kept whole); a `Flow.Items` item with meta `growSheet` is drawn
   * whole on a taller sheet instead of scaled to fit a page. The renderer always draws `print`;
   * any other value draws `print` and warns.
   */
  view?: StaticView;
  /** Called with the page list after every change a user makes (add, remove, reorder, rename). */
  onItemsChange?: (items: PageItem[], state: PageEditorState) => void;
  /** Called with the saved editor state after every change, as it is written to the payload. */
  onStateChange?: (state: PageEditorState) => void;
  /**
   * Shows a page-management error (a page that cannot be added or removed). Default: the shell's
   * own notice dialog.
   */
  notifyError?: (message: string) => void;
  /** Development only (dev tools on): draws a reference image under each page to compare against. */
  referenceRenderer?: (page: StandalonePage & { pageNum: number }) => ReactNode;
  /** Replaces the whole sheet of each page (Pagination and Sheet included); cover spreads excepted. */
  renderPage?: (args: { page: StandalonePage & { pageNum: number }; parent?: PageItem }) => ReactNode;
  /** Extra items in the toolbar's menu, before the shell's own. */
  menuItems?: ReactNode;
  /**
   * The grid class of the reorder dialog's page thumbnails. It replaces the shell's
   * `uhuu-page-order-grid-cols` (it does not merge).
   */
  gridColsClass?: string;
  /**
   * Called with the item a user is about to add: return it (or a changed copy, async allowed) to
   * add it, or `null` to cancel.
   */
  resolveNewItem?: (draft: PageItem) => Promise<PageItem | null | void> | PageItem | null | void;
  /**
   * What prints over every page. Default: the shell's page number ("Page N / total", untranslated).
   * `false` or `null`: nothing, for templates that number their own pages.
   */
  renderOverlay?: false | null | ((context: {
    /** 1-based position in the flow-expanded document, as page components get it. */
    pageNum: number;
    /** Sheets in the flow-expanded document. */
    totalPages: number;
    /** @deprecated Use `pageNum`. */
    pageNo: number;
    /** @deprecated Use `totalPages`. */
    total: number;
    pageId: string;
    parent?: PageItem;
  }) => ReactNode);
  reorderTitle?: LocalizedText;
  reorderDescription?: LocalizedText;
  /** The payload key the page list and its state are saved under. Default `uhuu_page_editor`. */
  stateKey?: string;
  /**
   * Development only: the brand-kit switcher in the dev tools menu (dev tools on). It lists
   * `brandKits` and calls back; it does not load a kit: wire the choice to `BrandKitProvider`.
   * Inside a `BrandKitProvider` on a development host the Brand Kit submenu also offers
   * *Preview a version…* (`?brand=`), with or without `brandKits`.
   */
  brandKits?: BrandKitOption[];
  /** Development only: the kit the dev switcher marks as active. */
  activeBrandKitId?: string;
  /** Development only: a kit chosen in the dev switcher. */
  onSelectBrandKit?: (id: string) => void;
  /** Development only: a kit URL or id typed into the dev switcher. */
  onAddBrandKit?: (input: string) => void;
}

/** Template-owned JSON data and the maps the editor shell updates. */
export type TemplatePayload = Record<string, unknown> & {
  pages?: Record<string, Record<string, unknown> | undefined>;
  groups?: Record<string, Record<string, unknown> | undefined>;
  integrations?: Record<string, unknown>;
};

export interface TemplateDataProviderProps {
  payload?: TemplatePayload;
  onPayloadChange?: (nextPayload: TemplatePayload) => void;
  children: ReactNode;
  stateKey?: string;
}

export interface IntegrationAdapterConfig {
  /** The page's `dataBinding` prop: dialog paths are built from its integration binding. */
  dataBinding?: PageDataBinding | Record<string, unknown>;
  /** The integration's data the resolver reads. */
  integration?: unknown;
  /**
   * Required: how `data` is read from `integration`. A map of keys to paths
   * (`"listing ?? pba_listing"`) or functions, or one function `(integration, payload) => data`.
   */
  resolver?: Record<string, string | ((integration: any) => unknown)> | ((integration: any, payload?: unknown) => unknown);
  /** The gallery image dialogs browse: a path, or read from the integration. */
  galleryPath?: string | ((integration: any) => string | null);
  /** @deprecated Never read: `data` is what `resolver` returns. Removed in 0.5.0. */
  defaults?: Record<string, unknown>;
  [key: string]: unknown;
}

/** A dialog `useIntegrationAdapter` builds, its `path` under the page's integration binding. */
export interface IntegrationDialog {
  path: string;
  subPath?: string | null;
  imageGalleryPath?: string | null;
  type?: string;
  imagePath?: string;
  ratio?: number;
  rows?: number;
  value?: unknown;
  payload?: unknown;
  [key: string]: unknown;
}

export interface IntegrationAdapter<TData = any> {
  /** What `resolver` returned. */
  data: TData;
  /** The dialog for a field under the integration (`null` without an integration binding). */
  dialog: (subPath: string, options?: Record<string, unknown>, value?: unknown) => IntegrationDialog | null;
  /** `getDialogProps` of that dialog: spread onto the element that renders the field. */
  dialogProps: (subPath: string, options?: Record<string, unknown>, value?: unknown) => DialogBindingProps;
  galleryPath: string | null;
  /** The integration instance the page is bound to. */
  instanceId: string | null;
  integration: unknown;
  [key: string]: unknown;
}

type DocumentOptionFor<Option> = Option extends PageOption
  ? Omit<Option, "getValue" | "onChange" | "applyPatch" | "appliesTo"> & PayloadOptionStorage
  : never;

/**
 * The 0.4 shape, as `uhuu templates theme inspect <templateId> --snippet` prints a legacy theme:
 * `key` names the payload key, and a select may leave out `type`.
 * @deprecated Define document options as payload page options are, with `id`.
 */
export interface LegacyDocumentOptionDefinition {
  key: string;
  type?: "select" | "toggle";
  label: LocalizedText;
  description?: LocalizedText;
  options?: Array<{ value: string | number | boolean; label: LocalizedText }>;
  defaultValue?: unknown;
  valueType?: OptionValueType;
}

/**
 * One document-level option: a top-level payload key the template reads (`payload.language`),
 * defined, valued and drawn as a payload page option is (`id` names the key, `field` overrides
 * it). See docs/document-options.md.
 */
export type DocumentOptionDefinition = DocumentOptionFor<PageOption> | LegacyDocumentOptionDefinition;

export interface DocumentOptionsProps {
  /**
   * The payload the template renders. Required outside a TemplateDataProvider; inside one, the
   * provider's payload is used when it is left out.
   */
  payload?: Record<string, unknown> | null;
  options: DocumentOptionDefinition[];
  /** Heading of the control. Default: "Document options" in the shell's interface language. */
  title?: LocalizedText;
  /**
   * Called for local choices, when there is no uhuu document editor on the page. In the editor a
   * choice arrives through the next payload update.
   */
  onChange?: (key: string, value: unknown) => void;
  /** The corner of the control's own floating bar, drawn when no PageEditor toolbar is on screen. Default `bottom-right`. */
  toolbarPosition?: ToolbarPosition;
  /** Inside PageEditor's floating toolbar: the entry's wrapper. Otherwise the control's own floating bar. */
  className?: string;
  style?: CSSProperties;
}

export const EditorShell: {
  TemplateDataProvider: ComponentType<TemplateDataProviderProps>;
  PageEditor: ComponentType<PageEditorProps>;
  InteractiveModeProvider: ComponentType<InteractiveModeProviderProps>;
  useInteractive: () => InteractiveModeContextValue;
  useIntegrationAdapter: <TData = any>(config: IntegrationAdapterConfig) => IntegrationAdapter<TData>;
  /**
   * Document-level options for top-level payload keys, defined and drawn as page options are. A
   * choice is an edit in the uhuu document editor. Joins the nearest InteractiveModeProvider's
   * PageEditor toolbar, else floats in a corner. Hidden outside edit mode, in the PDF renderer and
   * in print. See docs/document-options.md.
   */
  DocumentOptions: ComponentType<DocumentOptionsProps>;
};

export interface StaticSheetProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  pageNo: number;
  showBleed?: boolean;
  overlay?: (args: { pageNo: number }) => ReactNode;
  "data-page-key"?: string;
}

/**
 * Passed as `spread` to cover page components while PageEditor composes a
 * perfect-binding cover spread (`pageFormat.binding` + `pageFilter.mode: 'cover'`).
 * Absent for plain single-page renders. mm.
 */
export interface SpreadInfo {
  sheet: CoverSheetKind;
  side: CoverPanelSide;
  spine: number;
  glue: number;
  bleed: number;
}

/** Props of `templateConfig.spine.component`, rendered on the outer cover sheet's spine strip. */
export interface SpineComponentProps {
  payload?: Record<string, unknown>;
  sheet: "outer";
  spine: number;
  glue: number;
  bleed: number;
  /** Trim page height (mm); the strip is `height + 2 × bleed` tall and `spine` wide. */
  height: number;
  totalPages?: number;
  pages: { left?: StandalonePage; right?: StandalonePage };
}

/** `templateConfig.spine` — optional artwork for the spine of a perfect-bound cover. */
export interface PageEditorSpineConfig {
  component?: ComponentType<SpineComponentProps>;
}

export interface StaticPaginationProps {
  children: ReactNode;
  className?: string;
  setup: StaticPageSetup;
}

/**
 * A page setup (`Static.Pagination` `setup`, `PageEditor` `pageFormat`), in mm. `format`
 * (`"A4"`, `"LETTER"`, …) with `orientation`, or `width` and `height`; a custom size outside
 * 10–4000 mm falls back to A4.
 */
export interface StaticPageSetup {
  format?: string;
  // `string & {}`: suggestions for the known values without rejecting a string variable.
  orientation?: "portrait" | "landscape" | (string & {});
  width?: number;
  height?: number;
  bleed?: number;
  /** Draws the bleed and trim guides on screen. */
  showBleed?: boolean;
  /** `single_page` (default) or `two_pages` (facing pages side by side). */
  preview?: "single_page" | "two_pages" | (string & {});
  /** A print stylesheet URL, or its CSS text, added for printing. */
  printCssUrl?: string;
  printCssRaw?: string;
  /** Perfect-binding spine/glue, for a cover spread. */
  binding?: BindingConfig | null;
  [key: string]: unknown;
}

export interface StaticFlowAreaProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onFlowMeasurement?: (measurement: StaticFlowMeasurement) => void;
  /**
   * Continuation sheets lay this area out at another height than the first (a title on the first
   * sheet only): PageEditor also measures the page as a continuation (`page.virtualPageIndex` 1)
   * and plans every later sheet with that height. Default: every sheet has the first one's height.
   */
  measureContinuation?: boolean;
  /**
   * Room kept free at the bottom of every sheet the flow continues from, so a break never sits on
   * the sheet's edge; the sheet the flow ends on keeps its full area, and a flow that fits one
   * sheet lays out as without it. A CSS length with an absolute unit (`"20mm"`, `"12px"`) or a
   * number of px (not mm: write `"20mm"`); any other value keeps no room and warns. `Flow.Columns`
   * does not keep it.
   */
  breakReserve?: number | string;
}

/**
 * What the pages are drawn for: `print`, the document as it prints, or `screen`, the document read
 * on screen (`PageEditor` `view`).
 */
export type StaticView = "print" | "screen";

export interface StaticFlowPageProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  flowAreaClassName?: string;
  flowAreaStyle?: CSSProperties;
  onFlowMeasurement?: (measurement: StaticFlowMeasurement) => void;
  /** See `StaticFlowAreaProps.measureContinuation`. */
  measureContinuation?: boolean;
  /** See `StaticFlowAreaProps.breakReserve`. */
  breakReserve?: number | string;
}

/**
 * `TType`: the item types `metaDefaults` keys and `getItemType` returns, so a misspelled type key is
 * a type error (`Flow.Items<Row, "heading" | "row">`). Default: any string.
 */
export interface StaticFlowProps<TItem = unknown, TType extends string = string> {
  /** Stable and unique within the page. */
  id: string;
  items: TItem[];
  getKey: (item: TItem, index: number) => Key;
  /** The third argument describes this item's visible fragment (page, position, split piece). */
  renderItem: (
    item: TItem,
    index: number,
    fragment: StaticFlowFragmentContext<TItem>
  ) => ReactNode;
  getItemMeta?: (item: TItem, index: number) => StaticFlowItemMeta | undefined;
  /** Meta per item type, under `getItemMeta`; the type is `getItemType`'s, else `item.type`. */
  metaDefaults?: Partial<Record<TType, StaticFlowItemMeta>>;
  getItemType?: (item: TItem, index: number) => TType | undefined;
  /** Opt into a separately measured, repeatable group header (`renderGroupHeader`). */
  getItemGroup?: (
    item: TItem,
    index: number
  ) => StaticFlowItemGroup | string | null | undefined;
  renderGroupHeader?: (
    group: StaticFlowItemGroup,
    fragment: StaticFlowFragmentContext<TItem>
  ) => ReactNode;
  className?: string;
  itemClassName?: string | ((item: TItem, index: number) => string | undefined);
  groupHeaderClassName?: string | ((
    group: StaticFlowItemGroup,
    fragment: StaticFlowFragmentContext<TItem>
  ) => string | undefined);
  renderUnplaceableItem?: (
    item: StaticFlowUnplaceableItem,
    context: StaticFlowUnplaceableContext
  ) => ReactNode;
  /**
   * Render each item as the element `renderItem` returns, carrying the flow's attributes, class
   * names and key, instead of inside a wrapper `<div>`; group headers and a custom unplaceable
   * fallback too. Each callback must return one element: a DOM element, or a component that passes
   * the props it receives on to its root DOM element. Anything else renders in the wrapper, with a
   * development warning; items whose element drops the attributes are `unmarked-flow-item` errors.
   */
  asChild?: boolean;
  /** The Flow's root element. Default `div`; `tbody`, `ul` or `ol` for table rows or list items. */
  as?: keyof HTMLElementTagNameMap;
}

export interface StaticFlowTextProps extends HTMLAttributes<HTMLElement> {
  /**
   * A string (may contain `\n`) or inline content: text, `span`, `strong`, `em`, `b`, `i`, `a`,
   * `small`, `sub`, `sup`, `br` (and other inline text elements) and fragments. Anything else
   * renders, with a development warning, but its item is not split.
   */
  children?: ReactNode;
  /** Default `div`: a block, so its line boxes are its own. */
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  style?: CSSProperties;
}

export interface StaticFlowColumnsRenderContext {
  /** Stable identity only: column geometry callbacks must be page-invariant. */
  flowId: string;
}

export interface StaticFlowColumnsContainerProps {
  className?: string;
  /**
   * Geometry must be identical in measurement and visible output. Vertical group/column margins,
   * padding, borders, fixed/min/max heights, wrapping, and row-gap are unsupported; put measured
   * vertical spacing on items instead.
   */
  style?: CSSProperties;
}

export interface StaticFlowColumnsProps<TItem = unknown, TType extends string = string> extends StaticFlowProps<TItem, TType> {
  /** One-level story layout. Recursive columns are intentionally unsupported. */
  layout: StaticFlowLayoutNode[];
  getColumnGroupProps?: (
    node: Extract<StaticFlowLayoutNode, { kind: "columns" }>,
    context: StaticFlowColumnsRenderContext
  ) => StaticFlowColumnsContainerProps | undefined;
  getColumnProps?: (
    node: Extract<StaticFlowLayoutNode, { kind: "columns" }>,
    column: StaticFlowColumn,
    context: StaticFlowColumnsRenderContext
  ) => StaticFlowColumnsContainerProps | undefined;
  getColumnItemProps?: (
    node: Extract<StaticFlowLayoutNode, { kind: "columns" }>,
    column: StaticFlowColumn,
    itemIndex: number,
    context: StaticFlowColumnsRenderContext
  ) => StaticFlowColumnsContainerProps | undefined;
}

export type HtmlFlowItem = {
  id: string;
  type: string;
  html: string;
  breakBefore: boolean;
};

/** A block from `Flow.fromMarkdown`: the block's own markdown, rendered by the template. */
export type MarkdownFlowItem = {
  id: string;
  type: 'heading' | 'paragraph' | 'list' | 'table' | 'code' | 'quote' | 'rule' | 'image';
  markdown: string;
  breakBefore: boolean;
};

export interface StaticFlowDocumentProps {
  /** Rendered HTML to paginate. Convert markdown or Notion content to HTML first. */
  html: string;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  flowAreaClassName?: string;
  flowAreaStyle?: CSSProperties;
  /** See `StaticFlowAreaProps.measureContinuation`. */
  measureContinuation?: boolean;
  /** See `StaticFlowAreaProps.breakReserve`. */
  breakReserve?: number | string;
  /** Stable flow id within the page. Default `"flow-document"`. */
  id?: string;
  idPrefix?: string;
  flowClassName?: string;
  itemClassName?: string | ((item: HtmlFlowItem, index: number) => string | undefined);
  /**
   * Break meta per tag, merged over the built-in defaults (shallow, by tag): headings keep with
   * the next block; `table`, lists, `pre`, `blockquote`, `figure` and `img` avoid breaking inside.
   */
  metaDefaults?: Partial<Record<string, StaticFlowItemMeta>>;
  getItemMeta?: (item: HtmlFlowItem, index: number) => StaticFlowItemMeta | undefined;
  /** Replaces the default renderer of sanitized HTML (to map HTML to your own components). */
  renderItem?: (item: HtmlFlowItem, index: number) => ReactNode;
  /**
   * The sanitizer the default renderer applies. Default: the built-in DOM URL allow-list. Pass your
   * own (DOMPurify), or `false` only for trusted HTML (development warns once).
   */
  sanitize?: ((html: string) => string) | false;
  /** Wraps the body in an `Editable` with this dialog, so a click edits the HTML. */
  editable?: { path: string; type?: string; [key: string]: unknown };
  /** A parser to use without a DOM (server rendering, tests). Default: the DOM parser. */
  parseHtml?: (html: string) => unknown[];
}

// --- Perfect-binding cover spread (src/uhuu/pagination-static/spread-core.js) ---
// dist ships this file alone, so the module's types are mirrored here. All values mm.

export type BindingType = "perfect" | "saddle";

/** `pageFormat.binding` / `Pagination setup.binding`. Only applied in `cover` filter mode. */
export interface BindingConfig {
  type?: BindingType;
  /** Spine width. The printer supplies this number. */
  spine: number;
  /** Ink-free margin on each side of the spine, inner sheet only. Default 0. */
  glue?: number;
}

export type CoverSheetKind = "outer" | "inner";
export type CoverPanelSide = "left" | "right";

/**
 * Fixed printed pages and the pagination contract: the sheets `PageEditor` renders, used directly
 * by templates without PageEditor; the hold that keeps `data-uhuu-pagination` at `measuring`;
 * the view the pages are drawn for.
 */
export const Static: {
  Pagination: ComponentType<StaticPaginationProps>;
  Sheet: ComponentType<StaticSheetProps>;
  /**
   * Keeps `data-uhuu-pagination` at `measuring` while `pending` is true (the default), for
   * template work the package cannot see: a map, a chart, data a page fetches. Every flow is
   * measured again when it clears. After 10 s a console warning names `label` and the document
   * stops waiting.
   */
  usePaginationHold: (pending?: boolean, label?: string) => void;
  /**
   * The view the pages are drawn for (`PageEditor` `view`): `print` or `screen`. Outside a
   * PageEditor, and always in the renderer, `print`. A template keeps content whole on screen that
   * print splits across pages (a table's rows), and gives such an item meta `growSheet`.
   */
  useView: () => StaticView;
};

/**
 * Content whose length is not known up front, continuing onto generated pages. Mark the page
 * `hasFlow: true` in the PageEditor config. See docs/static-flow-pagination.md.
 */
export const Flow: {
  /** An authored page with one variable-height region (header, footer, the region). */
  Page: ComponentType<StaticFlowPageProps>;
  /** The variable-height region alone, inside a template's own page. */
  Area: ComponentType<StaticFlowAreaProps>;
  /** The items that flow across pages, one `renderItem` each. */
  Items: <TItem = unknown, TType extends string = string>(props: StaticFlowProps<TItem, TType>) => ReactElement | null;
  /** Items laid out in columns, independent or flowing. */
  Columns: <TItem = unknown, TType extends string = string>(props: StaticFlowColumnsProps<TItem, TType>) => ReactElement | null;
  /**
   * Text a `Flow.Items` item may split between lines when it does not fit the room left on its
   * sheet (one per item; `orphans`/`widows` in the item's meta). Renders `<as data-uhuu-flow-text>`.
   */
  Text: ComponentType<StaticFlowTextProps>;
  /** A whole HTML body as a flow: block items, paragraphs and headings split between lines. */
  Document: ComponentType<StaticFlowDocumentProps>;
  /** Markdown source as flow items for `Flow.Items`. */
  fromMarkdown: (markdown?: string, options?: Record<string, unknown>) => MarkdownFlowItem[];
  /** HTML source as flow items for `Flow.Items`. */
  fromHtml: (html?: string, options?: Record<string, unknown>) => HtmlFlowItem[];
  /**
   * For a host that measures its own canvas (Template Studio): the planners FlowArea uses, with
   * the consumer's measured heights, and the DOM readers it measures with.
   */
  planChunks: (input?: StaticFlowPlanInput) => StaticFlowChunk[];
  planColumnChunks: (input?: StaticFlowColumnPlanInput) => StaticFlowChunk[];
  measure: StaticFlowMeasureApi;
};

