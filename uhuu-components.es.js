(function(){(function(e,t){try{if(typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0];if(!n)return;let r=t&&t.styleId||`uhuu-components-styles`,i=document.getElementById(r);i||(i=document.createElement(`style`),i.setAttribute(`id`,r),t&&t.attributes&&Object.entries(t.attributes).forEach(([e,t])=>{try{i.setAttribute(e,t)}catch{}})),i.textContent!==e&&(i.textContent=e),i.parentNode!==n&&(n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i))}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--uhuu-tw-translate-x:0;--uhuu-tw-translate-y:0;--uhuu-tw-translate-z:0;--uhuu-tw-scale-x:1;--uhuu-tw-scale-y:1;--uhuu-tw-scale-z:1;--uhuu-tw-space-y-reverse:0;--uhuu-tw-border-style:solid;--uhuu-tw-leading:initial;--uhuu-tw-font-weight:initial;--uhuu-tw-tracking:initial;--uhuu-tw-ordinal:initial;--uhuu-tw-slashed-zero:initial;--uhuu-tw-numeric-figure:initial;--uhuu-tw-numeric-spacing:initial;--uhuu-tw-numeric-fraction:initial;--uhuu-tw-shadow:0 0 #0000;--uhuu-tw-shadow-color:initial;--uhuu-tw-shadow-alpha:100%;--uhuu-tw-inset-shadow:0 0 #0000;--uhuu-tw-inset-shadow-color:initial;--uhuu-tw-inset-shadow-alpha:100%;--uhuu-tw-ring-color:initial;--uhuu-tw-ring-shadow:0 0 #0000;--uhuu-tw-inset-ring-color:initial;--uhuu-tw-inset-ring-shadow:0 0 #0000;--uhuu-tw-ring-inset:initial;--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-color:#fff;--uhuu-tw-ring-offset-shadow:0 0 #0000;--uhuu-tw-outline-style:solid;--uhuu-tw-blur:initial;--uhuu-tw-brightness:initial;--uhuu-tw-contrast:initial;--uhuu-tw-grayscale:initial;--uhuu-tw-hue-rotate:initial;--uhuu-tw-invert:initial;--uhuu-tw-opacity:initial;--uhuu-tw-saturate:initial;--uhuu-tw-sepia:initial;--uhuu-tw-drop-shadow:initial;--uhuu-tw-drop-shadow-color:initial;--uhuu-tw-drop-shadow-alpha:100%;--uhuu-tw-drop-shadow-size:initial;--uhuu-tw-backdrop-blur:initial;--uhuu-tw-backdrop-brightness:initial;--uhuu-tw-backdrop-contrast:initial;--uhuu-tw-backdrop-grayscale:initial;--uhuu-tw-backdrop-hue-rotate:initial;--uhuu-tw-backdrop-invert:initial;--uhuu-tw-backdrop-opacity:initial;--uhuu-tw-backdrop-saturate:initial;--uhuu-tw-backdrop-sepia:initial;--uhuu-tw-duration:initial;--uhuu-tw-ease:initial}*,:before,:after,::backdrop{--uhuu-tw-outline-style:solid}}}@layer theme{:root:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:root:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--uhuu-font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-neutral-50:oklch(98.5% 0 none);--uhuu-color-black:#000;--uhuu-color-white:#fff;--uhuu-spacing:.25rem;--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-tracking-wide:.025em;--uhuu-tracking-widest:.1em;--uhuu-leading-tight:1.25;--uhuu-leading-snug:1.375;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-ease-in-out:cubic-bezier(.4, 0, .2, 1);--uhuu-blur-sm:8px;--uhuu-blur-md:12px;--uhuu-default-transition-duration:.15s;--uhuu-default-transition-timing-function:cubic-bezier(.4, 0, .2, 1)}:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base;@layer components{@media screen{[data-uhuu-interactive] [data-uhuu-flow-unplaceable=true],[data-uhuu-portal] [data-uhuu-flow-unplaceable=true]{outline-offset:-2px;outline:2px dashed #dc2626}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)){background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc' fill-opacity='.2'/%3E%3C/svg%3E")}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover){outline-offset:-1px;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc'/%3E%3C/svg%3E");outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}[data-uhuu-interactive] :where([data-uhuu][data-uhuu-selected]),[data-uhuu-portal] :where([data-uhuu][data-uhuu-selected]),[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){outline:none}[data-uhuu-interactive] :where([data-uhuu][data-uhuu-selected=text]),[data-uhuu-portal] :where([data-uhuu][data-uhuu-selected=text]),[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){cursor:text}[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){-webkit-user-select:text;-moz-user-select:text;user-select:text}}}@layer utilities{.uhuu-page-overlay{pointer-events:none;color:var(--color-gray-600,oklch(44.6% .03 256.802));justify-content:space-between;align-items:center;font-size:7pt;display:flex;position:absolute;bottom:10mm;left:15mm;right:15mm}.uhuu-flow-page{flex-direction:column;width:100%;height:100%;display:flex}.uhuu-flow-page-area{flex:1;min-height:0}[data-uhuu-flow-area]:has([data-uhuu-flow-unplaceable]){overflow:clip}.uhuu-flow-document{width:100%}.uhuu-image-block{position:relative}.uhuu-image-block-fill{width:100%;height:100%}.uhuu-image-body{width:100%;height:100%;position:relative}.uhuu-image-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img:where(.object-cover){-o-object-fit:cover;object-fit:cover}.uhuu-image-img:where(.object-contain){-o-object-fit:contain;object-fit:contain}.uhuu-image-img:where(.object-fill){-o-object-fit:fill;object-fit:fill}.uhuu-image-img:where(.object-center){-o-object-position:center;object-position:center}.uhuu-image-img:where(.object-top){-o-object-position:top;object-position:top}.uhuu-image-img:where(.object-bottom){-o-object-position:bottom;object-position:bottom}.uhuu-image-img:where(.object-left){-o-object-position:left;object-position:left}.uhuu-image-img:where(.object-right){-o-object-position:right;object-position:right}.uhuu-image-img:where(.object-left-top){-o-object-position:left top;object-position:left top}.uhuu-image-img:where(.object-right-top){-o-object-position:right top;object-position:right top}.uhuu-image-img:where(.object-left-bottom){-o-object-position:left bottom;object-position:left bottom}.uhuu-image-img:where(.object-right-bottom){-o-object-position:right bottom;object-position:right bottom}.uhuu-image-overlay{z-index:10;pointer-events:none;position:absolute;inset:0}.uhuu-image-overlay-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img,.uhuu-image-overlay-img,:where(.uhuu-image-inner) .uhuu-image-geometry,:where(.uhuu-image-overlay)>svg{display:block}}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *),:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):after,:is([data-uhuu-chrome],[data-uhuu-chrome] *):after,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):before,:is([data-uhuu-chrome],[data-uhuu-chrome] *):before,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::backdrop,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),html:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),hr:is([data-uhuu-chrome],[data-uhuu-chrome] *){height:0;color:inherit;border-top-width:1px}abbr:where([title]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),abbr:where([title]):is([data-uhuu-chrome],[data-uhuu-chrome] *){text-decoration:underline dotted}h1:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h1:is([data-uhuu-chrome],[data-uhuu-chrome] *),h2:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h2:is([data-uhuu-chrome],[data-uhuu-chrome] *),h3:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h3:is([data-uhuu-chrome],[data-uhuu-chrome] *),h4:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h4:is([data-uhuu-chrome],[data-uhuu-chrome] *),h5:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h5:is([data-uhuu-chrome],[data-uhuu-chrome] *),h6:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h6:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:inherit;font-weight:inherit}a:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),a:is([data-uhuu-chrome],[data-uhuu-chrome] *){color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),b:is([data-uhuu-chrome],[data-uhuu-chrome] *),strong:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),strong:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}code:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),code:is([data-uhuu-chrome],[data-uhuu-chrome] *),kbd:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),kbd:is([data-uhuu-chrome],[data-uhuu-chrome] *),samp:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),samp:is([data-uhuu-chrome],[data-uhuu-chrome] *),pre:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),pre:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),small:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:80%}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *),sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *){bottom:-.25em}sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){top:-.5em}table:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),table:is([data-uhuu-chrome],[data-uhuu-chrome] *){text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-focusring:where(:not(iframe)):is([data-uhuu-chrome],[data-uhuu-chrome] *){outline:auto}progress:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),progress:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline}summary:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),summary:is([data-uhuu-chrome],[data-uhuu-chrome] *){display:list-item}ol:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ol:is([data-uhuu-chrome],[data-uhuu-chrome] *),ul:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ul:is([data-uhuu-chrome],[data-uhuu-chrome] *),menu:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),menu:is([data-uhuu-chrome],[data-uhuu-chrome] *){list-style:none}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),svg:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),svg:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *),canvas:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),canvas:is([data-uhuu-chrome],[data-uhuu-chrome] *),audio:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),audio:is([data-uhuu-chrome],[data-uhuu-chrome] *),iframe:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),iframe:is([data-uhuu-chrome],[data-uhuu-chrome] *),embed:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),embed:is([data-uhuu-chrome],[data-uhuu-chrome] *),object:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),object:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:middle;display:block}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *){max-width:100%;height:auto}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:is([data-uhuu-chrome],[data-uhuu-chrome] *),select:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),select:is([data-uhuu-chrome],[data-uhuu-chrome] *),optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *),textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-chrome],[data-uhuu-chrome] *){padding-inline-start:20px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{margin-inline-end:4px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{opacity:1}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:currentColor}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){resize:vertical}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-search-decoration,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-search-decoration{-webkit-appearance:none}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-date-and-time-value,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{display:inline-flex}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-fields-wrapper,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-fields-wrapper{padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-year-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-year-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-month-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-month-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-day-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-day-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-hour-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-hour-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-minute-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-minute-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-second-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-second-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-millisecond-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-millisecond-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-meridiem-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-meridiem-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-calendar-picker-indicator,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-ui-invalid:is([data-uhuu-chrome],[data-uhuu-chrome] *){box-shadow:none}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-inner-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-inner-spin-button{height:auto}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-outer-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),[hidden]:where(:not([hidden=until-found])):is([data-uhuu-chrome],[data-uhuu-chrome] *){display:none!important}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit}:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--uhuu-font-sans,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-variant:normal;font-feature-settings:normal;font-variation-settings:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-align:start;text-shadow:none;color:#000;font-size:1rem;font-style:normal;font-weight:400;font-stretch:100%;line-height:1.5}[data-uhuu-interactive] .uhuu\\:pointer-events-auto,[data-uhuu-portal] .uhuu\\:pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .uhuu\\:pointer-events-none,[data-uhuu-portal] .uhuu\\:pointer-events-none{pointer-events:none}[data-uhuu-interactive] .uhuu\\:sr-only,[data-uhuu-portal] .uhuu\\:sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .uhuu\\:absolute,[data-uhuu-portal] .uhuu\\:absolute{position:absolute}[data-uhuu-interactive] .uhuu\\:fixed,[data-uhuu-portal] .uhuu\\:fixed{position:fixed}[data-uhuu-interactive] .uhuu\\:relative,[data-uhuu-portal] .uhuu\\:relative{position:relative}[data-uhuu-interactive] .uhuu\\:inset-0,[data-uhuu-portal] .uhuu\\:inset-0{inset:0}[data-uhuu-interactive] .uhuu\\:inset-x-0,[data-uhuu-portal] .uhuu\\:inset-x-0{inset-inline:0}[data-uhuu-interactive] .uhuu\\:inset-y-0,[data-uhuu-portal] .uhuu\\:inset-y-0{inset-block:0}[data-uhuu-interactive] .uhuu\\:-top-3,[data-uhuu-portal] .uhuu\\:-top-3{top:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:top-0,[data-uhuu-portal] .uhuu\\:top-0{top:0}[data-uhuu-interactive] .uhuu\\:top-0\\.5,[data-uhuu-portal] .uhuu\\:top-0\\.5{top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:top-1\\/2,[data-uhuu-portal] .uhuu\\:top-1\\/2{top:50%}[data-uhuu-interactive] .uhuu\\:top-2,[data-uhuu-portal] .uhuu\\:top-2{top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:top-3,[data-uhuu-portal] .uhuu\\:top-3{top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:top-4,[data-uhuu-portal] .uhuu\\:top-4{top:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:top-20,[data-uhuu-portal] .uhuu\\:top-20{top:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:top-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .uhuu\\:top-full,[data-uhuu-portal] .uhuu\\:top-full{top:100%}[data-uhuu-interactive] .uhuu\\:-right-3,[data-uhuu-portal] .uhuu\\:-right-3{right:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:right-0,[data-uhuu-portal] .uhuu\\:right-0{right:0}[data-uhuu-interactive] .uhuu\\:right-0\\.5,[data-uhuu-portal] .uhuu\\:right-0\\.5{right:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:right-2,[data-uhuu-portal] .uhuu\\:right-2{right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:right-2\\.5,[data-uhuu-portal] .uhuu\\:right-2\\.5{right:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:right-4,[data-uhuu-portal] .uhuu\\:right-4{right:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-0,[data-uhuu-portal] .uhuu\\:bottom-0{bottom:0}[data-uhuu-interactive] .uhuu\\:bottom-0\\.5,[data-uhuu-portal] .uhuu\\:bottom-0\\.5{bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:bottom-2,[data-uhuu-portal] .uhuu\\:bottom-2{bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:bottom-3,[data-uhuu-portal] .uhuu\\:bottom-3{bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:bottom-4,[data-uhuu-portal] .uhuu\\:bottom-4{bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-20,[data-uhuu-portal] .uhuu\\:bottom-20{bottom:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:bottom-full,[data-uhuu-portal] .uhuu\\:bottom-full{bottom:100%}[data-uhuu-interactive] .uhuu\\:left-0,[data-uhuu-portal] .uhuu\\:left-0{left:0}[data-uhuu-interactive] .uhuu\\:left-0\\.5,[data-uhuu-portal] .uhuu\\:left-0\\.5{left:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:left-2,[data-uhuu-portal] .uhuu\\:left-2{left:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:left-3,[data-uhuu-portal] .uhuu\\:left-3{left:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:left-4,[data-uhuu-portal] .uhuu\\:left-4{left:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:left-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .uhuu\\:z-10,[data-uhuu-portal] .uhuu\\:z-10{z-index:10}[data-uhuu-interactive] .uhuu\\:z-20,[data-uhuu-portal] .uhuu\\:z-20{z-index:20}[data-uhuu-interactive] .uhuu\\:z-30,[data-uhuu-portal] .uhuu\\:z-30{z-index:30}[data-uhuu-interactive] .uhuu\\:z-50,[data-uhuu-portal] .uhuu\\:z-50{z-index:50}[data-uhuu-interactive] .uhuu\\:z-\\[2\\],[data-uhuu-portal] .uhuu\\:z-\\[2\\]{z-index:2}[data-uhuu-interactive] .uhuu\\:-mx-1,[data-uhuu-portal] .uhuu\\:-mx-1{margin-inline:calc(var(--uhuu-spacing) * -1)}[data-uhuu-interactive] .uhuu\\:mx-0\\.5,[data-uhuu-portal] .uhuu\\:mx-0\\.5{margin-inline:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mx-4,[data-uhuu-portal] .uhuu\\:mx-4{margin-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mx-auto,[data-uhuu-portal] .uhuu\\:mx-auto{margin-inline:auto}[data-uhuu-interactive] .uhuu\\:my-1,[data-uhuu-portal] .uhuu\\:my-1{margin-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:my-1\\.5,[data-uhuu-portal] .uhuu\\:my-1\\.5{margin-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:mt-0\\.5,[data-uhuu-portal] .uhuu\\:mt-0\\.5{margin-top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mt-1,[data-uhuu-portal] .uhuu\\:mt-1{margin-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mt-2,[data-uhuu-portal] .uhuu\\:mt-2{margin-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mt-3,[data-uhuu-portal] .uhuu\\:mt-3{margin-top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mt-6,[data-uhuu-portal] .uhuu\\:mt-6{margin-top:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:mr-2,[data-uhuu-portal] .uhuu\\:mr-2{margin-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mr-8,[data-uhuu-portal] .uhuu\\:mr-8{margin-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:mb-0\\.5,[data-uhuu-portal] .uhuu\\:mb-0\\.5{margin-bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mb-1,[data-uhuu-portal] .uhuu\\:mb-1{margin-bottom:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mb-2,[data-uhuu-portal] .uhuu\\:mb-2{margin-bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mb-3,[data-uhuu-portal] .uhuu\\:mb-3{margin-bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mb-4,[data-uhuu-portal] .uhuu\\:mb-4{margin-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mb-5,[data-uhuu-portal] .uhuu\\:mb-5{margin-bottom:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:mb-6,[data-uhuu-portal] .uhuu\\:mb-6{margin-bottom:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:ml-1,[data-uhuu-portal] .uhuu\\:ml-1{margin-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:ml-auto,[data-uhuu-portal] .uhuu\\:ml-auto{margin-left:auto}[data-uhuu-interactive] .uhuu\\:block,[data-uhuu-portal] .uhuu\\:block{display:block}[data-uhuu-interactive] .uhuu\\:contents,[data-uhuu-portal] .uhuu\\:contents{display:contents}[data-uhuu-interactive] .uhuu\\:flex,[data-uhuu-portal] .uhuu\\:flex{display:flex}[data-uhuu-interactive] .uhuu\\:grid,[data-uhuu-portal] .uhuu\\:grid{display:grid}[data-uhuu-interactive] .uhuu\\:hidden,[data-uhuu-portal] .uhuu\\:hidden{display:none}[data-uhuu-interactive] .uhuu\\:inline-block,[data-uhuu-portal] .uhuu\\:inline-block{display:inline-block}[data-uhuu-interactive] .uhuu\\:inline-flex,[data-uhuu-portal] .uhuu\\:inline-flex{display:inline-flex}[data-uhuu-interactive] .uhuu\\:size-3,[data-uhuu-portal] .uhuu\\:size-3{width:calc(var(--uhuu-spacing) * 3);height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:size-3\\.5,[data-uhuu-portal] .uhuu\\:size-3\\.5{width:calc(var(--uhuu-spacing) * 3.5);height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:size-4,[data-uhuu-portal] .uhuu\\:size-4{width:calc(var(--uhuu-spacing) * 4);height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-1\\.5,[data-uhuu-portal] .uhuu\\:h-1\\.5{height:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:h-3,[data-uhuu-portal] .uhuu\\:h-3{height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:h-3\\.5,[data-uhuu-portal] .uhuu\\:h-3\\.5{height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:h-4,[data-uhuu-portal] .uhuu\\:h-4{height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-5,[data-uhuu-portal] .uhuu\\:h-5{height:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:h-6,[data-uhuu-portal] .uhuu\\:h-6{height:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:h-7,[data-uhuu-portal] .uhuu\\:h-7{height:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:h-8,[data-uhuu-portal] .uhuu\\:h-8{height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:h-9,[data-uhuu-portal] .uhuu\\:h-9{height:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:h-10,[data-uhuu-portal] .uhuu\\:h-10{height:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:h-11,[data-uhuu-portal] .uhuu\\:h-11{height:calc(var(--uhuu-spacing) * 11)}[data-uhuu-interactive] .uhuu\\:h-12,[data-uhuu-portal] .uhuu\\:h-12{height:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:h-16,[data-uhuu-portal] .uhuu\\:h-16{height:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:h-\\[90vh\\],[data-uhuu-portal] .uhuu\\:h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .uhuu\\:h-full,[data-uhuu-portal] .uhuu\\:h-full{height:100%}[data-uhuu-interactive] .uhuu\\:h-px,[data-uhuu-portal] .uhuu\\:h-px{height:1px}[data-uhuu-interactive] .uhuu\\:max-h-\\[40vh\\],[data-uhuu-portal] .uhuu\\:max-h-\\[40vh\\]{max-height:40vh}[data-uhuu-interactive] .uhuu\\:min-h-0,[data-uhuu-portal] .uhuu\\:min-h-0{min-height:0}[data-uhuu-interactive] .uhuu\\:min-h-8,[data-uhuu-portal] .uhuu\\:min-h-8{min-height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-3,[data-uhuu-portal] .uhuu\\:w-3{width:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:w-3\\.5,[data-uhuu-portal] .uhuu\\:w-3\\.5{width:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:w-3\\/4,[data-uhuu-portal] .uhuu\\:w-3\\/4{width:75%}[data-uhuu-interactive] .uhuu\\:w-4,[data-uhuu-portal] .uhuu\\:w-4{width:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:w-6,[data-uhuu-portal] .uhuu\\:w-6{width:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:w-7,[data-uhuu-portal] .uhuu\\:w-7{width:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:w-8,[data-uhuu-portal] .uhuu\\:w-8{width:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-9,[data-uhuu-portal] .uhuu\\:w-9{width:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:w-10,[data-uhuu-portal] .uhuu\\:w-10{width:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:w-12,[data-uhuu-portal] .uhuu\\:w-12{width:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:w-16,[data-uhuu-portal] .uhuu\\:w-16{width:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:w-20,[data-uhuu-portal] .uhuu\\:w-20{width:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:w-24,[data-uhuu-portal] .uhuu\\:w-24{width:calc(var(--uhuu-spacing) * 24)}[data-uhuu-interactive] .uhuu\\:w-40,[data-uhuu-portal] .uhuu\\:w-40{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:w-48,[data-uhuu-portal] .uhuu\\:w-48{width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:w-52,[data-uhuu-portal] .uhuu\\:w-52{width:calc(var(--uhuu-spacing) * 52)}[data-uhuu-interactive] .uhuu\\:w-64,[data-uhuu-portal] .uhuu\\:w-64{width:calc(var(--uhuu-spacing) * 64)}[data-uhuu-interactive] .uhuu\\:w-72,[data-uhuu-portal] .uhuu\\:w-72{width:calc(var(--uhuu-spacing) * 72)}[data-uhuu-interactive] .uhuu\\:w-96,[data-uhuu-portal] .uhuu\\:w-96{width:calc(var(--uhuu-spacing) * 96)}[data-uhuu-interactive] .uhuu\\:w-full,[data-uhuu-portal] .uhuu\\:w-full{width:100%}[data-uhuu-interactive] .uhuu\\:w-max,[data-uhuu-portal] .uhuu\\:w-max{width:max-content}[data-uhuu-interactive] .uhuu\\:w-px,[data-uhuu-portal] .uhuu\\:w-px{width:1px}[data-uhuu-interactive] .uhuu\\:max-w-\\[110px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .uhuu\\:max-w-\\[120px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .uhuu\\:max-w-\\[140px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\],[data-uhuu-portal] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}[data-uhuu-interactive] .uhuu\\:max-w-\\[min\\(720px\\,calc\\(100vw-24px\\)\\)\\],[data-uhuu-portal] .uhuu\\:max-w-\\[min\\(720px\\,calc\\(100vw-24px\\)\\)\\]{max-width:min(720px,100vw - 24px)}[data-uhuu-interactive] .uhuu\\:max-w-md,[data-uhuu-portal] .uhuu\\:max-w-md{max-width:var(--uhuu-container-md)}[data-uhuu-interactive] .uhuu\\:max-w-none,[data-uhuu-portal] .uhuu\\:max-w-none{max-width:none}[data-uhuu-interactive] .uhuu\\:max-w-sm,[data-uhuu-portal] .uhuu\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:min-w-0,[data-uhuu-portal] .uhuu\\:min-w-0{min-width:0}[data-uhuu-interactive] .uhuu\\:min-w-44,[data-uhuu-portal] .uhuu\\:min-w-44{min-width:calc(var(--uhuu-spacing) * 44)}[data-uhuu-interactive] .uhuu\\:min-w-\\[1rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[8rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[24px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .uhuu\\:min-w-\\[180px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .uhuu\\:min-w-\\[200px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .uhuu\\:flex-1,[data-uhuu-portal] .uhuu\\:flex-1{flex:1}[data-uhuu-interactive] .uhuu\\:shrink-0,[data-uhuu-portal] .uhuu\\:shrink-0{flex-shrink:0}[data-uhuu-interactive] .uhuu\\:shrink-0\\!,[data-uhuu-portal] .uhuu\\:shrink-0\\!{flex-shrink:0!important}[data-uhuu-interactive] .uhuu\\:grow,[data-uhuu-portal] .uhuu\\:grow{flex-grow:1}[data-uhuu-interactive] .uhuu\\:translate-x-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-x-\\[-50\\%\\]{--uhuu-tw-translate-x:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:-translate-y-1\\/2,[data-uhuu-portal] .uhuu\\:-translate-y-1\\/2{--uhuu-tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:translate-y-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-y-\\[-50\\%\\]{--uhuu-tw-translate-y:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:scale-105,[data-uhuu-portal] .uhuu\\:scale-105{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:scale-110,[data-uhuu-portal] .uhuu\\:scale-110{--uhuu-tw-scale-x:110%;--uhuu-tw-scale-y:110%;--uhuu-tw-scale-z:110%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:rotate-2,[data-uhuu-portal] .uhuu\\:rotate-2{rotate:2deg}[data-uhuu-interactive] .uhuu\\:rotate-45,[data-uhuu-portal] .uhuu\\:rotate-45{rotate:45deg}[data-uhuu-interactive] .uhuu\\:cursor-default,[data-uhuu-portal] .uhuu\\:cursor-default{cursor:default}[data-uhuu-interactive] .uhuu\\:cursor-grab,[data-uhuu-portal] .uhuu\\:cursor-grab{cursor:grab}[data-uhuu-interactive] .uhuu\\:cursor-pointer,[data-uhuu-portal] .uhuu\\:cursor-pointer{cursor:pointer}[data-uhuu-interactive] .uhuu\\:touch-none,[data-uhuu-portal] .uhuu\\:touch-none{touch-action:none}[data-uhuu-interactive] .uhuu\\:resize-y,[data-uhuu-portal] .uhuu\\:resize-y{resize:vertical}[data-uhuu-interactive] .uhuu\\:appearance-none,[data-uhuu-portal] .uhuu\\:appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-uhuu-interactive] .uhuu\\:grid-cols-2,[data-uhuu-portal] .uhuu\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .uhuu\\:flex-col,[data-uhuu-portal] .uhuu\\:flex-col{flex-direction:column}[data-uhuu-interactive] .uhuu\\:flex-col-reverse,[data-uhuu-portal] .uhuu\\:flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .uhuu\\:flex-wrap,[data-uhuu-portal] .uhuu\\:flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .uhuu\\:items-center,[data-uhuu-portal] .uhuu\\:items-center{align-items:center}[data-uhuu-interactive] .uhuu\\:items-end,[data-uhuu-portal] .uhuu\\:items-end{align-items:flex-end}[data-uhuu-interactive] .uhuu\\:items-start,[data-uhuu-portal] .uhuu\\:items-start{align-items:flex-start}[data-uhuu-interactive] .uhuu\\:justify-between,[data-uhuu-portal] .uhuu\\:justify-between{justify-content:space-between}[data-uhuu-interactive] .uhuu\\:justify-center,[data-uhuu-portal] .uhuu\\:justify-center{justify-content:center}[data-uhuu-interactive] .uhuu\\:justify-end,[data-uhuu-portal] .uhuu\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:justify-start,[data-uhuu-portal] .uhuu\\:justify-start{justify-content:flex-start}[data-uhuu-interactive] .uhuu\\:gap-0,[data-uhuu-portal] .uhuu\\:gap-0{gap:0}[data-uhuu-interactive] .uhuu\\:gap-0\\.5,[data-uhuu-portal] .uhuu\\:gap-0\\.5{gap:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:gap-1,[data-uhuu-portal] .uhuu\\:gap-1{gap:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:gap-1\\.5,[data-uhuu-portal] .uhuu\\:gap-1\\.5{gap:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:gap-2,[data-uhuu-portal] .uhuu\\:gap-2{gap:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:gap-3,[data-uhuu-portal] .uhuu\\:gap-3{gap:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:gap-4,[data-uhuu-portal] .uhuu\\:gap-4{gap:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] :where(.uhuu\\:space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-2>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] .uhuu\\:truncate,[data-uhuu-portal] .uhuu\\:truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-auto,[data-uhuu-portal] .uhuu\\:overflow-auto{overflow:auto}[data-uhuu-interactive] .uhuu\\:overflow-hidden,[data-uhuu-portal] .uhuu\\:overflow-hidden{overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-y-auto,[data-uhuu-portal] .uhuu\\:overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .uhuu\\:rounded,[data-uhuu-portal] .uhuu\\:rounded{border-radius:.25rem}[data-uhuu-interactive] .uhuu\\:rounded-\\[2px\\],[data-uhuu-portal] .uhuu\\:rounded-\\[2px\\]{border-radius:2px}[data-uhuu-interactive] .uhuu\\:rounded-full,[data-uhuu-portal] .uhuu\\:rounded-full{border-radius:2147483647px}[data-uhuu-interactive] .uhuu\\:rounded-lg,[data-uhuu-portal] .uhuu\\:rounded-lg{border-radius:var(--uhuu-radius-lg)}[data-uhuu-interactive] .uhuu\\:rounded-md,[data-uhuu-portal] .uhuu\\:rounded-md{border-radius:var(--uhuu-radius-md)}[data-uhuu-interactive] .uhuu\\:rounded-sm,[data-uhuu-portal] .uhuu\\:rounded-sm{border-radius:var(--uhuu-radius-sm)}[data-uhuu-interactive] .uhuu\\:border,[data-uhuu-portal] .uhuu\\:border{border-style:var(--uhuu-tw-border-style);border-width:1px}[data-uhuu-interactive] .uhuu\\:border-0,[data-uhuu-portal] .uhuu\\:border-0{border-style:var(--uhuu-tw-border-style);border-width:0}[data-uhuu-interactive] .uhuu\\:border-2,[data-uhuu-portal] .uhuu\\:border-2{border-style:var(--uhuu-tw-border-style);border-width:2px}[data-uhuu-interactive] .uhuu\\:border-t,[data-uhuu-portal] .uhuu\\:border-t{border-top-style:var(--uhuu-tw-border-style);border-top-width:1px}[data-uhuu-interactive] .uhuu\\:border-r,[data-uhuu-portal] .uhuu\\:border-r{border-right-style:var(--uhuu-tw-border-style);border-right-width:1px}[data-uhuu-interactive] .uhuu\\:border-b,[data-uhuu-portal] .uhuu\\:border-b{border-bottom-style:var(--uhuu-tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .uhuu\\:border-l,[data-uhuu-portal] .uhuu\\:border-l{border-left-style:var(--uhuu-tw-border-style);border-left-width:1px}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border\\){border-color:var(--uhuu-thumbnail-border)}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\){border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:border-blue-400,[data-uhuu-portal] .uhuu\\:border-blue-400{border-color:var(--uhuu-color-blue-400)}[data-uhuu-interactive] .uhuu\\:border-gray-200,[data-uhuu-portal] .uhuu\\:border-gray-200,[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 60%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-300,[data-uhuu-portal] .uhuu\\:border-gray-300{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:border-gray-400,[data-uhuu-portal] .uhuu\\:border-gray-400{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:border-gray-900,[data-uhuu-portal] .uhuu\\:border-gray-900{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:border-transparent,[data-uhuu-portal] .uhuu\\:border-transparent{border-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 95%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\){background-color:var(--uhuu-thumbnail-caption)}[data-uhuu-interactive] .uhuu\\:bg-black,[data-uhuu-portal] .uhuu\\:bg-black,[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:color-mix(in oklab, var(--uhuu-color-black) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:color-mix(in oklab, var(--uhuu-color-black) 40%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:color-mix(in oklab, var(--uhuu-color-black) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-50,[data-uhuu-portal] .uhuu\\:bg-blue-50{background-color:var(--uhuu-color-blue-50)}[data-uhuu-interactive] .uhuu\\:bg-blue-100,[data-uhuu-portal] .uhuu\\:bg-blue-100{background-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:var(--uhuu-color-blue-500)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:color-mix(in oklab, var(--uhuu-color-blue-500) 10%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:var(--uhuu-color-blue-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-blue-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-emerald-100,[data-uhuu-portal] .uhuu\\:bg-emerald-100{background-color:var(--uhuu-color-emerald-100)}[data-uhuu-interactive] .uhuu\\:bg-gray-50,[data-uhuu-portal] .uhuu\\:bg-gray-50{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:bg-gray-100,[data-uhuu-portal] .uhuu\\:bg-gray-100,[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-200,[data-uhuu-portal] .uhuu\\:bg-gray-200{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:bg-gray-300,[data-uhuu-portal] .uhuu\\:bg-gray-300{background-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:var(--uhuu-color-gray-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-900,[data-uhuu-portal] .uhuu\\:bg-gray-900{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:bg-transparent,[data-uhuu-portal] .uhuu\\:bg-transparent{background-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-white,[data-uhuu-portal] .uhuu\\:bg-white,[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:var(--uhuu-color-white)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:color-mix(in oklab, var(--uhuu-color-white) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:object-contain,[data-uhuu-portal] .uhuu\\:object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .uhuu\\:object-top,[data-uhuu-portal] .uhuu\\:object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .uhuu\\:p-0,[data-uhuu-portal] .uhuu\\:p-0{padding:0}[data-uhuu-interactive] .uhuu\\:p-1,[data-uhuu-portal] .uhuu\\:p-1{padding:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:p-1\\.5,[data-uhuu-portal] .uhuu\\:p-1\\.5{padding:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:p-2,[data-uhuu-portal] .uhuu\\:p-2{padding:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:p-3,[data-uhuu-portal] .uhuu\\:p-3{padding:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:p-4,[data-uhuu-portal] .uhuu\\:p-4{padding:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:p-6,[data-uhuu-portal] .uhuu\\:p-6{padding:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:px-1\\.5,[data-uhuu-portal] .uhuu\\:px-1\\.5{padding-inline:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:px-2,[data-uhuu-portal] .uhuu\\:px-2{padding-inline:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:px-2\\.5,[data-uhuu-portal] .uhuu\\:px-2\\.5{padding-inline:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:px-3,[data-uhuu-portal] .uhuu\\:px-3{padding-inline:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:px-4,[data-uhuu-portal] .uhuu\\:px-4{padding-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:px-8,[data-uhuu-portal] .uhuu\\:px-8{padding-inline:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:py-0\\.5,[data-uhuu-portal] .uhuu\\:py-0\\.5{padding-block:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:py-1,[data-uhuu-portal] .uhuu\\:py-1{padding-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:py-1\\.5,[data-uhuu-portal] .uhuu\\:py-1\\.5{padding-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:py-2,[data-uhuu-portal] .uhuu\\:py-2{padding-block:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:py-2\\.5,[data-uhuu-portal] .uhuu\\:py-2\\.5{padding-block:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:py-3,[data-uhuu-portal] .uhuu\\:py-3{padding-block:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:py-16,[data-uhuu-portal] .uhuu\\:py-16{padding-block:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:py-20,[data-uhuu-portal] .uhuu\\:py-20{padding-block:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:pt-1,[data-uhuu-portal] .uhuu\\:pt-1{padding-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pt-2,[data-uhuu-portal] .uhuu\\:pt-2{padding-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-1,[data-uhuu-portal] .uhuu\\:pr-1{padding-right:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pr-2,[data-uhuu-portal] .uhuu\\:pr-2{padding-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-3,[data-uhuu-portal] .uhuu\\:pr-3{padding-right:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:pr-6,[data-uhuu-portal] .uhuu\\:pr-6{padding-right:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:pr-8,[data-uhuu-portal] .uhuu\\:pr-8{padding-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:pb-4,[data-uhuu-portal] .uhuu\\:pb-4{padding-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:pl-0,[data-uhuu-portal] .uhuu\\:pl-0{padding-left:0}[data-uhuu-interactive] .uhuu\\:pl-1,[data-uhuu-portal] .uhuu\\:pl-1{padding-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pl-2\\.5,[data-uhuu-portal] .uhuu\\:pl-2\\.5{padding-left:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:pl-8,[data-uhuu-portal] .uhuu\\:pl-8{padding-left:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:text-center,[data-uhuu-portal] .uhuu\\:text-center{text-align:center}[data-uhuu-interactive] .uhuu\\:text-left,[data-uhuu-portal] .uhuu\\:text-left{text-align:left}[data-uhuu-interactive] .uhuu\\:align-top,[data-uhuu-portal] .uhuu\\:align-top{vertical-align:top}[data-uhuu-interactive] .uhuu\\:font-mono,[data-uhuu-portal] .uhuu\\:font-mono{font-family:var(--uhuu-font-mono)}[data-uhuu-interactive] .uhuu\\:text-base,[data-uhuu-portal] .uhuu\\:text-base{font-size:var(--uhuu-text-base);line-height:var(--uhuu-tw-leading,var(--uhuu-text-base--line-height))}[data-uhuu-interactive] .uhuu\\:text-lg,[data-uhuu-portal] .uhuu\\:text-lg{font-size:var(--uhuu-text-lg);line-height:var(--uhuu-tw-leading,var(--uhuu-text-lg--line-height))}[data-uhuu-interactive] .uhuu\\:text-sm,[data-uhuu-portal] .uhuu\\:text-sm{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs,[data-uhuu-portal] .uhuu\\:text-xs{font-size:var(--uhuu-text-xs);line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs\\!,[data-uhuu-portal] .uhuu\\:text-xs\\!{font-size:var(--uhuu-text-xs)!important;line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))!important}[data-uhuu-interactive] .uhuu\\:text-\\[10px\\],[data-uhuu-portal] .uhuu\\:text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .uhuu\\:text-\\[11px\\],[data-uhuu-portal] .uhuu\\:text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .uhuu\\:leading-none,[data-uhuu-portal] .uhuu\\:leading-none{--uhuu-tw-leading:1;line-height:1}[data-uhuu-interactive] .uhuu\\:leading-snug,[data-uhuu-portal] .uhuu\\:leading-snug{--uhuu-tw-leading:var(--uhuu-leading-snug);line-height:var(--uhuu-leading-snug)}[data-uhuu-interactive] .uhuu\\:leading-tight,[data-uhuu-portal] .uhuu\\:leading-tight{--uhuu-tw-leading:var(--uhuu-leading-tight);line-height:var(--uhuu-leading-tight)}[data-uhuu-interactive] .uhuu\\:font-medium,[data-uhuu-portal] .uhuu\\:font-medium{--uhuu-tw-font-weight:var(--uhuu-font-weight-medium);font-weight:var(--uhuu-font-weight-medium)}[data-uhuu-interactive] .uhuu\\:font-normal,[data-uhuu-portal] .uhuu\\:font-normal{--uhuu-tw-font-weight:var(--uhuu-font-weight-normal);font-weight:var(--uhuu-font-weight-normal)}[data-uhuu-interactive] .uhuu\\:font-semibold,[data-uhuu-portal] .uhuu\\:font-semibold{--uhuu-tw-font-weight:var(--uhuu-font-weight-semibold);font-weight:var(--uhuu-font-weight-semibold)}[data-uhuu-interactive] .uhuu\\:tracking-wide,[data-uhuu-portal] .uhuu\\:tracking-wide{--uhuu-tw-tracking:var(--uhuu-tracking-wide);letter-spacing:var(--uhuu-tracking-wide)}[data-uhuu-interactive] .uhuu\\:tracking-widest,[data-uhuu-portal] .uhuu\\:tracking-widest{--uhuu-tw-tracking:var(--uhuu-tracking-widest);letter-spacing:var(--uhuu-tracking-widest)}[data-uhuu-interactive] .uhuu\\:whitespace-nowrap,[data-uhuu-portal] .uhuu\\:whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\),[data-uhuu-portal] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\){color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:text-blue-600,[data-uhuu-portal] .uhuu\\:text-blue-600{color:var(--uhuu-color-blue-600)}[data-uhuu-interactive] .uhuu\\:text-emerald-600,[data-uhuu-portal] .uhuu\\:text-emerald-600{color:var(--uhuu-color-emerald-600)}[data-uhuu-interactive] .uhuu\\:text-gray-400,[data-uhuu-portal] .uhuu\\:text-gray-400{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:text-gray-500,[data-uhuu-portal] .uhuu\\:text-gray-500{color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:text-gray-600,[data-uhuu-portal] .uhuu\\:text-gray-600{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:text-gray-700,[data-uhuu-portal] .uhuu\\:text-gray-700{color:var(--uhuu-color-gray-700)}[data-uhuu-interactive] .uhuu\\:text-gray-800,[data-uhuu-portal] .uhuu\\:text-gray-800{color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:text-gray-900,[data-uhuu-portal] .uhuu\\:text-gray-900{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:text-red-600,[data-uhuu-portal] .uhuu\\:text-red-600{color:var(--uhuu-color-red-600)}[data-uhuu-interactive] .uhuu\\:text-white,[data-uhuu-portal] .uhuu\\:text-white{color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:uppercase,[data-uhuu-portal] .uhuu\\:uppercase{text-transform:uppercase}[data-uhuu-interactive] .uhuu\\:tabular-nums,[data-uhuu-portal] .uhuu\\:tabular-nums{--uhuu-tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--uhuu-tw-ordinal,) var(--uhuu-tw-slashed-zero,) var(--uhuu-tw-numeric-figure,) var(--uhuu-tw-numeric-spacing,) var(--uhuu-tw-numeric-fraction,)}[data-uhuu-interactive] .uhuu\\:underline-offset-2,[data-uhuu-portal] .uhuu\\:underline-offset-2{text-underline-offset:2px}[data-uhuu-interactive] .uhuu\\:opacity-0,[data-uhuu-portal] .uhuu\\:opacity-0{opacity:0}[data-uhuu-interactive] .uhuu\\:opacity-50,[data-uhuu-portal] .uhuu\\:opacity-50{opacity:.5}[data-uhuu-interactive] .uhuu\\:opacity-60,[data-uhuu-portal] .uhuu\\:opacity-60{opacity:.6}[data-uhuu-interactive] .uhuu\\:opacity-70,[data-uhuu-portal] .uhuu\\:opacity-70{opacity:.7}[data-uhuu-interactive] .uhuu\\:opacity-75,[data-uhuu-portal] .uhuu\\:opacity-75{opacity:.75}[data-uhuu-interactive] .uhuu\\:shadow,[data-uhuu-portal] .uhuu\\:shadow{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-2xl,[data-uhuu-portal] .uhuu\\:shadow-2xl{--uhuu-tw-shadow:0 25px 50px -12px var(--uhuu-tw-shadow-color,#00000040);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-lg,[data-uhuu-portal] .uhuu\\:shadow-lg{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-md,[data-uhuu-portal] .uhuu\\:shadow-md{--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-sm,[data-uhuu-portal] .uhuu\\:shadow-sm{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-xl,[data-uhuu-portal] .uhuu\\:shadow-xl{--uhuu-tw-shadow:0 20px 25px -5px var(--uhuu-tw-shadow-color,#0000001a), 0 8px 10px -6px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-0,[data-uhuu-portal] .uhuu\\:ring-0{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(0px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\){--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:outline,[data-uhuu-portal] .uhuu\\:outline{outline-style:var(--uhuu-tw-outline-style);outline-width:1px}[data-uhuu-interactive] .uhuu\\:outline-2,[data-uhuu-portal] .uhuu\\:outline-2{outline-style:var(--uhuu-tw-outline-style);outline-width:2px}[data-uhuu-interactive] .uhuu\\:outline-offset-2,[data-uhuu-portal] .uhuu\\:outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .uhuu\\:outline-blue-100,[data-uhuu-portal] .uhuu\\:outline-blue-100{outline-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--uhuu-tw-drop-shadow-size:drop-shadow(0 1px 2px var(--uhuu-tw-drop-shadow-color,#000c));--uhuu-tw-drop-shadow:var(--uhuu-tw-drop-shadow-size);filter:var(--uhuu-tw-blur,) var(--uhuu-tw-brightness,) var(--uhuu-tw-contrast,) var(--uhuu-tw-grayscale,) var(--uhuu-tw-hue-rotate,) var(--uhuu-tw-invert,) var(--uhuu-tw-saturate,) var(--uhuu-tw-sepia,) var(--uhuu-tw-drop-shadow,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-\\[1px\\],[data-uhuu-portal] .uhuu\\:backdrop-blur-\\[1px\\]{--uhuu-tw-backdrop-blur:blur(1px);backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-md,[data-uhuu-portal] .uhuu\\:backdrop-blur-md{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-md));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-sm,[data-uhuu-portal] .uhuu\\:backdrop-blur-sm{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-sm));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:transition,[data-uhuu-portal] .uhuu\\:transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-all,[data-uhuu-portal] .uhuu\\:transition-all{transition-property:all;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-colors,[data-uhuu-portal] .uhuu\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-opacity,[data-uhuu-portal] .uhuu\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-transform,[data-uhuu-portal] .uhuu\\:transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:duration-150,[data-uhuu-portal] .uhuu\\:duration-150{--uhuu-tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .uhuu\\:ease-in-out,[data-uhuu-portal] .uhuu\\:ease-in-out{--uhuu-tw-ease:var(--uhuu-ease-in-out);transition-timing-function:var(--uhuu-ease-in-out)}[data-uhuu-interactive] .uhuu\\:outline-none,[data-uhuu-portal] .uhuu\\:outline-none{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:select-none,[data-uhuu-portal] .uhuu\\:select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *){opacity:1}[data-uhuu-interactive] .uhuu\\:group-hover\\/corner\\:bg-gray-500:is(:where(.uhuu\\:group\\/corner):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/corner\\:bg-gray-500:is(:where(.uhuu\\:group\\/corner):hover *){background-color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *){border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *){--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .uhuu\\:group-data-\\[state\\=checked\\]\\/corner\\:bg-gray-900:is(:where(.uhuu\\:group\\/corner)[data-state=checked] *),[data-uhuu-portal] .uhuu\\:group-data-\\[state\\=checked\\]\\/corner\\:bg-gray-900:is(:where(.uhuu\\:group\\/corner)[data-state=checked] *){background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-50:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-50:is(:where(.uhuu\\:peer):disabled~*){opacity:.5}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*){opacity:.7}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:border-gray-400:focus-within{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-2:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-2:focus-within{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-gray-200:focus-within{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:hover\\:scale-105:hover,[data-uhuu-portal] .uhuu\\:hover\\:scale-105:hover{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover{border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-200:hover{border-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-300:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-300:hover{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-400:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-400:hover{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover{background-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-50:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-50:hover{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-200:hover{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-800:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-800:hover{background-color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-white:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-white:hover{background-color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-600:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-600:hover{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-900:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-900:hover{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:hover\\:underline:hover,[data-uhuu-portal] .uhuu\\:hover\\:underline:hover{text-decoration-line:underline}[data-uhuu-interactive] .uhuu\\:hover\\:opacity-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .uhuu\\:hover\\:shadow-lg:hover,[data-uhuu-portal] .uhuu\\:hover\\:shadow-lg:hover{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}}[data-uhuu-interactive] .uhuu\\:focus\\:w-40:focus,[data-uhuu-portal] .uhuu\\:focus\\:w-40:focus{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:focus\\:border-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-gray-400:focus{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:border-transparent:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .uhuu\\:focus\\:bg-gray-100:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-gray-100:focus{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:focus\\:bg-red-50:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-red-50:focus{background-color:var(--uhuu-color-red-50)}[data-uhuu-interactive] .uhuu\\:focus\\:text-gray-900:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-gray-900:focus{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus\\:text-red-700:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-red-700:focus{color:var(--uhuu-color-red-700)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-2:focus{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-400)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:color-mix(in oklab, var(--uhuu-color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-500:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-500:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-500)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-200:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-200:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-400:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-0:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-0:focus{--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-2:focus{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:outline-none:focus,[data-uhuu-portal] .uhuu\\:focus\\:outline-none:focus{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:focus-visible\\:border-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:border-gray-400:focus-visible{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-2:focus-visible{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-300:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-300:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-1:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-1:focus-visible{--uhuu-tw-ring-offset-width:1px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible{--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:outline-none:focus-visible{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:active\\:cursor-grabbing:active,[data-uhuu-portal] .uhuu\\:active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .uhuu\\:disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .uhuu\\:disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-40:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-50:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[highlighted\\]\\:border-gray-400[data-highlighted],[data-uhuu-portal] .uhuu\\:data-\\[highlighted\\]\\:border-gray-400[data-highlighted]{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--uhuu-tw-translate-x:calc(var(--uhuu-spacing) * 4);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:border-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:border-gray-900[data-state=checked]{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked]{background-color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-100[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-100[data-state=checked]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--uhuu-tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open]{--uhuu-tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--uhuu-tw-translate-x:0px;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--uhuu-color-gray-200)}@media (width>=40rem){[data-uhuu-interactive] .uhuu\\:sm\\:max-w-sm,[data-uhuu-portal] .uhuu\\:sm\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:sm\\:flex-row,[data-uhuu-portal] .uhuu\\:sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .uhuu\\:sm\\:justify-end,[data-uhuu-portal] .uhuu\\:sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:sm\\:text-left,[data-uhuu-portal] .uhuu\\:sm\\:text-left{text-align:left}}@media print{.uhuu\\:print\\:transform-none{transform:none}}[data-uhuu-interactive] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor],[data-uhuu-interactive] [data-uhuu-editor] [data-uhuu-paper],[data-uhuu-portal] [data-uhuu-editor] [data-uhuu-paper]{--uhuu-spacing:.25rem;--uhuu-font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-default-font-family:var(--uhuu-font-sans);--uhuu-color-white:#fff;--uhuu-color-black:#000;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-200:oklch(88.2% .059 254.128);--uhuu-color-blue-300:oklch(80.9% .105 251.813);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-blue-700:oklch(48.8% .243 264.376);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-gray-950:oklch(13% .028 261.692);--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-font-weight-bold:700;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-radius-xl:.75rem;--uhuu-shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--uhuu-shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--uhuu-shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--uhuu-shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--uhuu-shadow-2xl:0 25px 50px -12px #00000040;--uhuu-blur-sm:8px;--uhuu-blur-md:12px;box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .uhuu-page-options-trigger,[data-uhuu-portal] .uhuu-page-options-trigger{height:calc(var(--uhuu-spacing) * 7);width:calc(var(--uhuu-spacing) * 7);justify-content:center;align-items:center;gap:var(--uhuu-spacing);border-radius:var(--uhuu-radius-lg);background-color:var(--uhuu-color-gray-100);padding-inline:var(--uhuu-spacing);padding-block:calc(var(--uhuu-spacing) * .5);color:var(--uhuu-color-gray-600);display:flex}@media (hover:hover){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{color:var(--uhuu-color-gray-800)}}[data-uhuu-interactive] .uhuu-page-number,[data-uhuu-portal] .uhuu-page-number{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height));color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{gap:calc(var(--uhuu-spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{gap:calc(var(--uhuu-spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (width>=96rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--uhuu-color-neutral-50)}}@property --uhuu-tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-leading{syntax:"*";inherits:false}@property --uhuu-tw-font-weight{syntax:"*";inherits:false}@property --uhuu-tw-tracking{syntax:"*";inherits:false}@property --uhuu-tw-ordinal{syntax:"*";inherits:false}@property --uhuu-tw-slashed-zero{syntax:"*";inherits:false}@property --uhuu-tw-numeric-figure{syntax:"*";inherits:false}@property --uhuu-tw-numeric-spacing{syntax:"*";inherits:false}@property --uhuu-tw-numeric-fraction{syntax:"*";inherits:false}@property --uhuu-tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-ring-inset{syntax:"*";inherits:false}@property --uhuu-tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --uhuu-tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --uhuu-tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-blur{syntax:"*";inherits:false}@property --uhuu-tw-brightness{syntax:"*";inherits:false}@property --uhuu-tw-contrast{syntax:"*";inherits:false}@property --uhuu-tw-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-invert{syntax:"*";inherits:false}@property --uhuu-tw-opacity{syntax:"*";inherits:false}@property --uhuu-tw-saturate{syntax:"*";inherits:false}@property --uhuu-tw-sepia{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-drop-shadow-size{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-blur{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-brightness{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-contrast{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-invert{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-opacity{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-saturate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-sepia{syntax:"*";inherits:false}@property --uhuu-tw-duration{syntax:"*";inherits:false}@property --uhuu-tw-ease{syntax:"*";inherits:false}@layer base.uhuu-document{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[data-uhuu-reset=none]:not(#\\#),[data-uhuu-reset=none] :not(#\\#),[data-uhuu-reset=none]:not(#\\#):before,[data-uhuu-reset=none] :not(#\\#):before,[data-uhuu-reset=none]:not(#\\#):after,[data-uhuu-reset=none] :not(#\\#):after{all:revert-layer}}:root{--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff;--uhuu-thumbnail-caption:#0006;--uhuu-thumbnail-border:oklch(92.8% .006 264.531);--uhuu-thumbnail-border-strong:oklch(87.2% .01 258.338)}@media screen{html[data-uhuu-appearance=dark] [data-uhuu-editor]{color-scheme:dark;color:oklch(98.5% 0 0);--uhuu-shell-surface:oklch(27.4% .006 286.033);--uhuu-shell-on-inverse:oklch(21% .006 285.885);--uhuu-thumbnail-caption:oklch(21% .006 285.885/.92);--uhuu-thumbnail-border:oklch(37% .013 285.805);--uhuu-thumbnail-border-strong:oklch(44.2% .017 285.786);--uhuu-color-gray-50:oklch(30% .006 286);--uhuu-color-gray-100:oklch(33% .007 286);--uhuu-color-gray-200:oklch(100% 0 0/.1);--uhuu-color-gray-300:oklch(100% 0 0/.15);--uhuu-color-gray-400:oklch(66% .015 286);--uhuu-color-gray-500:oklch(70.5% .015 286.067);--uhuu-color-gray-600:oklch(87.1% .006 286.286);--uhuu-color-gray-700:oklch(92% .004 286.32);--uhuu-color-gray-800:oklch(96.7% .001 286.375);--uhuu-color-gray-900:oklch(98.5% 0 0);--uhuu-color-gray-950:oklch(98.5% 0 0);--uhuu-color-blue-50:oklch(62.3% .214 259.815/.15);--uhuu-color-blue-100:oklch(62.3% .214 259.815/.25);--uhuu-color-blue-200:oklch(62.3% .214 259.815/.35);--uhuu-color-red-50:oklch(70.4% .191 22.216/.15);--uhuu-color-red-600:oklch(70.4% .191 22.216);--uhuu-color-red-700:oklch(80.8% .114 19.571);--uhuu-color-emerald-100:oklch(76.5% .177 163.223/.15);--uhuu-color-emerald-600:oklch(76.5% .177 163.223);--uhuu-shadow-sm:0 1px 3px 0 #0006, 0 1px 2px -1px #0006;--uhuu-shadow-md:0 4px 6px -1px #0006, 0 2px 4px -2px #0006;--uhuu-shadow-lg:0 10px 15px -3px #00000080, 0 4px 6px -4px #00000080}html[data-uhuu-appearance=dark] [data-uhuu-editor] [data-uhuu-paper]{color-scheme:light;color:initial;scrollbar-color:auto;--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff}@layer base{html[data-uhuu-appearance=dark] [data-uhuu-editor],html[data-uhuu-appearance=dark] [data-uhuu-editor] :not([data-uhuu-paper],[data-uhuu-paper] *){border-color:oklch(100% 0 0/.1)}}html[data-uhuu-appearance=dark] body{background-color:oklch(24.5% .004 286)}html[data-uhuu-appearance=dark],html[data-uhuu-appearance=dark] .uhuu-zoom-pane{scrollbar-color:oklch(37% .013 285.805) transparent}html[data-uhuu-appearance=dark] [data-section-content]{scrollbar-color:auto}}:root{--uhuu-page-width:210mm;--uhuu-page-height:297mm;--uhuu-page-bleed:0mm;--uhuu-page-background:var(--background,#fff);--uhuu-outline-color:var(--outline-color,#d1d5db);--uhuu-sheet-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width:0mm;--uhuu-glue-width:0mm;--uhuu-paper-color:#fff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.uhuu-page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.uhuu-page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.uhuu-page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed) + var(--uhuu-sheet-growth,0px));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}@media print{.uhuu-screen-only{display:none!important}}@media screen{.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing,.25rem) * 6);outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.uhuu-pagination.horizontal_pages{justify-content:center;gap:calc(var(--spacing,.25rem) * 6);display:flex;overflow-x:auto;width:fit-content!important;min-width:fit-content!important}.uhuu-pagination.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.uhuu-pagination.two_pages .uhuu-page-sheet{flex-shrink:0}.uhuu-pagination.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}.uhuu-image-container{position:absolute;overflow:hidden}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .uhuu-image-geometry{width:100%;max-width:none;height:100%;max-height:none}.uhuu-image-inner .uhuu-image-geometry.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .uhuu-image-geometry.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .uhuu-image-geometry.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .uhuu-image-geometry.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .uhuu-image-geometry.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .uhuu-image-geometry.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .uhuu-image-geometry.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .uhuu-image-geometry.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .uhuu-image-geometry.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .uhuu-image-geometry.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .uhuu-image-geometry.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .uhuu-image-geometry.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*=group\\/section]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*=group\\/section]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*=group\\/section]{grid-column:1;justify-self:end}}
/*$vite$:1*/`,{styleId:`uhuu-components-styles`})})();import * as e from "react";
import t, { cloneElement as n, createContext as r, createElement as i, forwardRef as a, memo as o, useCallback as s, useContext as c, useEffect as l, useId as u, useLayoutEffect as d, useMemo as f, useReducer as p, useRef as m, useState as h, useSyncExternalStore as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import * as b from "react-dom";
import { createPortal as x, flushSync as S, unstable_batchedUpdates as C } from "react-dom";
//#region \0rolldown/runtime.js
var w = Object.defineProperty, T = (e, t) => {
	let n = {};
	for (var r in e) w(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || w(n, Symbol.toStringTag, { value: "Module" }), n;
}, E = class {
	static setupPageStyles(e) {
		if (!e || typeof document > "u") return;
		let t = document.createElement("link");
		return t.rel = "stylesheet", t.href = e, document.head.appendChild(t), t;
	}
	static removePageStyles(e) {
		e && typeof document < "u" && document?.head.removeChild(e);
	}
}, D = 400;
function O(e) {
	let t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
	return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function k(e) {
	return Math.round(e * 1e4) / 1e4;
}
function A(e) {
	if (!e || typeof e != "object" || e.type === "saddle") return null;
	let t = O(e.spine);
	if (t === null || t <= 0) return null;
	let n = O(e.glue);
	return {
		type: "perfect",
		spine: k(t),
		glue: n === null || n < 0 ? 0 : k(n)
	};
}
function j(e = {}) {
	let t = O(e.width), n = O(e.height);
	if (t === null || n === null || t <= 0 || n <= 0) return null;
	let r = O(e.bleed);
	return {
		width: k(t),
		height: k(n),
		bleed: r === null ? 0 : k(Math.min(Math.max(r, 0), D))
	};
}
function M(e = {}) {
	let t = j(e);
	if (!t) return null;
	let n = A(e.binding), r = n ? t.width * 2 + n.spine : t.width, i = t.height;
	return {
		trimWidth: k(r),
		trimHeight: k(i),
		width: k(r + t.bleed * 2),
		height: k(i + t.bleed * 2),
		spread: !!n
	};
}
function N(e) {
	return Array.isArray(e) ? e.length === 2 ? [{
		sheet: "outer",
		left: e[1],
		right: e[0]
	}] : e.length === 4 ? [{
		sheet: "outer",
		left: e[3],
		right: e[0]
	}, {
		sheet: "inner",
		left: e[1],
		right: e[2]
	}] : null : null;
}
function P(e = {}) {
	let t = j(e), n = A(e.binding), r = N(e.coverPages);
	if (!t || !n || !r) return null;
	let { width: i, height: a, bleed: o } = t, { spine: s, glue: c } = n, l = k(a + o * 2), u = k(i * 2 + s), d = k(u + o * 2), f = k(o + i), p = k(o + i + s), m = (e) => ({
		side: "left",
		page: e,
		trim: {
			x: o,
			y: o,
			width: i,
			height: a
		},
		bleedBox: {
			x: 0,
			y: 0,
			width: k(o + i),
			height: l
		}
	}), h = (e) => ({
		side: "right",
		page: e,
		trim: {
			x: p,
			y: o,
			width: i,
			height: a
		},
		bleedBox: {
			x: p,
			y: 0,
			width: k(i + o),
			height: l
		}
	}), g = r.map((e, t) => {
		let n = e.sheet === "inner", r = n && c > 0 ? [{
			side: "left",
			x: k(f - c),
			y: 0,
			width: c,
			height: l
		}, {
			side: "right",
			x: p,
			y: 0,
			width: c,
			height: l
		}] : [];
		return {
			sheet: e.sheet,
			index: t,
			panels: [m(e.left), h(e.right)],
			spine: {
				x: f,
				y: 0,
				width: s,
				height: l,
				blank: n
			},
			glueZones: r
		};
	});
	return {
		binding: n,
		page: t,
		sheet: {
			width: d,
			height: l,
			trimWidth: u,
			trimHeight: a
		},
		sheets: g
	};
}
function F(e = {}) {
	let t = M(e);
	if (!t) return null;
	let n = A(e.binding);
	return {
		"--uhuu-sheet-width": `${t.width}mm`,
		"--uhuu-sheet-height": `${t.height}mm`,
		"--uhuu-spine-width": `${n ? n.spine : 0}mm`,
		"--uhuu-glue-width": `${n ? n.glue : 0}mm`
	};
}
function I(e = {}) {
	let t = A(e.binding);
	if (!t) return [];
	let n = [], r = j(e), i = O(e.coverPageCount);
	return r || n.push("binding.spine is set but the page format has no valid width/height; cover spread skipped."), i !== null && i !== 1 && i !== 2 && n.push(`binding.spine is set but pageFilter.coverPageCount is ${i}; a cover spread needs 1 (outer sheet only) or 2 (outer + inner). Rendering plain cover pages.`), Array.isArray(e.coverPages) && !N(e.coverPages) && n.push(`binding.spine is set but the cover filter produced ${e.coverPages.length} page(s); a cover spread needs 2 or 4. Rendering plain cover pages.`), r && t.glue > 0 && t.glue >= r.width / 2 && n.push(`binding.glue (${t.glue}mm) is at least half the page width (${r.width}mm); the glue mask would hide most of the inside covers.`), r && r.bleed > 0 && t.spine < r.bleed && n.push(`binding.spine (${t.spine}mm) is narrower than the bleed (${r.bleed}mm); panels are cut at the spine, so artwork will not run across it unless the spine component paints it.`), e.preview === "two_pages" && n.push("preview \"two_pages\" is ignored while a cover spread is active; each sheet is already a spread."), O(e.flowCoverPages) > 0 && n.push("a cover page has hasFlow: true; only its first chunk is placed on the cover sheet."), n;
}
//#endregion
//#region src/uhuu/utility/PageSizeUtils.js
var L = 96 / 25.4, ee = class {
	static PAGE_SIZES = {
		A0: {
			width: 841,
			height: 1189
		},
		A1: {
			width: 594,
			height: 841
		},
		A2: {
			width: 420,
			height: 594
		},
		A3: {
			width: 297,
			height: 420
		},
		A4: {
			width: 210,
			height: 297
		},
		A5: {
			width: 148,
			height: 210
		},
		A6: {
			width: 105,
			height: 148
		},
		B0: {
			width: 1e3,
			height: 1414
		},
		B1: {
			width: 707,
			height: 1e3
		},
		B2: {
			width: 500,
			height: 707
		},
		B3: {
			width: 353,
			height: 500
		},
		B4: {
			width: 250,
			height: 353
		},
		B5: {
			width: 176,
			height: 250
		},
		B6: {
			width: 125,
			height: 176
		},
		C0: {
			width: 917,
			height: 1297
		},
		C1: {
			width: 648,
			height: 917
		},
		C2: {
			width: 458,
			height: 648
		},
		C3: {
			width: 324,
			height: 458
		},
		C4: {
			width: 229,
			height: 324
		},
		C5: {
			width: 162,
			height: 229
		},
		C6: {
			width: 114,
			height: 162
		},
		LETTER: {
			width: 216,
			height: 279
		},
		LEGAL: {
			width: 216,
			height: 356
		},
		TABLOID: {
			width: 279,
			height: 432
		},
		LEDGER: {
			width: 432,
			height: 279
		}
	};
	static getStandardFormats() {
		return [
			"Custom",
			"A3",
			"A4",
			"A5",
			"LETTER",
			"LEGAL"
		];
	}
	static getDimensions({ format: e, orientation: t = "portrait" }) {
		let n = this.PAGE_SIZES[e.toUpperCase()];
		return n ? t === "landscape" ? {
			width: n.height,
			height: n.width
		} : {
			width: n.width,
			height: n.height
		} : null;
	}
	static mmToPx(e) {
		return e * L;
	}
	static toValidCustomDimension(e) {
		let t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
		return typeof t == "number" && Number.isFinite(t) && t > 10 && t < 4e3 ? t : null;
	}
	static resolveDimensions(e = {}) {
		let { format: t, orientation: n, width: r, height: i } = e, a = this.toValidCustomDimension(r), o = this.toValidCustomDimension(i);
		if (a !== null && o !== null) return {
			width: a,
			height: o
		};
		let s = typeof t == "string" && t.toLowerCase() !== "custom" ? t : "";
		return this.getDimensions({
			format: s || "A4",
			orientation: n
		}) ?? this.getDimensions({
			format: "A4",
			orientation: n
		}) ?? {
			width: 210,
			height: 297
		};
	}
	static mergePageFormat(e, t) {
		if (!t) return e;
		let n = {
			...e,
			...t
		};
		return typeof t.format == "string" && t.width === void 0 && t.height === void 0 && (delete n.width, delete n.height), n;
	}
	static clampBleed(e) {
		return Math.min(Math.max(e ?? 0, 0), 400);
	}
	static resolveCssVars(e = {}) {
		let t = this.resolveDimensions(e), n = this.clampBleed(e.bleed), r = {
			"--uhuu-page-width": `${t.width}mm`,
			"--uhuu-page-height": `${t.height}mm`,
			"--uhuu-page-bleed": `${n}mm`
		}, i = F({
			...t,
			bleed: n,
			binding: e.binding
		});
		return i ? {
			...r,
			...i
		} : r;
	}
	static pageParams(e, t = {}) {
		let { format: n, orientation: r, bleed: i, showBleed: a, printCssRaw: o, printCssUrl: s, preview: c, binding: l } = t, u = this.resolveDimensions(t);
		return { page: {
			paginationType: e,
			format: n,
			orientation: r,
			bleed: i,
			width: u?.width,
			height: u?.height,
			preview: c,
			showBleed: a,
			printCssRaw: o,
			printCssUrl: s,
			binding: A(l),
			sheet: M({
				...u,
				bleed: this.clampBleed(i),
				binding: l
			})
		} };
	}
}, te = r(null), R = ({ config: e, children: t }) => /* @__PURE__ */ v(te.Provider, {
	value: e,
	children: t
}), z = "0.5.6", B = "data-uhuu-components", ne = "templateRuntime", re = "__uhuuComponentsAnnounced", V = (e) => {
	let t = e.$uhuu?.editor;
	return typeof t?.post == "function" && (t.post({
		action: ne,
		runtime: { "uhuu-components": z }
	}), !0);
};
function ie(e = typeof window > "u" ? void 0 : window) {
	if (e && !e[re]) {
		e[re] = !0;
		try {
			e.document?.documentElement?.setAttribute(B, z);
		} catch {}
		if (!e.$uhuu_renderer && e.parent && e.parent !== e) try {
			if (V(e)) return;
			e.document?.readyState !== "complete" && e.addEventListener?.("load", () => {
				try {
					V(e);
				} catch {}
			}, { once: !0 });
		} catch {}
	}
}
//#endregion
//#region src/uhuu/pagination-static/pagination-readiness.js
var ae = "data-uhuu-pagination";
function H(e, t) {
	let n = Object.keys(t ?? {}).sort().map((e) => {
		let n = t[e]?.signatures ?? {};
		return `${e}=${Object.keys(n).sort().map((e) => `${e}:${n[e]}`).join(",")}`;
	});
	return `${e.join("|")}#${n.join(";")}`;
}
function oe({ doc: e, settleMs: t = 50, onFirstScope: n } = {}) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), a = () => {
		let t = (e ?? (typeof document > "u" ? void 0 : document))?.documentElement;
		if (!t) return;
		let n = [...r.values()].map((e) => e.state);
		if (!n.length) {
			t.removeAttribute(ae);
			return;
		}
		let a = i.size || n.includes("measuring") ? "measuring" : n.includes("error") ? "error" : "settled";
		t.getAttribute("data-uhuu-pagination") !== a && t.setAttribute(ae, a);
	};
	return {
		hold({ label: e = "A pagination hold", waitMs: t } = {}) {
			let n = Symbol();
			i.add(n), a();
			let o = null, s = () => {
				if (clearTimeout(o), i.delete(n)) {
					for (let e of r.values()) e.refresh();
					a();
				}
			};
			return Number.isFinite(t) && (o = setTimeout(() => {
				console.warn(`[uhuu-components] ${e} has held pagination for ${Math.round(t / 1e3)} s; the document stops waiting for it.`), s();
			}, t)), s;
		},
		createScope() {
			!r.size && n && n();
			let e = Symbol(), i = /* @__PURE__ */ new Set(), o = null, s = null, c = !1, l = {
				state: "measuring",
				refresh: () => {
					for (let e of i) e.remeasure?.();
					f();
				}
			}, u = (t) => {
				c && (l.state = t, r.set(e, l), a());
			}, d = (e) => !!e.measurement && o.layouts[e.pageKey]?.signatures?.[e.measurement.flowId] === e.measurement.signature, f = () => {
				if (clearTimeout(s), s = null, !c) return;
				let e = [...i].filter((e) => o?.pageKeys.has(e.pageKey)), n = new Set(e.map((e) => e.pageKey)), r = !o || e.some((e) => e.jobs.size > 0) || [...o.pageKeys].some((e) => !n.has(e)) || e.some((e) => !e.failure && !d(e));
				u("measuring"), !r && (s = setTimeout(() => {
					s = null, u(e.some((e) => e.failure) ? "error" : "settled");
				}, t));
			};
			return {
				commit(e, t) {
					let n = [...e], r = H(n, t);
					c && o?.signature === r || (o = {
						pageKeys: new Set(n),
						layouts: t,
						signature: r
					}, c = !0, f());
				},
				suspend() {
					o = null, f();
				},
				unmount() {
					c = !1, o = null, clearTimeout(s), s = null, r.delete(e), a();
				},
				registerArea(e, { remeasure: t } = {}) {
					let n = {
						pageKey: e,
						remeasure: t,
						jobs: /* @__PURE__ */ new Set(),
						measurement: null,
						failure: null
					};
					return i.add(n), f(), {
						begin() {
							let e = Symbol();
							return n.jobs.add(e), f(), () => {
								n.jobs.delete(e) && f();
							};
						},
						measured(e, t = null) {
							let r = n.failure === t && n.measurement?.flowId === e?.flowId && n.measurement?.signature === e?.signature;
							n.measurement = e, n.failure = t, r || f();
						},
						fail(e) {
							n.failure !== e && (n.failure = e, f());
						},
						clear() {
							(n.measurement || n.failure) && (n.measurement = null, n.failure = null, f());
						},
						dispose() {
							i.delete(n), f();
						}
					};
				}
			};
		}
	};
}
var se = oe({ onFirstScope: () => ie() }), ce = typeof window > "u" ? l : d;
//#endregion
//#region src/uhuu/runtime/host.js
function le() {
	return typeof window < "u" && !!window.$uhuu_renderer;
}
function ue() {
	return typeof window > "u" ? void 0 : window.$uhuu;
}
function de() {
	return typeof window < "u" && !!window.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function fe() {
	return typeof window > "u" ? void 0 : window.$payload;
}
var pe = [], me = /* @__PURE__ */ new Map();
function he(e) {
	if (e.source !== window.parent && e.source !== window || typeof e.data != "string") return;
	let t;
	try {
		t = JSON.parse(e.data);
	} catch {
		return;
	}
	if (t?.action === "shaked") {
		let e = t.data?.capabilities;
		pe = Array.isArray(e) ? e.filter((e) => typeof e == "string") : [];
	}
	if (t?.action === "patchPayloadResult") {
		let e = me.get(t.requestId);
		if (!e) return;
		me.delete(t.requestId), clearTimeout(e.timer), e.resolve({
			ok: t.ok === !0,
			applied: Number(t.applied) || 0,
			rejected: Array.isArray(t.rejected) ? t.rejected : []
		});
	}
}
typeof window < "u" && typeof window.addEventListener == "function" && window.addEventListener("message", he);
function ge(e) {
	return pe.includes(e);
}
function _e(e, { timeout: t = 5e3 } = {}) {
	let n = ue()?.editor;
	if (typeof n?.post != "function") return Promise.reject(/* @__PURE__ */ Error("No uhuu editor to write to"));
	let r = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
	return new Promise((i, a) => {
		let o = setTimeout(() => {
			me.delete(r), a(/* @__PURE__ */ Error(`The editor did not answer within ${t} ms`));
		}, t);
		me.set(r, {
			resolve: i,
			timer: o
		}), n.post({
			action: "patchPayload",
			requestId: r,
			operations: e
		});
	});
}
//#endregion
//#region src/uhuu/utility/is-dev.ts
function ve() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
//#endregion
//#region src/uhuu/utility/warn-once.js
var ye = /* @__PURE__ */ new Set();
function be(e, ...t) {
	ye.has(e) || (ye.add(e), console.warn(...t));
}
function xe(e, ...t) {
	ye.has(e) || (ye.add(e), console.debug(...t));
}
function Se(e, ...t) {
	ye.has(e) || (ye.add(e), console.error(...t));
}
function Ce(e) {
	e && be(`image:${e}`, `[uhuu-components] Image ${e} failed to load, so it prints empty. Check the URL, or pass onError to render a fallback.`);
}
//#endregion
//#region src/uhuu/utility/diagnostics.ts
var we = r(!1);
function Te() {
	return c(we) || de() || ve();
}
//#endregion
//#region src/uhuu/pagination-static/view.ts
var Ee = ["print", "screen"];
function De(e) {
	if (le() || e == null) return "print";
	if (Ee.includes(e)) return e;
	let t = JSON.stringify(e) ?? String(e);
	return be(`view:${t}`, `[uhuu-components] PageEditor view ${t} is not "print" or "screen"; the pages are drawn for print.`), "print";
}
var Oe = r("print"), ke = "data-uhuu-view", Ae = /* @__PURE__ */ new Set();
function je(e, t = !0) {
	let n = u();
	ce(() => {
		if (t && typeof document < "u") return Ae.add(n), document.documentElement.setAttribute(ke, e), () => {
			Ae.delete(n), Ae.size || document.documentElement.removeAttribute(ke);
		};
	}, [
		n,
		e,
		t
	]);
}
function Me() {
	let e = c(Oe);
	return le() ? "print" : e;
}
//#endregion
//#region src/uhuu/pagination-static/pagination-static.tsx
var Ne = t.createContext(!1);
function Pe(e) {
	let [t] = h(() => e ? se.createScope() : null);
	ce(() => (t?.commit([], {}), () => t?.suspend()), [t]), l(() => () => t?.unmount(), [t]);
}
var Fe = ({ children: e, className: n, setup: r }) => {
	let i = ee.pageParams("static", r), a = JSON.stringify(ee.resolveCssVars(r)), o = !t.useContext(Ne);
	Pe(o), je("print", o), ce(() => {
		let e = document.documentElement.style;
		for (let [t, n] of Object.entries(JSON.parse(a))) e.getPropertyValue(t) !== n && e.setProperty(t, n);
	}, [a]), l(() => {
		let e = E.setupPageStyles(i?.page?.printCssUrl);
		return () => {
			e && E.removePageStyles(e);
		};
	}, [i?.page?.printCssUrl]);
	let s = [
		"uhuu-pagination",
		n,
		i?.page?.preview
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ v(R, {
		config: i,
		children: /* @__PURE__ */ v("div", {
			className: s,
			children: e
		})
	});
}, Ie = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
	let l = c(te), u = a ?? l?.page?.showBleed ?? !1;
	return /* @__PURE__ */ y("div", {
		className: `uhuu-page-sheet ${t}`,
		style: n,
		ref: s,
		"data-page-key": o,
		children: [
			e,
			i && i({ pageNo: r }),
			u && /* @__PURE__ */ v("div", { className: "uhuu-bleed-area" })
		]
	});
});
Ie.displayName = "Sheet";
//#endregion
//#region src/uhuu/pagination-static/flow-assets.js
var Le = 1e4;
function Re(e, { begin: t, onReady: n, doc: r = e.ownerDocument, waitMs: i = Le }) {
	let a = /* @__PURE__ */ new Map(), o = r?.fonts, s = !1, c = null, l = (e) => {
		let n = t(), r = setTimeout(() => {
			n(), be(`asset-wait:${e}`, `[uhuu-components] ${e} is still loading after ${Math.round(i / 1e3)} s; pagination stops waiting for it and measures again if it arrives.`);
		}, i);
		return () => {
			clearTimeout(r), n();
		};
	}, u = () => {
		if (s || !o || o.status !== "loading" || c) return;
		let e = [...new Set(Array.from(o).filter((e) => e.status === "loading").map((e) => e.family))];
		c = l(e.length ? `Web font ${e.join(", ")}` : "A web font");
		let t = () => {
			s || (n(), c?.(), c = null);
		};
		o.ready.then(t, t);
	};
	o?.addEventListener("loading", u), u();
	let d = () => {
		for (let [t, n] of a) (!e.contains(t) || t.complete) && n();
		for (let t of e.querySelectorAll("img")) {
			if (t.loading === "lazy" && (t.loading = "eager"), t.complete || a.has(t)) continue;
			let e = l(`Image ${t.currentSrc || t.src || "(no src)"}`), r = () => {
				t.removeEventListener("load", i), t.removeEventListener("error", i), a.delete(t), e();
			}, i = () => {
				s || n(), r();
			};
			a.set(t, r), t.addEventListener("load", i), t.addEventListener("error", () => Ce(t.currentSrc || t.src), { once: !0 }), t.addEventListener("error", i);
		}
		u();
	};
	return d(), {
		sync: d,
		disconnect() {
			s = !0, o?.removeEventListener("loading", u), c?.(), c = null;
			for (let e of a.values()) e();
		}
	};
}
//#endregion
//#region src/uhuu/pagination-static/pagination-hold.ts
function ze(e = !0, t) {
	let n = m(t);
	ce(() => {
		n.current = t;
	}, [t]), ce(() => {
		if (!e) return;
		let t = n.current ? `usePaginationHold(${JSON.stringify(n.current)})` : "usePaginationHold() without a label (pass one, usePaginationHold(pending, \"Map\"), to name it)";
		return se.hold({
			label: t,
			waitMs: Le
		});
	}, [e]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-context.ts
var Be = "data-uhuu-flow-continuation-copy", Ve = r(null), He = 1e3;
function Ue(e, { fallbackMs: t = 100, win: n } = {}) {
	let r = n ?? (typeof window > "u" ? void 0 : window), i = !1, a = null, o = null, s = () => {
		a !== null && r?.cancelAnimationFrame?.(a), o !== null && clearTimeout(o), a = null, o = null;
	}, c = () => {
		i || (i = !0, s(), e());
	};
	return r?.document?.visibilityState !== "hidden" && typeof r?.requestAnimationFrame == "function" ? (a = r.requestAnimationFrame(c), o = setTimeout(c, t)) : o = setTimeout(c, 0), () => {
		i = !0, s();
	};
}
//#endregion
//#region src/uhuu/pagination-static/flow-measure.ts
var We = /* @__PURE__ */ T({
	getEffectiveScale: () => Ke,
	getOuterHeight: () => qe,
	hashString: () => ft,
	parseAbsoluteLength: () => st,
	parseKeepWithNext: () => Ze,
	parseLineCount: () => Ye,
	readFlowItemElements: () => it,
	readFlowTextLines: () => dt,
	readHeaderGroupGrows: () => tt,
	readHeaderGroupHeights: () => nt,
	readHeaderGroupKey: () => $e,
	readHeaderGroupRepeats: () => et,
	readItemFlowTexts: () => ct,
	readItemMeta: () => Je,
	readUnstackedItem: () => at,
	readUnwrappedHeights: () => rt,
	serializeKeepWithNext: () => Qe,
	serializeLineCount: () => Xe
}), Ge = "data-uhuu-flow-text";
function Ke(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function qe(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function Je(e) {
	let t = {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: Ze(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	}, n = Ye(e.dataset.uhuuFlowOrphans), r = Ye(e.dataset.uhuuFlowWidows);
	return n !== void 0 && (t.orphans = n), r !== void 0 && (t.widows = r), e.dataset.uhuuFlowGrowSheet === "true" && (t.growSheet = !0), t;
}
function Ye(e) {
	if (!e) return;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t >= 1 ? t : void 0;
}
function Xe(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? String(Math.floor(e)) : void 0;
}
function Ze(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function Qe(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function $e(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function et(e) {
	let t = {};
	for (let n of e) {
		let e = $e(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function tt(e) {
	let t = {};
	for (let n of e) {
		let e = $e(n);
		e && n.dataset.uhuuFlowHeaderGrowSheet === "true" && (t[e] = !0);
	}
	return t;
}
function nt(e, t = 1, n) {
	let r = {};
	for (let i of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = i.dataset.uhuuFlowHeaderGroupKey;
		e && (r[e] = Math.max(r[e] ?? 0, n?.get(i) ?? qe(i, t)));
	}
	return r;
}
function rt(e, t, n = 1) {
	let r = /* @__PURE__ */ new Map(), i = e.getBoundingClientRect().top;
	for (let e of Array.from(t.children)) {
		if (!(e instanceof HTMLElement) || !e.getClientRects().length) continue;
		let t = e.getBoundingClientRect().bottom, a = Math.max(0, t - i) / n;
		i = Math.max(i, t), e.dataset.uhuuFlowItem === "true" ? r.set(e, a) : e.dataset.uhuuFlowGroupHeader === "true" && r.set(e, Math.max(a, qe(e, n)));
	}
	return r;
}
function it(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function at(e, t, n) {
	let r = e.getBoundingClientRect(), i = null;
	for (let e of n) {
		if (e.closest("[data-uhuu-flow=\"true\"]") !== t) continue;
		let n = e.getBoundingClientRect();
		if (n.width > 0 || n.height > 0) {
			if (n.right <= r.left + .5 || n.left >= r.right - .5 || i && i.height > .5 && n.top < i.top + .5) return e;
			i = n;
		}
	}
	return null;
}
var ot = {
	px: 1,
	mm: 96 / 25.4,
	cm: 96 / 2.54,
	in: 96,
	pt: 96 / 72,
	pc: 16
};
function st(e) {
	if (typeof e == "number") return Number.isFinite(e) && e >= 0 ? e : void 0;
	if (typeof e != "string") return;
	let t = /^\s*(\d+(?:\.\d+)?|\.\d+)\s*(px|mm|cm|in|pt|pc)\s*$/i.exec(e);
	return t ? Number.parseFloat(t[1]) * ot[t[2].toLowerCase()] : /^\s*0\s*$/.test(e) ? 0 : void 0;
}
function ct(e) {
	let t = e.closest("[data-uhuu-flow=\"true\"]");
	return Array.from(e.querySelectorAll(`[${Ge}]`)).filter((e) => e.closest("[data-uhuu-flow=\"true\"]") === t);
}
var lt = /[\p{L}\p{M}]/u;
function ut(e) {
	let t = (t) => Number.parseFloat(e.getPropertyValue(t) || "0") || 0;
	return {
		top: t("border-top-width") + t("padding-top"),
		bottom: t("border-bottom-width") + t("padding-bottom")
	};
}
function dt(e, t, n = 1, r) {
	let i = ct(e);
	if (!i.length) return;
	if (i.length > 1) {
		r?.("multiple-flow-text", e);
		return;
	}
	let a = i[0];
	if (a.hasAttribute("data-uhuu-flow-text-unsplittable")) {
		r?.("unsupported-content", a);
		return;
	}
	let o = window.getComputedStyle(a);
	if (o.display === "none") return;
	if (o.display === "inline" || o.display === "contents") {
		r?.("inline-flow-text", a);
		return;
	}
	let s = `${o.getPropertyValue("text-wrap-style")} ${o.getPropertyValue("text-wrap")}`;
	/\b(balance|pretty)\b/.test(s) && r?.("rewrapping-text-wrap", a);
	let c = Ye(o.getPropertyValue("orphans")), l = Ye(o.getPropertyValue("widows")), u = [], d = [], f = 0, p = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
	for (let e = p.nextNode(); e; e = p.nextNode()) {
		let t = e;
		u.push(t), d.push(f), f += t.data.length;
	}
	if (!u.length) return;
	let m = document.createRange(), h = [], g = [];
	for (let e of u) {
		m.selectNodeContents(e);
		let t = -1, n = -1;
		for (let e of Array.from(m.getClientRects())) {
			if (!(e.height > 0)) continue;
			let r = h[h.length - 1];
			!r || (e.top + e.bottom) / 2 > r.bottom ? h.push({
				top: e.top,
				bottom: e.bottom
			}) : (r.top = Math.min(r.top, e.top), r.bottom = Math.max(r.bottom, e.bottom)), t < 0 && (t = h.length - 1), n = h.length - 1;
		}
		g.push(t < 0 ? null : [t, n]);
	}
	if (!h.length) return;
	let _ = (e, t, n) => {
		let r = t, i = n;
		for (; r < i;) {
			let t = r + i >> 1;
			h[t].bottom >= e ? i = t : r = t + 1;
		}
		return r;
	}, v = (e, t, n, r) => {
		for (let i = t; i < e.data.length; i += 1) {
			m.setStart(e, i), m.setEnd(e, i + 1);
			let t = m.getClientRects();
			for (let e = t.length - 1; e >= 0; --e) {
				let i = t[e];
				if (i.height > 0) return _((i.top + i.bottom) / 2, n, r);
			}
		}
		return r;
	}, y = Array.from({ length: h.length }, () => -1);
	u.forEach((e, t) => {
		let n = g[t];
		if (!n) return;
		let [r, i] = n, a = e.data.length, o = (t, n) => v(e, t, r, i) >= n;
		y[r] < 0 && (y[r] = d[t]);
		let s = 0, c = 0;
		for (let n = r + 1; n <= i; n += 1) {
			let r = s, l = a, u = c || Math.ceil((a - s) / (i - n + 2)), f = Math.min(a - 1, s + u), p = Math.max(1, u >> 3);
			if (f > s && o(f, n)) {
				l = f;
				for (let e = f - p; e > s; e = l - p) {
					if (!o(e, n)) {
						s = e + 1;
						break;
					}
					l = e, p *= 2;
				}
			} else if (f > s) {
				s = f + 1;
				for (let e = f + p; e < l; e = s + p) {
					if (o(e, n)) {
						l = e;
						break;
					}
					s = e + 1, p *= 2;
				}
			}
			for (; s < l;) {
				let e = s + l >> 1;
				o(e, n) ? l = e : s = e + 1;
			}
			let m = s, h = e.data.charCodeAt(m);
			m > 0 && h >= 56320 && h <= 57343 && --m, y[n] = d[t] + m, c = Math.max(1, m - r);
		}
	});
	let b = (e) => {
		let t = 0, n = d.length - 1;
		for (; t < n;) {
			let r = t + n + 1 >> 1;
			d[r] <= e ? t = r : n = r - 1;
		}
		return t;
	}, x = (e) => {
		let t = b(e);
		return u[t].data[e - d[t]] ?? "";
	}, S = h.map((e, t) => {
		if (t === h.length - 1) return !1;
		let n = y[t + 1] - 1;
		if (n < 0) return !1;
		let r = x(n);
		if (r === "­") return !0;
		if (!lt.test(r) || !lt.test(x(n + 1))) return !1;
		let i = b(n), a = u[i], o = n - d[i];
		m.setStart(a, o), m.setEnd(a, o + 1);
		let s = 0;
		for (let e of Array.from(m.getClientRects())) {
			let n = (e.top + e.bottom) / 2;
			e.height > 0 && n >= h[t].top && n <= h[t].bottom && (s += 1);
		}
		return s >= 2;
	}), C = a.getBoundingClientRect(), w = ut(o), T = e.getBoundingClientRect(), E = Number.parseFloat(window.getComputedStyle(e).marginBottom || "0") || 0, D = T.bottom + (E - t) * n, O = (e) => (e - D) / n, k = C.top + w.top * n, A = C.bottom - w.bottom * n, j = [];
	return h.forEach((e, t) => {
		let n = t === 0 ? k : (h[t - 1].bottom + e.top) / 2, r = t === h.length - 1 ? A : (e.bottom + h[t + 1].top) / 2, i = t === 0 ? 0 : y[t], a = j[j.length - 1];
		a && !(i > a.start) ? (a.bottom = O(r), S[t] ? a.hyphen = !0 : delete a.hyphen) : j.push({
			top: O(n),
			bottom: O(r),
			start: i,
			...S[t] ? { hyphen: !0 } : {}
		});
	}), {
		lines: j,
		end: f,
		justify: o.textAlign === "justify",
		...c === void 0 ? {} : { orphans: c },
		...l === void 0 ? {} : { widows: l }
	};
}
function ft(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-core.js
function pt(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function mt(e) {
	return typeof e == "string" && e ? e : null;
}
function ht(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
var gt = 2;
function _t(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : gt;
}
var vt = .01, yt = .01;
function bt(e, t) {
	let n = e?.lines;
	if (!Array.isArray(n) || n.length < 2) return null;
	let r = e.end;
	if (typeof r != "number" || !Number.isFinite(r)) return null;
	let i = -Infinity, a = -1;
	for (let e of n) {
		let { top: t, bottom: n, start: o } = e ?? {};
		if (![
			t,
			n,
			o
		].every((e) => typeof e == "number" && Number.isFinite(e)) || n < t - vt || t < i - vt || o <= a || o > r) return null;
		i = n, a = o;
	}
	return n[n.length - 1].bottom - n[0].top > t + 1 ? null : e;
}
function xt(e, t, n, r) {
	let { lines: i } = e;
	return Math.max(0, i[0].top + (i[r].bottom - i[n].top) + (t - i[i.length - 1].bottom));
}
function St({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = mt(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : mt(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : mt(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
	return {
		pageIndex: r,
		pageCount: i,
		itemIndex: e,
		fragmentIndex: c,
		groupKey: l ?? void 0,
		isFirst: e === 0,
		isLast: a > 0 && e === a - 1,
		isFirstInFragment: c === 0,
		isLastInFragment: c >= 0 && c === t.length - 1,
		isFirstInGroup: m,
		isFirstInGroupOnPage: h,
		isContinuation: r > 0,
		isGroupContinuation: !(!h || m || p !== l)
	};
}
function Ct({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, continuationHeight: i, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, headerGroupGrows: c = {}, previousHeaderGroupKey: l, onUnplaceableItem: u, lines: d, breakReserve: f, window: p, maxChunks: m = 0, fixedSheets: h = !1, metrics: g } = {}) {
	let _ = p?.indexes, v = p?.offset ?? 0, y = _ ? Math.max(0, _.length - v) : e.length, b = _ ? (e) => _[v + e] : (e) => e, x = pt(r) || Infinity, S = pt(i) || x, C = [{
		indexes: [],
		keys: []
	}], w = 0, T = () => C.length > 1 ? S : x, E = pt(f), D = /* @__PURE__ */ new Map(), O = () => {
		let e = T();
		return E && E < e && D.get(k()) ? e - E : e;
	}, k = () => C[C.length - 1], A = () => {
		let e = k().indexes;
		return e.length ? e[e.length - 1] : null;
	}, j = () => k().indexes.length > 0 || !!k().unplaceable, M = (e) => mt(a[b(e)]), N = (e) => pt(o[e] ?? 0), P = (e) => s[e] !== !1, F = (e, t) => {
		let n = M(e);
		return n ? t == null ? (e > 0 ? M(e - 1) : mt(l)) !== n || P(n) : M(t) !== n : !1;
	}, I = (t, n) => {
		let r = M(t);
		return pt(e[b(t)]) + (r && F(t, n) ? N(r) : 0);
	}, L = (e) => !h && !!(n[b(e)] ?? {}).growSheet, ee = (e) => e > Math.max(T(), S) + yt, te = (e) => !h && !!(e && c[e]), R = (e) => {
		let t = M(e);
		if (!te(t) || (e > 0 ? M(e - 1) : mt(l)) === t) return -1;
		let n = e;
		for (; n + 1 < y && M(n + 1) === t;) n += 1;
		return n;
	}, z = (t, n, r) => {
		let i = I(t, r);
		for (let r = t + 1; r <= n; r += 1) g && (g.scannedItems += 1), i += pt(e[b(r)]);
		return i;
	}, B = (e) => {
		let t = n[b(e)] ?? {};
		return t.avoidBreakInside && t.groupKey ? t.groupKey : null;
	}, ne = (e, t) => {
		let n = M(e);
		return n && F(e, t) ? N(n) : 0;
	}, re = (e) => {
		let t = M(e);
		return t && P(t) ? N(t) : 0;
	}, V = /* @__PURE__ */ new Map(), ie = (e) => !!d && b(e) in d, ae = (t) => {
		if (!ie(t)) return null;
		if (V.has(t)) return V.get(t);
		let r = n[b(t)] ?? {}, i = pt(e[b(t)]), a = r.avoidBreakInside ? null : bt(d[b(t)], i);
		if (a) {
			let e = M(t), n = e ? N(e) : 0, r = Math.min(x, S);
			for (let e = 0; e < a.lines.length; e += 1) if (xt(a, i, e, e) + n > r + yt) {
				a = null;
				break;
			}
		}
		let o = a ? {
			entry: a,
			height: i,
			count: a.lines.length,
			orphans: _t(r.orphans ?? a.orphans),
			widows: _t(r.widows ?? a.widows)
		} : null;
		return V.set(t, o), o;
	}, H = /* @__PURE__ */ new Map(), oe = null, se = null, ce = () => {
		oe = Array(y + 1).fill(0), se = Array(y + 1).fill(!1);
		for (let e = y - 1; e >= 0; --e) {
			oe[e] = oe[e + 1] + I(e, e > 0 ? e - 1 : null);
			let t = n[b(e)] ?? {}, r = e + 1 < y ? n[b(e + 1)] ?? {} : {};
			se[e] = se[e + 1] || !!r.breakBefore || !!(t.breakAfter && e < y - 1);
		}
	}, le = (e, t, n) => se[e] ? !1 : (t > 0 ? xt(n.entry, n.height, t, n.count - 1) + re(e) : I(e, null)) + oe[e + 1] <= T() + yt || e === y - 1 && t === 0 && !(ie(e) && ae(e)), ue = (e, t = 0, n = null) => {
		if (!E || j()) return;
		let r = k();
		D.has(r) || (oe || ce(), D.set(r, !le(e, t, n)));
	}, de = (e, t, n) => {
		let r = 0, i = n;
		for (let n = e; n < y && B(n) === t; n += 1) g && (g.scannedItems += 1), r += I(n, i), i = n;
		return r;
	}, fe = (e, t, { currentHeight: n, ownHeight: r, stopEarly: i } = {}) => {
		let a = 0, o = e;
		for (let s = 1; s <= t; s += 1) {
			let t = e + s;
			if (t >= y) break;
			g && (g.scannedItems += 1);
			let c = R(t), l = c >= 0 ? z(t, c, o) : I(t, o);
			if ((c >= 0 || L(t)) && ee(l)) break;
			let u = ie(t) && n + (r + a + l) > O() + yt ? ae(t) : null;
			if (u && u.count >= u.orphans + u.widows) {
				a += l - u.height + xt(u.entry, u.height, 0, u.orphans - 1);
				break;
			}
			if (a += l, i && n + (r + a) > O()) break;
			o = t;
		}
		return a;
	}, pe = () => {
		j() && (C.push({
			indexes: [],
			keys: []
		}), w = 0);
	}, me = (e, n) => {
		let r = k();
		for (let i = e; i <= n; i += 1) r.indexes.push(i), r.keys.push(t[b(i)] ?? String(b(i)));
	}, he = (e, t, n) => {
		me(e, t), k().growth = w + n - O(), C.push({
			indexes: [],
			keys: []
		}), w = 0;
	}, ge = (e, n, r) => {
		let i = t[b(e)] ?? String(b(e));
		if (L(e)) {
			he(e, e, r);
			return;
		}
		let a = M(e) ?? void 0, o = a && F(e, null) ? N(a) : 0, s = {
			index: e,
			key: i,
			height: n,
			headerHeight: o,
			requiredHeight: r,
			availableHeight: O(),
			groupKey: a,
			reason: o > 0 ? "item-with-header-too-tall" : "item-too-tall"
		};
		k().unplaceable = s, u?.(s), C.push({
			indexes: [],
			keys: []
		}), w = 0;
	}, _e = (e, t) => {
		let n = j(), r = I(e, A());
		if (r > O() - w) return !1;
		if (!n) return !0;
		let i = fe(e, ht(t.keepWithNext), {
			currentHeight: w,
			ownHeight: r,
			stopEarly: Number.isFinite(O())
		});
		return w + r + i <= O();
	}, ve = (e, t, n, r) => {
		let { entry: i, height: a, count: o, orphans: s, widows: c } = r, l = (e, t) => xt(i, a, e, t), u = (e, t, n) => {
			let r = e, i = t, a = e - 1;
			for (; r <= i;) {
				let t = r + i >> 1;
				l(e, t) <= n + yt ? (a = t, r = t + 1) : i = t - 1;
			}
			return a;
		}, d = (n, r, i) => {
			let a = k();
			if (a.indexes.push(e), a.keys.push(t), w += i, n === 0 && r === o - 1) return;
			let s = H.get(a);
			s || (s = /* @__PURE__ */ new Map(), H.set(a, s)), s.set(e, [n, r]);
		}, f = 0;
		for (;;) {
			g && (g.scannedItems += 1), ue(e, f, r);
			let t = j(), i = f === 0 ? ne(e, A()) : re(e), p = O() - w, m = (f === 0 ? a : l(f, o - 1)) + i;
			if (m <= p + yt) {
				if (t) {
					let t = fe(e, ht(n.keepWithNext), {
						currentHeight: w,
						ownHeight: m,
						stopEarly: Number.isFinite(O())
					});
					if (w + m + t > O() + yt) {
						let e = o - 1 - c;
						e - f + 1 >= s ? (d(f, e, l(f, e) + i), pe(), f = e + 1) : pe();
						continue;
					}
				}
				d(f, o - 1, m);
				return;
			}
			let h = u(f, o - 2, p - i), _ = Math.min(h, o - 1 - c);
			if (_ >= f && _ - f + 1 >= s) d(f, _, l(f, _) + i);
			else if (t) {
				pe();
				continue;
			} else {
				let e = Math.max(f, h);
				if (d(f, e, l(f, e) + i), e >= o - 1) return;
				f = e + 1, pe();
				continue;
			}
			f = _ + 1, pe();
		}
	};
	for (let r = 0; r < y && !(m && C.length > m); r += 1) {
		g && (g.scannedItems += 1);
		let i = n[b(r)] ?? {}, a = pt(e[b(r)]), o = t[b(r)] ?? String(b(r));
		i.breakBefore && pe();
		let s = B(r), c = r > 0 ? B(r - 1) : null;
		s && s !== c && j() && w + de(r, s, A()) > O() && pe(), ue(r);
		let l = R(r);
		if (l >= 0) {
			let e = z(r, l, A());
			!ee(e) && j() && w + e > O() && (pe(), ue(r), e = z(r, l, null)), w + e > O() ? he(r, l, e) : (me(r, l), w += e), (n[b(l)] ?? {}).breakAfter && l < y - 1 && pe(), r = l;
			continue;
		}
		let u = ie(r) && !_e(r, i) ? ae(r) : null;
		if (u) {
			ve(r, o, i, u), i.breakAfter && r < y - 1 && pe();
			continue;
		}
		let d = A(), f = I(r, d);
		if (L(r) && ee(f)) {
			he(r, r, f);
			continue;
		}
		if (j() && f > O() - w && (pe(), d = null, ue(r), f = I(r, d)), f > O()) {
			ge(r, a, f);
			continue;
		}
		let p = j(), m = p ? fe(r, ht(i.keepWithNext), {
			currentHeight: w,
			ownHeight: f,
			stopEarly: Number.isFinite(O())
		}) : 0, h = f + m;
		p && w + h > O() && (pe(), d = null, ue(r), f = I(r, d), f > O()) ? ge(r, a, f) : (k().indexes.push(r), k().keys.push(o), w += f, i.breakAfter && r < y - 1 && pe());
	}
	let ye = C.filter((e) => e.indexes.length > 0 || !!e.unplaceable);
	if (!ye.length) return g && !m && (g.pages = 1), [{
		indexes: [],
		keys: []
	}];
	let be = m ? ye.slice(0, m) : ye;
	g && !m && (g.pages = be.length);
	let xe = Tt(be, H, (e) => ae(e).entry);
	return be.map((e) => {
		if (!e.indexes.length) return e;
		let t = H.get(e), n = [];
		for (let r = 0; r < e.indexes.length; r += 1) {
			let i = e.indexes[r], a = M(i);
			if (!a) continue;
			if (r === 0 && t?.get(i)?.[0] > 0) {
				P(a) && n.push({
					groupKey: a,
					itemIndex: i,
					isContinuation: !0
				});
				continue;
			}
			let o = r > 0 ? e.indexes[r - 1] : null;
			if (!F(i, o)) continue;
			let s = i > 0 ? M(i - 1) : null;
			n.push({
				groupKey: a,
				itemIndex: i,
				isContinuation: s === a
			});
		}
		let r = xe.get(e);
		return !n.length && !r ? e : {
			...e,
			...n.length ? { groupHeaders: n } : {},
			...r ? { splits: r } : {}
		};
	});
}
function wt(e, t, n, r) {
	let i = [];
	for (let a = t; a <= n; a += 1) e[a].hyphen && a !== e.length - 1 && (a === n && r || i.push(e[a + 1].start));
	return i.length ? { hyphens: i } : {};
}
function Tt(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	if (!t.size) return r;
	let i = /* @__PURE__ */ new Map();
	for (let n of e) for (let [e, r] of t.get(n) ?? []) {
		let t = i.get(e);
		t || (t = [], i.set(e, t)), t.push({
			chunk: n,
			range: r
		});
	}
	for (let [e, t] of i) {
		let i = n(e), { lines: a } = i;
		t.forEach(({ chunk: n, range: [o, s] }, c) => {
			let l = r.get(n);
			l || (l = {}, r.set(n, l)), l[e] = {
				part: c,
				parts: t.length,
				from: c === 0 ? 0 : a[o].start,
				to: c === t.length - 1 ? i.end : a[s + 1].start,
				...i.justify ? { justify: !0 } : {},
				textHeight: a[s].bottom - a[o].top,
				...wt(a, o, s, c === t.length - 1)
			};
		});
	}
	return r;
}
function Et(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + pt(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + pt(n[t.groupKey]), 0);
}
function Dt(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function Ot(e, t, n, r, i, a) {
	let o = (e) => t[n + e], s = {
		indexes: (e.indexes ?? []).map(o).filter(Number.isInteger),
		keys: [...e.keys ?? []],
		...a === void 0 ? {} : { previousSourceIndex: a }
	};
	return e.groupHeaders?.length && (s.groupHeaders = e.groupHeaders.map((e) => ({
		...e,
		itemIndex: o(e.itemIndex),
		isContinuation: e.isContinuation || e.itemIndex === 0 && a !== void 0 && i?.[a] === e.groupKey
	}))), e.unplaceable && (s.unplaceable = {
		...e.unplaceable,
		index: o(e.unplaceable.index),
		...r ? { columnId: r } : {}
	}), e.growth > 0 && (s.growth = e.growth), s;
}
function kt(e, t, n, r, i, a, o, s) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let c = Dt(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let l = Ot(Ct({
		heights: e.heights,
		keys: e.keys,
		metas: e.metas,
		headerGroupKeys: e.headerGroupKeys,
		headerGroupHeights: c.headerGroupHeights,
		headerGroupRepeats: c.headerGroupRepeats,
		headerGroupGrows: e.headerGroupGrows,
		previousHeaderGroupKey: o === void 0 ? void 0 : e.headerGroupKeys?.[o],
		availableHeight: r,
		window: {
			indexes: t,
			offset: n
		},
		maxChunks: 1,
		...s ? { continuationHeight: s } : { fixedSheets: !0 },
		metrics: e.metrics
	})[0] ?? {
		indexes: [],
		keys: []
	}, t, n, a, c.headerGroupKeys, o);
	return {
		chunk: l,
		consumed: l.unplaceable ? 1 : l.indexes.length,
		height: Et(l, e.heights ?? [], c.headerGroupHeights ?? {})
	};
}
function At(e) {
	let t = Number.isInteger(e?.columns) && e.columns > 0 ? e.columns : 1;
	return {
		kind: "columns",
		id: String(e?.id ?? "columns"),
		columns: Array.from({ length: t }, (t, n) => ({
			id: `column-${n + 1}`,
			indexes: n === 0 ? [...e?.indexes ?? []] : []
		}))
	};
}
function jt({ nodes: e = [], itemCount: t = 0, flowId: n } = {}) {
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = (e) => {
		throw TypeError(`[uhuu-components] Invalid Flow.Columns${n ? ` "${n}"` : ""} layout: ${e}`);
	}, o = (e, n) => {
		(!Number.isInteger(e) || e < 0 || e >= t) && a(`${n} references out-of-range item index ${String(e)}.`), i.has(e) && a(`item index ${e} occurs more than once.`), i.add(e);
	};
	e.forEach((e, t) => {
		if ((!e || e.kind !== "item" && e.kind !== "columns" && e.kind !== "flowingColumns") && a(`node ${t} has an unsupported kind.`), e.kind === "item") {
			o(e.index, `node ${t}`);
			return;
		}
		if ((typeof e.id != "string" || !e.id) && a(`column group ${t} needs a stable id.`), r.has(e.id) && a(`column group id "${e.id}" occurs more than once.`), r.add(e.id), e.kind === "flowingColumns") {
			(!Number.isInteger(e.columns) || e.columns < 1) && a(`flowing column group "${e.id}" has columns ${JSON.stringify(e.columns)}; columns is how many, 1 or more.`), e.columnFill !== void 0 && e.columnFill !== "balance" && e.columnFill !== "auto" && a(`flowing column group "${e.id}" has columnFill ${JSON.stringify(e.columnFill)}; it is "balance" or "auto".`), (e.indexes ?? []).forEach((t) => o(t, `flowing column group "${e.id}"`));
			return;
		}
		let n = /* @__PURE__ */ new Set();
		(e.columns ?? []).forEach((t, r) => {
			(!t || typeof t.id != "string" || !t.id) && a(`column ${r} in group "${e.id}" needs a stable id.`), n.has(t.id) && a(`column id "${t.id}" occurs more than once in group "${e.id}".`), n.add(t.id), (t.indexes ?? []).forEach((n) => {
				o(n, `column "${t.id}" in group "${e.id}"`);
			});
		});
	});
	for (let e = 0; e < t; e += 1) i.has(e) || a(`item index ${e} is omitted.`);
	return !0;
}
function Mt(e, t, n, r, i) {
	let a = pt(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	if (r.chunk.growth > 0) return "unless-grown";
	let o = t[n];
	if (o === void 0) return "no";
	let s = n + r.consumed;
	if (s >= t.length) return "no";
	let c = e.metas?.[o] ?? {}, l = e.metas?.[t[s]] ?? {}, u = ht(c.keepWithNext);
	return u > 0 && r.consumed <= u || c.avoidBreakInside && c.groupKey && l.avoidBreakInside && l.groupKey === c.groupKey ? "compare" : "no";
}
function Nt(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function Pt({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, continuationHeight: a, headerGroupKeys: o = [], headerGroupHeights: s = {}, headerGroupRepeats: c = {}, headerGroupGrows: l = {}, columnHeaderGroupHeights: u = {}, columnHeaderGroupRepeats: d = {}, onUnplaceableItem: f, metrics: p } = {}) {
	jt({
		nodes: e,
		itemCount: t.length
	});
	let m = pt(i) || Infinity, h = pt(a) || m, g = {
		heights: t,
		keys: n,
		metas: r,
		headerGroupKeys: o,
		headerGroupHeights: s,
		headerGroupRepeats: c,
		headerGroupGrows: l,
		columnHeaderGroupHeights: u,
		columnHeaderGroupRepeats: d,
		metrics: p
	}, _ = [{
		indexes: [],
		keys: [],
		layout: []
	}], v = 0, y = () => _[_.length - 1], b = () => _.length > 1 ? h : m, x = h, S = r.some((e) => e?.growSheet) || Object.values(l).some(Boolean) ? x : void 0, C = () => {
		Nt(y()) && (_.push({
			indexes: [],
			keys: [],
			layout: []
		}), v = 0);
	}, w = (e) => {
		y().indexes.push(...e.indexes ?? []), y().keys.push(...e.keys ?? []), !y().unplaceable && e.unplaceable && (y().unplaceable = e.unplaceable), e.unplaceable && f?.(e.unplaceable);
	}, T = (e) => {
		let n = String(e.id ?? "columns"), i = At(e).columns.map((e) => e.id), a = (e.indexes ?? []).filter((e) => Number.isInteger(e) && e >= 0 && e < t.length);
		if (!a.length || !i.length) return;
		let o = () => ({
			indexes: [],
			keys: []
		}), s = (e, t, r) => {
			let o = kt(g, a, e, t, n, i[0], e > 0 ? a[e - 1] : void 0);
			return o.chunk.unplaceable && (o.chunk.unplaceable.columnId = r), o;
		}, c = (e, t) => {
			let n = Mt(g, a, e, t, x);
			return n === "no" ? !1 : n === "move" || (p && (p.freshPageAttempts += 1), s(e, x, i[0]).consumed > t.consumed);
		}, l = (e, t) => {
			let n = [], o = e, l = !1;
			return i.forEach((e, i) => {
				if (l || o >= a.length) return;
				if (i > 0 && r[a[o]]?.breakBefore) {
					l = !0;
					return;
				}
				let u = s(o, t, e);
				if (i > 0 && c(o, u)) {
					l = !0;
					return;
				}
				n[i] = u, o += u.consumed;
				let d = u.chunk.indexes?.at(-1) ?? u.chunk.unplaceable?.index;
				(u.chunk.unplaceable || d !== void 0 && r[d]?.breakAfter) && (l = !0);
			}), {
				attempts: n,
				cursor: o,
				stopped: l
			};
		}, u = (e) => Math.max(0, ...e.attempts.filter(Boolean).map((e) => e.height)), d = (e) => !e.stopped && e.cursor >= a.length, f = (n, r) => {
			if (e.columnFill === "auto" || !d(r) || i.length < 2) return r;
			let o = 0;
			for (let e = n; e < a.length; e += 1) o += pt(t[a[e]]);
			let s = r, c = o / i.length, f = u(r);
			for (; f - c > .5;) {
				let e = (c + f) / 2, t = l(n, e);
				d(t) ? (s = t, f = Math.min(e, u(t))) : c = e;
			}
			return s;
		}, m = 0;
		for (; m < a.length;) {
			b() - v <= 0 && Nt(y()) && C(), r[a[m]]?.breakBefore && Nt(y()) && C();
			let e = b() - v;
			Nt(y()) && c(m, s(m, e, i[0])) && (C(), e = b());
			let t = f(m, l(m, e));
			if (t.cursor === m) throw TypeError(`[uhuu-components] Flow.Columns made no pagination progress in flowing column group "${n}".`);
			let d = i.map((e, n) => ({
				id: e,
				chunk: t.attempts[n]?.chunk ?? o()
			}));
			y().layout.push({
				kind: "columns",
				id: n,
				columns: d
			});
			for (let { chunk: e } of d) w(e);
			v += u(t), m = t.cursor, (m < a.length || t.stopped) && C();
		}
	};
	for (let n = 0; n < e.length; n += 1) {
		let i = e[n];
		if (!i || i.kind !== "item" && i.kind !== "columns" && i.kind !== "flowingColumns") continue;
		if (i.kind === "item") {
			let i = [], a = n;
			for (; a < e.length && e[a]?.kind === "item";) {
				let n = Number(e[a].index);
				Number.isInteger(n) && n >= 0 && n < t.length && i.push(n), a += 1;
			}
			n = a - 1;
			let o = 0;
			for (; o < i.length;) {
				b() - v <= 0 && Nt(y()) && C(), r[i[o]]?.breakBefore && Nt(y()) && C();
				let e = o > 0 ? i[o - 1] : void 0, t = kt(g, i, o, b() - v, void 0, void 0, e, S);
				if (Nt(y())) {
					let n = Mt(g, i, o, t, x);
					if (n !== "no") {
						p && (p.freshPageAttempts += 1);
						let r = kt(g, i, o, x, void 0, void 0, e, S), a = n === "unless-grown" ? !(r.chunk.growth > 0) : r.consumed > t.consumed;
						(n === "move" || a) && (C(), t = r);
					}
				}
				y().layout.push({
					kind: "items",
					chunk: t.chunk
				}), w(t.chunk), v += t.height, o += t.consumed, t.consumed === 0 && (o += 1), t.chunk.growth > 0 && (y().growth = t.chunk.growth);
				let n = t.chunk.indexes?.at(-1) ?? t.chunk.unplaceable?.index;
				(o < i.length || t.chunk.unplaceable || t.chunk.growth > 0 || n !== void 0 && r[n]?.breakAfter) && C();
			}
			continue;
		}
		if (i.kind === "flowingColumns") {
			T(i);
			continue;
		}
		let a = (i.columns ?? []).map((e) => ({
			id: String(e?.id ?? ""),
			indexes: (e?.indexes ?? []).filter((e) => Number.isInteger(e) && e >= 0 && e < t.length),
			cursor: 0
		})).filter((e) => e.id && e.indexes.length);
		if (a.length) for (; a.some((e) => e.cursor < e.indexes.length);) {
			b() - v <= 0 && Nt(y()) && C(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && Nt(y()) && C();
			let e = b() - v, t = a.map((t) => kt(g, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (p && (p.freshPageAttempts += 1), kt(g, e.indexes, e.cursor, x, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (Nt(y()) && a.some((e, n) => {
				let r = Mt(g, e.indexes, e.cursor, t[n], x);
				return r === "no" ? !1 : r === "move" || o()[n].consumed > t[n].consumed;
			}) && (C(), t = o()), !t.some((e) => e.consumed > 0)) {
				let e = a.find((e) => e.cursor < e.indexes.length);
				throw TypeError(`[uhuu-components] Flow.Columns made no pagination progress${e ? ` in column "${e.id}"` : ""}.`);
			}
			let s = a.map((e, n) => ({
				id: e.id,
				chunk: t[n].chunk
			}));
			y().layout.push({
				kind: "columns",
				id: String(i.id ?? "columns"),
				columns: s
			});
			for (let { chunk: e } of s) w(e);
			let c = Math.max(0, ...t.map((e) => e.height));
			v += c, a.forEach((e, n) => {
				e.cursor += t[n].consumed;
			});
			let l = a.some((e) => e.cursor < e.indexes.length), u = t.some((e) => {
				let t = e.chunk.indexes?.at(-1) ?? e.chunk.unplaceable?.index;
				return t !== void 0 && r[t]?.breakAfter;
			}), d = t.some((e) => !!e.chunk.unplaceable);
			(l || u || d) && C();
		}
	}
	let E = _.filter(Nt);
	return E.length ? (p && (p.pages = E.length), E) : (p && (p.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-plan.ts
var Ft = Ct, It = Pt, Lt = ":scope > [data-uhuu-flow-layout-node=\"columns\"], :scope > [data-uhuu-flow-layout-node=\"flowingColumns\"]";
function Rt(e) {
	return Number.parseFloat(e || "0") || 0;
}
function zt(e, t) {
	let n = e.dataset.uhuuFlowId ?? "", r = (e) => {
		let t = window.getComputedStyle(e);
		return Rt(t.paddingTop) + Rt(t.paddingBottom) + Rt(t.borderTopWidth) + Rt(t.borderBottomWidth);
	};
	for (let i of Array.from(e.querySelectorAll(Lt))) {
		let e = window.getComputedStyle(i), a = Rt(e.marginTop) + Rt(e.marginBottom), o = i.dataset.uhuuFlowLayoutId ?? "";
		if (r(i) > .01 || a > .01) throw TypeError(`[uhuu-components] Flow.Columns "${n}" column group "${o}" has vertical margin, padding or borders (${Math.round(r(i) + a)}px), which measurement cannot see; put vertical spacing on items with getColumnItemProps.`);
		if (i.dataset.uhuuFlowLayoutNode === "flowingColumns") {
			let e = Array.from(i.querySelectorAll(":scope > [data-uhuu-flow-column]")).map((e) => e.getBoundingClientRect().width / t);
			if (e.some((t) => Math.abs(t - e[0]) > .5)) throw TypeError(`[uhuu-components] Flow.Columns "${n}" flowing column group "${o}" has columns of different widths (${e.map((e) => Math.round(e)).join(", ")}px): its items are measured in the first column and placed in any, so its columns need one width.`);
		}
		let s = [];
		for (let e of Array.from(i.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let i = window.getComputedStyle(e), a = Rt(i.marginTop) + Rt(i.marginBottom);
			if (r(e) > .01 || a > .01 || Rt(i.rowGap) > .01 || Rt(i.minHeight) > .01 || i.maxHeight !== "none") {
				let t = r(e) > .01 ? "padding or borders" : a > .01 ? "vertical margin" : Rt(i.rowGap) > .01 ? "row-gap" : Rt(i.minHeight) > .01 ? "min-height" : "max-height";
				throw TypeError(`[uhuu-components] Flow.Columns "${n}" column "${e.dataset.uhuuFlowColumn ?? ""}" in group "${o}" has ${t}, which measurement cannot see; put vertical spacing on items with getColumnItemProps.`);
			}
			let c = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + qe(n, t), 0);
			s.push(c);
		}
		let c = Math.max(0, ...s);
		if (qe(i, t) > c + 1) throw TypeError(`[uhuu-components] Flow.Columns "${n}" column group "${o}" is ${Math.round(qe(i, t) - c)}px taller than its columns' items: a fixed height or wrapping on the group or a column adds space measurement cannot see. Let the group take its columns' height.`);
	}
}
function Bt(e, t, n) {
	let r = e.getBoundingClientRect();
	return n !== void 0 && r.height > 0 && r.bottom > n + .5 ? {
		height: Math.max(0, n - r.top) / t,
		overflow: (r.bottom - n) / t
	} : {
		height: r.height ? r.height / t : e.clientHeight,
		overflow: 0
	};
}
function Vt(e) {
	return e.closest(".uhuu-page-sheet")?.getBoundingClientRect().bottom;
}
function Ht(e, t, n) {
	let r = e.dataset.uhuuFlowItemCount;
	if (r === void 0) return;
	let i = Number.parseInt(r, 10);
	Number.isInteger(i) && i !== t.length && n.onUnmarkedItems?.(t.length, i);
}
var Ut = (e) => e === void 0 ? void 0 : Math.round(e * 100) / 100, Wt = "[data-uhuu-flow-text]", Gt = (e) => e ? {
	lines: e.lines.map(({ top: e, bottom: t, start: n, hyphen: r }) => r ? [
		Ut(e),
		Ut(t),
		n,
		1
	] : [
		Ut(e),
		Ut(t),
		n
	]),
	end: e.end,
	justify: e.justify
} : null;
function Kt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return qt(e, t, n);
	let i = it(t);
	if (Ht(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = at(e, t, i);
	a && n.onUnstackedItem?.(a);
	let o = Ke(e), { height: s, overflow: c } = Bt(e, o, n.clipBottom);
	c > 0 && n.onAreaOverflow?.(c);
	let l = Number.isFinite(s) && s > 0, u = n.breakReserve && n.breakReserve > 0 ? n.breakReserve : void 0, d = t.dataset.uhuuFlowAsChild === "true" ? rt(e, t, o) : void 0, f = i.map((e) => d?.get(e) ?? qe(e, o)), p = i.map(Je), m = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), h = i.map($e), g = et(i), _ = tt(i), v = nt(t, o, d), y = l ? n.continuationHeight : void 0, b = [], x = l ? s : f.reduce((e, t) => e + t, 0) + Object.values(v).reduce((e, t) => e + t, 0), S = !!t.querySelector(Wt), C = /* @__PURE__ */ new Map(), w = S ? Array(i.length) : void 0;
	return w && i.forEach((e, t) => {
		e.querySelector(Wt) && Object.defineProperty(w, t, {
			enumerable: !0,
			get: () => (C.has(t) || C.set(t, dt(e, f[t], o, n.onIssue)), C.get(t))
		});
	}), l || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Ft({
			heights: f,
			keys: m,
			metas: p,
			availableHeight: x,
			continuationHeight: y,
			headerGroupKeys: h,
			headerGroupHeights: v,
			headerGroupRepeats: g,
			...Object.keys(_).length ? { headerGroupGrows: _ } : {},
			onUnplaceableItem: (e) => {
				b.push(e), n.onUnplaceableItem?.(e);
			},
			...S ? { lines: w } : {},
			...u ? { breakReserve: u } : {}
		}),
		signature: ft(JSON.stringify({
			version: S ? 4 : 2,
			flowId: r,
			availableHeight: Math.round(x * 100) / 100,
			continuationHeight: Ut(y),
			...u ? { breakReserve: Ut(u) } : {},
			heights: f.map((e) => Math.round(e * 100) / 100),
			keys: m,
			metas: p,
			headerGroupKeys: h,
			headerGroupHeights: v,
			...Object.keys(_).length ? { headerGroupGrows: _ } : {},
			headerGroupRepeats: g,
			unplaceableItems: b,
			...S ? { lines: [...C].sort(([e], [t]) => e - t).map(([e, t]) => [e, Gt(t)]) } : {}
		})),
		unplaceableItems: b
	};
}
function qt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = it(t);
	if (Ht(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = Ke(e);
	zt(t, a), t.querySelector(Wt) && n.onIssue?.("flow-text-in-columns"), n.breakReserve && n.onIssue?.("break-reserve-in-columns");
	let { height: o, overflow: s } = Bt(e, a, n.clipBottom);
	s > 0 && n.onAreaOverflow?.(s);
	let c = Number.isFinite(o) && o > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0), m = t.dataset.uhuuFlowAsChild === "true" ? rt(e, t, a) : void 0;
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = m?.get(e) ?? qe(e, a), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = Je(e), p[t] = $e(e));
	}
	let h = Array.from(t.children).flatMap((e) => {
		if (!(e instanceof HTMLElement)) return [];
		if (e.dataset.uhuuFlowLayoutNode === "item") {
			let t = e.matches("[data-uhuu-flow-item=\"true\"]") ? e : e.querySelector("[data-uhuu-flow-item=\"true\"]"), n = Number.parseInt(t?.dataset.uhuuFlowIndex ?? "-1", 10);
			return Number.isInteger(n) && n >= 0 ? [{
				kind: "item",
				index: n
			}] : [];
		}
		let t = e.dataset.uhuuFlowLayoutNode;
		if (t !== "columns" && t !== "flowingColumns") return [];
		let n = Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]")).flatMap((e) => {
			let t = e.dataset.uhuuFlowColumn;
			return t ? [{
				id: t,
				indexes: Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]")).map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10)).filter((e) => Number.isInteger(e) && e >= 0)
			}] : [];
		});
		if (!n.length) return [];
		let r = e.dataset.uhuuFlowLayoutId || "columns";
		if (e.dataset.uhuuFlowLayoutNode === "flowingColumns") {
			let t = e.dataset.uhuuFlowColumnFill;
			return [{
				kind: "flowingColumns",
				id: r,
				indexes: n[0].indexes,
				columns: n.length,
				...t === "balance" || t === "auto" ? { columnFill: t } : {}
			}];
		}
		return [{
			kind: "columns",
			id: r,
			columns: n
		}];
	}), g = et(i), _ = tt(i), v = nt(t, a, m), y = c ? n.continuationHeight : void 0, b = {}, x = {};
	for (let e of Array.from(t.querySelectorAll(Lt))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			b[t] = {}, x[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				b[t][e] = nt(n, a), x[t][e] = et(r);
			}
		}
	}
	let S = [], C = c ? o : u.reduce((e, t) => e + t, 0) + Object.values(v).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: It({
			nodes: h,
			heights: u,
			keys: d,
			metas: f,
			availableHeight: C,
			continuationHeight: y,
			headerGroupKeys: p,
			headerGroupHeights: v,
			headerGroupRepeats: g,
			...Object.keys(_).length ? { headerGroupGrows: _ } : {},
			columnHeaderGroupHeights: b,
			columnHeaderGroupRepeats: x,
			onUnplaceableItem: (e) => {
				S.push(e), n.onUnplaceableItem?.(e);
			}
		}),
		signature: ft(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(C * 100) / 100,
			continuationHeight: Ut(y),
			nodes: h,
			heights: u.map((e) => Math.round(e * 100) / 100),
			keys: d,
			metas: f,
			headerGroupKeys: p,
			headerGroupHeights: v,
			headerGroupRepeats: g,
			...Object.keys(_).length ? { headerGroupGrows: _ } : {},
			columnHeaderGroupHeights: b,
			columnHeaderGroupRepeats: x,
			unplaceableItems: S
		})),
		unplaceableItems: S
	};
}
//#endregion
//#region src/uhuu/pagination-static/flow-area.tsx
var Jt = {
	"multiple-flow-text": "an item holds more than one Flow.Text, so it is not split. Give each item one FlowText.",
	"inline-flow-text": "a Flow.Text is not a block element (as=\"span\"?), so its lines are not its own and its item is not split. Keep the default `as=\"div\"` or another block element.",
	"rewrapping-text-wrap": "a Flow.Text has text-wrap: balance or pretty, which re-flows each piece of a split item, so a piece may not match its planned lines. Use text-wrap: wrap on split text.",
	"flow-text-in-columns": "Flow.Columns does not split Flow.Text items; they render whole.",
	"break-reserve-in-columns": "Flow.Columns does not keep breakReserve; its pages use their full region."
};
function Yt(e, t) {
	for (let n of Array.from(e.querySelectorAll(`[${Be}] [data-uhuu-flow="true"]`))) if (n.dataset.uhuuFlowId === t) return n.closest("[data-uhuu-flow-area]");
	return null;
}
function Xt({ children: t, className: n = "", style: r, onFlowMeasurement: i, measureContinuation: a = !1, breakReserve: o }) {
	let s = e.useContext(Ve), c = e.useRef(null), l = e.useId(), u = e.useRef(null), d = e.useRef(s), f = e.useRef(i), p = Te(), m = e.useRef(p), h = e.useRef(!1), g = st(o), _ = e.useRef(""), y = e.useRef(!1), b = e.useRef(!1), x = e.useRef(/* @__PURE__ */ new Set()), S = e.useRef(""), C = e.useRef(""), w = e.useRef(""), T = e.useRef(/* @__PURE__ */ new Set()), E = e.useRef(!1), D = e.useRef(""), O = e.useRef("");
	ce(() => {
		f.current = i, m.current = p;
	}, [i, p]), ce(() => {
		o !== void 0 && g === void 0 && !E.current && (E.current = !0, console.warn(`[uhuu-components] Flow.Area breakReserve ${JSON.stringify(o)} is not a CSS length with an absolute unit ("20mm", "12px") or a number of px, so no room is kept at a page break.`));
	}, [o, g]);
	let k = e.useRef("");
	return ce(() => {
		if (!p || s?.mode !== "visible" || !c.current) return;
		let e = c.current, t = e.querySelector("[data-uhuu-flow=\"true\"]"), n = t?.dataset.uhuuFlowId ?? "", r = s.chunksByFlowId?.[n]?.[s.pageIndex]?.growth ?? 0;
		if (!t || !(r > 0)) return;
		let i = e.getBoundingClientRect().bottom, a = Array.from(t.querySelectorAll("[data-uhuu-flow-item=\"true\"]")).reduce((e, t) => Math.max(e, t.getBoundingClientRect().bottom - i), 0), o = `${s.pageKey ?? ""}:${n}`;
		a <= 1 || k.current === o || (k.current = o, console.warn(`[uhuu-components] Flow.Area on page "${s.pageKey ?? ""}" (Flow.Items "${n}"): the sheet grew by ${Math.round(r)}px for an item with growSheet, but the area did not, so the item draws ${Math.round(a)}px past it. Add the growth to the area's height: style={{ height: 'calc(<height> + var(--uhuu-sheet-growth, 0px))' }}.`));
	}, [s, p]), e.useEffect(() => () => {
		d.current?.unregisterMeasurement?.(u.current ?? "", l);
	}, [l]), ce(() => {
		if (a) return s?.requestContinuation?.();
	}, [s, a]), ce(() => {
		if (d.current = s, s?.mode !== "measure" || !s.registerMeasurement || !c.current) return;
		let e = c.current, t = e.closest("[data-uhuu-flow-measurement]") ?? e, n = a && !!s.requestContinuation, r = null, i, o = null, p = null, v = null;
		_.current = "";
		let E = (t = !0) => {
			t && !i && (i = k?.begin()), r === null && (r = Ue(() => {
				r = null;
				try {
					P();
				} catch (t) {
					_.current = "", k?.fail(t), e.setAttribute("data-uhuu-flow-error", String(t));
					let n = e.querySelector("[data-uhuu-flow=\"true\"]")?.dataset.uhuuFlowId ?? "";
					Se(`flow-measure:${s.pageKey ?? ""}:${n}:${String(t)}`, `[uhuu-components] Flow.Items "${n}" on page "${s.pageKey ?? ""}": measurement failed, so pagination reports an error:`, t);
				} finally {
					i?.(), i = void 0;
				}
			}));
		}, k = s.readiness?.registerArea(s.pageKey ?? "", { remeasure: () => E() }), A = /* @__PURE__ */ new Set(), j = () => {
			if (o) {
				for (let t of Array.from(A)) e.contains(t) || (o.unobserve(t), A.delete(t));
				e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]").forEach((e) => {
					A.has(e) || (A.add(e), o?.observe(e));
				});
			}
		}, M = (t) => {
			t ? e.setAttribute("data-uhuu-flow-error", t) : e.removeAttribute("data-uhuu-flow-error");
		}, N = (e) => {
			let n = Yt(t, e);
			if (n !== p && (p && o?.unobserve(p), n && o?.observe(n), p = n), !n) return { failure: "missing-continuation-flow" };
			let { height: r } = Bt(n, Ke(n), Vt(n));
			return Number.isFinite(r) && r > 0 ? { height: r } : { failure: "unmeasurable-flow-area" };
		};
		function P() {
			j();
			let r = e.querySelectorAll("[data-uhuu-flow=\"true\"]");
			if (r.length > 1 && !y.current) {
				y.current = !0;
				let e = Array.from(r, (e) => `"${e.dataset.uhuuFlowId ?? ""}"`).join(", ");
				console.warn(`[uhuu-components] Flow.Area on page "${s?.pageKey ?? ""}" holds ${r.length} Flow.Items (${e}), so pagination reports the error "multiple-flows-in-area". Give each Flow its own FlowArea.`);
			}
			let i = r[0], a = i?.dataset.uhuuFlowId;
			if (u.current && u.current !== a && (s?.unregisterMeasurement?.(u.current, l), u.current = null, _.current = ""), !i) {
				!h.current && v === null && (v = setTimeout(() => {
					v = null, !(h.current || !e.isConnected || e.querySelector("[data-uhuu-flow=\"true\"]")) && (h.current = !0, console.warn(`[uhuu-components] Flow.Area on page "${s?.pageKey ?? ""}" renders no Flow.Items, so data-uhuu-pagination stays "measuring". Render one Flow in the area (an empty Flow is one page).`));
				}, He)), M("missing-flow"), k?.clear();
				return;
			}
			v !== null && (clearTimeout(v), v = null);
			let o = a ? Array.from(t.querySelectorAll("[data-uhuu-flow=\"true\"]")).filter((e) => e.dataset.uhuuFlowId === a && !e.closest("[data-uhuu-flow-continuation-copy]")).length : 0, c = a ? o > 1 ? "duplicate-flow-id" : null : "missing-flow-id";
			if (c && S.current !== `${c}:${a}` && (S.current = `${c}:${a}`, console.warn(`[uhuu-components] Flow.Items ${a ? `id "${a}" is used by more than one Flow` : "has no id"} on page "${s?.pageKey ?? ""}". Give each Flow on a page a stable, unique id.`)), !a) {
				_.current = "", M("missing-flow-id"), k?.fail("missing-flow-id");
				return;
			}
			let d = c ?? (r.length > 1 ? "multiple-flows-in-area" : null), p = n ? N(a) : void 0, E = Kt(e, i, {
				continuationHeight: p?.height,
				breakReserve: g,
				clipBottom: Vt(e),
				onAreaOverflow: (e) => {
					D.current !== a && (D.current = a, console.warn(`[uhuu-components] Flow.Area on page "${s?.pageKey ?? ""}" (Flow.Items "${a}") extends ${Math.round(e)}px below its sheet, where nothing prints: only the part on the sheet is planned. Give the area a height within the page; a page whose height grows with its content (grid-template-rows: none, an unbounded flex item) cannot bound a flow.`));
				},
				onUnstackedItem: (e) => {
					d ??= "unstacked-flow-items", O.current !== a && (O.current = a, console.warn(`[uhuu-components] Flow.Items "${a}" on page "${s?.pageKey ?? ""}": item "${e.dataset.uhuuFlowKey ?? ""}" is not laid out below the item before it, so the flow cannot be paginated. Items stack down their FlowArea: no multi-column container (column-width, columns), flex row, grid or float around them.`));
				},
				onUnmarkedItems: (e, t) => {
					d ??= "unmarked-flow-item", w.current !== a && (w.current = a, console.warn(`[uhuu-components] Flow.Items "${a}" asChild: ${t - e} of ${t} items carry no flow attributes, so the flow cannot be paginated. renderItem must return a DOM element, or a component that passes the props it receives on to its root DOM element.`));
				},
				onZeroHeight: () => {
					i.getClientRects().length && (d = "unmeasurable-flow-area", !b.current && (b.current = !0, console.warn(`[uhuu-components] Flow.Area on page "${s?.pageKey ?? ""}" (Flow.Items "${a}") has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0.`)));
				},
				onIssue: (e) => {
					if (e === "unsupported-content" || !m.current) return;
					let t = `${a}:${e}`;
					T.current.has(t) || (T.current.add(t), console.warn(`[uhuu-components] Flow.Items "${a}": ${Jt[e]}`));
				},
				onUnplaceableItem: (e) => {
					x.current.has(e.key) || (x.current.add(e.key), console.warn(`[uhuu-components] Flow.Items "${a}" on page "${s?.pageKey ?? ""}": item "${e.key}" cannot fit in its FlowArea (${Math.round(e.requiredHeight)}px required > ${Math.round(e.availableHeight)}px available). It prints on a page of its own, scaled to fit. Put its long text in a Flow.Text, split the item, or reduce its height.`));
				}
			});
			if (!E) return;
			let A = E.chunks.length > 1 ? p?.failure : void 0;
			if (A && C.current !== `${A}:${a}` && (C.current = `${A}:${a}`, console.warn(`[uhuu-components] Flow.Area measureContinuation: page "${s?.pageKey ?? ""}" ` + (A === "missing-continuation-flow" ? `renders no Flow.Items "${a}" on a continuation sheet, so its continuation pages would lose its items. Render the FlowArea and its Flow on every sheet.` : `lays the FlowArea of "${a}" out at zero height on a continuation sheet. Give it a measurable height there too.`))), A === "missing-continuation-flow") M(A), k?.clear();
			else if (d ??= A ?? null, k?.measured(E, d), M(d), E.signature !== _.current) {
				s?.registerMeasurement?.(E, l), _.current = E.signature, u.current = E.flowId;
				try {
					f.current?.(E);
				} catch (e) {
					console.error("[uhuu-components] FlowArea onFlowMeasurement threw:", e);
				}
			}
		}
		let F = Re(t, {
			begin: () => k?.begin() ?? (() => {}),
			onReady: () => E()
		});
		typeof ResizeObserver < "u" && (o = new ResizeObserver(() => E()), o.observe(e)), j(), E();
		let I = new MutationObserver((t) => {
			F.sync(), E(t.some((t) => e.contains(t.target)));
		});
		return I.observe(t, {
			attributes: !0,
			attributeFilter: [
				"class",
				"style",
				"src",
				"srcset",
				"sizes",
				"data-uhuu-flow",
				"data-uhuu-flow-id",
				"data-uhuu-flow-item",
				"data-uhuu-flow-key",
				"data-uhuu-flow-break-before",
				"data-uhuu-flow-break-after",
				"data-uhuu-flow-keep-with-next",
				"data-uhuu-flow-avoid-break-inside",
				"data-uhuu-flow-group-key",
				"data-uhuu-flow-header-group-key",
				"data-uhuu-flow-header-repeat",
				"data-uhuu-flow-group-header",
				"data-uhuu-flow-orphans",
				"data-uhuu-flow-widows",
				"data-uhuu-flow-grow-sheet",
				"data-uhuu-flow-header-grow-sheet",
				"data-uhuu-flow-text",
				"data-uhuu-flow-text-unsplittable"
			],
			characterData: !0,
			childList: !0,
			subtree: !0
		}), () => {
			r !== null && (r(), r = null, i?.()), v !== null && clearTimeout(v), o?.disconnect(), I.disconnect(), F.disconnect(), k?.dispose();
		};
	}, [
		s,
		l,
		a,
		g
	]), /* @__PURE__ */ v("div", {
		ref: c,
		className: n,
		style: r,
		"data-uhuu-flow-area": "true",
		children: t
	});
}
function Zt({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s, measureContinuation: c, breakReserve: l }) {
	return /* @__PURE__ */ y("div", {
		className: `uhuu-flow-page ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ v(Xt, {
				className: `uhuu-flow-page-area ${a}`,
				style: o,
				onFlowMeasurement: s,
				measureContinuation: c,
				breakReserve: l,
				children: e
			}),
			n
		]
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow-text-slice.js
var Qt = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.abbr.b.bdi.bdo.br.cite.code.data.del.dfn.em.i.ins.kbd.mark.s.samp.small.span.strong.sub.sup.time.u.var.wbr".split(".")), $t = /* @__PURE__ */ new Set(["br"]);
function en(e) {
	return typeof e == "string" ? e : typeof e == "function" ? e.displayName || e.name || "Component" : e && typeof e == "object" && e.displayName || "Component";
}
function tn(t) {
	let n = "", r = null, i = [], a = (t) => {
		if (!(r || t == null || typeof t == "boolean")) {
			if (typeof t == "string" || typeof t == "number" || typeof t == "bigint") n += String(t);
			else if (Array.isArray(t)) t.forEach(a);
			else if (e.isValidElement(t)) {
				let o = t.props ?? {};
				if (t.type === e.Fragment) {
					a(o.children);
					return;
				}
				if (typeof t.type == "string") {
					if (!Qt.has(t.type) || o.dangerouslySetInnerHTML) {
						r = {
							reason: "block-content",
							name: t.type
						};
						return;
					}
					$t.has(t.type) && i.push(n.length), a(o.children);
					return;
				}
				r = {
					reason: "component-content",
					name: en(t.type)
				};
			} else r = {
				reason: "component-content",
				name: typeof t
			};
		}
	};
	return a(t), {
		text: n,
		breaks: i,
		problem: r
	};
}
var nn = (e) => e === " " || e === "\n" || e === "	" || e === "\r" || e === "\f", rn = "­";
function an(t, { text: n, breaks: r = [] }, { from: i, to: a, part: o, parts: s, hyphens: c = [] }) {
	let l = o === 0, u = o === s - 1, d = l ? 0 : Math.max(0, i), f = u ? n.length : Math.min(n.length, a), p = (e) => n[e - 1] === "\n" || r.includes(e);
	if (!l) {
		let e = d;
		for (; e < f && nn(n[e]);) e += 1;
		let t = n.slice(d, e).lastIndexOf("\n");
		t >= 0 ? d += t + 1 : p(d) || (d = e);
	}
	let m = !1, h = !1;
	if (!u) {
		if (c.includes(f) && !r.includes(f)) n[f - 1] === rn && --f, m = !0;
		else {
			let e = f;
			for (; e > d && nn(n[e - 1]);) --e;
			(r.includes(f) || n.slice(e, f).includes("\n")) && (h = !0), f = e;
		}
	}
	let g = c.filter((e) => e > d && e < f && n[e - 1] !== rn), _ = 0, v = !1, y = (t) => {
		if (t == null || typeof t == "boolean") return null;
		if (typeof t == "string" || typeof t == "number" || typeof t == "bigint") {
			let e = String(t), n = _, r = _ + e.length;
			_ = r;
			let i = Math.max(n, d), a = Math.min(r, f);
			if (!(i < a)) return null;
			let o = "", s = i;
			for (let t of g) t <= i || t > a || (o += e.slice(s - n, t - n) + rn, s = t);
			return o += e.slice(s - n, a - n), m && !v && f <= r && (o += "-", v = !0), o;
		}
		if (Array.isArray(t)) return t.map(y);
		if (!e.isValidElement(t)) return null;
		let n = _;
		if (typeof t.type == "string" && $t.has(t.type)) {
			let e = (n > d || l) && (n < f || u);
			return !e && n >= f && !u && (h = !0), e ? t : null;
		}
		let r = t.props ?? {}, i = y(r.children), a = _;
		if (a === n) {
			if (!(d <= n && n < f || u && n === f)) return null;
		} else if (a <= d || n >= f) return null;
		return r.children === void 0 ? t : e.cloneElement(t, void 0, ...Array.isArray(i) ? i : [i]);
	}, b = y(t);
	return {
		children: Array.isArray(b) ? b : [b],
		justifyLast: !u && !h,
		manualHyphens: c.some((e) => e > i && e <= a)
	};
}
//#endregion
//#region src/uhuu/pagination-static/flow-text.tsx
var on = e.createContext(null);
function sn(e) {
	let t = e.getBoundingClientRect();
	if (!(t.height > 0)) return;
	let n = window.getComputedStyle(e), r = (e) => Number.parseFloat(n.getPropertyValue(e) || "0") || 0;
	return {
		height: t.height / Ke(e) - r("padding-top") - r("padding-bottom") - r("border-top-width") - r("border-bottom-width"),
		lineHeight: r("line-height") || r("font-size") * 1.2 || 16
	};
}
function cn({ children: t, as: n = "div", className: r, style: i, ...a }) {
	let o = e.useContext(on), s = Te(), c = e.useRef(null), l = e.useMemo(() => tn(t), [t]), { text: u, problem: d } = l, f = o && !d ? an(t, l, o) : null, p = f ? o?.textHeight : void 0;
	e.useEffect(() => {
		d && s && be(`flow-text-content:${d.reason}:${d.name}`, `[uhuu-components] Flow.Text holds ${d.reason === "block-content" ? `a <${d.name}>` : `<${d.name}>`}: only text and inline text elements (span, strong, em, b, i, a, small, sub, sup, br) can split between lines, so its item is not split. Put block content in the item outside the FlowText, and an Editable around the FlowText rather than inside it.`);
	}, [d, s]), ce(() => {
		let e = c.current;
		if (p === void 0 || !e || !s) return;
		let t = sn(e);
		if (!t || t.height <= p + Math.max(2, t.lineHeight / 2)) return;
		let n = t.height;
		be(`flow-text-rewrap:${u.slice(0, 40)}`, `[uhuu-components] Flow.Text "${u.slice(0, 40)}…": a piece lays out ${Math.round(n - p)}px taller than the lines it was planned with, so it re-wrapped. A continuation must give the FlowText the width it measured with (keep a label cell, empty), and ::first-line styles or text-wrap: balance | pretty re-flow a slice.`);
	});
	let m = n, h = f && o ? {
		...i,
		...o.part > 0 ? { textIndent: 0 } : {},
		...o.justify && f.justifyLast ? { textAlignLast: "justify" } : {},
		...f.manualHyphens ? {
			hyphens: "manual",
			WebkitHyphens: "manual"
		} : {}
	} : i, g = {
		...a,
		ref: c,
		className: r,
		style: h,
		"data-uhuu-flow-text": "true",
		"data-uhuu-flow-text-unsplittable": d?.reason
	};
	return f ? e.createElement(m, g, ...f.children) : e.createElement(m, g, t);
}
//#endregion
//#region src/uhuu/pagination-static/flow-render.tsx
function ln(e) {
	let t = e.availableHeight - e.headerHeight;
	if (!(e.height > 0) || !Number.isFinite(t)) return;
	let n = Math.min(1, Math.max(t, 1) / e.height);
	return n < 1 ? {
		transform: `scale(${n})`,
		transformOrigin: "top left"
	} : void 0;
}
function un(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function dn(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function fn(e) {
	if (typeof e == "string") return e ? {
		key: e,
		repeatHeader: !0
	} : void 0;
	if (e?.key) return {
		key: e.key,
		repeatHeader: e.repeatHeader !== !1,
		...e.growSheet ? { growSheet: !0 } : {}
	};
}
function pn(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function mn(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
function hn(t) {
	return t == null || typeof t == "boolean" ? "nothing" : Array.isArray(t) ? "several nodes" : e.isValidElement(t) ? "a fragment" : "text";
}
function gn(t, n, r) {
	if (e.isValidElement(t) && t.type !== e.Fragment) {
		let i = t.props, a = [n.className, typeof i.className == "string" ? i.className : void 0].filter(Boolean).join(" ") || void 0, o = r.baseStyle || i.style || r.forcedStyle ? {
			...r.baseStyle,
			...i.style,
			...r.forcedStyle
		} : void 0;
		return e.cloneElement(t, {
			...n,
			className: a,
			style: o
		});
	}
	return be(`as-child:${r.flowId}:${r.source}`, `[uhuu-components] Flow.Items "${r.flowId}" asChild: ${r.source} returned ${hn(t)}. asChild needs exactly one element to carry the flow's attributes, so it renders in a wrapper <div> instead.`), null;
}
function _n(e, t, n, r) {
	return r.asChild && gn(e, {
		className: t,
		...n
	}, r) || /* @__PURE__ */ v("div", {
		className: t,
		style: {
			display: "flow-root",
			...r.baseStyle,
			...r.forcedStyle
		},
		...n,
		children: e
	});
}
function vn(e, t) {
	return {
		"data-uhuu-flow-break-before": e.breakBefore ? "true" : void 0,
		"data-uhuu-flow-break-after": e.breakAfter ? "true" : void 0,
		"data-uhuu-flow-keep-with-next": Qe(e.keepWithNext),
		"data-uhuu-flow-avoid-break-inside": e.avoidBreakInside ? "true" : void 0,
		"data-uhuu-flow-group-key": e.groupKey,
		"data-uhuu-flow-header-group-key": t?.key,
		"data-uhuu-flow-header-repeat": t ? t.repeatHeader === !1 ? "false" : "true" : void 0
	};
}
function yn(e, t, n, r, i) {
	let a = n?.(e, t) ?? un(e);
	return dn(a ? r?.[a] : void 0, i?.(e, t));
}
function bn(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
function xn(t, n, r, i, a) {
	let o = Te();
	e.useEffect(() => {
		o && i && Object.keys(i).length && r.length && (r.some((e, t) => !!(a?.(e, t) ?? un(e))) || be(`meta-defaults:${t}:${n}:${Object.keys(i).join("|")}`, `[uhuu-components] Static.${t} "${n}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		r,
		i,
		a,
		o
	]);
}
function Sn(e, t) {
	let { flowId: n, asChild: r, renderItem: i, renderGroupHeader: a, groupHeaderClassName: o } = e, { item: s, itemIndex: c, fragment: l, group: u, plannedGroupHeaders: d } = t, f = !!(u && d?.get(c)?.has(u.key));
	return {
		header: u && a && (f || !d && l.isFirstInGroupOnPage && (l.isFirstInGroup || u.repeatHeader !== !1)) && u && a ? _n(a(u, l), typeof o == "function" ? o(u, l) : o, {
			"data-uhuu-flow-group-header": "true",
			"data-uhuu-flow-header-group-key": u.key
		}, {
			flowId: n,
			source: "renderGroupHeader",
			asChild: r
		}) : null,
		element: _n(i(s, c, l), t.className, t.attributes, {
			flowId: n,
			source: "renderItem",
			asChild: r,
			baseStyle: t.baseStyle,
			forcedStyle: t.forcedStyle
		})
	};
}
function Cn(e) {
	return e.part === 0 ? "first" : e.part === e.parts - 1 ? "last" : "middle";
}
function wn(e, t) {
	return {
		split: {
			part: e.part,
			parts: e.parts,
			from: e.from,
			to: e.to
		},
		...e.part > 0 && t.isFirstInGroupOnPage ? { isGroupContinuation: !0 } : {}
	};
}
function Tn(e) {
	return e == null || e === !1 ? e : /* @__PURE__ */ v(on.Provider, {
		value: null,
		children: e
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow.tsx
function En({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p, asChild: m = !1, as: h = "div" }) {
	let g = e.useContext(Ve), _ = Me() === "screen", b = e.useContext(on), x = h, S = g?.chunksByFlowId?.[t], C = g?.mode === "visible" && S ? S[g.pageIndex] : void 0, w = g?.mode === "visible" ? g.pageIndex : 0, T = g?.mode === "visible" && S ? S.length : 1, E = C?.unplaceable, D = E ? p?.(E, {
		flowId: t,
		pageIndex: w,
		pageCount: T
	}) : void 0, O = !!(E && D == null), k = g?.copy === "continuation" ? [] : g?.mode === "visible" && S ? C?.indexes ?? [] : g?.mode === "visible" && g.pageIndex > 0 ? [] : n.map((e, t) => t), A = (O ? [.../* @__PURE__ */ new Set([...k, E.index])].sort((e, t) => e - t) : k).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), j = n.map((e, t) => fn(c?.(e, t))), M = j.map((e) => e?.key), N = pn(A), P = l ? mn(C?.groupHeaders) : void 0;
	xn("Flow", t, n, o, s);
	let F = {
		flowId: t,
		asChild: m,
		renderItem: i,
		renderGroupHeader: l,
		groupHeaderClassName: f
	};
	return /* @__PURE__ */ y(x, {
		className: u,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-as-child": m ? "true" : void 0,
		"data-uhuu-flow-item-count": m && g?.mode !== "visible" ? A.length : void 0,
		children: [E && D != null && (m && gn(D, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": E.key
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ v("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": E.key,
			children: D
		})), A.map((i) => {
			let c = n[i];
			if (c === void 0) return null;
			let l = r(c, i), u = j[i], f = St({
				itemIndex: i,
				fragmentIndexes: A,
				fragmentIndex: N.get(i) ?? -1,
				groupKeys: M,
				pageIndex: w,
				pageCount: T,
				itemCount: n.length
			}), p = C?.splits?.[i], m = {
				...f,
				flowId: t,
				itemKey: l,
				item: c,
				...p ? wn(p, f) : {}
			}, h = yn(c, i, s, o, a), g = O && i === E?.index, { header: x, element: S } = Sn(F, {
				item: c,
				itemIndex: i,
				fragment: m,
				group: u,
				plannedGroupHeaders: P,
				className: bn(d, c, i),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-key": String(l),
					"data-uhuu-flow-index": i,
					...vn(h, u),
					"data-uhuu-flow-unplaceable": g ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": g ? E.key : void 0,
					"data-uhuu-flow-orphans": Xe(h.orphans),
					"data-uhuu-flow-widows": Xe(h.widows),
					"data-uhuu-flow-split": p ? Cn(p) : void 0,
					"data-uhuu-flow-grow-sheet": _ && h.growSheet ? "true" : void 0,
					"data-uhuu-flow-header-grow-sheet": _ && u?.growSheet ? "true" : void 0
				},
				forcedStyle: g ? ln(E) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [b ? Tn(x) : x, /* @__PURE__ */ v(on.Provider, {
				value: p ?? null,
				children: S
			})] }, l);
		})]
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow-columns.tsx
function Dn({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: g, getColumnItemProps: _, asChild: b = !1, as: x = "div" }) {
	jt({
		nodes: r,
		itemCount: n.length,
		flowId: t
	});
	let S = e.useContext(Ve), C = e.useContext(on), w = x, T = S?.copy === "continuation", E = S?.chunksByFlowId?.[t], D = S?.mode === "visible" && E ? E[S.pageIndex] : void 0, O = S?.mode !== "visible", k = S?.mode === "visible" ? S.pageIndex : 0, A = S?.mode === "visible" && E ? E.length : 1, j = e.useMemo(() => n.map((e, t) => fn(l?.(e, t))), [n, l]), M = e.useMemo(() => j.map((e) => e?.key), [j]), N = { flowId: t };
	xn("FlowColumns", t, n, s, c);
	let { columnNodes: P, columnFills: F } = e.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		return {
			columnNodes: r.flatMap((t) => t.kind === "columns" ? [t] : t.kind === "flowingColumns" ? (e.set(t.id, t.columnFill ?? "balance"), [At(t)]) : []),
			columnFills: e
		};
	}, [r]), I = Me() === "screen", L = Te(), ee = D?.unplaceable, te = I && ee && n[ee.index] !== void 0 && yn(n[ee.index], ee.index, c, s, o).growSheet ? ee.key : void 0;
	e.useEffect(() => {
		L && te && be(`flow-columns-grow-sheet:${t}:${te}`, `[uhuu-components] Flow.Columns "${t}": item "${te}" has growSheet, which an item in a column group does not take; it is scaled to fit, as in print. Place it outside the column group.`);
	}, [
		L,
		t,
		te
	]);
	let R = e.useMemo(() => {
		if (I) {
			for (let e of P) for (let t of e.columns) for (let e of t.indexes) if (j[e]?.growSheet) return j[e].key;
		}
	}, [
		I,
		P,
		j
	]);
	e.useEffect(() => {
		L && R && be(`flow-columns-grow-group:${t}:${R}`, `[uhuu-components] Flow.Columns "${t}": group "${R}" has growSheet, which a group in a column group does not take; its items flow as in print. Place the group outside the column group.`);
	}, [
		L,
		t,
		R
	]);
	let z = {
		flowId: t,
		asChild: b,
		renderItem: a,
		renderGroupHeader: u,
		groupHeaderClassName: p
	}, B = (e, n) => {
		if (!e) return null;
		let r = m?.(e, {
			flowId: t,
			pageIndex: k,
			pageCount: A
		});
		return r == null ? n() : b && gn(r, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": e.key,
			"data-uhuu-flow-column-id": e.columnId
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ v("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": e.key,
			"data-uhuu-flow-column-id": e.columnId,
			children: r
		});
	}, ne = (r, a, l, d = !1, p) => {
		let m = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), h = pn(m), g = p ? pn(p) : void 0, _ = u ? mn(a?.groupHeaders) : void 0;
		return m.map((r) => {
			let u = n[r];
			if (u === void 0) return null;
			let v = i(u, r), b = j[r], x = h.get(r) ?? -1, S = g?.get(r) ?? -1, w = {
				...St({
					itemIndex: r,
					fragmentIndexes: m,
					fragmentIndex: x,
					groupKeys: M,
					pageIndex: k,
					pageCount: A,
					itemCount: n.length,
					previousSourceIndex: a?.previousSourceIndex ?? (S > 0 ? p?.[S - 1] : void 0)
				}),
				flowId: t,
				itemKey: v,
				item: u
			}, T = yn(u, r, c, s, o), E = l?.(r), D = a?.unplaceable?.index === r ? a.unplaceable : void 0, { header: O, element: N } = Sn(z, {
				item: u,
				itemIndex: r,
				fragment: w,
				group: b,
				plannedGroupHeaders: _,
				className: [bn(f, u, r), E?.className].filter(Boolean).join(" "),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-layout-node": d ? "item" : void 0,
					"data-uhuu-flow-key": String(v),
					"data-uhuu-flow-index": r,
					"data-uhuu-flow-unplaceable": D ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": D?.key,
					"data-uhuu-flow-column-id": D?.columnId,
					...vn(T, b),
					"data-uhuu-flow-grow-sheet": I && T.growSheet ? "true" : void 0,
					"data-uhuu-flow-header-grow-sheet": I && b?.growSheet ? "true" : void 0
				},
				baseStyle: E?.style,
				forcedStyle: D ? ln(D) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [C ? Tn(O) : O, C ? Tn(N) : N] }, v);
		});
	}, re = new Map(P.map((e) => [e.id, e])), V = T ? [] : O ? r : D?.layout ?? [];
	return /* @__PURE__ */ v(w, {
		className: d,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-layout": "columns",
		"data-uhuu-flow-as-child": b ? "true" : void 0,
		"data-uhuu-flow-item-count": b && O ? T ? 0 : n.length : void 0,
		children: V.map((t, n) => {
			if (t.kind === "item") return /* @__PURE__ */ v(e.Fragment, { children: ne([t.index], void 0, void 0, !0) }, `item:${t.index}:${n}`);
			if (t.kind === "items") return /* @__PURE__ */ y(e.Fragment, { children: [B(t.chunk.unplaceable, () => ne([t.chunk.unplaceable.index], t.chunk, void 0, !0)), ne(t.chunk.indexes, t.chunk, void 0, !0)] }, `items:${n}`);
			let r = re.get(t.id);
			if (!r) return null;
			let i = new Map(r.columns.map((e) => [e.id, e])), a = O ? r.columns.map((e) => ({ id: e.id })) : t.columns, o = h?.(r, N), s = F.get(r.id), c = s ? r.columns[0]?.indexes : void 0;
			return /* @__PURE__ */ v("div", {
				className: o?.className,
				style: {
					display: "flex",
					width: "100%",
					alignItems: "flex-start",
					...o?.style
				},
				"data-uhuu-flow-layout-node": s ? "flowingColumns" : "columns",
				"data-uhuu-flow-layout-id": r.id,
				"data-uhuu-flow-column-fill": s,
				children: a.map((e) => {
					let t = i.get(e.id);
					if (!t) return null;
					let n = g?.(r, t, N), a = e.chunk?.indexes ?? t.indexes;
					return /* @__PURE__ */ y("div", {
						className: n?.className,
						style: {
							minWidth: 0,
							flex: "1 1 0%",
							display: "flex",
							flexDirection: "column",
							...n?.style
						},
						"data-uhuu-flow-column": t.id,
						children: [B(e.chunk?.unplaceable, () => ne([e.chunk.unplaceable.index], e.chunk, (e) => _?.(r, t, e, N), !1, c ?? t.indexes)), ne(a, e.chunk, (e) => _?.(r, t, e, N), !1, c ?? t.indexes)]
					}, t.id);
				})
			}, `columns:${r.id}:${n}`);
		})
	});
}
//#endregion
//#region src/uhuu/editable/dialog-ratio.js
function On(e, t) {
	if (e?.ratio !== "auto") return e;
	let n = { ...e };
	delete n.ratio;
	let r = t?.getBoundingClientRect?.();
	return r && r.width > 0 && r.height > 0 ? {
		...n,
		ratio: Number((r.width / r.height).toFixed(4))
	} : (be(`dialog-ratio:${String(e.path)}`, `[uhuu-components] "${String(e.path)}": \`ratio: 'auto'\` was not measured, its element has no size; the dialog opened without a ratio.`), n);
}
//#endregion
//#region src/uhuu/editable/inline-markdown.js
var kn = {
	STRONG: "**",
	B: "**",
	EM: "*",
	I: "*",
	DEL: "~~",
	S: "~~",
	STRIKE: "~~"
}, An = /* @__PURE__ */ new Set([
	"SPAN",
	"FONT",
	"U"
]), jn = /* @__PURE__ */ new Set([
	"P",
	"DIV",
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"UL",
	"OL",
	"BLOCKQUOTE",
	"PRE",
	"HR"
]), Mn = class extends Error {}, Nn = (e) => {
	throw new Mn(e);
};
function Pn(e, { nbsp: t = !0 } = {}) {
	try {
		return { markdown: Rn(e, t).join("\n\n") };
	} catch (e) {
		if (e instanceof Mn) return { reason: e.message };
		throw e;
	}
}
function Fn(e, t) {
	return Ln(e) === Ln(t);
}
var In = {
	amp: "&",
	lt: "<",
	gt: ">",
	quot: "\"",
	apos: "'",
	nbsp: " ",
	"#39": "'"
};
function Ln(e) {
	return String(e ?? "").replace(/\r\n?/g, "\n").replace(/&(amp|lt|gt|quot|apos|nbsp|#39);/g, (e, t) => In[t]).replace(/\u00a0/g, " ").replace(/ {2,}\n/g, "\\\n").replace(/[ \t]+$/gm, "").replace(/^[ \t]+/gm, "").replace(/^(#{1,6})[ \t]+(.*?)(?:[ \t]+#+)?$/gm, "$1 $2").replace(/^([-*_])(?:[ \t]*\1){2,}$/gm, "---").replace(/^[*+](?=[ \t])/gm, "-").replace(/^\d+[.)](?=[ \t])/gm, "1.").replace(/__(?=\S)([\s\S]*?\S)__/g, "**$1**").replace(/(^|[^\p{L}\p{N}_\\])_(?=\S)([\s\S]*?\S)_(?![\p{L}\p{N}_])/gu, "$1*$2*").replace(/<((?:https?|mailto):[^>\s]+)>/g, "$1").replace(/\\([!-/:-@[-`{-~])/g, "$1").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
function Rn(e, t) {
	let n = [], r = [], i = () => {
		let e = Hn(r, t);
		e && n.push(e), r = [];
	};
	return e.childNodes.forEach((e) => {
		if (e.nodeType === Node.ELEMENT_NODE && jn.has(e.nodeName)) {
			i();
			let r = zn(e, t);
			r && n.push(r);
		} else r.push(e);
	}), i(), n;
}
function zn(e, t) {
	let n = e.nodeName;
	if (n === "HR") return "---";
	if (n === "PRE") return Vn(e);
	if (n === "UL" || n === "OL") return Bn(e, t);
	if (n === "BLOCKQUOTE") return Rn(e, t).join("\n\n").split("\n").map((e) => e ? `> ${e}` : ">").join("\n");
	if (n === "DIV" && [...e.children].some((e) => jn.has(e.nodeName))) return Rn(e, t).join("\n\n");
	let r = Hn([...e.childNodes], t);
	return !r || n === "P" || n === "DIV" ? r : `${"#".repeat(Number(n[1]))} ${r.replace(/\n/g, " ")}`;
}
function Bn(e, t) {
	let n = [...e.children];
	n.some((e) => e.nodeName !== "LI") && Nn(`its list holds a <${n.find((e) => e.nodeName !== "LI").nodeName.toLowerCase()}>`);
	let r = n.some((e) => [...e.children].some((e) => e.nodeName === "P")), i = Number(e.getAttribute("start") || 1);
	return n.map((n) => {
		let a = e.nodeName === "OL" ? `${i++}. ` : "- ";
		return a + Rn(n, t).join(r ? "\n\n" : "\n").split("\n").map((e, t) => t && e ? " ".repeat(a.length) + e : e).join("\n");
	}).join(r ? "\n\n" : "\n");
}
function Vn(e) {
	let t = e.querySelector("code") ?? e, n = (t.textContent ?? "").replace(/\n$/, ""), r = /(?:^|\s)language-(\S+)/.exec(t.className || "")?.[1] ?? "", i = "`".repeat(Math.max(3, ...[...n.matchAll(/`+/g)].map((e) => e[0].length + 1)));
	return `${i}${r}\n${n}\n${i}`;
}
function Hn(e, t) {
	let n = [...e];
	for (; n.length && (n.at(-1).nodeName === "BR" || Un(n.at(-1)));) n.pop();
	return Wn(n, t).replace(/^[\s\u00a0]+|[\s\u00a0]+$/g, "").replace(/^([ \t]*)(#|>|[-+](?=[ \t]|$)|\d+[.)](?=[ \t]|$)|[-=]+[ \t]*$)/gm, (e, t, n) => /^\d/.test(n) ? `${t}${n.replace(/[.)]/, "\\$&")}` : `${t}\\${n}`);
}
var Un = (e) => e.nodeType === Node.TEXT_NODE && !/\S/.test((e.nodeValue ?? "").replace(/\u00a0/g, "x"));
function Wn(e, t) {
	let n = "", r = !1;
	return e.forEach((e) => {
		if (e.nodeType === Node.TEXT_NODE) {
			let i = e.nodeValue ?? "";
			r && (i = i.replace(/^\n/, "")), t || (i = i.replace(/\u00a0/g, " ")), n += i.replace(/[\\`*_[\]~]/g, "\\$&").replace(/<(?=[A-Za-z/!?])/g, "\\<"), r = !1;
			return;
		}
		if (r = !1, e.nodeType !== Node.ELEMENT_NODE) return;
		let i = e.nodeName;
		i === "BR" ? (n += "\\\n", r = !0) : kn[i] ? n += Gn(Wn([...e.childNodes], t), kn[i]) : i === "CODE" ? n += Kn(e.textContent ?? "") : i === "A" ? n += qn(e, t) : An.has(i) ? n += Wn([...e.childNodes], t) : Nn(jn.has(i) ? `a <${i.toLowerCase()}> sits inside its text` : `its markdown draws a <${i.toLowerCase()}>`);
	}), n;
}
function Gn(e, t) {
	let [, n, r, i] = /^(\s*)([\s\S]*?)(\s*)$/.exec(e);
	return r ? `${n}${t}${r}${t}${i}` : e;
}
function Kn(e) {
	let t = "`".repeat(Math.max(1, ...[...e.matchAll(/`+/g)].map((e) => e[0].length + 1))), n = e.startsWith("`") || e.endsWith("`") ? " " : "";
	return `${t}${n}${e}${n}${t}`;
}
function qn(e, t) {
	let n = e.getAttribute("href") ?? "", r = e.textContent ?? "";
	if (n && n === r) return `<${n}>`;
	if (n === `http://${r}` && /^www\./.test(r)) return r;
	let i = e.getAttribute("title"), a = /[\s<>]/.test(n) ? `<${n.replace(/[<>]/g, encodeURIComponent)}>` : n.replace(/[()]/g, "\\$&");
	return `[${Wn([...e.childNodes], t)}](${a}${i ? ` "${i.replace(/"/g, "\\\"")}"` : ""})`;
}
//#endregion
//#region src/uhuu/editable/inline-edit.js
var Jn = "[data-uhuu-inline-edit]", Yn = "data-uhuu-selected", Xn = "data-uhuu-editing", Zn = "data-uhuu-editing-source", Qn = "[data-uhuu-inline-toolbar]", $n = "button, [role=\"button\"]", er = `${$n}, a[href], input, textarea, select, summary, [contenteditable]`, tr = 5e3, U = null, nr = null, rr = null, ir = null, ar = !1, or = /* @__PURE__ */ new Set();
function sr(e) {
	ar = !!e;
}
var cr = () => U;
function lr(e) {
	return or.add(e), () => {
		or.delete(e);
	};
}
function ur(e) {
	let t = U;
	U = e && {
		...e,
		inPlace: !fr(e) && !!Sr(e)?.element
	}, t?.binding !== U?.binding && (t?.binding.removeAttribute(Yn), ir ??= new MutationObserver(dr), ir.disconnect(), U && ir.observe(U.binding, {
		childList: !0,
		characterData: !0,
		subtree: !0
	}), U && !t ? (document.addEventListener("pointerdown", hr, !0), document.addEventListener("keydown", gr)) : !U && t && (document.removeEventListener("pointerdown", hr, !0), document.removeEventListener("keydown", gr))), U?.binding.setAttribute(Yn, U.inPlace ? "text" : ""), or.forEach((e) => e());
}
function dr() {
	U && !fr(U) && !!Sr(U)?.element !== U.inPlace && ur(U);
}
var fr = (e) => !!(e.editing || e.saving || e.surface);
function pr(e, t) {
	U?.binding === e && ur({
		...U,
		...t
	});
}
function mr() {
	rr?.(!0), U && ur(null);
}
function hr(e) {
	let t = e.target;
	!U || t && (U.binding.contains(t) || U.surface?.contains(t) || t.closest?.(Qn)) || mr();
}
function gr(e) {
	if (!U || U.editing || e.defaultPrevented) return;
	let t = e.target?.closest?.(er);
	(!t || t.contains(U.binding) || U.binding.contains(t)) && (e.key === "Escape" ? mr() : e.key === "Enter" && (e.preventDefault(), yr("activate")));
}
function _r() {
	let e = ue()?.agents, t = window.UhuuVisualFeedback;
	return !!e?.isSelectionMode?.() || !!t?.isOpen;
}
function vr(e, t) {
	let n = e.currentTarget;
	if (typeof n?.closest != "function" || !n.closest(Jn) || n.matches($n)) return !1;
	if (nr && U?.binding === n) {
		let n = nr;
		return nr = null, e.preventDefault(), ur({
			...U,
			...t
		}), br(n), !0;
	}
	return _r() ? !1 : U?.binding === n ? (U.editing || (ur({
		...U,
		...t
	}), xr({
		x: e.clientX,
		y: e.clientY
	})), !0) : (rr?.(!0), ur({
		binding: n,
		...t,
		editing: !1
	}), !0);
}
function yr(e) {
	if (U) {
		if (e === "bold" || e === "italic") U.editing && U.surface && document.execCommand(e);
		else {
			nr = e;
			try {
				U.binding.dispatchEvent(new MouseEvent("click", {
					bubbles: !0,
					cancelable: !0
				}));
			} finally {
				nr && (nr = null, mr());
			}
		}
	}
}
function br(e) {
	e === "activate" ? xr() : (rr?.(!0), e === "open" ? U?.open?.() : U?.actions?.find((t) => t.id === e?.action)?.run());
}
function xr(e) {
	if (!U || fr(U)) return;
	let t = Sr(U);
	if (t?.element) t.markdown === void 0 ? Cr(t, e) : wr(t, e);
	else {
		if (t?.reason && ar) {
			let e = String(U.dialog.path);
			xe(`inline-edit:${e}`, `[uhuu-components] "${e}" opened its dialog instead of editing in place: ${t.reason}.`);
		}
		U.open?.();
	}
}
function Sr({ binding: e, dialog: t, inline: n }) {
	if (!ge("patchPayload.operations") || n === !1) return null;
	let r = t.type === "markdown";
	if (!r && t.type !== "text" && t.type !== "textarea" || typeof t.path != "string" || !t.path || t.imagePath) return null;
	let i = [t.path, t.subPath].filter((e) => typeof e == "string" && e).join("."), a = Or(fe(), i);
	if (a != null && typeof a != "string") return { reason: "its stored value is not text" };
	let o = a || (t.value == null ? "" : String(t.value));
	if (r) {
		let t = Pn(e);
		return t.reason ? t : Fn(t.markdown, o) ? {
			path: i,
			stored: a,
			element: e,
			markdown: t.markdown
		} : { reason: "its element shows markdown that differs from its value" };
	}
	let s = Dr(e);
	if (!s) return { reason: "its element holds more than one plain text" };
	let c = s.textContent ?? "";
	return c === o ? {
		path: i,
		stored: a,
		element: s,
		text: c
	} : { reason: "its element shows text that differs from its value" };
}
function Cr(e, t) {
	let { binding: n, dialog: r, open: i } = U, { element: a, text: o } = e, s = r.type === "textarea";
	a.setAttribute("contenteditable", "plaintext-only"), a.isContentEditable || a.setAttribute("contenteditable", "true"), a.setAttribute(Xn, ""), a.focus({ preventScroll: !0 }), Ar(a, t);
	let c = (e) => {
		e.stopPropagation(), e.key === "Escape" ? (e.preventDefault(), u(!1)) : e.key === "Enter" && (e.preventDefault(), s && !(e.metaKey || e.ctrlKey) ? document.execCommand("insertText", !1, "\n") : u(!0));
	}, l = () => u(!0);
	a.addEventListener("keydown", c), a.addEventListener("paste", Er), a.addEventListener("blur", l);
	function u(t) {
		if (rr !== u) return;
		rr = null, a.removeEventListener("keydown", c), a.removeEventListener("paste", Er), a.removeEventListener("blur", l), a.removeAttribute("contenteditable"), a.removeAttribute(Xn);
		let r = kr(a);
		a.textContent = t ? r : o;
		let s = t && r !== o;
		pr(n, {
			editing: !1,
			saving: s
		}), s && Tr(e, r, i, () => {
			a.isConnected && kr(a) === r && (a.textContent = o);
		}).then(() => pr(n, { saving: !1 }));
	}
	rr = u, pr(n, { editing: !0 });
}
function wr(e, t) {
	let { binding: n, open: r } = U, i = n.cloneNode(!0);
	i.removeAttribute(Yn), [i, ...i.querySelectorAll("[id]")].forEach((e) => e.removeAttribute("id")), i.setAttribute(Xn, ""), i.setAttribute("contenteditable", "true"), n.after(i);
	let a = [n.style.getPropertyValue("display"), n.style.getPropertyPriority("display")];
	n.style.setProperty("display", "none", "important"), n.setAttribute(Zn, ""), document.execCommand("defaultParagraphSeparator", !1, "p"), i.focus({ preventScroll: !0 }), Ar(i, t, n);
	let o = (e) => {
		e.stopPropagation();
		let t = e.key.toLowerCase(), n = e.metaKey || e.ctrlKey;
		t === "escape" ? (e.preventDefault(), u(!1)) : t === "enter" && n ? (e.preventDefault(), u(!0)) : t === "u" && n && e.preventDefault();
	}, s = () => u(!0), c = (e) => e.stopPropagation();
	i.addEventListener("keydown", o), i.addEventListener("paste", Er), i.addEventListener("blur", s), [
		"click",
		"dblclick",
		"mousedown",
		"pointerdown",
		"mouseup",
		"pointerup"
	].forEach((e) => i.addEventListener(e, c));
	let l = () => {
		i.remove(), n.style.setProperty("display", ...a), n.getAttribute("style") || n.removeAttribute("style"), n.removeAttribute(Zn), U?.surface === i && pr(n, { surface: null });
	};
	function u(t) {
		if (rr !== u) return;
		rr = null, i.removeEventListener("keydown", o), i.removeEventListener("paste", Er), i.removeEventListener("blur", s), i.removeAttribute("contenteditable"), i.removeAttribute(Xn), pr(n, { editing: !1 });
		let a = t ? Pn(i, { nbsp: e.markdown.includes("\xA0") }) : null;
		if (!a || a.markdown === e.markdown) {
			l();
			return;
		}
		if (a.reason) {
			l(), be(`inline-edit-markdown:${e.path}:${a.reason}`, `[uhuu-components] "${e.path}" was not saved: ${a.reason}; opened its dialog.`), r?.();
			return;
		}
		let c = a.markdown, d = () => !n.isConnected || Pn(n).markdown === c, f = new MutationObserver(() => {
			d() && m();
		}), p = setTimeout(m, tr);
		function m() {
			f.disconnect(), clearTimeout(p), l();
		}
		n.parentNode && f.observe(n.parentNode, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), Tr(e, c, r, m).then((e) => {
			e && d() && m();
		});
	}
	rr = u, pr(n, {
		surface: i,
		editing: !0
	});
}
function Tr({ path: e, stored: t }, n, r, i) {
	let a = (t) => {
		i(), be(`inline-edit-rejected:${e}:${t}`, `[uhuu-components] The editor did not save "${e}" (${t}); opened its dialog.`), r?.();
	};
	return _e([{
		op: "set",
		path: e,
		value: n,
		expected: { value: t || null }
	}]).then((e) => (e.ok || a(e.rejected.map((e) => e.reason).join(", ") || "nothing applied"), e.ok), (e) => (a(e.message), !1));
}
function Er(e) {
	e.preventDefault(), document.execCommand("insertText", !1, e.clipboardData?.getData("text/plain") ?? "");
}
function Dr(e) {
	let t = e;
	for (;;) {
		let e = t.childNodes;
		if (e.length === 0) return t;
		if (e.length !== 1) return null;
		let n = e[0];
		if (n.nodeType === Node.TEXT_NODE) return t;
		if (n.nodeType !== Node.ELEMENT_NODE) return null;
		t = n;
	}
}
function Or(e, t) {
	return t.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean).reduce((e, t) => e?.[t], e);
}
function kr(e) {
	let t = "";
	return e.childNodes.forEach((e) => {
		e.nodeType === Node.TEXT_NODE ? t += e.nodeValue ?? "" : e.nodeName === "BR" ? t += "\n" : ((e.nodeName === "DIV" || e.nodeName === "P") && t && !t.endsWith("\n") && (t += "\n"), t += kr(e));
	}), e.lastChild?.nodeName === "BR" ? t.slice(0, -1) : t;
}
function Ar(e, t, n) {
	let r = window.getSelection();
	if (!r) return;
	let i = !r.isCollapsed && r.rangeCount ? r.getRangeAt(0) : null;
	if (i && e.contains(i.commonAncestorContainer)) return;
	let a = null;
	if (i && n?.contains(i.commonAncestorContainer)) {
		let t = jr(i.startContainer, n, e), r = jr(i.endContainer, n, e);
		t && r && (a = document.createRange(), a.setStart(t, i.startOffset), a.setEnd(r, i.endOffset));
	}
	if (!a && t && document.caretPositionFromPoint) {
		let n = document.caretPositionFromPoint(t.x, t.y);
		n && e.contains(n.offsetNode) && (a = document.createRange(), a.setStart(n.offsetNode, n.offset));
	} else if (!a && t && document.caretRangeFromPoint) {
		let n = document.caretRangeFromPoint(t.x, t.y);
		n && e.contains(n.startContainer) && (a = n);
	}
	a || (a = document.createRange(), a.selectNodeContents(e), a.collapse(!1)), r.removeAllRanges(), r.addRange(a);
}
function jr(e, t, n) {
	let r = [];
	for (let n = e; n !== t; n = n.parentNode) {
		if (!n?.parentNode) return null;
		r.unshift([...n.parentNode.childNodes].indexOf(n));
	}
	return r.reduce((e, t) => e?.childNodes[t] ?? null, n);
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
function Mr(e) {
	let t = e?.dialog;
	return t ? Nr(t, { inline: e.inline }) : {};
}
function Nr(e, { inline: t, kind: n, actions: r, open: i } = {}) {
	let a = {
		"data-uhuu": "",
		...e.type ? { "data-uhuu-type": e.type } : {}
	};
	return le() ? a : {
		...a,
		onClick(a) {
			if (typeof window > "u" || le()) return;
			a.stopPropagation();
			let o = a.currentTarget, s = () => i ? i(o) : ue()?.editDialog?.(On(e, o)), c = r?.filter((t) => t && !Pr(t.dialog, e)).map(({ id: e, label: t, icon: n, disabled: r, dialog: i, onSelect: s }) => ({
				id: e,
				label: t,
				icon: n,
				disabled: r,
				run: () => s ? s(a) : i && ue()?.editDialog?.(On(i, o))
			}));
			vr(a, {
				dialog: e,
				inline: t,
				kind: n,
				actions: c,
				open: s
			}) || s();
		}
	};
}
var Pr = (e, t) => !!e && JSON.stringify(e) === JSON.stringify(t), Fr = "uhuu-text-empty", Ir = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), Lr = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && Ir.has(e.type), Rr = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(Rr) : !1, zr = (e) => {
	let t = Lr(e.dialog) && Rr(e.children) ? [e.className, Fr].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ v("div", {
		className: t,
		...Mr(e),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function Br(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Vr(e, t, n, r = "") {
	return `${r}${e}-${n}-${Br(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var Hr = /\s*(page-break-before|break-before)\s*/i, Ur = 1, Wr = 3, Gr = 8;
function Kr(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var qr = "script,style,iframe,object,embed,base,meta,link,template,svg,math", Jr = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href",
	"action",
	"data",
	"poster",
	"background",
	"cite"
]), Yr = /* @__PURE__ */ new Set([
	"http",
	"https",
	"mailto",
	"tel"
]), Xr = /* @__PURE__ */ new Set([
	"src",
	"poster",
	"srcset"
]), Zr = /^data:image\/(?:png|jpe?g|gif|webp|avif|bmp)[;,]/i;
function Qr(e, t) {
	let n = [...String(e ?? "").trim()].filter((e) => e.charCodeAt(0) > 32 && e.charCodeAt(0) !== 127).join(""), r = /^([^:/?#]*):/.exec(n);
	if (!r) return !0;
	let i = r[1].toLowerCase();
	return Yr.has(i) ? !0 : Xr.has(t) ? i === "blob" || Zr.test(n) : !1;
}
function $r(e) {
	let t = [], n = String(e ?? "").trim();
	for (; n;) {
		let e = /^\S+/.exec(n)[0];
		n = n.slice(e.length);
		let r = "";
		if (e.endsWith(",")) e = e.replace(/,+$/, "");
		else {
			let e = /^[^,]*/.exec(n)[0];
			r = e.trim(), n = n.slice(e.length + 1);
		}
		n = n.trim(), e && Qr(e, "srcset") && t.push(r ? `${e} ${r}` : e);
	}
	return t.join(", ");
}
function ei(e) {
	if (typeof document > "u") return Kr(e);
	let t = document.createElement("template");
	return t.innerHTML = String(e ?? ""), t.content.querySelectorAll(qr).forEach((e) => e.remove()), t.content.querySelectorAll("*").forEach((e) => {
		for (let t of [...e.attributes]) {
			let n = t.name.toLowerCase();
			if (n.startsWith("on") || n === "srcdoc" || n === "formaction") e.removeAttribute(t.name);
			else if (n === "srcset") {
				let n = $r(t.value);
				n ? e.setAttribute(t.name, n) : e.removeAttribute(t.name);
			} else Jr.has(n) && !Qr(t.value, n) && e.removeAttribute(t.name);
		}
	}), t.innerHTML;
}
function ti(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === Gr) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === Wr) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: Kr(t),
				text: t
			});
		} else if (e.nodeType === Ur) {
			let t = e, n = t.hasAttribute("data-flow-break-before"), i = t.hasAttribute("data-flow-break-after");
			t.removeAttribute("data-flow-break-before"), t.removeAttribute("data-flow-break-after"), r.push({
				kind: "element",
				type: t.tagName.toLowerCase(),
				html: t.outerHTML,
				text: t.textContent ?? "",
				breakBefore: n,
				breakAfter: i
			});
		}
	}), r;
}
function ni(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: Vr(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function ri(e = "", t = {}) {
	let n = t.breakComment ?? Hr, r = (t.parseHtml ?? ((e) => ti(e, n)))(e);
	return ni(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/html-inline.tsx
var ii = /* @__PURE__ */ new Set([
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
]), ai = {
	class: "className",
	tabindex: "tabIndex",
	contenteditable: "contentEditable",
	spellcheck: "spellCheck",
	accesskey: "accessKey",
	datetime: "dateTime",
	itemprop: "itemProp",
	itemscope: "itemScope",
	itemtype: "itemType",
	itemid: "itemID",
	itemref: "itemRef",
	autocapitalize: "autoCapitalize",
	autocorrect: "autoCorrect",
	inputmode: "inputMode",
	enterkeyhint: "enterKeyHint",
	contextmenu: "contextMenu",
	"xml:lang": "xmlLang"
};
function oi(e) {
	let t = {};
	for (let n of Array.from(e.attributes)) {
		let r = n.name.toLowerCase();
		if (r.startsWith("on") || r === "autofocus" || r === "contenteditable" && n.value !== "false" || r === "hidden" && n.value === "until-found") return null;
		if (r === "style") {
			let n = {};
			for (let t of Array.from(e.style)) {
				if (e.style.getPropertyPriority(t)) return null;
				let r = t.startsWith("--") ? t : t.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, (e, t) => t.toUpperCase());
				n[r] = e.style.getPropertyValue(t);
			}
			t.style = n;
		} else t[ai[r] ?? r] = r === "hidden" || r === "itemscope" || n.value;
	}
	return t;
}
function si(t) {
	let n = [];
	for (let [r, i] of Array.from(t.childNodes).entries()) {
		if (i.nodeType === 8) continue;
		if (i.nodeType === 3) {
			n.push(i.textContent ?? "");
			continue;
		}
		if (i.nodeType !== 1) return null;
		let t = i, a = t.tagName.toLowerCase();
		if (!Qt.has(a)) return null;
		let o = oi(t), s = si(t);
		if (!o || !s) return null;
		n.push(e.createElement(a, {
			...o,
			key: r
		}, ...s));
	}
	return n;
}
function ci(t) {
	if (typeof document > "u") return null;
	let n = document.createElement("template");
	n.innerHTML = t;
	let r = Array.from(n.content.childNodes).filter((e) => e.nodeType !== 8 && !(e.nodeType === 3 && !(e.textContent ?? "").trim()));
	if (r.length !== 1 || r[0].nodeType !== 1) return null;
	let i = r[0], a = i.tagName.toLowerCase();
	if (!ii.has(a)) return null;
	let o = oi(i), s = si(i);
	return !o || !s ? null : e.createElement(cn, {
		...o,
		as: a
	}, ...s);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var li = {
	h1: { keepWithNext: 1 },
	h2: { keepWithNext: 1 },
	h3: { keepWithNext: 1 },
	h4: { keepWithNext: 1 },
	h5: { keepWithNext: 1 },
	h6: { keepWithNext: 1 },
	table: { avoidBreakInside: !0 },
	ul: { avoidBreakInside: !0 },
	ol: { avoidBreakInside: !0 },
	pre: { avoidBreakInside: !0 },
	blockquote: { avoidBreakInside: !0 },
	figure: { avoidBreakInside: !0 },
	img: { avoidBreakInside: !0 }
}, ui = !1;
function di(t) {
	let n = Te();
	return e.useMemo(() => t === !1 ? (n && !ui && (ui = !0, console.warn("[uhuu-components] Flow.Document sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : ei, [t, n]);
}
function fi({ html: t }) {
	let n = e.useMemo(() => ci(t), [t]);
	return n ? /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		children: n
	}) : /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: t }
	});
}
function pi({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, measureContinuation: c, breakReserve: l, id: u = "flow-document", idPrefix: d, flowClassName: f = "uhuu-flow-document", itemClassName: p, metaDefaults: m, getItemMeta: h, renderItem: g, sanitize: _, editable: y, parseHtml: b }) {
	let x = e.useMemo(() => ri(t, {
		idPrefix: d,
		parseHtml: b
	}), [
		t,
		d,
		b
	]), S = e.useMemo(() => ({
		...li,
		...m ?? {}
	}), [m]), C = di(_), w = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...h?.(e, t) ?? {}
	}), [h]), T = e.useMemo(() => g ? null : new Map(x.map((e) => [e, C(e.html)])), [
		x,
		g,
		C
	]), E = e.useCallback((e, t) => g ? g(e, t) : /* @__PURE__ */ v(fi, { html: T?.get(e) ?? C(e.html) }), [
		g,
		T,
		C
	]), D = /* @__PURE__ */ v(En, {
		id: u,
		items: x,
		getKey: (e) => e.id,
		className: f,
		itemClassName: p,
		metaDefaults: S,
		getItemMeta: w,
		renderItem: E
	});
	return /* @__PURE__ */ v(Zt, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		measureContinuation: c,
		breakReserve: l,
		header: n,
		footer: r,
		children: y ? /* @__PURE__ */ v(zr, {
			dialog: y,
			className: !x.length && Lr(y) ? Fr : void 0,
			children: D
		}) : D
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var mi = /<!--\s*(page-break-before|break-before)\s*-->/i, hi = /^\s*\[[^\]]+\]:\s+\S+/, gi = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function _i(e) {
	return e.trim() === "";
}
function vi(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function yi(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function bi(e) {
	return /^(```|~~~)/.test(e.trim());
}
function xi(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function Si(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Ci(e) {
	return mi.test(e.trim());
}
function wi(e) {
	return hi.test(e);
}
function Ti(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function Ei(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function Di(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? Ti(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = Ei(o, a);
		e.push({
			id: Vr(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function Oi(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) wi(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (_i(i[o])) {
			o += 1;
			continue;
		}
		if (Ci(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (bi(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (vi(i[o])) n = "heading", o += 1;
		else if (xi(i[o])) n = "rule", o += 1;
		else if (gi.test(i[o])) n = "image", o += 1;
		else if (Si(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !_i(i[o]);) o += 1;
		else if (yi(i[o])) for (n = "list", o += 1; o < i.length && !_i(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !_i(i[o]) && !vi(i[o]) && !bi(i[o]) && !xi(i[o]) && !gi.test(i[o]) && !Si(i, o) && !yi(i[o]) && !i[o].trim().startsWith(">") && !Ci(i[o]);) o += 1;
		Di(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function ki(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ki(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Ai() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ki(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var ji = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Mi = (e, t) => ({
	classGroupId: e,
	validator: t
}), Ni = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Pi = "-", Fi = [], Ii = "arbitrary..", Li = (e) => {
	let t = Bi(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return zi(e);
			let n = e.split(Pi);
			return Ri(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? ji(i, t) : t : i || Fi;
			}
			return n[e] || Fi;
		}
	};
}, Ri = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Ri(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Pi) : e.slice(t).join(Pi), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, zi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ii + r : void 0;
})(), Bi = (e) => {
	let { theme: t, classGroups: n } = e;
	return Vi(n, t);
}, Vi = (e, t) => {
	let n = Ni();
	for (let r in e) {
		let i = e[r];
		Hi(i, n, r, t);
	}
	return n;
}, Hi = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Ui(i, t, n, r);
	}
}, Ui = (e, t, n, r) => {
	typeof e == "string" ? Wi(e, t, n) : typeof e == "function" ? Gi(e, t, n, r) : Ki(e, t, n, r);
}, Wi = (e, t, n) => {
	let r = e === "" ? t : qi(t, e);
	r.classGroupId = n;
}, Gi = (e, t, n, r) => {
	Ji(e) ? Hi(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Mi(n, e)));
}, Ki = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Hi(o, qi(t, a), n, r);
	}
}, qi = (e, t) => {
	let n = e, r = t.split(Pi), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Ni(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Ji = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Yi = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, Xi = "!", Zi = ":", Qi = [], $i = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), ea = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Zi) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(Xi) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Xi) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return $i(t, l, c, u);
	};
	if (t) {
		let e = t + Zi, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : $i(Qi, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ta = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, na = (e) => ({
	cache: Yi(e.cacheSize),
	parseClassName: ea(e),
	sortModifiers: ta(e),
	postfixLookupClassGroupIds: ra(e),
	...Li(e)
}), ra = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ia = /\s+/, aa = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ia), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Xi : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, oa = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = sa(n)) && (i && (i += " "), i += r);
	return i;
}, sa = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = sa(e[r])) && (n && (n += " "), n += t);
	return n;
}, ca = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = na(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = aa(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(oa(...e));
}, la = [], ua = (e) => {
	let t = (t) => t[e] || la;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, da = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, fa = /^\((?:(\w[\w-]*):)?(.+)\)$/i, pa = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ma = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ha = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ga = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, _a = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, va = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ya = (e) => pa.test(e), W = (e) => !!e && !Number.isNaN(Number(e)), ba = (e) => !!e && Number.isInteger(Number(e)), xa = (e) => e.endsWith("%") && W(e.slice(0, -1)), Sa = (e) => ma.test(e), Ca = () => !0, wa = (e) => ha.test(e) && !ga.test(e), Ta = () => !1, Ea = (e) => _a.test(e), Da = (e) => va.test(e), Oa = (e) => !G(e) && !K(e), ka = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Aa = (e) => Ga(e, Ya, Ta), G = (e) => da.test(e), ja = (e) => Ga(e, Xa, wa), Ma = (e) => Ga(e, Za, W), Na = (e) => Ga(e, $a, Ca), Pa = (e) => Ga(e, Qa, Ta), Fa = (e) => Ga(e, qa, Ta), Ia = (e) => Ga(e, Ja, Da), La = (e) => Ga(e, eo, Ea), K = (e) => fa.test(e), Ra = (e) => Ka(e, Xa), za = (e) => Ka(e, Qa), Ba = (e) => Ka(e, qa), Va = (e) => Ka(e, Ya), Ha = (e) => Ka(e, Ja), Ua = (e) => Ka(e, eo, !0), Wa = (e) => Ka(e, $a, !0), Ga = (e, t, n) => {
	let r = da.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ka = (e, t, n = !1) => {
	let r = fa.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, qa = (e) => e === "position" || e === "percentage", Ja = (e) => e === "image" || e === "url", Ya = (e) => e === "length" || e === "size" || e === "bg-size", Xa = (e) => e === "length", Za = (e) => e === "number", Qa = (e) => e === "family-name", $a = (e) => e === "number" || e === "weight", eo = (e) => e === "shadow", to = () => {
	let e = ua("color"), t = ua("font"), n = ua("text"), r = ua("font-weight"), i = ua("tracking"), a = ua("leading"), o = ua("breakpoint"), s = ua("container"), c = ua("spacing"), l = ua("radius"), u = ua("shadow"), d = ua("inset-shadow"), f = ua("text-shadow"), p = ua("drop-shadow"), m = ua("blur"), h = ua("perspective"), g = ua("aspect"), _ = ua("ease"), v = ua("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		K,
		G
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		K,
		G,
		c
	], T = () => [
		ya,
		"full",
		"auto",
		...w()
	], E = () => [
		ba,
		"none",
		"subgrid",
		K,
		G
	], D = () => [
		"auto",
		{ span: [
			"full",
			ba,
			K,
			G
		] },
		ba,
		K,
		G
	], O = () => [
		ba,
		"auto",
		K,
		G
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		K,
		G
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		ya,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		s,
		ya,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		ya,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		K,
		G
	], L = () => [
		...b(),
		Ba,
		Fa,
		{ position: [K, G] }
	], ee = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], te = () => [
		"auto",
		"cover",
		"contain",
		Va,
		Aa,
		{ size: [K, G] }
	], R = () => [
		xa,
		Ra,
		ja
	], z = () => [
		"",
		"none",
		"full",
		l,
		K,
		G
	], B = () => [
		"",
		W,
		Ra,
		ja
	], ne = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], re = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], V = () => [
		W,
		xa,
		Ba,
		Fa
	], ie = () => [
		"",
		"none",
		m,
		K,
		G
	], ae = () => [
		"none",
		W,
		K,
		G
	], H = () => [
		"none",
		W,
		K,
		G
	], oe = () => [
		W,
		K,
		G
	], se = () => [
		ya,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Sa],
			breakpoint: [Sa],
			color: [Ca],
			container: [Sa],
			"drop-shadow": [Sa],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Oa],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Sa],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Sa],
			shadow: [Sa],
			spacing: ["px", W],
			text: [Sa],
			"text-shadow": [Sa],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				ya,
				G,
				K,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				K,
				G
			] }],
			"container-named": [ka],
			columns: [{ columns: [
				W,
				"auto",
				G,
				K,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				ba,
				"auto",
				K,
				G
			] }],
			basis: [{ basis: [
				ya,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				W,
				ya,
				"auto",
				"initial",
				"none",
				G
			] }],
			grow: [{ grow: [
				"",
				W,
				K,
				G
			] }],
			shrink: [{ shrink: [
				"",
				W,
				K,
				G
			] }],
			order: [{ order: [
				ba,
				"first",
				"last",
				"none",
				K,
				G
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Ra,
				ja
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Wa,
				Na
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				xa,
				G
			] }],
			"font-family": [{ font: [
				za,
				Pa,
				t
			] }],
			"font-features": [{ "font-features": [G] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				K,
				G
			] }],
			"line-clamp": [{ "line-clamp": [
				W,
				"none",
				K,
				Ma
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				K,
				G
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				K,
				G
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ne(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				W,
				"from-font",
				"auto",
				K,
				ja
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				W,
				"auto",
				K,
				G
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				ba,
				K,
				G
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				K,
				G
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				K,
				G
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: L() }],
			"bg-repeat": [{ bg: ee() }],
			"bg-size": [{ bg: te() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						ba,
						K,
						G
					],
					radial: [
						"",
						K,
						G
					],
					conic: [
						"",
						ba,
						K,
						G
					]
				},
				Ha,
				Ia
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: R() }],
			"gradient-via-pos": [{ via: R() }],
			"gradient-to-pos": [{ to: R() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: z() }],
			"rounded-s": [{ "rounded-s": z() }],
			"rounded-e": [{ "rounded-e": z() }],
			"rounded-t": [{ "rounded-t": z() }],
			"rounded-r": [{ "rounded-r": z() }],
			"rounded-b": [{ "rounded-b": z() }],
			"rounded-l": [{ "rounded-l": z() }],
			"rounded-ss": [{ "rounded-ss": z() }],
			"rounded-se": [{ "rounded-se": z() }],
			"rounded-ee": [{ "rounded-ee": z() }],
			"rounded-es": [{ "rounded-es": z() }],
			"rounded-tl": [{ "rounded-tl": z() }],
			"rounded-tr": [{ "rounded-tr": z() }],
			"rounded-br": [{ "rounded-br": z() }],
			"rounded-bl": [{ "rounded-bl": z() }],
			"border-w": [{ border: B() }],
			"border-w-x": [{ "border-x": B() }],
			"border-w-y": [{ "border-y": B() }],
			"border-w-s": [{ "border-s": B() }],
			"border-w-e": [{ "border-e": B() }],
			"border-w-bs": [{ "border-bs": B() }],
			"border-w-be": [{ "border-be": B() }],
			"border-w-t": [{ "border-t": B() }],
			"border-w-r": [{ "border-r": B() }],
			"border-w-b": [{ "border-b": B() }],
			"border-w-l": [{ "border-l": B() }],
			"divide-x": [{ "divide-x": B() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": B() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ne(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ne(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...ne(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				W,
				K,
				G
			] }],
			"outline-w": [{ outline: [
				"",
				W,
				Ra,
				ja
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Ua,
				La
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ua,
				La
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: B() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [W, ja] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": B() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Ua,
				La
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				W,
				K,
				G
			] }],
			"mix-blend": [{ "mix-blend": [
				...re(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": re() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [W] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": V() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": V() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": V() }],
			"mask-image-t-to-pos": [{ "mask-t-to": V() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": V() }],
			"mask-image-r-to-pos": [{ "mask-r-to": V() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": V() }],
			"mask-image-b-to-pos": [{ "mask-b-to": V() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": V() }],
			"mask-image-l-to-pos": [{ "mask-l-to": V() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": V() }],
			"mask-image-x-to-pos": [{ "mask-x-to": V() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": V() }],
			"mask-image-y-to-pos": [{ "mask-y-to": V() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [K, G] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": V() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": V() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [W] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": V() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": V() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: L() }],
			"mask-repeat": [{ mask: ee() }],
			"mask-size": [{ mask: te() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				K,
				G
			] }],
			filter: [{ filter: [
				"",
				"none",
				K,
				G
			] }],
			blur: [{ blur: ie() }],
			brightness: [{ brightness: [
				W,
				K,
				G
			] }],
			contrast: [{ contrast: [
				W,
				K,
				G
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Ua,
				La
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				W,
				K,
				G
			] }],
			"hue-rotate": [{ "hue-rotate": [
				W,
				K,
				G
			] }],
			invert: [{ invert: [
				"",
				W,
				K,
				G
			] }],
			saturate: [{ saturate: [
				W,
				K,
				G
			] }],
			sepia: [{ sepia: [
				"",
				W,
				K,
				G
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				K,
				G
			] }],
			"backdrop-blur": [{ "backdrop-blur": ie() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				W,
				K,
				G
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				W,
				K,
				G
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				W,
				K,
				G
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				W,
				K,
				G
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				W,
				K,
				G
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				W,
				K,
				G
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				W,
				K,
				G
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				W,
				K,
				G
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				K,
				G
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				W,
				"initial",
				K,
				G
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				K,
				G
			] }],
			delay: [{ delay: [
				W,
				K,
				G
			] }],
			animate: [{ animate: [
				"none",
				v,
				K,
				G
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				K,
				G
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ae() }],
			"rotate-x": [{ "rotate-x": ae() }],
			"rotate-y": [{ "rotate-y": ae() }],
			"rotate-z": [{ "rotate-z": ae() }],
			scale: [{ scale: H() }],
			"scale-x": [{ "scale-x": H() }],
			"scale-y": [{ "scale-y": H() }],
			"scale-z": [{ "scale-z": H() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: oe() }],
			"skew-x": [{ "skew-x": oe() }],
			"skew-y": [{ "skew-y": oe() }],
			transform: [{ transform: [
				K,
				G,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: se() }],
			"translate-x": [{ "translate-x": se() }],
			"translate-y": [{ "translate-y": se() }],
			"translate-z": [{ "translate-z": se() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				ba,
				K,
				G
			] }],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				K,
				G
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
			"scrollbar-track-color": [{ "scrollbar-track": I() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				K,
				G
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				W,
				Ra,
				ja,
				Ma
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}, no = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (ro(e, "cacheSize", t), ro(e, "prefix", n), ro(e, "experimentalParseClassName", r), io(e.theme, a.theme), io(e.classGroups, a.classGroups), io(e.conflictingClassGroups, a.conflictingClassGroups), io(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ro(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), ro(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), ao(e.theme, i.theme), ao(e.classGroups, i.classGroups), ao(e.conflictingClassGroups, i.conflictingClassGroups), ao(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), oo(e, i, "postfixLookupClassGroups"), oo(e, i, "orderSensitiveModifiers"), e), ro = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, io = (e, t) => {
	if (t) for (let n in t) ro(e, n, t[n]);
}, ao = (e, t) => {
	if (t) for (let n in t) oo(e, t, n);
}, oo = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, so = (e, ...t) => typeof e == "function" ? ca(to, e, ...t) : ca(() => no(to(), e), ...t), co = /*#__PURE__*/ ca(to), lo = so({ prefix: "uhuu" });
function q(...e) {
	return lo(Ai(e));
}
function uo(...e) {
	return co(Ai(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var fo = ({ onError: e }) => (t) => {
	Ce(t.currentTarget.currentSrc || t.currentTarget.src), e?.(t);
}, po = (e, t) => e && e > 0 ? e + t : 0, mo = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, ho = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = mo(e, r, n, i), s = po(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, po(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function go(e) {
	let t = c(te), n = fo({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: g = 0 } = e, _ = (e) => `${e}mm`, b = () => mo({
		width: d,
		left: p,
		right: m
	}, i, r, 2), x = () => {
		let e = f ?? 0;
		return f ? !h && !g && (e += r) : (e = a, h || (e += r), g || (e += r), (h || g) && (e -= (h ?? 0) + (g ?? 0))), e;
	}, S = b(), C = x(), w = (e) => e === void 0 ? void 0 : _(e), T = (e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)), E = p > 0 ? p + r : 0, D = h > 0 ? h + r : 0, O = g > 0 ? g + r : 0, k = -1 * i + E, A = h > 0 && g > 0, j = T({
		backgroundColor: u,
		width: w(S),
		...A ? { height: w(C) } : {},
		left: w(E),
		top: w(D),
		bottom: w(O)
	}), M = T({
		width: w(S),
		...A ? { height: w(C) } : {},
		left: w(k),
		top: w(D),
		bottom: w(O)
	});
	return /* @__PURE__ */ v("div", {
		className: "uhuu-image-container",
		style: l == "end" ? M : j,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ y("div", {
			className: "uhuu-image-inner",
			...e.binding ?? (e.dialog ? Nr(e.dialog, {
				kind: "image",
				actions: e.actions
			}) : {}),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: uo("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-bleed.tsx
var _o = (e) => {
	let t = c(te), n = fo({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, g = (e) => `${e}mm`, _ = () => mo({
		width: u,
		left: f,
		right: p
	}, i, r, 1), b = () => {
		let e = d ?? 0;
		return d ? !m && !h && (e += r) : (e = a, m || (e += r), h || (e += r), (m || h) && (e -= (m ?? 0) + (h ?? 0))), e;
	}, x = _(), S = b(), C = (e) => e === void 0 ? void 0 : g(e), w = ((e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)))({
		backgroundColor: l,
		width: C(x),
		height: C(S),
		left: C(f > 0 ? f + r : f),
		right: C(p > 0 ? p + r : p),
		top: C(m > 0 ? m + r : m),
		bottom: C(h > 0 ? h + r : h)
	});
	return /* @__PURE__ */ v("div", {
		className: "uhuu-image-container",
		style: w,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ y("div", {
			className: "uhuu-image-inner",
			...e.binding ?? (e.dialog ? Nr(e.dialog, {
				kind: "image",
				actions: e.actions
			}) : {}),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: uo("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}, vo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yo = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), bo = (e) => {
	let t = yo(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, xo = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), So = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, Co = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, wo = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...Co,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: xo("lucide", a),
	...!o && !So(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), To = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(wo, {
		ref: a,
		iconNode: t,
		className: xo(`lucide-${vo(bo(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = bo(e), n;
}, Eo = To("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Do = To("arrow-up-down", [
	["path", {
		d: "m21 16-4 4-4-4",
		key: "f6ql7i"
	}],
	["path", {
		d: "M17 20V4",
		key: "1ejh1v"
	}],
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}]
]), Oo = To("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), ko = To("bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), Ao = To("book-dashed", [
	["path", {
		d: "M12 17h1.5",
		key: "1gkc67"
	}],
	["path", {
		d: "M12 22h1.5",
		key: "1my7sn"
	}],
	["path", {
		d: "M12 2h1.5",
		key: "19tvb7"
	}],
	["path", {
		d: "M17.5 22H19a1 1 0 0 0 1-1",
		key: "10akbh"
	}],
	["path", {
		d: "M17.5 2H19a1 1 0 0 1 1 1v1.5",
		key: "1vrfjs"
	}],
	["path", {
		d: "M20 14v3h-2.5",
		key: "1naeju"
	}],
	["path", {
		d: "M20 8.5V10",
		key: "1ctpfu"
	}],
	["path", {
		d: "M4 10V8.5",
		key: "1o3zg5"
	}],
	["path", {
		d: "M4 19.5V14",
		key: "ob81pf"
	}],
	["path", {
		d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8",
		key: "s8vcyb"
	}],
	["path", {
		d: "M8 22H6.5a1 1 0 0 1 0-5H8",
		key: "1cu73q"
	}]
]), jo = To("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Mo = To("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), No = To("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Po = To("clipboard-list", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M12 11h4",
		key: "1jrz19"
	}],
	["path", {
		d: "M12 16h4",
		key: "n85exb"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]), Fo = To("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), Io = To("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), Lo = To("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Ro = To("grip-vertical", [
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}],
	["circle", {
		cx: "9",
		cy: "5",
		r: "1",
		key: "hp0tcf"
	}],
	["circle", {
		cx: "9",
		cy: "19",
		r: "1",
		key: "fkjjf6"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["circle", {
		cx: "15",
		cy: "19",
		r: "1",
		key: "f4zoj3"
	}]
]), zo = To("italic", [
	["line", {
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4",
		key: "15jd3p"
	}],
	["line", {
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20",
		key: "bu0au3"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "uljnxc"
	}]
]), Bo = To("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), Vo = To("maximize", [
	["path", {
		d: "M8 3H5a2 2 0 0 0-2 2v3",
		key: "1dcmit"
	}],
	["path", {
		d: "M21 8V5a2 2 0 0 0-2-2h-3",
		key: "1e4gt3"
	}],
	["path", {
		d: "M3 16v3a2 2 0 0 0 2 2h3",
		key: "wsl5sc"
	}],
	["path", {
		d: "M16 21h3a2 2 0 0 0 2-2v-3",
		key: "18trek"
	}]
]), Ho = To("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Uo = To("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), Wo = To("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Go = To("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Ko = To("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]), qo = To("square-pen", [["path", {
	d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
	key: "1m0v6g"
}], ["path", {
	d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
	key: "ohrbg2"
}]]), Jo = To("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), Yo = To("unfold-horizontal", [
	["path", {
		d: "M16 12h6",
		key: "15xry1"
	}],
	["path", {
		d: "M8 12H2",
		key: "1jqql6"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 8v2",
		key: "1woqiv"
	}],
	["path", {
		d: "M12 14v2",
		key: "8jcxud"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m19 15 3-3-3-3",
		key: "wjy7rq"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}]
]), Xo = To("unfold-vertical", [
	["path", {
		d: "M12 22v-6",
		key: "6o8u61"
	}],
	["path", {
		d: "M12 8V2",
		key: "1wkif3"
	}],
	["path", {
		d: "M4 12H2",
		key: "rhcxmi"
	}],
	["path", {
		d: "M10 12H8",
		key: "s88cx1"
	}],
	["path", {
		d: "M16 12h-2",
		key: "10asgb"
	}],
	["path", {
		d: "M22 12h-2",
		key: "14jgyd"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m15 5-3-3-3 3",
		key: "itvq4r"
	}]
]), Zo = To("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Qo = To("zoom-in", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "11",
		x2: "11",
		y1: "8",
		y2: "14",
		key: "1vmskp"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), $o = To("zoom-out", [
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["line", {
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65",
		key: "13gj7c"
	}],
	["line", {
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11",
		key: "durymu"
	}]
]), es = e.createContext({
	portalContainer: null,
	inProvider: !1
});
function ts() {
	return e.useContext(es);
}
function ns() {
	let e = document.createElement("div");
	return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", e;
}
function rs({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = ns();
		return document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ v(es.Provider, {
		value: {
			portalContainer: n,
			inProvider: !0
		},
		children: t
	});
}
//#endregion
//#region src/uhuu/editor-shell/toolbar-slot.ts
function is() {
	let e = [], t = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => e.at(-1) ?? null,
		subscribe(e) {
			return t.add(e), () => {
				t.delete(e);
			};
		},
		replace(n, r) {
			if (n) {
				let t = e.lastIndexOf(n);
				t !== -1 && e.splice(t, 1);
			}
			r && e.push(r), t.forEach((e) => e());
		}
	};
}
var as = is(), os = r(as), ss = () => null;
function cs({ children: e }) {
	let [t] = h(is);
	return i(os.Provider, { value: t }, e);
}
function ls() {
	return as.getSnapshot();
}
function us() {
	let e = c(os);
	return g(e.subscribe, e.getSnapshot, ss);
}
function ds() {
	let e = c(os), t = m(null);
	return s((n) => {
		let r = t.current;
		r !== n && (t.current = n, e.replace(r, n));
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var fs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ps = Ai, ms = (e, t) => (n) => {
	if (t?.variants == null) return ps(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = fs(t) || fs(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return ps(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, hs = ms("uhuu:inline-flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:whitespace-nowrap uhuu:rounded-md uhuu:text-sm uhuu:font-medium uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50", {
	variants: {
		variant: {
			default: "uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse) uhuu:hover:bg-gray-800",
			outline: "uhuu:border uhuu:border-gray-300 uhuu:bg-(--uhuu-shell-surface) uhuu:hover:bg-gray-50 uhuu:text-gray-900",
			ghost: "uhuu:hover:bg-gray-100 uhuu:text-gray-900",
			secondary: "uhuu:bg-gray-100 uhuu:text-gray-900 uhuu:hover:bg-gray-200"
		},
		size: {
			default: "uhuu:h-10 uhuu:px-4 uhuu:py-2",
			sm: "uhuu:h-9 uhuu:px-3 uhuu:text-sm",
			lg: "uhuu:h-11 uhuu:px-8",
			icon: "uhuu:h-10 uhuu:w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), gs = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ v("button", {
	className: q(hs({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
gs.displayName = "Button";
var _s = {
	toolbar: {
		pages_one: "{{count}} Page",
		pages_other: "{{count}} Pages",
		add: "Add",
		addHint: "Add page or group",
		reorder: "Reorder",
		reorderHint: "Reorder pages and groups using drag and drop",
		position: "Toolbar position",
		topLeft: "Top left",
		topRight: "Top right",
		bottomLeft: "Bottom left",
		bottomRight: "Bottom right"
	},
	zoom: {
		menu: "Zoom",
		fitWidth: "Fit to Width",
		fitHeight: "Fit to Height",
		fitPage: "Fit to Page",
		zoomIn: "Zoom in (25%)",
		zoomOut: "Zoom out (25%)"
	},
	page: {
		count_one: "{{count}} page",
		count_other: "{{count}} pages",
		fallbackName: "Page {{number}}",
		continued: "{{name}} continued",
		options: "Page options",
		groupOptions: "Group options",
		optionsMenu: "Options",
		rename: "Rename",
		moveUp: "Move up",
		moveDown: "Move down",
		addPage: "Add page",
		duplicate: "Duplicate",
		delete: "Delete"
	},
	addDialog: {
		title: "Add Page or Group",
		description: "Select a page or group to add to your document.",
		filterLabel: "Filter pages and groups",
		filterPlaceholder: "Filter…",
		emptyTitle: "No items available",
		emptyFiltered: "No pages or groups match your search.",
		emptyAdded: "All pages and groups have been added.",
		groupFallbackName: "Group {{number}}",
		pageFallbackName: "Page {{id}}",
		addItem: "Add {{name}}",
		added: "{{name}} added",
		addAnother: "Add another",
		done: "Done"
	},
	reorderDialog: {
		title: "Reorder Pages and Groups",
		description: "Drag and drop to reorder. Groups move as a single unit.",
		emptyTitle: "No pages found",
		emptyDescription: "Add some pages to get started with reordering.",
		remove: "Remove",
		cancel: "Cancel",
		save: "Save Changes"
	},
	thumbnail: {
		groupBadge_one: "Group ({{count}} page)",
		groupBadge_other: "Group ({{count}} pages)",
		groupFallbackName: "Group {{id}}",
		noPreview: "No preview",
		start: "Start",
		end: "End",
		draggingGroup: "Dragging Group...",
		draggingPage: "Dragging..."
	},
	notice: {
		cannotRemoveTitle: "Cannot remove item",
		lastPage: "Cannot remove the last page. At least one page is required.",
		ok: "OK"
	},
	image: {
		options: "Image options",
		edit: "Edit image",
		annotate: "Annotate"
	},
	dialog: { close: "Close" },
	options: {
		notSet: "Not set",
		decrease: "Decrease {{name}}",
		increase: "Increase {{name}}"
	},
	documentOptions: {
		title: "Document options",
		change: "Change {{name}}",
		on: "On",
		off: "Off"
	},
	brandInput: {
		addTitle: "Load a published kit",
		addDescription: "Paste a brandkit.json URL or JSON. This only changes this preview.",
		previewTitle: "Preview a brand version",
		previewDescription: "Enter a version, a published URL or a local path. Nothing is saved.",
		label: "Brand kit source",
		load: "Load",
		loading: "Loading…",
		timeout: "Brand kit loading timed out after 10 seconds. Try again."
	},
	inlineEdit: {
		toolbar: "Field",
		editText: "Edit text",
		openEditor: "Open editor",
		editMap: "Edit map",
		editChart: "Edit chart",
		editTable: "Edit table",
		bold: "Bold",
		italic: "Italic"
	}
}, vs = {
	toolbar: {
		pages_one: "{{count}} Seite",
		pages_other: "{{count}} Seiten",
		add: "Hinzufügen",
		addHint: "Seite oder Gruppe hinzufügen",
		reorder: "Anordnen",
		reorderHint: "Seiten und Gruppen per Drag-and-drop neu anordnen",
		position: "Position der Werkzeugleiste",
		topLeft: "Oben links",
		topRight: "Oben rechts",
		bottomLeft: "Unten links",
		bottomRight: "Unten rechts"
	},
	zoom: {
		menu: "Zoom",
		fitWidth: "An Breite anpassen",
		fitHeight: "An Höhe anpassen",
		fitPage: "Ganze Seite",
		zoomIn: "Vergrössern (25%)",
		zoomOut: "Verkleinern (25%)"
	},
	page: {
		count_one: "{{count}} Seite",
		count_other: "{{count}} Seiten",
		fallbackName: "Seite {{number}}",
		continued: "{{name}} (Fortsetzung)",
		options: "Seitenoptionen",
		groupOptions: "Gruppenoptionen",
		optionsMenu: "Optionen",
		rename: "Umbenennen",
		moveUp: "Nach oben",
		moveDown: "Nach unten",
		addPage: "Seite hinzufügen",
		duplicate: "Duplizieren",
		delete: "Löschen"
	},
	addDialog: {
		title: "Seite oder Gruppe hinzufügen",
		description: "Wählen Sie eine Seite oder Gruppe, die dem Dokument hinzugefügt wird.",
		filterLabel: "Seiten und Gruppen filtern",
		filterPlaceholder: "Filtern…",
		emptyTitle: "Keine Einträge verfügbar",
		emptyFiltered: "Keine Seiten oder Gruppen entsprechen Ihrer Suche.",
		emptyAdded: "Alle Seiten und Gruppen wurden bereits hinzugefügt.",
		groupFallbackName: "Gruppe {{number}}",
		pageFallbackName: "Seite {{id}}",
		addItem: "{{name}} hinzufügen",
		added: "{{name}} hinzugefügt",
		addAnother: "Weitere hinzufügen",
		done: "Fertig"
	},
	reorderDialog: {
		title: "Seiten und Gruppen anordnen",
		description: "Per Drag-and-drop neu anordnen. Gruppen werden als Einheit verschoben.",
		emptyTitle: "Keine Seiten gefunden",
		emptyDescription: "Fügen Sie Seiten hinzu, um sie anzuordnen.",
		remove: "Entfernen",
		cancel: "Abbrechen",
		save: "Änderungen speichern"
	},
	thumbnail: {
		groupBadge_one: "Gruppe ({{count}} Seite)",
		groupBadge_other: "Gruppe ({{count}} Seiten)",
		groupFallbackName: "Gruppe {{id}}",
		noPreview: "Keine Vorschau",
		start: "Anfang",
		end: "Ende",
		draggingGroup: "Gruppe wird verschoben…",
		draggingPage: "Wird verschoben…"
	},
	notice: {
		cannotRemoveTitle: "Eintrag kann nicht entfernt werden",
		lastPage: "Die letzte Seite kann nicht entfernt werden. Mindestens eine Seite ist erforderlich.",
		ok: "OK"
	},
	image: {
		options: "Bildoptionen",
		edit: "Bild bearbeiten",
		annotate: "Annotieren"
	},
	dialog: { close: "Schliessen" },
	options: {
		notSet: "Nicht festgelegt",
		decrease: "{{name}} verringern",
		increase: "{{name}} erhöhen"
	},
	documentOptions: {
		title: "Dokumentoptionen",
		change: "{{name}} ändern",
		on: "Ein",
		off: "Aus"
	},
	brandInput: {
		addTitle: "Veröffentlichtes Kit laden",
		addDescription: "brandkit.json-URL oder JSON einfügen. Nur diese Vorschau ändert sich.",
		previewTitle: "Markenversion ansehen",
		previewDescription: "Version, veröffentlichte URL oder lokalen Pfad eingeben. Es wird nichts gespeichert.",
		label: "Brand-Kit-Quelle",
		load: "Laden",
		loading: "Wird geladen…",
		timeout: "Das Laden wurde nach 10 Sekunden abgebrochen. Erneut versuchen."
	},
	inlineEdit: {
		toolbar: "Feld",
		editText: "Text bearbeiten",
		openEditor: "Editor öffnen",
		editMap: "Karte bearbeiten",
		editChart: "Diagramm bearbeiten",
		editTable: "Tabelle bearbeiten",
		bold: "Fett",
		italic: "Kursiv"
	}
}, ys = {
	toolbar: {
		pages_one: "{{count}} page",
		pages_many: "{{count}} pages",
		pages_other: "{{count}} pages",
		add: "Ajouter",
		addHint: "Ajouter une page ou un groupe",
		reorder: "Réorganiser",
		reorderHint: "Réorganiser les pages et les groupes par glisser-déposer",
		position: "Position de la barre d’outils",
		topLeft: "En haut à gauche",
		topRight: "En haut à droite",
		bottomLeft: "En bas à gauche",
		bottomRight: "En bas à droite"
	},
	zoom: {
		menu: "Zoom",
		fitWidth: "Ajuster à la largeur",
		fitHeight: "Ajuster à la hauteur",
		fitPage: "Page entière",
		zoomIn: "Zoom avant (25%)",
		zoomOut: "Zoom arrière (25%)"
	},
	page: {
		count_one: "{{count}} page",
		count_many: "{{count}} pages",
		count_other: "{{count}} pages",
		fallbackName: "Page {{number}}",
		continued: "{{name}} (suite)",
		options: "Options de la page",
		groupOptions: "Options du groupe",
		optionsMenu: "Options",
		rename: "Renommer",
		moveUp: "Monter",
		moveDown: "Descendre",
		addPage: "Ajouter une page",
		duplicate: "Dupliquer",
		delete: "Supprimer"
	},
	addDialog: {
		title: "Ajouter une page ou un groupe",
		description: "Sélectionnez une page ou un groupe à ajouter au document.",
		filterLabel: "Filtrer les pages et les groupes",
		filterPlaceholder: "Filtrer…",
		emptyTitle: "Aucun élément disponible",
		emptyFiltered: "Aucune page ni aucun groupe ne correspond à votre recherche.",
		emptyAdded: "Toutes les pages et tous les groupes ont déjà été ajoutés.",
		groupFallbackName: "Groupe {{number}}",
		pageFallbackName: "Page {{id}}",
		addItem: "Ajouter {{name}}",
		added: "{{name}} ajouté",
		addAnother: "En ajouter un autre",
		done: "Terminé"
	},
	reorderDialog: {
		title: "Réorganiser les pages et les groupes",
		description: "Réorganisez par glisser-déposer. Les groupes se déplacent d’un bloc.",
		emptyTitle: "Aucune page trouvée",
		emptyDescription: "Ajoutez des pages pour pouvoir les réorganiser.",
		remove: "Retirer",
		cancel: "Annuler",
		save: "Enregistrer les modifications"
	},
	thumbnail: {
		groupBadge_one: "Groupe ({{count}} page)",
		groupBadge_many: "Groupe ({{count}} pages)",
		groupBadge_other: "Groupe ({{count}} pages)",
		groupFallbackName: "Groupe {{id}}",
		noPreview: "Aucun aperçu",
		start: "Début",
		end: "Fin",
		draggingGroup: "Déplacement du groupe…",
		draggingPage: "Déplacement…"
	},
	notice: {
		cannotRemoveTitle: "Impossible de retirer l’élément",
		lastPage: "Impossible de retirer la dernière page. Au moins une page est requise.",
		ok: "OK"
	},
	image: {
		options: "Options de l’image",
		edit: "Modifier l’image",
		annotate: "Annoter"
	},
	dialog: { close: "Fermer" },
	options: {
		notSet: "Non défini",
		decrease: "Diminuer {{name}}",
		increase: "Augmenter {{name}}"
	},
	documentOptions: {
		title: "Options du document",
		change: "Modifier {{name}}",
		on: "Activé",
		off: "Désactivé"
	},
	brandInput: {
		addTitle: "Charger un kit publié",
		addDescription: "Collez une URL brandkit.json ou du JSON. Seul cet aperçu change.",
		previewTitle: "Aperçu d’une version",
		previewDescription: "Saisissez une version, une URL publiée ou un chemin local. Rien n’est enregistré.",
		label: "Source du kit de marque",
		load: "Charger",
		loading: "Chargement…",
		timeout: "Le chargement a dépassé 10 secondes. Réessayez."
	},
	inlineEdit: {
		toolbar: "Champ",
		editText: "Modifier le texte",
		openEditor: "Ouvrir l’éditeur",
		editMap: "Modifier la carte",
		editChart: "Modifier le graphique",
		editTable: "Modifier le tableau",
		bold: "Gras",
		italic: "Italique"
	}
}, bs = {
	toolbar: {
		pages_one: "{{count}} pagina",
		pages_many: "{{count}} pagine",
		pages_other: "{{count}} pagine",
		add: "Aggiungi",
		addHint: "Aggiungi una pagina o un gruppo",
		reorder: "Riordina",
		reorderHint: "Riordina pagine e gruppi trascinandoli",
		position: "Posizione della barra degli strumenti",
		topLeft: "In alto a sinistra",
		topRight: "In alto a destra",
		bottomLeft: "In basso a sinistra",
		bottomRight: "In basso a destra"
	},
	zoom: {
		menu: "Zoom",
		fitWidth: "Adatta alla larghezza",
		fitHeight: "Adatta all’altezza",
		fitPage: "Pagina intera",
		zoomIn: "Ingrandisci (25%)",
		zoomOut: "Riduci (25%)"
	},
	page: {
		count_one: "{{count}} pagina",
		count_many: "{{count}} pagine",
		count_other: "{{count}} pagine",
		fallbackName: "Pagina {{number}}",
		continued: "{{name}} (continua)",
		options: "Opzioni pagina",
		groupOptions: "Opzioni gruppo",
		optionsMenu: "Opzioni",
		rename: "Rinomina",
		moveUp: "Sposta su",
		moveDown: "Sposta giù",
		addPage: "Aggiungi pagina",
		duplicate: "Duplica",
		delete: "Elimina"
	},
	addDialog: {
		title: "Aggiungi pagina o gruppo",
		description: "Seleziona una pagina o un gruppo da aggiungere al documento.",
		filterLabel: "Filtra pagine e gruppi",
		filterPlaceholder: "Filtra…",
		emptyTitle: "Nessun elemento disponibile",
		emptyFiltered: "Nessuna pagina o gruppo corrisponde alla ricerca.",
		emptyAdded: "Tutte le pagine e i gruppi sono già stati aggiunti.",
		groupFallbackName: "Gruppo {{number}}",
		pageFallbackName: "Pagina {{id}}",
		addItem: "Aggiungi {{name}}",
		added: "{{name}} aggiunto",
		addAnother: "Aggiungi un altro",
		done: "Fatto"
	},
	reorderDialog: {
		title: "Riordina pagine e gruppi",
		description: "Trascina per riordinare. I gruppi si spostano come un unico blocco.",
		emptyTitle: "Nessuna pagina trovata",
		emptyDescription: "Aggiungi delle pagine per poterle riordinare.",
		remove: "Rimuovi",
		cancel: "Annulla",
		save: "Salva modifiche"
	},
	thumbnail: {
		groupBadge_one: "Gruppo ({{count}} pagina)",
		groupBadge_many: "Gruppo ({{count}} pagine)",
		groupBadge_other: "Gruppo ({{count}} pagine)",
		groupFallbackName: "Gruppo {{id}}",
		noPreview: "Nessuna anteprima",
		start: "Inizio",
		end: "Fine",
		draggingGroup: "Spostamento del gruppo…",
		draggingPage: "Spostamento…"
	},
	notice: {
		cannotRemoveTitle: "Impossibile rimuovere l’elemento",
		lastPage: "Impossibile rimuovere l’ultima pagina. È richiesta almeno una pagina.",
		ok: "OK"
	},
	image: {
		options: "Opzioni immagine",
		edit: "Modifica immagine",
		annotate: "Annota"
	},
	dialog: { close: "Chiudi" },
	options: {
		notSet: "Non impostato",
		decrease: "Diminuisci {{name}}",
		increase: "Aumenta {{name}}"
	},
	documentOptions: {
		title: "Opzioni del documento",
		change: "Modifica {{name}}",
		on: "Attivo",
		off: "Disattivo"
	},
	brandInput: {
		addTitle: "Carica un kit pubblicato",
		addDescription: "Incolla un URL brandkit.json o JSON. Cambia solo questa anteprima.",
		previewTitle: "Anteprima di una versione",
		previewDescription: "Inserisci una versione, un URL pubblicato o un percorso locale. Non viene salvato nulla.",
		label: "Origine del brand kit",
		load: "Carica",
		loading: "Caricamento…",
		timeout: "Il caricamento ha superato 10 secondi. Riprova."
	},
	inlineEdit: {
		toolbar: "Campo",
		editText: "Modifica testo",
		openEditor: "Apri editor",
		editMap: "Modifica mappa",
		editChart: "Modifica grafico",
		editTable: "Modifica tabella",
		bold: "Grassetto",
		italic: "Corsivo"
	}
}, J = (e) => typeof e == "object" && !!e && !Array.isArray(e), Y = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, xs = ["lang", "locale"];
function Ss(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function Cs(e, t) {
	for (let n of e ?? []) {
		let e = Ss(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function ws(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return Cs([
		e?.locale,
		e?.host,
		...xs.map((e) => n.get(e)),
		e?.documentLang
	]) ?? Cs(e?.navigatorLanguages ?? [], t) ?? "en";
}
function Ts(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = Ss(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
var Es = J;
function Ds(e, t) {
	if (!Es(t)) return e;
	let n = { ...Es(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = Es(r) && Es(n[e]) ? Ds(n[e], r) : r);
	return n;
}
function Os(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = Ss(e);
		t && Es(r) && (n[t] = Ds(n[t], r));
	}
	return n;
}
function ks(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!Es(e)) return String(e);
	let r = [
		t,
		Ss(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
function As(e, t) {
	return e == null || typeof e != "string" ? !0 : t == null ? !1 : typeof t == "string" ? e === t : Object.values(t).includes(e);
}
var js = /* @__PURE__ */ new Map();
function Ms(e, t) {
	if (!js.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		js.set(e, t);
	}
	let n = js.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function Ns(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!Es(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function Ps(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function Fs({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = Ss(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(Es);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${Ms(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = Ns(e, n);
			if (r !== void 0) return Ps(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var Is = [
	"de",
	"fr",
	"it",
	"en"
], Ls = {
	en: _s,
	de: vs,
	fr: ys,
	it: bs
}, Rs = r(null);
function zs(e) {
	return [...Is, ...Object.keys(e ?? {}).map((e) => Ss(e) ?? e)];
}
function Bs(e, t) {
	let n = zs(e);
	if (typeof window > "u") return ws({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return ws({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function Vs(e, t) {
	return {
		locale: e,
		t: Fs({
			locale: e,
			catalogs: Os(Ls, t),
			fallbackLocale: "en"
		}),
		localize: (t) => ks(t, e, "en")
	};
}
var Hs = null, Us = !1, Ws = /* @__PURE__ */ new Set();
function Gs() {
	if (Us || typeof window > "u") return;
	let e = window.$uhuu;
	typeof e?.listen == "function" && (Us = !0, Ts(e, (e) => {
		e !== Hs && (Hs = e, Ws.forEach((e) => e()));
	}));
}
Gs();
function Ks(e) {
	return Gs(), Ws.add(e), () => {
		Ws.delete(e);
	};
}
var qs = () => Hs;
function Js() {
	return g(Ks, qs, qs);
}
var Ys = null;
function Xs() {
	return (!Ys || Ys.key !== Hs) && (Ys = {
		key: Hs,
		runtime: Vs(Hs ?? Bs())
	}), Ys.runtime;
}
var Zs = () => () => {};
function Qs({ locale: e, translations: t }) {
	let n = Js(), r = g(Zs, () => Bs(t), () => ws({}, zs(t))), i = f(() => Ss(e) ?? n ?? r, [
		e,
		n,
		r
	]);
	return f(() => Vs(i, t), [i, t]);
}
function $s({ value: e, children: t }) {
	return /* @__PURE__ */ v(Rs.Provider, {
		value: e,
		children: t
	});
}
function ec() {
	let e = c(Rs);
	return Js(), e ?? Xs();
}
//#endregion
//#region src/uhuu/editor-shell/inline-edit-toolbar.tsx
var tc = 6, nc = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 uhuu:gap-1.5", rc = "uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:w-7 uhuu:p-0", ic = "#ff44cc", ac = {
	image: "image.edit",
	"image-editor": "image.edit",
	selectimage: "image.edit",
	"search-image": "image.edit",
	"ai-marketing-studio": "image.edit",
	annotation: "image.annotate",
	map: "inlineEdit.editMap",
	satellite: "inlineEdit.editMap",
	cadastral: "inlineEdit.editMap",
	chart: "inlineEdit.editChart",
	table: "inlineEdit.editTable",
	spreadsheet: "inlineEdit.editTable",
	dataloader: "inlineEdit.editTable"
}, oc = (e, t) => e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
function sc({ dialog: e, kind: t }) {
	return ac[String(e.type ?? t ?? (e.imagePath ? "image" : ""))] ?? "inlineEdit.openEditor";
}
function cc() {
	let e = g(lr, cr, () => null), { portalContainer: t } = ts(), { t: n } = ec(), [r, i] = h(null), a = Te();
	l(() => sr(a), [a]);
	let o = e?.binding, s = e?.surface ?? o;
	if (ce(() => {
		if (!o || !s) {
			i(null);
			return;
		}
		let e = 0, t = () => {
			if (!o.isConnected) {
				mr();
				return;
			}
			let n = s.getBoundingClientRect();
			i((e) => e && oc(e, n) ? e : n), e = requestAnimationFrame(t);
		};
		return t(), () => cancelAnimationFrame(e);
	}, [o, s]), !e || !r || !t) return null;
	let c = r.top > 40, u = e.editing && !!e.surface;
	return x(/* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("div", {
		"data-uhuu-selection-frame": !0,
		"aria-hidden": "true",
		className: "uhuu-screen-only uhuu:pointer-events-none uhuu:absolute",
		style: {
			left: r.left,
			top: r.top,
			width: r.width,
			height: r.height,
			outline: `2px solid ${ic}`,
			outlineOffset: -1
		}
	}), /* @__PURE__ */ y("div", {
		"data-uhuu-editor": !0,
		"data-uhuu-inline-toolbar": !0,
		role: "toolbar",
		"aria-label": n("inlineEdit.toolbar"),
		onMouseDown: (e) => e.preventDefault(),
		className: "uhuu-screen-only uhuu:absolute uhuu:flex uhuu:items-center uhuu:gap-0.5 uhuu:p-1 uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm",
		style: {
			left: Math.max(tc, r.left),
			top: c ? r.top - tc : r.bottom + tc,
			transform: c ? "translateY(-100%)" : void 0
		},
		children: [
			e.inPlace && /* @__PURE__ */ y(gs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: nc,
				onClick: () => yr("activate"),
				children: [/* @__PURE__ */ v(Uo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				}), n("inlineEdit.editText")]
			}),
			u && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(gs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: rc,
				"aria-label": n("inlineEdit.bold"),
				title: n("inlineEdit.bold"),
				onClick: () => yr("bold"),
				children: /* @__PURE__ */ v(ko, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				})
			}), /* @__PURE__ */ v(gs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: rc,
				"aria-label": n("inlineEdit.italic"),
				title: n("inlineEdit.italic"),
				onClick: () => yr("italic"),
				children: /* @__PURE__ */ v(zo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				})
			})] }),
			/* @__PURE__ */ y(gs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: nc,
				onClick: () => yr("open"),
				children: [/* @__PURE__ */ v(qo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				}), n(sc(e))]
			}),
			e.actions?.map((e) => /* @__PURE__ */ y(gs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: nc,
				disabled: e.disabled,
				onClick: () => yr({ action: e.id }),
				children: [e.icon && /* @__PURE__ */ v("span", {
					"aria-hidden": "true",
					className: "uhuu:inline-flex",
					children: e.icon
				}), e.label]
			}, e.id))
		]
	})] }), t);
}
//#endregion
//#region src/uhuu/appearance/appearance-core.js
var lc = "light", uc = ["light", "dark"], dc = "appearance", fc = "data-uhuu-appearance", pc = "appearance";
function mc(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return uc.includes(t) ? t : null;
}
function hc(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return mc(new URLSearchParams(e).get(dc));
	} catch {
		return null;
	}
}
function gc(e) {
	let t = e;
	if (typeof e == "string") {
		let n = e.trim();
		if (!n.startsWith("{")) return null;
		try {
			t = JSON.parse(n);
		} catch {
			return null;
		}
	}
	return !t || typeof t != "object" ? null : t.action === "shaked" || t.action === "appearance" ? mc(t.data?.appearance) : null;
}
function _c(e) {
	return e?.renderer ? lc : mc(e?.explicit) ?? mc(e?.host) ?? hc(e?.search) ?? "light";
}
function vc(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = ["loaded", pc].map((n) => e.listen(n, (e) => {
		let n = mc(e?.appearance);
		n && t(n);
	}));
	return () => n.forEach((e) => typeof e == "function" && e());
}
//#endregion
//#region src/uhuu/appearance/appearance-runtime.ts
var yc = null, bc = [], xc = !1, Sc = !1, Cc = /* @__PURE__ */ new Set();
function wc() {
	return typeof window > "u" ? null : window;
}
function Tc() {
	let e = wc();
	return {
		host: yc,
		search: e?.location?.search,
		renderer: !!e?.$uhuu_renderer
	};
}
function Ec() {
	return _c(Tc());
}
function Dc() {
	return _c({
		...Tc(),
		explicit: bc.at(-1)
	});
}
function Oc() {
	let e = wc()?.document?.documentElement;
	if (typeof e?.setAttribute != "function") return;
	let t = Dc();
	e.getAttribute?.("data-uhuu-appearance") !== t && e.setAttribute(fc, t);
}
function kc() {
	Oc(), Cc.forEach((e) => e());
}
function Ac(e) {
	e !== yc && (yc = e, kc());
}
function jc() {
	let e = wc();
	e && (!xc && typeof e.$uhuu?.listen == "function" && (xc = !0, vc(e.$uhuu, Ac)), !Sc && typeof e.addEventListener == "function" && (Sc = !0, e.addEventListener("message", (t) => {
		let n = e.parent;
		if (!n || n === e || t.source !== n) return;
		let r = gc(t.data);
		r && Ac(r);
	})));
}
jc(), Oc();
function Mc(e) {
	return jc(), Oc(), Cc.add(e), () => {
		Cc.delete(e);
	};
}
function Nc(e) {
	let t = g(Mc, Ec, Ec), n = mc(e);
	return ce(() => {
		if (n) return bc.push(n), kc(), () => {
			let e = bc.lastIndexOf(n);
			e !== -1 && bc.splice(e, 1), kc();
		};
	}, [n]), n && !Tc().renderer ? n : t;
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var Pc = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
}), Fc = r(!1);
function Ic() {
	return c(Fc);
}
function Lc() {
	let e = c(Pc), { locale: t } = ec(), n = Nc(), r = e.appearance ?? n;
	return f(() => ({
		...e,
		locale: t,
		appearance: r
	}), [
		e,
		t,
		r
	]);
}
function Rc() {
	let { interactive: e } = Lc();
	return !e;
}
function zc({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i, appearance: a, inlineEditing: o = !1 }) {
	let s = le(), c = n || de(), [u, d] = h(!s && t), p = Qs({
		locale: r,
		translations: i
	}), m = Nc(a), g = u && o && !s;
	l(() => g ? mr : void 0, [g]);
	let _ = f(() => ({
		interactive: u,
		setInteractive: d,
		enableDevTools: c,
		appearance: m
	}), [
		u,
		c,
		m
	]);
	return /* @__PURE__ */ v(Pc.Provider, {
		value: _,
		children: /* @__PURE__ */ v(Fc.Provider, {
			value: g,
			children: /* @__PURE__ */ v(we.Provider, {
				value: c,
				children: /* @__PURE__ */ v($s, {
					value: p,
					children: /* @__PURE__ */ v(cs, { children: /* @__PURE__ */ y(rs, { children: [/* @__PURE__ */ v("div", {
						"data-uhuu-interactive": u ? "" : void 0,
						"data-uhuu-inline-edit": g ? "" : void 0,
						style: { display: "contents" },
						children: e
					}), g && /* @__PURE__ */ v(cc, {})] }) })
				})
			})
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var Bc = Object.defineProperty, Vc = (e, t) => Bc(e, "name", {
	value: t,
	configurable: !0
}), Hc = !!(typeof window < "u" && window.document && window.document.createElement);
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Vc(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Vc(X, "composeEventHandlers");
function Uc(e) {
	if (!Hc) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Vc(Uc, "getOwnerWindow");
function Wc(e) {
	if (!Hc) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Vc(Wc, "getOwnerDocument");
function Gc(e, t = !1) {
	let { activeElement: n } = Wc(e);
	if (!n?.nodeName) return null;
	if (Kc(n) && n.contentDocument) return Gc(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Wc(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Vc(Gc, "getActiveElement");
function Kc(e) {
	return e.tagName === "IFRAME";
}
Vc(Kc, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var qc = Object.defineProperty, Jc = (e, t) => qc(e, "name", {
	value: t,
	configurable: !0
});
function Yc(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Jc(Yc, "setRef");
function Xc(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Yc(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Yc(e[t], null);
			}
		};
	};
}
Jc(Xc, "composeRefs");
function Zc(...t) {
	return e.useCallback(Xc(...t), t);
}
Jc(Zc, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var Qc = Object.defineProperty, $c = (e, t) => Qc(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function el(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ $c((t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ v(r.Provider, {
			value: a,
			children: n
		});
	}, "Provider");
	i.displayName = t + "Provider";
	function a(i, a = {}) {
		let { optional: o = !1 } = a, s = e.useContext(r);
		if (s) return s;
		if (n !== void 0) return n;
		if (!o) throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return $c(a, "useContext"), [i, a];
}
$c(el, "createContext");
// @__NO_SIDE_EFFECTS__
function tl(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ $c((n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ v(c.Provider, {
				value: l,
				children: i
			});
		}, "Provider");
		s.displayName = n + "Provider";
		function c(r, s, c = {}) {
			let { optional: l = !1 } = c, u = s?.[t]?.[o] || a, d = e.useContext(u);
			if (d) return d;
			if (i !== void 0) return i;
			if (!l) throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return $c(c, "useContext"), [s, c];
	}
	$c(i, "createContext");
	let a = /* @__PURE__ */ $c(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ $c(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, nl(a, ...n)];
}
$c(tl, "createContextScope");
function nl(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ $c(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ $c(function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		}, "useComposedScopes");
	}, "createScope");
	return r.scopeName = n.scopeName, r;
}
$c(nl, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var rl = globalThis?.document ? e.useLayoutEffect : () => {}, il = Object.defineProperty, al = (e, t) => il(e, "name", {
	value: t,
	configurable: !0
}), ol = e.useEffectEvent, sl = e.useInsertionEffect;
function cl(t) {
	if (typeof ol == "function") return ol(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof sl == "function" ? sl(() => {
		n.current = t;
	}) : rl(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
al(cl, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var ll = Object.defineProperty, ul = (e, t) => ll(e, "name", {
	value: t,
	configurable: !0
}), dl = e.useInsertionEffect || rl;
function fl({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ ul(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = pl({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = ml(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
ul(fl, "useControllableState");
function pl({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return dl(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
ul(pl, "useUncontrolledState");
function ml(e) {
	return typeof e == "function";
}
ul(ml, "isFunction");
var hl = Symbol("RADIX:SYNC_STATE");
function gl(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = cl(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === hl) return {
			...e,
			state: n.state
		};
		let r = t(e, n);
		return l && !Object.is(r.state, e.state) && u(r.state), r;
	}, ...d), m = f.state, h = e.useRef(m);
	e.useEffect(() => {
		h.current !== m && (h.current = m, l || u(m));
	}, [
		m,
		h,
		l
	]);
	let g = e.useMemo(() => a === void 0 ? f : {
		...f,
		state: a
	}, [f, a]);
	return e.useEffect(() => {
		l && !Object.is(a, f.state) && p({
			type: hl,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
ul(gl, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var _l = Object.defineProperty, vl = (e, t) => _l(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function yl(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		Dl(i) && typeof Ml == "function" && (i = Ml(i._payload)), e.Children.forEach(i, (e) => {
			if (Tl(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Dl(n) && typeof Ml == "function" && (n = Ml(n._payload)), o = Sl(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? wl(o) : void 0, u = Zc(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? jl(t) : Al(t));
			return i;
		}
		let d = Cl(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
vl(yl, "createSlot");
var bl = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function xl(e) {
	let t = /* @__PURE__ */ vl((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = bl, t;
}
vl(xl, "createSlottable");
var Sl = /* @__PURE__ */ vl((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function Cl(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = kl(a, i));
	}
	return {
		...e,
		...n
	};
}
vl(Cl, "mergeProps");
function wl(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
vl(wl, "getElementRef");
function Tl(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === bl;
}
vl(Tl, "isSlottable");
var El = Symbol.for("react.lazy");
function Dl(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === El && "_payload" in e && Ol(e._payload);
}
vl(Dl, "isLazyComponent");
function Ol(e) {
	return typeof e == "object" && !!e && "then" in e;
}
vl(Ol, "isPromiseLike");
function kl(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
vl(kl, "concatAriaDescribedby");
var Al = /* @__PURE__ */ vl((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), jl = /* @__PURE__ */ vl((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ml = e.use, Nl = Object.defineProperty, Pl = (e, t) => Nl(e, "name", {
	value: t,
	configurable: !0
}), Fl = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ yl(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function Il(e, t) {
	e && b.flushSync(() => e.dispatchEvent(t));
}
Pl(Il, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var Ll = Object.defineProperty, Rl = (e, t) => Ll(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function zl(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ tl(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ Rl((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ v(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ yl(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Zc(t, o(c, n).collectionRef);
		return /* @__PURE__ */ v(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ yl(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = Zc(n, s), l = o(d, r);
		return e.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ v(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(t + "CollectionConsumer", n);
		return e.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return Rl(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
Rl(zl, "createCollection");
var Bl = /* @__PURE__ */ new WeakMap(), Vl = class e extends Map {
	static {
		Rl(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Bl.set(this, !0);
	}
	set(e, t) {
		return Bl.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Wl(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
		if (s === this.size || r && s === this.size - 1 || s === -1) return this.set(t, n), this;
		let c = this.size + +!r;
		a < 0 && o++;
		let l = [...this.#e], u, d = !1;
		for (let e = o; e < c; e++) if (o === e) {
			let i = l[e];
			l[e] === t && (i = l[e + 1]), r && this.delete(t), u = this.get(i), this.set(t, n);
		} else {
			!d && l[e - 1] === t && (d = !0);
			let n = l[d ? e : e - 1], r = u;
			u = this.get(n), this.delete(n), this.set(n, r);
		}
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r + 1, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = Hl(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Hl(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Hl(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = 0, i = n ?? this.at(0);
		for (let n of this) i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [
			i,
			n,
			r,
			this
		]), r++;
		return i;
	}
	reduceRight(...e) {
		let [t, n] = e, r = n ?? this.at(-1);
		for (let n = this.size - 1; n >= 0; n--) {
			let i = this.at(n);
			r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [
				r,
				i,
				n,
				this
			]);
		}
		return r;
	}
	toSorted(t) {
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e(), i = this.size - 1;
		if (t === void 0) return r;
		t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1);
		for (let e = t; e <= i; e++) {
			let t = this.keyAt(e), n = this.get(t);
			r.set(t, n);
		}
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function Hl(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = Ul(e, t);
	return n === -1 ? void 0 : e[n];
}
Rl(Hl, "at");
function Ul(e, t) {
	let n = e.length, r = Wl(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
Rl(Ul, "toSafeIndex");
function Wl(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Rl(Wl, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Gl(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ tl(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Vl(),
		setItemMap: /* @__PURE__ */ Rl(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ Rl(({ state: e, ...t }) => e ? /* @__PURE__ */ v(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ v(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ Rl((e) => {
		let t = g();
		return /* @__PURE__ */ v(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ Rl((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = Zc(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = Yl(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ v(a, {
			scope: n,
			itemMap: u,
			setItemMap: d,
			collectionRef: l,
			collectionRefObject: o,
			collectionElement: s,
			children: r
		});
	}, "CollectionProviderImpl");
	l.displayName = n + "Impl";
	let u = t + "CollectionSlot", d = /* @__PURE__ */ yl(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Zc(t, o(u, n).collectionRef);
		return /* @__PURE__ */ v(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ yl(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = Zc(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Kl(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(Jl) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(Jl)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new Vl(e)));
			};
		}, [
			c,
			h,
			d
		]), /* @__PURE__ */ v(m, {
			"data-radix-collection-item": "",
			ref: u,
			children: i
		});
	});
	h.displayName = p;
	function g() {
		return e.useState(new Vl());
	}
	Rl(g, "useInitCollection");
	function _(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return Rl(_, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: _,
		useInitCollection: g
	}];
}
Rl(Gl, "createCollection");
function Kl(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
Rl(Kl, "shallowEqual");
function ql(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Rl(ql, "isElementPreceding");
function Jl(e, t) {
	return !e[1].element || !t[1].element ? 0 : ql(e[1].element, t[1].element) ? -1 : 1;
}
Rl(Jl, "sortByDocumentPosition");
function Yl(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
Rl(Yl, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var Xl = Object.defineProperty, Zl = (e, t) => Xl(e, "name", {
	value: t,
	configurable: !0
}), Ql = {
	LTR: "ltr",
	RTL: "rtl"
}, $l = e.createContext(void 0);
function eu(t) {
	let n = e.useContext($l);
	return t || n || Ql.LTR;
}
Zl(eu, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var tu = Object.defineProperty, nu = (e, t) => tu(e, "name", {
	value: t,
	configurable: !0
});
function ru(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
nu(ru, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var iu = Object.defineProperty, au = (e, t) => iu(e, "name", {
	value: t,
	configurable: !0
}), ou = "dismissableLayer.update", su = "dismissableLayer.pointerDownOutside", cu = "dismissableLayer.focusOutside", lu, uu = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), du = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ au(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(uu), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = Zc(n, p), _ = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? _.indexOf(y) : -1, x = f ? _.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = mu((e) => {
		o?.(e), c?.(e), e.defaultPrevented || l?.();
	}, {
		ownerDocument: m,
		deferPointerDownOutside: i,
		isDeferredPointerDownOutsideRef: w,
		dismissableSurfaces: d.dismissableSurfaces,
		shouldHandlePointerDownOutside: e.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...d.branches].some((t) => t.contains(e));
			return C && !t;
		}, [d.branches, C])
	}), E = hu((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === _.length - 1 : !1, O = ru((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (lu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), gu(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = lu));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), gu());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ au(() => h({}), "handleUpdate");
		return document.addEventListener(ou, e), () => document.removeEventListener(ou, e);
	}, []), /* @__PURE__ */ v(Fl.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: X(t.onFocusCapture, E.onFocusCapture),
		onBlurCapture: X(t.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: X(t.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function fu() {
	let t = e.useContext(uu), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
au(fu, "useDismissableLayerSurface");
var pu = /* @__PURE__ */ au(() => !0, "IS_TRUE");
function mu(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = pu } = n, c = ru(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		au(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		au(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		au(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		au(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ au((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || _u(su, c, p, { discrete: !0 });
				};
				if (au(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
					r.removeEventListener("click", f.current), e(), l.current = !1;
					return;
				}
				let p = { originalEvent: n };
				u.current = !0, a.current = i && n.button === 0, d.current.clear(), !i || n.button !== 0 ? o() : (r.removeEventListener("click", f.current), f.current = o, r.addEventListener("click", f.current, { once: !0 }));
			} else r.removeEventListener("click", f.current), e();
			l.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) r.addEventListener(e, n, !0), r.addEventListener(e, p);
		let g = window.setTimeout(() => {
			r.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), r.removeEventListener("pointerdown", m), r.removeEventListener("click", f.current);
			for (let e of h) r.removeEventListener(e, n, !0), r.removeEventListener(e, p);
		};
	}, [
		r,
		c,
		i,
		a,
		o,
		s
	]), { onPointerDownCapture: /* @__PURE__ */ au(() => l.current = !0, "onPointerDownCapture") };
}
au(mu, "usePointerDownOutside");
function hu(t, n = globalThis?.document) {
	let r = ru(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ au((e) => {
			e.target && !i.current && _u(cu, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ au(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ au(() => i.current = !1, "onBlurCapture")
	};
}
au(hu, "useFocusOutside");
function gu() {
	let e = new CustomEvent(ou);
	document.dispatchEvent(e);
}
au(gu, "dispatchUpdate");
function _u(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Il(i, a) : i.dispatchEvent(a);
}
au(_u, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var vu = Object.defineProperty, yu = (e, t) => vu(e, "name", {
	value: t,
	configurable: !0
}), bu = 0, xu = null;
function Su(e) {
	return Cu(), e.children;
}
yu(Su, "FocusGuards");
function Cu() {
	e.useEffect(() => {
		xu ||= {
			start: wu(),
			end: wu()
		};
		let { start: e, end: t } = xu;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), bu++, () => {
			bu === 1 && (xu?.start.remove(), xu?.end.remove(), xu = null), bu = Math.max(0, bu - 1);
		};
	}, []);
}
yu(Cu, "useFocusGuards");
function wu() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
yu(wu, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Tu = Object.defineProperty, Eu = (e, t) => Tu(e, "name", {
	value: t,
	configurable: !0
}), Du = "focusScope.autoFocusOnMount", Ou = "focusScope.autoFocusOnUnmount", ku = {
	bubbles: !1,
	cancelable: !0
}, Au = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Eu(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = ru(o), f = ru(s), p = e.useRef(null), m = Zc(n, u), h = e.useRef(a);
	e.useEffect(() => {
		h.current = a;
	});
	let g = e.useCallback((e) => e ? l?.contains(e) ? !0 : !!h.current?.some((t) => t.contains(e)) : !1, [l]), _ = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (_.paused || !l) return;
				let t = e.target;
				g(t) ? p.current = t : Vu(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || Vu(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Vu(l);
			};
			Eu(e, "handleFocusIn"), Eu(t, "handleFocusOut"), Eu(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		l,
		_.paused,
		g
	]), e.useEffect(() => {
		if (l) {
			Hu.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Du, ku);
				l.addEventListener(Du, d), l.dispatchEvent(t), t.defaultPrevented || (Fu(Gu(Lu(l)), { select: !0 }), document.activeElement === e && Vu(l));
			}
			return () => {
				l.removeEventListener(Du, d), setTimeout(() => {
					let t = new CustomEvent(Ou, ku);
					l.addEventListener(Ou, f), l.dispatchEvent(t), t.defaultPrevented || Vu(e ?? document.body, { select: !0 }), l.removeEventListener(Ou, f), Hu.remove(_);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		_
	]);
	let y = e.useCallback((e) => {
		if (!r && !i || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Iu(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Vu(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Vu(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ v(Fl.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), ju = e.createContext(null);
function Mu({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ v(ju.Provider, {
		value: e,
		children: t
	}) : t;
}
Eu(Mu, "FocusScopeBranchProvider");
function Nu() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ Eu((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Eu((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Eu(Nu, "useFocusScopeBranchRegistry");
function Pu(t) {
	let n = e.useContext(ju);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
Eu(Pu, "useFocusScopeBranch");
function Fu(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Vu(r, { select: t }), document.activeElement !== n) return;
}
Eu(Fu, "focusFirst");
function Iu(e) {
	let t = Lu(e);
	return [Ru(t, e), Ru(t.reverse(), e)];
}
Eu(Iu, "getTabbableEdges");
function Lu(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Eu((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Eu(Lu, "getTabbableCandidates");
function Ru(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : zu(r, { upTo: t }))) return r;
}
Eu(Ru, "findVisible");
function zu(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Eu(zu, "isHidden");
function Bu(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Eu(Bu, "isSelectableInput");
function Vu(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Bu(e) && t && e.select();
	}
}
Eu(Vu, "focus");
var Hu = Uu();
function Uu() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Wu(e, t), e.unshift(t);
		},
		remove(t) {
			e = Wu(e, t), e[0]?.resume();
		}
	};
}
Eu(Uu, "createFocusScopesStack");
function Wu(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Eu(Wu, "arrayRemove");
function Gu(e) {
	return e.filter((e) => e.tagName !== "A");
}
Eu(Gu, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Ku = Object.defineProperty, qu = (e, t) => Ku(e, "name", {
	value: t,
	configurable: !0
}), Ju = e.useId || (() => void 0), Yu = 0;
function Xu(t) {
	let [n, r] = e.useState(Ju());
	return rl(() => {
		t || r((e) => e ?? String(Yu++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
qu(Xu, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Zu = [
	"top",
	"right",
	"bottom",
	"left"
], Qu = Math.min, $u = Math.max, ed = Math.round, td = Math.floor, nd = (e) => ({
	x: e,
	y: e
}), rd = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function id(e, t, n) {
	return $u(e, Qu(t, n));
}
function ad(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function od(e) {
	return e.split("-")[0];
}
function sd(e) {
	return e.split("-")[1];
}
function cd(e) {
	return e === "x" ? "y" : "x";
}
function ld(e) {
	return e === "y" ? "height" : "width";
}
function ud(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function dd(e) {
	return cd(ud(e));
}
function fd(e, t, n) {
	n === void 0 && (n = !1);
	let r = sd(e), i = dd(e), a = ld(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = xd(o)), [o, xd(o)];
}
function pd(e) {
	let t = xd(e);
	return [
		md(e),
		t,
		md(t)
	];
}
function md(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var hd = ["left", "right"], gd = ["right", "left"], _d = ["top", "bottom"], vd = ["bottom", "top"];
function yd(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? gd : hd : t ? hd : gd;
		case "left":
		case "right": return t ? _d : vd;
		default: return [];
	}
}
function bd(e, t, n, r) {
	let i = sd(e), a = yd(od(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(md)))), a;
}
function xd(e) {
	let t = od(e);
	return rd[t] + e.slice(t.length);
}
function Sd(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Cd(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Sd(e);
}
function wd(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Td(e, t, n) {
	let { reference: r, floating: i } = e, a = ud(t), o = dd(t), s = ld(o), c = od(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = sd(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Ed(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ad(t, e), p = Cd(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = wd(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = wd(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Dd = 50, Od = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ed
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Td(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Dd && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Td(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, kd = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ad(e, t) || {};
		if (l == null) return {};
		let d = Cd(u), f = {
			x: n,
			y: r
		}, p = dd(i), m = ld(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Qu(d[_], T), D = Qu(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = id(E, k, O), j = !c.arrow && sd(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), Ad = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ad(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = od(r), _ = ud(o), v = od(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [xd(o)] : pd(o)), x = p !== "none";
			!d && x && b.push(...bd(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = fd(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === ud(t) || T.every((e) => ud(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = ud(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function jd(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Md(e) {
	return Zu.some((t) => e[t] >= 0);
}
var Nd = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = ad(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = jd(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Md(e)
					} };
				}
				case "escaped": {
					let e = jd(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Md(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Pd = /*#__PURE__*/ new Set(["left", "top"]);
async function Fd(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = od(n), s = sd(n), c = ud(n) === "y", l = Pd.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ad(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Id = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Fd(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Ld = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = ad(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = ud(i), p = cd(f), m = u[p], h = u[f], g = (e, t) => id(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Rd = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ad(e, t), u = {
				x: n,
				y: r
			}, d = ud(i), f = cd(d), p = u[f], m = u[d], h = ad(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Pd.has(od(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, zd = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = ad(e, t), c = await i.detectOverflow(t, s), l = od(n), u = sd(n), d = ud(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Qu(p - c[m], g), y = Qu(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * $u(c.left, c.right) : S = p - 2 * $u(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Bd() {
	return typeof window < "u";
}
function Vd(e) {
	return Wd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Hd(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ud(e) {
	return ((Wd(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Wd(e) {
	return Bd() ? e instanceof Node || e instanceof Hd(e).Node : !1;
}
function Gd(e) {
	return Bd() ? e instanceof Element || e instanceof Hd(e).Element : !1;
}
function Kd(e) {
	return Bd() ? e instanceof HTMLElement || e instanceof Hd(e).HTMLElement : !1;
}
function qd(e) {
	return !Bd() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Hd(e).ShadowRoot;
}
function Jd(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = of(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Yd(e) {
	return /^(table|td|th)$/.test(Vd(e));
}
function Xd(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Zd = /transform|translate|scale|rotate|perspective|filter/, Qd = /paint|layout|strict|content/, $d = (e) => !!e && e !== "none", ef;
function tf(e) {
	let t = Gd(e) ? of(e) : e;
	return $d(t.transform) || $d(t.translate) || $d(t.scale) || $d(t.rotate) || $d(t.perspective) || !rf() && ($d(t.backdropFilter) || $d(t.filter)) || Zd.test(t.willChange || "") || Qd.test(t.contain || "");
}
function nf(e) {
	let t = cf(e);
	for (; Kd(t) && !af(t);) {
		if (tf(t)) return t;
		if (Xd(t)) return null;
		t = cf(t);
	}
	return null;
}
function rf() {
	return ef ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), ef;
}
function af(e) {
	return /^(html|body|#document)$/.test(Vd(e));
}
function of(e) {
	return Hd(e).getComputedStyle(e);
}
function sf(e) {
	return Gd(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function cf(e) {
	if (Vd(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || qd(e) && e.host || Ud(e);
	return qd(t) ? t.host : t;
}
function lf(e) {
	let t = cf(e);
	return af(t) ? (e.ownerDocument || e).body : Kd(t) && Jd(t) ? t : lf(t);
}
function uf(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = lf(e), i = r === e.ownerDocument?.body, a = Hd(r);
	if (i) {
		let e = df(a);
		return t.concat(a, a.visualViewport || [], Jd(r) ? r : [], e && n ? uf(e) : []);
	}
	return t.concat(r, uf(r, [], n));
}
function df(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ff(e) {
	let t = of(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Kd(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ed(n) !== a || ed(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function pf(e) {
	return Gd(e) ? e : e.contextElement;
}
function mf(e) {
	let t = pf(e);
	if (!Kd(t)) return nd(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ff(t), o = (a ? ed(n.width) : n.width) / r, s = (a ? ed(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var hf = /*#__PURE__*/ nd(0);
function gf(e) {
	let t = Hd(e);
	return !rf() || !t.visualViewport ? hf : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function _f(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Hd(e);
}
function vf(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = pf(e), o = nd(1);
	t && (r ? Gd(r) && (o = mf(r)) : o = mf(e));
	let s = _f(a, n, r) ? gf(a) : nd(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Hd(a), t = Gd(r) ? Hd(r) : r, n = e, i = df(n);
		for (; i && t !== n;) {
			let e = mf(i), t = i.getBoundingClientRect(), r = of(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Hd(i), i = df(n);
		}
	}
	return wd({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function yf(e, t) {
	let n = sf(e).scrollLeft;
	return t ? t.left + n : vf(Ud(e)).left + n;
}
function bf(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - yf(e, n),
		y: n.top + t.scrollTop
	};
}
function xf(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ud(r), s = t ? Xd(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = nd(1), u = nd(0), d = Kd(r);
	if ((d || !a) && ((Vd(r) !== "body" || Jd(o)) && (c = sf(r)), d)) {
		let e = vf(r);
		l = mf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? bf(o, c) : nd(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Sf(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Cf(e) {
	let t = sf(e), n = e.ownerDocument.body, r = $u(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = $u(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + yf(e), o = -t.scrollTop;
	return of(n).direction === "rtl" && (a += $u(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var wf = 25;
function Tf(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Hd(e), a = Ud(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !rf() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (yf(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= wf && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ef(e, t) {
	let n = vf(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = mf(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Df(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Tf(e, n, t);
	else if (t === "document") r = Cf(Ud(e));
	else if (Gd(t)) r = Ef(t, n);
	else {
		let n = gf(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return wd(r);
}
function Of(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = uf(e, [], !1).filter((e) => Gd(e) && Vd(e) !== "body"), i = null, a = of(e).position === "fixed", o = a ? cf(e) : e;
	for (; Gd(o) && !af(o);) {
		let e = of(o), t = tf(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = cf(o);
	}
	return t.set(e, r), r;
}
function kf(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Xd(t) ? [] : Of(t, this._c) : [].concat(n), r], o = Df(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Df(t, a[e], i);
		s = $u(n.top, s), c = Qu(n.right, c), l = Qu(n.bottom, l), u = $u(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Af(e) {
	let { width: t, height: n } = ff(e);
	return {
		width: t,
		height: n
	};
}
function jf(e, t, n) {
	let r = Kd(t), i = Ud(t), a = n === "fixed", o = vf(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = nd(0);
	if ((r || !a) && ((Vd(t) !== "body" || Jd(i)) && (s = sf(t)), r)) {
		let e = vf(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = yf(i));
	let l = i && !r && !a ? bf(i, s) : nd(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Mf(e) {
	return of(e).position === "static";
}
function Nf(e, t) {
	if (!Kd(e) || of(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ud(e) === n && (n = n.ownerDocument.body), n;
}
function Pf(e, t) {
	let n = Hd(e);
	if (Xd(e)) return n;
	if (!Kd(e)) {
		let t = cf(e);
		for (; t && !af(t);) {
			if (Gd(t) && !Mf(t)) return t;
			t = cf(t);
		}
		return n;
	}
	let r = Nf(e, t);
	for (; r && Yd(r) && Mf(r);) r = Nf(r, t);
	return r && af(r) && Mf(r) && !tf(r) ? n : r || nf(e) || n;
}
var Ff = async function(e) {
	let t = this.getOffsetParent || Pf, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: jf(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function If(e) {
	return of(e).direction === "rtl";
}
var Lf = {
	convertOffsetParentRelativeRectToViewportRelativeRect: xf,
	getDocumentElement: Ud,
	getClippingRect: kf,
	getOffsetParent: Pf,
	getElementRects: Ff,
	getClientRects: Sf,
	getDimensions: Af,
	getScale: mf,
	isElement: Gd,
	isRTL: If
};
function Rf(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zf(e, t, n) {
	let r = null, i, a = Ud(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = td(d), h = td(a.clientWidth - (u + f)), g = td(a.clientHeight - (d + p)), _ = td(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: $u(0, Qu(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Rf(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = Hd(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Bf(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = pf(e), u = i || a ? [...l ? uf(l) : [], ...t ? uf(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? zf(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? vf(e) : null;
	c && g();
	function g() {
		let t = vf(e);
		h && !Rf(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Vf = Id, Hf = Ld, Uf = Ad, Wf = zd, Gf = Nd, Kf = kd, qf = Rd, Jf = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Lf,
		...i.platform,
		_c: r
	};
	return Od(e, t, {
		...i,
		platform: a
	});
}, Yf = typeof document < "u" ? d : function() {};
function Xf(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Xf(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Xf(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Zf(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qf(e, t) {
	let n = Zf(e);
	return Math.round(t * n) / n;
}
function $f(t) {
	let n = e.useRef(t);
	return Yf(() => {
		n.current = t;
	}), n;
}
function ep(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	Xf(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, v(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = $f(l), k = $f(a), A = $f(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Jf(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Xf(E.current, t) && (E.current = t, b.flushSync(() => {
				f(t);
			}));
		});
	}, [
		p,
		n,
		r,
		k,
		A
	]);
	Yf(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	Yf(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Yf(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: y,
		setFloating: x
	}), [y, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = Qf(P.floating, d.x), n = Qf(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Zf(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		P.floating,
		d.x,
		d.y
	]);
	return e.useMemo(() => ({
		...d,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		d,
		j,
		N,
		P,
		F
	]);
}
var tp = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Kf({
				element: r.current,
				padding: i
			}).fn(n) : r ? Kf({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, np = (e, t) => {
	let n = Vf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, rp = (e, t) => {
	let n = Hf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ip = (e, t) => ({
	fn: qf(e).fn,
	options: [e, t]
}), ap = (e, t) => {
	let n = Uf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, op = (e, t) => {
	let n = Wf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, sp = (e, t) => {
	let n = Gf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, cp = (e, t) => {
	let n = tp(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, lp = Object.defineProperty, up = (e, t) => lp(e, "name", {
	value: t,
	configurable: !0
});
function dp(t) {
	let [n, r] = e.useState(void 0);
	return rl(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = 0, n = new ResizeObserver((n) => {
				if (!Array.isArray(n) || !n.length) return;
				let i = n[0];
				window.cancelAnimationFrame(e), e = window.requestAnimationFrame(() => {
					let e, n;
					if ("borderBoxSize" in i) {
						let t = i.borderBoxSize, r = Array.isArray(t) ? t[0] : t;
						e = r.inlineSize, n = r.blockSize;
					} else e = t.offsetWidth, n = t.offsetHeight;
					r({
						width: e,
						height: n
					});
				});
			});
			return n.observe(t, { box: "border-box" }), () => {
				window.cancelAnimationFrame(e), n.unobserve(t);
			};
		}
		r(void 0);
	}, [t]), n;
}
up(dp, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var fp = Object.defineProperty, pp = (e, t) => fp(e, "name", {
	value: t,
	configurable: !0
}), mp = {
	Partial: "partial",
	Always: "always"
}, hp = {
	Optimized: "optimized",
	Always: "always"
}, gp = "Popper", [_p, vp] = /* @__PURE__ */ tl(gp), [yp, bp] = _p(gp), xp = /* @__PURE__ */ pp((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ v(yp, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Sp = "PopperAnchor", Cp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pp(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = bp(Sp, r), s = e.useRef(null), c = o.onAnchorChange, l = Zc(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && Ap(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ v(Fl.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), wp = "PopperContent", [Tp, Ep] = _p(wp), Dp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pp(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = mp.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = hp.Optimized, onPlaced: h, ...g } = t, _ = bp(wp, r), [y, b] = e.useState(null), x = Zc(n, b), [S, C] = e.useState(null), w = dp(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(Op),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = ep({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ pp((...e) => Bf(...e, { animationFrame: m === hp.Always }), "whileElementsMounted"),
		elements: { reference: _.anchor },
		middleware: [
			np({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && rp({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === mp.Partial ? ip() : void 0,
				...j
			}),
			l && ap({ ...j }),
			op({
				...j,
				apply: /* @__PURE__ */ pp(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && cp({
				element: S,
				padding: c
			}),
			kp({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && sp({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = _.setPlacementState;
	rl(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [ee, te] = Ap(P), R = ru(h);
	rl(() => {
		F && R?.();
	}, [F, R]);
	let z = I.arrow?.x, B = I.arrow?.y, ne = I.arrow?.centerOffset !== 0, [re, V] = e.useState();
	return rl(() => {
		y && V(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ v("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: re,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ v(Tp, {
			scope: r,
			placedSide: ee,
			placedAlign: te,
			onArrowChange: C,
			arrowX: z,
			arrowY: B,
			shouldHideArrow: ne,
			children: /* @__PURE__ */ v(Fl.div, {
				"data-side": ee,
				"data-align": te,
				...g,
				ref: x,
				style: {
					...g.style,
					animation: F ? g.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function Op(e) {
	return e !== null;
}
pp(Op, "isNotNull");
var kp = /* @__PURE__ */ pp((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Ap(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function Ap(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
pp(Ap, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var jp = Object.defineProperty, Mp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => jp(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	rl(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? b.createPortal(/* @__PURE__ */ v(Fl.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), Np = Object.defineProperty, Pp = (e, t) => Np(e, "name", {
	value: t,
	configurable: !0
});
function Fp(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
Pp(Fp, "useStateMachine");
var Ip = /* @__PURE__ */ Pp((t) => {
	let { present: n, children: r } = t, i = Lp(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = zp(i.ref, Vp(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Lp(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = Fp(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		c === "mounted" ? (o.current = s.current ?? Bp(i.current), s.current = void 0) : o.current = "none";
	}, [c]), rl(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Bp(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), rl(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ Pp((r) => {
				let o = Bp(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Pp((e) => {
				e.target === n && (o.current = Bp(i.current));
			}, "handleAnimationStart");
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		}
		l("ANIMATION_END");
	}, [n, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: e.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				i.current = t, s.current = Bp(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
Pp(Lp, "usePresence");
function Rp(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Pp(Rp, "setRef");
function zp(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = Rp(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : Rp(t[e], null);
			}
		};
	}, []);
}
Pp(zp, "useStableComposedRefs");
function Bp(e) {
	return e?.animationName || "none";
}
Pp(Bp, "getAnimationName");
function Vp(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Pp(Vp, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var Hp = Object.defineProperty, Up = (e, t) => Hp(e, "name", {
	value: t,
	configurable: !0
}), Wp = !1;
function Gp() {
	let [t, n] = e.useState(Wp);
	return e.useEffect(() => {
		Wp || (Wp = !0, n(!0));
	}, []), t;
}
Up(Gp, "useIsHydrated");
var Kp = e.useSyncExternalStore;
function qp() {
	return () => {};
}
Up(qp, "subscribe");
function Jp() {
	return Kp(qp, () => !0, () => !1);
}
Up(Jp, "useIsHydratedModern");
var Yp = typeof Kp == "function" ? Jp : Gp, Xp = Object.defineProperty, Zp = (e, t) => Xp(e, "name", {
	value: t,
	configurable: !0
}), Qp = "rovingFocusGroup.onEntryFocus", $p = {
	bubbles: !1,
	cancelable: !0
}, em = "RovingFocusGroup", [tm, nm, rm] = /* @__PURE__ */ zl(em), [im, am] = /* @__PURE__ */ tl(em, [rm]), om = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, sm = {
	LTR: "ltr",
	RTL: "rtl"
}, [cm, lm] = im(em), um = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Zp(function(e, t) {
	return /* @__PURE__ */ v(tm.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ v(tm.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ v(dm, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), dm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Zp(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = Zc(n, p), h = eu(o), [g, _] = fl({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: em
	}), [y, b] = e.useState(!1), x = ru(u), S = nm(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(Qp, x), () => e.removeEventListener(Qp, x);
	}, [x]), /* @__PURE__ */ v(cm, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ v(Fl.div, {
			tabIndex: y || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: X(t.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: X(t.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !y) {
					let t = new CustomEvent(Qp, $p);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						_m([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				C.current = !1;
			}),
			onBlur: X(t.onBlur, () => b(!1))
		})
	});
}, "RovingFocusGroupImpl")), fm = "RovingFocusGroupItem", pm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Zp(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Xu(), u = o || l, d = lm(fm, r), f = d.currentTabStopId === u, p = nm(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d, _ = Yp();
	return rl(() => {
		if (_ && i) return m(), () => h();
	}, [
		_,
		i,
		m,
		h
	]), e.useEffect(() => {
		if (!_ && i) return m(), () => h();
	}, [
		_,
		i,
		m,
		h
	]), /* @__PURE__ */ v(tm.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ v(Fl.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: X(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: X(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: X(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = gm(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? vm(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => _m(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), mm = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function hm(e, t) {
	return t === sm.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
Zp(hm, "getDirectionAwareKey");
function gm(e, t, n) {
	let r = hm(e.key, n);
	if (!(t === om.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === om.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return mm[r];
}
Zp(gm, "getFocusIntent");
function _m(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Zp(_m, "focusFirst");
function vm(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Zp(vm, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var ym = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, bm = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap(), Sm = {}, Cm = 0, wm = function(e) {
	return e && (e.host || wm(e.parentNode));
}, Tm = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = wm(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Em = function(e, t, n, r) {
	var i = Tm(t, Array.isArray(e) ? e : [e]);
	Sm[n] || (Sm[n] = /* @__PURE__ */ new WeakMap());
	var a = Sm[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (bm.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				bm.set(e, c), a.set(e, l), o.push(e), c === 1 && i && xm.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Cm++, function() {
		o.forEach(function(e) {
			var t = bm.get(e) - 1, i = a.get(e) - 1;
			bm.set(e, t), a.set(e, i), t || (xm.has(e) || e.removeAttribute(r), xm.delete(e)), i || e.removeAttribute(n);
		}), Cm--, Cm || (bm = /* @__PURE__ */ new WeakMap(), bm = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap(), Sm = {});
	};
}, Dm = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ym(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Em(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Om = function() {
	return Om = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Om.apply(this, arguments);
};
function km(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Am(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var jm = "right-scroll-bar-position", Mm = "width-before-scroll-bar", Nm = "with-scroll-bars-hidden", Pm = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Fm(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function Im(e, t) {
	var n = h(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Lm = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Rm = /* @__PURE__ */ new WeakMap();
function zm(e, t) {
	var n = Im(t || null, function(t) {
		return e.forEach(function(e) {
			return Fm(e, t);
		});
	});
	return Lm(function() {
		var t = Rm.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Fm(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Fm(e, a);
			});
		}
		Rm.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Bm(e) {
	return e;
}
function Vm(e, t) {
	t === void 0 && (t = Bm);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Hm(e) {
	e === void 0 && (e = {});
	var t = Vm(null);
	return t.options = Om({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var Um = function(t) {
	var n = t.sideCar, r = km(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Om({}, r));
};
Um.isSideCarExport = !0;
function Wm(e, t) {
	return e.useMedium(t), Um;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var Gm = Hm(), Km = function() {}, qm = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Km,
		onWheelCapture: Km,
		onTouchMoveCapture: Km
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = km(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = zm([r, n]), w = Om(Om({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Gm,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Om(Om({}, w), { ref: C })) : e.createElement(y, Om({}, w, {
		className: l,
		ref: C
	}), c));
});
qm.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, qm.classNames = {
	fullWidth: Mm,
	zeroRight: jm
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Jm = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ym() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Jm();
	return t && e.setAttribute("nonce", t), e;
}
function Xm(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Zm(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Qm = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ym()) && (Xm(t, n), Zm(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, $m = function() {
	var t = Qm();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, eh = function() {
	var e = $m();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, th = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, nh = function(e) {
	return parseInt(e || "", 10) || 0;
}, rh = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		nh(n),
		nh(r),
		nh(i)
	];
}, ih = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return th;
	var t = rh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ah = eh(), oh = "data-scroll-locked", sh = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Nm} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${oh}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${jm} {
    right: ${s}px ${r};
  }
  
  .${Mm} {
    margin-right: ${s}px ${r};
  }
  
  .${jm} .${jm} {
    right: 0 ${r};
  }
  
  .${Mm} .${Mm} {
    margin-right: 0 ${r};
  }
  
  body[${oh}] {
    ${Pm}: ${s}px;
  }
`;
}, ch = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, lh = function() {
	e.useEffect(function() {
		return document.body.setAttribute(oh, (ch() + 1).toString()), function() {
			var e = ch() - 1;
			e <= 0 ? document.body.removeAttribute(oh) : document.body.setAttribute(oh, e.toString());
		};
	}, []);
}, uh = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	lh();
	var o = e.useMemo(function() {
		return ih(a);
	}, [a]);
	return e.createElement(ah, { styles: sh(o, !n, a, r ? "" : "!important") });
}, dh = !1;
if (typeof window < "u") try {
	var fh = Object.defineProperty({}, "passive", { get: function() {
		return dh = !0, !0;
	} });
	window.addEventListener("test", fh, fh), window.removeEventListener("test", fh, fh);
} catch {
	dh = !1;
}
var ph = dh ? { passive: !1 } : !1, mh = function(e) {
	return e.tagName === "TEXTAREA";
}, hh = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !mh(e) && n[t] === "visible");
}, gh = function(e) {
	return hh(e, "overflowY");
}, _h = function(e) {
	return hh(e, "overflowX");
}, vh = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), xh(e, r)) {
			var i = Sh(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, yh = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, bh = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, xh = function(e, t) {
	return e === "v" ? gh(t) : _h(t);
}, Sh = function(e, t) {
	return e === "v" ? yh(t) : bh(t);
}, Ch = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, wh = function(e, t, n, r, i) {
	var a = Ch(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Sh(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && xh(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Th = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Eh = function(e) {
	return [e.deltaX, e.deltaY];
}, Dh = function(e) {
	return e && "current" in e ? e.current : e;
}, Oh = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, kh = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ah = 0, jh = [];
function Mh(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Ah++)[0], o = e.useState(eh)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Am([t.lockRef.current], (t.shards || []).map(Dh), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = Th(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = vh(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = vh(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return wh(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (jh.length && jh[jh.length - 1] === o) {
			var r = "deltaY" in t ? Eh(t) : Th(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Oh(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(Dh).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Nh(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Th(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Eh(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Th(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return jh.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, ph), document.addEventListener("touchmove", l, ph), document.addEventListener("touchstart", d, ph), function() {
			jh = jh.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, ph), document.removeEventListener("touchmove", l, ph), document.removeEventListener("touchstart", d, ph);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: kh(a) }) : null, m ? e.createElement(uh, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Nh(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Ph = Wm(Gm, Mh), Fh = e.forwardRef(function(t, n) {
	return e.createElement(qm, Om({}, t, {
		ref: n,
		sideCar: Ph
	}));
});
Fh.classNames = qm.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var Ih = Object.defineProperty, Lh = (e, t) => Ih(e, "name", {
	value: t,
	configurable: !0
}), Rh = {
	LTR: "ltr",
	RTL: "rtl"
}, zh = ["Enter", " "], Bh = [
	"ArrowDown",
	"PageUp",
	"Home"
], Vh = [
	"ArrowUp",
	"PageDown",
	"End"
], Hh = [...Bh, ...Vh], Uh = {
	ltr: [...zh, "ArrowRight"],
	rtl: [...zh, "ArrowLeft"]
}, Wh = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Gh = "Menu", [Kh, qh, Jh] = /* @__PURE__ */ zl(Gh), [Yh, Xh] = /* @__PURE__ */ tl(Gh, [
	Jh,
	vp,
	am
]), Zh = vp(), Qh = am(), [$h, eg] = Yh(Gh), [tg, ng] = Yh(Gh), rg = /* @__PURE__ */ Lh((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Zh(n), [l, u] = e.useState(null), d = e.useRef(!1), f = ru(o), p = eu(a);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Lh(() => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ Lh(() => d.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), e.useEffect(() => {
		if (!r) return;
		let e = /* @__PURE__ */ Lh(() => f(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, f]), /* @__PURE__ */ v(xp, {
		...c,
		children: /* @__PURE__ */ v($h, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ v(tg, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), ig = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = Zh(n);
	return /* @__PURE__ */ v(Cp, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), ag = "MenuPortal", [og, sg] = Yh(ag, { forceMount: void 0 }), cg = /* @__PURE__ */ Lh((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = eg(ag, t);
	return /* @__PURE__ */ v(og, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ v(Ip, {
			present: n || a.open,
			children: /* @__PURE__ */ v(Mp, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), lg = "MenuContent", [ug, dg] = Yh(lg), fg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let n = sg(lg, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = eg(lg, e.__scopeMenu), o = ng(lg, e.__scopeMenu);
	return /* @__PURE__ */ v(Kh.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ v(Ip, {
			present: r || a.open,
			children: /* @__PURE__ */ v(Kh.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ v(pg, {
					...i,
					ref: t
				}) : /* @__PURE__ */ v(mg, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), pg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let r = eg(lg, t.__scopeMenu), i = e.useRef(null), a = Zc(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Dm(e);
	}, []), /* @__PURE__ */ v(gg, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: X(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), mg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let n = eg(lg, e.__scopeMenu);
	return /* @__PURE__ */ v(gg, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), hg = /* @__PURE__ */ yl("MenuContent.ScrollLock"), gg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = eg(lg, r), y = ng(lg, r), b = Zh(r), x = Qh(r), S = qh(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	Pu(E);
	let { nodes: O, registry: k } = Nu(), A = !!(a || h), j = Zc(n, T, _.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), ee = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), te = h ? Fh : e.Fragment, R = h ? {
		as: hg,
		allowPinchZoom: !0,
		shards: ee
	} : void 0, z = /* @__PURE__ */ Lh((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Gg(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Lh((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), Cu();
	let B = e.useCallback((e) => I.current === F.current?.side && qg(e, F.current?.area), []);
	return /* @__PURE__ */ v(ug, {
		scope: r,
		searchRef: N,
		onItemEnter: e.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: e.useCallback((e) => {
			B(e) || (T.current?.focus(), w(null));
		}, [B]),
		onTriggerLeave: e.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: P,
		onPointerGraceIntentChange: e.useCallback((e) => {
			F.current = e;
		}, []),
		children: /* @__PURE__ */ v(Mu, {
			registry: A ? k : null,
			children: /* @__PURE__ */ v(te, {
				...R,
				children: /* @__PURE__ */ v(Au, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: X(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ v(du, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ v(um, {
							asChild: !0,
							...x,
							dir: y.dir,
							orientation: "vertical",
							loop: i,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: X(l, (e) => {
								y.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ v(Dp, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": Bg(_.open),
								"data-radix-menu-content": "",
								dir: y.dir,
								...b,
								...g,
								ref: j,
								style: {
									outline: "none",
									...g.style
								},
								onKeyDown: X(g.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && z(e.key));
									let i = T.current;
									if (e.target !== i || !Hh.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									Vh.includes(e.key) && a.reverse(), Ug(a);
								}),
								onBlur: X(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: X(t.onPointerMove, Jg((e) => {
									let t = e.target, n = L.current !== e.clientX;
									if (e.currentTarget.contains(t) && n) {
										let t = e.clientX > L.current ? "right" : "left";
										I.current = t, L.current = e.clientX;
									}
								}))
							})
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl")), _g = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(Fl.div, {
		role: "group",
		...r,
		ref: t
	});
}, "MenuGroup")), vg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(Fl.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), yg = "MenuItem", bg = "menu.itemSelect", xg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = ng(yg, t.__scopeMenu), c = dg(yg, t.__scopeMenu), l = Zc(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Lh(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(bg, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(bg, (e) => i?.(e), { once: !0 }), Il(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ v(Sg, {
		...a,
		ref: l,
		disabled: r,
		onClick: X(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: X(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: X(t.onKeyDown, (e) => {
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && zh.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Sg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = dg(yg, r), c = Qh(r), l = e.useRef(null), u = Zc(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ v(Kh.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ v(pm, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ v(Fl.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: X(t.onPointerMove, Jg((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: X(t.onPointerLeave, Jg((e) => s.onItemLeave(e))),
				onFocus: X(t.onFocus, () => f(!0)),
				onBlur: X(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), Cg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ v(kg, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ v(xg, {
			role: "menuitemcheckbox",
			"aria-checked": Vg(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Hg(n),
			onSelect: X(i.onSelect, () => r?.(Vg(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [wg, Tg] = Yh("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Lh(() => {}, "onValueChange")
}), Eg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { value: n, onValueChange: r, ...i } = e, a = ru(r);
	return /* @__PURE__ */ v(wg, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ v(_g, {
			...i,
			ref: t
		})
	});
}, "MenuRadioGroup")), Dg = "MenuRadioItem", Og = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { value: n, ...r } = e, i = Tg(Dg, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ v(kg, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ v(xg, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Hg(a),
			onSelect: X(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [kg, Ag] = Yh("MenuItemIndicator", { checked: !1 }), jg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(Fl.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), Mg = "MenuSub", [Ng, Pg] = Yh(Mg), Fg = /* @__PURE__ */ Lh((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = eg(Mg, n), s = Zh(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = ru(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ v(xp, {
		...s,
		children: /* @__PURE__ */ v($h, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ v(Ng, {
				scope: n,
				contentId: Xu(),
				triggerId: Xu(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), Ig = "MenuSubTrigger", Lg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let r = eg(Ig, t.__scopeMenu), i = ng(Ig, t.__scopeMenu), a = Pg(Ig, t.__scopeMenu), o = dg(Ig, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = Zc(n, a.onTriggerChange);
	return /* @__PURE__ */ v(ig, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ v(Sg, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": Bg(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: X(t.onPointerMove, Jg((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: X(t.onPointerLeave, Jg((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: X(t.onKeyDown, (e) => {
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && Uh[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), Rg = "MenuSubContent", zg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lh(function(t, n) {
	let r = sg(lg, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = eg(lg, t.__scopeMenu), c = ng(lg, t.__scopeMenu), l = Pg(Rg, t.__scopeMenu), u = e.useRef(null), d = Zc(n, u);
	return /* @__PURE__ */ v(Kh.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ v(Ip, {
			present: i || s.open,
			children: /* @__PURE__ */ v(Kh.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ v(gg, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === Rh.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: X(t.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: X(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: X(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Wh[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function Bg(e) {
	return e ? "open" : "closed";
}
Lh(Bg, "getOpenState");
function Vg(e) {
	return e === "indeterminate";
}
Lh(Vg, "isIndeterminate");
function Hg(e) {
	return Vg(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Lh(Hg, "getCheckedState");
function Ug(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Lh(Ug, "focusFirst");
function Wg(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Lh(Wg, "wrapArray");
function Gg(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Wg(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Lh(Gg, "getNextMatch");
function Kg(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Lh(Kg, "isPointInPolygon");
function qg(e, t) {
	return t ? Kg({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Lh(qg, "isPointerInGraceArea");
function Jg(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Lh(Jg, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var Yg = Object.defineProperty, Xg = (e, t) => Yg(e, "name", {
	value: t,
	configurable: !0
}), Zg = "DropdownMenu", [Qg, $g] = /* @__PURE__ */ tl(Zg, [Xh]), e_ = Xh(), [t_, n_] = Qg(Zg), r_ = /* @__PURE__ */ Xg((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = e_(n), u = e.useRef(null), [d, f] = fl({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: Zg
	});
	return /* @__PURE__ */ v(t_, {
		scope: n,
		triggerId: Xu(),
		triggerRef: u,
		contentId: Xu(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ v(rg, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), i_ = "DropdownMenuTrigger", a_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = n_(i_, n), o = e_(n), s = Zc(t, a.triggerRef);
	return /* @__PURE__ */ v(ig, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ v(Fl.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: s,
			onPointerDown: X(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: X(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), o_ = /* @__PURE__ */ Xg((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = e_(t);
	return /* @__PURE__ */ v(cg, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), s_ = "DropdownMenuContent", c_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = n_(s_, r), o = e_(r), s = e.useRef(!1);
	return /* @__PURE__ */ v(fg, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: X(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: X(t.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuContent")), l_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(vg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), u_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(xg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), d_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(Cg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), f_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(Eg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioGroup")), p_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(Og, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), m_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(jg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), h_ = /* @__PURE__ */ Xg((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = e_(t), [s, c] = fl({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ v(Fg, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), g_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(Lg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), __ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Xg(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = e_(n);
	return /* @__PURE__ */ v(zg, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "DropdownMenuSubContent")), v_ = r_, y_ = a_, b_ = h_, x_ = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ v(g_, {
	ref: i,
	className: q("uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:focus:bg-gray-100 uhuu:data-[state=open]:bg-gray-100", t && "uhuu:pl-8", e),
	...r,
	children: n
}));
x_.displayName = g_.displayName;
var S_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(__, {
	ref: n,
	className: q("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
S_.displayName = __.displayName;
var C_ = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = ts();
	return /* @__PURE__ */ v(o_, {
		container: i || void 0,
		children: /* @__PURE__ */ v(c_, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: q("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
C_.displayName = c_.displayName;
var w_ = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(u_, {
	ref: r,
	className: q("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", t && "uhuu:pl-8", e),
	...n
}));
w_.displayName = u_.displayName;
var T_ = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ v(d_, {
	ref: i,
	className: q("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
T_.displayName = d_.displayName;
var E_ = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v(p_, {
	ref: r,
	className: q("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
E_.displayName = p_.displayName;
var D_ = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(l_, {
	ref: r,
	className: q("uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:font-medium", t && "uhuu:pl-8", e),
	...n
}));
D_.displayName = l_.displayName;
var O_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(m_, {
	ref: n,
	className: q("uhuu:-mx-1 uhuu:my-1 uhuu:h-px uhuu:bg-gray-200", e),
	...t
}));
O_.displayName = m_.displayName;
var k_ = (e, t, n) => {
	le() || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && ue()?.editDialog?.(On(t.dialog, n)));
}, A_ = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ v("div", {
			className: uo("uhuu-image-overlay", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ v("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: uo("uhuu-image-overlay uhuu-image-overlay-img", t)
	});
};
function j_({ options: t, anchorInsets: n }) {
	let { t: r } = ec(), i = e.useRef(null), a = /* @__PURE__ */ v("div", {
		ref: i,
		"data-uhuu-chrome": !0,
		className: "uhuu:pointer-events-auto uhuu:absolute uhuu:right-2 uhuu:top-2 uhuu:z-20",
		children: /* @__PURE__ */ y(v_, {
			modal: !1,
			children: [/* @__PURE__ */ v(y_, {
				asChild: !0,
				children: /* @__PURE__ */ v(gs, {
					variant: "secondary",
					size: "icon",
					title: r("image.options"),
					className: "uhuu:h-7 uhuu:w-7 uhuu:shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ v(Io, { className: "uhuu:h-4 uhuu:w-4" })
				})
			}), /* @__PURE__ */ v(C_, {
				className: "uhuu:w-40 uhuu:p-1.5",
				align: "end",
				children: t.map((e) => /* @__PURE__ */ y(w_, {
					onSelect: (t) => k_(t, e, i.current?.parentElement),
					disabled: e.disabled,
					children: [e.icon && /* @__PURE__ */ v("span", {
						className: "uhuu:mr-2 uhuu:inline-flex",
						children: e.icon
					}), /* @__PURE__ */ v("span", { children: e.label })]
				}, e.id))
			})]
		})
	});
	return n ? /* @__PURE__ */ v("div", {
		className: "uhuu:pointer-events-none uhuu:absolute uhuu:z-20",
		style: n,
		children: a
	}) : a;
}
var M_ = (e, t, n) => t ? /* @__PURE__ */ v(j_, {
	options: e,
	anchorInsets: n
}) : null, N_ = (e = [], t) => {
	let n = Rc(), r = Ic() && t;
	return {
		showOptions: e.length > 0 && !n && !r,
		toolbarActions: r && e.length > 0 ? e : void 0
	};
}, P_ = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: c, options: l = [], dialog: u, dialogProps: d, binding: f, placeholder: p, children: m, imageProps: h, renderImage: g, onError: _ }) => {
	let { showOptions: b, toolbarActions: x } = N_(l, f ? f["data-uhuu"] !== void 0 : !!u), S = e.useMemo(() => f ?? (u ? Nr(u, {
		kind: "image",
		actions: x
	}) : {}), [
		f,
		u,
		x
	]), C = fo({ onError: (e) => {
		_?.(e), h?.onError?.(e);
	} }), w = e.useMemo(() => {
		if (!d) return S;
		let e = {
			...S,
			...d
		};
		return (S.className || d.className) && (e.className = uo(S.className, d.className)), Object.keys(S).forEach((t) => {
			let n = S[t], r = d[t];
			t.startsWith("on") && typeof n == "function" && typeof r == "function" && (e[t] = (e) => {
				n(e), r(e);
			});
		}), e;
	}, [S, d]), T = h?.src ?? t, E = !T && !p && !g, D = () => {
		let e = h?.className, t = h?.style, r = T, a = h?.alt ?? n, s = {
			...h,
			src: r,
			alt: a,
			className: uo("uhuu-image-img", i, e),
			style: {
				...o,
				...t
			}
		};
		return g ? g(s) : r ? /* @__PURE__ */ v("img", {
			...s,
			onError: C
		}) : p ?? null;
	}, O = w["data-uhuu"], k = e.Children.toArray(m).some((t) => e.isValidElement(t) ? t.type === go || t.type === _o : !1), A = { ...w };
	k && delete A["data-uhuu"];
	let j = e.Children.map(m, (t) => e.isValidElement(t) && (t.type === go || t.type === _o) ? e.cloneElement(t, { dataUhuu: O }) : t);
	return /* @__PURE__ */ y("div", {
		className: uo(k ? "uhuu-image-block uhuu-image-block-fill" : "uhuu-image-block", r),
		style: a,
		children: [/* @__PURE__ */ y("div", {
			...A,
			className: uo("uhuu-image-body", E && "uhuu-image-empty", w.className),
			children: [
				D(),
				j,
				A_(s, c)
			]
		}), M_(l, b)]
	});
}, F_ = ({ className: e, style: t, overlaySvg: n, overlayClassName: r, options: i = [], dialog: a, dialogProps: o, bleedProps: s, children: l }) => {
	let u = c(te), { showOptions: d, toolbarActions: f } = N_(i, !!a || s?.binding?.["data-uhuu"] !== void 0), p = ho({
		...s,
		pageWidth: s?.pageWidth ?? u?.page?.width ?? 210,
		bleed: s?.bleed ?? u?.page?.bleed ?? 0
	}, "bleed");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(_o, {
		...s,
		dialog: a,
		actions: f,
		children: [A_(n, r), l]
	}), M_(i, d, p)] });
}, I_ = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(te), { showOptions: s, toolbarActions: l } = N_(n, !!r || i?.binding?.["data-uhuu"] !== void 0), u = ho({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(go, {
		...i,
		dialog: r,
		actions: l,
		children: [A_(e, t), a]
	}), M_(n, s, u)] });
}, L_ = "https://render.uhuu.io/media/thumb", R_ = "image/svg+xml";
function z_(e) {
	return typeof e == "string" ? { url: Y(e) } : J(e) ? {
		url: Y(e.contentUrl) ?? Y(e.url) ?? Y(e.src),
		type: Y(e.encodingFormat) ?? Y(e.mimeType)
	} : { url: void 0 };
}
function B_() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function V_(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function H_(e, t, n) {
	if (n && n.toLowerCase().startsWith(R_)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === R_) return !0;
	}
	return !1;
}
var U_ = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function W_(e, t = {}) {
	let n = J(t) ? t : {}, { url: r, type: i } = z_(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = V_(r), s = Y(n.format);
	if (U_(o) && (s ||= Y(o.searchParams.get("format")), a = Y(o.searchParams.get("url")) ?? r, o = V_(a)), !/^https?:\/\//i.test(a) || H_(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : B_()) ? Y(n.printSize) ?? "4000x4000" : Y(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${L_}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/frame/vendor/frame.ts
var G_ = "uhuu.frame.v1", K_ = "uhuuFrame", q_ = "image", J_ = [
	"image",
	"url",
	"contentUrl",
	"src",
	"imageUrl",
	"imageSrc",
	"dataImage"
], Y_ = [
	["cadastral", "cadastral"],
	["satellite", "satellite"],
	["mapbox", "map"],
	["list", "map"],
	["home", "map"]
], X_ = /* @__PURE__ */ new Set([q_, "search-image"]), Z_ = (e) => typeof e == "object" && !!e && !Array.isArray(e), Q_ = (e) => typeof e == "string" && e.trim() !== "" ? e : void 0, $_ = (e) => typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
function ev(e) {
	let t = Q_(e);
	return !!t && !/^\s*(data|blob):/i.test(t);
}
var tv = (e, t) => {
	let n = new Set(t), r = {};
	for (let [t, i] of Object.entries(e)) n.has(t) || (r[t] = i);
	return r;
}, nv = [
	"width",
	"height",
	"mimeType"
], rv = (e) => {
	let t = tv(e, [
		...J_,
		...nv,
		K_
	]);
	return Object.keys(t).length ? ov(t) : void 0;
}, iv = (e) => ({
	width: $_(e.width),
	height: $_(e.height),
	mimeType: Q_(e.mimeType) ?? Q_(e.encodingFormat)
}), av = (e) => {
	let t = {};
	for (let [n, r] of Object.entries(e)) r !== void 0 && (t[n] = r);
	return t;
}, ov = (e) => e === void 0 ? e : JSON.parse(JSON.stringify(e));
function sv(e) {
	return Z_(e) && Z_(e.uhuuFrame) && e.uhuuFrame.schema === "uhuu.frame.v1";
}
var cv = (e) => {
	if (!Z_(e)) return null;
	let t = Q_(e.type), n = Q_(e.url);
	return !t || !n ? null : av({
		type: t,
		url: n,
		...iv(e),
		state: Z_(e.state) ? e.state : void 0
	});
}, lv = (e) => !Z_(e) || !("state" in e) ? null : av({
	state: e.state,
	baseUrl: Q_(e.baseUrl),
	stale: e.stale === !0 || void 0
}), uv = (e) => {
	if (!Z_(e)) return null;
	let t = Array.isArray(e.steps) ? e.steps.map(cv).filter((e) => e !== null) : [], n = {};
	if (Z_(e.layers)) for (let [t, r] of Object.entries(e.layers)) {
		let e = lv(r);
		e && (n[t] = e);
	}
	return av({
		url: Q_(e.url),
		urlKey: Q_(e.urlKey),
		...iv(e),
		state: Z_(e.state) ? e.state : void 0,
		steps: t.length ? t : void 0,
		layers: Object.keys(n).length ? n : void 0
	});
}, dv = (e) => {
	let t = {};
	if (Z_(e.sources)) for (let [n, r] of Object.entries(e.sources)) {
		let e = uv(r);
		e && (t[n] = e);
	}
	let n = Q_(e.active), r = n && t[n] ? n : null, i;
	if (Z_(e.previous)) {
		let t = e.previous.before === null ? null : uv(e.previous.before);
		i = av({
			active: Q_(e.previous.active) ?? null,
			type: Q_(e.previous.type),
			before: Q_(e.previous.type) ? t : void 0
		});
	}
	return av({
		schema: G_,
		active: r,
		sources: t,
		previous: i
	});
}, fv = (e) => {
	let t = e.active ? e.sources[e.active] : void 0;
	if (!t) return {
		url: "",
		source: null,
		steps: 0
	};
	let n = t.steps ?? [], r = n[n.length - 1] ?? t;
	return av({
		url: r.url ?? "",
		width: r.width,
		height: r.height,
		mimeType: r.mimeType,
		source: e.active,
		steps: n.length
	});
}, pv = (e) => ev(e) ? e : void 0, mv = () => ({
	schema: G_,
	active: null,
	sources: {}
}), hv = (e) => e.sources?.find((e) => !X_.has(e)) ?? "map", gv = (e) => {
	for (let [t, n] of Y_) if (t in e && e[t] !== void 0 && e[t] !== null) return n;
}, _v = (e) => {
	let t = e.legacyLayer;
	if (Z_(t)) return Q_(t.annotationSvg) || Array.isArray(t.annotations) && t.annotations.length ? { state: t } : void 0;
}, vv = (e, t) => {
	let n = mv();
	if (typeof e == "string") {
		if (!Q_(e)) return null;
		n.sources[q_] = { url: e }, n.active = q_;
	} else if (Z_(e)) {
		let r = gv(e), i = Q_(e.image), a = (t.legacyDataImage ?? "show") === "show" ? Q_(e.dataImage) : void 0, o = i ?? a, s = !!r || !!o || Q_(e.dataImage) !== void 0, c = s ? Q_(e.contentUrl) : Q_(e.contentUrl) ?? Q_(e.url) ?? Q_(e.src) ?? Q_(e.imageUrl) ?? Q_(e.imageSrc);
		if (s) {
			let s = r ?? hv(t);
			if (n.sources[s] = av({
				url: o,
				urlKey: i ? "image" : a ? "dataImage" : void 0,
				...iv(e),
				state: rv(e)
			}), n.active = s, c && c !== o) n.sources[q_] = {
				url: c,
				urlKey: "contentUrl"
			}, (t.legacyPrecedence ?? "generated") === "pick" && (n.active = q_);
			else {
				let t = Q_(e.url);
				t && t !== o && t !== Q_(e.dataImage) && (n.sources[q_] = {
					url: t,
					urlKey: "url"
				});
			}
		} else if (c) {
			let t = [
				"contentUrl",
				"url",
				"src",
				"imageUrl",
				"imageSrc"
			].find((t) => e[t] === c);
			n.sources[q_] = av({
				url: c,
				urlKey: t,
				...iv(e),
				state: rv(e)
			}), n.active = q_;
		} else return null;
	} else return null;
	let r = _v(t);
	if (r && n.active) {
		let e = t.legacyLayerType ?? "annotation", i = n.sources[n.active];
		n.sources[n.active] = {
			...i,
			layers: {
				...i.layers ?? {},
				[e]: r
			}
		};
	}
	return n;
};
function yv(e, t = {}) {
	if (!sv(e)) return vv(e, t);
	let n = dv(e[K_]), r = _v(t), i = n.active;
	if (r && i && n.sources[i]) {
		let e = t.legacyLayerType ?? "annotation", a = n.sources[i], o = a.layers?.[e];
		JSON.stringify(o?.state) !== JSON.stringify(r.state) && (n.sources[i] = {
			...a,
			layers: {
				...a.layers ?? {},
				[e]: av({
					state: r.state,
					baseUrl: pv(fv(n).url)
				})
			}
		});
	}
	let a = fv(n).url, o = [Q_(e.contentUrl), Q_(e.url)].find((e) => e !== void 0 && e !== a);
	if (o) {
		let e = n.sources.image ?? null;
		n.sources[q_] = {
			url: o,
			urlKey: "contentUrl"
		}, n.previous = {
			active: n.active,
			type: q_,
			before: e
		}, n.active = q_;
	}
	return n.active || Object.keys(n.sources).length ? n : null;
}
function bv(e, t = {}) {
	let n = yv(e, t);
	return n ? fv(n) : {
		url: "",
		source: null,
		steps: 0
	};
}
function xv(e, t = {}) {
	return yv(e, t)?.active ?? null;
}
function Sv(e, t = {}) {
	let n = yv(e, t), r = n?.active, i = r ? n.sources[r] : void 0;
	if (!r || !i) return [];
	let a = [], o = t.intrinsicOverlays ? Q_(i.state?.annotationSvg) : void 0;
	o && a.push({
		key: r,
		svg: o,
		stale: !1,
		intrinsic: !0
	});
	for (let [e, t] of Object.entries(i.layers ?? {})) {
		let n = Z_(t.state) ? Q_(t.state.annotationSvg) : void 0;
		n && a.push({
			key: e,
			svg: n,
			stale: t.stale === !0,
			intrinsic: !1
		});
	}
	return a;
}
function Cv(e, t = {}) {
	let { path: n, ratio: r } = e, i = e.sources.filter((e) => typeof e?.type == "string" && e.type).map(({ type: e, ...t }) => e === "image" ? {
		imagePath: "contentUrl",
		...r ? { ratio: r } : {},
		...t,
		type: e,
		path: n
	} : {
		...t,
		type: e,
		path: n
	}), a = e.annotationPath, o = e.layers?.find((e) => e?.type === "annotation"), s = Q_(t.image);
	if (o && a && s) {
		let e = t.annotation, n = Z_(e) && Array.isArray(e.annotations) ? e.annotations : [], { type: r, ...c } = o;
		i.push({
			...c,
			type: r,
			path: a,
			image: s,
			annotations: n,
			value: Z_(e) ? e : {}
		});
	}
	return i;
}
//#endregion
//#region src/uhuu/frame/frame-dialog.js
var wv = "frame", Tv = [
	"title",
	"sources",
	"layers",
	"transforms",
	"ratio",
	"legacyPrecedence",
	"legacyDataImage",
	"annotationPath"
];
function Ev(e) {
	let t = { path: e?.path };
	for (let n of Tv) e?.[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function Dv(e, t = {}) {
	let { path: n, ...r } = e ?? {}, i = Array.isArray(r.sources) ? r.sources.filter((e) => e?.type) : [];
	return !n || !i.length ? null : {
		path: n,
		frame: {
			...r,
			sources: i
		},
		types: Cv({
			...r,
			path: n,
			sources: i
		}, t ?? {})
	};
}
function Ov(e, t) {
	let n = typeof window < "u" ? window.$uhuu : void 0;
	if (typeof n?.editFrame == "function") return n.editFrame(e);
	let r = Dv(e, t);
	r && n?.editDialog?.(r);
}
function kv(e, t, { kind: n, actions: r } = {}) {
	let i = Dv(e, t);
	return i ? {
		...Nr(i, {
			kind: n,
			actions: r,
			open: (n) => Ov(On(e, n), t)
		}),
		"data-uhuu-type": wv
	} : {};
}
//#endregion
//#region src/uhuu/frame/frame-block.tsx
var Av = ({ svgs: t, className: n, children: r }) => /* @__PURE__ */ y(_, { children: [t.map((t, r) => /* @__PURE__ */ v(e.Fragment, { children: A_(t, n) }, r)), r] }), jv = (e) => {
	let { path: t, sources: n, layers: r, transforms: i, ratio: a, legacyPrecedence: o, legacyDataImage: s, intrinsicOverlays: c, annotationPath: l, value: u, annotation: d, src: p, imageUrlOptions: m, mode: h, side: g, alt: _, className: y, imageClassName: b, style: x, imageStyle: S, backgroundColor: C, width: w, height: T, left: E, right: D, top: O, bottom: k, pageWidth: A, pageHeight: j, bleed: M, overlaySvg: N, overlayClassName: P, options: F, dialogProps: I, placeholder: L, children: ee, imageProps: te, renderImage: R, onError: z } = e, B = (Array.isArray(n) ? n : []).map((e) => e?.type).filter((e) => typeof e == "string" && e !== "").join("\n"), { src: ne, svgs: re, shownUrl: V, shownSource: ie } = f(() => {
		let e = {
			sources: B ? B.split("\n") : void 0,
			legacyPrecedence: o,
			legacyDataImage: s,
			intrinsicOverlays: c,
			legacyLayer: d ?? void 0
		}, t = bv(u, e), n = Sv(u, e).map((e) => e.svg);
		return {
			src: p ?? W_(t.url ? {
				contentUrl: t.url,
				mimeType: t.mimeType
			} : null, m),
			svgs: N ? [...n, N] : n,
			shownUrl: t.url,
			shownSource: xv(u, e) ?? e.sources?.[0]
		};
	}, [
		u,
		B,
		o,
		s,
		c,
		d,
		p,
		m,
		N
	]), ae = F, { toolbarActions: H } = N_(ae, !0), oe = f(() => kv(Ev({
		path: t,
		sources: n,
		layers: r,
		transforms: i,
		ratio: a,
		legacyPrecedence: o,
		legacyDataImage: s,
		annotationPath: l
	}), {
		image: V,
		annotation: d
	}, {
		kind: ie,
		actions: H
	}), [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		l,
		V,
		d,
		ie,
		H
	]), se = [
		w,
		T,
		E,
		D,
		O,
		k
	].some((e) => e !== void 0), ce = h ?? (g === void 0 ? se ? "bleed" : "auto" : "spread"), le = /* @__PURE__ */ v(Av, {
		svgs: re,
		className: P,
		children: ee
	});
	if (ce === "auto") return /* @__PURE__ */ v(P_, {
		src: ne,
		alt: _,
		className: y,
		style: x,
		imageClassName: b,
		imageStyle: S,
		options: ae,
		binding: oe,
		dialogProps: I,
		placeholder: L,
		imageProps: te,
		renderImage: R,
		onError: z,
		children: le
	});
	let ue = {
		src: ne,
		backgroundColor: C,
		width: w,
		height: T,
		left: E,
		right: D,
		top: O,
		bottom: k,
		pageWidth: A,
		pageHeight: j,
		bleed: M,
		imageClassName: b,
		onError: z,
		binding: oe
	};
	return ce === "spread" ? /* @__PURE__ */ v(I_, {
		className: y,
		style: x,
		options: ae,
		spreadProps: {
			...ue,
			side: g
		},
		children: le
	}) : /* @__PURE__ */ v(F_, {
		className: y,
		style: x,
		options: ae,
		bleedProps: ue,
		children: le
	});
};
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/guards.js
function Mv(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Nv(e) {
	return Mv(e) ? e : {};
}
function Pv(e) {
	return (typeof e == "string" ? e.trim() : "") || void 0;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseNumber.js
var Fv = (e, t) => {
	if (typeof e == "number") {
		if (t === 3) return {
			mode: "rgb",
			r: (e >> 8 & 15 | e >> 4 & 240) / 255,
			g: (e >> 4 & 15 | e & 240) / 255,
			b: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 4) return {
			mode: "rgb",
			r: (e >> 12 & 15 | e >> 8 & 240) / 255,
			g: (e >> 8 & 15 | e >> 4 & 240) / 255,
			b: (e >> 4 & 15 | e & 240) / 255,
			alpha: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 6) return {
			mode: "rgb",
			r: (e >> 16 & 255) / 255,
			g: (e >> 8 & 255) / 255,
			b: (e & 255) / 255
		};
		if (t === 8) return {
			mode: "rgb",
			r: (e >> 24 & 255) / 255,
			g: (e >> 16 & 255) / 255,
			b: (e >> 8 & 255) / 255,
			alpha: (e & 255) / 255
		};
	}
}, Iv = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, Lv = (e) => Fv(Iv[e.toLowerCase()], 6), Rv = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, zv = (e) => {
	let t;
	return (t = e.match(Rv)) ? Fv(parseInt(t[1], 16), t[1].length) : void 0;
}, Bv = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
`${Bv}`;
var Vv = `${Bv}%`;
`${Bv}`;
var Hv = `(?:${Bv}%|${Bv})`, Uv = `(?:${Bv}%|${Bv}|none)`, Wv = `(?:${Bv}(deg|grad|rad|turn)|${Bv})`;
`${Bv}${Bv}`;
var Gv = "\\s*,\\s*";
RegExp("^" + Uv + "$");
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgbLegacy.js
var Kv = RegExp(`^rgba?\\(\\s*${Bv}${Gv}${Bv}${Gv}${Bv}\\s*(?:,\\s*${Hv}\\s*)?\\)$`), qv = RegExp(`^rgba?\\(\\s*${Vv}${Gv}${Vv}${Gv}${Vv}\\s*(?:,\\s*${Hv}\\s*)?\\)$`), Jv = (e) => {
	let t = { mode: "rgb" }, n;
	if (n = e.match(Kv)) n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
	else if (n = e.match(qv)) n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
	else return;
	return n[4] === void 0 ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))) : t.alpha = Math.max(0, Math.min(1, n[4] / 100)), t;
}, Yv = (e, t) => e === void 0 ? void 0 : typeof e == "object" ? e.mode === void 0 ? t ? {
	...e,
	mode: t
} : void 0 : e : vy(e), Xv = (e = "rgb") => (t) => (t = Yv(t, e)) === void 0 ? void 0 : t.mode === e ? t : Zv[t.mode][e] ? Zv[t.mode][e](t) : e === "rgb" ? Zv[t.mode].rgb(t) : Zv.rgb[e](Zv[t.mode].rgb(t)), Zv = {}, Qv = {}, $v = [], ey = {}, ty = (e) => e, ny = (e) => (Zv[e.mode] = {
	...Zv[e.mode],
	...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
	Zv[t] || (Zv[t] = {}), Zv[t][e.mode] = e.fromMode[t];
}), e.ranges ||= {}, e.difference ||= {}, e.channels.forEach((t) => {
	if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw Error(`Missing interpolator for: ${t}`);
	typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = ty);
}), Qv[e.mode] = e, (e.parse || []).forEach((t) => {
	iy(t, e.mode);
}), Xv(e.mode)), ry = (e) => Qv[e], iy = (e, t) => {
	if (typeof e == "string") {
		if (!t) throw Error("'mode' required when 'parser' is a string");
		ey[e] = t;
	} else typeof e == "function" && $v.indexOf(e) < 0 && $v.push(e);
}, ay = /[^\x00-\x7F]|[a-zA-Z_]/, oy = /[^\x00-\x7F]|[-\w]/, Z = {
	Function: "function",
	Ident: "ident",
	Number: "number",
	Percentage: "percentage",
	ParenClose: ")",
	None: "none",
	Hue: "hue",
	Alpha: "alpha"
}, Q = 0;
function sy(e) {
	let t = e[Q], n = e[Q + 1];
	return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[Q + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function cy(e) {
	if (Q >= e.length) return !1;
	let t = e[Q];
	if (ay.test(t)) return !0;
	if (t === "-") {
		if (e.length - Q < 2) return !1;
		let t = e[Q + 1];
		return !!(t === "-" || ay.test(t));
	}
	return !1;
}
var ly = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};
function uy(e) {
	let t = "";
	if ((e[Q] === "-" || e[Q] === "+") && (t += e[Q++]), t += dy(e), e[Q] === "." && /\d/.test(e[Q + 1]) && (t += e[Q++] + dy(e)), (e[Q] === "e" || e[Q] === "E") && ((e[Q + 1] === "-" || e[Q + 1] === "+") && /\d/.test(e[Q + 2]) ? t += e[Q++] + e[Q++] + dy(e) : /\d/.test(e[Q + 1]) && (t += e[Q++] + dy(e))), cy(e)) {
		let n = fy(e);
		return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? {
			type: Z.Hue,
			value: t * ly[n]
		} : void 0;
	}
	return e[Q] === "%" ? (Q++, {
		type: Z.Percentage,
		value: +t
	}) : {
		type: Z.Number,
		value: +t
	};
}
function dy(e) {
	let t = "";
	for (; /\d/.test(e[Q]);) t += e[Q++];
	return t;
}
function fy(e) {
	let t = "";
	for (; Q < e.length && oy.test(e[Q]);) t += e[Q++];
	return t;
}
function py(e) {
	let t = fy(e);
	return e[Q] === "(" ? (Q++, {
		type: Z.Function,
		value: t
	}) : t === "none" ? {
		type: Z.None,
		value: void 0
	} : {
		type: Z.Ident,
		value: t
	};
}
function my(e = "") {
	let t = e.trim(), n = [], r;
	for (Q = 0; Q < t.length;) if (r = t[Q++], r === "\n" || r === "	" || r === " ") for (; Q < t.length && (t[Q] === "\n" || t[Q] === "	" || t[Q] === " ");) Q++;
	else {
		if (r === ",") return;
		if (r === ")") n.push({ type: Z.ParenClose });
		else {
			if (r === "+") {
				if (Q--, sy(t)) {
					n.push(uy(t));
					continue;
				}
				return;
			}
			if (r === "-") {
				if (Q--, sy(t)) {
					n.push(uy(t));
					continue;
				}
				if (cy(t)) {
					n.push({
						type: Z.Ident,
						value: fy(t)
					});
					continue;
				}
				return;
			}
			if (r === ".") {
				if (Q--, sy(t)) {
					n.push(uy(t));
					continue;
				}
				return;
			}
			if (r === "/") {
				for (; Q < t.length && (t[Q] === "\n" || t[Q] === "	" || t[Q] === " ");) Q++;
				let e;
				if (sy(t) && (e = uy(t), e.type !== Z.Hue)) {
					n.push({
						type: Z.Alpha,
						value: e
					});
					continue;
				}
				if (cy(t) && fy(t) === "none") {
					n.push({
						type: Z.Alpha,
						value: {
							type: Z.None,
							value: void 0
						}
					});
					continue;
				}
				return;
			}
			if (/\d/.test(r)) Q--, n.push(uy(t));
			else if (ay.test(r)) Q--, n.push(py(t));
			else return;
		}
	}
	return n;
}
function hy(e) {
	e._i = 0;
	let t = e[e._i++];
	if (!t || t.type !== Z.Function || t.value !== "color" || (t = e[e._i++], t.type !== Z.Ident)) return;
	let n = ey[t.value];
	if (!n) return;
	let r = { mode: n }, i = gy(e, !1);
	if (!i) return;
	let a = ry(n).channels;
	for (let e = 0, t, n; e < a.length; e++) t = i[e], n = a[e], t.type !== Z.None && (r[n] = t.type === Z.Number ? t.value : t.value / 100, n === "alpha" && (r[n] = Math.max(0, Math.min(1, r[n]))));
	return r;
}
function gy(e, t) {
	let n = [], r;
	for (; e._i < e.length;) if (r = e[e._i++], r.type === Z.None || r.type === Z.Number || r.type === Z.Alpha || r.type === Z.Percentage || t && r.type === Z.Hue) n.push(r);
	else if (r.type === Z.ParenClose) {
		if (e._i < e.length) return;
	} else return;
	if (!(n.length < 3 || n.length > 4)) {
		if (n.length === 4) {
			if (n[3].type !== Z.Alpha) return;
			n[3] = n[3].value;
		}
		return n.length === 3 && n.push({
			type: Z.None,
			value: void 0
		}), n.every((e) => e.type !== Z.Alpha) ? n : void 0;
	}
}
function _y(e, t) {
	e._i = 0;
	let n = e[e._i++];
	if (!n || n.type !== Z.Function) return;
	let r = gy(e, t);
	if (r) return r.unshift(n.value), r;
}
var vy = (e) => {
	if (typeof e != "string") return;
	let t = my(e), n = t ? _y(t, !0) : void 0, r, i = 0, a = $v.length;
	for (; i < a;) if ((r = $v[i++](e, n)) !== void 0) return r;
	return t ? hy(t) : void 0;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgb.js
function yy(e, t) {
	if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
	let n = { mode: "rgb" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.r = r.type === Z.Number ? r.value / 255 : r.value / 100), i.type !== Z.None && (n.g = i.type === Z.Number ? i.value / 255 : i.value / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value / 255 : a.value / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseTransparent.js
var by = (e) => e === "transparent" ? {
	mode: "rgb",
	r: 0,
	g: 0,
	b: 0,
	alpha: 0
} : void 0, xy = (e, t, n) => e + n * (t - e), Sy = (e) => {
	let t = [];
	for (let n = 0; n < e.length - 1; n++) {
		let r = e[n], i = e[n + 1];
		r === void 0 && i === void 0 ? t.push(void 0) : r !== void 0 && i !== void 0 ? t.push([r, i]) : t.push(r === void 0 ? [i, i] : [r, r]);
	}
	return t;
}, $ = ((e) => (t) => {
	let n = Sy(t);
	return (t) => {
		let r = t * n.length, i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0), a = n[i];
		return a === void 0 ? void 0 : e(a[0], a[1], r - i);
	};
})(xy), Cy = (e) => {
	let t = !1, n = e.map((e) => e === void 0 ? 1 : (t = !0, e));
	return t ? n : e;
}, wy = {
	mode: "rgb",
	channels: [
		"r",
		"g",
		"b",
		"alpha"
	],
	parse: [
		yy,
		zv,
		Jv,
		Lv,
		by,
		"srgb"
	],
	serialize: "srgb",
	interpolate: {
		r: $,
		g: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	gamut: !0,
	white: {
		r: 1,
		g: 1,
		b: 1
	},
	black: {
		r: 0,
		g: 0,
		b: 0
	}
}, Ty = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e), Ey = (e) => {
	let t = Ty(e.r), n = Ty(e.g), r = Ty(e.b), i = {
		mode: "xyz65",
		x: .5766690429101305 * t + .1855582379065463 * n + .1882286462349947 * r,
		y: .297344975250536 * t + .6273635662554661 * n + .0752914584939979 * r,
		z: .0270313613864123 * t + .0706888525358272 * n + .9913375368376386 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Dy = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e), Oy = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "a98",
		r: Dy(e * 2.0415879038107465 - t * .5650069742788597 - .3447313507783297 * n),
		g: Dy(e * -.9692436362808798 + t * 1.8759675015077206 + .0415550574071756 * n),
		b: Dy(e * .0134442806320312 - t * .1183623922310184 + 1.0151749943912058 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, ky = (e = 0) => {
	let t = Math.abs(e);
	return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4;
}, Ay = ({ r: e, g: t, b: n, alpha: r }) => {
	let i = {
		mode: "lrgb",
		r: ky(e),
		g: ky(t),
		b: ky(n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, jy = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ay(e), a = {
		mode: "xyz65",
		x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
		y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
		z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, My = (e = 0) => {
	let t = Math.abs(e);
	return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92;
}, Ny = ({ r: e, g: t, b: n, alpha: r }, i = "rgb") => {
	let a = {
		mode: i,
		r: My(e),
		g: My(t),
		b: My(n)
	};
	return r !== void 0 && (a.alpha = r), a;
}, Py = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Ny({
		r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
		g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
		b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, Fy = {
	...wy,
	mode: "a98",
	parse: ["a98-rgb"],
	serialize: "a98-rgb",
	fromMode: {
		rgb: (e) => Oy(jy(e)),
		xyz65: Oy
	},
	toMode: {
		rgb: (e) => Py(Ey(e)),
		xyz65: Ey
	}
}, Iy = (e) => (e %= 360) < 0 ? e + 360 : e, Ly = (e, t) => e.map((n, r, i) => {
	if (n === void 0) return n;
	let a = Iy(n);
	return r === 0 || e[r - 1] === void 0 ? a : t(a - Iy(i[r - 1]));
}).reduce((e, t) => !e.length || t === void 0 || e[e.length - 1] === void 0 ? (e.push(t), e) : (e.push(t + e[e.length - 1]), e), []), Ry = (e) => Ly(e, (e) => Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e)), zy = [
	-.14861,
	1.78277,
	-.29227,
	-.90649,
	1.97294,
	0
], By = Math.PI / 180, Vy = 180 / Math.PI, Hy = zy[3] * zy[4], Uy = zy[1] * zy[4], Wy = zy[1] * zy[2] - zy[0] * zy[3], Gy = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (Wy * n + e * Hy - t * Uy) / (Wy + Hy - Uy), a = n - i, o = (zy[4] * (t - i) - zy[2] * a) / zy[3], s = {
		mode: "cubehelix",
		l: i,
		s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (zy[4] * i * (1 - i))
	};
	return s.s && (s.h = Math.atan2(o, a) * Vy - 120), r !== void 0 && (s.alpha = r), s;
}, Ky = ({ h: e, s: t, l: n, alpha: r }) => {
	let i = { mode: "rgb" };
	e = (e === void 0 ? 0 : e + 120) * By, n === void 0 && (n = 0);
	let a = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
	return i.r = n + a * (zy[0] * o + zy[1] * s), i.g = n + a * (zy[2] * o + zy[3] * s), i.b = n + a * (zy[4] * o + zy[5] * s), r !== void 0 && (i.alpha = r), i;
}, qy = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
	let n = Iy(e.h), r = Iy(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.s * t.s) * i;
}, Jy = (e, t) => {
	if (e.h === void 0 || t.h === void 0) return 0;
	let n = Iy(e.h), r = Iy(t.h);
	return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
}, Yy = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
	let n = Iy(e.h), r = Iy(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.c * t.c) * i;
}, Xy = (e = "rgb", t = [
	1,
	1,
	1,
	0
]) => {
	let n = ry(e), r = n.channels, i = n.difference, a = Xv(e);
	return (e, n) => {
		let o = a(e), s = a(n);
		return Math.sqrt(r.reduce((e, n, r) => {
			let a = i[n] ? i[n](o, s) : o[n] - s[n];
			return e + (t[r] || 0) * (isNaN(a) ? 0 : a) ** 2;
		}, 0));
	};
}, Zy = (e = 1, t = 1, n = 1) => {
	let r = Xv("lab65");
	return (i, a) => {
		let o = r(i), s = r(a), c = o.l, l = o.a, u = o.b, d = Math.sqrt(l * l + u * u), f = s.l, p = s.a, m = s.b, h = (d + Math.sqrt(p * p + m * m)) / 2, g = .5 * (1 - Math.sqrt(h ** 7 / (h ** 7 + 25 ** 7))), _ = l * (1 + g), v = p * (1 + g), y = Math.sqrt(_ * _ + u * u), b = Math.sqrt(v * v + m * m), x = Math.abs(_) + Math.abs(u) === 0 ? 0 : Math.atan2(u, _);
		x += (x < 0) * 2 * Math.PI;
		let S = Math.abs(v) + Math.abs(m) === 0 ? 0 : Math.atan2(m, v);
		S += (S < 0) * 2 * Math.PI;
		let C = f - c, w = b - y, T = y * b === 0 ? 0 : S - x;
		T -= (T > Math.PI) * 2 * Math.PI, T += (T < -Math.PI) * 2 * Math.PI;
		let E = 2 * Math.sqrt(y * b) * Math.sin(T / 2), D = (c + f) / 2, O = (y + b) / 2, k;
		y * b === 0 ? k = x + S : (k = (x + S) / 2, k -= (Math.abs(x - S) > Math.PI) * Math.PI, k += (k < 0) * 2 * Math.PI);
		let A = (D - 50) ** 2, j = 1 - .17 * Math.cos(k - Math.PI / 6) + .24 * Math.cos(2 * k) + .32 * Math.cos(3 * k + Math.PI / 30) - .2 * Math.cos(4 * k - 63 * Math.PI / 180), M = 1 + .015 * A / Math.sqrt(20 + A), N = 1 + .045 * O, P = 1 + .015 * O * j, F = 30 * Math.PI / 180 * Math.exp(-1 * ((180 / Math.PI * k - 275) / 25) ** 2), I = 2 * Math.sqrt(O ** 7 / (O ** 7 + 25 ** 7)), L = -1 * Math.sin(2 * F) * I;
		return Math.sqrt((C / (e * M)) ** 2 + (w / (t * N)) ** 2 + (E / (n * P)) ** 2 + L * w / (t * N) * E / (n * P));
	};
}, Qy = (e) => {
	let t = e.reduce((e, t) => {
		if (t !== void 0) {
			let n = t * Math.PI / 180;
			e.sin += Math.sin(n), e.cos += Math.cos(n);
		}
		return e;
	}, {
		sin: 0,
		cos: 0
	}), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
	return n < 0 ? 360 + n : n;
}, $y = {
	mode: "cubehelix",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--cubehelix"],
	serialize: "--cubehelix",
	ranges: {
		h: [0, 360],
		s: [0, 4.614],
		l: [0, 1]
	},
	fromMode: { rgb: Gy },
	toMode: { rgb: Ky },
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		s: $,
		l: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: qy },
	average: { h: Qy }
}, eb = ({ l: e, a: t, b: n, alpha: r }, i = "lch") => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let a = Math.sqrt(t * t + n * n), o = {
		mode: i,
		l: e,
		c: a
	};
	return a && (o.h = Iy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, tb = ({ l: e, c: t, h: n, alpha: r }, i = "lab") => {
	n === void 0 && (n = 0);
	let a = {
		mode: i,
		l: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (a.alpha = r), a;
}, nb = 29 ** 3 / 27, rb = 216 / 29 ** 3, ib = {
	X: .3457 / .3585,
	Y: 1,
	Z: .2958 / .3585
}, ab = {
	X: .3127 / .329,
	Y: 1,
	Z: .3583 / .329
}, ob = (e) => e ** 3 > rb ? e ** 3 : (116 * e - 16) / nb, sb = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz65",
		x: ob(a) * ab.X,
		y: ob(i) * ab.Y,
		z: ob(o) * ab.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, cb = (e) => Py(sb(e)), lb = (e) => e > rb ? Math.cbrt(e) : (nb * e + 16) / 116, ub = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = lb(e / ab.X), a = lb(t / ab.Y), o = lb(n / ab.Z), s = {
		mode: "lab65",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, db = (e) => {
	let t = ub(jy(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, fb = 26 / 180 * Math.PI, pb = Math.cos(fb), mb = Math.sin(fb), hb = 100 / Math.log(139 / 100), gb = ({ l: e, c: t, h: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "lab65",
		l: (Math.exp(e * 1 / hb) - 1) / .0039
	}, a = (Math.exp(.0435 * t * 1 * 1) - 1) / .075, o = a * Math.cos(n / 180 * Math.PI - fb), s = a * Math.sin(n / 180 * Math.PI - fb);
	return i.a = o * pb - s / .83 * mb, i.b = o * mb + s / .83 * pb, r !== void 0 && (i.alpha = r), i;
}, _b = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t * pb + n * mb, a = .83 * (n * pb - t * mb), o = Math.sqrt(i * i + a * a), s = {
		mode: "dlch",
		l: hb / 1 * Math.log(1 + .0039 * e),
		c: Math.log(1 + .075 * o) / .0435
	};
	return s.c && (s.h = Iy((Math.atan2(a, i) + fb) / Math.PI * 180)), r !== void 0 && (s.alpha = r), s;
}, vb = (e) => gb(eb(e, "dlch")), yb = (e) => tb(_b(e), "dlab"), bb = {
	mode: "dlab",
	parse: ["--din99o-lab"],
	serialize: "--din99o-lab",
	toMode: {
		lab65: vb,
		rgb: (e) => cb(vb(e))
	},
	fromMode: {
		lab65: yb,
		rgb: (e) => yb(db(e))
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},
	interpolate: {
		l: $,
		a: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, xb = {
	mode: "dlch",
	parse: ["--din99o-lch"],
	serialize: "--din99o-lch",
	toMode: {
		lab65: gb,
		dlab: (e) => tb(e, "dlab"),
		rgb: (e) => cb(gb(e))
	},
	fromMode: {
		lab65: _b,
		dlab: (e) => eb(e, "dlch"),
		rgb: (e) => _b(db(e))
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},
	interpolate: {
		l: $,
		c: $,
		h: {
			use: $,
			fixup: Ry
		},
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: Yy },
	average: { h: Qy }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertHsiToRgb.js
function Sb({ h: e, s: t, i: n, alpha: r }) {
	e = Iy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 4:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 5:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertRgbToHsi.js
function Cb({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsi",
		s: e + t + n === 0 ? 0 : 1 - 3 * a / (e + t + n),
		i: (e + t + n) / 3
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/definition.js
var wb = {
	mode: "hsi",
	toMode: { rgb: Sb },
	parse: ["--hsi"],
	serialize: "--hsi",
	fromMode: { rgb: Cb },
	channels: [
		"h",
		"s",
		"i",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		s: $,
		i: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: qy },
	average: { h: Qy }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertHslToRgb.js
function Tb({ h: e, s: t, l: n, alpha: r }) {
	e = Iy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = n + t * (n < .5 ? n : 1 - n), a = i - (i - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
	switch (Math.floor(e / 60)) {
		case 0:
			o = {
				r: i,
				g: a,
				b: 2 * n - i
			};
			break;
		case 1:
			o = {
				r: a,
				g: i,
				b: 2 * n - i
			};
			break;
		case 2:
			o = {
				r: 2 * n - i,
				g: i,
				b: a
			};
			break;
		case 3:
			o = {
				r: 2 * n - i,
				g: a,
				b: i
			};
			break;
		case 4:
			o = {
				r: a,
				g: 2 * n - i,
				b: i
			};
			break;
		case 5:
			o = {
				r: i,
				g: 2 * n - i,
				b: a
			};
			break;
		default: o = {
			r: 2 * n - i,
			g: 2 * n - i,
			b: 2 * n - i
		};
	}
	return o.mode = "rgb", r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertRgbToHsl.js
function Eb({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsl",
		s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
		l: .5 * (i + a)
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/util/hue.js
var Db = (e, t) => {
	switch (t) {
		case "deg": return +e;
		case "rad": return e / Math.PI * 180;
		case "grad": return e / 10 * 9;
		case "turn": return e * 360;
	}
}, Ob = RegExp(`^hsla?\\(\\s*${Wv}${Gv}${Vv}${Gv}${Vv}\\s*(?:,\\s*${Hv}\\s*)?\\)$`), kb = (e) => {
	let t = e.match(Ob);
	if (!t) return;
	let n = { mode: "hsl" };
	return t[3] === void 0 ? t[1] !== void 0 && t[2] !== void 0 && (n.h = Db(t[1], t[2])) : n.h = +t[3], t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] === void 0 ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))) : n.alpha = Math.max(0, Math.min(1, t[6] / 100)), n;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/parseHsl.js
function Ab(e, t) {
	if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
	let n = { mode: "hsl" }, [, r, i, a, o] = t;
	if (r.type !== Z.None) {
		if (r.type === Z.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== Z.None) {
		if (i.type === Z.Hue) return;
		n.s = i.value / 100;
	}
	if (a.type !== Z.None) {
		if (a.type === Z.Hue) return;
		n.l = a.value / 100;
	}
	return o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/definition.js
var jb = {
	mode: "hsl",
	toMode: { rgb: Tb },
	fromMode: { rgb: Eb },
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [Ab, kb],
	serialize: (e) => `hsl(${e.h === void 0 ? "none" : e.h} ${e.s === void 0 ? "none" : e.s * 100 + "%"} ${e.l === void 0 ? "none" : e.l * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		s: $,
		l: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: qy },
	average: { h: Qy }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertHsvToRgb.js
function Mb({ h: e, s: t, v: n, alpha: r }) {
	e = Iy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n,
				g: n * (1 - t * i),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 - t * i),
				g: n,
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n,
				b: n * (1 - t * i)
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 - t * i),
				b: n
			};
			break;
		case 4:
			a = {
				r: n * (1 - t * i),
				g: n * (1 - t),
				b: n
			};
			break;
		case 5:
			a = {
				r: n,
				g: n * (1 - t),
				b: n * (1 - t * i)
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertRgbToHsv.js
function Nb({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsv",
		s: i === 0 ? 0 : 1 - a / i,
		v: i
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/definition.js
var Pb = {
	mode: "hsv",
	toMode: { rgb: Mb },
	parse: ["--hsv"],
	serialize: "--hsv",
	fromMode: { rgb: Nb },
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		s: $,
		v: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: qy },
	average: { h: Qy }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertHwbToRgb.js
function Fb({ h: e, w: t, b: n, alpha: r }) {
	if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
		let e = t + n;
		t /= e, n /= e;
	}
	return Mb({
		h: e,
		s: n === 1 ? 1 : 1 - t / (1 - n),
		v: 1 - n,
		alpha: r
	});
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertRgbToHwb.js
function Ib(e) {
	let t = Nb(e);
	if (t === void 0) return;
	let n = t.s === void 0 ? 0 : t.s, r = t.v === void 0 ? 0 : t.v, i = {
		mode: "hwb",
		w: (1 - n) * r,
		b: 1 - r
	};
	return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/parseHwb.js
function Lb(e, t) {
	if (!t || t[0] !== "hwb") return;
	let n = { mode: "hwb" }, [, r, i, a, o] = t;
	if (r.type !== Z.None) {
		if (r.type === Z.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== Z.None) {
		if (i.type === Z.Hue) return;
		n.w = i.value / 100;
	}
	if (a.type !== Z.None) {
		if (a.type === Z.Hue) return;
		n.b = a.value / 100;
	}
	return o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/definition.js
var Rb = {
	mode: "hwb",
	toMode: { rgb: Fb },
	fromMode: { rgb: Ib },
	channels: [
		"h",
		"w",
		"b",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [Lb],
	serialize: (e) => `hwb(${e.h === void 0 ? "none" : e.h} ${e.w === void 0 ? "none" : e.w * 100 + "%"} ${e.b === void 0 ? "none" : e.b * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		w: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: Jy },
	average: { h: Qy }
}, zb = .1593017578125, Bb = 78.84375, Vb = .8359375, Hb = 18.8515625, Ub = 18.6875;
function Wb(e) {
	if (e < 0) return 0;
	let t = e ** (1 / Bb);
	return 1e4 * (Math.max(0, t - Vb) / (Hb - Ub * t)) ** (1 / zb);
}
function Gb(e) {
	if (e < 0) return 0;
	let t = (e / 1e4) ** zb;
	return ((Vb + Hb * t) / (1 + Ub * t)) ** +Bb;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/itp/convertItpToXyz65.js
var Kb = (e) => Math.max(e / 203, 0), qb = ({ i: e, t, p: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Wb(e + .008609037037932761 * t + .11102962500302593 * n), a = Wb(e - .00860903703793275 * t - .11102962500302599 * n), o = Wb(e + .5600313357106791 * t - .32062717498731885 * n), s = {
		mode: "xyz65",
		x: Kb(2.070152218389422 * i - 1.3263473389671556 * a + .2066510476294051 * o),
		y: Kb(.3647385209748074 * i + .680566024947227 * a - .0453045459220346 * o),
		z: Kb(-.049747207535812 * i - .0492609666966138 * a + 1.1880659249923042 * o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Jb = (e = 0) => Math.max(e * 203, 0), Yb = ({ x: e, y: t, z: n, alpha: r }) => {
	let i = Jb(e), a = Jb(t), o = Jb(n), s = Gb(.3592832590121217 * i + .6976051147779502 * a - .0358915932320289 * o), c = Gb(-.1920808463704995 * i + 1.1004767970374323 * a + .0753748658519118 * o), l = Gb(.0070797844607477 * i + .0748396662186366 * a + .8433265453898765 * o), u = {
		mode: "itp",
		i: .5 * s + .5 * c,
		t: 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * l,
		p: 4.378173828125 * s - 4.24560546875 * c - .132568359375 * l
	};
	return r !== void 0 && (u.alpha = r), u;
}, Xb = {
	mode: "itp",
	channels: [
		"i",
		"t",
		"p",
		"alpha"
	],
	parse: ["--ictcp"],
	serialize: "--ictcp",
	toMode: {
		xyz65: qb,
		rgb: (e) => Py(qb(e))
	},
	fromMode: {
		xyz65: Yb,
		rgb: (e) => Yb(jy(e))
	},
	ranges: {
		i: [0, .581],
		t: [-.369, .272],
		p: [-.164, .331]
	},
	interpolate: {
		i: $,
		t: $,
		p: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, Zb = 134.03437499999998, Qb = 16295499532821565e-27, $b = (e) => {
	if (e < 0) return 0;
	let t = (e / 1e4) ** zb;
	return ((Vb + Hb * t) / (1 + Ub * t)) ** +Zb;
}, ex = (e = 0) => Math.max(e * 203, 0), tx = ({ x: e, y: t, z: n, alpha: r }) => {
	e = ex(e), t = ex(t), n = ex(n);
	let i = 1.15 * e - .15 * n, a = .66 * t + .34 * e, o = $b(.41478972 * i + .579999 * a + .014648 * n), s = $b(-.20151 * i + 1.120649 * a + .0531008 * n), c = $b(-.0166008 * i + .2648 * a + .6684799 * n), l = (o + s) / 2, u = {
		mode: "jab",
		j: .44 * l / (1 - .56 * l) - Qb,
		a: 3.524 * o - 4.066708 * s + .542708 * c,
		b: .199076 * o + 1.096799 * s - 1.295875 * c
	};
	return r !== void 0 && (u.alpha = r), u;
}, nx = 134.03437499999998, rx = 16295499532821565e-27, ix = (e) => {
	if (e < 0) return 0;
	let t = e ** (1 / nx);
	return 1e4 * ((Vb - t) / (Ub * t - Hb)) ** (1 / zb);
}, ax = (e) => e / 203, ox = ({ j: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + rx) / (.44 + .56 * (e + rx)), a = ix(i + .13860504 * t + .058047316 * n), o = ix(i - .13860504 * t - .058047316 * n), s = ix(i - .096019242 * t - .8118919 * n), c = {
		mode: "xyz65",
		x: ax(1.661373024652174 * a - .914523081304348 * o + .23136208173913045 * s),
		y: ax(-.3250758611844533 * a + 1.571847026732543 * o - .21825383453227928 * s),
		z: ax(-.090982811 * a - .31272829 * o + 1.5227666 * s)
	};
	return r !== void 0 && (c.alpha = r), c;
}, sx = (e) => {
	let t = tx(jy(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, cx = (e) => Py(ox(e)), lx = {
	mode: "jab",
	channels: [
		"j",
		"a",
		"b",
		"alpha"
	],
	parse: ["--jzazbz"],
	serialize: "--jzazbz",
	fromMode: {
		rgb: sx,
		xyz65: tx
	},
	toMode: {
		rgb: cx,
		xyz65: ox
	},
	ranges: {
		j: [0, .222],
		a: [-.109, .129],
		b: [-.185, .134]
	},
	interpolate: {
		j: $,
		a: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, ux = ({ j: e, a: t, b: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "jch",
		j: e,
		c: i
	};
	return i && (a.h = Iy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, dx = ({ j: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "jab",
		j: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, fx = {
	mode: "jch",
	parse: ["--jzczhz"],
	serialize: "--jzczhz",
	toMode: {
		jab: dx,
		rgb: (e) => cx(dx(e))
	},
	fromMode: {
		rgb: (e) => ux(sx(e)),
		jab: ux
	},
	channels: [
		"j",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		j: [0, .221],
		c: [0, .19],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		c: $,
		j: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: Yy },
	average: { h: Qy }
}, px = 29 ** 3 / 27, mx = 216 / 29 ** 3, hx = (e) => e ** 3 > mx ? e ** 3 : (116 * e - 16) / px, gx = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz50",
		x: hx(a) * ib.X,
		y: hx(i) * ib.Y,
		z: hx(o) * ib.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, _x = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Ny({
		r: e * 3.1341359569958707 - t * 1.6173863321612538 - .4906619460083532 * n,
		g: e * -.978795502912089 + t * 1.916254567259524 + .03344273116131949 * n,
		b: e * .07195537988411677 - t * .2289768264158322 + 1.405386058324125 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, vx = (e) => _x(gx(e)), yx = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ay(e), a = {
		mode: "xyz50",
		x: .436065742824811 * t + .3851514688337912 * n + .14307845442264197 * r,
		y: .22249319175623702 * t + .7168870538238823 * n + .06061979053616537 * r,
		z: .013923904500943465 * t + .09708128566574634 * n + .7140993584005155 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, bx = (e) => e > mx ? Math.cbrt(e) : (px * e + 16) / 116, xx = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = bx(e / ib.X), a = bx(t / ib.Y), o = bx(n / ib.Z), s = {
		mode: "lab",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Sx = (e) => {
	let t = xx(yx(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/parseLab.js
function Cx(e, t) {
	if (!t || t[0] !== "lab") return;
	let n = { mode: "lab" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.l = Math.min(Math.max(0, r.value), 100)), i.type !== Z.None && (n.a = i.type === Z.Number ? i.value : i.value * 125 / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value : a.value * 125 / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/definition.js
var wx = {
	mode: "lab",
	toMode: {
		xyz50: gx,
		rgb: vx
	},
	fromMode: {
		xyz50: xx,
		rgb: Sx
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	},
	parse: [Cx],
	serialize: (e) => `lab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		l: $,
		a: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, Tx = {
	...wx,
	mode: "lab65",
	parse: ["--lab-d65"],
	serialize: "--lab-d65",
	toMode: {
		xyz65: sb,
		rgb: cb
	},
	fromMode: {
		xyz65: ub,
		rgb: db
	},
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/parseLch.js
function Ex(e, t) {
	if (!t || t[0] !== "lch") return;
	let n = { mode: "lch" }, [, r, i, a, o] = t;
	if (r.type !== Z.None) {
		if (r.type === Z.Hue) return;
		n.l = Math.min(Math.max(0, r.value), 100);
	}
	if (i.type !== Z.None && (n.c = Math.max(0, i.type === Z.Number ? i.value : i.value * 150 / 100)), a.type !== Z.None) {
		if (a.type === Z.Percentage) return;
		n.h = a.value;
	}
	return o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/definition.js
var Dx = {
	mode: "lch",
	toMode: {
		lab: tb,
		rgb: (e) => vx(tb(e))
	},
	fromMode: {
		rgb: (e) => eb(Sx(e)),
		lab: eb
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	},
	parse: [Ex],
	serialize: (e) => `lch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		c: $,
		l: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: Yy },
	average: { h: Qy }
}, Ox = {
	...Dx,
	mode: "lch65",
	parse: ["--lch-d65"],
	serialize: "--lch-d65",
	toMode: {
		lab65: (e) => tb(e, "lab65"),
		rgb: (e) => cb(tb(e, "lab65"))
	},
	fromMode: {
		rgb: (e) => eb(db(e), "lch65"),
		lab65: (e) => eb(e, "lch65")
	},
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	}
}, kx = ({ l: e, u: t, v: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "lchuv",
		l: e,
		c: i
	};
	return i && (a.h = Iy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Ax = ({ l: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "luv",
		l: e,
		u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		v: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, jx = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Mx = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Nx = jx(ib.X, ib.Y, ib.Z), Px = Mx(ib.X, ib.Y, ib.Z), Fx = (e) => e <= mx ? px * e : 116 * Math.cbrt(e) - 16, Ix = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Fx(t / ib.Y), a = jx(e, t, n), o = Mx(e, t, n);
	!isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - Nx), o = 13 * i * (o - Px));
	let s = {
		mode: "luv",
		l: i,
		u: a,
		v: o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Lx = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Rx = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), zx = Lx(ib.X, ib.Y, ib.Z), Bx = Rx(ib.X, ib.Y, ib.Z), Vx = ({ l: e, u: t, v: n, alpha: r }) => {
	if (e === void 0 && (e = 0), e === 0) return {
		mode: "xyz50",
		x: 0,
		y: 0,
		z: 0
	};
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t / (13 * e) + zx, a = n / (13 * e) + Bx, o = ib.Y * (e <= 8 ? e / px : ((e + 16) / 116) ** 3), s = {
		mode: "xyz50",
		x: 9 * i * o / (4 * a),
		y: o,
		z: o * (12 - 3 * i - 20 * a) / (4 * a)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Hx = {
	mode: "lchuv",
	toMode: {
		luv: Ax,
		rgb: (e) => _x(Vx(Ax(e)))
	},
	fromMode: {
		rgb: (e) => kx(Ix(yx(e))),
		luv: kx
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	parse: ["--lchuv"],
	serialize: "--lchuv",
	ranges: {
		l: [0, 100],
		c: [0, 176.956],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: $,
			fixup: Ry
		},
		c: $,
		l: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	},
	difference: { h: Yy },
	average: { h: Qy }
}, Ux = {
	...wy,
	mode: "lrgb",
	toMode: { rgb: Ny },
	fromMode: { rgb: Ay },
	parse: ["srgb-linear"],
	serialize: "srgb-linear"
}, Wx = {
	mode: "luv",
	toMode: {
		xyz50: Vx,
		rgb: (e) => _x(Vx(e))
	},
	fromMode: {
		xyz50: Ix,
		rgb: (e) => Ix(yx(e))
	},
	channels: [
		"l",
		"u",
		"v",
		"alpha"
	],
	parse: ["--luv"],
	serialize: "--luv",
	ranges: {
		l: [0, 100],
		u: [-84.936, 175.042],
		v: [-125.882, 87.243]
	},
	interpolate: {
		l: $,
		u: $,
		v: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, Gx = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.cbrt(.412221469470763 * e + .5363325372617348 * t + .0514459932675022 * n), a = Math.cbrt(.2119034958178252 * e + .6806995506452344 * t + .1073969535369406 * n), o = Math.cbrt(.0883024591900564 * e + .2817188391361215 * t + .6299787016738222 * n), s = {
		mode: "oklab",
		l: .210454268309314 * i + .7936177747023054 * a - .0040720430116193 * o,
		a: 1.9779985324311684 * i - 2.42859224204858 * a + .450593709617411 * o,
		b: .0259040424655478 * i + .7827717124575296 * a - .8086757549230774 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Kx = (e) => {
	let t = Gx(Ay(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, qx = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + .3963377773761749 * t + .2158037573099136 * n) ** 3, a = (e - .1055613458156586 * t - .0638541728258133 * n) ** 3, o = (e - .0894841775298119 * t - 1.2914855480194092 * n) ** 3, s = {
		mode: "lrgb",
		r: 4.076741636075957 * i - 3.3077115392580616 * a + .2309699031821044 * o,
		g: -1.2684379732850317 * i + 2.6097573492876887 * a - .3413193760026573 * o,
		b: -.0041960761386756 * i - .7034186179359362 * a + 1.7076146940746117 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Jx = (e) => Ny(qx(e));
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/helpers.js
function Yx(e) {
	let t = .206, n = 1.206 / 1.03;
	return .5 * (n * e - t + Math.sqrt((n * e - t) * (n * e - t) + .12 * n * e));
}
function Xx(e) {
	return (e * e + .206 * e) / (1.206 / 1.03 * (e + .03));
}
function Zx(e, t) {
	let n, r, i, a, o, s, c, l;
	-1.88170328 * e - .80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, i = .59662641, a = .75515197, o = .56771245, s = 4.0767416621, c = -3.3077115913, l = .2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = .73956515, r = -.45954404, i = .08285427, a = .1254107, o = .14503204, s = -1.2684380046, c = 2.6097574011, l = -.3413193965) : (n = 1.35733652, r = -.00915799, i = -1.1513021, a = -.50559606, o = .00692167, s = -.0041960863, c = -.7034186147, l = 1.707614701);
	let u = n + r * e + i * t + a * e * e + o * e * t, d = .3963377774 * e + .2158037573 * t, f = -.1055613458 * e - .0638541728 * t, p = -.0894841775 * e - 1.291485548 * t;
	{
		let e = 1 + u * d, t = 1 + u * f, n = 1 + u * p, r = e * e * e, i = t * t * t, a = n * n * n, o = 3 * d * e * e, m = 3 * f * t * t, h = 3 * p * n * n, g = 6 * d * d * e, _ = 6 * f * f * t, v = 6 * p * p * n, y = s * r + c * i + l * a, b = s * o + c * m + l * h, x = s * g + c * _ + l * v;
		u -= y * b / (b * b - .5 * y * x);
	}
	return u;
}
function Qx(e, t) {
	let n = Zx(e, t), r = qx({
		l: 1,
		a: n * e,
		b: n * t
	}), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b));
	return [i, i * n];
}
function $x(e, t, n, r, i, a = null) {
	a ||= Qx(e, t);
	let o;
	if ((n - i) * a[1] - (a[0] - i) * r <= 0) o = a[1] * i / (r * a[0] + a[1] * (i - n));
	else {
		o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - n));
		{
			let a = n - i, s = r, c = .3963377774 * e + .2158037573 * t, l = -.1055613458 * e - .0638541728 * t, u = -.0894841775 * e - 1.291485548 * t, d = a + s * c, f = a + s * l, p = a + s * u;
			{
				let e = i * (1 - o) + o * n, t = o * r, a = e + t * c, s = e + t * l, m = e + t * u, h = a * a * a, g = s * s * s, _ = m * m * m, v = 3 * d * a * a, y = 3 * f * s * s, b = 3 * p * m * m, x = 6 * d * d * a, S = 6 * f * f * s, C = 6 * p * p * m, w = 4.0767416621 * h - 3.3077115913 * g + .2309699292 * _ - 1, T = 4.0767416621 * v - 3.3077115913 * y + .2309699292 * b, E = 4.0767416621 * x - 3.3077115913 * S + .2309699292 * C, D = T / (T * T - .5 * w * E), O = -w * D, k = -1.2684380046 * h + 2.6097574011 * g - .3413193965 * _ - 1, A = -1.2684380046 * v + 2.6097574011 * y - .3413193965 * b, j = -1.2684380046 * x + 2.6097574011 * S - .3413193965 * C, M = A / (A * A - .5 * k * j), N = -k * M, P = -.0041960863 * h - .7034186147 * g + 1.707614701 * _ - 1, F = -.0041960863 * v - .7034186147 * y + 1.707614701 * b, I = -.0041960863 * x - .7034186147 * S + 1.707614701 * C, L = F / (F * F - .5 * P * I), ee = -P * L;
				O = D >= 0 ? O : 1e6, N = M >= 0 ? N : 1e6, ee = L >= 0 ? ee : 1e6, o += Math.min(O, Math.min(N, ee));
			}
		}
	}
	return o;
}
function eS(e, t, n = null) {
	n ||= Qx(e, t);
	let r = n[0], i = n[1];
	return [i / r, i / (1 - r)];
}
function tS(e, t, n) {
	let r = Qx(t, n), i = $x(t, n, e, 1, e, r), a = eS(t, n, r), o = .11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = .11239642 + 1 / (1.6132032 - .68124379 * n + t * (.40370612 + .90148123 * n + t * (-.27087943 + .6122399 * n + t * (.00299215 - .45399568 * n - .14661872 * t)))), c = i / Math.min(e * a[0], (1 - e) * a[1]), l = e * o, u = (1 - e) * s, d = .9 * c * Math.sqrt(Math.sqrt(1 / (1 / (l * l * l * l) + 1 / (u * u * u * u))));
	return l = e * .4, u = (1 - e) * .8, [
		Math.sqrt(1 / (1 / (l * l) + 1 / (u * u))),
		d,
		i
	];
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function nS(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = {
		mode: "okhsl",
		l: Yx(t)
	};
	e.alpha !== void 0 && (i.alpha = e.alpha);
	let a = Math.sqrt(n * n + r * r);
	if (!a) return i.s = 0, i;
	let [o, s, c] = tS(t, n / a, r / a), l;
	if (a < s) {
		let e = .8 * o, t = 1 - e / s;
		l = (a - 0) / (e + t * (a - 0)) * .8;
	} else {
		let e = s, t = .2 * s * s * 1.25 * 1.25 / o, n = 1 - t / (c - s);
		l = .8 + .2 * ((a - e) / (t + n * (a - e)));
	}
	return l && (i.s = l, i.h = Iy(Math.atan2(r, n) * 180 / Math.PI)), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOkhslToOklab.js
function rS(e) {
	let t = e.h === void 0 ? 0 : e.h, n = e.s === void 0 ? 0 : e.s, r = e.l === void 0 ? 0 : e.l, i = {
		mode: "oklab",
		l: Xx(r)
	};
	if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || r === 1) return i.a = i.b = 0, i;
	let a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, c, l] = tS(i.l, a, o), u, d, f, p;
	n < .8 ? (u = 1.25 * n, d = 0, f = .8 * s, p = 1 - f / c) : (u = 5 * (n - .8), d = c, f = .2 * c * c * 1.25 * 1.25 / s, p = 1 - f / (l - c));
	let m = d + u * f / (1 - p * u);
	return i.a = m * a, i.b = m * o, i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/modeOkhsl.js
var iS = {
	...jb,
	mode: "okhsl",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--okhsl"],
	serialize: "--okhsl",
	fromMode: {
		oklab: nS,
		rgb: (e) => nS(Kx(e))
	},
	toMode: {
		oklab: rS,
		rgb: (e) => Jx(rS(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function aS(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = Math.sqrt(n * n + r * r), a = i ? n / i : 1, o = i ? r / i : 1, [s, c] = eS(a, o), l = .5, u = 1 - l / s, d = c / (i + t * c), f = d * t, p = d * i, m = Xx(f), h = p * m / f, g = qx({
		l: m,
		a: a * h,
		b: o * h
	}), _ = Math.cbrt(1 / Math.max(g.r, g.g, g.b, 0));
	t /= _, i = i / _ * Yx(t) / t, t = Yx(t);
	let v = {
		mode: "okhsv",
		s: i ? (l + c) * p / (c * l + c * u * p) : 0,
		v: t ? t / f : 0
	};
	return v.s && (v.h = Iy(Math.atan2(r, n) * 180 / Math.PI)), e.alpha !== void 0 && (v.alpha = e.alpha), v;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function oS(e) {
	let t = { mode: "oklab" };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let n = e.h === void 0 ? 0 : e.h, r = e.s === void 0 ? 0 : e.s, i = e.v === void 0 ? 0 : e.v, a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, c] = eS(a, o), l = .5, u = 1 - l / s, d = 1 - r * l / (l + c - c * u * r), f = r * c * l / (l + c - c * u * r), p = Xx(d), m = f * p / d, h = qx({
		l: p,
		a: a * m,
		b: o * m
	}), g = Math.cbrt(1 / Math.max(h.r, h.g, h.b, 0)), _ = Xx(i * d), v = f * _ / d;
	return t.l = _ * g, t.a = v * a * g, t.b = v * o * g, t;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/modeOkhsv.js
var sS = {
	...Pb,
	mode: "okhsv",
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	parse: ["--okhsv"],
	serialize: "--okhsv",
	fromMode: {
		oklab: aS,
		rgb: (e) => aS(Kx(e))
	},
	toMode: {
		oklab: oS,
		rgb: (e) => Jx(oS(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/parseOklab.js
function cS(e, t) {
	if (!t || t[0] !== "oklab") return;
	let n = { mode: "oklab" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.l = Math.min(Math.max(0, r.type === Z.Number ? r.value : r.value / 100), 1)), i.type !== Z.None && (n.a = i.type === Z.Number ? i.value : i.value * .4 / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value : a.value * .4 / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/definition.js
var lS = {
	...wx,
	mode: "oklab",
	toMode: {
		lrgb: qx,
		rgb: Jx
	},
	fromMode: {
		lrgb: Gx,
		rgb: Kx
	},
	ranges: {
		l: [0, 1],
		a: [-.4, .4],
		b: [-.4, .4]
	},
	parse: [cS],
	serialize: (e) => `oklab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/parseOklch.js
function uS(e, t) {
	if (!t || t[0] !== "oklch") return;
	let n = { mode: "oklch" }, [, r, i, a, o] = t;
	if (r.type !== Z.None) {
		if (r.type === Z.Hue) return;
		n.l = Math.min(Math.max(0, r.type === Z.Number ? r.value : r.value / 100), 1);
	}
	if (i.type !== Z.None && (n.c = Math.max(0, i.type === Z.Number ? i.value : i.value * .4 / 100)), a.type !== Z.None) {
		if (a.type === Z.Percentage) return;
		n.h = a.value;
	}
	return o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/definition.js
var dS = {
	...Dx,
	mode: "oklch",
	toMode: {
		oklab: (e) => tb(e, "oklab"),
		rgb: (e) => Jx(tb(e, "oklab"))
	},
	fromMode: {
		rgb: (e) => eb(Kx(e), "oklch"),
		oklab: (e) => eb(e, "oklch")
	},
	parse: [uS],
	serialize: (e) => `oklch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	ranges: {
		l: [0, 1],
		c: [0, .4],
		h: [0, 360]
	}
}, fS = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ay(e), a = {
		mode: "xyz65",
		x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
		y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
		z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, pS = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Ny({
		r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
		g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
		b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n
	}, "p3");
	return r !== void 0 && (i.alpha = r), i;
}, mS = {
	...wy,
	mode: "p3",
	parse: ["display-p3"],
	serialize: "display-p3",
	fromMode: {
		rgb: (e) => pS(jy(e)),
		xyz65: pS
	},
	toMode: {
		rgb: (e) => Py(fS(e)),
		xyz65: fS
	}
}, hS = (e) => {
	let t = Math.abs(e);
	return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
}, gS = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "prophoto",
		r: hS(e * 1.3457868816471585 - t * .2555720873797946 - .0511018649755453 * n),
		g: hS(e * -.5446307051249019 + t * 1.5082477428451466 + .0205274474364214 * n),
		b: hS(e * 0 + t * 0 + 1.2119675456389452 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, _S = (e = 0) => {
	let t = Math.abs(e);
	return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
}, vS = (e) => {
	let t = _S(e.r), n = _S(e.g), r = _S(e.b), i = {
		mode: "xyz50",
		x: .7977666449006423 * t + .1351812974005331 * n + .0313477341283922 * r,
		y: .2880748288194013 * t + .7118352342418731 * n + 899369387256e-16 * r,
		z: 0 * t + 0 * n + .8251046025104602 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, yS = {
	...wy,
	mode: "prophoto",
	parse: ["prophoto-rgb"],
	serialize: "prophoto-rgb",
	fromMode: {
		xyz50: gS,
		rgb: (e) => gS(yx(e))
	},
	toMode: {
		xyz50: vS,
		rgb: (e) => _x(vS(e))
	}
}, bS = 1.09929682680944, xS = .018053968510807, SS = (e) => {
	let t = Math.abs(e);
	return t > xS ? (Math.sign(e) || 1) * (bS * t ** .45 - .09929682680944008) : 4.5 * e;
}, CS = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "rec2020",
		r: SS(e * 1.7166511879712683 - t * .3556707837763925 - .2533662813736599 * n),
		g: SS(e * -.6666843518324893 + t * 1.6164812366349395 + .0157685458139111 * n),
		b: SS(e * .0176398574453108 - t * .0427706132578085 + .9421031212354739 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, wS = 1.09929682680944, TS = .018053968510807, ES = (e = 0) => {
	let t = Math.abs(e);
	return t < TS * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * ((t + wS - 1) / wS) ** (1 / .45);
}, DS = (e) => {
	let t = ES(e.r), n = ES(e.g), r = ES(e.b), i = {
		mode: "xyz65",
		x: .6369580483012911 * t + .1446169035862083 * n + .1688809751641721 * r,
		y: .262700212011267 * t + .6779980715188708 * n + .059301716469862 * r,
		z: 0 * t + .0280726930490874 * n + 1.0609850577107909 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, OS = {
	...wy,
	mode: "rec2020",
	fromMode: {
		xyz65: CS,
		rgb: (e) => CS(jy(e))
	},
	toMode: {
		xyz65: DS,
		rgb: (e) => Py(DS(e))
	},
	parse: ["rec2020"],
	serialize: "rec2020"
}, kS = .0037930732552754493, AS = Math.cbrt(kS), jS = (e) => Math.cbrt(e) - AS, MS = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ay(e), a = jS(.3 * t + .622 * n + .078 * r + kS), o = jS(.23 * t + .692 * n + .078 * r + kS), s = jS(.2434226892454782 * t + .2047674442449682 * n + .5518098665095535 * r + kS), c = {
		mode: "xyb",
		x: (a - o) / 2,
		y: (a + o) / 2,
		b: s - (a + o) / 2
	};
	return i !== void 0 && (c.alpha = i), c;
}, NS = (e) => (e + AS) ** 3, PS = {
	mode: "xyb",
	channels: [
		"x",
		"y",
		"b",
		"alpha"
	],
	parse: ["--xyb"],
	serialize: "--xyb",
	toMode: { rgb: ({ x: e, y: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = NS(e + t) - kS, a = NS(t - e) - kS, o = NS(n + t) - kS, s = Ny({
			r: 11.031566904639861 * i - 9.866943908131562 * a - .16462299650829934 * o,
			g: -3.2541473810744237 * i + 4.418770377582723 * a - .16462299650829934 * o,
			b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
		});
		return r !== void 0 && (s.alpha = r), s;
	} },
	fromMode: { rgb: MS },
	ranges: {
		x: [-.0154, .0281],
		y: [0, .8453],
		b: [-.2778, .388]
	},
	interpolate: {
		x: $,
		y: $,
		b: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, FS = {
	mode: "xyz50",
	parse: ["xyz-d50"],
	serialize: "xyz-d50",
	toMode: {
		rgb: _x,
		lab: xx
	},
	fromMode: {
		rgb: yx,
		lab: gx
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	ranges: {
		x: [0, .964],
		y: [0, .999],
		z: [0, .825]
	},
	interpolate: {
		x: $,
		y: $,
		z: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, IS = {
	mode: "xyz65",
	toMode: {
		rgb: Py,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz50",
				x: 1.0479298208405488 * t + .0229467933410191 * n - .0501922295431356 * r,
				y: .0296278156881593 * t + .990434484573249 * n - .0170738250293851 * r,
				z: -.0092430581525912 * t + .0150551448965779 * n + .7518742899580008 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	fromMode: {
		rgb: jy,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz65",
				x: .9554734527042182 * t - .0230985368742614 * n + .0632593086610217 * r,
				y: -.0283697069632081 * t + 1.0099954580058226 * n + .021041398966943 * r,
				z: .0123140016883199 * t - .0205076964334779 * n + 1.3303659366080753 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	ranges: {
		x: [0, .95],
		y: [0, 1],
		z: [0, 1.088]
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	parse: ["xyz", "xyz-d65"],
	serialize: "xyz-d65",
	interpolate: {
		x: $,
		y: $,
		z: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, LS = {
	mode: "yiq",
	toMode: { rgb: ({ y: e, i: t, q: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "rgb",
			r: e + .95608445 * t + .6208885 * n,
			g: e - .27137664 * t - .6486059 * n,
			b: e - 1.10561724 * t + 1.70250126 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	fromMode: { rgb: ({ r: e, g: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "yiq",
			y: .29889531 * e + .58662247 * t + .11448223 * n,
			i: .59597799 * e - .2741761 * t - .32180189 * n,
			q: .21147017 * e - .52261711 * t + .31114694 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	channels: [
		"y",
		"i",
		"q",
		"alpha"
	],
	parse: ["--yiq"],
	serialize: "--yiq",
	ranges: {
		i: [-.595, .595],
		q: [-.522, .522]
	},
	interpolate: {
		y: $,
		i: $,
		q: $,
		alpha: {
			use: $,
			fixup: Cy
		}
	}
}, RS = (e, t) => Math.round(e * (t = 10 ** t)) / t;
((e = 4) => (t) => typeof t == "number" ? RS(t, e) : t)(2);
var zS = (e) => Math.max(0, Math.min(1, e || 0)), BS = (e) => Math.round(zS(e) * 255), VS = Xv("rgb"), HS = (e) => {
	if (e === void 0) return;
	let t = BS(e.r), n = BS(e.g), r = BS(e.b);
	return "#" + (1 << 24 | t << 16 | n << 8 | r).toString(16).slice(1);
}, US = (e) => HS(VS(e)), WS = (e) => {
	let t = {
		mode: e.mode,
		r: Math.max(0, Math.min(e.r === void 0 ? 0 : e.r, 1)),
		g: Math.max(0, Math.min(e.g === void 0 ? 0 : e.g, 1)),
		b: Math.max(0, Math.min(e.b === void 0 ? 0 : e.b, 1))
	};
	return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, GS = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function KS(e = "rgb") {
	let { gamut: t } = ry(e);
	if (!t) return (e) => !0;
	let n = Xv(typeof t == "string" ? t : e);
	return (e) => GS(n(e));
}
function qS(e = "rgb") {
	let { gamut: t } = ry(e);
	if (!t) return (e) => Yv(e);
	let n = typeof t == "string" ? t : e, r = Xv(n), i = KS(n);
	return (e) => {
		let t = Yv(e);
		if (!t) return;
		let n = r(t);
		if (i(n)) return t;
		let a = WS(n);
		return t.mode === a.mode ? a : Xv(t.mode)(a);
	};
}
function JS(e = "rgb", t = "oklch", n = Xy("oklch"), r = .02) {
	let i = Xv(e), a = ry(e);
	if (!a.gamut) return (e) => i(e);
	let o = KS(e), s = qS(e), c = Xv(t), { ranges: l } = ry(t);
	if (!l.l || !l.c) throw Error("LCH-like space expected");
	return (t) => {
		if (t = Yv(t), t === void 0) return;
		let u = { ...c(t) };
		if (u.l === void 0 && (u.l = 0), u.c === void 0 && (u.c = 0), u.l >= l.l[1]) {
			let n = {
				...a.white,
				mode: e
			};
			return t.alpha !== void 0 && (n.alpha = t.alpha), n;
		}
		if (u.l <= l.l[0]) {
			let n = {
				...a.black,
				mode: e
			};
			return t.alpha !== void 0 && (n.alpha = t.alpha), n;
		}
		if (o(u)) return i(u);
		let d = 0, f = u.c, p = (l.c[1] - l.c[0]) / 4e3, m = s(u);
		for (; f - d > p;) u.c = (d + f) * .5, m = s(u), o(u) || n && r > 0 && n(u, m) <= r ? d = u.c : f = u.c;
		return i(o(u) ? u : m);
	};
}
ny(Fy), ny($y), ny(bb), ny(xb), ny(wb), ny(jb), ny(Pb), ny(Rb), ny(Xb), ny(lx), ny(fx), ny(wx), ny(Tx), ny(Dx), ny(Ox), ny(Hx), ny(Ux), ny(Wx), ny(iS), ny(sS), ny(lS), ny(dS), ny(mS), ny(yS), ny(OS), ny(wy), ny(PS), ny(FS), ny(IS), ny(LS);
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/color.js
var YS = Xv("oklch"), XS = Xv("rgb"), ZS = JS("rgb", "oklch");
Zy();
var QS = /[;{}<>\\\n\r]/, $S = /(?:var|color-mix|calc|env|attr)\s*\(/i, eC = /^[0-9a-f]+$/i;
function tC(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function nC(e) {
	return (e % 360 + 360) % 360;
}
function rC(e, t) {
	let n = 10 ** t, r = Math.round(e * n) / n;
	return Object.is(r, -0) ? 0 : r;
}
function iC(e) {
	if (typeof e != "string") return;
	let t = e.trim();
	if (!t || QS.test(t) || $S.test(t) || eC.test(t)) return;
	let n = vy(t);
	if (!n) return;
	let r = YS(n);
	if (r && Number.isFinite(r.l)) return {
		l: tC(r.l, 0, 1),
		c: Math.max(0, Number.isFinite(r.c) ? r.c : 0),
		h: Number.isFinite(r.h) ? nC(r.h) : 0,
		alpha: tC(typeof r.alpha == "number" ? r.alpha : 1, 0, 1)
	};
}
function aC(e) {
	return typeof e == "string" ? iC(e) : e;
}
function oC(e) {
	let t = rC(e.l, 4), n = rC(e.c, 4), r = n === 0 ? 0 : rC(nC(e.h), 2), i = rC(e.alpha, 3);
	return i < 1 ? `oklch(${t} ${n} ${r} / ${i})` : `oklch(${t} ${n} ${r})`;
}
function sC(e) {
	let t = iC(e);
	return t ? oC(t) : void 0;
}
function cC(e) {
	let t = {
		mode: "oklch",
		l: e.l,
		c: e.c,
		h: e.h
	}, n = XS(t), r = [
		n.r,
		n.g,
		n.b
	].every((e) => Number.isFinite(e) && e >= -.004 && e <= 1.004) ? n : XS(ZS(t));
	return [
		r.r,
		r.g,
		r.b
	].map((e) => tC(Number.isFinite(e) ? e : 0, 0, 1));
}
function lC(e) {
	let t = aC(e);
	if (!t) return;
	let [n, r, i] = cC(t);
	return US({
		mode: "rgb",
		r: n,
		g: r,
		b: i
	});
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/types.js
function uC(e) {
	return {
		photos: "photo",
		graphics: "graphic",
		icons: "icon",
		backgrounds: "background",
		templates: "template"
	}[e] ?? e.replace(/s$/, "");
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/integration-readers.js
function dC(e, t) {
	let n = Nv(Nv(Nv(e?.extensions).maps).strings), r = Pv(n[`${t}StyleUrl`]);
	if (!r) return null;
	let i = Pv(n[`${t}StyleName`]);
	return {
		url: r,
		...i ? { name: i } : {},
		source: "extensions.maps"
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-metrics.js
var fC = [
	["ascentOverride", "ascent-override"],
	["descentOverride", "descent-override"],
	["lineGapOverride", "line-gap-override"]
];
function pC(e) {
	let t = {};
	if (!e || typeof e != "object") return t;
	for (let [n] of fC) {
		let r = e[n], i = typeof r == "string" ? Number(r.replace(/%$/, "")) : r;
		typeof i == "number" && Number.isFinite(i) && i >= 0 && i <= 200 && (t[n] = Math.round(i * 100) / 100);
	}
	return t;
}
function mC(e) {
	let t = pC(e);
	return fC.flatMap(([e, n]) => t[e] === void 0 ? [] : [[n, `${t[e]}%`]]);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/defaults.js
var hC = { semantic: {
	background: "oklch(0.9838 0.0035 247.86)",
	foreground: "oklch(0.2064 0.0388 265.55)",
	card: "oklch(1 0 0)",
	cardForeground: "oklch(0.2064 0.0388 265.55)",
	popover: "oklch(1 0 0)",
	popoverForeground: "oklch(0.2064 0.0388 265.55)",
	primary: "oklch(0.5485 0.2164 264.07)",
	primaryForeground: "oklch(0.9838 0.0035 247.86)",
	secondary: "oklch(0.9514 0.0105 247.94)",
	secondaryForeground: "oklch(0.2064 0.0388 265.55)",
	muted: "oklch(0.9595 0.0088 247.92)",
	mutedForeground: "oklch(0.4964 0.0349 256.82)",
	accent: "oklch(0.934 0.0321 255.11)",
	accentForeground: "oklch(0.2064 0.0388 265.55)",
	destructive: "oklch(0.5988 0.2021 25.78)",
	destructiveForeground: "oklch(0.9838 0.0035 247.86)",
	border: "oklch(0.9008 0.0177 255.05)",
	input: "oklch(0.9008 0.0177 255.05)",
	ring: "oklch(0.5485 0.2164 264.07)",
	chart1: "oklch(0.5485 0.2164 264.07)",
	chart2: "oklch(0.6966 0.1138 208.91)",
	chart3: "oklch(0.801 0.1543 75.7)",
	chart4: "oklch(0.6645 0.1609 152.2)",
	chart5: "oklch(0.6119 0.2198 310.64)",
	sidebar: "oklch(0.9657 0.0082 258.33)",
	sidebarForeground: "oklch(0.2064 0.0388 265.55)",
	sidebarPrimary: "oklch(0.5485 0.2164 264.07)",
	sidebarPrimaryForeground: "oklch(0.9838 0.0035 247.86)",
	sidebarAccent: "oklch(0.934 0.0321 255.11)",
	sidebarAccentForeground: "oklch(0.2064 0.0388 265.55)",
	sidebarBorder: "oklch(0.884 0.0208 255.07)",
	sidebarRing: "oklch(0.5485 0.2164 264.07)"
} }, gC = .12, _C = .08, vC = .32, yC = .88, bC = [
	hC.semantic.chart1,
	hC.semantic.chart2,
	hC.semantic.chart3,
	hC.semantic.chart4,
	hC.semantic.chart5
].filter((e) => !!e);
function xC(e) {
	return (e % 360 + 360) % 360;
}
function SC(e) {
	if (e <= 0) return 0;
	let t = gC + Math.floor((e - 1) / 2) * _C;
	return e % 2 == 1 ? t : -t;
}
function CC(e, t) {
	if (t === 0) return e;
	let n = e + t;
	if (n >= vC && n <= yC) return n;
	let r = e - t;
	return Math.min(yC, Math.max(vC, r));
}
function wC(e, t) {
	let n = [...e].sort((e, t) => e - t), r = [];
	for (let e = 0; e < t; e += 1) {
		let e = n[0], t = -1;
		for (let r = 0; r < n.length; r += 1) {
			let i = n[r], a = r === n.length - 1 ? n[0] + 360 : n[r + 1];
			a - i > t && (t = a - i, e = i);
		}
		let i = xC(Math.round(e + t / 2));
		r.push(i), n.push(i), n.sort((e, t) => e - t);
	}
	return r;
}
function TC(e, t) {
	let n = Math.max(0, Math.floor(t));
	if (n === 0) return [];
	let r = e.length > 0 ? e : bC, i = r.map((e) => iC(e)), a = i.find((e) => e !== void 0), o = Math.max(0, 10 - r.length), s = o > 0 && a ? wC(i.filter((e) => e !== void 0).map((e) => e.h), o) : [], c = [];
	for (let e = 0; e < n; e += 1) {
		if (e < r.length) {
			c.push(r[e]);
			continue;
		}
		let t = e % 10, n = SC(Math.floor(e / 10)), o = t < r.length ? i[t] : a;
		if (!o) {
			c.push(a ? r[t] : r[e % r.length]);
			continue;
		}
		let l = t < r.length ? o.h : s[t - r.length];
		c.push(oC({
			l: CC(o.l, n),
			c: o.c,
			h: l,
			alpha: 1
		}));
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/css-safety.js
var EC = /["'\\\s<>]/, DC = /["\\\n\r\f<>]/, OC = /[;:{}<>()"'\\\n\r\f]/;
function kC(e) {
	return (typeof e == "string" || typeof e == "number") && !OC.test(String(e));
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-face-css.js
function AC(e, t = "block") {
	let { family: n, src: r, format: i, weight: a, style: o } = e;
	if (!n || DC.test(n) || !r || DC.test(r) || i && DC.test(i)) return;
	let s = a !== void 0 && a !== "";
	if (s && !kC(a) || o !== void 0 && !kC(o)) return;
	let c = [
		["font-family", `"${n}"`],
		["src", `url("${r}")${i ? ` format("${i}")` : ""}`],
		...s ? [["font-weight", String(a)]] : [],
		["font-style", o ?? "normal"],
		...mC(e.metrics),
		["font-display", "swap"]
	];
	return t === "compact" ? `@font-face{${c.map(([e, t]) => `${e}:${t};`).join("")}}` : [
		"@font-face {",
		...c.map(([e, t]) => `  ${e}: ${t};`),
		"}"
	].join("\n");
}
function jC(e, t) {
	let n = String(e ?? t ?? "").toLowerCase();
	return n.includes("woff2") ? "woff2" : n.includes("woff") ? "woff" : n.includes("otf") || n.includes("opentype") ? "opentype" : "truetype";
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-stack.js
function MC(e) {
	return e.replace(/^(["'])(.*)\1$/, "$2");
}
function NC(e) {
	return MC((e.split(",")[0] ?? "").trim()).trim();
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/logos.js
function PC(e, t) {
	return e === "svg" ? { svg: t } : e === "png" ? { png: t } : { jpg: t };
}
var FC = [
	"svg",
	"png",
	"jpg"
];
function IC(e) {
	for (let t of FC) {
		let n = e?.files?.[t]?.trim();
		if (n) return {
			src: n,
			format: t
		};
	}
}
function LC(e, t, n, r = {}) {
	let i = (e?.variants ?? []).filter((e) => e.kind === t && (e.background === n || e.background === "any")), a = [...i.filter((e) => e.background === n), ...i.filter((e) => e.background === "any")], o = r.name?.trim().toLowerCase(), s = o ? a.filter((e) => e.id.toLowerCase() === o || e.name?.trim().toLowerCase() === o) : [];
	return RC(s.length ? s : a, r.locale);
}
function RC(e, t) {
	let n = e.filter((e) => !e.locale);
	if (!t) return n[0] ?? e[0];
	let r = t.toLowerCase(), i = r.split("-")[0];
	return e.find((e) => e.locale?.toLowerCase() === r) ?? e.find((e) => e.locale?.toLowerCase().split("-")[0] === i) ?? n[0] ?? e[0];
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/published-assets.js
function zC(e) {
	return /^[a-z][a-z0-9+.-]*:/i.test(e) || e.startsWith("//");
}
function BC(e, t) {
	if (typeof e == "string" && e) return zC(e) || !t ? e : new URL(e.replace(/^\/+/, ""), `${t}/`).toString();
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/kit-runtime.js
function VC(e) {
	let t = e === void 0 ? void 0 : NC(e);
	return t && !DC.test(t) ? t : void 0;
}
function HC(e) {
	let t = Number(e);
	return Number.isInteger(t) && t >= 1 && t <= 1e3 ? t : void 0;
}
function UC(e, t = {}) {
	let n = Nv(e), r = [];
	for (let e of Array.isArray(n.fontStylesheets) ? n.fontStylesheets : []) {
		if (typeof e != "string" || EC.test(e)) continue;
		let n = BC(e, t.baseUrl);
		n && !/^data:/i.test(n) && !r.includes(n) && r.push(n);
	}
	let i = [];
	for (let e of Array.isArray(n.fontFaces) ? n.fontFaces : []) {
		if (!e || typeof e != "object") continue;
		let n = e, r = VC(typeof n.family == "string" ? n.family : void 0), a = typeof n.src == "string" && !DC.test(n.src) ? BC(n.src, t.baseUrl) : void 0, o = AC({
			family: r,
			src: a,
			format: jC(n.format, a),
			weight: HC(n.weight) ?? 400,
			style: n.style === "italic" ? "italic" : "normal",
			metrics: n
		});
		o && !i.includes(o) && i.push(o);
	}
	return {
		stylesheetUrls: r,
		fontFaceCss: i.join("\n")
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/collections-runtime.js
function WC(...e) {
	for (let t of e) {
		let e = Pv(t);
		if (e) return e;
	}
}
function GC(e) {
	return Object.fromEntries(Object.entries(e.collections ?? {}).filter((e) => Mv(e[1])));
}
function KC(e, t) {
	let n = WC(e.kind);
	if (n) return n;
	if (t?.startsWith("media.")) return t.slice(6);
	let r = WC(e.type);
	if (r) return {
		photo: "photos",
		graphic: "graphics",
		icon: "icons",
		background: "backgrounds",
		template: "templates"
	}[r] ?? r;
}
function qC(e) {
	return new Map(Object.entries(e.assignments ?? {}).flatMap(([e, t]) => e.startsWith("media.") && Pv(t) ? [[t, e]] : []));
}
function JC(e, t) {
	let n = Mv(e.versions) ? e.versions : {}, r = WC(t);
	if (r) {
		let e = n[r];
		return Mv(e) && e.archived !== !0 ? [r, e] : void 0;
	}
	let i = WC(e.defaultVersionId);
	if (i && Mv(n[i]) && n[i].archived !== !0) return [i, n[i]];
	let a = Object.entries(n).find(([, e]) => Mv(e) && e.archived !== !0);
	return a && Mv(a[1]) ? [a[0], a[1]] : void 0;
}
function YC(e, t, n, r) {
	let i = n.toLowerCase(), a = [
		t,
		KC(e, r),
		WC(e.type)
	].filter((e) => !!e).map((e) => e.toLowerCase()), o = uC(i);
	return a.includes(i) || a.includes(o);
}
function XC(e, t) {
	let n = GC(e), r = e.assignments?.[`media.${t}`] ?? e.assignments?.[t] ?? t;
	if (typeof r == "string" && Mv(n[r]) && n[r].archived !== !0) return [r, n[r]];
	let i = qC(e);
	return Object.entries(n).find(([e, n]) => n.archived !== !0 && YC(n, e, t, i.get(e)));
}
function ZC(e, t, n) {
	let r = XC(e, t);
	if (!r) return;
	let i = JC(r[1], n);
	if (i) return {
		collectionId: r[0],
		collection: r[1],
		versionId: i[0],
		version: i[1]
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/public-version.js
function QC(e) {
	return typeof e == "string" && /^1(?:\.\d+){0,2}$/.test(e);
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var $C = /* @__PURE__ */ "background.foreground.card.card-foreground.popover.popover-foreground.primary.primary-foreground.secondary.secondary-foreground.muted.muted-foreground.accent.accent-foreground.destructive.destructive-foreground.border.input.ring.chart-1.chart-2.chart-3.chart-4.chart-5.sidebar.sidebar-foreground.sidebar-primary.sidebar-primary-foreground.sidebar-accent.sidebar-accent-foreground.sidebar-border.sidebar-ring".split("."), ew = RegExp(`^--(?:color-)?(?:${$C.join("|")})$`), tw = /^--brand-ext-[A-Za-z0-9_-]+$/, nw = /^--font-(?:sans|serif|display|mono)$/;
function rw(e) {
	let t = J(e) ? e.runtime : void 0;
	return J(t) && t.version === 1 && J(t.light) ? t : void 0;
}
var iw = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, aw = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, ow = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", sw = RegExp(`^ok(?:lch|lab)\\(\\s*${ow}\\s+${ow}\\s+${ow}(?:\\s*\\/\\s*${ow})?\\s*\\)$`, "i"), cw = /^[a-z]+$/i, lw = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), uw = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", dw = RegExp(`^(${uw})(deg|turn|rad|grad)?\\s+(${uw})%\\s+(${uw})%(?:\\s*\\/\\s*(${uw})(%)?)?$`, "i"), fw = RegExp(`^hsla?\\(\\s*(${uw})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${uw})%\\s*(?:,\\s*|\\s+)(${uw})%\\s*(?:(?:,|\\/)\\s*(${uw})(%)?\\s*)?\\)$`, "i"), pw = /[;{}<>\\\n\r]/, mw = (e, t, n) => Math.min(n, Math.max(t, e)), hw = (e) => e.toString(16).padStart(2, "0"), gw = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function _w(e, t, n, r, i, a) {
	let o = (Number(e) * gw[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = mw(Number(n) / 100, 0, 1), c = mw(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : mw(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${hw(d)}${hw(f)}${hw(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function vw(e) {
	let t = Y(e);
	if (!t) return;
	if (iw.test(t) || aw.test(t) || sw.test(t)) return t;
	if (cw.test(t)) return lw.has(t.toLowerCase()) ? void 0 : t;
	let n = dw.exec(t) ?? fw.exec(t);
	if (n) return _w(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function yw(e, t = {}) {
	let n = Sw(e, t);
	return t?.adopt?.radius && Object.assign(n, xw(e)), n;
}
var bw = /^(?:0|(?:\d+\.?\d*|\.\d+)(?:px|rem|em|%))$/;
function xw(e) {
	let t = J(e?.tokens?.primitives?.radius) ? e.tokens.primitives.radius : {}, n = (e) => {
		let t = Y(e);
		return t && bw.test(t) ? t : void 0;
	}, r = {}, i = n(t.base);
	return i && (r["--radius"] = i), r;
}
function Sw(e, t = {}) {
	let n = {};
	if (J(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? vw(r) : Y(r);
		t !== void 0 && !pw.test(t) && (n[e] = t);
	}
	if (!J(e)) return n;
	let r = rw(e);
	if (!r) return n;
	for (let [e, t] of Object.entries(r.light)) {
		let r = ew.test(e) || tw.test(e) ? vw(t) : nw.test(e) ? Y(t) : void 0;
		r !== void 0 && !pw.test(r) && (n[e] = r);
	}
	for (let e of $C) {
		let t = n[`--${e}`];
		t !== void 0 && !Object.prototype.hasOwnProperty.call(r.light, `--color-${e}`) && (n[`--color-${e}`] = t);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-chart.js
function Cw(e) {
	let t = vw(e);
	if (!t || /^[a-z]+$/i.test(t)) return;
	let n = sC(t);
	return n ? lC(n) : void 0;
}
function ww(e) {
	if (!J(e)) return [];
	let t = rw(e);
	if (t) return [
		1,
		2,
		3,
		4,
		5
	].map((e) => Y(t.light[`--chart-${e}`])).filter(Boolean);
	let n = J(e.tokens?.light?.semantic) ? e.tokens.light.semantic : {};
	return [
		1,
		2,
		3,
		4,
		5
	].map((e) => Y(n[`chart${e}`])).filter(Boolean);
}
function Tw(e, t = {}) {
	let n = ww(e).map(sC).filter(Boolean), r = (Array.isArray(t.fallback) ? t.fallback : []).map(Cw).filter(Boolean), i = Number.isInteger(t.count) && t.count > 0 ? t.count : void 0;
	if (n.length) return {
		colors: TC(n, i ?? n.length).map((e) => lC(e)).filter(Boolean),
		source: "brand"
	};
	let a = i ?? r.length;
	return {
		colors: r.length ? Array.from({ length: a }, (e, t) => r[t % r.length]) : [],
		source: "template"
	};
}
function Ew(e, t, n) {
	let r = rw(e), i = r ? Y(r.light[`--${t}`]) : void 0, a = J(e?.tokens?.light?.semantic) ? e.tokens.light.semantic[n] : void 0;
	return Cw(i ?? a);
}
var Dw = {
	ink: ["foreground", "foreground"],
	line: ["border", "border"],
	muted: ["muted-foreground", "mutedForeground"],
	surface: ["background", "background"]
};
function Ow(e, t = {}) {
	let n = Array.isArray(t?.palette) ? t.palette : [], { colors: r } = Tw(e, {
		fallback: n,
		count: n.length || void 0
	}), i = r.length ? { palette: r } : {};
	for (let [n, [r, a]] of Object.entries(Dw)) {
		let o = Cw(t?.[n]) ?? Ew(e, r, a);
		o && (i[n] = o);
	}
	return i;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-format.js
function kw(e) {
	let t = J(e) && J(e.extensions?.locale?.strings) ? e.extensions.locale.strings : {}, n = Y(t.default), r = Y(t.currency);
	return {
		...n ? { locale: n } : {},
		...r ? { currency: r } : {}
	};
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var Aw = /^https?:\/\//i, jw = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function Mw(e, t) {
	let n = J(e) ? Y(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = Y(t);
	if (r && Aw.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function Nw(e, t) {
	let n = Y(e);
	if (n && !/\s/.test(n)) {
		if (Aw.test(n) || /^data:/i.test(n)) return n;
		if (!(/^[a-z][a-z0-9+.-]*:/i.test(n) || n.startsWith("//"))) {
			if (!t) return n;
			try {
				return new URL(n, `${t}/`).toString();
			} catch {
				return;
			}
		}
	}
}
var Pw = /\/versions\/v\d+\//, Fw = /^v[1-9]\d*$/, Iw = /^([^?#]*\/kits\/[^/?#]+)\/brandkit\.json([?#].*)?$/i;
function Lw(e) {
	return typeof e == "string" && Pw.test(e.replace(/[?#].*$/, ""));
}
function Rw(e, t) {
	let n = t && Fw.test(t) ? Iw.exec(e) : null;
	return n ? `${n[1]}/versions/${t}/brandkit.json${n[2] ?? ""}` : void 0;
}
function zw(e) {
	let t = J(e) && J(e.brand) ? e.brand : void 0;
	if (t?.kind === "kit") {
		let e = Nw(t.url) ?? null, n = Y(t.version), r = e && !Lw(e) ? Rw(e, n) ?? e : e, i = Lw(r);
		if (r && !i) return be(`brand-kit-unpinned:${r}`, `[uhuu-components] payload.brand ${r} is not an immutable versions/vN/brandkit.json URL` + (n ? ` (version ${JSON.stringify(n)} pins only when it is vN beside a …/kits/<kit>/brandkit.json URL)` : "") + ". The template keeps its local current brand until a pinned URL is supplied."), {
			source: "none",
			src: null,
			pinned: !1
		};
		if (r) return {
			source: "payload",
			src: r,
			pinned: i
		};
	}
	return t?.kind === "preset" ? (be(`brand-kit-preset:${t.presetId}`, `[uhuu-components] payload.brand names preset ${String(t.presetId)}, which the host resolves; the template renders its own brand.`), {
		source: "payload",
		src: null,
		pinned: !0,
		...Y(t.presetId) ? { presetId: t.presetId } : {}
	}) : {
		source: "none",
		src: null,
		pinned: !1
	};
}
async function Bw(e, t = {}) {
	let n = t.fetch ?? globalThis.fetch;
	if (typeof n != "function") throw Error("[uhuu-components] loadBrandKit needs fetch");
	let r = await n(e, {
		signal: t.signal,
		headers: { accept: "application/json" }
	});
	if (!r.ok) throw Error(`[uhuu-components] Brand kit ${e} answered ${r.status}`);
	let i;
	try {
		i = await r.json();
	} catch (t) {
		throw Error(`[uhuu-components] Brand kit ${e} is not JSON (${t?.message ?? t})`);
	}
	if (!J(i)) throw Error(`[uhuu-components] Brand kit ${e} is not a JSON object`);
	return i;
}
var Vw = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, Hw = (e) => J(e) ? IC({ files: {
	svg: Y(e.svg),
	png: Y(e.png),
	jpg: Y(e.jpg)
} }) : void 0;
function Uw(e, t = {}) {
	if (!J(e)) return null;
	let n = Vw[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = Gw(e, n, t.background === "dark" ? "dark" : "light", Mw(e, t.sourceUrl), Y(e.name), t);
	return r || n !== "wordmark" ? r : Uw(e, {
		...t,
		kind: "primary"
	});
}
function Ww(e) {
	return (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants : []).flatMap((e, t) => {
		if (!J(e) || !Hw(e.files)) return [];
		let n = [
			"light",
			"dark",
			"any"
		].includes(e.background) ? e.background : "any";
		return [{
			...e,
			id: Y(e.id) ?? `variant-${t + 1}`,
			background: n,
			...Y(e.name) ? { name: Y(e.name) } : { name: void 0 },
			...Y(e.locale) ? { locale: Y(e.locale) } : { locale: void 0 },
			files: PC(Hw(e.files).format, Hw(e.files).src)
		}];
	});
}
function Gw(e, t, n, r, i, a = {}) {
	let o = { variants: Ww(e) }, s = {
		name: Y(a.name),
		locale: Y(a.locale)
	}, c = LC(o, t, n, s) ?? LC(o, t, n === "dark" ? "light" : "dark", s);
	if (!c) return null;
	let l = IC(c), u = l ? Nw(l.src, r) : void 0;
	return u ? {
		src: u,
		format: l.format,
		alt: c.name ?? i,
		kind: t,
		background: c.background,
		...c.locale ? { locale: c.locale } : {}
	} : null;
}
function Kw(e, t, n = {}) {
	if (!J(e) || !J(e.collections) || !QC(e.version)) return null;
	let r = ZC(e, t, n.versionId);
	if (!r) return null;
	let { collectionId: i, collection: a, versionId: o, version: s } = r, c = Mw(e, n.sourceUrl), l = J(a.schema?.keys) ? a.schema.keys : {}, u = [];
	s && J(s.items) && (u = [...Object.keys(l).filter((e) => e in s.items), ...Object.keys(s.items).filter((e) => !(e in l))].map((e) => [e, s.items[e]]));
	let d = u.flatMap(([e, t]) => {
		if (!J(t)) return [];
		let n = Nw(t.src ?? t.url, c);
		if (!n) return [];
		let r = Y(t.label) ?? Y(l[e]?.label) ?? Y(t.name);
		return [{
			...t,
			key: e,
			src: n,
			...r ? { label: r } : {}
		}];
	});
	return {
		id: i,
		name: Y(a.name),
		type: Y(a.type),
		versionId: o ?? void 0,
		items: d
	};
}
function qw(e, t) {
	return dC(e, t === "macro" ? "macro" : "micro");
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-fonts.js
function Jw(e, t = {}) {
	if (!J(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = rw(e);
	return n ? UC(n, { baseUrl: Mw(e, t?.sourceUrl) }) : {
		fontFaceCss: "",
		stylesheetUrls: []
	};
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-preview.js
var Yw = "brand", Xw = /^v[1-9]\d*$/, Zw = /\/versions\/(v[1-9]\d*)\//, Qw = /\/versions\/v[1-9]\d*\/brandkit\.json$/, $w = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"[::1]"
]), eT = Object.freeze([
	"https://uhuu-brandkit.s3.eu-west-1.amazonaws.com",
	"https://brandkit.uhuu.io",
	"https://uhuu-layout-kit.s3.eu-west-1.amazonaws.com"
]);
function tT(e, t = []) {
	return $w.has(e.hostname) ? !0 : [...eT, ...t].some((t) => nT(t)?.origin === e.origin);
}
function nT(e, t) {
	try {
		return new URL(e, t);
	} catch {
		return null;
	}
}
function rT(e) {
	return !!e && !e.username && !e.password && (e.protocol === "https:" || e.protocol === "http:" && $w.has(e.hostname));
}
function iT(e) {
	let t = typeof e == "string" ? nT(e) : null;
	return rT(t) && Qw.test(t.pathname);
}
function aT(e) {
	let t = J(e) && J(e.generator) ? e.generator.release : void 0;
	if (!J(t)) return;
	let n = Y(t.version), r = Y(t.url);
	if (!n || !Xw.test(n) || !iT(r)) return;
	let i = typeof t.teamId == "number" ? String(t.teamId) : Y(t.teamId), a = Y(t.kitId), o = Y(t.appUrl);
	return {
		version: n,
		url: r,
		...i ? { teamId: i } : {},
		...a ? { kitId: a } : {},
		...o ? { appUrl: o } : {}
	};
}
function oT(e, t) {
	let n = new URL(e.url);
	return n.pathname = n.pathname.replace(Zw, `/versions/${t}/`), n.toString();
}
function sT(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return new URLSearchParams(e).get(Yw);
	} catch {
		return null;
	}
}
function cT(e, t = {}) {
	let n = typeof e == "string" ? e.trim() : "", r = `a version (v9), a version link (…/versions/vN/brandkit.json)${t.origin ? " or a path on this page's origin (/candidate.json)" : ""}`;
	if (!n) return {
		input: n,
		error: `it is empty: pass ${r}`
	};
	if (Xw.test(n)) {
		let e = aT(t.brandKit);
		return e ? {
			input: n,
			url: oT(e, n),
			version: n
		} : {
			input: n,
			error: `${n} needs the template's brandkit.json to name its published version (generator.release); pass the version link instead`
		};
	}
	if (t.origin && n.startsWith("/") && !n.startsWith("//")) {
		let e = nT(t.origin), r = e ? nT(n, e) : null;
		if (!r || r.origin !== e.origin) return {
			input: n,
			error: `${n} is not a path on this page's origin`
		};
		let i = Zw.exec(r.pathname)?.[1];
		return {
			input: n,
			url: r.toString(),
			...i ? { version: i } : {}
		};
	}
	let i = /^https?:\/\//i.test(n) ? nT(n) : null;
	return i ? rT(i) ? tT(i, t.extraOrigins) ? Qw.test(i.pathname) ? {
		input: n,
		url: i.toString(),
		version: Zw.exec(i.pathname)[1]
	} : {
		input: n,
		error: `${n} is not a published version (…/versions/vN/brandkit.json): a kit's root brandkit.json and versions/latest change with every publish`
	} : {
		input: n,
		error: `${i.origin} is not a Brand Kit origin (${eT.join(", ")})`
	} : {
		input: n,
		error: `${n} is not an https link without credentials`
	} : {
		input: n,
		error: `${n} is not ${r}`
	};
}
function lT(e) {
	if (!J(e)) return "it is not a JSON object";
	if (!QC(e.version)) return `its version is ${JSON.stringify(e.version ?? null)}, not 1.x`;
	if (!J(e.runtime) || e.runtime.version !== 1) return "it has no runtime version 1";
}
function uT(e, t = aT(e)?.version) {
	return [J(e) ? Y(e.name) : void 0, t].filter(Boolean).join(" ") || void 0;
}
function dT(e) {
	let t = rw(e)?.light ?? {};
	return Object.fromEntries(Object.entries(t).filter(([, e]) => typeof e == "string" || typeof e == "number").map(([e, t]) => [e, String(t)]));
}
function fT(e) {
	if (!J(e)) return {};
	let t = J(e.fonts) ? e.fonts : {}, n = J(e.assignments) ? e.assignments : {}, r = {}, i = /* @__PURE__ */ new Set();
	for (let [e, a] of Object.entries(n)) {
		if (!e.startsWith("font.") || typeof a != "string") continue;
		i.add(a);
		let n = J(t[a]) ? Y(t[a].family) : void 0;
		n && (r[e.slice(5)] = n);
	}
	for (let [e, n] of Object.entries(t)) {
		let t = J(n) ? Y(n.family) : void 0;
		t && !i.has(e) && !(e in r) && (r[e] = t);
	}
	return r;
}
function pT(e) {
	let t = {};
	for (let n of ["primary", "mark"]) {
		let r = Uw(e, {
			kind: n,
			background: "light"
		})?.src, i = Uw(e, {
			kind: n,
			background: "dark"
		})?.src;
		r && (t[n] = r), i && i !== r && (t[`${n} on dark`] = i);
	}
	return t;
}
function mT(e, t, n, r) {
	for (let i of /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(n)])) t[i] !== n[i] && r.push({
		kind: e,
		name: i,
		...i in t ? { before: t[i] } : {},
		...i in n ? { after: n[i] } : {}
	});
}
function hT(e, t) {
	let n = [];
	return mT("variable", dT(e), dT(t), n), mT("font", fT(e), fT(t), n), mT("logo", pT(e), pT(t), n), n;
}
function gT(e) {
	let t = e.kind === "font" ? `Font ${e.name}` : e.kind === "logo" ? `Logo ${e.name}` : e.name;
	return e.before === void 0 ? `${t}: added, ${e.after}` : e.after === void 0 ? `${t}: removed (was ${e.before})` : `${t}: ${e.before} → ${e.after}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-preview-runtime.tsx
var _T = /* @__PURE__ */ new Set(), vT = !1, yT = [];
function bT() {
	_T.forEach((e) => e());
}
function xT(e) {
	return !vT && typeof window < "u" && (vT = !0, window.addEventListener("popstate", bT)), _T.add(e), () => {
		_T.delete(e);
	};
}
var ST = () => null;
function CT() {
	let e = window.location.hostname;
	return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1" || e.endsWith(".localhost") || e.endsWith(".local");
}
function wT() {
	return typeof window < "u" && ve() && CT() && !le();
}
function TT() {
	return wT() ? sT(window.location.search) : null;
}
function ET() {
	return g(xT, TT, ST);
}
function DT(e) {
	if (typeof window > "u") return;
	let t = new URL(window.location.href);
	e ? t.searchParams.set(Yw, e) : t.searchParams.delete(Yw), window.history.replaceState(window.history.state, "", t.toString()), bT();
}
function OT(e) {
	let t = ET();
	return f(() => t === null ? null : cT(t, {
		brandKit: e,
		origin: window.location.href
	}), [t, e]);
}
function kT() {
	return (yT.find((e) => e.renders) ?? yT[0])?.token ?? null;
}
function AT(e) {
	let [t] = h(() => ({})), n = g(xT, kT, ST), r = e !== null, i = e !== null && "url" in e;
	return ce(() => {
		if (!r) return;
		let e = {
			token: t,
			renders: i
		};
		return yT.push(e), bT(), () => {
			yT.splice(yT.indexOf(e), 1), bT();
		};
	}, [
		r,
		i,
		t
	]), r && n === t;
}
function jT() {
	let [e, t] = h(null);
	return l(() => {
		let e = ns();
		return e.style.zIndex = "9998", document.body.appendChild(e), t(e), () => {
			e.remove(), t(null);
		};
	}, []), e;
}
var MT = "uhuu:shrink-0 uhuu:rounded uhuu:px-1.5 uhuu:py-0.5 uhuu:font-medium uhuu:underline-offset-2 uhuu:hover:underline";
function NT({ preview: e, templateKit: t, candidate: n, status: r, error: i }) {
	let a = jT(), [o, s] = h(!1), c = f(() => n ? hT(t, n) : null, [t, n]);
	if (!a) return null;
	let l = Y(t?.name), u = aT(t)?.version, d;
	if ("error" in e) d = `Brand preview ignored: ${e.error}. The template's brand renders.`;
	else {
		let a = aT(n)?.version ?? e.version, o = Y(n?.name) ?? (e.version && !n ? l : void 0), s = o && a ? `${o} ${a}` : o ? `${o} from ${e.input}` : a ?? e.input, c = u ? o && o !== l ? uT(t) : u : "its own brand (no version)";
		d = r === "error" ? `${s} did not load (${i ?? "unknown error"}). The template's brand renders.` : `${r === "loading" ? "Loading" : "Previewing"} ${s} · template uses ${c}`;
	}
	return x(/* @__PURE__ */ v("div", {
		"data-uhuu-editor": !0,
		"data-uhuu-brand-preview": "error" in e ? "invalid" : r,
		role: "status",
		className: "uhuu-screen-only uhuu:fixed uhuu:inset-x-0 uhuu:bottom-3 uhuu:mx-auto uhuu:w-max uhuu:max-w-[min(720px,calc(100vw-24px))]",
		children: /* @__PURE__ */ y("div", {
			className: "uhuu:rounded-lg uhuu:bg-gray-900 uhuu:px-3 uhuu:py-2 uhuu:text-xs uhuu:text-(--uhuu-shell-on-inverse) uhuu:shadow-lg",
			children: [/* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-2",
				children: [
					/* @__PURE__ */ v("span", {
						className: "uhuu:min-w-0",
						children: d
					}),
					c ? /* @__PURE__ */ y("button", {
						type: "button",
						"aria-expanded": o,
						className: MT,
						onClick: () => s((e) => !e),
						children: [
							"What changed (",
							c.length,
							")"
						]
					}) : null,
					/* @__PURE__ */ v("button", {
						type: "button",
						className: MT,
						onClick: () => DT(null),
						children: "Stop"
					})
				]
			}), o && c ? /* @__PURE__ */ v("ul", {
				"data-uhuu-brand-preview-changes": "",
				className: "uhuu:mt-2 uhuu:max-h-[40vh] uhuu:overflow-auto uhuu:font-mono uhuu:text-[11px] uhuu:leading-snug",
				children: c.length ? c.map((e) => /* @__PURE__ */ v("li", { children: gT(e) }, `${e.kind}:${e.name}`)) : /* @__PURE__ */ v("li", { children: "No runtime variable, font or logo differs from the template's brand." })
			}) : null]
		})
	}), a);
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-provider.tsx
var PT = r(null);
function FT(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function IT({ brandKit: e, src: t, adopt: n, defaults: r, sourceUrl: i, onLoad: a, onError: o, className: s, style: c, children: u }) {
	let d = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, p = OT(e), g = p && "url" in p ? p.url : void 0, _ = g ?? d, b = g !== void 0, [x, S] = h(null), C = m({
		onLoad: a,
		onError: o
	});
	ce(() => {
		C.current = {
			onLoad: a,
			onError: o
		};
	}, [a, o]), l(() => {
		if (!_) return;
		let e = new AbortController(), t = (e) => {
			S({
				src: _,
				brandKit: null,
				error: e instanceof Error ? e.message : String(e)
			}), b ? console.warn(`[uhuu-components] Brand preview ${_} did not load, so the template's brand renders.`, e) : C.current.onError ? C.current.onError(e) : console.error("[uhuu-components] BrandKitProvider: the kit did not load, so the fallback kit renders.", e);
		}, n = setTimeout(() => {
			e.abort();
			let n = /* @__PURE__ */ Error(`[uhuu-components] BrandKitProvider ${_} is still loading after ${Le / 1e3} s; using the fallback kit.`);
			t(n);
		}, Le);
		return Bw(_, { signal: e.signal }).then((r) => {
			if (e.signal.aborted) return;
			clearTimeout(n);
			let i = b ? lT(r) : void 0;
			i ? t(/* @__PURE__ */ Error(`${_} is not a current Brand Kit document: ${i}`)) : (S({
				src: _,
				brandKit: r
			}), b || C.current.onLoad?.(r));
		}, (r) => {
			e.signal.aborted || (clearTimeout(n), t(r));
		}), () => {
			clearTimeout(n), e.abort();
		};
	}, [_, b]), l(() => {
		_ && le() && !Lw(_) && be(`brand-kit-print-fetch:${_}`, `[uhuu-components] BrandKitProvider fetches ${_} while printing. Render the template's own brandkit.json, or pin the URL to versions/vN.`);
	}, [_]);
	let w = _ && x?.src === _ ? x : null, T = w?.brandKit ?? e ?? null, E = w?.brandKit && _ ? FT(_) : i, D = _ ? w ? w.brandKit ? "ready" : "error" : "loading" : "idle", O = AT(p), k = f(() => {
		let e = Mw(T, E);
		return {
			brandKit: T,
			cssVars: yw(T, {
				defaults: r,
				adopt: n
			}),
			sourceUrl: E,
			status: D,
			logo: (e = {}) => Uw(T, {
				...e,
				sourceUrl: E
			}),
			chartPalette: (e = {}) => Tw(T, e),
			chartBrand: (e = {}) => Ow(T, e),
			locale: kw(T),
			collection: (e, t = {}) => Kw(T, e, {
				...t,
				sourceUrl: E
			}),
			mapStyle: (e) => qw(T, e),
			resolveUrl: (t) => Nw(t, e)
		};
	}, [
		T,
		E,
		r,
		n,
		D
	]), A = f(() => Jw(T, { sourceUrl: E }), [T, E]), [j, M] = h(() => /* @__PURE__ */ new Set()), N = (e) => M((t) => t.has(e) ? t : new Set(t).add(e)), P = A.stylesheetUrls.filter((e) => !j.has(e)).join("\n"), F = D === "loading";
	return ce(() => F ? se.hold({
		label: `BrandKitProvider ${_}`,
		waitMs: Le
	}) : void 0, [F, _]), ce(() => P ? se.hold({
		label: `BrandKitProvider font stylesheet ${P}`,
		waitMs: Le
	}) : void 0, [P]), l(() => {
		if (!P) return;
		let e = setTimeout(() => {
			for (let e of P.split("\n")) N(e);
		}, Le);
		return () => clearTimeout(e);
	}, [P]), /* @__PURE__ */ y(PT.Provider, {
		value: k,
		children: [
			A.stylesheetUrls.map((e) => /* @__PURE__ */ v("link", {
				rel: "stylesheet",
				href: e,
				"data-uhuu-brand-kit-font": "",
				ref: (t) => {
					t?.sheet && N(e);
				},
				onLoad: () => N(e),
				onError: () => {
					be(`brand-kit-font:${e}`, `[uhuu-components] BrandKitProvider font stylesheet ${e} failed to load, so text prints in fallback fonts. Check the kit's font URL.`), N(e);
				}
			}, e)),
			A.fontFaceCss ? /* @__PURE__ */ v("style", {
				"data-uhuu-brand-kit-font": "",
				children: A.fontFaceCss
			}) : null,
			/* @__PURE__ */ v("div", {
				"data-uhuu-brand-kit": typeof T?.id == "string" ? T.id : "",
				"data-uhuu-brand-kit-status": D,
				className: s,
				style: {
					display: "contents",
					...k.cssVars,
					...c
				},
				children: u
			}),
			O && p ? /* @__PURE__ */ v(NT, {
				preview: p,
				templateKit: e ?? null,
				candidate: b ? w?.brandKit ?? null : null,
				status: D === "ready" ? "ready" : D === "error" ? "error" : "loading",
				error: w?.error
			}) : null
		]
	});
}
function LT() {
	return c(PT);
}
//#endregion
//#region src/uhuu/editor-shell/document/template-payload-core.ts
var RT = (e) => J(e);
function zT(e, t, n = /* @__PURE__ */ new WeakMap()) {
	if (Object.is(e, t)) return !0;
	if (!RT(e) && !Array.isArray(e) || !RT(t) && !Array.isArray(t) || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (n.get(e) === t) return !0;
	if (n.set(e, t), Array.isArray(e) && Array.isArray(t) && e.length !== t.length) return !1;
	let r = BT(e), i = BT(t);
	return r.length === i.length && r.every((r) => Object.prototype.hasOwnProperty.call(t, r) && zT(e[r], t[r], n));
}
function BT(e) {
	return Object.keys(e).filter((t) => e[t] !== void 0 && typeof e[t] != "function" && typeof e[t] != "symbol");
}
function VT(e, t, n) {
	let r = BT(e).filter((e) => e !== n), i = BT(t).filter((e) => e !== n);
	return r.length === i.length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && zT(e[n], t[n]));
}
function HT(e) {
	return {
		payload: e ?? {},
		sequence: 0,
		outgoing: []
	};
}
function UT(e, t) {
	let n = typeof t == "function" ? t(e.payload) : t;
	if (n === e.payload) return e;
	let r = {
		sequence: e.sequence + 1,
		payload: n
	};
	return {
		...e,
		payload: n,
		sequence: r.sequence,
		lastWrite: r
	};
}
function WT(e, t, n = 1) {
	return e.outgoing.some((e) => e.sequence === t.sequence) ? e : {
		...e,
		outgoing: [...e.outgoing, {
			...t,
			remainingEchoes: n
		}].slice(-32)
	};
}
function GT(e, t, n) {
	if (!t) return e;
	let r = e.outgoing.findIndex((e) => VT(e.payload, t, n));
	if (r !== -1) {
		let t = (e.outgoing[r].remainingEchoes ?? 1) - 1;
		return {
			...e,
			outgoing: t ? e.outgoing.map((e, n) => n === r ? {
				...e,
				remainingEchoes: t
			} : e) : e.outgoing.filter((e, t) => t !== r)
		};
	}
	let i = e.payload[n] === void 0 ? t : {
		...t,
		[n]: e.payload[n]
	}, a = e.outgoing.length ? [] : e.outgoing;
	return zT(i, e.payload) ? a === e.outgoing ? e : {
		...e,
		outgoing: a
	} : {
		...e,
		payload: i,
		outgoing: a
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-utils.ts
var KT = "uhuu_page_editor";
function qT(e) {
	return e.kind === "group";
}
function JT(e) {
	let t = [], n = 1;
	for (let r of e) if (qT(r)) for (let e of r.pages) t.push({
		...e,
		kind: "page",
		pageNum: n++
	});
	else t.push({
		...r,
		pageNum: n++
	});
	return t;
}
function YT(e) {
	let t = [], n = 1;
	for (let r of e) if (qT(r)) {
		let e = r.pages.map((e) => ({
			...e,
			kind: "page",
			pageNum: n++
		}));
		t.push({
			...r,
			pages: e
		});
	} else t.push({
		...r,
		pageNum: n++
	});
	return t;
}
function XT(e) {
	return JT(e).length;
}
function ZT(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (qT(e)) {
			let n = e.pages[0], r = n?.componentKey ?? n?.id;
			return {
				kind: "group",
				id: e.id,
				groupId: e.id,
				firstPageId: n?.id,
				firstPageComponentKey: r,
				firstPageComponent: n?.component,
				pageCount: e.pages.length,
				label: e.label,
				strictPosition: t,
				page: n,
				group: e
			};
		}
		{
			let n = e.componentKey ?? e.id;
			return {
				kind: "page",
				id: e.id,
				label: e.label,
				pageId: e.id,
				pageComponentKey: n,
				pageLabel: e.label,
				pageNum: e.pageNum,
				pageComponent: e.component,
				strictPosition: t,
				page: e
			};
		}
	});
}
function QT(e, t) {
	let n = /* @__PURE__ */ new Map();
	t.forEach((e) => {
		n.set(e.id, e);
	});
	let r = [];
	for (let t of e) {
		let e = n.get(t.id);
		e && r.push(e);
	}
	return r;
}
function $T(e) {
	return e.map((e) => {
		if ("kind" in e && e.kind) return e;
		if (e.pages && Array.isArray(e.pages)) return {
			kind: "group",
			...e,
			pages: (e.pages ?? []).map((e) => {
				let { kind: t, ...n } = e || {};
				return {
					kind: "page",
					...n
				};
			})
		};
		let { kind: t, ...n } = e;
		return {
			kind: "page",
			...n
		};
	});
}
function eE(e, t = KT) {
	let n = $T(e);
	return {
		key: t,
		items: n,
		totalPages: XT(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function tE(e, t = KT) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = $T(n.items);
	return {
		key: t,
		items: r,
		totalPages: XT(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function nE(e, t, n = KT) {
	let r = eE(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function rE() {
	return Math.random().toString(36).slice(2, 11);
}
function iE(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? rE() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function aE(e, t, n) {
	let r = n?.repeatable ? rE() : e;
	return {
		kind: "group",
		id: r,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable ?? !1,
		maxInstances: n?.maxInstances ?? null,
		pages: t.map((e, t) => {
			let n = typeof e == "string" ? e : e.key, i = typeof e == "string" ? void 0 : e.dataKey, a = typeof e == "string" ? void 0 : e.hasFlow;
			return {
				id: `${r}__${i ?? n}__${t}`,
				componentKey: n,
				templateId: n,
				...i ? { dataKey: i } : {},
				...a ? { hasFlow: a } : {}
			};
		}),
		...n
	};
}
function oE(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function sE(e, t, n) {
	for (let r of t) {
		let t = oE(r.start, n), i = oE(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function cE(e, t, n = 2) {
	switch (e) {
		case "all": return [{
			start: 1,
			end: t
		}];
		case "cover": return [{
			start: 1,
			end: n
		}, {
			start: -n,
			end: -1
		}];
		case "text": return t <= n * 2 ? [] : [{
			start: n + 1,
			end: -(n + 1)
		}];
		default: return [];
	}
}
function lE(e, t) {
	if (!t || t.mode === "all") return e;
	let n = XT(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : cE(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (qT(t)) {
		let e = t.pages.filter((e) => e.pageNum && sE(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && sE(t.pageNum, a, n) && o.push(t);
	return o;
}
function uE(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : cE(r, t, i);
	return a.length !== 0 && sE(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function dE(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function fE(e, t) {
	return t && qT(t) ? t.id : e?.id ?? null;
}
function pE(e, t, n) {
	let r = fE(t, n);
	return r ? {
		instanceId: r,
		integration: dE(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function mE(e, t, n) {
	return pE(e, t, n).integration;
}
function hE(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function gE(e) {
	if (!e) return {
		instanceId: null,
		fieldPath: e,
		isIntegrationPath: !1
	};
	if (e.startsWith("integrations.")) {
		let t = e.slice(13), n = t.indexOf(".");
		return n > 0 ? {
			instanceId: t.slice(0, n),
			fieldPath: t.slice(n + 1),
			isIntegrationPath: !0
		} : {
			instanceId: t,
			fieldPath: "",
			isIntegrationPath: !0
		};
	}
	return {
		instanceId: null,
		fieldPath: e,
		isIntegrationPath: !1
	};
}
function _E(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function vE(e, t, n) {
	let r = gE(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = _E(dE(e, i) || {}, a, n);
	return {
		...e,
		integrations: {
			...e?.integrations || {},
			[i]: o
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/option-core.js
var yE = /* @__PURE__ */ new Set([
	"select",
	"toggle",
	"slider",
	"counter",
	"color-series"
]);
function bE(e) {
	return yE.has(e?.type) ? e.type : "select";
}
function xE(e) {
	return e?.field ?? e?.id ?? e?.key;
}
function SE(e) {
	let t = e?.valueType;
	if (t === "string" || t === "number" || t === "boolean") return t;
	let n = bE(e);
	return n === "toggle" ? "boolean" : n === "slider" || n === "counter" ? "number" : "string";
}
var CE = J;
function wE(e, t, { fallback: n = !1 } = {}) {
	let r = xE(t), i = (CE(e) && r ? e[r] : void 0) ?? t?.defaultValue;
	if (i !== void 0 || !n) return i;
	let a = bE(t);
	return a === "toggle" ? !1 : a === "slider" || a === "counter" ? typeof t?.min == "number" ? t.min : 0 : "";
}
function TE(e, t) {
	return e == null || t == null ? !1 : String(e) === String(t);
}
function EE(e, t) {
	return (Array.isArray(e?.options) ? e.options : []).find((e) => TE(e?.value, t));
}
function DE(e) {
	return e === !0 || e === "true";
}
function OE(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (typeof e != "string" || e.trim() === "") return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function kE(e, t) {
	if (t == null) return t;
	switch (SE(e)) {
		case "number": {
			let e = OE(t);
			return e === void 0 ? t : e;
		}
		case "boolean": return DE(t);
		default: return String(t);
	}
}
//#endregion
//#region src/uhuu/editor-shell/document/template-data-provider.tsx
function AE(e, t) {
	if (!e || !t) return;
	let n = typeof t == "string" ? t : t?.id, r = typeof t == "string" ? void 0 : t?.templateId ?? t?.componentKey, i = typeof t == "string" ? void 0 : t?.componentKey, a = Array.from(new Set([
		n,
		r,
		i
	].filter(Boolean)));
	for (let t of a) if (e?.pages?.[t] !== void 0) return e.pages[t];
	for (let t of a) if (e?.groups?.[t] !== void 0) return e.groups[t];
	for (let t of a) if (e[t] !== void 0) return e[t];
}
var jE = e.createContext(null);
function ME({ payload: t, onPayloadChange: n, children: r, stateKey: i = KT }) {
	let [a, o] = e.useReducer((e, t) => t.type === "local" ? UT(e, t.update) : t.type === "sent" ? WT(e, t.write, t.publishers) : GT(e, t.payload, t.key), t, HT), s = a.payload, c = e.useRef(0);
	e.useEffect(() => {
		o({
			type: "external",
			payload: t,
			key: i
		});
	}, [t, i]), e.useEffect(() => {
		if (!a.lastWrite || a.lastWrite.sequence <= c.current) return;
		c.current = a.lastWrite.sequence;
		let e = typeof window > "u" ? void 0 : window.$uhuu, t = typeof e?.emitPayload == "function";
		(n || t) && o({
			type: "sent",
			write: a.lastWrite,
			publishers: Number(!!n) + Number(t)
		}), n?.(a.lastWrite.payload), t && e.emitPayload(a.lastWrite.payload);
	}, [a.lastWrite, n]);
	let l = e.useCallback((e) => {
		o({
			type: "local",
			update: e
		});
	}, []), u = e.useCallback((e, t, n) => {
		l((r) => ({
			...r ?? {},
			pages: {
				...r?.pages ?? {},
				[e]: {
					...r?.pages?.[e] ?? {},
					[t]: n
				}
			}
		}));
	}, [l]), d = e.useCallback((e, t) => {
		l((n) => {
			let r = n?.integrations ?? {}, i = r[e], a = typeof t == "function" ? t(i) : t;
			return {
				...n ?? {},
				integrations: {
					...r,
					[e]: a
				}
			};
		});
	}, [l]), f = e.useCallback((e, t, n) => {
		d(e, (e) => ({
			...RT(e) ? e : {},
			[t]: n
		}));
	}, [d]), p = e.useCallback((e) => {
		l((t) => {
			if (!t?.integrations || !t.integrations[e]) return t;
			let { [e]: n, ...r } = t.integrations;
			return {
				...t,
				integrations: Object.keys(r).length > 0 ? r : void 0
			};
		});
	}, [l]), m = e.useCallback((e, t) => {
		l((n) => vE(n, e, t));
	}, [l]), h = e.useCallback((e, t) => {
		let n = t ?? i;
		l((t) => nE(t, e, n));
	}, [l, i]), g = e.useCallback((e) => AE(s, e), [s]), _ = e.useMemo(() => ({
		payload: s,
		setPayload: l,
		setPageOptionValue: u,
		setIntegrationPayload: d,
		setIntegrationPayloadValue: f,
		removeIntegrationPayload: p,
		updateIntegrationByDialogPath: m,
		mergePageEditorState: h,
		getPagePayload: g
	}), [
		s,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g
	]);
	return /* @__PURE__ */ v(jE.Provider, {
		value: _,
		children: r
	});
}
function NE(e, t, n) {
	let r = xE(e);
	return {
		...e,
		getValue: (n) => {
			let r = wE(t?.pages?.[n.id], e, { fallback: !0 });
			return bE(e) === "toggle" ? DE(r) : r;
		},
		onChange: (t, i) => {
			n(t, r, kE(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-management.js
var PE = [
	"add",
	"remove",
	"reorder",
	"duplicate",
	"rename"
];
function FE(e) {
	let t = e && typeof e == "object" ? e : {}, n = t.locked !== !0, r = Object.fromEntries(PE.map((e) => [e, typeof t[e] == "boolean" ? t[e] : n]));
	return {
		...r,
		templateOwnsPages: !r.add && !r.remove && !r.reorder && !r.duplicate
	};
}
var IE = /* @__PURE__ */ new Set([
	"kind",
	"id",
	"pages",
	"templateId",
	"componentKey",
	"dataKey",
	"hasFlow",
	"strictPosition",
	"label",
	"className",
	"repeatable",
	"maxInstances",
	"allowAsSinglePage",
	"thumbnail"
]);
function LE(e, t, { rename: n = !1 } = {}) {
	if (!t?.length) return e;
	let r = /* @__PURE__ */ new Map(), i = (e) => e.forEach((e) => {
		e?.id && r.set(e.id, e), Array.isArray(e?.pages) && i(e.pages);
	});
	i(t);
	let a = (e) => {
		let t = r.get(e.id), i = t ? Object.fromEntries(Object.entries(t).filter(([e]) => !IE.has(e))) : {};
		t && n && !As(t.label, e.label) && (i.label = t.label);
		let o = {
			...e,
			...i
		};
		return Array.isArray(e.pages) ? {
			...o,
			pages: e.pages.map(a)
		} : o;
	};
	return e.map(a);
}
//#endregion
//#region src/uhuu/editor-shell/document/page-items-core.ts
function RE(e, t) {
	if (!e) return { keys: [] };
	if (Array.isArray(e)) return { keys: e };
	try {
		let n = e(t);
		if (!Array.isArray(n)) return {
			keys: [],
			issue: {
				reason: "invalid-result",
				detail: typeof n
			}
		};
		let r = n.filter((e) => typeof e == "string");
		return r.length === n.length ? { keys: r } : {
			keys: r,
			issue: {
				reason: "invalid-keys",
				detail: n
			}
		};
	} catch (e) {
		return {
			keys: [],
			issue: {
				reason: "evaluation-error",
				detail: e
			}
		};
	}
}
function zE(e, t, n) {
	let r = RE(e, t);
	return BE(r.issue, n), r.keys;
}
function BE(e, t) {
	if (!e) return;
	let n = t ? `page group "${t}"` : "a page group", r = `pageComponentKeys:${t ?? ""}:${e.reason}:${String(e.detail)}`;
	e.reason === "invalid-keys" ? be(r, `[uhuu-components] pageComponentKeys of ${n} returned non-string values; they are left out.`, e.detail) : e.reason === "invalid-result" ? Se(r, `[uhuu-components] pageComponentKeys of ${n} must return an array of page keys, got ${String(e.detail)}; the group renders no pages.`) : Se(r, `[uhuu-components] pageComponentKeys of ${n} threw; the group renders no pages:`, e.detail);
}
function VE(e) {
	let t = [], n = [], r = [];
	for (let i of e) i.strictPosition === "start" ? t.push(i) : i.strictPosition === "end" ? r.push(i) : n.push(i);
	return {
		start: t,
		middle: n,
		end: r
	};
}
function HE(e) {
	let { start: t, middle: n, end: r } = VE(e);
	return [
		...t,
		...n,
		...r
	];
}
function UE(e, t, n) {
	if (t.strictPosition === "start") return [t, ...e];
	if (t.strictPosition === "end") return [...e, t];
	let { start: r, middle: i, end: a } = VE(e), o = i.length;
	if (n && n.mode !== "end") {
		let t = i.findIndex((e) => e.id === n.anchorId);
		t === -1 ? e.find((e) => e.id === n.anchorId)?.strictPosition === "start" && (o = 0) : o = t + +(n.mode === "after");
	}
	return [
		...r,
		...i.slice(0, o),
		t,
		...i.slice(o),
		...a
	];
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor-restore.ts
function WE({ initialItems: e, savedItems: t, config: n, payload: r, management: i }) {
	if (i.templateOwnsPages) return LE(e, t, { rename: i.rename });
	if (!t) return e;
	let a = n.groups ?? {}, o = Array.isArray(a) ? a : Object.entries(a).map(([e, t]) => ({
		...t,
		id: e
	})), s = new Map(o.map((e) => [e.id, e])), c = n.pages ?? {}, l = (e) => c[e.componentKey ?? e.templateId ?? e.id] ?? (e.templateId ? c[e.templateId] : void 0) ?? c[e.id], u = (e) => l(e)?.hasFlow && !e.hasFlow ? {
		...e,
		hasFlow: !0
	} : e, d = (e, t) => t !== void 0 && As(e.label, t) && e.label !== t ? {
		...e,
		label: t
	} : e, f = t.map((e) => {
		if (e.kind !== "group") return d(u(e), l(e)?.label);
		let t = s.get(e.templateId ?? e.id), n = d(e, t?.label), i = {
			...n,
			...t?.strictPosition !== void 0 && !n.strictPosition ? { strictPosition: t.strictPosition } : {},
			pages: n.pages.map(u)
		};
		if (typeof t?.pageComponentKeys != "function") return i;
		let a = RE(t.pageComponentKeys, {
			payload: r,
			item: void 0,
			parent: void 0
		});
		return BE(a.issue, e.templateId ?? e.id), a.issue && a.issue.reason !== "invalid-keys" ? i : {
			...i,
			pages: a.keys.map((e, t) => {
				let n = c[e], r = n?.dataKey;
				return {
					id: `${i.id}__${r ?? e}__${t}`,
					componentKey: e,
					templateId: e,
					...r ? { dataKey: r } : {},
					...n?.hasFlow ? { hasFlow: !0 } : {}
				};
			})
		};
	}), p = new Set(e.map((e) => e.id)), m = f.filter((e) => p.has(e.id));
	if (![...p].some((e) => !m.some((t) => t.id === e)) && XT(m) !== XT(e)) {
		let t = f.filter((e) => !p.has(e.id) && (e.kind !== "group" || e.id !== (e.templateId ?? e.id)));
		return t.length ? HE([...e, ...t]) : e;
	}
	return f;
}
//#endregion
//#region src/uhuu/editor-shell/document/data-binding.ts
function GE(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function KE(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function qE({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = pE(e, t, n), o = n && qT(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => hE(a.instanceId, e)
		},
		paths: {
			integration: (e) => hE(a.instanceId, e),
			page: (e) => GE(s, e),
			group: (e) => GE(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: KE(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/document-typography.js
var JE = [
	"font-family",
	"font-size",
	"font-weight",
	"font-style",
	"font-variant",
	"font-stretch",
	"font-feature-settings",
	"font-variation-settings",
	"line-height",
	"letter-spacing",
	"word-spacing",
	"text-transform",
	"text-indent",
	"text-align",
	"text-shadow",
	"color"
], YE = (e) => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
function XE(e = typeof document > "u" ? void 0 : document) {
	let t = e?.querySelector("[data-uhuu-interactive]") ?? e?.body, n = t ? e.defaultView?.getComputedStyle(t) : void 0;
	if (!n) return;
	let r = {};
	for (let e of JE) {
		let t = n.getPropertyValue(e);
		t && (r[YE(e)] = t);
	}
	return r;
}
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
var ZE = (e) => {
	e?.setAttribute("inert", "");
}, QE = class extends e.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e) {
		be(`thumbnail:${this.props.pageId ?? ""}:${String(e)}`, `[uhuu-components] Page "${this.props.pageId ?? ""}" failed to render as a reorder thumbnail; its card shows no preview.`, e);
	}
	render() {
		return this.state.failed ? this.props.fallback : this.props.children;
	}
};
function $E(e) {
	return e ? {
		...e,
		virtualPageIndex: 0,
		virtualPageCount: 1
	} : void 0;
}
function eD({ children: t, style: n, acquireTypography: r }) {
	let [i, a] = e.useState();
	return ce(() => {
		let e = r();
		return a(e.style), e.release;
	}, [r]), /* @__PURE__ */ v("div", {
		className: "uhuu:shrink-0!",
		style: {
			...i,
			...n
		},
		children: t
	});
}
function tD(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = ee.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = ee.mmToPx(u), g = ee.mmToPx(d), _, b = 0, x = () => (_ ??= XE() ?? {}, b += 1, {
		style: _,
		release: () => {
			--b, b || (_ = void 0);
		}
	}), S = {
		width: `${h}px`,
		height: `${g}px`,
		backgroundColor: "white",
		pointerEvents: "none"
	};
	return (e, r, i) => {
		let a = e.strictPosition, o = a === "start" || a === "end";
		if (e.kind === "group") {
			let l = e.firstPageId, u = e.firstPageComponentKey ?? l, d = AE(n, {
				id: l,
				componentKey: u
			}), f = e.firstPageComponent || (u ? t[u] : null), _ = n?.integrations?.[e.id];
			return /* @__PURE__ */ y("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.id,
				children: [
					f ? /* @__PURE__ */ v("div", {
						ref: ZE,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ v(QE, {
								pageId: l,
								fallback: null,
								children: /* @__PURE__ */ v(eD, {
									style: S,
									acquireTypography: x,
									children: /* @__PURE__ */ v(f, {
										payload: n,
										pageId: l,
										templateId: u,
										pagePayload: d,
										componentKey: u,
										integration: _,
										page: $E(e.page),
										parentGroup: e.group ?? e,
										pageNum: r + 1,
										dataBinding: e.page ? qE({
											payload: n,
											page: e.page,
											parentGroup: e.group,
											pagePayload: d
										}) : void 0
									})
								})
							})
						})
					}) : /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:pointer-events-none",
						children: /* @__PURE__ */ y("div", {
							className: "uhuu:text-center uhuu:p-4",
							children: [/* @__PURE__ */ v("div", {
								className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
								children: s("thumbnail.groupFallbackName", { id: e.id })
							}), /* @__PURE__ */ v("div", {
								className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
								children: l || s("thumbnail.noPreview")
							})]
						})
					}),
					/* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:right-2 uhuu:px-2 uhuu:py-1 uhuu:bg-blue-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none",
						children: s("thumbnail.groupBadge", { count: e.pageCount })
					}),
					o && /* @__PURE__ */ y("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:px-2 uhuu:py-1 uhuu:bg-gray-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none uhuu:flex uhuu:items-center uhuu:gap-1",
						children: [/* @__PURE__ */ v(Bo, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
							children: /* @__PURE__ */ v("div", {
								className: "uhuu:flex-1 uhuu:min-w-0",
								children: /* @__PURE__ */ v("div", {
									className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
									children: c(e.label) || e.id
								})
							})
						})
					}),
					i && /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-blue-500/10 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:text-blue-600 uhuu:font-medium uhuu:text-sm uhuu:bg-white/90 uhuu:px-3 uhuu:py-1 uhuu:rounded-full uhuu:shadow-lg",
							children: s("thumbnail.draggingGroup")
						})
					})
				]
			});
		}
		{
			let l = e.pageId, u = e.pageComponentKey ?? l, d = AE(n, {
				id: l,
				componentKey: u
			}), f = e.pageComponent || (u ? t[u] : null), _ = l ? mE(n, { id: l }) : void 0;
			return /* @__PURE__ */ y("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.pageId,
				children: [
					f ? /* @__PURE__ */ v("div", {
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:pointer-events-none",
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ v(QE, {
								pageId: l,
								fallback: null,
								children: /* @__PURE__ */ v(eD, {
									style: S,
									acquireTypography: x,
									children: /* @__PURE__ */ v(f, {
										payload: n,
										pageId: l,
										templateId: u,
										pagePayload: d,
										componentKey: u,
										integration: _,
										page: $E(e.page),
										pageNum: r + 1,
										dataBinding: e.page ? qE({
											payload: n,
											page: e.page,
											pagePayload: d
										}) : void 0
									})
								})
							})
						})
					}) : /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:pointer-events-none",
						children: /* @__PURE__ */ y("div", {
							className: "uhuu:text-center uhuu:p-4",
							children: [/* @__PURE__ */ v("div", {
								className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
								children: s("page.fallbackName", { number: e.pageNum })
							}), /* @__PURE__ */ v("div", {
								className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
								children: l || s("thumbnail.noPreview")
							})]
						})
					}),
					o && /* @__PURE__ */ y("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:px-2 uhuu:py-1 uhuu:bg-gray-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none uhuu:flex uhuu:items-center uhuu:gap-1",
						children: [/* @__PURE__ */ v(Bo, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
							children: /* @__PURE__ */ v("div", {
								className: "uhuu:flex-1 uhuu:min-w-0",
								children: /* @__PURE__ */ v("div", {
									className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
									children: c(e.pageLabel) || s("page.fallbackName", { number: e.pageNum })
								})
							})
						})
					}),
					i && /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-blue-500/10 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:text-blue-600 uhuu:font-medium uhuu:text-sm uhuu:bg-white/90 uhuu:px-3 uhuu:py-1 uhuu:rounded-full uhuu:shadow-lg",
							children: s("thumbnail.draggingPage")
						})
					})
				]
			});
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/toolbar-position.ts
var nD = "bottom-right", rD = [
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
], iD = {
	"bottom-right": "uhuu:right-4 uhuu:bottom-4",
	"bottom-left": "uhuu:left-4 uhuu:bottom-4",
	"top-right": "uhuu:right-4 uhuu:top-4",
	"top-left": "uhuu:left-4 uhuu:top-4"
}, aD = "uhuu-editor-toolbar-position";
function oD(e) {
	return typeof e == "string" && rD.includes(e);
}
function sD() {
	try {
		let e = typeof window > "u" ? null : window.localStorage?.getItem(aD);
		return oD(e) ? e : null;
	} catch {
		return null;
	}
}
var cD = /* @__PURE__ */ new Set(), lD = (e) => (cD.add(e), () => {
	cD.delete(e);
}), uD = () => null;
function dD(e) {
	try {
		window.localStorage?.setItem(aD, e);
	} catch {}
	cD.forEach((e) => e());
}
function fD(e) {
	let t = g(lD, sD, uD), [n, r] = h(null);
	return [n ?? t ?? (oD(e) ? e : "bottom-right"), s((e) => {
		oD(e) && (r(e), dD(e));
	}, [])];
}
function pD(e) {
	return {
		side: e.startsWith("top") ? "bottom" : "top",
		align: e.endsWith("left") ? "start" : "end"
	};
}
var mD = r(pD(nD)), hD = mD.Provider;
function gD() {
	return c(mD);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function _D(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function vD(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function yD(e, t) {
	if (e === "two_pages") return vD(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function bD({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function xD({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function SD({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function CD(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function wD(e, t, n, r) {
	if (e.width <= 0 || e.height <= 0) return {
		deltaLeft: 0,
		deltaTop: 0
	};
	let i = n - e.left, a = r - e.top, o = t.left + i * (t.width / e.width), s = t.top + a * (t.height / e.height);
	return {
		deltaLeft: o - n,
		deltaTop: s - r
	};
}
function TD(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function ED(e, t, n) {
	let r = -1, i = Infinity;
	for (let a = 0; a < e.length; a += 1) {
		let o = e[a];
		if (o.width <= 0 || o.height <= 0) continue;
		if (t >= o.left && t <= o.left + o.width && n >= o.top && n <= o.top + o.height) return a;
		let s = t - (o.left + o.width / 2), c = n - (o.top + o.height / 2), l = s * s + c * c;
		l < i && (i = l, r = a);
	}
	return r;
}
function DD(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var OD = 24, kD = 64, AD = 1e3, jD = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${OD}px ${kD}px`,
	overflowAnchor: "none"
}, MD = {
	...jD,
	padding: `${kD}px ${OD}px 0`
}, ND = {
	"bottom-right": "uhuu:right-0.5 uhuu:bottom-0.5",
	"bottom-left": "uhuu:left-0.5 uhuu:bottom-0.5",
	"top-right": "uhuu:right-0.5 uhuu:top-0.5",
	"top-left": "uhuu:left-0.5 uhuu:top-0.5"
}, PD = {
	"bottom-right": "toolbar.bottomRight",
	"bottom-left": "toolbar.bottomLeft",
	"top-right": "toolbar.topRight",
	"top-left": "toolbar.topLeft"
};
function FD(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && DD(e.overflowX) && (n = t), !r && DD(e.overflowY) && (r = t), n && r) return {
			x: n,
			y: r
		};
		t = t.parentElement;
	}
	let i = document.scrollingElement;
	return {
		x: n ?? i,
		y: r ?? i
	};
}
function ID(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function LD(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var RD = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function zD({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(RD), i = m(null);
	return l(() => {
		if (!i.current) return;
		let e = () => {
			let e = i.current?.querySelectorAll("[data-section-content]");
			if (!e?.length) return;
			let t = Array.from(e).reduce((e, t) => e + Number.parseInt(t.getAttribute("data-natural-width") || "0"), 0);
			if (t > 0) {
				let e = t * r;
				i.current?.style.setProperty("--uhuu-group-pair-width", `${e}px`);
			}
		};
		e();
		let t = new ResizeObserver(e);
		return i.current.querySelectorAll("[data-section-content]").forEach((e) => t.observe(e)), () => t.disconnect();
	}, [e, r]), /* @__PURE__ */ v("div", {
		ref: i,
		className: `two-pages-pair two-pages-pair--${t}`,
		"data-page-item-id": n,
		children: e
	});
}
function BD(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function VD(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? yD(t, r.map(BD).filter((e) => e !== null)) : null;
}
function HD({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(RD), s = m(null), [u, d] = h(0), [f, p] = h(0);
	l(() => {
		if (s.current) {
			let e = () => {
				let e = s.current;
				if (e) {
					let t = e.scrollHeight, n = e.scrollWidth;
					d(t), p(n);
				}
			};
			e();
			let t = new ResizeObserver(e);
			return t.observe(s.current), () => {
				t.disconnect();
			};
		}
	}, [e]);
	let g = u * a, _ = Math.max(f * a, 150), { justify: b, origin: x } = {
		left: {
			justify: "uhuu:justify-start",
			origin: "top left"
		},
		right: {
			justify: "uhuu:justify-end",
			origin: "top right"
		},
		center: {
			justify: "uhuu:justify-center",
			origin: "top center"
		}
	}[i];
	return o ? /* @__PURE__ */ v("div", {
		className: n,
		children: e
	}) : /* @__PURE__ */ y("div", {
		className: `uhuu:group/section ${n}`,
		style: {
			width: `${_}px`,
			minWidth: "150px"
		},
		children: [/* @__PURE__ */ v("div", { children: r ?? /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:px-4 uhuu:py-2 uhuu:border-b uhuu:border-gray-200",
			children: /* @__PURE__ */ y("div", {
				className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
				children: [t, " Controls"]
			})
		}) }), /* @__PURE__ */ v("div", {
			className: "uhuu:pt-1",
			style: {
				height: g > 0 ? `${g + 32}px` : "auto",
				minHeight: "100px"
			},
			children: /* @__PURE__ */ v("div", {
				className: `uhuu:flex uhuu:items-start ${b}`,
				children: /* @__PURE__ */ v("div", {
					ref: s,
					"data-section-content": !0,
					"data-natural-width": f,
					"data-natural-height": u,
					style: {
						transform: `scale(${Number(a.toPrecision(6))})`,
						transformOrigin: x
					},
					children: e
				})
			})
		})]
	});
}
function UD({ children: t, className: n = "", defaultZoom: r = 100, minZoom: i = 25, maxZoom: a = 200, onAddPage: o, menuItems: c, hideUI: u, preview: d = "single_page", defaultZoomMode: f = "manual", scrollMode: p = "pane", toolbarPosition: g }) {
	let _ = Rc(), b = u ?? _, { t: x } = ec(), C = ds(), [w, T] = fD(g), E = pD(w), D = e.useId(), [O, k] = h(r), [A, j] = h(() => _D(f)), [M, N] = h(() => _D(f) !== "none"), [P, F] = h(0), I = m(null), L = m(null), ee = m(null), te = m(null), R = m(O);
	l(() => {
		R.current = O;
	}, [O]);
	let z = s(() => p === "pane" && L.current ? {
		x: L.current,
		y: L.current
	} : FD(I.current), [p]), B = s((e, t, n) => {
		let r = Math.min(Math.max(e, i), a), o = te.current;
		if (!o) {
			k(r), j("none");
			return;
		}
		let s = z(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = ED(c.map((e) => TD(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = TD(u.getBoundingClientRect()), f = CD(d, t, n);
		S(() => {
			k(r), j("none");
		});
		let p = () => {
			let e = TD(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = wD(d, e, f.clientX, f.clientY);
			t !== 0 && s.x && (s.x.scrollLeft += t), n !== 0 && s.y && (s.y.scrollTop += n);
		};
		p(), window.requestAnimationFrame(p);
	}, [
		a,
		i,
		z
	]), ne = s(() => {
		let e = (p === "pane" ? L.current : I.current)?.getBoundingClientRect();
		return e ? {
			clientX: e.left + e.width / 2,
			clientY: e.top + e.height / 2
		} : {
			clientX: 0,
			clientY: 0
		};
	}, [p]), re = s(() => {
		let e = te.current;
		if (A === "none" || !e) return;
		let t = VD(e, d);
		if (!t) return;
		let n = p === "pane" ? L.current : I.current;
		if (!n) return;
		let r = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || r.width, l = p === "pane" ? bD({
			paneClientHeight: n.clientHeight || r.height,
			paneTop: r.top,
			viewportHeight: s
		}) : s - Math.max(r.top, 0), u = ee.current ? window.getComputedStyle(ee.current) : null, { availableWidth: f, availableHeight: m } = xD({
			paneWidth: c,
			paneHeight: l,
			paddingX: u ? Number.parseFloat(u.paddingLeft) + Number.parseFloat(u.paddingRight) : 0,
			paddingY: u ? Number.parseFloat(u.paddingTop) + Number.parseFloat(u.paddingBottom) : 0,
			chromeHeight: LD(e)
		}), h = SD({
			mode: A,
			contentWidth: t.width,
			contentHeight: t.height,
			availableWidth: f,
			availableHeight: m,
			minZoom: i,
			maxZoom: a
		});
		h !== null && (k((e) => Math.abs(e - h) < .01 ? e : h), N(!1));
	}, [
		A,
		a,
		i,
		d,
		p
	]), V = (e) => {
		j(e);
	};
	l(() => {
		if (!M) return;
		if (A === "none") {
			N(!1);
			return;
		}
		let e = window.setTimeout(() => N(!1), AD);
		return () => window.clearTimeout(e);
	}, [M, A]);
	let ie = () => {
		let e = ne();
		B(O + 25, e.clientX, e.clientY);
	}, ae = () => {
		let e = ne();
		B(O - 25, e.clientX, e.clientY);
	};
	l(() => {
		if (A === "none" || !I.current || !te.current) return;
		let e = 0, t = () => {
			window.cancelAnimationFrame(e), e = window.requestAnimationFrame(re);
		}, n = new ResizeObserver(t);
		n.observe(I.current), L.current && n.observe(L.current), n.observe(te.current);
		let r = () => {
			te.current?.querySelectorAll("[data-section-content]").forEach((e) => {
				n.observe(e);
			});
		};
		r();
		let i = new MutationObserver(() => {
			r(), t();
		});
		return i.observe(te.current, {
			childList: !0,
			subtree: !0
		}), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), t(), () => {
			window.cancelAnimationFrame(e), n.disconnect(), i.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [A, re]), l(() => {
		if (b || p !== "pane") return;
		let e = I.current;
		if (!e) return;
		let t = () => {
			let t = ID(e);
			F((e) => Math.abs(e - t) < .5 ? e : t);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), () => {
			n.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [b, p]), l(() => {
		if (b) return;
		let e = null, t = null, n = null, r = {
			clientX: 0,
			clientY: 0
		}, o = null, s = !1, c = () => {
			e = null;
			let t = n;
			n = null, t !== null && B(t, r.clientX, r.clientY);
		}, l = (t) => {
			if (!t.ctrlKey && !t.metaKey) return;
			t.preventDefault();
			let o = t.deltaMode === 1 ? t.deltaY * 16 : t.deltaMode === 2 ? t.deltaY * 16 * 32 : t.deltaY, s = n ?? R.current, l = Math.min(Math.max(s * 1.003 ** -o, i), a);
			r = {
				clientX: t.clientX,
				clientY: t.clientY
			}, (l !== s || n !== null) && (n = l, e === null && (e = window.requestAnimationFrame(c)));
		}, u = () => {
			t = null, !s && (o = p === "pane" ? L.current : I.current, o ? o.addEventListener("wheel", l, { passive: !1 }) : t = window.requestAnimationFrame(u));
		};
		return u(), () => {
			s = !0, e !== null && window.cancelAnimationFrame(e), t !== null && window.cancelAnimationFrame(t), o?.removeEventListener("wheel", l);
		};
	}, [
		B,
		b,
		a,
		i,
		p
	]);
	let H = O / 100;
	return b ? /* @__PURE__ */ v(RD.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ v("div", {
			className: n,
			children: t
		})
	}) : /* @__PURE__ */ v(RD.Provider, {
		value: {
			zoom: O,
			scaleValue: H,
			hideUI: !1
		},
		children: /* @__PURE__ */ y("div", {
			ref: I,
			className: `uhuu:flex uhuu:flex-col uhuu:flex-1 uhuu:min-h-0 ${n}`,
			children: [/* @__PURE__ */ v("div", {
				"data-uhuu-editor": !0,
				"data-uhuu-toolbar-position": w,
				className: `uhuu:fixed ${iD[w]} uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:px-2.5 uhuu:py-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm`,
				children: /* @__PURE__ */ y(hD, {
					value: E,
					children: [
						c,
						/* @__PURE__ */ v("div", {
							ref: C,
							className: "uhuu:contents"
						}),
						/* @__PURE__ */ v("div", { className: "uhuu:h-4 uhuu:w-px uhuu:bg-gray-200 uhuu:mx-0.5" }),
						/* @__PURE__ */ y(v_, {
							modal: !1,
							children: [/* @__PURE__ */ v(y_, {
								asChild: !0,
								children: /* @__PURE__ */ y(gs, {
									variant: "ghost",
									size: "sm",
									title: x("zoom.menu"),
									className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
									children: [
										Math.round(O),
										"%",
										/* @__PURE__ */ v(Mo, { className: "uhuu:w-3 uhuu:h-3 uhuu:ml-1 uhuu:opacity-60" })
									]
								})
							}), /* @__PURE__ */ y(C_, {
								className: "uhuu:w-52 uhuu:p-1.5",
								side: E.side,
								align: E.align,
								children: [
									/* @__PURE__ */ y(w_, {
										onClick: () => V("width"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "width" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v(Yo, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitWidth") })]
									}),
									/* @__PURE__ */ y(w_, {
										onClick: () => V("height"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "height" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v(Xo, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitHeight") })]
									}),
									/* @__PURE__ */ y(w_, {
										onClick: () => V("both"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "both" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v(Vo, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitPage") })]
									}),
									/* @__PURE__ */ v(O_, { className: "uhuu:my-1.5" }),
									/* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:px-3 uhuu:py-2.5",
										onClick: (e) => e.stopPropagation(),
										children: [
											/* @__PURE__ */ v(gs, {
												variant: "ghost",
												size: "sm",
												onClick: (e) => {
													e.stopPropagation(), ae();
												},
												disabled: O <= i,
												className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
												title: x("zoom.zoomOut"),
												children: /* @__PURE__ */ v($o, { className: "uhuu:w-4 uhuu:h-4" })
											}),
											/* @__PURE__ */ y("div", {
												className: "uhuu:relative",
												children: [/* @__PURE__ */ v("input", {
													type: "number",
													value: Math.round(O),
													onChange: (e) => {
														let t = Number.parseInt(e.target.value);
														if (!isNaN(t)) {
															let e = ne();
															B(t, e.clientX, e.clientY);
														}
													},
													onFocus: (e) => e.target.select(),
													className: "uhuu:w-20 uhuu:pr-6 uhuu:text-center uhuu:text-sm uhuu:text-gray-700 uhuu:bg-(--uhuu-shell-surface) uhuu:border uhuu:border-gray-300 uhuu:rounded uhuu:px-2 uhuu:py-1.5 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-blue-500 uhuu:focus:border-transparent uhuu:transition-all",
													min: i,
													max: a
												}), /* @__PURE__ */ v("span", {
													className: "uhuu:absolute uhuu:right-2 uhuu:top-1/2 uhuu:-translate-y-1/2 uhuu:text-xs uhuu:text-gray-400 uhuu:pointer-events-none",
													children: "%"
												})]
											}),
											/* @__PURE__ */ v(gs, {
												variant: "ghost",
												size: "sm",
												onClick: (e) => {
													e.stopPropagation(), ie();
												},
												disabled: O >= a,
												className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
												title: x("zoom.zoomIn"),
												children: /* @__PURE__ */ v(Qo, { className: "uhuu:w-4 uhuu:h-4" })
											})
										]
									}),
									/* @__PURE__ */ v(O_, { className: "uhuu:my-1.5" }),
									/* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-3 uhuu:px-2 uhuu:py-1.5",
										children: [/* @__PURE__ */ v("span", {
											id: D,
											className: "uhuu:text-xs uhuu:text-gray-500",
											children: x("toolbar.position")
										}), /* @__PURE__ */ v(f_, {
											"aria-labelledby": D,
											value: w,
											onValueChange: (e) => T(e),
											className: "uhuu:grid uhuu:grid-cols-2 uhuu:gap-1",
											children: rD.map((e) => /* @__PURE__ */ v(p_, {
												value: e,
												"aria-label": x(PD[e]),
												title: x(PD[e]),
												className: "uhuu:group/corner uhuu:relative uhuu:h-6 uhuu:w-8 uhuu:cursor-pointer uhuu:rounded uhuu:border uhuu:border-gray-200 uhuu:outline-none uhuu:transition-colors uhuu:hover:border-gray-400 uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-300 uhuu:data-[highlighted]:border-gray-400 uhuu:data-[state=checked]:border-gray-900 uhuu:data-[state=checked]:bg-gray-100",
												children: /* @__PURE__ */ v("span", {
													"aria-hidden": "true",
													className: `uhuu:absolute ${ND[e]} uhuu:h-1.5 uhuu:w-3 uhuu:rounded-[2px] uhuu:bg-gray-300 uhuu:transition-colors uhuu:group-hover/corner:bg-gray-500 uhuu:group-data-[state=checked]/corner:bg-gray-900`
												})
											}, e))
										})]
									})
								]
							})]
						})
					]
				})
			}), /* @__PURE__ */ v("div", {
				ref: L,
				className: p === "pane" ? "uhuu-zoom-pane" : void 0,
				style: p === "pane" ? {
					height: `calc(100dvh - ${P}px)`,
					maxHeight: "100%",
					overflow: "auto",
					overscrollBehavior: "contain"
				} : void 0,
				children: /* @__PURE__ */ v("div", {
					ref: ee,
					className: "uhuu-zoom-pane-content",
					style: {
						...w.startsWith("top") ? MD : jD,
						...M ? { visibility: "hidden" } : null
					},
					children: /* @__PURE__ */ v("div", {
						ref: te,
						className: d === "two_pages" ? "group_two_pages" : "uhuu:flex uhuu:flex-col uhuu:items-center",
						children: t
					})
				})
			})]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dialog@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_c1edb718822a6de77ff35d62c5110ee0/node_modules/@radix-ui/react-dialog/dist/index.mjs
var WD = Object.defineProperty, GD = (e, t) => WD(e, "name", {
	value: t,
	configurable: !0
}), KD = "Dialog", [qD, JD] = /* @__PURE__ */ tl(KD), [YD, XD] = qD(KD), ZD = /* @__PURE__ */ GD((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = Nu(), [f, p] = fl({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: KD
	}), [m, h] = e.useState(0), [g, _] = e.useState(0);
	return /* @__PURE__ */ v(YD, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Xu(),
		titleId: Xu(),
		descriptionId: Xu(),
		titlePresent: m > 0,
		descriptionPresent: g > 0,
		setTitleCount: h,
		setDescriptionCount: _,
		open: f,
		onOpenChange: p,
		onOpenToggle: e.useCallback(() => p((e) => !e), [p]),
		modal: s,
		branchNodes: u,
		branchRegistry: d,
		children: r
	});
}, "Dialog"), QD = "DialogTrigger", $D = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = XD(QD, n), a = Zc(t, i.triggerRef);
	return /* @__PURE__ */ v(Fl.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": vO(i.open),
		...r,
		ref: a,
		onClick: X(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), eO = "DialogPortal", [tO, nO] = qD(eO, { forceMount: void 0 }), rO = /* @__PURE__ */ GD((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = XD(eO, n);
	return /* @__PURE__ */ v(tO, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ v(Ip, {
			present: r || o.open,
			children: /* @__PURE__ */ v(Mp, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), iO = "DialogOverlay", aO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let n = nO(iO, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = XD(iO, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ v(Ip, {
		present: r || a.open,
		children: /* @__PURE__ */ v(sO, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), oO = /* @__PURE__ */ yl("DialogOverlay.RemoveScroll"), sO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = XD(iO, r), o = Zc(n, fu());
	return /* @__PURE__ */ v(Fh, {
		as: oO,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ v(Fl.div, {
			"data-state": vO(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), cO = "DialogContent", lO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let n = nO(cO, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = XD(cO, e.__scopeDialog);
	return /* @__PURE__ */ v(Ip, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ v(uO, {
			...i,
			ref: t
		}) : /* @__PURE__ */ v(dO, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), uO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(t, n) {
	let r = XD(cO, t.__scopeDialog), i = e.useRef(null), a = Zc(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Dm(e);
	}, []), /* @__PURE__ */ v(fO, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: X(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: X(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: X(t.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), dO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(t, n) {
	let r = XD(cO, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ v(fO, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}, "DialogContentNonModal")), fO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = XD(cO, n);
	return Cu(), /* @__PURE__ */ v(Mu, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ v(Au, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ v(du, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? _O(o, l.descriptionId) : o,
				"data-state": vO(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), pO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = XD("DialogTitle", n), { setTitleCount: a } = i;
	return rl(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(Fl.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), mO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = XD("DialogDescription", n), { setDescriptionCount: a } = i;
	return rl(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(Fl.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), hO = "DialogClose", gO = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ GD(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = XD(hO, n);
	return /* @__PURE__ */ v(Fl.button, {
		type: "button",
		...r,
		ref: t,
		onClick: X(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function _O(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
GD(_O, "concatAriaDescribedby");
function vO(e) {
	return e ? "open" : "closed";
}
GD(vO, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var yO = ZD, bO = rO, xO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(aO, {
	className: q("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
xO.displayName = aO.displayName;
var SO = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = ts(), o = ec().t("dialog.close");
	return /* @__PURE__ */ y(bO, {
		container: a || void 0,
		children: [/* @__PURE__ */ v(xO, {}), /* @__PURE__ */ y(lO, {
			ref: i,
			className: q("uhuu:fixed uhuu:z-50 uhuu:gap-4 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:transition uhuu:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out uhuu:data-[state=closed]:duration-300 uhuu:data-[state=open]:duration-500", e === "top" && "uhuu:inset-x-0 uhuu:top-0 uhuu:border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "uhuu:inset-x-0 uhuu:bottom-0 uhuu:border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "uhuu:inset-y-0 uhuu:left-0 uhuu:h-full uhuu:w-3/4 uhuu:border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left uhuu:sm:max-w-sm", e === "right" && "uhuu:inset-y-0 uhuu:right-0 uhuu:h-full uhuu:w-3/4 uhuu:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right uhuu:sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ y(gO, {
				className: "uhuu:absolute uhuu:right-4 uhuu:top-4 uhuu:rounded-sm uhuu:opacity-70 uhuu:ring-offset-(--uhuu-shell-surface) uhuu:transition-opacity uhuu:hover:opacity-100 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400 uhuu:focus:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ v(Zo, { className: "uhuu:h-4 uhuu:w-4" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})]
		})]
	});
});
SO.displayName = lO.displayName;
var CO = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: q("uhuu:flex uhuu:flex-col uhuu:space-y-2 uhuu:text-center uhuu:sm:text-left", e),
	...t
});
CO.displayName = "SheetHeader";
var wO = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: q("uhuu:flex uhuu:flex-col-reverse uhuu:sm:flex-row uhuu:sm:justify-end uhuu:gap-2", e),
	...t
});
wO.displayName = "SheetFooter";
var TO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(pO, {
	ref: n,
	className: q("uhuu:text-lg uhuu:font-medium uhuu:text-gray-900", e),
	...t
}));
TO.displayName = pO.displayName;
var EO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(mO, {
	ref: n,
	className: q("uhuu:text-sm uhuu:text-gray-500", e),
	...t
}));
EO.displayName = mO.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/add-page-dialog.tsx
function DO({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, renderThumbnail: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "uhuu-page-order-grid-cols" }) {
	let { t: l, localize: u } = ec(), [d, f] = e.useState(""), p = e.useMemo(() => {
		if (!d.trim()) return r;
		let e = d.toLowerCase();
		return r.filter((t) => (u(t.label) || "").toLowerCase().includes(e) || t.id.toLowerCase().includes(e));
	}, [
		r,
		d,
		u
	]), m = (e) => {
		n(!1), i(e);
	}, h = ee.resolveDimensions(s), g = h.width / h.height, b = {
		width: "200px",
		height: `${Math.round(200 / g)}px`
	}, x = (e, t) => {
		if (e.kind === "group") {
			let t = e, n = {
				payload: o,
				item: void 0,
				parent: void 0
			}, r = zE(t.pageComponentKeys, n, t.id), i = r[0];
			return {
				kind: "group",
				id: e.id,
				label: e.label,
				pageCount: r.length,
				firstPageId: i,
				firstPageComponentKey: i
			};
		}
		let n = e, r = n.componentKey ?? n.id;
		return {
			kind: "page",
			id: n.id,
			pageId: n.id,
			pageComponentKey: r,
			pageLabel: n.label,
			pageNum: t + 1
		};
	};
	return /* @__PURE__ */ v(yO, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ y(SO, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:gap-0 uhuu:bg-gray-50 uhuu:p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ v(CO, {
				className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4 uhuu:bg-(--uhuu-shell-surface)",
				children: /* @__PURE__ */ y("div", {
					className: "uhuu:flex uhuu:items-end uhuu:gap-3",
					children: [
						/* @__PURE__ */ v("div", {
							className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
							children: /* @__PURE__ */ v(Wo, { className: "uhuu:w-4 uhuu:h-4" })
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:flex-1",
							children: [/* @__PURE__ */ v(TO, {
								className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
								children: l("addDialog.title")
							}), /* @__PURE__ */ v(EO, {
								className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
								children: l("addDialog.description")
							})]
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:mb-0.5 uhuu:mr-8 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2 uhuu:py-1 uhuu:text-gray-400 uhuu:focus-within:border-gray-400 uhuu:focus-within:ring-2 uhuu:focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ v(Go, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:shrink-0" }),
								/* @__PURE__ */ v("label", {
									className: "uhuu:sr-only",
									htmlFor: "uhuu-add-page-filter",
									children: l("addDialog.filterLabel")
								}),
								/* @__PURE__ */ v("input", {
									id: "uhuu-add-page-filter",
									type: "text",
									placeholder: l("addDialog.filterPlaceholder"),
									value: d,
									onChange: (e) => f(e.target.value),
									className: "uhuu:w-24 uhuu:border-0 uhuu:bg-transparent uhuu:text-sm uhuu:text-gray-600 uhuu:placeholder:text-gray-400 uhuu:outline-none uhuu:transition-all uhuu:duration-150 uhuu:focus:w-40"
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ v("div", {
				className: "uhuu:min-h-0 uhuu:flex-1 uhuu:overflow-auto uhuu:bg-gray-50 uhuu:p-6",
				children: p.length === 0 ? /* @__PURE__ */ y("div", {
					className: "uhuu:text-center uhuu:py-16",
					children: [
						/* @__PURE__ */ v("div", {
							className: "uhuu:w-16 uhuu:h-16 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-4",
							children: /* @__PURE__ */ v(Wo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
						}),
						/* @__PURE__ */ v("div", {
							className: "uhuu:text-lg uhuu:font-medium uhuu:text-gray-900 uhuu:mb-2",
							children: l("addDialog.emptyTitle")
						}),
						/* @__PURE__ */ v("p", {
							className: "uhuu:text-gray-500 uhuu:mb-4",
							children: d.trim() ? l("addDialog.emptyFiltered") : l("addDialog.emptyAdded")
						})
					]
				}) : /* @__PURE__ */ v("div", {
					className: c,
					children: p.map((e, t) => {
						let n = e.kind === "group", r = e.id, i = n ? u(e.label) || l("addDialog.groupFallbackName", { number: t + 1 }) : u(e.label) || l("addDialog.pageFallbackName", { id: e.id }), s = {
							payload: o,
							item: void 0,
							parent: void 0
						}, c = n ? zE(e.pageComponentKeys, s, e.id).length : 1, d = !!a;
						return /* @__PURE__ */ y("div", {
							onClick: () => m(e),
							onKeyDown: (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), m(e));
							},
							role: "button",
							tabIndex: 0,
							"aria-label": l("addDialog.addItem", { name: i }),
							className: ["uhuu:group uhuu:relative uhuu:block uhuu:cursor-pointer uhuu:border-0 uhuu:bg-transparent uhuu:p-0 uhuu:text-left uhuu:transition-all uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-900 uhuu:focus-visible:ring-offset-2", !d && "uhuu:bg-(--uhuu-shell-surface) uhuu:border-2 uhuu:border-gray-200"].filter(Boolean).join(" "),
							style: b,
							children: [
								/* @__PURE__ */ v("div", {
									className: "uhuu:w-full uhuu:h-full uhuu:relative",
									children: e.thumbnail ? /* @__PURE__ */ v("div", {
										"data-uhuu-paper": !0,
										className: "uhuu:absolute uhuu:inset-0 uhuu:bg-gray-100 uhuu:hover:bg-white",
										children: /* @__PURE__ */ v("img", {
											"data-uhuu-chrome": !0,
											src: e.thumbnail,
											className: "uhuu:w-full uhuu:h-full uhuu:object-contain uhuu:pointer-events-none uhuu:object-top uhuu:border uhuu:border-gray-200 uhuu:p-4",
											alt: i
										})
									}) : a ? /* @__PURE__ */ v("div", {
										className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:pointer-events-none",
										children: a(x(e, t), t, !1)
									}) : /* @__PURE__ */ v(_, { children: n ? /* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:h-full uhuu:flex-col uhuu:items-center uhuu:justify-center uhuu:p-4 uhuu:text-center",
										children: [
											/* @__PURE__ */ v("div", {
												className: "uhuu:w-16 uhuu:h-16 uhuu:bg-blue-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
												children: /* @__PURE__ */ v(Wo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-blue-600" })
											}),
											/* @__PURE__ */ v("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
												children: i
											}),
											/* @__PURE__ */ v("div", {
												className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
												children: l("page.count", { count: c })
											})
										]
									}) : /* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:h-full uhuu:flex-col uhuu:items-center uhuu:justify-center uhuu:p-4 uhuu:text-center",
										children: [
											/* @__PURE__ */ v("div", {
												className: "uhuu:w-16 uhuu:h-16 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
												children: /* @__PURE__ */ v(Wo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
											}),
											/* @__PURE__ */ v("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
												children: i
											}),
											/* @__PURE__ */ v("div", {
												className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
												children: r
											})
										]
									}) })
								}),
								(!a || e?.thumbnail) && /* @__PURE__ */ y(_, { children: [n && /* @__PURE__ */ v("div", {
									className: "uhuu:absolute uhuu:top-2 uhuu:right-2 uhuu:px-2 uhuu:py-1 uhuu:bg-blue-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none",
									children: l("thumbnail.groupBadge", { count: c })
								}), /* @__PURE__ */ v("div", {
									className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
									"data-item-id": r,
									children: /* @__PURE__ */ v("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
										children: /* @__PURE__ */ v("div", {
											className: "uhuu:flex-1 uhuu:min-w-0",
											children: /* @__PURE__ */ v("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
												children: i
											})
										})
									})
								})] }),
								/* @__PURE__ */ v("div", {
									className: "uhuu:absolute uhuu:top-3 uhuu:left-3 uhuu:w-8 uhuu:h-8 uhuu:bg-black uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-lg uhuu:opacity-0 uhuu:group-hover:opacity-100 uhuu:transition-opacity uhuu:pointer-events-none uhuu:z-10",
									children: /* @__PURE__ */ v(Wo, { className: "uhuu:w-4 uhuu:h-4 uhuu:text-white" })
								})
							]
						}, r);
					})
				})
			})]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.3.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
function OO() {
	var e = [...arguments];
	return f(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var kO = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function AO(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function jO(e) {
	return "nodeType" in e;
}
function MO(e) {
	return e ? AO(e) ? e : jO(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function NO(e) {
	let { Document: t } = MO(e);
	return e instanceof t;
}
function PO(e) {
	return !AO(e) && e instanceof MO(e).HTMLElement;
}
function FO(e) {
	return e instanceof MO(e).SVGElement;
}
function IO(e) {
	return e ? AO(e) ? e.document : jO(e) ? NO(e) ? e : PO(e) || FO(e) ? e.ownerDocument : document : document : document;
}
var LO = kO ? d : l;
function RO(e) {
	let t = m(e);
	return LO(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function zO() {
	let e = m(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function BO(e, t) {
	t === void 0 && (t = [e]);
	let n = m(e);
	return LO(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function VO(e, t) {
	let n = m();
	return f(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function HO(e) {
	let t = RO(e), n = m(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function UO(e) {
	let t = m();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var WO = {};
function GO(e, t) {
	return f(() => {
		if (t) return t;
		let n = WO[e] == null ? 0 : WO[e] + 1;
		return WO[e] = n, e + "-" + n;
	}, [e, t]);
}
function KO(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => {
			let r = Object.entries(n);
			for (let [n, i] of r) {
				let r = t[n];
				r != null && (t[n] = r + e * i);
			}
			return t;
		}, { ...t });
	};
}
var qO = /*#__PURE__*/ KO(1), JO = /*#__PURE__*/ KO(-1);
function YO(e) {
	return "clientX" in e && "clientY" in e;
}
function XO(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = MO(e.target);
	return t && e instanceof t;
}
function ZO(e) {
	if (!e) return !1;
	let { TouchEvent: t } = MO(e.target);
	return t && e instanceof t;
}
function QO(e) {
	if (ZO(e)) {
		if (e.touches && e.touches.length) {
			let { clientX: t, clientY: n } = e.touches[0];
			return {
				x: t,
				y: n
			};
		}
		if (e.changedTouches && e.changedTouches.length) {
			let { clientX: t, clientY: n } = e.changedTouches[0];
			return {
				x: t,
				y: n
			};
		}
	}
	return YO(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var $O = /*#__PURE__*/ Object.freeze({
	Translate: { toString(e) {
		if (!e) return;
		let { x: t, y: n } = e;
		return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
	} },
	Scale: { toString(e) {
		if (!e) return;
		let { scaleX: t, scaleY: n } = e;
		return "scaleX(" + t + ") scaleY(" + n + ")";
	} },
	Transform: { toString(e) {
		if (e) return [$O.Translate.toString(e), $O.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), ek = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function tk(e) {
	return e.matches(ek) ? e : e.querySelector(ek);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var nk = { display: "none" };
function rk(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: nk
	}, r);
}
function ik(e) {
	let { id: n, announcement: r, ariaLiveType: i = "assertive" } = e;
	return t.createElement("div", {
		id: n,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": i,
		"aria-atomic": !0
	}, r);
}
function ak() {
	let [e, t] = h("");
	return {
		announce: s((e) => {
			e != null && t(e);
		}, []),
		announcement: e
	};
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@dnd-kit/core/dist/core.esm.js
var ok = /*#__PURE__*/ r(null);
function sk(e) {
	let t = c(ok);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function ck() {
	let [e] = h(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var lk = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, uk = {
	onDragStart(e) {
		let { active: t } = e;
		return "Picked up draggable item " + t.id + ".";
	},
	onDragOver(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
	},
	onDragEnd(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
	},
	onDragCancel(e) {
		let { active: t } = e;
		return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
	}
};
function dk(e) {
	let { announcements: n = uk, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = lk } = e, { announce: o, announcement: s } = ak(), c = GO("DndLiveRegion"), [u, d] = h(!1);
	if (l(() => {
		d(!0);
	}, []), sk(f(() => ({
		onDragStart(e) {
			let { active: t } = e;
			o(n.onDragStart({ active: t }));
		},
		onDragMove(e) {
			let { active: t, over: r } = e;
			n.onDragMove && o(n.onDragMove({
				active: t,
				over: r
			}));
		},
		onDragOver(e) {
			let { active: t, over: r } = e;
			o(n.onDragOver({
				active: t,
				over: r
			}));
		},
		onDragEnd(e) {
			let { active: t, over: r } = e;
			o(n.onDragEnd({
				active: t,
				over: r
			}));
		},
		onDragCancel(e) {
			let { active: t, over: r } = e;
			o(n.onDragCancel({
				active: t,
				over: r
			}));
		}
	}), [o, n])), !u) return null;
	let p = t.createElement(t.Fragment, null, t.createElement(rk, {
		id: i,
		value: a.draggable
	}), t.createElement(ik, {
		id: c,
		announcement: s
	}));
	return r ? x(p, r) : p;
}
var fk;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(fk ||= {});
function pk() {}
function mk(e, t) {
	return f(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function hk() {
	var e = [...arguments];
	return f(() => [...e].filter((e) => e != null), [...e]);
}
var gk = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function _k(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function vk(e, t) {
	let n = QO(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function yk(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function bk(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function xk(e) {
	let { left: t, top: n, height: r, width: i } = e;
	return [
		{
			x: t,
			y: n
		},
		{
			x: t + i,
			y: n
		},
		{
			x: t,
			y: n + r
		},
		{
			x: t + i,
			y: n + r
		}
	];
}
function Sk(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function Ck(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var wk = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = Ck(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = _k(Ck(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(yk);
}, Tk = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = xk(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = xk(r), o = i.reduce((e, t, r) => e + _k(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(yk);
};
function Ek(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var Dk = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = Ek(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(bk);
};
function Ok(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function kk(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : gk;
}
function Ak(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => ({
			...t,
			top: t.top + e * n.y,
			bottom: t.bottom + e * n.y,
			left: t.left + e * n.x,
			right: t.right + e * n.x
		}), { ...t });
	};
}
var jk = /*#__PURE__*/ Ak(1);
function Mk(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	}
	if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
function Nk(e, t, n) {
	let r = Mk(t);
	if (!r) return e;
	let { scaleX: i, scaleY: a, x: o, y: s } = r, c = e.left - o - (1 - i) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c
	};
}
var Pk = { ignoreTransform: !1 };
function Fk(e, t) {
	t === void 0 && (t = Pk);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = MO(e).getComputedStyle(e);
		t && (n = Nk(n, t, r));
	}
	let { top: r, left: i, width: a, height: o, bottom: s, right: c } = n;
	return {
		top: r,
		left: i,
		width: a,
		height: o,
		bottom: s,
		right: c
	};
}
function Ik(e) {
	return Fk(e, { ignoreTransform: !0 });
}
function Lk(e) {
	let t = e.innerWidth, n = e.innerHeight;
	return {
		top: 0,
		left: 0,
		right: t,
		bottom: n,
		width: t,
		height: n
	};
}
function Rk(e, t) {
	return t === void 0 && (t = MO(e).getComputedStyle(e)), t.position === "fixed";
}
function zk(e, t) {
	t === void 0 && (t = MO(e).getComputedStyle(e));
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" && n.test(r);
	});
}
function Bk(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (NO(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!PO(i) || FO(i) || n.includes(i)) return n;
		let a = MO(e).getComputedStyle(i);
		return i !== e && zk(i, a) && n.push(i), Rk(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function Vk(e) {
	let [t] = Bk(e, 1);
	return t ?? null;
}
function Hk(e) {
	return !kO || !e ? null : AO(e) ? e : jO(e) ? NO(e) || e === IO(e).scrollingElement ? window : PO(e) ? e : null : null;
}
function Uk(e) {
	return AO(e) ? e.scrollX : e.scrollLeft;
}
function Wk(e) {
	return AO(e) ? e.scrollY : e.scrollTop;
}
function Gk(e) {
	return {
		x: Uk(e),
		y: Wk(e)
	};
}
var Kk;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Kk ||= {});
function qk(e) {
	return !kO || !e ? !1 : e === document.scrollingElement;
}
function Jk(e) {
	let t = {
		x: 0,
		y: 0
	}, n = qk(e) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, r = {
		x: e.scrollWidth - n.width,
		y: e.scrollHeight - n.height
	};
	return {
		isTop: e.scrollTop <= t.y,
		isLeft: e.scrollLeft <= t.x,
		isBottom: e.scrollTop >= r.y,
		isRight: e.scrollLeft >= r.x,
		maxScroll: r,
		minScroll: t
	};
}
var Yk = {
	x: .2,
	y: .2
};
function Xk(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = Yk);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = Jk(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = Kk.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = Kk.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = Kk.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = Kk.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function Zk(e) {
	if (e === document.scrollingElement) {
		let { innerWidth: e, innerHeight: t } = window;
		return {
			top: 0,
			left: 0,
			right: e,
			bottom: t,
			width: e,
			height: t
		};
	}
	let { top: t, left: n, right: r, bottom: i } = e.getBoundingClientRect();
	return {
		top: t,
		left: n,
		right: r,
		bottom: i,
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function Qk(e) {
	return e.reduce((e, t) => qO(e, Gk(t)), gk);
}
function $k(e) {
	return e.reduce((e, t) => e + Uk(t), 0);
}
function eA(e) {
	return e.reduce((e, t) => e + Wk(t), 0);
}
function tA(e, t) {
	if (t === void 0 && (t = Fk), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	Vk(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var nA = [[
	"x",
	["left", "right"],
	$k
], [
	"y",
	["top", "bottom"],
	eA
]], rA = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = Bk(t), r = Qk(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of nA) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, iA = class {
	constructor(e) {
		this.target = void 0, this.listeners = [], this.removeAll = () => {
			this.listeners.forEach((e) => this.target?.removeEventListener(...e));
		}, this.target = e;
	}
	add(e, t, n) {
		var r;
		(r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([
			e,
			t,
			n
		]);
	}
};
function aA(e) {
	let { EventTarget: t } = MO(e);
	return e instanceof t ? e : IO(e);
}
function oA(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var sA;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(sA ||= {});
function cA(e) {
	e.preventDefault();
}
function lA(e) {
	e.stopPropagation();
}
var uA;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(uA ||= {});
var dA = {
	start: [uA.Space, uA.Enter],
	cancel: [uA.Esc],
	end: [
		uA.Space,
		uA.Enter,
		uA.Tab
	]
}, fA = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case uA.Right: return {
			...n,
			x: n.x + 25
		};
		case uA.Left: return {
			...n,
			x: n.x - 25
		};
		case uA.Down: return {
			...n,
			y: n.y + 25
		};
		case uA.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, pA = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new iA(IO(t)), this.windowListeners = new iA(MO(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(sA.Resize, this.handleCancel), this.windowListeners.add(sA.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(sA.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && tA(n), t(gk);
	}
	handleKeyDown(e) {
		if (XO(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = dA, coordinateGetter: a = fA, scrollBehavior: o = "smooth" } = r, { code: s } = e;
			if (i.end.includes(s)) {
				this.handleEnd(e);
				return;
			}
			if (i.cancel.includes(s)) {
				this.handleCancel(e);
				return;
			}
			let { collisionRect: c } = n.current, l = c ? {
				x: c.left,
				y: c.top
			} : gk;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = JO(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = Jk(n), p = Zk(n), m = {
						x: Math.min(i === uA.Right ? p.right - p.width / 2 : p.right, Math.max(i === uA.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === uA.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === uA.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === uA.Right && !s || i === uA.Left && !c, g = i === uA.Down && !l || i === uA.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === uA.Right && e <= d.x || i === uA.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						r.x = a ? n.scrollLeft - e : i === uA.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					}
					if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === uA.Down && e <= d.y || i === uA.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						r.y = a ? n.scrollTop - e : i === uA.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, qO(JO(u, this.referenceCoordinates), r));
			}
		}
	}
	handleMove(e, t) {
		let { onMove: n } = this.props;
		e.preventDefault(), n(t);
	}
	handleEnd(e) {
		let { onEnd: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	handleCancel(e) {
		let { onCancel: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll();
	}
};
pA.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = dA, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function mA(e) {
	return !!(e && "distance" in e);
}
function hA(e) {
	return !!(e && "delay" in e);
}
var gA = class {
	constructor(e, t, n) {
		n === void 0 && (n = aA(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = IO(i), this.documentListeners = new iA(this.document), this.listeners = new iA(n), this.windowListeners = new iA(MO(i)), this.initialCoordinates = QO(r) ?? gk, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(sA.Resize, this.handleCancel), this.windowListeners.add(sA.DragStart, cA), this.windowListeners.add(sA.VisibilityChange, this.handleCancel), this.windowListeners.add(sA.ContextMenu, cA), this.documentListeners.add(sA.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (hA(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (mA(t)) {
				this.handlePending(t);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
	}
	handlePending(e, t) {
		let { active: n, onPending: r } = this.props;
		r(n, e, this.initialCoordinates, t);
	}
	handleStart() {
		let { initialCoordinates: e } = this, { onStart: t } = this.props;
		e && (this.activated = !0, this.documentListeners.add(sA.Click, lA, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(sA.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = QO(e) ?? gk, s = JO(n, o);
		if (!t && a) {
			if (mA(a)) {
				if (a.tolerance != null && oA(s, a.tolerance)) return this.handleCancel();
				if (oA(s, a.distance)) return this.handleStart();
			}
			if (hA(a) && oA(s, a.tolerance)) return this.handleCancel();
			this.handlePending(a, s);
		} else e.cancelable && e.preventDefault(), i(o);
	}
	handleEnd() {
		let { onAbort: e, onEnd: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleCancel() {
		let { onAbort: e, onCancel: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleKeydown(e) {
		e.code === uA.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, _A = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, vA = class extends gA {
	constructor(e) {
		let { event: t } = e, n = IO(t.target);
		super(e, _A, n);
	}
};
vA.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var yA = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, bA;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(bA ||= {});
var xA = class extends gA {
	constructor(e) {
		super(e, yA, IO(e.event.target));
	}
};
xA.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== bA.RightClick && (r?.({ event: n }), !0);
	}
}];
var SA = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, CA = class extends gA {
	constructor(e) {
		super(e, SA);
	}
	static setup() {
		return window.addEventListener(SA.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(SA.move.name, e);
		};
		function e() {}
	}
};
CA.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var wA;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(wA ||= {});
var TA;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(TA ||= {});
function EA(e) {
	let { acceleration: t, activator: n = wA.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = TA.TreeOrder, pointerCoordinates: u, scrollableAncestors: d, scrollableAncestorRects: p, delta: h, threshold: g } = e, _ = OA({
		delta: h,
		disabled: !a
	}), [v, y] = zO(), b = m({
		x: 0,
		y: 0
	}), x = m({
		x: 0,
		y: 0
	}), S = f(() => {
		switch (n) {
			case wA.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case wA.DraggableRect: return i;
		}
	}, [
		n,
		i,
		u
	]), C = m(null), w = s(() => {
		let e = C.current;
		if (!e) return;
		let t = b.current.x * x.current.x, n = b.current.y * x.current.y;
		e.scrollBy(t, n);
	}, []), T = f(() => c === TA.TreeOrder ? [...d].reverse() : d, [c, d]);
	l(() => {
		if (!a || !d.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = d.indexOf(e), i = p[n];
				if (!i) continue;
				let { direction: a, speed: s } = Xk(e, i, S, t, g);
				for (let e of ["x", "y"]) _[e][a[e]] || (s[e] = 0, a[e] = 0);
				if (s.x > 0 || s.y > 0) {
					y(), C.current = e, v(w, o), b.current = s, x.current = a;
					return;
				}
			}
			b.current = {
				x: 0,
				y: 0
			}, x.current = {
				x: 0,
				y: 0
			}, y();
		}
	}, [
		t,
		w,
		r,
		y,
		a,
		o,
		JSON.stringify(S),
		JSON.stringify(_),
		v,
		d,
		T,
		p,
		JSON.stringify(g)
	]);
}
var DA = {
	x: {
		[Kk.Backward]: !1,
		[Kk.Forward]: !1
	},
	y: {
		[Kk.Backward]: !1,
		[Kk.Forward]: !1
	}
};
function OA(e) {
	let { delta: t, disabled: n } = e, r = UO(t);
	return VO((e) => {
		if (n || !r || !e) return DA;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[Kk.Backward]: e.x[Kk.Backward] || i.x === -1,
				[Kk.Forward]: e.x[Kk.Forward] || i.x === 1
			},
			y: {
				[Kk.Backward]: e.y[Kk.Backward] || i.y === -1,
				[Kk.Forward]: e.y[Kk.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function kA(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return VO((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function AA(e, t) {
	return f(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var jA;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(jA ||= {});
var MA;
(function(e) {
	e.Optimized = "optimized";
})(MA ||= {});
var NA = /*#__PURE__*/ new Map();
function PA(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = h(null), { frequency: c, measure: u, strategy: d } = i, f = m(e), p = b(), g = BO(p), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = m(null), y = VO((t) => {
		if (p && !n) return NA;
		if (!t || t === NA || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new rA(u(e), e) : null;
				n.rect.current = r, r && t.set(n.id, r);
			}
			return t;
		}
		return t;
	}, [
		e,
		a,
		n,
		p,
		u
	]);
	return l(() => {
		f.current = e;
	}, [e]), l(() => {
		p || _();
	}, [n, p]), l(() => {
		a && a.length > 0 && o(null);
	}, [JSON.stringify(a)]), l(() => {
		p || typeof c != "number" || v.current !== null || (v.current = setTimeout(() => {
			_(), v.current = null;
		}, c));
	}, [
		c,
		p,
		_,
		...r
	]), {
		droppableRects: y,
		measureDroppableContainers: _,
		measuringScheduled: a != null
	};
	function b() {
		switch (d) {
			case jA.Always: return !1;
			case jA.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function FA(e, t) {
	return VO((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function IA(e, t) {
	return FA(e, t);
}
function LA(e) {
	let { callback: t, disabled: n } = e, r = RO(t), i = f(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function RA(e) {
	let { callback: t, disabled: n } = e, r = RO(t), i = f(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function zA(e) {
	return new rA(Fk(e), e);
}
function BA(e, t, n) {
	t === void 0 && (t = zA);
	let [r, i] = h(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = LA({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = RA({ callback: a });
	return LO(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function VA(e) {
	return kk(e, FA(e));
}
var HA = [];
function UA(e) {
	let t = m(e), n = VO((n) => e ? n && n !== HA && e && t.current && e.parentNode === t.current.parentNode ? n : Bk(e) : HA, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function WA(e) {
	let [t, n] = h(null), r = m(e), i = s((e) => {
		let t = Hk(e.target);
		t && n((e) => e ? (e.set(t, Gk(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = Hk(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Gk(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				Hk(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), f(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => qO(e, t), gk) : Qk(e) : gk, [e, t]);
}
function GA(e, t) {
	t === void 0 && (t = []);
	let n = m(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== gk;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? JO(e, n.current) : gk;
}
function KA(e) {
	l(() => {
		if (!kO) return;
		let t = e.map((e) => {
			let { sensor: t } = e;
			return t.setup == null ? void 0 : t.setup();
		});
		return () => {
			for (let e of t) e?.();
		};
	}, e.map((e) => {
		let { sensor: t } = e;
		return t;
	}));
}
function qA(e, t) {
	return f(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function JA(e) {
	return f(() => e ? Lk(e) : null, [e]);
}
var YA = [];
function XA(e, t) {
	t === void 0 && (t = Fk);
	let [n] = e, r = JA(n ? MO(n) : null), [i, a] = h(YA);
	function o() {
		a(() => e.length ? e.map((e) => qk(e) ? r : new rA(t(e), e)) : YA);
	}
	let s = RA({ callback: o });
	return LO(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function ZA(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return PO(t) ? t : e;
}
function QA(e) {
	let { measure: t } = e, [n, r] = h(null), i = RA({ callback: s((e) => {
		for (let { target: n } of e) if (PO(n)) {
			r((e) => {
				let r = t(n);
				return e ? {
					...e,
					width: r.width,
					height: r.height
				} : r;
			});
			break;
		}
	}, [t]) }), [a, o] = HO(s((e) => {
		let n = ZA(e);
		i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null);
	}, [t, i]));
	return f(() => ({
		nodeRef: a,
		rect: n,
		setRef: o
	}), [
		n,
		a,
		o
	]);
}
var $A = [{
	sensor: vA,
	options: {}
}, {
	sensor: pA,
	options: {}
}], ej = { current: {} }, tj = {
	draggable: { measure: Ik },
	droppable: {
		measure: Ik,
		strategy: jA.WhileDragging,
		frequency: MA.Optimized
	},
	dragOverlay: { measure: Fk }
}, nj = class extends Map {
	get(e) {
		return e == null ? void 0 : super.get(e) ?? void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((e) => {
			let { disabled: t } = e;
			return !t;
		});
	}
	getNodeFor(e) {
		return this.get(e)?.node.current ?? void 0;
	}
}, rj = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new nj(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: pk
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: tj,
	measureDroppableContainers: pk,
	windowRect: null,
	measuringScheduled: !1
}, ij = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: pk,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: pk
}, aj = /*#__PURE__*/ r(ij), oj = /*#__PURE__*/ r(rj);
function sj() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new nj() }
	};
}
function cj(e, t) {
	switch (t.type) {
		case fk.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case fk.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case fk.DragEnd:
		case fk.DragCancel: return {
			...e,
			draggable: {
				...e.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case fk.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new nj(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case fk.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new nj(e.droppable.containers);
			return o.set(n, {
				...a,
				disabled: i
			}), {
				...e,
				droppable: {
					...e.droppable,
					containers: o
				}
			};
		}
		case fk.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new nj(e.droppable.containers);
			return a.delete(n), {
				...e,
				droppable: {
					...e.droppable,
					containers: a
				}
			};
		}
		default: return e;
	}
}
function lj(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(aj), a = UO(r), o = UO(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!XO(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = tk(e);
					if (t) {
						t.focus();
						break;
					}
				}
			});
		}
	}, [
		r,
		t,
		i,
		o,
		a
	]), null;
}
function uj(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function dj(e) {
	return f(() => ({
		draggable: {
			...tj.draggable,
			...e?.draggable
		},
		droppable: {
			...tj.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...tj.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function fj(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = m(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	LO(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = kk(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = Vk(e);
			t && t.scrollBy({
				top: i.y,
				left: i.x
			});
		}
	}, [
		t,
		o,
		s,
		r,
		n
	]);
}
var pj = /*#__PURE__*/ r({
	...gk,
	scaleX: 1,
	scaleY: 1
}), mj;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(mj ||= {});
var hj = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = $A, collisionDetection: c = Dk, measuring: u, modifiers: d, ...g } = e, [_, v] = p(cj, void 0, sj), [y, b] = ck(), [x, S] = h(mj.Uninitialized), w = x === mj.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = m({
		initial: null,
		translated: null
	}), j = f(() => T == null ? null : {
		id: T,
		data: k?.data ?? ej,
		rect: A
	}, [T, k]), M = m(null), [N, P] = h(null), [F, I] = h(null), L = BO(g, Object.values(g)), ee = GO("DndDescribedBy", n), te = f(() => O.getEnabled(), [O]), R = dj(u), { droppableRects: z, measureDroppableContainers: B, measuringScheduled: ne } = PA(te, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: R.droppable
	}), re = kA(E, T), V = f(() => F ? QO(F) : null, [F]), ie = Pe(), ae = IA(re, R.draggable.measure);
	fj({
		activeNode: T == null ? null : E.get(T),
		config: ie.layoutShiftCompensation,
		initialRect: ae,
		measure: R.draggable.measure
	});
	let H = BA(re, R.draggable.measure, ae), oe = BA(re ? re.parentElement : null), se = m({
		activatorEvent: null,
		active: null,
		activeNode: re,
		collisionRect: null,
		collisions: null,
		droppableRects: z,
		draggableNodes: E,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: O,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), ce = O.getNodeFor(se.current.over?.id), le = QA({ measure: R.dragOverlay.measure }), ue = le.nodeRef.current ?? re, de = w ? le.rect ?? H : null, fe = !!(le.nodeRef.current && le.rect), pe = VA(fe ? null : H), me = JA(ue ? MO(ue) : null), he = UA(w ? ce ?? re : null), ge = XA(he), _e = uj(d, {
		transform: {
			x: D.x - pe.x,
			y: D.y - pe.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: F,
		active: j,
		activeNodeRect: H,
		containerNodeRect: oe,
		draggingNodeRect: de,
		over: se.current.over,
		overlayNodeRect: le.rect,
		scrollableAncestors: he,
		scrollableAncestorRects: ge,
		windowRect: me
	}), ve = V ? qO(V, D) : null, ye = WA(he), be = GA(ye), xe = GA(ye, [H]), Se = qO(_e, be), Ce = de ? jk(de, _e) : null, we = j && Ce ? c({
		active: j,
		collisionRect: Ce,
		droppableRects: z,
		droppableContainers: te,
		pointerCoordinates: ve
	}) : null, Te = Sk(we, "id"), [Ee, De] = h(null), Oe = Ok(fe ? _e : qO(_e, xe), Ee?.rect ?? null, H), ke = m(null), Ae = s((e, t) => {
		let { sensor: n, options: r } = t;
		if (M.current == null) return;
		let i = E.get(M.current);
		if (!i) return;
		let a = e.nativeEvent, o = new n({
			active: M.current,
			activeNode: i,
			event: a,
			options: r,
			context: se,
			onAbort(e) {
				if (!E.get(e)) return;
				let { onDragAbort: t } = L.current, n = { id: e };
				t?.(n), y({
					type: "onDragAbort",
					event: n
				});
			},
			onPending(e, t, n, r) {
				if (!E.get(e)) return;
				let { onDragPending: i } = L.current, a = {
					id: e,
					constraint: t,
					initialCoordinates: n,
					offset: r
				};
				i?.(a), y({
					type: "onDragPending",
					event: a
				});
			},
			onStart(e) {
				let t = M.current;
				if (t == null) return;
				let n = E.get(t);
				if (!n) return;
				let { onDragStart: r } = L.current, i = {
					activatorEvent: a,
					active: {
						id: t,
						data: n.data,
						rect: A
					}
				};
				C(() => {
					r?.(i), S(mj.Initializing), v({
						type: fk.DragStart,
						initialCoordinates: e,
						active: t
					}), y({
						type: "onDragStart",
						event: i
					}), P(ke.current), I(a);
				});
			},
			onMove(e) {
				v({
					type: fk.DragMove,
					coordinates: e
				});
			},
			onEnd: s(fk.DragEnd),
			onCancel: s(fk.DragCancel)
		});
		ke.current = o;
		function s(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = se.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = L.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === fk.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = fk.DragCancel);
				}
				M.current = null, C(() => {
					v({ type: e }), S(mj.Uninitialized), De(null), P(null), I(null), ke.current = null;
					let t = e === fk.DragEnd ? "onDragEnd" : "onDragCancel";
					if (o) {
						let e = L.current[t];
						e?.(o), y({
							type: t,
							event: o
						});
					}
				});
			};
		}
	}, [E]), je = AA(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, Ae(n, t));
	}, [E, Ae]));
	KA(o), LO(() => {
		H && x === mj.Initializing && S(mj.Initialized);
	}, [H, x]), l(() => {
		let { onDragMove: e } = L.current, { active: t, activatorEvent: n, collisions: r, over: i } = se.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: Se.x,
				y: Se.y
			},
			over: i
		};
		C(() => {
			e?.(a), y({
				type: "onDragMove",
				event: a
			});
		});
	}, [Se.x, Se.y]), l(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = se.current;
		if (!e || M.current == null || !t || !i) return;
		let { onDragOver: a } = L.current, o = r.get(Te), s = o && o.rect.current ? {
			id: o.id,
			rect: o.rect.current,
			data: o.data,
			disabled: o.disabled
		} : null, c = {
			active: e,
			activatorEvent: t,
			collisions: n,
			delta: {
				x: i.x,
				y: i.y
			},
			over: s
		};
		C(() => {
			De(s), a?.(c), y({
				type: "onDragOver",
				event: c
			});
		});
	}, [Te]), LO(() => {
		se.current = {
			activatorEvent: F,
			active: j,
			activeNode: re,
			collisionRect: Ce,
			collisions: we,
			droppableRects: z,
			draggableNodes: E,
			draggingNode: ue,
			draggingNodeRect: de,
			droppableContainers: O,
			over: Ee,
			scrollableAncestors: he,
			scrollAdjustedTranslate: Se
		}, A.current = {
			initial: de,
			translated: Ce
		};
	}, [
		j,
		re,
		we,
		Ce,
		E,
		ue,
		de,
		z,
		O,
		Ee,
		he,
		Se
	]), EA({
		...ie,
		delta: D,
		draggingRect: Ce,
		pointerCoordinates: ve,
		scrollableAncestors: he,
		scrollableAncestorRects: ge
	});
	let Me = f(() => ({
		active: j,
		activeNode: re,
		activeNodeRect: H,
		activatorEvent: F,
		collisions: we,
		containerNodeRect: oe,
		dragOverlay: le,
		draggableNodes: E,
		droppableContainers: O,
		droppableRects: z,
		over: Ee,
		measureDroppableContainers: B,
		scrollableAncestors: he,
		scrollableAncestorRects: ge,
		measuringConfiguration: R,
		measuringScheduled: ne,
		windowRect: me
	}), [
		j,
		re,
		H,
		F,
		we,
		oe,
		le,
		E,
		O,
		z,
		Ee,
		B,
		he,
		ge,
		R,
		ne,
		me
	]), Ne = f(() => ({
		activatorEvent: F,
		activators: je,
		active: j,
		activeNodeRect: H,
		ariaDescribedById: { draggable: ee },
		dispatch: v,
		draggableNodes: E,
		over: Ee,
		measureDroppableContainers: B
	}), [
		F,
		je,
		j,
		H,
		v,
		ee,
		E,
		Ee,
		B
	]);
	return t.createElement(ok.Provider, { value: b }, t.createElement(aj.Provider, { value: Ne }, t.createElement(oj.Provider, { value: Me }, t.createElement(pj.Provider, { value: Oe }, a)), t.createElement(lj, { disabled: r?.restoreFocus === !1 })), t.createElement(dk, {
		...r,
		hiddenTextDescribedById: ee
	}));
	function Pe() {
		let e = N?.autoScrollEnabled === !1, t = typeof i == "object" ? i.enabled === !1 : i === !1, n = w && !e && !t;
		return typeof i == "object" ? {
			...i,
			enabled: n
		} : { enabled: n };
	}
}), gj = /*#__PURE__*/ r(null), _j = "button", vj = "Draggable";
function yj(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = GO(vj), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: d, draggableNodes: p, over: m } = c(aj), { role: h = _j, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? pj : gj), [b, x] = HO(), [S, C] = HO(), w = qA(o, t), T = BO(n);
	return LO(() => (p.set(t, {
		id: t,
		key: a,
		node: b,
		activatorNode: S,
		data: T
	}), () => {
		let e = p.get(t);
		e && e.key === a && p.delete(t);
	}), [p, t]), {
		active: l,
		activatorEvent: s,
		activeNodeRect: u,
		attributes: f(() => ({
			role: h,
			tabIndex: _,
			"aria-disabled": r,
			"aria-pressed": v && h === _j ? !0 : void 0,
			"aria-roledescription": g,
			"aria-describedby": d.draggable
		}), [
			r,
			h,
			_,
			v,
			g,
			d.draggable
		]),
		isDragging: v,
		listeners: r ? void 0 : w,
		node: b,
		over: m,
		setNodeRef: x,
		setActivatorNodeRef: C,
		transform: y
	};
}
function bj() {
	return c(oj);
}
var xj = "Droppable", Sj = { timeout: 25 };
function Cj(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = GO(xj), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(aj), p = m({ disabled: n }), h = m(!1), g = m(null), _ = m(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...Sj,
		...i
	}, x = BO(y ?? r), S = RA({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = HO(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = BO(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: fk.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: fk.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== p.current.disabled && (u({
			type: fk.SetDroppableDisabled,
			id: r,
			key: a,
			disabled: n
		}), p.current.disabled = n);
	}, [
		r,
		a,
		n,
		u
	]), {
		active: o,
		rect: g,
		isOver: d?.id === r,
		node: C,
		over: d,
		setNodeRef: w
	};
}
function wj(e) {
	let { animation: r, children: i } = e, [a, o] = h(null), [s, c] = h(null), l = UO(i);
	return !i && !a && l && o(l), LO(() => {
		if (!s) return;
		let e = a?.key, t = a?.props.id;
		e == null || t == null ? o(null) : Promise.resolve(r(t, s)).then(() => {
			o(null);
		});
	}, [
		r,
		a,
		s
	]), t.createElement(t.Fragment, null, i, a ? n(a, { ref: c }) : null);
}
var Tj = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function Ej(e) {
	let { children: n } = e;
	return t.createElement(aj.Provider, { value: ij }, t.createElement(pj.Provider, { value: Tj }, n));
}
var Dj = {
	position: "fixed",
	touchAction: "none"
}, Oj = (e) => XO(e) ? "transform 250ms ease" : void 0, kj = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = Oj } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...Dj,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: $O.Transform.toString(f),
		transformOrigin: a && i ? vk(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), Aj = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: $O.Transform.toString(t) }, { transform: $O.Transform.toString(n) }];
	},
	sideEffects: /*#__PURE__*/ ((e) => (t) => {
		let { active: n, dragOverlay: r } = t, i = {}, { styles: a, className: o } = e;
		if (a != null && a.active) for (let [e, t] of Object.entries(a.active)) t !== void 0 && (i[e] = n.node.style.getPropertyValue(e), n.node.style.setProperty(e, t));
		if (a != null && a.dragOverlay) for (let [e, t] of Object.entries(a.dragOverlay)) t !== void 0 && r.node.style.setProperty(e, t);
		return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
			for (let [e, t] of Object.entries(i)) n.node.style.setProperty(e, t);
			o != null && o.active && n.node.classList.remove(o.active);
		};
	})({ styles: { active: { opacity: "0" } } })
};
function jj(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return RO((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = ZA(a);
		if (!c) return;
		let { transform: l } = MO(a).getComputedStyle(a), u = Mk(l);
		if (!u) return;
		let d = typeof t == "function" ? t : Mj(t);
		return tA(s, i.draggable.measure), d({
			active: {
				id: e,
				data: o.data,
				node: s,
				rect: i.draggable.measure(s)
			},
			draggableNodes: n,
			dragOverlay: {
				node: a,
				rect: i.dragOverlay.measure(c)
			},
			droppableContainers: r,
			measuringConfiguration: i,
			transform: u
		});
	});
}
function Mj(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...Aj,
		...e
	};
	return (e) => {
		let { active: a, dragOverlay: o, transform: s, ...c } = e;
		if (!t) return;
		let l = {
			x: o.rect.left - a.rect.left,
			y: o.rect.top - a.rect.top
		}, u = {
			scaleX: s.scaleX === 1 ? 1 : a.rect.width * s.scaleX / o.rect.width,
			scaleY: s.scaleY === 1 ? 1 : a.rect.height * s.scaleY / o.rect.height
		}, d = {
			x: s.x - l.x,
			y: s.y - l.y,
			...u
		}, f = i({
			...c,
			active: a,
			dragOverlay: o,
			transform: {
				initial: s,
				final: d
			}
		}), [p] = f, m = f[f.length - 1];
		if (JSON.stringify(p) === JSON.stringify(m)) return;
		let h = r?.({
			active: a,
			dragOverlay: o,
			...c
		}), g = o.node.animate(f, {
			duration: t,
			easing: n,
			fill: "forwards"
		});
		return new Promise((e) => {
			g.onfinish = () => {
				h?.(), e();
			};
		});
	};
}
var Nj = 0;
function Pj(e) {
	return f(() => {
		if (e != null) return Nj++, Nj;
	}, [e]);
}
var Fj = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = bj(), w = c(pj), T = Pj(p?.id), E = uj(s, {
		activatorEvent: f,
		active: p,
		activeNodeRect: m,
		containerNodeRect: h,
		draggingNodeRect: v.rect,
		over: y,
		overlayNodeRect: v.rect,
		scrollableAncestors: x,
		scrollableAncestorRects: S,
		transform: w,
		windowRect: C
	}), D = FA(m), O = jj({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(Ej, null, t.createElement(wj, { animation: O }, p && T ? t.createElement(kj, {
		key: T,
		id: p.id,
		ref: k,
		as: l,
		activatorEvent: f,
		adjustScale: n,
		className: u,
		transition: o,
		rect: D,
		style: {
			zIndex: d,
			...a
		},
		transform: E
	}, r) : null));
});
//#endregion
//#region node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@19.3.0_react@19.3.0__react@19.3.0__react@19.3.0/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
function Ij(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Lj(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function Rj(e) {
	return e !== null && e >= 0;
}
function zj(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Bj(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var Vj = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = Ij(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, Hj = "Sortable", Uj = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: Hj,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: Vj,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function Wj(e) {
	let { children: n, id: r, items: i, strategy: a = Vj, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: d, measureDroppableContainers: p } = bj(), h = GO(Hj, r), g = c.rect !== null, _ = f(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = d ? _.indexOf(d.id) : -1, x = m(_), S = !zj(_, x.current), C = b !== -1 && y === -1 || S, w = Bj(o);
	LO(() => {
		S && v && p(_);
	}, [
		S,
		_,
		v,
		p
	]), l(() => {
		x.current = _;
	}, [_]);
	let T = f(() => ({
		activeIndex: y,
		containerId: h,
		disabled: w,
		disableTransforms: C,
		items: _,
		overIndex: b,
		useDragOverlay: g,
		sortedRects: Lj(_, u),
		strategy: a
	}), [
		y,
		h,
		w.draggable,
		w.droppable,
		C,
		_,
		b,
		u,
		g,
		a
	]);
	return t.createElement(Uj.Provider, { value: T }, n);
}
var Gj = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return Ij(n, r, i).indexOf(t);
}, Kj = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, qj = {
	duration: 200,
	easing: "ease"
}, Jj = "transform", Yj = /*#__PURE__*/ $O.Transition.toString({
	property: Jj,
	duration: 0,
	easing: "linear"
}), Xj = { roleDescription: "sortable" };
function Zj(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = h(null), s = m(n);
	return LO(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = Fk(r.current, { ignoreTransform: !0 }), n = {
					x: e.left - t.left,
					y: e.top - t.top,
					scaleX: e.width / t.width,
					scaleY: e.height / t.height
				};
				(n.x || n.y) && o(n);
			}
		}
		n !== s.current && (s.current = n);
	}, [
		t,
		n,
		r,
		i
	]), l(() => {
		a && o(null);
	}, [a]), a;
}
function Qj(e) {
	let { animateLayoutChanges: t = Kj, attributes: n, disabled: r, data: i, getNewIndex: a = Gj, id: o, strategy: s, resizeObserverConfig: u, transition: d = qj } = e, { items: p, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(Uj), C = $j(r, _), w = p.indexOf(o), T = f(() => ({
		sortable: {
			containerId: h,
			index: w,
			items: p
		},
		...i
	}), [
		h,
		i,
		w,
		p
	]), E = f(() => p.slice(p.indexOf(o)), [p, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = Cj({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: ee, setActivatorNodeRef: te, transform: R } = yj({
		id: o,
		data: T,
		attributes: {
			...Xj,
			...n
		},
		disabled: C.draggable
	}), z = OO(A, F), B = !!j, ne = B && !v && Rj(g) && Rj(b), re = !x && L, V = ne ? (re && ne ? R : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ie = Rj(g) && Rj(b) ? a({
		id: o,
		items: p,
		activeIndex: g,
		overIndex: b
	}) : w, ae = j?.id, H = m({
		activeId: ae,
		items: p,
		newIndex: ie,
		containerId: h
	}), oe = p !== H.current.items, se = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: B,
		id: o,
		index: w,
		items: p,
		newIndex: H.current.newIndex,
		previousItems: H.current.items,
		previousContainerId: H.current.containerId,
		transition: d,
		wasDragging: H.current.activeId != null
	}), ce = Zj({
		disabled: !se,
		index: w,
		node: O,
		rect: D
	});
	return l(() => {
		B && H.current.newIndex !== ie && (H.current.newIndex = ie), h !== H.current.containerId && (H.current.containerId = h), p !== H.current.items && (H.current.items = p);
	}, [
		B,
		ie,
		h,
		p
	]), l(() => {
		if (ae === H.current.activeId) return;
		if (ae != null && H.current.activeId == null) {
			H.current.activeId = ae;
			return;
		}
		let e = setTimeout(() => {
			H.current.activeId = ae;
		}, 50);
		return () => clearTimeout(e);
	}, [ae]), {
		active: j,
		activeIndex: g,
		attributes: P,
		data: T,
		rect: D,
		index: w,
		newIndex: ie,
		items: p,
		isOver: k,
		isSorting: B,
		isDragging: L,
		listeners: I,
		node: O,
		overIndex: b,
		over: ee,
		setNodeRef: z,
		setActivatorNodeRef: te,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: ce ?? V,
		transition: le()
	};
	function le() {
		if (ce || oe && H.current.newIndex === w) return Yj;
		if (!(re && !XO(M) || !d) && (B || se)) return $O.Transition.toString({
			...d,
			property: Jj
		});
	}
}
function $j(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function eM(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var tM = [
	uA.Down,
	uA.Right,
	uA.Up,
	uA.Left
], nM = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if (tM.includes(e.code)) {
		if (e.preventDefault(), !n || !r) return;
		let t = [];
		a.getEnabled().forEach((n) => {
			if (!n || n != null && n.disabled) return;
			let a = i.get(n.id);
			if (a) switch (e.code) {
				case uA.Down:
					r.top < a.top && t.push(n);
					break;
				case uA.Up:
					r.top > a.top && t.push(n);
					break;
				case uA.Left:
					r.left > a.left && t.push(n);
					break;
				case uA.Right: r.left < a.left && t.push(n);
			}
		});
		let c = Tk({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = Sk(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = Bk(c).some((e, t) => s[t] !== e), i = rM(e, t), a = iM(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : JO(u, l);
			}
		}
	}
};
function rM(e, t) {
	return !eM(e) || !eM(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function iM(e, t) {
	return !eM(e) || !eM(t) || !rM(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function aM({ item: e, index: t, renderItem: n, keyExtractor: r, disabled: i = !1 }) {
	let { attributes: a, listeners: o, setNodeRef: s, transform: c, transition: l, isDragging: u } = Qj({
		id: r(e),
		disabled: i
	}), d = {
		transform: $O.Transform.toString(c),
		transition: l
	};
	return /* @__PURE__ */ y("div", {
		ref: s,
		style: d,
		className: `uhuu:relative uhuu:group/drag-item ${u ? "uhuu:opacity-50" : ""} ${i ? "uhuu:opacity-60" : ""}`,
		children: [n(e, t, u), !i && /* @__PURE__ */ v("div", {
			...a,
			...o,
			className: "uhuu:absolute uhuu:inset-0 uhuu:cursor-grab uhuu:active:cursor-grabbing uhuu:outline-none uhuu:touch-none"
		})]
	});
}
function oM({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ v("div", {
		className: "uhuu:rotate-2",
		children: n(e, t, !0)
	});
}
function sM({ items: e, onChange: t, renderItem: n, keyExtractor: r, gridColsClass: i = "uhuu-page-drag-drop-grid-cols", className: a = "", renderEmptyState: o, isItemDisabled: s, canDropAt: c }) {
	let [u, d] = h(e);
	l(() => {
		d(e);
	}, [e]);
	let [f, p] = h(null), m = hk(mk(vA), mk(pA, { coordinateGetter: nM })), g = (e) => {
		let t = u.find((t) => r(t) === e.active.id);
		t && s && s(t) || p(e.active.id);
	}, _ = (e) => {
		let { active: n, over: i } = e;
		if (!i || n.id === i.id) {
			p(null);
			return;
		}
		let a = u.find((e) => r(e) === n.id), o = u.findIndex((e) => r(e) === n.id), l = u.findIndex((e) => r(e) === i.id);
		if (a && s && s(a)) p(null);
		else if (c && !c(a, l, u)) p(null);
		else {
			if (o !== -1 && l !== -1) {
				let e = Ij(u, o, l);
				d(e), t(e);
			}
			p(null);
		}
	}, b = u.find((e) => r(e) === f), x = b ? u.findIndex((e) => r(e) === f) : -1;
	return /* @__PURE__ */ v("div", {
		className: `uhuu:w-full ${a}`,
		children: u.length === 0 && o ? o() : /* @__PURE__ */ v("div", {
			className: "uhuu:mb-6",
			children: /* @__PURE__ */ y(hj, {
				sensors: m,
				collisionDetection: wk,
				onDragStart: g,
				onDragEnd: _,
				children: [/* @__PURE__ */ v(Wj, {
					items: u.map(r),
					strategy: Vj,
					children: /* @__PURE__ */ v("div", {
						className: i,
						children: u.map((e, t) => /* @__PURE__ */ v(aM, {
							item: e,
							index: t,
							renderItem: n,
							keyExtractor: r,
							disabled: s ? s(e) : !1
						}, r(e)))
					})
				}), /* @__PURE__ */ v(Fj, { children: b ? /* @__PURE__ */ v(oM, {
					item: b,
					index: x,
					renderItem: n
				}) : null })]
			})
		})
	});
}
//#endregion
//#region src/uhuu/ui/badge.tsx
var cM = ms("uhuu:inline-flex uhuu:items-center uhuu:rounded-md uhuu:border uhuu:px-2.5 uhuu:py-0.5 uhuu:text-xs uhuu:font-medium uhuu:transition-colors uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-offset-2", {
	variants: { variant: {
		default: "uhuu:border-transparent uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse)",
		secondary: "uhuu:border-transparent uhuu:bg-gray-100 uhuu:text-gray-900",
		outline: "uhuu:border-gray-300 uhuu:text-gray-900 uhuu:bg-(--uhuu-shell-surface)"
	} },
	defaultVariants: { variant: "default" }
});
function lM({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ v("div", {
		className: q(cM({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function uM({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = ec(), a = e.strictPosition, o = a === "start" || a === "end";
	return /* @__PURE__ */ y("div", {
		className: `uhuu:flex uhuu:items-center uhuu:justify-center uhuu:border uhuu:relative uhuu:rounded-lg uhuu:bg-(--uhuu-shell-surface) uhuu:overflow-hidden uhuu:transition-all ${n ? "uhuu:opacity-50 uhuu:border-gray-400 uhuu:shadow-xl uhuu:scale-105" : o ? "uhuu:border-gray-300 uhuu:bg-gray-50" : "uhuu:border-gray-200 uhuu:group-hover/drag-item:border-gray-300 uhuu:group-hover/drag-item:shadow-md"}`,
		children: [/* @__PURE__ */ v("div", {
			className: "uhuu:flex uhuu:items-center uhuu:justify-center",
			style: {
				width: "200px",
				height: "280px"
			},
			children: e.content || /* @__PURE__ */ y("div", {
				className: "uhuu:text-center uhuu:p-4",
				children: [/* @__PURE__ */ v("div", {
					className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
					children: i(e.label) || r("page.fallbackName", { number: t + 1 })
				}), /* @__PURE__ */ v("div", {
					className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-1 uhuu:font-mono",
					children: e.id
				})]
			})
		}), /* @__PURE__ */ v("div", {
			className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:z-20",
			children: /* @__PURE__ */ v(lM, {
				variant: "secondary",
				className: `uhuu:text-xs uhuu:min-w-[24px] uhuu:h-6 uhuu:font-medium uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-sm uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-sm uhuu:border uhuu:border-gray-200 ${o ? "uhuu:opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ v(Bo, { className: "uhuu:size-3 uhuu:text-gray-500" }) : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("span", {
					className: "uhuu:group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ v(Ro, { className: "uhuu:size-4 uhuu:text-gray-400 uhuu:hidden uhuu:group-hover/drag-item:block" })] })
			})
		})]
	});
}
function dM({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "uhuu-page-order-grid-cols" }) {
	let p = ec(), { t: m, localize: h } = p, g = h(u) ?? m("reorderDialog.title"), _ = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = e.useCallback((e) => e.id, []);
	e.useEffect(() => {
		if (!t) x(r), C(!1);
		else if (!S) x(r);
		else {
			let e = new Set(b.map(w));
			(e.size !== r.length || r.some((t) => !e.has(w(t)))) && x(r);
		}
	}, [
		r,
		t,
		S,
		b,
		w
	]);
	let T = (e) => {
		x(e), C(!0);
	}, E = () => {
		i(b), C(!1), n(!1);
	}, D = () => {
		x(r), C(!1), n(!1);
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? tD({
		pageComponents: s,
		payload: c,
		setup: l,
		i18n: p
	}) : null, [
		o,
		s,
		c,
		l,
		p
	]), k = (e, t, n) => {
		let r = e.strictPosition, i = !!a && r !== "start" && r !== "end", s = (t) => {
			t.preventDefault(), t.stopPropagation(), a && (a(e), x((t) => t.filter((t) => w(t) !== w(e))), C(!0));
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ v(uM, {
			page: e,
			index: t,
			isDragging: n
		});
		return /* @__PURE__ */ y("div", {
			className: "uhuu:relative uhuu:inline-block uhuu:align-top",
			children: [c, i && /* @__PURE__ */ y("button", {
				type: "button",
				title: m("reorderDialog.remove"),
				onClick: s,
				onPointerDown: (e) => e.stopPropagation(),
				className: "uhuu:group/remove-btn uhuu:absolute uhuu:-top-3 uhuu:-right-3 uhuu:z-30 uhuu:hidden uhuu:h-6 uhuu:w-6 uhuu:items-center uhuu:justify-center uhuu:rounded-full uhuu:bg-(--uhuu-shell-surface)/50 uhuu:hover:bg-(--uhuu-shell-surface) uhuu:text-gray-900 uhuu:backdrop-blur-md uhuu:group-hover/drag-item:flex uhuu:border uhuu:border-gray-200",
				children: [/* @__PURE__ */ v(Ro, { className: "uhuu:size-3.5 uhuu:opacity-60 uhuu:group-hover/remove-btn:hidden" }), /* @__PURE__ */ v(Wo, { className: "uhuu:size-3.5 uhuu:rotate-45 uhuu:hidden uhuu:group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ y("div", {
		className: "uhuu:text-center uhuu:py-20",
		children: [
			/* @__PURE__ */ v("div", {
				className: "uhuu:w-12 uhuu:h-12 uhuu:bg-gray-50 uhuu:rounded-lg uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
				children: /* @__PURE__ */ v(Do, { className: "uhuu:w-6 uhuu:h-6 uhuu:text-gray-400" })
			}),
			/* @__PURE__ */ v("div", {
				className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:mb-1",
				children: m("reorderDialog.emptyTitle")
			}),
			/* @__PURE__ */ v("p", {
				className: "uhuu:text-sm uhuu:text-gray-500",
				children: m("reorderDialog.emptyDescription")
			})
		]
	}), j = e.useCallback((e) => {
		let t = e.strictPosition;
		return t === "start" || t === "end";
	}, []), M = e.useCallback((e, t, n) => {
		let r = e.strictPosition;
		if (r === "start" || r === "end") return !1;
		let i = -1, a = n.length;
		for (let e = 0; e < n.length; e++) {
			let t = n[e].strictPosition;
			t === "start" ? i = e : t === "end" && a === n.length && (a = e);
		}
		return !(t <= i || t >= a);
	}, []);
	return /* @__PURE__ */ v(yO, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ y(SO, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:p-0 uhuu:gap-0 uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:[&>button]:hidden",
			onPointerDownOutside: (e) => {
				e.preventDefault();
			},
			onEscapeKeyDown: (e) => {
				e.preventDefault();
			},
			"data-uhuu-editor": !0,
			children: [
				/* @__PURE__ */ v(CO, {
					className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4",
					children: /* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-end uhuu:gap-3",
						children: [
							/* @__PURE__ */ v("div", {
								className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
								children: /* @__PURE__ */ v(Do, { className: "uhuu:w-4 uhuu:h-4" })
							}),
							/* @__PURE__ */ y("div", {
								className: "uhuu:flex-1",
								children: [/* @__PURE__ */ v(TO, {
									className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
									children: g
								}), /* @__PURE__ */ v(EO, {
									className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
									children: _
								})]
							}),
							/* @__PURE__ */ v(lM, {
								variant: "outline",
								className: "uhuu:text-xs uhuu:mb-0.5 uhuu:mr-8",
								children: m("page.count", { count: b.length })
							})
						]
					})
				}),
				/* @__PURE__ */ v("div", {
					className: "uhuu:flex-1 uhuu:overflow-hidden uhuu:flex uhuu:flex-col",
					children: /* @__PURE__ */ v("div", {
						className: "uhuu:flex-1 uhuu:overflow-auto uhuu:p-6 uhuu:bg-gray-50",
						children: /* @__PURE__ */ v(sM, {
							items: b,
							onChange: T,
							renderItem: k,
							keyExtractor: w,
							renderEmptyState: A,
							gridColsClass: f,
							className: "uhuu:pb-4",
							isItemDisabled: j,
							canDropAt: M
						})
					})
				}),
				/* @__PURE__ */ y(wO, {
					className: "uhuu:border-t uhuu:border-gray-200 uhuu:px-4 uhuu:py-3 uhuu:gap-3",
					children: [/* @__PURE__ */ v(gs, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ v(gs, {
						variant: "default",
						onClick: E,
						disabled: !S,
						children: m("reorderDialog.save")
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-canvas.tsx
function fM(e, t) {
	let n = 0;
	for (let r of Object.values(e ?? {})) {
		let e = r?.[t]?.growth;
		typeof e == "number" && Number.isFinite(e) && e > n && (n = e);
	}
	return Math.ceil(n);
}
function pM(e, t) {
	return Array.from(e.querySelectorAll(t)).filter((e) => !e.closest(`[${Be}]`));
}
function mM({ pageKey: t, version: n, readiness: r, onMeasurement: i, onPrune: a, children: o }) {
	let [s] = e.useState(() => ({ mounted: !0 })), c = e.useRef(null), l = e.useRef(a);
	ce(() => {
		l.current = a;
	}, [a]);
	let [u, d] = e.useState(0), f = e.useCallback(() => {
		d((e) => e + 1);
		let e = !1;
		return () => {
			e || (e = !0, d((e) => e - 1));
		};
	}, []);
	ce(() => (s.mounted = !0, () => {
		s.mounted = !1;
	}), [s]);
	let p = e.useCallback(() => {
		let e = c.current;
		if (!s.mounted || !e) return;
		let n = new Set(pM(e, "[data-uhuu-flow=\"true\"]").map((e) => e.dataset.uhuuFlowId ?? ""));
		l.current?.(t, n);
	}, [s, t]);
	ce(() => {
		p();
	}, [p]);
	let m = e.useRef(void 0), h = e.useCallback(() => {
		clearTimeout(m.current), m.current = void 0;
	}, []), g = e.useCallback(() => {
		h();
		let e = c.current;
		s.mounted && e && (pM(e, "[data-uhuu-flow-area]").length ? e.removeAttribute("data-uhuu-flow-error") : (e.setAttribute("data-uhuu-flow-error", "missing-flow-region"), m.current = setTimeout(() => {
			e.isConnected && !pM(e, "[data-uhuu-flow-area]").length && be(`missing-flow-region:${t}`, `[uhuu-components] Page "${t}" is marked hasFlow but renders no Flow.Area, so data-uhuu-pagination stays "measuring". Render a FlowArea with one Flow.Items in every branch (an empty Flow is one page), or remove hasFlow.`);
		}, He)));
	}, [
		s,
		t,
		h
	]);
	ce(() => (g(), h), [g, h]);
	let _ = e.useCallback((e, n) => {
		h(), c.current?.removeAttribute("data-uhuu-flow-error"), i(t, e, n);
	}, [
		t,
		i,
		h
	]), b = e.useCallback(() => {
		p(), g();
	}, [p, g]), x = e.useMemo(() => ({
		mode: "measure",
		pageIndex: 0,
		measurementVersion: n,
		pageKey: t,
		readiness: r,
		registerMeasurement: _,
		unregisterMeasurement: b,
		requestContinuation: f
	}), [
		n,
		t,
		r,
		_,
		b,
		f
	]), S = e.useMemo(() => ({
		mode: "measure",
		pageIndex: 1,
		measurementVersion: n,
		pageKey: t,
		copy: "continuation"
	}), [n, t]);
	return /* @__PURE__ */ y("div", {
		ref: c,
		style: {
			position: "fixed",
			visibility: "hidden",
			pointerEvents: "none",
			left: "-100000px",
			top: 0,
			width: "calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))",
			height: "calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed))",
			minWidth: "calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))",
			minHeight: "calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed))",
			overflow: "hidden",
			zIndex: -1
		},
		"aria-hidden": "true",
		"data-uhuu-flow-measurement": "true",
		children: [o(x), u > 0 && /* @__PURE__ */ v("div", {
			"data-uhuu-flow-continuation-copy": "true",
			children: o(S)
		})]
	});
}
function hM({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: h, measurementPageNo: g, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, flowReadiness: D, onFlowMeasurement: O, onFlowPrune: k, renderVisible: A = !0, renderMode: j = "sheet", spread: M }) {
	let N = typeof f == "function" ? (e) => f({
		pageNo: e,
		pageId: t
	}) : () => f, P = r || n || t, F = [P ? `uhuu-page--${P}` : "", p].filter(Boolean).join(" "), I = (e = m, u = h, d = c) => i ? /* @__PURE__ */ v(i, {
		payload: a,
		pagePayload: o,
		integration: s,
		pageId: t,
		templateId: n ?? r ?? t,
		pageNum: e,
		totalPages: u,
		page: d,
		parentGroup: l,
		componentKey: r,
		dataBinding: x,
		spread: M
	}) : null, L = fM(C, S), ee = e.useMemo(() => L > 0 ? { "--uhuu-sheet-growth": `${L}px` } : void 0, [L]), te = e.useMemo(() => ({
		mode: "visible",
		pageKey: P,
		pageIndex: S,
		chunksByFlowId: C
	}), [
		P,
		S,
		C
	]), R = e.useMemo(() => c && {
		first: {
			...c,
			virtualPageIndex: 0,
			virtualPageCount: 1
		},
		continuation: {
			...c,
			virtualPageIndex: 1,
			virtualPageCount: 2
		}
	}, [c]);
	return j === "content" ? /* @__PURE__ */ y(_, { children: [d, /* @__PURE__ */ v(Ve.Provider, {
		value: te,
		children: I(m, h)
	})] }) : /* @__PURE__ */ y(_, { children: [w && O && T && /* @__PURE__ */ v(mM, {
		pageKey: T,
		version: E,
		readiness: D,
		onMeasurement: O,
		onPrune: k,
		children: (e) => {
			let t = e.copy === "continuation", n = g ?? m, r = b ?? h;
			return /* @__PURE__ */ v(Fe, {
				setup: u,
				children: /* @__PURE__ */ v(Ie, {
					className: F,
					pageNo: m,
					"data-page-key": P,
					children: /* @__PURE__ */ v(Ve.Provider, {
						value: e,
						children: t ? I(n + 1, r === void 0 ? void 0 : r + 1, R?.continuation) : I(n, r, R?.first)
					})
				})
			});
		}
	}), A && /* @__PURE__ */ v(Fe, {
		setup: u,
		children: /* @__PURE__ */ y(Ie, {
			className: F,
			style: ee,
			pageNo: m,
			overlay: ({ pageNo: e }) => N(e),
			"data-page-key": P,
			children: [d, /* @__PURE__ */ v(Ve.Provider, {
				value: te,
				children: I(m, h)
			})]
		})
	})] });
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var gM = Object.defineProperty, _M = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => gM(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ v(Fl.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), vM = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(_M, {
	ref: n,
	className: q("uhuu:text-sm uhuu:font-medium uhuu:leading-none uhuu:text-gray-700 uhuu:peer-disabled:cursor-not-allowed uhuu:peer-disabled:opacity-70", e),
	...t
}));
vM.displayName = _M.displayName;
//#endregion
//#region src/uhuu/ui/select.tsx
var yM = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y("div", {
	className: "uhuu:relative uhuu:w-full",
	children: [/* @__PURE__ */ v("select", {
		className: q("uhuu:peer uhuu:flex uhuu:h-8 uhuu:w-full uhuu:appearance-none uhuu:truncate uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:py-1 uhuu:pr-8 uhuu:pl-2.5 uhuu:text-sm uhuu:text-gray-900 uhuu:outline-none uhuu:transition-colors uhuu:hover:border-gray-300 uhuu:focus:border-gray-400 uhuu:focus:ring-2 uhuu:focus:ring-gray-200 uhuu:focus:ring-offset-0 uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50", e),
		ref: r,
		...n,
		children: t
	}), /* @__PURE__ */ v(Mo, {
		"aria-hidden": "true",
		className: "uhuu:pointer-events-none uhuu:absolute uhuu:top-1/2 uhuu:right-2.5 uhuu:h-3.5 uhuu:w-3.5 uhuu:-translate-y-1/2 uhuu:text-gray-500 uhuu:peer-disabled:opacity-50"
	})]
}));
yM.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var bM = Object.defineProperty, xM = (e, t) => bM(e, "name", {
	value: t,
	configurable: !0
});
function SM(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
xM(SM, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var CM = Object.defineProperty, wM = (e, t) => CM(e, "name", {
	value: t,
	configurable: !0
});
function TM(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
wM(TM, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var EM = Object.defineProperty, DM = (e, t) => EM(e, "name", {
	value: t,
	configurable: !0
}), OM = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, kM = {
	LTR: "ltr",
	RTL: "rtl"
}, AM = ["PageUp", "PageDown"], jM = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], MM = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
}, NM = "Slider", [PM, FM, IM] = /* @__PURE__ */ zl(NM), [LM, RM] = /* @__PURE__ */ tl(NM, [IM]), [zM, BM] = LM(NM), VM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = OM.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ DM(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ DM(() => {}, "onValueCommit"), inverted: h = !1, form: g, ..._ } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === OM.Horizontal ? WM : GM, [C, w] = e.useState(null), T = Zc(n, w), [E = [], D] = fl({
		prop: f,
		defaultProp: d,
		onChange: /* @__PURE__ */ DM((e) => {
			[...y.current][b.current]?.focus({
				preventScroll: !0,
				focusVisible: x.current
			}), x.current = !1, p(e);
		}, "onChange")
	}), O = e.useRef(E), k = e.useRef(E);
	e.useEffect(() => {
		let e = g ? C?.ownerDocument.getElementById(g) : C?.closest("form");
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ DM(() => D(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		C,
		g,
		D
	]);
	function A(e) {
		N(e, lN(E, e));
	}
	DM(A, "handleSlideStart");
	function j(e) {
		N(e, b.current);
	}
	DM(j, "handleSlideMove");
	function M() {
		String(E) !== String(O.current) && m(E);
	}
	DM(M, "handleSlideEnd");
	function N(e, t, { commit: n } = { commit: !1 }) {
		let r = mN(o), s = SM(hN(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? SM(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = oN(e, c, t);
			if (fN(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return DM(N, "updateValues"), /* @__PURE__ */ v(zM, {
		scope: t.__scopeSlider,
		name: r,
		disabled: c,
		min: i,
		max: a,
		valueIndexToChangeRef: b,
		thumbs: y.current,
		values: E,
		orientation: s,
		form: g,
		children: /* @__PURE__ */ v(PM.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ v(PM.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ v(S, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					..._,
					ref: T,
					onPointerDown: X(_.onPointerDown, () => {
						c || (O.current = E, x.current = !1);
					}),
					min: i,
					max: a,
					inverted: h,
					onSlideStart: c ? void 0 : A,
					onSlideMove: c ? void 0 : j,
					onSlideEnd: c ? void 0 : M,
					onHomeKeyDown: () => {
						c || (x.current = !0, N(i, 0, { commit: !0 }));
					},
					onEndKeyDown: () => {
						c || (x.current = !0, N(a, E.length - 1, { commit: !0 }));
					},
					onStepKeyDown: ({ event: e, direction: t }) => {
						if (!c) {
							x.current = !0;
							let n = AM.includes(e.key) || e.shiftKey && jM.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(gN(a, {
								min: i,
								step: o,
								direction: t,
								multiplier: n
							}), r, { commit: !0 });
						}
					}
				})
			})
		})
	});
}, "Slider")), [HM, UM] = LM(NM, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), WM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = Zc(n, p), h = e.useRef(void 0), g = eu(a), _ = g === kM.LTR, y = _ && !o || !_ && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = pN([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return DM(b, "getValueFromPointer"), /* @__PURE__ */ v(HM, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ v(KM, {
			dir: g,
			"data-orientation": "horizontal",
			...d,
			ref: m,
			style: {
				...d.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let t = b(e.clientX);
				s?.(t);
			},
			onSlideMove: (e) => {
				let t = b(e.clientX);
				c?.(t);
			},
			onSlideEnd: () => {
				h.current = void 0, l?.();
			},
			onStepKeyDown: (e) => {
				let t = MM[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), GM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = Zc(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = pN([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return DM(h, "getValueFromPointer"), /* @__PURE__ */ v(HM, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ v(KM, {
			"data-orientation": "vertical",
			...u,
			ref: f,
			style: {
				...u.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let t = h(e.clientY);
				o?.(t);
			},
			onSlideMove: (e) => {
				let t = h(e.clientY);
				s?.(t);
			},
			onSlideEnd: () => {
				p.current = void 0, c?.();
			},
			onStepKeyDown: (e) => {
				let t = MM[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), KM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = BM(NM, n);
	return /* @__PURE__ */ v(Fl.span, {
		...l,
		ref: t,
		onKeyDown: X(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : AM.concat(jM).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: X(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : r(e);
		}),
		onPointerMove: X(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: X(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}, "SliderImpl")), qM = "SliderTrack", JM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = BM(qM, n);
	return /* @__PURE__ */ v(Fl.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), YM = "SliderRange", XM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = BM(YM, r), o = UM(YM, r), s = Zc(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => sN(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ v(Fl.span, {
		"data-orientation": a.orientation,
		"data-disabled": a.disabled ? "" : void 0,
		...i,
		ref: s,
		style: {
			...t.style,
			[o.startEdge]: u + "%",
			[o.endEdge]: d + "%"
		}
	});
}, "SliderRange")), [ZM, QM] = LM("SliderThumb"), $M = "SliderThumbProvider";
function eN(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = BM($M, n), s = FM(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = dp(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : sN(p, o.min, o.max);
	e.useEffect(() => {
		if (c) return o.thumbs.add(c), () => {
			o.thumbs.delete(c);
		};
	}, [c, o.thumbs]);
	let g = {
		value: p,
		name: m,
		form: o.form,
		isFormControl: f,
		index: u,
		thumb: c,
		onThumbChange: l,
		percent: h,
		size: d
	};
	return /* @__PURE__ */ v(ZM, {
		scope: n,
		...g,
		children: _N(a) ? a(g) : i
	});
}
DM(eN, "SliderThumbProvider");
var tN = "SliderThumbTrigger", nN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = BM(tN, n), a = UM(tN, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = QM(tN, n), d = Zc(t, u), f = cN(o, i.values.length), p = l?.[a.size], m = p ? uN(p, c, a.direction) : 0;
	return /* @__PURE__ */ v("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ v(PM.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ v(Fl.span, {
				role: "slider",
				"aria-label": e["aria-label"] || f,
				"aria-valuemin": i.min,
				"aria-valuenow": s,
				"aria-valuemax": i.max,
				"aria-orientation": i.orientation,
				"data-orientation": i.orientation,
				"data-disabled": i.disabled ? "" : void 0,
				tabIndex: i.disabled ? void 0 : 0,
				...r,
				ref: d,
				style: s === void 0 ? { display: "none" } : e.style,
				onFocus: X(e.onFocus, () => {
					i.valueIndexToChangeRef.current = o;
				})
			})
		})
	});
}, "SliderThumbTrigger")), rN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ v(eN, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(nN, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ v(aN, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), iN = "SliderBubbleInput", aN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ DM(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = QM(iN, t), s = e.useRef(null), c = Zc(s, r), l = TM(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ v(Fl.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function oN(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
DM(oN, "getNextSortedValues");
function sN(e, t, n) {
	return SM(100 / (n - t) * (e - t), [0, 100]);
}
DM(sN, "convertValueToPercentage");
function cN(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
DM(cN, "getLabel");
function lN(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
DM(lN, "getClosestValueIndex");
function uN(e, t, n) {
	let r = e / 2;
	return (r - pN([0, 50], [0, r])(t) * n) * n;
}
DM(uN, "getThumbInBoundsOffset");
function dN(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
DM(dN, "getStepsBetweenValues");
function fN(e, t) {
	if (t > 0) {
		let n = dN(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
DM(fN, "hasMinStepsBetweenValues");
function pN(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
DM(pN, "linearScale");
function mN(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
DM(mN, "getDecimalCount");
function hN(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
DM(hN, "roundValue");
function gN(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = mN(n), o = (e - t) / n, s = Math.round(o), c = hN(s * n + t, a) === hN(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), hN(l * n + t, a);
}
DM(gN, "getNextStepValue");
function _N(e) {
	return typeof e == "function";
}
DM(_N, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var vN = e.forwardRef(({ className: e, thumbLabel: t, thumbDescribedBy: n, ...r }, i) => /* @__PURE__ */ y(VM, {
	ref: i,
	className: q("uhuu:relative uhuu:flex uhuu:w-full uhuu:touch-none uhuu:select-none uhuu:items-center uhuu:data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ v(JM, {
		className: "uhuu:relative uhuu:h-1.5 uhuu:w-full uhuu:grow uhuu:overflow-hidden uhuu:rounded-full uhuu:bg-gray-200",
		children: /* @__PURE__ */ v(XM, { className: "uhuu:absolute uhuu:h-full uhuu:bg-gray-900" })
	}), /* @__PURE__ */ v(rN, {
		"aria-label": t,
		"aria-describedby": n,
		className: "uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:border-2 uhuu:border-gray-900 uhuu:bg-(--uhuu-shell-surface) uhuu:shadow uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50"
	})]
}));
vN.displayName = VM.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var yN = Object.defineProperty, bN = (e, t) => yN(e, "name", {
	value: t,
	configurable: !0
}), xN = "Switch", [SN, CN] = /* @__PURE__ */ tl(xN), [wN, TN] = SN(xN);
function EN(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = fl({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: xN
	}), [h, g] = e.useState(null), [_, y] = e.useState(null), b = e.useRef(!1), [x, S] = e.useReducer((e) => e + 1, 0), C = {
		checked: p,
		setChecked: m,
		disabled: o,
		control: h,
		setControl: g,
		name: c,
		form: s,
		value: d,
		hasConsumerStoppedPropagationRef: b,
		userInteractionCount: x,
		onUserInteraction: S,
		required: u,
		defaultChecked: a,
		isFormControl: !h || !!s || !!h.closest("form"),
		bubbleInput: _,
		setBubbleInput: y
	};
	return /* @__PURE__ */ v(wN, {
		scope: n,
		...C,
		children: PN(f) ? f(C) : i
	});
}
bN(EN, "SwitchProvider");
var DN = "SwitchTrigger", ON = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ bN(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: g } = TN(DN, t), _ = Zc(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ bN(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ v(Fl.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": FN(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: _,
		onClick: X(n, (e) => {
			m(), f((e) => !e), g && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), kN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ bN(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ v(EN, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(ON, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ v(NN, { __scopeSwitch: n })] })
	});
}, "Switch")), AN = "SwitchThumb", jN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ bN(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = TN(AN, n);
	return /* @__PURE__ */ v(Fl.span, {
		"data-state": FN(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), MN = "SwitchBubbleInput", NN = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ bN(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: g } = TN(MN, t), _ = Zc(i, g), y = dp(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
	e.useEffect(() => {
		let e = h;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = s !== S.current;
		S.current = s;
		let i = x.current !== c;
		x.current = c;
		let a = !(r && o.current);
		if (i && n) {
			b.current = !r;
			let t = new Event("click", { bubbles: a });
			n.call(e, c), e.dispatchEvent(t), b.current = !1;
		}
	}, [
		h,
		c,
		o,
		s
	]);
	let C = e.useRef(c);
	return /* @__PURE__ */ v(Fl.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: l ?? C.current,
		required: u,
		disabled: d,
		name: f,
		value: p,
		form: m,
		...r,
		tabIndex: -1,
		ref: _,
		onClick: X(n, (e) => {
			b.current && e.stopPropagation();
		}),
		style: {
			...r.style,
			...y,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "SwitchBubbleInput"));
function PN(e) {
	return typeof e == "function";
}
bN(PN, "isFunction");
function FN(e) {
	return e ? "checked" : "unchecked";
}
bN(FN, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var IN = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(kN, {
	ref: n,
	className: q("uhuu:peer uhuu:inline-flex uhuu:h-5 uhuu:w-9 uhuu:shrink-0 uhuu:cursor-pointer uhuu:items-center uhuu:rounded-full uhuu:border-2 uhuu:border-transparent uhuu:bg-gray-200 uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:focus-visible:ring-offset-(--uhuu-shell-surface) uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50 uhuu:data-[state=checked]:bg-gray-900 uhuu:data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ v(jN, { className: q("uhuu:pointer-events-none uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:bg-white uhuu:shadow-lg uhuu:ring-0 uhuu:data-[state=checked]:bg-(--uhuu-shell-on-inverse) uhuu:transition-transform uhuu:data-[state=checked]:translate-x-4 uhuu:data-[state=unchecked]:translate-x-0") })
}));
IN.displayName = kN.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/option-controls.tsx
var LN = "__uhuu_option_unset__", RN = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500";
function zN(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (typeof e != "string" || e.trim() === "") return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function BN(e) {
	let t = typeof e.min == "number" ? e.min : 0;
	return {
		min: t,
		max: typeof e.max == "number" ? Math.max(e.max, t) : Math.max(100, t),
		step: typeof e.step == "number" && e.step > 0 ? e.step : 1
	};
}
function VN(e, { min: t, max: n }) {
	let r = zN(e) ?? t;
	return Math.min(n, Math.max(t, r));
}
function HN({ definition: e, value: t, onChange: n }) {
	let { t: r, localize: i } = ec(), a = u(), o = `${a}control`, s = `${a}label`, c = `${a}description`, l = i(e.label) ?? xE(e) ?? "", d = i(e.description), f = d ? c : void 0, p = d ? /* @__PURE__ */ v("p", {
		id: c,
		className: "uhuu:text-xs uhuu:leading-snug uhuu:text-gray-500",
		children: d
	}) : null, m = Array.isArray(e.options) ? e.options : [];
	switch (bE(e)) {
		case "toggle": return /* @__PURE__ */ y("div", {
			className: "uhuu:flex uhuu:flex-col uhuu:gap-1",
			children: [/* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:min-h-8 uhuu:items-center uhuu:justify-between uhuu:gap-3",
				children: [/* @__PURE__ */ v(vM, {
					htmlFor: o,
					className: RN,
					children: l
				}), /* @__PURE__ */ v(IN, {
					id: o,
					"aria-describedby": f,
					checked: DE(t),
					onCheckedChange: (e) => n(e)
				})]
			}), p]
		});
		case "slider": {
			let r = BN(e), i = VN(t, r);
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-2",
				children: [
					/* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-3",
						children: [/* @__PURE__ */ v("span", {
							id: s,
							className: RN,
							children: l
						}), /* @__PURE__ */ v("span", {
							className: "uhuu:font-mono uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-700",
							children: i
						})]
					}),
					/* @__PURE__ */ v(vN, {
						"aria-labelledby": s,
						thumbLabel: l,
						thumbDescribedBy: f,
						min: r.min,
						max: r.max,
						step: r.step,
						value: [i],
						onValueChange: (e) => n(e[0])
					}),
					p
				]
			});
		}
		case "counter": {
			let i = BN(e), a = VN(t, i), o = (e) => n(VN(a + e * i.step, i));
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v("span", {
						id: s,
						className: q(RN, "uhuu:block"),
						children: l
					}),
					/* @__PURE__ */ y("div", {
						role: "group",
						"aria-labelledby": s,
						"aria-describedby": f,
						className: "uhuu:flex uhuu:items-center uhuu:gap-1.5",
						children: [
							/* @__PURE__ */ v(gs, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								"aria-label": r("options.decrease", { name: l }),
								disabled: a <= i.min,
								onClick: () => o(-1),
								children: /* @__PURE__ */ v(Ho, {
									"aria-hidden": "true",
									className: "uhuu:h-3.5 uhuu:w-3.5"
								})
							}),
							/* @__PURE__ */ v("output", {
								"aria-live": "polite",
								className: "uhuu:flex uhuu:h-8 uhuu:flex-1 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-gray-50 uhuu:font-mono uhuu:text-sm uhuu:font-medium uhuu:tabular-nums uhuu:text-gray-900",
								children: a
							}),
							/* @__PURE__ */ v(gs, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								"aria-label": r("options.increase", { name: l }),
								disabled: a >= i.max,
								onClick: () => o(1),
								children: /* @__PURE__ */ v(Wo, {
									"aria-hidden": "true",
									className: "uhuu:h-3.5 uhuu:w-3.5"
								})
							})
						]
					}),
					p
				]
			});
		}
		case "color-series": {
			let r = EE(e, t);
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v("span", {
						id: s,
						className: q(RN, "uhuu:block"),
						children: l
					}),
					/* @__PURE__ */ v("div", {
						role: "group",
						"aria-labelledby": s,
						"aria-describedby": f,
						className: "uhuu:flex uhuu:flex-wrap uhuu:gap-1.5",
						children: m.map((e, t) => {
							let a = e === r, o = i(e.label) ?? String(e.value);
							return /* @__PURE__ */ v("button", {
								type: "button",
								"aria-label": o,
								"aria-pressed": a,
								title: `${o}${e.hex ? ` (${e.hex})` : ""}`,
								onClick: () => n(e.value),
								className: q("uhuu:flex uhuu:h-7 uhuu:w-7 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border-2 uhuu:transition-all uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-1", a ? "uhuu:scale-110 uhuu:border-gray-900" : "uhuu:border-gray-200 uhuu:hover:scale-105 uhuu:hover:border-gray-400"),
								style: { backgroundColor: e.hex || String(e.value) },
								children: a && /* @__PURE__ */ v(jo, {
									"aria-hidden": "true",
									className: "uhuu:h-4 uhuu:w-4 uhuu:text-white uhuu:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
									strokeWidth: 3
								})
							}, `${t}:${String(e.value)}`);
						})
					}),
					p
				]
			});
		}
		default: {
			let a = EE(e, t), s = t == null || t === "";
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v(vM, {
						htmlFor: o,
						className: q(RN, "uhuu:block"),
						children: l
					}),
					/* @__PURE__ */ y(yM, {
						id: o,
						"aria-describedby": f,
						value: a ? String(a.value) : LN,
						onChange: (e) => {
							let t = m.find((t) => String(t.value) === e.target.value);
							t && n(t.value);
						},
						children: [!a && /* @__PURE__ */ v("option", {
							value: LN,
							disabled: !0,
							children: s ? r("options.notSet") : String(t)
						}), m.map((e, t) => /* @__PURE__ */ v("option", {
							value: String(e.value),
							children: i(e.label) ?? String(e.value)
						}, `${t}:${String(e.value)}`))]
					}),
					p
				]
			});
		}
	}
}
function UN({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: q("uhuu:flex uhuu:flex-col uhuu:gap-3", t),
		children: e
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function WN(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function GN({ pageOptions: e, targetItem: t, onChange: n }) {
	let r = WN(e, t);
	return /* @__PURE__ */ v(UN, { children: r.map((e) => /* @__PURE__ */ v(HN, {
		definition: e,
		value: e.getValue(t),
		onChange: (r) => n(e, t, String(r))
	}, e.id)) });
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-dropdown.tsx
function KN({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = ec(), o = r ?? a("page.optionsMenu");
	return !t || WN(e, t).length === 0 ? null : /* @__PURE__ */ y(v_, {
		modal: !1,
		children: [/* @__PURE__ */ v(y_, {
			asChild: !0,
			className: i || "uhuu-page-options-trigger",
			children: /* @__PURE__ */ y(gs, {
				variant: "ghost",
				size: "sm",
				className: "uhuu:h-7 uhuu:w-7 uhuu:text-gray-400 uhuu:hover:text-gray-600 uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200 uhuu:rounded-md",
				title: o,
				children: [/* @__PURE__ */ v(Io, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ y(C_, {
			className: "uhuu:w-64 uhuu:max-w-[calc(100vw-2rem)] uhuu:p-3",
			align: "center",
			"aria-label": o,
			children: [/* @__PURE__ */ v("p", {
				className: "uhuu:mb-3 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900",
				children: o
			}), /* @__PURE__ */ v(GN, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})]
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function qN({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: p }) {
	let { t: g } = ec(), [_, b] = h(!1), [x, S] = h(!1), [C, w] = h(e), T = m(null);
	l(() => {
		w(e);
	}, [e]), l(() => {
		x && setTimeout(() => {
			T.current?.focus(), T.current?.select();
		}, 10);
	}, [x]);
	let E = () => {
		let t = C.trim();
		t && t !== e && s?.(t), S(!1);
	}, D = n || r || i || a || o;
	return x ? /* @__PURE__ */ v("input", {
		ref: T,
		value: C,
		onChange: (e) => w(e.target.value),
		onKeyDown: (t) => {
			t.key === "Enter" && E(), t.key === "Escape" && (w(e), S(!1)), t.stopPropagation();
		},
		onBlur: E,
		className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-800 uhuu:bg-(--uhuu-shell-surface) uhuu:border uhuu:border-blue-400 uhuu:rounded-md uhuu:px-2 uhuu:py-1 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-blue-400/30 uhuu:max-w-[140px] uhuu:h-7",
		"data-uhuu-editor": !0
	}) : t || D ? /* @__PURE__ */ y(v_, {
		open: _,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ v(y_, {
			asChild: !0,
			children: /* @__PURE__ */ y("button", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:text-gray-900 uhuu:rounded-md uhuu:px-2 uhuu:h-7 uhuu:hover:bg-gray-100 uhuu:transition-colors uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ v("span", {
					className: "uhuu:truncate uhuu:max-w-[120px]",
					children: e
				}), /* @__PURE__ */ v(Mo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:text-gray-500 uhuu:shrink-0" })]
			})
		}), /* @__PURE__ */ y(C_, {
			className: "uhuu:min-w-44 uhuu:p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ y(w_, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ v(Uo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.rename")]
				}),
				t && D && /* @__PURE__ */ v(O_, {}),
				n && /* @__PURE__ */ y(w_, {
					onClick: c,
					children: [/* @__PURE__ */ v(Oo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveUp")]
				}),
				r && /* @__PURE__ */ y(w_, {
					onClick: u,
					children: [/* @__PURE__ */ v(Eo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ v(O_, {}),
				i && /* @__PURE__ */ y(w_, {
					onClick: d,
					children: [/* @__PURE__ */ v(Wo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.addPage")]
				}),
				a && /* @__PURE__ */ y(w_, {
					onClick: f,
					children: [/* @__PURE__ */ v(Fo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.duplicate")]
				}),
				o && /* @__PURE__ */ v(O_, {}),
				o && /* @__PURE__ */ y(w_, {
					onClick: p,
					className: "uhuu:text-red-600 uhuu:focus:text-red-700 uhuu:focus:bg-red-50",
					children: [/* @__PURE__ */ v(Jo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.delete")]
				})
			]
		})]
	}) : /* @__PURE__ */ v("span", {
		className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-600 uhuu:truncate uhuu:max-w-[120px]",
		children: e
	});
}
//#endregion
//#region src/uhuu/pagination-static/cover-spread.tsx
var JN = (e) => `${Number(e.toFixed(4))}mm`;
function YN(e, t) {
	let n = m(!1);
	l(() => {
		t || n.current || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var XN = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, h) {
	let g = c(te), b = o === void 0 ? g?.page?.binding ?? null : A(o), x = s ?? g?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	YN(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ v(Ie, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ v(Ie, {
		className: `uhuu-page-sheet--panel ${f}`.trim(),
		pageNo: C,
		overlay: w("right"),
		showBleed: x,
		"data-page-key": m,
		children: n
	});
	if (!b) return /* @__PURE__ */ y(_, { children: [T, E] });
	let D = e === "inner", O = D && b.glue > 0;
	return /* @__PURE__ */ y("div", {
		ref: h,
		className: `uhuu-page-sheet uhuu-cover-spread ${l}`.trim(),
		style: u,
		"data-sheet": e,
		"data-spine": b.spine,
		"data-glue": b.glue,
		children: [
			/* @__PURE__ */ v("div", {
				className: "uhuu-spread-panel",
				"data-side": "left",
				children: T
			}),
			/* @__PURE__ */ y("div", {
				className: "uhuu-spread-spine",
				"data-blank": D ? "true" : "false",
				children: [!D && r, x && /* @__PURE__ */ v("div", {
					className: "uhuu-spread-guide",
					"data-label": `spine ${JN(b.spine)}${D ? " · blank" : ""}`
				})]
			}),
			/* @__PURE__ */ v("div", {
				className: "uhuu-spread-panel",
				"data-side": "right",
				children: E
			}),
			O && ["left", "right"].map((e) => /* @__PURE__ */ v("div", {
				className: "uhuu-glue-zone",
				"data-side": e,
				children: x && /* @__PURE__ */ v("div", {
					className: "uhuu-spread-guide",
					"data-label": `glue ${JN(b.glue)}`
				})
			}, e))
		]
	});
});
//#endregion
//#region src/uhuu/editor-shell/document/cover-spread-layout.js
function ZN(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function QN(e, t) {
	return !!A(e?.binding) && t?.mode === "cover";
}
function $N({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: ZN(e),
		warnings: []
	};
	if (!QN(e, t)) return r;
	let i = A(e.binding), a = {
		...ee.resolveDimensions(e),
		bleed: ee.clampBleed(e.bleed),
		binding: i
	}, o = P({
		...a,
		coverPages: n
	}), s = I({
		...a,
		coverPageCount: t.coverPageCount ?? 2,
		coverPages: n,
		flowCoverPages: n.filter((e) => e && e.hasFlow).length
	});
	return o ? {
		active: !0,
		plan: o,
		setup: {
			...e,
			binding: i,
			preview: "single_page"
		},
		warnings: s
	} : {
		...r,
		warnings: s
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/use-page-groups.ts
function eP(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, payload: a, stateKey: o = KT, resolveNewItem: u, notifyError: d, pageFilter: p } = e, [g, _] = h(t), [v, y] = h(!1), { t: b } = ec(), x = m(t);
	l(() => {
		try {
			JSON.stringify(x.current) !== JSON.stringify(t) && (x.current = t, _(t));
		} catch {
			x.current !== t && (x.current = t, _(t));
		}
	}, [t]);
	let S = c(jE), C = s((e) => {
		_(e);
		let t = eE(e, o);
		S?.mergePageEditorState && S.mergePageEditorState(e, o), i?.(t), r?.(e, t);
	}, [
		r,
		i,
		o,
		S
	]), w = f(() => {
		let e = /* @__PURE__ */ new Map();
		return g.forEach((t) => {
			let n = t.templateId ?? t.id;
			e.set(n, (e.get(n) ?? 0) + 1), qT(t) && t.pages?.forEach((t) => {
				let n = t.templateId ?? t.id;
				e.set(n, (e.get(n) ?? 0) + 1);
			});
		}), e;
	}, [g]), T = f(() => n.filter((e) => {
		if (e.kind === "page") {
			let t = e, n = t.templateId ?? t.id, r = w.get(n) ?? 0, i = t.repeatable ?? !1, a = t.maxInstances ?? null;
			return !(!i && r > 0 || a !== null && r >= a);
		}
		let t = e, n = t.templateId ?? t.id, r = w.get(n) ?? 0, i = t.repeatable ?? !1, a = t.maxInstances ?? null;
		return !(!i && r > 0 || i && a !== null && r >= a);
	}), [n, w]), E = f(() => XT(g), [g]), D = s(async (e, t) => {
		let n = (e) => e ? typeof e == "string" ? e : e.mode ?? "optional" : "none", r = ((e) => {
			if (e.kind === "page") {
				let t = e;
				return iE(t.templateId ?? t.id, t.componentKey ?? t.id, {
					label: t.label,
					className: t.className,
					repeatable: t.repeatable,
					maxInstances: t.maxInstances,
					integration: t.integration,
					strictPosition: t.strictPosition
				});
			}
			let t = e, n = t.templateId ?? t.id, r = {
				payload: a,
				item: void 0,
				parent: void 0
			};
			return aE(n, zE(t.pageComponentKeys, r, t.id), {
				label: t.label,
				repeatable: t.repeatable ?? !1,
				maxInstances: t.maxInstances ?? null,
				integration: t.integration,
				strictPosition: t.strictPosition
			});
		})(e), i, o = r;
		if (u) o = await u(r);
		else {
			let e = n(r.integration), t = !1;
			if (e !== "none" && typeof window < "u") {
				let n = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
				n && (i = await n({
					item: r,
					mode: e
				}), i == null && e === "required" && (t = !0));
			}
			if (t) return { success: !1 };
		}
		if (o === null) return { success: !1 };
		let s = o ?? r;
		if (i !== void 0 && S?.setIntegrationPayload) {
			let e = s.id;
			S.setIntegrationPayload(e, i);
		}
		return C(UE(g, s, t)), {
			success: !0,
			insertedId: s.id
		};
	}, [
		g,
		C,
		u,
		S,
		a
	]), O = s((e) => {
		let t = (e) => {
			d ? d(e) : alert(e);
		}, n = g.find((t) => t.id === e);
		if (n) {
			if (XT(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (S?.removeIntegrationPayload) {
				let e = n.id;
				S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
			}
			C(g.filter((t) => t.id !== e));
		} else for (let n of g) if (qT(n) && n.pages.some((t) => t.id === e)) {
			if (XT(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (S?.removeIntegrationPayload) {
					let e = n.id;
					S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
				}
				C(g.filter((e) => e.id !== n.id));
			} else C(g.map((t) => t.id === n.id && qT(t) ? {
				...t,
				pages: t.pages.filter((t) => t.id !== e)
			} : t));
			return;
		}
	}, [
		g,
		d,
		C,
		S,
		b
	]), k = s((e, t) => {
		C(g.map((n) => n.id === e ? (qT(n), {
			...n,
			...t
		}) : n));
	}, [g, C]), A = s((e) => {
		C(e);
	}, [C]), j = f(() => {
		let e = YT(g);
		return p ? lE(e, p) : e;
	}, [g, p]), M = s((e) => {
		let t = [];
		return j.forEach((n) => {
			qT(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [j]), N = f(() => ZT(j), [j]), P = s((e) => {
		let t = QT(e, g);
		C(HE(t));
	}, [g, C]);
	return {
		items: g,
		itemsWithPageNum: j,
		totalPageCount: E,
		availableItemsToAdd: T,
		addItem: D,
		removeItem: O,
		updateItemFields: k,
		reorderItems: A,
		addDialogOpen: v,
		setAddDialogOpen: y,
		openAddDialog: s(() => {
			y(!0);
		}, []),
		renderItems: M,
		itemsForReorder: N,
		handleReorder: P
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-item-duplicate.ts
function tP(e) {
	let t = e.templateId ?? e.id;
	if (!qT(e)) {
		let n = iE(t, e.componentKey ?? t, { repeatable: !0 });
		return {
			...e,
			id: n.id,
			templateId: t,
			componentKey: n.componentKey
		};
	}
	let n = aE(t, e.pages.map((e) => ({
		key: e.componentKey ?? e.templateId ?? e.id,
		dataKey: e.dataKey,
		hasFlow: e.hasFlow
	})), { repeatable: !0 });
	return {
		...e,
		id: n.id,
		templateId: t,
		pages: e.pages.map((e, t) => ({
			...e,
			id: n.pages[t].id
		}))
	};
}
function nP(e) {
	return Array.isArray(e) ? e.map(nP) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, nP(t)])) : e;
}
function rP(e, t, n, r = []) {
	let i = [[t, n]];
	qT(t) && qT(n) && t.pages.forEach((e, t) => i.push([e, n.pages[t]]));
	let a = { ...e ?? {} }, o = r.filter((e) => qT(e) && e.id !== t.id).map((e) => `${e.id}__`);
	for (let r of [
		"pages",
		"groups",
		"integrations"
	]) {
		let s = { ...e?.[r] ?? {} }, c = !1;
		for (let [e, t] of i) s[e.id] !== void 0 && (s[t.id] = nP(s[e.id]), c = !0);
		if (qT(t)) {
			let i = `${t.id}__`;
			for (let [t, a] of Object.entries(e?.[r] ?? {})) t.startsWith(i) && !o.some((e) => t.startsWith(e)) && (s[`${n.id}__${t.slice(i.length)}`] = nP(a), c = !0);
		}
		c && (a[r] = s);
	}
	for (let [t, n] of i) {
		let r = AE(e, t);
		r !== void 0 && a.pages?.[n.id] === void 0 && (a.pages = {
			...a.pages ?? {},
			[n.id]: nP(r)
		});
	}
	return a;
}
//#endregion
//#region src/uhuu/editor-shell/document/use-page-item-actions.ts
function iP({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
	let a = c(jE), o = f(() => e.filter((e) => !e.strictPosition), [e]);
	return s((s, c) => {
		if (!s) return {};
		let l = s.id, u = o.findIndex((e) => e.id === l), d = u !== -1, f = d && u > 0 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 1 || ([n[r - 1], n[r]] = [n[r], n[r - 1]], t(n));
		} : void 0, p = d && u < o.length - 1 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 0 || r >= n.length - 1 || ([n[r], n[r + 1]] = [n[r + 1], n[r]], t(n));
		} : void 0, m = d && s.repeatable ? () => {
			let n = e.find((e) => e.id === l) ?? s, r = tP(n);
			a?.setPayload((t) => rP(t, n, r, e));
			let i = [...e], o = i.findIndex((e) => e.id === l);
			i.splice(o < 0 ? i.length : o + 1, 0, r), t(i);
		} : void 0;
		return {
			onAddPage: c && n.length > 0 ? () => {
				r({
					mode: "before",
					anchorId: c
				}), i();
			} : void 0,
			onMoveUp: f,
			onMoveDown: p,
			onDuplicate: m
		};
	}, [
		e,
		o,
		t,
		n,
		r,
		i,
		a
	]);
}
//#endregion
//#region src/uhuu/editor-shell/document/flow-layout-core.js
function aP(e = [], t = {}) {
	let n = [], r = 1;
	for (let i of e) {
		let e = i.hasFlow ? t[i.flowKey] : void 0, a = Object.values(e?.flows ?? {}), o = Math.max(1, ...a.map((e) => e.length));
		for (let t = 0; t < o; t += 1) n.push({
			...i,
			pageNum: r++,
			virtualPageId: t === 0 ? i.id : `${i.id}__flow_${t + 1}`,
			virtualPageIndex: t,
			virtualPageCount: o,
			flowChunksByFlowId: e?.flows
		});
	}
	return n;
}
//#endregion
//#region src/uhuu/editor-shell/document/use-flow-layouts.ts
function oP({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
	let [r, i] = h({
		layoutKey: n,
		layouts: {}
	}), a = f(() => r.layoutKey === n ? r.layouts : {}, [r, n]), o = f(() => e.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|"), [e]), c = f(() => new Set(o ? o.split("|") : []), [o]), l = f(() => {
		let t = {};
		for (let n of e) {
			if (!n.hasFlow) continue;
			let e = a[n.flowKey];
			e && (t[n.flowKey] = e);
		}
		return t;
	}, [a, e]), u = s((e, t, r) => {
		c.has(e) && i((i) => {
			let a = i.layoutKey === n ? i.layouts : {}, o = {}, s = !1;
			for (let [e, t] of Object.entries(a)) c.has(e) ? o[e] = t : s = !0;
			let l = o[e] ?? {
				flows: {},
				signatures: {},
				owners: {}
			}, u = l.signatures?.[t.flowId];
			return i.layoutKey === n && u === t.signature && l.owners[t.flowId] === r && !s ? i : {
				layoutKey: n,
				layouts: {
					...o,
					[e]: {
						flows: {
							...l.flows,
							[t.flowId]: t.chunks
						},
						signatures: {
							...l.signatures,
							[t.flowId]: t.signature
						},
						owners: {
							...l.owners,
							[t.flowId]: r
						}
					}
				}
			};
		});
	}, [c, n]), d = s((e, t) => {
		i((r) => {
			let i = r.layouts[e];
			if (r.layoutKey !== n || !i) return r;
			let a = Object.keys(i.flows).filter((e) => !t.has(e));
			if (!a.length) return r;
			let o = { ...i.flows }, s = { ...i.signatures }, c = { ...i.owners };
			for (let e of a) delete o[e], delete s[e], delete c[e];
			return {
				...r,
				layouts: {
					...r.layouts,
					[e]: {
						flows: o,
						signatures: s,
						owners: c
					}
				}
			};
		});
	}, [n]), p = f(() => aP(e, l), [e, l]), m = p.length;
	return {
		committedFlowLayouts: l,
		allVirtualPages: p,
		renderedVirtualPages: f(() => p.filter((e) => uE(e.pageNum, m, t ?? void 0)), [
			p,
			m,
			t
		]),
		virtualTotalPageCount: m,
		registerMeasurement: u,
		pruneMeasurements: d
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-presets.ts
var sP = (e, t, n = !1, r, i) => {
	let a = typeof e == "string" ? e : e.id, o = r?.[a], s = typeof e == "string" ? o?.componentKey ?? a : e.componentKey ?? o?.componentKey ?? e.id, c = t ?? a, l = (typeof e == "string" ? void 0 : e.repeatable) ?? o?.repeatable ?? !1, u = (typeof e == "string" ? void 0 : e.maxInstances) ?? o?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? o?.label, f = (typeof e == "string" ? void 0 : e.className) ?? o?.className, p = (typeof e == "string" ? void 0 : e.component) ?? o?.component, m = (typeof e == "string" ? void 0 : e.integration) ?? o?.integration, h = (typeof e == "string" ? void 0 : e.strictPosition) ?? o?.strictPosition, g = (typeof e == "string" ? void 0 : e.hasFlow) ?? o?.hasFlow;
	return n ? {
		kind: "page",
		id: a,
		componentKey: s,
		templateId: c,
		label: d,
		className: f,
		repeatable: l,
		maxInstances: u,
		integration: m,
		component: p,
		strictPosition: h,
		hasFlow: g,
		...typeof e == "string" ? {} : e,
		...i ? { id: i } : {}
	} : iE(c, s, {
		label: d,
		className: f,
		repeatable: l,
		maxInstances: u,
		integration: m,
		component: p,
		strictPosition: h,
		hasFlow: g,
		...typeof e == "string" ? {} : e
	});
}, cP = (e, t = !1, n, r, i) => {
	let a = {
		payload: n,
		item: void 0,
		parent: void 0
	}, o = zE(e.pageComponentKeys, a, e.id).map((e) => {
		let t = r?.[e], n = t?.dataKey, i = t?.hasFlow;
		return n || i ? {
			key: e,
			...n ? { dataKey: n } : {},
			...i ? { hasFlow: i } : {}
		} : e;
	});
	if (t) {
		let t = i ?? e.id;
		return {
			kind: "group",
			id: t,
			templateId: e.id,
			label: e.label,
			repeatable: e.repeatable ?? !1,
			maxInstances: e.maxInstances ?? null,
			integration: e.integration,
			strictPosition: e.strictPosition,
			pages: o.map((e, n) => {
				let i = typeof e == "string" ? e : e.key, a = typeof e == "string" ? void 0 : e.dataKey;
				return {
					id: `${t}__${a ?? i}__${n}`,
					componentKey: i,
					templateId: i,
					...a ? { dataKey: a } : {},
					...r?.[i]?.hasFlow ? { hasFlow: !0 } : {}
				};
			})
		};
	}
	return aE(e.id, o, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, lP = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], uP = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = lP(n), c = /* @__PURE__ */ new Map();
	s.forEach((e) => c.set(e.id, e));
	let l = r.length ? r : Object.keys(i), u = { ...a };
	Object.entries(i).forEach(([e, t]) => {
		t.component && (u[e] = t.component);
	});
	let d = /* @__PURE__ */ new Set(), f = (e) => {
		let t = e;
		for (let n = 2; d.has(t); n += 1) t = `${e}__${n}`;
		return d.add(t), t;
	}, p = t.map((e) => {
		if (typeof e == "string") {
			let t = c.get(e);
			return t ? cP(t, !0, o, i, f(t.id)) : sP(e, void 0, !0, i, f(e));
		}
		if (e.pageComponentKeys !== void 0) {
			let t = e;
			return cP(t, !0, o, i, f(t.id));
		}
		let t = e;
		return sP(t, void 0, !0, i, f(t.id));
	}), m = s.map((e) => ({
		kind: "group",
		id: e.id,
		templateId: e.id,
		label: e.label,
		thumbnail: e.thumbnail,
		pageComponentKeys: e.pageComponentKeys,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	}));
	return {
		initialItems: p,
		availableItems: [...l.filter((e) => i?.[e]?.allowAsSinglePage !== !1).map((e) => {
			let t = i?.[e];
			return {
				kind: "page",
				id: e,
				templateId: e,
				componentKey: t?.componentKey ?? e,
				label: t?.label,
				className: t?.className,
				repeatable: t?.repeatable ?? !1,
				maxInstances: t?.maxInstances ?? null,
				thumbnail: t?.thumbnail,
				integration: t?.integration,
				strictPosition: t?.strictPosition,
				hasFlow: t?.hasFlow
			};
		}), ...m],
		pageComponents: u
	};
}, dP = Object.defineProperty, fP = (e, t) => dP(e, "name", {
	value: t,
	configurable: !0
}), [pP, mP] = /* @__PURE__ */ tl("AlertDialog", [JD]), hP = JD(), gP = /* @__PURE__ */ fP((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = hP(t);
	return /* @__PURE__ */ v(ZD, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = hP(n);
	return /* @__PURE__ */ v($D, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var _P = /* @__PURE__ */ fP((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = hP(t);
	return /* @__PURE__ */ v(rO, {
		...r,
		...n
	});
}, "AlertDialogPortal"), vP = e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = hP(n);
	return /* @__PURE__ */ v(aO, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [yP, bP] = pP("AlertDialogContent"), xP = e.forwardRef(/* @__PURE__ */ fP(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = hP(r), s = Zc(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ v(yP, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ v(lO, {
			role: "alertdialog",
			...o,
			...a,
			ref: s,
			onOpenAutoFocus: X(a.onOpenAutoFocus, (e) => {
				e.preventDefault(), c.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: i
		})
	});
}, "AlertDialogContent")), SP = e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = hP(n);
	return /* @__PURE__ */ v(pO, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), CP = e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = hP(n);
	return /* @__PURE__ */ v(mO, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), wP = e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = hP(n);
	return /* @__PURE__ */ v(gO, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), TP = "AlertDialogCancel", EP = e.forwardRef(/* @__PURE__ */ fP(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = bP(TP, n), a = hP(n), o = Zc(t, i);
	return /* @__PURE__ */ v(gO, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), DP = gP, OP = _P, kP = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(vP, {
	ref: n,
	className: q("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/40 uhuu:backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
kP.displayName = vP.displayName;
var AP = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = ts();
	return /* @__PURE__ */ y(OP, {
		container: r || void 0,
		children: [/* @__PURE__ */ v(kP, {}), /* @__PURE__ */ v(xP, {
			ref: n,
			"data-uhuu-editor": !0,
			className: q("uhuu:fixed uhuu:left-[50%] uhuu:top-[50%] uhuu:z-50 uhuu:w-full uhuu:max-w-md uhuu:translate-x-[-50%] uhuu:translate-y-[-50%] uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
AP.displayName = xP.displayName;
var jP = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: q("uhuu:flex uhuu:flex-col uhuu:gap-2 uhuu:text-left", e),
	...t
});
jP.displayName = "AlertDialogHeader";
var MP = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: q("uhuu:mt-6 uhuu:flex uhuu:flex-col-reverse uhuu:gap-2 uhuu:sm:flex-row uhuu:sm:justify-end", e),
	...t
});
MP.displayName = "AlertDialogFooter";
var NP = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(SP, {
	ref: n,
	className: q("uhuu:text-base uhuu:font-semibold uhuu:text-gray-900", e),
	...t
}));
NP.displayName = SP.displayName;
var PP = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(CP, {
	ref: n,
	className: q("uhuu:text-sm uhuu:text-gray-600", e),
	...t
}));
PP.displayName = CP.displayName;
var FP = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(wP, {
	ref: n,
	className: q("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:bg-gray-900 uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-(--uhuu-shell-on-inverse) uhuu:transition-colors uhuu:hover:bg-gray-800", e),
	...t
}));
FP.displayName = wP.displayName;
var IP = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(EP, {
	ref: n,
	className: q("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:bg-gray-50", e),
	...t
}));
IP.displayName = EP.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/brand-kit-input.tsx
function LP({ kind: e, initialValue: t = "", onSubmit: n, onClose: r, returnFocus: i }) {
	let { t: a } = ec(), { portalContainer: o } = ts(), s = gD(), c = u(), [d, f] = h(t), [p, g] = h(!1), [_, b] = h(""), x = m(!0);
	return l(() => (x.current = !0, () => {
		x.current = !1;
	}), []), /* @__PURE__ */ v(ZD, {
		open: !0,
		modal: !1,
		onOpenChange: (e) => {
			e || r();
		},
		children: /* @__PURE__ */ v(rO, {
			container: o ?? void 0,
			children: /* @__PURE__ */ y(lO, {
				"data-uhuu-editor": !0,
				className: q("uhuu:fixed uhuu:z-50 uhuu:w-96 uhuu:max-w-[calc(100vw-2rem)] uhuu:rounded-lg uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-4 uhuu:text-gray-900 uhuu:shadow-lg", s.side === "top" ? "uhuu:bottom-20" : "uhuu:top-20", s.align === "start" ? "uhuu:left-4" : "uhuu:right-4"),
				onCloseAutoFocus: (e) => {
					e.preventDefault(), i();
				},
				children: [
					/* @__PURE__ */ v(pO, {
						className: "uhuu:text-sm uhuu:font-medium",
						children: a(`brandInput.${e}Title`)
					}),
					/* @__PURE__ */ v(mO, {
						className: "uhuu:mt-1 uhuu:text-xs uhuu:text-gray-500",
						children: a(`brandInput.${e}Description`)
					}),
					/* @__PURE__ */ y("form", {
						className: "uhuu:mt-3 uhuu:grid uhuu:gap-3",
						onSubmit: async (e) => {
							if (e.preventDefault(), p || !d.trim()) return;
							g(!0), b("");
							let t;
							try {
								await Promise.race([Promise.resolve().then(() => n(d.trim())), new Promise((e, n) => {
									t = setTimeout(() => n(Error(a("brandInput.timeout"))), 1e4);
								})]), x.current && r();
							} catch (e) {
								x.current && b(e instanceof Error ? e.message : String(e));
							} finally {
								clearTimeout(t), x.current && g(!1);
							}
						},
						children: [
							/* @__PURE__ */ v("label", {
								htmlFor: c,
								className: "uhuu:text-xs uhuu:font-medium",
								children: a("brandInput.label")
							}),
							/* @__PURE__ */ v("textarea", {
								id: c,
								rows: 3,
								value: d,
								onChange: (e) => {
									f(e.target.value), b("");
								},
								placeholder: e === "add" ? "https://…/versions/v2/brandkit.json" : "v9 / https://…/versions/v9/brandkit.json",
								"aria-invalid": !!_,
								"aria-describedby": _ ? `${c}-error` : void 0,
								className: "uhuu:w-full uhuu:resize-y uhuu:rounded-md uhuu:border uhuu:border-gray-300 uhuu:bg-(--uhuu-shell-surface) uhuu:p-2 uhuu:text-sm uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400"
							}),
							_ && /* @__PURE__ */ v("p", {
								id: `${c}-error`,
								role: "alert",
								className: "uhuu:text-xs uhuu:text-gray-700",
								children: _
							}),
							/* @__PURE__ */ y("div", {
								className: "uhuu:flex uhuu:justify-end uhuu:gap-2",
								children: [/* @__PURE__ */ v(gs, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: r,
									children: a("dialog.close")
								}), /* @__PURE__ */ v(gs, {
									type: "submit",
									size: "sm",
									disabled: p || !d.trim(),
									children: a(p ? "brandInput.loading" : "brandInput.load")
								})]
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var RP = "__edit__", zP = "__print__";
function BP({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ y(w_, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "uhuu:flex uhuu:items-center uhuu:gap-2",
		children: [e ? /* @__PURE__ */ v(jo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }) : /* @__PURE__ */ v("span", { className: "uhuu:w-3 uhuu:h-3" }), /* @__PURE__ */ v("span", {
			className: "uhuu:flex-1 uhuu:truncate",
			children: t
		})]
	});
}
function VP({ label: e, value: t }) {
	return /* @__PURE__ */ y(x_, {
		className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-4 uhuu:text-xs",
		children: [/* @__PURE__ */ v("span", {
			className: "uhuu:text-gray-700",
			children: e
		}), /* @__PURE__ */ y("span", {
			className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-gray-400",
			children: [t ? /* @__PURE__ */ v("span", {
				className: "uhuu:max-w-[110px] uhuu:truncate",
				children: t
			}) : null, /* @__PURE__ */ v(No, { className: "uhuu:w-3.5 uhuu:h-3.5" })]
		})]
	});
}
function HP({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: RP,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: zP,
		label: "Print"
	}]], g = r ? RP : t || f[0] || zP, b = p.find((e) => e.value === g)?.label ?? "Edit", x = (t) => {
		t === RP ? i(!0) : (i(!1), t !== zP && e && e[t] && n?.(t, e[t]));
	}, S = gD(), C = !!c && c.length > 0, w = c?.find((e) => e.id === l)?.name, T = ET(), E = LT() !== null && wT(), [D, O] = h(null), k = m(null);
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(v_, {
		modal: !1,
		children: [/* @__PURE__ */ v(y_, {
			asChild: !0,
			children: /* @__PURE__ */ y(gs, {
				ref: k,
				variant: "ghost",
				size: "sm",
				className: `uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 ${r ? "" : "uhuu:bg-gray-100/80"}`,
				children: [/* @__PURE__ */ v(Ao, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
					className: "uhuu:text-[10px] uhuu:uppercase uhuu:tracking-wide",
					children: "Dev"
				})]
			})
		}), /* @__PURE__ */ y(C_, {
			onCloseAutoFocus: (e) => {
				D && e.preventDefault();
			},
			side: S.side,
			align: S.align,
			className: "uhuu:min-w-[200px]",
			children: [
				/* @__PURE__ */ y(b_, { children: [/* @__PURE__ */ v(VP, {
					label: "Print Preview",
					value: b
				}), /* @__PURE__ */ v(S_, {
					className: "uhuu:min-w-[180px]",
					children: p.map((e) => /* @__PURE__ */ v(BP, {
						checked: g === e.value,
						label: e.label,
						onSelect: () => x(e.value)
					}, e.value))
				})] }),
				(C || d || E) && /* @__PURE__ */ y(b_, { children: [/* @__PURE__ */ v(VP, {
					label: "Brand Kit",
					value: T !== null && E ? `Preview ${T}` : w
				}), /* @__PURE__ */ y(S_, {
					className: "uhuu:min-w-[200px]",
					children: [
						(c ?? []).map((e) => /* @__PURE__ */ v(BP, {
							checked: l === e.id,
							label: e.name,
							keepOpen: !0,
							onSelect: () => u?.(e.id)
						}, e.id)),
						d && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(O_, {}), /* @__PURE__ */ y(w_, {
							onSelect: () => O("add"),
							className: "uhuu:flex uhuu:items-center uhuu:gap-2",
							children: [/* @__PURE__ */ v(Wo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
								className: "uhuu:flex-1",
								children: "Add published kit…"
							})]
						})] }),
						E && /* @__PURE__ */ y(_, { children: [
							(C || d) && /* @__PURE__ */ v(O_, {}),
							/* @__PURE__ */ y(w_, {
								onSelect: () => O("preview"),
								className: "uhuu:flex uhuu:items-center uhuu:gap-2",
								children: [/* @__PURE__ */ v(Lo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
									className: "uhuu:flex-1",
									children: "Preview a version…"
								})]
							}),
							T !== null && /* @__PURE__ */ y(w_, {
								onSelect: () => DT(null),
								className: "uhuu:flex uhuu:items-center uhuu:gap-2",
								children: [/* @__PURE__ */ v(Zo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
									className: "uhuu:flex-1",
									children: "Stop preview"
								})]
							})
						] })
					]
				})] }),
				a && /* @__PURE__ */ y(_, { children: [
					/* @__PURE__ */ v(O_, {}),
					/* @__PURE__ */ v(D_, {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: "Reference Overlay"
					}),
					/* @__PURE__ */ y("div", {
						className: "uhuu:px-2 uhuu:py-2",
						children: [
							/* @__PURE__ */ y("div", {
								className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:text-xs uhuu:text-gray-600",
								children: [/* @__PURE__ */ v("span", { children: "Opacity" }), /* @__PURE__ */ y("span", { children: [o, "%"] })]
							}),
							/* @__PURE__ */ v("div", {
								className: "uhuu:pt-2",
								children: /* @__PURE__ */ v(vN, {
									value: [o],
									min: 0,
									max: 100,
									step: 5,
									onValueChange: (e) => {
										let t = e[0] ?? o;
										s?.(t);
									}
								})
							}),
							/* @__PURE__ */ y("div", {
								className: "uhuu:pt-2 uhuu:flex uhuu:items-center uhuu:justify-between uhuu:text-xs uhuu:text-gray-500",
								children: [/* @__PURE__ */ v("span", { children: "Hidden" }), /* @__PURE__ */ v("span", { children: "Solid" })]
							})
						]
					})
				] })
			]
		})]
	}), D && /* @__PURE__ */ v(LP, {
		kind: D,
		initialValue: D === "preview" ? T ?? "" : "",
		onSubmit: D === "add" ? (e) => d?.(e) : DT,
		onClose: () => O(null),
		returnFocus: () => k.current?.focus()
	})] });
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor.tsx
function UP(e) {
	let t = e?.uhuu_print_product?.component?.code ?? e?.component;
	return typeof t == "string" && t ? t : void 0;
}
var WP = {
	width: 210,
	height: 297
};
function GP(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function KP({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = ec();
	return e ? /* @__PURE__ */ v("div", {
		className: "uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-black/30",
		children: /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:border-gray-200/80 uhuu:shadow-xl uhuu:p-6 uhuu:w-full uhuu:max-w-sm uhuu:mx-4 uhuu:flex uhuu:flex-col uhuu:items-center uhuu:text-center",
			children: [
				/* @__PURE__ */ v("div", {
					className: "uhuu:rounded-full uhuu:bg-emerald-100 uhuu:p-3 uhuu:mb-4",
					children: /* @__PURE__ */ v(jo, {
						className: "uhuu:h-6 uhuu:w-6 uhuu:text-emerald-600",
						strokeWidth: 2.5
					})
				}),
				/* @__PURE__ */ v("h2", {
					className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:mb-5",
					children: r("addDialog.added", { name: e })
				}),
				/* @__PURE__ */ y("div", {
					className: "uhuu:flex uhuu:gap-2 uhuu:w-full",
					children: [/* @__PURE__ */ v(gs, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "uhuu:flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ v(gs, {
						variant: "default",
						size: "sm",
						onClick: t,
						className: "uhuu:flex-1",
						children: r("addDialog.done")
					})]
				})
			]
		})
	}) : null;
}
function qP({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: d, renderOverlay: p, renderPage: g, menuItems: b, gridColsClass: S, reorderTitle: C, reorderDescription: w, stateKey: T = KT, onItemsChange: E, onStateChange: D, resolveNewItem: O, pageFilter: k, printConfigs: A, defaultZoomMode: j = "fit-page", toolbarPosition: M, brandKits: N, activeBrandKitId: P, onSelectBrandKit: F, onAddBrandKit: I, pageManagement: L = YP }) {
	let [te] = h(() => se.createScope()), R = L, z = o ?? WP, { interactive: B, setInteractive: ne, enableDevTools: re } = Lc(), V = Te(), ie = Rc(), { portalContainer: ae } = ts(), H = ec(), { t: oe, localize: le } = H, [ue, de] = h(null), [fe, pe] = h(null), [me, he] = h(void 0), [ge, _e] = h(0), [ve, ye] = h(0), xe = c(jE), Se = xe?.payload ?? a, Ce = UP(Se), we = k === void 0 && A && Ce ? A[Ce] : void 0;
	k === void 0 && A && Ce && !we && be(`print-product:${Ce}`, `[uhuu-components] PageEditor: the payload names print product "${Ce}", which printConfigs has no entry for (${Object.keys(A).join(", ") || "none"}), so it prints every page with the template pageFormat. Add a printConfigs entry under that code, or pass pageFilter.`);
	let Ee = ue ?? k ?? we?.filter, De = () => {
		ne(!0), he(void 0), de(null), pe(null);
	}, Oe = we?.pageFormat, ke = f(() => ee.mergePageFormat(z, fe ?? Oe), [
		z,
		fe,
		Oe
	]), [Ae, je] = h(!1), Me = !B && QN(ke, Ee), Ne = ke?.preview ?? "single_page", Pe = Me ? "single_page" : Ne, Ie = f(() => {
		let e = ZN(ke);
		return Ne === "two_pages" || Me ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		Ne,
		Me,
		ke
	]), Le = f(() => ZN(z), [z]), Re = f(() => $T(t), [t]), ze = f(() => l?.length ? l.map((e) => "getValue" in e ? e : xe?.setPageOptionValue ? NE(e, xe.payload, xe.setPageOptionValue) : (V && be(`pageOptions:payload:${e.id}`, `[uhuu-components] PageEditor pageOptions "${e.id}" is payload-backed, which needs a TemplateDataProvider or the payload / onPayloadChange props; the option is left out.`), null)).filter(Boolean) : [], [
		l,
		xe,
		V
	]), [Be, Ve] = h(null), [He, Ue] = h({ mode: "end" }), [We, Ge] = h(null), Ke = m(null), { items: qe, itemsWithPageNum: Je, availableItemsToAdd: Ye, addItem: Xe, removeItem: Ze, reorderItems: Qe, updateItemFields: $e, addDialogOpen: et, setAddDialogOpen: tt, openAddDialog: nt, itemsForReorder: rt, handleReorder: it } = eP({
		initialItems: Re,
		availableItems: n,
		payload: Se,
		stateKey: T,
		onItemsChange: E,
		onStateChange: D,
		resolveNewItem: O,
		notifyError: u
	}), at = f(() => tD({
		pageComponents: r,
		payload: Se,
		setup: Ie,
		i18n: H
	}), [
		r,
		Se,
		Ie,
		H
	]), ot = f(() => {
		let e = [];
		for (let t of Je) {
			let n = qT(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = qT(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: GP(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Je]), st = f(() => JSON.stringify({
		format: Ie?.format,
		orientation: Ie?.orientation,
		width: Ie?.width,
		height: Ie?.height,
		bleed: Ie?.bleed,
		showBleed: Ie?.showBleed,
		preview: Ie?.preview,
		flowPages: ot.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [Ie, ot]), ct = f(() => XT(qe), [qe]), { committedFlowLayouts: lt, allVirtualPages: ut, renderedVirtualPages: dt, virtualTotalPageCount: ft, registerMeasurement: pt, pruneMeasurements: mt } = oP({
		logicalPages: ot,
		pageFilter: Ee,
		layoutKey: st
	});
	ce(() => {
		te.commit(ot.filter((e) => e.hasFlow).map((e) => e.flowKey), lt);
	}), ce(() => () => te.suspend(), [te]), e.useEffect(() => () => te.unmount(), [te]);
	let ht = f(() => new Set(dt.map((e) => e.virtualPageId)), [dt]), gt = f(() => $N({
		pageFormat: Me ? ke : ZN(ke),
		pageFilter: Ee,
		pages: dt
	}), [
		Me,
		ke,
		Ee,
		dt
	]), _t = gt.active ? gt.plan : null, vt = f(() => _t ? {
		...Ie,
		binding: gt.setup.binding
	} : Ie, [
		_t,
		Ie,
		gt.setup
	]);
	e.useEffect(() => {
		if (gt.warnings.length) for (let e of gt.warnings) be(`cover-spread:${e}`, `[uhuu-components] PageEditor cover spread: ${e}`);
	}, [gt.warnings]);
	let yt = f(() => ut.filter((e) => e.hasFlow && e.virtualPageIndex === 0 && (g || !!_t || !ht.has(e.virtualPageId))), [
		ut,
		ht,
		g,
		_t
	]);
	e.useEffect(() => {
		if (!We) return;
		let e = setTimeout(() => {
			document.querySelector(`[data-page-item-id="${We}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		return () => clearTimeout(e);
	}, [We]);
	let bt = iP({
		items: qe,
		reorderItems: Qe,
		availableItemsToAdd: Ye,
		setPendingInsertPosition: Ue,
		openAddDialog: nt
	}), xt = (e, t) => {
		let n = bt(e, t);
		return {
			onAddPage: R.add ? n.onAddPage : void 0,
			onMoveUp: R.reorder ? n.onMoveUp : void 0,
			onMoveDown: R.reorder ? n.onMoveDown : void 0,
			onDuplicate: R.duplicate ? n.onDuplicate : void 0
		};
	}, St = s(async (e) => {
		let t = await Xe(e, He);
		t.success && (Ge(t.insertedId), Ke.current && clearTimeout(Ke.current), Ke.current = setTimeout(() => Ge(null), 1200), Ue({ mode: "end" }), e.repeatable && e.integration && Ve(e));
	}, [Xe, He]), Ct = s(() => {
		let e = Array.from(document.querySelectorAll("[data-page-item-id]"));
		if (!e.length) return { mode: "end" };
		let t = window.innerHeight / 2, n = null, r = Infinity;
		for (let i of e) {
			let e = i.getBoundingClientRect(), a = Math.abs(e.top + e.height / 2 - t);
			a < r && (r = a, n = i);
		}
		let i = n?.getAttribute("data-page-item-id");
		return i ? {
			mode: "after",
			anchorId: i
		} : { mode: "end" };
	}, []), wt = s(() => {
		Ue(Ct()), nt();
	}, [Ct, nt]), Tt = e.useCallback((e, t, n) => {
		if (!t) return;
		let r = e.applyPatch?.(n, t);
		r && $e(t.id, r), e.onChange?.(t.id, n, {
			item: t,
			updateItem: (e) => $e(t.id, e)
		});
	}, [$e]), Et = (e) => /* @__PURE__ */ y("div", {
		className: "uhuu-page-overlay",
		children: [/* @__PURE__ */ v("span", { children: "Page" }), /* @__PURE__ */ y("span", { children: [
			e.pageNo,
			" / ",
			e.total
		] })]
	}), Dt = (e, t, n) => p === !1 || p === null ? null : p ? p({
		pageNum: e,
		totalPages: ft,
		pageNo: e,
		total: ft,
		pageId: t.id,
		componentKey: t.componentKey ?? t.id,
		parent: n
	}) : Et({
		pageNo: e,
		total: ft
	}), Ot = (t, n = {}) => {
		let i = t.parentGroup;
		if (g && n.renderVisible !== !1 && n.renderMode !== "content") return g({
			page: t,
			parent: i
		});
		let a = t.componentKey ?? t.id, o = re && d ? d(t) : null, s = re && d ? e.isValidElement(o) ? e.cloneElement(o, { opacity: ve }) : o : null, c = t.templateId ?? a, l = r[a], u = xe?.getPagePayload ? xe.getPagePayload(t) : AE(Se, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), f = mE(Se, t, i), p = qE({
			payload: Se,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ v(hM, {
			pageId: t.id,
			templateId: c,
			pageNo: t.pageNum,
			measurementPageNo: t.basePageNum,
			component: l,
			payload: Se,
			pagePayload: u,
			integration: f,
			page: t,
			parentGroup: i,
			componentKey: a,
			setup: vt,
			reference: s,
			overlay: ({ pageNo: e }) => Dt(e, t, i),
			className: t.className,
			dataBinding: p,
			totalPages: ft,
			measurementTotalPages: ct,
			flowPageIndex: t.virtualPageIndex,
			flowChunksByFlowId: t.flowChunksByFlowId,
			measureFlow: n.measureFlow ?? (!!t.hasFlow && t.virtualPageIndex === 0),
			flowMeasurementKey: t.flowKey,
			flowMeasurementVersion: st,
			flowReadiness: te,
			onFlowMeasurement: t.hasFlow ? pt : void 0,
			onFlowPrune: mt,
			renderVisible: n.renderVisible ?? !0,
			renderMode: n.renderMode,
			spread: n.spread
		}, `${n.renderVisible === !1 ? "measure-only" : "page"}-${t.virtualPageId}`);
	}, kt = (e) => {
		let t = e.componentKey ?? e.templateId ?? e.id;
		return [t ? `uhuu-page--${t}` : "", e.className].filter(Boolean).join(" ");
	}, At = (e) => {
		if (!_t) return null;
		let { binding: t, page: n } = _t, [r, a] = e.panels, o = r.page, s = a.page, c = (r) => ({
			sheet: e.sheet,
			side: r,
			spine: t.spine,
			glue: t.glue,
			bleed: n.bleed
		}), l = `Cover sheet ${e.index + 1} · ${e.sheet} (pages ${o.pageNum} + ${s.pageNum})`;
		return /* @__PURE__ */ v("div", {
			"data-page-item-id": s.parentGroup?.id ?? s.id,
			children: /* @__PURE__ */ v(HD, {
				title: l,
				controls: /* @__PURE__ */ y("div", {
					"data-uhuu-editor": !0,
					className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
					children: [/* @__PURE__ */ y("span", {
						className: "uhuu-page-number",
						children: [
							o.pageNum,
							" + ",
							s.pageNum
						]
					}), /* @__PURE__ */ v("span", {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: l
					})]
				}),
				children: /* @__PURE__ */ v(Fe, {
					setup: vt,
					children: /* @__PURE__ */ v(XN, {
						sheet: e.sheet,
						pageNo: [o.pageNum, s.pageNum],
						left: Ot(o, {
							renderMode: "content",
							spread: c("left")
						}),
						right: Ot(s, {
							renderMode: "content",
							spread: c("right")
						}),
						spine: i && e.sheet === "outer" ? /* @__PURE__ */ v(i, {
							payload: Se,
							sheet: "outer",
							spine: t.spine,
							glue: t.glue,
							bleed: n.bleed,
							height: n.height,
							totalPages: ft,
							pages: {
								left: o,
								right: s
							}
						}) : void 0,
						overlay: ({ pageNo: e, side: t }) => {
							let n = t === "left" ? o : s;
							return Dt(e, n, n.parentGroup);
						},
						leftClassName: kt(o),
						rightClassName: kt(s),
						leftPageKey: o.componentKey ?? o.templateId ?? o.id,
						rightPageKey: s.componentKey ?? s.templateId ?? s.id
					})
				})
			})
		}, `cover-sheet-${e.sheet}`);
	}, jt = (e, t, n) => {
		let r = !!t && qT(t), i = r && t.pages[0]?.id === e.id, a = r ? le(t.label) || t.id : le(e.label) || oe("page.fallbackName", { number: e.pageNum });
		if (e.virtualPageIndex > 0) return /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
			children: [/* @__PURE__ */ v("span", {
				className: "uhuu-page-number",
				children: e.pageNum
			}), /* @__PURE__ */ v("span", {
				className: "uhuu:text-xs uhuu:text-gray-500",
				children: oe("page.continued", { name: a })
			})]
		});
		if (r && !i) return /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:justify-between uhuu:items-center uhuu:h-9",
			children: /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-2",
				children: [
					/* @__PURE__ */ v("span", {
						className: "uhuu-page-number",
						children: e.pageNum
					}),
					e.label && /* @__PURE__ */ v("span", {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: le(e.label)
					}),
					/* @__PURE__ */ v("span", {
						className: "uhuu:text-xs uhuu:text-gray-400",
						children: "·"
					})
				]
			})
		});
		let o = r ? t : e;
		return /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:flex uhuu:items-center uhuu:h-9",
			children: [
				/* @__PURE__ */ v("span", {
					className: "uhuu-page-number uhuu:shrink-0 uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-400 uhuu:font-medium uhuu:pr-1",
					children: e.pageNum
				}),
				/* @__PURE__ */ v(qN, {
					name: a,
					canRename: R.rename,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: R.remove && ct > 1,
					onRename: (e) => $e(o.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Ze(o.id)
				}),
				/* @__PURE__ */ v("span", {
					className: "uhuu:pl-1",
					children: ze.length > 0 && /* @__PURE__ */ v(KN, {
						pageOptions: ze,
						targetItem: o,
						onChange: Tt,
						title: oe(r ? "page.groupOptions" : "page.options")
					})
				})
			]
		});
	}, Mt = f(() => {
		if (Pe !== "two_pages") return [];
		let e = dt;
		if (!e.length) return [];
		let t = [{
			left: void 0,
			right: e[0],
			layout: "right"
		}];
		for (let n = 1; n < e.length; n += 2) {
			let r = e[n], i = e[n + 1];
			if (i) t.push({
				left: r,
				right: i,
				layout: "spread"
			});
			else {
				let e = r.pageNum % 2 == 0;
				t.push({
					left: e ? r : void 0,
					right: e ? void 0 : r,
					layout: e ? "left" : "right"
				});
			}
		}
		return t;
	}, [Pe, dt]), Nt = /* @__PURE__ */ y("div", {
		className: "uhuu:flex uhuu:items-center uhuu:gap-1",
		children: [
			/* @__PURE__ */ v(lM, {
				variant: "secondary",
				className: "uhuu:font-normal uhuu:text-xs uhuu:bg-gray-100/80 uhuu:text-gray-700 uhuu:border-0",
				children: oe("toolbar.pages", { count: ft })
			}),
			re && /* @__PURE__ */ v(HP, {
				modes: A,
				selectedMode: me,
				onModeChange: (e, t) => {
					he(e), de(t.filter ?? null), pe(t.pageFormat ?? null), _e((e) => e + 1);
				},
				interactive: B,
				onInteractiveChange: (e) => {
					e ? De() : ne(!1);
				},
				hasReferenceRenderer: !!d,
				referenceOpacity: ve,
				onReferenceOpacityChange: ye,
				brandKits: N,
				activeBrandKitId: P,
				onSelectBrandKit: F,
				onAddBrandKit: I
			}),
			B && /* @__PURE__ */ y(_, { children: [R.add && Ye.length > 0 && /* @__PURE__ */ y(gs, {
				variant: "ghost",
				size: "sm",
				onClick: wt,
				title: oe("toolbar.addHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(Wo, { className: "uhuu:w-3.5 uhuu:h-3.5" }), oe("toolbar.add")]
			}), R.reorder && /* @__PURE__ */ y(gs, {
				variant: "ghost",
				size: "sm",
				onClick: () => je(!0),
				title: oe("toolbar.reorderHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(Po, { className: "uhuu:w-3.5 uhuu:h-3.5" }), oe("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ y(_, { children: [
		yt.map((e) => Ot(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		re && !B && ae && x(/* @__PURE__ */ y(gs, {
			onClick: De,
			"data-uhuu-editor": !0,
			size: "sm",
			className: "uhuu-screen-only uhuu:fixed uhuu:top-4 uhuu:right-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:text-xs! uhuu:rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ v(Zo, { className: "uhuu:w-4 uhuu:h-4" }), "Back to Editor"]
		}), ae),
		/* @__PURE__ */ v(UD, {
			defaultZoom: 80,
			defaultZoomMode: j,
			toolbarPosition: M,
			minZoom: 25,
			maxZoom: 200,
			menuItems: b ?? Nt,
			onAddPage: R.add ? wt : void 0,
			preview: Pe,
			children: _t ? _t.sheets.map(At) : Pe === "two_pages" ? Mt.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === We, l = s === We, u = (e, t) => xt(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ y(zD, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(HD, {
							title: `Sheet ${e.left.pageNum}`,
							controls: jt(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: Ot(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(HD, {
							title: `Sheet ${e.right.pageNum}`,
							controls: jt(e.right, e.right.parentGroup, u(e.right, a)),
							origin: e.right.pageNum % 2 == 0 ? "right" : "left",
							children: Ot(e.right)
						}, e.right.virtualPageId)
					})]
				}, `pair-${t}`);
			}) : dt.map((e) => {
				let t = e.parentGroup ?? e, n = e.parentGroup?.id ?? e.id, r = xt(t, n), i = e.parentGroup?.id ?? e.id, a = We === i;
				return /* @__PURE__ */ v("div", {
					"data-page-item-id": e.virtualPageIndex === 0 ? i : void 0,
					className: a ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
					children: /* @__PURE__ */ v(HD, {
						title: `Sheet ${e.pageNum}`,
						controls: jt(e, e.parentGroup, r),
						children: Ot(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${ge}-${me ?? "default"}`),
		B && !ie && /* @__PURE__ */ y(_, { children: [R.add && /* @__PURE__ */ v(DO, {
			open: et,
			onOpenChange: tt,
			availableItems: Ye,
			renderThumbnail: at,
			onSelectItem: St,
			payload: Se,
			setup: Le,
			gridColsClass: S,
			"data-uhuu-editor": !0
		}), R.reorder && /* @__PURE__ */ v(dM, {
			open: Ae,
			onOpenChange: je,
			pages: rt,
			onReorder: (e) => {
				it(e), je(!1);
			},
			onRemove: R.remove ? (e) => Ze(e.id) : void 0,
			pageComponents: r,
			payload: Se,
			setup: Le,
			renderThumbnail: at,
			title: le(C) ?? oe("reorderDialog.title"),
			description: le(w) ?? oe("reorderDialog.description"),
			gridColsClass: S,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ v(KP, {
			label: Be ? le(Be.label) ?? Be.id : null,
			onDone: () => Ve(null),
			onAddAnother: () => {
				let e = Be;
				Ve(null), e && St(e);
			}
		})
	] });
}
function JP(e) {
	let { templateConfig: t, ...n } = e;
	return c(jE) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ v(qP, { ...n }) : /* @__PURE__ */ v(ME, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ v(qP, { ...n })
	});
}
var YP = FE();
function XP(t) {
	let n = c(jE), { t: r } = ec(), i = n?.payload ?? t.payload, a = e.useMemo(() => uP({
		...t.templateConfig,
		payload: i
	}), [t.templateConfig, i]), o = t.templateConfig?.spine?.component, [s, l] = e.useState({
		open: !1,
		message: ""
	}), u = t.notifyError, d = e.useCallback((e) => {
		u ? u(e) : l({
			open: !0,
			message: e
		});
	}, [u]), f = e.useMemo(() => tE(i, t.stateKey ?? "uhuu_page_editor"), [i, t.stateKey]), p = e.useMemo(() => {
		let e = t.templateConfig.pageManagement;
		return e != null && typeof e != "object" && console.warn(`[uhuu-components] templateConfig.pageManagement takes an object, e.g. { locked: true }; ${JSON.stringify(e)} is ignored and every page-management control stays on.`), FE(e);
	}, [t.templateConfig.pageManagement]), m = e.useMemo(() => WE({
		initialItems: a.initialItems,
		savedItems: f?.items,
		config: t.templateConfig,
		payload: i,
		management: p
	}), [
		f?.items,
		a.initialItems,
		i,
		t.templateConfig,
		p
	]), h = De(t.view);
	return je(h), /* @__PURE__ */ y(Ne.Provider, {
		value: !0,
		children: [/* @__PURE__ */ v(Oe.Provider, {
			value: h,
			children: /* @__PURE__ */ v(JP, {
				...t,
				payload: i,
				initialItems: m,
				availableItems: p.add || p.duplicate ? a.availableItems : [],
				pageManagement: p,
				pageComponents: a.pageComponents,
				spineComponent: o,
				notifyError: d
			})
		}), /* @__PURE__ */ v(DP, {
			open: s.open,
			onOpenChange: (e) => {
				e || l({
					open: !1,
					message: ""
				});
			},
			children: /* @__PURE__ */ y(AP, { children: [/* @__PURE__ */ y(jP, { children: [/* @__PURE__ */ v(NP, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ v(PP, { children: s.message })] }), /* @__PURE__ */ v(MP, { children: /* @__PURE__ */ v(FP, {
				onClick: () => l({
					open: !1,
					message: ""
				}),
				children: r("notice.ok")
			}) })] })
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-adapter.ts
function ZP(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = QP(t, e);
				if (n != null) return n;
			}
		} else return QP(t, e);
	}
}
function QP(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function $P(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = ZP(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function eF(e, t, n) {
	return e(t, n);
}
function tF(e, t, n) {
	if (typeof e == "function") return eF(e, t, n);
	if (!e || typeof e != "object") throw TypeError("[uhuu-components] useIntegrationAdapter needs a `resolver`: a map of keys to paths or functions, or one function (integration, payload) => data.");
	return $P(e, t, n);
}
function nF(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function rF(e, t, n = {}, r, i = null) {
	let a = e?.integration?.path?.();
	if (!a) return null;
	let o = n.type === "assistant", s = n.type === "image" || n.imagePath, c = o ? e.integration.path(t) ?? [a, t].filter(Boolean).join(".") : [a, t].filter(Boolean).join(".");
	if (s) {
		let t = n.imageGalleryPath ?? (i ? `${a}.${i}` : null) ?? e.defaults.imageGalleryPath;
		return {
			path: c,
			imagePath: n.imagePath || "url",
			imageGalleryPath: t,
			type: n.type || "image",
			ratio: n.ratio,
			value: r,
			payload: n.payload ?? e.payload,
			...n
		};
	}
	return o ? {
		path: c,
		type: "assistant",
		rows: n.rows,
		value: r,
		payload: n.payload ?? e.payload,
		...n
	} : {
		path: a,
		subPath: t,
		type: n.type || "text",
		rows: n.rows,
		value: r,
		payload: n.payload ?? e.payload,
		...n
	};
}
function iF(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a } = t, o = e.useMemo(() => tF(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), s = e.useMemo(() => nF(n, r, a), [
		n,
		r,
		a
	]), c = e.useCallback((e, t = {}, r) => rF(n, e, t, r, s), [n, s]), l = e.useCallback((e, t = {}, n) => {
		let r = c(e, t, n);
		return r ? Mr({ dialog: r }) : {};
	}, [c]);
	return e.useMemo(() => ({
		data: o,
		dialog: c,
		dialogProps: l,
		galleryPath: s,
		instanceId: n?.integration?.instanceId ?? null,
		integration: r
	}), [
		o,
		c,
		l,
		s,
		n,
		r
	]);
}
//#endregion
//#region src/uhuu/editor-shell/document/document-options-core.js
var aF = xE, oF = kE;
function sF(e, t) {
	return wE(e, t);
}
function cF(e) {
	return typeof e?.editor?.post == "function" ? "patch" : typeof e?.editDialog == "function" ? "dialog" : "none";
}
var lF = 1500;
function uF(e, t) {
	return {
		action: "patchPayload",
		patch: { [aF(e)]: kE(e, t) }
	};
}
function dF(e, t, n = (e) => typeof e == "string" ? e : void 0) {
	let r = aF(e), i = n(e.label) ?? r, a = bE(e);
	if (a === "toggle") return {
		path: r,
		type: "switch",
		label: i,
		value: DE(t)
	};
	let o = t == null ? {} : { value: String(t) };
	if (a === "slider" || a === "counter") return {
		path: r,
		label: i,
		...o
	};
	let s = Array.isArray(e.options) ? e.options : [];
	return {
		path: r,
		type: "select",
		label: i,
		...o,
		options: s.map((e) => ({
			value: String(e.value),
			label: n(e.label) ?? String(e.value)
		}))
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/document-options.tsx
var fF = "unknown", pF = !1, mF = !1, hF = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500";
function gF() {
	return typeof window > "u" ? void 0 : window.$uhuu;
}
function _F(e) {
	let [t, n] = h(null);
	return l(() => {
		if (!e || typeof document > "u" || ls()) return;
		let t = ns();
		return document.body.appendChild(t), n(t), () => {
			t.remove(), n(null);
		};
	}, [e]), e ? t : null;
}
function vF({ payload: e, options: t, title: n, onChange: r, toolbarPosition: i, className: a, style: o }) {
	let { interactive: d } = Lc(), { t: p, localize: g } = ec(), _ = c(jE), b = e ?? _?.payload ?? null, S = f(() => {
		let e = Array.isArray(t) ? t : [], n = e.filter((e) => typeof xE(e) == "string");
		return n.length !== e.length && !mF && (mF = !0, console.warn("[uhuu-components] DocumentOptions: an option without `id` (or `field`) is left out.")), n;
	}, [t]), C = f(() => new Map(S.map((e) => [aF(e), e])), [S]), w = d && !le() && S.length > 0, T = us(), E = ts(), D = _F(w && !T && !E.inProvider), O = T ?? E.portalContainer ?? D, k = u(), A = `${k}-panel`, j = `${k}-heading`, M = m(null), N = m(null), P = m(null), [F, I] = h(!1), [L, ee] = h({
		side: "top",
		align: "end"
	}), [, te] = h(fF), [R, z] = h({}), B = m(R), ne = s((e) => {
		B.current = e, z(e);
	}, []), re = m(0), V = m(/* @__PURE__ */ new Map()), ie = s((e) => {
		let t = V.current.get(e);
		t !== void 0 && clearTimeout(t), V.current.delete(e);
	}, []);
	l(() => {
		let e = V.current;
		return () => {
			e.forEach((e) => clearTimeout(e)), e.clear();
		};
	}, []), l(() => {
		let e = B.current, t = {}, n = !1;
		for (let [r, i] of Object.entries(e)) {
			let e = C.get(r), a = e ? sF(b, e) : void 0;
			e && Object.is(a, i.previousValue) ? t[r] = i : (n = !0, ie(r), e && fF === "unknown" && TE(a, i.value) && (fF = "supported", te(fF)));
		}
		n && ne(t);
	}, [
		b,
		C,
		ne,
		ie
	]);
	let ae = (e) => {
		let t = sF(b, e), n = R[aF(e)];
		return n && Object.is(t, n.previousValue) ? n.value : t;
	}, H = s((e) => {
		I(!1), e && N.current?.focus();
	}, []), oe = () => {
		let e = N.current?.getBoundingClientRect();
		if (e && typeof window < "u") {
			let t = e.top + e.height / 2 > window.innerHeight / 2 ? "top" : "bottom", n = e.left + e.width / 2 > window.innerWidth / 2 ? "end" : "start", r = t === "top" ? e.top : window.innerHeight - e.bottom;
			ee({
				side: t,
				align: n,
				maxHeight: Math.max(160, Math.floor(r - 24))
			});
		}
		I(!0);
	};
	l(() => {
		w || I(!1);
	}, [w]), l(() => {
		if (!F) return;
		P.current?.querySelector("select, button, [role=\"slider\"]")?.focus();
		let e = (e) => {
			M.current?.contains(e.target) || I(!1);
		};
		return document.addEventListener("pointerdown", e, !0), () => document.removeEventListener("pointerdown", e, !0);
	}, [F]);
	let se = (e) => {
		let t = gF();
		typeof t?.editDialog == "function" && (t.editDialog(dF(e, sF(b, e), g)), I(!1));
	}, ce = (e, t) => {
		let n = aF(e);
		pF || (pF = !0, console.warn("[uhuu-components] DocumentOptions: no uhuu document editor on this page; a change only calls onChange.")), ne({
			...B.current,
			[n]: {
				value: t,
				previousValue: sF(b, e),
				token: ++re.current
			}
		}), r?.(n, t);
	}, ue = (e, t) => {
		let n = gF(), r = cF(n), i = aF(e), a = oF(e, t);
		if (r === "patch" && fF !== "unsupported") {
			let t = ++re.current;
			if (ne({
				...B.current,
				[i]: {
					value: a,
					previousValue: sF(b, e),
					token: t
				}
			}), n.editor.post(uF(e, a)), fF === "supported") return;
			ie(i), V.current.set(i, setTimeout(() => {
				V.current.delete(i);
				let n = B.current[i];
				if (!n || n.token !== t || fF !== "unknown") return;
				fF = "unsupported", te(fF);
				let { [i]: r, ...o } = B.current;
				typeof gF()?.editDialog == "function" ? (ne(o), se(e)) : ce(e, a);
			}, lF));
		} else typeof n?.editDialog == "function" ? se(e) : ce(e, a);
	};
	if (!w || !O || typeof document > "u") return null;
	let de = g(n) ?? p("documentOptions.title"), fe = gF(), pe = cF(fe), me = typeof fe?.editDialog == "function" && (pe === "dialog" || pe === "patch" && fF === "unsupported"), he = (e) => {
		let t = aF(e), n = g(e.label) ?? t, r = ae(e), i = bE(e), a = i === "toggle" ? void 0 : EE(e, r), o = i === "toggle" ? p(DE(r) ? "documentOptions.on" : "documentOptions.off") : a ? g(a.label) ?? String(a.value) : r == null || r === "" ? p("options.notSet") : String(r), s = g(e.description), c = `${k}-${t}-label`, l = `${k}-${t}-description`;
		return /* @__PURE__ */ y("div", {
			className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
			children: [
				/* @__PURE__ */ v("span", {
					id: c,
					className: q(hF, "uhuu:block"),
					children: n
				}),
				/* @__PURE__ */ y("button", {
					type: "button",
					"aria-haspopup": "dialog",
					"aria-labelledby": `${c} ${k}-${t}-value`,
					"aria-describedby": s ? l : void 0,
					title: p("documentOptions.change", { name: n }),
					onClick: () => se(e),
					className: "uhuu:relative uhuu:flex uhuu:h-8 uhuu:w-full uhuu:items-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:py-1 uhuu:pr-8 uhuu:pl-2.5 uhuu:text-left uhuu:text-sm uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:border-gray-300 uhuu:focus-visible:border-gray-400 uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-200",
					children: [/* @__PURE__ */ v("span", {
						id: `${k}-${t}-value`,
						className: "uhuu:truncate",
						children: o
					}), /* @__PURE__ */ v(Uo, {
						"aria-hidden": "true",
						className: "uhuu:pointer-events-none uhuu:absolute uhuu:top-1/2 uhuu:right-2.5 uhuu:h-3.5 uhuu:w-3.5 uhuu:-translate-y-1/2 uhuu:text-gray-500"
					})]
				}),
				s && /* @__PURE__ */ v("p", {
					id: l,
					className: "uhuu:text-xs uhuu:leading-snug uhuu:text-gray-500",
					children: s
				})
			]
		}, t);
	}, ge = /* @__PURE__ */ y("div", {
		ref: M,
		className: q("uhuu-screen-only uhuu:relative uhuu:flex uhuu:items-center", T && a),
		style: T ? o : void 0,
		onKeyDown: (e) => {
			e.key === "Escape" && F && (e.preventDefault(), e.stopPropagation(), H(!0));
		},
		onBlur: (e) => {
			let t = e.relatedTarget;
			F && t && !M.current?.contains(t) && I(!1);
		},
		children: [/* @__PURE__ */ y(gs, {
			ref: N,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-haspopup": "dialog",
			"aria-expanded": F,
			"aria-controls": F ? A : void 0,
			onClick: () => F ? H(!1) : oe(),
			className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 uhuu:gap-1.5",
			children: [/* @__PURE__ */ v(Ko, {
				"aria-hidden": "true",
				className: "uhuu:w-3.5 uhuu:h-3.5"
			}), de]
		}), F && /* @__PURE__ */ y("div", {
			ref: P,
			id: A,
			role: "dialog",
			"aria-labelledby": j,
			className: q("uhuu:absolute uhuu:z-50 uhuu:w-72 uhuu:max-w-[calc(100vw-2rem)] uhuu:overflow-y-auto uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-3 uhuu:text-gray-900 uhuu:shadow-md", L.side === "top" ? "uhuu:bottom-full uhuu:mb-3" : "uhuu:top-full uhuu:mt-3", L.align === "end" ? "uhuu:right-0" : "uhuu:left-0"),
			style: { maxHeight: L.maxHeight },
			children: [/* @__PURE__ */ v("h2", {
				id: j,
				className: "uhuu:mb-3 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900",
				children: de
			}), /* @__PURE__ */ v(UN, { children: S.map((e) => me ? he(e) : /* @__PURE__ */ v(HN, {
				definition: e,
				value: ae(e),
				onChange: (t) => ue(e, t)
			}, aF(e))) })]
		})]
	});
	if (T) return x(ge, T);
	let _e = oD(i) ? i : nD;
	return x(/* @__PURE__ */ v("div", {
		"data-uhuu-editor": !0,
		"data-uhuu-toolbar-position": _e,
		className: q("uhuu-screen-only uhuu:fixed uhuu:z-50 uhuu:flex uhuu:items-center uhuu:p-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm", iD[_e], a),
		style: o,
		children: ge
	}), O);
}
//#endregion
//#region src/uhuu/image/image-block.tsx
var yF = [
	"className",
	"style",
	"imageStyle",
	"imageProps",
	"renderImage",
	"placeholder"
], bF = (e) => {
	let { t } = ec(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = f(() => {
		let { annotation: n, dialog: r, overlaySvg: i, options: a, src: o } = e;
		if (!n && !r) return {
			computedOverlaySvg: i,
			computedOptions: a,
			computedDirectDialog: void 0
		};
		let s = n?.value || {}, c = i ?? s.annotationSvg ?? "", l = [];
		if (n) {
			if (r) {
				let e = { ...r };
				if (r.type === "satellite") {
					let { path: t, type: n, ...i } = r;
					e.config = {
						...i,
						path: "image"
					}, e.path = t, e.type = n;
				}
				l.push({
					id: "edit",
					label: t("image.edit"),
					dialog: e
				});
			}
			let e = Array.isArray(s.annotations) ? s.annotations : [], { path: i, value: a, annotations: c, ...u } = n, d = {
				path: n.path,
				type: "annotation",
				image: o,
				annotations: e,
				...u
			};
			l.push({
				id: "annotate",
				label: t("image.annotate"),
				dialog: d
			});
		}
		let u = a ? [...l, ...a] : l, d;
		if (r) {
			let e = { ...r };
			if (r.type === "satellite") {
				let { path: t, type: n, ...i } = r;
				e.config = {
					...i,
					path: "image"
				}, e.path = t, e.type = n;
			}
			d = e;
		}
		return {
			computedOverlaySvg: c,
			computedOptions: u.length > 0 ? u : void 0,
			computedDirectDialog: d
		};
	}, [
		e.annotation,
		e.dialog,
		e.overlaySvg,
		e.options,
		e.src,
		t
	]), a = f(() => e.mode ? e.mode : e.side === void 0 ? e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto" : "spread", [
		e.mode,
		e.side,
		e.width,
		e.height,
		e.left,
		e.right,
		e.top,
		e.bottom
	]), o = Te(), s = a === "auto" ? "" : yF.filter((t) => e[t] !== void 0).join(", ");
	o && s && be(`image-block:${a}:${s}`, `[uhuu-components] ImageBlock in "${a}" mode does not apply ${s}: the image is positioned on the page by its geometry. Style the image with imageClassName, or wrap the ImageBlock.`);
	let c = a === "auto" || r && r.length > 0 || n || i || e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, { mode: l, side: u, src: d, alt: p, className: m, imageClassName: h, style: g, imageStyle: _, backgroundColor: y, width: b, height: x, left: S, right: C, top: w, bottom: T, pageWidth: E, pageHeight: D, bleed: O, overlayClassName: k, dialogProps: A, placeholder: j, children: M, imageProps: N, renderImage: P, onError: F } = e, I = u === "left" ? "start" : u === "right" ? "end" : u, L = {
		src: d,
		alt: p,
		backgroundColor: y,
		width: b,
		height: x,
		left: S,
		right: C,
		top: w,
		bottom: T,
		pageWidth: E,
		pageHeight: D,
		bleed: O,
		imageClassName: h,
		onError: F
	};
	if (a === "auto") return /* @__PURE__ */ v(P_, {
		src: d,
		alt: p,
		className: m,
		style: g,
		imageClassName: h,
		imageStyle: _,
		overlaySvg: n,
		overlayClassName: k,
		options: r,
		dialog: i,
		dialogProps: A,
		placeholder: j,
		imageProps: N,
		renderImage: P,
		onError: F,
		children: M
	});
	if (a === "spread") {
		let e = {
			...L,
			side: I,
			imageClassName: h
		};
		return c && (n || r?.length || i) ? /* @__PURE__ */ v(I_, {
			className: m,
			style: g,
			overlaySvg: n,
			overlayClassName: k,
			options: r,
			dialog: i,
			dialogProps: A,
			spreadProps: e,
			children: M
		}) : /* @__PURE__ */ v(go, { ...e });
	}
	return c && (n || r?.length || i) ? /* @__PURE__ */ v(F_, {
		className: m,
		style: g,
		overlaySvg: n,
		overlayClassName: k,
		options: r,
		dialog: i,
		dialogProps: A,
		bleedProps: L,
		children: M
	}) : /* @__PURE__ */ v(_o, { ...L });
}, xF = {
	Pagination: Fe,
	Sheet: Ie,
	usePaginationHold: ze,
	useView: Me
}, SF = {
	Page: Zt,
	Area: Xt,
	Items: En,
	Columns: Dn,
	Text: cn,
	Document: pi,
	fromMarkdown: Oi,
	fromHtml: ri,
	planChunks: Ct,
	planColumnChunks: Pt,
	measure: We
}, CF = {
	Block: jv,
	open: Ov,
	editDialog: Dv
}, wF = {
	Editable: zr,
	getDialogProps: Mr
}, TF = {
	Provider: IT,
	useBrandKit: LT,
	publicBaseUrl: jw,
	selection: zw,
	load: Bw
}, EF = {
	TemplateDataProvider: ME,
	PageEditor: XP,
	InteractiveModeProvider: zc,
	useInteractive: Lc,
	useIntegrationAdapter: iF,
	DocumentOptions: vF
};
//#endregion
export { TF as BrandKit, wF as Editing, EF as EditorShell, SF as Flow, CF as Frame, bF as ImageBlock, xF as Static, W_ as imageUrl };
