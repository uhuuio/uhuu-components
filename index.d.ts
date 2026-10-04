// Public API for `uhuu-components` (mirrors src/index.js). Copied to dist/index.d.ts on build.
import type {
  ComponentType,
  CSSProperties,
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
  avoidBreakInside?: boolean;
  groupKey?: string;
}

/** A separately measured group whose header may repeat on virtual continuation pages. */
export interface StaticFlowItemGroup {
  key: string;
  repeatHeader?: boolean;
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
}

export interface StaticFlowColumn {
  id: string;
  indexes: number[];
}

export type StaticFlowLayoutNode =
  | { kind: "item"; index: number }
  | { kind: "columns"; id: string; columns: StaticFlowColumn[] };

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
  readItemMeta: (element: HTMLElement) => StaticFlowItemMeta;
  readHeaderGroupKey: (element: HTMLElement) => string | undefined;
  readHeaderGroupRepeats: (itemElements: HTMLElement[]) => Record<string, boolean>;
  readHeaderGroupHeights: (root: HTMLElement, scale?: number) => Record<string, number>;
  /** Every measured leaf under `root`, in document order. */
  readFlowItemElements: (root: HTMLElement) => HTMLElement[];
  parseKeepWithNext: (value: string | undefined) => boolean | number;
  serializeKeepWithNext: (value: StaticFlowItemMeta['keepWithNext']) => string | undefined;
  /** FNV-1a. For opaque change-detection tokens compared only for equality. */
  hashString: (value: string) => string;
}

/** Input for `Static.planFlowChunks`, using heights measured by the consumer. */
export interface StaticFlowPlanInput {
  heights?: number[];
  keys?: string[];
  metas?: StaticFlowItemMeta[];
  availableHeight?: number;
  headerGroupKeys?: Array<string | null | undefined>;
  headerGroupHeights?: Record<string, number>;
  headerGroupRepeats?: Record<string, boolean>;
  onUnplaceableItem?: (item: StaticFlowUnplaceableItem) => void;
  metrics?: StaticFlowPlanMetrics;
}

/** Input for `Static.planFlowColumnChunks`, using globally indexed leaf measurements. */
export interface StaticFlowColumnPlanInput extends StaticFlowPlanInput {
  nodes: StaticFlowLayoutNode[];
  columnHeaderGroupHeights?: Record<string, Record<string, Record<string, number>>>;
  columnHeaderGroupRepeats?: Record<string, Record<string, Record<string, boolean>>>;
}

export interface ImageBlockDialog {
  path: string;
  type: "image" | "satellite";
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
  mode?: "bleed" | "spread" | "auto";
  side?: "start" | "end";
  width?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  pageWidth?: number;
  pageHeight?: number;
  bleed?: number;
  dialog?: ImageBlockDialog;
  annotation?: ImageBlockAnnotation;
  overlaySvg?: string;
  overlayClassName?: string;
  options?: unknown[];
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
  /** Marks the element for the editor: `""`, or the serialised dialog under legacy dynamic pagination. */
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
  [key: string]: unknown;
}

/** What `useBrandKit()` returns. */
export interface BrandKitRuntime {
  /** The raw kit: logos and collections are read from it. */
  brandKit: BrandKitJson | null;
  /** `--color-kit-*`, `--font-*` and `--font-kit-*`, as the provider's scope element carries them. */
  cssVars: Record<string, string>;
}

