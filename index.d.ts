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
  /** An item split between the lines of its `Static.FlowText`: fewest lines on a piece that ends a page. Default 2. */
  orphans?: number;
  /** An item split between the lines of its `Static.FlowText`: fewest lines on the piece that starts the next page. Default 2. */
  widows?: number;
  /**
   * The screen view (`PageEditor` `view="screen"`): where print would scale the item onto a page of
   * its own (taller than its page, and not split by a `Static.FlowText`), it is drawn whole at full
   * size and its sheet grows to hold it. Taller than any page, it starts right under what precedes
   * it. Print ignores it, and so does an item inside a `Static.FlowColumns` column group.
   */
  growSheet?: boolean;
}

/**
 * The lines of an item's `Static.FlowText` (`Static.flowMeasure.readFlowTextLines`), in layout px
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

/** One piece of an item split between the lines of its `Static.FlowText`. */
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
   * ignores it, and so does a `Static.FlowColumns` column group.
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
   * Present on every piece of an item split between the lines of its `Static.FlowText`; absent for
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
 * The DOM reads `Static.FlowArea` measures a laid-out Flow with. Hosts that run
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
   * The `Static.FlowText` elements of `item` itself (not those of a Flow nested in it).
   * @internal Library measurement detail; retained for compatibility.
   */
  readItemFlowTexts: (item: HTMLElement) => HTMLElement[];
  /**
   * The lines of the one `Static.FlowText` in a measured item, for `planFlowChunks({ lines })`, or
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

/** Input for `Static.planFlowChunks`, using heights measured by the consumer. */
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
   * @internal Line metrics per item, as `flowMeasure.readFlowTextLines` reads them (hosts that run
   * their own Flow canvas); `undefined` for items that do not split. An item that does not fit the room left is split at a line (chunks gain `splits`).
   * Without `lines` the plan is item-level. `planFlowColumnChunks` does not split.
   */
  lines?: Array<StaticFlowItemLines | undefined>;
  /**
   * Room kept free at the bottom of every page the flow breaks from, in px; the page it ends on
   * keeps its full region, so a flow that fits one page plans as without it. 0 by default; a
   * reserve of a page or more is ignored. `planFlowColumnChunks` does not take it.
   */
  breakReserve?: number;
}

/** Input for `Static.planFlowColumnChunks`, using globally indexed leaf measurements. */
export interface StaticFlowColumnPlanInput extends StaticFlowPlanInput {
  nodes: StaticFlowLayoutNode[];
  columnHeaderGroupHeights?: Record<string, Record<string, Record<string, number>>>;
  columnHeaderGroupRepeats?: Record<string, Record<string, Record<string, boolean>>>;
}

