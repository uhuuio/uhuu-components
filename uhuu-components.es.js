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
function z(e, t) {
	let n = Object.keys(t ?? {}).sort().map((e) => {
		let n = t[e]?.signatures ?? {};
		return `${e}=${Object.keys(n).sort().map((e) => `${e}:${n[e]}`).join(",")}`;
	});
	return `${e.join("|")}#${n.join(";")}`;
}
function B({ doc: e, settleMs: t = 50 } = {}) {
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
					let n = [...e], r = z(n, t);
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
var V = B(), te = t.createContext(!1), ne = typeof window > "u" ? l : u;
function H(e) {
	let [t] = m(() => e ? V.createScope() : null);
	ne(() => (t?.commit([], {}), () => t?.suspend()), [t]), l(() => () => t?.unmount(), [t]);
}
var re = ({ children: e, className: n, setup: r }) => {
	let i = I.pageParams("static", r);
	H(!t.useContext(te)), l(() => {
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
}, ie = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
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
ie.displayName = "Sheet";
//#endregion
//#region src/uhuu/utility/is-dev.ts
function U() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
function ae(e, { fallbackMs: t = 100, win: n } = {}) {
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
var oe = 1e4;
function se(e, { begin: t, onReady: n, doc: r = e.ownerDocument, waitMs: i = oe }) {
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
function ce(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function le(e) {
	return typeof e == "string" && e ? e : null;
}
function ue(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
var de = 2;
function fe(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : de;
}
var pe = .01, me = .01;
function he(e, t) {
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
		].every((e) => typeof e == "number" && Number.isFinite(e)) || n < t - pe || t < i - pe || o <= a || o > r) return null;
		i = n, a = o;
	}
	return n[n.length - 1].bottom - n[0].top > t + 1 ? null : e;
}
function ge(e, t, n, r) {
	let { lines: i } = e;
	return Math.max(0, i[0].top + (i[r].bottom - i[n].top) + (t - i[i.length - 1].bottom));
}
function _e({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = le(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : le(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : le(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
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
function ve() {
	return {
		scannedItems: 0,
		chunkerCalls: 0,
		freshPageAttempts: 0,
		pages: 0
	};
}
function ye({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, continuationHeight: i, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, previousHeaderGroupKey: c, onUnplaceableItem: l, lines: u, window: d, maxChunks: f = 0, metrics: p } = {}) {
	let m = d?.indexes, h = d?.offset ?? 0, g = m ? Math.max(0, m.length - h) : e.length, _ = m ? (e) => m[h + e] : (e) => e, v = ce(r) || Infinity, y = ce(i) || v, b = [{
		indexes: [],
		keys: []
	}], x = 0, S = () => b.length > 1 ? y : v, C = () => b[b.length - 1], w = () => {
		let e = C().indexes;
		return e.length ? e[e.length - 1] : null;
	}, T = () => C().indexes.length > 0 || !!C().unplaceable, E = (e) => le(a[_(e)]), D = (e) => ce(o[e] ?? 0), O = (e) => s[e] !== !1, k = (e, t) => {
		let n = E(e);
		return n ? t == null ? (e > 0 ? E(e - 1) : le(c)) !== n || O(n) : E(t) !== n : !1;
	}, A = (t, n) => {
		let r = E(t);
		return ce(e[_(t)]) + (r && k(t, n) ? D(r) : 0);
	}, j = (e) => {
		let t = n[_(e)] ?? {};
		return t.avoidBreakInside && t.groupKey ? t.groupKey : null;
	}, M = (e, t) => {
		let n = E(e);
		return n && k(e, t) ? D(n) : 0;
	}, N = (e) => {
		let t = E(e);
		return t && O(t) ? D(t) : 0;
	}, P = /* @__PURE__ */ new Map(), F = (e) => !!u && _(e) in u, I = (t) => {
		if (!F(t)) return null;
		if (P.has(t)) return P.get(t);
		let r = n[_(t)] ?? {}, i = ce(e[_(t)]), a = r.avoidBreakInside ? null : he(u[_(t)], i);
		if (a) {
			let e = E(t), n = e ? D(e) : 0, r = Math.min(v, y);
			for (let e = 0; e < a.lines.length; e += 1) if (ge(a, i, e, e) + n > r + me) {
				a = null;
				break;
			}
		}
		let o = a ? {
			entry: a,
			height: i,
			count: a.lines.length,
			orphans: fe(r.orphans),
			widows: fe(r.widows)
		} : null;
		return P.set(t, o), o;
	}, L = /* @__PURE__ */ new Map(), R = (e, t, n) => {
		let r = 0, i = n;
		for (let n = e; n < g && j(n) === t; n += 1) p && (p.scannedItems += 1), r += A(n, i), i = n;
		return r;
	}, ee = (e, t, { currentHeight: n, ownHeight: r, stopEarly: i } = {}) => {
		let a = 0, o = e;
		for (let s = 1; s <= t; s += 1) {
			let t = e + s;
			if (t >= g) break;
			p && (p.scannedItems += 1);
			let c = A(t, o), l = F(t) && n + (r + a + c) > S() + me ? I(t) : null;
			if (l && l.count >= l.orphans + l.widows) {
				a += c - l.height + ge(l.entry, l.height, 0, l.orphans - 1);
				break;
			}
			if (a += c, i && n + (r + a) > S()) break;
			o = t;
		}
		return a;
	}, z = () => {
		T() && (b.push({
			indexes: [],
			keys: []
		}), x = 0);
	}, B = (e, n, r) => {
		let i = t[_(e)] ?? String(_(e)), a = E(e) ?? void 0, o = a && k(e, null) ? D(a) : 0, s = {
			index: e,
			key: i,
			height: n,
			headerHeight: o,
			requiredHeight: r,
			availableHeight: S(),
			groupKey: a,
			reason: o > 0 ? "item-with-header-too-tall" : "item-too-tall"
		};
		C().unplaceable = s, l?.(s), b.push({
			indexes: [],
			keys: []
		}), x = 0;
	}, V = (e, t) => {
		let n = T(), r = A(e, w());
		if (r > S() - x) return !1;
		if (!n) return !0;
		let i = ee(e, ue(t.keepWithNext), {
			currentHeight: x,
			ownHeight: r,
			stopEarly: Number.isFinite(S())
		});
		return x + r + i <= S();
	}, te = (e, t, n, { entry: r, height: i, count: a, orphans: o, widows: s }) => {
		let c = (e, t) => ge(r, i, e, t), l = (e, t, n) => {
			let r = e, i = t, a = e - 1;
			for (; r <= i;) {
				let t = r + i >> 1;
				c(e, t) <= n + me ? (a = t, r = t + 1) : i = t - 1;
			}
			return a;
		}, u = (n, r, i) => {
			let o = C();
			if (o.indexes.push(e), o.keys.push(t), x += i, n === 0 && r === a - 1) return;
			let s = L.get(o);
			s || (s = /* @__PURE__ */ new Map(), L.set(o, s)), s.set(e, [n, r]);
		}, d = 0;
		for (;;) {
			p && (p.scannedItems += 1);
			let t = T(), r = d === 0 ? M(e, w()) : N(e), f = S() - x, m = (d === 0 ? i : c(d, a - 1)) + r;
			if (m <= f + me) {
				if (t) {
					let t = ee(e, ue(n.keepWithNext), {
						currentHeight: x,
						ownHeight: m,
						stopEarly: Number.isFinite(S())
					});
					if (x + m + t > S() + me) {
						let e = a - 1 - s;
						e - d + 1 >= o ? (u(d, e, c(d, e) + r), z(), d = e + 1) : z();
						continue;
					}
				}
				u(d, a - 1, m);
				return;
			}
			let h = l(d, a - 2, f - r), g = Math.min(h, a - 1 - s);
			if (g >= d && g - d + 1 >= o) u(d, g, c(d, g) + r);
			else if (t) {
				z();
				continue;
			} else {
				let e = Math.max(d, h);
				if (u(d, e, c(d, e) + r), e >= a - 1) return;
				d = e + 1, z();
				continue;
			}
			d = g + 1, z();
		}
	};
	for (let r = 0; r < g && !(f && b.length > f); r += 1) {
		p && (p.scannedItems += 1);
		let i = n[_(r)] ?? {}, a = ce(e[_(r)]), o = t[_(r)] ?? String(_(r));
		i.breakBefore && z();
		let s = j(r), c = r > 0 ? j(r - 1) : null;
		s && s !== c && T() && x + R(r, s, w()) > S() && z();
		let l = F(r) && !V(r, i) ? I(r) : null;
		if (l) {
			te(r, o, i, l), i.breakAfter && r < g - 1 && z();
			continue;
		}
		let u = w(), d = A(r, u);
		if (T() && d > S() - x && (z(), u = null, d = A(r, u)), d > S()) {
			B(r, a, d);
			continue;
		}
		let f = T(), m = f ? ee(r, ue(i.keepWithNext), {
			currentHeight: x,
			ownHeight: d,
			stopEarly: Number.isFinite(S())
		}) : 0, h = d + m;
		f && x + h > S() && (z(), u = null, d = A(r, u), d > S()) ? B(r, a, d) : (C().indexes.push(r), C().keys.push(o), x += d, i.breakAfter && r < g - 1 && z());
	}
	let ne = b.filter((e) => e.indexes.length > 0 || !!e.unplaceable);
	if (!ne.length) return p && !f && (p.pages = 1), [{
		indexes: [],
		keys: []
	}];
	let H = f ? ne.slice(0, f) : ne;
	p && !f && (p.pages = H.length);
	let re = xe(H, L, (e) => I(e).entry);
	return H.map((e) => {
		if (!e.indexes.length) return e;
		let t = L.get(e), n = [];
		for (let r = 0; r < e.indexes.length; r += 1) {
			let i = e.indexes[r], a = E(i);
			if (!a) continue;
			if (r === 0 && t?.get(i)?.[0] > 0) {
				O(a) && n.push({
					groupKey: a,
					itemIndex: i,
					isContinuation: !0
				});
				continue;
			}
			let o = r > 0 ? e.indexes[r - 1] : null;
			if (!k(i, o)) continue;
			let s = i > 0 ? E(i - 1) : null;
			n.push({
				groupKey: a,
				itemIndex: i,
				isContinuation: s === a
			});
		}
		let r = re.get(e);
		return !n.length && !r ? e : {
			...e,
			...n.length ? { groupHeaders: n } : {},
			...r ? { splits: r } : {}
		};
	});
}
function be(e, t, n, r) {
	let i = [];
	for (let a = t; a <= n; a += 1) e[a].hyphen && a !== e.length - 1 && (a === n && r || i.push(e[a + 1].start));
	return i.length ? { hyphens: i } : {};
}
function xe(e, t, n) {
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
				...be(a, o, s, c === t.length - 1)
			};
		});
	}
	return r;
}
function Se(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + ce(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + ce(n[t.groupKey]), 0);
}
function Ce(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function we(e, t, n, r, i, a) {
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
function Te(e, t, n, r, i, a, o) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let s = Ce(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let c = we(ye({
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
		height: Se(c, e.heights ?? [], s.headerGroupHeights ?? {})
	};
}
function Ee({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function De(e, t, n, r, i) {
	let a = ce(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	let o = t[n];
	if (o === void 0) return "no";
	let s = e.metas?.[o] ?? {};
	return ue(s.keepWithNext) > 0 || s.avoidBreakInside && s.groupKey ? "compare" : "no";
}
function Oe(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function ke({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, continuationHeight: a, headerGroupKeys: o = [], headerGroupHeights: s = {}, headerGroupRepeats: c = {}, columnHeaderGroupHeights: l = {}, columnHeaderGroupRepeats: u = {}, onUnplaceableItem: d, metrics: f } = {}) {
	Ee({
		nodes: e,
		itemCount: t.length
	});
	let p = ce(i) || Infinity, m = ce(a) || p, h = {
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
		Oe(v()) && (g.push({
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
				y() - _ <= 0 && Oe(v()) && x(), r[i[o]]?.breakBefore && Oe(v()) && x();
				let e = o > 0 ? i[o - 1] : void 0, t = Te(h, i, o, y() - _, void 0, void 0, e);
				if (Oe(v())) {
					let n = De(h, i, o, t, b);
					if (n !== "no") {
						f && (f.freshPageAttempts += 1);
						let r = Te(h, i, o, b, void 0, void 0, e);
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
			y() - _ <= 0 && Oe(v()) && x(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && Oe(v()) && x();
			let e = y() - _, t = a.map((t) => Te(h, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (f && (f.freshPageAttempts += 1), Te(h, e.indexes, e.cursor, b, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (Oe(v()) && a.some((e, n) => {
				let r = De(h, e.indexes, e.cursor, t[n], b);
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
	let C = g.filter(Oe);
	return C.length ? (f && (f.pages = C.length), C) : (f && (f.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-measure.ts
var Ae = /* @__PURE__ */ w({
	getEffectiveScale: () => Me,
	getOuterHeight: () => Ne,
	hashString: () => Je,
	parseKeepWithNext: () => Le,
	parseLineCount: () => Fe,
	readFlowItemElements: () => Ue,
	readFlowTextLines: () => qe,
	readHeaderGroupHeights: () => Ve,
	readHeaderGroupKey: () => ze,
	readHeaderGroupRepeats: () => Be,
	readItemFlowTexts: () => We,
	readItemMeta: () => Pe,
	readUnwrappedHeights: () => He,
	serializeKeepWithNext: () => Re,
	serializeLineCount: () => Ie
}), je = "data-uhuu-flow-text";
function Me(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function Ne(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function Pe(e) {
	let t = {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: Le(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	}, n = Fe(e.dataset.uhuuFlowOrphans), r = Fe(e.dataset.uhuuFlowWidows);
	return n !== void 0 && (t.orphans = n), r !== void 0 && (t.widows = r), t;
}
function Fe(e) {
	if (!e) return;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t >= 1 ? t : void 0;
}
function Ie(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? String(Math.floor(e)) : void 0;
}
function Le(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function Re(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function ze(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function Be(e) {
	let t = {};
	for (let n of e) {
		let e = ze(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function Ve(e, t = 1, n) {
	let r = {};
	for (let i of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = i.dataset.uhuuFlowHeaderGroupKey;
		e && (r[e] = Math.max(r[e] ?? 0, n?.get(i) ?? Ne(i, t)));
	}
	return r;
}
function He(e, t, n = 1) {
	let r = /* @__PURE__ */ new Map(), i = e.getBoundingClientRect().top;
	for (let e of Array.from(t.children)) {
		if (!(e instanceof HTMLElement) || !e.getClientRects().length) continue;
		let t = e.getBoundingClientRect().bottom, a = Math.max(0, t - i) / n;
		i = Math.max(i, t), e.dataset.uhuuFlowItem === "true" ? r.set(e, a) : e.dataset.uhuuFlowGroupHeader === "true" && r.set(e, Math.max(a, Ne(e, n)));
	}
	return r;
}
function Ue(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function We(e) {
	let t = e.closest("[data-uhuu-flow=\"true\"]");
	return Array.from(e.querySelectorAll(`[${je}]`)).filter((e) => e.closest("[data-uhuu-flow=\"true\"]") === t);
}
var Ge = /[\p{L}\p{M}]/u;
function Ke(e) {
	let t = (t) => Number.parseFloat(e.getPropertyValue(t) || "0") || 0;
	return {
		top: t("border-top-width") + t("padding-top"),
		bottom: t("border-bottom-width") + t("padding-bottom")
	};
}
function qe(e, t, n = 1, r) {
	let i = We(e);
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
	let c = [], l = [], u = 0, d = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
	for (let e = d.nextNode(); e; e = d.nextNode()) {
		let t = e;
		c.push(t), l.push(u), u += t.data.length;
	}
	if (!c.length) return;
	let f = document.createRange(), p = [], m = [];
	for (let e of c) {
		f.selectNodeContents(e);
		let t = -1, n = -1;
		for (let e of Array.from(f.getClientRects())) {
			if (!(e.height > 0)) continue;
			let r = p[p.length - 1];
			!r || (e.top + e.bottom) / 2 > r.bottom ? p.push({
				top: e.top,
				bottom: e.bottom
			}) : (r.top = Math.min(r.top, e.top), r.bottom = Math.max(r.bottom, e.bottom)), t < 0 && (t = p.length - 1), n = p.length - 1;
		}
		m.push(t < 0 ? null : [t, n]);
	}
	if (!p.length) return;
	let h = (e, t, n) => {
		let r = t, i = n;
		for (; r < i;) {
			let t = r + i >> 1;
			p[t].bottom >= e ? i = t : r = t + 1;
		}
		return r;
	}, g = (e, t, n, r) => {
		for (let i = t; i < e.data.length; i += 1) {
			f.setStart(e, i), f.setEnd(e, i + 1);
			let t = f.getClientRects();
			for (let e = t.length - 1; e >= 0; --e) {
				let i = t[e];
				if (i.height > 0) return h((i.top + i.bottom) / 2, n, r);
			}
		}
		return r;
	}, _ = Array.from({ length: p.length }, () => -1);
	c.forEach((e, t) => {
		let n = m[t];
		if (!n) return;
		let [r, i] = n, a = e.data.length, o = (t, n) => g(e, t, r, i) >= n;
		_[r] < 0 && (_[r] = l[t]);
		let s = 0, c = 0;
		for (let n = r + 1; n <= i; n += 1) {
			let r = s, u = a, d = c || Math.ceil((a - s) / (i - n + 2)), f = Math.min(a - 1, s + d), p = Math.max(1, d >> 3);
			if (f > s && o(f, n)) {
				u = f;
				for (let e = f - p; e > s; e = u - p) {
					if (!o(e, n)) {
						s = e + 1;
						break;
					}
					u = e, p *= 2;
				}
			} else if (f > s) {
				s = f + 1;
				for (let e = f + p; e < u; e = s + p) {
					if (o(e, n)) {
						u = e;
						break;
					}
					s = e + 1, p *= 2;
				}
			}
			for (; s < u;) {
				let e = s + u >> 1;
				o(e, n) ? u = e : s = e + 1;
			}
			let m = s, h = e.data.charCodeAt(m);
			m > 0 && h >= 56320 && h <= 57343 && --m, _[n] = l[t] + m, c = Math.max(1, m - r);
		}
	});
	let v = (e) => {
		let t = 0, n = l.length - 1;
		for (; t < n;) {
			let r = t + n + 1 >> 1;
			l[r] <= e ? t = r : n = r - 1;
		}
		return t;
	}, y = (e) => {
		let t = v(e);
		return c[t].data[e - l[t]] ?? "";
	}, b = p.map((e, t) => {
		if (t === p.length - 1) return !1;
		let n = _[t + 1] - 1;
		if (n < 0) return !1;
		let r = y(n);
		if (r === "­") return !0;
		if (!Ge.test(r) || !Ge.test(y(n + 1))) return !1;
		let i = v(n), a = c[i], o = n - l[i];
		f.setStart(a, o), f.setEnd(a, o + 1);
		let s = 0;
		for (let e of Array.from(f.getClientRects())) {
			let n = (e.top + e.bottom) / 2;
			e.height > 0 && n >= p[t].top && n <= p[t].bottom && (s += 1);
		}
		return s >= 2;
	}), x = a.getBoundingClientRect(), S = Ke(o), C = e.getBoundingClientRect(), w = Number.parseFloat(window.getComputedStyle(e).marginBottom || "0") || 0, T = C.bottom + (w - t) * n, E = (e) => (e - T) / n, D = x.top + S.top * n, O = x.bottom - S.bottom * n, k = [];
	return p.forEach((e, t) => {
		let n = t === 0 ? D : (p[t - 1].bottom + e.top) / 2, r = t === p.length - 1 ? O : (e.bottom + p[t + 1].top) / 2, i = t === 0 ? 0 : _[t], a = k[k.length - 1];
		a && !(i > a.start) ? (a.bottom = E(r), b[t] ? a.hyphen = !0 : delete a.hyphen) : k.push({
			top: E(n),
			bottom: E(r),
			start: i,
			...b[t] ? { hyphen: !0 } : {}
		});
	}), {
		lines: k,
		end: u,
		justify: o.textAlign === "justify"
	};
}
function Je(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-text-slice.js
var Ye = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.abbr.b.bdi.bdo.br.cite.code.data.del.dfn.em.i.ins.kbd.mark.s.samp.small.span.strong.sub.sup.time.u.var.wbr".split(".")), Xe = /* @__PURE__ */ new Set(["br"]);
function Ze(e) {
	return typeof e == "string" ? e : typeof e == "function" ? e.displayName || e.name || "Component" : e && typeof e == "object" && e.displayName || "Component";
}
function Qe(t) {
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
					if (!Ye.has(t.type) || o.dangerouslySetInnerHTML) {
						r = {
							reason: "block-content",
							name: t.type
						};
						return;
					}
					Xe.has(t.type) && i.push(n.length), a(o.children);
					return;
				}
				r = {
					reason: "component-content",
					name: Ze(t.type)
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
var $e = (e) => e === " " || e === "\n" || e === "	" || e === "\r" || e === "\f", et = "­";
function tt(t, { text: n, breaks: r = [] }, { from: i, to: a, part: o, parts: s, hyphens: c = [] }) {
	let l = o === 0, u = o === s - 1, d = l ? 0 : Math.max(0, i), f = u ? n.length : Math.min(n.length, a), p = (e) => n[e - 1] === "\n" || r.includes(e);
	if (!l) {
		let e = d;
		for (; e < f && $e(n[e]);) e += 1;
		let t = n.slice(d, e).lastIndexOf("\n");
		t >= 0 ? d += t + 1 : p(d) || (d = e);
	}
	let m = !1, h = !1;
	if (!u) {
		if (c.includes(f) && !r.includes(f)) n[f - 1] === et && --f, m = !0;
		else {
			let e = f;
			for (; e > d && $e(n[e - 1]);) --e;
			(r.includes(f) || n.slice(e, f).includes("\n")) && (h = !0), f = e;
		}
	}
	let g = c.filter((e) => e > d && e < f && n[e - 1] !== et), _ = 0, v = !1, y = (t) => {
		if (t == null || typeof t == "boolean") return null;
		if (typeof t == "string" || typeof t == "number" || typeof t == "bigint") {
			let e = String(t), n = _, r = _ + e.length;
			_ = r;
			let i = Math.max(n, d), a = Math.min(r, f);
			if (!(i < a)) return null;
			let o = "", s = i;
			for (let t of g) t <= i || t > a || (o += e.slice(s - n, t - n) + et, s = t);
			return o += e.slice(s - n, a - n), m && !v && f <= r && (o += "-", v = !0), o;
		}
		if (Array.isArray(t)) return t.map(y);
		if (!e.isValidElement(t)) return null;
		let n = _;
		if (typeof t.type == "string" && Xe.has(t.type)) {
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
var nt = e.createContext(null), rt = typeof window > "u" ? e.useEffect : e.useLayoutEffect, it = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Set();
function ot(e) {
	let t = e.getBoundingClientRect();
	if (!(t.height > 0)) return;
	let n = window.getComputedStyle(e), r = (e) => Number.parseFloat(n.getPropertyValue(e) || "0") || 0;
	return t.height / Me(e) - r("padding-top") - r("padding-bottom") - r("border-top-width") - r("border-bottom-width");
}
function st({ children: t, as: n = "div", className: r, style: i }) {
	let a = e.useContext(nt), o = e.useRef(null), s = e.useMemo(() => Qe(t), [t]), { text: c, problem: l } = s, u = a && !l ? tt(t, s, a) : null, d = u ? a?.textHeight : void 0;
	e.useEffect(() => {
		if (!l || !U()) return;
		let e = `${l.reason}:${l.name}`;
		it.has(e) || (it.add(e), console.warn(`[uhuu-components] Static.FlowText holds ${l.reason === "block-content" ? `a <${l.name}>` : `<${l.name}>`}: only text and inline text elements (span, strong, em, b, i, a, small, sub, sup, br) can split between lines, so its item is not split. Put block content in the item outside the FlowText, and an Editable around the FlowText rather than inside it.`));
	}, [l]), rt(() => {
		let e = o.current;
		if (d === void 0 || !e || !U()) return;
		let t = ot(e);
		if (t === void 0 || t <= d + 1) return;
		let n = c.slice(0, 40);
		at.has(n) || (at.add(n), console.warn(`[uhuu-components] Static.FlowText "${c.slice(0, 40)}…": a piece lays out ${Math.round(t - d)}px taller than the lines it was planned with, so it re-wrapped. A continuation must give the FlowText the width it measured with (keep a label cell, empty), and ::first-line styles or text-wrap: balance | pretty re-flow a slice.`));
	});
	let f = n, p = {
		ref: o,
		className: r,
		style: u && a ? {
			...i,
			...a.part > 0 ? { textIndent: 0 } : {},
			...a.justify && u.justifyLast ? { textAlignLast: "justify" } : {},
			...u.manualHyphens ? {
				hyphens: "manual",
				WebkitHyphens: "manual"
			} : {}
		} : i,
		"data-uhuu-flow-text": "true",
		"data-uhuu-flow-text-unsplittable": l?.reason
	};
	return u ? e.createElement(f, p, ...u.children) : e.createElement(f, p, t);
}
//#endregion
//#region src/uhuu/pagination-static/flow-static.tsx
var ct = ye, lt = ke, ut = "data-uhuu-flow-continuation-copy", dt = e.createContext(null), ft = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function pt(e) {
	let t = e.availableHeight - e.headerHeight;
	if (!(e.height > 0) || !Number.isFinite(t)) return;
	let n = Math.min(1, Math.max(t, 1) / e.height);
	return n < 1 ? {
		transform: `scale(${n})`,
		transformOrigin: "top left"
	} : void 0;
}
var mt = /* @__PURE__ */ new Set();
function ht(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function gt(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function _t(e) {
	return Number.parseFloat(e || "0") || 0;
}
function vt(e, t) {
	let n = (e) => {
		let t = window.getComputedStyle(e);
		return _t(t.paddingTop) + _t(t.paddingBottom) + _t(t.borderTopWidth) + _t(t.borderBottomWidth);
	};
	for (let r of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let e = window.getComputedStyle(r), i = _t(e.marginTop) + _t(e.marginBottom);
		if (n(r) > .01 || i > .01) throw TypeError("[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps.");
		let a = [];
		for (let e of Array.from(r.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let r = window.getComputedStyle(e), i = _t(r.marginTop) + _t(r.marginBottom);
			if (n(e) > .01 || i > .01 || _t(r.rowGap) > .01 || _t(r.minHeight) > .01 || r.maxHeight !== "none") throw TypeError("[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps.");
			let o = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + Ne(n, t), 0);
			a.push(o);
		}
		let o = Math.max(0, ...a);
		if (Ne(r, t) > o + 1) throw TypeError("[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent.");
	}
}
function yt(e, t, n) {
	let r = e.dataset.uhuuFlowItemCount;
	if (r === void 0) return;
	let i = Number.parseInt(r, 10);
	Number.isInteger(i) && i !== t.length && n.onUnmarkedItems?.(t.length, i);
}
var bt = (e) => e === void 0 ? void 0 : Math.round(e * 100) / 100, xt = "[data-uhuu-flow-text]", St = (e) => e ? {
	lines: e.lines.map(({ top: e, bottom: t, start: n, hyphen: r }) => r ? [
		bt(e),
		bt(t),
		n,
		1
	] : [
		bt(e),
		bt(t),
		n
	]),
	end: e.end,
	justify: e.justify
} : null;
function Ct(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return wt(e, t, n);
	let i = Ue(t);
	if (yt(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = Me(e), s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = t.dataset.uhuuFlowAsChild === "true" ? He(e, t, o) : void 0, u = i.map((e) => l?.get(e) ?? Ne(e, o)), d = i.map(Pe), f = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), p = i.map(ze), m = Be(i), h = Ve(t, o, l), g = c ? n.continuationHeight : void 0, _ = [], v = c ? s : u.reduce((e, t) => e + t, 0) + Object.values(h).reduce((e, t) => e + t, 0), y = !!t.querySelector(xt), b = /* @__PURE__ */ new Map(), x = y ? Array(i.length) : void 0;
	return x && i.forEach((e, t) => {
		e.querySelector(xt) && Object.defineProperty(x, t, {
			enumerable: !0,
			get: () => (b.has(t) || b.set(t, qe(e, u[t], o, n.onFlowTextIssue)), b.get(t))
		});
	}), c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: ct({
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
			},
			...y ? { lines: x } : {}
		}),
		signature: Je(JSON.stringify({
			version: y ? 4 : 2,
			flowId: r,
			availableHeight: Math.round(v * 100) / 100,
			continuationHeight: bt(g),
			heights: u.map((e) => Math.round(e * 100) / 100),
			keys: f,
			metas: d,
			headerGroupKeys: p,
			headerGroupHeights: h,
			headerGroupRepeats: m,
			unplaceableItems: _,
			...y ? { lines: [...b].sort(([e], [t]) => e - t).map(([e, t]) => [e, St(t)]) } : {}
		})),
		unplaceableItems: _
	};
}
function wt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = Ue(t);
	if (yt(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = e.getBoundingClientRect(), o = Me(e);
	vt(t, o), t.querySelector(xt) && n.onFlowTextIssue?.("flow-text-in-columns");
	let s = a.height ? a.height / o : e.clientHeight, c = Number.isFinite(s) && s > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0), m = t.dataset.uhuuFlowAsChild === "true" ? He(e, t, o) : void 0;
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = m?.get(e) ?? Ne(e, o), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = Pe(e), p[t] = ze(e));
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
	}), g = Be(i), _ = Ve(t, o, m), v = c ? n.continuationHeight : void 0, y = {}, b = {};
	for (let e of Array.from(t.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			y[t] = {}, b[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				y[t][e] = Ve(n, o), b[t][e] = Be(r);
			}
		}
	}
	let x = [], S = c ? s : u.reduce((e, t) => e + t, 0) + Object.values(_).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: lt({
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
		signature: Je(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(S * 100) / 100,
			continuationHeight: bt(v),
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
var Tt = {
	"multiple-flow-text": "an item holds more than one Static.FlowText, so it is not split. Give each item one FlowText.",
	"inline-flow-text": "a Static.FlowText is not a block element (as=\"span\"?), so its lines are not its own and its item is not split. Keep the default `as=\"div\"` or another block element.",
	"rewrapping-text-wrap": "a Static.FlowText has text-wrap: balance or pretty, which re-flows each piece of a split item, so a piece may not match its planned lines. Use text-wrap: wrap on split text.",
	"flow-text-in-columns": "Static.FlowColumns does not split Static.FlowText items; they render whole."
};
function Et(e, t) {
	for (let n of Array.from(e.querySelectorAll(`[${ut}] [data-uhuu-flow="true"]`))) if (n.dataset.uhuuFlowId === t) return n.closest("[data-uhuu-flow-area]");
	return null;
}
function Dt({ children: t, className: n = "", style: r, onFlowMeasurement: i, measureContinuation: a = !1 }) {
	let o = e.useContext(dt), s = e.useRef(null), c = e.useId(), l = e.useRef(null), u = e.useRef(o), d = e.useRef(""), f = e.useRef(!1), p = e.useRef(!1), m = e.useRef(/* @__PURE__ */ new Set()), h = e.useRef(""), g = e.useRef(""), v = e.useRef(""), y = e.useRef(/* @__PURE__ */ new Set());
	return e.useEffect(() => () => {
		u.current?.unregisterMeasurement?.(l.current ?? "", c);
	}, [c]), ft(() => {
		if (a) return o?.requestContinuation?.();
	}, [o, a]), ft(() => {
		if (u.current = o, o?.mode !== "measure" || !o.registerMeasurement || !s.current) return;
		let e = s.current, t = e.closest("[data-uhuu-flow-measurement]") ?? e, n = a && !!o.requestContinuation, r = null, _, b = null, x = null;
		d.current = "";
		let S = (t = !0) => {
			t && !_ && (_ = C?.begin()), r === null && (r = ae(() => {
				r = null;
				try {
					O();
				} catch (t) {
					d.current = "", C?.fail(t), e.setAttribute("data-uhuu-flow-error", String(t)), console.error("[uhuu-components] Flow measurement failed:", t);
				} finally {
					_?.(), _ = void 0;
				}
			}));
		}, C = o.readiness?.registerArea(o.pageKey ?? "", { remeasure: () => S() }), w = /* @__PURE__ */ new Set(), T = () => {
			if (b) {
				for (let t of Array.from(w)) e.contains(t) || (b.unobserve(t), w.delete(t));
				e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]").forEach((e) => {
					w.has(e) || (w.add(e), b?.observe(e));
				});
			}
		}, E = (t) => {
			t ? e.setAttribute("data-uhuu-flow-error", t) : e.removeAttribute("data-uhuu-flow-error");
		}, D = (e) => {
			let n = Et(t, e);
			if (n !== x && (x && b?.unobserve(x), n && b?.observe(n), x = n), !n) return { failure: "missing-continuation-flow" };
			let r = n.getBoundingClientRect(), i = r.height ? r.height / Me(n) : n.clientHeight;
			return Number.isFinite(i) && i > 0 ? { height: i } : { failure: "unmeasurable-flow-area" };
		};
		function O() {
			T();
			let r = e.querySelectorAll("[data-uhuu-flow=\"true\"]");
			r.length > 1 && !f.current && U() && (f.current = !0, console.warn("[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."));
			let a = r[0], s = a?.dataset.uhuuFlowId;
			if (l.current && l.current !== s && (o?.unregisterMeasurement?.(l.current, c), l.current = null, d.current = ""), !a) {
				E("missing-flow"), C?.clear();
				return;
			}
			let u = s ? Array.from(t.querySelectorAll("[data-uhuu-flow=\"true\"]")).filter((e) => e.dataset.uhuuFlowId === s && !e.closest("[data-uhuu-flow-continuation-copy]")).length : 0, _ = s ? u > 1 ? "duplicate-flow-id" : null : "missing-flow-id";
			if (_ && U() && h.current !== `${_}:${s}` && (h.current = `${_}:${s}`, console.warn(`[uhuu-components] Static.Flow ${s ? `id "${s}" is used by more than one Flow` : "has no id"} on page "${o?.pageKey ?? ""}". Give each Flow on a page a stable, unique id.`)), !s) {
				d.current = "", E("missing-flow-id"), C?.fail("missing-flow-id");
				return;
			}
			let b = _ ?? (r.length > 1 ? "multiple-flows-in-area" : null), x = n ? D(s) : void 0, S = Ct(e, a, {
				continuationHeight: x?.height,
				onUnmarkedItems: (e, t) => {
					b ??= "unmarked-flow-item", U() && v.current !== s && (v.current = s, console.warn(`[uhuu-components] Static.Flow "${s}" asChild: ${t - e} of ${t} items carry no flow attributes, so the flow cannot be paginated. renderItem must return a DOM element, or a component that passes the props it receives on to its root DOM element.`));
				},
				onZeroHeight: () => {
					a.getClientRects().length && (b = "unmeasurable-flow-area", !p.current && U() && (p.current = !0, console.warn("[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0.")));
				},
				onFlowTextIssue: (e) => {
					if (e === "unsupported-content" || !U()) return;
					let t = `${s}:${e}`;
					y.current.has(t) || (y.current.add(t), console.warn(`[uhuu-components] Static.Flow "${s}": ${Tt[e]}`));
				},
				onUnplaceableItem: (e) => {
					m.current.has(e.key) || (m.current.add(e.key), console.warn(`[uhuu-components] Static.Flow item "${e.key}" cannot fit in its FlowArea (${Math.round(e.requiredHeight)}px required > ${Math.round(e.availableHeight)}px available). It prints on a page of its own, scaled to fit. Put its long text in a Static.FlowText, split the item, or reduce its height.`));
				}
			});
			if (!S) return;
			let w = S.chunks.length > 1 ? x?.failure : void 0;
			if (w && U() && g.current !== `${w}:${s}` && (g.current = `${w}:${s}`, console.warn(`[uhuu-components] Static.FlowArea measureContinuation: page "${o?.pageKey ?? ""}" ` + (w === "missing-continuation-flow" ? `renders no Static.Flow "${s}" on a continuation sheet, so its continuation pages would lose its items. Render the FlowArea and its Flow on every sheet.` : `lays the FlowArea of "${s}" out at zero height on a continuation sheet. Give it a measurable height there too.`))), w === "missing-continuation-flow") E(w), C?.clear();
			else if (b ??= w ?? null, C?.measured(S, b), E(b), S.signature !== d.current) {
				o?.registerMeasurement?.(S, c), d.current = S.signature, l.current = S.flowId;
				try {
					i?.(S);
				} catch (e) {
					console.error("[uhuu-components] FlowArea onFlowMeasurement threw:", e);
				}
			}
		}
		let k = se(t, {
			begin: () => C?.begin() ?? (() => {}),
			onReady: () => S()
		});
		typeof ResizeObserver < "u" && (b = new ResizeObserver(() => S()), b.observe(e)), T(), S();
		let A = new MutationObserver((t) => {
			k.sync(), S(t.some((t) => e.contains(t.target)));
		});
		return A.observe(t, {
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
				"data-uhuu-flow-text",
				"data-uhuu-flow-text-unsplittable"
			],
			characterData: !0,
			childList: !0,
			subtree: !0
		}), () => {
			r !== null && (r(), r = null, _?.()), b?.disconnect(), A.disconnect(), k.disconnect(), C?.dispose();
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
function Ot({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s, measureContinuation: c }) {
	return /* @__PURE__ */ v("div", {
		className: `uhuu-flow-page ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ _(Dt, {
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
function kt(e) {
	if (typeof e == "string") return e ? {
		key: e,
		repeatHeader: !0
	} : void 0;
	if (e?.key) return {
		key: e.key,
		repeatHeader: e.repeatHeader !== !1
	};
}
function At(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function jt(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
var Mt = /* @__PURE__ */ new Set();
function Nt(t) {
	return t == null || typeof t == "boolean" ? "nothing" : Array.isArray(t) ? "several nodes" : e.isValidElement(t) ? "a fragment" : "text";
}
function Pt(t, n, r) {
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
	return U() && !Mt.has(i) && (Mt.add(i), console.warn(`[uhuu-components] Static.Flow "${r.flowId}" asChild: ${r.source} returned ${Nt(t)}. asChild needs exactly one element to carry the flow's attributes, so it renders in a wrapper <div> instead.`)), null;
}
function Ft(e) {
	return e.part === 0 ? "first" : e.part === e.parts - 1 ? "last" : "middle";
}
function It(e, t) {
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
function Lt(e) {
	return e == null || e === !1 ? e : /* @__PURE__ */ _(nt.Provider, {
		value: null,
		children: e
	});
}
function Rt({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p, asChild: m = !1, as: h = "div" }) {
	let g = e.useContext(dt), y = e.useContext(nt), b = h, x = g?.chunksByFlowId?.[t], S = g?.mode === "visible" && x ? x[g.pageIndex] : void 0, C = g?.mode === "visible" ? g.pageIndex : 0, w = g?.mode === "visible" && x ? x.length : 1, T = S?.unplaceable, E = T ? p?.(T, {
		flowId: t,
		pageIndex: C,
		pageCount: w
	}) : void 0, D = !!(T && E == null), O = g?.copy === "continuation" ? [] : g?.mode === "visible" && x ? S?.indexes ?? [] : g?.mode === "visible" && g.pageIndex > 0 ? [] : n.map((e, t) => t), k = (D ? [.../* @__PURE__ */ new Set([...O, T.index])].sort((e, t) => e - t) : O).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), A = n.map((e, t) => kt(c?.(e, t))), j = A.map((e) => e?.key), M = At(k), N = l ? jt(S?.groupHeaders) : void 0;
	return e.useEffect(() => {
		if (!U() || !o || !Object.keys(o).length || !n.length) return;
		let e = `${t}:${Object.keys(o).join("|")}`;
		mt.has(e) || n.some((e, t) => !!(s?.(e, t) ?? ht(e))) || (mt.add(e), console.warn(`[uhuu-components] Static.Flow "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		o,
		s
	]), /* @__PURE__ */ v(b, {
		className: u,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-as-child": m ? "true" : void 0,
		"data-uhuu-flow-item-count": m && g?.mode !== "visible" ? k.length : void 0,
		children: [T && E != null && (m && Pt(E, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": T.key
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ _("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": T.key,
			children: E
		})), k.map((c) => {
			let u = n[c];
			if (u === void 0) return null;
			let p = r(u, c), h = A[c], g = _e({
				itemIndex: c,
				fragmentIndexes: k,
				fragmentIndex: M.get(c) ?? -1,
				groupKeys: j,
				pageIndex: C,
				pageCount: w,
				itemCount: n.length
			}), b = S?.splits?.[c], x = {
				...g,
				flowId: t,
				itemKey: p,
				item: u,
				...b ? It(b, g) : {}
			}, E = s?.(u, c) ?? ht(u), O = gt(E ? o?.[E] : void 0, a?.(u, c)), P = typeof d == "function" ? d(u, c) : d, F = !!(h && N?.get(c)?.has(h.key)), I = !!(h && l && (F || !N && x.isFirstInGroupOnPage && (x.isFirstInGroup || h.repeatHeader !== !1))), L = typeof f == "function" ? h ? f(h, x) : void 0 : f, R = D && c === T?.index, ee = R ? pt(T) : void 0, z = I && h ? l?.(h, x) : void 0, B = {
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": h?.key
			}, V = i(u, c, x), te = {
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-key": String(p),
				"data-uhuu-flow-index": c,
				"data-uhuu-flow-break-before": O.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": O.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": Re(O.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": O.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": O.groupKey,
				"data-uhuu-flow-header-group-key": h?.key,
				"data-uhuu-flow-header-repeat": h ? h.repeatHeader === !1 ? "false" : "true" : void 0,
				"data-uhuu-flow-unplaceable": R ? "true" : void 0,
				"data-uhuu-flow-unplaceable-key": R ? T.key : void 0,
				"data-uhuu-flow-orphans": Ie(O.orphans),
				"data-uhuu-flow-widows": Ie(O.widows),
				"data-uhuu-flow-split": b ? Ft(b) : void 0
			}, ne = I && h ? m && Pt(z, {
				className: L,
				...B
			}, {
				flowId: t,
				source: "renderGroupHeader"
			}) || /* @__PURE__ */ _("div", {
				className: L,
				style: { display: "flow-root" },
				...B,
				children: z
			}) : null, H = m && Pt(V, {
				className: P,
				...te
			}, {
				flowId: t,
				source: "renderItem",
				forcedStyle: ee
			}) || /* @__PURE__ */ _("div", {
				className: P,
				style: {
					display: "flow-root",
					...ee
				},
				...te,
				children: V
			});
			return /* @__PURE__ */ v(e.Fragment, { children: [y ? Lt(ne) : ne, /* @__PURE__ */ _(nt.Provider, {
				value: b ?? null,
				children: H
			})] }, p);
		})]
	});
}
function zt({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: g, getColumnItemProps: y, asChild: b = !1, as: x = "div" }) {
	Ee({
		nodes: r,
		itemCount: n.length
	});
	let S = e.useContext(dt), C = e.useContext(nt), w = x, T = S?.copy === "continuation", E = S?.chunksByFlowId?.[t], D = S?.mode === "visible" && E ? E[S.pageIndex] : void 0, O = S?.mode !== "visible", k = S?.mode === "visible" ? S.pageIndex : 0, A = S?.mode === "visible" && E ? E.length : 1, j = n.map((e, t) => kt(l?.(e, t))), M = j.map((e) => e?.key), N = { flowId: t };
	e.useEffect(() => {
		if (!U() || !s || !Object.keys(s).length || !n.length) return;
		let e = `${t}:columns:${Object.keys(s).join("|")}`;
		mt.has(e) || n.some((e, t) => !!(c?.(e, t) ?? ht(e))) || (mt.add(e), console.warn(`[uhuu-components] Static.FlowColumns "${t}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		s,
		c
	]);
	let P = (e, n) => {
		if (!e) return null;
		let r = m?.(e, {
			flowId: t,
			pageIndex: k,
			pageCount: A
		});
		return r == null ? n() : b && Pt(r, {
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
	}, F = (r, l, d, m = !1, h) => {
		let g = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), y = At(g), x = h ? At(h) : void 0, S = u ? jt(l?.groupHeaders) : void 0;
		return g.map((r) => {
			let w = n[r];
			if (w === void 0) return null;
			let T = i(w, r), E = j[r], D = y.get(r) ?? -1, O = x?.get(r) ?? -1, N = {
				..._e({
					itemIndex: r,
					fragmentIndexes: g,
					fragmentIndex: D,
					groupKeys: M,
					pageIndex: k,
					pageCount: A,
					itemCount: n.length,
					previousSourceIndex: l?.previousSourceIndex ?? (O > 0 ? h?.[O - 1] : void 0)
				}),
				flowId: t,
				itemKey: T,
				item: w
			}, P = c?.(w, r) ?? ht(w), F = gt(P ? s?.[P] : void 0, o?.(w, r)), I = typeof f == "function" ? f(w, r) : f, L = d?.(r), R = !!(E && S?.get(r)?.has(E.key)), ee = !!(E && u && (R || !S && N.isFirstInGroupOnPage && (N.isFirstInGroup || E.repeatHeader !== !1))), z = typeof p == "function" ? E ? p(E, N) : void 0 : p, B = l?.unplaceable?.index === r ? l.unplaceable : void 0, V = B ? pt(B) : void 0, te = [I, L?.className].filter(Boolean).join(" "), ne = ee && E ? u?.(E, N) : void 0, H = {
				"data-uhuu-flow-group-header": "true",
				"data-uhuu-flow-header-group-key": E?.key
			}, re = a(w, r, N), ie = {
				"data-uhuu-flow-item": "true",
				"data-uhuu-flow-layout-node": m ? "item" : void 0,
				"data-uhuu-flow-key": String(T),
				"data-uhuu-flow-index": r,
				"data-uhuu-flow-unplaceable": B ? "true" : void 0,
				"data-uhuu-flow-unplaceable-key": B?.key,
				"data-uhuu-flow-column-id": B?.columnId,
				"data-uhuu-flow-break-before": F.breakBefore ? "true" : void 0,
				"data-uhuu-flow-break-after": F.breakAfter ? "true" : void 0,
				"data-uhuu-flow-keep-with-next": Re(F.keepWithNext),
				"data-uhuu-flow-avoid-break-inside": F.avoidBreakInside ? "true" : void 0,
				"data-uhuu-flow-group-key": F.groupKey,
				"data-uhuu-flow-header-group-key": E?.key,
				"data-uhuu-flow-header-repeat": E ? E.repeatHeader === !1 ? "false" : "true" : void 0
			}, U = ee && E ? b && Pt(ne, {
				className: z,
				...H
			}, {
				flowId: t,
				source: "renderGroupHeader"
			}) || /* @__PURE__ */ _("div", {
				className: z,
				style: { display: "flow-root" },
				...H,
				children: ne
			}) : null, ae = b && Pt(re, {
				className: te || void 0,
				...ie
			}, {
				flowId: t,
				source: "renderItem",
				baseStyle: L?.style,
				forcedStyle: V
			}) || /* @__PURE__ */ _("div", {
				className: te,
				style: {
					display: "flow-root",
					...L?.style,
					...V
				},
				...ie,
				children: re
			});
			return /* @__PURE__ */ v(e.Fragment, { children: [C ? Lt(U) : U, C ? Lt(ae) : ae] }, T);
		});
	}, I = new Map(r.filter((e) => e.kind === "columns").map((e) => [e.id, e])), L = T ? [] : O ? r : D?.layout ?? [];
	return /* @__PURE__ */ _(w, {
		className: d,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-layout": "columns",
		"data-uhuu-flow-as-child": b ? "true" : void 0,
		"data-uhuu-flow-item-count": b && O ? T ? 0 : n.length : void 0,
		children: L.map((t, n) => {
			if (t.kind === "item") return /* @__PURE__ */ _(e.Fragment, { children: F([t.index], void 0, void 0, !0) }, `item:${t.index}:${n}`);
			if (t.kind === "items") return /* @__PURE__ */ v(e.Fragment, { children: [P(t.chunk.unplaceable, () => F([t.chunk.unplaceable.index], t.chunk, void 0, !0)), F(t.chunk.indexes, t.chunk, void 0, !0)] }, `items:${n}`);
			let r = O ? t : I.get(t.id);
			if (!r) return null;
			let i = new Map(r.columns.map((e) => [e.id, e])), a = O ? r.columns.map((e) => ({ id: e.id })) : t.columns, o = h?.(r, N);
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
					let n = g?.(r, t, N), a = e.chunk?.indexes ?? t.indexes;
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
						children: [P(e.chunk?.unplaceable, () => F([e.chunk.unplaceable.index], e.chunk, (e) => y?.(r, t, e, N), !1, t.indexes)), F(a, e.chunk, (e) => y?.(r, t, e, N), !1, t.indexes)]
					}, t.id);
				})
			}, `columns:${r.id}:${n}`);
		})
	});
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
function Bt(e) {
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
var Vt = "uhuu-text-empty", Ht = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), Ut = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && Ht.has(e.type), Wt = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(Wt) : !1, Gt = (e) => {
	let t = Ut(e.dialog) && Wt(e.children) ? [e.className, Vt].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ _("div", {
		className: t,
		...Bt(e),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function Kt(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function qt(e, t, n, r = "") {
	return `${r}${e}-${n}-${Kt(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var Jt = /\s*(page-break-before|break-before)\s*/i, Yt = 1, Xt = 3, Zt = 8;
function Qt(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $t(e) {
	return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function en(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === Zt) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === Xt) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: Qt(t),
				text: t
			});
		} else if (e.nodeType === Yt) {
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
function tn(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: qt(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function nn(e = "", t = {}) {
	let n = t.breakComment ?? Jt, r = (t.parseHtml ?? ((e) => en(e, n)))(e);
	return tn(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var rn = {
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
}, an = !1;
function on(t) {
	return e.useMemo(() => t === !1 ? (U() && !an && (an = !0, console.warn("[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : $t, [t]);
}
function sn({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, measureContinuation: c, id: l = "flow-document", idPrefix: u, flowClassName: d = "uhuu-flow-document", itemClassName: f, metaDefaults: p, getItemMeta: m, renderItem: h, sanitize: g, editable: v, parseHtml: y }) {
	let b = e.useMemo(() => nn(t, {
		idPrefix: u,
		parseHtml: y
	}), [
		t,
		u,
		y
	]), x = e.useMemo(() => ({
		...rn,
		...p ?? {}
	}), [p]), S = on(g), C = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...m?.(e, t) ?? {}
	}), [m]), w = e.useCallback((e, t) => h ? h(e, t) : /* @__PURE__ */ _("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: S(e.html) }
	}), [h, S]), T = /* @__PURE__ */ _(Rt, {
		id: l,
		items: b,
		getKey: (e) => e.id,
		className: d,
		itemClassName: f,
		metaDefaults: x,
		getItemMeta: C,
		renderItem: w
	});
	return /* @__PURE__ */ _(Ot, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		measureContinuation: c,
		header: n,
		footer: r,
		children: v ? /* @__PURE__ */ _(Gt, {
			dialog: v,
			className: !b.length && Ut(v) ? Vt : void 0,
			children: T
		}) : T
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var cn = /<!--\s*(page-break-before|break-before)\s*-->/i, ln = /^\s*\[[^\]]+\]:\s+\S+/, un = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function dn(e) {
	return e.trim() === "";
}
function fn(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function pn(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function mn(e) {
	return /^(```|~~~)/.test(e.trim());
}
function hn(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function gn(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function _n(e) {
	return cn.test(e.trim());
}
function vn(e) {
	return ln.test(e);
}
function yn(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function bn(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function xn(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? yn(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = bn(o, a);
		e.push({
			id: qt(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function Sn(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) vn(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (dn(i[o])) {
			o += 1;
			continue;
		}
		if (_n(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (mn(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (fn(i[o])) n = "heading", o += 1;
		else if (hn(i[o])) n = "rule", o += 1;
		else if (un.test(i[o])) n = "image", o += 1;
		else if (gn(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !dn(i[o]);) o += 1;
		else if (pn(i[o])) for (n = "list", o += 1; o < i.length && !dn(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !dn(i[o]) && !fn(i[o]) && !mn(i[o]) && !hn(i[o]) && !un.test(i[o]) && !gn(i, o) && !pn(i[o]) && !i[o].trim().startsWith(">") && !_n(i[o]);) o += 1;
		xn(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region src/uhuu/pagination-static/cover-spread.tsx
var Cn = (e) => `${Number(e.toFixed(4))}mm`;
function wn(e, t) {
	let n = p(!1);
	l(() => {
		t || n.current || !U() || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var Tn = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, h) {
	let y = c(L), b = o === void 0 ? y?.page?.binding ?? null : k(o), x = s ?? y?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	wn(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ _(ie, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ _(ie, {
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
					"data-label": `spine ${Cn(b.spine)}${D ? " · blank" : ""}`
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
					"data-label": `glue ${Cn(b.glue)}`
				})
			}, e))
		]
	});
}), En = typeof window > "u" ? l : u;
function Dn(e = !0, t) {
	En(() => {
		if (!e) return;
		let n = t ? `usePaginationHold(${JSON.stringify(t)})` : "usePaginationHold()";
		return V.hold({
			label: n,
			waitMs: oe
		});
	}, [e, t]);
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function On(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = On(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function kn() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = On(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var An = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, jn = (e, t) => ({
	classGroupId: e,
	validator: t
}), Mn = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Nn = "-", Pn = [], Fn = "arbitrary..", In = (e) => {
	let t = zn(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Rn(e);
			let n = e.split(Nn);
			return Ln(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? An(i, t) : t : i || Pn;
			}
			return n[e] || Pn;
		}
	};
}, Ln = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Ln(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Nn) : e.slice(t).join(Nn), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Rn = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Fn + r : void 0;
})(), zn = (e) => {
	let { theme: t, classGroups: n } = e;
	return Bn(n, t);
}, Bn = (e, t) => {
	let n = Mn();
	for (let r in e) {
		let i = e[r];
		Vn(i, n, r, t);
	}
	return n;
}, Vn = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Hn(i, t, n, r);
	}
}, Hn = (e, t, n, r) => {
	typeof e == "string" ? Un(e, t, n) : typeof e == "function" ? Wn(e, t, n, r) : Gn(e, t, n, r);
}, Un = (e, t, n) => {
	let r = e === "" ? t : Kn(t, e);
	r.classGroupId = n;
}, Wn = (e, t, n, r) => {
	qn(e) ? Vn(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(jn(n, e)));
}, Gn = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Vn(o, Kn(t, a), n, r);
	}
}, Kn = (e, t) => {
	let n = e, r = t.split(Nn), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Mn(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, qn = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Jn = (e) => {
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
}, Yn = "!", Xn = ":", Zn = [], Qn = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), $n = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Xn) {
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
		s.endsWith(Yn) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Yn) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Qn(t, l, c, u);
	};
	if (t) {
		let e = t + Xn, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Qn(Zn, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, er = (e) => {
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
}, tr = (e) => ({
	cache: Jn(e.cacheSize),
	parseClassName: $n(e),
	sortModifiers: er(e),
	postfixLookupClassGroupIds: nr(e),
	...In(e)
}), nr = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, rr = /\s+/, ir = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(rr), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Yn : _, y = v + g;
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
}, ar = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = or(n)) && (i && (i += " "), i += r);
	return i;
}, or = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = or(e[r])) && (n && (n += " "), n += t);
	return n;
}, sr = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = tr(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = ir(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ar(...e));
}, cr = [], lr = (e) => {
	let t = (t) => t[e] || cr;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, ur = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, dr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _r = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vr = (e) => fr.test(e), W = (e) => !!e && !Number.isNaN(Number(e)), yr = (e) => !!e && Number.isInteger(Number(e)), br = (e) => e.endsWith("%") && W(e.slice(0, -1)), xr = (e) => pr.test(e), Sr = () => !0, Cr = (e) => mr.test(e) && !hr.test(e), wr = () => !1, Tr = (e) => gr.test(e), Er = (e) => _r.test(e), Dr = (e) => !G(e) && !K(e), Or = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), kr = (e) => Wr(e, Jr, wr), G = (e) => ur.test(e), Ar = (e) => Wr(e, Yr, Cr), jr = (e) => Wr(e, Xr, W), Mr = (e) => Wr(e, Qr, Sr), Nr = (e) => Wr(e, Zr, wr), Pr = (e) => Wr(e, Kr, wr), Fr = (e) => Wr(e, qr, Er), Ir = (e) => Wr(e, $r, Tr), K = (e) => dr.test(e), Lr = (e) => Gr(e, Yr), Rr = (e) => Gr(e, Zr), zr = (e) => Gr(e, Kr), Br = (e) => Gr(e, Jr), Vr = (e) => Gr(e, qr), Hr = (e) => Gr(e, $r, !0), Ur = (e) => Gr(e, Qr, !0), Wr = (e, t, n) => {
	let r = ur.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Gr = (e, t, n = !1) => {
	let r = dr.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Kr = (e) => e === "position" || e === "percentage", qr = (e) => e === "image" || e === "url", Jr = (e) => e === "length" || e === "size" || e === "bg-size", Yr = (e) => e === "length", Xr = (e) => e === "number", Zr = (e) => e === "family-name", Qr = (e) => e === "number" || e === "weight", $r = (e) => e === "shadow", ei = () => {
	let e = lr("color"), t = lr("font"), n = lr("text"), r = lr("font-weight"), i = lr("tracking"), a = lr("leading"), o = lr("breakpoint"), s = lr("container"), c = lr("spacing"), l = lr("radius"), u = lr("shadow"), d = lr("inset-shadow"), f = lr("text-shadow"), p = lr("drop-shadow"), m = lr("blur"), h = lr("perspective"), g = lr("aspect"), _ = lr("ease"), v = lr("animate"), y = () => [
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
		vr,
		"full",
		"auto",
		...w()
	], E = () => [
		yr,
		"none",
		"subgrid",
		K,
		G
	], D = () => [
		"auto",
		{ span: [
			"full",
			yr,
			K,
			G
		] },
		yr,
		K,
		G
	], O = () => [
		yr,
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
		vr,
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
		vr,
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
		vr,
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
		zr,
		Pr,
		{ position: [K, G] }
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
		Br,
		kr,
		{ size: [K, G] }
	], z = () => [
		br,
		Lr,
		Ar
	], B = () => [
		"",
		"none",
		"full",
		l,
		K,
		G
	], V = () => [
		"",
		W,
		Lr,
		Ar
	], te = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ne = () => [
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
	], H = () => [
		W,
		br,
		zr,
		Pr
	], re = () => [
		"",
		"none",
		m,
		K,
		G
	], ie = () => [
		"none",
		W,
		K,
		G
	], U = () => [
		"none",
		W,
		K,
		G
	], ae = () => [
		W,
		K,
		G
	], oe = () => [
		vr,
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
			blur: [xr],
			breakpoint: [xr],
			color: [Sr],
			container: [xr],
			"drop-shadow": [xr],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Dr],
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
			"inset-shadow": [xr],
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
			radius: [xr],
			shadow: [xr],
			spacing: ["px", W],
			text: [xr],
			"text-shadow": [xr],
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
				vr,
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
			"container-named": [Or],
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
				yr,
				"auto",
				K,
				G
			] }],
			basis: [{ basis: [
				vr,
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
				vr,
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
				yr,
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
				Lr,
				Ar
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ur,
				Mr
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
				br,
				G
			] }],
			"font-family": [{ font: [
				Rr,
				Nr,
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
				jr
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
			"text-decoration-style": [{ decoration: [...te(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				W,
				"from-font",
				"auto",
				K,
				Ar
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
				yr,
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
						yr,
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
						yr,
						K,
						G
					]
				},
				Vr,
				Fr
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: z() }],
			"gradient-via-pos": [{ via: z() }],
			"gradient-to-pos": [{ to: z() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: B() }],
			"rounded-s": [{ "rounded-s": B() }],
			"rounded-e": [{ "rounded-e": B() }],
			"rounded-t": [{ "rounded-t": B() }],
			"rounded-r": [{ "rounded-r": B() }],
			"rounded-b": [{ "rounded-b": B() }],
			"rounded-l": [{ "rounded-l": B() }],
			"rounded-ss": [{ "rounded-ss": B() }],
			"rounded-se": [{ "rounded-se": B() }],
			"rounded-ee": [{ "rounded-ee": B() }],
			"rounded-es": [{ "rounded-es": B() }],
			"rounded-tl": [{ "rounded-tl": B() }],
			"rounded-tr": [{ "rounded-tr": B() }],
			"rounded-br": [{ "rounded-br": B() }],
			"rounded-bl": [{ "rounded-bl": B() }],
			"border-w": [{ border: V() }],
			"border-w-x": [{ "border-x": V() }],
			"border-w-y": [{ "border-y": V() }],
			"border-w-s": [{ "border-s": V() }],
			"border-w-e": [{ "border-e": V() }],
			"border-w-bs": [{ "border-bs": V() }],
			"border-w-be": [{ "border-be": V() }],
			"border-w-t": [{ "border-t": V() }],
			"border-w-r": [{ "border-r": V() }],
			"border-w-b": [{ "border-b": V() }],
			"border-w-l": [{ "border-l": V() }],
			"divide-x": [{ "divide-x": V() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": V() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...te(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...te(),
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
				...te(),
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
				Lr,
				Ar
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				Hr,
				Ir
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Hr,
				Ir
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: V() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [W, Ar] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": V() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Hr,
				Ir
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				W,
				K,
				G
			] }],
			"mix-blend": [{ "mix-blend": [
				...ne(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ne() }],
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
			"mask-image-linear-from-pos": [{ "mask-linear-from": H() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": H() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": H() }],
			"mask-image-t-to-pos": [{ "mask-t-to": H() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": H() }],
			"mask-image-r-to-pos": [{ "mask-r-to": H() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": H() }],
			"mask-image-b-to-pos": [{ "mask-b-to": H() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": H() }],
			"mask-image-l-to-pos": [{ "mask-l-to": H() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": H() }],
			"mask-image-x-to-pos": [{ "mask-x-to": H() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": H() }],
			"mask-image-y-to-pos": [{ "mask-y-to": H() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [K, G] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": H() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": H() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [W] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": H() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": H() }],
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
				K,
				G
			] }],
			filter: [{ filter: [
				"",
				"none",
				K,
				G
			] }],
			blur: [{ blur: re() }],
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
				Hr,
				Ir
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
			"backdrop-blur": [{ "backdrop-blur": re() }],
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
			rotate: [{ rotate: ie() }],
			"rotate-x": [{ "rotate-x": ie() }],
			"rotate-y": [{ "rotate-y": ie() }],
			"rotate-z": [{ "rotate-z": ie() }],
			scale: [{ scale: U() }],
			"scale-x": [{ "scale-x": U() }],
			"scale-y": [{ "scale-y": U() }],
			"scale-z": [{ "scale-z": U() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ae() }],
			"skew-x": [{ "skew-x": ae() }],
			"skew-y": [{ "skew-y": ae() }],
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
			translate: [{ translate: oe() }],
			"translate-x": [{ "translate-x": oe() }],
			"translate-y": [{ "translate-y": oe() }],
			"translate-z": [{ "translate-z": oe() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				yr,
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
				Lr,
				Ar,
				jr
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
}, ti = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (ni(e, "cacheSize", t), ni(e, "prefix", n), ni(e, "experimentalParseClassName", r), ri(e.theme, a.theme), ri(e.classGroups, a.classGroups), ri(e.conflictingClassGroups, a.conflictingClassGroups), ri(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ni(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), ni(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), ii(e.theme, i.theme), ii(e.classGroups, i.classGroups), ii(e.conflictingClassGroups, i.conflictingClassGroups), ii(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ai(e, i, "postfixLookupClassGroups"), ai(e, i, "orderSensitiveModifiers"), e), ni = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, ri = (e, t) => {
	if (t) for (let n in t) ni(e, n, t[n]);
}, ii = (e, t) => {
	if (t) for (let n in t) ai(e, t, n);
}, ai = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, oi = (e, ...t) => typeof e == "function" ? sr(ei, e, ...t) : sr(() => ti(ei(), e), ...t), si = /*#__PURE__*/ sr(ei), ci = oi({ prefix: "uhuu" });
function li(...e) {
	return ci(kn(e));
}
function ui(...e) {
	return si(kn(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var di = ({ onError: e }) => (t) => {
	e?.(t);
}, fi = (e, t) => e && e > 0 ? e + t : 0, pi = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, mi = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = pi(e, r, n, i), s = fi(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, fi(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
}, hi = (e) => {
	let t = c(L), n = di({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, g = (e) => `${e}mm`, y = () => pi({
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
			...Bt(e),
			children: [/* @__PURE__ */ _("img", {
				className: ui("cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}, gi = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _i = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), vi = (e) => {
	let t = _i(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, yi = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), bi = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, xi = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Si = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...xi,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: yi("lucide", a),
	...!o && !bi(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), Ci = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(Si, {
		ref: a,
		iconNode: t,
		className: yi(`lucide-${gi(vi(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = vi(e), n;
}, wi = Ci("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), Ti = Ci("arrow-up-down", [
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
]), Ei = Ci("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), Di = Ci("book-dashed", [
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
]), Oi = Ci("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ki = Ci("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Ai = Ci("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), ji = Ci("clipboard-list", [
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
]), Mi = Ci("copy", [["rect", {
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
}]]), Ni = Ci("ellipsis", [
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
]), Pi = Ci("grip-vertical", [
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
]), Fi = Ci("lock", [["rect", {
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
}]]), Ii = Ci("maximize", [
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
]), Li = Ci("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Ri = Ci("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), zi = Ci("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), Bi = Ci("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), Vi = Ci("trash-2", [
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
]), Hi = Ci("unfold-horizontal", [
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
]), Ui = Ci("unfold-vertical", [
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
]), Wi = Ci("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), Gi = Ci("zoom-in", [
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
]), Ki = Ci("zoom-out", [
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
]), qi = e.createContext({ portalContainer: null });
function Ji() {
	return e.useContext(qi);
}
function Yi({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ _(qi.Provider, {
		value: { portalContainer: n },
		children: t
	});
}
var Xi = {
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
}, Zi = {
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
}, Qi = {
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
}, $i = {
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
}, ea = ["lang", "locale"];
function ta(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function na(e, t) {
	for (let n of e ?? []) {
		let e = ta(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function ra(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return na([
		e?.locale,
		e?.host,
		...ea.map((e) => n.get(e)),
		e?.documentLang
	]) ?? na(e?.navigatorLanguages ?? [], t) ?? "en";
}
function ia(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = ta(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
function aa(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function oa(e, t) {
	if (!aa(t)) return e;
	let n = { ...aa(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = aa(r) && aa(n[e]) ? oa(n[e], r) : r);
	return n;
}
function sa(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = ta(e);
		t && aa(r) && (n[t] = oa(n[t], r));
	}
	return n;
}
function ca(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!aa(e)) return String(e);
	let r = [
		t,
		ta(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
function la(e, t) {
	return e == null || typeof e != "string" ? !0 : t == null ? !1 : typeof t == "string" ? e === t : Object.values(t).includes(e);
}
var ua = /* @__PURE__ */ new Map();
function da(e, t) {
	if (!ua.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		ua.set(e, t);
	}
	let n = ua.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function fa(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!aa(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function pa(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function ma({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = ta(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(aa);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${da(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = fa(e, n);
			if (r !== void 0) return pa(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var ha = [
	"de",
	"fr",
	"it",
	"en"
], ga = {
	en: Xi,
	de: Zi,
	fr: Qi,
	it: $i
}, _a = r(null);
function va(e) {
	return [...ha, ...Object.keys(e ?? {}).map((e) => ta(e) ?? e)];
}
function ya(e, t) {
	let n = va(e);
	if (typeof window > "u") return ra({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return ra({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function ba(e, t) {
	return {
		locale: e,
		t: ma({
			locale: e,
			catalogs: sa(ga, t),
			fallbackLocale: "en"
		}),
		localize: (t) => ca(t, e, "en")
	};
}
var xa = null, Sa = !1, Ca = /* @__PURE__ */ new Set();
function wa() {
	if (Sa || typeof window > "u") return;
	let e = window.$uhuu;
	typeof e?.listen == "function" && (Sa = !0, ia(e, (e) => {
		e !== xa && (xa = e, Ca.forEach((e) => e()));
	}));
}
wa();
function Ta(e) {
	return wa(), Ca.add(e), () => {
		Ca.delete(e);
	};
}
var Ea = () => xa;
function Da() {
	return h(Ta, Ea, Ea);
}
var Oa = null;
function ka() {
	return (!Oa || Oa.key !== xa) && (Oa = {
		key: xa,
		runtime: ba(xa ?? ya())
	}), Oa.runtime;
}
function Aa({ locale: e, translations: t }) {
	let n = Da(), r = d(() => ta(e) ?? n ?? ya(t), [
		e,
		n,
		t
	]);
	return d(() => ba(r, t), [r, t]);
}
function ja({ value: e, children: t }) {
	return /* @__PURE__ */ _(_a.Provider, {
		value: e,
		children: t
	});
}
function Ma() {
	let e = c(_a);
	return Da(), e ?? ka();
}
//#endregion
//#region src/uhuu/appearance/appearance-core.js
var Na = "light", Pa = ["light", "dark"], Fa = "appearance", Ia = "data-uhuu-appearance", La = "appearance";
function Ra(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return Pa.includes(t) ? t : null;
}
function za(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return Ra(new URLSearchParams(e).get(Fa));
	} catch {
		return null;
	}
}
function Ba(e) {
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
	return !t || typeof t != "object" ? null : t.action === "shaked" || t.action === "appearance" ? Ra(t.data?.appearance) : null;
}
function Va(e) {
	return e?.renderer ? Na : Ra(e?.explicit) ?? Ra(e?.host) ?? za(e?.search) ?? "light";
}
function Ha(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = ["loaded", La].map((n) => e.listen(n, (e) => {
		let n = Ra(e?.appearance);
		n && t(n);
	}));
	return () => n.forEach((e) => typeof e == "function" && e());
}
//#endregion
//#region src/uhuu/appearance/appearance-runtime.ts
var Ua = null, Wa = [], Ga = !1, Ka = !1, qa = /* @__PURE__ */ new Set();
function Ja() {
	return typeof window > "u" ? null : window;
}
function Ya() {
	let e = Ja();
	return {
		host: Ua,
		search: e?.location?.search,
		renderer: !!e?.$uhuu_renderer
	};
}
function Xa() {
	return Va(Ya());
}
function Za() {
	return Va({
		...Ya(),
		explicit: Wa.at(-1)
	});
}
function Qa() {
	let e = Ja()?.document?.documentElement;
	if (typeof e?.setAttribute != "function") return;
	let t = Za();
	e.getAttribute?.("data-uhuu-appearance") !== t && e.setAttribute(Ia, t);
}
function $a() {
	Qa(), qa.forEach((e) => e());
}
function eo(e) {
	e !== Ua && (Ua = e, $a());
}
function to() {
	let e = Ja();
	e && (!Ga && typeof e.$uhuu?.listen == "function" && (Ga = !0, Ha(e.$uhuu, eo)), !Ka && typeof e.addEventListener == "function" && (Ka = !0, e.addEventListener("message", (t) => {
		let n = e.parent;
		if (!n || n === e || t.source !== n) return;
		let r = Ba(t.data);
		r && eo(r);
	})));
}
to(), Qa();
function no(e) {
	return to(), Qa(), qa.add(e), () => {
		qa.delete(e);
	};
}
var ro = typeof window > "u" ? l : u;
function io(e) {
	let t = h(no, Xa, Xa), n = Ra(e);
	return ro(() => {
		if (n) return Wa.push(n), $a(), () => {
			let e = Wa.lastIndexOf(n);
			e !== -1 && Wa.splice(e, 1), $a();
		};
	}, [n]), n && !Ya().renderer ? n : t;
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var ao = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
});
function oo() {
	let e = c(ao), { locale: t } = Ma(), n = io(), r = e.appearance ?? n;
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
function so() {
	let { interactive: e } = oo();
	return !e;
}
function co() {
	return typeof window < "u" && !!window?.$uhuu_renderer;
}
function lo() {
	return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function uo({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i, appearance: a }) {
	let o = co(), s = n || lo(), [c, l] = m(!o && t), u = Aa({
		locale: r,
		translations: i
	}), f = io(a), p = d(() => ({
		interactive: c,
		setInteractive: l,
		enableDevTools: s,
		appearance: f
	}), [
		c,
		s,
		f
	]);
	return /* @__PURE__ */ _(ao.Provider, {
		value: p,
		children: /* @__PURE__ */ _(ja, {
			value: u,
			children: /* @__PURE__ */ _(Yi, { children: /* @__PURE__ */ _("div", {
				"data-uhuu-interactive": c ? "" : void 0,
				style: { display: "contents" },
				children: e
			}) })
		})
	});
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var fo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, po = kn, mo = (e, t) => (n) => {
	if (t?.variants == null) return po(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = fo(t) || fo(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return po(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, ho = mo("uhuu:inline-flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:whitespace-nowrap uhuu:rounded-md uhuu:text-sm uhuu:font-medium uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50", {
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
}), go = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ _("button", {
	className: li(ho({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
go.displayName = "Button";
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var _o = Object.defineProperty, vo = (e, t) => _o(e, "name", {
	value: t,
	configurable: !0
}), yo = !!(typeof window < "u" && window.document && window.document.createElement);
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ vo(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
vo(q, "composeEventHandlers");
function bo(e) {
	if (!yo) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
vo(bo, "getOwnerWindow");
function xo(e) {
	if (!yo) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
vo(xo, "getOwnerDocument");
function So(e, t = !1) {
	let { activeElement: n } = xo(e);
	if (!n?.nodeName) return null;
	if (Co(n) && n.contentDocument) return So(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = xo(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
vo(So, "getActiveElement");
function Co(e) {
	return e.tagName === "IFRAME";
}
vo(Co, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var wo = Object.defineProperty, To = (e, t) => wo(e, "name", {
	value: t,
	configurable: !0
});
function Eo(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
To(Eo, "setRef");
function Do(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Eo(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Eo(e[t], null);
			}
		};
	};
}
To(Do, "composeRefs");
function J(...t) {
	return e.useCallback(Do(...t), t);
}
To(J, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var Oo = Object.defineProperty, ko = (e, t) => Oo(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ao(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ ko((t) => {
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
	return ko(a, "useContext"), [i, a];
}
ko(Ao, "createContext");
// @__NO_SIDE_EFFECTS__
function jo(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ ko((n) => {
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
		return ko(c, "useContext"), [s, c];
	}
	ko(i, "createContext");
	let a = /* @__PURE__ */ ko(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ ko(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, Mo(a, ...n)];
}
ko(jo, "createContextScope");
function Mo(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ ko(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ ko(function(t) {
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
ko(Mo, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var No = globalThis?.document ? e.useLayoutEffect : () => {}, Po = Object.defineProperty, Fo = (e, t) => Po(e, "name", {
	value: t,
	configurable: !0
}), Io = e.useEffectEvent, Lo = e.useInsertionEffect;
function Ro(t) {
	if (typeof Io == "function") return Io(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Lo == "function" ? Lo(() => {
		n.current = t;
	}) : No(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Fo(Ro, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var zo = Object.defineProperty, Bo = (e, t) => zo(e, "name", {
	value: t,
	configurable: !0
}), Vo = e.useInsertionEffect || No;
function Ho({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ Bo(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = Uo({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = Wo(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
Bo(Ho, "useControllableState");
function Uo({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return Vo(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
Bo(Uo, "useUncontrolledState");
function Wo(e) {
	return typeof e == "function";
}
Bo(Wo, "isFunction");
var Go = Symbol("RADIX:SYNC_STATE");
function Ko(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = Ro(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === Go) return {
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
			type: Go,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
Bo(Ko, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var qo = Object.defineProperty, Jo = (e, t) => qo(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Yo(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		rs(i) && typeof cs == "function" && (i = cs(i._payload)), e.Children.forEach(i, (e) => {
			if (ts(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				rs(n) && typeof cs == "function" && (n = cs(n._payload)), o = Qo(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? es(o) : void 0, u = J(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? ss(t) : os(t));
			return i;
		}
		let d = $o(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
Jo(Yo, "createSlot");
var Xo = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Zo(e) {
	let t = /* @__PURE__ */ Jo((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Xo, t;
}
Jo(Zo, "createSlottable");
var Qo = /* @__PURE__ */ Jo((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function $o(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = as(a, i));
	}
	return {
		...e,
		...n
	};
}
Jo($o, "mergeProps");
function es(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Jo(es, "getElementRef");
function ts(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Xo;
}
Jo(ts, "isSlottable");
var ns = Symbol.for("react.lazy");
function rs(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === ns && "_payload" in e && is(e._payload);
}
Jo(rs, "isLazyComponent");
function is(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Jo(is, "isPromiseLike");
function as(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Jo(as, "concatAriaDescribedby");
var os = /* @__PURE__ */ Jo((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), ss = /* @__PURE__ */ Jo((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), cs = e.use, ls = Object.defineProperty, us = (e, t) => ls(e, "name", {
	value: t,
	configurable: !0
}), ds = [
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
	let r = /* @__PURE__ */ Yo(`Primitive.${n}`), i = e.forwardRef((e, t) => {
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
function fs(e, t) {
	e && y.flushSync(() => e.dispatchEvent(t));
}
us(fs, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var ps = Object.defineProperty, ms = (e, t) => ps(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function hs(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ jo(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ ms((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ _(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ Yo(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(c, n).collectionRef);
		return /* @__PURE__ */ _(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Yo(d), m = e.forwardRef((t, n) => {
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
	return ms(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
ms(hs, "createCollection");
var gs = /* @__PURE__ */ new WeakMap(), _s = class e extends Map {
	static {
		ms(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], gs.set(this, !0);
	}
	set(e, t) {
		return gs.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = bs(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = vs(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = vs(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return vs(this.#e, e);
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
function vs(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ys(e, t);
	return n === -1 ? void 0 : e[n];
}
ms(vs, "at");
function ys(e, t) {
	let n = e.length, r = bs(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
ms(ys, "toSafeIndex");
function bs(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ms(bs, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function xs(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ jo(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new _s(),
		setItemMap: /* @__PURE__ */ ms(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ ms(({ state: e, ...t }) => e ? /* @__PURE__ */ _(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ _(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ ms((e) => {
		let t = g();
		return /* @__PURE__ */ _(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ ms((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = J(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = Ts(() => {});
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ Yo(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(u, n).collectionRef);
		return /* @__PURE__ */ _(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ Yo(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = J(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Ss(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(ws) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(ws)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new _s(e)));
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
		return e.useState(new _s());
	}
	ms(g, "useInitCollection");
	function v(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return ms(v, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: v,
		useInitCollection: g
	}];
}
ms(xs, "createCollection");
function Ss(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
ms(Ss, "shallowEqual");
function Cs(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ms(Cs, "isElementPreceding");
function ws(e, t) {
	return !e[1].element || !t[1].element ? 0 : Cs(e[1].element, t[1].element) ? -1 : 1;
}
ms(ws, "sortByDocumentPosition");
function Ts(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
ms(Ts, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var Es = Object.defineProperty, Ds = (e, t) => Es(e, "name", {
	value: t,
	configurable: !0
}), Os = {
	LTR: "ltr",
	RTL: "rtl"
}, ks = e.createContext(void 0);
function As(t) {
	let n = e.useContext(ks);
	return t || n || Os.LTR;
}
Ds(As, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var js = Object.defineProperty, Ms = (e, t) => js(e, "name", {
	value: t,
	configurable: !0
});
function Ns(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Ms(Ns, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Ps = Object.defineProperty, Fs = (e, t) => Ps(e, "name", {
	value: t,
	configurable: !0
}), Is = "dismissableLayer.update", Ls = "dismissableLayer.pointerDownOutside", Rs = "dismissableLayer.focusOutside", zs, Bs = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Vs = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Fs(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(Bs), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = J(n, p), v = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? v.indexOf(y) : -1, x = f ? v.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = Ws((e) => {
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
	}), E = Gs((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === v.length - 1 : !1, O = Ns((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (zs = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Ks(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = zs));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Ks());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ Fs(() => h({}), "handleUpdate");
		return document.addEventListener(Is, e), () => document.removeEventListener(Is, e);
	}, []), /* @__PURE__ */ _(ds.div, {
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
function Hs() {
	let t = e.useContext(Bs), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
Fs(Hs, "useDismissableLayerSurface");
var Us = /* @__PURE__ */ Fs(() => !0, "IS_TRUE");
function Ws(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = Us } = n, c = Ns(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		Fs(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		Fs(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		Fs(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		Fs(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Fs((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || qs(Ls, c, p, { discrete: !0 });
				};
				if (Fs(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ Fs(() => l.current = !0, "onPointerDownCapture") };
}
Fs(Ws, "usePointerDownOutside");
function Gs(t, n = globalThis?.document) {
	let r = Ns(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Fs((e) => {
			e.target && !i.current && qs(Rs, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ Fs(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Fs(() => i.current = !1, "onBlurCapture")
	};
}
Fs(Gs, "useFocusOutside");
function Ks() {
	let e = new CustomEvent(Is);
	document.dispatchEvent(e);
}
Fs(Ks, "dispatchUpdate");
function qs(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? fs(i, a) : i.dispatchEvent(a);
}
Fs(qs, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Js = Object.defineProperty, Ys = (e, t) => Js(e, "name", {
	value: t,
	configurable: !0
}), Xs = 0, Zs = null;
function Qs(e) {
	return $s(), e.children;
}
Ys(Qs, "FocusGuards");
function $s() {
	e.useEffect(() => {
		Zs ||= {
			start: ec(),
			end: ec()
		};
		let { start: e, end: t } = Zs;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Xs++, () => {
			Xs === 1 && (Zs?.start.remove(), Zs?.end.remove(), Zs = null), Xs = Math.max(0, Xs - 1);
		};
	}, []);
}
Ys($s, "useFocusGuards");
function ec() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Ys(ec, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var tc = Object.defineProperty, nc = (e, t) => tc(e, "name", {
	value: t,
	configurable: !0
}), rc = "focusScope.autoFocusOnMount", ic = "focusScope.autoFocusOnUnmount", ac = {
	bubbles: !1,
	cancelable: !0
}, oc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ nc(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = Ns(o), f = Ns(s), p = e.useRef(null), m = J(n, u), h = e.useRef(a);
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
				g(t) ? p.current = t : _c(p.current, { select: !0 });
			}, t = function(e) {
				if (v.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || _c(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && _c(l);
			};
			nc(e, "handleFocusIn"), nc(t, "handleFocusOut"), nc(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			vc.add(v);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(rc, ac);
				l.addEventListener(rc, d), l.dispatchEvent(t), t.defaultPrevented || (dc(xc(pc(l)), { select: !0 }), document.activeElement === e && _c(l));
			}
			return () => {
				l.removeEventListener(rc, d), setTimeout(() => {
					let t = new CustomEvent(ic, ac);
					l.addEventListener(ic, f), l.dispatchEvent(t), t.defaultPrevented || _c(e ?? document.body, { select: !0 }), l.removeEventListener(ic, f), vc.remove(v);
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
			let t = e.currentTarget, [i, a] = fc(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && _c(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && _c(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		v.paused
	]);
	return /* @__PURE__ */ _(ds.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), sc = e.createContext(null);
function cc({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ _(sc.Provider, {
		value: e,
		children: t
	}) : t;
}
nc(cc, "FocusScopeBranchProvider");
function lc() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ nc((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ nc((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
nc(lc, "useFocusScopeBranchRegistry");
function uc(t) {
	let n = e.useContext(sc);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
nc(uc, "useFocusScopeBranch");
function dc(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (_c(r, { select: t }), document.activeElement !== n) return;
}
nc(dc, "focusFirst");
function fc(e) {
	let t = pc(e);
	return [mc(t, e), mc(t.reverse(), e)];
}
nc(fc, "getTabbableEdges");
function pc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ nc((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
nc(pc, "getTabbableCandidates");
function mc(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : hc(r, { upTo: t }))) return r;
}
nc(mc, "findVisible");
function hc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
nc(hc, "isHidden");
function gc(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
nc(gc, "isSelectableInput");
function _c(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && gc(e) && t && e.select();
	}
}
nc(_c, "focus");
var vc = yc();
function yc() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = bc(e, t), e.unshift(t);
		},
		remove(t) {
			e = bc(e, t), e[0]?.resume();
		}
	};
}
nc(yc, "createFocusScopesStack");
function bc(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
nc(bc, "arrayRemove");
function xc(e) {
	return e.filter((e) => e.tagName !== "A");
}
nc(xc, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Sc = Object.defineProperty, Cc = (e, t) => Sc(e, "name", {
	value: t,
	configurable: !0
}), wc = e.useId || (() => void 0), Tc = 0;
function Ec(t) {
	let [n, r] = e.useState(wc());
	return No(() => {
		t || r((e) => e ?? String(Tc++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
Cc(Ec, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Dc = [
	"top",
	"right",
	"bottom",
	"left"
], Oc = Math.min, kc = Math.max, Ac = Math.round, jc = Math.floor, Mc = (e) => ({
	x: e,
	y: e
}), Nc = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Pc(e, t, n) {
	return kc(e, Oc(t, n));
}
function Fc(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ic(e) {
	return e.split("-")[0];
}
function Lc(e) {
	return e.split("-")[1];
}
function Rc(e) {
	return e === "x" ? "y" : "x";
}
function zc(e) {
	return e === "y" ? "height" : "width";
}
function Bc(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Vc(e) {
	return Rc(Bc(e));
}
function Hc(e, t, n) {
	n === void 0 && (n = !1);
	let r = Lc(e), i = Vc(e), a = zc(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Zc(o)), [o, Zc(o)];
}
function Uc(e) {
	let t = Zc(e);
	return [
		Wc(e),
		t,
		Wc(t)
	];
}
function Wc(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Gc = ["left", "right"], Kc = ["right", "left"], qc = ["top", "bottom"], Jc = ["bottom", "top"];
function Yc(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Kc : Gc : t ? Gc : Kc;
		case "left":
		case "right": return t ? qc : Jc;
		default: return [];
	}
}
function Xc(e, t, n, r) {
	let i = Lc(e), a = Yc(Ic(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Wc)))), a;
}
function Zc(e) {
	let t = Ic(e);
	return Nc[t] + e.slice(t.length);
}
function Qc(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function $c(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Qc(e);
}
function el(e) {
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
function tl(e, t, n) {
	let { reference: r, floating: i } = e, a = Bc(t), o = Vc(t), s = zc(o), c = Ic(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Lc(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function nl(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Fc(t, e), p = $c(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = el(await i.getClippingRect({
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
	}, y = el(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var rl = 50, il = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: nl
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = tl(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < rl && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = tl(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, al = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Fc(e, t) || {};
		if (l == null) return {};
		let d = $c(u), f = {
			x: n,
			y: r
		}, p = Vc(i), m = zc(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Oc(d[_], T), D = Oc(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = Pc(E, k, O), j = !c.arrow && Lc(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), ol = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Fc(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Ic(r), _ = Bc(o), v = Ic(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Zc(o)] : Uc(o)), x = p !== "none";
			!d && x && b.push(...Xc(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Hc(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Bc(t) || T.every((e) => Bc(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = Bc(e.placement);
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
function sl(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function cl(e) {
	return Dc.some((t) => e[t] >= 0);
}
var ll = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Fc(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = sl(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: cl(e)
					} };
				}
				case "escaped": {
					let e = sl(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: cl(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ul = /*#__PURE__*/ new Set(["left", "top"]);
async function dl(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Ic(n), s = Lc(n), c = Bc(n) === "y", l = ul.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Fc(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var fl = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await dl(t, e);
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
}, pl = function(e) {
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
			} }, ...l } = Fc(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Bc(i), p = Rc(f), m = u[p], h = u[f], g = (e, t) => Pc(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, ml = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Fc(e, t), u = {
				x: n,
				y: r
			}, d = Bc(i), f = Rc(d), p = u[f], m = u[d], h = Fc(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = ul.has(Ic(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, hl = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Fc(e, t), c = await i.detectOverflow(t, s), l = Ic(n), u = Lc(n), d = Bc(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Oc(p - c[m], g), y = Oc(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * kc(c.left, c.right) : S = p - 2 * kc(c.top, c.bottom)), await o({
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
function gl() {
	return typeof window < "u";
}
function _l(e) {
	return bl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vl(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yl(e) {
	return ((bl(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function bl(e) {
	return gl() ? e instanceof Node || e instanceof vl(e).Node : !1;
}
function xl(e) {
	return gl() ? e instanceof Element || e instanceof vl(e).Element : !1;
}
function Sl(e) {
	return gl() ? e instanceof HTMLElement || e instanceof vl(e).HTMLElement : !1;
}
function Cl(e) {
	return !gl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vl(e).ShadowRoot;
}
function wl(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Fl(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Tl(e) {
	return /^(table|td|th)$/.test(_l(e));
}
function El(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Dl = /transform|translate|scale|rotate|perspective|filter/, Ol = /paint|layout|strict|content/, kl = (e) => !!e && e !== "none", Al;
function jl(e) {
	let t = xl(e) ? Fl(e) : e;
	return kl(t.transform) || kl(t.translate) || kl(t.scale) || kl(t.rotate) || kl(t.perspective) || !Nl() && (kl(t.backdropFilter) || kl(t.filter)) || Dl.test(t.willChange || "") || Ol.test(t.contain || "");
}
function Ml(e) {
	let t = Ll(e);
	for (; Sl(t) && !Pl(t);) {
		if (jl(t)) return t;
		if (El(t)) return null;
		t = Ll(t);
	}
	return null;
}
function Nl() {
	return Al ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Al;
}
function Pl(e) {
	return /^(html|body|#document)$/.test(_l(e));
}
function Fl(e) {
	return vl(e).getComputedStyle(e);
}
function Il(e) {
	return xl(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ll(e) {
	if (_l(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Cl(e) && e.host || yl(e);
	return Cl(t) ? t.host : t;
}
function Rl(e) {
	let t = Ll(e);
	return Pl(t) ? (e.ownerDocument || e).body : Sl(t) && wl(t) ? t : Rl(t);
}
function zl(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Rl(e), i = r === e.ownerDocument?.body, a = vl(r);
	if (i) {
		let e = Bl(a);
		return t.concat(a, a.visualViewport || [], wl(r) ? r : [], e && n ? zl(e) : []);
	}
	return t.concat(r, zl(r, [], n));
}
function Bl(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Vl(e) {
	let t = Fl(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Sl(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ac(n) !== a || Ac(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Hl(e) {
	return xl(e) ? e : e.contextElement;
}
function Ul(e) {
	let t = Hl(e);
	if (!Sl(t)) return Mc(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Vl(t), o = (a ? Ac(n.width) : n.width) / r, s = (a ? Ac(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Wl = /*#__PURE__*/ Mc(0);
function Gl(e) {
	let t = vl(e);
	return !Nl() || !t.visualViewport ? Wl : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Kl(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === vl(e);
}
function ql(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Hl(e), o = Mc(1);
	t && (r ? xl(r) && (o = Ul(r)) : o = Ul(e));
	let s = Kl(a, n, r) ? Gl(a) : Mc(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = vl(a), t = xl(r) ? vl(r) : r, n = e, i = Bl(n);
		for (; i && t !== n;) {
			let e = Ul(i), t = i.getBoundingClientRect(), r = Fl(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = vl(i), i = Bl(n);
		}
	}
	return el({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Jl(e, t) {
	let n = Il(e).scrollLeft;
	return t ? t.left + n : ql(yl(e)).left + n;
}
function Yl(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Jl(e, n),
		y: n.top + t.scrollTop
	};
}
function Xl(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = yl(r), s = t ? El(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Mc(1), u = Mc(0), d = Sl(r);
	if ((d || !a) && ((_l(r) !== "body" || wl(o)) && (c = Il(r)), d)) {
		let e = ql(r);
		l = Ul(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Yl(o, c) : Mc(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Zl(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Ql(e) {
	let t = Il(e), n = e.ownerDocument.body, r = kc(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = kc(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Jl(e), o = -t.scrollTop;
	return Fl(n).direction === "rtl" && (a += kc(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var $l = 25;
function eu(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = vl(e), a = yl(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Nl() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Jl(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= $l && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function tu(e, t) {
	let n = ql(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ul(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function nu(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = eu(e, n, t);
	else if (t === "document") r = Ql(yl(e));
	else if (xl(t)) r = tu(t, n);
	else {
		let n = Gl(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return el(r);
}
function ru(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = zl(e, [], !1).filter((e) => xl(e) && _l(e) !== "body"), i = null, a = Fl(e).position === "fixed", o = a ? Ll(e) : e;
	for (; xl(o) && !Pl(o);) {
		let e = Fl(o), t = jl(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Ll(o);
	}
	return t.set(e, r), r;
}
function iu(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? El(t) ? [] : ru(t, this._c) : [].concat(n), r], o = nu(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = nu(t, a[e], i);
		s = kc(n.top, s), c = Oc(n.right, c), l = Oc(n.bottom, l), u = kc(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function au(e) {
	let { width: t, height: n } = Vl(e);
	return {
		width: t,
		height: n
	};
}
function ou(e, t, n) {
	let r = Sl(t), i = yl(t), a = n === "fixed", o = ql(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Mc(0);
	if ((r || !a) && ((_l(t) !== "body" || wl(i)) && (s = Il(t)), r)) {
		let e = ql(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Jl(i));
	let l = i && !r && !a ? Yl(i, s) : Mc(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function su(e) {
	return Fl(e).position === "static";
}
function cu(e, t) {
	if (!Sl(e) || Fl(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return yl(e) === n && (n = n.ownerDocument.body), n;
}
function lu(e, t) {
	let n = vl(e);
	if (El(e)) return n;
	if (!Sl(e)) {
		let t = Ll(e);
		for (; t && !Pl(t);) {
			if (xl(t) && !su(t)) return t;
			t = Ll(t);
		}
		return n;
	}
	let r = cu(e, t);
	for (; r && Tl(r) && su(r);) r = cu(r, t);
	return r && Pl(r) && su(r) && !jl(r) ? n : r || Ml(e) || n;
}
var uu = async function(e) {
	let t = this.getOffsetParent || lu, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ou(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function du(e) {
	return Fl(e).direction === "rtl";
}
var fu = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Xl,
	getDocumentElement: yl,
	getClippingRect: iu,
	getOffsetParent: lu,
	getElementRects: uu,
	getClientRects: Zl,
	getDimensions: au,
	getScale: Ul,
	isElement: xl,
	isRTL: du
};
function pu(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function mu(e, t, n) {
	let r = null, i, a = yl(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = jc(d), h = jc(a.clientWidth - (u + f)), g = jc(a.clientHeight - (d + p)), _ = jc(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: kc(0, Oc(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!pu(l, e.getBoundingClientRect())) return s();
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
	let c = vl(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function hu(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Hl(e), u = i || a ? [...l ? zl(l) : [], ...t ? zl(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? mu(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ql(e) : null;
	c && g();
	function g() {
		let t = ql(e);
		h && !pu(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var gu = fl, _u = pl, vu = ol, yu = hl, bu = ll, xu = al, Su = ml, Cu = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...fu,
		...i.platform,
		_c: r
	};
	return il(e, t, {
		...i,
		platform: a
	});
}, wu = typeof document < "u" ? u : function() {};
function Tu(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Tu(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Tu(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Eu(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Du(e, t) {
	let n = Eu(e);
	return Math.round(t * n) / n;
}
function Ou(t) {
	let n = e.useRef(t);
	return wu(() => {
		n.current = t;
	}), n;
}
function ku(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	Tu(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, v(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = Ou(l), k = Ou(a), A = Ou(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), Cu(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Tu(E.current, t) && (E.current = t, y.flushSync(() => {
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
	wu(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	wu(() => (M.current = !0, () => {
		M.current = !1;
	}), []), wu(() => {
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
		let t = Du(P.floating, d.x), n = Du(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Eu(P.floating) >= 1.5 && { willChange: "transform" }
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
var Au = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : xu({
				element: r.current,
				padding: i
			}).fn(n) : r ? xu({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, ju = (e, t) => {
	let n = gu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Mu = (e, t) => {
	let n = _u(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Nu = (e, t) => ({
	fn: Su(e).fn,
	options: [e, t]
}), Pu = (e, t) => {
	let n = vu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Fu = (e, t) => {
	let n = yu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Iu = (e, t) => {
	let n = bu(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Lu = (e, t) => {
	let n = Au(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ru = Object.defineProperty, zu = (e, t) => Ru(e, "name", {
	value: t,
	configurable: !0
});
function Bu(t) {
	let [n, r] = e.useState(void 0);
	return No(() => {
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
zu(Bu, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var Vu = Object.defineProperty, Hu = (e, t) => Vu(e, "name", {
	value: t,
	configurable: !0
}), Uu = {
	Partial: "partial",
	Always: "always"
}, Wu = {
	Optimized: "optimized",
	Always: "always"
}, Gu = "Popper", [Ku, qu] = /* @__PURE__ */ jo(Gu), [Ju, Yu] = Ku(Gu), Xu = /* @__PURE__ */ Hu((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ _(Ju, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Zu = "PopperAnchor", Qu = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Hu(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = Yu(Zu, r), s = e.useRef(null), c = o.onAnchorChange, l = J(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && ad(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ _(ds.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), $u = "PopperContent", [ed, td] = Ku($u), nd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Hu(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = Uu.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = Wu.Optimized, onPlaced: h, ...g } = t, v = Yu($u, r), [y, b] = e.useState(null), x = J(n, b), [S, C] = e.useState(null), w = Bu(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(rd),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = ku({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ Hu((...e) => hu(...e, { animationFrame: m === Wu.Always }), "whileElementsMounted"),
		elements: { reference: v.anchor },
		middleware: [
			ju({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && Mu({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === Uu.Partial ? Nu() : void 0,
				...j
			}),
			l && Pu({ ...j }),
			Fu({
				...j,
				apply: /* @__PURE__ */ Hu(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && Lu({
				element: S,
				padding: c
			}),
			id({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && Iu({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = v.setPlacementState;
	No(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [R, ee] = ad(P), z = Ns(h);
	No(() => {
		F && z?.();
	}, [F, z]);
	let B = I.arrow?.x, V = I.arrow?.y, te = I.arrow?.centerOffset !== 0, [ne, H] = e.useState();
	return No(() => {
		y && H(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ _("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ne,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ _(ed, {
			scope: r,
			placedSide: R,
			placedAlign: ee,
			onArrowChange: C,
			arrowX: B,
			arrowY: V,
			shouldHideArrow: te,
			children: /* @__PURE__ */ _(ds.div, {
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
function rd(e) {
	return e !== null;
}
Hu(rd, "isNotNull");
var id = /* @__PURE__ */ Hu((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ad(n), u = {
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
function ad(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Hu(ad, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var od = Object.defineProperty, sd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => od(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	No(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? y.createPortal(/* @__PURE__ */ _(ds.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), cd = Object.defineProperty, ld = (e, t) => cd(e, "name", {
	value: t,
	configurable: !0
});
function ud(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
ld(ud, "useStateMachine");
var dd = /* @__PURE__ */ ld((t) => {
	let { present: n, children: r } = t, i = fd(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = md(i.ref, gd(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function fd(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = ud(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? hd(i.current), s.current = void 0) : o.current = "none";
	}, [c]), No(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = hd(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), No(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ ld((r) => {
				let o = hd(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ ld((e) => {
				e.target === n && (o.current = hd(i.current));
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
				i.current = t, s.current = hd(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
ld(fd, "usePresence");
function pd(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
ld(pd, "setRef");
function md(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = pd(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : pd(t[e], null);
			}
		};
	}, []);
}
ld(md, "useStableComposedRefs");
function hd(e) {
	return e?.animationName || "none";
}
ld(hd, "getAnimationName");
function gd(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
ld(gd, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var _d = Object.defineProperty, vd = (e, t) => _d(e, "name", {
	value: t,
	configurable: !0
}), yd = !1;
function bd() {
	let [t, n] = e.useState(yd);
	return e.useEffect(() => {
		yd || (yd = !0, n(!0));
	}, []), t;
}
vd(bd, "useIsHydrated");
var xd = e.useSyncExternalStore;
function Sd() {
	return () => {};
}
vd(Sd, "subscribe");
function Cd() {
	return xd(Sd, () => !0, () => !1);
}
vd(Cd, "useIsHydratedModern");
var wd = typeof xd == "function" ? Cd : bd, Td = Object.defineProperty, Ed = (e, t) => Td(e, "name", {
	value: t,
	configurable: !0
}), Dd = "rovingFocusGroup.onEntryFocus", Od = {
	bubbles: !1,
	cancelable: !0
}, kd = "RovingFocusGroup", [Ad, jd, Md] = /* @__PURE__ */ hs(kd), [Nd, Pd] = /* @__PURE__ */ jo(kd, [Md]), Fd = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, Id = {
	LTR: "ltr",
	RTL: "rtl"
}, [Ld, Rd] = Nd(kd), zd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ed(function(e, t) {
	return /* @__PURE__ */ _(Ad.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ _(Ad.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ _(Bd, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), Bd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ed(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = J(n, p), h = As(o), [g, v] = Ho({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: kd
	}), [y, b] = e.useState(!1), x = Ns(u), S = jd(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(Dd, x), () => e.removeEventListener(Dd, x);
	}, [x]), /* @__PURE__ */ _(Ld, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => v(e), [v]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ _(ds.div, {
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
					let t = new CustomEvent(Dd, Od);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						Kd([
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
}, "RovingFocusGroupImpl")), Vd = "RovingFocusGroupItem", Hd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Ed(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Ec(), u = o || l, d = Rd(Vd, r), f = d.currentTabStopId === u, p = jd(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d, v = wd();
	return No(() => {
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
	]), /* @__PURE__ */ _(Ad.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ _(ds.span, {
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
				let t = Gd(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? qd(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Kd(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), Ud = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Wd(e, t) {
	return t === Id.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
Ed(Wd, "getDirectionAwareKey");
function Gd(e, t, n) {
	let r = Wd(e.key, n);
	if (!(t === Fd.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === Fd.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return Ud[r];
}
Ed(Gd, "getFocusIntent");
function Kd(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Ed(Kd, "focusFirst");
function qd(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Ed(qd, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Jd = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Yd = /* @__PURE__ */ new WeakMap(), Xd = /* @__PURE__ */ new WeakMap(), Zd = {}, Qd = 0, $d = function(e) {
	return e && (e.host || $d(e.parentNode));
}, ef = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = $d(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, tf = function(e, t, n, r) {
	var i = ef(t, Array.isArray(e) ? e : [e]);
	Zd[n] || (Zd[n] = /* @__PURE__ */ new WeakMap());
	var a = Zd[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Yd.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Yd.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Xd.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Qd++, function() {
		o.forEach(function(e) {
			var t = Yd.get(e) - 1, i = a.get(e) - 1;
			Yd.set(e, t), a.set(e, i), t || (Xd.has(e) || e.removeAttribute(r), Xd.delete(e)), i || e.removeAttribute(n);
		}), Qd--, Qd || (Yd = /* @__PURE__ */ new WeakMap(), Yd = /* @__PURE__ */ new WeakMap(), Xd = /* @__PURE__ */ new WeakMap(), Zd = {});
	};
}, nf = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Jd(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), tf(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, rf = function() {
	return rf = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, rf.apply(this, arguments);
};
function af(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function of(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var sf = "right-scroll-bar-position", cf = "width-before-scroll-bar", lf = "with-scroll-bars-hidden", uf = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function df(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function ff(e, t) {
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
var pf = typeof window < "u" ? e.useLayoutEffect : e.useEffect, mf = /* @__PURE__ */ new WeakMap();
function hf(e, t) {
	var n = ff(t || null, function(t) {
		return e.forEach(function(e) {
			return df(e, t);
		});
	});
	return pf(function() {
		var t = mf.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || df(e, null);
			}), i.forEach(function(e) {
				r.has(e) || df(e, a);
			});
		}
		mf.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function gf(e) {
	return e;
}
function _f(e, t) {
	t === void 0 && (t = gf);
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
function vf(e) {
	e === void 0 && (e = {});
	var t = _f(null);
	return t.options = rf({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var yf = function(t) {
	var n = t.sideCar, r = af(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, rf({}, r));
};
yf.isSideCarExport = !0;
function bf(e, t) {
	return e.useMedium(t), yf;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var xf = vf(), Sf = function() {}, Cf = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Sf,
		onWheelCapture: Sf,
		onTouchMoveCapture: Sf
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = af(t, [
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
	]), S = p, C = hf([r, n]), w = rf(rf({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: xf,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), rf(rf({}, w), { ref: C })) : e.createElement(y, rf({}, w, {
		className: l,
		ref: C
	}), c));
});
Cf.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Cf.classNames = {
	fullWidth: cf,
	zeroRight: sf
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var wf = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function Tf() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = wf();
	return t && e.setAttribute("nonce", t), e;
}
function Ef(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Df(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Of = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Tf()) && (Ef(t, n), Df(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, kf = function() {
	var t = Of();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Af = function() {
	var e = kf();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, jf = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Mf = function(e) {
	return parseInt(e || "", 10) || 0;
}, Nf = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Mf(n),
		Mf(r),
		Mf(i)
	];
}, Pf = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return jf;
	var t = Nf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Ff = Af(), If = "data-scroll-locked", Lf = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${lf} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${If}] {
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
  
  .${sf} {
    right: ${s}px ${r};
  }
  
  .${cf} {
    margin-right: ${s}px ${r};
  }
  
  .${sf} .${sf} {
    right: 0 ${r};
  }
  
  .${cf} .${cf} {
    margin-right: 0 ${r};
  }
  
  body[${If}] {
    ${uf}: ${s}px;
  }
`;
}, Rf = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, zf = function() {
	e.useEffect(function() {
		return document.body.setAttribute(If, (Rf() + 1).toString()), function() {
			var e = Rf() - 1;
			e <= 0 ? document.body.removeAttribute(If) : document.body.setAttribute(If, e.toString());
		};
	}, []);
}, Bf = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	zf();
	var o = e.useMemo(function() {
		return Pf(a);
	}, [a]);
	return e.createElement(Ff, { styles: Lf(o, !n, a, r ? "" : "!important") });
}, Vf = !1;
if (typeof window < "u") try {
	var Hf = Object.defineProperty({}, "passive", { get: function() {
		return Vf = !0, !0;
	} });
	window.addEventListener("test", Hf, Hf), window.removeEventListener("test", Hf, Hf);
} catch {
	Vf = !1;
}
var Uf = Vf ? { passive: !1 } : !1, Wf = function(e) {
	return e.tagName === "TEXTAREA";
}, Gf = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Wf(e) && n[t] === "visible");
}, Kf = function(e) {
	return Gf(e, "overflowY");
}, qf = function(e) {
	return Gf(e, "overflowX");
}, Jf = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Zf(e, r)) {
			var i = Qf(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Yf = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Xf = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Zf = function(e, t) {
	return e === "v" ? Kf(t) : qf(t);
}, Qf = function(e, t) {
	return e === "v" ? Yf(t) : Xf(t);
}, $f = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ep = function(e, t, n, r, i) {
	var a = $f(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Qf(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Zf(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, tp = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, np = function(e) {
	return [e.deltaX, e.deltaY];
}, rp = function(e) {
	return e && "current" in e ? e.current : e;
}, ip = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ap = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, op = 0, sp = [];
function cp(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(op++)[0], o = e.useState(Af)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = of([t.lockRef.current], (t.shards || []).map(rp), !0).filter(Boolean);
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
		var n = tp(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Jf(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Jf(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return ep(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (sp.length && sp[sp.length - 1] === o) {
			var r = "deltaY" in t ? np(t) : tp(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && ip(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(rp).filter(Boolean).filter(function(e) {
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
			shadowParent: lp(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = tp(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, np(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, tp(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return sp.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Uf), document.addEventListener("touchmove", l, Uf), document.addEventListener("touchstart", d, Uf), function() {
			sp = sp.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Uf), document.removeEventListener("touchmove", l, Uf), document.removeEventListener("touchstart", d, Uf);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: ap(a) }) : null, m ? e.createElement(Bf, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function lp(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var up = bf(xf, cp), dp = e.forwardRef(function(t, n) {
	return e.createElement(Cf, rf({}, t, {
		ref: n,
		sideCar: up
	}));
});
dp.classNames = Cf.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var fp = Object.defineProperty, Y = (e, t) => fp(e, "name", {
	value: t,
	configurable: !0
}), pp = {
	LTR: "ltr",
	RTL: "rtl"
}, mp = ["Enter", " "], hp = [
	"ArrowDown",
	"PageUp",
	"Home"
], gp = [
	"ArrowUp",
	"PageDown",
	"End"
], _p = [...hp, ...gp], vp = {
	ltr: [...mp, "ArrowRight"],
	rtl: [...mp, "ArrowLeft"]
}, yp = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, bp = "Menu", [xp, Sp, Cp] = /* @__PURE__ */ hs(bp), [wp, Tp] = /* @__PURE__ */ jo(bp, [
	Cp,
	qu,
	Pd
]), Ep = qu(), Dp = Pd(), [Op, kp] = wp(bp), [Ap, jp] = wp(bp), Mp = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Ep(n), [l, u] = e.useState(null), d = e.useRef(!1), f = Ns(o), p = As(a);
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
	}, [r, f]), /* @__PURE__ */ _(Xu, {
		...c,
		children: /* @__PURE__ */ _(Op, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ _(Ap, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), Np = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = Ep(n);
	return /* @__PURE__ */ _(Qu, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), Pp = "MenuPortal", [Fp, Ip] = wp(Pp, { forceMount: void 0 }), Lp = /* @__PURE__ */ Y((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = kp(Pp, t);
	return /* @__PURE__ */ _(Fp, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ _(dd, {
			present: n || a.open,
			children: /* @__PURE__ */ _(sd, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), Rp = "MenuContent", [zp, Bp] = wp(Rp), Vp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = Ip(Rp, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = kp(Rp, e.__scopeMenu), o = jp(Rp, e.__scopeMenu);
	return /* @__PURE__ */ _(xp.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ _(dd, {
			present: r || a.open,
			children: /* @__PURE__ */ _(xp.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ _(Hp, {
					...i,
					ref: t
				}) : /* @__PURE__ */ _(Up, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Hp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = kp(Rp, t.__scopeMenu), i = e.useRef(null), a = J(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return nf(e);
	}, []), /* @__PURE__ */ _(Gp, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: q(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), Up = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = kp(Rp, e.__scopeMenu);
	return /* @__PURE__ */ _(Gp, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), Wp = /* @__PURE__ */ Yo("MenuContent.ScrollLock"), Gp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, v = kp(Rp, r), y = jp(Rp, r), b = Ep(r), x = Dp(r), S = Sp(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	uc(E);
	let { nodes: O, registry: k } = lc(), A = !!(a || h), j = J(n, T, v.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), R = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), ee = h ? dp : e.Fragment, z = h ? {
		as: Wp,
		allowPinchZoom: !0,
		shards: R
	} : void 0, B = /* @__PURE__ */ Y((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = vm(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Y((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), $s();
	let V = e.useCallback((e) => I.current === F.current?.side && bm(e, F.current?.area), []);
	return /* @__PURE__ */ _(zp, {
		scope: r,
		searchRef: N,
		onItemEnter: e.useCallback((e) => {
			V(e) && e.preventDefault();
		}, [V]),
		onItemLeave: e.useCallback((e) => {
			V(e) || (T.current?.focus(), w(null));
		}, [V]),
		onTriggerLeave: e.useCallback((e) => {
			V(e) && e.preventDefault();
		}, [V]),
		pointerGraceTimerRef: P,
		onPointerGraceIntentChange: e.useCallback((e) => {
			F.current = e;
		}, []),
		children: /* @__PURE__ */ _(cc, {
			registry: A ? k : null,
			children: /* @__PURE__ */ _(ee, {
				...z,
				children: /* @__PURE__ */ _(oc, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: q(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ _(Vs, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ _(zd, {
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
							children: /* @__PURE__ */ _(nd, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": pm(v.open),
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
									t && (e.key === "Tab" && e.preventDefault(), !n && r && B(e.key));
									let i = T.current;
									if (e.target !== i || !_p.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									gp.includes(e.key) && a.reverse(), gm(a);
								}),
								onBlur: q(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: q(t.onPointerMove, xm((e) => {
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
}, "MenuContentImpl")), Kp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ _(ds.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), qp = "MenuItem", Jp = "menu.itemSelect", Yp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = jp(qp, t.__scopeMenu), c = Bp(qp, t.__scopeMenu), l = J(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Y(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Jp, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Jp, (e) => i?.(e), { once: !0 }), fs(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ _(Xp, {
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
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && mp.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Xp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = Bp(qp, r), c = Dp(r), l = e.useRef(null), u = J(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ _(xp.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ _(Hd, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ _(ds.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: q(t.onPointerMove, xm((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: q(t.onPointerLeave, xm((e) => s.onItemLeave(e))),
				onFocus: q(t.onFocus, () => f(!0)),
				onBlur: q(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), Zp = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ _(nm, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ _(Yp, {
			role: "menuitemcheckbox",
			"aria-checked": mm(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": hm(n),
			onSelect: q(i.onSelect, () => r?.(mm(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [Qp, $p] = wp("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Y(() => {}, "onValueChange")
}), em = "MenuRadioItem", tm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { value: n, ...r } = e, i = $p(em, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ _(nm, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ _(Yp, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": hm(a),
			onSelect: q(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [nm, rm] = wp("MenuItemIndicator", { checked: !1 }), im = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ _(ds.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), am = "MenuSub", [om, sm] = wp(am), cm = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = kp(am, n), s = Ep(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = Ns(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ _(Xu, {
		...s,
		children: /* @__PURE__ */ _(Op, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ _(om, {
				scope: n,
				contentId: Ec(),
				triggerId: Ec(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), lm = "MenuSubTrigger", um = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = kp(lm, t.__scopeMenu), i = jp(lm, t.__scopeMenu), a = sm(lm, t.__scopeMenu), o = Bp(lm, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = J(n, a.onTriggerChange);
	return /* @__PURE__ */ _(Np, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ _(Xp, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": pm(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: q(t.onPointerMove, xm((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: q(t.onPointerLeave, xm((e) => {
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
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && vp[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), dm = "MenuSubContent", fm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = Ip(Rp, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = kp(Rp, t.__scopeMenu), c = jp(Rp, t.__scopeMenu), l = sm(dm, t.__scopeMenu), u = e.useRef(null), d = J(n, u);
	return /* @__PURE__ */ _(xp.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ _(dd, {
			present: i || s.open,
			children: /* @__PURE__ */ _(xp.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ _(Gp, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === pp.RTL ? "left" : "right",
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
						let t = e.currentTarget.contains(e.target), n = yp[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function pm(e) {
	return e ? "open" : "closed";
}
Y(pm, "getOpenState");
function mm(e) {
	return e === "indeterminate";
}
Y(mm, "isIndeterminate");
function hm(e) {
	return mm(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Y(hm, "getCheckedState");
function gm(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Y(gm, "focusFirst");
function _m(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Y(_m, "wrapArray");
function vm(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = _m(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Y(vm, "getNextMatch");
function ym(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Y(ym, "isPointInPolygon");
function bm(e, t) {
	return t ? ym({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Y(bm, "isPointerInGraceArea");
function xm(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Y(xm, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var Sm = Object.defineProperty, Cm = (e, t) => Sm(e, "name", {
	value: t,
	configurable: !0
}), wm = "DropdownMenu", [Tm, Em] = /* @__PURE__ */ jo(wm, [Tp]), Dm = Tp(), [Om, km] = Tm(wm), Am = /* @__PURE__ */ Cm((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = Dm(n), u = e.useRef(null), [d, f] = Ho({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: wm
	});
	return /* @__PURE__ */ _(Om, {
		scope: n,
		triggerId: Ec(),
		triggerRef: u,
		contentId: Ec(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ _(Mp, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), jm = "DropdownMenuTrigger", Mm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = km(jm, n), o = Dm(n), s = J(t, a.triggerRef);
	return /* @__PURE__ */ _(Np, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ _(ds.button, {
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
}, "DropdownMenuTrigger")), Nm = /* @__PURE__ */ Cm((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Dm(t);
	return /* @__PURE__ */ _(Lp, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), Pm = "DropdownMenuContent", Fm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = km(Pm, r), o = Dm(r), s = e.useRef(!1);
	return /* @__PURE__ */ _(Vp, {
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
}, "DropdownMenuContent")), Im = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(Kp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), Lm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(Yp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), Rm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(Zp, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), zm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(tm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), Bm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(im, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), Vm = /* @__PURE__ */ Cm((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = Dm(t), [s, c] = Ho({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ _(cm, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), Hm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(um, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), Um = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Cm(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = Dm(n);
	return /* @__PURE__ */ _(fm, {
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
}, "DropdownMenuSubContent")), Wm = Am, Gm = Mm, Km = Vm, qm = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ _(Hm, {
	ref: i,
	className: li("uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:focus:bg-gray-100 uhuu:data-[state=open]:bg-gray-100", t && "uhuu:pl-8", e),
	...r,
	children: n
}));
qm.displayName = Hm.displayName;
var Jm = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(Um, {
	ref: n,
	className: li("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
Jm.displayName = Um.displayName;
var Ym = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = Ji();
	return /* @__PURE__ */ _(Nm, {
		container: i || void 0,
		children: /* @__PURE__ */ _(Fm, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: li("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
Ym.displayName = Fm.displayName;
var Xm = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _(Lm, {
	ref: r,
	className: li("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", t && "uhuu:pl-8", e),
	...n
}));
Xm.displayName = Lm.displayName;
var Zm = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ _(Rm, {
	ref: i,
	className: li("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
Zm.displayName = Rm.displayName;
var Qm = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _(zm, {
	ref: r,
	className: li("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
Qm.displayName = zm.displayName;
var $m = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ _(Im, {
	ref: r,
	className: li("uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:font-medium", t && "uhuu:pl-8", e),
	...n
}));
$m.displayName = Im.displayName;
var eh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(Bm, {
	ref: n,
	className: li("uhuu:-mx-1 uhuu:my-1 uhuu:h-px uhuu:bg-gray-200", e),
	...t
}));
eh.displayName = Bm.displayName;
var th = (e, t) => {
	typeof window < "u" && window.$uhuu_renderer || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog));
}, nh = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ _("div", {
			className: ui("uhuu-image-overlay", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ _("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: ui("uhuu-image-overlay uhuu-image-overlay-img", t)
	});
};
function rh({ options: e, anchorInsets: t }) {
	let { t: n } = Ma(), r = /* @__PURE__ */ _("div", {
		"data-uhuu-chrome": !0,
		className: "uhuu:pointer-events-auto uhuu:absolute uhuu:right-2 uhuu:top-2 uhuu:z-20",
		children: /* @__PURE__ */ v(Wm, {
			modal: !1,
			children: [/* @__PURE__ */ _(Gm, {
				asChild: !0,
				children: /* @__PURE__ */ _(go, {
					variant: "secondary",
					size: "icon",
					title: n("image.options"),
					className: "uhuu:h-7 uhuu:w-7 uhuu:shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ _(Ni, { className: "uhuu:h-4 uhuu:w-4" })
				})
			}), /* @__PURE__ */ _(Ym, {
				className: "uhuu:w-40 uhuu:p-1.5",
				align: "end",
				children: e.map((e) => /* @__PURE__ */ v(Xm, {
					onSelect: (t) => th(t, e),
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
var ih = (e, t, n) => t ? /* @__PURE__ */ _(rh, {
	options: e,
	anchorInsets: n
}) : null, ah = (e = []) => {
	let t = so();
	return e.length > 0 && !t;
}, oh = ({ className: e, style: t, overlaySvg: n, overlayClassName: r, options: i = [], dialog: a, dialogProps: o, bleedProps: s, children: l }) => {
	let u = c(L), d = ah(i), f = mi({
		...s,
		pageWidth: s?.pageWidth ?? u?.page?.width ?? 210,
		bleed: s?.bleed ?? u?.page?.bleed ?? 0
	}, "bleed");
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v(hi, {
		...s,
		dialog: a,
		children: [nh(n, r), l]
	}), ih(i, d, f)] });
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function sh(e) {
	let t = c(L), n = di({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: g = 0 } = e, y = (e) => `${e}mm`, b = () => pi({
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
			...Bt(e),
			children: [/* @__PURE__ */ _("img", {
				className: ui("cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-spread-with-overlay.tsx
var ch = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(L), s = ah(n), l = mi({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v(sh, {
		...i,
		dialog: r,
		children: [nh(e, t), a]
	}), ih(n, s, l)] });
}, lh = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: c, options: l = [], dialog: u, dialogProps: d, placeholder: f, children: p, imageProps: m, renderImage: h, onError: g }) => {
	let y = e.useMemo(() => u ? Bt({ dialog: u }) : {}, [u]), b = ah(l), x = di({ onError: (e) => {
		g?.(e), m?.onError?.(e);
	} }), S = e.useMemo(() => {
		if (!d) return y;
		let e = {
			...y,
			...d
		};
		return (y.className || d.className) && (e.className = ui(y.className, d.className)), Object.keys(y).forEach((t) => {
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
			className: ui("uhuu-image-img", i, e),
			style: {
				...o,
				...t
			}
		};
		return h ? h(s) : r ? /* @__PURE__ */ _("img", {
			...s,
			onError: x
		}) : f ?? null;
	}, E = S["data-uhuu"], D = e.Children.toArray(p).some((t) => e.isValidElement(t) ? t.type === sh || t.type === hi : !1);
	D && delete S["data-uhuu"];
	let O = e.Children.map(p, (t) => e.isValidElement(t) ? e.cloneElement(t, { dataUhuu: E }) : t);
	return /* @__PURE__ */ v("div", {
		className: ui(D ? "uhuu-image-block uhuu-image-block-fill" : "uhuu-image-block", r),
		style: a,
		children: [/* @__PURE__ */ v("div", {
			...S,
			className: ui("uhuu-image-body", w && "uhuu-image-empty", S.className),
			children: [
				T(),
				O,
				nh(s, c)
			]
		}), ih(l, b)]
	});
}, uh = (e) => {
	let { t } = Ma(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = d(() => {
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
	if (a === "auto") return /* @__PURE__ */ _(lh, {
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
		return o && (n || r?.length || i) ? /* @__PURE__ */ _(ch, {
			className: f,
			style: m,
			overlaySvg: n,
			overlayClassName: D,
			options: r,
			dialog: i,
			dialogProps: O,
			spreadProps: e,
			children: A
		}) : /* @__PURE__ */ _(sh, { ...e });
	}
	return o && (n || r?.length || i) ? /* @__PURE__ */ _(oh, {
		className: f,
		style: m,
		overlaySvg: n,
		overlayClassName: D,
		options: r,
		dialog: i,
		dialogProps: O,
		bleedProps: P,
		children: A
	}) : /* @__PURE__ */ _(hi, { ...P });
}, X = (e) => typeof e == "object" && !!e && !Array.isArray(e), dh = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Z = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, fh = "https://render.uhuu.io/media/thumb", ph = "image/svg+xml";
function mh(e) {
	return typeof e == "string" ? { url: Z(e) } : X(e) ? {
		url: Z(e.contentUrl) ?? Z(e.url) ?? Z(e.src),
		type: Z(e.encodingFormat) ?? Z(e.mimeType)
	} : { url: void 0 };
}
function hh() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function gh(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function _h(e, t, n) {
	if (n && n.toLowerCase().startsWith(ph)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === ph) return !0;
	}
	return !1;
}
var vh = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function yh(e, t = {}) {
	let n = X(t) ? t : {}, { url: r, type: i } = mh(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = gh(r), s = Z(n.format);
	if (vh(o) && (s ||= Z(o.searchParams.get("format")), a = Z(o.searchParams.get("url")) ?? r, o = gh(a)), !/^https?:\/\//i.test(a) || _h(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : hh()) ? Z(n.printSize) ?? "4000x4000" : Z(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${fh}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var bh = [
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
], xh = [
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
], Sh = [
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
], Ch = [
	...Sh.map(([e]) => e),
	"chart-1",
	"chart-2",
	"chart-3",
	"chart-4",
	"chart-5"
], wh = RegExp(`^--(?:color-)?(?:${Ch.join("|")})$`), Th = /^--color-kit-[A-Za-z0-9_-]+$/, Eh = /^--font-(?:kit-)?(?:sans|serif|display|mono)$/;
function Dh(e) {
	let t = X(e) ? e.runtime : void 0;
	return X(t) && t.version === 2 && X(t.light) ? t : void 0;
}
var Oh = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, kh = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, Ah = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", jh = RegExp(`^ok(?:lch|lab)\\(\\s*${Ah}\\s+${Ah}\\s+${Ah}(?:\\s*\\/\\s*${Ah})?\\s*\\)$`, "i"), Mh = /^[a-z]+$/i, Nh = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), Ph = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", Fh = RegExp(`^(${Ph})(deg|turn|rad|grad)?\\s+(${Ph})%\\s+(${Ph})%(?:\\s*\\/\\s*(${Ph})(%)?)?$`, "i"), Ih = RegExp(`^hsla?\\(\\s*(${Ph})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${Ph})%\\s*(?:,\\s*|\\s+)(${Ph})%\\s*(?:(?:,|\\/)\\s*(${Ph})(%)?\\s*)?\\)$`, "i"), Lh = /[;{}<>\\\n\r]/, Rh = /^[A-Za-z0-9_-]+$/, zh = (e, t, n) => Math.min(n, Math.max(t, e)), Bh = (e) => e.toString(16).padStart(2, "0"), Vh = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function Hh(e, t, n, r, i, a) {
	let o = (Number(e) * Vh[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = zh(Number(n) / 100, 0, 1), c = zh(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : zh(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${Bh(d)}${Bh(f)}${Bh(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function Uh(e) {
	let t = Z(e);
	if (!t) return;
	if (Oh.test(t) || kh.test(t) || jh.test(t)) return t;
	if (Mh.test(t)) return Nh.has(t.toLowerCase()) ? void 0 : t;
	let n = Fh.exec(t) ?? Ih.exec(t);
	if (n) return Hh(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function Wh(e, t) {
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
function Gh(e, t) {
	for (let n of t) {
		let t = Uh(Wh(e, n));
		if (t !== void 0) return t;
	}
}
var Kh = (e) => {
	if (typeof e == "string" && e.includes(",")) return Z(e.slice(e.indexOf(",") + 1));
};
function qh(e, t) {
	if (e.includes(",")) return e;
	let n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
	return t ? `${n}, ${t}` : n;
}
function Jh(e, t) {
	if (typeof t == "string" && t) {
		if (Array.isArray(e)) return e.find((e) => X(e) && e.id === t);
		if (X(e)) return dh(e, t) && X(e[t]) ? e[t] : Object.values(e).find((e) => X(e) && e.id === t);
	}
}
function Yh(e, t) {
	let n = xh.find(([e]) => e === t)?.[1];
	if (!n || !X(e)) return;
	let r = X(e.tokens) ? e.tokens : {}, i = Z(r[n.token]), a = Z(r.primitives?.typography?.[n.primitive]), o = Jh(e.fonts, e.assignments?.[`font.${t}`]);
	!Z(o?.family) && X(e.fonts) && (o = n.keys.map((t) => dh(e.fonts, t) ? e.fonts[t] : void 0).find((e) => X(e) && Z(e.family)));
	let s = Z(o?.family);
	if (s) return qh(s, Z(o.fallback) ?? Kh(a) ?? Kh(i) ?? n.generic);
	let c = i ?? a;
	return c ? qh(c, Kh(a) ?? n.generic) : void 0;
}
function Xh(e, t = {}) {
	let n = {};
	if (X(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? Uh(r) : Z(r);
		t !== void 0 && !Lh.test(t) && (n[e] = t);
	}
	if (!X(e)) return n;
	let r = Dh(e);
	if (r) {
		for (let [e, t] of Object.entries(r.light)) {
			let r = wh.test(e) || Th.test(e) ? Uh(t) : Eh.test(e) ? Z(t) : void 0;
			r !== void 0 && !Lh.test(r) && (n[e] = r);
		}
		return n;
	}
	let i = X(e.tokens) ? e.tokens : {}, a = X(i.light?.semantic) ? i.light.semantic : {};
	for (let [e, t] of Sh) {
		let r = Uh(a[t]);
		r !== void 0 && (n[`--${e}`] = r, n[`--color-${e}`] = r);
	}
	for (let [e, t] of bh) {
		let r = Gh(i, t);
		r !== void 0 && (n[`--color-kit-${e}`] = r);
	}
	let o = i.light?.aliases;
	if (X(o)) {
		let e = (e, t) => {
			let r = Rh.test(e) ? Uh(t) : void 0;
			r !== void 0 && (n[`--color-kit-${e}`] = r);
		};
		for (let [t, n] of Object.entries(o)) if (t !== "hero" && X(n)) for (let [r, i] of Object.entries(n)) e(t === "template" ? r : `${t}-${r}`, i);
		for (let [t, n] of Object.entries(o)) X(n) || e(t, n);
	}
	for (let [t] of xh) {
		let r = Yh(e, t);
		r === void 0 || Lh.test(r) || (n[`--font-${t}`] = r, n[`--font-kit-${t}`] = r);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var Zh = /^https?:\/\//i, Qh = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function $h(e, t) {
	let n = X(e) ? Z(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = Z(t);
	if (r && Zh.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function eg(e, t) {
	let n = Z(e);
	if (n && !/\s/.test(n)) {
		if (Zh.test(n) || /^data:/i.test(n)) return n;
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
var tg = /^kit-[\w-]+$/i;
function ng(e, t = {}) {
	if (!X(e)) return null;
	let n = (Z(t.publicBaseUrl) ?? "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live").replace(/\/+$/, ""), r = Z(String(e.brandKitTeamId ?? t.teamId ?? "")), i = (e) => r ? `${n}/teams/${encodeURIComponent(r)}/kits/${encodeURIComponent(e)}/brandkit.json` : null, a = Z(e.brandKitUrl);
	if (a) return tg.test(a) ? i(a) : eg(a) ?? null;
	let o = Z(e.brandKitId);
	if (o) return tg.test(o) ? i(o) : null;
	let s = X(e.brandKit?.storage) ? Z(e.brandKit.storage.publicUrl) : void 0;
	return s && Zh.test(s) ? s : null;
}
async function rg(e, t = {}) {
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
var ig = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, ag = {
	primary: "logo",
	mark: "icon"
}, og = {
	primary: "logo.primary",
	mark: "logo.icon"
}, sg = (e) => X(e) ? Z(e.svg) ?? Z(e.png) : void 0;
function cg(e, t = {}) {
	if (!X(e)) return null;
	let n = ig[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = t.background === "dark" ? "dark" : "light", i = $h(e, t.sourceUrl), a = Z(e.name), o = lg(e, n, r, i, a) ?? (n === "wordmark" ? null : ug(e, n, r, i, a));
	return o || n !== "wordmark" ? o : cg(e, {
		...t,
		kind: "primary"
	});
}
function lg(e, t, n, r, i) {
	let a = (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants.filter(X) : []).filter((e) => e.kind === t && sg(e.files)), o = a.find((e) => e.background === n) ?? a.find((e) => e.background === "any") ?? a[0];
	if (!o) return null;
	let s = eg(sg(o.files), r);
	return s ? {
		src: s,
		alt: Z(o.name) ?? i,
		kind: t,
		background: o.background,
		...X(o.minWidth) ? { minWidth: o.minWidth } : {},
		...X(o.clearSpace) ? { clearSpace: o.clearSpace } : {}
	} : null;
}
function ug(e, t, n, r, i) {
	let a = X(e.logos) ? e.logos : {}, o = a[ag[t]];
	if (X(o)) {
		let e = n === "dark" ? "light" : "dark";
		for (let a of [n, e]) {
			let e = o[a], n = eg(X(e) ? e.src ?? e.url : e, r);
			if (n) return {
				src: n,
				alt: Z(o.alt) ?? i,
				kind: t,
				background: a
			};
		}
	}
	let s = Z(e.assignments?.[og[t]]), c = s && a[s] || e.assets?.[t === "mark" ? "icon" : "primary"];
	if (X(c)) {
		let e = eg(c.src ?? c.url, r);
		if (e) return {
			src: e,
			alt: Z(c.alt) ?? Z(c.name) ?? i,
			kind: t
		};
	}
	return null;
}
var dg = {
	photos: "photo",
	icons: "icon",
	graphics: "graphic",
	backgrounds: "background",
	templates: "template"
};
function fg(e, t, n = {}) {
	if (!X(e) || !X(e.collections)) return null;
	let r = e.collections, i = dg[t] ?? t, a = Z(e.assignments?.[`media.${t}`]), o = (a && X(r[a]) ? a : void 0) ?? Object.keys(r).find((e) => X(r[e]) && r[e].type === i);
	if (!o) return null;
	let s = r[o], c = $h(e, n.sourceUrl), l = X(s.versions) ? s.versions : {}, u = [Z(n.versionId), Z(s.defaultVersionId)].find((e) => e && X(l[e])), d = u ? l[u] : void 0, f = X(s.schema?.keys) ? s.schema.keys : {}, p = [];
	d && X(d.items) ? p = [...Object.keys(f).filter((e) => e in d.items), ...Object.keys(d.items).filter((e) => !(e in f))].map((e) => [e, d.items[e]]) : Array.isArray(s.items) && (p = s.items.map((e, t) => [String(X(e) && Z(e.key) ? e.key : t), e]));
	let m = p.flatMap(([e, t]) => {
		if (!X(t)) return [];
		let n = eg(t.src ?? t.url, c);
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
var pg = (e) => typeof e == "string" ? e.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_") : "";
function mg(e, t) {
	let n = Array.isArray(e?.config?.env) ? e.config.env : [];
	for (let e of (Array.isArray(t) ? t : [t]).map(pg)) {
		let t = n.find((t) => X(t) && pg(t.key) === e && Z(t.value));
		if (t) return t.value.trim();
	}
}
function hg(e, t) {
	let n = t === "macro" ? "macro" : "micro", r = e?.config?.maps?.styles?.[n], i = X(r) ? Z(r.url) : void 0;
	if (i) return {
		url: i,
		...Z(r.name) ? { name: Z(r.name) } : {},
		source: "config.maps"
	};
	let a = n.toUpperCase(), o = mg(e, [
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
var gg = /["\\\n\r\f<>]/, _g = (e) => (Array.isArray(e) ? e : X(e) ? Object.values(e) : []).filter(X);
function vg(e) {
	return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : Z(e.cssUrl) ? "css" : void 0;
}
var yg = (e) => Z(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function bg(e) {
	let t = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((e) => e?.weight)).map(Number).filter((e) => Number.isInteger(e) && e >= 1 && e <= 1e3);
	return [...new Set(t)].sort((e, t) => e - t);
}
function xg(e, t) {
	let n = encodeURIComponent(e).replace(/%20/g, "+"), r = bg(t), i = Array.isArray(t.faces) ? t.faces : [], a = Array.isArray(t.styles) ? t.styles : i.map((e) => e?.style), o = r.length > 0 ? `:wght@${r.join(";")}` : "";
	if (a.includes("italic")) {
		let e = (Array.isArray(t.styles) ? (a.includes("normal") ? [0, 1] : [1]).flatMap((e) => (r.length ? r : [400]).map((t) => [e, t])) : i.filter((e) => e?.style === "normal" || e?.style === "italic").map((e) => [+(e.style === "italic"), Number(e.weight)]).filter(([, e]) => Number.isInteger(e) && e >= 1 && e <= 1e3)).sort(([e, t], [n, r]) => e - n || t - r).map((e) => e.join(","));
		o = `:ital,wght@${[...new Set(e)].join(";")}`;
	}
	return `https://fonts.googleapis.com/css2?family=${n}${o}&display=swap`;
}
function Sg(e) {
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
function Cg(e) {
	let t = String(e.format ?? e.src ?? "").toLowerCase();
	return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function wg(e) {
	let t = String(e ?? "").trim();
	return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function Tg(e, t, n) {
	let r = eg(t.src, n);
	if (r && !gg.test(r)) return [
		"@font-face {",
		`  font-family: "${e}";`,
		`  src: url("${r}") format("${Cg(t)}");`,
		`  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
		`  font-weight: ${wg(t.weight)};`,
		"  font-display: swap;",
		"}"
	].join("\n");
}
function Eg(e, t = {}) {
	if (!X(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = $h(e, t?.sourceUrl), r = [], i = [], a = (e) => {
		let t = eg(e, n);
		t && !/^data:/i.test(t) && !r.includes(t) && r.push(t);
	}, o = Dh(e);
	if (o) {
		for (let e of Array.isArray(o.fontStylesheets) ? o.fontStylesheets : []) a(e);
		for (let e of Array.isArray(o.fontFaces) ? o.fontFaces : []) {
			if (!X(e)) continue;
			let t = Z(e.family), r = t ? yg(t) : void 0;
			if (!r || gg.test(r)) continue;
			let a = Tg(r, e, n);
			a && !i.includes(a) && i.push(a);
		}
		return {
			fontFaceCss: i.join("\n"),
			stylesheetUrls: r
		};
	}
	for (let t of _g(e.fonts)) {
		let e = Z(t.family), r = e ? yg(e) : void 0;
		if (!r || gg.test(r)) continue;
		let o = vg(t);
		o && a(Z(t.cssUrl) ? t.cssUrl : o === "google" ? xg(r, t) : void 0);
		for (let e of Array.isArray(t.faces) ? t.faces : []) a(e?.cssUrl);
		if (!o) for (let e of Sg(t)) {
			let t = Tg(r, e, n);
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
var Dg = r(null), Og = typeof window > "u" ? l : u, kg = 1e4;
function Ag(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function jg({ brandKit: e, src: t, defaults: n, sourceUrl: r, onLoad: i, onError: a, className: o, style: s, children: c }) {
	let u = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, [f, p] = m(null);
	l(() => {
		if (!u) return;
		let e = new AbortController();
		return rg(u, { signal: e.signal }).then((t) => {
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
	let h = u && f?.src === u ? f : null, g = h?.brandKit ?? e ?? null, y = h?.brandKit && u ? Ag(u) : r, b = u ? h ? h.brandKit ? "ready" : "error" : "loading" : "idle", x = d(() => {
		let e = $h(g, y);
		return {
			brandKit: g,
			cssVars: Xh(g, { defaults: n }),
			sourceUrl: y,
			status: b,
			logo: (e = {}) => cg(g, {
				...e,
				sourceUrl: y
			}),
			collection: (e, t = {}) => fg(g, e, {
				...t,
				sourceUrl: y
			}),
			mapStyle: (e) => hg(g, e),
			env: (e) => mg(g, e),
			resolveUrl: (t) => eg(t, e)
		};
	}, [
		g,
		y,
		n,
		b
	]), S = d(() => Eg(g, { sourceUrl: y }), [g, y]), [C, w] = m(() => /* @__PURE__ */ new Set()), T = (e) => w((t) => t.has(e) ? t : new Set(t).add(e)), E = S.stylesheetUrls.filter((e) => !C.has(e)), D = E.join("\n"), O = b === "loading" || E.length > 0;
	return Og(() => O ? V.hold() : void 0, [O]), l(() => {
		if (!D) return;
		let e = setTimeout(() => {
			for (let e of D.split("\n")) T(e);
		}, kg);
		return () => clearTimeout(e);
	}, [D]), /* @__PURE__ */ v(Dg.Provider, {
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
function Mg() {
	return c(Dg);
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-utils.ts
var Ng = "uhuu_page_editor";
function Pg(e) {
	return e.kind === "group";
}
function Fg(e) {
	let t = [], n = 1;
	for (let r of e) if (Pg(r)) for (let e of r.pages) t.push({
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
function Ig(e) {
	let t = [], n = 1;
	for (let r of e) if (Pg(r)) {
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
function Lg(e) {
	return Fg(e).length;
}
function Rg(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (Pg(e)) {
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
function zg(e, t) {
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
function Bg(e) {
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
function Vg(e, t = Ng) {
	let n = Bg(e);
	return {
		key: t,
		items: n,
		totalPages: Lg(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Hg(e, t = Ng) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = Bg(n.items);
	return {
		key: t,
		items: r,
		totalPages: Lg(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Ug(e, t, n = Ng) {
	let r = Vg(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function Wg() {
	return Math.random().toString(36).slice(2, 11);
}
function Gg(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? Wg() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function Kg(e, t, n) {
	let r = n?.repeatable ? Wg() : e;
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
function qg(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function Jg(e, t, n) {
	for (let r of t) {
		let t = qg(r.start, n), i = qg(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function Yg(e, t, n = 2) {
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
function Xg(e, t) {
	if (!t || t.mode === "all") return e;
	let n = Lg(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : Yg(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (Pg(t)) {
		let e = t.pages.filter((e) => e.pageNum && Jg(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && Jg(t.pageNum, a, n) && o.push(t);
	return o;
}
function Zg(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : Yg(r, t, i);
	return a.length !== 0 && Jg(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function Qg(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function $g(e, t) {
	return t && Pg(t) ? t.id : e?.id ?? null;
}
function e_(e, t, n) {
	let r = $g(t, n);
	return r ? {
		instanceId: r,
		integration: Qg(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function t_(e, t, n) {
	return e_(e, t, n).integration;
}
function n_(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function r_(e) {
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
function i_(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function a_(e, t, n) {
	let r = r_(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = i_(Qg(e, i) || {}, a, n);
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
function o_(e, t) {
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
var s_ = e.createContext(null);
function c_(e = Ng) {
	return [e];
}
function l_(e, t, n) {
	if (!t) return e;
	if (!e) return t;
	let r = { ...t };
	return n.forEach((t) => {
		e[t] !== void 0 && (r[t] = e[t]);
	}), r;
}
function u_({ payload: t, onPayloadChange: n, children: r, stateKey: i = Ng }) {
	let [a, o] = e.useState(t ?? {}), s = e.useRef(null), c = e.useRef(!1), l = e.useRef(null), u = e.useRef(0), d = e.useRef(!0), f = e.useCallback((e) => {
		try {
			return JSON.stringify(e);
		} catch {
			return String(e);
		}
	}, []), p = e.useMemo(() => c_(i), [i]), m = e.useCallback((e, t) => {
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
				s.current = t, o((e) => t ? l_(e, t, p) : e);
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
		g((n) => a_(n, e, t));
	}, [g]), C = e.useCallback((e, t) => {
		let n = t ?? i;
		g((t) => Ug(t, e, n));
	}, [g, i]), w = e.useCallback((e) => o_(a, e), [a]), T = e.useMemo(() => ({
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
	return /* @__PURE__ */ _(s_.Provider, {
		value: T,
		children: r
	});
}
function d_(e) {
	return e.defaultValue === void 0 ? e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "" : e.defaultValue;
}
function f_(e, t) {
	return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function p_(e, t, n) {
	let r = e.field ?? e.id;
	return {
		...e,
		getValue: (n) => {
			let i = t?.pages?.[n.id]?.[r];
			return i === void 0 ? d_(e) : e.type === "toggle" ? !!i : i;
		},
		onChange: (t, i) => {
			n(t, r, f_(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function m_(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function h_(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function g_(e, t) {
	if (e === "two_pages") return h_(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function __({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function v_({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function y_({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function b_(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function x_(e, t, n, r) {
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
function S_(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function C_(e, t, n) {
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
function w_(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var T_ = 24, E_ = 64, D_ = 1e3, O_ = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${T_}px ${E_}px`,
	overflowAnchor: "none"
};
function k_(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && w_(e.overflowX) && (n = t), !r && w_(e.overflowY) && (r = t), n && r) return {
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
function A_(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function j_(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var M_ = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function N_({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(M_), i = p(null);
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
function P_(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function F_(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? g_(t, r.map(P_).filter((e) => e !== null)) : null;
}
function I_({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(M_), s = p(null), [u, d] = m(0), [f, h] = m(0);
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
function L_({ children: e, className: t = "", defaultZoom: n = 100, minZoom: r = 25, maxZoom: i = 200, onAddPage: a, menuItems: o, hideUI: c, preview: u = "single_page", defaultZoomMode: d = "manual", scrollMode: f = "pane" }) {
	let h = so(), g = c ?? h, { t: y } = Ma(), [b, S] = m(n), [C, w] = m(() => m_(d)), [T, E] = m(() => m_(d) !== "none"), [D, O] = m(0), k = p(null), A = p(null), j = p(null), M = p(null), N = p(b);
	l(() => {
		N.current = b;
	}, [b]);
	let P = s(() => f === "pane" && A.current ? {
		x: A.current,
		y: A.current
	} : k_(k.current), [f]), F = s((e, t, n) => {
		let a = Math.min(Math.max(e, r), i), o = M.current;
		if (!o) {
			S(a), w("none");
			return;
		}
		let s = P(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = C_(c.map((e) => S_(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = S_(u.getBoundingClientRect()), f = b_(d, t, n);
		x(() => {
			S(a), w("none");
		});
		let p = () => {
			let e = S_(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = x_(d, e, f.clientX, f.clientY);
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
		let t = F_(e, u);
		if (!t) return;
		let n = f === "pane" ? A.current : k.current;
		if (!n) return;
		let a = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || a.width, l = f === "pane" ? __({
			paneClientHeight: n.clientHeight || a.height,
			paneTop: a.top,
			viewportHeight: s
		}) : s - Math.max(a.top, 0), d = j.current ? window.getComputedStyle(j.current) : null, { availableWidth: p, availableHeight: m } = v_({
			paneWidth: c,
			paneHeight: l,
			paddingX: d ? Number.parseFloat(d.paddingLeft) + Number.parseFloat(d.paddingRight) : 0,
			paddingY: d ? Number.parseFloat(d.paddingTop) + Number.parseFloat(d.paddingBottom) : 0,
			chromeHeight: j_(e)
		}), h = y_({
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
		let e = window.setTimeout(() => E(!1), D_);
		return () => window.clearTimeout(e);
	}, [T, C]);
	let ee = () => {
		let e = I();
		F(b + 25, e.clientX, e.clientY);
	}, z = () => {
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
			let t = A_(e);
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
	let B = b / 100;
	return g ? /* @__PURE__ */ _(M_.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ _("div", {
			className: t,
			children: e
		})
	}) : /* @__PURE__ */ _(M_.Provider, {
		value: {
			zoom: b,
			scaleValue: B,
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
					/* @__PURE__ */ v(Wm, {
						modal: !1,
						children: [/* @__PURE__ */ _(Gm, {
							asChild: !0,
							children: /* @__PURE__ */ v(go, {
								variant: "ghost",
								size: "sm",
								title: y("zoom.menu"),
								className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
								children: [
									Math.round(b),
									"%",
									/* @__PURE__ */ _(ki, { className: "uhuu:w-3 uhuu:h-3 uhuu:ml-1 uhuu:opacity-60" })
								]
							})
						}), /* @__PURE__ */ v(Ym, {
							className: "uhuu:w-52 uhuu:p-1.5",
							align: "end",
							children: [
								/* @__PURE__ */ v(Xm, {
									onClick: () => R("width"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "width" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(Hi, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitWidth") })]
								}),
								/* @__PURE__ */ v(Xm, {
									onClick: () => R("height"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "height" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(Ui, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitHeight") })]
								}),
								/* @__PURE__ */ v(Xm, {
									onClick: () => R("both"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${C === "both" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ _(Ii, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ _("span", { children: y("zoom.fitPage") })]
								}),
								/* @__PURE__ */ _(eh, { className: "uhuu:my-1.5" }),
								/* @__PURE__ */ v("div", {
									className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:px-3 uhuu:py-2.5",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ _(go, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), z();
											},
											disabled: b <= r,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: y("zoom.zoomOut"),
											children: /* @__PURE__ */ _(Ki, { className: "uhuu:w-4 uhuu:h-4" })
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
										/* @__PURE__ */ _(go, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), ee();
											},
											disabled: b >= i,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: y("zoom.zoomIn"),
											children: /* @__PURE__ */ _(Gi, { className: "uhuu:w-4 uhuu:h-4" })
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
						...O_,
						visibility: "hidden"
					} : O_,
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
var R_ = Object.defineProperty, z_ = (e, t) => R_(e, "name", {
	value: t,
	configurable: !0
}), B_ = "Dialog", [V_, H_] = /* @__PURE__ */ jo(B_), [U_, W_] = V_(B_), G_ = /* @__PURE__ */ z_((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = lc(), [f, p] = Ho({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: B_
	}), [m, h] = e.useState(0), [g, v] = e.useState(0);
	return /* @__PURE__ */ _(U_, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Ec(),
		titleId: Ec(),
		descriptionId: Ec(),
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
}, "Dialog"), K_ = "DialogTrigger", q_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = W_(K_, n), a = J(t, i.triggerRef);
	return /* @__PURE__ */ _(ds.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": fv(i.open),
		...r,
		ref: a,
		onClick: q(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), J_ = "DialogPortal", [Y_, X_] = V_(J_, { forceMount: void 0 }), Z_ = /* @__PURE__ */ z_((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = W_(J_, n);
	return /* @__PURE__ */ _(Y_, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ _(dd, {
			present: r || o.open,
			children: /* @__PURE__ */ _(sd, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), Q_ = "DialogOverlay", $_ = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let n = X_(Q_, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = W_(Q_, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ _(dd, {
		present: r || a.open,
		children: /* @__PURE__ */ _(tv, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), ev = /* @__PURE__ */ Yo("DialogOverlay.RemoveScroll"), tv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = W_(Q_, r), o = J(n, Hs());
	return /* @__PURE__ */ _(dp, {
		as: ev,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ _(ds.div, {
			"data-state": fv(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), nv = "DialogContent", rv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let n = X_(nv, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = W_(nv, e.__scopeDialog);
	return /* @__PURE__ */ _(dd, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ _(iv, {
			...i,
			ref: t
		}) : /* @__PURE__ */ _(av, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), iv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(t, n) {
	let r = W_(nv, t.__scopeDialog), i = e.useRef(null), a = J(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return nf(e);
	}, []), /* @__PURE__ */ _(ov, {
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
}, "DialogContentModal")), av = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(t, n) {
	let r = W_(nv, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ _(ov, {
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
}, "DialogContentNonModal")), ov = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = W_(nv, n);
	return $s(), /* @__PURE__ */ _(cc, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ _(oc, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ _(Vs, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? dv(o, l.descriptionId) : o,
				"data-state": fv(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), sv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = W_("DialogTitle", n), { setTitleCount: a } = i;
	return No(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ _(ds.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), cv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = W_("DialogDescription", n), { setDescriptionCount: a } = i;
	return No(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ _(ds.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), lv = "DialogClose", uv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ z_(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = W_(lv, n);
	return /* @__PURE__ */ _(ds.button, {
		type: "button",
		...r,
		ref: t,
		onClick: q(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function dv(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
z_(dv, "concatAriaDescribedby");
function fv(e) {
	return e ? "open" : "closed";
}
z_(fv, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var pv = G_, mv = Z_, hv = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _($_, {
	className: li("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
hv.displayName = $_.displayName;
var gv = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = Ji(), o = Ma().t("dialog.close");
	return /* @__PURE__ */ v(mv, {
		container: a || void 0,
		children: [/* @__PURE__ */ _(hv, {}), /* @__PURE__ */ v(rv, {
			ref: i,
			className: li("uhuu:fixed uhuu:z-50 uhuu:gap-4 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:transition uhuu:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out uhuu:data-[state=closed]:duration-300 uhuu:data-[state=open]:duration-500", e === "top" && "uhuu:inset-x-0 uhuu:top-0 uhuu:border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "uhuu:inset-x-0 uhuu:bottom-0 uhuu:border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "uhuu:inset-y-0 uhuu:left-0 uhuu:h-full uhuu:w-3/4 uhuu:border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left uhuu:sm:max-w-sm", e === "right" && "uhuu:inset-y-0 uhuu:right-0 uhuu:h-full uhuu:w-3/4 uhuu:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right uhuu:sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ v(uv, {
				className: "uhuu:absolute uhuu:right-4 uhuu:top-4 uhuu:rounded-sm uhuu:opacity-70 uhuu:ring-offset-(--uhuu-shell-surface) uhuu:transition-opacity uhuu:hover:opacity-100 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400 uhuu:focus:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ _(Wi, { className: "uhuu:h-4 uhuu:w-4" }), /* @__PURE__ */ _("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})]
		})]
	});
});
gv.displayName = rv.displayName;
var _v = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: li("uhuu:flex uhuu:flex-col uhuu:space-y-2 uhuu:text-center uhuu:sm:text-left", e),
	...t
});
_v.displayName = "SheetHeader";
var vv = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: li("uhuu:flex uhuu:flex-col-reverse uhuu:sm:flex-row uhuu:sm:justify-end uhuu:sm:space-x-2", e),
	...t
});
vv.displayName = "SheetFooter";
var yv = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(sv, {
	ref: n,
	className: li("uhuu:text-lg uhuu:font-medium uhuu:text-gray-900", e),
	...t
}));
yv.displayName = sv.displayName;
var bv = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(cv, {
	ref: n,
	className: li("uhuu:text-sm uhuu:text-gray-500", e),
	...t
}));
bv.displayName = cv.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/document-typography.js
var xv = [
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
], Sv = (e) => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
function Cv(e = typeof document > "u" ? void 0 : document) {
	let t = e?.querySelector("[data-uhuu-interactive]") ?? e?.body, n = t ? e.defaultView?.getComputedStyle(t) : void 0;
	if (!n) return;
	let r = {};
	for (let e of xv) {
		let t = n.getPropertyValue(e);
		t && (r[Sv(e)] = t);
	}
	return r;
}
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
function wv(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = I.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = u * 3.779527559, g = d * 3.779527559, y, b = () => (y ??= Cv() ?? {}, {
		...y,
		width: `${h}px`,
		height: `${g}px`,
		backgroundColor: "white",
		pointerEvents: "none"
	});
	return (e, r, i) => {
		let a = e.strictPosition, o = a === "start" || a === "end";
		if (e.kind === "group") {
			let r = e.firstPageId, l = e.firstPageComponentKey ?? r, u = o_(n, {
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
						children: [/* @__PURE__ */ _(Fi, { className: "uhuu:size-3" }), /* @__PURE__ */ _("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
			let r = e.pageId, l = e.pageComponentKey ?? r, u = o_(n, {
				id: r,
				componentKey: l
			}), d = e.pageComponent || (l ? t[l] : null), f = r ? t_(n, { id: r }) : void 0;
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
						children: [/* @__PURE__ */ _(Fi, { className: "uhuu:size-3" }), /* @__PURE__ */ _("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
function Tv({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, pageComponents: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "uhuu-page-order-grid-cols" }) {
	let l = Ma(), { t: u, localize: d } = l, [f, p] = e.useState(""), m = e.useMemo(() => {
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
	}, C = e.useMemo(() => a ? wv({
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
	return /* @__PURE__ */ _(pv, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ v(gv, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:gap-0 uhuu:bg-gray-50 uhuu:p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ _(_v, {
				className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4 uhuu:bg-(--uhuu-shell-surface)",
				children: /* @__PURE__ */ v("div", {
					className: "uhuu:flex uhuu:items-end uhuu:gap-3",
					children: [
						/* @__PURE__ */ _("div", {
							className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
							children: /* @__PURE__ */ _(zi, { className: "uhuu:w-4 uhuu:h-4" })
						}),
						/* @__PURE__ */ v("div", {
							className: "uhuu:flex-1",
							children: [/* @__PURE__ */ _(yv, {
								className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
								children: u("addDialog.title")
							}), /* @__PURE__ */ _(bv, {
								className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
								children: u("addDialog.description")
							})]
						}),
						/* @__PURE__ */ v("div", {
							className: "uhuu:mb-0.5 uhuu:mr-8 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2 uhuu:py-1 uhuu:text-gray-400 uhuu:focus-within:border-gray-400 uhuu:focus-within:ring-2 uhuu:focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ _(Bi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:shrink-0" }),
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
							children: /* @__PURE__ */ _(zi, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
												children: /* @__PURE__ */ _(zi, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-blue-600" })
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
												children: /* @__PURE__ */ _(zi, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
									children: /* @__PURE__ */ _(zi, { className: "uhuu:w-4 uhuu:h-4 uhuu:text-white" })
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
function Ev() {
	var e = [...arguments];
	return d(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var Dv = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Ov(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function kv(e) {
	return "nodeType" in e;
}
function Av(e) {
	return e ? Ov(e) ? e : kv(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function jv(e) {
	let { Document: t } = Av(e);
	return e instanceof t;
}
function Mv(e) {
	return !Ov(e) && e instanceof Av(e).HTMLElement;
}
function Nv(e) {
	return e instanceof Av(e).SVGElement;
}
function Pv(e) {
	return e ? Ov(e) ? e.document : kv(e) ? jv(e) ? e : Mv(e) || Nv(e) ? e.ownerDocument : document : document : document;
}
var Fv = Dv ? u : l;
function Iv(e) {
	let t = p(e);
	return Fv(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Lv() {
	let e = p(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function Rv(e, t) {
	t === void 0 && (t = [e]);
	let n = p(e);
	return Fv(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function zv(e, t) {
	let n = p();
	return d(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function Bv(e) {
	let t = Iv(e), n = p(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function Vv(e) {
	let t = p();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var Hv = {};
function Uv(e, t) {
	return d(() => {
		if (t) return t;
		let n = Hv[e] == null ? 0 : Hv[e] + 1;
		return Hv[e] = n, e + "-" + n;
	}, [e, t]);
}
function Wv(e) {
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
var Gv = /*#__PURE__*/ Wv(1), Kv = /*#__PURE__*/ Wv(-1);
function qv(e) {
	return "clientX" in e && "clientY" in e;
}
function Jv(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Av(e.target);
	return t && e instanceof t;
}
function Yv(e) {
	if (!e) return !1;
	let { TouchEvent: t } = Av(e.target);
	return t && e instanceof t;
}
function Xv(e) {
	if (Yv(e)) {
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
	return qv(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var Zv = /*#__PURE__*/ Object.freeze({
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
		if (e) return [Zv.Translate.toString(e), Zv.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), Qv = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function $v(e) {
	return e.matches(Qv) ? e : e.querySelector(Qv);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var ey = { display: "none" };
function ty(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: ey
	}, r);
}
function ny(e) {
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
function ry() {
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
var iy = /*#__PURE__*/ r(null);
function ay(e) {
	let t = c(iy);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function oy() {
	let [e] = m(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var sy = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, cy = {
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
function ly(e) {
	let { announcements: n = cy, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = sy } = e, { announce: o, announcement: s } = ry(), c = Uv("DndLiveRegion"), [u, f] = m(!1);
	if (l(() => {
		f(!0);
	}, []), ay(d(() => ({
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
	let p = t.createElement(t.Fragment, null, t.createElement(ty, {
		id: i,
		value: a.draggable
	}), t.createElement(ny, {
		id: c,
		announcement: s
	}));
	return r ? b(p, r) : p;
}
var uy;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(uy ||= {});
function dy() {}
function fy(e, t) {
	return d(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function py() {
	var e = [...arguments];
	return d(() => [...e].filter((e) => e != null), [...e]);
}
var my = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function hy(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function gy(e, t) {
	let n = Xv(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function _y(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function vy(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function yy(e) {
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
function by(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function xy(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var Sy = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = xy(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = hy(xy(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(_y);
}, Cy = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = yy(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = yy(r), o = i.reduce((e, t, r) => e + hy(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(_y);
};
function wy(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var Ty = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = wy(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(vy);
};
function Ey(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function Dy(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : my;
}
function Oy(e) {
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
var ky = /*#__PURE__*/ Oy(1);
function Ay(e) {
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
function jy(e, t, n) {
	let r = Ay(t);
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
var My = { ignoreTransform: !1 };
function Ny(e, t) {
	t === void 0 && (t = My);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = Av(e).getComputedStyle(e);
		t && (n = jy(n, t, r));
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
function Py(e) {
	return Ny(e, { ignoreTransform: !0 });
}
function Fy(e) {
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
function Iy(e, t) {
	return t === void 0 && (t = Av(e).getComputedStyle(e)), t.position === "fixed";
}
function Ly(e, t) {
	t === void 0 && (t = Av(e).getComputedStyle(e));
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
function Ry(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (jv(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!Mv(i) || Nv(i) || n.includes(i)) return n;
		let a = Av(e).getComputedStyle(i);
		return i !== e && Ly(i, a) && n.push(i), Iy(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function zy(e) {
	let [t] = Ry(e, 1);
	return t ?? null;
}
function By(e) {
	return !Dv || !e ? null : Ov(e) ? e : kv(e) ? jv(e) || e === Pv(e).scrollingElement ? window : Mv(e) ? e : null : null;
}
function Vy(e) {
	return Ov(e) ? e.scrollX : e.scrollLeft;
}
function Hy(e) {
	return Ov(e) ? e.scrollY : e.scrollTop;
}
function Uy(e) {
	return {
		x: Vy(e),
		y: Hy(e)
	};
}
var Wy;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Wy ||= {});
function Gy(e) {
	return !Dv || !e ? !1 : e === document.scrollingElement;
}
function Ky(e) {
	let t = {
		x: 0,
		y: 0
	}, n = Gy(e) ? {
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
var qy = {
	x: .2,
	y: .2
};
function Jy(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = qy);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = Ky(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = Wy.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = Wy.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = Wy.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = Wy.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function Yy(e) {
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
function Xy(e) {
	return e.reduce((e, t) => Gv(e, Uy(t)), my);
}
function Zy(e) {
	return e.reduce((e, t) => e + Vy(t), 0);
}
function Qy(e) {
	return e.reduce((e, t) => e + Hy(t), 0);
}
function $y(e, t) {
	if (t === void 0 && (t = Ny), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	zy(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var eb = [[
	"x",
	["left", "right"],
	Zy
], [
	"y",
	["top", "bottom"],
	Qy
]], tb = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = Ry(t), r = Xy(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of eb) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, nb = class {
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
function rb(e) {
	let { EventTarget: t } = Av(e);
	return e instanceof t ? e : Pv(e);
}
function ib(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var ab;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ab ||= {});
function ob(e) {
	e.preventDefault();
}
function sb(e) {
	e.stopPropagation();
}
var Q;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Q ||= {});
var cb = {
	start: [Q.Space, Q.Enter],
	cancel: [Q.Esc],
	end: [
		Q.Space,
		Q.Enter,
		Q.Tab
	]
}, lb = (e, t) => {
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
}, ub = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new nb(Pv(t)), this.windowListeners = new nb(Av(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(ab.Resize, this.handleCancel), this.windowListeners.add(ab.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ab.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && $y(n), t(my);
	}
	handleKeyDown(e) {
		if (Jv(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = cb, coordinateGetter: a = lb, scrollBehavior: o = "smooth" } = r, { code: s } = e;
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
			} : my;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = Kv(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = Ky(n), p = Yy(n), m = {
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
				this.handleMove(e, Gv(Kv(u, this.referenceCoordinates), r));
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
ub.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = cb, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function db(e) {
	return !!(e && "distance" in e);
}
function fb(e) {
	return !!(e && "delay" in e);
}
var pb = class {
	constructor(e, t, n) {
		n === void 0 && (n = rb(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = Pv(i), this.documentListeners = new nb(this.document), this.listeners = new nb(n), this.windowListeners = new nb(Av(i)), this.initialCoordinates = Xv(r) ?? my, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ab.Resize, this.handleCancel), this.windowListeners.add(ab.DragStart, ob), this.windowListeners.add(ab.VisibilityChange, this.handleCancel), this.windowListeners.add(ab.ContextMenu, ob), this.documentListeners.add(ab.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (fb(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (db(t)) {
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
		e && (this.activated = !0, this.documentListeners.add(ab.Click, sb, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(ab.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = Xv(e) ?? my, s = Kv(n, o);
		if (!t && a) {
			if (db(a)) {
				if (a.tolerance != null && ib(s, a.tolerance)) return this.handleCancel();
				if (ib(s, a.distance)) return this.handleStart();
			}
			if (fb(a) && ib(s, a.tolerance)) return this.handleCancel();
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
}, mb = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, hb = class extends pb {
	constructor(e) {
		let { event: t } = e, n = Pv(t.target);
		super(e, mb, n);
	}
};
hb.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var gb = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, _b;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(_b ||= {});
var vb = class extends pb {
	constructor(e) {
		super(e, gb, Pv(e.event.target));
	}
};
vb.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== _b.RightClick && (r?.({ event: n }), !0);
	}
}];
var yb = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, bb = class extends pb {
	constructor(e) {
		super(e, yb);
	}
	static setup() {
		return window.addEventListener(yb.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(yb.move.name, e);
		};
		function e() {}
	}
};
bb.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var xb;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(xb ||= {});
var Sb;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Sb ||= {});
function Cb(e) {
	let { acceleration: t, activator: n = xb.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = Sb.TreeOrder, pointerCoordinates: u, scrollableAncestors: f, scrollableAncestorRects: m, delta: h, threshold: g } = e, _ = Tb({
		delta: h,
		disabled: !a
	}), [v, y] = Lv(), b = p({
		x: 0,
		y: 0
	}), x = p({
		x: 0,
		y: 0
	}), S = d(() => {
		switch (n) {
			case xb.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case xb.DraggableRect: return i;
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
	}, []), T = d(() => c === Sb.TreeOrder ? [...f].reverse() : f, [c, f]);
	l(() => {
		if (!a || !f.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = f.indexOf(e), i = m[n];
				if (!i) continue;
				let { direction: a, speed: s } = Jy(e, i, S, t, g);
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
var wb = {
	x: {
		[Wy.Backward]: !1,
		[Wy.Forward]: !1
	},
	y: {
		[Wy.Backward]: !1,
		[Wy.Forward]: !1
	}
};
function Tb(e) {
	let { delta: t, disabled: n } = e, r = Vv(t);
	return zv((e) => {
		if (n || !r || !e) return wb;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[Wy.Backward]: e.x[Wy.Backward] || i.x === -1,
				[Wy.Forward]: e.x[Wy.Forward] || i.x === 1
			},
			y: {
				[Wy.Backward]: e.y[Wy.Backward] || i.y === -1,
				[Wy.Forward]: e.y[Wy.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function Eb(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return zv((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function Db(e, t) {
	return d(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var Ob;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Ob ||= {});
var kb;
(function(e) {
	e.Optimized = "optimized";
})(kb ||= {});
var Ab = /*#__PURE__*/ new Map();
function jb(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = m(null), { frequency: c, measure: u, strategy: d } = i, f = p(e), h = b(), g = Rv(h), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = p(null), y = zv((t) => {
		if (h && !n) return Ab;
		if (!t || t === Ab || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new tb(u(e), e) : null;
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
			case Ob.Always: return !1;
			case Ob.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function Mb(e, t) {
	return zv((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Nb(e, t) {
	return Mb(e, t);
}
function Pb(e) {
	let { callback: t, disabled: n } = e, r = Iv(t), i = d(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Fb(e) {
	let { callback: t, disabled: n } = e, r = Iv(t), i = d(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Ib(e) {
	return new tb(Ny(e), e);
}
function Lb(e, t, n) {
	t === void 0 && (t = Ib);
	let [r, i] = m(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = Pb({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = Fb({ callback: a });
	return Fv(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function Rb(e) {
	return Dy(e, Mb(e));
}
var zb = [];
function Bb(e) {
	let t = p(e), n = zv((n) => e ? n && n !== zb && e && t.current && e.parentNode === t.current.parentNode ? n : Ry(e) : zb, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function Vb(e) {
	let [t, n] = m(null), r = p(e), i = s((e) => {
		let t = By(e.target);
		t && n((e) => e ? (e.set(t, Uy(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = By(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Uy(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				By(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), d(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => Gv(e, t), my) : Xy(e) : my, [e, t]);
}
function Hb(e, t) {
	t === void 0 && (t = []);
	let n = p(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== my;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? Kv(e, n.current) : my;
}
function Ub(e) {
	l(() => {
		if (!Dv) return;
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
function Wb(e, t) {
	return d(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function Gb(e) {
	return d(() => e ? Fy(e) : null, [e]);
}
var Kb = [];
function qb(e, t) {
	t === void 0 && (t = Ny);
	let [n] = e, r = Gb(n ? Av(n) : null), [i, a] = m(Kb);
	function o() {
		a(() => e.length ? e.map((e) => Gy(e) ? r : new tb(t(e), e)) : Kb);
	}
	let s = Fb({ callback: o });
	return Fv(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function Jb(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return Mv(t) ? t : e;
}
function Yb(e) {
	let { measure: t } = e, [n, r] = m(null), i = Fb({ callback: s((e) => {
		for (let { target: n } of e) if (Mv(n)) {
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
	}, [t]) }), [a, o] = Bv(s((e) => {
		let n = Jb(e);
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
var Xb = [{
	sensor: hb,
	options: {}
}, {
	sensor: ub,
	options: {}
}], Zb = { current: {} }, Qb = {
	draggable: { measure: Py },
	droppable: {
		measure: Py,
		strategy: Ob.WhileDragging,
		frequency: kb.Optimized
	},
	dragOverlay: { measure: Ny }
}, $b = class extends Map {
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
}, ex = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new $b(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: dy
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: Qb,
	measureDroppableContainers: dy,
	windowRect: null,
	measuringScheduled: !1
}, tx = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: dy,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: dy
}, nx = /*#__PURE__*/ r(tx), rx = /*#__PURE__*/ r(ex);
function ix() {
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
		droppable: { containers: new $b() }
	};
}
function ax(e, t) {
	switch (t.type) {
		case uy.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case uy.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case uy.DragEnd:
		case uy.DragCancel: return {
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
		case uy.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new $b(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case uy.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new $b(e.droppable.containers);
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
		case uy.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new $b(e.droppable.containers);
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
function ox(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(nx), a = Vv(r), o = Vv(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!Jv(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = $v(e);
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
function sx(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function cx(e) {
	return d(() => ({
		draggable: {
			...Qb.draggable,
			...e?.draggable
		},
		droppable: {
			...Qb.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...Qb.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function lx(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = p(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	Fv(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = Dy(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = zy(e);
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
var ux = /*#__PURE__*/ r({
	...my,
	scaleX: 1,
	scaleY: 1
}), dx;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(dx ||= {});
var fx = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = Xb, collisionDetection: c = Ty, measuring: u, modifiers: h, ...g } = e, [_, v] = f(ax, void 0, ix), [y, b] = oy(), [x, C] = m(dx.Uninitialized), w = x === dx.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = p({
		initial: null,
		translated: null
	}), j = d(() => T == null ? null : {
		id: T,
		data: k?.data ?? Zb,
		rect: A
	}, [T, k]), M = p(null), [N, P] = m(null), [F, I] = m(null), L = Rv(g, Object.values(g)), R = Uv("DndDescribedBy", n), ee = d(() => O.getEnabled(), [O]), z = cx(u), { droppableRects: B, measureDroppableContainers: V, measuringScheduled: te } = jb(ee, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: z.droppable
	}), ne = Eb(E, T), H = d(() => F ? Xv(F) : null, [F]), re = Ne(), ie = Nb(ne, z.draggable.measure);
	lx({
		activeNode: T == null ? null : E.get(T),
		config: re.layoutShiftCompensation,
		initialRect: ie,
		measure: z.draggable.measure
	});
	let U = Lb(ne, z.draggable.measure, ie), ae = Lb(ne ? ne.parentElement : null), oe = p({
		activatorEvent: null,
		active: null,
		activeNode: ne,
		collisionRect: null,
		collisions: null,
		droppableRects: B,
		draggableNodes: E,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: O,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), se = O.getNodeFor(oe.current.over?.id), ce = Yb({ measure: z.dragOverlay.measure }), le = ce.nodeRef.current ?? ne, ue = w ? ce.rect ?? U : null, de = !!(ce.nodeRef.current && ce.rect), fe = Rb(de ? null : U), pe = Gb(le ? Av(le) : null), me = Bb(w ? se ?? ne : null), he = qb(me), ge = sx(h, {
		transform: {
			x: D.x - fe.x,
			y: D.y - fe.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: F,
		active: j,
		activeNodeRect: U,
		containerNodeRect: ae,
		draggingNodeRect: ue,
		over: oe.current.over,
		overlayNodeRect: ce.rect,
		scrollableAncestors: me,
		scrollableAncestorRects: he,
		windowRect: pe
	}), _e = H ? Gv(H, D) : null, ve = Vb(me), ye = Hb(ve), be = Hb(ve, [U]), xe = Gv(ge, ye), Se = ue ? ky(ue, ge) : null, Ce = j && Se ? c({
		active: j,
		collisionRect: Se,
		droppableRects: B,
		droppableContainers: ee,
		pointerCoordinates: _e
	}) : null, we = by(Ce, "id"), [Te, Ee] = m(null), De = Ey(de ? ge : Gv(ge, be), Te?.rect ?? null, U), Oe = p(null), ke = s((e, t) => {
		let { sensor: n, options: r } = t;
		if (M.current == null) return;
		let i = E.get(M.current);
		if (!i) return;
		let a = e.nativeEvent, o = new n({
			active: M.current,
			activeNode: i,
			event: a,
			options: r,
			context: oe,
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
					r?.(i), C(dx.Initializing), v({
						type: uy.DragStart,
						initialCoordinates: e,
						active: t
					}), y({
						type: "onDragStart",
						event: i
					}), P(Oe.current), I(a);
				});
			},
			onMove(e) {
				v({
					type: uy.DragMove,
					coordinates: e
				});
			},
			onEnd: s(uy.DragEnd),
			onCancel: s(uy.DragCancel)
		});
		Oe.current = o;
		function s(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = oe.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = L.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === uy.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = uy.DragCancel);
				}
				M.current = null, S(() => {
					v({ type: e }), C(dx.Uninitialized), Ee(null), P(null), I(null), Oe.current = null;
					let t = e === uy.DragEnd ? "onDragEnd" : "onDragCancel";
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
	}, [E]), Ae = Db(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, ke(n, t));
	}, [E, ke]));
	Ub(o), Fv(() => {
		U && x === dx.Initializing && C(dx.Initialized);
	}, [U, x]), l(() => {
		let { onDragMove: e } = L.current, { active: t, activatorEvent: n, collisions: r, over: i } = oe.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: xe.x,
				y: xe.y
			},
			over: i
		};
		S(() => {
			e?.(a), y({
				type: "onDragMove",
				event: a
			});
		});
	}, [xe.x, xe.y]), l(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = oe.current;
		if (!e || M.current == null || !t || !i) return;
		let { onDragOver: a } = L.current, o = r.get(we), s = o && o.rect.current ? {
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
			Ee(s), a?.(c), y({
				type: "onDragOver",
				event: c
			});
		});
	}, [we]), Fv(() => {
		oe.current = {
			activatorEvent: F,
			active: j,
			activeNode: ne,
			collisionRect: Se,
			collisions: Ce,
			droppableRects: B,
			draggableNodes: E,
			draggingNode: le,
			draggingNodeRect: ue,
			droppableContainers: O,
			over: Te,
			scrollableAncestors: me,
			scrollAdjustedTranslate: xe
		}, A.current = {
			initial: ue,
			translated: Se
		};
	}, [
		j,
		ne,
		Ce,
		Se,
		E,
		le,
		ue,
		B,
		O,
		Te,
		me,
		xe
	]), Cb({
		...re,
		delta: D,
		draggingRect: Se,
		pointerCoordinates: _e,
		scrollableAncestors: me,
		scrollableAncestorRects: he
	});
	let je = d(() => ({
		active: j,
		activeNode: ne,
		activeNodeRect: U,
		activatorEvent: F,
		collisions: Ce,
		containerNodeRect: ae,
		dragOverlay: ce,
		draggableNodes: E,
		droppableContainers: O,
		droppableRects: B,
		over: Te,
		measureDroppableContainers: V,
		scrollableAncestors: me,
		scrollableAncestorRects: he,
		measuringConfiguration: z,
		measuringScheduled: te,
		windowRect: pe
	}), [
		j,
		ne,
		U,
		F,
		Ce,
		ae,
		ce,
		E,
		O,
		B,
		Te,
		V,
		me,
		he,
		z,
		te,
		pe
	]), Me = d(() => ({
		activatorEvent: F,
		activators: Ae,
		active: j,
		activeNodeRect: U,
		ariaDescribedById: { draggable: R },
		dispatch: v,
		draggableNodes: E,
		over: Te,
		measureDroppableContainers: V
	}), [
		F,
		Ae,
		j,
		U,
		v,
		R,
		E,
		Te,
		V
	]);
	return t.createElement(iy.Provider, { value: b }, t.createElement(nx.Provider, { value: Me }, t.createElement(rx.Provider, { value: je }, t.createElement(ux.Provider, { value: De }, a)), t.createElement(ox, { disabled: r?.restoreFocus === !1 })), t.createElement(ly, {
		...r,
		hiddenTextDescribedById: R
	}));
	function Ne() {
		let e = N?.autoScrollEnabled === !1, t = typeof i == "object" ? i.enabled === !1 : i === !1, n = w && !e && !t;
		return typeof i == "object" ? {
			...i,
			enabled: n
		} : { enabled: n };
	}
}), px = /*#__PURE__*/ r(null), mx = "button", hx = "Draggable";
function gx(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = Uv(hx), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: f, draggableNodes: p, over: m } = c(nx), { role: h = mx, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? ux : px), [b, x] = Bv(), [S, C] = Bv(), w = Wb(o, t), T = Rv(n);
	return Fv(() => (p.set(t, {
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
			"aria-pressed": v && h === mx ? !0 : void 0,
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
function _x() {
	return c(rx);
}
var vx = "Droppable", yx = { timeout: 25 };
function bx(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = Uv(vx), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(nx), m = p({ disabled: n }), h = p(!1), g = p(null), _ = p(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...yx,
		...i
	}, x = Rv(y ?? r), S = Fb({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = Bv(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = Rv(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: uy.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: uy.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== m.current.disabled && (u({
			type: uy.SetDroppableDisabled,
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
function xx(e) {
	let { animation: r, children: i } = e, [a, o] = m(null), [s, c] = m(null), l = Vv(i);
	return !i && !a && l && o(l), Fv(() => {
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
var Sx = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function Cx(e) {
	let { children: n } = e;
	return t.createElement(nx.Provider, { value: tx }, t.createElement(ux.Provider, { value: Sx }, n));
}
var wx = {
	position: "fixed",
	touchAction: "none"
}, Tx = (e) => Jv(e) ? "transform 250ms ease" : void 0, Ex = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = Tx } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...wx,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: Zv.Transform.toString(f),
		transformOrigin: a && i ? gy(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), Dx = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: Zv.Transform.toString(t) }, { transform: Zv.Transform.toString(n) }];
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
function Ox(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return Iv((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = Jb(a);
		if (!c) return;
		let { transform: l } = Av(a).getComputedStyle(a), u = Ay(l);
		if (!u) return;
		let d = typeof t == "function" ? t : kx(t);
		return $y(s, i.draggable.measure), d({
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
function kx(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...Dx,
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
var Ax = 0;
function jx(e) {
	return d(() => {
		if (e != null) return Ax++, Ax;
	}, [e]);
}
var Mx = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = _x(), w = c(ux), T = jx(p?.id), E = sx(s, {
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
	}), D = Mb(m), O = Ox({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(Cx, null, t.createElement(xx, { animation: O }, p && T ? t.createElement(Ex, {
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
function Nx(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Px(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function Fx(e) {
	return e !== null && e >= 0;
}
function Ix(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Lx(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var Rx = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = Nx(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, zx = "Sortable", Bx = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: zx,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: Rx,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function Vx(e) {
	let { children: n, id: r, items: i, strategy: a = Rx, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: f, measureDroppableContainers: m } = _x(), h = Uv(zx, r), g = c.rect !== null, _ = d(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = f ? _.indexOf(f.id) : -1, x = p(_), S = !Ix(_, x.current), C = b !== -1 && y === -1 || S, w = Lx(o);
	Fv(() => {
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
		sortedRects: Px(_, u),
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
	return t.createElement(Bx.Provider, { value: T }, n);
}
var Hx = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return Nx(n, r, i).indexOf(t);
}, Ux = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, Wx = {
	duration: 200,
	easing: "ease"
}, Gx = "transform", Kx = /*#__PURE__*/ Zv.Transition.toString({
	property: Gx,
	duration: 0,
	easing: "linear"
}), qx = { roleDescription: "sortable" };
function Jx(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = m(null), s = p(n);
	return Fv(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = Ny(r.current, { ignoreTransform: !0 }), n = {
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
function Yx(e) {
	let { animateLayoutChanges: t = Ux, attributes: n, disabled: r, data: i, getNewIndex: a = Hx, id: o, strategy: s, resizeObserverConfig: u, transition: f = Wx } = e, { items: m, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(Bx), C = Xx(r, _), w = m.indexOf(o), T = d(() => ({
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
	]), E = d(() => m.slice(m.indexOf(o)), [m, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = bx({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: R, setActivatorNodeRef: ee, transform: z } = gx({
		id: o,
		data: T,
		attributes: {
			...qx,
			...n
		},
		disabled: C.draggable
	}), B = Ev(A, F), V = !!j, te = V && !v && Fx(g) && Fx(b), ne = !x && L, H = te ? (ne && te ? z : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, re = Fx(g) && Fx(b) ? a({
		id: o,
		items: m,
		activeIndex: g,
		overIndex: b
	}) : w, ie = j?.id, U = p({
		activeId: ie,
		items: m,
		newIndex: re,
		containerId: h
	}), ae = m !== U.current.items, oe = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: V,
		id: o,
		index: w,
		items: m,
		newIndex: U.current.newIndex,
		previousItems: U.current.items,
		previousContainerId: U.current.containerId,
		transition: f,
		wasDragging: U.current.activeId != null
	}), se = Jx({
		disabled: !oe,
		index: w,
		node: O,
		rect: D
	});
	return l(() => {
		V && U.current.newIndex !== re && (U.current.newIndex = re), h !== U.current.containerId && (U.current.containerId = h), m !== U.current.items && (U.current.items = m);
	}, [
		V,
		re,
		h,
		m
	]), l(() => {
		if (ie === U.current.activeId) return;
		if (ie != null && U.current.activeId == null) {
			U.current.activeId = ie;
			return;
		}
		let e = setTimeout(() => {
			U.current.activeId = ie;
		}, 50);
		return () => clearTimeout(e);
	}, [ie]), {
		active: j,
		activeIndex: g,
		attributes: P,
		data: T,
		rect: D,
		index: w,
		newIndex: re,
		items: m,
		isOver: k,
		isSorting: V,
		isDragging: L,
		listeners: I,
		node: O,
		overIndex: b,
		over: R,
		setNodeRef: B,
		setActivatorNodeRef: ee,
		setDroppableNodeRef: A,
		setDraggableNodeRef: F,
		transform: se ?? H,
		transition: ce()
	};
	function ce() {
		if (se || ae && U.current.newIndex === w) return Kx;
		if (!(ne && !Jv(M) || !f) && (V || oe)) return Zv.Transition.toString({
			...f,
			property: Gx
		});
	}
}
function Xx(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function Zx(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var Qx = [
	Q.Down,
	Q.Right,
	Q.Up,
	Q.Left
], $x = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if (Qx.includes(e.code)) {
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
		let c = Cy({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = by(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = Ry(c).some((e, t) => s[t] !== e), i = eS(e, t), a = tS(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : Kv(u, l);
			}
		}
	}
};
function eS(e, t) {
	return !Zx(e) || !Zx(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function tS(e, t) {
	return !Zx(e) || !Zx(t) || !eS(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function nS({ item: e, index: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, disabled: a = !1 }) {
	let { attributes: o, listeners: s, setNodeRef: c, transform: l, transition: u, isDragging: d } = Yx({
		id: i(e),
		disabled: a
	}), f = {
		transform: Zv.Transform.toString(l),
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
function rS({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ _("div", {
		className: "uhuu:rotate-2",
		children: n(e, t, !0)
	});
}
function iS({ items: e, onChange: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, gridColsClass: a = "uhuu-page-drag-drop-grid-cols", className: o = "", renderToolbar: s, renderEmptyState: c, showDebugInfo: u = !1, renderDragOverlay: d, isItemDisabled: f, canDropAt: p }) {
	let [h, g] = m(e);
	l(() => {
		g(e);
	}, [e]);
	let [y, b] = m(null), x = py(fy(hb), fy(ub, { coordinateGetter: $x })), S = (e) => {
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
				let e = Nx(h, o, s);
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
				children: /* @__PURE__ */ v(fx, {
					sensors: x,
					collisionDetection: Sy,
					onDragStart: S,
					onDragEnd: C,
					children: [/* @__PURE__ */ _(Vx, {
						items: h.map(i),
						strategy: Rx,
						children: /* @__PURE__ */ _("div", {
							className: a,
							children: h.map((e, t) => /* @__PURE__ */ _(nS, {
								item: e,
								index: t,
								renderItem: n,
								renderDragIndicator: r,
								keyExtractor: i,
								disabled: f ? f(e) : !1
							}, i(e)))
						})
					}), /* @__PURE__ */ _(Mx, { children: w ? d ? /* @__PURE__ */ _("div", {
						className: "uhuu:rotate-2 uhuu:shadow-lg",
						children: d(w, T)
					}) : /* @__PURE__ */ _(rS, {
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
var aS = mo("uhuu:inline-flex uhuu:items-center uhuu:rounded-md uhuu:border uhuu:px-2.5 uhuu:py-0.5 uhuu:text-xs uhuu:font-medium uhuu:transition-colors uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-offset-2", {
	variants: { variant: {
		default: "uhuu:border-transparent uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse)",
		secondary: "uhuu:border-transparent uhuu:bg-gray-100 uhuu:text-gray-900",
		outline: "uhuu:border-gray-300 uhuu:text-gray-900 uhuu:bg-(--uhuu-shell-surface)"
	} },
	defaultVariants: { variant: "default" }
});
function oS({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ _("div", {
		className: li(aS({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function sS({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = Ma(), a = e.strictPosition, o = a === "start" || a === "end";
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
			children: /* @__PURE__ */ _(oS, {
				variant: "secondary",
				className: `uhuu:text-xs uhuu:min-w-[24px] uhuu:h-6 uhuu:font-medium uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-sm uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-sm uhuu:border uhuu:border-gray-200 ${o ? "uhuu:opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ _(Fi, { className: "uhuu:size-3 uhuu:text-gray-500" }) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
					className: "uhuu:group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ _(Pi, { className: "uhuu:size-4 uhuu:text-gray-400 uhuu:hidden uhuu:group-hover/drag-item:block" })] })
			})
		})]
	});
}
function cS({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "uhuu-page-order-grid-cols" }) {
	let p = Ma(), { t: m, localize: h } = p, g = h(u) ?? m("reorderDialog.title"), y = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = e.useCallback((e) => e.id, []);
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
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? wv({
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
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ _(sS, {
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
				children: [/* @__PURE__ */ _(Pi, { className: "uhuu:size-3.5 uhuu:opacity-60 uhuu:group-hover/remove-btn:hidden" }), /* @__PURE__ */ _(zi, { className: "uhuu:size-3.5 uhuu:rotate-45 uhuu:hidden uhuu:group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ v("div", {
		className: "uhuu:text-center uhuu:py-20",
		children: [
			/* @__PURE__ */ _("div", {
				className: "uhuu:w-12 uhuu:h-12 uhuu:bg-gray-50 uhuu:rounded-lg uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
				children: /* @__PURE__ */ _(Ti, { className: "uhuu:w-6 uhuu:h-6 uhuu:text-gray-400" })
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
	return /* @__PURE__ */ _(pv, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ v(gv, {
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
				/* @__PURE__ */ _(_v, {
					className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4",
					children: /* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:items-end uhuu:gap-3",
						children: [
							/* @__PURE__ */ _("div", {
								className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
								children: /* @__PURE__ */ _(Ti, { className: "uhuu:w-4 uhuu:h-4" })
							}),
							/* @__PURE__ */ v("div", {
								className: "uhuu:flex-1",
								children: [/* @__PURE__ */ _(yv, {
									className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
									children: g
								}), /* @__PURE__ */ _(bv, {
									className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
									children: y
								})]
							}),
							/* @__PURE__ */ _(oS, {
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
						children: /* @__PURE__ */ _(iS, {
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
				/* @__PURE__ */ v(vv, {
					className: "uhuu:border-t uhuu:border-gray-200 uhuu:px-4 uhuu:py-3 uhuu:gap-3",
					children: [/* @__PURE__ */ _(go, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ _(go, {
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
var lS = typeof window > "u" ? e.useEffect : e.useLayoutEffect, uS = 1e3, dS = /* @__PURE__ */ new Set();
function fS(e, t) {
	return Array.from(e.querySelectorAll(t)).filter((e) => !e.closest(`[${ut}]`));
}
function pS({ pageKey: t, version: n, readiness: r, onMeasurement: i, onPrune: a, children: o }) {
	let [s] = e.useState(() => ({ mounted: !0 })), c = e.useRef(null), [l, u] = e.useState(0), d = e.useCallback(() => {
		u((e) => e + 1);
		let e = !1;
		return () => {
			e || (e = !0, u((e) => e - 1));
		};
	}, []);
	lS(() => (s.mounted = !0, () => {
		s.mounted = !1;
	}), [s]);
	let f = e.useCallback(() => {
		let e = c.current;
		if (!s.mounted || !e) return;
		let n = new Set(fS(e, "[data-uhuu-flow=\"true\"]").map((e) => e.dataset.uhuuFlowId ?? ""));
		a?.(t, n);
	}, [
		s,
		t,
		a
	]);
	lS(() => {
		f();
		let e = c.current;
		if (!e || fS(e, "[data-uhuu-flow-area]").length) {
			e?.removeAttribute("data-uhuu-flow-error");
			return;
		}
		if (e.setAttribute("data-uhuu-flow-error", "missing-flow-region"), !U() || dS.has(t)) return;
		let n = setTimeout(() => {
			e.isConnected && !fS(e, "[data-uhuu-flow-area]").length && (dS.add(t), console.warn(`[uhuu-components] Page "${t}" is marked hasFlow but renders no Static.FlowArea, so data-uhuu-pagination stays "measuring". Render a FlowArea with one Static.Flow in every branch (an empty Flow is one page), or remove hasFlow.`));
		}, uS);
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
function mS({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: h, measurementPageNo: y, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, flowReadiness: D, onFlowMeasurement: O, onFlowPrune: k, renderVisible: A = !0, renderMode: j = "sheet", spread: M }) {
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
	return j === "content" ? /* @__PURE__ */ v(g, { children: [d, /* @__PURE__ */ _(dt.Provider, {
		value: L,
		children: I(m, h)
	})] }) : /* @__PURE__ */ v(g, { children: [w && O && T && /* @__PURE__ */ _(pS, {
		pageKey: T,
		version: E,
		readiness: D,
		onMeasurement: O,
		onPrune: k,
		children: (e) => {
			let t = e.copy === "continuation", n = y ?? m, r = b ?? h;
			return /* @__PURE__ */ _(re, {
				setup: u,
				children: /* @__PURE__ */ _(ie, {
					className: F,
					pageNo: m,
					"data-page-key": P,
					children: /* @__PURE__ */ _(dt.Provider, {
						value: e,
						children: t ? I(n + 1, r === void 0 ? void 0 : r + 1, R?.continuation) : I(n, r, R?.first)
					})
				})
			});
		}
	}), A && /* @__PURE__ */ _(re, {
		setup: u,
		children: /* @__PURE__ */ v(ie, {
			className: F,
			pageNo: m,
			overlay: ({ pageNo: e }) => N(e),
			"data-page-key": P,
			children: [d, /* @__PURE__ */ _(dt.Provider, {
				value: L,
				children: I(m, h)
			})]
		})
	})] });
}
//#endregion
//#region src/uhuu/ui/select.tsx
var hS = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ _("select", {
	className: li("uhuu:flex uhuu:h-8 uhuu:w-full uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2.5 uhuu:py-1 uhuu:text-sm uhuu:text-gray-900 uhuu:outline-none uhuu:transition-colors uhuu:focus:border-gray-400 uhuu:focus:ring-2 uhuu:focus:ring-gray-200 uhuu:focus:ring-offset-0 uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50", e),
	ref: r,
	...n,
	children: t
}));
hS.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var gS = Object.defineProperty, _S = (e, t) => gS(e, "name", {
	value: t,
	configurable: !0
}), vS = "Switch", [yS, bS] = /* @__PURE__ */ jo(vS), [xS, SS] = yS(vS);
function CS(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = Ho({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: vS
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
	return /* @__PURE__ */ _(xS, {
		scope: n,
		...C,
		children: jS(f) ? f(C) : i
	});
}
_S(CS, "SwitchProvider");
var wS = "SwitchTrigger", TS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _S(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: g } = SS(wS, t), v = J(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ _S(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ _(ds.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": MS(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: v,
		onClick: q(n, (e) => {
			m(), f((e) => !e), g && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), ES = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _S(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ _(CS, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(TS, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ _(AS, { __scopeSwitch: n })] })
	});
}, "Switch")), DS = "SwitchThumb", OS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _S(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = SS(DS, n);
	return /* @__PURE__ */ _(ds.span, {
		"data-state": MS(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), kS = "SwitchBubbleInput", AS = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _S(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: g } = SS(kS, t), v = J(i, g), y = Bu(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
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
	return /* @__PURE__ */ _(ds.input, {
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
function jS(e) {
	return typeof e == "function";
}
_S(jS, "isFunction");
function MS(e) {
	return e ? "checked" : "unchecked";
}
_S(MS, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var NS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(ES, {
	ref: n,
	className: li("uhuu:peer uhuu:inline-flex uhuu:h-5 uhuu:w-9 uhuu:shrink-0 uhuu:cursor-pointer uhuu:items-center uhuu:rounded-full uhuu:border-2 uhuu:border-transparent uhuu:bg-gray-200 uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:focus-visible:ring-offset-(--uhuu-shell-surface) uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50 uhuu:data-[state=checked]:bg-gray-900 uhuu:data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ _(OS, { className: li("uhuu:pointer-events-none uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:bg-white uhuu:shadow-lg uhuu:ring-0 uhuu:data-[state=checked]:bg-(--uhuu-shell-on-inverse) uhuu:transition-transform uhuu:data-[state=checked]:translate-x-4 uhuu:data-[state=unchecked]:translate-x-0") })
}));
NS.displayName = ES.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var PS = Object.defineProperty, FS = (e, t) => PS(e, "name", {
	value: t,
	configurable: !0
});
function IS(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
FS(IS, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var LS = Object.defineProperty, RS = (e, t) => LS(e, "name", {
	value: t,
	configurable: !0
});
function zS(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
RS(zS, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var BS = Object.defineProperty, $ = (e, t) => BS(e, "name", {
	value: t,
	configurable: !0
}), VS = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, HS = {
	LTR: "ltr",
	RTL: "rtl"
}, US = ["PageUp", "PageDown"], WS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], GS = {
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
}, KS = "Slider", [qS, JS, YS] = /* @__PURE__ */ hs(KS), [XS, ZS] = /* @__PURE__ */ jo(KS, [YS]), [QS, $S] = XS(KS), eC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = VS.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ $(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ $(() => {}, "onValueCommit"), inverted: h = !1, form: g, ...v } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === VS.Horizontal ? rC : iC, [C, w] = e.useState(null), T = J(n, w), [E = [], D] = Ho({
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
		N(e, SC(E, e));
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
		let r = DC(o), s = IS(OC(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? IS(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = yC(e, c, t);
			if (TC(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return $(N, "updateValues"), /* @__PURE__ */ _(QS, {
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
		children: /* @__PURE__ */ _(qS.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ _(qS.Slot, {
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
							let n = US.includes(e.key) || e.shiftKey && WS.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(kC(a, {
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
}, "Slider")), [tC, nC] = XS(KS, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), rC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = J(n, p), h = e.useRef(void 0), g = As(a), v = g === HS.LTR, y = v && !o || !v && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = EC([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return $(b, "getValueFromPointer"), /* @__PURE__ */ _(tC, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ _(aC, {
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
				let t = GS[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), iC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = J(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = EC([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return $(h, "getValueFromPointer"), /* @__PURE__ */ _(tC, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ _(aC, {
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
				let t = GS[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), aC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = $S(KS, n);
	return /* @__PURE__ */ _(ds.span, {
		...l,
		ref: t,
		onKeyDown: q(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : US.concat(WS).includes(e.key) && (c(e), e.preventDefault());
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
}, "SliderImpl")), oC = "SliderTrack", sC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = $S(oC, n);
	return /* @__PURE__ */ _(ds.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), cC = "SliderRange", lC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = $S(cC, r), o = nC(cC, r), s = J(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => bC(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ _(ds.span, {
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
}, "SliderRange")), [uC, dC] = XS("SliderThumb"), fC = "SliderThumbProvider";
function pC(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = $S(fC, n), s = JS(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = Bu(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : bC(p, o.min, o.max);
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
	return /* @__PURE__ */ _(uC, {
		scope: n,
		...g,
		children: AC(a) ? a(g) : i
	});
}
$(pC, "SliderThumbProvider");
var mC = "SliderThumbTrigger", hC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = $S(mC, n), a = nC(mC, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = dC(mC, n), d = J(t, u), f = xC(o, i.values.length), p = l?.[a.size], m = p ? CC(p, c, a.direction) : 0;
	return /* @__PURE__ */ _("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ _(qS.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ _(ds.span, {
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
}, "SliderThumbTrigger")), gC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ _(pC, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(hC, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ _(vC, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), _C = "SliderBubbleInput", vC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = dC(_C, t), s = e.useRef(null), c = J(s, r), l = zS(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ _(ds.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function yC(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
$(yC, "getNextSortedValues");
function bC(e, t, n) {
	return IS(100 / (n - t) * (e - t), [0, 100]);
}
$(bC, "convertValueToPercentage");
function xC(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
$(xC, "getLabel");
function SC(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
$(SC, "getClosestValueIndex");
function CC(e, t, n) {
	let r = e / 2;
	return (r - EC([0, 50], [0, r])(t) * n) * n;
}
$(CC, "getThumbInBoundsOffset");
function wC(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
$(wC, "getStepsBetweenValues");
function TC(e, t) {
	if (t > 0) {
		let n = wC(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
$(TC, "hasMinStepsBetweenValues");
function EC(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
$(EC, "linearScale");
function DC(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
$(DC, "getDecimalCount");
function OC(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
$(OC, "roundValue");
function kC(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = DC(n), o = (e - t) / n, s = Math.round(o), c = OC(s * n + t, a) === OC(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), OC(l * n + t, a);
}
$(kC, "getNextStepValue");
function AC(e) {
	return typeof e == "function";
}
$(AC, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var jC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(eC, {
	ref: n,
	className: li("uhuu:relative uhuu:flex uhuu:w-full uhuu:touch-none uhuu:select-none uhuu:items-center uhuu:data-[disabled]:opacity-50", e),
	...t,
	children: [/* @__PURE__ */ _(sC, {
		className: "uhuu:relative uhuu:h-1.5 uhuu:w-full uhuu:grow uhuu:overflow-hidden uhuu:rounded-full uhuu:bg-gray-200",
		children: /* @__PURE__ */ _(lC, { className: "uhuu:absolute uhuu:h-full uhuu:bg-gray-900" })
	}), /* @__PURE__ */ _(gC, { className: "uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:border-2 uhuu:border-gray-900 uhuu:bg-(--uhuu-shell-surface) uhuu:shadow uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50" })]
}));
jC.displayName = eC.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var MC = Object.defineProperty, NC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => MC(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ _(ds.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), PC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(NC, {
	ref: n,
	className: li("uhuu:text-sm uhuu:font-medium uhuu:leading-none uhuu:text-gray-700 uhuu:peer-disabled:cursor-not-allowed uhuu:peer-disabled:opacity-70", e),
	...t
}));
PC.displayName = NC.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function FC(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function IC({ pageOptions: e, targetItem: t, onChange: n }) {
	let { localize: r } = Ma(), i = FC(e, t), a = (e) => {
		let i = e.getValue(t), a = r(e.label);
		switch (e.type) {
			case "select": return /* @__PURE__ */ v("div", {
				className: "uhuu:space-y-1.5",
				children: [/* @__PURE__ */ _(PC, {
					htmlFor: e.id,
					className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
					children: a
				}), /* @__PURE__ */ _(hS, {
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
					children: [/* @__PURE__ */ _(PC, {
						htmlFor: e.id,
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ _(NS, {
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
						children: [/* @__PURE__ */ _(PC, {
							htmlFor: e.id,
							className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
							children: a
						}), /* @__PURE__ */ _("span", {
							className: "uhuu:text-xs uhuu:font-mono uhuu:tabular-nums uhuu:text-gray-700",
							children: r
						})]
					}), /* @__PURE__ */ _(jC, {
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
					children: [/* @__PURE__ */ _(PC, {
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [
							/* @__PURE__ */ _(go, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.max(e.min, r - e.step);
									n(e, t, String(i));
								},
								disabled: r <= e.min,
								type: "button",
								children: /* @__PURE__ */ _(Li, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							}),
							/* @__PURE__ */ _("div", {
								className: "uhuu:flex-1 uhuu:text-center uhuu:px-3 uhuu:py-1.5 uhuu:bg-gray-50 uhuu:rounded-md uhuu:border uhuu:border-gray-200",
								children: /* @__PURE__ */ _("span", {
									className: "uhuu:text-sm uhuu:font-mono uhuu:tabular-nums uhuu:font-medium uhuu:text-gray-900",
									children: r
								})
							}),
							/* @__PURE__ */ _(go, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.min(e.max, r + e.step);
									n(e, t, String(i));
								},
								disabled: r >= e.max,
								type: "button",
								children: /* @__PURE__ */ _(zi, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							})
						]
					})]
				}, e.id);
			}
			case "color-series": {
				let o = String(i);
				return /* @__PURE__ */ v("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ _(PC, {
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
								children: a && /* @__PURE__ */ _(Oi, {
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
function LC({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = Ma(), o = r ?? a("page.optionsMenu");
	return !t || FC(e, t).length === 0 ? null : /* @__PURE__ */ v(Wm, {
		modal: !1,
		children: [/* @__PURE__ */ _(Gm, {
			asChild: !0,
			className: i || "uhuu-page-options-trigger",
			children: /* @__PURE__ */ v(go, {
				variant: "ghost",
				size: "sm",
				className: "uhuu:h-7 uhuu:w-7 uhuu:text-gray-400 uhuu:hover:text-gray-600 uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200 uhuu:rounded-md",
				title: o,
				children: [/* @__PURE__ */ _(Ni, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ _("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ _(Ym, {
			className: "uhuu:min-w-48 uhuu:p-3",
			align: "center",
			children: /* @__PURE__ */ _(IC, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function RC({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: h }) {
	let { t: g } = Ma(), [y, b] = m(!1), [x, S] = m(!1), [C, w] = m(e), T = p(null);
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
	}) : t || D ? /* @__PURE__ */ v(Wm, {
		open: y,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ _(Gm, {
			asChild: !0,
			children: /* @__PURE__ */ v("button", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:text-gray-900 uhuu:rounded-md uhuu:px-2 uhuu:h-7 uhuu:hover:bg-gray-100 uhuu:transition-colors uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ _("span", {
					className: "uhuu:truncate uhuu:max-w-[120px]",
					children: e
				}), /* @__PURE__ */ _(ki, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:text-gray-500 uhuu:shrink-0" })]
			})
		}), /* @__PURE__ */ v(Ym, {
			className: "uhuu:min-w-44 uhuu:p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ v(Xm, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ _(Ri, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.rename")]
				}),
				t && D && /* @__PURE__ */ _(eh, {}),
				n && /* @__PURE__ */ v(Xm, {
					onClick: c,
					children: [/* @__PURE__ */ _(Ei, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveUp")]
				}),
				r && /* @__PURE__ */ v(Xm, {
					onClick: u,
					children: [/* @__PURE__ */ _(wi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ _(eh, {}),
				i && /* @__PURE__ */ v(Xm, {
					onClick: d,
					children: [/* @__PURE__ */ _(zi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.addPage")]
				}),
				a && /* @__PURE__ */ v(Xm, {
					onClick: f,
					children: [/* @__PURE__ */ _(Mi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.duplicate")]
				}),
				o && /* @__PURE__ */ _(eh, {}),
				o && /* @__PURE__ */ v(Xm, {
					onClick: h,
					className: "uhuu:text-red-600 uhuu:focus:text-red-700 uhuu:focus:bg-red-50",
					children: [/* @__PURE__ */ _(Vi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.delete")]
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
function zC(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function BC(e, t) {
	return !!k(e?.binding) && t?.mode === "cover";
}
function VC({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: zC(e),
		warnings: []
	};
	if (!BC(e, t)) return r;
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
function HC(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, pageComponents: a, payload: o, setup: u, stateKey: f = Ng, resolveNewItem: h, notifyError: g, pageFilter: _ } = e, [v, y] = m(t), [b, x] = m(!1), S = Ma(), { t: C } = S, w = p(t);
	l(() => {
		try {
			JSON.stringify(w.current) !== JSON.stringify(t) && (w.current = t, y(t));
		} catch {
			w.current !== t && (w.current = t, y(t));
		}
	}, [t]);
	let T = c(s_), E = s((e) => {
		y(e);
		let t = Vg(e, f);
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
			e.set(n, (e.get(n) ?? 0) + 1), Pg(t) && t.pages?.forEach((t) => {
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
	}), [n, D]), k = d(() => Lg(v), [v]), A = s(async (e, t) => {
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
				return Gg(t.templateId ?? t.id, t.componentKey ?? t.id, {
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
			return Kg(n, r(t.pageComponentKeys, i), {
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
			if (Lg(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (T?.removeIntegrationPayload) {
				let e = n.id;
				T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
			}
			E(v.filter((t) => t.id !== e));
		} else for (let n of v) if (Pg(n) && n.pages.some((t) => t.id === e)) {
			if (Lg(v) <= 1) {
				t(C("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (T?.removeIntegrationPayload) {
					let e = n.id;
					T.payload?.integrations?.[e] !== void 0 && T.removeIntegrationPayload(e);
				}
				E(v.filter((e) => e.id !== n.id));
			} else E(v.map((t) => t.id === n.id && Pg(t) ? {
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
		E(v.map((n) => n.id === e ? (Pg(n), {
			...n,
			...t
		}) : n));
	}, [v, E]), N = s((e) => {
		E(e);
	}, [E]), P = d(() => {
		let e = Ig(v);
		return _ ? Xg(e, _) : e;
	}, [v, _]), F = s((e) => {
		let t = [];
		return P.forEach((n) => {
			Pg(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [P]), I = d(() => Rg(P), [P]), L = s((e) => {
		let t = zg(e, v);
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
			if (a) return wv({
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
function UC({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
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
function WC(e = [], t = {}) {
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
function GC({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
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
	}, [n]), p = d(() => WC(e, l), [e, l]), h = p.length;
	return {
		committedFlowLayouts: l,
		allVirtualPages: p,
		renderedVirtualPages: d(() => p.filter((e) => Zg(e.pageNum, h, t ?? void 0)), [
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
function KC(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function qC(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function JC({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = e_(e, t, n), o = n && Pg(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => n_(a.instanceId, e)
		},
		paths: {
			integration: (e) => n_(a.instanceId, e),
			page: (e) => KC(s, e),
			group: (e) => KC(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: qC(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-presets.ts
var YC = (e, t, n = !1, r, i) => {
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
	} : Gg(c, s, {
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
}, XC = (e, t = !1, n, r, i) => {
	let a = {
		payload: n,
		item: void 0,
		parent: void 0
	}, o = QC(e.pageComponentKeys, a).map((e) => {
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
	return Kg(e.id, o, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, ZC = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], QC = (e, t) => {
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
}, $C = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = ZC(n), c = /* @__PURE__ */ new Map();
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
			return t ? XC(t, !0, o, i, f(t.id)) : YC(e, void 0, !0, i, f(e));
		}
		if (e.pageComponentKeys !== void 0) {
			let t = e;
			return XC(t, !0, o, i, f(t.id));
		}
		let t = e;
		return YC(t, void 0, !0, i, f(t.id));
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
}, ew = Object.defineProperty, tw = (e, t) => ew(e, "name", {
	value: t,
	configurable: !0
}), [nw, rw] = /* @__PURE__ */ jo("AlertDialog", [H_]), iw = H_(), aw = /* @__PURE__ */ tw((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = iw(t);
	return /* @__PURE__ */ _(G_, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = iw(n);
	return /* @__PURE__ */ _(q_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var ow = /* @__PURE__ */ tw((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = iw(t);
	return /* @__PURE__ */ _(Z_, {
		...r,
		...n
	});
}, "AlertDialogPortal"), sw = e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = iw(n);
	return /* @__PURE__ */ _($_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [cw, lw] = nw("AlertDialogContent"), uw = e.forwardRef(/* @__PURE__ */ tw(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = iw(r), s = J(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ _(cw, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ _(rv, {
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
}, "AlertDialogContent")), dw = e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = iw(n);
	return /* @__PURE__ */ _(sv, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), fw = e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = iw(n);
	return /* @__PURE__ */ _(cv, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), pw = e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = iw(n);
	return /* @__PURE__ */ _(uv, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), mw = "AlertDialogCancel", hw = e.forwardRef(/* @__PURE__ */ tw(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = lw(mw, n), a = iw(n), o = J(t, i);
	return /* @__PURE__ */ _(uv, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), gw = aw, _w = ow, vw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(sw, {
	ref: n,
	className: li("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/40 uhuu:backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
vw.displayName = sw.displayName;
var yw = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = Ji();
	return /* @__PURE__ */ v(_w, {
		container: r || void 0,
		children: [/* @__PURE__ */ _(vw, {}), /* @__PURE__ */ _(uw, {
			ref: n,
			"data-uhuu-editor": !0,
			className: li("uhuu:fixed uhuu:left-[50%] uhuu:top-[50%] uhuu:z-50 uhuu:w-full uhuu:max-w-md uhuu:translate-x-[-50%] uhuu:translate-y-[-50%] uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
yw.displayName = uw.displayName;
var bw = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: li("uhuu:flex uhuu:flex-col uhuu:gap-2 uhuu:text-left", e),
	...t
});
bw.displayName = "AlertDialogHeader";
var xw = ({ className: e, ...t }) => /* @__PURE__ */ _("div", {
	className: li("uhuu:mt-6 uhuu:flex uhuu:flex-col-reverse uhuu:gap-2 uhuu:sm:flex-row uhuu:sm:justify-end", e),
	...t
});
xw.displayName = "AlertDialogFooter";
var Sw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(dw, {
	ref: n,
	className: li("uhuu:text-base uhuu:font-semibold uhuu:text-gray-900", e),
	...t
}));
Sw.displayName = dw.displayName;
var Cw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(fw, {
	ref: n,
	className: li("uhuu:text-sm uhuu:text-gray-600", e),
	...t
}));
Cw.displayName = fw.displayName;
var ww = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(pw, {
	ref: n,
	className: li("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:bg-gray-900 uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-(--uhuu-shell-on-inverse) uhuu:transition-colors uhuu:hover:bg-gray-800", e),
	...t
}));
ww.displayName = pw.displayName;
var Tw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ _(hw, {
	ref: n,
	className: li("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:bg-gray-50", e),
	...t
}));
Tw.displayName = hw.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var Ew = "__edit__", Dw = "__print__";
function Ow({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ v(Xm, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "uhuu:flex uhuu:items-center uhuu:gap-2",
		children: [e ? /* @__PURE__ */ _(Oi, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }) : /* @__PURE__ */ _("span", { className: "uhuu:w-3 uhuu:h-3" }), /* @__PURE__ */ _("span", {
			className: "uhuu:flex-1 uhuu:truncate",
			children: t
		})]
	});
}
function kw({ label: e, value: t }) {
	return /* @__PURE__ */ v(qm, {
		className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-4 uhuu:text-xs",
		children: [/* @__PURE__ */ _("span", {
			className: "uhuu:text-gray-700",
			children: e
		}), /* @__PURE__ */ v("span", {
			className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-gray-400",
			children: [t ? /* @__PURE__ */ _("span", {
				className: "uhuu:max-w-[110px] uhuu:truncate",
				children: t
			}) : null, /* @__PURE__ */ _(Ai, { className: "uhuu:w-3.5 uhuu:h-3.5" })]
		})]
	});
}
function Aw({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: Ew,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: Dw,
		label: "Print"
	}]], m = r ? Ew : t || f[0] || Dw, h = p.find((e) => e.value === m)?.label ?? "Edit", y = (t) => {
		t === Ew ? i(!0) : (i(!1), t !== Dw && e && e[t] && n?.(t, e[t]));
	}, b = !!c && c.length > 0, x = c?.find((e) => e.id === l)?.name, S = () => {
		let e = window.prompt("Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:");
		e && e.trim() && d?.(e.trim());
	};
	return /* @__PURE__ */ v(Wm, {
		modal: !1,
		children: [/* @__PURE__ */ _(Gm, {
			asChild: !0,
			children: /* @__PURE__ */ v(go, {
				variant: "ghost",
				size: "sm",
				className: `uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 ${r ? "" : "uhuu:bg-gray-100/80"}`,
				children: [/* @__PURE__ */ _(Di, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ _("span", {
					className: "uhuu:text-[10px] uhuu:uppercase uhuu:tracking-wide",
					children: "Dev"
				})]
			})
		}), /* @__PURE__ */ v(Ym, {
			align: "end",
			className: "uhuu:min-w-[200px]",
			children: [
				/* @__PURE__ */ v(Km, { children: [/* @__PURE__ */ _(kw, {
					label: "Print Preview",
					value: h
				}), /* @__PURE__ */ _(Jm, {
					className: "uhuu:min-w-[180px]",
					children: p.map((e) => /* @__PURE__ */ _(Ow, {
						checked: m === e.value,
						label: e.label,
						onSelect: () => y(e.value)
					}, e.value))
				})] }),
				b && /* @__PURE__ */ v(Km, { children: [/* @__PURE__ */ _(kw, {
					label: "Brand Kit",
					value: x
				}), /* @__PURE__ */ v(Jm, {
					className: "uhuu:min-w-[200px]",
					children: [c.map((e) => /* @__PURE__ */ _(Ow, {
						checked: l === e.id,
						label: e.name,
						keepOpen: !0,
						onSelect: () => u?.(e.id)
					}, e.id)), d && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(eh, {}), /* @__PURE__ */ v(Xm, {
						onSelect: (e) => {
							e.preventDefault(), S();
						},
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [/* @__PURE__ */ _(zi, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ _("span", {
							className: "uhuu:flex-1",
							children: "Add published kit…"
						})]
					})] })]
				})] }),
				a && /* @__PURE__ */ v(g, { children: [
					/* @__PURE__ */ _(eh, {}),
					/* @__PURE__ */ _($m, {
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
								children: /* @__PURE__ */ _(jC, {
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
var jw = [
	"add",
	"remove",
	"reorder",
	"duplicate",
	"rename"
];
function Mw(e) {
	let t = e && typeof e == "object" ? e : {}, n = t.locked !== !0, r = Object.fromEntries(jw.map((e) => [e, typeof t[e] == "boolean" ? t[e] : n]));
	return {
		...r,
		templateOwnsPages: !r.add && !r.remove && !r.reorder && !r.duplicate
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor.tsx
var Nw = {
	width: 210,
	height: 297
}, Pw = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function Fw(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function Iw({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = Ma();
	return e ? /* @__PURE__ */ _("div", {
		className: "uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-black/30",
		children: /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:border-gray-200/80 uhuu:shadow-xl uhuu:p-6 uhuu:w-full uhuu:max-w-sm uhuu:mx-4 uhuu:flex uhuu:flex-col uhuu:items-center uhuu:text-center",
			children: [
				/* @__PURE__ */ _("div", {
					className: "uhuu:rounded-full uhuu:bg-emerald-100 uhuu:p-3 uhuu:mb-4",
					children: /* @__PURE__ */ _(Oi, {
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
					children: [/* @__PURE__ */ _(go, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "uhuu:flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ _(go, {
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
var Lw = /* @__PURE__ */ new Set();
function Rw({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: f, renderOverlay: h, renderPage: y, menuItems: x, gridColsClass: S, reorderTitle: C, reorderDescription: w, stateKey: T = Ng, onItemsChange: E, onStateChange: D, resolveNewItem: O, pageFilter: k, printConfigs: A, defaultZoomMode: j = "fit-page", brandKits: M, activeBrandKitId: N, onSelectBrandKit: P, onAddBrandKit: F, pageManagement: I = Bw }) {
	let [L] = m(() => V.createScope()), R = I, ee = o ?? Nw, { interactive: z, setInteractive: B, enableDevTools: te } = oo(), ne = so(), { portalContainer: H } = Ji(), { t: ie, localize: ae } = Ma(), [oe, se] = m(null), [ce, le] = m(null), [ue, de] = m(void 0), [fe, pe] = m(0), [me, he] = m(0), ge = oe ?? k, _e = d(() => ce ? {
		...ee,
		...ce
	} : ee, [ee, ce]), ve = c(s_), ye = ve?.payload ?? a, [be, xe] = m(!1), Se = !z && BC(_e, ge), Ce = _e?.preview ?? "single_page", we = Se ? "single_page" : Ce, Te = d(() => {
		let e = zC(_e);
		return Ce === "two_pages" || Se ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		Ce,
		Se,
		_e
	]), Ee = d(() => zC(ee), [ee]), De = d(() => Bg(t), [t]), Oe = d(() => l?.length ? l.map((e) => "getValue" in e ? e : ve?.setPageOptionValue ? p_(e, ve.payload, ve.setPageOptionValue) : ((U() || te) && console.warn("PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."), null)).filter(Boolean) : [], [
		l,
		ve,
		te
	]), [ke, Ae] = m(null), [je, Me] = m({ mode: "end" }), [Ne, Pe] = m(null), Fe = p(null), { items: Ie, itemsWithPageNum: Le, availableItemsToAdd: Re, addItem: ze, removeItem: Be, reorderItems: Ve, updateItemFields: He, addDialogOpen: Ue, setAddDialogOpen: We, openAddDialog: Ge, itemsForReorder: Ke, handleReorder: qe, defaultRenderThumbnail: Je } = HC({
		initialItems: De,
		availableItems: n,
		pageComponents: r,
		payload: ye,
		setup: Te,
		stateKey: T,
		onItemsChange: E,
		onStateChange: D,
		resolveNewItem: O,
		notifyError: u
	}), Ye = d(() => {
		let e = [];
		for (let t of Le) {
			let n = Pg(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = Pg(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: Fw(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Le]), Xe = d(() => JSON.stringify({
		format: Te?.format,
		orientation: Te?.orientation,
		width: Te?.width,
		height: Te?.height,
		bleed: Te?.bleed,
		showBleed: Te?.showBleed,
		preview: Te?.preview,
		flowPages: Ye.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [Te, Ye]), Ze = d(() => Lg(Ie), [Ie]), { committedFlowLayouts: Qe, allVirtualPages: $e, renderedVirtualPages: et, virtualTotalPageCount: tt, registerMeasurement: nt, pruneMeasurements: rt } = GC({
		logicalPages: Ye,
		pageFilter: ge,
		layoutKey: Xe
	});
	Pw(() => {
		L.commit(Ye.filter((e) => e.hasFlow).map((e) => e.flowKey), Qe);
	}), Pw(() => () => L.suspend(), [L]), e.useEffect(() => () => L.unmount(), [L]);
	let it = d(() => new Set(et.map((e) => e.virtualPageId)), [et]), at = d(() => VC({
		pageFormat: Se ? _e : zC(_e),
		pageFilter: ge,
		pages: et
	}), [
		Se,
		_e,
		ge,
		et
	]), ot = at.active ? at.plan : null, st = d(() => ot ? {
		...Te,
		binding: at.setup.binding
	} : Te, [
		ot,
		Te,
		at.setup
	]);
	e.useEffect(() => {
		if (U() && at.warnings.length) for (let e of at.warnings) Lw.has(e) || (Lw.add(e), console.warn(`[uhuu-components] PageEditor cover spread: ${e}`));
	}, [at.warnings]);
	let ct = d(() => $e.filter((e) => e.hasFlow && e.virtualPageIndex === 0 && (y || !!ot || !it.has(e.virtualPageId))), [
		$e,
		it,
		y,
		ot
	]);
	e.useEffect(() => {
		if (!Ne) return;
		let e = setTimeout(() => {
			document.querySelector(`[data-page-item-id="${Ne}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		return () => clearTimeout(e);
	}, [Ne]);
	let lt = UC({
		items: Ie,
		reorderItems: Ve,
		availableItemsToAdd: Re,
		setPendingInsertPosition: Me,
		openAddDialog: Ge
	}), ut = (e, t) => {
		let n = lt(e, t);
		return {
			onAddPage: R.add ? n.onAddPage : void 0,
			onMoveUp: R.reorder ? n.onMoveUp : void 0,
			onMoveDown: R.reorder ? n.onMoveDown : void 0,
			onDuplicate: R.duplicate ? n.onDuplicate : void 0
		};
	}, dt = s(async (e) => {
		let t = await ze(e, je);
		t.success && (Pe(t.insertedId), Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => Pe(null), 1200), Me({ mode: "end" }), e.repeatable && e.integration && Ae(e));
	}, [ze, je]), ft = s(() => {
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
	}, []), pt = s(() => {
		Me(ft()), Ge();
	}, [ft, Ge]), mt = e.useCallback((e, t, n) => {
		if (!t) return;
		let r = e.applyPatch?.(n, t);
		r && He(t.id, r), e.onChange?.(t.id, n, {
			item: t,
			updateItem: (e) => He(t.id, e)
		});
	}, [He]), ht = (e) => /* @__PURE__ */ v("div", {
		className: "uhuu-page-overlay",
		children: [/* @__PURE__ */ _("span", { children: "Page" }), /* @__PURE__ */ v("span", { children: [
			e.pageNo,
			" / ",
			e.total
		] })]
	}), gt = (e, t, n) => h === !1 || h === null ? null : h ? h({
		pageNo: e,
		total: tt,
		pageId: t,
		parent: n
	}) : ht({
		pageNo: e,
		total: tt
	}), _t = (t, n = {}) => {
		let i = t.parentGroup;
		if (y && n.renderVisible !== !1 && n.renderMode !== "content") return y({
			page: t,
			parent: i
		});
		let a = t.componentKey ?? t.id, o = te && f ? f(t) : null, s = te && f ? e.isValidElement(o) ? e.cloneElement(o, { opacity: me }) : o : null, c = t.templateId ?? a, l = r[a], u = ve?.getPagePayload ? ve.getPagePayload(t) : o_(ye, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), d = t_(ye, t, i), p = JC({
			payload: ye,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ _(mS, {
			pageId: t.id,
			templateId: c,
			pageNo: t.pageNum,
			measurementPageNo: t.basePageNum,
			component: l,
			payload: ye,
			pagePayload: u,
			integration: d,
			page: t,
			parentGroup: i,
			componentKey: a,
			setup: st,
			reference: s,
			overlay: ({ pageNo: e }) => gt(e, t.id, i),
			className: t.className,
			dataBinding: p,
			totalPages: tt,
			measurementTotalPages: Ze,
			flowPageIndex: t.virtualPageIndex,
			flowChunksByFlowId: t.flowChunksByFlowId,
			measureFlow: n.measureFlow ?? (!!t.hasFlow && t.virtualPageIndex === 0),
			flowMeasurementKey: t.flowKey,
			flowMeasurementVersion: Xe,
			flowReadiness: L,
			onFlowMeasurement: t.hasFlow ? nt : void 0,
			onFlowPrune: rt,
			renderVisible: n.renderVisible ?? !0,
			renderMode: n.renderMode,
			spread: n.spread
		}, `${n.renderVisible === !1 ? "measure-only" : "page"}-${t.virtualPageId}`);
	}, vt = (e) => {
		let t = e.componentKey ?? e.templateId ?? e.id;
		return [t ? `uhuu-page--${t}` : "", e.className].filter(Boolean).join(" ");
	}, yt = (e) => {
		if (!ot) return null;
		let { binding: t, page: n } = ot, [r, a] = e.panels, o = r.page, s = a.page, c = (r) => ({
			sheet: e.sheet,
			side: r,
			spine: t.spine,
			glue: t.glue,
			bleed: n.bleed
		}), l = `Cover sheet ${e.index + 1} · ${e.sheet} (pages ${o.pageNum} + ${s.pageNum})`;
		return /* @__PURE__ */ _("div", {
			"data-page-item-id": s.parentGroup?.id ?? s.id,
			children: /* @__PURE__ */ _(I_, {
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
				children: /* @__PURE__ */ _(re, {
					setup: st,
					children: /* @__PURE__ */ _(Tn, {
						sheet: e.sheet,
						pageNo: [o.pageNum, s.pageNum],
						left: _t(o, {
							renderMode: "content",
							spread: c("left")
						}),
						right: _t(s, {
							renderMode: "content",
							spread: c("right")
						}),
						spine: i && e.sheet === "outer" ? /* @__PURE__ */ _(i, {
							payload: ye,
							sheet: "outer",
							spine: t.spine,
							glue: t.glue,
							bleed: n.bleed,
							height: n.height,
							totalPages: tt,
							pages: {
								left: o,
								right: s
							}
						}) : void 0,
						overlay: ({ pageNo: e, side: t }) => {
							let n = t === "left" ? o : s;
							return gt(e, n.id, n.parentGroup);
						},
						leftClassName: vt(o),
						rightClassName: vt(s),
						leftPageKey: o.componentKey ?? o.templateId ?? o.id,
						rightPageKey: s.componentKey ?? s.templateId ?? s.id
					})
				})
			})
		}, `cover-sheet-${e.sheet}`);
	}, bt = (e, t, n) => {
		let r = !!t && Pg(t), i = r && t.pages[0]?.id === e.id;
		if (e.virtualPageIndex > 0) return /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
			children: [/* @__PURE__ */ _("span", {
				className: "uhuu-page-number",
				children: e.pageNum
			}), /* @__PURE__ */ _("span", {
				className: "uhuu:text-xs uhuu:text-gray-500",
				children: ie("page.continued", { name: ae(e.label) || e.componentKey || e.id })
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
						children: ae(e.label)
					}),
					/* @__PURE__ */ _("span", {
						className: "uhuu:text-xs uhuu:text-gray-400",
						children: "·"
					})
				]
			})
		});
		let a = r ? t : e, o = r ? ae(t.label) || t.id : ae(e.label) || ie("page.fallbackName", { number: e.pageNum });
		return /* @__PURE__ */ v("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:flex uhuu:items-center uhuu:h-9",
			children: [
				/* @__PURE__ */ _("span", {
					className: "uhuu-page-number uhuu:shrink-0 uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-400 uhuu:font-medium uhuu:pr-1",
					children: e.pageNum
				}),
				/* @__PURE__ */ _(RC, {
					name: o,
					canRename: R.rename,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: R.remove && Ze > 1,
					onRename: (e) => He(a.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Be(a.id)
				}),
				/* @__PURE__ */ _("span", {
					className: "uhuu:pl-1",
					children: Oe.length > 0 && /* @__PURE__ */ _(LC, {
						pageOptions: Oe,
						targetItem: a,
						onChange: mt,
						title: ie(r ? "page.groupOptions" : "page.options")
					})
				})
			]
		});
	}, xt = d(() => {
		if (we !== "two_pages") return [];
		let e = et;
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
	}, [we, et]), St = /* @__PURE__ */ v("div", {
		className: "uhuu:flex uhuu:items-center uhuu:gap-1",
		children: [
			/* @__PURE__ */ _(oS, {
				variant: "secondary",
				className: "uhuu:font-normal uhuu:text-xs uhuu:bg-gray-100/80 uhuu:text-gray-700 uhuu:border-0",
				children: ie("toolbar.pages", { count: tt })
			}),
			te && /* @__PURE__ */ _(Aw, {
				modes: A,
				selectedMode: ue,
				onModeChange: (e, t) => {
					de(e), se(t.filter ?? null), le(t.pageFormat ?? null), pe((e) => e + 1);
				},
				interactive: z,
				onInteractiveChange: (e) => {
					B(e), e && le(null);
				},
				hasReferenceRenderer: !!f,
				referenceOpacity: me,
				onReferenceOpacityChange: he,
				brandKits: M,
				activeBrandKitId: N,
				onSelectBrandKit: P,
				onAddBrandKit: F
			}),
			z && /* @__PURE__ */ v(g, { children: [R.add && Re.length > 0 && /* @__PURE__ */ v(go, {
				variant: "ghost",
				size: "sm",
				onClick: pt,
				title: ie("toolbar.addHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ _(zi, { className: "uhuu:w-3.5 uhuu:h-3.5" }), ie("toolbar.add")]
			}), R.reorder && /* @__PURE__ */ v(go, {
				variant: "ghost",
				size: "sm",
				onClick: () => xe(!0),
				title: ie("toolbar.reorderHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ _(ji, { className: "uhuu:w-3.5 uhuu:h-3.5" }), ie("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ v(g, { children: [
		ct.map((e) => _t(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		te && !z && H && b(/* @__PURE__ */ v(go, {
			onClick: () => {
				B(!0), le(null);
			},
			"data-uhuu-editor": !0,
			size: "sm",
			className: "uhuu-screen-only uhuu:fixed uhuu:top-4 uhuu:right-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:text-xs! uhuu:rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ _(Wi, { className: "uhuu:w-4 uhuu:h-4" }), "Back to Editor"]
		}), H),
		/* @__PURE__ */ _(L_, {
			defaultZoom: 80,
			defaultZoomMode: j,
			minZoom: 25,
			maxZoom: 200,
			menuItems: x ?? St,
			onAddPage: R.add ? pt : void 0,
			preview: we,
			children: ot ? ot.sheets.map(yt) : we === "two_pages" ? xt.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === Ne, l = s === Ne, u = (e, t) => ut(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ v(N_, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ _("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ _(I_, {
							title: `Sheet ${e.left.pageNum}`,
							controls: bt(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: _t(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ _("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ _(I_, {
							title: `Sheet ${e.right.pageNum}`,
							controls: bt(e.right, e.right.parentGroup, u(e.right, a)),
							origin: e.right.pageNum % 2 == 0 ? "right" : "left",
							children: _t(e.right)
						}, e.right.virtualPageId)
					})]
				}, `pair-${t}`);
			}) : et.map((e) => {
				let t = e.parentGroup ?? e, n = e.parentGroup?.id ?? e.id, r = ut(t, n), i = e.parentGroup?.id ?? e.id, a = Ne === i;
				return /* @__PURE__ */ _("div", {
					"data-page-item-id": e.virtualPageIndex === 0 ? i : void 0,
					className: a ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
					children: /* @__PURE__ */ _(I_, {
						title: `Sheet ${e.pageNum}`,
						controls: bt(e, e.parentGroup, r),
						children: _t(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${fe}-${ue ?? "default"}`),
		z && !ne && /* @__PURE__ */ v(g, { children: [R.add && /* @__PURE__ */ _(Tv, {
			open: Ue,
			onOpenChange: We,
			availableItems: Re,
			onSelectItem: dt,
			pageComponents: r,
			payload: ye,
			setup: Ee,
			gridColsClass: S,
			"data-uhuu-editor": !0
		}), R.reorder && /* @__PURE__ */ _(cS, {
			open: be,
			onOpenChange: xe,
			pages: Ke,
			onReorder: (e) => {
				qe(e), xe(!1);
			},
			onRemove: R.remove ? (e) => Be(e.id) : void 0,
			pageComponents: r,
			payload: ye,
			setup: Ee,
			renderThumbnail: Je,
			title: ae(C) ?? ie("reorderDialog.title"),
			description: ae(w) ?? ie("reorderDialog.description"),
			gridColsClass: S,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ _(Iw, {
			label: ke ? ae(ke.label) ?? ke.id : null,
			onDone: () => Ae(null),
			onAddAnother: () => {
				let e = ke;
				Ae(null), e && dt(e);
			}
		})
	] });
}
function zw(e) {
	let { templateConfig: t, ...n } = e;
	return c(s_) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ _(Rw, { ...n }) : /* @__PURE__ */ _(u_, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ _(Rw, { ...n })
	});
}
var Bw = Mw(), Vw = /* @__PURE__ */ new Set([
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
function Hw(e, t) {
	if (!t?.length) return e;
	let n = /* @__PURE__ */ new Map(), r = (e) => e.forEach((e) => {
		e?.id && n.set(e.id, e), Array.isArray(e?.pages) && r(e.pages);
	});
	r(t);
	let i = (e) => {
		let t = n.get(e.id), r = t ? Object.fromEntries(Object.entries(t).filter(([e]) => !Vw.has(e))) : {}, a = {
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
function Uw(t) {
	let n = c(s_), { t: r } = Ma(), i = n?.payload ?? t.payload, a = e.useMemo(() => $C({
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
	}, []), d = e.useMemo(() => Hg(i, t.stateKey ?? "uhuu_page_editor"), [i, t.stateKey]), f = e.useMemo(() => {
		let e = t.templateConfig.pageManagement;
		return e != null && typeof e != "object" && U() && console.warn(`[uhuu-components] templateConfig.pageManagement takes an object, e.g. { locked: true }; ${JSON.stringify(e)} is ignored and every page-management control stays on.`), Mw(e);
	}, [t.templateConfig.pageManagement]), p = f.templateOwnsPages, m = e.useMemo(() => {
		if (p) return Hw(a.initialItems, d?.items);
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
		}, l = (e, t) => t === void 0 || !la(e?.label, t) || e.label === t ? e : {
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
		}), f = new Set(a.initialItems.map((e) => e.id)), m = u.filter((e) => f.has(e.id)), h = Lg(m), g = Lg(a.initialItems);
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
	return /* @__PURE__ */ v(te.Provider, {
		value: !0,
		children: [/* @__PURE__ */ _(zw, {
			...t,
			payload: i,
			initialItems: m,
			availableItems: f.add || f.duplicate ? a.availableItems : [],
			pageManagement: f,
			pageComponents: a.pageComponents,
			spineComponent: o,
			notifyError: u
		}), /* @__PURE__ */ _(gw, {
			open: s.open,
			onOpenChange: (e) => {
				e || l({
					open: !1,
					message: ""
				});
			},
			children: /* @__PURE__ */ v(yw, { children: [/* @__PURE__ */ v(bw, { children: [/* @__PURE__ */ _(Sw, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ _(Cw, { children: s.message })] }), /* @__PURE__ */ _(xw, { children: /* @__PURE__ */ _(ww, {
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
function Ww(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = Gw(t, e);
				if (n != null) return n;
			}
		} else return Gw(t, e);
	}
}
function Gw(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function Kw(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = Ww(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function qw(e, t, n) {
	return e(t, n);
}
function Jw(e, t, n) {
	return typeof e == "function" ? qw(e, t, n) : Kw(e, t, n);
}
function Yw(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function Xw(e, t, n = {}, r, i = null) {
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
function Zw(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a, defaults: o } = t, s = e.useMemo(() => Jw(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), c = e.useMemo(() => Yw(n, r, a), [
		n,
		r,
		a
	]), l = e.useCallback((e, t = {}, r) => Xw(n, e, t, r, c), [n, c]), u = e.useCallback((e, t = {}, n) => {
		let r = l(e, t, n);
		return r ? Bt({ dialog: r }) : {};
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
var Qw = {
	Pagination: re,
	Sheet: ie,
	FlowArea: Dt,
	FlowPage: Ot,
	Flow: Rt,
	FlowColumns: zt,
	FlowText: st,
	planFlowChunks: ye,
	planFlowColumnChunks: ke,
	createFlowPlanMetrics: ve,
	flowMeasure: Ae,
	FlowDocument: sn,
	markdownToFlowItems: Sn,
	htmlToFlowItems: nn,
	planCoverSpread: N,
	resolveSheetSize: j,
	CoverSpread: Tn,
	usePaginationHold: Dn
}, $w = {
	TemplateDataProvider: u_,
	PageEditor: Uw,
	InteractiveModeProvider: uo,
	useInteractive: oo,
	useIntegrationAdapter: Zw
};
//#endregion
export { Qh as BRAND_KIT_PUBLIC_BASE_URL, jg as BrandKitProvider, Gt as Editable, $w as EditorShell, uh as ImageBlock, Qw as Static, fg as brandKitCollection, mg as brandKitEnv, cg as brandKitLogo, hg as brandKitMapStyle, ng as brandKitSourceUrl, Bt as getDialogProps, yh as imageUrl, rg as loadBrandKit, Mg as useBrandKit };

//# sourceMappingURL=uhuu-components.es.js.map