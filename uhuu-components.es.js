(function(){(function(e,t){try{if(typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0];if(!n)return;let r=t&&t.styleId||`uhuu-components-styles`,i=document.getElementById(r);i||(i=document.createElement(`style`),i.setAttribute(`id`,r),t&&t.attributes&&Object.entries(t.attributes).forEach(([e,t])=>{try{i.setAttribute(e,t)}catch{}})),i.textContent!==e&&(i.textContent=e),i.parentNode!==n&&(n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i))}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})(`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--uhuu-tw-translate-x:0;--uhuu-tw-translate-y:0;--uhuu-tw-translate-z:0;--uhuu-tw-scale-x:1;--uhuu-tw-scale-y:1;--uhuu-tw-scale-z:1;--uhuu-tw-space-y-reverse:0;--uhuu-tw-border-style:solid;--uhuu-tw-leading:initial;--uhuu-tw-font-weight:initial;--uhuu-tw-tracking:initial;--uhuu-tw-ordinal:initial;--uhuu-tw-slashed-zero:initial;--uhuu-tw-numeric-figure:initial;--uhuu-tw-numeric-spacing:initial;--uhuu-tw-numeric-fraction:initial;--uhuu-tw-shadow:0 0 #0000;--uhuu-tw-shadow-color:initial;--uhuu-tw-shadow-alpha:100%;--uhuu-tw-inset-shadow:0 0 #0000;--uhuu-tw-inset-shadow-color:initial;--uhuu-tw-inset-shadow-alpha:100%;--uhuu-tw-ring-color:initial;--uhuu-tw-ring-shadow:0 0 #0000;--uhuu-tw-inset-ring-color:initial;--uhuu-tw-inset-ring-shadow:0 0 #0000;--uhuu-tw-ring-inset:initial;--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-color:#fff;--uhuu-tw-ring-offset-shadow:0 0 #0000;--uhuu-tw-outline-style:solid;--uhuu-tw-blur:initial;--uhuu-tw-brightness:initial;--uhuu-tw-contrast:initial;--uhuu-tw-grayscale:initial;--uhuu-tw-hue-rotate:initial;--uhuu-tw-invert:initial;--uhuu-tw-opacity:initial;--uhuu-tw-saturate:initial;--uhuu-tw-sepia:initial;--uhuu-tw-drop-shadow:initial;--uhuu-tw-drop-shadow-color:initial;--uhuu-tw-drop-shadow-alpha:100%;--uhuu-tw-drop-shadow-size:initial;--uhuu-tw-backdrop-blur:initial;--uhuu-tw-backdrop-brightness:initial;--uhuu-tw-backdrop-contrast:initial;--uhuu-tw-backdrop-grayscale:initial;--uhuu-tw-backdrop-hue-rotate:initial;--uhuu-tw-backdrop-invert:initial;--uhuu-tw-backdrop-opacity:initial;--uhuu-tw-backdrop-saturate:initial;--uhuu-tw-backdrop-sepia:initial;--uhuu-tw-duration:initial;--uhuu-tw-ease:initial;--uhuu-tw-space-x-reverse:0}*,:before,:after,::backdrop{--uhuu-tw-outline-style:solid}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--uhuu-font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-neutral-50:oklch(98.5% 0 none);--uhuu-color-black:#000;--uhuu-color-white:#fff;--uhuu-spacing:.25rem;--uhuu-container-xs:20rem;--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-tracking-wide:.025em;--uhuu-tracking-widest:.1em;--uhuu-leading-tight:1.25;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-ease-in-out:cubic-bezier(.4, 0, .2, 1);--uhuu-blur-sm:8px;--uhuu-blur-md:12px;--uhuu-default-transition-duration:.15s;--uhuu-default-transition-timing-function:cubic-bezier(.4, 0, .2, 1)}:root:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:root:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *),:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base;@layer components{@media screen{[data-uhuu-interactive] [data-uhuu-flow-unplaceable=true],[data-uhuu-portal] [data-uhuu-flow-unplaceable=true]{outline-offset:-2px;outline:2px dashed #dc2626}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *)){background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc' fill-opacity='.2'/%3E%3C/svg%3E")}[data-uhuu-interactive] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover),[data-uhuu-portal] :where([data-uhuu]:not(.skip-data-uhuu,.skip-data-uhuu *):hover){outline-offset:-1px;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 14V8a6 6 0 0 1 12 0 6 6 0 0 1-6 6z' fill='%23ff44cc'/%3E%3C/svg%3E");outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}}}@layer utilities{.uhuu-page-overlay{pointer-events:none;color:var(--color-gray-600,oklch(44.6% .03 256.802));justify-content:space-between;align-items:center;font-size:7pt;display:flex;position:absolute;bottom:10mm;left:15mm;right:15mm}.uhuu-flow-page{flex-direction:column;width:100%;height:100%;display:flex}.uhuu-flow-page-area{flex:1;min-height:0}[data-uhuu-flow-area]:has([data-uhuu-flow-unplaceable]){overflow:clip}.uhuu-flow-document{width:100%}.uhuu-image-block{position:relative}.uhuu-image-block-fill{width:100%;height:100%}.uhuu-image-body{width:100%;height:100%;position:relative}.uhuu-image-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img:where(.object-cover){-o-object-fit:cover;object-fit:cover}.uhuu-image-img:where(.object-contain){-o-object-fit:contain;object-fit:contain}.uhuu-image-img:where(.object-fill){-o-object-fit:fill;object-fit:fill}.uhuu-image-img:where(.object-center){-o-object-position:center;object-position:center}.uhuu-image-img:where(.object-top){-o-object-position:top;object-position:top}.uhuu-image-img:where(.object-bottom){-o-object-position:bottom;object-position:bottom}.uhuu-image-img:where(.object-left){-o-object-position:left;object-position:left}.uhuu-image-img:where(.object-right){-o-object-position:right;object-position:right}.uhuu-image-img:where(.object-left-top){-o-object-position:left top;object-position:left top}.uhuu-image-img:where(.object-right-top){-o-object-position:right top;object-position:right top}.uhuu-image-img:where(.object-left-bottom){-o-object-position:left bottom;object-position:left bottom}.uhuu-image-img:where(.object-right-bottom){-o-object-position:right bottom;object-position:right bottom}.uhuu-image-overlay{z-index:10;pointer-events:none;position:absolute;inset:0}.uhuu-image-overlay-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.uhuu-image-img,.uhuu-image-overlay-img,:where(.uhuu-image-inner) .uhuu-image-geometry,:where(.uhuu-image-overlay)>svg{display:block}}[data-uhuu-interactive] .uhuu\\:pointer-events-auto,[data-uhuu-portal] .uhuu\\:pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .uhuu\\:pointer-events-none,[data-uhuu-portal] .uhuu\\:pointer-events-none{pointer-events:none}[data-uhuu-interactive] .uhuu\\:sr-only,[data-uhuu-portal] .uhuu\\:sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .uhuu\\:absolute,[data-uhuu-portal] .uhuu\\:absolute{position:absolute}[data-uhuu-interactive] .uhuu\\:fixed,[data-uhuu-portal] .uhuu\\:fixed{position:fixed}[data-uhuu-interactive] .uhuu\\:relative,[data-uhuu-portal] .uhuu\\:relative{position:relative}[data-uhuu-interactive] .uhuu\\:inset-0,[data-uhuu-portal] .uhuu\\:inset-0{inset:0}[data-uhuu-interactive] .uhuu\\:inset-x-0,[data-uhuu-portal] .uhuu\\:inset-x-0{inset-inline:0}[data-uhuu-interactive] .uhuu\\:inset-y-0,[data-uhuu-portal] .uhuu\\:inset-y-0{inset-block:0}[data-uhuu-interactive] .uhuu\\:-top-3,[data-uhuu-portal] .uhuu\\:-top-3{top:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:top-0,[data-uhuu-portal] .uhuu\\:top-0{top:0}[data-uhuu-interactive] .uhuu\\:top-1\\/2,[data-uhuu-portal] .uhuu\\:top-1\\/2{top:50%}[data-uhuu-interactive] .uhuu\\:top-2,[data-uhuu-portal] .uhuu\\:top-2{top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:top-3,[data-uhuu-portal] .uhuu\\:top-3{top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:top-4,[data-uhuu-portal] .uhuu\\:top-4{top:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:top-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .uhuu\\:top-full,[data-uhuu-portal] .uhuu\\:top-full{top:100%}[data-uhuu-interactive] .uhuu\\:-right-3,[data-uhuu-portal] .uhuu\\:-right-3{right:calc(var(--uhuu-spacing) * -3)}[data-uhuu-interactive] .uhuu\\:right-0,[data-uhuu-portal] .uhuu\\:right-0{right:0}[data-uhuu-interactive] .uhuu\\:right-2,[data-uhuu-portal] .uhuu\\:right-2{right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:right-4,[data-uhuu-portal] .uhuu\\:right-4{right:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-0,[data-uhuu-portal] .uhuu\\:bottom-0{bottom:0}[data-uhuu-interactive] .uhuu\\:bottom-2,[data-uhuu-portal] .uhuu\\:bottom-2{bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:bottom-4,[data-uhuu-portal] .uhuu\\:bottom-4{bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:bottom-full,[data-uhuu-portal] .uhuu\\:bottom-full{bottom:100%}[data-uhuu-interactive] .uhuu\\:left-0,[data-uhuu-portal] .uhuu\\:left-0{left:0}[data-uhuu-interactive] .uhuu\\:left-2,[data-uhuu-portal] .uhuu\\:left-2{left:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:left-3,[data-uhuu-portal] .uhuu\\:left-3{left:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:left-4,[data-uhuu-portal] .uhuu\\:left-4{left:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:left-\\[50\\%\\],[data-uhuu-portal] .uhuu\\:left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .uhuu\\:z-10,[data-uhuu-portal] .uhuu\\:z-10{z-index:10}[data-uhuu-interactive] .uhuu\\:z-20,[data-uhuu-portal] .uhuu\\:z-20{z-index:20}[data-uhuu-interactive] .uhuu\\:z-30,[data-uhuu-portal] .uhuu\\:z-30{z-index:30}[data-uhuu-interactive] .uhuu\\:z-50,[data-uhuu-portal] .uhuu\\:z-50{z-index:50}[data-uhuu-interactive] .uhuu\\:z-\\[2\\],[data-uhuu-portal] .uhuu\\:z-\\[2\\]{z-index:2}[data-uhuu-interactive] .uhuu\\:-mx-1,[data-uhuu-portal] .uhuu\\:-mx-1{margin-inline:calc(var(--uhuu-spacing) * -1)}[data-uhuu-interactive] .uhuu\\:mx-0\\.5,[data-uhuu-portal] .uhuu\\:mx-0\\.5{margin-inline:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mx-4,[data-uhuu-portal] .uhuu\\:mx-4{margin-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mx-auto,[data-uhuu-portal] .uhuu\\:mx-auto{margin-inline:auto}[data-uhuu-interactive] .uhuu\\:my-1,[data-uhuu-portal] .uhuu\\:my-1{margin-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:my-1\\.5,[data-uhuu-portal] .uhuu\\:my-1\\.5{margin-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:mt-0\\.5,[data-uhuu-portal] .uhuu\\:mt-0\\.5{margin-top:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mt-1,[data-uhuu-portal] .uhuu\\:mt-1{margin-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mt-3,[data-uhuu-portal] .uhuu\\:mt-3{margin-top:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mt-6,[data-uhuu-portal] .uhuu\\:mt-6{margin-top:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:mr-2,[data-uhuu-portal] .uhuu\\:mr-2{margin-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mr-8,[data-uhuu-portal] .uhuu\\:mr-8{margin-right:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:mb-0\\.5,[data-uhuu-portal] .uhuu\\:mb-0\\.5{margin-bottom:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:mb-1,[data-uhuu-portal] .uhuu\\:mb-1{margin-bottom:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:mb-2,[data-uhuu-portal] .uhuu\\:mb-2{margin-bottom:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:mb-3,[data-uhuu-portal] .uhuu\\:mb-3{margin-bottom:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:mb-4,[data-uhuu-portal] .uhuu\\:mb-4{margin-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:mb-5,[data-uhuu-portal] .uhuu\\:mb-5{margin-bottom:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:mb-6,[data-uhuu-portal] .uhuu\\:mb-6{margin-bottom:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:ml-1,[data-uhuu-portal] .uhuu\\:ml-1{margin-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:ml-auto,[data-uhuu-portal] .uhuu\\:ml-auto{margin-left:auto}[data-uhuu-interactive] .uhuu\\:block,[data-uhuu-portal] .uhuu\\:block{display:block}[data-uhuu-interactive] .uhuu\\:contents,[data-uhuu-portal] .uhuu\\:contents{display:contents}[data-uhuu-interactive] .uhuu\\:flex,[data-uhuu-portal] .uhuu\\:flex{display:flex}[data-uhuu-interactive] .uhuu\\:hidden,[data-uhuu-portal] .uhuu\\:hidden{display:none}[data-uhuu-interactive] .uhuu\\:inline-block,[data-uhuu-portal] .uhuu\\:inline-block{display:inline-block}[data-uhuu-interactive] .uhuu\\:inline-flex,[data-uhuu-portal] .uhuu\\:inline-flex{display:inline-flex}[data-uhuu-interactive] .uhuu\\:size-3,[data-uhuu-portal] .uhuu\\:size-3{width:calc(var(--uhuu-spacing) * 3);height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:size-3\\.5,[data-uhuu-portal] .uhuu\\:size-3\\.5{width:calc(var(--uhuu-spacing) * 3.5);height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:size-4,[data-uhuu-portal] .uhuu\\:size-4{width:calc(var(--uhuu-spacing) * 4);height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-1\\.5,[data-uhuu-portal] .uhuu\\:h-1\\.5{height:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:h-3,[data-uhuu-portal] .uhuu\\:h-3{height:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:h-3\\.5,[data-uhuu-portal] .uhuu\\:h-3\\.5{height:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:h-4,[data-uhuu-portal] .uhuu\\:h-4{height:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:h-5,[data-uhuu-portal] .uhuu\\:h-5{height:calc(var(--uhuu-spacing) * 5)}[data-uhuu-interactive] .uhuu\\:h-6,[data-uhuu-portal] .uhuu\\:h-6{height:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:h-7,[data-uhuu-portal] .uhuu\\:h-7{height:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:h-8,[data-uhuu-portal] .uhuu\\:h-8{height:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:h-9,[data-uhuu-portal] .uhuu\\:h-9{height:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:h-10,[data-uhuu-portal] .uhuu\\:h-10{height:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:h-11,[data-uhuu-portal] .uhuu\\:h-11{height:calc(var(--uhuu-spacing) * 11)}[data-uhuu-interactive] .uhuu\\:h-12,[data-uhuu-portal] .uhuu\\:h-12{height:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:h-16,[data-uhuu-portal] .uhuu\\:h-16{height:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:h-\\[90vh\\],[data-uhuu-portal] .uhuu\\:h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .uhuu\\:h-full,[data-uhuu-portal] .uhuu\\:h-full{height:100%}[data-uhuu-interactive] .uhuu\\:h-px,[data-uhuu-portal] .uhuu\\:h-px{height:1px}[data-uhuu-interactive] .uhuu\\:min-h-0,[data-uhuu-portal] .uhuu\\:min-h-0{min-height:0}[data-uhuu-interactive] .uhuu\\:w-3,[data-uhuu-portal] .uhuu\\:w-3{width:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:w-3\\.5,[data-uhuu-portal] .uhuu\\:w-3\\.5{width:calc(var(--uhuu-spacing) * 3.5)}[data-uhuu-interactive] .uhuu\\:w-3\\/4,[data-uhuu-portal] .uhuu\\:w-3\\/4{width:75%}[data-uhuu-interactive] .uhuu\\:w-4,[data-uhuu-portal] .uhuu\\:w-4{width:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:w-6,[data-uhuu-portal] .uhuu\\:w-6{width:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:w-7,[data-uhuu-portal] .uhuu\\:w-7{width:calc(var(--uhuu-spacing) * 7)}[data-uhuu-interactive] .uhuu\\:w-8,[data-uhuu-portal] .uhuu\\:w-8{width:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:w-9,[data-uhuu-portal] .uhuu\\:w-9{width:calc(var(--uhuu-spacing) * 9)}[data-uhuu-interactive] .uhuu\\:w-10,[data-uhuu-portal] .uhuu\\:w-10{width:calc(var(--uhuu-spacing) * 10)}[data-uhuu-interactive] .uhuu\\:w-12,[data-uhuu-portal] .uhuu\\:w-12{width:calc(var(--uhuu-spacing) * 12)}[data-uhuu-interactive] .uhuu\\:w-16,[data-uhuu-portal] .uhuu\\:w-16{width:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:w-20,[data-uhuu-portal] .uhuu\\:w-20{width:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:w-24,[data-uhuu-portal] .uhuu\\:w-24{width:calc(var(--uhuu-spacing) * 24)}[data-uhuu-interactive] .uhuu\\:w-40,[data-uhuu-portal] .uhuu\\:w-40{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:w-48,[data-uhuu-portal] .uhuu\\:w-48{width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:w-52,[data-uhuu-portal] .uhuu\\:w-52{width:calc(var(--uhuu-spacing) * 52)}[data-uhuu-interactive] .uhuu\\:w-72,[data-uhuu-portal] .uhuu\\:w-72{width:calc(var(--uhuu-spacing) * 72)}[data-uhuu-interactive] .uhuu\\:w-full,[data-uhuu-portal] .uhuu\\:w-full{width:100%}[data-uhuu-interactive] .uhuu\\:w-px,[data-uhuu-portal] .uhuu\\:w-px{width:1px}[data-uhuu-interactive] .uhuu\\:max-w-\\[110px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .uhuu\\:max-w-\\[120px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .uhuu\\:max-w-\\[140px\\],[data-uhuu-portal] .uhuu\\:max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\],[data-uhuu-portal] .uhuu\\:max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}[data-uhuu-interactive] .uhuu\\:max-w-md,[data-uhuu-portal] .uhuu\\:max-w-md{max-width:var(--uhuu-container-md)}[data-uhuu-interactive] .uhuu\\:max-w-none,[data-uhuu-portal] .uhuu\\:max-w-none{max-width:none}[data-uhuu-interactive] .uhuu\\:max-w-sm,[data-uhuu-portal] .uhuu\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:max-w-xs,[data-uhuu-portal] .uhuu\\:max-w-xs{max-width:var(--uhuu-container-xs)}[data-uhuu-interactive] .uhuu\\:min-w-0,[data-uhuu-portal] .uhuu\\:min-w-0{min-width:0}[data-uhuu-interactive] .uhuu\\:min-w-44,[data-uhuu-portal] .uhuu\\:min-w-44{min-width:calc(var(--uhuu-spacing) * 44)}[data-uhuu-interactive] .uhuu\\:min-w-48,[data-uhuu-portal] .uhuu\\:min-w-48{min-width:calc(var(--uhuu-spacing) * 48)}[data-uhuu-interactive] .uhuu\\:min-w-\\[1rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[8rem\\],[data-uhuu-portal] .uhuu\\:min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .uhuu\\:min-w-\\[24px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .uhuu\\:min-w-\\[180px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .uhuu\\:min-w-\\[200px\\],[data-uhuu-portal] .uhuu\\:min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .uhuu\\:flex-1,[data-uhuu-portal] .uhuu\\:flex-1{flex:1}[data-uhuu-interactive] .uhuu\\:shrink-0,[data-uhuu-portal] .uhuu\\:shrink-0{flex-shrink:0}[data-uhuu-interactive] .uhuu\\:shrink-0\\!,[data-uhuu-portal] .uhuu\\:shrink-0\\!{flex-shrink:0!important}[data-uhuu-interactive] .uhuu\\:grow,[data-uhuu-portal] .uhuu\\:grow{flex-grow:1}[data-uhuu-interactive] .uhuu\\:translate-x-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-x-\\[-50\\%\\]{--uhuu-tw-translate-x:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:-translate-y-1\\/2,[data-uhuu-portal] .uhuu\\:-translate-y-1\\/2{--uhuu-tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:translate-y-\\[-50\\%\\],[data-uhuu-portal] .uhuu\\:translate-y-\\[-50\\%\\]{--uhuu-tw-translate-y:-50%;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:scale-105,[data-uhuu-portal] .uhuu\\:scale-105{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:scale-110,[data-uhuu-portal] .uhuu\\:scale-110{--uhuu-tw-scale-x:110%;--uhuu-tw-scale-y:110%;--uhuu-tw-scale-z:110%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:rotate-2,[data-uhuu-portal] .uhuu\\:rotate-2{rotate:2deg}[data-uhuu-interactive] .uhuu\\:rotate-45,[data-uhuu-portal] .uhuu\\:rotate-45{rotate:45deg}[data-uhuu-interactive] .uhuu\\:cursor-default,[data-uhuu-portal] .uhuu\\:cursor-default{cursor:default}[data-uhuu-interactive] .uhuu\\:cursor-grab,[data-uhuu-portal] .uhuu\\:cursor-grab{cursor:grab}[data-uhuu-interactive] .uhuu\\:cursor-pointer,[data-uhuu-portal] .uhuu\\:cursor-pointer{cursor:pointer}[data-uhuu-interactive] .uhuu\\:touch-none,[data-uhuu-portal] .uhuu\\:touch-none{touch-action:none}[data-uhuu-interactive] .uhuu\\:flex-col,[data-uhuu-portal] .uhuu\\:flex-col{flex-direction:column}[data-uhuu-interactive] .uhuu\\:flex-col-reverse,[data-uhuu-portal] .uhuu\\:flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .uhuu\\:flex-wrap,[data-uhuu-portal] .uhuu\\:flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .uhuu\\:items-center,[data-uhuu-portal] .uhuu\\:items-center{align-items:center}[data-uhuu-interactive] .uhuu\\:items-end,[data-uhuu-portal] .uhuu\\:items-end{align-items:flex-end}[data-uhuu-interactive] .uhuu\\:items-start,[data-uhuu-portal] .uhuu\\:items-start{align-items:flex-start}[data-uhuu-interactive] .uhuu\\:justify-between,[data-uhuu-portal] .uhuu\\:justify-between{justify-content:space-between}[data-uhuu-interactive] .uhuu\\:justify-center,[data-uhuu-portal] .uhuu\\:justify-center{justify-content:center}[data-uhuu-interactive] .uhuu\\:justify-end,[data-uhuu-portal] .uhuu\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] .uhuu\\:justify-start,[data-uhuu-portal] .uhuu\\:justify-start{justify-content:flex-start}[data-uhuu-interactive] .uhuu\\:gap-0,[data-uhuu-portal] .uhuu\\:gap-0{gap:0}[data-uhuu-interactive] .uhuu\\:gap-1,[data-uhuu-portal] .uhuu\\:gap-1{gap:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:gap-1\\.5,[data-uhuu-portal] .uhuu\\:gap-1\\.5{gap:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:gap-2,[data-uhuu-portal] .uhuu\\:gap-2{gap:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:gap-3,[data-uhuu-portal] .uhuu\\:gap-3{gap:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:gap-4,[data-uhuu-portal] .uhuu\\:gap-4{gap:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] :where(.uhuu\\:space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-1>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(var(--uhuu-spacing) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(var(--uhuu-spacing) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] :where(.uhuu\\:space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-1\\.5>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 1.5) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 1.5) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] :where(.uhuu\\:space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-2>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] :where(.uhuu\\:space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:space-y-3>:not(:last-child)){--uhuu-tw-space-y-reverse:0;margin-block-start:calc(calc(var(--uhuu-spacing) * 3) * var(--uhuu-tw-space-y-reverse));margin-block-end:calc(calc(var(--uhuu-spacing) * 3) * calc(1 - var(--uhuu-tw-space-y-reverse)))}[data-uhuu-interactive] .uhuu\\:truncate,[data-uhuu-portal] .uhuu\\:truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-auto,[data-uhuu-portal] .uhuu\\:overflow-auto{overflow:auto}[data-uhuu-interactive] .uhuu\\:overflow-hidden,[data-uhuu-portal] .uhuu\\:overflow-hidden{overflow:hidden}[data-uhuu-interactive] .uhuu\\:overflow-y-auto,[data-uhuu-portal] .uhuu\\:overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .uhuu\\:rounded,[data-uhuu-portal] .uhuu\\:rounded{border-radius:.25rem}[data-uhuu-interactive] .uhuu\\:rounded-full,[data-uhuu-portal] .uhuu\\:rounded-full{border-radius:2147483647px}[data-uhuu-interactive] .uhuu\\:rounded-lg,[data-uhuu-portal] .uhuu\\:rounded-lg{border-radius:var(--uhuu-radius-lg)}[data-uhuu-interactive] .uhuu\\:rounded-md,[data-uhuu-portal] .uhuu\\:rounded-md{border-radius:var(--uhuu-radius-md)}[data-uhuu-interactive] .uhuu\\:rounded-sm,[data-uhuu-portal] .uhuu\\:rounded-sm{border-radius:var(--uhuu-radius-sm)}[data-uhuu-interactive] .uhuu\\:border,[data-uhuu-portal] .uhuu\\:border{border-style:var(--uhuu-tw-border-style);border-width:1px}[data-uhuu-interactive] .uhuu\\:border-0,[data-uhuu-portal] .uhuu\\:border-0{border-style:var(--uhuu-tw-border-style);border-width:0}[data-uhuu-interactive] .uhuu\\:border-2,[data-uhuu-portal] .uhuu\\:border-2{border-style:var(--uhuu-tw-border-style);border-width:2px}[data-uhuu-interactive] .uhuu\\:border-t,[data-uhuu-portal] .uhuu\\:border-t{border-top-style:var(--uhuu-tw-border-style);border-top-width:1px}[data-uhuu-interactive] .uhuu\\:border-r,[data-uhuu-portal] .uhuu\\:border-r{border-right-style:var(--uhuu-tw-border-style);border-right-width:1px}[data-uhuu-interactive] .uhuu\\:border-b,[data-uhuu-portal] .uhuu\\:border-b{border-bottom-style:var(--uhuu-tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .uhuu\\:border-l,[data-uhuu-portal] .uhuu\\:border-l{border-left-style:var(--uhuu-tw-border-style);border-left-width:1px}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border\\){border-color:var(--uhuu-thumbnail-border)}[data-uhuu-interactive] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\),[data-uhuu-portal] .uhuu\\:border-\\(--uhuu-thumbnail-border-strong\\){border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:border-blue-400,[data-uhuu-portal] .uhuu\\:border-blue-400{border-color:var(--uhuu-color-blue-400)}[data-uhuu-interactive] .uhuu\\:border-gray-200,[data-uhuu-portal] .uhuu\\:border-gray-200,[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/60,[data-uhuu-portal] .uhuu\\:border-gray-200\\/60{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 60%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:var(--uhuu-color-gray-200)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:border-gray-200\\/80,[data-uhuu-portal] .uhuu\\:border-gray-200\\/80{border-color:color-mix(in oklab, var(--uhuu-color-gray-200) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:border-gray-300,[data-uhuu-portal] .uhuu\\:border-gray-300{border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:border-gray-400,[data-uhuu-portal] .uhuu\\:border-gray-400{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:border-gray-900,[data-uhuu-portal] .uhuu\\:border-gray-900{border-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:border-transparent,[data-uhuu-portal] .uhuu\\:border-transparent{border-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\),[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/50{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/90{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:var(--uhuu-shell-surface)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95,[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-shell-surface\\)\\/95{background-color:color-mix(in oklab, var(--uhuu-shell-surface) 95%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\),[data-uhuu-portal] .uhuu\\:bg-\\(--uhuu-thumbnail-caption\\){background-color:var(--uhuu-thumbnail-caption)}[data-uhuu-interactive] .uhuu\\:bg-black,[data-uhuu-portal] .uhuu\\:bg-black,[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/30,[data-uhuu-portal] .uhuu\\:bg-black\\/30{background-color:color-mix(in oklab, var(--uhuu-color-black) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/40,[data-uhuu-portal] .uhuu\\:bg-black\\/40{background-color:color-mix(in oklab, var(--uhuu-color-black) 40%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:var(--uhuu-color-black)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-black\\/50,[data-uhuu-portal] .uhuu\\:bg-black\\/50{background-color:color-mix(in oklab, var(--uhuu-color-black) 50%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-50,[data-uhuu-portal] .uhuu\\:bg-blue-50{background-color:var(--uhuu-color-blue-50)}[data-uhuu-interactive] .uhuu\\:bg-blue-100,[data-uhuu-portal] .uhuu\\:bg-blue-100{background-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:var(--uhuu-color-blue-500)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-500\\/10,[data-uhuu-portal] .uhuu\\:bg-blue-500\\/10{background-color:color-mix(in oklab, var(--uhuu-color-blue-500) 10%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:var(--uhuu-color-blue-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-blue-600\\/80,[data-uhuu-portal] .uhuu\\:bg-blue-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-blue-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-emerald-100,[data-uhuu-portal] .uhuu\\:bg-emerald-100{background-color:var(--uhuu-color-emerald-100)}[data-uhuu-interactive] .uhuu\\:bg-gray-50,[data-uhuu-portal] .uhuu\\:bg-gray-50{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:bg-gray-100,[data-uhuu-portal] .uhuu\\:bg-gray-100,[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-100\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-100\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-200,[data-uhuu-portal] .uhuu\\:bg-gray-200{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:var(--uhuu-color-gray-600)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-gray-600\\/80,[data-uhuu-portal] .uhuu\\:bg-gray-600\\/80{background-color:color-mix(in oklab, var(--uhuu-color-gray-600) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:bg-gray-900,[data-uhuu-portal] .uhuu\\:bg-gray-900{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:bg-transparent,[data-uhuu-portal] .uhuu\\:bg-transparent{background-color:#0000}[data-uhuu-interactive] .uhuu\\:bg-white,[data-uhuu-portal] .uhuu\\:bg-white,[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:var(--uhuu-color-white)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:bg-white\\/90,[data-uhuu-portal] .uhuu\\:bg-white\\/90{background-color:color-mix(in oklab, var(--uhuu-color-white) 90%, transparent)}}[data-uhuu-interactive] .uhuu\\:object-contain,[data-uhuu-portal] .uhuu\\:object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .uhuu\\:object-top,[data-uhuu-portal] .uhuu\\:object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .uhuu\\:p-0,[data-uhuu-portal] .uhuu\\:p-0{padding:0}[data-uhuu-interactive] .uhuu\\:p-1,[data-uhuu-portal] .uhuu\\:p-1{padding:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:p-1\\.5,[data-uhuu-portal] .uhuu\\:p-1\\.5{padding:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:p-2,[data-uhuu-portal] .uhuu\\:p-2{padding:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:p-3,[data-uhuu-portal] .uhuu\\:p-3{padding:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:p-4,[data-uhuu-portal] .uhuu\\:p-4{padding:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:p-6,[data-uhuu-portal] .uhuu\\:p-6{padding:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:px-2,[data-uhuu-portal] .uhuu\\:px-2{padding-inline:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:px-2\\.5,[data-uhuu-portal] .uhuu\\:px-2\\.5{padding-inline:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:px-3,[data-uhuu-portal] .uhuu\\:px-3{padding-inline:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:px-4,[data-uhuu-portal] .uhuu\\:px-4{padding-inline:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:px-8,[data-uhuu-portal] .uhuu\\:px-8{padding-inline:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:py-0\\.5,[data-uhuu-portal] .uhuu\\:py-0\\.5{padding-block:calc(var(--uhuu-spacing) * .5)}[data-uhuu-interactive] .uhuu\\:py-1,[data-uhuu-portal] .uhuu\\:py-1{padding-block:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:py-1\\.5,[data-uhuu-portal] .uhuu\\:py-1\\.5{padding-block:calc(var(--uhuu-spacing) * 1.5)}[data-uhuu-interactive] .uhuu\\:py-2,[data-uhuu-portal] .uhuu\\:py-2{padding-block:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:py-2\\.5,[data-uhuu-portal] .uhuu\\:py-2\\.5{padding-block:calc(var(--uhuu-spacing) * 2.5)}[data-uhuu-interactive] .uhuu\\:py-3,[data-uhuu-portal] .uhuu\\:py-3{padding-block:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:py-16,[data-uhuu-portal] .uhuu\\:py-16{padding-block:calc(var(--uhuu-spacing) * 16)}[data-uhuu-interactive] .uhuu\\:py-20,[data-uhuu-portal] .uhuu\\:py-20{padding-block:calc(var(--uhuu-spacing) * 20)}[data-uhuu-interactive] .uhuu\\:pt-1,[data-uhuu-portal] .uhuu\\:pt-1{padding-top:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pt-2,[data-uhuu-portal] .uhuu\\:pt-2{padding-top:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-1,[data-uhuu-portal] .uhuu\\:pr-1{padding-right:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pr-2,[data-uhuu-portal] .uhuu\\:pr-2{padding-right:calc(var(--uhuu-spacing) * 2)}[data-uhuu-interactive] .uhuu\\:pr-3,[data-uhuu-portal] .uhuu\\:pr-3{padding-right:calc(var(--uhuu-spacing) * 3)}[data-uhuu-interactive] .uhuu\\:pr-6,[data-uhuu-portal] .uhuu\\:pr-6{padding-right:calc(var(--uhuu-spacing) * 6)}[data-uhuu-interactive] .uhuu\\:pb-4,[data-uhuu-portal] .uhuu\\:pb-4{padding-bottom:calc(var(--uhuu-spacing) * 4)}[data-uhuu-interactive] .uhuu\\:pl-0,[data-uhuu-portal] .uhuu\\:pl-0{padding-left:0}[data-uhuu-interactive] .uhuu\\:pl-1,[data-uhuu-portal] .uhuu\\:pl-1{padding-left:var(--uhuu-spacing)}[data-uhuu-interactive] .uhuu\\:pl-8,[data-uhuu-portal] .uhuu\\:pl-8{padding-left:calc(var(--uhuu-spacing) * 8)}[data-uhuu-interactive] .uhuu\\:text-center,[data-uhuu-portal] .uhuu\\:text-center{text-align:center}[data-uhuu-interactive] .uhuu\\:text-left,[data-uhuu-portal] .uhuu\\:text-left{text-align:left}[data-uhuu-interactive] .uhuu\\:align-top,[data-uhuu-portal] .uhuu\\:align-top{vertical-align:top}[data-uhuu-interactive] .uhuu\\:font-mono,[data-uhuu-portal] .uhuu\\:font-mono{font-family:var(--uhuu-font-mono)}[data-uhuu-interactive] .uhuu\\:text-base,[data-uhuu-portal] .uhuu\\:text-base{font-size:var(--uhuu-text-base);line-height:var(--uhuu-tw-leading,var(--uhuu-text-base--line-height))}[data-uhuu-interactive] .uhuu\\:text-lg,[data-uhuu-portal] .uhuu\\:text-lg{font-size:var(--uhuu-text-lg);line-height:var(--uhuu-tw-leading,var(--uhuu-text-lg--line-height))}[data-uhuu-interactive] .uhuu\\:text-sm,[data-uhuu-portal] .uhuu\\:text-sm{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs,[data-uhuu-portal] .uhuu\\:text-xs{font-size:var(--uhuu-text-xs);line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))}[data-uhuu-interactive] .uhuu\\:text-xs\\!,[data-uhuu-portal] .uhuu\\:text-xs\\!{font-size:var(--uhuu-text-xs)!important;line-height:var(--uhuu-tw-leading,var(--uhuu-text-xs--line-height))!important}[data-uhuu-interactive] .uhuu\\:text-\\[10px\\],[data-uhuu-portal] .uhuu\\:text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .uhuu\\:leading-none,[data-uhuu-portal] .uhuu\\:leading-none{--uhuu-tw-leading:1;line-height:1}[data-uhuu-interactive] .uhuu\\:leading-tight,[data-uhuu-portal] .uhuu\\:leading-tight{--uhuu-tw-leading:var(--uhuu-leading-tight);line-height:var(--uhuu-leading-tight)}[data-uhuu-interactive] .uhuu\\:font-medium,[data-uhuu-portal] .uhuu\\:font-medium{--uhuu-tw-font-weight:var(--uhuu-font-weight-medium);font-weight:var(--uhuu-font-weight-medium)}[data-uhuu-interactive] .uhuu\\:font-normal,[data-uhuu-portal] .uhuu\\:font-normal{--uhuu-tw-font-weight:var(--uhuu-font-weight-normal);font-weight:var(--uhuu-font-weight-normal)}[data-uhuu-interactive] .uhuu\\:font-semibold,[data-uhuu-portal] .uhuu\\:font-semibold{--uhuu-tw-font-weight:var(--uhuu-font-weight-semibold);font-weight:var(--uhuu-font-weight-semibold)}[data-uhuu-interactive] .uhuu\\:tracking-wide,[data-uhuu-portal] .uhuu\\:tracking-wide{--uhuu-tw-tracking:var(--uhuu-tracking-wide);letter-spacing:var(--uhuu-tracking-wide)}[data-uhuu-interactive] .uhuu\\:tracking-widest,[data-uhuu-portal] .uhuu\\:tracking-widest{--uhuu-tw-tracking:var(--uhuu-tracking-widest);letter-spacing:var(--uhuu-tracking-widest)}[data-uhuu-interactive] .uhuu\\:break-all,[data-uhuu-portal] .uhuu\\:break-all{word-break:break-all}[data-uhuu-interactive] .uhuu\\:whitespace-nowrap,[data-uhuu-portal] .uhuu\\:whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\),[data-uhuu-portal] .uhuu\\:text-\\(--uhuu-shell-on-inverse\\){color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:text-blue-600,[data-uhuu-portal] .uhuu\\:text-blue-600{color:var(--uhuu-color-blue-600)}[data-uhuu-interactive] .uhuu\\:text-emerald-600,[data-uhuu-portal] .uhuu\\:text-emerald-600{color:var(--uhuu-color-emerald-600)}[data-uhuu-interactive] .uhuu\\:text-gray-400,[data-uhuu-portal] .uhuu\\:text-gray-400{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:text-gray-500,[data-uhuu-portal] .uhuu\\:text-gray-500{color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu\\:text-gray-600,[data-uhuu-portal] .uhuu\\:text-gray-600{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:text-gray-700,[data-uhuu-portal] .uhuu\\:text-gray-700{color:var(--uhuu-color-gray-700)}[data-uhuu-interactive] .uhuu\\:text-gray-800,[data-uhuu-portal] .uhuu\\:text-gray-800{color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:text-gray-900,[data-uhuu-portal] .uhuu\\:text-gray-900{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:text-red-600,[data-uhuu-portal] .uhuu\\:text-red-600{color:var(--uhuu-color-red-600)}[data-uhuu-interactive] .uhuu\\:text-white,[data-uhuu-portal] .uhuu\\:text-white{color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:uppercase,[data-uhuu-portal] .uhuu\\:uppercase{text-transform:uppercase}[data-uhuu-interactive] .uhuu\\:tabular-nums,[data-uhuu-portal] .uhuu\\:tabular-nums{--uhuu-tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--uhuu-tw-ordinal,) var(--uhuu-tw-slashed-zero,) var(--uhuu-tw-numeric-figure,) var(--uhuu-tw-numeric-spacing,) var(--uhuu-tw-numeric-fraction,)}[data-uhuu-interactive] .uhuu\\:opacity-0,[data-uhuu-portal] .uhuu\\:opacity-0{opacity:0}[data-uhuu-interactive] .uhuu\\:opacity-50,[data-uhuu-portal] .uhuu\\:opacity-50{opacity:.5}[data-uhuu-interactive] .uhuu\\:opacity-60,[data-uhuu-portal] .uhuu\\:opacity-60{opacity:.6}[data-uhuu-interactive] .uhuu\\:opacity-70,[data-uhuu-portal] .uhuu\\:opacity-70{opacity:.7}[data-uhuu-interactive] .uhuu\\:opacity-75,[data-uhuu-portal] .uhuu\\:opacity-75{opacity:.75}[data-uhuu-interactive] .uhuu\\:shadow,[data-uhuu-portal] .uhuu\\:shadow{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-2xl,[data-uhuu-portal] .uhuu\\:shadow-2xl{--uhuu-tw-shadow:0 25px 50px -12px var(--uhuu-tw-shadow-color,#00000040);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-lg,[data-uhuu-portal] .uhuu\\:shadow-lg{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-md,[data-uhuu-portal] .uhuu\\:shadow-md{--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-sm,[data-uhuu-portal] .uhuu\\:shadow-sm{--uhuu-tw-shadow:0 1px 3px 0 var(--uhuu-tw-shadow-color,#0000001a), 0 1px 2px -1px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:shadow-xl,[data-uhuu-portal] .uhuu\\:shadow-xl{--uhuu-tw-shadow:0 20px 25px -5px var(--uhuu-tw-shadow-color,#0000001a), 0 8px 10px -6px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-0,[data-uhuu-portal] .uhuu\\:ring-0{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(0px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\),[data-uhuu-portal] .uhuu\\:ring-offset-\\(--uhuu-shell-surface\\){--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:outline,[data-uhuu-portal] .uhuu\\:outline{outline-style:var(--uhuu-tw-outline-style);outline-width:1px}[data-uhuu-interactive] .uhuu\\:outline-2,[data-uhuu-portal] .uhuu\\:outline-2{outline-style:var(--uhuu-tw-outline-style);outline-width:2px}[data-uhuu-interactive] .uhuu\\:outline-offset-2,[data-uhuu-portal] .uhuu\\:outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .uhuu\\:outline-blue-100,[data-uhuu-portal] .uhuu\\:outline-blue-100{outline-color:var(--uhuu-color-blue-100)}[data-uhuu-interactive] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .uhuu\\:drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--uhuu-tw-drop-shadow-size:drop-shadow(0 1px 2px var(--uhuu-tw-drop-shadow-color,#000c));--uhuu-tw-drop-shadow:var(--uhuu-tw-drop-shadow-size);filter:var(--uhuu-tw-blur,) var(--uhuu-tw-brightness,) var(--uhuu-tw-contrast,) var(--uhuu-tw-grayscale,) var(--uhuu-tw-hue-rotate,) var(--uhuu-tw-invert,) var(--uhuu-tw-saturate,) var(--uhuu-tw-sepia,) var(--uhuu-tw-drop-shadow,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-\\[1px\\],[data-uhuu-portal] .uhuu\\:backdrop-blur-\\[1px\\]{--uhuu-tw-backdrop-blur:blur(1px);backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-md,[data-uhuu-portal] .uhuu\\:backdrop-blur-md{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-md));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:backdrop-blur-sm,[data-uhuu-portal] .uhuu\\:backdrop-blur-sm{--uhuu-tw-backdrop-blur:blur(var(--uhuu-blur-sm));backdrop-filter:var(--uhuu-tw-backdrop-blur,) var(--uhuu-tw-backdrop-brightness,) var(--uhuu-tw-backdrop-contrast,) var(--uhuu-tw-backdrop-grayscale,) var(--uhuu-tw-backdrop-hue-rotate,) var(--uhuu-tw-backdrop-invert,) var(--uhuu-tw-backdrop-opacity,) var(--uhuu-tw-backdrop-saturate,) var(--uhuu-tw-backdrop-sepia,)}[data-uhuu-interactive] .uhuu\\:transition,[data-uhuu-portal] .uhuu\\:transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-all,[data-uhuu-portal] .uhuu\\:transition-all{transition-property:all;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-colors,[data-uhuu-portal] .uhuu\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--uhuu-tw-gradient-from,--uhuu-tw-gradient-via,--uhuu-tw-gradient-to;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-opacity,[data-uhuu-portal] .uhuu\\:transition-opacity{transition-property:opacity;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:transition-transform,[data-uhuu-portal] .uhuu\\:transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--uhuu-tw-ease,var(--uhuu-default-transition-timing-function));transition-duration:var(--uhuu-tw-duration,var(--uhuu-default-transition-duration))}[data-uhuu-interactive] .uhuu\\:duration-150,[data-uhuu-portal] .uhuu\\:duration-150{--uhuu-tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .uhuu\\:ease-in-out,[data-uhuu-portal] .uhuu\\:ease-in-out{--uhuu-tw-ease:var(--uhuu-ease-in-out);transition-timing-function:var(--uhuu-ease-in-out)}[data-uhuu-interactive] .uhuu\\:outline-none,[data-uhuu-portal] .uhuu\\:outline-none{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:select-none,[data-uhuu-portal] .uhuu\\:select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\:opacity-100:is(:where(.uhuu\\:group):hover *){opacity:1}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:block:is(:where(.uhuu\\:group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:flex:is(:where(.uhuu\\:group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:hidden:is(:where(.uhuu\\:group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:border-gray-300:is(:where(.uhuu\\:group\\/drag-item):hover *){border-color:var(--uhuu-color-gray-300)}[data-uhuu-interactive] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/drag-item\\:shadow-md:is(:where(.uhuu\\:group\\/drag-item):hover *){--uhuu-tw-shadow:0 4px 6px -1px var(--uhuu-tw-shadow-color,#0000001a), 0 2px 4px -2px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:block:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *),[data-uhuu-portal] .uhuu\\:group-hover\\/remove-btn\\:hidden:is(:where(.uhuu\\:group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:cursor-not-allowed:is(:where(.uhuu\\:peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*),[data-uhuu-portal] .uhuu\\:peer-disabled\\:opacity-70:is(:where(.uhuu\\:peer):disabled~*){opacity:.7}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::-moz-placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .uhuu\\:placeholder\\:text-gray-400::placeholder{color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:border-gray-400:focus-within{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-2:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-2:focus-within{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .uhuu\\:focus-within\\:ring-gray-200:focus-within{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}@media (hover:hover){[data-uhuu-interactive] .uhuu\\:hover\\:scale-105:hover,[data-uhuu-portal] .uhuu\\:hover\\:scale-105:hover{--uhuu-tw-scale-x:105%;--uhuu-tw-scale-y:105%;--uhuu-tw-scale-z:105%;scale:var(--uhuu-tw-scale-x) var(--uhuu-tw-scale-y)}[data-uhuu-interactive] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:border-\\(--uhuu-thumbnail-border-strong\\):hover{border-color:var(--uhuu-thumbnail-border-strong)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-200:hover{border-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:border-gray-400:hover,[data-uhuu-portal] .uhuu\\:hover\\:border-gray-400:hover{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-\\(--uhuu-shell-surface\\):hover{background-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-50:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-50:hover{background-color:var(--uhuu-color-gray-50)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100:hover,[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-200:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-200:hover{background-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-gray-800:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-gray-800:hover{background-color:var(--uhuu-color-gray-800)}[data-uhuu-interactive] .uhuu\\:hover\\:bg-white:hover,[data-uhuu-portal] .uhuu\\:hover\\:bg-white:hover{background-color:var(--uhuu-color-white)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-600:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-600:hover{color:var(--uhuu-color-gray-600)}[data-uhuu-interactive] .uhuu\\:hover\\:text-gray-900:hover,[data-uhuu-portal] .uhuu\\:hover\\:text-gray-900:hover{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:hover\\:opacity-100:hover,[data-uhuu-portal] .uhuu\\:hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .uhuu\\:hover\\:shadow-lg:hover,[data-uhuu-portal] .uhuu\\:hover\\:shadow-lg:hover{--uhuu-tw-shadow:0 10px 15px -3px var(--uhuu-tw-shadow-color,#0000001a), 0 4px 6px -4px var(--uhuu-tw-shadow-color,#0000001a);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}}[data-uhuu-interactive] .uhuu\\:focus\\:w-40:focus,[data-uhuu-portal] .uhuu\\:focus\\:w-40:focus{width:calc(var(--uhuu-spacing) * 40)}[data-uhuu-interactive] .uhuu\\:focus\\:border-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-gray-400:focus{border-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:border-transparent:focus,[data-uhuu-portal] .uhuu\\:focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .uhuu\\:focus\\:bg-gray-100:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-gray-100:focus{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:focus\\:bg-red-50:focus,[data-uhuu-portal] .uhuu\\:focus\\:bg-red-50:focus{background-color:var(--uhuu-color-red-50)}[data-uhuu-interactive] .uhuu\\:focus\\:text-gray-900:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-gray-900:focus{color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus\\:text-red-700:focus,[data-uhuu-portal] .uhuu\\:focus\\:text-red-700:focus{color:var(--uhuu-color-red-700)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-2:focus{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-400)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-400\\/30:focus{--uhuu-tw-ring-color:color-mix(in oklab, var(--uhuu-color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .uhuu\\:focus\\:ring-blue-500:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-blue-500:focus{--uhuu-tw-ring-color:var(--uhuu-color-blue-500)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-200:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-200:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-gray-400:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-gray-400:focus{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-0:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-0:focus{--uhuu-tw-ring-offset-width:0px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:ring-offset-2:focus,[data-uhuu-portal] .uhuu\\:focus\\:ring-offset-2:focus{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus\\:outline-none:focus,[data-uhuu-portal] .uhuu\\:focus\\:outline-none:focus{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-2:focus-visible{--uhuu-tw-ring-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 calc(2px + var(--uhuu-tw-ring-offset-width)) var(--uhuu-tw-ring-color,currentcolor);box-shadow:var(--uhuu-tw-inset-shadow), var(--uhuu-tw-inset-ring-shadow), var(--uhuu-tw-ring-offset-shadow), var(--uhuu-tw-ring-shadow), var(--uhuu-tw-shadow)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-200:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-200)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-400:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-400)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-gray-900:focus-visible{--uhuu-tw-ring-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-2:focus-visible{--uhuu-tw-ring-offset-width:2px;--uhuu-tw-ring-offset-shadow:var(--uhuu-tw-ring-inset,) 0 0 0 var(--uhuu-tw-ring-offset-width) var(--uhuu-tw-ring-offset-color)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:ring-offset-\\(--uhuu-shell-surface\\):focus-visible{--uhuu-tw-ring-offset-color:var(--uhuu-shell-surface)}[data-uhuu-interactive] .uhuu\\:focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .uhuu\\:focus-visible\\:outline-none:focus-visible{--uhuu-tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .uhuu\\:active\\:cursor-grabbing:active,[data-uhuu-portal] .uhuu\\:active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .uhuu\\:disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .uhuu\\:disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-40:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .uhuu\\:disabled\\:opacity-50:disabled,[data-uhuu-portal] .uhuu\\:disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .uhuu\\:data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--uhuu-tw-translate-x:calc(var(--uhuu-spacing) * 4);translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-\\(--uhuu-shell-on-inverse\\)[data-state=checked]{background-color:var(--uhuu-shell-on-inverse)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--uhuu-color-gray-900)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .uhuu\\:data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--uhuu-tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--uhuu-color-gray-100)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .uhuu\\:data-\\[state\\=open\\]\\:duration-500[data-state=open]{--uhuu-tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--uhuu-tw-translate-x:0px;translate:var(--uhuu-tw-translate-x) var(--uhuu-tw-translate-y)}[data-uhuu-interactive] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .uhuu\\:data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--uhuu-color-gray-200)}@media (width>=40rem){[data-uhuu-interactive] .uhuu\\:sm\\:max-w-sm,[data-uhuu-portal] .uhuu\\:sm\\:max-w-sm{max-width:var(--uhuu-container-sm)}[data-uhuu-interactive] .uhuu\\:sm\\:flex-row,[data-uhuu-portal] .uhuu\\:sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .uhuu\\:sm\\:justify-end,[data-uhuu-portal] .uhuu\\:sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.uhuu\\:sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.uhuu\\:sm\\:space-x-2>:not(:last-child)){--uhuu-tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--uhuu-spacing) * 2) * var(--uhuu-tw-space-x-reverse));margin-inline-end:calc(calc(var(--uhuu-spacing) * 2) * calc(1 - var(--uhuu-tw-space-x-reverse)))}[data-uhuu-interactive] .uhuu\\:sm\\:text-left,[data-uhuu-portal] .uhuu\\:sm\\:text-left{text-align:left}}@media print{.uhuu\\:print\\:transform-none{transform:none}}[data-uhuu-interactive] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .uhuu\\:\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor],[data-uhuu-interactive] [data-uhuu-editor] [data-uhuu-paper],[data-uhuu-portal] [data-uhuu-editor] [data-uhuu-paper]{--uhuu-spacing:.25rem;--uhuu-font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--uhuu-default-font-family:var(--uhuu-font-sans);--uhuu-color-white:#fff;--uhuu-color-black:#000;--uhuu-color-red-50:oklch(97.1% .013 17.38);--uhuu-color-red-600:oklch(57.7% .245 27.325);--uhuu-color-red-700:oklch(50.5% .213 27.518);--uhuu-color-blue-50:oklch(97% .014 254.604);--uhuu-color-blue-100:oklch(93.2% .032 255.585);--uhuu-color-blue-200:oklch(88.2% .059 254.128);--uhuu-color-blue-300:oklch(80.9% .105 251.813);--uhuu-color-blue-400:oklch(70.7% .165 254.624);--uhuu-color-blue-500:oklch(62.3% .214 259.815);--uhuu-color-blue-600:oklch(54.6% .245 262.881);--uhuu-color-blue-700:oklch(48.8% .243 264.376);--uhuu-color-emerald-100:oklch(95% .052 163.051);--uhuu-color-emerald-600:oklch(59.6% .145 163.225);--uhuu-color-gray-50:oklch(98.5% .002 247.839);--uhuu-color-gray-100:oklch(96.7% .003 264.542);--uhuu-color-gray-200:oklch(92.8% .006 264.531);--uhuu-color-gray-300:oklch(87.2% .01 258.338);--uhuu-color-gray-400:oklch(70.7% .022 261.325);--uhuu-color-gray-500:oklch(55.1% .027 264.364);--uhuu-color-gray-600:oklch(44.6% .03 256.802);--uhuu-color-gray-700:oklch(37.3% .034 259.733);--uhuu-color-gray-800:oklch(27.8% .033 256.848);--uhuu-color-gray-900:oklch(21% .034 264.665);--uhuu-color-gray-950:oklch(13% .028 261.692);--uhuu-container-sm:24rem;--uhuu-container-md:28rem;--uhuu-text-xs:.75rem;--uhuu-text-xs--line-height:calc(1 / .75);--uhuu-text-sm:.875rem;--uhuu-text-sm--line-height:calc(1.25 / .875);--uhuu-text-base:1rem;--uhuu-text-base--line-height:calc(1.5 / 1);--uhuu-text-lg:1.125rem;--uhuu-text-lg--line-height:calc(1.75 / 1.125);--uhuu-font-weight-normal:400;--uhuu-font-weight-medium:500;--uhuu-font-weight-semibold:600;--uhuu-font-weight-bold:700;--uhuu-radius-sm:.25rem;--uhuu-radius-md:.375rem;--uhuu-radius-lg:.5rem;--uhuu-radius-xl:.75rem;--uhuu-shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--uhuu-shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--uhuu-shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--uhuu-shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--uhuu-shadow-2xl:0 25px 50px -12px #00000040;--uhuu-blur-sm:8px;--uhuu-blur-md:12px;box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .uhuu-page-options-trigger,[data-uhuu-portal] .uhuu-page-options-trigger{height:calc(var(--uhuu-spacing) * 7);width:calc(var(--uhuu-spacing) * 7);justify-content:center;align-items:center;gap:var(--uhuu-spacing);border-radius:var(--uhuu-radius-lg);background-color:var(--uhuu-color-gray-100);padding-inline:var(--uhuu-spacing);padding-block:calc(var(--uhuu-spacing) * .5);color:var(--uhuu-color-gray-600);display:flex}@media (hover:hover){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:var(--uhuu-color-gray-100)}@supports (color:color-mix(in lab, red, red)){[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{background-color:color-mix(in oklab, var(--uhuu-color-gray-100) 80%, transparent)}}[data-uhuu-interactive] .uhuu-page-options-trigger:hover,[data-uhuu-portal] .uhuu-page-options-trigger:hover{color:var(--uhuu-color-gray-800)}}[data-uhuu-interactive] .uhuu-page-number,[data-uhuu-portal] .uhuu-page-number{font-size:var(--uhuu-text-sm);line-height:var(--uhuu-tw-leading,var(--uhuu-text-sm--line-height));color:var(--uhuu-color-gray-500)}[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{gap:calc(var(--uhuu-spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-order-grid-cols,[data-uhuu-portal] .uhuu-page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{gap:calc(var(--uhuu-spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media (width>=48rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (width>=64rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (width>=80rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (width>=96rem){[data-uhuu-interactive] .uhuu-page-drag-drop-grid-cols,[data-uhuu-portal] .uhuu-page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--uhuu-color-neutral-50)}}@property --uhuu-tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --uhuu-tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --uhuu-tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-leading{syntax:"*";inherits:false}@property --uhuu-tw-font-weight{syntax:"*";inherits:false}@property --uhuu-tw-tracking{syntax:"*";inherits:false}@property --uhuu-tw-ordinal{syntax:"*";inherits:false}@property --uhuu-tw-slashed-zero{syntax:"*";inherits:false}@property --uhuu-tw-numeric-figure{syntax:"*";inherits:false}@property --uhuu-tw-numeric-spacing{syntax:"*";inherits:false}@property --uhuu-tw-numeric-fraction{syntax:"*";inherits:false}@property --uhuu-tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-inset-ring-color{syntax:"*";inherits:false}@property --uhuu-tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-ring-inset{syntax:"*";inherits:false}@property --uhuu-tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --uhuu-tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --uhuu-tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --uhuu-tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --uhuu-tw-blur{syntax:"*";inherits:false}@property --uhuu-tw-brightness{syntax:"*";inherits:false}@property --uhuu-tw-contrast{syntax:"*";inherits:false}@property --uhuu-tw-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-invert{syntax:"*";inherits:false}@property --uhuu-tw-opacity{syntax:"*";inherits:false}@property --uhuu-tw-saturate{syntax:"*";inherits:false}@property --uhuu-tw-sepia{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-color{syntax:"*";inherits:false}@property --uhuu-tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --uhuu-tw-drop-shadow-size{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-blur{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-brightness{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-contrast{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-grayscale{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-invert{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-opacity{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-saturate{syntax:"*";inherits:false}@property --uhuu-tw-backdrop-sepia{syntax:"*";inherits:false}@property --uhuu-tw-duration{syntax:"*";inherits:false}@property --uhuu-tw-ease{syntax:"*";inherits:false}@property --uhuu-tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *),:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):after,:is([data-uhuu-chrome],[data-uhuu-chrome] *):after,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)):before,:is([data-uhuu-chrome],[data-uhuu-chrome] *):before,:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::backdrop,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),html:is([data-uhuu-chrome],[data-uhuu-chrome] *),:host:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:host:is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),hr:is([data-uhuu-chrome],[data-uhuu-chrome] *){height:0;color:inherit;border-top-width:1px}abbr:where([title]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),abbr:where([title]):is([data-uhuu-chrome],[data-uhuu-chrome] *){text-decoration:underline dotted}h1:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h1:is([data-uhuu-chrome],[data-uhuu-chrome] *),h2:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h2:is([data-uhuu-chrome],[data-uhuu-chrome] *),h3:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h3:is([data-uhuu-chrome],[data-uhuu-chrome] *),h4:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h4:is([data-uhuu-chrome],[data-uhuu-chrome] *),h5:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h5:is([data-uhuu-chrome],[data-uhuu-chrome] *),h6:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),h6:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:inherit;font-weight:inherit}a:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),a:is([data-uhuu-chrome],[data-uhuu-chrome] *){color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),b:is([data-uhuu-chrome],[data-uhuu-chrome] *),strong:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),strong:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}code:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),code:is([data-uhuu-chrome],[data-uhuu-chrome] *),kbd:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),kbd:is([data-uhuu-chrome],[data-uhuu-chrome] *),samp:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),samp:is([data-uhuu-chrome],[data-uhuu-chrome] *),pre:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),pre:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),small:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-size:80%}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *),sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sub:is([data-uhuu-chrome],[data-uhuu-chrome] *){bottom:-.25em}sup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),sup:is([data-uhuu-chrome],[data-uhuu-chrome] *){top:-.5em}table:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),table:is([data-uhuu-chrome],[data-uhuu-chrome] *){text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-focusring:where(:not(iframe)):is([data-uhuu-chrome],[data-uhuu-chrome] *){outline:auto}progress:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),progress:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:baseline}summary:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),summary:is([data-uhuu-chrome],[data-uhuu-chrome] *){display:list-item}ol:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ol:is([data-uhuu-chrome],[data-uhuu-chrome] *),ul:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),ul:is([data-uhuu-chrome],[data-uhuu-chrome] *),menu:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),menu:is([data-uhuu-chrome],[data-uhuu-chrome] *){list-style:none}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),svg:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),svg:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *),canvas:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),canvas:is([data-uhuu-chrome],[data-uhuu-chrome] *),audio:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),audio:is([data-uhuu-chrome],[data-uhuu-chrome] *),iframe:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),iframe:is([data-uhuu-chrome],[data-uhuu-chrome] *),embed:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),embed:is([data-uhuu-chrome],[data-uhuu-chrome] *),object:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),object:is([data-uhuu-chrome],[data-uhuu-chrome] *){vertical-align:middle;display:block}img:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),img:is([data-uhuu-chrome],[data-uhuu-chrome] *),video:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),video:is([data-uhuu-chrome],[data-uhuu-chrome] *){max-width:100%;height:auto}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:is([data-uhuu-chrome],[data-uhuu-chrome] *),select:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),select:is([data-uhuu-chrome],[data-uhuu-chrome] *),optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *),textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-weight:bolder}:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where(select:is([multiple],[size])) optgroup option:is([data-uhuu-chrome],[data-uhuu-chrome] *){padding-inline-start:20px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{margin-inline-end:4px}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{opacity:1}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:currentColor}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-moz-placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::placeholder,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),textarea:is([data-uhuu-chrome],[data-uhuu-chrome] *){resize:vertical}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-search-decoration,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-search-decoration{-webkit-appearance:none}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-date-and-time-value,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{display:inline-flex}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-fields-wrapper,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-fields-wrapper{padding:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-year-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-year-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-month-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-month-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-day-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-day-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-hour-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-hour-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-minute-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-minute-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-second-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-second-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-millisecond-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-millisecond-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-datetime-edit-meridiem-field,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-datetime-edit-meridiem-field{padding-block:0}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-calendar-picker-indicator,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:-moz-ui-invalid:is([data-uhuu-chrome],[data-uhuu-chrome] *){box-shadow:none}button:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),button:is([data-uhuu-chrome],[data-uhuu-chrome] *),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),input:where([type=button],[type=reset],[type=submit]):is([data-uhuu-chrome],[data-uhuu-chrome] *){-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::file-selector-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-inner-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-inner-spin-button{height:auto}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *))::-webkit-outer-spin-button,:is([data-uhuu-chrome],[data-uhuu-chrome] *)::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),[hidden]:where(:not([hidden=until-found])):is([data-uhuu-chrome],[data-uhuu-chrome] *){display:none!important}:is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit;text-transform:inherit;color:inherit}:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-editor],[data-uhuu-editor] *,[data-uhuu-portal] *):not(:where([data-uhuu-paper],[data-uhuu-paper] *)),:where([data-uhuu-editor],[data-uhuu-chrome]):not(:where([data-uhuu-editor] *,[data-uhuu-chrome] *)):is([data-uhuu-chrome],[data-uhuu-chrome] *){font-family:var(--uhuu-font-sans,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-variant:normal;font-feature-settings:normal;font-variation-settings:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-align:start;text-shadow:none;color:#000;font-size:1rem;font-style:normal;font-weight:400;font-stretch:100%;line-height:1.5}@layer base.uhuu-document{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::-moz-placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[data-uhuu-reset=none]:not(#\\#),[data-uhuu-reset=none] :not(#\\#),[data-uhuu-reset=none]:not(#\\#):before,[data-uhuu-reset=none] :not(#\\#):before,[data-uhuu-reset=none]:not(#\\#):after,[data-uhuu-reset=none] :not(#\\#):after{all:revert-layer}}:root{--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff;--uhuu-thumbnail-caption:#0006;--uhuu-thumbnail-border:oklch(92.8% .006 264.531);--uhuu-thumbnail-border-strong:oklch(87.2% .01 258.338)}@media screen{html[data-uhuu-appearance=dark] [data-uhuu-editor]{color-scheme:dark;color:oklch(98.5% 0 0);--uhuu-shell-surface:oklch(27.4% .006 286.033);--uhuu-shell-on-inverse:oklch(21% .006 285.885);--uhuu-thumbnail-caption:oklch(21% .006 285.885/.92);--uhuu-thumbnail-border:oklch(37% .013 285.805);--uhuu-thumbnail-border-strong:oklch(44.2% .017 285.786);--uhuu-color-gray-50:oklch(30% .006 286);--uhuu-color-gray-100:oklch(33% .007 286);--uhuu-color-gray-200:oklch(100% 0 0/.1);--uhuu-color-gray-300:oklch(100% 0 0/.15);--uhuu-color-gray-400:oklch(66% .015 286);--uhuu-color-gray-500:oklch(70.5% .015 286.067);--uhuu-color-gray-600:oklch(87.1% .006 286.286);--uhuu-color-gray-700:oklch(92% .004 286.32);--uhuu-color-gray-800:oklch(96.7% .001 286.375);--uhuu-color-gray-900:oklch(98.5% 0 0);--uhuu-color-gray-950:oklch(98.5% 0 0);--uhuu-color-blue-50:oklch(62.3% .214 259.815/.15);--uhuu-color-blue-100:oklch(62.3% .214 259.815/.25);--uhuu-color-blue-200:oklch(62.3% .214 259.815/.35);--uhuu-color-red-50:oklch(70.4% .191 22.216/.15);--uhuu-color-red-600:oklch(70.4% .191 22.216);--uhuu-color-red-700:oklch(80.8% .114 19.571);--uhuu-color-emerald-100:oklch(76.5% .177 163.223/.15);--uhuu-color-emerald-600:oklch(76.5% .177 163.223);--uhuu-shadow-sm:0 1px 3px 0 #0006, 0 1px 2px -1px #0006;--uhuu-shadow-md:0 4px 6px -1px #0006, 0 2px 4px -2px #0006;--uhuu-shadow-lg:0 10px 15px -3px #00000080, 0 4px 6px -4px #00000080}html[data-uhuu-appearance=dark] [data-uhuu-editor] [data-uhuu-paper]{color-scheme:light;color:initial;scrollbar-color:auto;--uhuu-shell-surface:#fff;--uhuu-shell-on-inverse:#fff}@layer base{html[data-uhuu-appearance=dark] [data-uhuu-editor],html[data-uhuu-appearance=dark] [data-uhuu-editor] :not([data-uhuu-paper],[data-uhuu-paper] *){border-color:oklch(100% 0 0/.1)}}html[data-uhuu-appearance=dark] body{background-color:oklch(24.5% .004 286)}html[data-uhuu-appearance=dark],html[data-uhuu-appearance=dark] .uhuu-zoom-pane{scrollbar-color:oklch(37% .013 285.805) transparent}html[data-uhuu-appearance=dark] [data-section-content]{scrollbar-color:auto}}:root{--uhuu-page-width:210mm;--uhuu-page-height:297mm;--uhuu-page-bleed:0mm;--uhuu-page-background:var(--background,#fff);--uhuu-outline-color:var(--outline-color,#d1d5db);--uhuu-sheet-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width:0mm;--uhuu-glue-width:0mm;--uhuu-paper-color:#fff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.uhuu-page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.uhuu-page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.uhuu-page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}@media print{.uhuu-screen-only{display:none!important}}@media screen{.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing,.25rem) * 6);outline-style:var(--uhuu-tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--uhuu-tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px;outline-color:var(--uhuu-outline-color);--uhuu-tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.uhuu-pagination.horizontal_pages{justify-content:center;gap:calc(var(--spacing,.25rem) * 6);display:flex;overflow-x:auto;width:fit-content!important;min-width:fit-content!important}.uhuu-pagination.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.uhuu-pagination.two_pages .uhuu-page-sheet{flex-shrink:0}.uhuu-pagination.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.uhuu-pagination.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}.uhuu-image-container{position:absolute;overflow:hidden}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .uhuu-image-geometry{width:100%;max-width:none;height:100%;max-height:none}.uhuu-image-inner .uhuu-image-geometry.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .uhuu-image-geometry.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .uhuu-image-geometry.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .uhuu-image-geometry.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .uhuu-image-geometry.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .uhuu-image-geometry.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .uhuu-image-geometry.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .uhuu-image-geometry.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .uhuu-image-geometry.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .uhuu-image-geometry.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .uhuu-image-geometry.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .uhuu-image-geometry.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*=group\\/section]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*=group\\/section]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*=group\\/section]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*=group\\/section],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*=group\\/section]{grid-column:1;justify-self:end}}
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
var L = class {
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
}, R = r(null), ee = ({ config: e, children: t }) => /* @__PURE__ */ v(R.Provider, {
	value: e,
	children: t
}), te = "data-uhuu-pagination";
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
			t.removeAttribute(te);
			return;
		}
		let a = r.size || i.includes("measuring") ? "measuring" : i.includes("error") ? "error" : "settled";
		t.getAttribute("data-uhuu-pagination") !== a && t.setAttribute(te, a);
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
var ne = B(), re = t.createContext(!1), ie = typeof window > "u" ? l : d;
function ae(e) {
	let [t] = h(() => e ? ne.createScope() : null);
	ie(() => (t?.commit([], {}), () => t?.suspend()), [t]), l(() => () => t?.unmount(), [t]);
}
var oe = ({ children: e, className: n, setup: r }) => {
	let i = L.pageParams("static", r), a = JSON.stringify(L.resolveCssVars(r));
	ae(!t.useContext(re)), ie(() => {
		let e = document.documentElement.style;
		for (let [t, n] of Object.entries(JSON.parse(a))) e.getPropertyValue(t) !== n && e.setProperty(t, n);
	}, [a]), l(() => {
		let e = E.setupPageStyles(i?.page?.printCssUrl);
		return () => {
			e && E.removePageStyles(e);
		};
	}, [i?.page?.printCssUrl]);
	let o = [
		"uhuu-pagination",
		n,
		i?.page?.preview
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ v(ee, {
		config: i,
		children: /* @__PURE__ */ v("div", {
			className: o,
			children: e
		})
	});
}, V = a(({ children: e, className: t = "", style: n, pageNo: r, overlay: i, showBleed: a, "data-page-key": o }, s) => {
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
V.displayName = "Sheet";
//#endregion
//#region src/uhuu/pagination-static/flow-context.ts
var H = "data-uhuu-flow-continuation-copy", se = r(null);
//#endregion
//#region src/uhuu/utility/is-dev.ts
function ce() {
	if (typeof window < "u") {
		let e = window.location.hostname;
		return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
	}
	return !1;
}
//#endregion
//#region src/uhuu/utility/diagnostics.ts
var le = r(!1);
function ue() {
	let e = c(le), t = typeof window > "u" ? void 0 : window.__uhuuPreviewHost;
	return e || !!t?.enableEditorShellDevTools || ce();
}
var de = 1e3;
function fe(e, { fallbackMs: t = 100, win: n } = {}) {
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
var pe = 1e4;
function me(e, { begin: t, onReady: n, doc: r = e.ownerDocument, waitMs: i = pe }) {
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
//#region src/uhuu/pagination-static/flow-measure.ts
var he = /* @__PURE__ */ T({
	getEffectiveScale: () => _e,
	getOuterHeight: () => ve,
	hashString: () => Ie,
	parseAbsoluteLength: () => je,
	parseKeepWithNext: () => Se,
	parseLineCount: () => be,
	readFlowItemElements: () => Oe,
	readFlowTextLines: () => Fe,
	readHeaderGroupHeights: () => Ee,
	readHeaderGroupKey: () => we,
	readHeaderGroupRepeats: () => Te,
	readItemFlowTexts: () => Me,
	readItemMeta: () => ye,
	readUnstackedItem: () => ke,
	readUnwrappedHeights: () => De,
	serializeKeepWithNext: () => Ce,
	serializeLineCount: () => xe
}), ge = "data-uhuu-flow-text";
function _e(e) {
	let t = e.getBoundingClientRect().width, n = e.offsetWidth;
	if (!(t > 0) || !(n > 0)) return 1;
	let r = t / n;
	return Math.abs(r - 1) < .002 ? 1 : r;
}
function ve(e, t = 1) {
	let n = e.getBoundingClientRect(), r = window.getComputedStyle(e), i = Number.parseFloat(r.marginTop || "0") || 0, a = Number.parseFloat(r.marginBottom || "0") || 0;
	return n.height / t + i + a;
}
function ye(e) {
	let t = {
		breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
		breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
		keepWithNext: Se(e.dataset.uhuuFlowKeepWithNext),
		avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
		groupKey: e.dataset.uhuuFlowGroupKey
	}, n = be(e.dataset.uhuuFlowOrphans), r = be(e.dataset.uhuuFlowWidows);
	return n !== void 0 && (t.orphans = n), r !== void 0 && (t.widows = r), t;
}
function be(e) {
	if (!e) return;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t >= 1 ? t : void 0;
}
function xe(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? String(Math.floor(e)) : void 0;
}
function Se(e) {
	if (!e) return !1;
	if (e === "true") return !0;
	let t = Number.parseInt(e, 10);
	return Number.isFinite(t) && t > 0 ? t : !1;
}
function Ce(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function we(e) {
	return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function Te(e) {
	let t = {};
	for (let n of e) {
		let e = we(n);
		e && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[e] = !1 : e in t || (t[e] = !0));
	}
	return t;
}
function Ee(e, t = 1, n) {
	let r = {};
	for (let i of Array.from(e.querySelectorAll("[data-uhuu-flow-group-header=\"true\"]"))) {
		let e = i.dataset.uhuuFlowHeaderGroupKey;
		e && (r[e] = Math.max(r[e] ?? 0, n?.get(i) ?? ve(i, t)));
	}
	return r;
}
function De(e, t, n = 1) {
	let r = /* @__PURE__ */ new Map(), i = e.getBoundingClientRect().top;
	for (let e of Array.from(t.children)) {
		if (!(e instanceof HTMLElement) || !e.getClientRects().length) continue;
		let t = e.getBoundingClientRect().bottom, a = Math.max(0, t - i) / n;
		i = Math.max(i, t), e.dataset.uhuuFlowItem === "true" ? r.set(e, a) : e.dataset.uhuuFlowGroupHeader === "true" && r.set(e, Math.max(a, ve(e, n)));
	}
	return r;
}
function Oe(e) {
	return Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
}
function ke(e, t, n) {
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
var Ae = {
	px: 1,
	mm: 96 / 25.4,
	cm: 96 / 2.54,
	in: 96,
	pt: 96 / 72,
	pc: 16
};
function je(e) {
	if (typeof e == "number") return Number.isFinite(e) && e >= 0 ? e : void 0;
	if (typeof e != "string") return;
	let t = /^\s*(\d+(?:\.\d+)?|\.\d+)\s*(px|mm|cm|in|pt|pc)\s*$/i.exec(e);
	return t ? Number.parseFloat(t[1]) * Ae[t[2].toLowerCase()] : /^\s*0\s*$/.test(e) ? 0 : void 0;
}
function Me(e) {
	let t = e.closest("[data-uhuu-flow=\"true\"]");
	return Array.from(e.querySelectorAll(`[${ge}]`)).filter((e) => e.closest("[data-uhuu-flow=\"true\"]") === t);
}
var Ne = /[\p{L}\p{M}]/u;
function Pe(e) {
	let t = (t) => Number.parseFloat(e.getPropertyValue(t) || "0") || 0;
	return {
		top: t("border-top-width") + t("padding-top"),
		bottom: t("border-bottom-width") + t("padding-bottom")
	};
}
function Fe(e, t, n = 1, r) {
	let i = Me(e);
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
	let c = be(o.getPropertyValue("orphans")), l = be(o.getPropertyValue("widows")), u = [], d = [], f = 0, p = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
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
		if (!Ne.test(r) || !Ne.test(x(n + 1))) return !1;
		let i = b(n), a = u[i], o = n - d[i];
		m.setStart(a, o), m.setEnd(a, o + 1);
		let s = 0;
		for (let e of Array.from(m.getClientRects())) {
			let n = (e.top + e.bottom) / 2;
			e.height > 0 && n >= h[t].top && n <= h[t].bottom && (s += 1);
		}
		return s >= 2;
	}), C = a.getBoundingClientRect(), w = Pe(o), T = e.getBoundingClientRect(), E = Number.parseFloat(window.getComputedStyle(e).marginBottom || "0") || 0, D = T.bottom + (E - t) * n, O = (e) => (e - D) / n, k = C.top + w.top * n, A = C.bottom - w.bottom * n, j = [];
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
function Ie(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
//#endregion
//#region src/uhuu/pagination-static/flow-core.js
function Le(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function Re(e) {
	return typeof e == "string" && e ? e : null;
}
function ze(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : +!!e;
}
var Be = 2;
function Ve(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 1 ? Math.floor(e) : Be;
}
var He = .01, Ue = .01;
function We(e, t) {
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
		].every((e) => typeof e == "number" && Number.isFinite(e)) || n < t - He || t < i - He || o <= a || o > r) return null;
		i = n, a = o;
	}
	return n[n.length - 1].bottom - n[0].top > t + 1 ? null : e;
}
function Ge(e, t, n, r) {
	let { lines: i } = e;
	return Math.max(0, i[0].top + (i[r].bottom - i[n].top) + (t - i[i.length - 1].bottom));
}
function Ke({ itemIndex: e = -1, fragmentIndexes: t = [], groupKeys: n = [], pageIndex: r = 0, pageCount: i = 1, itemCount: a = 0, previousSourceIndex: o, fragmentIndex: s } = {}) {
	let c = Number.isInteger(s) ? s : t.indexOf(e), l = Re(n[e]), u = c > 0 ? t[c - 1] : null, d = u === null ? null : Re(n[u]), f = c > 0 ? t[c - 1] : o ?? (e > 0 ? e - 1 : null), p = f === null ? null : Re(n[f]), m = !!(l && p !== l), h = !!(l && d !== l);
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
function qe() {
	return {
		scannedItems: 0,
		chunkerCalls: 0,
		freshPageAttempts: 0,
		pages: 0
	};
}
function Je({ heights: e = [], keys: t = [], metas: n = [], availableHeight: r = 0, continuationHeight: i, headerGroupKeys: a = [], headerGroupHeights: o = {}, headerGroupRepeats: s = {}, previousHeaderGroupKey: c, onUnplaceableItem: l, lines: u, breakReserve: d, window: f, maxChunks: p = 0, metrics: m } = {}) {
	let h = f?.indexes, g = f?.offset ?? 0, _ = h ? Math.max(0, h.length - g) : e.length, v = h ? (e) => h[g + e] : (e) => e, y = Le(r) || Infinity, b = Le(i) || y, x = [{
		indexes: [],
		keys: []
	}], S = 0, C = () => x.length > 1 ? b : y, w = Le(d), T = /* @__PURE__ */ new Map(), E = () => {
		let e = C();
		return w && w < e && T.get(D()) ? e - w : e;
	}, D = () => x[x.length - 1], O = () => {
		let e = D().indexes;
		return e.length ? e[e.length - 1] : null;
	}, k = () => D().indexes.length > 0 || !!D().unplaceable, A = (e) => Re(a[v(e)]), j = (e) => Le(o[e] ?? 0), M = (e) => s[e] !== !1, N = (e, t) => {
		let n = A(e);
		return n ? t == null ? (e > 0 ? A(e - 1) : Re(c)) !== n || M(n) : A(t) !== n : !1;
	}, P = (t, n) => {
		let r = A(t);
		return Le(e[v(t)]) + (r && N(t, n) ? j(r) : 0);
	}, F = (e) => {
		let t = n[v(e)] ?? {};
		return t.avoidBreakInside && t.groupKey ? t.groupKey : null;
	}, I = (e, t) => {
		let n = A(e);
		return n && N(e, t) ? j(n) : 0;
	}, L = (e) => {
		let t = A(e);
		return t && M(t) ? j(t) : 0;
	}, R = /* @__PURE__ */ new Map(), ee = (e) => !!u && v(e) in u, te = (t) => {
		if (!ee(t)) return null;
		if (R.has(t)) return R.get(t);
		let r = n[v(t)] ?? {}, i = Le(e[v(t)]), a = r.avoidBreakInside ? null : We(u[v(t)], i);
		if (a) {
			let e = A(t), n = e ? j(e) : 0, r = Math.min(y, b);
			for (let e = 0; e < a.lines.length; e += 1) if (Ge(a, i, e, e) + n > r + Ue) {
				a = null;
				break;
			}
		}
		let o = a ? {
			entry: a,
			height: i,
			count: a.lines.length,
			orphans: Ve(r.orphans ?? a.orphans),
			widows: Ve(r.widows ?? a.widows)
		} : null;
		return R.set(t, o), o;
	}, z = /* @__PURE__ */ new Map(), B = null, ne = null, re = () => {
		B = Array(_ + 1).fill(0), ne = Array(_ + 1).fill(!1);
		for (let e = _ - 1; e >= 0; --e) {
			B[e] = B[e + 1] + P(e, e > 0 ? e - 1 : null);
			let t = n[v(e)] ?? {}, r = e + 1 < _ ? n[v(e + 1)] ?? {} : {};
			ne[e] = ne[e + 1] || !!r.breakBefore || !!(t.breakAfter && e < _ - 1);
		}
	}, ie = (e, t, n) => ne[e] ? !1 : (t > 0 ? Ge(n.entry, n.height, t, n.count - 1) + L(e) : P(e, null)) + B[e + 1] <= C() + Ue || e === _ - 1 && t === 0 && !(ee(e) && te(e)), ae = (e, t = 0, n = null) => {
		if (!w || k()) return;
		let r = D();
		T.has(r) || (B || re(), T.set(r, !ie(e, t, n)));
	}, oe = (e, t, n) => {
		let r = 0, i = n;
		for (let n = e; n < _ && F(n) === t; n += 1) m && (m.scannedItems += 1), r += P(n, i), i = n;
		return r;
	}, V = (e, t, { currentHeight: n, ownHeight: r, stopEarly: i } = {}) => {
		let a = 0, o = e;
		for (let s = 1; s <= t; s += 1) {
			let t = e + s;
			if (t >= _) break;
			m && (m.scannedItems += 1);
			let c = P(t, o), l = ee(t) && n + (r + a + c) > E() + Ue ? te(t) : null;
			if (l && l.count >= l.orphans + l.widows) {
				a += c - l.height + Ge(l.entry, l.height, 0, l.orphans - 1);
				break;
			}
			if (a += c, i && n + (r + a) > E()) break;
			o = t;
		}
		return a;
	}, H = () => {
		k() && (x.push({
			indexes: [],
			keys: []
		}), S = 0);
	}, se = (e, n, r) => {
		let i = t[v(e)] ?? String(v(e)), a = A(e) ?? void 0, o = a && N(e, null) ? j(a) : 0, s = {
			index: e,
			key: i,
			height: n,
			headerHeight: o,
			requiredHeight: r,
			availableHeight: E(),
			groupKey: a,
			reason: o > 0 ? "item-with-header-too-tall" : "item-too-tall"
		};
		D().unplaceable = s, l?.(s), x.push({
			indexes: [],
			keys: []
		}), S = 0;
	}, ce = (e, t) => {
		let n = k(), r = P(e, O());
		if (r > E() - S) return !1;
		if (!n) return !0;
		let i = V(e, ze(t.keepWithNext), {
			currentHeight: S,
			ownHeight: r,
			stopEarly: Number.isFinite(E())
		});
		return S + r + i <= E();
	}, le = (e, t, n, r) => {
		let { entry: i, height: a, count: o, orphans: s, widows: c } = r, l = (e, t) => Ge(i, a, e, t), u = (e, t, n) => {
			let r = e, i = t, a = e - 1;
			for (; r <= i;) {
				let t = r + i >> 1;
				l(e, t) <= n + Ue ? (a = t, r = t + 1) : i = t - 1;
			}
			return a;
		}, d = (n, r, i) => {
			let a = D();
			if (a.indexes.push(e), a.keys.push(t), S += i, n === 0 && r === o - 1) return;
			let s = z.get(a);
			s || (s = /* @__PURE__ */ new Map(), z.set(a, s)), s.set(e, [n, r]);
		}, f = 0;
		for (;;) {
			m && (m.scannedItems += 1), ae(e, f, r);
			let t = k(), i = f === 0 ? I(e, O()) : L(e), p = E() - S, h = (f === 0 ? a : l(f, o - 1)) + i;
			if (h <= p + Ue) {
				if (t) {
					let t = V(e, ze(n.keepWithNext), {
						currentHeight: S,
						ownHeight: h,
						stopEarly: Number.isFinite(E())
					});
					if (S + h + t > E() + Ue) {
						let e = o - 1 - c;
						e - f + 1 >= s ? (d(f, e, l(f, e) + i), H(), f = e + 1) : H();
						continue;
					}
				}
				d(f, o - 1, h);
				return;
			}
			let g = u(f, o - 2, p - i), _ = Math.min(g, o - 1 - c);
			if (_ >= f && _ - f + 1 >= s) d(f, _, l(f, _) + i);
			else if (t) {
				H();
				continue;
			} else {
				let e = Math.max(f, g);
				if (d(f, e, l(f, e) + i), e >= o - 1) return;
				f = e + 1, H();
				continue;
			}
			f = _ + 1, H();
		}
	};
	for (let r = 0; r < _ && !(p && x.length > p); r += 1) {
		m && (m.scannedItems += 1);
		let i = n[v(r)] ?? {}, a = Le(e[v(r)]), o = t[v(r)] ?? String(v(r));
		i.breakBefore && H();
		let s = F(r), c = r > 0 ? F(r - 1) : null;
		s && s !== c && k() && S + oe(r, s, O()) > E() && H(), ae(r);
		let l = ee(r) && !ce(r, i) ? te(r) : null;
		if (l) {
			le(r, o, i, l), i.breakAfter && r < _ - 1 && H();
			continue;
		}
		let u = O(), d = P(r, u);
		if (k() && d > E() - S && (H(), u = null, ae(r), d = P(r, u)), d > E()) {
			se(r, a, d);
			continue;
		}
		let f = k(), p = f ? V(r, ze(i.keepWithNext), {
			currentHeight: S,
			ownHeight: d,
			stopEarly: Number.isFinite(E())
		}) : 0, h = d + p;
		f && S + h > E() && (H(), u = null, ae(r), d = P(r, u), d > E()) ? se(r, a, d) : (D().indexes.push(r), D().keys.push(o), S += d, i.breakAfter && r < _ - 1 && H());
	}
	let ue = x.filter((e) => e.indexes.length > 0 || !!e.unplaceable);
	if (!ue.length) return m && !p && (m.pages = 1), [{
		indexes: [],
		keys: []
	}];
	let de = p ? ue.slice(0, p) : ue;
	m && !p && (m.pages = de.length);
	let fe = Xe(de, z, (e) => te(e).entry);
	return de.map((e) => {
		if (!e.indexes.length) return e;
		let t = z.get(e), n = [];
		for (let r = 0; r < e.indexes.length; r += 1) {
			let i = e.indexes[r], a = A(i);
			if (!a) continue;
			if (r === 0 && t?.get(i)?.[0] > 0) {
				M(a) && n.push({
					groupKey: a,
					itemIndex: i,
					isContinuation: !0
				});
				continue;
			}
			let o = r > 0 ? e.indexes[r - 1] : null;
			if (!N(i, o)) continue;
			let s = i > 0 ? A(i - 1) : null;
			n.push({
				groupKey: a,
				itemIndex: i,
				isContinuation: s === a
			});
		}
		let r = fe.get(e);
		return !n.length && !r ? e : {
			...e,
			...n.length ? { groupHeaders: n } : {},
			...r ? { splits: r } : {}
		};
	});
}
function Ye(e, t, n, r) {
	let i = [];
	for (let a = t; a <= n; a += 1) e[a].hyphen && a !== e.length - 1 && (a === n && r || i.push(e[a + 1].start));
	return i.length ? { hyphens: i } : {};
}
function Xe(e, t, n) {
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
				...Ye(a, o, s, c === t.length - 1)
			};
		});
	}
	return r;
}
function Ze(e, t, n) {
	return (e.indexes ?? []).reduce((e, n) => e + Le(t[n]), 0) + (e.groupHeaders ?? []).reduce((e, t) => e + Le(n[t.groupKey]), 0);
}
function Qe(e, t, n) {
	return !t || !n ? e : {
		...e,
		headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
		headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
	};
}
function $e(e, t, n, r, i, a) {
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
function et(e, t, n, r, i, a, o) {
	if (n >= t.length) return {
		chunk: {
			indexes: [],
			keys: []
		},
		consumed: 0,
		height: 0
	};
	let s = Qe(e, i, a);
	e.metrics && (e.metrics.chunkerCalls += 1);
	let c = $e(Je({
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
		height: Ze(c, e.heights ?? [], s.headerGroupHeights ?? {})
	};
}
function tt({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function nt(e, t, n, r, i) {
	let a = Le(r.chunk.unplaceable?.requiredHeight);
	if (a > 0 && a <= i) return "move";
	let o = t[n];
	if (o === void 0) return "no";
	let s = e.metas?.[o] ?? {};
	return ze(s.keepWithNext) > 0 || s.avoidBreakInside && s.groupKey ? "compare" : "no";
}
function rt(e) {
	return !!(e.layout?.length || e.unplaceable);
}
function it({ nodes: e = [], heights: t = [], keys: n = [], metas: r = [], availableHeight: i = 0, continuationHeight: a, headerGroupKeys: o = [], headerGroupHeights: s = {}, headerGroupRepeats: c = {}, columnHeaderGroupHeights: l = {}, columnHeaderGroupRepeats: u = {}, onUnplaceableItem: d, metrics: f } = {}) {
	tt({
		nodes: e,
		itemCount: t.length
	});
	let p = Le(i) || Infinity, m = Le(a) || p, h = {
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
		rt(v()) && (g.push({
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
				y() - _ <= 0 && rt(v()) && x(), r[i[o]]?.breakBefore && rt(v()) && x();
				let e = o > 0 ? i[o - 1] : void 0, t = et(h, i, o, y() - _, void 0, void 0, e);
				if (rt(v())) {
					let n = nt(h, i, o, t, b);
					if (n !== "no") {
						f && (f.freshPageAttempts += 1);
						let r = et(h, i, o, b, void 0, void 0, e);
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
			y() - _ <= 0 && rt(v()) && x(), a.some((e) => {
				let t = e.indexes[e.cursor];
				return t !== void 0 && r[t]?.breakBefore;
			}) && rt(v()) && x();
			let e = y() - _, t = a.map((t) => et(h, t.indexes, t.cursor, e, i.id, t.id, t.cursor > 0 ? t.indexes[t.cursor - 1] : void 0)), n, o = () => n ??= a.map((e) => (f && (f.freshPageAttempts += 1), et(h, e.indexes, e.cursor, b, i.id, e.id, e.cursor > 0 ? e.indexes[e.cursor - 1] : void 0)));
			if (rt(v()) && a.some((e, n) => {
				let r = nt(h, e.indexes, e.cursor, t[n], b);
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
	let C = g.filter(rt);
	return C.length ? (f && (f.pages = C.length), C) : (f && (f.pages = 1), [{
		indexes: [],
		keys: [],
		layout: []
	}]);
}
//#endregion
//#region src/uhuu/pagination-static/flow-plan.ts
var at = Je, ot = it;
function st(e) {
	return Number.parseFloat(e || "0") || 0;
}
function ct(e, t) {
	let n = (e) => {
		let t = window.getComputedStyle(e);
		return st(t.paddingTop) + st(t.paddingBottom) + st(t.borderTopWidth) + st(t.borderBottomWidth);
	};
	for (let r of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let e = window.getComputedStyle(r), i = st(e.marginTop) + st(e.marginBottom);
		if (n(r) > .01 || i > .01) throw TypeError("[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps.");
		let a = [];
		for (let e of Array.from(r.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
			let r = window.getComputedStyle(e), i = st(r.marginTop) + st(r.marginBottom);
			if (n(e) > .01 || i > .01 || st(r.rowGap) > .01 || st(r.minHeight) > .01 || r.maxHeight !== "none") throw TypeError("[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps.");
			let o = Array.from(e.querySelectorAll("[data-uhuu-flow-item=\"true\"], [data-uhuu-flow-group-header=\"true\"]")).reduce((e, n) => e + ve(n, t), 0);
			a.push(o);
		}
		let o = Math.max(0, ...a);
		if (ve(r, t) > o + 1) throw TypeError("[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent.");
	}
}
function lt(e, t, n) {
	let r = e.getBoundingClientRect();
	return n !== void 0 && r.height > 0 && r.bottom > n + .5 ? {
		height: Math.max(0, n - r.top) / t,
		overflow: (r.bottom - n) / t
	} : {
		height: r.height ? r.height / t : e.clientHeight,
		overflow: 0
	};
}
function ut(e) {
	return e.closest(".uhuu-page-sheet")?.getBoundingClientRect().bottom;
}
function dt(e, t, n) {
	let r = e.dataset.uhuuFlowItemCount;
	if (r === void 0) return;
	let i = Number.parseInt(r, 10);
	Number.isInteger(i) && i !== t.length && n.onUnmarkedItems?.(t.length, i);
}
var ft = (e) => e === void 0 ? void 0 : Math.round(e * 100) / 100, pt = "[data-uhuu-flow-text]", mt = (e) => e ? {
	lines: e.lines.map(({ top: e, bottom: t, start: n, hyphen: r }) => r ? [
		ft(e),
		ft(t),
		n,
		1
	] : [
		ft(e),
		ft(t),
		n
	]),
	end: e.end,
	justify: e.justify
} : null;
function ht(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	if (t.dataset.uhuuFlowLayout === "columns") return gt(e, t, n);
	let i = Oe(t);
	if (dt(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: []
		}],
		signature: `${r}:empty`,
		unplaceableItems: []
	};
	let a = ke(e, t, i);
	a && n.onUnstackedItem?.(a);
	let o = _e(e), { height: s, overflow: c } = lt(e, o, n.clipBottom);
	c > 0 && n.onAreaOverflow?.(c);
	let l = Number.isFinite(s) && s > 0, u = n.breakReserve && n.breakReserve > 0 ? n.breakReserve : void 0, d = t.dataset.uhuuFlowAsChild === "true" ? De(e, t, o) : void 0, f = i.map((e) => d?.get(e) ?? ve(e, o)), p = i.map(ye), m = i.map((e, t) => e.dataset.uhuuFlowKey || String(t)), h = i.map(we), g = Te(i), _ = Ee(t, o, d), v = l ? n.continuationHeight : void 0, y = [], b = l ? s : f.reduce((e, t) => e + t, 0) + Object.values(_).reduce((e, t) => e + t, 0), x = !!t.querySelector(pt), S = /* @__PURE__ */ new Map(), C = x ? Array(i.length) : void 0;
	return C && i.forEach((e, t) => {
		e.querySelector(pt) && Object.defineProperty(C, t, {
			enumerable: !0,
			get: () => (S.has(t) || S.set(t, Fe(e, f[t], o, n.onIssue)), S.get(t))
		});
	}), l || n.onZeroHeight?.(), {
		flowId: r,
		chunks: at({
			heights: f,
			keys: m,
			metas: p,
			availableHeight: b,
			continuationHeight: v,
			headerGroupKeys: h,
			headerGroupHeights: _,
			headerGroupRepeats: g,
			onUnplaceableItem: (e) => {
				y.push(e), n.onUnplaceableItem?.(e);
			},
			...x ? { lines: C } : {},
			...u ? { breakReserve: u } : {}
		}),
		signature: Ie(JSON.stringify({
			version: x ? 4 : 2,
			flowId: r,
			availableHeight: Math.round(b * 100) / 100,
			continuationHeight: ft(v),
			...u ? { breakReserve: ft(u) } : {},
			heights: f.map((e) => Math.round(e * 100) / 100),
			keys: m,
			metas: p,
			headerGroupKeys: h,
			headerGroupHeights: _,
			headerGroupRepeats: g,
			unplaceableItems: y,
			...x ? { lines: [...S].sort(([e], [t]) => e - t).map(([e, t]) => [e, mt(t)]) } : {}
		})),
		unplaceableItems: y
	};
}
function gt(e, t, n = {}) {
	let r = t.dataset.uhuuFlowId;
	if (!r) return null;
	let i = Oe(t);
	if (dt(t, i, n), !i.length) return {
		flowId: r,
		chunks: [{
			indexes: [],
			keys: [],
			layout: []
		}],
		signature: `${r}:columns:empty`,
		unplaceableItems: []
	};
	let a = _e(e);
	ct(t, a), t.querySelector(pt) && n.onIssue?.("flow-text-in-columns"), n.breakReserve && n.onIssue?.("break-reserve-in-columns");
	let { height: o, overflow: s } = lt(e, a, n.clipBottom);
	s > 0 && n.onAreaOverflow?.(s);
	let c = Number.isFinite(o) && o > 0, l = Math.max(-1, ...i.map((e) => Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10))), u = Array.from({ length: l + 1 }, () => 0), d = Array.from({ length: l + 1 }, (e, t) => String(t)), f = Array.from({ length: l + 1 }, () => ({})), p = Array.from({ length: l + 1 }, () => void 0), m = t.dataset.uhuuFlowAsChild === "true" ? De(e, t, a) : void 0;
	for (let e of i) {
		let t = Number.parseInt(e.dataset.uhuuFlowIndex ?? "-1", 10);
		!Number.isInteger(t) || t < 0 || (u[t] = m?.get(e) ?? ve(e, a), d[t] = e.dataset.uhuuFlowKey || String(t), f[t] = ye(e), p[t] = we(e));
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
	}), g = Te(i), _ = Ee(t, a, m), v = c ? n.continuationHeight : void 0, y = {}, b = {};
	for (let e of Array.from(t.querySelectorAll(":scope > [data-uhuu-flow-layout-node=\"columns\"]"))) {
		let t = e.dataset.uhuuFlowLayoutId;
		if (t) {
			y[t] = {}, b[t] = {};
			for (let n of Array.from(e.querySelectorAll(":scope > [data-uhuu-flow-column]"))) {
				let e = n.dataset.uhuuFlowColumn;
				if (!e) continue;
				let r = Array.from(n.querySelectorAll("[data-uhuu-flow-item=\"true\"]"));
				y[t][e] = Ee(n, a), b[t][e] = Te(r);
			}
		}
	}
	let x = [], S = c ? o : u.reduce((e, t) => e + t, 0) + Object.values(_).reduce((e, t) => e + t, 0);
	return c || n.onZeroHeight?.(), {
		flowId: r,
		chunks: ot({
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
		signature: Ie(JSON.stringify({
			version: 3,
			flowId: r,
			availableHeight: Math.round(S * 100) / 100,
			continuationHeight: ft(v),
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
//#endregion
//#region src/uhuu/pagination-static/flow-area.tsx
var _t = typeof window > "u" ? e.useEffect : e.useLayoutEffect, vt = {
	"multiple-flow-text": "an item holds more than one Static.FlowText, so it is not split. Give each item one FlowText.",
	"inline-flow-text": "a Static.FlowText is not a block element (as=\"span\"?), so its lines are not its own and its item is not split. Keep the default `as=\"div\"` or another block element.",
	"rewrapping-text-wrap": "a Static.FlowText has text-wrap: balance or pretty, which re-flows each piece of a split item, so a piece may not match its planned lines. Use text-wrap: wrap on split text.",
	"flow-text-in-columns": "Static.FlowColumns does not split Static.FlowText items; they render whole.",
	"break-reserve-in-columns": "Static.FlowColumns does not keep breakReserve; its pages use their full region."
};
function yt(e, t) {
	for (let n of Array.from(e.querySelectorAll(`[${H}] [data-uhuu-flow="true"]`))) if (n.dataset.uhuuFlowId === t) return n.closest("[data-uhuu-flow-area]");
	return null;
}
function bt({ children: t, className: n = "", style: r, onFlowMeasurement: i, measureContinuation: a = !1, breakReserve: o }) {
	let s = e.useContext(se), c = e.useRef(null), l = e.useId(), u = e.useRef(null), d = e.useRef(s), f = e.useRef(i), p = ue(), m = e.useRef(p), h = e.useRef(!1), g = je(o), _ = e.useRef(""), y = e.useRef(!1), b = e.useRef(!1), x = e.useRef(/* @__PURE__ */ new Set()), S = e.useRef(""), C = e.useRef(""), w = e.useRef(""), T = e.useRef(/* @__PURE__ */ new Set()), E = e.useRef(!1), D = e.useRef(""), O = e.useRef("");
	return _t(() => {
		f.current = i, m.current = p;
	}, [i, p]), _t(() => {
		o !== void 0 && g === void 0 && p && !E.current && (E.current = !0, console.warn(`[uhuu-components] Static.FlowArea breakReserve ${JSON.stringify(o)} is not a CSS length with an absolute unit ("20mm", "12px") or a number of px, so no room is kept at a page break.`));
	}, [
		o,
		g,
		p
	]), e.useEffect(() => () => {
		d.current?.unregisterMeasurement?.(u.current ?? "", l);
	}, [l]), _t(() => {
		if (a) return s?.requestContinuation?.();
	}, [s, a]), _t(() => {
		if (d.current = s, s?.mode !== "measure" || !s.registerMeasurement || !c.current) return;
		let e = c.current, t = e.closest("[data-uhuu-flow-measurement]") ?? e, n = a && !!s.requestContinuation, r = null, i, o = null, p = null, v = null;
		_.current = "";
		let E = (t = !0) => {
			t && !i && (i = k?.begin()), r === null && (r = fe(() => {
				r = null;
				try {
					P();
				} catch (t) {
					_.current = "", k?.fail(t), e.setAttribute("data-uhuu-flow-error", String(t)), console.error("[uhuu-components] Flow measurement failed:", t);
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
			let n = yt(t, e);
			if (n !== p && (p && o?.unobserve(p), n && o?.observe(n), p = n), !n) return { failure: "missing-continuation-flow" };
			let { height: r } = lt(n, _e(n), ut(n));
			return Number.isFinite(r) && r > 0 ? { height: r } : { failure: "unmeasurable-flow-area" };
		};
		function P() {
			j();
			let r = e.querySelectorAll("[data-uhuu-flow=\"true\"]");
			r.length > 1 && !y.current && (y.current = !0, console.warn("[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."));
			let i = r[0], a = i?.dataset.uhuuFlowId;
			if (u.current && u.current !== a && (s?.unregisterMeasurement?.(u.current, l), u.current = null, _.current = ""), !i) {
				!h.current && v === null && (v = setTimeout(() => {
					v = null, !(h.current || !e.isConnected || e.querySelector("[data-uhuu-flow=\"true\"]")) && (h.current = !0, console.warn(`[uhuu-components] Static.FlowArea on page "${s?.pageKey ?? ""}" renders no Static.Flow, so data-uhuu-pagination stays "measuring". Render one Flow in the area (an empty Flow is one page).`));
				}, de)), M("missing-flow"), k?.clear();
				return;
			}
			v !== null && (clearTimeout(v), v = null);
			let o = a ? Array.from(t.querySelectorAll("[data-uhuu-flow=\"true\"]")).filter((e) => e.dataset.uhuuFlowId === a && !e.closest("[data-uhuu-flow-continuation-copy]")).length : 0, c = a ? o > 1 ? "duplicate-flow-id" : null : "missing-flow-id";
			if (c && S.current !== `${c}:${a}` && (S.current = `${c}:${a}`, console.warn(`[uhuu-components] Static.Flow ${a ? `id "${a}" is used by more than one Flow` : "has no id"} on page "${s?.pageKey ?? ""}". Give each Flow on a page a stable, unique id.`)), !a) {
				_.current = "", M("missing-flow-id"), k?.fail("missing-flow-id");
				return;
			}
			let d = c ?? (r.length > 1 ? "multiple-flows-in-area" : null), p = n ? N(a) : void 0, E = ht(e, i, {
				continuationHeight: p?.height,
				breakReserve: g,
				clipBottom: ut(e),
				onAreaOverflow: (e) => {
					D.current !== a && (D.current = a, console.warn(`[uhuu-components] Static.FlowArea on page "${s?.pageKey ?? ""}" (Static.Flow "${a}") extends ${Math.round(e)}px below its sheet, where nothing prints: only the part on the sheet is planned. Give the area a height within the page; a page whose height grows with its content (grid-template-rows: none, an unbounded flex item) cannot bound a flow.`));
				},
				onUnstackedItem: (e) => {
					d ??= "unstacked-flow-items", O.current !== a && (O.current = a, console.warn(`[uhuu-components] Static.Flow "${a}" on page "${s?.pageKey ?? ""}": item "${e.dataset.uhuuFlowKey ?? ""}" is not laid out below the item before it, so the flow cannot be paginated. Items stack down their FlowArea: no multi-column container (column-width, columns), flex row, grid or float around them.`));
				},
				onUnmarkedItems: (e, t) => {
					d ??= "unmarked-flow-item", w.current !== a && (w.current = a, console.warn(`[uhuu-components] Static.Flow "${a}" asChild: ${t - e} of ${t} items carry no flow attributes, so the flow cannot be paginated. renderItem must return a DOM element, or a component that passes the props it receives on to its root DOM element.`));
				},
				onZeroHeight: () => {
					i.getClientRects().length && (d = "unmeasurable-flow-area", !b.current && (b.current = !0, console.warn("[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0.")));
				},
				onIssue: (e) => {
					if (e === "unsupported-content" || !m.current) return;
					let t = `${a}:${e}`;
					T.current.has(t) || (T.current.add(t), console.warn(`[uhuu-components] Static.Flow "${a}": ${vt[e]}`));
				},
				onUnplaceableItem: (e) => {
					x.current.has(e.key) || (x.current.add(e.key), console.warn(`[uhuu-components] Static.Flow item "${e.key}" cannot fit in its FlowArea (${Math.round(e.requiredHeight)}px required > ${Math.round(e.availableHeight)}px available). It prints on a page of its own, scaled to fit. Put its long text in a Static.FlowText, split the item, or reduce its height.`));
				}
			});
			if (!E) return;
			let A = E.chunks.length > 1 ? p?.failure : void 0;
			if (A && C.current !== `${A}:${a}` && (C.current = `${A}:${a}`, console.warn(`[uhuu-components] Static.FlowArea measureContinuation: page "${s?.pageKey ?? ""}" ` + (A === "missing-continuation-flow" ? `renders no Static.Flow "${a}" on a continuation sheet, so its continuation pages would lose its items. Render the FlowArea and its Flow on every sheet.` : `lays the FlowArea of "${a}" out at zero height on a continuation sheet. Give it a measurable height there too.`))), A === "missing-continuation-flow") M(A), k?.clear();
			else if (d ??= A ?? null, k?.measured(E, d), M(d), E.signature !== _.current) {
				s?.registerMeasurement?.(E, l), _.current = E.signature, u.current = E.flowId;
				try {
					f.current?.(E);
				} catch (e) {
					console.error("[uhuu-components] FlowArea onFlowMeasurement threw:", e);
				}
			}
		}
		let F = me(t, {
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
function xt({ children: e, header: t, footer: n, className: r = "", style: i, flowAreaClassName: a = "", flowAreaStyle: o, onFlowMeasurement: s, measureContinuation: c, breakReserve: l }) {
	return /* @__PURE__ */ y("div", {
		className: `uhuu-flow-page ${r}`,
		style: i,
		"data-uhuu-flow-page": "true",
		children: [
			t,
			/* @__PURE__ */ v(bt, {
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
var St = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.abbr.b.bdi.bdo.br.cite.code.data.del.dfn.em.i.ins.kbd.mark.s.samp.small.span.strong.sub.sup.time.u.var.wbr".split(".")), Ct = /* @__PURE__ */ new Set(["br"]);
function wt(e) {
	return typeof e == "string" ? e : typeof e == "function" ? e.displayName || e.name || "Component" : e && typeof e == "object" && e.displayName || "Component";
}
function Tt(t) {
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
					if (!St.has(t.type) || o.dangerouslySetInnerHTML) {
						r = {
							reason: "block-content",
							name: t.type
						};
						return;
					}
					Ct.has(t.type) && i.push(n.length), a(o.children);
					return;
				}
				r = {
					reason: "component-content",
					name: wt(t.type)
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
var Et = (e) => e === " " || e === "\n" || e === "	" || e === "\r" || e === "\f", Dt = "­";
function Ot(t, { text: n, breaks: r = [] }, { from: i, to: a, part: o, parts: s, hyphens: c = [] }) {
	let l = o === 0, u = o === s - 1, d = l ? 0 : Math.max(0, i), f = u ? n.length : Math.min(n.length, a), p = (e) => n[e - 1] === "\n" || r.includes(e);
	if (!l) {
		let e = d;
		for (; e < f && Et(n[e]);) e += 1;
		let t = n.slice(d, e).lastIndexOf("\n");
		t >= 0 ? d += t + 1 : p(d) || (d = e);
	}
	let m = !1, h = !1;
	if (!u) {
		if (c.includes(f) && !r.includes(f)) n[f - 1] === Dt && --f, m = !0;
		else {
			let e = f;
			for (; e > d && Et(n[e - 1]);) --e;
			(r.includes(f) || n.slice(e, f).includes("\n")) && (h = !0), f = e;
		}
	}
	let g = c.filter((e) => e > d && e < f && n[e - 1] !== Dt), _ = 0, v = !1, y = (t) => {
		if (t == null || typeof t == "boolean") return null;
		if (typeof t == "string" || typeof t == "number" || typeof t == "bigint") {
			let e = String(t), n = _, r = _ + e.length;
			_ = r;
			let i = Math.max(n, d), a = Math.min(r, f);
			if (!(i < a)) return null;
			let o = "", s = i;
			for (let t of g) t <= i || t > a || (o += e.slice(s - n, t - n) + Dt, s = t);
			return o += e.slice(s - n, a - n), m && !v && f <= r && (o += "-", v = !0), o;
		}
		if (Array.isArray(t)) return t.map(y);
		if (!e.isValidElement(t)) return null;
		let n = _;
		if (typeof t.type == "string" && Ct.has(t.type)) {
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
var kt = e.createContext(null), At = typeof window > "u" ? e.useEffect : e.useLayoutEffect, jt = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set();
function Nt(e) {
	let t = e.getBoundingClientRect();
	if (!(t.height > 0)) return;
	let n = window.getComputedStyle(e), r = (e) => Number.parseFloat(n.getPropertyValue(e) || "0") || 0;
	return {
		height: t.height / _e(e) - r("padding-top") - r("padding-bottom") - r("border-top-width") - r("border-bottom-width"),
		lineHeight: r("line-height") || r("font-size") * 1.2 || 16
	};
}
function Pt({ children: t, as: n = "div", className: r, style: i, ...a }) {
	let o = e.useContext(kt), s = ue(), c = e.useRef(null), l = e.useMemo(() => Tt(t), [t]), { text: u, problem: d } = l, f = o && !d ? Ot(t, l, o) : null, p = f ? o?.textHeight : void 0;
	e.useEffect(() => {
		if (!d || !s) return;
		let e = `${d.reason}:${d.name}`;
		jt.has(e) || (jt.add(e), console.warn(`[uhuu-components] Static.FlowText holds ${d.reason === "block-content" ? `a <${d.name}>` : `<${d.name}>`}: only text and inline text elements (span, strong, em, b, i, a, small, sub, sup, br) can split between lines, so its item is not split. Put block content in the item outside the FlowText, and an Editable around the FlowText rather than inside it.`));
	}, [d, s]), At(() => {
		let e = c.current;
		if (p === void 0 || !e || !s) return;
		let t = Nt(e);
		if (!t || t.height <= p + Math.max(2, t.lineHeight / 2)) return;
		let n = t.height, r = u.slice(0, 40);
		Mt.has(r) || (Mt.add(r), console.warn(`[uhuu-components] Static.FlowText "${u.slice(0, 40)}…": a piece lays out ${Math.round(n - p)}px taller than the lines it was planned with, so it re-wrapped. A continuation must give the FlowText the width it measured with (keep a label cell, empty), and ::first-line styles or text-wrap: balance | pretty re-flow a slice.`));
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
function Ft(e) {
	let t = e.availableHeight - e.headerHeight;
	if (!(e.height > 0) || !Number.isFinite(t)) return;
	let n = Math.min(1, Math.max(t, 1) / e.height);
	return n < 1 ? {
		transform: `scale(${n})`,
		transformOrigin: "top left"
	} : void 0;
}
var It = /* @__PURE__ */ new Set();
function Lt(e) {
	if (!e || typeof e != "object" || !("type" in e)) return;
	let t = e.type;
	return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Rt(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) r !== void 0 && (n[e] = r);
	return n;
}
function zt(e) {
	if (typeof e == "string") return e ? {
		key: e,
		repeatHeader: !0
	} : void 0;
	if (e?.key) return {
		key: e.key,
		repeatHeader: e.repeatHeader !== !1
	};
}
function Bt(e) {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e, n) => {
		t.has(e) || t.set(e, n);
	}), t;
}
function Vt(e) {
	if (!e) return;
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.itemIndex);
		e || (e = /* @__PURE__ */ new Set(), t.set(n.itemIndex, e)), e.add(n.groupKey);
	}
	return t;
}
var Ht = /* @__PURE__ */ new Set();
function Ut(t) {
	return t == null || typeof t == "boolean" ? "nothing" : Array.isArray(t) ? "several nodes" : e.isValidElement(t) ? "a fragment" : "text";
}
function Wt(t, n, r) {
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
	return Ht.has(i) || (Ht.add(i), console.warn(`[uhuu-components] Static.Flow "${r.flowId}" asChild: ${r.source} returned ${Ut(t)}. asChild needs exactly one element to carry the flow's attributes, so it renders in a wrapper <div> instead.`)), null;
}
function Gt(e, t, n, r) {
	return r.asChild && Wt(e, {
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
function Kt(e, t) {
	return {
		"data-uhuu-flow-break-before": e.breakBefore ? "true" : void 0,
		"data-uhuu-flow-break-after": e.breakAfter ? "true" : void 0,
		"data-uhuu-flow-keep-with-next": Ce(e.keepWithNext),
		"data-uhuu-flow-avoid-break-inside": e.avoidBreakInside ? "true" : void 0,
		"data-uhuu-flow-group-key": e.groupKey,
		"data-uhuu-flow-header-group-key": t?.key,
		"data-uhuu-flow-header-repeat": t ? t.repeatHeader === !1 ? "false" : "true" : void 0
	};
}
function qt(e, t, n, r, i) {
	let a = n?.(e, t) ?? Lt(e);
	return Rt(a ? r?.[a] : void 0, i?.(e, t));
}
function Jt(e, t, n) {
	return typeof e == "function" ? e(t, n) : e;
}
function Yt(t, n, r, i, a) {
	let o = ue();
	e.useEffect(() => {
		if (!o || !i || !Object.keys(i).length || !r.length) return;
		let e = `${n}:${t === "FlowColumns" ? "columns:" : ""}${Object.keys(i).join("|")}`;
		It.has(e) || r.some((e, t) => !!(a?.(e, t) ?? Lt(e))) || (It.add(e), console.warn(`[uhuu-components] Static.${t} "${n}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`));
	}, [
		t,
		n,
		r,
		i,
		a,
		o
	]);
}
function Xt(e, t) {
	let { flowId: n, asChild: r, renderItem: i, renderGroupHeader: a, groupHeaderClassName: o } = e, { item: s, itemIndex: c, fragment: l, group: u, plannedGroupHeaders: d } = t, f = !!(u && d?.get(c)?.has(u.key));
	return {
		header: u && a && (f || !d && l.isFirstInGroupOnPage && (l.isFirstInGroup || u.repeatHeader !== !1)) && u && a ? Gt(a(u, l), typeof o == "function" ? o(u, l) : o, {
			"data-uhuu-flow-group-header": "true",
			"data-uhuu-flow-header-group-key": u.key
		}, {
			flowId: n,
			source: "renderGroupHeader",
			asChild: r
		}) : null,
		element: Gt(i(s, c, l), t.className, t.attributes, {
			flowId: n,
			source: "renderItem",
			asChild: r,
			baseStyle: t.baseStyle,
			forcedStyle: t.forcedStyle
		})
	};
}
function Zt(e) {
	return e.part === 0 ? "first" : e.part === e.parts - 1 ? "last" : "middle";
}
function Qt(e, t) {
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
function $t(e) {
	return e == null || e === !1 ? e : /* @__PURE__ */ v(kt.Provider, {
		value: null,
		children: e
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow.tsx
function en({ id: t, items: n, getKey: r, renderItem: i, getItemMeta: a, metaDefaults: o, getItemType: s, getItemGroup: c, renderGroupHeader: l, className: u = "", itemClassName: d, groupHeaderClassName: f, renderUnplaceableItem: p, asChild: m = !1, as: h = "div" }) {
	let g = e.useContext(se), _ = e.useContext(kt), b = h, x = g?.chunksByFlowId?.[t], S = g?.mode === "visible" && x ? x[g.pageIndex] : void 0, C = g?.mode === "visible" ? g.pageIndex : 0, w = g?.mode === "visible" && x ? x.length : 1, T = S?.unplaceable, E = T ? p?.(T, {
		flowId: t,
		pageIndex: C,
		pageCount: w
	}) : void 0, D = !!(T && E == null), O = g?.copy === "continuation" ? [] : g?.mode === "visible" && x ? S?.indexes ?? [] : g?.mode === "visible" && g.pageIndex > 0 ? [] : n.map((e, t) => t), k = (D ? [.../* @__PURE__ */ new Set([...O, T.index])].sort((e, t) => e - t) : O).filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), A = n.map((e, t) => zt(c?.(e, t))), j = A.map((e) => e?.key), M = Bt(k), N = l ? Vt(S?.groupHeaders) : void 0;
	Yt("Flow", t, n, o, s);
	let P = {
		flowId: t,
		asChild: m,
		renderItem: i,
		renderGroupHeader: l,
		groupHeaderClassName: f
	};
	return /* @__PURE__ */ y(b, {
		className: u,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-as-child": m ? "true" : void 0,
		"data-uhuu-flow-item-count": m && g?.mode !== "visible" ? k.length : void 0,
		children: [T && E != null && (m && Wt(E, {
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": T.key
		}, {
			flowId: t,
			source: "renderUnplaceableItem"
		}) || /* @__PURE__ */ v("div", {
			style: { display: "contents" },
			"data-uhuu-flow-unplaceable": "true",
			"data-uhuu-flow-unplaceable-key": T.key,
			children: E
		})), k.map((i) => {
			let c = n[i];
			if (c === void 0) return null;
			let l = r(c, i), u = A[i], f = Ke({
				itemIndex: i,
				fragmentIndexes: k,
				fragmentIndex: M.get(i) ?? -1,
				groupKeys: j,
				pageIndex: C,
				pageCount: w,
				itemCount: n.length
			}), p = S?.splits?.[i], m = {
				...f,
				flowId: t,
				itemKey: l,
				item: c,
				...p ? Qt(p, f) : {}
			}, h = qt(c, i, s, o, a), g = D && i === T?.index, { header: b, element: x } = Xt(P, {
				item: c,
				itemIndex: i,
				fragment: m,
				group: u,
				plannedGroupHeaders: N,
				className: Jt(d, c, i),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-key": String(l),
					"data-uhuu-flow-index": i,
					...Kt(h, u),
					"data-uhuu-flow-unplaceable": g ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": g ? T.key : void 0,
					"data-uhuu-flow-orphans": xe(h.orphans),
					"data-uhuu-flow-widows": xe(h.widows),
					"data-uhuu-flow-split": p ? Zt(p) : void 0
				},
				forcedStyle: g ? Ft(T) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [_ ? $t(b) : b, /* @__PURE__ */ v(kt.Provider, {
				value: p ?? null,
				children: x
			})] }, l);
		})]
	});
}
//#endregion
//#region src/uhuu/pagination-static/flow-columns.tsx
function tn({ id: t, items: n, layout: r, getKey: i, renderItem: a, getItemMeta: o, metaDefaults: s, getItemType: c, getItemGroup: l, renderGroupHeader: u, className: d = "", itemClassName: f, groupHeaderClassName: p, renderUnplaceableItem: m, getColumnGroupProps: h, getColumnProps: g, getColumnItemProps: _, asChild: b = !1, as: x = "div" }) {
	tt({
		nodes: r,
		itemCount: n.length
	});
	let S = e.useContext(se), C = e.useContext(kt), w = x, T = S?.copy === "continuation", E = S?.chunksByFlowId?.[t], D = S?.mode === "visible" && E ? E[S.pageIndex] : void 0, O = S?.mode !== "visible", k = S?.mode === "visible" ? S.pageIndex : 0, A = S?.mode === "visible" && E ? E.length : 1, j = n.map((e, t) => zt(l?.(e, t))), M = j.map((e) => e?.key), N = { flowId: t };
	Yt("FlowColumns", t, n, s, c);
	let P = {
		flowId: t,
		asChild: b,
		renderItem: a,
		renderGroupHeader: u,
		groupHeaderClassName: p
	}, F = (e, n) => {
		if (!e) return null;
		let r = m?.(e, {
			flowId: t,
			pageIndex: k,
			pageCount: A
		});
		return r == null ? n() : b && Wt(r, {
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
	}, I = (r, a, l, d = !1, p) => {
		let m = r.filter((e) => Number.isInteger(e) && e >= 0 && e < n.length), h = Bt(m), g = p ? Bt(p) : void 0, _ = u ? Vt(a?.groupHeaders) : void 0;
		return m.map((r) => {
			let u = n[r];
			if (u === void 0) return null;
			let v = i(u, r), b = j[r], x = h.get(r) ?? -1, S = g?.get(r) ?? -1, w = {
				...Ke({
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
			}, T = qt(u, r, c, s, o), E = l?.(r), D = a?.unplaceable?.index === r ? a.unplaceable : void 0, { header: O, element: N } = Xt(P, {
				item: u,
				itemIndex: r,
				fragment: w,
				group: b,
				plannedGroupHeaders: _,
				className: [Jt(f, u, r), E?.className].filter(Boolean).join(" "),
				attributes: {
					"data-uhuu-flow-item": "true",
					"data-uhuu-flow-layout-node": d ? "item" : void 0,
					"data-uhuu-flow-key": String(v),
					"data-uhuu-flow-index": r,
					"data-uhuu-flow-unplaceable": D ? "true" : void 0,
					"data-uhuu-flow-unplaceable-key": D?.key,
					"data-uhuu-flow-column-id": D?.columnId,
					...Kt(T, b)
				},
				baseStyle: E?.style,
				forcedStyle: D ? Ft(D) : void 0
			});
			return /* @__PURE__ */ y(e.Fragment, { children: [C ? $t(O) : O, C ? $t(N) : N] }, v);
		});
	}, L = new Map(r.filter((e) => e.kind === "columns").map((e) => [e.id, e])), R = T ? [] : O ? r : D?.layout ?? [];
	return /* @__PURE__ */ v(w, {
		className: d,
		"data-uhuu-flow": "true",
		"data-uhuu-flow-id": t,
		"data-uhuu-flow-layout": "columns",
		"data-uhuu-flow-as-child": b ? "true" : void 0,
		"data-uhuu-flow-item-count": b && O ? T ? 0 : n.length : void 0,
		children: R.map((t, n) => {
			if (t.kind === "item") return /* @__PURE__ */ v(e.Fragment, { children: I([t.index], void 0, void 0, !0) }, `item:${t.index}:${n}`);
			if (t.kind === "items") return /* @__PURE__ */ y(e.Fragment, { children: [F(t.chunk.unplaceable, () => I([t.chunk.unplaceable.index], t.chunk, void 0, !0)), I(t.chunk.indexes, t.chunk, void 0, !0)] }, `items:${n}`);
			let r = O ? t : L.get(t.id);
			if (!r) return null;
			let i = new Map(r.columns.map((e) => [e.id, e])), a = O ? r.columns.map((e) => ({ id: e.id })) : t.columns, o = h?.(r, N);
			return /* @__PURE__ */ v("div", {
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
						children: [F(e.chunk?.unplaceable, () => I([e.chunk.unplaceable.index], e.chunk, (e) => _?.(r, t, e, N), !1, t.indexes)), I(a, e.chunk, (e) => _?.(r, t, e, N), !1, t.indexes)]
					}, t.id);
				})
			}, `columns:${r.id}:${n}`);
		})
	});
}
//#endregion
//#region src/uhuu/editable/dialog-props.js
function nn(e) {
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
var rn = "uhuu-text-empty", an = /* @__PURE__ */ new Set([
	"text",
	"textarea",
	"markdown"
]), on = (e) => typeof e == "object" && !!e && "type" in e && typeof e.type == "string" && an.has(e.type), sn = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(sn) : !1, cn = (e) => {
	let t = on(e.dialog) && sn(e.children) ? [e.className, rn].filter(Boolean).join(" ") : e.className;
	return /* @__PURE__ */ v("div", {
		className: t,
		...nn(e),
		children: e.children
	});
};
//#endregion
//#region src/uhuu/pagination-static/flow-id.js
function ln(e) {
	return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function un(e, t, n, r = "") {
	return `${r}${e}-${n}-${ln(t) || "block"}`;
}
//#endregion
//#region src/uhuu/pagination-static/html-flow.js
var dn = /\s*(page-break-before|break-before)\s*/i, fn = 1, pn = 3, mn = 8;
function hn(e) {
	return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var gn = "script,style,iframe,object,embed,base,meta,link,template,svg,math", _n = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href",
	"action",
	"data",
	"poster",
	"background",
	"cite"
]), vn = /* @__PURE__ */ new Set([
	"http",
	"https",
	"mailto",
	"tel"
]), yn = /* @__PURE__ */ new Set([
	"src",
	"poster",
	"srcset"
]), bn = /^data:image\/(?:png|jpe?g|gif|webp|avif|bmp)[;,]/i;
function xn(e, t) {
	let n = [...String(e ?? "").trim()].filter((e) => e.charCodeAt(0) > 32 && e.charCodeAt(0) !== 127).join(""), r = /^([^:/?#]*):/.exec(n);
	if (!r) return !0;
	let i = r[1].toLowerCase();
	return vn.has(i) ? !0 : yn.has(t) ? i === "blob" || bn.test(n) : !1;
}
function Sn(e) {
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
		n = n.trim(), e && xn(e, "srcset") && t.push(r ? `${e} ${r}` : e);
	}
	return t.join(", ");
}
function Cn(e) {
	if (typeof document > "u") return hn(e);
	let t = document.createElement("template");
	return t.innerHTML = String(e ?? ""), t.content.querySelectorAll(gn).forEach((e) => e.remove()), t.content.querySelectorAll("*").forEach((e) => {
		for (let t of [...e.attributes]) {
			let n = t.name.toLowerCase();
			if (n.startsWith("on") || n === "srcdoc" || n === "formaction") e.removeAttribute(t.name);
			else if (n === "srcset") {
				let n = Sn(t.value);
				n ? e.setAttribute(t.name, n) : e.removeAttribute(t.name);
			} else _n.has(n) && !xn(t.value, n) && e.removeAttribute(t.name);
		}
	}), t.innerHTML;
}
function wn(e, t) {
	if (typeof document > "u") return [];
	let n = document.createElement("template");
	n.innerHTML = String(e ?? "");
	let r = [];
	return n.content.childNodes.forEach((e) => {
		if (e.nodeType === mn) t.test(e.textContent ?? "") && r.push({ kind: "break" });
		else if (e.nodeType === pn) {
			let t = (e.textContent ?? "").trim();
			t && r.push({
				kind: "text",
				html: hn(t),
				text: t
			});
		} else if (e.nodeType === fn) {
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
function Tn(e, t) {
	let n = t.idPrefix ?? "", r = [], i = !1;
	for (let t of e) {
		if (!t || t.kind === "break") {
			i = !0;
			continue;
		}
		let e = t.type ?? "text", a = t.html ?? "";
		a && (r.push({
			id: un(e, t.text ?? a, r.length, n),
			type: e,
			html: a,
			breakBefore: i || !!t.breakBefore
		}), i = !!t.breakAfter);
	}
	return r;
}
function En(e = "", t = {}) {
	let n = t.breakComment ?? dn, r = (t.parseHtml ?? ((e) => wn(e, n)))(e);
	return Tn(Array.isArray(r) ? r : [], t);
}
//#endregion
//#region src/uhuu/pagination-static/html-inline.tsx
var Dn = /* @__PURE__ */ new Set([
	"p",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
]), On = {
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
function kn(e) {
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
		} else t[On[r] ?? r] = r === "hidden" || r === "itemscope" || n.value;
	}
	return t;
}
function An(t) {
	let n = [];
	for (let [r, i] of Array.from(t.childNodes).entries()) {
		if (i.nodeType === 8) continue;
		if (i.nodeType === 3) {
			n.push(i.textContent ?? "");
			continue;
		}
		if (i.nodeType !== 1) return null;
		let t = i, a = t.tagName.toLowerCase();
		if (!St.has(a)) return null;
		let o = kn(t), s = An(t);
		if (!o || !s) return null;
		n.push(e.createElement(a, {
			...o,
			key: r
		}, ...s));
	}
	return n;
}
function jn(t) {
	if (typeof document > "u") return null;
	let n = document.createElement("template");
	n.innerHTML = t;
	let r = Array.from(n.content.childNodes).filter((e) => e.nodeType !== 8 && !(e.nodeType === 3 && !(e.textContent ?? "").trim()));
	if (r.length !== 1 || r[0].nodeType !== 1) return null;
	let i = r[0], a = i.tagName.toLowerCase();
	if (!Dn.has(a)) return null;
	let o = kn(i), s = An(i);
	return !o || !s ? null : e.createElement(Pt, {
		...o,
		as: a
	}, ...s);
}
//#endregion
//#region src/uhuu/pagination-static/flow-document.tsx
var Mn = {
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
}, Nn = !1;
function Pn(t) {
	let n = ue();
	return e.useMemo(() => t === !1 ? (n && !Nn && (Nn = !0, console.warn("[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML.")), (e) => e) : typeof t == "function" ? t : Cn, [t, n]);
}
function Fn({ html: t }) {
	let n = e.useMemo(() => jn(t), [t]);
	return n ? /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		children: n
	}) : /* @__PURE__ */ v("div", {
		className: "uhuu-flow-html-block",
		dangerouslySetInnerHTML: { __html: t }
	});
}
function In({ html: t, header: n, footer: r, className: i = "", style: a, flowAreaClassName: o = "", flowAreaStyle: s, measureContinuation: c, breakReserve: l, id: u = "flow-document", idPrefix: d, flowClassName: f = "uhuu-flow-document", itemClassName: p, metaDefaults: m, getItemMeta: h, renderItem: g, sanitize: _, editable: y, parseHtml: b }) {
	let x = e.useMemo(() => En(t, {
		idPrefix: d,
		parseHtml: b
	}), [
		t,
		d,
		b
	]), S = e.useMemo(() => ({
		...Mn,
		...m ?? {}
	}), [m]), C = Pn(_), w = e.useCallback((e, t) => ({
		breakBefore: e.breakBefore,
		...h?.(e, t) ?? {}
	}), [h]), T = e.useMemo(() => g ? null : new Map(x.map((e) => [e, C(e.html)])), [
		x,
		g,
		C
	]), E = e.useCallback((e, t) => g ? g(e, t) : /* @__PURE__ */ v(Fn, { html: T?.get(e) ?? C(e.html) }), [
		g,
		T,
		C
	]), D = /* @__PURE__ */ v(en, {
		id: u,
		items: x,
		getKey: (e) => e.id,
		className: f,
		itemClassName: p,
		metaDefaults: S,
		getItemMeta: w,
		renderItem: E
	});
	return /* @__PURE__ */ v(xt, {
		className: i,
		style: a,
		flowAreaClassName: o,
		flowAreaStyle: s,
		measureContinuation: c,
		breakReserve: l,
		header: n,
		footer: r,
		children: y ? /* @__PURE__ */ v(cn, {
			dialog: y,
			className: !x.length && on(y) ? rn : void 0,
			children: D
		}) : D
	});
}
//#endregion
//#region src/uhuu/pagination-static/markdown-flow.js
var Ln = /<!--\s*(page-break-before|break-before)\s*-->/i, Rn = /^\s*\[[^\]]+\]:\s+\S+/, zn = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function Bn(e) {
	return e.trim() === "";
}
function Vn(e) {
	return /^#{1,6}\s+/.test(e.trim());
}
function Hn(e) {
	return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Un(e) {
	return /^(```|~~~)/.test(e.trim());
}
function Wn(e) {
	return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function Gn(e, t) {
	let n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
	return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Kn(e) {
	return Ln.test(e.trim());
}
function qn(e) {
	return Rn.test(e);
}
function Jn(e, t) {
	if (!t || e.length <= t) return [e];
	let n = e.split(/\s+/).filter(Boolean), r = [], i = "";
	for (let e of n) {
		let n = i ? `${i} ${e}` : e;
		i && n.length > t ? (r.push(i), i = e) : i = n;
	}
	return i && r.push(i), r.length ? r : [e];
}
function Yn(e, t) {
	return t.length ? `${e}\n\n${t.join("\n")}` : e;
}
function Xn(e, t, n, r, i, a) {
	let o = n.join("\n").trim();
	if (!o) return !1;
	let s = Number.isFinite(i.maxParagraphLength) ? Math.max(0, Math.floor(i.maxParagraphLength)) : 0, c = t === "paragraph" ? Jn(o, s) : [o];
	for (let n = 0; n < c.length; n += 1) {
		let o = c[n], s = Yn(o, a);
		e.push({
			id: un(t, o, e.length, i.idPrefix ?? ""),
			type: t,
			markdown: s,
			breakBefore: n === 0 && r
		});
	}
	return !0;
}
function Zn(e = "", t = {}) {
	let n = String(e ?? "").replace(/\r\n/g, "\n").split("\n"), r = [], i = [];
	for (let e of n) qn(e) ? r.push(e) : i.push(e);
	let a = [], o = 0, s = !1;
	for (; o < i.length;) {
		if (Bn(i[o])) {
			o += 1;
			continue;
		}
		if (Kn(i[o])) {
			s = !0, o += 1;
			continue;
		}
		let e = o, n = "paragraph";
		if (Un(i[o])) {
			n = "code";
			let e = i[o].trim().slice(0, 3);
			for (o += 1; o < i.length && !i[o].trim().startsWith(e);) o += 1;
			o < i.length && (o += 1);
		} else if (Vn(i[o])) n = "heading", o += 1;
		else if (Wn(i[o])) n = "rule", o += 1;
		else if (zn.test(i[o])) n = "image", o += 1;
		else if (Gn(i, o)) for (n = "table", o += 2; o < i.length && i[o].includes("|") && !Bn(i[o]);) o += 1;
		else if (Hn(i[o])) for (n = "list", o += 1; o < i.length && !Bn(i[o]);) o += 1;
		else if (i[o].trim().startsWith(">")) for (n = "quote", o += 1; o < i.length && i[o].trim().startsWith(">");) o += 1;
		else for (o += 1; o < i.length && !Bn(i[o]) && !Vn(i[o]) && !Un(i[o]) && !Wn(i[o]) && !zn.test(i[o]) && !Gn(i, o) && !Hn(i[o]) && !i[o].trim().startsWith(">") && !Kn(i[o]);) o += 1;
		Xn(a, n, i.slice(e, o), s, t, r) && (s = !1);
	}
	return a;
}
//#endregion
//#region src/uhuu/pagination-static/cover-spread.tsx
var Qn = (e) => `${Number(e.toFixed(4))}mm`;
function $n(e, t) {
	let n = m(!1);
	l(() => {
		t || n.current || (n.current = !0, console.warn(`[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`));
	}, [e, t]);
}
var er = a(function({ sheet: e, left: t, right: n, spine: r, pageNo: i, overlay: a, binding: o, showBleed: s, className: l = "", style: u, leftClassName: d = "", rightClassName: f = "", leftPageKey: p, rightPageKey: m }, h) {
	let g = c(R), b = o === void 0 ? g?.page?.binding ?? null : A(o), x = s ?? g?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
	$n(e, b);
	let w = (t) => a ? ({ pageNo: n }) => a({
		pageNo: n,
		side: t,
		sheet: e
	}) : void 0, T = /* @__PURE__ */ v(V, {
		className: `uhuu-page-sheet--panel ${d}`.trim(),
		pageNo: S,
		overlay: w("left"),
		showBleed: x,
		"data-page-key": p,
		children: t
	}), E = /* @__PURE__ */ v(V, {
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
					"data-label": `spine ${Qn(b.spine)}${D ? " · blank" : ""}`
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
					"data-label": `glue ${Qn(b.glue)}`
				})
			}, e))
		]
	});
}), tr = typeof window > "u" ? l : d;
function nr(e = !0, t) {
	let n = m(t);
	tr(() => {
		n.current = t;
	}, [t]), tr(() => {
		if (!e) return;
		let t = n.current ? `usePaginationHold(${JSON.stringify(n.current)})` : "usePaginationHold()";
		return ne.hold({
			label: t,
			waitMs: pe
		});
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function rr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = rr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function ir() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = rr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.7.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var ar = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, or = (e, t) => ({
	classGroupId: e,
	validator: t
}), sr = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), cr = "-", lr = [], ur = "arbitrary..", dr = (e) => {
	let t = mr(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return pr(e);
			let n = e.split(cr);
			return fr(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? ar(i, t) : t : i || lr;
			}
			return n[e] || lr;
		}
	};
}, fr = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = fr(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(cr) : e.slice(t).join(cr), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, pr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? ur + r : void 0;
})(), mr = (e) => {
	let { theme: t, classGroups: n } = e;
	return hr(n, t);
}, hr = (e, t) => {
	let n = sr();
	for (let r in e) {
		let i = e[r];
		gr(i, n, r, t);
	}
	return n;
}, gr = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		_r(i, t, n, r);
	}
}, _r = (e, t, n, r) => {
	typeof e == "string" ? vr(e, t, n) : typeof e == "function" ? yr(e, t, n, r) : br(e, t, n, r);
}, vr = (e, t, n) => {
	let r = e === "" ? t : xr(t, e);
	r.classGroupId = n;
}, yr = (e, t, n, r) => {
	Sr(e) ? gr(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(or(n, e)));
}, br = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		gr(o, xr(t, a), n, r);
	}
}, xr = (e, t) => {
	let n = e, r = t.split(cr), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = sr(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Sr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Cr = (e) => {
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
}, wr = "!", Tr = ":", Er = [], Dr = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Or = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Tr) {
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
		s.endsWith(wr) ? (c = s.slice(0, -1), l = !0) : s.startsWith(wr) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Dr(t, l, c, u);
	};
	if (t) {
		let e = t + Tr, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Dr(Er, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, kr = (e) => {
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
}, Ar = (e) => ({
	cache: Cr(e.cacheSize),
	parseClassName: Or(e),
	sortModifiers: kr(e),
	postfixLookupClassGroupIds: jr(e),
	...dr(e)
}), jr = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Mr = /\s+/, Nr = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Mr), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + wr : _, y = v + g;
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
}, Pr = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Fr(n)) && (i && (i += " "), i += r);
	return i;
}, Fr = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Fr(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ir = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ar(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Nr(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Pr(...e));
}, Lr = [], Rr = (e) => {
	let t = (t) => t[e] || Lr;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, zr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Br = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Hr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ur = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, Gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qr = (e) => Vr.test(e), U = (e) => !!e && !Number.isNaN(Number(e)), Jr = (e) => !!e && Number.isInteger(Number(e)), Yr = (e) => e.endsWith("%") && U(e.slice(0, -1)), Xr = (e) => Hr.test(e), Zr = () => !0, Qr = (e) => Ur.test(e) && !Wr.test(e), $r = () => !1, ei = (e) => Gr.test(e), ti = (e) => Kr.test(e), ni = (e) => !W(e) && !G(e), ri = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), ii = (e) => yi(e, Ci, $r), W = (e) => zr.test(e), ai = (e) => yi(e, wi, Qr), oi = (e) => yi(e, Ti, U), si = (e) => yi(e, Di, Zr), ci = (e) => yi(e, Ei, $r), li = (e) => yi(e, xi, $r), ui = (e) => yi(e, Si, ti), di = (e) => yi(e, Oi, ei), G = (e) => Br.test(e), fi = (e) => bi(e, wi), pi = (e) => bi(e, Ei), mi = (e) => bi(e, xi), hi = (e) => bi(e, Ci), gi = (e) => bi(e, Si), _i = (e) => bi(e, Oi, !0), vi = (e) => bi(e, Di, !0), yi = (e, t, n) => {
	let r = zr.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, bi = (e, t, n = !1) => {
	let r = Br.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, xi = (e) => e === "position" || e === "percentage", Si = (e) => e === "image" || e === "url", Ci = (e) => e === "length" || e === "size" || e === "bg-size", wi = (e) => e === "length", Ti = (e) => e === "number", Ei = (e) => e === "family-name", Di = (e) => e === "number" || e === "weight", Oi = (e) => e === "shadow", ki = () => {
	let e = Rr("color"), t = Rr("font"), n = Rr("text"), r = Rr("font-weight"), i = Rr("tracking"), a = Rr("leading"), o = Rr("breakpoint"), s = Rr("container"), c = Rr("spacing"), l = Rr("radius"), u = Rr("shadow"), d = Rr("inset-shadow"), f = Rr("text-shadow"), p = Rr("drop-shadow"), m = Rr("blur"), h = Rr("perspective"), g = Rr("aspect"), _ = Rr("ease"), v = Rr("animate"), y = () => [
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
		qr,
		"full",
		"auto",
		...w()
	], E = () => [
		Jr,
		"none",
		"subgrid",
		G,
		W
	], D = () => [
		"auto",
		{ span: [
			"full",
			Jr,
			G,
			W
		] },
		Jr,
		G,
		W
	], O = () => [
		Jr,
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
		qr,
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
		qr,
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
		qr,
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
		mi,
		li,
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
		hi,
		ii,
		{ size: [G, W] }
	], te = () => [
		Yr,
		fi,
		ai
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
		fi,
		ai
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
		Yr,
		mi,
		li
	], ae = () => [
		"",
		"none",
		m,
		G,
		W
	], oe = () => [
		"none",
		U,
		G,
		W
	], V = () => [
		"none",
		U,
		G,
		W
	], H = () => [
		U,
		G,
		W
	], se = () => [
		qr,
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
			blur: [Xr],
			breakpoint: [Xr],
			color: [Zr],
			container: [Xr],
			"drop-shadow": [Xr],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ni],
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
			"inset-shadow": [Xr],
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
			radius: [Xr],
			shadow: [Xr],
			spacing: ["px", U],
			text: [Xr],
			"text-shadow": [Xr],
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
				qr,
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
			"container-named": [ri],
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
				Jr,
				"auto",
				G,
				W
			] }],
			basis: [{ basis: [
				qr,
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
				qr,
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
				Jr,
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
				fi,
				ai
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				vi,
				si
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
				Yr,
				W
			] }],
			"font-family": [{ font: [
				pi,
				ci,
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
				oi
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
				ai
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
				Jr,
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
						Jr,
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
						Jr,
						G,
						W
					]
				},
				gi,
				ui
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
				fi,
				ai
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				_i,
				di
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				_i,
				di
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: B() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [U, ai] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": B() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				_i,
				di
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
				_i,
				di
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
			rotate: [{ rotate: oe() }],
			"rotate-x": [{ "rotate-x": oe() }],
			"rotate-y": [{ "rotate-y": oe() }],
			"rotate-z": [{ "rotate-z": oe() }],
			scale: [{ scale: V() }],
			"scale-x": [{ "scale-x": V() }],
			"scale-y": [{ "scale-y": V() }],
			"scale-z": [{ "scale-z": V() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: H() }],
			"skew-x": [{ "skew-x": H() }],
			"skew-y": [{ "skew-y": H() }],
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
				Jr,
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
				fi,
				ai,
				oi
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
}, Ai = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (ji(e, "cacheSize", t), ji(e, "prefix", n), ji(e, "experimentalParseClassName", r), Mi(e.theme, a.theme), Mi(e.classGroups, a.classGroups), Mi(e.conflictingClassGroups, a.conflictingClassGroups), Mi(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ji(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), ji(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ni(e.theme, i.theme), Ni(e.classGroups, i.classGroups), Ni(e.conflictingClassGroups, i.conflictingClassGroups), Ni(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Pi(e, i, "postfixLookupClassGroups"), Pi(e, i, "orderSensitiveModifiers"), e), ji = (e, t, n) => {
	n !== void 0 && (e[t] = n);
}, Mi = (e, t) => {
	if (t) for (let n in t) ji(e, n, t[n]);
}, Ni = (e, t) => {
	if (t) for (let n in t) Pi(e, t, n);
}, Pi = (e, t, n) => {
	let r = t[n];
	r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Fi = (e, ...t) => typeof e == "function" ? Ir(ki, e, ...t) : Ir(() => Ai(ki(), e), ...t), Ii = /*#__PURE__*/ Ir(ki), Li = Fi({ prefix: "uhuu" });
function K(...e) {
	return Li(ir(e));
}
function Ri(...e) {
	return Ii(ir(e));
}
//#endregion
//#region src/uhuu/image/use-image-load-failure.ts
var zi = ({ onError: e }) => (t) => {
	e?.(t);
}, Bi = (e, t) => e && e > 0 ? e + t : 0, Vi = ({ width: e, left: t = 0, right: n = 0 }, r, i, a) => {
	if (e) return !t && !n ? e + i : e;
	let o = a * r;
	return t || (o += a * i), n || (o += a * i), (t || n) && (o -= t + n), o;
}, Hi = (e, t) => {
	let n = e.bleed ?? 0, r = e.pageWidth ?? 210, i = t === "spread" ? 2 : 1, a = r + 2 * n, o = Vi(e, r, n, i), s = Bi(e.left, n), c = a - ((t === "spread" && e.side === "end" ? -r + s : s) + o);
	return {
		top: `${Math.max(0, Bi(e.top, n))}mm`,
		right: `${Math.max(0, c)}mm`
	};
}, Ui = (e) => {
	let t = c(R), n = zi({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, backgroundColor: l, width: u, height: d, left: f = 0, right: p = 0, top: m = 0, bottom: h = 0 } = e, g = (e) => `${e}mm`, _ = () => Vi({
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
			...nn(e),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: Ri("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}, Wi = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gi = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Ki = (e) => {
	let t = Gi(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, qi = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Ji = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
}, Yi = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Xi = a(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => i("svg", {
	ref: l,
	...Yi,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: qi("lucide", a),
	...!o && !Ji(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]])), Zi = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(Xi, {
		ref: a,
		iconNode: t,
		className: qi(`lucide-${Wi(Ki(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = Ki(e), n;
}, Qi = Zi("arrow-down", [["path", {
	d: "M12 5v14",
	key: "s699le"
}], ["path", {
	d: "m19 12-7 7-7-7",
	key: "1idqje"
}]]), $i = Zi("arrow-up-down", [
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
]), ea = Zi("arrow-up", [["path", {
	d: "m5 12 7-7 7 7",
	key: "hav0vg"
}], ["path", {
	d: "M12 19V5",
	key: "x0mq9r"
}]]), ta = Zi("book-dashed", [
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
]), na = Zi("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), ra = Zi("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), ia = Zi("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), aa = Zi("clipboard-list", [
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
]), oa = Zi("copy", [["rect", {
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
}]]), sa = Zi("ellipsis", [
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
]), ca = Zi("grip-vertical", [
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
]), la = Zi("lock", [["rect", {
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
}]]), ua = Zi("maximize", [
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
]), da = Zi("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), fa = Zi("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), pa = Zi("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), ma = Zi("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), ha = Zi("sliders-horizontal", [
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
]), ga = Zi("trash-2", [
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
]), _a = Zi("unfold-horizontal", [
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
]), va = Zi("unfold-vertical", [
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
]), ya = Zi("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), ba = Zi("zoom-in", [
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
]), xa = Zi("zoom-out", [
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
]), Sa = e.createContext({
	portalContainer: null,
	inProvider: !1
});
function Ca() {
	return e.useContext(Sa);
}
function wa({ children: t }) {
	let [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (typeof document > "u") return;
		let e = document.createElement("div");
		return e.setAttribute("data-uhuu-portal", ""), e.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(e), r(e), () => {
			document.body.removeChild(e);
		};
	}, []), /* @__PURE__ */ v(Sa.Provider, {
		value: {
			portalContainer: n,
			inProvider: !0
		},
		children: t
	});
}
//#endregion
//#region src/uhuu/editor-shell/toolbar-slot.ts
function Ta() {
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
var Ea = Ta(), Da = r(Ea), Oa = () => null;
function ka({ children: e }) {
	let [t] = h(Ta);
	return i(Da.Provider, { value: t }, e);
}
function Aa() {
	return Ea.getSnapshot();
}
function ja() {
	let e = c(Da);
	return g(e.subscribe, e.getSnapshot, Oa);
}
function Ma() {
	let e = c(Da), t = m(null);
	return s((n) => {
		let r = t.current;
		r !== n && (t.current = n, e.replace(r, n));
	}, [e]);
}
var Na = {
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
	dialog: { close: "Close" },
	documentOptions: {
		title: "Document options",
		notSet: "Not set",
		change: "Change {{name}}",
		on: "On",
		off: "Off"
	}
}, Pa = {
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
	dialog: { close: "Schliessen" },
	documentOptions: {
		title: "Dokumentoptionen",
		notSet: "Nicht festgelegt",
		change: "{{name}} ändern",
		on: "Ein",
		off: "Aus"
	}
}, Fa = {
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
	dialog: { close: "Fermer" },
	documentOptions: {
		title: "Options du document",
		notSet: "Non défini",
		change: "Modifier {{name}}",
		on: "Activé",
		off: "Désactivé"
	}
}, Ia = {
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
	dialog: { close: "Chiudi" },
	documentOptions: {
		title: "Opzioni del documento",
		notSet: "Non impostato",
		change: "Modifica {{name}}",
		on: "Attivo",
		off: "Disattivo"
	}
}, La = ["lang", "locale"];
function Ra(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase().split(/[-_]/)[0];
	return /^[a-z]{2,3}$/.test(t) ? t : null;
}
function za(e, t) {
	for (let n of e ?? []) {
		let e = Ra(n);
		if (e && (!t || t.includes(e))) return e;
	}
	return null;
}
function Ba(e, t) {
	let n = new URLSearchParams(e?.search ?? "");
	return za([
		e?.locale,
		e?.host,
		...La.map((e) => n.get(e)),
		e?.documentLang
	]) ?? za(e?.navigatorLanguages ?? [], t) ?? "en";
}
function Va(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = e.listen("loaded", (e) => {
		let n = Ra(e?.locale);
		n && t(n);
	});
	return typeof n == "function" ? n : () => {};
}
function Ha(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ua(e, t) {
	if (!Ha(t)) return e;
	let n = { ...Ha(e) ? e : {} };
	for (let [e, r] of Object.entries(t)) r != null && (n[e] = Ha(r) && Ha(n[e]) ? Ua(n[e], r) : r);
	return n;
}
function Wa(e, t) {
	let n = { ...e ?? {} };
	for (let [e, r] of Object.entries(t ?? {})) {
		let t = Ra(e);
		t && Ha(r) && (n[t] = Ua(n[t], r));
	}
	return n;
}
function Ga(e, t, n = "en") {
	if (e == null) return;
	if (typeof e == "string") return e;
	if (!Ha(e)) return String(e);
	let r = [
		t,
		Ra(t),
		n
	].filter(Boolean);
	for (let t of r) if (typeof e[t] == "string") return e[t];
	let i = Object.values(e).find((e) => typeof e == "string");
	return typeof i == "string" ? i : void 0;
}
function Ka(e, t) {
	return e == null || typeof e != "string" ? !0 : t == null ? !1 : typeof t == "string" ? e === t : Object.values(t).includes(e);
}
var qa = /* @__PURE__ */ new Map();
function Ja(e, t) {
	if (!qa.has(e)) {
		let t = null;
		try {
			t = new Intl.PluralRules(e);
		} catch {
			t = null;
		}
		qa.set(e, t);
	}
	let n = qa.get(e);
	return n ? n.select(t) : t === 1 ? "one" : "other";
}
function Ya(e, t) {
	let n = e;
	for (let e of t.split(".")) {
		if (!Ha(n)) return;
		n = n[e];
	}
	return typeof n == "string" ? n : void 0;
}
function Xa(e, t) {
	return t ? e.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (e, n) => {
		let r = t[n];
		return r == null ? e : String(r);
	}) : e;
}
function Za({ locale: e, catalogs: t, fallbackLocale: n = "en" }) {
	let r = Ra(e) ?? n, i = [.../* @__PURE__ */ new Set([r, n])].map((e) => t?.[e]).filter(Ha);
	return function(e, t) {
		let n = typeof t?.count == "number" ? t.count : null, a = n === null ? [e] : [
			`${e}_${Ja(r, n)}`,
			`${e}_other`,
			e
		];
		for (let e of i) for (let n of a) {
			let r = Ya(e, n);
			if (r !== void 0) return Xa(r, t);
		}
		return e;
	};
}
//#endregion
//#region src/uhuu/i18n/locale-context.tsx
var Qa = [
	"de",
	"fr",
	"it",
	"en"
], $a = {
	en: Na,
	de: Pa,
	fr: Fa,
	it: Ia
}, eo = r(null);
function to(e) {
	return [...Qa, ...Object.keys(e ?? {}).map((e) => Ra(e) ?? e)];
}
function no(e, t) {
	let n = to(e);
	if (typeof window > "u") return Ba({ locale: t }, n);
	let r = window.uhuuData?.locale;
	return Ba({
		locale: t,
		host: r,
		search: window.location?.search,
		documentLang: window.document?.documentElement?.lang,
		navigatorLanguages: window.navigator?.languages ?? [window.navigator?.language]
	}, n);
}
function ro(e, t) {
	return {
		locale: e,
		t: Za({
			locale: e,
			catalogs: Wa($a, t),
			fallbackLocale: "en"
		}),
		localize: (t) => Ga(t, e, "en")
	};
}
var io = null, ao = !1, oo = /* @__PURE__ */ new Set();
function so() {
	if (ao || typeof window > "u") return;
	let e = window.$uhuu;
	typeof e?.listen == "function" && (ao = !0, Va(e, (e) => {
		e !== io && (io = e, oo.forEach((e) => e()));
	}));
}
so();
function co(e) {
	return so(), oo.add(e), () => {
		oo.delete(e);
	};
}
var lo = () => io;
function uo() {
	return g(co, lo, lo);
}
var fo = null;
function po() {
	return (!fo || fo.key !== io) && (fo = {
		key: io,
		runtime: ro(io ?? no())
	}), fo.runtime;
}
function mo({ locale: e, translations: t }) {
	let n = uo(), r = f(() => Ra(e) ?? n ?? no(t), [
		e,
		n,
		t
	]);
	return f(() => ro(r, t), [r, t]);
}
function ho({ value: e, children: t }) {
	return /* @__PURE__ */ v(eo.Provider, {
		value: e,
		children: t
	});
}
function go() {
	let e = c(eo);
	return uo(), e ?? po();
}
//#endregion
//#region src/uhuu/appearance/appearance-core.js
var _o = "light", vo = ["light", "dark"], yo = "appearance", bo = "data-uhuu-appearance", xo = "appearance";
function So(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return vo.includes(t) ? t : null;
}
function Co(e) {
	if (typeof e != "string" || !e) return null;
	try {
		return So(new URLSearchParams(e).get(yo));
	} catch {
		return null;
	}
}
function wo(e) {
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
	return !t || typeof t != "object" ? null : t.action === "shaked" || t.action === "appearance" ? So(t.data?.appearance) : null;
}
function To(e) {
	return e?.renderer ? _o : So(e?.explicit) ?? So(e?.host) ?? Co(e?.search) ?? "light";
}
function Eo(e, t) {
	if (typeof e?.listen != "function") return () => {};
	let n = ["loaded", xo].map((n) => e.listen(n, (e) => {
		let n = So(e?.appearance);
		n && t(n);
	}));
	return () => n.forEach((e) => typeof e == "function" && e());
}
//#endregion
//#region src/uhuu/appearance/appearance-runtime.ts
var Do = null, Oo = [], ko = !1, Ao = !1, jo = /* @__PURE__ */ new Set();
function Mo() {
	return typeof window > "u" ? null : window;
}
function No() {
	let e = Mo();
	return {
		host: Do,
		search: e?.location?.search,
		renderer: !!e?.$uhuu_renderer
	};
}
function Po() {
	return To(No());
}
function Fo() {
	return To({
		...No(),
		explicit: Oo.at(-1)
	});
}
function Io() {
	let e = Mo()?.document?.documentElement;
	if (typeof e?.setAttribute != "function") return;
	let t = Fo();
	e.getAttribute?.("data-uhuu-appearance") !== t && e.setAttribute(bo, t);
}
function Lo() {
	Io(), jo.forEach((e) => e());
}
function Ro(e) {
	e !== Do && (Do = e, Lo());
}
function zo() {
	let e = Mo();
	e && (!ko && typeof e.$uhuu?.listen == "function" && (ko = !0, Eo(e.$uhuu, Ro)), !Ao && typeof e.addEventListener == "function" && (Ao = !0, e.addEventListener("message", (t) => {
		let n = e.parent;
		if (!n || n === e || t.source !== n) return;
		let r = wo(t.data);
		r && Ro(r);
	})));
}
zo(), Io();
function Bo(e) {
	return zo(), Io(), jo.add(e), () => {
		jo.delete(e);
	};
}
var Vo = typeof window > "u" ? l : d;
function Ho(e) {
	let t = g(Bo, Po, Po), n = So(e);
	return Vo(() => {
		if (n) return Oo.push(n), Lo(), () => {
			let e = Oo.lastIndexOf(n);
			e !== -1 && Oo.splice(e, 1), Lo();
		};
	}, [n]), n && !No().renderer ? n : t;
}
//#endregion
//#region src/uhuu/editor-shell/interactive-mode-context.tsx
var Uo = r({
	interactive: !0,
	setInteractive: () => {},
	enableDevTools: !1
});
function Wo() {
	let e = c(Uo), { locale: t } = go(), n = Ho(), r = e.appearance ?? n;
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
function Go() {
	let { interactive: e } = Wo();
	return !e;
}
function Ko() {
	return typeof window < "u" && !!window?.$uhuu_renderer;
}
function qo() {
	return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Jo({ children: e, defaultInteractive: t = !0, enableDevTools: n = !1, locale: r, translations: i, appearance: a }) {
	let o = Ko(), s = n || qo(), [c, l] = h(!o && t), u = mo({
		locale: r,
		translations: i
	}), d = Ho(a), p = f(() => ({
		interactive: c,
		setInteractive: l,
		enableDevTools: s,
		appearance: d
	}), [
		c,
		s,
		d
	]);
	return /* @__PURE__ */ v(Uo.Provider, {
		value: p,
		children: /* @__PURE__ */ v(le.Provider, {
			value: s,
			children: /* @__PURE__ */ v(ho, {
				value: u,
				children: /* @__PURE__ */ v(ka, { children: /* @__PURE__ */ v(wa, { children: /* @__PURE__ */ v("div", {
					"data-uhuu-interactive": c ? "" : void 0,
					style: { display: "contents" },
					children: e
				}) }) })
			})
		})
	});
}
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var Yo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Xo = ir, Zo = (e, t) => (n) => {
	if (t?.variants == null) return Xo(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Yo(t) || Yo(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Xo(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, Qo = Zo("uhuu:inline-flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:whitespace-nowrap uhuu:rounded-md uhuu:text-sm uhuu:font-medium uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50", {
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
}), $o = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ v("button", {
	className: K(Qo({
		variant: t,
		size: n,
		className: e
	})),
	ref: i,
	...r
}));
$o.displayName = "Button";
//#endregion
//#region node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var es = Object.defineProperty, ts = (e, t) => es(e, "name", {
	value: t,
	configurable: !0
}), ns = !!(typeof window < "u" && window.document && window.document.createElement);
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ ts(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
ts(q, "composeEventHandlers");
function rs(e) {
	if (!ns) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
ts(rs, "getOwnerWindow");
function is(e) {
	if (!ns) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
ts(is, "getOwnerDocument");
function as(e, t = !1) {
	let { activeElement: n } = is(e);
	if (!n?.nodeName) return null;
	if (os(n) && n.contentDocument) return as(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = is(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
ts(as, "getActiveElement");
function os(e) {
	return e.tagName === "IFRAME";
}
ts(os, "isFrame");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var ss = Object.defineProperty, cs = (e, t) => ss(e, "name", {
	value: t,
	configurable: !0
});
function ls(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
cs(ls, "setRef");
function us(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = ls(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : ls(e[t], null);
			}
		};
	};
}
cs(us, "composeRefs");
function J(...t) {
	return e.useCallback(us(...t), t);
}
cs(J, "useComposedRefs");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var ds = Object.defineProperty, fs = (e, t) => ds(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function ps(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ fs((t) => {
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
	return fs(a, "useContext"), [i, a];
}
fs(ps, "createContext");
// @__NO_SIDE_EFFECTS__
function ms(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ fs((n) => {
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
		return fs(c, "useContext"), [s, c];
	}
	fs(i, "createContext");
	let a = /* @__PURE__ */ fs(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ fs(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, hs(a, ...n)];
}
fs(ms, "createContextScope");
function hs(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ fs(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ fs(function(t) {
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
fs(hs, "composeContextScopes");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var gs = globalThis?.document ? e.useLayoutEffect : () => {}, _s = Object.defineProperty, vs = (e, t) => _s(e, "name", {
	value: t,
	configurable: !0
}), ys = e.useEffectEvent, bs = e.useInsertionEffect;
function xs(t) {
	if (typeof ys == "function") return ys(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof bs == "function" ? bs(() => {
		n.current = t;
	}) : gs(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
vs(xs, "useEffectEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Ss = Object.defineProperty, Cs = (e, t) => Ss(e, "name", {
	value: t,
	configurable: !0
}), ws = e.useInsertionEffect || gs;
function Ts({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ Cs(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = Es({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = Ds(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
Cs(Ts, "useControllableState");
function Es({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return ws(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
Cs(Es, "useUncontrolledState");
function Ds(e) {
	return typeof e == "function";
}
Cs(Ds, "isFunction");
var Os = Symbol("RADIX:SYNC_STATE");
function ks(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = xs(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === Os) return {
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
			type: Os,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
Cs(ks, "useControllableStateReducer");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.4.0_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var As = Object.defineProperty, js = (e, t) => As(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ms(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		Bs(i) && typeof Gs == "function" && (i = Gs(i._payload)), e.Children.forEach(i, (e) => {
			if (Rs(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Bs(n) && typeof Gs == "function" && (n = Gs(n._payload)), o = Fs(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? Ls(o) : void 0, u = J(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? Ws(t) : Us(t));
			return i;
		}
		let d = Is(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
js(Ms, "createSlot");
var Ns = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ps(e) {
	let t = /* @__PURE__ */ js((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Ns, t;
}
js(Ps, "createSlottable");
var Fs = /* @__PURE__ */ js((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function Is(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Hs(a, i));
	}
	return {
		...e,
		...n
	};
}
js(Is, "mergeProps");
function Ls(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
js(Ls, "getElementRef");
function Rs(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Ns;
}
js(Rs, "isSlottable");
var zs = Symbol.for("react.lazy");
function Bs(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === zs && "_payload" in e && Vs(e._payload);
}
js(Bs, "isLazyComponent");
function Vs(e) {
	return typeof e == "object" && !!e && "then" in e;
}
js(Vs, "isPromiseLike");
function Hs(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
js(Hs, "concatAriaDescribedby");
var Us = /* @__PURE__ */ js((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Ws = /* @__PURE__ */ js((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Gs = e.use, Ks = Object.defineProperty, qs = (e, t) => Ks(e, "name", {
	value: t,
	configurable: !0
}), Js = [
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
	let r = /* @__PURE__ */ Ms(`Primitive.${n}`), i = e.forwardRef((e, t) => {
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
function Ys(e, t) {
	e && b.flushSync(() => e.dispatchEvent(t));
}
qs(Ys, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_b1d6247ab86485bab1740806d97e8d38/node_modules/@radix-ui/react-collection/dist/index.mjs
var Xs = Object.defineProperty, Zs = (e, t) => Xs(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Qs(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ ms(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ Zs((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ v(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ Ms(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(c, n).collectionRef);
		return /* @__PURE__ */ v(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Ms(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = J(n, s), l = o(d, r);
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
	return Zs(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
Zs(Qs, "createCollection");
var $s = /* @__PURE__ */ new WeakMap(), ec = class e extends Map {
	static {
		Zs(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], $s.set(this, !0);
	}
	set(e, t) {
		return $s.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = rc(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = tc(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = tc(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return tc(this.#e, e);
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
function tc(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = nc(e, t);
	return n === -1 ? void 0 : e[n];
}
Zs(tc, "at");
function nc(e, t) {
	let n = e.length, r = rc(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
Zs(nc, "toSafeIndex");
function rc(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Zs(rc, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function ic(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ ms(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new ec(),
		setItemMap: /* @__PURE__ */ Zs(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ Zs(({ state: e, ...t }) => e ? /* @__PURE__ */ v(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ v(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ Zs((e) => {
		let t = g();
		return /* @__PURE__ */ v(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ Zs((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = J(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = cc(() => {});
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ Ms(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = J(t, o(u, n).collectionRef);
		return /* @__PURE__ */ v(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ Ms(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = J(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		ac(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(sc) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(sc)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new ec(e)));
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
		return e.useState(new ec());
	}
	Zs(g, "useInitCollection");
	function _(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return Zs(_, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: _,
		useInitCollection: g
	}];
}
Zs(ic, "createCollection");
function ac(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
Zs(ac, "shallowEqual");
function oc(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Zs(oc, "isElementPreceding");
function sc(e, t) {
	return !e[1].element || !t[1].element ? 0 : oc(e[1].element, t[1].element) ? -1 : 1;
}
Zs(sc, "sortByDocumentPosition");
function cc(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
Zs(cc, "getChildListObserver");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.5_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var lc = Object.defineProperty, uc = (e, t) => lc(e, "name", {
	value: t,
	configurable: !0
}), dc = {
	LTR: "ltr",
	RTL: "rtl"
}, fc = e.createContext(void 0);
function pc(t) {
	let n = e.useContext(fc);
	return t || n || dc.LTR;
}
uc(pc, "useDirection");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var mc = Object.defineProperty, hc = (e, t) => mc(e, "name", {
	value: t,
	configurable: !0
});
function gc(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
hc(gc, "useCallbackRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.20_@types+react-dom@19.3.0_@types+react@19.3.0__@_4e89f70e986c5a91a92277a59b4de3bd/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var _c = Object.defineProperty, vc = (e, t) => _c(e, "name", {
	value: t,
	configurable: !0
}), yc = "dismissableLayer.update", bc = "dismissableLayer.pointerDownOutside", xc = "dismissableLayer.focusOutside", Sc, Cc = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), wc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vc(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(Cc), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = J(n, p), _ = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? _.indexOf(y) : -1, x = f ? _.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = e.useRef(!1), T = Dc((e) => {
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
	}), E = Oc((e) => {
		if (i && w.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), D = f ? x === _.length - 1 : !1, O = gc((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (D) return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
	}, [
		m,
		D,
		O
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Sc = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), kc(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Sc));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), kc());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ vc(() => h({}), "handleUpdate");
		return document.addEventListener(yc, e), () => document.removeEventListener(yc, e);
	}, []), /* @__PURE__ */ v(Js.div, {
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
function Tc() {
	let t = e.useContext(Cc), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
vc(Tc, "useDismissableLayerSurface");
var Ec = /* @__PURE__ */ vc(() => !0, "IS_TRUE");
function Dc(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = Ec } = n, c = gc(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		vc(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		vc(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		vc(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		vc(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ vc((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || Ac(bc, c, p, { discrete: !0 });
				};
				if (vc(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ vc(() => l.current = !0, "onPointerDownCapture") };
}
vc(Dc, "usePointerDownOutside");
function Oc(t, n = globalThis?.document) {
	let r = gc(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ vc((e) => {
			e.target && !i.current && Ac(xc, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ vc(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ vc(() => i.current = !1, "onBlurCapture")
	};
}
vc(Oc, "useFocusOutside");
function kc() {
	let e = new CustomEvent(yc);
	document.dispatchEvent(e);
}
vc(kc, "dispatchUpdate");
function Ac(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Ys(i, a) : i.dispatchEvent(a);
}
vc(Ac, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var jc = Object.defineProperty, Mc = (e, t) => jc(e, "name", {
	value: t,
	configurable: !0
}), Nc = 0, Pc = null;
function Fc(e) {
	return Ic(), e.children;
}
Mc(Fc, "FocusGuards");
function Ic() {
	e.useEffect(() => {
		Pc ||= {
			start: Lc(),
			end: Lc()
		};
		let { start: e, end: t } = Pc;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Nc++, () => {
			Nc === 1 && (Pc?.start.remove(), Pc?.end.remove(), Pc = null), Nc = Math.max(0, Nc - 1);
		};
	}, []);
}
Mc(Ic, "useFocusGuards");
function Lc() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Mc(Lc, "createFocusGuard");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+r_17bb03d71df6075c07bd134f364dcf6d/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Rc = Object.defineProperty, zc = (e, t) => Rc(e, "name", {
	value: t,
	configurable: !0
}), Bc = "focusScope.autoFocusOnMount", Vc = "focusScope.autoFocusOnUnmount", Hc = {
	bubbles: !1,
	cancelable: !0
}, Uc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ zc(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = gc(o), f = gc(s), p = e.useRef(null), m = J(n, u), h = e.useRef(a);
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
				g(t) ? p.current = t : el(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || el(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && el(l);
			};
			zc(e, "handleFocusIn"), zc(t, "handleFocusOut"), zc(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			tl.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Bc, Hc);
				l.addEventListener(Bc, d), l.dispatchEvent(t), t.defaultPrevented || (Jc(il(Xc(l)), { select: !0 }), document.activeElement === e && el(l));
			}
			return () => {
				l.removeEventListener(Bc, d), setTimeout(() => {
					let t = new CustomEvent(Vc, Hc);
					l.addEventListener(Vc, f), l.dispatchEvent(t), t.defaultPrevented || el(e ?? document.body, { select: !0 }), l.removeEventListener(Vc, f), tl.remove(_);
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
			let t = e.currentTarget, [i, a] = Yc(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && el(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && el(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ v(Js.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: y
	});
}, "FocusScope")), Wc = e.createContext(null);
function Gc({ registry: e, children: t }) {
	return e ? /* @__PURE__ */ v(Wc.Provider, {
		value: e,
		children: t
	}) : t;
}
zc(Gc, "FocusScopeBranchProvider");
function Kc() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ zc((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ zc((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
zc(Kc, "useFocusScopeBranchRegistry");
function qc(t) {
	let n = e.useContext(Wc);
	e.useEffect(() => {
		if (t && n) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
zc(qc, "useFocusScopeBranch");
function Jc(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (el(r, { select: t }), document.activeElement !== n) return;
}
zc(Jc, "focusFirst");
function Yc(e) {
	let t = Xc(e);
	return [Zc(t, e), Zc(t.reverse(), e)];
}
zc(Yc, "getTabbableEdges");
function Xc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ zc((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
zc(Xc, "getTabbableCandidates");
function Zc(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Qc(r, { upTo: t }))) return r;
}
zc(Zc, "findVisible");
function Qc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
zc(Qc, "isHidden");
function $c(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
zc($c, "isSelectableInput");
function el(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && $c(e) && t && e.select();
	}
}
zc(el, "focus");
var tl = nl();
function nl() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = rl(e, t), e.unshift(t);
		},
		remove(t) {
			e = rl(e, t), e[0]?.resume();
		}
	};
}
zc(nl, "createFocusScopesStack");
function rl(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
zc(rl, "arrayRemove");
function il(e) {
	return e.filter((e) => e.tagName !== "A");
}
zc(il, "removeLinks");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var al = Object.defineProperty, ol = (e, t) => al(e, "name", {
	value: t,
	configurable: !0
}), sl = e.useId || (() => void 0), cl = 0;
function ll(t) {
	let [n, r] = e.useState(sl());
	return gs(() => {
		t || r((e) => e ?? String(cl++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
ol(ll, "useId");
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ul = [
	"top",
	"right",
	"bottom",
	"left"
], dl = Math.min, fl = Math.max, pl = Math.round, ml = Math.floor, hl = (e) => ({
	x: e,
	y: e
}), gl = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function _l(e, t, n) {
	return fl(e, dl(t, n));
}
function vl(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function yl(e) {
	return e.split("-")[0];
}
function bl(e) {
	return e.split("-")[1];
}
function xl(e) {
	return e === "x" ? "y" : "x";
}
function Sl(e) {
	return e === "y" ? "height" : "width";
}
function Cl(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function wl(e) {
	return xl(Cl(e));
}
function Tl(e, t, n) {
	n === void 0 && (n = !1);
	let r = bl(e), i = wl(e), a = Sl(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Pl(o)), [o, Pl(o)];
}
function El(e) {
	let t = Pl(e);
	return [
		Dl(e),
		t,
		Dl(t)
	];
}
function Dl(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ol = ["left", "right"], kl = ["right", "left"], Al = ["top", "bottom"], jl = ["bottom", "top"];
function Ml(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? kl : Ol : t ? Ol : kl;
		case "left":
		case "right": return t ? Al : jl;
		default: return [];
	}
}
function Nl(e, t, n, r) {
	let i = bl(e), a = Ml(yl(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Dl)))), a;
}
function Pl(e) {
	let t = yl(e);
	return gl[t] + e.slice(t.length);
}
function Fl(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Il(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Fl(e);
}
function Ll(e) {
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
function Rl(e, t, n) {
	let { reference: r, floating: i } = e, a = Cl(t), o = wl(t), s = Sl(o), c = yl(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = bl(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function zl(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = vl(t, e), p = Il(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Ll(await i.getClippingRect({
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
	}, y = Ll(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Bl = 50, Vl = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: zl
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Rl(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Bl && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Rl(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Hl = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = vl(e, t) || {};
		if (l == null) return {};
		let d = Il(u), f = {
			x: n,
			y: r
		}, p = wl(i), m = Sl(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = dl(d[_], T), D = dl(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = _l(E, k, O), j = !c.arrow && bl(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Ul = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = vl(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = yl(r), _ = Cl(o), v = yl(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Pl(o)] : El(o)), x = p !== "none";
			!d && x && b.push(...Nl(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Tl(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Cl(t) || T.every((e) => Cl(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = Cl(e.placement);
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
function Wl(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Gl(e) {
	return ul.some((t) => e[t] >= 0);
}
var Kl = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = vl(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Wl(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Gl(e)
					} };
				}
				case "escaped": {
					let e = Wl(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Gl(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ql = /*#__PURE__*/ new Set(["left", "top"]);
async function Jl(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = yl(n), s = bl(n), c = Cl(n) === "y", l = ql.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = vl(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Yl = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Jl(t, e);
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
}, Xl = function(e) {
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
			} }, ...l } = vl(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Cl(i), p = xl(f), m = u[p], h = u[f], g = (e, t) => _l(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Zl = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = vl(e, t), u = {
				x: n,
				y: r
			}, d = Cl(i), f = xl(d), p = u[f], m = u[d], h = vl(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = ql.has(yl(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Ql = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = vl(e, t), c = await i.detectOverflow(t, s), l = yl(n), u = bl(n), d = Cl(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = dl(p - c[m], g), y = dl(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * fl(c.left, c.right) : S = p - 2 * fl(c.top, c.bottom)), await o({
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
function $l() {
	return typeof window < "u";
}
function eu(e) {
	return ru(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tu(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nu(e) {
	return ((ru(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ru(e) {
	return $l() ? e instanceof Node || e instanceof tu(e).Node : !1;
}
function iu(e) {
	return $l() ? e instanceof Element || e instanceof tu(e).Element : !1;
}
function au(e) {
	return $l() ? e instanceof HTMLElement || e instanceof tu(e).HTMLElement : !1;
}
function ou(e) {
	return !$l() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tu(e).ShadowRoot;
}
function su(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = vu(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function cu(e) {
	return /^(table|td|th)$/.test(eu(e));
}
function lu(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var uu = /transform|translate|scale|rotate|perspective|filter/, du = /paint|layout|strict|content/, fu = (e) => !!e && e !== "none", pu;
function mu(e) {
	let t = iu(e) ? vu(e) : e;
	return fu(t.transform) || fu(t.translate) || fu(t.scale) || fu(t.rotate) || fu(t.perspective) || !gu() && (fu(t.backdropFilter) || fu(t.filter)) || uu.test(t.willChange || "") || du.test(t.contain || "");
}
function hu(e) {
	let t = bu(e);
	for (; au(t) && !_u(t);) {
		if (mu(t)) return t;
		if (lu(t)) return null;
		t = bu(t);
	}
	return null;
}
function gu() {
	return pu ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), pu;
}
function _u(e) {
	return /^(html|body|#document)$/.test(eu(e));
}
function vu(e) {
	return tu(e).getComputedStyle(e);
}
function yu(e) {
	return iu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function bu(e) {
	if (eu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ou(e) && e.host || nu(e);
	return ou(t) ? t.host : t;
}
function xu(e) {
	let t = bu(e);
	return _u(t) ? (e.ownerDocument || e).body : au(t) && su(t) ? t : xu(t);
}
function Su(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = xu(e), i = r === e.ownerDocument?.body, a = tu(r);
	if (i) {
		let e = Cu(a);
		return t.concat(a, a.visualViewport || [], su(r) ? r : [], e && n ? Su(e) : []);
	}
	return t.concat(r, Su(r, [], n));
}
function Cu(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function wu(e) {
	let t = vu(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = au(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = pl(n) !== a || pl(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Tu(e) {
	return iu(e) ? e : e.contextElement;
}
function Eu(e) {
	let t = Tu(e);
	if (!au(t)) return hl(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = wu(t), o = (a ? pl(n.width) : n.width) / r, s = (a ? pl(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Du = /*#__PURE__*/ hl(0);
function Ou(e) {
	let t = tu(e);
	return !gu() || !t.visualViewport ? Du : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function ku(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === tu(e);
}
function Au(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Tu(e), o = hl(1);
	t && (r ? iu(r) && (o = Eu(r)) : o = Eu(e));
	let s = ku(a, n, r) ? Ou(a) : hl(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = tu(a), t = iu(r) ? tu(r) : r, n = e, i = Cu(n);
		for (; i && t !== n;) {
			let e = Eu(i), t = i.getBoundingClientRect(), r = vu(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = tu(i), i = Cu(n);
		}
	}
	return Ll({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ju(e, t) {
	let n = yu(e).scrollLeft;
	return t ? t.left + n : Au(nu(e)).left + n;
}
function Mu(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ju(e, n),
		y: n.top + t.scrollTop
	};
}
function Nu(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = nu(r), s = t ? lu(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = hl(1), u = hl(0), d = au(r);
	if ((d || !a) && ((eu(r) !== "body" || su(o)) && (c = yu(r)), d)) {
		let e = Au(r);
		l = Eu(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Mu(o, c) : hl(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Pu(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Fu(e) {
	let t = yu(e), n = e.ownerDocument.body, r = fl(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = fl(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + ju(e), o = -t.scrollTop;
	return vu(n).direction === "rtl" && (a += fl(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Iu = 25;
function Lu(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = tu(e), a = nu(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !gu() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (ju(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Iu && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ru(e, t) {
	let n = Au(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Eu(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function zu(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Lu(e, n, t);
	else if (t === "document") r = Fu(nu(e));
	else if (iu(t)) r = Ru(t, n);
	else {
		let n = Ou(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Ll(r);
}
function Bu(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Su(e, [], !1).filter((e) => iu(e) && eu(e) !== "body"), i = null, a = vu(e).position === "fixed", o = a ? bu(e) : e;
	for (; iu(o) && !_u(o);) {
		let e = vu(o), t = mu(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = bu(o);
	}
	return t.set(e, r), r;
}
function Vu(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? lu(t) ? [] : Bu(t, this._c) : [].concat(n), r], o = zu(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = zu(t, a[e], i);
		s = fl(n.top, s), c = dl(n.right, c), l = dl(n.bottom, l), u = fl(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Hu(e) {
	let { width: t, height: n } = wu(e);
	return {
		width: t,
		height: n
	};
}
function Uu(e, t, n) {
	let r = au(t), i = nu(t), a = n === "fixed", o = Au(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = hl(0);
	if ((r || !a) && ((eu(t) !== "body" || su(i)) && (s = yu(t)), r)) {
		let e = Au(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = ju(i));
	let l = i && !r && !a ? Mu(i, s) : hl(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Wu(e) {
	return vu(e).position === "static";
}
function Gu(e, t) {
	if (!au(e) || vu(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return nu(e) === n && (n = n.ownerDocument.body), n;
}
function Ku(e, t) {
	let n = tu(e);
	if (lu(e)) return n;
	if (!au(e)) {
		let t = bu(e);
		for (; t && !_u(t);) {
			if (iu(t) && !Wu(t)) return t;
			t = bu(t);
		}
		return n;
	}
	let r = Gu(e, t);
	for (; r && cu(r) && Wu(r);) r = Gu(r, t);
	return r && _u(r) && Wu(r) && !mu(r) ? n : r || hu(e) || n;
}
var qu = async function(e) {
	let t = this.getOffsetParent || Ku, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Uu(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ju(e) {
	return vu(e).direction === "rtl";
}
var Yu = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Nu,
	getDocumentElement: nu,
	getClippingRect: Vu,
	getOffsetParent: Ku,
	getElementRects: qu,
	getClientRects: Pu,
	getDimensions: Hu,
	getScale: Eu,
	isElement: iu,
	isRTL: Ju
};
function Xu(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zu(e, t, n) {
	let r = null, i, a = nu(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = ml(d), h = ml(a.clientWidth - (u + f)), g = ml(a.clientHeight - (d + p)), _ = ml(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: fl(0, dl(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Xu(l, e.getBoundingClientRect())) return s();
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
	let c = tu(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Qu(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Tu(e), u = i || a ? [...l ? Su(l) : [], ...t ? Su(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Zu(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Au(e) : null;
	c && g();
	function g() {
		let t = Au(e);
		h && !Xu(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var $u = Yl, ed = Xl, td = Ul, nd = Ql, rd = Kl, id = Hl, ad = Zl, od = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Yu,
		...i.platform,
		_c: r
	};
	return Vl(e, t, {
		...i,
		platform: a
	});
}, sd = typeof document < "u" ? d : function() {};
function cd(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!cd(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !cd(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function ld(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ud(e, t) {
	let n = ld(e);
	return Math.round(t * n) / n;
}
function dd(t) {
	let n = e.useRef(t);
	return sd(() => {
		n.current = t;
	}), n;
}
function fd(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [d, f] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = e.useState(i);
	cd(p, i) || m(i);
	let [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useCallback((e) => {
		e !== w.current && (w.current = e, g(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, v(e));
	}, []), S = o || h, C = s || _, w = e.useRef(null), T = e.useRef(null), E = e.useRef(d), D = l != null, O = dd(l), k = dd(a), A = dd(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: p
		};
		k.current && (e.platform = k.current), od(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !cd(E.current, t) && (E.current = t, b.flushSync(() => {
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
	sd(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	sd(() => (M.current = !0, () => {
		M.current = !1;
	}), []), sd(() => {
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
		let t = ud(P.floating, d.x), n = ud(P.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...ld(P.floating) >= 1.5 && { willChange: "transform" }
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
var pd = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : id({
				element: r.current,
				padding: i
			}).fn(n) : r ? id({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, md = (e, t) => {
	let n = $u(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, hd = (e, t) => {
	let n = ed(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, gd = (e, t) => ({
	fn: ad(e).fn,
	options: [e, t]
}), _d = (e, t) => {
	let n = td(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, vd = (e, t) => {
	let n = nd(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, yd = (e, t) => {
	let n = rd(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, bd = (e, t) => {
	let n = pd(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, xd = Object.defineProperty, Sd = (e, t) => xd(e, "name", {
	value: t,
	configurable: !0
});
function Cd(t) {
	let [n, r] = e.useState(void 0);
	return gs(() => {
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
Sd(Cd, "useSize");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_04b331dcddb9198baac431c3d7633ae9/node_modules/@radix-ui/react-popper/dist/index.mjs
var wd = Object.defineProperty, Td = (e, t) => wd(e, "name", {
	value: t,
	configurable: !0
}), Ed = {
	Partial: "partial",
	Always: "always"
}, Dd = {
	Optimized: "optimized",
	Always: "always"
}, Od = "Popper", [kd, Ad] = /* @__PURE__ */ ms(Od), [jd, Md] = kd(Od), Nd = /* @__PURE__ */ Td((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ v(jd, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Pd = "PopperAnchor", Fd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Td(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = Md(Pd, r), s = e.useRef(null), c = o.onAnchorChange, l = J(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && Hd(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ v(Js.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), Id = "PopperContent", [Ld, Rd] = kd(Id), zd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Td(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = Ed.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = Dd.Optimized, onPlaced: h, ...g } = t, _ = Md(Id, r), [y, b] = e.useState(null), x = J(n, b), [S, C] = e.useState(null), w = Cd(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, k = Array.isArray(u) ? u : [u], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(Bd),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = fd({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: /* @__PURE__ */ Td((...e) => Qu(...e, { animationFrame: m === Dd.Always }), "whileElementsMounted"),
		elements: { reference: _.anchor },
		middleware: [
			md({
				mainAxis: a + E,
				alignmentAxis: s
			}),
			l && hd({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === Ed.Partial ? gd() : void 0,
				...j
			}),
			l && _d({ ...j }),
			vd({
				...j,
				apply: /* @__PURE__ */ Td(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && bd({
				element: S,
				padding: c
			}),
			Vd({
				arrowWidth: T,
				arrowHeight: E
			}),
			p && yd({
				strategy: "referenceHidden",
				...j,
				boundary: A ? j.boundary : void 0
			})
		]
	}), L = _.setPlacementState;
	gs(() => (L(P), () => {
		L(void 0);
	}), [P, L]);
	let [R, ee] = Hd(P), te = gc(h);
	gs(() => {
		F && te?.();
	}, [F, te]);
	let z = I.arrow?.x, B = I.arrow?.y, ne = I.arrow?.centerOffset !== 0, [re, ie] = e.useState();
	return gs(() => {
		y && ie(window.getComputedStyle(y).zIndex);
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
		children: /* @__PURE__ */ v(Ld, {
			scope: r,
			placedSide: R,
			placedAlign: ee,
			onArrowChange: C,
			arrowX: z,
			arrowY: B,
			shouldHideArrow: ne,
			children: /* @__PURE__ */ v(Js.div, {
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
function Bd(e) {
	return e !== null;
}
Td(Bd, "isNotNull");
var Vd = /* @__PURE__ */ Td((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Hd(n), u = {
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
function Hd(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Td(Hd, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1.18_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_8071c404ead3ecd57efdf7c5517d13a4/node_modules/@radix-ui/react-portal/dist/index.mjs
var Ud = Object.defineProperty, Wd = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Ud(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	gs(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? b.createPortal(/* @__PURE__ */ v(Js.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), Gd = Object.defineProperty, Kd = (e, t) => Gd(e, "name", {
	value: t,
	configurable: !0
});
function qd(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
Kd(qd, "useStateMachine");
var Jd = /* @__PURE__ */ Kd((t) => {
	let { present: n, children: r } = t, i = Yd(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = Zd(i.ref, $d(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Yd(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = qd(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? Qd(i.current), s.current = void 0) : o.current = "none";
	}, [c]), gs(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Qd(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), gs(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ Kd((r) => {
				let o = Qd(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Kd((e) => {
				e.target === n && (o.current = Qd(i.current));
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
				i.current = t, s.current = Qd(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
Kd(Yd, "usePresence");
function Xd(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Kd(Xd, "setRef");
function Zd(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = Xd(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : Xd(t[e], null);
			}
		};
	}, []);
}
Kd(Zd, "useStableComposedRefs");
function Qd(e) {
	return e?.animationName || "none";
}
Kd(Qd, "getAnimationName");
function $d(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Kd($d, "getElementRef");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var ef = Object.defineProperty, tf = (e, t) => ef(e, "name", {
	value: t,
	configurable: !0
}), nf = !1;
function rf() {
	let [t, n] = e.useState(nf);
	return e.useEffect(() => {
		nf || (nf = !0, n(!0));
	}, []), t;
}
tf(rf, "useIsHydrated");
var af = e.useSyncExternalStore;
function of() {
	return () => {};
}
tf(of, "subscribe");
function sf() {
	return af(of, () => !0, () => !1);
}
tf(sf, "useIsHydratedModern");
var cf = typeof af == "function" ? sf : rf, lf = Object.defineProperty, uf = (e, t) => lf(e, "name", {
	value: t,
	configurable: !0
}), df = "rovingFocusGroup.onEntryFocus", ff = {
	bubbles: !1,
	cancelable: !0
}, pf = "RovingFocusGroup", [mf, hf, gf] = /* @__PURE__ */ Qs(pf), [_f, vf] = /* @__PURE__ */ ms(pf, [gf]), yf = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, bf = {
	LTR: "ltr",
	RTL: "rtl"
}, [xf, Sf] = _f(pf), Cf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ uf(function(e, t) {
	return /* @__PURE__ */ v(mf.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ v(mf.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ v(wf, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), wf = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ uf(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = J(n, p), h = pc(o), [g, _] = Ts({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: pf
	}), [y, b] = e.useState(!1), x = gc(u), S = hf(r), C = e.useRef(!1), [w, T] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(df, x), () => e.removeEventListener(df, x);
	}, [x]), /* @__PURE__ */ v(xf, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => b(!0), []),
		onFocusableItemAdd: e.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ v(Js.div, {
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
					let t = new CustomEvent(df, ff);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						Af([
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
}, "RovingFocusGroupImpl")), Tf = "RovingFocusGroupItem", Ef = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ uf(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = ll(), u = o || l, d = Sf(Tf, r), f = d.currentTabStopId === u, p = hf(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d, _ = cf();
	return gs(() => {
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
	]), /* @__PURE__ */ v(mf.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ v(Js.span, {
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
				let t = kf(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? jf(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Af(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
}, "RovingFocusGroupItem")), Df = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Of(e, t) {
	return t === bf.RTL ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
uf(Of, "getDirectionAwareKey");
function kf(e, t, n) {
	let r = Of(e.key, n);
	if (!(t === yf.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === yf.Horizontal && ["ArrowUp", "ArrowDown"].includes(r))) return Df[r];
}
uf(kf, "getFocusIntent");
function Af(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
uf(Af, "focusFirst");
function jf(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
uf(jf, "wrapArray");
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Mf = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Nf = /* @__PURE__ */ new WeakMap(), Pf = /* @__PURE__ */ new WeakMap(), Ff = {}, If = 0, Lf = function(e) {
	return e && (e.host || Lf(e.parentNode));
}, Rf = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Lf(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, zf = function(e, t, n, r) {
	var i = Rf(t, Array.isArray(e) ? e : [e]);
	Ff[n] || (Ff[n] = /* @__PURE__ */ new WeakMap());
	var a = Ff[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		e && !s.has(e) && (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		e && !c.has(e) && Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Nf.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Nf.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Pf.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), If++, function() {
		o.forEach(function(e) {
			var t = Nf.get(e) - 1, i = a.get(e) - 1;
			Nf.set(e, t), a.set(e, i), t || (Pf.has(e) || e.removeAttribute(r), Pf.delete(e)), i || e.removeAttribute(n);
		}), If--, If || (Nf = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), Pf = /* @__PURE__ */ new WeakMap(), Ff = {});
	};
}, Bf = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Mf(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), zf(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Vf = function() {
	return Vf = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Vf.apply(this, arguments);
};
function Hf(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Uf(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Wf = "right-scroll-bar-position", Gf = "width-before-scroll-bar", Kf = "with-scroll-bars-hidden", qf = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Jf(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function Yf(e, t) {
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
var Xf = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Zf = /* @__PURE__ */ new WeakMap();
function Qf(e, t) {
	var n = Yf(t || null, function(t) {
		return e.forEach(function(e) {
			return Jf(e, t);
		});
	});
	return Xf(function() {
		var t = Zf.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Jf(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Jf(e, a);
			});
		}
		Zf.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function $f(e) {
	return e;
}
function ep(e, t) {
	t === void 0 && (t = $f);
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
function tp(e) {
	e === void 0 && (e = {});
	var t = ep(null);
	return t.options = Vf({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var np = function(t) {
	var n = t.sideCar, r = Hf(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Vf({}, r));
};
np.isSideCarExport = !0;
function rp(e, t) {
	return e.useMedium(t), np;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var ip = tp(), ap = function() {}, op = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: ap,
		onWheelCapture: ap,
		onTouchMoveCapture: ap
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Hf(t, [
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
	]), S = p, C = Qf([r, n]), w = Vf(Vf({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: ip,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Vf(Vf({}, w), { ref: C })) : e.createElement(y, Vf({}, w, {
		className: l,
		ref: C
	}), c));
});
op.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, op.classNames = {
	fullWidth: Gf,
	zeroRight: Wf
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var sp = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function cp() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = sp();
	return t && e.setAttribute("nonce", t), e;
}
function lp(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function up(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var dp = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = cp()) && (lp(t, n), up(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, fp = function() {
	var t = dp();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, pp = function() {
	var e = fp();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, mp = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, hp = function(e) {
	return parseInt(e || "", 10) || 0;
}, gp = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		hp(n),
		hp(r),
		hp(i)
	];
}, _p = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return mp;
	var t = gp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, vp = pp(), yp = "data-scroll-locked", bp = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Kf} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${yp}] {
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
  
  .${Wf} {
    right: ${s}px ${r};
  }
  
  .${Gf} {
    margin-right: ${s}px ${r};
  }
  
  .${Wf} .${Wf} {
    right: 0 ${r};
  }
  
  .${Gf} .${Gf} {
    margin-right: 0 ${r};
  }
  
  body[${yp}] {
    ${qf}: ${s}px;
  }
`;
}, xp = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Sp = function() {
	e.useEffect(function() {
		return document.body.setAttribute(yp, (xp() + 1).toString()), function() {
			var e = xp() - 1;
			e <= 0 ? document.body.removeAttribute(yp) : document.body.setAttribute(yp, e.toString());
		};
	}, []);
}, Cp = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	Sp();
	var o = e.useMemo(function() {
		return _p(a);
	}, [a]);
	return e.createElement(vp, { styles: bp(o, !n, a, r ? "" : "!important") });
}, wp = !1;
if (typeof window < "u") try {
	var Tp = Object.defineProperty({}, "passive", { get: function() {
		return wp = !0, !0;
	} });
	window.addEventListener("test", Tp, Tp), window.removeEventListener("test", Tp, Tp);
} catch {
	wp = !1;
}
var Ep = wp ? { passive: !1 } : !1, Dp = function(e) {
	return e.tagName === "TEXTAREA";
}, Op = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Dp(e) && n[t] === "visible");
}, kp = function(e) {
	return Op(e, "overflowY");
}, Ap = function(e) {
	return Op(e, "overflowX");
}, jp = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Pp(e, r)) {
			var i = Fp(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Mp = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Np = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Pp = function(e, t) {
	return e === "v" ? kp(t) : Ap(t);
}, Fp = function(e, t) {
	return e === "v" ? Mp(t) : Np(t);
}, Ip = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Lp = function(e, t, n, r, i) {
	var a = Ip(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Fp(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Pp(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Rp = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zp = function(e) {
	return [e.deltaX, e.deltaY];
}, Bp = function(e) {
	return e && "current" in e ? e.current : e;
}, Vp = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Hp = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Up = 0, Wp = [];
function Gp(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Up++)[0], o = e.useState(pp)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Uf([t.lockRef.current], (t.shards || []).map(Bp), !0).filter(Boolean);
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
		var n = Rp(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = jp(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = jp(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return Lp(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (Wp.length && Wp[Wp.length - 1] === o) {
			var r = "deltaY" in t ? zp(t) : Rp(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Vp(e.delta, r);
			})[0];
			if (i && i.should) t.cancelable && t.preventDefault();
			else if (!i) {
				var a = (s.current.shards || []).map(Bp).filter(Boolean).filter(function(e) {
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
			shadowParent: Kp(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Rp(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, zp(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Rp(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Wp.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Ep), document.addEventListener("touchmove", l, Ep), document.addEventListener("touchstart", d, Ep), function() {
			Wp = Wp.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Ep), document.removeEventListener("touchmove", l, Ep), document.removeEventListener("touchstart", d, Ep);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Hp(a) }) : null, m ? e.createElement(Cp, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Kp(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var qp = rp(ip, Gp), Jp = e.forwardRef(function(t, n) {
	return e.createElement(op, Vf({}, t, {
		ref: n,
		sideCar: qp
	}));
});
Jp.classNames = op.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@1_3ae13a8b8abaffcff00d77dee41e2df0/node_modules/@radix-ui/react-menu/dist/index.mjs
var Yp = Object.defineProperty, Y = (e, t) => Yp(e, "name", {
	value: t,
	configurable: !0
}), Xp = {
	LTR: "ltr",
	RTL: "rtl"
}, Zp = ["Enter", " "], Qp = [
	"ArrowDown",
	"PageUp",
	"Home"
], $p = [
	"ArrowUp",
	"PageDown",
	"End"
], em = [...Qp, ...$p], tm = {
	ltr: [...Zp, "ArrowRight"],
	rtl: [...Zp, "ArrowLeft"]
}, nm = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, rm = "Menu", [im, am, om] = /* @__PURE__ */ Qs(rm), [sm, cm] = /* @__PURE__ */ ms(rm, [
	om,
	Ad,
	vf
]), lm = Ad(), um = vf(), [dm, fm] = sm(rm), [pm, mm] = sm(rm), hm = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = lm(n), [l, u] = e.useState(null), d = e.useRef(!1), f = gc(o), p = pc(a);
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
	}, [r, f]), /* @__PURE__ */ v(Nd, {
		...c,
		children: /* @__PURE__ */ v(dm, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ v(pm, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
}, "Menu"), gm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e, i = lm(n);
	return /* @__PURE__ */ v(Fd, {
		...i,
		...r,
		ref: t
	});
}, "MenuAnchor")), _m = "MenuPortal", [vm, ym] = sm(_m, { forceMount: void 0 }), bm = /* @__PURE__ */ Y((e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = fm(_m, t);
	return /* @__PURE__ */ v(vm, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ v(Jd, {
			present: n || a.open,
			children: /* @__PURE__ */ v(Wd, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "MenuPortal"), xm = "MenuContent", [Sm, Cm] = sm(xm), wm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = ym(xm, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = fm(xm, e.__scopeMenu), o = mm(xm, e.__scopeMenu);
	return /* @__PURE__ */ v(im.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ v(Jd, {
			present: r || a.open,
			children: /* @__PURE__ */ v(im.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ v(Tm, {
					...i,
					ref: t
				}) : /* @__PURE__ */ v(Em, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Tm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = fm(xm, t.__scopeMenu), i = e.useRef(null), a = J(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Bf(e);
	}, []), /* @__PURE__ */ v(Om, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: q(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), Em = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let n = fm(xm, e.__scopeMenu);
	return /* @__PURE__ */ v(Om, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), Dm = /* @__PURE__ */ Ms("MenuContent.ScrollLock"), Om = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = fm(xm, r), y = mm(xm, r), b = lm(r), x = um(r), S = am(r), [C, w] = e.useState(null), T = e.useRef(null), [E, D] = e.useState(null);
	qc(E);
	let { nodes: O, registry: k } = Kc(), A = !!(a || h), j = J(n, T, _.onContentChange, D), M = e.useRef(0), N = e.useRef(""), P = e.useRef(0), F = e.useRef(null), I = e.useRef("right"), L = e.useRef(0), R = e.useMemo(() => h ? [T, ...O.map((e) => ({ current: e }))] : [], [
		T,
		O,
		h
	]), ee = h ? Jp : e.Fragment, te = h ? {
		as: Dm,
		allowPinchZoom: !0,
		shards: R
	} : void 0, z = /* @__PURE__ */ Y((e) => {
		let t = N.current + e, n = S().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = th(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ Y((function e(t) {
			N.current = t, window.clearTimeout(M.current), t !== "" && (M.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	e.useEffect(() => () => window.clearTimeout(M.current), []), Ic();
	let B = e.useCallback((e) => I.current === F.current?.side && rh(e, F.current?.area), []);
	return /* @__PURE__ */ v(Sm, {
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
		children: /* @__PURE__ */ v(Gc, {
			registry: A ? k : null,
			children: /* @__PURE__ */ v(ee, {
				...te,
				children: /* @__PURE__ */ v(Uc, {
					asChild: !0,
					trapped: a,
					branches: O,
					onMountAutoFocus: q(o, (e) => {
						e.preventDefault(), T.current?.focus({ preventScroll: !0 });
					}),
					onUnmountAutoFocus: s,
					children: /* @__PURE__ */ v(wc, {
						asChild: !0,
						disableOutsidePointerEvents: c,
						onEscapeKeyDown: u,
						onPointerDownOutside: d,
						onFocusOutside: f,
						onInteractOutside: p,
						onDismiss: m,
						children: /* @__PURE__ */ v(Cf, {
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
							children: /* @__PURE__ */ v(zd, {
								role: "menu",
								"aria-orientation": "vertical",
								"data-state": Xm(_.open),
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
									if (e.target !== i || !em.includes(e.key)) return;
									e.preventDefault();
									let a = S().filter((e) => !e.disabled).map((e) => e.ref.current);
									$p.includes(e.key) && a.reverse(), $m(a);
								}),
								onBlur: q(t.onBlur, (e) => {
									e.currentTarget.contains(e.target) || (window.clearTimeout(M.current), N.current = "");
								}),
								onPointerMove: q(t.onPointerMove, ih((e) => {
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
}, "MenuContentImpl")), km = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(Js.div, {
		...r,
		ref: t
	});
}, "MenuLabel")), Am = "MenuItem", jm = "menu.itemSelect", Mm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = mm(Am, t.__scopeMenu), c = Cm(Am, t.__scopeMenu), l = J(n, o), u = e.useRef(!1), d = /* @__PURE__ */ Y(() => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(jm, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(jm, (e) => i?.(e), { once: !0 }), Ys(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ v(Nm, {
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
			r || e.target !== e.currentTarget || (c.searchRef.current === "" || e.key !== " ") && Zp.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Nm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = Cm(Am, r), c = um(r), l = e.useRef(null), u = J(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ v(im.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ v(Ef, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ v(Js.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: q(t.onPointerMove, ih((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: q(t.onPointerLeave, ih((e) => s.onItemLeave(e))),
				onFocus: q(t.onFocus, () => f(!0)),
				onBlur: q(t.onBlur, () => f(!1))
			})
		})
	});
}, "MenuItemImpl")), Pm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ v(zm, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ v(Mm, {
			role: "menuitemcheckbox",
			"aria-checked": Zm(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Qm(n),
			onSelect: q(i.onSelect, () => r?.(Zm(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuCheckboxItem")), [Fm, Im] = sm("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ Y(() => {}, "onValueChange")
}), Lm = "MenuRadioItem", Rm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { value: n, ...r } = e, i = Im(Lm, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ v(zm, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ v(Mm, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Qm(a),
			onSelect: q(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
}, "MenuRadioItem")), [zm, Bm] = sm("MenuItemIndicator", { checked: !1 }), Vm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ v(Js.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), Hm = "MenuSub", [Um, Wm] = sm(Hm), Gm = /* @__PURE__ */ Y((t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = fm(Hm, n), s = lm(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = gc(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ v(Nd, {
		...s,
		children: /* @__PURE__ */ v(dm, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ v(Um, {
				scope: n,
				contentId: ll(),
				triggerId: ll(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
}, "MenuSub"), Km = "MenuSubTrigger", qm = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = fm(Km, t.__scopeMenu), i = mm(Km, t.__scopeMenu), a = Wm(Km, t.__scopeMenu), o = Cm(Km, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]);
	let f = J(n, a.onTriggerChange);
	return /* @__PURE__ */ v(gm, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ v(Nm, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": r.open ? a.contentId : void 0,
			"data-state": Xm(r.open),
			...t,
			ref: f,
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: q(t.onPointerMove, ih((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: q(t.onPointerLeave, ih((e) => {
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
				t.disabled || e.target !== e.currentTarget || (o.searchRef.current === "" || e.key !== " ") && tm[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
}, "MenuSubTrigger")), Jm = "MenuSubContent", Ym = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Y(function(t, n) {
	let r = ym(xm, t.__scopeMenu), { forceMount: i = r.forceMount, align: a = "start", ...o } = t, s = fm(xm, t.__scopeMenu), c = mm(xm, t.__scopeMenu), l = Wm(Jm, t.__scopeMenu), u = e.useRef(null), d = J(n, u);
	return /* @__PURE__ */ v(im.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ v(Jd, {
			present: i || s.open,
			children: /* @__PURE__ */ v(im.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ v(Om, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: d,
					align: a,
					side: c.dir === Xp.RTL ? "left" : "right",
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
						let t = e.currentTarget.contains(e.target), n = nm[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
}, "MenuSubContent"));
function Xm(e) {
	return e ? "open" : "closed";
}
Y(Xm, "getOpenState");
function Zm(e) {
	return e === "indeterminate";
}
Y(Zm, "isIndeterminate");
function Qm(e) {
	return Zm(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Y(Qm, "getCheckedState");
function $m(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Y($m, "focusFirst");
function eh(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
Y(eh, "wrapArray");
function th(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = eh(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
Y(th, "getNextMatch");
function nh(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
Y(nh, "isPointInPolygon");
function rh(e, t) {
	return t ? nh({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
Y(rh, "isPointerInGraceArea");
function ih(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Y(ih, "whenMouse");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.25_@types+react-dom@19.3.0_@types+react@19.3.0__@type_629a5a4a562bce11ef9cf18d771c29ae/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var ah = Object.defineProperty, oh = (e, t) => ah(e, "name", {
	value: t,
	configurable: !0
}), sh = "DropdownMenu", [ch, lh] = /* @__PURE__ */ ms(sh, [cm]), uh = cm(), [dh, fh] = ch(sh), ph = /* @__PURE__ */ oh((t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = uh(n), u = e.useRef(null), [d, f] = Ts({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: sh
	});
	return /* @__PURE__ */ v(dh, {
		scope: n,
		triggerId: ll(),
		triggerRef: u,
		contentId: ll(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ v(hm, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
}, "DropdownMenu"), mh = "DropdownMenuTrigger", hh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = fh(mh, n), o = uh(n), s = J(t, a.triggerRef);
	return /* @__PURE__ */ v(gm, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ v(Js.button, {
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
}, "DropdownMenuTrigger")), gh = /* @__PURE__ */ oh((e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = uh(t);
	return /* @__PURE__ */ v(bm, {
		...r,
		...n
	});
}, "DropdownMenuPortal"), _h = "DropdownMenuContent", vh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(t, n) {
	let { __scopeDropdownMenu: r, ...i } = t, a = fh(_h, r), o = uh(r), s = e.useRef(!1);
	return /* @__PURE__ */ v(wm, {
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
}, "DropdownMenuContent")), yh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(km, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuLabel")), bh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(Mm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuItem")), xh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(Pm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuCheckboxItem")), Sh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(Rm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuRadioItem")), Ch = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(Vm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSeparator")), wh = /* @__PURE__ */ oh((e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = uh(t), [s, c] = Ts({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ v(Gm, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, "DropdownMenuSub"), Th = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(qm, {
		...i,
		...r,
		ref: t
	});
}, "DropdownMenuSubTrigger")), Eh = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ oh(function(e, t) {
	let { __scopeDropdownMenu: n, ...r } = e, i = uh(n);
	return /* @__PURE__ */ v(Ym, {
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
}, "DropdownMenuSubContent")), Dh = ph, Oh = hh, kh = wh, Ah = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ v(Th, {
	ref: i,
	className: K("uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:focus:bg-gray-100 uhuu:data-[state=open]:bg-gray-100", t && "uhuu:pl-8", e),
	...r,
	children: n
}));
Ah.displayName = Th.displayName;
var jh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(Eh, {
	ref: n,
	className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
jh.displayName = Eh.displayName;
var Mh = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
	let { portalContainer: i } = Ca();
	return /* @__PURE__ */ v(gh, {
		container: i || void 0,
		children: /* @__PURE__ */ v(vh, {
			ref: r,
			sideOffset: t,
			"data-uhuu-editor": !0,
			className: K("uhuu:z-50 uhuu:min-w-[8rem] uhuu:overflow-hidden uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-1 uhuu:text-gray-900 uhuu:shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
			...n
		})
	});
});
Mh.displayName = vh.displayName;
var Nh = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(bh, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", t && "uhuu:pl-8", e),
	...n
}));
Nh.displayName = bh.displayName;
var Ph = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ v(xh, {
	ref: i,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: t
}));
Ph.displayName = xh.displayName;
var Fh = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v(Sh, {
	ref: r,
	className: K("uhuu:relative uhuu:flex uhuu:cursor-default uhuu:select-none uhuu:items-center uhuu:rounded-sm uhuu:py-1.5 uhuu:pl-8 uhuu:pr-2 uhuu:text-sm uhuu:outline-none uhuu:transition-colors uhuu:focus:bg-gray-100 uhuu:focus:text-gray-900 uhuu:data-[disabled]:pointer-events-none uhuu:data-[disabled]:opacity-50", e),
	...n,
	children: t
}));
Fh.displayName = Sh.displayName;
var Ih = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v(yh, {
	ref: r,
	className: K("uhuu:px-2 uhuu:py-1.5 uhuu:text-sm uhuu:font-medium", t && "uhuu:pl-8", e),
	...n
}));
Ih.displayName = yh.displayName;
var Lh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(Ch, {
	ref: n,
	className: K("uhuu:-mx-1 uhuu:my-1 uhuu:h-px uhuu:bg-gray-200", e),
	...t
}));
Lh.displayName = Ch.displayName;
var Rh = (e, t) => {
	typeof window < "u" && window.$uhuu_renderer || (e.stopPropagation(), t.onSelect ? t.onSelect(e) : t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog));
}, zh = (e, t) => {
	if (!e) return null;
	let n = e.trim();
	if (n.startsWith("<")) {
		let e = n.replace(/<svg\b([^>]*)>/i, (e, t) => {
			let n = t;
			return /\bwidth=/.test(n) ? n = n.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "width=\"100%\"") : n += " width=\"100%\"", /\bheight=/.test(n) ? n = n.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "height=\"100%\"") : n += " height=\"100%\"", /\bpreserveAspectRatio=/.test(n) ? n = n.replace(/\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, "preserveAspectRatio=\"xMidYMid slice\"") : n += " preserveAspectRatio=\"xMidYMid slice\"", `<svg${n}>`;
		});
		return /* @__PURE__ */ v("div", {
			className: Ri("uhuu-image-overlay", t),
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: e }
		});
	}
	return /* @__PURE__ */ v("img", {
		src: e,
		alt: "",
		"aria-hidden": "true",
		className: Ri("uhuu-image-overlay uhuu-image-overlay-img", t)
	});
};
function Bh({ options: e, anchorInsets: t }) {
	let { t: n } = go(), r = /* @__PURE__ */ v("div", {
		"data-uhuu-chrome": !0,
		className: "uhuu:pointer-events-auto uhuu:absolute uhuu:right-2 uhuu:top-2 uhuu:z-20",
		children: /* @__PURE__ */ y(Dh, {
			modal: !1,
			children: [/* @__PURE__ */ v(Oh, {
				asChild: !0,
				children: /* @__PURE__ */ v($o, {
					variant: "secondary",
					size: "icon",
					title: n("image.options"),
					className: "uhuu:h-7 uhuu:w-7 uhuu:shadow-sm",
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ v(sa, { className: "uhuu:h-4 uhuu:w-4" })
				})
			}), /* @__PURE__ */ v(Mh, {
				className: "uhuu:w-40 uhuu:p-1.5",
				align: "end",
				children: e.map((e) => /* @__PURE__ */ y(Nh, {
					onSelect: (t) => Rh(t, e),
					disabled: e.disabled,
					children: [e.icon && /* @__PURE__ */ v("span", {
						className: "uhuu:mr-2 uhuu:inline-flex",
						children: e.icon
					}), /* @__PURE__ */ v("span", { children: e.label })]
				}, e.id))
			})]
		})
	});
	return t ? /* @__PURE__ */ v("div", {
		className: "uhuu:pointer-events-none uhuu:absolute uhuu:z-20",
		style: t,
		children: r
	}) : r;
}
var Vh = (e, t, n) => t ? /* @__PURE__ */ v(Bh, {
	options: e,
	anchorInsets: n
}) : null, Hh = (e = []) => {
	let t = Go();
	return e.length > 0 && !t;
}, Uh = ({ className: e, style: t, overlaySvg: n, overlayClassName: r, options: i = [], dialog: a, dialogProps: o, bleedProps: s, children: l }) => {
	let u = c(R), d = Hh(i), f = Hi({
		...s,
		pageWidth: s?.pageWidth ?? u?.page?.width ?? 210,
		bleed: s?.bleed ?? u?.page?.bleed ?? 0
	}, "bleed");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(Ui, {
		...s,
		dialog: a,
		children: [zh(n, r), l]
	}), Vh(i, d, f)] });
};
//#endregion
//#region src/uhuu/image/image-spread.tsx
function Wh(e) {
	let t = c(R), n = zi({ onError: e.onError }), r = e.bleed ?? t?.page?.bleed ?? 0, i = e.pageWidth ?? t?.page?.width ?? 210, a = e.pageHeight ?? t?.page?.height ?? 297, { src: o, imageClassName: s, side: l, backgroundColor: u, width: d, height: f, left: p = 0, right: m = 0, top: h = 0, bottom: g = 0 } = e, _ = (e) => `${e}mm`, b = () => Vi({
		width: d,
		left: p,
		right: m
	}, i, r, 2), x = () => {
		let e = f ?? 0;
		return f ? !h && !g && (e += r) : (e = a, h || (e += r), g || (e += r), (h || g) && (e -= (h ?? 0) + (g ?? 0))), e;
	}, S = b(), C = x(), w = (e) => e === void 0 ? void 0 : _(e), T = (e) => Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0)), E = p > 0 ? p + r : 0;
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
	return /* @__PURE__ */ v("div", {
		className: "uhuu-image-container",
		style: l == "end" ? M : j,
		...e.dataUhuu === void 0 ? {} : { "data-uhuu": e.dataUhuu },
		children: /* @__PURE__ */ y("div", {
			className: "uhuu-image-inner",
			...nn(e),
			children: [/* @__PURE__ */ v("img", {
				alt: e.alt ?? "",
				className: Ri("uhuu-image-geometry cover-image object-cover object-center", s),
				src: o || void 0,
				onError: n
			}), e.children]
		})
	});
}
//#endregion
//#region src/uhuu/image/image-spread-with-overlay.tsx
var Gh = ({ overlaySvg: e, overlayClassName: t, options: n = [], dialog: r, spreadProps: i, children: a }) => {
	let o = c(R), s = Hh(n), l = Hi({
		...i,
		pageWidth: i?.pageWidth ?? o?.page?.width ?? 210,
		bleed: i?.bleed ?? o?.page?.bleed ?? 0
	}, "spread");
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y(Wh, {
		...i,
		dialog: r,
		children: [zh(e, t), a]
	}), Vh(n, s, l)] });
}, Kh = ({ src: t, alt: n = "", className: r, imageClassName: i, style: a, imageStyle: o, overlaySvg: s, overlayClassName: c, options: l = [], dialog: u, dialogProps: d, placeholder: f, children: p, imageProps: m, renderImage: h, onError: g }) => {
	let _ = e.useMemo(() => u ? nn({ dialog: u }) : {}, [u]), b = Hh(l), x = zi({ onError: (e) => {
		g?.(e), m?.onError?.(e);
	} }), S = e.useMemo(() => {
		if (!d) return _;
		let e = {
			..._,
			...d
		};
		return (_.className || d.className) && (e.className = Ri(_.className, d.className)), Object.keys(_).forEach((t) => {
			let n = _[t], r = d[t];
			t.startsWith("on") && typeof n == "function" && typeof r == "function" && (e[t] = (e) => {
				n(e), r(e);
			});
		}), e;
	}, [_, d]), C = m?.src ?? t, w = !C && !f && !h, T = () => {
		let e = m?.className, t = m?.style, r = C, a = m?.alt ?? n, s = {
			...m,
			src: r,
			alt: a,
			className: Ri("uhuu-image-img", i, e),
			style: {
				...o,
				...t
			}
		};
		return h ? h(s) : r ? /* @__PURE__ */ v("img", {
			...s,
			onError: x
		}) : f ?? null;
	}, E = S["data-uhuu"], D = e.Children.toArray(p).some((t) => e.isValidElement(t) ? t.type === Wh || t.type === Ui : !1), O = { ...S };
	D && delete O["data-uhuu"];
	let k = e.Children.map(p, (t) => e.isValidElement(t) && (t.type === Wh || t.type === Ui) ? e.cloneElement(t, { dataUhuu: E }) : t);
	return /* @__PURE__ */ y("div", {
		className: Ri(D ? "uhuu-image-block uhuu-image-block-fill" : "uhuu-image-block", r),
		style: a,
		children: [/* @__PURE__ */ y("div", {
			...O,
			className: Ri("uhuu-image-body", w && "uhuu-image-empty", S.className),
			children: [
				T(),
				k,
				zh(s, c)
			]
		}), Vh(l, b)]
	});
}, qh = (e) => {
	let { t } = go(), { computedOverlaySvg: n, computedOptions: r, computedDirectDialog: i } = f(() => {
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
	]), o = a === "auto" || r && r.length > 0 || n || i || e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, { mode: s, side: c, src: l, alt: u, className: d, imageClassName: p, style: m, imageStyle: h, backgroundColor: g, width: _, height: y, left: b, right: x, top: S, bottom: C, pageWidth: w, pageHeight: T, bleed: E, overlayClassName: D, dialogProps: O, placeholder: k, children: A, imageProps: j, renderImage: M, onError: N } = e, P = {
		src: l,
		alt: u,
		backgroundColor: g,
		width: _,
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
	if (a === "auto") return /* @__PURE__ */ v(Kh, {
		src: l,
		alt: u,
		className: d,
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
		return o && (n || r?.length || i) ? /* @__PURE__ */ v(Gh, {
			className: d,
			style: m,
			overlaySvg: n,
			overlayClassName: D,
			options: r,
			dialog: i,
			dialogProps: O,
			spreadProps: e,
			children: A
		}) : /* @__PURE__ */ v(Wh, { ...e });
	}
	return o && (n || r?.length || i) ? /* @__PURE__ */ v(Uh, {
		className: d,
		style: m,
		overlaySvg: n,
		overlayClassName: D,
		options: r,
		dialog: i,
		dialogProps: O,
		bleedProps: P,
		children: A
	}) : /* @__PURE__ */ v(Ui, { ...P });
}, X = (e) => typeof e == "object" && !!e && !Array.isArray(e), Jh = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Z = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, Yh = "https://render.uhuu.io/media/thumb", Xh = "image/svg+xml";
function Zh(e) {
	return typeof e == "string" ? { url: Z(e) } : X(e) ? {
		url: Z(e.contentUrl) ?? Z(e.url) ?? Z(e.src),
		type: Z(e.encodingFormat) ?? Z(e.mimeType)
	} : { url: void 0 };
}
function Qh() {
	try {
		return !!globalThis.$uhuu?.is?.printProduct?.();
	} catch {
		return !1;
	}
}
function $h(e) {
	try {
		return new URL(e);
	} catch {
		return;
	}
}
function eg(e, t, n) {
	if (n && n.toLowerCase().startsWith(Xh)) return !0;
	if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
	if (/\.svgz?$/i.test(t.pathname)) return !0;
	for (let e of t.searchParams.values()) {
		let t = e.toLowerCase();
		if (t === "svg" || t === Xh) return !0;
	}
	return !1;
}
var tg = (e) => !!e && `${e.origin}${e.pathname}` == "https://render.uhuu.io/media/thumb" && e.searchParams.has("url");
function ng(e, t = {}) {
	let n = X(t) ? t : {}, { url: r, type: i } = Zh(e);
	if (!r) return;
	if (/^(?:data|blob):/i.test(r)) return r;
	let a = r, o = $h(r), s = Z(n.format);
	if (tg(o) && (s ||= Z(o.searchParams.get("format")), a = Z(o.searchParams.get("url")) ?? r, o = $h(a)), !/^https?:\/\//i.test(a) || eg(a, o, i)) return a;
	let c = (typeof n.print == "boolean" ? n.print : Qh()) ? Z(n.printSize) ?? "4000x4000" : Z(n.size) ?? "2000x2000", l = s ? `&format=${encodeURIComponent(s)}` : "";
	return `${Yh}?blank=true&size=${encodeURIComponent(c)}${l}&url=${encodeURIComponent(a)}`;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-css-vars.js
var rg = [
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
], ig = [
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
], ag = [
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
], og = [
	...ag.map(([e]) => e),
	"chart-1",
	"chart-2",
	"chart-3",
	"chart-4",
	"chart-5"
], sg = RegExp(`^--(?:color-)?(?:${og.join("|")})$`), cg = /^--color-kit-[A-Za-z0-9_-]+$/, lg = /^--font-(?:kit-)?(?:sans|serif|display|mono)$/;
function ug(e) {
	let t = X(e) ? e.runtime : void 0;
	return X(t) && t.version === 2 && X(t.light) ? t : void 0;
}
var dg = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, fg = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, pg = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", mg = RegExp(`^ok(?:lch|lab)\\(\\s*${pg}\\s+${pg}\\s+${pg}(?:\\s*\\/\\s*${pg})?\\s*\\)$`, "i"), hg = /^[a-z]+$/i, gg = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"unset",
	"revert",
	"none"
]), _g = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", vg = RegExp(`^(${_g})(deg|turn|rad|grad)?\\s+(${_g})%\\s+(${_g})%(?:\\s*\\/\\s*(${_g})(%)?)?$`, "i"), yg = RegExp(`^hsla?\\(\\s*(${_g})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${_g})%\\s*(?:,\\s*|\\s+)(${_g})%\\s*(?:(?:,|\\/)\\s*(${_g})(%)?\\s*)?\\)$`, "i"), bg = /[;{}<>\\\n\r]/, xg = /^[A-Za-z0-9_-]+$/, Sg = (e, t, n) => Math.min(n, Math.max(t, e)), Cg = (e) => e.toString(16).padStart(2, "0"), wg = {
	deg: 1,
	turn: 360,
	rad: 180 / Math.PI,
	grad: .9
};
function Tg(e, t, n, r, i, a) {
	let o = (Number(e) * wg[(t || "deg").toLowerCase()] % 360 + 360) % 360, s = Sg(Number(n) / 100, 0, 1), c = Sg(Number(r) / 100, 0, 1), l = s * Math.min(c, 1 - c), u = (e) => {
		let t = (e + o / 30) % 12;
		return Math.round((c - l * Math.max(-1, Math.min(t - 3, 9 - t, 1))) * 255);
	}, [d, f, p] = [
		u(0),
		u(8),
		u(4)
	], m = i === void 0 ? 1 : Sg(Number(i) / (a ? 100 : 1), 0, 1);
	return m >= 1 ? `#${Cg(d)}${Cg(f)}${Cg(p)}` : `rgba(${d}, ${f}, ${p}, ${Number(m.toFixed(3))})`;
}
function Eg(e) {
	let t = Z(e);
	if (!t) return;
	if (dg.test(t) || fg.test(t) || mg.test(t)) return t;
	if (hg.test(t)) return gg.has(t.toLowerCase()) ? void 0 : t;
	let n = vg.exec(t) ?? yg.exec(t);
	if (n) return Tg(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function Dg(e, t) {
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
function Og(e, t) {
	for (let n of t) {
		let t = Eg(Dg(e, n));
		if (t !== void 0) return t;
	}
}
var kg = (e) => {
	if (typeof e == "string" && e.includes(",")) return Z(e.slice(e.indexOf(",") + 1));
};
function Ag(e, t) {
	if (e.includes(",")) return e;
	let n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
	return t ? `${n}, ${t}` : n;
}
function jg(e, t) {
	if (typeof t == "string" && t) {
		if (Array.isArray(e)) return e.find((e) => X(e) && e.id === t);
		if (X(e)) return Jh(e, t) && X(e[t]) ? e[t] : Object.values(e).find((e) => X(e) && e.id === t);
	}
}
function Mg(e, t) {
	let n = ig.find(([e]) => e === t)?.[1];
	if (!n || !X(e)) return;
	let r = X(e.tokens) ? e.tokens : {}, i = Z(r[n.token]), a = Z(r.primitives?.typography?.[n.primitive]), o = jg(e.fonts, e.assignments?.[`font.${t}`]);
	!Z(o?.family) && X(e.fonts) && (o = n.keys.map((t) => Jh(e.fonts, t) ? e.fonts[t] : void 0).find((e) => X(e) && Z(e.family)));
	let s = Z(o?.family);
	if (s) return Ag(s, Z(o.fallback) ?? kg(a) ?? kg(i) ?? n.generic);
	let c = i ?? a;
	return c ? Ag(c, kg(a) ?? n.generic) : void 0;
}
function Ng(e, t = {}) {
	let n = {};
	if (X(t?.defaults)) for (let [e, r] of Object.entries(t.defaults)) {
		if (!e.startsWith("--")) continue;
		let t = e.startsWith("--color-") ? Eg(r) : Z(r);
		t !== void 0 && !bg.test(t) && (n[e] = t);
	}
	if (!X(e)) return n;
	let r = ug(e);
	if (r) {
		for (let [e, t] of Object.entries(r.light)) {
			let r = sg.test(e) || cg.test(e) ? Eg(t) : lg.test(e) ? Z(t) : void 0;
			r !== void 0 && !bg.test(r) && (n[e] = r);
		}
		return n;
	}
	let i = X(e.tokens) ? e.tokens : {}, a = X(i.light?.semantic) ? i.light.semantic : {};
	for (let [e, t] of ag) {
		let r = Eg(a[t]);
		r !== void 0 && (n[`--${e}`] = r, n[`--color-${e}`] = r);
	}
	for (let [e, t] of rg) {
		let r = Og(i, t);
		r !== void 0 && (n[`--color-kit-${e}`] = r);
	}
	let o = i.light?.aliases;
	if (X(o)) {
		let e = (e, t) => {
			let r = xg.test(e) ? Eg(t) : void 0;
			r !== void 0 && (n[`--color-kit-${e}`] = r);
		};
		for (let [t, n] of Object.entries(o)) if (t !== "hero" && X(n)) for (let [r, i] of Object.entries(n)) e(t === "template" ? r : `${t}-${r}`, i);
		for (let [t, n] of Object.entries(o)) X(n) || e(t, n);
	}
	for (let [t] of ig) {
		let r = Mg(e, t);
		r === void 0 || bg.test(r) || (n[`--font-${t}`] = r, n[`--font-kit-${t}`] = r);
	}
	return n;
}
//#endregion
//#region src/uhuu/brand-kit/brand-kit-assets.js
var Pg = /^https?:\/\//i, Fg = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function Ig(e, t) {
	let n = X(e) ? Z(e.baseUrl) : void 0;
	if (n) return n.replace(/\/+$/, "");
	let r = Z(t);
	if (r && Pg.test(r)) try {
		return new URL(".", r).toString().replace(/\/+$/, "");
	} catch {
		return;
	}
}
function Lg(e, t) {
	let n = Z(e);
	if (n && !/\s/.test(n)) {
		if (Pg.test(n) || /^data:/i.test(n)) return n;
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
var Rg = /^kit-[\w-]+$/i;
function zg(e, t = {}) {
	if (!X(e)) return null;
	let n = (Z(t.publicBaseUrl) ?? "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live").replace(/\/+$/, ""), r = Z(String(e.brandKitTeamId ?? t.teamId ?? "")), i = (e) => r ? `${n}/teams/${encodeURIComponent(r)}/kits/${encodeURIComponent(e)}/brandkit.json` : null, a = Z(e.brandKitUrl);
	if (a) return Rg.test(a) ? i(a) : Lg(a) ?? null;
	let o = Z(e.brandKitId);
	if (o) return Rg.test(o) ? i(o) : null;
	let s = X(e.brandKit?.storage) ? Z(e.brandKit.storage.publicUrl) : void 0;
	return s && Pg.test(s) ? s : null;
}
async function Bg(e, t = {}) {
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
var Vg = {
	primary: "primary",
	logo: "primary",
	lockup: "primary",
	mark: "mark",
	icon: "mark",
	symbol: "mark",
	wordmark: "wordmark"
}, Hg = {
	primary: "logo",
	mark: "icon"
}, Ug = {
	primary: "logo.primary",
	mark: "logo.icon"
}, Wg = (e) => X(e) ? Z(e.svg) ?? Z(e.png) : void 0;
function Gg(e, t = {}) {
	if (!X(e)) return null;
	let n = Vg[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = t.background === "dark" ? "dark" : "light", i = Ig(e, t.sourceUrl), a = Z(e.name), o = Kg(e, n, r, i, a) ?? (n === "wordmark" ? null : qg(e, n, r, i, a));
	return o || n !== "wordmark" ? o : Gg(e, {
		...t,
		kind: "primary"
	});
}
function Kg(e, t, n, r, i) {
	let a = (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants.filter(X) : []).filter((e) => e.kind === t && Wg(e.files)), o = a.find((e) => e.background === n) ?? a.find((e) => e.background === "any") ?? a[0];
	if (!o) return null;
	let s = Lg(Wg(o.files), r);
	return s ? {
		src: s,
		alt: Z(o.name) ?? i,
		kind: t,
		background: o.background,
		...X(o.minWidth) ? { minWidth: o.minWidth } : {},
		...X(o.clearSpace) ? { clearSpace: o.clearSpace } : {}
	} : null;
}
function qg(e, t, n, r, i) {
	let a = X(e.logos) ? e.logos : {}, o = a[Hg[t]];
	if (X(o)) {
		let e = n === "dark" ? "light" : "dark";
		for (let a of [n, e]) {
			let e = o[a], n = Lg(X(e) ? e.src ?? e.url : e, r);
			if (n) return {
				src: n,
				alt: Z(o.alt) ?? i,
				kind: t,
				background: a
			};
		}
	}
	let s = Z(e.assignments?.[Ug[t]]), c = s && a[s] || e.assets?.[t === "mark" ? "icon" : "primary"];
	if (X(c)) {
		let e = Lg(c.src ?? c.url, r);
		if (e) return {
			src: e,
			alt: Z(c.alt) ?? Z(c.name) ?? i,
			kind: t
		};
	}
	return null;
}
var Jg = {
	photos: "photo",
	icons: "icon",
	graphics: "graphic",
	backgrounds: "background",
	templates: "template"
};
function Yg(e, t, n = {}) {
	if (!X(e) || !X(e.collections)) return null;
	let r = e.collections, i = Jg[t] ?? t, a = Z(e.assignments?.[`media.${t}`]), o = (a && X(r[a]) ? a : void 0) ?? Object.keys(r).find((e) => X(r[e]) && r[e].type === i);
	if (!o) return null;
	let s = r[o], c = Ig(e, n.sourceUrl), l = X(s.versions) ? s.versions : {}, u = [Z(n.versionId), Z(s.defaultVersionId)].find((e) => e && X(l[e])), d = u ? l[u] : void 0, f = X(s.schema?.keys) ? s.schema.keys : {}, p = [];
	d && X(d.items) ? p = [...Object.keys(f).filter((e) => e in d.items), ...Object.keys(d.items).filter((e) => !(e in f))].map((e) => [e, d.items[e]]) : Array.isArray(s.items) && (p = s.items.map((e, t) => [String(X(e) && Z(e.key) ? e.key : t), e]));
	let m = p.flatMap(([e, t]) => {
		if (!X(t)) return [];
		let n = Lg(t.src ?? t.url, c);
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
var Xg = (e) => typeof e == "string" ? e.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_") : "";
function Zg(e, t) {
	let n = Array.isArray(e?.config?.env) ? e.config.env : [];
	for (let e of (Array.isArray(t) ? t : [t]).map(Xg)) {
		let t = n.find((t) => X(t) && Xg(t.key) === e && Z(t.value));
		if (t) return t.value.trim();
	}
}
function Qg(e, t) {
	let n = t === "macro" ? "macro" : "micro", r = e?.config?.maps?.styles?.[n], i = X(r) ? Z(r.url) : void 0;
	if (i) return {
		url: i,
		...Z(r.name) ? { name: Z(r.name) } : {},
		source: "config.maps"
	};
	let a = n.toUpperCase(), o = Zg(e, [
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
var $g = /["\\\n\r\f<>]/, e_ = (e) => (Array.isArray(e) ? e : X(e) ? Object.values(e) : []).filter(X);
function t_(e) {
	return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : Z(e.cssUrl) ? "css" : void 0;
}
var n_ = (e) => Z(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function r_(e) {
	let t = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((e) => e?.weight)).map(Number).filter((e) => Number.isInteger(e) && e >= 1 && e <= 1e3);
	return [...new Set(t)].sort((e, t) => e - t);
}
function i_(e, t) {
	let n = encodeURIComponent(e).replace(/%20/g, "+"), r = r_(t), i = Array.isArray(t.faces) ? t.faces : [], a = Array.isArray(t.styles) ? t.styles : i.map((e) => e?.style), o = r.length > 0 ? `:wght@${r.join(";")}` : "";
	if (a.includes("italic")) {
		let e = (Array.isArray(t.styles) ? (a.includes("normal") ? [0, 1] : [1]).flatMap((e) => (r.length ? r : [400]).map((t) => [e, t])) : i.filter((e) => e?.style === "normal" || e?.style === "italic").map((e) => [+(e.style === "italic"), Number(e.weight)]).filter(([, e]) => Number.isInteger(e) && e >= 1 && e <= 1e3)).sort(([e, t], [n, r]) => e - n || t - r).map((e) => e.join(","));
		o = `:ital,wght@${[...new Set(e)].join(";")}`;
	}
	return `https://fonts.googleapis.com/css2?family=${n}${o}&display=swap`;
}
function a_(e) {
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
function o_(e) {
	let t = String(e.format ?? e.src ?? "").toLowerCase();
	return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function s_(e) {
	let t = String(e ?? "").trim();
	return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function c_(e, t, n) {
	let r = Lg(t.src, n);
	if (r && !$g.test(r)) return [
		"@font-face {",
		`  font-family: "${e}";`,
		`  src: url("${r}") format("${o_(t)}");`,
		`  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
		`  font-weight: ${s_(t.weight)};`,
		"  font-display: swap;",
		"}"
	].join("\n");
}
function l_(e, t = {}) {
	if (!X(e)) return {
		fontFaceCss: "",
		stylesheetUrls: []
	};
	let n = Ig(e, t?.sourceUrl), r = [], i = [], a = (e) => {
		let t = Lg(e, n);
		t && !/^data:/i.test(t) && !r.includes(t) && r.push(t);
	}, o = ug(e);
	if (o) {
		for (let e of Array.isArray(o.fontStylesheets) ? o.fontStylesheets : []) a(e);
		for (let e of Array.isArray(o.fontFaces) ? o.fontFaces : []) {
			if (!X(e)) continue;
			let t = Z(e.family), r = t ? n_(t) : void 0;
			if (!r || $g.test(r)) continue;
			let a = c_(r, e, n);
			a && !i.includes(a) && i.push(a);
		}
		return {
			fontFaceCss: i.join("\n"),
			stylesheetUrls: r
		};
	}
	for (let t of e_(e.fonts)) {
		let e = Z(t.family), r = e ? n_(e) : void 0;
		if (!r || $g.test(r)) continue;
		let o = t_(t);
		o && a(Z(t.cssUrl) ? t.cssUrl : o === "google" ? i_(r, t) : void 0);
		for (let e of Array.isArray(t.faces) ? t.faces : []) a(e?.cssUrl);
		if (!o) for (let e of a_(t)) {
			let t = c_(r, e, n);
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
var u_ = r(null), d_ = typeof window > "u" ? l : d;
function f_(e) {
	try {
		return typeof location > "u" ? e : new URL(e, location.href).toString();
	} catch {
		return e;
	}
}
function p_({ brandKit: e, src: t, defaults: n, sourceUrl: r, onLoad: i, onError: a, className: o, style: s, children: c }) {
	let u = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, [d, p] = h(null), g = m({
		onLoad: i,
		onError: a
	});
	d_(() => {
		g.current = {
			onLoad: i,
			onError: a
		};
	}, [i, a]), l(() => {
		if (!u) return;
		let e = new AbortController(), t = (e) => {
			p({
				src: u,
				brandKit: null
			}), g.current.onError ? g.current.onError(e) : console.error(e);
		}, n = setTimeout(() => {
			e.abort();
			let n = /* @__PURE__ */ Error(`BrandKitProvider ${u} is still loading after ${pe / 1e3} s; using the fallback kit.`);
			t(n);
		}, pe);
		return Bg(u, { signal: e.signal }).then((t) => {
			e.signal.aborted || (clearTimeout(n), p({
				src: u,
				brandKit: t
			}), g.current.onLoad?.(t));
		}, (r) => {
			e.signal.aborted || (clearTimeout(n), t(r));
		}), () => {
			clearTimeout(n), e.abort();
		};
	}, [u]);
	let _ = u && d?.src === u ? d : null, b = _?.brandKit ?? e ?? null, x = _?.brandKit && u ? f_(u) : r, S = u ? _ ? _.brandKit ? "ready" : "error" : "loading" : "idle", C = f(() => {
		let e = Ig(b, x);
		return {
			brandKit: b,
			cssVars: Ng(b, { defaults: n }),
			sourceUrl: x,
			status: S,
			logo: (e = {}) => Gg(b, {
				...e,
				sourceUrl: x
			}),
			collection: (e, t = {}) => Yg(b, e, {
				...t,
				sourceUrl: x
			}),
			mapStyle: (e) => Qg(b, e),
			env: (e) => Zg(b, e),
			resolveUrl: (t) => Lg(t, e)
		};
	}, [
		b,
		x,
		n,
		S
	]), w = f(() => l_(b, { sourceUrl: x }), [b, x]), [T, E] = h(() => /* @__PURE__ */ new Set()), D = (e) => E((t) => t.has(e) ? t : new Set(t).add(e)), O = w.stylesheetUrls.filter((e) => !T.has(e)).join("\n"), k = S === "loading";
	return d_(() => k ? ne.hold({
		label: `BrandKitProvider ${u}`,
		waitMs: pe
	}) : void 0, [k, u]), d_(() => O ? ne.hold({
		label: `BrandKitProvider font stylesheet ${O}`,
		waitMs: pe
	}) : void 0, [O]), l(() => {
		if (!O) return;
		let e = setTimeout(() => {
			for (let e of O.split("\n")) D(e);
		}, pe);
		return () => clearTimeout(e);
	}, [O]), /* @__PURE__ */ y(u_.Provider, {
		value: C,
		children: [
			w.stylesheetUrls.map((e) => /* @__PURE__ */ v("link", {
				rel: "stylesheet",
				href: e,
				"data-uhuu-brand-kit-font": "",
				ref: (t) => {
					t?.sheet && D(e);
				},
				onLoad: () => D(e),
				onError: () => D(e)
			}, e)),
			w.fontFaceCss ? /* @__PURE__ */ v("style", {
				"data-uhuu-brand-kit-font": "",
				children: w.fontFaceCss
			}) : null,
			/* @__PURE__ */ v("div", {
				"data-uhuu-brand-kit": typeof b?.id == "string" ? b.id : "",
				"data-uhuu-brand-kit-status": S,
				className: o,
				style: {
					display: "contents",
					...C.cssVars,
					...s
				},
				children: c
			})
		]
	});
}
function m_() {
	return c(u_);
}
//#endregion
//#region src/uhuu/editor-shell/document/template-payload-core.ts
var h_ = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function g_(e, t, n = /* @__PURE__ */ new WeakMap()) {
	if (Object.is(e, t)) return !0;
	if (!h_(e) && !Array.isArray(e) || !h_(t) && !Array.isArray(t) || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (n.get(e) === t) return !0;
	if (n.set(e, t), Array.isArray(e) && Array.isArray(t) && e.length !== t.length) return !1;
	let r = __(e), i = __(t);
	return r.length === i.length && r.every((r) => Object.prototype.hasOwnProperty.call(t, r) && g_(e[r], t[r], n));
}
function __(e) {
	return Object.keys(e).filter((t) => e[t] !== void 0 && typeof e[t] != "function" && typeof e[t] != "symbol");
}
function v_(e, t, n) {
	let r = __(e).filter((e) => e !== n), i = __(t).filter((e) => e !== n);
	return r.length === i.length && r.every((n) => Object.prototype.hasOwnProperty.call(t, n) && g_(e[n], t[n]));
}
function y_(e) {
	return {
		payload: e ?? {},
		sequence: 0,
		outgoing: []
	};
}
function b_(e, t) {
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
function x_(e, t, n = 1) {
	return e.outgoing.some((e) => e.sequence === t.sequence) ? e : {
		...e,
		outgoing: [...e.outgoing, {
			...t,
			remainingEchoes: n
		}].slice(-32)
	};
}
function S_(e, t, n) {
	if (!t) return e;
	let r = e.outgoing.findIndex((e) => v_(e.payload, t, n));
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
	return g_(i, e.payload) ? a === e.outgoing ? e : {
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
var C_ = "uhuu_page_editor";
function w_(e) {
	return e.kind === "group";
}
function T_(e) {
	let t = [], n = 1;
	for (let r of e) if (w_(r)) for (let e of r.pages) t.push({
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
function E_(e) {
	let t = [], n = 1;
	for (let r of e) if (w_(r)) {
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
function D_(e) {
	return T_(e).length;
}
function O_(e) {
	return e.map((e) => {
		let t = e.strictPosition;
		if (w_(e)) {
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
function k_(e, t) {
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
function A_(e) {
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
function j_(e, t = C_) {
	let n = A_(e);
	return {
		key: t,
		items: n,
		totalPages: D_(n),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function M_(e, t = C_) {
	let n = e?.[t];
	if (!n?.items) return null;
	let r = A_(n.items);
	return {
		key: t,
		items: r,
		totalPages: D_(r),
		updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
	};
}
function N_(e, t, n = C_) {
	let r = j_(t, n);
	return {
		...e ?? {},
		[n]: r
	};
}
function P_() {
	return Math.random().toString(36).slice(2, 11);
}
function F_(e, t, n) {
	return {
		kind: "page",
		id: n?.repeatable ? P_() : e,
		componentKey: t,
		templateId: e,
		label: n?.label,
		repeatable: n?.repeatable,
		maxInstances: n?.maxInstances,
		...n
	};
}
function I_(e, t, n) {
	let r = n?.repeatable ? P_() : e;
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
function L_(e, t) {
	return e < 0 ? t + e + 1 : e;
}
function R_(e, t, n) {
	for (let r of t) {
		let t = L_(r.start, n), i = L_(r.end, n);
		if (e >= t && e <= i) return !0;
	}
	return !1;
}
function z_(e, t, n = 2) {
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
function B_(e, t) {
	if (!t || t.mode === "all") return e;
	let n = D_(e), r = t.mode ?? "all", i = t.coverPageCount ?? 2, a = r === "custom" && t.ranges ? t.ranges : z_(r, n, i);
	if (a.length === 0) return [];
	let o = [];
	for (let t of e) if (w_(t)) {
		let e = t.pages.filter((e) => e.pageNum && R_(e.pageNum, a, n));
		e.length > 0 && o.push({
			...t,
			pages: e
		});
	} else t.pageNum && R_(t.pageNum, a, n) && o.push(t);
	return o;
}
function V_(e, t, n) {
	if (!n || n.mode === "all") return !0;
	let r = n.mode ?? "all", i = n.coverPageCount ?? 2, a = r === "custom" && n.ranges ? n.ranges : z_(r, t, i);
	return a.length !== 0 && R_(e, a, t);
}
//#endregion
//#region src/uhuu/editor-shell/document/integration-utils.ts
function H_(e, t) {
	if (e?.integrations) return e.integrations[t];
}
function U_(e, t) {
	return t && w_(t) ? t.id : e?.id ?? null;
}
function W_(e, t, n) {
	let r = U_(t, n);
	return r ? {
		instanceId: r,
		integration: H_(e, r)
	} : {
		instanceId: null,
		integration: void 0
	};
}
function G_(e, t, n) {
	return W_(e, t, n).integration;
}
function K_(e, t) {
	if (!e) return null;
	let n = `integrations.${e}`;
	return t ? `${n}.${t}` : n;
}
function q_(e) {
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
function J_(e, t, n) {
	if (!t) return n;
	let r = t.split("."), i = { ...e }, a = i;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e];
		!(t in a) || typeof a[t] != "object" || a[t] === null ? a[t] = {} : a[t] = { ...a[t] }, a = a[t];
	}
	let o = r[r.length - 1];
	return a[o] = n, i;
}
function Y_(e, t, n) {
	let r = q_(t);
	if (!r.isIntegrationPath || !r.instanceId) return e;
	let { instanceId: i, fieldPath: a } = r, o = J_(H_(e, i) || {}, a, n);
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
function X_(e, t) {
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
var Z_ = e.createContext(null);
function Q_({ payload: t, onPayloadChange: n, children: r, stateKey: i = C_ }) {
	let [a, o] = e.useReducer((e, t) => t.type === "local" ? b_(e, t.update) : t.type === "sent" ? x_(e, t.write, t.publishers) : S_(e, t.payload, t.key), t, y_), s = a.payload, c = e.useRef(0);
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
			...h_(e) ? e : {},
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
		l((n) => Y_(n, e, t));
	}, [l]), h = e.useCallback((e, t) => {
		let n = t ?? i;
		l((t) => N_(t, e, n));
	}, [l, i]), g = e.useCallback((e) => X_(s, e), [s]), _ = e.useMemo(() => ({
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
	return /* @__PURE__ */ v(Z_.Provider, {
		value: _,
		children: r
	});
}
function $_(e) {
	return e.defaultValue === void 0 ? e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "" : e.defaultValue;
}
function ev(e, t) {
	return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function tv(e, t, n) {
	let r = e.field ?? e.id;
	return {
		...e,
		getValue: (n) => {
			let i = t?.pages?.[n.id]?.[r];
			return i === void 0 ? $_(e) : e.type === "toggle" ? !!i : i;
		},
		onChange: (t, i) => {
			n(t, r, ev(e, i));
		}
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-management.js
var nv = [
	"add",
	"remove",
	"reorder",
	"duplicate",
	"rename"
];
function rv(e) {
	let t = e && typeof e == "object" ? e : {}, n = t.locked !== !0, r = Object.fromEntries(nv.map((e) => [e, typeof t[e] == "boolean" ? t[e] : n]));
	return {
		...r,
		templateOwnsPages: !r.add && !r.remove && !r.reorder && !r.duplicate
	};
}
var iv = /* @__PURE__ */ new Set([
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
function av(e, t, { rename: n = !1 } = {}) {
	if (!t?.length) return e;
	let r = /* @__PURE__ */ new Map(), i = (e) => e.forEach((e) => {
		e?.id && r.set(e.id, e), Array.isArray(e?.pages) && i(e.pages);
	});
	i(t);
	let a = (e) => {
		let t = r.get(e.id), i = t ? Object.fromEntries(Object.entries(t).filter(([e]) => !iv.has(e))) : {};
		t && n && !Ka(t.label, e.label) && (i.label = t.label);
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
function ov(e, t) {
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
function sv(e, t) {
	let n = ov(e, t);
	return cv(n.issue), n.keys;
}
function cv(e) {
	e && (e.reason === "invalid-keys" ? console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out") : e.reason === "invalid-result" ? console.error("[uhuu-components] pageComponentKeys function must return an array, got:", e.detail) : console.error("[uhuu-components] Error evaluating pageComponentKeys function:", e.detail));
}
function lv(e) {
	let t = [], n = [], r = [];
	for (let i of e) i.strictPosition === "start" ? t.push(i) : i.strictPosition === "end" ? r.push(i) : n.push(i);
	return {
		start: t,
		middle: n,
		end: r
	};
}
function uv(e) {
	let { start: t, middle: n, end: r } = lv(e);
	return [
		...t,
		...n,
		...r
	];
}
function dv(e, t, n) {
	if (t.strictPosition === "start") return [t, ...e];
	if (t.strictPosition === "end") return [...e, t];
	let { start: r, middle: i, end: a } = lv(e), o = i.length;
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
function fv({ initialItems: e, savedItems: t, config: n, payload: r, management: i }) {
	if (i.templateOwnsPages) return av(e, t, { rename: i.rename });
	if (!t) return e;
	let a = n.groups ?? {}, o = Array.isArray(a) ? a : Object.entries(a).map(([e, t]) => ({
		...t,
		id: e
	})), s = new Map(o.map((e) => [e.id, e])), c = n.pages ?? {}, l = (e) => c[e.componentKey ?? e.templateId ?? e.id] ?? (e.templateId ? c[e.templateId] : void 0) ?? c[e.id], u = (e) => l(e)?.hasFlow && !e.hasFlow ? {
		...e,
		hasFlow: !0
	} : e, d = (e, t) => t !== void 0 && Ka(e.label, t) && e.label !== t ? {
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
		let a = ov(t.pageComponentKeys, {
			payload: r,
			item: void 0,
			parent: void 0
		});
		return cv(a.issue), a.issue && a.issue.reason !== "invalid-keys" ? i : {
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
	if (![...p].some((e) => !m.some((t) => t.id === e)) && D_(m) !== D_(e)) {
		let t = f.filter((e) => !p.has(e.id) && (e.kind !== "group" || e.id !== (e.templateId ?? e.id)));
		return t.length ? uv([...e, ...t]) : e;
	}
	return f;
}
//#endregion
//#region src/uhuu/editor-shell/document/document-typography.js
var pv = [
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
], mv = (e) => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
function hv(e = typeof document > "u" ? void 0 : document) {
	let t = e?.querySelector("[data-uhuu-interactive]") ?? e?.body, n = t ? e.defaultView?.getComputedStyle(t) : void 0;
	if (!n) return;
	let r = {};
	for (let e of pv) {
		let t = n.getPropertyValue(e);
		t && (r[mv(e)] = t);
	}
	return r;
}
//#endregion
//#region src/uhuu/editor-shell/document/default-render-thumbnail.tsx
var gv = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function _v({ children: t, style: n, acquireTypography: r }) {
	let [i, a] = e.useState();
	return gv(() => {
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
function vv(e) {
	let { pageComponents: t, payload: n, setup: r = {
		width: 210,
		height: 297
	}, thumbnailWidth: i = 200, thumbnailHeight: a, i18n: o } = e, { t: s, localize: c } = o, l = L.resolveDimensions(r), u = l.width, d = l.height, f = u / d, p = i, m = a ?? Math.round(p / f), h = u * 3.779527559, g = d * 3.779527559, _, b = 0, x = () => (_ ??= hv() ?? {}, b += 1, {
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
			let r = e.firstPageId, l = e.firstPageComponentKey ?? r, u = X_(n, {
				id: r,
				componentKey: l
			}), d = e.firstPageComponent || (l ? t[l] : null), f = n?.integrations?.[e.id];
			return /* @__PURE__ */ y("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.id,
				children: [
					d ? /* @__PURE__ */ v("div", {
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ v(_v, {
								style: S,
								acquireTypography: x,
								children: /* @__PURE__ */ v(d, {
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
								children: r || s("thumbnail.noPreview")
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
						children: [/* @__PURE__ */ v(la, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
			let r = e.pageId, l = e.pageComponentKey ?? r, u = X_(n, {
				id: r,
				componentKey: l
			}), d = e.pageComponent || (l ? t[l] : null), f = r ? G_(n, { id: r }) : void 0;
			return /* @__PURE__ */ y("div", {
				"data-uhuu-paper": !0,
				className: `uhuu:relative uhuu:bg-white uhuu:border uhuu:transition-all ${i ? "uhuu:border-blue-400 uhuu:shadow-2xl uhuu:scale-105" : o ? "uhuu:border-(--uhuu-thumbnail-border-strong) uhuu:bg-gray-50" : "uhuu:border-(--uhuu-thumbnail-border) uhuu:hover:border-(--uhuu-thumbnail-border-strong) uhuu:hover:shadow-lg"}`,
				style: {
					width: `${p}px`,
					height: `${m}px`
				},
				title: e.pageId,
				children: [
					d ? /* @__PURE__ */ v("div", {
						className: "uhuu:w-full uhuu:h-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-gray-50 uhuu:overflow-hidden uhuu:relative uhuu:pointer-events-none",
						children: /* @__PURE__ */ v("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:pointer-events-none",
							style: {
								transform: `scale(${Math.min(p / h, m / g)})`,
								transformOrigin: "center"
							},
							children: /* @__PURE__ */ v(_v, {
								style: S,
								acquireTypography: x,
								children: /* @__PURE__ */ v(d, {
									payload: n,
									pageId: r,
									templateId: l,
									pagePayload: u,
									componentKey: l,
									integration: f
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
								children: r || s("thumbnail.noPreview")
							})]
						})
					}),
					o && /* @__PURE__ */ y("div", {
						"data-uhuu-chrome": !0,
						className: "uhuu:absolute uhuu:top-2 uhuu:left-2 uhuu:px-2 uhuu:py-1 uhuu:bg-gray-600/80 uhuu:backdrop-blur-sm uhuu:text-white uhuu:text-xs uhuu:font-medium uhuu:rounded uhuu:shadow-lg uhuu:pointer-events-none uhuu:flex uhuu:items-center uhuu:gap-1",
						children: [/* @__PURE__ */ v(la, { className: "uhuu:size-3" }), /* @__PURE__ */ v("span", { children: s(a === "start" ? "thumbnail.start" : "thumbnail.end") })]
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
//#region src/uhuu/editor-shell/resizers/zoom-fit-core.js
function yv(e) {
	switch (e) {
		case "fit-width": return "width";
		case "fit-height": return "height";
		case "fit-page": return "both";
		default: return "none";
	}
}
function bv(e) {
	let t = e.filter(({ width: e, height: t }) => e > 0 && t > 0);
	return t.length ? {
		width: t.reduce((e, t) => e + t.width, 0),
		height: Math.max(...t.map((e) => e.height))
	} : null;
}
function xv(e, t) {
	if (e === "two_pages") return bv(t);
	let n = t.find(({ width: e, height: t }) => e > 0 && t > 0);
	return n ? {
		width: n.width,
		height: n.height
	} : null;
}
function Sv({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
	let r = [e, n - Math.max(t, 0)].filter((e) => e > 0);
	return r.length ? Math.min(...r) : 0;
}
function Cv({ paneWidth: e, paneHeight: t, paddingX: n = 0, paddingY: r = 0, chromeHeight: i = 0 }) {
	return {
		availableWidth: Math.max(e - n, 0),
		availableHeight: Math.max(t - r - i, 0)
	};
}
function wv({ mode: e, contentWidth: t, contentHeight: n, availableWidth: r, availableHeight: i, minZoom: a, maxZoom: o }) {
	if (e === "none" || t <= 0 || n <= 0 || r <= 0 || i <= 0) return null;
	let s = r / t * 100, c = i / n * 100;
	return Math.min(Math.max(e === "width" ? s : e === "height" ? c : Math.min(s, c), a), o);
}
//#endregion
//#region src/uhuu/editor-shell/resizers/zoom-focal-core.js
function Tv(e, t, n) {
	return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? {
		clientX: t,
		clientY: n
	} : {
		clientX: e.left + e.width / 2,
		clientY: e.top + e.height / 2
	};
}
function Ev(e, t, n, r) {
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
function Dv(e) {
	return {
		left: e.left,
		top: e.top,
		width: e.width,
		height: e.height
	};
}
function Ov(e, t, n) {
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
function kv(e) {
	return e === "auto" || e === "scroll" || e === "overlay";
}
//#endregion
//#region src/uhuu/editor-shell/resizers/section-page-resizer.tsx
var Av = 24, jv = 64, Mv = 1e3, Nv = {
	width: "max-content",
	margin: "auto",
	padding: `0 ${Av}px ${jv}px`,
	overflowAnchor: "none"
};
function Pv(e) {
	let t = e, n = null, r = null;
	for (; t && t !== document.documentElement;) {
		let e = window.getComputedStyle(t);
		if (!n && kv(e.overflowX) && (n = t), !r && kv(e.overflowY) && (r = t), n && r) return {
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
function Fv(e) {
	let t = Math.max(e.getBoundingClientRect().top, 0), n = 0, r = e.parentElement;
	for (; r && r !== document.documentElement;) {
		let e = window.getComputedStyle(r);
		e.display !== "contents" && (n += (Number.parseFloat(e.paddingBottom) || 0) + (Number.parseFloat(e.borderBottomWidth) || 0) + Math.max(Number.parseFloat(e.marginBottom) || 0, 0)), r = r.parentElement;
	}
	return t + n;
}
function Iv(e) {
	let t = e.querySelector("[data-section-content]"), n = t?.closest("[class*=\"group/section\"]");
	if (!t || !n) return 0;
	let r = t.getBoundingClientRect().height;
	return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
var Lv = r({
	zoom: 100,
	scaleValue: 1,
	hideUI: !1
});
function Rv({ children: e, layout: t = "spread", pageItemId: n }) {
	let { scaleValue: r } = c(Lv), i = m(null);
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
function zv(e) {
	let t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
	return t > 0 && n > 0 ? {
		width: t,
		height: n
	} : null;
}
function Bv(e, t) {
	let n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
	if (!n) return null;
	let r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
		let e = n.querySelector("[data-section-content]");
		return e ? [e] : [];
	})();
	return r.length ? xv(t, r.map(zv).filter((e) => e !== null)) : null;
}
function Vv({ children: e, title: t, className: n = "", controls: r, origin: i = "center" }) {
	let { scaleValue: a, hideUI: o } = c(Lv), s = m(null), [u, d] = h(0), [f, p] = h(0);
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
function Hv({ children: e, className: t = "", defaultZoom: n = 100, minZoom: r = 25, maxZoom: i = 200, onAddPage: a, menuItems: o, hideUI: c, preview: u = "single_page", defaultZoomMode: d = "manual", scrollMode: f = "pane" }) {
	let p = Go(), g = c ?? p, { t: _ } = go(), b = Ma(), [x, C] = h(n), [w, T] = h(() => yv(d)), [E, D] = h(() => yv(d) !== "none"), [O, k] = h(0), A = m(null), j = m(null), M = m(null), N = m(null), P = m(x);
	l(() => {
		P.current = x;
	}, [x]);
	let F = s(() => f === "pane" && j.current ? {
		x: j.current,
		y: j.current
	} : Pv(A.current), [f]), I = s((e, t, n) => {
		let a = Math.min(Math.max(e, r), i), o = N.current;
		if (!o) {
			C(a), T("none");
			return;
		}
		let s = F(), c = Array.from(o.querySelectorAll("[data-section-content]")), l = Ov(c.map((e) => Dv(e.getBoundingClientRect())), t, n), u = l >= 0 ? c[l] : o, d = Dv(u.getBoundingClientRect()), f = Tv(d, t, n);
		S(() => {
			C(a), T("none");
		});
		let p = () => {
			let e = Dv(u.getBoundingClientRect()), { deltaLeft: t, deltaTop: n } = Ev(d, e, f.clientX, f.clientY);
			t !== 0 && s.x && (s.x.scrollLeft += t), n !== 0 && s.y && (s.y.scrollTop += n);
		};
		p(), window.requestAnimationFrame(p);
	}, [
		i,
		r,
		F
	]), L = s(() => {
		let e = (f === "pane" ? j.current : A.current)?.getBoundingClientRect();
		return e ? {
			clientX: e.left + e.width / 2,
			clientY: e.top + e.height / 2
		} : {
			clientX: 0,
			clientY: 0
		};
	}, [f]), R = s(() => {
		let e = N.current;
		if (w === "none" || !e) return;
		let t = Bv(e, u);
		if (!t) return;
		let n = f === "pane" ? j.current : A.current;
		if (!n) return;
		let a = n.getBoundingClientRect(), o = n.ownerDocument.defaultView ?? window, s = o.visualViewport?.height ?? n.ownerDocument.documentElement.clientHeight ?? o.innerHeight, c = n.clientWidth || a.width, l = f === "pane" ? Sv({
			paneClientHeight: n.clientHeight || a.height,
			paneTop: a.top,
			viewportHeight: s
		}) : s - Math.max(a.top, 0), d = M.current ? window.getComputedStyle(M.current) : null, { availableWidth: p, availableHeight: m } = Cv({
			paneWidth: c,
			paneHeight: l,
			paddingX: d ? Number.parseFloat(d.paddingLeft) + Number.parseFloat(d.paddingRight) : 0,
			paddingY: d ? Number.parseFloat(d.paddingTop) + Number.parseFloat(d.paddingBottom) : 0,
			chromeHeight: Iv(e)
		}), h = wv({
			mode: w,
			contentWidth: t.width,
			contentHeight: t.height,
			availableWidth: p,
			availableHeight: m,
			minZoom: r,
			maxZoom: i
		});
		h !== null && (C((e) => Math.abs(e - h) < .01 ? e : h), D(!1));
	}, [
		w,
		i,
		r,
		u,
		f
	]), ee = (e) => {
		T(e);
	};
	l(() => {
		if (!E) return;
		if (w === "none") {
			D(!1);
			return;
		}
		let e = window.setTimeout(() => D(!1), Mv);
		return () => window.clearTimeout(e);
	}, [E, w]);
	let te = () => {
		let e = L();
		I(x + 25, e.clientX, e.clientY);
	}, z = () => {
		let e = L();
		I(x - 25, e.clientX, e.clientY);
	};
	l(() => {
		if (w === "none" || !A.current || !N.current) return;
		let e = 0, t = () => {
			window.cancelAnimationFrame(e), e = window.requestAnimationFrame(R);
		}, n = new ResizeObserver(t);
		n.observe(A.current), j.current && n.observe(j.current), n.observe(N.current);
		let r = () => {
			N.current?.querySelectorAll("[data-section-content]").forEach((e) => {
				n.observe(e);
			});
		};
		r();
		let i = new MutationObserver(() => {
			r(), t();
		});
		return i.observe(N.current, {
			childList: !0,
			subtree: !0
		}), window.addEventListener("resize", t), window.visualViewport?.addEventListener("resize", t), t(), () => {
			window.cancelAnimationFrame(e), n.disconnect(), i.disconnect(), window.removeEventListener("resize", t), window.visualViewport?.removeEventListener("resize", t);
		};
	}, [w, R]), l(() => {
		if (g || f !== "pane") return;
		let e = A.current;
		if (!e) return;
		let t = () => {
			let t = Fv(e);
			k((e) => Math.abs(e - t) < .5 ? e : t);
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
			n = null, t !== null && I(t, a.clientX, a.clientY);
		}, l = (t) => {
			if (!t.ctrlKey && !t.metaKey) return;
			t.preventDefault();
			let o = t.deltaMode === 1 ? t.deltaY * 16 : t.deltaMode === 2 ? t.deltaY * 16 * 32 : t.deltaY, s = n ?? P.current, l = Math.min(Math.max(s * 1.003 ** -o, r), i);
			a = {
				clientX: t.clientX,
				clientY: t.clientY
			}, (l !== s || n !== null) && (n = l, e === null && (e = window.requestAnimationFrame(c)));
		}, u = () => {
			t = null, !s && (o = f === "pane" ? j.current : A.current, o ? o.addEventListener("wheel", l, { passive: !1 }) : t = window.requestAnimationFrame(u));
		};
		return u(), () => {
			s = !0, e !== null && window.cancelAnimationFrame(e), t !== null && window.cancelAnimationFrame(t), o?.removeEventListener("wheel", l);
		};
	}, [
		I,
		g,
		i,
		r,
		f
	]);
	let B = x / 100;
	return g ? /* @__PURE__ */ v(Lv.Provider, {
		value: {
			zoom: 100,
			scaleValue: 1,
			hideUI: !0
		},
		children: /* @__PURE__ */ v("div", {
			className: t,
			children: e
		})
	}) : /* @__PURE__ */ v(Lv.Provider, {
		value: {
			zoom: x,
			scaleValue: B,
			hideUI: !1
		},
		children: /* @__PURE__ */ y("div", {
			ref: A,
			className: `uhuu:flex uhuu:flex-col uhuu:flex-1 uhuu:min-h-0 ${t}`,
			children: [/* @__PURE__ */ y("div", {
				"data-uhuu-editor": !0,
				className: "uhuu:fixed uhuu:right-4 uhuu:bottom-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:px-2.5 uhuu:py-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm",
				children: [
					o,
					/* @__PURE__ */ v("div", {
						ref: b,
						className: "uhuu:contents"
					}),
					/* @__PURE__ */ v("div", { className: "uhuu:h-4 uhuu:w-px uhuu:bg-gray-200 uhuu:mx-0.5" }),
					/* @__PURE__ */ y(Dh, {
						modal: !1,
						children: [/* @__PURE__ */ v(Oh, {
							asChild: !0,
							children: /* @__PURE__ */ y($o, {
								variant: "ghost",
								size: "sm",
								title: _("zoom.menu"),
								className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
								children: [
									Math.round(x),
									"%",
									/* @__PURE__ */ v(ra, { className: "uhuu:w-3 uhuu:h-3 uhuu:ml-1 uhuu:opacity-60" })
								]
							})
						}), /* @__PURE__ */ y(Mh, {
							className: "uhuu:w-52 uhuu:p-1.5",
							align: "end",
							children: [
								/* @__PURE__ */ y(Nh, {
									onClick: () => ee("width"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${w === "width" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ v(_a, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: _("zoom.fitWidth") })]
								}),
								/* @__PURE__ */ y(Nh, {
									onClick: () => ee("height"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${w === "height" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ v(va, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: _("zoom.fitHeight") })]
								}),
								/* @__PURE__ */ y(Nh, {
									onClick: () => ee("both"),
									className: `uhuu:cursor-pointer uhuu:flex uhuu:items-center ${w === "both" ? "uhuu:bg-gray-100" : ""}`,
									children: [/* @__PURE__ */ v(ua, { className: "uhuu:w-4 uhuu:h-4 uhuu:mr-2" }), /* @__PURE__ */ v("span", { children: _("zoom.fitPage") })]
								}),
								/* @__PURE__ */ v(Lh, { className: "uhuu:my-1.5" }),
								/* @__PURE__ */ y("div", {
									className: "uhuu:flex uhuu:items-center uhuu:justify-center uhuu:gap-2 uhuu:px-3 uhuu:py-2.5",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ v($o, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), z();
											},
											disabled: x <= r,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: _("zoom.zoomOut"),
											children: /* @__PURE__ */ v(xa, { className: "uhuu:w-4 uhuu:h-4" })
										}),
										/* @__PURE__ */ y("div", {
											className: "uhuu:relative",
											children: [/* @__PURE__ */ v("input", {
												type: "number",
												value: Math.round(x),
												onChange: (e) => {
													let t = Number.parseInt(e.target.value);
													if (!isNaN(t)) {
														let e = L();
														I(t, e.clientX, e.clientY);
													}
												},
												onFocus: (e) => e.target.select(),
												className: "uhuu:w-20 uhuu:pr-6 uhuu:text-center uhuu:text-sm uhuu:text-gray-700 uhuu:bg-(--uhuu-shell-surface) uhuu:border uhuu:border-gray-300 uhuu:rounded uhuu:px-2 uhuu:py-1.5 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-blue-500 uhuu:focus:border-transparent uhuu:transition-all",
												min: r,
												max: i
											}), /* @__PURE__ */ v("span", {
												className: "uhuu:absolute uhuu:right-2 uhuu:top-1/2 uhuu:-translate-y-1/2 uhuu:text-xs uhuu:text-gray-400 uhuu:pointer-events-none",
												children: "%"
											})]
										}),
										/* @__PURE__ */ v($o, {
											variant: "ghost",
											size: "sm",
											onClick: (e) => {
												e.stopPropagation(), te();
											},
											disabled: x >= i,
											className: "uhuu:h-8 uhuu:w-8 uhuu:p-0 uhuu:hover:bg-gray-100 uhuu:disabled:opacity-40",
											title: _("zoom.zoomIn"),
											children: /* @__PURE__ */ v(ba, { className: "uhuu:w-4 uhuu:h-4" })
										})
									]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ v("div", {
				ref: j,
				className: f === "pane" ? "uhuu-zoom-pane" : void 0,
				style: f === "pane" ? {
					height: `calc(100dvh - ${O}px)`,
					maxHeight: "100%",
					overflow: "auto",
					overscrollBehavior: "contain"
				} : void 0,
				children: /* @__PURE__ */ v("div", {
					ref: M,
					className: "uhuu-zoom-pane-content",
					style: E ? {
						...Nv,
						visibility: "hidden"
					} : Nv,
					children: /* @__PURE__ */ v("div", {
						ref: N,
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
var Uv = Object.defineProperty, Wv = (e, t) => Uv(e, "name", {
	value: t,
	configurable: !0
}), Gv = "Dialog", [Kv, qv] = /* @__PURE__ */ ms(Gv), [Jv, Yv] = Kv(Gv), Xv = /* @__PURE__ */ Wv((t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), { nodes: u, registry: d } = Kc(), [f, p] = Ts({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Gv
	}), [m, h] = e.useState(0), [g, _] = e.useState(0);
	return /* @__PURE__ */ v(Jv, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: ll(),
		titleId: ll(),
		descriptionId: ll(),
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
}, "Dialog"), Zv = "DialogTrigger", Qv = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Yv(Zv, n), a = J(t, i.triggerRef);
	return /* @__PURE__ */ v(Js.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": _y(i.open),
		...r,
		ref: a,
		onClick: q(e.onClick, i.onOpenToggle)
	});
}, "DialogTrigger")), $v = "DialogPortal", [ey, ty] = Kv($v, { forceMount: void 0 }), ny = /* @__PURE__ */ Wv((t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = Yv($v, n);
	return /* @__PURE__ */ v(ey, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ v(Jd, {
			present: r || o.open,
			children: /* @__PURE__ */ v(Wd, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
}, "DialogPortal"), ry = "DialogOverlay", iy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let n = ty(ry, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Yv(ry, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ v(Jd, {
		present: r || a.open,
		children: /* @__PURE__ */ v(oy, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), ay = /* @__PURE__ */ Ms("DialogOverlay.RemoveScroll"), oy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(t, n) {
	let { __scopeDialog: r, ...i } = t, a = Yv(ry, r), o = J(n, Tc());
	return /* @__PURE__ */ v(Jp, {
		as: ay,
		allowPinchZoom: !0,
		shards: e.useMemo(() => [a.contentRef, ...a.branchNodes.map((e) => ({ current: e }))], [a.contentRef, a.branchNodes]),
		children: /* @__PURE__ */ v(Js.div, {
			"data-state": _y(a.open),
			...i,
			ref: o,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), sy = "DialogContent", cy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let n = ty(sy, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Yv(sy, e.__scopeDialog);
	return /* @__PURE__ */ v(Jd, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ v(ly, {
			...i,
			ref: t
		}) : /* @__PURE__ */ v(uy, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), ly = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(t, n) {
	let r = Yv(sy, t.__scopeDialog), i = e.useRef(null), a = J(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return Bf(e);
	}, []), /* @__PURE__ */ v(dy, {
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
}, "DialogContentModal")), uy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(t, n) {
	let r = Yv(sy, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ v(dy, {
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
}, "DialogContentNonModal")), dy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, "aria-describedby": o, children: s, ...c } = e, l = Yv(sy, n);
	return Ic(), /* @__PURE__ */ v(Gc, {
		registry: l.branchRegistry,
		children: /* @__PURE__ */ v(Uc, {
			asChild: !0,
			loop: !0,
			trapped: r,
			branches: l.branchNodes,
			onMountAutoFocus: i,
			onUnmountAutoFocus: a,
			children: /* @__PURE__ */ v(wc, {
				role: "dialog",
				id: l.contentId,
				"aria-labelledby": l.titlePresent ? l.titleId : void 0,
				"aria-describedby": l.descriptionPresent ? gy(o, l.descriptionId) : o,
				"data-state": _y(l.open),
				...c,
				ref: t,
				deferPointerDownOutside: !0,
				onDismiss: () => l.onOpenChange(!1),
				children: s
			})
		})
	});
}, "DialogContentImpl")), fy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Yv("DialogTitle", n), { setTitleCount: a } = i;
	return gs(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(Js.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), py = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Yv("DialogDescription", n), { setDescriptionCount: a } = i;
	return gs(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ v(Js.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), my = "DialogClose", hy = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Wv(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = Yv(my, n);
	return /* @__PURE__ */ v(Js.button, {
		type: "button",
		...r,
		ref: t,
		onClick: q(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function gy(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Wv(gy, "concatAriaDescribedby");
function _y(e) {
	return e ? "open" : "closed";
}
Wv(_y, "getState");
//#endregion
//#region src/uhuu/ui/sheet.tsx
var vy = Xv, yy = ny, by = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(iy, {
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
by.displayName = iy.displayName;
var xy = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => {
	let { portalContainer: a } = Ca(), o = go().t("dialog.close");
	return /* @__PURE__ */ y(yy, {
		container: a || void 0,
		children: [/* @__PURE__ */ v(by, {}), /* @__PURE__ */ y(cy, {
			ref: i,
			className: K("uhuu:fixed uhuu:z-50 uhuu:gap-4 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:transition uhuu:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out uhuu:data-[state=closed]:duration-300 uhuu:data-[state=open]:duration-500", e === "top" && "uhuu:inset-x-0 uhuu:top-0 uhuu:border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", e === "bottom" && "uhuu:inset-x-0 uhuu:bottom-0 uhuu:border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e === "left" && "uhuu:inset-y-0 uhuu:left-0 uhuu:h-full uhuu:w-3/4 uhuu:border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left uhuu:sm:max-w-sm", e === "right" && "uhuu:inset-y-0 uhuu:right-0 uhuu:h-full uhuu:w-3/4 uhuu:border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right uhuu:sm:max-w-sm", t),
			...r,
			children: [n, /* @__PURE__ */ y(hy, {
				className: "uhuu:absolute uhuu:right-4 uhuu:top-4 uhuu:rounded-sm uhuu:opacity-70 uhuu:ring-offset-(--uhuu-shell-surface) uhuu:transition-opacity uhuu:hover:opacity-100 uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-gray-400 uhuu:focus:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:data-[state=open]:bg-gray-100",
				children: [/* @__PURE__ */ v(ya, { className: "uhuu:h-4 uhuu:w-4" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})]
		})]
	});
});
xy.displayName = cy.displayName;
var Sy = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:space-y-2 uhuu:text-center uhuu:sm:text-left", e),
	...t
});
Sy.displayName = "SheetHeader";
var Cy = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col-reverse uhuu:sm:flex-row uhuu:sm:justify-end uhuu:sm:space-x-2", e),
	...t
});
Cy.displayName = "SheetFooter";
var wy = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(fy, {
	ref: n,
	className: K("uhuu:text-lg uhuu:font-medium uhuu:text-gray-900", e),
	...t
}));
wy.displayName = fy.displayName;
var Ty = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(py, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-500", e),
	...t
}));
Ty.displayName = py.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/add-page-dialog.tsx
function Ey({ open: t, onOpenChange: n, availableItems: r, onSelectItem: i, renderThumbnail: a, payload: o, setup: s = {
	width: 210,
	height: 297
}, gridColsClass: c = "uhuu-page-order-grid-cols" }) {
	let { t: l, localize: u } = go(), [d, f] = e.useState(""), p = e.useMemo(() => {
		if (!d.trim()) return r;
		let e = d.toLowerCase();
		return r.filter((t) => (u(t.label) || "").toLowerCase().includes(e) || t.id.toLowerCase().includes(e));
	}, [
		r,
		d,
		u
	]), m = (e) => {
		n(!1), i(e);
	}, h = L.resolveDimensions(s), g = h.width / h.height, b = {
		width: "200px",
		height: `${Math.round(200 / g)}px`
	}, x = (e, t) => {
		if (e.kind === "group") {
			let t = e, n = {
				payload: o,
				item: void 0,
				parent: void 0
			}, r = sv(t.pageComponentKeys, n), i = r[0];
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
	return /* @__PURE__ */ v(vy, {
		open: t,
		onOpenChange: n,
		children: /* @__PURE__ */ y(xy, {
			side: "bottom",
			className: "uhuu:h-[90vh] uhuu:w-full uhuu:max-w-none uhuu:flex uhuu:flex-col uhuu:gap-0 uhuu:bg-gray-50 uhuu:p-0",
			"data-uhuu-editor": !0,
			children: [/* @__PURE__ */ v(Sy, {
				className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4 uhuu:bg-(--uhuu-shell-surface)",
				children: /* @__PURE__ */ y("div", {
					className: "uhuu:flex uhuu:items-end uhuu:gap-3",
					children: [
						/* @__PURE__ */ v("div", {
							className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
							children: /* @__PURE__ */ v(pa, { className: "uhuu:w-4 uhuu:h-4" })
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:flex-1",
							children: [/* @__PURE__ */ v(wy, {
								className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
								children: l("addDialog.title")
							}), /* @__PURE__ */ v(Ty, {
								className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
								children: l("addDialog.description")
							})]
						}),
						/* @__PURE__ */ y("div", {
							className: "uhuu:mb-0.5 uhuu:mr-8 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2 uhuu:py-1 uhuu:text-gray-400 uhuu:focus-within:border-gray-400 uhuu:focus-within:ring-2 uhuu:focus-within:ring-gray-200",
							children: [
								/* @__PURE__ */ v(ma, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:shrink-0" }),
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
							children: /* @__PURE__ */ v(pa, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
						}, c = n ? sv(e.pageComponentKeys, s).length : 1, d = !!a;
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
												children: /* @__PURE__ */ v(pa, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-blue-600" })
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
												children: /* @__PURE__ */ v(pa, { className: "uhuu:w-8 uhuu:h-8 uhuu:text-gray-400" })
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
									children: /* @__PURE__ */ v(pa, { className: "uhuu:w-4 uhuu:h-4 uhuu:text-white" })
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
function Dy() {
	var e = [...arguments];
	return f(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var Oy = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function ky(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Ay(e) {
	return "nodeType" in e;
}
function jy(e) {
	return e ? ky(e) ? e : Ay(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function My(e) {
	let { Document: t } = jy(e);
	return e instanceof t;
}
function Ny(e) {
	return !ky(e) && e instanceof jy(e).HTMLElement;
}
function Py(e) {
	return e instanceof jy(e).SVGElement;
}
function Fy(e) {
	return e ? ky(e) ? e.document : Ay(e) ? My(e) ? e : Ny(e) || Py(e) ? e.ownerDocument : document : document : document;
}
var Iy = Oy ? d : l;
function Ly(e) {
	let t = m(e);
	return Iy(() => {
		t.current = e;
	}), s(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Ry() {
	let e = m(null);
	return [s((t, n) => {
		e.current = setInterval(t, n);
	}, []), s(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function zy(e, t) {
	t === void 0 && (t = [e]);
	let n = m(e);
	return Iy(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function By(e, t) {
	let n = m();
	return f(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function Vy(e) {
	let t = Ly(e), n = m(null);
	return [n, s((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function Hy(e) {
	let t = m();
	return l(() => {
		t.current = e;
	}, [e]), t.current;
}
var Uy = {};
function Wy(e, t) {
	return f(() => {
		if (t) return t;
		let n = Uy[e] == null ? 0 : Uy[e] + 1;
		return Uy[e] = n, e + "-" + n;
	}, [e, t]);
}
function Gy(e) {
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
var Ky = /*#__PURE__*/ Gy(1), qy = /*#__PURE__*/ Gy(-1);
function Jy(e) {
	return "clientX" in e && "clientY" in e;
}
function Yy(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = jy(e.target);
	return t && e instanceof t;
}
function Xy(e) {
	if (!e) return !1;
	let { TouchEvent: t } = jy(e.target);
	return t && e instanceof t;
}
function Zy(e) {
	if (Xy(e)) {
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
	return Jy(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var Qy = /*#__PURE__*/ Object.freeze({
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
		if (e) return [Qy.Translate.toString(e), Qy.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), $y = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function eb(e) {
	return e.matches($y) ? e : e.querySelector($y);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.3.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var tb = { display: "none" };
function nb(e) {
	let { id: n, value: r } = e;
	return t.createElement("div", {
		id: n,
		style: tb
	}, r);
}
function rb(e) {
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
function ib() {
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
var ab = /*#__PURE__*/ r(null);
function ob(e) {
	let t = c(ab);
	l(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function sb() {
	let [e] = h(() => /* @__PURE__ */ new Set()), t = s((t) => (e.add(t), () => e.delete(t)), [e]);
	return [s((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var cb = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, lb = {
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
function ub(e) {
	let { announcements: n = lb, container: r, hiddenTextDescribedById: i, screenReaderInstructions: a = cb } = e, { announce: o, announcement: s } = ib(), c = Wy("DndLiveRegion"), [u, d] = h(!1);
	if (l(() => {
		d(!0);
	}, []), ob(f(() => ({
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
	let p = t.createElement(t.Fragment, null, t.createElement(nb, {
		id: i,
		value: a.draggable
	}), t.createElement(rb, {
		id: c,
		announcement: s
	}));
	return r ? x(p, r) : p;
}
var db;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(db ||= {});
function fb() {}
function pb(e, t) {
	return f(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function mb() {
	var e = [...arguments];
	return f(() => [...e].filter((e) => e != null), [...e]);
}
var hb = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function gb(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function _b(e, t) {
	let n = Zy(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function vb(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function yb(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function bb(e) {
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
function xb(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function Sb(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var Cb = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = Sb(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = gb(Sb(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(vb);
}, wb = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = bb(t), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = bb(r), o = i.reduce((e, t, r) => e + gb(n[r], t), 0), s = Number((o / 4).toFixed(4));
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: s
				}
			});
		}
	}
	return a.sort(vb);
};
function Tb(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var Eb = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = Tb(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(yb);
};
function Db(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function Ob(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : hb;
}
function kb(e) {
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
var Ab = /*#__PURE__*/ kb(1);
function jb(e) {
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
function Mb(e, t, n) {
	let r = jb(t);
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
var Nb = { ignoreTransform: !1 };
function Pb(e, t) {
	t === void 0 && (t = Nb);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = jy(e).getComputedStyle(e);
		t && (n = Mb(n, t, r));
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
function Fb(e) {
	return Pb(e, { ignoreTransform: !0 });
}
function Ib(e) {
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
function Lb(e, t) {
	return t === void 0 && (t = jy(e).getComputedStyle(e)), t.position === "fixed";
}
function Rb(e, t) {
	t === void 0 && (t = jy(e).getComputedStyle(e));
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
function zb(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (My(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!Ny(i) || Py(i) || n.includes(i)) return n;
		let a = jy(e).getComputedStyle(i);
		return i !== e && Rb(i, a) && n.push(i), Lb(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function Bb(e) {
	let [t] = zb(e, 1);
	return t ?? null;
}
function Vb(e) {
	return !Oy || !e ? null : ky(e) ? e : Ay(e) ? My(e) || e === Fy(e).scrollingElement ? window : Ny(e) ? e : null : null;
}
function Hb(e) {
	return ky(e) ? e.scrollX : e.scrollLeft;
}
function Ub(e) {
	return ky(e) ? e.scrollY : e.scrollTop;
}
function Wb(e) {
	return {
		x: Hb(e),
		y: Ub(e)
	};
}
var Gb;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Gb ||= {});
function Kb(e) {
	return !Oy || !e ? !1 : e === document.scrollingElement;
}
function qb(e) {
	let t = {
		x: 0,
		y: 0
	}, n = Kb(e) ? {
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
var Jb = {
	x: .2,
	y: .2
};
function Yb(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = Jb);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = qb(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = Gb.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = Gb.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = Gb.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = Gb.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function Xb(e) {
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
function Zb(e) {
	return e.reduce((e, t) => Ky(e, Wb(t)), hb);
}
function Qb(e) {
	return e.reduce((e, t) => e + Hb(t), 0);
}
function $b(e) {
	return e.reduce((e, t) => e + Ub(t), 0);
}
function ex(e, t) {
	if (t === void 0 && (t = Pb), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	Bb(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var tx = [[
	"x",
	["left", "right"],
	Qb
], [
	"y",
	["top", "bottom"],
	$b
]], nx = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = zb(t), r = Zb(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of tx) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, rx = class {
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
function ix(e) {
	let { EventTarget: t } = jy(e);
	return e instanceof t ? e : Fy(e);
}
function ax(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var ox;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ox ||= {});
function sx(e) {
	e.preventDefault();
}
function cx(e) {
	e.stopPropagation();
}
var Q;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Q ||= {});
var lx = {
	start: [Q.Space, Q.Enter],
	cancel: [Q.Esc],
	end: [
		Q.Space,
		Q.Enter,
		Q.Tab
	]
}, ux = (e, t) => {
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
}, dx = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new rx(Fy(t)), this.windowListeners = new rx(jy(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(ox.Resize, this.handleCancel), this.windowListeners.add(ox.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ox.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && ex(n), t(hb);
	}
	handleKeyDown(e) {
		if (Yy(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = lx, coordinateGetter: a = ux, scrollBehavior: o = "smooth" } = r, { code: s } = e;
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
			} : hb;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = qy(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = qb(n), p = Xb(n), m = {
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
				this.handleMove(e, Ky(qy(u, this.referenceCoordinates), r));
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
dx.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = lx, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function fx(e) {
	return !!(e && "distance" in e);
}
function px(e) {
	return !!(e && "delay" in e);
}
var mx = class {
	constructor(e, t, n) {
		n === void 0 && (n = ix(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = Fy(i), this.documentListeners = new rx(this.document), this.listeners = new rx(n), this.windowListeners = new rx(jy(i)), this.initialCoordinates = Zy(r) ?? hb, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(ox.Resize, this.handleCancel), this.windowListeners.add(ox.DragStart, sx), this.windowListeners.add(ox.VisibilityChange, this.handleCancel), this.windowListeners.add(ox.ContextMenu, sx), this.documentListeners.add(ox.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (px(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (fx(t)) {
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
		e && (this.activated = !0, this.documentListeners.add(ox.Click, cx, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(ox.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = Zy(e) ?? hb, s = qy(n, o);
		if (!t && a) {
			if (fx(a)) {
				if (a.tolerance != null && ax(s, a.tolerance)) return this.handleCancel();
				if (ax(s, a.distance)) return this.handleStart();
			}
			if (px(a) && ax(s, a.tolerance)) return this.handleCancel();
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
}, hx = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, gx = class extends mx {
	constructor(e) {
		let { event: t } = e, n = Fy(t.target);
		super(e, hx, n);
	}
};
gx.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var _x = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, vx;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(vx ||= {});
var yx = class extends mx {
	constructor(e) {
		super(e, _x, Fy(e.event.target));
	}
};
yx.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== vx.RightClick && (r?.({ event: n }), !0);
	}
}];
var bx = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, xx = class extends mx {
	constructor(e) {
		super(e, bx);
	}
	static setup() {
		return window.addEventListener(bx.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(bx.move.name, e);
		};
		function e() {}
	}
};
xx.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Sx;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Sx ||= {});
var Cx;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Cx ||= {});
function wx(e) {
	let { acceleration: t, activator: n = Sx.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: c = Cx.TreeOrder, pointerCoordinates: u, scrollableAncestors: d, scrollableAncestorRects: p, delta: h, threshold: g } = e, _ = Ex({
		delta: h,
		disabled: !a
	}), [v, y] = Ry(), b = m({
		x: 0,
		y: 0
	}), x = m({
		x: 0,
		y: 0
	}), S = f(() => {
		switch (n) {
			case Sx.Pointer: return u ? {
				top: u.y,
				bottom: u.y,
				left: u.x,
				right: u.x
			} : null;
			case Sx.DraggableRect: return i;
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
	}, []), T = f(() => c === Cx.TreeOrder ? [...d].reverse() : d, [c, d]);
	l(() => {
		if (!a || !d.length || !S) y();
		else {
			for (let e of T) {
				if (r?.(e) === !1) continue;
				let n = d.indexOf(e), i = p[n];
				if (!i) continue;
				let { direction: a, speed: s } = Yb(e, i, S, t, g);
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
var Tx = {
	x: {
		[Gb.Backward]: !1,
		[Gb.Forward]: !1
	},
	y: {
		[Gb.Backward]: !1,
		[Gb.Forward]: !1
	}
};
function Ex(e) {
	let { delta: t, disabled: n } = e, r = Hy(t);
	return By((e) => {
		if (n || !r || !e) return Tx;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[Gb.Backward]: e.x[Gb.Backward] || i.x === -1,
				[Gb.Forward]: e.x[Gb.Forward] || i.x === 1
			},
			y: {
				[Gb.Backward]: e.y[Gb.Backward] || i.y === -1,
				[Gb.Forward]: e.y[Gb.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function Dx(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return By((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function Ox(e, t) {
	return f(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var kx;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(kx ||= {});
var Ax;
(function(e) {
	e.Optimized = "optimized";
})(Ax ||= {});
var jx = /*#__PURE__*/ new Map();
function Mx(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = h(null), { frequency: c, measure: u, strategy: d } = i, f = m(e), p = b(), g = zy(p), _ = s(function(e) {
		e === void 0 && (e = []), !g.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [g]), v = m(null), y = By((t) => {
		if (p && !n) return jx;
		if (!t || t === jx || f.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new nx(u(e), e) : null;
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
			case kx.Always: return !1;
			case kx.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function Nx(e, t) {
	return By((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Px(e, t) {
	return Nx(e, t);
}
function Fx(e) {
	let { callback: t, disabled: n } = e, r = Ly(t), i = f(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Ix(e) {
	let { callback: t, disabled: n } = e, r = Ly(t), i = f(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return l(() => () => i?.disconnect(), [i]), i;
}
function Lx(e) {
	return new nx(Pb(e), e);
}
function Rx(e, t, n) {
	t === void 0 && (t = Lx);
	let [r, i] = h(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = Fx({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = Ix({ callback: a });
	return Iy(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function zx(e) {
	return Ob(e, Nx(e));
}
var Bx = [];
function Vx(e) {
	let t = m(e), n = By((n) => e ? n && n !== Bx && e && t.current && e.parentNode === t.current.parentNode ? n : zb(e) : Bx, [e]);
	return l(() => {
		t.current = e;
	}, [e]), n;
}
function Hx(e) {
	let [t, n] = h(null), r = m(e), i = s((e) => {
		let t = Vb(e.target);
		t && n((e) => e ? (e.set(t, Wb(t)), new Map(e)) : null);
	}, []);
	return l(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = Vb(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Wb(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				Vb(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), f(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => Ky(e, t), hb) : Zb(e) : hb, [e, t]);
}
function Ux(e, t) {
	t === void 0 && (t = []);
	let n = m(null);
	return l(() => {
		n.current = null;
	}, t), l(() => {
		let t = e !== hb;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? qy(e, n.current) : hb;
}
function Wx(e) {
	l(() => {
		if (!Oy) return;
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
function Gx(e, t) {
	return f(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function Kx(e) {
	return f(() => e ? Ib(e) : null, [e]);
}
var qx = [];
function Jx(e, t) {
	t === void 0 && (t = Pb);
	let [n] = e, r = Kx(n ? jy(n) : null), [i, a] = h(qx);
	function o() {
		a(() => e.length ? e.map((e) => Kb(e) ? r : new nx(t(e), e)) : qx);
	}
	let s = Ix({ callback: o });
	return Iy(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function Yx(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return Ny(t) ? t : e;
}
function Xx(e) {
	let { measure: t } = e, [n, r] = h(null), i = Ix({ callback: s((e) => {
		for (let { target: n } of e) if (Ny(n)) {
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
	}, [t]) }), [a, o] = Vy(s((e) => {
		let n = Yx(e);
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
var Zx = [{
	sensor: gx,
	options: {}
}, {
	sensor: dx,
	options: {}
}], Qx = { current: {} }, $x = {
	draggable: { measure: Fb },
	droppable: {
		measure: Fb,
		strategy: kx.WhileDragging,
		frequency: Ax.Optimized
	},
	dragOverlay: { measure: Pb }
}, eS = class extends Map {
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
}, tS = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new eS(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: fb
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: $x,
	measureDroppableContainers: fb,
	windowRect: null,
	measuringScheduled: !1
}, nS = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: fb,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: fb
}, rS = /*#__PURE__*/ r(nS), iS = /*#__PURE__*/ r(tS);
function aS() {
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
		droppable: { containers: new eS() }
	};
}
function oS(e, t) {
	switch (t.type) {
		case db.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case db.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case db.DragEnd:
		case db.DragCancel: return {
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
		case db.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new eS(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case db.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new eS(e.droppable.containers);
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
		case db.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new eS(e.droppable.containers);
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
function sS(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = c(rS), a = Hy(r), o = Hy(n?.id);
	return l(() => {
		if (!t && !r && a && o != null) {
			if (!Yy(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = eb(e);
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
function cS(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function lS(e) {
	return f(() => ({
		draggable: {
			...$x.draggable,
			...e?.draggable
		},
		droppable: {
			...$x.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...$x.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function uS(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = m(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	Iy(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = Ob(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = Bb(e);
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
var dS = /*#__PURE__*/ r({
	...hb,
	scaleX: 1,
	scaleY: 1
}), fS;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(fS ||= {});
var pS = /*#__PURE__*/ o(function(e) {
	let { id: n, accessibility: r, autoScroll: i = !0, children: a, sensors: o = Zx, collisionDetection: c = Eb, measuring: u, modifiers: d, ...g } = e, [_, v] = p(oS, void 0, aS), [y, b] = sb(), [x, S] = h(fS.Uninitialized), w = x === fS.Initialized, { draggable: { active: T, nodes: E, translate: D }, droppable: { containers: O } } = _, k = T == null ? null : E.get(T), A = m({
		initial: null,
		translated: null
	}), j = f(() => T == null ? null : {
		id: T,
		data: k?.data ?? Qx,
		rect: A
	}, [T, k]), M = m(null), [N, P] = h(null), [F, I] = h(null), L = zy(g, Object.values(g)), R = Wy("DndDescribedBy", n), ee = f(() => O.getEnabled(), [O]), te = lS(u), { droppableRects: z, measureDroppableContainers: B, measuringScheduled: ne } = Mx(ee, {
		dragging: w,
		dependencies: [D.x, D.y],
		config: te.droppable
	}), re = Dx(E, T), ie = f(() => F ? Zy(F) : null, [F]), ae = Pe(), oe = Px(re, te.draggable.measure);
	uS({
		activeNode: T == null ? null : E.get(T),
		config: ae.layoutShiftCompensation,
		initialRect: oe,
		measure: te.draggable.measure
	});
	let V = Rx(re, te.draggable.measure, oe), H = Rx(re ? re.parentElement : null), se = m({
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
	}), ce = O.getNodeFor(se.current.over?.id), le = Xx({ measure: te.dragOverlay.measure }), ue = le.nodeRef.current ?? re, de = w ? le.rect ?? V : null, fe = !!(le.nodeRef.current && le.rect), pe = zx(fe ? null : V), me = Kx(ue ? jy(ue) : null), he = Vx(w ? ce ?? re : null), ge = Jx(he), _e = cS(d, {
		transform: {
			x: D.x - pe.x,
			y: D.y - pe.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: F,
		active: j,
		activeNodeRect: V,
		containerNodeRect: H,
		draggingNodeRect: de,
		over: se.current.over,
		overlayNodeRect: le.rect,
		scrollableAncestors: he,
		scrollableAncestorRects: ge,
		windowRect: me
	}), ve = ie ? Ky(ie, D) : null, ye = Hx(he), be = Ux(ye), xe = Ux(ye, [V]), Se = Ky(_e, be), Ce = de ? Ab(de, _e) : null, we = j && Ce ? c({
		active: j,
		collisionRect: Ce,
		droppableRects: z,
		droppableContainers: ee,
		pointerCoordinates: ve
	}) : null, Te = xb(we, "id"), [Ee, De] = h(null), Oe = Db(fe ? _e : Ky(_e, xe), Ee?.rect ?? null, V), ke = m(null), Ae = s((e, t) => {
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
					r?.(i), S(fS.Initializing), v({
						type: db.DragStart,
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
					type: db.DragMove,
					coordinates: e
				});
			},
			onEnd: s(db.DragEnd),
			onCancel: s(db.DragCancel)
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
					}, e === db.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = db.DragCancel);
				}
				M.current = null, C(() => {
					v({ type: e }), S(fS.Uninitialized), De(null), P(null), I(null), ke.current = null;
					let t = e === db.DragEnd ? "onDragEnd" : "onDragCancel";
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
	}, [E]), je = Ox(o, s((e, t) => (n, r) => {
		let i = n.nativeEvent, a = E.get(r);
		if (M.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, M.current = r, Ae(n, t));
	}, [E, Ae]));
	Wx(o), Iy(() => {
		V && x === fS.Initializing && S(fS.Initialized);
	}, [V, x]), l(() => {
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
	}, [Te]), Iy(() => {
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
	]), wx({
		...ae,
		delta: D,
		draggingRect: Ce,
		pointerCoordinates: ve,
		scrollableAncestors: he,
		scrollableAncestorRects: ge
	});
	let Me = f(() => ({
		active: j,
		activeNode: re,
		activeNodeRect: V,
		activatorEvent: F,
		collisions: we,
		containerNodeRect: H,
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
		V,
		F,
		we,
		H,
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
	]), Ne = f(() => ({
		activatorEvent: F,
		activators: je,
		active: j,
		activeNodeRect: V,
		ariaDescribedById: { draggable: R },
		dispatch: v,
		draggableNodes: E,
		over: Ee,
		measureDroppableContainers: B
	}), [
		F,
		je,
		j,
		V,
		v,
		R,
		E,
		Ee,
		B
	]);
	return t.createElement(ab.Provider, { value: b }, t.createElement(rS.Provider, { value: Ne }, t.createElement(iS.Provider, { value: Me }, t.createElement(dS.Provider, { value: Oe }, a)), t.createElement(sS, { disabled: r?.restoreFocus === !1 })), t.createElement(ub, {
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
}), mS = /*#__PURE__*/ r(null), hS = "button", gS = "Draggable";
function _S(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = Wy(gS), { activators: o, activatorEvent: s, active: l, activeNodeRect: u, ariaDescribedById: d, draggableNodes: p, over: m } = c(rS), { role: h = hS, roleDescription: g = "draggable", tabIndex: _ = 0 } = i ?? {}, v = l?.id === t, y = c(v ? dS : mS), [b, x] = Vy(), [S, C] = Vy(), w = Gx(o, t), T = zy(n);
	return Iy(() => (p.set(t, {
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
			"aria-pressed": v && h === hS ? !0 : void 0,
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
function vS() {
	return c(iS);
}
var yS = "Droppable", bS = { timeout: 25 };
function xS(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = Wy(yS), { active: o, dispatch: u, over: d, measureDroppableContainers: f } = c(rS), p = m({ disabled: n }), h = m(!1), g = m(null), _ = m(null), { disabled: v, updateMeasurementsFor: y, timeout: b } = {
		...bS,
		...i
	}, x = zy(y ?? r), S = Ix({
		callback: s(() => {
			h.current ? (_.current != null && clearTimeout(_.current), _.current = setTimeout(() => {
				f(Array.isArray(x.current) ? x.current : [x.current]), _.current = null;
			}, b)) : h.current = !0;
		}, [b]),
		disabled: v || !o
	}), [C, w] = Vy(s((e, t) => {
		S && (t && (S.unobserve(t), h.current = !1), e && S.observe(e));
	}, [S])), T = zy(t);
	return l(() => {
		S && C.current && (S.disconnect(), h.current = !1, S.observe(C.current));
	}, [C, S]), l(() => (u({
		type: db.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: C,
			rect: g,
			data: T
		}
	}), () => u({
		type: db.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), l(() => {
		n !== p.current.disabled && (u({
			type: db.SetDroppableDisabled,
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
function SS(e) {
	let { animation: r, children: i } = e, [a, o] = h(null), [s, c] = h(null), l = Hy(i);
	return !i && !a && l && o(l), Iy(() => {
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
var CS = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function wS(e) {
	let { children: n } = e;
	return t.createElement(rS.Provider, { value: nS }, t.createElement(dS.Provider, { value: CS }, n));
}
var TS = {
	position: "fixed",
	touchAction: "none"
}, ES = (e) => Yy(e) ? "transform 250ms ease" : void 0, DS = /*#__PURE__*/ a((e, n) => {
	let { as: r, activatorEvent: i, adjustScale: a, children: o, className: s, rect: c, style: l, transform: u, transition: d = ES } = e;
	if (!c) return null;
	let f = a ? u : {
		...u,
		scaleX: 1,
		scaleY: 1
	}, p = {
		...TS,
		width: c.width,
		height: c.height,
		top: c.top,
		left: c.left,
		transform: Qy.Transform.toString(f),
		transformOrigin: a && i ? _b(i, c) : void 0,
		transition: typeof d == "function" ? d(i) : d,
		...l
	};
	return t.createElement(r, {
		className: s,
		style: p,
		ref: n
	}, o);
}), OS = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: Qy.Transform.toString(t) }, { transform: Qy.Transform.toString(n) }];
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
function kS(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return Ly((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = Yx(a);
		if (!c) return;
		let { transform: l } = jy(a).getComputedStyle(a), u = jb(l);
		if (!u) return;
		let d = typeof t == "function" ? t : AS(t);
		return ex(s, i.draggable.measure), d({
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
function AS(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...OS,
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
var jS = 0;
function MS(e) {
	return f(() => {
		if (e != null) return jS++, jS;
	}, [e]);
}
var NS = /*#__PURE__*/ t.memo((e) => {
	let { adjustScale: n = !1, children: r, dropAnimation: i, style: a, transition: o, modifiers: s, wrapperElement: l = "div", className: u, zIndex: d = 999 } = e, { activatorEvent: f, active: p, activeNodeRect: m, containerNodeRect: h, draggableNodes: g, droppableContainers: _, dragOverlay: v, over: y, measuringConfiguration: b, scrollableAncestors: x, scrollableAncestorRects: S, windowRect: C } = vS(), w = c(dS), T = MS(p?.id), E = cS(s, {
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
	}), D = Nx(m), O = kS({
		config: i,
		draggableNodes: g,
		droppableContainers: _,
		measuringConfiguration: b
	}), k = D ? v.setRef : void 0;
	return t.createElement(wS, null, t.createElement(SS, { animation: O }, p && T ? t.createElement(DS, {
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
function PS(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function FS(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function IS(e) {
	return e !== null && e >= 0;
}
function LS(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function RS(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var zS = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = PS(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, BS = "Sortable", VS = /*#__PURE__*/ t.createContext({
	activeIndex: -1,
	containerId: BS,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: zS,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function HS(e) {
	let { children: n, id: r, items: i, strategy: a = zS, disabled: o = !1 } = e, { active: s, dragOverlay: c, droppableRects: u, over: d, measureDroppableContainers: p } = vS(), h = Wy(BS, r), g = c.rect !== null, _ = f(() => i.map((e) => typeof e == "object" && "id" in e ? e.id : e), [i]), v = s != null, y = s ? _.indexOf(s.id) : -1, b = d ? _.indexOf(d.id) : -1, x = m(_), S = !LS(_, x.current), C = b !== -1 && y === -1 || S, w = RS(o);
	Iy(() => {
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
		sortedRects: FS(_, u),
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
	return t.createElement(VS.Provider, { value: T }, n);
}
var US = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return PS(n, r, i).indexOf(t);
}, WS = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, GS = {
	duration: 200,
	easing: "ease"
}, KS = "transform", qS = /*#__PURE__*/ Qy.Transition.toString({
	property: KS,
	duration: 0,
	easing: "linear"
}), JS = { roleDescription: "sortable" };
function YS(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = h(null), s = m(n);
	return Iy(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = Pb(r.current, { ignoreTransform: !0 }), n = {
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
function XS(e) {
	let { animateLayoutChanges: t = WS, attributes: n, disabled: r, data: i, getNewIndex: a = US, id: o, strategy: s, resizeObserverConfig: u, transition: d = GS } = e, { items: p, containerId: h, activeIndex: g, disabled: _, disableTransforms: v, sortedRects: y, overIndex: b, useDragOverlay: x, strategy: S } = c(VS), C = ZS(r, _), w = p.indexOf(o), T = f(() => ({
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
	]), E = f(() => p.slice(p.indexOf(o)), [p, o]), { rect: D, node: O, isOver: k, setNodeRef: A } = xS({
		id: o,
		data: T,
		disabled: C.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: E,
			...u
		}
	}), { active: j, activatorEvent: M, activeNodeRect: N, attributes: P, setNodeRef: F, listeners: I, isDragging: L, over: R, setActivatorNodeRef: ee, transform: te } = _S({
		id: o,
		data: T,
		attributes: {
			...JS,
			...n
		},
		disabled: C.draggable
	}), z = Dy(A, F), B = !!j, ne = B && !v && IS(g) && IS(b), re = !x && L, ie = ne ? (re && ne ? te : null) ?? (s ?? S)({
		rects: y,
		activeNodeRect: N,
		activeIndex: g,
		overIndex: b,
		index: w
	}) : null, ae = IS(g) && IS(b) ? a({
		id: o,
		items: p,
		activeIndex: g,
		overIndex: b
	}) : w, oe = j?.id, V = m({
		activeId: oe,
		items: p,
		newIndex: ae,
		containerId: h
	}), H = p !== V.current.items, se = t({
		active: j,
		containerId: h,
		isDragging: L,
		isSorting: B,
		id: o,
		index: w,
		items: p,
		newIndex: V.current.newIndex,
		previousItems: V.current.items,
		previousContainerId: V.current.containerId,
		transition: d,
		wasDragging: V.current.activeId != null
	}), ce = YS({
		disabled: !se,
		index: w,
		node: O,
		rect: D
	});
	return l(() => {
		B && V.current.newIndex !== ae && (V.current.newIndex = ae), h !== V.current.containerId && (V.current.containerId = h), p !== V.current.items && (V.current.items = p);
	}, [
		B,
		ae,
		h,
		p
	]), l(() => {
		if (oe === V.current.activeId) return;
		if (oe != null && V.current.activeId == null) {
			V.current.activeId = oe;
			return;
		}
		let e = setTimeout(() => {
			V.current.activeId = oe;
		}, 50);
		return () => clearTimeout(e);
	}, [oe]), {
		active: j,
		activeIndex: g,
		attributes: P,
		data: T,
		rect: D,
		index: w,
		newIndex: ae,
		items: p,
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
		if (ce || H && V.current.newIndex === w) return qS;
		if (!(re && !Yy(M) || !d) && (B || se)) return Qy.Transition.toString({
			...d,
			property: KS
		});
	}
}
function ZS(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
function QS(e) {
	if (!e) return !1;
	let t = e.data.current;
	return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
var $S = [
	Q.Down,
	Q.Right,
	Q.Up,
	Q.Left
], eC = (e, t) => {
	let { context: { active: n, collisionRect: r, droppableRects: i, droppableContainers: a, over: o, scrollableAncestors: s } } = t;
	if ($S.includes(e.code)) {
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
		let c = wb({
			active: n,
			collisionRect: r,
			droppableRects: i,
			droppableContainers: t,
			pointerCoordinates: null
		}), l = xb(c, "id");
		if (l === o?.id && c.length > 1 && (l = c[1].id), l != null) {
			let e = a.get(n.id), t = a.get(l), o = t ? i.get(t.id) : null, c = t?.node.current;
			if (c && o && e && t) {
				let n = zb(c).some((e, t) => s[t] !== e), i = tC(e, t), a = nC(e, t), l = n || !i ? {
					x: 0,
					y: 0
				} : {
					x: a ? r.width - o.width : 0,
					y: a ? r.height - o.height : 0
				}, u = {
					x: o.left,
					y: o.top
				};
				return l.x && l.y ? u : qy(u, l);
			}
		}
	}
};
function tC(e, t) {
	return !QS(e) || !QS(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function nC(e, t) {
	return !QS(e) || !QS(t) || !tC(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
//#endregion
//#region src/uhuu/utility/drag-drop-grid.tsx
function rC({ item: e, index: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, disabled: a = !1 }) {
	let { attributes: o, listeners: s, setNodeRef: c, transform: l, transition: u, isDragging: d } = XS({
		id: i(e),
		disabled: a
	}), f = {
		transform: Qy.Transform.toString(l),
		transition: u
	};
	return /* @__PURE__ */ y("div", {
		ref: c,
		style: f,
		className: `uhuu:relative uhuu:group/drag-item ${d ? "uhuu:opacity-50" : ""} ${a ? "uhuu:opacity-60" : ""}`,
		children: [n(e, t, d), !a && (r ? /* @__PURE__ */ v("div", {
			...o,
			...s,
			children: r(e, t)
		}) : /* @__PURE__ */ v("div", {
			...o,
			...s,
			className: "uhuu:absolute uhuu:inset-0 uhuu:cursor-grab uhuu:active:cursor-grabbing uhuu:outline-none uhuu:touch-none"
		}))]
	});
}
function iC({ item: e, index: t, renderItem: n }) {
	return /* @__PURE__ */ v("div", {
		className: "uhuu:rotate-2",
		children: n(e, t, !0)
	});
}
function aC({ items: e, onChange: t, renderItem: n, renderDragIndicator: r, keyExtractor: i, gridColsClass: a = "uhuu-page-drag-drop-grid-cols", className: o = "", renderToolbar: s, renderEmptyState: c, showDebugInfo: u = !1, renderDragOverlay: d, isItemDisabled: f, canDropAt: p }) {
	let [m, g] = h(e);
	l(() => {
		g(e);
	}, [e]);
	let [_, b] = h(null), x = mb(pb(gx), pb(dx, { coordinateGetter: eC })), S = (e) => {
		let t = m.find((t) => i(t) === e.active.id);
		t && f && f(t) || b(e.active.id);
	}, C = (e) => {
		let { active: n, over: r } = e;
		if (!r || n.id === r.id) {
			b(null);
			return;
		}
		let a = m.find((e) => i(e) === n.id), o = m.findIndex((e) => i(e) === n.id), s = m.findIndex((e) => i(e) === r.id);
		if (a && f && f(a)) b(null);
		else if (p && !p(a, s, m)) b(null);
		else {
			if (o !== -1 && s !== -1) {
				let e = PS(m, o, s);
				g(e), t(e);
			}
			b(null);
		}
	}, w = m.find((e) => i(e) === _), T = w ? m.findIndex((e) => i(e) === _) : -1;
	return /* @__PURE__ */ y("div", {
		className: `uhuu:w-full ${o}`,
		children: [
			s && /* @__PURE__ */ v("div", {
				className: "uhuu:mb-6",
				children: s()
			}),
			m.length === 0 && c ? c() : /* @__PURE__ */ v("div", {
				className: "uhuu:mb-6",
				children: /* @__PURE__ */ y(pS, {
					sensors: x,
					collisionDetection: Cb,
					onDragStart: S,
					onDragEnd: C,
					children: [/* @__PURE__ */ v(HS, {
						items: m.map(i),
						strategy: zS,
						children: /* @__PURE__ */ v("div", {
							className: a,
							children: m.map((e, t) => /* @__PURE__ */ v(rC, {
								item: e,
								index: t,
								renderItem: n,
								renderDragIndicator: r,
								keyExtractor: i,
								disabled: f ? f(e) : !1
							}, i(e)))
						})
					}), /* @__PURE__ */ v(NS, { children: w ? d ? /* @__PURE__ */ v("div", {
						className: "uhuu:rotate-2 uhuu:shadow-lg",
						children: d(w, T)
					}) : /* @__PURE__ */ v(iC, {
						item: w,
						index: T,
						renderItem: n
					}) : null })]
				})
			}),
			u && /* @__PURE__ */ y("div", {
				"data-uhuu-editor": !0,
				className: "uhuu:fixed uhuu:top-4 uhuu:left-4 uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:shadow-lg uhuu:p-3 uhuu:text-sm uhuu:max-w-xs",
				children: [
					/* @__PURE__ */ v("div", {
						className: "uhuu:font-medium uhuu:mb-1",
						children: "Debug Info"
					}),
					/* @__PURE__ */ y("div", {
						className: "uhuu:text-gray-600 uhuu:text-xs",
						children: [
							"Items: ",
							m.length,
							" | Active: ",
							_ || "none"
						]
					}),
					/* @__PURE__ */ y("div", {
						className: "uhuu:text-xs uhuu:text-gray-500 uhuu:mt-1 uhuu:break-all",
						children: ["Order: ", m.map((e, t) => `${t + 1}:${i(e).slice(0, 3)}`).join(" → ")]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/uhuu/ui/badge.tsx
var oC = Zo("uhuu:inline-flex uhuu:items-center uhuu:rounded-md uhuu:border uhuu:px-2.5 uhuu:py-0.5 uhuu:text-xs uhuu:font-medium uhuu:transition-colors uhuu:focus:outline-none uhuu:focus:ring-2 uhuu:focus:ring-offset-2", {
	variants: { variant: {
		default: "uhuu:border-transparent uhuu:bg-gray-900 uhuu:text-(--uhuu-shell-on-inverse)",
		secondary: "uhuu:border-transparent uhuu:bg-gray-100 uhuu:text-gray-900",
		outline: "uhuu:border-gray-300 uhuu:text-gray-900 uhuu:bg-(--uhuu-shell-surface)"
	} },
	defaultVariants: { variant: "default" }
});
function sC({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ v("div", {
		className: K(oC({ variant: t }), e),
		...n
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-order-dialog.tsx
function cC({ page: e, index: t, isDragging: n }) {
	let { t: r, localize: i } = go(), a = e.strictPosition, o = a === "start" || a === "end";
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
			children: /* @__PURE__ */ v(sC, {
				variant: "secondary",
				className: `uhuu:text-xs uhuu:min-w-[24px] uhuu:h-6 uhuu:font-medium uhuu:bg-(--uhuu-shell-surface)/95 uhuu:backdrop-blur-sm uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shadow-sm uhuu:border uhuu:border-gray-200 ${o ? "uhuu:opacity-75" : ""}`,
				children: o ? /* @__PURE__ */ v(la, { className: "uhuu:size-3 uhuu:text-gray-500" }) : /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("span", {
					className: "uhuu:group-hover/drag-item:hidden",
					children: t + 1
				}), /* @__PURE__ */ v(ca, { className: "uhuu:size-4 uhuu:text-gray-400 uhuu:hidden uhuu:group-hover/drag-item:block" })] })
			})
		})]
	});
}
function lC({ open: t, onOpenChange: n, pages: r, onReorder: i, onRemove: a, renderThumbnail: o, pageComponents: s, payload: c, setup: l, title: u, description: d, gridColsClass: f = "uhuu-page-order-grid-cols" }) {
	let p = go(), { t: m, localize: h } = p, g = h(u) ?? m("reorderDialog.title"), _ = h(d) ?? m("reorderDialog.description"), [b, x] = e.useState(r), [S, C] = e.useState(!1), w = e.useCallback((e) => e.id, []);
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
	}, O = e.useMemo(() => (!o || typeof o != "function") && s ? vv({
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
		}, c = o && typeof o == "function" ? o(e, t, n) : O ? O(e, t, n) : /* @__PURE__ */ v(cC, {
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
				children: [/* @__PURE__ */ v(ca, { className: "uhuu:size-3.5 uhuu:opacity-60 uhuu:group-hover/remove-btn:hidden" }), /* @__PURE__ */ v(pa, { className: "uhuu:size-3.5 uhuu:rotate-45 uhuu:hidden uhuu:group-hover/remove-btn:block" })]
			})]
		});
	}, A = () => /* @__PURE__ */ y("div", {
		className: "uhuu:text-center uhuu:py-20",
		children: [
			/* @__PURE__ */ v("div", {
				className: "uhuu:w-12 uhuu:h-12 uhuu:bg-gray-50 uhuu:rounded-lg uhuu:flex uhuu:items-center uhuu:justify-center uhuu:mx-auto uhuu:mb-3",
				children: /* @__PURE__ */ v($i, { className: "uhuu:w-6 uhuu:h-6 uhuu:text-gray-400" })
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
	return /* @__PURE__ */ v(vy, {
		open: t,
		onOpenChange: (e) => {
			e || D();
		},
		children: /* @__PURE__ */ y(xy, {
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
				/* @__PURE__ */ v(Sy, {
					className: "uhuu:border-b uhuu:border-gray-200 uhuu:p-4",
					children: /* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-end uhuu:gap-3",
						children: [
							/* @__PURE__ */ v("div", {
								className: "uhuu:w-8 uhuu:h-8 uhuu:bg-gray-100 uhuu:rounded-full uhuu:flex uhuu:items-center uhuu:justify-center uhuu:shrink-0 uhuu:mb-0.5",
								children: /* @__PURE__ */ v($i, { className: "uhuu:w-4 uhuu:h-4" })
							}),
							/* @__PURE__ */ y("div", {
								className: "uhuu:flex-1",
								children: [/* @__PURE__ */ v(wy, {
									className: "uhuu:text-base uhuu:font-medium uhuu:text-gray-900 uhuu:leading-tight",
									children: g
								}), /* @__PURE__ */ v(Ty, {
									className: "uhuu:text-xs uhuu:text-gray-400 uhuu:mt-0.5",
									children: _
								})]
							}),
							/* @__PURE__ */ v(sC, {
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
						children: /* @__PURE__ */ v(aC, {
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
				/* @__PURE__ */ y(Cy, {
					className: "uhuu:border-t uhuu:border-gray-200 uhuu:px-4 uhuu:py-3 uhuu:gap-3",
					children: [/* @__PURE__ */ v($o, {
						variant: "outline",
						onClick: D,
						children: m("reorderDialog.cancel")
					}), /* @__PURE__ */ v($o, {
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
var uC = typeof window > "u" ? e.useEffect : e.useLayoutEffect, dC = /* @__PURE__ */ new Set();
function fC(e, t) {
	return Array.from(e.querySelectorAll(t)).filter((e) => !e.closest(`[${H}]`));
}
function pC({ pageKey: t, version: n, readiness: r, onMeasurement: i, onPrune: a, children: o }) {
	let [s] = e.useState(() => ({ mounted: !0 })), c = e.useRef(null), l = e.useRef(a);
	uC(() => {
		l.current = a;
	}, [a]);
	let [u, d] = e.useState(0), f = e.useCallback(() => {
		d((e) => e + 1);
		let e = !1;
		return () => {
			e || (e = !0, d((e) => e - 1));
		};
	}, []);
	uC(() => (s.mounted = !0, () => {
		s.mounted = !1;
	}), [s]);
	let p = e.useCallback(() => {
		let e = c.current;
		if (!s.mounted || !e) return;
		let n = new Set(fC(e, "[data-uhuu-flow=\"true\"]").map((e) => e.dataset.uhuuFlowId ?? ""));
		l.current?.(t, n);
	}, [s, t]);
	uC(() => {
		p();
	}, [p]);
	let m = e.useRef(void 0), h = e.useCallback(() => {
		clearTimeout(m.current), m.current = void 0;
	}, []), g = e.useCallback(() => {
		h();
		let e = c.current;
		s.mounted && e && (fC(e, "[data-uhuu-flow-area]").length ? e.removeAttribute("data-uhuu-flow-error") : (e.setAttribute("data-uhuu-flow-error", "missing-flow-region"), !dC.has(t) && (m.current = setTimeout(() => {
			e.isConnected && !fC(e, "[data-uhuu-flow-area]").length && (dC.add(t), console.warn(`[uhuu-components] Page "${t}" is marked hasFlow but renders no Static.FlowArea, so data-uhuu-pagination stays "measuring". Render a FlowArea with one Static.Flow in every branch (an empty Flow is one page), or remove hasFlow.`));
		}, de))));
	}, [
		s,
		t,
		h
	]);
	uC(() => (g(), h), [g, h]);
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
function mC({ pageId: t, templateId: n, componentKey: r, component: i, payload: a, pagePayload: o, integration: s, page: c, parentGroup: l, setup: u, reference: d, overlay: f, className: p, pageNo: m = 0, totalPages: h, measurementPageNo: g, measurementTotalPages: b, dataBinding: x, flowPageIndex: S = 0, flowChunksByFlowId: C, measureFlow: w = !1, flowMeasurementKey: T, flowMeasurementVersion: E, flowReadiness: D, onFlowMeasurement: O, onFlowPrune: k, renderVisible: A = !0, renderMode: j = "sheet", spread: M }) {
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
	return j === "content" ? /* @__PURE__ */ y(_, { children: [d, /* @__PURE__ */ v(se.Provider, {
		value: L,
		children: I(m, h)
	})] }) : /* @__PURE__ */ y(_, { children: [w && O && T && /* @__PURE__ */ v(pC, {
		pageKey: T,
		version: E,
		readiness: D,
		onMeasurement: O,
		onPrune: k,
		children: (e) => {
			let t = e.copy === "continuation", n = g ?? m, r = b ?? h;
			return /* @__PURE__ */ v(oe, {
				setup: u,
				children: /* @__PURE__ */ v(V, {
					className: F,
					pageNo: m,
					"data-page-key": P,
					children: /* @__PURE__ */ v(se.Provider, {
						value: e,
						children: t ? I(n + 1, r === void 0 ? void 0 : r + 1, R?.continuation) : I(n, r, R?.first)
					})
				})
			});
		}
	}), A && /* @__PURE__ */ v(oe, {
		setup: u,
		children: /* @__PURE__ */ y(V, {
			className: F,
			pageNo: m,
			overlay: ({ pageNo: e }) => N(e),
			"data-page-key": P,
			children: [d, /* @__PURE__ */ v(se.Provider, {
				value: L,
				children: I(m, h)
			})]
		})
	})] });
}
//#endregion
//#region src/uhuu/ui/select.tsx
var hC = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v("select", {
	className: K("uhuu:flex uhuu:h-8 uhuu:w-full uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2.5 uhuu:py-1 uhuu:text-sm uhuu:text-gray-900 uhuu:outline-none uhuu:transition-colors uhuu:focus:border-gray-400 uhuu:focus:ring-2 uhuu:focus:ring-gray-200 uhuu:focus:ring-offset-0 uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50", e),
	ref: r,
	...n,
	children: t
}));
hC.displayName = "Select";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.3.8_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_9e907e973c095d314448b5bf7a7b557b/node_modules/@radix-ui/react-switch/dist/index.mjs
var gC = Object.defineProperty, _C = (e, t) => gC(e, "name", {
	value: t,
	configurable: !0
}), vC = "Switch", [yC, bC] = /* @__PURE__ */ ms(vC), [xC, SC] = yC(vC);
function CC(t) {
	let { __scopeSwitch: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = Ts({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: vC
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
	return /* @__PURE__ */ v(xC, {
		scope: n,
		...C,
		children: jC(f) ? f(C) : i
	});
}
_C(CC, "SwitchProvider");
var wC = "SwitchTrigger", TC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _C(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, form: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, onUserInteraction: m, isFormControl: h, bubbleInput: g } = SC(wC, t), _ = J(i, d), y = e.useRef(l);
	return e.useEffect(() => {
		let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ _C(() => f(y.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		a,
		o,
		f
	]), /* @__PURE__ */ v(Js.button, {
		type: "button",
		role: "switch",
		"aria-checked": l,
		"aria-required": u,
		"data-state": MC(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...r,
		ref: _,
		onClick: q(n, (e) => {
			m(), f((e) => !e), g && h && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
}, "SwitchTrigger")), EC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _C(function(e, t) {
	let { __scopeSwitch: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ v(CC, {
		__scopeSwitch: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(TC, {
			...d,
			ref: t,
			__scopeSwitch: n
		}), e && /* @__PURE__ */ v(AC, { __scopeSwitch: n })] })
	});
}, "Switch")), DC = "SwitchThumb", OC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _C(function(e, t) {
	let { __scopeSwitch: n, ...r } = e, i = SC(DC, n);
	return /* @__PURE__ */ v(Js.span, {
		"data-state": MC(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "SwitchThumb")), kC = "SwitchBubbleInput", AC = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ _C(function({ __scopeSwitch: t, onClick: n, ...r }, i) {
	let { control: a, hasConsumerStoppedPropagationRef: o, userInteractionCount: s, checked: c, defaultChecked: l, required: u, disabled: d, name: f, value: p, form: m, bubbleInput: h, setBubbleInput: g } = SC(kC, t), _ = J(i, g), y = Cd(a), b = e.useRef(!1), x = e.useRef(c), S = e.useRef(s);
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
	return /* @__PURE__ */ v(Js.input, {
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
function jC(e) {
	return typeof e == "function";
}
_C(jC, "isFunction");
function MC(e) {
	return e ? "checked" : "unchecked";
}
_C(MC, "getState");
//#endregion
//#region src/uhuu/ui/switch.tsx
var NC = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(EC, {
	ref: n,
	className: K("uhuu:peer uhuu:inline-flex uhuu:h-5 uhuu:w-9 uhuu:shrink-0 uhuu:cursor-pointer uhuu:items-center uhuu:rounded-full uhuu:border-2 uhuu:border-transparent uhuu:bg-gray-200 uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:focus-visible:ring-offset-(--uhuu-shell-surface) uhuu:disabled:cursor-not-allowed uhuu:disabled:opacity-50 uhuu:data-[state=checked]:bg-gray-900 uhuu:data-[state=unchecked]:bg-gray-200", e),
	...t,
	children: /* @__PURE__ */ v(OC, { className: K("uhuu:pointer-events-none uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:bg-white uhuu:shadow-lg uhuu:ring-0 uhuu:data-[state=checked]:bg-(--uhuu-shell-on-inverse) uhuu:transition-transform uhuu:data-[state=checked]:translate-x-4 uhuu:data-[state=unchecked]:translate-x-0") })
}));
NC.displayName = EC.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var PC = Object.defineProperty, FC = (e, t) => PC(e, "name", {
	value: t,
	configurable: !0
});
function IC(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
FC(IC, "clamp");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var LC = Object.defineProperty, RC = (e, t) => LC(e, "name", {
	value: t,
	configurable: !0
});
function zC(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
RC(zC, "usePrevious");
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slider@1.5.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_764b979897bd8e11b24e0a133366e2c3/node_modules/@radix-ui/react-slider/dist/index.mjs
var BC = Object.defineProperty, $ = (e, t) => BC(e, "name", {
	value: t,
	configurable: !0
}), VC = {
	Vertical: "vertical",
	Horizontal: "horizontal"
}, HC = {
	LTR: "ltr",
	RTL: "rtl"
}, UC = ["PageUp", "PageDown"], WC = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], GC = {
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
}, KC = "Slider", [qC, JC, YC] = /* @__PURE__ */ Qs(KC), [XC, ZC] = /* @__PURE__ */ ms(KC, [YC]), [QC, $C] = XC(KC), ew = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { name: r, min: i = 0, max: a = 100, step: o = 1, orientation: s = VC.Horizontal, disabled: c = !1, minStepsBetweenThumbs: l = 0, preserveThumbOrder: u = !1, defaultValue: d = [i], value: f, onValueChange: p = /* @__PURE__ */ $(() => {}, "onValueChange"), onValueCommit: m = /* @__PURE__ */ $(() => {}, "onValueCommit"), inverted: h = !1, form: g, ..._ } = t, y = e.useRef(/* @__PURE__ */ new Set()), b = e.useRef(0), x = e.useRef(!1), S = s === VC.Horizontal ? rw : iw, [C, w] = e.useState(null), T = J(n, w), [E = [], D] = Ts({
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
		N(e, Sw(E, e));
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
		let r = Dw(o), s = IC(Ow(Math.round((e - i) / o) * o + i, r), [i, a]);
		D((e = []) => {
			let r = l * o, c = u ? IC(s, [e[t - 1] === void 0 ? i : e[t - 1] + r, e[t + 1] === void 0 ? a : e[t + 1] - r]) : s, d = yw(e, c, t);
			if (Tw(d, r)) {
				b.current = u ? t : d.indexOf(c);
				let r = String(d) !== String(e);
				return r && n && m(d), r ? d : e;
			}
			return e;
		});
	}
	return $(N, "updateValues"), /* @__PURE__ */ v(QC, {
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
		children: /* @__PURE__ */ v(qC.Provider, {
			scope: t.__scopeSlider,
			children: /* @__PURE__ */ v(qC.Slot, {
				scope: t.__scopeSlider,
				children: /* @__PURE__ */ v(S, {
					"aria-disabled": c,
					"data-disabled": c ? "" : void 0,
					..._,
					ref: T,
					onPointerDown: q(_.onPointerDown, () => {
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
							let n = UC.includes(e.key) || e.shiftKey && WC.includes(e.key) ? 10 : 1, r = b.current, a = E[r];
							N(kw(a, {
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
}, "Slider")), [tw, nw] = XC(KC, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), rw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, dir: a, inverted: o, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onStepKeyDown: u, ...d } = t, [f, p] = e.useState(null), m = J(n, p), h = e.useRef(void 0), g = pc(a), _ = g === HC.LTR, y = _ && !o || !_ && o;
	function b(e) {
		let t = h.current || f.getBoundingClientRect(), n = Ew([0, t.width], y ? [r, i] : [i, r]);
		return h.current = t, n(e - t.left);
	}
	return $(b, "getValueFromPointer"), /* @__PURE__ */ v(tw, {
		scope: t.__scopeSlider,
		startEdge: y ? "left" : "right",
		endEdge: y ? "right" : "left",
		direction: y ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ v(aw, {
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
				let t = GC[y ? "from-left" : "from-right"].includes(e.key);
				u?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal")), iw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { min: r, max: i, inverted: a, onSlideStart: o, onSlideMove: s, onSlideEnd: c, onStepKeyDown: l, ...u } = t, d = e.useRef(null), f = J(n, d), p = e.useRef(void 0), m = !a;
	function h(e) {
		let t = p.current || d.current.getBoundingClientRect(), n = Ew([0, t.height], m ? [i, r] : [r, i]);
		return p.current = t, n(e - t.top);
	}
	return $(h, "getValueFromPointer"), /* @__PURE__ */ v(tw, {
		scope: t.__scopeSlider,
		startEdge: m ? "bottom" : "top",
		endEdge: m ? "top" : "bottom",
		size: "height",
		direction: m ? 1 : -1,
		children: /* @__PURE__ */ v(aw, {
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
				let t = GC[m ? "from-bottom" : "from-top"].includes(e.key);
				l?.({
					event: e,
					direction: t ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical")), aw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, onSlideStart: r, onSlideMove: i, onSlideEnd: a, onHomeKeyDown: o, onEndKeyDown: s, onStepKeyDown: c, ...l } = e, u = $C(KC, n);
	return /* @__PURE__ */ v(Js.span, {
		...l,
		ref: t,
		onKeyDown: q(e.onKeyDown, (e) => {
			e.key === "Home" ? (o(e), e.preventDefault()) : e.key === "End" ? (s(e), e.preventDefault()) : UC.concat(WC).includes(e.key) && (c(e), e.preventDefault());
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
}, "SliderImpl")), ow = "SliderTrack", sw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = $C(ow, n);
	return /* @__PURE__ */ v(Js.span, {
		"data-disabled": i.disabled ? "" : void 0,
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
}, "SliderTrack")), cw = "SliderRange", lw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSlider: r, ...i } = t, a = $C(cw, r), o = nw(cw, r), s = J(n, e.useRef(null)), c = a.values.length, l = a.values.map((e) => bw(e, a.min, a.max)), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
	return /* @__PURE__ */ v(Js.span, {
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
}, "SliderRange")), [uw, dw] = XC("SliderThumb"), fw = "SliderThumbProvider";
function pw(t) {
	let { __scopeSlider: n, name: r, children: i, internal_do_not_use_render: a } = t, o = $C(fw, n), s = JC(n), [c, l] = e.useState(null), u = e.useMemo(() => c ? s().findIndex((e) => e.ref.current === c) : -1, [s, c]), d = Cd(c), f = !c || !!o.form || !!c.closest("form"), p = o.values[u], m = r ?? (o.name ? o.name + (o.values.length > 1 ? "[]" : "") : void 0), h = p === void 0 ? 0 : bw(p, o.min, o.max);
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
	return /* @__PURE__ */ v(uw, {
		scope: n,
		...g,
		children: Aw(a) ? a(g) : i
	});
}
$(pw, "SliderThumbProvider");
var mw = "SliderThumbTrigger", hw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, ...r } = e, i = $C(mw, n), a = nw(mw, n), { index: o, value: s, percent: c, size: l, onThumbChange: u } = dw(mw, n), d = J(t, u), f = xw(o, i.values.length), p = l?.[a.size], m = p ? Cw(p, c, a.direction) : 0;
	return /* @__PURE__ */ v("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[a.startEdge]: `calc(${c}% + ${m}px)`
		},
		children: /* @__PURE__ */ v(qC.ItemSlot, {
			scope: n,
			children: /* @__PURE__ */ v(Js.span, {
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
}, "SliderThumbTrigger")), gw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSlider: n, name: r, ...i } = e;
	return /* @__PURE__ */ v(pw, {
		__scopeSlider: n,
		name: r,
		internal_do_not_use_render: ({ index: e, isFormControl: r }) => /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(hw, {
			...i,
			ref: t,
			__scopeSlider: n
		}), r ? /* @__PURE__ */ v(vw, { __scopeSlider: n }, e) : null] })
	});
}, "SliderThumb")), _w = "SliderBubbleInput", vw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSlider: t, ...n }, r) {
	let { value: i, name: a, form: o } = dw(_w, t), s = e.useRef(null), c = J(s, r), l = zC(i);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (l !== i && n) {
			let t = new Event("input", { bubbles: !0 });
			n.call(e, i), e.dispatchEvent(t);
		}
	}, [l, i]), /* @__PURE__ */ v(Js.input, {
		style: { display: "none" },
		name: a,
		form: o,
		...n,
		ref: c,
		defaultValue: i
	});
}, "SliderBubbleInput"));
function yw(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
$(yw, "getNextSortedValues");
function bw(e, t, n) {
	return IC(100 / (n - t) * (e - t), [0, 100]);
}
$(bw, "convertValueToPercentage");
function xw(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
$(xw, "getLabel");
function Sw(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
$(Sw, "getClosestValueIndex");
function Cw(e, t, n) {
	let r = e / 2;
	return (r - Ew([0, 50], [0, r])(t) * n) * n;
}
$(Cw, "getThumbInBoundsOffset");
function ww(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
$(ww, "getStepsBetweenValues");
function Tw(e, t) {
	if (t > 0) {
		let n = ww(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
$(Tw, "hasMinStepsBetweenValues");
function Ew(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
$(Ew, "linearScale");
function Dw(e) {
	if (!Number.isFinite(e)) return 0;
	let t = e.toString();
	if (t.includes("e")) {
		let [e, n] = t.split("e"), r = e.split(".")[1] || "", i = Number(n);
		return Math.max(0, r.length - i);
	}
	let n = t.split(".")[1];
	return n ? n.length : 0;
}
$(Dw, "getDecimalCount");
function Ow(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
$(Ow, "roundValue");
function kw(e, { min: t, step: n, direction: r, multiplier: i }) {
	let a = Dw(n), o = (e - t) / n, s = Math.round(o), c = Ow(s * n + t, a) === Ow(e, a), l;
	return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), Ow(l * n + t, a);
}
$(kw, "getNextStepValue");
function Aw(e) {
	return typeof e == "function";
}
$(Aw, "isFunction");
//#endregion
//#region src/uhuu/ui/slider.tsx
var jw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y(ew, {
	ref: n,
	className: K("uhuu:relative uhuu:flex uhuu:w-full uhuu:touch-none uhuu:select-none uhuu:items-center uhuu:data-[disabled]:opacity-50", e),
	...t,
	children: [/* @__PURE__ */ v(sw, {
		className: "uhuu:relative uhuu:h-1.5 uhuu:w-full uhuu:grow uhuu:overflow-hidden uhuu:rounded-full uhuu:bg-gray-200",
		children: /* @__PURE__ */ v(lw, { className: "uhuu:absolute uhuu:h-full uhuu:bg-gray-900" })
	}), /* @__PURE__ */ v(gw, { className: "uhuu:block uhuu:h-4 uhuu:w-4 uhuu:rounded-full uhuu:border-2 uhuu:border-gray-900 uhuu:bg-(--uhuu-shell-surface) uhuu:shadow uhuu:transition-colors uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-400 uhuu:focus-visible:ring-offset-2 uhuu:disabled:pointer-events-none uhuu:disabled:opacity-50" })]
}));
jw.displayName = ew.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.16_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_a0d6e2f71ba73dadad94263bc45ff639/node_modules/@radix-ui/react-label/dist/index.mjs
var Mw = Object.defineProperty, Nw = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Mw(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ v(Js.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), Pw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(Nw, {
	ref: n,
	className: K("uhuu:text-sm uhuu:font-medium uhuu:leading-none uhuu:text-gray-700 uhuu:peer-disabled:cursor-not-allowed uhuu:peer-disabled:opacity-70", e),
	...t
}));
Pw.displayName = Nw.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/page-options-renderer.tsx
function Fw(e, t) {
	let n = (e, t) => !e.appliesTo || (Array.isArray(e.appliesTo) ? e.appliesTo : [e.appliesTo]).some((e) => typeof e == "function" ? e(t) : e === t.id || e === t.templateId || t.componentKey === e);
	return e.filter((e) => {
		if (!n(e, t)) return !1;
		let r = e.getValue(t);
		return e.type === "select" || e.type === "color-series" ? r !== "" : !0;
	});
}
function Iw({ pageOptions: e, targetItem: t, onChange: n }) {
	let { localize: r } = go(), i = Fw(e, t), a = (e) => {
		let i = e.getValue(t), a = r(e.label);
		switch (e.type) {
			case "select": return /* @__PURE__ */ y("div", {
				className: "uhuu:space-y-1.5",
				children: [/* @__PURE__ */ v(Pw, {
					htmlFor: e.id,
					className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
					children: a
				}), /* @__PURE__ */ v(hC, {
					id: e.id,
					value: String(i),
					onChange: (r) => n(e, t, r.target.value),
					className: "uhuu:w-full uhuu:text-sm",
					children: e.options.map((e) => /* @__PURE__ */ v("option", {
						value: e.value,
						children: r(e.label)
					}, e.value))
				})]
			}, e.id);
			case "toggle": {
				let r = typeof i == "boolean" ? i : i === "true";
				return /* @__PURE__ */ y("div", {
					className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:py-1.5",
					children: [/* @__PURE__ */ v(Pw, {
						htmlFor: e.id,
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ v(NC, {
						id: e.id,
						checked: r,
						onCheckedChange: (r) => n(e, t, String(r))
					})]
				}, e.id);
			}
			case "slider": {
				let r = typeof i == "number" ? i : Number(i) || e.min;
				return /* @__PURE__ */ y("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-center uhuu:justify-between",
						children: [/* @__PURE__ */ v(Pw, {
							htmlFor: e.id,
							className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
							children: a
						}), /* @__PURE__ */ v("span", {
							className: "uhuu:text-xs uhuu:font-mono uhuu:tabular-nums uhuu:text-gray-700",
							children: r
						})]
					}), /* @__PURE__ */ v(jw, {
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
				return /* @__PURE__ */ y("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ v(Pw, {
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ y("div", {
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [
							/* @__PURE__ */ v($o, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.max(e.min, r - e.step);
									n(e, t, String(i));
								},
								disabled: r <= e.min,
								type: "button",
								children: /* @__PURE__ */ v(da, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							}),
							/* @__PURE__ */ v("div", {
								className: "uhuu:flex-1 uhuu:text-center uhuu:px-3 uhuu:py-1.5 uhuu:bg-gray-50 uhuu:rounded-md uhuu:border uhuu:border-gray-200",
								children: /* @__PURE__ */ v("span", {
									className: "uhuu:text-sm uhuu:font-mono uhuu:tabular-nums uhuu:font-medium uhuu:text-gray-900",
									children: r
								})
							}),
							/* @__PURE__ */ v($o, {
								variant: "outline",
								size: "sm",
								className: "uhuu:h-8 uhuu:w-8 uhuu:shrink-0 uhuu:p-0",
								onClick: () => {
									let i = Math.min(e.max, r + e.step);
									n(e, t, String(i));
								},
								disabled: r >= e.max,
								type: "button",
								children: /* @__PURE__ */ v(pa, { className: "uhuu:h-3.5 uhuu:w-3.5" })
							})
						]
					})]
				}, e.id);
			}
			case "color-series": {
				let o = String(i);
				return /* @__PURE__ */ y("div", {
					className: "uhuu:space-y-1.5",
					children: [/* @__PURE__ */ v(Pw, {
						className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
						children: a
					}), /* @__PURE__ */ v("div", {
						className: "uhuu:flex uhuu:flex-wrap uhuu:gap-1.5",
						children: e.options.map((i) => {
							let a = o === i.value, s = r(i.label) ?? i.value;
							return /* @__PURE__ */ v("button", {
								onClick: () => n(e, t, i.value),
								className: `uhuu:h-7 uhuu:w-7 uhuu:rounded-md uhuu:border-2 uhuu:transition-all uhuu:flex uhuu:items-center uhuu:justify-center ${a ? "uhuu:border-gray-900 uhuu:scale-110" : "uhuu:border-gray-200 uhuu:hover:border-gray-400 uhuu:hover:scale-105"}`,
								style: { backgroundColor: i.hex || i.value },
								type: "button",
								title: `${s}${i.hex ? ` (${i.hex})` : ""}`,
								children: a && /* @__PURE__ */ v(na, {
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
	return /* @__PURE__ */ v("div", {
		className: "uhuu:space-y-3",
		children: i.map((e) => a(e))
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-options-dropdown.tsx
function Lw({ pageOptions: e, targetItem: t, onChange: n, title: r, triggerClassName: i }) {
	let { t: a } = go(), o = r ?? a("page.optionsMenu");
	return !t || Fw(e, t).length === 0 ? null : /* @__PURE__ */ y(Dh, {
		modal: !1,
		children: [/* @__PURE__ */ v(Oh, {
			asChild: !0,
			className: i || "uhuu-page-options-trigger",
			children: /* @__PURE__ */ y($o, {
				variant: "ghost",
				size: "sm",
				className: "uhuu:h-7 uhuu:w-7 uhuu:text-gray-400 uhuu:hover:text-gray-600 uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200 uhuu:rounded-md",
				title: o,
				children: [/* @__PURE__ */ v(sa, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
					className: "uhuu:sr-only",
					children: o
				})]
			})
		}), /* @__PURE__ */ v(Mh, {
			className: "uhuu:min-w-48 uhuu:p-3",
			align: "center",
			children: /* @__PURE__ */ v(Iw, {
				pageOptions: e,
				targetItem: t,
				onChange: n
			})
		})]
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-name-dropdown.tsx
function Rw({ name: e, canRename: t, canMoveUp: n, canMoveDown: r, canAddPage: i, canDuplicate: a, canDelete: o, onRename: s, onMoveUp: c, onMoveDown: u, onAddPage: d, onDuplicate: f, onDelete: p }) {
	let { t: g } = go(), [_, b] = h(!1), [x, S] = h(!1), [C, w] = h(e), T = m(null);
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
	}) : t || D ? /* @__PURE__ */ y(Dh, {
		open: _,
		onOpenChange: b,
		modal: !1,
		children: [/* @__PURE__ */ v(Oh, {
			asChild: !0,
			children: /* @__PURE__ */ y("button", {
				className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:text-gray-900 uhuu:rounded-md uhuu:px-2 uhuu:h-7 uhuu:hover:bg-gray-100 uhuu:transition-colors uhuu:border uhuu:border-transparent uhuu:hover:border-gray-200",
				"data-uhuu-editor": !0,
				children: [/* @__PURE__ */ v("span", {
					className: "uhuu:truncate uhuu:max-w-[120px]",
					children: e
				}), /* @__PURE__ */ v(ra, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:text-gray-500 uhuu:shrink-0" })]
			})
		}), /* @__PURE__ */ y(Mh, {
			className: "uhuu:min-w-44 uhuu:p-1",
			align: "start",
			children: [
				t && /* @__PURE__ */ y(Nh, {
					onSelect: (e) => {
						e.preventDefault(), b(!1), S(!0);
					},
					children: [/* @__PURE__ */ v(fa, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.rename")]
				}),
				t && D && /* @__PURE__ */ v(Lh, {}),
				n && /* @__PURE__ */ y(Nh, {
					onClick: c,
					children: [/* @__PURE__ */ v(ea, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveUp")]
				}),
				r && /* @__PURE__ */ y(Nh, {
					onClick: u,
					children: [/* @__PURE__ */ v(Qi, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.moveDown")]
				}),
				i && (n || r) && /* @__PURE__ */ v(Lh, {}),
				i && /* @__PURE__ */ y(Nh, {
					onClick: d,
					children: [/* @__PURE__ */ v(pa, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.addPage")]
				}),
				a && /* @__PURE__ */ y(Nh, {
					onClick: f,
					children: [/* @__PURE__ */ v(oa, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.duplicate")]
				}),
				o && /* @__PURE__ */ v(Lh, {}),
				o && /* @__PURE__ */ y(Nh, {
					onClick: p,
					className: "uhuu:text-red-600 uhuu:focus:text-red-700 uhuu:focus:bg-red-50",
					children: [/* @__PURE__ */ v(ga, { className: "uhuu:w-3.5 uhuu:h-3.5 uhuu:mr-2" }), g("page.delete")]
				})
			]
		})]
	}) : /* @__PURE__ */ v("span", {
		className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-600 uhuu:truncate uhuu:max-w-[120px]",
		children: e
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/cover-spread-layout.js
function zw(e) {
	if (!e || typeof e != "object" || !("binding" in e)) return e;
	let { binding: t, ...n } = e;
	return n;
}
function Bw(e, t) {
	return !!A(e?.binding) && t?.mode === "cover";
}
function Vw({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
	let r = {
		active: !1,
		plan: null,
		setup: zw(e),
		warnings: []
	};
	if (!Bw(e, t)) return r;
	let i = A(e.binding), a = {
		...L.resolveDimensions(e),
		bleed: L.clampBleed(e.bleed),
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
function Hw(e) {
	let { initialItems: t, availableItems: n = [], onItemsChange: r, onStateChange: i, payload: a, stateKey: o = C_, resolveNewItem: u, notifyError: d, pageFilter: p } = e, [g, _] = h(t), [v, y] = h(!1), { t: b } = go(), x = m(t);
	l(() => {
		try {
			JSON.stringify(x.current) !== JSON.stringify(t) && (x.current = t, _(t));
		} catch {
			x.current !== t && (x.current = t, _(t));
		}
	}, [t]);
	let S = c(Z_), C = s((e) => {
		_(e);
		let t = j_(e, o);
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
			e.set(n, (e.get(n) ?? 0) + 1), w_(t) && t.pages?.forEach((t) => {
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
	}), [n, w]), E = f(() => D_(g), [g]), D = s(async (e, t) => {
		let n = (e) => e ? typeof e == "string" ? e : e.mode ?? "optional" : "none", r = ((e) => {
			if (e.kind === "page") {
				let t = e;
				return F_(t.templateId ?? t.id, t.componentKey ?? t.id, {
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
			return I_(n, sv(t.pageComponentKeys, r), {
				label: t.label,
				repeatable: t.repeatable ?? !1,
				maxInstances: t.maxInstances ?? null,
				integration: t.integration,
				strictPosition: t.strictPosition
			});
		})(e);
		typeof window < "u" && window.$uhuu?.debug;
		let i, o = r;
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
		return C(dv(g, s, t)), {
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
			if (D_(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (S?.removeIntegrationPayload) {
				let e = n.id;
				S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
			}
			C(g.filter((t) => t.id !== e));
		} else for (let n of g) if (w_(n) && n.pages.some((t) => t.id === e)) {
			if (D_(g) <= 1) {
				t(b("notice.lastPage"));
				return;
			}
			if (n.pages.length === 1) {
				if (S?.removeIntegrationPayload) {
					let e = n.id;
					S.payload?.integrations?.[e] !== void 0 && S.removeIntegrationPayload(e);
				}
				C(g.filter((e) => e.id !== n.id));
			} else C(g.map((t) => t.id === n.id && w_(t) ? {
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
		C(g.map((n) => n.id === e ? (w_(n), {
			...n,
			...t
		}) : n));
	}, [g, C]), A = s((e) => {
		C(e);
	}, [C]), j = f(() => {
		let e = E_(g);
		return p ? B_(e, p) : e;
	}, [g, p]), M = s((e) => {
		let t = [];
		return j.forEach((n) => {
			w_(n) ? (n.pages ?? []).forEach((r) => {
				t.push(e(r, n));
			}) : t.push(e(n, n));
		}), t;
	}, [j]), N = f(() => O_(j), [j]), P = s((e) => {
		let t = k_(e, g);
		C(uv(t));
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
function Uw(e) {
	let t = e.templateId ?? e.id;
	if (!w_(e)) {
		let n = F_(t, e.componentKey ?? t, { repeatable: !0 });
		return {
			...e,
			id: n.id,
			templateId: t,
			componentKey: n.componentKey
		};
	}
	let n = I_(t, e.pages.map((e) => ({
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
function Ww(e) {
	return Array.isArray(e) ? e.map(Ww) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ww(t)])) : e;
}
function Gw(e, t, n, r = []) {
	let i = [[t, n]];
	w_(t) && w_(n) && t.pages.forEach((e, t) => i.push([e, n.pages[t]]));
	let a = { ...e ?? {} }, o = r.filter((e) => w_(e) && e.id !== t.id).map((e) => `${e.id}__`);
	for (let r of [
		"pages",
		"groups",
		"integrations"
	]) {
		let s = { ...e?.[r] ?? {} }, c = !1;
		for (let [e, t] of i) s[e.id] !== void 0 && (s[t.id] = Ww(s[e.id]), c = !0);
		if (w_(t)) {
			let i = `${t.id}__`;
			for (let [t, a] of Object.entries(e?.[r] ?? {})) t.startsWith(i) && !o.some((e) => t.startsWith(e)) && (s[`${n.id}__${t.slice(i.length)}`] = Ww(a), c = !0);
		}
		c && (a[r] = s);
	}
	for (let [t, n] of i) {
		let r = X_(e, t);
		r !== void 0 && a.pages?.[n.id] === void 0 && (a.pages = {
			...a.pages ?? {},
			[n.id]: Ww(r)
		});
	}
	return a;
}
//#endregion
//#region src/uhuu/editor-shell/document/use-page-item-actions.ts
function Kw({ items: e, reorderItems: t, availableItemsToAdd: n, setPendingInsertPosition: r, openAddDialog: i }) {
	let a = c(Z_), o = f(() => e.filter((e) => !e.strictPosition), [e]);
	return s((s, c) => {
		if (!s) return {};
		let l = s.id, u = o.findIndex((e) => e.id === l), d = u !== -1, f = d && u > 0 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 1 || ([n[r - 1], n[r]] = [n[r], n[r - 1]], t(n));
		} : void 0, p = d && u < o.length - 1 ? () => {
			let n = [...e], r = n.findIndex((e) => e.id === l);
			r < 0 || r >= n.length - 1 || ([n[r], n[r + 1]] = [n[r + 1], n[r]], t(n));
		} : void 0, m = d && s.repeatable ? () => {
			let n = e.find((e) => e.id === l) ?? s, r = Uw(n);
			a?.setPayload((t) => Gw(t, n, r, e));
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
function qw(e = [], t = {}) {
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
function Jw({ logicalPages: e, pageFilter: t, layoutKey: n = "" }) {
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
	}, [n]), p = f(() => qw(e, l), [e, l]), m = p.length;
	return {
		committedFlowLayouts: l,
		allVirtualPages: p,
		renderedVirtualPages: f(() => p.filter((e) => V_(e.pageNum, m, t ?? void 0)), [
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
//#region src/uhuu/editor-shell/document/data-binding.ts
function Yw(e, t) {
	return e ? t ? `${e}.${t}` : e : null;
}
function Xw(e, t, n) {
	return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function Zw({ payload: e, page: t, parentGroup: n, pagePayload: r, defaults: i }) {
	let a = W_(e, t, n), o = n && w_(n) ? n.id : void 0, s = `pages.${t.id}`, c = o ? `pages.${o}` : null;
	return {
		payload: e,
		pageId: t.id,
		pagePayload: r,
		parentGroupId: o,
		integration: {
			instanceId: a.instanceId,
			data: a.integration,
			path: (e) => K_(a.instanceId, e)
		},
		paths: {
			integration: (e) => K_(a.instanceId, e),
			page: (e) => Yw(s, e),
			group: (e) => Yw(c, e),
			document: (e) => e ?? null
		},
		defaults: { imageGalleryPath: Xw(e, a.integration, i) }
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/page-group-presets.ts
var Qw = (e, t, n = !1, r, i) => {
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
	} : F_(c, s, {
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
}, $w = (e, t = !1, n, r, i) => {
	let a = {
		payload: n,
		item: void 0,
		parent: void 0
	}, o = sv(e.pageComponentKeys, a).map((e) => {
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
	return I_(e.id, o, {
		label: e.label,
		repeatable: e.repeatable ?? !1,
		maxInstances: e.maxInstances ?? null,
		integration: e.integration,
		strictPosition: e.strictPosition
	});
}, eT = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => ({
	...t,
	id: e
})) : [], tT = (e) => {
	let { initial: t, groups: n, pageComponentKeys: r = [], pages: i = {}, pageComponents: a = {}, payload: o } = e, s = eT(n), c = /* @__PURE__ */ new Map();
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
			return t ? $w(t, !0, o, i, f(t.id)) : Qw(e, void 0, !0, i, f(e));
		}
		if (e.pageComponentKeys !== void 0) {
			let t = e;
			return $w(t, !0, o, i, f(t.id));
		}
		let t = e;
		return Qw(t, void 0, !0, i, f(t.id));
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
}, nT = Object.defineProperty, rT = (e, t) => nT(e, "name", {
	value: t,
	configurable: !0
}), [iT, aT] = /* @__PURE__ */ ms("AlertDialog", [qv]), oT = qv(), sT = /* @__PURE__ */ rT((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = oT(t);
	return /* @__PURE__ */ v(Xv, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = oT(n);
	return /* @__PURE__ */ v(Qv, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var cT = /* @__PURE__ */ rT((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = oT(t);
	return /* @__PURE__ */ v(ny, {
		...r,
		...n
	});
}, "AlertDialogPortal"), lT = e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = oT(n);
	return /* @__PURE__ */ v(iy, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [uT, dT] = iT("AlertDialogContent"), fT = e.forwardRef(/* @__PURE__ */ rT(function(t, n) {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = oT(r), s = J(n, e.useRef(null)), c = e.useRef(null);
	return /* @__PURE__ */ v(uT, {
		scope: r,
		cancelRef: c,
		children: /* @__PURE__ */ v(cy, {
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
}, "AlertDialogContent")), pT = e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = oT(n);
	return /* @__PURE__ */ v(fy, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), mT = e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = oT(n);
	return /* @__PURE__ */ v(py, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), hT = e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = oT(n);
	return /* @__PURE__ */ v(hy, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), gT = "AlertDialogCancel", _T = e.forwardRef(/* @__PURE__ */ rT(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = dT(gT, n), a = oT(n), o = J(t, i);
	return /* @__PURE__ */ v(hy, {
		...a,
		...r,
		ref: o
	});
}, "AlertDialogCancel")), vT = sT, yT = cT, bT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(lT, {
	ref: n,
	className: K("uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:bg-black/40 uhuu:backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
bT.displayName = lT.displayName;
var xT = e.forwardRef(({ className: e, ...t }, n) => {
	let { portalContainer: r } = Ca();
	return /* @__PURE__ */ y(yT, {
		container: r || void 0,
		children: [/* @__PURE__ */ v(bT, {}), /* @__PURE__ */ v(fT, {
			ref: n,
			"data-uhuu-editor": !0,
			className: K("uhuu:fixed uhuu:left-[50%] uhuu:top-[50%] uhuu:z-50 uhuu:w-full uhuu:max-w-md uhuu:translate-x-[-50%] uhuu:translate-y-[-50%] uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-6 uhuu:shadow-lg uhuu:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
			...t
		})]
	});
});
xT.displayName = fT.displayName;
var ST = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:flex uhuu:flex-col uhuu:gap-2 uhuu:text-left", e),
	...t
});
ST.displayName = "AlertDialogHeader";
var CT = ({ className: e, ...t }) => /* @__PURE__ */ v("div", {
	className: K("uhuu:mt-6 uhuu:flex uhuu:flex-col-reverse uhuu:gap-2 uhuu:sm:flex-row uhuu:sm:justify-end", e),
	...t
});
CT.displayName = "AlertDialogFooter";
var wT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(pT, {
	ref: n,
	className: K("uhuu:text-base uhuu:font-semibold uhuu:text-gray-900", e),
	...t
}));
wT.displayName = pT.displayName;
var TT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(mT, {
	ref: n,
	className: K("uhuu:text-sm uhuu:text-gray-600", e),
	...t
}));
TT.displayName = mT.displayName;
var ET = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(hT, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:bg-gray-900 uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-(--uhuu-shell-on-inverse) uhuu:transition-colors uhuu:hover:bg-gray-800", e),
	...t
}));
ET.displayName = hT.displayName;
var DT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v(_T, {
	ref: n,
	className: K("uhuu:inline-flex uhuu:h-9 uhuu:items-center uhuu:justify-center uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-4 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900 uhuu:transition-colors uhuu:hover:bg-gray-50", e),
	...t
}));
DT.displayName = _T.displayName;
//#endregion
//#region src/uhuu/editor-shell/document/dev-print-controls.tsx
var OT = "__edit__", kT = "__print__";
function AT({ checked: e, label: t, onSelect: n, keepOpen: r = !1 }) {
	return /* @__PURE__ */ y(Nh, {
		onSelect: (e) => {
			r && e.preventDefault(), n();
		},
		className: "uhuu:flex uhuu:items-center uhuu:gap-2",
		children: [e ? /* @__PURE__ */ v(na, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }) : /* @__PURE__ */ v("span", { className: "uhuu:w-3 uhuu:h-3" }), /* @__PURE__ */ v("span", {
			className: "uhuu:flex-1 uhuu:truncate",
			children: t
		})]
	});
}
function jT({ label: e, value: t }) {
	return /* @__PURE__ */ y(Ah, {
		className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-4 uhuu:text-xs",
		children: [/* @__PURE__ */ v("span", {
			className: "uhuu:text-gray-700",
			children: e
		}), /* @__PURE__ */ y("span", {
			className: "uhuu:flex uhuu:items-center uhuu:gap-1 uhuu:text-gray-400",
			children: [t ? /* @__PURE__ */ v("span", {
				className: "uhuu:max-w-[110px] uhuu:truncate",
				children: t
			}) : null, /* @__PURE__ */ v(ia, { className: "uhuu:w-3.5 uhuu:h-3.5" })]
		})]
	});
}
function MT({ modes: e, selectedMode: t, onModeChange: n, interactive: r, onInteractiveChange: i, hasReferenceRenderer: a = !1, referenceOpacity: o = 50, onReferenceOpacityChange: s, brandKits: c, activeBrandKitId: l, onSelectBrandKit: u, onAddBrandKit: d }) {
	let f = e ? Object.keys(e) : [], p = [{
		value: OT,
		label: "Edit"
	}, ...f.length > 0 ? f.map((t) => ({
		value: t,
		label: e[t].label
	})) : [{
		value: kT,
		label: "Print"
	}]], m = r ? OT : t || f[0] || kT, h = p.find((e) => e.value === m)?.label ?? "Edit", g = (t) => {
		t === OT ? i(!0) : (i(!1), t !== kT && e && e[t] && n?.(t, e[t]));
	}, b = !!c && c.length > 0, x = c?.find((e) => e.id === l)?.name, S = () => {
		let e = window.prompt("Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:");
		e && e.trim() && d?.(e.trim());
	};
	return /* @__PURE__ */ y(Dh, {
		modal: !1,
		children: [/* @__PURE__ */ v(Oh, {
			asChild: !0,
			children: /* @__PURE__ */ y($o, {
				variant: "ghost",
				size: "sm",
				className: `uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 ${r ? "" : "uhuu:bg-gray-100/80"}`,
				children: [/* @__PURE__ */ v(ta, { className: "uhuu:w-3.5 uhuu:h-3.5" }), /* @__PURE__ */ v("span", {
					className: "uhuu:text-[10px] uhuu:uppercase uhuu:tracking-wide",
					children: "Dev"
				})]
			})
		}), /* @__PURE__ */ y(Mh, {
			align: "end",
			className: "uhuu:min-w-[200px]",
			children: [
				/* @__PURE__ */ y(kh, { children: [/* @__PURE__ */ v(jT, {
					label: "Print Preview",
					value: h
				}), /* @__PURE__ */ v(jh, {
					className: "uhuu:min-w-[180px]",
					children: p.map((e) => /* @__PURE__ */ v(AT, {
						checked: m === e.value,
						label: e.label,
						onSelect: () => g(e.value)
					}, e.value))
				})] }),
				b && /* @__PURE__ */ y(kh, { children: [/* @__PURE__ */ v(jT, {
					label: "Brand Kit",
					value: x
				}), /* @__PURE__ */ y(jh, {
					className: "uhuu:min-w-[200px]",
					children: [c.map((e) => /* @__PURE__ */ v(AT, {
						checked: l === e.id,
						label: e.name,
						keepOpen: !0,
						onSelect: () => u?.(e.id)
					}, e.id)), d && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(Lh, {}), /* @__PURE__ */ y(Nh, {
						onSelect: (e) => {
							e.preventDefault(), S();
						},
						className: "uhuu:flex uhuu:items-center uhuu:gap-2",
						children: [/* @__PURE__ */ v(pa, { className: "uhuu:w-3 uhuu:h-3 uhuu:text-gray-400" }), /* @__PURE__ */ v("span", {
							className: "uhuu:flex-1",
							children: "Add published kit…"
						})]
					})] })]
				})] }),
				a && /* @__PURE__ */ y(_, { children: [
					/* @__PURE__ */ v(Lh, {}),
					/* @__PURE__ */ v(Ih, {
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
								children: /* @__PURE__ */ v(jw, {
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
	});
}
//#endregion
//#region src/uhuu/editor-shell/document/page-editor.tsx
var NT = {
	width: 210,
	height: 297
}, PT = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function FT(e, t) {
	return t ? `${t.id}/${e.id}` : e.id;
}
function IT({ label: e, onDone: t, onAddAnother: n }) {
	let { t: r } = go();
	return e ? /* @__PURE__ */ v("div", {
		className: "uhuu:fixed uhuu:inset-0 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:justify-center uhuu:bg-black/30",
		children: /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:bg-(--uhuu-shell-surface) uhuu:rounded-lg uhuu:border uhuu:border-gray-200/80 uhuu:shadow-xl uhuu:p-6 uhuu:w-full uhuu:max-w-sm uhuu:mx-4 uhuu:flex uhuu:flex-col uhuu:items-center uhuu:text-center",
			children: [
				/* @__PURE__ */ v("div", {
					className: "uhuu:rounded-full uhuu:bg-emerald-100 uhuu:p-3 uhuu:mb-4",
					children: /* @__PURE__ */ v(na, {
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
					children: [/* @__PURE__ */ v($o, {
						variant: "outline",
						size: "sm",
						onClick: n,
						className: "uhuu:flex-1",
						children: r("addDialog.addAnother")
					}), /* @__PURE__ */ v($o, {
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
var LT = /* @__PURE__ */ new Set();
function RT({ initialItems: t = [], availableItems: n = [], pageComponents: r = {}, spineComponent: i, payload: a, pageFormat: o, pageOptions: l = [], notifyError: u, referenceRenderer: d, renderOverlay: p, renderPage: g, menuItems: b, gridColsClass: S, reorderTitle: C, reorderDescription: w, stateKey: T = C_, onItemsChange: E, onStateChange: D, resolveNewItem: O, pageFilter: k, printConfigs: A, defaultZoomMode: j = "fit-page", brandKits: M, activeBrandKitId: N, onSelectBrandKit: P, onAddBrandKit: F, pageManagement: I = BT }) {
	let [L] = h(() => ne.createScope()), R = I, ee = o ?? NT, { interactive: te, setInteractive: z, enableDevTools: B } = Wo(), re = ue(), ie = Go(), { portalContainer: ae } = Ca(), V = go(), { t: H, localize: se } = V, [ce, le] = h(null), [de, fe] = h(null), [pe, me] = h(void 0), [he, ge] = h(0), [_e, ve] = h(0), ye = ce ?? k, be = f(() => de ? {
		...ee,
		...de
	} : ee, [ee, de]), xe = c(Z_), Se = xe?.payload ?? a, [Ce, we] = h(!1), Te = !te && Bw(be, ye), Ee = be?.preview ?? "single_page", De = Te ? "single_page" : Ee, Oe = f(() => {
		let e = zw(be);
		return Ee === "two_pages" || Te ? {
			...e,
			preview: "single_page"
		} : e;
	}, [
		Ee,
		Te,
		be
	]), ke = f(() => zw(ee), [ee]), Ae = f(() => A_(t), [t]), je = f(() => l?.length ? l.map((e) => "getValue" in e ? e : xe?.setPageOptionValue ? tv(e, xe.payload, xe.setPageOptionValue) : (re && console.warn("PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."), null)).filter(Boolean) : [], [
		l,
		xe,
		re
	]), [Me, Ne] = h(null), [Pe, Fe] = h({ mode: "end" }), [Ie, Le] = h(null), Re = m(null), { items: ze, itemsWithPageNum: Be, availableItemsToAdd: Ve, addItem: He, removeItem: Ue, reorderItems: We, updateItemFields: Ge, addDialogOpen: Ke, setAddDialogOpen: qe, openAddDialog: Je, itemsForReorder: Ye, handleReorder: Xe } = Hw({
		initialItems: Ae,
		availableItems: n,
		payload: Se,
		stateKey: T,
		onItemsChange: E,
		onStateChange: D,
		resolveNewItem: O,
		notifyError: u
	}), Ze = f(() => vv({
		pageComponents: r,
		payload: Se,
		setup: Oe,
		i18n: V
	}), [
		r,
		Se,
		Oe,
		V
	]), Qe = f(() => {
		let e = [];
		for (let t of Be) {
			let n = w_(t) ? t.pages ?? [] : [t];
			for (let r of n) {
				if (!r?.id) continue;
				let n = w_(t) ? t : void 0;
				e.push({
					...r,
					kind: "page",
					id: r.id,
					pageNum: r.pageNum ?? e.length + 1,
					basePageNum: r.pageNum ?? e.length + 1,
					parentGroup: n,
					flowKey: FT(r, n)
				});
			}
		}
		return e.sort((e, t) => (e.basePageNum ?? 0) - (t.basePageNum ?? 0));
	}, [Be]), $e = f(() => JSON.stringify({
		format: Oe?.format,
		orientation: Oe?.orientation,
		width: Oe?.width,
		height: Oe?.height,
		bleed: Oe?.bleed,
		showBleed: Oe?.showBleed,
		preview: Oe?.preview,
		flowPages: Qe.filter((e) => e.hasFlow).map((e) => e.flowKey).join("|")
	}), [Oe, Qe]), et = f(() => D_(ze), [ze]), { committedFlowLayouts: tt, allVirtualPages: nt, renderedVirtualPages: rt, virtualTotalPageCount: it, registerMeasurement: at, pruneMeasurements: ot } = Jw({
		logicalPages: Qe,
		pageFilter: ye,
		layoutKey: $e
	});
	PT(() => {
		L.commit(Qe.filter((e) => e.hasFlow).map((e) => e.flowKey), tt);
	}), PT(() => () => L.suspend(), [L]), e.useEffect(() => () => L.unmount(), [L]);
	let st = f(() => new Set(rt.map((e) => e.virtualPageId)), [rt]), ct = f(() => Vw({
		pageFormat: Te ? be : zw(be),
		pageFilter: ye,
		pages: rt
	}), [
		Te,
		be,
		ye,
		rt
	]), lt = ct.active ? ct.plan : null, ut = f(() => lt ? {
		...Oe,
		binding: ct.setup.binding
	} : Oe, [
		lt,
		Oe,
		ct.setup
	]);
	e.useEffect(() => {
		if (ct.warnings.length) for (let e of ct.warnings) LT.has(e) || (LT.add(e), console.warn(`[uhuu-components] PageEditor cover spread: ${e}`));
	}, [ct.warnings]);
	let dt = f(() => nt.filter((e) => e.hasFlow && e.virtualPageIndex === 0 && (g || !!lt || !st.has(e.virtualPageId))), [
		nt,
		st,
		g,
		lt
	]);
	e.useEffect(() => {
		if (!Ie) return;
		let e = setTimeout(() => {
			document.querySelector(`[data-page-item-id="${Ie}"]`)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		return () => clearTimeout(e);
	}, [Ie]);
	let ft = Kw({
		items: ze,
		reorderItems: We,
		availableItemsToAdd: Ve,
		setPendingInsertPosition: Fe,
		openAddDialog: Je
	}), pt = (e, t) => {
		let n = ft(e, t);
		return {
			onAddPage: R.add ? n.onAddPage : void 0,
			onMoveUp: R.reorder ? n.onMoveUp : void 0,
			onMoveDown: R.reorder ? n.onMoveDown : void 0,
			onDuplicate: R.duplicate ? n.onDuplicate : void 0
		};
	}, mt = s(async (e) => {
		let t = await He(e, Pe);
		t.success && (Le(t.insertedId), Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => Le(null), 1200), Fe({ mode: "end" }), e.repeatable && e.integration && Ne(e));
	}, [He, Pe]), ht = s(() => {
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
	}, []), gt = s(() => {
		Fe(ht()), Je();
	}, [ht, Je]), _t = e.useCallback((e, t, n) => {
		if (!t) return;
		let r = e.applyPatch?.(n, t);
		r && Ge(t.id, r), e.onChange?.(t.id, n, {
			item: t,
			updateItem: (e) => Ge(t.id, e)
		});
	}, [Ge]), vt = (e) => /* @__PURE__ */ y("div", {
		className: "uhuu-page-overlay",
		children: [/* @__PURE__ */ v("span", { children: "Page" }), /* @__PURE__ */ y("span", { children: [
			e.pageNo,
			" / ",
			e.total
		] })]
	}), yt = (e, t, n) => p === !1 || p === null ? null : p ? p({
		pageNo: e,
		total: it,
		pageId: t,
		parent: n
	}) : vt({
		pageNo: e,
		total: it
	}), bt = (t, n = {}) => {
		let i = t.parentGroup;
		if (g && n.renderVisible !== !1 && n.renderMode !== "content") return g({
			page: t,
			parent: i
		});
		let a = t.componentKey ?? t.id, o = B && d ? d(t) : null, s = B && d ? e.isValidElement(o) ? e.cloneElement(o, { opacity: _e }) : o : null, c = t.templateId ?? a, l = r[a], u = xe?.getPagePayload ? xe.getPagePayload(t) : X_(Se, {
			id: t.id,
			templateId: c,
			componentKey: a
		}), f = G_(Se, t, i), p = Zw({
			payload: Se,
			page: t,
			parentGroup: i,
			pagePayload: u
		});
		return /* @__PURE__ */ v(mC, {
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
			setup: ut,
			reference: s,
			overlay: ({ pageNo: e }) => yt(e, t.id, i),
			className: t.className,
			dataBinding: p,
			totalPages: it,
			measurementTotalPages: et,
			flowPageIndex: t.virtualPageIndex,
			flowChunksByFlowId: t.flowChunksByFlowId,
			measureFlow: n.measureFlow ?? (!!t.hasFlow && t.virtualPageIndex === 0),
			flowMeasurementKey: t.flowKey,
			flowMeasurementVersion: $e,
			flowReadiness: L,
			onFlowMeasurement: t.hasFlow ? at : void 0,
			onFlowPrune: ot,
			renderVisible: n.renderVisible ?? !0,
			renderMode: n.renderMode,
			spread: n.spread
		}, `${n.renderVisible === !1 ? "measure-only" : "page"}-${t.virtualPageId}`);
	}, xt = (e) => {
		let t = e.componentKey ?? e.templateId ?? e.id;
		return [t ? `uhuu-page--${t}` : "", e.className].filter(Boolean).join(" ");
	}, St = (e) => {
		if (!lt) return null;
		let { binding: t, page: n } = lt, [r, a] = e.panels, o = r.page, s = a.page, c = (r) => ({
			sheet: e.sheet,
			side: r,
			spine: t.spine,
			glue: t.glue,
			bleed: n.bleed
		}), l = `Cover sheet ${e.index + 1} · ${e.sheet} (pages ${o.pageNum} + ${s.pageNum})`;
		return /* @__PURE__ */ v("div", {
			"data-page-item-id": s.parentGroup?.id ?? s.id,
			children: /* @__PURE__ */ v(Vv, {
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
				children: /* @__PURE__ */ v(oe, {
					setup: ut,
					children: /* @__PURE__ */ v(er, {
						sheet: e.sheet,
						pageNo: [o.pageNum, s.pageNum],
						left: bt(o, {
							renderMode: "content",
							spread: c("left")
						}),
						right: bt(s, {
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
							totalPages: it,
							pages: {
								left: o,
								right: s
							}
						}) : void 0,
						overlay: ({ pageNo: e, side: t }) => {
							let n = t === "left" ? o : s;
							return yt(e, n.id, n.parentGroup);
						},
						leftClassName: xt(o),
						rightClassName: xt(s),
						leftPageKey: o.componentKey ?? o.templateId ?? o.id,
						rightPageKey: s.componentKey ?? s.templateId ?? s.id
					})
				})
			})
		}, `cover-sheet-${e.sheet}`);
	}, Ct = (e, t, n) => {
		let r = !!t && w_(t), i = r && t.pages[0]?.id === e.id;
		if (e.virtualPageIndex > 0) return /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:pr-3 uhuu:py-1.5 uhuu:flex uhuu:items-center uhuu:gap-2 uhuu:h-9",
			children: [/* @__PURE__ */ v("span", {
				className: "uhuu-page-number",
				children: e.pageNum
			}), /* @__PURE__ */ v("span", {
				className: "uhuu:text-xs uhuu:text-gray-500",
				children: H("page.continued", { name: se(e.label) || e.componentKey || e.id })
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
						children: se(e.label)
					}),
					/* @__PURE__ */ v("span", {
						className: "uhuu:text-xs uhuu:text-gray-400",
						children: "·"
					})
				]
			})
		});
		let a = r ? t : e, o = r ? se(t.label) || t.id : se(e.label) || H("page.fallbackName", { number: e.pageNum });
		return /* @__PURE__ */ y("div", {
			"data-uhuu-editor": !0,
			className: "uhuu:pl-0 uhuu:flex uhuu:items-center uhuu:h-9",
			children: [
				/* @__PURE__ */ v("span", {
					className: "uhuu-page-number uhuu:shrink-0 uhuu:text-xs uhuu:tabular-nums uhuu:text-gray-400 uhuu:font-medium uhuu:pr-1",
					children: e.pageNum
				}),
				/* @__PURE__ */ v(Rw, {
					name: o,
					canRename: R.rename,
					canMoveUp: !!n?.onMoveUp,
					canMoveDown: !!n?.onMoveDown,
					canAddPage: !!n?.onAddPage,
					canDuplicate: !!n?.onDuplicate,
					canDelete: R.remove && et > 1,
					onRename: (e) => Ge(a.id, { label: e || void 0 }),
					onMoveUp: n?.onMoveUp,
					onMoveDown: n?.onMoveDown,
					onAddPage: n?.onAddPage,
					onDuplicate: n?.onDuplicate,
					onDelete: () => Ue(a.id)
				}),
				/* @__PURE__ */ v("span", {
					className: "uhuu:pl-1",
					children: je.length > 0 && /* @__PURE__ */ v(Lw, {
						pageOptions: je,
						targetItem: a,
						onChange: _t,
						title: H(r ? "page.groupOptions" : "page.options")
					})
				})
			]
		});
	}, wt = f(() => {
		if (De !== "two_pages") return [];
		let e = rt;
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
	}, [De, rt]), Tt = /* @__PURE__ */ y("div", {
		className: "uhuu:flex uhuu:items-center uhuu:gap-1",
		children: [
			/* @__PURE__ */ v(sC, {
				variant: "secondary",
				className: "uhuu:font-normal uhuu:text-xs uhuu:bg-gray-100/80 uhuu:text-gray-700 uhuu:border-0",
				children: H("toolbar.pages", { count: it })
			}),
			B && /* @__PURE__ */ v(MT, {
				modes: A,
				selectedMode: pe,
				onModeChange: (e, t) => {
					me(e), le(t.filter ?? null), fe(t.pageFormat ?? null), ge((e) => e + 1);
				},
				interactive: te,
				onInteractiveChange: (e) => {
					z(e), e && fe(null);
				},
				hasReferenceRenderer: !!d,
				referenceOpacity: _e,
				onReferenceOpacityChange: ve,
				brandKits: M,
				activeBrandKitId: N,
				onSelectBrandKit: P,
				onAddBrandKit: F
			}),
			te && /* @__PURE__ */ y(_, { children: [R.add && Ve.length > 0 && /* @__PURE__ */ y($o, {
				variant: "ghost",
				size: "sm",
				onClick: gt,
				title: H("toolbar.addHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(pa, { className: "uhuu:w-3.5 uhuu:h-3.5" }), H("toolbar.add")]
			}), R.reorder && /* @__PURE__ */ y($o, {
				variant: "ghost",
				size: "sm",
				onClick: () => we(!0),
				title: H("toolbar.reorderHint"),
				className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5",
				children: [/* @__PURE__ */ v(aa, { className: "uhuu:w-3.5 uhuu:h-3.5" }), H("toolbar.reorder")]
			})] })
		]
	});
	return /* @__PURE__ */ y(_, { children: [
		dt.map((e) => bt(e, {
			renderVisible: !1,
			measureFlow: !0
		})),
		B && !te && ae && x(/* @__PURE__ */ y($o, {
			onClick: () => {
				z(!0), fe(null);
			},
			"data-uhuu-editor": !0,
			size: "sm",
			className: "uhuu-screen-only uhuu:fixed uhuu:top-4 uhuu:right-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:gap-1.5 uhuu:text-xs! uhuu:rounded-full",
			title: "Back to Edit Mode",
			children: [/* @__PURE__ */ v(ya, { className: "uhuu:w-4 uhuu:h-4" }), "Back to Editor"]
		}), ae),
		/* @__PURE__ */ v(Hv, {
			defaultZoom: 80,
			defaultZoomMode: j,
			minZoom: 25,
			maxZoom: 200,
			menuItems: b ?? Tt,
			onAddPage: R.add ? gt : void 0,
			preview: De,
			children: lt ? lt.sheets.map(St) : De === "two_pages" ? wt.map((e, t) => {
				let n = e.left ?? e.right, r = e.right ?? e.left, i = n?.parentGroup?.id ?? n?.id ?? null, a = r?.parentGroup?.id ?? r?.id ?? null, o = e.left?.parentGroup?.id ?? e.left?.id, s = e.right?.parentGroup?.id ?? e.right?.id, c = o === Ie, l = s === Ie, u = (e, t) => pt(e ? e.parentGroup ?? e : void 0, t);
				return /* @__PURE__ */ y(Rv, {
					layout: e.layout,
					pageItemId: a ?? void 0,
					children: [e.left && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.left.virtualPageIndex === 0 ? o : void 0,
						className: c ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(Vv, {
							title: `Sheet ${e.left.pageNum}`,
							controls: Ct(e.left, e.left.parentGroup, u(e.left, i)),
							origin: e.left.pageNum % 2 == 0 ? "right" : "left",
							children: bt(e.left)
						}, e.left.virtualPageId)
					}), e.right && /* @__PURE__ */ v("div", {
						"data-page-item-id": e.right.virtualPageIndex === 0 ? s : void 0,
						className: l ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
						children: /* @__PURE__ */ v(Vv, {
							title: `Sheet ${e.right.pageNum}`,
							controls: Ct(e.right, e.right.parentGroup, u(e.right, a)),
							origin: e.right.pageNum % 2 == 0 ? "right" : "left",
							children: bt(e.right)
						}, e.right.virtualPageId)
					})]
				}, `pair-${t}`);
			}) : rt.map((e) => {
				let t = e.parentGroup ?? e, n = e.parentGroup?.id ?? e.id, r = pt(t, n), i = e.parentGroup?.id ?? e.id, a = Ie === i;
				return /* @__PURE__ */ v("div", {
					"data-page-item-id": e.virtualPageIndex === 0 ? i : void 0,
					className: a ? "uhuu:outline uhuu:outline-2 uhuu:outline-offset-2 uhuu:outline-blue-100 uhuu:bg-blue-50" : void 0,
					children: /* @__PURE__ */ v(Vv, {
						title: `Sheet ${e.pageNum}`,
						controls: Ct(e, e.parentGroup, r),
						children: bt(e)
					})
				}, e.virtualPageId);
			})
		}, `dev-mode-${he}-${pe ?? "default"}`),
		te && !ie && /* @__PURE__ */ y(_, { children: [R.add && /* @__PURE__ */ v(Ey, {
			open: Ke,
			onOpenChange: qe,
			availableItems: Ve,
			renderThumbnail: Ze,
			onSelectItem: mt,
			payload: Se,
			setup: ke,
			gridColsClass: S,
			"data-uhuu-editor": !0
		}), R.reorder && /* @__PURE__ */ v(lC, {
			open: Ce,
			onOpenChange: we,
			pages: Ye,
			onReorder: (e) => {
				Xe(e), we(!1);
			},
			onRemove: R.remove ? (e) => Ue(e.id) : void 0,
			pageComponents: r,
			payload: Se,
			setup: ke,
			renderThumbnail: Ze,
			title: se(C) ?? H("reorderDialog.title"),
			description: se(w) ?? H("reorderDialog.description"),
			gridColsClass: S,
			"data-uhuu-editor": !0
		})] }),
		/* @__PURE__ */ v(IT, {
			label: Me ? se(Me.label) ?? Me.id : null,
			onDone: () => Ne(null),
			onAddAnother: () => {
				let e = Me;
				Ne(null), e && mt(e);
			}
		})
	] });
}
function zT(e) {
	let { templateConfig: t, ...n } = e;
	return c(Z_) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ v(RT, { ...n }) : /* @__PURE__ */ v(Q_, {
		payload: e.payload,
		onPayloadChange: e.onPayloadChange,
		stateKey: e.stateKey,
		children: /* @__PURE__ */ v(RT, { ...n })
	});
}
var BT = rv();
function VT(t) {
	let n = c(Z_), { t: r } = go(), i = n?.payload ?? t.payload, a = e.useMemo(() => tT({
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
	}, []), d = e.useMemo(() => M_(i, t.stateKey ?? "uhuu_page_editor"), [i, t.stateKey]), f = e.useMemo(() => {
		let e = t.templateConfig.pageManagement;
		return e != null && typeof e != "object" && console.warn(`[uhuu-components] templateConfig.pageManagement takes an object, e.g. { locked: true }; ${JSON.stringify(e)} is ignored and every page-management control stays on.`), rv(e);
	}, [t.templateConfig.pageManagement]), p = e.useMemo(() => fv({
		initialItems: a.initialItems,
		savedItems: d?.items,
		config: t.templateConfig,
		payload: i,
		management: f
	}), [
		d?.items,
		a.initialItems,
		i,
		t.templateConfig,
		f
	]);
	return /* @__PURE__ */ y(re.Provider, {
		value: !0,
		children: [/* @__PURE__ */ v(zT, {
			...t,
			payload: i,
			initialItems: p,
			availableItems: f.add || f.duplicate ? a.availableItems : [],
			pageManagement: f,
			pageComponents: a.pageComponents,
			spineComponent: o,
			notifyError: u
		}), /* @__PURE__ */ v(vT, {
			open: s.open,
			onOpenChange: (e) => {
				e || l({
					open: !1,
					message: ""
				});
			},
			children: /* @__PURE__ */ y(xT, { children: [/* @__PURE__ */ y(ST, { children: [/* @__PURE__ */ v(wT, { children: r("notice.cannotRemoveTitle") }), /* @__PURE__ */ v(TT, { children: s.message })] }), /* @__PURE__ */ v(CT, { children: /* @__PURE__ */ v(ET, {
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
function HT(e, t) {
	if (e && t) {
		if (e.includes("??")) {
			let n = e.split("??").map((e) => e.trim());
			for (let e of n) {
				let n = UT(t, e);
				if (n != null) return n;
			}
		} else return UT(t, e);
	}
}
function UT(e, t) {
	if (!t) return e;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (r == null) return;
		r = r[e];
	}
	return r;
}
function WT(e, t, n) {
	let r = {};
	for (let [n, i] of Object.entries(e)) typeof i == "function" ? r[n] = i(t) : typeof i == "string" && (r[n] = HT(i.startsWith("integration.") ? i.slice(12) : i, t));
	return r;
}
function GT(e, t, n) {
	return e(t, n);
}
function KT(e, t, n) {
	return typeof e == "function" ? GT(e, t, n) : WT(e, t, n);
}
function qT(e, t, n) {
	if (e?.defaults?.imageGalleryPath) return e.defaults.imageGalleryPath;
	if (n) {
		if (typeof n == "function") {
			let e = n(t);
			if (e) return e;
		} else if (typeof n == "string") return n;
	}
	return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function JT(e, t, n = {}, r, i = null) {
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
function YT(t) {
	let { dataBinding: n, integration: r, resolver: i, galleryPath: a, defaults: o } = t, s = e.useMemo(() => KT(i, r, n?.payload), [
		i,
		r,
		n?.payload
	]), c = e.useMemo(() => qT(n, r, a), [
		n,
		r,
		a
	]), l = e.useCallback((e, t = {}, r) => JT(n, e, t, r, c), [n, c]), u = e.useCallback((e, t = {}, n) => {
		let r = l(e, t, n);
		return r ? nn({ dialog: r }) : {};
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
//#region src/uhuu/editor-shell/document/document-options-core.js
function XT(e) {
	return e?.type === "toggle" ? "toggle" : "select";
}
function ZT(e) {
	let t = e?.valueType;
	return t === "string" || t === "number" || t === "boolean" ? t : XT(e) === "toggle" ? "boolean" : "string";
}
function QT(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function $T(e, t) {
	return (QT(e) && t?.key ? e[t.key] : void 0) ?? t?.defaultValue;
}
function eE(e, t) {
	return e == null || t == null ? !1 : String(e) === String(t);
}
function tE(e, t) {
	return (Array.isArray(e?.options) ? e.options : []).find((e) => eE(e?.value, t));
}
function nE(e) {
	return e === !0 || e === "true";
}
function rE(e) {
	if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
	if (typeof e != "string" || e.trim() === "") return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function iE(e, t) {
	if (t == null) return t;
	switch (ZT(e)) {
		case "number": {
			let e = rE(t);
			return e === void 0 ? t : e;
		}
		case "boolean": return nE(t);
		default: return String(t);
	}
}
function aE(e) {
	return typeof e?.editDialog == "function" ? "dialog" : "none";
}
function oE(e, t, n = (e) => typeof e == "string" ? e : void 0) {
	let r = n(e.label) ?? e.key;
	if (XT(e) === "toggle") return {
		path: e.key,
		type: "switch",
		label: r,
		value: nE(t)
	};
	let i = Array.isArray(e.options) ? e.options : [];
	return {
		path: e.key,
		type: "select",
		label: r,
		...t == null ? {} : { value: String(t) },
		options: i.map((e) => ({
			value: String(e.value),
			label: n(e.label) ?? String(e.value)
		}))
	};
}
//#endregion
//#region src/uhuu/editor-shell/document/document-options.tsx
var sE = "__uhuu_document_option_unset__", cE = !1;
function lE() {
	return typeof window > "u" ? void 0 : window.$uhuu;
}
function uE(e) {
	let [t, n] = h(null);
	return l(() => {
		if (!e || typeof document > "u" || Aa()) return;
		let t = document.createElement("div");
		return t.setAttribute("data-uhuu-portal", ""), t.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(t), n(t), () => {
			t.remove(), n(null);
		};
	}, [e]), e ? t : null;
}
function dE({ payload: e, options: t, title: n, onChange: r, className: i, style: a }) {
	let { interactive: o } = Wo(), { t: d, localize: p } = go(), g = c(Z_), _ = e ?? g?.payload ?? null, b = f(() => Array.isArray(t) ? t : [], [t]), S = o && !Ko() && b.length > 0, C = ja(), w = Ca(), T = uE(S && !C && !w.inProvider), E = C ?? w.portalContainer ?? T, D = u(), O = `${D}-panel`, k = `${D}-heading`, A = m(null), j = m(null), M = m(null), [N, P] = h(!1), [F, I] = h({ side: "top" }), [L, R] = h({});
	l(() => {
		R((e) => {
			let t = Object.fromEntries(Object.entries(e).filter(([e, t]) => {
				let n = b.find((t) => t.key === e);
				return n && Object.is($T(_, n), t.previousValue);
			}));
			return Object.keys(t).length === Object.keys(e).length ? e : t;
		});
	}, [_, b]);
	let ee = (e) => {
		let t = $T(_, e), n = L[e.key];
		return n && Object.is(t, n.previousValue) ? n.value : t;
	}, te = s((e) => {
		P(!1), e && j.current?.focus();
	}, []), z = () => {
		let e = j.current?.getBoundingClientRect();
		if (e && typeof window < "u") {
			let t = e.top + e.height / 2 > window.innerHeight / 2 ? "top" : "bottom", n = t === "top" ? e.top : window.innerHeight - e.bottom;
			I({
				side: t,
				maxHeight: Math.max(160, Math.floor(n - 24))
			});
		}
		P(!0);
	};
	l(() => {
		S || P(!1);
	}, [S]), l(() => {
		if (!N) return;
		M.current?.querySelector("select, button")?.focus();
		let e = (e) => {
			A.current?.contains(e.target) || P(!1);
		};
		return document.addEventListener("pointerdown", e, !0), () => document.removeEventListener("pointerdown", e, !0);
	}, [N]);
	let B = (e) => {
		let t = lE();
		typeof t?.editDialog == "function" && (t.editDialog(oE(e, $T(_, e), p)), P(!1));
	}, ne = (e, t) => {
		if (aE(lE()) === "dialog") {
			B(e);
			return;
		}
		let n = iE(e, t);
		cE || (cE = !0, console.warn("[uhuu-components] DocumentOptions: no supported $uhuu.editDialog on this page; a change only calls onChange.")), R((t) => ({
			...t,
			[e.key]: {
				value: n,
				previousValue: $T(_, e)
			}
		})), r?.(e.key, n);
	};
	if (!S || !E || typeof document > "u") return null;
	let re = p(n) ?? d("documentOptions.title"), ie = aE(lE()) === "dialog", ae = (e, t) => {
		let n = p(e.description);
		return n ? /* @__PURE__ */ v("p", {
			id: t,
			className: "uhuu:text-xs uhuu:text-gray-500",
			children: n
		}) : null;
	}, oe = /* @__PURE__ */ y("div", {
		ref: A,
		className: K("uhuu-screen-only uhuu:relative uhuu:flex uhuu:items-center", C && i),
		style: C ? a : void 0,
		onKeyDown: (e) => {
			e.key === "Escape" && N && (e.preventDefault(), e.stopPropagation(), te(!0));
		},
		onBlur: (e) => {
			let t = e.relatedTarget;
			N && t && !A.current?.contains(t) && P(!1);
		},
		children: [/* @__PURE__ */ y($o, {
			ref: j,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-haspopup": "dialog",
			"aria-expanded": N,
			"aria-controls": N ? O : void 0,
			onClick: () => N ? te(!1) : z(),
			className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-700 uhuu:hover:bg-gray-100/80 uhuu:h-7 uhuu:px-2.5 uhuu:gap-1.5",
			children: [/* @__PURE__ */ v(ha, {
				"aria-hidden": "true",
				className: "uhuu:w-3.5 uhuu:h-3.5"
			}), re]
		}), N && /* @__PURE__ */ y("div", {
			ref: M,
			id: O,
			role: "dialog",
			"aria-labelledby": k,
			className: K("uhuu:absolute uhuu:right-0 uhuu:z-50 uhuu:w-72 uhuu:max-w-[calc(100vw-2rem)] uhuu:overflow-y-auto uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:p-3 uhuu:text-gray-900 uhuu:shadow-md", F.side === "top" ? "uhuu:bottom-full uhuu:mb-3" : "uhuu:top-full uhuu:mt-3"),
			style: { maxHeight: F.maxHeight },
			children: [/* @__PURE__ */ v("h2", {
				id: k,
				className: "uhuu:mb-3 uhuu:text-sm uhuu:font-medium uhuu:text-gray-900",
				children: re
			}), /* @__PURE__ */ v("div", {
				className: "uhuu:space-y-3",
				children: b.map((e, t) => {
					let n = `${D}-option-${t}`, r = `${n}-description`, i = e.description ? r : void 0, a = p(e.label) ?? e.key, o = ee(e), s = XT(e) === "toggle", c = Array.isArray(e.options) ? e.options : [], l = s ? void 0 : tE(e, o), u = o == null || o === "" ? d("documentOptions.notSet") : String(o);
					if (ie) {
						let t = s ? d(nE(o) ? "documentOptions.on" : "documentOptions.off") : l ? p(l.label) ?? String(l.value) : u;
						return /* @__PURE__ */ y("div", {
							className: "uhuu:space-y-1.5",
							children: [/* @__PURE__ */ y("button", {
								type: "button",
								"aria-haspopup": "dialog",
								"aria-describedby": i,
								title: d("documentOptions.change", { name: a }),
								onClick: () => B(e),
								className: "uhuu:flex uhuu:w-full uhuu:items-center uhuu:justify-between uhuu:gap-3 uhuu:rounded-md uhuu:border uhuu:border-gray-200 uhuu:bg-(--uhuu-shell-surface) uhuu:px-2.5 uhuu:py-1.5 uhuu:text-left uhuu:transition-colors uhuu:hover:bg-gray-50 uhuu:focus-visible:outline-none uhuu:focus-visible:ring-2 uhuu:focus-visible:ring-gray-200",
								children: [/* @__PURE__ */ y("span", {
									className: "uhuu:min-w-0",
									children: [/* @__PURE__ */ v("span", {
										className: "uhuu:block uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
										children: a
									}), /* @__PURE__ */ v("span", {
										className: "uhuu:block uhuu:truncate uhuu:text-sm uhuu:text-gray-900",
										children: t
									})]
								}), /* @__PURE__ */ v(fa, {
									"aria-hidden": "true",
									className: "uhuu:h-3.5 uhuu:w-3.5 uhuu:shrink-0 uhuu:text-gray-400"
								})]
							}), ae(e, r)]
						}, e.key);
					}
					return s ? /* @__PURE__ */ y("div", {
						className: "uhuu:space-y-1",
						children: [/* @__PURE__ */ y("div", {
							className: "uhuu:flex uhuu:items-center uhuu:justify-between uhuu:gap-3 uhuu:py-1",
							children: [/* @__PURE__ */ v(Pw, {
								htmlFor: n,
								className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
								children: a
							}), /* @__PURE__ */ v(NC, {
								id: n,
								"aria-describedby": i,
								checked: nE(o),
								onCheckedChange: (t) => ne(e, t)
							})]
						}), ae(e, r)]
					}, e.key) : /* @__PURE__ */ y("div", {
						className: "uhuu:space-y-1.5",
						children: [
							/* @__PURE__ */ v(Pw, {
								htmlFor: n,
								className: "uhuu:text-xs uhuu:font-medium uhuu:text-gray-500",
								children: a
							}),
							/* @__PURE__ */ y(hC, {
								id: n,
								"aria-describedby": i,
								value: l ? String(l.value) : sE,
								onChange: (t) => {
									let n = c.find((e) => String(e.value) === t.target.value);
									n && ne(e, n.value);
								},
								className: "uhuu:w-full uhuu:text-sm",
								children: [!l && /* @__PURE__ */ v("option", {
									value: sE,
									disabled: !0,
									children: u
								}), c.map((e, t) => /* @__PURE__ */ v("option", {
									value: String(e.value),
									children: p(e.label) ?? String(e.value)
								}, `${t}:${String(e.value)}`))]
							}),
							ae(e, r)
						]
					}, e.key);
				})
			})]
		})]
	});
	return C ? x(oe, C) : x(/* @__PURE__ */ v("div", {
		"data-uhuu-editor": !0,
		className: K("uhuu-screen-only uhuu:fixed uhuu:right-4 uhuu:bottom-4 uhuu:z-50 uhuu:flex uhuu:items-center uhuu:p-1.5 uhuu:bg-(--uhuu-shell-surface)/90 uhuu:backdrop-blur-md uhuu:border uhuu:border-gray-200/60 uhuu:rounded-lg uhuu:shadow-sm", i),
		style: a,
		children: oe
	}), E);
}
//#endregion
//#region src/index.js
var fE = {
	Pagination: oe,
	Sheet: V,
	FlowArea: bt,
	FlowPage: xt,
	Flow: en,
	FlowColumns: tn,
	FlowText: Pt,
	planFlowChunks: Je,
	planFlowColumnChunks: it,
	createFlowPlanMetrics: qe,
	flowMeasure: he,
	FlowDocument: In,
	markdownToFlowItems: Zn,
	htmlToFlowItems: En,
	planCoverSpread: P,
	resolveSheetSize: M,
	CoverSpread: er,
	usePaginationHold: nr
}, pE = {
	TemplateDataProvider: Q_,
	PageEditor: VT,
	InteractiveModeProvider: Jo,
	useInteractive: Wo,
	useIntegrationAdapter: YT,
	DocumentOptions: dE
};
//#endregion
export { Fg as BRAND_KIT_PUBLIC_BASE_URL, p_ as BrandKitProvider, cn as Editable, pE as EditorShell, qh as ImageBlock, fE as Static, Yg as brandKitCollection, Zg as brandKitEnv, Gg as brandKitLogo, Qg as brandKitMapStyle, zg as brandKitSourceUrl, nn as getDialogProps, ng as imageUrl, Bg as loadBrandKit, m_ as useBrandKit };

//# sourceMappingURL=uhuu-components.es.js.map