export interface ImageBlockDialog {
  path: string;
  /** The dialog to open. A frame message (`frameEditDialog`) has `frame` instead. */
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
export const Editable: ComponentType<EditableProps>;

/** What `getDialogProps` returns. Spread it onto the element that renders the field. */
export interface DialogBindingProps {
  /** Marks the element for the editor (`""`). */
  "data-uhuu"?: string;
  /** `dialog.type`, so CSS can tell an empty text binding from an empty image. */
  "data-uhuu-type"?: string;
  /** Opens the dialog in the interactive editor. Never set in renderer mode (`window.$uhuu_renderer`). */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * The props `Editable` and `ImageBlock` attach, for a template that binds its own element:
 * `<p {...getDialogProps({ dialog: { path, type: "textarea", value } })}>`. Renderer mode gets
 * the markers without a click handler. No dialog returns `{}`. Never returns `className`.
 */
export function getDialogProps(props: { dialog?: object | null } | null | undefined): DialogBindingProps;

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
// The read helpers are the vendored `uhuu.frame.v1` module (src/uhuu/frame/vendor, generated from
// uhuu-editor-dialogs). dist ships this file alone, so the module's types are mirrored here;
// test/frame-vendor.test.mjs checks the mirror against the vendored source.

/** `value.uhuuFrame.schema` of a frame. */
export const FRAME_SCHEMA: "uhuu.frame.v1";
/** Key of the frame record inside a frame value. Namespaced so it cannot collide with template keys. */
export const FRAME_KEY: "uhuuFrame";

/** Which legacy image wins when an old value carries both a generated image and a pick. */
export type FrameLegacyPrecedence = "generated" | "pick";

/** A transform applied to a source's image (crop, AI enhance, …). Its base is the previous step. */
export interface FrameStep {
  type: string;
  url: string;
  width?: number;
  height?: number;
  mimeType?: string;
  /** Replayable parameters or result metadata (crop box, AI asset id, …). */
  state?: Record<string, unknown>;
}

/** An overlay drawn over a source's image by the page (annotation). Never composited into the image. */
export interface FrameLayer {
  state: unknown;
  /** The image the overlay was drawn on. */
  baseUrl?: string;
  /** The image under the overlay changed after it was drawn. */
  stale?: boolean;
}

/** One dialog's own entry: its last image, the state it reopens with, its steps and layers. */
export interface FrameSource {
  /** Absent for state-only saves (a map saved without a design image). */
  url?: string;
  /** Key the dialog used for its URL (`image` for generated dialogs); reproduced when it reopens. */
  urlKey?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  /** Everything else the dialog saved, URL keys removed. */
  state?: Record<string, unknown>;
  steps?: FrameStep[];
  layers?: Record<string, FrameLayer>;
}

/** One-level undo: the active source before the last action and the entry it changed. */
export interface FrameUndo {
  active: string | null;
  /** Source entry the action changed; absent when only `active` moved. */
  type?: string;
  /** That entry before the action; `null` when the action created it. */
  before?: FrameSource | null;
}

/** `value.uhuuFrame`: every source the slot holds and the one it shows. */
export interface FrameRecord {
  schema: "uhuu.frame.v1";
  active: string | null;
  sources: Record<string, FrameSource>;
  previous?: FrameUndo;
}

/**
 * A frame value as stored in the payload. Its top level mirrors the active source in the shape it
 * saved before frames — a map's image under `image`, a pick's under `contentUrl`, both also under
 * `url` — so `imageUrl(value)` and the readers templates already have keep working.
 */
export type FrameValue = Record<string, unknown> & { uhuuFrame: FrameRecord };

export interface FrameOptions {
  /** Source types the field declares, in order. Resolves a legacy generated shape with no identifying key (a bare `{ image }`). */
  sources?: readonly string[];
  /** Default `'generated'`. Implenia IM passes `'pick'`. */
  legacyPrecedence?: FrameLegacyPrecedence;
  /**
   * A legacy generated value whose upload failed keeps its render as a `data:` URL
   * (`dataImage`). `'show'` (default) shows it, as Implenia IM, implenia-teaser and jbre's
   * cadastral do; `'ignore'` treats the source as having no image, as wuw, evernest, go and
   * jbre's map do (their placeholder shows). New saves never carry one.
   */
  legacyDataImage?: 'show' | 'ignore';
  /**
   * Also draw the overlay a source dialog keeps in its own state (cadastral's
   * `annotationSvg`). Off by default: the cadastral dialog bakes that outline into its image.
   */
  intrinsicOverlays?: boolean;
  /** A legacy overlay saved at a separate path (`annotationPath`); folded into the active source. */
  legacyLayer?: unknown;
  /** Layer type the legacy overlay becomes. Default `'annotation'`. */
  legacyLayerType?: string;
}

export interface FrameDisplay {
  /** The image to show; `''` when there is none. */
  url: string;
  width?: number;
  height?: number;
  mimeType?: string;
  /** Active source type. */
  source: string | null;
  /** Number of transforms applied on top of the source image. */
  steps: number;
}

export interface FrameOverlay {
  /** Layer type, or the source type for an overlay the source dialog drew itself (cadastral). */
  key: string;
  svg: string;
  stale: boolean;
  /** Drawn by the source dialog as part of its own output. */
  intrinsic: boolean;
}

/** The image an image-accepting dialog opens with (`eventData.input`). */
export interface FrameImageInput {
  url: string;
  width?: number;
  height?: number;
  mimeType?: string;
  /** Frame source the image comes from. */
  source?: string;
}

/** True when `value` carries a `uhuu.frame.v1` record. */
export function isFrameValue(value: unknown): value is FrameValue;

/**
 * The frame record of any value: a frame (validated), or a value saved before frames (URL string,
 * ImageObject, a generated dialog's output) read into one in memory. Never writes. `null` for an
 * empty slot. A frame whose mirrored `contentUrl` was patched by a writer that does not know frames
 * reads that patch as the newest pick.
 */
export function normalizeFrame(value: unknown, options?: FrameOptions): FrameRecord | null;

/** What the page should show for this value: URL, size and the source it comes from. */
export function frameDisplay(value: unknown, options?: FrameOptions): FrameDisplay;

/** The image URL to show for a frame or legacy value; `''` when there is none. */
export function frameImage(value: unknown, options?: FrameOptions): string;

/** The active source type, or `null`. */
export function frameActive(value: unknown, options?: FrameOptions): string | null;

/** The input an image-accepting dialog opens with; `null` when nothing is shown. */
export function frameInput(value: unknown, options?: FrameOptions): FrameImageInput | null;

/**
 * The overlays to draw over the shown image, bottom to top: the source dialog's own overlay
 * (cadastral's `annotationSvg`), then the active source's layers. Stale layers are included.
 */
export function frameOverlays(value: unknown, options?: FrameOptions): FrameOverlay[];

/**
 * The value a source dialog reopens with, in the shape it saved (`{ list, home, mapbox, image }` for
 * the map). `undefined` when the source has never been saved.
 */
export function frameSourceView(value: unknown, type: string, options?: FrameOptions): Record<string, unknown> | undefined;

/** Any value as a stored frame, showing what it showed before. `null` for an empty slot. */
export function toFrameValue(value: unknown, options?: FrameOptions): FrameValue | null;

/**
 * The options every reader of a slot passes, from its declaration: its sources, legacy
 * precedence, failed-upload rule, and the overlay saved at `annotationPath` (read from `payload`).
 */
export function frameOptionsOf(declaration: Partial<FrameDeclaration>, payload?: unknown): FrameOptions;

/** The image shown now and the overlay saved at `annotationPath`: what an editor without frames annotates. */
export interface FrameLegacyCurrent {
  image?: string;
  annotation?: unknown;
}

/**
 * `{ path, frame, types }`: the message `$uhuu.editFrame` sends, for an `ImageBlock` `dialog` or an
 * SDK without `editFrame`. `types` is the chooser an editor without frames shows. `null` without a
 * `path` or a source with a `type`.
 */
export function frameEditDialog(
  declaration: FrameDeclaration,
  current?: FrameLegacyCurrent | null,
): { path: string; frame: Omit<FrameDeclaration, "path">; types: Record<string, unknown>[] } | null;

/** Opens a frame from a template's own click handler: `$uhuu.editFrame` when the SDK has it, else `editDialog` with `frameEditDialog`'s message. No host, no call. */
export function openFrame(declaration: FrameDeclaration, current?: FrameLegacyCurrent | null): void;

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

/**
 * An image slot several dialogs write (map, satellite, cadastral, gallery pick, crop, annotation),
 * stored as a `uhuu.frame.v1` value. Renders the shown image through `imageUrl` with every overlay
 * of the active source over it, and opens `$uhuu.editFrame` on click in the editor (`editDialog`
 * with the legacy `types` on an older SDK; nothing in renderer mode). Layout props are ImageBlock's.
 */
export const FrameBlock: ComponentType<FrameBlockProps>;

/**
 * A neutral, brand-free empty image (outline and icon in Text mixed into Paper) for `ImageBlock`'s
 * `placeholder`, so templates never borrow placeholder photos from a client folder.
 */
export const ImagePlaceholder: ComponentType<{ label?: string; className?: string; style?: CSSProperties }>;

/** A position on the sheet in mm: `left` or `right`, and `top` or `bottom`. */
export interface FurniturePosition { left?: number; right?: number; top?: number; bottom?: number }

/**
 * The printed page number of sheet `pageNo` (1-based, deck order), or `null` when it is not numbered.
 * Counting starts at the first numbered sheet and skips unnumbered sheets after it; `offset` is subtracted.
 */
export function folioNumber(input: {
  pageNo: number;
  sheetKeys: readonly string[];
  numbered: readonly string[] | ((key: string) => boolean);
  offset?: number;
}): number | null;

/** The page number in the brand's body font and muted colour, at the verso (even) or recto (odd) position. */
export const PageFolio: ComponentType<{
  number: number | null | undefined;
  pageNo: number;
  verso: FurniturePosition;
  recto: FurniturePosition;
  /** pt, default 9. */
  size?: number;
  className?: string;
  style?: CSSProperties;
}>;

/** A running header: title, the brand's logo (default the mark on Paper) and a `border` or `accent` rule. */
export const RunningHeader: ComponentType<{
  position: FurniturePosition;
  children?: ReactNode;
  logo?: false | { kind?: "primary" | "mark" | "wordmark"; background?: "light" | "dark"; name?: string; locale?: string };
  /** mm, default 6. */
  logoHeight?: number;
  rule?: "border" | "accent" | false;
  className?: string;
  style?: CSSProperties;
}>;

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
  /** Template variables Brand Kit precomputed at publish. Applied as is when `version` is 2. */
  runtime?: BrandKitRuntimeBlock;
  [key: string]: unknown;
}

/**
 * `brandkit.json.runtime` (brandkit.json "2.0"): shadcn role variables (`--primary`, `--color-primary`),
 * `--color-kit-*` / `--font-*` / `--font-kit-*` values, ready to apply, and the fonts to load.
 */
export interface BrandKitRuntimeBlock {
  version: 2;
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
  /** Absolute URL (SVG preferred, else PNG). */
  src: string;
  alt?: string;
  kind: "primary" | "mark" | "wordmark";
  background?: "light" | "dark" | "any";
  /** The language a named or language version is for. */
  locale?: string;
  minWidth?: { value: number; unit: "px" | "mm" };
  clearSpace?: { value: number; unit: "px" | "mm" | "mark" };
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
  source: "config.maps" | "config.env";
}

export type BrandKitLogoKind = "primary" | "logo" | "lockup" | "mark" | "icon" | "symbol" | "wordmark";
export type BrandKitMediaKind = "photos" | "icons" | "graphics" | "backgrounds" | "templates";

/** What `useBrandKit()` returns. */
export interface BrandKitRuntime {
  /** The kit being rendered: the fetched one, else the `brandKit` prop. */
  brandKit: BrandKitJson | null;
  /** `--<role>`, `--color-<role>`, `--color-kit-*`, `--font-*` and `--font-kit-*`, as the provider's scope element carries them. */
  cssVars: Record<string, string>;
  /** Where the rendered kit came from (`src` once fetched, else the `sourceUrl` prop). */
  sourceUrl?: string;
  /** `idle` without `src` (a snapshot or the `brandKit` prop renders); `loading` until it arrives; `ready`; `error`. */
  status: "idle" | "loading" | "ready" | "error";
  /** The snapshot the rendered kit came from, when no fetched kit replaced it. */
  snapshot: BrandKitSnapshotInfo | null;
  /**
   * A logo, resolved: `logoSystem` first, then `logos`. Default `{ kind: "primary", background: "light" }`.
   * `name` and `locale` pick a named or language version, falling back to the standard logo.
   */
  logo(options?: { kind?: BrandKitLogoKind; background?: "light" | "dark"; name?: string; locale?: string }): BrandKitLogo | null;
  /** The brand's chart colors as hex when it set them, else `fallback` (the template's). */
  chartPalette(options?: { fallback?: string[]; count?: number }): BrandChartPalette;
  /** The brand's default locale and currency (`extensions.locale`); `payload.locale` wins over it. */
  locale: { locale?: string; currency?: string };
  /** The assigned media collection's promoted version, items resolved. */
  collection(kind: BrandKitMediaKind | string, options?: { versionId?: string }): BrandKitCollection | null;
  mapStyle(mode: "micro" | "macro"): BrandKitMapStyle | null;
  /** A `config.env` value; keys compare case- and punctuation-insensitively, first present wins. */
  env(keys: string | string[]): string | undefined;
  /** A kit-relative asset path made absolute. */
  resolveUrl(path: unknown): string | undefined;
}

export interface BrandKitProviderProps {
  /** The kit to render; with `src`, the fallback until the fetched kit arrives or when the fetch fails. */
  brandKit?: BrandKitJson | null;
  /** A brandkit.json URL to fetch, usually `brandKitSelection(payload, { snapshot }).src`. */
  src?: string | null;
  /**
   * The template's locked brand (`src/brand/`, from `brandkit pull`): renders with no request for
   * the brand, logos and fonts from the template's copies. Wins over `brandKit`; a fetched `src`
   * replaces it. Pass a stable object.
   */
  snapshot?: BrandKitSnapshot | null;
  /** Brand values the template opts into beyond colours and fonts: `{ radius: true }` adds `--radius*`. Stable object. */
  adopt?: { radius?: boolean };
  /** Custom properties for whatever the kit leaves out; the kit wins. Pass a stable object. */
  defaults?: Record<string, string>;
  /** Where a `brandKit` passed in came from; its directory resolves relative URLs when the kit has no `baseUrl`. */
  sourceUrl?: string;
  onLoad?: (brandKit: BrandKitJson) => void;
  /** Default: `console.error`. */
  onError?: (error: unknown) => void;
  /** For the scope element. `style` is applied last, so `{ display: "block" }` gives it a box. */
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Scopes a kit's CSS variables around the pages and their overlay chrome, on a `display: contents`
 * element (`data-uhuu-brand-kit-status` tells a print step when a fetched kit has arrived), and
 * loads the fonts the kit declares. Colours are hex, `rgb()`/`rgba()`, `oklch()`/`oklab()` or
 * keywords: HSL is converted, anything else is skipped as if absent.
 */
export const BrandKitProvider: ComponentType<BrandKitProviderProps>;

/** The nearest `BrandKitProvider`'s runtime, or `null` outside one. */
export function useBrandKit(): BrandKitRuntime | null;

/** Brand Kit's production location for published kits. */
export const BRAND_KIT_PUBLIC_BASE_URL: string;

/**
 * The brandkit.json URL a payload points at: `brandKitUrl` (URL or `kit-…` id), `brandKitId`, or
 * `brandKit.storage.publicUrl`. Ids need `brandKitTeamId` (or `teamId`) and resolve under `publicBaseUrl`.
 * @deprecated Use `brandKitSelection(payload, { snapshot })`: a pinned `payload.brand`, then the template's snapshot.
 */
export function brandKitSourceUrl(
  payload: Record<string, unknown> | null | undefined,
  options?: { publicBaseUrl?: string; teamId?: string | number },
): string | null;

/**
 * Which brand a document renders: a pinned `payload.brand` (unpinned warns), then the deprecated
 * `brandKitUrl` / `brandKitId` (warns), then the template's snapshot, then none.
 */
export function brandKitSelection(
  payload: Record<string, unknown> | null | undefined,
  options?: { snapshot?: BrandKitSnapshot | null; publicBaseUrl?: string; teamId?: string | number },
): { source: "payload" | "payload-legacy" | "snapshot" | "none"; src: string | null; pinned: boolean; presetId?: string };

/** A template's locked brand: the published document, its `brand.lock.json`, and where the copies are served. */
export interface BrandKitSnapshot {
  brandKit: BrandKitJson;
  /** `brand.lock.json` (`uhuu.brand-lock.v1`). */
  lock: Record<string, unknown>;
  /** The folder the snapshot is served from (`/brand`, an absolute URL). */
  baseUrl?: string;
  /** Snapshot paths to bundled URLs (`import.meta.glob('./brand/assets/**', { query: '?url', import: 'default', eager: true })`, keyed by `assets/…`). */
  assets?: Record<string, string>;
}

export interface BrandKitSnapshotInfo {
  kind: "team" | "template";
  kitId?: string;
  version?: string;
  digest?: string;
}

export const BRAND_LOCK_SCHEMA: "uhuu.brand-lock.v1";

/** The kit a snapshot renders: copied files point at the template's copies, the rest at absolute published URLs. */
export function brandKitFromSnapshot(snapshot: BrandKitSnapshot): { brandKit: BrandKitJson; lock: Record<string, unknown>; info: BrandKitSnapshotInfo } | null;

export interface BrandChartPalette {
  colors: string[];
  source: "brand" | "template";
}

/** Chart colors as `#rrggbb`: the brand's when it set them (Brand Kit publishes them only then), else `fallback`. */
export function brandChartPalette(brandKit: BrandKitJson | null | undefined, options?: { fallback?: string[]; count?: number }): BrandChartPalette;

/**
 * The chart dialog's `config.brand` (`ChartDialogBrand`): the series palette from `brandChartPalette`
 * and ink, line, muted and surface, all `#rrggbb`. Missing roles are left for the dialog's defaults.
 */
export function brandChartDialogBrand(
  brandKit: BrandKitJson | null | undefined,
  options?: { fallback?: string[]; count?: number },
): { palette?: string[]; ink?: string; line?: string; muted?: string; surface?: string };

/** `#rrggbb` for hex, `rgb()`, HSL, `oklch()` or `oklab()`; `undefined` otherwise. */
export function colorToHex(value: unknown): string | undefined;

/** The brand's default locale and currency (`extensions.locale.strings`). */
export function brandKitLocale(brandKit: BrandKitJson | null | undefined): { locale?: string; currency?: string };

/** A number in the locale (`payload.locale`, else the brand's); Swiss locales group with `'`. */
export function formatNumber(
  value: number,
  options?: { locale?: string; brandKit?: BrandKitJson | null; apostrophe?: "straight" | "typographic" } & Intl.NumberFormatOptions,
): string;

/** Money; Swiss locales print `CHF 3'600'000.–` (whole) and `CHF 1'250.50`. Currency: option, brand, `CHF`. */
export function formatMoney(
  value: number,
  options?: { locale?: string; currency?: string; brandKit?: BrandKitJson | null; wholeDash?: boolean; apostrophe?: "straight" | "typographic" },
): string;

/** A date in the locale; `dateStyle: "long"` unless date fields are given. */
export function formatDate(value: Date | string | number, options?: { locale?: string; brandKit?: BrandKitJson | null } & Intl.DateTimeFormatOptions): string;

/** Fetches a brandkit.json; rejects on network errors, non-2xx and non-object bodies. */
export function loadBrandKit(url: string, options?: { fetch?: typeof fetch; signal?: AbortSignal }): Promise<BrandKitJson>;

export function brandKitLogo(
  brandKit: BrandKitJson | null | undefined,
  options?: { kind?: BrandKitLogoKind; background?: "light" | "dark"; name?: string; locale?: string; sourceUrl?: string },
): BrandKitLogo | null;

export function brandKitCollection(
  brandKit: BrandKitJson | null | undefined,
  kind: BrandKitMediaKind | string,
  options?: { sourceUrl?: string; versionId?: string },
): BrandKitCollection | null;

export function brandKitMapStyle(brandKit: BrandKitJson | null | undefined, mode: "micro" | "macro"): BrandKitMapStyle | null;

export function brandKitEnv(brandKit: BrandKitJson | null | undefined, keys: string | string[]): string | undefined;

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
   * decide what changes (a table kept whole); a `Static.Flow` item with meta `growSheet` is drawn
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

export interface StaticCoverSpreadOverlayArgs {
  pageNo: number;
  side: CoverPanelSide;
  sheet: CoverSheetKind;
}

/** One physical cover sheet of a perfect-bound product. See docs/printer-cover-spine-support.md. */
export interface StaticCoverSpreadProps {
  /** `outer` = back cover · spine · front cover. `inner` = inside front · blank spine + glue · inside back. */
  sheet: CoverSheetKind;
  left: ReactNode;
  right: ReactNode;
  /** Spine artwork, outer sheet only. */
  spine?: ReactNode;
  /** Original document page numbers `[left, right]`. */
  pageNo?: [number, number];
  overlay?: (args: StaticCoverSpreadOverlayArgs) => ReactNode;
  /** Overrides `binding` from the Pagination setup. */
  binding?: BindingConfig | null;
  showBleed?: boolean;
  className?: string;
  style?: CSSProperties;
  leftClassName?: string;
  rightClassName?: string;
  leftPageKey?: string;
  rightPageKey?: string;
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
   * number of px (not mm: write `"20mm"`); any other value keeps no room and warns. `Static.FlowColumns`
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
 * a type error (`Static.Flow<Row, "heading" | "row">`). Default: any string.
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

/** A block from `Static.markdownToFlowItems`: the block's own markdown, rendered by the template. */
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

export interface ResolvedBinding {
  type: "perfect";
  spine: number;
  glue: number;
}

export interface SpreadBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type CoverSheetKind = "outer" | "inner";
export type CoverPanelSide = "left" | "right";

export interface CoverSpreadPageInput {
  width?: number;
  height?: number;
  bleed?: number;
  binding?: BindingConfig | null;
}

export interface CoverSheetSize {
  width: number;
  height: number;
  trimWidth: number;
  trimHeight: number;
  spread: boolean;
}

export interface CoverSpreadPanel<TPage = unknown> {
  side: CoverPanelSide;
  page: TPage;
  trim: SpreadBox;
  bleedBox: SpreadBox;
}

export interface CoverSpreadSheet<TPage = unknown> {
  sheet: CoverSheetKind;
  index: number;
  panels: CoverSpreadPanel<TPage>[];
  spine: SpreadBox & { blank: boolean };
  glueZones: Array<SpreadBox & { side: CoverPanelSide }>;
}

export interface CoverSpreadPlan<TPage = unknown> {
  binding: ResolvedBinding;
  page: { width: number; height: number; bleed: number };
  sheet: { width: number; height: number; trimWidth: number; trimHeight: number };
  sheets: CoverSpreadSheet<TPage>[];
}

export const Static: {
  Pagination: ComponentType<StaticPaginationProps>;
  Sheet: ComponentType<StaticSheetProps>;
  FlowArea: ComponentType<StaticFlowAreaProps>;
  FlowPage: ComponentType<StaticFlowPageProps>;
  Flow: <TItem = unknown, TType extends string = string>(props: StaticFlowProps<TItem, TType>) => ReactElement | null;
  FlowColumns: <TItem = unknown, TType extends string = string>(props: StaticFlowColumnsProps<TItem, TType>) => ReactElement | null;
  /**
   * Text a `Static.Flow` item may split between lines when it does not fit the room left on its
   * sheet (one per item; `orphans`/`widows` in the item's meta). Renders `<as data-uhuu-flow-text>`.
   */
  FlowText: ComponentType<StaticFlowTextProps>;
  planFlowChunks: (input?: StaticFlowPlanInput) => StaticFlowChunk[];
  planFlowColumnChunks: (input?: StaticFlowColumnPlanInput) => StaticFlowChunk[];
  /** @internal Instrumentation for library tests; does not affect pagination plans. */
  createFlowPlanMetrics: () => StaticFlowPlanMetrics;
  flowMeasure: StaticFlowMeasureApi;
  FlowDocument: ComponentType<StaticFlowDocumentProps>;
  markdownToFlowItems: (
    markdown?: string,
    options?: Record<string, unknown>
  ) => MarkdownFlowItem[];
  htmlToFlowItems: (
    html?: string,
    options?: Record<string, unknown>
  ) => HtmlFlowItem[];
  /** Plan perfect-binding cover sheets (outer/inner) for the filtered cover pages. */
  planCoverSpread: <TPage = unknown>(
    input?: CoverSpreadPageInput & { coverPages?: TPage[] }
  ) => CoverSpreadPlan<TPage> | null;
  /** Physical sheet size incl. bleed; the wide cover sheet when `binding.spine > 0`. */
  resolveSheetSize: (input?: CoverSpreadPageInput) => CoverSheetSize | null;
  CoverSpread: ComponentType<StaticCoverSpreadProps>;
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
