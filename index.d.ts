// Public API for `uhuu-components` (mirrors src/index.js). Copied to dist/index.d.ts on build.
import type {
  ComponentType,
  CSSProperties,
  ImgHTMLAttributes,
  Key,
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
  indexes: number[];
  keys: string[];
  groupHeaders?: StaticFlowGroupHeaderFragment[];
  unplaceable?: StaticFlowUnplaceableItem;
}

export interface StaticFlowMeasurement {
  flowId: string;
  chunks: StaticFlowChunk[];
  signature: string;
  unplaceableItems?: StaticFlowUnplaceableItem[];
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

export const Editable: ComponentType<EditableProps>;

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
  pageFormat?: { bleed?: number; [key: string]: unknown };
}

export type PrintConfigMap = Record<string, PrintConfig>;

export interface PageEditorProps {
  templateConfig: Record<string, unknown>;
  payload?: Record<string, unknown>;
  onPayloadChange?: (nextPayload: Record<string, unknown>) => void;
  pageFormat?: { width: number; height: number; preview?: string; bleed?: number; [key: string]: unknown };
  pageOptions?: unknown[];
  pageFilter?: PageFilterConfig;
  printConfigs?: PrintConfigMap;
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

export const Static: {
  Pagination: ComponentType<StaticPaginationProps>;
  Sheet: ComponentType<StaticSheetProps>;
  FlowArea: ComponentType<StaticFlowAreaProps>;
  FlowPage: ComponentType<StaticFlowPageProps>;
  Flow: <TItem = unknown>(props: StaticFlowProps<TItem>) => ReactElement | null;
  planFlowChunks: (input?: StaticFlowPlanInput) => StaticFlowChunk[];
  FlowDocument: ComponentType<StaticFlowDocumentProps>;
  markdownToFlowItems: (
    markdown?: string,
    options?: Record<string, unknown>
  ) => HtmlFlowItem[];
  htmlToFlowItems: (
    html?: string,
    options?: Record<string, unknown>
  ) => HtmlFlowItem[];
};
