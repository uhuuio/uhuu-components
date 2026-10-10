(function(){(function(e,t){try{if(typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0];if(!n)return;let r=t&&t.styleId||`uhuu-components-styles`,i=document.getElementById(r);i||(i=document.createElement(`style`),i.setAttribute(`id`,r),t&&t.attributes&&Object.entries(t.attributes).forEach(([e,t])=>{try{i.setAttribute(e,t)}catch{}})),i.textContent!==e&&(i.textContent=e),i.parentNode!==n&&(n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i))}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--uhuu-tw-translate-x:0;--uhuu-tw-translate-y:0;--uhuu-tw-translate-z:0;--uhuu-tw-scale-x:1;--uhuu-tw-scale-y:1;--uhuu-tw-scale-z:1;--uhuu-tw-space-y-reverse:0;--uhuu-tw-border-style:solid;--uhuu-tw-leading:initial;--uhuu-tw-font-weight:initial;--uhuu-tw-tracking:initial;--uhuu-tw-ordinal:initial;--uhuu-tw-slashed-zero:initial;--uhuu-tw-numeric-figure:initial;--uhuu-tw-numeric-spacing:initial;--uhuu-tw-numeric-fraction:initial;--uhuu-tw-shadow:0 0 #0000;--uhuu-tw-shadow-color:initial;--uhuu-tw-shadow-alpha:100%;--uhuu-tw-inset-shadow:0 0 #0000;--uhuu-tw-inset-shadow-color:initial;--uhuu-tw-inset-shadow-alpha:100%;--uhuu-tw-ring-color:initial;--uhuu-tw-ring-shadow:0 0 #0000;--uhuu-tw-inset-ring-color:initial;--uhuu-tw-inset-ring-shadow:0 0 #0000;--uhuu-tw-ring-inset:initial;--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-color:#fff;--uhuu-tw-ring-offset-shadow:0 0 #0000;--uhuu-tw-outline-style:solid;--uhuu-tw-blur:initial;--uhuu-tw-brightness:initial;--uhuu-tw-contrast:initial;--uhuu-tw-grayscale:initial;--uhuu-tw-hue-rotate:initial;--uhuu-tw-invert:initial;--uhuu-tw-opacity:initial;--uhuu-tw-saturate:initial;--uhuu-tw-sepia:initial;--uhuu-tw-drop-shadow:initial;--uhuu-tw-drop-shadow-color:initial;--uhuu-tw-drop-shadow-alpha:100%;--uhuu-tw-drop-shadow-size:initial;--uhuu-tw-backdrop-blur:initial;--uhuu-tw-backdrop-brightness:initial;--uhuu-tw-backdrop-contrast:initial;--uhuu-tw-backdrop-grayscale:initial;--uhuu-tw-backdrop-hue-rotate:initial;--uhuu-tw-backdrop-invert:initial;--uhuu-tw-backdrop-opacity:initial;--uhuu-tw-backdrop-saturate:initial;--uhuu-tw-backdrop-sepia:initial;--uhuu-tw-duration:initial;--uhuu-tw-ease:initial;--uhuu-tw-space-x-reverse:0}*,:before,:after,::backdrop{--uhuu-tw-outline-style:solid}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--uhuu-font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-neutral-50:oklch(98.5% 0 none);--uhuu-color-black:#000;--uhuu-color-white:#fff;--uhuu-spacing:.25rem;--uhuu-container-xs:20rem;--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-tracking-wide:.025em;--uhuu-tracking-widest:.1em;--uhuu-leading-tight:1.25;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-ease-in-out:cubic-bezier(.4, 0, .2, 1);--uhuu-blur-sm:8px;--uhuu-blur-md:12px;--uhuu-default-transition-duration:.15s;--uhuu-default-transition-timing-function:cubic-bezier(.4, 0, .2, 1)}:root:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:root:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *),:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base;@layer components{@media screen{[data-uhuu-interactive] [data-uhuu-flow-unplaceable=true],[data-uhuu-portal] [data-uhuu-flow-unplaceable=true]{outline-offset:-2px;outline:2px dashed #dc2626}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)){background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc' fill-opacity='.2'/%3E%3C/svg%3E")}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover){outline-offset:-1px;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc'/%3E%3C/svg%3E");outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}}}@layer utilities{.uhuu-page-overlay{pointer-events:none;color:var(--color-gray-600,oklch(44.6% .03 256.802));justify-content:space-between;align-items:center;font-size:7pt;display:flex;position:absolute;bottom:10mm;left:15mm;right:15mm}.uhuu-flow-page{flex-direction:column;width:100%;height:100%;display:flex}.uhuu-flow-page-area{flex:1;min-height:0}[data-uhuu-flow-area]:has([data-uhuu-flow-unplaceable]){overflow:clip}.uhuu-flow-document{width:100%}.uhuu-image-block{position:relative}.uhuu-image-block-fill{width:100%;height:100%}.uhuu-image-body{width:100%;height:100%;position:relative}.uhuu-image-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img:where(.object-cover){-o-object-fit:cover;object-fit:cover}.uhuu-image-img:where(.object-contain){-o-object-fit:contain;object-fit:contain}.uhuu-image-img:where(.object-fill){-o-object-fit:fill;object-fit:fill}.uhuu-image-img:where(.object-center){-o-object-position:center;object-position:center}.uhuu-image-img:where(.object-top){-o-object-position:top;object-position:top}.uhuu-image-img:where(.object-bottom){-o-object-position:bottom;object-position:bottom}.uhuu-image-img:where(.object-left){-o-object-position:left;object-position:left}.uhuu-image-img:where(.object-right){-o-object-position:right;object-position:right}.uhuu-image-img:where(.object-left-top){-o-object-position:left top;object-position:left top}.uhuu-image-img:where(.object-right-top){-o-object-position:right top;object-position:right top}.uhuu-image-img:where(.object-left-bottom){-o-object-position:left bottom;object-position:left bottom}.uhuu-image-img:where(.object-right-bottom){-o-object-position:right bottom;object-position:right bottom}.uhuu-image-overlay{z-index:10;pointer-events:none;position:absolute;inset:0}.uhuu-image-overlay-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img,.uhuu-image-overlay-img,:where(.uhuu-image-inner) .cover-image,:where(.uhuu-image-overlay)>svg{display:block}}[data-uhuu-interactive] .uhuu\\:pointer-events-auto,[data-uhuu-portal] .uhuu\\:pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .uhuu\\:pointer-events-none,[data-uhuu-portal] .uhuu\\:pointer-events-none{pointer-events:none}[data-uhuu-interactive] .uhuu\\:sr-only,[data-uhuu-portal] .uhuu\\:sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .uhuu\\:absolute,[data-uhuu-portal] .uhuu\\:absolute{position:absolute}[data-uhuu-interactive] .uhuu\\:fixed,[data-uhuu-portal] .uhuu\\:fixed{position:fixed}[data-uhuu-interactive] .uhuu\\:relative,[data-uhuu-portal] .uhuu\\:relative{position:relative}[data-uhuu-interactive] .uhuu\\:inset-0,[data-uhuu-portal] .uhuu\\:inset-0{inset:0}[data-uhuu-interactive] .uhuu\\:inset-x-0,[data-uhuu-portal] .uhuu\\:inset-x-0{inset-inline:0}[data-uhuu-interactive] .uhuu\\:inset-y-0,[data-uhuu-portal] .uhuu\\:inset-y-0{inset-block:0}[data-uhuu-interactive] .uhuu\\:-top-3,[data-uhuu-portal] .uhuu\\:-top-3{top:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:top-0,[data-uhuu-portal] .uhuu\\:top-0{top:0}[data-uhuu-interactive] .uhuu\\:top-1\\/2,[data-uhuu-portal] .uhuu\\:top-1\\/2{top:50%}[data-uhuu-interactive] .uhuu\\:top-2,[data-uhuu-portal] .uhuu\\:top-2{top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:top-3,[data-uhuu-portal] .uhuu\\:top-3{top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:top-4,[data-uhuu-portal] .uhuu\\:top-4{top:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:top-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .uhuu\\:-right-3,[data-uhuu-portal] .uhuu\\:-right-3{right:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:right-0,[data-uhuu-portal] .uhuu\\:right-0{right:0}[data-uhuu-interactive] .uhuu\\:right-2,[data-uhuu-portal] .uhuu\\:right-2{right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:right-4,[data-uhuu-portal] .uhuu\\:right-4{right:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-0,[data-uhuu-portal] .uhuu\\:bottom-0{bottom:0}[data-uhuu-interactive] .uhuu\\:bottom-2,[data-uhuu-portal] .uhuu\\:bottom-2{bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:bottom-4,[data-uhuu-portal] .uhuu\\:bottom-4{bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:left-0,[data-uhuu-portal] .uhuu\\:left-0{left:0}[data-uhuu-interactive] .uhuu\\:left-2,[data-uhuu-portal] .uhuu\\:left-2{left:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:left-3,[data-uhuu-portal] .uhuu\\:left-3{left:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:left-4,[data-uhuu-portal] .uhuu\\:left-4{left:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:left-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .uhuu\\:z-10,[data-uhuu-portal] .uhuu\\:z-10{z-index:10}[data-uhuu-interactive] .uhuu\\:z-20,[data-uhuu-portal] .uhuu\\:z-20{z-index:20}[data-uhuu-interactive] .uhuu\\:z-30,[data-uhuu-portal] .uhuu\\:z-30{z-index:30}[data-uhuu-interactive] .uhuu\\:z-50,[data-uhuu-portal] .uhuu\\:z-50{z-index:50}[data-uhuu-interactive] .uhuu\\:z-\\[2\\],[data-uhuu-portal] .uhuu\\:z-\\[2\\]{z-index:2}[data-uhuu-interactive] .uhuu\\:-mx-1,[data-uhuu-portal] .uhuu\\:-mx-1{margin-inline:calc(var(--uhuu-spacing) * -1)}[data-uhuu-interactive] .uhuu\\:mx-0\\.5,[data-uhuu-portal] .uhuu\\:mx-0\\.5{margin-inline:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mx-4,[data-uhuu-portal] .uhuu\\:mx-4{margin-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mx-auto,[data-uhuu-portal] .uhuu\\:mx-auto{margin-inline:auto}[data-uhuu-interactive] .uhuu\\:my-1,[data-uhuu-portal] .uhuu\\:my-1{margin-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:my-1\\.5,[data-uhuu-portal] .uhuu\\:my-1\\.5{margin-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:mt-0\\.5,[data-uhuu-portal] .uhuu\\:mt-0\\.5{margin-top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mt-1,[data-uhuu-portal] .uhuu\\:mt-1{margin-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mt-6,[data-uhuu-portal] .uhuu\\:mt-6{margin-top:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:mr-2,[data-uhuu-portal] .uhuu\\:mr-2{margin-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mr-8,[data-uhuu-portal] .uhuu\\:mr-8{margin-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:mb-0\\.5,[data-uhuu-portal] .uhuu\\:mb-0\\.5{margin-bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mb-1,[data-uhuu-portal] .uhuu\\:mb-1{margin-bottom:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mb-2,[data-uhuu-portal] .uhuu\\:mb-2{margin-bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mb-3,[data-uhuu-portal] .uhuu\\:mb-3{margin-bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mb-4,[data-uhuu-portal] .uhuu\\:mb-4{margin-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mb-5,[data-uhuu-portal] .uhuu\\:mb-5{margin-bottom:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:mb-6,[data-uhuu-portal] .uhuu\\:mb-6{margin-bottom:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:ml-1,[data-uhuu-portal] .uhuu\\:ml-1{margin-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:ml-auto,[data-uhuu-portal] .uhuu\\:ml-auto{margin-left:auto}[data-uhuu-interactive] .uhuu\\:block,[data-uhuu-portal] .uhuu\\:block{display:block}[data-uhuu-interactive] .uhuu\\:flex,[data-uhuu-portal] .uhuu\\:flex{display:flex}[data-uhuu-interactive] .uhuu\\:hidden,[data-uhuu-portal] .uhuu\\:hidden{display:none}[data-uhuu-interactive] .uhuu\\:inline-block,[data-uhuu-portal] .uhuu\\:inline-block{display:inline-block}[data-uhuu-interactive] .uhuu\\:inline-flex,[data-uhuu-portal] .uhuu\\:inline-flex{display:inline-flex}[data-uhuu-interactive] .uhuu\\:size-3,[data-uhuu-portal] .uhuu\\:size-3{width:calc(var(--uhuu-spacing) * 3);height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:size-3\\.5,[data-uhuu-portal] .uhuu\\:size-3\\.5{width:calc(var(--uhuu-spacing) * 3.5);height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:size-4,[data-uhuu-portal] .uhuu\\:size-4{width:calc(var(--uhuu-spacing) * 4);height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-1\\.5,[data-uhuu-portal] .uhuu\\:h-1\\.5{height:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:h-3,[data-uhuu-portal] .uhuu\\:h-3{height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:h-3\\.5,[data-uhuu-portal] .uhuu\\:h-3\\.5{height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:h-4,[data-uhuu-portal] .uhuu\\:h-4{height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-5,[data-uhuu-portal] .uhuu\\:h-5{height:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:h-6,[data-uhuu-portal] .uhuu\\:h-6{height:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:h-7,[data-uhuu-portal] .uhuu\\:h-7{height:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:h-8,[data-uhuu-portal] .uhuu\\:h-8{height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:h-9,[data-uhuu-portal] .uhuu\\:h-9{height:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:h-10,[data-uhuu-portal] .uhuu\\:h-10{height:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:h-11,[data-uhuu-portal] .uhuu\\:h-11{height:calc(var(--uhuu-spacing) * 11)}[data-uhuu-interactive] .uhuu\\:h-12,[data-uhuu-portal] .uhuu\\:h-12{height:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:h-16,[data-uhuu-portal] .uhuu\\:h-16{height:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:h-\\[90vh\\],[data-uhuu-portal] .uhuu\\:h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .uhuu\\:h-full,[data-uhuu-portal] .uhuu\\:h-full{height:100%}[data-uhuu-interactive] .uhuu\\:h-px,[data-uhuu-portal] .uhuu\\:h-px{height:1px}[data-uhuu-interactive] .uhuu\\:min-h-0,[data-uhuu-portal] .uhuu\\:min-h-0{min-height:0}[data-uhuu-interactive] .uhuu\\:w-3,[data-uhuu-portal] .uhuu\\:w-3{width:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:w-3\\.5,[data-uhuu-portal] .uhuu\\:w-3\\.5{width:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:w-3\\/4,[data-uhuu-portal] .uhuu\\:w-3\\/4{width:75%}[data-uhuu-interactive] .uhuu\\:w-4,[data-uhuu-portal] .uhuu\\:w-4{width:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:w-6,[data-uhuu-portal] .uhuu\\:w-6{width:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:w-7,[data-uhuu-portal] .uhuu\\:w-7{width:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:w-8,[data-uhuu-portal] .uhuu\\:w-8{width:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-9,[data-uhuu-portal] .uhuu\\:w-9{width:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:w-10,[data-uhuu-portal] .uhuu\\:w-10{width:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:w-12,[data-uhuu-portal] .uhuu\\:w-12{width:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:w-16,[data-uhuu-portal] .uhuu\\:w-16{width:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:w-20,[data-uhuu-portal] .uhuu\\:w-20{width:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:w-24,[data-uhuu-portal] .uhuu\\:w-24{width:calc(var(--uhuu-spacing) * 24)}[data-uhuu-interactive] .uhuu\\:w-40,[data-uhuu-portal] .uhuu\\:w-40{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:w-48,[data-uhuu-portal] .uhuu\\:w-48{width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:w-52,[data-uhuu-portal] .uhuu\\:w-52{width:calc(var(--uhuu-spacing) * 52)}[data-uhuu-interactive] .uhuu\\:w-full,[data-uhuu-portal] .uhuu\\:w-full{width:100%}[data-uhuu-interactive] .uhuu\\:w-px,[data-uhuu-portal] .uhuu\\:w-px{width:1px}[data-uhuu-interactive] .uhuu\\:max-w-\\[110px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .uhuu\\:max-w-\\[120px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .uhuu\\:max-w-\\[140px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .uhuu\\:max-w-md,[data-uhuu-portal] .uhuu\\:max-w-md{max-width:var(--uhuu-container-md)}[data-uhuu-interactive] .uhuu\\:max-w-none,[data-uhuu-portal] .uhuu\\:max-w-none{max-width:none}[data-uhuu-interactive] .uhuu\\:max-w-sm,[data-uhuu-portal] .uhuu\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:max-w-xs,[data-uhuu-portal] .uhuu\\:max-w-xs{max-width:var(--uhuu-container-xs)}[data-uhuu-interactive] .uhuu\\:min-w-0,[data-uhuu-portal] .uhuu\\:min-w-0{min-width:0}[data-uhuu-interactive] .uhuu\\:min-w-44,[data-uhuu-portal] .uhuu\\:min-w-44{min-width:calc(var(--uhuu-spacing) * 44)}[data-uhuu-interactive] .uhuu\\:min-w-48,[data-uhuu-portal] .uhuu\\:min-w-48{min-width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:min-w-\\[1rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[8rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[24px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .uhuu\\:min-w-\\[180px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .uhuu\\:min-w-\\[200px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .uhuu\\:flex-1,[data-uhuu-portal] .uhuu\\:flex-1{flex:1}[data-uhuu-interactive] .uhuu\\:shrink-0,[data-uhuu-portal] .uhuu\\:shrink-0{flex-shrink:0}[data-uhuu-interactive] .uhuu\\:shrink-0\\!,[data-uhuu-portal] .uhuu\\:shrink-0\\!{flex-shrink:0!important}[data-uhuu-interactive] .uhuu\\:grow,[data-uhuu-portal] .uhuu\\:grow{flex-grow:1}[data-uhuu-interactive] .uhuu\\:translate-x-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-x-\\[-50\\%\\]{--uhuu-tw-translate-x:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:-translate-y-1\\/2,[data-uhuu-portal] .uhuu\\:-translate-y-1\\/2{--uhuu-tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:translate-y-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-y-\\[-50\\%\\]{--uhuu-tw-translate-y:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:scale-105,[data-uhuu-portal] .uhuu\\:scale-105{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:scale-110,[data-uhuu-portal] .uhuu\\:scale-110{--uhuu-tw-scale-x:110%;--uhuu-tw-scale-y:110%;--uhuu-tw-scale-z:110%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:rotate-2,[data-uhuu-portal] .uhuu\\:rotate-2{rotate:2deg}[data-uhuu-interactive] .uhuu\\:rotate-45,[data-uhuu-portal] .uhuu\\:rotate-45{rotate:45deg}[data-uhuu-interactive] .uhuu\\:cursor-default,[data-uhuu-portal] .uhuu\\:cursor-default{cursor:default}[data-uhuu-interactive] .uhuu\\:cursor-grab,[data-uhuu-portal] .uhuu\\:cursor-grab{cursor:grab}[data-uhuu-interactive] .uhuu\\:cursor-pointer,[data-uhuu-portal] .uhuu\\:cursor-pointer{cursor:pointer}[data-uhuu-interactive] .uhuu\\:touch-none,[data-uhuu-portal] .uhuu\\:touch-none{touch-action:none}[data-uhuu-interactive] .uhuu\\:flex-col,[data-uhuu-portal] .uhuu\\:flex-col{flex-direction:column}[data-uhuu-interactive] .uhuu\\:flex-col-reverse,[data-uhuu-portal] .uhuu\\:flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .uhuu\\:flex-wrap,[data-uhuu-portal] .uhuu\\:flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .uhuu\\:items-center,[data-uhuu-portal] .uhuu\\:items-center{align-items:center}[data-uhuu-interactive] .uhuu\\:items-end,[data-uhuu-portal] .uhuu\\:items-end{align-items:flex-end}[data-uhuu-interactive] .uhuu\\:items-start,[data-uhuu-portal] .uhuu\\:items-start{align-items:flex-start}[data-uhuu-interactive] .uhuu\\:justify-between,[data-uhuu-portal] .uhuu\\:justify-between{justify-content:space-between}[data-uhuu-interactive] .uhuu\\:justify-center,[data-uhuu-portal] .uhuu\\:justify-center{justify-content:center}[data-uhuu-interactive] .uhuu\\:justify-end,[data-uhuu-portal] .uhuu\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:justify-start,[data-uhuu-portal] .uhuu\\:justify-start{justify-content:flex-start}[data-uhuu-interactive] .uhuu\\:gap-0,[data-uhuu-portal] .uhuu\\:gap-0{gap:0}[data-uhuu-interactive] .uhuu\\:gap-1,[data-uhuu-portal] .uhuu\\:gap-1{gap:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:gap-1\\.5,[data-uhuu-portal] .uhuu\\:gap-1\\.5{gap:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:gap-2,[data-uhuu-portal] .uhuu\\:gap-2{gap:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:gap-3,[data-uhuu-portal] .uhuu\\:gap-3{gap:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:gap-4,[data-uhuu-portal] .uhuu\\:gap-4{gap:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] :where(.uhuu\\:space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-1\\.5>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 1.5) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 1.5) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] :where(.uhuu\\:space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-2>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] :where(.uhuu\\:space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-3>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 3) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 3) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] .uhuu\\:truncate,[data-uhuu-portal] .uhuu\\:truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-auto,[data-uhuu-portal] .uhuu\\:overflow-auto{overflow:auto}[data-uhuu-interactive] .uhuu\\:overflow-hidden,[data-uhuu-portal] .uhuu\\:overflow-hidden{overflow:hidden}[data-uhuu-interactive] .uhuu\\:rounded,[data-uhuu-portal] .uhuu\\:rounded{border-radius:.25rem}[data-uhuu-interactive] .uhuu\\:rounded-full,[data-uhuu-portal] .uhuu\\:rounded-full{border-radius:2147483647px}[data-uhuu-interactive] .uhuu\\:rounded-lg,[data-uhuu-portal] .uhuu\\:rounded-lg{border-radius:var(--uhuu-radius-lg)}[data-uhuu-interactive] .uhuu\\:rounded-md,[data-uhuu-portal] .uhuu\\:rounded-md{border-radius:var(--uhuu-radius-md)}[data-uhuu-interactive] .uhuu\\:rounded-sm,[data-uhuu-portal] .uhuu\\:rounded-sm{border-radius:var(--uhuu-radius-sm)}[data-uhuu-interactive] .uhuu\\:border,[data-uhuu-portal] .uhuu\\:border{border-style:var(--uhuu-tw-border-style);border-width:1px}[data-uhuu-interactive] .uhuu\\:border-0,[data-uhuu-portal] .uhuu\\:border-0{border-style:var(--uhuu-tw-border-style);border-width:0}[data-uhuu-interactive] .uhuu\\:border-2,[data-uhuu-portal] .uhuu\\:border-2{border-style:var(--uhuu-tw-border-style);border-width:2px}[data-uhuu-interactive] .uhuu\\:border-t,[data-uhuu-portal] .uhuu\\:border-t{border-top-style:var(--uhuu-tw-border-style);border-top-width:1px}[data-uhuu-interactive] .uhuu\\:border-r,[data-uhuu-portal] .uhuu\\:border-r{border-right-style:var(--uhuu-tw-border-style);border-right-width:1px}[data-uhuu-interactive] .uhuu\\:border-b,[data-uhuu-portal] .uhuu\\:border-b{border-bottom-style:var(--uhuu-tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .uhuu\\:border-l,[data-uhuu-portal] .uhuu\\:border-l{border-left-style:var(--uhuu-tw-border-style);border-left-width:1px}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border\\){border-color:var(--uhuu-thumbnail-border)}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\){border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:border-blue-400,[data-uhuu-portal] .uhuu\\:border-blue-400{border-color:var(--uhuu-color-blue-400)}[data-uhuu-interactive] .uhuu\\:border-gray-200,[data-uhuu-portal] .uhuu\\:border-gray-200,[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 60%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-300,[data-uhuu-portal] .uhuu\\:border-gray-300{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:border-gray-400,[data-uhuu-portal] .uhuu\\:border-gray-400{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:border-gray-900,[data-uhuu-portal] .uhuu\\:border-gray-900{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:border-transparent,[data-uhuu-portal] .uhuu\\:border-transparent{border-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 95%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\){background-color:var(--uhuu-thumbnail-caption)}[data-uhuu-interactive] .uhuu\\:bg-black,[data-uhuu-portal] .uhuu\\:bg-black,[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:color-mix(in oklab, var(--uhuu-color-black) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:color-mix(in oklab, var(--uhuu-color-black) 40%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:color-mix(in oklab, var(--uhuu-color-black) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-50,[data-uhuu-portal] .uhuu\\:bg-blue-50{background-color:var(--uhuu-color-blue-50)}[data-uhuu-interactive] .uhuu\\:bg-blue-100,[data-uhuu-portal] .uhuu\\:bg-blue-100{background-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:var(--uhuu-color-blue-500)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:color-mix(in oklab, var(--uhuu-color-blue-500) 10%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:var(--uhuu-color-blue-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-blue-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-emerald-100,[data-uhuu-portal] .uhuu\\:bg-emerald-100{background-color:var(--uhuu-color-emerald-100)}[data-uhuu-interactive] .uhuu\\:bg-gray-50,[data-uhuu-portal] .uhuu\\:bg-gray-50{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:bg-gray-100,[data-uhuu-portal] .uhuu\\:bg-gray-100,[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-200,[data-uhuu-portal] .uhuu\\:bg-gray-200{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:var(--uhuu-color-gray-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-900,[data-uhuu-portal] .uhuu\\:bg-gray-900{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:bg-transparent,[data-uhuu-portal] .uhuu\\:bg-transparent{background-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-white,[data-uhuu-portal] .uhuu\\:bg-white,[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:var(--uhuu-color-white)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:color-mix(in oklab, var(--uhuu-color-white) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:object-contain,[data-uhuu-portal] .uhuu\\:object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .uhuu\\:object-top,[data-uhuu-portal] .uhuu\\:object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .uhuu\\:p-0,[data-uhuu-portal] .uhuu\\:p-0{padding:0}[data-uhuu-interactive] .uhuu\\:p-1,[data-uhuu-portal] .uhuu\\:p-1{padding:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:p-1\\.5,[data-uhuu-portal] .uhuu\\:p-1\\.5{padding:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:p-2,[data-uhuu-portal] .uhuu\\:p-2{padding:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:p-3,[data-uhuu-portal] .uhuu\\:p-3{padding:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:p-4,[data-uhuu-portal] .uhuu\\:p-4{padding:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:p-6,[data-uhuu-portal] .uhuu\\:p-6{padding:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:px-2,[data-uhuu-portal] .uhuu\\:px-2{padding-inline:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:px-2\\.5,[data-uhuu-portal] .uhuu\\:px-2\\.5{padding-inline:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:px-3,[data-uhuu-portal] .uhuu\\:px-3{padding-inline:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:px-4,[data-uhuu-portal] .uhuu\\:px-4{padding-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:px-8,[data-uhuu-portal] .uhuu\\:px-8{padding-inline:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:py-0\\.5,[data-uhuu-portal] .uhuu\\:py-0\\.5{padding-block:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:py-1,[data-uhuu-portal] .uhuu\\:py-1{padding-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:py-1\\.5,[data-uhuu-portal] .uhuu\\:py-1\\.5{padding-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:py-2,[data-uhuu-portal] .uhuu\\:py-2{padding-block:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:py-2\\.5,[data-uhuu-portal] .uhuu\\:py-2\\.5{padding-block:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:py-3,[data-uhuu-portal] .uhuu\\:py-3{padding-block:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:py-16,[data-uhuu-portal] .uhuu\\:py-16{padding-block:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:py-20,[data-uhuu-portal] .uhuu\\:py-20{padding-block:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:pt-1,[data-uhuu-portal] .uhuu\\:pt-1{padding-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pt-2,[data-uhuu-portal] .uhuu\\:pt-2{padding-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-1,[data-uhuu-portal] .uhuu\\:pr-1{padding-right:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pr-2,[data-uhuu-portal] .uhuu\\:pr-2{padding-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-3,[data-uhuu-portal] .uhuu\\:pr-3{padding-right:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:pr-6,[data-uhuu-portal] .uhuu\\:pr-6{padding-right:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:pb-4,[data-uhuu-portal] .uhuu\\:pb-4{padding-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:pl-0,[data-uhuu-portal] .uhuu\\:pl-0{padding-left:0}[data-uhuu-interactive] .uhuu\\:pl-1,[data-uhuu-portal] .uhuu\\:pl-1{padding-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pl-8,[data-uhuu-portal] .uhuu\\:pl-8{padding-left:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:text-center,[data-uhuu-portal] .uhuu\\:text-center{text-align:center}[data-uhuu-interactive] .uhuu\\:text-left,[data-uhuu-portal] .uhuu\\:text-left{text-align:left}[data-uhuu-interactive] .uhuu\\:align-top,[data-uhuu-portal] .uhuu\\:align-top{vertical-align:top}[data-uhuu-interactive] .uhuu\\:font-mono,[data-uhuu-portal] .uhuu\\:font-mono{font-family:var(--uhuu-font-mono)}[data-uhuu-interactive] .uhuu\\:text-base,[data-uhuu-portal] .uhuu\\:text-base{font-size:var(--uhuu-text-base);line-height:var(--uhuu-tw-leading,var(--uhuu-text-base--line-height))}[data-uhuu-interactive] .uhuu\\:text-lg,[data-uhuu-portal] .uhuu\\:text-lg{font-size:var(--uhuu-text-lg);line-height:var(--uhuu-tw-leading,var(--uhuu-text-lg--line-height))}[data-uhuu-interactive] .uhuu\\:text-sm,[data-uhuu-portal] .uhuu\\:text-sm{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs,[data-uhuu-portal] .uhuu\\:text-xs{font-size:var(--uhuu-text-xs);line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs\\!,[data-uhuu-portal] .uhuu\\:text-xs\\!{font-size:var(--uhuu-text-xs)!important;line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))!important}[data-uhuu-interactive] .uhuu\\:text-\\[10px\\],[data-uhuu-portal] .uhuu\\:text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .uhuu\\:leading-none,[data-uhuu-portal] .uhuu\\:leading-none{--uhuu-tw-leading:1;line-height:1}[data-uhuu-interactive] .uhuu\\:leading-tight,[data-uhuu-portal] .uhuu\\:leading-tight{--uhuu-tw-leading:var(--uhuu-leading-tight);line-height:var(--uhuu-leading-tight)}[data-uhuu-interactive] .uhuu\\:font-medium,[data-uhuu-portal] .uhuu\\:font-medium{--uhuu-tw-font-weight:var(--uhuu-font-weight-medium);font-weight:var(--uhuu-font-weight-medium)}[data-uhuu-interactive] .uhuu\\:font-normal,[data-uhuu-portal] .uhuu\\:font-normal{--uhuu-tw-font-weight:var(--uhuu-font-weight-normal);font-weight:var(--uhuu-font-weight-normal)}[data-uhuu-interactive] .uhuu\\:font-semibold,[data-uhuu-portal] .uhuu\\:font-semibold{--uhuu-tw-font-weight:var(--uhuu-font-weight-semibold);font-weight:var(--uhuu-font-weight-semibold)}[data-uhuu-interactive] .uhuu\\:tracking-wide,[data-uhuu-portal] .uhuu\\:tracking-wide{--uhuu-tw-tracking:var(--uhuu-tracking-wide);letter-spacing:var(--uhuu-tracking-wide)}[data-uhuu-interactive] .uhuu\\:tracking-widest,[data-uhuu-portal] .uhuu\\:tracking-widest{--uhuu-tw-tracking:var(--uhuu-tracking-widest);letter-spacing:var(--uhuu-tracking-widest)}[data-uhuu-interactive] .uhuu\\:break-all,[data-uhuu-portal] .uhuu\\:break-all{word-break:break-all}[data-uhuu-interactive] .uhuu\\:whitespace-nowrap,[data-uhuu-portal] .uhuu\\:whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\),[data-uhuu-portal] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\){color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:text-blue-600,[data-uhuu-portal] .uhuu\\:text-blue-600{color:var(--uhuu-color-blue-600)}[data-uhuu-interactive] .uhuu\\:text-emerald-600,[data-uhuu-portal] .uhuu\\:text-emerald-600{color:var(--uhuu-color-emerald-600)}[data-uhuu-interactive] .uhuu\\:text-gray-400,[data-uhuu-portal] .uhuu\\:text-gray-400{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:text-gray-500,[data-uhuu-portal] .uhuu\\:text-gray-500{color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:text-gray-600,[data-uhuu-portal] .uhuu\\:text-gray-600{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:text-gray-700,[data-uhuu-portal] .uhuu\\:text-gray-700{color:var(--uhuu-color-gray-700)}[data-uhuu-interactive] .uhuu\\:text-gray-800,[data-uhuu-portal] .uhuu\\:text-gray-800{color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:text-gray-900,[data-uhuu-portal] .uhuu\\:text-gray-900{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:text-red-600,[data-uhuu-portal] .uhuu\\:text-red-600{color:var(--uhuu-color-red-600)}[data-uhuu-interactive] .uhuu\\:text-white,[data-uhuu-portal] .uhuu\\:text-white{color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:uppercase,[data-uhuu-portal] .uhuu\\:uppercase{text-transform:uppercase}[data-uhuu-interactive] .uhuu\\:tabular-nums,[data-uhuu-portal] .uhuu\\:tabular-nums{--uhuu-tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--uhuu-tw-ordinal,) var(--uhuu-tw-slashed-zero,) var(--uhuu-tw-numeric-figure,) var(--uhuu-tw-numeric-spacing,) var(--uhuu-tw-numeric-fraction,)}[data-uhuu-interactive] .uhuu\\:opacity-0,[data-uhuu-portal] .uhuu\\:opacity-0{opacity:0}[data-uhuu-interactive] .uhuu\\:opacity-50,[data-uhuu-portal] .uhuu\\:opacity-50{opacity:.5}[data-uhuu-interactive] .uhuu\\:opacity-60,[data-uhuu-portal] .uhuu\\:opacity-60{opacity:.6}[data-uhuu-interactive] .uhuu\\:opacity-70,[data-uhuu-portal] .uhuu\\:opacity-70{opacity:.7}[data-uhuu-interactive] .uhuu\\:opacity-75,[data-uhuu-portal] .uhuu\\:opacity-75{opacity:.75}[data-uhuu-interactive] .uhuu\\:shadow,[data-uhuu-portal] .uhuu\\:shadow{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-2xl,[data-uhuu-portal] .uhuu\\:shadow-2xl{--uhuu-tw-shadow:0 25px 50px -12px var(--uhuu-tw-shadow-color,#00000040);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-lg,[data-uhuu-portal] .uhuu\\:shadow-lg{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-md,[data-uhuu-portal] .uhuu\\:shadow-md{--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-sm,[data-uhuu-portal] .uhuu\\:shadow-sm{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-xl,[data-uhuu-portal] .uhuu\\:shadow-xl{--uhuu-tw-shadow:0 20px 25px -5px var(--uhuu-tw-shadow-color,#0000001a), 0 8px 10px -6px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-0,[data-uhuu-portal] .uhuu\\:ring-0{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(0px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\){--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:outline,[data-uhuu-portal] .uhuu\\:outline{outline-style:var(--uhuu-tw-outline-style);outline-width:1px}[data-uhuu-interactive] .uhuu\\:outline-2,[data-uhuu-portal] .uhuu\\:outline-2{outline-style:var(--uhuu-tw-outline-style);outline-width:2px}[data-uhuu-interactive] .uhuu\\:outline-offset-2,[data-uhuu-portal] .uhuu\\:outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .uhuu\\:outline-blue-100,[data-uhuu-portal] .uhuu\\:outline-blue-100{outline-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--uhuu-tw-drop-shadow-size:drop-shadow(0 1px 2px var(--uhuu-tw-drop-shadow-color,#000c));--uhuu-tw-drop-shadow:var(--uhuu-tw-drop-shadow-size);filter:var(--uhuu-tw-blur,) var(--uhuu-tw-brightness,) var(--uhuu-tw-contrast,) var(--uhuu-tw-grayscale,) var(--uhuu-tw-hue-rotate,) var(--uhuu-tw-invert,) var(--uhuu-tw-saturate,) var(--uhuu-tw-sepia,) var(--uhuu-tw-drop-shadow,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-\\[1px\\],[data-uhuu-portal] .uhuu\\:backdrop-blur-\\[1px\\]{--uhuu-tw-backdrop-blur:blur(1px);backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-md,[data-uhuu-portal] .uhuu\\:backdrop-blur-md{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-md));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-sm,[data-uhuu-portal] .uhuu\\:backdrop-blur-sm{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-sm));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:transition,[data-uhuu-portal] .uhuu\\:transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-all,[data-uhuu-portal] .uhuu\\:transition-all{transition-property:all;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-colors,[data-uhuu-portal] .uhuu\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-opacity,[data-uhuu-portal] .uhuu\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-transform,[data-uhuu-portal] .uhuu\\:transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:duration-150,[data-uhuu-portal] .uhuu\\:duration-150{--uhuu-tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .uhuu\\:ease-in-out,[data-uhuu-portal] .uhuu\\:ease-in-out{--uhuu-tw-ease:var(--uhuu-ease-in-out);transition-timing-function:var(--uhuu-ease-in-out)}[data-uhuu-interactive] .uhuu\\:outline-none,[data-uhuu-portal] .uhuu\\:outline-none{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:select-none,[data-uhuu-portal] .uhuu\\:select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *){opacity:1}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *){border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *){--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*){opacity:.7}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:border-gray-400:focus-within{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-2:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-2:focus-within{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-gray-200:focus-within{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:hover\\:scale-105:hover,[data-uhuu-portal] .uhuu\\:hover\\:scale-105:hover{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover{border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-200:hover{border-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-400:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-400:hover{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover{background-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-50:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-50:hover{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-200:hover{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-800:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-800:hover{background-color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-white:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-white:hover{background-color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-600:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-600:hover{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-900:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-900:hover{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:hover\\:opacity-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .uhuu\\:hover\\:shadow-lg:hover,[data-uhuu-portal] .uhuu\\:hover\\:shadow-lg:hover{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}}[data-uhuu-interactive] .uhuu\\:focus\\:w-40:focus,[data-uhuu-portal] .uhuu\\:focus\\:w-40:focus{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:focus\\:border-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-gray-400:focus{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:border-transparent:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .uhuu\\:focus\\:bg-gray-100:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-gray-100:focus{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:focus\\:bg-red-50:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-red-50:focus{background-color:var(--uhuu-color-red-50)}[data-uhuu-interactive] .uhuu\\:focus\\:text-gray-900:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-gray-900:focus{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus\\:text-red-700:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-red-700:focus{color:var(--uhuu-color-red-700)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-2:focus{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-400)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:color-mix(in oklab, var(--uhuu-color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-500:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-500:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-500)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-200:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-200:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-400:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-0:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-0:focus{--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-2:focus{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:outline-none:focus,[data-uhuu-portal] .uhuu\\:focus\\:outline-none:focus{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-2:focus-visible{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible{--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:outline-none:focus-visible{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:active\\:cursor-grabbing:active,[data-uhuu-portal] .uhuu\\:active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .uhuu\\:disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .uhuu\\:disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-40:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-50:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--uhuu-tw-translate-x:calc(var(--uhuu-spacing) * 4);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked]{background-color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--uhuu-tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open]{--uhuu-tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--uhuu-tw-translate-x:0px;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--uhuu-color-gray-200)}@media (width>=40rem){[data-uhuu-interactive] .uhuu\\:sm\\:max-w-sm,[data-uhuu-portal] .uhuu\\:sm\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:sm\\:flex-row,[data-uhuu-portal] .uhuu\\:sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .uhuu\\:sm\\:justify-end,[data-uhuu-portal] .uhuu\\:sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.uhuu\\:sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:sm\\:space-x-2>:not(:last-child)){--uhuu-tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-x-reverse));margin-inline-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-x-reverse)))}[data-uhuu-interactive] .uhuu\\:sm\\:text-left,[data-uhuu-portal] .uhuu\\:sm\\:text-left{text-align:left}}@media print{.uhuu\\:print\\:transform-none{transform:none}}[data-uhuu-interactive] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor],[data-uhuu-interactive] [data-uhuu-editor] [data-uhuu-paper],[data-uhuu-portal] [data-uhuu-editor] [data-uhuu-paper]{--uhuu-spacing:.25rem;--uhuu-font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-default-font-family:var(--uhuu-font-sans);--uhuu-color-white:#fff;--uhuu-color-black:#000;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-200:oklch(88.2% .059 254.128);--uhuu-color-blue-300:oklch(80.9% .105 251.813);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-blue-700:oklch(48.8% .243 264.376);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-gray-950:oklch(13% .028 261.692);--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-font-weight-bold:700;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-radius-xl:.75rem;--uhuu-shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--uhuu-shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--uhuu-shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--uhuu-shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--uhuu-shadow-2xl:0 25px 50px -12px #00000040;--uhuu-blur-sm:8px;--uhuu-blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .uhuu-page-options-trigger,[data-uhuu-portal] .uhuu-page-options-trigger{height:calc(var(--uhuu-spacing) * 7);width:calc(var(--uhuu-spacing) * 7);justify-content:center;align-items:center;gap:var(--uhuu-spacing);border-radius:var(--uhuu-radius-lg);background-color:var(--uhuu-color-gray-100);padding-inline:var(--uhuu-spacing);padding-block:calc(var(--uhuu-spacing) * .5);color:var(--uhuu-color-gray-600);display:flex}@media (hover:hover){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{color:var(--uhuu-color-gray-800)}}[data-uhuu-interactive] .uhuu-page-number,[data-uhuu-portal] .uhuu-page-number{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height));color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{gap:calc(var(--uhuu-spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{gap:calc(var(--uhuu-spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (width>=96rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--uhuu-color-neutral-50)}}@property --uhuu-tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-leading{syntax:"*";inherits:false}@property --uhuu-tw-font-weight{syntax:"*";inherits:false}@property --uhuu-tw-tracking{syntax:"*";inherits:false}@property --uhuu-tw-ordinal{syntax:"*";inherits:false}@property --uhuu-tw-slashed-zero{syntax:"*";inherits:false}@property --uhuu-tw-numeric-figure{syntax:"*";inherits:false}@property --uhuu-tw-numeric-spacing{syntax:"*";inherits:false}@property --uhuu-tw-numeric-fraction{syntax:"*";inherits:false}@property --uhuu-tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-ring-inset{syntax:"*";inherits:false}@property --uhuu-tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --uhuu-tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --uhuu-tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-blur{syntax:"*";inherits:false}@property --uhuu-tw-brightness{syntax:"*";inherits:false}@property --uhuu-tw-contrast{syntax:"*";inherits:false}@property --uhuu-tw-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-invert{syntax:"*";inherits:false}@property --uhuu-tw-opacity{syntax:"*";inherits:false}@property --uhuu-tw-saturate{syntax:"*";inherits:false}@property --uhuu-tw-sepia{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-drop-shadow-size{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-blur{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-brightness{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-contrast{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-invert{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-opacity{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-saturate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-sepia{syntax:"*";inherits:false}@property --uhuu-tw-duration{syntax:"*";inherits:false}@property --uhuu-tw-ease{syntax:"*";inherits:false}@property --uhuu-tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *),:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):after,:is([data-uhuu-chrome],[data-uhuu-chrome] *):after,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):before,:is([data-uhuu-chrome],[data-uhuu-chrome] *):before,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::backdrop,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),html:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),hr:is([data-uhuu-chrome],[data-uhuu-chrome] *){height:0;color:inherit;border-top-width:1px}abbr:where([title]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),abbr:where([title]):is([data-uhuu-chrome],[data-uhuu-chrome] *){text-decoration:underline dotted}h1:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h1:is([data-uhuu-chrome],[data-uhuu-chrome] *),h2:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h2:is([data-uhuu-chrome],[data-uhuu-chrome] *),h3:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h3:is([data-uhuu-chrome],[data-uhuu-chrome] *),h4:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h4:is([data-uhuu-chrome],[data-uhuu-chrome] *),h5:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h5:is([data-uhuu-chrome],[data-uhuu-chrome] *),h6:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h6:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:inherit;font-weight:inherit}a:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),a:is([data-uhuu-chrome],[data-uhuu-chrome] *){color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),b:is([data-uhuu-chrome],[data-uhuu-chrome] *),strong:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),strong:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}code:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),code:is([data-uhuu-chrome],[data-uhuu-chrome] *),kbd:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),kbd:is([data-uhuu-chrome],[data-uhuu-chrome] *),samp:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),samp:is([data-uhuu-chrome],[data-uhuu-chrome] *),pre:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),pre:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),small:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:80%}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *),sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *){bottom:-.25em}sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){top:-.5em}table:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),table:is([data-uhuu-chrome],[data-uhuu-chrome] *){text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-focusring:where(:not(iframe)):is([data-uhuu-chrome],[data-uhuu-chrome] *){outline:auto}progress:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),progress:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline}summary:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),summary:is([data-uhuu-chrome],[data-uhuu-chrome] *){display:list-item}ol:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ol:is([data-uhuu-chrome],[data-uhuu-chrome] *),ul:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ul:is([data-uhuu-chrome],[data-uhuu-chrome] *),menu:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),menu:is([data-uhuu-chrome],[data-uhuu-chrome] *){list-style:none}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),svg:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),svg:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *),canvas:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),canvas:is([data-uhuu-chrome],[data-uhuu-chrome] *),audio:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),audio:is([data-uhuu-chrome],[data-uhuu-chrome] *),iframe:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),iframe:is([data-uhuu-chrome],[data-uhuu-chrome] *),embed:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),embed:is([data-uhuu-chrome],[data-uhuu-chrome] *),object:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),object:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:middle;display:block}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *){max-width:100%;height:auto}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:is([data-uhuu-chrome],[data-uhuu-chrome] *),select:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),select:is([data-uhuu-chrome],[data-uhuu-chrome] *),optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *),textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-chrome],[data-uhuu-chrome] *){padding-inline-start:20px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{margin-inline-end:4px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{opacity:1}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:currentColor}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){resize:vertical}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-search-decoration,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-search-decoration{-webkit-appearance:none}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-date-and-time-value,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{display:inline-flex}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-fields-wrapper,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-fields-wrapper{padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-year-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-year-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-month-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-month-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-day-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-day-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-hour-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-hour-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-minute-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-minute-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-second-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-second-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-millisecond-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-millisecond-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-meridiem-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-meridiem-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-calendar-picker-indicator,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-ui-invalid:is([data-uhuu-chrome],[data-uhuu-chrome] *){box-shadow:none}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-inner-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-inner-spin-button{height:auto}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-outer-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),[hidden]:where(:not([hidden=until-found])):is([data-uhuu-chrome],[data-uhuu-chrome] *){display:none!important}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit}:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--uhuu-font-sans,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-variant:normal;font-feature-settings:normal;font-variation-settings:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-align:start;text-shadow:none;color:#000;font-size:1rem;font-style:normal;font-weight:400;font-stretch:100%;line-height:1.5}@layer base.uhuu-document{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[data-uhuu-reset=none]:not(#\\#),[data-uhuu-reset=none] :not(#\\#),[data-uhuu-reset=none]:not(#\\#):before,[data-uhuu-reset=none] :not(#\\#):before,[data-uhuu-reset=none]:not(#\\#):after,[data-uhuu-reset=none] :not(#\\#):after{all:revert-layer}}:root{--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff;--uhuu-thumbnail-caption:#0006;--uhuu-thumbnail-border:oklch(92.8% .006 264.531);--uhuu-thumbnail-border-strong:oklch(87.2% .01 258.338)}@media screen{html[data-uhuu-appearance=dark] [data-uhuu-editor]{color-scheme:dark;color:oklch(98.5% 0 0);--uhuu-shell-surface:oklch(27.4% .006 286.033);--uhuu-shell-on-inverse:oklch(21% .006 285.885);--uhuu-thumbnail-caption:oklch(21% .006 285.885/.92);--uhuu-thumbnail-border:oklch(37% .013 285.805);--uhuu-thumbnail-border-strong:oklch(44.2% .017 285.786);--uhuu-color-gray-50:oklch(30% .006 286);--uhuu-color-gray-100:oklch(33% .007 286);--uhuu-color-gray-200:oklch(100% 0 0/.1);--uhuu-color-gray-300:oklch(100% 0 0/.15);--uhuu-color-gray-400:oklch(66% .015 286);--uhuu-color-gray-500:oklch(70.5% .015 286.067);--uhuu-color-gray-600:oklch(87.1% .006 286.286);--uhuu-color-gray-700:oklch(92% .004 286.32);--uhuu-color-gray-800:oklch(96.7% .001 286.375);--uhuu-color-gray-900:oklch(98.5% 0 0);--uhuu-color-gray-950:oklch(98.5% 0 0);--uhuu-color-blue-50:oklch(62.3% .214 259.815/.15);--uhuu-color-blue-100:oklch(62.3% .214 259.815/.25);--uhuu-color-blue-200:oklch(62.3% .214 259.815/.35);--uhuu-color-red-50:oklch(70.4% .191 22.216/.15);--uhuu-color-red-600:oklch(70.4% .191 22.216);--uhuu-color-red-700:oklch(80.8% .114 19.571);--uhuu-color-emerald-100:oklch(76.5% .177 163.223/.15);--uhuu-color-emerald-600:oklch(76.5% .177 163.223);--background:oklch(14.1% .005 285.823);--foreground:oklch(98.5% 0 0);--card:oklch(27.4% .006 286.033);--card-foreground:oklch(98.5% 0 0);--popover:oklch(27.4% .006 286.033);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(98.5% 0 0);--primary-foreground:oklch(21% .006 285.885);--secondary:oklch(33% .007 286);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(33% .007 286);--muted-foreground:oklch(70.5% .015 286.067);--accent:oklch(33% .007 286);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.2% .016 285.938);--uhuu-shadow-sm:0 1px 3px 0 #0006, 0 1px 2px -1px #0006;--uhuu-shadow-md:0 4px 6px -1px #0006, 0 2px 4px -2px #0006;--uhuu-shadow-lg:0 10px 15px -3px #00000080, 0 4px 6px -4px #00000080}html[data-uhuu-appearance=dark] [data-uhuu-editor] [data-uhuu-paper]{color-scheme:light;color:initial;scrollbar-color:auto;--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff}@layer base{html[data-uhuu-appearance=dark] [data-uhuu-editor],html[data-uhuu-appearance=dark] [data-uhuu-editor] :not([data-uhuu-paper],[data-uhuu-paper] *){border-color:oklch(100% 0 0/.1)}}html[data-uhuu-appearance=dark] body{background-color:oklch(24.5% .004 286)}html[data-uhuu-appearance=dark],html[data-uhuu-appearance=dark] .uhuu-zoom-pane{scrollbar-color:oklch(37% .013 285.805) transparent}html[data-uhuu-appearance=dark] [data-section-content]{scrollbar-color:auto}}:root{--uhuu-page-width:210mm;--uhuu-page-height:297mm;--uhuu-page-bleed:0mm;--uhuu-page-background:var(--background,#fff);--uhuu-outline-color:var(--outline-color,#d1d5db);--uhuu-sheet-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width:0mm;--uhuu-glue-width:0mm;--uhuu-paper-color:#fff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.uhuu-page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.uhuu-page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.uhuu-page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}@media print{.uhuu-screen-only{display:none!important}}@media screen{.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing,.25rem) * 6);outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.uhuu-pagination.horizontal_pages{justify-content:center;gap:calc(var(--spacing,.25rem) * 6);display:flex;overflow-x:auto;width:fit-content!important;min-width:fit-content!important}.uhuu-pagination.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.uhuu-pagination.two_pages .uhuu-page-sheet{flex-shrink:0}.uhuu-pagination.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*=group\\/section]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*=group\\/section]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*=group\\/section]{grid-column:1;justify-self:end}}
/*$vite$:1*/`,{styleId:`uhuu-components-styles`})})();import * as e from "react";
import t, { cloneElement as n, createContext as r, createElement as i, forwardRef as a, memo as o, useCallback as s, useContext as c, useEffect as l, useLayoutEffect as u, useMemo as d, useReducer as f, useRef as p, useState as m, useSyncExternalStore as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import * as y from "react-dom";
import { createPortal as b, flushSync as x, unstable_batchedUpdates as S } from "react-dom";
//#region \0rolldown/runtime.js
var C = Object.defineProperty, w = (e, t) => {
	let n = {};
	for (var r in e) C(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || C(n, Symbol.toStringTag, { value: "Module" }), n;
}, T = class {
	static setupPageStyles(e) {
		if (!e || typeof document > "u") return;
		let t = document.createElement("link");
		return t.rel = "stylesheet", t.href = e, document.head.appendChild(t), t;
	}
	static removePageStyles(e) {
		e && typeof document < "u" && document?.head.removeChild(e);
	}
}, E = 400;
function D(e) {
	let t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
	return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function O(e) {
	return Math.round(e * 1e4) / 1e4;
}
function k(e) {
	if (!e || typeof e != "object" || e.type === "saddle") return null;
	let t = D(e.spine);
	if (t === null || t <= 0) return null;
	let n = D(e.glue);
	return {
		type: "perfect",
		spine: O(t),
		glue: n === null || n < 0 ? 0 : O(n)
	};
}
function A(e = {}) {
	let t = D(e.width), n = D(e.height);
	if (t === null || n === null || t <= 0 || n <= 0) return null;
	let r = D(e.bleed);
	return {
		width: O(t),
		height: O(n),
		bleed: r === null ? 0 : O(Math.min(Math.max(r, 0), E))
	};
}
function j(e = {}) {
	let t = A(e);
	if (!t) return null;
	let n = k(e.binding), r = n ? t.width * 2 + n.spine : t.width, i = t.height;
	return {
		trimWidth: O(r),
		trimHeight: O(i),
		width: O(r + t.bleed * 2),
		height: O(i + t.bleed * 2),
		spread: !!n
	};
}
function M(e) {
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
function N(e = {}) {
	let t = A(e), n = k(e.binding), r = M(e.coverPages);
	if (!t || !n || !r) return null;
	let { width: i, height: a, bleed: o } = t, { spine: s, glue: c } = n, l = O(a + o * 2), u = O(i * 2 + s), d = O(u + o * 2), f = O(o + i), p = O(o + i + s), m = (e) => ({
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
			width: O(o + i),
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
			width: O(i + o),
			height: l
		}
	}), g = r.map((e, t) => {
		let n = e.sheet === "inner", r = n && c > 0 ? [{
			side: "left",
			x: O(f - c),
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
function P(e = {}) {
	let t = j(e);
	if (!t) return null;
	let n = k(e.binding);
	return {
		"--uhuu-sheet-width": `${t.width}mm`,
		"--uhuu-sheet-height": `${t.height}mm`,
		"--uhuu-spine-width": `${n ? n.spine : 0}mm`,
		"--uhuu-glue-width": `${n ? n.glue : 0}mm`
	};
}
function F(e = {}) {
	let t = k(e.binding);
	if (!t) return [];
	let n = [], r = A(e), i = D(e.coverPageCount);
	return r || n.push("binding.spine is set but the page format has no valid width/height; cover spread skipped."), i !== null && i !== 1 && i !== 2 && n.push(`binding.spine is set but pageFilter.coverPageCount is ${i}; a cover spread needs 1 (outer sheet only) or 2 (outer + inner). Rendering plain cover pages.`), Array.isArray(e.coverPages) && !M(e.coverPages) && n.push(`binding.spine is set but the cover filter produced ${e.coverPages.length} page(s); a cover spread needs 2 or 4. Rendering plain cover pages.`), r && t.glue > 0 && t.glue >= r.width / 2 && n.push(`binding.glue (${t.glue}mm) is at least half the page width (${r.width}mm); the glue mask would hide most of the inside covers.`), r && r.bleed > 0 && t.spine < r.bleed && n.push(`binding.spine (${t.spine}mm) is narrower than the bleed (${r.bleed}mm); panels are cut at the spine, so artwork will not run across it unless the spine component paints it.`), e.preview === "two_pages" && n.push("preview \"two_pages\" is ignored while a cover spread is active; each sheet is already a spread."), D(e.flowCoverPages) > 0 && n.push("a cover page has hasFlow: true; only its first chunk is placed on the cover sheet."), n;
}
//#endregion
//#region src/uhuu/utility/PageSizeUtils.js
var I = class {
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
	static mmToPx(e, t = 72) {
		return e * t / 25.4;
	}
	static getDimensionsInPx({ format: e, orientation: t = "portrait", dpi: n = 72 }) {
		let r = this.getDimensions({
			format: e,
			orientation: t
		});
		return r ? {
			width: this.mmToPx(r.width, n),
			height: this.mmToPx(r.height, n)
		} : null;
	}
	static hasFormat(e) {
		return e.toUpperCase() in this.PAGE_SIZES;
	}
	static getAvailableFormats() {
		return Object.keys(this.PAGE_SIZES);
	}
	static toValidCustomDimension(e) {
		let t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
		return typeof t == "number" && Number.isFinite(t) && t > 10 && t < 4e3 ? t : null;
	}
	static resolveDimensions(e = {}) {
		let { format: t, orientation: n, width: r, height: i } = e, a = typeof t == "string" ? t : "", o = !a || a.toLowerCase() === "custom", s = this.toValidCustomDimension(r), c = this.toValidCustomDimension(i);
		if (o && s !== null && c !== null) return {
			width: s,
			height: c
		};
		let l = o ? "A4" : a;
		return this.getDimensions({
			format: l || "A4",
			orientation: n
		}) ?? this.getDimensions({
			format: "A4",
			orientation: n
		}) ?? {
			width: 210,
			height: 297
		};
	}
	static clampBleed(e) {
		return Math.min(Math.max(e ?? 0, 0), 400);
	}
	static resolveCssVars(e = {}) {
		let t = this.resolveDimensions(e), n = this.clampBleed(e.bleed), r = {
			"--uhuu-page-width": `${t.width}mm`,
			"--uhuu-page-height": `${t.height}mm`,
			"--uhuu-page-bleed": `${n}mm`
		}, i = P({
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
		let { format: n, orientation: r, bleed: i, showBleed: a, printCssRaw: o, printCssUrl: s, preview: c, binding: l } = t, u = this.resolveDimensions(t), d = this.resolveCssVars(t);
		if (typeof document < "u") for (let [e, t] of Object.entries(d)) document.documentElement.style.setProperty(e, t);
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
			binding: k(l),
			sheet: j({
				...u,
				bleed: this.clampBleed(i),
				binding: l
			})
		} };
	}
}, L = r(null), R = ({ config: e, children: t }) => /* @__PURE__ */ _(L.Provider, {
	value: e,
	children: t
}), ee = "data-uhuu-pagination";
function te(e, t) {
	let n = Object.keys(t ?? {}).sort().map((e) => {
		let n = t[e]?.signatures ?? {};
		return `${e}=${Object.keys(n).sort().map((e) => `${e}:${n[e]}`).join(",")}`;
	});
	return `${e.join("|")}#${n.join(";")}`;
}
function z({ doc: e, settleMs: t = 50 } = {}) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = () => {
		let t = (e ?? (typeof document > "u" ? void 0 : document))?.documentElement;
		if (!t) return;
		let i = [...n.values()].map((e) => e.state);
		if (!i.length) {
			t.removeAttribute(ee);
			return;
		}
		let a = r.size || i.includes("measuring") ? "measuring" : i.includes("error") ? "error" : "settled";
		t.getAttribute("data-uhuu-pagination") !== a && t.setAttribute(ee, a);
	};
	return {
		hold({ label: e = "A pagination hold", waitMs: t } = {}) {
			let a = Symbol();
			r.add(a), i();
			let o = null, s = () => {
				if (clearTimeout(o), r.delete(a)) {
					for (let e of n.values()) e.refresh();
					i();
				}
			};
			return Number.isFinite(t) && (o = setTimeout(() => {
				console.warn(`[uhuu-components] ${e} has held pagination for ${Math.round(t / 1e3)} s; the document stops waiting for it.`), s();
			}, t)), s;
		},
		createScope() {
			let e = Symbol(), r = /* @__PURE__ */ new Set(), a = null, o = null, s = !1, c = {
				state: "measuring",
				refresh: () => {
					for (let e of r) e.remeasure?.();
					d();
				}
			}, l = (t) => {
				s && (c.state = t, n.set(e, c), i());
			}, u = (e) => !!e.measurement && a.layouts[e.pageKey]?.signatures?.[e.measurement.flowId] === e.measurement.signature, d = () => {
				if (clearTimeout(o), o = null, !s) return;
				let e = [...r].filter((e) => a?.pageKeys.has(e.pageKey)), n = new Set(e.map((e) => e.pageKey)), i = !a || e.some((e) => e.jobs.size > 0) || [...a.pageKeys].some((e) => !n.has(e)) || e.some((e) => !e.failure && !u(e));
				l("measuring"), !i && (o = setTimeout(() => {
					o = null, l(e.some((e) => e.failure) ? "error" : "settled");
				}, t));
			};
			return {
				commit(e, t) {
					let n = [...e], r = te(n, t);
					s && a?.signature === r || (a = {
						pageKeys: new Set(n),
						layouts: t,
						signature: r
					}, s = !0, d());
				},
				suspend() {
					a = null, d();
				},
				unmount() {
					s = !1, a = null, clearTimeout(o), o = null, n.delete(e), i();
				},
				registerArea(e, { remeasure: t } = {}) {
					let n = {
						pageKey: e,
						remeasure: t,
						jobs: /* @__PURE__ */ new Set(),
						measurement: null,
						failure: null
					};
					return r.add(n), d(), {
						begin() {
							let e = Symbol();
							return n.jobs.add(e), d(), () => {
								n.jobs.delete(e) && d();
							};
						},
						measured(e, t = null) {
							let r = n.failure === t && n.measurement?.flowId === e?.flowId && n.measurement?.signature === e?.signature;
							n.measurement = e, n.failure = t, r || d();
						},
						fail(e) {
							n.failure !== e && (n.failure = e, d());
						},
						clear() {
							(n.measurement || n.failure) && (n.measurement = null, n.failure = null, d());
						},
						dispose() {
							r.delete(n), d();
						}
					};
				}
			};
		}
	};
}
var B = z(), ne = t.createContext(!1), re = typeof window > "u" ? l : u;
function ie(e) {
	let [t] = m(() => e ? B.createScope() : null);
	re(() => (t?.commit([], {}), () => t?.suspend()), [t]), l(() => () => t?.unmount(), [t]);
}
var ae = ({ children: e, className: n, setup: r }) => {
	let i = I.pageParams("static", r);
	ie(!t.useContext(ne)), l(() => {
		let e = T.setupPageStyles(i?.page?.printCssUrl);
		return () => {
			e && T.removePageStyles(e);
		};
	}, [r, i?.page?.printCssUrl]);
	let a = [
		"uhuu-pagination",
		n,
		i?.page?.preview
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ _(R, {
		config: i,
		children: /* @__PURE__ */ _("div", {
			className: a,
			children: e
		})
	});
}, V = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
	let l = c(L), u = a ?? l?.page?.showBleed ?? !1;
	return /* @__PURE__ */ v("div", {
		className: `uhuu-page-sheet ${t}`,
		style: n,
		ref: s,
		"data-page-key": o,
		children: [
			e,
			i && i({ pageNo: r }),
			u && /* @__PURE__ */ _("div", { className: "uhuu-bleed-area" })
		]
	});
});
V.displayName = "Sheet";
//#endregion
//#region src/uhuu/utility/is-dev.ts
function H() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
function oe(e, { fallbackMs: t = 100, win: n } = {}) {
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
//#region src/uhuu/pagination-static/flow-assets.js
var se = 1e4;
function ce(e, { begin: t, onReady: n, doc: r = e.ownerDocument, waitMs: i = se }) {
	let a = /* @__PURE__ */ new Map(), o = r?.fonts, s = !1, c = null, l = (e) => {
		let n = t(), r = setTimeout(() => {
			n(), console.warn(`[uhuu-components] ${e} is still loading after ${Math.round(i / 1e3)} s; pagination stops waiting for it and measures again if it arrives.`);
		}, i);
		return () => {
			clearTimeout(r), n();
		};
	}, u = () => {
		if (s || !o || o.status !== "loading" || c) return;
		c = l("A web font");
		let e = () => {
			s || (n(), c?.(), c = null);
		};
		o.ready.then(e, e);
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
			a.set(t, r), t.addEventListener("load", i), t.addEventListener("error", i);
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
//#region src/uhuu/pagination-static/flow-core.js
function le(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function ue(e) {
	return typeof e == "string" && e ? e : null;
}
function de(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
function fe({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = ue(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : ue(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : ue(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
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
function pe() {
	return {
		scannedItems: 0,
		chunkerCalls: 0,
		freshPageAttempts: 0,
		pages: 0
	};
}
function me({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, continuationHeight: i, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, previousHeaderGroupKey: c, onUnplaceableItem: l, window: u, maxChunks: d = 0, metrics: f } = {}) {
	let p = u?.indexes, m = u?.offset ?? 0, h = p ? Math.max(0, p.length - m) : e.length, g = p ? (e) => p[m + e] : (e) => e, _ = le(r) || Infinity, v = le(i) || _, y = [{
		indexes: [],
		keys: []
	}], b = 0, x = () => y.length > 1 ? v : _, S = () => y[y.length - 1], C = () => {
		let e = S().indexes;
		return e.length ? e[e.length - 1] : null;
	}, w = () => S().indexes.length > 0 || !!S().unplaceable, T = (e) => ue(a[g(e)]), E = (e) => le(o[e] ?? 0), D = (e) => s[e] !== !1, O = (e, t) => {
		let n = T(e);
		return n ? t == null ? (e > 0 ? T(e - 1) : ue(c)) !== n || D(n) : T(t) !== n : !1;
	}, k = (t, n) => {
		let r = T(t);
		return le(e[g(t)]) + (r && O(t, n) ? E(r) : 0);
	}, A = (e) => {
		let t = n[g(e)] ?? {};
		return t.avoidBreakInside && t.groupKey ? t.groupKey : null;
	}, j = (e, t, n) => {
		let r = 0, i = n;
		for (let n = e; n < h && A(n) === t; n += 1) f && (f.scannedItems += 1), r += k(n, i), i = n;
		return r;
	}, M = (e, t, { currentHeight: n, ownHeight: r, stopEarly: i } = {}) => {
		let a = 0, o = e;
		for (let s = 1; s <= t; s += 1) {
			let t = e + s;
			if (t >= h || (f && (f.scannedItems += 1), a += k(t, o), i && n + (r + a) > x())) break;
			o = t;
		}
		return a;
	}, N = () => {
		w() && (y.push({
			indexes: [],
			keys: []
		}), b = 0);
	}, P = (e, n, r) => {
		let i = t[g(e)] ?? String(g(e)), a = T(e) ?? void 0, o = a && O(e, null) ? E(a) : 0, s = {
			index: e,
			key: i,
			height: n,
			headerHeight: o,
			requiredHeight: r,
			availableHeight: x(),
			groupKey: a,
			reason: o > 0 ? "item-with-header-too-tall" : "item-too-tall"
		};
		S().unplaceable = s, l?.(s), y.push({
			indexes: [],
			keys: []
		}), b = 0;
	};
	for (let r = 0; r < h && !(d && y.length > d); r += 1) {
		f && (f.scannedItems += 1);
		let i = n[g(r)] ?? {}, a = le(e[g(r)]), o = t[g(r)] ?? String(g(r));
		i.breakBefore && N();
		let s = A(r), c = r > 0 ? A(r - 1) : null;
		s && s !== c && w() && b + j(r, s, C()) > x() && N();
		let l = C(), u = k(r, l);
		if (w() && u > x() - b && (N(), l = null, u = k(r, l)), u > x()) {
			P(r, a, u);
			continue;
		}
		let d = w(), p = d ? M(r, de(i.keepWithNext), {
			currentHeight: b,
			ownHeight: u,
			stopEarly: Number.isFinite(x())
		}) : 0, m = u + p;
		d && b + m > x() && (N(), l = null, u = k(r, l), u > x()) ? P(r, a, u) : (S().indexes.push(r), S().keys.push(o), b += u, i.breakAfter && r < h - 1 && N());
	}
	let F = y.filter((e) => e.indexes.length > 0 || !!e.unplaceable);
	if (!F.length) return f && !d && (f.pages = 1), [{
		indexes: [],
		keys: []
	}];
	let I = d ? F.slice(0, d) : F;
	return f && !d && (f.pages = I.length), I.map((e) => {
		if (!e.indexes.length) return e;
		let t = [];
		for (let n = 0; n < e.indexes.length; n += 1) {
			let r = e.indexes[n], i = T(r), a = n > 0 ? e.indexes[n - 1] : null;
			if (!i || !O(r, a)) continue;
			let o = r > 0 ? T(r - 1) : null;
			t.push({
				groupKey: i,
				itemIndex: r,
				isContinuation: o === i
			});
		}
		return t.length ? {
			...e,
			groupHeaders: t
		} : e;
	});
}
function he(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + le(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + le(n[t.groupKey]), 0);
}
function ge(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function _e(e, t, n, r, i, a) {
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
	}), s;
}
function ve(e, t, n, r, i, a, o) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let s = ge(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let c = _e(me({
		heights: e.heights,
		keys: e.keys,
		metas: e.metas,
		headerGroupKeys: e.headerGroupKeys,
		headerGroupHeights: s.headerGroupHeights,
		headerGroupRepeats: s.headerGroupRepeats,
		previousHeaderGroupKey: o === void 0 ? void 0 : e.headerGroupKeys?.[o],
		availableHeight: r,
		window: {
			indexes: t,
			offset: n
		},
		maxChunks: 1,
		metrics: e.metrics
	})[0] ?? {
		indexes: [],
		keys: []
	}, t, n, a, s.headerGroupKeys, o);
	return {
		chunk: c,
		consumed: c.unplaceable ? 1 : c.indexes.length,
		height: he(c, e.heights ?? [], s.headerGroupHeights ?? {})
	};
}
function ye({ nodes: e = [], itemCount: t = 0 } = {}) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = (e) => {
		throw TypeError(`[uhuu-components] Invalid Static.FlowColumns layout: ${e}`);
	}, a = (e, n) => {
		(!Number.isInteger(e) || e < 0 || e >= t) && i(`${n} references out-of-range item index ${String(e)}.`), r.has(e) && i(`item index ${e} occurs more than once.`), r.add(e);
	};
	e.forEach((e, t) => {
		if ((!e || e.kind !== "item" && e.kind !== "columns") && i(`node ${t} has an unsupported kind.`), e.kind === "item") {
			a(e.index, `node ${t}`);
			return;
		}
		(typeof e.id != "string" || !e.id) && i(`column group ${t} needs a stable id.`), n.has(e.id) && i(`column group id "${e.id}" occurs more than once.`), n.add(e.id);
		let r = /* @__PURE__ */ new Set();
		(e.columns ?? []).forEach((t, n) => {
			(!t || typeof t.id != "string" || !t.id) && i(`column ${n} in group "${e.id}" needs a stable id.`), r.has(t.id) && i(`column id "${t.id}" occurs more than once in group "${e.id}".`), r.add(t.id), (t.indexes ?? []).forEach((n) => {
				a(n, `column "${t.id}" in group "${e.id}"`);
			});
		});
	});
	for (let e = 0; e < t; e += 1) r.has(e) || i(`item index ${e} is omitted.`);
	return !0;
}
function be(e, t, n, r, i) {
	let a = le(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	let o = t[n];
	if (o === void 0) return "no";
	let s = e.metas?.[o] ?? {};
	return de(s.keepWithNext) > 0 || s.avoidBreakInside && s.groupKey ? "compare" : "no";
}
function xe(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function Se({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, continuationHeight: a, headerGroupKeys: o = [], headerGroupHeights: s = {}, headerGroupRepeats: c = {}, columnHeaderGroupHeights: l = {}, columnHeaderGroupRepeats: u = {}, onUnplaceableItem: d, metrics: f } = {}) {
	ye({
		nodes: e,
		itemCount: t.length
	});
	let p = le(i) || Infinity, m = le(a) || p, h = {
		heights: t,
		keys: n,
		metas: r,
		headerGroupKeys: o,
		headerGroupHeights: s,
		headerGroupRepeats: c,
		columnHeaderGroupHeights: l,
		columnHeaderGroupRepeats: u,
		metrics: f
	}, g = [{
		indexes: [],
		keys: [],
		layout: []
	}], _ = 0, v = () => g[g.length - 1], y = () => g.length > 1 ? m : p, b = m, x = () => {
		xe(v()) && (g.push({
			indexes: [],
			keys: [],
			layout: []
		}), _ = 0);
	}, S = (e) => {
		v().indexes.push(...e.indexes ?? []), v().keys.push(...e.keys ?? []), !v().unplaceable && e.unplaceable && (v().unplaceable = e.unplaceable), e.unplaceable && d?.(e.unplaceable);
	};
	for (let n = 0; n < e.length; n += 1) {
		let i = e[n];
		if (!i || i.kind !== "item" && i.kind !== "columns") continue;
		if (i.kind === "item") {
			let i = [], a = n;
			for (; a < e.length && e[a]?.kind === "item";) {
				let n = Number(e[a].index);
				Number.isInteger(n) && n >= 0 && n < t.length && i.push(n), a += 1;
			}
			n = a - 1;
			let o = 0;
			for (; o < i.length;) {
				y() - _ <= 0 && xe(v()) && x(), r[i[o]]?.breakBefore && xe(v()) && x();
				let e = o > 0 ? i[o - 1] : void 0, t = ve(h, i, o, y() - _, void 0, void 0, e);
				if (xe(v())) {
					let n = be(h, i, o, t, b);
					if (n !== "no") {
						f && (f.freshPageAttempts += 1);
						let r = ve(h, i, o, b, void 0, void 0, e);
						(n === "move" || r.consumed > t.consumed) && (x(), t = r);
					}
				}
				v().layout.push({
					kind: "items",
					chunk: t.chunk
				}), S(t.chunk), _ += t.height, o += t.consumed, t.consumed === 0 && (o += 1);
				let n = t.chunk.indexes?.at(-1) ?? t.chunk.unplaceable?.index;
				(o < i.length || t.chunk.unplaceable || n !== void 0 && r[n]?.breakAfter) && x();
			}
			continue;
		}
		let a = (i.columns ?? []).map((e) => ({
			id: String(e?.id ?? ""),
			indexes: (e?.indexes ?? []).filter((e) => Number.isInteger(e) && e >= 0 && e < t.length),
			cursor: 0
		})).filter((e) => e.id && e.indexes.length);
		if (a.length) for (; a.some((e) => e.cursor < e.indexes.length);) {
			y() - _ <= 0 && xe(v()) && x(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && xe(v()) && x();
			let e = y() - _, t = a.map((t) => ve(h, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (f && (f.freshPageAttempts += 1), ve(h, e.indexes, e.cursor, b, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (xe(v()) && a.some((e, n) => {
				let r = be(h, e.indexes, e.cursor, t[n], b);
				return r === "no" ? !1 : r === "move" || o()[n].consumed > t[n].consumed;
			}) && (x(), t = o()), !t.some((e) => e.consumed > 0)) {
				let e = a.find((e) => e.cursor < e.indexes.length);
				throw TypeError(`[uhuu-components] Static.FlowColumns made no pagination progress${e ? ` in column "${e.id}"` : ""}.`);
			}
			let s = a.map((e, n) => ({
				id: e.id,
				chunk: t[n].chunk
			}));
			v().layout.push({
				kind: "columns",
				id: String(i.id ?? "columns"),
				columns: s
			});
			for (let { chunk: e } of s) S(e);
			let c = Math.max(0, ...t.map((e) => e.height));
			_ += c, a.forEach((e, n) => {
				e.cursor += t[n].consumed;
			});
			let l = a.some((e) => e.cursor < e.indexes.length), u = t.some((e) => {
				let t = e.chunk.indexes?.at(-1) ?? e.chunk.unplaceable?.index;
				return t !== void 0 && r[t]?.breakAfter;
			}), d = t.some((e) => !!e.chunk.unplaceable);
			(l || u || d) && x();
		}
	}
	let C = g.filter(xe);
	return C.length ? (f && (f.pages = C.length), C) : (f && (f.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-measure.ts
var Ce = /* @__PURE__ */ w({
	getEffectiveScale: () => we,
	getOuterHeight: () => Te,
	hashString: () => Pe,
	parseKeepWithNext: () => De,
	readFlowItemElements: () => Ne,
	readHeaderGroupHeights: () => je,
	readHeaderGroupKey: () => ke,
	readHeaderGroupRepeats: () => Ae,
	readItemMeta: () => Ee,
	readUnwrappedHeights: () => Me,
	serializeKeepWithNext: () => Oe
});
function we(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function Te(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function Ee(e) {
	return {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: De(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	};
}
function De(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function Oe(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function ke(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function Ae(e) {
	let t = {};
	for (let n of e) {
		let e = ke(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function je(e, t = 1, n) {
	let r = {};
	for (let i of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = i.dataset.uhuuFlowHeaderGroupKey;
		e && (r[e] = Math.max(r[e] ?? 0, n?.get(i) ?? Te(i, t)));
	}
	return r;
}
function Me(e, t, n = 1) {
	let r = /* @__PURE__ */ new Map(), i = e.getBoundingClientRect().top;
	for (let e of Array.from(t.children)) {
		if (!(e instanceof HTMLElement) || !e.getClientRects().length) continue;
		let t = e.getBoundingClientRect().bottom, a = Math.max(0, t - i) / n;
		i = Math.max(i, t), e.dataset.uhuuFlowItem === "true" ? r.set(e, a) : e.dataset.uhuuFlowGroupHeader === "true" && r.set(e, Math.max(a, Te(e, n)));
	}
	return r;
}
function Ne(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function Pe(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-static.tsx
var Fe = me, Ie = Se, Le = "data-uhuu-flow-continuation-copy", Re = e.createContext(null), ze = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function Be(e) {
	let t = e.availableHeight - e.headerHeight;
	if (!(e.height > 0) || !Number.isFinite(t)) return;
	let n = Math.min(1, Math.max(t, 1) / e.height);
	return n < 1 ? {
		transform: `scale(${n})`,
		transformOrigin: "top left"
	} : void 0;
}
var Ve = /* @__PURE__ */ new Set();
function He(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Ue(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function We(e) {
	return Number.parseFloat(e || "0") || 0;
}
function Ge(e, t) {
	let n = (e) => {
		let t = window.getComputedStyle(e);
		return We(t.paddingTop) + We(t.paddingBottom) + We(t.borderTopWidth) + We(t.borderBottomWidth);
	};
	for (let r of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let e = window.getComputedStyle(r), i = We(e.marginTop) + We(e.marginBottom);
		if (n(r) > .01 || i > .01) throw TypeError("[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps.");
		let a = [];
		for (let e of Array.from(r.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let r = window.getComputedStyle(e), i = We(r.marginTop) + We(r.marginBottom);
			if (n(e) > .01 || i > .01 || We(r.rowGap) > .01 || We(r.minHeight) > .01 || r.maxHeight !== "none") throw TypeError("[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps.");
			let o = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + Te(n, t), 0);
			a.push(o);
		}
		let o = Math.max(0, ...a);
		if (Te(r, t) > o + 1) throw TypeError("[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent.");
	}
}
function Ke(e, t, n) {
	let r = e.dataset.uhuuFlowItemCount;
	if (r === void 0) return;
	let i = Number.parseInt(r, 10);
	Number.isInteger(i) && i !== t.length && n.onUnmarkedItems?.(t.length, i);
}
var qe = (e) => e === void 0 ? void 0 : Math.round(e * 100) / 100;
function Je(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return Ye(e, t, n);
	let i = Ne(t);
	if (Ke(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = we(e), s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = t.dataset.uhuuFlowAsChild === "true" ? Me(e, t, o) : void 0, u = i.map((e) => l?.get(e) ?? Te(e, o)), d = i.map(Ee), f = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), p = i.map(ke), m = Ae(i), h = je(t, o, l), g = c ? n.continuationHeight : void 0, _ = [], v = c ? s : u.reduce((e, t) => e + t, 0) + Object.values(h).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Fe({
			heights: u,
			keys: f,
			metas: d,
			availableHeight: v,
			continuationHeight: g,
			headerGroupKeys: p,
			headerGroupHeights: h,
			headerGroupRepeats: m,
			onUnplaceableItem: (e) => {
				_.push(e), n.onUnplaceableItem?.(e);
			}
		}),
		signature: Pe(JSON.stringify({
			version: 2,
			flowId: r,
			availableHeight: Math.round(v * 100) / 100,
			continuationHeight: qe(g),
			heights: u.map((e) => Math.round(e * 100) / 100),
			keys: f,
			metas: d,
			headerGroupKeys: p,
			headerGroupHeights: h,
			headerGroupRepeats: m,
			unplaceableItems: _
		})),
		unplaceableItems: _
	};
}
function Ye(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = Ne(t);
	if (Ke(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = we(e);
	Ge(t, o);
	let s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0), m = t.dataset.uhuuFlowAsChild === "true" ? Me(e, t, o) : void 0;
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = m?.get(e) ?? Te(e, o), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = Ee(e), p[t] = ke(e));
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
		if (e.dataset.uhuuFlowLayoutNode !== "columns") return [];
		let t = Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]")).flatMap((e) => {
			let t = e.dataset.uhuuFlowColumn;
			return t ? [{
				id: t,
				indexes: Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]")).map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10)).filter((e) => Number.isInteger(e) && e >= 0)
			}] : [];
		});
		return t.length ? [{
			kind: "columns",
			id: e.dataset.uhuuFlowLayoutId || "columns",
			columns: t
		}] : [];
	}), g = Ae(i), _ = je(t, o, m), v = c ? n.continuationHeight : void 0, y = {}, b = {};
	for (let e of Array.from(t.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			y[t] = {}, b[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				y[t][e] = je(n, o), b[t][e] = Ae(r);
			}
		}
	}
	let x = [], S = c ? s : u.reduce((e, t) => e + t, 0) + Object.values(_).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: Ie({
			nodes: h,
			heights: u,
			keys: d,
			metas: f,
			availableHeight: S,
			continuationHeight: v,
			headerGroupKeys: p,
			headerGroupHeights: _,
			headerGroupRepeats: g,
			columnHeaderGroupHeights: y,
			columnHeaderGroupRepeats: b,
			onUnplaceableItem: (e) => {
				x.push(e), n.onUnplaceableItem?.(e);
			}
		}),
		signature: Pe(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(S * 100) / 100,
			continuationHeight: qe(v),
			nodes: h,
			heights: u.map((e) => Math.round(e * 100) / 100),
			keys: d,
			metas: f,
			headerGroupKeys: p,
			headerGroupHeights: _,
			headerGroupRepeats: g,
			columnHeaderGroupHeights: y,
			columnHeaderGroupRepeats: b,
			unplaceableItems: x
		})),
		unplaceableItems: x
	};
}
function Xe(e, t) {
	for (let n of Array.from(e.querySelectorAll(`[${Le}] [data-uhuu-flow="true"]`))) if (n.dataset.uhuuFlowId === t) return n.closest("[data-uhuu-flow-area]");
	return null;
}
function Ze({ children: t, className: n = "", style: r, onFlowMeasurement: i, measureContinuation: a = !1 }) {
	let o = e.useContext(Re), s = e.useRef(null), c = e.useId(), l = e.useRef(null), u = e.useRef(o), d = e.useRef(""), f = e.useRef(!1), p = e.useRef(!1), m = e.useRef(/* @__PURE__ */ new Set()), h = e.useRef(""), g = e.useRef(""), v = e.useRef("");
	return e.useEffect(() => () => {
		u.current?.unregisterMeasurement?.(l.current ?? "", c);
	}, [c]), ze(() => {
		if (a) return o?.requestContinuation?.();
	}, [o, a]), ze(() => {
		if (u.current = o, o?.mode !== "measure" || !o.registerMeasurement || !s.current) return;
		let e = s.current, t = e.closest("[data-uhuu-flow-measurement]") ?? e, n = a && !!o.requestContinuation, r = null, _, y = null, b = null;
		d.current = "";
		let x = (t = !0) => {
			t && !_ && (_ = S?.begin()), r === null && (r = oe(() => {
				r = null;
				try {
					D();
				} catch (t) {
					d.current = "", S?.fail(t), e.setAttribute("data-uhuu-flow-error", String(t)), console.error("[uhuu-components] Flow measurement failed:", t);
				} finally {
					_?.(), _ = void 0;
				}
			}));
		}, S = o.readiness?.registerArea(o.pageKey ?? "", { remeasure: () => x() }), C = /* @__PURE__ */ new Set(), w = () => {
			if (y) {
				for (let t of Array.from(C)) e.contains(t) || (y.unobserve(t), C.delete(t));
				e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]").forEach((e) => {
					C.has(e) || (C.add(e), y?.observe(e));
				});
			}
		}, T = (t) => {
			t ? e.setAttribute("data-uhuu-flow-error", t) : e.removeAttribute("data-uhuu-flow-error");
		}, E = (e) => {
			let n = Xe(t, e);
			if (n !== b && (b && y?.unobserve(b), n && y?.observe(n), b = n), !n) return { failure: "missing-continuation-flow" };
			let r = n.getBoundingClientRect(), i = r.height ? r.height / we(n) : n.clientHeight;
			return Number.isFinite(i) && i > 0 ? { height: i } : { failure: "unmeasurable-flow-area" };
		};
		function D() {
			w();
			let r = e.querySelectorAll("[data-uhuu-flow=\"true\"]");
			r.length > 1 && !f.current && H() && (f.current = !0, console.warn("[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."));
			let a = r[0], s = a?.dataset.uhuuFlowId;
			if (l.current && l.current !== s && (o?.unregisterMeasurement?.(l.current, c), l.current = null, d.current = ""), !a) {
				T("missing-flow"), S?.clear();
				return;
			}
			let u = s ? Array.from(t.querySelectorAll("[data-uhuu-flow=\"true\"]")).filter((e) => e.dataset.uhuuFlowId === s && !e.closest("[data-uhuu-flow-continuation-copy]")).length : 0, _ = s ? u > 1 ? "duplicate-flow-id" : null : "missing-flow-id";
			if (_ && H() && h.current !== `${_}:${s}` && (h.current = `${_}:${s}`, console.warn(`[uhuu-components] Static.Flow ${s ? `id "${s}" is used by more than one Flow` : "has no id"} on page "${o?.pageKey ?? ""}". Give each Flow on a page a stable, unique id.`)), !s) {
				d.current = "", T("missing-flow-id"), S?.fail("missing-flow-id");
				return;
			}
			let y = _ ?? (r.length > 1 ? "multiple-flows-in-area" : null), b = n ? E(s) : void 0, x = Je(e, a, {
				continuationHeight: b?.height,
				onUnmarkedItems: (e, t) => {
					y ??= "unmarked-flow-item", H() && v.current !== s && (v.current = s, console.warn(`[uhuu-components] Static.Flow "${s}" asChild: ${t - e} of ${t} items carry no flow attributes, so the flow cannot be paginated. renderItem must return a DOM element, or a component that passes the props it receives on to its root DOM element.`));
				},
				onZeroHeight: () => {
					a.getClientRects().length && (y = "unmeasurable-flow-area", !p.current && H() && (p.current = !0, console.warn("[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0.")));
				},
				onUnplaceableItem: (e) => {
					m.current.has(e.key) || (m.current.add(e.key), console.warn(`[uhuu-components] Static.Flow item "${e.key}" cannot fit in its FlowArea (${Math.round(e.requiredHeight)}px required > ${Math.round(e.availableHeight)}px available). It prints on a page of its own, scaled to fit. Split the item or reduce its height.`));
				}
			});
			if (!x) return;
			let C = x.chunks.length > 1 ? b?.failure : void 0;
			if (C && H() && g.current !== `${C}:${s}` && (g.current = `${C}:${s}`, console.warn(`[uhuu-components] Static.FlowArea measureContinuation: page "${o?.pageKey ?? ""}" ` + (C === "missing-continuation-flow" ? `renders no Static.Flow "${s}" on a continuation sheet, so its continuation pages would lose its items. Render the FlowArea and its Flow on every sheet.` : `lays the FlowArea of "${s}" out at zero height on a continuation sheet. Give it a measurable height there too.`))), C === "missing-continuation-flow") T(C), S?.clear();
			else if (y ??= C ?? null, S?.measured(x, y), T(y), x.signature !== d.current) {
				o?.registerMeasurement?.(x, c), d.current = x.signature, l.current = x.flowId;
				try {
					i?.(x);
				} catch (e) {
					console.error("[uhuu-components] FlowArea onFlowMeasurement threw:", e);
				}
			}
		}
		let O = ce(t, {
			begin: () => S?.begin() ?? (() => {}),
			onReady: () => x()
		});
		typeof ResizeObserver < "u" && (y = new ResizeObserver(() => x()), y.observe(e)), w(), x();
		let k = new MutationObserver((t) => {
			O.sync(), x(t.some((t) => e.contains(t.target)));
		});
		return k.observe(t, {
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
				"data-uhuu-flow-group-header"
			],
			characterData: !0,
			childList: !0,
			subtree: !0
		}), () => {
			r !== null && (r(), r = null, _?.()), y?.disconnect(), k.disconnect(), O.disconnect(), S?.dispose();
		};
	}, [
		o,
		i,
		c,
		a
	]), /* @__PURE__ */ _("div", {
		ref: s,
		className: n,
		style: r,
		"data-uhuu-flow-area": "true",
		children: t
	});
}
function Qe({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s, measureContinuation: c }) {
	return /* @__PURE__ */ v("div", {
		className: `uhuu-flow-page ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ _(Ze, {
				className: `uhuu-flow-page-area ${a}`,
				style: o,
				onFlowMeasurement: s,
				measureContinuation: c,
				children: e
			}),
			n
		]
	});
}
function $e(e) {
	if (typeof e == "string") return e ? {
		key: e,
		repeatHeader: !0
	} : void 0;
	if (e?.key) return {
		key: e.key,
		repeatHeader: e.repeatHeader !== !1
	};
}
function et(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function tt(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
var nt = /* @__PURE__ */ new Set();
function rt(t) {
	return t == null || typeof t == "boolean" ? "nothing" : Array.isArray(t) ? "several nodes" : e.isValidElement(t) ? "a fragment" : "text";
}
function it(t, n, r) {
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
	let i = `${r.flowId}:${r.source}`;
	return H() && !nt.has(i) && (nt.add(i), console.warn(`[uhuu-components] Static.Flow "${r.flowId}" asChild: ${r.source} returned ${rt(t)}. asChild needs exactly one element to carry the flow's attributes, so it renders in a wrapper <div> instead.`)), null;
}
function at({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p, asChild: m = !1, as: h = "div" }) {
	let g = e.useContext(Re), y = h, b = g?.chunksByFlowId?.[t], x = g?.mode === "visible" && b ? b[g.pageIndex] : void 0, S = g?.mode === "visible" ? g.pageIndex : 0, C = g?.mode === "visible" && b ? b.length : 1, w = x?.unplaceable, T = w ? p?.(w, {
		flowId: t,
		pageIndex: S,
		pageCount: C
	}) : void 0, E = !!(w && T == null), D = g?.copy === "continuation" ? [] : g?.mode === "visible" && b ? x?.indexes ?? [] : g?.mode === "visible" && g.pageIndex > 0 ? [] : n.map((e, t) => t), O = (E ? [.../* @__PURE__ */ new Set([...D, w.index])].sort((e, t) => e - t) : D).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), k = n.map((e, t) => $e(c?.(e, t))), A = k.map((e) => e?.key), j = et(O), M = l ? tt(x?.groupHeaders) : void 0;
	return e.useEffect(() => {
		if (!H() || !o || !Object.keys(o).length || !n.length) return;
		let e = `${t}:${Object.keys(o).join("|")}`;
		Ve.has(e) || n.some((e, t) => !!(s?.(e, t) ?? He(e))) || (Ve.add(e), console.warn(`[uhuu-components] Static.Flow "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		o,
		s
	]), /* @__PURE__ */ v(y, {
		className: u,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-as-child": m ? "true" : void 0,
		"data-uhuu-flow-item-count": m && g?.mode !== "visible" ? O.length : void 0,
		children: [w && T != null && (m && it(T, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": w.key
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ _("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": w.key,
			children: T
		})), O.map((c) => {
			let u = n[c];
			if (u === void 0) return null;
			let p = r(u, c), h = k[c], g = {
				...fe({
					itemIndex: c,
					fragmentIndexes: O,
					fragmentIndex: j.get(c) ?? -1,
					groupKeys: A,
					pageIndex: S,
					pageCount: C,
					itemCount: n.length
				}),
				flowId: t,
				itemKey: p,
				item: u
			}, y = s?.(u, c) ?? He(u), b = Ue(y ? o?.[y] : void 0, a?.(u, c)), x = typeof d == "function" ? d(u, c) : d, T = !!(h && M?.get(c)?.has(h.key)), D = !!(h && l && (T || !M && g.isFirstInGroupOnPage && (g.isFirstInGroup || h.repeatHeader !== !1))), N = typeof f == "function" ? h ? f(h, g) : void 0 : f, P = E && c === w?.index, F = P ? Be(w) : void 0, I = D && h ? l?.(h, g) : void 0, L = {
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": h?.key
			}, R = i(u, c, g), ee = {
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-key": String(p),
				"data-uhuu-flow-index": c,
				"data-uhuu-flow-break-before": b.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": b.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": Oe(b.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": b.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": b.groupKey,
				"data-uhuu-flow-header-group-key": h?.key,
				"data-uhuu-flow-header-repeat": h ? h.repeatHeader === !1 ? "false" : "true" : void 0,
				"data-uhuu-flow-unplaceable": P ? "true" : void 0,
				"data-uhuu-flow-unplaceable-key": P ? w.key : void 0
			}, te = D && h ? m && it(I, {
				className: N,
				...L
			}, {
				flowId: t,
				source: "renderGroupHeader"
			}) || /* @__PURE__ */ _("div", {
				className: N,
				style: { display: "flow-root" },
				...L,
				children: I
			}) : null, z = m && it(R, {
				className: x,
				...ee
			}, {
				flowId: t,
				source: "renderItem",
				forcedStyle: F
			}) || /* @__PURE__ */ _("div", {
				className: x,
				style: {
					display: "flow-root",
					...F
				},
				...ee,
				children: R
			});
			return /* @__PURE__ */ v(e.Fragment, { children: [te, z] }, p);
		})]
	});
}
function ot({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: g, getColumnItemProps: y, asChild: b = !1, as: x = "div" }) {
	ye({
		nodes: r,
		itemCount: n.length
	});
	let S = e.useContext(Re), C = x, w = S?.copy === "continuation", T = S?.chunksByFlowId?.[t], E = S?.mode === "visible" && T ? T[S.pageIndex] : void 0, D = S?.mode !== "visible", O = S?.mode === "visible" ? S.pageIndex : 0, k = S?.mode === "visible" && T ? T.length : 1, A = n.map((e, t) => $e(l?.(e, t))), j = A.map((e) => e?.key), M = { flowId: t };
	e.useEffect(() => {
		if (!H() || !s || !Object.keys(s).length || !n.length) return;
		let e = `${t}:columns:${Object.keys(s).join("|")}`;
		Ve.has(e) || n.some((e, t) => !!(c?.(e, t) ?? He(e))) || (Ve.add(e), console.warn(`[uhuu-components] Static.FlowColumns "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		s,
		c
	]);
	let N = (e, n) => {
		if (!e) return null;
		let r = m?.(e, {
			flowId: t,
			pageIndex: O,
			pageCount: k
		});
		return r == null ? n() : b && it(r, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": e.key,
			"data-uhuu-flow-column-id": e.columnId
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ _("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": e.key,
			"data-uhuu-flow-column-id": e.columnId,
			children: r
		});
	}, P = (r, l, d, m = !1, h) => {
		let g = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), y = et(g), x = h ? et(h) : void 0, S = u ? tt(l?.groupHeaders) : void 0;
		return g.map((r) => {
			let C = n[r];
			if (C === void 0) return null;
			let w = i(C, r), T = A[r], E = y.get(r) ?? -1, D = x?.get(r) ?? -1, M = {
				...fe({
					itemIndex: r,
					fragmentIndexes: g,
					fragmentIndex: E,
					groupKeys: j,
					pageIndex: O,
					pageCount: k,
					itemCount: n.length,
					previousSourceIndex: l?.previousSourceIndex ?? (D > 0 ? h?.[D - 1] : void 0)
				}),
				flowId: t,
				itemKey: w,
				item: C
			}, N = c?.(C, r) ?? He(C), P = Ue(N ? s?.[N] : void 0, o?.(C, r)), F = typeof f == "function" ? f(C, r) : f, I = d?.(r), L = !!(T && S?.get(r)?.has(T.key)), R = !!(T && u && (L || !S && M.isFirstInGroupOnPage && (M.isFirstInGroup || T.repeatHeader !== !1))), ee = typeof p == "function" ? T ? p(T, M) : void 0 : p, te = l?.unplaceable?.index === r ? l.unplaceable : void 0, z = te ? Be(te) : void 0, B = [F, I?.className].filter(Boolean).join(" "), ne = R && T ? u?.(T, M) : void 0, re = {
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": T?.key
			}, ie = a(C, r, M), ae = {
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-layout-node": m ? "item" : void 0,
				"data-uhuu-flow-key": String(w),
				"data-uhuu-flow-index": r,
				"data-uhuu-flow-unplaceable": te ? "true" : void 0,
				"data-uhuu-flow-unplaceable-key": te?.key,
				"data-uhuu-flow-column-id": te?.columnId,
				"data-uhuu-flow-break-before": P.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": P.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": Oe(P.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": P.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": P.groupKey,
				"data-uhuu-flow-header-group-key": T?.key,
				"data-uhuu-flow-header-repeat": T ? T.repeatHeader === !1 ? "false" : "true" : void 0
			}, V = R && T ? b && it(ne, {
				className: ee,
				...re
			}, {
				flowId: t,
				source: "renderGroupHeader"
			}) || /* @__PURE__ */ _("div", {
				className: ee,
				style: { display: "flow-root" },
				...re,
				children: ne
			}) : null, H = b && it(ie, {
				className: B || void 0,
				...ae
			}, {
				flowId: t,
				source: "renderItem",
				baseStyle: I?.style,
				forcedStyle: z
			}) || /* @__PURE__ */ _("div", {
				className: B,
				style: {
					display: "flow-root",
					...I?.style,
					...z
				},
				...ae,
				children: ie
			});
			return /* @__PURE__ */ v(e.Fragment, { children: [V, H] }, w);
		});
	}, F = new Map(r.filter((e) => e.kind === "columns").map((e) => [e.id, e])), I = w ? [] : D ? r : E?.layout ?? [];
	return /* @__PURE__ */ _(C, {
		className: d,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-layout": "columns",
		"data-uhuu-flow-as-child": b ? "true" : void 0,
		"data-uhuu-flow-item-count": b && D ? w ? 0 : n.length : void 0,
		children: I.map((t, n) => {
			if (t.kind === "item") return /* @__PURE__ */ _(e.Fragment, { children: P([t.index], void 0, void 0, !0) }, `item:${t.index}:${n}`);
			if (t.kind === "items") return /* @__PURE__ */ v(e.Fragment, { children: [N(t.chunk.unplaceable, () => P([t.chunk.unplaceable.index], t.chunk, void 0, !0)), P(t.chunk.indexes, t.chunk, void 0, !0)] }, `items:${n}`);
			let r = D ? t : F.get(t.id);
			if (!r) return null;
			let i = new Map(r.columns.map((e) => [e.id, e])), a = D ? r.columns.map((e) => ({ id: e.id })) : t.columns, o = h?.(r, M);
			return /* @__PURE__ */ _("div", {
				className: o?.className,
				style: {
					display: "flex",
					width: "100%",
					alignItems: "flex-start",
					...o?.style
				},
				"data-uhuu-flow-layout-node": "columns",
				"data-uhuu-flow-layout-id": r.id,
				children: a.map((e) => {
					let t = i.get(e.id);
					if (!t) return null;
					let n = g?.(r, t, M), a = e.chunk?.indexes ?? t.indexes;
					return /* @__PURE__ */ v("div", {
						className: n?.className,
						style: {
							minWidth: 0,
							flex: "1 1 0%",
							display: "flex",
							flexDirection: "column",
							...n?.style
						},
						"data-uhuu-flow-column": t.id,
						children: [N(e.chunk?.unplaceable, () => P([e.chunk.unplaceable.index], e.chunk, (e) => y?.(r, t, e, M), !1, t.indexes)), P(a, e.chunk, (e) => y?.(r, t, e, M), !1, t.indexes)]
					}, t.id);
				})
			}, `columns:${r.id}:${n}`);
		})
	});
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
function st(e) {
	let t = e?.dialog;
	if (!t) return {};
	let n = {
		"data-uhuu": "",
		...t.type ? { "data-uhuu-type": t.type } : {}
	};
	return typeof window < "u" && window.$uhuu_renderer ? n : {
		...n,
		onClick(e) {
			typeof window > "u" || window.$uhuu_renderer || (e.stopPropagation(), window.$uhuu?.editDialog?.(t));
		}
	};
}
//#endregion
//#region src/uhuu/editable/empty-content.ts
var ct = "uhuu-text-empty", lt = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), ut = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && lt.has(e.type), dt = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(dt) : !1, ft = (e) => {
	let t = ut(e.dialog) && dt(e.children) ? [e.className, ct].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ _("div", {
		className: t,
		...st(e),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function pt(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function mt(e, t, n, r = "") {
	return `${r}${e}-${n}-${pt(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var ht = /\s*(page-break-before|break-before)\s*/i, gt = 1, _t = 3, vt = 8;
function yt(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bt(e) {
	return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function xt(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === vt) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === _t) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: yt(t),
				text: t
			});
		} else if (e.nodeType === gt) {
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
function St(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: mt(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function Ct(e = "", t = {}) {
	let n = t.breakComment ?? ht, r = (t.parseHtml ?? ((e) => xt(e, n)))(e);
	return St(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var wt = {
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
}, Tt = !1;
function Et(t) {
	return e.useMemo(() => t === !1 ? (H() && !Tt && (Tt = !0, console.warn("[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : bt, [t]);
}
function Dt({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, measureContinuation: c, id: l = "flow-document", idPrefix: u, flowClassName: d = "uhuu-flow-document", itemClassName: f, metaDefaults: p, getItemMeta: m, renderItem: h, sanitize: g, editable: v, parseHtml: y }) {
	let b = e.useMemo(() => Ct(t, {
		idPrefix: u,
		parseHtml: y
	}), [
		t,
		u,
		y
	]), x = e.useMemo(() => ({
		...wt,
		...p ?? {}
	}), [p]), S = Et(g), C = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...m?.(e, t) ?? {}
	}), [m]), w = e.useCallback((e, t) => h ? h(e, t) : /* @__PURE__ */ _("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: S(e.html) }
	}), [h, S]), T = /* @__PURE__ */ _(at, {
		id: l,
		items: b,
		getKey: (e) => e.id,
		className: d,
		itemClassName: f,
		metaDefaults: x,
		getItemMeta: C,
		renderItem: w
	});
	return /* @__PURE__ */ _(Qe, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		measureContinuation: c,
		header: n,
		footer: r,
		children: v ? /* @__PURE__ */ _(ft, {
			dialog: v,
			className: !b.length && ut(v) ? ct : void 0,
			children: T
		}) : T
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var Ot = /<!--\s*(page-break-before|break-before)\s*-->/i, kt = /^\s*\[[^\]]+\]:\s+\S+/, At = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function jt(e) {
	return e.trim() === "";
}
function Mt(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function Nt(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Pt(e) {
	return /^(```|~~~)/.test(e.trim());
}
function Ft(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function It(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Lt(e) {
	return Ot.test(e.trim());
}
function Rt(e) {
	return kt.test(e);
}
function zt(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function Bt(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function Vt(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? zt(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = Bt(o, a);
		e.push({
			id: mt(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function Ht(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) Rt(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (jt(i[o])) {
			o += 1;
			continue;
		}
		if (Lt(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (Pt(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (Mt(i[o])) n = "heading", o += 1;
		else if (Ft(i[o])) n = "rule", o += 1;
		else if (At.test(i[o])) n = "image", o += 1;
		else if (It(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !jt(i[o]);) o += 1;
		else if (Nt(i[o])) for (n = "list", o += 1; o < i.length && !jt(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !jt(i[o]) && !Mt(i[o]) && !Pt(i[o]) && !Ft(i[o]) && !At.test(i[o]) && !It(i, o) && !Nt(i[o]) && !i[o].trim().startsWith(">") && !Lt(i[o]);) o += 1;
		Vt(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region src/uhuu/pagination-static/cover-spread.tsx
var Ut = (e) => `${Number(e.toFixed(4))}mm`;
function Wt(e, t) {
	let n = p(!1);
	l(() => {
		t || n.current || !H() || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var Gt = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, h) {
	let y = c(L), b = o === void 0 ? y?.page?.binding ?? null : k(o), x = s ?? y?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	Wt(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ _(V, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ _(V, {
		className: `uhuu-page-sheet--panel ${f}`.trim(),
		pageNo: C,
		overlay: w("right"),
		showBleed: x,
		"data-page-key": m,
		children: n
	});
	if (!b) return /* @__PURE__ */ v(g, { children: [T, E] });
	let D = e === "inner", O = D && b.glue > 0;
	return /* @__PURE__ */ v("div", {
		ref: h,
		className: `uhuu-page-sheet uhuu-cover-spread ${l}`.trim(),
		style: u,
		"data-sheet": e,
		"data-spine": b.spine,
		"data-glue": b.glue,
		children: [
			/* @__PURE__ */ _("div", {
				className: "uhuu-spread-panel",
				"data-side": "left",
				children: T
			}),
			/* @__PURE__ */ v("div", {
				className: "uhuu-spread-spine",
				"data-blank": D ? "true" : "false",
				children: [!D && r, x && /* @__PURE__ */ _("div", {
					className: "uhuu-spread-guide",
					"data-label": `spine ${Ut(b.spine)}${D ? " · blank" : ""}`
				})]
			}),
			/* @__PURE__ */ _("div", {
				className: "uhuu-spread-panel",
				"data-side": "right",
				children: E
			}),
			O && ["left", "right"].map((e) => /* @__PURE__ */ _("div", {
				className: "uhuu-glue-zone",
				"data-side": e,
				children: x && /* @__PURE__ */ _("div", {
					className: "uhuu-spread-guide",
					"data-label": `glue ${Ut(b.glue)}`
				})
			}, e))
		]
	});
}), Kt = typeof window > "u" ? l : u;
function qt(e = !0, t) {
	Kt(() => {
		if (!e) return;
		let n = t ? `usePaginationHold(${JSON.stringify(t)})` : "usePaginationHold()";
		return B.hold({
			label: n,
			waitMs: se
		});
	}, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function Jt(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Jt(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Yt() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Jt(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Xt = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Zt = (e, t) => ({
	classGroupId: e,
	validator: t
}), Qt = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), $t = "-", en = [], tn = "arbitrary..", nn = (e) => {
	let t = on(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return an(e);
			let n = e.split($t);
			return rn(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Xt(i, t) : t : i || en;
			}
			return n[e] || en;
		}
	};
}, rn = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = rn(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join($t) : e.slice(t).join($t), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, an = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? tn + r : void 0;
})(), on = (e) => {
	let { theme: t, classGroups: n } = e;
	return sn(n, t);
}, sn = (e, t) => {
	let n = Qt();
	for (let r in e) {
		let i = e[r];
		cn(i, n, r, t);
	}
	return n;
}, cn = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		ln(i, t, n, r);
	}
}, ln = (e, t, n, r) => {
	typeof e == "string" ? un(e, t, n) : typeof e == "function" ? dn(e, t, n, r) : fn(e, t, n, r);
}, un = (e, t, n) => {
	let r = e === "" ? t : pn(t, e);
	r.classGroupId = n;
}, dn = (e, t, n, r) => {
	mn(e) ? cn(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(Zt(n, e)));
}, fn = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		cn(o, pn(t, a), n, r);
	}
}, pn = (e, t) => {
	let n = e, r = t.split($t), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Qt(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, mn = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, hn = (e) => {
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
}, gn = "!", _n = ":", vn = [], yn = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), bn = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === _n) {
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
		s.endsWith(gn) ? (c = s.slice(0, -1), l = !0) : s.startsWith(gn) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return yn(t, l, c, u);
	};
	if (t) {
		let e = t + _n, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : yn(vn, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, xn = (e) => {
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
}, Sn = (e) => ({
	cache: hn(e.cacheSize),
	parseClassName: bn(e),
	sortModifiers: xn(e),
	postfixLookupClassGroupIds: Cn(e),
	...nn(e)
}), Cn = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, wn = /\s+/, Tn = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(wn), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + gn : _, y = v + g;
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
}, En = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Dn(n)) && (i && (i += " "), i += r);
	return i;
}, Dn = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Dn(e[r])) && (n && (n += " "), n += t);
	return n;
}, On = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Sn(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Tn(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(En(...e));
}, kn = [], An = (e) => {
	let t = (t) => t[e] || kn;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, jn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Mn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Nn = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Pn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Fn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, In = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Ln = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zn = (e) => Nn.test(e), U = (e) => !!e && !Number.isNaN(Number(e)), Bn = (e) => !!e && Number.isInteger(Number(e)), Vn = (e) => e.endsWith("%") && U(e.slice(0, -1)), Hn = (e) => Pn.test(e), Un = () => !0, Wn = (e) => Fn.test(e) && !In.test(e), Gn = () => !1, Kn = (e) => Ln.test(e), qn = (e) => Rn.test(e), Jn = (e) => !W(e) && !G(e), Yn = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Xn = (e) => dr(e, hr, Gn), W = (e) => jn.test(e), Zn = (e) => dr(e, gr, Wn), Qn = (e) => dr(e, _r, U), $n = (e) => dr(e, yr, Un), er = (e) => dr(e, vr, Gn), tr = (e) => dr(e, pr, Gn), nr = (e) => dr(e, mr, qn), rr = (e) => dr(e, br, Kn), G = (e) => Mn.test(e), ir = (e) => fr(e, gr), ar = (e) => fr(e, vr), or = (e) => fr(e, pr), sr = (e) => fr(e, hr), cr = (e) => fr(e, mr), lr = (e) => fr(e, br, !0), ur = (e) => fr(e, yr, !0), dr = (e, t, n) => {
	let r = jn.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, fr = (e, t, n = !1) => {
	let r = Mn.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, pr = (e) => e === "position" || e === "percentage", mr = (e) => e === "image" || e === "url", hr = (e) => e === "length" || e === "size" || e === "bg-size", gr = (e) => e === "length", _r = (e) => e === "number", vr = (e) => e === "family-name", yr = (e) => e === "number" || e === "weight", br = (e) => e === "shadow", xr = () => {
	let e = An("color"), t = An("font"), n = An("text"), r = An("font-weight"), i = An("tracking"), a = An("leading"), o = An("breakpoint"), s = An("container"), c = An("spacing"), l = An("radius"), u = An("shadow"), d = An("inset-shadow"), f = An("text-shadow"), p = An("drop-shadow"), m = An("blur"), h = An("perspective"), g = An("aspect"), _ = An("ease"), v = An("animate"), y = () => [
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
		zn,
		"full",
		"auto",
		...w()
	], E = () => [
		Bn,
		"none",
		"subgrid",
		G,
		W
	], D = () => [
		"auto",
		{ span: [
			"full",
			Bn,
			G,
			W
		] },
		Bn,
		G,
		W
	], O = () => [
		Bn,
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
		zn,
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
		zn,
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
		zn,
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
		or,
		tr,
		{ position: [G, W] }
	], R = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ee = () => [
		"auto",
		"cover",
		"contain",
		sr,
		Xn,
		{ size: [G, W] }
	], te = () => [
		Vn,
		ir,
		Zn
	], z = () => [
		"",
		"none",
		"full",
		l,
		G,
		W
	], B = () => [
		"",
		U,
		ir,
		Zn
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
	], ie = () => [
		U,
		Vn,
		or,
		tr
	], ae = () => [
		"",
		"none",
		m,
		G,
		W
	], V = () => [
		"none",
		U,
		G,
		W
	], H = () => [
		"none",
		U,
		G,
		W
	], oe = () => [
		U,
		G,
		W
	], se = () => [
		zn,
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
			blur: [Hn],
			breakpoint: [Hn],
			color: [Un],
			container: [Hn],
			"drop-shadow": [Hn],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Jn],
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
			"inset-shadow": [Hn],
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
			radius: [Hn],
			shadow: [Hn],
			spacing: ["px", U],
			text: [Hn],
			"text-shadow": [Hn],
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
				zn,
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
			"container-named": [Yn],
			columns: [{ columns: [
				U,
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
				Bn,
				"auto",
				G,
				W
			] }],
			basis: [{ basis: [
				zn,
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
				U,
				zn,
				"auto",
				"initial",
				"none",
				W
			] }],
			grow: [{ grow: [
				"",
				U,
				G,
				W
			] }],
			shrink: [{ shrink: [
				"",
				U,
				G,
				W
			] }],
			order: [{ order: [
				Bn,
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
				ir,
				Zn
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				ur,
				$n
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
				Vn,
				W
			] }],
			"font-family": [{ font: [
				ar,
				er,
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
				U,
				"none",
				G,
				Qn
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
				U,
				"from-font",
				"auto",
				G,
				Zn
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				U,
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
				Bn,
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
			"bg-repeat": [{ bg: R() }],
			"bg-size": [{ bg: ee() }],
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
						Bn,
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
						Bn,
						G,
						W
					]
				},
				cr,
				nr
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: te() }],
			"gradient-via-pos": [{ via: te() }],
			"gradient-to-pos": [{ to: te() }],
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
				U,
				G,
				W
			] }],
			"outline-w": [{ outline: [
				"",
				U,
				ir,
				Zn
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				lr,
				rr
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				lr,
				rr
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: B() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [U, Zn] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": B() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				lr,
				rr
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				U,
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
			"mask-image-linear-pos": [{ "mask-linear": [U] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ie() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ie() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ie() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ie() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ie() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ie() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ie() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ie() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ie() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ie() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ie() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ie() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ie() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ie() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [G, W] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ie() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ie() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [U] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ie() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ie() }],
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
			"mask-repeat": [{ mask: R() }],
			"mask-size": [{ mask: ee() }],
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
			blur: [{ blur: ae() }],
			brightness: [{ brightness: [
				U,
				G,
				W
			] }],
			contrast: [{ contrast: [
				U,
				G,
				W
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				lr,
				rr
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				U,
				G,
				W
			] }],
			"hue-rotate": [{ "hue-rotate": [
				U,
				G,
				W
			] }],
			invert: [{ invert: [
				"",
				U,
				G,
				W
			] }],
			saturate: [{ saturate: [
				U,
				G,
				W
			] }],
			sepia: [{ sepia: [
				"",
				U,
				G,
				W
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				G,
				W
			] }],
			"backdrop-blur": [{ "backdrop-blur": ae() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				U,
				G,
				W
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				U,
				G,
				W
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				U,
				G,
				W
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				U,
				G,
				W
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				U,
				G,
				W
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				U,
				G,
				W
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				U,
				G,
				W
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				U,
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
				U,
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
				U,
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
			rotate: [{ rotate: V() }],
			"rotate-x": [{ "rotate-x": V() }],
			"rotate-y": [{ "rotate-y": V() }],
			"rotate-z": [{ "rotate-z": V() }],
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
				Bn,
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
				U,
				ir,
				Zn,
				Qn
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
}, Sr = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (Cr(e, "cacheSize", t), Cr(e, "prefix", n), Cr(e, "experimentalParseClassName", r), wr(e.theme, a.theme), wr(e.classGroups, a.classGroups), wr(e.conflictingClassGroups, a.conflictingClassGroups), wr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Cr(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), Cr(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Tr(e.theme, i.theme), Tr(e.classGroups, i.classGroups), Tr(e.conflictingClassGroups, i.conflictingClassGroups), Tr(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Er(e, i, "postfixLookupClassGroups"), Er(e, i, "orderSensitiveModifiers"), e), Cr = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, wr = (e, t) => {
	if (t) for (let n in t) Cr(e, n, t[n]);
}, Tr = (e, t) => {
	if (t) for (let n in t) Er(e, t, n);
}, Er = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Dr = (e, ...t) => typeof e == "function" ? On(xr, e, ...t) : On(() => Sr(xr(), e), ...t), Or = /*#__PURE__*/ On(xr), kr = Dr({ prefix: "uhuu" });
function K(...e) {
	return kr(Yt(e));
}
function Ar(...e) {
	return Or(Yt(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var jr = ({ onError: e }) => (t) => {
	e?.(t);
}, Mr = (e, t) => e && e > 0 ? e + t : 0, Nr = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, Pr = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = Nr(e, r, n, i), s = Mr(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, Mr(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
}, Fr = (e) => {
	let t = c(L), n = jr({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, g = (e) => `${e}mm`, y = () => Nr({
		width: u,
		left: f,
		right: p
	}, i, r, 1), b = () => {
		let e = d ?? 0;
		return d ? !m && !h && (e += r) : (e = a, m || (e += r), h || (e += r), (m || h) && (e -= (m ?? 0) + (h ?? 0))), e;
	}, x = y(), S = b(), C = (e) => e === void 0 ? void 0 : g(e), w = ((e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)))({
		backgroundColor: l,
		width: C(x),
		height: C(S),
		left: C(f > 0 ? f + r : f),
		right: C(p > 0 ? p + r : p),
		top: C(m > 0 ? m + r : m),
		bottom: C(h > 0 ? h + r : h)
	});
	return /* @__PURE__ */ _("div", {
		className: "uhuu-image-container",
		style: w,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ v("div", {
			className: "uhuu-image-inner",
			...st(e),
			children: [/* @__PURE__ */ _("img", {
				className: Ar("cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}, Ir = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lr = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Rr = (e) => {
	let t = Lr(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, zr = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Br = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, Vr = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Hr = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...Vr,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: zr("lucide", a),
	...!o && !Br(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), Ur = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(Hr, {
		ref: a,
		iconNode: t,
		className: zr(`lucide-${Ir(Rr(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Rr(e), n;
}, Wr = Ur("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Gr = Ur("arrow-up-down", [
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
]), Kr = Ur("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), qr = Ur("book-dashed", [
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
]), Jr = Ur("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Yr = Ur("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Xr = Ur("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Zr = Ur("clipboard-list", [
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
]), Qr = Ur("copy", [["rect", {
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
}]]), $r = Ur("ellipsis", [
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
]), ei = Ur("grip-vertical", [
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
]), ti = Ur("lock", [["rect", {
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
}]]), ni = Ur("maximize", [
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
]), ri = Ur("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), ii = Ur("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), ai = Ur("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), oi = Ur("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), si = Ur("trash-2", [
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
]), ci = Ur("unfold-horizontal", [
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
]), li = Ur("unfold-vertical", [
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
]), ui = Ur("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), di = Ur("zoom-in", [
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
]), fi = Ur("zoom-out", [
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
]), pi = e.createContext({ portalContainer: null });
function mi() {
	return e.useContext(pi);
}
function hi({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ _(pi.Provider, {
		value: { portalContainer: n },
		children: t
	});
}
var gi = {
	toolbar: {
		pages_one: "{{count}} Page",
		pages_other: "{{count}} Pages",
		add: "Add",
		addHint: "Add page or group",
		reorder: "Reorder",
		reorderHint: "Reorder pages and groups using drag and drop"
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
	dialog: { close: "Close" }
}, _i = {
	toolbar: {
		pages_one: "{{count}} Seite",
		pages_other: "{{count}} Seiten",
		add: "Hinzufügen",
		addHint: "Seite oder Gruppe hinzufügen",
		reorder: "Anordnen",
		reorderHint: "Seiten und Gruppen per Drag-and-drop neu anordnen"
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
	dialog: { close: "Schliessen" }
}, vi = {
	toolbar: {
		pages_one: "{{count}} page",
		pages_many: "{{count}} pages",
		pages_other: "{{count}} pages",
		add: "Ajouter",
		addHint: "Ajouter une page ou un groupe",
		reorder: "Réorganiser",
		reorderHint: "Réorganiser les pages et les groupes par glisser-déposer"
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
	dialog: { close: "Fermer" }
}, yi = {
	toolbar: {
		pages_one: "{{count}} pagina",
		pages_many: "{{count}} pagine",
		pages_other: "{{count}} pagine",
		add: "Aggiungi",
		addHint: "Aggiungi una pagina o un gruppo",
		reorder: "Riordina",
		reorderHint: "Riordina pagine e gruppi trascinandoli"
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
	dialog: { close: "Chiudi" }
}, bi = ["lang", "locale"];
function xi(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function Si(e, t) {
	for (let n of e ?? []) {
		let e = xi(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function Ci(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return Si([
		e?.locale,
		e?.host,
		...bi.map((e) => n.get(e)),
		e?.documentLang
	]) ?? Si(e?.navigatorLanguages ?? [], t) ?? "en";
}
function wi(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = xi(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
function Ti(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ei(e, t) {
	if (!Ti(t)) return e;
	let n = { ...Ti(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = Ti(r) && Ti(n[e]) ? Ei(n[e], r) : r);
	return n;
}
function Di(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = xi(e);
		t && Ti(r) && (n[t] = Ei(n[t], r));
	}
	return n;
}
function Oi(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!Ti(e)) return String(e);
	let r = [
		t,
		xi(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
function ki(e, t) {
	return e == null || typeof e != "string" ? !0 : t == null ? !1 : typeof t == "string" ? e === t : Object.values(t).includes(e);
}
var Ai = /* @__PURE__ */ new Map();
function ji(e, t) {
	if (!Ai.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		Ai.set(e, t);
	}
	let n = Ai.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function Mi(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!Ti(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function Ni(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function Pi({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = xi(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(Ti);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${ji(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = Mi(e, n);
			if (r !== void 0) return Ni(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var Fi = [
	"de",
	"fr",
	"it",
	"en"
], Ii = {
	en: gi,
	de: _i,
	fr: vi,
	it: yi
}, Li = r(null);
function Ri(e) {
	return [...Fi, ...Object.keys(e ?? {}).map((e) => xi(e) ?? e)];
}
function zi(e, t) {
	let n = Ri(e);
	if (typeof window > "u") return Ci({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return Ci({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function Bi(e, t) {
	return {
		locale: e,
		t: Pi({
			locale: e,
			catalogs: Di(Ii, t),
			fallbackLocale: "en"
		}),
		localize: (t) => Oi(t, e, "en")
	};
}
var Vi = null, Hi = !1, Ui = /* @__PURE__ */ new Set();
function Wi() {
	if (Hi || typeof window > "u") return;
	let e = window.$uhuu;
	typeof e?.listen == "function" && (Hi = !0, wi(e, (e) => {
		e !== Vi && (Vi = e, Ui.forEach((e) => e()));
	}));
}
Wi();
function Gi(e) {
	return Wi(), Ui.add(e), () => {
		Ui.delete(e);
	};
}
var Ki = () => Vi;
function qi() {
	return h(Gi, Ki, Ki);
}
var Ji = null;
function Yi() {
	return (!Ji || Ji.key !== Vi) && (Ji = {
		key: Vi,
		runtime: Bi(Vi ?? zi())
	}), Ji.runtime;
}
function Xi({ locale: e, translations: t }) {
	let n = qi(), r = d(() => xi(e) ?? n ?? zi(t), [
		e,
		n,
		t
	]);
	return d(() => Bi(r, t), [r, t]);
}
function Zi({ value: e, children: t }) {
	return /* @__PURE__ */ _(Li.Provider, {
		value: e,
		children: t
	});
}
function Qi() {
	let e = c(Li);
	return qi(), e ?? Yi();
}
//#endregion
//#region src/uhuu/appearance/appearance-core.js
var $i = "light", ea = ["light", "dark"], ta = "appearance", na = "data-uhuu-appearance", ra = "appearance";
function ia(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return ea.includes(t) ? t : null;
}
function aa(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return ia(new URLSearchParams(e).get(ta));
	} catch {
		return null;
	}
}
function oa(e) {
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
	return !t || typeof t != "object" ? null : t.action === "shaked" || t.action === "appearance" ? ia(t.data?.appearance) : null;
}
function sa(e) {
	return e?.renderer ? $i : ia(e?.explicit) ?? ia(e?.host) ?? aa(e?.search) ?? "light";
}
function ca(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = ["loaded", ra].map((n) => e.listen(n, (e) => {
		let n = ia(e?.appearance);
		n && t(n);
	}));
	return () => n.forEach((e) => typeof e == "function" && e());
}
//#endregion
//#region src/uhuu/appearance/appearance-runtime.ts
var la = null, ua = [], da = !1, fa = !1, pa = /* @__PURE__ */ new Set();
function ma() {
	return typeof window > "u" ? null : window;
}
function ha() {
	let e = ma();
	return {
		host: la,
		search: e?.location?.search,
		renderer: !!e?.$uhuu_renderer
	};
}
function ga() {
	return sa(ha());
}
function _a() {
	return sa({
		...ha(),
		explicit: ua.at(-1)
	});
}
function va() {
	let e = ma()?.document?.documentElement;
	if (typeof e?.setAttribute != "function") return;
	let t = _a();
	e.getAttribute?.("data-uhuu-appearance") !== t && e.setAttribute(na, t);
}
function ya() {
	va(), pa.forEach((e) => e());
}
function ba(e) {
	e !== la && (la = e, ya());
}
function xa() {
	let e = ma();
	e && (!da && typeof e.$uhuu?.listen == "function" && (da = !0, ca(e.$uhuu, ba)), !fa && typeof e.addEventListener == "function" && (fa = !0, e.addEventListener("message", (t) => {
		let n = e.parent;
		if (!n || n === e || t.source !== n) return;
		let r = oa(t.data);
		r && ba(r);
	})));
}
xa(), va();
function Sa(e) {
	return xa(), va(), pa.add(e), () => {
		pa.delete(e);
	};
}
var Ca = typeof window > "u" ? l : u;
function wa(e) {
	let t = h(Sa, ga, ga), n = ia(e);
	return Ca(() => {
		if (n) return ua.push(n), ya(), () => {
			let e = ua.lastIndexOf(n);
			e !== -1 && ua.splice(e, 1), ya();
		};
	}, [n]), n && !ha().renderer ? n : t;
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var Ta = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
});
function Ea() {
	let e = c(Ta), { locale: t } = Qi(), n = wa(), r = e.appearance ?? n;
	return d(() => ({
		...e,
		locale: t,
		appearance: r
	}), [
		e,
		t,
		r
	]);
}
function Da() {
	let { interactive: e } = Ea();
	return !e;
}
function Oa() {
	return typeof window < "u" && !!window?.$uhuu_renderer;
}
function ka() {
	return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Aa({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i, appearance: a }) {
	let o = Oa(), s = n || ka(), [c, l] = m(!o && t), u = Xi({
		locale: r,
		translations: i
	}), f = wa(a), p = d(() => ({
		interactive: c,
		setInteractive: l,
		enableDevTools: s,
		appearance: f
	}), [
		c,
		s,
		f
	]);
	return /* @__PURE__ */ _(Ta.Provider, {
		value: p,
		children: /* @__PURE__ */ _(Zi, {
			value: u,
			children: /* @__PURE__ */ _(hi, { children: /* @__PURE__ */ _("div", {
				"data-uhuu-interactive": c ? "" : void 0,
				style: { display: "contents" },
				children: e
			}) })
		})
	});
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var ja = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ma = Yt, Na = (e, t) => (n) => {
	if (t?.variants == null) return Ma(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = ja(t) || ja(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Ma(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, Pa = Na("uhuu:inline-flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:whitespace-nowrap uhuu:rounded-md uhuu:text-sm uhuu:font-medium uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50", {
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
}), Fa = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ _("button", {
	className: K(Pa({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
Fa.displayName = "Button";
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var Ia = Object.defineProperty, La = (e, t) => Ia(e, "name", {
	value: t,
	configurable: !0
}), Ra = !!(typeof window < "u" && window.document && window.document.createElement);
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ La(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
La(q, "composeEventHandlers");
function za(e) {
	if (!Ra) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
La(za, "getOwnerWindow");
function Ba(e) {
	if (!Ra) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
La(Ba, "getOwnerDocument");
function Va(e, t = !1) {
	let { activeElement: n } = Ba(e);
	if (!n?.nodeName) return null;
	if (Ha(n) && n.contentDocument) return Va(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Ba(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
La(Va, "getActiveElement");
function Ha(e) {
	return e.tagName === "IFRAME";
}
La(Ha, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Ua = Object.defineProperty, Wa = (e, t) => Ua(e, "name", {
	value: t,
	configurable: !0
});
function Ga(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Wa(Ga, "setRef");
function Ka(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Ga(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Ga(e[t], null);
			}
		};
	};
}
Wa(Ka, "composeRefs");
function J(...t) {
	return e.useCallback(Ka(...t), t);
}
Wa(J, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var qa = Object.defineProperty, Ja = (e, t) => qa(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ya(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ Ja((t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ _(r.Provider, {
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
	return Ja(a, "useContext"), [i, a];
}
Ja(Ya, "createContext");
// @__NO_SIDE_EFFECTS__
function Xa(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ Ja((n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ _(c.Provider, {
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
		return Ja(c, "useContext"), [s, c];
	}
	Ja(i, "createContext");
	let a = /* @__PURE__ */ Ja(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ Ja(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, Za(a, ...n)];
}
Ja(Xa, "createContextScope");
function Za(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ Ja(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ Ja(function(t) {
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
Ja(Za, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Qa = globalThis?.document ? e.useLayoutEffect : () => {}, $a = Object.defineProperty, eo = (e, t) => $a(e, "name", {
	value: t,
	configurable: !0
}), to = e.useEffectEvent, no = e.useInsertionEffect;
function ro(t) {
	if (typeof to == "function") return to(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof no == "function" ? no(() => {
		n.current = t;
	}) : Qa(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
eo(ro, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var io = Object.defineProperty, ao = (e, t) => io(e, "name", {
	value: t,
	configurable: !0
}), oo = e.useInsertionEffect || Qa;
function so({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ ao(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = co({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = lo(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
ao(so, "useControllableState");
function co({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return oo(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
ao(co, "useUncontrolledState");
function lo(e) {
	return typeof e == "function";
}
ao(lo, "isFunction");
var uo = Symbol("RADIX:SYNC_STATE");
function fo(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = ro(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === uo) return {
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
			type: uo,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
ao(fo, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var po = Object.defineProperty, mo = (e, t) => po(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function ho(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		Co(i) && typeof Oo == "function" && (i = Oo(i._payload)), e.Children.forEach(i, (e) => {
			if (xo(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Co(n) && typeof Oo == "function" && (n = Oo(n._payload)), o = vo(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? bo(o) : void 0, u = J(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? Do(t) : Eo(t));
			return i;
		}
		let d = yo(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
mo(ho, "createSlot");
var go = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function _o(e) {
	let t = /* @__PURE__ */ mo((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = go, t;
}
mo(_o, "createSlottable");
var vo = /* @__PURE__ */ mo((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function yo(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = To(a, i));
	}
	return {
		...e,
		...n
	};
}
mo(yo, "mergeProps");
function bo(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
mo(bo, "getElementRef");
function xo(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === go;
}
mo(xo, "isSlottable");
var So = Symbol.for("react.lazy");
function Co(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === So && "_payload" in e && wo(e._payload);
}
mo(Co, "isLazyComponent");
function wo(e) {
	return typeof e == "object" && !!e && "then" in e;
}
mo(wo, "isPromiseLike");
function To(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
mo(To, "concatAriaDescribedby");
var Eo = /* @__PURE__ */ mo((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Do = /* @__PURE__ */ mo((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Oo = e.use, ko = Object.defineProperty, Ao = (e, t) => ko(e, "name", {
	value: t,
	configurable: !0
}), jo = [
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
	let r = /* @__PURE__ */ ho(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ _(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function Mo(e, t) {
	e && y.flushSync(() => e.dispatchEvent(t));
}
Ao(Mo, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var No = Object.defineProperty, Po = (e, t) => No(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Fo(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Xa(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ Po((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ _(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ ho(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(c, n).collectionRef);
		return /* @__PURE__ */ _(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ ho(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = J(n, s), l = o(d, r);
		return e.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ _(p, {
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
	return Po(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
Po(Fo, "createCollection");
var Io = /* @__PURE__ */ new WeakMap(), Lo = class e extends Map {
	static {
		Po(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Io.set(this, !0);
	}
	set(e, t) {
		return Io.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Bo(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = Ro(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Ro(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Ro(this.#e, e);
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
function Ro(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = zo(e, t);
	return n === -1 ? void 0 : e[n];
}
Po(Ro, "at");
function zo(e, t) {
	let n = e.length, r = Bo(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
Po(zo, "toSafeIndex");
function Bo(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Po(Bo, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Vo(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Xa(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Lo(),
		setItemMap: /* @__PURE__ */ Po(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ Po(({ state: e, ...t }) => e ? /* @__PURE__ */ _(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ _(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ Po((e) => {
		let t = g();
		return /* @__PURE__ */ _(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ Po((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = J(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = Go(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ _(a, {
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ ho(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(u, n).collectionRef);
		return /* @__PURE__ */ _(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ ho(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = J(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Ho(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(Wo) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(Wo)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new Lo(e)));
			};
		}, [
			c,
			h,
			d
		]), /* @__PURE__ */ _(m, {
			"data-radix-collection-item": "",
			ref: u,
			children: i
		});
	});
	h.displayName = p;
	function g() {
		return e.useState(new Lo());
	}
	Po(g, "useInitCollection");
	function v(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return Po(v, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: v,
		useInitCollection: g
	}];
}
Po(Vo, "createCollection");
function Ho(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
Po(Ho, "shallowEqual");
function Uo(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Po(Uo, "isElementPreceding");
function Wo(e, t) {
	return !e[1].element || !t[1].element ? 0 : Uo(e[1].element, t[1].element) ? -1 : 1;
}
Po(Wo, "sortByDocumentPosition");
function Go(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
Po(Go, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var Ko = Object.defineProperty, qo = (e, t) => Ko(e, "name", {
	value: t,
	configurable: !0
}), Jo = {
	LTR: "ltr",
	RTL: "rtl"
}, Yo = e.createContext(void 0);
function Xo(t) {
	let n = e.useContext(Yo);
	return t || n || Jo.LTR;
}
qo(Xo, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Zo = Object.defineProperty, Qo = (e, t) => Zo(e, "name", {
	value: t,
	configurable: !0
});
function $o(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Qo($o, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var es = Object.defineProperty, ts = (e, t) => es(e, "name", {
	value: t,
	configurable: !0
}), ns = "dismissableLayer.update", rs = "dismissableLayer.pointerDownOutside", is = "dismissableLayer.focusOutside", as, os = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), ss = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ts(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(os), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = J(n, p), v = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? v.indexOf(y) : -1, x = f ? v.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = us((e) => {
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
	}), E = ds((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === v.length - 1 : !1, O = $o((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (as = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), fs(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = as));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), fs());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ ts(() => h({}), "handleUpdate");
		return document.addEventListener(ns, e), () => document.removeEventListener(ns, e);
	}, []), /* @__PURE__ */ _(jo.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: q(t.onFocusCapture, E.onFocusCapture),
		onBlurCapture: q(t.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: q(t.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function cs() {
	let t = e.useContext(os), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
ts(cs, "useDismissableLayerSurface");
var ls = /* @__PURE__ */ ts(() => !0, "IS_TRUE");
function us(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = ls } = n, c = $o(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		ts(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		ts(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		ts(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		ts(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ ts((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || ps(rs, c, p, { discrete: !0 });
				};
				if (ts(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ ts(() => l.current = !0, "onPointerDownCapture") };
}
ts(us, "usePointerDownOutside");
function ds(t, n = globalThis?.document) {
	let r = $o(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ ts((e) => {
			e.target && !i.current && ps(is, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ ts(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ ts(() => i.current = !1, "onBlurCapture")
	};
}
ts(ds, "useFocusOutside");
function fs() {
	let e = new CustomEvent(ns);
	document.dispatchEvent(e);
}
ts(fs, "dispatchUpdate");
function ps(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Mo(i, a) : i.dispatchEvent(a);
}
ts(ps, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var ms = Object.defineProperty, hs = (e, t) => ms(e, "name", {
	value: t,
	configurable: !0
}), gs = 0, _s = null;
function vs(e) {
	return ys(), e.children;
}
hs(vs, "FocusGuards");
function ys() {
	e.useEffect(() => {
		_s ||= {
			start: bs(),
			end: bs()
		};
		let { start: e, end: t } = _s;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), gs++, () => {
			gs === 1 && (_s?.start.remove(), _s?.end.remove(), _s = null), gs = Math.max(0, gs - 1);
		};
	}, []);
}
hs(ys, "useFocusGuards");
function bs() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
hs(bs, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var xs = Object.defineProperty, Ss = (e, t) => xs(e, "name", {
	value: t,
	configurable: !0
}), Cs = "focusScope.autoFocusOnMount", ws = "focusScope.autoFocusOnUnmount", Ts = {
	bubbles: !1,
	cancelable: !0
}, Es = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ss(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = $o(o), f = $o(s), p = e.useRef(null), m = J(n, u), h = e.useRef(a);
	e.useEffect(() => {
		h.current = a;
	});
	let g = e.useCallback((e) => e ? l?.contains(e) ? !0 : !!h.current?.some((t) => t.contains(e)) : !1, [l]), v = e.useRef({
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
				if (v.paused || !l) return;
				let t = e.target;
				g(t) ? p.current = t : Ls(p.current, { select: !0 });
			}, t = function(e) {
				if (v.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || Ls(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Ls(l);
			};
			Ss(e, "handleFocusIn"), Ss(t, "handleFocusOut"), Ss(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
		v.paused,
		g
	]), e.useEffect(() => {
		if (l) {
			Rs.add(v);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Cs, Ts);
				l.addEventListener(Cs, d), l.dispatchEvent(t), t.defaultPrevented || (js(Vs(Ns(l)), { select: !0 }), document.activeElement === e && Ls(l));
			}
			return () => {
				l.removeEventListener(Cs, d), setTimeout(() => {
					let t = new CustomEvent(ws, Ts);
					l.addEventListener(ws, f), l.dispatchEvent(t), t.defaultPrevented || Ls(e ?? document.body, { select: !0 }), l.removeEventListener(ws, f), Rs.remove(v);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		v
	]);
	let y = e.useCallback((e) => {
		if (!r && !i || v.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Ms(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Ls(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Ls(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		v.paused
	]);
	return /* @__PURE__ */ _(jo.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), Ds = e.createContext(null);
function Os({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ _(Ds.Provider, {
		value: e,
		children: t
	}) : t;
}
Ss(Os, "FocusScopeBranchProvider");
function ks() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ Ss((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Ss((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Ss(ks, "useFocusScopeBranchRegistry");
function As(t) {
	let n = e.useContext(Ds);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
Ss(As, "useFocusScopeBranch");
function js(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Ls(r, { select: t }), document.activeElement !== n) return;
}
Ss(js, "focusFirst");
function Ms(e) {
	let t = Ns(e);
	return [Ps(t, e), Ps(t.reverse(), e)];
}
Ss(Ms, "getTabbableEdges");
function Ns(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Ss((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Ss(Ns, "getTabbableCandidates");
function Ps(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Fs(r, { upTo: t }))) return r;
}
Ss(Ps, "findVisible");
function Fs(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Ss(Fs, "isHidden");
function Is(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Ss(Is, "isSelectableInput");
function Ls(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Is(e) && t && e.select();
	}
}
Ss(Ls, "focus");
var Rs = zs();
function zs() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Bs(e, t), e.unshift(t);
		},
		remove(t) {
			e = Bs(e, t), e[0]?.resume();
		}
	};
}
Ss(zs, "createFocusScopesStack");
function Bs(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Ss(Bs, "arrayRemove");
function Vs(e) {
	return e.filter((e) => e.tagName !== "A");
}
Ss(Vs, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Hs = Object.defineProperty, Us = (e, t) => Hs(e, "name", {
	value: t,
	configurable: !0
}), Ws = e.useId || (() => void 0), Gs = 0;
function Ks(t) {
	let [n, r] = e.useState(Ws());
	return Qa(() => {
		t || r((e) => e ?? String(Gs++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
Us(Ks, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var qs = [
	"top",
	"right",
	"bottom",
	"left"
], Js = Math.min, Ys = Math.max, Xs = Math.round, Zs = Math.floor, Qs = (e) => ({
	x: e,
	y: e
}), $s = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ec(e, t, n) {
	return Ys(e, Js(t, n));
}
function tc(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function nc(e) {
	return e.split("-")[0];
}
function rc(e) {
	return e.split("-")[1];
}
function ic(e) {
	return e === "x" ? "y" : "x";
}
function ac(e) {
	return e === "y" ? "height" : "width";
}
function oc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function sc(e) {
	return ic(oc(e));
}
function cc(e, t, n) {
	n === void 0 && (n = !1);
	let r = rc(e), i = sc(e), a = ac(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = _c(o)), [o, _c(o)];
}
function lc(e) {
	let t = _c(e);
	return [
		uc(e),
		t,
		uc(t)
	];
}
function uc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var dc = ["left", "right"], fc = ["right", "left"], pc = ["top", "bottom"], mc = ["bottom", "top"];
function hc(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? fc : dc : t ? dc : fc;
		case "left":
		case "right": return t ? pc : mc;
		default: return [];
	}
}
function gc(e, t, n, r) {
	let i = rc(e), a = hc(nc(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(uc)))), a;
}
function _c(e) {
	let t = nc(e);
	return $s[t] + e.slice(t.length);
}
function vc(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function yc(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : vc(e);
}
function bc(e) {
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
function xc(e, t, n) {
	let { reference: r, floating: i } = e, a = oc(t), o = sc(t), s = ac(o), c = nc(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = rc(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Sc(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = tc(t, e), p = yc(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = bc(await i.getClippingRect({
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
	}, y = bc(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Cc = 50, wc = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Sc
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = xc(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Cc && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = xc(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Tc = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = tc(e, t) || {};
		if (l == null) return {};
		let d = yc(u), f = {
			x: n,
			y: r
		}, p = sc(i), m = ac(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Js(d[_], T), D = Js(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = ec(E, k, O), j = !c.arrow && rc(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Ec = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = tc(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = nc(r), _ = oc(o), v = nc(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [_c(o)] : lc(o)), x = p !== "none";
			!d && x && b.push(...gc(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = cc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === oc(t) || T.every((e) => oc(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = oc(e.placement);
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
function Dc(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Oc(e) {
	return qs.some((t) => e[t] >= 0);
}
var kc = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = tc(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Dc(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Oc(e)
					} };
				}
				case "escaped": {
					let e = Dc(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Oc(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Ac = /*#__PURE__*/ new Set(["left", "top"]);
async function jc(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = nc(n), s = rc(n), c = oc(n) === "y", l = Ac.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = tc(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Mc = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await jc(t, e);
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
}, Nc = function(e) {
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
			} }, ...l } = tc(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = oc(i), p = ic(f), m = u[p], h = u[f], g = (e, t) => ec(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Pc = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = tc(e, t), u = {
				x: n,
				y: r
			}, d = oc(i), f = ic(d), p = u[f], m = u[d], h = tc(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Ac.has(nc(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Fc = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = tc(e, t), c = await i.detectOverflow(t, s), l = nc(n), u = rc(n), d = oc(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Js(p - c[m], g), y = Js(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Ys(c.left, c.right) : S = p - 2 * Ys(c.top, c.bottom)), await o({
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
function Ic() {
	return typeof window < "u";
}
function Lc(e) {
	return Bc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Rc(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zc(e) {
	return ((Bc(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Bc(e) {
	return Ic() ? e instanceof Node || e instanceof Rc(e).Node : !1;
}
function Vc(e) {
	return Ic() ? e instanceof Element || e instanceof Rc(e).Element : !1;
}
function Hc(e) {
	return Ic() ? e instanceof HTMLElement || e instanceof Rc(e).HTMLElement : !1;
}
function Uc(e) {
	return !Ic() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Rc(e).ShadowRoot;
}
function Wc(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = tl(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Gc(e) {
	return /^(table|td|th)$/.test(Lc(e));
}
function Kc(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var qc = /transform|translate|scale|rotate|perspective|filter/, Jc = /paint|layout|strict|content/, Yc = (e) => !!e && e !== "none", Xc;
function Zc(e) {
	let t = Vc(e) ? tl(e) : e;
	return Yc(t.transform) || Yc(t.translate) || Yc(t.scale) || Yc(t.rotate) || Yc(t.perspective) || !$c() && (Yc(t.backdropFilter) || Yc(t.filter)) || qc.test(t.willChange || "") || Jc.test(t.contain || "");
}
function Qc(e) {
	let t = rl(e);
	for (; Hc(t) && !el(t);) {
		if (Zc(t)) return t;
		if (Kc(t)) return null;
		t = rl(t);
	}
	return null;
}
function $c() {
	return Xc ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Xc;
}
function el(e) {
	return /^(html|body|#document)$/.test(Lc(e));
}
function tl(e) {
	return Rc(e).getComputedStyle(e);
}
function nl(e) {
	return Vc(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function rl(e) {
	if (Lc(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Uc(e) && e.host || zc(e);
	return Uc(t) ? t.host : t;
}
function il(e) {
	let t = rl(e);
	return el(t) ? (e.ownerDocument || e).body : Hc(t) && Wc(t) ? t : il(t);
}
function al(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = il(e), i = r === e.ownerDocument?.body, a = Rc(r);
	if (i) {
		let e = ol(a);
		return t.concat(a, a.visualViewport || [], Wc(r) ? r : [], e && n ? al(e) : []);
	}
	return t.concat(r, al(r, [], n));
}
function ol(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function sl(e) {
	let t = tl(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Hc(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Xs(n) !== a || Xs(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function cl(e) {
	return Vc(e) ? e : e.contextElement;
}
function ll(e) {
	let t = cl(e);
	if (!Hc(t)) return Qs(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = sl(t), o = (a ? Xs(n.width) : n.width) / r, s = (a ? Xs(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ul = /*#__PURE__*/ Qs(0);
function dl(e) {
	let t = Rc(e);
	return !$c() || !t.visualViewport ? ul : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function fl(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Rc(e);
}
function pl(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = cl(e), o = Qs(1);
	t && (r ? Vc(r) && (o = ll(r)) : o = ll(e));
	let s = fl(a, n, r) ? dl(a) : Qs(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Rc(a), t = Vc(r) ? Rc(r) : r, n = e, i = ol(n);
		for (; i && t !== n;) {
			let e = ll(i), t = i.getBoundingClientRect(), r = tl(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Rc(i), i = ol(n);
		}
	}
	return bc({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ml(e, t) {
	let n = nl(e).scrollLeft;
	return t ? t.left + n : pl(zc(e)).left + n;
}
function hl(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ml(e, n),
		y: n.top + t.scrollTop
	};
}
function gl(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = zc(r), s = t ? Kc(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Qs(1), u = Qs(0), d = Hc(r);
	if ((d || !a) && ((Lc(r) !== "body" || Wc(o)) && (c = nl(r)), d)) {
		let e = pl(r);
		l = ll(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? hl(o, c) : Qs(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function _l(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function vl(e) {
	let t = nl(e), n = e.ownerDocument.body, r = Ys(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Ys(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + ml(e), o = -t.scrollTop;
	return tl(n).direction === "rtl" && (a += Ys(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var yl = 25;
function bl(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Rc(e), a = zc(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !$c() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (ml(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= yl && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function xl(e, t) {
	let n = pl(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = ll(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Sl(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = bl(e, n, t);
	else if (t === "document") r = vl(zc(e));
	else if (Vc(t)) r = xl(t, n);
	else {
		let n = dl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return bc(r);
}
function Cl(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = al(e, [], !1).filter((e) => Vc(e) && Lc(e) !== "body"), i = null, a = tl(e).position === "fixed", o = a ? rl(e) : e;
	for (; Vc(o) && !el(o);) {
		let e = tl(o), t = Zc(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = rl(o);
	}
	return t.set(e, r), r;
}
function wl(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Kc(t) ? [] : Cl(t, this._c) : [].concat(n), r], o = Sl(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Sl(t, a[e], i);
		s = Ys(n.top, s), c = Js(n.right, c), l = Js(n.bottom, l), u = Ys(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Tl(e) {
	let { width: t, height: n } = sl(e);
	return {
		width: t,
		height: n
	};
}
function El(e, t, n) {
	let r = Hc(t), i = zc(t), a = n === "fixed", o = pl(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Qs(0);
	if ((r || !a) && ((Lc(t) !== "body" || Wc(i)) && (s = nl(t)), r)) {
		let e = pl(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = ml(i));
	let l = i && !r && !a ? hl(i, s) : Qs(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Dl(e) {
	return tl(e).position === "static";
}
function Ol(e, t) {
	if (!Hc(e) || tl(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return zc(e) === n && (n = n.ownerDocument.body), n;
}
function kl(e, t) {
	let n = Rc(e);
	if (Kc(e)) return n;
	if (!Hc(e)) {
		let t = rl(e);
		for (; t && !el(t);) {
			if (Vc(t) && !Dl(t)) return t;
			t = rl(t);
		}
		return n;
	}
	let r = Ol(e, t);
	for (; r && Gc(r) && Dl(r);) r = Ol(r, t);
	return r && el(r) && Dl(r) && !Zc(r) ? n : r || Qc(e) || n;
}
var Al = async function(e) {
	let t = this.getOffsetParent || kl, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: El(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function jl(e) {
	return tl(e).direction === "rtl";
}
var Ml = {
	convertOffsetParentRelativeRectToViewportRelativeRect: gl,
	getDocumentElement: zc,
	getClippingRect: wl,
	getOffsetParent: kl,
	getElementRects: Al,
	getClientRects: _l,
	getDimensions: Tl,
	getScale: ll,
	isElement: Vc,
	isRTL: jl
};
function Nl(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pl(e, t, n) {
	let r = null, i, a = zc(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Zs(d), h = Zs(a.clientWidth - (u + f)), g = Zs(a.clientHeight - (d + p)), _ = Zs(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Ys(0, Js(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Nl(l, e.getBoundingClientRect())) return s();
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
	let c = Rc(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Fl(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = cl(e), u = i || a ? [...l ? al(l) : [], ...t ? al(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Pl(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? pl(e) : null;
	c && g();
	function g() {
		let t = pl(e);
		h && !Nl(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Il = Mc, Ll = Nc, Rl = Ec, zl = Fc, Bl = kc, Vl = Tc, Hl = Pc, Ul = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Ml,
		...i.platform,
		_c: r
	};
	return wc(e, t, {
		...i,
		platform: a
	});
}, Wl = typeof document < "u" ? u : function() {};
function Gl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Gl(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Gl(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Kl(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ql(e, t) {
	let n = Kl(e);
	return Math.round(t * n) / n;
}
function Jl(t) {
	let n = e.useRef(t);
	return Wl(() => {
		n.current = t;
	}), n;
}
function Yl(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	Gl(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, v(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = Jl(l), k = Jl(a), A = Jl(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Ul(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Gl(E.current, t) && (E.current = t, y.flushSync(() => {
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
	Wl(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	Wl(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Wl(() => {
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
		setReference: b,
		setFloating: x
	}), [b, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = ql(P.floating, d.x), n = ql(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Kl(P.floating) >= 1.5 && { willChange: "transform" }
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
var Xl = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Vl({
				element: r.current,
				padding: i
			}).fn(n) : r ? Vl({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Zl = (e, t) => {
	let n = Il(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ql = (e, t) => {
	let n = Ll(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, $l = (e, t) => ({
	fn: Hl(e).fn,
	options: [e, t]
}), eu = (e, t) => {
	let n = Rl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, tu = (e, t) => {
	let n = zl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, nu = (e, t) => {
	let n = Bl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ru = (e, t) => {
	let n = Xl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, iu = Object.defineProperty, au = (e, t) => iu(e, "name", {
	value: t,
	configurable: !0
});
function ou(t) {
	let [n, r] = e.useState(void 0);
	return Qa(() => {
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
au(ou, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var su = Object.defineProperty, cu = (e, t) => su(e, "name", {
	value: t,
	configurable: !0
}), lu = {
	Partial: "partial",
	Always: "always"
}, uu = {
	Optimized: "optimized",
	Always: "always"
}, du = "Popper", [fu, pu] = /* @__PURE__ */ Xa(du), [mu, hu] = fu(du), gu = /* @__PURE__ */ cu((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ _(mu, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), _u = "PopperAnchor", vu = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ cu(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = hu(_u, r), s = e.useRef(null), c = o.onAnchorChange, l = J(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && Tu(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ _(jo.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), yu = "PopperContent", [bu, xu] = fu(yu), Su = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ cu(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = lu.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = uu.Optimized, onPlaced: h, ...g } = t, v = hu(yu, r), [y, b] = e.useState(null), x = J(n, b), [S, C] = e.useState(null), w = ou(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(Cu),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = Yl({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ cu((...e) => Fl(...e, { animationFrame: m === uu.Always }), "whileElementsMounted"),
		elements: { reference: v.anchor },
		middleware: [
			Zl({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && Ql({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === lu.Partial ? $l() : void 0,
				...j
			}),
			l && eu({ ...j }),
			tu({
				...j,
				apply: /* @__PURE__ */ cu(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && ru({
				element: S,
				padding: c
			}),
			wu({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && nu({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = v.setPlacementState;
	Qa(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [R, ee] = Tu(P), te = $o(h);
	Qa(() => {
		F && te?.();
	}, [F, te]);
	let z = I.arrow?.x, B = I.arrow?.y, ne = I.arrow?.centerOffset !== 0, [re, ie] = e.useState();
	return Qa(() => {
		y && ie(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ _("div", {
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
		children: /* @__PURE__ */ _(bu, {
			scope: r,
			placedSide: R,
			placedAlign: ee,
			onArrowChange: C,
			arrowX: z,
			arrowY: B,
			shouldHideArrow: ne,
			children: /* @__PURE__ */ _(jo.div, {
				"data-side": R,
				"data-align": ee,
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
function Cu(e) {
	return e !== null;
}
cu(Cu, "isNotNull");
var wu = /* @__PURE__ */ cu((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Tu(n), u = {
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
function Tu(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
cu(Tu, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var Eu = Object.defineProperty, Du = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Eu(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	Qa(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? y.createPortal(/* @__PURE__ */ _(jo.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), Ou = Object.defineProperty, ku = (e, t) => Ou(e, "name", {
	value: t,
	configurable: !0
});
function Au(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
ku(Au, "useStateMachine");
var ju = /* @__PURE__ */ ku((t) => {
	let { present: n, children: r } = t, i = Mu(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = Pu(i.ref, Iu(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Mu(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = Au(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? Fu(i.current), s.current = void 0) : o.current = "none";
	}, [c]), Qa(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Fu(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), Qa(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ ku((r) => {
				let o = Fu(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ ku((e) => {
				e.target === n && (o.current = Fu(i.current));
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
				i.current = t, s.current = Fu(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
ku(Mu, "usePresence");
function Nu(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
ku(Nu, "setRef");
function Pu(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = Nu(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : Nu(t[e], null);
			}
		};
	}, []);
}
ku(Pu, "useStableComposedRefs");
function Fu(e) {
	return e?.animationName || "none";
}
ku(Fu, "getAnimationName");
function Iu(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
ku(Iu, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var Lu = Object.defineProperty, Ru = (e, t) => Lu(e, "name", {
	value: t,
	configurable: !0
}), zu = !1;
function Bu() {
	let [t, n] = e.useState(zu);
	return e.useEffect(() => {
		zu || (zu = !0, n(!0));
	}, []), t;
}
Ru(Bu, "useIsHydrated");
var Vu = e.useSyncExternalStore;
function Hu() {
	return () => {};
}
Ru(Hu, "subscribe");
function Uu() {
	return Vu(Hu, () => !0, () => !1);
}
Ru(Uu, "useIsHydratedModern");
var Wu = typeof Vu == "function" ? Uu : Bu, Gu = Object.defineProperty, Ku = (e, t) => Gu(e, "name", {
	value: t,
	configurable: !0
}), qu = "rovingFocusGroup.onEntryFocus", Ju = {
	bubbles: !1,
	cancelable: !0
}, Yu = "RovingFocusGroup", [Xu, Zu, Qu] = /* @__PURE__ */ Fo(Yu), [$u, ed] = /* @__PURE__ */ Xa(Yu, [Qu]), td = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, nd = {
	LTR: "ltr",
	RTL: "rtl"
}, [rd, id] = $u(Yu), ad = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ku(function(e, t) {
	return /* @__PURE__ */ _(Xu.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ _(Xu.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ _(od, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), od = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ku(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = J(n, p), h = Xo(o), [g, v] = so({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: Yu
	}), [y, b] = e.useState(!1), x = $o(u), S = Zu(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(qu, x), () => e.removeEventListener(qu, x);
	}, [x]), /* @__PURE__ */ _(rd, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => v(e), [v]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ _(jo.div, {
			tabIndex: y || w === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: q(t.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: q(t.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !y) {
					let t = new CustomEvent(qu, Ju);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						fd([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				C.current = !1;
			}),
			onBlur: q(t.onBlur, () => b(!1))
		})
	});
}, "RovingFocusGroupImpl")), sd = "RovingFocusGroupItem", cd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ku(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Ks(), u = o || l, d = id(sd, r), f = d.currentTabStopId === u, p = Zu(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d, v = Wu();
	return Qa(() => {
		if (v && i) return m(), () => h();
	}, [
		v,
		i,
		m,
		h
	]), e.useEffect(() => {
		if (!v && i) return m(), () => h();
	}, [
		v,
		i,
		m,
		h
	]), /* @__PURE__ */ _(Xu.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ _(jo.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: q(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: q(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: q(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = dd(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? pd(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => fd(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), ld = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ud(e, t) {
	return t === nd.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
Ku(ud, "getDirectionAwareKey");
function dd(e, t, n) {
	let r = ud(e.key, n);
	if (!(t === td.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === td.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return ld[r];
}
Ku(dd, "getFocusIntent");
function fd(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Ku(fd, "focusFirst");
function pd(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Ku(pd, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var md = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, hd = /* @__PURE__ */ new WeakMap(), gd = /* @__PURE__ */ new WeakMap(), _d = {}, vd = 0, yd = function(e) {
	return e && (e.host || yd(e.parentNode));
}, bd = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = yd(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, xd = function(e, t, n, r) {
	var i = bd(t, Array.isArray(e) ? e : [e]);
	_d[n] || (_d[n] = /* @__PURE__ */ new WeakMap());
	var a = _d[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (hd.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				hd.set(e, c), a.set(e, l), o.push(e), c === 1 && i && gd.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), vd++, function() {
		o.forEach(function(e) {
			var t = hd.get(e) - 1, i = a.get(e) - 1;
			hd.set(e, t), a.set(e, i), t || (gd.has(e) || e.removeAttribute(r), gd.delete(e)), i || e.removeAttribute(n);
		}), vd--, vd || (hd = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap(), gd = /* @__PURE__ */ new WeakMap(), _d = {});
	};
}, Sd = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || md(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), xd(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Cd = function() {
	return Cd = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Cd.apply(this, arguments);
};
function wd(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Td(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Ed = "right-scroll-bar-position", Dd = "width-before-scroll-bar", Od = "with-scroll-bars-hidden", kd = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ad(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function jd(e, t) {
	var n = m(function() {
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
var Md = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Nd = /* @__PURE__ */ new WeakMap();
function Pd(e, t) {
	var n = jd(t || null, function(t) {
		return e.forEach(function(e) {
			return Ad(e, t);
		});
	});
	return Md(function() {
		var t = Nd.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ad(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ad(e, a);
			});
		}
		Nd.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Fd(e) {
	return e;
}
function Id(e, t) {
	t === void 0 && (t = Fd);
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
function Ld(e) {
	e === void 0 && (e = {});
	var t = Id(null);
	return t.options = Cd({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var Rd = function(t) {
	var n = t.sideCar, r = wd(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Cd({}, r));
};
Rd.isSideCarExport = !0;
function zd(e, t) {
	return e.useMedium(t), Rd;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var Bd = Ld(), Vd = function() {}, Hd = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Vd,
		onWheelCapture: Vd,
		onTouchMoveCapture: Vd
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = wd(t, [
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
	]), S = p, C = Pd([r, n]), w = Cd(Cd({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Bd,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Cd(Cd({}, w), { ref: C })) : e.createElement(y, Cd({}, w, {
		className: l,
		ref: C
	}), c));
});
Hd.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Hd.classNames = {
	fullWidth: Dd,
	zeroRight: Ed
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ud = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function Wd() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ud();
	return t && e.setAttribute("nonce", t), e;
}
function Gd(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Kd(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var qd = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Wd()) && (Gd(t, n), Kd(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Jd = function() {
	var t = qd();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Yd = function() {
	var e = Jd();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Xd = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Zd = function(e) {
	return parseInt(e || "", 10) || 0;
}, Qd = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Zd(n),
		Zd(r),
		Zd(i)
	];
}, $d = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Xd;
	var t = Qd(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ef = Yd(), tf = "data-scroll-locked", nf = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Od} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${tf}] {
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
  
  .${Ed} {
    right: ${s}px ${r};
  }
  
  .${Dd} {
    margin-right: ${s}px ${r};
  }
  
  .${Ed} .${Ed} {
    right: 0 ${r};
  }
  
  .${Dd} .${Dd} {
    margin-right: 0 ${r};
  }
  
  body[${tf}] {
    ${kd}: ${s}px;
  }
`;
}, rf = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, af = function() {
	e.useEffect(function() {
		return document.body.setAttribute(tf, (rf() + 1).toString()), function() {
			var e = rf() - 1;
			e <= 0 ? document.body.removeAttribute(tf) : document.body.setAttribute(tf, e.toString());
		};
	}, []);
}, of = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	af();
	var o = e.useMemo(function() {
		return $d(a);
	}, [a]);
	return e.createElement(ef, { styles: nf(o, !n, a, r ? "" : "!important") });
}, sf = !1;
if (typeof window < "u") try {
	var cf = Object.defineProperty({}, "passive", { get: function() {
		return sf = !0, !0;
	} });
	window.addEventListener("test", cf, cf), window.removeEventListener("test", cf, cf);
} catch {
	sf = !1;
}
var lf = sf ? { passive: !1 } : !1, uf = function(e) {
	return e.tagName === "TEXTAREA";
}, df = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !uf(e) && n[t] === "visible");
}, ff = function(e) {
	return df(e, "overflowY");
}, pf = function(e) {
	return df(e, "overflowX");
}, mf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), _f(e, r)) {
			var i = vf(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, hf = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, gf = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, _f = function(e, t) {
	return e === "v" ? ff(t) : pf(t);
}, vf = function(e, t) {
	return e === "v" ? hf(t) : gf(t);
}, yf = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, bf = function(e, t, n, r, i) {
	var a = yf(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = vf(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && _f(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, xf = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Sf = function(e) {
	return [e.deltaX, e.deltaY];
}, Cf = function(e) {
	return e && "current" in e ? e.current : e;
}, wf = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Tf = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ef = 0, Df = [];
function Of(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Ef++)[0], o = e.useState(Yd)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Td([t.lockRef.current], (t.shards || []).map(Cf), !0).filter(Boolean);
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
		var n = xf(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = mf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = mf(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return bf(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (Df.length && Df[Df.length - 1] === o) {
			var r = "deltaY" in t ? Sf(t) : xf(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && wf(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(Cf).filter(Boolean).filter(function(e) {
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
			shadowParent: kf(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = xf(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Sf(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, xf(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Df.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, lf), document.addEventListener("touchmove", l, lf), document.addEventListener("touchstart", d, lf), function() {
			Df = Df.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, lf), document.removeEventListener("touchmove", l, lf), document.removeEventListener("touchstart", d, lf);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Tf(a) }) : null, m ? e.createElement(of, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function kf(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Af = zd(Bd, Of), jf = e.forwardRef(function(t, n) {
	return e.createElement(Hd, Cd({}, t, {
		ref: n,
		sideCar: Af
	}));
});
jf.classNames = Hd.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var Mf = Object.defineProperty, Y = (e, t) => Mf(e, "name", {
	value: t,
	configurable: !0
}), Nf = {
	LTR: "ltr",
	RTL: "rtl"
}, Pf = ["Enter", " "], Ff = [
	"ArrowDown",
	"PageUp",
	"Home"
], If = [
	"ArrowUp",
	"PageDown",
	"End"
], Lf = [...Ff, ...If], Rf = {
	ltr: [...Pf, "ArrowRight"],
	rtl: [...Pf, "ArrowLeft"]
}, zf = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Bf = "Menu", [Vf, Hf, Uf] = /* @__PURE__ */ Fo(Bf), [Wf, Gf] = /* @__PURE__ */ Xa(Bf, [
	Uf,
	pu,
	ed
]), Kf = pu(), qf = ed(), [Jf, Yf] = Wf(Bf), [Xf, Zf] = Wf(Bf), Qf = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Kf(n), [l, u] = e.useState(null), d = e.useRef(!1), f = $o(o), p = Xo(a);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Y(() => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ Y(() => d.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), e.useEffect(() => {
		if (!r) return;
		let e = /* @__PURE__ */ Y(() => f(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, f]), /* @__PURE__ */ _(gu, {
		...c,
		children: /* @__PURE__ */ _(Jf, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ _(Xf, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), $f = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = Kf(n);
	return /* @__PURE__ */ _(vu, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), ep = "MenuPortal", [tp, np] = Wf(ep, { forceMount: void 0 }), rp = /* @__PURE__ */ Y((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = Yf(ep, t);
	return /* @__PURE__ */ _(tp, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ _(ju, {
			present: n || a.open,
			children: /* @__PURE__ */ _(Du, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), ip = "MenuContent", [ap, op] = Wf(ip), sp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = np(ip, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Yf(ip, e.__scopeMenu), o = Zf(ip, e.__scopeMenu);
	return /* @__PURE__ */ _(Vf.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ _(ju, {
			present: r || a.open,
			children: /* @__PURE__ */ _(Vf.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ _(cp, {
					...i,
					ref: t
				}) : /* @__PURE__ */ _(lp, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), cp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = Yf(ip, t.__scopeMenu), i = e.useRef(null), a = J(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Sd(e);
	}, []), /* @__PURE__ */ _(dp, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: q(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), lp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = Yf(ip, e.__scopeMenu);
	return /* @__PURE__ */ _(dp, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), up = /* @__PURE__ */ ho("MenuContent.ScrollLock"), dp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, v = Yf(ip, r), y = Zf(ip, r), b = Kf(r), x = qf(r), S = Hf(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	As(E);
	let { nodes: O, registry: k } = ks(), A = !!(a || h), j = J(n, T, v.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), R = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), ee = h ? jf : e.Fragment, te = h ? {
		as: up,
		allowPinchZoom: !0,
		shards: R
	} : void 0, z = /* @__PURE__ */ Y((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Rp(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Y((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), ys();
	let B = e.useCallback((e) => I.current === F.current?.side && Bp(e, F.current?.area), []);
	return /* @__PURE__ */ _(ap, {
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
		children: /* @__PURE__ */ _(Os, {
			registry: A ? k : null,
			children: /* @__PURE__ */ _(ee, {
				...te,
				children: /* @__PURE__ */ _(Es, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: q(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ _(ss, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ _(ad, {
							asChild: !0,
							...x,
							dir: y.dir,
							orientation: "vertical",
							loop: i,
							currentTabStopId: C,
							onCurrentTabStopIdChange: w,
							onEntryFocus: q(l, (e) => {
								y.isUsingKeyboardRef.current || e.preventDefault();
							}),
							preventScrollOnEntryFocus: !0,
							children: /* @__PURE__ */ _(Su, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": Np(v.open),
								"data-radix-menu-content": "",
								dir: y.dir,
								...b,
								...g,
								ref: j,
								style: {
									outline: "none",
									...g.style
								},
								onKeyDown: q(g.onKeyDown, (e) => {
									let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
									t && (e.key === "Tab" && e.preventDefault(), !n && r && z(e.key));
									let i = T.current;
									if (e.target !== i || !Lf.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									If.includes(e.key) && a.reverse(), Ip(a);
								}),
								onBlur: q(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: q(t.onPointerMove, Vp((e) => {
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
}, "MenuContentImpl")), fp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ _(jo.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), pp = "MenuItem", mp = "menu.itemSelect", hp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = Zf(pp, t.__scopeMenu), c = op(pp, t.__scopeMenu), l = J(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Y(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(mp, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(mp, (e) => i?.(e), { once: !0 }), Mo(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ _(gp, {
		...a,
		ref: l,
		disabled: r,
		onClick: q(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: q(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: q(t.onKeyDown, (e) => {
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && Pf.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), gp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = op(pp, r), c = qf(r), l = e.useRef(null), u = J(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ _(Vf.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ _(cd, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ _(jo.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: q(t.onPointerMove, Vp((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: q(t.onPointerLeave, Vp((e) => s.onItemLeave(e))),
				onFocus: q(t.onFocus, () => f(!0)),
				onBlur: q(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), _p = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ _(Sp, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ _(hp, {
			role: "menuitemcheckbox",
			"aria-checked": Pp(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Fp(n),
			onSelect: q(i.onSelect, () => r?.(Pp(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [vp, yp] = Wf("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Y(() => {}, "onValueChange")
}), bp = "MenuRadioItem", xp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { value: n, ...r } = e, i = yp(bp, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ _(Sp, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ _(hp, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Fp(a),
			onSelect: q(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [Sp, Cp] = Wf("MenuItemIndicator", { checked: !1 }), wp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ _(jo.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), Tp = "MenuSub", [Ep, Dp] = Wf(Tp), Op = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = Yf(Tp, n), s = Kf(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = $o(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ _(gu, {
		...s,
		children: /* @__PURE__ */ _(Jf, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ _(Ep, {
				scope: n,
				contentId: Ks(),
				triggerId: Ks(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), kp = "MenuSubTrigger", Ap = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = Yf(kp, t.__scopeMenu), i = Zf(kp, t.__scopeMenu), a = Dp(kp, t.__scopeMenu), o = op(kp, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = J(n, a.onTriggerChange);
	return /* @__PURE__ */ _($f, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ _(gp, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": Np(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: q(t.onPointerMove, Vp((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: q(t.onPointerLeave, Vp((e) => {
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
			onKeyDown: q(t.onKeyDown, (e) => {
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && Rf[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), jp = "MenuSubContent", Mp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = np(ip, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = Yf(ip, t.__scopeMenu), c = Zf(ip, t.__scopeMenu), l = Dp(jp, t.__scopeMenu), u = e.useRef(null), d = J(n, u);
	return /* @__PURE__ */ _(Vf.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ _(ju, {
			present: i || s.open,
			children: /* @__PURE__ */ _(Vf.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ _(dp, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === Nf.RTL ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: q(t.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: q(t.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: q(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = zf[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function Np(e) {
	return e ? "open" : "closed";
}
Y(Np, "getOpenState");
function Pp(e) {
	return e === "indeterminate";
}
Y(Pp, "isIndeterminate");
function Fp(e) {
	return Pp(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Y(Fp, "getCheckedState");
function Ip(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Y(Ip, "focusFirst");
function Lp(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Y(Lp, "wrapArray");
function Rp(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Lp(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Y(Rp, "getNextMatch");
function zp(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Y(zp, "isPointInPolygon");
function Bp(e, t) {
	return t ? zp({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Y(Bp, "isPointerInGraceArea");
function Vp(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Y(Vp, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var Hp = Object.defineProperty, Up = (e, t) => Hp(e, "name", {
	value: t,
	configurable: !0
}), Wp = "DropdownMenu", [Gp, Kp] = /* @__PURE__ */ Xa(Wp, [Gf]), qp = Gf(), [Jp, Yp] = Gp(Wp), Xp = /* @__PURE__ */ Up((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = qp(n), u = e.useRef(null), [d, f] = so({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: Wp
	});
	return /* @__PURE__ */ _(Jp, {
		scope: n,
		triggerId: Ks(),
		triggerRef: u,
		contentId: Ks(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ _(Qf, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), Zp = "DropdownMenuTrigger", Qp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Yp(Zp, n), o = qp(n), s = J(t, a.triggerRef);
	return /* @__PURE__ */ _($f, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ _(jo.button, {
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
			onPointerDown: q(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: q(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
}, "DropdownMenuTrigger")), $p = /* @__PURE__ */ Up((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = qp(t);
	return /* @__PURE__ */ _(rp, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), em = "DropdownMenuContent", tm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = Yp(em, r), o = qp(r), s = e.useRef(!1);
	return /* @__PURE__ */ _(sp, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: q(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: q(t.onInteractOutside, (e) => {
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
}, "DropdownMenuContent")), nm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(fp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), rm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(hp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), im = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(_p, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), am = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(xp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), om = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(wp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), sm = /* @__PURE__ */ Up((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = qp(t), [s, c] = so({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ _(Op, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), cm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(Ap, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), lm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Up(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = qp(n);
	return /* @__PURE__ */ _(Mp, {
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
}, "DropdownMenuSubContent")), um = Xp, dm = Qp, fm = sm, pm = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ _(cm, {
	ref: i,
	className: K("uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:focus:bg-gray-100 uhuu:data-[state=open]:bg-gray-100", t && "uhuu:pl-8", e),
	...r,
	children: n
}));
pm.displayName = cm.displayName;
var mm = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(lm, {
	ref: n,
	className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
mm.displayName = lm.displayName;
var hm = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = mi();
	return /* @__PURE__ */ _($p, {
		container: i || void 0,
		children: /* @__PURE__ */ _(tm, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
hm.displayName = tm.displayName;
var gm = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _(rm, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", t && "uhuu:pl-8", e),
	...n
}));
gm.displayName = rm.displayName;
var _m = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ _(im, {
	ref: i,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
_m.displayName = im.displayName;
var vm = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _(am, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
vm.displayName = am.displayName;
var ym = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _(nm, {
	ref: r,
	className: K("uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:font-medium", t && "uhuu:pl-8", e),
	...n
}));
ym.displayName = nm.displayName;
var bm = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(om, {
	ref: n,
	className: K("uhuu:-mx-1 uhuu:my-1 uhuu:h-px uhuu:bg-gray-200", e),
	...t
}));
bm.displayName = om.displayName;
var xm = (e, t) => {
	typeof window < "u" && window.$uhuu_renderer || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog));
}, Sm = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ _("div", {
			className: Ar("uhuu-image-overlay", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ _("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: Ar("uhuu-image-overlay uhuu-image-overlay-img", t)
	});
};
function Cm({ options: e, anchorInsets: t }) {
	let { t: n } = Qi(), r = /* @__PURE__ */ _("div", {
		"data-uhuu-chrome": !0,
		className: "uhuu:pointer-events-auto uhuu:absolute uhuu:right-2 uhuu:top-2 uhuu:z-20",
		children: /* @__PURE__ */ v(um, {
			modal: !1,
			children: [/* @__PURE__ */ _(dm, {
				asChild: !0,
				children: /* @__PURE__ */ _(Fa, {
					variant: "secondary",
					size: "icon",
					title: n("image.options"),
					className: "uhuu:h-7 uhuu:w-7 uhuu:shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ _($r, { className: "uhuu:h-4 uhuu:w-4" })
				})
			}), /* @__PURE__ */ _(hm, {
				className: "uhuu:w-40 uhuu:p-1.5",
				align: "end",
				children: e.map((e) => /* @__PURE__ */ v(gm, {
					onSelect: (t) => xm(t, e),
					disabled: e.disabled,
					children: [e.icon && /* @__PURE__ */ _("span", {
						className: "uhuu:mr-2 uhuu:inline-flex",
						children: e.icon
					}), /* @__PURE__ */ _("span", { children: e.label })]
				}, e.id))
			})]
		})
	});
	return t ? /* @__PURE__ */ _("div", {
		className: "uhuu:pointer-events-none uhuu:absolute uhuu:z-20",
		style: t,
		children: r
	}) : r;
}
var wm = (e, t, n) => t ? /* @__PURE__ */ _(Cm, {
	options: e,
	anchorInsets: n
}) : null, Tm = (e = []) => {
	let t = Da();
	return e.length > 0 && !t;
}, Em = ({ className: e, style: t, overlaySvg: n, overlayClassName: r, options: i = [], dialog: a, dialogProps: o, bleedProps: s, children: l }) => {
	let u = c(L), d = Tm(i), f = Pr({
		...s,
		pageWidth: s?.pageWidth ?? u?.page?.width ?? 210,
		bleed: s?.bleed ?? u?.page?.bleed ?? 0
	}, "bleed");
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v(Fr, {
		...s,
		dialog: a,
		children: [Sm(n, r), l]
	}), wm(i, d, f)] });
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function Dm(e) {
	let t = c(L), n = jr({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: g = 0 } = e, y = (e) => `${e}mm`, b = () => Nr({
		width: d,
		left: p,
		right: m
	}, i, r, 2), x = () => {
		let e = f ?? 0;
		return f ? !h && !g && (e += r) : (e = a, h || (e += r), g || (e += r), (h || g) && (e -= (h ?? 0) + (g ?? 0))), e;
	}, S = b(), C = x(), w = (e) => e === void 0 ? void 0 : y(e), T = (e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)), E = p > 0 ? p + r : 0;
	m > 0 && m + r;
	let D = h > 0 ? h + r : 0, O = g > 0 ? g + r : 0, k = -1 * i + E, A = h > 0 && g > 0, j = T({
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
	return /* @__PURE__ */ _("div", {
		className: "uhuu-image-container",
		style: l == "end" ? M : j,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ v("div", {
			className: "uhuu-image-inner",
			...st(e),
			children: [/* @__PURE__ */ _("img", {
				className: Ar("cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-spread-with-overlay.tsx
var Om = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(L), s = Tm(n), l = Pr({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v(Dm, {
		...i,
		dialog: r,
		children: [Sm(e, t), a]
	}), wm(n, s, l)] });
}, km = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: c, options: l = [], dialog: u, dialogProps: d, placeholder: f, children: p, imageProps: m, renderImage: h, onError: g }) => {
	let y = e.useMemo(() => u ? st({ dialog: u }) : {}, [u]), b = Tm(l), x = jr({ onError: (e) => {
		g?.(e), m?.onError?.(e);
	} }), S = e.useMemo(() => {
		if (!d) return y;
		let e = {
			...y,
			...d
		};
		return (y.className || d.className) && (e.className = Ar(y.className, d.className)), Object.keys(y).forEach((t) => {
			let n = y[t], r = d[t];
			t.startsWith("on") && typeof n == "function" && typeof r == "function" && (e[t] = (e) => {
				n(e), r(e);
			});
		}), e;
	}, [y, d]), C = m?.src ?? t, w = !C && !f && !h, T = () => {
		let e = m?.className, t = m?.style, r = C, a = m?.alt ?? n, s = {
			...m,
			src: r,
			alt: a,
			className: Ar("uhuu-image-img", i, e),
			style: {
				...o,
				...t
			}
		};
		return h ? h(s) : r ? /* @__PURE__ */ _("img", {
			...s,
			onError: x
		}) : f ?? null;
	}, E = S["data-uhuu"], D = e.Children.toArray(p).some((t) => e.isValidElement(t) ? t.type === Dm || t.type === Fr : !1);
	D && delete S["data-uhuu"];
	let O = e.Children.map(p, (t) => e.isValidElement(t) ? e.cloneElement(t, { dataUhuu: E }) : t);
	return /* @__PURE__ */ v("div", {
		className: Ar(D ? "uhuu-image-block uhuu-image-block-fill" : "uhuu-image-block", r),
		style: a,
		children: [/* @__PURE__ */ v("div", {
			...S,
			className: Ar("uhuu-image-body", w && "uhuu-image-empty", S.className),
			children: [
				T(),
				O,
				Sm(s, c)
			]
		}), wm(l, b)]
	});
}, Am = (e) => {
	let { t } = Qi(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = d(() => {
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
	]), a = d(() => e.mode ? e.mode : e.side === void 0 ? e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto" : "spread", [
		e.mode,
		e.side,
		e.width,
		e.height,
		e.left,
		e.right,
		e.top,
		e.bottom
	]), o = a === "auto" || r && r.length > 0 || n || i || e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, { mode: s, side: c, src: l, alt: u, className: f, imageClassName: p, style: m, imageStyle: h, backgroundColor: g, width: v, height: y, left: b, right: x, top: S, bottom: C, pageWidth: w, pageHeight: T, bleed: E, overlayClassName: D, dialogProps: O, placeholder: k, children: A, imageProps: j, renderImage: M, onError: N } = e, P = {
		src: l,
		backgroundColor: g,
		width: v,
		height: y,
		left: b,
		right: x,
		top: S,
		bottom: C,
		pageWidth: w,
		pageHeight: T,
		bleed: E,
		imageClassName: p,
		onError: N
	};
	if (a === "auto") return /* @__PURE__ */ _(km, {
		src: l,
		alt: u,
		className: f,
		style: m,
		imageClassName: p,
		imageStyle: h,
		overlaySvg: n,
		overlayClassName: D,
		options: r,
		dialog: i,
		dialogProps: O,
		placeholder: k,
		imageProps: j,
		renderImage: M,
		onError: N,
		children: A
	});
	if (a === "spread") {
		let e = {
			...P,
			side: c,
			imageClassName: p
		};
		return o && (n || r?.length || i) ? /* @__PURE__ */ _(Om, {
			className: f,
			style: m,
			overlaySvg: n,
			overlayClassName: D,
			options: r,
			dialog: i,
			dialogProps: O,
			spreadProps: e,
			children: A
		}) : /* @__PURE__ */ _(Dm, { ...e });
	}
	return o && (n || r?.length || i) ? /* @__PURE__ */ _(Em, {
		className: f,
		style: m,
		overlaySvg: n,
		overlayClassName: D,
		options: r,
		dialog: i,
		dialogProps: O,
		bleedProps: P,
		children: A
	}) : /* @__PURE__ */ _(Fr, { ...P });
}, X = (e) => typeof e == "object" && !!e && !Array.isArray(e), jm = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Z = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, Mm = "https://render.uhuu.io/media/thumb", Nm = "image/svg+xml";
function Pm(e) {
	return typeof e == "string" ? { url: Z(e) } : X(e) ? {
		url: Z(e.contentUrl) ?? Z(e.url) ?? Z(e.src),
		type: Z(e.encodingFormat) ?? Z(e.mimeType)
	} : { url: void 0 };
}
function Fm() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function Im(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function Lm(e, t, n) {
	if (n && n.toLowerCase().startsWith(Nm)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === Nm) return !0;
	}
	return !1;
}
var Rm = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function zm(e, t = {}) {
	let n = X(t) ? t : {}, { url: r, type: i } = Pm(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = Im(r), s = Z(n.format);
	if (Rm(o) && (s ||= Z(o.searchParams.get("format")), a = Z(o.searchParams.get("url")) ?? r, o = Im(a)), !/^https?:\/\//i.test(a) || Lm(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : Fm()) ? Z(n.printSize) ?? "4000x4000" : Z(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${Mm}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var Bm = [
	["primary", [
		"primary",
		"colorPrimary",
		"s:primary"
	]],
	["primary-foreground", ["primaryForeground", "s:primaryForeground"]],
	["secondary", [
		"secondary",
		"colorSecondary",
		"s:secondary"
	]],
	["secondary-foreground", ["secondaryForeground", "s:secondaryForeground"]],
	["secondary-soft", [
		"accent",
		"colorAccent",
		"s:accent",
		"s:secondary"
	]],
	["secondary-muted", [
		"mutedForeground",
		"colorMuted",
		"s:mutedForeground",
		"s:secondary"
	]],
	["accent", [
		"accent",
		"colorAccent",
		"s:accent"
	]],
	["accent-foreground", ["accentForeground", "s:accentForeground"]],
	["text", [
		"foreground",
		"colorForeground",
		"s:foreground"
	]],
	["muted", ["muted", "s:muted"]],
	["muted-foreground", [
		"mutedForeground",
		"colorMuted",
		"s:mutedForeground",
		"s:foreground"
	]],
	["divider", [
		"border",
		"colorBorder",
		"s:border"
	]],
	["surface", [
		"card",
		"colorSurface",
		"s:card",
		"s:background"
	]],
	["surface-foreground", [
		"cardForeground",
		"s:cardForeground",
		"s:foreground"
	]],
	["placeholder", [
		"input",
		"s:input",
		"s:border"
	]],
	["highlight", [
		"colorHighlight",
		"highlight",
		"accent",
		"colorAccent",
		"s:accent",
		"s:primary"
	]],
	["hero-from", ["heroFrom", "hero:from"]],
	["hero-via", ["heroVia", "hero:via"]],
	["hero-to", ["heroTo", "hero:to"]],
	["hero-glow", ["heroGlow", "hero:glow"]]
], Vm = [
	["sans", {
		token: "fontFamilySans",
		primitive: "fontSans",
		keys: ["sans", "body"],
		generic: "sans-serif"
	}],
	["serif", {
		token: "fontFamilySerif",
		primitive: "fontSerif",
		keys: ["serif"],
		generic: "serif"
	}],
	["display", {
		token: "fontFamilyDisplay",
		primitive: "fontDisplay",
		keys: ["display", "heading"],
		generic: "sans-serif"
	}],
	["mono", {
		token: "fontFamilyMono",
		primitive: "fontMono",
		keys: ["mono"],
		generic: "monospace"
	}]
], Hm = [
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
], Um = [
	...Hm.map(([e]) => e),
	"chart-1",
	"chart-2",
	"chart-3",
	"chart-4",
	"chart-5"
], Wm = RegExp(`^--(?:color-)?(?:${Um.join("|")})$`), Gm = /^--color-kit-[A-Za-z0-9_-]+$/, Km = /^--font-(?:kit-)?(?:sans|serif|display|mono)$/;
function qm(e) {
	let t = X(e) ? e.runtime : void 0;
	return X(t) && t.version === 2 && X(t.light) ? t : void 0;
}
var Jm = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, Ym = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, Xm = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", Zm = RegExp(`^ok(?:lch|lab)\\(\\s*${Xm}\\s+${Xm}\\s+${Xm}(?:\\s*\\/\\s*${Xm})?\\s*\\)$`, "i"), Qm = /^[a-z]+$/i, $m = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), eh = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", th = RegExp(`^(${eh})(deg|turn|rad|grad)?\\s+(${eh})%\\s+(${eh})%(?:\\s*\\/\\s*(${eh})(%)?)?$`, "i"), nh = RegExp(`^hsla?\\(\\s*(${eh})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${eh})%\\s*(?:,\\s*|\\s+)(${eh})%\\s*(?:(?:,|\\/)\\s*(${eh})(%)?\\s*)?\\)$`, "i"), rh = /[;{}<>\\\n\r]/, ih = /^[A-Za-z0-9_-]+$/, ah = (e, t, n) => Math.min(n, Math.max(t, e)), oh = (e) => e.toString(16).padStart(2, "0"), sh = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function ch(e, t, n, r, i, a) {
	let o = (Number(e) * sh[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = ah(Number(n) / 100, 0, 1), c = ah(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : ah(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${oh(d)}${oh(f)}${oh(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function lh(e) {
	let t = Z(e);
	if (!t) return;
	if (Jm.test(t) || Ym.test(t) || Zm.test(t)) return t;
	if (Qm.test(t)) return $m.has(t.toLowerCase()) ? void 0 : t;
	let n = th.exec(t) ?? nh.exec(t);
	if (n) return ch(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function uh(e, t) {
	if (t.startsWith("s:")) {
		let n = e.light?.semantic;
		return X(n) ? n[t.slice(2)] : void 0;
	}
	if (t.startsWith("hero:")) {
		let n = e.light?.aliases?.hero;
		return X(n) ? n[t.slice(5)] : void 0;
	}
	return e[t];
}
function dh(e, t) {
	for (let n of t) {
		let t = lh(uh(e, n));
		if (t !== void 0) return t;
	}
}
var fh = (e) => {
	if (typeof e == "string" && e.includes(",")) return Z(e.slice(e.indexOf(",") + 1));
};
function ph(e, t) {
	if (e.includes(",")) return e;
	let n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
	return t ? `${n}, ${t}` : n;
}
function mh(e, t) {
	if (typeof t == "string" && t) {
		if (Array.isArray(e)) return e.find((e) => X(e) && e.id === t);
		if (X(e)) return jm(e, t) && X(e[t]) ? e[t] : Object.values(e).find((e) => X(e) && e.id === t);
	}
}
function hh(e, t) {
	let n = Vm.find(([e]) => e === t)?.[1];
	if (!n || !X(e)) return;
	let r = X(e.tokens) ? e.tokens : {}, i = Z(r[n.token]), a = Z(r.primitives?.typography?.[n.primitive]), o = mh(e.fonts, e.assignments?.[`font.${t}`]);
	!Z(o?.family) && X(e.fonts) && (o = n.keys.map((t) => jm(e.fonts, t) ? e.fonts[t] : void 0).find((e) => X(e) && Z(e.family)));
	let s = Z(o?.family);
	if (s) return ph(s, Z(o.fallback) ?? fh(a) ?? fh(i) ?? n.generic);
	let c = i ?? a;
	return c ? ph(c, fh(a) ?? n.generic) : void 0;
}
function gh(e, t = {}) {
	let n = {};
	if (X(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? lh(r) : Z(r);
		t !== void 0 && !rh.test(t) && (n[e] = t);
	}
	if (!X(e)) return n;
	let r = qm(e);
	if (r) {
		for (let [e, t] of Object.entries(r.light)) {
			let r = Wm.test(e) || Gm.test(e) ? lh(t) : Km.test(e) ? Z(t) : void 0;
			r !== void 0 && !rh.test(r) && (n[e] = r);
		}
		return n;
	}
	let i = X(e.tokens) ? e.tokens : {}, a = X(i.light?.semantic) ? i.light.semantic : {};
	for (let [e, t] of Hm) {
		let r = lh(a[t]);
		r !== void 0 && (n[`--${e}`] = r, n[`--color-${e}`] = r);
	}
	for (let [e, t] of Bm) {
		let r = dh(i, t);
		r !== void 0 && (n[`--color-kit-${e}`] = r);
	}
	let o = i.light?.aliases;
	if (X(o)) {
		let e = (e, t) => {
			let r = ih.test(e) ? lh(t) : void 0;
			r !== void 0 && (n[`--color-kit-${e}`] = r);
		};
		for (let [t, n] of Object.entries(o)) if (t !== "hero" && X(n)) for (let [r, i] of Object.entries(n)) e(t === "template" ? r : `${t}-${r}`, i);
		for (let [t, n] of Object.entries(o)) X(n) || e(t, n);
	}
	for (let [t] of Vm) {
		let r = hh(e, t);
		r === void 0 || rh.test(r) || (n[`--font-${t}`] = r, n[`--font-kit-${t}`] = r);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var _h = /^https?:\/\//i, vh = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function yh(e, t) {
	let n = X(e) ? Z(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = Z(t);
	if (r && _h.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function bh(e, t) {
	let n = Z(e);
	if (n && !/\s/.test(n)) {
		if (_h.test(n) || /^data:/i.test(n)) return n;
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
var xh = /^kit-[\w-]+$/i;
function Sh(e, t = {}) {
	if (!X(e)) return null;
	let n = (Z(t.publicBaseUrl) ?? "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live").replace(/\/+$/, ""), r = Z(String(e.brandKitTeamId ?? t.teamId ?? "")), i = (e) => r ? `${n}/teams/${encodeURIComponent(r)}/kits/${encodeURIComponent(e)}/brandkit.json` : null, a = Z(e.brandKitUrl);
	if (a) return xh.test(a) ? i(a) : bh(a) ?? null;
	let o = Z(e.brandKitId);
	if (o) return xh.test(o) ? i(o) : null;
	let s = X(e.brandKit?.storage) ? Z(e.brandKit.storage.publicUrl) : void 0;
	return s && _h.test(s) ? s : null;
}
async function Ch(e, t = {}) {
	let n = t.fetch ?? globalThis.fetch;
	if (typeof n != "function") throw Error("loadBrandKit needs fetch");
	let r = await n(e, {
		signal: t.signal,
		headers: { accept: "application/json" }
	});
	if (!r.ok) throw Error(`Brand kit ${e} answered ${r.status}`);
	let i = await r.json();
	if (!X(i)) throw Error(`Brand kit ${e} is not a JSON object`);
	return i;
}
var wh = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, Th = {
	primary: "logo",
	mark: "icon"
}, Eh = {
	primary: "logo.primary",
	mark: "logo.icon"
}, Dh = (e) => X(e) ? Z(e.svg) ?? Z(e.png) : void 0;
function Oh(e, t = {}) {
	if (!X(e)) return null;
	let n = wh[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = t.background === "dark" ? "dark" : "light", i = yh(e, t.sourceUrl), a = Z(e.name), o = kh(e, n, r, i, a) ?? (n === "wordmark" ? null : Ah(e, n, r, i, a));
	return o || n !== "wordmark" ? o : Oh(e, {
		...t,
		kind: "primary"
	});
}
function kh(e, t, n, r, i) {
	let a = (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants.filter(X) : []).filter((e) => e.kind === t && Dh(e.files)), o = a.find((e) => e.background === n) ?? a.find((e) => e.background === "any") ?? a[0];
	if (!o) return null;
	let s = bh(Dh(o.files), r);
	return s ? {
		src: s,
		alt: Z(o.name) ?? i,
		kind: t,
		background: o.background,
		...X(o.minWidth) ? { minWidth: o.minWidth } : {},
		...X(o.clearSpace) ? { clearSpace: o.clearSpace } : {}
	} : null;
}
function Ah(e, t, n, r, i) {
	let a = X(e.logos) ? e.logos : {}, o = a[Th[t]];
	if (X(o)) {
		let e = n === "dark" ? "light" : "dark";
		for (let a of [n, e]) {
			let e = o[a], n = bh(X(e) ? e.src ?? e.url : e, r);
			if (n) return {
				src: n,
				alt: Z(o.alt) ?? i,
				kind: t,
				background: a
			};
		}
	}
	let s = Z(e.assignments?.[Eh[t]]), c = s && a[s] || e.assets?.[t === "mark" ? "icon" : "primary"];
	if (X(c)) {
		let e = bh(c.src ?? c.url, r);
		if (e) return {
			src: e,
			alt: Z(c.alt) ?? Z(c.name) ?? i,
			kind: t
		};
	}
	return null;
}
var jh = {
	photos: "photo",
	icons: "icon",
	graphics: "graphic",
	backgrounds: "background",
	templates: "template"
};
function Mh(e, t, n = {}) {
	if (!X(e) || !X(e.collections)) return null;
	let r = e.collections, i = jh[t] ?? t, a = Z(e.assignments?.[`media.${t}`]), o = (a && X(r[a]) ? a : void 0) ?? Object.keys(r).find((e) => X(r[e]) && r[e].type === i);
	if (!o) return null;
	let s = r[o], c = yh(e, n.sourceUrl), l = X(s.versions) ? s.versions : {}, u = [Z(n.versionId), Z(s.defaultVersionId)].find((e) => e && X(l[e])), d = u ? l[u] : void 0, f = X(s.schema?.keys) ? s.schema.keys : {}, p = [];
	d && X(d.items) ? p = [...Object.keys(f).filter((e) => e in d.items), ...Object.keys(d.items).filter((e) => !(e in f))].map((e) => [e, d.items[e]]) : Array.isArray(s.items) && (p = s.items.map((e, t) => [String(X(e) && Z(e.key) ? e.key : t), e]));
	let m = p.flatMap(([e, t]) => {
		if (!X(t)) return [];
		let n = bh(t.src ?? t.url, c);
		if (!n) return [];
		let r = Z(t.label) ?? Z(f[e]?.label) ?? Z(t.name);
		return [{
			...t,
			key: e,
			src: n,
			...r ? { label: r } : {}
		}];
	});
	return {
		id: o,
		name: Z(s.name),
		type: Z(s.type),
		versionId: u ?? void 0,
		items: m
	};
}
var Nh = (e) => typeof e == "string" ? e.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_") : "";
function Ph(e, t) {
	let n = Array.isArray(e?.config?.env) ? e.config.env : [];
	for (let e of (Array.isArray(t) ? t : [t]).map(Nh)) {
		let t = n.find((t) => X(t) && Nh(t.key) === e && Z(t.value));
		if (t) return t.value.trim();
	}
}
function Fh(e, t) {
	let n = t === "macro" ? "macro" : "micro", r = e?.config?.maps?.styles?.[n], i = X(r) ? Z(r.url) : void 0;
	if (i) return {
		url: i,
		...Z(r.name) ? { name: Z(r.name) } : {},
		source: "config.maps"
	};
	let a = n.toUpperCase(), o = Ph(e, [
		`MAP_${a}_STYLE_URL`,
		`MAP_STYLE_${a}_URL`,
		`${a}_MAP_STYLE_URL`,
		"MAP_STYLE_URL"
	]);
	return o ? {
		url: o,
		source: "config.env"
	} : null;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-fonts.js
var Ih = /["\\\n\r\f<>]/, Lh = (e) => (Array.isArray(e) ? e : X(e) ? Object.values(e) : []).filter(X);
function Rh(e) {
	return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : Z(e.cssUrl) ? "css" : void 0;
}
var zh = (e) => Z(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function Bh(e) {
	let t = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((e) => e?.weight)).map(Number).filter((e) => Number.isInteger(e) && e >= 1 && e <= 1e3);
	return [...new Set(t)].sort((e, t) => e - t);
}
function Vh(e, t) {
	let n = encodeURIComponent(e).replace(/%20/g, "+"), r = Bh(t), i = Array.isArray(t.faces) ? t.faces : [], a = Array.isArray(t.styles) ? t.styles : i.map((e) => e?.style), o = r.length > 0 ? `:wght@${r.join(";")}` : "";
	if (a.includes("italic")) {
		let e = (Array.isArray(t.styles) ? (a.includes("normal") ? [0, 1] : [1]).flatMap((e) => (r.length ? r : [400]).map((t) => [e, t])) : i.filter((e) => e?.style === "normal" || e?.style === "italic").map((e) => [+(e.style === "italic"), Number(e.weight)]).filter(([, e]) => Number.isInteger(e) && e >= 1 && e <= 1e3)).sort(([e, t], [n, r]) => e - n || t - r).map((e) => e.join(","));
		o = `:ital,wght@${[...new Set(e)].join(";")}`;
	}
	return `https://fonts.googleapis.com/css2?family=${n}${o}&display=swap`;
}
function Hh(e) {
	return Array.isArray(e.files) && e.files.length > 0 ? e.files.filter(X).map((e) => ({ ...e })) : Array.isArray(e.faces) ? e.faces.filter(X).flatMap((e) => Array.isArray(e.files) ? e.files.filter(X).map((t) => ({
		...t,
		weight: t.weight ?? e.weight,
		style: t.style ?? e.style
	})) : Object.entries(X(e.files) ? e.files : {}).map(([t, n]) => ({
		src: n,
		format: t,
		weight: e.weight,
		style: e.style
	}))) : [];
}
function Uh(e) {
	let t = String(e.format ?? e.src ?? "").toLowerCase();
	return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function Wh(e) {
	let t = String(e ?? "").trim();
	return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function Gh(e, t, n) {
	let r = bh(t.src, n);
	if (r && !Ih.test(r)) return [
		"@font-face {",
		`  font-family: "${e}";`,
		`  src: url("${r}") format("${Uh(t)}");`,
		`  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
		`  font-weight: ${Wh(t.weight)};`,
		"  font-display: swap;",
		"}"
	].join("\n");
}
function Kh(e, t = {}) {
	if (!X(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = yh(e, t?.sourceUrl), r = [], i = [], a = (e) => {
		let t = bh(e, n);
		t && !/^data:/i.test(t) && !r.includes(t) && r.push(t);
	}, o = qm(e);
	if (o) {
		for (let e of Array.isArray(o.fontStylesheets) ? o.fontStylesheets : []) a(e);
		for (let e of Array.isArray(o.fontFaces) ? o.fontFaces : []) {
			if (!X(e)) continue;
			let t = Z(e.family), r = t ? zh(t) : void 0;
			if (!r || Ih.test(r)) continue;
			let a = Gh(r, e, n);
			a && !i.includes(a) && i.push(a);
		}
		return {
			fontFaceCss: i.join("\n"),
			stylesheetUrls: r
		};
	}
	for (let t of Lh(e.fonts)) {
		let e = Z(t.family), r = e ? zh(e) : void 0;
		if (!r || Ih.test(r)) continue;
		let o = Rh(t);
		o && a(Z(t.cssUrl) ? t.cssUrl : o === "google" ? Vh(r, t) : void 0);
		for (let e of Array.isArray(t.faces) ? t.faces : []) a(e?.cssUrl);
		if (!o) for (let e of Hh(t)) {
			let t = Gh(r, e, n);
			t && !i.includes(t) && i.push(t);
		}
	}
	return {
		fontFaceCss: i.join("\n"),
		stylesheetUrls: r
	};
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-provider.tsx
var qh = r(null), Jh = typeof window > "u" ? l : u, Yh = 1e4;
function Xh(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function Zh({ brandKit: e, src: t, defaults: n, sourceUrl: r, onLoad: i, onError: a, className: o, style: s, children: c }) {
	let u = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, [f, p] = m(null);
	l(() => {
		if (!u) return;
		let e = new AbortController();
		return Ch(u, { signal: e.signal }).then((t) => {
			e.signal.aborted || (p({
				src: u,
				brandKit: t
			}), i?.(t));
		}, (t) => {
			e.signal.aborted || (p({
				src: u,
				brandKit: null
			}), a ? a(t) : console.error(t));
		}), () => e.abort();
	}, [u]);
	let h = u && f?.src === u ? f : null, g = h?.brandKit ?? e ?? null, y = h?.brandKit && u ? Xh(u) : r, b = u ? h ? h.brandKit ? "ready" : "error" : "loading" : "idle", x = d(() => {
		let e = yh(g, y);
		return {
			brandKit: g,
			cssVars: gh(g, { defaults: n }),
			sourceUrl: y,
			status: b,
			logo: (e = {}) => Oh(g, {
				...e,
				sourceUrl: y
			}),
			collection: (e, t = {}) => Mh(g, e, {
				...t,
				sourceUrl: y
			}),
			mapStyle: (e) => Fh(g, e),
			env: (e) => Ph(g, e),
			resolveUrl: (t) => bh(t, e)
		};
	}, [
		g,
		y,
		n,
		b
	]), S = d(() => Kh(g, { sourceUrl: y }), [g, y]), [C, w] = m(() => /* @__PURE__ */ new Set()), T = (e) => w((t) => t.has(e) ? t : new Set(t).add(e)), E = S.stylesheetUrls.filter((e) => !C.has(e)), D = E.join("\n"), O = b === "loading" || E.length > 0;
	return Jh(() => O ? B.hold() : void 0, [O]), l(() => {
		if (!D) return;
		let e = setTimeout(() => {
			for (let e of D.split("\n")) T(e);
		}, Yh);
		return () => clearTimeout(e);
	}, [D]), /* @__PURE__ */ v(qh.Provider, {
		value: x,
		children: [
			S.stylesheetUrls.map((e) => /* @__PURE__ */ _("link", {
				rel: "stylesheet",
				href: e,
				"data-uhuu-brand-kit-font": "",
				ref: (t) => {
					t?.sheet && T(e);
				},
				onLoad: () => T(e),
				onError: () => T(e)
			}, e)),
			S.fontFaceCss ? /* @__PURE__ */ _("style", {
				"data-uhuu-brand-kit-font": "",
				children: S.fontFaceCss
			}) : null,
			/* @__PURE__ */ _("div", {
				"data-uhuu-brand-kit": typeof g?.id == "string" ? g.id : "",
				"data-uhuu-brand-kit-status": b,
				className: o,
				style: {
					display: "contents",
					...x.cssVars,
					...s
				},
				children: c
			})
		]
	});
}
function Qh() {
	return c(qh);
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-utils.ts
var $h = "uhuu_page_editor";
function eg(e) {
	return e.kind === "group";
}
function tg(e) {
	let t = [], n = 1;
	for (let r of e) if (eg(r)) for (let e of r.pages) t.push({
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
function ng(e) {
	let t = [], n = 1;
	for (let r of e) if (eg(r)) {
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
function rg(e) {
	return tg(e).length;
}
function ig(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (eg(e)) {
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
				strictPosition: t
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
				strictPosition: t
			};
		}
	});
}
function ag(e, t) {
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
function og(e) {
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
function sg(e, t = $h) {
	let n = og(e);
	return {
		key: t,
		items: n,
		totalPages: rg(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function cg(e, t = $h) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = og(n.items);
	return {
		key: t,
		items: r,
		totalPages: rg(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function lg(e, t, n = $h) {
	let r = sg(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function ug() {
	return Math.random().toString(36).slice(2, 11);
}
function dg(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? ug() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function fg(e, t, n) {
	let r = n?.repeatable ? ug() : e;
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
function pg(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function mg(e, t, n) {
	for (let r of t) {
		let t = pg(r.start, n), i = pg(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function hg(e, t, n = 2) {
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
function gg(e, t) {
	if (!t || t.mode === "all") return e;
	let n = rg(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : hg(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (eg(t)) {
		let e = t.pages.filter((e) => e.pageNum && mg(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && mg(t.pageNum, a, n) && o.push(t);
	return o;
}
function _g(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : hg(r, t, i);
	return a.length !== 0 && mg(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function vg(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function yg(e, t) {
	return t && eg(t) ? t.id : e?.id ?? null;
}
function bg(e, t, n) {
	let r = yg(t, n);
	return r ? {
		instanceId: r,
		integration: vg(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function xg(e, t, n) {
	return bg(e, t, n).integration;
}
function Sg(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function Cg(e) {
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
function wg(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function Tg(e, t, n) {
	let r = Cg(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = wg(vg(e, i) || {}, a, n);
	return {
		...e,
		integrations: {
			...e?.integrations || {},
			[i]: o
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/template-data-provider.tsx
function Eg(e, t) {
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
var Dg = e.createContext(null);
function Og(e = $h) {
	return [e];
}
function kg(e, t, n) {
	if (!t) return e;
	if (!e) return t;
	let r = { ...t };
	return n.forEach((t) => {
		e[t] !== void 0 && (r[t] = e[t]);
	}), r;
}
function Ag({ payload: t, onPayloadChange: n, children: r, stateKey: i = $h }) {
	let [a, o] = e.useState(t ?? {}), s = e.useRef(null), c = e.useRef(!1), l = e.useRef(null), u = e.useRef(0), d = e.useRef(!0), f = e.useCallback((e) => {
		try {
			return JSON.stringify(e);
		} catch {
			return String(e);
		}
	}, []), p = e.useMemo(() => Og(i), [i]), m = e.useCallback((e, t) => {
		if (!e) return null;
		let n = { ...e };
		return t.forEach((e) => {
			delete n[e];
		}), n;
	}, []);
	e.useEffect(() => {
		if (d.current) d.current = !1, t && (s.current = t, o(t));
		else {
			if (c.current) {
				c.current = !1;
				let e = l.current === null ? null : f(m(l.current, p)), n = f(m(t, p));
				if (e !== null && e === n) {
					s.current = t;
					return;
				}
			}
			if (t !== s.current) {
				if (Date.now() - u.current < 500 && l.current !== null) {
					let e = m(t, p), n = m(l.current, p), r = e ? f(e) : null, i = n ? f(n) : null;
					if (r && r === i) {
						l.current = null, s.current = t;
						return;
					}
				}
				s.current = t, o((e) => t ? kg(e, t, p) : e);
			}
		}
	}, [
		t,
		p,
		f,
		m
	]);
	let h = e.useCallback((e) => {
		if (n?.(e), typeof window > "u") return;
		let t = window.$uhuu;
		t?.emitPayload && t.emitPayload(e);
	}, [n]), g = e.useCallback((e) => {
		c.current = !0, o((t) => {
			let n = typeof e == "function" ? e(t) : e, r = n;
			return n && typeof n == "object" && Object.keys(n).filter((e) => e.startsWith("integrations.") || e === "integrations").length > 0 && n.integrations && (r = n), l.current = r, u.current = Date.now(), queueMicrotask(() => h(r)), r;
		});
	}, [h]), v = e.useCallback((e, t, n) => {
		g((r) => ({
			...r ?? {},
			pages: {
				...r?.pages ?? {},
				[e]: {
					...r?.pages?.[e] ?? {},
					[t]: n
				}
			}
		}));
	}, [g]), y = e.useCallback((e, t) => {
		g((n) => {
			let r = n?.integrations ?? {}, i = r[e], a = typeof t == "function" ? t(i) : t;
			return {
				...n ?? {},
				integrations: {
					...r,
					[e]: a
				}
			};
		});
	}, [g]), b = e.useCallback((e, t, n) => {
		y(e, (e) => ({
			...e ?? {},
			[t]: n
		}));
	}, [y]), x = e.useCallback((e) => {
		g((t) => {
			if (!t?.integrations || !t.integrations[e]) return t;
			let { [e]: n, ...r } = t.integrations;
			return {
				...t,
				integrations: Object.keys(r).length > 0 ? r : void 0
			};
		});
	}, [g]), S = e.useCallback((e, t) => {
		g((n) => Tg(n, e, t));
	}, [g]), C = e.useCallback((e, t) => {
		let n = t ?? i;
		g((t) => lg(t, e, n));
	}, [g, i]), w = e.useCallback((e) => Eg(a, e), [a]), T = e.useMemo(() => ({
		payload: a,
		setPayload: g,
		setPageOptionValue: v,
		setIntegrationPayload: y,
		setIntegrationPayloadValue: b,
		removeIntegrationPayload: x,
		updateIntegrationByDialogPath: S,
		mergePageEditorState: C,
		getPagePayload: w
	}), [
		a,
		g,
		v,
		y,
		b,
		x,
		S,
		C,
		w
	]);
	return /* @__PURE__ */ _(Dg.Provider, {
		value: T,
		children: r
	});
}
function jg(e) {
	return e.defaultValue === void 0 ? e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "" : e.defaultValue;
}
function Mg(e, t) {
	return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function Ng(e, t, n) {
	let r = e.field ?? e.id;
	return {
		...e,
		getValue: (n) => {
			let i = t?.pages?.[n.id]?.[r];
			return i === void 0 ? jg(e) : e.type === "toggle" ? !!i : i;
		},
		onChange: (t, i) => {
			n(t, r, Mg(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function Pg(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function Fg(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function Ig(e, t) {
	if (e === "two_pages") return Fg(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function Lg({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function Rg({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function zg({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function Bg(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function Vg(e, t, n, r) {
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
function Hg(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function Ug(e, t, n) {
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
function Wg(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var Gg = 24, Kg = 64, qg = 1e3, Jg = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${Gg}px ${Kg}px`,
	overflowAnchor: "none"
};
function Yg(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && Wg(e.overflowX) && (n = t), !r && Wg(e.overflowY) && (r = t), n && r) return {
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
function Xg(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function Zg(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var Qg = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function $g({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(Qg), i = p(null);
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
	}, [e, r]), /* @__PURE__ */ _("div", {
		ref: i,
		className: `two-pages-pair two-pages-pair--${t}`,
		"data-page-item-id": n,
		children: e
	});
}
function e_(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function t_(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? Ig(t, r.map(e_).filter((e) => e !== null)) : null;
}
function n_({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(Qg), s = p(null), [u, d] = m(0), [f, h] = m(0);
	l(() => {
		if (s.current) {
			let e = () => {
				let e = s.current;
				if (e) {
					let t = e.style.transform;
					e.style.transform = "scale(1)";
					let n = e.scrollHeight, r = e.scrollWidth;
					e.style.transform = t, d(n), h(r);
				}
			};
			e();
			let t = new ResizeObserver(e);
			return t.observe(s.current), () => {
				t.disconnect();
			};
		}
	}, [e]);
	let g = u * a, y = Math.max(f * a, 150), { justify: b, origin: x } = {
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
	return o ? /* @__PURE__ */ _("div", {
		className: n,
		children: e
	}) : /* @__PURE__ */ v("div", {
		className: `uhuu:group/section ${n}`,
		style: {
			width: `${y}px`,
			minWidth: "150px"
		},
		children: [/* @__PURE__ */ _("div", { children: r ?? /* @__PURE__ */ _("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:px-4 uhuu:py-2 uhuu:border-b uhuu:border-gray-200",
			children: /* @__PURE__ */ v("div", {
				className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
				children: [t, " Controls"]
			})
		}) }), /* @__PURE__ */ _("div", {
			className: "uhuu:pt-1",
			style: {
				height: g > 0 ? `${g + 32}px` : "auto",
				minHeight: "100px"
			},
			children: /* @__PURE__ */ _("div", {
				className: `uhuu:flex uhuu:items-start ${b}`,
				children: /* @__PURE__ */ _("div", {
					ref: s,
					"data-section-content": !0,
					"data-natural-width": f,
					"data-natural-height": u,
					style: {
						transform: `scale(${a})`,
						transformOrigin: x
					},
					children: e
				})
			})
		})]
	});
}
function r_({ children: e, className: t = "", defaultZoom: n = 100, minZoom: r = 25, maxZoom: i = 200, onAddPage: a, menuItems: o, hideUI: c, preview: u = "single_page", defaultZoomMode: d = "manual", scrollMode: f = "pane" }) {
	let h = Da(), g = c ?? h, { t: y } = Qi(), [b, S] = m(n), [C, w] = m(() => Pg(d)), [T, E] = m(() => Pg(d) !== "none"), [D, O] = m(0), k = p(null), A = p(null), j = p(null), M = p(null), N = p(b);
	l(() => {
		N.current = b;
	}, [b]);
	let P = s(() => f === "pane" && A.current ? {
		x: A.current,
		y: A.current
	} : Yg(k.current), [f]), F = s((e, t, n) => {
		let a = Math.min(Math.max(e, r), i), o = M.current;
		if (!o) {
			S(a), w("none");
			return;
		}
		let s = P(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = Ug(c.map((e) => Hg(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = Hg(u.getBoundingClientRect()), f = Bg(d, t, n);
		x(() => {
			S(a), w("none");
		});
		let p = () => {
			let e = Hg(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = Vg(d, e, f.clientX, f.clientY);
			t !== 0 && s.x && (s.x.scrollLeft += t), n !== 0 && s.y && (s.y.scrollTop += n);
		};
		p(), window.requestAnimationFrame(p);
	}, [
		i,
		r,
		P
	]), I = s(() => {
		let e = (f === "pane" ? A.current : k.current)?.getBoundingClientRect();
		return e ? {
			clientX: e.left + e.width / 2,
			clientY: e.top + e.height / 2
		} : {
			clientX: 0,
			clientY: 0
		};
	}, [f]), L = s(() => {
		let e = M.current;
		if (C === "none" || !e) return;
		let t = t_(e, u);
		if (!t) return;
		let n = f === "pane" ? A.current : k.current;
		if (!n) return;
		let a = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || a.width, l = f === "pane" ? Lg({
			paneClientHeight: n.clientHeight || a.height,
			paneTop: a.top,
			viewportHeight: s
		}) : s - Math.max(a.top, 0), d = j.current ? window.getComputedStyle(j.current) : null, { availableWidth: p, availableHeight: m } = Rg({
			paneWidth: c,
			paneHeight: l,
			paddingX: d ? Number.parseFloat(d.paddingLeft) + Number.parseFloat(d.paddingRight) : 0,
			paddingY: d ? Number.parseFloat(d.paddingTop) + Number.parseFloat(d.paddingBottom) : 0,
			chromeHeight: Zg(e)
		}), h = zg({
			mode: C,
			contentWidth: t.width,
			contentHeight: t.height,
			availableWidth: p,
			availableHeight: m,
			minZoom: r,
			maxZoom: i
		});
		h !== null && (S((e) => Math.abs(e - h) < .01 ? e : h), E(!1));
	}, [
		C,
		i,
		r,
		u,
		f
	]), R = (e) => {
		w(e);
	};
	l(() => {
		if (!T) return;
		if (C === "none") {
			E(!1);
			return;
		}
		let e = window.setTimeout(() => E(!1), qg);
		return () => window.clearTimeout(e);
	}, [T, C]);
	let ee = () => {
		let e = I();
		F(b + 25, e.clientX, e.clientY);
	}, te = () => {
		let e = I();
		F(b - 25, e.clientX, e.clientY);
	};
	l(() => {
		if (C === "none" || !k.current || !M.current) return;
		let e = 0, t = () => {
			window.cancelAnimationFrame(e), e = window.requestAnimationFrame(L);
		}, n = new ResizeObserver(t);
		n.observe(k.current), A.current && n.observe(A.current), n.observe(M.current);
		let r = () => {
			M.current?.querySelectorAll("[data-section-content]").forEach((e) => {
				n.observe(e);
			});
		};
		r();
		let i = new MutationObserver(() => {
			r(), t();
		});
		return i.observe(M.current, {
			childList: !0,
			subtree: !0
		}), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), t(), () => {
			window.cancelAnimationFrame(e), n.disconnect(), i.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [C, L]), l(() => {
		if (g || f !== "pane") return;
		let e = k.current;
		if (!e) return;
		let t = () => {
			let t = Xg(e);
			O((e) => Math.abs(e - t) < .5 ? e : t);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), () => {
			n.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [g, f]), l(() => {
		if (g) return;
		let e = null, t = null, n = null, a = {
			clientX: 0,
			clientY: 0
		}, o = null, s = !1, c = () => {
			e = null;
			let t = n;
			n = null, t !== null && F(t, a.clientX, a.clientY);
		}, l = (t) => {
			if (!t.ctrlKey && !t.metaKey) return;
			t.preventDefault();
			let o = t.deltaMode === 1 ? t.deltaY * 16 : t.deltaMode === 2 ? t.deltaY * 16 * 32 : t.deltaY, s = n ?? N.current, l = Math.min(Math.max(s * 1.003 ** -o, r), i);
			a = {
				clientX: t.clientX,
				clientY: t.clientY
			}, (l !== s || n !== null) && (n = l, e === null && (e = window.requestAnimationFrame(c)));
		}, u = () => {
			t = null, !s && (o = f === "pane" ? A.current : k.current, o ? o.addEventListener("wheel", l, { passive: !1 }) : t = window.requestAnimationFrame(u));
		};
		return u(), () => {
			s = !0, e !== null && window.cancelAnimationFrame(e), t !== null && window.cancelAnimationFrame(t), o?.removeEventListener("wheel", l);
		};
	}, [
		F,
		g,
		i,
		r,
		f
	]);
	let z = b / 100;
	return g ? /* @__PURE__ */ _(Qg.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ _("div", {
			className: t,
			children: e
		})
	}) : /* @__PURE__ */ _(Qg.Provider, {
		value: {
			zoom: b,
			scaleValue: z,
			hideUI: !1
		},
		children: /* @__PURE__ */ v("div", {
			ref: k,
			className: `uhuu:flex uhuu:flex-col uhuu:flex-1 uhuu:min-h-0 ${t}`,
			children: [/* @__PURE__ */ v("div", {
				"data-uhuu-editor": !0,
				className: "uhuu:fixed uhuu:right-4 uhuu:bottom-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:px-2.5 uhuu:py-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm",
				children: [
					o,
					/* @__PURE__ */ _("div", { className: "uhuu:h-4 uhuu:w-px uhuu:bg-gray-200 uhuu:mx-0.5" }),
					/* @__PURE__ */ v(um, {
						modal: !1,
						children: [/* @__PURE__ */ _(dm, {
							asChild: !0,
							children: /* @__PURE__ */ v(Fa, {
								variant: "ghost",
								size: "sm",
								title: y("zoom.menu"),
								className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
								children: [
									Math.round(b),
									"%",
									/* @__PURE__ */ _(Yr, { className: "uhuu:w-3 uhuu:h-3 uhuu:ml-1 uhuu:opacity-60" })
								]
							})
						}), /* @__PURE__ */ v(hm, {
							className: "uhuu:w-52 uhuu:p-1.5",
							align: "end",
							children: [
								/* @__PURE__ */ v(gm, {
									onClick: () => R("width"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "width" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(ci, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitWidth") })]
								}),
								/* @__PURE__ */ v(gm, {
									onClick: () => R("height"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "height" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(li, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitHeight") })]
								}),
								/* @__PURE__ */ v(gm, {
									onClick: () => R("both"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "both" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(ni, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitPage") })]
								}),
								/* @__PURE__ */ _(bm, { className: "uhuu:my-1.5" }),
								/* @__PURE__ */ v("div", {
									className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:px-3 uhuu:py-2.5",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ _(Fa, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), te();
											},
											disabled: b <= r,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: y("zoom.zoomOut"),
											children: /* @__PURE__ */ _(fi, { className: "uhuu:w-4 uhuu:h-4" })
										}),
										/* @__PURE__ */ v("div", {
											className: "uhuu:relative",
											children: [/* @__PURE__ */ _("input", {
												type: "number",
												value: Math.round(b),
												onChange: (e) => {
													let t = Number.parseInt(e.target.value);
													if (!isNaN(t)) {
														let e = I();
														F(t, e.clientX, e.clientY);
													}
												},
												onFocus: (e) => e.target.select(),
												className: "uhuu:w-20 uhuu:pr-6 uhuu:text-center uhuu:text-sm uhuu:text-gray-700 uhuu:bg-(--uhuu-shell-surface) uhuu:border uhuu:border-gray-300 uhuu:rounded uhuu:px-2 uhuu:py-1.5 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-blue-500 uhuu:focus:border-transparent uhuu:transition-all",
												min: r,
												max: i
											}), /* @__PURE__ */ _("span", {
												className: "uhuu:absolute uhuu:right-2 uhuu:top-1/2 uhuu:-translate-y-1/2 uhuu:text-xs uhuu:text-gray-400 uhuu:pointer-events-none",
												children: "%"
											})]
										}),
										/* @__PURE__ */ _(Fa, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), ee();
											},
											disabled: b >= i,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: y("zoom.zoomIn"),
											children: /* @__PURE__ */ _(di, { className: "uhuu:w-4 uhuu:h-4" })
										})
									]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ _("div", {
				ref: A,
				className: f === "pane" ? "uhuu-zoom-pane" : void 0,
				style: f === "pane" ? {
					height: `calc(100dvh - ${D}px)`,
					maxHeight: "100%",
					overflow: "auto",
					overscrollBehavior: "contain"
				} : void 0,
				children: /* @__PURE__ */ _("div", {
					ref: j,
					className: "uhuu-zoom-pane-content",
					style: T ? {
						...Jg,
						visibility: "hidden"
					} : Jg,
					children: /* @__PURE__ */ _("div", {
						ref: M,
						className: u === "two_pages" ? "group_two_pages" : "uhuu:flex uhuu:flex-col uhuu:items-center",
						children: e
					})
				})
			})]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dialog@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_c1edb718822a6de77ff35d62c5110ee0/node_modules/@radix-ui/react-dialog/dist/index.mjs
var i_ = Object.defineProperty, a_ = (e, t) => i_(e, "name", {
	value: t,
	configurable: !0
}), o_ = "Dialog", [s_, c_] = /* @__PURE__ */ Xa(o_), [l_, u_] = s_(o_), d_ = /* @__PURE__ */ a_((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = ks(), [f, p] = so({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: o_
	}), [m, h] = e.useState(0), [g, v] = e.useState(0);
	return /* @__PURE__ */ _(l_, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Ks(),
		titleId: Ks(),
		descriptionId: Ks(),
		titlePresent: m > 0,
		descriptionPresent: g > 0,
		setTitleCount: h,
		setDescriptionCount: v,
		open: f,
		onOpenChange: p,
		onOpenToggle: e.useCallback(() => p((e) => !e), [p]),
		modal: s,
		branchNodes: u,
		branchRegistry: d,
		children: r
	});
}, "Dialog"), f_ = "DialogTrigger", p_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = u_(f_, n), a = J(t, i.triggerRef);
	return /* @__PURE__ */ _(jo.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": M_(i.open),
		...r,
		ref: a,
		onClick: q(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), m_ = "DialogPortal", [h_, g_] = s_(m_, { forceMount: void 0 }), __ = /* @__PURE__ */ a_((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = u_(m_, n);
	return /* @__PURE__ */ _(h_, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ _(ju, {
			present: r || o.open,
			children: /* @__PURE__ */ _(Du, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), v_ = "DialogOverlay", y_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let n = g_(v_, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = u_(v_, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ _(ju, {
		present: r || a.open,
		children: /* @__PURE__ */ _(x_, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), b_ = /* @__PURE__ */ ho("DialogOverlay.RemoveScroll"), x_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = u_(v_, r), o = J(n, cs());
	return /* @__PURE__ */ _(jf, {
		as: b_,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ _(jo.div, {
			"data-state": M_(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), S_ = "DialogContent", C_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let n = g_(S_, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = u_(S_, e.__scopeDialog);
	return /* @__PURE__ */ _(ju, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ _(w_, {
			...i,
			ref: t
		}) : /* @__PURE__ */ _(T_, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), w_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(t, n) {
	let r = u_(S_, t.__scopeDialog), i = e.useRef(null), a = J(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Sd(e);
	}, []), /* @__PURE__ */ _(E_, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: q(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: q(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: q(t.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), T_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(t, n) {
	let r = u_(S_, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ _(E_, {
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
}, "DialogContentNonModal")), E_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = u_(S_, n);
	return ys(), /* @__PURE__ */ _(Os, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ _(Es, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ _(ss, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? j_(o, l.descriptionId) : o,
				"data-state": M_(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), D_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = u_("DialogTitle", n), { setTitleCount: a } = i;
	return Qa(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ _(jo.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), O_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = u_("DialogDescription", n), { setDescriptionCount: a } = i;
	return Qa(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ _(jo.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), k_ = "DialogClose", A_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ a_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = u_(k_, n);
	return /* @__PURE__ */ _(jo.button, {
		type: "button",
		...r,
		ref: t,
		onClick: q(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function j_(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
a_(j_, "concatAriaDescribedby");
function M_(e) {
	return e ? "open" : "closed";
}
a_(M_, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var N_ = d_, P_ = __, F_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(y_, {
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
F_.displayName = y_.displayName;
var I_ = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = mi(), o = Qi().t("dialog.close");
	return /* @__PURE__ */ v(P_, {
		container: a || void 0,
		children: [/* @__PURE__ */ _(F_, {}), /* @__PURE__ */ v(C_, {
			ref: i,
			className: K("uhuu:fixed uhuu:z-50 uhuu:gap-4 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:transition uhuu:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out uhuu:data-[state=closed]:duration-300 uhuu:data-[state=open]:duration-500", e === "top" && "uhuu:inset-x-0 uhuu:top-0 uhuu:border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "uhuu:inset-x-0 uhuu:bottom-0 uhuu:border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "uhuu:inset-y-0 uhuu:left-0 uhuu:h-full uhuu:w-3/4 uhuu:border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left uhuu:sm:max-w-sm", e === "right" && "uhuu:inset-y-0 uhuu:right-0 uhuu:h-full uhuu:w-3/4 uhuu:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right uhuu:sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ v(A_, {
				className: "uhuu:absolute uhuu:right-4 uhuu:top-4 uhuu:rounded-sm uhuu:opacity-70 uhuu:ring-offset-(--uhuu-shell-surface) uhuu:transition-opacity uhuu:hover:opacity-100 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400 uhuu:focus:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ _(ui, { className: "uhuu:h-4 uhuu:w-4" }), /* @__PURE__ */ _("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})]
		})]
	});
});
I_.displayName = C_.displayName;
var L_ = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:space-y-2 uhuu:text-center uhuu:sm:text-left", e),
	...t
});
L_.displayName = "SheetHeader";
var R_ = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: K("uhuu:flex uhuu:flex-col-reverse uhuu:sm:flex-row uhuu:sm:justify-end uhuu:sm:space-x-2", e),
	...t
});
R_.displayName = "SheetFooter";
var z_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(D_, {
	ref: n,
	className: K("uhuu:text-lg uhuu:font-medium uhuu:text-gray-900", e),
	...t
}));
z_.displayName = D_.displayName;
var B_ = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(O_, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-500", e),
	...t
}));
B_.displayName = O_.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/document-typography.js
var V_ = [
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
], H_ = (e) => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
function U_(e = typeof document > "u" ? void 0 : document) {
	let t = e?.querySelector("[data-uhuu-interactive]") ?? e?.body, n = t ? e.defaultView?.getComputedStyle(t) : void 0;
	if (!n) return;
	let r = {};
	for (let e of V_) {
		let t = n.getPropertyValue(e);
		t && (r[H_(e)] = t);
	}
	return r;
}
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
function W_(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = I.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = u * 3.779527559, g = d * 3.779527559, y, b = () => (y ??= U_() ?? {}, {
		...y,
		width: `${h}px`,
		height: `${g}px`,
		backgroundColor: "white",
		pointerEvents: "none"
	});
	return (e, r, i) => {
		let a = e.strictPosition, o = a === "start" || a === "end";
		if (e.kind === "group") {
			let r = e.firstPageId, l = e.firstPageComponentKey ?? r, u = Eg(n, {
				id: r,
				componentKey: l
			}), d = e.firstPageComponent || (l ? t[l] : null), f = n?.integrations?.[e.id];
			return /* @__PURE__ */ v("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.id,
				children: [
					d ? /* @__PURE__ */ _("div", {
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ _("div", {
								className: "uhuu:shrink-0!",
								style: b(),
								children: /* @__PURE__ */ _(d, {
									payload: n,
									pageId: r,
									templateId: l,
									pagePayload: u,
									componentKey: l,
									integration: f,
									parentGroup: e
								})
							})
						})
					}) : /* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:text-center uhuu:p-4",
							children: [/* @__PURE__ */ _("div", {
								className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
								children: s("thumbnail.groupFallbackName", { id: e.id })
							}), /* @__PURE__ */ _("div", {
								className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
								children: r || s("thumbnail.noPreview")
							})]
						})
					}),
					/* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:right-2 uhuu:px-2 uhuu:py-1 uhuu:bg-blue-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none",
						children: s("thumbnail.groupBadge", { count: e.pageCount })
					}),
					o && /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:px-2 uhuu:py-1 uhuu:bg-gray-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none uhuu:flex uhuu:items-center uhuu:gap-1",
						children: [/* @__PURE__ */ _(ti, { className: "uhuu:size-3" }), /* @__PURE__ */ _("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
							children: /* @__PURE__ */ _("div", {
								className: "uhuu:flex-1 uhuu:min-w-0",
								children: /* @__PURE__ */ _("div", {
									className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
									children: c(e.label) || e.id
								})
							})
						})
					}),
					i && /* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-blue-500/10 uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "uhuu:text-blue-600 uhuu:font-medium uhuu:text-sm uhuu:bg-white/90 uhuu:px-3 uhuu:py-1 uhuu:rounded-full uhuu:shadow-lg",
							children: s("thumbnail.draggingGroup")
						})
					})
				]
			});
		}
		{
			let r = e.pageId, l = e.pageComponentKey ?? r, u = Eg(n, {
				id: r,
				componentKey: l
			}), d = e.pageComponent || (l ? t[l] : null), f = r ? xg(n, { id: r }) : void 0;
			return /* @__PURE__ */ v("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.pageId,
				children: [
					d ? /* @__PURE__ */ _("div", {
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:pointer-events-none",
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ _("div", {
								className: "uhuu:shrink-0!",
								style: b(),
								children: /* @__PURE__ */ _(d, {
									payload: n,
									pageId: r,
									templateId: l,
									pagePayload: u,
									componentKey: l,
									integration: f
								})
							})
						})
					}) : /* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:text-center uhuu:p-4",
							children: [/* @__PURE__ */ _("div", {
								className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
								children: s("page.fallbackName", { number: e.pageNum })
							}), /* @__PURE__ */ _("div", {
								className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
								children: r || s("thumbnail.noPreview")
							})]
						})
					}),
					o && /* @__PURE__ */ v("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:px-2 uhuu:py-1 uhuu:bg-gray-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none uhuu:flex uhuu:items-center uhuu:gap-1",
						children: [/* @__PURE__ */ _(ti, { className: "uhuu:size-3" }), /* @__PURE__ */ _("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
					}),
					/* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
							children: /* @__PURE__ */ _("div", {
								className: "uhuu:flex-1 uhuu:min-w-0",
								children: /* @__PURE__ */ _("div", {
									className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
									children: c(e.pageLabel) || s("page.fallbackName", { number: e.pageNum })
								})
							})
						})
					}),
					i && /* @__PURE__ */ _("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-blue-500/10 uhuu:pointer-events-none",
						children: /* @__PURE__ */ _("div", {
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
//#region src/uhuu/editor-shell/document/add-page-dialog.tsx
function G_({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, pageComponents: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "uhuu-page-order-grid-cols" }) {
	let l = Qi(), { t: u, localize: d } = l, [f, p] = e.useState(""), m = e.useMemo(() => {
		if (!f.trim()) return r;
		let e = f.toLowerCase();
		return r.filter((t) => (d(t.label) || "").toLowerCase().includes(e) || t.id.toLowerCase().includes(e));
	}, [
		r,
		f,
		d
	]), h = (e) => {
		n(!1), i(e);
	}, y = I.resolveDimensions(s), b = y.width / y.height, x = Math.round(200 / b), S = {
		width: "200px",
		height: `${x}px`
	}, C = e.useMemo(() => a ? W_({
		pageComponents: a,
		payload: o,
		setup: s,
		thumbnailWidth: 200,
		thumbnailHeight: x,
		i18n: l
	}) : null, [
		a,
		o,
		s,
		200,
		x,
		l
	]), w = (e, t) => {
		if (!e) return [];
		if (Array.isArray(e)) return e;
		try {
			let n = e(t);
			if (!Array.isArray(n)) return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof n), [];
			let r = n.filter((e) => typeof e == "string");
			return r.length !== n.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), r;
		} catch (e) {
			return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", e), [];
		}
	}, T = (e, t) => {
		if (e.kind === "group") {
			let t = e, n = {
				payload: o,
				item: void 0,
				parent: void 0
			}, r = w(t.pageComponentKeys, n), i = r[0];
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
	return /* @__PURE__ */ _(N_, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ v(I_, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:gap-0 uhuu:bg-gray-50 uhuu:p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ _(L_, {
				className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4 uhuu:bg-(--uhuu-shell-surface)",
				children: /* @__PURE__ */ v("div", {
					className: "uhuu:flex uhuu:items-end uhuu:gap-3",
					children: [
						/* @__PURE__ */ _("div", {
							className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
							children: /* @__PURE__ */ _(ai, { className: "uhuu:w-4 uhuu:h-4" })
						}),
						/* @__PURE__ */ v("div", {
							className: "uhuu:flex-1",
							children: [/* @__PURE__ */ _(z_, {
								className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
								children: u("addDialog.title")
							}), /* @__PURE__ */ _(B_, {
								className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
								children: u("addDialog.description")
							})]
						}),
						/* @__PURE__ */ v("div", {
							className: "uhuu:mb-0.5 uhuu:mr-8 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2 uhuu:py-1 uhuu:text-gray-400 uhuu:focus-within:border-gray-400 uhuu:focus-within:ring-2 uhuu:focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ _(oi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:shrink-0" }),
								/* @__PURE__ */ _("label", {
									className: "uhuu:sr-only",
									htmlFor: "uhuu-add-page-filter",
									children: u("addDialog.filterLabel")
								}),
								/* @__PURE__ */ _("input", {
									id: "uhuu-add-page-filter",
									type: "text",
									placeholder: u("addDialog.filterPlaceholder"),
									value: f,
									onChange: (e) => p(e.target.value),
									className: "uhuu:w-24 uhuu:border-0 uhuu:bg-transparent uhuu:text-sm uhuu:text-gray-600 uhuu:placeholder:text-gray-400 uhuu:outline-none uhuu:transition-all uhuu:duration-150 uhuu:focus:w-40"
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ _("div", {
				className: "uhuu:min-h-0 uhuu:flex-1 uhuu:overflow-auto uhuu:bg-gray-50 uhuu:p-6",
				children: m.length === 0 ? /* @__PURE__ */ v("div", {
					className: "uhuu:text-center uhuu:py-16",
					children: [
						/* @__PURE__ */ _("div", {
							className: "uhuu:w-16 uhuu:h-16 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-4",
							children: /* @__PURE__ */ _(ai, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
						}),
						/* @__PURE__ */ _("div", {
							className: "uhuu:text-lg uhuu:font-medium uhuu:text-gray-900 uhuu:mb-2",
							children: u("addDialog.emptyTitle")
						}),
						/* @__PURE__ */ _("p", {
							className: "uhuu:text-gray-500 uhuu:mb-4",
							children: f.trim() ? u("addDialog.emptyFiltered") : u("addDialog.emptyAdded")
						})
					]
				}) : /* @__PURE__ */ _("div", {
					className: c,
					children: m.map((e, t) => {
						let n = e.kind === "group", r = e.id, i = n ? d(e.label) || u("addDialog.groupFallbackName", { number: t + 1 }) : d(e.label) || u("addDialog.pageFallbackName", { id: e.id }), a = {
							payload: o,
							item: void 0,
							parent: void 0
						}, s = n ? w(e.pageComponentKeys, a).length : 1, c = !!C;
						return /* @__PURE__ */ v("div", {
							onClick: () => h(e),
							onKeyDown: (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), h(e));
							},
							role: "button",
							tabIndex: 0,
							"aria-label": u("addDialog.addItem", { name: i }),
							className: ["uhuu:group uhuu:relative uhuu:block uhuu:cursor-pointer uhuu:border-0 uhuu:bg-transparent uhuu:p-0 uhuu:text-left uhuu:transition-all uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-900 uhuu:focus-visible:ring-offset-2", !c && "uhuu:bg-(--uhuu-shell-surface) uhuu:border-2 uhuu:border-gray-200"].filter(Boolean).join(" "),
							style: S,
							children: [
								/* @__PURE__ */ _("div", {
									className: "uhuu:w-full uhuu:h-full uhuu:relative",
									children: e.thumbnail ? /* @__PURE__ */ _("div", {
										"data-uhuu-paper": !0,
										className: "uhuu:absolute uhuu:inset-0 uhuu:bg-gray-100 uhuu:hover:bg-white",
										children: /* @__PURE__ */ _("img", {
											"data-uhuu-chrome": !0,
											src: e.thumbnail,
											className: "uhuu:w-full uhuu:h-full uhuu:object-contain uhuu:pointer-events-none uhuu:object-top uhuu:border uhuu:border-gray-200 uhuu:p-4",
											alt: i
										})
									}) : C ? /* @__PURE__ */ _("div", {
										className: "uhuu:absolute uhuu:inset-0 uhuu:flex uhuu:items-center uhuu:pointer-events-none",
										children: C(T(e, t), t, !1)
									}) : /* @__PURE__ */ _(g, { children: n ? /* @__PURE__ */ v("div", {
										className: "uhuu:flex uhuu:h-full uhuu:flex-col uhuu:items-center uhuu:justify-center uhuu:p-4 uhuu:text-center",
										children: [
											/* @__PURE__ */ _("div", {
												className: "uhuu:w-16 uhuu:h-16 uhuu:bg-blue-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
												children: /* @__PURE__ */ _(ai, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-blue-600" })
											}),
											/* @__PURE__ */ _("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
												children: i
											}),
											/* @__PURE__ */ _("div", {
												className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
												children: u("page.count", { count: s })
											})
										]
									}) : /* @__PURE__ */ v("div", {
										className: "uhuu:flex uhuu:h-full uhuu:flex-col uhuu:items-center uhuu:justify-center uhuu:p-4 uhuu:text-center",
										children: [
											/* @__PURE__ */ _("div", {
												className: "uhuu:w-16 uhuu:h-16 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
												children: /* @__PURE__ */ _(ai, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
											}),
											/* @__PURE__ */ _("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
												children: i
											}),
											/* @__PURE__ */ _("div", {
												className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1",
												children: r
											})
										]
									}) })
								}),
								(!C || e?.thumbnail) && /* @__PURE__ */ v(g, { children: [n && /* @__PURE__ */ _("div", {
									className: "uhuu:absolute uhuu:top-2 uhuu:right-2 uhuu:px-2 uhuu:py-1 uhuu:bg-blue-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none",
									children: u("thumbnail.groupBadge", { count: s })
								}), /* @__PURE__ */ _("div", {
									className: "uhuu:absolute uhuu:bottom-0 uhuu:left-0 uhuu:right-0 uhuu:bg-(--uhuu-thumbnail-caption) uhuu:backdrop-blur-sm uhuu:p-3 uhuu:pointer-events-none",
									"data-item-id": r,
									children: /* @__PURE__ */ _("div", {
										className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-2 uhuu:text-white",
										children: /* @__PURE__ */ _("div", {
											className: "uhuu:flex-1 uhuu:min-w-0",
											children: /* @__PURE__ */ _("div", {
												className: "uhuu:text-sm uhuu:font-medium uhuu:truncate",
												children: i
											})
										})
									})
								})] }),
								/* @__PURE__ */ _("div", {
									className: "uhuu:absolute uhuu:top-3 uhuu:left-3 uhuu:w-8 uhuu:h-8 uhuu:bg-black uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-lg uhuu:opacity-0 uhuu:group-hover:opacity-100 uhuu:transition-opacity uhuu:pointer-events-none uhuu:z-10",
									children: /* @__PURE__ */ _(ai, { className: "uhuu:w-4 uhuu:h-4 uhuu:text-white" })
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
function K_() {
	var e = [...arguments];
	return d(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var q_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function J_(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Y_(e) {
	return "nodeType" in e;
}
function X_(e) {
	return e ? J_(e) ? e : Y_(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function Z_(e) {
	let { Document: t } = X_(e);
	return e instanceof t;
}
function Q_(e) {
	return !J_(e) && e instanceof X_(e).HTMLElement;
}
function $_(e) {
	return e instanceof X_(e).SVGElement;
}
function ev(e) {
	return e ? J_(e) ? e.document : Y_(e) ? Z_(e) ? e : Q_(e) || $_(e) ? e.ownerDocument : document : document : document;
}
var tv = q_ ? u : l;
function nv(e) {
	let t = p(e);
	return tv(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function rv() {
	let e = p(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function iv(e, t) {
	t === void 0 && (t = [e]);
	let n = p(e);
	return tv(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function av(e, t) {
	let n = p();
	return d(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function ov(e) {
	let t = nv(e), n = p(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function sv(e) {
	let t = p();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var cv = {};
function lv(e, t) {
	return d(() => {
		if (t) return t;
		let n = cv[e] == null ? 0 : cv[e] + 1;
		return cv[e] = n, e + "-" + n;
	}, [e, t]);
}
function uv(e) {
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
var dv = /*#__PURE__*/ uv(1), fv = /*#__PURE__*/ uv(-1);
function pv(e) {
	return "clientX" in e && "clientY" in e;
}
function mv(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = X_(e.target);
	return t && e instanceof t;
}
function hv(e) {
	if (!e) return !1;
	let { TouchEvent: t } = X_(e.target);
	return t && e instanceof t;
}
function gv(e) {
	if (hv(e)) {
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
	return pv(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var _v = /*#__PURE__*/ Object.freeze({
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
		if (e) return [_v.Translate.toString(e), _v.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), vv = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function yv(e) {
	return e.matches(vv) ? e : e.querySelector(vv);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var bv = { display: "none" };
function xv(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: bv
	}, r);
}
function Sv(e) {
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
function Cv() {
	let [e, t] = m("");
	return {
		announce: s((e) => {
			e != null && t(e);
		}, []),
		announcement: e
	};
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@dnd-kit/core/dist/core.esm.js
var wv = /*#__PURE__*/ r(null);
function Tv(e) {
	let t = c(wv);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function Ev() {
	let [e] = m(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var Dv = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, Ov = {
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
function kv(e) {
	let { announcements: n = Ov, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = Dv } = e, { announce: o, announcement: s } = Cv(), c = lv("DndLiveRegion"), [u, f] = m(!1);
	if (l(() => {
		f(!0);
	}, []), Tv(d(() => ({
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
	let p = t.createElement(t.Fragment, null, t.createElement(xv, {
		id: i,
		value: a.draggable
	}), t.createElement(Sv, {
		id: c,
		announcement: s
	}));
	return r ? b(p, r) : p;
}
var Av;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Av ||= {});
function jv() {}
function Mv(e, t) {
	return d(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function Nv() {
	var e = [...arguments];
	return d(() => [...e].filter((e) => e != null), [...e]);
}
var Pv = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function Fv(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function Iv(e, t) {
	let n = gv(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function Lv(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function Rv(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function zv(e) {
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
function Bv(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function Vv(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var Hv = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = Vv(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = Fv(Vv(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(Lv);
}, Uv = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = zv(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = zv(r), o = i.reduce((e, t, r) => e + Fv(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(Lv);
};
function Wv(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var Gv = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = Wv(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(Rv);
};
function Kv(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function qv(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : Pv;
}
function Jv(e) {
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
var Yv = /*#__PURE__*/ Jv(1);
function Xv(e) {
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
function Zv(e, t, n) {
	let r = Xv(t);
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
var Qv = { ignoreTransform: !1 };
function $v(e, t) {
	t === void 0 && (t = Qv);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = X_(e).getComputedStyle(e);
		t && (n = Zv(n, t, r));
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
function ey(e) {
	return $v(e, { ignoreTransform: !0 });
}
function ty(e) {
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
function ny(e, t) {
	return t === void 0 && (t = X_(e).getComputedStyle(e)), t.position === "fixed";
}
function ry(e, t) {
	t === void 0 && (t = X_(e).getComputedStyle(e));
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
function iy(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (Z_(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!Q_(i) || $_(i) || n.includes(i)) return n;
		let a = X_(e).getComputedStyle(i);
		return i !== e && ry(i, a) && n.push(i), ny(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function ay(e) {
	let [t] = iy(e, 1);
	return t ?? null;
}
function oy(e) {
	return !q_ || !e ? null : J_(e) ? e : Y_(e) ? Z_(e) || e === ev(e).scrollingElement ? window : Q_(e) ? e : null : null;
}
function sy(e) {
	return J_(e) ? e.scrollX : e.scrollLeft;
}
function cy(e) {
	return J_(e) ? e.scrollY : e.scrollTop;
}
function ly(e) {
	return {
		x: sy(e),
		y: cy(e)
	};
}
var uy;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(uy ||= {});
function dy(e) {
	return !q_ || !e ? !1 : e === document.scrollingElement;
}
function fy(e) {
	let t = {
		x: 0,
		y: 0
	}, n = dy(e) ? {
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
var py = {
	x: .2,
	y: .2
};
function my(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = py);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = fy(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = uy.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = uy.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = uy.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = uy.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function hy(e) {
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
function gy(e) {
	return e.reduce((e, t) => dv(e, ly(t)), Pv);
}
function _y(e) {
	return e.reduce((e, t) => e + sy(t), 0);
}
function vy(e) {
	return e.reduce((e, t) => e + cy(t), 0);
}
function yy(e, t) {
	if (t === void 0 && (t = $v), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	ay(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var by = [[
	"x",
	["left", "right"],
	_y
], [
	"y",
	["top", "bottom"],
	vy
]], xy = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = iy(t), r = gy(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of by) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, Sy = class {
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
function Cy(e) {
	let { EventTarget: t } = X_(e);
	return e instanceof t ? e : ev(e);
}
function wy(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var Ty;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ty ||= {});
function Ey(e) {
	e.preventDefault();
}
function Dy(e) {
	e.stopPropagation();
}
var Q;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Q ||= {});
var Oy = {
	start: [Q.Space, Q.Enter],
	cancel: [Q.Esc],
	end: [
		Q.Space,
		Q.Enter,
		Q.Tab
	]
}, ky = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case Q.Right: return {
			...n,
			x: n.x + 25
		};
		case Q.Left: return {
			...n,
			x: n.x - 25
		};
		case Q.Down: return {
			...n,
			y: n.y + 25
		};
		case Q.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, Ay = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new Sy(ev(t)), this.windowListeners = new Sy(X_(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(Ty.Resize, this.handleCancel), this.windowListeners.add(Ty.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ty.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && yy(n), t(Pv);
	}
	handleKeyDown(e) {
		if (mv(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = Oy, coordinateGetter: a = ky, scrollBehavior: o = "smooth" } = r, { code: s } = e;
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
			} : Pv;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = fv(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = fy(n), p = hy(n), m = {
						x: Math.min(i === Q.Right ? p.right - p.width / 2 : p.right, Math.max(i === Q.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === Q.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === Q.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === Q.Right && !s || i === Q.Left && !c, g = i === Q.Down && !l || i === Q.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === Q.Right && e <= d.x || i === Q.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						r.x = a ? n.scrollLeft - e : i === Q.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					}
					if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === Q.Down && e <= d.y || i === Q.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						r.y = a ? n.scrollTop - e : i === Q.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, dv(fv(u, this.referenceCoordinates), r));
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
Ay.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = Oy, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function jy(e) {
	return !!(e && "distance" in e);
}
function My(e) {
	return !!(e && "delay" in e);
}
var Ny = class {
	constructor(e, t, n) {
		n === void 0 && (n = Cy(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = ev(i), this.documentListeners = new Sy(this.document), this.listeners = new Sy(n), this.windowListeners = new Sy(X_(i)), this.initialCoordinates = gv(r) ?? Pv, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Ty.Resize, this.handleCancel), this.windowListeners.add(Ty.DragStart, Ey), this.windowListeners.add(Ty.VisibilityChange, this.handleCancel), this.windowListeners.add(Ty.ContextMenu, Ey), this.documentListeners.add(Ty.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (My(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (jy(t)) {
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
		e && (this.activated = !0, this.documentListeners.add(Ty.Click, Dy, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(Ty.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = gv(e) ?? Pv, s = fv(n, o);
		if (!t && a) {
			if (jy(a)) {
				if (a.tolerance != null && wy(s, a.tolerance)) return this.handleCancel();
				if (wy(s, a.distance)) return this.handleStart();
			}
			if (My(a) && wy(s, a.tolerance)) return this.handleCancel();
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
		e.code === Q.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, Py = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, Fy = class extends Ny {
	constructor(e) {
		let { event: t } = e, n = ev(t.target);
		super(e, Py, n);
	}
};
Fy.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Iy = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, Ly;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(Ly ||= {});
var Ry = class extends Ny {
	constructor(e) {
		super(e, Iy, ev(e.event.target));
	}
};
Ry.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== Ly.RightClick && (r?.({ event: n }), !0);
	}
}];
var zy = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, By = class extends Ny {
	constructor(e) {
		super(e, zy);
	}
	static setup() {
		return window.addEventListener(zy.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(zy.move.name, e);
		};
		function e() {}
	}
};
By.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Vy;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Vy ||= {});
var Hy;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Hy ||= {});
function Uy(e) {
	let { acceleration: t, activator: n = Vy.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = Hy.TreeOrder, pointerCoordinates: u, scrollableAncestors: f, scrollableAncestorRects: m, delta: h, threshold: g } = e, _ = Gy({
		delta: h,
		disabled: !a
	}), [v, y] = rv(), b = p({
		x: 0,
		y: 0
	}), x = p({
		x: 0,
		y: 0
	}), S = d(() => {
		switch (n) {
			case Vy.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case Vy.DraggableRect: return i;
		}
	}, [
		n,
		i,
		u
	]), C = p(null), w = s(() => {
		let e = C.current;
		if (!e) return;
		let t = b.current.x * x.current.x, n = b.current.y * x.current.y;
		e.scrollBy(t, n);
	}, []), T = d(() => c === Hy.TreeOrder ? [...f].reverse() : f, [c, f]);
	l(() => {
		if (!a || !f.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = f.indexOf(e), i = m[n];
				if (!i) continue;
				let { direction: a, speed: s } = my(e, i, S, t, g);
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
		f,
		T,
		m,
		JSON.stringify(g)
	]);
}
var Wy = {
	x: {
		[uy.Backward]: !1,
		[uy.Forward]: !1
	},
	y: {
		[uy.Backward]: !1,
		[uy.Forward]: !1
	}
};
function Gy(e) {
	let { delta: t, disabled: n } = e, r = sv(t);
	return av((e) => {
		if (n || !r || !e) return Wy;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[uy.Backward]: e.x[uy.Backward] || i.x === -1,
				[uy.Forward]: e.x[uy.Forward] || i.x === 1
			},
			y: {
				[uy.Backward]: e.y[uy.Backward] || i.y === -1,
				[uy.Forward]: e.y[uy.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function Ky(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return av((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function qy(e, t) {
	return d(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var Jy;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Jy ||= {});
var Yy;
(function(e) {
	e.Optimized = "optimized";
})(Yy ||= {});
var Xy = /*#__PURE__*/ new Map();
function Zy(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = m(null), { frequency: c, measure: u, strategy: d } = i, f = p(e), h = b(), g = iv(h), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = p(null), y = av((t) => {
		if (h && !n) return Xy;
		if (!t || t === Xy || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new xy(u(e), e) : null;
				n.rect.current = r, r && t.set(n.id, r);
			}
			return t;
		}
		return t;
	}, [
		e,
		a,
		n,
		h,
		u
	]);
	return l(() => {
		f.current = e;
	}, [e]), l(() => {
		h || _();
	}, [n, h]), l(() => {
		a && a.length > 0 && o(null);
	}, [JSON.stringify(a)]), l(() => {
		h || typeof c != "number" || v.current !== null || (v.current = setTimeout(() => {
			_(), v.current = null;
		}, c));
	}, [
		c,
		h,
		_,
		...r
	]), {
		droppableRects: y,
		measureDroppableContainers: _,
		measuringScheduled: a != null
	};
	function b() {
		switch (d) {
			case Jy.Always: return !1;
			case Jy.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function Qy(e, t) {
	return av((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function $y(e, t) {
	return Qy(e, t);
}
function eb(e) {
	let { callback: t, disabled: n } = e, r = nv(t), i = d(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function tb(e) {
	let { callback: t, disabled: n } = e, r = nv(t), i = d(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function nb(e) {
	return new xy($v(e), e);
}
function rb(e, t, n) {
	t === void 0 && (t = nb);
	let [r, i] = m(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = eb({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = tb({ callback: a });
	return tv(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function ib(e) {
	return qv(e, Qy(e));
}
var ab = [];
function ob(e) {
	let t = p(e), n = av((n) => e ? n && n !== ab && e && t.current && e.parentNode === t.current.parentNode ? n : iy(e) : ab, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function sb(e) {
	let [t, n] = m(null), r = p(e), i = s((e) => {
		let t = oy(e.target);
		t && n((e) => e ? (e.set(t, ly(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = oy(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, ly(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				oy(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), d(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => dv(e, t), Pv) : gy(e) : Pv, [e, t]);
}
function cb(e, t) {
	t === void 0 && (t = []);
	let n = p(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== Pv;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? fv(e, n.current) : Pv;
}
function lb(e) {
	l(() => {
		if (!q_) return;
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
function ub(e, t) {
	return d(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function db(e) {
	return d(() => e ? ty(e) : null, [e]);
}
var fb = [];
function pb(e, t) {
	t === void 0 && (t = $v);
	let [n] = e, r = db(n ? X_(n) : null), [i, a] = m(fb);
	function o() {
		a(() => e.length ? e.map((e) => dy(e) ? r : new xy(t(e), e)) : fb);
	}
	let s = tb({ callback: o });
	return tv(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function mb(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return Q_(t) ? t : e;
}
function hb(e) {
	let { measure: t } = e, [n, r] = m(null), i = tb({ callback: s((e) => {
		for (let { target: n } of e) if (Q_(n)) {
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
	}, [t]) }), [a, o] = ov(s((e) => {
		let n = mb(e);
		i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null);
	}, [t, i]));
	return d(() => ({
		nodeRef: a,
		rect: n,
		setRef: o
	}), [
		n,
		a,
		o
	]);
}
var gb = [{
	sensor: Fy,
	options: {}
}, {
	sensor: Ay,
	options: {}
}], _b = { current: {} }, vb = {
	draggable: { measure: ey },
	droppable: {
		measure: ey,
		strategy: Jy.WhileDragging,
		frequency: Yy.Optimized
	},
	dragOverlay: { measure: $v }
}, yb = class extends Map {
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
}, bb = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new yb(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: jv
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: vb,
	measureDroppableContainers: jv,
	windowRect: null,
	measuringScheduled: !1
}, xb = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: jv,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: jv
}, Sb = /*#__PURE__*/ r(xb), Cb = /*#__PURE__*/ r(bb);
function wb() {
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
		droppable: { containers: new yb() }
	};
}
function Tb(e, t) {
	switch (t.type) {
		case Av.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case Av.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case Av.DragEnd:
		case Av.DragCancel: return {
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
		case Av.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new yb(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case Av.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new yb(e.droppable.containers);
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
		case Av.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new yb(e.droppable.containers);
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
function Eb(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(Sb), a = sv(r), o = sv(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!mv(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = yv(e);
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
function Db(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function Ob(e) {
	return d(() => ({
		draggable: {
			...vb.draggable,
			...e?.draggable
		},
		droppable: {
			...vb.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...vb.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function kb(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = p(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	tv(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = qv(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = ay(e);
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
var Ab = /*#__PURE__*/ r({
	...Pv,
	scaleX: 1,
	scaleY: 1
}), jb;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(jb ||= {});
var Mb = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = gb, collisionDetection: c = Gv, measuring: u, modifiers: h, ...g } = e, [_, v] = f(Tb, void 0, wb), [y, b] = Ev(), [x, C] = m(jb.Uninitialized), w = x === jb.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = p({
		initial: null,
		translated: null
	}), j = d(() => T == null ? null : {
		id: T,
		data: k?.data ?? _b,
		rect: A
	}, [T, k]), M = p(null), [N, P] = m(null), [F, I] = m(null), L = iv(g, Object.values(g)), R = lv("DndDescribedBy", n), ee = d(() => O.getEnabled(), [O]), te = Ob(u), { droppableRects: z, measureDroppableContainers: B, measuringScheduled: ne } = Zy(ee, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: te.droppable
	}), re = Ky(E, T), ie = d(() => F ? gv(F) : null, [F]), ae = Pe(), V = $y(re, te.draggable.measure);
	kb({
		activeNode: T == null ? null : E.get(T),
		config: ae.layoutShiftCompensation,
		initialRect: V,
		measure: te.draggable.measure
	});
	let H = rb(re, te.draggable.measure, V), oe = rb(re ? re.parentElement : null), se = p({
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
	}), ce = O.getNodeFor(se.current.over?.id), le = hb({ measure: te.dragOverlay.measure }), ue = le.nodeRef.current ?? re, de = w ? le.rect ?? H : null, fe = !!(le.nodeRef.current && le.rect), pe = ib(fe ? null : H), me = db(ue ? X_(ue) : null), he = ob(w ? ce ?? re : null), ge = pb(he), _e = Db(h, {
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
	}), ve = ie ? dv(ie, D) : null, ye = sb(he), be = cb(ye), xe = cb(ye, [H]), Se = dv(_e, be), Ce = de ? Yv(de, _e) : null, we = j && Ce ? c({
		active: j,
		collisionRect: Ce,
		droppableRects: z,
		droppableContainers: ee,
		pointerCoordinates: ve
	}) : null, Te = Bv(we, "id"), [Ee, De] = m(null), Oe = Kv(fe ? _e : dv(_e, xe), Ee?.rect ?? null, H), ke = p(null), Ae = s((e, t) => {
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
				S(() => {
					r?.(i), C(jb.Initializing), v({
						type: Av.DragStart,
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
					type: Av.DragMove,
					coordinates: e
				});
			},
			onEnd: s(Av.DragEnd),
			onCancel: s(Av.DragCancel)
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
					}, e === Av.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = Av.DragCancel);
				}
				M.current = null, S(() => {
					v({ type: e }), C(jb.Uninitialized), De(null), P(null), I(null), ke.current = null;
					let t = e === Av.DragEnd ? "onDragEnd" : "onDragCancel";
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
	}, [E]), je = qy(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, Ae(n, t));
	}, [E, Ae]));
	lb(o), tv(() => {
		H && x === jb.Initializing && C(jb.Initialized);
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
		S(() => {
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
		S(() => {
			De(s), a?.(c), y({
				type: "onDragOver",
				event: c
			});
		});
	}, [Te]), tv(() => {
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
	]), Uy({
		...ae,
		delta: D,
		draggingRect: Ce,
		pointerCoordinates: ve,
		scrollableAncestors: he,
		scrollableAncestorRects: ge
	});
	let Me = d(() => ({
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
		measuringConfiguration: te,
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
		te,
		ne,
		me
	]), Ne = d(() => ({
		activatorEvent: F,
		activators: je,
		active: j,
		activeNodeRect: H,
		ariaDescribedById: { draggable: R },
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
		R,
		E,
		Ee,
		B
	]);
	return t.createElement(wv.Provider, { value: b }, t.createElement(Sb.Provider, { value: Ne }, t.createElement(Cb.Provider, { value: Me }, t.createElement(Ab.Provider, { value: Oe }, a)), t.createElement(Eb, { disabled: r?.restoreFocus === !1 })), t.createElement(kv, {
		...r,
		hiddenTextDescribedById: R
	}));
	function Pe() {
		let e = N?.autoScrollEnabled === !1, t = typeof i == "object" ? i.enabled === !1 : i === !1, n = w && !e && !t;
		return typeof i == "object" ? {
			...i,
			enabled: n
		} : { enabled: n };
	}
}), Nb = /*#__PURE__*/ r(null), Pb = "button", Fb = "Draggable";
function Ib(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = lv(Fb), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: f, draggableNodes: p, over: m } = c(Sb), { role: h = Pb, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? Ab : Nb), [b, x] = ov(), [S, C] = ov(), w = ub(o, t), T = iv(n);
	return tv(() => (p.set(t, {
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
		attributes: d(() => ({
			role: h,
			tabIndex: _,
			"aria-disabled": r,
			"aria-pressed": v && h === Pb ? !0 : void 0,
			"aria-roledescription": g,
			"aria-describedby": f.draggable
		}), [
			r,
			h,
			_,
			v,
			g,
			f.draggable
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
function Lb() {
	return c(Cb);
}
var Rb = "Droppable", zb = { timeout: 25 };
function Bb(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = lv(Rb), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(Sb), m = p({ disabled: n }), h = p(!1), g = p(null), _ = p(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...zb,
		...i
	}, x = iv(y ?? r), S = tb({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = ov(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = iv(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: Av.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: Av.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== m.current.disabled && (u({
			type: Av.SetDroppableDisabled,
			id: r,
			key: a,
			disabled: n
		}), m.current.disabled = n);
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
function Vb(e) {
	let { animation: r, children: i } = e, [a, o] = m(null), [s, c] = m(null), l = sv(i);
	return !i && !a && l && o(l), tv(() => {
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
var Hb = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function Ub(e) {
	let { children: n } = e;
	return t.createElement(Sb.Provider, { value: xb }, t.createElement(Ab.Provider, { value: Hb }, n));
}
var Wb = {
	position: "fixed",
	touchAction: "none"
}, Gb = (e) => mv(e) ? "transform 250ms ease" : void 0, Kb = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = Gb } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...Wb,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: _v.Transform.toString(f),
		transformOrigin: a && i ? Iv(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), qb = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: _v.Transform.toString(t) }, { transform: _v.Transform.toString(n) }];
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
function Jb(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return nv((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = mb(a);
		if (!c) return;
		let { transform: l } = X_(a).getComputedStyle(a), u = Xv(l);
		if (!u) return;
		let d = typeof t == "function" ? t : Yb(t);
		return yy(s, i.draggable.measure), d({
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
function Yb(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...qb,
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
var Xb = 0;
function Zb(e) {
	return d(() => {
		if (e != null) return Xb++, Xb;
	}, [e]);
}
var Qb = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = Lb(), w = c(Ab), T = Zb(p?.id), E = Db(s, {
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
	}), D = Qy(m), O = Jb({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(Ub, null, t.createElement(Vb, { animation: O }, p && T ? t.createElement(Kb, {
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
function $b(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function ex(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function tx(e) {
	return e !== null && e >= 0;
}
function nx(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function rx(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var ix = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = $b(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, ax = "Sortable", ox = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: ax,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: ix,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function sx(e) {
	let { children: n, id: r, items: i, strategy: a = ix, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: f, measureDroppableContainers: m } = Lb(), h = lv(ax, r), g = c.rect !== null, _ = d(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = f ? _.indexOf(f.id) : -1, x = p(_), S = !nx(_, x.current), C = b !== -1 && y === -1 || S, w = rx(o);
	tv(() => {
		S && v && m(_);
	}, [
		S,
		_,
		v,
		m
	]), l(() => {
		x.current = _;
	}, [_]);
	let T = d(() => ({
		activeIndex: y,
		containerId: h,
		disabled: w,
		disableTransforms: C,
		items: _,
		overIndex: b,
		useDragOverlay: g,
		sortedRects: ex(_, u),
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
	return t.createElement(ox.Provider, { value: T }, n);
}
var cx = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return $b(n, r, i).indexOf(t);
}, lx = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, ux = {
	duration: 200,
	easing: "ease"
}, dx = "transform", fx = /*#__PURE__*/ _v.Transition.toString({
	property: dx,
	duration: 0,
	easing: "linear"
}), px = { roleDescription: "sortable" };
function mx(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = m(null), s = p(n);
	return tv(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = $v(r.current, { ignoreTransform: !0 }), n = {
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
function hx(e) {
	let { animateLayoutChanges: t = lx, attributes: n, disabled: r, data: i, getNewIndex: a = cx, id: o, strategy: s, resizeObserverConfig: u, transition: f = ux } = e, { items: m, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(ox), C = gx(r, _), w = m.indexOf(o), T = d(() => ({
		sortable: {
			containerId: h,
			index: w,
			items: m
		},
		...i
	}), [
		h,
		i,
		w,
		m
	]), E = d(() => m.slice(m.indexOf(o)), [m, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = Bb({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: R, setActivatorNodeRef: ee, transform: te } = Ib({
		id: o,
		data: T,
		attributes: {
			...px,
			...n
		},
		disabled: C.draggable
	}), z = K_(A, F), B = !!j, ne = B && !v && tx(g) && tx(b), re = !x && L, ie = ne ? (re && ne ? te : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ae = tx(g) && tx(b) ? a({
		id: o,
		items: m,
		activeIndex: g,
		overIndex: b
	}) : w, V = j?.id, H = p({
		activeId: V,
		items: m,
		newIndex: ae,
		containerId: h
	}), oe = m !== H.current.items, se = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: B,
		id: o,
		index: w,
		items: m,
		newIndex: H.current.newIndex,
		previousItems: H.current.items,
		previousContainerId: H.current.containerId,
		transition: f,
		wasDragging: H.current.activeId != null
	}), ce = mx({
		disabled: !se,
		index: w,
		node: O,
		rect: D
	});
	return l(() => {
		B && H.current.newIndex !== ae && (H.current.newIndex = ae), h !== H.current.containerId && (H.current.containerId = h), m !== H.current.items && (H.current.items = m);
	}, [
		B,
		ae,
		h,
		m
	]), l(() => {
		if (V === H.current.activeId) return;
		if (V != null && H.current.activeId == null) {
			H.current.activeId = V;
			return;
		}
		let e = setTimeout(() => {
			H.current.activeId = V;
		}, 50);
		return () => clearTimeout(e);
	}, [V]), {
		active: j,
		activeIndex: g,
		attributes: P,
		data: T,
		rect: D,
		index: w,
		newIndex: ae,
		items: m,
		isOver: k,
		isSorting: B,
		isDragging: L,
		listeners: I,
		node: O,
		overIndex: b,
		over: R,
		setNodeRef: z,
		setActivatorNodeRef: ee,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: ce ?? ie,
		transition: le()
	};
	function le() {
		if (ce || oe && H.current.newIndex === w) return fx;
		if (!(re && !mv(M) || !f) && (B || se)) return _v.Transition.toString({
			...f,
			property: dx
		});
	}
}
function gx(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function _x(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var vx = [
	Q.Down,
	Q.Right,
	Q.Up,
	Q.Left
], yx = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if (vx.includes(e.code)) {
		if (e.preventDefault(), !n || !r) return;
		let t = [];
		a.getEnabled().forEach((n) => {
			if (!n || n != null && n.disabled) return;
			let a = i.get(n.id);
			if (a) switch (e.code) {
				case Q.Down:
					r.top < a.top && t.push(n);
					break;
				case Q.Up:
					r.top > a.top && t.push(n);
					break;
				case Q.Left:
					r.left > a.left && t.push(n);
					break;
				case Q.Right: r.left < a.left && t.push(n);
			}
		});
		let c = Uv({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = Bv(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = iy(c).some((e, t) => s[t] !== e), i = bx(e, t), a = xx(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : fv(u, l);
			}
		}
	}
};
function bx(e, t) {
	return !_x(e) || !_x(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function xx(e, t) {
	return !_x(e) || !_x(t) || !bx(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function Sx({ item: e, index: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, disabled: a = !1 }) {
	let { attributes: o, listeners: s, setNodeRef: c, transform: l, transition: u, isDragging: d } = hx({
		id: i(e),
		disabled: a
	}), f = {
		transform: _v.Transform.toString(l),
		transition: u
	};
	return /* @__PURE__ */ v("div", {
		ref: c,
		style: f,
		className: `uhuu:relative uhuu:group/drag-item ${d ? "uhuu:opacity-50" : ""} ${a ? "uhuu:opacity-60" : ""}`,
		children: [n(e, t, d), !a && (r ? /* @__PURE__ */ _("div", {
			...o,
			...s,
			children: r(e, t)
		}) : /* @__PURE__ */ _("div", {
			...o,
			...s,
			className: "uhuu:absolute uhuu:inset-0 uhuu:cursor-grab uhuu:active:cursor-grabbing uhuu:outline-none uhuu:touch-none"
		}))]
	});
}
function Cx({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ _("div", {
		className: "uhuu:rotate-2",
		children: n(e, t, !0)
	});
}
function wx({ items: e, onChange: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, gridColsClass: a = "uhuu-page-drag-drop-grid-cols", className: o = "", renderToolbar: s, renderEmptyState: c, showDebugInfo: u = !1, renderDragOverlay: d, isItemDisabled: f, canDropAt: p }) {
	let [h, g] = m(e);
	l(() => {
		g(e);
	}, [e]);
	let [y, b] = m(null), x = Nv(Mv(Fy), Mv(Ay, { coordinateGetter: yx })), S = (e) => {
		let t = h.find((t) => i(t) === e.active.id);
		t && f && f(t) || b(e.active.id);
	}, C = (e) => {
		let { active: n, over: r } = e;
		if (!r || n.id === r.id) {
			b(null);
			return;
		}
		let a = h.find((e) => i(e) === n.id), o = h.findIndex((e) => i(e) === n.id), s = h.findIndex((e) => i(e) === r.id);
		if (a && f && f(a)) b(null);
		else if (p && !p(a, s, h)) b(null);
		else {
			if (o !== -1 && s !== -1) {
				let e = $b(h, o, s);
				g(e), t(e);
			}
			b(null);
		}
	}, w = h.find((e) => i(e) === y), T = w ? h.findIndex((e) => i(e) === y) : -1;
	return /* @__PURE__ */ v("div", {
		className: `uhuu:w-full ${o}`,
		children: [
			s && /* @__PURE__ */ _("div", {
				className: "uhuu:mb-6",
				children: s()
			}),
			h.length === 0 && c ? c() : /* @__PURE__ */ _("div", {
				className: "uhuu:mb-6",
				children: /* @__PURE__ */ v(Mb, {
					sensors: x,
					collisionDetection: Hv,
					onDragStart: S,
					onDragEnd: C,
					children: [/* @__PURE__ */ _(sx, {
						items: h.map(i),
						strategy: ix,
						children: /* @__PURE__ */ _("div", {
							className: a,
							children: h.map((e, t) => /* @__PURE__ */ _(Sx, {
								item: e,
								index: t,
								renderItem: n,
								renderDragIndicator: r,
								keyExtractor: i,
								disabled: f ? f(e) : !1
							}, i(e)))
						})
					}), /* @__PURE__ */ _(Qb, { children: w ? d ? /* @__PURE__ */ _("div", {
						className: "uhuu:rotate-2 uhuu:shadow-lg",
						children: d(w, T)
					}) : /* @__PURE__ */ _(Cx, {
						item: w,
						index: T,
						renderItem: n
					}) : null })]
				})
			}),
			u && /* @__PURE__ */ v("div", {
				"data-uhuu-editor": !0,
				className: "uhuu:fixed uhuu:top-4 uhuu:left-4 uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:shadow-lg uhuu:p-3 uhuu:text-sm uhuu:max-w-xs",
				children: [
					/* @__PURE__ */ _("div", {
						className: "uhuu:font-medium uhuu:mb-1",
						children: "Debug Info"
					}),
					/* @__PURE__ */ v("div", {
						className: "uhuu:text-gray-600 uhuu:text-xs",
						children: [
							"Items: ",
							h.length,
							" | Active: ",
							y || "none"
						]
					}),
					/* @__PURE__ */ v("div", {
						className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1 uhuu:break-all",
						children: ["Order: ", h.map((e, t) => `${t + 1}:${i(e).slice(0, 3)}`).join(" → ")]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/uhuu/ui/badge.tsx
var Tx = Na("uhuu:inline-flex uhuu:items-center uhuu:rounded-md uhuu:border uhuu:px-2.5 uhuu:py-0.5 uhuu:text-xs uhuu:font-medium uhuu:transition-colors uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-offset-2", {
	variants: { variant: {
		default: "uhuu:border-transparent uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse)",
		secondary: "uhuu:border-transparent uhuu:bg-gray-100 uhuu:text-gray-900",
		outline: "uhuu:border-gray-300 uhuu:text-gray-900 uhuu:bg-(--uhuu-shell-surface)"
	} },
	defaultVariants: { variant: "default" }
});
function Ex({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ _("div", {
		className: K(Tx({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function Dx({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = Qi(), a = e.strictPosition, o = a === "start" || a === "end";
	return /* @__PURE__ */ v("div", {
		className: `uhuu:flex uhuu:items-center uhuu:justify-center uhuu:border uhuu:relative uhuu:rounded-lg uhuu:bg-(--uhuu-shell-surface) uhuu:overflow-hidden uhuu:transition-all ${n ? "uhuu:opacity-50 uhuu:border-gray-400 uhuu:shadow-xl uhuu:scale-105" : o ? "uhuu:border-gray-300 uhuu:bg-gray-50" : "uhuu:border-gray-200 uhuu:group-hover/drag-item:border-gray-300 uhuu:group-hover/drag-item:shadow-md"}`,
		children: [/* @__PURE__ */ _("div", {
			className: "uhuu:flex uhuu:items-center uhuu:justify-center",
			style: {
				width: "200px",
				height: "280px"
			},
			children: e.content || /* @__PURE__ */ v("div", {
				className: "uhuu:text-center uhuu:p-4",
				children: [/* @__PURE__ */ _("div", {
					className: "uhuu:text-sm uhuu:font-medium uhuu:text-gray-700",
					children: i(e.label) || r("page.fallbackName", { number: t + 1 })
				}), /* @__PURE__ */ _("div", {
					className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-1 uhuu:font-mono",
					children: e.id
				})]
			})
		}), /* @__PURE__ */ _("div", {
			className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:z-20",
			children: /* @__PURE__ */ _(Ex, {
				variant: "secondary",
				className: `uhuu:text-xs uhuu:min-w-[24px] uhuu:h-6 uhuu:font-medium uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-sm uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-sm uhuu:border uhuu:border-gray-200 ${o ? "uhuu:opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ _(ti, { className: "uhuu:size-3 uhuu:text-gray-500" }) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
					className: "uhuu:group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ _(ei, { className: "uhuu:size-4 uhuu:text-gray-400 uhuu:hidden uhuu:group-hover/drag-item:block" })] })
			})
		})]
	});
}
function Ox({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "uhuu-page-order-grid-cols" }) {
	let p = Qi(), { t: m, localize: h } = p, g = h(u) ?? m("reorderDialog.title"), y = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = e.useCallback((e) => e.id, []);
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
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? W_({
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
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ _(Dx, {
			page: e,
			index: t,
			isDragging: n
		});
		return /* @__PURE__ */ v("div", {
			className: "uhuu:relative uhuu:inline-block uhuu:align-top",
			children: [c, i && /* @__PURE__ */ v("button", {
				type: "button",
				title: m("reorderDialog.remove"),
				onClick: s,
				onPointerDown: (e) => e.stopPropagation(),
				className: "uhuu:group/remove-btn uhuu:absolute uhuu:-top-3 uhuu:-right-3 uhuu:z-30 uhuu:hidden uhuu:h-6 uhuu:w-6 uhuu:items-center uhuu:justify-center uhuu:rounded-full uhuu:bg-(--uhuu-shell-surface)/50 uhuu:hover:bg-(--uhuu-shell-surface) uhuu:text-gray-900 uhuu:backdrop-blur-md uhuu:group-hover/drag-item:flex uhuu:border uhuu:border-gray-200",
				children: [/* @__PURE__ */ _(ei, { className: "uhuu:size-3.5 uhuu:opacity-60 uhuu:group-hover/remove-btn:hidden" }), /* @__PURE__ */ _(ai, { className: "uhuu:size-3.5 uhuu:rotate-45 uhuu:hidden uhuu:group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ v("div", {
		className: "uhuu:text-center uhuu:py-20",
		children: [
			/* @__PURE__ */ _("div", {
				className: "uhuu:w-12 uhuu:h-12 uhuu:bg-gray-50 uhuu:rounded-lg uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
				children: /* @__PURE__ */ _(Gr, { className: "uhuu:w-6 uhuu:h-6 uhuu:text-gray-400" })
			}),
			/* @__PURE__ */ _("div", {
				className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:mb-1",
				children: m("reorderDialog.emptyTitle")
			}),
			/* @__PURE__ */ _("p", {
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
	return /* @__PURE__ */ _(N_, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ v(I_, {
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
				/* @__PURE__ */ _(L_, {
					className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4",
					children: /* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:items-end uhuu:gap-3",
						children: [
							/* @__PURE__ */ _("div", {
								className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
								children: /* @__PURE__ */ _(Gr, { className: "uhuu:w-4 uhuu:h-4" })
							}),
							/* @__PURE__ */ v("div", {
								className: "uhuu:flex-1",
								children: [/* @__PURE__ */ _(z_, {
									className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
									children: g
								}), /* @__PURE__ */ _(B_, {
									className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
									children: y
								})]
							}),
							/* @__PURE__ */ _(Ex, {
								variant: "outline",
								className: "uhuu:text-xs uhuu:mb-0.5 uhuu:mr-8",
								children: m("page.count", { count: b.length })
							})
						]
					})
				}),
				/* @__PURE__ */ _("div", {
					className: "uhuu:flex-1 uhuu:overflow-hidden uhuu:flex uhuu:flex-col",
					children: /* @__PURE__ */ _("div", {
						className: "uhuu:flex-1 uhuu:overflow-auto uhuu:p-6 uhuu:bg-gray-50",
						children: /* @__PURE__ */ _(wx, {
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
				/* @__PURE__ */ v(R_, {
					className: "uhuu:border-t uhuu:border-gray-200 uhuu:px-4 uhuu:py-3 uhuu:gap-3",
					children: [/* @__PURE__ */ _(Fa, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ _(Fa, {
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
var kx = typeof window > "u" ? e.useEffect : e.useLayoutEffect, Ax = 1e3, jx = /* @__PURE__ */ new Set();
function Mx(e, t) {
	return Array.from(e.querySelectorAll(t)).filter((e) => !e.closest(`[${Le}]`));
}
function Nx({ pageKey: t, version: n, readiness: r, onMeasurement: i, onPrune: a, children: o }) {
	let [s] = e.useState(() => ({ mounted: !0 })), c = e.useRef(null), [l, u] = e.useState(0), d = e.useCallback(() => {
		u((e) => e + 1);
		let e = !1;
		return () => {
			e || (e = !0, u((e) => e - 1));
		};
	}, []);
	kx(() => (s.mounted = !0, () => {
		s.mounted = !1;
	}), [s]);
	let f = e.useCallback(() => {
		let e = c.current;
		if (!s.mounted || !e) return;
		let n = new Set(Mx(e, "[data-uhuu-flow=\"true\"]").map((e) => e.dataset.uhuuFlowId ?? ""));
		a?.(t, n);
	}, [
		s,
		t,
		a
	]);
	kx(() => {
		f();
		let e = c.current;
		if (!e || Mx(e, "[data-uhuu-flow-area]").length) {
			e?.removeAttribute("data-uhuu-flow-error");
			return;
		}
		if (e.setAttribute("data-uhuu-flow-error", "missing-flow-region"), !H() || jx.has(t)) return;
		let n = setTimeout(() => {
			e.isConnected && !Mx(e, "[data-uhuu-flow-area]").length && (jx.add(t), console.warn(`[uhuu-components] Page "${t}" is marked hasFlow but renders no Static.FlowArea, so data-uhuu-pagination stays "measuring". Render a FlowArea with one Static.Flow in every branch (an empty Flow is one page), or remove hasFlow.`));
		}, Ax);
		return () => clearTimeout(n);
	});
	let p = e.useCallback((e, n) => i(t, e, n), [t, i]), m = e.useCallback(() => f(), [f]), h = e.useMemo(() => ({
		mode: "measure",
		pageIndex: 0,
		measurementVersion: n,
		pageKey: t,
		readiness: r,
		registerMeasurement: p,
		unregisterMeasurement: m,
		requestContinuation: d
	}), [
		n,
		t,
		r,
		p,
		m,
		d
	]), g = e.useMemo(() => ({
		mode: "measure",
		pageIndex: 1,
		measurementVersion: n,
		pageKey: t,
		copy: "continuation"
	}), [n, t]);
	return /* @__PURE__ */ v("div", {
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
		children: [o(h), l > 0 && /* @__PURE__ */ _("div", {
			"data-uhuu-flow-continuation-copy": "true",
			children: o(g)
		})]
	});
}
function Px({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: h, measurementPageNo: y, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, flowReadiness: D, onFlowMeasurement: O, onFlowPrune: k, renderVisible: A = !0, renderMode: j = "sheet", spread: M }) {
	let N = typeof f == "function" ? (e) => f({
		pageNo: e,
		pageId: t
	}) : () => f, P = r || n || t, F = [P ? `uhuu-page--${P}` : "", p].filter(Boolean).join(" "), I = (e = m, u = h, d = c) => i ? /* @__PURE__ */ _(i, {
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
	}) : null, L = e.useMemo(() => ({
		mode: "visible",
		pageIndex: S,
		chunksByFlowId: C
	}), [S, C]), R = e.useMemo(() => c && {
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
	return j === "content" ? /* @__PURE__ */ v(g, { children: [d, /* @__PURE__ */ _(Re.Provider, {
		value: L,
		children: I(m, h)
	})] }) : /* @__PURE__ */ v(g, { children: [w && O && T && /* @__PURE__ */ _(Nx, {
		pageKey: T,
		version: E,
		readiness: D,
		onMeasurement: O,
		onPrune: k,
		children: (e) => {
			let t = e.copy === "continuation", n = y ?? m, r = b ?? h;
			return /* @__PURE__ */ _(ae, {
				setup: u,
				children: /* @__PURE__ */ _(V, {
					className: F,
					pageNo: m,
					"data-page-key": P,
					children: /* @__PURE__ */ _(Re.Provider, {
						value: e,
						children: t ? I(n + 1, r === void 0 ? void 0 : r + 1, R?.continuation) : I(n, r, R?.first)
					})
				})
			});
		}
	}), A && /* @__PURE__ */ _(ae, {
		setup: u,
		children: /* @__PURE__ */ v(V, {
			className: F,
			pageNo: m,
			overlay: ({ pageNo: e }) => N(e),
			"data-page-key": P,
			children: [d, /* @__PURE__ */ _(Re.Provider, {
				value: L,
				children: I(m, h)
			})]
		})
	})] });
}
//#endregion
//#region src/uhuu/ui/select.tsx
var Fx = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _("select", {
	className: K("uhuu:flex uhuu:h-8 uhuu:w-full uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2.5 uhuu:py-1 uhuu:text-sm uhuu:text-gray-900 uhuu:outline-none uhuu:transition-colors uhuu:focus:border-gray-400 uhuu:focus:ring-2 uhuu:focus:ring-gray-200 uhuu:focus:ring-offset-0 uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50", e),
	ref: r,
	...n,
	children: t
}));
Fx.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var Ix = Object.defineProperty, Lx = (e, t) => Ix(e, "name", {
	value: t,
	configurable: !0
}), Rx = "Switch", [zx, Bx] = /* @__PURE__ */ Xa(Rx), [Vx, Hx] = zx(Rx);
function Ux(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = so({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: Rx
	}), [h, g] = e.useState(null), [v, y] = e.useState(null), b = e.useRef(!1), [x, S] = e.useReducer((e) => e + 1, 0), C = {
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
		bubbleInput: v,
		setBubbleInput: y
	};
	return /* @__PURE__ */ _(Vx, {
		scope: n,
		...C,
		children: Zx(f) ? f(C) : i
	});
}
Lx(Ux, "SwitchProvider");
var Wx = "SwitchTrigger", Gx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lx(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: g } = Hx(Wx, t), v = J(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ Lx(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ _(jo.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": Qx(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: v,
		onClick: q(n, (e) => {
			m(), f((e) => !e), g && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), Kx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lx(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ _(Ux, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(Gx, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ _(Xx, { __scopeSwitch: n })] })
	});
}, "Switch")), qx = "SwitchThumb", Jx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lx(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = Hx(qx, n);
	return /* @__PURE__ */ _(jo.span, {
		"data-state": Qx(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), Yx = "SwitchBubbleInput", Xx = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Lx(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: g } = Hx(Yx, t), v = J(i, g), y = ou(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
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
	return /* @__PURE__ */ _(jo.input, {
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
		ref: v,
		onClick: q(n, (e) => {
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
function Zx(e) {
	return typeof e == "function";
}
Lx(Zx, "isFunction");
function Qx(e) {
	return e ? "checked" : "unchecked";
}
Lx(Qx, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var $x = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(Kx, {
	ref: n,
	className: K("uhuu:peer uhuu:inline-flex uhuu:h-5 uhuu:w-9 uhuu:shrink-0 uhuu:cursor-pointer uhuu:items-center uhuu:rounded-full uhuu:border-2 uhuu:border-transparent uhuu:bg-gray-200 uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:focus-visible:ring-offset-(--uhuu-shell-surface) uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50 uhuu:data-[state=checked]:bg-gray-900 uhuu:data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ _(Jx, { className: K("uhuu:pointer-events-none uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:bg-white uhuu:shadow-lg uhuu:ring-0 uhuu:data-[state=checked]:bg-(--uhuu-shell-on-inverse) uhuu:transition-transform uhuu:data-[state=checked]:translate-x-4 uhuu:data-[state=unchecked]:translate-x-0") })
}));
$x.displayName = Kx.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var eS = Object.defineProperty, tS = (e, t) => eS(e, "name", {
	value: t,
	configurable: !0
});
function nS(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
tS(nS, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var rS = Object.defineProperty, iS = (e, t) => rS(e, "name", {
	value: t,
	configurable: !0
});
function aS(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
iS(aS, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var oS = Object.defineProperty, $ = (e, t) => oS(e, "name", {
	value: t,
	configurable: !0
}), sS = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, cS = {
	LTR: "ltr",
	RTL: "rtl"
}, lS = ["PageUp", "PageDown"], uS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], dS = {
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
}, fS = "Slider", [pS, mS, hS] = /* @__PURE__ */ Fo(fS), [gS, _S] = /* @__PURE__ */ Xa(fS, [hS]), [vS, yS] = gS(fS), bS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = sS.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ $(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ $(() => {}, "onValueCommit"), inverted: h = !1, form: g, ...v } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === sS.Horizontal ? CS : wS, [C, w] = e.useState(null), T = J(n, w), [E = [], D] = so({
		prop: f,
		defaultProp: d,
		onChange: /* @__PURE__ */ $((e) => {
			[...y.current][b.current]?.focus({
				preventScroll: !0,
				focusVisible: x.current
			}), x.current = !1, p(e);
		}, "onChange")
	}), O = e.useRef(E), k = e.useRef(E);
	e.useEffect(() => {
		let e = g ? C?.ownerDocument.getElementById(g) : C?.closest("form");
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => D(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		C,
		g,
		D
	]);
	function A(e) {
		N(e, HS(E, e));
	}
	$(A, "handleSlideStart");
	function j(e) {
		N(e, b.current);
	}
	$(j, "handleSlideMove");
	function M() {
		String(E) !== String(O.current) && m(E);
	}
	$(M, "handleSlideEnd");
	function N(e, t, { commit: n } = { commit: !1 }) {
		let r = qS(o), s = nS(JS(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? nS(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = zS(e, c, t);
			if (GS(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return $(N, "updateValues"), /* @__PURE__ */ _(vS, {
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
		children: /* @__PURE__ */ _(pS.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ _(pS.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ _(S, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					...v,
					ref: T,
					onPointerDown: q(v.onPointerDown, () => {
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
							let n = lS.includes(e.key) || e.shiftKey && uS.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(YS(a, {
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
}, "Slider")), [xS, SS] = gS(fS, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), CS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = J(n, p), h = e.useRef(void 0), g = Xo(a), v = g === cS.LTR, y = v && !o || !v && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = KS([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return $(b, "getValueFromPointer"), /* @__PURE__ */ _(xS, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ _(TS, {
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
				let t = dS[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), wS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = J(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = KS([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return $(h, "getValueFromPointer"), /* @__PURE__ */ _(xS, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ _(TS, {
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
				let t = dS[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), TS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = yS(fS, n);
	return /* @__PURE__ */ _(jo.span, {
		...l,
		ref: t,
		onKeyDown: q(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : lS.concat(uS).includes(e.key) && (c(e), e.preventDefault());
		}),
		onPointerDown: q(e.onPointerDown, (e) => {
			let t = e.target;
			t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : r(e);
		}),
		onPointerMove: q(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && i(e);
		}),
		onPointerUp: q(e.onPointerUp, (e) => {
			let t = e.target;
			t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e));
		})
	});
}, "SliderImpl")), ES = "SliderTrack", DS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = yS(ES, n);
	return /* @__PURE__ */ _(jo.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), OS = "SliderRange", kS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = yS(OS, r), o = SS(OS, r), s = J(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => BS(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ _(jo.span, {
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
}, "SliderRange")), [AS, jS] = gS("SliderThumb"), MS = "SliderThumbProvider";
function NS(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = yS(MS, n), s = mS(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = ou(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : BS(p, o.min, o.max);
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
	return /* @__PURE__ */ _(AS, {
		scope: n,
		...g,
		children: XS(a) ? a(g) : i
	});
}
$(NS, "SliderThumbProvider");
var PS = "SliderThumbTrigger", FS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = yS(PS, n), a = SS(PS, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = jS(PS, n), d = J(t, u), f = VS(o, i.values.length), p = l?.[a.size], m = p ? US(p, c, a.direction) : 0;
	return /* @__PURE__ */ _("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ _(pS.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ _(jo.span, {
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
				onFocus: q(e.onFocus, () => {
					i.valueIndexToChangeRef.current = o;
				})
			})
		})
	});
}, "SliderThumbTrigger")), IS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ _(NS, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(FS, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ _(RS, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), LS = "SliderBubbleInput", RS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = jS(LS, t), s = e.useRef(null), c = J(s, r), l = aS(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ _(jo.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function zS(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
$(zS, "getNextSortedValues");
function BS(e, t, n) {
	return nS(100 / (n - t) * (e - t), [0, 100]);
}
$(BS, "convertValueToPercentage");
function VS(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
$(VS, "getLabel");
function HS(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
$(HS, "getClosestValueIndex");
function US(e, t, n) {
	let r = e / 2;
	return (r - KS([0, 50], [0, r])(t) * n) * n;
}
$(US, "getThumbInBoundsOffset");
function WS(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
$(WS, "getStepsBetweenValues");
function GS(e, t) {
	if (t > 0) {
		let n = WS(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
$(GS, "hasMinStepsBetweenValues");
function KS(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
$(KS, "linearScale");
function qS(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
$(qS, "getDecimalCount");
function JS(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
$(JS, "roundValue");
function YS(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = qS(n), o = (e - t) / n, s = Math.round(o), c = JS(s * n + t, a) === JS(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), JS(l * n + t, a);
}
$(YS, "getNextStepValue");
function XS(e) {
	return typeof e == "function";
}
$(XS, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var ZS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(bS, {
	ref: n,
	className: K("uhuu:relative uhuu:flex uhuu:w-full uhuu:touch-none uhuu:select-none uhuu:items-center uhuu:data-[disabled]:opacity-50", e),
	...t,
	children: [/* @__PURE__ */ _(DS, {
		className: "uhuu:relative uhuu:h-1.5 uhuu:w-full uhuu:grow uhuu:overflow-hidden uhuu:rounded-full uhuu:bg-gray-200",
		children: /* @__PURE__ */ _(kS, { className: "uhuu:absolute uhuu:h-full uhuu:bg-gray-900" })
	}), /* @__PURE__ */ _(IS, { className: "uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:border-2 uhuu:border-gray-900 uhuu:bg-(--uhuu-shell-surface) uhuu:shadow uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50" })]
}));
ZS.displayName = bS.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var QS = Object.defineProperty, $S = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => QS(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ _(jo.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), eC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _($S, {
	ref: n,
	className: K("uhuu:text-sm uhuu:font-medium uhuu:leading-none uhuu:text-gray-700 uhuu:peer-disabled:cursor-not-allowed uhuu:peer-disabled:opacity-70", e),
	...t
}));
eC.displayName = $S.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function tC(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function nC({ pageOptions: e, targetItem: t, onChange: n }) {
	let { localize: r } = Qi(), i = tC(e, t), a = (e) => {
		let i = e.getValue(t), a = r(e.label);
		switch (e.type) {
			case "select": return /* @__PURE__ */ v("div", {
				className: "uhuu:space-y-1.5",
				children: [/* @__PURE__ */ _(eC, {
					htmlFor: e.id,
					className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
					children: a
				}), /* @__PURE__ */ _(Fx, {
					id: e.id,
					value: String(i),
					onChange: (r) => n(e, t, r.target.value),
					className: "uhuu:w-full uhuu:text-sm",
					children: e.options.map((e) => /* @__PURE__ */ _("option", {
						value: e.value,
						children: r(e.label)
					}, e.value))
				})]
			}, e.id);
			case "toggle": {
				let r = typeof i == "boolean" ? i : i === "true";
				return /* @__PURE__ */ v("div", {
					className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:py-1.5",
					children: [/* @__PURE__ */ _(eC, {
						htmlFor: e.id,
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ _($x, {
						id: e.id,
						checked: r,
						onCheckedChange: (r) => n(e, t, String(r))
					})]
				}, e.id);
			}
			case "slider": {
				let r = typeof i == "number" ? i : Number(i) || e.min;
				return /* @__PURE__ */ v("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:items-center uhuu:justify-between",
						children: [/* @__PURE__ */ _(eC, {
							htmlFor: e.id,
							className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
							children: a
						}), /* @__PURE__ */ _("span", {
							className: "uhuu:text-xs uhuu:font-mono uhuu:tabular-nums uhuu:text-gray-700",
							children: r
						})]
					}), /* @__PURE__ */ _(ZS, {
						id: e.id,
						min: e.min,
						max: e.max,
						step: e.step,
						value: [r],
						onValueChange: (r) => n(e, t, String(r[0]))
					})]
				}, e.id);
			}
			case "counter": {
				let r = typeof i == "number" ? i : Number(i) || e.min;
				return /* @__PURE__ */ v("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ _(eC, {
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [
							/* @__PURE__ */ _(Fa, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.max(e.min, r - e.step);
									n(e, t, String(i));
								},
								disabled: r <= e.min,
								type: "button",
								children: /* @__PURE__ */ _(ri, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							}),
							/* @__PURE__ */ _("div", {
								className: "uhuu:flex-1 uhuu:text-center uhuu:px-3 uhuu:py-1.5 uhuu:bg-gray-50 uhuu:rounded-md uhuu:border uhuu:border-gray-200",
								children: /* @__PURE__ */ _("span", {
									className: "uhuu:text-sm uhuu:font-mono uhuu:tabular-nums uhuu:font-medium uhuu:text-gray-900",
									children: r
								})
							}),
							/* @__PURE__ */ _(Fa, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.min(e.max, r + e.step);
									n(e, t, String(i));
								},
								disabled: r >= e.max,
								type: "button",
								children: /* @__PURE__ */ _(ai, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							})
						]
					})]
				}, e.id);
			}
			case "color-series": {
				let o = String(i);
				return /* @__PURE__ */ v("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ _(eC, {
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ _("div", {
						className: "uhuu:flex uhuu:flex-wrap uhuu:gap-1.5",
						children: e.options.map((i) => {
							let a = o === i.value, s = r(i.label) ?? i.value;
							return /* @__PURE__ */ _("button", {
								onClick: () => n(e, t, i.value),
								className: `uhuu:h-7 uhuu:w-7 uhuu:rounded-md uhuu:border-2 uhuu:transition-all uhuu:flex uhuu:items-center uhuu:justify-center ${a ? "uhuu:border-gray-900 uhuu:scale-110" : "uhuu:border-gray-200 uhuu:hover:border-gray-400 uhuu:hover:scale-105"}`,
								style: { backgroundColor: i.hex || i.value },
								type: "button",
								title: `${s}${i.hex ? ` (${i.hex})` : ""}`,
								children: a && /* @__PURE__ */ _(Jr, {
									className: "uhuu:h-4 uhuu:w-4 uhuu:text-white uhuu:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
									strokeWidth: 3
								})
							}, i.value);
						})
					})]
				}, e.id);
			}
			default: return console.warn(`Unknown option type: ${e.type}`), null;
		}
	};
	return /* @__PURE__ */ _("div", {
		className: "uhuu:space-y-3",
		children: i.map((e) => a(e))
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-dropdown.tsx
function rC({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = Qi(), o = r ?? a("page.optionsMenu");
	return !t || tC(e, t).length === 0 ? null : /* @__PURE__ */ v(um, {
		modal: !1,
		children: [/* @__PURE__ */ _(dm, {
			asChild: !0,
			className: i || "uhuu-page-options-trigger",
			children: /* @__PURE__ */ v(Fa, {
				variant: "ghost",
				size: "sm",
				className: "uhuu:h-7 uhuu:w-7 uhuu:text-gray-400 uhuu:hover:text-gray-600 uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200 uhuu:rounded-md",
				title: o,
				children: [/* @__PURE__ */ _($r, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ _("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ _(hm, {
			className: "uhuu:min-w-48 uhuu:p-3",
			align: "center",
			children: /* @__PURE__ */ _(nC, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function iC({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: h }) {
	let { t: g } = Qi(), [y, b] = m(!1), [x, S] = m(!1), [C, w] = m(e), T = p(null);
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
	return x ? /* @__PURE__ */ _("input", {
		ref: T,
		value: C,
		onChange: (e) => w(e.target.value),
		onKeyDown: (t) => {
			t.key === "Enter" && E(), t.key === "Escape" && (w(e), S(!1)), t.stopPropagation();
		},
		onBlur: E,
		className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-800 uhuu:bg-(--uhuu-shell-surface) uhuu:border uhuu:border-blue-400 uhuu:rounded-md uhuu:px-2 uhuu:py-1 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-blue-400/30 uhuu:max-w-[140px] uhuu:h-7",
		"data-uhuu-editor": !0
	}) : t || D ? /* @__PURE__ */ v(um, {
		open: y,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ _(dm, {
			asChild: !0,
			children: /* @__PURE__ */ v("button", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:text-gray-900 uhuu:rounded-md uhuu:px-2 uhuu:h-7 uhuu:hover:bg-gray-100 uhuu:transition-colors uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ _("span", {
					className: "uhuu:truncate uhuu:max-w-[120px]",
					children: e
				}), /* @__PURE__ */ _(Yr, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:text-gray-500 uhuu:shrink-0" })]
			})
		}), /* @__PURE__ */ v(hm, {
			className: "uhuu:min-w-44 uhuu:p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ v(gm, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ _(ii, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.rename")]
				}),
				t && D && /* @__PURE__ */ _(bm, {}),
				n && /* @__PURE__ */ v(gm, {
					onClick: c,
					children: [/* @__PURE__ */ _(Kr, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveUp")]
				}),
				r && /* @__PURE__ */ v(gm, {
					onClick: u,
					children: [/* @__PURE__ */ _(Wr, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ _(bm, {}),
				i && /* @__PURE__ */ v(gm, {
					onClick: d,
					children: [/* @__PURE__ */ _(ai, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.addPage")]
				}),
				a && /* @__PURE__ */ v(gm, {
					onClick: f,
					children: [/* @__PURE__ */ _(Qr, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.duplicate")]
				}),
				o && /* @__PURE__ */ _(bm, {}),
				o && /* @__PURE__ */ v(gm, {
					onClick: h,
					className: "uhuu:text-red-600 uhuu:focus:text-red-700 uhuu:focus:bg-red-50",
					children: [/* @__PURE__ */ _(si, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.delete")]
				})
			]
		})]
	}) : /* @__PURE__ */ _("span", {
		className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-600 uhuu:truncate uhuu:max-w-[120px]",
		children: e
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/cover-spread-layout.js
function aC(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function oC(e, t) {
	return !!k(e?.binding) && t?.mode === "cover";
}
function sC({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: aC(e),
		warnings: []
	};
	if (!oC(e, t)) return r;
	let i = k(e.binding), a = {
		...I.resolveDimensions(e),
		bleed: I.clampBleed(e.bleed),
		binding: i
	}, o = N({
		...a,
		coverPages: n
	}), s = F({
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
function cC(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, pageComponents: a, payload: o, setup: u, stateKey: f = $h, resolveNewItem: h, notifyError: g, pageFilter: _ } = e, [v, y] = m(t), [b, x] = m(!1), S = Qi(), { t: C } = S, w = p(t);
	l(() => {
		try {
			JSON.stringify(w.current) !== JSON.stringify(t) && (w.current = t, y(t));
		} catch {
			w.current !== t && (w.current = t, y(t));
		}
	}, [t]);
	let T = c(Dg), E = s((e) => {
		y(e);
		let t = sg(e, f);
		T?.mergePageEditorState && T.mergePageEditorState(e, f), i?.(t), r?.(e, t);
	}, [
		r,
		i,
		f,
		T
	]), D = d(() => {
		let e = /* @__PURE__ */ new Map();
		return v.forEach((t) => {
			let n = t.templateId ?? t.id;
			e.set(n, (e.get(n) ?? 0) + 1), eg(t) && t.pages?.forEach((t) => {
				let n = t.templateId ?? t.id;
				e.set(n, (e.get(n) ?? 0) + 1);
			});
		}), e;
	}, [v]), O = d(() => n.filter((e) => {
		if (e.kind === "page") {
			let t = e, n = t.templateId ?? t.id, r = D.get(n) ?? 0, i = t.repeatable ?? !1, a = t.maxInstances ?? null;
			return !(!i && r > 0 || a !== null && r >= a);
		}
		let t = e, n = t.templateId ?? t.id, r = D.get(n) ?? 0, i = t.repeatable ?? !1, a = t.maxInstances ?? null;
		return !(!i && r > 0 || i && a !== null && r >= a);
	}), [n, D]), k = d(() => rg(v), [v]), A = s(async (e, t) => {
		let n = (e) => e ? typeof e == "string" ? e : e.mode ?? "optional" : "none", r = (e, t) => {
			if (!e) return [];
			if (Array.isArray(e)) return e;
			try {
				let n = e(t);
				if (!Array.isArray(n)) return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof n), [];
				let r = n.filter((e) => typeof e == "string");
				return r.length !== n.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), r;
			} catch (e) {
				return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", e), [];
			}
		}, i = ((e) => {
			if (e.kind === "page") {
				let t = e;
				return dg(t.templateId ?? t.id, t.componentKey ?? t.id, {
					label: t.label,
					className: t.className,
					repeatable: t.repeatable,
					maxInstances: t.maxInstances,
					integration: t.integration,
					strictPosition: t.strictPosition
				});
			}
			let t = e, n = t.templateId ?? t.id, i = {
				payload: o,
				item: void 0,
				parent: void 0
			};
			return fg(n, r(t.pageComponentKeys, i), {
				label: t.label,
				repeatable: t.repeatable ?? !1,
				maxInstances: t.maxInstances ?? null,
				integration: t.integration,
				strictPosition: t.strictPosition
			});
		})(e);
		typeof window < "u" && window.$uhuu?.debug;
		let a, s = i;
		if (h) s = await h(i);
		else {
			let e = n(i.integration), t = !1;
			if (e !== "none" && typeof window < "u") {
				let n = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
				n && (a = await n({
					item: i,
					mode: e
				}), a == null && e === "required" && (t = !0));
			}
			if (t) return { success: !1 };
		}
		if (s === null) return { success: !1 };
		let c = s ?? i;
		if (a !== void 0 && T?.setIntegrationPayload) {
			let e = c.id;
			T.setIntegrationPayload(e, a);
		}
		return E(((e, t, n) => {
			let r = t.strictPosition;
			if (r === "start") return [t, ...e];
			if (r === "end") return [...e, t];
			let i = [], a = [], o = [];
			if (e.forEach((e) => {
				let t = e.strictPosition;
				t === "start" ? i.push(e) : t === "end" ? o.push(e) : a.push(e);
			}), !n || n.mode === "end") return [
				...i,
				...a,
				t,
				...o
			];
			let s = a.findIndex((e) => e.id === n.anchorId);
			return s === -1 ? e.find((e) => e.id === n.anchorId)?.strictPosition === "start" ? [
				...i,
				t,
				...a,
				...o
			] : [
				...i,
				...a,
				t,
				...o
			] : (n.mode === "before" ? a.splice(s, 0, t) : a.splice(s + 1, 0, t), [
				...i,
				...a,
				...o
			]);
		})(v, c, t)), {
			success: !0,
			insertedId: c.id
		};
	}, [
		v,
		E,
		h,
		T,
		o
	]), j = s((e) => {
		let t = (e) => {
			g ? g(e) : alert(e);
		}, n = v.find((t) => t.id === e);
		if (n) {
			if (rg(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (T?.removeIntegrationPayload) {
				let e = n.id;
				T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
			}
			E(v.filter((t) => t.id !== e));
		} else for (let n of v) if (eg(n) && n.pages.some((t) => t.id === e)) {
			if (rg(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (T?.removeIntegrationPayload) {
					let e = n.id;
					T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
				}
				E(v.filter((e) => e.id !== n.id));
			} else E(v.map((t) => t.id === n.id && eg(t) ? {
				...t,
				pages: t.pages.filter((t) => t.id !== e)
			} : t));
			return;
		}
	}, [
		v,
		g,
		E,
		T,
		C
	]), M = s((e, t) => {
		E(v.map((n) => n.id === e ? (eg(n), {
			...n,
			...t
		}) : n));
	}, [v, E]), N = s((e) => {
		E(e);
	}, [E]), P = d(() => {
		let e = ng(v);
		return _ ? gg(e, _) : e;
	}, [v, _]), F = s((e) => {
		let t = [];
		return P.forEach((n) => {
			eg(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [P]), I = d(() => ig(P), [P]), L = s((e) => {
		let t = ag(e, v);
		E(((e) => {
			let t = [], n = [], r = [];
			return e.forEach((e) => {
				let i = e.strictPosition;
				i === "start" ? t.push(e) : i === "end" ? r.push(e) : n.push(e);
			}), [
				...t,
				...n,
				...r
			];
		})(t));
	}, [v, E]);
	return {
		items: v,
		itemsWithPageNum: P,
		totalPageCount: k,
		availableItemsToAdd: O,
		addItem: A,
		removeItem: j,
		updateItemFields: M,
		reorderItems: N,
		addDialogOpen: b,
		setAddDialogOpen: x,
		openAddDialog: s(() => {
			x(!0);
		}, []),
		renderItems: F,
		itemsForReorder: I,
		handleReorder: L,
		defaultRenderThumbnail: d(() => {
			if (a) return W_({
				pageComponents: a,
				payload: o,
				setup: u,
				i18n: S
			});
		}, [
			a,
			o,
			u,
			S
		])
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/use-page-item-actions.ts
function lC({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
	let a = d(() => e.filter((e) => !e.strictPosition), [e]);
	return s((o, s) => {
		if (!o) return {};
		let c = o.id, l = a.findIndex((e) => e.id === c), u = l !== -1, d = u && l > 0 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === c);
			r < 1 || ([n[r - 1], n[r]] = [n[r], n[r - 1]], t(n));
		} : void 0, f = u && l < a.length - 1 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === c);
			r < 0 || r >= n.length - 1 || ([n[r], n[r + 1]] = [n[r + 1], n[r]], t(n));
		} : void 0, p = u && o.repeatable ? () => {
			let n = {
				...e.find((e) => e.id === c) ?? o,
				id: `${c}_copy_${Date.now()}`
			}, r = [...e], i = r.findIndex((e) => e.id === c);
			r.splice(i < 0 ? r.length : i + 1, 0, n), t(r);
		} : void 0;
		return {
			onAddPage: s && n.length > 0 ? () => {
				r({
					mode: "before",
					anchorId: s
				}), i();
			} : void 0,
			onMoveUp: d,
			onMoveDown: f,
			onDuplicate: p
		};
	}, [
		e,
		a,
		t,
		n,
		r,
		i
	]);
}
//#endregion
//#region src/uhuu/editor-shell/document/flow-layout-core.js
function uC(e = [], t = {}) {
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
function dC({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
	let [r, i] = m({
		layoutKey: n,
		layouts: {}
	}), a = d(() => r.layoutKey === n ? r.layouts : {}, [r, n]), o = d(() => e.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|"), [e]), c = d(() => new Set(o ? o.split("|") : []), [o]), l = d(() => {
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
	}, [c, n]), f = s((e, t) => {
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
	}, [n]), p = d(() => uC(e, l), [e, l]), h = p.length;
	return {
		committedFlowLayouts: l,
		allVirtualPages: p,
		renderedVirtualPages: d(() => p.filter((e) => _g(e.pageNum, h, t ?? void 0)), [
			p,
			h,
			t
		]),
		virtualTotalPageCount: h,
		registerMeasurement: u,
		pruneMeasurements: f
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/data-binding.ts
function fC(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function pC(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function mC({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = bg(e, t, n), o = n && eg(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => Sg(a.instanceId, e)
		},
		paths: {
			integration: (e) => Sg(a.instanceId, e),
			page: (e) => fC(s, e),
			group: (e) => fC(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: pC(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-presets.ts
var hC = (e, t, n = !1, r, i) => {
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
	} : dg(c, s, {
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
}, gC = (e, t = !1, n, r, i) => {
	let a = {
		payload: n,
		item: void 0,
		parent: void 0
	}, o = vC(e.pageComponentKeys, a).map((e) => {
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
	return fg(e.id, o, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, _C = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], vC = (e, t) => {
	if (!e) return [];
	if (Array.isArray(e)) return e;
	try {
		let n = e(t);
		if (!Array.isArray(n)) return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof n), [];
		let r = n.filter((e) => typeof e == "string");
		return r.length !== n.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), r;
	} catch (e) {
		return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", e), [];
	}
}, yC = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = _C(n), c = /* @__PURE__ */ new Map();
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
			return t ? gC(t, !0, o, i, f(t.id)) : hC(e, void 0, !0, i, f(e));
		}
		if (e.pageComponentKeys !== void 0) {
			let t = e;
			return gC(t, !0, o, i, f(t.id));
		}
		let t = e;
		return hC(t, void 0, !0, i, f(t.id));
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
}, bC = Object.defineProperty, xC = (e, t) => bC(e, "name", {
	value: t,
	configurable: !0
}), [SC, CC] = /* @__PURE__ */ Xa("AlertDialog", [c_]), wC = c_(), TC = /* @__PURE__ */ xC((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = wC(t);
	return /* @__PURE__ */ _(d_, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = wC(n);
	return /* @__PURE__ */ _(p_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var EC = /* @__PURE__ */ xC((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = wC(t);
	return /* @__PURE__ */ _(__, {
		...r,
		...n
	});
}, "AlertDialogPortal"), DC = e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = wC(n);
	return /* @__PURE__ */ _(y_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [OC, kC] = SC("AlertDialogContent"), AC = e.forwardRef(/* @__PURE__ */ xC(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = wC(r), s = J(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ _(OC, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ _(C_, {
			role: "alertdialog",
			...o,
			...a,
			ref: s,
			onOpenAutoFocus: q(a.onOpenAutoFocus, (e) => {
				e.preventDefault(), c.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: i
		})
	});
}, "AlertDialogContent")), jC = e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = wC(n);
	return /* @__PURE__ */ _(D_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), MC = e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = wC(n);
	return /* @__PURE__ */ _(O_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), NC = e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = wC(n);
	return /* @__PURE__ */ _(A_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), PC = "AlertDialogCancel", FC = e.forwardRef(/* @__PURE__ */ xC(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = kC(PC, n), a = wC(n), o = J(t, i);
	return /* @__PURE__ */ _(A_, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), IC = TC, LC = EC, RC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(DC, {
	ref: n,
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/40 uhuu:backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
RC.displayName = DC.displayName;
var zC = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = mi();
	return /* @__PURE__ */ v(LC, {
		container: r || void 0,
		children: [/* @__PURE__ */ _(RC, {}), /* @__PURE__ */ _(AC, {
			ref: n,
			"data-uhuu-editor": !0,
			className: K("uhuu:fixed uhuu:left-[50%] uhuu:top-[50%] uhuu:z-50 uhuu:w-full uhuu:max-w-md uhuu:translate-x-[-50%] uhuu:translate-y-[-50%] uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
zC.displayName = AC.displayName;
var BC = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:gap-2 uhuu:text-left", e),
	...t
});
BC.displayName = "AlertDialogHeader";
var VC = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: K("uhuu:mt-6 uhuu:flex uhuu:flex-col-reverse uhuu:gap-2 uhuu:sm:flex-row uhuu:sm:justify-end", e),
	...t
});
VC.displayName = "AlertDialogFooter";
var HC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(jC, {
	ref: n,
	className: K("uhuu:text-base uhuu:font-semibold uhuu:text-gray-900", e),
	...t
}));
HC.displayName = jC.displayName;
var UC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(MC, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-600", e),
	...t
}));
UC.displayName = MC.displayName;
var WC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(NC, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:bg-gray-900 uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-(--uhuu-shell-on-inverse) uhuu:transition-colors uhuu:hover:bg-gray-800", e),
	...t
}));
WC.displayName = NC.displayName;
var GC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(FC, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:bg-gray-50", e),
	...t
}));
GC.displayName = FC.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var KC = "__edit__", qC = "__print__";
function JC({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ v(gm, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "uhuu:flex uhuu:items-center uhuu:gap-2",
		children: [e ? /* @__PURE__ */ _(Jr, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }) : /* @__PURE__ */ _("span", { className: "uhuu:w-3 uhuu:h-3" }), /* @__PURE__ */ _("span", {
			className: "uhuu:flex-1 uhuu:truncate",
			children: t
		})]
	});
}
function YC({ label: e, value: t }) {
	return /* @__PURE__ */ v(pm, {
		className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-4 uhuu:text-xs",
		children: [/* @__PURE__ */ _("span", {
			className: "uhuu:text-gray-700",
			children: e
		}), /* @__PURE__ */ v("span", {
			className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-gray-400",
			children: [t ? /* @__PURE__ */ _("span", {
				className: "uhuu:max-w-[110px] uhuu:truncate",
				children: t
			}) : null, /* @__PURE__ */ _(Xr, { className: "uhuu:w-3.5 uhuu:h-3.5" })]
		})]
	});
}
function XC({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: KC,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: qC,
		label: "Print"
	}]], m = r ? KC : t || f[0] || qC, h = p.find((e) => e.value === m)?.label ?? "Edit", y = (t) => {
		t === KC ? i(!0) : (i(!1), t !== qC && e && e[t] && n?.(t, e[t]));
	}, b = !!c && c.length > 0, x = c?.find((e) => e.id === l)?.name, S = () => {
		let e = window.prompt("Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:");
		e && e.trim() && d?.(e.trim());
	};
	return /* @__PURE__ */ v(um, {
		modal: !1,
		children: [/* @__PURE__ */ _(dm, {
			asChild: !0,
			children: /* @__PURE__ */ v(Fa, {
				variant: "ghost",
				size: "sm",
				className: `uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 ${r ? "" : "uhuu:bg-gray-100/80"}`,
				children: [/* @__PURE__ */ _(qr, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ _("span", {
					className: "uhuu:text-[10px] uhuu:uppercase uhuu:tracking-wide",
					children: "Dev"
				})]
			})
		}), /* @__PURE__ */ v(hm, {
			align: "end",
			className: "uhuu:min-w-[200px]",
			children: [
				/* @__PURE__ */ v(fm, { children: [/* @__PURE__ */ _(YC, {
					label: "Print Preview",
					value: h
				}), /* @__PURE__ */ _(mm, {
					className: "uhuu:min-w-[180px]",
					children: p.map((e) => /* @__PURE__ */ _(JC, {
						checked: m === e.value,
						label: e.label,
						onSelect: () => y(e.value)
					}, e.value))
				})] }),
				b && /* @__PURE__ */ v(fm, { children: [/* @__PURE__ */ _(YC, {
					label: "Brand Kit",
					value: x
				}), /* @__PURE__ */ v(mm, {
					className: "uhuu:min-w-[200px]",
					children: [c.map((e) => /* @__PURE__ */ _(JC, {
						checked: l === e.id,
						label: e.name,
						keepOpen: !0,
						onSelect: () => u?.(e.id)
					}, e.id)), d && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(bm, {}), /* @__PURE__ */ v(gm, {
						onSelect: (e) => {
							e.preventDefault(), S();
						},
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [/* @__PURE__ */ _(ai, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ _("span", {
							className: "uhuu:flex-1",
							children: "Add published kit…"
						})]
					})] })]
				})] }),
				a && /* @__PURE__ */ v(g, { children: [
					/* @__PURE__ */ _(bm, {}),
					/* @__PURE__ */ _(ym, {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: "Reference Overlay"
					}),
					/* @__PURE__ */ v("div", {
						className: "uhuu:px-2 uhuu:py-2",
						children: [
							/* @__PURE__ */ v("div", {
								className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:text-xs uhuu:text-gray-600",
								children: [/* @__PURE__ */ _("span", { children: "Opacity" }), /* @__PURE__ */ v("span", { children: [o, "%"] })]
							}),
							/* @__PURE__ */ _("div", {
								className: "uhuu:pt-2",
								children: /* @__PURE__ */ _(ZS, {
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
							/* @__PURE__ */ v("div", {
								className: "uhuu:pt-2 uhuu:flex uhuu:items-center uhuu:justify-between uhuu:text-xs uhuu:text-gray-500",
								children: [/* @__PURE__ */ _("span", { children: "Hidden" }), /* @__PURE__ */ _("span", { children: "Solid" })]
							})
						]
					})
				] })
			]
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-management.js
var ZC = [
	"add",
	"remove",
	"reorder",
	"duplicate",
	"rename"
];
function QC(e) {
	let t = e && typeof e == "object" ? e : {}, n = t.locked !== !0, r = Object.fromEntries(ZC.map((e) => [e, typeof t[e] == "boolean" ? t[e] : n]));
	return {
		...r,
		templateOwnsPages: !r.add && !r.remove && !r.reorder && !r.duplicate
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor.tsx
var $C = {
	width: 210,
	height: 297
}, ew = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function tw(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function nw({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = Qi();
	return e ? /* @__PURE__ */ _("div", {
		className: "uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-black/30",
		children: /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:border-gray-200/80 uhuu:shadow-xl uhuu:p-6 uhuu:w-full uhuu:max-w-sm uhuu:mx-4 uhuu:flex uhuu:flex-col uhuu:items-center uhuu:text-center",
			children: [
				/* @__PURE__ */ _("div", {
					className: "uhuu:rounded-full uhuu:bg-emerald-100 uhuu:p-3 uhuu:mb-4",
					children: /* @__PURE__ */ _(Jr, {
						className: "uhuu:h-6 uhuu:w-6 uhuu:text-emerald-600",
						strokeWidth: 2.5
					})
				}),
				/* @__PURE__ */ _("h2", {
					className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:mb-5",
					children: r("addDialog.added", { name: e })
				}),
				/* @__PURE__ */ v("div", {
					className: "uhuu:flex uhuu:gap-2 uhuu:w-full",
					children: [/* @__PURE__ */ _(Fa, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "uhuu:flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ _(Fa, {
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
var rw = /* @__PURE__ */ new Set();
function iw({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: f, renderOverlay: h, renderPage: y, menuItems: x, gridColsClass: S, reorderTitle: C, reorderDescription: w, stateKey: T = $h, onItemsChange: E, onStateChange: D, resolveNewItem: O, pageFilter: k, printConfigs: A, defaultZoomMode: j = "fit-page", brandKits: M, activeBrandKitId: N, onSelectBrandKit: P, onAddBrandKit: F, pageManagement: I = ow }) {
	let [L] = m(() => B.createScope()), R = I, ee = o ?? $C, { interactive: te, setInteractive: z, enableDevTools: ne } = Ea(), re = Da(), { portalContainer: ie } = mi(), { t: V, localize: oe } = Qi(), [se, ce] = m(null), [le, ue] = m(null), [de, fe] = m(void 0), [pe, me] = m(0), [he, ge] = m(0), _e = se ?? k, ve = d(() => le ? {
		...ee,
		...le
	} : ee, [ee, le]), ye = c(Dg), be = ye?.payload ?? a, [xe, Se] = m(!1), Ce = !te && oC(ve, _e), we = ve?.preview ?? "single_page", Te = Ce ? "single_page" : we, Ee = d(() => {
		let e = aC(ve);
		return we === "two_pages" || Ce ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		we,
		Ce,
		ve
	]), De = d(() => aC(ee), [ee]), Oe = d(() => og(t), [t]), ke = d(() => l?.length ? l.map((e) => "getValue" in e ? e : ye?.setPageOptionValue ? Ng(e, ye.payload, ye.setPageOptionValue) : ((H() || ne) && console.warn("PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."), null)).filter(Boolean) : [], [
		l,
		ye,
		ne
	]), [Ae, je] = m(null), [Me, Ne] = m({ mode: "end" }), [Pe, Fe] = m(null), Ie = p(null), { items: Le, itemsWithPageNum: Re, availableItemsToAdd: ze, addItem: Be, removeItem: Ve, reorderItems: He, updateItemFields: Ue, addDialogOpen: We, setAddDialogOpen: Ge, openAddDialog: Ke, itemsForReorder: qe, handleReorder: Je, defaultRenderThumbnail: Ye } = cC({
		initialItems: Oe,
		availableItems: n,
		pageComponents: r,
		payload: be,
		setup: Ee,
		stateKey: T,
		onItemsChange: E,
		onStateChange: D,
		resolveNewItem: O,
		notifyError: u
	}), Xe = d(() => {
		let e = [];
		for (let t of Re) {
			let n = eg(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = eg(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: tw(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Re]), Ze = d(() => JSON.stringify({
		format: Ee?.format,
		orientation: Ee?.orientation,
		width: Ee?.width,
		height: Ee?.height,
		bleed: Ee?.bleed,
		showBleed: Ee?.showBleed,
		preview: Ee?.preview,
		flowPages: Xe.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [Ee, Xe]), Qe = d(() => rg(Le), [Le]), { committedFlowLayouts: $e, allVirtualPages: et, renderedVirtualPages: tt, virtualTotalPageCount: nt, registerMeasurement: rt, pruneMeasurements: it } = dC({
		logicalPages: Xe,
		pageFilter: _e,
		layoutKey: Ze
	});
	ew(() => {
		L.commit(Xe.filter((e) => e.hasFlow).map((e) => e.flowKey), $e);
	}), ew(() => () => L.suspend(), [L]), e.useEffect(() => () => L.unmount(), [L]);
	let at = d(() => new Set(tt.map((e) => e.virtualPageId)), [tt]), ot = d(() => sC({
		pageFormat: Ce ? ve : aC(ve),
		pageFilter: _e,
		pages: tt
	}), [
		Ce,
		ve,
		_e,
		tt
	]), st = ot.active ? ot.plan : null, ct = d(() => st ? {
		...Ee,
		binding: ot.setup.binding
	} : Ee, [
		st,
		Ee,
		ot.setup
	]);
	e.useEffect(() => {
		if (H() && ot.warnings.length) for (let e of ot.warnings) rw.has(e) || (rw.add(e), console.warn(`[uhuu-components] PageEditor cover spread: ${e}`));
	}, [ot.warnings]);
	let lt = d(() => et.filter((e) => e.hasFlow && e.virtualPageIndex === 0 && (y || !!st || !at.has(e.virtualPageId))), [
		et,
		at,
		y,
		st
	]);
	e.useEffect(() => {
		if (!Pe) return;
		let e = setTimeout(() => {
			document.querySelector(`[data-page-item-id="${Pe}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		return () => clearTimeout(e);
	}, [Pe]);
	let ut = lC({
		items: Le,
		reorderItems: He,
		availableItemsToAdd: ze,
		setPendingInsertPosition: Ne,
		openAddDialog: Ke
	}), dt = (e, t) => {
		let n = ut(e, t);
		return {
			onAddPage: R.add ? n.onAddPage : void 0,
			onMoveUp: R.reorder ? n.onMoveUp : void 0,
			onMoveDown: R.reorder ? n.onMoveDown : void 0,
			onDuplicate: R.duplicate ? n.onDuplicate : void 0
		};
	}, ft = s(async (e) => {
		let t = await Be(e, Me);
		t.success && (Fe(t.insertedId), Ie.current && clearTimeout(Ie.current), Ie.current = setTimeout(() => Fe(null), 1200), Ne({ mode: "end" }), e.repeatable && e.integration && je(e));
	}, [Be, Me]), pt = s(() => {
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
	}, []), mt = s(() => {
		Ne(pt()), Ke();
	}, [pt, Ke]), ht = e.useCallback((e, t, n) => {
		if (!t) return;
		let r = e.applyPatch?.(n, t);
		r && Ue(t.id, r), e.onChange?.(t.id, n, {
			item: t,
			updateItem: (e) => Ue(t.id, e)
		});
	}, [Ue]), gt = (e) => /* @__PURE__ */ v("div", {
		className: "uhuu-page-overlay",
		children: [/* @__PURE__ */ _("span", { children: "Page" }), /* @__PURE__ */ v("span", { children: [
			e.pageNo,
			" / ",
			e.total
		] })]
	}), _t = (e, t, n) => h === !1 || h === null ? null : h ? h({
		pageNo: e,
		total: nt,
		pageId: t,
		parent: n
	}) : gt({
		pageNo: e,
		total: nt
	}), vt = (t, n = {}) => {
		let i = t.parentGroup;
		if (y && n.renderVisible !== !1 && n.renderMode !== "content") return y({
			page: t,
			parent: i
		});
		let a = t.componentKey ?? t.id, o = ne && f ? f(t) : null, s = ne && f ? e.isValidElement(o) ? e.cloneElement(o, { opacity: he }) : o : null, c = t.templateId ?? a, l = r[a], u = ye?.getPagePayload ? ye.getPagePayload(t) : Eg(be, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), d = xg(be, t, i), p = mC({
			payload: be,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ _(Px, {
			pageId: t.id,
			templateId: c,
			pageNo: t.pageNum,
			measurementPageNo: t.basePageNum,
			component: l,
			payload: be,
			pagePayload: u,
			integration: d,
			page: t,
			parentGroup: i,
			componentKey: a,
			setup: ct,
			reference: s,
			overlay: ({ pageNo: e }) => _t(e, t.id, i),
			className: t.className,
			dataBinding: p,
			totalPages: nt,
			measurementTotalPages: Qe,
			flowPageIndex: t.virtualPageIndex,
			flowChunksByFlowId: t.flowChunksByFlowId,
			measureFlow: n.measureFlow ?? (!!t.hasFlow && t.virtualPageIndex === 0),
			flowMeasurementKey: t.flowKey,
			flowMeasurementVersion: Ze,
			flowReadiness: L,
			onFlowMeasurement: t.hasFlow ? rt : void 0,
			onFlowPrune: it,
			renderVisible: n.renderVisible ?? !0,
			renderMode: n.renderMode,
			spread: n.spread
		}, `${n.renderVisible === !1 ? "measure-only" : "page"}-${t.virtualPageId}`);
	}, yt = (e) => {
		let t = e.componentKey ?? e.templateId ?? e.id;
		return [t ? `uhuu-page--${t}` : "", e.className].filter(Boolean).join(" ");
	}, bt = (e) => {
		if (!st) return null;
		let { binding: t, page: n } = st, [r, a] = e.panels, o = r.page, s = a.page, c = (r) => ({
			sheet: e.sheet,
			side: r,
			spine: t.spine,
			glue: t.glue,
			bleed: n.bleed
		}), l = `Cover sheet ${e.index + 1} · ${e.sheet} (pages ${o.pageNum} + ${s.pageNum})`;
		return /* @__PURE__ */ _("div", {
			"data-page-item-id": s.parentGroup?.id ?? s.id,
			children: /* @__PURE__ */ _(n_, {
				title: l,
				controls: /* @__PURE__ */ v("div", {
					"data-uhuu-editor": !0,
					className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
					children: [/* @__PURE__ */ v("span", {
						className: "uhuu-page-number",
						children: [
							o.pageNum,
							" + ",
							s.pageNum
						]
					}), /* @__PURE__ */ _("span", {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: l
					})]
				}),
				children: /* @__PURE__ */ _(ae, {
					setup: ct,
					children: /* @__PURE__ */ _(Gt, {
						sheet: e.sheet,
						pageNo: [o.pageNum, s.pageNum],
						left: vt(o, {
							renderMode: "content",
							spread: c("left")
						}),
						right: vt(s, {
							renderMode: "content",
							spread: c("right")
						}),
						spine: i && e.sheet === "outer" ? /* @__PURE__ */ _(i, {
							payload: be,
							sheet: "outer",
							spine: t.spine,
							glue: t.glue,
							bleed: n.bleed,
							height: n.height,
							totalPages: nt,
							pages: {
								left: o,
								right: s
							}
						}) : void 0,
						overlay: ({ pageNo: e, side: t }) => {
							let n = t === "left" ? o : s;
							return _t(e, n.id, n.parentGroup);
						},
						leftClassName: yt(o),
						rightClassName: yt(s),
						leftPageKey: o.componentKey ?? o.templateId ?? o.id,
						rightPageKey: s.componentKey ?? s.templateId ?? s.id
					})
				})
			})
		}, `cover-sheet-${e.sheet}`);
	}, xt = (e, t, n) => {
		let r = !!t && eg(t), i = r && t.pages[0]?.id === e.id;
		if (e.virtualPageIndex > 0) return /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
			children: [/* @__PURE__ */ _("span", {
				className: "uhuu-page-number",
				children: e.pageNum
			}), /* @__PURE__ */ _("span", {
				className: "uhuu:text-xs uhuu:text-gray-500",
				children: V("page.continued", { name: oe(e.label) || e.componentKey || e.id })
			})]
		});
		if (r && !i) return /* @__PURE__ */ _("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:justify-between uhuu:items-center uhuu:h-9",
			children: /* @__PURE__ */ v("div", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-2",
				children: [
					/* @__PURE__ */ _("span", {
						className: "uhuu-page-number",
						children: e.pageNum
					}),
					e.label && /* @__PURE__ */ _("span", {
						className: "uhuu:text-xs uhuu:text-gray-500",
						children: oe(e.label)
					}),
					/* @__PURE__ */ _("span", {
						className: "uhuu:text-xs uhuu:text-gray-400",
						children: "·"
					})
				]
			})
		});
		let a = r ? t : e, o = r ? oe(t.label) || t.id : oe(e.label) || V("page.fallbackName", { number: e.pageNum });
		return /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:flex uhuu:items-center uhuu:h-9",
			children: [
				/* @__PURE__ */ _("span", {
					className: "uhuu-page-number uhuu:shrink-0 uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-400 uhuu:font-medium uhuu:pr-1",
					children: e.pageNum
				}),
				/* @__PURE__ */ _(iC, {
					name: o,
					canRename: R.rename,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: R.remove && Qe > 1,
					onRename: (e) => Ue(a.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Ve(a.id)
				}),
				/* @__PURE__ */ _("span", {
					className: "uhuu:pl-1",
					children: ke.length > 0 && /* @__PURE__ */ _(rC, {
						pageOptions: ke,
						targetItem: a,
						onChange: ht,
						title: V(r ? "page.groupOptions" : "page.options")
					})
				})
			]
		});
	}, St = d(() => {
		if (Te !== "two_pages") return [];
		let e = tt;
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
	}, [Te, tt]), Ct = /* @__PURE__ */ v("div", {
		className: "uhuu:flex uhuu:items-center uhuu:gap-1",
		children: [
			/* @__PURE__ */ _(Ex, {
				variant: "secondary",
				className: "uhuu:font-normal uhuu:text-xs uhuu:bg-gray-100/80 uhuu:text-gray-700 uhuu:border-0",
				children: V("toolbar.pages", { count: nt })
			}),
			ne && /* @__PURE__ */ _(XC, {
				modes: A,
				selectedMode: de,
				onModeChange: (e, t) => {
					fe(e), ce(t.filter ?? null), ue(t.pageFormat ?? null), me((e) => e + 1);
				},
				interactive: te,
				onInteractiveChange: (e) => {
					z(e), e && ue(null);
				},
				hasReferenceRenderer: !!f,
				referenceOpacity: he,
				onReferenceOpacityChange: ge,
				brandKits: M,
				activeBrandKitId: N,
				onSelectBrandKit: P,
				onAddBrandKit: F
			}),
			te && /* @__PURE__ */ v(g, { children: [R.add && ze.length > 0 && /* @__PURE__ */ v(Fa, {
				variant: "ghost",
				size: "sm",
				onClick: mt,
				title: V("toolbar.addHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ _(ai, { className: "uhuu:w-3.5 uhuu:h-3.5" }), V("toolbar.add")]
			}), R.reorder && /* @__PURE__ */ v(Fa, {
				variant: "ghost",
				size: "sm",
				onClick: () => Se(!0),
				title: V("toolbar.reorderHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ _(Zr, { className: "uhuu:w-3.5 uhuu:h-3.5" }), V("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ v(g, { children: [
		lt.map((e) => vt(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		ne && !te && ie && b(/* @__PURE__ */ v(Fa, {
			onClick: () => {
				z(!0), ue(null);
			},
			"data-uhuu-editor": !0,
			size: "sm",
			className: "uhuu-screen-only uhuu:fixed uhuu:top-4 uhuu:right-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:text-xs! uhuu:rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ _(ui, { className: "uhuu:w-4 uhuu:h-4" }), "Back to Editor"]
		}), ie),
		/* @__PURE__ */ _(r_, {
			defaultZoom: 80,
			defaultZoomMode: j,
			minZoom: 25,
			maxZoom: 200,
			menuItems: x ?? Ct,
			onAddPage: R.add ? mt : void 0,
			preview: Te,
			children: st ? st.sheets.map(bt) : Te === "two_pages" ? St.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === Pe, l = s === Pe, u = (e, t) => dt(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ v($g, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ _("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ _(n_, {
							title: `Sheet ${e.left.pageNum}`,
							controls: xt(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: vt(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ _("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ _(n_, {
							title: `Sheet ${e.right.pageNum}`,
							controls: xt(e.right, e.right.parentGroup, u(e.right, a)),
							origin: e.right.pageNum % 2 == 0 ? "right" : "left",
							children: vt(e.right)
						}, e.right.virtualPageId)
					})]
				}, `pair-${t}`);
			}) : tt.map((e) => {
				let t = e.parentGroup ?? e, n = e.parentGroup?.id ?? e.id, r = dt(t, n), i = e.parentGroup?.id ?? e.id, a = Pe === i;
				return /* @__PURE__ */ _("div", {
					"data-page-item-id": e.virtualPageIndex === 0 ? i : void 0,
					className: a ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
					children: /* @__PURE__ */ _(n_, {
						title: `Sheet ${e.pageNum}`,
						controls: xt(e, e.parentGroup, r),
						children: vt(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${pe}-${de ?? "default"}`),
		te && !re && /* @__PURE__ */ v(g, { children: [R.add && /* @__PURE__ */ _(G_, {
			open: We,
			onOpenChange: Ge,
			availableItems: ze,
			onSelectItem: ft,
			pageComponents: r,
			payload: be,
			setup: De,
			gridColsClass: S,
			"data-uhuu-editor": !0
		}), R.reorder && /* @__PURE__ */ _(Ox, {
			open: xe,
			onOpenChange: Se,
			pages: qe,
			onReorder: (e) => {
				Je(e), Se(!1);
			},
			onRemove: R.remove ? (e) => Ve(e.id) : void 0,
			pageComponents: r,
			payload: be,
			setup: De,
			renderThumbnail: Ye,
			title: oe(C) ?? V("reorderDialog.title"),
			description: oe(w) ?? V("reorderDialog.description"),
			gridColsClass: S,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ _(nw, {
			label: Ae ? oe(Ae.label) ?? Ae.id : null,
			onDone: () => je(null),
			onAddAnother: () => {
				let e = Ae;
				je(null), e && ft(e);
			}
		})
	] });
}
function aw(e) {
	let { templateConfig: t, ...n } = e;
	return c(Dg) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ _(iw, { ...n }) : /* @__PURE__ */ _(Ag, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ _(iw, { ...n })
	});
}
var ow = QC(), sw = /* @__PURE__ */ new Set([
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
function cw(e, t) {
	if (!t?.length) return e;
	let n = /* @__PURE__ */ new Map(), r = (e) => e.forEach((e) => {
		e?.id && n.set(e.id, e), Array.isArray(e?.pages) && r(e.pages);
	});
	r(t);
	let i = (e) => {
		let t = n.get(e.id), r = t ? Object.fromEntries(Object.entries(t).filter(([e]) => !sw.has(e))) : {}, a = {
			...e,
			...r
		};
		return Array.isArray(e.pages) ? {
			...a,
			pages: e.pages.map(i)
		} : a;
	};
	return e.map(i);
}
function lw(t) {
	let n = c(Dg), { t: r } = Qi(), i = n?.payload ?? t.payload, a = e.useMemo(() => yC({
		...t.templateConfig,
		payload: i
	}), [t.templateConfig, i]), o = t.templateConfig?.spine?.component, [s, l] = e.useState({
		open: !1,
		message: ""
	}), u = e.useCallback((e) => {
		l({
			open: !0,
			message: e
		});
	}, []), d = e.useMemo(() => cg(i, t.stateKey ?? "uhuu_page_editor"), [i, t.stateKey]), f = e.useMemo(() => {
		let e = t.templateConfig.pageManagement;
		return e != null && typeof e != "object" && H() && console.warn(`[uhuu-components] templateConfig.pageManagement takes an object, e.g. { locked: true }; ${JSON.stringify(e)} is ignored and every page-management control stays on.`), QC(e);
	}, [t.templateConfig.pageManagement]), p = f.templateOwnsPages, m = e.useMemo(() => {
		if (p) return cw(a.initialItems, d?.items);
		if (!d?.items) return a.initialItems;
		let e = t.templateConfig.groups ?? {}, n = Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
			id: e,
			...t
		})), r = new Map(n.map((e) => [e.id, e])), o = t.templateConfig.pages ?? {}, s = (e) => {
			let t = e?.componentKey ?? e?.templateId ?? e?.id;
			return o[t] ?? o[e?.templateId] ?? o[e?.id];
		}, c = (e) => !s(e)?.hasFlow || e?.hasFlow ? e : {
			...e,
			hasFlow: !0
		}, l = (e, t) => t === void 0 || !ki(e?.label, t) || e.label === t ? e : {
			...e,
			label: t
		}, u = d.items.map((e) => {
			if (e.kind !== "group") return l(c(e), s(e)?.label);
			let t = e.templateId ?? e.id, n = r.get(t), a = l(e, n?.label), u = n?.strictPosition !== void 0 && !a.strictPosition ? {
				...a,
				strictPosition: n.strictPosition
			} : a, d = {
				...u,
				pages: (u.pages ?? []).map(c)
			};
			if (!n || typeof n.pageComponentKeys != "function") return d;
			try {
				let e = n.pageComponentKeys({
					payload: i,
					item: void 0,
					parent: void 0
				});
				return Array.isArray(e) ? e.length === 0 ? {
					...d,
					pages: []
				} : {
					...d,
					pages: e.map((e, t) => {
						let n = o[e], r = n?.dataKey;
						return {
							id: `${d.id}__${r ?? e}__${t}`,
							componentKey: e,
							templateId: e,
							...r ? { dataKey: r } : {},
							...n?.hasFlow ? { hasFlow: !0 } : {}
						};
					})
				} : (console.error(`[PageEditor] pageComponentKeys for group ${u.id} must return an array, got:`, typeof e), u);
			} catch (e) {
				return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${d.id}:`, e), d;
			}
		}), f = new Set(a.initialItems.map((e) => e.id)), m = u.filter((e) => f.has(e.id)), h = rg(m), g = rg(a.initialItems);
		if (!Array.from(f).some((e) => !m.some((t) => t.id === e)) && h !== g) {
			let e = u.filter((e) => {
				if (e.kind !== "group") return !f.has(e.id);
				let t = e.templateId ?? e.id;
				return e.id !== t && !f.has(e.id);
			});
			if (e.length === 0) return a.initialItems;
			let t = [...a.initialItems, ...e], n = t.filter((e) => e.strictPosition === "start"), r = t.filter((e) => e.strictPosition === "end"), i = t.filter((e) => !e.strictPosition);
			return [
				...n,
				...i,
				...r
			];
		}
		return u;
	}, [
		d?.items,
		a.initialItems,
		i,
		t.templateConfig.groups,
		t.templateConfig.pages,
		p
	]);
	return /* @__PURE__ */ v(ne.Provider, {
		value: !0,
		children: [/* @__PURE__ */ _(aw, {
			...t,
			payload: i,
			initialItems: m,
			availableItems: f.add || f.duplicate ? a.availableItems : [],
			pageManagement: f,
			pageComponents: a.pageComponents,
			spineComponent: o,
			notifyError: u
		}), /* @__PURE__ */ _(IC, {
			open: s.open,
			onOpenChange: (e) => {
				e || l({
					open: !1,
					message: ""
				});
			},
			children: /* @__PURE__ */ v(zC, { children: [/* @__PURE__ */ v(BC, { children: [/* @__PURE__ */ _(HC, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ _(UC, { children: s.message })] }), /* @__PURE__ */ _(VC, { children: /* @__PURE__ */ _(WC, {
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
function uw(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = dw(t, e);
				if (n != null) return n;
			}
		} else return dw(t, e);
	}
}
function dw(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function fw(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = uw(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function pw(e, t, n) {
	return e(t, n);
}
function mw(e, t, n) {
	return typeof e == "function" ? pw(e, t, n) : fw(e, t, n);
}
function hw(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function gw(e, t, n = {}, r, i = null) {
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
function _w(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a, defaults: o } = t, s = e.useMemo(() => mw(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), c = e.useMemo(() => hw(n, r, a), [
		n,
		r,
		a
	]), l = e.useCallback((e, t = {}, r) => gw(n, e, t, r, c), [n, c]), u = e.useCallback((e, t = {}, n) => {
		let r = l(e, t, n);
		return r ? st({ dialog: r }) : {};
	}, [l]);
	return e.useMemo(() => ({
		data: s,
		dialog: l,
		dialogProps: u,
		galleryPath: c,
		instanceId: n?.integration?.instanceId ?? null,
		integration: r
	}), [
		s,
		l,
		u,
		c,
		n,
		r
	]);
}
//#endregion
//#region src/index.js
var vw = {
	Pagination: ae,
	Sheet: V,
	FlowArea: Ze,
	FlowPage: Qe,
	Flow: at,
	FlowColumns: ot,
	planFlowChunks: me,
	planFlowColumnChunks: Se,
	createFlowPlanMetrics: pe,
	flowMeasure: Ce,
	FlowDocument: Dt,
	markdownToFlowItems: Ht,
	htmlToFlowItems: Ct,
	planCoverSpread: N,
	resolveSheetSize: j,
	CoverSpread: Gt,
	usePaginationHold: qt
}, yw = {
	TemplateDataProvider: Ag,
	PageEditor: lw,
	InteractiveModeProvider: Aa,
	useInteractive: Ea,
	useIntegrationAdapter: _w
};
//#endregion
export { vh as BRAND_KIT_PUBLIC_BASE_URL, Zh as BrandKitProvider, ft as Editable, yw as EditorShell, Am as ImageBlock, vw as Static, Mh as brandKitCollection, Ph as brandKitEnv, Oh as brandKitLogo, Fh as brandKitMapStyle, Sh as brandKitSourceUrl, st as getDialogProps, zm as imageUrl, Ch as loadBrandKit, Qh as useBrandKit };

//# sourceMappingURL=uhuu-components.es.js.map