(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 0);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:-moz-max-content;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:-moz-max-content;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as f, jsxs as F, Fragment as Te } from "react/jsx-runtime";
import * as p from "react";
import be, { createContext as Ot, useEffect as ce, forwardRef as Vr, useContext as xe, createElement as Bo, useState as ie, useLayoutEffect as za, useMemo as ee, useRef as ue, useCallback as he, memo as af, useReducer as lf, cloneElement as cf } from "react";
import * as os from "react-dom";
import { flushSync as uf, unstable_batchedUpdates as sr, createPortal as df } from "react-dom";
class Nr {
  static handlePageBreakStyles() {
    document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((t) => {
      const n = t.closest("div.uhuu-page-sheet"), r = t.getAttribute("data-paged-css");
      n && r && r.split(" ").filter(Boolean).forEach((s) => n.classList.add(s));
    });
  }
  static handleUhuuDialogs() {
    if (typeof window < "u" && window.$uhuu_renderer) return;
    const t = function() {
      const n = JSON.parse(this.getAttribute("data-uhuu") || "{}");
      window.$uhuu?.editDialog?.(n);
    };
    document?.querySelectorAll("[data-uhuu]").forEach((n) => {
      n.removeEventListener("click", t), n.addEventListener("click", t);
    });
  }
  static handle() {
    Nr.handlePageBreakStyles(), Nr.handleUhuuDialogs();
  }
}
class xi {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
class Ha {
  static PAGE_SIZES = {
    // A series
    A0: { width: 841, height: 1189 },
    A1: { width: 594, height: 841 },
    A2: { width: 420, height: 594 },
    A3: { width: 297, height: 420 },
    A4: { width: 210, height: 297 },
    A5: { width: 148, height: 210 },
    A6: { width: 105, height: 148 },
    // B series
    B0: { width: 1e3, height: 1414 },
    B1: { width: 707, height: 1e3 },
    B2: { width: 500, height: 707 },
    B3: { width: 353, height: 500 },
    B4: { width: 250, height: 353 },
    B5: { width: 176, height: 250 },
    B6: { width: 125, height: 176 },
    // C series (envelopes)
    C0: { width: 917, height: 1297 },
    C1: { width: 648, height: 917 },
    C2: { width: 458, height: 648 },
    C3: { width: 324, height: 458 },
    C4: { width: 229, height: 324 },
    C5: { width: 162, height: 229 },
    C6: { width: 114, height: 162 },
    // US Sizes
    LETTER: { width: 216, height: 279 },
    LEGAL: { width: 216, height: 356 },
    TABLOID: { width: 279, height: 432 },
    LEDGER: { width: 432, height: 279 }
  };
  /**
   * Get all available page size format names
   * @returns {string[]} Array of page size format names
   */
  static getStandardFormats() {
    return ["Custom", "A3", "A4", "A5", "LETTER", "LEGAL"];
  }
  /**
   * Get dimensions for a specific page size
   * @param {Object} options - Configuration options
   * @param {string} options.format - Page size format (e.g., 'A4', 'LETTER')
   * @param {string} [options.orientation='portrait'] - Page orientation ('portrait' or 'landscape')
   * @returns {{ width: number, height: number } | null} Dimensions in millimeters
   */
  static getDimensions({
    format: t,
    orientation: n = "portrait"
  }) {
    const r = this.PAGE_SIZES[t.toUpperCase()];
    return r ? n === "landscape" ? {
      width: r.height,
      height: r.width
    } : {
      width: r.width,
      height: r.height
    } : null;
  }
  /**
   * Convert millimeters to pixels at a given DPI
   * @param {number} mm - Value in millimeters
   * @param {number} dpi - Dots per inch (default: 72)
   * @returns {number} Value in pixels
   */
  static mmToPx(t, n = 72) {
    return t * n / 25.4;
  }
  /**
   * Get dimensions in pixels for a specific page size
   * @param {Object} options - Configuration options
   * @param {string} options.format - Page size format (e.g., 'A4', 'LETTER')
   * @param {string} [options.orientation='portrait'] - Page orientation ('portrait' or 'landscape')
   * @param {number} [options.dpi=72] - Dots per inch
   * @returns {{ width: number, height: number } | null} Dimensions in pixels
   */
  static getDimensionsInPx({
    format: t,
    orientation: n = "portrait",
    dpi: r = 72
  }) {
    const o = this.getDimensions({
      format: t,
      orientation: n
    });
    return o ? {
      width: this.mmToPx(o.width, r),
      height: this.mmToPx(o.height, r)
    } : null;
  }
  /**
   * Check if a format exists
   * @param {string} format - Page size format to check
   * @returns {boolean} Whether the format exists
   */
  static hasFormat(t) {
    return t.toUpperCase() in this.PAGE_SIZES;
  }
  /**
   * Get all available formats
   * @returns {string[]} Array of available format names
   */
  static getAvailableFormats() {
    return Object.keys(this.PAGE_SIZES);
  }
  static toValidCustomDimension(t) {
    const n = typeof t == "string" && t.trim() !== "" ? Number(t) : t;
    return typeof n == "number" && Number.isFinite(n) && n > 10 && n < 4e3 ? n : null;
  }
  static resolveDimensions(t = {}) {
    const { format: n, orientation: r, width: o, height: s } = t, i = typeof n == "string" ? n : "", a = !i || i.toLowerCase() === "custom", l = this.toValidCustomDimension(o), c = this.toValidCustomDimension(s);
    if (a && l !== null && c !== null)
      return { width: l, height: c };
    const d = a ? "A4" : i;
    return this.getDimensions({ format: d || "A4", orientation: r }) ?? this.getDimensions({ format: "A4", orientation: r }) ?? { width: 210, height: 297 };
  }
  static pageParams(t, n = {}) {
    if (typeof document > "u") return;
    const { format: r, orientation: o, bleed: s, showBleed: i, compatibility: a, printCssRaw: l, printCssUrl: c, preview: d } = n, u = this.resolveDimensions(n);
    return u && (document.documentElement.style.setProperty("--uhuu-page-width", `${u.width}mm`), document.documentElement.style.setProperty("--uhuu-page-height", `${u.height}mm`)), document.documentElement.style.setProperty("--uhuu-page-bleed", `${Math.min(Math.max(s ?? 0, 0), 400)}mm`), { page: {
      paginationType: t,
      format: r,
      orientation: o,
      bleed: s,
      width: u?.width,
      height: u?.height,
      preview: d,
      showBleed: i,
      compatibility: a,
      printCssRaw: l,
      printCssUrl: c
    } };
  }
}
const Tt = Ot(null), ff = ({ config: e, children: t }) => /* @__PURE__ */ f(Tt.Provider, { value: e, children: t }), zo = ({ children: e, className: t, setup: n }) => {
  const r = Ha.pageParams("static", n);
  ce(() => {
    r?.page?.compatibility && Nr.handle();
    const s = xi.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      s && xi.removePageStyles(s);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(ff, { config: r, children: /* @__PURE__ */ f("div", { className: o, children: e }) });
}, Ho = Vr(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: s,
  "data-page-key": i
}, a) => {
  const l = xe(Tt), c = s ?? l?.page?.showBleed ?? !1;
  return /* @__PURE__ */ F(
    "div",
    {
      className: `uhuu-page-sheet ${t}`,
      style: n,
      ref: a,
      "data-page-key": i,
      children: [
        e,
        o && o({ pageNo: r }),
        c && /* @__PURE__ */ f("div", { className: "uhuu-bleed-area" })
      ]
    }
  );
});
function Wt() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function Rt(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function Rn(e) {
  return typeof e == "string" && e ? e : null;
}
function Ka(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function Ga({
  itemIndex: e = -1,
  fragmentIndexes: t = [],
  groupKeys: n = [],
  pageIndex: r = 0,
  pageCount: o = 1,
  itemCount: s = 0,
  previousSourceIndex: i,
  // Internal render fast path: the React renderer already knows this while
  // walking a fragment, so avoid re-running `indexOf` for every visible item.
  fragmentIndex: a
} = {}) {
  const l = Number.isInteger(a) ? a : t.indexOf(e), c = Rn(n[e]), d = l > 0 ? t[l - 1] : null, u = d === null ? null : Rn(n[d]), h = l > 0 ? t[l - 1] : i ?? (e > 0 ? e - 1 : null), m = h !== null ? Rn(n[h]) : null, v = !!(c && m !== c), g = !!(c && u !== c);
  return {
    pageIndex: r,
    pageCount: o,
    itemIndex: e,
    fragmentIndex: l,
    groupKey: c ?? void 0,
    isFirst: e === 0,
    isLast: s > 0 && e === s - 1,
    isFirstInFragment: l === 0,
    isLastInFragment: l >= 0 && l === t.length - 1,
    isFirstInGroup: v,
    isFirstInGroupOnPage: g,
    // `isContinuation` refers to the virtual Flow page. `isGroupContinuation`
    // is the narrower signal for a repeated group header.
    isContinuation: r > 0,
    isGroupContinuation: !!(g && !v && m === c)
  };
}
function hf() {
  return {
    /** Leaf-item reads during chunking, keep lookahead, and avoid-break scans. */
    scannedItems: 0,
    /** Calls into the leaf chunker: one per page per track, plus retries. */
    chunkerCalls: 0,
    /**
     * Fresh-page retries computed, whether or not the retry was taken.
     * Unconstrained sequential content computes none: a retry is only reached
     * when a page already holds content and the next run either declares a
     * keep/avoid-break constraint or does not fit the remaining space.
     */
    freshPageAttempts: 0,
    /** Output pages produced. */
    pages: 0
  };
}
function ss({
  heights: e = [],
  keys: t = [],
  metas: n = [],
  availableHeight: r = 0,
  headerGroupKeys: o = [],
  headerGroupHeights: s = {},
  headerGroupRepeats: i = {},
  previousHeaderGroupKey: a,
  onUnplaceableItem: l,
  // Internal, used by distributeFlowColumns. `window` paginates a slice of the
  // caller's arrays without copying them, and `maxChunks` stops once that many
  // chunks are closed. Chunks are built strictly left to right and the group
  // header pass below only looks backwards, so a bounded run returns exactly
  // the chunks an unbounded run would have produced first.
  window: c,
  maxChunks: d = 0,
  metrics: u
} = {}) {
  const h = c?.indexes, m = c?.offset ?? 0, v = h ? Math.max(0, h.length - m) : e.length, g = h ? (k) => h[m + k] : (k) => k, b = Rt(r) || Number.POSITIVE_INFINITY, w = [{ indexes: [], keys: [] }];
  let C = 0;
  const S = () => w[w.length - 1], y = () => {
    const k = S().indexes;
    return k.length ? k[k.length - 1] : null;
  }, I = () => S().indexes.length > 0 || !!S().unplaceable, R = (k) => Rn(o[g(k)]), N = (k) => Rt(s[k] ?? 0), x = (k) => i[k] !== !1, P = (k, M) => {
    const O = R(k);
    return O ? M == null ? (k > 0 ? R(k - 1) : Rn(a)) !== O || x(O) : R(M) !== O : !1;
  }, E = (k, M) => {
    const O = R(k);
    return Rt(e[g(k)]) + (O && P(k, M) ? N(O) : 0);
  }, D = (k) => {
    const M = n[g(k)] ?? {};
    return M.avoidBreakInside && M.groupKey ? M.groupKey : null;
  }, $ = (k, M, O) => {
    let H = 0, G = O;
    for (let K = k; K < v && D(K) === M; K += 1)
      u && (u.scannedItems += 1), H += E(K, G), G = K;
    return H;
  }, z = (k, M, { currentHeight: O, ownHeight: H, stopEarly: G } = {}) => {
    let K = 0, j = k;
    for (let V = 1; V <= M; V += 1) {
      const B = k + V;
      if (B >= v || (u && (u.scannedItems += 1), K += E(B, j), G && O + (H + K) > b)) break;
      j = B;
    }
    return K;
  }, L = () => {
    I() && (w.push({ indexes: [], keys: [] }), C = 0);
  }, W = (k, M, O) => {
    const H = t[g(k)] ?? String(g(k)), G = R(k) ?? void 0, K = G && P(k, null) ? N(G) : 0, j = {
      index: k,
      key: H,
      height: M,
      headerHeight: K,
      requiredHeight: O,
      availableHeight: b,
      groupKey: G,
      reason: K > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    S().unplaceable = j, l?.(j), w.push({ indexes: [], keys: [] }), C = 0;
  };
  for (let k = 0; k < v && !(d && w.length > d); k += 1) {
    u && (u.scannedItems += 1);
    const M = n[g(k)] ?? {}, O = Rt(e[g(k)]), H = t[g(k)] ?? String(g(k));
    M.breakBefore && L();
    const G = D(k), K = k > 0 ? D(k - 1) : null;
    G && G !== K && I() && C + $(k, G, y()) > b && L();
    let j = y(), V = E(k, j);
    if (I() && V > b - C && (L(), j = null, V = E(k, j)), V > b) {
      W(k, O, V);
      continue;
    }
    const B = I(), U = B ? z(k, Ka(M.keepWithNext), {
      currentHeight: C,
      ownHeight: V,
      stopEarly: Number.isFinite(b)
    }) : 0, J = V + U;
    if (B && C + J > b && (L(), j = null, V = E(k, j), V > b)) {
      W(k, O, V);
      continue;
    }
    S().indexes.push(k), S().keys.push(H), C += V, M.breakAfter && k < v - 1 && L();
  }
  const A = w.filter((k) => k.indexes.length > 0 || !!k.unplaceable);
  if (!A.length)
    return u && !d && (u.pages = 1), [{ indexes: [], keys: [] }];
  const T = d ? A.slice(0, d) : A;
  return u && !d && (u.pages = T.length), T.map((k) => {
    if (!k.indexes.length) return k;
    const M = [];
    for (let O = 0; O < k.indexes.length; O += 1) {
      const H = k.indexes[O], G = R(H), K = O > 0 ? k.indexes[O - 1] : null;
      if (!G || !P(H, K)) continue;
      const j = H > 0 ? R(H - 1) : null;
      M.push({
        groupKey: G,
        itemIndex: H,
        isContinuation: j === G
      });
    }
    return M.length ? { ...k, groupHeaders: M } : k;
  });
}
function mf(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (s, i) => s + Rt(t[i]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (s, i) => s + Rt(n[i.groupKey]),
    0
  );
  return r + o;
}
function pf(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function gf(e, t, n, r, o, s) {
  const i = (l) => t[n + l], a = {
    indexes: (e.indexes ?? []).map(i).filter(Number.isInteger),
    keys: [...e.keys ?? []],
    ...s !== void 0 ? { previousSourceIndex: s } : {}
  };
  return e.groupHeaders?.length && (a.groupHeaders = e.groupHeaders.map((l) => ({
    ...l,
    itemIndex: i(l.itemIndex),
    isContinuation: l.isContinuation || l.itemIndex === 0 && s !== void 0 && o?.[s] === l.groupKey
  }))), e.unplaceable && (a.unplaceable = {
    ...e.unplaceable,
    index: i(e.unplaceable.index),
    ...r ? { columnId: r } : {}
  }), a;
}
function ir(e, t, n, r, o, s, i) {
  if (n >= t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const a = pf(e, o, s);
  e.metrics && (e.metrics.chunkerCalls += 1);
  const c = ss({
    heights: e.heights,
    keys: e.keys,
    metas: e.metas,
    headerGroupKeys: e.headerGroupKeys,
    headerGroupHeights: a.headerGroupHeights,
    headerGroupRepeats: a.headerGroupRepeats,
    previousHeaderGroupKey: i === void 0 ? void 0 : e.headerGroupKeys?.[i],
    availableHeight: r,
    window: { indexes: t, offset: n },
    maxChunks: 1,
    metrics: e.metrics
  })[0] ?? { indexes: [], keys: [] }, d = gf(
    c,
    t,
    n,
    s,
    a.headerGroupKeys,
    i
  ), u = d.unplaceable ? 1 : d.indexes.length;
  return {
    chunk: d,
    consumed: u,
    height: mf(
      d,
      e.heights ?? [],
      a.headerGroupHeights ?? {}
    )
  };
}
function Wa({ nodes: e = [], itemCount: t = 0 } = {}) {
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = (i) => {
    throw new TypeError(`[uhuu-components] Invalid Static.FlowColumns layout: ${i}`);
  }, s = (i, a) => {
    (!Number.isInteger(i) || i < 0 || i >= t) && o(`${a} references out-of-range item index ${String(i)}.`), r.has(i) && o(`item index ${i} occurs more than once.`), r.add(i);
  };
  e.forEach((i, a) => {
    if ((!i || i.kind !== "item" && i.kind !== "columns") && o(`node ${a} has an unsupported kind.`), i.kind === "item") {
      s(i.index, `node ${a}`);
      return;
    }
    (typeof i.id != "string" || !i.id) && o(`column group ${a} needs a stable id.`), n.has(i.id) && o(`column group id "${i.id}" occurs more than once.`), n.add(i.id);
    const l = /* @__PURE__ */ new Set();
    (i.columns ?? []).forEach((c, d) => {
      (!c || typeof c.id != "string" || !c.id) && o(`column ${d} in group "${i.id}" needs a stable id.`), l.has(c.id) && o(`column id "${c.id}" occurs more than once in group "${i.id}".`), l.add(c.id), (c.indexes ?? []).forEach((u) => {
        s(u, `column "${c.id}" in group "${i.id}"`);
      });
    });
  });
  for (let i = 0; i < t; i += 1)
    r.has(i) || o(`item index ${i} is omitted.`);
  return !0;
}
function Ci(e, t, n, r, o) {
  const s = Rt(r.chunk.unplaceable?.requiredHeight);
  if (s > 0 && s <= o) return "move";
  const i = t[n];
  if (i === void 0) return "no";
  const a = e.metas?.[i] ?? {};
  return Ka(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey) ? "compare" : "no";
}
function Nt(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function Va({
  nodes: e = [],
  heights: t = [],
  keys: n = [],
  metas: r = [],
  availableHeight: o = 0,
  headerGroupKeys: s = [],
  headerGroupHeights: i = {},
  headerGroupRepeats: a = {},
  columnHeaderGroupHeights: l = {},
  columnHeaderGroupRepeats: c = {},
  onUnplaceableItem: d,
  /** Optional `createFlowPlanMetrics()` object, filled in as the plan is built. */
  metrics: u
} = {}) {
  Wa({ nodes: e, itemCount: t.length });
  const h = Rt(o) || Number.POSITIVE_INFINITY, m = {
    heights: t,
    keys: n,
    metas: r,
    headerGroupKeys: s,
    headerGroupHeights: i,
    headerGroupRepeats: a,
    columnHeaderGroupHeights: l,
    columnHeaderGroupRepeats: c,
    metrics: u
  }, v = [{ indexes: [], keys: [], layout: [] }];
  let g = 0;
  const b = () => v[v.length - 1], w = () => {
    Nt(b()) && (v.push({ indexes: [], keys: [], layout: [] }), g = 0);
  }, C = (y) => {
    b().indexes.push(...y.indexes ?? []), b().keys.push(...y.keys ?? []), !b().unplaceable && y.unplaceable && (b().unplaceable = y.unplaceable), y.unplaceable && d?.(y.unplaceable);
  };
  for (let y = 0; y < e.length; y += 1) {
    const I = e[y];
    if (!I || I.kind !== "item" && I.kind !== "columns") continue;
    if (I.kind === "item") {
      const N = [];
      let x = y;
      for (; x < e.length && e[x]?.kind === "item"; ) {
        const E = Number(e[x].index);
        Number.isInteger(E) && E >= 0 && E < t.length && N.push(E), x += 1;
      }
      y = x - 1;
      let P = 0;
      for (; P < N.length; ) {
        h - g <= 0 && Nt(b()) && w();
        const E = N[P];
        r[E]?.breakBefore && Nt(b()) && w();
        const D = P > 0 ? N[P - 1] : void 0;
        let $ = ir(
          m,
          N,
          P,
          h - g,
          void 0,
          void 0,
          D
        );
        if (Nt(b())) {
          const W = Ci(
            m,
            N,
            P,
            $,
            h
          );
          if (W !== "no") {
            u && (u.freshPageAttempts += 1);
            const A = ir(
              m,
              N,
              P,
              h,
              void 0,
              void 0,
              D
            );
            (W === "move" || A.consumed > $.consumed) && (w(), $ = A);
          }
        }
        b().layout.push({ kind: "items", chunk: $.chunk }), C($.chunk), g += $.height, P += $.consumed, $.consumed === 0 && (P += 1);
        const z = $.chunk.indexes?.at(-1) ?? $.chunk.unplaceable?.index;
        (P < N.length || $.chunk.unplaceable || z !== void 0 && r[z]?.breakAfter) && w();
      }
      continue;
    }
    const R = (I.columns ?? []).map((N) => ({
      id: String(N?.id ?? ""),
      indexes: (N?.indexes ?? []).filter(
        (x) => Number.isInteger(x) && x >= 0 && x < t.length
      ),
      cursor: 0
    })).filter((N) => N.id && N.indexes.length);
    if (R.length)
      for (; R.some((N) => N.cursor < N.indexes.length); ) {
        h - g <= 0 && Nt(b()) && w(), R.some((k) => {
          const M = k.indexes[k.cursor];
          return M !== void 0 && r[M]?.breakBefore;
        }) && Nt(b()) && w();
        const x = h - g;
        let P = R.map((k) => ir(
          m,
          k.indexes,
          k.cursor,
          x,
          I.id,
          k.id,
          k.cursor > 0 ? k.indexes[k.cursor - 1] : void 0
        )), E;
        const D = () => E ??= R.map((k) => (u && (u.freshPageAttempts += 1), ir(
          m,
          k.indexes,
          k.cursor,
          h,
          I.id,
          k.id,
          k.cursor > 0 ? k.indexes[k.cursor - 1] : void 0
        )));
        if (Nt(b()) && R.some((k, M) => {
          const O = Ci(
            m,
            k.indexes,
            k.cursor,
            P[M],
            h
          );
          return O === "no" ? !1 : O === "move" ? !0 : D()[M].consumed > P[M].consumed;
        }) && (w(), P = D()), !P.some((k) => k.consumed > 0)) {
          const k = R.find((M) => M.cursor < M.indexes.length);
          throw new TypeError(
            `[uhuu-components] Static.FlowColumns made no pagination progress${k ? ` in column "${k.id}"` : ""}.`
          );
        }
        const z = R.map((k, M) => ({
          id: k.id,
          chunk: P[M].chunk
        }));
        b().layout.push({
          kind: "columns",
          id: String(I.id ?? "columns"),
          columns: z
        });
        for (const { chunk: k } of z) C(k);
        const L = Math.max(0, ...P.map((k) => k.height));
        g += L, R.forEach((k, M) => {
          k.cursor += P[M].consumed;
        });
        const W = R.some((k) => k.cursor < k.indexes.length), A = P.some((k) => {
          const M = k.chunk.indexes?.at(-1) ?? k.chunk.unplaceable?.index;
          return M !== void 0 && r[M]?.breakAfter;
        }), T = P.some((k) => !!k.chunk.unplaceable);
        (W || A || T) && w();
      }
  }
  const S = v.filter(Nt);
  return S.length ? (u && (u.pages = S.length), S) : (u && (u.pages = 1), [{ indexes: [], keys: [], layout: [] }]);
}
function is(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function un(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, s = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + s;
}
function as(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: ja(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function ja(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function ls(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function jr(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function kr(e) {
  const t = {};
  for (const n of e) {
    const r = jr(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function Ir(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, un(r, t)));
  }
  return n;
}
function cs(e) {
  return Array.from(e.querySelectorAll('[data-uhuu-flow-item="true"]'));
}
function us(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
const vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getEffectiveScale: is,
  getOuterHeight: un,
  hashString: us,
  parseKeepWithNext: ja,
  readFlowItemElements: cs,
  readHeaderGroupHeights: Ir,
  readHeaderGroupKey: jr,
  readHeaderGroupRepeats: kr,
  readItemMeta: as,
  serializeKeepWithNext: ls
}, Symbol.toStringTag, { value: "Module" })), bf = ss, yf = Va, Mn = p.createContext(null), wf = typeof window > "u" ? p.useEffect : p.useLayoutEffect, Pr = /* @__PURE__ */ new Set();
function Rr(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Ua(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function et(e) {
  return Number.parseFloat(e || "0") || 0;
}
function xf(e, t) {
  const n = (r) => {
    const o = window.getComputedStyle(r);
    return et(o.paddingTop) + et(o.paddingBottom) + et(o.borderTopWidth) + et(o.borderBottomWidth);
  };
  for (const r of Array.from(
    e.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const o = window.getComputedStyle(r), s = et(o.marginTop) + et(o.marginBottom);
    if (n(r) > 0.01 || s > 0.01)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps."
      );
    const i = [];
    for (const l of Array.from(
      r.querySelectorAll(":scope > [data-uhuu-flow-column]")
    )) {
      const c = window.getComputedStyle(l), d = et(c.marginTop) + et(c.marginBottom);
      if (n(l) > 0.01 || d > 0.01 || et(c.rowGap) > 0.01 || et(c.minHeight) > 0.01 || c.maxHeight !== "none")
        throw new TypeError(
          "[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps."
        );
      const u = Array.from(
        l.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        )
      ).reduce((h, m) => h + un(m, t), 0);
      i.push(u);
    }
    const a = Math.max(0, ...i);
    if (un(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function Cf(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return Sf(e, t, n);
  const o = cs(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const s = e.getBoundingClientRect(), i = is(e), a = s.height ? s.height / i : e.clientHeight, l = Number.isFinite(a) && a > 0, c = o.map((S) => un(S, i)), d = o.map(as), u = o.map((S, y) => S.dataset.uhuuFlowKey || String(y)), h = o.map(jr), m = kr(o), v = Ir(t, i), g = [], b = l ? a : c.reduce((S, y) => S + y, 0) + Object.values(v).reduce((S, y) => S + y, 0);
  l || n.onZeroHeight?.();
  const w = bf({
    heights: c,
    keys: u,
    metas: d,
    availableHeight: b,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: m,
    onUnplaceableItem: (S) => {
      g.push(S), n.onUnplaceableItem?.(S);
    }
  }), C = us(JSON.stringify({
    version: 2,
    flowId: r,
    availableHeight: Math.round(b * 100) / 100,
    heights: c.map((S) => Math.round(S * 100) / 100),
    keys: u,
    metas: d,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: m,
    unplaceableItems: g
  }));
  return { flowId: r, chunks: w, signature: C, unplaceableItems: g };
}
function Sf(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = cs(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const s = e.getBoundingClientRect(), i = is(e);
  xf(t, i);
  const a = s.height ? s.height / i : e.clientHeight, l = Number.isFinite(a) && a > 0, c = Math.max(
    -1,
    ...o.map((N) => Number.parseInt(N.dataset.uhuuFlowIndex ?? "-1", 10))
  ), d = Array.from({ length: c + 1 }, () => 0), u = Array.from({ length: c + 1 }, (N, x) => String(x)), h = Array.from({ length: c + 1 }, () => ({})), m = Array.from(
    { length: c + 1 },
    () => {
    }
  );
  for (const N of o) {
    const x = Number.parseInt(N.dataset.uhuuFlowIndex ?? "-1", 10);
    !Number.isInteger(x) || x < 0 || (d[x] = un(N, i), u[x] = N.dataset.uhuuFlowKey || String(x), h[x] = as(N), m[x] = jr(N));
  }
  const v = Array.from(t.children).flatMap((N) => {
    if (!(N instanceof HTMLElement)) return [];
    if (N.dataset.uhuuFlowLayoutNode === "item") {
      const P = N.matches('[data-uhuu-flow-item="true"]') ? N : N.querySelector('[data-uhuu-flow-item="true"]'), E = Number.parseInt(P?.dataset.uhuuFlowIndex ?? "-1", 10);
      return Number.isInteger(E) && E >= 0 ? [{ kind: "item", index: E }] : [];
    }
    if (N.dataset.uhuuFlowLayoutNode !== "columns") return [];
    const x = Array.from(
      N.querySelectorAll(":scope > [data-uhuu-flow-column]")
    ).flatMap((P) => {
      const E = P.dataset.uhuuFlowColumn;
      if (!E) return [];
      const D = Array.from(
        P.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map(($) => Number.parseInt($.dataset.uhuuFlowIndex ?? "-1", 10)).filter(($) => Number.isInteger($) && $ >= 0);
      return [{ id: E, indexes: D }];
    });
    return x.length ? [{ kind: "columns", id: N.dataset.uhuuFlowLayoutId || "columns", columns: x }] : [];
  }), g = kr(o), b = Ir(t, i), w = {}, C = {};
  for (const N of Array.from(
    t.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const x = N.dataset.uhuuFlowLayoutId;
    if (x) {
      w[x] = {}, C[x] = {};
      for (const P of Array.from(
        N.querySelectorAll(":scope > [data-uhuu-flow-column]")
      )) {
        const E = P.dataset.uhuuFlowColumn;
        if (!E) continue;
        const D = Array.from(
          P.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        w[x][E] = Ir(P, i), C[x][E] = kr(D);
      }
    }
  }
  const S = [], y = l ? a : d.reduce((N, x) => N + x, 0) + Object.values(b).reduce((N, x) => N + x, 0);
  l || n.onZeroHeight?.();
  const I = yf({
    nodes: v,
    heights: d,
    keys: u,
    metas: h,
    availableHeight: y,
    headerGroupKeys: m,
    headerGroupHeights: b,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: C,
    onUnplaceableItem: (N) => {
      S.push(N), n.onUnplaceableItem?.(N);
    }
  }), R = us(JSON.stringify({
    version: 3,
    flowId: r,
    availableHeight: Math.round(y * 100) / 100,
    nodes: v,
    heights: d.map((N) => Math.round(N * 100) / 100),
    keys: u,
    metas: h,
    headerGroupKeys: m,
    headerGroupHeights: b,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: C,
    unplaceableItems: S
  }));
  return { flowId: r, chunks: I, signature: R, unplaceableItems: S };
}
function Ya({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = p.useContext(Mn), s = p.useRef(null), i = p.useRef(""), a = p.useRef(!1), l = p.useRef(!1), c = p.useRef(/* @__PURE__ */ new Set());
  return wf(() => {
    if (o?.mode !== "measure" || !o.registerMeasurement || !s.current)
      return;
    const d = s.current;
    let u = null, h = null;
    i.current = "";
    const m = /* @__PURE__ */ new Set(), v = () => {
      if (h) {
        for (const C of Array.from(m))
          d.contains(C) || (h.unobserve(C), m.delete(C));
        d.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        ).forEach((C) => {
          m.has(C) || (m.add(C), h?.observe(C));
        });
      }
    };
    function g() {
      v();
      const C = d.querySelectorAll('[data-uhuu-flow="true"]');
      C.length > 1 && !a.current && Wt() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const S = C[0];
      if (!S) return;
      const y = Cf(d, S, {
        onZeroHeight: () => {
          l.current || !Wt() || (l.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (I) => {
          c.current.has(I.key) || !Wt() || (c.current.add(I.key), console.warn(
            `[uhuu-components] Static.Flow item "${I.key}" cannot fit in its FlowArea (${Math.round(I.requiredHeight)}px required > ${Math.round(I.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`
          ));
        }
      });
      !y || y.signature === i.current || (i.current = y.signature, r?.(y), o?.registerMeasurement?.(y));
    }
    const b = () => {
      u === null && (u = window.requestAnimationFrame(() => {
        u = null, g();
      }));
    };
    h = new ResizeObserver(b), h.observe(d), v(), b();
    const w = new MutationObserver(() => {
      b();
    });
    return w.observe(d, {
      attributes: !0,
      attributeFilter: [
        "class",
        "style",
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
      u !== null && window.cancelAnimationFrame(u), h?.disconnect(), w.disconnect();
    };
  }, [o, r]), /* @__PURE__ */ f("div", { ref: s, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function qa({
  children: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: s = "",
  flowAreaStyle: i,
  onFlowMeasurement: a
}) {
  return /* @__PURE__ */ F(
    "div",
    {
      className: `h-full w-full flex flex-col ${r}`,
      style: o,
      "data-uhuu-flow-page": "true",
      children: [
        t,
        /* @__PURE__ */ f(
          Ya,
          {
            className: `flex-1 min-h-0 ${s}`,
            style: i,
            onFlowMeasurement: a,
            children: e
          }
        ),
        n
      ]
    }
  );
}
function Xa(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function Ko(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    t.has(n) || t.set(n, r);
  }), t;
}
function Za(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    let r = t.get(n.itemIndex);
    r || (r = /* @__PURE__ */ new Set(), t.set(n.itemIndex, r)), r.add(n.groupKey);
  }
  return t;
}
function Ja({
  id: e,
  items: t,
  getKey: n,
  renderItem: r,
  getItemMeta: o,
  metaDefaults: s,
  getItemType: i,
  getItemGroup: a,
  renderGroupHeader: l,
  className: c = "",
  itemClassName: d,
  groupHeaderClassName: u,
  renderUnplaceableItem: h
}) {
  const m = p.useContext(Mn), v = m?.chunksByFlowId?.[e], g = m?.mode === "visible" && v ? v[m.pageIndex] : void 0, w = (m?.mode === "visible" && v ? g?.indexes ?? [] : m?.mode === "visible" && m.pageIndex > 0 ? [] : t.map((x, P) => P)).filter((x) => Number.isInteger(x) && x >= 0 && x < t.length), C = t.map((x, P) => Xa(a?.(x, P))), S = C.map((x) => x?.key), y = Ko(w), I = l ? Za(g?.groupHeaders) : void 0, R = m?.mode === "visible" ? m.pageIndex : 0, N = m?.mode === "visible" && v ? v.length : 1;
  return p.useEffect(() => {
    if (!Wt() || !s || !Object.keys(s).length || !t.length)
      return;
    const x = `${e}:${Object.keys(s).join("|")}`;
    Pr.has(x) || t.some((E, D) => !!(i?.(E, D) ?? Rr(E))) || (Pr.add(x), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, i]), /* @__PURE__ */ F(
    "div",
    {
      className: c,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        g?.unplaceable && (h?.(g.unplaceable, { flowId: e, pageIndex: R, pageCount: N }) ?? /* @__PURE__ */ F(
          "div",
          {
            role: "alert",
            className: "uhuu-flow-unplaceable",
            "data-uhuu-flow-unplaceable": "true",
            "data-uhuu-flow-unplaceable-key": g.unplaceable.key,
            children: [
              "Unable to fit “",
              g.unplaceable.key,
              "” on a page. Reduce its height or split it."
            ]
          }
        )),
        w.map((x) => {
          const P = t[x];
          if (P === void 0) return null;
          const E = n(P, x), D = C[x], z = {
            ...Ga({
              itemIndex: x,
              fragmentIndexes: w,
              fragmentIndex: y.get(x) ?? -1,
              groupKeys: S,
              pageIndex: R,
              pageCount: N,
              itemCount: t.length
            }),
            flowId: e,
            itemKey: E,
            item: P
          }, L = i?.(P, x) ?? Rr(P), W = Ua(
            L ? s?.[L] : void 0,
            o?.(P, x)
          ), A = typeof d == "function" ? d(P, x) : d, T = !!(D && I?.get(x)?.has(D.key)), k = !!(D && l && (T || !I && z.isFirstInGroupOnPage && (z.isFirstInGroup || D.repeatHeader !== !1))), M = typeof u == "function" ? D ? u(D, z) : void 0 : u;
          return /* @__PURE__ */ F(p.Fragment, { children: [
            k && D && /* @__PURE__ */ f(
              "div",
              {
                className: M,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": D.key,
                children: l?.(D, z)
              }
            ),
            /* @__PURE__ */ f(
              "div",
              {
                className: A,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(E),
                "data-uhuu-flow-index": x,
                "data-uhuu-flow-break-before": W.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": W.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": ls(W.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": W.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": W.groupKey,
                "data-uhuu-flow-header-group-key": D?.key,
                "data-uhuu-flow-header-repeat": D ? D.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(P, x, z)
              }
            )
          ] }, E);
        })
      ]
    }
  );
}
function Nf({
  id: e,
  items: t,
  layout: n,
  getKey: r,
  renderItem: o,
  getItemMeta: s,
  metaDefaults: i,
  getItemType: a,
  getItemGroup: l,
  renderGroupHeader: c,
  className: d = "",
  itemClassName: u,
  groupHeaderClassName: h,
  renderUnplaceableItem: m,
  getColumnGroupProps: v,
  getColumnProps: g,
  getColumnItemProps: b
}) {
  Wa({ nodes: n, itemCount: t.length });
  const w = p.useContext(Mn), C = w?.chunksByFlowId?.[e], S = w?.mode === "visible" && C ? C[w.pageIndex] : void 0, y = w?.mode !== "visible", I = w?.mode === "visible" ? w.pageIndex : 0, R = w?.mode === "visible" && C ? C.length : 1, N = t.map((L, W) => Xa(l?.(L, W))), x = N.map((L) => L?.key), P = {
    flowId: e
  };
  p.useEffect(() => {
    if (!Wt() || !i || !Object.keys(i).length || !t.length)
      return;
    const L = `${e}:columns:${Object.keys(i).join("|")}`;
    Pr.has(L) || t.some((A, T) => !!(a?.(A, T) ?? Rr(A))) || (Pr.add(L), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, a]);
  const E = (L) => L ? m?.(L, { flowId: e, pageIndex: I, pageCount: R }) ?? /* @__PURE__ */ F(
    "div",
    {
      role: "alert",
      className: "uhuu-flow-unplaceable",
      "data-uhuu-flow-unplaceable": "true",
      "data-uhuu-flow-unplaceable-key": L.key,
      "data-uhuu-flow-column-id": L.columnId,
      children: [
        "Unable to fit “",
        L.key,
        "” on a page. Reduce its height or split it."
      ]
    }
  ) : null, D = (L, W, A, T = !1, k) => {
    const M = L.filter((K) => Number.isInteger(K) && K >= 0 && K < t.length), O = Ko(M), H = k ? Ko(k) : void 0, G = c ? Za(W?.groupHeaders) : void 0;
    return M.map((K) => {
      const j = t[K];
      if (j === void 0) return null;
      const V = r(j, K), B = N[K], U = O.get(K) ?? -1, J = H?.get(K) ?? -1, X = {
        ...Ga({
          itemIndex: K,
          fragmentIndexes: M,
          fragmentIndex: U,
          groupKeys: x,
          pageIndex: I,
          pageCount: R,
          itemCount: t.length,
          previousSourceIndex: W?.previousSourceIndex ?? (J > 0 ? k?.[J - 1] : void 0)
        }),
        flowId: e,
        itemKey: V,
        item: j
      }, te = a?.(j, K) ?? Rr(j), ae = Ua(
        te ? i?.[te] : void 0,
        s?.(j, K)
      ), ge = typeof u == "function" ? u(j, K) : u, le = A?.(K), Ne = !!(B && G?.get(K)?.has(B.key)), $e = !!(B && c && (Ne || !G && X.isFirstInGroupOnPage && (X.isFirstInGroup || B.repeatHeader !== !1))), yt = typeof h == "function" ? B ? h(B, X) : void 0 : h;
      return /* @__PURE__ */ F(p.Fragment, { children: [
        $e && B && /* @__PURE__ */ f(
          "div",
          {
            className: yt,
            style: { display: "flow-root" },
            "data-uhuu-flow-group-header": "true",
            "data-uhuu-flow-header-group-key": B.key,
            children: c?.(B, X)
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            className: [ge, le?.className].filter(Boolean).join(" "),
            style: { display: "flow-root", ...le?.style },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-layout-node": T ? "item" : void 0,
            "data-uhuu-flow-key": String(V),
            "data-uhuu-flow-index": K,
            "data-uhuu-flow-break-before": ae.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": ae.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": ls(ae.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": ae.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": ae.groupKey,
            "data-uhuu-flow-header-group-key": B?.key,
            "data-uhuu-flow-header-repeat": B ? B.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(j, K, X)
          }
        )
      ] }, V);
    });
  }, $ = new Map(
    n.filter((L) => L.kind === "columns").map((L) => [L.id, L])
  ), z = y ? n : S?.layout ?? [];
  return /* @__PURE__ */ f(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: z.map((L, W) => {
        if (L.kind === "item")
          return /* @__PURE__ */ f(p.Fragment, { children: D([L.index], void 0, void 0, !0) }, `item:${L.index}:${W}`);
        if (L.kind === "items")
          return /* @__PURE__ */ F(p.Fragment, { children: [
            E(L.chunk.unplaceable),
            D(L.chunk.indexes, L.chunk, void 0, !0)
          ] }, `items:${W}`);
        const A = y ? L : $.get(L.id);
        if (!A) return null;
        const T = new Map(A.columns.map((O) => [O.id, O])), k = y ? A.columns.map((O) => ({ id: O.id })) : L.columns, M = v?.(A, P);
        return /* @__PURE__ */ f(
          "div",
          {
            className: M?.className,
            style: {
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              ...M?.style
            },
            "data-uhuu-flow-layout-node": "columns",
            "data-uhuu-flow-layout-id": A.id,
            children: k.map((O) => {
              const H = T.get(O.id);
              if (!H) return null;
              const G = g?.(A, H, P), K = O.chunk?.indexes ?? H.indexes;
              return /* @__PURE__ */ F(
                "div",
                {
                  className: G?.className,
                  style: {
                    minWidth: 0,
                    flex: "1 1 0%",
                    display: "flex",
                    flexDirection: "column",
                    ...G?.style
                  },
                  "data-uhuu-flow-column": H.id,
                  children: [
                    E(O.chunk?.unplaceable),
                    D(
                      K,
                      O.chunk,
                      (j) => b?.(
                        A,
                        H,
                        j,
                        P
                      ),
                      !1,
                      H.indexes
                    )
                  ]
                },
                H.id
              );
            })
          },
          `columns:${A.id}:${W}`
        );
      })
    }
  );
}
const fn = (e, t) => {
  const n = e.dialog;
  if (!n) return {};
  const r = typeof window < "u" && window.$uhuu_renderer;
  return t?.page?.paginationType === "dynamic" ? {
    "data-uhuu": JSON.stringify(n)
  } : r ? {
    "data-uhuu": ""
  } : {
    onClick: (o) => {
      typeof window < "u" && window.$uhuu_renderer || (o.stopPropagation(), window.$uhuu?.editDialog(n));
    },
    "data-uhuu": ""
  };
}, kf = (e) => {
  const t = xe(Tt);
  return /* @__PURE__ */ f(
    "div",
    {
      className: e.className,
      ...fn(e, t),
      children: e.children
    }
  );
};
function If(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Qa(e, t, n, r = "") {
  const o = If(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Pf = /\s*(page-break-before|break-before)\s*/i, Rf = 1, Ef = 3, Af = 8;
function Df(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Mf(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Of(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === Af) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Ef) {
      const s = (o.textContent ?? "").trim();
      s && r.push({ kind: "text", html: Df(s), text: s });
      return;
    }
    if (o.nodeType === Rf) {
      const s = o, i = s.hasAttribute("data-flow-break-before"), a = s.hasAttribute("data-flow-break-after");
      s.removeAttribute("data-flow-break-before"), s.removeAttribute("data-flow-break-after"), r.push({
        kind: "element",
        type: s.tagName.toLowerCase(),
        html: s.outerHTML,
        text: s.textContent ?? "",
        breakBefore: i,
        breakAfter: a
      });
    }
  }), r;
}
function Tf(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const s of e) {
    if (!s || s.kind === "break") {
      o = !0;
      continue;
    }
    const i = s.type ?? "text", a = s.html ?? "";
    a && (r.push({
      id: Qa(i, s.text ?? a, r.length, n),
      type: i,
      html: a,
      breakBefore: o || !!s.breakBefore
    }), o = !!s.breakAfter);
  }
  return r;
}
function el(e = "", t = {}) {
  const n = t.breakComment ?? Pf, o = (t.parseHtml ?? ((s) => Of(s, n)))(e);
  return Tf(Array.isArray(o) ? o : [], t);
}
const _f = {
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
};
let Si = !1;
function Ff(e) {
  return p.useMemo(() => e === !1 ? (Wt() && !Si && (Si = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : Mf, [e]);
}
function Lf({
  html: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: s = "",
  flowAreaStyle: i,
  id: a = "flow-document",
  idPrefix: l,
  flowClassName: c = "w-full",
  itemClassName: d,
  metaDefaults: u,
  getItemMeta: h,
  renderItem: m,
  sanitize: v,
  editable: g,
  parseHtml: b
}) {
  const w = p.useMemo(
    () => el(e, { idPrefix: l, parseHtml: b }),
    [e, l, b]
  ), C = p.useMemo(
    () => ({ ..._f, ...u ?? {} }),
    [u]
  ), S = Ff(v), y = p.useCallback(
    (N, x) => ({
      breakBefore: N.breakBefore,
      ...h?.(N, x) ?? {}
    }),
    [h]
  ), I = p.useCallback(
    (N, x) => m ? m(N, x) : /* @__PURE__ */ f(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: S(N.html) }
      }
    ),
    [m, S]
  ), R = /* @__PURE__ */ f(
    Ja,
    {
      id: a,
      items: w,
      getKey: (N) => N.id,
      className: c,
      itemClassName: d,
      metaDefaults: C,
      getItemMeta: y,
      renderItem: I
    }
  );
  return /* @__PURE__ */ f(
    qa,
    {
      className: r,
      style: o,
      flowAreaClassName: s,
      flowAreaStyle: i,
      header: t,
      footer: n,
      children: g ? /* @__PURE__ */ f(kf, { dialog: g, children: R }) : R
    }
  );
}
const $f = /<!--\s*(page-break-before|break-before)\s*-->/i, Bf = /^\s*\[[^\]]+\]:\s+\S+/, Ni = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function ar(e) {
  return e.trim() === "";
}
function ki(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function Ii(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Pi(e) {
  return /^(```|~~~)/.test(e.trim());
}
function Ri(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function Ei(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Ai(e) {
  return $f.test(e.trim());
}
function zf(e) {
  return Bf.test(e);
}
function Hf(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const s of n) {
    const i = o ? `${o} ${s}` : s;
    o && i.length > t ? (r.push(o), o = s) : o = i;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Kf(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function Gf(e, t, n, r, o, s) {
  const i = n.join(`
`).trim();
  if (!i) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, l = t === "paragraph" ? Hf(i, a) : [i];
  for (let c = 0; c < l.length; c += 1) {
    const d = l[c], u = Kf(d, s);
    e.push({
      id: Qa(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: c === 0 ? r : !1
    });
  }
  return !0;
}
function Wf(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], s = [];
  for (const c of r)
    zf(c) ? o.push(c) : s.push(c);
  const i = [];
  let a = 0, l = !1;
  for (; a < s.length; ) {
    if (ar(s[a])) {
      a += 1;
      continue;
    }
    if (Ai(s[a])) {
      l = !0, a += 1;
      continue;
    }
    const c = a;
    let d = "paragraph";
    if (Pi(s[a])) {
      d = "code";
      const u = s[a].trim().slice(0, 3);
      for (a += 1; a < s.length && !s[a].trim().startsWith(u); )
        a += 1;
      a < s.length && (a += 1);
    } else if (ki(s[a]))
      d = "heading", a += 1;
    else if (Ri(s[a]))
      d = "rule", a += 1;
    else if (Ni.test(s[a]))
      d = "image", a += 1;
    else if (Ei(s, a))
      for (d = "table", a += 2; a < s.length && s[a].includes("|") && !ar(s[a]); )
        a += 1;
    else if (Ii(s[a]))
      for (d = "list", a += 1; a < s.length && !ar(s[a]); )
        a += 1;
    else if (s[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < s.length && s[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < s.length && !ar(s[a]) && !ki(s[a]) && !Pi(s[a]) && !Ri(s[a]) && !Ni.test(s[a]) && !Ei(s, a) && !Ii(s[a]) && !s[a].trim().startsWith(">") && !Ai(s[a]); )
        a += 1;
    Gf(i, d, s.slice(c, a), l, t, o) && (l = !1);
  }
  return i;
}
function tl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = tl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function nl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = tl(e)) && (r && (r += " "), r += t);
  return r;
}
const Vf = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, jf = (e, t) => ({
  classGroupId: e,
  validator: t
}), rl = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Er = "-", Di = [], Uf = "arbitrary..", Yf = (e) => {
  const t = Xf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return qf(i);
      const a = i.split(Er), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return ol(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = r[i], c = n[i];
        return l ? c ? Vf(c, l) : l : c || Di;
      }
      return n[i] || Di;
    }
  };
}, ol = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const c = ol(e, t + 1, s);
    if (c) return c;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(Er) : e.slice(t).join(Er), l = i.length;
  for (let c = 0; c < l; c++) {
    const d = i[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, qf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Uf + r : void 0;
})(), Xf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Zf(n, t);
}, Zf = (e, t) => {
  const n = rl();
  for (const r in e) {
    const o = e[r];
    ds(o, n, r, t);
  }
  return n;
}, ds = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    Jf(i, t, n, r);
  }
}, Jf = (e, t, n, r) => {
  if (typeof e == "string") {
    Qf(e, t, n);
    return;
  }
  if (typeof e == "function") {
    eh(e, t, n, r);
    return;
  }
  th(e, t, n, r);
}, Qf = (e, t, n) => {
  const r = e === "" ? t : sl(t, e);
  r.classGroupId = n;
}, eh = (e, t, n, r) => {
  if (nh(e)) {
    ds(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(jf(n, e));
}, th = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = o[i];
    ds(l, sl(t, a), n, r);
  }
}, sl = (e, t) => {
  let n = e;
  const r = t.split(Er), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = rl(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, nh = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, rh = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = r[s]) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : o(s, i);
    }
  };
}, Go = "!", Mi = ":", oh = [], Oi = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), sh = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let g = 0; g < d; g++) {
      const b = o[g];
      if (i === 0 && a === 0) {
        if (b === Mi) {
          s.push(o.slice(l, g)), l = g + 1;
          continue;
        }
        if (b === "/") {
          c = g;
          continue;
        }
      }
      b === "[" ? i++ : b === "]" ? i-- : b === "(" ? a++ : b === ")" && a--;
    }
    const u = s.length === 0 ? o : o.slice(l);
    let h = u, m = !1;
    u.endsWith(Go) ? (h = u.slice(0, -1), m = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(Go) && (h = u.slice(1), m = !0)
    );
    const v = c && c > l ? c - l : void 0;
    return Oi(s, m, h, v);
  };
  if (t) {
    const o = t + Mi, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : Oi(oh, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, ih = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i[0] === "[", l = t.has(i);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, ah = (e) => ({
  cache: rh(e.cacheSize),
  parseClassName: sh(e),
  sortModifiers: ih(e),
  postfixLookupClassGroupIds: lh(e),
  ...Yf(e)
}), lh = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, ch = /\s+/, uh = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s,
    postfixLookupClassGroupIds: i
  } = t, a = [], l = e.trim().split(ch);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      isExternal: h,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: b
    } = n(u);
    if (h) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let w = !!b, C;
    if (w) {
      const N = g.substring(0, b);
      C = r(N);
      const x = C && i[C] ? r(g) : void 0;
      x && x !== C && (C = x, w = !1);
    } else
      C = r(g);
    if (!C) {
      if (!w) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(g), !C) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      w = !1;
    }
    const S = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), y = v ? S + Go : S, I = y + C;
    if (a.indexOf(I) > -1)
      continue;
    a.push(I);
    const R = o(C, w);
    for (let N = 0; N < R.length; ++N) {
      const x = R[N];
      a.push(y + x);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, dh = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = il(n)) && (o && (o += " "), o += r);
  return o;
}, il = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = il(e[r])) && (n && (n += " "), n += t);
  return n;
}, fh = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = ah(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = uh(l, n);
    return o(l, d), d;
  };
  return s = i, (...l) => s(dh(...l));
}, hh = [], Ce = (e) => {
  const t = (n) => n[e] || hh;
  return t.isThemeGetter = !0, t;
}, al = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ll = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mh = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ph = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, bh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, kt = (e) => mh.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), tt = (e) => !!e && Number.isInteger(Number(e)), yo = (e) => e.endsWith("%") && se(e.slice(0, -1)), dt = (e) => ph.test(e), cl = () => !0, wh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gh.test(e) && !vh.test(e)
), fs = () => !1, xh = (e) => bh.test(e), Ch = (e) => yh.test(e), Sh = (e) => !Y(e) && !q(e), Nh = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), kh = (e) => _t(e, fl, fs), Y = (e) => al.test(e), Kt = (e) => _t(e, hl, wh), Ti = (e) => _t(e, Oh, se), Ih = (e) => _t(e, pl, cl), Ph = (e) => _t(e, ml, fs), _i = (e) => _t(e, ul, fs), Rh = (e) => _t(e, dl, Ch), lr = (e) => _t(e, gl, xh), q = (e) => ll.test(e), kn = (e) => Yt(e, hl), Eh = (e) => Yt(e, ml), Fi = (e) => Yt(e, ul), Ah = (e) => Yt(e, fl), Dh = (e) => Yt(e, dl), cr = (e) => Yt(e, gl, !0), Mh = (e) => Yt(e, pl, !0), _t = (e, t, n) => {
  const r = al.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Yt = (e, t, n = !1) => {
  const r = ll.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ul = (e) => e === "position" || e === "percentage", dl = (e) => e === "image" || e === "url", fl = (e) => e === "length" || e === "size" || e === "bg-size", hl = (e) => e === "length", Oh = (e) => e === "number", ml = (e) => e === "family-name", pl = (e) => e === "number" || e === "weight", gl = (e) => e === "shadow", Th = () => {
  const e = Ce("color"), t = Ce("font"), n = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), s = Ce("leading"), i = Ce("breakpoint"), a = Ce("container"), l = Ce("spacing"), c = Ce("radius"), d = Ce("shadow"), u = Ce("inset-shadow"), h = Ce("text-shadow"), m = Ce("drop-shadow"), v = Ce("blur"), g = Ce("perspective"), b = Ce("aspect"), w = Ce("ease"), C = Ce("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], I = () => [...y(), q, Y], R = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], x = () => [q, Y, l], P = () => [kt, "full", "auto", ...x()], E = () => [tt, "none", "subgrid", q, Y], D = () => ["auto", {
    span: ["full", tt, q, Y]
  }, tt, q, Y], $ = () => [tt, "auto", q, Y], z = () => ["auto", "min", "max", "fr", q, Y], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...x()], T = () => [kt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], k = () => [kt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...x()], M = () => [kt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...x()], O = () => [e, q, Y], H = () => [...y(), Fi, _i, {
    position: [q, Y]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], K = () => ["auto", "cover", "contain", Ah, kh, {
    size: [q, Y]
  }], j = () => [yo, kn, Kt], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    q,
    Y
  ], B = () => ["", se, kn, Kt], U = () => ["solid", "dashed", "dotted", "double"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [se, yo, Fi, _i], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    q,
    Y
  ], te = () => ["none", se, q, Y], ae = () => ["none", se, q, Y], ge = () => [se, q, Y], le = () => [kt, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [dt],
      breakpoint: [dt],
      color: [cl],
      container: [dt],
      "drop-shadow": [dt],
      ease: ["in", "out", "in-out"],
      font: [Sh],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [dt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [dt],
      shadow: [dt],
      spacing: ["px", se],
      text: [dt],
      "text-shadow": [dt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", kt, Y, q, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", q, Y]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Nh],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [se, Y, q, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: I()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: P()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: P()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": P()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [tt, "auto", q, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [kt, "full", "auto", a, ...x()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [se, kt, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, q, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, q, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [tt, "first", "last", "none", q, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": E()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: D()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": E()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: D()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...L(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...L()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": L()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: x()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: A()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: T()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...k()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...k()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...k()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...M()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...M()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...M()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...T()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...T()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...T()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...T()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...T()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...T()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, kn, Kt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, Mh, Ih]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", yo, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Eh, Ph, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [Y]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, q, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [se, "none", q, Ti]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", q, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", q, Kt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", q, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [tt, q, Y]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: H()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: K()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, tt, q, Y],
          radial: ["", q, Y],
          conic: [tt, q, Y]
        }, Dh, Rh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: V()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": V()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": V()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": V()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": V()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": V()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": V()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": V()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": V()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": V()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": V()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": V()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": V()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": V()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": V()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: B()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": B()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": B()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...U(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": O()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...U(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, q, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, kn, Kt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: O()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          cr,
          lr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, cr, lr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Kt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": B()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": O()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, cr, lr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, q, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [se]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [q, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": O()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: H()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: K()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", q, Y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, q, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, q, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          cr,
          lr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": O()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, q, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, q, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, q, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, q, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, q, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, q, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, q, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, q, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, q, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, q, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, q, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, q, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, q, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [se, "initial", q, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, q, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, q, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, q, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, q, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": I()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ge()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ge()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ge()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [q, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: I()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: le()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": le()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": le()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": le()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [tt, q, Y]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: O()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: O()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": O()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": O()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": x()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": x()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, kn, Kt, Ti]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, _h = /* @__PURE__ */ fh(Th);
function de(...e) {
  return _h(nl(e));
}
const hs = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Li = (e, t) => e && e > 0 ? e + t : 0, ms = ({ width: e, left: t = 0, right: n = 0 }, r, o, s) => {
  if (e)
    return !t && !n ? e + o : e;
  let i = s * r;
  return t || (i += s * o), n || (i += s * o), (t || n) && (i -= t + n), i;
}, vl = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, s = r + 2 * n, i = ms(e, r, n, o), a = Li(e.left, n), l = t === "spread" && e.side === "end" ? -r + a : a, c = s - (l + i);
  return {
    top: `${Math.max(0, Li(e.top, n))}mm`,
    right: `${Math.max(0, c)}mm`
  };
}, ps = (e) => {
  const t = xe(Tt), n = hs({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, s = e.pageHeight ?? t?.page?.height ?? 297, {
    src: i,
    imageClassName: a,
    backgroundColor: l,
    width: c,
    height: d,
    left: u = 0,
    right: h = 0,
    top: m = 0,
    bottom: v = 0
  } = e, g = (N) => `${N}mm`, b = () => ms({ width: c, left: u, right: h }, o, r, 1), w = () => {
    let N = d;
    return d ? !m && !v && (N += r) : (N = s, m || (N += r), v || (N += r), (m || v) && (N -= (m ?? 0) + (v ?? 0))), N;
  }, C = b(), S = w(), y = (N) => N !== void 0 ? g(N) : void 0, R = ((N) => Object.fromEntries(
    Object.entries(N).filter(([x, P]) => P !== void 0)
  ))({
    backgroundColor: l,
    width: y(C),
    height: y(S),
    left: y(u > 0 ? u + r : u),
    right: y(h > 0 ? h + r : h),
    top: y(m > 0 ? m + r : m),
    bottom: y(v > 0 ? v + r : v)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: R, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ F(
    "div",
    {
      className: "uhuu-image-inner",
      ...fn(e, t),
      children: [
        /* @__PURE__ */ f(
          "img",
          {
            className: de("cover-image object-cover object-center", a),
            src: i || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const Fh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), $i = (e) => {
  const t = Lh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, bl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), $h = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Bh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const zh = Vr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => Bo(
    "svg",
    {
      ref: l,
      ...Bh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: bl("lucide", o),
      ...!s && !$h(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => Bo(c, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const ye = (e, t) => {
  const n = Vr(
    ({ className: r, ...o }, s) => Bo(zh, {
      ref: s,
      iconNode: t,
      className: bl(
        `lucide-${Fh($i(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = $i(e), n;
};
const Hh = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Kh = ye("arrow-down", Hh);
const Gh = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Bi = ye("arrow-up-down", Gh);
const Wh = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Vh = ye("arrow-up", Wh);
const jh = [
  ["path", { d: "M12 17h1.5", key: "1gkc67" }],
  ["path", { d: "M12 22h1.5", key: "1my7sn" }],
  ["path", { d: "M12 2h1.5", key: "19tvb7" }],
  ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1", key: "10akbh" }],
  ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5", key: "1vrfjs" }],
  ["path", { d: "M20 14v3h-2.5", key: "1naeju" }],
  ["path", { d: "M20 8.5V10", key: "1ctpfu" }],
  ["path", { d: "M4 10V8.5", key: "1o3zg5" }],
  ["path", { d: "M4 19.5V14", key: "ob81pf" }],
  ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8", key: "s8vcyb" }],
  ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8", key: "1cu73q" }]
], Uh = ye("book-dashed", jh);
const Yh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gs = ye("check", Yh);
const qh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], yl = ye("chevron-down", qh);
const Xh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Zh = ye("chevron-right", Xh);
const Jh = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], Qh = ye("clipboard-list", Jh);
const em = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], tm = ye("copy", em);
const nm = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], wl = ye("ellipsis", nm);
const rm = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], xl = ye("grip-vertical", rm);
const om = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Wo = ye("lock", om);
const sm = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], im = ye("maximize", sm);
const am = [["path", { d: "M5 12h14", key: "1ays0h" }]], lm = ye("minus", am);
const cm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], um = ye("pencil", cm);
const dm = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], nt = ye("plus", dm);
const fm = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], hm = ye("search", fm);
const mm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], pm = ye("trash-2", mm);
const gm = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], vm = ye("unfold-horizontal", gm);
const bm = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], ym = ye("unfold-vertical", bm);
const wm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Cl = ye("x", wm);
const xm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Cm = ye("zoom-in", xm);
const Sm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Nm = ye("zoom-out", Sm), Sl = p.createContext({
  portalContainer: null
});
function vs() {
  return p.useContext(Sl);
}
function km({ children: e }) {
  const [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ f(Sl.Provider, { value: { portalContainer: t }, children: e });
}
const Nl = Ot({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function bs() {
  return xe(Nl);
}
function ys() {
  const { interactive: e } = bs();
  return !e;
}
function Im() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function Pm() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Rm({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = Im(), o = n || Pm(), s = r ? !1 : t, [i, a] = ie(s);
  return /* @__PURE__ */ f(Nl.Provider, { value: { interactive: i, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ f(km, { children: /* @__PURE__ */ f("div", { "data-uhuu-interactive": i ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const zi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Hi = nl, kl = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Hi(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const d = n?.[c], u = s?.[c];
    if (d === null) return null;
    const h = zi(d) || zi(u);
    return o[c][h];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [u, h] = d;
    return h === void 0 || (c[u] = h), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: u, className: h, ...m } = d;
    return Object.entries(m).every((v) => {
      let [g, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[g]) : {
        ...s,
        ...a
      }[g] === b;
    }) ? [
      ...c,
      u,
      h
    ] : c;
  }, []);
  return Hi(e, i, l, n?.class, n?.className);
}, Em = kl(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-800",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
        ghost: "hover:bg-gray-100 text-gray-900",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ae = p.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f(
    "button",
    {
      className: de(Em({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
Ae.displayName = "Button";
function re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  };
}
function Ki(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Am(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ki(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ki(e[o], null);
        }
      };
  };
}
function me(...e) {
  return p.useCallback(Am(...e), e);
}
function gt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = p.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const c = (u) => {
      const { scope: h, children: m, ...v } = u, g = h?.[e]?.[l] || a, b = p.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ f(g.Provider, { value: b, children: m });
    };
    c.displayName = s + "Provider";
    function d(u, h, m = {}) {
      const { optional: v = !1 } = m, g = h?.[e]?.[l] || a, b = p.useContext(g);
      if (b) return b;
      if (i !== void 0) return i;
      if (!v)
        throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = n.map((i) => p.createContext(i));
    return function(a) {
      const l = a?.[e] || s;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Dm(o, ...t)];
}
function Dm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const u = l(s)[`__scope${c}`];
        return { ...a, ...u };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var st = globalThis?.document ? p.useLayoutEffect : () => {
}, Mm = p[" useInsertionEffect ".trim().toString()] || st;
function hn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Om({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = p.useRef(e !== void 0);
    p.useEffect(() => {
      const u = d.current;
      u !== a && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const c = p.useCallback(
    (d) => {
      if (a) {
        const u = Tm(d) ? d(e) : d;
        u !== e && i.current?.(u);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Om({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = p.useState(e), o = p.useRef(n), s = p.useRef(t);
  return Mm(() => {
    s.current = t;
  }, [t]), p.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Tm(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  const t = p.forwardRef((n, r) => {
    let { children: o, ...s } = n, i = null, a = !1;
    const l = [];
    Gi(o) && typeof ur == "function" && (o = ur(o._payload)), p.Children.forEach(o, (h) => {
      if (Bm(h)) {
        a = !0;
        const m = h;
        let v = "child" in m.props ? m.props.child : m.props.children;
        Gi(v) && typeof ur == "function" && (v = ur(v._payload)), i = Fm(m, v), l.push(i?.props?.children);
      } else
        l.push(h);
    }), i ? i = p.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && p.Children.count(o) === 1 && p.isValidElement(o) && (i = o)
    );
    const c = i ? $m(i) : void 0, d = me(r, c);
    if (!i) {
      if (o || o === 0)
        throw new Error(
          a ? Gm(e) : Km(e)
        );
      return o;
    }
    const u = Lm(s, i.props ?? {});
    return i.type !== p.Fragment && (u.ref = r ? d : c), p.cloneElement(i, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
var _m = /* @__PURE__ */ Symbol.for("radix.slottable"), Fm = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return p.isValidElement(n) ? p.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return p.isValidElement(t) ? t : null;
};
function Lm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $m(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Bm(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _m;
}
var zm = /* @__PURE__ */ Symbol.for("react.lazy");
function Gi(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === zm && "_payload" in e && Hm(e._payload);
}
function Hm(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var Km = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, Gm = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, ur = p[" use ".trim().toString()], Wm = [
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
], pe = Wm.reduce((e, t) => {
  const n = /* @__PURE__ */ On(`Primitive.${t}`), r = p.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Il(e, t) {
  e && os.flushSync(() => e.dispatchEvent(t));
}
function ws(e) {
  const t = e + "CollectionProvider", [n, r] = gt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: b, children: w } = g, C = p.useRef(null), S = p.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: S, collectionRef: C, children: w });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ On(a), c = p.forwardRef(
    (g, b) => {
      const { scope: w, children: C } = g, S = s(a, w), y = me(b, S.collectionRef);
      return /* @__PURE__ */ f(l, { ref: y, children: C });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ On(d), m = p.forwardRef(
    (g, b) => {
      const { scope: w, children: C, ...S } = g, y = p.useRef(null), I = me(b, y), R = s(d, w);
      return p.useEffect(() => (R.itemMap.set(y, { ref: y, ...S }), () => {
        R.itemMap.delete(y);
      })), /* @__PURE__ */ f(h, { [u]: "", ref: I, children: C });
    }
  );
  m.displayName = d;
  function v(g) {
    const b = s(e + "CollectionConsumer", g);
    return p.useCallback(() => {
      const C = b.collectionRef.current;
      if (!C) return [];
      const S = Array.from(C.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (R, N) => S.indexOf(R.ref.current) - S.indexOf(N.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: m },
    v,
    r
  ];
}
var Vm = p.createContext(void 0);
function xs(e) {
  const t = p.useContext(Vm);
  return e || t || "ltr";
}
function it(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var jm = "DismissableLayer", Vo = "dismissableLayer.update", Um = "dismissableLayer.pointerDownOutside", Ym = "dismissableLayer.focusOutside", Wi, Cs = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Ss = p.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: l,
      ...c
    } = e, d = p.useContext(Cs), [u, h] = p.useState(null), m = u?.ownerDocument ?? globalThis?.document, [, v] = p.useState({}), g = me(t, h), b = Array.from(d.layers), [w] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), C = w ? b.indexOf(w) : -1, S = u ? b.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, I = S >= C, R = p.useRef(!1), N = Qm(
      (D) => {
        s?.(D), a?.(D), D.defaultPrevented || l?.();
      },
      {
        ownerDocument: m,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: R,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: p.useCallback(
          (D) => {
            if (!(D instanceof Node))
              return !1;
            const $ = [...d.branches].some(
              (z) => z.contains(D)
            );
            return I && !$;
          },
          [d.branches, I]
        )
      }
    ), x = ep((D) => {
      if (r && R.current)
        return;
      const $ = D.target;
      [...d.branches].some((L) => L.contains($)) || (i?.(D), a?.(D), D.defaultPrevented || l?.());
    }, m), P = u ? S === b.length - 1 : !1, E = it((D) => {
      D.key === "Escape" && (o?.(D), !D.defaultPrevented && l && (D.preventDefault(), l()));
    });
    return p.useEffect(() => {
      if (P)
        return m.addEventListener("keydown", E, { capture: !0 }), () => m.removeEventListener("keydown", E, { capture: !0 });
    }, [m, P, E]), p.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Wi = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Vi(), () => {
          n && (d.layersWithOutsidePointerEventsDisabled.delete(u), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Wi));
        };
    }, [u, m, n, d]), p.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Vi());
    }, [u, d]), p.useEffect(() => {
      const D = () => v({});
      return document.addEventListener(Vo, D), () => document.removeEventListener(Vo, D);
    }, []), /* @__PURE__ */ f(
      pe.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: y ? I ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: re(e.onFocusCapture, x.onFocusCapture),
        onBlurCapture: re(e.onBlurCapture, x.onBlurCapture),
        onPointerDownCapture: re(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
Ss.displayName = jm;
var qm = "DismissableLayerBranch", Xm = p.forwardRef((e, t) => {
  const n = p.useContext(Cs), r = p.useRef(null), o = me(t, r);
  return p.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ f(pe.div, { ...e, ref: o });
});
Xm.displayName = qm;
function Zm() {
  const e = p.useContext(Cs), [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
var Jm = () => !0;
function Qm(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = Jm
  } = t, a = it(e), l = p.useRef(!1), c = p.useRef(!1), d = p.useRef(/* @__PURE__ */ new Map()), u = p.useRef(() => {
  });
  return p.useEffect(() => {
    function h() {
      c.current = !1, o.current = !1, d.current.clear();
    }
    function m() {
      return Array.from(d.current.values()).some(Boolean);
    }
    function v(S) {
      if (!c.current)
        return;
      const y = S.target;
      y instanceof Node && [...s].some((R) => R.contains(y)) || d.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        c.current && u.current();
      }, 0);
    }
    function g(S) {
      c.current && d.current.set(S.type, !1);
    }
    const b = (S) => {
      if (S.target && !l.current) {
        let y = function() {
          n.removeEventListener("click", u.current);
          const R = m();
          h(), R || Pl(
            Um,
            a,
            I,
            { discrete: !0 }
          );
        };
        if (!i(S.target)) {
          n.removeEventListener("click", u.current), h(), l.current = !1;
          return;
        }
        const I = { originalEvent: S };
        c.current = !0, o.current = r && S.button === 0, d.current.clear(), !r || S.button !== 0 ? y() : (n.removeEventListener("click", u.current), u.current = y, n.addEventListener("click", u.current, { once: !0 }));
      } else
        n.removeEventListener("click", u.current), h();
      l.current = !1;
    }, w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const S of w)
      n.addEventListener(S, v, !0), n.addEventListener(S, g);
    const C = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(C), n.removeEventListener("pointerdown", b), n.removeEventListener("click", u.current);
      for (const S of w)
        n.removeEventListener(S, v, !0), n.removeEventListener(S, g);
    };
  }, [
    n,
    a,
    r,
    o,
    s,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => l.current = !0
  };
}
function ep(e, t = globalThis?.document) {
  const n = it(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Pl(Ym, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Vi() {
  const e = new CustomEvent(Vo);
  document.dispatchEvent(e);
}
function Pl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Il(o, s) : o.dispatchEvent(s);
}
var dr = 0, tn = null;
function Rl() {
  p.useEffect(() => {
    tn || (tn = { start: ji(), end: ji() });
    const { start: e, end: t } = tn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), dr++, () => {
      dr === 1 && (tn?.start.remove(), tn?.end.remove(), tn = null), dr = Math.max(0, dr - 1);
    };
  }, []);
}
function ji() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var wo = "focusScope.autoFocusOnMount", xo = "focusScope.autoFocusOnUnmount", Ui = { bubbles: !1, cancelable: !0 }, tp = "FocusScope", Ns = p.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = p.useState(null), c = it(o), d = it(s), u = p.useRef(null), h = me(t, l), m = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let g = function(S) {
        if (m.paused || !a) return;
        const y = S.target;
        a.contains(y) ? u.current = y : It(u.current, { select: !0 });
      }, b = function(S) {
        if (m.paused || !a) return;
        const y = S.relatedTarget;
        y !== null && (a.contains(y) || It(u.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const I of S)
            I.removedNodes.length > 0 && It(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const C = new MutationObserver(w);
      return a && C.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), C.disconnect();
      };
    }
  }, [r, a, m.paused]), p.useEffect(() => {
    if (a) {
      qi.add(m);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const w = new CustomEvent(wo, Ui);
        a.addEventListener(wo, c), a.dispatchEvent(w), w.defaultPrevented || (np(ap(El(a)), { select: !0 }), document.activeElement === g && It(a));
      }
      return () => {
        a.removeEventListener(wo, c), setTimeout(() => {
          const w = new CustomEvent(xo, Ui);
          a.addEventListener(xo, d), a.dispatchEvent(w), w.defaultPrevented || It(g ?? document.body, { select: !0 }), a.removeEventListener(xo, d), qi.remove(m);
        }, 0);
      };
    }
  }, [a, c, d, m]);
  const v = p.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (b && w) {
        const C = g.currentTarget, [S, y] = rp(C);
        S && y ? !g.shiftKey && w === y ? (g.preventDefault(), n && It(S, { select: !0 })) : g.shiftKey && w === S && (g.preventDefault(), n && It(y, { select: !0 })) : w === C && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ f(pe.div, { tabIndex: -1, ...i, ref: h, onKeyDown: v });
});
Ns.displayName = tp;
function np(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (It(r, { select: t }), document.activeElement !== n) return;
}
function rp(e) {
  const t = El(e), n = Yi(t, e), r = Yi(t.reverse(), e);
  return [n, r];
}
function El(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : op(r, { upTo: t })))
      return r;
}
function op(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function sp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && sp(e) && t && e.select();
  }
}
var qi = ip();
function ip() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Xi(e, t), e.unshift(t);
    },
    remove(t) {
      e = Xi(e, t), e[0]?.resume();
    }
  };
}
function Xi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ap(e) {
  return e.filter((t) => t.tagName !== "A");
}
var lp = p[" useId ".trim().toString()] || (() => {
}), cp = 0;
function Et(e) {
  const [t, n] = p.useState(lp());
  return st(() => {
    n((r) => r ?? String(cp++));
  }, [e]), t ? `radix-${t}` : "";
}
const up = ["top", "right", "bottom", "left"], At = Math.min, ft = Math.max, Ar = Math.round, fr = Math.floor, ht = (e) => ({
  x: e,
  y: e
}), dp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Al(e, t, n) {
  return ft(e, At(t, n));
}
function pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dt(e) {
  return e.split("-")[0];
}
function mn(e) {
  return e.split("-")[1];
}
function ks(e) {
  return e === "x" ? "y" : "x";
}
function Is(e) {
  return e === "y" ? "height" : "width";
}
function ot(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ps(e) {
  return ks(ot(e));
}
function fp(e, t, n) {
  n === void 0 && (n = !1);
  const r = mn(e), o = Ps(e), s = Is(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Dr(i)), [i, Dr(i)];
}
function hp(e) {
  const t = Dr(e);
  return [jo(e), t, jo(t)];
}
function jo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Zi = ["left", "right"], Ji = ["right", "left"], mp = ["top", "bottom"], pp = ["bottom", "top"];
function gp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ji : Zi : t ? Zi : Ji;
    case "left":
    case "right":
      return t ? mp : pp;
    default:
      return [];
  }
}
function vp(e, t, n, r) {
  const o = mn(e);
  let s = gp(Dt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(jo)))), s;
}
function Dr(e) {
  const t = Dt(e);
  return dp[t] + e.slice(t.length);
}
function bp(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function Dl(e) {
  return typeof e != "number" ? bp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Qi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ot(t), i = Ps(t), a = Is(i), l = Dt(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  const v = mn(t);
  return v && (m[i] += h * (v === "end" ? 1 : -1) * (n && c ? -1 : 1)), m;
}
async function yp(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = pt(t, e), v = Dl(m), b = a[h ? u === "floating" ? "reference" : "floating" : u], w = Mr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), C = u === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), y = await (s.isElement == null ? void 0 : s.isElement(S)) && await (s.getScale == null ? void 0 : s.getScale(S)) || {
    x: 1,
    y: 1
  }, I = Mr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: C,
    offsetParent: S,
    strategy: l
  }) : C);
  return {
    top: (w.top - I.top + v.top) / y.y,
    bottom: (I.bottom - w.bottom + v.bottom) / y.y,
    left: (w.left - I.left + v.left) / y.x,
    right: (I.right - w.right + v.right) / y.x
  };
}
const wp = 50, xp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: yp
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Qi(c, r, l), h = r, m = 0;
  const v = {};
  for (let g = 0; g < s.length; g++) {
    const b = s[g];
    if (!b)
      continue;
    const {
      name: w,
      fn: C
    } = b, {
      x: S,
      y,
      data: I,
      reset: R
    } = await C({
      x: d,
      y: u,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = S ?? d, u = y ?? u, v[w] = {
      ...v[w],
      ...I
    }, R && m < wp && (m++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (c = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: u
    } = Qi(c, h, l)), g = -1);
  }
  return {
    x: d,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: v
  };
}, Cp = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = pt(e, t) || {};
    if (c == null)
      return {};
    const u = Dl(d), h = {
      x: n,
      y: r
    }, m = Ps(o), v = Is(m), g = await i.getDimensions(c), b = m === "y", w = b ? "top" : "left", C = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", y = s.reference[v] + s.reference[m] - h[m] - s.floating[v], I = h[m] - s.reference[m], R = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let N = R ? R[S] : 0;
    (!N || !await (i.isElement == null ? void 0 : i.isElement(R))) && (N = a.floating[S] || s.floating[v]);
    const x = y / 2 - I / 2, P = N / 2 - g[v] / 2 - 1, E = At(u[w], P), D = At(u[C], P), $ = N - g[v] - D, z = N / 2 - g[v] / 2 + x, L = Al(E, z, $), W = !l.arrow && mn(o) != null && z !== L && s.reference[v] / 2 - (z < E ? E : D) - g[v] / 2 < 0, A = W ? z < E ? z - E : z - $ : 0;
    return {
      [m]: h[m] + A,
      data: {
        [m]: L,
        centerOffset: z - L - A,
        ...W && {
          alignmentOffset: A
        }
      },
      reset: W
    };
  }
}), Sp = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = pt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Dt(o), C = ot(a), S = Dt(a) === a, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), I = h || (S || !g ? [Dr(a)] : hp(a)), R = v !== "none";
      !h && R && I.push(...vp(a, g, v, y));
      const N = [a, ...I], x = await l.detectOverflow(t, b), P = [];
      let E = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && P.push(x[w]), u) {
        const L = fp(o, i, y);
        P.push(x[L[0]], x[L[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((L) => L <= 0)) {
        var D, $;
        const L = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, W = N[L];
        if (W && (!(u === "alignment" ? C !== ot(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((k) => ot(k.placement) === C ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: E
            },
            reset: {
              placement: W
            }
          };
        let A = ($ = E.filter((T) => T.overflows[0] <= 0).sort((T, k) => T.overflows[1] - k.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!A)
          switch (m) {
            case "bestFit": {
              var z;
              const T = (z = E.filter((k) => {
                if (R) {
                  const M = ot(k.placement);
                  return M === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((M) => M > 0).reduce((M, O) => M + O, 0)]).sort((k, M) => k[1] - M[1])[0]) == null ? void 0 : z[0];
              T && (A = T);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function ea(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ta(e) {
  return up.some((t) => e[t] >= 0);
}
const Np = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = pt(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = ea(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ta(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = ea(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ta(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ml = /* @__PURE__ */ new Set(["left", "top"]);
async function kp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Dt(n), a = mn(n), l = ot(n) === "y", c = Ml.has(i) ? -1 : 1, d = s && l ? -1 : 1, u = pt(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: v
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof v == "number" && (m = a === "end" ? v * -1 : v), l ? {
    x: m * d,
    y: h * c
  } : {
    x: h * c,
    y: m * d
  };
}
const Ip = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await kp(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Pp = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (C) => {
            let {
              x: S,
              y
            } = C;
            return {
              x: S,
              y
            };
          }
        },
        ...c
      } = pt(e, t), d = {
        x: n,
        y: r
      }, u = await s.detectOverflow(t, c), h = ot(o), m = ks(h);
      let v = d[m], g = d[h];
      const b = (C, S) => Al(S + u[C === "y" ? "top" : "left"], S, S - u[C === "y" ? "bottom" : "right"]);
      i && (v = b(m, v)), a && (g = b(h, g));
      const w = l.fn({
        ...t,
        [m]: v,
        [h]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [m]: i,
            [h]: a
          }
        }
      };
    }
  };
}, Rp = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        rects: a,
        middlewareData: l
      } = t, {
        offset: c = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = pt(e, t), h = {
        x: o,
        y: s
      }, m = ot(i), v = ks(m);
      let g = h[v], b = h[m];
      const w = pt(c, t), C = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: (n = w.mainAxis) != null ? n : 0,
        crossAxis: (r = w.crossAxis) != null ? r : 0
      };
      if (d) {
        const I = v === "y" ? "height" : "width", R = a.reference[v] - a.floating[I] + C.mainAxis, N = a.reference[v] + a.reference[I] - C.mainAxis;
        g < R ? g = R : g > N && (g = N);
      }
      if (u) {
        var S, y;
        const I = v === "y" ? "width" : "height", R = Ml.has(Dt(i)), N = a.reference[m] - a.floating[I] + (R && ((S = l.offset) == null ? void 0 : S[m]) || 0) + (R ? 0 : C.crossAxis), x = a.reference[m] + a.reference[I] + (R ? 0 : ((y = l.offset) == null ? void 0 : y[m]) || 0) - (R ? C.crossAxis : 0);
        b < N ? b = N : b > x && (b = x);
      }
      return {
        [v]: g,
        [m]: b
      };
    }
  };
}, Ep = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...a
      } = pt(e, t), l = await o.detectOverflow(t, a), c = Dt(n), d = mn(n), u = ot(n) === "y", {
        width: h,
        height: m
      } = r.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = d === "end" ? "top" : "bottom");
      const b = m - l.top - l.bottom, w = h - l.left - l.right, C = At(m - l[v], b), S = At(h - l[g], w), y = t.middlewareData.shift, I = !y;
      let R = C, N = S;
      y != null && y.enabled.x && (N = w), y != null && y.enabled.y && (R = b), I && !d && (u ? N = h - 2 * ft(l.left, l.right) : R = m - 2 * ft(l.top, l.bottom)), await i({
        ...t,
        availableWidth: N,
        availableHeight: R
      });
      const x = await o.getDimensions(s.floating);
      return h !== x.width || m !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ur() {
  return typeof window < "u";
}
function pn(e) {
  return Ol(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vt(e) {
  var t;
  return (t = (Ol(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ol(e) {
  return Ur() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function at(e) {
  return Ur() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Ft(e) {
  return Ur() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function na(e) {
  return !Ur() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function Yr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Ap(e) {
  return /^(table|td|th)$/.test(pn(e));
}
function qr(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Dp = /transform|translate|scale|rotate|perspective|filter/, Mp = /paint|layout|strict|content/, Gt = (e) => !!e && e !== "none";
let Co;
function Rs(e) {
  const t = at(e) ? lt(e) : e;
  return Gt(t.transform) || Gt(t.translate) || Gt(t.scale) || Gt(t.rotate) || Gt(t.perspective) || !Es() && (Gt(t.backdropFilter) || Gt(t.filter)) || Dp.test(t.willChange || "") || Mp.test(t.contain || "");
}
function Op(e) {
  let t = jt(e);
  for (; Ft(t) && !Tn(t); ) {
    if (Rs(t))
      return t;
    if (qr(t))
      return null;
    t = jt(t);
  }
  return null;
}
function Es() {
  return Co == null && (Co = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Co;
}
function Tn(e) {
  return /^(html|body|#document)$/.test(pn(e));
}
function lt(e) {
  return Le(e).getComputedStyle(e);
}
function Xr(e) {
  return at(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (pn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    na(e) && e.host || // Fallback.
    vt(e)
  );
  return na(t) ? t.host : t;
}
function Tl(e) {
  const t = jt(e);
  return Tn(t) ? (e.ownerDocument || e).body : Ft(t) && Yr(t) ? t : Tl(t);
}
function _n(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tl(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Le(o);
  if (s) {
    const a = Uo(i);
    return t.concat(i, i.visualViewport || [], Yr(o) ? o : [], a && n ? _n(a) : []);
  } else
    return t.concat(o, _n(o, [], n));
}
function Uo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _l(e) {
  const t = lt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ft(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Ar(n) !== s || Ar(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function As(e) {
  return at(e) ? e : e.contextElement;
}
function an(e) {
  const t = As(e);
  if (!Ft(t))
    return ht(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = _l(t);
  let i = (s ? Ar(n.width) : n.width) / r, a = (s ? Ar(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Tp = /* @__PURE__ */ ht(0);
function Fl(e) {
  const t = Le(e);
  return !Es() || !t.visualViewport ? Tp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function _p(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === Le(e);
}
function Ut(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = As(e);
  let i = ht(1);
  t && (r ? at(r) && (i = an(r)) : i = an(e));
  const a = _p(s, n, r) ? Fl(s) : ht(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (s && r) {
    const h = Le(s), m = at(r) ? Le(r) : r;
    let v = h, g = Uo(v);
    for (; g && m !== v; ) {
      const b = an(g), w = g.getBoundingClientRect(), C = lt(g), S = w.left + (g.clientLeft + parseFloat(C.paddingLeft)) * b.x, y = w.top + (g.clientTop + parseFloat(C.paddingTop)) * b.y;
      l *= b.x, c *= b.y, d *= b.x, u *= b.y, l += S, c += y, v = Le(g), g = Uo(v);
    }
  }
  return Mr({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Zr(e, t) {
  const n = Xr(e).scrollLeft;
  return t ? t.left + n : Ut(vt(e)).left + n;
}
function Ll(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Zr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Fp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = vt(r), a = t ? qr(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ht(1);
  const d = ht(0), u = Ft(r);
  if ((u || !s) && ((pn(r) !== "body" || Yr(i)) && (l = Xr(r)), u)) {
    const m = Ut(r);
    c = an(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const h = i && !u && !s ? Ll(i, l) : ht(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function Lp(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function $p(e) {
  const t = Xr(e), n = e.ownerDocument.body, r = ft(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = ft(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Zr(e);
  const i = -t.scrollTop;
  return lt(n).direction === "rtl" && (s += ft(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: i
  };
}
const Bp = 25;
function zp(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = Le(e), s = vt(e), i = o.visualViewport;
  let a = s.clientWidth, l = s.clientHeight, c = 0, d = 0;
  if (i) {
    const h = !Es() || t === "fixed";
    r ? h || (c = -i.offsetLeft, d = -i.offsetTop) : (a = i.width, l = i.height, h && (c = i.offsetLeft, d = i.offsetTop));
  }
  if (Zr(s) <= 0) {
    const h = s.ownerDocument, m = h.body, v = getComputedStyle(m), g = h.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, b = Math.abs(s.clientWidth - m.clientWidth - g), w = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? b / 2 : b;
    w <= Bp && (a -= w);
  }
  return {
    width: a,
    height: l,
    x: c,
    y: d
  };
}
function Hp(e, t) {
  const n = Ut(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = an(e), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function ra(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = zp(e, n, t);
  else if (t === "document")
    r = $p(vt(e));
  else if (at(t))
    r = Hp(t, n);
  else {
    const o = Fl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Mr(r);
}
function Kp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = _n(e, [], !1).filter((a) => at(a) && pn(a) !== "body"), o = null;
  const s = lt(e).position === "fixed";
  let i = s ? jt(e) : e;
  for (; at(i) && !Tn(i); ) {
    const a = lt(i), l = Rs(i), c = o ? o.position : s ? "fixed" : "";
    !l && (c === "fixed" || c === "absolute" && a.position === "static") ? r = r.filter((u) => u !== i) : o = a, i = jt(i);
  }
  return t.set(e, r), r;
}
function Gp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? qr(t) ? [] : Kp(t, this._c) : [].concat(n), r], a = ra(t, i[0], o);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let h = 1; h < i.length; h++) {
    const m = ra(t, i[h], o);
    l = ft(m.top, l), c = At(m.right, c), d = At(m.bottom, d), u = ft(m.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function Wp(e) {
  const {
    width: t,
    height: n
  } = _l(e);
  return {
    width: t,
    height: n
  };
}
function Vp(e, t, n) {
  const r = Ft(t), o = vt(t), s = n === "fixed", i = Ut(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ht(0);
  if ((r || !s) && ((pn(t) !== "body" || Yr(o)) && (a = Xr(t)), r)) {
    const h = Ut(t, !0, s, t);
    l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  !r && o && (l.x = Zr(o));
  const c = o && !r && !s ? Ll(o, a) : ht(0), d = i.left + a.scrollLeft - l.x - c.x, u = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: i.width,
    height: i.height
  };
}
function So(e) {
  return lt(e).position === "static";
}
function oa(e, t) {
  if (!Ft(e) || lt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return vt(e) === n && (n = n.ownerDocument.body), n;
}
function $l(e, t) {
  const n = Le(e);
  if (qr(e))
    return n;
  if (!Ft(e)) {
    let o = jt(e);
    for (; o && !Tn(o); ) {
      if (at(o) && !So(o))
        return o;
      o = jt(o);
    }
    return n;
  }
  let r = oa(e, t);
  for (; r && Ap(r) && So(r); )
    r = oa(r, t);
  return r && Tn(r) && So(r) && !Rs(r) ? n : r || Op(e) || n;
}
const jp = async function(e) {
  const t = this.getOffsetParent || $l, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Vp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Up(e) {
  return lt(e).direction === "rtl";
}
const Yp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fp,
  getDocumentElement: vt,
  getClippingRect: Gp,
  getOffsetParent: $l,
  getElementRects: jp,
  getClientRects: Lp,
  getDimensions: Wp,
  getScale: an,
  isElement: at,
  isRTL: Up
};
function Bl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qp(e, t, n) {
  let r = null, o;
  const s = vt(e);
  function i() {
    var d;
    clearTimeout(o), (d = r) == null || d.disconnect(), r = null;
  }
  function a(d, u) {
    d === void 0 && (d = !1), u === void 0 && (u = 1), i();
    const h = e.getBoundingClientRect(), {
      left: m,
      top: v,
      width: g,
      height: b
    } = h;
    if (d || t(), !g || !b)
      return;
    const w = fr(v), C = fr(s.clientWidth - (m + g)), S = fr(s.clientHeight - (v + b)), y = fr(m), R = {
      rootMargin: -w + "px " + -C + "px " + -S + "px " + -y + "px",
      threshold: ft(0, At(1, u)) || 1
    };
    let N = !0;
    function x(P) {
      const E = P[0].intersectionRatio;
      if (!Bl(h, e.getBoundingClientRect()))
        return a();
      if (E !== u) {
        if (!N)
          return a();
        E ? a(!1, E) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      N = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...R,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, R);
    }
    r.observe(e);
  }
  const l = Le(e), c = () => a(n);
  return l.addEventListener("resize", c), a(!0), () => {
    l.removeEventListener("resize", c), i();
  };
}
function Xp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = As(e), d = o || s ? [...c ? _n(c) : [], ...t ? _n(t) : []] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n), s && w.addEventListener("resize", n);
  });
  const u = c && a ? qp(c, n, s) : null;
  let h = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [C] = w;
    C && C.target === c && m && t && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(t);
    })), n();
  }), c && !l && m.observe(c), t && m.observe(t));
  let v, g = l ? Ut(e) : null;
  l && b();
  function b() {
    const w = Ut(e);
    g && !Bl(g, w) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    d.forEach((C) => {
      o && C.removeEventListener("scroll", n), s && C.removeEventListener("resize", n);
    }), u?.(), (w = m) == null || w.disconnect(), m = null, l && cancelAnimationFrame(v);
  };
}
const Zp = Ip, Jp = Pp, Qp = Sp, eg = Ep, tg = Np, sa = Cp, ng = Rp, rg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, s = {
    ...Yp,
    ...o.platform,
    _c: r
  };
  return xp(e, t, {
    ...o,
    platform: s
  });
};
var og = typeof document < "u", sg = function() {
}, br = og ? za : sg;
function Or(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Or(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Or(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ia(e, t) {
  const n = zl(e);
  return Math.round(t * n) / n;
}
function No(e) {
  const t = p.useRef(e);
  return br(() => {
    t.current = e;
  }), t;
}
function ig(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, u] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = p.useState(r);
  Or(h, r) || m(r);
  const [v, g] = p.useState(null), [b, w] = p.useState(null), C = p.useCallback((k) => {
    k !== R.current && (R.current = k, g(k));
  }, []), S = p.useCallback((k) => {
    k !== N.current && (N.current = k, w(k));
  }, []), y = s || v, I = i || b, R = p.useRef(null), N = p.useRef(null), x = p.useRef(d), P = l != null, E = No(l), D = No(o), $ = No(c), z = p.useCallback(() => {
    if (!R.current || !N.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: h
    };
    D.current && (k.platform = D.current), rg(R.current, N.current, k).then((M) => {
      const O = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      L.current && !Or(x.current, O) && (x.current = O, os.flushSync(() => {
        u(O);
      }));
    });
  }, [h, t, n, D, $]);
  br(() => {
    c === !1 && x.current.isPositioned && (x.current.isPositioned = !1, u((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [c]);
  const L = p.useRef(!1);
  br(() => (L.current = !0, () => {
    L.current = !1;
  }), []), br(() => {
    if (y && (R.current = y), I && (N.current = I), y && I) {
      if (E.current)
        return E.current(y, I, z);
      z();
    }
  }, [y, I, z, E, P]);
  const W = p.useMemo(() => ({
    reference: R,
    floating: N,
    setReference: C,
    setFloating: S
  }), [C, S]), A = p.useMemo(() => ({
    reference: y,
    floating: I
  }), [y, I]), T = p.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return k;
    const M = ia(A.floating, d.x), O = ia(A.floating, d.y);
    return a ? {
      ...k,
      transform: "translate(" + M + "px, " + O + "px)",
      ...zl(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: O
    };
  }, [n, a, A.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: z,
    refs: W,
    elements: A,
    floatingStyles: T
  }), [d, z, W, A, T]);
}
const ag = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? sa({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? sa({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, lg = (e, t) => {
  const n = Zp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, cg = (e, t) => {
  const n = Jp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ug = (e, t) => ({
  fn: ng(e).fn,
  options: [e, t]
}), dg = (e, t) => {
  const n = Qp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, fg = (e, t) => {
  const n = eg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, hg = (e, t) => {
  const n = tg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, mg = (e, t) => {
  const n = ag(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var pg = "Arrow", Hl = p.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f(
    pe.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Hl.displayName = pg;
var gg = Hl;
function Ds(e) {
  const [t, n] = p.useState(void 0);
  return st(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Ms = "Popper", [Kl, Gl] = gt(Ms), [vg, Wl] = Kl(Ms), Vl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null), [s, i] = p.useState(void 0);
  return /* @__PURE__ */ f(
    vg,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
};
Vl.displayName = Ms;
var jl = "PopperAnchor", Ul = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Wl(jl, n), i = p.useRef(null), a = s.onAnchorChange, l = p.useCallback(
      (v) => {
        i.current = v, v && a(v);
      },
      [a]
    ), c = me(t, l), d = p.useRef(null);
    p.useEffect(() => {
      if (!r)
        return;
      const v = d.current;
      d.current = r.current, v !== d.current && a(d.current);
    });
    const u = s.placementState && Ts(s.placementState), h = u?.[0], m = u?.[1];
    return r ? null : /* @__PURE__ */ f(
      pe.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": m,
        ...o,
        ref: c
      }
    );
  }
);
Ul.displayName = jl;
var Os = "PopperContent", [bg, yg] = Kl(Os), Yl = p.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: v,
      ...g
    } = e, b = Wl(Os, n), [w, C] = p.useState(null), S = me(t, C), [y, I] = p.useState(null), R = Ds(y), N = R?.width ?? 0, x = R?.height ?? 0, P = r + (s !== "center" ? "-" + s : ""), E = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(c) ? c : [c], $ = D.length > 0, z = {
      padding: E,
      boundary: D.filter(xg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: L, floatingStyles: W, placement: A, isPositioned: T, middlewareData: k } = ig({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...J) => Xp(...J, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        lg({ mainAxis: o + x, alignmentAxis: i }),
        l && cg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? ug() : void 0,
          ...z
        }),
        l && dg({ ...z }),
        fg({
          ...z,
          apply: ({ elements: J, rects: Z, availableWidth: X, availableHeight: te }) => {
            const { width: ae, height: ge } = Z.reference, le = J.floating.style;
            le.setProperty("--radix-popper-available-width", `${X}px`), le.setProperty("--radix-popper-available-height", `${te}px`), le.setProperty("--radix-popper-anchor-width", `${ae}px`), le.setProperty("--radix-popper-anchor-height", `${ge}px`);
          }
        }),
        y && mg({ element: y, padding: a }),
        Cg({ arrowWidth: N, arrowHeight: x }),
        h && hg({
          strategy: "referenceHidden",
          ...z,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: $ ? z.boundary : void 0
        })
      ]
    }), M = b.setPlacementState;
    st(() => (M(A), () => {
      M(void 0);
    }), [A, M]);
    const [O, H] = Ts(A), G = it(v);
    st(() => {
      T && G?.();
    }, [T, G]);
    const K = k.arrow?.x, j = k.arrow?.y, V = k.arrow?.centerOffset !== 0, [B, U] = p.useState();
    return st(() => {
      w && U(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: T ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            k.transformOrigin?.x,
            k.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...k.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          bg,
          {
            scope: n,
            placedSide: O,
            placedAlign: H,
            onArrowChange: I,
            arrowX: K,
            arrowY: j,
            shouldHideArrow: V,
            children: /* @__PURE__ */ f(
              pe.div,
              {
                "data-side": O,
                "data-align": H,
                ...g,
                ref: S,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Yl.displayName = Os;
var ql = "PopperArrow", wg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xl = p.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = yg(ql, r), i = wg[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          gg,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Xl.displayName = ql;
function xg(e) {
  return e !== null;
}
var Cg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = Ts(n), u = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + a / 2, m = (o.arrow?.y ?? 0) + l / 2;
    let v = "", g = "";
    return c === "bottom" ? (v = i ? u : `${h}px`, g = `${-l}px`) : c === "top" ? (v = i ? u : `${h}px`, g = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, g = i ? u : `${m}px`) : c === "left" && (v = `${r.floating.width + l}px`, g = i ? u : `${m}px`), { data: { x: v, y: g } };
  }
});
function Ts(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Zl = Vl, Sg = Ul, Ng = Yl, kg = Xl, Ig = "Portal", _s = p.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = p.useState(!1);
  st(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? os.createPortal(/* @__PURE__ */ f(pe.div, { ...r, ref: t }), i) : null;
});
_s.displayName = Ig;
function Pg(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Lt = (e) => {
  const { present: t, children: n } = e, r = Rg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), s = Eg(r.ref, Ag(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: s }) : null;
};
Lt.displayName = "Presence";
function Rg(e) {
  const [t, n] = p.useState(), r = p.useRef(null), o = p.useRef(e), s = p.useRef("none"), i = p.useRef(void 0), a = e ? "mounted" : "unmounted", [l, c] = Pg(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return p.useEffect(() => {
    l === "mounted" ? (s.current = i.current ?? In(r.current), i.current = void 0) : s.current = "none";
  }, [l]), st(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const m = s.current, v = In(d);
      e ? (i.current = v, c("MOUNT")) : v === "none" || d?.display === "none" ? c("UNMOUNT") : c(u && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), st(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, h = (v) => {
        const b = In(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && b && (c("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, m = (v) => {
        v.target === t && (s.current = In(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: p.useCallback((d) => {
      if (d) {
        const u = getComputedStyle(d);
        r.current = u, i.current = In(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
function aa(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Eg(...e) {
  const t = p.useRef(e);
  return t.current = e, p.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = aa(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : aa(r[i], null);
        }
      };
  }, []);
}
function In(e) {
  return e?.animationName || "none";
}
function Ag(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ko = !1;
function Dg() {
  const [e, t] = p.useState(ko);
  return p.useEffect(() => {
    ko || (ko = !0, t(!0));
  }, []), e;
}
var Jl = p[" useSyncExternalStore ".trim().toString()];
function Mg() {
  return () => {
  };
}
function Og() {
  return Jl(
    Mg,
    () => !0,
    () => !1
  );
}
var Tg = typeof Jl == "function" ? Og : Dg, Io = "rovingFocusGroup.onEntryFocus", _g = { bubbles: !1, cancelable: !0 }, Hn = "RovingFocusGroup", [Yo, Ql, Fg] = ws(Hn), [Lg, ec] = gt(
  Hn,
  [Fg]
), [$g, Bg] = Lg(Hn), tc = p.forwardRef(
  (e, t) => /* @__PURE__ */ f(Yo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Yo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(zg, { ...e, ref: t }) }) })
);
tc.displayName = Hn;
var zg = p.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, h = p.useRef(null), m = me(t, h), v = xs(s), [g, b] = hn({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Hn
  }), [w, C] = p.useState(!1), S = it(c), y = Ql(n), I = p.useRef(!1), [R, N] = p.useState(0);
  return p.useEffect(() => {
    const x = h.current;
    if (x)
      return x.addEventListener(Io, S), () => x.removeEventListener(Io, S);
  }, [S]), /* @__PURE__ */ f(
    $g,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: p.useCallback(
        (x) => b(x),
        [b]
      ),
      onItemShiftTab: p.useCallback(() => C(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => N((x) => x + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => N((x) => x - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        pe.div,
        {
          tabIndex: w || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: re(e.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: re(e.onFocus, (x) => {
            const P = !I.current;
            if (x.target === x.currentTarget && P && !w) {
              const E = new CustomEvent(Io, _g);
              if (x.currentTarget.dispatchEvent(E), !E.defaultPrevented) {
                const D = y().filter((A) => A.focusable), $ = D.find((A) => A.active), z = D.find((A) => A.id === g), W = [$, z, ...D].filter(
                  Boolean
                ).map((A) => A.ref.current);
                oc(W, d);
              }
            }
            I.current = !1;
          }),
          onBlur: re(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), nc = "RovingFocusGroupItem", rc = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = Et(), c = s || l, d = Bg(nc, n), u = d.currentTabStopId === c, h = Ql(n), { onFocusableItemAdd: m, onFocusableItemRemove: v, currentTabStopId: g } = d, b = Tg();
    return st(() => {
      if (!(!b || !r))
        return m(), () => v();
    }, [b, r, m, v]), p.useEffect(() => {
      if (!(b || !r))
        return m(), () => v();
    }, [b, r, m, v]), /* @__PURE__ */ f(
      Yo.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          pe.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: re(e.onMouseDown, (w) => {
              r ? d.onItemFocus(c) : w.preventDefault();
            }),
            onFocus: re(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: re(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const C = Gg(w, d.orientation, d.dir);
              if (C !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let y = h().filter((I) => I.focusable).map((I) => I.ref.current);
                if (C === "last") y.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && y.reverse();
                  const I = y.indexOf(w.currentTarget);
                  y = d.loop ? Wg(y, I + 1) : y.slice(I + 1);
                }
                setTimeout(() => oc(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: u, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
rc.displayName = nc;
var Hg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Kg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Gg(e, t, n) {
  const r = Kg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Hg[r];
}
function oc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Wg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vg = tc, jg = rc, Ug = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), mr = {}, Po = 0, sc = function(e) {
  return e && (e.host || sc(e.parentNode));
}, Yg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = sc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qg = function(e, t, n, r) {
  var o = Yg(t, Array.isArray(e) ? e : [e]);
  mr[n] || (mr[n] = /* @__PURE__ */ new WeakMap());
  var s = mr[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || a.has(u) || (a.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (a.has(h))
        d(h);
      else
        try {
          var m = h.getAttribute(r), v = m !== null && m !== "false", g = (nn.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          nn.set(h, g), s.set(h, b), i.push(h), g === 1 && v && hr.set(h, !0), b === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), a.clear(), Po++, function() {
    i.forEach(function(u) {
      var h = nn.get(u) - 1, m = s.get(u) - 1;
      nn.set(u, h), s.set(u, m), h || (hr.has(u) || u.removeAttribute(r), hr.delete(u)), m || u.removeAttribute(n);
    }), Po--, Po || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), mr = {});
  };
}, ic = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ug(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), qg(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, rt = function() {
  return rt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, rt.apply(this, arguments);
};
function ac(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Xg(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var yr = "right-scroll-bar-position", wr = "width-before-scroll-bar", Zg = "with-scroll-bars-hidden", Jg = "--removed-body-scroll-bar-size";
function Ro(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qg(e, t) {
  var n = ie(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var ev = typeof window < "u" ? p.useLayoutEffect : p.useEffect, la = /* @__PURE__ */ new WeakMap();
function tv(e, t) {
  var n = Qg(null, function(r) {
    return e.forEach(function(o) {
      return Ro(o, r);
    });
  });
  return ev(function() {
    var r = la.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Ro(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Ro(a, i);
      });
    }
    la.set(n, e);
  }, [e]), n;
}
function nv(e) {
  return e;
}
function rv(e, t) {
  t === void 0 && (t = nv);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function ov(e) {
  e === void 0 && (e = {});
  var t = rv(null);
  return t.options = rt({ async: !0, ssr: !1 }, e), t;
}
var lc = function(e) {
  var t = e.sideCar, n = ac(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, rt({}, n));
};
lc.isSideCarExport = !0;
function sv(e, t) {
  return e.useMedium(t), lc;
}
var cc = ov(), Eo = function() {
}, Jr = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: Eo,
    onWheelCapture: Eo,
    onTouchMoveCapture: Eo
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, h = e.sideCar, m = e.noRelative, v = e.noIsolation, g = e.inert, b = e.allowPinchZoom, w = e.as, C = w === void 0 ? "div" : w, S = e.gapMode, y = ac(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = h, R = tv([n, t]), N = rt(rt({}, y), o);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(I, { sideCar: cc, removeScrollBar: c, shards: u, noRelative: m, noIsolation: v, inert: g, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: S }),
    i ? p.cloneElement(p.Children.only(a), rt(rt({}, N), { ref: R })) : p.createElement(C, rt({}, N, { className: l, ref: R }), a)
  );
});
Jr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jr.classNames = {
  fullWidth: wr,
  zeroRight: yr
};
var iv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function av() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = iv();
  return t && e.setAttribute("nonce", t), e;
}
function lv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = av()) && (lv(t, n), cv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, dv = function() {
  var e = uv();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, uc = function() {
  var e = dv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ao = function(e) {
  return parseInt(e || "", 10) || 0;
}, hv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ao(n), Ao(r), Ao(o)];
}, mv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fv;
  var t = hv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, pv = uc(), ln = "data-scroll-locked", gv = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Zg, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ln, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(yr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(wr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(yr, " .").concat(yr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wr, " .").concat(wr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ln, `] {
    `).concat(Jg, ": ").concat(a, `px;
  }
`);
}, ca = function() {
  var e = parseInt(document.body.getAttribute(ln) || "0", 10);
  return isFinite(e) ? e : 0;
}, vv = function() {
  p.useEffect(function() {
    return document.body.setAttribute(ln, (ca() + 1).toString()), function() {
      var e = ca() - 1;
      e <= 0 ? document.body.removeAttribute(ln) : document.body.setAttribute(ln, e.toString());
    };
  }, []);
}, bv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  vv();
  var s = p.useMemo(function() {
    return mv(o);
  }, [o]);
  return p.createElement(pv, { styles: gv(s, !t, o, n ? "" : "!important") });
}, qo = !1;
if (typeof window < "u")
  try {
    var pr = Object.defineProperty({}, "passive", {
      get: function() {
        return qo = !0, !0;
      }
    });
    window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
  } catch {
    qo = !1;
  }
var rn = qo ? { passive: !1 } : !1, yv = function(e) {
  return e.tagName === "TEXTAREA";
}, dc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yv(e) && n[t] === "visible")
  );
}, wv = function(e) {
  return dc(e, "overflowY");
}, xv = function(e) {
  return dc(e, "overflowX");
}, ua = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = fc(e, r);
    if (o) {
      var s = hc(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Cv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Sv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, fc = function(e, t) {
  return e === "v" ? wv(t) : xv(t);
}, hc = function(e, t) {
  return e === "v" ? Cv(t) : Sv(t);
}, Nv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kv = function(e, t, n, r, o) {
  var s = Nv(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, u = 0, h = 0;
  do {
    if (!a)
      break;
    var m = hc(e, a), v = m[0], g = m[1], b = m[2], w = g - b - s * v;
    (v || w) && fc(e, a) && (u += w, h += v);
    var C = a.parentNode;
    a = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(h) < 1) && (c = !0), c;
}, gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, da = function(e) {
  return [e.deltaX, e.deltaY];
}, fa = function(e) {
  return e && "current" in e ? e.current : e;
}, Iv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Pv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Rv = 0, on = [];
function Ev(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(Rv++)[0], s = p.useState(uc)[0], i = p.useRef(e);
  p.useEffect(function() {
    i.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Xg([e.lockRef.current], (e.shards || []).map(fa), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = p.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = gr(g), C = n.current, S = "deltaX" in g ? g.deltaX : C[0] - w[0], y = "deltaY" in g ? g.deltaY : C[1] - w[1], I, R = g.target, N = Math.abs(S) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && N === "h" && R.type === "range")
      return !1;
    var x = window.getSelection(), P = x && x.anchorNode, E = P ? P === R || P.contains(R) : !1;
    if (E)
      return !1;
    var D = ua(N, R);
    if (!D)
      return !0;
    if (D ? I = N : (I = N === "v" ? "h" : "v", D = ua(N, R)), !D)
      return !1;
    if (!r.current && "changedTouches" in g && (S || y) && (r.current = I), !I)
      return !0;
    var $ = r.current || I;
    return kv($, b, g, $ === "h" ? S : y);
  }, []), l = p.useCallback(function(g) {
    var b = g;
    if (!(!on.length || on[on.length - 1] !== s)) {
      var w = "deltaY" in b ? da(b) : gr(b), C = t.current.filter(function(I) {
        return I.name === b.type && (I.target === b.target || b.target === I.shadowParent) && Iv(I.delta, w);
      })[0];
      if (C && C.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!C) {
        var S = (i.current.shards || []).map(fa).filter(Boolean).filter(function(I) {
          return I.contains(b.target);
        }), y = S.length > 0 ? a(b, S[0]) : !i.current.noIsolation;
        y && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = p.useCallback(function(g, b, w, C) {
    var S = { name: g, delta: b, target: w, should: C, shadowParent: Av(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== S;
      });
    }, 1);
  }, []), d = p.useCallback(function(g) {
    n.current = gr(g), r.current = void 0;
  }, []), u = p.useCallback(function(g) {
    c(g.type, da(g), g.target, a(g, e.lockRef.current));
  }, []), h = p.useCallback(function(g) {
    c(g.type, gr(g), g.target, a(g, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return on.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, rn), document.addEventListener("touchmove", l, rn), document.addEventListener("touchstart", d, rn), function() {
      on = on.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", l, rn), document.removeEventListener("touchmove", l, rn), document.removeEventListener("touchstart", d, rn);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    v ? p.createElement(s, { styles: Pv(o) }) : null,
    m ? p.createElement(bv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Av(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Dv = sv(cc, Ev);
var Fs = p.forwardRef(function(e, t) {
  return p.createElement(Jr, rt({}, e, { ref: t, sideCar: Dv }));
});
Fs.classNames = Jr.classNames;
var Xo = ["Enter", " "], Mv = ["ArrowDown", "PageUp", "Home"], mc = ["ArrowUp", "PageDown", "End"], Ov = [...Mv, ...mc], Tv = {
  ltr: [...Xo, "ArrowRight"],
  rtl: [...Xo, "ArrowLeft"]
}, _v = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Kn = "Menu", [Fn, Fv, Lv] = ws(Kn), [qt, pc] = gt(Kn, [
  Lv,
  Gl,
  ec
]), Gn = Gl(), gc = ec(), [vc, $t] = qt(Kn), [$v, Wn] = qt(Kn), bc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = Gn(t), [l, c] = p.useState(null), d = p.useRef(!1), u = it(s), h = xs(o);
  return p.useEffect(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => d.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), p.useEffect(() => {
    if (!n)
      return;
    const m = () => u(!1);
    return window.addEventListener("blur", m), () => window.removeEventListener("blur", m);
  }, [n, u]), /* @__PURE__ */ f(Zl, { ...a, children: /* @__PURE__ */ f(
    vc,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ f(
        $v,
        {
          scope: t,
          onClose: p.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
bc.displayName = Kn;
var Bv = "MenuAnchor", Ls = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gn(n);
    return /* @__PURE__ */ f(Sg, { ...o, ...r, ref: t });
  }
);
Ls.displayName = Bv;
var $s = "MenuPortal", [zv, yc] = qt($s, {
  forceMount: void 0
}), wc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = $t($s, t);
  return /* @__PURE__ */ f(zv, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Lt, { present: n || s.open, children: /* @__PURE__ */ f(_s, { asChild: !0, container: o, children: r }) }) });
};
wc.displayName = $s;
var Ve = "MenuContent", [Hv, Bs] = qt(Ve), xc = p.forwardRef(
  (e, t) => {
    const n = yc(Ve, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = $t(Ve, e.__scopeMenu), i = Wn(Ve, e.__scopeMenu);
    return /* @__PURE__ */ f(Fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Lt, { present: r || s.open, children: /* @__PURE__ */ f(Fn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f(Kv, { ...o, ref: t }) : /* @__PURE__ */ f(Gv, { ...o, ref: t }) }) }) });
  }
), Kv = p.forwardRef(
  (e, t) => {
    const n = $t(Ve, e.__scopeMenu), r = p.useRef(null), o = me(t, r);
    return p.useEffect(() => {
      const s = r.current;
      if (s) return ic(s);
    }, []), /* @__PURE__ */ f(
      zs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: re(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Gv = p.forwardRef((e, t) => {
  const n = $t(Ve, e.__scopeMenu);
  return /* @__PURE__ */ f(
    zs,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Wv = /* @__PURE__ */ On("MenuContent.ScrollLock"), zs = p.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: h,
      onDismiss: m,
      disableOutsideScroll: v,
      ...g
    } = e, b = $t(Ve, n), w = Wn(Ve, n), C = Gn(n), S = gc(n), y = Fv(n), [I, R] = p.useState(null), N = p.useRef(null), x = me(t, N, b.onContentChange), P = p.useRef(0), E = p.useRef(""), D = p.useRef(0), $ = p.useRef(null), z = p.useRef("right"), L = p.useRef(0), W = v ? Fs : p.Fragment, A = v ? { as: Wv, allowPinchZoom: !0 } : void 0, T = (M) => {
      const O = E.current + M, H = y().filter((U) => !U.disabled), G = document.activeElement, K = H.find((U) => U.ref.current === G)?.textValue, j = H.map((U) => U.textValue), V = nb(j, O, K), B = H.find((U) => U.textValue === V)?.ref.current;
      (function U(J) {
        E.current = J, window.clearTimeout(P.current), J !== "" && (P.current = window.setTimeout(() => U(""), 1e3));
      })(O), B && setTimeout(() => B.focus());
    };
    p.useEffect(() => () => window.clearTimeout(P.current), []), Rl();
    const k = p.useCallback((M) => z.current === $.current?.side && ob(M, $.current?.area), []);
    return /* @__PURE__ */ f(
      Hv,
      {
        scope: n,
        searchRef: E,
        onItemEnter: p.useCallback(
          (M) => {
            k(M) && M.preventDefault();
          },
          [k]
        ),
        onItemLeave: p.useCallback(
          (M) => {
            k(M) || (N.current?.focus(), R(null));
          },
          [k]
        ),
        onTriggerLeave: p.useCallback(
          (M) => {
            k(M) && M.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: D,
        onPointerGraceIntentChange: p.useCallback((M) => {
          $.current = M;
        }, []),
        children: /* @__PURE__ */ f(W, { ...A, children: /* @__PURE__ */ f(
          Ns,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: re(s, (M) => {
              M.preventDefault(), N.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f(
              Ss,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: h,
                onDismiss: m,
                children: /* @__PURE__ */ f(
                  Vg,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: R,
                    onEntryFocus: re(l, (M) => {
                      w.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      Ng,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": $c(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...C,
                        ...g,
                        ref: x,
                        style: { outline: "none", ...g.style },
                        onKeyDown: re(g.onKeyDown, (M) => {
                          const H = M.target.closest("[data-radix-menu-content]") === M.currentTarget, G = M.ctrlKey || M.altKey || M.metaKey, K = M.key.length === 1;
                          H && (M.key === "Tab" && M.preventDefault(), !G && K && T(M.key));
                          const j = N.current;
                          if (M.target !== j || !Ov.includes(M.key)) return;
                          M.preventDefault();
                          const B = y().filter((U) => !U.disabled).map((U) => U.ref.current);
                          mc.includes(M.key) && B.reverse(), eb(B);
                        }),
                        onBlur: re(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(P.current), E.current = "");
                        }),
                        onPointerMove: re(
                          e.onPointerMove,
                          Ln((M) => {
                            const O = M.target, H = L.current !== M.clientX;
                            if (M.currentTarget.contains(O) && H) {
                              const G = M.clientX > L.current ? "right" : "left";
                              z.current = G, L.current = M.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
xc.displayName = Ve;
var Vv = "MenuGroup", Hs = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(pe.div, { role: "group", ...r, ref: t });
  }
);
Hs.displayName = Vv;
var jv = "MenuLabel", Cc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(pe.div, { ...r, ref: t });
  }
);
Cc.displayName = jv;
var Tr = "MenuItem", ha = "menu.itemSelect", Qr = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = p.useRef(null), i = Wn(Tr, e.__scopeMenu), a = Bs(Tr, e.__scopeMenu), l = me(t, s), c = p.useRef(!1), d = () => {
      const u = s.current;
      if (!n && u) {
        const h = new CustomEvent(ha, { bubbles: !0, cancelable: !0 });
        u.addEventListener(ha, (m) => r?.(m), { once: !0 }), Il(u, h), h.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f(
      Sc,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: re(e.onClick, d),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), c.current = !0;
        },
        onPointerUp: re(e.onPointerUp, (u) => {
          c.current || u.currentTarget?.click();
        }),
        onKeyDown: re(e.onKeyDown, (u) => {
          n || u.target !== u.currentTarget || a.searchRef.current !== "" && u.key === " " || Xo.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Qr.displayName = Tr;
var Sc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = Bs(Tr, n), a = gc(n), l = p.useRef(null), c = me(t, l), [d, u] = p.useState(!1), [h, m] = p.useState("");
    return p.useEffect(() => {
      const v = l.current;
      v && m((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ f(
      Fn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ f(jg, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ f(
          pe.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: re(
              e.onPointerMove,
              Ln((v) => {
                r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: re(
              e.onPointerLeave,
              Ln((v) => i.onItemLeave(v))
            ),
            onFocus: re(e.onFocus, () => u(!0)),
            onBlur: re(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Uv = "MenuCheckboxItem", Nc = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f(Ec, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f(
      Qr,
      {
        role: "menuitemcheckbox",
        "aria-checked": _r(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ws(n),
        onSelect: re(
          o.onSelect,
          () => r?.(_r(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nc.displayName = Uv;
var kc = "MenuRadioGroup", [Yv, qv] = qt(
  kc,
  { value: void 0, onValueChange: () => {
  } }
), Ic = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = it(r);
    return /* @__PURE__ */ f(Yv, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ f(Hs, { ...o, ref: t }) });
  }
);
Ic.displayName = kc;
var Pc = "MenuRadioItem", Rc = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = qv(Pc, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ f(Ec, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ f(
      Qr,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Ws(s),
        onSelect: re(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Rc.displayName = Pc;
var Ks = "MenuItemIndicator", [Ec, Xv] = qt(
  Ks,
  { checked: !1 }
), Ac = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = Xv(Ks, n);
    return /* @__PURE__ */ f(
      Lt,
      {
        present: r || _r(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ f(
          pe.span,
          {
            ...o,
            ref: t,
            "data-state": Ws(s.checked)
          }
        )
      }
    );
  }
);
Ac.displayName = Ks;
var Zv = "MenuSeparator", Dc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(
      pe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Dc.displayName = Zv;
var Jv = "MenuArrow", Mc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gn(n);
    return /* @__PURE__ */ f(kg, { ...o, ...r, ref: t });
  }
);
Mc.displayName = Jv;
var Gs = "MenuSub", [Qv, Oc] = qt(Gs), Tc = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = $t(Gs, t), i = Gn(t), [a, l] = p.useState(null), [c, d] = p.useState(null), u = it(o);
  return p.useEffect(() => (s.open === !1 && u(!1), () => u(!1)), [s.open, u]), /* @__PURE__ */ f(Zl, { ...i, children: /* @__PURE__ */ f(
    vc,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ f(
        Qv,
        {
          scope: t,
          contentId: Et(),
          triggerId: Et(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Tc.displayName = Gs;
var Pn = "MenuSubTrigger", _c = p.forwardRef(
  (e, t) => {
    const n = $t(Pn, e.__scopeMenu), r = Wn(Pn, e.__scopeMenu), o = Oc(Pn, e.__scopeMenu), s = Bs(Pn, e.__scopeMenu), i = p.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s, c = { __scopeMenu: e.__scopeMenu }, d = p.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    p.useEffect(() => d, [d]), p.useEffect(() => {
      const h = a.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [a, l]);
    const u = me(t, o.onTriggerChange);
    return /* @__PURE__ */ f(Ls, { asChild: !0, ...c, children: /* @__PURE__ */ f(
      Sc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? o.contentId : void 0,
        "data-state": $c(n.open),
        ...e,
        ref: u,
        onClick: (h) => {
          e.onClick?.(h), !(e.disabled || h.defaultPrevented) && (h.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: re(
          e.onPointerMove,
          Ln((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: re(
          e.onPointerLeave,
          Ln((h) => {
            d();
            const m = n.content?.getBoundingClientRect();
            if (m) {
              const v = n.content?.dataset.side, g = v === "right", b = g ? -5 : 5, w = m[g ? "left" : "right"], C = m[g ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + b, y: h.clientY },
                  { x: w, y: m.top },
                  { x: C, y: m.top },
                  { x: C, y: m.bottom },
                  { x: w, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(h), h.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: re(e.onKeyDown, (h) => {
          e.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || Tv[r.dir].includes(h.key) && (n.onOpenChange(!0), n.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }
);
_c.displayName = Pn;
var Fc = "MenuSubContent", Lc = p.forwardRef(
  (e, t) => {
    const n = yc(Ve, e.__scopeMenu), { forceMount: r = n.forceMount, align: o = "start", ...s } = e, i = $t(Ve, e.__scopeMenu), a = Wn(Ve, e.__scopeMenu), l = Oc(Fc, e.__scopeMenu), c = p.useRef(null), d = me(t, c);
    return /* @__PURE__ */ f(Fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Lt, { present: r || i.open, children: /* @__PURE__ */ f(Fn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(
      zs,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...s,
        ref: d,
        align: o,
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: re(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: re(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: re(e.onKeyDown, (u) => {
          const h = u.currentTarget.contains(u.target), m = _v[a.dir].includes(u.key);
          h && m && (i.onOpenChange(!1), l.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Lc.displayName = Fc;
function $c(e) {
  return e ? "open" : "closed";
}
function _r(e) {
  return e === "indeterminate";
}
function Ws(e) {
  return _r(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function eb(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function tb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function nb(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = tb(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function rb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, u = l.x, h = l.y;
    d > r != h > r && n < (u - c) * (r - d) / (h - d) + c && (o = !o);
  }
  return o;
}
function ob(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return rb(n, t);
}
function Ln(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var sb = bc, ib = Ls, ab = wc, lb = xc, cb = Hs, ub = Cc, db = Qr, fb = Nc, hb = Ic, mb = Rc, pb = Ac, gb = Dc, vb = Mc, bb = Tc, yb = _c, wb = Lc, eo = "DropdownMenu", [xb] = gt(
  eo,
  [pc]
), De = pc(), [Cb, Bc] = xb(eo), zc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = De(t), c = p.useRef(null), [d, u] = hn({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: eo
  });
  return /* @__PURE__ */ f(
    Cb,
    {
      scope: t,
      triggerId: Et(),
      triggerRef: c,
      contentId: Et(),
      open: d,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((h) => !h), [u]),
      modal: a,
      children: /* @__PURE__ */ f(sb, { ...l, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
};
zc.displayName = eo;
var Hc = "DropdownMenuTrigger", Kc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Bc(Hc, n), i = De(n), a = me(t, s.triggerRef);
    return /* @__PURE__ */ f(ib, { asChild: !0, ...i, children: /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: a,
        onPointerDown: re(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: re(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Kc.displayName = Hc;
var Sb = "DropdownMenuPortal", Gc = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = De(t);
  return /* @__PURE__ */ f(ab, { ...r, ...n });
};
Gc.displayName = Sb;
var Wc = "DropdownMenuContent", Vc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Bc(Wc, n), s = De(n), i = p.useRef(!1);
    return /* @__PURE__ */ f(
      lb,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (a) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: re(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Vc.displayName = Wc;
var Nb = "DropdownMenuGroup", kb = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(cb, { ...o, ...r, ref: t });
  }
);
kb.displayName = Nb;
var Ib = "DropdownMenuLabel", jc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(ub, { ...o, ...r, ref: t });
  }
);
jc.displayName = Ib;
var Pb = "DropdownMenuItem", Uc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(db, { ...o, ...r, ref: t });
  }
);
Uc.displayName = Pb;
var Rb = "DropdownMenuCheckboxItem", Yc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(fb, { ...o, ...r, ref: t });
});
Yc.displayName = Rb;
var Eb = "DropdownMenuRadioGroup", Ab = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(hb, { ...o, ...r, ref: t });
});
Ab.displayName = Eb;
var Db = "DropdownMenuRadioItem", qc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(mb, { ...o, ...r, ref: t });
});
qc.displayName = Db;
var Mb = "DropdownMenuItemIndicator", Ob = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(pb, { ...o, ...r, ref: t });
});
Ob.displayName = Mb;
var Tb = "DropdownMenuSeparator", Xc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(gb, { ...o, ...r, ref: t });
});
Xc.displayName = Tb;
var _b = "DropdownMenuArrow", Fb = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(vb, { ...o, ...r, ref: t });
  }
);
Fb.displayName = _b;
var Lb = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = De(t), [a, l] = hn({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ f(bb, { ...i, open: a, onOpenChange: l, children: n });
}, $b = "DropdownMenuSubTrigger", Zc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(yb, { ...o, ...r, ref: t });
});
Zc.displayName = $b;
var Bb = "DropdownMenuSubContent", Jc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(
    wb,
    {
      ...o,
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
    }
  );
});
Jc.displayName = Bb;
var zb = zc, Hb = Kc, Kb = Gc, Qc = Vc, eu = jc, tu = Uc, nu = Yc, ru = qc, ou = Xc, Gb = Lb, su = Zc, iu = Jc;
const Vn = zb, jn = Hb, ma = Gb, au = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f(
  su,
  {
    ref: o,
    className: de(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
au.displayName = su.displayName;
const Zo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  iu,
  {
    ref: n,
    className: de(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Zo.displayName = iu.displayName;
const gn = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = vs();
  return /* @__PURE__ */ f(Kb, { container: o || void 0, children: /* @__PURE__ */ f(
    Qc,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: de(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
gn.displayName = Qc.displayName;
const Be = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  tu,
  {
    ref: r,
    className: de(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Be.displayName = tu.displayName;
const Wb = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f(
  nu,
  {
    ref: o,
    className: de(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
Wb.displayName = nu.displayName;
const Vb = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
  ru,
  {
    ref: r,
    className: de(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
Vb.displayName = ru.displayName;
const lu = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  eu,
  {
    ref: r,
    className: de(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
lu.displayName = eu.displayName;
const Vt = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  ou,
  {
    ref: n,
    className: de("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
Vt.displayName = ou.displayName;
const jb = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, Vs = (e, t) => {
  if (!e) return null;
  const n = e.trim();
  if (n.startsWith("<")) {
    const o = n.replace(/<svg\b([^>]*)>/i, (s, i) => {
      let a = i;
      return /\bwidth=/.test(a) ? a = a.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'width="100%"') : a += ' width="100%"', /\bheight=/.test(a) ? a = a.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'height="100%"') : a += ' height="100%"', /\bpreserveAspectRatio=/.test(a) ? a = a.replace(
        /\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i,
        'preserveAspectRatio="xMidYMid slice"'
      ) : a += ' preserveAspectRatio="xMidYMid slice"', `<svg${a}>`;
    });
    return /* @__PURE__ */ f(
      "div",
      {
        className: de("pointer-events-none absolute inset-0 z-10", t),
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: o }
      }
    );
  }
  return /* @__PURE__ */ f(
    "img",
    {
      src: e,
      alt: "",
      "aria-hidden": "true",
      className: de(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, js = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ f("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ F(Vn, { modal: !1, children: [
    /* @__PURE__ */ f(jn, { asChild: !0, children: /* @__PURE__ */ f(
      Ae,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ f(wl, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ f(gn, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ F(
      Be,
      {
        onSelect: (s) => jb(s, o),
        disabled: o.disabled,
        children: [
          o.icon && /* @__PURE__ */ f("span", { className: "mr-2 inline-flex", children: o.icon }),
          /* @__PURE__ */ f("span", { children: o.label })
        ]
      },
      o.id
    )) })
  ] }) });
  return n ? /* @__PURE__ */ f("div", { className: "pointer-events-none absolute z-20", style: n, children: r }) : r;
}, Us = (e = []) => {
  const t = ys();
  return e.length > 0 && !t;
}, Ub = ({
  className: e,
  style: t,
  overlaySvg: n,
  overlayClassName: r,
  options: o = [],
  dialog: s,
  dialogProps: i,
  bleedProps: a,
  children: l
}) => {
  const c = xe(Tt), d = Us(o), u = vl(
    {
      ...a,
      pageWidth: a?.pageWidth ?? c?.page?.width ?? 210,
      bleed: a?.bleed ?? c?.page?.bleed ?? 0
    },
    "bleed"
  ), h = s ? fn({ dialog: s }, c) : {};
  return p.useMemo(() => {
    if (!i) return h;
    const m = { ...h, ...i };
    return (h.className || i.className) && (m.className = `${h.className || ""} ${i.className || ""}`.trim()), Object.keys(h).forEach((v) => {
      const g = h[v], b = i[v];
      v.startsWith("on") && typeof g == "function" && typeof b == "function" && (m[v] = (w) => {
        g(w), b(w);
      });
    }), m;
  }, [h, i]), /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(ps, { ...a, dialog: s, children: [
      Vs(n, r),
      l
    ] }),
    js(o, d, u)
  ] });
};
function Ys(e) {
  const t = xe(Tt), n = hs({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, s = e.pageHeight ?? t?.page?.height ?? 297, {
    src: i,
    imageClassName: a,
    side: l,
    backgroundColor: c,
    width: d,
    height: u,
    left: h = 0,
    right: m = 0,
    top: v = 0,
    bottom: g = 0
  } = e, b = (L) => `${L}mm`, w = () => ms({ width: d, left: h, right: m }, o, r, 2), C = () => {
    let L = u;
    return u ? !v && !g && (L += r) : (L = s, v || (L += r), g || (L += r), (v || g) && (L -= (v ?? 0) + (g ?? 0))), L;
  }, S = w(), y = C(), I = (L) => L !== void 0 ? b(L) : void 0, R = (L) => Object.fromEntries(
    Object.entries(L).filter(([W, A]) => A !== void 0)
  ), N = h > 0 ? h + r : 0, x = v > 0 ? v + r : 0, P = g > 0 ? g + r : 0, E = -1 * o + N, D = v > 0 && g > 0, $ = R({
    backgroundColor: c,
    width: I(S),
    ...D ? { height: I(y) } : {},
    left: I(N),
    top: I(x),
    bottom: I(P)
  }), z = R({
    width: I(S),
    ...D ? { height: I(y) } : {},
    left: I(E),
    top: I(x),
    bottom: I(P)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: l == "end" ? z : $, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ F("div", { className: "uhuu-image-inner", ...fn(e, t), children: [
    /* @__PURE__ */ f(
      "img",
      {
        className: de("cover-image object-cover object-center", a),
        src: i || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const Yb = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: s
}) => {
  const i = xe(Tt), a = Us(n), l = vl(
    {
      ...o,
      pageWidth: o?.pageWidth ?? i?.page?.width ?? 210,
      bleed: o?.bleed ?? i?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(Ys, { ...o, dialog: r, children: [
      Vs(e, t),
      s
    ] }),
    js(n, a, l)
  ] });
}, qb = ({
  src: e,
  alt: t = "",
  className: n,
  imageClassName: r,
  style: o,
  imageStyle: s,
  overlaySvg: i,
  overlayClassName: a,
  options: l = [],
  dialog: c,
  dialogProps: d,
  placeholder: u,
  children: h,
  imageProps: m,
  renderImage: v,
  onError: g
}) => {
  const b = xe(Tt), w = c ? fn({ dialog: c }, b) : {}, C = Us(l), S = hs({
    onError: (E) => {
      g?.(E), m?.onError?.(E);
    }
  }), y = p.useMemo(() => {
    if (!d) return w;
    const E = { ...w, ...d };
    return (w.className || d.className) && (E.className = de(w.className, d.className)), Object.keys(w).forEach((D) => {
      const $ = w[D], z = d[D];
      D.startsWith("on") && typeof $ == "function" && typeof z == "function" && (E[D] = (L) => {
        $(L), z(L);
      });
    }), E;
  }, [w, d]), I = () => {
    const E = m?.className, D = m?.style, $ = m?.src ?? e, z = m?.alt ?? t, L = {
      ...m,
      src: $,
      alt: z,
      className: de("h-full w-full object-cover", r, E),
      style: { ...s, ...D }
    };
    return v ? v(L) : $ ? /* @__PURE__ */ f("img", { ...L, onError: S }) : u ?? null;
  }, R = y["data-uhuu"], N = p.Children.toArray(h).some((E) => p.isValidElement(E) ? E.type === Ys || E.type === ps : !1);
  N && delete y["data-uhuu"];
  const x = p.Children.map(h, (E) => p.isValidElement(E) ? p.cloneElement(E, { dataUhuu: R }) : E);
  return /* @__PURE__ */ F("div", { className: de(N ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ F("div", { className: "relative h-full w-full", ...y, children: [
      I(),
      x,
      Vs(i, a)
    ] }),
    js(l, C)
  ] });
}, Yx = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = ee(() => {
    const { annotation: A, dialog: T, overlaySvg: k, options: M, src: O } = e;
    if (!A && !T)
      return {
        computedOverlaySvg: k,
        computedOptions: M,
        computedDirectDialog: void 0
      };
    const H = A?.value || {}, G = k ?? H.annotationSvg ?? "", K = [];
    if (A) {
      if (T) {
        const ae = {
          ...T
          // Spread everything (path, type, ratio, etc.)
        };
        if (T.type === "satellite") {
          const { path: ge, type: le, ...Ne } = T;
          ae.config = {
            ...Ne,
            path: "image"
          }, ae.path = ge, ae.type = le;
        }
        K.push({
          id: "edit",
          label: "Edit image",
          dialog: ae
        });
      }
      const B = Array.isArray(H.annotations) ? H.annotations : [], { path: U, value: J, annotations: Z, ...X } = A, te = {
        path: A.path,
        type: "annotation",
        image: O,
        annotations: B,
        ...X
        // Spread extra config (visualGallery, etc.)
      };
      K.push({
        id: "annotate",
        label: "Annotate",
        dialog: te
      });
    }
    const j = M ? [...K, ...M] : K;
    let V;
    if (T) {
      const B = {
        ...T
        // Spread everything (path, type, ratio, etc.)
      };
      if (T.type === "satellite") {
        const { path: U, type: J, ...Z } = T;
        B.config = {
          ...Z,
          path: "image"
        }, B.path = U, B.type = J;
      }
      V = B;
    }
    return {
      computedOverlaySvg: G,
      computedOptions: j.length > 0 ? j : void 0,
      computedDirectDialog: V
    };
  }, [e.annotation, e.dialog, e.overlaySvg, e.options, e.src]), o = ee(() => e.mode ? e.mode : e.side !== void 0 ? "spread" : e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto", [e.mode, e.side, e.width, e.height, e.left, e.right, e.top, e.bottom]), s = o === "auto" || // Auto mode always uses ImageWithOptions
  n && n.length > 0 || t || r || // Need wrapper for click-to-edit
  e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, {
    mode: i,
    side: a,
    src: l,
    alt: c,
    className: d,
    imageClassName: u,
    style: h,
    imageStyle: m,
    backgroundColor: v,
    width: g,
    height: b,
    left: w,
    right: C,
    top: S,
    bottom: y,
    pageWidth: I,
    pageHeight: R,
    bleed: N,
    overlayClassName: x,
    dialogProps: P,
    placeholder: E,
    children: D,
    imageProps: $,
    renderImage: z,
    onError: L
  } = e, W = {
    src: l,
    backgroundColor: v,
    width: g,
    height: b,
    left: w,
    right: C,
    top: S,
    bottom: y,
    pageWidth: I,
    pageHeight: R,
    bleed: N,
    imageClassName: u,
    onError: L
  };
  if (o === "auto")
    return /* @__PURE__ */ f(
      qb,
      {
        src: l,
        alt: c,
        className: d,
        style: h,
        imageClassName: u,
        imageStyle: m,
        overlaySvg: t,
        overlayClassName: x,
        options: n,
        dialog: r,
        dialogProps: P,
        placeholder: E,
        children: D,
        imageProps: $,
        renderImage: z,
        onError: L
      }
    );
  if (o === "spread") {
    const A = { ...W, side: a, imageClassName: u };
    return s && (t || n?.length || r) ? /* @__PURE__ */ f(
      Yb,
      {
        className: d,
        style: h,
        overlaySvg: t,
        overlayClassName: x,
        options: n,
        dialog: r,
        dialogProps: P,
        spreadProps: A,
        children: D
      }
    ) : /* @__PURE__ */ f(Ys, { ...A });
  }
  return s && (t || n?.length || r) ? /* @__PURE__ */ f(
    Ub,
    {
      className: d,
      style: h,
      overlaySvg: t,
      overlayClassName: x,
      options: n,
      dialog: r,
      dialogProps: P,
      bleedProps: W,
      children: D
    }
  ) : /* @__PURE__ */ f(ps, { ...W });
}, Xt = "uhuu_page_editor";
function Fe(e) {
  return e.kind === "group";
}
function Xb(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Fe(r))
      for (const o of r.pages)
        t.push({
          ...o,
          kind: "page",
          pageNum: n++
        });
    else
      t.push({
        ...r,
        pageNum: n++
      });
  return t;
}
function Zb(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Fe(r)) {
      const o = r.pages.map((s) => ({
        ...s,
        kind: "page",
        pageNum: n++
      }));
      t.push({
        ...r,
        pages: o
      });
    } else
      t.push({
        ...r,
        pageNum: n++
      });
  return t;
}
function mt(e) {
  return Xb(e).length;
}
function Jb(e) {
  return e.map((t) => {
    const n = t.strictPosition;
    if (Fe(t)) {
      const r = t.pages[0], o = r?.componentKey ?? r?.id;
      return {
        kind: "group",
        id: t.id,
        groupId: t.id,
        firstPageId: r?.id,
        firstPageComponentKey: o,
        firstPageComponent: r?.component,
        // Pass component from first page
        pageCount: t.pages.length,
        label: t.label || `${t.id} (${t.pages.length} pages)`,
        strictPosition: n
        // Preserve strictPosition
      };
    } else {
      const r = t.componentKey ?? t.id;
      return {
        kind: "page",
        id: t.id,
        label: t.label,
        pageId: t.id,
        pageComponentKey: r,
        pageLabel: t.label,
        pageNum: t.pageNum,
        pageComponent: t.component,
        // Pass component from page
        strictPosition: n
        // Preserve strictPosition
      };
    }
  });
}
function Qb(e, t) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((o) => {
    n.set(o.id, o);
  });
  const r = [];
  for (const o of e) {
    const s = n.get(o.id);
    s && r.push(s);
  }
  return r;
}
function qs(e) {
  return e.map((t) => {
    if ("kind" in t && t.kind)
      return t;
    if (t.pages && Array.isArray(t.pages))
      return {
        kind: "group",
        ...t,
        pages: (t.pages ?? []).map((s) => {
          const { kind: i, ...a } = s || {};
          return {
            kind: "page",
            ...a
          };
        })
      };
    const { kind: r, ...o } = t;
    return {
      kind: "page",
      ...o
    };
  });
}
function cu(e, t = Xt) {
  const n = qs(e);
  return {
    key: t,
    items: n,
    totalPages: mt(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function ey(e, t = Xt) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = qs(n.items);
  return {
    key: t,
    items: r,
    totalPages: mt(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function ty(e, t, n = Xt) {
  const r = cu(t, n);
  return { ...e ?? {}, [n]: r };
}
function uu() {
  return Math.random().toString(36).slice(2, 11);
}
function du(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? uu() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function fu(e, t, n) {
  const r = n?.repeatable ? uu() : e;
  return {
    kind: "group",
    id: r,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable ?? !1,
    maxInstances: n?.maxInstances ?? null,
    pages: t.map((o, s) => {
      const i = typeof o == "string" ? o : o.key, a = typeof o == "string" ? void 0 : o.dataKey, l = typeof o == "string" ? void 0 : o.hasFlow;
      return {
        id: `${r}__${a ?? i}__${s}`,
        componentKey: i,
        templateId: i,
        ...a ? { dataKey: a } : {},
        ...l ? { hasFlow: l } : {}
      };
    }),
    ...n
  };
}
function pa(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function Jo(e, t, n) {
  for (const r of t) {
    const o = pa(r.start, n), s = pa(r.end, n);
    if (e >= o && e <= s)
      return !0;
  }
  return !1;
}
function hu(e, t, n = 2) {
  switch (e) {
    case "all":
      return [{ start: 1, end: t }];
    case "cover":
      return [
        { start: 1, end: n },
        { start: -n, end: -1 }
      ];
    case "text":
      return t <= n * 2 ? [] : [{ start: n + 1, end: -(n + 1) }];
    default:
      return [];
  }
}
function ny(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = mt(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, s = r === "custom" && t.ranges ? t.ranges : hu(r, n, o);
  if (s.length === 0)
    return [];
  const i = [];
  for (const a of e)
    if (Fe(a)) {
      const l = a.pages.filter((c) => c.pageNum && Jo(c.pageNum, s, n));
      l.length > 0 && i.push({
        ...a,
        pages: l
      });
    } else
      a.pageNum && Jo(a.pageNum, s, n) && i.push(a);
  return i;
}
function ry(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, s = r === "custom" && n.ranges ? n.ranges : hu(r, t, o);
  return s.length === 0 ? !1 : Jo(e, s, t);
}
function mu(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function oy(e, t) {
  return t && Fe(t) ? t.id : e?.id ?? null;
}
function pu(e, t, n) {
  const r = oy(t, n);
  return r ? {
    instanceId: r,
    integration: mu(e, r)
  } : { instanceId: null, integration: void 0 };
}
function gu(e, t, n) {
  return pu(e, t, n).integration;
}
function ga(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function sy(e) {
  if (!e)
    return { instanceId: null, fieldPath: e, isIntegrationPath: !1 };
  const t = "integrations.";
  if (e.startsWith(t)) {
    const n = e.slice(t.length), r = n.indexOf(".");
    if (r > 0) {
      const o = n.slice(0, r), s = n.slice(r + 1);
      return { instanceId: o, fieldPath: s, isIntegrationPath: !0 };
    } else
      return { instanceId: n, fieldPath: "", isIntegrationPath: !0 };
  }
  return { instanceId: null, fieldPath: e, isIntegrationPath: !1 };
}
function iy(e, t, n) {
  if (!t) return n;
  const r = t.split("."), o = { ...e };
  let s = o;
  for (let a = 0; a < r.length - 1; a++) {
    const l = r[a];
    !(l in s) || typeof s[l] != "object" || s[l] === null ? s[l] = {} : s[l] = { ...s[l] }, s = s[l];
  }
  const i = r[r.length - 1];
  return s[i] = n, o;
}
function ay(e, t, n) {
  const r = sy(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: s } = r, i = mu(e, o) || {}, a = iy(
    i,
    s,
    n
  );
  return {
    ...e,
    integrations: {
      ...e?.integrations || {},
      [o]: a
    }
  };
}
function Fr(e, t) {
  if (!e || !t) return;
  const n = typeof t == "string" ? t : t?.id, r = typeof t == "string" ? void 0 : t?.templateId ?? t?.componentKey, o = typeof t == "string" ? void 0 : t?.componentKey, s = Array.from(
    new Set(
      [n, r, o].filter(Boolean)
    )
  );
  for (const i of s)
    if (e?.pages?.[i] !== void 0) return e.pages[i];
  for (const i of s)
    if (e?.groups?.[i] !== void 0) return e.groups[i];
  for (const i of s)
    if (e[i] !== void 0) return e[i];
}
const Un = p.createContext(null);
function ly(e = Xt) {
  return [e];
}
function cy(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function vu({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = Xt
}) {
  const [o, s] = p.useState(e ?? {}), i = p.useRef(null), a = p.useRef(!1), l = p.useRef(null), c = p.useRef(0), d = p.useRef(!0), u = p.useCallback((x) => {
    try {
      return JSON.stringify(x);
    } catch {
      return String(x);
    }
  }, []), h = p.useMemo(() => ly(r), [r]), m = p.useCallback((x, P) => {
    if (!x) return null;
    const E = { ...x };
    return P.forEach((D) => {
      delete E[D];
    }), E;
  }, []);
  p.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (i.current = e, s(e));
      return;
    }
    if (a.current) {
      a.current = !1;
      const E = l.current !== null ? u(m(l.current, h)) : null, D = u(m(e, h));
      if (E !== null && E === D) {
        i.current = e;
        return;
      }
    }
    if (e === i.current)
      return;
    if (Date.now() - c.current < 500 && l.current !== null) {
      const E = m(e, h), D = m(l.current, h), $ = E ? u(E) : null, z = D ? u(D) : null;
      if ($ && $ === z) {
        l.current = null, i.current = e;
        return;
      }
    }
    i.current = e, s((E) => e ? cy(E, e, h) : E);
  }, [e, h, u, m]);
  const v = p.useCallback(
    (x) => {
      if (t?.(x), typeof window > "u") return;
      const P = window.$uhuu;
      P?.emitPayload && P.emitPayload(x);
    },
    [t]
  ), g = p.useCallback(
    (x) => {
      a.current = !0, s((P) => {
        const E = typeof x == "function" ? x(P) : x;
        let D = E;
        return E && typeof E == "object" && Object.keys(E).filter(
          (z) => z.startsWith("integrations.") || z === "integrations"
        ).length > 0 && E.integrations && (D = E), l.current = D, c.current = Date.now(), queueMicrotask(() => v(D)), D;
      });
    },
    [v]
  ), b = p.useCallback(
    (x, P, E) => {
      g((D) => ({
        ...D ?? {},
        pages: {
          ...D?.pages ?? {},
          [x]: {
            ...D?.pages?.[x] ?? {},
            [P]: E
          }
        }
      }));
    },
    [g]
  ), w = p.useCallback(
    (x, P) => {
      g((E) => {
        const D = E?.integrations ?? {}, $ = D[x], z = typeof P == "function" ? P($) : P;
        return {
          ...E ?? {},
          integrations: {
            ...D,
            [x]: z
          }
        };
      });
    },
    [g]
  ), C = p.useCallback(
    (x, P, E) => {
      w(x, (D) => ({
        ...D ?? {},
        [P]: E
      }));
    },
    [w]
  ), S = p.useCallback(
    (x) => {
      g((P) => {
        if (!P?.integrations || !P.integrations[x])
          return P;
        const { [x]: E, ...D } = P.integrations;
        return {
          ...P,
          integrations: Object.keys(D).length > 0 ? D : void 0
        };
      });
    },
    [g]
  ), y = p.useCallback(
    (x, P) => {
      g((E) => ay(E, x, P));
    },
    [g]
  ), I = p.useCallback(
    (x, P) => {
      const E = P ?? r;
      g((D) => ty(D, x, E));
    },
    [g, r]
  ), R = p.useCallback(
    (x) => Fr(o, x),
    [o]
  ), N = p.useMemo(
    () => ({
      payload: o,
      setPayload: g,
      setPageOptionValue: b,
      setIntegrationPayload: w,
      setIntegrationPayloadValue: C,
      removeIntegrationPayload: S,
      updateIntegrationByDialogPath: y,
      mergePageEditorState: I,
      getPagePayload: R
    }),
    [
      o,
      g,
      b,
      w,
      C,
      S,
      y,
      I,
      R
    ]
  );
  return /* @__PURE__ */ f(Un.Provider, { value: N, children: n });
}
function uy(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function dy(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function fy(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (s) => {
      const i = t?.pages?.[s.id]?.[r];
      return i === void 0 ? uy(e) : e.type === "toggle" ? !!i : i;
    },
    onChange: (s, i) => {
      n(s, r, dy(e, i));
    }
  };
}
function hy(e) {
  switch (e) {
    case "fit-width":
      return "width";
    case "fit-height":
      return "height";
    case "fit-page":
      return "both";
    default:
      return "none";
  }
}
function my(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function py(e, t) {
  if (e === "two_pages")
    return my(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function gy({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
  const r = n - Math.max(t, 0), o = [e, r].filter((s) => s > 0);
  return o.length ? Math.min(...o) : 0;
}
function vy({
  paneWidth: e,
  paneHeight: t,
  paddingX: n = 0,
  paddingY: r = 0,
  chromeHeight: o = 0
}) {
  return {
    availableWidth: Math.max(e - n, 0),
    availableHeight: Math.max(t - r - o, 0)
  };
}
function by({
  mode: e,
  contentWidth: t,
  contentHeight: n,
  availableWidth: r,
  availableHeight: o,
  minZoom: s,
  maxZoom: i
}) {
  if (e === "none" || t <= 0 || n <= 0 || r <= 0 || o <= 0)
    return null;
  const a = r / t * 100, l = o / n * 100, c = e === "width" ? a : e === "height" ? l : Math.min(a, l);
  return Math.min(Math.max(c, s), i);
}
function yy(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function wy(e, t, n, r) {
  if (e.width <= 0 || e.height <= 0) return { deltaLeft: 0, deltaTop: 0 };
  const o = n - e.left, s = r - e.top, i = t.left + o * (t.width / e.width), a = t.top + s * (t.height / e.height);
  return {
    deltaLeft: i - n,
    deltaTop: a - r
  };
}
function Do(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function xy(e, t, n) {
  let r = -1, o = 1 / 0;
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (i.width <= 0 || i.height <= 0) continue;
    if (t >= i.left && t <= i.left + i.width && n >= i.top && n <= i.top + i.height) return s;
    const l = t - (i.left + i.width / 2), c = n - (i.top + i.height / 2), d = l * l + c * c;
    d < o && (o = d, r = s);
  }
  return r;
}
function va(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
const Cy = 24, Sy = 64, Ny = {
  // Auto margins centre the stack while it fits and collapse to 0 once it overflows, which is
  // what keeps both edges reachable. Padding sits on the content box so `scrollWidth` counts
  // the right-hand gutter.
  width: "max-content",
  margin: "auto",
  padding: `0 ${Cy}px ${Sy}px`,
  overflowAnchor: "none"
};
function ky(e) {
  let t = e, n = null, r = null;
  for (; t && t !== document.documentElement; ) {
    const s = window.getComputedStyle(t);
    if (!n && va(s.overflowX) && (n = t), !r && va(s.overflowY) && (r = t), n && r) return { x: n, y: r };
    t = t.parentElement;
  }
  const o = document.scrollingElement;
  return { x: n ?? o, y: r ?? o };
}
function Iy(e) {
  const t = Math.max(e.getBoundingClientRect().top, 0);
  let n = 0, r = e.parentElement;
  for (; r && r !== document.documentElement; ) {
    const o = window.getComputedStyle(r);
    o.display !== "contents" && (n += (Number.parseFloat(o.paddingBottom) || 0) + (Number.parseFloat(o.borderBottomWidth) || 0) + Math.max(Number.parseFloat(o.marginBottom) || 0, 0)), r = r.parentElement;
  }
  return t + n;
}
function Py(e) {
  const t = e.querySelector("[data-section-content]"), n = t?.closest('[class*="group/section"]');
  if (!t || !n) return 0;
  const r = t.getBoundingClientRect().height;
  return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
const Lr = Ot({ zoom: 100, scaleValue: 1, hideUI: !1 });
function Ry({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = xe(Lr), o = ue(null);
  return ce(() => {
    if (!o.current) return;
    const s = () => {
      const l = o.current?.querySelectorAll("[data-section-content]");
      if (!l?.length) return;
      const c = Array.from(l).reduce((d, u) => {
        const h = Number.parseInt(u.getAttribute("data-natural-width") || "0");
        return d + h;
      }, 0);
      if (c > 0) {
        const d = c * r;
        o.current?.style.setProperty("--uhuu-group-pair-width", `${d}px`);
      }
    };
    s();
    const i = new ResizeObserver(s);
    return o.current.querySelectorAll("[data-section-content]").forEach((l) => i.observe(l)), () => i.disconnect();
  }, [e, r]), /* @__PURE__ */ f(
    "div",
    {
      ref: o,
      className: `two-pages-pair two-pages-pair--${t}`,
      "data-page-item-id": n,
      children: e
    }
  );
}
function Ey(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function Ay(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const s = n.querySelector("[data-section-content]");
    return s ? [s] : [];
  })();
  if (!r.length) return null;
  const o = r.map(Ey).filter((s) => s !== null);
  return py(t, o);
}
function Mo({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: s, hideUI: i } = xe(Lr), a = ue(null), [l, c] = ie(0), [d, u] = ie(0);
  ce(() => {
    if (a.current) {
      const w = () => {
        const S = a.current;
        if (S) {
          const y = S.style.transform;
          S.style.transform = "scale(1)";
          const I = S.scrollHeight, R = S.scrollWidth;
          S.style.transform = y, c(I), u(R);
        }
      };
      w();
      const C = new ResizeObserver(w);
      return C.observe(a.current), () => {
        C.disconnect();
      };
    }
  }, [e]);
  const h = l * s, m = Math.max(d * s, 150), v = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: g, origin: b } = v[o];
  return i ? /* @__PURE__ */ f("div", { className: n, children: e }) : /* @__PURE__ */ F(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${m}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ f("div", { children: r ?? /* @__PURE__ */ f("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ F("div", { className: "text-sm font-medium text-gray-700", children: [
          t,
          " Controls"
        ] }) }) }),
        /* @__PURE__ */ f(
          "div",
          {
            className: "pt-1",
            style: {
              height: h > 0 ? `${h + 32}px` : "auto",
              minHeight: "100px"
            },
            children: /* @__PURE__ */ f("div", { className: `flex items-start ${g}`, children: /* @__PURE__ */ f(
              "div",
              {
                ref: a,
                "data-section-content": !0,
                "data-natural-width": d,
                "data-natural-height": l,
                style: {
                  transform: `scale(${s})`,
                  transformOrigin: b
                },
                children: e
              }
            ) })
          }
        )
      ]
    }
  );
}
function Dy({
  children: e,
  className: t = "",
  defaultZoom: n = 100,
  minZoom: r = 25,
  maxZoom: o = 200,
  onAddPage: s,
  menuItems: i,
  hideUI: a,
  preview: l = "single_page",
  defaultZoomMode: c = "manual",
  scrollMode: d = "pane"
}) {
  const u = ys(), h = a ?? u, [m, v] = ie(n), [g, b] = ie(() => hy(c)), [w, C] = ie(0), S = ue(null), y = ue(null), I = ue(null), R = ue(null), N = ue(m);
  ce(() => {
    N.current = m;
  }, [m]);
  const x = he(() => d === "pane" && y.current ? { x: y.current, y: y.current } : ky(S.current), [d]), P = he((A, T, k) => {
    const M = Math.min(Math.max(A, r), o), O = R.current;
    if (!O) {
      v(M), b("none");
      return;
    }
    const H = x(), G = Array.from(O.querySelectorAll("[data-section-content]")), K = xy(
      G.map((J) => Do(J.getBoundingClientRect())),
      T,
      k
    ), j = K >= 0 ? G[K] : O, V = Do(j.getBoundingClientRect()), B = yy(V, T, k);
    uf(() => {
      v(M), b("none");
    });
    const U = () => {
      const J = Do(j.getBoundingClientRect()), { deltaLeft: Z, deltaTop: X } = wy(V, J, B.clientX, B.clientY);
      Z !== 0 && H.x && (H.x.scrollLeft += Z), X !== 0 && H.y && (H.y.scrollTop += X);
    };
    U(), window.requestAnimationFrame(U);
  }, [o, r, x]), E = he(() => {
    const T = (d === "pane" ? y.current : S.current)?.getBoundingClientRect();
    return T ? { clientX: T.left + T.width / 2, clientY: T.top + T.height / 2 } : { clientX: 0, clientY: 0 };
  }, [d]), D = he(() => {
    const A = R.current;
    if (g === "none" || !A) return;
    const T = Ay(A, l);
    if (!T) return;
    const k = d === "pane" ? y.current : S.current;
    if (!k) return;
    const M = k.getBoundingClientRect(), O = k.ownerDocument.defaultView ?? window, H = O.visualViewport?.height ?? k.ownerDocument.documentElement.clientHeight ?? O.innerHeight, G = k.clientWidth || M.width, K = d === "pane" ? gy({
      paneClientHeight: k.clientHeight || M.height,
      paneTop: M.top,
      viewportHeight: H
    }) : H - Math.max(M.top, 0), j = I.current ? window.getComputedStyle(I.current) : null, V = j ? Number.parseFloat(j.paddingLeft) + Number.parseFloat(j.paddingRight) : 0, B = j ? Number.parseFloat(j.paddingTop) + Number.parseFloat(j.paddingBottom) : 0, { availableWidth: U, availableHeight: J } = vy({
      paneWidth: G,
      paneHeight: K,
      paddingX: V,
      paddingY: B,
      chromeHeight: Py(A)
    }), Z = by({
      mode: g,
      contentWidth: T.width,
      contentHeight: T.height,
      availableWidth: U,
      availableHeight: J,
      minZoom: r,
      maxZoom: o
    });
    Z !== null && v((X) => Math.abs(X - Z) < 0.01 ? X : Z);
  }, [g, o, r, l, d]), $ = (A) => {
    b(A);
  }, z = () => {
    const A = E();
    P(m + 25, A.clientX, A.clientY);
  }, L = () => {
    const A = E();
    P(m - 25, A.clientX, A.clientY);
  };
  ce(() => {
    if (g === "none" || !S.current || !R.current) return;
    let A = 0;
    const T = () => {
      window.cancelAnimationFrame(A), A = window.requestAnimationFrame(D);
    }, k = new ResizeObserver(T);
    k.observe(S.current), y.current && k.observe(y.current), k.observe(R.current);
    const M = () => {
      R.current?.querySelectorAll("[data-section-content]").forEach((H) => {
        k.observe(H);
      });
    };
    M();
    const O = new MutationObserver(() => {
      M(), T();
    });
    return O.observe(R.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", T), window.visualViewport?.addEventListener("resize", T), T(), () => {
      window.cancelAnimationFrame(A), k.disconnect(), O.disconnect(), window.removeEventListener("resize", T), window.visualViewport?.removeEventListener("resize", T);
    };
  }, [g, D]), ce(() => {
    if (h || d !== "pane") return;
    const A = S.current;
    if (!A) return;
    const T = () => {
      const M = Iy(A);
      C((O) => Math.abs(O - M) < 0.5 ? O : M);
    };
    T();
    const k = new ResizeObserver(T);
    return k.observe(A), window.addEventListener("resize", T), window.visualViewport?.addEventListener("resize", T), () => {
      k.disconnect(), window.removeEventListener("resize", T), window.visualViewport?.removeEventListener("resize", T);
    };
  }, [h, d]), ce(() => {
    if (h) return;
    let A = null, T = null, k = null, M = { clientX: 0, clientY: 0 }, O = null, H = !1;
    const G = () => {
      A = null;
      const V = k;
      k = null, V !== null && P(V, M.clientX, M.clientY);
    }, K = (V) => {
      if (!V.ctrlKey && !V.metaKey) return;
      V.preventDefault();
      const B = 16, U = V.deltaMode === 1 ? V.deltaY * B : V.deltaMode === 2 ? V.deltaY * B * 32 : V.deltaY, J = k ?? N.current, Z = Math.min(Math.max(J * Math.pow(1.003, -U), r), o);
      M = { clientX: V.clientX, clientY: V.clientY }, !(Z === J && k === null) && (k = Z, A === null && (A = window.requestAnimationFrame(G)));
    }, j = () => {
      if (T = null, !H) {
        if (O = d === "pane" ? y.current : S.current, !O) {
          T = window.requestAnimationFrame(j);
          return;
        }
        O.addEventListener("wheel", K, { passive: !1 });
      }
    };
    return j(), () => {
      H = !0, A !== null && window.cancelAnimationFrame(A), T !== null && window.cancelAnimationFrame(T), O?.removeEventListener("wheel", K);
    };
  }, [P, h, o, r, d]);
  const W = m / 100;
  return h ? /* @__PURE__ */ f(Lr.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ f("div", { className: t, children: e }) }) : /* @__PURE__ */ f(Lr.Provider, { value: { zoom: m, scaleValue: W, hideUI: !1 }, children: /* @__PURE__ */ F("div", { ref: S, className: `flex flex-col flex-1 min-h-0 ${t}`, children: [
    /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      i,
      /* @__PURE__ */ f("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ F(Vn, { modal: !1, children: [
        /* @__PURE__ */ f(jn, { asChild: !0, children: /* @__PURE__ */ F(Ae, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(m),
          "%",
          /* @__PURE__ */ f(yl, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ F(gn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ F(
            Be,
            {
              onClick: () => $("width"),
              className: `cursor-pointer flex items-center ${g === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(vm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ F(
            Be,
            {
              onClick: () => $("height"),
              className: `cursor-pointer flex items-center ${g === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(ym, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ F(
            Be,
            {
              onClick: () => $("both"),
              className: `cursor-pointer flex items-center ${g === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(im, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ f(Vt, { className: "my-1.5" }),
          /* @__PURE__ */ F("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (A) => A.stopPropagation(), children: [
            /* @__PURE__ */ f(
              Ae,
              {
                variant: "ghost",
                size: "sm",
                onClick: (A) => {
                  A.stopPropagation(), L();
                },
                disabled: m <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ f(Nm, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ F("div", { className: "relative", children: [
              /* @__PURE__ */ f(
                "input",
                {
                  type: "number",
                  value: Math.round(m),
                  onChange: (A) => {
                    const T = Number.parseInt(A.target.value);
                    if (!isNaN(T)) {
                      const k = E();
                      P(T, k.clientX, k.clientY);
                    }
                  },
                  onFocus: (A) => A.target.select(),
                  className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  min: r,
                  max: o
                }
              ),
              /* @__PURE__ */ f("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ f(
              Ae,
              {
                variant: "ghost",
                size: "sm",
                onClick: (A) => {
                  A.stopPropagation(), z();
                },
                disabled: m >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ f(Cm, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f(
      "div",
      {
        ref: y,
        className: d === "pane" ? "uhuu-zoom-pane" : void 0,
        style: d === "pane" ? {
          height: `calc(100dvh - ${w}px)`,
          maxHeight: "100%",
          overflow: "auto",
          overscrollBehavior: "contain"
        } : void 0,
        children: /* @__PURE__ */ f("div", { ref: I, className: "uhuu-zoom-pane-content", style: Ny, children: /* @__PURE__ */ f("div", { ref: R, className: l === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e }) })
      }
    )
  ] }) });
}
var to = "Dialog", [bu, yu] = gt(to), [My, Ze] = bu(to), Xs = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = p.useRef(null), l = p.useRef(null), [c, d] = hn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: to
  });
  return /* @__PURE__ */ f(
    My,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Et(),
      titleId: Et(),
      descriptionId: Et(),
      open: c,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((u) => !u), [d]),
      modal: i,
      children: n
    }
  );
};
Xs.displayName = to;
var wu = "DialogTrigger", xu = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(wu, n), s = me(t, o.triggerRef);
    return /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Qs(o.open),
        ...r,
        ref: s,
        onClick: re(e.onClick, o.onOpenToggle)
      }
    );
  }
);
xu.displayName = wu;
var Zs = "DialogPortal", [Oy, Cu] = bu(Zs, {
  forceMount: void 0
}), Js = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Ze(Zs, t);
  return /* @__PURE__ */ f(Oy, { scope: t, forceMount: n, children: p.Children.map(r, (i) => /* @__PURE__ */ f(Lt, { present: n || s.open, children: /* @__PURE__ */ f(_s, { asChild: !0, container: o, children: i }) })) });
};
Js.displayName = Zs;
var $r = "DialogOverlay", no = p.forwardRef(
  (e, t) => {
    const n = Cu($r, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze($r, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(Lt, { present: r || s.open, children: /* @__PURE__ */ f(_y, { ...o, ref: t }) }) : null;
  }
);
no.displayName = $r;
var Ty = /* @__PURE__ */ On("DialogOverlay.RemoveScroll"), _y = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze($r, n), s = Zm(), i = me(t, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Fs, { as: Ty, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        pe.div,
        {
          "data-state": Qs(o.open),
          ...r,
          ref: i,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), dn = "DialogContent", ro = p.forwardRef(
  (e, t) => {
    const n = Cu(dn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze(dn, e.__scopeDialog);
    return /* @__PURE__ */ f(Lt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(Fy, { ...o, ref: t }) : /* @__PURE__ */ f(Ly, { ...o, ref: t }) });
  }
);
ro.displayName = dn;
var Fy = p.forwardRef(
  (e, t) => {
    const n = Ze(dn, e.__scopeDialog), r = p.useRef(null), o = me(t, n.contentRef, r);
    return p.useEffect(() => {
      const s = r.current;
      if (s) return ic(s);
    }, []), /* @__PURE__ */ f(
      Su,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: re(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: re(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Ly = p.forwardRef(
  (e, t) => {
    const n = Ze(dn, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ f(
      Su,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Su = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Ze(dn, n);
    return Rl(), /* @__PURE__ */ f(Te, { children: /* @__PURE__ */ f(
      Ns,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ f(
          Ss,
          {
            role: "dialog",
            id: a.contentId,
            "aria-describedby": a.descriptionId,
            "aria-labelledby": a.titleId,
            "data-state": Qs(a.open),
            ...i,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => a.onOpenChange(!1)
          }
        )
      }
    ) });
  }
), Nu = "DialogTitle", oo = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Nu, n);
    return /* @__PURE__ */ f(pe.h2, { id: o.titleId, ...r, ref: t });
  }
);
oo.displayName = Nu;
var ku = "DialogDescription", so = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(ku, n);
    return /* @__PURE__ */ f(pe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
so.displayName = ku;
var Iu = "DialogClose", io = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Iu, n);
    return /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: re(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
io.displayName = Iu;
function Qs(e) {
  return e ? "open" : "closed";
}
const Pu = Xs, $y = Js, Ru = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  no,
  {
    className: de(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Ru.displayName = no.displayName;
const ei = p.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: s } = vs();
  return /* @__PURE__ */ F($y, { container: s || void 0, children: [
    /* @__PURE__ */ f(Ru, {}),
    /* @__PURE__ */ F(
      ro,
      {
        ref: o,
        className: de(
          "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          e === "top" && "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          e === "bottom" && "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          e === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          e === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          t
        ),
        ...r,
        children: [
          n,
          /* @__PURE__ */ F(io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ f(Cl, { className: "h-4 w-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
ei.displayName = ro.displayName;
const ti = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: de(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ti.displayName = "SheetHeader";
const Eu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: de(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Eu.displayName = "SheetFooter";
const ni = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  oo,
  {
    ref: n,
    className: de("text-lg font-medium text-gray-900", e),
    ...t
  }
));
ni.displayName = oo.displayName;
const ri = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  so,
  {
    ref: n,
    className: de("text-sm text-gray-500", e),
    ...t
  }
));
ri.displayName = so.displayName;
function oi(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: s
  } = e, i = Ha.resolveDimensions(r), a = i.width, l = i.height, c = a / l, d = o, u = s ?? Math.round(d / c), h = a * 3.779527559, m = l * 3.779527559;
  return (v, g, b) => {
    const w = v.strictPosition, C = w === "start" || w === "end";
    if (v.kind === "group") {
      const S = v.firstPageId, y = v.firstPageComponentKey ?? S, I = Fr(n, { id: S, componentKey: y }), R = v.firstPageComponent || (y ? t[y] : null), N = n?.integrations?.[v.id];
      return /* @__PURE__ */ F(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : C ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.id,
          children: [
            R ? /* @__PURE__ */ f(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ f(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(d / h, u / m)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ f("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${m}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ f(
                      R,
                      {
                        payload: n,
                        pageId: S,
                        templateId: y,
                        pagePayload: I,
                        componentKey: y,
                        integration: N,
                        parentGroup: v
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ f("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ F("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ F("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                v.id
              ] }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            /* @__PURE__ */ F("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              v.pageCount,
              " pages)"
            ] }),
            C && /* @__PURE__ */ F("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(Wo, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: v.label || v.id }) }) }) }),
            b && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const S = v.pageId, y = v.pageComponentKey ?? S, I = Fr(n, { id: S, componentKey: y }), R = v.pageComponent || (y ? t[y] : null), N = S ? gu(n, { id: S }) : void 0;
      return /* @__PURE__ */ F(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : C ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.pageId,
          children: [
            R ? /* @__PURE__ */ f(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ f(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(d / h, u / m)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ f("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${m}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ f(
                      R,
                      {
                        payload: n,
                        pageId: S,
                        templateId: y,
                        pagePayload: I,
                        componentKey: y,
                        integration: N
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ f("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ F("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ F("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                v.pageNum
              ] }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            C && /* @__PURE__ */ F("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(Wo, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: v.pageLabel || `Page ${v.pageNum}` }) }) }) }),
            b && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function By({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: s,
  setup: i = { width: 210, height: 297 },
  gridColsClass: a = "page-order-grid-cols"
}) {
  const [l, c] = p.useState(""), d = p.useMemo(() => {
    if (!l.trim()) return n;
    const y = l.toLowerCase();
    return n.filter(
      (I) => (I.label || "").toLowerCase().includes(y) || I.id.toLowerCase().includes(y)
    );
  }, [n, l]), u = (y) => {
    t(!1), r(y);
  }, h = i.width || 210, m = i.height || 297, v = h / m, g = 200, b = Math.round(g / v), w = p.useMemo(() => o ? oi({
    pageComponents: o,
    payload: s,
    setup: i,
    thumbnailWidth: g,
    thumbnailHeight: b
  }) : null, [o, s, i, g, b]), C = (y, I) => {
    if (!y) return [];
    if (Array.isArray(y)) return y;
    try {
      const R = y(I);
      if (!Array.isArray(R))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof R), [];
      const N = R.filter((x) => typeof x == "string");
      return N.length !== R.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), N;
    } catch (R) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", R), [];
    }
  }, S = (y, I) => {
    if (y.kind === "group") {
      const x = y, P = { payload: s, item: void 0, parent: void 0 }, E = C(x.pageComponentKeys, P), D = E[0];
      return {
        kind: "group",
        id: y.id,
        label: y.label,
        pageCount: E.length,
        firstPageId: D,
        firstPageComponentKey: D
      };
    }
    const R = y, N = R.componentKey ?? R.id;
    return {
      kind: "page",
      id: R.id,
      pageId: R.id,
      pageComponentKey: N,
      pageLabel: R.label,
      pageNum: I + 1
    };
  };
  return /* @__PURE__ */ f(Pu, { open: e, onOpenChange: t, children: /* @__PURE__ */ F(ei, { side: "bottom", className: "h-[90vh] p-0 gap-0 w-full max-w-none bg-gray-50", "data-uhuu-editor": !0, children: [
    /* @__PURE__ */ f(ti, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ F("div", { className: "flex items-end gap-3", children: [
      /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(nt, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ F("div", { className: "flex-1", children: [
        /* @__PURE__ */ f(ni, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
        /* @__PURE__ */ f(ri, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
      ] }),
      /* @__PURE__ */ F("div", { className: "flex items-center gap-1.5 text-gray-400 mb-0.5 mr-8", children: [
        /* @__PURE__ */ f(hm, { className: "w-3.5 h-3.5 shrink-0" }),
        /* @__PURE__ */ f(
          "input",
          {
            type: "text",
            placeholder: "Filter…",
            value: l,
            onChange: (y) => c(y.target.value),
            tabIndex: -1,
            className: "w-24 bg-transparent border-0 focus:outline-none text-sm text-gray-600 placeholder:text-gray-400 focus:w-40 transition-all duration-150"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ f("div", { className: "h-full max-h-[calc(90vh-100px)] overflow-auto p-6", children: d.length === 0 ? /* @__PURE__ */ F("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ f(nt, { className: "w-8 h-8 text-gray-400" }) }),
      /* @__PURE__ */ f("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
      /* @__PURE__ */ f("p", { className: "text-gray-500 mb-4", children: l.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
    ] }) : /* @__PURE__ */ f("div", { className: a, children: d.map((y, I) => {
      const R = y.kind === "group", N = y.id, x = R ? y.label || `Group ${I + 1}` : y.label || `Page ${y.id}`, P = { payload: s, item: void 0, parent: void 0 }, E = R ? C(y.pageComponentKeys, P).length : 1;
      return /* @__PURE__ */ F(
        "div",
        {
          onClick: () => u(y),
          className: [
            "relative w-full h-[280px] cursor-pointer transition-all group",
            !!!w && "bg-white border-2 border-gray-200"
            // compact + default, always base + addition if not default
          ].filter(Boolean).join(" "),
          children: [
            /* @__PURE__ */ f("div", { className: "w-full h-full relative", children: y.thumbnail ? /* @__PURE__ */ f("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ f(
              "img",
              {
                src: y.thumbnail,
                className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                alt: x
              }
            ) }) : w ? /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: w(S(y, I), I, !1) }) : /* @__PURE__ */ f(Te, { children: R ? /* @__PURE__ */ F("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(nt, { className: "w-8 h-8 text-blue-600" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: x }),
              /* @__PURE__ */ F("div", { className: "text-xs text-gray-500 mt-1", children: [
                E,
                " ",
                E === 1 ? "page" : "pages"
              ] })
            ] }) : /* @__PURE__ */ F("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(nt, { className: "w-8 h-8 text-gray-400" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: x }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: N })
            ] }) }) }),
            (!w || y?.thumbnail) && /* @__PURE__ */ F(Te, { children: [
              R && /* @__PURE__ */ F("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                "Group (",
                E,
                " ",
                E === 1 ? "page" : "pages",
                ")"
              ] }),
              /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": N, children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: x }) }) }) })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ f(nt, { className: "w-4 h-4 text-white" }) })
          ]
        },
        N
      );
    }) }) }) })
  ] }) });
}
function zy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ee(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const ao = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function si(e) {
  return "nodeType" in e;
}
function _e(e) {
  var t, n;
  return e ? vn(e) ? e : si(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ii(e) {
  const {
    Document: t
  } = _e(e);
  return e instanceof t;
}
function Yn(e) {
  return vn(e) ? !1 : e instanceof _e(e).HTMLElement;
}
function Au(e) {
  return e instanceof _e(e).SVGElement;
}
function bn(e) {
  return e ? vn(e) ? e.document : si(e) ? ii(e) ? e : Yn(e) || Au(e) ? e.ownerDocument : document : document : document;
}
const qe = ao ? za : ce;
function lo(e) {
  const t = ue(e);
  return qe(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Hy() {
  const e = ue(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function $n(e, t) {
  t === void 0 && (t = [e]);
  const n = ue(e);
  return qe(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function qn(e, t) {
  const n = ue();
  return ee(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Br(e) {
  const t = lo(e), n = ue(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function zr(e) {
  const t = ue();
  return ce(() => {
    t.current = e;
  }, [e]), t.current;
}
let Oo = {};
function Xn(e, t) {
  return ee(() => {
    if (t)
      return t;
    const n = Oo[e] == null ? 0 : Oo[e] + 1;
    return Oo[e] = n, e + "-" + n;
  }, [e, t]);
}
function Du(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((s, i) => {
      const a = Object.entries(i);
      for (const [l, c] of a) {
        const d = s[l];
        d != null && (s[l] = d + e * c);
      }
      return s;
    }, {
      ...t
    });
  };
}
const cn = /* @__PURE__ */ Du(1), Bn = /* @__PURE__ */ Du(-1);
function Ky(e) {
  return "clientX" in e && "clientY" in e;
}
function co(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Gy(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Hr(e) {
  if (Gy(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return Ky(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Mt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Mt.Translate.toString(e), Mt.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), ba = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Wy(e) {
  return e.matches(ba) ? e : e.querySelector(ba);
}
const Vy = {
  display: "none"
};
function jy(e) {
  let {
    id: t,
    value: n
  } = e;
  return be.createElement("div", {
    id: t,
    style: Vy
  }, n);
}
function Uy(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const o = {
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
  };
  return be.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Yy() {
  const [e, t] = ie("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Mu = /* @__PURE__ */ Ot(null);
function qy(e) {
  const t = xe(Mu);
  ce(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Xy() {
  const [e] = ie(() => /* @__PURE__ */ new Set()), t = he((r) => (e.add(r), () => e.delete(r)), [e]);
  return [he((r) => {
    let {
      type: o,
      event: s
    } = r;
    e.forEach((i) => {
      var a;
      return (a = i[o]) == null ? void 0 : a.call(i, s);
    });
  }, [e]), t];
}
const Zy = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Jy = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Qy(e) {
  let {
    announcements: t = Jy,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Zy
  } = e;
  const {
    announce: s,
    announcement: i
  } = Yy(), a = Xn("DndLiveRegion"), [l, c] = ie(!1);
  if (ce(() => {
    c(!0);
  }, []), qy(ee(() => ({
    onDragStart(u) {
      let {
        active: h
      } = u;
      s(t.onDragStart({
        active: h
      }));
    },
    onDragMove(u) {
      let {
        active: h,
        over: m
      } = u;
      t.onDragMove && s(t.onDragMove({
        active: h,
        over: m
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: m
      } = u;
      s(t.onDragOver({
        active: h,
        over: m
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: m
      } = u;
      s(t.onDragEnd({
        active: h,
        over: m
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: m
      } = u;
      s(t.onDragCancel({
        active: h,
        over: m
      }));
    }
  }), [s, t])), !l)
    return null;
  const d = be.createElement(be.Fragment, null, be.createElement(jy, {
    id: r,
    value: o.draggable
  }), be.createElement(Uy, {
    id: a,
    announcement: i
  }));
  return n ? df(d, n) : d;
}
var Se;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Se || (Se = {}));
function Kr() {
}
function ya(e, t) {
  return ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function ew() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ee(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Xe = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Ou(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function tw(e, t) {
  const n = Hr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Tu(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function nw(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function wa(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: o
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + o,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + o,
    y: n + r
  }];
}
function _u(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function xa(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const rw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = xa(t, t.left, t.top), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = Ou(xa(l), o);
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return s.sort(Tu);
}, ow = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = wa(t), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = wa(l), d = o.reduce((h, m, v) => h + Ou(c[v], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return s.sort(Tu);
};
function sw(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), i = o - r, a = s - n;
  if (r < o && n < s) {
    const l = t.width * t.height, c = e.width * e.height, d = i * a, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const iw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const s of r) {
    const {
      id: i
    } = s, a = n.get(i);
    if (a) {
      const l = sw(a, t);
      l > 0 && o.push({
        id: i,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return o.sort(nw);
};
function aw(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Fu(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Xe;
}
function lw(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return o.reduce((i, a) => ({
      ...i,
      top: i.top + e * a.y,
      bottom: i.bottom + e * a.y,
      left: i.left + e * a.x,
      right: i.right + e * a.x
    }), {
      ...n
    });
  };
}
const cw = /* @__PURE__ */ lw(1);
function Lu(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function uw(e, t, n) {
  const r = Lu(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: s,
    x: i,
    y: a
  } = r, l = e.left - i - (1 - o) * parseFloat(n), c = e.top - a - (1 - s) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = o ? e.width / o : e.width, u = s ? e.height / s : e.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const dw = {
  ignoreTransform: !1
};
function yn(e, t) {
  t === void 0 && (t = dw);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = _e(e).getComputedStyle(e);
    c && (n = uw(n, c, d));
  }
  const {
    top: r,
    left: o,
    width: s,
    height: i,
    bottom: a,
    right: l
  } = n;
  return {
    top: r,
    left: o,
    width: s,
    height: i,
    bottom: a,
    right: l
  };
}
function Ca(e) {
  return yn(e, {
    ignoreTransform: !0
  });
}
function fw(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function hw(e, t) {
  return t === void 0 && (t = _e(e).getComputedStyle(e)), t.position === "fixed";
}
function mw(e, t) {
  t === void 0 && (t = _e(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
function uo(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (ii(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Yn(o) || Au(o) || n.includes(o))
      return n;
    const s = _e(e).getComputedStyle(o);
    return o !== e && mw(o, s) && n.push(o), hw(o, s) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function $u(e) {
  const [t] = uo(e, 1);
  return t ?? null;
}
function To(e) {
  return !ao || !e ? null : vn(e) ? e : si(e) ? ii(e) || e === bn(e).scrollingElement ? window : Yn(e) ? e : null : null;
}
function Bu(e) {
  return vn(e) ? e.scrollX : e.scrollLeft;
}
function zu(e) {
  return vn(e) ? e.scrollY : e.scrollTop;
}
function Qo(e) {
  return {
    x: Bu(e),
    y: zu(e)
  };
}
var Ie;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ie || (Ie = {}));
function Hu(e) {
  return !ao || !e ? !1 : e === document.scrollingElement;
}
function Ku(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Hu(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, s = e.scrollLeft <= t.x, i = e.scrollTop >= r.y, a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: s,
    isBottom: i,
    isRight: a,
    maxScroll: r,
    minScroll: t
  };
}
const pw = {
  x: 0.2,
  y: 0.2
};
function gw(e, t, n, r, o) {
  let {
    top: s,
    left: i,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = pw);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = Ku(e), m = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && s <= t.top + g.height ? (m.y = Ie.Backward, v.y = r * Math.abs((t.top + g.height - s) / g.height)) : !d && l >= t.bottom - g.height && (m.y = Ie.Forward, v.y = r * Math.abs((t.bottom - g.height - l) / g.height)), !h && a >= t.right - g.width ? (m.x = Ie.Forward, v.x = r * Math.abs((t.right - g.width - a) / g.width)) : !u && i <= t.left + g.width && (m.x = Ie.Backward, v.x = r * Math.abs((t.left + g.width - i) / g.width)), {
    direction: m,
    speed: v
  };
}
function vw(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: i,
      width: s,
      height: i
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Gu(e) {
  return e.reduce((t, n) => cn(t, Qo(n)), Xe);
}
function bw(e) {
  return e.reduce((t, n) => t + Bu(n), 0);
}
function yw(e) {
  return e.reduce((t, n) => t + zu(n), 0);
}
function Wu(e, t) {
  if (t === void 0 && (t = yn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: s
  } = t(e);
  $u(e) && (o <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ww = [["x", ["left", "right"], bw], ["y", ["top", "bottom"], yw]];
class ai {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = uo(n), o = Gu(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [s, i, a] of ww)
      for (const l of i)
        Object.defineProperty(this, l, {
          get: () => {
            const c = a(r), d = o[s] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class En {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var o;
    (o = this.target) == null || o.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function xw(e) {
  const {
    EventTarget: t
  } = _e(e);
  return e instanceof t ? e : bn(e);
}
function _o(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var We;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(We || (We = {}));
function Sa(e) {
  e.preventDefault();
}
function Cw(e) {
  e.stopPropagation();
}
var fe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(fe || (fe = {}));
const Vu = {
  start: [fe.Space, fe.Enter],
  cancel: [fe.Esc],
  end: [fe.Space, fe.Enter, fe.Tab]
}, Sw = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case fe.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case fe.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case fe.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case fe.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class li {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new En(bn(n)), this.windowListeners = new En(_e(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Wu(r), n(Xe);
  }
  handleKeyDown(t) {
    if (co(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: s = Vu,
        coordinateGetter: i = Sw,
        scrollBehavior: a = "smooth"
      } = o, {
        code: l
      } = t;
      if (s.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (s.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : Xe;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const h = Bn(u, d), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: v
        } = r.current;
        for (const g of v) {
          const b = t.code, {
            isTop: w,
            isRight: C,
            isLeft: S,
            isBottom: y,
            maxScroll: I,
            minScroll: R
          } = Ku(g), N = vw(g), x = {
            x: Math.min(b === fe.Right ? N.right - N.width / 2 : N.right, Math.max(b === fe.Right ? N.left : N.left + N.width / 2, u.x)),
            y: Math.min(b === fe.Down ? N.bottom - N.height / 2 : N.bottom, Math.max(b === fe.Down ? N.top : N.top + N.height / 2, u.y))
          }, P = b === fe.Right && !C || b === fe.Left && !S, E = b === fe.Down && !y || b === fe.Up && !w;
          if (P && x.x !== u.x) {
            const D = g.scrollLeft + h.x, $ = b === fe.Right && D <= I.x || b === fe.Left && D >= R.x;
            if ($ && !h.y) {
              g.scrollTo({
                left: D,
                behavior: a
              });
              return;
            }
            $ ? m.x = g.scrollLeft - D : m.x = b === fe.Right ? g.scrollLeft - I.x : g.scrollLeft - R.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (E && x.y !== u.y) {
            const D = g.scrollTop + h.y, $ = b === fe.Down && D <= I.y || b === fe.Up && D >= R.y;
            if ($ && !h.x) {
              g.scrollTo({
                top: D,
                behavior: a
              });
              return;
            }
            $ ? m.y = g.scrollTop - D : m.y = b === fe.Down ? g.scrollTop - I.y : g.scrollTop - R.y, m.y && g.scrollBy({
              top: -m.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, cn(Bn(u, this.referenceCoordinates), m));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
li.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Vu,
      onActivation: o
    } = t, {
      active: s
    } = n;
    const {
      code: i
    } = e.nativeEvent;
    if (r.start.includes(i)) {
      const a = s.activatorNode.current;
      return a && e.target !== a ? !1 : (e.preventDefault(), o?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Na(e) {
  return !!(e && "distance" in e);
}
function ka(e) {
  return !!(e && "delay" in e);
}
class ci {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = xw(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: s
    } = t, {
      target: i
    } = s;
    this.props = t, this.events = n, this.document = bn(i), this.documentListeners = new En(this.document), this.listeners = new En(r), this.windowListeners = new En(_e(i)), this.initialCoordinates = (o = Hr(s)) != null ? o : Xe, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.DragStart, Sa), this.windowListeners.add(We.VisibilityChange, this.handleCancel), this.windowListeners.add(We.ContextMenu, Sa), this.documentListeners.add(We.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ka(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Na(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: o
    } = this.props;
    o(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(We.Click, Cw, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(We.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: s
    } = this, {
      onMove: i,
      options: {
        activationConstraint: a
      }
    } = s;
    if (!o)
      return;
    const l = (n = Hr(t)) != null ? n : Xe, c = Bn(o, l);
    if (!r && a) {
      if (Na(a)) {
        if (a.tolerance != null && _o(c, a.tolerance))
          return this.handleCancel();
        if (_o(c, a.distance))
          return this.handleStart();
      }
      if (ka(a) && _o(c, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, c);
      return;
    }
    t.cancelable && t.preventDefault(), i(l);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === fe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Nw = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ui extends ci {
  constructor(t) {
    const {
      event: n
    } = t, r = bn(n.target);
    super(t, Nw, r);
  }
}
ui.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const kw = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var es;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(es || (es = {}));
class Iw extends ci {
  constructor(t) {
    super(t, kw, bn(t.event.target));
  }
}
Iw.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === es.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Fo = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Pw extends ci {
  constructor(t) {
    super(t, Fo);
  }
  static setup() {
    return window.addEventListener(Fo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Fo.move.name, t);
    };
    function t() {
    }
  }
}
Pw.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: o
    } = n;
    return o.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var An;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(An || (An = {}));
var Gr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Gr || (Gr = {}));
function Rw(e) {
  let {
    acceleration: t,
    activator: n = An.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: s,
    interval: i = 5,
    order: a = Gr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = e;
  const m = Aw({
    delta: u,
    disabled: !s
  }), [v, g] = Hy(), b = ue({
    x: 0,
    y: 0
  }), w = ue({
    x: 0,
    y: 0
  }), C = ee(() => {
    switch (n) {
      case An.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case An.DraggableRect:
        return o;
    }
  }, [n, o, l]), S = ue(null), y = he(() => {
    const R = S.current;
    if (!R)
      return;
    const N = b.current.x * w.current.x, x = b.current.y * w.current.y;
    R.scrollBy(N, x);
  }, []), I = ee(() => a === Gr.TreeOrder ? [...c].reverse() : c, [a, c]);
  ce(
    () => {
      if (!s || !c.length || !C) {
        g();
        return;
      }
      for (const R of I) {
        if (r?.(R) === !1)
          continue;
        const N = c.indexOf(R), x = d[N];
        if (!x)
          continue;
        const {
          direction: P,
          speed: E
        } = gw(R, x, C, t, h);
        for (const D of ["x", "y"])
          m[D][P[D]] || (E[D] = 0, P[D] = 0);
        if (E.x > 0 || E.y > 0) {
          g(), S.current = R, v(y, i), b.current = E, w.current = P;
          return;
        }
      }
      b.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      y,
      r,
      g,
      s,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(C),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      v,
      c,
      I,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Ew = {
  x: {
    [Ie.Backward]: !1,
    [Ie.Forward]: !1
  },
  y: {
    [Ie.Backward]: !1,
    [Ie.Forward]: !1
  }
};
function Aw(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = zr(t);
  return qn((o) => {
    if (n || !r || !o)
      return Ew;
    const s = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ie.Backward]: o.x[Ie.Backward] || s.x === -1,
        [Ie.Forward]: o.x[Ie.Forward] || s.x === 1
      },
      y: {
        [Ie.Backward]: o.y[Ie.Backward] || s.y === -1,
        [Ie.Forward]: o.y[Ie.Forward] || s.y === 1
      }
    };
  }, [n, t, r]);
}
function Dw(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return qn((o) => {
    var s;
    return t == null ? null : (s = r ?? o) != null ? s : null;
  }, [r, t]);
}
function Mw(e, t) {
  return ee(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, s = o.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...s];
  }, []), [e, t]);
}
var zn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(zn || (zn = {}));
var ts;
(function(e) {
  e.Optimized = "optimized";
})(ts || (ts = {}));
const Ia = /* @__PURE__ */ new Map();
function Ow(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [s, i] = ie(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = o, d = ue(e), u = b(), h = $n(u), m = he(function(w) {
    w === void 0 && (w = []), !h.current && i((C) => C === null ? w : C.concat(w.filter((S) => !C.includes(S))));
  }, [h]), v = ue(null), g = qn((w) => {
    if (u && !n)
      return Ia;
    if (!w || w === Ia || d.current !== e || s != null) {
      const C = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (s && s.length > 0 && !s.includes(S.id) && S.rect.current) {
          C.set(S.id, S.rect.current);
          continue;
        }
        const y = S.node.current, I = y ? new ai(l(y), y) : null;
        S.rect.current = I, I && C.set(S.id, I);
      }
      return C;
    }
    return w;
  }, [e, s, n, u, l]);
  return ce(() => {
    d.current = e;
  }, [e]), ce(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), ce(
    () => {
      s && s.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), ce(
    () => {
      u || typeof a != "number" || v.current !== null || (v.current = setTimeout(() => {
        m(), v.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, m, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: m,
    measuringScheduled: s != null
  };
  function b() {
    switch (c) {
      case zn.Always:
        return !1;
      case zn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function di(e, t) {
  return qn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Tw(e, t) {
  return di(e, t);
}
function _w(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = lo(t), o = ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, n]);
  return ce(() => () => o?.disconnect(), [o]), o;
}
function fo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = lo(t), o = ee(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return ce(() => () => o?.disconnect(), [o]), o;
}
function Fw(e) {
  return new ai(yn(e), e);
}
function Pa(e, t, n) {
  t === void 0 && (t = Fw);
  const [r, o] = ie(null);
  function s() {
    o((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = l ?? n) != null ? c : null;
      }
      const d = t(e);
      return JSON.stringify(l) === JSON.stringify(d) ? l : d;
    });
  }
  const i = _w({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: d,
            target: u
          } = c;
          if (d === "childList" && u instanceof HTMLElement && u.contains(e)) {
            s();
            break;
          }
        }
    }
  }), a = fo({
    callback: s
  });
  return qe(() => {
    s(), e ? (a?.observe(e), i?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), i?.disconnect());
  }, [e]), r;
}
function Lw(e) {
  const t = di(e);
  return Fu(e, t);
}
const Ra = [];
function $w(e) {
  const t = ue(e), n = qn((r) => e ? r && r !== Ra && e && t.current && e.parentNode === t.current.parentNode ? r : uo(e) : Ra, [e]);
  return ce(() => {
    t.current = e;
  }, [e]), n;
}
function Bw(e) {
  const [t, n] = ie(null), r = ue(e), o = he((s) => {
    const i = To(s.target);
    i && n((a) => a ? (a.set(i, Qo(i)), new Map(a)) : null);
  }, []);
  return ce(() => {
    const s = r.current;
    if (e !== s) {
      i(s);
      const a = e.map((l) => {
        const c = To(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Qo(c)]) : null;
      }).filter((l) => l != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      i(e), i(s);
    };
    function i(a) {
      a.forEach((l) => {
        const c = To(l);
        c?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), ee(() => e.length ? t ? Array.from(t.values()).reduce((s, i) => cn(s, i), Xe) : Gu(e) : Xe, [e, t]);
}
function Ea(e, t) {
  t === void 0 && (t = []);
  const n = ue(null);
  return ce(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ce(() => {
    const r = e !== Xe;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Bn(e, n.current) : Xe;
}
function zw(e) {
  ce(
    () => {
      if (!ao)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Hw(e, t) {
  return ee(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: s
    } = r;
    return n[o] = (i) => {
      s(i, t);
    }, n;
  }, {}), [e, t]);
}
function ju(e) {
  return ee(() => e ? fw(e) : null, [e]);
}
const Aa = [];
function Kw(e, t) {
  t === void 0 && (t = yn);
  const [n] = e, r = ju(n ? _e(n) : null), [o, s] = ie(Aa);
  function i() {
    s(() => e.length ? e.map((l) => Hu(l) ? r : new ai(t(l), l)) : Aa);
  }
  const a = fo({
    callback: i
  });
  return qe(() => {
    a?.disconnect(), i(), e.forEach((l) => a?.observe(l));
  }, [e]), o;
}
function Uu(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Yn(t) ? t : e;
}
function Gw(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ie(null), o = he((c) => {
    for (const {
      target: d
    } of c)
      if (Yn(d)) {
        r((u) => {
          const h = t(d);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), s = fo({
    callback: o
  }), i = he((c) => {
    const d = Uu(c);
    s?.disconnect(), d && s?.observe(d), r(d ? t(d) : null);
  }, [t, s]), [a, l] = Br(i);
  return ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const Ww = [{
  sensor: ui,
  options: {}
}, {
  sensor: li,
  options: {}
}], Vw = {
  current: {}
}, xr = {
  draggable: {
    measure: Ca
  },
  droppable: {
    measure: Ca,
    strategy: zn.WhileDragging,
    frequency: ts.Optimized
  },
  dragOverlay: {
    measure: yn
  }
};
class Dn extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const jw = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Dn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Kr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: xr,
  measureDroppableContainers: Kr,
  windowRect: null,
  measuringScheduled: !1
}, Yu = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Kr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Kr
}, Zn = /* @__PURE__ */ Ot(Yu), qu = /* @__PURE__ */ Ot(jw);
function Uw() {
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
    droppable: {
      containers: new Dn()
    }
  };
}
function Yw(e, t) {
  switch (t.type) {
    case Se.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Se.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case Se.DragEnd:
    case Se.DragCancel:
      return {
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
    case Se.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Dn(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Se.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const i = new Dn(e.droppable.containers);
      return i.set(n, {
        ...s,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case Se.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const s = new Dn(e.droppable.containers);
      return s.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    default:
      return e;
  }
}
function qw(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = xe(Zn), s = zr(r), i = zr(n?.id);
  return ce(() => {
    if (!t && !r && s && i != null) {
      if (!co(s) || document.activeElement === s.target)
        return;
      const a = o.get(i);
      if (!a)
        return;
      const {
        activatorNode: l,
        node: c
      } = a;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, c.current]) {
          if (!d)
            continue;
          const u = Wy(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, i, s]), null;
}
function Xu(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, s) => s({
    transform: o,
    ...r
  }), n) : n;
}
function Xw(e) {
  return ee(
    () => ({
      draggable: {
        ...xr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...xr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...xr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function Zw(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const s = ue(!1), {
    x: i,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  qe(() => {
    if (!i && !a || !t) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = t?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = n(c), u = Fu(d, r);
    if (i || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = $u(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, i, a, r, n]);
}
const ho = /* @__PURE__ */ Ot({
  ...Xe,
  scaleX: 1,
  scaleY: 1
});
var Pt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Pt || (Pt = {}));
const Jw = /* @__PURE__ */ af(function(t) {
  var n, r, o, s;
  let {
    id: i,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: d = Ww,
    collisionDetection: u = iw,
    measuring: h,
    modifiers: m,
    ...v
  } = t;
  const g = lf(Yw, void 0, Uw), [b, w] = g, [C, S] = Xy(), [y, I] = ie(Pt.Uninitialized), R = y === Pt.Initialized, {
    draggable: {
      active: N,
      nodes: x,
      translate: P
    },
    droppable: {
      containers: E
    }
  } = b, D = N != null ? x.get(N) : null, $ = ue({
    initial: null,
    translated: null
  }), z = ee(() => {
    var ke;
    return N != null ? {
      id: N,
      // It's possible for the active node to unmount while dragging
      data: (ke = D?.data) != null ? ke : Vw,
      rect: $
    } : null;
  }, [N, D]), L = ue(null), [W, A] = ie(null), [T, k] = ie(null), M = $n(v, Object.values(v)), O = Xn("DndDescribedBy", i), H = ee(() => E.getEnabled(), [E]), G = Xw(h), {
    droppableRects: K,
    measureDroppableContainers: j,
    measuringScheduled: V
  } = Ow(H, {
    dragging: R,
    dependencies: [P.x, P.y],
    config: G.droppable
  }), B = Dw(x, N), U = ee(() => T ? Hr(T) : null, [T]), J = nr(), Z = Tw(B, G.draggable.measure);
  Zw({
    activeNode: N != null ? x.get(N) : null,
    config: J.layoutShiftCompensation,
    initialRect: Z,
    measure: G.draggable.measure
  });
  const X = Pa(B, G.draggable.measure, Z), te = Pa(B ? B.parentElement : null), ae = ue({
    activatorEvent: null,
    active: null,
    activeNode: B,
    collisionRect: null,
    collisions: null,
    droppableRects: K,
    draggableNodes: x,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ge = E.getNodeFor((n = ae.current.over) == null ? void 0 : n.id), le = Gw({
    measure: G.dragOverlay.measure
  }), Ne = (r = le.nodeRef.current) != null ? r : B, $e = R ? (o = le.rect) != null ? o : X : null, yt = !!(le.nodeRef.current && le.rect), ct = Lw(yt ? null : X), Zt = ju(Ne ? _e(Ne) : null), ze = $w(R ? ge ?? B : null), wt = Kw(ze), Bt = Xu(m, {
    transform: {
      x: P.x - ct.x,
      y: P.y - ct.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: T,
    active: z,
    activeNodeRect: X,
    containerNodeRect: te,
    draggingNodeRect: $e,
    over: ae.current.over,
    overlayNodeRect: le.rect,
    scrollableAncestors: ze,
    scrollableAncestorRects: wt,
    windowRect: Zt
  }), Jt = U ? cn(U, P) : null, xn = Bw(ze), Qn = Ea(xn), po = Ea(xn, [X]), je = cn(Bt, Qn), xt = $e ? cw($e, Bt) : null, zt = z && xt ? u({
    active: z,
    collisionRect: xt,
    droppableRects: K,
    droppableContainers: H,
    pointerCoordinates: Jt
  }) : null, Qt = _u(zt, "id"), [Je, er] = ie(null), go = yt ? Bt : cn(Bt, po), Cn = aw(go, (s = Je?.rect) != null ? s : null, X), en = ue(null), Sn = he(
    (ke, Re) => {
      let {
        sensor: Ee,
        options: Ue
      } = Re;
      if (L.current == null)
        return;
      const Me = x.get(L.current);
      if (!Me)
        return;
      const Oe = ke.nativeEvent, He = new Ee({
        active: L.current,
        activeNode: Me,
        event: Oe,
        options: Ue,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ae,
        onAbort(we) {
          if (!x.get(we))
            return;
          const {
            onDragAbort: Ge
          } = M.current, Ye = {
            id: we
          };
          Ge?.(Ye), C({
            type: "onDragAbort",
            event: Ye
          });
        },
        onPending(we, Ke, Ge, Ye) {
          if (!x.get(we))
            return;
          const {
            onDragPending: Q
          } = M.current, ne = {
            id: we,
            constraint: Ke,
            initialCoordinates: Ge,
            offset: Ye
          };
          Q?.(ne), C({
            type: "onDragPending",
            event: ne
          });
        },
        onStart(we) {
          const Ke = L.current;
          if (Ke == null)
            return;
          const Ge = x.get(Ke);
          if (!Ge)
            return;
          const {
            onDragStart: Ye
          } = M.current, _ = {
            activatorEvent: Oe,
            active: {
              id: Ke,
              data: Ge.data,
              rect: $
            }
          };
          sr(() => {
            Ye?.(_), I(Pt.Initializing), w({
              type: Se.DragStart,
              initialCoordinates: we,
              active: Ke
            }), C({
              type: "onDragStart",
              event: _
            }), A(en.current), k(Oe);
          });
        },
        onMove(we) {
          w({
            type: Se.DragMove,
            coordinates: we
          });
        },
        onEnd: St(Se.DragEnd),
        onCancel: St(Se.DragCancel)
      });
      en.current = He;
      function St(we) {
        return async function() {
          const {
            active: Ge,
            collisions: Ye,
            over: _,
            scrollAdjustedTranslate: Q
          } = ae.current;
          let ne = null;
          if (Ge && Q) {
            const {
              cancelDrop: oe
            } = M.current;
            ne = {
              activatorEvent: Oe,
              active: Ge,
              collisions: Ye,
              delta: Q,
              over: _
            }, we === Se.DragEnd && typeof oe == "function" && await Promise.resolve(oe(ne)) && (we = Se.DragCancel);
          }
          L.current = null, sr(() => {
            w({
              type: we
            }), I(Pt.Uninitialized), er(null), A(null), k(null), en.current = null;
            const oe = we === Se.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ne) {
              const ve = M.current[oe];
              ve?.(ne), C({
                type: oe,
                event: ne
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), tr = he((ke, Re) => (Ee, Ue) => {
    const Me = Ee.nativeEvent, Oe = x.get(Ue);
    if (
      // Another sensor is already instantiating
      L.current !== null || // No active draggable
      !Oe || // Event has already been captured
      Me.dndKit || Me.defaultPrevented
    )
      return;
    const He = {
      active: Oe
    };
    ke(Ee, Re.options, He) === !0 && (Me.dndKit = {
      capturedBy: Re.sensor
    }, L.current = Ue, Sn(Ee, Re));
  }, [x, Sn]), Ct = Mw(d, tr);
  zw(d), qe(() => {
    X && y === Pt.Initializing && I(Pt.Initialized);
  }, [X, y]), ce(
    () => {
      const {
        onDragMove: ke
      } = M.current, {
        active: Re,
        activatorEvent: Ee,
        collisions: Ue,
        over: Me
      } = ae.current;
      if (!Re || !Ee)
        return;
      const Oe = {
        active: Re,
        activatorEvent: Ee,
        collisions: Ue,
        delta: {
          x: je.x,
          y: je.y
        },
        over: Me
      };
      sr(() => {
        ke?.(Oe), C({
          type: "onDragMove",
          event: Oe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [je.x, je.y]
  ), ce(
    () => {
      const {
        active: ke,
        activatorEvent: Re,
        collisions: Ee,
        droppableContainers: Ue,
        scrollAdjustedTranslate: Me
      } = ae.current;
      if (!ke || L.current == null || !Re || !Me)
        return;
      const {
        onDragOver: Oe
      } = M.current, He = Ue.get(Qt), St = He && He.rect.current ? {
        id: He.id,
        rect: He.rect.current,
        data: He.data,
        disabled: He.disabled
      } : null, we = {
        active: ke,
        activatorEvent: Re,
        collisions: Ee,
        delta: {
          x: Me.x,
          y: Me.y
        },
        over: St
      };
      sr(() => {
        er(St), Oe?.(we), C({
          type: "onDragOver",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Qt]
  ), qe(() => {
    ae.current = {
      activatorEvent: T,
      active: z,
      activeNode: B,
      collisionRect: xt,
      collisions: zt,
      droppableRects: K,
      draggableNodes: x,
      draggingNode: Ne,
      draggingNodeRect: $e,
      droppableContainers: E,
      over: Je,
      scrollableAncestors: ze,
      scrollAdjustedTranslate: je
    }, $.current = {
      initial: $e,
      translated: xt
    };
  }, [z, B, zt, xt, x, Ne, $e, K, E, Je, ze, je]), Rw({
    ...J,
    delta: P,
    draggingRect: xt,
    pointerCoordinates: Jt,
    scrollableAncestors: ze,
    scrollableAncestorRects: wt
  });
  const Ht = ee(() => ({
    active: z,
    activeNode: B,
    activeNodeRect: X,
    activatorEvent: T,
    collisions: zt,
    containerNodeRect: te,
    dragOverlay: le,
    draggableNodes: x,
    droppableContainers: E,
    droppableRects: K,
    over: Je,
    measureDroppableContainers: j,
    scrollableAncestors: ze,
    scrollableAncestorRects: wt,
    measuringConfiguration: G,
    measuringScheduled: V,
    windowRect: Zt
  }), [z, B, X, T, zt, te, le, x, E, K, Je, j, ze, wt, G, V, Zt]), vo = ee(() => ({
    activatorEvent: T,
    activators: Ct,
    active: z,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: w,
    draggableNodes: x,
    over: Je,
    measureDroppableContainers: j
  }), [T, Ct, z, X, w, O, x, Je, j]);
  return be.createElement(Mu.Provider, {
    value: S
  }, be.createElement(Zn.Provider, {
    value: vo
  }, be.createElement(qu.Provider, {
    value: Ht
  }, be.createElement(ho.Provider, {
    value: Cn
  }, c)), be.createElement(qw, {
    disabled: a?.restoreFocus === !1
  })), be.createElement(Qy, {
    ...a,
    hiddenTextDescribedById: O
  }));
  function nr() {
    const ke = W?.autoScrollEnabled === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Ee = R && !ke && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Ee
    } : {
      enabled: Ee
    };
  }
}), Qw = /* @__PURE__ */ Ot(null), Da = "button", e0 = "Draggable";
function t0(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const s = Xn(e0), {
    activators: i,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = xe(Zn), {
    role: m = Da,
    roleDescription: v = "draggable",
    tabIndex: g = 0
  } = o ?? {}, b = l?.id === t, w = xe(b ? ho : Qw), [C, S] = Br(), [y, I] = Br(), R = Hw(i, t), N = $n(n);
  qe(
    () => (u.set(t, {
      id: t,
      key: s,
      node: C,
      activatorNode: y,
      data: N
    }), () => {
      const P = u.get(t);
      P && P.key === s && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const x = ee(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": b && m === Da ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": d.draggable
  }), [r, m, g, b, v, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: x,
    isDragging: b,
    listeners: r ? void 0 : R,
    node: C,
    over: h,
    setNodeRef: S,
    setActivatorNodeRef: I,
    transform: w
  };
}
function Zu() {
  return xe(qu);
}
const n0 = "Droppable", r0 = {
  timeout: 25
};
function o0(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const s = Xn(n0), {
    active: i,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = xe(Zn), d = ue({
    disabled: n
  }), u = ue(!1), h = ue(null), m = ue(null), {
    disabled: v,
    updateMeasurementsFor: g,
    timeout: b
  } = {
    ...r0,
    ...o
  }, w = $n(g ?? r), C = he(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), m.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), S = fo({
    callback: C,
    disabled: v || !i
  }), y = he((x, P) => {
    S && (P && (S.unobserve(P), u.current = !1), x && S.observe(x));
  }, [S]), [I, R] = Br(y), N = $n(t);
  return ce(() => {
    !S || !I.current || (S.disconnect(), u.current = !1, S.observe(I.current));
  }, [I, S]), ce(
    () => (a({
      type: Se.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: I,
        rect: h,
        data: N
      }
    }), () => a({
      type: Se.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ce(() => {
    n !== d.current.disabled && (a({
      type: Se.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: n
    }), d.current.disabled = n);
  }, [r, s, n, a]), {
    active: i,
    rect: h,
    isOver: l?.id === r,
    node: I,
    over: l,
    setNodeRef: R
  };
}
function s0(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = ie(null), [s, i] = ie(null), a = zr(n);
  return !n && !r && a && o(a), qe(() => {
    if (!s)
      return;
    const l = r?.key, c = r?.props.id;
    if (l == null || c == null) {
      o(null);
      return;
    }
    Promise.resolve(t(c, s)).then(() => {
      o(null);
    });
  }, [t, r, s]), be.createElement(be.Fragment, null, n, r ? cf(r, {
    ref: i
  }) : null);
}
const i0 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function a0(e) {
  let {
    children: t
  } = e;
  return be.createElement(Zn.Provider, {
    value: Yu
  }, be.createElement(ho.Provider, {
    value: i0
  }, t));
}
const l0 = {
  position: "fixed",
  touchAction: "none"
}, c0 = (e) => co(e) ? "transform 250ms ease" : void 0, u0 = /* @__PURE__ */ Vr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: s,
    className: i,
    rect: a,
    style: l,
    transform: c,
    transition: d = c0
  } = e;
  if (!a)
    return null;
  const u = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...l0,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Mt.Transform.toString(u),
    transformOrigin: o && r ? tw(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return be.createElement(n, {
    className: i,
    style: h,
    ref: t
  }, s);
}), d0 = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: s,
    className: i
  } = e;
  if (s != null && s.active)
    for (const [a, l] of Object.entries(s.active))
      l !== void 0 && (o[a] = n.node.style.getPropertyValue(a), n.node.style.setProperty(a, l));
  if (s != null && s.dragOverlay)
    for (const [a, l] of Object.entries(s.dragOverlay))
      l !== void 0 && r.node.style.setProperty(a, l);
  return i != null && i.active && n.node.classList.add(i.active), i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay), function() {
    for (const [l, c] of Object.entries(o))
      n.node.style.setProperty(l, c);
    i != null && i.active && n.node.classList.remove(i.active);
  };
}, f0 = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Mt.Transform.toString(t)
  }, {
    transform: Mt.Transform.toString(n)
  }];
}, h0 = {
  duration: 250,
  easing: "ease",
  keyframes: f0,
  sideEffects: /* @__PURE__ */ d0({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function m0(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return lo((s, i) => {
    if (t === null)
      return;
    const a = n.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const c = Uu(i);
    if (!c)
      return;
    const {
      transform: d
    } = _e(i).getComputedStyle(i), u = Lu(d);
    if (!u)
      return;
    const h = typeof t == "function" ? t : p0(t);
    return Wu(l, o.draggable.measure), h({
      active: {
        id: s,
        data: a.data,
        node: l,
        rect: o.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: i,
        rect: o.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: u
    });
  });
}
function p0(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...h0,
    ...e
  };
  return (s) => {
    let {
      active: i,
      dragOverlay: a,
      transform: l,
      ...c
    } = s;
    if (!t)
      return;
    const d = {
      x: a.rect.left - i.rect.left,
      y: a.rect.top - i.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? i.rect.width * l.scaleX / a.rect.width : 1,
      scaleY: l.scaleY !== 1 ? i.rect.height * l.scaleY / a.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...u
    }, m = o({
      ...c,
      active: i,
      dragOverlay: a,
      transform: {
        initial: l,
        final: h
      }
    }), [v] = m, g = m[m.length - 1];
    if (JSON.stringify(v) === JSON.stringify(g))
      return;
    const b = r?.({
      active: i,
      dragOverlay: a,
      ...c
    }), w = a.node.animate(m, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((C) => {
      w.onfinish = () => {
        b?.(), C();
      };
    });
  };
}
let Ma = 0;
function g0(e) {
  return ee(() => {
    if (e != null)
      return Ma++, Ma;
  }, [e]);
}
const v0 = /* @__PURE__ */ be.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: s,
    modifiers: i,
    wrapperElement: a = "div",
    className: l,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggableNodes: v,
    droppableContainers: g,
    dragOverlay: b,
    over: w,
    measuringConfiguration: C,
    scrollableAncestors: S,
    scrollableAncestorRects: y,
    windowRect: I
  } = Zu(), R = xe(ho), N = g0(u?.id), x = Xu(i, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: b.rect,
    over: w,
    overlayNodeRect: b.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: y,
    transform: R,
    windowRect: I
  }), P = di(h), E = m0({
    config: r,
    draggableNodes: v,
    droppableContainers: g,
    measuringConfiguration: C
  }), D = P ? b.setRef : void 0;
  return be.createElement(a0, null, be.createElement(s0, {
    animation: E
  }, u && N ? be.createElement(u0, {
    key: N,
    id: u.id,
    ref: D,
    as: a,
    activatorEvent: d,
    adjustScale: t,
    className: l,
    transition: s,
    rect: P,
    style: {
      zIndex: c,
      ...o
    },
    transform: x
  }, n) : null));
});
function fi(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function b0(e, t) {
  return e.reduce((n, r, o) => {
    const s = t.get(r);
    return s && (n[o] = s), n;
  }, Array(e.length));
}
function vr(e) {
  return e !== null && e >= 0;
}
function y0(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function w0(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const hi = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const s = fi(t, r, n), i = t[o], a = s[o];
  return !a || !i ? null : {
    x: a.left - i.left,
    y: a.top - i.top,
    scaleX: a.width / i.width,
    scaleY: a.height / i.height
  };
}, Ju = "Sortable", Qu = /* @__PURE__ */ be.createContext({
  activeIndex: -1,
  containerId: Ju,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: hi,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function x0(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = hi,
    disabled: s = !1
  } = e;
  const {
    active: i,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = Zu(), u = Xn(Ju, n), h = a.rect !== null, m = ee(() => r.map((R) => typeof R == "object" && "id" in R ? R.id : R), [r]), v = i != null, g = i ? m.indexOf(i.id) : -1, b = c ? m.indexOf(c.id) : -1, w = ue(m), C = !y0(m, w.current), S = b !== -1 && g === -1 || C, y = w0(s);
  qe(() => {
    C && v && d(m);
  }, [C, m, v, d]), ce(() => {
    w.current = m;
  }, [m]);
  const I = ee(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: y,
      disableTransforms: S,
      items: m,
      overIndex: b,
      useDragOverlay: h,
      sortedRects: b0(m, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, y.draggable, y.droppable, S, m, b, l, h, o]
  );
  return be.createElement(Qu.Provider, {
    value: I
  }, t);
}
const C0 = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return fi(n, r, o).indexOf(t);
}, S0 = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: s,
    newIndex: i,
    previousItems: a,
    previousContainerId: l,
    transition: c
  } = e;
  return !c || !r || a !== s && o === i ? !1 : n ? !0 : i !== o && t === l;
}, N0 = {
  duration: 200,
  easing: "ease"
}, ed = "transform", k0 = /* @__PURE__ */ Mt.Transition.toString({
  property: ed,
  duration: 0,
  easing: "linear"
}), I0 = {
  roleDescription: "sortable"
};
function P0(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [s, i] = ie(null), a = ue(n);
  return qe(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const c = yn(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (d.x || d.y) && i(d);
      }
    }
    n !== a.current && (a.current = n);
  }, [t, n, r, o]), ce(() => {
    s && i(null);
  }, [s]), s;
}
function R0(e) {
  let {
    animateLayoutChanges: t = S0,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: s = C0,
    id: i,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = N0
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: v,
    sortedRects: g,
    overIndex: b,
    useDragOverlay: w,
    strategy: C
  } = xe(Qu), S = E0(r, m), y = d.indexOf(i), I = ee(() => ({
    sortable: {
      containerId: u,
      index: y,
      items: d
    },
    ...o
  }), [u, o, y, d]), R = ee(() => d.slice(d.indexOf(i)), [d, i]), {
    rect: N,
    node: x,
    isOver: P,
    setNodeRef: E
  } = o0({
    id: i,
    data: I,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: R,
      ...l
    }
  }), {
    active: D,
    activatorEvent: $,
    activeNodeRect: z,
    attributes: L,
    setNodeRef: W,
    listeners: A,
    isDragging: T,
    over: k,
    setActivatorNodeRef: M,
    transform: O
  } = t0({
    id: i,
    data: I,
    attributes: {
      ...I0,
      ...n
    },
    disabled: S.draggable
  }), H = zy(E, W), G = !!D, K = G && !v && vr(h) && vr(b), j = !w && T, V = j && K ? O : null, U = K ? V ?? (a ?? C)({
    rects: g,
    activeNodeRect: z,
    activeIndex: h,
    overIndex: b,
    index: y
  }) : null, J = vr(h) && vr(b) ? s({
    id: i,
    items: d,
    activeIndex: h,
    overIndex: b
  }) : y, Z = D?.id, X = ue({
    activeId: Z,
    items: d,
    newIndex: J,
    containerId: u
  }), te = d !== X.current.items, ae = t({
    active: D,
    containerId: u,
    isDragging: T,
    isSorting: G,
    id: i,
    index: y,
    items: d,
    newIndex: X.current.newIndex,
    previousItems: X.current.items,
    previousContainerId: X.current.containerId,
    transition: c,
    wasDragging: X.current.activeId != null
  }), ge = P0({
    disabled: !ae,
    index: y,
    node: x,
    rect: N
  });
  return ce(() => {
    G && X.current.newIndex !== J && (X.current.newIndex = J), u !== X.current.containerId && (X.current.containerId = u), d !== X.current.items && (X.current.items = d);
  }, [G, J, u, d]), ce(() => {
    if (Z === X.current.activeId)
      return;
    if (Z != null && X.current.activeId == null) {
      X.current.activeId = Z;
      return;
    }
    const Ne = setTimeout(() => {
      X.current.activeId = Z;
    }, 50);
    return () => clearTimeout(Ne);
  }, [Z]), {
    active: D,
    activeIndex: h,
    attributes: L,
    data: I,
    rect: N,
    index: y,
    newIndex: J,
    items: d,
    isOver: P,
    isSorting: G,
    isDragging: T,
    listeners: A,
    node: x,
    overIndex: b,
    over: k,
    setNodeRef: H,
    setActivatorNodeRef: M,
    setDroppableNodeRef: E,
    setDraggableNodeRef: W,
    transform: ge ?? U,
    transition: le()
  };
  function le() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ge || // Or to prevent items jumping to back to their "new" position when items change
      te && X.current.newIndex === y
    )
      return k0;
    if (!(j && !co($) || !c) && (G || ae))
      return Mt.Transition.toString({
        ...c,
        property: ed
      });
  }
}
function E0(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
function Wr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const A0 = [fe.Down, fe.Right, fe.Up, fe.Left], D0 = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: s,
      over: i,
      scrollableAncestors: a
    }
  } = t;
  if (A0.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = o.get(u.id);
      if (h)
        switch (e.code) {
          case fe.Down:
            r.top < h.top && l.push(u);
            break;
          case fe.Up:
            r.top > h.top && l.push(u);
            break;
          case fe.Left:
            r.left > h.left && l.push(u);
            break;
          case fe.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const c = ow({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let d = _u(c, "id");
    if (d === i?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(n.id), h = s.get(d), m = h ? o.get(h.id) : null, v = h?.node.current;
      if (v && m && u && h) {
        const b = uo(v).some((R, N) => a[N] !== R), w = td(u, h), C = M0(u, h), S = b || !w ? {
          x: 0,
          y: 0
        } : {
          x: C ? r.width - m.width : 0,
          y: C ? r.height - m.height : 0
        }, y = {
          x: m.left,
          y: m.top
        };
        return S.x && S.y ? y : Bn(y, S);
      }
    }
  }
};
function td(e, t) {
  return !Wr(e) || !Wr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function M0(e, t) {
  return !Wr(e) || !Wr(t) || !td(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function O0({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: s = !1
}) {
  const { attributes: i, listeners: a, setNodeRef: l, transform: c, transition: d, isDragging: u } = R0({
    id: o(e),
    disabled: s
  }), h = {
    transform: Mt.Transform.toString(c),
    transition: d
  };
  return /* @__PURE__ */ F("div", { ref: l, style: h, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${s ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !s && (r ? /* @__PURE__ */ f("div", { ...i, ...a, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ f(
        "div",
        {
          ...i,
          ...a,
          className: "absolute inset-0 cursor-grab active:cursor-grabbing outline-none touch-none"
        }
      )
    ))
  ] });
}
function T0({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ f("div", { className: "rotate-2", children: n(e, t, !0) });
}
function _0({
  items: e,
  onChange: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  gridColsClass: s = "page-drag-drop-grid-cols",
  className: i = "",
  renderToolbar: a,
  renderEmptyState: l,
  showDebugInfo: c = !1,
  renderDragOverlay: d,
  isItemDisabled: u,
  canDropAt: h
}) {
  const [m, v] = ie(e);
  ce(() => {
    v(e);
  }, [e]);
  const [g, b] = ie(null), w = ew(
    ya(ui),
    ya(li, {
      coordinateGetter: D0
    })
  ), C = (R) => {
    const N = m.find((x) => o(x) === R.active.id);
    N && u && u(N) || b(R.active.id);
  }, S = (R) => {
    const { active: N, over: x } = R;
    if (!x || N.id === x.id) {
      b(null);
      return;
    }
    const P = m.find(($) => o($) === N.id), E = m.findIndex(($) => o($) === N.id), D = m.findIndex(($) => o($) === x.id);
    if (P && u && u(P)) {
      b(null);
      return;
    }
    if (h && !h(P, D, m)) {
      b(null);
      return;
    }
    if (E !== -1 && D !== -1) {
      const $ = fi(m, E, D);
      v($), t($);
    }
    b(null);
  }, y = m.find((R) => o(R) === g), I = y ? m.findIndex((R) => o(R) === g) : -1;
  return /* @__PURE__ */ F("div", { className: `w-full ${i}`, children: [
    a && /* @__PURE__ */ f("div", { className: "mb-6", children: a() }),
    m.length === 0 && l ? l() : /* @__PURE__ */ f("div", { className: "mb-6", children: /* @__PURE__ */ F(
      Jw,
      {
        sensors: w,
        collisionDetection: rw,
        onDragStart: C,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ f(x0, { items: m.map(o), strategy: hi, children: /* @__PURE__ */ f("div", { className: s, children: m.map((R, N) => /* @__PURE__ */ f(
            O0,
            {
              item: R,
              index: N,
              renderItem: n,
              renderDragIndicator: r,
              keyExtractor: o,
              disabled: u ? u(R) : !1
            },
            o(R)
          )) }) }),
          /* @__PURE__ */ f(v0, { children: y ? d ? /* @__PURE__ */ f("div", { className: "rotate-2 shadow-lg", children: d(y, I) }) : /* @__PURE__ */ f(T0, { item: y, index: I, renderItem: n }) : null })
        ]
      }
    ) }),
    c && /* @__PURE__ */ F("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ f("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ F("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        m.length,
        " | Active: ",
        g || "none"
      ] }),
      /* @__PURE__ */ F("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        m.map((R, N) => `${N + 1}:${o(R).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const F0 = kl(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gray-900 text-white",
        secondary: "border-transparent bg-gray-100 text-gray-900",
        outline: "border-gray-300 text-gray-900 bg-white"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function mi({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: de(F0({ variant: t }), e), ...n });
}
function L0({
  page: e,
  index: t,
  isDragging: n
}) {
  const s = e.strictPosition, i = s === "start" || s === "end";
  return /* @__PURE__ */ F(
    "div",
    {
      className: `flex items-center justify-center border relative rounded-lg bg-white overflow-hidden transition-all ${n ? "opacity-50 border-gray-400 shadow-xl scale-105" : i ? "border-gray-300 bg-gray-50" : "border-gray-200 group-hover/drag-item:border-gray-300 group-hover/drag-item:shadow-md"}`,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ F("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ f("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ f(mi, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${i ? "opacity-75" : ""}`, children: i ? /* @__PURE__ */ f(Wo, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ F(Te, { children: [
          /* @__PURE__ */ f("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ f(xl, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function $0({
  open: e,
  onOpenChange: t,
  pages: n,
  onReorder: r,
  onRemove: o,
  renderThumbnail: s,
  pageComponents: i,
  payload: a,
  setup: l,
  title: c = "Reorder Pages",
  description: d = "Drag and drop pages to change their order.",
  gridColsClass: u = "page-order-grid-cols"
}) {
  const [h, m] = p.useState(n), [v, g] = p.useState(!1), b = (P) => P.id;
  p.useEffect(() => {
    if (!e)
      m(n), g(!1);
    else if (!v)
      m(n);
    else {
      const P = new Set(h.map(b));
      (P.size !== n.length || n.some((D) => !P.has(b(D)))) && m(n);
    }
  }, [n, e, v, h]);
  const w = (P) => {
    m(P), g(!0);
  }, C = () => {
    r(h), g(!1), t(!1);
  }, S = () => {
    m(n), g(!1), t(!1);
  }, y = p.useMemo(() => (!s || typeof s != "function") && i ? oi({ pageComponents: i, payload: a, setup: l }) : null, [s, i, a, l]), I = (P, E, D) => {
    const $ = P.strictPosition, L = !!o && !($ === "start" || $ === "end"), W = (T) => {
      T.preventDefault(), T.stopPropagation(), o && (o(P), m((k) => k.filter((M) => b(M) !== b(P))), g(!0));
    }, A = s && typeof s == "function" ? s(P, E, D) : y ? y(P, E, D) : /* @__PURE__ */ f(L0, { page: P, index: E, isDragging: D });
    return /* @__PURE__ */ F("div", { className: "relative inline-block align-top", children: [
      A,
      L && /* @__PURE__ */ F(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: W,
          onPointerDown: (T) => T.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ f(xl, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ f(nt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, R = () => /* @__PURE__ */ F("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ f("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(Bi, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ f("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ f("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), N = p.useCallback((P) => {
    const E = P.strictPosition;
    return E === "start" || E === "end";
  }, []), x = p.useCallback((P, E, D) => {
    const $ = P.strictPosition;
    if ($ === "start" || $ === "end")
      return !1;
    let z = -1, L = D.length;
    for (let W = 0; W < D.length; W++) {
      const A = D[W].strictPosition;
      A === "start" ? z = W : A === "end" && L === D.length && (L = W);
    }
    return !(E <= z || E >= L);
  }, []);
  return /* @__PURE__ */ f(Pu, { open: e, onOpenChange: (P) => {
    P || S();
  }, children: /* @__PURE__ */ F(
    ei,
    {
      side: "bottom",
      className: "h-[90vh] p-0 gap-0 w-full max-w-none flex flex-col [&>button]:hidden",
      onPointerDownOutside: (P) => {
        P.preventDefault();
      },
      onEscapeKeyDown: (P) => {
        P.preventDefault();
      },
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ f(ti, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ F("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(Bi, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ F("div", { className: "flex-1", children: [
            /* @__PURE__ */ f(ni, { className: "text-base font-medium text-gray-900 leading-tight", children: c }),
            /* @__PURE__ */ f(ri, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ F(mi, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            h.length,
            " ",
            h.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ f("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ f(
          _0,
          {
            items: h,
            onChange: w,
            renderItem: I,
            keyExtractor: b,
            renderEmptyState: R,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: N,
            canDropAt: x
          }
        ) }) }),
        /* @__PURE__ */ F(Eu, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ f(
            Ae,
            {
              variant: "outline",
              onClick: S,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ f(
            Ae,
            {
              variant: "default",
              onClick: C,
              disabled: !v,
              children: "Save Changes"
            }
          )
        ] })
      ]
    }
  ) });
}
function B0({
  pageId: e,
  templateId: t,
  componentKey: n,
  component: r,
  payload: o,
  pagePayload: s,
  integration: i,
  page: a,
  parentGroup: l,
  setup: c,
  reference: d,
  overlay: u,
  className: h,
  pageNo: m = 0,
  totalPages: v,
  measurementPageNo: g,
  measurementTotalPages: b,
  dataBinding: w,
  flowPageIndex: C = 0,
  flowChunksByFlowId: S,
  measureFlow: y = !1,
  flowMeasurementKey: I,
  flowMeasurementVersion: R,
  onFlowMeasurement: N,
  renderVisible: x = !0
}) {
  const P = typeof u == "function" ? (T) => u({ pageNo: T, pageId: e }) : () => u, E = n || t || e, $ = [E ? `uhuu-page--${E}` : "", h].filter(Boolean).join(" "), z = (T = m, k = v) => r ? /* @__PURE__ */ f(
    r,
    {
      payload: o,
      pagePayload: s,
      integration: i,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: T,
      totalPages: k,
      page: a,
      parentGroup: l,
      componentKey: n,
      dataBinding: w
    }
  ) : null, L = p.useMemo(
    () => ({
      mode: "visible",
      pageIndex: C,
      chunksByFlowId: S
    }),
    [C, S]
  ), W = p.useCallback((T) => {
    I && N?.(I, T);
  }, [I, N]), A = p.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: R,
      registerMeasurement: W
    }),
    [R, W]
  );
  return /* @__PURE__ */ F(Te, { children: [
    y && N && I && /* @__PURE__ */ f(
      "div",
      {
        style: {
          position: "fixed",
          visibility: "hidden",
          pointerEvents: "none",
          left: "-100000px",
          top: 0,
          // FlowArea measures its own bounded page body. A 0×0 host makes
          // that body fall back to the total item height, which in turn
          // produces a one-page viewer/runtime chunk despite a correct
          // interactive Review measurement. Keep this offscreen surface at
          // the real Sheet dimensions while hiding it from the user.
          width: "calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))",
          height: "calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed))",
          minWidth: "calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))",
          minHeight: "calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed))",
          overflow: "hidden",
          zIndex: -1
        },
        "aria-hidden": "true",
        "data-uhuu-flow-measurement": "true",
        children: /* @__PURE__ */ f(zo, { setup: c, children: /* @__PURE__ */ f(Ho, { className: $, pageNo: m, "data-page-key": E, children: /* @__PURE__ */ f(Mn.Provider, { value: A, children: z(
          g ?? m,
          b ?? v
        ) }) }) })
      }
    ),
    x && /* @__PURE__ */ f(zo, { setup: c, children: /* @__PURE__ */ F(
      Ho,
      {
        className: $,
        pageNo: m,
        overlay: ({ pageNo: T }) => P(T),
        "data-page-key": E,
        children: [
          d,
          /* @__PURE__ */ f(Mn.Provider, { value: L, children: z(m, v) })
        ]
      }
    ) })
  ] });
}
const nd = p.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
    "select",
    {
      className: de(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
nd.displayName = "Select";
function rd(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var mo = "Switch", [z0] = gt(mo), [H0, pi] = z0(mo);
function K0(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: i,
    name: a,
    onCheckedChange: l,
    required: c,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: u
  } = e, [h, m] = hn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: mo
  }), [v, g] = p.useState(null), [b, w] = p.useState(null), C = p.useRef(!1), S = v ? !!i || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), y = {
    checked: h,
    setChecked: m,
    disabled: s,
    control: v,
    setControl: g,
    name: a,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: C,
    required: c,
    defaultChecked: o,
    isFormControl: S,
    bubbleInput: b,
    setBubbleInput: w
  };
  return /* @__PURE__ */ f(H0, { scope: t, ...y, children: G0(u) ? u(y) : r });
}
var od = "SwitchTrigger", sd = p.forwardRef(
  ({ __scopeSwitch: e, onClick: t, ...n }, r) => {
    const {
      control: o,
      form: s,
      value: i,
      disabled: a,
      checked: l,
      required: c,
      setControl: d,
      setChecked: u,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: m,
      bubbleInput: v
    } = pi(od, e), g = me(r, d), b = p.useRef(l);
    return p.useEffect(() => {
      const w = s ? o?.ownerDocument.getElementById(s) : o?.form;
      if (w instanceof HTMLFormElement) {
        const C = () => u(b.current);
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [o, s, u]), /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": c,
        "data-state": ud(l),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...n,
        ref: g,
        onClick: re(t, (w) => {
          u((C) => !C), v && m && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }
);
sd.displayName = od;
var gi = p.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l,
      onCheckedChange: c,
      form: d,
      ...u
    } = e;
    return /* @__PURE__ */ f(
      K0,
      {
        __scopeSwitch: n,
        checked: o,
        defaultChecked: s,
        disabled: a,
        required: i,
        onCheckedChange: c,
        name: r,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ F(Te, { children: [
          /* @__PURE__ */ f(
            sd,
            {
              ...u,
              ref: t,
              __scopeSwitch: n
            }
          ),
          h && /* @__PURE__ */ f(
            cd,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
gi.displayName = mo;
var id = "SwitchThumb", ad = p.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = pi(id, n);
    return /* @__PURE__ */ f(
      pe.span,
      {
        "data-state": ud(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ad.displayName = id;
var ld = "SwitchBubbleInput", cd = p.forwardRef(
  ({ __scopeSwitch: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: l,
      name: c,
      value: d,
      form: u,
      bubbleInput: h,
      setBubbleInput: m
    } = pi(ld, e), v = me(n, m), g = rd(s), b = Ds(r);
    p.useEffect(() => {
      const C = h;
      if (!C) return;
      const S = window.HTMLInputElement.prototype, I = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set, R = !o.current;
      if (g !== s && I) {
        const N = new Event("click", { bubbles: R });
        I.call(C, s), C.dispatchEvent(N);
      }
    }, [h, g, s, o]);
    const w = p.useRef(s);
    return /* @__PURE__ */ f(
      pe.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? w.current,
        required: a,
        disabled: l,
        name: c,
        value: d,
        form: u,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...b,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
cd.displayName = ld;
function G0(e) {
  return typeof e == "function";
}
function ud(e) {
  return e ? "checked" : "unchecked";
}
const dd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  gi,
  {
    ref: n,
    className: de(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f(
      ad,
      {
        className: de(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
dd.displayName = gi.displayName;
function fd(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var hd = ["PageUp", "PageDown"], md = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], pd = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, wn = "Slider", [ns, W0, V0] = ws(wn), [vi] = gt(wn, [
  V0
]), [j0, Jn] = vi(wn), bi = p.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: s = 1,
      orientation: i = "horizontal",
      disabled: a = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: d,
      onValueChange: u = () => {
      },
      onValueCommit: h = () => {
      },
      inverted: m = !1,
      form: v,
      ...g
    } = e, b = p.useRef(/* @__PURE__ */ new Set()), w = p.useRef(0), C = p.useRef(!1), y = i === "horizontal" ? U0 : Y0, [I, R] = p.useState(null), N = me(t, R), [x = [], P] = hn({
      prop: d,
      defaultProp: c,
      onChange: (A) => {
        [...b.current][w.current]?.focus({
          preventScroll: !0,
          focusVisible: C.current
        }), C.current = !1, u(A);
      }
    }), E = p.useRef(x), D = p.useRef(x);
    p.useEffect(() => {
      const A = v ? I?.ownerDocument.getElementById(v) : I?.closest("form");
      if (A instanceof HTMLFormElement) {
        const T = () => P(D.current);
        return A.addEventListener("reset", T), () => A.removeEventListener("reset", T);
      }
    }, [I, v, P]);
    function $(A) {
      const T = J0(x, A);
      W(A, T);
    }
    function z(A) {
      W(A, w.current);
    }
    function L() {
      const A = E.current[w.current];
      x[w.current] !== A && h(x);
    }
    function W(A, T, { commit: k } = { commit: !1 }) {
      const M = Dd(s), O = Sr(Math.round((A - r) / s) * s + r, M), H = fd(O, [r, o]);
      P((G = []) => {
        const K = X0(G, H, T);
        if (tx(K, l * s)) {
          w.current = K.indexOf(H);
          const j = String(K) !== String(G);
          return j && k && h(K), j ? K : G;
        } else
          return G;
      });
    }
    return /* @__PURE__ */ f(
      j0,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: w,
        thumbs: b.current,
        values: x,
        orientation: i,
        form: v,
        children: /* @__PURE__ */ f(ns.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(ns.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
          y,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...g,
            ref: N,
            onPointerDown: re(g.onPointerDown, () => {
              a || (E.current = x, C.current = !1);
            }),
            min: r,
            max: o,
            inverted: m,
            onSlideStart: a ? void 0 : $,
            onSlideMove: a ? void 0 : z,
            onSlideEnd: a ? void 0 : L,
            onHomeKeyDown: () => {
              a || (C.current = !0, W(r, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              a || (C.current = !0, W(o, x.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: A, direction: T }) => {
              if (!a) {
                C.current = !0;
                const O = hd.includes(A.key) || A.shiftKey && md.includes(A.key) ? 10 : 1, H = w.current, G = x[H], K = nx(G, {
                  min: r,
                  step: s,
                  direction: T,
                  multiplier: O
                });
                W(K, H, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
bi.displayName = wn;
var [gd, vd] = vi(wn, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), U0 = p.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: s,
      onSlideStart: i,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...d
    } = e, [u, h] = p.useState(null), m = me(t, h), v = p.useRef(void 0), g = xs(o), b = g === "ltr", w = b && !s || !b && s;
    function C(S) {
      const y = v.current || u.getBoundingClientRect(), I = [0, y.width], N = yi(I, w ? [n, r] : [r, n]);
      return v.current = y, N(S - y.left);
    }
    return /* @__PURE__ */ f(
      gd,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ f(
          bd,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...d,
            ref: m,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (S) => {
              const y = C(S.clientX);
              i?.(y);
            },
            onSlideMove: (S) => {
              const y = C(S.clientX);
              a?.(y);
            },
            onSlideEnd: () => {
              v.current = void 0, l?.();
            },
            onStepKeyDown: (S) => {
              const I = pd[w ? "from-left" : "from-right"].includes(S.key);
              c?.({ event: S, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Y0 = p.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: s,
      onSlideMove: i,
      onSlideEnd: a,
      onStepKeyDown: l,
      ...c
    } = e, d = p.useRef(null), u = me(t, d), h = p.useRef(void 0), m = !o;
    function v(g) {
      const b = h.current || d.current.getBoundingClientRect(), w = [0, b.height], S = yi(w, m ? [r, n] : [n, r]);
      return h.current = b, S(g - b.top);
    }
    return /* @__PURE__ */ f(
      gd,
      {
        scope: e.__scopeSlider,
        startEdge: m ? "bottom" : "top",
        endEdge: m ? "top" : "bottom",
        size: "height",
        direction: m ? 1 : -1,
        children: /* @__PURE__ */ f(
          bd,
          {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const b = v(g.clientY);
              s?.(b);
            },
            onSlideMove: (g) => {
              const b = v(g.clientY);
              i?.(b);
            },
            onSlideEnd: () => {
              h.current = void 0, a?.();
            },
            onStepKeyDown: (g) => {
              const w = pd[m ? "from-bottom" : "from-top"].includes(g.key);
              l?.({ event: g, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), bd = p.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: s,
      onHomeKeyDown: i,
      onEndKeyDown: a,
      onStepKeyDown: l,
      ...c
    } = e, d = Jn(wn, n);
    return /* @__PURE__ */ f(
      pe.span,
      {
        ...c,
        ref: t,
        onKeyDown: re(e.onKeyDown, (u) => {
          u.key === "Home" ? (i(u), u.preventDefault()) : u.key === "End" ? (a(u), u.preventDefault()) : hd.concat(md).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: re(e.onPointerDown, (u) => {
          const h = u.target;
          h.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : r(u);
        }),
        onPointerMove: re(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && o(u);
        }),
        onPointerUp: re(e.onPointerUp, (u) => {
          const h = u.target;
          h.hasPointerCapture(u.pointerId) && (h.releasePointerCapture(u.pointerId), s(u));
        })
      }
    );
  }
), yd = "SliderTrack", wd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(yd, n);
    return /* @__PURE__ */ f(
      pe.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
wd.displayName = yd;
var rs = "SliderRange", xd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(rs, n), s = vd(rs, n), i = p.useRef(null), a = me(t, i), l = o.values.length, c = o.values.map(
      (h) => Ad(h, o.min, o.max)
    ), d = l > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
    return /* @__PURE__ */ f(
      pe.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: a,
        style: {
          ...e.style,
          [s.startEdge]: d + "%",
          [s.endEdge]: u + "%"
        }
      }
    );
  }
);
xd.displayName = rs;
var Cd = "SliderThumb", [q0, Sd] = vi(Cd), Nd = "SliderThumbProvider";
function kd(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, s = Jn(Nd, t), i = W0(t), [a, l] = p.useState(null), c = p.useMemo(
    () => a ? i().findIndex((b) => b.ref.current === a) : -1,
    [i, a]
  ), d = Ds(a), u = a ? !!s.form || !!a.closest("form") : !0, h = s.values[c], m = n ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), v = h === void 0 ? 0 : Ad(h, s.min, s.max);
  p.useEffect(() => {
    if (a)
      return s.thumbs.add(a), () => {
        s.thumbs.delete(a);
      };
  }, [a, s.thumbs]);
  const g = {
    value: h,
    name: m,
    form: s.form,
    isFormControl: u,
    index: c,
    thumb: a,
    onThumbChange: l,
    percent: v,
    size: d
  };
  return /* @__PURE__ */ f(q0, { scope: t, ...g, children: rx(o) ? o(g) : r });
}
kd.displayName = Nd;
var Cr = "SliderThumbTrigger", Id = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(Cr, n), s = vd(Cr, n), { index: i, value: a, percent: l, size: c, onThumbChange: d } = Sd(
      Cr,
      n
    ), u = me(t, d), h = Z0(i, o.values.length), m = c?.[s.size], v = m ? Q0(m, l, s.direction) : 0;
    return /* @__PURE__ */ f(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${v}px)`
        },
        children: /* @__PURE__ */ f(ns.ItemSlot, { scope: n, children: /* @__PURE__ */ f(
          pe.span,
          {
            role: "slider",
            "aria-label": e["aria-label"] || h,
            "aria-valuemin": o.min,
            "aria-valuenow": a,
            "aria-valuemax": o.max,
            "aria-orientation": o.orientation,
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            tabIndex: o.disabled ? void 0 : 0,
            ...r,
            ref: u,
            style: a === void 0 ? { display: "none" } : e.style,
            onFocus: re(e.onFocus, () => {
              o.valueIndexToChangeRef.current = i;
            })
          }
        ) })
      }
    );
  }
);
Id.displayName = Cr;
var Pd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, name: r, ...o } = e;
    return /* @__PURE__ */ f(
      kd,
      {
        __scopeSlider: n,
        name: r,
        internal_do_not_use_render: ({ index: s, isFormControl: i }) => /* @__PURE__ */ F(Te, { children: [
          /* @__PURE__ */ f(
            Id,
            {
              ...o,
              ref: t,
              __scopeSlider: n
            }
          ),
          i ? /* @__PURE__ */ f(
            Ed,
            {
              __scopeSlider: n
            },
            s
          ) : null
        ] })
      }
    );
  }
);
Pd.displayName = Cd;
var Rd = "SliderBubbleInput", Ed = p.forwardRef(
  ({ __scopeSlider: e, ...t }, n) => {
    const { value: r, name: o, form: s } = Sd(Rd, e), i = p.useRef(null), a = me(i, n), l = rd(r);
    return p.useEffect(() => {
      const c = i.current;
      if (!c) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(d, "value").set;
      if (l !== r && h) {
        const m = new Event("input", { bubbles: !0 });
        h.call(c, r), c.dispatchEvent(m);
      }
    }, [l, r]), /* @__PURE__ */ f(
      pe.input,
      {
        style: { display: "none" },
        name: o,
        form: s,
        ...t,
        ref: a,
        defaultValue: r
      }
    );
  }
);
Ed.displayName = Rd;
function X0(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, s) => o - s);
}
function Ad(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return fd(s, [0, 100]);
}
function Z0(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function J0(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function Q0(e, t, n) {
  const r = e / 2, s = yi([0, 50], [0, r]);
  return (r - s(t) * n) * n;
}
function ex(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function tx(e, t) {
  if (t > 0) {
    const n = ex(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function yi(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Dd(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), s = r.split(".")[1] || "", i = Number(o);
    return Math.max(0, s.length - i);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
function Sr(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
function nx(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const s = Dd(n), i = (e - t) / n, a = Math.round(i), l = Sr(a * n + t, s) === Sr(e, s);
  let c;
  return l ? c = a + o * r : r > 0 ? c = Math.ceil(i) : c = Math.floor(i), Sr(c * n + t, s);
}
function rx(e) {
  return typeof e == "function";
}
const wi = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ F(
  bi,
  {
    ref: n,
    className: de(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f(wd, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ f(xd, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ f(Pd, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
wi.displayName = bi.displayName;
var ox = "Label", Md = p.forwardRef((e, t) => /* @__PURE__ */ f(
  pe.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Md.displayName = ox;
var Od = Md;
const sn = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Od,
  {
    ref: n,
    className: de(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
sn.displayName = Od.displayName;
function Td(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((i) => typeof i == "function" ? i(o) : i === o.id || i === o.templateId || o.componentKey === i) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function sx({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = Td(e, t), o = (s) => {
    const i = s.getValue(t);
    switch (s.type) {
      case "select":
        return /* @__PURE__ */ F("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(sn, { htmlFor: s.id, className: "text-xs font-medium text-gray-500", children: s.label }),
          /* @__PURE__ */ f(
            nd,
            {
              id: s.id,
              value: String(i),
              onChange: (a) => n(s, t, a.target.value),
              className: "w-full text-sm",
              children: s.options.map((a) => /* @__PURE__ */ f("option", { value: a.value, children: a.label }, a.value))
            }
          )
        ] }, s.id);
      case "toggle": {
        const a = typeof i == "boolean" ? i : i === "true";
        return /* @__PURE__ */ F("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ f(sn, { htmlFor: s.id, className: "text-xs font-medium text-gray-500", children: s.label }),
          /* @__PURE__ */ f(
            dd,
            {
              id: s.id,
              checked: a,
              onCheckedChange: (l) => n(s, t, String(l))
            }
          )
        ] }, s.id);
      }
      case "slider": {
        const a = typeof i == "number" ? i : Number(i) || s.min;
        return /* @__PURE__ */ F("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ F("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ f(sn, { htmlFor: s.id, className: "text-xs font-medium text-gray-500", children: s.label }),
            /* @__PURE__ */ f("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: a })
          ] }),
          /* @__PURE__ */ f(
            wi,
            {
              id: s.id,
              min: s.min,
              max: s.max,
              step: s.step,
              value: [a],
              onValueChange: (l) => n(s, t, String(l[0]))
            }
          )
        ] }, s.id);
      }
      case "counter": {
        const a = typeof i == "number" ? i : Number(i) || s.min;
        return /* @__PURE__ */ F("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(sn, { className: "text-xs font-medium text-gray-500", children: s.label }),
          /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ f(
              Ae,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const l = Math.max(s.min, a - s.step);
                  n(s, t, String(l));
                },
                disabled: a <= s.min,
                type: "button",
                children: /* @__PURE__ */ f(lm, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ f("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ f("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: a }) }),
            /* @__PURE__ */ f(
              Ae,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const l = Math.min(s.max, a + s.step);
                  n(s, t, String(l));
                },
                disabled: a >= s.max,
                type: "button",
                children: /* @__PURE__ */ f(nt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, s.id);
      }
      case "color-series": {
        const a = String(i);
        return /* @__PURE__ */ F("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(sn, { className: "text-xs font-medium text-gray-500", children: s.label }),
          /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1.5", children: s.options.map((l) => {
            const c = a === l.value;
            return /* @__PURE__ */ f(
              "button",
              {
                onClick: () => n(s, t, l.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${c ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: l.hex || l.value },
                type: "button",
                title: `${l.label}${l.hex ? ` (${l.hex})` : ""}`,
                children: c && /* @__PURE__ */ f(gs, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
              },
              l.value
            );
          }) })
        ] }, s.id);
      }
      default:
        return console.warn(`Unknown option type: ${s.type}`), null;
    }
  };
  return /* @__PURE__ */ f("div", { className: "space-y-3", children: r.map((s) => o(s)) });
}
function ix({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || Td(e, t).length === 0 ? null : /* @__PURE__ */ F(Vn, { modal: !1, children: [
    /* @__PURE__ */ f(jn, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ F(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ f(wl, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ f(gn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ f(
      sx,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function ax({
  name: e,
  canRename: t,
  canMoveUp: n,
  canMoveDown: r,
  canAddPage: o,
  canDuplicate: s,
  canDelete: i,
  onRename: a,
  onMoveUp: l,
  onMoveDown: c,
  onAddPage: d,
  onDuplicate: u,
  onDelete: h
}) {
  const [m, v] = ie(!1), [g, b] = ie(!1), [w, C] = ie(e), S = ue(null);
  ce(() => {
    C(e);
  }, [e]), ce(() => {
    g && setTimeout(() => {
      S.current?.focus(), S.current?.select();
    }, 10);
  }, [g]);
  const y = () => {
    const N = w.trim();
    N && N !== e && a?.(N), b(!1);
  }, I = n || r || o || s || i, R = t || I;
  return g ? /* @__PURE__ */ f(
    "input",
    {
      ref: S,
      value: w,
      onChange: (N) => C(N.target.value),
      onKeyDown: (N) => {
        N.key === "Enter" && y(), N.key === "Escape" && (C(e), b(!1)), N.stopPropagation();
      },
      onBlur: y,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : R ? /* @__PURE__ */ F(Vn, { open: m, onOpenChange: v, modal: !1, children: [
    /* @__PURE__ */ f(jn, { asChild: !0, children: /* @__PURE__ */ F(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ f("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ f(yl, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ F(gn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ F(Be, { onSelect: (N) => {
        N.preventDefault(), v(!1), b(!0);
      }, children: [
        /* @__PURE__ */ f(um, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && I && /* @__PURE__ */ f(Vt, {}),
      n && /* @__PURE__ */ F(Be, { onClick: l, children: [
        /* @__PURE__ */ f(Vh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ F(Be, { onClick: c, children: [
        /* @__PURE__ */ f(Kh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ f(Vt, {}),
      o && /* @__PURE__ */ F(Be, { onClick: d, children: [
        /* @__PURE__ */ f(nt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      s && /* @__PURE__ */ F(Be, { onClick: u, children: [
        /* @__PURE__ */ f(tm, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      i && /* @__PURE__ */ f(Vt, {}),
      i && /* @__PURE__ */ F(Be, { onClick: h, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ f(pm, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ f("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function lx(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: s,
    payload: i,
    setup: a,
    stateKey: l = Xt,
    resolveNewItem: c,
    notifyError: d,
    pageFilter: u
  } = e, [h, m] = ie(t), [v, g] = ie(!1), b = ue(t);
  ce(() => {
    try {
      const A = JSON.stringify(b.current), T = JSON.stringify(t);
      A !== T && (b.current = t, m(t));
    } catch {
      b.current !== t && (b.current = t, m(t));
    }
  }, [t]);
  const w = xe(Un), C = he((A) => {
    m(A);
    const T = cu(A, l);
    w?.mergePageEditorState && w.mergePageEditorState(A, l), o?.(T), r?.(A, T);
  }, [r, o, l, w]), S = ee(() => {
    const A = /* @__PURE__ */ new Map();
    return h.forEach((T) => {
      const k = T.templateId ?? T.id;
      A.set(k, (A.get(k) ?? 0) + 1), Fe(T) && T.pages?.forEach((M) => {
        const O = M.templateId ?? M.id;
        A.set(O, (A.get(O) ?? 0) + 1);
      });
    }), A;
  }, [h]), y = ee(() => n.filter((A) => {
    if (A.kind === "page") {
      const G = A, K = G.templateId ?? G.id, j = S.get(K) ?? 0, V = G.repeatable ?? !1, B = G.maxInstances ?? null;
      return !(!V && j > 0 || B !== null && j >= B);
    }
    const T = A, k = T.templateId ?? T.id, M = S.get(k) ?? 0, O = T.repeatable ?? !1, H = T.maxInstances ?? null;
    return !(!O && M > 0 || O && H !== null && M >= H);
  }), [n, S]), I = ee(() => mt(h), [h]), R = he(async (A, T) => {
    const k = (B) => B ? typeof B == "string" ? B : B.mode ?? "optional" : "none", M = (B, U) => {
      if (!B) return [];
      if (Array.isArray(B)) return B;
      try {
        const J = B(U);
        if (!Array.isArray(J))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof J), [];
        const Z = J.filter((X) => typeof X == "string");
        return Z.length !== J.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), Z;
      } catch (J) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", J), [];
      }
    }, H = ((B) => {
      if (B.kind === "page") {
        const te = B, ae = te.templateId ?? te.id, ge = te.componentKey ?? te.id;
        return du(ae, ge, {
          label: te.label,
          className: te.className,
          repeatable: te.repeatable,
          maxInstances: te.maxInstances,
          integration: te.integration,
          strictPosition: te.strictPosition
        });
      }
      const U = B, J = U.templateId ?? U.id, Z = {
        payload: i,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, X = M(U.pageComponentKeys, Z);
      return fu(J, X, {
        label: U.label,
        repeatable: U.repeatable ?? !1,
        maxInstances: U.maxInstances ?? null,
        integration: U.integration,
        strictPosition: U.strictPosition
      });
    })(A);
    typeof window < "u" && window.$uhuu?.debug;
    let G, K = H;
    if (c)
      K = await c(H);
    else {
      const B = k(H.integration);
      let U = !1;
      if (B !== "none" && typeof window < "u") {
        const J = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        J && (G = await J({ item: H, mode: B }), G == null && B === "required" && (U = !0));
      }
      if (U) return { success: !1 };
    }
    if (K === null) return { success: !1 };
    const j = K ?? H;
    if (G !== void 0 && w?.setIntegrationPayload) {
      const B = j.id;
      w.setIntegrationPayload(B, G);
    }
    return C(((B, U, J) => {
      const Z = U.strictPosition;
      if (Z === "start") return [U, ...B];
      if (Z === "end") return [...B, U];
      const X = [], te = [], ae = [];
      if (B.forEach((le) => {
        const Ne = le.strictPosition;
        Ne === "start" ? X.push(le) : Ne === "end" ? ae.push(le) : te.push(le);
      }), !J || J.mode === "end")
        return [...X, ...te, U, ...ae];
      const ge = te.findIndex((le) => le.id === J.anchorId);
      return ge === -1 ? B.find(($e) => $e.id === J.anchorId)?.strictPosition === "start" ? [...X, U, ...te, ...ae] : [...X, ...te, U, ...ae] : (J.mode === "before" ? te.splice(ge, 0, U) : te.splice(ge + 1, 0, U), [...X, ...te, ...ae]);
    })(h, j, T)), { success: !0, insertedId: j.id };
  }, [h, C, c, w]), N = he((A) => {
    const T = (M) => {
      d ? d(M) : alert(M);
    }, k = h.find((M) => M.id === A);
    if (k) {
      if (mt(h) <= 1) {
        T("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (w?.removeIntegrationPayload) {
        const O = k.id;
        w.payload?.integrations?.[O] !== void 0 && w.removeIntegrationPayload(O);
      }
      C(h.filter((O) => O.id !== A));
      return;
    }
    for (const M of h)
      if (Fe(M) && M.pages.some((O) => O.id === A)) {
        if (mt(h) <= 1) {
          T("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (M.pages.length === 1) {
          if (w?.removeIntegrationPayload) {
            const H = M.id;
            w.payload?.integrations?.[H] !== void 0 && w.removeIntegrationPayload(H);
          }
          C(h.filter((H) => H.id !== M.id));
        } else
          C(h.map((H) => H.id === M.id && Fe(H) ? {
            ...H,
            pages: H.pages.filter((G) => G.id !== A)
          } : H));
        return;
      }
  }, [h, d, C, w]), x = he((A, T) => {
    C(h.map((k) => k.id === A ? Fe(k) ? {
      ...k,
      ...T
    } : { ...k, ...T } : k));
  }, [h, C]), P = he((A) => {
    C(A);
  }, [C]), E = ee(() => {
    const A = Zb(h);
    return u ? ny(A, u) : A;
  }, [h, u]), D = he((A) => {
    const T = [];
    return E.forEach((k) => {
      Fe(k) ? (k.pages ?? []).forEach((O) => {
        T.push(A(O, k));
      }) : T.push(A(k, k));
    }), T;
  }, [E]), $ = ee(
    () => Jb(E),
    [E]
  ), z = he((A) => {
    const T = Qb(A, h);
    C(((M) => {
      const O = [], H = [], G = [];
      return M.forEach((K) => {
        const j = K.strictPosition;
        j === "start" ? O.push(K) : j === "end" ? G.push(K) : H.push(K);
      }), [...O, ...H, ...G];
    })(T));
  }, [h, C]), L = he(() => {
    g(!0);
  }, []), W = ee(() => {
    if (s)
      return oi({ pageComponents: s, payload: i, setup: a });
  }, [s, i, a]);
  return {
    items: h,
    itemsWithPageNum: E,
    totalPageCount: I,
    availableItemsToAdd: y,
    addItem: R,
    removeItem: N,
    updateItemFields: x,
    reorderItems: P,
    addDialogOpen: v,
    setAddDialogOpen: g,
    openAddDialog: L,
    renderItems: D,
    itemsForReorder: $,
    handleReorder: z,
    defaultRenderThumbnail: W
  };
}
function cx({
  items: e,
  reorderItems: t,
  availableItemsToAdd: n,
  setPendingInsertPosition: r,
  openAddDialog: o
}) {
  const s = ee(
    () => e.filter((a) => !a.strictPosition),
    [e]
  );
  return he(
    (a, l) => {
      if (!a) return {};
      const c = a.id, d = s.findIndex((b) => b.id === c), u = d !== -1, h = u && d > 0 ? () => {
        const b = [...e], w = b.findIndex((C) => C.id === c);
        w < 1 || ([b[w - 1], b[w]] = [b[w], b[w - 1]], t(b));
      } : void 0, m = u && d < s.length - 1 ? () => {
        const b = [...e], w = b.findIndex((C) => C.id === c);
        w < 0 || w >= b.length - 1 || ([b[w], b[w + 1]] = [b[w + 1], b[w]], t(b));
      } : void 0, v = u && a.repeatable ? () => {
        const w = { ...e.find((y) => y.id === c) ?? a, id: `${c}_copy_${Date.now()}` }, C = [...e], S = C.findIndex((y) => y.id === c);
        C.splice(S < 0 ? C.length : S + 1, 0, w), t(C);
      } : void 0;
      return { onAddPage: l && n.length > 0 ? () => {
        r({ mode: "before", anchorId: l }), o();
      } : void 0, onMoveUp: h, onMoveDown: m, onDuplicate: v };
    },
    [e, s, t, n, r, o]
  );
}
function ux(e = [], t = {}) {
  const n = [];
  let r = 1;
  for (const o of e) {
    const s = o.hasFlow ? t[o.flowKey] : void 0, i = Object.values(s?.flows ?? {}), a = Math.max(1, ...i.map((l) => l.length));
    for (let l = 0; l < a; l += 1)
      n.push({
        ...o,
        pageNum: r++,
        virtualPageId: l === 0 ? o.id : `${o.id}__flow_${l + 1}`,
        virtualPageIndex: l,
        virtualPageCount: a,
        flowChunksByFlowId: s?.flows
      });
  }
  return n;
}
function dx({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = ie({
    layoutKey: n,
    layouts: {}
  }), s = r.layoutKey === n ? r.layouts : {}, i = ee(
    () => e.filter((m) => m.hasFlow).map((m) => m.flowKey).join("|"),
    [e]
  ), a = ee(
    () => new Set(i ? i.split("|") : []),
    [i]
  ), l = ee(() => {
    const m = {};
    for (const v of e) {
      if (!v.hasFlow) continue;
      const g = s[v.flowKey];
      g && (m[v.flowKey] = g);
    }
    return m;
  }, [s, e]), c = he((m, v) => {
    a.has(m) && o((g) => {
      const b = g.layoutKey === n ? g.layouts : {}, w = {};
      let C = !1;
      for (const [I, R] of Object.entries(b))
        a.has(I) ? w[I] = R : C = !0;
      const S = w[m] ?? { flows: {}, signatures: {} }, y = S.signatures?.[v.flowId];
      return g.layoutKey === n && y === v.signature && !C ? g : {
        layoutKey: n,
        layouts: {
          ...w,
          [m]: {
            flows: {
              ...S.flows,
              [v.flowId]: v.chunks
            },
            signatures: {
              ...S.signatures,
              [v.flowId]: v.signature
            }
          }
        }
      };
    });
  }, [a, n]), d = ee(
    () => ux(e, l),
    [e, l]
  ), u = d.length, h = ee(
    () => d.filter((m) => ry(m.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: h,
    virtualTotalPageCount: u,
    registerMeasurement: c
  };
}
function Oa(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function fx(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function hx({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const s = pu(e, t, n), i = n && Fe(n) ? n.id : void 0, a = `pages.${t.id}`, l = i ? `pages.${i}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: i,
    integration: {
      instanceId: s.instanceId,
      data: s.integration,
      path: (c) => ga(s.instanceId, c)
    },
    paths: {
      integration: (c) => ga(s.instanceId, c),
      page: (c) => Oa(a, c),
      group: (c) => Oa(l, c),
      document: (c) => c ?? null
    },
    defaults: {
      imageGalleryPath: fx(
        e,
        s.integration,
        o
      )
    }
  };
}
const Ta = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, s = r?.[o], i = typeof e == "string" ? s?.componentKey ?? o : e.componentKey ?? s?.componentKey ?? e.id, a = t ?? o, l = (typeof e == "string" ? void 0 : e.repeatable) ?? s?.repeatable ?? !1, c = (typeof e == "string" ? void 0 : e.maxInstances) ?? s?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? s?.label, u = (typeof e == "string" ? void 0 : e.className) ?? s?.className, h = (typeof e == "string" ? void 0 : e.component) ?? s?.component, m = (typeof e == "string" ? void 0 : e.integration) ?? s?.integration, v = (typeof e == "string" ? void 0 : e.strictPosition) ?? s?.strictPosition, g = (typeof e == "string" ? void 0 : e.hasFlow) ?? s?.hasFlow;
  return n ? {
    kind: "page",
    id: o,
    componentKey: i,
    templateId: a,
    label: d,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: m,
    component: h,
    strictPosition: v,
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  } : du(a, i, {
    label: d,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: m,
    component: h,
    strictPosition: v,
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  });
}, _a = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, i = px(e.pageComponentKeys, o).map((a) => {
    const l = r?.[a], c = l?.dataKey, d = l?.hasFlow;
    return c || d ? { key: a, ...c ? { dataKey: c } : {}, ...d ? { hasFlow: d } : {} } : a;
  });
  if (t) {
    const a = e.id;
    return {
      kind: "group",
      id: a,
      templateId: e.id,
      label: e.label,
      repeatable: e.repeatable ?? !1,
      maxInstances: e.maxInstances ?? null,
      integration: e.integration,
      strictPosition: e.strictPosition,
      pages: i.map((c, d) => {
        const u = typeof c == "string" ? c : c.key, h = typeof c == "string" ? void 0 : c.dataKey;
        return {
          id: `${a}__${h ?? u}__${d}`,
          componentKey: u,
          templateId: u,
          ...h ? { dataKey: h } : {},
          ...r?.[u]?.hasFlow ? { hasFlow: !0 } : {}
        };
      })
    };
  }
  return fu(e.id, i, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, mx = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], px = (e, t) => {
  if (!e) return [];
  if (Array.isArray(e)) return e;
  try {
    const n = e(t);
    if (!Array.isArray(n))
      return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof n), [];
    const r = n.filter((o) => typeof o == "string");
    return r.length !== n.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), r;
  } catch (n) {
    return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", n), [];
  }
}, gx = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: s = {},
    payload: i
  } = e, a = mx(n), l = /* @__PURE__ */ new Map();
  a.forEach((g) => l.set(g.id, g));
  const c = r.length ? r : Object.keys(o), d = { ...s };
  Object.entries(o).forEach(([g, b]) => {
    b.component && (d[g] = b.component);
  });
  const u = t.map((g) => {
    if (typeof g == "string") {
      const w = l.get(g);
      return w ? _a(w, !0, i, o) : Ta(g, void 0, !0, o);
    }
    return g.pageComponentKeys !== void 0 ? _a(g, !0, i, o) : Ta(g, void 0, !0, o);
  }), h = a.map((g) => ({
    kind: "group",
    id: g.id,
    // Template ID
    templateId: g.id,
    label: g.label,
    thumbnail: g.thumbnail,
    pageComponentKeys: g.pageComponentKeys,
    // Keep original (function or array)
    repeatable: g.repeatable ?? !1,
    maxInstances: g.maxInstances ?? null,
    integration: g.integration,
    strictPosition: g.strictPosition
  })), v = [
    ...c.filter((g) => o?.[g]?.allowAsSinglePage !== !1).map((g) => {
      const b = o?.[g];
      return {
        kind: "page",
        id: g,
        // Template ID
        templateId: g,
        componentKey: b?.componentKey ?? g,
        label: b?.label,
        className: b?.className,
        repeatable: b?.repeatable ?? !1,
        maxInstances: b?.maxInstances ?? null,
        thumbnail: b?.thumbnail,
        integration: b?.integration,
        strictPosition: b?.strictPosition,
        hasFlow: b?.hasFlow
      };
    }),
    ...h
  ];
  return { initialItems: u, availableItems: v, pageComponents: d };
};
var _d = "AlertDialog", [vx] = gt(_d, [
  yu
]), bt = yu(), Fd = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bt(t);
  return /* @__PURE__ */ f(Xs, { ...r, ...n, modal: !0 });
};
Fd.displayName = _d;
var bx = "AlertDialogTrigger", yx = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(xu, { ...o, ...r, ref: t });
  }
);
yx.displayName = bx;
var wx = "AlertDialogPortal", Ld = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bt(t);
  return /* @__PURE__ */ f(Js, { ...r, ...n });
};
Ld.displayName = wx;
var xx = "AlertDialogOverlay", $d = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(no, { ...o, ...r, ref: t });
  }
);
$d.displayName = xx;
var Bd = "AlertDialogContent", [Cx, Sx] = vx(Bd), zd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, s = bt(n), i = p.useRef(null), a = me(t, i), l = p.useRef(null);
    return /* @__PURE__ */ f(Cx, { scope: n, cancelRef: l, children: /* @__PURE__ */ f(
      ro,
      {
        role: "alertdialog",
        ...s,
        ...o,
        ref: a,
        onOpenAutoFocus: re(o.onOpenAutoFocus, (c) => {
          c.preventDefault(), l.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (c) => c.preventDefault(),
        onInteractOutside: (c) => c.preventDefault(),
        children: r
      }
    ) });
  }
);
zd.displayName = Bd;
var Nx = "AlertDialogTitle", Hd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(oo, { ...o, ...r, ref: t });
  }
);
Hd.displayName = Nx;
var kx = "AlertDialogDescription", Kd = p.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
  return /* @__PURE__ */ f(so, { ...o, ...r, ref: t });
});
Kd.displayName = kx;
var Ix = "AlertDialogAction", Gd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(io, { ...o, ...r, ref: t });
  }
);
Gd.displayName = Ix;
var Wd = "AlertDialogCancel", Vd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = Sx(Wd, n), s = bt(n), i = me(t, o);
    return /* @__PURE__ */ f(io, { ...s, ...r, ref: i });
  }
);
Vd.displayName = Wd;
var Px = Fd, Rx = Ld, jd = $d, Ud = zd, Yd = Gd, qd = Vd, Xd = Hd, Zd = Kd;
const Ex = Px, Ax = Rx, Jd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  jd,
  {
    ref: n,
    className: de(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Jd.displayName = jd.displayName;
const Qd = p.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = vs();
  return /* @__PURE__ */ F(Ax, { container: r || void 0, children: [
    /* @__PURE__ */ f(Jd, {}),
    /* @__PURE__ */ f(
      Ud,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: de(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
Qd.displayName = Ud.displayName;
const ef = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f("div", { className: de("flex flex-col gap-2 text-left", e), ...t });
ef.displayName = "AlertDialogHeader";
const tf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: de("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
tf.displayName = "AlertDialogFooter";
const nf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Xd,
  {
    ref: n,
    className: de("text-base font-semibold text-gray-900", e),
    ...t
  }
));
nf.displayName = Xd.displayName;
const rf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Zd,
  {
    ref: n,
    className: de("text-sm text-gray-600", e),
    ...t
  }
));
rf.displayName = Zd.displayName;
const of = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Yd,
  {
    ref: n,
    className: de(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
of.displayName = Yd.displayName;
const Dx = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  qd,
  {
    ref: n,
    className: de(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
Dx.displayName = qd.displayName;
const Lo = "__edit__", $o = "__print__";
function Fa({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ F(
    Be,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ f(gs, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ f("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ f("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function La({ label: e, value: t }) {
  return /* @__PURE__ */ F(au, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ f("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ F("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ f("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ f(Zh, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function Mx({
  modes: e,
  selectedMode: t,
  onModeChange: n,
  interactive: r,
  onInteractiveChange: o,
  hasReferenceRenderer: s = !1,
  referenceOpacity: i = 50,
  onReferenceOpacityChange: a,
  brandKits: l,
  activeBrandKitId: c,
  onSelectBrandKit: d,
  onAddBrandKit: u
}) {
  const h = e ? Object.keys(e) : [], m = [
    { value: Lo, label: "Edit" },
    ...h.length > 0 ? h.map((y) => ({ value: y, label: e[y].label })) : [{ value: $o, label: "Print" }]
  ], v = r ? Lo : t || h[0] || $o, g = m.find((y) => y.value === v)?.label ?? "Edit", b = (y) => {
    if (y === Lo) {
      o(!0);
      return;
    }
    o(!1), y !== $o && e && e[y] && n?.(y, e[y]);
  }, w = !!l && l.length > 0, C = l?.find((y) => y.id === c)?.name, S = () => {
    const y = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    y && y.trim() && u?.(y.trim());
  };
  return /* @__PURE__ */ F(Vn, { modal: !1, children: [
    /* @__PURE__ */ f(jn, { asChild: !0, children: /* @__PURE__ */ F(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ f(Uh, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ F(gn, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ F(ma, { children: [
        /* @__PURE__ */ f(La, { label: "Print Preview", value: g }),
        /* @__PURE__ */ f(Zo, { className: "min-w-[180px]", children: m.map((y) => /* @__PURE__ */ f(
          Fa,
          {
            checked: v === y.value,
            label: y.label,
            onSelect: () => b(y.value)
          },
          y.value
        )) })
      ] }),
      w && /* @__PURE__ */ F(ma, { children: [
        /* @__PURE__ */ f(La, { label: "Brand Kit", value: C }),
        /* @__PURE__ */ F(Zo, { className: "min-w-[200px]", children: [
          l.map((y) => /* @__PURE__ */ f(
            Fa,
            {
              checked: c === y.id,
              label: y.name,
              keepOpen: !0,
              onSelect: () => d?.(y.id)
            },
            y.id
          )),
          u && /* @__PURE__ */ F(Te, { children: [
            /* @__PURE__ */ f(Vt, {}),
            /* @__PURE__ */ F(
              Be,
              {
                onSelect: (y) => {
                  y.preventDefault(), S();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ f(nt, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ f("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      s && /* @__PURE__ */ F(Te, { children: [
        /* @__PURE__ */ f(Vt, {}),
        /* @__PURE__ */ f(lu, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ F("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ F("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ f("span", { children: "Opacity" }),
            /* @__PURE__ */ F("span", { children: [
              i,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ f(
            wi,
            {
              value: [i],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (y) => {
                const I = y[0] ?? i;
                a?.(I);
              }
            }
          ) }),
          /* @__PURE__ */ F("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ f("span", { children: "Hidden" }),
            /* @__PURE__ */ f("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Ox = { width: 210, height: 297 };
function Tx(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function _x({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ F("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ f("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ f(gs, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ F("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ F("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ f(Ae, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ f(Ae, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
function $a({
  initialItems: e = [],
  availableItems: t = [],
  pageComponents: n = {},
  payload: r,
  pageFormat: o,
  pageOptions: s = [],
  notifyError: i,
  referenceRenderer: a,
  renderOverlay: l,
  renderPage: c,
  menuItems: d,
  gridColsClass: u,
  reorderTitle: h = "Reorder Pages and Groups",
  reorderDescription: m = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: v = Xt,
  onItemsChange: g,
  onStateChange: b,
  resolveNewItem: w,
  pageFilter: C,
  printConfigs: S,
  defaultZoomMode: y = "manual",
  brandKits: I,
  activeBrandKitId: R,
  onSelectBrandKit: N,
  onAddBrandKit: x
}) {
  const P = o ?? Ox, { interactive: E, setInteractive: D, enableDevTools: $ } = bs(), z = ys(), [L, W] = ie(null), [A, T] = ie(null), [k, M] = ie(void 0), [O, H] = ie(0), [G, K] = ie(0), j = L ?? C, V = ee(() => A ? { ...P, ...A } : P, [P, A]), B = xe(Un), U = B?.payload ?? r, [J, Z] = ie(!1), X = V?.preview ?? "single_page", te = ee(
    () => X === "two_pages" ? { ...V, preview: "single_page" } : V,
    [X, V]
  ), ae = ee(() => qs(e), [e]), ge = ee(() => s?.length ? s.map((_) => "getValue" in _ ? _ : B?.setPageOptionValue ? fy(
    _,
    B.payload,
    B.setPageOptionValue
  ) : ((Wt() || $) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [s, B]), [le, Ne] = ie(null), [$e, yt] = ie({ mode: "end" }), [ct, Zt] = ie(null), ze = ue(null), {
    items: wt,
    itemsWithPageNum: Bt,
    availableItemsToAdd: Jt,
    addItem: xn,
    removeItem: Qn,
    reorderItems: po,
    updateItemFields: je,
    addDialogOpen: xt,
    setAddDialogOpen: zt,
    openAddDialog: Qt,
    itemsForReorder: Je,
    handleReorder: er,
    defaultRenderThumbnail: go
  } = lx({
    initialItems: ae,
    availableItems: t,
    pageComponents: n,
    payload: U,
    setup: V,
    stateKey: v,
    onItemsChange: g,
    onStateChange: b,
    resolveNewItem: w,
    notifyError: i
  }), Cn = ee(() => {
    const _ = [];
    for (const Q of Bt) {
      const ne = Fe(Q) ? Q.pages ?? [] : [Q];
      for (const oe of ne) {
        if (!oe?.id) continue;
        const ve = Fe(Q) ? Q : void 0;
        _.push({
          ...oe,
          kind: "page",
          id: oe.id,
          pageNum: oe.pageNum ?? _.length + 1,
          basePageNum: oe.pageNum ?? _.length + 1,
          parentGroup: ve,
          flowKey: Tx(oe, ve)
        });
      }
    }
    return _.sort((Q, ne) => (Q.basePageNum ?? 0) - (ne.basePageNum ?? 0));
  }, [Bt]), en = ee(() => JSON.stringify({
    format: te?.format,
    orientation: te?.orientation,
    width: te?.width,
    height: te?.height,
    bleed: te?.bleed,
    showBleed: te?.showBleed,
    preview: te?.preview,
    flowPages: Cn.filter((_) => _.hasFlow).map((_) => _.flowKey).join("|")
  }), [te, Cn]), Sn = ee(() => mt(wt), [wt]), {
    allVirtualPages: tr,
    renderedVirtualPages: Ct,
    virtualTotalPageCount: Ht,
    registerMeasurement: vo
  } = dx({
    logicalPages: Cn,
    pageFilter: j,
    layoutKey: en
  }), nr = ee(
    () => new Set(Ct.map((_) => _.virtualPageId)),
    [Ct]
  ), ke = ee(
    () => tr.filter((_) => _.hasFlow && _.virtualPageIndex === 0 && (c || !nr.has(_.virtualPageId))),
    [tr, nr, c]
  );
  p.useEffect(() => {
    if (!ct) return;
    const _ = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${ct}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(_);
  }, [ct]);
  const Re = cx({
    items: wt,
    reorderItems: po,
    availableItemsToAdd: Jt,
    setPendingInsertPosition: yt,
    openAddDialog: Qt
  }), Ee = he(async (_) => {
    const Q = await xn(_, $e);
    Q.success && (Zt(Q.insertedId), ze.current && clearTimeout(ze.current), ze.current = setTimeout(() => Zt(null), 1200), yt({ mode: "end" }), _.repeatable && _.integration && Ne(_));
  }, [xn, $e]), Ue = he(() => {
    const _ = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!_.length) return { mode: "end" };
    const Q = window.innerHeight / 2;
    let ne = null, oe = 1 / 0;
    for (const Pe of _) {
      const Qe = Pe.getBoundingClientRect(), ut = Math.abs(Qe.top + Qe.height / 2 - Q);
      ut < oe && (oe = ut, ne = Pe);
    }
    const ve = ne?.getAttribute("data-page-item-id");
    return ve ? { mode: "after", anchorId: ve } : { mode: "end" };
  }, []), Me = he(() => {
    yt(Ue()), Qt();
  }, [Ue, Qt]), Oe = p.useCallback(
    (_, Q, ne) => {
      if (!Q) return;
      const oe = _.applyPatch?.(ne, Q);
      oe && je(Q.id, oe), _.onChange?.(Q.id, ne, {
        item: Q,
        updateItem: (ve) => je(Q.id, ve)
      });
    },
    [je]
  ), He = (_) => /* @__PURE__ */ F("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ f("span", { children: "Page" }),
    /* @__PURE__ */ F("span", { children: [
      _.pageNo,
      " / ",
      _.total
    ] })
  ] }), St = (_, Q, ne) => l ? l({ pageNo: _, total: Ht, pageId: Q, parent: ne }) : He({ pageNo: _, total: Ht }), we = (_, Q = {}) => {
    const ne = _.parentGroup;
    if (c && Q.renderVisible !== !1)
      return c({ page: _, parent: ne });
    const oe = _.componentKey ?? _.id, ve = $ && a ? a(_) : null, Pe = $ && a ? p.isValidElement(ve) ? p.cloneElement(ve, {
      opacity: G
    }) : ve : null, Qe = _.templateId ?? oe, ut = n[oe], rr = B?.getPagePayload ? B.getPagePayload(_) : Fr(U, { id: _.id, templateId: Qe, componentKey: oe }), bo = gu(
      U,
      _,
      ne
    ), or = hx({
      payload: U,
      page: _,
      parentGroup: ne,
      pagePayload: rr
    });
    return /* @__PURE__ */ f(
      B0,
      {
        pageId: _.id,
        templateId: Qe,
        pageNo: _.pageNum,
        measurementPageNo: _.basePageNum,
        component: ut,
        payload: U,
        pagePayload: rr,
        integration: bo,
        page: _,
        parentGroup: ne,
        componentKey: oe,
        setup: te,
        reference: Pe,
        overlay: ({ pageNo: Nn }) => St(Nn, _.id, ne),
        className: _.className,
        dataBinding: or,
        totalPages: Ht,
        measurementTotalPages: Sn,
        flowPageIndex: _.virtualPageIndex,
        flowChunksByFlowId: _.flowChunksByFlowId,
        measureFlow: Q.measureFlow ?? (!!_.hasFlow && _.virtualPageIndex === 0),
        flowMeasurementKey: _.flowKey,
        flowMeasurementVersion: en,
        onFlowMeasurement: _.hasFlow ? vo : void 0,
        renderVisible: Q.renderVisible ?? !0
      },
      `${Q.renderVisible === !1 ? "measure-only" : "page"}-${_.virtualPageId}`
    );
  }, Ke = (_, Q, ne) => {
    const oe = !!Q && Fe(Q), ve = oe && Q.pages[0]?.id === _.id;
    if (_.virtualPageIndex > 0)
      return /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: _.pageNum }),
        /* @__PURE__ */ F("span", { className: "text-xs text-gray-500", children: [
          _.label || _.componentKey || _.id,
          " continued"
        ] })
      ] });
    if (oe && !ve)
      return /* @__PURE__ */ f("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: _.pageNum }),
        _.label && /* @__PURE__ */ f("span", { className: "text-xs text-gray-500", children: _.label }),
        /* @__PURE__ */ f("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const Pe = oe ? Q : _, Qe = oe ? Q.label || Q.id : _.label || `Page ${_.pageNum}`;
    return /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ f("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: _.pageNum }),
      /* @__PURE__ */ f(
        ax,
        {
          name: Qe,
          canRename: !0,
          canMoveUp: !!ne?.onMoveUp,
          canMoveDown: !!ne?.onMoveDown,
          canAddPage: !!ne?.onAddPage,
          canDuplicate: !!ne?.onDuplicate,
          canDelete: Sn > 1,
          onRename: (ut) => je(Pe.id, { label: ut || void 0 }),
          onMoveUp: ne?.onMoveUp,
          onMoveDown: ne?.onMoveDown,
          onAddPage: ne?.onAddPage,
          onDuplicate: ne?.onDuplicate,
          onDelete: () => Qn(Pe.id)
        }
      ),
      /* @__PURE__ */ f("span", { className: "pl-1", children: ge.length > 0 && /* @__PURE__ */ f(
        ix,
        {
          pageOptions: ge,
          targetItem: Pe,
          onChange: Oe,
          title: oe ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, Ge = ee(() => {
    if (X !== "two_pages") return [];
    const _ = Ct;
    if (!_.length) return [];
    const Q = [{ left: void 0, right: _[0], layout: "right" }];
    for (let ne = 1; ne < _.length; ne += 2) {
      const oe = _[ne], ve = _[ne + 1];
      if (ve)
        Q.push({ left: oe, right: ve, layout: "spread" });
      else {
        const Pe = oe.pageNum % 2 === 0;
        Q.push({
          left: Pe ? oe : void 0,
          right: Pe ? void 0 : oe,
          layout: Pe ? "left" : "right"
        });
      }
    }
    return Q;
  }, [X, Ct]), Ye = /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ F(mi, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      Ht,
      " ",
      Ht === 1 ? "Page" : "Pages"
    ] }),
    $ && /* @__PURE__ */ f(
      Mx,
      {
        modes: S,
        selectedMode: k,
        onModeChange: (_, Q) => {
          M(_), W(Q.filter ?? null), T(Q.pageFormat ?? null), H((ne) => ne + 1);
        },
        interactive: E,
        onInteractiveChange: (_) => {
          D(_), _ && T(null);
        },
        hasReferenceRenderer: !!a,
        referenceOpacity: G,
        onReferenceOpacityChange: K,
        brandKits: I,
        activeBrandKitId: R,
        onSelectBrandKit: N,
        onAddBrandKit: x
      }
    ),
    E && /* @__PURE__ */ F(Te, { children: [
      Jt.length > 0 && /* @__PURE__ */ F(
        Ae,
        {
          variant: "ghost",
          size: "sm",
          onClick: Me,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ f(nt, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ F(
        Ae,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => Z(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ f(Qh, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ F(Te, { children: [
    ke.map((_) => we(_, {
      renderVisible: !1,
      measureFlow: !0
    })),
    $ && !E && /* @__PURE__ */ F(
      Ae,
      {
        onClick: () => D(!0),
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ f(Cl, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ f(
      Dy,
      {
        defaultZoom: 80,
        defaultZoomMode: y,
        minZoom: 25,
        maxZoom: 200,
        menuItems: d ?? Ye,
        onAddPage: Me,
        preview: X,
        children: X === "two_pages" ? Ge.map((_, Q) => {
          const ne = _.left ?? _.right, oe = _.right ?? _.left, ve = ne?.parentGroup?.id ?? ne?.id ?? null, Pe = oe?.parentGroup?.id ?? oe?.id ?? null, Qe = _.left?.parentGroup?.id ?? _.left?.id, ut = _.right?.parentGroup?.id ?? _.right?.id, rr = Qe === ct, bo = ut === ct, or = (Nn, sf) => Re(Nn ? Nn.parentGroup ?? Nn : void 0, sf);
          return /* @__PURE__ */ F(Ry, { layout: _.layout, pageItemId: Pe ?? void 0, children: [
            _.left && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": _.left.virtualPageIndex === 0 ? Qe : void 0,
                className: rr ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  Mo,
                  {
                    title: `Sheet ${_.left.pageNum}`,
                    controls: Ke(_.left, _.left.parentGroup, or(_.left, ve)),
                    origin: _.left.pageNum % 2 === 0 ? "right" : "left",
                    children: we(_.left)
                  },
                  _.left.virtualPageId
                )
              }
            ),
            _.right && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": _.right.virtualPageIndex === 0 ? ut : void 0,
                className: bo ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  Mo,
                  {
                    title: `Sheet ${_.right.pageNum}`,
                    controls: Ke(_.right, _.right.parentGroup, or(_.right, Pe)),
                    origin: _.right.pageNum % 2 === 0 ? "right" : "left",
                    children: we(_.right)
                  },
                  _.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Q}`);
        }) : Ct.map((_) => {
          const Q = _.parentGroup ?? _, ne = _.parentGroup?.id ?? _.id, oe = Re(Q, ne), ve = _.parentGroup?.id ?? _.id, Pe = ct === ve;
          return /* @__PURE__ */ f(
            "div",
            {
              "data-page-item-id": _.virtualPageIndex === 0 ? ve : void 0,
              className: Pe ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ f(
                Mo,
                {
                  title: `Sheet ${_.pageNum}`,
                  controls: Ke(_, _.parentGroup, oe),
                  children: we(_)
                }
              )
            },
            _.virtualPageId
          );
        })
      },
      `dev-mode-${O}-${k ?? "default"}`
    ),
    E && !z && /* @__PURE__ */ F(Te, { children: [
      /* @__PURE__ */ f(
        By,
        {
          open: xt,
          onOpenChange: zt,
          availableItems: Jt,
          onSelectItem: Ee,
          pageComponents: n,
          payload: U,
          setup: P,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ f(
        $0,
        {
          open: J,
          onOpenChange: Z,
          pages: Je,
          onReorder: (_) => {
            er(_), Z(!1);
          },
          onRemove: (_) => Qn(_.id),
          pageComponents: n,
          payload: U,
          setup: P,
          renderThumbnail: go,
          title: h,
          description: m,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ f(
      _x,
      {
        label: le ? le.label ?? le.id : null,
        onDone: () => Ne(null),
        onAddAnother: () => {
          const _ = le;
          Ne(null), _ && Ee(_);
        }
      }
    )
  ] });
}
function Fx(e) {
  const { templateConfig: t, ...n } = e;
  return xe(Un) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ f($a, { ...n }) : /* @__PURE__ */ f(
    vu,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ f($a, { ...n })
    }
  );
}
function Lx(e) {
  const n = xe(Un)?.payload ?? e.payload, r = p.useMemo(
    () => gx({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), [o, s] = p.useState({
    open: !1,
    message: ""
  }), i = p.useCallback((c) => {
    s({ open: !0, message: c });
  }, []), a = p.useMemo(
    () => ey(n),
    [n]
  ), l = p.useMemo(() => {
    if (!a?.items)
      return r.initialItems;
    const c = e.templateConfig.groups ?? {}, d = Array.isArray(c) ? c : Object.entries(c).map(([y, I]) => ({ id: y, ...I })), u = new Map(d.map((y) => [y.id, y])), h = e.templateConfig.pages ?? {}, m = (y) => {
      const I = y?.componentKey ?? y?.templateId ?? y?.id;
      return !(h[I] ?? h[y?.templateId] ?? h[y?.id])?.hasFlow || y?.hasFlow ? y : { ...y, hasFlow: !0 };
    }, v = a.items.map((y) => {
      if (y.kind !== "group") return m(y);
      const I = y.templateId ?? y.id, R = u.get(I), N = R?.strictPosition !== void 0 && !y.strictPosition ? { ...y, strictPosition: R.strictPosition } : y, x = {
        ...N,
        pages: (N.pages ?? []).map(m)
      };
      if (!R || typeof R.pageComponentKeys != "function") return x;
      try {
        const P = R.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(P) ? P.length === 0 ? {
          ...x,
          pages: []
        } : {
          ...x,
          pages: P.map((E, D) => {
            const $ = h[E], z = $?.dataKey;
            return {
              id: `${x.id}__${z ?? E}__${D}`,
              componentKey: E,
              templateId: E,
              ...z ? { dataKey: z } : {},
              ...$?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${N.id} must return an array, got:`, typeof P), N);
      } catch (P) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${x.id}:`, P), x;
      }
    }), g = new Set(r.initialItems.map((y) => y.id)), b = v.filter((y) => g.has(y.id)), w = mt(b), C = mt(r.initialItems);
    if (!Array.from(g).some(
      (y) => !b.some((I) => I.id === y)
    ) && w !== C) {
      const y = v.filter((P) => {
        if (P.kind !== "group") return !g.has(P.id);
        const E = P.templateId ?? P.id;
        return P.id !== E && !g.has(P.id);
      });
      if (y.length === 0) return r.initialItems;
      const I = [...r.initialItems, ...y], R = I.filter((P) => P.strictPosition === "start"), N = I.filter((P) => P.strictPosition === "end"), x = I.filter((P) => !P.strictPosition);
      return [...R, ...x, ...N];
    }
    return v;
  }, [a?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ f(
      Fx,
      {
        ...e,
        payload: n,
        initialItems: l,
        availableItems: r.availableItems,
        pageComponents: r.pageComponents,
        notifyError: i
      }
    ),
    /* @__PURE__ */ f(
      Ex,
      {
        open: o.open,
        onOpenChange: (c) => {
          c || s({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ F(Qd, { children: [
          /* @__PURE__ */ F(ef, { children: [
            /* @__PURE__ */ f(nf, { children: "Cannot remove item" }),
            /* @__PURE__ */ f(rf, { children: o.message })
          ] }),
          /* @__PURE__ */ f(tf, { children: /* @__PURE__ */ f(of, { onClick: () => s({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function $x(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Ba(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Ba(t, e);
  }
}
function Ba(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function Bx(e, t, n) {
  const r = {};
  for (const [o, s] of Object.entries(e))
    if (typeof s == "function")
      r[o] = s(t);
    else if (typeof s == "string") {
      const i = s.startsWith("integration.") ? s.slice(12) : s;
      r[o] = $x(i, t);
    }
  return r;
}
function zx(e, t, n) {
  return e(t, n);
}
function Hx(e, t, n) {
  return typeof e == "function" ? zx(e, t, n) : Bx(e, t);
}
function Kx(e, t, n) {
  if (e?.defaults?.imageGalleryPath)
    return e.defaults.imageGalleryPath;
  if (n) {
    if (typeof n == "function") {
      const r = n(t);
      if (r) return r;
    } else if (typeof n == "string")
      return n;
  }
  return t?.media?.images ? "media.images" : t?.listing?.media?.images ? "listing.media.images" : t?.pba_listing?.media?.images ? "pba_listing.media.images" : t?.property?.media?.images ? "property.media.images" : null;
}
function Gx(e, t, n = {}, r, o = null) {
  const s = e?.integration?.path?.();
  if (!s) return null;
  const i = n.type === "assistant", a = n.type === "image" || n.imagePath, l = i ? e.integration.path(t) ?? [s, t].filter(Boolean).join(".") : [s, t].filter(Boolean).join(".");
  if (a) {
    const c = n.imageGalleryPath ?? (o ? `${s}.${o}` : null) ?? e.defaults.imageGalleryPath;
    return {
      path: l,
      imagePath: n.imagePath || "url",
      imageGalleryPath: c,
      type: n.type || "image",
      ratio: n.ratio,
      value: r,
      payload: n.payload ?? e.payload,
      ...n
    };
  }
  return i ? {
    path: l,
    type: "assistant",
    rows: n.rows,
    value: r,
    payload: n.payload ?? e.payload,
    ...n
  } : {
    path: s,
    subPath: t,
    type: n.type || "text",
    rows: n.rows,
    value: r,
    payload: n.payload ?? e.payload,
    ...n
  };
}
function Wx(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: s } = e, i = p.useMemo(() => Hx(r, n, t?.payload), [r, n, t?.payload]), a = p.useMemo(() => Kx(t, n, o), [t, n, o]), l = p.useCallback(
    (d, u = {}, h) => Gx(
      t,
      d,
      u,
      h,
      a
    ),
    [t, a]
  ), c = p.useCallback(
    (d, u = {}, h) => {
      const m = l(d, u, h);
      if (!m) return {};
      const v = fn({ dialog: m }, { page: { paginationType: "static" } });
      if (v.onClick) {
        const g = v.onClick;
        v.onClick = (b) => {
          b.stopPropagation(), g(b);
        };
      }
      return v;
    },
    [l]
  );
  return p.useMemo(
    () => ({
      data: i,
      dialog: l,
      dialogProps: c,
      galleryPath: a,
      instanceId: t?.integration?.instanceId ?? null,
      integration: n
    }),
    [i, l, c, a, t, n]
  );
}
const qx = {
  Pagination: zo,
  Sheet: Ho,
  FlowArea: Ya,
  FlowPage: qa,
  Flow: Ja,
  FlowColumns: Nf,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: ss,
  planFlowColumnChunks: Va,
  // Optional cost counters for the two planners above. Diagnostic only.
  createFlowPlanMetrics: hf,
  // The DOM reads FlowArea measures with. Hosts that run their own Flow canvas
  // must use these rather than re-deriving them, or their page boundaries can
  // drift from the delivered document by a rounding step.
  flowMeasure: vf,
  FlowDocument: Lf,
  markdownToFlowItems: Wf,
  htmlToFlowItems: el
}, Xx = {
  TemplateDataProvider: vu,
  PageEditor: Lx,
  InteractiveModeProvider: Rm,
  useInteractive: bs,
  useIntegrationAdapter: Wx
};
export {
  kf as Editable,
  Xx as EditorShell,
  Yx as ImageBlock,
  qx as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
