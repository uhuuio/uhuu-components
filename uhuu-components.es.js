(function(){(function(e,t){try{if(typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0];if(!n)return;let r=t&&t.styleId||`uhuu-components-styles`,i=document.getElementById(r);i||(i=document.createElement(`style`),i.setAttribute(`id`,r),t&&t.attributes&&Object.entries(t.attributes).forEach(([e,t])=>{try{i.setAttribute(e,t)}catch{}})),i.textContent!==e&&(i.textContent=e),i.parentNode!==n&&(n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i))}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--uhuu-tw-translate-x:0;--uhuu-tw-translate-y:0;--uhuu-tw-translate-z:0;--uhuu-tw-scale-x:1;--uhuu-tw-scale-y:1;--uhuu-tw-scale-z:1;--uhuu-tw-space-y-reverse:0;--uhuu-tw-border-style:solid;--uhuu-tw-leading:initial;--uhuu-tw-font-weight:initial;--uhuu-tw-tracking:initial;--uhuu-tw-ordinal:initial;--uhuu-tw-slashed-zero:initial;--uhuu-tw-numeric-figure:initial;--uhuu-tw-numeric-spacing:initial;--uhuu-tw-numeric-fraction:initial;--uhuu-tw-shadow:0 0 #0000;--uhuu-tw-shadow-color:initial;--uhuu-tw-shadow-alpha:100%;--uhuu-tw-inset-shadow:0 0 #0000;--uhuu-tw-inset-shadow-color:initial;--uhuu-tw-inset-shadow-alpha:100%;--uhuu-tw-ring-color:initial;--uhuu-tw-ring-shadow:0 0 #0000;--uhuu-tw-inset-ring-color:initial;--uhuu-tw-inset-ring-shadow:0 0 #0000;--uhuu-tw-ring-inset:initial;--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-color:#fff;--uhuu-tw-ring-offset-shadow:0 0 #0000;--uhuu-tw-outline-style:solid;--uhuu-tw-blur:initial;--uhuu-tw-brightness:initial;--uhuu-tw-contrast:initial;--uhuu-tw-grayscale:initial;--uhuu-tw-hue-rotate:initial;--uhuu-tw-invert:initial;--uhuu-tw-opacity:initial;--uhuu-tw-saturate:initial;--uhuu-tw-sepia:initial;--uhuu-tw-drop-shadow:initial;--uhuu-tw-drop-shadow-color:initial;--uhuu-tw-drop-shadow-alpha:100%;--uhuu-tw-drop-shadow-size:initial;--uhuu-tw-backdrop-blur:initial;--uhuu-tw-backdrop-brightness:initial;--uhuu-tw-backdrop-contrast:initial;--uhuu-tw-backdrop-grayscale:initial;--uhuu-tw-backdrop-hue-rotate:initial;--uhuu-tw-backdrop-invert:initial;--uhuu-tw-backdrop-opacity:initial;--uhuu-tw-backdrop-saturate:initial;--uhuu-tw-backdrop-sepia:initial;--uhuu-tw-duration:initial;--uhuu-tw-ease:initial}*,:before,:after,::backdrop{--uhuu-tw-outline-style:solid}}}@layer theme{:root:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:root:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--uhuu-font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-neutral-50:oklch(98.5% 0 none);--uhuu-color-black:#000;--uhuu-color-white:#fff;--uhuu-spacing:.25rem;--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-tracking-wide:.025em;--uhuu-tracking-widest:.1em;--uhuu-leading-tight:1.25;--uhuu-leading-snug:1.375;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-ease-in-out:cubic-bezier(.4, 0, .2, 1);--uhuu-blur-sm:8px;--uhuu-blur-md:12px;--uhuu-default-transition-duration:.15s;--uhuu-default-transition-timing-function:cubic-bezier(.4, 0, .2, 1)}:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base;@layer components{@media screen{[data-uhuu-interactive] [data-uhuu-flow-unplaceable=true],[data-uhuu-portal] [data-uhuu-flow-unplaceable=true]{outline-offset:-2px;outline:2px dashed #dc2626}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)){background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc' fill-opacity='.2'/%3E%3C/svg%3E")}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover){outline-offset:-1px;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc'/%3E%3C/svg%3E");outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}[data-uhuu-interactive] :where([data-uhuu][data-uhuu-selected]),[data-uhuu-portal] :where([data-uhuu][data-uhuu-selected]),[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){outline:none}[data-uhuu-interactive] :where([data-uhuu][data-uhuu-selected=text]),[data-uhuu-portal] :where([data-uhuu][data-uhuu-selected=text]),[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){cursor:text}[data-uhuu-interactive] :where([data-uhuu-editing]),[data-uhuu-portal] :where([data-uhuu-editing]){-webkit-user-select:text;-moz-user-select:text;user-select:text}}}@layer utilities{.uhuu-page-overlay{pointer-events:none;color:var(--color-gray-600,oklch(44.6% .03 256.802));justify-content:space-between;align-items:center;font-size:7pt;display:flex;position:absolute;bottom:10mm;left:15mm;right:15mm}.uhuu-flow-page{flex-direction:column;width:100%;height:100%;display:flex}.uhuu-flow-page-area{flex:1;min-height:0}[data-uhuu-flow-area]:has([data-uhuu-flow-unplaceable]){overflow:clip}.uhuu-flow-document{width:100%}.uhuu-image-block{position:relative}.uhuu-image-block-fill{width:100%;height:100%}.uhuu-image-body{width:100%;height:100%;position:relative}.uhuu-image-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img:where(.object-cover){-o-object-fit:cover;object-fit:cover}.uhuu-image-img:where(.object-contain){-o-object-fit:contain;object-fit:contain}.uhuu-image-img:where(.object-fill){-o-object-fit:fill;object-fit:fill}.uhuu-image-img:where(.object-center){-o-object-position:center;object-position:center}.uhuu-image-img:where(.object-top){-o-object-position:top;object-position:top}.uhuu-image-img:where(.object-bottom){-o-object-position:bottom;object-position:bottom}.uhuu-image-img:where(.object-left){-o-object-position:left;object-position:left}.uhuu-image-img:where(.object-right){-o-object-position:right;object-position:right}.uhuu-image-img:where(.object-left-top){-o-object-position:left top;object-position:left top}.uhuu-image-img:where(.object-right-top){-o-object-position:right top;object-position:right top}.uhuu-image-img:where(.object-left-bottom){-o-object-position:left bottom;object-position:left bottom}.uhuu-image-img:where(.object-right-bottom){-o-object-position:right bottom;object-position:right bottom}.uhuu-image-overlay{z-index:10;pointer-events:none;position:absolute;inset:0}.uhuu-image-overlay-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img,.uhuu-image-overlay-img,:where(.uhuu-image-inner) .uhuu-image-geometry,:where(.uhuu-image-overlay)>svg{display:block}}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *),:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):after,:is([data-uhuu-chrome],[data-uhuu-chrome] *):after,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):before,:is([data-uhuu-chrome],[data-uhuu-chrome] *):before,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::backdrop,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),html:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),hr:is([data-uhuu-chrome],[data-uhuu-chrome] *){height:0;color:inherit;border-top-width:1px}abbr:where([title]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),abbr:where([title]):is([data-uhuu-chrome],[data-uhuu-chrome] *){text-decoration:underline dotted}h1:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h1:is([data-uhuu-chrome],[data-uhuu-chrome] *),h2:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h2:is([data-uhuu-chrome],[data-uhuu-chrome] *),h3:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h3:is([data-uhuu-chrome],[data-uhuu-chrome] *),h4:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h4:is([data-uhuu-chrome],[data-uhuu-chrome] *),h5:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h5:is([data-uhuu-chrome],[data-uhuu-chrome] *),h6:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h6:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:inherit;font-weight:inherit}a:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),a:is([data-uhuu-chrome],[data-uhuu-chrome] *){color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),b:is([data-uhuu-chrome],[data-uhuu-chrome] *),strong:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),strong:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}code:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),code:is([data-uhuu-chrome],[data-uhuu-chrome] *),kbd:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),kbd:is([data-uhuu-chrome],[data-uhuu-chrome] *),samp:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),samp:is([data-uhuu-chrome],[data-uhuu-chrome] *),pre:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),pre:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),small:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:80%}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *),sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *){bottom:-.25em}sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){top:-.5em}table:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),table:is([data-uhuu-chrome],[data-uhuu-chrome] *){text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-focusring:where(:not(iframe)):is([data-uhuu-chrome],[data-uhuu-chrome] *){outline:auto}progress:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),progress:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline}summary:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),summary:is([data-uhuu-chrome],[data-uhuu-chrome] *){display:list-item}ol:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ol:is([data-uhuu-chrome],[data-uhuu-chrome] *),ul:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ul:is([data-uhuu-chrome],[data-uhuu-chrome] *),menu:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),menu:is([data-uhuu-chrome],[data-uhuu-chrome] *){list-style:none}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),svg:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),svg:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *),canvas:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),canvas:is([data-uhuu-chrome],[data-uhuu-chrome] *),audio:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),audio:is([data-uhuu-chrome],[data-uhuu-chrome] *),iframe:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),iframe:is([data-uhuu-chrome],[data-uhuu-chrome] *),embed:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),embed:is([data-uhuu-chrome],[data-uhuu-chrome] *),object:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),object:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:middle;display:block}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *){max-width:100%;height:auto}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:is([data-uhuu-chrome],[data-uhuu-chrome] *),select:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),select:is([data-uhuu-chrome],[data-uhuu-chrome] *),optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *),textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-chrome],[data-uhuu-chrome] *){padding-inline-start:20px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{margin-inline-end:4px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{opacity:1}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:currentColor}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){resize:vertical}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-search-decoration,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-search-decoration{-webkit-appearance:none}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-date-and-time-value,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{display:inline-flex}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-fields-wrapper,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-fields-wrapper{padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-year-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-year-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-month-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-month-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-day-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-day-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-hour-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-hour-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-minute-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-minute-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-second-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-second-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-millisecond-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-millisecond-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-meridiem-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-meridiem-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-calendar-picker-indicator,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-ui-invalid:is([data-uhuu-chrome],[data-uhuu-chrome] *){box-shadow:none}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-inner-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-inner-spin-button{height:auto}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-outer-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),[hidden]:where(:not([hidden=until-found])):is([data-uhuu-chrome],[data-uhuu-chrome] *){display:none!important}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit}:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--uhuu-font-sans,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-variant:normal;font-feature-settings:normal;font-variation-settings:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-align:start;text-shadow:none;color:#000;font-size:1rem;font-style:normal;font-weight:400;font-stretch:100%;line-height:1.5}[data-uhuu-interactive] .uhuu\\:pointer-events-auto,[data-uhuu-portal] .uhuu\\:pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .uhuu\\:pointer-events-none,[data-uhuu-portal] .uhuu\\:pointer-events-none{pointer-events:none}[data-uhuu-interactive] .uhuu\\:sr-only,[data-uhuu-portal] .uhuu\\:sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .uhuu\\:absolute,[data-uhuu-portal] .uhuu\\:absolute{position:absolute}[data-uhuu-interactive] .uhuu\\:fixed,[data-uhuu-portal] .uhuu\\:fixed{position:fixed}[data-uhuu-interactive] .uhuu\\:relative,[data-uhuu-portal] .uhuu\\:relative{position:relative}[data-uhuu-interactive] .uhuu\\:inset-0,[data-uhuu-portal] .uhuu\\:inset-0{inset:0}[data-uhuu-interactive] .uhuu\\:inset-x-0,[data-uhuu-portal] .uhuu\\:inset-x-0{inset-inline:0}[data-uhuu-interactive] .uhuu\\:inset-y-0,[data-uhuu-portal] .uhuu\\:inset-y-0{inset-block:0}[data-uhuu-interactive] .uhuu\\:-top-3,[data-uhuu-portal] .uhuu\\:-top-3{top:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:top-0,[data-uhuu-portal] .uhuu\\:top-0{top:0}[data-uhuu-interactive] .uhuu\\:top-0\\.5,[data-uhuu-portal] .uhuu\\:top-0\\.5{top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:top-1\\/2,[data-uhuu-portal] .uhuu\\:top-1\\/2{top:50%}[data-uhuu-interactive] .uhuu\\:top-2,[data-uhuu-portal] .uhuu\\:top-2{top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:top-3,[data-uhuu-portal] .uhuu\\:top-3{top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:top-4,[data-uhuu-portal] .uhuu\\:top-4{top:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:top-20,[data-uhuu-portal] .uhuu\\:top-20{top:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:top-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .uhuu\\:top-full,[data-uhuu-portal] .uhuu\\:top-full{top:100%}[data-uhuu-interactive] .uhuu\\:-right-3,[data-uhuu-portal] .uhuu\\:-right-3{right:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:right-0,[data-uhuu-portal] .uhuu\\:right-0{right:0}[data-uhuu-interactive] .uhuu\\:right-0\\.5,[data-uhuu-portal] .uhuu\\:right-0\\.5{right:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:right-2,[data-uhuu-portal] .uhuu\\:right-2{right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:right-2\\.5,[data-uhuu-portal] .uhuu\\:right-2\\.5{right:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:right-4,[data-uhuu-portal] .uhuu\\:right-4{right:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-0,[data-uhuu-portal] .uhuu\\:bottom-0{bottom:0}[data-uhuu-interactive] .uhuu\\:bottom-0\\.5,[data-uhuu-portal] .uhuu\\:bottom-0\\.5{bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:bottom-2,[data-uhuu-portal] .uhuu\\:bottom-2{bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:bottom-3,[data-uhuu-portal] .uhuu\\:bottom-3{bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:bottom-4,[data-uhuu-portal] .uhuu\\:bottom-4{bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-20,[data-uhuu-portal] .uhuu\\:bottom-20{bottom:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:bottom-full,[data-uhuu-portal] .uhuu\\:bottom-full{bottom:100%}[data-uhuu-interactive] .uhuu\\:left-0,[data-uhuu-portal] .uhuu\\:left-0{left:0}[data-uhuu-interactive] .uhuu\\:left-0\\.5,[data-uhuu-portal] .uhuu\\:left-0\\.5{left:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:left-2,[data-uhuu-portal] .uhuu\\:left-2{left:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:left-3,[data-uhuu-portal] .uhuu\\:left-3{left:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:left-4,[data-uhuu-portal] .uhuu\\:left-4{left:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:left-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .uhuu\\:z-10,[data-uhuu-portal] .uhuu\\:z-10{z-index:10}[data-uhuu-interactive] .uhuu\\:z-20,[data-uhuu-portal] .uhuu\\:z-20{z-index:20}[data-uhuu-interactive] .uhuu\\:z-30,[data-uhuu-portal] .uhuu\\:z-30{z-index:30}[data-uhuu-interactive] .uhuu\\:z-50,[data-uhuu-portal] .uhuu\\:z-50{z-index:50}[data-uhuu-interactive] .uhuu\\:z-\\[2\\],[data-uhuu-portal] .uhuu\\:z-\\[2\\]{z-index:2}[data-uhuu-interactive] .uhuu\\:-mx-1,[data-uhuu-portal] .uhuu\\:-mx-1{margin-inline:calc(var(--uhuu-spacing) * -1)}[data-uhuu-interactive] .uhuu\\:mx-0\\.5,[data-uhuu-portal] .uhuu\\:mx-0\\.5{margin-inline:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mx-4,[data-uhuu-portal] .uhuu\\:mx-4{margin-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mx-auto,[data-uhuu-portal] .uhuu\\:mx-auto{margin-inline:auto}[data-uhuu-interactive] .uhuu\\:my-1,[data-uhuu-portal] .uhuu\\:my-1{margin-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:my-1\\.5,[data-uhuu-portal] .uhuu\\:my-1\\.5{margin-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:mt-0\\.5,[data-uhuu-portal] .uhuu\\:mt-0\\.5{margin-top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mt-1,[data-uhuu-portal] .uhuu\\:mt-1{margin-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mt-2,[data-uhuu-portal] .uhuu\\:mt-2{margin-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mt-3,[data-uhuu-portal] .uhuu\\:mt-3{margin-top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mt-6,[data-uhuu-portal] .uhuu\\:mt-6{margin-top:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:mr-2,[data-uhuu-portal] .uhuu\\:mr-2{margin-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mr-8,[data-uhuu-portal] .uhuu\\:mr-8{margin-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:mb-0\\.5,[data-uhuu-portal] .uhuu\\:mb-0\\.5{margin-bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mb-1,[data-uhuu-portal] .uhuu\\:mb-1{margin-bottom:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mb-2,[data-uhuu-portal] .uhuu\\:mb-2{margin-bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mb-3,[data-uhuu-portal] .uhuu\\:mb-3{margin-bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mb-4,[data-uhuu-portal] .uhuu\\:mb-4{margin-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mb-5,[data-uhuu-portal] .uhuu\\:mb-5{margin-bottom:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:mb-6,[data-uhuu-portal] .uhuu\\:mb-6{margin-bottom:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:ml-1,[data-uhuu-portal] .uhuu\\:ml-1{margin-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:ml-auto,[data-uhuu-portal] .uhuu\\:ml-auto{margin-left:auto}[data-uhuu-interactive] .uhuu\\:block,[data-uhuu-portal] .uhuu\\:block{display:block}[data-uhuu-interactive] .uhuu\\:contents,[data-uhuu-portal] .uhuu\\:contents{display:contents}[data-uhuu-interactive] .uhuu\\:flex,[data-uhuu-portal] .uhuu\\:flex{display:flex}[data-uhuu-interactive] .uhuu\\:grid,[data-uhuu-portal] .uhuu\\:grid{display:grid}[data-uhuu-interactive] .uhuu\\:hidden,[data-uhuu-portal] .uhuu\\:hidden{display:none}[data-uhuu-interactive] .uhuu\\:inline-block,[data-uhuu-portal] .uhuu\\:inline-block{display:inline-block}[data-uhuu-interactive] .uhuu\\:inline-flex,[data-uhuu-portal] .uhuu\\:inline-flex{display:inline-flex}[data-uhuu-interactive] .uhuu\\:size-3,[data-uhuu-portal] .uhuu\\:size-3{width:calc(var(--uhuu-spacing) * 3);height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:size-3\\.5,[data-uhuu-portal] .uhuu\\:size-3\\.5{width:calc(var(--uhuu-spacing) * 3.5);height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:size-4,[data-uhuu-portal] .uhuu\\:size-4{width:calc(var(--uhuu-spacing) * 4);height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-1\\.5,[data-uhuu-portal] .uhuu\\:h-1\\.5{height:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:h-3,[data-uhuu-portal] .uhuu\\:h-3{height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:h-3\\.5,[data-uhuu-portal] .uhuu\\:h-3\\.5{height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:h-4,[data-uhuu-portal] .uhuu\\:h-4{height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-5,[data-uhuu-portal] .uhuu\\:h-5{height:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:h-6,[data-uhuu-portal] .uhuu\\:h-6{height:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:h-7,[data-uhuu-portal] .uhuu\\:h-7{height:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:h-8,[data-uhuu-portal] .uhuu\\:h-8{height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:h-9,[data-uhuu-portal] .uhuu\\:h-9{height:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:h-10,[data-uhuu-portal] .uhuu\\:h-10{height:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:h-11,[data-uhuu-portal] .uhuu\\:h-11{height:calc(var(--uhuu-spacing) * 11)}[data-uhuu-interactive] .uhuu\\:h-12,[data-uhuu-portal] .uhuu\\:h-12{height:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:h-16,[data-uhuu-portal] .uhuu\\:h-16{height:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:h-\\[90vh\\],[data-uhuu-portal] .uhuu\\:h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .uhuu\\:h-full,[data-uhuu-portal] .uhuu\\:h-full{height:100%}[data-uhuu-interactive] .uhuu\\:h-px,[data-uhuu-portal] .uhuu\\:h-px{height:1px}[data-uhuu-interactive] .uhuu\\:max-h-\\[40vh\\],[data-uhuu-portal] .uhuu\\:max-h-\\[40vh\\]{max-height:40vh}[data-uhuu-interactive] .uhuu\\:min-h-0,[data-uhuu-portal] .uhuu\\:min-h-0{min-height:0}[data-uhuu-interactive] .uhuu\\:min-h-8,[data-uhuu-portal] .uhuu\\:min-h-8{min-height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-3,[data-uhuu-portal] .uhuu\\:w-3{width:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:w-3\\.5,[data-uhuu-portal] .uhuu\\:w-3\\.5{width:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:w-3\\/4,[data-uhuu-portal] .uhuu\\:w-3\\/4{width:75%}[data-uhuu-interactive] .uhuu\\:w-4,[data-uhuu-portal] .uhuu\\:w-4{width:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:w-6,[data-uhuu-portal] .uhuu\\:w-6{width:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:w-7,[data-uhuu-portal] .uhuu\\:w-7{width:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:w-8,[data-uhuu-portal] .uhuu\\:w-8{width:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-9,[data-uhuu-portal] .uhuu\\:w-9{width:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:w-10,[data-uhuu-portal] .uhuu\\:w-10{width:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:w-12,[data-uhuu-portal] .uhuu\\:w-12{width:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:w-16,[data-uhuu-portal] .uhuu\\:w-16{width:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:w-20,[data-uhuu-portal] .uhuu\\:w-20{width:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:w-24,[data-uhuu-portal] .uhuu\\:w-24{width:calc(var(--uhuu-spacing) * 24)}[data-uhuu-interactive] .uhuu\\:w-40,[data-uhuu-portal] .uhuu\\:w-40{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:w-48,[data-uhuu-portal] .uhuu\\:w-48{width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:w-52,[data-uhuu-portal] .uhuu\\:w-52{width:calc(var(--uhuu-spacing) * 52)}[data-uhuu-interactive] .uhuu\\:w-64,[data-uhuu-portal] .uhuu\\:w-64{width:calc(var(--uhuu-spacing) * 64)}[data-uhuu-interactive] .uhuu\\:w-72,[data-uhuu-portal] .uhuu\\:w-72{width:calc(var(--uhuu-spacing) * 72)}[data-uhuu-interactive] .uhuu\\:w-96,[data-uhuu-portal] .uhuu\\:w-96{width:calc(var(--uhuu-spacing) * 96)}[data-uhuu-interactive] .uhuu\\:w-full,[data-uhuu-portal] .uhuu\\:w-full{width:100%}[data-uhuu-interactive] .uhuu\\:w-max,[data-uhuu-portal] .uhuu\\:w-max{width:max-content}[data-uhuu-interactive] .uhuu\\:w-px,[data-uhuu-portal] .uhuu\\:w-px{width:1px}[data-uhuu-interactive] .uhuu\\:max-w-\\[110px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .uhuu\\:max-w-\\[120px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .uhuu\\:max-w-\\[140px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\],[data-uhuu-portal] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}[data-uhuu-interactive] .uhuu\\:max-w-\\[min\\(720px\\,calc\\(100vw-24px\\)\\)\\],[data-uhuu-portal] .uhuu\\:max-w-\\[min\\(720px\\,calc\\(100vw-24px\\)\\)\\]{max-width:min(720px,100vw - 24px)}[data-uhuu-interactive] .uhuu\\:max-w-md,[data-uhuu-portal] .uhuu\\:max-w-md{max-width:var(--uhuu-container-md)}[data-uhuu-interactive] .uhuu\\:max-w-none,[data-uhuu-portal] .uhuu\\:max-w-none{max-width:none}[data-uhuu-interactive] .uhuu\\:max-w-sm,[data-uhuu-portal] .uhuu\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:min-w-0,[data-uhuu-portal] .uhuu\\:min-w-0{min-width:0}[data-uhuu-interactive] .uhuu\\:min-w-44,[data-uhuu-portal] .uhuu\\:min-w-44{min-width:calc(var(--uhuu-spacing) * 44)}[data-uhuu-interactive] .uhuu\\:min-w-\\[1rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[8rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[24px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .uhuu\\:min-w-\\[180px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .uhuu\\:min-w-\\[200px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .uhuu\\:flex-1,[data-uhuu-portal] .uhuu\\:flex-1{flex:1}[data-uhuu-interactive] .uhuu\\:shrink-0,[data-uhuu-portal] .uhuu\\:shrink-0{flex-shrink:0}[data-uhuu-interactive] .uhuu\\:shrink-0\\!,[data-uhuu-portal] .uhuu\\:shrink-0\\!{flex-shrink:0!important}[data-uhuu-interactive] .uhuu\\:grow,[data-uhuu-portal] .uhuu\\:grow{flex-grow:1}[data-uhuu-interactive] .uhuu\\:translate-x-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-x-\\[-50\\%\\]{--uhuu-tw-translate-x:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:-translate-y-1\\/2,[data-uhuu-portal] .uhuu\\:-translate-y-1\\/2{--uhuu-tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:translate-y-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-y-\\[-50\\%\\]{--uhuu-tw-translate-y:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:scale-105,[data-uhuu-portal] .uhuu\\:scale-105{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:scale-110,[data-uhuu-portal] .uhuu\\:scale-110{--uhuu-tw-scale-x:110%;--uhuu-tw-scale-y:110%;--uhuu-tw-scale-z:110%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:rotate-2,[data-uhuu-portal] .uhuu\\:rotate-2{rotate:2deg}[data-uhuu-interactive] .uhuu\\:rotate-45,[data-uhuu-portal] .uhuu\\:rotate-45{rotate:45deg}[data-uhuu-interactive] .uhuu\\:cursor-default,[data-uhuu-portal] .uhuu\\:cursor-default{cursor:default}[data-uhuu-interactive] .uhuu\\:cursor-grab,[data-uhuu-portal] .uhuu\\:cursor-grab{cursor:grab}[data-uhuu-interactive] .uhuu\\:cursor-pointer,[data-uhuu-portal] .uhuu\\:cursor-pointer{cursor:pointer}[data-uhuu-interactive] .uhuu\\:touch-none,[data-uhuu-portal] .uhuu\\:touch-none{touch-action:none}[data-uhuu-interactive] .uhuu\\:resize-y,[data-uhuu-portal] .uhuu\\:resize-y{resize:vertical}[data-uhuu-interactive] .uhuu\\:appearance-none,[data-uhuu-portal] .uhuu\\:appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-uhuu-interactive] .uhuu\\:grid-cols-2,[data-uhuu-portal] .uhuu\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .uhuu\\:flex-col,[data-uhuu-portal] .uhuu\\:flex-col{flex-direction:column}[data-uhuu-interactive] .uhuu\\:flex-col-reverse,[data-uhuu-portal] .uhuu\\:flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .uhuu\\:flex-wrap,[data-uhuu-portal] .uhuu\\:flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .uhuu\\:items-center,[data-uhuu-portal] .uhuu\\:items-center{align-items:center}[data-uhuu-interactive] .uhuu\\:items-end,[data-uhuu-portal] .uhuu\\:items-end{align-items:flex-end}[data-uhuu-interactive] .uhuu\\:items-start,[data-uhuu-portal] .uhuu\\:items-start{align-items:flex-start}[data-uhuu-interactive] .uhuu\\:justify-between,[data-uhuu-portal] .uhuu\\:justify-between{justify-content:space-between}[data-uhuu-interactive] .uhuu\\:justify-center,[data-uhuu-portal] .uhuu\\:justify-center{justify-content:center}[data-uhuu-interactive] .uhuu\\:justify-end,[data-uhuu-portal] .uhuu\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:justify-start,[data-uhuu-portal] .uhuu\\:justify-start{justify-content:flex-start}[data-uhuu-interactive] .uhuu\\:gap-0,[data-uhuu-portal] .uhuu\\:gap-0{gap:0}[data-uhuu-interactive] .uhuu\\:gap-0\\.5,[data-uhuu-portal] .uhuu\\:gap-0\\.5{gap:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:gap-1,[data-uhuu-portal] .uhuu\\:gap-1{gap:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:gap-1\\.5,[data-uhuu-portal] .uhuu\\:gap-1\\.5{gap:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:gap-2,[data-uhuu-portal] .uhuu\\:gap-2{gap:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:gap-3,[data-uhuu-portal] .uhuu\\:gap-3{gap:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:gap-4,[data-uhuu-portal] .uhuu\\:gap-4{gap:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] :where(.uhuu\\:space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-2>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] .uhuu\\:truncate,[data-uhuu-portal] .uhuu\\:truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-auto,[data-uhuu-portal] .uhuu\\:overflow-auto{overflow:auto}[data-uhuu-interactive] .uhuu\\:overflow-hidden,[data-uhuu-portal] .uhuu\\:overflow-hidden{overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-y-auto,[data-uhuu-portal] .uhuu\\:overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .uhuu\\:rounded,[data-uhuu-portal] .uhuu\\:rounded{border-radius:.25rem}[data-uhuu-interactive] .uhuu\\:rounded-\\[2px\\],[data-uhuu-portal] .uhuu\\:rounded-\\[2px\\]{border-radius:2px}[data-uhuu-interactive] .uhuu\\:rounded-full,[data-uhuu-portal] .uhuu\\:rounded-full{border-radius:2147483647px}[data-uhuu-interactive] .uhuu\\:rounded-lg,[data-uhuu-portal] .uhuu\\:rounded-lg{border-radius:var(--uhuu-radius-lg)}[data-uhuu-interactive] .uhuu\\:rounded-md,[data-uhuu-portal] .uhuu\\:rounded-md{border-radius:var(--uhuu-radius-md)}[data-uhuu-interactive] .uhuu\\:rounded-sm,[data-uhuu-portal] .uhuu\\:rounded-sm{border-radius:var(--uhuu-radius-sm)}[data-uhuu-interactive] .uhuu\\:border,[data-uhuu-portal] .uhuu\\:border{border-style:var(--uhuu-tw-border-style);border-width:1px}[data-uhuu-interactive] .uhuu\\:border-0,[data-uhuu-portal] .uhuu\\:border-0{border-style:var(--uhuu-tw-border-style);border-width:0}[data-uhuu-interactive] .uhuu\\:border-2,[data-uhuu-portal] .uhuu\\:border-2{border-style:var(--uhuu-tw-border-style);border-width:2px}[data-uhuu-interactive] .uhuu\\:border-t,[data-uhuu-portal] .uhuu\\:border-t{border-top-style:var(--uhuu-tw-border-style);border-top-width:1px}[data-uhuu-interactive] .uhuu\\:border-r,[data-uhuu-portal] .uhuu\\:border-r{border-right-style:var(--uhuu-tw-border-style);border-right-width:1px}[data-uhuu-interactive] .uhuu\\:border-b,[data-uhuu-portal] .uhuu\\:border-b{border-bottom-style:var(--uhuu-tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .uhuu\\:border-l,[data-uhuu-portal] .uhuu\\:border-l{border-left-style:var(--uhuu-tw-border-style);border-left-width:1px}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border\\){border-color:var(--uhuu-thumbnail-border)}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\){border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:border-blue-400,[data-uhuu-portal] .uhuu\\:border-blue-400{border-color:var(--uhuu-color-blue-400)}[data-uhuu-interactive] .uhuu\\:border-gray-200,[data-uhuu-portal] .uhuu\\:border-gray-200,[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 60%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-300,[data-uhuu-portal] .uhuu\\:border-gray-300{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:border-gray-400,[data-uhuu-portal] .uhuu\\:border-gray-400{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:border-gray-900,[data-uhuu-portal] .uhuu\\:border-gray-900{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:border-transparent,[data-uhuu-portal] .uhuu\\:border-transparent{border-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 95%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\){background-color:var(--uhuu-thumbnail-caption)}[data-uhuu-interactive] .uhuu\\:bg-black,[data-uhuu-portal] .uhuu\\:bg-black,[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:color-mix(in oklab, var(--uhuu-color-black) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:color-mix(in oklab, var(--uhuu-color-black) 40%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:color-mix(in oklab, var(--uhuu-color-black) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-50,[data-uhuu-portal] .uhuu\\:bg-blue-50{background-color:var(--uhuu-color-blue-50)}[data-uhuu-interactive] .uhuu\\:bg-blue-100,[data-uhuu-portal] .uhuu\\:bg-blue-100{background-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:var(--uhuu-color-blue-500)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:color-mix(in oklab, var(--uhuu-color-blue-500) 10%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:var(--uhuu-color-blue-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-blue-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-emerald-100,[data-uhuu-portal] .uhuu\\:bg-emerald-100{background-color:var(--uhuu-color-emerald-100)}[data-uhuu-interactive] .uhuu\\:bg-gray-50,[data-uhuu-portal] .uhuu\\:bg-gray-50{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:bg-gray-100,[data-uhuu-portal] .uhuu\\:bg-gray-100,[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-200,[data-uhuu-portal] .uhuu\\:bg-gray-200{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:bg-gray-300,[data-uhuu-portal] .uhuu\\:bg-gray-300{background-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:var(--uhuu-color-gray-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-900,[data-uhuu-portal] .uhuu\\:bg-gray-900{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:bg-transparent,[data-uhuu-portal] .uhuu\\:bg-transparent{background-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-white,[data-uhuu-portal] .uhuu\\:bg-white,[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:var(--uhuu-color-white)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:color-mix(in oklab, var(--uhuu-color-white) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:object-contain,[data-uhuu-portal] .uhuu\\:object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .uhuu\\:object-top,[data-uhuu-portal] .uhuu\\:object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .uhuu\\:p-0,[data-uhuu-portal] .uhuu\\:p-0{padding:0}[data-uhuu-interactive] .uhuu\\:p-0\\.5,[data-uhuu-portal] .uhuu\\:p-0\\.5{padding:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:p-1,[data-uhuu-portal] .uhuu\\:p-1{padding:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:p-1\\.5,[data-uhuu-portal] .uhuu\\:p-1\\.5{padding:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:p-2,[data-uhuu-portal] .uhuu\\:p-2{padding:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:p-3,[data-uhuu-portal] .uhuu\\:p-3{padding:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:p-4,[data-uhuu-portal] .uhuu\\:p-4{padding:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:p-6,[data-uhuu-portal] .uhuu\\:p-6{padding:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:px-1\\.5,[data-uhuu-portal] .uhuu\\:px-1\\.5{padding-inline:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:px-2,[data-uhuu-portal] .uhuu\\:px-2{padding-inline:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:px-2\\.5,[data-uhuu-portal] .uhuu\\:px-2\\.5{padding-inline:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:px-3,[data-uhuu-portal] .uhuu\\:px-3{padding-inline:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:px-4,[data-uhuu-portal] .uhuu\\:px-4{padding-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:px-8,[data-uhuu-portal] .uhuu\\:px-8{padding-inline:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:py-0\\.5,[data-uhuu-portal] .uhuu\\:py-0\\.5{padding-block:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:py-1,[data-uhuu-portal] .uhuu\\:py-1{padding-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:py-1\\.5,[data-uhuu-portal] .uhuu\\:py-1\\.5{padding-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:py-2,[data-uhuu-portal] .uhuu\\:py-2{padding-block:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:py-2\\.5,[data-uhuu-portal] .uhuu\\:py-2\\.5{padding-block:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:py-3,[data-uhuu-portal] .uhuu\\:py-3{padding-block:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:py-16,[data-uhuu-portal] .uhuu\\:py-16{padding-block:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:py-20,[data-uhuu-portal] .uhuu\\:py-20{padding-block:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:pt-1,[data-uhuu-portal] .uhuu\\:pt-1{padding-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pt-2,[data-uhuu-portal] .uhuu\\:pt-2{padding-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-1,[data-uhuu-portal] .uhuu\\:pr-1{padding-right:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pr-2,[data-uhuu-portal] .uhuu\\:pr-2{padding-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-3,[data-uhuu-portal] .uhuu\\:pr-3{padding-right:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:pr-6,[data-uhuu-portal] .uhuu\\:pr-6{padding-right:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:pr-8,[data-uhuu-portal] .uhuu\\:pr-8{padding-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:pb-4,[data-uhuu-portal] .uhuu\\:pb-4{padding-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:pl-0,[data-uhuu-portal] .uhuu\\:pl-0{padding-left:0}[data-uhuu-interactive] .uhuu\\:pl-1,[data-uhuu-portal] .uhuu\\:pl-1{padding-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pl-2\\.5,[data-uhuu-portal] .uhuu\\:pl-2\\.5{padding-left:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:pl-8,[data-uhuu-portal] .uhuu\\:pl-8{padding-left:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:text-center,[data-uhuu-portal] .uhuu\\:text-center{text-align:center}[data-uhuu-interactive] .uhuu\\:text-left,[data-uhuu-portal] .uhuu\\:text-left{text-align:left}[data-uhuu-interactive] .uhuu\\:align-top,[data-uhuu-portal] .uhuu\\:align-top{vertical-align:top}[data-uhuu-interactive] .uhuu\\:font-mono,[data-uhuu-portal] .uhuu\\:font-mono{font-family:var(--uhuu-font-mono)}[data-uhuu-interactive] .uhuu\\:text-base,[data-uhuu-portal] .uhuu\\:text-base{font-size:var(--uhuu-text-base);line-height:var(--uhuu-tw-leading,var(--uhuu-text-base--line-height))}[data-uhuu-interactive] .uhuu\\:text-lg,[data-uhuu-portal] .uhuu\\:text-lg{font-size:var(--uhuu-text-lg);line-height:var(--uhuu-tw-leading,var(--uhuu-text-lg--line-height))}[data-uhuu-interactive] .uhuu\\:text-sm,[data-uhuu-portal] .uhuu\\:text-sm{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs,[data-uhuu-portal] .uhuu\\:text-xs{font-size:var(--uhuu-text-xs);line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs\\!,[data-uhuu-portal] .uhuu\\:text-xs\\!{font-size:var(--uhuu-text-xs)!important;line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))!important}[data-uhuu-interactive] .uhuu\\:text-\\[10px\\],[data-uhuu-portal] .uhuu\\:text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .uhuu\\:text-\\[11px\\],[data-uhuu-portal] .uhuu\\:text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .uhuu\\:leading-none,[data-uhuu-portal] .uhuu\\:leading-none{--uhuu-tw-leading:1;line-height:1}[data-uhuu-interactive] .uhuu\\:leading-snug,[data-uhuu-portal] .uhuu\\:leading-snug{--uhuu-tw-leading:var(--uhuu-leading-snug);line-height:var(--uhuu-leading-snug)}[data-uhuu-interactive] .uhuu\\:leading-tight,[data-uhuu-portal] .uhuu\\:leading-tight{--uhuu-tw-leading:var(--uhuu-leading-tight);line-height:var(--uhuu-leading-tight)}[data-uhuu-interactive] .uhuu\\:font-medium,[data-uhuu-portal] .uhuu\\:font-medium{--uhuu-tw-font-weight:var(--uhuu-font-weight-medium);font-weight:var(--uhuu-font-weight-medium)}[data-uhuu-interactive] .uhuu\\:font-normal,[data-uhuu-portal] .uhuu\\:font-normal{--uhuu-tw-font-weight:var(--uhuu-font-weight-normal);font-weight:var(--uhuu-font-weight-normal)}[data-uhuu-interactive] .uhuu\\:font-semibold,[data-uhuu-portal] .uhuu\\:font-semibold{--uhuu-tw-font-weight:var(--uhuu-font-weight-semibold);font-weight:var(--uhuu-font-weight-semibold)}[data-uhuu-interactive] .uhuu\\:tracking-wide,[data-uhuu-portal] .uhuu\\:tracking-wide{--uhuu-tw-tracking:var(--uhuu-tracking-wide);letter-spacing:var(--uhuu-tracking-wide)}[data-uhuu-interactive] .uhuu\\:tracking-widest,[data-uhuu-portal] .uhuu\\:tracking-widest{--uhuu-tw-tracking:var(--uhuu-tracking-widest);letter-spacing:var(--uhuu-tracking-widest)}[data-uhuu-interactive] .uhuu\\:whitespace-nowrap,[data-uhuu-portal] .uhuu\\:whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\),[data-uhuu-portal] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\){color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:text-blue-600,[data-uhuu-portal] .uhuu\\:text-blue-600{color:var(--uhuu-color-blue-600)}[data-uhuu-interactive] .uhuu\\:text-emerald-600,[data-uhuu-portal] .uhuu\\:text-emerald-600{color:var(--uhuu-color-emerald-600)}[data-uhuu-interactive] .uhuu\\:text-gray-400,[data-uhuu-portal] .uhuu\\:text-gray-400{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:text-gray-500,[data-uhuu-portal] .uhuu\\:text-gray-500{color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:text-gray-600,[data-uhuu-portal] .uhuu\\:text-gray-600{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:text-gray-700,[data-uhuu-portal] .uhuu\\:text-gray-700{color:var(--uhuu-color-gray-700)}[data-uhuu-interactive] .uhuu\\:text-gray-800,[data-uhuu-portal] .uhuu\\:text-gray-800{color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:text-gray-900,[data-uhuu-portal] .uhuu\\:text-gray-900{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:text-red-600,[data-uhuu-portal] .uhuu\\:text-red-600{color:var(--uhuu-color-red-600)}[data-uhuu-interactive] .uhuu\\:text-white,[data-uhuu-portal] .uhuu\\:text-white{color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:capitalize,[data-uhuu-portal] .uhuu\\:capitalize{text-transform:capitalize}[data-uhuu-interactive] .uhuu\\:uppercase,[data-uhuu-portal] .uhuu\\:uppercase{text-transform:uppercase}[data-uhuu-interactive] .uhuu\\:tabular-nums,[data-uhuu-portal] .uhuu\\:tabular-nums{--uhuu-tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--uhuu-tw-ordinal,) var(--uhuu-tw-slashed-zero,) var(--uhuu-tw-numeric-figure,) var(--uhuu-tw-numeric-spacing,) var(--uhuu-tw-numeric-fraction,)}[data-uhuu-interactive] .uhuu\\:underline-offset-2,[data-uhuu-portal] .uhuu\\:underline-offset-2{text-underline-offset:2px}[data-uhuu-interactive] .uhuu\\:opacity-0,[data-uhuu-portal] .uhuu\\:opacity-0{opacity:0}[data-uhuu-interactive] .uhuu\\:opacity-50,[data-uhuu-portal] .uhuu\\:opacity-50{opacity:.5}[data-uhuu-interactive] .uhuu\\:opacity-60,[data-uhuu-portal] .uhuu\\:opacity-60{opacity:.6}[data-uhuu-interactive] .uhuu\\:opacity-70,[data-uhuu-portal] .uhuu\\:opacity-70{opacity:.7}[data-uhuu-interactive] .uhuu\\:opacity-75,[data-uhuu-portal] .uhuu\\:opacity-75{opacity:.75}[data-uhuu-interactive] .uhuu\\:shadow,[data-uhuu-portal] .uhuu\\:shadow{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-2xl,[data-uhuu-portal] .uhuu\\:shadow-2xl{--uhuu-tw-shadow:0 25px 50px -12px var(--uhuu-tw-shadow-color,#00000040);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-lg,[data-uhuu-portal] .uhuu\\:shadow-lg{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-md,[data-uhuu-portal] .uhuu\\:shadow-md{--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-sm,[data-uhuu-portal] .uhuu\\:shadow-sm{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-xl,[data-uhuu-portal] .uhuu\\:shadow-xl{--uhuu-tw-shadow:0 20px 25px -5px var(--uhuu-tw-shadow-color,#0000001a), 0 8px 10px -6px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-0,[data-uhuu-portal] .uhuu\\:ring-0{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(0px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\){--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:outline,[data-uhuu-portal] .uhuu\\:outline{outline-style:var(--uhuu-tw-outline-style);outline-width:1px}[data-uhuu-interactive] .uhuu\\:outline-2,[data-uhuu-portal] .uhuu\\:outline-2{outline-style:var(--uhuu-tw-outline-style);outline-width:2px}[data-uhuu-interactive] .uhuu\\:outline-offset-2,[data-uhuu-portal] .uhuu\\:outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .uhuu\\:outline-blue-100,[data-uhuu-portal] .uhuu\\:outline-blue-100{outline-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--uhuu-tw-drop-shadow-size:drop-shadow(0 1px 2px var(--uhuu-tw-drop-shadow-color,#000c));--uhuu-tw-drop-shadow:var(--uhuu-tw-drop-shadow-size);filter:var(--uhuu-tw-blur,) var(--uhuu-tw-brightness,) var(--uhuu-tw-contrast,) var(--uhuu-tw-grayscale,) var(--uhuu-tw-hue-rotate,) var(--uhuu-tw-invert,) var(--uhuu-tw-saturate,) var(--uhuu-tw-sepia,) var(--uhuu-tw-drop-shadow,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-\\[1px\\],[data-uhuu-portal] .uhuu\\:backdrop-blur-\\[1px\\]{--uhuu-tw-backdrop-blur:blur(1px);backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-md,[data-uhuu-portal] .uhuu\\:backdrop-blur-md{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-md));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-sm,[data-uhuu-portal] .uhuu\\:backdrop-blur-sm{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-sm));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:transition,[data-uhuu-portal] .uhuu\\:transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-all,[data-uhuu-portal] .uhuu\\:transition-all{transition-property:all;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-colors,[data-uhuu-portal] .uhuu\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-opacity,[data-uhuu-portal] .uhuu\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-transform,[data-uhuu-portal] .uhuu\\:transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:duration-150,[data-uhuu-portal] .uhuu\\:duration-150{--uhuu-tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .uhuu\\:ease-in-out,[data-uhuu-portal] .uhuu\\:ease-in-out{--uhuu-tw-ease:var(--uhuu-ease-in-out);transition-timing-function:var(--uhuu-ease-in-out)}[data-uhuu-interactive] .uhuu\\:outline-none,[data-uhuu-portal] .uhuu\\:outline-none{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:select-none,[data-uhuu-portal] .uhuu\\:select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *){opacity:1}[data-uhuu-interactive] .uhuu\\:group-hover\\/corner\\:bg-gray-500:is(:where(.uhuu\\:group\\/corner):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/corner\\:bg-gray-500:is(:where(.uhuu\\:group\\/corner):hover *){background-color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *){border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *){--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .uhuu\\:group-data-\\[state\\=checked\\]\\/corner\\:bg-gray-900:is(:where(.uhuu\\:group\\/corner)[data-state=checked] *),[data-uhuu-portal] .uhuu\\:group-data-\\[state\\=checked\\]\\/corner\\:bg-gray-900:is(:where(.uhuu\\:group\\/corner)[data-state=checked] *){background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-50:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-50:is(:where(.uhuu\\:peer):disabled~*){opacity:.5}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*){opacity:.7}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:border-gray-400:focus-within{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-2:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-2:focus-within{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-gray-200:focus-within{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:hover\\:scale-105:hover,[data-uhuu-portal] .uhuu\\:hover\\:scale-105:hover{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover{border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-200:hover{border-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-300:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-300:hover{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-400:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-400:hover{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover{background-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-50:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-50:hover{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-200:hover{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-800:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-800:hover{background-color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-white:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-white:hover{background-color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-600:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-600:hover{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-900:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-900:hover{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:hover\\:underline:hover,[data-uhuu-portal] .uhuu\\:hover\\:underline:hover{text-decoration-line:underline}[data-uhuu-interactive] .uhuu\\:hover\\:opacity-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .uhuu\\:hover\\:shadow-lg:hover,[data-uhuu-portal] .uhuu\\:hover\\:shadow-lg:hover{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}}[data-uhuu-interactive] .uhuu\\:focus\\:w-40:focus,[data-uhuu-portal] .uhuu\\:focus\\:w-40:focus{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:focus\\:border-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-gray-400:focus{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:border-transparent:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .uhuu\\:focus\\:bg-gray-100:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-gray-100:focus{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:focus\\:bg-red-50:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-red-50:focus{background-color:var(--uhuu-color-red-50)}[data-uhuu-interactive] .uhuu\\:focus\\:text-gray-900:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-gray-900:focus{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus\\:text-red-700:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-red-700:focus{color:var(--uhuu-color-red-700)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-2:focus{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-400)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:color-mix(in oklab, var(--uhuu-color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-500:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-500:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-500)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-200:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-200:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-400:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-0:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-0:focus{--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-2:focus{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:outline-none:focus,[data-uhuu-portal] .uhuu\\:focus\\:outline-none:focus{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:focus-visible\\:border-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:border-gray-400:focus-visible{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-2:focus-visible{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-300:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-300:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-1:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-1:focus-visible{--uhuu-tw-ring-offset-width:1px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible{--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:outline-none:focus-visible{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:active\\:cursor-grabbing:active,[data-uhuu-portal] .uhuu\\:active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .uhuu\\:disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .uhuu\\:disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-40:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-50:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[highlighted\\]\\:border-gray-400[data-highlighted],[data-uhuu-portal] .uhuu\\:data-\\[highlighted\\]\\:border-gray-400[data-highlighted]{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--uhuu-tw-translate-x:calc(var(--uhuu-spacing) * 4);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:border-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:border-gray-900[data-state=checked]{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked]{background-color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-100[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-100[data-state=checked]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--uhuu-tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open]{--uhuu-tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--uhuu-tw-translate-x:0px;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--uhuu-color-gray-200)}@media (width>=40rem){[data-uhuu-interactive] .uhuu\\:sm\\:max-w-sm,[data-uhuu-portal] .uhuu\\:sm\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:sm\\:flex-row,[data-uhuu-portal] .uhuu\\:sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .uhuu\\:sm\\:justify-end,[data-uhuu-portal] .uhuu\\:sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:sm\\:text-left,[data-uhuu-portal] .uhuu\\:sm\\:text-left{text-align:left}}@media print{.uhuu\\:print\\:transform-none{transform:none}}[data-uhuu-interactive] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor],[data-uhuu-interactive] [data-uhuu-editor] [data-uhuu-paper],[data-uhuu-portal] [data-uhuu-editor] [data-uhuu-paper]{--uhuu-spacing:.25rem;--uhuu-font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-default-font-family:var(--uhuu-font-sans);--uhuu-color-white:#fff;--uhuu-color-black:#000;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-200:oklch(88.2% .059 254.128);--uhuu-color-blue-300:oklch(80.9% .105 251.813);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-blue-700:oklch(48.8% .243 264.376);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-gray-950:oklch(13% .028 261.692);--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-font-weight-bold:700;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-radius-xl:.75rem;--uhuu-shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--uhuu-shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--uhuu-shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--uhuu-shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--uhuu-shadow-2xl:0 25px 50px -12px #00000040;--uhuu-blur-sm:8px;--uhuu-blur-md:12px;box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .uhuu-page-options-trigger,[data-uhuu-portal] .uhuu-page-options-trigger{height:calc(var(--uhuu-spacing) * 7);width:calc(var(--uhuu-spacing) * 7);justify-content:center;align-items:center;gap:var(--uhuu-spacing);border-radius:var(--uhuu-radius-lg);background-color:var(--uhuu-color-gray-100);padding-inline:var(--uhuu-spacing);padding-block:calc(var(--uhuu-spacing) * .5);color:var(--uhuu-color-gray-600);display:flex}@media (hover:hover){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{color:var(--uhuu-color-gray-800)}}[data-uhuu-interactive] .uhuu-page-number,[data-uhuu-portal] .uhuu-page-number{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height));color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{gap:calc(var(--uhuu-spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{gap:calc(var(--uhuu-spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (width>=96rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--uhuu-color-neutral-50)}}@property --uhuu-tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-leading{syntax:"*";inherits:false}@property --uhuu-tw-font-weight{syntax:"*";inherits:false}@property --uhuu-tw-tracking{syntax:"*";inherits:false}@property --uhuu-tw-ordinal{syntax:"*";inherits:false}@property --uhuu-tw-slashed-zero{syntax:"*";inherits:false}@property --uhuu-tw-numeric-figure{syntax:"*";inherits:false}@property --uhuu-tw-numeric-spacing{syntax:"*";inherits:false}@property --uhuu-tw-numeric-fraction{syntax:"*";inherits:false}@property --uhuu-tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-ring-inset{syntax:"*";inherits:false}@property --uhuu-tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --uhuu-tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --uhuu-tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-blur{syntax:"*";inherits:false}@property --uhuu-tw-brightness{syntax:"*";inherits:false}@property --uhuu-tw-contrast{syntax:"*";inherits:false}@property --uhuu-tw-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-invert{syntax:"*";inherits:false}@property --uhuu-tw-opacity{syntax:"*";inherits:false}@property --uhuu-tw-saturate{syntax:"*";inherits:false}@property --uhuu-tw-sepia{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-drop-shadow-size{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-blur{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-brightness{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-contrast{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-invert{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-opacity{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-saturate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-sepia{syntax:"*";inherits:false}@property --uhuu-tw-duration{syntax:"*";inherits:false}@property --uhuu-tw-ease{syntax:"*";inherits:false}@layer base.uhuu-document{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[data-uhuu-reset=none]:not(#\\#),[data-uhuu-reset=none] :not(#\\#),[data-uhuu-reset=none]:not(#\\#):before,[data-uhuu-reset=none] :not(#\\#):before,[data-uhuu-reset=none]:not(#\\#):after,[data-uhuu-reset=none] :not(#\\#):after{all:revert-layer}}:root{--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff;--uhuu-thumbnail-caption:#0006;--uhuu-thumbnail-border:oklch(92.8% .006 264.531);--uhuu-thumbnail-border-strong:oklch(87.2% .01 258.338)}@media screen{html[data-uhuu-appearance=dark] [data-uhuu-editor]{color-scheme:dark;color:oklch(98.5% 0 0);--uhuu-shell-surface:oklch(27.4% .006 286.033);--uhuu-shell-on-inverse:oklch(21% .006 285.885);--uhuu-thumbnail-caption:oklch(21% .006 285.885/.92);--uhuu-thumbnail-border:oklch(37% .013 285.805);--uhuu-thumbnail-border-strong:oklch(44.2% .017 285.786);--uhuu-color-gray-50:oklch(30% .006 286);--uhuu-color-gray-100:oklch(33% .007 286);--uhuu-color-gray-200:oklch(100% 0 0/.1);--uhuu-color-gray-300:oklch(100% 0 0/.15);--uhuu-color-gray-400:oklch(66% .015 286);--uhuu-color-gray-500:oklch(70.5% .015 286.067);--uhuu-color-gray-600:oklch(87.1% .006 286.286);--uhuu-color-gray-700:oklch(92% .004 286.32);--uhuu-color-gray-800:oklch(96.7% .001 286.375);--uhuu-color-gray-900:oklch(98.5% 0 0);--uhuu-color-gray-950:oklch(98.5% 0 0);--uhuu-color-blue-50:oklch(62.3% .214 259.815/.15);--uhuu-color-blue-100:oklch(62.3% .214 259.815/.25);--uhuu-color-blue-200:oklch(62.3% .214 259.815/.35);--uhuu-color-red-50:oklch(70.4% .191 22.216/.15);--uhuu-color-red-600:oklch(70.4% .191 22.216);--uhuu-color-red-700:oklch(80.8% .114 19.571);--uhuu-color-emerald-100:oklch(76.5% .177 163.223/.15);--uhuu-color-emerald-600:oklch(76.5% .177 163.223);--uhuu-shadow-sm:0 1px 3px 0 #0006, 0 1px 2px -1px #0006;--uhuu-shadow-md:0 4px 6px -1px #0006, 0 2px 4px -2px #0006;--uhuu-shadow-lg:0 10px 15px -3px #00000080, 0 4px 6px -4px #00000080}html[data-uhuu-appearance=dark] [data-uhuu-editor] [data-uhuu-paper]{color-scheme:light;color:initial;scrollbar-color:auto;--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff}@layer base{html[data-uhuu-appearance=dark] [data-uhuu-editor],html[data-uhuu-appearance=dark] [data-uhuu-editor] :not([data-uhuu-paper],[data-uhuu-paper] *){border-color:oklch(100% 0 0/.1)}}html[data-uhuu-appearance=dark] body{background-color:oklch(24.5% .004 286)}html[data-uhuu-appearance=dark],html[data-uhuu-appearance=dark] .uhuu-zoom-pane{scrollbar-color:oklch(37% .013 285.805) transparent}html[data-uhuu-appearance=dark] [data-section-content]{scrollbar-color:auto}}:root{--uhuu-page-width:210mm;--uhuu-page-height:297mm;--uhuu-page-bleed:0mm;--uhuu-page-background:var(--background,#fff);--uhuu-outline-color:var(--outline-color,#d1d5db);--uhuu-sheet-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width:0mm;--uhuu-glue-width:0mm;--uhuu-paper-color:#fff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.uhuu-page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.uhuu-page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.uhuu-page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed) + var(--uhuu-sheet-growth,0px));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}@media print{.uhuu-screen-only{display:none!important}}@media screen{.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing,.25rem) * 6);outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.uhuu-pagination.horizontal_pages{justify-content:center;gap:calc(var(--spacing,.25rem) * 6);display:flex;overflow-x:auto;width:fit-content!important;min-width:fit-content!important}.uhuu-pagination.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.uhuu-pagination.two_pages .uhuu-page-sheet{flex-shrink:0}.uhuu-pagination.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}.uhuu-image-container{position:absolute;overflow:hidden}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .uhuu-image-geometry{width:100%;max-width:none;height:100%;max-height:none}.uhuu-image-inner .uhuu-image-geometry.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .uhuu-image-geometry.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .uhuu-image-geometry.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .uhuu-image-geometry.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .uhuu-image-geometry.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .uhuu-image-geometry.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .uhuu-image-geometry.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .uhuu-image-geometry.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .uhuu-image-geometry.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .uhuu-image-geometry.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .uhuu-image-geometry.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .uhuu-image-geometry.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*=group\\/section]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*=group\\/section]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*=group\\/section]{grid-column:1;justify-self:end}}
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
}, R = r(null), z = ({ config: e, children: t }) => /* @__PURE__ */ v(R.Provider, {
	value: e,
	children: t
}), te = "0.5.9", B = "data-uhuu-components", ne = "templateRuntime", re = "__uhuuComponentsAnnounced", V = (e) => {
	let t = e.$uhuu?.editor;
	return typeof t?.post == "function" && (t.post({
		action: ne,
		runtime: { "uhuu-components": te }
	}), !0);
};
function ie(e = typeof window > "u" ? void 0 : window) {
	if (e && !e[re]) {
		e[re] = !0;
		try {
			e.document?.documentElement?.setAttribute(B, te);
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
function pe() {
	let e = fe()?.uhuu_dynamic_options, t = e && typeof e == "object" ? e.brand_kit : void 0, n = t && typeof t == "object" ? t.brandKit : void 0;
	return n && typeof n == "object" && !Array.isArray(n) ? t : void 0;
}
var me = [], he = /* @__PURE__ */ new Map();
function ge(e) {
	if (e.source !== window.parent && e.source !== window || typeof e.data != "string") return;
	let t;
	try {
		t = JSON.parse(e.data);
	} catch {
		return;
	}
	if (t?.action === "shaked") {
		let e = t.data?.capabilities;
		me = Array.isArray(e) ? e.filter((e) => typeof e == "string") : [];
	}
	if (t?.action === "patchPayloadResult") {
		let e = he.get(t.requestId);
		if (!e) return;
		he.delete(t.requestId), clearTimeout(e.timer), e.resolve({
			ok: t.ok === !0,
			applied: Number(t.applied) || 0,
			rejected: Array.isArray(t.rejected) ? t.rejected : []
		});
	}
}
typeof window < "u" && typeof window.addEventListener == "function" && window.addEventListener("message", ge);
function _e(e) {
	return me.includes(e);
}
function ve(e, { timeout: t = 5e3 } = {}) {
	let n = ue()?.editor;
	if (typeof n?.post != "function") return Promise.reject(/* @__PURE__ */ Error("No uhuu editor to write to"));
	let r = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
	return new Promise((i, a) => {
		let o = setTimeout(() => {
			he.delete(r), a(/* @__PURE__ */ Error(`The editor did not answer within ${t} ms`));
		}, t);
		he.set(r, {
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
function ye() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
//#endregion
//#region src/uhuu/utility/warn-once.js
var be = /* @__PURE__ */ new Set();
function xe(e, ...t) {
	be.has(e) || (be.add(e), console.warn(...t));
}
function Se(e, ...t) {
	be.has(e) || (be.add(e), console.debug(...t));
}
function Ce(e, ...t) {
	be.has(e) || (be.add(e), console.error(...t));
}
function we(e) {
	e && xe(`image:${e}`, `[uhuu-components] Image ${e} failed to load, so it prints empty. Check the URL, or pass onError to render a fallback.`);
}
//#endregion
//#region src/uhuu/utility/diagnostics.ts
var Te = r(!1);
function Ee() {
	return c(Te) || de() || ye();
}
//#endregion
//#region src/uhuu/pagination-static/view.ts
var De = ["print", "screen"];
function Oe(e) {
	if (le() || e == null) return "print";
	if (De.includes(e)) return e;
	let t = JSON.stringify(e) ?? String(e);
	return xe(`view:${t}`, `[uhuu-components] PageEditor view ${t} is not "print" or "screen"; the pages are drawn for print.`), "print";
}
var ke = r("print"), Ae = "data-uhuu-view", je = /* @__PURE__ */ new Set();
function Me(e, t = !0) {
	let n = u();
	ce(() => {
		if (t && typeof document < "u") return je.add(n), document.documentElement.setAttribute(Ae, e), () => {
			je.delete(n), je.size || document.documentElement.removeAttribute(Ae);
		};
	}, [
		n,
		e,
		t
	]);
}
function Ne() {
	let e = c(ke);
	return le() ? "print" : e;
}
//#endregion
//#region src/uhuu/pagination-static/pagination-static.tsx
var Pe = t.createContext(!1);
function Fe(e) {
	let [t] = h(() => e ? se.createScope() : null);
	ce(() => (t?.commit([], {}), () => t?.suspend()), [t]), l(() => () => t?.unmount(), [t]);
}
var Ie = ({ children: e, className: n, setup: r }) => {
	let i = ee.pageParams("static", r), a = JSON.stringify(ee.resolveCssVars(r)), o = !t.useContext(Pe);
	Fe(o), Me("print", o), ce(() => {
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
	return /* @__PURE__ */ v(z, {
		config: i,
		children: /* @__PURE__ */ v("div", {
			className: s,
			children: e
		})
	});
}, Le = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
	let l = c(R), u = a ?? l?.page?.showBleed ?? !1;
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
Le.displayName = "Sheet";
//#endregion
//#region src/uhuu/pagination-static/flow-assets.js
var Re = 1e4;
function ze(e, { begin: t, onReady: n, doc: r = e.ownerDocument, waitMs: i = Re }) {
	let a = /* @__PURE__ */ new Map(), o = r?.fonts, s = !1, c = null, l = (e) => {
		let n = t(), r = setTimeout(() => {
			n(), xe(`asset-wait:${e}`, `[uhuu-components] ${e} is still loading after ${Math.round(i / 1e3)} s; pagination stops waiting for it and measures again if it arrives.`);
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
			a.set(t, r), t.addEventListener("load", i), t.addEventListener("error", () => we(t.currentSrc || t.src), { once: !0 }), t.addEventListener("error", i);
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
function Be(e = !0, t) {
	let n = m(t);
	ce(() => {
		n.current = t;
	}, [t]), ce(() => {
		if (!e) return;
		let t = n.current ? `usePaginationHold(${JSON.stringify(n.current)})` : "usePaginationHold() without a label (pass one, usePaginationHold(pending, \"Map\"), to name it)";
		return se.hold({
			label: t,
			waitMs: Re
		});
	}, [e]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-context.ts
var Ve = "data-uhuu-flow-continuation-copy", He = r(null), Ue = 1e3;
function We(e, { fallbackMs: t = 100, win: n } = {}) {
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
var Ge = /* @__PURE__ */ T({
	getEffectiveScale: () => qe,
	getOuterHeight: () => Je,
	hashString: () => pt,
	parseAbsoluteLength: () => ct,
	parseKeepWithNext: () => Qe,
	parseLineCount: () => Xe,
	readFlowItemElements: () => at,
	readFlowTextLines: () => ft,
	readHeaderGroupGrows: () => nt,
	readHeaderGroupHeights: () => rt,
	readHeaderGroupKey: () => et,
	readHeaderGroupRepeats: () => tt,
	readItemFlowTexts: () => lt,
	readItemMeta: () => Ye,
	readUnstackedItem: () => ot,
	readUnwrappedHeights: () => it,
	serializeKeepWithNext: () => $e,
	serializeLineCount: () => Ze
}), Ke = "data-uhuu-flow-text";
function qe(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function Je(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function Ye(e) {
	let t = {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: Qe(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	}, n = Xe(e.dataset.uhuuFlowOrphans), r = Xe(e.dataset.uhuuFlowWidows);
	return n !== void 0 && (t.orphans = n), r !== void 0 && (t.widows = r), e.dataset.uhuuFlowGrowSheet === "true" && (t.growSheet = !0), t;
}
function Xe(e) {
	if (!e) return;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t >= 1 ? t : void 0;
}
function Ze(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? String(Math.floor(e)) : void 0;
}
function Qe(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function $e(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function et(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function tt(e) {
	let t = {};
	for (let n of e) {
		let e = et(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function nt(e) {
	let t = {};
	for (let n of e) {
		let e = et(n);
		e && n.dataset.uhuuFlowHeaderGrowSheet === "true" && (t[e] = !0);
	}
	return t;
}
function rt(e, t = 1, n) {
	let r = {};
	for (let i of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = i.dataset.uhuuFlowHeaderGroupKey;
		e && (r[e] = Math.max(r[e] ?? 0, n?.get(i) ?? Je(i, t)));
	}
	return r;
}
function it(e, t, n = 1) {
	let r = /* @__PURE__ */ new Map(), i = e.getBoundingClientRect().top;
	for (let e of Array.from(t.children)) {
		if (!(e instanceof HTMLElement) || !e.getClientRects().length) continue;
		let t = e.getBoundingClientRect().bottom, a = Math.max(0, t - i) / n;
		i = Math.max(i, t), e.dataset.uhuuFlowItem === "true" ? r.set(e, a) : e.dataset.uhuuFlowGroupHeader === "true" && r.set(e, Math.max(a, Je(e, n)));
	}
	return r;
}
function at(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function ot(e, t, n) {
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
var st = {
	px: 1,
	mm: 96 / 25.4,
	cm: 96 / 2.54,
	in: 96,
	pt: 96 / 72,
	pc: 16
};
function ct(e) {
	if (typeof e == "number") return Number.isFinite(e) && e >= 0 ? e : void 0;
	if (typeof e != "string") return;
	let t = /^\s*(\d+(?:\.\d+)?|\.\d+)\s*(px|mm|cm|in|pt|pc)\s*$/i.exec(e);
	return t ? Number.parseFloat(t[1]) * st[t[2].toLowerCase()] : /^\s*0\s*$/.test(e) ? 0 : void 0;
}
function lt(e) {
	let t = e.closest("[data-uhuu-flow=\"true\"]");
	return Array.from(e.querySelectorAll(`[${Ke}]`)).filter((e) => e.closest("[data-uhuu-flow=\"true\"]") === t);
}
var ut = /[\p{L}\p{M}]/u;
function dt(e) {
	let t = (t) => Number.parseFloat(e.getPropertyValue(t) || "0") || 0;
	return {
		top: t("border-top-width") + t("padding-top"),
		bottom: t("border-bottom-width") + t("padding-bottom")
	};
}
function ft(e, t, n = 1, r) {
	let i = lt(e);
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
	let c = Xe(o.getPropertyValue("orphans")), l = Xe(o.getPropertyValue("widows")), u = [], d = [], f = 0, p = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
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
		if (!ut.test(r) || !ut.test(x(n + 1))) return !1;
		let i = b(n), a = u[i], o = n - d[i];
		m.setStart(a, o), m.setEnd(a, o + 1);
		let s = 0;
		for (let e of Array.from(m.getClientRects())) {
			let n = (e.top + e.bottom) / 2;
			e.height > 0 && n >= h[t].top && n <= h[t].bottom && (s += 1);
		}
		return s >= 2;
	}), C = a.getBoundingClientRect(), w = dt(o), T = e.getBoundingClientRect(), E = Number.parseFloat(window.getComputedStyle(e).marginBottom || "0") || 0, D = T.bottom + (E - t) * n, O = (e) => (e - D) / n, k = C.top + w.top * n, A = C.bottom - w.bottom * n, j = [];
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
function pt(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-core.js
function mt(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function ht(e) {
	return typeof e == "string" && e ? e : null;
}
function gt(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
var _t = 2;
function vt(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : _t;
}
var yt = .01, bt = .01;
function xt(e, t) {
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
		].every((e) => typeof e == "number" && Number.isFinite(e)) || n < t - yt || t < i - yt || o <= a || o > r) return null;
		i = n, a = o;
	}
	return n[n.length - 1].bottom - n[0].top > t + 1 ? null : e;
}
function St(e, t, n, r) {
	let { lines: i } = e;
	return Math.max(0, i[0].top + (i[r].bottom - i[n].top) + (t - i[i.length - 1].bottom));
}
function Ct({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = ht(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : ht(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : ht(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
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
function wt({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, continuationHeight: i, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, headerGroupGrows: c = {}, previousHeaderGroupKey: l, onUnplaceableItem: u, lines: d, breakReserve: f, window: p, maxChunks: m = 0, fixedSheets: h = !1, metrics: g } = {}) {
	let _ = p?.indexes, v = p?.offset ?? 0, y = _ ? Math.max(0, _.length - v) : e.length, b = _ ? (e) => _[v + e] : (e) => e, x = mt(r) || Infinity, S = mt(i) || x, C = [{
		indexes: [],
		keys: []
	}], w = 0, T = () => C.length > 1 ? S : x, E = mt(f), D = /* @__PURE__ */ new Map(), O = () => {
		let e = T();
		return E && E < e && D.get(k()) ? e - E : e;
	}, k = () => C[C.length - 1], A = () => {
		let e = k().indexes;
		return e.length ? e[e.length - 1] : null;
	}, j = () => k().indexes.length > 0 || !!k().unplaceable, M = (e) => ht(a[b(e)]), N = (e) => mt(o[e] ?? 0), P = (e) => s[e] !== !1, F = (e, t) => {
		let n = M(e);
		return n ? t == null ? (e > 0 ? M(e - 1) : ht(l)) !== n || P(n) : M(t) !== n : !1;
	}, I = (t, n) => {
		let r = M(t);
		return mt(e[b(t)]) + (r && F(t, n) ? N(r) : 0);
	}, L = (e) => !h && !!(n[b(e)] ?? {}).growSheet, ee = (e) => e > Math.max(T(), S) + bt, R = (e) => !h && !!(e && c[e]), z = (e) => {
		let t = M(e);
		if (!R(t) || (e > 0 ? M(e - 1) : ht(l)) === t) return -1;
		let n = e;
		for (; n + 1 < y && M(n + 1) === t;) n += 1;
		return n;
	}, te = (t, n, r) => {
		let i = I(t, r);
		for (let r = t + 1; r <= n; r += 1) g && (g.scannedItems += 1), i += mt(e[b(r)]);
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
		let r = n[b(t)] ?? {}, i = mt(e[b(t)]), a = r.avoidBreakInside ? null : xt(d[b(t)], i);
		if (a) {
			let e = M(t), n = e ? N(e) : 0, r = Math.min(x, S);
			for (let e = 0; e < a.lines.length; e += 1) if (St(a, i, e, e) + n > r + bt) {
				a = null;
				break;
			}
		}
		let o = a ? {
			entry: a,
			height: i,
			count: a.lines.length,
			orphans: vt(r.orphans ?? a.orphans),
			widows: vt(r.widows ?? a.widows)
		} : null;
		return V.set(t, o), o;
	}, H = /* @__PURE__ */ new Map(), oe = null, se = null, ce = () => {
		oe = Array(y + 1).fill(0), se = Array(y + 1).fill(!1);
		for (let e = y - 1; e >= 0; --e) {
			oe[e] = oe[e + 1] + I(e, e > 0 ? e - 1 : null);
			let t = n[b(e)] ?? {}, r = e + 1 < y ? n[b(e + 1)] ?? {} : {};
			se[e] = se[e + 1] || !!r.breakBefore || !!(t.breakAfter && e < y - 1);
		}
	}, le = (e, t, n) => se[e] ? !1 : (t > 0 ? St(n.entry, n.height, t, n.count - 1) + re(e) : I(e, null)) + oe[e + 1] <= T() + bt || e === y - 1 && t === 0 && !(ie(e) && ae(e)), ue = (e, t = 0, n = null) => {
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
			let c = z(t), l = c >= 0 ? te(t, c, o) : I(t, o);
			if ((c >= 0 || L(t)) && ee(l)) break;
			let u = ie(t) && n + (r + a + l) > O() + bt ? ae(t) : null;
			if (u && u.count >= u.orphans + u.widows) {
				a += l - u.height + St(u.entry, u.height, 0, u.orphans - 1);
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
		let i = fe(e, gt(t.keepWithNext), {
			currentHeight: w,
			ownHeight: r,
			stopEarly: Number.isFinite(O())
		});
		return w + r + i <= O();
	}, ve = (e, t, n, r) => {
		let { entry: i, height: a, count: o, orphans: s, widows: c } = r, l = (e, t) => St(i, a, e, t), u = (e, t, n) => {
			let r = e, i = t, a = e - 1;
			for (; r <= i;) {
				let t = r + i >> 1;
				l(e, t) <= n + bt ? (a = t, r = t + 1) : i = t - 1;
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
			if (m <= p + bt) {
				if (t) {
					let t = fe(e, gt(n.keepWithNext), {
						currentHeight: w,
						ownHeight: m,
						stopEarly: Number.isFinite(O())
					});
					if (w + m + t > O() + bt) {
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
		let i = n[b(r)] ?? {}, a = mt(e[b(r)]), o = t[b(r)] ?? String(b(r));
		i.breakBefore && pe();
		let s = B(r), c = r > 0 ? B(r - 1) : null;
		s && s !== c && j() && w + de(r, s, A()) > O() && pe(), ue(r);
		let l = z(r);
		if (l >= 0) {
			let e = te(r, l, A());
			!ee(e) && j() && w + e > O() && (pe(), ue(r), e = te(r, l, null)), w + e > O() ? he(r, l, e) : (me(r, l), w += e), (n[b(l)] ?? {}).breakAfter && l < y - 1 && pe(), r = l;
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
		let p = j(), m = p ? fe(r, gt(i.keepWithNext), {
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
	let xe = Et(be, H, (e) => ae(e).entry);
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
function Tt(e, t, n, r) {
	let i = [];
	for (let a = t; a <= n; a += 1) e[a].hyphen && a !== e.length - 1 && (a === n && r || i.push(e[a + 1].start));
	return i.length ? { hyphens: i } : {};
}
function Et(e, t, n) {
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
				...Tt(a, o, s, c === t.length - 1)
			};
		});
	}
	return r;
}
function Dt(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + mt(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + mt(n[t.groupKey]), 0);
}
function Ot(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function kt(e, t, n, r, i, a) {
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
function At(e, t, n, r, i, a, o, s) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let c = Ot(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let l = kt(wt({
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
		height: Dt(l, e.heights ?? [], c.headerGroupHeights ?? {})
	};
}
function jt(e) {
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
function Mt({ nodes: e = [], itemCount: t = 0, flowId: n } = {}) {
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
function Nt(e, t, n, r, i) {
	let a = mt(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	if (r.chunk.growth > 0) return "unless-grown";
	let o = t[n];
	if (o === void 0) return "no";
	let s = n + r.consumed;
	if (s >= t.length) return "no";
	let c = e.metas?.[o] ?? {}, l = e.metas?.[t[s]] ?? {}, u = gt(c.keepWithNext);
	return u > 0 && r.consumed <= u || c.avoidBreakInside && c.groupKey && l.avoidBreakInside && l.groupKey === c.groupKey ? "compare" : "no";
}
function Pt(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function Ft({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, continuationHeight: a, headerGroupKeys: o = [], headerGroupHeights: s = {}, headerGroupRepeats: c = {}, headerGroupGrows: l = {}, columnHeaderGroupHeights: u = {}, columnHeaderGroupRepeats: d = {}, onUnplaceableItem: f, metrics: p } = {}) {
	Mt({
		nodes: e,
		itemCount: t.length
	});
	let m = mt(i) || Infinity, h = mt(a) || m, g = {
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
		Pt(y()) && (_.push({
			indexes: [],
			keys: [],
			layout: []
		}), v = 0);
	}, w = (e) => {
		y().indexes.push(...e.indexes ?? []), y().keys.push(...e.keys ?? []), !y().unplaceable && e.unplaceable && (y().unplaceable = e.unplaceable), e.unplaceable && f?.(e.unplaceable);
	}, T = (e) => {
		let n = String(e.id ?? "columns"), i = jt(e).columns.map((e) => e.id), a = (e.indexes ?? []).filter((e) => Number.isInteger(e) && e >= 0 && e < t.length);
		if (!a.length || !i.length) return;
		let o = () => ({
			indexes: [],
			keys: []
		}), s = (e, t, r) => {
			let o = At(g, a, e, t, n, i[0], e > 0 ? a[e - 1] : void 0);
			return o.chunk.unplaceable && (o.chunk.unplaceable.columnId = r), o;
		}, c = (e, t) => {
			let n = Nt(g, a, e, t, x);
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
			for (let e = n; e < a.length; e += 1) o += mt(t[a[e]]);
			let s = r, c = o / i.length, f = u(r);
			for (; f - c > .5;) {
				let e = (c + f) / 2, t = l(n, e);
				d(t) ? (s = t, f = Math.min(e, u(t))) : c = e;
			}
			return s;
		}, m = 0;
		for (; m < a.length;) {
			b() - v <= 0 && Pt(y()) && C(), r[a[m]]?.breakBefore && Pt(y()) && C();
			let e = b() - v;
			Pt(y()) && c(m, s(m, e, i[0])) && (C(), e = b());
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
				b() - v <= 0 && Pt(y()) && C(), r[i[o]]?.breakBefore && Pt(y()) && C();
				let e = o > 0 ? i[o - 1] : void 0, t = At(g, i, o, b() - v, void 0, void 0, e, S);
				if (Pt(y())) {
					let n = Nt(g, i, o, t, x);
					if (n !== "no") {
						p && (p.freshPageAttempts += 1);
						let r = At(g, i, o, x, void 0, void 0, e, S), a = n === "unless-grown" ? !(r.chunk.growth > 0) : r.consumed > t.consumed;
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
			b() - v <= 0 && Pt(y()) && C(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && Pt(y()) && C();
			let e = b() - v, t = a.map((t) => At(g, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (p && (p.freshPageAttempts += 1), At(g, e.indexes, e.cursor, x, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (Pt(y()) && a.some((e, n) => {
				let r = Nt(g, e.indexes, e.cursor, t[n], x);
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
	let E = _.filter(Pt);
	return E.length ? (p && (p.pages = E.length), E) : (p && (p.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-plan.ts
var It = wt, Lt = Ft, Rt = ":scope > [data-uhuu-flow-layout-node=\"columns\"], :scope > [data-uhuu-flow-layout-node=\"flowingColumns\"]";
function zt(e) {
	return Number.parseFloat(e || "0") || 0;
}
function Bt(e, t) {
	let n = e.dataset.uhuuFlowId ?? "", r = (e) => {
		let t = window.getComputedStyle(e);
		return zt(t.paddingTop) + zt(t.paddingBottom) + zt(t.borderTopWidth) + zt(t.borderBottomWidth);
	};
	for (let i of Array.from(e.querySelectorAll(Rt))) {
		let e = window.getComputedStyle(i), a = zt(e.marginTop) + zt(e.marginBottom), o = i.dataset.uhuuFlowLayoutId ?? "";
		if (r(i) > .01 || a > .01) throw TypeError(`[uhuu-components] Flow.Columns "${n}" column group "${o}" has vertical margin, padding or borders (${Math.round(r(i) + a)}px), which measurement cannot see; put vertical spacing on items with getColumnItemProps.`);
		if (i.dataset.uhuuFlowLayoutNode === "flowingColumns") {
			let e = Array.from(i.querySelectorAll(":scope > [data-uhuu-flow-column]")).map((e) => e.getBoundingClientRect().width / t);
			if (e.some((t) => Math.abs(t - e[0]) > .5)) throw TypeError(`[uhuu-components] Flow.Columns "${n}" flowing column group "${o}" has columns of different widths (${e.map((e) => Math.round(e)).join(", ")}px): its items are measured in the first column and placed in any, so its columns need one width.`);
		}
		let s = [];
		for (let e of Array.from(i.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let i = window.getComputedStyle(e), a = zt(i.marginTop) + zt(i.marginBottom);
			if (r(e) > .01 || a > .01 || zt(i.rowGap) > .01 || zt(i.minHeight) > .01 || i.maxHeight !== "none") {
				let t = r(e) > .01 ? "padding or borders" : a > .01 ? "vertical margin" : zt(i.rowGap) > .01 ? "row-gap" : zt(i.minHeight) > .01 ? "min-height" : "max-height";
				throw TypeError(`[uhuu-components] Flow.Columns "${n}" column "${e.dataset.uhuuFlowColumn ?? ""}" in group "${o}" has ${t}, which measurement cannot see; put vertical spacing on items with getColumnItemProps.`);
			}
			let c = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + Je(n, t), 0);
			s.push(c);
		}
		let c = Math.max(0, ...s);
		if (Je(i, t) > c + 1) throw TypeError(`[uhuu-components] Flow.Columns "${n}" column group "${o}" is ${Math.round(Je(i, t) - c)}px taller than its columns' items: a fixed height or wrapping on the group or a column adds space measurement cannot see. Let the group take its columns' height.`);
	}
}
function Vt(e, t, n) {
	let r = e.getBoundingClientRect();
	return n !== void 0 && r.height > 0 && r.bottom > n + .5 ? {
		height: Math.max(0, n - r.top) / t,
		overflow: (r.bottom - n) / t
	} : {
		height: r.height ? r.height / t : e.clientHeight,
		overflow: 0
	};
}
function Ht(e) {
	return e.closest(".uhuu-page-sheet")?.getBoundingClientRect().bottom;
}
function Ut(e, t, n) {
	let r = e.dataset.uhuuFlowItemCount;
	if (r === void 0) return;
	let i = Number.parseInt(r, 10);
	Number.isInteger(i) && i !== t.length && n.onUnmarkedItems?.(t.length, i);
}
var Wt = (e) => e === void 0 ? void 0 : Math.round(e * 100) / 100, Gt = "[data-uhuu-flow-text]", Kt = (e) => e ? {
	lines: e.lines.map(({ top: e, bottom: t, start: n, hyphen: r }) => r ? [
		Wt(e),
		Wt(t),
		n,
		1
	] : [
		Wt(e),
		Wt(t),
		n
	]),
	end: e.end,
	justify: e.justify
} : null;
function qt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return Jt(e, t, n);
	let i = at(t);
	if (Ut(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = ot(e, t, i);
	a && n.onUnstackedItem?.(a);
	let o = qe(e), { height: s, overflow: c } = Vt(e, o, n.clipBottom);
	c > 0 && n.onAreaOverflow?.(c);
	let l = Number.isFinite(s) && s > 0, u = n.breakReserve && n.breakReserve > 0 ? n.breakReserve : void 0, d = t.dataset.uhuuFlowAsChild === "true" ? it(e, t, o) : void 0, f = i.map((e) => d?.get(e) ?? Je(e, o)), p = i.map(Ye), m = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), h = i.map(et), g = tt(i), _ = nt(i), v = rt(t, o, d), y = l ? n.continuationHeight : void 0, b = [], x = l ? s : f.reduce((e, t) => e + t, 0) + Object.values(v).reduce((e, t) => e + t, 0), S = !!t.querySelector(Gt), C = /* @__PURE__ */ new Map(), w = S ? Array(i.length) : void 0;
	return w && i.forEach((e, t) => {
		e.querySelector(Gt) && Object.defineProperty(w, t, {
			enumerable: !0,
			get: () => (C.has(t) || C.set(t, ft(e, f[t], o, n.onIssue)), C.get(t))
		});
	}), l || n.onZeroHeight?.(), {
		flowId: r,
		chunks: It({
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
		signature: pt(JSON.stringify({
			version: S ? 4 : 2,
			flowId: r,
			availableHeight: Math.round(x * 100) / 100,
			continuationHeight: Wt(y),
			...u ? { breakReserve: Wt(u) } : {},
			heights: f.map((e) => Math.round(e * 100) / 100),
			keys: m,
			metas: p,
			headerGroupKeys: h,
			headerGroupHeights: v,
			...Object.keys(_).length ? { headerGroupGrows: _ } : {},
			headerGroupRepeats: g,
			unplaceableItems: b,
			...S ? { lines: [...C].sort(([e], [t]) => e - t).map(([e, t]) => [e, Kt(t)]) } : {}
		})),
		unplaceableItems: b
	};
}
function Jt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = at(t);
	if (Ut(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = qe(e);
	Bt(t, a), t.querySelector(Gt) && n.onIssue?.("flow-text-in-columns"), n.breakReserve && n.onIssue?.("break-reserve-in-columns");
	let { height: o, overflow: s } = Vt(e, a, n.clipBottom);
	s > 0 && n.onAreaOverflow?.(s);
	let c = Number.isFinite(o) && o > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0), m = t.dataset.uhuuFlowAsChild === "true" ? it(e, t, a) : void 0;
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = m?.get(e) ?? Je(e, a), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = Ye(e), p[t] = et(e));
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
	}), g = tt(i), _ = nt(i), v = rt(t, a, m), y = c ? n.continuationHeight : void 0, b = {}, x = {};
	for (let e of Array.from(t.querySelectorAll(Rt))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			b[t] = {}, x[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				b[t][e] = rt(n, a), x[t][e] = tt(r);
			}
		}
	}
	let S = [], C = c ? o : u.reduce((e, t) => e + t, 0) + Object.values(v).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Lt({
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
		signature: pt(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(C * 100) / 100,
			continuationHeight: Wt(y),
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
var Yt = {
	"multiple-flow-text": "an item holds more than one Flow.Text, so it is not split. Give each item one FlowText.",
	"inline-flow-text": "a Flow.Text is not a block element (as=\"span\"?), so its lines are not its own and its item is not split. Keep the default `as=\"div\"` or another block element.",
	"rewrapping-text-wrap": "a Flow.Text has text-wrap: balance or pretty, which re-flows each piece of a split item, so a piece may not match its planned lines. Use text-wrap: wrap on split text.",
	"flow-text-in-columns": "Flow.Columns does not split Flow.Text items; they render whole.",
	"break-reserve-in-columns": "Flow.Columns does not keep breakReserve; its pages use their full region."
};
function Xt(e, t) {
	for (let n of Array.from(e.querySelectorAll(`[${Ve}] [data-uhuu-flow="true"]`))) if (n.dataset.uhuuFlowId === t) return n.closest("[data-uhuu-flow-area]");
	return null;
}
function Zt({ children: t, className: n = "", style: r, onFlowMeasurement: i, measureContinuation: a = !1, breakReserve: o }) {
	let s = e.useContext(He), c = e.useRef(null), l = e.useId(), u = e.useRef(null), d = e.useRef(s), f = e.useRef(i), p = Ee(), m = e.useRef(p), h = e.useRef(!1), g = ct(o), _ = e.useRef(""), y = e.useRef(!1), b = e.useRef(!1), x = e.useRef(/* @__PURE__ */ new Set()), S = e.useRef(""), C = e.useRef(""), w = e.useRef(""), T = e.useRef(/* @__PURE__ */ new Set()), E = e.useRef(!1), D = e.useRef(""), O = e.useRef("");
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
			t && !i && (i = k?.begin()), r === null && (r = We(() => {
				r = null;
				try {
					P();
				} catch (t) {
					_.current = "", k?.fail(t), e.setAttribute("data-uhuu-flow-error", String(t));
					let n = e.querySelector("[data-uhuu-flow=\"true\"]")?.dataset.uhuuFlowId ?? "";
					Ce(`flow-measure:${s.pageKey ?? ""}:${n}:${String(t)}`, `[uhuu-components] Flow.Items "${n}" on page "${s.pageKey ?? ""}": measurement failed, so pagination reports an error:`, t);
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
			let n = Xt(t, e);
			if (n !== p && (p && o?.unobserve(p), n && o?.observe(n), p = n), !n) return { failure: "missing-continuation-flow" };
			let { height: r } = Vt(n, qe(n), Ht(n));
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
				}, Ue)), M("missing-flow"), k?.clear();
				return;
			}
			v !== null && (clearTimeout(v), v = null);
			let o = a ? Array.from(t.querySelectorAll("[data-uhuu-flow=\"true\"]")).filter((e) => e.dataset.uhuuFlowId === a && !e.closest("[data-uhuu-flow-continuation-copy]")).length : 0, c = a ? o > 1 ? "duplicate-flow-id" : null : "missing-flow-id";
			if (c && S.current !== `${c}:${a}` && (S.current = `${c}:${a}`, console.warn(`[uhuu-components] Flow.Items ${a ? `id "${a}" is used by more than one Flow` : "has no id"} on page "${s?.pageKey ?? ""}". Give each Flow on a page a stable, unique id.`)), !a) {
				_.current = "", M("missing-flow-id"), k?.fail("missing-flow-id");
				return;
			}
			let d = c ?? (r.length > 1 ? "multiple-flows-in-area" : null), p = n ? N(a) : void 0, E = qt(e, i, {
				continuationHeight: p?.height,
				breakReserve: g,
				clipBottom: Ht(e),
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
					T.current.has(t) || (T.current.add(t), console.warn(`[uhuu-components] Flow.Items "${a}": ${Yt[e]}`));
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
		let F = ze(t, {
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
function Qt({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s, measureContinuation: c, breakReserve: l }) {
	return /* @__PURE__ */ y("div", {
		className: `uhuu-flow-page ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ v(Zt, {
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
var $t = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.abbr.b.bdi.bdo.br.cite.code.data.del.dfn.em.i.ins.kbd.mark.s.samp.small.span.strong.sub.sup.time.u.var.wbr".split(".")), en = /* @__PURE__ */ new Set(["br"]);
function tn(e) {
	return typeof e == "string" ? e : typeof e == "function" ? e.displayName || e.name || "Component" : e && typeof e == "object" && e.displayName || "Component";
}
function nn(t) {
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
					if (!$t.has(t.type) || o.dangerouslySetInnerHTML) {
						r = {
							reason: "block-content",
							name: t.type
						};
						return;
					}
					en.has(t.type) && i.push(n.length), a(o.children);
					return;
				}
				r = {
					reason: "component-content",
					name: tn(t.type)
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
var rn = (e) => e === " " || e === "\n" || e === "	" || e === "\r" || e === "\f", an = "­";
function on(t, { text: n, breaks: r = [] }, { from: i, to: a, part: o, parts: s, hyphens: c = [] }) {
	let l = o === 0, u = o === s - 1, d = l ? 0 : Math.max(0, i), f = u ? n.length : Math.min(n.length, a), p = (e) => n[e - 1] === "\n" || r.includes(e);
	if (!l) {
		let e = d;
		for (; e < f && rn(n[e]);) e += 1;
		let t = n.slice(d, e).lastIndexOf("\n");
		t >= 0 ? d += t + 1 : p(d) || (d = e);
	}
	let m = !1, h = !1;
	if (!u) {
		if (c.includes(f) && !r.includes(f)) n[f - 1] === an && --f, m = !0;
		else {
			let e = f;
			for (; e > d && rn(n[e - 1]);) --e;
			(r.includes(f) || n.slice(e, f).includes("\n")) && (h = !0), f = e;
		}
	}
	let g = c.filter((e) => e > d && e < f && n[e - 1] !== an), _ = 0, v = !1, y = (t) => {
		if (t == null || typeof t == "boolean") return null;
		if (typeof t == "string" || typeof t == "number" || typeof t == "bigint") {
			let e = String(t), n = _, r = _ + e.length;
			_ = r;
			let i = Math.max(n, d), a = Math.min(r, f);
			if (!(i < a)) return null;
			let o = "", s = i;
			for (let t of g) t <= i || t > a || (o += e.slice(s - n, t - n) + an, s = t);
			return o += e.slice(s - n, a - n), m && !v && f <= r && (o += "-", v = !0), o;
		}
		if (Array.isArray(t)) return t.map(y);
		if (!e.isValidElement(t)) return null;
		let n = _;
		if (typeof t.type == "string" && en.has(t.type)) {
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
var sn = e.createContext(null);
function cn(e) {
	let t = e.getBoundingClientRect();
	if (!(t.height > 0)) return;
	let n = window.getComputedStyle(e), r = (e) => Number.parseFloat(n.getPropertyValue(e) || "0") || 0;
	return {
		height: t.height / qe(e) - r("padding-top") - r("padding-bottom") - r("border-top-width") - r("border-bottom-width"),
		lineHeight: r("line-height") || r("font-size") * 1.2 || 16
	};
}
function ln({ children: t, as: n = "div", className: r, style: i, ...a }) {
	let o = e.useContext(sn), s = Ee(), c = e.useRef(null), l = e.useMemo(() => nn(t), [t]), { text: u, problem: d } = l, f = o && !d ? on(t, l, o) : null, p = f ? o?.textHeight : void 0;
	e.useEffect(() => {
		d && s && xe(`flow-text-content:${d.reason}:${d.name}`, `[uhuu-components] Flow.Text holds ${d.reason === "block-content" ? `a <${d.name}>` : `<${d.name}>`}: only text and inline text elements (span, strong, em, b, i, a, small, sub, sup, br) can split between lines, so its item is not split. Put block content in the item outside the FlowText, and an Editable around the FlowText rather than inside it.`);
	}, [d, s]), ce(() => {
		let e = c.current;
		if (p === void 0 || !e || !s) return;
		let t = cn(e);
		if (!t || t.height <= p + Math.max(2, t.lineHeight / 2)) return;
		let n = t.height;
		xe(`flow-text-rewrap:${u.slice(0, 40)}`, `[uhuu-components] Flow.Text "${u.slice(0, 40)}…": a piece lays out ${Math.round(n - p)}px taller than the lines it was planned with, so it re-wrapped. A continuation must give the FlowText the width it measured with (keep a label cell, empty), and ::first-line styles or text-wrap: balance | pretty re-flow a slice.`);
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
function un(e) {
	let t = e.availableHeight - e.headerHeight;
	if (!(e.height > 0) || !Number.isFinite(t)) return;
	let n = Math.min(1, Math.max(t, 1) / e.height);
	return n < 1 ? {
		transform: `scale(${n})`,
		transformOrigin: "top left"
	} : void 0;
}
function dn(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function fn(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function pn(e) {
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
function mn(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function hn(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
function gn(t) {
	return t == null || typeof t == "boolean" ? "nothing" : Array.isArray(t) ? "several nodes" : e.isValidElement(t) ? "a fragment" : "text";
}
function _n(t, n, r) {
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
	return xe(`as-child:${r.flowId}:${r.source}`, `[uhuu-components] Flow.Items "${r.flowId}" asChild: ${r.source} returned ${gn(t)}. asChild needs exactly one element to carry the flow's attributes, so it renders in a wrapper <div> instead.`), null;
}
function vn(e, t, n, r) {
	return r.asChild && _n(e, {
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
function yn(e, t) {
	return {
		"data-uhuu-flow-break-before": e.breakBefore ? "true" : void 0,
		"data-uhuu-flow-break-after": e.breakAfter ? "true" : void 0,
		"data-uhuu-flow-keep-with-next": $e(e.keepWithNext),
		"data-uhuu-flow-avoid-break-inside": e.avoidBreakInside ? "true" : void 0,
		"data-uhuu-flow-group-key": e.groupKey,
		"data-uhuu-flow-header-group-key": t?.key,
		"data-uhuu-flow-header-repeat": t ? t.repeatHeader === !1 ? "false" : "true" : void 0
	};
}
function bn(e, t, n, r, i) {
	let a = n?.(e, t) ?? dn(e);
	return fn(a ? r?.[a] : void 0, i?.(e, t));
}
function xn(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
function Sn(t, n, r, i, a) {
	let o = Ee();
	e.useEffect(() => {
		o && i && Object.keys(i).length && r.length && (r.some((e, t) => !!(a?.(e, t) ?? dn(e))) || xe(`meta-defaults:${t}:${n}:${Object.keys(i).join("|")}`, `[uhuu-components] Static.${t} "${n}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		r,
		i,
		a,
		o
	]);
}
function Cn(e, t) {
	let { flowId: n, asChild: r, renderItem: i, renderGroupHeader: a, groupHeaderClassName: o } = e, { item: s, itemIndex: c, fragment: l, group: u, plannedGroupHeaders: d } = t, f = !!(u && d?.get(c)?.has(u.key));
	return {
		header: u && a && (f || !d && l.isFirstInGroupOnPage && (l.isFirstInGroup || u.repeatHeader !== !1)) && u && a ? vn(a(u, l), typeof o == "function" ? o(u, l) : o, {
			"data-uhuu-flow-group-header": "true",
			"data-uhuu-flow-header-group-key": u.key
		}, {
			flowId: n,
			source: "renderGroupHeader",
			asChild: r
		}) : null,
		element: vn(i(s, c, l), t.className, t.attributes, {
			flowId: n,
			source: "renderItem",
			asChild: r,
			baseStyle: t.baseStyle,
			forcedStyle: t.forcedStyle
		})
	};
}
function wn(e) {
	return e.part === 0 ? "first" : e.part === e.parts - 1 ? "last" : "middle";
}
function Tn(e, t) {
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
function En(e) {
	return e == null || e === !1 ? e : /* @__PURE__ */ v(sn.Provider, {
		value: null,
		children: e
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow.tsx
function Dn({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p, asChild: m = !1, as: h = "div" }) {
	let g = e.useContext(He), _ = Ne() === "screen", b = e.useContext(sn), x = h, S = g?.chunksByFlowId?.[t], C = g?.mode === "visible" && S ? S[g.pageIndex] : void 0, w = g?.mode === "visible" ? g.pageIndex : 0, T = g?.mode === "visible" && S ? S.length : 1, E = C?.unplaceable, D = E ? p?.(E, {
		flowId: t,
		pageIndex: w,
		pageCount: T
	}) : void 0, O = !!(E && D == null), k = g?.copy === "continuation" ? [] : g?.mode === "visible" && S ? C?.indexes ?? [] : g?.mode === "visible" && g.pageIndex > 0 ? [] : n.map((e, t) => t), A = (O ? [.../* @__PURE__ */ new Set([...k, E.index])].sort((e, t) => e - t) : k).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), j = n.map((e, t) => pn(c?.(e, t))), M = j.map((e) => e?.key), N = mn(A), P = l ? hn(C?.groupHeaders) : void 0;
	Sn("Flow", t, n, o, s);
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
		children: [E && D != null && (m && _n(D, {
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
			let l = r(c, i), u = j[i], f = Ct({
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
				...p ? Tn(p, f) : {}
			}, h = bn(c, i, s, o, a), g = O && i === E?.index, { header: x, element: S } = Cn(F, {
				item: c,
				itemIndex: i,
				fragment: m,
				group: u,
				plannedGroupHeaders: P,
				className: xn(d, c, i),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-key": String(l),
					"data-uhuu-flow-index": i,
					...yn(h, u),
					"data-uhuu-flow-unplaceable": g ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": g ? E.key : void 0,
					"data-uhuu-flow-orphans": Ze(h.orphans),
					"data-uhuu-flow-widows": Ze(h.widows),
					"data-uhuu-flow-split": p ? wn(p) : void 0,
					"data-uhuu-flow-grow-sheet": _ && h.growSheet ? "true" : void 0,
					"data-uhuu-flow-header-grow-sheet": _ && u?.growSheet ? "true" : void 0
				},
				forcedStyle: g ? un(E) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [b ? En(x) : x, /* @__PURE__ */ v(sn.Provider, {
				value: p ?? null,
				children: S
			})] }, l);
		})]
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow-columns.tsx
function On({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: g, getColumnItemProps: _, asChild: b = !1, as: x = "div" }) {
	Mt({
		nodes: r,
		itemCount: n.length,
		flowId: t
	});
	let S = e.useContext(He), C = e.useContext(sn), w = x, T = S?.copy === "continuation", E = S?.chunksByFlowId?.[t], D = S?.mode === "visible" && E ? E[S.pageIndex] : void 0, O = S?.mode !== "visible", k = S?.mode === "visible" ? S.pageIndex : 0, A = S?.mode === "visible" && E ? E.length : 1, j = e.useMemo(() => n.map((e, t) => pn(l?.(e, t))), [n, l]), M = e.useMemo(() => j.map((e) => e?.key), [j]), N = { flowId: t };
	Sn("FlowColumns", t, n, s, c);
	let { columnNodes: P, columnFills: F } = e.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		return {
			columnNodes: r.flatMap((t) => t.kind === "columns" ? [t] : t.kind === "flowingColumns" ? (e.set(t.id, t.columnFill ?? "balance"), [jt(t)]) : []),
			columnFills: e
		};
	}, [r]), I = Ne() === "screen", L = Ee(), ee = D?.unplaceable, R = I && ee && n[ee.index] !== void 0 && bn(n[ee.index], ee.index, c, s, o).growSheet ? ee.key : void 0;
	e.useEffect(() => {
		L && R && xe(`flow-columns-grow-sheet:${t}:${R}`, `[uhuu-components] Flow.Columns "${t}": item "${R}" has growSheet, which an item in a column group does not take; it is scaled to fit, as in print. Place it outside the column group.`);
	}, [
		L,
		t,
		R
	]);
	let z = e.useMemo(() => {
		if (I) {
			for (let e of P) for (let t of e.columns) for (let e of t.indexes) if (j[e]?.growSheet) return j[e].key;
		}
	}, [
		I,
		P,
		j
	]);
	e.useEffect(() => {
		L && z && xe(`flow-columns-grow-group:${t}:${z}`, `[uhuu-components] Flow.Columns "${t}": group "${z}" has growSheet, which a group in a column group does not take; its items flow as in print. Place the group outside the column group.`);
	}, [
		L,
		t,
		z
	]);
	let te = {
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
		return r == null ? n() : b && _n(r, {
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
		let m = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), h = mn(m), g = p ? mn(p) : void 0, _ = u ? hn(a?.groupHeaders) : void 0;
		return m.map((r) => {
			let u = n[r];
			if (u === void 0) return null;
			let v = i(u, r), b = j[r], x = h.get(r) ?? -1, S = g?.get(r) ?? -1, w = {
				...Ct({
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
			}, T = bn(u, r, c, s, o), E = l?.(r), D = a?.unplaceable?.index === r ? a.unplaceable : void 0, { header: O, element: N } = Cn(te, {
				item: u,
				itemIndex: r,
				fragment: w,
				group: b,
				plannedGroupHeaders: _,
				className: [xn(f, u, r), E?.className].filter(Boolean).join(" "),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-layout-node": d ? "item" : void 0,
					"data-uhuu-flow-key": String(v),
					"data-uhuu-flow-index": r,
					"data-uhuu-flow-unplaceable": D ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": D?.key,
					"data-uhuu-flow-column-id": D?.columnId,
					...yn(T, b),
					"data-uhuu-flow-grow-sheet": I && T.growSheet ? "true" : void 0,
					"data-uhuu-flow-header-grow-sheet": I && b?.growSheet ? "true" : void 0
				},
				baseStyle: E?.style,
				forcedStyle: D ? un(D) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [C ? En(O) : O, C ? En(N) : N] }, v);
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
function kn(e, t) {
	if (e?.ratio !== "auto") return e;
	let n = { ...e };
	delete n.ratio;
	let r = t?.getBoundingClientRect?.();
	return r && r.width > 0 && r.height > 0 ? {
		...n,
		ratio: Number((r.width / r.height).toFixed(4))
	} : (xe(`dialog-ratio:${String(e.path)}`, `[uhuu-components] "${String(e.path)}": \`ratio: 'auto'\` was not measured, its element has no size; the dialog opened without a ratio.`), n);
}
//#endregion
//#region src/uhuu/editable/inline-markdown.js
var An = {
	STRONG: "**",
	B: "**",
	EM: "*",
	I: "*",
	DEL: "~~",
	S: "~~",
	STRIKE: "~~"
}, jn = /* @__PURE__ */ new Set([
	"SPAN",
	"FONT",
	"U"
]), Mn = /* @__PURE__ */ new Set([
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
]), Nn = class extends Error {}, Pn = (e) => {
	throw new Nn(e);
};
function Fn(e, { nbsp: t = !0 } = {}) {
	try {
		return { markdown: zn(e, t).join("\n\n") };
	} catch (e) {
		if (e instanceof Nn) return { reason: e.message };
		throw e;
	}
}
function In(e, t) {
	return Rn(e) === Rn(t);
}
var Ln = {
	amp: "&",
	lt: "<",
	gt: ">",
	quot: "\"",
	apos: "'",
	nbsp: " ",
	"#39": "'"
};
function Rn(e) {
	return String(e ?? "").replace(/\r\n?/g, "\n").replace(/&(amp|lt|gt|quot|apos|nbsp|#39);/g, (e, t) => Ln[t]).replace(/\u00a0/g, " ").replace(/ {2,}\n/g, "\\\n").replace(/[ \t]+$/gm, "").replace(/^[ \t]+/gm, "").replace(/^(#{1,6})[ \t]+(.*?)(?:[ \t]+#+)?$/gm, "$1 $2").replace(/^([-*_])(?:[ \t]*\1){2,}$/gm, "---").replace(/^[*+](?=[ \t])/gm, "-").replace(/^\d+[.)](?=[ \t])/gm, "1.").replace(/__(?=\S)([\s\S]*?\S)__/g, "**$1**").replace(/(^|[^\p{L}\p{N}_\\])_(?=\S)([\s\S]*?\S)_(?![\p{L}\p{N}_])/gu, "$1*$2*").replace(/<((?:https?|mailto):[^>\s]+)>/g, "$1").replace(/\\([!-/:-@[-`{-~])/g, "$1").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
function zn(e, t) {
	let n = [], r = [], i = () => {
		let e = Un(r, t);
		e && n.push(e), r = [];
	};
	return e.childNodes.forEach((e) => {
		if (e.nodeType === Node.ELEMENT_NODE && Mn.has(e.nodeName)) {
			i();
			let r = Bn(e, t);
			r && n.push(r);
		} else r.push(e);
	}), i(), n;
}
function Bn(e, t) {
	let n = e.nodeName;
	if (n === "HR") return "---";
	if (n === "PRE") return Hn(e);
	if (n === "UL" || n === "OL") return Vn(e, t);
	if (n === "BLOCKQUOTE") return zn(e, t).join("\n\n").split("\n").map((e) => e ? `> ${e}` : ">").join("\n");
	if (n === "DIV" && [...e.children].some((e) => Mn.has(e.nodeName))) return zn(e, t).join("\n\n");
	let r = Un([...e.childNodes], t);
	return !r || n === "P" || n === "DIV" ? r : `${"#".repeat(Number(n[1]))} ${r.replace(/\n/g, " ")}`;
}
function Vn(e, t) {
	let n = [...e.children];
	n.some((e) => e.nodeName !== "LI") && Pn(`its list holds a <${n.find((e) => e.nodeName !== "LI").nodeName.toLowerCase()}>`);
	let r = n.some((e) => [...e.children].some((e) => e.nodeName === "P")), i = Number(e.getAttribute("start") || 1);
	return n.map((n) => {
		let a = e.nodeName === "OL" ? `${i++}. ` : "- ";
		return a + zn(n, t).join(r ? "\n\n" : "\n").split("\n").map((e, t) => t && e ? " ".repeat(a.length) + e : e).join("\n");
	}).join(r ? "\n\n" : "\n");
}
function Hn(e) {
	let t = e.querySelector("code") ?? e, n = (t.textContent ?? "").replace(/\n$/, ""), r = /(?:^|\s)language-(\S+)/.exec(t.className || "")?.[1] ?? "", i = "`".repeat(Math.max(3, ...[...n.matchAll(/`+/g)].map((e) => e[0].length + 1)));
	return `${i}${r}\n${n}\n${i}`;
}
function Un(e, t) {
	let n = [...e];
	for (; n.length && (n.at(-1).nodeName === "BR" || Wn(n.at(-1)));) n.pop();
	return Gn(n, t).replace(/^[\s\u00a0]+|[\s\u00a0]+$/g, "").replace(/^([ \t]*)(#|>|[-+](?=[ \t]|$)|\d+[.)](?=[ \t]|$)|[-=]+[ \t]*$)/gm, (e, t, n) => /^\d/.test(n) ? `${t}${n.replace(/[.)]/, "\\$&")}` : `${t}\\${n}`);
}
var Wn = (e) => e.nodeType === Node.TEXT_NODE && !/\S/.test((e.nodeValue ?? "").replace(/\u00a0/g, "x"));
function Gn(e, t) {
	let n = "", r = !1;
	return e.forEach((e) => {
		if (e.nodeType === Node.TEXT_NODE) {
			let i = e.nodeValue ?? "";
			r && (i = i.replace(/^\n/, "")), t || (i = i.replace(/\u00a0/g, " ")), n += i.replace(/[\\`*_[\]~]/g, "\\$&").replace(/<(?=[A-Za-z/!?])/g, "\\<"), r = !1;
			return;
		}
		if (r = !1, e.nodeType !== Node.ELEMENT_NODE) return;
		let i = e.nodeName;
		i === "BR" ? (n += "\\\n", r = !0) : An[i] ? n += Kn(Gn([...e.childNodes], t), An[i]) : i === "CODE" ? n += qn(e.textContent ?? "") : i === "A" ? n += Jn(e, t) : jn.has(i) ? n += Gn([...e.childNodes], t) : Pn(Mn.has(i) ? `a <${i.toLowerCase()}> sits inside its text` : `its markdown draws a <${i.toLowerCase()}>`);
	}), n;
}
function Kn(e, t) {
	let [, n, r, i] = /^(\s*)([\s\S]*?)(\s*)$/.exec(e);
	return r ? `${n}${t}${r}${t}${i}` : e;
}
function qn(e) {
	let t = "`".repeat(Math.max(1, ...[...e.matchAll(/`+/g)].map((e) => e[0].length + 1))), n = e.startsWith("`") || e.endsWith("`") ? " " : "";
	return `${t}${n}${e}${n}${t}`;
}
function Jn(e, t) {
	let n = e.getAttribute("href") ?? "", r = e.textContent ?? "";
	if (n && n === r) return `<${n}>`;
	if (n === `http://${r}` && /^www\./.test(r)) return r;
	let i = e.getAttribute("title"), a = /[\s<>]/.test(n) ? `<${n.replace(/[<>]/g, encodeURIComponent)}>` : n.replace(/[()]/g, "\\$&");
	return `[${Gn([...e.childNodes], t)}](${a}${i ? ` "${i.replace(/"/g, "\\\"")}"` : ""})`;
}
//#endregion
//#region src/uhuu/editable/inline-edit.js
var Yn = "[data-uhuu-inline-edit]", Xn = "data-uhuu-selected", Zn = "data-uhuu-editing", Qn = "data-uhuu-editing-source", $n = "[data-uhuu-inline-toolbar]", er = "button, [role=\"button\"]", tr = `${er}, a[href], input, textarea, select, summary, [contenteditable]`, nr = 5e3, U = null, rr = null, ir = null, ar = null, or = !1, sr = /* @__PURE__ */ new Set();
function cr(e) {
	or = !!e;
}
var lr = () => U;
function ur(e) {
	return sr.add(e), () => {
		sr.delete(e);
	};
}
function dr(e) {
	let t = U;
	U = e && {
		...e,
		inPlace: !pr(e) && !!wr(e)?.element
	}, t?.binding !== U?.binding && (t?.binding.removeAttribute(Xn), ar ??= new MutationObserver(fr), ar.disconnect(), U && ar.observe(U.binding, {
		childList: !0,
		characterData: !0,
		subtree: !0
	}), U && !t ? (document.addEventListener("pointerdown", gr, !0), document.addEventListener("keydown", _r)) : !U && t && (document.removeEventListener("pointerdown", gr, !0), document.removeEventListener("keydown", _r))), U?.binding.setAttribute(Xn, U.inPlace ? "text" : ""), sr.forEach((e) => e());
}
function fr() {
	U && !pr(U) && !!wr(U)?.element !== U.inPlace && dr(U);
}
var pr = (e) => !!(e.editing || e.saving || e.surface);
function mr(e, t) {
	U?.binding === e && dr({
		...U,
		...t
	});
}
function hr() {
	ir?.(!0), U && dr(null);
}
function gr(e) {
	let t = e.target;
	!U || t && (U.binding.contains(t) || U.surface?.contains(t) || t.closest?.($n)) || hr();
}
function _r(e) {
	if (!U || U.editing || e.defaultPrevented) return;
	let t = e.target?.closest?.(tr);
	(!t || t.contains(U.binding) || U.binding.contains(t)) && (e.key === "Escape" ? hr() : e.key === "Enter" && (e.preventDefault(), br("activate")));
}
function vr() {
	let e = ue()?.agents, t = window.UhuuVisualFeedback;
	return !!e?.isSelectionMode?.() || !!t?.isOpen;
}
function yr(e, t) {
	let n = e.currentTarget;
	if (typeof n?.closest != "function" || !n.closest(Yn) || n.matches(er)) return !1;
	if (rr && U?.binding === n) {
		let n = rr;
		return rr = null, e.preventDefault(), dr({
			...U,
			...t
		}), xr(n), !0;
	}
	if (vr()) return !1;
	if (U?.binding !== n) {
		ir?.(!0);
		let r = wr({
			binding: n,
			...t
		});
		return !r?.element && !t.actions?.length ? (U && dr(null), e.detail > 1 || (Cr(t.dialog, r), !1)) : (dr({
			binding: n,
			...t,
			editing: !1
		}), !0);
	}
	return U.editing || (dr({
		...U,
		...t
	}), Sr({
		x: e.clientX,
		y: e.clientY
	})), !0;
}
function br(e) {
	if (U) {
		if (e === "bold" || e === "italic") U.editing && U.surface && document.execCommand(e);
		else {
			rr = e;
			try {
				U.binding.dispatchEvent(new MouseEvent("click", {
					bubbles: !0,
					cancelable: !0
				}));
			} finally {
				rr && (rr = null, hr());
			}
		}
	}
}
function xr(e) {
	e === "activate" ? Sr() : (ir?.(!0), e === "open" ? U?.open?.() : U?.actions?.find((t) => t.id === e?.action)?.run());
}
function Sr(e) {
	if (!U || pr(U)) return;
	let t = wr(U);
	t?.element ? t.markdown === void 0 ? Tr(t, e) : Er(t, e) : (Cr(U.dialog, t), U.open?.());
}
function Cr(e, t) {
	if (!t?.reason || !or) return;
	let n = String(e.path);
	Se(`inline-edit:${n}`, `[uhuu-components] "${n}" opened its dialog instead of editing in place: ${t.reason}.`);
}
function wr({ binding: e, dialog: t, inline: n }) {
	if (!_e("patchPayload.operations") || n === !1) return null;
	let r = t.type === "markdown";
	if (!r && t.type !== "text" && t.type !== "textarea" || typeof t.path != "string" || !t.path || t.imagePath) return null;
	let i = [t.path, t.subPath].filter((e) => typeof e == "string" && e).join("."), a = Ar(fe(), i);
	if (a != null && typeof a != "string") return { reason: "its stored value is not text" };
	let o = a || (t.value == null ? "" : String(t.value));
	if (r) {
		let t = Fn(e);
		return t.reason ? t : In(t.markdown, o) ? {
			path: i,
			stored: a,
			element: e,
			markdown: t.markdown
		} : { reason: "its element shows markdown that differs from its value" };
	}
	let s = kr(e);
	if (!s) return { reason: "its element holds more than one plain text" };
	let c = s.textContent ?? "";
	return c === o ? {
		path: i,
		stored: a,
		element: s,
		text: c
	} : { reason: "its element shows text that differs from its value" };
}
function Tr(e, t) {
	let { binding: n, dialog: r, open: i } = U, { element: a, text: o } = e, s = r.type === "textarea";
	a.setAttribute("contenteditable", "plaintext-only"), a.isContentEditable || a.setAttribute("contenteditable", "true"), a.setAttribute(Zn, ""), a.focus({ preventScroll: !0 }), Mr(a, t);
	let c = (e) => {
		e.stopPropagation(), e.key === "Escape" ? (e.preventDefault(), u(!1)) : e.key === "Enter" && (e.preventDefault(), s && !(e.metaKey || e.ctrlKey) ? document.execCommand("insertText", !1, "\n") : u(!0));
	}, l = () => u(!0);
	a.addEventListener("keydown", c), a.addEventListener("paste", Or), a.addEventListener("blur", l);
	function u(t) {
		if (ir !== u) return;
		ir = null, a.removeEventListener("keydown", c), a.removeEventListener("paste", Or), a.removeEventListener("blur", l), a.removeAttribute("contenteditable"), a.removeAttribute(Zn);
		let r = jr(a);
		a.textContent = t ? r : o;
		let s = t && r !== o;
		mr(n, {
			editing: !1,
			saving: s
		}), s && Dr(e, r, i, () => {
			a.isConnected && jr(a) === r && (a.textContent = o);
		}).then(() => mr(n, { saving: !1 }));
	}
	ir = u, mr(n, { editing: !0 });
}
function Er(e, t) {
	let { binding: n, open: r } = U, i = n.cloneNode(!0);
	i.removeAttribute(Xn), [i, ...i.querySelectorAll("[id]")].forEach((e) => e.removeAttribute("id")), i.setAttribute(Zn, ""), i.setAttribute("contenteditable", "true"), n.after(i);
	let a = [n.style.getPropertyValue("display"), n.style.getPropertyPriority("display")];
	n.style.setProperty("display", "none", "important"), n.setAttribute(Qn, ""), document.execCommand("defaultParagraphSeparator", !1, "p"), i.focus({ preventScroll: !0 }), Mr(i, t, n);
	let o = (e) => {
		e.stopPropagation();
		let t = e.key.toLowerCase(), n = e.metaKey || e.ctrlKey;
		t === "escape" ? (e.preventDefault(), u(!1)) : t === "enter" && n ? (e.preventDefault(), u(!0)) : t === "u" && n && e.preventDefault();
	}, s = () => u(!0), c = (e) => e.stopPropagation();
	i.addEventListener("keydown", o), i.addEventListener("paste", Or), i.addEventListener("blur", s), [
		"click",
		"dblclick",
		"mousedown",
		"pointerdown",
		"mouseup",
		"pointerup"
	].forEach((e) => i.addEventListener(e, c));
	let l = () => {
		i.remove(), n.style.setProperty("display", ...a), n.getAttribute("style") || n.removeAttribute("style"), n.removeAttribute(Qn), U?.surface === i && mr(n, { surface: null });
	};
	function u(t) {
		if (ir !== u) return;
		ir = null, i.removeEventListener("keydown", o), i.removeEventListener("paste", Or), i.removeEventListener("blur", s), i.removeAttribute("contenteditable"), i.removeAttribute(Zn), mr(n, { editing: !1 });
		let a = t ? Fn(i, { nbsp: e.markdown.includes("\xA0") }) : null;
		if (!a || a.markdown === e.markdown) {
			l();
			return;
		}
		if (a.reason) {
			l(), xe(`inline-edit-markdown:${e.path}:${a.reason}`, `[uhuu-components] "${e.path}" was not saved: ${a.reason}; opened its dialog.`), r?.();
			return;
		}
		let c = a.markdown, d = () => !n.isConnected || Fn(n).markdown === c, f = new MutationObserver(() => {
			d() && m();
		}), p = setTimeout(m, nr);
		function m() {
			f.disconnect(), clearTimeout(p), l();
		}
		n.parentNode && f.observe(n.parentNode, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), Dr(e, c, r, m).then((e) => {
			e && d() && m();
		});
	}
	ir = u, mr(n, {
		surface: i,
		editing: !0
	});
}
function Dr({ path: e, stored: t }, n, r, i) {
	let a = (t) => {
		i(), xe(`inline-edit-rejected:${e}:${t}`, `[uhuu-components] The editor did not save "${e}" (${t}); opened its dialog.`), r?.();
	};
	return ve([{
		op: "set",
		path: e,
		value: n,
		expected: { value: t || null }
	}]).then((e) => (e.ok || a(e.rejected.map((e) => e.reason).join(", ") || "nothing applied"), e.ok), (e) => (a(e.message), !1));
}
function Or(e) {
	e.preventDefault(), document.execCommand("insertText", !1, e.clipboardData?.getData("text/plain") ?? "");
}
function kr(e) {
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
function Ar(e, t) {
	return t.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean).reduce((e, t) => e?.[t], e);
}
function jr(e) {
	let t = "";
	return e.childNodes.forEach((e) => {
		e.nodeType === Node.TEXT_NODE ? t += e.nodeValue ?? "" : e.nodeName === "BR" ? t += "\n" : ((e.nodeName === "DIV" || e.nodeName === "P") && t && !t.endsWith("\n") && (t += "\n"), t += jr(e));
	}), e.lastChild?.nodeName === "BR" ? t.slice(0, -1) : t;
}
function Mr(e, t, n) {
	let r = window.getSelection();
	if (!r) return;
	let i = !r.isCollapsed && r.rangeCount ? r.getRangeAt(0) : null;
	if (i && e.contains(i.commonAncestorContainer)) return;
	let a = null;
	if (i && n?.contains(i.commonAncestorContainer)) {
		let t = Nr(i.startContainer, n, e), r = Nr(i.endContainer, n, e);
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
function Nr(e, t, n) {
	let r = [];
	for (let n = e; n !== t; n = n.parentNode) {
		if (!n?.parentNode) return null;
		r.unshift([...n.parentNode.childNodes].indexOf(n));
	}
	return r.reduce((e, t) => e?.childNodes[t] ?? null, n);
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
function Pr(e) {
	let t = e?.dialog;
	return t ? Fr(t, { inline: e.inline }) : {};
}
function Fr(e, { inline: t, kind: n, actions: r, open: i } = {}) {
	let a = {
		"data-uhuu": "",
		...e.type ? { "data-uhuu-type": e.type } : {}
	};
	return le() ? a : {
		...a,
		onClick(a) {
			if (typeof window > "u" || le()) return;
			a.stopPropagation();
			let o = a.currentTarget, s = () => i ? i(o) : ue()?.editDialog?.(kn(e, o)), c = r?.filter((t) => t && !Ir(t.dialog, e)).map(({ id: e, label: t, icon: n, disabled: r, dialog: i, onSelect: s }) => ({
				id: e,
				label: t,
				icon: n,
				disabled: r,
				run: () => s ? s(a) : i && ue()?.editDialog?.(kn(i, o))
			}));
			yr(a, {
				dialog: e,
				inline: t,
				kind: n,
				actions: c,
				open: s
			}) || s();
		}
	};
}
var Ir = (e, t) => !!e && JSON.stringify(e) === JSON.stringify(t), Lr = "uhuu-text-empty", Rr = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), zr = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && Rr.has(e.type), Br = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(Br) : !1, Vr = (e) => {
	let t = zr(e.dialog) && Br(e.children) ? [e.className, Lr].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ v("div", {
		className: t,
		...Pr(e),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function Hr(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Ur(e, t, n, r = "") {
	return `${r}${e}-${n}-${Hr(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var Wr = /\s*(page-break-before|break-before)\s*/i, Gr = 1, Kr = 3, qr = 8;
function Jr(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var Yr = "script,style,iframe,object,embed,base,meta,link,template,svg,math", Xr = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href",
	"action",
	"data",
	"poster",
	"background",
	"cite"
]), Zr = /* @__PURE__ */ new Set([
	"http",
	"https",
	"mailto",
	"tel"
]), Qr = /* @__PURE__ */ new Set([
	"src",
	"poster",
	"srcset"
]), $r = /^data:image\/(?:png|jpe?g|gif|webp|avif|bmp)[;,]/i;
function ei(e, t) {
	let n = [...String(e ?? "").trim()].filter((e) => e.charCodeAt(0) > 32 && e.charCodeAt(0) !== 127).join(""), r = /^([^:/?#]*):/.exec(n);
	if (!r) return !0;
	let i = r[1].toLowerCase();
	return Zr.has(i) ? !0 : Qr.has(t) ? i === "blob" || $r.test(n) : !1;
}
function ti(e) {
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
		n = n.trim(), e && ei(e, "srcset") && t.push(r ? `${e} ${r}` : e);
	}
	return t.join(", ");
}
function ni(e) {
	if (typeof document > "u") return Jr(e);
	let t = document.createElement("template");
	return t.innerHTML = String(e ?? ""), t.content.querySelectorAll(Yr).forEach((e) => e.remove()), t.content.querySelectorAll("*").forEach((e) => {
		for (let t of [...e.attributes]) {
			let n = t.name.toLowerCase();
			if (n.startsWith("on") || n === "srcdoc" || n === "formaction") e.removeAttribute(t.name);
			else if (n === "srcset") {
				let n = ti(t.value);
				n ? e.setAttribute(t.name, n) : e.removeAttribute(t.name);
			} else Xr.has(n) && !ei(t.value, n) && e.removeAttribute(t.name);
		}
	}), t.innerHTML;
}
function ri(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === qr) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === Kr) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: Jr(t),
				text: t
			});
		} else if (e.nodeType === Gr) {
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
function ii(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: Ur(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function ai(e = "", t = {}) {
	let n = t.breakComment ?? Wr, r = (t.parseHtml ?? ((e) => ri(e, n)))(e);
	return ii(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/html-inline.tsx
var oi = /* @__PURE__ */ new Set([
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
]), si = {
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
function ci(e) {
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
		} else t[si[r] ?? r] = r === "hidden" || r === "itemscope" || n.value;
	}
	return t;
}
function li(t) {
	let n = [];
	for (let [r, i] of Array.from(t.childNodes).entries()) {
		if (i.nodeType === 8) continue;
		if (i.nodeType === 3) {
			n.push(i.textContent ?? "");
			continue;
		}
		if (i.nodeType !== 1) return null;
		let t = i, a = t.tagName.toLowerCase();
		if (!$t.has(a)) return null;
		let o = ci(t), s = li(t);
		if (!o || !s) return null;
		n.push(e.createElement(a, {
			...o,
			key: r
		}, ...s));
	}
	return n;
}
function ui(t) {
	if (typeof document > "u") return null;
	let n = document.createElement("template");
	n.innerHTML = t;
	let r = Array.from(n.content.childNodes).filter((e) => e.nodeType !== 8 && !(e.nodeType === 3 && !(e.textContent ?? "").trim()));
	if (r.length !== 1 || r[0].nodeType !== 1) return null;
	let i = r[0], a = i.tagName.toLowerCase();
	if (!oi.has(a)) return null;
	let o = ci(i), s = li(i);
	return !o || !s ? null : e.createElement(ln, {
		...o,
		as: a
	}, ...s);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var di = {
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
}, fi = !1;
function pi(t) {
	let n = Ee();
	return e.useMemo(() => t === !1 ? (n && !fi && (fi = !0, console.warn("[uhuu-components] Flow.Document sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : ni, [t, n]);
}
function mi({ html: t }) {
	let n = e.useMemo(() => ui(t), [t]);
	return n ? /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		children: n
	}) : /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: t }
	});
}
function hi({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, measureContinuation: c, breakReserve: l, id: u = "flow-document", idPrefix: d, flowClassName: f = "uhuu-flow-document", itemClassName: p, metaDefaults: m, getItemMeta: h, renderItem: g, sanitize: _, editable: y, parseHtml: b }) {
	let x = e.useMemo(() => ai(t, {
		idPrefix: d,
		parseHtml: b
	}), [
		t,
		d,
		b
	]), S = e.useMemo(() => ({
		...di,
		...m ?? {}
	}), [m]), C = pi(_), w = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...h?.(e, t) ?? {}
	}), [h]), T = e.useMemo(() => g ? null : new Map(x.map((e) => [e, C(e.html)])), [
		x,
		g,
		C
	]), E = e.useCallback((e, t) => g ? g(e, t) : /* @__PURE__ */ v(mi, { html: T?.get(e) ?? C(e.html) }), [
		g,
		T,
		C
	]), D = /* @__PURE__ */ v(Dn, {
		id: u,
		items: x,
		getKey: (e) => e.id,
		className: f,
		itemClassName: p,
		metaDefaults: S,
		getItemMeta: w,
		renderItem: E
	});
	return /* @__PURE__ */ v(Qt, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		measureContinuation: c,
		breakReserve: l,
		header: n,
		footer: r,
		children: y ? /* @__PURE__ */ v(Vr, {
			dialog: y,
			className: !x.length && zr(y) ? Lr : void 0,
			children: D
		}) : D
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var gi = /<!--\s*(page-break-before|break-before)\s*-->/i, _i = /^\s*\[[^\]]+\]:\s+\S+/, vi = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function yi(e) {
	return e.trim() === "";
}
function bi(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function xi(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Si(e) {
	return /^(```|~~~)/.test(e.trim());
}
function Ci(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function wi(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Ti(e) {
	return gi.test(e.trim());
}
function Ei(e) {
	return _i.test(e);
}
function Di(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function Oi(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function ki(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? Di(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = Oi(o, a);
		e.push({
			id: Ur(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function Ai(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) Ei(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (yi(i[o])) {
			o += 1;
			continue;
		}
		if (Ti(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (Si(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (bi(i[o])) n = "heading", o += 1;
		else if (Ci(i[o])) n = "rule", o += 1;
		else if (vi.test(i[o])) n = "image", o += 1;
		else if (wi(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !yi(i[o]);) o += 1;
		else if (xi(i[o])) for (n = "list", o += 1; o < i.length && !yi(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !yi(i[o]) && !bi(i[o]) && !Si(i[o]) && !Ci(i[o]) && !vi.test(i[o]) && !wi(i, o) && !xi(i[o]) && !i[o].trim().startsWith(">") && !Ti(i[o]);) o += 1;
		ki(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function ji(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ji(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Mi() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ji(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Ni = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Pi = (e, t) => ({
	classGroupId: e,
	validator: t
}), Fi = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Ii = "-", Li = [], Ri = "arbitrary..", zi = (e) => {
	let t = Hi(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Vi(e);
			let n = e.split(Ii);
			return Bi(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Ni(i, t) : t : i || Li;
			}
			return n[e] || Li;
		}
	};
}, Bi = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Bi(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Ii) : e.slice(t).join(Ii), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Vi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ri + r : void 0;
})(), Hi = (e) => {
	let { theme: t, classGroups: n } = e;
	return Ui(n, t);
}, Ui = (e, t) => {
	let n = Fi();
	for (let r in e) {
		let i = e[r];
		Wi(i, n, r, t);
	}
	return n;
}, Wi = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Gi(i, t, n, r);
	}
}, Gi = (e, t, n, r) => {
	typeof e == "string" ? Ki(e, t, n) : typeof e == "function" ? qi(e, t, n, r) : Ji(e, t, n, r);
}, Ki = (e, t, n) => {
	let r = e === "" ? t : Yi(t, e);
	r.classGroupId = n;
}, qi = (e, t, n, r) => {
	Xi(e) ? Wi(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Pi(n, e)));
}, Ji = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Wi(o, Yi(t, a), n, r);
	}
}, Yi = (e, t) => {
	let n = e, r = t.split(Ii), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Fi(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Xi = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Zi = (e) => {
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
}, Qi = "!", $i = ":", ea = [], ta = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), na = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === $i) {
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
		s.endsWith(Qi) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Qi) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ta(t, l, c, u);
	};
	if (t) {
		let e = t + $i, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ta(ea, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ra = (e) => {
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
}, ia = (e) => ({
	cache: Zi(e.cacheSize),
	parseClassName: na(e),
	sortModifiers: ra(e),
	postfixLookupClassGroupIds: aa(e),
	...zi(e)
}), aa = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, oa = /\s+/, sa = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(oa), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Qi : _, y = v + g;
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
}, ca = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = la(n)) && (i && (i += " "), i += r);
	return i;
}, la = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = la(e[r])) && (n && (n += " "), n += t);
	return n;
}, ua = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ia(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = sa(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ca(...e));
}, da = [], fa = (e) => {
	let t = (t) => t[e] || da;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, pa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ma = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ha = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ga = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _a = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, va = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, ya = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ba = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xa = (e) => ha.test(e), Sa = (e) => !!e && !Number.isNaN(Number(e)), Ca = (e) => !!e && Number.isInteger(Number(e)), wa = (e) => e.endsWith("%") && Sa(e.slice(0, -1)), Ta = (e) => ga.test(e), Ea = () => !0, Da = (e) => _a.test(e) && !va.test(e), Oa = () => !1, ka = (e) => ya.test(e), Aa = (e) => ba.test(e), ja = (e) => !W(e) && !G(e), Ma = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Na = (e) => Ja(e, Qa, Oa), W = (e) => pa.test(e), Pa = (e) => Ja(e, $a, Da), Fa = (e) => Ja(e, eo, Sa), Ia = (e) => Ja(e, no, Ea), La = (e) => Ja(e, to, Oa), Ra = (e) => Ja(e, Xa, Oa), za = (e) => Ja(e, Za, Aa), Ba = (e) => Ja(e, ro, ka), G = (e) => ma.test(e), Va = (e) => Ya(e, $a), Ha = (e) => Ya(e, to), Ua = (e) => Ya(e, Xa), Wa = (e) => Ya(e, Qa), Ga = (e) => Ya(e, Za), Ka = (e) => Ya(e, ro, !0), qa = (e) => Ya(e, no, !0), Ja = (e, t, n) => {
	let r = pa.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ya = (e, t, n = !1) => {
	let r = ma.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Xa = (e) => e === "position" || e === "percentage", Za = (e) => e === "image" || e === "url", Qa = (e) => e === "length" || e === "size" || e === "bg-size", $a = (e) => e === "length", eo = (e) => e === "number", to = (e) => e === "family-name", no = (e) => e === "number" || e === "weight", ro = (e) => e === "shadow", io = () => {
	let e = fa("color"), t = fa("font"), n = fa("text"), r = fa("font-weight"), i = fa("tracking"), a = fa("leading"), o = fa("breakpoint"), s = fa("container"), c = fa("spacing"), l = fa("radius"), u = fa("shadow"), d = fa("inset-shadow"), f = fa("text-shadow"), p = fa("drop-shadow"), m = fa("blur"), h = fa("perspective"), g = fa("aspect"), _ = fa("ease"), v = fa("animate"), y = () => [
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
		G,
		W
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
		G,
		W,
		c
	], T = () => [
		xa,
		"full",
		"auto",
		...w()
	], E = () => [
		Ca,
		"none",
		"subgrid",
		G,
		W
	], D = () => [
		"auto",
		{ span: [
			"full",
			Ca,
			G,
			W
		] },
		Ca,
		G,
		W
	], O = () => [
		Ca,
		"auto",
		G,
		W
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		G,
		W
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
		xa,
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
		xa,
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
		xa,
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
		G,
		W
	], L = () => [
		...b(),
		Ua,
		Ra,
		{ position: [G, W] }
	], ee = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], R = () => [
		"auto",
		"cover",
		"contain",
		Wa,
		Na,
		{ size: [G, W] }
	], z = () => [
		wa,
		Va,
		Pa
	], te = () => [
		"",
		"none",
		"full",
		l,
		G,
		W
	], B = () => [
		"",
		Sa,
		Va,
		Pa
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
		Sa,
		wa,
		Ua,
		Ra
	], ie = () => [
		"",
		"none",
		m,
		G,
		W
	], ae = () => [
		"none",
		Sa,
		G,
		W
	], H = () => [
		"none",
		Sa,
		G,
		W
	], oe = () => [
		Sa,
		G,
		W
	], se = () => [
		xa,
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
			blur: [Ta],
			breakpoint: [Ta],
			color: [Ea],
			container: [Ta],
			"drop-shadow": [Ta],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ja],
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
			"inset-shadow": [Ta],
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
			radius: [Ta],
			shadow: [Ta],
			spacing: ["px", Sa],
			text: [Ta],
			"text-shadow": [Ta],
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
				xa,
				W,
				G,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				G,
				W
			] }],
			"container-named": [Ma],
			columns: [{ columns: [
				Sa,
				"auto",
				W,
				G,
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
				Ca,
				"auto",
				G,
				W
			] }],
			basis: [{ basis: [
				xa,
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
				Sa,
				xa,
				"auto",
				"initial",
				"none",
				W
			] }],
			grow: [{ grow: [
				"",
				Sa,
				G,
				W
			] }],
			shrink: [{ shrink: [
				"",
				Sa,
				G,
				W
			] }],
			order: [{ order: [
				Ca,
				"first",
				"last",
				"none",
				G,
				W
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
				Va,
				Pa
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				qa,
				Ia
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
				wa,
				W
			] }],
			"font-family": [{ font: [
				Ha,
				La,
				t
			] }],
			"font-features": [{ "font-features": [W] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				G,
				W
			] }],
			"line-clamp": [{ "line-clamp": [
				Sa,
				"none",
				G,
				Fa
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				G,
				W
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				G,
				W
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
				Sa,
				"from-font",
				"auto",
				G,
				Pa
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				Sa,
				"auto",
				G,
				W
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
				Ca,
				G,
				W
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
				G,
				W
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
				G,
				W
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
			"bg-size": [{ bg: R() }],
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
						Ca,
						G,
						W
					],
					radial: [
						"",
						G,
						W
					],
					conic: [
						"",
						Ca,
						G,
						W
					]
				},
				Ga,
				za
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: z() }],
			"gradient-via-pos": [{ via: z() }],
			"gradient-to-pos": [{ to: z() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: te() }],
			"rounded-s": [{ "rounded-s": te() }],
			"rounded-e": [{ "rounded-e": te() }],
			"rounded-t": [{ "rounded-t": te() }],
			"rounded-r": [{ "rounded-r": te() }],
			"rounded-b": [{ "rounded-b": te() }],
			"rounded-l": [{ "rounded-l": te() }],
			"rounded-ss": [{ "rounded-ss": te() }],
			"rounded-se": [{ "rounded-se": te() }],
			"rounded-ee": [{ "rounded-ee": te() }],
			"rounded-es": [{ "rounded-es": te() }],
			"rounded-tl": [{ "rounded-tl": te() }],
			"rounded-tr": [{ "rounded-tr": te() }],
			"rounded-br": [{ "rounded-br": te() }],
			"rounded-bl": [{ "rounded-bl": te() }],
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
				Sa,
				G,
				W
			] }],
			"outline-w": [{ outline: [
				"",
				Sa,
				Va,
				Pa
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Ka,
				Ba
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ka,
				Ba
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: B() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [Sa, Pa] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": B() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Ka,
				Ba
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				Sa,
				G,
				W
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
			"mask-image-linear-pos": [{ "mask-linear": [Sa] }],
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
			"mask-image-radial": [{ "mask-radial": [G, W] }],
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
			"mask-image-conic-pos": [{ "mask-conic": [Sa] }],
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
			"mask-size": [{ mask: R() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				G,
				W
			] }],
			filter: [{ filter: [
				"",
				"none",
				G,
				W
			] }],
			blur: [{ blur: ie() }],
			brightness: [{ brightness: [
				Sa,
				G,
				W
			] }],
			contrast: [{ contrast: [
				Sa,
				G,
				W
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Ka,
				Ba
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				Sa,
				G,
				W
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Sa,
				G,
				W
			] }],
			invert: [{ invert: [
				"",
				Sa,
				G,
				W
			] }],
			saturate: [{ saturate: [
				Sa,
				G,
				W
			] }],
			sepia: [{ sepia: [
				"",
				Sa,
				G,
				W
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				G,
				W
			] }],
			"backdrop-blur": [{ "backdrop-blur": ie() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Sa,
				G,
				W
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Sa,
				G,
				W
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Sa,
				G,
				W
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Sa,
				G,
				W
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Sa,
				G,
				W
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Sa,
				G,
				W
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Sa,
				G,
				W
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Sa,
				G,
				W
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
				G,
				W
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Sa,
				"initial",
				G,
				W
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				G,
				W
			] }],
			delay: [{ delay: [
				Sa,
				G,
				W
			] }],
			animate: [{ animate: [
				"none",
				v,
				G,
				W
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				G,
				W
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
				G,
				W,
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
				Ca,
				G,
				W
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
				G,
				W
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
				G,
				W
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				Sa,
				Va,
				Pa,
				Fa
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
}, ao = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (oo(e, "cacheSize", t), oo(e, "prefix", n), oo(e, "experimentalParseClassName", r), so(e.theme, a.theme), so(e.classGroups, a.classGroups), so(e.conflictingClassGroups, a.conflictingClassGroups), so(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), oo(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), oo(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), co(e.theme, i.theme), co(e.classGroups, i.classGroups), co(e.conflictingClassGroups, i.conflictingClassGroups), co(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), lo(e, i, "postfixLookupClassGroups"), lo(e, i, "orderSensitiveModifiers"), e), oo = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, so = (e, t) => {
	if (t) for (let n in t) oo(e, n, t[n]);
}, co = (e, t) => {
	if (t) for (let n in t) lo(e, t, n);
}, lo = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, uo = (e, ...t) => typeof e == "function" ? ua(io, e, ...t) : ua(() => ao(io(), e), ...t), fo = /*#__PURE__*/ ua(io), po = uo({ prefix: "uhuu" });
function K(...e) {
	return po(Mi(e));
}
function mo(...e) {
	return fo(Mi(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var ho = ({ onError: e }) => (t) => {
	we(t.currentTarget.currentSrc || t.currentTarget.src), e?.(t);
}, go = (e, t) => e && e > 0 ? e + t : 0, _o = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, vo = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = _o(e, r, n, i), s = go(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, go(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function yo(e) {
	let t = c(R), n = ho({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: g = 0 } = e, _ = (e) => `${e}mm`, b = () => _o({
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
			...e.binding ?? (e.dialog ? Fr(e.dialog, {
				kind: "image",
				actions: e.actions
			}) : {}),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: mo("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-bleed.tsx
var bo = (e) => {
	let t = c(R), n = ho({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, g = (e) => `${e}mm`, _ = () => _o({
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
			...e.binding ?? (e.dialog ? Fr(e.dialog, {
				kind: "image",
				actions: e.actions
			}) : {}),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: mo("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}, xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), So = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Co = (e) => {
	let t = So(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, wo = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), To = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, Eo = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Do = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...Eo,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: wo("lucide", a),
	...!o && !To(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), Oo = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(Do, {
		ref: a,
		iconNode: t,
		className: wo(`lucide-${xo(Co(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Co(e), n;
}, ko = Oo("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Ao = Oo("arrow-up-down", [
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
]), jo = Oo("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), Mo = Oo("bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), No = Oo("book-dashed", [
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
]), Po = Oo("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Fo = Oo("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Io = Oo("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Lo = Oo("clipboard-list", [
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
]), Ro = Oo("copy", [["rect", {
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
}]]), zo = Oo("ellipsis", [
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
]), Bo = Oo("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Vo = Oo("grip-vertical", [
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
]), Ho = Oo("italic", [
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
]), Uo = Oo("lock", [["rect", {
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
}]]), Wo = Oo("maximize", [
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
]), Go = Oo("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Ko = Oo("palette", [
	["path", {
		d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
		key: "e79jfc"
	}],
	["circle", {
		cx: "13.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "1okk4w"
	}],
	["circle", {
		cx: "17.5",
		cy: "10.5",
		r: ".5",
		fill: "currentColor",
		key: "f64h9f"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: ".5",
		fill: "currentColor",
		key: "qy21gx"
	}],
	["circle", {
		cx: "8.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "fotxhn"
	}]
]), qo = Oo("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), Jo = Oo("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Yo = Oo("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Xo = Oo("sliders-horizontal", [
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
]), Zo = Oo("square-pen", [["path", {
	d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
	key: "1m0v6g"
}], ["path", {
	d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
	key: "ohrbg2"
}]]), Qo = Oo("trash-2", [
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
]), $o = Oo("unfold-horizontal", [
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
]), es = Oo("unfold-vertical", [
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
]), ts = Oo("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), ns = Oo("zoom-in", [
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
]), rs = Oo("zoom-out", [
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
]), is = e.createContext({
	portalContainer: null,
	inProvider: !1
});
function as() {
	return e.useContext(is);
}
function os() {
	let e = document.createElement("div");
	return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", e;
}
function ss({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = os();
		return document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ v(is.Provider, {
		value: {
			portalContainer: n,
			inProvider: !0
		},
		children: t
	});
}
//#endregion
//#region src/uhuu/editor-shell/toolbar-slot.ts
function cs() {
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
var ls = cs(), us = r(ls), ds = () => null;
function fs({ children: e }) {
	let [t] = h(cs);
	return i(us.Provider, { value: t }, e);
}
function ps() {
	return ls.getSnapshot();
}
function ms() {
	let e = c(us);
	return g(e.subscribe, e.getSnapshot, ds);
}
function hs() {
	let e = c(us), t = m(null);
	return s((n) => {
		let r = t.current;
		r !== n && (t.current = n, e.replace(r, n));
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var gs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _s = Mi, vs = (e, t) => (n) => {
	if (t?.variants == null) return _s(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = gs(t) || gs(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return _s(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, ys = vs("uhuu:inline-flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:whitespace-nowrap uhuu:rounded-md uhuu:text-sm uhuu:font-medium uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50", {
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
}), bs = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ v("button", {
	className: K(ys({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
bs.displayName = "Button";
var xs = {
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
	brandColors: {
		title: "Try brand colors",
		description: "Changes this preview only. Nothing is saved.",
		reset: "Reset"
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
}, Ss = {
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
	brandColors: {
		title: "Markenfarben ausprobieren",
		description: "Ändert nur diese Vorschau. Nichts wird gespeichert.",
		reset: "Zurücksetzen"
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
}, Cs = {
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
	brandColors: {
		title: "Essayer des couleurs de marque",
		description: "Ne change que cet aperçu. Rien n'est enregistré.",
		reset: "Réinitialiser"
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
}, ws = {
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
	brandColors: {
		title: "Prova i colori del marchio",
		description: "Cambia solo questa anteprima. Nulla viene salvato.",
		reset: "Reimposta"
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
}, q = (e) => typeof e == "object" && !!e && !Array.isArray(e), J = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, Ts = ["lang", "locale"];
function Es(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function Ds(e, t) {
	for (let n of e ?? []) {
		let e = Es(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function Os(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return Ds([
		e?.locale,
		e?.host,
		...Ts.map((e) => n.get(e)),
		e?.documentLang
	]) ?? Ds(e?.navigatorLanguages ?? [], t) ?? "en";
}
function ks(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = Es(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
var As = q;
function js(e, t) {
	if (!As(t)) return e;
	let n = { ...As(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = As(r) && As(n[e]) ? js(n[e], r) : r);
	return n;
}
function Ms(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = Es(e);
		t && As(r) && (n[t] = js(n[t], r));
	}
	return n;
}
function Ns(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!As(e)) return String(e);
	let r = [
		t,
		Es(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
function Ps(e, t) {
	return e == null || typeof e != "string" ? !0 : t == null ? !1 : typeof t == "string" ? e === t : Object.values(t).includes(e);
}
var Fs = /* @__PURE__ */ new Map();
function Is(e, t) {
	if (!Fs.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		Fs.set(e, t);
	}
	let n = Fs.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function Ls(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!As(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function Rs(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function zs({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = Es(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(As);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${Is(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = Ls(e, n);
			if (r !== void 0) return Rs(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var Bs = [
	"de",
	"fr",
	"it",
	"en"
], Vs = {
	en: xs,
	de: Ss,
	fr: Cs,
	it: ws
}, Hs = r(null);
function Us(e) {
	return [...Bs, ...Object.keys(e ?? {}).map((e) => Es(e) ?? e)];
}
function Ws(e, t) {
	let n = Us(e);
	if (typeof window > "u") return Os({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return Os({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function Gs(e, t) {
	return {
		locale: e,
		t: zs({
			locale: e,
			catalogs: Ms(Vs, t),
			fallbackLocale: "en"
		}),
		localize: (t) => Ns(t, e, "en")
	};
}
var Ks = null, qs = !1, Js = /* @__PURE__ */ new Set();
function Ys() {
	if (qs || typeof window > "u") return;
	let e = window.$uhuu;
	typeof e?.listen == "function" && (qs = !0, ks(e, (e) => {
		e !== Ks && (Ks = e, Js.forEach((e) => e()));
	}));
}
Ys();
function Xs(e) {
	return Ys(), Js.add(e), () => {
		Js.delete(e);
	};
}
var Zs = () => Ks;
function Qs() {
	return g(Xs, Zs, Zs);
}
var $s = null;
function ec() {
	return (!$s || $s.key !== Ks) && ($s = {
		key: Ks,
		runtime: Gs(Ks ?? Ws())
	}), $s.runtime;
}
var tc = () => () => {};
function nc({ locale: e, translations: t }) {
	let n = Qs(), r = g(tc, () => Ws(t), () => Os({}, Us(t))), i = f(() => Es(e) ?? n ?? r, [
		e,
		n,
		r
	]);
	return f(() => Gs(i, t), [i, t]);
}
function rc({ value: e, children: t }) {
	return /* @__PURE__ */ v(Hs.Provider, {
		value: e,
		children: t
	});
}
function ic() {
	let e = c(Hs);
	return Qs(), e ?? ec();
}
//#endregion
//#region src/uhuu/editor-shell/inline-edit-toolbar.tsx
var ac = 6, oc = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 uhuu:gap-1.5", sc = "uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:w-7 uhuu:p-0", cc = "#ff44cc", lc = {
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
}, uc = (e, t) => e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
function dc({ dialog: e, kind: t }) {
	return lc[String(e.type ?? t ?? (e.imagePath ? "image" : ""))] ?? "inlineEdit.openEditor";
}
function fc() {
	let e = g(ur, lr, () => null), { portalContainer: t } = as(), { t: n } = ic(), [r, i] = h(null), a = Ee();
	l(() => cr(a), [a]);
	let o = e?.binding, s = e?.surface ?? o;
	if (ce(() => {
		if (!o || !s) {
			i(null);
			return;
		}
		let e = 0, t = () => {
			if (!o.isConnected) {
				hr();
				return;
			}
			let n = s.getBoundingClientRect();
			i((e) => e && uc(e, n) ? e : n), e = requestAnimationFrame(t);
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
			outline: `2px solid ${cc}`,
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
			left: Math.max(ac, r.left),
			top: c ? r.top - ac : r.bottom + ac,
			transform: c ? "translateY(-100%)" : void 0
		},
		children: [
			e.inPlace && /* @__PURE__ */ y(bs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: oc,
				onClick: () => br("activate"),
				children: [/* @__PURE__ */ v(qo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				}), n("inlineEdit.editText")]
			}),
			u && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(bs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: sc,
				"aria-label": n("inlineEdit.bold"),
				title: n("inlineEdit.bold"),
				onClick: () => br("bold"),
				children: /* @__PURE__ */ v(Mo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				})
			}), /* @__PURE__ */ v(bs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: sc,
				"aria-label": n("inlineEdit.italic"),
				title: n("inlineEdit.italic"),
				onClick: () => br("italic"),
				children: /* @__PURE__ */ v(Ho, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				})
			})] }),
			/* @__PURE__ */ y(bs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: oc,
				onClick: () => br("open"),
				children: [/* @__PURE__ */ v(Zo, {
					"aria-hidden": "true",
					className: "uhuu:w-3.5 uhuu:h-3.5"
				}), n(dc(e))]
			}),
			e.actions?.map((e) => /* @__PURE__ */ y(bs, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: oc,
				disabled: e.disabled,
				onClick: () => br({ action: e.id }),
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
var pc = "light", mc = ["light", "dark"], hc = "appearance", gc = "data-uhuu-appearance", _c = "appearance";
function vc(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return mc.includes(t) ? t : null;
}
function yc(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return vc(new URLSearchParams(e).get(hc));
	} catch {
		return null;
	}
}
function bc(e) {
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
	return !t || typeof t != "object" ? null : t.action === "shaked" || t.action === "appearance" ? vc(t.data?.appearance) : null;
}
function xc(e) {
	return e?.renderer ? pc : vc(e?.explicit) ?? vc(e?.host) ?? yc(e?.search) ?? "light";
}
function Sc(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = ["loaded", _c].map((n) => e.listen(n, (e) => {
		let n = vc(e?.appearance);
		n && t(n);
	}));
	return () => n.forEach((e) => typeof e == "function" && e());
}
//#endregion
//#region src/uhuu/appearance/appearance-runtime.ts
var Cc = null, wc = [], Tc = !1, Ec = !1, Dc = /* @__PURE__ */ new Set();
function Oc() {
	return typeof window > "u" ? null : window;
}
function kc() {
	let e = Oc();
	return {
		host: Cc,
		search: e?.location?.search,
		renderer: !!e?.$uhuu_renderer
	};
}
function Ac() {
	return xc(kc());
}
function jc() {
	return xc({
		...kc(),
		explicit: wc.at(-1)
	});
}
function Mc() {
	let e = Oc()?.document?.documentElement;
	if (typeof e?.setAttribute != "function") return;
	let t = jc();
	e.getAttribute?.("data-uhuu-appearance") !== t && e.setAttribute(gc, t);
}
function Nc() {
	Mc(), Dc.forEach((e) => e());
}
function Pc(e) {
	e !== Cc && (Cc = e, Nc());
}
function Fc() {
	let e = Oc();
	e && (!Tc && typeof e.$uhuu?.listen == "function" && (Tc = !0, Sc(e.$uhuu, Pc)), !Ec && typeof e.addEventListener == "function" && (Ec = !0, e.addEventListener("message", (t) => {
		let n = e.parent;
		if (!n || n === e || t.source !== n) return;
		let r = bc(t.data);
		r && Pc(r);
	})));
}
Fc(), Mc();
function Ic(e) {
	return Fc(), Mc(), Dc.add(e), () => {
		Dc.delete(e);
	};
}
function Lc(e) {
	let t = g(Ic, Ac, Ac), n = vc(e);
	return ce(() => {
		if (n) return wc.push(n), Nc(), () => {
			let e = wc.lastIndexOf(n);
			e !== -1 && wc.splice(e, 1), Nc();
		};
	}, [n]), n && !kc().renderer ? n : t;
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var Rc = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
}), zc = r(!1);
function Bc() {
	return c(zc);
}
function Vc() {
	let e = c(Rc), { locale: t } = ic(), n = Lc(), r = e.appearance ?? n;
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
function Hc() {
	let { interactive: e } = Vc();
	return !e;
}
function Uc({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i, appearance: a, inlineEditing: o = !1 }) {
	let s = le(), c = n || de(), [u, d] = h(!s && t), p = nc({
		locale: r,
		translations: i
	}), m = Lc(a), g = u && o && !s;
	l(() => g ? hr : void 0, [g]);
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
	return /* @__PURE__ */ v(Rc.Provider, {
		value: _,
		children: /* @__PURE__ */ v(zc.Provider, {
			value: g,
			children: /* @__PURE__ */ v(Te.Provider, {
				value: c,
				children: /* @__PURE__ */ v(rc, {
					value: p,
					children: /* @__PURE__ */ v(fs, { children: /* @__PURE__ */ y(ss, { children: [/* @__PURE__ */ v("div", {
						"data-uhuu-interactive": u ? "" : void 0,
						"data-uhuu-inline-edit": g ? "" : void 0,
						style: { display: "contents" },
						children: e
					}), g && /* @__PURE__ */ v(fc, {})] }) })
				})
			})
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var Wc = Object.defineProperty, Gc = (e, t) => Wc(e, "name", {
	value: t,
	configurable: !0
}), Kc = !!(typeof window < "u" && window.document && window.document.createElement);
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Gc(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Gc(Y, "composeEventHandlers");
function qc(e) {
	if (!Kc) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Gc(qc, "getOwnerWindow");
function Jc(e) {
	if (!Kc) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Gc(Jc, "getOwnerDocument");
function Yc(e, t = !1) {
	let { activeElement: n } = Jc(e);
	if (!n?.nodeName) return null;
	if (Xc(n) && n.contentDocument) return Yc(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Jc(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Gc(Yc, "getActiveElement");
function Xc(e) {
	return e.tagName === "IFRAME";
}
Gc(Xc, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Zc = Object.defineProperty, Qc = (e, t) => Zc(e, "name", {
	value: t,
	configurable: !0
});
function $c(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Qc($c, "setRef");
function el(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = $c(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : $c(e[t], null);
			}
		};
	};
}
Qc(el, "composeRefs");
function tl(...t) {
	return e.useCallback(el(...t), t);
}
Qc(tl, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var nl = Object.defineProperty, rl = (e, t) => nl(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function il(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ rl((t) => {
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
	return rl(a, "useContext"), [i, a];
}
rl(il, "createContext");
// @__NO_SIDE_EFFECTS__
function al(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ rl((n) => {
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
		return rl(c, "useContext"), [s, c];
	}
	rl(i, "createContext");
	let a = /* @__PURE__ */ rl(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ rl(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, ol(a, ...n)];
}
rl(al, "createContextScope");
function ol(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ rl(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ rl(function(t) {
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
rl(ol, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var sl = globalThis?.document ? e.useLayoutEffect : () => {}, cl = Object.defineProperty, ll = (e, t) => cl(e, "name", {
	value: t,
	configurable: !0
}), ul = e.useEffectEvent, dl = e.useInsertionEffect;
function fl(t) {
	if (typeof ul == "function") return ul(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof dl == "function" ? dl(() => {
		n.current = t;
	}) : sl(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
ll(fl, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var pl = Object.defineProperty, ml = (e, t) => pl(e, "name", {
	value: t,
	configurable: !0
}), hl = e.useInsertionEffect || sl;
function gl({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ ml(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = _l({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = vl(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
ml(gl, "useControllableState");
function _l({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return hl(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
ml(_l, "useUncontrolledState");
function vl(e) {
	return typeof e == "function";
}
ml(vl, "isFunction");
var yl = Symbol("RADIX:SYNC_STATE");
function bl(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = fl(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === yl) return {
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
			type: yl,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
ml(bl, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var xl = Object.defineProperty, Sl = (e, t) => xl(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Cl(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		jl(i) && typeof Il == "function" && (i = Il(i._payload)), e.Children.forEach(i, (e) => {
			if (kl(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				jl(n) && typeof Il == "function" && (n = Il(n._payload)), o = El(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? Ol(o) : void 0, u = tl(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? Fl(t) : Pl(t));
			return i;
		}
		let d = Dl(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
Sl(Cl, "createSlot");
var wl = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Tl(e) {
	let t = /* @__PURE__ */ Sl((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = wl, t;
}
Sl(Tl, "createSlottable");
var El = /* @__PURE__ */ Sl((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function Dl(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Nl(a, i));
	}
	return {
		...e,
		...n
	};
}
Sl(Dl, "mergeProps");
function Ol(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Sl(Ol, "getElementRef");
function kl(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === wl;
}
Sl(kl, "isSlottable");
var Al = Symbol.for("react.lazy");
function jl(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Al && "_payload" in e && Ml(e._payload);
}
Sl(jl, "isLazyComponent");
function Ml(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Sl(Ml, "isPromiseLike");
function Nl(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Sl(Nl, "concatAriaDescribedby");
var Pl = /* @__PURE__ */ Sl((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Fl = /* @__PURE__ */ Sl((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Il = e.use, Ll = Object.defineProperty, Rl = (e, t) => Ll(e, "name", {
	value: t,
	configurable: !0
}), zl = [
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
	let r = /* @__PURE__ */ Cl(`Primitive.${n}`), i = e.forwardRef((e, t) => {
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
function Bl(e, t) {
	e && b.flushSync(() => e.dispatchEvent(t));
}
Rl(Bl, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var Vl = Object.defineProperty, Hl = (e, t) => Vl(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ul(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ al(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ Hl((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ v(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ Cl(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = tl(t, o(c, n).collectionRef);
		return /* @__PURE__ */ v(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Cl(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = tl(n, s), l = o(d, r);
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
	return Hl(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
Hl(Ul, "createCollection");
var Wl = /* @__PURE__ */ new WeakMap(), Gl = class e extends Map {
	static {
		Hl(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Wl.set(this, !0);
	}
	set(e, t) {
		return Wl.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Jl(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = Kl(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Kl(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Kl(this.#e, e);
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
function Kl(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ql(e, t);
	return n === -1 ? void 0 : e[n];
}
Hl(Kl, "at");
function ql(e, t) {
	let n = e.length, r = Jl(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
Hl(ql, "toSafeIndex");
function Jl(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Hl(Jl, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Yl(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ al(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Gl(),
		setItemMap: /* @__PURE__ */ Hl(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ Hl(({ state: e, ...t }) => e ? /* @__PURE__ */ v(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ v(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ Hl((e) => {
		let t = g();
		return /* @__PURE__ */ v(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ Hl((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = tl(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = $l(() => {});
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ Cl(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = tl(t, o(u, n).collectionRef);
		return /* @__PURE__ */ v(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ Cl(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = tl(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Xl(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(Ql) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(Ql)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new Gl(e)));
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
		return e.useState(new Gl());
	}
	Hl(g, "useInitCollection");
	function _(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return Hl(_, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: _,
		useInitCollection: g
	}];
}
Hl(Yl, "createCollection");
function Xl(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
Hl(Xl, "shallowEqual");
function Zl(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Hl(Zl, "isElementPreceding");
function Ql(e, t) {
	return !e[1].element || !t[1].element ? 0 : Zl(e[1].element, t[1].element) ? -1 : 1;
}
Hl(Ql, "sortByDocumentPosition");
function $l(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
Hl($l, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var eu = Object.defineProperty, tu = (e, t) => eu(e, "name", {
	value: t,
	configurable: !0
}), nu = {
	LTR: "ltr",
	RTL: "rtl"
}, ru = e.createContext(void 0);
function iu(t) {
	let n = e.useContext(ru);
	return t || n || nu.LTR;
}
tu(iu, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var au = Object.defineProperty, ou = (e, t) => au(e, "name", {
	value: t,
	configurable: !0
});
function su(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
ou(su, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var cu = Object.defineProperty, lu = (e, t) => cu(e, "name", {
	value: t,
	configurable: !0
}), uu = "dismissableLayer.update", du = "dismissableLayer.pointerDownOutside", fu = "dismissableLayer.focusOutside", pu, mu = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), hu = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ lu(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(mu), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = tl(n, p), _ = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? _.indexOf(y) : -1, x = f ? _.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = vu((e) => {
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
	}), E = yu((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === _.length - 1 : !1, O = su((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (pu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), bu(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = pu));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), bu());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ lu(() => h({}), "handleUpdate");
		return document.addEventListener(uu, e), () => document.removeEventListener(uu, e);
	}, []), /* @__PURE__ */ v(zl.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: Y(t.onFocusCapture, E.onFocusCapture),
		onBlurCapture: Y(t.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: Y(t.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function gu() {
	let t = e.useContext(mu), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
lu(gu, "useDismissableLayerSurface");
var _u = /* @__PURE__ */ lu(() => !0, "IS_TRUE");
function vu(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = _u } = n, c = su(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		lu(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		lu(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		lu(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		lu(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ lu((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || xu(du, c, p, { discrete: !0 });
				};
				if (lu(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ lu(() => l.current = !0, "onPointerDownCapture") };
}
lu(vu, "usePointerDownOutside");
function yu(t, n = globalThis?.document) {
	let r = su(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ lu((e) => {
			e.target && !i.current && xu(fu, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ lu(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ lu(() => i.current = !1, "onBlurCapture")
	};
}
lu(yu, "useFocusOutside");
function bu() {
	let e = new CustomEvent(uu);
	document.dispatchEvent(e);
}
lu(bu, "dispatchUpdate");
function xu(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Bl(i, a) : i.dispatchEvent(a);
}
lu(xu, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Su = Object.defineProperty, Cu = (e, t) => Su(e, "name", {
	value: t,
	configurable: !0
}), wu = 0, Tu = null;
function Eu(e) {
	return Du(), e.children;
}
Cu(Eu, "FocusGuards");
function Du() {
	e.useEffect(() => {
		Tu ||= {
			start: Ou(),
			end: Ou()
		};
		let { start: e, end: t } = Tu;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), wu++, () => {
			wu === 1 && (Tu?.start.remove(), Tu?.end.remove(), Tu = null), wu = Math.max(0, wu - 1);
		};
	}, []);
}
Cu(Du, "useFocusGuards");
function Ou() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Cu(Ou, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var ku = Object.defineProperty, Au = (e, t) => ku(e, "name", {
	value: t,
	configurable: !0
}), ju = "focusScope.autoFocusOnMount", Mu = "focusScope.autoFocusOnUnmount", Nu = {
	bubbles: !1,
	cancelable: !0
}, Pu = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Au(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = su(o), f = su(s), p = e.useRef(null), m = tl(n, u), h = e.useRef(a);
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
				g(t) ? p.current = t : Gu(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || Gu(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Gu(l);
			};
			Au(e, "handleFocusIn"), Au(t, "handleFocusOut"), Au(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			Ku.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(ju, Nu);
				l.addEventListener(ju, d), l.dispatchEvent(t), t.defaultPrevented || (zu(Yu(Vu(l)), { select: !0 }), document.activeElement === e && Gu(l));
			}
			return () => {
				l.removeEventListener(ju, d), setTimeout(() => {
					let t = new CustomEvent(Mu, Nu);
					l.addEventListener(Mu, f), l.dispatchEvent(t), t.defaultPrevented || Gu(e ?? document.body, { select: !0 }), l.removeEventListener(Mu, f), Ku.remove(_);
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
			let t = e.currentTarget, [i, a] = Bu(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Gu(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Gu(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ v(zl.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), Fu = e.createContext(null);
function Iu({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ v(Fu.Provider, {
		value: e,
		children: t
	}) : t;
}
Au(Iu, "FocusScopeBranchProvider");
function Lu() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ Au((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Au((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Au(Lu, "useFocusScopeBranchRegistry");
function Ru(t) {
	let n = e.useContext(Fu);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
Au(Ru, "useFocusScopeBranch");
function zu(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Gu(r, { select: t }), document.activeElement !== n) return;
}
Au(zu, "focusFirst");
function Bu(e) {
	let t = Vu(e);
	return [Hu(t, e), Hu(t.reverse(), e)];
}
Au(Bu, "getTabbableEdges");
function Vu(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Au((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Au(Vu, "getTabbableCandidates");
function Hu(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Uu(r, { upTo: t }))) return r;
}
Au(Hu, "findVisible");
function Uu(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Au(Uu, "isHidden");
function Wu(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Au(Wu, "isSelectableInput");
function Gu(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Wu(e) && t && e.select();
	}
}
Au(Gu, "focus");
var Ku = qu();
function qu() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Ju(e, t), e.unshift(t);
		},
		remove(t) {
			e = Ju(e, t), e[0]?.resume();
		}
	};
}
Au(qu, "createFocusScopesStack");
function Ju(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Au(Ju, "arrayRemove");
function Yu(e) {
	return e.filter((e) => e.tagName !== "A");
}
Au(Yu, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Xu = Object.defineProperty, Zu = (e, t) => Xu(e, "name", {
	value: t,
	configurable: !0
}), Qu = e.useId || (() => void 0), $u = 0;
function ed(t) {
	let [n, r] = e.useState(Qu());
	return sl(() => {
		t || r((e) => e ?? String($u++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
Zu(ed, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var td = [
	"top",
	"right",
	"bottom",
	"left"
], nd = Math.min, rd = Math.max, id = Math.round, ad = Math.floor, od = (e) => ({
	x: e,
	y: e
}), sd = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function cd(e, t, n) {
	return rd(e, nd(t, n));
}
function ld(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ud(e) {
	return e.split("-")[0];
}
function dd(e) {
	return e.split("-")[1];
}
function fd(e) {
	return e === "x" ? "y" : "x";
}
function pd(e) {
	return e === "y" ? "height" : "width";
}
function md(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function hd(e) {
	return fd(md(e));
}
function gd(e, t, n) {
	n === void 0 && (n = !1);
	let r = dd(e), i = hd(e), a = pd(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Td(o)), [o, Td(o)];
}
function _d(e) {
	let t = Td(e);
	return [
		vd(e),
		t,
		vd(t)
	];
}
function vd(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var yd = ["left", "right"], bd = ["right", "left"], xd = ["top", "bottom"], Sd = ["bottom", "top"];
function Cd(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? bd : yd : t ? yd : bd;
		case "left":
		case "right": return t ? xd : Sd;
		default: return [];
	}
}
function wd(e, t, n, r) {
	let i = dd(e), a = Cd(ud(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(vd)))), a;
}
function Td(e) {
	let t = ud(e);
	return sd[t] + e.slice(t.length);
}
function Ed(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Dd(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ed(e);
}
function Od(e) {
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
function kd(e, t, n) {
	let { reference: r, floating: i } = e, a = md(t), o = hd(t), s = pd(o), c = ud(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = dd(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Ad(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ld(t, e), p = Dd(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Od(await i.getClippingRect({
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
	}, y = Od(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var jd = 50, Md = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ad
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = kd(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < jd && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = kd(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Nd = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ld(e, t) || {};
		if (l == null) return {};
		let d = Dd(u), f = {
			x: n,
			y: r
		}, p = hd(i), m = pd(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = nd(d[_], T), D = nd(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = cd(E, k, O), j = !c.arrow && dd(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Pd = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ld(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ud(r), _ = md(o), v = ud(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Td(o)] : _d(o)), x = p !== "none";
			!d && x && b.push(...wd(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = gd(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === md(t) || T.every((e) => md(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = md(e.placement);
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
function Fd(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Id(e) {
	return td.some((t) => e[t] >= 0);
}
var Ld = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = ld(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Fd(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Id(e)
					} };
				}
				case "escaped": {
					let e = Fd(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Id(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Rd = /*#__PURE__*/ new Set(["left", "top"]);
async function zd(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ud(n), s = dd(n), c = md(n) === "y", l = Rd.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ld(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Bd = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await zd(t, e);
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
}, Vd = function(e) {
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
			} }, ...l } = ld(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = md(i), p = fd(f), m = u[p], h = u[f], g = (e, t) => cd(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Hd = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ld(e, t), u = {
				x: n,
				y: r
			}, d = md(i), f = fd(d), p = u[f], m = u[d], h = ld(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Rd.has(ud(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Ud = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = ld(e, t), c = await i.detectOverflow(t, s), l = ud(n), u = dd(n), d = md(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = nd(p - c[m], g), y = nd(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * rd(c.left, c.right) : S = p - 2 * rd(c.top, c.bottom)), await o({
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
function Wd() {
	return typeof window < "u";
}
function Gd(e) {
	return Jd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Kd(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qd(e) {
	return ((Jd(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Jd(e) {
	return Wd() ? e instanceof Node || e instanceof Kd(e).Node : !1;
}
function Yd(e) {
	return Wd() ? e instanceof Element || e instanceof Kd(e).Element : !1;
}
function Xd(e) {
	return Wd() ? e instanceof HTMLElement || e instanceof Kd(e).HTMLElement : !1;
}
function Zd(e) {
	return !Wd() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Kd(e).ShadowRoot;
}
function Qd(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = uf(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function $d(e) {
	return /^(table|td|th)$/.test(Gd(e));
}
function ef(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var tf = /transform|translate|scale|rotate|perspective|filter/, nf = /paint|layout|strict|content/, rf = (e) => !!e && e !== "none", af;
function of(e) {
	let t = Yd(e) ? uf(e) : e;
	return rf(t.transform) || rf(t.translate) || rf(t.scale) || rf(t.rotate) || rf(t.perspective) || !cf() && (rf(t.backdropFilter) || rf(t.filter)) || tf.test(t.willChange || "") || nf.test(t.contain || "");
}
function sf(e) {
	let t = ff(e);
	for (; Xd(t) && !lf(t);) {
		if (of(t)) return t;
		if (ef(t)) return null;
		t = ff(t);
	}
	return null;
}
function cf() {
	return af ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), af;
}
function lf(e) {
	return /^(html|body|#document)$/.test(Gd(e));
}
function uf(e) {
	return Kd(e).getComputedStyle(e);
}
function df(e) {
	return Yd(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ff(e) {
	if (Gd(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Zd(e) && e.host || qd(e);
	return Zd(t) ? t.host : t;
}
function pf(e) {
	let t = ff(e);
	return lf(t) ? (e.ownerDocument || e).body : Xd(t) && Qd(t) ? t : pf(t);
}
function mf(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = pf(e), i = r === e.ownerDocument?.body, a = Kd(r);
	if (i) {
		let e = hf(a);
		return t.concat(a, a.visualViewport || [], Qd(r) ? r : [], e && n ? mf(e) : []);
	}
	return t.concat(r, mf(r, [], n));
}
function hf(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function gf(e) {
	let t = uf(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Xd(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = id(n) !== a || id(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function _f(e) {
	return Yd(e) ? e : e.contextElement;
}
function vf(e) {
	let t = _f(e);
	if (!Xd(t)) return od(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = gf(t), o = (a ? id(n.width) : n.width) / r, s = (a ? id(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var yf = /*#__PURE__*/ od(0);
function bf(e) {
	let t = Kd(e);
	return !cf() || !t.visualViewport ? yf : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function xf(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Kd(e);
}
function Sf(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = _f(e), o = od(1);
	t && (r ? Yd(r) && (o = vf(r)) : o = vf(e));
	let s = xf(a, n, r) ? bf(a) : od(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Kd(a), t = Yd(r) ? Kd(r) : r, n = e, i = hf(n);
		for (; i && t !== n;) {
			let e = vf(i), t = i.getBoundingClientRect(), r = uf(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Kd(i), i = hf(n);
		}
	}
	return Od({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Cf(e, t) {
	let n = df(e).scrollLeft;
	return t ? t.left + n : Sf(qd(e)).left + n;
}
function wf(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Cf(e, n),
		y: n.top + t.scrollTop
	};
}
function Tf(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = qd(r), s = t ? ef(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = od(1), u = od(0), d = Xd(r);
	if ((d || !a) && ((Gd(r) !== "body" || Qd(o)) && (c = df(r)), d)) {
		let e = Sf(r);
		l = vf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? wf(o, c) : od(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ef(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Df(e) {
	let t = df(e), n = e.ownerDocument.body, r = rd(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = rd(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Cf(e), o = -t.scrollTop;
	return uf(n).direction === "rtl" && (a += rd(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Of = 25;
function kf(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Kd(e), a = qd(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !cf() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Cf(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Of && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Af(e, t) {
	let n = Sf(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = vf(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function jf(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = kf(e, n, t);
	else if (t === "document") r = Df(qd(e));
	else if (Yd(t)) r = Af(t, n);
	else {
		let n = bf(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Od(r);
}
function Mf(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = mf(e, [], !1).filter((e) => Yd(e) && Gd(e) !== "body"), i = null, a = uf(e).position === "fixed", o = a ? ff(e) : e;
	for (; Yd(o) && !lf(o);) {
		let e = uf(o), t = of(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = ff(o);
	}
	return t.set(e, r), r;
}
function Nf(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ef(t) ? [] : Mf(t, this._c) : [].concat(n), r], o = jf(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = jf(t, a[e], i);
		s = rd(n.top, s), c = nd(n.right, c), l = nd(n.bottom, l), u = rd(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Pf(e) {
	let { width: t, height: n } = gf(e);
	return {
		width: t,
		height: n
	};
}
function Ff(e, t, n) {
	let r = Xd(t), i = qd(t), a = n === "fixed", o = Sf(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = od(0);
	if ((r || !a) && ((Gd(t) !== "body" || Qd(i)) && (s = df(t)), r)) {
		let e = Sf(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Cf(i));
	let l = i && !r && !a ? wf(i, s) : od(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function If(e) {
	return uf(e).position === "static";
}
function Lf(e, t) {
	if (!Xd(e) || uf(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return qd(e) === n && (n = n.ownerDocument.body), n;
}
function Rf(e, t) {
	let n = Kd(e);
	if (ef(e)) return n;
	if (!Xd(e)) {
		let t = ff(e);
		for (; t && !lf(t);) {
			if (Yd(t) && !If(t)) return t;
			t = ff(t);
		}
		return n;
	}
	let r = Lf(e, t);
	for (; r && $d(r) && If(r);) r = Lf(r, t);
	return r && lf(r) && If(r) && !of(r) ? n : r || sf(e) || n;
}
var zf = async function(e) {
	let t = this.getOffsetParent || Rf, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ff(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Bf(e) {
	return uf(e).direction === "rtl";
}
var Vf = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Tf,
	getDocumentElement: qd,
	getClippingRect: Nf,
	getOffsetParent: Rf,
	getElementRects: zf,
	getClientRects: Ef,
	getDimensions: Pf,
	getScale: vf,
	isElement: Yd,
	isRTL: Bf
};
function Hf(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Uf(e, t, n) {
	let r = null, i, a = qd(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = ad(d), h = ad(a.clientWidth - (u + f)), g = ad(a.clientHeight - (d + p)), _ = ad(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: rd(0, nd(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Hf(l, e.getBoundingClientRect())) return s();
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
	let c = Kd(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Wf(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = _f(e), u = i || a ? [...l ? mf(l) : [], ...t ? mf(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Uf(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Sf(e) : null;
	c && g();
	function g() {
		let t = Sf(e);
		h && !Hf(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Gf = Bd, Kf = Vd, qf = Pd, Jf = Ud, Yf = Ld, Xf = Nd, Zf = Hd, Qf = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Vf,
		...i.platform,
		_c: r
	};
	return Md(e, t, {
		...i,
		platform: a
	});
}, $f = typeof document < "u" ? d : function() {};
function ep(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!ep(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !ep(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function tp(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function np(e, t) {
	let n = tp(e);
	return Math.round(t * n) / n;
}
function rp(t) {
	let n = e.useRef(t);
	return $f(() => {
		n.current = t;
	}), n;
}
function ip(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	ep(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, v(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = rp(l), k = rp(a), A = rp(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Qf(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !ep(E.current, t) && (E.current = t, b.flushSync(() => {
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
	$f(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	$f(() => (M.current = !0, () => {
		M.current = !1;
	}), []), $f(() => {
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
		let t = np(P.floating, d.x), n = np(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...tp(P.floating) >= 1.5 && { willChange: "transform" }
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
var ap = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Xf({
				element: r.current,
				padding: i
			}).fn(n) : r ? Xf({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, op = (e, t) => {
	let n = Gf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, sp = (e, t) => {
	let n = Kf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, cp = (e, t) => ({
	fn: Zf(e).fn,
	options: [e, t]
}), lp = (e, t) => {
	let n = qf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, up = (e, t) => {
	let n = Jf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, dp = (e, t) => {
	let n = Yf(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, fp = (e, t) => {
	let n = ap(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, pp = Object.defineProperty, mp = (e, t) => pp(e, "name", {
	value: t,
	configurable: !0
});
function hp(t) {
	let [n, r] = e.useState(void 0);
	return sl(() => {
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
mp(hp, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var gp = Object.defineProperty, _p = (e, t) => gp(e, "name", {
	value: t,
	configurable: !0
}), vp = {
	Partial: "partial",
	Always: "always"
}, yp = {
	Optimized: "optimized",
	Always: "always"
}, bp = "Popper", [xp, Sp] = /* @__PURE__ */ al(bp), [Cp, wp] = xp(bp), Tp = /* @__PURE__ */ _p((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ v(Cp, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Ep = "PopperAnchor", Dp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _p(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = wp(Ep, r), s = e.useRef(null), c = o.onAnchorChange, l = tl(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && Pp(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ v(zl.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), Op = "PopperContent", [kp, Ap] = xp(Op), jp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _p(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = vp.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = yp.Optimized, onPlaced: h, ...g } = t, _ = wp(Op, r), [y, b] = e.useState(null), x = tl(n, b), [S, C] = e.useState(null), w = hp(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(Mp),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = ip({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ _p((...e) => Wf(...e, { animationFrame: m === yp.Always }), "whileElementsMounted"),
		elements: { reference: _.anchor },
		middleware: [
			op({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && sp({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === vp.Partial ? cp() : void 0,
				...j
			}),
			l && lp({ ...j }),
			up({
				...j,
				apply: /* @__PURE__ */ _p(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && fp({
				element: S,
				padding: c
			}),
			Np({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && dp({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = _.setPlacementState;
	sl(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [ee, R] = Pp(P), z = su(h);
	sl(() => {
		F && z?.();
	}, [F, z]);
	let te = I.arrow?.x, B = I.arrow?.y, ne = I.arrow?.centerOffset !== 0, [re, V] = e.useState();
	return sl(() => {
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
		children: /* @__PURE__ */ v(kp, {
			scope: r,
			placedSide: ee,
			placedAlign: R,
			onArrowChange: C,
			arrowX: te,
			arrowY: B,
			shouldHideArrow: ne,
			children: /* @__PURE__ */ v(zl.div, {
				"data-side": ee,
				"data-align": R,
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
function Mp(e) {
	return e !== null;
}
_p(Mp, "isNotNull");
var Np = /* @__PURE__ */ _p((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Pp(n), u = {
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
function Pp(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
_p(Pp, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var Fp = Object.defineProperty, Ip = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Fp(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	sl(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? b.createPortal(/* @__PURE__ */ v(zl.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), Lp = Object.defineProperty, Rp = (e, t) => Lp(e, "name", {
	value: t,
	configurable: !0
});
function zp(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
Rp(zp, "useStateMachine");
var Bp = /* @__PURE__ */ Rp((t) => {
	let { present: n, children: r } = t, i = Vp(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = Up(i.ref, Gp(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Vp(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = zp(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? Wp(i.current), s.current = void 0) : o.current = "none";
	}, [c]), sl(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Wp(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), sl(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ Rp((r) => {
				let o = Wp(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Rp((e) => {
				e.target === n && (o.current = Wp(i.current));
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
				i.current = t, s.current = Wp(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
Rp(Vp, "usePresence");
function Hp(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Rp(Hp, "setRef");
function Up(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = Hp(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : Hp(t[e], null);
			}
		};
	}, []);
}
Rp(Up, "useStableComposedRefs");
function Wp(e) {
	return e?.animationName || "none";
}
Rp(Wp, "getAnimationName");
function Gp(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Rp(Gp, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var Kp = Object.defineProperty, qp = (e, t) => Kp(e, "name", {
	value: t,
	configurable: !0
}), Jp = !1;
function Yp() {
	let [t, n] = e.useState(Jp);
	return e.useEffect(() => {
		Jp || (Jp = !0, n(!0));
	}, []), t;
}
qp(Yp, "useIsHydrated");
var Xp = e.useSyncExternalStore;
function Zp() {
	return () => {};
}
qp(Zp, "subscribe");
function Qp() {
	return Xp(Zp, () => !0, () => !1);
}
qp(Qp, "useIsHydratedModern");
var $p = typeof Xp == "function" ? Qp : Yp, em = Object.defineProperty, tm = (e, t) => em(e, "name", {
	value: t,
	configurable: !0
}), nm = "rovingFocusGroup.onEntryFocus", rm = {
	bubbles: !1,
	cancelable: !0
}, im = "RovingFocusGroup", [am, om, sm] = /* @__PURE__ */ Ul(im), [cm, lm] = /* @__PURE__ */ al(im, [sm]), um = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, dm = {
	LTR: "ltr",
	RTL: "rtl"
}, [fm, pm] = cm(im), mm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ tm(function(e, t) {
	return /* @__PURE__ */ v(am.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ v(am.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ v(hm, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), hm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ tm(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = tl(n, p), h = iu(o), [g, _] = gl({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: im
	}), [y, b] = e.useState(!1), x = su(u), S = om(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(nm, x), () => e.removeEventListener(nm, x);
	}, [x]), /* @__PURE__ */ v(fm, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ v(zl.div, {
			tabIndex: y || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: Y(t.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: Y(t.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !y) {
					let t = new CustomEvent(nm, rm);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						xm([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				C.current = !1;
			}),
			onBlur: Y(t.onBlur, () => b(!1))
		})
	});
}, "RovingFocusGroupImpl")), gm = "RovingFocusGroupItem", _m = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ tm(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = ed(), u = o || l, d = pm(gm, r), f = d.currentTabStopId === u, p = om(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d, _ = $p();
	return sl(() => {
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
	]), /* @__PURE__ */ v(am.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ v(zl.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: Y(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: Y(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: Y(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = bm(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? Sm(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => xm(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), vm = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ym(e, t) {
	return t === dm.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
tm(ym, "getDirectionAwareKey");
function bm(e, t, n) {
	let r = ym(e.key, n);
	if (!(t === um.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === um.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return vm[r];
}
tm(bm, "getFocusIntent");
function xm(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
tm(xm, "focusFirst");
function Sm(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
tm(Sm, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Cm = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, wm = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap(), Em = {}, Dm = 0, Om = function(e) {
	return e && (e.host || Om(e.parentNode));
}, km = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Om(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Am = function(e, t, n, r) {
	var i = km(t, Array.isArray(e) ? e : [e]);
	Em[n] || (Em[n] = /* @__PURE__ */ new WeakMap());
	var a = Em[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (wm.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				wm.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Tm.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Dm++, function() {
		o.forEach(function(e) {
			var t = wm.get(e) - 1, i = a.get(e) - 1;
			wm.set(e, t), a.set(e, i), t || (Tm.has(e) || e.removeAttribute(r), Tm.delete(e)), i || e.removeAttribute(n);
		}), Dm--, Dm || (wm = /* @__PURE__ */ new WeakMap(), wm = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap(), Em = {});
	};
}, jm = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Cm(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Am(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Mm = function() {
	return Mm = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Mm.apply(this, arguments);
};
function Nm(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Pm(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Fm = "right-scroll-bar-position", Im = "width-before-scroll-bar", Lm = "with-scroll-bars-hidden", Rm = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function zm(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function Bm(e, t) {
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
var Vm = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Hm = /* @__PURE__ */ new WeakMap();
function Um(e, t) {
	var n = Bm(t || null, function(t) {
		return e.forEach(function(e) {
			return zm(e, t);
		});
	});
	return Vm(function() {
		var t = Hm.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || zm(e, null);
			}), i.forEach(function(e) {
				r.has(e) || zm(e, a);
			});
		}
		Hm.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Wm(e) {
	return e;
}
function Gm(e, t) {
	t === void 0 && (t = Wm);
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
function Km(e) {
	e === void 0 && (e = {});
	var t = Gm(null);
	return t.options = Mm({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var qm = function(t) {
	var n = t.sideCar, r = Nm(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Mm({}, r));
};
qm.isSideCarExport = !0;
function Jm(e, t) {
	return e.useMedium(t), qm;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ym = Km(), Xm = function() {}, Zm = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Xm,
		onWheelCapture: Xm,
		onTouchMoveCapture: Xm
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Nm(t, [
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
	]), S = p, C = Um([r, n]), w = Mm(Mm({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Ym,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Mm(Mm({}, w), { ref: C })) : e.createElement(y, Mm({}, w, {
		className: l,
		ref: C
	}), c));
});
Zm.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Zm.classNames = {
	fullWidth: Im,
	zeroRight: Fm
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Qm = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function $m() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Qm();
	return t && e.setAttribute("nonce", t), e;
}
function eh(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function th(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var nh = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = $m()) && (eh(t, n), th(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, rh = function() {
	var t = nh();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, ih = function() {
	var e = rh();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, ah = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, oh = function(e) {
	return parseInt(e || "", 10) || 0;
}, sh = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		oh(n),
		oh(r),
		oh(i)
	];
}, ch = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return ah;
	var t = sh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, lh = ih(), uh = "data-scroll-locked", dh = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Lm} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${uh}] {
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
  
  .${Fm} {
    right: ${s}px ${r};
  }
  
  .${Im} {
    margin-right: ${s}px ${r};
  }
  
  .${Fm} .${Fm} {
    right: 0 ${r};
  }
  
  .${Im} .${Im} {
    margin-right: 0 ${r};
  }
  
  body[${uh}] {
    ${Rm}: ${s}px;
  }
`;
}, fh = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, ph = function() {
	e.useEffect(function() {
		return document.body.setAttribute(uh, (fh() + 1).toString()), function() {
			var e = fh() - 1;
			e <= 0 ? document.body.removeAttribute(uh) : document.body.setAttribute(uh, e.toString());
		};
	}, []);
}, mh = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	ph();
	var o = e.useMemo(function() {
		return ch(a);
	}, [a]);
	return e.createElement(lh, { styles: dh(o, !n, a, r ? "" : "!important") });
}, hh = !1;
if (typeof window < "u") try {
	var gh = Object.defineProperty({}, "passive", { get: function() {
		return hh = !0, !0;
	} });
	window.addEventListener("test", gh, gh), window.removeEventListener("test", gh, gh);
} catch {
	hh = !1;
}
var _h = hh ? { passive: !1 } : !1, vh = function(e) {
	return e.tagName === "TEXTAREA";
}, yh = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !vh(e) && n[t] === "visible");
}, bh = function(e) {
	return yh(e, "overflowY");
}, xh = function(e) {
	return yh(e, "overflowX");
}, Sh = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Th(e, r)) {
			var i = Eh(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Ch = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, wh = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Th = function(e, t) {
	return e === "v" ? bh(t) : xh(t);
}, Eh = function(e, t) {
	return e === "v" ? Ch(t) : wh(t);
}, Dh = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Oh = function(e, t, n, r, i) {
	var a = Dh(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Eh(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Th(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, kh = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ah = function(e) {
	return [e.deltaX, e.deltaY];
}, jh = function(e) {
	return e && "current" in e ? e.current : e;
}, Mh = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Nh = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ph = 0, Fh = [];
function Ih(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Ph++)[0], o = e.useState(ih)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Pm([t.lockRef.current], (t.shards || []).map(jh), !0).filter(Boolean);
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
		var n = kh(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Sh(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Sh(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return Oh(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (Fh.length && Fh[Fh.length - 1] === o) {
			var r = "deltaY" in t ? Ah(t) : kh(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Mh(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(jh).filter(Boolean).filter(function(e) {
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
			shadowParent: Lh(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = kh(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Ah(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, kh(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Fh.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, _h), document.addEventListener("touchmove", l, _h), document.addEventListener("touchstart", d, _h), function() {
			Fh = Fh.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, _h), document.removeEventListener("touchmove", l, _h), document.removeEventListener("touchstart", d, _h);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Nh(a) }) : null, m ? e.createElement(mh, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Lh(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Rh = Jm(Ym, Ih), zh = e.forwardRef(function(t, n) {
	return e.createElement(Zm, Mm({}, t, {
		ref: n,
		sideCar: Rh
	}));
});
zh.classNames = Zm.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var Bh = Object.defineProperty, Vh = (e, t) => Bh(e, "name", {
	value: t,
	configurable: !0
}), Hh = {
	LTR: "ltr",
	RTL: "rtl"
}, Uh = ["Enter", " "], Wh = [
	"ArrowDown",
	"PageUp",
	"Home"
], Gh = [
	"ArrowUp",
	"PageDown",
	"End"
], Kh = [...Wh, ...Gh], qh = {
	ltr: [...Uh, "ArrowRight"],
	rtl: [...Uh, "ArrowLeft"]
}, Jh = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Yh = "Menu", [Xh, Zh, Qh] = /* @__PURE__ */ Ul(Yh), [$h, eg] = /* @__PURE__ */ al(Yh, [
	Qh,
	Sp,
	lm
]), tg = Sp(), ng = lm(), [rg, ig] = $h(Yh), [ag, og] = $h(Yh), sg = /* @__PURE__ */ Vh((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = tg(n), [l, u] = e.useState(null), d = e.useRef(!1), f = su(o), p = iu(a);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Vh(() => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ Vh(() => d.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), e.useEffect(() => {
		if (!r) return;
		let e = /* @__PURE__ */ Vh(() => f(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, f]), /* @__PURE__ */ v(Tp, {
		...c,
		children: /* @__PURE__ */ v(rg, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ v(ag, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), cg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = tg(n);
	return /* @__PURE__ */ v(Dp, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), lg = "MenuPortal", [ug, dg] = $h(lg, { forceMount: void 0 }), fg = /* @__PURE__ */ Vh((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = ig(lg, t);
	return /* @__PURE__ */ v(ug, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ v(Bp, {
			present: n || a.open,
			children: /* @__PURE__ */ v(Ip, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), pg = "MenuContent", [mg, hg] = $h(pg), gg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let n = dg(pg, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = ig(pg, e.__scopeMenu), o = og(pg, e.__scopeMenu);
	return /* @__PURE__ */ v(Xh.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ v(Bp, {
			present: r || a.open,
			children: /* @__PURE__ */ v(Xh.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ v(_g, {
					...i,
					ref: t
				}) : /* @__PURE__ */ v(vg, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), _g = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let r = ig(pg, t.__scopeMenu), i = e.useRef(null), a = tl(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return jm(e);
	}, []), /* @__PURE__ */ v(bg, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: Y(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), vg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let n = ig(pg, e.__scopeMenu);
	return /* @__PURE__ */ v(bg, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), yg = /* @__PURE__ */ Cl("MenuContent.ScrollLock"), bg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = ig(pg, r), y = og(pg, r), b = tg(r), x = ng(r), S = Zh(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	Ru(E);
	let { nodes: O, registry: k } = Lu(), A = !!(a || h), j = tl(n, T, _.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), ee = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), R = h ? zh : e.Fragment, z = h ? {
		as: yg,
		allowPinchZoom: !0,
		shards: ee
	} : void 0, te = /* @__PURE__ */ Vh((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Yg(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Vh((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), Du();
	let B = e.useCallback((e) => I.current === F.current?.side && Zg(e, F.current?.area), []);
	return /* @__PURE__ */ v(mg, {
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
		children: /* @__PURE__ */ v(Iu, {
			registry: A ? k : null,
			children: /* @__PURE__ */ v(R, {
				...z,
				children: /* @__PURE__ */ v(Pu, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: Y(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ v(hu, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ v(mm, {
							asChild: !0,
							...x,
							dir: y.dir,
							orientation: "vertical",
							loop: i,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: Y(l, (e) => {
								y.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ v(jp, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": Wg(_.open),
								"data-radix-menu-content": "",
								dir: y.dir,
								...b,
								...g,
								ref: j,
								style: {
									outline: "none",
									...g.style
								},
								onKeyDown: Y(g.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && te(e.key));
									let i = T.current;
									if (e.target !== i || !Kh.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									Gh.includes(e.key) && a.reverse(), qg(a);
								}),
								onBlur: Y(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: Y(t.onPointerMove, Qg((e) => {
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
}, "MenuContentImpl")), xg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(zl.div, {
		role: "group",
		...r,
		ref: t
	});
}, "MenuGroup")), Sg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(zl.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), Cg = "MenuItem", wg = "menu.itemSelect", Tg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = og(Cg, t.__scopeMenu), c = hg(Cg, t.__scopeMenu), l = tl(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Vh(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(wg, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(wg, (e) => i?.(e), { once: !0 }), Bl(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ v(Eg, {
		...a,
		ref: l,
		disabled: r,
		onClick: Y(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: Y(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: Y(t.onKeyDown, (e) => {
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && Uh.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Eg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = hg(Cg, r), c = ng(r), l = e.useRef(null), u = tl(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ v(Xh.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ v(_m, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ v(zl.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: Y(t.onPointerMove, Qg((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: Y(t.onPointerLeave, Qg((e) => s.onItemLeave(e))),
				onFocus: Y(t.onFocus, () => f(!0)),
				onBlur: Y(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), Dg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ v(Ng, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ v(Tg, {
			role: "menuitemcheckbox",
			"aria-checked": Gg(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Kg(n),
			onSelect: Y(i.onSelect, () => r?.(Gg(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [Og, kg] = $h("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Vh(() => {}, "onValueChange")
}), Ag = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { value: n, onValueChange: r, ...i } = e, a = su(r);
	return /* @__PURE__ */ v(Og, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ v(xg, {
			...i,
			ref: t
		})
	});
}, "MenuRadioGroup")), jg = "MenuRadioItem", Mg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { value: n, ...r } = e, i = kg(jg, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ v(Ng, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ v(Tg, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Kg(a),
			onSelect: Y(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [Ng, Pg] = $h("MenuItemIndicator", { checked: !1 }), Fg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(zl.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), Ig = "MenuSub", [Lg, Rg] = $h(Ig), zg = /* @__PURE__ */ Vh((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = ig(Ig, n), s = tg(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = su(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ v(Tp, {
		...s,
		children: /* @__PURE__ */ v(rg, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ v(Lg, {
				scope: n,
				contentId: ed(),
				triggerId: ed(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), Bg = "MenuSubTrigger", Vg = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let r = ig(Bg, t.__scopeMenu), i = og(Bg, t.__scopeMenu), a = Rg(Bg, t.__scopeMenu), o = hg(Bg, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = tl(n, a.onTriggerChange);
	return /* @__PURE__ */ v(cg, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ v(Eg, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": Wg(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: Y(t.onPointerMove, Qg((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: Y(t.onPointerLeave, Qg((e) => {
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
			onKeyDown: Y(t.onKeyDown, (e) => {
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && qh[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), Hg = "MenuSubContent", Ug = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Vh(function(t, n) {
	let r = dg(pg, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = ig(pg, t.__scopeMenu), c = og(pg, t.__scopeMenu), l = Rg(Hg, t.__scopeMenu), u = e.useRef(null), d = tl(n, u);
	return /* @__PURE__ */ v(Xh.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ v(Bp, {
			present: i || s.open,
			children: /* @__PURE__ */ v(Xh.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ v(bg, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === Hh.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: Y(t.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: Y(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: Y(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Jh[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function Wg(e) {
	return e ? "open" : "closed";
}
Vh(Wg, "getOpenState");
function Gg(e) {
	return e === "indeterminate";
}
Vh(Gg, "isIndeterminate");
function Kg(e) {
	return Gg(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Vh(Kg, "getCheckedState");
function qg(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Vh(qg, "focusFirst");
function Jg(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Vh(Jg, "wrapArray");
function Yg(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Jg(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Vh(Yg, "getNextMatch");
function Xg(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Vh(Xg, "isPointInPolygon");
function Zg(e, t) {
	return t ? Xg({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Vh(Zg, "isPointerInGraceArea");
function Qg(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Vh(Qg, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $g = Object.defineProperty, e_ = (e, t) => $g(e, "name", {
	value: t,
	configurable: !0
}), t_ = "DropdownMenu", [n_, r_] = /* @__PURE__ */ al(t_, [eg]), i_ = eg(), [a_, o_] = n_(t_), s_ = /* @__PURE__ */ e_((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = i_(n), u = e.useRef(null), [d, f] = gl({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: t_
	});
	return /* @__PURE__ */ v(a_, {
		scope: n,
		triggerId: ed(),
		triggerRef: u,
		contentId: ed(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ v(sg, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), c_ = "DropdownMenuTrigger", l_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = o_(c_, n), o = i_(n), s = tl(t, a.triggerRef);
	return /* @__PURE__ */ v(cg, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ v(zl.button, {
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
			onPointerDown: Y(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: Y(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), u_ = /* @__PURE__ */ e_((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = i_(t);
	return /* @__PURE__ */ v(fg, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), d_ = "DropdownMenuContent", f_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = o_(d_, r), o = i_(r), s = e.useRef(!1);
	return /* @__PURE__ */ v(gg, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: Y(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: Y(t.onInteractOutside, (e) => {
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
}, "DropdownMenuContent")), p_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Sg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), m_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Tg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), h_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Dg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), g_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Ag, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioGroup")), __ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Mg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), v_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Fg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), y_ = /* @__PURE__ */ e_((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = i_(t), [s, c] = gl({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ v(zg, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), b_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Vg, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), x_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ e_(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = i_(n);
	return /* @__PURE__ */ v(Ug, {
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
}, "DropdownMenuSubContent")), S_ = s_, C_ = l_, w_ = y_, T_ = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ v(b_, {
	ref: i,
	className: K("uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:focus:bg-gray-100 uhuu:data-[state=open]:bg-gray-100", t && "uhuu:pl-8", e),
	...r,
	children: n
}));
T_.displayName = b_.displayName;
var E_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(x_, {
	ref: n,
	className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
E_.displayName = x_.displayName;
var D_ = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = as();
	return /* @__PURE__ */ v(u_, {
		container: i || void 0,
		children: /* @__PURE__ */ v(f_, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
D_.displayName = f_.displayName;
var O_ = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(m_, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", t && "uhuu:pl-8", e),
	...n
}));
O_.displayName = m_.displayName;
var k_ = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ v(h_, {
	ref: i,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
k_.displayName = h_.displayName;
var A_ = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v(__, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
A_.displayName = __.displayName;
var j_ = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(p_, {
	ref: r,
	className: K("uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:font-medium", t && "uhuu:pl-8", e),
	...n
}));
j_.displayName = p_.displayName;
var M_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(v_, {
	ref: n,
	className: K("uhuu:-mx-1 uhuu:my-1 uhuu:h-px uhuu:bg-gray-200", e),
	...t
}));
M_.displayName = v_.displayName;
var N_ = (e, t, n) => {
	le() || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && ue()?.editDialog?.(kn(t.dialog, n)));
}, P_ = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ v("div", {
			className: mo("uhuu-image-overlay", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ v("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: mo("uhuu-image-overlay uhuu-image-overlay-img", t)
	});
};
function F_({ options: t, anchorInsets: n }) {
	let { t: r } = ic(), i = e.useRef(null), a = /* @__PURE__ */ v("div", {
		ref: i,
		"data-uhuu-chrome": !0,
		className: "uhuu:pointer-events-auto uhuu:absolute uhuu:right-2 uhuu:top-2 uhuu:z-20",
		children: /* @__PURE__ */ y(S_, {
			modal: !1,
			children: [/* @__PURE__ */ v(C_, {
				asChild: !0,
				children: /* @__PURE__ */ v(bs, {
					variant: "secondary",
					size: "icon",
					title: r("image.options"),
					className: "uhuu:h-7 uhuu:w-7 uhuu:shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ v(zo, { className: "uhuu:h-4 uhuu:w-4" })
				})
			}), /* @__PURE__ */ v(D_, {
				className: "uhuu:w-40 uhuu:p-1.5",
				align: "end",
				children: t.map((e) => /* @__PURE__ */ y(O_, {
					onSelect: (t) => N_(t, e, i.current?.parentElement),
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
var I_ = (e, t, n) => t ? /* @__PURE__ */ v(F_, {
	options: e,
	anchorInsets: n
}) : null, L_ = (e = [], t) => {
	let n = Hc(), r = Bc() && t;
	return {
		showOptions: e.length > 0 && !n && !r,
		toolbarActions: r && e.length > 0 ? e : void 0
	};
}, R_ = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: c, options: l = [], dialog: u, dialogProps: d, binding: f, placeholder: p, children: m, imageProps: h, renderImage: g, onError: _ }) => {
	let { showOptions: b, toolbarActions: x } = L_(l, f ? f["data-uhuu"] !== void 0 : !!u), S = e.useMemo(() => f ?? (u ? Fr(u, {
		kind: "image",
		actions: x
	}) : {}), [
		f,
		u,
		x
	]), C = ho({ onError: (e) => {
		_?.(e), h?.onError?.(e);
	} }), w = e.useMemo(() => {
		if (!d) return S;
		let e = {
			...S,
			...d
		};
		return (S.className || d.className) && (e.className = mo(S.className, d.className)), Object.keys(S).forEach((t) => {
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
			className: mo("uhuu-image-img", i, e),
			style: {
				...o,
				...t
			}
		};
		return g ? g(s) : r ? /* @__PURE__ */ v("img", {
			...s,
			onError: C
		}) : p ?? null;
	}, O = w["data-uhuu"], k = e.Children.toArray(m).some((t) => e.isValidElement(t) ? t.type === yo || t.type === bo : !1), A = { ...w };
	k && delete A["data-uhuu"];
	let j = e.Children.map(m, (t) => e.isValidElement(t) && (t.type === yo || t.type === bo) ? e.cloneElement(t, { dataUhuu: O }) : t);
	return /* @__PURE__ */ y("div", {
		className: mo(k ? "uhuu-image-block uhuu-image-block-fill" : "uhuu-image-block", r),
		style: a,
		children: [/* @__PURE__ */ y("div", {
			...A,
			className: mo("uhuu-image-body", E && "uhuu-image-empty", w.className),
			children: [
				D(),
				j,
				P_(s, c)
			]
		}), I_(l, b)]
	});
}, z_ = ({ className: e, style: t, overlaySvg: n, overlayClassName: r, options: i = [], dialog: a, dialogProps: o, bleedProps: s, children: l }) => {
	let u = c(R), { showOptions: d, toolbarActions: f } = L_(i, !!a || s?.binding?.["data-uhuu"] !== void 0), p = vo({
		...s,
		pageWidth: s?.pageWidth ?? u?.page?.width ?? 210,
		bleed: s?.bleed ?? u?.page?.bleed ?? 0
	}, "bleed");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(bo, {
		...s,
		dialog: a,
		actions: f,
		children: [P_(n, r), l]
	}), I_(i, d, p)] });
}, B_ = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(R), { showOptions: s, toolbarActions: l } = L_(n, !!r || i?.binding?.["data-uhuu"] !== void 0), u = vo({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(yo, {
		...i,
		dialog: r,
		actions: l,
		children: [P_(e, t), a]
	}), I_(n, s, u)] });
}, V_ = "https://render.uhuu.io/media/thumb", H_ = "image/svg+xml";
function U_(e) {
	return typeof e == "string" ? { url: J(e) } : q(e) ? {
		url: J(e.contentUrl) ?? J(e.url) ?? J(e.src),
		type: J(e.encodingFormat) ?? J(e.mimeType)
	} : { url: void 0 };
}
function W_() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function G_(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function K_(e, t, n) {
	if (n && n.toLowerCase().startsWith(H_)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === H_) return !0;
	}
	return !1;
}
var q_ = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function J_(e, t = {}) {
	let n = q(t) ? t : {}, { url: r, type: i } = U_(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = G_(r), s = J(n.format);
	if (q_(o) && (s ||= J(o.searchParams.get("format")), a = J(o.searchParams.get("url")) ?? r, o = G_(a)), !/^https?:\/\//i.test(a) || K_(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : W_()) ? J(n.printSize) ?? "4000x4000" : J(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${V_}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/frame/vendor/frame.ts
var Y_ = "uhuu.frame.v1", X_ = "uhuuFrame", Z_ = "image", Q_ = [
	"image",
	"url",
	"contentUrl",
	"src",
	"imageUrl",
	"imageSrc",
	"dataImage"
], $_ = [
	["cadastral", "cadastral"],
	["satellite", "satellite"],
	["mapbox", "map"],
	["list", "map"],
	["home", "map"]
], ev = /* @__PURE__ */ new Set([Z_, "search-image"]), tv = (e) => typeof e == "object" && !!e && !Array.isArray(e), nv = (e) => typeof e == "string" && e.trim() !== "" ? e : void 0, rv = (e) => typeof e == "number" && Number.isFinite(e) && e > 0 ? e : void 0;
function iv(e) {
	let t = nv(e);
	return !!t && !/^\s*(data|blob):/i.test(t);
}
var av = (e, t) => {
	let n = new Set(t), r = {};
	for (let [t, i] of Object.entries(e)) n.has(t) || (r[t] = i);
	return r;
}, ov = [
	"width",
	"height",
	"mimeType"
], sv = (e) => {
	let t = av(e, [
		...Q_,
		...ov,
		X_
	]);
	return Object.keys(t).length ? uv(t) : void 0;
}, cv = (e) => ({
	width: rv(e.width),
	height: rv(e.height),
	mimeType: nv(e.mimeType) ?? nv(e.encodingFormat)
}), lv = (e) => {
	let t = {};
	for (let [n, r] of Object.entries(e)) r !== void 0 && (t[n] = r);
	return t;
}, uv = (e) => e === void 0 ? e : JSON.parse(JSON.stringify(e));
function dv(e) {
	return tv(e) && tv(e.uhuuFrame) && e.uhuuFrame.schema === "uhuu.frame.v1";
}
var fv = (e) => {
	if (!tv(e)) return null;
	let t = nv(e.type), n = nv(e.url);
	return !t || !n ? null : lv({
		type: t,
		url: n,
		...cv(e),
		state: tv(e.state) ? e.state : void 0
	});
}, pv = (e) => !tv(e) || !("state" in e) ? null : lv({
	state: e.state,
	baseUrl: nv(e.baseUrl),
	stale: e.stale === !0 || void 0
}), mv = (e) => {
	if (!tv(e)) return null;
	let t = Array.isArray(e.steps) ? e.steps.map(fv).filter((e) => e !== null) : [], n = {};
	if (tv(e.layers)) for (let [t, r] of Object.entries(e.layers)) {
		let e = pv(r);
		e && (n[t] = e);
	}
	return lv({
		url: nv(e.url),
		urlKey: nv(e.urlKey),
		...cv(e),
		state: tv(e.state) ? e.state : void 0,
		steps: t.length ? t : void 0,
		layers: Object.keys(n).length ? n : void 0
	});
}, hv = (e) => {
	let t = {};
	if (tv(e.sources)) for (let [n, r] of Object.entries(e.sources)) {
		let e = mv(r);
		e && (t[n] = e);
	}
	let n = nv(e.active), r = n && t[n] ? n : null, i;
	if (tv(e.previous)) {
		let t = e.previous.before === null ? null : mv(e.previous.before);
		i = lv({
			active: nv(e.previous.active) ?? null,
			type: nv(e.previous.type),
			before: nv(e.previous.type) ? t : void 0
		});
	}
	return lv({
		schema: Y_,
		active: r,
		sources: t,
		previous: i
	});
}, gv = (e) => {
	let t = e.active ? e.sources[e.active] : void 0;
	if (!t) return {
		url: "",
		source: null,
		steps: 0
	};
	let n = t.steps ?? [], r = n[n.length - 1] ?? t;
	return lv({
		url: r.url ?? "",
		width: r.width,
		height: r.height,
		mimeType: r.mimeType,
		source: e.active,
		steps: n.length
	});
}, _v = (e) => iv(e) ? e : void 0, vv = () => ({
	schema: Y_,
	active: null,
	sources: {}
}), yv = (e) => e.sources?.find((e) => !ev.has(e)) ?? "map", bv = (e) => {
	for (let [t, n] of $_) if (t in e && e[t] !== void 0 && e[t] !== null) return n;
}, xv = (e) => {
	let t = e.legacyLayer;
	if (tv(t)) return nv(t.annotationSvg) || Array.isArray(t.annotations) && t.annotations.length ? { state: t } : void 0;
}, Sv = (e, t) => {
	let n = vv();
	if (typeof e == "string") {
		if (!nv(e)) return null;
		n.sources[Z_] = { url: e }, n.active = Z_;
	} else if (tv(e)) {
		let r = bv(e), i = nv(e.image), a = (t.legacyDataImage ?? "show") === "show" ? nv(e.dataImage) : void 0, o = i ?? a, s = !!r || !!o || nv(e.dataImage) !== void 0, c = s ? nv(e.contentUrl) : nv(e.contentUrl) ?? nv(e.url) ?? nv(e.src) ?? nv(e.imageUrl) ?? nv(e.imageSrc);
		if (s) {
			let s = r ?? yv(t);
			if (n.sources[s] = lv({
				url: o,
				urlKey: i ? "image" : a ? "dataImage" : void 0,
				...cv(e),
				state: sv(e)
			}), n.active = s, c && c !== o) n.sources[Z_] = {
				url: c,
				urlKey: "contentUrl"
			}, (t.legacyPrecedence ?? "generated") === "pick" && (n.active = Z_);
			else {
				let t = nv(e.url);
				t && t !== o && t !== nv(e.dataImage) && (n.sources[Z_] = {
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
			n.sources[Z_] = lv({
				url: c,
				urlKey: t,
				...cv(e),
				state: sv(e)
			}), n.active = Z_;
		} else return null;
	} else return null;
	let r = xv(t);
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
function Cv(e, t = {}) {
	if (!dv(e)) return Sv(e, t);
	let n = hv(e[X_]), r = xv(t), i = n.active;
	if (r && i && n.sources[i]) {
		let e = t.legacyLayerType ?? "annotation", a = n.sources[i], o = a.layers?.[e];
		JSON.stringify(o?.state) !== JSON.stringify(r.state) && (n.sources[i] = {
			...a,
			layers: {
				...a.layers ?? {},
				[e]: lv({
					state: r.state,
					baseUrl: _v(gv(n).url)
				})
			}
		});
	}
	let a = gv(n).url, o = [nv(e.contentUrl), nv(e.url)].find((e) => e !== void 0 && e !== a);
	if (o) {
		let e = n.sources.image ?? null;
		n.sources[Z_] = {
			url: o,
			urlKey: "contentUrl"
		}, n.previous = {
			active: n.active,
			type: Z_,
			before: e
		}, n.active = Z_;
	}
	return n.active || Object.keys(n.sources).length ? n : null;
}
function wv(e, t = {}) {
	let n = Cv(e, t);
	return n ? gv(n) : {
		url: "",
		source: null,
		steps: 0
	};
}
function Tv(e, t = {}) {
	return Cv(e, t)?.active ?? null;
}
function Ev(e, t = {}) {
	let n = Cv(e, t), r = n?.active, i = r ? n.sources[r] : void 0;
	if (!r || !i) return [];
	let a = [], o = t.intrinsicOverlays ? nv(i.state?.annotationSvg) : void 0;
	o && a.push({
		key: r,
		svg: o,
		stale: !1,
		intrinsic: !0
	});
	for (let [e, t] of Object.entries(i.layers ?? {})) {
		let n = tv(t.state) ? nv(t.state.annotationSvg) : void 0;
		n && a.push({
			key: e,
			svg: n,
			stale: t.stale === !0,
			intrinsic: !1
		});
	}
	return a;
}
function Dv(e, t = {}) {
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
	}), a = e.annotationPath, o = e.layers?.find((e) => e?.type === "annotation"), s = nv(t.image);
	if (o && a && s) {
		let e = t.annotation, n = tv(e) && Array.isArray(e.annotations) ? e.annotations : [], { type: r, ...c } = o;
		i.push({
			...c,
			type: r,
			path: a,
			image: s,
			annotations: n,
			value: tv(e) ? e : {}
		});
	}
	return i;
}
//#endregion
//#region src/uhuu/frame/frame-dialog.js
var Ov = "frame", kv = [
	"title",
	"sources",
	"layers",
	"transforms",
	"ratio",
	"legacyPrecedence",
	"legacyDataImage",
	"annotationPath"
];
function Av(e) {
	let t = { path: e?.path };
	for (let n of kv) e?.[n] !== void 0 && (t[n] = e[n]);
	return t;
}
function jv(e, t = {}) {
	let { path: n, ...r } = e ?? {}, i = Array.isArray(r.sources) ? r.sources.filter((e) => e?.type) : [];
	return !n || !i.length ? null : {
		path: n,
		frame: {
			...r,
			sources: i
		},
		types: Dv({
			...r,
			path: n,
			sources: i
		}, t ?? {})
	};
}
function Mv(e, t) {
	let n = typeof window < "u" ? window.$uhuu : void 0;
	if (typeof n?.editFrame == "function") return n.editFrame(e);
	let r = jv(e, t);
	r && n?.editDialog?.(r);
}
function Nv(e, t, { kind: n, actions: r } = {}) {
	let i = jv(e, t);
	return i ? {
		...Fr(i, {
			kind: n,
			actions: r,
			open: (n) => Mv(kn(e, n), t)
		}),
		"data-uhuu-type": Ov
	} : {};
}
//#endregion
//#region src/uhuu/frame/frame-block.tsx
var Pv = ({ svgs: t, className: n, children: r }) => /* @__PURE__ */ y(_, { children: [t.map((t, r) => /* @__PURE__ */ v(e.Fragment, { children: P_(t, n) }, r)), r] }), Fv = (e) => {
	let { path: t, sources: n, layers: r, transforms: i, ratio: a, legacyPrecedence: o, legacyDataImage: s, intrinsicOverlays: c, annotationPath: l, value: u, annotation: d, src: p, imageUrlOptions: m, mode: h, side: g, alt: _, className: y, imageClassName: b, style: x, imageStyle: S, backgroundColor: C, width: w, height: T, left: E, right: D, top: O, bottom: k, pageWidth: A, pageHeight: j, bleed: M, overlaySvg: N, overlayClassName: P, options: F, dialogProps: I, placeholder: L, children: ee, imageProps: R, renderImage: z, onError: te } = e, B = (Array.isArray(n) ? n : []).map((e) => e?.type).filter((e) => typeof e == "string" && e !== "").join("\n"), { src: ne, svgs: re, shownUrl: V, shownSource: ie } = f(() => {
		let e = {
			sources: B ? B.split("\n") : void 0,
			legacyPrecedence: o,
			legacyDataImage: s,
			intrinsicOverlays: c,
			legacyLayer: d ?? void 0
		}, t = wv(u, e), n = Ev(u, e).map((e) => e.svg);
		return {
			src: p ?? J_(t.url ? {
				contentUrl: t.url,
				mimeType: t.mimeType
			} : null, m),
			svgs: N ? [...n, N] : n,
			shownUrl: t.url,
			shownSource: Tv(u, e) ?? e.sources?.[0]
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
	]), ae = F, { toolbarActions: H } = L_(ae, !0), oe = f(() => Nv(Av({
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
	].some((e) => e !== void 0), ce = h ?? (g === void 0 ? se ? "bleed" : "auto" : "spread"), le = /* @__PURE__ */ v(Pv, {
		svgs: re,
		className: P,
		children: ee
	});
	if (ce === "auto") return /* @__PURE__ */ v(R_, {
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
		imageProps: R,
		renderImage: z,
		onError: te,
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
		onError: te,
		binding: oe
	};
	return ce === "spread" ? /* @__PURE__ */ v(B_, {
		className: y,
		style: x,
		options: ae,
		spreadProps: {
			...ue,
			side: g
		},
		children: le
	}) : /* @__PURE__ */ v(z_, {
		className: y,
		style: x,
		options: ae,
		bleedProps: ue,
		children: le
	});
};
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/guards.js
function X(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Iv(e) {
	return X(e) ? e : {};
}
function Lv(e) {
	return (typeof e == "string" ? e.trim() : "") || void 0;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseNumber.js
var Rv = (e, t) => {
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
}, zv = {
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
}, Bv = (e) => Rv(zv[e.toLowerCase()], 6), Vv = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Hv = (e) => {
	let t;
	return (t = e.match(Vv)) ? Rv(parseInt(t[1], 16), t[1].length) : void 0;
}, Uv = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
`${Uv}`;
var Wv = `${Uv}%`;
`${Uv}`;
var Gv = `(?:${Uv}%|${Uv})`, Kv = `(?:${Uv}%|${Uv}|none)`, qv = `(?:${Uv}(deg|grad|rad|turn)|${Uv})`;
`${Uv}${Uv}`;
var Jv = "\\s*,\\s*";
RegExp("^" + Kv + "$");
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgbLegacy.js
var Yv = RegExp(`^rgba?\\(\\s*${Uv}${Jv}${Uv}${Jv}${Uv}\\s*(?:,\\s*${Gv}\\s*)?\\)$`), Xv = RegExp(`^rgba?\\(\\s*${Wv}${Jv}${Wv}${Jv}${Wv}\\s*(?:,\\s*${Gv}\\s*)?\\)$`), Zv = (e) => {
	let t = { mode: "rgb" }, n;
	if (n = e.match(Yv)) n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
	else if (n = e.match(Xv)) n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
	else return;
	return n[4] === void 0 ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))) : t.alpha = Math.max(0, Math.min(1, n[4] / 100)), t;
}, Qv = (e, t) => e === void 0 ? void 0 : typeof e == "object" ? e.mode === void 0 ? t ? {
	...e,
	mode: t
} : void 0 : e : xy(e), $v = (e = "rgb") => (t) => (t = Qv(t, e)) === void 0 ? void 0 : t.mode === e ? t : ey[t.mode][e] ? ey[t.mode][e](t) : e === "rgb" ? ey[t.mode].rgb(t) : ey.rgb[e](ey[t.mode].rgb(t)), ey = {}, ty = {}, ny = [], ry = {}, iy = (e) => e, ay = (e) => (ey[e.mode] = {
	...ey[e.mode],
	...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
	ey[t] || (ey[t] = {}), ey[t][e.mode] = e.fromMode[t];
}), e.ranges ||= {}, e.difference ||= {}, e.channels.forEach((t) => {
	if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw Error(`Missing interpolator for: ${t}`);
	typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = iy);
}), ty[e.mode] = e, (e.parse || []).forEach((t) => {
	sy(t, e.mode);
}), $v(e.mode)), oy = (e) => ty[e], sy = (e, t) => {
	if (typeof e == "string") {
		if (!t) throw Error("'mode' required when 'parser' is a string");
		ry[e] = t;
	} else typeof e == "function" && ny.indexOf(e) < 0 && ny.push(e);
}, cy = /[^\x00-\x7F]|[a-zA-Z_]/, ly = /[^\x00-\x7F]|[-\w]/, Z = {
	Function: "function",
	Ident: "ident",
	Number: "number",
	Percentage: "percentage",
	ParenClose: ")",
	None: "none",
	Hue: "hue",
	Alpha: "alpha"
}, Q = 0;
function uy(e) {
	let t = e[Q], n = e[Q + 1];
	return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[Q + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function dy(e) {
	if (Q >= e.length) return !1;
	let t = e[Q];
	if (cy.test(t)) return !0;
	if (t === "-") {
		if (e.length - Q < 2) return !1;
		let t = e[Q + 1];
		return !!(t === "-" || cy.test(t));
	}
	return !1;
}
var fy = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};
function py(e) {
	let t = "";
	if ((e[Q] === "-" || e[Q] === "+") && (t += e[Q++]), t += my(e), e[Q] === "." && /\d/.test(e[Q + 1]) && (t += e[Q++] + my(e)), (e[Q] === "e" || e[Q] === "E") && ((e[Q + 1] === "-" || e[Q + 1] === "+") && /\d/.test(e[Q + 2]) ? t += e[Q++] + e[Q++] + my(e) : /\d/.test(e[Q + 1]) && (t += e[Q++] + my(e))), dy(e)) {
		let n = hy(e);
		return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? {
			type: Z.Hue,
			value: t * fy[n]
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
function my(e) {
	let t = "";
	for (; /\d/.test(e[Q]);) t += e[Q++];
	return t;
}
function hy(e) {
	let t = "";
	for (; Q < e.length && ly.test(e[Q]);) t += e[Q++];
	return t;
}
function gy(e) {
	let t = hy(e);
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
function _y(e = "") {
	let t = e.trim(), n = [], r;
	for (Q = 0; Q < t.length;) if (r = t[Q++], r === "\n" || r === "	" || r === " ") for (; Q < t.length && (t[Q] === "\n" || t[Q] === "	" || t[Q] === " ");) Q++;
	else {
		if (r === ",") return;
		if (r === ")") n.push({ type: Z.ParenClose });
		else {
			if (r === "+") {
				if (Q--, uy(t)) {
					n.push(py(t));
					continue;
				}
				return;
			}
			if (r === "-") {
				if (Q--, uy(t)) {
					n.push(py(t));
					continue;
				}
				if (dy(t)) {
					n.push({
						type: Z.Ident,
						value: hy(t)
					});
					continue;
				}
				return;
			}
			if (r === ".") {
				if (Q--, uy(t)) {
					n.push(py(t));
					continue;
				}
				return;
			}
			if (r === "/") {
				for (; Q < t.length && (t[Q] === "\n" || t[Q] === "	" || t[Q] === " ");) Q++;
				let e;
				if (uy(t) && (e = py(t), e.type !== Z.Hue)) {
					n.push({
						type: Z.Alpha,
						value: e
					});
					continue;
				}
				if (dy(t) && hy(t) === "none") {
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
			if (/\d/.test(r)) Q--, n.push(py(t));
			else if (cy.test(r)) Q--, n.push(gy(t));
			else return;
		}
	}
	return n;
}
function vy(e) {
	e._i = 0;
	let t = e[e._i++];
	if (!t || t.type !== Z.Function || t.value !== "color" || (t = e[e._i++], t.type !== Z.Ident)) return;
	let n = ry[t.value];
	if (!n) return;
	let r = { mode: n }, i = yy(e, !1);
	if (!i) return;
	let a = oy(n).channels;
	for (let e = 0, t, n; e < a.length; e++) t = i[e], n = a[e], t.type !== Z.None && (r[n] = t.type === Z.Number ? t.value : t.value / 100, n === "alpha" && (r[n] = Math.max(0, Math.min(1, r[n]))));
	return r;
}
function yy(e, t) {
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
function by(e, t) {
	e._i = 0;
	let n = e[e._i++];
	if (!n || n.type !== Z.Function) return;
	let r = yy(e, t);
	if (r) return r.unshift(n.value), r;
}
var xy = (e) => {
	if (typeof e != "string") return;
	let t = _y(e), n = t ? by(t, !0) : void 0, r, i = 0, a = ny.length;
	for (; i < a;) if ((r = ny[i++](e, n)) !== void 0) return r;
	return t ? vy(t) : void 0;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgb.js
function Sy(e, t) {
	if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
	let n = { mode: "rgb" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.r = r.type === Z.Number ? r.value / 255 : r.value / 100), i.type !== Z.None && (n.g = i.type === Z.Number ? i.value / 255 : i.value / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value / 255 : a.value / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseTransparent.js
var Cy = (e) => e === "transparent" ? {
	mode: "rgb",
	r: 0,
	g: 0,
	b: 0,
	alpha: 0
} : void 0, wy = (e, t, n) => e + n * (t - e), Ty = (e) => {
	let t = [];
	for (let n = 0; n < e.length - 1; n++) {
		let r = e[n], i = e[n + 1];
		r === void 0 && i === void 0 ? t.push(void 0) : r !== void 0 && i !== void 0 ? t.push([r, i]) : t.push(r === void 0 ? [i, i] : [r, r]);
	}
	return t;
}, $ = ((e) => (t) => {
	let n = Ty(t);
	return (t) => {
		let r = t * n.length, i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0), a = n[i];
		return a === void 0 ? void 0 : e(a[0], a[1], r - i);
	};
})(wy), Ey = (e) => {
	let t = !1, n = e.map((e) => e === void 0 ? 1 : (t = !0, e));
	return t ? n : e;
}, Dy = {
	mode: "rgb",
	channels: [
		"r",
		"g",
		"b",
		"alpha"
	],
	parse: [
		Sy,
		Hv,
		Zv,
		Bv,
		Cy,
		"srgb"
	],
	serialize: "srgb",
	interpolate: {
		r: $,
		g: $,
		b: $,
		alpha: {
			use: $,
			fixup: Ey
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
}, Oy = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e), ky = (e) => {
	let t = Oy(e.r), n = Oy(e.g), r = Oy(e.b), i = {
		mode: "xyz65",
		x: .5766690429101305 * t + .1855582379065463 * n + .1882286462349947 * r,
		y: .297344975250536 * t + .6273635662554661 * n + .0752914584939979 * r,
		z: .0270313613864123 * t + .0706888525358272 * n + .9913375368376386 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ay = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e), jy = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "a98",
		r: Ay(e * 2.0415879038107465 - t * .5650069742788597 - .3447313507783297 * n),
		g: Ay(e * -.9692436362808798 + t * 1.8759675015077206 + .0415550574071756 * n),
		b: Ay(e * .0134442806320312 - t * .1183623922310184 + 1.0151749943912058 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, My = (e = 0) => {
	let t = Math.abs(e);
	return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4;
}, Ny = ({ r: e, g: t, b: n, alpha: r }) => {
	let i = {
		mode: "lrgb",
		r: My(e),
		g: My(t),
		b: My(n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, Py = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ny(e), a = {
		mode: "xyz65",
		x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
		y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
		z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, Fy = (e = 0) => {
	let t = Math.abs(e);
	return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92;
}, Iy = ({ r: e, g: t, b: n, alpha: r }, i = "rgb") => {
	let a = {
		mode: i,
		r: Fy(e),
		g: Fy(t),
		b: Fy(n)
	};
	return r !== void 0 && (a.alpha = r), a;
}, Ly = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Iy({
		r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
		g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
		b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, Ry = {
	...Dy,
	mode: "a98",
	parse: ["a98-rgb"],
	serialize: "a98-rgb",
	fromMode: {
		rgb: (e) => jy(Py(e)),
		xyz65: jy
	},
	toMode: {
		rgb: (e) => Ly(ky(e)),
		xyz65: ky
	}
}, zy = (e) => (e %= 360) < 0 ? e + 360 : e, By = (e, t) => e.map((n, r, i) => {
	if (n === void 0) return n;
	let a = zy(n);
	return r === 0 || e[r - 1] === void 0 ? a : t(a - zy(i[r - 1]));
}).reduce((e, t) => !e.length || t === void 0 || e[e.length - 1] === void 0 ? (e.push(t), e) : (e.push(t + e[e.length - 1]), e), []), Vy = (e) => By(e, (e) => Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e)), Hy = [
	-.14861,
	1.78277,
	-.29227,
	-.90649,
	1.97294,
	0
], Uy = Math.PI / 180, Wy = 180 / Math.PI, Gy = Hy[3] * Hy[4], Ky = Hy[1] * Hy[4], qy = Hy[1] * Hy[2] - Hy[0] * Hy[3], Jy = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (qy * n + e * Gy - t * Ky) / (qy + Gy - Ky), a = n - i, o = (Hy[4] * (t - i) - Hy[2] * a) / Hy[3], s = {
		mode: "cubehelix",
		l: i,
		s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (Hy[4] * i * (1 - i))
	};
	return s.s && (s.h = Math.atan2(o, a) * Wy - 120), r !== void 0 && (s.alpha = r), s;
}, Yy = ({ h: e, s: t, l: n, alpha: r }) => {
	let i = { mode: "rgb" };
	e = (e === void 0 ? 0 : e + 120) * Uy, n === void 0 && (n = 0);
	let a = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
	return i.r = n + a * (Hy[0] * o + Hy[1] * s), i.g = n + a * (Hy[2] * o + Hy[3] * s), i.b = n + a * (Hy[4] * o + Hy[5] * s), r !== void 0 && (i.alpha = r), i;
}, Xy = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
	let n = zy(e.h), r = zy(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.s * t.s) * i;
}, Zy = (e, t) => {
	if (e.h === void 0 || t.h === void 0) return 0;
	let n = zy(e.h), r = zy(t.h);
	return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
}, Qy = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
	let n = zy(e.h), r = zy(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.c * t.c) * i;
}, $y = (e = "rgb", t = [
	1,
	1,
	1,
	0
]) => {
	let n = oy(e), r = n.channels, i = n.difference, a = $v(e);
	return (e, n) => {
		let o = a(e), s = a(n);
		return Math.sqrt(r.reduce((e, n, r) => {
			let a = i[n] ? i[n](o, s) : o[n] - s[n];
			return e + (t[r] || 0) * (isNaN(a) ? 0 : a) ** 2;
		}, 0));
	};
}, eb = (e = 1, t = 1, n = 1) => {
	let r = $v("lab65");
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
}, tb = (e) => {
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
}, nb = {
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
	fromMode: { rgb: Jy },
	toMode: { rgb: Yy },
	interpolate: {
		h: {
			use: $,
			fixup: Vy
		},
		s: $,
		l: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Xy },
	average: { h: tb }
}, rb = ({ l: e, a: t, b: n, alpha: r }, i = "lch") => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let a = Math.sqrt(t * t + n * n), o = {
		mode: i,
		l: e,
		c: a
	};
	return a && (o.h = zy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, ib = ({ l: e, c: t, h: n, alpha: r }, i = "lab") => {
	n === void 0 && (n = 0);
	let a = {
		mode: i,
		l: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (a.alpha = r), a;
}, ab = 29 ** 3 / 27, ob = 216 / 29 ** 3, sb = {
	X: .3457 / .3585,
	Y: 1,
	Z: .2958 / .3585
}, cb = {
	X: .3127 / .329,
	Y: 1,
	Z: .3583 / .329
}, lb = (e) => e ** 3 > ob ? e ** 3 : (116 * e - 16) / ab, ub = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz65",
		x: lb(a) * cb.X,
		y: lb(i) * cb.Y,
		z: lb(o) * cb.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, db = (e) => Ly(ub(e)), fb = (e) => e > ob ? Math.cbrt(e) : (ab * e + 16) / 116, pb = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = fb(e / cb.X), a = fb(t / cb.Y), o = fb(n / cb.Z), s = {
		mode: "lab65",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, mb = (e) => {
	let t = pb(Py(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, hb = 26 / 180 * Math.PI, gb = Math.cos(hb), _b = Math.sin(hb), vb = 100 / Math.log(139 / 100), yb = ({ l: e, c: t, h: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "lab65",
		l: (Math.exp(e * 1 / vb) - 1) / .0039
	}, a = (Math.exp(.0435 * t * 1 * 1) - 1) / .075, o = a * Math.cos(n / 180 * Math.PI - hb), s = a * Math.sin(n / 180 * Math.PI - hb);
	return i.a = o * gb - s / .83 * _b, i.b = o * _b + s / .83 * gb, r !== void 0 && (i.alpha = r), i;
}, bb = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t * gb + n * _b, a = .83 * (n * gb - t * _b), o = Math.sqrt(i * i + a * a), s = {
		mode: "dlch",
		l: vb / 1 * Math.log(1 + .0039 * e),
		c: Math.log(1 + .075 * o) / .0435
	};
	return s.c && (s.h = zy((Math.atan2(a, i) + hb) / Math.PI * 180)), r !== void 0 && (s.alpha = r), s;
}, xb = (e) => yb(rb(e, "dlch")), Sb = (e) => ib(bb(e), "dlab"), Cb = {
	mode: "dlab",
	parse: ["--din99o-lab"],
	serialize: "--din99o-lab",
	toMode: {
		lab65: xb,
		rgb: (e) => db(xb(e))
	},
	fromMode: {
		lab65: Sb,
		rgb: (e) => Sb(mb(e))
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
			fixup: Ey
		}
	}
}, wb = {
	mode: "dlch",
	parse: ["--din99o-lch"],
	serialize: "--din99o-lch",
	toMode: {
		lab65: yb,
		dlab: (e) => ib(e, "dlab"),
		rgb: (e) => db(yb(e))
	},
	fromMode: {
		lab65: bb,
		dlab: (e) => rb(e, "dlch"),
		rgb: (e) => bb(mb(e))
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
			fixup: Vy
		},
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Qy },
	average: { h: tb }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertHsiToRgb.js
function Tb({ h: e, s: t, i: n, alpha: r }) {
	e = zy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
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
function Eb({ r: e, g: t, b: n, alpha: r }) {
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
var Db = {
	mode: "hsi",
	toMode: { rgb: Tb },
	parse: ["--hsi"],
	serialize: "--hsi",
	fromMode: { rgb: Eb },
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
			fixup: Vy
		},
		s: $,
		i: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Xy },
	average: { h: tb }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertHslToRgb.js
function Ob({ h: e, s: t, l: n, alpha: r }) {
	e = zy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
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
function kb({ r: e, g: t, b: n, alpha: r }) {
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
var Ab = (e, t) => {
	switch (t) {
		case "deg": return +e;
		case "rad": return e / Math.PI * 180;
		case "grad": return e / 10 * 9;
		case "turn": return e * 360;
	}
}, jb = RegExp(`^hsla?\\(\\s*${qv}${Jv}${Wv}${Jv}${Wv}\\s*(?:,\\s*${Gv}\\s*)?\\)$`), Mb = (e) => {
	let t = e.match(jb);
	if (!t) return;
	let n = { mode: "hsl" };
	return t[3] === void 0 ? t[1] !== void 0 && t[2] !== void 0 && (n.h = Ab(t[1], t[2])) : n.h = +t[3], t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] === void 0 ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))) : n.alpha = Math.max(0, Math.min(1, t[6] / 100)), n;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/parseHsl.js
function Nb(e, t) {
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
var Pb = {
	mode: "hsl",
	toMode: { rgb: Ob },
	fromMode: { rgb: kb },
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [Nb, Mb],
	serialize: (e) => `hsl(${e.h === void 0 ? "none" : e.h} ${e.s === void 0 ? "none" : e.s * 100 + "%"} ${e.l === void 0 ? "none" : e.l * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Vy
		},
		s: $,
		l: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Xy },
	average: { h: tb }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertHsvToRgb.js
function Fb({ h: e, s: t, v: n, alpha: r }) {
	e = zy(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
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
function Ib({ r: e, g: t, b: n, alpha: r }) {
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
var Lb = {
	mode: "hsv",
	toMode: { rgb: Fb },
	parse: ["--hsv"],
	serialize: "--hsv",
	fromMode: { rgb: Ib },
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
			fixup: Vy
		},
		s: $,
		v: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Xy },
	average: { h: tb }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertHwbToRgb.js
function Rb({ h: e, w: t, b: n, alpha: r }) {
	if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
		let e = t + n;
		t /= e, n /= e;
	}
	return Fb({
		h: e,
		s: n === 1 ? 1 : 1 - t / (1 - n),
		v: 1 - n,
		alpha: r
	});
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertRgbToHwb.js
function zb(e) {
	let t = Ib(e);
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
function Bb(e, t) {
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
var Vb = {
	mode: "hwb",
	toMode: { rgb: Rb },
	fromMode: { rgb: zb },
	channels: [
		"h",
		"w",
		"b",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [Bb],
	serialize: (e) => `hwb(${e.h === void 0 ? "none" : e.h} ${e.w === void 0 ? "none" : e.w * 100 + "%"} ${e.b === void 0 ? "none" : e.b * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Vy
		},
		w: $,
		b: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Zy },
	average: { h: tb }
}, Hb = .1593017578125, Ub = 78.84375, Wb = .8359375, Gb = 18.8515625, Kb = 18.6875;
function qb(e) {
	if (e < 0) return 0;
	let t = e ** (1 / Ub);
	return 1e4 * (Math.max(0, t - Wb) / (Gb - Kb * t)) ** (1 / Hb);
}
function Jb(e) {
	if (e < 0) return 0;
	let t = (e / 1e4) ** Hb;
	return ((Wb + Gb * t) / (1 + Kb * t)) ** +Ub;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/itp/convertItpToXyz65.js
var Yb = (e) => Math.max(e / 203, 0), Xb = ({ i: e, t, p: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = qb(e + .008609037037932761 * t + .11102962500302593 * n), a = qb(e - .00860903703793275 * t - .11102962500302599 * n), o = qb(e + .5600313357106791 * t - .32062717498731885 * n), s = {
		mode: "xyz65",
		x: Yb(2.070152218389422 * i - 1.3263473389671556 * a + .2066510476294051 * o),
		y: Yb(.3647385209748074 * i + .680566024947227 * a - .0453045459220346 * o),
		z: Yb(-.049747207535812 * i - .0492609666966138 * a + 1.1880659249923042 * o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Zb = (e = 0) => Math.max(e * 203, 0), Qb = ({ x: e, y: t, z: n, alpha: r }) => {
	let i = Zb(e), a = Zb(t), o = Zb(n), s = Jb(.3592832590121217 * i + .6976051147779502 * a - .0358915932320289 * o), c = Jb(-.1920808463704995 * i + 1.1004767970374323 * a + .0753748658519118 * o), l = Jb(.0070797844607477 * i + .0748396662186366 * a + .8433265453898765 * o), u = {
		mode: "itp",
		i: .5 * s + .5 * c,
		t: 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * l,
		p: 4.378173828125 * s - 4.24560546875 * c - .132568359375 * l
	};
	return r !== void 0 && (u.alpha = r), u;
}, $b = {
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
		xyz65: Xb,
		rgb: (e) => Ly(Xb(e))
	},
	fromMode: {
		xyz65: Qb,
		rgb: (e) => Qb(Py(e))
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
			fixup: Ey
		}
	}
}, ex = 134.03437499999998, tx = 16295499532821565e-27, nx = (e) => {
	if (e < 0) return 0;
	let t = (e / 1e4) ** Hb;
	return ((Wb + Gb * t) / (1 + Kb * t)) ** +ex;
}, rx = (e = 0) => Math.max(e * 203, 0), ix = ({ x: e, y: t, z: n, alpha: r }) => {
	e = rx(e), t = rx(t), n = rx(n);
	let i = 1.15 * e - .15 * n, a = .66 * t + .34 * e, o = nx(.41478972 * i + .579999 * a + .014648 * n), s = nx(-.20151 * i + 1.120649 * a + .0531008 * n), c = nx(-.0166008 * i + .2648 * a + .6684799 * n), l = (o + s) / 2, u = {
		mode: "jab",
		j: .44 * l / (1 - .56 * l) - tx,
		a: 3.524 * o - 4.066708 * s + .542708 * c,
		b: .199076 * o + 1.096799 * s - 1.295875 * c
	};
	return r !== void 0 && (u.alpha = r), u;
}, ax = 134.03437499999998, ox = 16295499532821565e-27, sx = (e) => {
	if (e < 0) return 0;
	let t = e ** (1 / ax);
	return 1e4 * ((Wb - t) / (Kb * t - Gb)) ** (1 / Hb);
}, cx = (e) => e / 203, lx = ({ j: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + ox) / (.44 + .56 * (e + ox)), a = sx(i + .13860504 * t + .058047316 * n), o = sx(i - .13860504 * t - .058047316 * n), s = sx(i - .096019242 * t - .8118919 * n), c = {
		mode: "xyz65",
		x: cx(1.661373024652174 * a - .914523081304348 * o + .23136208173913045 * s),
		y: cx(-.3250758611844533 * a + 1.571847026732543 * o - .21825383453227928 * s),
		z: cx(-.090982811 * a - .31272829 * o + 1.5227666 * s)
	};
	return r !== void 0 && (c.alpha = r), c;
}, ux = (e) => {
	let t = ix(Py(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, dx = (e) => Ly(lx(e)), fx = {
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
		rgb: ux,
		xyz65: ix
	},
	toMode: {
		rgb: dx,
		xyz65: lx
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
			fixup: Ey
		}
	}
}, px = ({ j: e, a: t, b: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "jch",
		j: e,
		c: i
	};
	return i && (a.h = zy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, mx = ({ j: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "jab",
		j: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, hx = {
	mode: "jch",
	parse: ["--jzczhz"],
	serialize: "--jzczhz",
	toMode: {
		jab: mx,
		rgb: (e) => dx(mx(e))
	},
	fromMode: {
		rgb: (e) => px(ux(e)),
		jab: px
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
			fixup: Vy
		},
		c: $,
		j: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Qy },
	average: { h: tb }
}, gx = 29 ** 3 / 27, _x = 216 / 29 ** 3, vx = (e) => e ** 3 > _x ? e ** 3 : (116 * e - 16) / gx, yx = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz50",
		x: vx(a) * sb.X,
		y: vx(i) * sb.Y,
		z: vx(o) * sb.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, bx = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Iy({
		r: e * 3.1341359569958707 - t * 1.6173863321612538 - .4906619460083532 * n,
		g: e * -.978795502912089 + t * 1.916254567259524 + .03344273116131949 * n,
		b: e * .07195537988411677 - t * .2289768264158322 + 1.405386058324125 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, xx = (e) => bx(yx(e)), Sx = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ny(e), a = {
		mode: "xyz50",
		x: .436065742824811 * t + .3851514688337912 * n + .14307845442264197 * r,
		y: .22249319175623702 * t + .7168870538238823 * n + .06061979053616537 * r,
		z: .013923904500943465 * t + .09708128566574634 * n + .7140993584005155 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, Cx = (e) => e > _x ? Math.cbrt(e) : (gx * e + 16) / 116, wx = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Cx(e / sb.X), a = Cx(t / sb.Y), o = Cx(n / sb.Z), s = {
		mode: "lab",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Tx = (e) => {
	let t = wx(Sx(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/parseLab.js
function Ex(e, t) {
	if (!t || t[0] !== "lab") return;
	let n = { mode: "lab" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.l = Math.min(Math.max(0, r.value), 100)), i.type !== Z.None && (n.a = i.type === Z.Number ? i.value : i.value * 125 / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value : a.value * 125 / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/definition.js
var Dx = {
	mode: "lab",
	toMode: {
		xyz50: yx,
		rgb: xx
	},
	fromMode: {
		xyz50: wx,
		rgb: Tx
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
	parse: [Ex],
	serialize: (e) => `lab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		l: $,
		a: $,
		b: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	}
}, Ox = {
	...Dx,
	mode: "lab65",
	parse: ["--lab-d65"],
	serialize: "--lab-d65",
	toMode: {
		xyz65: ub,
		rgb: db
	},
	fromMode: {
		xyz65: pb,
		rgb: mb
	},
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/parseLch.js
function kx(e, t) {
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
var Ax = {
	mode: "lch",
	toMode: {
		lab: ib,
		rgb: (e) => xx(ib(e))
	},
	fromMode: {
		rgb: (e) => rb(Tx(e)),
		lab: rb
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
	parse: [kx],
	serialize: (e) => `lch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: $,
			fixup: Vy
		},
		c: $,
		l: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Qy },
	average: { h: tb }
}, jx = {
	...Ax,
	mode: "lch65",
	parse: ["--lch-d65"],
	serialize: "--lch-d65",
	toMode: {
		lab65: (e) => ib(e, "lab65"),
		rgb: (e) => db(ib(e, "lab65"))
	},
	fromMode: {
		rgb: (e) => rb(mb(e), "lch65"),
		lab65: (e) => rb(e, "lch65")
	},
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	}
}, Mx = ({ l: e, u: t, v: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "lchuv",
		l: e,
		c: i
	};
	return i && (a.h = zy(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, Nx = ({ l: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "luv",
		l: e,
		u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		v: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, Px = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Fx = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Ix = Px(sb.X, sb.Y, sb.Z), Lx = Fx(sb.X, sb.Y, sb.Z), Rx = (e) => e <= _x ? gx * e : 116 * Math.cbrt(e) - 16, zx = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Rx(t / sb.Y), a = Px(e, t, n), o = Fx(e, t, n);
	!isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - Ix), o = 13 * i * (o - Lx));
	let s = {
		mode: "luv",
		l: i,
		u: a,
		v: o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Bx = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Vx = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Hx = Bx(sb.X, sb.Y, sb.Z), Ux = Vx(sb.X, sb.Y, sb.Z), Wx = ({ l: e, u: t, v: n, alpha: r }) => {
	if (e === void 0 && (e = 0), e === 0) return {
		mode: "xyz50",
		x: 0,
		y: 0,
		z: 0
	};
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t / (13 * e) + Hx, a = n / (13 * e) + Ux, o = sb.Y * (e <= 8 ? e / gx : ((e + 16) / 116) ** 3), s = {
		mode: "xyz50",
		x: 9 * i * o / (4 * a),
		y: o,
		z: o * (12 - 3 * i - 20 * a) / (4 * a)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Gx = {
	mode: "lchuv",
	toMode: {
		luv: Nx,
		rgb: (e) => bx(Wx(Nx(e)))
	},
	fromMode: {
		rgb: (e) => Mx(zx(Sx(e))),
		luv: Mx
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
			fixup: Vy
		},
		c: $,
		l: $,
		alpha: {
			use: $,
			fixup: Ey
		}
	},
	difference: { h: Qy },
	average: { h: tb }
}, Kx = {
	...Dy,
	mode: "lrgb",
	toMode: { rgb: Iy },
	fromMode: { rgb: Ny },
	parse: ["srgb-linear"],
	serialize: "srgb-linear"
}, qx = {
	mode: "luv",
	toMode: {
		xyz50: Wx,
		rgb: (e) => bx(Wx(e))
	},
	fromMode: {
		xyz50: zx,
		rgb: (e) => zx(Sx(e))
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
			fixup: Ey
		}
	}
}, Jx = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.cbrt(.412221469470763 * e + .5363325372617348 * t + .0514459932675022 * n), a = Math.cbrt(.2119034958178252 * e + .6806995506452344 * t + .1073969535369406 * n), o = Math.cbrt(.0883024591900564 * e + .2817188391361215 * t + .6299787016738222 * n), s = {
		mode: "oklab",
		l: .210454268309314 * i + .7936177747023054 * a - .0040720430116193 * o,
		a: 1.9779985324311684 * i - 2.42859224204858 * a + .450593709617411 * o,
		b: .0259040424655478 * i + .7827717124575296 * a - .8086757549230774 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Yx = (e) => {
	let t = Jx(Ny(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Xx = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + .3963377773761749 * t + .2158037573099136 * n) ** 3, a = (e - .1055613458156586 * t - .0638541728258133 * n) ** 3, o = (e - .0894841775298119 * t - 1.2914855480194092 * n) ** 3, s = {
		mode: "lrgb",
		r: 4.076741636075957 * i - 3.3077115392580616 * a + .2309699031821044 * o,
		g: -1.2684379732850317 * i + 2.6097573492876887 * a - .3413193760026573 * o,
		b: -.0041960761386756 * i - .7034186179359362 * a + 1.7076146940746117 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Zx = (e) => Iy(Xx(e));
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/helpers.js
function Qx(e) {
	let t = .206, n = 1.206 / 1.03;
	return .5 * (n * e - t + Math.sqrt((n * e - t) * (n * e - t) + .12 * n * e));
}
function $x(e) {
	return (e * e + .206 * e) / (1.206 / 1.03 * (e + .03));
}
function eS(e, t) {
	let n, r, i, a, o, s, c, l;
	-1.88170328 * e - .80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, i = .59662641, a = .75515197, o = .56771245, s = 4.0767416621, c = -3.3077115913, l = .2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = .73956515, r = -.45954404, i = .08285427, a = .1254107, o = .14503204, s = -1.2684380046, c = 2.6097574011, l = -.3413193965) : (n = 1.35733652, r = -.00915799, i = -1.1513021, a = -.50559606, o = .00692167, s = -.0041960863, c = -.7034186147, l = 1.707614701);
	let u = n + r * e + i * t + a * e * e + o * e * t, d = .3963377774 * e + .2158037573 * t, f = -.1055613458 * e - .0638541728 * t, p = -.0894841775 * e - 1.291485548 * t;
	{
		let e = 1 + u * d, t = 1 + u * f, n = 1 + u * p, r = e * e * e, i = t * t * t, a = n * n * n, o = 3 * d * e * e, m = 3 * f * t * t, h = 3 * p * n * n, g = 6 * d * d * e, _ = 6 * f * f * t, v = 6 * p * p * n, y = s * r + c * i + l * a, b = s * o + c * m + l * h, x = s * g + c * _ + l * v;
		u -= y * b / (b * b - .5 * y * x);
	}
	return u;
}
function tS(e, t) {
	let n = eS(e, t), r = Xx({
		l: 1,
		a: n * e,
		b: n * t
	}), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b));
	return [i, i * n];
}
function nS(e, t, n, r, i, a = null) {
	a ||= tS(e, t);
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
function rS(e, t, n = null) {
	n ||= tS(e, t);
	let r = n[0], i = n[1];
	return [i / r, i / (1 - r)];
}
function iS(e, t, n) {
	let r = tS(t, n), i = nS(t, n, e, 1, e, r), a = rS(t, n, r), o = .11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = .11239642 + 1 / (1.6132032 - .68124379 * n + t * (.40370612 + .90148123 * n + t * (-.27087943 + .6122399 * n + t * (.00299215 - .45399568 * n - .14661872 * t)))), c = i / Math.min(e * a[0], (1 - e) * a[1]), l = e * o, u = (1 - e) * s, d = .9 * c * Math.sqrt(Math.sqrt(1 / (1 / (l * l * l * l) + 1 / (u * u * u * u))));
	return l = e * .4, u = (1 - e) * .8, [
		Math.sqrt(1 / (1 / (l * l) + 1 / (u * u))),
		d,
		i
	];
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function aS(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = {
		mode: "okhsl",
		l: Qx(t)
	};
	e.alpha !== void 0 && (i.alpha = e.alpha);
	let a = Math.sqrt(n * n + r * r);
	if (!a) return i.s = 0, i;
	let [o, s, c] = iS(t, n / a, r / a), l;
	if (a < s) {
		let e = .8 * o, t = 1 - e / s;
		l = (a - 0) / (e + t * (a - 0)) * .8;
	} else {
		let e = s, t = .2 * s * s * 1.25 * 1.25 / o, n = 1 - t / (c - s);
		l = .8 + .2 * ((a - e) / (t + n * (a - e)));
	}
	return l && (i.s = l, i.h = zy(Math.atan2(r, n) * 180 / Math.PI)), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOkhslToOklab.js
function oS(e) {
	let t = e.h === void 0 ? 0 : e.h, n = e.s === void 0 ? 0 : e.s, r = e.l === void 0 ? 0 : e.l, i = {
		mode: "oklab",
		l: $x(r)
	};
	if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || r === 1) return i.a = i.b = 0, i;
	let a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, c, l] = iS(i.l, a, o), u, d, f, p;
	n < .8 ? (u = 1.25 * n, d = 0, f = .8 * s, p = 1 - f / c) : (u = 5 * (n - .8), d = c, f = .2 * c * c * 1.25 * 1.25 / s, p = 1 - f / (l - c));
	let m = d + u * f / (1 - p * u);
	return i.a = m * a, i.b = m * o, i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/modeOkhsl.js
var sS = {
	...Pb,
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
		oklab: aS,
		rgb: (e) => aS(Yx(e))
	},
	toMode: {
		oklab: oS,
		rgb: (e) => Zx(oS(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function cS(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = Math.sqrt(n * n + r * r), a = i ? n / i : 1, o = i ? r / i : 1, [s, c] = rS(a, o), l = .5, u = 1 - l / s, d = c / (i + t * c), f = d * t, p = d * i, m = $x(f), h = p * m / f, g = Xx({
		l: m,
		a: a * h,
		b: o * h
	}), _ = Math.cbrt(1 / Math.max(g.r, g.g, g.b, 0));
	t /= _, i = i / _ * Qx(t) / t, t = Qx(t);
	let v = {
		mode: "okhsv",
		s: i ? (l + c) * p / (c * l + c * u * p) : 0,
		v: t ? t / f : 0
	};
	return v.s && (v.h = zy(Math.atan2(r, n) * 180 / Math.PI)), e.alpha !== void 0 && (v.alpha = e.alpha), v;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function lS(e) {
	let t = { mode: "oklab" };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let n = e.h === void 0 ? 0 : e.h, r = e.s === void 0 ? 0 : e.s, i = e.v === void 0 ? 0 : e.v, a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, c] = rS(a, o), l = .5, u = 1 - l / s, d = 1 - r * l / (l + c - c * u * r), f = r * c * l / (l + c - c * u * r), p = $x(d), m = f * p / d, h = Xx({
		l: p,
		a: a * m,
		b: o * m
	}), g = Math.cbrt(1 / Math.max(h.r, h.g, h.b, 0)), _ = $x(i * d), v = f * _ / d;
	return t.l = _ * g, t.a = v * a * g, t.b = v * o * g, t;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/modeOkhsv.js
var uS = {
	...Lb,
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
		oklab: cS,
		rgb: (e) => cS(Yx(e))
	},
	toMode: {
		oklab: lS,
		rgb: (e) => Zx(lS(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/parseOklab.js
function dS(e, t) {
	if (!t || t[0] !== "oklab") return;
	let n = { mode: "oklab" }, [, r, i, a, o] = t;
	if (r.type !== Z.Hue && i.type !== Z.Hue && a.type !== Z.Hue) return r.type !== Z.None && (n.l = Math.min(Math.max(0, r.type === Z.Number ? r.value : r.value / 100), 1)), i.type !== Z.None && (n.a = i.type === Z.Number ? i.value : i.value * .4 / 100), a.type !== Z.None && (n.b = a.type === Z.Number ? a.value : a.value * .4 / 100), o.type !== Z.None && (n.alpha = Math.min(1, Math.max(0, o.type === Z.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/definition.js
var fS = {
	...Dx,
	mode: "oklab",
	toMode: {
		lrgb: Xx,
		rgb: Zx
	},
	fromMode: {
		lrgb: Jx,
		rgb: Yx
	},
	ranges: {
		l: [0, 1],
		a: [-.4, .4],
		b: [-.4, .4]
	},
	parse: [dS],
	serialize: (e) => `oklab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/parseOklch.js
function pS(e, t) {
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
var mS = {
	...Ax,
	mode: "oklch",
	toMode: {
		oklab: (e) => ib(e, "oklab"),
		rgb: (e) => Zx(ib(e, "oklab"))
	},
	fromMode: {
		rgb: (e) => rb(Yx(e), "oklch"),
		oklab: (e) => rb(e, "oklch")
	},
	parse: [pS],
	serialize: (e) => `oklch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	ranges: {
		l: [0, 1],
		c: [0, .4],
		h: [0, 360]
	}
}, hS = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ny(e), a = {
		mode: "xyz65",
		x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
		y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
		z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, gS = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Iy({
		r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
		g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
		b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n
	}, "p3");
	return r !== void 0 && (i.alpha = r), i;
}, _S = {
	...Dy,
	mode: "p3",
	parse: ["display-p3"],
	serialize: "display-p3",
	fromMode: {
		rgb: (e) => gS(Py(e)),
		xyz65: gS
	},
	toMode: {
		rgb: (e) => Ly(hS(e)),
		xyz65: hS
	}
}, vS = (e) => {
	let t = Math.abs(e);
	return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
}, yS = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "prophoto",
		r: vS(e * 1.3457868816471585 - t * .2555720873797946 - .0511018649755453 * n),
		g: vS(e * -.5446307051249019 + t * 1.5082477428451466 + .0205274474364214 * n),
		b: vS(e * 0 + t * 0 + 1.2119675456389452 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, bS = (e = 0) => {
	let t = Math.abs(e);
	return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
}, xS = (e) => {
	let t = bS(e.r), n = bS(e.g), r = bS(e.b), i = {
		mode: "xyz50",
		x: .7977666449006423 * t + .1351812974005331 * n + .0313477341283922 * r,
		y: .2880748288194013 * t + .7118352342418731 * n + 899369387256e-16 * r,
		z: 0 * t + 0 * n + .8251046025104602 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, SS = {
	...Dy,
	mode: "prophoto",
	parse: ["prophoto-rgb"],
	serialize: "prophoto-rgb",
	fromMode: {
		xyz50: yS,
		rgb: (e) => yS(Sx(e))
	},
	toMode: {
		xyz50: xS,
		rgb: (e) => bx(xS(e))
	}
}, CS = 1.09929682680944, wS = .018053968510807, TS = (e) => {
	let t = Math.abs(e);
	return t > wS ? (Math.sign(e) || 1) * (CS * t ** .45 - .09929682680944008) : 4.5 * e;
}, ES = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "rec2020",
		r: TS(e * 1.7166511879712683 - t * .3556707837763925 - .2533662813736599 * n),
		g: TS(e * -.6666843518324893 + t * 1.6164812366349395 + .0157685458139111 * n),
		b: TS(e * .0176398574453108 - t * .0427706132578085 + .9421031212354739 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, DS = 1.09929682680944, OS = .018053968510807, kS = (e = 0) => {
	let t = Math.abs(e);
	return t < OS * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * ((t + DS - 1) / DS) ** (1 / .45);
}, AS = (e) => {
	let t = kS(e.r), n = kS(e.g), r = kS(e.b), i = {
		mode: "xyz65",
		x: .6369580483012911 * t + .1446169035862083 * n + .1688809751641721 * r,
		y: .262700212011267 * t + .6779980715188708 * n + .059301716469862 * r,
		z: 0 * t + .0280726930490874 * n + 1.0609850577107909 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, jS = {
	...Dy,
	mode: "rec2020",
	fromMode: {
		xyz65: ES,
		rgb: (e) => ES(Py(e))
	},
	toMode: {
		xyz65: AS,
		rgb: (e) => Ly(AS(e))
	},
	parse: ["rec2020"],
	serialize: "rec2020"
}, MS = .0037930732552754493, NS = Math.cbrt(MS), PS = (e) => Math.cbrt(e) - NS, FS = (e) => {
	let { r: t, g: n, b: r, alpha: i } = Ny(e), a = PS(.3 * t + .622 * n + .078 * r + MS), o = PS(.23 * t + .692 * n + .078 * r + MS), s = PS(.2434226892454782 * t + .2047674442449682 * n + .5518098665095535 * r + MS), c = {
		mode: "xyb",
		x: (a - o) / 2,
		y: (a + o) / 2,
		b: s - (a + o) / 2
	};
	return i !== void 0 && (c.alpha = i), c;
}, IS = (e) => (e + NS) ** 3, LS = {
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
		let i = IS(e + t) - MS, a = IS(t - e) - MS, o = IS(n + t) - MS, s = Iy({
			r: 11.031566904639861 * i - 9.866943908131562 * a - .16462299650829934 * o,
			g: -3.2541473810744237 * i + 4.418770377582723 * a - .16462299650829934 * o,
			b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
		});
		return r !== void 0 && (s.alpha = r), s;
	} },
	fromMode: { rgb: FS },
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
			fixup: Ey
		}
	}
}, RS = {
	mode: "xyz50",
	parse: ["xyz-d50"],
	serialize: "xyz-d50",
	toMode: {
		rgb: bx,
		lab: wx
	},
	fromMode: {
		rgb: Sx,
		lab: yx
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
			fixup: Ey
		}
	}
}, zS = {
	mode: "xyz65",
	toMode: {
		rgb: Ly,
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
		rgb: Py,
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
			fixup: Ey
		}
	}
}, BS = {
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
			fixup: Ey
		}
	}
}, VS = (e, t) => Math.round(e * (t = 10 ** t)) / t;
((e = 4) => (t) => typeof t == "number" ? VS(t, e) : t)(2);
var HS = (e) => Math.max(0, Math.min(1, e || 0)), US = (e) => Math.round(HS(e) * 255), WS = $v("rgb"), GS = (e) => {
	if (e === void 0) return;
	let t = US(e.r), n = US(e.g), r = US(e.b);
	return "#" + (1 << 24 | t << 16 | n << 8 | r).toString(16).slice(1);
}, KS = (e) => GS(WS(e)), qS = (e) => {
	let t = {
		mode: e.mode,
		r: Math.max(0, Math.min(e.r === void 0 ? 0 : e.r, 1)),
		g: Math.max(0, Math.min(e.g === void 0 ? 0 : e.g, 1)),
		b: Math.max(0, Math.min(e.b === void 0 ? 0 : e.b, 1))
	};
	return e.alpha !== void 0 && (t.alpha = e.alpha), t;
}, JS = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
function YS(e = "rgb") {
	let { gamut: t } = oy(e);
	if (!t) return (e) => !0;
	let n = $v(typeof t == "string" ? t : e);
	return (e) => JS(n(e));
}
function XS(e = "rgb") {
	let { gamut: t } = oy(e);
	if (!t) return (e) => Qv(e);
	let n = typeof t == "string" ? t : e, r = $v(n), i = YS(n);
	return (e) => {
		let t = Qv(e);
		if (!t) return;
		let n = r(t);
		if (i(n)) return t;
		let a = qS(n);
		return t.mode === a.mode ? a : $v(t.mode)(a);
	};
}
function ZS(e = "rgb", t = "oklch", n = $y("oklch"), r = .02) {
	let i = $v(e), a = oy(e);
	if (!a.gamut) return (e) => i(e);
	let o = YS(e), s = XS(e), c = $v(t), { ranges: l } = oy(t);
	if (!l.l || !l.c) throw Error("LCH-like space expected");
	return (t) => {
		if (t = Qv(t), t === void 0) return;
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
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/wcag.js
function QS(e) {
	let t = $v("lrgb")(e);
	return .2126 * t.r + .7152 * t.g + .0722 * t.b;
}
function $S(e, t) {
	let n = QS(e), r = QS(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
ay(Ry), ay(nb), ay(Cb), ay(wb), ay(Db), ay(Pb), ay(Lb), ay(Vb), ay($b), ay(fx), ay(hx), ay(Dx), ay(Ox), ay(Ax), ay(jx), ay(Gx), ay(Kx), ay(qx), ay(sS), ay(uS), ay(fS), ay(mS), ay(_S), ay(SS), ay(jS), ay(Dy), ay(LS), ay(RS), ay(zS), ay(BS);
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/color.js
var eC = $v("oklch"), tC = $v("oklab"), nC = $v("rgb"), rC = ZS("rgb", "oklch"), iC = eb(), aC = /[;{}<>\\\n\r]/, oC = /(?:var|color-mix|calc|env|attr)\s*\(/i, sC = /^[0-9a-f]+$/i;
function cC(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function lC(e) {
	return (e % 360 + 360) % 360;
}
function uC(e, t) {
	let n = 10 ** t, r = Math.round(e * n) / n;
	return Object.is(r, -0) ? 0 : r;
}
function dC(e) {
	if (typeof e != "string") return;
	let t = e.trim();
	if (!t || aC.test(t) || oC.test(t) || sC.test(t)) return;
	let n = xy(t);
	if (!n) return;
	let r = eC(n);
	if (r && Number.isFinite(r.l)) return {
		l: cC(r.l, 0, 1),
		c: Math.max(0, Number.isFinite(r.c) ? r.c : 0),
		h: Number.isFinite(r.h) ? lC(r.h) : 0,
		alpha: cC(typeof r.alpha == "number" ? r.alpha : 1, 0, 1)
	};
}
function fC(e) {
	return typeof e == "string" ? dC(e) : e;
}
function pC(e) {
	let t = uC(e.l, 4), n = uC(e.c, 4), r = n === 0 ? 0 : uC(lC(e.h), 2), i = uC(e.alpha, 3);
	return i < 1 ? `oklch(${t} ${n} ${r} / ${i})` : `oklch(${t} ${n} ${r})`;
}
function mC(e) {
	let t = dC(e);
	return t ? pC(t) : void 0;
}
function hC(e) {
	let t = {
		mode: "oklch",
		l: e.l,
		c: e.c,
		h: e.h
	}, n = nC(t), r = [
		n.r,
		n.g,
		n.b
	].every((e) => Number.isFinite(e) && e >= -.004 && e <= 1.004) ? n : nC(rC(t));
	return [
		r.r,
		r.g,
		r.b
	].map((e) => cC(Number.isFinite(e) ? e : 0, 0, 1));
}
function gC(e) {
	let t = fC(e);
	if (!t) return;
	let [n, r, i] = hC(t);
	return KS({
		mode: "rgb",
		r: n,
		g: r,
		b: i
	});
}
function _C(e, t, n) {
	let r = fC(e), i = fC(t);
	if (!r || !i) return;
	let a = cC(n, 0, 1), o = tC({
		mode: "oklch",
		l: r.l,
		c: r.c,
		h: r.h
	}), s = tC({
		mode: "oklch",
		l: i.l,
		c: i.c,
		h: i.h
	}), c = eC({
		mode: "oklab",
		l: o.l + (s.l - o.l) * a,
		a: o.a + (s.a - o.a) * a,
		b: o.b + (s.b - o.b) * a
	});
	return {
		l: cC(c.l, 0, 1),
		c: Math.max(0, Number.isFinite(c.c) ? c.c : 0),
		h: Number.isFinite(c.h) ? lC(c.h) : r.h,
		alpha: r.alpha + (i.alpha - r.alpha) * a
	};
}
function vC(e, t) {
	let n = fC(e);
	return n ? {
		...n,
		h: lC(n.h + t)
	} : void 0;
}
function yC(e, t) {
	let n = fC(e), r = fC(t);
	if (!n || !r) return;
	let [i, a, o] = hC(n), [s, c, l] = hC(r);
	return uC($S({
		mode: "rgb",
		r: i,
		g: a,
		b: o
	}, {
		mode: "rgb",
		r: s,
		g: c,
		b: l
	}), 2);
}
function bC(e, t) {
	let n = fC(e), r = fC(t);
	if (n && r) return uC(iC({
		mode: "oklch",
		l: n.l,
		c: n.c,
		h: n.h
	}, {
		mode: "oklch",
		l: r.l,
		c: r.c,
		h: r.h
	}), 2);
}
var xC = .5;
function SC(e, t) {
	let n = dC(e), r = dC(t);
	return !n || !r ? e === t : (bC(n, r) ?? Infinity) < xC && Math.abs(n.alpha - r.alpha) < .002;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/roles.js
var CC = (e, t, n, r, i, a) => a ? {
	key: e,
	cssName: t,
	label: n,
	group: r,
	usage: i,
	on: a
} : {
	key: e,
	cssName: t,
	label: n,
	group: r,
	usage: i
}, wC = [
	CC("background", "background", "Background", "base", "The page itself: the ground every other color sits on."),
	CC("foreground", "foreground", "Foreground", "base", "Body text and icons on the page background.", "background"),
	CC("primary", "primary", "Primary", "brand", "The main brand color: key accents, primary actions, the one thing to look at."),
	CC("secondary", "secondary", "Secondary", "brand", "The second brand color: supporting fills, bands and secondary actions."),
	CC("accent", "accent", "Accent", "brand", "Highlights that draw the eye without competing with primary."),
	CC("card", "card", "Card", "surface", "Raised surfaces: cards, panels, callouts."),
	CC("popover", "popover", "Popover", "surface", "Floating surfaces such as menus and tooltips."),
	CC("muted", "muted", "Muted", "surface", "Quiet surfaces: table stripes, inactive tabs, subtle panels."),
	CC("border", "border", "Border", "line", "Hairlines, dividers and outlines."),
	CC("input", "input", "Input", "line", "Form field and control outlines."),
	CC("ring", "ring", "Ring", "line", "Focus rings and selection outlines."),
	CC("destructive", "destructive", "Destructive", "feedback", "Errors, warnings that block, and destructive actions."),
	CC("chart1", "chart-1", "Chart 1", "chart", "First data series: the leading figure, usually the brand's own."),
	CC("chart2", "chart-2", "Chart 2", "chart", "Second data series."),
	CC("chart3", "chart-3", "Chart 3", "chart", "Third data series."),
	CC("chart4", "chart-4", "Chart 4", "chart", "Fourth data series."),
	CC("chart5", "chart-5", "Chart 5", "chart", "Fifth data series."),
	CC("sidebar", "sidebar", "Sidebar", "sidebar", "App navigation rail background."),
	CC("sidebarPrimary", "sidebar-primary", "Sidebar primary", "sidebar", "The active item in the navigation rail."),
	CC("sidebarAccent", "sidebar-accent", "Sidebar accent", "sidebar", "Hovered items in the navigation rail."),
	CC("sidebarBorder", "sidebar-border", "Sidebar border", "sidebar", "Dividers inside the navigation rail."),
	CC("sidebarRing", "sidebar-ring", "Sidebar ring", "sidebar", "Focus rings inside the navigation rail.")
], TC = [
	[
		"primaryForeground",
		"primary",
		"primary-foreground",
		"Text and icons on primary fills."
	],
	[
		"secondaryForeground",
		"secondary",
		"secondary-foreground",
		"Text and icons on secondary fills."
	],
	[
		"accentForeground",
		"accent",
		"accent-foreground",
		"Text and icons on accent fills."
	],
	[
		"cardForeground",
		"card",
		"card-foreground",
		"Text on cards and panels."
	],
	[
		"popoverForeground",
		"popover",
		"popover-foreground",
		"Text on menus and tooltips."
	],
	[
		"mutedForeground",
		"muted",
		"muted-foreground",
		"Secondary text: captions, metadata, placeholders."
	],
	[
		"destructiveForeground",
		"destructive",
		"destructive-foreground",
		"Text and icons on destructive fills."
	],
	[
		"sidebarForeground",
		"sidebar",
		"sidebar-foreground",
		"Text in the navigation rail."
	],
	[
		"sidebarPrimaryForeground",
		"sidebarPrimary",
		"sidebar-primary-foreground",
		"Text on the active rail item."
	],
	[
		"sidebarAccentForeground",
		"sidebarAccent",
		"sidebar-accent-foreground",
		"Text on hovered rail items."
	]
], EC = new Map(wC.map((e) => [e.key, e]));
for (let [e, t, n, r] of TC) {
	let i = EC.get(t);
	EC.set(e, {
		key: e,
		cssName: n,
		label: `${i?.label ?? t} foreground`,
		group: i?.group ?? "base",
		on: t,
		usage: r
	});
}
var DC = wC.flatMap((e) => {
	let t = TC.find(([, t]) => t === e.key);
	return t ? [e, EC.get(t[0])] : [e];
});
function OC(e) {
	return EC.get(e);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/types.js
var kC = [
	{
		id: "photos",
		label: "Photos"
	},
	{
		id: "graphics",
		label: "Graphics"
	},
	{
		id: "icons",
		label: "Icons"
	},
	{
		id: "backgrounds",
		label: "Backgrounds"
	},
	{
		id: "templates",
		label: "Templates"
	}
], AC = /^[A-Za-z][A-Za-z0-9_-]{0,40}$/;
function jC(e) {
	return AC.test(e);
}
var MC = {
	photos: "activePhotoCollectionId",
	graphics: "activeGraphicCollectionId",
	icons: "activeIconCollectionId",
	backgrounds: "activeBackgroundCollectionId",
	templates: "activeTemplateCollectionId"
};
function NC(e) {
	return {
		photos: "photo",
		graphics: "graphic",
		icons: "icon",
		backgrounds: "background",
		templates: "template"
	}[e] ?? e.replace(/s$/, "");
}
function PC(e) {
	return `media.${e}`;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/extensions.js
var FC = {
	namespaces: 16,
	keys: 32,
	stringLength: 500,
	colorLength: 200,
	totalBytes: 32768
}, IC = /^\$([A-Za-z][A-Za-z0-9]*)$/, LC = new Set(DC.map((e) => e.key)), RC = class extends Error {
	diagnostics;
	code = "invalid_extensions";
	status = 400;
	constructor(e) {
		super(e.map((e) => `${e.path}: ${e.message}`).join("; ")), this.diagnostics = e, this.name = "BrandExtensionValidationError";
	}
};
function zC(e) {
	let t = IC.exec(e.trim());
	return t ? LC.has(t[1]) : !/^[-+\d.]/.test(e.trim()) && !!mC(e);
}
function BC(e) {
	if (e === void 0) return { diagnostics: [] };
	let t = [];
	if (!X(e)) return { diagnostics: [{
		path: "extensions",
		message: "Expected a namespace object."
	}] };
	try {
		if (new TextEncoder().encode(JSON.stringify(e)).byteLength > FC.totalBytes) return { diagnostics: [{
			path: "extensions",
			message: `Total size exceeds ${FC.totalBytes} UTF-8 bytes.`
		}] };
	} catch {
		return { diagnostics: [{
			path: "extensions",
			message: "Expected JSON-serializable values."
		}] };
	}
	let n = {}, r = /* @__PURE__ */ new Set(), i = Object.keys(e);
	i.length > FC.namespaces && t.push({
		path: "extensions",
		message: "Too many namespaces."
	});
	for (let a of i.slice(0, FC.namespaces)) {
		let i = `extensions.${a}`;
		if (!jC(a) || a.startsWith("uhuu.")) {
			t.push({
				path: i,
				message: "Namespace must be an identifier; uhuu.* is reserved."
			});
			continue;
		}
		let o = e[a];
		if (!X(o)) {
			t.push({
				path: i,
				message: "Expected colors/strings object."
			});
			continue;
		}
		for (let e of Object.keys(o)) e !== "colors" && e !== "strings" && t.push({
			path: `${i}.${e}`,
			message: "Unknown extension group."
		});
		let s = {};
		for (let e of ["colors", "strings"]) {
			if (o[e] === void 0) continue;
			let n = o[e];
			if (!X(n)) {
				t.push({
					path: `${i}.${e}`,
					message: "Expected a value object."
				});
				continue;
			}
			let c = Object.entries(n);
			c.length > FC.keys && t.push({
				path: `${i}.${e}`,
				message: "Too many keys."
			});
			let l = {};
			for (let [n, o] of c.slice(0, FC.keys)) {
				let s = `${i}.${e}.${n}`, c = e === "colors" ? FC.colorLength : FC.stringLength;
				if (!jC(n) || typeof o != "string" || !o.trim() || o.length > c) t.push({
					path: s,
					message: "Expected an identifier and a nonempty bounded string."
				});
				else {
					if (e === "colors") {
						if (!zC(o)) {
							t.push({
								path: s,
								message: "Expected a CSS color or a known $role reference."
							});
							continue;
						}
						let e = `--brand-ext-${a}-${n}`;
						if (r.has(e)) {
							t.push({
								path: s,
								message: "CSS variable collides with another namespace/key."
							});
							continue;
						}
						r.add(e);
					}
					l[n] = o.trim();
				}
			}
			Object.keys(l).length && (s[e] = l);
		}
		(s.colors || s.strings) && (n[a] = s);
	}
	return {
		extensions: Object.keys(n).length ? n : void 0,
		diagnostics: t
	};
}
function VC(e) {
	let { diagnostics: t } = BC(e);
	if (t.length) throw new RC(t);
}
function HC(e, t) {
	let n = IC.exec(e.trim());
	return mC(n && t[n[1]] || e) ?? "";
}
function UC(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(e ?? {}).slice(0, FC.namespaces)) if (jC(r)) for (let [e, a] of Object.entries(i?.colors ?? {}).slice(0, FC.keys)) {
		if (!jC(e) || typeof a != "string" || !zC(a)) continue;
		let i = HC(a, t);
		i && !/[;{}<>]/.test(i) && (n[`--brand-ext-${r}-${e}`] = i);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/integration-readers.js
function WC(e, t) {
	let n = Iv(Iv(Iv(e?.extensions).maps).strings), r = Lv(n[`${t}StyleUrl`]);
	if (!r) return null;
	let i = Lv(n[`${t}StyleName`]);
	return {
		url: r,
		...i ? { name: i } : {},
		source: "extensions.maps"
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-metrics.js
var GC = [
	["ascentOverride", "ascent-override"],
	["descentOverride", "descent-override"],
	["lineGapOverride", "line-gap-override"]
];
function KC(e) {
	let t = {};
	if (!e || typeof e != "object") return t;
	for (let [n] of GC) {
		let r = e[n], i = typeof r == "string" ? Number(r.replace(/%$/, "")) : r;
		typeof i == "number" && Number.isFinite(i) && i >= 0 && i <= 200 && (t[n] = Math.round(i * 100) / 100);
	}
	return t;
}
function qC(e) {
	let t = KC(e);
	return GC.flatMap(([e, n]) => t[e] === void 0 ? [] : [[n, `${t[e]}%`]]);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/defaults.js
var JC = {
	typography: {
		fontSans: "\"DM Sans\", sans-serif",
		fontDisplay: "\"Fraunces\", serif",
		fontSerif: "\"Lora\", serif",
		fontMono: "\"JetBrains Mono\", monospace"
	},
	radius: { base: "0rem" }
}, YC = { semantic: {
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
} }, XC = { semantic: {
	background: "oklch(0.1773 0.0294 265.82)",
	foreground: "oklch(0.9676 0.007 247.9)",
	card: "oklch(0.2089 0.033 265.91)",
	cardForeground: "oklch(0.9676 0.007 247.9)",
	popover: "oklch(0.2089 0.033 265.91)",
	popoverForeground: "oklch(0.9676 0.007 247.9)",
	primary: "oklch(0.7158 0.1411 254.43)",
	primaryForeground: "oklch(0.1773 0.0294 265.82)",
	secondary: "oklch(0.2886 0.0277 259.81)",
	secondaryForeground: "oklch(0.9676 0.007 247.9)",
	muted: "oklch(0.269 0.0251 259.82)",
	mutedForeground: "oklch(0.7886 0.0224 255.09)",
	accent: "oklch(0.3154 0.0369 259.74)",
	accentForeground: "oklch(0.9676 0.007 247.9)",
	destructive: "oklch(0.6896 0.1657 22.41)",
	destructiveForeground: "oklch(0.1773 0.0294 265.82)",
	border: "oklch(0.3382 0.0283 259.84)",
	input: "oklch(0.3382 0.0283 259.84)",
	ring: "oklch(0.7158 0.1411 254.43)",
	chart1: "oklch(0.7158 0.1411 254.43)",
	chart2: "oklch(0.7974 0.114 207.46)",
	chart3: "oklch(0.8233 0.15 77)",
	chart4: "oklch(0.7666 0.1583 154.28)",
	chart5: "oklch(0.7142 0.1747 311.93)",
	sidebar: "oklch(0.22 0.0307 267.32)",
	sidebarForeground: "oklch(0.9676 0.007 247.9)",
	sidebarPrimary: "oklch(0.7158 0.1411 254.43)",
	sidebarPrimaryForeground: "oklch(0.1773 0.0294 265.82)",
	sidebarAccent: "oklch(0.2845 0.0315 263.88)",
	sidebarAccentForeground: "oklch(0.9676 0.007 247.9)",
	sidebarBorder: "oklch(0.3382 0.0283 259.84)",
	sidebarRing: "oklch(0.7158 0.1411 254.43)"
} }, ZC = .12, QC = .08, $C = .32, ew = .88, tw = [
	YC.semantic.chart1,
	YC.semantic.chart2,
	YC.semantic.chart3,
	YC.semantic.chart4,
	YC.semantic.chart5
].filter((e) => !!e);
function nw(e) {
	return (e % 360 + 360) % 360;
}
function rw(e) {
	if (e <= 0) return 0;
	let t = ZC + Math.floor((e - 1) / 2) * QC;
	return e % 2 == 1 ? t : -t;
}
function iw(e, t) {
	if (t === 0) return e;
	let n = e + t;
	if (n >= $C && n <= ew) return n;
	let r = e - t;
	return Math.min(ew, Math.max($C, r));
}
function aw(e, t) {
	let n = [...e].sort((e, t) => e - t), r = [];
	for (let e = 0; e < t; e += 1) {
		let e = n[0], t = -1;
		for (let r = 0; r < n.length; r += 1) {
			let i = n[r], a = r === n.length - 1 ? n[0] + 360 : n[r + 1];
			a - i > t && (t = a - i, e = i);
		}
		let i = nw(Math.round(e + t / 2));
		r.push(i), n.push(i), n.sort((e, t) => e - t);
	}
	return r;
}
function ow(e, t) {
	let n = Math.max(0, Math.floor(t));
	if (n === 0) return [];
	let r = e.length > 0 ? e : tw, i = r.map((e) => dC(e)), a = i.find((e) => e !== void 0), o = Math.max(0, 10 - r.length), s = o > 0 && a ? aw(i.filter((e) => e !== void 0).map((e) => e.h), o) : [], c = [];
	for (let e = 0; e < n; e += 1) {
		if (e < r.length) {
			c.push(r[e]);
			continue;
		}
		let t = e % 10, n = rw(Math.floor(e / 10)), o = t < r.length ? i[t] : a;
		if (!o) {
			c.push(a ? r[t] : r[e % r.length]);
			continue;
		}
		let l = t < r.length ? o.h : s[t - r.length];
		c.push(pC({
			l: iw(o.l, n),
			c: o.c,
			h: l,
			alpha: 1
		}));
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/css-safety.js
var sw = /[;{}<>\\\n\r]/, cw = /["'\\\s<>]/, lw = /["\\\n\r\f<>]/, uw = /[;:{}<>()"'\\\n\r\f]/;
function dw(e) {
	return (typeof e == "string" || typeof e == "number") && !uw.test(String(e));
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/google-fonts.js
function fw(e) {
	let t = e.map((e) => {
		let t = e.family.trim();
		if (!t) return "";
		let n = mw(e.weights), r = n.join(";"), i = t.replace(/\s+/g, "+"), a = e.styles?.includes("italic") ? ["0", "1"] : ["0"];
		return r ? a.length === 1 ? `family=${i}:wght@${r}` : `family=${i}:ital,wght@${a.flatMap((e) => n.map((t) => `${e},${t}`)).join(";")}` : `family=${i}`;
	}).filter(Boolean);
	return t.length > 0 ? `https://fonts.googleapis.com/css2?${t.join("&")}&display=swap` : "";
}
function pw(e) {
	let t;
	try {
		t = new URL(e);
	} catch {
		return [];
	}
	return t.hostname === "fonts.googleapis.com" ? t.searchParams.getAll("family").flatMap((e) => {
		let [t = "", n = ""] = e.split(":"), r = t.trim();
		if (!r) return [];
		let [i = "", a = ""] = n.split("@"), o = i === "ital,wght";
		if (i !== "wght" && !o) return [{
			family: r,
			weights: [],
			styles: ["normal"]
		}];
		let s = a.split(";").map((e) => o ? e.split(",") : ["0", e]);
		return [{
			family: r,
			weights: mw(s.map(([, e]) => Number(e))),
			styles: s.some(([e]) => e === "1") ? ["normal", "italic"] : ["normal"]
		}];
	}) : [];
}
function mw(e) {
	let t = (e ?? []).filter((e) => Number.isFinite(e) && e > 0 && e <= 1e3);
	return [...new Set(t)].sort((e, t) => e - t);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-face-css.js
function hw(e, t = "block") {
	let { family: n, src: r, format: i, weight: a, style: o } = e;
	if (!n || lw.test(n) || !r || lw.test(r) || i && lw.test(i)) return;
	let s = a !== void 0 && a !== "";
	if (s && !dw(a) || o !== void 0 && !dw(o)) return;
	let c = [
		["font-family", `"${n}"`],
		["src", `url("${r}")${i ? ` format("${i}")` : ""}`],
		...s ? [["font-weight", String(a)]] : [],
		["font-style", o ?? "normal"],
		...qC(e.metrics),
		["font-display", "swap"]
	];
	return t === "compact" ? `@font-face{${c.map(([e, t]) => `${e}:${t};`).join("")}}` : [
		"@font-face {",
		...c.map(([e, t]) => `  ${e}: ${t};`),
		"}"
	].join("\n");
}
function gw(e, t) {
	let n = String(e ?? t ?? "").toLowerCase();
	return n.includes("woff2") ? "woff2" : n.includes("woff") ? "woff" : n.includes("otf") || n.includes("opentype") ? "opentype" : "truetype";
}
function _w(e) {
	let t = (e.variants ?? []).filter((e) => e.kind === "web" || e.format === "woff" || e.format === "woff2");
	return t.length > 0 ? t : [e.files?.woff2 ? {
		format: "woff2",
		url: e.files.woff2
	} : void 0, e.files?.woff ? {
		format: "woff",
		url: e.files.woff
	} : void 0].filter(Boolean);
}
function vw(e) {
	if (e.source === "google") return e.cssUrl || fw([{
		family: e.family,
		weights: e.weights,
		styles: e.styles
	}]);
	if (e.source === "css") return e.cssUrl;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-stack.js
function yw(e) {
	return e.replace(/^["']|["']$/g, "");
}
function bw(e) {
	return e.replace(/^(["'])(.*)\1$/, "$2");
}
function xw(e) {
	return yw((e.split(",")[0] ?? "").trim());
}
function Sw(e) {
	return bw((e.split(",")[0] ?? "").trim()).trim();
}
function Cw(e) {
	return e.includes(",") || e.startsWith("\"") ? e : `"${e}"`;
}
function ww(e, t) {
	return !!(e && t && e.trim().toLowerCase() === t.trim().toLowerCase());
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/logos.js
function Tw(e, t) {
	return e === "svg" ? { svg: t } : e === "png" ? { png: t } : { jpg: t };
}
var Ew = [
	"svg",
	"png",
	"jpg"
];
function Dw(e) {
	for (let t of Ew) {
		let n = e?.files?.[t]?.trim();
		if (n) return {
			src: n,
			format: t
		};
	}
}
function Ow(e, t, n, r = {}) {
	let i = (e?.variants ?? []).filter((e) => e.kind === t && (e.background === n || e.background === "any")), a = [...i.filter((e) => e.background === n), ...i.filter((e) => e.background === "any")], o = r.name?.trim().toLowerCase(), s = o ? a.filter((e) => e.id.toLowerCase() === o || e.name?.trim().toLowerCase() === o) : [];
	return kw(s.length ? s : a, r.locale);
}
function kw(e, t) {
	let n = e.filter((e) => !e.locale);
	if (!t) return n[0] ?? e[0];
	let r = t.toLowerCase(), i = r.split("-")[0];
	return e.find((e) => e.locale?.toLowerCase() === r) ?? e.find((e) => e.locale?.toLowerCase().split("-")[0] === i) ?? n[0] ?? e[0];
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/normalize-fields.js
function Aw(e) {
	if (!X(e)) return;
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		let e = Lv(r);
		e && OC(n) && (t[n] = e);
	}
	return Object.keys(t).length > 0 ? t : void 0;
}
var jw = /^palette\.[A-Za-z0-9_-]+$/;
function Mw(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.min(100, Math.max(0, e)) : void 0;
}
function Nw(e) {
	if (!X(e)) return;
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!X(r) || !jw.test(n) && !OC(n)) continue;
		let e = Array.isArray(r.cmyk) && r.cmyk.length === 4 ? r.cmyk.map(Mw) : void 0, i = Lv(r.pantone), a = {
			...e && e.every((e) => e !== void 0) ? { cmyk: e } : {},
			...i ? { pantone: i } : {}
		};
		Object.keys(a).length > 0 && (t[n] = a);
	}
	return Object.keys(t).length > 0 ? t : void 0;
}
var Pw = /* @__PURE__ */ new Set([
	"primary",
	"mark",
	"wordmark"
]), Fw = /* @__PURE__ */ new Set([
	"light",
	"dark",
	"any"
]), Iw = /^[A-Za-z0-9_-]{1,64}$/, Lw = /^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/;
function Rw(e, t = (e) => e) {
	if (!X(e) || !Array.isArray(e.variants)) return;
	let n = /* @__PURE__ */ new Set(), r = e.variants.flatMap((e) => {
		if (!X(e) || !X(e.files)) return [];
		let r = Lv(e.kind), i = Lv(e.background), a = Dw({ files: {
			svg: Lv(e.files.svg),
			png: Lv(e.files.png),
			jpg: Lv(e.files.jpg)
		} }), o = a ? t(a.src) : void 0;
		if (!r || !Pw.has(r) || !i || !Fw.has(i) || !a || !o) return [];
		let s = Lv(e.id), c = s && Iw.test(s) ? s : `${r}-${i}`;
		if (n.has(c)) return [];
		n.add(c);
		let l = Lv(e.name), u = Lv(e.locale);
		return [{
			id: c,
			kind: r,
			background: i,
			...l ? { name: l } : {},
			...u && Lw.test(u) ? { locale: u } : {},
			files: Tw(a.format, o)
		}];
	});
	return r.length > 0 ? { variants: r } : void 0;
}
var zw = /* @__PURE__ */ new Set([
	"ofl",
	"apache",
	"commercial",
	"custom"
]), Bw = /* @__PURE__ */ new Set([
	"print",
	"web",
	"app"
]);
function Vw(e) {
	if (!X(e) || typeof e.type != "string" || !zw.has(e.type)) return;
	let t = Lv(e.holder), n = Lv(e.url), r = Array.isArray(e.embedding) ? [...new Set(e.embedding.filter((e) => typeof e == "string" && Bw.has(e)))] : void 0;
	return {
		type: e.type,
		...t ? { holder: t } : {},
		...n ? { url: n } : {},
		...r?.length ? { embedding: r } : {}
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/published-assets.js
function Hw(...e) {
	for (let t of e) if (typeof t == "string" && t) return t;
}
function Uw(e) {
	return /^[a-z][a-z0-9+.-]*:/i.test(e) || e.startsWith("//");
}
function Ww(e, t) {
	if (typeof e == "string" && e) return Uw(e) || !t ? e : new URL(e.replace(/^\/+/, ""), `${t}/`).toString();
}
function Gw(e, t) {
	return Array.isArray(e.faces) ? e.faces.filter(X).flatMap((e) => {
		let n = typeof e.weight == "string" || typeof e.weight == "number" ? e.weight : void 0, r = typeof e.style == "string" ? e.style : "normal";
		return Array.isArray(e.files) ? e.files.filter(X).map((i) => ({
			src: Ww(i.src, t),
			weight: typeof i.weight == "string" || typeof i.weight == "number" ? i.weight : n,
			style: typeof i.style == "string" ? i.style : r,
			format: typeof i.format == "string" ? i.format : void 0,
			...KC(e)
		})) : [];
	}).filter((e) => e.src) : [];
}
function Kw(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Array.isArray(e.faces) ? e.faces.filter(X) : []) {
		let e = Number(n.weight);
		Number.isFinite(e) && t.add(e);
	}
	return [...t].sort((e, t) => e - t);
}
function qw(e, t) {
	return {
		id: Hw(e.id),
		family: Hw(e.family),
		source: Hw(e.source),
		category: Hw(e.category),
		cssUrl: Ww(e.cssUrl, t),
		files: Gw(e, t),
		faceWeights: Kw(e)
	};
}
function Jw(e, t) {
	let n = e.fonts;
	return X(n) ? Object.fromEntries(Object.entries(n).filter(([, e]) => X(e)).map(([e, n]) => [e, qw({
		id: e,
		...n
	}, t)])) : {};
}
var Yw = [
	["background", "background"],
	["foreground", "foreground"],
	["card", "card"],
	["card-foreground", "cardForeground"],
	["popover", "popover"],
	["popover-foreground", "popoverForeground"],
	["primary", "primary"],
	["primary-foreground", "primaryForeground"],
	["secondary", "secondary"],
	["secondary-foreground", "secondaryForeground"],
	["muted", "muted"],
	["muted-foreground", "mutedForeground"],
	["accent", "accent"],
	["accent-foreground", "accentForeground"],
	["destructive", "destructive"],
	["destructive-foreground", "destructiveForeground"],
	["border", "border"],
	["input", "input"],
	["ring", "ring"]
], Xw = [
	"chart1",
	"chart2",
	"chart3",
	"chart4",
	"chart5"
], Zw = [
	[
		"sans",
		"fontSans",
		"font.sans"
	],
	[
		"serif",
		"fontSerif",
		"font.serif"
	],
	[
		"display",
		"fontDisplay",
		"font.display"
	],
	[
		"mono",
		"fontMono",
		"font.mono"
	]
];
function Qw(e) {
	return Xw.some((t) => e.authored.includes(t) && !!mC(e.semantic[t]));
}
function $w(e, t, n) {
	let r = mC(n);
	r !== void 0 && (e[t] = r);
}
function eT(e, t, n) {
	$w(e, `--${t}`, n), $w(e, `--color-${t}`, n);
}
function tT(e) {
	let t = {}, { semantic: n } = e;
	for (let [e, r] of Yw) eT(t, e, n[r]);
	Qw(e) && Xw.forEach((e, r) => eT(t, `chart-${r + 1}`, n[e])), Object.assign(t, UC(e.extensions, n));
	for (let [n, r, i] of Zw) {
		if (!e.assignments[i]) continue;
		let a = e.typography[r];
		typeof a == "string" && a.trim() && !sw.test(a) && (t[`--font-${n}`] = a.trim());
	}
	return t;
}
function nT(e) {
	let t = e === void 0 ? void 0 : Sw(e);
	return t && !lw.test(t) ? t : void 0;
}
function rT(e) {
	let t = Number(e);
	return Number.isInteger(t) && t >= 1 && t <= 1e3 ? t : void 0;
}
function iT(e) {
	let t = [], n = [], r = e.fonts;
	if (!r) return {
		stylesheets: t,
		faces: n
	};
	let i = Jw({ fonts: r }, e.baseUrl), a = new Set(Zw.map(([, , t]) => e.assignments[t]).filter(Boolean)), o = (n) => {
		let r = Ww(n, e.baseUrl);
		r && !cw.test(r) && !t.includes(r) && t.push(r);
	};
	for (let e of a) {
		let t = r[e];
		if (!t) continue;
		o(t.cssUrl);
		for (let e of t.faces ?? []) o(e?.cssUrl);
		let a = nT(t.family);
		if (a) for (let t of i[e]?.files ?? []) {
			if (!t.src || cw.test(t.src)) continue;
			let e = {
				family: a,
				src: t.src
			}, r = rT(t.weight);
			r !== void 0 && (e.weight = r), (t.style === "italic" || t.style === "normal") && (e.style = t.style), t.format && (e.format = t.format), Object.assign(e, KC(t)), n.some((t) => t.family === e.family && t.src === e.src) || n.push(e);
		}
	}
	return {
		stylesheets: t,
		faces: n
	};
}
function aT(e) {
	let { stylesheets: t, faces: n } = iT(e), r = {
		version: 1,
		light: tT(e)
	};
	return t.length > 0 && (r.fontStylesheets = t), n.length > 0 && (r.fontFaces = n), r;
}
function oT(e, t = {}) {
	let n = Iv(e), r = [];
	for (let e of Array.isArray(n.fontStylesheets) ? n.fontStylesheets : []) {
		if (typeof e != "string" || cw.test(e)) continue;
		let n = Ww(e, t.baseUrl);
		n && !/^data:/i.test(n) && !r.includes(n) && r.push(n);
	}
	let i = [];
	for (let e of Array.isArray(n.fontFaces) ? n.fontFaces : []) {
		if (!e || typeof e != "object") continue;
		let n = e, r = nT(typeof n.family == "string" ? n.family : void 0), a = typeof n.src == "string" && !lw.test(n.src) ? Ww(n.src, t.baseUrl) : void 0, o = hw({
			family: r,
			src: a,
			format: gw(n.format, a),
			weight: rT(n.weight) ?? 400,
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
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/derive-semantics.js
var sT = .4, cT = 4.5, lT = "oklch(1 0 0)", uT = "oklch(0 0 0)", dT = {
	card: [{
		kind: "mirror",
		of: "background"
	}],
	popover: [{
		kind: "mirror",
		of: "card"
	}],
	muted: [{
		kind: "mix",
		from: "background",
		toward: "foreground",
		amount: .06
	}],
	accent: [{
		kind: "mirror",
		of: "secondary"
	}],
	border: [{
		kind: "mix",
		from: "background",
		toward: "foreground",
		amount: .14
	}],
	input: [{
		kind: "mirror",
		of: "border"
	}],
	ring: [{
		kind: "mirror",
		of: "primary"
	}],
	cardForeground: [{
		kind: "foreground",
		on: "card"
	}],
	popoverForeground: [{
		kind: "foreground",
		on: "popover"
	}],
	primaryForeground: [{
		kind: "foreground",
		on: "primary"
	}],
	secondaryForeground: [{
		kind: "foreground",
		on: "secondary"
	}],
	accentForeground: [{
		kind: "foreground",
		on: "accent"
	}],
	destructiveForeground: [{
		kind: "foreground",
		on: "destructive"
	}],
	mutedForeground: [{
		kind: "mutedForeground",
		on: "muted"
	}],
	chart1: [{
		kind: "mirror",
		of: "primary"
	}],
	chart2: [{
		kind: "hue",
		of: "primary",
		rotate: 40
	}],
	chart3: [{
		kind: "hue",
		of: "primary",
		rotate: 150
	}],
	chart4: [{
		kind: "hue",
		of: "primary",
		rotate: 210
	}],
	chart5: [{
		kind: "hue",
		of: "primary",
		rotate: 300
	}],
	sidebar: [{
		kind: "mix",
		from: "background",
		toward: "foreground",
		amount: .04
	}],
	sidebarForeground: [{
		kind: "foreground",
		on: "sidebar"
	}],
	sidebarPrimary: [{
		kind: "mirror",
		of: "primary"
	}],
	sidebarPrimaryForeground: [{
		kind: "foreground",
		on: "sidebarPrimary"
	}],
	sidebarAccent: [{
		kind: "mirror",
		of: "accent"
	}],
	sidebarAccentForeground: [{
		kind: "foreground",
		on: "sidebarAccent"
	}],
	sidebarBorder: [{
		kind: "mirror",
		of: "border"
	}],
	sidebarRing: [{
		kind: "mirror",
		of: "ring"
	}]
}, fT = Object.keys(dT), pT = new Set(fT);
function mT(e) {
	return pT.has(e);
}
var hT = fT.filter((e) => dT[e].some((e) => e.kind === "foreground" || e.kind === "mutedForeground"));
new Set(hT);
function gT(e) {
	if (mT(e)) {
		for (let t of dT[e]) if (t.kind === "foreground" || t.kind === "mutedForeground") return t.on;
	}
}
function _T(e, t) {
	let n = [
		t.foreground,
		t.background,
		lT,
		uT
	].filter((e) => !!e && dC(e) !== void 0);
	if (!dC(e)) return n[0];
	let r = (t) => yC(t, e) ?? 0;
	return n.find((e) => r(e) >= cT) ?? n.reduce((e, t) => e === void 0 || r(t) > r(e) ? t : e, void 0);
}
function vT(e, t) {
	let n = _T(e, t);
	if (n) {
		for (let t = sT; t >= 0; t -= .01) {
			let r = _C(n, e, t), i = r ? pC(r) : n;
			if ((yC(i, e) ?? 0) >= cT) return i;
		}
		return n;
	}
}
function yT(e, t = {}) {
	let n = { ...e }, r = /* @__PURE__ */ new Set();
	function i(e) {
		let i = n[e];
		if (i) return i;
		if (r.has(e)) return t[e];
		r.add(e);
		let o = a(e);
		r.delete(e);
		let s = o ?? t[e];
		return s && (n[e] = s), s;
	}
	function a(e) {
		if (!mT(e)) return;
		let t = {
			foreground: i("foreground"),
			background: i("background")
		};
		for (let n of dT[e]) {
			let e = bT(n, t, i);
			if (e) return e;
		}
	}
	for (let e of fT) i(e);
	return n;
}
function bT(e, t, n) {
	switch (e.kind) {
		case "foreground": {
			let r = n(e.on);
			return r ? _T(r, t) : void 0;
		}
		case "mutedForeground": {
			let r = n(e.on);
			return r ? vT(r, t) : void 0;
		}
		case "mirror": return n(e.of);
		case "mix": {
			let t = n(e.from), r = n(e.toward), i = t && r ? _C(t, r, e.amount) : void 0;
			return i ? pC(i) : void 0;
		}
		case "hue": {
			let t = n(e.of), r = t ? vC(t, e.rotate) : void 0;
			return r ? pC(r) : void 0;
		}
	}
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/shade.js
var xT = [
	.97,
	.9,
	.79,
	.66,
	.52,
	.38,
	.26
], ST = [
	.16,
	.36,
	.66,
	.92,
	1,
	.82,
	.58
], CT = "oklch(1 0 0)", wT = {
	bg: 0,
	bgSoft: 1,
	mid: 2,
	strong: 4,
	dark: 5,
	darkest: 6
};
function TT(e, t) {
	let n = dC(e), r = n?.h ?? 0, i = t ?? n?.c ?? 0;
	return xT.map((e, n) => pC({
		l: e,
		c: t ?? i * ST[n],
		h: r,
		alpha: 1
	}));
}
function ET(e) {
	return TT(e ?? "#8899aa", .012);
}
function DT(e, t) {
	return _T(e, {
		foreground: CT,
		background: t[t.length - 1]
	}) ?? CT;
}
function OT(e) {
	let t = (e) => (e ? gC(e) : void 0) ?? "#8899aa", n = TT(t(e.primary)), r = TT(t(e.secondary)), i = TT(t(e.accent)), a = ET(t(e.background)), o = n[wT.mid];
	return {
		background: a[wT.darkest],
		foreground: a[wT.bg],
		card: a[wT.dark],
		cardForeground: a[wT.bg],
		popover: a[wT.dark],
		popoverForeground: a[wT.bg],
		primary: o,
		primaryForeground: DT(o, a),
		secondary: r[wT.dark],
		secondaryForeground: r[wT.bgSoft],
		muted: a[wT.dark],
		mutedForeground: a[wT.mid],
		accent: i[wT.strong],
		accentForeground: i[wT.bg],
		border: a[wT.strong],
		input: a[wT.strong],
		ring: o
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/collections-runtime.js
function kT(...e) {
	for (let t of e) {
		let e = Lv(t);
		if (e) return e;
	}
}
function AT(e) {
	return Object.fromEntries(Object.entries(e.collections ?? {}).filter((e) => X(e[1])));
}
function jT(e, t) {
	let n = kT(e.kind);
	if (n) return n;
	if (t?.startsWith("media.")) return t.slice(6);
	let r = kT(e.type);
	if (r) return {
		photo: "photos",
		graphic: "graphics",
		icon: "icons",
		background: "backgrounds",
		template: "templates"
	}[r] ?? r;
}
function MT(e) {
	return new Map(Object.entries(e.assignments ?? {}).flatMap(([e, t]) => e.startsWith("media.") && Lv(t) ? [[t, e]] : []));
}
function NT(e, t) {
	let n = X(e.versions) ? e.versions : {}, r = kT(t);
	if (r) {
		let e = n[r];
		return X(e) && e.archived !== !0 ? [r, e] : void 0;
	}
	let i = kT(e.defaultVersionId);
	if (i && X(n[i]) && n[i].archived !== !0) return [i, n[i]];
	let a = Object.entries(n).find(([, e]) => X(e) && e.archived !== !0);
	return a && X(a[1]) ? [a[0], a[1]] : void 0;
}
function PT(e, t, n, r) {
	let i = n.toLowerCase(), a = [
		t,
		jT(e, r),
		kT(e.type)
	].filter((e) => !!e).map((e) => e.toLowerCase()), o = NC(i);
	return a.includes(i) || a.includes(o);
}
function FT(e, t) {
	let n = AT(e), r = e.assignments?.[`media.${t}`] ?? e.assignments?.[t] ?? t;
	if (typeof r == "string" && X(n[r]) && n[r].archived !== !0) return [r, n[r]];
	let i = MT(e);
	return Object.entries(n).find(([e, n]) => n.archived !== !0 && PT(n, e, t, i.get(e)));
}
function IT(e, t, n) {
	let r = FT(e, t);
	if (!r) return;
	let i = NT(r[1], n);
	if (i) return {
		collectionId: r[0],
		collection: r[1],
		versionId: i[0],
		version: i[1]
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/public-version.js
function LT(e) {
	return typeof e == "string" && /^1(?:\.\d+){0,2}$/.test(e);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/font-roles.js
var RT = [
	"sans",
	"serif",
	"display",
	"mono"
], zT = {
	sans: "font_sans",
	serif: "font_serif",
	display: "font_display",
	mono: "font_mono"
}, BT = {
	sans: "fontSans",
	serif: "fontSerif",
	display: "fontDisplay",
	mono: "fontMono"
};
function VT(e) {
	return e === "mono" ? "ui-monospace, monospace" : e === "serif" ? "serif" : "sans-serif";
}
function HT(e) {
	let t = e.family.trim();
	if (!t) return e.fallback;
	if (t.includes(",")) return t;
	let n = Cw(t), r = e.fallback.trim();
	return r ? `${n}, ${r}` : n;
}
var UT = [
	"google",
	"custom",
	"css"
];
function WT(e) {
	let t = {};
	return typeof e.id == "string" && e.id && (t.id = e.id), typeof e.source == "string" && UT.includes(e.source) && (t.source = e.source), e.category && (t.category = e.category), e.previewText && (t.previewText = e.previewText), e.cssUrl && (t.cssUrl = e.cssUrl), e.subsets && (t.subsets = e.subsets), e.variable !== void 0 && (t.variable = e.variable), e.faces && (t.faces = e.faces), e.weights && (t.weights = e.weights), e.styles && (t.styles = e.styles), e.license && (t.license = e.license), t;
}
function GT(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = Object.keys(e);
	return t.length === 0 || t.every((e) => RT.includes(e));
}
function KT(e) {
	if (!GT(e)) return;
	let t = {};
	for (let n of RT) {
		let r = e[n];
		r && typeof r == "object" && typeof r.family == "string" && r.family.trim() && (t[n] = {
			...WT(r),
			family: r.family.trim(),
			fallback: typeof r.fallback == "string" && r.fallback.trim() ? r.fallback.trim() : VT(n)
		});
	}
	return Object.keys(t).length > 0 ? t : void 0;
}
function qT(e) {
	if (!e) return;
	let t = { ...e };
	return delete t["font.sans"], delete t["font.serif"], delete t["font.display"], delete t["font.mono"], Object.values(t).some((e) => e) ? t : void 0;
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/normalize.js
function JT(e) {
	return typeof e == "string" ? e : void 0;
}
function YT(e) {
	return X(e) ? Object.fromEntries(Object.entries(e).flatMap(([e, t]) => typeof t == "string" && t.trim() ? [[e, t.trim()]] : [])) : {};
}
function XT(e) {
	let t = X(e) ? e : {}, n = X(t.primitives) ? t.primitives : {}, r = X(n.typography) ? n.typography : {}, i = {
		typography: {
			...JT(r.fontSans)?.trim() ? { fontSans: JT(r.fontSans).trim() } : {},
			...JT(r.fontSerif)?.trim() ? { fontSerif: JT(r.fontSerif).trim() } : {},
			...JT(r.fontDisplay)?.trim() ? { fontDisplay: JT(r.fontDisplay).trim() } : {},
			...JT(r.fontMono)?.trim() ? { fontMono: JT(r.fontMono).trim() } : {}
		},
		radius: YT(n.radius)
	}, a = (e) => ({ semantic: YT((X(e) ? e : {}).semantic) });
	return {
		primitives: i,
		light: a(t.light),
		...X(t.dark) ? { dark: a(t.dark) } : {}
	};
}
function ZT(e) {
	let t = X(e) ? e : {};
	return {
		brandColorsOnly: t.brandColorsOnly === !0,
		brandFontsOnly: t.brandFontsOnly === !0
	};
}
function QT(e) {
	let t = X(e) ? e : {}, n = {
		...JT(t.summary)?.trim() ? { summary: JT(t.summary).trim() } : {},
		...JT(t.personality)?.trim() ? { personality: JT(t.personality).trim() } : {},
		...JT(t.writingGuidance)?.trim() ? { writingGuidance: JT(t.writingGuidance).trim() } : {},
		...JT(t.samplePrompt)?.trim() ? { samplePrompt: JT(t.samplePrompt).trim() } : {}
	};
	return Object.keys(n).length > 0 ? n : void 0;
}
function $T(e) {
	if (e === "brand") return "Brand Guidelines";
	if (e === "charts") return "Charts";
	if (e === "logo") return "Logo";
	let t = e.replace(/[-_]+/g, " ").trim();
	return t ? `${t[0].toUpperCase()}${t.slice(1)}` : "Guideline";
}
function eE(e) {
	if (!X(e)) return;
	let t = Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		if (!X(t)) return [];
		let n = JT(t.name)?.trim() || $T(e), r = JT(t.summary)?.trim(), i = JT(t.do)?.trim(), a = JT(t.dont)?.trim();
		return r || i || a ? [[e, {
			name: n,
			...r ? { summary: r } : {},
			...i ? { do: i } : {},
			...a ? { dont: a } : {}
		}]] : [];
	}));
	return Object.keys(t).length > 0 ? t : void 0;
}
function tE(e) {
	return X(e) ? Object.fromEntries(Object.entries(e).flatMap(([e, t]) => X(t) ? [[e, {
		...JT(t.label)?.trim() ? { label: JT(t.label).trim() } : {},
		...JT(t.description)?.trim() ? { description: JT(t.description).trim() } : {},
		...JT(t.type)?.trim() ? { type: JT(t.type).trim() } : {},
		...Array.isArray(t.tags) ? { tags: t.tags.filter((e) => typeof e == "string") } : {}
	}]] : [])) : {};
}
var nE = /* @__PURE__ */ new Set([
	"key",
	"src",
	"assetId",
	"externalId",
	"name",
	"type",
	"mimeType",
	"hash",
	"tags",
	"metadata",
	"governance",
	"provenance",
	"originalUrl",
	"variants"
]);
function rE(e, t, n) {
	return X(e) ? Object.fromEntries(Object.entries(e).flatMap(([e, r]) => {
		if (!X(r)) return [];
		let i = JT(r.src)?.trim();
		if (!i) return [];
		let a = Object.entries(r).filter(([r]) => nE.has(r) ? !0 : (n.push({
			path: `${t}/${e}/${r}`,
			message: "Unknown collection item field; dropped."
		}), !1));
		return [[e, {
			...Object.fromEntries(a),
			key: JT(r.key)?.trim() || e,
			src: i
		}]];
	})) : {};
}
function iE(e, t = []) {
	if (!X(e)) return;
	let n = Object.fromEntries(Object.entries(e).flatMap(([e, n]) => {
		if (!X(n)) return [];
		let r = JT(n.id)?.trim() || e, i = X(n.versions) ? n.versions : {}, a = Object.fromEntries(Object.entries(i).flatMap(([n, r]) => {
			if (!X(r)) return [];
			let i = JT(r.id)?.trim() || n;
			return [[i, {
				...r,
				id: i,
				label: JT(r.label)?.trim() || i,
				items: rE(r.items, `/collections/${e}/versions/${n}/items`, t),
				...r.archived === !0 ? { archived: !0 } : {}
			}]];
		})), o = JT(n.defaultVersionId)?.trim() || Object.keys(a)[0] || "";
		return [[r, {
			...n,
			id: r,
			kind: JT(n.kind)?.trim() || "photos",
			name: JT(n.name)?.trim() || r,
			keyMode: n.keyMode === "dynamic" ? "dynamic" : "static",
			schema: { keys: tE(X(n.schema) ? n.schema.keys : void 0) },
			defaultVersionId: o,
			versions: a,
			...n.archived === !0 ? { archived: !0 } : {}
		}]];
	}));
	return Object.keys(n).length > 0 ? n : void 0;
}
var aE = class extends Error {
	code = "unsupported_brandkit_document";
	status = 422;
	constructor() {
		super("Unsupported Brand Kit format. Create a new brand with the current contract."), this.name = "BrandKitAuthoringFormatError";
	}
};
function oE(e) {
	let t = X(e), n = t ? structuredClone(e) : {};
	if (n.schemaVersion !== void 0 && n.schemaVersion !== 1 || n.version !== void 0 && !LT(n.version)) throw new aE();
	for (let e of [
		"version",
		"storage",
		"config",
		"logos",
		"assets",
		"photos",
		"graphics",
		"icons",
		"charts",
		"templates",
		"mediaAssets",
		"mediaCollections",
		"mediaAssignments"
	]) delete n[e];
	let r = n, i = [], a = {
		...r,
		schemaVersion: 1,
		description: typeof r.description == "string" ? r.description : "",
		tokens: XT(r.tokens),
		controls: ZT(r.controls),
		collections: iE(r.collections, i),
		brandVoice: QT(r.brandVoice),
		guidelines: eE(r.guidelines),
		notes: Aw(r.notes),
		print: Nw(r.print),
		logoSystem: Rw(r.logoSystem),
		fonts: KT(r.fonts),
		assignments: qT(r.assignments)
	}, o = BC(r.extensions);
	return a.extensions = o.extensions, {
		kit: a,
		diagnostics: [
			...t ? [] : [{
				path: "/",
				message: "Expected a Brand Kit object; normalized an empty document instead."
			}],
			...i,
			...o.diagnostics
		]
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/platform/template-use-policy.js
var sE = class extends Error {
	code = "invalid_template_use_policy";
	constructor() {
		super("Template-use policy requires its v1 schema, policyId, positive revision, exact named scope and boolean allowed value."), this.name = "BrandKitTemplateUsePolicyError";
	}
};
function cE(e) {
	return typeof e == "string" && e.length > 0 && e.length <= 200 && e === e.trim();
}
function lE(e) {
	return X(e) && Object.keys(e).length === 2 && cE(e.id) && typeof e.kind == "string" && [
		"client",
		"sub-brand",
		"campaign",
		"template"
	].includes(String(e.kind));
}
function uE(e) {
	if (!X(e) || Object.keys(e).length !== 5 || e.schema !== "uhuu.brandkit-template-use-policy.v1" || !cE(e.policyId) || !Number.isSafeInteger(e.revision) || Number(e.revision) < 1 || !lE(e.scope) || typeof e.allowed != "boolean") throw new sE();
	return {
		schema: e.schema,
		policyId: e.policyId,
		revision: e.revision,
		scope: {
			kind: e.scope.kind,
			id: e.scope.id
		},
		allowed: e.allowed
	};
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/runtime.js
var dE = {
	primitives: {
		"font-sans": "typography.fontSans",
		"font-serif": "typography.fontSerif",
		"font-display": "typography.fontDisplay",
		"font-mono": "typography.fontMono",
		radius: "radius.base"
	},
	semantic: {
		background: "background",
		foreground: "foreground",
		card: "card",
		"card-foreground": "cardForeground",
		popover: "popover",
		"popover-foreground": "popoverForeground",
		primary: "primary",
		"primary-foreground": "primaryForeground",
		secondary: "secondary",
		"secondary-foreground": "secondaryForeground",
		muted: "muted",
		"muted-foreground": "mutedForeground",
		accent: "accent",
		"accent-foreground": "accentForeground",
		destructive: "destructive",
		"destructive-foreground": "destructiveForeground",
		border: "border",
		input: "input",
		ring: "ring",
		"chart-1": "chart1",
		"chart-2": "chart2",
		"chart-3": "chart3",
		"chart-4": "chart4",
		"chart-5": "chart5",
		sidebar: "sidebar",
		"sidebar-foreground": "sidebarForeground",
		"sidebar-primary": "sidebarPrimary",
		"sidebar-primary-foreground": "sidebarPrimaryForeground",
		"sidebar-accent": "sidebarAccent",
		"sidebar-accent-foreground": "sidebarAccentForeground",
		"sidebar-border": "sidebarBorder",
		"sidebar-ring": "sidebarRing"
	}
};
dE.semantic;
function fE(e, t) {
	return t.split(".").reduce((e, t) => {
		if (e && typeof e == "object" && t in e) return e[t];
	}, e);
}
function pE(e, t) {
	return {
		...e,
		...t ?? {}
	};
}
function mE(e, t) {
	return { semantic: pE(e.semantic, t?.semantic) };
}
function hE(e, t) {
	return {
		typography: pE(e.typography, t.typography),
		radius: pE(e.radius, t.radius)
	};
}
function gE(e, t) {
	let n = e.fonts;
	if (!n || Array.isArray(n) || !GT(n)) return t;
	let r = { ...t.typography }, i = !1;
	for (let e of RT) {
		let t = n[e], a = BT[e];
		if (!t?.family) {
			r[a] !== void 0 && (delete r[a], i = !0);
			continue;
		}
		let o = typeof r[a] == "string" ? r[a] : "";
		if (o && xw(o).toLowerCase() === yw(t.family.trim()).toLowerCase()) continue;
		let s = HT(t);
		s !== r[a] && (r[a] = s, i = !0);
	}
	return i ? {
		...t,
		typography: r
	} : t;
}
var _E = [
	"primary",
	"secondary",
	"destructive"
];
function vE(e) {
	let t = yE(e, "light");
	if (e.colorMode === "shade") return yT(OT(yT(t, YC.semantic)), XC.semantic);
	let n = { ...yE(e, "dark") };
	for (let e of _E) n[e] ??= t[e];
	for (let e of Object.keys(t)) !mT(e) && n[e] === void 0 && t[e] && (n[e] = e === "background" || e === "foreground" ? XC.semantic[e] : t[e]);
	return yT(n, XC.semantic);
}
function yE(e, t) {
	return { ...t === "dark" ? e.tokens.dark?.semantic ?? {} : e.tokens.light.semantic };
}
function bE(e, t) {
	let n = yE(e, t);
	return DC.flatMap((e) => {
		let t = n[e.key];
		return typeof t == "string" && t.trim() ? [e.key] : [];
	});
}
function xE(e) {
	let t = yT(yE(e, "light"), YC.semantic), n = mE(YC, {
		...e.tokens.light,
		semantic: t
	}), r = vE(e), i = e.tokens.dark ? mE(XC, {
		...e.tokens.light,
		...e.tokens.dark,
		semantic: r
	}) : mE(XC, {
		...e.tokens.light,
		semantic: r
	}), a = gE(e, hE(JC, e.tokens.primitives)), o = [], s = [];
	for (let [t, n] of Object.entries(dE.semantic)) fE(e.tokens.light.semantic, n) || s.push(`light.semantic.${n}`), fE(e.tokens.dark?.semantic ?? {}, n) || s.push(`dark.semantic.${n}`);
	for (let [, t] of Object.entries(dE.primitives)) fE(e.tokens.primitives, t) || s.push(`primitives.${t}`);
	return !e.tokens.dark && SE(e) && o.push("Dark mode was not provided explicitly. The runtime merges light tokens with dark defaults."), {
		kit: e,
		tokens: {
			primitives: a,
			light: n,
			dark: i
		},
		warnings: o,
		fallbacks: s
	};
}
function SE(e) {
	return e.colorMode === "shade" || e.colorMode === "manual";
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/public-runtime.js
function CE(e) {
	return !X(e) || !LT(e.version) || typeof e.id != "string" || !e.id.trim() || typeof e.name != "string" || !X(e.assignments) || !X(e.tokens) || !X(e.tokens.primitives) || !X(e.tokens.light) || !X(e.tokens.light.semantic) || !Array.isArray(e.tokens.light.authored) || !X(e.runtime) || e.runtime.version !== 1 || !X(e.runtime.light) || !X(e.generator) || e.generator.name !== "@uhuu/brandkit" ? !1 : Object.values(e.runtime.light).every((e) => typeof e == "string");
}
function wE(e, t = {}) {
	VC(e.extensions);
	let n = oE(e).kit;
	VC(n.extensions);
	let r = YE(t.baseUrl), i = (e) => JE(e, r), a = {}, o = Rw(n.logoSystem, i), s = EE(n, a, r), c = kE(n, a, r), l = zE(n, xE(n)), u = {
		...qE(n.assignments),
		...a
	}, d = aT({
		semantic: l.light.semantic,
		authored: l.light.authored,
		typography: l.primitives.typography,
		fonts: s,
		assignments: u,
		extensions: n.extensions,
		baseUrl: r
	});
	return eD({
		version: "1.0",
		id: n.id,
		name: n.name,
		description: Lv(n.description),
		baseUrl: r,
		assignments: u,
		fonts: s,
		collections: c,
		controls: IE(n.controls),
		brandVoice: LE(n.brandVoice),
		guidelines: RE(n.guidelines),
		templateUsePolicy: n.templateUsePolicy === void 0 ? void 0 : uE(n.templateUsePolicy),
		tokens: l,
		notes: Aw(n.notes),
		print: Nw(n.print),
		logoSystem: o,
		extensions: n.extensions,
		colorMode: SE(n) ? n.colorMode : void 0,
		runtime: d,
		generator: {
			name: "@uhuu/brandkit",
			exports: 3
		}
	});
}
function TE(e) {
	let t = e.tokens, n = e.extensions, r = (e) => {
		let t = new Set(e?.authored ?? []);
		return Object.fromEntries(Object.entries(e?.semantic ?? {}).filter(([e]) => t.has(e)));
	}, i = {
		id: e.id,
		name: e.name,
		description: e.description ?? "",
		schemaVersion: 1,
		colorMode: e.colorMode,
		controls: e.controls,
		assignments: e.assignments,
		extensions: n,
		tokens: {
			primitives: t.primitives,
			light: { semantic: r(t.light) },
			...t.dark ? { dark: { semantic: r(t.dark) } } : {}
		}
	}, a = zE(i, xE(i), { typography: t.primitives.typography });
	t.light = {
		...t.light,
		...a.light
	}, a.dark ? t.dark = {
		...t.dark,
		...a.dark
	} : delete t.dark, n && Object.keys(n).length ? e.extensions = n : delete e.extensions, e.runtime = aT({
		semantic: a.light.semantic,
		authored: a.light.authored,
		typography: t.primitives.typography,
		fonts: e.fonts,
		assignments: e.assignments,
		extensions: e.extensions,
		baseUrl: e.baseUrl
	});
}
function EE(e, t, n) {
	let r = {}, i = e.fonts;
	if (i && !Array.isArray(i)) {
		for (let a of RT) {
			let o = i[a];
			if (!o?.family?.trim()) continue;
			let s = o.id ?? zT[a];
			r[s] = eD({
				id: s,
				family: o.family,
				source: o.source,
				category: o.category,
				previewText: o.previewText,
				cssUrl: vw({
					...o,
					id: s
				}),
				subsets: o.subsets,
				faces: o.faces?.length ? o.faces.map((e) => eD({
					id: e.id,
					weight: e.weight,
					style: e.style,
					cssUrl: e.cssUrl,
					files: DE(e, n),
					...KC(e)
				})) : void 0,
				license: Vw(o.license)
			}), t[`font.${a}`] = s, e.tokens.primitives.typography[BT[a]] ??= HT(o);
		}
		return $E(r);
	}
}
function DE(e, t) {
	let n = _w(e).filter((e) => e.url).flatMap((n) => {
		let r = JE(n.url, t);
		return r ? [{
			src: r,
			weight: QE(n.weight ?? String(e.weight)),
			style: n.style ?? e.style ?? "normal",
			format: n.format
		}] : [];
	}).filter(OE);
	return n.length > 0 ? n : void 0;
}
function OE(e, t, n) {
	let r = `${e.src}|${e.weight ?? ""}|${e.style ?? "normal"}`;
	return n.findIndex((e) => `${e.src}|${e.weight ?? ""}|${e.style ?? "normal"}` === r) === t;
}
function kE(e, t, n) {
	let r = {};
	for (let t of Object.values(e.collections ?? {})) t.archived || (r[t.id] = AE(t, n));
	let i = /* @__PURE__ */ new Set([
		...kC.map((e) => e.id),
		...(e.mediaKinds ?? []).map((e) => e.id),
		...Object.values(e.collections ?? {}).map((e) => e.kind)
	]);
	for (let n of i) {
		let i = PC(n), a = e.assignments?.[i];
		if (a && r[a]) {
			t[i] = a;
			continue;
		}
		let o = Object.entries(e.collections ?? {}).find(([, e]) => e.kind === n && !e.archived);
		o && (t[i] = o[0]);
	}
	return $E(r);
}
function AE(e, t) {
	let n = jE(e);
	return eD({
		type: n,
		name: e.name,
		schema: { keys: Object.fromEntries(Object.entries(e.schema.keys).map(([e, t]) => [e, eD({
			label: t.label,
			description: t.description,
			type: t.type,
			tags: t.tags
		})])) },
		defaultVersionId: e.defaultVersionId,
		versions: Object.fromEntries(Object.values(e.versions).filter((e) => !e.archived).map((e) => [e.id, eD({
			id: e.id,
			label: e.label,
			items: Object.fromEntries(Object.entries(e.items).flatMap(([e, r]) => {
				let i = JE(r.src, t);
				return i ? [[e, eD({
					src: i,
					assetId: r.assetId,
					externalId: r.externalId,
					hash: r.hash,
					name: r.name,
					type: r.type ?? n,
					mimeType: r.mimeType,
					tags: r.tags,
					metadata: FE(r.metadata, ME),
					governance: FE(r.governance, NE),
					provenance: FE(r.provenance, PE)
				})]] : [];
			}))
		})]))
	});
}
function jE(e) {
	let t = NC(e.kind);
	return Object.prototype.hasOwnProperty.call(MC, e.kind) ? t : e.type ?? t;
}
var ME = [
	"width",
	"height",
	"unit",
	"pageFormat",
	"orientation",
	"viewBox",
	"dpi",
	"colorSpace",
	"svgSafe"
], NE = [
	"workflowStatus",
	"rightsStatus",
	"expiresAt",
	"attribution",
	"usageScope",
	"svgSafe"
], PE = [
	"sourceSystem",
	"sourceAssetId",
	"sourceCollectionId",
	"sourceVersionId",
	"approvedBy",
	"approvedAt"
];
function FE(e, t) {
	if (!e) return;
	let n = e;
	return $E(eD(Object.fromEntries(t.map((e) => [e, n[e]]))));
}
function IE(e) {
	if (e) return $E(eD({
		brandColorsOnly: e.brandColorsOnly || void 0,
		brandFontsOnly: e.brandFontsOnly || void 0
	}));
}
function LE(e) {
	if (e) return $E(eD({
		summary: Lv(e.summary),
		personality: Lv(e.personality),
		writingGuidance: Lv(e.writingGuidance),
		samplePrompt: Lv(e.samplePrompt)
	}));
}
function RE(e) {
	if (!e) return;
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!r) continue;
		let e = Lv(r.summary), i = Lv(r.do), a = Lv(r.dont);
		(e || i || a) && (t[n] = eD({
			name: Lv(r.name) || n,
			summary: e,
			do: i,
			dont: a
		}));
	}
	return $E(t);
}
function zE(e, t, n = {}) {
	let r = WE(e), i = KE(t.tokens.light.semantic, bE(e, "light"), r), a = SE(e) ? KE(t.tokens.dark.semantic, bE(e, "dark"), GE(/* @__PURE__ */ new Set([...r, ...bE(e, "dark")]), bE(e, "dark"))) : void 0, o = e.tokens.primitives;
	return eD({
		primitives: eD({
			typography: n.typography ?? VE(e, t),
			radius: BE(o.radius, JC.radius)
		}),
		light: i,
		dark: a
	});
}
function BE(e, t) {
	let n = t;
	return Object.fromEntries(Object.entries(e ?? {}).filter(([e, t]) => typeof t == "string" && t.trim() && t !== n[e]));
}
function VE(e, t) {
	let n = e.tokens.primitives.typography ?? {}, r = JC.typography, i = e.fonts && !Array.isArray(e.fonts) ? e.fonts : {};
	return eD(Object.fromEntries(Object.entries(BT).flatMap(([e, a]) => {
		let o = t.tokens.primitives.typography[a];
		if (typeof o != "string" || !o.trim()) return [];
		let s = n[a];
		return i[e] || typeof s == "string" && s.trim() && o !== r[a] ? [[a, o]] : [];
	})));
}
var HE = /* @__PURE__ */ new Set(["chart", "sidebar"]), UE = [.09, -.09].map((e) => Object.fromEntries(Object.entries(YC.semantic).map(([t, n]) => {
	let r = dC(n);
	return r ? [t, pC({
		...r,
		l: Math.min(.97, Math.max(.03, r.l + e)),
		c: Math.max(r.c, .04) + .03,
		h: r.h + 97
	})] : [t, n];
})));
function WE(e) {
	let t = bE(e, "light"), n = Object.fromEntries(t.map((t) => [t, e.tokens.light.semantic[t]])), r = yT(n, YC.semantic), i = UE.map((e) => yT(n, e)), a = new Set(DC.filter((e) => t.includes(e.key)).map((e) => e.group));
	return GE(new Set(DC.flatMap((e) => {
		if (HE.has(e.group) && !a.has(e.group)) return [];
		if (t.includes(e.key)) return [e.key];
		let n = r[e.key];
		return n && i.every((t) => t[e.key] === n) ? [e.key] : [];
	})), t);
}
function GE(e, t) {
	for (let n of [...e]) {
		let r = gT(n);
		r && !e.has(r) && !t.includes(n) && e.delete(n);
	}
	return e;
}
function KE(e, t, n) {
	let r = Object.fromEntries(DC.flatMap((t) => {
		let r = e[t.key];
		return n.has(t.key) && typeof r == "string" && r ? [[t.key, r]] : [];
	}));
	return eD({
		semantic: r,
		authored: t.filter((e) => e in r)
	});
}
function qE(e) {
	let t = ["font.", "media."];
	return Object.fromEntries(Object.entries(e ?? {}).filter(([e, n]) => typeof n == "string" && !!n && t.some((t) => e.startsWith(t))));
}
function JE(e, t) {
	if (typeof e == "string") return !t || !XE(e) || !e.startsWith(`${t}/`) ? e : e.slice(t.length + 1);
}
function YE(e) {
	return Lv(e)?.replace(/\/$/, "") || void 0;
}
function XE(e) {
	return /^https?:\/\//i.test(e);
}
function ZE(e) {
	if (typeof e == "string") return xw(e) || void 0;
}
function QE(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function $E(e) {
	return Object.keys(e).length > 0 ? e : void 0;
}
function eD(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/token-vocabulary.js
var tD = {
	google: !0,
	custom: !0,
	css: !0
};
function nD(e) {
	return typeof e == "string" && Object.hasOwn(tD, e);
}
var rD = /[;{}<>\\\n\r]/;
function iD(e) {
	return typeof e == "string" && !rD.test(e);
}
//#endregion
//#region node_modules/.pnpm/@uhuu+brandkit@file+vendor+brandkit_lucide-react@0.555.0_react@19.3.0__radix-ui@1.8.1_@_c6df9065a592f88a42662264ecdcc3f7/node_modules/@uhuu/brandkit/dist/core/token-patch.js
var aD = ["typography", "radius"], oD = [
	[
		"fontSans",
		"font.sans",
		"font_sans"
	],
	[
		"fontSerif",
		"font.serif",
		"font_serif"
	],
	[
		"fontDisplay",
		"font.display",
		"font_display"
	],
	[
		"fontMono",
		"font.mono",
		"font_mono"
	]
];
function sD(e, t) {
	if (ED(e)) return [{
		code: "invalid_patch",
		path: "version",
		message: "Unsupported BrandKit document. A current public contract is required."
	}];
	let n = dD(t);
	if (n.length) return n;
	let r = { ...e.extensions };
	for (let [e, n] of Object.entries(t.extensions ?? {})) n === null ? delete r[e] : r[e] = n;
	let i = BC(r).diagnostics.map((e) => ({
		code: "invalid_patch",
		...e
	}));
	return [
		...cD(e, t),
		...vD(e, t),
		...i
	];
}
function cD(e, t) {
	let n = t.primitives?.typography;
	if (!e.controls?.brandFontsOnly) return [];
	let r = e.tokens?.primitives?.typography, i = [...wD(e.fonts).map((e) => e.font.family), ...oD.map(([e]) => ZE(r?.[e]))];
	return [...Object.entries(t.fonts ?? {}).flatMap(([e, t]) => t && !i.some((e) => ww(e, t.family)) ? [{
		code: "off_brand_font",
		path: `fonts.${e}`,
		family: t.family
	}] : []), ...oD.flatMap(([e]) => {
		let t = ZE(n?.[e]);
		return !t || ww(t, ZE(r?.[e])) || i.some((e) => ww(e, t)) ? [] : [{
			code: "off_brand_font",
			path: `primitives.typography.${e}`,
			family: t
		}];
	})];
}
var lD = [
	"semantic",
	"primitives",
	"fonts",
	"extensions"
], uD = [
	"fontSans",
	"fontDisplay",
	"fontMono",
	"fontSerif"
];
function dD(e) {
	if (!X(e)) return [{
		code: "invalid_patch",
		path: "/",
		message: "Expected a patch object."
	}];
	let t = [], n = (e, n) => t.push({
		code: "invalid_patch",
		path: e,
		message: n
	});
	return fD(e, n), t.length || (pD(e.extensions, n), mD(e.semantic, n), hD(e.primitives, n), _D(e, n)), t;
}
function fD(e, t) {
	for (let n of Object.keys(e)) lD.includes(n) || t(n, "Unsupported patch field.");
	for (let n of lD) e[n] !== void 0 && !X(e[n]) && t(n, "Expected an object.");
}
function pD(e, t) {
	for (let [n, r] of Object.entries(e ?? {})) if (jC(n) || t(`extensions.${n}`, "Expected a namespace identifier."), r !== null) for (let e of BC({ [n]: r }).diagnostics) t(e.path, e.message);
}
function mD(e, t) {
	let n = new Set(DC.map((e) => e.key));
	for (let [r, i] of Object.entries(e ?? {})) if (!["light", "dark"].includes(r) || !X(i)) t(`semantic.${r}`, "Expected a light/dark role object.");
	else for (let [e, a] of Object.entries(i)) (!n.has(e) || a !== null && !mC(a)) && t(`semantic.${r}.${e}`, "Expected a known semantic role and a color or null.");
}
function hD(e, t) {
	for (let [n, r] of Object.entries(e ?? {})) if ((!aD.includes(n) || r !== void 0 && !X(r)) && t(`primitives.${n}`, "Expected a supported primitive group."), X(r)) {
		if (n === "typography") gD(r, t);
		else for (let [e, i] of Object.entries(r)) i !== void 0 && !iD(i) && t(`primitives.${n}.${e}`, "Expected a safe CSS value.");
	}
}
function gD(e, t) {
	for (let [n, r] of Object.entries(e)) uD.includes(n) ? r !== void 0 && !iD(r) && t(`primitives.typography.${n}`, "Expected a safe font stack.") : t(`primitives.typography.${n}`, "Unknown typography token.");
}
function _D(e, t) {
	for (let [n, r] of Object.entries(e.fonts ?? {})) {
		let i = X(r) && typeof r.family == "string" && r.family.trim() && typeof r.fallback == "string" && (r.source === void 0 || nD(r.source));
		(!RT.includes(n) || r !== null && !i) && t(`fonts.${n}`, "Expected a font role descriptor or null."), r && [r.family, r.fallback].some((e) => typeof e == "string" && !iD(e)) && t(`fonts.${n}`, "Expected a safe font family/fallback."), r && e.primitives?.typography?.[BT[n]] !== void 0 && t(`fonts.${n}`, "Patch a role descriptor or its legacy typography token, not both.");
	}
}
function vD(e, t) {
	if (!e.controls?.brandColorsOnly) return [];
	let n = e.tokens ? xE(e) : void 0, r = [
		...Object.values(n?.tokens.light.semantic ?? {}),
		...Object.values(n?.tokens.dark?.semantic ?? {}),
		...Object.values(e.extensions ?? {}).flatMap((e) => Object.values(e.colors ?? {}).filter((e) => !e.startsWith("$")))
	].filter((e) => typeof e == "string"), i = [];
	for (let e of ["light", "dark"]) for (let [n, r] of Object.entries(t.semantic?.[e] ?? {})) i.push([`semantic.${e}.${n}`, r]);
	for (let [e, n] of Object.entries(t.extensions ?? {})) for (let [t, r] of Object.entries(n?.colors ?? {})) r.startsWith("$") || i.push([`extensions.${e}.colors.${t}`, r]);
	return i.flatMap(([e, t]) => t !== null && !r.some((e) => SC(e, t)) ? [{
		code: "off_brand_color",
		path: e,
		color: t
	}] : []);
}
function yD(e, t) {
	let n = sD(e, t);
	if (n.length) return n;
	let r = e.version, i = t.primitives && "typography" in t.primitives ? e.tokens.primitives?.typography : void 0;
	if (t.semantic?.light && DD(e.tokens.light, t.semantic.light), t.semantic?.dark) {
		let n = e.tokens.dark ??= {};
		n.semantic ??= {}, LT(r) && (n.authored ??= []), DD(n, t.semantic.dark);
	}
	if (t.primitives) {
		for (let n of aD) {
			if (!(n in t.primitives)) continue;
			let r = t.primitives[n];
			r === void 0 ? delete e.tokens.primitives[n] : e.tokens.primitives[n] = structuredClone(r);
		}
		"typography" in t.primitives && CD(e, i);
	}
	if (t.fonts && (LT(r) ? bD(e, t.fonts) : xD(e, t.fonts)), t.extensions) {
		e.extensions = { ...e.extensions };
		for (let [n, r] of Object.entries(t.extensions)) r === null ? delete e.extensions[n] : e.extensions[n] = structuredClone(r);
	}
	return LT(r) && TE(e), [];
}
function bD(e, t) {
	for (let n of RT) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = BT[n];
		if (!r) {
			delete e.assignments[`font.${n}`], delete e.tokens.primitives.typography[i];
			continue;
		}
		let a = wE({
			id: e.id,
			name: e.name,
			description: "",
			tokens: {
				primitives: {
					typography: {},
					radius: {}
				},
				light: { semantic: {} }
			},
			fonts: { [n]: r }
		});
		e.fonts = {
			...e.fonts,
			...a.fonts
		}, e.assignments[`font.${n}`] = a.assignments[`font.${n}`], e.tokens.primitives.typography[i] = HT(r);
	}
}
function xD(e, t) {
	e.fonts ??= {};
	for (let n of RT) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = BT[n];
		r ? (e.fonts[n] = structuredClone(r), e.tokens.primitives.typography[i] = HT(r)) : (delete e.fonts[n], delete e.tokens.primitives.typography[i]);
	}
}
function SD(e, t) {
	if (!e || e.source !== "google") return;
	let n = e.cssUrl ? pw(e.cssUrl).find((t) => ww(t.family, e.family)) : void 0;
	return fw([{
		family: t,
		weights: n?.weights.length ? n.weights : [],
		styles: n?.weights.length ? n.styles : ["normal"]
	}]);
}
function CD(e, t) {
	let n = e.tokens.primitives?.typography;
	if (!n) return;
	if (GT(e.fonts)) {
		e.fonts ??= {};
		for (let r of RT) {
			let i = BT[r], a = ZE(n[i]);
			if (!a || ww(a, ZE(t?.[i]))) continue;
			let o = e.fonts[r], s = !o || !ww(o.family, a);
			e.fonts[r] = {
				...o ?? {},
				family: a,
				fallback: n[i]?.split(",").slice(1).join(",").trim() || o?.fallback || VT(r)
			}, s && delete e.fonts[r].cssUrl;
		}
		return;
	}
	let r = e.fonts;
	if (r && !Array.isArray(r)) for (let [i, a, o] of oD) {
		let s = ZE(n[i]);
		if (!s || ww(s, ZE(t?.[i]))) continue;
		let c = r[o] ? o : e.assignments?.[a];
		if (!c || !r[c]) continue;
		let l = r[c], u = {
			...l,
			family: s
		};
		if (!ww(l.family, s)) {
			let e = SD(l, s);
			e ? u.cssUrl = e : delete u.cssUrl;
		}
		r[c] = u;
	}
}
function wD(e) {
	return GT(e) ? RT.flatMap((t) => {
		let n = e[t];
		if (!n?.family?.trim()) return [];
		let r = n.id ?? zT[t];
		return [{
			id: r,
			font: {
				...n,
				id: r
			}
		}];
	}) : (Array.isArray(e) ? e.map((e) => [X(e) ? e.id : void 0, e]) : X(e) ? Object.entries(e) : []).flatMap(([e, t]) => typeof e == "string" && e && X(t) && typeof t.family == "string" && t.family.trim() ? [{
		id: e,
		font: t
	}] : []);
}
function TD(e, t) {
	if (ED(e)) throw Error("Unsupported BrandKit document. A current public contract is required.");
	let n = structuredClone(e), r = sD(n, t.patch);
	r.length || yD(n, t.patch);
	let i = e.version;
	return {
		doc: LT(i) ? n : wE(n),
		diagnostics: r
	};
}
function ED(e) {
	return e.version !== void 0 && !CE(e);
}
function DD(e, t) {
	let n = e.semantic ??= {}, r = Array.isArray(e.authored) ? new Set(e.authored) : void 0;
	for (let [e, i] of Object.entries(t)) i === null ? (delete n[e], r?.delete(e)) : (n[e] = i, r?.add(e));
	r && (e.authored = [...r]);
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var OD = /* @__PURE__ */ "background.foreground.card.card-foreground.popover.popover-foreground.primary.primary-foreground.secondary.secondary-foreground.muted.muted-foreground.accent.accent-foreground.destructive.destructive-foreground.border.input.ring.chart-1.chart-2.chart-3.chart-4.chart-5.sidebar.sidebar-foreground.sidebar-primary.sidebar-primary-foreground.sidebar-accent.sidebar-accent-foreground.sidebar-border.sidebar-ring".split("."), kD = RegExp(`^--(?:color-)?(?:${OD.join("|")})$`), AD = /^--brand-ext-[A-Za-z0-9_-]+$/, jD = /^--font-(?:sans|serif|display|mono)$/;
function MD(e) {
	let t = q(e) ? e.runtime : void 0;
	return q(t) && t.version === 1 && q(t.light) ? t : void 0;
}
var ND = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, PD = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, FD = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", ID = RegExp(`^ok(?:lch|lab)\\(\\s*${FD}\\s+${FD}\\s+${FD}(?:\\s*\\/\\s*${FD})?\\s*\\)$`, "i"), LD = /^[a-z]+$/i, RD = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), zD = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", BD = RegExp(`^(${zD})(deg|turn|rad|grad)?\\s+(${zD})%\\s+(${zD})%(?:\\s*\\/\\s*(${zD})(%)?)?$`, "i"), VD = RegExp(`^hsla?\\(\\s*(${zD})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${zD})%\\s*(?:,\\s*|\\s+)(${zD})%\\s*(?:(?:,|\\/)\\s*(${zD})(%)?\\s*)?\\)$`, "i"), HD = /[;{}<>\\\n\r]/, UD = (e, t, n) => Math.min(n, Math.max(t, e)), WD = (e) => e.toString(16).padStart(2, "0"), GD = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function KD(e, t, n, r, i, a) {
	let o = (Number(e) * GD[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = UD(Number(n) / 100, 0, 1), c = UD(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : UD(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${WD(d)}${WD(f)}${WD(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function qD(e) {
	let t = J(e);
	if (!t) return;
	if (ND.test(t) || PD.test(t) || ID.test(t)) return t;
	if (LD.test(t)) return RD.has(t.toLowerCase()) ? void 0 : t;
	let n = BD.exec(t) ?? VD.exec(t);
	if (n) return KD(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function JD(e, t = {}) {
	let n = ZD(e, t);
	return t?.adopt?.radius && Object.assign(n, XD(e)), n;
}
var YD = /^(?:0|(?:\d+\.?\d*|\.\d+)(?:px|rem|em|%))$/;
function XD(e) {
	let t = q(e?.tokens?.primitives?.radius) ? e.tokens.primitives.radius : {}, n = (e) => {
		let t = J(e);
		return t && YD.test(t) ? t : void 0;
	}, r = {}, i = n(t.base);
	return i && (r["--radius"] = i), r;
}
function ZD(e, t = {}) {
	let n = {};
	if (q(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? qD(r) : J(r);
		t !== void 0 && !HD.test(t) && (n[e] = t);
	}
	if (!q(e)) return n;
	let r = MD(e);
	if (!r) return n;
	for (let [e, t] of Object.entries(r.light)) {
		let r = kD.test(e) || AD.test(e) ? qD(t) : jD.test(e) ? J(t) : void 0;
		r !== void 0 && !HD.test(r) && (n[e] = r);
	}
	for (let e of OD) {
		let t = n[`--${e}`];
		t !== void 0 && !Object.prototype.hasOwnProperty.call(r.light, `--color-${e}`) && (n[`--color-${e}`] = t);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-chart.js
function QD(e) {
	let t = qD(e);
	if (!t || /^[a-z]+$/i.test(t)) return;
	let n = mC(t);
	return n ? gC(n) : void 0;
}
function $D(e) {
	if (!q(e)) return [];
	let t = MD(e);
	if (t) return [
		1,
		2,
		3,
		4,
		5
	].map((e) => J(t.light[`--chart-${e}`])).filter(Boolean);
	let n = q(e.tokens?.light?.semantic) ? e.tokens.light.semantic : {};
	return [
		1,
		2,
		3,
		4,
		5
	].map((e) => J(n[`chart${e}`])).filter(Boolean);
}
function eO(e, t = {}) {
	let n = $D(e).map(mC).filter(Boolean), r = (Array.isArray(t.fallback) ? t.fallback : []).map(QD).filter(Boolean), i = Number.isInteger(t.count) && t.count > 0 ? t.count : void 0;
	if (n.length) return {
		colors: ow(n, i ?? n.length).map((e) => gC(e)).filter(Boolean),
		source: "brand"
	};
	let a = i ?? r.length;
	return {
		colors: r.length ? Array.from({ length: a }, (e, t) => r[t % r.length]) : [],
		source: "template"
	};
}
function tO(e, t, n) {
	let r = MD(e), i = r ? J(r.light[`--${t}`]) : void 0, a = q(e?.tokens?.light?.semantic) ? e.tokens.light.semantic[n] : void 0;
	return QD(i ?? a);
}
var nO = {
	ink: ["foreground", "foreground"],
	line: ["border", "border"],
	muted: ["muted-foreground", "mutedForeground"],
	surface: ["background", "background"]
};
function rO(e, t = {}) {
	let n = Array.isArray(t?.palette) ? t.palette : [], { colors: r } = eO(e, {
		fallback: n,
		count: n.length || void 0
	}), i = r.length ? { palette: r } : {};
	for (let [n, [r, a]] of Object.entries(nO)) {
		let o = QD(t?.[n]) ?? tO(e, r, a);
		o && (i[n] = o);
	}
	return i;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-format.js
function iO(e) {
	let t = q(e) && q(e.extensions?.locale?.strings) ? e.extensions.locale.strings : {}, n = J(t.default), r = J(t.currency);
	return {
		...n ? { locale: n } : {},
		...r ? { currency: r } : {}
	};
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var aO = /^https?:\/\//i, oO = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function sO(e, t) {
	let n = q(e) ? J(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = J(t);
	if (r && aO.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function cO(e, t) {
	let n = J(e);
	if (n && !/\s/.test(n)) {
		if (aO.test(n) || /^data:/i.test(n)) return n;
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
var lO = /\/versions\/v\d+\//, uO = /^v[1-9]\d*$/, dO = /^([^?#]*\/kits\/[^/?#]+)\/brandkit\.json([?#].*)?$/i;
function fO(e) {
	return typeof e == "string" && lO.test(e.replace(/[?#].*$/, ""));
}
function pO(e, t) {
	let n = t && uO.test(t) ? dO.exec(e) : null;
	return n ? `${n[1]}/versions/${t}/brandkit.json${n[2] ?? ""}` : void 0;
}
function mO(e) {
	let t = q(e) && q(e.brand) ? e.brand : void 0;
	if (t?.kind === "kit") {
		let e = cO(t.url) ?? null, n = J(t.version), r = e && !fO(e) ? pO(e, n) ?? e : e, i = fO(r);
		if (r && !i) return xe(`brand-kit-unpinned:${r}`, `[uhuu-components] payload.brand ${r} is not an immutable versions/vN/brandkit.json URL` + (n ? ` (version ${JSON.stringify(n)} pins only when it is vN beside a …/kits/<kit>/brandkit.json URL)` : "") + ". The template keeps its local current brand until a pinned URL is supplied."), {
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
	return t?.kind === "preset" ? (xe(`brand-kit-preset:${t.presetId}`, `[uhuu-components] payload.brand names preset ${String(t.presetId)}, which the host resolves; the template renders its own brand.`), {
		source: "payload",
		src: null,
		pinned: !0,
		...J(t.presetId) ? { presetId: t.presetId } : {}
	}) : {
		source: "none",
		src: null,
		pinned: !1
	};
}
async function hO(e, t = {}) {
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
	if (!q(i)) throw Error(`[uhuu-components] Brand kit ${e} is not a JSON object`);
	return i;
}
var gO = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, _O = (e) => q(e) ? Dw({ files: {
	svg: J(e.svg),
	png: J(e.png),
	jpg: J(e.jpg)
} }) : void 0;
function vO(e, t = {}) {
	if (!q(e)) return null;
	let n = gO[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = bO(e, n, t.background === "dark" ? "dark" : "light", sO(e, t.sourceUrl), J(e.name), t);
	return r || n !== "wordmark" ? r : vO(e, {
		...t,
		kind: "primary"
	});
}
function yO(e) {
	return (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants : []).flatMap((e, t) => {
		if (!q(e) || !_O(e.files)) return [];
		let n = [
			"light",
			"dark",
			"any"
		].includes(e.background) ? e.background : "any";
		return [{
			...e,
			id: J(e.id) ?? `variant-${t + 1}`,
			background: n,
			...J(e.name) ? { name: J(e.name) } : { name: void 0 },
			...J(e.locale) ? { locale: J(e.locale) } : { locale: void 0 },
			files: Tw(_O(e.files).format, _O(e.files).src)
		}];
	});
}
function bO(e, t, n, r, i, a = {}) {
	let o = { variants: yO(e) }, s = {
		name: J(a.name),
		locale: J(a.locale)
	}, c = Ow(o, t, n, s) ?? Ow(o, t, n === "dark" ? "light" : "dark", s);
	if (!c) return null;
	let l = Dw(c), u = l ? cO(l.src, r) : void 0;
	return u ? {
		src: u,
		format: l.format,
		alt: c.name ?? i,
		kind: t,
		background: c.background,
		...c.locale ? { locale: c.locale } : {}
	} : null;
}
function xO(e, t, n = {}) {
	if (!q(e) || !q(e.collections) || !LT(e.version)) return null;
	let r = IT(e, t, n.versionId);
	if (!r) return null;
	let { collectionId: i, collection: a, versionId: o, version: s } = r, c = sO(e, n.sourceUrl), l = q(a.schema?.keys) ? a.schema.keys : {}, u = [];
	s && q(s.items) && (u = [...Object.keys(l).filter((e) => e in s.items), ...Object.keys(s.items).filter((e) => !(e in l))].map((e) => [e, s.items[e]]));
	let d = u.flatMap(([e, t]) => {
		if (!q(t)) return [];
		let n = cO(t.src ?? t.url, c);
		if (!n) return [];
		let r = J(t.label) ?? J(l[e]?.label) ?? J(t.name);
		return [{
			...t,
			key: e,
			src: n,
			...r ? { label: r } : {}
		}];
	});
	return {
		id: i,
		name: J(a.name),
		type: J(a.type),
		versionId: o ?? void 0,
		items: d
	};
}
function SO(e, t) {
	return WC(e, t === "macro" ? "macro" : "micro");
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-fonts.js
function CO(e, t = {}) {
	if (!q(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = MD(e);
	return n ? oT(n, { baseUrl: sO(e, t?.sourceUrl) }) : {
		fontFaceCss: "",
		stylesheetUrls: []
	};
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-preview.js
var wO = "brand", TO = /^v[1-9]\d*$/, EO = /\/versions\/(v[1-9]\d*)\//, DO = /\/versions\/v[1-9]\d*\/brandkit\.json$/, OO = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"[::1]"
]), kO = Object.freeze([
	"https://uhuu-brandkit.s3.eu-west-1.amazonaws.com",
	"https://brandkit.uhuu.io",
	"https://uhuu-layout-kit.s3.eu-west-1.amazonaws.com"
]);
function AO(e, t = []) {
	return OO.has(e.hostname) ? !0 : [...kO, ...t].some((t) => jO(t)?.origin === e.origin);
}
function jO(e, t) {
	try {
		return new URL(e, t);
	} catch {
		return null;
	}
}
function MO(e) {
	return !!e && !e.username && !e.password && (e.protocol === "https:" || e.protocol === "http:" && OO.has(e.hostname));
}
function NO(e) {
	let t = typeof e == "string" ? jO(e) : null;
	return MO(t) && DO.test(t.pathname);
}
function PO(e) {
	let t = q(e) && q(e.generator) ? e.generator.release : void 0;
	if (!q(t)) return;
	let n = J(t.version), r = J(t.url);
	if (!n || !TO.test(n) || !NO(r)) return;
	let i = typeof t.teamId == "number" ? String(t.teamId) : J(t.teamId), a = J(t.kitId), o = J(t.appUrl);
	return {
		version: n,
		url: r,
		...i ? { teamId: i } : {},
		...a ? { kitId: a } : {},
		...o ? { appUrl: o } : {}
	};
}
function FO(e, t) {
	let n = new URL(e.url);
	return n.pathname = n.pathname.replace(EO, `/versions/${t}/`), n.toString();
}
function IO(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return new URLSearchParams(e).get(wO);
	} catch {
		return null;
	}
}
function LO(e, t = {}) {
	let n = typeof e == "string" ? e.trim() : "", r = `a version (v9), a version link (…/versions/vN/brandkit.json)${t.origin ? " or a path on this page's origin (/candidate.json)" : ""}`;
	if (!n) return {
		input: n,
		error: `it is empty: pass ${r}`
	};
	if (TO.test(n)) {
		let e = PO(t.brandKit);
		return e ? {
			input: n,
			url: FO(e, n),
			version: n
		} : {
			input: n,
			error: `${n} needs the template's brandkit.json to name its published version (generator.release); pass the version link instead`
		};
	}
	if (t.origin && n.startsWith("/") && !n.startsWith("//")) {
		let e = jO(t.origin), r = e ? jO(n, e) : null;
		if (!r || r.origin !== e.origin) return {
			input: n,
			error: `${n} is not a path on this page's origin`
		};
		let i = EO.exec(r.pathname)?.[1];
		return {
			input: n,
			url: r.toString(),
			...i ? { version: i } : {}
		};
	}
	let i = /^https?:\/\//i.test(n) ? jO(n) : null;
	return i ? MO(i) ? AO(i, t.extraOrigins) ? DO.test(i.pathname) ? {
		input: n,
		url: i.toString(),
		version: EO.exec(i.pathname)[1]
	} : {
		input: n,
		error: `${n} is not a published version (…/versions/vN/brandkit.json): a kit's root brandkit.json and versions/latest change with every publish`
	} : {
		input: n,
		error: `${i.origin} is not a Brand Kit origin (${kO.join(", ")})`
	} : {
		input: n,
		error: `${n} is not an https link without credentials`
	} : {
		input: n,
		error: `${n} is not ${r}`
	};
}
function RO(e) {
	if (!q(e)) return "it is not a JSON object";
	if (!LT(e.version)) return `its version is ${JSON.stringify(e.version ?? null)}, not 1.x`;
	if (!q(e.runtime) || e.runtime.version !== 1) return "it has no runtime version 1";
}
function zO(e, t = PO(e)?.version) {
	return [q(e) ? J(e.name) : void 0, t].filter(Boolean).join(" ") || void 0;
}
function BO(e) {
	let t = MD(e)?.light ?? {};
	return Object.fromEntries(Object.entries(t).filter(([, e]) => typeof e == "string" || typeof e == "number").map(([e, t]) => [e, String(t)]));
}
function VO(e) {
	if (!q(e)) return {};
	let t = q(e.fonts) ? e.fonts : {}, n = q(e.assignments) ? e.assignments : {}, r = {}, i = /* @__PURE__ */ new Set();
	for (let [e, a] of Object.entries(n)) {
		if (!e.startsWith("font.") || typeof a != "string") continue;
		i.add(a);
		let n = q(t[a]) ? J(t[a].family) : void 0;
		n && (r[e.slice(5)] = n);
	}
	for (let [e, n] of Object.entries(t)) {
		let t = q(n) ? J(n.family) : void 0;
		t && !i.has(e) && !(e in r) && (r[e] = t);
	}
	return r;
}
function HO(e) {
	let t = {};
	for (let n of ["primary", "mark"]) {
		let r = vO(e, {
			kind: n,
			background: "light"
		})?.src, i = vO(e, {
			kind: n,
			background: "dark"
		})?.src;
		r && (t[n] = r), i && i !== r && (t[`${n} on dark`] = i);
	}
	return t;
}
function UO(e, t, n, r) {
	for (let i of /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(n)])) t[i] !== n[i] && r.push({
		kind: e,
		name: i,
		...i in t ? { before: t[i] } : {},
		...i in n ? { after: n[i] } : {}
	});
}
function WO(e, t) {
	let n = [];
	return UO("variable", BO(e), BO(t), n), UO("font", VO(e), VO(t), n), UO("logo", HO(e), HO(t), n), n;
}
function GO(e) {
	let t = e.kind === "font" ? `Font ${e.name}` : e.kind === "logo" ? `Logo ${e.name}` : e.name;
	return e.before === void 0 ? `${t}: added, ${e.after}` : e.after === void 0 ? `${t}: removed (was ${e.before})` : `${t}: ${e.before} → ${e.after}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-dev-colors.js
var KO = [
	"primary",
	"secondary",
	"accent",
	"background",
	"foreground"
], qO = null, JO = /* @__PURE__ */ new Set(), YO = () => qO;
function XO(e) {
	return JO.add(e), () => {
		JO.delete(e);
	};
}
function ZO(e) {
	qO = e, JO.forEach((e) => e());
}
var QO = (e) => q(e) && typeof e.id == "string" ? e.id : void 0;
function $O(e) {
	let t = q(e) && q(e.tokens) && q(e.tokens.light) ? e.tokens.light.semantic : void 0;
	return !QO(e) || !q(t) ? [] : KO.flatMap((e) => {
		let n;
		try {
			n = typeof t[e] == "string" ? gC(t[e]) : void 0;
		} catch {
			n = void 0;
		}
		return typeof n == "string" && /^#[0-9a-f]{6}$/i.test(n) ? [{
			role: e,
			value: n
		}] : [];
	});
}
function ek(e, t, n) {
	let r = QO(e);
	r && KO.includes(t) && ZO({
		id: r,
		colors: {
			...qO?.id === r ? qO.colors : {},
			[t]: n
		}
	});
}
function tk() {
	qO && ZO(null);
}
function nk(e, t) {
	if (!t || QO(e) !== t.id) return e;
	try {
		let { doc: n, diagnostics: r } = TD(e, { patch: { semantic: { light: t.colors } } });
		return r.length ? e : n;
	} catch {
		return e;
	}
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-preview-runtime.tsx
var rk = /* @__PURE__ */ new Set(), ik = !1, ak = [];
function ok() {
	rk.forEach((e) => e());
}
function sk(e) {
	return !ik && typeof window < "u" && (ik = !0, window.addEventListener("popstate", ok)), rk.add(e), () => {
		rk.delete(e);
	};
}
var ck = () => null;
function lk() {
	let e = window.location.hostname;
	return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1" || e.endsWith(".localhost") || e.endsWith(".local");
}
function uk() {
	return typeof window < "u" && ye() && lk() && !le();
}
function dk() {
	return uk() ? IO(window.location.search) : null;
}
function fk() {
	return g(sk, dk, ck);
}
function pk(e) {
	if (typeof window > "u") return;
	let t = new URL(window.location.href);
	e ? t.searchParams.set(wO, e) : t.searchParams.delete(wO), window.history.replaceState(window.history.state, "", t.toString()), ok();
}
function mk(e) {
	let t = fk();
	return f(() => t === null ? null : LO(t, {
		brandKit: e,
		origin: window.location.href
	}), [t, e]);
}
function hk() {
	return (ak.find((e) => e.renders) ?? ak[0])?.token ?? null;
}
function gk(e) {
	let [t] = h(() => ({})), n = g(sk, hk, ck), r = e !== null, i = e !== null && "url" in e;
	return ce(() => {
		if (!r) return;
		let e = {
			token: t,
			renders: i
		};
		return ak.push(e), ok(), () => {
			ak.splice(ak.indexOf(e), 1), ok();
		};
	}, [
		r,
		i,
		t
	]), r && n === t;
}
function _k() {
	let [e, t] = h(null);
	return l(() => {
		let e = os();
		return e.style.zIndex = "9998", document.body.appendChild(e), t(e), () => {
			e.remove(), t(null);
		};
	}, []), e;
}
var vk = "uhuu:shrink-0 uhuu:rounded uhuu:px-1.5 uhuu:py-0.5 uhuu:font-medium uhuu:underline-offset-2 uhuu:hover:underline";
function yk({ preview: e, templateKit: t, candidate: n, status: r, error: i }) {
	let a = _k(), [o, s] = h(!1), c = f(() => n ? WO(t, n) : null, [t, n]);
	if (!a) return null;
	let l = J(t?.name), u = PO(t)?.version, d;
	if ("error" in e) d = `Brand preview ignored: ${e.error}. The template's brand renders.`;
	else {
		let a = PO(n)?.version ?? e.version, o = J(n?.name) ?? (e.version && !n ? l : void 0), s = o && a ? `${o} ${a}` : o ? `${o} from ${e.input}` : a ?? e.input, c = u ? o && o !== l ? zO(t) : u : "its own brand (no version)";
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
						className: vk,
						onClick: () => s((e) => !e),
						children: [
							"What changed (",
							c.length,
							")"
						]
					}) : null,
					/* @__PURE__ */ v("button", {
						type: "button",
						className: vk,
						onClick: () => pk(null),
						children: "Stop"
					})
				]
			}), o && c ? /* @__PURE__ */ v("ul", {
				"data-uhuu-brand-preview-changes": "",
				className: "uhuu:mt-2 uhuu:max-h-[40vh] uhuu:overflow-auto uhuu:font-mono uhuu:text-[11px] uhuu:leading-snug",
				children: c.length ? c.map((e) => /* @__PURE__ */ v("li", { children: GO(e) }, `${e.kind}:${e.name}`)) : /* @__PURE__ */ v("li", { children: "No runtime variable, font or logo differs from the template's brand." })
			}) : null]
		})
	}), a);
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-provider.tsx
var bk = r(null);
function xk(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function Sk({ brandKit: e, src: t, adopt: n, defaults: r, sourceUrl: i, onLoad: a, onError: o, className: s, style: c, children: u }) {
	let d = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, p = mk(e), _ = p && "url" in p ? p.url : void 0, b = _ ?? d, x = _ !== void 0, [S, C] = h(null), w = m({
		onLoad: a,
		onError: o
	});
	ce(() => {
		w.current = {
			onLoad: a,
			onError: o
		};
	}, [a, o]), l(() => {
		if (!b) return;
		let e = new AbortController(), t = (e) => {
			C({
				src: b,
				brandKit: null,
				error: e instanceof Error ? e.message : String(e)
			}), x ? console.warn(`[uhuu-components] Brand preview ${b} did not load, so the template's brand renders.`, e) : w.current.onError ? w.current.onError(e) : console.error("[uhuu-components] BrandKitProvider: the kit did not load, so the fallback kit renders.", e);
		}, n = setTimeout(() => {
			e.abort();
			let n = /* @__PURE__ */ Error(`[uhuu-components] BrandKitProvider ${b} is still loading after ${Re / 1e3} s; using the fallback kit.`);
			t(n);
		}, Re);
		return hO(b, { signal: e.signal }).then((r) => {
			if (e.signal.aborted) return;
			clearTimeout(n);
			let i = x ? RO(r) : void 0;
			i ? t(/* @__PURE__ */ Error(`${b} is not a current Brand Kit document: ${i}`)) : (C({
				src: b,
				brandKit: r
			}), x || w.current.onLoad?.(r));
		}, (r) => {
			e.signal.aborted || (clearTimeout(n), t(r));
		}), () => {
			clearTimeout(n), e.abort();
		};
	}, [b, x]), l(() => {
		b && le() && !fO(b) && xe(`brand-kit-print-fetch:${b}`, `[uhuu-components] BrandKitProvider fetches ${b} while printing. Render the template's own brandkit.json, or pin the URL to versions/vN.`);
	}, [b]);
	let T = b && S?.src === b ? S : null, E = g(XO, YO, () => null), D = pe(), O = D?.brandKit ?? null, k = T?.brandKit ?? O ?? e ?? null, A = f(() => E && !le() ? nk(k, E) : k, [k, E]), j = T?.brandKit && b ? xk(b) : O ? D?.url ?? i : i, M = b ? T ? T.brandKit ? "ready" : "error" : "loading" : "idle", N = gk(p), P = f(() => {
		let e = sO(A, j);
		return {
			brandKit: A,
			cssVars: JD(A, {
				defaults: r,
				adopt: n
			}),
			sourceUrl: j,
			status: M,
			logo: (e = {}) => vO(A, {
				...e,
				sourceUrl: j
			}),
			chartPalette: (e = {}) => eO(A, e),
			chartBrand: (e = {}) => rO(A, e),
			locale: iO(A),
			collection: (e, t = {}) => xO(A, e, {
				...t,
				sourceUrl: j
			}),
			mapStyle: (e) => SO(A, e),
			resolveUrl: (t) => cO(t, e)
		};
	}, [
		A,
		j,
		r,
		n,
		M
	]), F = f(() => CO(A, { sourceUrl: j }), [A, j]), [I, L] = h(() => /* @__PURE__ */ new Set()), ee = (e) => L((t) => t.has(e) ? t : new Set(t).add(e)), R = F.stylesheetUrls.filter((e) => !I.has(e)).join("\n"), z = M === "loading";
	return ce(() => z ? se.hold({
		label: `BrandKitProvider ${b}`,
		waitMs: Re
	}) : void 0, [z, b]), ce(() => R ? se.hold({
		label: `BrandKitProvider font stylesheet ${R}`,
		waitMs: Re
	}) : void 0, [R]), l(() => {
		if (!R) return;
		let e = setTimeout(() => {
			for (let e of R.split("\n")) ee(e);
		}, Re);
		return () => clearTimeout(e);
	}, [R]), /* @__PURE__ */ y(bk.Provider, {
		value: P,
		children: [
			F.stylesheetUrls.map((e) => /* @__PURE__ */ v("link", {
				rel: "stylesheet",
				href: e,
				"data-uhuu-brand-kit-font": "",
				ref: (t) => {
					t?.sheet && ee(e);
				},
				onLoad: () => ee(e),
				onError: () => {
					xe(`brand-kit-font:${e}`, `[uhuu-components] BrandKitProvider font stylesheet ${e} failed to load, so text prints in fallback fonts. Check the kit's font URL.`), ee(e);
				}
			}, e)),
			F.fontFaceCss ? /* @__PURE__ */ v("style", {
				"data-uhuu-brand-kit-font": "",
				children: F.fontFaceCss
			}) : null,
			/* @__PURE__ */ v("div", {
				"data-uhuu-brand-kit": typeof A?.id == "string" ? A.id : "",
				"data-uhuu-brand-kit-status": M,
				className: s,
				style: {
					display: "contents",
					...P.cssVars,
					...c
				},
				children: u
			}),
			N && p ? /* @__PURE__ */ v(yk, {
				preview: p,
				templateKit: e ?? null,
				candidate: x ? T?.brandKit ?? null : null,
				status: M === "ready" ? "ready" : M === "error" ? "error" : "loading",
				error: T?.error
			}) : null
		]
	});
}
function Ck() {
	return c(bk);
}
//#endregion
//#region src/uhuu/editor-shell/document/template-payload-core.ts
var wk = (e) => q(e);
function Tk(e, t, n = /* @__PURE__ */ new WeakMap()) {
	if (Object.is(e, t)) return !0;
	if (!wk(e) && !Array.isArray(e) || !wk(t) && !Array.isArray(t) || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (n.get(e) === t) return !0;
	if (n.set(e, t), Array.isArray(e) && Array.isArray(t) && e.length !== t.length) return !1;
	let r = Ek(e), i = Ek(t);
	return r.length === i.length && r.every((r) => Object.prototype.hasOwnProperty.call(t, r) && Tk(e[r], t[r], n));
}
function Ek(e) {
	return Object.keys(e).filter((t) => e[t] !== void 0 && typeof e[t] != "function" && typeof e[t] != "symbol");
}
function Dk(e, t, n) {
	let r = Ek(e).filter((e) => e !== n), i = Ek(t).filter((e) => e !== n);
	return r.length === i.length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && Tk(e[n], t[n]));
}
function Ok(e) {
	return {
		payload: e ?? {},
		sequence: 0,
		outgoing: []
	};
}
function kk(e, t) {
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
function Ak(e, t, n = 1) {
	return e.outgoing.some((e) => e.sequence === t.sequence) ? e : {
		...e,
		outgoing: [...e.outgoing, {
			...t,
			remainingEchoes: n
		}].slice(-32)
	};
}
function jk(e, t, n) {
	if (!t) return e;
	let r = e.outgoing.findIndex((e) => Dk(e.payload, t, n));
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
	return Tk(i, e.payload) ? a === e.outgoing ? e : {
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
var Mk = "uhuu_page_editor";
function Nk(e) {
	return e.kind === "group";
}
function Pk(e) {
	let t = [], n = 1;
	for (let r of e) if (Nk(r)) for (let e of r.pages) t.push({
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
function Fk(e) {
	let t = [], n = 1;
	for (let r of e) if (Nk(r)) {
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
function Ik(e) {
	return Pk(e).length;
}
function Lk(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (Nk(e)) {
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
function Rk(e, t) {
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
function zk(e) {
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
function Bk(e, t = Mk) {
	let n = zk(e);
	return {
		key: t,
		items: n,
		totalPages: Ik(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Vk(e, t = Mk) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = zk(n.items);
	return {
		key: t,
		items: r,
		totalPages: Ik(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Hk(e, t, n = Mk) {
	let r = Bk(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function Uk() {
	return Math.random().toString(36).slice(2, 11);
}
function Wk(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? Uk() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function Gk(e, t, n) {
	let r = n?.repeatable ? Uk() : e;
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
function Kk(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function qk(e, t, n) {
	for (let r of t) {
		let t = Kk(r.start, n), i = Kk(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function Jk(e, t, n = 2) {
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
function Yk(e, t) {
	if (!t || t.mode === "all") return e;
	let n = Ik(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : Jk(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (Nk(t)) {
		let e = t.pages.filter((e) => e.pageNum && qk(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && qk(t.pageNum, a, n) && o.push(t);
	return o;
}
function Xk(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : Jk(r, t, i);
	return a.length !== 0 && qk(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function Zk(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function Qk(e, t) {
	return t && Nk(t) ? t.id : e?.id ?? null;
}
function $k(e, t, n) {
	let r = Qk(t, n);
	return r ? {
		instanceId: r,
		integration: Zk(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function eA(e, t, n) {
	return $k(e, t, n).integration;
}
function tA(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function nA(e) {
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
function rA(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function iA(e, t, n) {
	let r = nA(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = rA(Zk(e, i) || {}, a, n);
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
var aA = /* @__PURE__ */ new Set([
	"select",
	"toggle",
	"slider",
	"counter",
	"color-series"
]);
function oA(e) {
	return aA.has(e?.type) ? e.type : "select";
}
function sA(e) {
	return e?.field ?? e?.id ?? e?.key;
}
function cA(e) {
	let t = e?.valueType;
	if (t === "string" || t === "number" || t === "boolean") return t;
	let n = oA(e);
	return n === "toggle" ? "boolean" : n === "slider" || n === "counter" ? "number" : "string";
}
var lA = q;
function uA(e, t, { fallback: n = !1 } = {}) {
	let r = sA(t), i = (lA(e) && r ? e[r] : void 0) ?? t?.defaultValue;
	if (i !== void 0 || !n) return i;
	let a = oA(t);
	return a === "toggle" ? !1 : a === "slider" || a === "counter" ? typeof t?.min == "number" ? t.min : 0 : "";
}
function dA(e, t) {
	return e == null || t == null ? !1 : String(e) === String(t);
}
function fA(e, t) {
	return (Array.isArray(e?.options) ? e.options : []).find((e) => dA(e?.value, t));
}
function pA(e) {
	return e === !0 || e === "true";
}
function mA(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (typeof e != "string" || e.trim() === "") return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function hA(e, t) {
	if (t == null) return t;
	switch (cA(e)) {
		case "number": {
			let e = mA(t);
			return e === void 0 ? t : e;
		}
		case "boolean": return pA(t);
		default: return String(t);
	}
}
//#endregion
//#region src/uhuu/editor-shell/document/template-data-provider.tsx
function gA(e, t) {
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
var _A = e.createContext(null);
function vA({ payload: t, onPayloadChange: n, children: r, stateKey: i = Mk }) {
	let [a, o] = e.useReducer((e, t) => t.type === "local" ? kk(e, t.update) : t.type === "sent" ? Ak(e, t.write, t.publishers) : jk(e, t.payload, t.key), t, Ok), s = a.payload, c = e.useRef(0);
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
			...wk(e) ? e : {},
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
		l((n) => iA(n, e, t));
	}, [l]), h = e.useCallback((e, t) => {
		let n = t ?? i;
		l((t) => Hk(t, e, n));
	}, [l, i]), g = e.useCallback((e) => gA(s, e), [s]), _ = e.useMemo(() => ({
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
	return /* @__PURE__ */ v(_A.Provider, {
		value: _,
		children: r
	});
}
function yA(e, t, n) {
	let r = sA(e);
	return {
		...e,
		getValue: (n) => {
			let r = uA(t?.pages?.[n.id], e, { fallback: !0 });
			return oA(e) === "toggle" ? pA(r) : r;
		},
		onChange: (t, i) => {
			n(t, r, hA(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-management.js
var bA = [
	"add",
	"remove",
	"reorder",
	"duplicate",
	"rename"
];
function xA(e) {
	let t = e && typeof e == "object" ? e : {}, n = t.locked !== !0, r = Object.fromEntries(bA.map((e) => [e, typeof t[e] == "boolean" ? t[e] : n]));
	return {
		...r,
		templateOwnsPages: !r.add && !r.remove && !r.reorder && !r.duplicate
	};
}
var SA = /* @__PURE__ */ new Set([
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
function CA(e, t, { rename: n = !1 } = {}) {
	if (!t?.length) return e;
	let r = /* @__PURE__ */ new Map(), i = (e) => e.forEach((e) => {
		e?.id && r.set(e.id, e), Array.isArray(e?.pages) && i(e.pages);
	});
	i(t);
	let a = (e) => {
		let t = r.get(e.id), i = t ? Object.fromEntries(Object.entries(t).filter(([e]) => !SA.has(e))) : {};
		t && n && !Ps(t.label, e.label) && (i.label = t.label);
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
function wA(e, t) {
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
function TA(e, t, n) {
	let r = wA(e, t);
	return EA(r.issue, n), r.keys;
}
function EA(e, t) {
	if (!e) return;
	let n = t ? `page group "${t}"` : "a page group", r = `pageComponentKeys:${t ?? ""}:${e.reason}:${String(e.detail)}`;
	e.reason === "invalid-keys" ? xe(r, `[uhuu-components] pageComponentKeys of ${n} returned non-string values; they are left out.`, e.detail) : e.reason === "invalid-result" ? Ce(r, `[uhuu-components] pageComponentKeys of ${n} must return an array of page keys, got ${String(e.detail)}; the group renders no pages.`) : Ce(r, `[uhuu-components] pageComponentKeys of ${n} threw; the group renders no pages:`, e.detail);
}
function DA(e) {
	let t = [], n = [], r = [];
	for (let i of e) i.strictPosition === "start" ? t.push(i) : i.strictPosition === "end" ? r.push(i) : n.push(i);
	return {
		start: t,
		middle: n,
		end: r
	};
}
function OA(e) {
	let { start: t, middle: n, end: r } = DA(e);
	return [
		...t,
		...n,
		...r
	];
}
function kA(e, t, n) {
	if (t.strictPosition === "start") return [t, ...e];
	if (t.strictPosition === "end") return [...e, t];
	let { start: r, middle: i, end: a } = DA(e), o = i.length;
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
function AA({ initialItems: e, savedItems: t, config: n, payload: r, management: i }) {
	if (i.templateOwnsPages) return CA(e, t, { rename: i.rename });
	if (!t) return e;
	let a = n.groups ?? {}, o = Array.isArray(a) ? a : Object.entries(a).map(([e, t]) => ({
		...t,
		id: e
	})), s = new Map(o.map((e) => [e.id, e])), c = n.pages ?? {}, l = (e) => c[e.componentKey ?? e.templateId ?? e.id] ?? (e.templateId ? c[e.templateId] : void 0) ?? c[e.id], u = (e) => l(e)?.hasFlow && !e.hasFlow ? {
		...e,
		hasFlow: !0
	} : e, d = (e, t) => t !== void 0 && Ps(e.label, t) && e.label !== t ? {
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
		let a = wA(t.pageComponentKeys, {
			payload: r,
			item: void 0,
			parent: void 0
		});
		return EA(a.issue, e.templateId ?? e.id), a.issue && a.issue.reason !== "invalid-keys" ? i : {
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
	if (![...p].some((e) => !m.some((t) => t.id === e)) && Ik(m) !== Ik(e)) {
		let t = f.filter((e) => !p.has(e.id) && (e.kind !== "group" || e.id !== (e.templateId ?? e.id)));
		return t.length ? OA([...e, ...t]) : e;
	}
	return f;
}
//#endregion
//#region src/uhuu/editor-shell/document/data-binding.ts
function jA(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function MA(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function NA({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = $k(e, t, n), o = n && Nk(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => tA(a.instanceId, e)
		},
		paths: {
			integration: (e) => tA(a.instanceId, e),
			page: (e) => jA(s, e),
			group: (e) => jA(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: MA(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/document-typography.js
var PA = [
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
], FA = (e) => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
function IA(e = typeof document > "u" ? void 0 : document) {
	let t = e?.querySelector("[data-uhuu-interactive]") ?? e?.body, n = t ? e.defaultView?.getComputedStyle(t) : void 0;
	if (!n) return;
	let r = {};
	for (let e of PA) {
		let t = n.getPropertyValue(e);
		t && (r[FA(e)] = t);
	}
	return r;
}
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
var LA = (e) => {
	e?.setAttribute("inert", "");
}, RA = class extends e.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e) {
		xe(`thumbnail:${this.props.pageId ?? ""}:${String(e)}`, `[uhuu-components] Page "${this.props.pageId ?? ""}" failed to render as a reorder thumbnail; its card shows no preview.`, e);
	}
	render() {
		return this.state.failed ? this.props.fallback : this.props.children;
	}
};
function zA(e) {
	return e ? {
		...e,
		virtualPageIndex: 0,
		virtualPageCount: 1
	} : void 0;
}
function BA({ children: t, style: n, acquireTypography: r }) {
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
function VA(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = ee.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = ee.mmToPx(u), g = ee.mmToPx(d), _, b = 0, x = () => (_ ??= IA() ?? {}, b += 1, {
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
			let l = e.firstPageId, u = e.firstPageComponentKey ?? l, d = gA(n, {
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
						ref: LA,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ v(RA, {
								pageId: l,
								fallback: null,
								children: /* @__PURE__ */ v(BA, {
									style: S,
									acquireTypography: x,
									children: /* @__PURE__ */ v(f, {
										payload: n,
										pageId: l,
										templateId: u,
										pagePayload: d,
										componentKey: u,
										integration: _,
										page: zA(e.page),
										parentGroup: e.group ?? e,
										pageNum: r + 1,
										dataBinding: e.page ? NA({
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
						children: [/* @__PURE__ */ v(Uo, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
			let l = e.pageId, u = e.pageComponentKey ?? l, d = gA(n, {
				id: l,
				componentKey: u
			}), f = e.pageComponent || (u ? t[u] : null), _ = l ? eA(n, { id: l }) : void 0;
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
							children: /* @__PURE__ */ v(RA, {
								pageId: l,
								fallback: null,
								children: /* @__PURE__ */ v(BA, {
									style: S,
									acquireTypography: x,
									children: /* @__PURE__ */ v(f, {
										payload: n,
										pageId: l,
										templateId: u,
										pagePayload: d,
										componentKey: u,
										integration: _,
										page: zA(e.page),
										pageNum: r + 1,
										dataBinding: e.page ? NA({
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
						children: [/* @__PURE__ */ v(Uo, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
var HA = "bottom-right", UA = [
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
], WA = {
	"bottom-right": "uhuu:right-4 uhuu:bottom-4",
	"bottom-left": "uhuu:left-4 uhuu:bottom-4",
	"top-right": "uhuu:right-4 uhuu:top-4",
	"top-left": "uhuu:left-4 uhuu:top-4"
}, GA = "uhuu-editor-toolbar-position";
function KA(e) {
	return typeof e == "string" && UA.includes(e);
}
function qA() {
	try {
		let e = typeof window > "u" ? null : window.localStorage?.getItem(GA);
		return KA(e) ? e : null;
	} catch {
		return null;
	}
}
var JA = /* @__PURE__ */ new Set(), YA = (e) => (JA.add(e), () => {
	JA.delete(e);
}), XA = () => null;
function ZA(e) {
	try {
		window.localStorage?.setItem(GA, e);
	} catch {}
	JA.forEach((e) => e());
}
function QA(e) {
	let t = g(YA, qA, XA), [n, r] = h(null);
	return [n ?? t ?? (KA(e) ? e : "bottom-right"), s((e) => {
		KA(e) && (r(e), ZA(e));
	}, [])];
}
function $A(e) {
	return {
		side: e.startsWith("top") ? "bottom" : "top",
		align: e.endsWith("left") ? "start" : "end"
	};
}
var ej = r($A(HA)), tj = ej.Provider;
function nj() {
	return c(ej);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function rj(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function ij(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function aj(e, t) {
	if (e === "two_pages") return ij(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function oj({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function sj({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function cj({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function lj(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function uj(e, t, n, r) {
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
function dj(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function fj(e, t, n) {
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
function pj(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var mj = 24, hj = 64, gj = 1e3, _j = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${mj}px ${hj}px`,
	overflowAnchor: "none"
}, vj = {
	..._j,
	padding: `${hj}px ${mj}px 0`
}, yj = {
	"bottom-right": "uhuu:right-0.5 uhuu:bottom-0.5",
	"bottom-left": "uhuu:left-0.5 uhuu:bottom-0.5",
	"top-right": "uhuu:right-0.5 uhuu:top-0.5",
	"top-left": "uhuu:left-0.5 uhuu:top-0.5"
}, bj = {
	"bottom-right": "toolbar.bottomRight",
	"bottom-left": "toolbar.bottomLeft",
	"top-right": "toolbar.topRight",
	"top-left": "toolbar.topLeft"
};
function xj(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && pj(e.overflowX) && (n = t), !r && pj(e.overflowY) && (r = t), n && r) return {
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
function Sj(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function Cj(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var wj = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function Tj({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(wj), i = m(null);
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
function Ej(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function Dj(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? aj(t, r.map(Ej).filter((e) => e !== null)) : null;
}
function Oj({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(wj), s = m(null), [u, d] = h(0), [f, p] = h(0);
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
function kj({ children: t, className: n = "", defaultZoom: r = 100, minZoom: i = 25, maxZoom: a = 200, onAddPage: o, menuItems: c, hideUI: u, preview: d = "single_page", defaultZoomMode: f = "manual", scrollMode: p = "pane", toolbarPosition: g }) {
	let _ = Hc(), b = u ?? _, { t: x } = ic(), C = hs(), [w, T] = QA(g), E = $A(w), D = e.useId(), [O, k] = h(r), [A, j] = h(() => rj(f)), [M, N] = h(() => rj(f) !== "none"), [P, F] = h(0), I = m(null), L = m(null), ee = m(null), R = m(null), z = m(O);
	l(() => {
		z.current = O;
	}, [O]);
	let te = s(() => p === "pane" && L.current ? {
		x: L.current,
		y: L.current
	} : xj(I.current), [p]), B = s((e, t, n) => {
		let r = Math.min(Math.max(e, i), a), o = R.current;
		if (!o) {
			k(r), j("none");
			return;
		}
		let s = te(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = fj(c.map((e) => dj(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = dj(u.getBoundingClientRect()), f = lj(d, t, n);
		S(() => {
			k(r), j("none");
		});
		let p = () => {
			let e = dj(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = uj(d, e, f.clientX, f.clientY);
			t !== 0 && s.x && (s.x.scrollLeft += t), n !== 0 && s.y && (s.y.scrollTop += n);
		};
		p(), window.requestAnimationFrame(p);
	}, [
		a,
		i,
		te
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
		let e = R.current;
		if (A === "none" || !e) return;
		let t = Dj(e, d);
		if (!t) return;
		let n = p === "pane" ? L.current : I.current;
		if (!n) return;
		let r = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || r.width, l = p === "pane" ? oj({
			paneClientHeight: n.clientHeight || r.height,
			paneTop: r.top,
			viewportHeight: s
		}) : s - Math.max(r.top, 0), u = ee.current ? window.getComputedStyle(ee.current) : null, { availableWidth: f, availableHeight: m } = sj({
			paneWidth: c,
			paneHeight: l,
			paddingX: u ? Number.parseFloat(u.paddingLeft) + Number.parseFloat(u.paddingRight) : 0,
			paddingY: u ? Number.parseFloat(u.paddingTop) + Number.parseFloat(u.paddingBottom) : 0,
			chromeHeight: Cj(e)
		}), h = cj({
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
		let e = window.setTimeout(() => N(!1), gj);
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
		if (A === "none" || !I.current || !R.current) return;
		let e = 0, t = () => {
			window.cancelAnimationFrame(e), e = window.requestAnimationFrame(re);
		}, n = new ResizeObserver(t);
		n.observe(I.current), L.current && n.observe(L.current), n.observe(R.current);
		let r = () => {
			R.current?.querySelectorAll("[data-section-content]").forEach((e) => {
				n.observe(e);
			});
		};
		r();
		let i = new MutationObserver(() => {
			r(), t();
		});
		return i.observe(R.current, {
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
			let t = Sj(e);
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
			let o = t.deltaMode === 1 ? t.deltaY * 16 : t.deltaMode === 2 ? t.deltaY * 16 * 32 : t.deltaY, s = n ?? z.current, l = Math.min(Math.max(s * 1.003 ** -o, i), a);
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
	return b ? /* @__PURE__ */ v(wj.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ v("div", {
			className: n,
			children: t
		})
	}) : /* @__PURE__ */ v(wj.Provider, {
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
				className: `uhuu:fixed ${WA[w]} uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:px-2.5 uhuu:py-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm`,
				children: /* @__PURE__ */ y(tj, {
					value: E,
					children: [
						c,
						/* @__PURE__ */ v("div", {
							ref: C,
							className: "uhuu:contents"
						}),
						/* @__PURE__ */ v("div", { className: "uhuu:h-4 uhuu:w-px uhuu:bg-gray-200 uhuu:mx-0.5" }),
						/* @__PURE__ */ y(S_, {
							modal: !1,
							children: [/* @__PURE__ */ v(C_, {
								asChild: !0,
								children: /* @__PURE__ */ y(bs, {
									variant: "ghost",
									size: "sm",
									title: x("zoom.menu"),
									className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
									children: [
										Math.round(O),
										"%",
										/* @__PURE__ */ v(Fo, { className: "uhuu:w-3 uhuu:h-3 uhuu:ml-1 uhuu:opacity-60" })
									]
								})
							}), /* @__PURE__ */ y(D_, {
								className: "uhuu:w-52 uhuu:p-1.5",
								side: E.side,
								align: E.align,
								children: [
									/* @__PURE__ */ y(O_, {
										onClick: () => V("width"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "width" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v($o, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitWidth") })]
									}),
									/* @__PURE__ */ y(O_, {
										onClick: () => V("height"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "height" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v(es, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitHeight") })]
									}),
									/* @__PURE__ */ y(O_, {
										onClick: () => V("both"),
										className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${A === "both" ? "uhuu:bg-gray-100" : ""}`,
										children: [/* @__PURE__ */ v(Wo, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: x("zoom.fitPage") })]
									}),
									/* @__PURE__ */ v(M_, { className: "uhuu:my-1.5" }),
									/* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:px-3 uhuu:py-2.5",
										onClick: (e) => e.stopPropagation(),
										children: [
											/* @__PURE__ */ v(bs, {
												variant: "ghost",
												size: "sm",
												onClick: (e) => {
													e.stopPropagation(), ae();
												},
												disabled: O <= i,
												className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
												title: x("zoom.zoomOut"),
												children: /* @__PURE__ */ v(rs, { className: "uhuu:w-4 uhuu:h-4" })
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
											/* @__PURE__ */ v(bs, {
												variant: "ghost",
												size: "sm",
												onClick: (e) => {
													e.stopPropagation(), ie();
												},
												disabled: O >= a,
												className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
												title: x("zoom.zoomIn"),
												children: /* @__PURE__ */ v(ns, { className: "uhuu:w-4 uhuu:h-4" })
											})
										]
									}),
									/* @__PURE__ */ v(M_, { className: "uhuu:my-1.5" }),
									/* @__PURE__ */ y("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-3 uhuu:px-2 uhuu:py-1.5",
										children: [/* @__PURE__ */ v("span", {
											id: D,
											className: "uhuu:text-xs uhuu:text-gray-500",
											children: x("toolbar.position")
										}), /* @__PURE__ */ v(g_, {
											"aria-labelledby": D,
											value: w,
											onValueChange: (e) => T(e),
											className: "uhuu:grid uhuu:grid-cols-2 uhuu:gap-1",
											children: UA.map((e) => /* @__PURE__ */ v(__, {
												value: e,
												"aria-label": x(bj[e]),
												title: x(bj[e]),
												className: "uhuu:group/corner uhuu:relative uhuu:h-6 uhuu:w-8 uhuu:cursor-pointer uhuu:rounded uhuu:border uhuu:border-gray-200 uhuu:outline-none uhuu:transition-colors uhuu:hover:border-gray-400 uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-300 uhuu:data-[highlighted]:border-gray-400 uhuu:data-[state=checked]:border-gray-900 uhuu:data-[state=checked]:bg-gray-100",
												children: /* @__PURE__ */ v("span", {
													"aria-hidden": "true",
													className: `uhuu:absolute ${yj[e]} uhuu:h-1.5 uhuu:w-3 uhuu:rounded-[2px] uhuu:bg-gray-300 uhuu:transition-colors uhuu:group-hover/corner:bg-gray-500 uhuu:group-data-[state=checked]/corner:bg-gray-900`
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
						...w.startsWith("top") ? vj : _j,
						...M ? { visibility: "hidden" } : null
					},
					children: /* @__PURE__ */ v("div", {
						ref: R,
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
var Aj = Object.defineProperty, jj = (e, t) => Aj(e, "name", {
	value: t,
	configurable: !0
}), Mj = "Dialog", [Nj, Pj] = /* @__PURE__ */ al(Mj), [Fj, Ij] = Nj(Mj), Lj = /* @__PURE__ */ jj((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = Lu(), [f, p] = gl({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Mj
	}), [m, h] = e.useState(0), [g, _] = e.useState(0);
	return /* @__PURE__ */ v(Fj, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: ed(),
		titleId: ed(),
		descriptionId: ed(),
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
}, "Dialog"), Rj = "DialogTrigger", zj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Ij(Rj, n), a = tl(t, i.triggerRef);
	return /* @__PURE__ */ v(zl.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": iM(i.open),
		...r,
		ref: a,
		onClick: Y(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), Bj = "DialogPortal", [Vj, Hj] = Nj(Bj, { forceMount: void 0 }), Uj = /* @__PURE__ */ jj((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = Ij(Bj, n);
	return /* @__PURE__ */ v(Vj, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ v(Bp, {
			present: r || o.open,
			children: /* @__PURE__ */ v(Ip, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), Wj = "DialogOverlay", Gj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let n = Hj(Wj, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Ij(Wj, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ v(Bp, {
		present: r || a.open,
		children: /* @__PURE__ */ v(qj, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), Kj = /* @__PURE__ */ Cl("DialogOverlay.RemoveScroll"), qj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = Ij(Wj, r), o = tl(n, gu());
	return /* @__PURE__ */ v(zh, {
		as: Kj,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ v(zl.div, {
			"data-state": iM(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), Jj = "DialogContent", Yj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let n = Hj(Jj, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Ij(Jj, e.__scopeDialog);
	return /* @__PURE__ */ v(Bp, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ v(Xj, {
			...i,
			ref: t
		}) : /* @__PURE__ */ v(Zj, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), Xj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(t, n) {
	let r = Ij(Jj, t.__scopeDialog), i = e.useRef(null), a = tl(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return jm(e);
	}, []), /* @__PURE__ */ v(Qj, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: Y(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: Y(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: Y(t.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), Zj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(t, n) {
	let r = Ij(Jj, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ v(Qj, {
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
}, "DialogContentNonModal")), Qj = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = Ij(Jj, n);
	return Du(), /* @__PURE__ */ v(Iu, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ v(Pu, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ v(hu, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? rM(o, l.descriptionId) : o,
				"data-state": iM(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), $j = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Ij("DialogTitle", n), { setTitleCount: a } = i;
	return sl(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(zl.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), eM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Ij("DialogDescription", n), { setDescriptionCount: a } = i;
	return sl(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(zl.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), tM = "DialogClose", nM = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jj(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Ij(tM, n);
	return /* @__PURE__ */ v(zl.button, {
		type: "button",
		...r,
		ref: t,
		onClick: Y(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function rM(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
jj(rM, "concatAriaDescribedby");
function iM(e) {
	return e ? "open" : "closed";
}
jj(iM, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var aM = Lj, oM = Uj, sM = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(Gj, {
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
sM.displayName = Gj.displayName;
var cM = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = as(), o = ic().t("dialog.close");
	return /* @__PURE__ */ y(oM, {
		container: a || void 0,
		children: [/* @__PURE__ */ v(sM, {}), /* @__PURE__ */ y(Yj, {
			ref: i,
			className: K("uhuu:fixed uhuu:z-50 uhuu:gap-4 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:transition uhuu:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out uhuu:data-[state=closed]:duration-300 uhuu:data-[state=open]:duration-500", e === "top" && "uhuu:inset-x-0 uhuu:top-0 uhuu:border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "uhuu:inset-x-0 uhuu:bottom-0 uhuu:border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "uhuu:inset-y-0 uhuu:left-0 uhuu:h-full uhuu:w-3/4 uhuu:border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left uhuu:sm:max-w-sm", e === "right" && "uhuu:inset-y-0 uhuu:right-0 uhuu:h-full uhuu:w-3/4 uhuu:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right uhuu:sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ y(nM, {
				className: "uhuu:absolute uhuu:right-4 uhuu:top-4 uhuu:rounded-sm uhuu:opacity-70 uhuu:ring-offset-(--uhuu-shell-surface) uhuu:transition-opacity uhuu:hover:opacity-100 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400 uhuu:focus:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ v(ts, { className: "uhuu:h-4 uhuu:w-4" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})]
		})]
	});
});
cM.displayName = Yj.displayName;
var lM = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:space-y-2 uhuu:text-center uhuu:sm:text-left", e),
	...t
});
lM.displayName = "SheetHeader";
var uM = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col-reverse uhuu:sm:flex-row uhuu:sm:justify-end uhuu:gap-2", e),
	...t
});
uM.displayName = "SheetFooter";
var dM = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v($j, {
	ref: n,
	className: K("uhuu:text-lg uhuu:font-medium uhuu:text-gray-900", e),
	...t
}));
dM.displayName = $j.displayName;
var fM = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(eM, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-500", e),
	...t
}));
fM.displayName = eM.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/add-page-dialog.tsx
function pM({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, renderThumbnail: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "uhuu-page-order-grid-cols" }) {
	let { t: l, localize: u } = ic(), [d, f] = e.useState(""), p = e.useMemo(() => {
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
			}, r = TA(t.pageComponentKeys, n, t.id), i = r[0];
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
	return /* @__PURE__ */ v(aM, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ y(cM, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:gap-0 uhuu:bg-gray-50 uhuu:p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ v(lM, {
				className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4 uhuu:bg-(--uhuu-shell-surface)",
				children: /* @__PURE__ */ y("div", {
					className: "uhuu:flex uhuu:items-end uhuu:gap-3",
					children: [
						/* @__PURE__ */ v("div", {
							className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
							children: /* @__PURE__ */ v(Jo, { className: "uhuu:w-4 uhuu:h-4" })
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:flex-1",
							children: [/* @__PURE__ */ v(dM, {
								className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
								children: l("addDialog.title")
							}), /* @__PURE__ */ v(fM, {
								className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
								children: l("addDialog.description")
							})]
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:mb-0.5 uhuu:mr-8 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2 uhuu:py-1 uhuu:text-gray-400 uhuu:focus-within:border-gray-400 uhuu:focus-within:ring-2 uhuu:focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ v(Yo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:shrink-0" }),
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
							children: /* @__PURE__ */ v(Jo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
						}, c = n ? TA(e.pageComponentKeys, s, e.id).length : 1, d = !!a;
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
												children: /* @__PURE__ */ v(Jo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-blue-600" })
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
												children: /* @__PURE__ */ v(Jo, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
									children: /* @__PURE__ */ v(Jo, { className: "uhuu:w-4 uhuu:h-4 uhuu:text-white" })
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
function mM() {
	var e = [...arguments];
	return f(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var hM = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function gM(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function _M(e) {
	return "nodeType" in e;
}
function vM(e) {
	return e ? gM(e) ? e : _M(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function yM(e) {
	let { Document: t } = vM(e);
	return e instanceof t;
}
function bM(e) {
	return !gM(e) && e instanceof vM(e).HTMLElement;
}
function xM(e) {
	return e instanceof vM(e).SVGElement;
}
function SM(e) {
	return e ? gM(e) ? e.document : _M(e) ? yM(e) ? e : bM(e) || xM(e) ? e.ownerDocument : document : document : document;
}
var CM = hM ? d : l;
function wM(e) {
	let t = m(e);
	return CM(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function TM() {
	let e = m(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function EM(e, t) {
	t === void 0 && (t = [e]);
	let n = m(e);
	return CM(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function DM(e, t) {
	let n = m();
	return f(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function OM(e) {
	let t = wM(e), n = m(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function kM(e) {
	let t = m();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var AM = {};
function jM(e, t) {
	return f(() => {
		if (t) return t;
		let n = AM[e] == null ? 0 : AM[e] + 1;
		return AM[e] = n, e + "-" + n;
	}, [e, t]);
}
function MM(e) {
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
var NM = /*#__PURE__*/ MM(1), PM = /*#__PURE__*/ MM(-1);
function FM(e) {
	return "clientX" in e && "clientY" in e;
}
function IM(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = vM(e.target);
	return t && e instanceof t;
}
function LM(e) {
	if (!e) return !1;
	let { TouchEvent: t } = vM(e.target);
	return t && e instanceof t;
}
function RM(e) {
	if (LM(e)) {
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
	return FM(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var zM = /*#__PURE__*/ Object.freeze({
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
		if (e) return [zM.Translate.toString(e), zM.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), BM = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function VM(e) {
	return e.matches(BM) ? e : e.querySelector(BM);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var HM = { display: "none" };
function UM(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: HM
	}, r);
}
function WM(e) {
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
function GM() {
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
var KM = /*#__PURE__*/ r(null);
function qM(e) {
	let t = c(KM);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function JM() {
	let [e] = h(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var YM = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, XM = {
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
function ZM(e) {
	let { announcements: n = XM, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = YM } = e, { announce: o, announcement: s } = GM(), c = jM("DndLiveRegion"), [u, d] = h(!1);
	if (l(() => {
		d(!0);
	}, []), qM(f(() => ({
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
	let p = t.createElement(t.Fragment, null, t.createElement(UM, {
		id: i,
		value: a.draggable
	}), t.createElement(WM, {
		id: c,
		announcement: s
	}));
	return r ? x(p, r) : p;
}
var QM;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(QM ||= {});
function $M() {}
function eN(e, t) {
	return f(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function tN() {
	var e = [...arguments];
	return f(() => [...e].filter((e) => e != null), [...e]);
}
var nN = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function rN(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function iN(e, t) {
	let n = RM(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function aN(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function oN(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function sN(e) {
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
function cN(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function lN(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var uN = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = lN(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = rN(lN(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(aN);
}, dN = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = sN(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = sN(r), o = i.reduce((e, t, r) => e + rN(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(aN);
};
function fN(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var pN = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = fN(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(oN);
};
function mN(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function hN(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : nN;
}
function gN(e) {
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
var _N = /*#__PURE__*/ gN(1);
function vN(e) {
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
function yN(e, t, n) {
	let r = vN(t);
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
var bN = { ignoreTransform: !1 };
function xN(e, t) {
	t === void 0 && (t = bN);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = vM(e).getComputedStyle(e);
		t && (n = yN(n, t, r));
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
function SN(e) {
	return xN(e, { ignoreTransform: !0 });
}
function CN(e) {
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
function wN(e, t) {
	return t === void 0 && (t = vM(e).getComputedStyle(e)), t.position === "fixed";
}
function TN(e, t) {
	t === void 0 && (t = vM(e).getComputedStyle(e));
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
function EN(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (yM(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!bM(i) || xM(i) || n.includes(i)) return n;
		let a = vM(e).getComputedStyle(i);
		return i !== e && TN(i, a) && n.push(i), wN(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function DN(e) {
	let [t] = EN(e, 1);
	return t ?? null;
}
function ON(e) {
	return !hM || !e ? null : gM(e) ? e : _M(e) ? yM(e) || e === SM(e).scrollingElement ? window : bM(e) ? e : null : null;
}
function kN(e) {
	return gM(e) ? e.scrollX : e.scrollLeft;
}
function AN(e) {
	return gM(e) ? e.scrollY : e.scrollTop;
}
function jN(e) {
	return {
		x: kN(e),
		y: AN(e)
	};
}
var MN;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(MN ||= {});
function NN(e) {
	return !hM || !e ? !1 : e === document.scrollingElement;
}
function PN(e) {
	let t = {
		x: 0,
		y: 0
	}, n = NN(e) ? {
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
var FN = {
	x: .2,
	y: .2
};
function IN(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = FN);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = PN(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = MN.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = MN.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = MN.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = MN.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function LN(e) {
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
function RN(e) {
	return e.reduce((e, t) => NM(e, jN(t)), nN);
}
function zN(e) {
	return e.reduce((e, t) => e + kN(t), 0);
}
function BN(e) {
	return e.reduce((e, t) => e + AN(t), 0);
}
function VN(e, t) {
	if (t === void 0 && (t = xN), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	DN(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var HN = [[
	"x",
	["left", "right"],
	zN
], [
	"y",
	["top", "bottom"],
	BN
]], UN = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = EN(t), r = RN(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of HN) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, WN = class {
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
function GN(e) {
	let { EventTarget: t } = vM(e);
	return e instanceof t ? e : SM(e);
}
function KN(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var qN;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(qN ||= {});
function JN(e) {
	e.preventDefault();
}
function YN(e) {
	e.stopPropagation();
}
var XN;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(XN ||= {});
var ZN = {
	start: [XN.Space, XN.Enter],
	cancel: [XN.Esc],
	end: [
		XN.Space,
		XN.Enter,
		XN.Tab
	]
}, QN = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case XN.Right: return {
			...n,
			x: n.x + 25
		};
		case XN.Left: return {
			...n,
			x: n.x - 25
		};
		case XN.Down: return {
			...n,
			y: n.y + 25
		};
		case XN.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, $N = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new WN(SM(t)), this.windowListeners = new WN(vM(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(qN.Resize, this.handleCancel), this.windowListeners.add(qN.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(qN.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && VN(n), t(nN);
	}
	handleKeyDown(e) {
		if (IM(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = ZN, coordinateGetter: a = QN, scrollBehavior: o = "smooth" } = r, { code: s } = e;
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
			} : nN;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = PM(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = PN(n), p = LN(n), m = {
						x: Math.min(i === XN.Right ? p.right - p.width / 2 : p.right, Math.max(i === XN.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === XN.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === XN.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === XN.Right && !s || i === XN.Left && !c, g = i === XN.Down && !l || i === XN.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === XN.Right && e <= d.x || i === XN.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						r.x = a ? n.scrollLeft - e : i === XN.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					}
					if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === XN.Down && e <= d.y || i === XN.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						r.y = a ? n.scrollTop - e : i === XN.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, NM(PM(u, this.referenceCoordinates), r));
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
$N.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = ZN, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function eP(e) {
	return !!(e && "distance" in e);
}
function tP(e) {
	return !!(e && "delay" in e);
}
var nP = class {
	constructor(e, t, n) {
		n === void 0 && (n = GN(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = SM(i), this.documentListeners = new WN(this.document), this.listeners = new WN(n), this.windowListeners = new WN(vM(i)), this.initialCoordinates = RM(r) ?? nN, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(qN.Resize, this.handleCancel), this.windowListeners.add(qN.DragStart, JN), this.windowListeners.add(qN.VisibilityChange, this.handleCancel), this.windowListeners.add(qN.ContextMenu, JN), this.documentListeners.add(qN.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (tP(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (eP(t)) {
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
		e && (this.activated = !0, this.documentListeners.add(qN.Click, YN, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(qN.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = RM(e) ?? nN, s = PM(n, o);
		if (!t && a) {
			if (eP(a)) {
				if (a.tolerance != null && KN(s, a.tolerance)) return this.handleCancel();
				if (KN(s, a.distance)) return this.handleStart();
			}
			if (tP(a) && KN(s, a.tolerance)) return this.handleCancel();
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
		e.code === XN.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, rP = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, iP = class extends nP {
	constructor(e) {
		let { event: t } = e, n = SM(t.target);
		super(e, rP, n);
	}
};
iP.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var aP = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, oP;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(oP ||= {});
var sP = class extends nP {
	constructor(e) {
		super(e, aP, SM(e.event.target));
	}
};
sP.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== oP.RightClick && (r?.({ event: n }), !0);
	}
}];
var cP = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, lP = class extends nP {
	constructor(e) {
		super(e, cP);
	}
	static setup() {
		return window.addEventListener(cP.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(cP.move.name, e);
		};
		function e() {}
	}
};
lP.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var uP;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(uP ||= {});
var dP;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(dP ||= {});
function fP(e) {
	let { acceleration: t, activator: n = uP.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = dP.TreeOrder, pointerCoordinates: u, scrollableAncestors: d, scrollableAncestorRects: p, delta: h, threshold: g } = e, _ = mP({
		delta: h,
		disabled: !a
	}), [v, y] = TM(), b = m({
		x: 0,
		y: 0
	}), x = m({
		x: 0,
		y: 0
	}), S = f(() => {
		switch (n) {
			case uP.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case uP.DraggableRect: return i;
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
	}, []), T = f(() => c === dP.TreeOrder ? [...d].reverse() : d, [c, d]);
	l(() => {
		if (!a || !d.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = d.indexOf(e), i = p[n];
				if (!i) continue;
				let { direction: a, speed: s } = IN(e, i, S, t, g);
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
var pP = {
	x: {
		[MN.Backward]: !1,
		[MN.Forward]: !1
	},
	y: {
		[MN.Backward]: !1,
		[MN.Forward]: !1
	}
};
function mP(e) {
	let { delta: t, disabled: n } = e, r = kM(t);
	return DM((e) => {
		if (n || !r || !e) return pP;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[MN.Backward]: e.x[MN.Backward] || i.x === -1,
				[MN.Forward]: e.x[MN.Forward] || i.x === 1
			},
			y: {
				[MN.Backward]: e.y[MN.Backward] || i.y === -1,
				[MN.Forward]: e.y[MN.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function hP(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return DM((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function gP(e, t) {
	return f(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var _P;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(_P ||= {});
var vP;
(function(e) {
	e.Optimized = "optimized";
})(vP ||= {});
var yP = /*#__PURE__*/ new Map();
function bP(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = h(null), { frequency: c, measure: u, strategy: d } = i, f = m(e), p = b(), g = EM(p), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = m(null), y = DM((t) => {
		if (p && !n) return yP;
		if (!t || t === yP || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new UN(u(e), e) : null;
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
			case _P.Always: return !1;
			case _P.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function xP(e, t) {
	return DM((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function SP(e, t) {
	return xP(e, t);
}
function CP(e) {
	let { callback: t, disabled: n } = e, r = wM(t), i = f(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function wP(e) {
	let { callback: t, disabled: n } = e, r = wM(t), i = f(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function TP(e) {
	return new UN(xN(e), e);
}
function EP(e, t, n) {
	t === void 0 && (t = TP);
	let [r, i] = h(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = CP({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = wP({ callback: a });
	return CM(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function DP(e) {
	return hN(e, xP(e));
}
var OP = [];
function kP(e) {
	let t = m(e), n = DM((n) => e ? n && n !== OP && e && t.current && e.parentNode === t.current.parentNode ? n : EN(e) : OP, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function AP(e) {
	let [t, n] = h(null), r = m(e), i = s((e) => {
		let t = ON(e.target);
		t && n((e) => e ? (e.set(t, jN(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = ON(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, jN(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				ON(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), f(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => NM(e, t), nN) : RN(e) : nN, [e, t]);
}
function jP(e, t) {
	t === void 0 && (t = []);
	let n = m(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== nN;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? PM(e, n.current) : nN;
}
function MP(e) {
	l(() => {
		if (!hM) return;
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
function NP(e, t) {
	return f(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function PP(e) {
	return f(() => e ? CN(e) : null, [e]);
}
var FP = [];
function IP(e, t) {
	t === void 0 && (t = xN);
	let [n] = e, r = PP(n ? vM(n) : null), [i, a] = h(FP);
	function o() {
		a(() => e.length ? e.map((e) => NN(e) ? r : new UN(t(e), e)) : FP);
	}
	let s = wP({ callback: o });
	return CM(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function LP(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return bM(t) ? t : e;
}
function RP(e) {
	let { measure: t } = e, [n, r] = h(null), i = wP({ callback: s((e) => {
		for (let { target: n } of e) if (bM(n)) {
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
	}, [t]) }), [a, o] = OM(s((e) => {
		let n = LP(e);
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
var zP = [{
	sensor: iP,
	options: {}
}, {
	sensor: $N,
	options: {}
}], BP = { current: {} }, VP = {
	draggable: { measure: SN },
	droppable: {
		measure: SN,
		strategy: _P.WhileDragging,
		frequency: vP.Optimized
	},
	dragOverlay: { measure: xN }
}, HP = class extends Map {
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
}, UP = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new HP(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: $M
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: VP,
	measureDroppableContainers: $M,
	windowRect: null,
	measuringScheduled: !1
}, WP = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: $M,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: $M
}, GP = /*#__PURE__*/ r(WP), KP = /*#__PURE__*/ r(UP);
function qP() {
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
		droppable: { containers: new HP() }
	};
}
function JP(e, t) {
	switch (t.type) {
		case QM.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case QM.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case QM.DragEnd:
		case QM.DragCancel: return {
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
		case QM.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new HP(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case QM.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new HP(e.droppable.containers);
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
		case QM.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new HP(e.droppable.containers);
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
function YP(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(GP), a = kM(r), o = kM(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!IM(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = VM(e);
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
function XP(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function ZP(e) {
	return f(() => ({
		draggable: {
			...VP.draggable,
			...e?.draggable
		},
		droppable: {
			...VP.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...VP.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function QP(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = m(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	CM(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = hN(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = DN(e);
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
var $P = /*#__PURE__*/ r({
	...nN,
	scaleX: 1,
	scaleY: 1
}), eF;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(eF ||= {});
var tF = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = zP, collisionDetection: c = pN, measuring: u, modifiers: d, ...g } = e, [_, v] = p(JP, void 0, qP), [y, b] = JM(), [x, S] = h(eF.Uninitialized), w = x === eF.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = m({
		initial: null,
		translated: null
	}), j = f(() => T == null ? null : {
		id: T,
		data: k?.data ?? BP,
		rect: A
	}, [T, k]), M = m(null), [N, P] = h(null), [F, I] = h(null), L = EM(g, Object.values(g)), ee = jM("DndDescribedBy", n), R = f(() => O.getEnabled(), [O]), z = ZP(u), { droppableRects: te, measureDroppableContainers: B, measuringScheduled: ne } = bP(R, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: z.droppable
	}), re = hP(E, T), V = f(() => F ? RM(F) : null, [F]), ie = Pe(), ae = SP(re, z.draggable.measure);
	QP({
		activeNode: T == null ? null : E.get(T),
		config: ie.layoutShiftCompensation,
		initialRect: ae,
		measure: z.draggable.measure
	});
	let H = EP(re, z.draggable.measure, ae), oe = EP(re ? re.parentElement : null), se = m({
		activatorEvent: null,
		active: null,
		activeNode: re,
		collisionRect: null,
		collisions: null,
		droppableRects: te,
		draggableNodes: E,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: O,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), ce = O.getNodeFor(se.current.over?.id), le = RP({ measure: z.dragOverlay.measure }), ue = le.nodeRef.current ?? re, de = w ? le.rect ?? H : null, fe = !!(le.nodeRef.current && le.rect), pe = DP(fe ? null : H), me = PP(ue ? vM(ue) : null), he = kP(w ? ce ?? re : null), ge = IP(he), _e = XP(d, {
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
	}), ve = V ? NM(V, D) : null, ye = AP(he), be = jP(ye), xe = jP(ye, [H]), Se = NM(_e, be), Ce = de ? _N(de, _e) : null, we = j && Ce ? c({
		active: j,
		collisionRect: Ce,
		droppableRects: te,
		droppableContainers: R,
		pointerCoordinates: ve
	}) : null, Te = cN(we, "id"), [Ee, De] = h(null), Oe = mN(fe ? _e : NM(_e, xe), Ee?.rect ?? null, H), ke = m(null), Ae = s((e, t) => {
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
					r?.(i), S(eF.Initializing), v({
						type: QM.DragStart,
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
					type: QM.DragMove,
					coordinates: e
				});
			},
			onEnd: s(QM.DragEnd),
			onCancel: s(QM.DragCancel)
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
					}, e === QM.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = QM.DragCancel);
				}
				M.current = null, C(() => {
					v({ type: e }), S(eF.Uninitialized), De(null), P(null), I(null), ke.current = null;
					let t = e === QM.DragEnd ? "onDragEnd" : "onDragCancel";
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
	}, [E]), je = gP(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, Ae(n, t));
	}, [E, Ae]));
	MP(o), CM(() => {
		H && x === eF.Initializing && S(eF.Initialized);
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
	}, [Te]), CM(() => {
		se.current = {
			activatorEvent: F,
			active: j,
			activeNode: re,
			collisionRect: Ce,
			collisions: we,
			droppableRects: te,
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
		te,
		O,
		Ee,
		he,
		Se
	]), fP({
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
		droppableRects: te,
		over: Ee,
		measureDroppableContainers: B,
		scrollableAncestors: he,
		scrollableAncestorRects: ge,
		measuringConfiguration: z,
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
		te,
		Ee,
		B,
		he,
		ge,
		z,
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
	return t.createElement(KM.Provider, { value: b }, t.createElement(GP.Provider, { value: Ne }, t.createElement(KP.Provider, { value: Me }, t.createElement($P.Provider, { value: Oe }, a)), t.createElement(YP, { disabled: r?.restoreFocus === !1 })), t.createElement(ZM, {
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
}), nF = /*#__PURE__*/ r(null), rF = "button", iF = "Draggable";
function aF(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = jM(iF), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: d, draggableNodes: p, over: m } = c(GP), { role: h = rF, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? $P : nF), [b, x] = OM(), [S, C] = OM(), w = NP(o, t), T = EM(n);
	return CM(() => (p.set(t, {
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
			"aria-pressed": v && h === rF ? !0 : void 0,
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
function oF() {
	return c(KP);
}
var sF = "Droppable", cF = { timeout: 25 };
function lF(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = jM(sF), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(GP), p = m({ disabled: n }), h = m(!1), g = m(null), _ = m(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...cF,
		...i
	}, x = EM(y ?? r), S = wP({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = OM(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = EM(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: QM.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: QM.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== p.current.disabled && (u({
			type: QM.SetDroppableDisabled,
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
function uF(e) {
	let { animation: r, children: i } = e, [a, o] = h(null), [s, c] = h(null), l = kM(i);
	return !i && !a && l && o(l), CM(() => {
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
var dF = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function fF(e) {
	let { children: n } = e;
	return t.createElement(GP.Provider, { value: WP }, t.createElement($P.Provider, { value: dF }, n));
}
var pF = {
	position: "fixed",
	touchAction: "none"
}, mF = (e) => IM(e) ? "transform 250ms ease" : void 0, hF = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = mF } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...pF,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: zM.Transform.toString(f),
		transformOrigin: a && i ? iN(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), gF = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: zM.Transform.toString(t) }, { transform: zM.Transform.toString(n) }];
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
function _F(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return wM((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = LP(a);
		if (!c) return;
		let { transform: l } = vM(a).getComputedStyle(a), u = vN(l);
		if (!u) return;
		let d = typeof t == "function" ? t : vF(t);
		return VN(s, i.draggable.measure), d({
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
function vF(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...gF,
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
var yF = 0;
function bF(e) {
	return f(() => {
		if (e != null) return yF++, yF;
	}, [e]);
}
var xF = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = oF(), w = c($P), T = bF(p?.id), E = XP(s, {
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
	}), D = xP(m), O = _F({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(fF, null, t.createElement(uF, { animation: O }, p && T ? t.createElement(hF, {
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
function SF(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function CF(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function wF(e) {
	return e !== null && e >= 0;
}
function TF(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function EF(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var DF = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = SF(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, OF = "Sortable", kF = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: OF,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: DF,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function AF(e) {
	let { children: n, id: r, items: i, strategy: a = DF, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: d, measureDroppableContainers: p } = oF(), h = jM(OF, r), g = c.rect !== null, _ = f(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = d ? _.indexOf(d.id) : -1, x = m(_), S = !TF(_, x.current), C = b !== -1 && y === -1 || S, w = EF(o);
	CM(() => {
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
		sortedRects: CF(_, u),
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
	return t.createElement(kF.Provider, { value: T }, n);
}
var jF = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return SF(n, r, i).indexOf(t);
}, MF = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, NF = {
	duration: 200,
	easing: "ease"
}, PF = "transform", FF = /*#__PURE__*/ zM.Transition.toString({
	property: PF,
	duration: 0,
	easing: "linear"
}), IF = { roleDescription: "sortable" };
function LF(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = h(null), s = m(n);
	return CM(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = xN(r.current, { ignoreTransform: !0 }), n = {
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
function RF(e) {
	let { animateLayoutChanges: t = MF, attributes: n, disabled: r, data: i, getNewIndex: a = jF, id: o, strategy: s, resizeObserverConfig: u, transition: d = NF } = e, { items: p, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(kF), C = zF(r, _), w = p.indexOf(o), T = f(() => ({
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
	]), E = f(() => p.slice(p.indexOf(o)), [p, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = lF({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: ee, setActivatorNodeRef: R, transform: z } = aF({
		id: o,
		data: T,
		attributes: {
			...IF,
			...n
		},
		disabled: C.draggable
	}), te = mM(A, F), B = !!j, ne = B && !v && wF(g) && wF(b), re = !x && L, V = ne ? (re && ne ? z : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ie = wF(g) && wF(b) ? a({
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
	}), ce = LF({
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
		setNodeRef: te,
		setActivatorNodeRef: R,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: ce ?? V,
		transition: le()
	};
	function le() {
		if (ce || oe && H.current.newIndex === w) return FF;
		if (!(re && !IM(M) || !d) && (B || se)) return zM.Transition.toString({
			...d,
			property: PF
		});
	}
}
function zF(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function BF(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var VF = [
	XN.Down,
	XN.Right,
	XN.Up,
	XN.Left
], HF = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if (VF.includes(e.code)) {
		if (e.preventDefault(), !n || !r) return;
		let t = [];
		a.getEnabled().forEach((n) => {
			if (!n || n != null && n.disabled) return;
			let a = i.get(n.id);
			if (a) switch (e.code) {
				case XN.Down:
					r.top < a.top && t.push(n);
					break;
				case XN.Up:
					r.top > a.top && t.push(n);
					break;
				case XN.Left:
					r.left > a.left && t.push(n);
					break;
				case XN.Right: r.left < a.left && t.push(n);
			}
		});
		let c = dN({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = cN(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = EN(c).some((e, t) => s[t] !== e), i = UF(e, t), a = WF(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : PM(u, l);
			}
		}
	}
};
function UF(e, t) {
	return !BF(e) || !BF(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function WF(e, t) {
	return !BF(e) || !BF(t) || !UF(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function GF({ item: e, index: t, renderItem: n, keyExtractor: r, disabled: i = !1 }) {
	let { attributes: a, listeners: o, setNodeRef: s, transform: c, transition: l, isDragging: u } = RF({
		id: r(e),
		disabled: i
	}), d = {
		transform: zM.Transform.toString(c),
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
function KF({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ v("div", {
		className: "uhuu:rotate-2",
		children: n(e, t, !0)
	});
}
function qF({ items: e, onChange: t, renderItem: n, keyExtractor: r, gridColsClass: i = "uhuu-page-drag-drop-grid-cols", className: a = "", renderEmptyState: o, isItemDisabled: s, canDropAt: c }) {
	let [u, d] = h(e);
	l(() => {
		d(e);
	}, [e]);
	let [f, p] = h(null), m = tN(eN(iP), eN($N, { coordinateGetter: HF })), g = (e) => {
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
				let e = SF(u, o, l);
				d(e), t(e);
			}
			p(null);
		}
	}, b = u.find((e) => r(e) === f), x = b ? u.findIndex((e) => r(e) === f) : -1;
	return /* @__PURE__ */ v("div", {
		className: `uhuu:w-full ${a}`,
		children: u.length === 0 && o ? o() : /* @__PURE__ */ v("div", {
			className: "uhuu:mb-6",
			children: /* @__PURE__ */ y(tF, {
				sensors: m,
				collisionDetection: uN,
				onDragStart: g,
				onDragEnd: _,
				children: [/* @__PURE__ */ v(AF, {
					items: u.map(r),
					strategy: DF,
					children: /* @__PURE__ */ v("div", {
						className: i,
						children: u.map((e, t) => /* @__PURE__ */ v(GF, {
							item: e,
							index: t,
							renderItem: n,
							keyExtractor: r,
							disabled: s ? s(e) : !1
						}, r(e)))
					})
				}), /* @__PURE__ */ v(xF, { children: b ? /* @__PURE__ */ v(KF, {
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
var JF = vs("uhuu:inline-flex uhuu:items-center uhuu:rounded-md uhuu:border uhuu:px-2.5 uhuu:py-0.5 uhuu:text-xs uhuu:font-medium uhuu:transition-colors uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-offset-2", {
	variants: { variant: {
		default: "uhuu:border-transparent uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse)",
		secondary: "uhuu:border-transparent uhuu:bg-gray-100 uhuu:text-gray-900",
		outline: "uhuu:border-gray-300 uhuu:text-gray-900 uhuu:bg-(--uhuu-shell-surface)"
	} },
	defaultVariants: { variant: "default" }
});
function YF({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ v("div", {
		className: K(JF({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function XF({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = ic(), a = e.strictPosition, o = a === "start" || a === "end";
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
			children: /* @__PURE__ */ v(YF, {
				variant: "secondary",
				className: `uhuu:text-xs uhuu:min-w-[24px] uhuu:h-6 uhuu:font-medium uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-sm uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-sm uhuu:border uhuu:border-gray-200 ${o ? "uhuu:opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ v(Uo, { className: "uhuu:size-3 uhuu:text-gray-500" }) : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("span", {
					className: "uhuu:group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ v(Vo, { className: "uhuu:size-4 uhuu:text-gray-400 uhuu:hidden uhuu:group-hover/drag-item:block" })] })
			})
		})]
	});
}
function ZF({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "uhuu-page-order-grid-cols" }) {
	let p = ic(), { t: m, localize: h } = p, g = h(u) ?? m("reorderDialog.title"), _ = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = e.useCallback((e) => e.id, []);
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
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? VA({
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
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ v(XF, {
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
				children: [/* @__PURE__ */ v(Vo, { className: "uhuu:size-3.5 uhuu:opacity-60 uhuu:group-hover/remove-btn:hidden" }), /* @__PURE__ */ v(Jo, { className: "uhuu:size-3.5 uhuu:rotate-45 uhuu:hidden uhuu:group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ y("div", {
		className: "uhuu:text-center uhuu:py-20",
		children: [
			/* @__PURE__ */ v("div", {
				className: "uhuu:w-12 uhuu:h-12 uhuu:bg-gray-50 uhuu:rounded-lg uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
				children: /* @__PURE__ */ v(Ao, { className: "uhuu:w-6 uhuu:h-6 uhuu:text-gray-400" })
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
	return /* @__PURE__ */ v(aM, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ y(cM, {
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
				/* @__PURE__ */ v(lM, {
					className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4",
					children: /* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-end uhuu:gap-3",
						children: [
							/* @__PURE__ */ v("div", {
								className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
								children: /* @__PURE__ */ v(Ao, { className: "uhuu:w-4 uhuu:h-4" })
							}),
							/* @__PURE__ */ y("div", {
								className: "uhuu:flex-1",
								children: [/* @__PURE__ */ v(dM, {
									className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
									children: g
								}), /* @__PURE__ */ v(fM, {
									className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
									children: _
								})]
							}),
							/* @__PURE__ */ v(YF, {
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
						children: /* @__PURE__ */ v(qF, {
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
				/* @__PURE__ */ y(uM, {
					className: "uhuu:border-t uhuu:border-gray-200 uhuu:px-4 uhuu:py-3 uhuu:gap-3",
					children: [/* @__PURE__ */ v(bs, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ v(bs, {
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
function QF(e, t) {
	let n = 0;
	for (let r of Object.values(e ?? {})) {
		let e = r?.[t]?.growth;
		typeof e == "number" && Number.isFinite(e) && e > n && (n = e);
	}
	return Math.ceil(n);
}
function $F(e, t) {
	return Array.from(e.querySelectorAll(t)).filter((e) => !e.closest(`[${Ve}]`));
}
function eI({ pageKey: t, version: n, readiness: r, onMeasurement: i, onPrune: a, children: o }) {
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
		let n = new Set($F(e, "[data-uhuu-flow=\"true\"]").map((e) => e.dataset.uhuuFlowId ?? ""));
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
		s.mounted && e && ($F(e, "[data-uhuu-flow-area]").length ? e.removeAttribute("data-uhuu-flow-error") : (e.setAttribute("data-uhuu-flow-error", "missing-flow-region"), m.current = setTimeout(() => {
			e.isConnected && !$F(e, "[data-uhuu-flow-area]").length && xe(`missing-flow-region:${t}`, `[uhuu-components] Page "${t}" is marked hasFlow but renders no Flow.Area, so data-uhuu-pagination stays "measuring". Render a FlowArea with one Flow.Items in every branch (an empty Flow is one page), or remove hasFlow.`);
		}, Ue)));
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
function tI({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: h, measurementPageNo: g, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, flowReadiness: D, onFlowMeasurement: O, onFlowPrune: k, renderVisible: A = !0, renderMode: j = "sheet", spread: M }) {
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
	}) : null, L = QF(C, S), ee = e.useMemo(() => L > 0 ? { "--uhuu-sheet-growth": `${L}px` } : void 0, [L]), R = e.useMemo(() => ({
		mode: "visible",
		pageKey: P,
		pageIndex: S,
		chunksByFlowId: C
	}), [
		P,
		S,
		C
	]), z = e.useMemo(() => c && {
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
	return j === "content" ? /* @__PURE__ */ y(_, { children: [d, /* @__PURE__ */ v(He.Provider, {
		value: R,
		children: I(m, h)
	})] }) : /* @__PURE__ */ y(_, { children: [w && O && T && /* @__PURE__ */ v(eI, {
		pageKey: T,
		version: E,
		readiness: D,
		onMeasurement: O,
		onPrune: k,
		children: (e) => {
			let t = e.copy === "continuation", n = g ?? m, r = b ?? h;
			return /* @__PURE__ */ v(Ie, {
				setup: u,
				children: /* @__PURE__ */ v(Le, {
					className: F,
					pageNo: m,
					"data-page-key": P,
					children: /* @__PURE__ */ v(He.Provider, {
						value: e,
						children: t ? I(n + 1, r === void 0 ? void 0 : r + 1, z?.continuation) : I(n, r, z?.first)
					})
				})
			});
		}
	}), A && /* @__PURE__ */ v(Ie, {
		setup: u,
		children: /* @__PURE__ */ y(Le, {
			className: F,
			style: ee,
			pageNo: m,
			overlay: ({ pageNo: e }) => N(e),
			"data-page-key": P,
			children: [d, /* @__PURE__ */ v(He.Provider, {
				value: R,
				children: I(m, h)
			})]
		})
	})] });
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var nI = Object.defineProperty, rI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => nI(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ v(zl.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), iI = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(rI, {
	ref: n,
	className: K("uhuu:text-sm uhuu:font-medium uhuu:leading-none uhuu:text-gray-700 uhuu:peer-disabled:cursor-not-allowed uhuu:peer-disabled:opacity-70", e),
	...t
}));
iI.displayName = rI.displayName;
//#endregion
//#region src/uhuu/ui/select.tsx
var aI = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y("div", {
	className: "uhuu:relative uhuu:w-full",
	children: [/* @__PURE__ */ v("select", {
		className: K("uhuu:peer uhuu:flex uhuu:h-8 uhuu:w-full uhuu:appearance-none uhuu:truncate uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:py-1 uhuu:pr-8 uhuu:pl-2.5 uhuu:text-sm uhuu:text-gray-900 uhuu:outline-none uhuu:transition-colors uhuu:hover:border-gray-300 uhuu:focus:border-gray-400 uhuu:focus:ring-2 uhuu:focus:ring-gray-200 uhuu:focus:ring-offset-0 uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50", e),
		ref: r,
		...n,
		children: t
	}), /* @__PURE__ */ v(Fo, {
		"aria-hidden": "true",
		className: "uhuu:pointer-events-none uhuu:absolute uhuu:top-1/2 uhuu:right-2.5 uhuu:h-3.5 uhuu:w-3.5 uhuu:-translate-y-1/2 uhuu:text-gray-500 uhuu:peer-disabled:opacity-50"
	})]
}));
aI.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var oI = Object.defineProperty, sI = (e, t) => oI(e, "name", {
	value: t,
	configurable: !0
});
function cI(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
sI(cI, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var lI = Object.defineProperty, uI = (e, t) => lI(e, "name", {
	value: t,
	configurable: !0
});
function dI(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
uI(dI, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var fI = Object.defineProperty, pI = (e, t) => fI(e, "name", {
	value: t,
	configurable: !0
}), mI = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, hI = {
	LTR: "ltr",
	RTL: "rtl"
}, gI = ["PageUp", "PageDown"], _I = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], vI = {
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
}, yI = "Slider", [bI, xI, SI] = /* @__PURE__ */ Ul(yI), [CI, wI] = /* @__PURE__ */ al(yI, [SI]), [TI, EI] = CI(yI), DI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = mI.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ pI(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ pI(() => {}, "onValueCommit"), inverted: h = !1, form: g, ..._ } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === mI.Horizontal ? AI : jI, [C, w] = e.useState(null), T = tl(n, w), [E = [], D] = gl({
		prop: f,
		defaultProp: d,
		onChange: /* @__PURE__ */ pI((e) => {
			[...y.current][b.current]?.focus({
				preventScroll: !0,
				focusVisible: x.current
			}), x.current = !1, p(e);
		}, "onChange")
	}), O = e.useRef(E), k = e.useRef(E);
	e.useEffect(() => {
		let e = g ? C?.ownerDocument.getElementById(g) : C?.closest("form");
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ pI(() => D(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		C,
		g,
		D
	]);
	function A(e) {
		N(e, YI(E, e));
	}
	pI(A, "handleSlideStart");
	function j(e) {
		N(e, b.current);
	}
	pI(j, "handleSlideMove");
	function M() {
		String(E) !== String(O.current) && m(E);
	}
	pI(M, "handleSlideEnd");
	function N(e, t, { commit: n } = { commit: !1 }) {
		let r = eL(o), s = cI(tL(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? cI(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = KI(e, c, t);
			if (QI(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return pI(N, "updateValues"), /* @__PURE__ */ v(TI, {
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
		children: /* @__PURE__ */ v(bI.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ v(bI.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ v(S, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					..._,
					ref: T,
					onPointerDown: Y(_.onPointerDown, () => {
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
							let n = gI.includes(e.key) || e.shiftKey && _I.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(nL(a, {
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
}, "Slider")), [OI, kI] = CI(yI, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), AI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = tl(n, p), h = e.useRef(void 0), g = iu(a), _ = g === hI.LTR, y = _ && !o || !_ && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = $I([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return pI(b, "getValueFromPointer"), /* @__PURE__ */ v(OI, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ v(MI, {
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
				let t = vI[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), jI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = tl(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = $I([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return pI(h, "getValueFromPointer"), /* @__PURE__ */ v(OI, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ v(MI, {
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
				let t = vI[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), MI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = EI(yI, n);
	return /* @__PURE__ */ v(zl.span, {
		...l,
		ref: t,
		onKeyDown: Y(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : gI.concat(_I).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: Y(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : r(e);
		}),
		onPointerMove: Y(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: Y(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}, "SliderImpl")), NI = "SliderTrack", PI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = EI(NI, n);
	return /* @__PURE__ */ v(zl.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), FI = "SliderRange", II = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = EI(FI, r), o = kI(FI, r), s = tl(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => qI(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ v(zl.span, {
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
}, "SliderRange")), [LI, RI] = CI("SliderThumb"), zI = "SliderThumbProvider";
function BI(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = EI(zI, n), s = xI(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = hp(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : qI(p, o.min, o.max);
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
	return /* @__PURE__ */ v(LI, {
		scope: n,
		...g,
		children: rL(a) ? a(g) : i
	});
}
pI(BI, "SliderThumbProvider");
var VI = "SliderThumbTrigger", HI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = EI(VI, n), a = kI(VI, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = RI(VI, n), d = tl(t, u), f = JI(o, i.values.length), p = l?.[a.size], m = p ? XI(p, c, a.direction) : 0;
	return /* @__PURE__ */ v("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ v(bI.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ v(zl.span, {
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
				onFocus: Y(e.onFocus, () => {
					i.valueIndexToChangeRef.current = o;
				})
			})
		})
	});
}, "SliderThumbTrigger")), UI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ v(BI, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(HI, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ v(GI, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), WI = "SliderBubbleInput", GI = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ pI(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = RI(WI, t), s = e.useRef(null), c = tl(s, r), l = dI(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ v(zl.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function KI(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
pI(KI, "getNextSortedValues");
function qI(e, t, n) {
	return cI(100 / (n - t) * (e - t), [0, 100]);
}
pI(qI, "convertValueToPercentage");
function JI(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
pI(JI, "getLabel");
function YI(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
pI(YI, "getClosestValueIndex");
function XI(e, t, n) {
	let r = e / 2;
	return (r - $I([0, 50], [0, r])(t) * n) * n;
}
pI(XI, "getThumbInBoundsOffset");
function ZI(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
pI(ZI, "getStepsBetweenValues");
function QI(e, t) {
	if (t > 0) {
		let n = ZI(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
pI(QI, "hasMinStepsBetweenValues");
function $I(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
pI($I, "linearScale");
function eL(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
pI(eL, "getDecimalCount");
function tL(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
pI(tL, "roundValue");
function nL(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = eL(n), o = (e - t) / n, s = Math.round(o), c = tL(s * n + t, a) === tL(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), tL(l * n + t, a);
}
pI(nL, "getNextStepValue");
function rL(e) {
	return typeof e == "function";
}
pI(rL, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var iL = e.forwardRef(({ className: e, thumbLabel: t, thumbDescribedBy: n, ...r }, i) => /* @__PURE__ */ y(DI, {
	ref: i,
	className: K("uhuu:relative uhuu:flex uhuu:w-full uhuu:touch-none uhuu:select-none uhuu:items-center uhuu:data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ v(PI, {
		className: "uhuu:relative uhuu:h-1.5 uhuu:w-full uhuu:grow uhuu:overflow-hidden uhuu:rounded-full uhuu:bg-gray-200",
		children: /* @__PURE__ */ v(II, { className: "uhuu:absolute uhuu:h-full uhuu:bg-gray-900" })
	}), /* @__PURE__ */ v(UI, {
		"aria-label": t,
		"aria-describedby": n,
		className: "uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:border-2 uhuu:border-gray-900 uhuu:bg-(--uhuu-shell-surface) uhuu:shadow uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50"
	})]
}));
iL.displayName = DI.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var aL = Object.defineProperty, oL = (e, t) => aL(e, "name", {
	value: t,
	configurable: !0
}), sL = "Switch", [cL, lL] = /* @__PURE__ */ al(sL), [uL, dL] = cL(sL);
function fL(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = gl({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: sL
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
	return /* @__PURE__ */ v(uL, {
		scope: n,
		...C,
		children: bL(f) ? f(C) : i
	});
}
oL(fL, "SwitchProvider");
var pL = "SwitchTrigger", mL = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oL(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: g } = dL(pL, t), _ = tl(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ oL(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ v(zl.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": xL(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: _,
		onClick: Y(n, (e) => {
			m(), f((e) => !e), g && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), hL = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oL(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ v(fL, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(mL, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ v(yL, { __scopeSwitch: n })] })
	});
}, "Switch")), gL = "SwitchThumb", _L = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oL(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = dL(gL, n);
	return /* @__PURE__ */ v(zl.span, {
		"data-state": xL(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), vL = "SwitchBubbleInput", yL = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oL(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: g } = dL(vL, t), _ = tl(i, g), y = hp(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
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
	return /* @__PURE__ */ v(zl.input, {
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
		onClick: Y(n, (e) => {
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
function bL(e) {
	return typeof e == "function";
}
oL(bL, "isFunction");
function xL(e) {
	return e ? "checked" : "unchecked";
}
oL(xL, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var SL = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(hL, {
	ref: n,
	className: K("uhuu:peer uhuu:inline-flex uhuu:h-5 uhuu:w-9 uhuu:shrink-0 uhuu:cursor-pointer uhuu:items-center uhuu:rounded-full uhuu:border-2 uhuu:border-transparent uhuu:bg-gray-200 uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:focus-visible:ring-offset-(--uhuu-shell-surface) uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50 uhuu:data-[state=checked]:bg-gray-900 uhuu:data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ v(_L, { className: K("uhuu:pointer-events-none uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:bg-white uhuu:shadow-lg uhuu:ring-0 uhuu:data-[state=checked]:bg-(--uhuu-shell-on-inverse) uhuu:transition-transform uhuu:data-[state=checked]:translate-x-4 uhuu:data-[state=unchecked]:translate-x-0") })
}));
SL.displayName = hL.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/option-controls.tsx
var CL = "__uhuu_option_unset__", wL = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500";
function TL(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (typeof e != "string" || e.trim() === "") return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function EL(e) {
	let t = typeof e.min == "number" ? e.min : 0;
	return {
		min: t,
		max: typeof e.max == "number" ? Math.max(e.max, t) : Math.max(100, t),
		step: typeof e.step == "number" && e.step > 0 ? e.step : 1
	};
}
function DL(e, { min: t, max: n }) {
	let r = TL(e) ?? t;
	return Math.min(n, Math.max(t, r));
}
function OL({ definition: e, value: t, onChange: n }) {
	let { t: r, localize: i } = ic(), a = u(), o = `${a}control`, s = `${a}label`, c = `${a}description`, l = i(e.label) ?? sA(e) ?? "", d = i(e.description), f = d ? c : void 0, p = d ? /* @__PURE__ */ v("p", {
		id: c,
		className: "uhuu:text-xs uhuu:leading-snug uhuu:text-gray-500",
		children: d
	}) : null, m = Array.isArray(e.options) ? e.options : [];
	switch (oA(e)) {
		case "toggle": return /* @__PURE__ */ y("div", {
			className: "uhuu:flex uhuu:flex-col uhuu:gap-1",
			children: [/* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:min-h-8 uhuu:items-center uhuu:justify-between uhuu:gap-3",
				children: [/* @__PURE__ */ v(iI, {
					htmlFor: o,
					className: wL,
					children: l
				}), /* @__PURE__ */ v(SL, {
					id: o,
					"aria-describedby": f,
					checked: pA(t),
					onCheckedChange: (e) => n(e)
				})]
			}), p]
		});
		case "slider": {
			let r = EL(e), i = DL(t, r);
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-2",
				children: [
					/* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-3",
						children: [/* @__PURE__ */ v("span", {
							id: s,
							className: wL,
							children: l
						}), /* @__PURE__ */ v("span", {
							className: "uhuu:font-mono uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-700",
							children: i
						})]
					}),
					/* @__PURE__ */ v(iL, {
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
			let i = EL(e), a = DL(t, i), o = (e) => n(DL(a + e * i.step, i));
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v("span", {
						id: s,
						className: K(wL, "uhuu:block"),
						children: l
					}),
					/* @__PURE__ */ y("div", {
						role: "group",
						"aria-labelledby": s,
						"aria-describedby": f,
						className: "uhuu:flex uhuu:items-center uhuu:gap-1.5",
						children: [
							/* @__PURE__ */ v(bs, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								"aria-label": r("options.decrease", { name: l }),
								disabled: a <= i.min,
								onClick: () => o(-1),
								children: /* @__PURE__ */ v(Go, {
									"aria-hidden": "true",
									className: "uhuu:h-3.5 uhuu:w-3.5"
								})
							}),
							/* @__PURE__ */ v("output", {
								"aria-live": "polite",
								className: "uhuu:flex uhuu:h-8 uhuu:flex-1 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-gray-50 uhuu:font-mono uhuu:text-sm uhuu:font-medium uhuu:tabular-nums uhuu:text-gray-900",
								children: a
							}),
							/* @__PURE__ */ v(bs, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								"aria-label": r("options.increase", { name: l }),
								disabled: a >= i.max,
								onClick: () => o(1),
								children: /* @__PURE__ */ v(Jo, {
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
			let r = fA(e, t);
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v("span", {
						id: s,
						className: K(wL, "uhuu:block"),
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
								className: K("uhuu:flex uhuu:h-7 uhuu:w-7 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border-2 uhuu:transition-all uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-1", a ? "uhuu:scale-110 uhuu:border-gray-900" : "uhuu:border-gray-200 uhuu:hover:scale-105 uhuu:hover:border-gray-400"),
								style: { backgroundColor: e.hex || String(e.value) },
								children: a && /* @__PURE__ */ v(Po, {
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
			let a = fA(e, t), s = t == null || t === "";
			return /* @__PURE__ */ y("div", {
				className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
				children: [
					/* @__PURE__ */ v(iI, {
						htmlFor: o,
						className: K(wL, "uhuu:block"),
						children: l
					}),
					/* @__PURE__ */ y(aI, {
						id: o,
						"aria-describedby": f,
						value: a ? String(a.value) : CL,
						onChange: (e) => {
							let t = m.find((t) => String(t.value) === e.target.value);
							t && n(t.value);
						},
						children: [!a && /* @__PURE__ */ v("option", {
							value: CL,
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
function kL({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: K("uhuu:flex uhuu:flex-col uhuu:gap-3", t),
		children: e
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function AL(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function jL({ pageOptions: e, targetItem: t, onChange: n }) {
	let r = AL(e, t);
	return /* @__PURE__ */ v(kL, { children: r.map((e) => /* @__PURE__ */ v(OL, {
		definition: e,
		value: e.getValue(t),
		onChange: (r) => n(e, t, String(r))
	}, e.id)) });
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-dropdown.tsx
function ML({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = ic(), o = r ?? a("page.optionsMenu");
	return !t || AL(e, t).length === 0 ? null : /* @__PURE__ */ y(S_, {
		modal: !1,
		children: [/* @__PURE__ */ v(C_, {
			asChild: !0,
			className: i || "uhuu-page-options-trigger",
			children: /* @__PURE__ */ y(bs, {
				variant: "ghost",
				size: "sm",
				className: "uhuu:h-7 uhuu:w-7 uhuu:text-gray-400 uhuu:hover:text-gray-600 uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200 uhuu:rounded-md",
				title: o,
				children: [/* @__PURE__ */ v(zo, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ y(D_, {
			className: "uhuu:w-64 uhuu:max-w-[calc(100vw-2rem)] uhuu:p-3",
			align: "center",
			"aria-label": o,
			children: [/* @__PURE__ */ v("p", {
				className: "uhuu:mb-3 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900",
				children: o
			}), /* @__PURE__ */ v(jL, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})]
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function NL({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: p }) {
	let { t: g } = ic(), [_, b] = h(!1), [x, S] = h(!1), [C, w] = h(e), T = m(null);
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
	}) : t || D ? /* @__PURE__ */ y(S_, {
		open: _,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ v(C_, {
			asChild: !0,
			children: /* @__PURE__ */ y("button", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:text-gray-900 uhuu:rounded-md uhuu:px-2 uhuu:h-7 uhuu:hover:bg-gray-100 uhuu:transition-colors uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ v("span", {
					className: "uhuu:truncate uhuu:max-w-[120px]",
					children: e
				}), /* @__PURE__ */ v(Fo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:text-gray-500 uhuu:shrink-0" })]
			})
		}), /* @__PURE__ */ y(D_, {
			className: "uhuu:min-w-44 uhuu:p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ y(O_, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ v(qo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.rename")]
				}),
				t && D && /* @__PURE__ */ v(M_, {}),
				n && /* @__PURE__ */ y(O_, {
					onClick: c,
					children: [/* @__PURE__ */ v(jo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveUp")]
				}),
				r && /* @__PURE__ */ y(O_, {
					onClick: u,
					children: [/* @__PURE__ */ v(ko, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ v(M_, {}),
				i && /* @__PURE__ */ y(O_, {
					onClick: d,
					children: [/* @__PURE__ */ v(Jo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.addPage")]
				}),
				a && /* @__PURE__ */ y(O_, {
					onClick: f,
					children: [/* @__PURE__ */ v(Ro, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.duplicate")]
				}),
				o && /* @__PURE__ */ v(M_, {}),
				o && /* @__PURE__ */ y(O_, {
					onClick: p,
					className: "uhuu:text-red-600 uhuu:focus:text-red-700 uhuu:focus:bg-red-50",
					children: [/* @__PURE__ */ v(Qo, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.delete")]
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
var PL = (e) => `${Number(e.toFixed(4))}mm`;
function FL(e, t) {
	let n = m(!1);
	l(() => {
		t || n.current || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var IL = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, h) {
	let g = c(R), b = o === void 0 ? g?.page?.binding ?? null : A(o), x = s ?? g?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	FL(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ v(Le, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ v(Le, {
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
					"data-label": `spine ${PL(b.spine)}${D ? " · blank" : ""}`
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
					"data-label": `glue ${PL(b.glue)}`
				})
			}, e))
		]
	});
});
//#endregion
//#region src/uhuu/editor-shell/document/cover-spread-layout.js
function LL(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function RL(e, t) {
	return !!A(e?.binding) && t?.mode === "cover";
}
function zL({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: LL(e),
		warnings: []
	};
	if (!RL(e, t)) return r;
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
function BL(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, payload: a, stateKey: o = Mk, resolveNewItem: u, notifyError: d, pageFilter: p } = e, [g, _] = h(t), [v, y] = h(!1), { t: b } = ic(), x = m(t);
	l(() => {
		try {
			JSON.stringify(x.current) !== JSON.stringify(t) && (x.current = t, _(t));
		} catch {
			x.current !== t && (x.current = t, _(t));
		}
	}, [t]);
	let S = c(_A), C = s((e) => {
		_(e);
		let t = Bk(e, o);
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
			e.set(n, (e.get(n) ?? 0) + 1), Nk(t) && t.pages?.forEach((t) => {
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
	}), [n, w]), E = f(() => Ik(g), [g]), D = s(async (e, t) => {
		let n = (e) => e ? typeof e == "string" ? e : e.mode ?? "optional" : "none", r = ((e) => {
			if (e.kind === "page") {
				let t = e;
				return Wk(t.templateId ?? t.id, t.componentKey ?? t.id, {
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
			return Gk(n, TA(t.pageComponentKeys, r, t.id), {
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
		return C(kA(g, s, t)), {
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
			if (Ik(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (S?.removeIntegrationPayload) {
				let e = n.id;
				S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
			}
			C(g.filter((t) => t.id !== e));
		} else for (let n of g) if (Nk(n) && n.pages.some((t) => t.id === e)) {
			if (Ik(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (S?.removeIntegrationPayload) {
					let e = n.id;
					S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
				}
				C(g.filter((e) => e.id !== n.id));
			} else C(g.map((t) => t.id === n.id && Nk(t) ? {
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
		C(g.map((n) => n.id === e ? (Nk(n), {
			...n,
			...t
		}) : n));
	}, [g, C]), A = s((e) => {
		C(e);
	}, [C]), j = f(() => {
		let e = Fk(g);
		return p ? Yk(e, p) : e;
	}, [g, p]), M = s((e) => {
		let t = [];
		return j.forEach((n) => {
			Nk(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [j]), N = f(() => Lk(j), [j]), P = s((e) => {
		let t = Rk(e, g);
		C(OA(t));
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
function VL(e) {
	let t = e.templateId ?? e.id;
	if (!Nk(e)) {
		let n = Wk(t, e.componentKey ?? t, { repeatable: !0 });
		return {
			...e,
			id: n.id,
			templateId: t,
			componentKey: n.componentKey
		};
	}
	let n = Gk(t, e.pages.map((e) => ({
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
function HL(e) {
	return Array.isArray(e) ? e.map(HL) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, HL(t)])) : e;
}
function UL(e, t, n, r = []) {
	let i = [[t, n]];
	Nk(t) && Nk(n) && t.pages.forEach((e, t) => i.push([e, n.pages[t]]));
	let a = { ...e ?? {} }, o = r.filter((e) => Nk(e) && e.id !== t.id).map((e) => `${e.id}__`);
	for (let r of [
		"pages",
		"groups",
		"integrations"
	]) {
		let s = { ...e?.[r] ?? {} }, c = !1;
		for (let [e, t] of i) s[e.id] !== void 0 && (s[t.id] = HL(s[e.id]), c = !0);
		if (Nk(t)) {
			let i = `${t.id}__`;
			for (let [t, a] of Object.entries(e?.[r] ?? {})) t.startsWith(i) && !o.some((e) => t.startsWith(e)) && (s[`${n.id}__${t.slice(i.length)}`] = HL(a), c = !0);
		}
		c && (a[r] = s);
	}
	for (let [t, n] of i) {
		let r = gA(e, t);
		r !== void 0 && a.pages?.[n.id] === void 0 && (a.pages = {
			...a.pages ?? {},
			[n.id]: HL(r)
		});
	}
	return a;
}
//#endregion
//#region src/uhuu/editor-shell/document/use-page-item-actions.ts
function WL({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
	let a = c(_A), o = f(() => e.filter((e) => !e.strictPosition), [e]);
	return s((s, c) => {
		if (!s) return {};
		let l = s.id, u = o.findIndex((e) => e.id === l), d = u !== -1, f = d && u > 0 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 1 || ([n[r - 1], n[r]] = [n[r], n[r - 1]], t(n));
		} : void 0, p = d && u < o.length - 1 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 0 || r >= n.length - 1 || ([n[r], n[r + 1]] = [n[r + 1], n[r]], t(n));
		} : void 0, m = d && s.repeatable ? () => {
			let n = e.find((e) => e.id === l) ?? s, r = VL(n);
			a?.setPayload((t) => UL(t, n, r, e));
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
function GL(e = [], t = {}) {
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
function KL({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
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
	}, [n]), p = f(() => GL(e, l), [e, l]), m = p.length;
	return {
		committedFlowLayouts: l,
		allVirtualPages: p,
		renderedVirtualPages: f(() => p.filter((e) => Xk(e.pageNum, m, t ?? void 0)), [
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
var qL = (e, t, n = !1, r, i) => {
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
	} : Wk(c, s, {
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
}, JL = (e, t = !1, n, r, i) => {
	let a = {
		payload: n,
		item: void 0,
		parent: void 0
	}, o = TA(e.pageComponentKeys, a, e.id).map((e) => {
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
	return Gk(e.id, o, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, YL = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], XL = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = YL(n), c = /* @__PURE__ */ new Map();
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
			return t ? JL(t, !0, o, i, f(t.id)) : qL(e, void 0, !0, i, f(e));
		}
		if (e.pageComponentKeys !== void 0) {
			let t = e;
			return JL(t, !0, o, i, f(t.id));
		}
		let t = e;
		return qL(t, void 0, !0, i, f(t.id));
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
}, ZL = Object.defineProperty, QL = (e, t) => ZL(e, "name", {
	value: t,
	configurable: !0
}), [$L, eR] = /* @__PURE__ */ al("AlertDialog", [Pj]), tR = Pj(), nR = /* @__PURE__ */ QL((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = tR(t);
	return /* @__PURE__ */ v(Lj, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = tR(n);
	return /* @__PURE__ */ v(zj, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var rR = /* @__PURE__ */ QL((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = tR(t);
	return /* @__PURE__ */ v(Uj, {
		...r,
		...n
	});
}, "AlertDialogPortal"), iR = e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = tR(n);
	return /* @__PURE__ */ v(Gj, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [aR, oR] = $L("AlertDialogContent"), sR = e.forwardRef(/* @__PURE__ */ QL(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = tR(r), s = tl(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ v(aR, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ v(Yj, {
			role: "alertdialog",
			...o,
			...a,
			ref: s,
			onOpenAutoFocus: Y(a.onOpenAutoFocus, (e) => {
				e.preventDefault(), c.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: i
		})
	});
}, "AlertDialogContent")), cR = e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = tR(n);
	return /* @__PURE__ */ v($j, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), lR = e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = tR(n);
	return /* @__PURE__ */ v(eM, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), uR = e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = tR(n);
	return /* @__PURE__ */ v(nM, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), dR = "AlertDialogCancel", fR = e.forwardRef(/* @__PURE__ */ QL(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = oR(dR, n), a = tR(n), o = tl(t, i);
	return /* @__PURE__ */ v(nM, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), pR = nR, mR = rR, hR = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(iR, {
	ref: n,
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/40 uhuu:backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
hR.displayName = iR.displayName;
var gR = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = as();
	return /* @__PURE__ */ y(mR, {
		container: r || void 0,
		children: [/* @__PURE__ */ v(hR, {}), /* @__PURE__ */ v(sR, {
			ref: n,
			"data-uhuu-editor": !0,
			className: K("uhuu:fixed uhuu:left-[50%] uhuu:top-[50%] uhuu:z-50 uhuu:w-full uhuu:max-w-md uhuu:translate-x-[-50%] uhuu:translate-y-[-50%] uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
gR.displayName = sR.displayName;
var _R = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:gap-2 uhuu:text-left", e),
	...t
});
_R.displayName = "AlertDialogHeader";
var vR = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:mt-6 uhuu:flex uhuu:flex-col-reverse uhuu:gap-2 uhuu:sm:flex-row uhuu:sm:justify-end", e),
	...t
});
vR.displayName = "AlertDialogFooter";
var yR = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(cR, {
	ref: n,
	className: K("uhuu:text-base uhuu:font-semibold uhuu:text-gray-900", e),
	...t
}));
yR.displayName = cR.displayName;
var bR = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(lR, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-600", e),
	...t
}));
bR.displayName = lR.displayName;
var xR = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(uR, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:bg-gray-900 uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-(--uhuu-shell-on-inverse) uhuu:transition-colors uhuu:hover:bg-gray-800", e),
	...t
}));
xR.displayName = uR.displayName;
var SR = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(fR, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:bg-gray-50", e),
	...t
}));
SR.displayName = fR.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/brand-kit-input.tsx
function CR({ kind: e, initialValue: t = "", onSubmit: n, onClose: r, returnFocus: i }) {
	let { t: a } = ic(), { portalContainer: o } = as(), s = nj(), c = u(), [d, f] = h(t), [p, g] = h(!1), [_, b] = h(""), x = m(!0);
	return l(() => (x.current = !0, () => {
		x.current = !1;
	}), []), /* @__PURE__ */ v(Lj, {
		open: !0,
		modal: !1,
		onOpenChange: (e) => {
			e || r();
		},
		children: /* @__PURE__ */ v(Uj, {
			container: o ?? void 0,
			children: /* @__PURE__ */ y(Yj, {
				"data-uhuu-editor": !0,
				className: K("uhuu:fixed uhuu:z-50 uhuu:w-96 uhuu:max-w-[calc(100vw-2rem)] uhuu:rounded-lg uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-4 uhuu:text-gray-900 uhuu:shadow-lg", s.side === "top" ? "uhuu:bottom-20" : "uhuu:top-20", s.align === "start" ? "uhuu:left-4" : "uhuu:right-4"),
				onCloseAutoFocus: (e) => {
					e.preventDefault(), i();
				},
				children: [
					/* @__PURE__ */ v($j, {
						className: "uhuu:text-sm uhuu:font-medium",
						children: a(`brandInput.${e}Title`)
					}),
					/* @__PURE__ */ v(eM, {
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
								children: [/* @__PURE__ */ v(bs, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: r,
									children: a("dialog.close")
								}), /* @__PURE__ */ v(bs, {
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
//#region src/uhuu/editor-shell/document/brand-kit-colors.tsx
function wR({ onClose: e, returnFocus: t }) {
	let { t: n } = ic(), { portalContainer: r } = as(), i = nj(), a = u(), o = Ck()?.brandKit, s = $O(o);
	return /* @__PURE__ */ v(Lj, {
		open: !0,
		modal: !1,
		onOpenChange: (t) => {
			t || e();
		},
		children: /* @__PURE__ */ v(Uj, {
			container: r ?? void 0,
			children: /* @__PURE__ */ y(Yj, {
				"data-uhuu-editor": !0,
				className: K("uhuu:fixed uhuu:z-50 uhuu:w-72 uhuu:max-w-[calc(100vw-2rem)] uhuu:rounded-lg uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-4 uhuu:text-gray-900 uhuu:shadow-lg", i.side === "top" ? "uhuu:bottom-20" : "uhuu:top-20", i.align === "start" ? "uhuu:left-4" : "uhuu:right-4"),
				onInteractOutside: (e) => e.preventDefault(),
				onCloseAutoFocus: (e) => {
					e.preventDefault(), t();
				},
				children: [
					/* @__PURE__ */ v($j, {
						className: "uhuu:text-sm uhuu:font-medium",
						children: n("brandColors.title")
					}),
					/* @__PURE__ */ v(eM, {
						className: "uhuu:mt-1 uhuu:text-xs uhuu:text-gray-500",
						children: n("brandColors.description")
					}),
					/* @__PURE__ */ v("div", {
						className: "uhuu:mt-3 uhuu:grid uhuu:gap-2",
						children: s.map(({ role: e, value: t }) => /* @__PURE__ */ y("label", {
							htmlFor: `${a}-${e}`,
							className: "uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:text-xs",
							children: [
								/* @__PURE__ */ v("input", {
									id: `${a}-${e}`,
									type: "color",
									value: t,
									onChange: (t) => ek(o, e, t.target.value),
									className: "uhuu:h-7 uhuu:w-9 uhuu:cursor-pointer uhuu:rounded uhuu:border uhuu:border-gray-300 uhuu:bg-transparent uhuu:p-0.5"
								}),
								/* @__PURE__ */ v("span", {
									className: "uhuu:flex-1 uhuu:font-medium uhuu:capitalize",
									children: e
								}),
								/* @__PURE__ */ v("span", {
									className: "uhuu:font-mono uhuu:text-gray-500",
									children: t
								})
							]
						}, e))
					}),
					/* @__PURE__ */ y("div", {
						className: "uhuu:mt-3 uhuu:flex uhuu:justify-end uhuu:gap-2",
						children: [/* @__PURE__ */ v(bs, {
							type: "button",
							variant: "ghost",
							size: "sm",
							onClick: tk,
							children: n("brandColors.reset")
						}), /* @__PURE__ */ v(bs, {
							type: "button",
							size: "sm",
							onClick: e,
							children: n("dialog.close")
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var TR = "__edit__", ER = "__print__";
function DR({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ y(O_, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "uhuu:flex uhuu:items-center uhuu:gap-2",
		children: [e ? /* @__PURE__ */ v(Po, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }) : /* @__PURE__ */ v("span", { className: "uhuu:w-3 uhuu:h-3" }), /* @__PURE__ */ v("span", {
			className: "uhuu:flex-1 uhuu:truncate",
			children: t
		})]
	});
}
function OR({ label: e, value: t }) {
	return /* @__PURE__ */ y(T_, {
		className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-4 uhuu:text-xs",
		children: [/* @__PURE__ */ v("span", {
			className: "uhuu:text-gray-700",
			children: e
		}), /* @__PURE__ */ y("span", {
			className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-gray-400",
			children: [t ? /* @__PURE__ */ v("span", {
				className: "uhuu:max-w-[110px] uhuu:truncate",
				children: t
			}) : null, /* @__PURE__ */ v(Io, { className: "uhuu:w-3.5 uhuu:h-3.5" })]
		})]
	});
}
function kR({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: TR,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: ER,
		label: "Print"
	}]], g = r ? TR : t || f[0] || ER, b = p.find((e) => e.value === g)?.label ?? "Edit", x = (t) => {
		t === TR ? i(!0) : (i(!1), t !== ER && e && e[t] && n?.(t, e[t]));
	}, S = nj(), C = pe() !== void 0, w = !C && !!c && c.length > 0;
	C && (d = void 0);
	let T = c?.find((e) => e.id === l)?.name, E = fk(), D = Ck(), O = D !== null && uk(), [k, A] = h(null), [j, M] = h(!1), N = $O(D?.brandKit).length > 0, P = m(null);
	return /* @__PURE__ */ y(_, { children: [
		/* @__PURE__ */ y(S_, {
			modal: !1,
			children: [/* @__PURE__ */ v(C_, {
				asChild: !0,
				children: /* @__PURE__ */ y(bs, {
					ref: P,
					variant: "ghost",
					size: "sm",
					className: `uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 ${r ? "" : "uhuu:bg-gray-100/80"}`,
					children: [/* @__PURE__ */ v(No, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
						className: "uhuu:text-[10px] uhuu:uppercase uhuu:tracking-wide",
						children: "Dev"
					})]
				})
			}), /* @__PURE__ */ y(D_, {
				onCloseAutoFocus: (e) => {
					(k || j) && e.preventDefault();
				},
				side: S.side,
				align: S.align,
				className: "uhuu:min-w-[200px]",
				children: [
					/* @__PURE__ */ y(w_, { children: [/* @__PURE__ */ v(OR, {
						label: "Print Preview",
						value: b
					}), /* @__PURE__ */ v(E_, {
						className: "uhuu:min-w-[180px]",
						children: p.map((e) => /* @__PURE__ */ v(DR, {
							checked: g === e.value,
							label: e.label,
							onSelect: () => x(e.value)
						}, e.value))
					})] }),
					(w || d || O || N) && /* @__PURE__ */ y(w_, { children: [/* @__PURE__ */ v(OR, {
						label: "Brand Kit",
						value: E !== null && O ? `Preview ${E}` : T
					}), /* @__PURE__ */ y(E_, {
						className: "uhuu:min-w-[200px]",
						children: [
							(c ?? []).map((e) => /* @__PURE__ */ v(DR, {
								checked: l === e.id,
								label: e.name,
								keepOpen: !0,
								onSelect: () => u?.(e.id)
							}, e.id)),
							d && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(M_, {}), /* @__PURE__ */ y(O_, {
								onSelect: () => A("add"),
								className: "uhuu:flex uhuu:items-center uhuu:gap-2",
								children: [/* @__PURE__ */ v(Jo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
									className: "uhuu:flex-1",
									children: "Add published kit…"
								})]
							})] }),
							N && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(M_, {}), /* @__PURE__ */ y(O_, {
								onSelect: () => M(!0),
								className: "uhuu:flex uhuu:items-center uhuu:gap-2",
								children: [/* @__PURE__ */ v(Ko, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
									className: "uhuu:flex-1",
									children: "Colors…"
								})]
							})] }),
							O && /* @__PURE__ */ y(_, { children: [
								(w || d) && /* @__PURE__ */ v(M_, {}),
								/* @__PURE__ */ y(O_, {
									onSelect: () => A("preview"),
									className: "uhuu:flex uhuu:items-center uhuu:gap-2",
									children: [/* @__PURE__ */ v(Bo, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
										className: "uhuu:flex-1",
										children: "Preview a version…"
									})]
								}),
								E !== null && /* @__PURE__ */ y(O_, {
									onSelect: () => pk(null),
									className: "uhuu:flex uhuu:items-center uhuu:gap-2",
									children: [/* @__PURE__ */ v(ts, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
										className: "uhuu:flex-1",
										children: "Stop preview"
									})]
								})
							] })
						]
					})] }),
					a && /* @__PURE__ */ y(_, { children: [
						/* @__PURE__ */ v(M_, {}),
						/* @__PURE__ */ v(j_, {
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
									children: /* @__PURE__ */ v(iL, {
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
		}),
		j && /* @__PURE__ */ v(wR, {
			onClose: () => M(!1),
			returnFocus: () => P.current?.focus()
		}),
		k && /* @__PURE__ */ v(CR, {
			kind: k,
			initialValue: k === "preview" ? E ?? "" : "",
			onSubmit: k === "add" ? (e) => d?.(e) : pk,
			onClose: () => A(null),
			returnFocus: () => P.current?.focus()
		})
	] });
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor.tsx
function AR(e) {
	let t = e?.uhuu_print_product?.component?.code ?? e?.component;
	return typeof t == "string" && t ? t : void 0;
}
var jR = {
	width: 210,
	height: 297
};
function MR(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function NR({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = ic();
	return e ? /* @__PURE__ */ v("div", {
		className: "uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-black/30",
		children: /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:border-gray-200/80 uhuu:shadow-xl uhuu:p-6 uhuu:w-full uhuu:max-w-sm uhuu:mx-4 uhuu:flex uhuu:flex-col uhuu:items-center uhuu:text-center",
			children: [
				/* @__PURE__ */ v("div", {
					className: "uhuu:rounded-full uhuu:bg-emerald-100 uhuu:p-3 uhuu:mb-4",
					children: /* @__PURE__ */ v(Po, {
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
					children: [/* @__PURE__ */ v(bs, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "uhuu:flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ v(bs, {
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
function PR({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: d, renderOverlay: p, renderPage: g, menuItems: b, gridColsClass: S, reorderTitle: C, reorderDescription: w, stateKey: T = Mk, onItemsChange: E, onStateChange: D, resolveNewItem: O, pageFilter: k, printConfigs: A, defaultZoomMode: j = "fit-page", toolbarPosition: M, brandKits: N, activeBrandKitId: P, onSelectBrandKit: F, onAddBrandKit: I, pageManagement: L = IR }) {
	let [R] = h(() => se.createScope()), z = L, te = o ?? jR, { interactive: B, setInteractive: ne, enableDevTools: re } = Vc(), V = Ee(), ie = Hc(), { portalContainer: ae } = as(), H = ic(), { t: oe, localize: le } = H, [ue, de] = h(null), [fe, pe] = h(null), [me, he] = h(void 0), [ge, _e] = h(0), [ve, ye] = h(0), be = c(_A), Se = be?.payload ?? a, Ce = AR(Se), we = k === void 0 && A && Ce ? A[Ce] : void 0;
	k === void 0 && A && Ce && !we && xe(`print-product:${Ce}`, `[uhuu-components] PageEditor: the payload names print product "${Ce}", which printConfigs has no entry for (${Object.keys(A).join(", ") || "none"}), so it prints every page with the template pageFormat. Add a printConfigs entry under that code, or pass pageFilter.`);
	let Te = ue ?? k ?? we?.filter, De = () => {
		ne(!0), he(void 0), de(null), pe(null);
	}, Oe = we?.pageFormat, ke = f(() => ee.mergePageFormat(te, fe ?? Oe), [
		te,
		fe,
		Oe
	]), [Ae, je] = h(!1), Me = !B && RL(ke, Te), Ne = ke?.preview ?? "single_page", Pe = Me ? "single_page" : Ne, Fe = f(() => {
		let e = LL(ke);
		return Ne === "two_pages" || Me ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		Ne,
		Me,
		ke
	]), Le = f(() => LL(te), [te]), Re = f(() => zk(t), [t]), ze = f(() => l?.length ? l.map((e) => "getValue" in e ? e : be?.setPageOptionValue ? yA(e, be.payload, be.setPageOptionValue) : (V && xe(`pageOptions:payload:${e.id}`, `[uhuu-components] PageEditor pageOptions "${e.id}" is payload-backed, which needs a TemplateDataProvider or the payload / onPayloadChange props; the option is left out.`), null)).filter(Boolean) : [], [
		l,
		be,
		V
	]), [Be, Ve] = h(null), [He, Ue] = h({ mode: "end" }), [We, Ge] = h(null), Ke = m(null), { items: qe, itemsWithPageNum: Je, availableItemsToAdd: Ye, addItem: Xe, removeItem: Ze, reorderItems: Qe, updateItemFields: $e, addDialogOpen: et, setAddDialogOpen: tt, openAddDialog: nt, itemsForReorder: rt, handleReorder: it } = BL({
		initialItems: Re,
		availableItems: n,
		payload: Se,
		stateKey: T,
		onItemsChange: E,
		onStateChange: D,
		resolveNewItem: O,
		notifyError: u
	}), at = f(() => VA({
		pageComponents: r,
		payload: Se,
		setup: Fe,
		i18n: H
	}), [
		r,
		Se,
		Fe,
		H
	]), ot = f(() => {
		let e = [];
		for (let t of Je) {
			let n = Nk(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = Nk(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: MR(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Je]), st = f(() => JSON.stringify({
		format: Fe?.format,
		orientation: Fe?.orientation,
		width: Fe?.width,
		height: Fe?.height,
		bleed: Fe?.bleed,
		showBleed: Fe?.showBleed,
		preview: Fe?.preview,
		flowPages: ot.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [Fe, ot]), ct = f(() => Ik(qe), [qe]), { committedFlowLayouts: lt, allVirtualPages: ut, renderedVirtualPages: dt, virtualTotalPageCount: ft, registerMeasurement: pt, pruneMeasurements: mt } = KL({
		logicalPages: ot,
		pageFilter: Te,
		layoutKey: st
	});
	ce(() => {
		R.commit(ot.filter((e) => e.hasFlow).map((e) => e.flowKey), lt);
	}), ce(() => () => R.suspend(), [R]), e.useEffect(() => () => R.unmount(), [R]);
	let ht = f(() => new Set(dt.map((e) => e.virtualPageId)), [dt]), gt = f(() => zL({
		pageFormat: Me ? ke : LL(ke),
		pageFilter: Te,
		pages: dt
	}), [
		Me,
		ke,
		Te,
		dt
	]), _t = gt.active ? gt.plan : null, vt = f(() => _t ? {
		...Fe,
		binding: gt.setup.binding
	} : Fe, [
		_t,
		Fe,
		gt.setup
	]);
	e.useEffect(() => {
		if (gt.warnings.length) for (let e of gt.warnings) xe(`cover-spread:${e}`, `[uhuu-components] PageEditor cover spread: ${e}`);
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
	let bt = WL({
		items: qe,
		reorderItems: Qe,
		availableItemsToAdd: Ye,
		setPendingInsertPosition: Ue,
		openAddDialog: nt
	}), xt = (e, t) => {
		let n = bt(e, t);
		return {
			onAddPage: z.add ? n.onAddPage : void 0,
			onMoveUp: z.reorder ? n.onMoveUp : void 0,
			onMoveDown: z.reorder ? n.onMoveDown : void 0,
			onDuplicate: z.duplicate ? n.onDuplicate : void 0
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
		let a = t.componentKey ?? t.id, o = re && d ? d(t) : null, s = re && d ? e.isValidElement(o) ? e.cloneElement(o, { opacity: ve }) : o : null, c = t.templateId ?? a, l = r[a], u = be?.getPagePayload ? be.getPagePayload(t) : gA(Se, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), f = eA(Se, t, i), p = NA({
			payload: Se,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ v(tI, {
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
			flowReadiness: R,
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
			children: /* @__PURE__ */ v(Oj, {
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
				children: /* @__PURE__ */ v(Ie, {
					setup: vt,
					children: /* @__PURE__ */ v(IL, {
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
		let r = !!t && Nk(t), i = r && t.pages[0]?.id === e.id, a = r ? le(t.label) || t.id : le(e.label) || oe("page.fallbackName", { number: e.pageNum });
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
				/* @__PURE__ */ v(NL, {
					name: a,
					canRename: z.rename,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: z.remove && ct > 1,
					onRename: (e) => $e(o.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Ze(o.id)
				}),
				/* @__PURE__ */ v("span", {
					className: "uhuu:pl-1",
					children: ze.length > 0 && /* @__PURE__ */ v(ML, {
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
			/* @__PURE__ */ v(YF, {
				variant: "secondary",
				className: "uhuu:font-normal uhuu:text-xs uhuu:bg-gray-100/80 uhuu:text-gray-700 uhuu:border-0",
				children: oe("toolbar.pages", { count: ft })
			}),
			re && /* @__PURE__ */ v(kR, {
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
			B && /* @__PURE__ */ y(_, { children: [z.add && Ye.length > 0 && /* @__PURE__ */ y(bs, {
				variant: "ghost",
				size: "sm",
				onClick: wt,
				title: oe("toolbar.addHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(Jo, { className: "uhuu:w-3.5 uhuu:h-3.5" }), oe("toolbar.add")]
			}), z.reorder && /* @__PURE__ */ y(bs, {
				variant: "ghost",
				size: "sm",
				onClick: () => je(!0),
				title: oe("toolbar.reorderHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(Lo, { className: "uhuu:w-3.5 uhuu:h-3.5" }), oe("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ y(_, { children: [
		yt.map((e) => Ot(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		re && !B && ae && x(/* @__PURE__ */ y(bs, {
			onClick: De,
			"data-uhuu-editor": !0,
			size: "sm",
			className: "uhuu-screen-only uhuu:fixed uhuu:top-4 uhuu:right-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:text-xs! uhuu:rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ v(ts, { className: "uhuu:w-4 uhuu:h-4" }), "Back to Editor"]
		}), ae),
		/* @__PURE__ */ v(kj, {
			defaultZoom: 80,
			defaultZoomMode: j,
			toolbarPosition: M,
			minZoom: 25,
			maxZoom: 200,
			menuItems: b ?? Nt,
			onAddPage: z.add ? wt : void 0,
			preview: Pe,
			children: _t ? _t.sheets.map(At) : Pe === "two_pages" ? Mt.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === We, l = s === We, u = (e, t) => xt(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ y(Tj, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(Oj, {
							title: `Sheet ${e.left.pageNum}`,
							controls: jt(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: Ot(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(Oj, {
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
					children: /* @__PURE__ */ v(Oj, {
						title: `Sheet ${e.pageNum}`,
						controls: jt(e, e.parentGroup, r),
						children: Ot(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${ge}-${me ?? "default"}`),
		B && !ie && /* @__PURE__ */ y(_, { children: [z.add && /* @__PURE__ */ v(pM, {
			open: et,
			onOpenChange: tt,
			availableItems: Ye,
			renderThumbnail: at,
			onSelectItem: St,
			payload: Se,
			setup: Le,
			gridColsClass: S,
			"data-uhuu-editor": !0
		}), z.reorder && /* @__PURE__ */ v(ZF, {
			open: Ae,
			onOpenChange: je,
			pages: rt,
			onReorder: (e) => {
				it(e), je(!1);
			},
			onRemove: z.remove ? (e) => Ze(e.id) : void 0,
			pageComponents: r,
			payload: Se,
			setup: Le,
			renderThumbnail: at,
			title: le(C) ?? oe("reorderDialog.title"),
			description: le(w) ?? oe("reorderDialog.description"),
			gridColsClass: S,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ v(NR, {
			label: Be ? le(Be.label) ?? Be.id : null,
			onDone: () => Ve(null),
			onAddAnother: () => {
				let e = Be;
				Ve(null), e && St(e);
			}
		})
	] });
}
function FR(e) {
	let { templateConfig: t, ...n } = e;
	return c(_A) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ v(PR, { ...n }) : /* @__PURE__ */ v(vA, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ v(PR, { ...n })
	});
}
var IR = xA();
function LR(t) {
	let n = c(_A), { t: r } = ic(), i = n?.payload ?? t.payload, a = e.useMemo(() => XL({
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
	}, [u]), f = e.useMemo(() => Vk(i, t.stateKey ?? "uhuu_page_editor"), [i, t.stateKey]), p = e.useMemo(() => {
		let e = t.templateConfig.pageManagement;
		return e != null && typeof e != "object" && console.warn(`[uhuu-components] templateConfig.pageManagement takes an object, e.g. { locked: true }; ${JSON.stringify(e)} is ignored and every page-management control stays on.`), xA(e);
	}, [t.templateConfig.pageManagement]), m = e.useMemo(() => AA({
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
	]), h = Oe(t.view);
	return Me(h), /* @__PURE__ */ y(Pe.Provider, {
		value: !0,
		children: [/* @__PURE__ */ v(ke.Provider, {
			value: h,
			children: /* @__PURE__ */ v(FR, {
				...t,
				payload: i,
				initialItems: m,
				availableItems: p.add || p.duplicate ? a.availableItems : [],
				pageManagement: p,
				pageComponents: a.pageComponents,
				spineComponent: o,
				notifyError: d
			})
		}), /* @__PURE__ */ v(pR, {
			open: s.open,
			onOpenChange: (e) => {
				e || l({
					open: !1,
					message: ""
				});
			},
			children: /* @__PURE__ */ y(gR, { children: [/* @__PURE__ */ y(_R, { children: [/* @__PURE__ */ v(yR, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ v(bR, { children: s.message })] }), /* @__PURE__ */ v(vR, { children: /* @__PURE__ */ v(xR, {
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
function RR(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = zR(t, e);
				if (n != null) return n;
			}
		} else return zR(t, e);
	}
}
function zR(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function BR(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = RR(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function VR(e, t, n) {
	return e(t, n);
}
function HR(e, t, n) {
	if (typeof e == "function") return VR(e, t, n);
	if (!e || typeof e != "object") throw TypeError("[uhuu-components] useIntegrationAdapter needs a `resolver`: a map of keys to paths or functions, or one function (integration, payload) => data.");
	return BR(e, t, n);
}
function UR(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function WR(e, t, n = {}, r, i = null) {
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
function GR(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a } = t, o = e.useMemo(() => HR(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), s = e.useMemo(() => UR(n, r, a), [
		n,
		r,
		a
	]), c = e.useCallback((e, t = {}, r) => WR(n, e, t, r, s), [n, s]), l = e.useCallback((e, t = {}, n) => {
		let r = c(e, t, n);
		return r ? Pr({ dialog: r }) : {};
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
var KR = sA, qR = hA;
function JR(e, t) {
	return uA(e, t);
}
function YR(e) {
	return typeof e?.editor?.post == "function" ? "patch" : typeof e?.editDialog == "function" ? "dialog" : "none";
}
var XR = 1500;
function ZR(e, t) {
	return {
		action: "patchPayload",
		patch: { [KR(e)]: hA(e, t) }
	};
}
function QR(e, t, n = (e) => typeof e == "string" ? e : void 0) {
	let r = KR(e), i = n(e.label) ?? r, a = oA(e);
	if (a === "toggle") return {
		path: r,
		type: "switch",
		label: i,
		value: pA(t)
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
var $R = "unknown", ez = !1, tz = !1, nz = "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500";
function rz() {
	return typeof window > "u" ? void 0 : window.$uhuu;
}
function iz(e) {
	let [t, n] = h(null);
	return l(() => {
		if (!e || typeof document > "u" || ps()) return;
		let t = os();
		return document.body.appendChild(t), n(t), () => {
			t.remove(), n(null);
		};
	}, [e]), e ? t : null;
}
function az({ payload: e, options: t, title: n, onChange: r, toolbarPosition: i, className: a, style: o }) {
	let { interactive: d } = Vc(), { t: p, localize: g } = ic(), _ = c(_A), b = e ?? _?.payload ?? null, S = f(() => {
		let e = Array.isArray(t) ? t : [], n = e.filter((e) => typeof sA(e) == "string");
		return n.length !== e.length && !tz && (tz = !0, console.warn("[uhuu-components] DocumentOptions: an option without `id` (or `field`) is left out.")), n;
	}, [t]), C = f(() => new Map(S.map((e) => [KR(e), e])), [S]), w = d && !le() && S.length > 0, T = ms(), E = as(), D = iz(w && !T && !E.inProvider), O = T ?? E.portalContainer ?? D, k = u(), A = `${k}-panel`, j = `${k}-heading`, M = m(null), N = m(null), P = m(null), [F, I] = h(!1), [L, ee] = h({
		side: "top",
		align: "end"
	}), [, R] = h($R), [z, te] = h({}), B = m(z), ne = s((e) => {
		B.current = e, te(e);
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
			let e = C.get(r), a = e ? JR(b, e) : void 0;
			e && Object.is(a, i.previousValue) ? t[r] = i : (n = !0, ie(r), e && $R === "unknown" && dA(a, i.value) && ($R = "supported", R($R)));
		}
		n && ne(t);
	}, [
		b,
		C,
		ne,
		ie
	]);
	let ae = (e) => {
		let t = JR(b, e), n = z[KR(e)];
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
		let t = rz();
		typeof t?.editDialog == "function" && (t.editDialog(QR(e, JR(b, e), g)), I(!1));
	}, ce = (e, t) => {
		let n = KR(e);
		ez || (ez = !0, console.warn("[uhuu-components] DocumentOptions: no uhuu document editor on this page; a change only calls onChange.")), ne({
			...B.current,
			[n]: {
				value: t,
				previousValue: JR(b, e),
				token: ++re.current
			}
		}), r?.(n, t);
	}, ue = (e, t) => {
		let n = rz(), r = YR(n), i = KR(e), a = qR(e, t);
		if (r === "patch" && $R !== "unsupported") {
			let t = ++re.current;
			if (ne({
				...B.current,
				[i]: {
					value: a,
					previousValue: JR(b, e),
					token: t
				}
			}), n.editor.post(ZR(e, a)), $R === "supported") return;
			ie(i), V.current.set(i, setTimeout(() => {
				V.current.delete(i);
				let n = B.current[i];
				if (!n || n.token !== t || $R !== "unknown") return;
				$R = "unsupported", R($R);
				let { [i]: r, ...o } = B.current;
				typeof rz()?.editDialog == "function" ? (ne(o), se(e)) : ce(e, a);
			}, XR));
		} else typeof n?.editDialog == "function" ? se(e) : ce(e, a);
	};
	if (!w || !O || typeof document > "u") return null;
	let de = g(n) ?? p("documentOptions.title"), fe = rz(), pe = YR(fe), me = typeof fe?.editDialog == "function" && (pe === "dialog" || pe === "patch" && $R === "unsupported"), he = (e) => {
		let t = KR(e), n = g(e.label) ?? t, r = ae(e), i = oA(e), a = i === "toggle" ? void 0 : fA(e, r), o = i === "toggle" ? p(pA(r) ? "documentOptions.on" : "documentOptions.off") : a ? g(a.label) ?? String(a.value) : r == null || r === "" ? p("options.notSet") : String(r), s = g(e.description), c = `${k}-${t}-label`, l = `${k}-${t}-description`;
		return /* @__PURE__ */ y("div", {
			className: "uhuu:flex uhuu:flex-col uhuu:gap-1.5",
			children: [
				/* @__PURE__ */ v("span", {
					id: c,
					className: K(nz, "uhuu:block"),
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
					}), /* @__PURE__ */ v(qo, {
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
		className: K("uhuu-screen-only uhuu:relative uhuu:flex uhuu:items-center", T && a),
		style: T ? o : void 0,
		onKeyDown: (e) => {
			e.key === "Escape" && F && (e.preventDefault(), e.stopPropagation(), H(!0));
		},
		onBlur: (e) => {
			let t = e.relatedTarget;
			F && t && !M.current?.contains(t) && I(!1);
		},
		children: [/* @__PURE__ */ y(bs, {
			ref: N,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-haspopup": "dialog",
			"aria-expanded": F,
			"aria-controls": F ? A : void 0,
			onClick: () => F ? H(!1) : oe(),
			className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 uhuu:gap-1.5",
			children: [/* @__PURE__ */ v(Xo, {
				"aria-hidden": "true",
				className: "uhuu:w-3.5 uhuu:h-3.5"
			}), de]
		}), F && /* @__PURE__ */ y("div", {
			ref: P,
			id: A,
			role: "dialog",
			"aria-labelledby": j,
			className: K("uhuu:absolute uhuu:z-50 uhuu:w-72 uhuu:max-w-[calc(100vw-2rem)] uhuu:overflow-y-auto uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-3 uhuu:text-gray-900 uhuu:shadow-md", L.side === "top" ? "uhuu:bottom-full uhuu:mb-3" : "uhuu:top-full uhuu:mt-3", L.align === "end" ? "uhuu:right-0" : "uhuu:left-0"),
			style: { maxHeight: L.maxHeight },
			children: [/* @__PURE__ */ v("h2", {
				id: j,
				className: "uhuu:mb-3 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900",
				children: de
			}), /* @__PURE__ */ v(kL, { children: S.map((e) => me ? he(e) : /* @__PURE__ */ v(OL, {
				definition: e,
				value: ae(e),
				onChange: (t) => ue(e, t)
			}, KR(e))) })]
		})]
	});
	if (T) return x(ge, T);
	let _e = KA(i) ? i : HA;
	return x(/* @__PURE__ */ v("div", {
		"data-uhuu-editor": !0,
		"data-uhuu-toolbar-position": _e,
		className: K("uhuu-screen-only uhuu:fixed uhuu:z-50 uhuu:flex uhuu:items-center uhuu:p-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm", WA[_e], a),
		style: o,
		children: ge
	}), O);
}
//#endregion
//#region src/uhuu/image/image-block.tsx
var oz = [
	"className",
	"style",
	"imageStyle",
	"imageProps",
	"renderImage",
	"placeholder"
], sz = (e) => {
	let { t } = ic(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = f(() => {
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
	]), o = Ee(), s = a === "auto" ? "" : oz.filter((t) => e[t] !== void 0).join(", ");
	o && s && xe(`image-block:${a}:${s}`, `[uhuu-components] ImageBlock in "${a}" mode does not apply ${s}: the image is positioned on the page by its geometry. Style the image with imageClassName, or wrap the ImageBlock.`);
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
	if (a === "auto") return /* @__PURE__ */ v(R_, {
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
		return c && (n || r?.length || i) ? /* @__PURE__ */ v(B_, {
			className: m,
			style: g,
			overlaySvg: n,
			overlayClassName: k,
			options: r,
			dialog: i,
			dialogProps: A,
			spreadProps: e,
			children: M
		}) : /* @__PURE__ */ v(yo, { ...e });
	}
	return c && (n || r?.length || i) ? /* @__PURE__ */ v(z_, {
		className: m,
		style: g,
		overlaySvg: n,
		overlayClassName: k,
		options: r,
		dialog: i,
		dialogProps: A,
		bleedProps: L,
		children: M
	}) : /* @__PURE__ */ v(bo, { ...L });
}, cz = {
	Pagination: Ie,
	Sheet: Le,
	usePaginationHold: Be,
	useView: Ne
}, lz = {
	Page: Qt,
	Area: Zt,
	Items: Dn,
	Columns: On,
	Text: ln,
	Document: hi,
	fromMarkdown: Ai,
	fromHtml: ai,
	planChunks: wt,
	planColumnChunks: Ft,
	measure: Ge
}, uz = {
	Block: Fv,
	open: Mv,
	editDialog: jv
}, dz = {
	Editable: Vr,
	getDialogProps: Pr
}, fz = {
	Provider: Sk,
	useBrandKit: Ck,
	publicBaseUrl: oO,
	selection: mO,
	load: hO
}, pz = {
	TemplateDataProvider: vA,
	PageEditor: LR,
	InteractiveModeProvider: Uc,
	useInteractive: Vc,
	useIntegrationAdapter: GR,
	DocumentOptions: az
};
//#endregion
export { fz as BrandKit, dz as Editing, pz as EditorShell, lz as Flow, uz as Frame, sz as ImageBlock, cz as Static, J_ as imageUrl };
