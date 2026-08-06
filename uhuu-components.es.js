(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 0);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-200:oklch(92.2% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-600:oklch(43.9% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-900:oklch(20.5% 0 0);--color-neutral-950:oklch(14.5% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:100%;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as f, jsxs as F, Fragment as Te } from "react/jsx-runtime";
import * as p from "react";
import be, { createContext as Mt, useEffect as le, forwardRef as Gr, useContext as xe, createElement as _o, useState as ie, useLayoutEffect as Oa, useMemo as J, useRef as de, useCallback as he, memo as tf, useReducer as nf, cloneElement as rf } from "react";
import * as ts from "react-dom";
import { flushSync as of, unstable_batchedUpdates as sr, createPortal as sf } from "react-dom";
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
class mi {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
class Ta {
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
const Ot = Mt(null), af = ({ config: e, children: t }) => /* @__PURE__ */ f(Ot.Provider, { value: e, children: t }), Fo = ({ children: e, className: t, setup: n }) => {
  const r = Ta.pageParams("static", n);
  le(() => {
    r?.page?.compatibility && Nr.handle();
    const s = mi.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      s && mi.removePageStyles(s);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(af, { config: r, children: /* @__PURE__ */ f("div", { className: o, children: e }) });
}, Lo = Gr(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: s,
  "data-page-key": i
}, a) => {
  const l = xe(Ot), c = s ?? l?.page?.showBleed ?? !1;
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
function Gt() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function It(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function In(e) {
  return typeof e == "string" && e ? e : null;
}
function _a(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function Fa({
  itemIndex: e = -1,
  fragmentIndexes: t = [],
  groupKeys: n = [],
  pageIndex: r = 0,
  pageCount: o = 1,
  itemCount: s = 0,
  previousSourceIndex: i
} = {}) {
  const a = t.indexOf(e), l = In(n[e]), c = a > 0 ? t[a - 1] : null, d = c === null ? null : In(n[c]), u = a > 0 ? t[a - 1] : i ?? (e > 0 ? e - 1 : null), h = u !== null ? In(n[u]) : null, m = !!(l && h !== l), v = !!(l && d !== l);
  return {
    pageIndex: r,
    pageCount: o,
    itemIndex: e,
    fragmentIndex: a,
    groupKey: l ?? void 0,
    isFirst: e === 0,
    isLast: s > 0 && e === s - 1,
    isFirstInFragment: a === 0,
    isLastInFragment: a >= 0 && a === t.length - 1,
    isFirstInGroup: m,
    isFirstInGroupOnPage: v,
    // `isContinuation` refers to the virtual Flow page. `isGroupContinuation`
    // is the narrower signal for a repeated group header.
    isContinuation: r > 0,
    isGroupContinuation: !!(v && !m && h === l)
  };
}
function ns({
  heights: e = [],
  keys: t = [],
  metas: n = [],
  availableHeight: r = 0,
  headerGroupKeys: o = [],
  headerGroupHeights: s = {},
  headerGroupRepeats: i = {},
  previousHeaderGroupKey: a,
  onUnplaceableItem: l
} = {}) {
  const c = It(r) || Number.POSITIVE_INFINITY, d = [{ indexes: [], keys: [] }];
  let u = 0;
  const h = () => d[d.length - 1], m = () => {
    const C = h().indexes;
    return C.length ? C[C.length - 1] : null;
  }, v = () => h().indexes.length > 0 || !!h().unplaceable, g = (C) => In(o[C]), y = (C) => It(s[C] ?? 0), w = (C) => i[C] !== !1, N = (C, E) => {
    const T = g(C);
    return T ? E == null ? (C > 0 ? g(C - 1) : In(a)) !== T || w(T) : g(E) !== T : !1;
  }, S = (C, E) => {
    const T = g(C);
    return It(e[C]) + (T && N(C, E) ? y(T) : 0);
  }, b = (C) => {
    const E = n[C] ?? {};
    return E.avoidBreakInside && E.groupKey ? E.groupKey : null;
  }, R = (C, E, T) => {
    let $ = 0, _ = T;
    for (let z = C; z < e.length && b(z) === E; z += 1)
      $ += S(z, _), _ = z;
    return $;
  }, I = (C, E) => {
    let T = 0, $ = C;
    for (let _ = 1; _ <= E; _ += 1) {
      const z = C + _;
      if (z >= e.length) break;
      T += S(z, $), $ = z;
    }
    return T;
  }, k = () => {
    v() && (d.push({ indexes: [], keys: [] }), u = 0);
  }, x = (C, E, T) => {
    const $ = t[C] ?? String(C), _ = g(C) ?? void 0, z = _ && N(C, null) ? y(_) : 0, A = {
      index: C,
      key: $,
      height: E,
      headerHeight: z,
      requiredHeight: T,
      availableHeight: c,
      groupKey: _,
      reason: z > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    h().unplaceable = A, l?.(A), d.push({ indexes: [], keys: [] }), u = 0;
  };
  for (let C = 0; C < e.length; C += 1) {
    const E = n[C] ?? {}, T = It(e[C]), $ = t[C] ?? String(C);
    E.breakBefore && k();
    const _ = b(C), z = C > 0 ? b(C - 1) : null;
    _ && _ !== z && v() && u + R(C, _, m()) > c && k();
    let A = m(), D = S(C, A);
    if (v() && D > c - u && (k(), A = null, D = S(C, A)), D > c) {
      x(C, T, D);
      continue;
    }
    const B = D + I(
      C,
      _a(E.keepWithNext)
    );
    if (v() && u + B > c && (k(), A = null, D = S(C, A), D > c)) {
      x(C, T, D);
      continue;
    }
    h().indexes.push(C), h().keys.push($), u += D, E.breakAfter && C < e.length - 1 && k();
  }
  const P = d.filter((C) => C.indexes.length > 0 || !!C.unplaceable);
  return P.length ? P.map((C) => {
    if (!C.indexes.length) return C;
    const E = [];
    for (let T = 0; T < C.indexes.length; T += 1) {
      const $ = C.indexes[T], _ = g($), z = T > 0 ? C.indexes[T - 1] : null;
      if (!_ || !N($, z)) continue;
      const A = $ > 0 ? g($ - 1) : null;
      E.push({
        groupKey: _,
        itemIndex: $,
        isContinuation: A === _
      });
    }
    return E.length ? { ...C, groupHeaders: E } : C;
  }) : [{ indexes: [], keys: [] }];
}
function lf(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (s, i) => s + It(t[i]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (s, i) => s + It(n[i.groupKey]),
    0
  );
  return r + o;
}
function cf(e, t, n, r) {
  return {
    heights: t.map((o) => e.heights?.[o] ?? 0),
    keys: t.map((o) => e.keys?.[o] ?? String(o)),
    metas: t.map((o) => e.metas?.[o] ?? {}),
    headerGroupKeys: t.map((o) => e.headerGroupKeys?.[o]),
    headerGroupHeights: e.headerGroupHeights ?? {},
    headerGroupRepeats: e.headerGroupRepeats ?? {},
    previousHeaderGroupKey: r === void 0 ? void 0 : e.headerGroupKeys?.[r],
    availableHeight: n
  };
}
function uf(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function df(e, t, n, r, o) {
  const s = (a) => t[a], i = {
    indexes: (e.indexes ?? []).map(s).filter(Number.isInteger),
    keys: [...e.keys ?? []],
    ...o !== void 0 ? { previousSourceIndex: o } : {}
  };
  return e.groupHeaders?.length && (i.groupHeaders = e.groupHeaders.map((a) => ({
    ...a,
    itemIndex: s(a.itemIndex),
    isContinuation: a.isContinuation || a.itemIndex === 0 && o !== void 0 && r?.[o] === a.groupKey
  }))), e.unplaceable && (i.unplaceable = {
    ...e.unplaceable,
    index: s(e.unplaceable.index),
    ...n ? { columnId: n } : {}
  }), i;
}
function ir(e, t, n, r, o, s) {
  if (!t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const i = uf(e, r, o), l = ns(
    cf(i, t, n, s)
  )[0] ?? { indexes: [], keys: [] }, c = df(
    l,
    t,
    o,
    i.headerGroupKeys,
    s
  ), d = c.unplaceable ? 1 : c.indexes.length;
  return {
    chunk: c,
    consumed: d,
    height: lf(
      c,
      e.heights ?? [],
      i.headerGroupHeights ?? {}
    )
  };
}
function La({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function pi(e, t, n, r, o) {
  const s = It(n.chunk.unplaceable?.requiredHeight);
  if (s > 0 && s <= o) return !0;
  const i = t[0];
  if (i === void 0) return !1;
  const a = e.metas?.[i] ?? {};
  return (_a(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey)) && r.consumed > n.consumed;
}
function St(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function $a({
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
  onUnplaceableItem: d
} = {}) {
  La({ nodes: e, itemCount: t.length });
  const u = It(o) || Number.POSITIVE_INFINITY, h = {
    heights: t,
    keys: n,
    metas: r,
    headerGroupKeys: s,
    headerGroupHeights: i,
    headerGroupRepeats: a,
    columnHeaderGroupHeights: l,
    columnHeaderGroupRepeats: c
  }, m = [{ indexes: [], keys: [], layout: [] }];
  let v = 0;
  const g = () => m[m.length - 1], y = () => {
    St(g()) && (m.push({ indexes: [], keys: [], layout: [] }), v = 0);
  }, w = (S) => {
    g().indexes.push(...S.indexes ?? []), g().keys.push(...S.keys ?? []), !g().unplaceable && S.unplaceable && (g().unplaceable = S.unplaceable), S.unplaceable && d?.(S.unplaceable);
  };
  for (let S = 0; S < e.length; S += 1) {
    const b = e[S];
    if (!b || b.kind !== "item" && b.kind !== "columns") continue;
    if (b.kind === "item") {
      const I = [];
      let k = S;
      for (; k < e.length && e[k]?.kind === "item"; ) {
        const P = Number(e[k].index);
        Number.isInteger(P) && P >= 0 && P < t.length && I.push(P), k += 1;
      }
      S = k - 1;
      let x = 0;
      for (; x < I.length; ) {
        u - v <= 0 && St(g()) && y();
        const P = I[x];
        r[P]?.breakBefore && St(g()) && y();
        let C = ir(
          h,
          I.slice(x),
          u - v,
          void 0,
          void 0,
          x > 0 ? I[x - 1] : void 0
        );
        if (St(g())) {
          const $ = ir(
            h,
            I.slice(x),
            u,
            void 0,
            void 0,
            x > 0 ? I[x - 1] : void 0
          );
          pi(
            h,
            I.slice(x),
            C,
            $,
            u
          ) && (y(), C = $);
        }
        g().layout.push({ kind: "items", chunk: C.chunk }), w(C.chunk), v += C.height, x += C.consumed, C.consumed === 0 && (x += 1);
        const E = C.chunk.indexes?.at(-1) ?? C.chunk.unplaceable?.index;
        (x < I.length || C.chunk.unplaceable || E !== void 0 && r[E]?.breakAfter) && y();
      }
      continue;
    }
    const R = (b.columns ?? []).map((I) => ({
      id: String(I?.id ?? ""),
      indexes: (I?.indexes ?? []).filter(
        (k) => Number.isInteger(k) && k >= 0 && k < t.length
      ),
      cursor: 0
    })).filter((I) => I.id && I.indexes.length);
    if (R.length)
      for (; R.some((I) => I.cursor < I.indexes.length); ) {
        u - v <= 0 && St(g()) && y(), R.some((A) => {
          const D = A.indexes[A.cursor];
          return D !== void 0 && r[D]?.breakBefore;
        }) && St(g()) && y();
        let k = u - v, x = R.map((A) => ir(
          h,
          A.indexes.slice(A.cursor),
          k,
          b.id,
          A.id,
          A.cursor > 0 ? A.indexes[A.cursor - 1] : void 0
        )), P;
        if (St(g()) && R.some((A, D) => (P ??= R.map((B) => ir(
          h,
          B.indexes.slice(B.cursor),
          u,
          b.id,
          B.id,
          B.cursor > 0 ? B.indexes[B.cursor - 1] : void 0
        )), pi(
          h,
          A.indexes.slice(A.cursor),
          x[D],
          P[D],
          u
        ))) && (y(), k = u, x = P), !x.some((A) => A.consumed > 0)) {
          const A = R.find((D) => D.cursor < D.indexes.length);
          throw new TypeError(
            `[uhuu-components] Static.FlowColumns made no pagination progress${A ? ` in column "${A.id}"` : ""}.`
          );
        }
        const E = R.map((A, D) => ({
          id: A.id,
          chunk: x[D].chunk
        }));
        g().layout.push({
          kind: "columns",
          id: String(b.id ?? "columns"),
          columns: E
        });
        for (const { chunk: A } of E) w(A);
        const T = Math.max(0, ...x.map((A) => A.height));
        v += T, R.forEach((A, D) => {
          A.cursor += x[D].consumed;
        });
        const $ = R.some((A) => A.cursor < A.indexes.length), _ = x.some((A) => {
          const D = A.chunk.indexes?.at(-1) ?? A.chunk.unplaceable?.index;
          return D !== void 0 && r[D]?.breakAfter;
        }), z = x.some((A) => !!A.chunk.unplaceable);
        ($ || _ || z) && y();
      }
  }
  const N = m.filter(St);
  return N.length ? N : [{ indexes: [], keys: [], layout: [] }];
}
const ff = ns, hf = $a, Dn = p.createContext(null), mf = typeof window > "u" ? p.useEffect : p.useLayoutEffect, kr = /* @__PURE__ */ new Set();
function Rr(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Ba(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function pf(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function za(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function Ha(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
function Ka(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function Mn(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, s = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + s;
}
function Ga(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: pf(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function rs(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function $o(e) {
  const t = {};
  for (const n of e) {
    const r = rs(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function Bo(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, Mn(r, t)));
  }
  return n;
}
function et(e) {
  return Number.parseFloat(e || "0") || 0;
}
function gf(e, t) {
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
      ).reduce((h, m) => h + Mn(m, t), 0);
      i.push(u);
    }
    const a = Math.max(0, ...i);
    if (Mn(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function vf(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return bf(e, t, n);
  const o = Array.from(t.querySelectorAll('[data-uhuu-flow-item="true"]'));
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const s = e.getBoundingClientRect(), i = Ka(e), a = s.height ? s.height / i : e.clientHeight, l = Number.isFinite(a) && a > 0, c = o.map((S) => Mn(S, i)), d = o.map(Ga), u = o.map((S, b) => S.dataset.uhuuFlowKey || String(b)), h = o.map(rs), m = $o(o), v = Bo(t, i), g = [], y = l ? a : c.reduce((S, b) => S + b, 0) + Object.values(v).reduce((S, b) => S + b, 0);
  l || n.onZeroHeight?.();
  const w = ff({
    heights: c,
    keys: u,
    metas: d,
    availableHeight: y,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: m,
    onUnplaceableItem: (S) => {
      g.push(S), n.onUnplaceableItem?.(S);
    }
  }), N = Ha(JSON.stringify({
    version: 2,
    flowId: r,
    availableHeight: Math.round(y * 100) / 100,
    heights: c.map((S) => Math.round(S * 100) / 100),
    keys: u,
    metas: d,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: m,
    unplaceableItems: g
  }));
  return { flowId: r, chunks: w, signature: N, unplaceableItems: g };
}
function bf(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = Array.from(
    t.querySelectorAll('[data-uhuu-flow-item="true"]')
  );
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const s = e.getBoundingClientRect(), i = Ka(e);
  gf(t, i);
  const a = s.height ? s.height / i : e.clientHeight, l = Number.isFinite(a) && a > 0, c = Math.max(
    -1,
    ...o.map((k) => Number.parseInt(k.dataset.uhuuFlowIndex ?? "-1", 10))
  ), d = Array.from({ length: c + 1 }, () => 0), u = Array.from({ length: c + 1 }, (k, x) => String(x)), h = Array.from({ length: c + 1 }, () => ({})), m = Array.from(
    { length: c + 1 },
    () => {
    }
  );
  for (const k of o) {
    const x = Number.parseInt(k.dataset.uhuuFlowIndex ?? "-1", 10);
    !Number.isInteger(x) || x < 0 || (d[x] = Mn(k, i), u[x] = k.dataset.uhuuFlowKey || String(x), h[x] = Ga(k), m[x] = rs(k));
  }
  const v = Array.from(t.children).flatMap((k) => {
    if (!(k instanceof HTMLElement)) return [];
    if (k.dataset.uhuuFlowLayoutNode === "item") {
      const P = k.matches('[data-uhuu-flow-item="true"]') ? k : k.querySelector('[data-uhuu-flow-item="true"]'), C = Number.parseInt(P?.dataset.uhuuFlowIndex ?? "-1", 10);
      return Number.isInteger(C) && C >= 0 ? [{ kind: "item", index: C }] : [];
    }
    if (k.dataset.uhuuFlowLayoutNode !== "columns") return [];
    const x = Array.from(
      k.querySelectorAll(":scope > [data-uhuu-flow-column]")
    ).flatMap((P) => {
      const C = P.dataset.uhuuFlowColumn;
      if (!C) return [];
      const E = Array.from(
        P.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map((T) => Number.parseInt(T.dataset.uhuuFlowIndex ?? "-1", 10)).filter((T) => Number.isInteger(T) && T >= 0);
      return [{ id: C, indexes: E }];
    });
    return x.length ? [{ kind: "columns", id: k.dataset.uhuuFlowLayoutId || "columns", columns: x }] : [];
  }), g = $o(o), y = Bo(t, i), w = {}, N = {};
  for (const k of Array.from(
    t.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const x = k.dataset.uhuuFlowLayoutId;
    if (x) {
      w[x] = {}, N[x] = {};
      for (const P of Array.from(
        k.querySelectorAll(":scope > [data-uhuu-flow-column]")
      )) {
        const C = P.dataset.uhuuFlowColumn;
        if (!C) continue;
        const E = Array.from(
          P.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        w[x][C] = Bo(P, i), N[x][C] = $o(E);
      }
    }
  }
  const S = [], b = l ? a : d.reduce((k, x) => k + x, 0) + Object.values(y).reduce((k, x) => k + x, 0);
  l || n.onZeroHeight?.();
  const R = hf({
    nodes: v,
    heights: d,
    keys: u,
    metas: h,
    availableHeight: b,
    headerGroupKeys: m,
    headerGroupHeights: y,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: N,
    onUnplaceableItem: (k) => {
      S.push(k), n.onUnplaceableItem?.(k);
    }
  }), I = Ha(JSON.stringify({
    version: 3,
    flowId: r,
    availableHeight: Math.round(b * 100) / 100,
    nodes: v,
    heights: d.map((k) => Math.round(k * 100) / 100),
    keys: u,
    metas: h,
    headerGroupKeys: m,
    headerGroupHeights: y,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: N,
    unplaceableItems: S
  }));
  return { flowId: r, chunks: R, signature: I, unplaceableItems: S };
}
function Wa({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = p.useContext(Dn), s = p.useRef(null), i = p.useRef(""), a = p.useRef(!1), l = p.useRef(!1), c = p.useRef(/* @__PURE__ */ new Set());
  return mf(() => {
    if (o?.mode !== "measure" || !o.registerMeasurement || !s.current)
      return;
    const d = s.current;
    let u = 0, h = null;
    i.current = "";
    const m = () => {
      window.cancelAnimationFrame(u), u = window.requestAnimationFrame(y);
    }, v = /* @__PURE__ */ new Set(), g = () => {
      if (h) {
        for (const N of Array.from(v))
          d.contains(N) || (h.unobserve(N), v.delete(N));
        d.querySelectorAll('[data-uhuu-flow-item="true"]').forEach((N) => {
          v.has(N) || (v.add(N), h?.observe(N));
        });
      }
    }, y = () => {
      g();
      const N = d.querySelectorAll('[data-uhuu-flow="true"]');
      N.length > 1 && !a.current && Gt() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const S = N[0];
      if (!S) return;
      const b = vf(d, S, {
        onZeroHeight: () => {
          l.current || !Gt() || (l.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (R) => {
          c.current.has(R.key) || !Gt() || (c.current.add(R.key), console.warn(
            `[uhuu-components] Static.Flow item "${R.key}" cannot fit in its FlowArea (${Math.round(R.requiredHeight)}px required > ${Math.round(R.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`
          ));
        }
      });
      !b || b.signature === i.current || (i.current = b.signature, r?.(b), o.registerMeasurement?.(b));
    };
    h = new ResizeObserver(m), h.observe(d), g(), m();
    const w = new MutationObserver(() => {
      g(), m();
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
      window.cancelAnimationFrame(u), h?.disconnect(), w.disconnect();
    };
  }, [o, r]), /* @__PURE__ */ f("div", { ref: s, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function ja({
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
          Wa,
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
function Va(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function Ua({
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
  const m = p.useContext(Dn), v = m?.chunksByFlowId?.[e], g = m?.mode === "visible" && v ? v[m.pageIndex] : void 0, w = (m?.mode === "visible" && v ? g?.indexes ?? [] : m?.mode === "visible" && m.pageIndex > 0 ? [] : t.map((R, I) => I)).filter((R) => Number.isInteger(R) && R >= 0 && R < t.length), N = t.map((R, I) => Va(a?.(R, I))), S = m?.mode === "visible" ? m.pageIndex : 0, b = m?.mode === "visible" && v ? v.length : 1;
  return p.useEffect(() => {
    if (!Gt() || !s || !Object.keys(s).length || !t.length)
      return;
    const R = `${e}:${Object.keys(s).join("|")}`;
    kr.has(R) || t.some((k, x) => !!(i?.(k, x) ?? Rr(k))) || (kr.add(R), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, i]), /* @__PURE__ */ F(
    "div",
    {
      className: c,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        g?.unplaceable && (h?.(g.unplaceable, { flowId: e, pageIndex: S, pageCount: b }) ?? /* @__PURE__ */ F(
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
        w.map((R) => {
          const I = t[R];
          if (I === void 0) return null;
          const k = n(I, R), x = N[R], C = {
            ...Fa({
              itemIndex: R,
              fragmentIndexes: w,
              groupKeys: N.map((D) => D?.key),
              pageIndex: S,
              pageCount: b,
              itemCount: t.length
            }),
            flowId: e,
            itemKey: k,
            item: I
          }, E = i?.(I, R) ?? Rr(I), T = Ba(
            E ? s?.[E] : void 0,
            o?.(I, R)
          ), $ = typeof d == "function" ? d(I, R) : d, _ = g?.groupHeaders?.find((D) => D.itemIndex === R && D.groupKey === x?.key), z = !!(x && l && (_ || !g?.groupHeaders && C.isFirstInGroupOnPage && (C.isFirstInGroup || x.repeatHeader !== !1))), A = typeof u == "function" ? x ? u(x, C) : void 0 : u;
          return /* @__PURE__ */ F(p.Fragment, { children: [
            z && x && /* @__PURE__ */ f(
              "div",
              {
                className: A,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": x.key,
                children: l?.(x, C)
              }
            ),
            /* @__PURE__ */ f(
              "div",
              {
                className: $,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(k),
                "data-uhuu-flow-index": R,
                "data-uhuu-flow-break-before": T.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": T.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": za(T.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": T.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": T.groupKey,
                "data-uhuu-flow-header-group-key": x?.key,
                "data-uhuu-flow-header-repeat": x ? x.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(I, R, C)
              }
            )
          ] }, k);
        })
      ]
    }
  );
}
function yf({
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
  getColumnItemProps: y
}) {
  La({ nodes: n, itemCount: t.length });
  const w = p.useContext(Dn), N = w?.chunksByFlowId?.[e], S = w?.mode === "visible" && N ? N[w.pageIndex] : void 0, b = w?.mode !== "visible", R = w?.mode === "visible" ? w.pageIndex : 0, I = w?.mode === "visible" && N ? N.length : 1, k = t.map((_, z) => Va(l?.(_, z))), x = k.map((_) => _?.key), P = {
    flowId: e
  };
  p.useEffect(() => {
    if (!Gt() || !i || !Object.keys(i).length || !t.length)
      return;
    const _ = `${e}:columns:${Object.keys(i).join("|")}`;
    kr.has(_) || t.some((A, D) => !!(a?.(A, D) ?? Rr(A))) || (kr.add(_), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, a]);
  const C = (_) => _ ? m?.(_, { flowId: e, pageIndex: R, pageCount: I }) ?? /* @__PURE__ */ F(
    "div",
    {
      role: "alert",
      className: "uhuu-flow-unplaceable",
      "data-uhuu-flow-unplaceable": "true",
      "data-uhuu-flow-unplaceable-key": _.key,
      "data-uhuu-flow-column-id": _.columnId,
      children: [
        "Unable to fit “",
        _.key,
        "” on a page. Reduce its height or split it."
      ]
    }
  ) : null, E = (_, z, A, D = !1, B) => {
    const L = _.filter((M) => Number.isInteger(M) && M >= 0 && M < t.length);
    return L.map((M) => {
      const K = t[M];
      if (K === void 0) return null;
      const V = r(K, M), U = k[M], ne = B?.indexOf(M) ?? -1, H = {
        ...Fa({
          itemIndex: M,
          fragmentIndexes: L,
          groupKeys: x,
          pageIndex: R,
          pageCount: I,
          itemCount: t.length,
          previousSourceIndex: z?.previousSourceIndex ?? (ne > 0 ? B?.[ne - 1] : void 0)
        }),
        flowId: e,
        itemKey: V,
        item: K
      }, G = a?.(K, M) ?? Rr(K), X = Ba(
        G ? i?.[G] : void 0,
        s?.(K, M)
      ), q = typeof u == "function" ? u(K, M) : u, Y = A?.(M), te = z?.groupHeaders?.find((ae) => ae.itemIndex === M && ae.groupKey === U?.key), fe = !!(U && c && (te || !z?.groupHeaders && H.isFirstInGroupOnPage && (H.isFirstInGroup || U.repeatHeader !== !1))), ge = typeof h == "function" ? U ? h(U, H) : void 0 : h;
      return /* @__PURE__ */ F(p.Fragment, { children: [
        fe && U && /* @__PURE__ */ f(
          "div",
          {
            className: ge,
            style: { display: "flow-root" },
            "data-uhuu-flow-group-header": "true",
            "data-uhuu-flow-header-group-key": U.key,
            children: c?.(U, H)
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            className: [q, Y?.className].filter(Boolean).join(" "),
            style: { display: "flow-root", ...Y?.style },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-layout-node": D ? "item" : void 0,
            "data-uhuu-flow-key": String(V),
            "data-uhuu-flow-index": M,
            "data-uhuu-flow-break-before": X.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": X.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": za(X.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": X.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": X.groupKey,
            "data-uhuu-flow-header-group-key": U?.key,
            "data-uhuu-flow-header-repeat": U ? U.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(K, M, H)
          }
        )
      ] }, V);
    });
  }, T = new Map(
    n.filter((_) => _.kind === "columns").map((_) => [_.id, _])
  ), $ = b ? n : S?.layout ?? [];
  return /* @__PURE__ */ f(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: $.map((_, z) => {
        if (_.kind === "item")
          return /* @__PURE__ */ f(p.Fragment, { children: E([_.index], void 0, void 0, !0) }, `item:${_.index}:${z}`);
        if (_.kind === "items")
          return /* @__PURE__ */ F(p.Fragment, { children: [
            C(_.chunk.unplaceable),
            E(_.chunk.indexes, _.chunk, void 0, !0)
          ] }, `items:${z}`);
        const A = b ? _ : T.get(_.id);
        if (!A) return null;
        const D = new Map(A.columns.map((M) => [M.id, M])), B = b ? A.columns.map((M) => ({ id: M.id })) : _.columns, L = v?.(A, P);
        return /* @__PURE__ */ f(
          "div",
          {
            className: L?.className,
            style: {
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              ...L?.style
            },
            "data-uhuu-flow-layout-node": "columns",
            "data-uhuu-flow-layout-id": A.id,
            children: B.map((M) => {
              const K = D.get(M.id);
              if (!K) return null;
              const V = g?.(A, K, P), U = M.chunk?.indexes ?? K.indexes;
              return /* @__PURE__ */ F(
                "div",
                {
                  className: V?.className,
                  style: {
                    minWidth: 0,
                    flex: "1 1 0%",
                    display: "flex",
                    flexDirection: "column",
                    ...V?.style
                  },
                  "data-uhuu-flow-column": K.id,
                  children: [
                    C(M.chunk?.unplaceable),
                    E(
                      U,
                      M.chunk,
                      (ne) => y?.(
                        A,
                        K,
                        ne,
                        P
                      ),
                      !1,
                      K.indexes
                    )
                  ]
                },
                K.id
              );
            })
          },
          `columns:${A.id}:${z}`
        );
      })
    }
  );
}
const dn = (e, t) => {
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
}, wf = (e) => {
  const t = xe(Ot);
  return /* @__PURE__ */ f(
    "div",
    {
      className: e.className,
      ...dn(e, t),
      children: e.children
    }
  );
};
function xf(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Ya(e, t, n, r = "") {
  const o = xf(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Cf = /\s*(page-break-before|break-before)\s*/i, Sf = 1, Nf = 3, kf = 8;
function Rf(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function If(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Pf(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === kf) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Nf) {
      const s = (o.textContent ?? "").trim();
      s && r.push({ kind: "text", html: Rf(s), text: s });
      return;
    }
    if (o.nodeType === Sf) {
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
function Ef(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const s of e) {
    if (!s || s.kind === "break") {
      o = !0;
      continue;
    }
    const i = s.type ?? "text", a = s.html ?? "";
    a && (r.push({
      id: Ya(i, s.text ?? a, r.length, n),
      type: i,
      html: a,
      breakBefore: o || !!s.breakBefore
    }), o = !!s.breakAfter);
  }
  return r;
}
function qa(e = "", t = {}) {
  const n = t.breakComment ?? Cf, o = (t.parseHtml ?? ((s) => Pf(s, n)))(e);
  return Ef(Array.isArray(o) ? o : [], t);
}
const Af = {
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
let gi = !1;
function Df(e) {
  return p.useMemo(() => e === !1 ? (Gt() && !gi && (gi = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : If, [e]);
}
function Mf({
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
  parseHtml: y
}) {
  const w = p.useMemo(
    () => qa(e, { idPrefix: l, parseHtml: y }),
    [e, l, y]
  ), N = p.useMemo(
    () => ({ ...Af, ...u ?? {} }),
    [u]
  ), S = Df(v), b = p.useCallback(
    (k, x) => ({
      breakBefore: k.breakBefore,
      ...h?.(k, x) ?? {}
    }),
    [h]
  ), R = p.useCallback(
    (k, x) => m ? m(k, x) : /* @__PURE__ */ f(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: S(k.html) }
      }
    ),
    [m, S]
  ), I = /* @__PURE__ */ f(
    Ua,
    {
      id: a,
      items: w,
      getKey: (k) => k.id,
      className: c,
      itemClassName: d,
      metaDefaults: N,
      getItemMeta: b,
      renderItem: R
    }
  );
  return /* @__PURE__ */ f(
    ja,
    {
      className: r,
      style: o,
      flowAreaClassName: s,
      flowAreaStyle: i,
      header: t,
      footer: n,
      children: g ? /* @__PURE__ */ f(wf, { dialog: g, children: I }) : I
    }
  );
}
const Of = /<!--\s*(page-break-before|break-before)\s*-->/i, Tf = /^\s*\[[^\]]+\]:\s+\S+/, vi = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function ar(e) {
  return e.trim() === "";
}
function bi(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function yi(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function wi(e) {
  return /^(```|~~~)/.test(e.trim());
}
function xi(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function Ci(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Si(e) {
  return Of.test(e.trim());
}
function _f(e) {
  return Tf.test(e);
}
function Ff(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const s of n) {
    const i = o ? `${o} ${s}` : s;
    o && i.length > t ? (r.push(o), o = s) : o = i;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Lf(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function $f(e, t, n, r, o, s) {
  const i = n.join(`
`).trim();
  if (!i) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, l = t === "paragraph" ? Ff(i, a) : [i];
  for (let c = 0; c < l.length; c += 1) {
    const d = l[c], u = Lf(d, s);
    e.push({
      id: Ya(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: c === 0 ? r : !1
    });
  }
  return !0;
}
function Bf(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], s = [];
  for (const c of r)
    _f(c) ? o.push(c) : s.push(c);
  const i = [];
  let a = 0, l = !1;
  for (; a < s.length; ) {
    if (ar(s[a])) {
      a += 1;
      continue;
    }
    if (Si(s[a])) {
      l = !0, a += 1;
      continue;
    }
    const c = a;
    let d = "paragraph";
    if (wi(s[a])) {
      d = "code";
      const u = s[a].trim().slice(0, 3);
      for (a += 1; a < s.length && !s[a].trim().startsWith(u); )
        a += 1;
      a < s.length && (a += 1);
    } else if (bi(s[a]))
      d = "heading", a += 1;
    else if (xi(s[a]))
      d = "rule", a += 1;
    else if (vi.test(s[a]))
      d = "image", a += 1;
    else if (Ci(s, a))
      for (d = "table", a += 2; a < s.length && s[a].includes("|") && !ar(s[a]); )
        a += 1;
    else if (yi(s[a]))
      for (d = "list", a += 1; a < s.length && !ar(s[a]); )
        a += 1;
    else if (s[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < s.length && s[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < s.length && !ar(s[a]) && !bi(s[a]) && !wi(s[a]) && !xi(s[a]) && !vi.test(s[a]) && !Ci(s, a) && !yi(s[a]) && !s[a].trim().startsWith(">") && !Si(s[a]); )
        a += 1;
    $f(i, d, s.slice(c, a), l, t, o) && (l = !1);
  }
  return i;
}
function Xa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Xa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Za() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Xa(e)) && (r && (r += " "), r += t);
  return r;
}
const zf = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Hf = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ja = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Ir = "-", Ni = [], Kf = "arbitrary..", Gf = (e) => {
  const t = jf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Wf(i);
      const a = i.split(Ir), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Qa(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = r[i], c = n[i];
        return l ? c ? zf(c, l) : l : c || Ni;
      }
      return n[i] || Ni;
    }
  };
}, Qa = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const c = Qa(e, t + 1, s);
    if (c) return c;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(Ir) : e.slice(t).join(Ir), l = i.length;
  for (let c = 0; c < l; c++) {
    const d = i[c];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Wf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Kf + r : void 0;
})(), jf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Vf(n, t);
}, Vf = (e, t) => {
  const n = Ja();
  for (const r in e) {
    const o = e[r];
    os(o, n, r, t);
  }
  return n;
}, os = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    Uf(i, t, n, r);
  }
}, Uf = (e, t, n, r) => {
  if (typeof e == "string") {
    Yf(e, t, n);
    return;
  }
  if (typeof e == "function") {
    qf(e, t, n, r);
    return;
  }
  Xf(e, t, n, r);
}, Yf = (e, t, n) => {
  const r = e === "" ? t : el(t, e);
  r.classGroupId = n;
}, qf = (e, t, n, r) => {
  if (Zf(e)) {
    os(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Hf(n, e));
}, Xf = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = o[i];
    os(l, el(t, a), n, r);
  }
}, el = (e, t) => {
  let n = e;
  const r = t.split(Ir), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = Ja(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, Zf = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Jf = (e) => {
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
}, zo = "!", ki = ":", Qf = [], Ri = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), eh = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    const d = o.length;
    for (let g = 0; g < d; g++) {
      const y = o[g];
      if (i === 0 && a === 0) {
        if (y === ki) {
          s.push(o.slice(l, g)), l = g + 1;
          continue;
        }
        if (y === "/") {
          c = g;
          continue;
        }
      }
      y === "[" ? i++ : y === "]" ? i-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = s.length === 0 ? o : o.slice(l);
    let h = u, m = !1;
    u.endsWith(zo) ? (h = u.slice(0, -1), m = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(zo) && (h = u.slice(1), m = !0)
    );
    const v = c && c > l ? c - l : void 0;
    return Ri(s, m, h, v);
  };
  if (t) {
    const o = t + ki, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : Ri(Qf, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, th = (e) => {
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
}, nh = (e) => ({
  cache: Jf(e.cacheSize),
  parseClassName: eh(e),
  sortModifiers: th(e),
  postfixLookupClassGroupIds: rh(e),
  ...Gf(e)
}), rh = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, oh = /\s+/, sh = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s,
    postfixLookupClassGroupIds: i
  } = t, a = [], l = e.trim().split(oh);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      isExternal: h,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: y
    } = n(u);
    if (h) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let w = !!y, N;
    if (w) {
      const k = g.substring(0, y);
      N = r(k);
      const x = N && i[N] ? r(g) : void 0;
      x && x !== N && (N = x, w = !1);
    } else
      N = r(g);
    if (!N) {
      if (!w) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (N = r(g), !N) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      w = !1;
    }
    const S = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), b = v ? S + zo : S, R = b + N;
    if (a.indexOf(R) > -1)
      continue;
    a.push(R);
    const I = o(N, w);
    for (let k = 0; k < I.length; ++k) {
      const x = I[k];
      a.push(b + x);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, ih = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = tl(n)) && (o && (o += " "), o += r);
  return o;
}, tl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = tl(e[r])) && (n && (n += " "), n += t);
  return n;
}, ah = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = nh(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = sh(l, n);
    return o(l, d), d;
  };
  return s = i, (...l) => s(ih(...l));
}, lh = [], Ce = (e) => {
  const t = (n) => n[e] || lh;
  return t.isThemeGetter = !0, t;
}, nl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ch = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, uh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, hh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => ch.test(e), se = (e) => !!e && !Number.isNaN(Number(e)), tt = (e) => !!e && Number.isInteger(Number(e)), go = (e) => e.endsWith("%") && se(e.slice(0, -1)), dt = (e) => uh.test(e), ol = () => !0, ph = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  dh.test(e) && !fh.test(e)
), ss = () => !1, gh = (e) => hh.test(e), vh = (e) => mh.test(e), bh = (e) => !W(e) && !j(e), yh = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), wh = (e) => Tt(e, al, ss), W = (e) => nl.test(e), Ht = (e) => Tt(e, ll, ph), Ii = (e) => Tt(e, Ph, se), xh = (e) => Tt(e, ul, ol), Ch = (e) => Tt(e, cl, ss), Pi = (e) => Tt(e, sl, ss), Sh = (e) => Tt(e, il, vh), lr = (e) => Tt(e, dl, gh), j = (e) => rl.test(e), Nn = (e) => Ut(e, ll), Nh = (e) => Ut(e, cl), Ei = (e) => Ut(e, sl), kh = (e) => Ut(e, al), Rh = (e) => Ut(e, il), cr = (e) => Ut(e, dl, !0), Ih = (e) => Ut(e, ul, !0), Tt = (e, t, n) => {
  const r = nl.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ut = (e, t, n = !1) => {
  const r = rl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, sl = (e) => e === "position" || e === "percentage", il = (e) => e === "image" || e === "url", al = (e) => e === "length" || e === "size" || e === "bg-size", ll = (e) => e === "length", Ph = (e) => e === "number", cl = (e) => e === "family-name", ul = (e) => e === "number" || e === "weight", dl = (e) => e === "shadow", Eh = () => {
  const e = Ce("color"), t = Ce("font"), n = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), s = Ce("leading"), i = Ce("breakpoint"), a = Ce("container"), l = Ce("spacing"), c = Ce("radius"), d = Ce("shadow"), u = Ce("inset-shadow"), h = Ce("text-shadow"), m = Ce("drop-shadow"), v = Ce("blur"), g = Ce("perspective"), y = Ce("aspect"), w = Ce("ease"), N = Ce("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [
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
  ], R = () => [...b(), j, W], I = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], x = () => [j, W, l], P = () => [Nt, "full", "auto", ...x()], C = () => [tt, "none", "subgrid", j, W], E = () => ["auto", {
    span: ["full", tt, j, W]
  }, tt, j, W], T = () => [tt, "auto", j, W], $ = () => ["auto", "min", "max", "fr", j, W], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...x()], D = () => [Nt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], B = () => [Nt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...x()], L = () => [Nt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...x()], M = () => [e, j, W], K = () => [...b(), Ei, Pi, {
    position: [j, W]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], U = () => ["auto", "cover", "contain", kh, wh, {
    size: [j, W]
  }], ne = () => [go, Nn, Ht], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    j,
    W
  ], H = () => ["", se, Nn, Ht], G = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => [se, go, Ei, Pi], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    j,
    W
  ], te = () => ["none", se, j, W], fe = () => ["none", se, j, W], ge = () => [se, j, W], ae = () => [Nt, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [dt],
      breakpoint: [dt],
      color: [ol],
      container: [dt],
      "drop-shadow": [dt],
      ease: ["in", "out", "in-out"],
      font: [bh],
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
        aspect: ["auto", "square", Nt, W, j, y]
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
        "@container": ["", "normal", "size", j, W]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [yh],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [se, W, j, a]
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
        object: R()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: [tt, "auto", j, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Nt, "full", "auto", a, ...x()]
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
        flex: [se, Nt, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", se, j, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", se, j, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [tt, "first", "last", "none", j, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": C()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: E()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": C()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: E()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
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
        justify: [..._(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ..._()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": _()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
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
        size: D()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...B()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...B()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...B()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...L()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...L()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...L()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...D()]
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
          ...D()
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
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Nn, Ht]
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
        font: [r, Ih, xh]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", go, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nh, Ch, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [W]
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
        tracking: [o, j, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [se, "none", j, Ii]
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
        "list-image": ["none", j, W]
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
        list: ["disc", "decimal", "none", j, W]
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
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [se, "from-font", "auto", j, Ht]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [se, "auto", j, W]
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
        tab: [tt, j, W]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j, W]
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
        content: ["none", j, W]
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
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: V()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: U()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, tt, j, W],
          radial: ["", j, W],
          conic: [tt, j, W]
        }, Rh, Sh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: re()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": re()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": re()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": re()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": re()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": re()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": re()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": re()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": re()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": re()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": re()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": re()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": re()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": re()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": re()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: H()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": H()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": H()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": H()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": H()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": H()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": H()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": H()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": H()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": H()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": H()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": H()
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
        "divide-y": H()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": M()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [se, j, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", se, Nn, Ht]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
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
        shadow: M()
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
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: H()
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
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [se, Ht]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": H()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
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
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [se, j, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
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
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
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
        "mask-radial-at": b()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [se]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
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
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: V()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: U()
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
        mask: ["none", j, W]
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
          j,
          W
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [se, j, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [se, j, W]
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
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", se, j, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [se, j, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", se, j, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [se, j, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", se, j, W]
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
          j,
          W
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [se, j, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [se, j, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", se, j, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [se, j, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", se, j, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [se, j, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [se, j, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", se, j, W]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", j, W]
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
        duration: [se, "initial", j, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, j, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [se, j, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, j, W]
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
        perspective: [g, j, W]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
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
        scale: fe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": fe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": fe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": fe()
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
        transform: [j, W, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
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
        translate: ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ae()
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
        zoom: [tt, j, W]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
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
        caret: M()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j, W]
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
        "scrollbar-thumb": M()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", j, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [se, Nn, Ht, Ii]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
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
}, Ah = /* @__PURE__ */ ah(Eh);
function ce(...e) {
  return Ah(Za(e));
}
const is = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Ai = (e, t) => e && e > 0 ? e + t : 0, as = ({ width: e, left: t = 0, right: n = 0 }, r, o, s) => {
  if (e)
    return !t && !n ? e + o : e;
  let i = s * r;
  return t || (i += s * o), n || (i += s * o), (t || n) && (i -= t + n), i;
}, fl = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, s = r + 2 * n, i = as(e, r, n, o), a = Ai(e.left, n), l = t === "spread" && e.side === "end" ? -r + a : a, c = s - (l + i);
  return {
    top: `${Math.max(0, Ai(e.top, n))}mm`,
    right: `${Math.max(0, c)}mm`
  };
}, ls = (e) => {
  const t = xe(Ot), n = is({
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
  } = e, g = (k) => `${k}mm`, y = () => as({ width: c, left: u, right: h }, o, r, 1), w = () => {
    let k = d;
    return d ? !m && !v && (k += r) : (k = s, m || (k += r), v || (k += r), (m || v) && (k -= (m ?? 0) + (v ?? 0))), k;
  }, N = y(), S = w(), b = (k) => k !== void 0 ? g(k) : void 0, I = ((k) => Object.fromEntries(
    Object.entries(k).filter(([x, P]) => P !== void 0)
  ))({
    backgroundColor: l,
    width: b(N),
    height: b(S),
    left: b(u > 0 ? u + r : u),
    right: b(h > 0 ? h + r : h),
    top: b(m > 0 ? m + r : m),
    bottom: b(v > 0 ? v + r : v)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: I, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ F(
    "div",
    {
      className: "uhuu-image-inner",
      ...dn(e, t),
      children: [
        /* @__PURE__ */ f(
          "img",
          {
            className: ce("cover-image object-cover object-center", a),
            src: i || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const Dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Di = (e) => {
  const t = Mh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, hl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Oh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Th = {
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
const _h = Gr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => _o(
    "svg",
    {
      ref: l,
      ...Th,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: hl("lucide", o),
      ...!s && !Oh(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => _o(c, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const ye = (e, t) => {
  const n = Gr(
    ({ className: r, ...o }, s) => _o(_h, {
      ref: s,
      iconNode: t,
      className: hl(
        `lucide-${Dh(Di(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Di(e), n;
};
const Fh = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Lh = ye("arrow-down", Fh);
const $h = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Mi = ye("arrow-up-down", $h);
const Bh = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], zh = ye("arrow-up", Bh);
const Hh = [
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
], Kh = ye("book-dashed", Hh);
const Gh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], cs = ye("check", Gh);
const Wh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ml = ye("chevron-down", Wh);
const jh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Vh = ye("chevron-right", jh);
const Uh = [
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
], Yh = ye("clipboard-list", Uh);
const qh = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Xh = ye("copy", qh);
const Zh = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], pl = ye("ellipsis", Zh);
const Jh = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], gl = ye("grip-vertical", Jh);
const Qh = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Ho = ye("lock", Qh);
const em = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], tm = ye("maximize", em);
const nm = [["path", { d: "M5 12h14", key: "1ays0h" }]], rm = ye("minus", nm);
const om = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], sm = ye("pencil", om);
const im = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], nt = ye("plus", im);
const am = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], lm = ye("search", am);
const cm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], um = ye("trash-2", cm);
const dm = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], fm = ye("unfold-horizontal", dm);
const hm = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], mm = ye("unfold-vertical", hm);
const pm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], vl = ye("x", pm);
const gm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], vm = ye("zoom-in", gm);
const bm = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ym = ye("zoom-out", bm), bl = p.createContext({
  portalContainer: null
});
function us() {
  return p.useContext(bl);
}
function wm({ children: e }) {
  const [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ f(bl.Provider, { value: { portalContainer: t }, children: e });
}
const yl = Mt({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function ds() {
  return xe(yl);
}
function fs() {
  const { interactive: e } = ds();
  return !e;
}
function xm() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function Cm() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Sm({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = xm(), o = n || Cm(), s = r ? !1 : t, [i, a] = ie(s);
  return /* @__PURE__ */ f(yl.Provider, { value: { interactive: i, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ f(wm, { children: /* @__PURE__ */ f("div", { "data-uhuu-interactive": i ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const Oi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ti = Za, wl = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Ti(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const d = n?.[c], u = s?.[c];
    if (d === null) return null;
    const h = Oi(d) || Oi(u);
    return o[c][h];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [u, h] = d;
    return h === void 0 || (c[u] = h), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: u, className: h, ...m } = d;
    return Object.entries(m).every((v) => {
      let [g, y] = v;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...a
      }[g]) : {
        ...s,
        ...a
      }[g] === y;
    }) ? [
      ...c,
      u,
      h
    ] : c;
  }, []);
  return Ti(e, i, l, n?.class, n?.className);
}, Nm = wl(
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
      className: ce(Nm({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
Ae.displayName = "Button";
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  };
}
function _i(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function km(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = _i(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : _i(e[o], null);
        }
      };
  };
}
function me(...e) {
  return p.useCallback(km(...e), e);
}
function gt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = p.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const c = (u) => {
      const { scope: h, children: m, ...v } = u, g = h?.[e]?.[l] || a, y = p.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ f(g.Provider, { value: y, children: m });
    };
    c.displayName = s + "Provider";
    function d(u, h, m = {}) {
      const { optional: v = !1 } = m, g = h?.[e]?.[l] || a, y = p.useContext(g);
      if (y) return y;
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
  return o.scopeName = e, [r, Rm(o, ...t)];
}
function Rm(...e) {
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
}, Im = p[" useInsertionEffect ".trim().toString()] || st;
function fn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Pm({
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
        const u = Em(d) ? d(e) : d;
        u !== e && i.current?.(u);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Pm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = p.useState(e), o = p.useRef(n), s = p.useRef(t);
  return Im(() => {
    s.current = t;
  }, [t]), p.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Em(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  const t = p.forwardRef((n, r) => {
    let { children: o, ...s } = n, i = null, a = !1;
    const l = [];
    Fi(o) && typeof ur == "function" && (o = ur(o._payload)), p.Children.forEach(o, (h) => {
      if (Tm(h)) {
        a = !0;
        const m = h;
        let v = "child" in m.props ? m.props.child : m.props.children;
        Fi(v) && typeof ur == "function" && (v = ur(v._payload)), i = Dm(m, v), l.push(i?.props?.children);
      } else
        l.push(h);
    }), i ? i = p.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && p.Children.count(o) === 1 && p.isValidElement(o) && (i = o)
    );
    const c = i ? Om(i) : void 0, d = me(r, c);
    if (!i) {
      if (o || o === 0)
        throw new Error(
          a ? $m(e) : Lm(e)
        );
      return o;
    }
    const u = Mm(s, i.props ?? {});
    return i.type !== p.Fragment && (u.ref = r ? d : c), p.cloneElement(i, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
var Am = /* @__PURE__ */ Symbol.for("radix.slottable"), Dm = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return p.isValidElement(n) ? p.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return p.isValidElement(t) ? t : null;
};
function Mm(e, t) {
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
function Om(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Tm(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Am;
}
var _m = /* @__PURE__ */ Symbol.for("react.lazy");
function Fi(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === _m && "_payload" in e && Fm(e._payload);
}
function Fm(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var Lm = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, $m = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, ur = p[" use ".trim().toString()], Bm = [
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
], pe = Bm.reduce((e, t) => {
  const n = /* @__PURE__ */ On(`Primitive.${t}`), r = p.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function xl(e, t) {
  e && ts.flushSync(() => e.dispatchEvent(t));
}
function hs(e) {
  const t = e + "CollectionProvider", [n, r] = gt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (g) => {
    const { scope: y, children: w } = g, N = p.useRef(null), S = p.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: y, itemMap: S, collectionRef: N, children: w });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ On(a), c = p.forwardRef(
    (g, y) => {
      const { scope: w, children: N } = g, S = s(a, w), b = me(y, S.collectionRef);
      return /* @__PURE__ */ f(l, { ref: b, children: N });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ On(d), m = p.forwardRef(
    (g, y) => {
      const { scope: w, children: N, ...S } = g, b = p.useRef(null), R = me(y, b), I = s(d, w);
      return p.useEffect(() => (I.itemMap.set(b, { ref: b, ...S }), () => {
        I.itemMap.delete(b);
      })), /* @__PURE__ */ f(h, { [u]: "", ref: R, children: N });
    }
  );
  m.displayName = d;
  function v(g) {
    const y = s(e + "CollectionConsumer", g);
    return p.useCallback(() => {
      const N = y.collectionRef.current;
      if (!N) return [];
      const S = Array.from(N.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (I, k) => S.indexOf(I.ref.current) - S.indexOf(k.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: m },
    v,
    r
  ];
}
var zm = p.createContext(void 0);
function ms(e) {
  const t = p.useContext(zm);
  return e || t || "ltr";
}
function it(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var Hm = "DismissableLayer", Ko = "dismissableLayer.update", Km = "dismissableLayer.pointerDownOutside", Gm = "dismissableLayer.focusOutside", Li, ps = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), gs = p.forwardRef(
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
    } = e, d = p.useContext(ps), [u, h] = p.useState(null), m = u?.ownerDocument ?? globalThis?.document, [, v] = p.useState({}), g = me(t, h), y = Array.from(d.layers), [w] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), N = w ? y.indexOf(w) : -1, S = u ? y.indexOf(u) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, R = S >= N, I = p.useRef(!1), k = Ym(
      (E) => {
        s?.(E), a?.(E), E.defaultPrevented || l?.();
      },
      {
        ownerDocument: m,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: I,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: p.useCallback(
          (E) => {
            if (!(E instanceof Node))
              return !1;
            const T = [...d.branches].some(
              ($) => $.contains(E)
            );
            return R && !T;
          },
          [d.branches, R]
        )
      }
    ), x = qm((E) => {
      if (r && I.current)
        return;
      const T = E.target;
      [...d.branches].some((_) => _.contains(T)) || (i?.(E), a?.(E), E.defaultPrevented || l?.());
    }, m), P = u ? S === y.length - 1 : !1, C = it((E) => {
      E.key === "Escape" && (o?.(E), !E.defaultPrevented && l && (E.preventDefault(), l()));
    });
    return p.useEffect(() => {
      if (P)
        return m.addEventListener("keydown", C, { capture: !0 }), () => m.removeEventListener("keydown", C, { capture: !0 });
    }, [m, P, C]), p.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Li = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), $i(), () => {
          n && (d.layersWithOutsidePointerEventsDisabled.delete(u), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Li));
        };
    }, [u, m, n, d]), p.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), $i());
    }, [u, d]), p.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Ko, E), () => document.removeEventListener(Ko, E);
    }, []), /* @__PURE__ */ f(
      pe.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: b ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ee(e.onFocusCapture, x.onFocusCapture),
        onBlurCapture: ee(e.onBlurCapture, x.onBlurCapture),
        onPointerDownCapture: ee(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
gs.displayName = Hm;
var Wm = "DismissableLayerBranch", jm = p.forwardRef((e, t) => {
  const n = p.useContext(ps), r = p.useRef(null), o = me(t, r);
  return p.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ f(pe.div, { ...e, ref: o });
});
jm.displayName = Wm;
function Vm() {
  const e = p.useContext(ps), [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
var Um = () => !0;
function Ym(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = Um
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
      const b = S.target;
      b instanceof Node && [...s].some((I) => I.contains(b)) || d.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        c.current && u.current();
      }, 0);
    }
    function g(S) {
      c.current && d.current.set(S.type, !1);
    }
    const y = (S) => {
      if (S.target && !l.current) {
        let b = function() {
          n.removeEventListener("click", u.current);
          const I = m();
          h(), I || Cl(
            Km,
            a,
            R,
            { discrete: !0 }
          );
        };
        if (!i(S.target)) {
          n.removeEventListener("click", u.current), h(), l.current = !1;
          return;
        }
        const R = { originalEvent: S };
        c.current = !0, o.current = r && S.button === 0, d.current.clear(), !r || S.button !== 0 ? b() : (n.removeEventListener("click", u.current), u.current = b, n.addEventListener("click", u.current, { once: !0 }));
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
    const N = window.setTimeout(() => {
      n.addEventListener("pointerdown", y);
    }, 0);
    return () => {
      window.clearTimeout(N), n.removeEventListener("pointerdown", y), n.removeEventListener("click", u.current);
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
function qm(e, t = globalThis?.document) {
  const n = it(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Cl(Gm, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function $i() {
  const e = new CustomEvent(Ko);
  document.dispatchEvent(e);
}
function Cl(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? xl(o, s) : o.dispatchEvent(s);
}
var dr = 0, tn = null;
function Sl() {
  p.useEffect(() => {
    tn || (tn = { start: Bi(), end: Bi() });
    const { start: e, end: t } = tn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), dr++, () => {
      dr === 1 && (tn?.start.remove(), tn?.end.remove(), tn = null), dr = Math.max(0, dr - 1);
    };
  }, []);
}
function Bi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var vo = "focusScope.autoFocusOnMount", bo = "focusScope.autoFocusOnUnmount", zi = { bubbles: !1, cancelable: !0 }, Xm = "FocusScope", vs = p.forwardRef((e, t) => {
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
        const b = S.target;
        a.contains(b) ? u.current = b : kt(u.current, { select: !0 });
      }, y = function(S) {
        if (m.paused || !a) return;
        const b = S.relatedTarget;
        b !== null && (a.contains(b) || kt(u.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const R of S)
            R.removedNodes.length > 0 && kt(a);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", y);
      const N = new MutationObserver(w);
      return a && N.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", y), N.disconnect();
      };
    }
  }, [r, a, m.paused]), p.useEffect(() => {
    if (a) {
      Ki.add(m);
      const g = document.activeElement;
      if (!a.contains(g)) {
        const w = new CustomEvent(vo, zi);
        a.addEventListener(vo, c), a.dispatchEvent(w), w.defaultPrevented || (Zm(np(Nl(a)), { select: !0 }), document.activeElement === g && kt(a));
      }
      return () => {
        a.removeEventListener(vo, c), setTimeout(() => {
          const w = new CustomEvent(bo, zi);
          a.addEventListener(bo, d), a.dispatchEvent(w), w.defaultPrevented || kt(g ?? document.body, { select: !0 }), a.removeEventListener(bo, d), Ki.remove(m);
        }, 0);
      };
    }
  }, [a, c, d, m]);
  const v = p.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const y = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (y && w) {
        const N = g.currentTarget, [S, b] = Jm(N);
        S && b ? !g.shiftKey && w === b ? (g.preventDefault(), n && kt(S, { select: !0 })) : g.shiftKey && w === S && (g.preventDefault(), n && kt(b, { select: !0 })) : w === N && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ f(pe.div, { tabIndex: -1, ...i, ref: h, onKeyDown: v });
});
vs.displayName = Xm;
function Zm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (kt(r, { select: t }), document.activeElement !== n) return;
}
function Jm(e) {
  const t = Nl(e), n = Hi(t, e), r = Hi(t.reverse(), e);
  return [n, r];
}
function Nl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Qm(r, { upTo: t })))
      return r;
}
function Qm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ep(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ep(e) && t && e.select();
  }
}
var Ki = tp();
function tp() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Gi(e, t), e.unshift(t);
    },
    remove(t) {
      e = Gi(e, t), e[0]?.resume();
    }
  };
}
function Gi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function np(e) {
  return e.filter((t) => t.tagName !== "A");
}
var rp = p[" useId ".trim().toString()] || (() => {
}), op = 0;
function Pt(e) {
  const [t, n] = p.useState(rp());
  return st(() => {
    n((r) => r ?? String(op++));
  }, [e]), t ? `radix-${t}` : "";
}
const sp = ["top", "right", "bottom", "left"], Et = Math.min, ft = Math.max, Pr = Math.round, fr = Math.floor, ht = (e) => ({
  x: e,
  y: e
}), ip = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kl(e, t, n) {
  return ft(e, Et(t, n));
}
function pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function At(e) {
  return e.split("-")[0];
}
function hn(e) {
  return e.split("-")[1];
}
function bs(e) {
  return e === "x" ? "y" : "x";
}
function ys(e) {
  return e === "y" ? "height" : "width";
}
function ot(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ws(e) {
  return bs(ot(e));
}
function ap(e, t, n) {
  n === void 0 && (n = !1);
  const r = hn(e), o = ws(e), s = ys(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Er(i)), [i, Er(i)];
}
function lp(e) {
  const t = Er(e);
  return [Go(e), t, Go(t)];
}
function Go(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Wi = ["left", "right"], ji = ["right", "left"], cp = ["top", "bottom"], up = ["bottom", "top"];
function dp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ji : Wi : t ? Wi : ji;
    case "left":
    case "right":
      return t ? cp : up;
    default:
      return [];
  }
}
function fp(e, t, n, r) {
  const o = hn(e);
  let s = dp(At(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Go)))), s;
}
function Er(e) {
  const t = At(e);
  return ip[t] + e.slice(t.length);
}
function hp(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function Rl(e) {
  return typeof e != "number" ? hp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ar(e) {
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
function Vi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = ot(t), i = ws(t), a = ys(i), l = At(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
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
  const v = hn(t);
  return v && (m[i] += h * (v === "end" ? 1 : -1) * (n && c ? -1 : 1)), m;
}
async function mp(e, t) {
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
  } = pt(t, e), v = Rl(m), y = a[h ? u === "floating" ? "reference" : "floating" : u], w = Ar(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), N = u === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(S)) && await (s.getScale == null ? void 0 : s.getScale(S)) || {
    x: 1,
    y: 1
  }, R = Ar(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: N,
    offsetParent: S,
    strategy: l
  }) : N);
  return {
    top: (w.top - R.top + v.top) / b.y,
    bottom: (R.bottom - w.bottom + v.bottom) / b.y,
    left: (w.left - R.left + v.left) / b.x,
    right: (R.right - w.right + v.right) / b.x
  };
}
const pp = 50, gp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: mp
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Vi(c, r, l), h = r, m = 0;
  const v = {};
  for (let g = 0; g < s.length; g++) {
    const y = s[g];
    if (!y)
      continue;
    const {
      name: w,
      fn: N
    } = y, {
      x: S,
      y: b,
      data: R,
      reset: I
    } = await N({
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
    d = S ?? d, u = b ?? u, v[w] = {
      ...v[w],
      ...R
    }, I && m < pp && (m++, typeof I == "object" && (I.placement && (h = I.placement), I.rects && (c = I.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: d,
      y: u
    } = Vi(c, h, l)), g = -1);
  }
  return {
    x: d,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: v
  };
}, vp = (e) => ({
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
    const u = Rl(d), h = {
      x: n,
      y: r
    }, m = ws(o), v = ys(m), g = await i.getDimensions(c), y = m === "y", w = y ? "top" : "left", N = y ? "bottom" : "right", S = y ? "clientHeight" : "clientWidth", b = s.reference[v] + s.reference[m] - h[m] - s.floating[v], R = h[m] - s.reference[m], I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let k = I ? I[S] : 0;
    (!k || !await (i.isElement == null ? void 0 : i.isElement(I))) && (k = a.floating[S] || s.floating[v]);
    const x = b / 2 - R / 2, P = k / 2 - g[v] / 2 - 1, C = Et(u[w], P), E = Et(u[N], P), T = k - g[v] - E, $ = k / 2 - g[v] / 2 + x, _ = kl(C, $, T), z = !l.arrow && hn(o) != null && $ !== _ && s.reference[v] / 2 - ($ < C ? C : E) - g[v] / 2 < 0, A = z ? $ < C ? $ - C : $ - T : 0;
    return {
      [m]: h[m] + A,
      data: {
        [m]: _,
        centerOffset: $ - _ - A,
        ...z && {
          alignmentOffset: A
        }
      },
      reset: z
    };
  }
}), bp = function(e) {
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
        ...y
      } = pt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = At(o), N = ot(a), S = At(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = h || (S || !g ? [Er(a)] : lp(a)), I = v !== "none";
      !h && I && R.push(...fp(a, g, v, b));
      const k = [a, ...R], x = await l.detectOverflow(t, y), P = [];
      let C = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && P.push(x[w]), u) {
        const _ = ap(o, i, b);
        P.push(x[_[0]], x[_[1]]);
      }
      if (C = [...C, {
        placement: o,
        overflows: P
      }], !P.every((_) => _ <= 0)) {
        var E, T;
        const _ = (((E = s.flip) == null ? void 0 : E.index) || 0) + 1, z = k[_];
        if (z && (!(u === "alignment" ? N !== ot(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        C.every((B) => ot(B.placement) === N ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: C
            },
            reset: {
              placement: z
            }
          };
        let A = (T = C.filter((D) => D.overflows[0] <= 0).sort((D, B) => D.overflows[1] - B.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!A)
          switch (m) {
            case "bestFit": {
              var $;
              const D = ($ = C.filter((B) => {
                if (I) {
                  const L = ot(B.placement);
                  return L === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((L) => L > 0).reduce((L, M) => L + M, 0)]).sort((B, L) => B[1] - L[1])[0]) == null ? void 0 : $[0];
              D && (A = D);
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
function Ui(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yi(e) {
  return sp.some((t) => e[t] >= 0);
}
const yp = function(e) {
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
          }), a = Ui(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Yi(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = Ui(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Yi(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Il = /* @__PURE__ */ new Set(["left", "top"]);
async function wp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = At(n), a = hn(n), l = ot(n) === "y", c = Il.has(i) ? -1 : 1, d = s && l ? -1 : 1, u = pt(t, e);
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
const xp = function(e) {
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
      } = t, l = await wp(t, e);
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
}, Cp = function(e) {
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
          fn: (N) => {
            let {
              x: S,
              y: b
            } = N;
            return {
              x: S,
              y: b
            };
          }
        },
        ...c
      } = pt(e, t), d = {
        x: n,
        y: r
      }, u = await s.detectOverflow(t, c), h = ot(o), m = bs(h);
      let v = d[m], g = d[h];
      const y = (N, S) => kl(S + u[N === "y" ? "top" : "left"], S, S - u[N === "y" ? "bottom" : "right"]);
      i && (v = y(m, v)), a && (g = y(h, g));
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
}, Sp = function(e) {
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
      }, m = ot(i), v = bs(m);
      let g = h[v], y = h[m];
      const w = pt(c, t), N = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: (n = w.mainAxis) != null ? n : 0,
        crossAxis: (r = w.crossAxis) != null ? r : 0
      };
      if (d) {
        const R = v === "y" ? "height" : "width", I = a.reference[v] - a.floating[R] + N.mainAxis, k = a.reference[v] + a.reference[R] - N.mainAxis;
        g < I ? g = I : g > k && (g = k);
      }
      if (u) {
        var S, b;
        const R = v === "y" ? "width" : "height", I = Il.has(At(i)), k = a.reference[m] - a.floating[R] + (I && ((S = l.offset) == null ? void 0 : S[m]) || 0) + (I ? 0 : N.crossAxis), x = a.reference[m] + a.reference[R] + (I ? 0 : ((b = l.offset) == null ? void 0 : b[m]) || 0) - (I ? N.crossAxis : 0);
        y < k ? y = k : y > x && (y = x);
      }
      return {
        [v]: g,
        [m]: y
      };
    }
  };
}, Np = function(e) {
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
      } = pt(e, t), l = await o.detectOverflow(t, a), c = At(n), d = hn(n), u = ot(n) === "y", {
        width: h,
        height: m
      } = r.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = d === "end" ? "top" : "bottom");
      const y = m - l.top - l.bottom, w = h - l.left - l.right, N = Et(m - l[v], y), S = Et(h - l[g], w), b = t.middlewareData.shift, R = !b;
      let I = N, k = S;
      b != null && b.enabled.x && (k = w), b != null && b.enabled.y && (I = y), R && !d && (u ? k = h - 2 * ft(l.left, l.right) : I = m - 2 * ft(l.top, l.bottom)), await i({
        ...t,
        availableWidth: k,
        availableHeight: I
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
function Wr() {
  return typeof window < "u";
}
function mn(e) {
  return Pl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vt(e) {
  var t;
  return (t = (Pl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pl(e) {
  return Wr() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function at(e) {
  return Wr() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function _t(e) {
  return Wr() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function qi(e) {
  return !Wr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function jr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function kp(e) {
  return /^(table|td|th)$/.test(mn(e));
}
function Vr(e) {
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
const Rp = /transform|translate|scale|rotate|perspective|filter/, Ip = /paint|layout|strict|content/, Kt = (e) => !!e && e !== "none";
let yo;
function xs(e) {
  const t = at(e) ? lt(e) : e;
  return Kt(t.transform) || Kt(t.translate) || Kt(t.scale) || Kt(t.rotate) || Kt(t.perspective) || !Cs() && (Kt(t.backdropFilter) || Kt(t.filter)) || Rp.test(t.willChange || "") || Ip.test(t.contain || "");
}
function Pp(e) {
  let t = jt(e);
  for (; _t(t) && !Tn(t); ) {
    if (xs(t))
      return t;
    if (Vr(t))
      return null;
    t = jt(t);
  }
  return null;
}
function Cs() {
  return yo == null && (yo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), yo;
}
function Tn(e) {
  return /^(html|body|#document)$/.test(mn(e));
}
function lt(e) {
  return Le(e).getComputedStyle(e);
}
function Ur(e) {
  return at(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qi(e) && e.host || // Fallback.
    vt(e)
  );
  return qi(t) ? t.host : t;
}
function El(e) {
  const t = jt(e);
  return Tn(t) ? (e.ownerDocument || e).body : _t(t) && jr(t) ? t : El(t);
}
function _n(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = El(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Le(o);
  if (s) {
    const a = Wo(i);
    return t.concat(i, i.visualViewport || [], jr(o) ? o : [], a && n ? _n(a) : []);
  } else
    return t.concat(o, _n(o, [], n));
}
function Wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Al(e) {
  const t = lt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _t(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Pr(n) !== s || Pr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Ss(e) {
  return at(e) ? e : e.contextElement;
}
function an(e) {
  const t = Ss(e);
  if (!_t(t))
    return ht(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Al(t);
  let i = (s ? Pr(n.width) : n.width) / r, a = (s ? Pr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Ep = /* @__PURE__ */ ht(0);
function Dl(e) {
  const t = Le(e);
  return !Cs() || !t.visualViewport ? Ep : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ap(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === Le(e);
}
function Vt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Ss(e);
  let i = ht(1);
  t && (r ? at(r) && (i = an(r)) : i = an(e));
  const a = Ap(s, n, r) ? Dl(s) : ht(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, u = o.height / i.y;
  if (s && r) {
    const h = Le(s), m = at(r) ? Le(r) : r;
    let v = h, g = Wo(v);
    for (; g && m !== v; ) {
      const y = an(g), w = g.getBoundingClientRect(), N = lt(g), S = w.left + (g.clientLeft + parseFloat(N.paddingLeft)) * y.x, b = w.top + (g.clientTop + parseFloat(N.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, u *= y.y, l += S, c += b, v = Le(g), g = Wo(v);
    }
  }
  return Ar({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Yr(e, t) {
  const n = Ur(e).scrollLeft;
  return t ? t.left + n : Vt(vt(e)).left + n;
}
function Ml(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Yr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Dp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = vt(r), a = t ? Vr(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ht(1);
  const d = ht(0), u = _t(r);
  if ((u || !s) && ((mn(r) !== "body" || jr(i)) && (l = Ur(r)), u)) {
    const m = Vt(r);
    c = an(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const h = i && !u && !s ? Ml(i, l) : ht(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function Mp(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Op(e) {
  const t = Ur(e), n = e.ownerDocument.body, r = ft(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = ft(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Yr(e);
  const i = -t.scrollTop;
  return lt(n).direction === "rtl" && (s += ft(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: i
  };
}
const Tp = 25;
function _p(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = Le(e), s = vt(e), i = o.visualViewport;
  let a = s.clientWidth, l = s.clientHeight, c = 0, d = 0;
  if (i) {
    const h = !Cs() || t === "fixed";
    r ? h || (c = -i.offsetLeft, d = -i.offsetTop) : (a = i.width, l = i.height, h && (c = i.offsetLeft, d = i.offsetTop));
  }
  if (Yr(s) <= 0) {
    const h = s.ownerDocument, m = h.body, v = getComputedStyle(m), g = h.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, y = Math.abs(s.clientWidth - m.clientWidth - g), w = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? y / 2 : y;
    w <= Tp && (a -= w);
  }
  return {
    width: a,
    height: l,
    x: c,
    y: d
  };
}
function Fp(e, t) {
  const n = Vt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = an(e), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Xi(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = _p(e, n, t);
  else if (t === "document")
    r = Op(vt(e));
  else if (at(t))
    r = Fp(t, n);
  else {
    const o = Dl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ar(r);
}
function Lp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = _n(e, [], !1).filter((a) => at(a) && mn(a) !== "body"), o = null;
  const s = lt(e).position === "fixed";
  let i = s ? jt(e) : e;
  for (; at(i) && !Tn(i); ) {
    const a = lt(i), l = xs(i), c = o ? o.position : s ? "fixed" : "";
    !l && (c === "fixed" || c === "absolute" && a.position === "static") ? r = r.filter((u) => u !== i) : o = a, i = jt(i);
  }
  return t.set(e, r), r;
}
function $p(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Vr(t) ? [] : Lp(t, this._c) : [].concat(n), r], a = Xi(t, i[0], o);
  let l = a.top, c = a.right, d = a.bottom, u = a.left;
  for (let h = 1; h < i.length; h++) {
    const m = Xi(t, i[h], o);
    l = ft(m.top, l), c = Et(m.right, c), d = Et(m.bottom, d), u = ft(m.left, u);
  }
  return {
    width: c - u,
    height: d - l,
    x: u,
    y: l
  };
}
function Bp(e) {
  const {
    width: t,
    height: n
  } = Al(e);
  return {
    width: t,
    height: n
  };
}
function zp(e, t, n) {
  const r = _t(t), o = vt(t), s = n === "fixed", i = Vt(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ht(0);
  if ((r || !s) && ((mn(t) !== "body" || jr(o)) && (a = Ur(t)), r)) {
    const h = Vt(t, !0, s, t);
    l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  !r && o && (l.x = Yr(o));
  const c = o && !r && !s ? Ml(o, a) : ht(0), d = i.left + a.scrollLeft - l.x - c.x, u = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: i.width,
    height: i.height
  };
}
function wo(e) {
  return lt(e).position === "static";
}
function Zi(e, t) {
  if (!_t(e) || lt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return vt(e) === n && (n = n.ownerDocument.body), n;
}
function Ol(e, t) {
  const n = Le(e);
  if (Vr(e))
    return n;
  if (!_t(e)) {
    let o = jt(e);
    for (; o && !Tn(o); ) {
      if (at(o) && !wo(o))
        return o;
      o = jt(o);
    }
    return n;
  }
  let r = Zi(e, t);
  for (; r && kp(r) && wo(r); )
    r = Zi(r, t);
  return r && Tn(r) && wo(r) && !xs(r) ? n : r || Pp(e) || n;
}
const Hp = async function(e) {
  const t = this.getOffsetParent || Ol, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: zp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Kp(e) {
  return lt(e).direction === "rtl";
}
const Gp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dp,
  getDocumentElement: vt,
  getClippingRect: $p,
  getOffsetParent: Ol,
  getElementRects: Hp,
  getClientRects: Mp,
  getDimensions: Bp,
  getScale: an,
  isElement: at,
  isRTL: Kp
};
function Tl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Wp(e, t, n) {
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
      height: y
    } = h;
    if (d || t(), !g || !y)
      return;
    const w = fr(v), N = fr(s.clientWidth - (m + g)), S = fr(s.clientHeight - (v + y)), b = fr(m), I = {
      rootMargin: -w + "px " + -N + "px " + -S + "px " + -b + "px",
      threshold: ft(0, Et(1, u)) || 1
    };
    let k = !0;
    function x(P) {
      const C = P[0].intersectionRatio;
      if (!Tl(h, e.getBoundingClientRect()))
        return a();
      if (C !== u) {
        if (!k)
          return a();
        C ? a(!1, C) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...I,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, I);
    }
    r.observe(e);
  }
  const l = Le(e), c = () => a(n);
  return l.addEventListener("resize", c), a(!0), () => {
    l.removeEventListener("resize", c), i();
  };
}
function jp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Ss(e), d = o || s ? [...c ? _n(c) : [], ...t ? _n(t) : []] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n), s && w.addEventListener("resize", n);
  });
  const u = c && a ? Wp(c, n, s) : null;
  let h = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [N] = w;
    N && N.target === c && m && t && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(t);
    })), n();
  }), c && !l && m.observe(c), t && m.observe(t));
  let v, g = l ? Vt(e) : null;
  l && y();
  function y() {
    const w = Vt(e);
    g && !Tl(g, w) && n(), g = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((N) => {
      o && N.removeEventListener("scroll", n), s && N.removeEventListener("resize", n);
    }), u?.(), (w = m) == null || w.disconnect(), m = null, l && cancelAnimationFrame(v);
  };
}
const Vp = xp, Up = Cp, Yp = bp, qp = Np, Xp = yp, Ji = vp, Zp = Sp, Jp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, s = {
    ...Gp,
    ...o.platform,
    _c: r
  };
  return gp(e, t, {
    ...o,
    platform: s
  });
};
var Qp = typeof document < "u", eg = function() {
}, br = Qp ? Oa : eg;
function Dr(e, t) {
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
        if (!Dr(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Dr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _l(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qi(e, t) {
  const n = _l(e);
  return Math.round(t * n) / n;
}
function xo(e) {
  const t = p.useRef(e);
  return br(() => {
    t.current = e;
  }), t;
}
function tg(e) {
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
  Dr(h, r) || m(r);
  const [v, g] = p.useState(null), [y, w] = p.useState(null), N = p.useCallback((B) => {
    B !== I.current && (I.current = B, g(B));
  }, []), S = p.useCallback((B) => {
    B !== k.current && (k.current = B, w(B));
  }, []), b = s || v, R = i || y, I = p.useRef(null), k = p.useRef(null), x = p.useRef(d), P = l != null, C = xo(l), E = xo(o), T = xo(c), $ = p.useCallback(() => {
    if (!I.current || !k.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: h
    };
    E.current && (B.platform = E.current), Jp(I.current, k.current, B).then((L) => {
      const M = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      _.current && !Dr(x.current, M) && (x.current = M, ts.flushSync(() => {
        u(M);
      }));
    });
  }, [h, t, n, E, T]);
  br(() => {
    c === !1 && x.current.isPositioned && (x.current.isPositioned = !1, u((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [c]);
  const _ = p.useRef(!1);
  br(() => (_.current = !0, () => {
    _.current = !1;
  }), []), br(() => {
    if (b && (I.current = b), R && (k.current = R), b && R) {
      if (C.current)
        return C.current(b, R, $);
      $();
    }
  }, [b, R, $, C, P]);
  const z = p.useMemo(() => ({
    reference: I,
    floating: k,
    setReference: N,
    setFloating: S
  }), [N, S]), A = p.useMemo(() => ({
    reference: b,
    floating: R
  }), [b, R]), D = p.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return B;
    const L = Qi(A.floating, d.x), M = Qi(A.floating, d.y);
    return a ? {
      ...B,
      transform: "translate(" + L + "px, " + M + "px)",
      ..._l(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: M
    };
  }, [n, a, A.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: $,
    refs: z,
    elements: A,
    floatingStyles: D
  }), [d, $, z, A, D]);
}
const ng = (e) => {
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
      return r && t(r) ? r.current != null ? Ji({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ji({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, rg = (e, t) => {
  const n = Vp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, og = (e, t) => {
  const n = Up(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, sg = (e, t) => ({
  fn: Zp(e).fn,
  options: [e, t]
}), ig = (e, t) => {
  const n = Yp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ag = (e, t) => {
  const n = qp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, lg = (e, t) => {
  const n = Xp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, cg = (e, t) => {
  const n = ng(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var ug = "Arrow", Fl = p.forwardRef((e, t) => {
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
Fl.displayName = ug;
var dg = Fl;
function Ns(e) {
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
var ks = "Popper", [Ll, $l] = gt(ks), [fg, Bl] = Ll(ks), zl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null), [s, i] = p.useState(void 0);
  return /* @__PURE__ */ f(
    fg,
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
zl.displayName = ks;
var Hl = "PopperAnchor", Kl = p.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Bl(Hl, n), i = p.useRef(null), a = s.onAnchorChange, l = p.useCallback(
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
    const u = s.placementState && Is(s.placementState), h = u?.[0], m = u?.[1];
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
Kl.displayName = Hl;
var Rs = "PopperContent", [hg, mg] = Ll(Rs), Gl = p.forwardRef(
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
    } = e, y = Bl(Rs, n), [w, N] = p.useState(null), S = me(t, N), [b, R] = p.useState(null), I = Ns(b), k = I?.width ?? 0, x = I?.height ?? 0, P = r + (s !== "center" ? "-" + s : ""), C = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, E = Array.isArray(c) ? c : [c], T = E.length > 0, $ = {
      padding: C,
      boundary: E.filter(gg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: _, floatingStyles: z, placement: A, isPositioned: D, middlewareData: B } = tg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...X) => jp(...X, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        rg({ mainAxis: o + x, alignmentAxis: i }),
        l && og({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? sg() : void 0,
          ...$
        }),
        l && ig({ ...$ }),
        ag({
          ...$,
          apply: ({ elements: X, rects: q, availableWidth: Y, availableHeight: te }) => {
            const { width: fe, height: ge } = q.reference, ae = X.floating.style;
            ae.setProperty("--radix-popper-available-width", `${Y}px`), ae.setProperty("--radix-popper-available-height", `${te}px`), ae.setProperty("--radix-popper-anchor-width", `${fe}px`), ae.setProperty("--radix-popper-anchor-height", `${ge}px`);
          }
        }),
        b && cg({ element: b, padding: a }),
        vg({ arrowWidth: k, arrowHeight: x }),
        h && lg({
          strategy: "referenceHidden",
          ...$,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: T ? $.boundary : void 0
        })
      ]
    }), L = y.setPlacementState;
    st(() => (L(A), () => {
      L(void 0);
    }), [A, L]);
    const [M, K] = Is(A), V = it(v);
    st(() => {
      D && V?.();
    }, [D, V]);
    const U = B.arrow?.x, ne = B.arrow?.y, re = B.arrow?.centerOffset !== 0, [H, G] = p.useState();
    return st(() => {
      w && G(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f(
      "div",
      {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: D ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: H,
          "--radix-popper-transform-origin": [
            B.transformOrigin?.x,
            B.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...B.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          hg,
          {
            scope: n,
            placedSide: M,
            placedAlign: K,
            onArrowChange: R,
            arrowX: U,
            arrowY: ne,
            shouldHideArrow: re,
            children: /* @__PURE__ */ f(
              pe.div,
              {
                "data-side": M,
                "data-align": K,
                ...g,
                ref: S,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Gl.displayName = Rs;
var Wl = "PopperArrow", pg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, jl = p.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = mg(Wl, r), i = pg[s.placedSide];
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
          dg,
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
jl.displayName = Wl;
function gg(e) {
  return e !== null;
}
var vg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = Is(n), u = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + a / 2, m = (o.arrow?.y ?? 0) + l / 2;
    let v = "", g = "";
    return c === "bottom" ? (v = i ? u : `${h}px`, g = `${-l}px`) : c === "top" ? (v = i ? u : `${h}px`, g = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, g = i ? u : `${m}px`) : c === "left" && (v = `${r.floating.width + l}px`, g = i ? u : `${m}px`), { data: { x: v, y: g } };
  }
});
function Is(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Vl = zl, bg = Kl, yg = Gl, wg = jl, xg = "Portal", Ps = p.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = p.useState(!1);
  st(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? ts.createPortal(/* @__PURE__ */ f(pe.div, { ...r, ref: t }), i) : null;
});
Ps.displayName = xg;
function Cg(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ft = (e) => {
  const { present: t, children: n } = e, r = Sg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), s = Ng(r.ref, kg(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: s }) : null;
};
Ft.displayName = "Presence";
function Sg(e) {
  const [t, n] = p.useState(), r = p.useRef(null), o = p.useRef(e), s = p.useRef("none"), i = p.useRef(void 0), a = e ? "mounted" : "unmounted", [l, c] = Cg(a, {
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
    l === "mounted" ? (s.current = i.current ?? kn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), st(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const m = s.current, v = kn(d);
      e ? (i.current = v, c("MOUNT")) : v === "none" || d?.display === "none" ? c("UNMOUNT") : c(u && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), st(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, h = (v) => {
        const y = kn(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (c("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, m = (v) => {
        v.target === t && (s.current = kn(r.current));
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
        r.current = u, i.current = kn(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
function ea(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ng(...e) {
  const t = p.useRef(e);
  return t.current = e, p.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = ea(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : ea(r[i], null);
        }
      };
  }, []);
}
function kn(e) {
  return e?.animationName || "none";
}
function kg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Co = !1;
function Rg() {
  const [e, t] = p.useState(Co);
  return p.useEffect(() => {
    Co || (Co = !0, t(!0));
  }, []), e;
}
var Ul = p[" useSyncExternalStore ".trim().toString()];
function Ig() {
  return () => {
  };
}
function Pg() {
  return Ul(
    Ig,
    () => !0,
    () => !1
  );
}
var Eg = typeof Ul == "function" ? Pg : Rg, So = "rovingFocusGroup.onEntryFocus", Ag = { bubbles: !1, cancelable: !0 }, Hn = "RovingFocusGroup", [jo, Yl, Dg] = hs(Hn), [Mg, ql] = gt(
  Hn,
  [Dg]
), [Og, Tg] = Mg(Hn), Xl = p.forwardRef(
  (e, t) => /* @__PURE__ */ f(jo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(jo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(_g, { ...e, ref: t }) }) })
);
Xl.displayName = Hn;
var _g = p.forwardRef((e, t) => {
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
  } = e, h = p.useRef(null), m = me(t, h), v = ms(s), [g, y] = fn({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Hn
  }), [w, N] = p.useState(!1), S = it(c), b = Yl(n), R = p.useRef(!1), [I, k] = p.useState(0);
  return p.useEffect(() => {
    const x = h.current;
    if (x)
      return x.addEventListener(So, S), () => x.removeEventListener(So, S);
  }, [S]), /* @__PURE__ */ f(
    Og,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: g,
      onItemFocus: p.useCallback(
        (x) => y(x),
        [y]
      ),
      onItemShiftTab: p.useCallback(() => N(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => k((x) => x + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => k((x) => x - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        pe.div,
        {
          tabIndex: w || I === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: ee(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: ee(e.onFocus, (x) => {
            const P = !R.current;
            if (x.target === x.currentTarget && P && !w) {
              const C = new CustomEvent(So, Ag);
              if (x.currentTarget.dispatchEvent(C), !C.defaultPrevented) {
                const E = b().filter((A) => A.focusable), T = E.find((A) => A.active), $ = E.find((A) => A.id === g), z = [T, $, ...E].filter(
                  Boolean
                ).map((A) => A.ref.current);
                Ql(z, d);
              }
            }
            R.current = !1;
          }),
          onBlur: ee(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), Zl = "RovingFocusGroupItem", Jl = p.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = Pt(), c = s || l, d = Tg(Zl, n), u = d.currentTabStopId === c, h = Yl(n), { onFocusableItemAdd: m, onFocusableItemRemove: v, currentTabStopId: g } = d, y = Eg();
    return st(() => {
      if (!(!y || !r))
        return m(), () => v();
    }, [y, r, m, v]), p.useEffect(() => {
      if (!(y || !r))
        return m(), () => v();
    }, [y, r, m, v]), /* @__PURE__ */ f(
      jo.ItemSlot,
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
            onMouseDown: ee(e.onMouseDown, (w) => {
              r ? d.onItemFocus(c) : w.preventDefault();
            }),
            onFocus: ee(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: ee(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const N = $g(w, d.orientation, d.dir);
              if (N !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let b = h().filter((R) => R.focusable).map((R) => R.ref.current);
                if (N === "last") b.reverse();
                else if (N === "prev" || N === "next") {
                  N === "prev" && b.reverse();
                  const R = b.indexOf(w.currentTarget);
                  b = d.loop ? Bg(b, R + 1) : b.slice(R + 1);
                }
                setTimeout(() => Ql(b));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: u, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }
);
Jl.displayName = Zl;
var Fg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Lg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $g(e, t, n) {
  const r = Lg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Fg[r];
}
function Ql(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Bg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var zg = Xl, Hg = Jl, Kg = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), mr = {}, No = 0, ec = function(e) {
  return e && (e.host || ec(e.parentNode));
}, Gg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ec(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Wg = function(e, t, n, r) {
  var o = Gg(t, Array.isArray(e) ? e : [e]);
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
          var m = h.getAttribute(r), v = m !== null && m !== "false", g = (nn.get(h) || 0) + 1, y = (s.get(h) || 0) + 1;
          nn.set(h, g), s.set(h, y), i.push(h), g === 1 && v && hr.set(h, !0), y === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), a.clear(), No++, function() {
    i.forEach(function(u) {
      var h = nn.get(u) - 1, m = s.get(u) - 1;
      nn.set(u, h), s.set(u, m), h || (hr.has(u) || u.removeAttribute(r), hr.delete(u)), m || u.removeAttribute(n);
    }), No--, No || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), mr = {});
  };
}, tc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Kg(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Wg(r, o, n, "aria-hidden")) : function() {
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
function nc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jg(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var yr = "right-scroll-bar-position", wr = "width-before-scroll-bar", Vg = "with-scroll-bars-hidden", Ug = "--removed-body-scroll-bar-size";
function ko(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yg(e, t) {
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
var qg = typeof window < "u" ? p.useLayoutEffect : p.useEffect, ta = /* @__PURE__ */ new WeakMap();
function Xg(e, t) {
  var n = Yg(null, function(r) {
    return e.forEach(function(o) {
      return ko(o, r);
    });
  });
  return qg(function() {
    var r = ta.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || ko(a, null);
      }), s.forEach(function(a) {
        o.has(a) || ko(a, i);
      });
    }
    ta.set(n, e);
  }, [e]), n;
}
function Zg(e) {
  return e;
}
function Jg(e, t) {
  t === void 0 && (t = Zg);
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
function Qg(e) {
  e === void 0 && (e = {});
  var t = Jg(null);
  return t.options = rt({ async: !0, ssr: !1 }, e), t;
}
var rc = function(e) {
  var t = e.sideCar, n = nc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, rt({}, n));
};
rc.isSideCarExport = !0;
function ev(e, t) {
  return e.useMedium(t), rc;
}
var oc = Qg(), Ro = function() {
}, qr = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: Ro,
    onWheelCapture: Ro,
    onTouchMoveCapture: Ro
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, h = e.sideCar, m = e.noRelative, v = e.noIsolation, g = e.inert, y = e.allowPinchZoom, w = e.as, N = w === void 0 ? "div" : w, S = e.gapMode, b = nc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, I = Xg([n, t]), k = rt(rt({}, b), o);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(R, { sideCar: oc, removeScrollBar: c, shards: u, noRelative: m, noIsolation: v, inert: g, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: S }),
    i ? p.cloneElement(p.Children.only(a), rt(rt({}, k), { ref: I })) : p.createElement(N, rt({}, k, { className: l, ref: I }), a)
  );
});
qr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qr.classNames = {
  fullWidth: wr,
  zeroRight: yr
};
var tv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = tv();
  return t && e.setAttribute("nonce", t), e;
}
function rv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ov(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var sv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = nv()) && (rv(t, n), ov(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, iv = function() {
  var e = sv();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sc = function() {
  var e = iv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, av = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Io = function(e) {
  return parseInt(e || "", 10) || 0;
}, lv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Io(n), Io(r), Io(o)];
}, cv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return av;
  var t = lv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, uv = sc(), ln = "data-scroll-locked", dv = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Vg, ` {
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
    `).concat(Ug, ": ").concat(a, `px;
  }
`);
}, na = function() {
  var e = parseInt(document.body.getAttribute(ln) || "0", 10);
  return isFinite(e) ? e : 0;
}, fv = function() {
  p.useEffect(function() {
    return document.body.setAttribute(ln, (na() + 1).toString()), function() {
      var e = na() - 1;
      e <= 0 ? document.body.removeAttribute(ln) : document.body.setAttribute(ln, e.toString());
    };
  }, []);
}, hv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  fv();
  var s = p.useMemo(function() {
    return cv(o);
  }, [o]);
  return p.createElement(uv, { styles: dv(s, !t, o, n ? "" : "!important") });
}, Vo = !1;
if (typeof window < "u")
  try {
    var pr = Object.defineProperty({}, "passive", {
      get: function() {
        return Vo = !0, !0;
      }
    });
    window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
  } catch {
    Vo = !1;
  }
var rn = Vo ? { passive: !1 } : !1, mv = function(e) {
  return e.tagName === "TEXTAREA";
}, ic = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !mv(e) && n[t] === "visible")
  );
}, pv = function(e) {
  return ic(e, "overflowY");
}, gv = function(e) {
  return ic(e, "overflowX");
}, ra = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ac(e, r);
    if (o) {
      var s = lc(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, vv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, bv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ac = function(e, t) {
  return e === "v" ? pv(t) : gv(t);
}, lc = function(e, t) {
  return e === "v" ? vv(t) : bv(t);
}, yv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, wv = function(e, t, n, r, o) {
  var s = yv(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, u = 0, h = 0;
  do {
    if (!a)
      break;
    var m = lc(e, a), v = m[0], g = m[1], y = m[2], w = g - y - s * v;
    (v || w) && ac(e, a) && (u += w, h += v);
    var N = a.parentNode;
    a = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(h) < 1) && (c = !0), c;
}, gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, oa = function(e) {
  return [e.deltaX, e.deltaY];
}, sa = function(e) {
  return e && "current" in e ? e.current : e;
}, xv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Cv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Sv = 0, on = [];
function Nv(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(Sv++)[0], s = p.useState(sc)[0], i = p.useRef(e);
  p.useEffect(function() {
    i.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = jg([e.lockRef.current], (e.shards || []).map(sa), !0).filter(Boolean);
      return g.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = p.useCallback(function(g, y) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = gr(g), N = n.current, S = "deltaX" in g ? g.deltaX : N[0] - w[0], b = "deltaY" in g ? g.deltaY : N[1] - w[1], R, I = g.target, k = Math.abs(S) > Math.abs(b) ? "h" : "v";
    if ("touches" in g && k === "h" && I.type === "range")
      return !1;
    var x = window.getSelection(), P = x && x.anchorNode, C = P ? P === I || P.contains(I) : !1;
    if (C)
      return !1;
    var E = ra(k, I);
    if (!E)
      return !0;
    if (E ? R = k : (R = k === "v" ? "h" : "v", E = ra(k, I)), !E)
      return !1;
    if (!r.current && "changedTouches" in g && (S || b) && (r.current = R), !R)
      return !0;
    var T = r.current || R;
    return wv(T, y, g, T === "h" ? S : b);
  }, []), l = p.useCallback(function(g) {
    var y = g;
    if (!(!on.length || on[on.length - 1] !== s)) {
      var w = "deltaY" in y ? oa(y) : gr(y), N = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && xv(R.delta, w);
      })[0];
      if (N && N.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!N) {
        var S = (i.current.shards || []).map(sa).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), b = S.length > 0 ? a(y, S[0]) : !i.current.noIsolation;
        b && y.cancelable && y.preventDefault();
      }
    }
  }, []), c = p.useCallback(function(g, y, w, N) {
    var S = { name: g, delta: y, target: w, should: N, shadowParent: kv(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== S;
      });
    }, 1);
  }, []), d = p.useCallback(function(g) {
    n.current = gr(g), r.current = void 0;
  }, []), u = p.useCallback(function(g) {
    c(g.type, oa(g), g.target, a(g, e.lockRef.current));
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
    v ? p.createElement(s, { styles: Cv(o) }) : null,
    m ? p.createElement(hv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function kv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Rv = ev(oc, Nv);
var Es = p.forwardRef(function(e, t) {
  return p.createElement(qr, rt({}, e, { ref: t, sideCar: Rv }));
});
Es.classNames = qr.classNames;
var Uo = ["Enter", " "], Iv = ["ArrowDown", "PageUp", "Home"], cc = ["ArrowUp", "PageDown", "End"], Pv = [...Iv, ...cc], Ev = {
  ltr: [...Uo, "ArrowRight"],
  rtl: [...Uo, "ArrowLeft"]
}, Av = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Kn = "Menu", [Fn, Dv, Mv] = hs(Kn), [Yt, uc] = gt(Kn, [
  Mv,
  $l,
  ql
]), Gn = $l(), dc = ql(), [fc, Lt] = Yt(Kn), [Ov, Wn] = Yt(Kn), hc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = Gn(t), [l, c] = p.useState(null), d = p.useRef(!1), u = it(s), h = ms(o);
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
  }, [n, u]), /* @__PURE__ */ f(Vl, { ...a, children: /* @__PURE__ */ f(
    fc,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ f(
        Ov,
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
hc.displayName = Kn;
var Tv = "MenuAnchor", As = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gn(n);
    return /* @__PURE__ */ f(bg, { ...o, ...r, ref: t });
  }
);
As.displayName = Tv;
var Ds = "MenuPortal", [_v, mc] = Yt(Ds, {
  forceMount: void 0
}), pc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Lt(Ds, t);
  return /* @__PURE__ */ f(_v, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Ft, { present: n || s.open, children: /* @__PURE__ */ f(Ps, { asChild: !0, container: o, children: r }) }) });
};
pc.displayName = Ds;
var We = "MenuContent", [Fv, Ms] = Yt(We), gc = p.forwardRef(
  (e, t) => {
    const n = mc(We, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lt(We, e.__scopeMenu), i = Wn(We, e.__scopeMenu);
    return /* @__PURE__ */ f(Fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Ft, { present: r || s.open, children: /* @__PURE__ */ f(Fn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f(Lv, { ...o, ref: t }) : /* @__PURE__ */ f($v, { ...o, ref: t }) }) }) });
  }
), Lv = p.forwardRef(
  (e, t) => {
    const n = Lt(We, e.__scopeMenu), r = p.useRef(null), o = me(t, r);
    return p.useEffect(() => {
      const s = r.current;
      if (s) return tc(s);
    }, []), /* @__PURE__ */ f(
      Os,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ee(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), $v = p.forwardRef((e, t) => {
  const n = Lt(We, e.__scopeMenu);
  return /* @__PURE__ */ f(
    Os,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Bv = /* @__PURE__ */ On("MenuContent.ScrollLock"), Os = p.forwardRef(
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
    } = e, y = Lt(We, n), w = Wn(We, n), N = Gn(n), S = dc(n), b = Dv(n), [R, I] = p.useState(null), k = p.useRef(null), x = me(t, k, y.onContentChange), P = p.useRef(0), C = p.useRef(""), E = p.useRef(0), T = p.useRef(null), $ = p.useRef("right"), _ = p.useRef(0), z = v ? Es : p.Fragment, A = v ? { as: Bv, allowPinchZoom: !0 } : void 0, D = (L) => {
      const M = C.current + L, K = b().filter((G) => !G.disabled), V = document.activeElement, U = K.find((G) => G.ref.current === V)?.textValue, ne = K.map((G) => G.textValue), re = Zv(ne, M, U), H = K.find((G) => G.textValue === re)?.ref.current;
      (function G(X) {
        C.current = X, window.clearTimeout(P.current), X !== "" && (P.current = window.setTimeout(() => G(""), 1e3));
      })(M), H && setTimeout(() => H.focus());
    };
    p.useEffect(() => () => window.clearTimeout(P.current), []), Sl();
    const B = p.useCallback((L) => $.current === T.current?.side && Qv(L, T.current?.area), []);
    return /* @__PURE__ */ f(
      Fv,
      {
        scope: n,
        searchRef: C,
        onItemEnter: p.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        onItemLeave: p.useCallback(
          (L) => {
            B(L) || (k.current?.focus(), I(null));
          },
          [B]
        ),
        onTriggerLeave: p.useCallback(
          (L) => {
            B(L) && L.preventDefault();
          },
          [B]
        ),
        pointerGraceTimerRef: E,
        onPointerGraceIntentChange: p.useCallback((L) => {
          T.current = L;
        }, []),
        children: /* @__PURE__ */ f(z, { ...A, children: /* @__PURE__ */ f(
          vs,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ee(s, (L) => {
              L.preventDefault(), k.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f(
              gs,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: h,
                onDismiss: m,
                children: /* @__PURE__ */ f(
                  zg,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: I,
                    onEntryFocus: ee(l, (L) => {
                      w.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      yg,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Oc(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...N,
                        ...g,
                        ref: x,
                        style: { outline: "none", ...g.style },
                        onKeyDown: ee(g.onKeyDown, (L) => {
                          const K = L.target.closest("[data-radix-menu-content]") === L.currentTarget, V = L.ctrlKey || L.altKey || L.metaKey, U = L.key.length === 1;
                          K && (L.key === "Tab" && L.preventDefault(), !V && U && D(L.key));
                          const ne = k.current;
                          if (L.target !== ne || !Pv.includes(L.key)) return;
                          L.preventDefault();
                          const H = b().filter((G) => !G.disabled).map((G) => G.ref.current);
                          cc.includes(L.key) && H.reverse(), qv(H);
                        }),
                        onBlur: ee(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(P.current), C.current = "");
                        }),
                        onPointerMove: ee(
                          e.onPointerMove,
                          Ln((L) => {
                            const M = L.target, K = _.current !== L.clientX;
                            if (L.currentTarget.contains(M) && K) {
                              const V = L.clientX > _.current ? "right" : "left";
                              $.current = V, _.current = L.clientX;
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
gc.displayName = We;
var zv = "MenuGroup", Ts = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(pe.div, { role: "group", ...r, ref: t });
  }
);
Ts.displayName = zv;
var Hv = "MenuLabel", vc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(pe.div, { ...r, ref: t });
  }
);
vc.displayName = Hv;
var Mr = "MenuItem", ia = "menu.itemSelect", Xr = p.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = p.useRef(null), i = Wn(Mr, e.__scopeMenu), a = Ms(Mr, e.__scopeMenu), l = me(t, s), c = p.useRef(!1), d = () => {
      const u = s.current;
      if (!n && u) {
        const h = new CustomEvent(ia, { bubbles: !0, cancelable: !0 });
        u.addEventListener(ia, (m) => r?.(m), { once: !0 }), xl(u, h), h.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f(
      bc,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: ee(e.onClick, d),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), c.current = !0;
        },
        onPointerUp: ee(e.onPointerUp, (u) => {
          c.current || u.currentTarget?.click();
        }),
        onKeyDown: ee(e.onKeyDown, (u) => {
          n || u.target !== u.currentTarget || a.searchRef.current !== "" && u.key === " " || Uo.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Xr.displayName = Mr;
var bc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = Ms(Mr, n), a = dc(n), l = p.useRef(null), c = me(t, l), [d, u] = p.useState(!1), [h, m] = p.useState("");
    return p.useEffect(() => {
      const v = l.current;
      v && m((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ f(
      Fn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ f(Hg, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ f(
          pe.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: ee(
              e.onPointerMove,
              Ln((v) => {
                r ? i.onItemLeave(v) : (i.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ee(
              e.onPointerLeave,
              Ln((v) => i.onItemLeave(v))
            ),
            onFocus: ee(e.onFocus, () => u(!0)),
            onBlur: ee(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Kv = "MenuCheckboxItem", yc = p.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f(Nc, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f(
      Xr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Or(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ls(n),
        onSelect: ee(
          o.onSelect,
          () => r?.(Or(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
yc.displayName = Kv;
var wc = "MenuRadioGroup", [Gv, Wv] = Yt(
  wc,
  { value: void 0, onValueChange: () => {
  } }
), xc = p.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = it(r);
    return /* @__PURE__ */ f(Gv, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ f(Ts, { ...o, ref: t }) });
  }
);
xc.displayName = wc;
var Cc = "MenuRadioItem", Sc = p.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Wv(Cc, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ f(Nc, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ f(
      Xr,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Ls(s),
        onSelect: ee(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sc.displayName = Cc;
var _s = "MenuItemIndicator", [Nc, jv] = Yt(
  _s,
  { checked: !1 }
), kc = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = jv(_s, n);
    return /* @__PURE__ */ f(
      Ft,
      {
        present: r || Or(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ f(
          pe.span,
          {
            ...o,
            ref: t,
            "data-state": Ls(s.checked)
          }
        )
      }
    );
  }
);
kc.displayName = _s;
var Vv = "MenuSeparator", Rc = p.forwardRef(
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
Rc.displayName = Vv;
var Uv = "MenuArrow", Ic = p.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Gn(n);
    return /* @__PURE__ */ f(wg, { ...o, ...r, ref: t });
  }
);
Ic.displayName = Uv;
var Fs = "MenuSub", [Yv, Pc] = Yt(Fs), Ec = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = Lt(Fs, t), i = Gn(t), [a, l] = p.useState(null), [c, d] = p.useState(null), u = it(o);
  return p.useEffect(() => (s.open === !1 && u(!1), () => u(!1)), [s.open, u]), /* @__PURE__ */ f(Vl, { ...i, children: /* @__PURE__ */ f(
    fc,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ f(
        Yv,
        {
          scope: t,
          contentId: Pt(),
          triggerId: Pt(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Ec.displayName = Fs;
var Rn = "MenuSubTrigger", Ac = p.forwardRef(
  (e, t) => {
    const n = Lt(Rn, e.__scopeMenu), r = Wn(Rn, e.__scopeMenu), o = Pc(Rn, e.__scopeMenu), s = Ms(Rn, e.__scopeMenu), i = p.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s, c = { __scopeMenu: e.__scopeMenu }, d = p.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    p.useEffect(() => d, [d]), p.useEffect(() => {
      const h = a.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [a, l]);
    const u = me(t, o.onTriggerChange);
    return /* @__PURE__ */ f(As, { asChild: !0, ...c, children: /* @__PURE__ */ f(
      bc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? o.contentId : void 0,
        "data-state": Oc(n.open),
        ...e,
        ref: u,
        onClick: (h) => {
          e.onClick?.(h), !(e.disabled || h.defaultPrevented) && (h.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ee(
          e.onPointerMove,
          Ln((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: ee(
          e.onPointerLeave,
          Ln((h) => {
            d();
            const m = n.content?.getBoundingClientRect();
            if (m) {
              const v = n.content?.dataset.side, g = v === "right", y = g ? -5 : 5, w = m[g ? "left" : "right"], N = m[g ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + y, y: h.clientY },
                  { x: w, y: m.top },
                  { x: N, y: m.top },
                  { x: N, y: m.bottom },
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
        onKeyDown: ee(e.onKeyDown, (h) => {
          e.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || Ev[r.dir].includes(h.key) && (n.onOpenChange(!0), n.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }
);
Ac.displayName = Rn;
var Dc = "MenuSubContent", Mc = p.forwardRef(
  (e, t) => {
    const n = mc(We, e.__scopeMenu), { forceMount: r = n.forceMount, align: o = "start", ...s } = e, i = Lt(We, e.__scopeMenu), a = Wn(We, e.__scopeMenu), l = Pc(Dc, e.__scopeMenu), c = p.useRef(null), d = me(t, c);
    return /* @__PURE__ */ f(Fn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Ft, { present: r || i.open, children: /* @__PURE__ */ f(Fn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(
      Os,
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
        onFocusOutside: ee(e.onFocusOutside, (u) => {
          u.target !== l.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ee(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: ee(e.onKeyDown, (u) => {
          const h = u.currentTarget.contains(u.target), m = Av[a.dir].includes(u.key);
          h && m && (i.onOpenChange(!1), l.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Mc.displayName = Dc;
function Oc(e) {
  return e ? "open" : "closed";
}
function Or(e) {
  return e === "indeterminate";
}
function Ls(e) {
  return Or(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function qv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Xv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Zv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Xv(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Jv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, u = l.x, h = l.y;
    d > r != h > r && n < (u - c) * (r - d) / (h - d) + c && (o = !o);
  }
  return o;
}
function Qv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Jv(n, t);
}
function Ln(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var eb = hc, tb = As, nb = pc, rb = gc, ob = Ts, sb = vc, ib = Xr, ab = yc, lb = xc, cb = Sc, ub = kc, db = Rc, fb = Ic, hb = Ec, mb = Ac, pb = Mc, Zr = "DropdownMenu", [gb] = gt(
  Zr,
  [uc]
), De = uc(), [vb, Tc] = gb(Zr), _c = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = De(t), c = p.useRef(null), [d, u] = fn({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Zr
  });
  return /* @__PURE__ */ f(
    vb,
    {
      scope: t,
      triggerId: Pt(),
      triggerRef: c,
      contentId: Pt(),
      open: d,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((h) => !h), [u]),
      modal: a,
      children: /* @__PURE__ */ f(eb, { ...l, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
};
_c.displayName = Zr;
var Fc = "DropdownMenuTrigger", Lc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Tc(Fc, n), i = De(n), a = me(t, s.triggerRef);
    return /* @__PURE__ */ f(tb, { asChild: !0, ...i, children: /* @__PURE__ */ f(
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
        onPointerDown: ee(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: ee(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
Lc.displayName = Fc;
var bb = "DropdownMenuPortal", $c = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = De(t);
  return /* @__PURE__ */ f(nb, { ...r, ...n });
};
$c.displayName = bb;
var Bc = "DropdownMenuContent", zc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Tc(Bc, n), s = De(n), i = p.useRef(!1);
    return /* @__PURE__ */ f(
      rb,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (a) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: ee(e.onInteractOutside, (a) => {
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
zc.displayName = Bc;
var yb = "DropdownMenuGroup", wb = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(ob, { ...o, ...r, ref: t });
  }
);
wb.displayName = yb;
var xb = "DropdownMenuLabel", Hc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(sb, { ...o, ...r, ref: t });
  }
);
Hc.displayName = xb;
var Cb = "DropdownMenuItem", Kc = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(ib, { ...o, ...r, ref: t });
  }
);
Kc.displayName = Cb;
var Sb = "DropdownMenuCheckboxItem", Gc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(ab, { ...o, ...r, ref: t });
});
Gc.displayName = Sb;
var Nb = "DropdownMenuRadioGroup", kb = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(lb, { ...o, ...r, ref: t });
});
kb.displayName = Nb;
var Rb = "DropdownMenuRadioItem", Wc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(cb, { ...o, ...r, ref: t });
});
Wc.displayName = Rb;
var Ib = "DropdownMenuItemIndicator", Pb = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(ub, { ...o, ...r, ref: t });
});
Pb.displayName = Ib;
var Eb = "DropdownMenuSeparator", jc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(db, { ...o, ...r, ref: t });
});
jc.displayName = Eb;
var Ab = "DropdownMenuArrow", Db = p.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
    return /* @__PURE__ */ f(fb, { ...o, ...r, ref: t });
  }
);
Db.displayName = Ab;
var Mb = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = De(t), [a, l] = fn({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ f(hb, { ...i, open: a, onOpenChange: l, children: n });
}, Ob = "DropdownMenuSubTrigger", Vc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(mb, { ...o, ...r, ref: t });
});
Vc.displayName = Ob;
var Tb = "DropdownMenuSubContent", Uc = p.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = De(n);
  return /* @__PURE__ */ f(
    pb,
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
Uc.displayName = Tb;
var _b = _c, Fb = Lc, Lb = $c, Yc = zc, qc = Hc, Xc = Kc, Zc = Gc, Jc = Wc, Qc = jc, $b = Mb, eu = Vc, tu = Uc;
const jn = _b, Vn = Fb, aa = $b, nu = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f(
  eu,
  {
    ref: o,
    className: ce(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
nu.displayName = eu.displayName;
const Yo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  tu,
  {
    ref: n,
    className: ce(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Yo.displayName = tu.displayName;
const pn = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = us();
  return /* @__PURE__ */ f(Lb, { container: o || void 0, children: /* @__PURE__ */ f(
    Yc,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: ce(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
pn.displayName = Yc.displayName;
const $e = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  Xc,
  {
    ref: r,
    className: ce(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$e.displayName = Xc.displayName;
const Bb = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f(
  Zc,
  {
    ref: o,
    className: ce(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
Bb.displayName = Zc.displayName;
const zb = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
  Jc,
  {
    ref: r,
    className: ce(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
zb.displayName = Jc.displayName;
const ru = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  qc,
  {
    ref: r,
    className: ce(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
ru.displayName = qc.displayName;
const Wt = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qc,
  {
    ref: n,
    className: ce("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
Wt.displayName = Qc.displayName;
const Hb = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, $s = (e, t) => {
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
        className: ce("pointer-events-none absolute inset-0 z-10", t),
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
      className: ce(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, Bs = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ f("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ F(jn, { modal: !1, children: [
    /* @__PURE__ */ f(Vn, { asChild: !0, children: /* @__PURE__ */ f(
      Ae,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ f(pl, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ f(pn, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ F(
      $e,
      {
        onSelect: (s) => Hb(s, o),
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
}, zs = (e = []) => {
  const t = fs();
  return e.length > 0 && !t;
}, Kb = ({
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
  const c = xe(Ot), d = zs(o), u = fl(
    {
      ...a,
      pageWidth: a?.pageWidth ?? c?.page?.width ?? 210,
      bleed: a?.bleed ?? c?.page?.bleed ?? 0
    },
    "bleed"
  ), h = s ? dn({ dialog: s }, c) : {};
  return p.useMemo(() => {
    if (!i) return h;
    const m = { ...h, ...i };
    return (h.className || i.className) && (m.className = `${h.className || ""} ${i.className || ""}`.trim()), Object.keys(h).forEach((v) => {
      const g = h[v], y = i[v];
      v.startsWith("on") && typeof g == "function" && typeof y == "function" && (m[v] = (w) => {
        g(w), y(w);
      });
    }), m;
  }, [h, i]), /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(ls, { ...a, dialog: s, children: [
      $s(n, r),
      l
    ] }),
    Bs(o, d, u)
  ] });
};
function Hs(e) {
  const t = xe(Ot), n = is({
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
  } = e, y = (_) => `${_}mm`, w = () => as({ width: d, left: h, right: m }, o, r, 2), N = () => {
    let _ = u;
    return u ? !v && !g && (_ += r) : (_ = s, v || (_ += r), g || (_ += r), (v || g) && (_ -= (v ?? 0) + (g ?? 0))), _;
  }, S = w(), b = N(), R = (_) => _ !== void 0 ? y(_) : void 0, I = (_) => Object.fromEntries(
    Object.entries(_).filter(([z, A]) => A !== void 0)
  ), k = h > 0 ? h + r : 0, x = v > 0 ? v + r : 0, P = g > 0 ? g + r : 0, C = -1 * o + k, E = v > 0 && g > 0, T = I({
    backgroundColor: c,
    width: R(S),
    ...E ? { height: R(b) } : {},
    left: R(k),
    top: R(x),
    bottom: R(P)
  }), $ = I({
    width: R(S),
    ...E ? { height: R(b) } : {},
    left: R(C),
    top: R(x),
    bottom: R(P)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: l == "end" ? $ : T, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ F("div", { className: "uhuu-image-inner", ...dn(e, t), children: [
    /* @__PURE__ */ f(
      "img",
      {
        className: ce("cover-image object-cover object-center", a),
        src: i || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const Gb = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: s
}) => {
  const i = xe(Ot), a = zs(n), l = fl(
    {
      ...o,
      pageWidth: o?.pageWidth ?? i?.page?.width ?? 210,
      bleed: o?.bleed ?? i?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(Hs, { ...o, dialog: r, children: [
      $s(e, t),
      s
    ] }),
    Bs(n, a, l)
  ] });
}, Wb = ({
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
  const y = xe(Ot), w = c ? dn({ dialog: c }, y) : {}, N = zs(l), S = is({
    onError: (C) => {
      g?.(C), m?.onError?.(C);
    }
  }), b = p.useMemo(() => {
    if (!d) return w;
    const C = { ...w, ...d };
    return (w.className || d.className) && (C.className = ce(w.className, d.className)), Object.keys(w).forEach((E) => {
      const T = w[E], $ = d[E];
      E.startsWith("on") && typeof T == "function" && typeof $ == "function" && (C[E] = (_) => {
        T(_), $(_);
      });
    }), C;
  }, [w, d]), R = () => {
    const C = m?.className, E = m?.style, T = m?.src ?? e, $ = m?.alt ?? t, _ = {
      ...m,
      src: T,
      alt: $,
      className: ce("h-full w-full object-cover", r, C),
      style: { ...s, ...E }
    };
    return v ? v(_) : T ? /* @__PURE__ */ f("img", { ..._, onError: S }) : u ?? null;
  }, I = b["data-uhuu"], k = p.Children.toArray(h).some((C) => p.isValidElement(C) ? C.type === Hs || C.type === ls : !1);
  k && delete b["data-uhuu"];
  const x = p.Children.map(h, (C) => p.isValidElement(C) ? p.cloneElement(C, { dataUhuu: I }) : C);
  return /* @__PURE__ */ F("div", { className: ce(k ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ F("div", { className: "relative h-full w-full", ...b, children: [
      R(),
      x,
      $s(i, a)
    ] }),
    Bs(l, N)
  ] });
}, Tx = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = J(() => {
    const { annotation: A, dialog: D, overlaySvg: B, options: L, src: M } = e;
    if (!A && !D)
      return {
        computedOverlaySvg: B,
        computedOptions: L,
        computedDirectDialog: void 0
      };
    const K = A?.value || {}, V = B ?? K.annotationSvg ?? "", U = [];
    if (A) {
      if (D) {
        const fe = {
          ...D
          // Spread everything (path, type, ratio, etc.)
        };
        if (D.type === "satellite") {
          const { path: ge, type: ae, ...Ie } = D;
          fe.config = {
            ...Ie,
            path: "image"
          }, fe.path = ge, fe.type = ae;
        }
        U.push({
          id: "edit",
          label: "Edit image",
          dialog: fe
        });
      }
      const H = Array.isArray(K.annotations) ? K.annotations : [], { path: G, value: X, annotations: q, ...Y } = A, te = {
        path: A.path,
        type: "annotation",
        image: M,
        annotations: H,
        ...Y
        // Spread extra config (visualGallery, etc.)
      };
      U.push({
        id: "annotate",
        label: "Annotate",
        dialog: te
      });
    }
    const ne = L ? [...U, ...L] : U;
    let re;
    if (D) {
      const H = {
        ...D
        // Spread everything (path, type, ratio, etc.)
      };
      if (D.type === "satellite") {
        const { path: G, type: X, ...q } = D;
        H.config = {
          ...q,
          path: "image"
        }, H.path = G, H.type = X;
      }
      re = H;
    }
    return {
      computedOverlaySvg: V,
      computedOptions: ne.length > 0 ? ne : void 0,
      computedDirectDialog: re
    };
  }, [e.annotation, e.dialog, e.overlaySvg, e.options, e.src]), o = J(() => e.mode ? e.mode : e.side !== void 0 ? "spread" : e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto", [e.mode, e.side, e.width, e.height, e.left, e.right, e.top, e.bottom]), s = o === "auto" || // Auto mode always uses ImageWithOptions
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
    height: y,
    left: w,
    right: N,
    top: S,
    bottom: b,
    pageWidth: R,
    pageHeight: I,
    bleed: k,
    overlayClassName: x,
    dialogProps: P,
    placeholder: C,
    children: E,
    imageProps: T,
    renderImage: $,
    onError: _
  } = e, z = {
    src: l,
    backgroundColor: v,
    width: g,
    height: y,
    left: w,
    right: N,
    top: S,
    bottom: b,
    pageWidth: R,
    pageHeight: I,
    bleed: k,
    imageClassName: u,
    onError: _
  };
  if (o === "auto")
    return /* @__PURE__ */ f(
      Wb,
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
        placeholder: C,
        children: E,
        imageProps: T,
        renderImage: $,
        onError: _
      }
    );
  if (o === "spread") {
    const A = { ...z, side: a, imageClassName: u };
    return s && (t || n?.length || r) ? /* @__PURE__ */ f(
      Gb,
      {
        className: d,
        style: h,
        overlaySvg: t,
        overlayClassName: x,
        options: n,
        dialog: r,
        dialogProps: P,
        spreadProps: A,
        children: E
      }
    ) : /* @__PURE__ */ f(Hs, { ...A });
  }
  return s && (t || n?.length || r) ? /* @__PURE__ */ f(
    Kb,
    {
      className: d,
      style: h,
      overlaySvg: t,
      overlayClassName: x,
      options: n,
      dialog: r,
      dialogProps: P,
      bleedProps: z,
      children: E
    }
  ) : /* @__PURE__ */ f(ls, { ...z });
}, qt = "uhuu_page_editor";
function Fe(e) {
  return e.kind === "group";
}
function jb(e) {
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
function Vb(e) {
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
  return jb(e).length;
}
function Ub(e) {
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
function Yb(e, t) {
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
function Ks(e) {
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
function ou(e, t = qt) {
  const n = Ks(e);
  return {
    key: t,
    items: n,
    totalPages: mt(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function qb(e, t = qt) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = Ks(n.items);
  return {
    key: t,
    items: r,
    totalPages: mt(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Xb(e, t, n = qt) {
  const r = ou(t, n);
  return { ...e ?? {}, [n]: r };
}
function su() {
  return Math.random().toString(36).slice(2, 11);
}
function iu(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? su() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function au(e, t, n) {
  const r = n?.repeatable ? su() : e;
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
function la(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function qo(e, t, n) {
  for (const r of t) {
    const o = la(r.start, n), s = la(r.end, n);
    if (e >= o && e <= s)
      return !0;
  }
  return !1;
}
function lu(e, t, n = 2) {
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
function Zb(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = mt(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, s = r === "custom" && t.ranges ? t.ranges : lu(r, n, o);
  if (s.length === 0)
    return [];
  const i = [];
  for (const a of e)
    if (Fe(a)) {
      const l = a.pages.filter((c) => c.pageNum && qo(c.pageNum, s, n));
      l.length > 0 && i.push({
        ...a,
        pages: l
      });
    } else
      a.pageNum && qo(a.pageNum, s, n) && i.push(a);
  return i;
}
function Jb(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, s = r === "custom" && n.ranges ? n.ranges : lu(r, t, o);
  return s.length === 0 ? !1 : qo(e, s, t);
}
function cu(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function Qb(e, t) {
  return t && Fe(t) ? t.id : e?.id ?? null;
}
function uu(e, t, n) {
  const r = Qb(t, n);
  return r ? {
    instanceId: r,
    integration: cu(e, r)
  } : { instanceId: null, integration: void 0 };
}
function du(e, t, n) {
  return uu(e, t, n).integration;
}
function ca(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function ey(e) {
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
function ty(e, t, n) {
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
function ny(e, t, n) {
  const r = ey(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: s } = r, i = cu(e, o) || {}, a = ty(
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
function Tr(e, t) {
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
function ry(e = qt) {
  return [e];
}
function oy(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function fu({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = qt
}) {
  const [o, s] = p.useState(e ?? {}), i = p.useRef(null), a = p.useRef(!1), l = p.useRef(null), c = p.useRef(0), d = p.useRef(!0), u = p.useCallback((x) => {
    try {
      return JSON.stringify(x);
    } catch {
      return String(x);
    }
  }, []), h = p.useMemo(() => ry(r), [r]), m = p.useCallback((x, P) => {
    if (!x) return null;
    const C = { ...x };
    return P.forEach((E) => {
      delete C[E];
    }), C;
  }, []);
  p.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (i.current = e, s(e));
      return;
    }
    if (a.current) {
      a.current = !1;
      const C = l.current !== null ? u(m(l.current, h)) : null, E = u(m(e, h));
      if (C !== null && C === E) {
        i.current = e;
        return;
      }
    }
    if (e === i.current)
      return;
    if (Date.now() - c.current < 500 && l.current !== null) {
      const C = m(e, h), E = m(l.current, h), T = C ? u(C) : null, $ = E ? u(E) : null;
      if (T && T === $) {
        l.current = null, i.current = e;
        return;
      }
    }
    i.current = e, s((C) => e ? oy(C, e, h) : C);
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
        const C = typeof x == "function" ? x(P) : x;
        let E = C;
        return C && typeof C == "object" && Object.keys(C).filter(
          ($) => $.startsWith("integrations.") || $ === "integrations"
        ).length > 0 && C.integrations && (E = C), l.current = E, c.current = Date.now(), queueMicrotask(() => v(E)), E;
      });
    },
    [v]
  ), y = p.useCallback(
    (x, P, C) => {
      g((E) => ({
        ...E ?? {},
        pages: {
          ...E?.pages ?? {},
          [x]: {
            ...E?.pages?.[x] ?? {},
            [P]: C
          }
        }
      }));
    },
    [g]
  ), w = p.useCallback(
    (x, P) => {
      g((C) => {
        const E = C?.integrations ?? {}, T = E[x], $ = typeof P == "function" ? P(T) : P;
        return {
          ...C ?? {},
          integrations: {
            ...E,
            [x]: $
          }
        };
      });
    },
    [g]
  ), N = p.useCallback(
    (x, P, C) => {
      w(x, (E) => ({
        ...E ?? {},
        [P]: C
      }));
    },
    [w]
  ), S = p.useCallback(
    (x) => {
      g((P) => {
        if (!P?.integrations || !P.integrations[x])
          return P;
        const { [x]: C, ...E } = P.integrations;
        return {
          ...P,
          integrations: Object.keys(E).length > 0 ? E : void 0
        };
      });
    },
    [g]
  ), b = p.useCallback(
    (x, P) => {
      g((C) => ny(C, x, P));
    },
    [g]
  ), R = p.useCallback(
    (x, P) => {
      const C = P ?? r;
      g((E) => Xb(E, x, C));
    },
    [g, r]
  ), I = p.useCallback(
    (x) => Tr(o, x),
    [o]
  ), k = p.useMemo(
    () => ({
      payload: o,
      setPayload: g,
      setPageOptionValue: y,
      setIntegrationPayload: w,
      setIntegrationPayloadValue: N,
      removeIntegrationPayload: S,
      updateIntegrationByDialogPath: b,
      mergePageEditorState: R,
      getPagePayload: I
    }),
    [
      o,
      g,
      y,
      w,
      N,
      S,
      b,
      R,
      I
    ]
  );
  return /* @__PURE__ */ f(Un.Provider, { value: k, children: n });
}
function sy(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function iy(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function ay(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (s) => {
      const i = t?.pages?.[s.id]?.[r];
      return i === void 0 ? sy(e) : e.type === "toggle" ? !!i : i;
    },
    onChange: (s, i) => {
      n(s, r, iy(e, i));
    }
  };
}
function ly(e) {
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
function cy(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function uy(e, t) {
  if (e === "two_pages")
    return cy(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function dy({
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
function fy(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function ua(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function hy(e) {
  let t = e;
  for (; t && t !== document.documentElement; ) {
    const n = window.getComputedStyle(t), r = n.overflowY, o = n.overflowX, s = (r === "auto" || r === "scroll") && t.scrollHeight > t.clientHeight, i = (o === "auto" || o === "scroll") && t.scrollWidth > t.clientWidth;
    if (s || i) return t;
    t = t.parentElement;
  }
  return document.scrollingElement;
}
const _r = Mt({ zoom: 100, scaleValue: 1, hideUI: !1 });
function my({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = xe(_r), o = de(null);
  return le(() => {
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
function py(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function gy(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const s = n.querySelector("[data-section-content]");
    return s ? [s] : [];
  })();
  if (!r.length) return null;
  const o = r.map(py).filter((s) => s !== null);
  return uy(t, o);
}
function Po({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: s, hideUI: i } = xe(_r), a = de(null), [l, c] = ie(0), [d, u] = ie(0);
  le(() => {
    if (a.current) {
      const w = () => {
        const S = a.current;
        if (S) {
          const b = S.style.transform;
          S.style.transform = "scale(1)";
          const R = S.scrollHeight, I = S.scrollWidth;
          S.style.transform = b, c(R), u(I);
        }
      };
      w();
      const N = new ResizeObserver(w);
      return N.observe(a.current), () => {
        N.disconnect();
      };
    }
  }, [e]);
  const h = l * s, m = Math.max(d * s, 150), v = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: g, origin: y } = v[o];
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
                  transformOrigin: y
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
function vy({
  children: e,
  className: t = "",
  defaultZoom: n = 100,
  minZoom: r = 25,
  maxZoom: o = 200,
  onAddPage: s,
  menuItems: i,
  hideUI: a,
  preview: l = "single_page",
  defaultZoomMode: c = "manual"
}) {
  const d = fs(), u = a ?? d, [h, m] = ie(n), [v, g] = ie(() => ly(c)), y = de(null), w = de(null), N = de(h), S = de({ clientX: 0, clientY: 0 });
  le(() => {
    N.current = h;
  }, [h]);
  const b = he(() => {
    if (v === "none" || !y.current || !w.current) return;
    const P = gy(w.current, l);
    if (!P) return;
    const C = y.current.getBoundingClientRect(), E = window.visualViewport, T = E?.width ?? window.innerWidth, $ = E?.height ?? window.innerHeight, _ = Math.min(C.width || T, T) - 32, z = $ - Math.max(C.top, 0) - 120, A = dy({
      mode: v,
      contentWidth: P.width,
      contentHeight: P.height,
      availableWidth: _,
      availableHeight: z,
      minZoom: r,
      maxZoom: o
    });
    A !== null && m((D) => Math.abs(D - A) < 0.01 ? D : A);
  }, [v, o, r, l]), R = (P) => {
    g(P);
  }, I = () => {
    const P = Math.min(h + 25, o);
    m(P), g("none");
  }, k = () => {
    const P = Math.max(h - 25, r);
    m(P), g("none");
  };
  le(() => {
    if (v === "none" || !y.current || !w.current) return;
    let P = 0;
    const C = () => {
      window.cancelAnimationFrame(P), P = window.requestAnimationFrame(b);
    }, E = new ResizeObserver(C);
    E.observe(y.current);
    const T = () => {
      w.current?.querySelectorAll("[data-section-content]").forEach((_) => {
        E.observe(_);
      });
    };
    T();
    const $ = new MutationObserver(() => {
      T(), C();
    });
    return $.observe(w.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", C), window.visualViewport?.addEventListener("resize", C), C(), () => {
      window.cancelAnimationFrame(P), E.disconnect(), $.disconnect(), window.removeEventListener("resize", C), window.visualViewport?.removeEventListener("resize", C);
    };
  }, [v, b]), le(() => {
    if (u) return;
    let P = null, C = null, E = null, T = null, $ = !1;
    const _ = () => {
      P = null;
      const D = E;
      if (E = null, D === null) return;
      const B = w.current, L = hy(y.current), M = B ? ua(B.getBoundingClientRect()) : null, K = M ? fy(M, S.current.clientX, S.current.clientY) : null, V = M && M.width > 0 ? (K.clientX - M.left) / M.width : 0, U = M && M.height > 0 ? (K.clientY - M.top) / M.height : 0;
      if (of(() => {
        m(D), g("none");
      }), !B || !L || !M || !K) return;
      const ne = document.documentElement, re = ne.style.overflowAnchor;
      ne.style.overflowAnchor = "none";
      const H = () => {
        const G = ua(B.getBoundingClientRect()), X = G.left + V * G.width - K.clientX, q = G.top + U * G.height - K.clientY;
        X === 0 && q === 0 || (L === ne || L === document.body || L === document.scrollingElement ? window.scrollBy({ left: X, top: q, behavior: "instant" }) : (L.scrollLeft += X, L.scrollTop += q));
      };
      H(), requestAnimationFrame(() => {
        H(), requestAnimationFrame(() => {
          H(), requestAnimationFrame(() => {
            H(), ne.style.overflowAnchor = re;
          });
        });
      });
    }, z = (D) => {
      if (!D.ctrlKey && !D.metaKey) return;
      D.preventDefault();
      const B = 16, L = D.deltaMode === 1 ? D.deltaY * B : D.deltaMode === 2 ? D.deltaY * B * 32 : D.deltaY, M = E ?? N.current, K = Math.min(Math.max(M * Math.pow(1.003, -L), r), o);
      S.current = { clientX: D.clientX, clientY: D.clientY }, !(K === M && E === null) && (E = K, P === null && (P = window.requestAnimationFrame(_)));
    }, A = () => {
      if (C = null, !$) {
        if (T = y.current, !T) {
          C = window.requestAnimationFrame(A);
          return;
        }
        T.addEventListener("wheel", z, { passive: !1 });
      }
    };
    return A(), () => {
      $ = !0, P !== null && window.cancelAnimationFrame(P), C !== null && window.cancelAnimationFrame(C), T?.removeEventListener("wheel", z);
    };
  }, [u, o, r]);
  const x = h / 100;
  return u ? /* @__PURE__ */ f(_r.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ f("div", { className: t, children: e }) }) : /* @__PURE__ */ f(_r.Provider, { value: { zoom: h, scaleValue: x, hideUI: !1 }, children: /* @__PURE__ */ F("div", { ref: y, className: `flex flex-col min-h-0 ${t}`, children: [
    /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      i,
      /* @__PURE__ */ f("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ F(jn, { modal: !1, children: [
        /* @__PURE__ */ f(Vn, { asChild: !0, children: /* @__PURE__ */ F(Ae, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(h),
          "%",
          /* @__PURE__ */ f(ml, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ F(pn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ F(
            $e,
            {
              onClick: () => R("width"),
              className: `cursor-pointer flex items-center ${v === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(fm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ F(
            $e,
            {
              onClick: () => R("height"),
              className: `cursor-pointer flex items-center ${v === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(mm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ F(
            $e,
            {
              onClick: () => R("both"),
              className: `cursor-pointer flex items-center ${v === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(tm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ f(Wt, { className: "my-1.5" }),
          /* @__PURE__ */ F("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (P) => P.stopPropagation(), children: [
            /* @__PURE__ */ f(
              Ae,
              {
                variant: "ghost",
                size: "sm",
                onClick: (P) => {
                  P.stopPropagation(), k();
                },
                disabled: h <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ f(ym, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ F("div", { className: "relative", children: [
              /* @__PURE__ */ f(
                "input",
                {
                  type: "number",
                  value: Math.round(h),
                  onChange: (P) => {
                    const C = Number.parseInt(P.target.value);
                    if (!isNaN(C)) {
                      const E = Math.min(Math.max(C, r), o);
                      m(E), g("none");
                    }
                  },
                  onFocus: (P) => P.target.select(),
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
                onClick: (P) => {
                  P.stopPropagation(), I();
                },
                disabled: h >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ f(vm, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f("div", { ref: w, style: { overflowAnchor: "none" }, children: /* @__PURE__ */ f("div", { className: l === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e }) }),
    /* @__PURE__ */ f("div", { className: "pb-16" })
  ] }) });
}
var Jr = "Dialog", [hu, mu] = gt(Jr), [by, Ze] = hu(Jr), Gs = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = p.useRef(null), l = p.useRef(null), [c, d] = fn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Jr
  });
  return /* @__PURE__ */ f(
    by,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Pt(),
      titleId: Pt(),
      descriptionId: Pt(),
      open: c,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((u) => !u), [d]),
      modal: i,
      children: n
    }
  );
};
Gs.displayName = Jr;
var pu = "DialogTrigger", gu = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(pu, n), s = me(t, o.triggerRef);
    return /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Vs(o.open),
        ...r,
        ref: s,
        onClick: ee(e.onClick, o.onOpenToggle)
      }
    );
  }
);
gu.displayName = pu;
var Ws = "DialogPortal", [yy, vu] = hu(Ws, {
  forceMount: void 0
}), js = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Ze(Ws, t);
  return /* @__PURE__ */ f(yy, { scope: t, forceMount: n, children: p.Children.map(r, (i) => /* @__PURE__ */ f(Ft, { present: n || s.open, children: /* @__PURE__ */ f(Ps, { asChild: !0, container: o, children: i }) })) });
};
js.displayName = Ws;
var Fr = "DialogOverlay", Qr = p.forwardRef(
  (e, t) => {
    const n = vu(Fr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze(Fr, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(Ft, { present: r || s.open, children: /* @__PURE__ */ f(xy, { ...o, ref: t }) }) : null;
  }
);
Qr.displayName = Fr;
var wy = /* @__PURE__ */ On("DialogOverlay.RemoveScroll"), xy = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Fr, n), s = Vm(), i = me(t, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Es, { as: wy, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        pe.div,
        {
          "data-state": Vs(o.open),
          ...r,
          ref: i,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), un = "DialogContent", eo = p.forwardRef(
  (e, t) => {
    const n = vu(un, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze(un, e.__scopeDialog);
    return /* @__PURE__ */ f(Ft, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(Cy, { ...o, ref: t }) : /* @__PURE__ */ f(Sy, { ...o, ref: t }) });
  }
);
eo.displayName = un;
var Cy = p.forwardRef(
  (e, t) => {
    const n = Ze(un, e.__scopeDialog), r = p.useRef(null), o = me(t, n.contentRef, r);
    return p.useEffect(() => {
      const s = r.current;
      if (s) return tc(s);
    }, []), /* @__PURE__ */ f(
      bu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: ee(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ee(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: ee(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Sy = p.forwardRef(
  (e, t) => {
    const n = Ze(un, e.__scopeDialog), r = p.useRef(!1), o = p.useRef(!1);
    return /* @__PURE__ */ f(
      bu,
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
), bu = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Ze(un, n);
    return Sl(), /* @__PURE__ */ f(Te, { children: /* @__PURE__ */ f(
      vs,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ f(
          gs,
          {
            role: "dialog",
            id: a.contentId,
            "aria-describedby": a.descriptionId,
            "aria-labelledby": a.titleId,
            "data-state": Vs(a.open),
            ...i,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => a.onOpenChange(!1)
          }
        )
      }
    ) });
  }
), yu = "DialogTitle", to = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(yu, n);
    return /* @__PURE__ */ f(pe.h2, { id: o.titleId, ...r, ref: t });
  }
);
to.displayName = yu;
var wu = "DialogDescription", no = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(wu, n);
    return /* @__PURE__ */ f(pe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
no.displayName = wu;
var xu = "DialogClose", ro = p.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(xu, n);
    return /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ee(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ro.displayName = xu;
function Vs(e) {
  return e ? "open" : "closed";
}
const Cu = Gs, Ny = js, Su = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qr,
  {
    className: ce(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Su.displayName = Qr.displayName;
const Us = p.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: s } = us();
  return /* @__PURE__ */ F(Ny, { container: s || void 0, children: [
    /* @__PURE__ */ f(Su, {}),
    /* @__PURE__ */ F(
      eo,
      {
        ref: o,
        className: ce(
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
          /* @__PURE__ */ F(ro, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ f(vl, { className: "h-4 w-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Us.displayName = eo.displayName;
const Ys = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: ce(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ys.displayName = "SheetHeader";
const Nu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: ce(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Nu.displayName = "SheetFooter";
const qs = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  to,
  {
    ref: n,
    className: ce("text-lg font-medium text-gray-900", e),
    ...t
  }
));
qs.displayName = to.displayName;
const Xs = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  no,
  {
    ref: n,
    className: ce("text-sm text-gray-500", e),
    ...t
  }
));
Xs.displayName = no.displayName;
function Zs(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: s
  } = e, i = Ta.resolveDimensions(r), a = i.width, l = i.height, c = a / l, d = o, u = s ?? Math.round(d / c), h = a * 3.779527559, m = l * 3.779527559;
  return (v, g, y) => {
    const w = v.strictPosition, N = w === "start" || w === "end";
    if (v.kind === "group") {
      const S = v.firstPageId, b = v.firstPageComponentKey ?? S, R = Tr(n, { id: S, componentKey: b }), I = v.firstPageComponent || (b ? t[b] : null), k = n?.integrations?.[v.id];
      return /* @__PURE__ */ F(
        "div",
        {
          className: `relative bg-white border transition-all ${y ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.id,
          children: [
            I ? /* @__PURE__ */ f(
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
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: b,
                        pagePayload: R,
                        componentKey: b,
                        integration: k,
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
            N && /* @__PURE__ */ F("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(Ho, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: v.label || v.id }) }) }) }),
            y && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const S = v.pageId, b = v.pageComponentKey ?? S, R = Tr(n, { id: S, componentKey: b }), I = v.pageComponent || (b ? t[b] : null), k = S ? du(n, { id: S }) : void 0;
      return /* @__PURE__ */ F(
        "div",
        {
          className: `relative bg-white border transition-all ${y ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.pageId,
          children: [
            I ? /* @__PURE__ */ f(
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
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: b,
                        pagePayload: R,
                        componentKey: b,
                        integration: k
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
            N && /* @__PURE__ */ F("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(Ho, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: v.pageLabel || `Page ${v.pageNum}` }) }) }) }),
            y && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function ky({
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
    const b = l.toLowerCase();
    return n.filter(
      (R) => (R.label || "").toLowerCase().includes(b) || R.id.toLowerCase().includes(b)
    );
  }, [n, l]), u = (b) => {
    t(!1), r(b);
  }, h = i.width || 210, m = i.height || 297, v = h / m, g = 200, y = Math.round(g / v), w = p.useMemo(() => o ? Zs({
    pageComponents: o,
    payload: s,
    setup: i,
    thumbnailWidth: g,
    thumbnailHeight: y
  }) : null, [o, s, i, g, y]), N = (b, R) => {
    if (!b) return [];
    if (Array.isArray(b)) return b;
    try {
      const I = b(R);
      if (!Array.isArray(I))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof I), [];
      const k = I.filter((x) => typeof x == "string");
      return k.length !== I.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), k;
    } catch (I) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", I), [];
    }
  }, S = (b, R) => {
    if (b.kind === "group") {
      const x = b, P = { payload: s, item: void 0, parent: void 0 }, C = N(x.pageComponentKeys, P), E = C[0];
      return {
        kind: "group",
        id: b.id,
        label: b.label,
        pageCount: C.length,
        firstPageId: E,
        firstPageComponentKey: E
      };
    }
    const I = b, k = I.componentKey ?? I.id;
    return {
      kind: "page",
      id: I.id,
      pageId: I.id,
      pageComponentKey: k,
      pageLabel: I.label,
      pageNum: R + 1
    };
  };
  return /* @__PURE__ */ f(Cu, { open: e, onOpenChange: t, children: /* @__PURE__ */ F(Us, { side: "bottom", className: "h-[90vh] p-0 gap-0 w-full max-w-none bg-gray-50", "data-uhuu-editor": !0, children: [
    /* @__PURE__ */ f(Ys, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ F("div", { className: "flex items-end gap-3", children: [
      /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(nt, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ F("div", { className: "flex-1", children: [
        /* @__PURE__ */ f(qs, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
        /* @__PURE__ */ f(Xs, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
      ] }),
      /* @__PURE__ */ F("div", { className: "flex items-center gap-1.5 text-gray-400 mb-0.5 mr-8", children: [
        /* @__PURE__ */ f(lm, { className: "w-3.5 h-3.5 shrink-0" }),
        /* @__PURE__ */ f(
          "input",
          {
            type: "text",
            placeholder: "Filter…",
            value: l,
            onChange: (b) => c(b.target.value),
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
    ] }) : /* @__PURE__ */ f("div", { className: a, children: d.map((b, R) => {
      const I = b.kind === "group", k = b.id, x = I ? b.label || `Group ${R + 1}` : b.label || `Page ${b.id}`, P = { payload: s, item: void 0, parent: void 0 }, C = I ? N(b.pageComponentKeys, P).length : 1;
      return /* @__PURE__ */ F(
        "div",
        {
          onClick: () => u(b),
          className: [
            "relative w-full h-[280px] cursor-pointer transition-all group",
            !!!w && "bg-white border-2 border-gray-200"
            // compact + default, always base + addition if not default
          ].filter(Boolean).join(" "),
          children: [
            /* @__PURE__ */ f("div", { className: "w-full h-full relative", children: b.thumbnail ? /* @__PURE__ */ f("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ f(
              "img",
              {
                src: b.thumbnail,
                className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                alt: x
              }
            ) }) : w ? /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: w(S(b, R), R, !1) }) : /* @__PURE__ */ f(Te, { children: I ? /* @__PURE__ */ F("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(nt, { className: "w-8 h-8 text-blue-600" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: x }),
              /* @__PURE__ */ F("div", { className: "text-xs text-gray-500 mt-1", children: [
                C,
                " ",
                C === 1 ? "page" : "pages"
              ] })
            ] }) : /* @__PURE__ */ F("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(nt, { className: "w-8 h-8 text-gray-400" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: x }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: k })
            ] }) }) }),
            (!w || b?.thumbnail) && /* @__PURE__ */ F(Te, { children: [
              I && /* @__PURE__ */ F("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                "Group (",
                C,
                " ",
                C === 1 ? "page" : "pages",
                ")"
              ] }),
              /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": k, children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: x }) }) }) })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ f(nt, { className: "w-4 h-4 text-white" }) })
          ]
        },
        k
      );
    }) }) }) })
  ] }) });
}
function Ry() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return J(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const oo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function gn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Js(e) {
  return "nodeType" in e;
}
function _e(e) {
  var t, n;
  return e ? gn(e) ? e : Js(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Qs(e) {
  const {
    Document: t
  } = _e(e);
  return e instanceof t;
}
function Yn(e) {
  return gn(e) ? !1 : e instanceof _e(e).HTMLElement;
}
function ku(e) {
  return e instanceof _e(e).SVGElement;
}
function vn(e) {
  return e ? gn(e) ? e.document : Js(e) ? Qs(e) ? e : Yn(e) || ku(e) ? e.ownerDocument : document : document : document;
}
const qe = oo ? Oa : le;
function so(e) {
  const t = de(e);
  return qe(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Iy() {
  const e = de(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function $n(e, t) {
  t === void 0 && (t = [e]);
  const n = de(e);
  return qe(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function qn(e, t) {
  const n = de();
  return J(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Lr(e) {
  const t = so(e), n = de(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function $r(e) {
  const t = de();
  return le(() => {
    t.current = e;
  }, [e]), t.current;
}
let Eo = {};
function Xn(e, t) {
  return J(() => {
    if (t)
      return t;
    const n = Eo[e] == null ? 0 : Eo[e] + 1;
    return Eo[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ru(e) {
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
const cn = /* @__PURE__ */ Ru(1), Bn = /* @__PURE__ */ Ru(-1);
function Py(e) {
  return "clientX" in e && "clientY" in e;
}
function io(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Ey(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Br(e) {
  if (Ey(e)) {
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
  return Py(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Dt = /* @__PURE__ */ Object.freeze({
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
        return [Dt.Translate.toString(e), Dt.Scale.toString(e)].join(" ");
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
}), da = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ay(e) {
  return e.matches(da) ? e : e.querySelector(da);
}
const Dy = {
  display: "none"
};
function My(e) {
  let {
    id: t,
    value: n
  } = e;
  return be.createElement("div", {
    id: t,
    style: Dy
  }, n);
}
function Oy(e) {
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
function Ty() {
  const [e, t] = ie("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Iu = /* @__PURE__ */ Mt(null);
function _y(e) {
  const t = xe(Iu);
  le(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Fy() {
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
const Ly = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, $y = {
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
function By(e) {
  let {
    announcements: t = $y,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Ly
  } = e;
  const {
    announce: s,
    announcement: i
  } = Ty(), a = Xn("DndLiveRegion"), [l, c] = ie(!1);
  if (le(() => {
    c(!0);
  }, []), _y(J(() => ({
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
  const d = be.createElement(be.Fragment, null, be.createElement(My, {
    id: r,
    value: o.draggable
  }), be.createElement(Oy, {
    id: a,
    announcement: i
  }));
  return n ? sf(d, n) : d;
}
var Se;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Se || (Se = {}));
function zr() {
}
function fa(e, t) {
  return J(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function zy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return J(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Xe = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Pu(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Hy(e, t) {
  const n = Br(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Eu(e, t) {
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
function Ky(e, t) {
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
function ha(e) {
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
function Au(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function ma(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const Gy = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = ma(t, t.left, t.top), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = Pu(ma(l), o);
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return s.sort(Eu);
}, Wy = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = ha(t), s = [];
  for (const i of r) {
    const {
      id: a
    } = i, l = n.get(a);
    if (l) {
      const c = ha(l), d = o.reduce((h, m, v) => h + Pu(c[v], m), 0), u = Number((d / 4).toFixed(4));
      s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return s.sort(Eu);
};
function jy(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), i = o - r, a = s - n;
  if (r < o && n < s) {
    const l = t.width * t.height, c = e.width * e.height, d = i * a, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Vy = (e) => {
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
      const l = jy(a, t);
      l > 0 && o.push({
        id: i,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return o.sort(Ky);
};
function Uy(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Du(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Xe;
}
function Yy(e) {
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
const qy = /* @__PURE__ */ Yy(1);
function Mu(e) {
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
function Xy(e, t, n) {
  const r = Mu(t);
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
const Zy = {
  ignoreTransform: !1
};
function bn(e, t) {
  t === void 0 && (t = Zy);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = _e(e).getComputedStyle(e);
    c && (n = Xy(n, c, d));
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
function pa(e) {
  return bn(e, {
    ignoreTransform: !0
  });
}
function Jy(e) {
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
function Qy(e, t) {
  return t === void 0 && (t = _e(e).getComputedStyle(e)), t.position === "fixed";
}
function ew(e, t) {
  t === void 0 && (t = _e(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
function ao(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Qs(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Yn(o) || ku(o) || n.includes(o))
      return n;
    const s = _e(e).getComputedStyle(o);
    return o !== e && ew(o, s) && n.push(o), Qy(o, s) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function Ou(e) {
  const [t] = ao(e, 1);
  return t ?? null;
}
function Ao(e) {
  return !oo || !e ? null : gn(e) ? e : Js(e) ? Qs(e) || e === vn(e).scrollingElement ? window : Yn(e) ? e : null : null;
}
function Tu(e) {
  return gn(e) ? e.scrollX : e.scrollLeft;
}
function _u(e) {
  return gn(e) ? e.scrollY : e.scrollTop;
}
function Xo(e) {
  return {
    x: Tu(e),
    y: _u(e)
  };
}
var ke;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ke || (ke = {}));
function Fu(e) {
  return !oo || !e ? !1 : e === document.scrollingElement;
}
function Lu(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Fu(e) ? {
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
const tw = {
  x: 0.2,
  y: 0.2
};
function nw(e, t, n, r, o) {
  let {
    top: s,
    left: i,
    right: a,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = tw);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = Lu(e), m = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && s <= t.top + g.height ? (m.y = ke.Backward, v.y = r * Math.abs((t.top + g.height - s) / g.height)) : !d && l >= t.bottom - g.height && (m.y = ke.Forward, v.y = r * Math.abs((t.bottom - g.height - l) / g.height)), !h && a >= t.right - g.width ? (m.x = ke.Forward, v.x = r * Math.abs((t.right - g.width - a) / g.width)) : !u && i <= t.left + g.width && (m.x = ke.Backward, v.x = r * Math.abs((t.left + g.width - i) / g.width)), {
    direction: m,
    speed: v
  };
}
function rw(e) {
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
function $u(e) {
  return e.reduce((t, n) => cn(t, Xo(n)), Xe);
}
function ow(e) {
  return e.reduce((t, n) => t + Tu(n), 0);
}
function sw(e) {
  return e.reduce((t, n) => t + _u(n), 0);
}
function Bu(e, t) {
  if (t === void 0 && (t = bn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: s
  } = t(e);
  Ou(e) && (o <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const iw = [["x", ["left", "right"], ow], ["y", ["top", "bottom"], sw]];
class ei {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = ao(n), o = $u(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [s, i, a] of iw)
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
class Pn {
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
function aw(e) {
  const {
    EventTarget: t
  } = _e(e);
  return e instanceof t ? e : vn(e);
}
function Do(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ge;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ge || (Ge = {}));
function ga(e) {
  e.preventDefault();
}
function lw(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ue || (ue = {}));
const zu = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter, ue.Tab]
}, cw = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ue.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ue.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ue.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ue.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class ti {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Pn(vn(n)), this.windowListeners = new Pn(_e(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ge.Resize, this.handleCancel), this.windowListeners.add(Ge.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ge.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Bu(r), n(Xe);
  }
  handleKeyDown(t) {
    if (io(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: s = zu,
        coordinateGetter: i = cw,
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
          const y = t.code, {
            isTop: w,
            isRight: N,
            isLeft: S,
            isBottom: b,
            maxScroll: R,
            minScroll: I
          } = Lu(g), k = rw(g), x = {
            x: Math.min(y === ue.Right ? k.right - k.width / 2 : k.right, Math.max(y === ue.Right ? k.left : k.left + k.width / 2, u.x)),
            y: Math.min(y === ue.Down ? k.bottom - k.height / 2 : k.bottom, Math.max(y === ue.Down ? k.top : k.top + k.height / 2, u.y))
          }, P = y === ue.Right && !N || y === ue.Left && !S, C = y === ue.Down && !b || y === ue.Up && !w;
          if (P && x.x !== u.x) {
            const E = g.scrollLeft + h.x, T = y === ue.Right && E <= R.x || y === ue.Left && E >= I.x;
            if (T && !h.y) {
              g.scrollTo({
                left: E,
                behavior: a
              });
              return;
            }
            T ? m.x = g.scrollLeft - E : m.x = y === ue.Right ? g.scrollLeft - R.x : g.scrollLeft - I.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: a
            });
            break;
          } else if (C && x.y !== u.y) {
            const E = g.scrollTop + h.y, T = y === ue.Down && E <= R.y || y === ue.Up && E >= I.y;
            if (T && !h.x) {
              g.scrollTo({
                top: E,
                behavior: a
              });
              return;
            }
            T ? m.y = g.scrollTop - E : m.y = y === ue.Down ? g.scrollTop - R.y : g.scrollTop - I.y, m.y && g.scrollBy({
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
ti.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = zu,
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
function va(e) {
  return !!(e && "distance" in e);
}
function ba(e) {
  return !!(e && "delay" in e);
}
class ni {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = aw(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: s
    } = t, {
      target: i
    } = s;
    this.props = t, this.events = n, this.document = vn(i), this.documentListeners = new Pn(this.document), this.listeners = new Pn(r), this.windowListeners = new Pn(_e(i)), this.initialCoordinates = (o = Br(s)) != null ? o : Xe, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ge.Resize, this.handleCancel), this.windowListeners.add(Ge.DragStart, ga), this.windowListeners.add(Ge.VisibilityChange, this.handleCancel), this.windowListeners.add(Ge.ContextMenu, ga), this.documentListeners.add(Ge.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ba(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (va(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ge.Click, lw, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ge.SelectionChange, this.removeTextSelection), n(t));
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
    const l = (n = Br(t)) != null ? n : Xe, c = Bn(o, l);
    if (!r && a) {
      if (va(a)) {
        if (a.tolerance != null && Do(c, a.tolerance))
          return this.handleCancel();
        if (Do(c, a.distance))
          return this.handleStart();
      }
      if (ba(a) && Do(c, a.tolerance))
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
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const uw = {
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
class ri extends ni {
  constructor(t) {
    const {
      event: n
    } = t, r = vn(n.target);
    super(t, uw, r);
  }
}
ri.activators = [{
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
const dw = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Zo;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Zo || (Zo = {}));
class fw extends ni {
  constructor(t) {
    super(t, dw, vn(t.event.target));
  }
}
fw.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Zo.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Mo = {
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
class hw extends ni {
  constructor(t) {
    super(t, Mo);
  }
  static setup() {
    return window.addEventListener(Mo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Mo.move.name, t);
    };
    function t() {
    }
  }
}
hw.activators = [{
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
var En;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(En || (En = {}));
var Hr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Hr || (Hr = {}));
function mw(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: s,
    interval: i = 5,
    order: a = Hr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = e;
  const m = gw({
    delta: u,
    disabled: !s
  }), [v, g] = Iy(), y = de({
    x: 0,
    y: 0
  }), w = de({
    x: 0,
    y: 0
  }), N = J(() => {
    switch (n) {
      case En.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case En.DraggableRect:
        return o;
    }
  }, [n, o, l]), S = de(null), b = he(() => {
    const I = S.current;
    if (!I)
      return;
    const k = y.current.x * w.current.x, x = y.current.y * w.current.y;
    I.scrollBy(k, x);
  }, []), R = J(() => a === Hr.TreeOrder ? [...c].reverse() : c, [a, c]);
  le(
    () => {
      if (!s || !c.length || !N) {
        g();
        return;
      }
      for (const I of R) {
        if (r?.(I) === !1)
          continue;
        const k = c.indexOf(I), x = d[k];
        if (!x)
          continue;
        const {
          direction: P,
          speed: C
        } = nw(I, x, N, t, h);
        for (const E of ["x", "y"])
          m[E][P[E]] || (C[E] = 0, P[E] = 0);
        if (C.x > 0 || C.y > 0) {
          g(), S.current = I, v(b, i), y.current = C, w.current = P;
          return;
        }
      }
      y.current = {
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
      b,
      r,
      g,
      s,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      v,
      c,
      R,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const pw = {
  x: {
    [ke.Backward]: !1,
    [ke.Forward]: !1
  },
  y: {
    [ke.Backward]: !1,
    [ke.Forward]: !1
  }
};
function gw(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = $r(t);
  return qn((o) => {
    if (n || !r || !o)
      return pw;
    const s = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ke.Backward]: o.x[ke.Backward] || s.x === -1,
        [ke.Forward]: o.x[ke.Forward] || s.x === 1
      },
      y: {
        [ke.Backward]: o.y[ke.Backward] || s.y === -1,
        [ke.Forward]: o.y[ke.Forward] || s.y === 1
      }
    };
  }, [n, t, r]);
}
function vw(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return qn((o) => {
    var s;
    return t == null ? null : (s = r ?? o) != null ? s : null;
  }, [r, t]);
}
function bw(e, t) {
  return J(() => e.reduce((n, r) => {
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
var Jo;
(function(e) {
  e.Optimized = "optimized";
})(Jo || (Jo = {}));
const ya = /* @__PURE__ */ new Map();
function yw(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [s, i] = ie(null), {
    frequency: a,
    measure: l,
    strategy: c
  } = o, d = de(e), u = y(), h = $n(u), m = he(function(w) {
    w === void 0 && (w = []), !h.current && i((N) => N === null ? w : N.concat(w.filter((S) => !N.includes(S))));
  }, [h]), v = de(null), g = qn((w) => {
    if (u && !n)
      return ya;
    if (!w || w === ya || d.current !== e || s != null) {
      const N = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (s && s.length > 0 && !s.includes(S.id) && S.rect.current) {
          N.set(S.id, S.rect.current);
          continue;
        }
        const b = S.node.current, R = b ? new ei(l(b), b) : null;
        S.rect.current = R, R && N.set(S.id, R);
      }
      return N;
    }
    return w;
  }, [e, s, n, u, l]);
  return le(() => {
    d.current = e;
  }, [e]), le(
    () => {
      u || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), le(
    () => {
      s && s.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), le(
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
  function y() {
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
function oi(e, t) {
  return qn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function ww(e, t) {
  return oi(e, t);
}
function xw(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = so(t), o = J(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, n]);
  return le(() => () => o?.disconnect(), [o]), o;
}
function lo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = so(t), o = J(
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
  return le(() => () => o?.disconnect(), [o]), o;
}
function Cw(e) {
  return new ei(bn(e), e);
}
function wa(e, t, n) {
  t === void 0 && (t = Cw);
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
  const i = xw({
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
  }), a = lo({
    callback: s
  });
  return qe(() => {
    s(), e ? (a?.observe(e), i?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), i?.disconnect());
  }, [e]), r;
}
function Sw(e) {
  const t = oi(e);
  return Du(e, t);
}
const xa = [];
function Nw(e) {
  const t = de(e), n = qn((r) => e ? r && r !== xa && e && t.current && e.parentNode === t.current.parentNode ? r : ao(e) : xa, [e]);
  return le(() => {
    t.current = e;
  }, [e]), n;
}
function kw(e) {
  const [t, n] = ie(null), r = de(e), o = he((s) => {
    const i = Ao(s.target);
    i && n((a) => a ? (a.set(i, Xo(i)), new Map(a)) : null);
  }, []);
  return le(() => {
    const s = r.current;
    if (e !== s) {
      i(s);
      const a = e.map((l) => {
        const c = Ao(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Xo(c)]) : null;
      }).filter((l) => l != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      i(e), i(s);
    };
    function i(a) {
      a.forEach((l) => {
        const c = Ao(l);
        c?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), J(() => e.length ? t ? Array.from(t.values()).reduce((s, i) => cn(s, i), Xe) : $u(e) : Xe, [e, t]);
}
function Ca(e, t) {
  t === void 0 && (t = []);
  const n = de(null);
  return le(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), le(() => {
    const r = e !== Xe;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Bn(e, n.current) : Xe;
}
function Rw(e) {
  le(
    () => {
      if (!oo)
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
function Iw(e, t) {
  return J(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: s
    } = r;
    return n[o] = (i) => {
      s(i, t);
    }, n;
  }, {}), [e, t]);
}
function Hu(e) {
  return J(() => e ? Jy(e) : null, [e]);
}
const Sa = [];
function Pw(e, t) {
  t === void 0 && (t = bn);
  const [n] = e, r = Hu(n ? _e(n) : null), [o, s] = ie(Sa);
  function i() {
    s(() => e.length ? e.map((l) => Fu(l) ? r : new ei(t(l), l)) : Sa);
  }
  const a = lo({
    callback: i
  });
  return qe(() => {
    a?.disconnect(), i(), e.forEach((l) => a?.observe(l));
  }, [e]), o;
}
function Ku(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Yn(t) ? t : e;
}
function Ew(e) {
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
  }, [t]), s = lo({
    callback: o
  }), i = he((c) => {
    const d = Ku(c);
    s?.disconnect(), d && s?.observe(d), r(d ? t(d) : null);
  }, [t, s]), [a, l] = Lr(i);
  return J(() => ({
    nodeRef: a,
    rect: n,
    setRef: l
  }), [n, a, l]);
}
const Aw = [{
  sensor: ri,
  options: {}
}, {
  sensor: ti,
  options: {}
}], Dw = {
  current: {}
}, xr = {
  draggable: {
    measure: pa
  },
  droppable: {
    measure: pa,
    strategy: zn.WhileDragging,
    frequency: Jo.Optimized
  },
  dragOverlay: {
    measure: bn
  }
};
class An extends Map {
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
const Mw = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new An(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: zr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: xr,
  measureDroppableContainers: zr,
  windowRect: null,
  measuringScheduled: !1
}, Gu = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: zr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: zr
}, Zn = /* @__PURE__ */ Mt(Gu), Wu = /* @__PURE__ */ Mt(Mw);
function Ow() {
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
      containers: new An()
    }
  };
}
function Tw(e, t) {
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
      } = n, o = new An(e.droppable.containers);
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
      const i = new An(e.droppable.containers);
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
      const s = new An(e.droppable.containers);
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
function _w(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = xe(Zn), s = $r(r), i = $r(n?.id);
  return le(() => {
    if (!t && !r && s && i != null) {
      if (!io(s) || document.activeElement === s.target)
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
          const u = Ay(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, i, s]), null;
}
function ju(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, s) => s({
    transform: o,
    ...r
  }), n) : n;
}
function Fw(e) {
  return J(
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
function Lw(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const s = de(!1), {
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
    const d = n(c), u = Du(d, r);
    if (i || (u.x = 0), a || (u.y = 0), s.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Ou(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, i, a, r, n]);
}
const co = /* @__PURE__ */ Mt({
  ...Xe,
  scaleX: 1,
  scaleY: 1
});
var Rt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Rt || (Rt = {}));
const $w = /* @__PURE__ */ tf(function(t) {
  var n, r, o, s;
  let {
    id: i,
    accessibility: a,
    autoScroll: l = !0,
    children: c,
    sensors: d = Aw,
    collisionDetection: u = Vy,
    measuring: h,
    modifiers: m,
    ...v
  } = t;
  const g = nf(Tw, void 0, Ow), [y, w] = g, [N, S] = Fy(), [b, R] = ie(Rt.Uninitialized), I = b === Rt.Initialized, {
    draggable: {
      active: k,
      nodes: x,
      translate: P
    },
    droppable: {
      containers: C
    }
  } = y, E = k != null ? x.get(k) : null, T = de({
    initial: null,
    translated: null
  }), $ = J(() => {
    var Ne;
    return k != null ? {
      id: k,
      // It's possible for the active node to unmount while dragging
      data: (Ne = E?.data) != null ? Ne : Dw,
      rect: T
    } : null;
  }, [k, E]), _ = de(null), [z, A] = ie(null), [D, B] = ie(null), L = $n(v, Object.values(v)), M = Xn("DndDescribedBy", i), K = J(() => C.getEnabled(), [C]), V = Fw(h), {
    droppableRects: U,
    measureDroppableContainers: ne,
    measuringScheduled: re
  } = yw(K, {
    dragging: I,
    dependencies: [P.x, P.y],
    config: V.droppable
  }), H = vw(x, k), G = J(() => D ? Br(D) : null, [D]), X = nr(), q = ww(H, V.draggable.measure);
  Lw({
    activeNode: k != null ? x.get(k) : null,
    config: X.layoutShiftCompensation,
    initialRect: q,
    measure: V.draggable.measure
  });
  const Y = wa(H, V.draggable.measure, q), te = wa(H ? H.parentElement : null), fe = de({
    activatorEvent: null,
    active: null,
    activeNode: H,
    collisionRect: null,
    collisions: null,
    droppableRects: U,
    draggableNodes: x,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: C,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ge = C.getNodeFor((n = fe.current.over) == null ? void 0 : n.id), ae = Ew({
    measure: V.dragOverlay.measure
  }), Ie = (r = ae.nodeRef.current) != null ? r : H, je = I ? (o = ae.rect) != null ? o : Y : null, Xt = !!(ae.nodeRef.current && ae.rect), ct = Sw(Xt ? null : Y), Zt = Hu(Ie ? _e(Ie) : null), Be = Nw(I ? ge ?? H : null), yt = Pw(Be), $t = ju(m, {
    transform: {
      x: P.x - ct.x,
      y: P.y - ct.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: D,
    active: $,
    activeNodeRect: Y,
    containerNodeRect: te,
    draggingNodeRect: je,
    over: fe.current.over,
    overlayNodeRect: ae.rect,
    scrollableAncestors: Be,
    scrollableAncestorRects: yt,
    windowRect: Zt
  }), Jt = G ? cn(G, P) : null, wn = kw(Be), Qn = Ca(wn), fo = Ca(wn, [Y]), Ve = cn($t, Qn), wt = je ? qy(je, $t) : null, Bt = $ && wt ? u({
    active: $,
    collisionRect: wt,
    droppableRects: U,
    droppableContainers: K,
    pointerCoordinates: Jt
  }) : null, Qt = Au(Bt, "id"), [Je, er] = ie(null), ho = Xt ? $t : cn($t, fo), xn = Uy(ho, (s = Je?.rect) != null ? s : null, Y), en = de(null), Cn = he(
    (Ne, Pe) => {
      let {
        sensor: Ee,
        options: Ue
      } = Pe;
      if (_.current == null)
        return;
      const Me = x.get(_.current);
      if (!Me)
        return;
      const Oe = Ne.nativeEvent, ze = new Ee({
        active: _.current,
        activeNode: Me,
        event: Oe,
        options: Ue,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: fe,
        onAbort(we) {
          if (!x.get(we))
            return;
          const {
            onDragAbort: Ke
          } = L.current, Ye = {
            id: we
          };
          Ke?.(Ye), N({
            type: "onDragAbort",
            event: Ye
          });
        },
        onPending(we, He, Ke, Ye) {
          if (!x.get(we))
            return;
          const {
            onDragPending: Z
          } = L.current, Q = {
            id: we,
            constraint: He,
            initialCoordinates: Ke,
            offset: Ye
          };
          Z?.(Q), N({
            type: "onDragPending",
            event: Q
          });
        },
        onStart(we) {
          const He = _.current;
          if (He == null)
            return;
          const Ke = x.get(He);
          if (!Ke)
            return;
          const {
            onDragStart: Ye
          } = L.current, O = {
            activatorEvent: Oe,
            active: {
              id: He,
              data: Ke.data,
              rect: T
            }
          };
          sr(() => {
            Ye?.(O), R(Rt.Initializing), w({
              type: Se.DragStart,
              initialCoordinates: we,
              active: He
            }), N({
              type: "onDragStart",
              event: O
            }), A(en.current), B(Oe);
          });
        },
        onMove(we) {
          w({
            type: Se.DragMove,
            coordinates: we
          });
        },
        onEnd: Ct(Se.DragEnd),
        onCancel: Ct(Se.DragCancel)
      });
      en.current = ze;
      function Ct(we) {
        return async function() {
          const {
            active: Ke,
            collisions: Ye,
            over: O,
            scrollAdjustedTranslate: Z
          } = fe.current;
          let Q = null;
          if (Ke && Z) {
            const {
              cancelDrop: oe
            } = L.current;
            Q = {
              activatorEvent: Oe,
              active: Ke,
              collisions: Ye,
              delta: Z,
              over: O
            }, we === Se.DragEnd && typeof oe == "function" && await Promise.resolve(oe(Q)) && (we = Se.DragCancel);
          }
          _.current = null, sr(() => {
            w({
              type: we
            }), R(Rt.Uninitialized), er(null), A(null), B(null), en.current = null;
            const oe = we === Se.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Q) {
              const ve = L.current[oe];
              ve?.(Q), N({
                type: oe,
                event: Q
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), tr = he((Ne, Pe) => (Ee, Ue) => {
    const Me = Ee.nativeEvent, Oe = x.get(Ue);
    if (
      // Another sensor is already instantiating
      _.current !== null || // No active draggable
      !Oe || // Event has already been captured
      Me.dndKit || Me.defaultPrevented
    )
      return;
    const ze = {
      active: Oe
    };
    Ne(Ee, Pe.options, ze) === !0 && (Me.dndKit = {
      capturedBy: Pe.sensor
    }, _.current = Ue, Cn(Ee, Pe));
  }, [x, Cn]), xt = bw(d, tr);
  Rw(d), qe(() => {
    Y && b === Rt.Initializing && R(Rt.Initialized);
  }, [Y, b]), le(
    () => {
      const {
        onDragMove: Ne
      } = L.current, {
        active: Pe,
        activatorEvent: Ee,
        collisions: Ue,
        over: Me
      } = fe.current;
      if (!Pe || !Ee)
        return;
      const Oe = {
        active: Pe,
        activatorEvent: Ee,
        collisions: Ue,
        delta: {
          x: Ve.x,
          y: Ve.y
        },
        over: Me
      };
      sr(() => {
        Ne?.(Oe), N({
          type: "onDragMove",
          event: Oe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ve.x, Ve.y]
  ), le(
    () => {
      const {
        active: Ne,
        activatorEvent: Pe,
        collisions: Ee,
        droppableContainers: Ue,
        scrollAdjustedTranslate: Me
      } = fe.current;
      if (!Ne || _.current == null || !Pe || !Me)
        return;
      const {
        onDragOver: Oe
      } = L.current, ze = Ue.get(Qt), Ct = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, we = {
        active: Ne,
        activatorEvent: Pe,
        collisions: Ee,
        delta: {
          x: Me.x,
          y: Me.y
        },
        over: Ct
      };
      sr(() => {
        er(Ct), Oe?.(we), N({
          type: "onDragOver",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Qt]
  ), qe(() => {
    fe.current = {
      activatorEvent: D,
      active: $,
      activeNode: H,
      collisionRect: wt,
      collisions: Bt,
      droppableRects: U,
      draggableNodes: x,
      draggingNode: Ie,
      draggingNodeRect: je,
      droppableContainers: C,
      over: Je,
      scrollableAncestors: Be,
      scrollAdjustedTranslate: Ve
    }, T.current = {
      initial: je,
      translated: wt
    };
  }, [$, H, Bt, wt, x, Ie, je, U, C, Je, Be, Ve]), mw({
    ...X,
    delta: P,
    draggingRect: wt,
    pointerCoordinates: Jt,
    scrollableAncestors: Be,
    scrollableAncestorRects: yt
  });
  const zt = J(() => ({
    active: $,
    activeNode: H,
    activeNodeRect: Y,
    activatorEvent: D,
    collisions: Bt,
    containerNodeRect: te,
    dragOverlay: ae,
    draggableNodes: x,
    droppableContainers: C,
    droppableRects: U,
    over: Je,
    measureDroppableContainers: ne,
    scrollableAncestors: Be,
    scrollableAncestorRects: yt,
    measuringConfiguration: V,
    measuringScheduled: re,
    windowRect: Zt
  }), [$, H, Y, D, Bt, te, ae, x, C, U, Je, ne, Be, yt, V, re, Zt]), mo = J(() => ({
    activatorEvent: D,
    activators: xt,
    active: $,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: M
    },
    dispatch: w,
    draggableNodes: x,
    over: Je,
    measureDroppableContainers: ne
  }), [D, xt, $, Y, w, M, x, Je, ne]);
  return be.createElement(Iu.Provider, {
    value: S
  }, be.createElement(Zn.Provider, {
    value: mo
  }, be.createElement(Wu.Provider, {
    value: zt
  }, be.createElement(co.Provider, {
    value: xn
  }, c)), be.createElement(_w, {
    disabled: a?.restoreFocus === !1
  })), be.createElement(By, {
    ...a,
    hiddenTextDescribedById: M
  }));
  function nr() {
    const Ne = z?.autoScrollEnabled === !1, Pe = typeof l == "object" ? l.enabled === !1 : l === !1, Ee = I && !Ne && !Pe;
    return typeof l == "object" ? {
      ...l,
      enabled: Ee
    } : {
      enabled: Ee
    };
  }
}), Bw = /* @__PURE__ */ Mt(null), Na = "button", zw = "Draggable";
function Hw(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const s = Xn(zw), {
    activators: i,
    activatorEvent: a,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = xe(Zn), {
    role: m = Na,
    roleDescription: v = "draggable",
    tabIndex: g = 0
  } = o ?? {}, y = l?.id === t, w = xe(y ? co : Bw), [N, S] = Lr(), [b, R] = Lr(), I = Iw(i, t), k = $n(n);
  qe(
    () => (u.set(t, {
      id: t,
      key: s,
      node: N,
      activatorNode: b,
      data: k
    }), () => {
      const P = u.get(t);
      P && P.key === s && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const x = J(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": y && m === Na ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": d.draggable
  }), [r, m, g, y, v, d.draggable]);
  return {
    active: l,
    activatorEvent: a,
    activeNodeRect: c,
    attributes: x,
    isDragging: y,
    listeners: r ? void 0 : I,
    node: N,
    over: h,
    setNodeRef: S,
    setActivatorNodeRef: R,
    transform: w
  };
}
function Vu() {
  return xe(Wu);
}
const Kw = "Droppable", Gw = {
  timeout: 25
};
function Ww(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const s = Xn(Kw), {
    active: i,
    dispatch: a,
    over: l,
    measureDroppableContainers: c
  } = xe(Zn), d = de({
    disabled: n
  }), u = de(!1), h = de(null), m = de(null), {
    disabled: v,
    updateMeasurementsFor: g,
    timeout: y
  } = {
    ...Gw,
    ...o
  }, w = $n(g ?? r), N = he(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), m.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), S = lo({
    callback: N,
    disabled: v || !i
  }), b = he((x, P) => {
    S && (P && (S.unobserve(P), u.current = !1), x && S.observe(x));
  }, [S]), [R, I] = Lr(b), k = $n(t);
  return le(() => {
    !S || !R.current || (S.disconnect(), u.current = !1, S.observe(R.current));
  }, [R, S]), le(
    () => (a({
      type: Se.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: R,
        rect: h,
        data: k
      }
    }), () => a({
      type: Se.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), le(() => {
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
    node: R,
    over: l,
    setNodeRef: I
  };
}
function jw(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = ie(null), [s, i] = ie(null), a = $r(n);
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
  }, [t, r, s]), be.createElement(be.Fragment, null, n, r ? rf(r, {
    ref: i
  }) : null);
}
const Vw = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Uw(e) {
  let {
    children: t
  } = e;
  return be.createElement(Zn.Provider, {
    value: Gu
  }, be.createElement(co.Provider, {
    value: Vw
  }, t));
}
const Yw = {
  position: "fixed",
  touchAction: "none"
}, qw = (e) => io(e) ? "transform 250ms ease" : void 0, Xw = /* @__PURE__ */ Gr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: s,
    className: i,
    rect: a,
    style: l,
    transform: c,
    transition: d = qw
  } = e;
  if (!a)
    return null;
  const u = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Yw,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Dt.Transform.toString(u),
    transformOrigin: o && r ? Hy(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return be.createElement(n, {
    className: i,
    style: h,
    ref: t
  }, s);
}), Zw = (e) => (t) => {
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
}, Jw = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Dt.Transform.toString(t)
  }, {
    transform: Dt.Transform.toString(n)
  }];
}, Qw = {
  duration: 250,
  easing: "ease",
  keyframes: Jw,
  sideEffects: /* @__PURE__ */ Zw({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function e0(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return so((s, i) => {
    if (t === null)
      return;
    const a = n.get(s);
    if (!a)
      return;
    const l = a.node.current;
    if (!l)
      return;
    const c = Ku(i);
    if (!c)
      return;
    const {
      transform: d
    } = _e(i).getComputedStyle(i), u = Mu(d);
    if (!u)
      return;
    const h = typeof t == "function" ? t : t0(t);
    return Bu(l, o.draggable.measure), h({
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
function t0(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...Qw,
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
    const y = r?.({
      active: i,
      dragOverlay: a,
      ...c
    }), w = a.node.animate(m, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((N) => {
      w.onfinish = () => {
        y?.(), N();
      };
    });
  };
}
let ka = 0;
function n0(e) {
  return J(() => {
    if (e != null)
      return ka++, ka;
  }, [e]);
}
const r0 = /* @__PURE__ */ be.memo((e) => {
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
    dragOverlay: y,
    over: w,
    measuringConfiguration: N,
    scrollableAncestors: S,
    scrollableAncestorRects: b,
    windowRect: R
  } = Vu(), I = xe(co), k = n0(u?.id), x = ju(i, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: m,
    draggingNodeRect: y.rect,
    over: w,
    overlayNodeRect: y.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: b,
    transform: I,
    windowRect: R
  }), P = oi(h), C = e0({
    config: r,
    draggableNodes: v,
    droppableContainers: g,
    measuringConfiguration: N
  }), E = P ? y.setRef : void 0;
  return be.createElement(Uw, null, be.createElement(jw, {
    animation: C
  }, u && k ? be.createElement(Xw, {
    key: k,
    id: u.id,
    ref: E,
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
function si(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function o0(e, t) {
  return e.reduce((n, r, o) => {
    const s = t.get(r);
    return s && (n[o] = s), n;
  }, Array(e.length));
}
function vr(e) {
  return e !== null && e >= 0;
}
function s0(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function i0(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const ii = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const s = si(t, r, n), i = t[o], a = s[o];
  return !a || !i ? null : {
    x: a.left - i.left,
    y: a.top - i.top,
    scaleX: a.width / i.width,
    scaleY: a.height / i.height
  };
}, Uu = "Sortable", Yu = /* @__PURE__ */ be.createContext({
  activeIndex: -1,
  containerId: Uu,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ii,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function a0(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = ii,
    disabled: s = !1
  } = e;
  const {
    active: i,
    dragOverlay: a,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = Vu(), u = Xn(Uu, n), h = a.rect !== null, m = J(() => r.map((I) => typeof I == "object" && "id" in I ? I.id : I), [r]), v = i != null, g = i ? m.indexOf(i.id) : -1, y = c ? m.indexOf(c.id) : -1, w = de(m), N = !s0(m, w.current), S = y !== -1 && g === -1 || N, b = i0(s);
  qe(() => {
    N && v && d(m);
  }, [N, m, v, d]), le(() => {
    w.current = m;
  }, [m]);
  const R = J(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: b,
      disableTransforms: S,
      items: m,
      overIndex: y,
      useDragOverlay: h,
      sortedRects: o0(m, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, b.draggable, b.droppable, S, m, y, l, h, o]
  );
  return be.createElement(Yu.Provider, {
    value: R
  }, t);
}
const l0 = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return si(n, r, o).indexOf(t);
}, c0 = (e) => {
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
}, u0 = {
  duration: 200,
  easing: "ease"
}, qu = "transform", d0 = /* @__PURE__ */ Dt.Transition.toString({
  property: qu,
  duration: 0,
  easing: "linear"
}), f0 = {
  roleDescription: "sortable"
};
function h0(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [s, i] = ie(null), a = de(n);
  return qe(() => {
    if (!t && n !== a.current && r.current) {
      const l = o.current;
      if (l) {
        const c = bn(r.current, {
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
  }, [t, n, r, o]), le(() => {
    s && i(null);
  }, [s]), s;
}
function m0(e) {
  let {
    animateLayoutChanges: t = c0,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: s = l0,
    id: i,
    strategy: a,
    resizeObserverConfig: l,
    transition: c = u0
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: m,
    disableTransforms: v,
    sortedRects: g,
    overIndex: y,
    useDragOverlay: w,
    strategy: N
  } = xe(Yu), S = p0(r, m), b = d.indexOf(i), R = J(() => ({
    sortable: {
      containerId: u,
      index: b,
      items: d
    },
    ...o
  }), [u, o, b, d]), I = J(() => d.slice(d.indexOf(i)), [d, i]), {
    rect: k,
    node: x,
    isOver: P,
    setNodeRef: C
  } = Ww({
    id: i,
    data: R,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: I,
      ...l
    }
  }), {
    active: E,
    activatorEvent: T,
    activeNodeRect: $,
    attributes: _,
    setNodeRef: z,
    listeners: A,
    isDragging: D,
    over: B,
    setActivatorNodeRef: L,
    transform: M
  } = Hw({
    id: i,
    data: R,
    attributes: {
      ...f0,
      ...n
    },
    disabled: S.draggable
  }), K = Ry(C, z), V = !!E, U = V && !v && vr(h) && vr(y), ne = !w && D, re = ne && U ? M : null, G = U ? re ?? (a ?? N)({
    rects: g,
    activeNodeRect: $,
    activeIndex: h,
    overIndex: y,
    index: b
  }) : null, X = vr(h) && vr(y) ? s({
    id: i,
    items: d,
    activeIndex: h,
    overIndex: y
  }) : b, q = E?.id, Y = de({
    activeId: q,
    items: d,
    newIndex: X,
    containerId: u
  }), te = d !== Y.current.items, fe = t({
    active: E,
    containerId: u,
    isDragging: D,
    isSorting: V,
    id: i,
    index: b,
    items: d,
    newIndex: Y.current.newIndex,
    previousItems: Y.current.items,
    previousContainerId: Y.current.containerId,
    transition: c,
    wasDragging: Y.current.activeId != null
  }), ge = h0({
    disabled: !fe,
    index: b,
    node: x,
    rect: k
  });
  return le(() => {
    V && Y.current.newIndex !== X && (Y.current.newIndex = X), u !== Y.current.containerId && (Y.current.containerId = u), d !== Y.current.items && (Y.current.items = d);
  }, [V, X, u, d]), le(() => {
    if (q === Y.current.activeId)
      return;
    if (q != null && Y.current.activeId == null) {
      Y.current.activeId = q;
      return;
    }
    const Ie = setTimeout(() => {
      Y.current.activeId = q;
    }, 50);
    return () => clearTimeout(Ie);
  }, [q]), {
    active: E,
    activeIndex: h,
    attributes: _,
    data: R,
    rect: k,
    index: b,
    newIndex: X,
    items: d,
    isOver: P,
    isSorting: V,
    isDragging: D,
    listeners: A,
    node: x,
    overIndex: y,
    over: B,
    setNodeRef: K,
    setActivatorNodeRef: L,
    setDroppableNodeRef: C,
    setDraggableNodeRef: z,
    transform: ge ?? G,
    transition: ae()
  };
  function ae() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ge || // Or to prevent items jumping to back to their "new" position when items change
      te && Y.current.newIndex === b
    )
      return d0;
    if (!(ne && !io(T) || !c) && (V || fe))
      return Dt.Transition.toString({
        ...c,
        property: qu
      });
  }
}
function p0(e, t) {
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
function Kr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const g0 = [ue.Down, ue.Right, ue.Up, ue.Left], v0 = (e, t) => {
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
  if (g0.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    s.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = o.get(u.id);
      if (h)
        switch (e.code) {
          case ue.Down:
            r.top < h.top && l.push(u);
            break;
          case ue.Up:
            r.top > h.top && l.push(u);
            break;
          case ue.Left:
            r.left > h.left && l.push(u);
            break;
          case ue.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const c = Wy({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let d = Au(c, "id");
    if (d === i?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = s.get(n.id), h = s.get(d), m = h ? o.get(h.id) : null, v = h?.node.current;
      if (v && m && u && h) {
        const y = ao(v).some((I, k) => a[k] !== I), w = Xu(u, h), N = b0(u, h), S = y || !w ? {
          x: 0,
          y: 0
        } : {
          x: N ? r.width - m.width : 0,
          y: N ? r.height - m.height : 0
        }, b = {
          x: m.left,
          y: m.top
        };
        return S.x && S.y ? b : Bn(b, S);
      }
    }
  }
};
function Xu(e, t) {
  return !Kr(e) || !Kr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function b0(e, t) {
  return !Kr(e) || !Kr(t) || !Xu(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function y0({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: s = !1
}) {
  const { attributes: i, listeners: a, setNodeRef: l, transform: c, transition: d, isDragging: u } = m0({
    id: o(e),
    disabled: s
  }), h = {
    transform: Dt.Transform.toString(c),
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
function w0({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ f("div", { className: "rotate-2", children: n(e, t, !0) });
}
function x0({
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
  le(() => {
    v(e);
  }, [e]);
  const [g, y] = ie(null), w = zy(
    fa(ri),
    fa(ti, {
      coordinateGetter: v0
    })
  ), N = (I) => {
    const k = m.find((x) => o(x) === I.active.id);
    k && u && u(k) || y(I.active.id);
  }, S = (I) => {
    const { active: k, over: x } = I;
    if (!x || k.id === x.id) {
      y(null);
      return;
    }
    const P = m.find((T) => o(T) === k.id), C = m.findIndex((T) => o(T) === k.id), E = m.findIndex((T) => o(T) === x.id);
    if (P && u && u(P)) {
      y(null);
      return;
    }
    if (h && !h(P, E, m)) {
      y(null);
      return;
    }
    if (C !== -1 && E !== -1) {
      const T = si(m, C, E);
      v(T), t(T);
    }
    y(null);
  }, b = m.find((I) => o(I) === g), R = b ? m.findIndex((I) => o(I) === g) : -1;
  return /* @__PURE__ */ F("div", { className: `w-full ${i}`, children: [
    a && /* @__PURE__ */ f("div", { className: "mb-6", children: a() }),
    m.length === 0 && l ? l() : /* @__PURE__ */ f("div", { className: "mb-6", children: /* @__PURE__ */ F(
      $w,
      {
        sensors: w,
        collisionDetection: Gy,
        onDragStart: N,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ f(a0, { items: m.map(o), strategy: ii, children: /* @__PURE__ */ f("div", { className: s, children: m.map((I, k) => /* @__PURE__ */ f(
            y0,
            {
              item: I,
              index: k,
              renderItem: n,
              renderDragIndicator: r,
              keyExtractor: o,
              disabled: u ? u(I) : !1
            },
            o(I)
          )) }) }),
          /* @__PURE__ */ f(r0, { children: b ? d ? /* @__PURE__ */ f("div", { className: "rotate-2 shadow-lg", children: d(b, R) }) : /* @__PURE__ */ f(w0, { item: b, index: R, renderItem: n }) : null })
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
        m.map((I, k) => `${k + 1}:${o(I).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const C0 = wl(
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
function ai({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: ce(C0({ variant: t }), e), ...n });
}
function S0({
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
        /* @__PURE__ */ f("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ f(ai, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${i ? "opacity-75" : ""}`, children: i ? /* @__PURE__ */ f(Ho, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ F(Te, { children: [
          /* @__PURE__ */ f("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ f(gl, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function N0({
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
  const [h, m] = p.useState(n), [v, g] = p.useState(!1), y = (P) => P.id;
  p.useEffect(() => {
    if (!e)
      m(n), g(!1);
    else if (!v)
      m(n);
    else {
      const P = new Set(h.map(y));
      (P.size !== n.length || n.some((E) => !P.has(y(E)))) && m(n);
    }
  }, [n, e, v, h]);
  const w = (P) => {
    m(P), g(!0);
  }, N = () => {
    r(h), g(!1), t(!1);
  }, S = () => {
    m(n), g(!1), t(!1);
  }, b = p.useMemo(() => (!s || typeof s != "function") && i ? Zs({ pageComponents: i, payload: a, setup: l }) : null, [s, i, a, l]), R = (P, C, E) => {
    const T = P.strictPosition, _ = !!o && !(T === "start" || T === "end"), z = (D) => {
      D.preventDefault(), D.stopPropagation(), o && (o(P), m((B) => B.filter((L) => y(L) !== y(P))), g(!0));
    }, A = s && typeof s == "function" ? s(P, C, E) : b ? b(P, C, E) : /* @__PURE__ */ f(S0, { page: P, index: C, isDragging: E });
    return /* @__PURE__ */ F("div", { className: "relative inline-block align-top", children: [
      A,
      _ && /* @__PURE__ */ F(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: z,
          onPointerDown: (D) => D.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ f(gl, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ f(nt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, I = () => /* @__PURE__ */ F("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ f("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(Mi, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ f("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ f("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), k = p.useCallback((P) => {
    const C = P.strictPosition;
    return C === "start" || C === "end";
  }, []), x = p.useCallback((P, C, E) => {
    const T = P.strictPosition;
    if (T === "start" || T === "end")
      return !1;
    let $ = -1, _ = E.length;
    for (let z = 0; z < E.length; z++) {
      const A = E[z].strictPosition;
      A === "start" ? $ = z : A === "end" && _ === E.length && (_ = z);
    }
    return !(C <= $ || C >= _);
  }, []);
  return /* @__PURE__ */ f(Cu, { open: e, onOpenChange: (P) => {
    P || S();
  }, children: /* @__PURE__ */ F(
    Us,
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
        /* @__PURE__ */ f(Ys, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ F("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(Mi, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ F("div", { className: "flex-1", children: [
            /* @__PURE__ */ f(qs, { className: "text-base font-medium text-gray-900 leading-tight", children: c }),
            /* @__PURE__ */ f(Xs, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ F(ai, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            h.length,
            " ",
            h.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ f("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ f(
          x0,
          {
            items: h,
            onChange: w,
            renderItem: R,
            keyExtractor: y,
            renderEmptyState: I,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: k,
            canDropAt: x
          }
        ) }) }),
        /* @__PURE__ */ F(Nu, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
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
              onClick: N,
              disabled: !v,
              children: "Save Changes"
            }
          )
        ] })
      ]
    }
  ) });
}
function k0({
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
  measurementTotalPages: y,
  dataBinding: w,
  flowPageIndex: N = 0,
  flowChunksByFlowId: S,
  measureFlow: b = !1,
  flowMeasurementKey: R,
  flowMeasurementVersion: I,
  onFlowMeasurement: k,
  renderVisible: x = !0
}) {
  const P = typeof u == "function" ? (D) => u({ pageNo: D, pageId: e }) : () => u, C = n || t || e, T = [C ? `uhuu-page--${C}` : "", h].filter(Boolean).join(" "), $ = (D = m, B = v) => r ? /* @__PURE__ */ f(
    r,
    {
      payload: o,
      pagePayload: s,
      integration: i,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: D,
      totalPages: B,
      page: a,
      parentGroup: l,
      componentKey: n,
      dataBinding: w
    }
  ) : null, _ = p.useMemo(
    () => ({
      mode: "visible",
      pageIndex: N,
      chunksByFlowId: S
    }),
    [N, S]
  ), z = p.useCallback((D) => {
    R && k?.(R, D);
  }, [R, k]), A = p.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: I,
      registerMeasurement: z
    }),
    [I, z]
  );
  return /* @__PURE__ */ F(Te, { children: [
    b && k && R && /* @__PURE__ */ f(
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
        children: /* @__PURE__ */ f(Fo, { setup: c, children: /* @__PURE__ */ f(Lo, { className: T, pageNo: m, "data-page-key": C, children: /* @__PURE__ */ f(Dn.Provider, { value: A, children: $(
          g ?? m,
          y ?? v
        ) }) }) })
      }
    ),
    x && /* @__PURE__ */ f(Fo, { setup: c, children: /* @__PURE__ */ F(
      Lo,
      {
        className: T,
        pageNo: m,
        overlay: ({ pageNo: D }) => P(D),
        "data-page-key": C,
        children: [
          d,
          /* @__PURE__ */ f(Dn.Provider, { value: _, children: $(m, v) })
        ]
      }
    ) })
  ] });
}
const Zu = p.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
    "select",
    {
      className: ce(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
Zu.displayName = "Select";
function Ju(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var uo = "Switch", [R0] = gt(uo), [I0, li] = R0(uo);
function P0(e) {
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
  } = e, [h, m] = fn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: uo
  }), [v, g] = p.useState(null), [y, w] = p.useState(null), N = p.useRef(!1), S = v ? !!i || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), b = {
    checked: h,
    setChecked: m,
    disabled: s,
    control: v,
    setControl: g,
    name: a,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: N,
    required: c,
    defaultChecked: o,
    isFormControl: S,
    bubbleInput: y,
    setBubbleInput: w
  };
  return /* @__PURE__ */ f(I0, { scope: t, ...b, children: E0(u) ? u(b) : r });
}
var Qu = "SwitchTrigger", ed = p.forwardRef(
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
    } = li(Qu, e), g = me(r, d), y = p.useRef(l);
    return p.useEffect(() => {
      const w = s ? o?.ownerDocument.getElementById(s) : o?.form;
      if (w instanceof HTMLFormElement) {
        const N = () => u(y.current);
        return w.addEventListener("reset", N), () => w.removeEventListener("reset", N);
      }
    }, [o, s, u]), /* @__PURE__ */ f(
      pe.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": c,
        "data-state": sd(l),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...n,
        ref: g,
        onClick: ee(t, (w) => {
          u((N) => !N), v && m && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }
);
ed.displayName = Qu;
var ci = p.forwardRef(
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
      P0,
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
            ed,
            {
              ...u,
              ref: t,
              __scopeSwitch: n
            }
          ),
          h && /* @__PURE__ */ f(
            od,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
ci.displayName = uo;
var td = "SwitchThumb", nd = p.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = li(td, n);
    return /* @__PURE__ */ f(
      pe.span,
      {
        "data-state": sd(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
nd.displayName = td;
var rd = "SwitchBubbleInput", od = p.forwardRef(
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
    } = li(rd, e), v = me(n, m), g = Ju(s), y = Ns(r);
    p.useEffect(() => {
      const N = h;
      if (!N) return;
      const S = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set, I = !o.current;
      if (g !== s && R) {
        const k = new Event("click", { bubbles: I });
        R.call(N, s), N.dispatchEvent(k);
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
          ...y,
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
od.displayName = rd;
function E0(e) {
  return typeof e == "function";
}
function sd(e) {
  return e ? "checked" : "unchecked";
}
const id = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  ci,
  {
    ref: n,
    className: ce(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f(
      nd,
      {
        className: ce(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
id.displayName = ci.displayName;
function ad(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var ld = ["PageUp", "PageDown"], cd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ud = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, yn = "Slider", [Qo, A0, D0] = hs(yn), [ui] = gt(yn, [
  D0
]), [M0, Jn] = ui(yn), di = p.forwardRef(
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
    } = e, y = p.useRef(/* @__PURE__ */ new Set()), w = p.useRef(0), N = p.useRef(!1), b = i === "horizontal" ? O0 : T0, [R, I] = p.useState(null), k = me(t, I), [x = [], P] = fn({
      prop: d,
      defaultProp: c,
      onChange: (A) => {
        [...y.current][w.current]?.focus({
          preventScroll: !0,
          focusVisible: N.current
        }), N.current = !1, u(A);
      }
    }), C = p.useRef(x), E = p.useRef(x);
    p.useEffect(() => {
      const A = v ? R?.ownerDocument.getElementById(v) : R?.closest("form");
      if (A instanceof HTMLFormElement) {
        const D = () => P(E.current);
        return A.addEventListener("reset", D), () => A.removeEventListener("reset", D);
      }
    }, [R, v, P]);
    function T(A) {
      const D = $0(x, A);
      z(A, D);
    }
    function $(A) {
      z(A, w.current);
    }
    function _() {
      const A = C.current[w.current];
      x[w.current] !== A && h(x);
    }
    function z(A, D, { commit: B } = { commit: !1 }) {
      const L = Rd(s), M = Sr(Math.round((A - r) / s) * s + r, L), K = ad(M, [r, o]);
      P((V = []) => {
        const U = F0(V, K, D);
        if (H0(U, l * s)) {
          w.current = U.indexOf(K);
          const ne = String(U) !== String(V);
          return ne && B && h(U), ne ? U : V;
        } else
          return V;
      });
    }
    return /* @__PURE__ */ f(
      M0,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: w,
        thumbs: y.current,
        values: x,
        orientation: i,
        form: v,
        children: /* @__PURE__ */ f(Qo.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(Qo.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
          b,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...g,
            ref: k,
            onPointerDown: ee(g.onPointerDown, () => {
              a || (C.current = x, N.current = !1);
            }),
            min: r,
            max: o,
            inverted: m,
            onSlideStart: a ? void 0 : T,
            onSlideMove: a ? void 0 : $,
            onSlideEnd: a ? void 0 : _,
            onHomeKeyDown: () => {
              a || (N.current = !0, z(r, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              a || (N.current = !0, z(o, x.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: A, direction: D }) => {
              if (!a) {
                N.current = !0;
                const M = ld.includes(A.key) || A.shiftKey && cd.includes(A.key) ? 10 : 1, K = w.current, V = x[K], U = K0(V, {
                  min: r,
                  step: s,
                  direction: D,
                  multiplier: M
                });
                z(U, K, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
di.displayName = yn;
var [dd, fd] = ui(yn, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), O0 = p.forwardRef(
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
    } = e, [u, h] = p.useState(null), m = me(t, h), v = p.useRef(void 0), g = ms(o), y = g === "ltr", w = y && !s || !y && s;
    function N(S) {
      const b = v.current || u.getBoundingClientRect(), R = [0, b.width], k = fi(R, w ? [n, r] : [r, n]);
      return v.current = b, k(S - b.left);
    }
    return /* @__PURE__ */ f(
      dd,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ f(
          hd,
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
              const b = N(S.clientX);
              i?.(b);
            },
            onSlideMove: (S) => {
              const b = N(S.clientX);
              a?.(b);
            },
            onSlideEnd: () => {
              v.current = void 0, l?.();
            },
            onStepKeyDown: (S) => {
              const R = ud[w ? "from-left" : "from-right"].includes(S.key);
              c?.({ event: S, direction: R ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), T0 = p.forwardRef(
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
      const y = h.current || d.current.getBoundingClientRect(), w = [0, y.height], S = fi(w, m ? [r, n] : [n, r]);
      return h.current = y, S(g - y.top);
    }
    return /* @__PURE__ */ f(
      dd,
      {
        scope: e.__scopeSlider,
        startEdge: m ? "bottom" : "top",
        endEdge: m ? "top" : "bottom",
        size: "height",
        direction: m ? 1 : -1,
        children: /* @__PURE__ */ f(
          hd,
          {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const y = v(g.clientY);
              s?.(y);
            },
            onSlideMove: (g) => {
              const y = v(g.clientY);
              i?.(y);
            },
            onSlideEnd: () => {
              h.current = void 0, a?.();
            },
            onStepKeyDown: (g) => {
              const w = ud[m ? "from-bottom" : "from-top"].includes(g.key);
              l?.({ event: g, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), hd = p.forwardRef(
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
    } = e, d = Jn(yn, n);
    return /* @__PURE__ */ f(
      pe.span,
      {
        ...c,
        ref: t,
        onKeyDown: ee(e.onKeyDown, (u) => {
          u.key === "Home" ? (i(u), u.preventDefault()) : u.key === "End" ? (a(u), u.preventDefault()) : ld.concat(cd).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: ee(e.onPointerDown, (u) => {
          const h = u.target;
          h.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : r(u);
        }),
        onPointerMove: ee(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && o(u);
        }),
        onPointerUp: ee(e.onPointerUp, (u) => {
          const h = u.target;
          h.hasPointerCapture(u.pointerId) && (h.releasePointerCapture(u.pointerId), s(u));
        })
      }
    );
  }
), md = "SliderTrack", pd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(md, n);
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
pd.displayName = md;
var es = "SliderRange", gd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(es, n), s = fd(es, n), i = p.useRef(null), a = me(t, i), l = o.values.length, c = o.values.map(
      (h) => kd(h, o.min, o.max)
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
gd.displayName = es;
var vd = "SliderThumb", [_0, bd] = ui(vd), yd = "SliderThumbProvider";
function wd(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, s = Jn(yd, t), i = A0(t), [a, l] = p.useState(null), c = p.useMemo(
    () => a ? i().findIndex((y) => y.ref.current === a) : -1,
    [i, a]
  ), d = Ns(a), u = a ? !!s.form || !!a.closest("form") : !0, h = s.values[c], m = n ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), v = h === void 0 ? 0 : kd(h, s.min, s.max);
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
  return /* @__PURE__ */ f(_0, { scope: t, ...g, children: G0(o) ? o(g) : r });
}
wd.displayName = yd;
var Cr = "SliderThumbTrigger", xd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Jn(Cr, n), s = fd(Cr, n), { index: i, value: a, percent: l, size: c, onThumbChange: d } = bd(
      Cr,
      n
    ), u = me(t, d), h = L0(i, o.values.length), m = c?.[s.size], v = m ? B0(m, l, s.direction) : 0;
    return /* @__PURE__ */ f(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${v}px)`
        },
        children: /* @__PURE__ */ f(Qo.ItemSlot, { scope: n, children: /* @__PURE__ */ f(
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
            onFocus: ee(e.onFocus, () => {
              o.valueIndexToChangeRef.current = i;
            })
          }
        ) })
      }
    );
  }
);
xd.displayName = Cr;
var Cd = p.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, name: r, ...o } = e;
    return /* @__PURE__ */ f(
      wd,
      {
        __scopeSlider: n,
        name: r,
        internal_do_not_use_render: ({ index: s, isFormControl: i }) => /* @__PURE__ */ F(Te, { children: [
          /* @__PURE__ */ f(
            xd,
            {
              ...o,
              ref: t,
              __scopeSlider: n
            }
          ),
          i ? /* @__PURE__ */ f(
            Nd,
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
Cd.displayName = vd;
var Sd = "SliderBubbleInput", Nd = p.forwardRef(
  ({ __scopeSlider: e, ...t }, n) => {
    const { value: r, name: o, form: s } = bd(Sd, e), i = p.useRef(null), a = me(i, n), l = Ju(r);
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
Nd.displayName = Sd;
function F0(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, s) => o - s);
}
function kd(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return ad(s, [0, 100]);
}
function L0(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function $0(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function B0(e, t, n) {
  const r = e / 2, s = fi([0, 50], [0, r]);
  return (r - s(t) * n) * n;
}
function z0(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function H0(e, t) {
  if (t > 0) {
    const n = z0(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function fi(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Rd(e) {
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
function K0(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const s = Rd(n), i = (e - t) / n, a = Math.round(i), l = Sr(a * n + t, s) === Sr(e, s);
  let c;
  return l ? c = a + o * r : r > 0 ? c = Math.ceil(i) : c = Math.floor(i), Sr(c * n + t, s);
}
function G0(e) {
  return typeof e == "function";
}
const hi = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ F(
  di,
  {
    ref: n,
    className: ce(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f(pd, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ f(gd, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ f(Cd, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
hi.displayName = di.displayName;
var W0 = "Label", Id = p.forwardRef((e, t) => /* @__PURE__ */ f(
  pe.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Id.displayName = W0;
var Pd = Id;
const sn = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Pd,
  {
    ref: n,
    className: ce(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
sn.displayName = Pd.displayName;
function Ed(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((i) => typeof i == "function" ? i(o) : i === o.id || i === o.templateId || o.componentKey === i) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function j0({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = Ed(e, t), o = (s) => {
    const i = s.getValue(t);
    switch (s.type) {
      case "select":
        return /* @__PURE__ */ F("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(sn, { htmlFor: s.id, className: "text-xs font-medium text-gray-500", children: s.label }),
          /* @__PURE__ */ f(
            Zu,
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
            id,
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
            hi,
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
                children: /* @__PURE__ */ f(rm, { className: "h-3.5 w-3.5" })
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
                children: c && /* @__PURE__ */ f(cs, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
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
function V0({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || Ed(e, t).length === 0 ? null : /* @__PURE__ */ F(jn, { modal: !1, children: [
    /* @__PURE__ */ f(Vn, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ F(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ f(pl, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ f(pn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ f(
      j0,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function U0({
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
  const [m, v] = ie(!1), [g, y] = ie(!1), [w, N] = ie(e), S = de(null);
  le(() => {
    N(e);
  }, [e]), le(() => {
    g && setTimeout(() => {
      S.current?.focus(), S.current?.select();
    }, 10);
  }, [g]);
  const b = () => {
    const k = w.trim();
    k && k !== e && a?.(k), y(!1);
  }, R = n || r || o || s || i, I = t || R;
  return g ? /* @__PURE__ */ f(
    "input",
    {
      ref: S,
      value: w,
      onChange: (k) => N(k.target.value),
      onKeyDown: (k) => {
        k.key === "Enter" && b(), k.key === "Escape" && (N(e), y(!1)), k.stopPropagation();
      },
      onBlur: b,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : I ? /* @__PURE__ */ F(jn, { open: m, onOpenChange: v, modal: !1, children: [
    /* @__PURE__ */ f(Vn, { asChild: !0, children: /* @__PURE__ */ F(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ f("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ f(ml, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ F(pn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ F($e, { onSelect: (k) => {
        k.preventDefault(), v(!1), y(!0);
      }, children: [
        /* @__PURE__ */ f(sm, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && R && /* @__PURE__ */ f(Wt, {}),
      n && /* @__PURE__ */ F($e, { onClick: l, children: [
        /* @__PURE__ */ f(zh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ F($e, { onClick: c, children: [
        /* @__PURE__ */ f(Lh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ f(Wt, {}),
      o && /* @__PURE__ */ F($e, { onClick: d, children: [
        /* @__PURE__ */ f(nt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      s && /* @__PURE__ */ F($e, { onClick: u, children: [
        /* @__PURE__ */ f(Xh, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      i && /* @__PURE__ */ f(Wt, {}),
      i && /* @__PURE__ */ F($e, { onClick: h, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ f(um, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ f("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function Y0(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: s,
    payload: i,
    setup: a,
    stateKey: l = qt,
    resolveNewItem: c,
    notifyError: d,
    pageFilter: u
  } = e, [h, m] = ie(t), [v, g] = ie(!1), y = de(t);
  le(() => {
    try {
      const A = JSON.stringify(y.current), D = JSON.stringify(t);
      A !== D && (y.current = t, m(t));
    } catch {
      y.current !== t && (y.current = t, m(t));
    }
  }, [t]);
  const w = xe(Un), N = he((A) => {
    m(A);
    const D = ou(A, l);
    w?.mergePageEditorState && w.mergePageEditorState(A, l), o?.(D), r?.(A, D);
  }, [r, o, l, w]), S = J(() => {
    const A = /* @__PURE__ */ new Map();
    return h.forEach((D) => {
      const B = D.templateId ?? D.id;
      A.set(B, (A.get(B) ?? 0) + 1), Fe(D) && D.pages?.forEach((L) => {
        const M = L.templateId ?? L.id;
        A.set(M, (A.get(M) ?? 0) + 1);
      });
    }), A;
  }, [h]), b = J(() => n.filter((A) => {
    if (A.kind === "page") {
      const V = A, U = V.templateId ?? V.id, ne = S.get(U) ?? 0, re = V.repeatable ?? !1, H = V.maxInstances ?? null;
      return !(!re && ne > 0 || H !== null && ne >= H);
    }
    const D = A, B = D.templateId ?? D.id, L = S.get(B) ?? 0, M = D.repeatable ?? !1, K = D.maxInstances ?? null;
    return !(!M && L > 0 || M && K !== null && L >= K);
  }), [n, S]), R = J(() => mt(h), [h]), I = he(async (A, D) => {
    const B = (H) => H ? typeof H == "string" ? H : H.mode ?? "optional" : "none", L = (H, G) => {
      if (!H) return [];
      if (Array.isArray(H)) return H;
      try {
        const X = H(G);
        if (!Array.isArray(X))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof X), [];
        const q = X.filter((Y) => typeof Y == "string");
        return q.length !== X.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), q;
      } catch (X) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", X), [];
      }
    }, K = ((H) => {
      if (H.kind === "page") {
        const te = H, fe = te.templateId ?? te.id, ge = te.componentKey ?? te.id;
        return iu(fe, ge, {
          label: te.label,
          className: te.className,
          repeatable: te.repeatable,
          maxInstances: te.maxInstances,
          integration: te.integration,
          strictPosition: te.strictPosition
        });
      }
      const G = H, X = G.templateId ?? G.id, q = {
        payload: i,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, Y = L(G.pageComponentKeys, q);
      return au(X, Y, {
        label: G.label,
        repeatable: G.repeatable ?? !1,
        maxInstances: G.maxInstances ?? null,
        integration: G.integration,
        strictPosition: G.strictPosition
      });
    })(A);
    typeof window < "u" && window.$uhuu?.debug;
    let V, U = K;
    if (c)
      U = await c(K);
    else {
      const H = B(K.integration);
      let G = !1;
      if (H !== "none" && typeof window < "u") {
        const X = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        X && (V = await X({ item: K, mode: H }), V == null && H === "required" && (G = !0));
      }
      if (G) return { success: !1 };
    }
    if (U === null) return { success: !1 };
    const ne = U ?? K;
    if (V !== void 0 && w?.setIntegrationPayload) {
      const H = ne.id;
      w.setIntegrationPayload(H, V);
    }
    return N(((H, G, X) => {
      const q = G.strictPosition;
      if (q === "start") return [G, ...H];
      if (q === "end") return [...H, G];
      const Y = [], te = [], fe = [];
      if (H.forEach((ae) => {
        const Ie = ae.strictPosition;
        Ie === "start" ? Y.push(ae) : Ie === "end" ? fe.push(ae) : te.push(ae);
      }), !X || X.mode === "end")
        return [...Y, ...te, G, ...fe];
      const ge = te.findIndex((ae) => ae.id === X.anchorId);
      return ge === -1 ? H.find((je) => je.id === X.anchorId)?.strictPosition === "start" ? [...Y, G, ...te, ...fe] : [...Y, ...te, G, ...fe] : (X.mode === "before" ? te.splice(ge, 0, G) : te.splice(ge + 1, 0, G), [...Y, ...te, ...fe]);
    })(h, ne, D)), { success: !0, insertedId: ne.id };
  }, [h, N, c, w]), k = he((A) => {
    const D = (L) => {
      d ? d(L) : alert(L);
    }, B = h.find((L) => L.id === A);
    if (B) {
      if (mt(h) <= 1) {
        D("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (w?.removeIntegrationPayload) {
        const M = B.id;
        w.payload?.integrations?.[M] !== void 0 && w.removeIntegrationPayload(M);
      }
      N(h.filter((M) => M.id !== A));
      return;
    }
    for (const L of h)
      if (Fe(L) && L.pages.some((M) => M.id === A)) {
        if (mt(h) <= 1) {
          D("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (L.pages.length === 1) {
          if (w?.removeIntegrationPayload) {
            const K = L.id;
            w.payload?.integrations?.[K] !== void 0 && w.removeIntegrationPayload(K);
          }
          N(h.filter((K) => K.id !== L.id));
        } else
          N(h.map((K) => K.id === L.id && Fe(K) ? {
            ...K,
            pages: K.pages.filter((V) => V.id !== A)
          } : K));
        return;
      }
  }, [h, d, N, w]), x = he((A, D) => {
    N(h.map((B) => B.id === A ? Fe(B) ? {
      ...B,
      ...D
    } : { ...B, ...D } : B));
  }, [h, N]), P = he((A) => {
    N(A);
  }, [N]), C = J(() => {
    const A = Vb(h);
    return u ? Zb(A, u) : A;
  }, [h, u]), E = he((A) => {
    const D = [];
    return C.forEach((B) => {
      Fe(B) ? (B.pages ?? []).forEach((M) => {
        D.push(A(M, B));
      }) : D.push(A(B, B));
    }), D;
  }, [C]), T = J(
    () => Ub(C),
    [C]
  ), $ = he((A) => {
    const D = Yb(A, h);
    N(((L) => {
      const M = [], K = [], V = [];
      return L.forEach((U) => {
        const ne = U.strictPosition;
        ne === "start" ? M.push(U) : ne === "end" ? V.push(U) : K.push(U);
      }), [...M, ...K, ...V];
    })(D));
  }, [h, N]), _ = he(() => {
    g(!0);
  }, []), z = J(() => {
    if (s)
      return Zs({ pageComponents: s, payload: i, setup: a });
  }, [s, i, a]);
  return {
    items: h,
    itemsWithPageNum: C,
    totalPageCount: R,
    availableItemsToAdd: b,
    addItem: I,
    removeItem: k,
    updateItemFields: x,
    reorderItems: P,
    addDialogOpen: v,
    setAddDialogOpen: g,
    openAddDialog: _,
    renderItems: E,
    itemsForReorder: T,
    handleReorder: $,
    defaultRenderThumbnail: z
  };
}
function q0({
  items: e,
  reorderItems: t,
  availableItemsToAdd: n,
  setPendingInsertPosition: r,
  openAddDialog: o
}) {
  const s = J(
    () => e.filter((a) => !a.strictPosition),
    [e]
  );
  return he(
    (a, l) => {
      if (!a) return {};
      const c = a.id, d = s.findIndex((y) => y.id === c), u = d !== -1, h = u && d > 0 ? () => {
        const y = [...e], w = y.findIndex((N) => N.id === c);
        w < 1 || ([y[w - 1], y[w]] = [y[w], y[w - 1]], t(y));
      } : void 0, m = u && d < s.length - 1 ? () => {
        const y = [...e], w = y.findIndex((N) => N.id === c);
        w < 0 || w >= y.length - 1 || ([y[w], y[w + 1]] = [y[w + 1], y[w]], t(y));
      } : void 0, v = u && a.repeatable ? () => {
        const w = { ...e.find((b) => b.id === c) ?? a, id: `${c}_copy_${Date.now()}` }, N = [...e], S = N.findIndex((b) => b.id === c);
        N.splice(S < 0 ? N.length : S + 1, 0, w), t(N);
      } : void 0;
      return { onAddPage: l && n.length > 0 ? () => {
        r({ mode: "before", anchorId: l }), o();
      } : void 0, onMoveUp: h, onMoveDown: m, onDuplicate: v };
    },
    [e, s, t, n, r, o]
  );
}
function X0(e = [], t = {}) {
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
function Z0({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = ie({
    layoutKey: n,
    layouts: {}
  }), s = r.layoutKey === n ? r.layouts : {}, i = J(
    () => e.filter((m) => m.hasFlow).map((m) => m.flowKey).join("|"),
    [e]
  ), a = J(
    () => new Set(i ? i.split("|") : []),
    [i]
  ), l = J(() => {
    const m = {};
    for (const v of e) {
      if (!v.hasFlow) continue;
      const g = s[v.flowKey];
      g && (m[v.flowKey] = g);
    }
    return m;
  }, [s, e]), c = he((m, v) => {
    a.has(m) && o((g) => {
      const y = g.layoutKey === n ? g.layouts : {}, w = {};
      let N = !1;
      for (const [k, x] of Object.entries(y))
        a.has(k) ? w[k] = x : N = !0;
      const S = w[m] ?? { flows: {} }, b = S.flows[v.flowId], R = b ? JSON.stringify(b) : "", I = JSON.stringify(v.chunks);
      return g.layoutKey === n && R === I && !N ? g : {
        layoutKey: n,
        layouts: {
          ...w,
          [m]: {
            flows: {
              ...S.flows,
              [v.flowId]: v.chunks
            }
          }
        }
      };
    });
  }, [a, n]), d = J(
    () => X0(e, l),
    [e, l]
  ), u = d.length, h = J(
    () => d.filter((m) => Jb(m.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: h,
    virtualTotalPageCount: u,
    registerMeasurement: c
  };
}
function Ra(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function J0(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function Q0({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const s = uu(e, t, n), i = n && Fe(n) ? n.id : void 0, a = `pages.${t.id}`, l = i ? `pages.${i}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: i,
    integration: {
      instanceId: s.instanceId,
      data: s.integration,
      path: (c) => ca(s.instanceId, c)
    },
    paths: {
      integration: (c) => ca(s.instanceId, c),
      page: (c) => Ra(a, c),
      group: (c) => Ra(l, c),
      document: (c) => c ?? null
    },
    defaults: {
      imageGalleryPath: J0(
        e,
        s.integration,
        o
      )
    }
  };
}
const Ia = (e, t, n = !1, r) => {
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
  } : iu(a, i, {
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
}, Pa = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, i = tx(e.pageComponentKeys, o).map((a) => {
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
  return au(e.id, i, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, ex = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], tx = (e, t) => {
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
}, nx = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: s = {},
    payload: i
  } = e, a = ex(n), l = /* @__PURE__ */ new Map();
  a.forEach((g) => l.set(g.id, g));
  const c = r.length ? r : Object.keys(o), d = { ...s };
  Object.entries(o).forEach(([g, y]) => {
    y.component && (d[g] = y.component);
  });
  const u = t.map((g) => {
    if (typeof g == "string") {
      const w = l.get(g);
      return w ? Pa(w, !0, i, o) : Ia(g, void 0, !0, o);
    }
    return g.pageComponentKeys !== void 0 ? Pa(g, !0, i, o) : Ia(g, void 0, !0, o);
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
      const y = o?.[g];
      return {
        kind: "page",
        id: g,
        // Template ID
        templateId: g,
        componentKey: y?.componentKey ?? g,
        label: y?.label,
        className: y?.className,
        repeatable: y?.repeatable ?? !1,
        maxInstances: y?.maxInstances ?? null,
        thumbnail: y?.thumbnail,
        integration: y?.integration,
        strictPosition: y?.strictPosition,
        hasFlow: y?.hasFlow
      };
    }),
    ...h
  ];
  return { initialItems: u, availableItems: v, pageComponents: d };
};
var Ad = "AlertDialog", [rx] = gt(Ad, [
  mu
]), bt = mu(), Dd = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bt(t);
  return /* @__PURE__ */ f(Gs, { ...r, ...n, modal: !0 });
};
Dd.displayName = Ad;
var ox = "AlertDialogTrigger", sx = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(gu, { ...o, ...r, ref: t });
  }
);
sx.displayName = ox;
var ix = "AlertDialogPortal", Md = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = bt(t);
  return /* @__PURE__ */ f(js, { ...r, ...n });
};
Md.displayName = ix;
var ax = "AlertDialogOverlay", Od = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(Qr, { ...o, ...r, ref: t });
  }
);
Od.displayName = ax;
var Td = "AlertDialogContent", [lx, cx] = rx(Td), _d = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, s = bt(n), i = p.useRef(null), a = me(t, i), l = p.useRef(null);
    return /* @__PURE__ */ f(lx, { scope: n, cancelRef: l, children: /* @__PURE__ */ f(
      eo,
      {
        role: "alertdialog",
        ...s,
        ...o,
        ref: a,
        onOpenAutoFocus: ee(o.onOpenAutoFocus, (c) => {
          c.preventDefault(), l.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (c) => c.preventDefault(),
        onInteractOutside: (c) => c.preventDefault(),
        children: r
      }
    ) });
  }
);
_d.displayName = Td;
var ux = "AlertDialogTitle", Fd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(to, { ...o, ...r, ref: t });
  }
);
Fd.displayName = ux;
var dx = "AlertDialogDescription", Ld = p.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
  return /* @__PURE__ */ f(no, { ...o, ...r, ref: t });
});
Ld.displayName = dx;
var fx = "AlertDialogAction", $d = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ f(ro, { ...o, ...r, ref: t });
  }
);
$d.displayName = fx;
var Bd = "AlertDialogCancel", zd = p.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = cx(Bd, n), s = bt(n), i = me(t, o);
    return /* @__PURE__ */ f(ro, { ...s, ...r, ref: i });
  }
);
zd.displayName = Bd;
var hx = Dd, mx = Md, Hd = Od, Kd = _d, Gd = $d, Wd = zd, jd = Fd, Vd = Ld;
const px = hx, gx = mx, Ud = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Hd,
  {
    ref: n,
    className: ce(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ud.displayName = Hd.displayName;
const Yd = p.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = us();
  return /* @__PURE__ */ F(gx, { container: r || void 0, children: [
    /* @__PURE__ */ f(Ud, {}),
    /* @__PURE__ */ f(
      Kd,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: ce(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
Yd.displayName = Kd.displayName;
const qd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f("div", { className: ce("flex flex-col gap-2 text-left", e), ...t });
qd.displayName = "AlertDialogHeader";
const Xd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: ce("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
Xd.displayName = "AlertDialogFooter";
const Zd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  jd,
  {
    ref: n,
    className: ce("text-base font-semibold text-gray-900", e),
    ...t
  }
));
Zd.displayName = jd.displayName;
const Jd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Vd,
  {
    ref: n,
    className: ce("text-sm text-gray-600", e),
    ...t
  }
));
Jd.displayName = Vd.displayName;
const Qd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Gd,
  {
    ref: n,
    className: ce(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
Qd.displayName = Gd.displayName;
const vx = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Wd,
  {
    ref: n,
    className: ce(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
vx.displayName = Wd.displayName;
const Oo = "__edit__", To = "__print__";
function Ea({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ F(
    $e,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ f(cs, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ f("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ f("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function Aa({ label: e, value: t }) {
  return /* @__PURE__ */ F(nu, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ f("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ F("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ f("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ f(Vh, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function bx({
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
    { value: Oo, label: "Edit" },
    ...h.length > 0 ? h.map((b) => ({ value: b, label: e[b].label })) : [{ value: To, label: "Print" }]
  ], v = r ? Oo : t || h[0] || To, g = m.find((b) => b.value === v)?.label ?? "Edit", y = (b) => {
    if (b === Oo) {
      o(!0);
      return;
    }
    o(!1), b !== To && e && e[b] && n?.(b, e[b]);
  }, w = !!l && l.length > 0, N = l?.find((b) => b.id === c)?.name, S = () => {
    const b = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    b && b.trim() && u?.(b.trim());
  };
  return /* @__PURE__ */ F(jn, { modal: !1, children: [
    /* @__PURE__ */ f(Vn, { asChild: !0, children: /* @__PURE__ */ F(
      Ae,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ f(Kh, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ F(pn, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ F(aa, { children: [
        /* @__PURE__ */ f(Aa, { label: "Print Preview", value: g }),
        /* @__PURE__ */ f(Yo, { className: "min-w-[180px]", children: m.map((b) => /* @__PURE__ */ f(
          Ea,
          {
            checked: v === b.value,
            label: b.label,
            onSelect: () => y(b.value)
          },
          b.value
        )) })
      ] }),
      w && /* @__PURE__ */ F(aa, { children: [
        /* @__PURE__ */ f(Aa, { label: "Brand Kit", value: N }),
        /* @__PURE__ */ F(Yo, { className: "min-w-[200px]", children: [
          l.map((b) => /* @__PURE__ */ f(
            Ea,
            {
              checked: c === b.id,
              label: b.name,
              keepOpen: !0,
              onSelect: () => d?.(b.id)
            },
            b.id
          )),
          u && /* @__PURE__ */ F(Te, { children: [
            /* @__PURE__ */ f(Wt, {}),
            /* @__PURE__ */ F(
              $e,
              {
                onSelect: (b) => {
                  b.preventDefault(), S();
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
        /* @__PURE__ */ f(Wt, {}),
        /* @__PURE__ */ f(ru, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ F("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ F("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ f("span", { children: "Opacity" }),
            /* @__PURE__ */ F("span", { children: [
              i,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ f(
            hi,
            {
              value: [i],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (b) => {
                const R = b[0] ?? i;
                a?.(R);
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
const yx = { width: 210, height: 297 };
function wx(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function xx({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ F("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ f("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ f(cs, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
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
function Da({
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
  stateKey: v = qt,
  onItemsChange: g,
  onStateChange: y,
  resolveNewItem: w,
  pageFilter: N,
  printConfigs: S,
  defaultZoomMode: b = "manual",
  brandKits: R,
  activeBrandKitId: I,
  onSelectBrandKit: k,
  onAddBrandKit: x
}) {
  const P = o ?? yx, { interactive: C, setInteractive: E, enableDevTools: T } = ds(), $ = fs(), [_, z] = ie(null), [A, D] = ie(null), [B, L] = ie(void 0), [M, K] = ie(0), [V, U] = ie(0), ne = _ ?? N, re = J(() => A ? { ...P, ...A } : P, [P, A]), H = xe(Un), G = H?.payload ?? r, [X, q] = ie(!1), Y = re?.preview ?? "single_page", te = J(
    () => Y === "two_pages" ? { ...re, preview: "single_page" } : re,
    [Y, re]
  ), fe = J(() => Ks(e), [e]), ge = J(() => s?.length ? s.map((O) => "getValue" in O ? O : H?.setPageOptionValue ? ay(
    O,
    H.payload,
    H.setPageOptionValue
  ) : ((Gt() || T) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [s, H]), [ae, Ie] = ie(null), [je, Xt] = ie({ mode: "end" }), [ct, Zt] = ie(null), Be = de(null), {
    items: yt,
    itemsWithPageNum: $t,
    availableItemsToAdd: Jt,
    addItem: wn,
    removeItem: Qn,
    reorderItems: fo,
    updateItemFields: Ve,
    addDialogOpen: wt,
    setAddDialogOpen: Bt,
    openAddDialog: Qt,
    itemsForReorder: Je,
    handleReorder: er,
    defaultRenderThumbnail: ho
  } = Y0({
    initialItems: fe,
    availableItems: t,
    pageComponents: n,
    payload: G,
    setup: re,
    stateKey: v,
    onItemsChange: g,
    onStateChange: y,
    resolveNewItem: w,
    notifyError: i
  }), xn = J(() => {
    const O = [];
    for (const Z of $t) {
      const Q = Fe(Z) ? Z.pages ?? [] : [Z];
      for (const oe of Q) {
        if (!oe?.id) continue;
        const ve = Fe(Z) ? Z : void 0;
        O.push({
          ...oe,
          kind: "page",
          id: oe.id,
          pageNum: oe.pageNum ?? O.length + 1,
          basePageNum: oe.pageNum ?? O.length + 1,
          parentGroup: ve,
          flowKey: wx(oe, ve)
        });
      }
    }
    return O.sort((Z, Q) => (Z.basePageNum ?? 0) - (Q.basePageNum ?? 0));
  }, [$t]), en = J(() => JSON.stringify({
    format: te?.format,
    orientation: te?.orientation,
    width: te?.width,
    height: te?.height,
    bleed: te?.bleed,
    showBleed: te?.showBleed,
    preview: te?.preview,
    flowPages: xn.filter((O) => O.hasFlow).map((O) => O.flowKey).join("|")
  }), [te, xn]), Cn = J(() => mt(yt), [yt]), {
    allVirtualPages: tr,
    renderedVirtualPages: xt,
    virtualTotalPageCount: zt,
    registerMeasurement: mo
  } = Z0({
    logicalPages: xn,
    pageFilter: ne,
    layoutKey: en
  }), nr = J(
    () => new Set(xt.map((O) => O.virtualPageId)),
    [xt]
  ), Ne = J(
    () => tr.filter((O) => O.hasFlow && O.virtualPageIndex === 0 && (c || !nr.has(O.virtualPageId))),
    [tr, nr, c]
  );
  p.useEffect(() => {
    if (!ct) return;
    const O = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${ct}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(O);
  }, [ct]);
  const Pe = q0({
    items: yt,
    reorderItems: fo,
    availableItemsToAdd: Jt,
    setPendingInsertPosition: Xt,
    openAddDialog: Qt
  }), Ee = he(async (O) => {
    const Z = await wn(O, je);
    Z.success && (Zt(Z.insertedId), Be.current && clearTimeout(Be.current), Be.current = setTimeout(() => Zt(null), 1200), Xt({ mode: "end" }), O.repeatable && O.integration && Ie(O));
  }, [wn, je]), Ue = he(() => {
    const O = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!O.length) return { mode: "end" };
    const Z = window.innerHeight / 2;
    let Q = null, oe = 1 / 0;
    for (const Re of O) {
      const Qe = Re.getBoundingClientRect(), ut = Math.abs(Qe.top + Qe.height / 2 - Z);
      ut < oe && (oe = ut, Q = Re);
    }
    const ve = Q?.getAttribute("data-page-item-id");
    return ve ? { mode: "after", anchorId: ve } : { mode: "end" };
  }, []), Me = he(() => {
    Xt(Ue()), Qt();
  }, [Ue, Qt]), Oe = p.useCallback(
    (O, Z, Q) => {
      if (!Z) return;
      const oe = O.applyPatch?.(Q, Z);
      oe && Ve(Z.id, oe), O.onChange?.(Z.id, Q, {
        item: Z,
        updateItem: (ve) => Ve(Z.id, ve)
      });
    },
    [Ve]
  ), ze = (O) => /* @__PURE__ */ F("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ f("span", { children: "Page" }),
    /* @__PURE__ */ F("span", { children: [
      O.pageNo,
      " / ",
      O.total
    ] })
  ] }), Ct = (O, Z, Q) => l ? l({ pageNo: O, total: zt, pageId: Z, parent: Q }) : ze({ pageNo: O, total: zt }), we = (O, Z = {}) => {
    const Q = O.parentGroup;
    if (c && Z.renderVisible !== !1)
      return c({ page: O, parent: Q });
    const oe = O.componentKey ?? O.id, ve = T && a ? a(O) : null, Re = T && a ? p.isValidElement(ve) ? p.cloneElement(ve, {
      opacity: V
    }) : ve : null, Qe = O.templateId ?? oe, ut = n[oe], rr = H?.getPagePayload ? H.getPagePayload(O) : Tr(G, { id: O.id, templateId: Qe, componentKey: oe }), po = du(
      G,
      O,
      Q
    ), or = Q0({
      payload: G,
      page: O,
      parentGroup: Q,
      pagePayload: rr
    });
    return /* @__PURE__ */ f(
      k0,
      {
        pageId: O.id,
        templateId: Qe,
        pageNo: O.pageNum,
        measurementPageNo: O.basePageNum,
        component: ut,
        payload: G,
        pagePayload: rr,
        integration: po,
        page: O,
        parentGroup: Q,
        componentKey: oe,
        setup: te,
        reference: Re,
        overlay: ({ pageNo: Sn }) => Ct(Sn, O.id, Q),
        className: O.className,
        dataBinding: or,
        totalPages: zt,
        measurementTotalPages: Cn,
        flowPageIndex: O.virtualPageIndex,
        flowChunksByFlowId: O.flowChunksByFlowId,
        measureFlow: Z.measureFlow ?? (!!O.hasFlow && O.virtualPageIndex === 0),
        flowMeasurementKey: O.flowKey,
        flowMeasurementVersion: en,
        onFlowMeasurement: O.hasFlow ? mo : void 0,
        renderVisible: Z.renderVisible ?? !0
      },
      `${Z.renderVisible === !1 ? "measure-only" : "page"}-${O.virtualPageId}`
    );
  }, He = (O, Z, Q) => {
    const oe = !!Z && Fe(Z), ve = oe && Z.pages[0]?.id === O.id;
    if (O.virtualPageIndex > 0)
      return /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: O.pageNum }),
        /* @__PURE__ */ F("span", { className: "text-xs text-gray-500", children: [
          O.label || O.componentKey || O.id,
          " continued"
        ] })
      ] });
    if (oe && !ve)
      return /* @__PURE__ */ f("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: O.pageNum }),
        O.label && /* @__PURE__ */ f("span", { className: "text-xs text-gray-500", children: O.label }),
        /* @__PURE__ */ f("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const Re = oe ? Z : O, Qe = oe ? Z.label || Z.id : O.label || `Page ${O.pageNum}`;
    return /* @__PURE__ */ F("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ f("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: O.pageNum }),
      /* @__PURE__ */ f(
        U0,
        {
          name: Qe,
          canRename: !0,
          canMoveUp: !!Q?.onMoveUp,
          canMoveDown: !!Q?.onMoveDown,
          canAddPage: !!Q?.onAddPage,
          canDuplicate: !!Q?.onDuplicate,
          canDelete: Cn > 1,
          onRename: (ut) => Ve(Re.id, { label: ut || void 0 }),
          onMoveUp: Q?.onMoveUp,
          onMoveDown: Q?.onMoveDown,
          onAddPage: Q?.onAddPage,
          onDuplicate: Q?.onDuplicate,
          onDelete: () => Qn(Re.id)
        }
      ),
      /* @__PURE__ */ f("span", { className: "pl-1", children: ge.length > 0 && /* @__PURE__ */ f(
        V0,
        {
          pageOptions: ge,
          targetItem: Re,
          onChange: Oe,
          title: oe ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, Ke = J(() => {
    if (Y !== "two_pages") return [];
    const O = xt;
    if (!O.length) return [];
    const Z = [{ left: void 0, right: O[0], layout: "right" }];
    for (let Q = 1; Q < O.length; Q += 2) {
      const oe = O[Q], ve = O[Q + 1];
      if (ve)
        Z.push({ left: oe, right: ve, layout: "spread" });
      else {
        const Re = oe.pageNum % 2 === 0;
        Z.push({
          left: Re ? oe : void 0,
          right: Re ? void 0 : oe,
          layout: Re ? "left" : "right"
        });
      }
    }
    return Z;
  }, [Y, xt]), Ye = /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ F(ai, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      zt,
      " ",
      zt === 1 ? "Page" : "Pages"
    ] }),
    T && /* @__PURE__ */ f(
      bx,
      {
        modes: S,
        selectedMode: B,
        onModeChange: (O, Z) => {
          L(O), z(Z.filter ?? null), D(Z.pageFormat ?? null), K((Q) => Q + 1);
        },
        interactive: C,
        onInteractiveChange: (O) => {
          E(O), O && D(null);
        },
        hasReferenceRenderer: !!a,
        referenceOpacity: V,
        onReferenceOpacityChange: U,
        brandKits: R,
        activeBrandKitId: I,
        onSelectBrandKit: k,
        onAddBrandKit: x
      }
    ),
    C && /* @__PURE__ */ F(Te, { children: [
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
          onClick: () => q(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ f(Yh, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ F(Te, { children: [
    Ne.map((O) => we(O, {
      renderVisible: !1,
      measureFlow: !0
    })),
    T && !C && /* @__PURE__ */ F(
      Ae,
      {
        onClick: () => E(!0),
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ f(vl, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ f(
      vy,
      {
        defaultZoom: 80,
        defaultZoomMode: b,
        minZoom: 25,
        maxZoom: 200,
        menuItems: d ?? Ye,
        onAddPage: Me,
        preview: Y,
        children: Y === "two_pages" ? Ke.map((O, Z) => {
          const Q = O.left ?? O.right, oe = O.right ?? O.left, ve = Q?.parentGroup?.id ?? Q?.id ?? null, Re = oe?.parentGroup?.id ?? oe?.id ?? null, Qe = O.left?.parentGroup?.id ?? O.left?.id, ut = O.right?.parentGroup?.id ?? O.right?.id, rr = Qe === ct, po = ut === ct, or = (Sn, ef) => Pe(Sn ? Sn.parentGroup ?? Sn : void 0, ef);
          return /* @__PURE__ */ F(my, { layout: O.layout, pageItemId: Re ?? void 0, children: [
            O.left && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": O.left.virtualPageIndex === 0 ? Qe : void 0,
                className: rr ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  Po,
                  {
                    title: `Sheet ${O.left.pageNum}`,
                    controls: He(O.left, O.left.parentGroup, or(O.left, ve)),
                    origin: O.left.pageNum % 2 === 0 ? "right" : "left",
                    children: we(O.left)
                  },
                  O.left.virtualPageId
                )
              }
            ),
            O.right && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": O.right.virtualPageIndex === 0 ? ut : void 0,
                className: po ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  Po,
                  {
                    title: `Sheet ${O.right.pageNum}`,
                    controls: He(O.right, O.right.parentGroup, or(O.right, Re)),
                    origin: O.right.pageNum % 2 === 0 ? "right" : "left",
                    children: we(O.right)
                  },
                  O.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Z}`);
        }) : xt.map((O) => {
          const Z = O.parentGroup ?? O, Q = O.parentGroup?.id ?? O.id, oe = Pe(Z, Q), ve = O.parentGroup?.id ?? O.id, Re = ct === ve;
          return /* @__PURE__ */ f(
            "div",
            {
              "data-page-item-id": O.virtualPageIndex === 0 ? ve : void 0,
              className: Re ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ f(
                Po,
                {
                  title: `Sheet ${O.pageNum}`,
                  controls: He(O, O.parentGroup, oe),
                  children: we(O)
                }
              )
            },
            O.virtualPageId
          );
        })
      },
      `dev-mode-${M}-${B ?? "default"}`
    ),
    C && !$ && /* @__PURE__ */ F(Te, { children: [
      /* @__PURE__ */ f(
        ky,
        {
          open: wt,
          onOpenChange: Bt,
          availableItems: Jt,
          onSelectItem: Ee,
          pageComponents: n,
          payload: G,
          setup: P,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ f(
        N0,
        {
          open: X,
          onOpenChange: q,
          pages: Je,
          onReorder: (O) => {
            er(O), q(!1);
          },
          onRemove: (O) => Qn(O.id),
          pageComponents: n,
          payload: G,
          setup: P,
          renderThumbnail: ho,
          title: h,
          description: m,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ f(
      xx,
      {
        label: ae ? ae.label ?? ae.id : null,
        onDone: () => Ie(null),
        onAddAnother: () => {
          const O = ae;
          Ie(null), O && Ee(O);
        }
      }
    )
  ] });
}
function Cx(e) {
  const { templateConfig: t, ...n } = e;
  return xe(Un) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ f(Da, { ...n }) : /* @__PURE__ */ f(
    fu,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ f(Da, { ...n })
    }
  );
}
function Sx(e) {
  const n = xe(Un)?.payload ?? e.payload, r = p.useMemo(
    () => nx({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), [o, s] = p.useState({
    open: !1,
    message: ""
  }), i = p.useCallback((c) => {
    s({ open: !0, message: c });
  }, []), a = p.useMemo(
    () => qb(n),
    [n]
  ), l = p.useMemo(() => {
    if (!a?.items)
      return r.initialItems;
    const c = e.templateConfig.groups ?? {}, d = Array.isArray(c) ? c : Object.entries(c).map(([b, R]) => ({ id: b, ...R })), u = new Map(d.map((b) => [b.id, b])), h = e.templateConfig.pages ?? {}, m = (b) => {
      const R = b?.componentKey ?? b?.templateId ?? b?.id;
      return !(h[R] ?? h[b?.templateId] ?? h[b?.id])?.hasFlow || b?.hasFlow ? b : { ...b, hasFlow: !0 };
    }, v = a.items.map((b) => {
      if (b.kind !== "group") return m(b);
      const R = b.templateId ?? b.id, I = u.get(R), k = I?.strictPosition !== void 0 && !b.strictPosition ? { ...b, strictPosition: I.strictPosition } : b, x = {
        ...k,
        pages: (k.pages ?? []).map(m)
      };
      if (!I || typeof I.pageComponentKeys != "function") return x;
      try {
        const P = I.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(P) ? P.length === 0 ? {
          ...x,
          pages: []
        } : {
          ...x,
          pages: P.map((C, E) => {
            const T = h[C], $ = T?.dataKey;
            return {
              id: `${x.id}__${$ ?? C}__${E}`,
              componentKey: C,
              templateId: C,
              ...$ ? { dataKey: $ } : {},
              ...T?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${k.id} must return an array, got:`, typeof P), k);
      } catch (P) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${x.id}:`, P), x;
      }
    }), g = new Set(r.initialItems.map((b) => b.id)), y = v.filter((b) => g.has(b.id)), w = mt(y), N = mt(r.initialItems);
    if (!Array.from(g).some(
      (b) => !y.some((R) => R.id === b)
    ) && w !== N) {
      const b = v.filter((P) => {
        if (P.kind !== "group") return !g.has(P.id);
        const C = P.templateId ?? P.id;
        return P.id !== C && !g.has(P.id);
      });
      if (b.length === 0) return r.initialItems;
      const R = [...r.initialItems, ...b], I = R.filter((P) => P.strictPosition === "start"), k = R.filter((P) => P.strictPosition === "end"), x = R.filter((P) => !P.strictPosition);
      return [...I, ...x, ...k];
    }
    return v;
  }, [a?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ f(
      Cx,
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
      px,
      {
        open: o.open,
        onOpenChange: (c) => {
          c || s({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ F(Yd, { children: [
          /* @__PURE__ */ F(qd, { children: [
            /* @__PURE__ */ f(Zd, { children: "Cannot remove item" }),
            /* @__PURE__ */ f(Jd, { children: o.message })
          ] }),
          /* @__PURE__ */ f(Xd, { children: /* @__PURE__ */ f(Qd, { onClick: () => s({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function Nx(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Ma(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Ma(t, e);
  }
}
function Ma(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function kx(e, t, n) {
  const r = {};
  for (const [o, s] of Object.entries(e))
    if (typeof s == "function")
      r[o] = s(t);
    else if (typeof s == "string") {
      const i = s.startsWith("integration.") ? s.slice(12) : s;
      r[o] = Nx(i, t);
    }
  return r;
}
function Rx(e, t, n) {
  return e(t, n);
}
function Ix(e, t, n) {
  return typeof e == "function" ? Rx(e, t, n) : kx(e, t);
}
function Px(e, t, n) {
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
function Ex(e, t, n = {}, r, o = null) {
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
function Ax(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: s } = e, i = p.useMemo(() => Ix(r, n, t?.payload), [r, n, t?.payload]), a = p.useMemo(() => Px(t, n, o), [t, n, o]), l = p.useCallback(
    (d, u = {}, h) => Ex(
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
      const v = dn({ dialog: m }, { page: { paginationType: "static" } });
      if (v.onClick) {
        const g = v.onClick;
        v.onClick = (y) => {
          y.stopPropagation(), g(y);
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
const _x = {
  Pagination: Fo,
  Sheet: Lo,
  FlowArea: Wa,
  FlowPage: ja,
  Flow: Ua,
  FlowColumns: yf,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: ns,
  planFlowColumnChunks: $a,
  FlowDocument: Mf,
  markdownToFlowItems: Bf,
  htmlToFlowItems: qa
}, Fx = {
  TemplateDataProvider: fu,
  PageEditor: Sx,
  InteractiveModeProvider: Sm,
  useInteractive: ds,
  useIntegrationAdapter: Ax
};
export {
  wf as Editable,
  Fx as EditorShell,
  Tx as ImageBlock,
  _x as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