export interface BrandKitProviderProps {
  brandKit?: BrandKitJson | null;
  /** Custom properties for whatever the kit leaves out; the kit wins. Pass a stable object. */
  defaults?: Record<string, string>;
  /** Where a fetched kit came from; its directory resolves relative font URLs when the kit has no `baseUrl`. */
  sourceUrl?: string;
  /** For the scope element. `style` is applied last, so `{ display: "block" }` gives it a box. */
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Scopes a kit's CSS variables around the pages and their overlay chrome, on a `display: contents`
 * element, and loads the fonts the kit declares. Colours are hex, `rgb()`/`rgba()` or keywords:
 * HSL is converted, anything else is skipped as if absent.
 */
export const BrandKitProvider: ComponentType<BrandKitProviderProps>;

/** The nearest `BrandKitProvider`'s runtime, or `null` outside one. */
export function useBrandKit(): BrandKitRuntime | null;

export interface InteractiveModeContextValue {
  interactive: boolean;
  setInteractive: (interactive: boolean) => void;
  enableDevTools?: boolean;
}

export interface BrandKitOption {
  id: string;
  name: string;
}

export interface PageEditorItem {
  id?: string;
  templateId?: string;
  componentKey?: string;
  pages?: PageEditorItem[];
  [key: string]: unknown;
}

export interface PageEditorState {
  items?: PageEditorItem[];
  [key: string]: unknown;
}

export interface PageFilterConfig {
  mode?: "all" | "cover" | "text" | "custom" | string;
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

export interface PageEditorProps {
  templateConfig: Record<string, unknown>;
  payload?: Record<string, unknown>;
  onPayloadChange?: (nextPayload: Record<string, unknown>) => void;
  pageFormat?: {
    width: number;
    height: number;
    preview?: string;
    bleed?: number;
    /** Perfect-binding spine/glue; only applied while `pageFilter.mode === 'cover'`. */
    binding?: BindingConfig | null;
    [key: string]: unknown;
  };
  pageOptions?: unknown[];
  pageFilter?: PageFilterConfig;
  printConfigs?: PrintConfigMap;
  defaultZoomMode?: PageEditorDefaultZoomMode;
  onItemsChange?: (items: PageEditorItem[], state: PageEditorState) => void;
  onStateChange?: (state: PageEditorState) => void;
  renderOverlay?: (context: {
    pageNo?: number;
    total?: number;
    pageId?: string;
    parent?: unknown;
  }) => ReactNode;
  reorderTitle?: string;
  reorderDescription?: string;
  stateKey?: string;
  brandKits?: BrandKitOption[];
  activeBrandKitId?: string;
  onSelectBrandKit?: (id: string) => void;
  onAddBrandKit?: (input: string) => void;
  [key: string]: unknown;
}

export interface TemplateDataProviderProps {
  payload?: Record<string, unknown>;
  onPayloadChange?: (nextPayload: Record<string, unknown>) => void;
  children: ReactNode;
  stateKey?: string;
}

export interface IntegrationAdapterConfig {
  dataBinding?: Record<string, unknown>;
  integration?: Record<string, unknown>;
  resolver?: Record<string, unknown> | ((integration: unknown, payload?: unknown) => unknown);
  galleryPath?: string | ((integration: unknown) => string | null);
  defaults?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IntegrationAdapter {
  dialog: (...args: unknown[]) => Record<string, unknown> | null;
  dialogProps: (...args: unknown[]) => Record<string, unknown>;
  [key: string]: unknown;
}

export const EditorShell: {
  TemplateDataProvider: ComponentType<TemplateDataProviderProps>;
  PageEditor: ComponentType<PageEditorProps>;
  InteractiveModeProvider: ComponentType<{
    children: ReactNode;
    defaultInteractive?: boolean;
    enableDevTools?: boolean;
  }>;
  useInteractive: () => InteractiveModeContextValue;
  useIntegrationAdapter: (config: IntegrationAdapterConfig) => IntegrationAdapter;
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
  pages: { left?: PageEditorItem; right?: PageEditorItem };
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
  setup: Record<string, unknown>;
}

export interface StaticFlowAreaProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onFlowMeasurement?: (measurement: StaticFlowMeasurement) => void;
}

export interface StaticFlowPageProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  flowAreaClassName?: string;
  flowAreaStyle?: CSSProperties;
  onFlowMeasurement?: (measurement: StaticFlowMeasurement) => void;
}

export interface StaticFlowProps<TItem = unknown> {
  id: string;
  items: TItem[];
  getKey: (item: TItem, index: number) => Key;
  renderItem: (
    item: TItem,
    index: number,
    fragment: StaticFlowFragmentContext<TItem>
  ) => ReactNode;
  getItemMeta?: (item: TItem, index: number) => StaticFlowItemMeta | undefined;
  metaDefaults?: Partial<Record<string, StaticFlowItemMeta>>;
  getItemType?: (item: TItem, index: number) => string | undefined;
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

export interface StaticFlowColumnsProps<TItem = unknown> extends StaticFlowProps<TItem> {
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

export interface StaticFlowDocumentProps {
  html: string;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
  flowAreaClassName?: string;
  flowAreaStyle?: CSSProperties;
  id?: string;
  idPrefix?: string;
  flowClassName?: string;
  itemClassName?: string | ((item: HtmlFlowItem, index: number) => string | undefined);
  metaDefaults?: Partial<Record<string, StaticFlowItemMeta>>;
  getItemMeta?: (item: HtmlFlowItem, index: number) => StaticFlowItemMeta | undefined;
  renderItem?: (item: HtmlFlowItem, index: number) => ReactNode;
  sanitize?: ((html: string) => string) | false;
  editable?: { path: string; type?: string; [key: string]: unknown };
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
  Flow: <TItem = unknown>(props: StaticFlowProps<TItem>) => ReactElement | null;
  FlowColumns: <TItem = unknown>(props: StaticFlowColumnsProps<TItem>) => ReactElement | null;
  planFlowChunks: (input?: StaticFlowPlanInput) => StaticFlowChunk[];
  planFlowColumnChunks: (input?: StaticFlowColumnPlanInput) => StaticFlowChunk[];
  createFlowPlanMetrics: () => StaticFlowPlanMetrics;
  flowMeasure: StaticFlowMeasureApi;
  FlowDocument: ComponentType<StaticFlowDocumentProps>;
  markdownToFlowItems: (
    markdown?: string,
    options?: Record<string, unknown>
  ) => HtmlFlowItem[];
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
};
