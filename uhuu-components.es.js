(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[3mm\\],[data-uhuu-portal] .px-\\[3mm\\]{padding-inline:3mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring,[data-uhuu-portal] .ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db);--uhuu-sheet-width: calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height: calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width: 0mm;--uhuu-glue-width: 0mm;--uhuu-paper-color: #ffffff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[3mm\\]{margin-bottom:3mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[148mm\\]{width:148mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#415662\\]{background-color:#415662}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[3mm\\]{padding-inline:3mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}}}@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[3mm\\],[data-uhuu-portal] .px-\\[3mm\\]{padding-inline:3mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring,[data-uhuu-portal] .ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[3mm\\]{margin-bottom:3mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[148mm\\]{width:148mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#415662\\]{background-color:#415662}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[3mm\\]{padding-inline:3mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[3mm\\],[data-uhuu-portal] .px-\\[3mm\\]{padding-inline:3mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring,[data-uhuu-portal] .ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:-moz-max-content;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:-moz-max-content;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as g, jsxs as L, Fragment as Be } from "react/jsx-runtime";
import * as m from "react";
import ke, { createContext as Ft, useEffect as le, forwardRef as br, useContext as Se, useRef as de, createElement as Pi, useState as ce, useLayoutEffect as Uc, useMemo as ee, useCallback as pe, memo as mh, useReducer as vh, cloneElement as bh } from "react";
import * as Ji from "react-dom";
import { flushSync as yh, unstable_batchedUpdates as $r, createPortal as wh } from "react-dom";
class io {
  static handlePageBreakStyles() {
    document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((t) => {
      const n = t.closest("div.uhuu-page-sheet"), r = t.getAttribute("data-paged-css");
      n && r && r.split(" ").filter(Boolean).forEach((i) => n.classList.add(i));
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
    io.handlePageBreakStyles(), io.handleUhuuDialogs();
  }
}
class ba {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
const xh = 400;
function bn(e) {
  const t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
  return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function Le(e) {
  return Math.round(e * 1e4) / 1e4;
}
function on(e) {
  if (!e || typeof e != "object" || e.type === "saddle") return null;
  const t = bn(e.spine);
  if (t === null || t <= 0) return null;
  const n = bn(e.glue);
  return {
    type: "perfect",
    spine: Le(t),
    glue: n === null || n < 0 ? 0 : Le(n)
  };
}
function Qi(e = {}) {
  const t = bn(e.width), n = bn(e.height);
  if (t === null || n === null || t <= 0 || n <= 0) return null;
  const r = bn(e.bleed);
  return {
    width: Le(t),
    height: Le(n),
    bleed: r === null ? 0 : Le(Math.min(Math.max(r, 0), xh))
  };
}
function es(e = {}) {
  const t = Qi(e);
  if (!t) return null;
  const n = on(e.binding), r = n ? t.width * 2 + n.spine : t.width, o = t.height;
  return {
    trimWidth: Le(r),
    trimHeight: Le(o),
    width: Le(r + t.bleed * 2),
    height: Le(o + t.bleed * 2),
    spread: !!n
  };
}
function Yc(e) {
  return Array.isArray(e) ? e.length === 2 ? [{ sheet: "outer", left: e[1], right: e[0] }] : e.length === 4 ? [
    { sheet: "outer", left: e[3], right: e[0] },
    { sheet: "inner", left: e[1], right: e[2] }
  ] : null : null;
}
function qc(e = {}) {
  const t = Qi(e), n = on(e.binding), r = Yc(e.coverPages);
  if (!t || !n || !r) return null;
  const { width: o, height: i, bleed: s } = t, { spine: a, glue: c } = n, l = Le(i + s * 2), d = Le(o * 2 + a), u = Le(d + s * 2), f = Le(s + o), h = Le(s + o + a), b = (y) => ({
    side: "left",
    page: y,
    trim: { x: s, y: s, width: o, height: i },
    // Outer bleed on top/left/bottom only; the panel is cut at the spine.
    bleedBox: { x: 0, y: 0, width: Le(s + o), height: l }
  }), p = (y) => ({
    side: "right",
    page: y,
    trim: { x: h, y: s, width: o, height: i },
    bleedBox: { x: h, y: 0, width: Le(o + s), height: l }
  }), v = r.map((y, w) => {
    const x = y.sheet === "inner", S = x && c > 0 ? [
      { side: "left", x: Le(f - c), y: 0, width: c, height: l },
      { side: "right", x: h, y: 0, width: c, height: l }
    ] : [];
    return {
      sheet: y.sheet,
      index: w,
      panels: [b(y.left), p(y.right)],
      spine: { x: f, y: 0, width: a, height: l, blank: x },
      glueZones: S
    };
  });
  return {
    binding: n,
    page: t,
    sheet: { width: u, height: l, trimWidth: d, trimHeight: i },
    sheets: v
  };
}
function Ch(e = {}) {
  const t = es(e);
  if (!t) return null;
  const n = on(e.binding);
  return {
    "--uhuu-sheet-width": `${t.width}mm`,
    "--uhuu-sheet-height": `${t.height}mm`,
    "--uhuu-spine-width": `${n ? n.spine : 0}mm`,
    "--uhuu-glue-width": `${n ? n.glue : 0}mm`
  };
}
function Sh(e = {}) {
  const t = on(e.binding);
  if (!t) return [];
  const n = [], r = Qi(e), o = bn(e.coverPageCount);
  return r || n.push("binding.spine is set but the page format has no valid width/height; cover spread skipped."), o !== null && o !== 1 && o !== 2 && n.push(
    `binding.spine is set but pageFilter.coverPageCount is ${o}; a cover spread needs 1 (outer sheet only) or 2 (outer + inner). Rendering plain cover pages.`
  ), Array.isArray(e.coverPages) && !Yc(e.coverPages) && n.push(
    `binding.spine is set but the cover filter produced ${e.coverPages.length} page(s); a cover spread needs 2 or 4. Rendering plain cover pages.`
  ), r && t.glue > 0 && t.glue >= r.width / 2 && n.push(
    `binding.glue (${t.glue}mm) is at least half the page width (${r.width}mm); the glue mask would hide most of the inside covers.`
  ), r && r.bleed > 0 && t.spine < r.bleed && n.push(
    `binding.spine (${t.spine}mm) is narrower than the bleed (${r.bleed}mm); panels are cut at the spine, so artwork will not run across it unless the spine component paints it.`
  ), e.preview === "two_pages" && n.push('preview "two_pages" is ignored while a cover spread is active; each sheet is already a spread.'), bn(e.flowCoverPages) > 0 && n.push("a cover page has hasFlow: true; only its first chunk is placed on the cover sheet."), n;
}
class lr {
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
    const { format: n, orientation: r, width: o, height: i } = t, s = typeof n == "string" ? n : "", a = !s || s.toLowerCase() === "custom", c = this.toValidCustomDimension(o), l = this.toValidCustomDimension(i);
    if (a && c !== null && l !== null)
      return { width: c, height: l };
    const d = a ? "A4" : s;
    return this.getDimensions({ format: d || "A4", orientation: r }) ?? this.getDimensions({ format: "A4", orientation: r }) ?? { width: 210, height: 297 };
  }
  static clampBleed(t) {
    return Math.min(Math.max(t ?? 0, 0), 400);
  }
  /**
   * Root CSS custom properties for a pagination setup. Pure (no DOM) so the
   * page/sheet contract can be unit-tested; `pageParams` applies the result.
   *
   * `--uhuu-page-*` describe ONE trim page and drive every `.uhuu-page-sheet`.
   * `--uhuu-sheet-*` describe the physical sheet `@page` prints: identical to
   * page + bleed normally, and the wide cover sheet (2·W + spine + 2·bleed)
   * when `setup.binding.spine > 0` (perfect binding, see spread-core.js).
   *
   * @param {Object} args - Pagination setup (format/orientation or width/height, bleed, binding)
   * @returns {Record<string, string>} CSS variable name → value (mm)
   */
  static resolveCssVars(t = {}) {
    const n = this.resolveDimensions(t), r = this.clampBleed(t.bleed), o = {
      "--uhuu-page-width": `${n.width}mm`,
      "--uhuu-page-height": `${n.height}mm`,
      "--uhuu-page-bleed": `${r}mm`
    }, i = Ch({ ...n, bleed: r, binding: t.binding });
    return i ? { ...o, ...i } : o;
  }
  /**
   * Resolve the page config for a pagination setup and publish its CSS vars on
   * the root element. Without a DOM (SSR, node tests) the vars are skipped but
   * the config is still returned, so ConfigContext consumers (Sheet, CoverSpread,
   * ImageBlock) see the same `page` on the server as in the browser.
   */
  static pageParams(t, n = {}) {
    const { format: r, orientation: o, bleed: i, showBleed: s, compatibility: a, printCssRaw: c, printCssUrl: l, preview: d, binding: u } = n, f = this.resolveDimensions(n), h = this.resolveCssVars(n);
    if (typeof document < "u")
      for (const [p, v] of Object.entries(h))
        document.documentElement.style.setProperty(p, v);
    return { page: {
      paginationType: t,
      format: r,
      orientation: o,
      bleed: i,
      width: f?.width,
      height: f?.height,
      preview: d,
      showBleed: s,
      compatibility: a,
      printCssRaw: c,
      printCssUrl: l,
      // Perfect binding: normalised `{ type, spine, glue }` or null. Consumers
      // (CoverSpread, ImageBlock) read it from ConfigContext like `bleed`.
      binding: on(u),
      // Physical sheet incl. bleed — the `@page` size.
      sheet: es({ ...f, bleed: this.clampBleed(i), binding: u })
    } };
  }
}
const $t = Ft(null), Ph = ({ config: e, children: t }) => /* @__PURE__ */ g($t.Provider, { value: e, children: t }), so = ({ children: e, className: t, setup: n }) => {
  const r = lr.pageParams("static", n);
  le(() => {
    r?.page?.compatibility && io.handle();
    const i = ba.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && ba.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(Ph, { config: r, children: /* @__PURE__ */ g("div", { className: o, children: e }) });
}, ur = br(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: i,
  "data-page-key": s
}, a) => {
  const c = Se($t), l = i ?? c?.page?.showBleed ?? !1;
  return /* @__PURE__ */ L(
    "div",
    {
      className: `uhuu-page-sheet ${t}`,
      style: n,
      ref: a,
      "data-page-key": s,
      children: [
        e,
        o && o({ pageNo: r }),
        l && /* @__PURE__ */ g("div", { className: "uhuu-bleed-area" })
      ]
    }
  );
});
function Et() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function qt(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function or(e) {
  return typeof e == "string" && e ? e : null;
}
function Xc(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function Zc({
  itemIndex: e = -1,
  fragmentIndexes: t = [],
  groupKeys: n = [],
  pageIndex: r = 0,
  pageCount: o = 1,
  itemCount: i = 0,
  previousSourceIndex: s,
  // Internal render fast path: the React renderer already knows this while
  // walking a fragment, so avoid re-running `indexOf` for every visible item.
  fragmentIndex: a
} = {}) {
  const c = Number.isInteger(a) ? a : t.indexOf(e), l = or(n[e]), d = c > 0 ? t[c - 1] : null, u = d === null ? null : or(n[d]), f = c > 0 ? t[c - 1] : s ?? (e > 0 ? e - 1 : null), h = f !== null ? or(n[f]) : null, b = !!(l && h !== l), p = !!(l && u !== l);
  return {
    pageIndex: r,
    pageCount: o,
    itemIndex: e,
    fragmentIndex: c,
    groupKey: l ?? void 0,
    isFirst: e === 0,
    isLast: i > 0 && e === i - 1,
    isFirstInFragment: c === 0,
    isLastInFragment: c >= 0 && c === t.length - 1,
    isFirstInGroup: b,
    isFirstInGroupOnPage: p,
    // `isContinuation` refers to the virtual Flow page. `isGroupContinuation`
    // is the narrower signal for a repeated group header.
    isContinuation: r > 0,
    isGroupContinuation: !!(p && !b && h === l)
  };
}
function Ih() {
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
function ts({
  heights: e = [],
  keys: t = [],
  metas: n = [],
  availableHeight: r = 0,
  headerGroupKeys: o = [],
  headerGroupHeights: i = {},
  headerGroupRepeats: s = {},
  previousHeaderGroupKey: a,
  onUnplaceableItem: c,
  // Internal, used by distributeFlowColumns. `window` paginates a slice of the
  // caller's arrays without copying them, and `maxChunks` stops once that many
  // chunks are closed. Chunks are built strictly left to right and the group
  // header pass below only looks backwards, so a bounded run returns exactly
  // the chunks an unbounded run would have produced first.
  window: l,
  maxChunks: d = 0,
  metrics: u
} = {}) {
  const f = l?.indexes, h = l?.offset ?? 0, b = f ? Math.max(0, f.length - h) : e.length, p = f ? (R) => f[h + R] : (R) => R, v = qt(r) || Number.POSITIVE_INFINITY, y = [{ indexes: [], keys: [] }];
  let w = 0;
  const x = () => y[y.length - 1], S = () => {
    const R = x().indexes;
    return R.length ? R[R.length - 1] : null;
  }, k = () => x().indexes.length > 0 || !!x().unplaceable, I = (R) => or(o[p(R)]), P = (R) => qt(i[R] ?? 0), C = (R) => s[R] !== !1, N = (R, M) => {
    const A = I(R);
    return A ? M == null ? (R > 0 ? I(R - 1) : or(a)) !== A || C(A) : I(M) !== A : !1;
  }, E = (R, M) => {
    const A = I(R);
    return qt(e[p(R)]) + (A && N(R, M) ? P(A) : 0);
  }, D = (R) => {
    const M = n[p(R)] ?? {};
    return M.avoidBreakInside && M.groupKey ? M.groupKey : null;
  }, _ = (R, M, A) => {
    let H = 0, K = A;
    for (let j = R; j < b && D(j) === M; j += 1)
      u && (u.scannedItems += 1), H += E(j, K), K = j;
    return H;
  }, B = (R, M, { currentHeight: A, ownHeight: H, stopEarly: K } = {}) => {
    let j = 0, V = R;
    for (let Y = 1; Y <= M; Y += 1) {
      const z = R + Y;
      if (z >= b || (u && (u.scannedItems += 1), j += E(z, V), K && A + (H + j) > v)) break;
      V = z;
    }
    return j;
  }, T = () => {
    k() && (y.push({ indexes: [], keys: [] }), w = 0);
  }, W = (R, M, A) => {
    const H = t[p(R)] ?? String(p(R)), K = I(R) ?? void 0, j = K && N(R, null) ? P(K) : 0, V = {
      index: R,
      key: H,
      height: M,
      headerHeight: j,
      requiredHeight: A,
      availableHeight: v,
      groupKey: K,
      reason: j > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    x().unplaceable = V, c?.(V), y.push({ indexes: [], keys: [] }), w = 0;
  };
  for (let R = 0; R < b && !(d && y.length > d); R += 1) {
    u && (u.scannedItems += 1);
    const M = n[p(R)] ?? {}, A = qt(e[p(R)]), H = t[p(R)] ?? String(p(R));
    M.breakBefore && T();
    const K = D(R), j = R > 0 ? D(R - 1) : null;
    K && K !== j && k() && w + _(R, K, S()) > v && T();
    let V = S(), Y = E(R, V);
    if (k() && Y > v - w && (T(), V = null, Y = E(R, V)), Y > v) {
      W(R, A, Y);
      continue;
    }
    const z = k(), G = z ? B(R, Xc(M.keepWithNext), {
      currentHeight: w,
      ownHeight: Y,
      stopEarly: Number.isFinite(v)
    }) : 0, U = Y + G;
    if (z && w + U > v && (T(), V = null, Y = E(R, V), Y > v)) {
      W(R, A, Y);
      continue;
    }
    x().indexes.push(R), x().keys.push(H), w += Y, M.breakAfter && R < b - 1 && T();
  }
  const F = y.filter((R) => R.indexes.length > 0 || !!R.unplaceable);
  if (!F.length)
    return u && !d && (u.pages = 1), [{ indexes: [], keys: [] }];
  const $ = d ? F.slice(0, d) : F;
  return u && !d && (u.pages = $.length), $.map((R) => {
    if (!R.indexes.length) return R;
    const M = [];
    for (let A = 0; A < R.indexes.length; A += 1) {
      const H = R.indexes[A], K = I(H), j = A > 0 ? R.indexes[A - 1] : null;
      if (!K || !N(H, j)) continue;
      const V = H > 0 ? I(H - 1) : null;
      M.push({
        groupKey: K,
        itemIndex: H,
        isContinuation: V === K
      });
    }
    return M.length ? { ...R, groupHeaders: M } : R;
  });
}
function kh(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (i, s) => i + qt(t[s]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (i, s) => i + qt(n[s.groupKey]),
    0
  );
  return r + o;
}
function Nh(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function Rh(e, t, n, r, o, i) {
  const s = (c) => t[n + c], a = {
    indexes: (e.indexes ?? []).map(s).filter(Number.isInteger),
    keys: [...e.keys ?? []],
    ...i !== void 0 ? { previousSourceIndex: i } : {}
  };
  return e.groupHeaders?.length && (a.groupHeaders = e.groupHeaders.map((c) => ({
    ...c,
    itemIndex: s(c.itemIndex),
    isContinuation: c.isContinuation || c.itemIndex === 0 && i !== void 0 && o?.[i] === c.groupKey
  }))), e.unplaceable && (a.unplaceable = {
    ...e.unplaceable,
    index: s(e.unplaceable.index),
    ...r ? { columnId: r } : {}
  }), a;
}
function Lr(e, t, n, r, o, i, s) {
  if (n >= t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const a = Nh(e, o, i);
  e.metrics && (e.metrics.chunkerCalls += 1);
  const l = ts({
    heights: e.heights,
    keys: e.keys,
    metas: e.metas,
    headerGroupKeys: e.headerGroupKeys,
    headerGroupHeights: a.headerGroupHeights,
    headerGroupRepeats: a.headerGroupRepeats,
    previousHeaderGroupKey: s === void 0 ? void 0 : e.headerGroupKeys?.[s],
    availableHeight: r,
    window: { indexes: t, offset: n },
    maxChunks: 1,
    metrics: e.metrics
  })[0] ?? { indexes: [], keys: [] }, d = Rh(
    l,
    t,
    n,
    i,
    a.headerGroupKeys,
    s
  ), u = d.unplaceable ? 1 : d.indexes.length;
  return {
    chunk: d,
    consumed: u,
    height: kh(
      d,
      e.heights ?? [],
      a.headerGroupHeights ?? {}
    )
  };
}
function Jc({ nodes: e = [], itemCount: t = 0 } = {}) {
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = (s) => {
    throw new TypeError(`[uhuu-components] Invalid Static.FlowColumns layout: ${s}`);
  }, i = (s, a) => {
    (!Number.isInteger(s) || s < 0 || s >= t) && o(`${a} references out-of-range item index ${String(s)}.`), r.has(s) && o(`item index ${s} occurs more than once.`), r.add(s);
  };
  e.forEach((s, a) => {
    if ((!s || s.kind !== "item" && s.kind !== "columns") && o(`node ${a} has an unsupported kind.`), s.kind === "item") {
      i(s.index, `node ${a}`);
      return;
    }
    (typeof s.id != "string" || !s.id) && o(`column group ${a} needs a stable id.`), n.has(s.id) && o(`column group id "${s.id}" occurs more than once.`), n.add(s.id);
    const c = /* @__PURE__ */ new Set();
    (s.columns ?? []).forEach((l, d) => {
      (!l || typeof l.id != "string" || !l.id) && o(`column ${d} in group "${s.id}" needs a stable id.`), c.has(l.id) && o(`column id "${l.id}" occurs more than once in group "${s.id}".`), c.add(l.id), (l.indexes ?? []).forEach((u) => {
        i(u, `column "${l.id}" in group "${s.id}"`);
      });
    });
  });
  for (let s = 0; s < t; s += 1)
    r.has(s) || o(`item index ${s} is omitted.`);
  return !0;
}
function ya(e, t, n, r, o) {
  const i = qt(r.chunk.unplaceable?.requiredHeight);
  if (i > 0 && i <= o) return "move";
  const s = t[n];
  if (s === void 0) return "no";
  const a = e.metas?.[s] ?? {};
  return Xc(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey) ? "compare" : "no";
}
function Gt(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function Qc({
  nodes: e = [],
  heights: t = [],
  keys: n = [],
  metas: r = [],
  availableHeight: o = 0,
  headerGroupKeys: i = [],
  headerGroupHeights: s = {},
  headerGroupRepeats: a = {},
  columnHeaderGroupHeights: c = {},
  columnHeaderGroupRepeats: l = {},
  onUnplaceableItem: d,
  /** Optional `createFlowPlanMetrics()` object, filled in as the plan is built. */
  metrics: u
} = {}) {
  Jc({ nodes: e, itemCount: t.length });
  const f = qt(o) || Number.POSITIVE_INFINITY, h = {
    heights: t,
    keys: n,
    metas: r,
    headerGroupKeys: i,
    headerGroupHeights: s,
    headerGroupRepeats: a,
    columnHeaderGroupHeights: c,
    columnHeaderGroupRepeats: l,
    metrics: u
  }, b = [{ indexes: [], keys: [], layout: [] }];
  let p = 0;
  const v = () => b[b.length - 1], y = () => {
    Gt(v()) && (b.push({ indexes: [], keys: [], layout: [] }), p = 0);
  }, w = (S) => {
    v().indexes.push(...S.indexes ?? []), v().keys.push(...S.keys ?? []), !v().unplaceable && S.unplaceable && (v().unplaceable = S.unplaceable), S.unplaceable && d?.(S.unplaceable);
  };
  for (let S = 0; S < e.length; S += 1) {
    const k = e[S];
    if (!k || k.kind !== "item" && k.kind !== "columns") continue;
    if (k.kind === "item") {
      const P = [];
      let C = S;
      for (; C < e.length && e[C]?.kind === "item"; ) {
        const E = Number(e[C].index);
        Number.isInteger(E) && E >= 0 && E < t.length && P.push(E), C += 1;
      }
      S = C - 1;
      let N = 0;
      for (; N < P.length; ) {
        f - p <= 0 && Gt(v()) && y();
        const E = P[N];
        r[E]?.breakBefore && Gt(v()) && y();
        const D = N > 0 ? P[N - 1] : void 0;
        let _ = Lr(
          h,
          P,
          N,
          f - p,
          void 0,
          void 0,
          D
        );
        if (Gt(v())) {
          const W = ya(
            h,
            P,
            N,
            _,
            f
          );
          if (W !== "no") {
            u && (u.freshPageAttempts += 1);
            const F = Lr(
              h,
              P,
              N,
              f,
              void 0,
              void 0,
              D
            );
            (W === "move" || F.consumed > _.consumed) && (y(), _ = F);
          }
        }
        v().layout.push({ kind: "items", chunk: _.chunk }), w(_.chunk), p += _.height, N += _.consumed, _.consumed === 0 && (N += 1);
        const B = _.chunk.indexes?.at(-1) ?? _.chunk.unplaceable?.index;
        (N < P.length || _.chunk.unplaceable || B !== void 0 && r[B]?.breakAfter) && y();
      }
      continue;
    }
    const I = (k.columns ?? []).map((P) => ({
      id: String(P?.id ?? ""),
      indexes: (P?.indexes ?? []).filter(
        (C) => Number.isInteger(C) && C >= 0 && C < t.length
      ),
      cursor: 0
    })).filter((P) => P.id && P.indexes.length);
    if (I.length)
      for (; I.some((P) => P.cursor < P.indexes.length); ) {
        f - p <= 0 && Gt(v()) && y(), I.some((R) => {
          const M = R.indexes[R.cursor];
          return M !== void 0 && r[M]?.breakBefore;
        }) && Gt(v()) && y();
        const C = f - p;
        let N = I.map((R) => Lr(
          h,
          R.indexes,
          R.cursor,
          C,
          k.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )), E;
        const D = () => E ??= I.map((R) => (u && (u.freshPageAttempts += 1), Lr(
          h,
          R.indexes,
          R.cursor,
          f,
          k.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )));
        if (Gt(v()) && I.some((R, M) => {
          const A = ya(
            h,
            R.indexes,
            R.cursor,
            N[M],
            f
          );
          return A === "no" ? !1 : A === "move" ? !0 : D()[M].consumed > N[M].consumed;
        }) && (y(), N = D()), !N.some((R) => R.consumed > 0)) {
          const R = I.find((M) => M.cursor < M.indexes.length);
          throw new TypeError(
            `[uhuu-components] Static.FlowColumns made no pagination progress${R ? ` in column "${R.id}"` : ""}.`
          );
        }
        const B = I.map((R, M) => ({
          id: R.id,
          chunk: N[M].chunk
        }));
        v().layout.push({
          kind: "columns",
          id: String(k.id ?? "columns"),
          columns: B
        });
        for (const { chunk: R } of B) w(R);
        const T = Math.max(0, ...N.map((R) => R.height));
        p += T, I.forEach((R, M) => {
          R.cursor += N[M].consumed;
        });
        const W = I.some((R) => R.cursor < R.indexes.length), F = N.some((R) => {
          const M = R.chunk.indexes?.at(-1) ?? R.chunk.unplaceable?.index;
          return M !== void 0 && r[M]?.breakAfter;
        }), $ = N.some((R) => !!R.chunk.unplaceable);
        (W || F || $) && y();
      }
  }
  const x = b.filter(Gt);
  return x.length ? (u && (u.pages = x.length), x) : (u && (u.pages = 1), [{ indexes: [], keys: [], layout: [] }]);
}
function ns(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function jn(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, i = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + i;
}
function rs(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: el(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function el(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function os(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function ko(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function ao(e) {
  const t = {};
  for (const n of e) {
    const r = ko(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function co(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, jn(r, t)));
  }
  return n;
}
function is(e) {
  return Array.from(e.querySelectorAll('[data-uhuu-flow-item="true"]'));
}
function ss(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getEffectiveScale: ns,
  getOuterHeight: jn,
  hashString: ss,
  parseKeepWithNext: el,
  readFlowItemElements: is,
  readHeaderGroupHeights: co,
  readHeaderGroupKey: ko,
  readHeaderGroupRepeats: ao,
  readItemMeta: rs,
  serializeKeepWithNext: os
}, Symbol.toStringTag, { value: "Module" })), Ah = ts, Dh = Qc, $n = m.createContext(null), Mh = typeof window > "u" ? m.useEffect : m.useLayoutEffect, lo = /* @__PURE__ */ new Set();
function uo(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function tl(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function bt(e) {
  return Number.parseFloat(e || "0") || 0;
}
function Oh(e, t) {
  const n = (r) => {
    const o = window.getComputedStyle(r);
    return bt(o.paddingTop) + bt(o.paddingBottom) + bt(o.borderTopWidth) + bt(o.borderBottomWidth);
  };
  for (const r of Array.from(
    e.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const o = window.getComputedStyle(r), i = bt(o.marginTop) + bt(o.marginBottom);
    if (n(r) > 0.01 || i > 0.01)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps."
      );
    const s = [];
    for (const c of Array.from(
      r.querySelectorAll(":scope > [data-uhuu-flow-column]")
    )) {
      const l = window.getComputedStyle(c), d = bt(l.marginTop) + bt(l.marginBottom);
      if (n(c) > 0.01 || d > 0.01 || bt(l.rowGap) > 0.01 || bt(l.minHeight) > 0.01 || l.maxHeight !== "none")
        throw new TypeError(
          "[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps."
        );
      const u = Array.from(
        c.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        )
      ).reduce((f, h) => f + jn(h, t), 0);
      s.push(u);
    }
    const a = Math.max(0, ...s);
    if (jn(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function _h(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return Th(e, t, n);
  const o = is(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = ns(e), a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = o.map((x) => jn(x, s)), d = o.map(rs), u = o.map((x, S) => x.dataset.uhuuFlowKey || String(S)), f = o.map(ko), h = ao(o), b = co(t, s), p = [], v = c ? a : l.reduce((x, S) => x + S, 0) + Object.values(b).reduce((x, S) => x + S, 0);
  c || n.onZeroHeight?.();
  const y = Ah({
    heights: l,
    keys: u,
    metas: d,
    availableHeight: v,
    headerGroupKeys: f,
    headerGroupHeights: b,
    headerGroupRepeats: h,
    onUnplaceableItem: (x) => {
      p.push(x), n.onUnplaceableItem?.(x);
    }
  }), w = ss(JSON.stringify({
    version: 2,
    flowId: r,
    availableHeight: Math.round(v * 100) / 100,
    heights: l.map((x) => Math.round(x * 100) / 100),
    keys: u,
    metas: d,
    headerGroupKeys: f,
    headerGroupHeights: b,
    headerGroupRepeats: h,
    unplaceableItems: p
  }));
  return { flowId: r, chunks: y, signature: w, unplaceableItems: p };
}
function Th(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = is(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = ns(e);
  Oh(t, s);
  const a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = Math.max(
    -1,
    ...o.map((P) => Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10))
  ), d = Array.from({ length: l + 1 }, () => 0), u = Array.from({ length: l + 1 }, (P, C) => String(C)), f = Array.from({ length: l + 1 }, () => ({})), h = Array.from(
    { length: l + 1 },
    () => {
    }
  );
  for (const P of o) {
    const C = Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10);
    !Number.isInteger(C) || C < 0 || (d[C] = jn(P, s), u[C] = P.dataset.uhuuFlowKey || String(C), f[C] = rs(P), h[C] = ko(P));
  }
  const b = Array.from(t.children).flatMap((P) => {
    if (!(P instanceof HTMLElement)) return [];
    if (P.dataset.uhuuFlowLayoutNode === "item") {
      const N = P.matches('[data-uhuu-flow-item="true"]') ? P : P.querySelector('[data-uhuu-flow-item="true"]'), E = Number.parseInt(N?.dataset.uhuuFlowIndex ?? "-1", 10);
      return Number.isInteger(E) && E >= 0 ? [{ kind: "item", index: E }] : [];
    }
    if (P.dataset.uhuuFlowLayoutNode !== "columns") return [];
    const C = Array.from(
      P.querySelectorAll(":scope > [data-uhuu-flow-column]")
    ).flatMap((N) => {
      const E = N.dataset.uhuuFlowColumn;
      if (!E) return [];
      const D = Array.from(
        N.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map((_) => Number.parseInt(_.dataset.uhuuFlowIndex ?? "-1", 10)).filter((_) => Number.isInteger(_) && _ >= 0);
      return [{ id: E, indexes: D }];
    });
    return C.length ? [{ kind: "columns", id: P.dataset.uhuuFlowLayoutId || "columns", columns: C }] : [];
  }), p = ao(o), v = co(t, s), y = {}, w = {};
  for (const P of Array.from(
    t.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const C = P.dataset.uhuuFlowLayoutId;
    if (C) {
      y[C] = {}, w[C] = {};
      for (const N of Array.from(
        P.querySelectorAll(":scope > [data-uhuu-flow-column]")
      )) {
        const E = N.dataset.uhuuFlowColumn;
        if (!E) continue;
        const D = Array.from(
          N.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        y[C][E] = co(N, s), w[C][E] = ao(D);
      }
    }
  }
  const x = [], S = c ? a : d.reduce((P, C) => P + C, 0) + Object.values(v).reduce((P, C) => P + C, 0);
  c || n.onZeroHeight?.();
  const k = Dh({
    nodes: b,
    heights: d,
    keys: u,
    metas: f,
    availableHeight: S,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: p,
    columnHeaderGroupHeights: y,
    columnHeaderGroupRepeats: w,
    onUnplaceableItem: (P) => {
      x.push(P), n.onUnplaceableItem?.(P);
    }
  }), I = ss(JSON.stringify({
    version: 3,
    flowId: r,
    availableHeight: Math.round(S * 100) / 100,
    nodes: b,
    heights: d.map((P) => Math.round(P * 100) / 100),
    keys: u,
    metas: f,
    headerGroupKeys: h,
    headerGroupHeights: v,
    headerGroupRepeats: p,
    columnHeaderGroupHeights: y,
    columnHeaderGroupRepeats: w,
    unplaceableItems: x
  }));
  return { flowId: r, chunks: k, signature: I, unplaceableItems: x };
}
function nl({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = m.useContext($n), i = m.useRef(null), s = m.useRef(""), a = m.useRef(!1), c = m.useRef(!1), l = m.useRef(/* @__PURE__ */ new Set());
  return Mh(() => {
    if (o?.mode !== "measure" || !o.registerMeasurement || !i.current)
      return;
    const d = i.current;
    let u = null, f = null;
    s.current = "";
    const h = /* @__PURE__ */ new Set(), b = () => {
      if (f) {
        for (const w of Array.from(h))
          d.contains(w) || (f.unobserve(w), h.delete(w));
        d.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        ).forEach((w) => {
          h.has(w) || (h.add(w), f?.observe(w));
        });
      }
    };
    function p() {
      b();
      const w = d.querySelectorAll('[data-uhuu-flow="true"]');
      w.length > 1 && !a.current && Et() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const x = w[0];
      if (!x) return;
      const S = _h(d, x, {
        onZeroHeight: () => {
          c.current || !Et() || (c.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (k) => {
          l.current.has(k.key) || !Et() || (l.current.add(k.key), console.warn(
            `[uhuu-components] Static.Flow item "${k.key}" cannot fit in its FlowArea (${Math.round(k.requiredHeight)}px required > ${Math.round(k.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`
          ));
        }
      });
      !S || S.signature === s.current || (s.current = S.signature, r?.(S), o?.registerMeasurement?.(S));
    }
    const v = () => {
      u === null && (u = window.requestAnimationFrame(() => {
        u = null, p();
      }));
    };
    f = new ResizeObserver(v), f.observe(d), b(), v();
    const y = new MutationObserver(() => {
      v();
    });
    return y.observe(d, {
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
      u !== null && window.cancelAnimationFrame(u), f?.disconnect(), y.disconnect();
    };
  }, [o, r]), /* @__PURE__ */ g("div", { ref: i, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function rl({
  children: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: i = "",
  flowAreaStyle: s,
  onFlowMeasurement: a
}) {
  return /* @__PURE__ */ L(
    "div",
    {
      className: `h-full w-full flex flex-col ${r}`,
      style: o,
      "data-uhuu-flow-page": "true",
      children: [
        t,
        /* @__PURE__ */ g(
          nl,
          {
            className: `flex-1 min-h-0 ${i}`,
            style: s,
            onFlowMeasurement: a,
            children: e
          }
        ),
        n
      ]
    }
  );
}
function ol(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function Ii(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    t.has(n) || t.set(n, r);
  }), t;
}
function il(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    let r = t.get(n.itemIndex);
    r || (r = /* @__PURE__ */ new Set(), t.set(n.itemIndex, r)), r.add(n.groupKey);
  }
  return t;
}
function sl({
  id: e,
  items: t,
  getKey: n,
  renderItem: r,
  getItemMeta: o,
  metaDefaults: i,
  getItemType: s,
  getItemGroup: a,
  renderGroupHeader: c,
  className: l = "",
  itemClassName: d,
  groupHeaderClassName: u,
  renderUnplaceableItem: f
}) {
  const h = m.useContext($n), b = h?.chunksByFlowId?.[e], p = h?.mode === "visible" && b ? b[h.pageIndex] : void 0, y = (h?.mode === "visible" && b ? p?.indexes ?? [] : h?.mode === "visible" && h.pageIndex > 0 ? [] : t.map((C, N) => N)).filter((C) => Number.isInteger(C) && C >= 0 && C < t.length), w = t.map((C, N) => ol(a?.(C, N))), x = w.map((C) => C?.key), S = Ii(y), k = c ? il(p?.groupHeaders) : void 0, I = h?.mode === "visible" ? h.pageIndex : 0, P = h?.mode === "visible" && b ? b.length : 1;
  return m.useEffect(() => {
    if (!Et() || !i || !Object.keys(i).length || !t.length)
      return;
    const C = `${e}:${Object.keys(i).join("|")}`;
    lo.has(C) || t.some((E, D) => !!(s?.(E, D) ?? uo(E))) || (lo.add(C), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, s]), /* @__PURE__ */ L(
    "div",
    {
      className: l,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        p?.unplaceable && (f?.(p.unplaceable, { flowId: e, pageIndex: I, pageCount: P }) ?? /* @__PURE__ */ L(
          "div",
          {
            role: "alert",
            className: "uhuu-flow-unplaceable",
            "data-uhuu-flow-unplaceable": "true",
            "data-uhuu-flow-unplaceable-key": p.unplaceable.key,
            children: [
              "Unable to fit “",
              p.unplaceable.key,
              "” on a page. Reduce its height or split it."
            ]
          }
        )),
        y.map((C) => {
          const N = t[C];
          if (N === void 0) return null;
          const E = n(N, C), D = w[C], B = {
            ...Zc({
              itemIndex: C,
              fragmentIndexes: y,
              fragmentIndex: S.get(C) ?? -1,
              groupKeys: x,
              pageIndex: I,
              pageCount: P,
              itemCount: t.length
            }),
            flowId: e,
            itemKey: E,
            item: N
          }, T = s?.(N, C) ?? uo(N), W = tl(
            T ? i?.[T] : void 0,
            o?.(N, C)
          ), F = typeof d == "function" ? d(N, C) : d, $ = !!(D && k?.get(C)?.has(D.key)), R = !!(D && c && ($ || !k && B.isFirstInGroupOnPage && (B.isFirstInGroup || D.repeatHeader !== !1))), M = typeof u == "function" ? D ? u(D, B) : void 0 : u;
          return /* @__PURE__ */ L(m.Fragment, { children: [
            R && D && /* @__PURE__ */ g(
              "div",
              {
                className: M,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": D.key,
                children: c?.(D, B)
              }
            ),
            /* @__PURE__ */ g(
              "div",
              {
                className: F,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(E),
                "data-uhuu-flow-index": C,
                "data-uhuu-flow-break-before": W.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": W.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": os(W.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": W.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": W.groupKey,
                "data-uhuu-flow-header-group-key": D?.key,
                "data-uhuu-flow-header-repeat": D ? D.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(N, C, B)
              }
            )
          ] }, E);
        })
      ]
    }
  );
}
function Fh({
  id: e,
  items: t,
  layout: n,
  getKey: r,
  renderItem: o,
  getItemMeta: i,
  metaDefaults: s,
  getItemType: a,
  getItemGroup: c,
  renderGroupHeader: l,
  className: d = "",
  itemClassName: u,
  groupHeaderClassName: f,
  renderUnplaceableItem: h,
  getColumnGroupProps: b,
  getColumnProps: p,
  getColumnItemProps: v
}) {
  Jc({ nodes: n, itemCount: t.length });
  const y = m.useContext($n), w = y?.chunksByFlowId?.[e], x = y?.mode === "visible" && w ? w[y.pageIndex] : void 0, S = y?.mode !== "visible", k = y?.mode === "visible" ? y.pageIndex : 0, I = y?.mode === "visible" && w ? w.length : 1, P = t.map((T, W) => ol(c?.(T, W))), C = P.map((T) => T?.key), N = {
    flowId: e
  };
  m.useEffect(() => {
    if (!Et() || !s || !Object.keys(s).length || !t.length)
      return;
    const T = `${e}:columns:${Object.keys(s).join("|")}`;
    lo.has(T) || t.some((F, $) => !!(a?.(F, $) ?? uo(F))) || (lo.add(T), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, a]);
  const E = (T) => T ? h?.(T, { flowId: e, pageIndex: k, pageCount: I }) ?? /* @__PURE__ */ L(
    "div",
    {
      role: "alert",
      className: "uhuu-flow-unplaceable",
      "data-uhuu-flow-unplaceable": "true",
      "data-uhuu-flow-unplaceable-key": T.key,
      "data-uhuu-flow-column-id": T.columnId,
      children: [
        "Unable to fit “",
        T.key,
        "” on a page. Reduce its height or split it."
      ]
    }
  ) : null, D = (T, W, F, $ = !1, R) => {
    const M = T.filter((j) => Number.isInteger(j) && j >= 0 && j < t.length), A = Ii(M), H = R ? Ii(R) : void 0, K = l ? il(W?.groupHeaders) : void 0;
    return M.map((j) => {
      const V = t[j];
      if (V === void 0) return null;
      const Y = r(V, j), z = P[j], G = A.get(j) ?? -1, U = H?.get(j) ?? -1, Z = {
        ...Zc({
          itemIndex: j,
          fragmentIndexes: M,
          fragmentIndex: G,
          groupKeys: C,
          pageIndex: k,
          pageCount: I,
          itemCount: t.length,
          previousSourceIndex: W?.previousSourceIndex ?? (U > 0 ? R?.[U - 1] : void 0)
        }),
        flowId: e,
        itemKey: Y,
        item: V
      }, re = a?.(V, j) ?? uo(V), ie = tl(
        re ? s?.[re] : void 0,
        i?.(V, j)
      ), we = typeof u == "function" ? u(V, j) : u, se = F?.(j), Re = !!(z && K?.get(j)?.has(z.key)), Je = !!(z && l && (Re || !K && Z.isFirstInGroupOnPage && (Z.isFirstInGroup || z.repeatHeader !== !1))), ln = typeof f == "function" ? z ? f(z, Z) : void 0 : f;
      return /* @__PURE__ */ L(m.Fragment, { children: [
        Je && z && /* @__PURE__ */ g(
          "div",
          {
            className: ln,
            style: { display: "flow-root" },
            "data-uhuu-flow-group-header": "true",
            "data-uhuu-flow-header-group-key": z.key,
            children: l?.(z, Z)
          }
        ),
        /* @__PURE__ */ g(
          "div",
          {
            className: [we, se?.className].filter(Boolean).join(" "),
            style: { display: "flow-root", ...se?.style },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-layout-node": $ ? "item" : void 0,
            "data-uhuu-flow-key": String(Y),
            "data-uhuu-flow-index": j,
            "data-uhuu-flow-break-before": ie.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": ie.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": os(ie.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": ie.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": ie.groupKey,
            "data-uhuu-flow-header-group-key": z?.key,
            "data-uhuu-flow-header-repeat": z ? z.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(V, j, Z)
          }
        )
      ] }, Y);
    });
  }, _ = new Map(
    n.filter((T) => T.kind === "columns").map((T) => [T.id, T])
  ), B = S ? n : x?.layout ?? [];
  return /* @__PURE__ */ g(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: B.map((T, W) => {
        if (T.kind === "item")
          return /* @__PURE__ */ g(m.Fragment, { children: D([T.index], void 0, void 0, !0) }, `item:${T.index}:${W}`);
        if (T.kind === "items")
          return /* @__PURE__ */ L(m.Fragment, { children: [
            E(T.chunk.unplaceable),
            D(T.chunk.indexes, T.chunk, void 0, !0)
          ] }, `items:${W}`);
        const F = S ? T : _.get(T.id);
        if (!F) return null;
        const $ = new Map(F.columns.map((A) => [A.id, A])), R = S ? F.columns.map((A) => ({ id: A.id })) : T.columns, M = b?.(F, N);
        return /* @__PURE__ */ g(
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
            "data-uhuu-flow-layout-id": F.id,
            children: R.map((A) => {
              const H = $.get(A.id);
              if (!H) return null;
              const K = p?.(F, H, N), j = A.chunk?.indexes ?? H.indexes;
              return /* @__PURE__ */ L(
                "div",
                {
                  className: K?.className,
                  style: {
                    minWidth: 0,
                    flex: "1 1 0%",
                    display: "flex",
                    flexDirection: "column",
                    ...K?.style
                  },
                  "data-uhuu-flow-column": H.id,
                  children: [
                    E(A.chunk?.unplaceable),
                    D(
                      j,
                      A.chunk,
                      (V) => v?.(
                        F,
                        H,
                        V,
                        N
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
          `columns:${F.id}:${W}`
        );
      })
    }
  );
}
const Kn = (e, t) => {
  const n = e?.dialog;
  if (!n) return {};
  const r = typeof window < "u" && window.$uhuu_renderer, o = n.type ? { "data-uhuu-type": n.type } : {};
  return t?.page?.paginationType === "dynamic" ? {
    ...o,
    "data-uhuu": JSON.stringify(n)
  } : r ? {
    ...o,
    "data-uhuu": ""
  } : {
    onClick: (i) => {
      typeof window < "u" && window.$uhuu_renderer || (i.stopPropagation(), window.$uhuu?.editDialog?.(n));
    },
    ...o,
    "data-uhuu": ""
  };
}, al = "uhuu-text-empty", $h = /* @__PURE__ */ new Set(["text", "textarea", "markdown"]), cl = (e) => e !== null && typeof e == "object" && "type" in e && typeof e.type == "string" && $h.has(e.type), ll = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(ll) : !1, Lh = (e) => {
  const t = Se($t), r = cl(e.dialog) && ll(e.children) ? [e.className, al].filter(Boolean).join(" ") : e.className;
  return /* @__PURE__ */ g(
    "div",
    {
      className: r,
      ...Kn(e, t),
      children: e.children
    }
  );
};
function Bh(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function ul(e, t, n, r = "") {
  const o = Bh(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const zh = /\s*(page-break-before|break-before)\s*/i, jh = 1, Hh = 3, Kh = 8;
function Wh(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Gh(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Vh(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === Kh) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Hh) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: Wh(i), text: i });
      return;
    }
    if (o.nodeType === jh) {
      const i = o, s = i.hasAttribute("data-flow-break-before"), a = i.hasAttribute("data-flow-break-after");
      i.removeAttribute("data-flow-break-before"), i.removeAttribute("data-flow-break-after"), r.push({
        kind: "element",
        type: i.tagName.toLowerCase(),
        html: i.outerHTML,
        text: i.textContent ?? "",
        breakBefore: s,
        breakAfter: a
      });
    }
  }), r;
}
function Uh(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const s = i.type ?? "text", a = i.html ?? "";
    a && (r.push({
      id: ul(s, i.text ?? a, r.length, n),
      type: s,
      html: a,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function dl(e = "", t = {}) {
  const n = t.breakComment ?? zh, o = (t.parseHtml ?? ((i) => Vh(i, n)))(e);
  return Uh(Array.isArray(o) ? o : [], t);
}
const Yh = {
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
let wa = !1;
function qh(e) {
  return m.useMemo(() => e === !1 ? (Et() && !wa && (wa = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : Gh, [e]);
}
function Xh({
  html: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: i = "",
  flowAreaStyle: s,
  id: a = "flow-document",
  idPrefix: c,
  flowClassName: l = "w-full",
  itemClassName: d,
  metaDefaults: u,
  getItemMeta: f,
  renderItem: h,
  sanitize: b,
  editable: p,
  parseHtml: v
}) {
  const y = m.useMemo(
    () => dl(e, { idPrefix: c, parseHtml: v }),
    [e, c, v]
  ), w = m.useMemo(
    () => ({ ...Yh, ...u ?? {} }),
    [u]
  ), x = qh(b), S = m.useCallback(
    (P, C) => ({
      breakBefore: P.breakBefore,
      ...f?.(P, C) ?? {}
    }),
    [f]
  ), k = m.useCallback(
    (P, C) => h ? h(P, C) : /* @__PURE__ */ g(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: x(P.html) }
      }
    ),
    [h, x]
  ), I = /* @__PURE__ */ g(
    sl,
    {
      id: a,
      items: y,
      getKey: (P) => P.id,
      className: l,
      itemClassName: d,
      metaDefaults: w,
      getItemMeta: S,
      renderItem: k
    }
  );
  return /* @__PURE__ */ g(
    rl,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: s,
      header: t,
      footer: n,
      children: p ? /* @__PURE__ */ g(Lh, { dialog: p, className: !y.length && cl(p) ? al : void 0, children: I }) : I
    }
  );
}
const Zh = /<!--\s*(page-break-before|break-before)\s*-->/i, Jh = /^\s*\[[^\]]+\]:\s+\S+/, xa = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function Br(e) {
  return e.trim() === "";
}
function Ca(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function Sa(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Pa(e) {
  return /^(```|~~~)/.test(e.trim());
}
function Ia(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function ka(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Na(e) {
  return Zh.test(e.trim());
}
function Qh(e) {
  return Jh.test(e);
}
function eg(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const s = o ? `${o} ${i}` : i;
    o && s.length > t ? (r.push(o), o = i) : o = s;
  }
  return o && r.push(o), r.length ? r : [e];
}
function tg(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function ng(e, t, n, r, o, i) {
  const s = n.join(`
`).trim();
  if (!s) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, c = t === "paragraph" ? eg(s, a) : [s];
  for (let l = 0; l < c.length; l += 1) {
    const d = c[l], u = tg(d, i);
    e.push({
      id: ul(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: l === 0 ? r : !1
    });
  }
  return !0;
}
function rg(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const l of r)
    Qh(l) ? o.push(l) : i.push(l);
  const s = [];
  let a = 0, c = !1;
  for (; a < i.length; ) {
    if (Br(i[a])) {
      a += 1;
      continue;
    }
    if (Na(i[a])) {
      c = !0, a += 1;
      continue;
    }
    const l = a;
    let d = "paragraph";
    if (Pa(i[a])) {
      d = "code";
      const u = i[a].trim().slice(0, 3);
      for (a += 1; a < i.length && !i[a].trim().startsWith(u); )
        a += 1;
      a < i.length && (a += 1);
    } else if (Ca(i[a]))
      d = "heading", a += 1;
    else if (Ia(i[a]))
      d = "rule", a += 1;
    else if (xa.test(i[a]))
      d = "image", a += 1;
    else if (ka(i, a))
      for (d = "table", a += 2; a < i.length && i[a].includes("|") && !Br(i[a]); )
        a += 1;
    else if (Sa(i[a]))
      for (d = "list", a += 1; a < i.length && !Br(i[a]); )
        a += 1;
    else if (i[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < i.length && i[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < i.length && !Br(i[a]) && !Ca(i[a]) && !Pa(i[a]) && !Ia(i[a]) && !xa.test(i[a]) && !ka(i, a) && !Sa(i[a]) && !i[a].trim().startsWith(">") && !Na(i[a]); )
        a += 1;
    ng(s, d, i.slice(l, a), c, t, o) && (c = !1);
  }
  return s;
}
const Ra = (e) => `${Number(e.toFixed(4))}mm`;
function og(e, t) {
  const n = de(!1);
  le(() => {
    t || n.current || !Et() || (n.current = !0, console.warn(
      `[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`
    ));
  }, [e, t]);
}
const fl = br(function({
  sheet: t,
  left: n,
  right: r,
  spine: o,
  pageNo: i,
  overlay: s,
  binding: a,
  showBleed: c,
  className: l = "",
  style: d,
  leftClassName: u = "",
  rightClassName: f = "",
  leftPageKey: h,
  rightPageKey: b
}, p) {
  const v = Se($t), y = a !== void 0 ? on(a) : v?.page?.binding ?? null, w = c ?? v?.page?.showBleed ?? !1, [x, S] = i ?? [0, 0];
  og(t, y);
  const k = (E) => s ? ({ pageNo: D }) => s({ pageNo: D, side: E, sheet: t }) : void 0, I = /* @__PURE__ */ g(
    ur,
    {
      className: `uhuu-page-sheet--panel ${u}`.trim(),
      pageNo: x,
      overlay: k("left"),
      showBleed: w,
      "data-page-key": h,
      children: n
    }
  ), P = /* @__PURE__ */ g(
    ur,
    {
      className: `uhuu-page-sheet--panel ${f}`.trim(),
      pageNo: S,
      overlay: k("right"),
      showBleed: w,
      "data-page-key": b,
      children: r
    }
  );
  if (!y)
    return /* @__PURE__ */ L(Be, { children: [
      I,
      P
    ] });
  const C = t === "inner", N = C && y.glue > 0;
  return /* @__PURE__ */ L(
    "div",
    {
      ref: p,
      className: `uhuu-page-sheet uhuu-cover-spread ${l}`.trim(),
      style: d,
      "data-sheet": t,
      "data-spine": y.spine,
      "data-glue": y.glue,
      children: [
        /* @__PURE__ */ g("div", { className: "uhuu-spread-panel", "data-side": "left", children: I }),
        /* @__PURE__ */ L("div", { className: "uhuu-spread-spine", "data-blank": C ? "true" : "false", children: [
          !C && o,
          w && /* @__PURE__ */ g(
            "div",
            {
              className: "uhuu-spread-guide",
              "data-label": `spine ${Ra(y.spine)}${C ? " · blank" : ""}`
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "uhuu-spread-panel", "data-side": "right", children: P }),
        N && ["left", "right"].map((E) => /* @__PURE__ */ g("div", { className: "uhuu-glue-zone", "data-side": E, children: w && /* @__PURE__ */ g("div", { className: "uhuu-spread-guide", "data-label": `glue ${Ra(y.glue)}` }) }, E))
      ]
    }
  );
});
function hl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = hl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = hl(e)) && (r && (r += " "), r += t);
  return r;
}
const ig = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, sg = (e, t) => ({
  classGroupId: e,
  validator: t
}), pl = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), fo = "-", Ea = [], ag = "arbitrary..", cg = (e) => {
  const t = ug(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return lg(s);
      const a = s.split(fo), c = a[0] === "" && a.length > 1 ? 1 : 0;
      return ml(a, c, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const c = r[s], l = n[s];
        return c ? l ? ig(l, c) : c : l || Ea;
      }
      return n[s] || Ea;
    }
  };
}, ml = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const l = ml(e, t + 1, i);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(fo) : e.slice(t).join(fo), c = s.length;
  for (let l = 0; l < c; l++) {
    const d = s[l];
    if (d.validator(a))
      return d.classGroupId;
  }
}, lg = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? ag + r : void 0;
})(), ug = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return dg(n, t);
}, dg = (e, t) => {
  const n = pl();
  for (const r in e) {
    const o = e[r];
    as(o, n, r, t);
  }
  return n;
}, as = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    fg(s, t, n, r);
  }
}, fg = (e, t, n, r) => {
  if (typeof e == "string") {
    hg(e, t, n);
    return;
  }
  if (typeof e == "function") {
    gg(e, t, n, r);
    return;
  }
  pg(e, t, n, r);
}, hg = (e, t, n) => {
  const r = e === "" ? t : vl(t, e);
  r.classGroupId = n;
}, gg = (e, t, n, r) => {
  if (mg(e)) {
    as(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(sg(n, e));
}, pg = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, c] = o[s];
    as(c, vl(t, a), n, r);
  }
}, vl = (e, t) => {
  let n = e;
  const r = t.split(fo), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = pl(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, mg = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, vg = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = n[i];
      if (s !== void 0)
        return s;
      if ((s = r[i]) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      i in n ? n[i] = s : o(i, s);
    }
  };
}, ki = "!", Aa = ":", bg = [], Da = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), yg = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, c = 0, l;
    const d = o.length;
    for (let p = 0; p < d; p++) {
      const v = o[p];
      if (s === 0 && a === 0) {
        if (v === Aa) {
          i.push(o.slice(c, p)), c = p + 1;
          continue;
        }
        if (v === "/") {
          l = p;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? a++ : v === ")" && a--;
    }
    const u = i.length === 0 ? o : o.slice(c);
    let f = u, h = !1;
    u.endsWith(ki) ? (f = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(ki) && (f = u.slice(1), h = !0)
    );
    const b = l && l > c ? l - c : void 0;
    return Da(i, h, f, b);
  };
  if (t) {
    const o = t + Aa, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Da(bg, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, wg = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", c = t.has(s);
      a || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, xg = (e) => ({
  cache: vg(e.cacheSize),
  parseClassName: yg(e),
  sortModifiers: wg(e),
  postfixLookupClassGroupIds: Cg(e),
  ...cg(e)
}), Cg = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, Sg = /\s+/, Pg = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i,
    postfixLookupClassGroupIds: s
  } = t, a = [], c = e.trim().split(Sg);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: b,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = n(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!v, w;
    if (y) {
      const P = p.substring(0, v);
      w = r(P);
      const C = w && s[w] ? r(p) : void 0;
      C && C !== w && (w = C, y = !1);
    } else
      w = r(p);
    if (!w) {
      if (!y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(p), !w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const x = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), S = b ? x + ki : x, k = S + w;
    if (a.indexOf(k) > -1)
      continue;
    a.push(k);
    const I = o(w, y);
    for (let P = 0; P < I.length; ++P) {
      const C = I[P];
      a.push(S + C);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Ig = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = bl(n)) && (o && (o += " "), o += r);
  return o;
}, bl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = bl(e[r])) && (n && (n += " "), n += t);
  return n;
}, kg = (e, ...t) => {
  let n, r, o, i;
  const s = (c) => {
    const l = t.reduce((d, u) => u(d), e());
    return n = xg(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }, a = (c) => {
    const l = r(c);
    if (l)
      return l;
    const d = Pg(c, n);
    return o(c, d), d;
  };
  return i = s, (...c) => i(Ig(...c));
}, Ng = [], Oe = (e) => {
  const t = (n) => n[e] || Ng;
  return t.isThemeGetter = !0, t;
}, yl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rg = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Eg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ag = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Mg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Og = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vt = (e) => Rg.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => !!e && Number.isInteger(Number(e)), Qo = (e) => e.endsWith("%") && ue(e.slice(0, -1)), Nt = (e) => Eg.test(e), xl = () => !0, _g = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ag.test(e) && !Dg.test(e)
), cs = () => !1, Tg = (e) => Mg.test(e), Fg = (e) => Og.test(e), $g = (e) => !q(e) && !X(e), Lg = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Bg = (e) => sn(e, Pl, cs), q = (e) => yl.test(e), mn = (e) => sn(e, Il, _g), Ma = (e) => sn(e, Ug, ue), zg = (e) => sn(e, Nl, xl), jg = (e) => sn(e, kl, cs), Oa = (e) => sn(e, Cl, cs), Hg = (e) => sn(e, Sl, Fg), zr = (e) => sn(e, Rl, Tg), X = (e) => wl.test(e), nr = (e) => Cn(e, Il), Kg = (e) => Cn(e, kl), _a = (e) => Cn(e, Cl), Wg = (e) => Cn(e, Pl), Gg = (e) => Cn(e, Sl), jr = (e) => Cn(e, Rl, !0), Vg = (e) => Cn(e, Nl, !0), sn = (e, t, n) => {
  const r = yl.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Cn = (e, t, n = !1) => {
  const r = wl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Cl = (e) => e === "position" || e === "percentage", Sl = (e) => e === "image" || e === "url", Pl = (e) => e === "length" || e === "size" || e === "bg-size", Il = (e) => e === "length", Ug = (e) => e === "number", kl = (e) => e === "family-name", Nl = (e) => e === "number" || e === "weight", Rl = (e) => e === "shadow", Yg = () => {
  const e = Oe("color"), t = Oe("font"), n = Oe("text"), r = Oe("font-weight"), o = Oe("tracking"), i = Oe("leading"), s = Oe("breakpoint"), a = Oe("container"), c = Oe("spacing"), l = Oe("radius"), d = Oe("shadow"), u = Oe("inset-shadow"), f = Oe("text-shadow"), h = Oe("drop-shadow"), b = Oe("blur"), p = Oe("perspective"), v = Oe("aspect"), y = Oe("ease"), w = Oe("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], k = () => [...S(), X, q], I = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], C = () => [X, q, c], N = () => [Vt, "full", "auto", ...C()], E = () => [yt, "none", "subgrid", X, q], D = () => ["auto", {
    span: ["full", yt, X, q]
  }, yt, X, q], _ = () => [yt, "auto", X, q], B = () => ["auto", "min", "max", "fr", X, q], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...C()], $ = () => [Vt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], R = () => [Vt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...C()], M = () => [Vt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...C()], A = () => [e, X, q], H = () => [...S(), _a, Oa, {
    position: [X, q]
  }], K = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", Wg, Bg, {
    size: [X, q]
  }], V = () => [Qo, nr, mn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    X,
    q
  ], z = () => ["", ue, nr, mn], G = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [ue, Qo, _a, Oa], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    X,
    q
  ], re = () => ["none", ue, X, q], ie = () => ["none", ue, X, q], we = () => [ue, X, q], se = () => [Vt, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Nt],
      breakpoint: [Nt],
      color: [xl],
      container: [Nt],
      "drop-shadow": [Nt],
      ease: ["in", "out", "in-out"],
      font: [$g],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Nt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Nt],
      shadow: [Nt],
      spacing: ["px", ue],
      text: [Nt],
      "text-shadow": [Nt],
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
        aspect: ["auto", "square", Vt, q, X, v]
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
        "@container": ["", "normal", "size", X, q]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Lg],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ue, q, X, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: k()
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
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        inset: N()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": N(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: N()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": N(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: N()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": N()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
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
        z: [yt, "auto", X, q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Vt, "full", "auto", a, ...C()]
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
        flex: [ue, Vt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, X, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, X, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [yt, "first", "last", "none", X, q]
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
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
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
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": B()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": B()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...T(), "normal"]
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
        content: ["normal", ...T()]
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
        "place-content": T()
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
        p: C()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: C()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: F()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
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
        "space-y": C()
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
        size: $()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...R()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...R()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...R()]
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
        w: [a, "screen", ...$()]
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
          ...$()
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
            screen: [s]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, nr, mn]
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
        font: [r, Vg, zg]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qo, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Kg, jg, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [q]
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
        tracking: [o, X, q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", X, Ma]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, q]
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
        list: ["disc", "decimal", "none", X, q]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [ue, "from-font", "auto", X, mn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ue, "auto", X, q]
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
        indent: C()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [yt, X, q]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, q]
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
        content: ["none", X, q]
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
        bg: K()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, yt, X, q],
          radial: ["", X, q],
          conic: [yt, X, q]
        }, Gg, Hg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: V()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: V()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: V()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
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
        "divide-y": z()
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
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
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
        "outline-offset": [ue, X, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, nr, mn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          jr,
          zr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, jr, zr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ue, mn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, jr, zr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ue, X, q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "mask-linear": [ue]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": J()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": J()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ue]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: K()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
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
        mask: ["none", X, q]
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
          X,
          q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ue, X, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, X, q]
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
          h,
          jr,
          zr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ue, X, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, X, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, X, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, X, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, X, q]
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
          X,
          q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ue, X, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, X, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, X, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, X, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, X, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, X, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, X, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, X, q]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, q]
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
        duration: [ue, "initial", X, q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, X, q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, X, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, X, q]
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
        perspective: [p, X, q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
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
        skew: we()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": we()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": we()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [X, q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": se()
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
        zoom: [yt, X, q]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, q]
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
        "scrollbar-thumb": A()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": A()
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": C()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": C()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", X, q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ue, nr, mn, Ma]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, qg = /* @__PURE__ */ kg(Yg);
function fe(...e) {
  return qg(gl(e));
}
const ls = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Ta = (e, t) => e && e > 0 ? e + t : 0, us = ({ width: e, left: t = 0, right: n = 0 }, r, o, i) => {
  if (e)
    return !t && !n ? e + o : e;
  let s = i * r;
  return t || (s += i * o), n || (s += i * o), (t || n) && (s -= t + n), s;
}, El = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, i = r + 2 * n, s = us(e, r, n, o), a = Ta(e.left, n), c = t === "spread" && e.side === "end" ? -r + a : a, l = i - (c + s);
  return {
    top: `${Math.max(0, Ta(e.top, n))}mm`,
    right: `${Math.max(0, l)}mm`
  };
}, ds = (e) => {
  const t = Se($t), n = ls({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: s,
    imageClassName: a,
    backgroundColor: c,
    width: l,
    height: d,
    left: u = 0,
    right: f = 0,
    top: h = 0,
    bottom: b = 0
  } = e, p = (P) => `${P}mm`, v = () => us({ width: l, left: u, right: f }, o, r, 1), y = () => {
    let P = d;
    return d ? !h && !b && (P += r) : (P = i, h || (P += r), b || (P += r), (h || b) && (P -= (h ?? 0) + (b ?? 0))), P;
  }, w = v(), x = y(), S = (P) => P !== void 0 ? p(P) : void 0, I = ((P) => Object.fromEntries(
    Object.entries(P).filter(([C, N]) => N !== void 0)
  ))({
    backgroundColor: c,
    width: S(w),
    height: S(x),
    left: S(u > 0 ? u + r : u),
    right: S(f > 0 ? f + r : f),
    top: S(h > 0 ? h + r : h),
    bottom: S(b > 0 ? b + r : b)
  });
  return /* @__PURE__ */ g("div", { className: "uhuu-image-container", style: I, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ L(
    "div",
    {
      className: "uhuu-image-inner",
      ...Kn(e, t),
      children: [
        /* @__PURE__ */ g(
          "img",
          {
            className: fe("cover-image object-cover object-center", a),
            src: s || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const Xg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zg = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Fa = (e) => {
  const t = Zg(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Al = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Jg = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Qg = {
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
const ep = br(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, c) => Pi(
    "svg",
    {
      ref: c,
      ...Qg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Al("lucide", o),
      ...!i && !Jg(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([l, d]) => Pi(l, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Ne = (e, t) => {
  const n = br(
    ({ className: r, ...o }, i) => Pi(ep, {
      ref: i,
      iconNode: t,
      className: Al(
        `lucide-${Xg(Fa(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Fa(e), n;
};
const tp = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], np = Ne("arrow-down", tp);
const rp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], $a = Ne("arrow-up-down", rp);
const op = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ip = Ne("arrow-up", op);
const sp = [
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
], ap = Ne("book-dashed", sp);
const cp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], fs = Ne("check", cp);
const lp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Dl = Ne("chevron-down", lp);
const up = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], dp = Ne("chevron-right", up);
const fp = [
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
], hp = Ne("clipboard-list", fp);
const gp = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], pp = Ne("copy", gp);
const mp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Ml = Ne("ellipsis", mp);
const vp = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Ol = Ne("grip-vertical", vp);
const bp = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Ni = Ne("lock", bp);
const yp = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], wp = Ne("maximize", yp);
const xp = [["path", { d: "M5 12h14", key: "1ays0h" }]], Cp = Ne("minus", xp);
const Sp = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Pp = Ne("pencil", Sp);
const Ip = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], wt = Ne("plus", Ip);
const kp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Np = Ne("search", kp);
const Rp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ep = Ne("trash-2", Rp);
const Ap = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], Dp = Ne("unfold-horizontal", Ap);
const Mp = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], Op = Ne("unfold-vertical", Mp);
const _p = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], _l = Ne("x", _p);
const Tp = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Fp = Ne("zoom-in", Tp);
const $p = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Lp = Ne("zoom-out", $p), Tl = m.createContext({
  portalContainer: null
});
function hs() {
  return m.useContext(Tl);
}
function Bp({ children: e }) {
  const [t, n] = m.useState(null);
  return m.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ g(Tl.Provider, { value: { portalContainer: t }, children: e });
}
const Fl = Ft({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function gs() {
  return Se(Fl);
}
function ps() {
  const { interactive: e } = gs();
  return !e;
}
function zp() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function jp() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Hp({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = zp(), o = n || jp(), i = r ? !1 : t, [s, a] = ce(i);
  return /* @__PURE__ */ g(Fl.Provider, { value: { interactive: s, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ g(Bp, { children: /* @__PURE__ */ g("div", { "data-uhuu-interactive": s ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const La = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ba = gl, $l = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Ba(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const d = n?.[l], u = i?.[l];
    if (d === null) return null;
    const f = La(d) || La(u);
    return o[l][f];
  }), a = n && Object.entries(n).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: f, ...h } = d;
    return Object.entries(h).every((b) => {
      let [p, v] = b;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...a
      }[p]) : {
        ...i,
        ...a
      }[p] === v;
    }) ? [
      ...l,
      u,
      f
    ] : l;
  }, []);
  return Ba(e, s, c, n?.class, n?.className);
}, Kp = $l(
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
), ze = m.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ g(
    "button",
    {
      className: fe(Kp({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
ze.displayName = "Button";
var Wp = Object.defineProperty, Wn = (e, t) => Wp(e, "name", { value: t, configurable: !0 }), Ll = !!(typeof window < "u" && window.document && window.document.createElement);
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Wn(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
Wn(oe, "composeEventHandlers");
function Gp(e) {
  if (!Ll)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
Wn(Gp, "getOwnerWindow");
function Ri(e) {
  if (!Ll)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
Wn(Ri, "getOwnerDocument");
function Bl(e, t = !1) {
  const { activeElement: n } = Ri(e);
  if (!n?.nodeName)
    return null;
  if (zl(n) && n.contentDocument)
    return Bl(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Ri(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
Wn(Bl, "getActiveElement");
function zl(e) {
  return e.tagName === "IFRAME";
}
Wn(zl, "isFrame");
var Vp = Object.defineProperty, ms = (e, t) => Vp(e, "name", { value: t, configurable: !0 });
function Ei(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
ms(Ei, "setRef");
function jl(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Ei(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Ei(e[o], null);
        }
      };
  };
}
ms(jl, "composeRefs");
function be(...e) {
  return m.useCallback(jl(...e), e);
}
ms(be, "useComposedRefs");
var Up = Object.defineProperty, rt = (e, t) => Up(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Yp(e, t) {
  const n = m.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ rt((i) => {
    const { children: s, ...a } = i, c = m.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ g(n.Provider, { value: c, children: s });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(i, s = {}) {
    const { optional: a = !1 } = s, c = m.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return rt(o, "useContext"), [r, o];
}
rt(Yp, "createContext");
// @__NO_SIDE_EFFECTS__
function gt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = m.createContext(s);
    a.displayName = i + "Context";
    const c = n.length;
    n = [...n, s];
    const l = /* @__PURE__ */ rt((u) => {
      const { scope: f, children: h, ...b } = u, p = f?.[e]?.[c] || a, v = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ g(p.Provider, { value: v, children: h });
    }, "Provider");
    l.displayName = i + "Provider";
    function d(u, f, h = {}) {
      const { optional: b = !1 } = h, p = f?.[e]?.[c] || a, v = m.useContext(p);
      if (v) return v;
      if (s !== void 0) return s;
      if (!b)
        throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return rt(d, "useContext"), [l, d];
  }
  rt(r, "createContext");
  const o = /* @__PURE__ */ rt(() => {
    const i = n.map((s) => m.createContext(s));
    return /* @__PURE__ */ rt(function(a) {
      const c = a?.[e] || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Hl(o, ...t)];
}
rt(gt, "createContextScope");
function Hl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ rt(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ rt(function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
rt(Hl, "composeContextScopes");
var Xe = globalThis?.document ? m.useLayoutEffect : () => {
}, qp = Object.defineProperty, Xp = (e, t) => qp(e, "name", { value: t, configurable: !0 }), za = m[" useEffectEvent ".trim().toString()], ja = m[" useInsertionEffect ".trim().toString()];
function Kl(e) {
  if (typeof za == "function")
    return za(e);
  const t = m.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof ja == "function" ? ja(() => {
    t.current = e;
  }) : Xe(() => {
    t.current = e;
  }), m.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Xp(Kl, "useEffectEvent");
var Zp = Object.defineProperty, yr = (e, t) => Zp(e, "name", { value: t, configurable: !0 }), Jp = m[" useInsertionEffect ".trim().toString()] || Xe;
function Sn({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ yr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, i, s] = Wl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o, l = m.useCallback(
    (d) => {
      if (a) {
        const u = Gl(d) ? d(e) : d;
        u !== e && s.current?.(u);
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [c, l];
}
yr(Sn, "useControllableState");
function Wl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Jp(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
yr(Wl, "useUncontrolledState");
function Gl(e) {
  return typeof e == "function";
}
yr(Gl, "isFunction");
var Ha = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function Qp(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: s, caller: a } = t, c = o !== void 0, l = Kl(s), d = [{ ...n, state: i }];
  r && d.push(r);
  const [u, f] = m.useReducer(
    (v, y) => {
      if (y.type === Ha)
        return { ...v, state: y.state };
      const w = e(v, y);
      return c && !Object.is(w.state, v.state) && l(w.state), w;
    },
    ...d
  ), h = u.state, b = m.useRef(h);
  m.useEffect(() => {
    b.current !== h && (b.current = h, c || l(h));
  }, [h, b, c]);
  const p = m.useMemo(() => o !== void 0 ? { ...u, state: o } : u, [u, o]);
  return m.useEffect(() => {
    c && !Object.is(o, u.state) && f({ type: Ha, state: o });
  }, [o, u.state, c]), [p, f];
}
yr(Qp, "useControllableStateReducer");
var em = Object.defineProperty, pt = (e, t) => em(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const t = m.forwardRef((n, r) => {
    let { children: o, ...i } = n, s = null, a = !1;
    const c = [];
    Ai(o) && typeof Hr == "function" && (o = Hr(o._payload)), m.Children.forEach(o, (f) => {
      if (ql(f)) {
        a = !0;
        const h = f;
        let b = "child" in h.props ? h.props.child : h.props.children;
        Ai(b) && typeof Hr == "function" && (b = Hr(b._payload)), s = nm(h, b), c.push(s?.props?.children);
      } else
        c.push(f);
    }), s ? s = m.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && m.Children.count(o) === 1 && m.isValidElement(o) && (s = o)
    );
    const l = s ? Yl(s) : void 0, d = be(r, l);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          a ? im(e) : om(e)
        );
      return o;
    }
    const u = Ul(i, s.props ?? {});
    return s.type !== m.Fragment && (u.ref = r ? d : l), m.cloneElement(s, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
pt(Jt, "createSlot");
var Vl = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function tm(e) {
  const t = /* @__PURE__ */ pt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Vl, t;
}
pt(tm, "createSlottable");
var nm = /* @__PURE__ */ pt((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return m.isValidElement(n) ? m.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return m.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Ul(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      const c = i(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
pt(Ul, "mergeProps");
function Yl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
pt(Yl, "getElementRef");
function ql(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vl;
}
pt(ql, "isSlottable");
var rm = /* @__PURE__ */ Symbol.for("react.lazy");
function Ai(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === rm && "_payload" in e && Xl(e._payload);
}
pt(Ai, "isLazyComponent");
function Xl(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
pt(Xl, "isPromiseLike");
var om = /* @__PURE__ */ pt((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), im = /* @__PURE__ */ pt((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Hr = m[" use ".trim().toString()], sm = Object.defineProperty, am = (e, t) => sm(e, "name", { value: t, configurable: !0 }), cm = [
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
], xe = cm.reduce((e, t) => {
  const n = /* @__PURE__ */ Jt(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g(c, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function vs(e, t) {
  e && Ji.flushSync(() => e.dispatchEvent(t));
}
am(vs, "dispatchDiscreteCustomEvent");
var lm = Object.defineProperty, $e = (e, t) => lm(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function No(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ gt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ $e((p) => {
    const { scope: v, children: y } = p, w = m.useRef(null), x = m.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g(o, { scope: v, itemMap: x, collectionRef: w, children: y });
  }, "CollectionProvider");
  s.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ Jt(a), l = m.forwardRef(
    (p, v) => {
      const { scope: y, children: w } = p, x = i(a, y), S = be(v, x.collectionRef);
      return /* @__PURE__ */ g(c, { ref: S, children: w });
    }
  );
  l.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ Jt(d), h = m.forwardRef(
    (p, v) => {
      const { scope: y, children: w, ...x } = p, S = m.useRef(null), k = be(v, S), I = i(d, y);
      return m.useEffect(() => (I.itemMap.set(S, { ref: S, ...x }), () => {
        I.itemMap.delete(S);
      })), /* @__PURE__ */ g(f, { [u]: "", ref: k, children: w });
    }
  );
  h.displayName = d;
  function b(p) {
    const v = i(e + "CollectionConsumer", p);
    return m.useCallback(() => {
      const w = v.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (I, P) => x.indexOf(I.ref.current) - x.indexOf(P.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return $e(b, "useCollection"), [
    { Provider: s, Slot: l, ItemSlot: h },
    b,
    r
  ];
}
$e(No, "createCollection");
var Ka = /* @__PURE__ */ new WeakMap(), ei = class Ut extends Map {
  static {
    $e(this, "OrderedDict");
  }
  #e;
  constructor(t) {
    super(t), this.#e = [...super.keys()], Ka.set(this, !0);
  }
  set(t, n) {
    return Ka.get(this) && (this.has(t) ? this.#e[this.#e.indexOf(t)] = t : this.#e.push(t)), super.set(t, n), this;
  }
  insert(t, n, r) {
    const o = this.has(n), i = this.#e.length, s = bs(t);
    let a = s >= 0 ? s : i + s;
    const c = a < 0 || a >= i ? -1 : a;
    if (c === this.size || o && c === this.size - 1 || c === -1)
      return this.set(n, r), this;
    const l = this.size + (o ? 0 : 1);
    s < 0 && a++;
    const d = [...this.#e];
    let u, f = !1;
    for (let h = a; h < l; h++)
      if (a === h) {
        let b = d[h];
        d[h] === n && (b = d[h + 1]), o && this.delete(n), u = this.get(b), this.set(n, r);
      } else {
        !f && d[h - 1] === n && (f = !0);
        const b = d[f ? h : h - 1], p = u;
        u = this.get(b), this.delete(b), this.set(b, p);
      }
    return this;
  }
  with(t, n, r) {
    const o = new Ut(this);
    return o.insert(t, n, r), o;
  }
  before(t) {
    const n = this.#e.indexOf(t) - 1;
    if (!(n < 0))
      return this.entryAt(n);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(t, n, r) {
    const o = this.#e.indexOf(t);
    return o === -1 ? this : this.insert(o, n, r);
  }
  after(t) {
    let n = this.#e.indexOf(t);
    if (n = n === -1 || n === this.size - 1 ? -1 : n + 1, n !== -1)
      return this.entryAt(n);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(t, n, r) {
    const o = this.#e.indexOf(t);
    return o === -1 ? this : this.insert(o + 1, n, r);
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
  delete(t) {
    const n = super.delete(t);
    return n && this.#e.splice(this.#e.indexOf(t), 1), n;
  }
  deleteAt(t) {
    const n = this.keyAt(t);
    return n !== void 0 ? this.delete(n) : !1;
  }
  at(t) {
    const n = Qr(this.#e, t);
    if (n !== void 0)
      return this.get(n);
  }
  entryAt(t) {
    const n = Qr(this.#e, t);
    if (n !== void 0)
      return [n, this.get(n)];
  }
  indexOf(t) {
    return this.#e.indexOf(t);
  }
  keyAt(t) {
    return Qr(this.#e, t);
  }
  from(t, n) {
    const r = this.indexOf(t);
    if (r === -1)
      return;
    let o = r + n;
    return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.at(o);
  }
  keyFrom(t, n) {
    const r = this.indexOf(t);
    if (r === -1)
      return;
    let o = r + n;
    return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.keyAt(o);
  }
  find(t, n) {
    let r = 0;
    for (const o of this) {
      if (Reflect.apply(t, n, [o, r, this]))
        return o;
      r++;
    }
  }
  findIndex(t, n) {
    let r = 0;
    for (const o of this) {
      if (Reflect.apply(t, n, [o, r, this]))
        return r;
      r++;
    }
    return -1;
  }
  filter(t, n) {
    const r = [];
    let o = 0;
    for (const i of this)
      Reflect.apply(t, n, [i, o, this]) && r.push(i), o++;
    return new Ut(r);
  }
  map(t, n) {
    const r = [];
    let o = 0;
    for (const i of this)
      r.push([i[0], Reflect.apply(t, n, [i, o, this])]), o++;
    return new Ut(r);
  }
  reduce(...t) {
    const [n, r] = t;
    let o = 0, i = r ?? this.at(0);
    for (const s of this)
      o === 0 && t.length === 1 ? i = s : i = Reflect.apply(n, this, [i, s, o, this]), o++;
    return i;
  }
  reduceRight(...t) {
    const [n, r] = t;
    let o = r ?? this.at(-1);
    for (let i = this.size - 1; i >= 0; i--) {
      const s = this.at(i);
      i === this.size - 1 && t.length === 1 ? o = s : o = Reflect.apply(n, this, [o, s, i, this]);
    }
    return o;
  }
  toSorted(t) {
    const n = [...this.entries()].sort(t);
    return new Ut(n);
  }
  toReversed() {
    const t = new Ut();
    for (let n = this.size - 1; n >= 0; n--) {
      const r = this.keyAt(n), o = this.get(r);
      t.set(r, o);
    }
    return t;
  }
  toSpliced(...t) {
    const n = [...this.entries()];
    return n.splice(...t), new Ut(n);
  }
  slice(t, n) {
    const r = new Ut();
    let o = this.size - 1;
    if (t === void 0)
      return r;
    t < 0 && (t = t + this.size), n !== void 0 && n > 0 && (o = n - 1);
    for (let i = t; i <= o; i++) {
      const s = this.keyAt(i), a = this.get(s);
      r.set(s, a);
    }
    return r;
  }
  every(t, n) {
    let r = 0;
    for (const o of this) {
      if (!Reflect.apply(t, n, [o, r, this]))
        return !1;
      r++;
    }
    return !0;
  }
  some(t, n) {
    let r = 0;
    for (const o of this) {
      if (Reflect.apply(t, n, [o, r, this]))
        return !0;
      r++;
    }
    return !1;
  }
};
function Qr(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Zl(e, t);
  return n === -1 ? void 0 : e[n];
}
$e(Qr, "at");
function Zl(e, t) {
  const n = e.length, r = bs(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
$e(Zl, "toSafeIndex");
function bs(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
$e(bs, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function um(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ gt(t), [o, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new ei(),
      setItemMap: /* @__PURE__ */ $e(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ $e(({ state: x, ...S }) => x ? /* @__PURE__ */ g(c, { ...S, state: x }) : /* @__PURE__ */ g(a, { ...S }), "CollectionProvider");
  s.displayName = t;
  const a = /* @__PURE__ */ $e((x) => {
    const S = v();
    return /* @__PURE__ */ g(c, { ...x, state: S });
  }, "CollectionInit");
  a.displayName = t + "Init";
  const c = /* @__PURE__ */ $e((x) => {
    const { scope: S, children: k, state: I } = x, P = m.useRef(null), [C, N] = m.useState(
      null
    ), E = be(P, N), [D, _] = I;
    return m.useEffect(() => {
      if (!C) return;
      const B = eu(() => {
      });
      return B.observe(C, {
        childList: !0,
        subtree: !0
      }), () => {
        B.disconnect();
      };
    }, [C]), /* @__PURE__ */ g(
      o,
      {
        scope: S,
        itemMap: D,
        setItemMap: _,
        collectionRef: E,
        collectionRefObject: P,
        collectionElement: C,
        children: k
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = t + "Impl";
  const l = e + "CollectionSlot", d = /* @__PURE__ */ Jt(l), u = m.forwardRef(
    (x, S) => {
      const { scope: k, children: I } = x, P = i(l, k), C = be(S, P.collectionRef);
      return /* @__PURE__ */ g(d, { ref: C, children: I });
    }
  );
  u.displayName = l;
  const f = e + "CollectionItemSlot", h = "data-radix-collection-item", b = /* @__PURE__ */ Jt(f), p = m.forwardRef(
    (x, S) => {
      const { scope: k, children: I, ...P } = x, C = m.useRef(null), [N, E] = m.useState(null), D = be(S, C, E), _ = i(f, k), { setItemMap: B } = _, T = m.useRef(P);
      Jl(T.current, P) || (T.current = P);
      const W = T.current;
      return m.useEffect(() => {
        const F = W;
        return B(($) => N ? $.has(N) ? $.set(N, { ...F, element: N }).toSorted(Di) : ($.set(N, { ...F, element: N }), $.toSorted(Di)) : $), () => {
          B(($) => !N || !$.has(N) ? $ : ($.delete(N), new ei($)));
        };
      }, [N, W, B]), /* @__PURE__ */ g(b, { [h]: "", ref: D, children: I });
    }
  );
  p.displayName = f;
  function v() {
    return m.useState(new ei());
  }
  $e(v, "useInitCollection");
  function y(x) {
    const { itemMap: S } = i(e + "CollectionConsumer", x);
    return S;
  }
  return $e(y, "useCollection"), [
    { Provider: s, Slot: u, ItemSlot: p },
    {
      createCollectionScope: r,
      useCollection: y,
      useInitCollection: v
    }
  ];
}
$e(um, "createCollection");
function Jl(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
$e(Jl, "shallowEqual");
function Ql(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
$e(Ql, "isElementPreceding");
function Di(e, t) {
  return !e[1].element || !t[1].element ? 0 : Ql(e[1].element, t[1].element) ? -1 : 1;
}
$e(Di, "sortByDocumentPosition");
function eu(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
$e(eu, "getChildListObserver");
var dm = Object.defineProperty, fm = (e, t) => dm(e, "name", { value: t, configurable: !0 }), hm = m.createContext(void 0);
function Ro(e) {
  const t = m.useContext(hm);
  return e || t || "ltr";
}
fm(Ro, "useDirection");
var gm = Object.defineProperty, pm = (e, t) => gm(e, "name", { value: t, configurable: !0 });
function St(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => ((...n) => t.current?.(...n)), []);
}
pm(St, "useCallbackRef");
var mm = Object.defineProperty, Fe = (e, t) => mm(e, "name", { value: t, configurable: !0 }), Mi = "dismissableLayer.update", vm = "dismissableLayer.pointerDownOutside", bm = "dismissableLayer.focusOutside", Wa, tu = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), nu = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fe(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: l,
      ...d
    } = t, u = m.useContext(tu), [f, h] = m.useState(null), b = f?.ownerDocument ?? globalThis?.document, [, p] = m.useState({}), v = be(n, h), y = Array.from(u.layers), [w] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), x = w ? y.indexOf(w) : -1, S = f ? y.indexOf(f) : -1, k = u.layersWithOutsidePointerEventsDisabled.size > 0, I = S >= x, P = m.useRef(!1), C = ou(
      (_) => {
        s?.(_), c?.(_), _.defaultPrevented || l?.();
      },
      {
        ownerDocument: b,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: P,
        dismissableSurfaces: u.dismissableSurfaces,
        shouldHandlePointerDownOutside: m.useCallback(
          (_) => {
            if (!(_ instanceof Node))
              return !1;
            const B = [...u.branches].some(
              (T) => T.contains(_)
            );
            return I && !B;
          },
          [u.branches, I]
        )
      }
    ), N = iu((_) => {
      if (o && P.current)
        return;
      const B = _.target;
      [...u.branches].some((W) => W.contains(B)) || (a?.(_), c?.(_), _.defaultPrevented || l?.());
    }, b), E = f ? S === y.length - 1 : !1, D = St((_) => {
      _.key === "Escape" && (i?.(_), !_.defaultPrevented && l && (_.preventDefault(), l()));
    });
    return m.useEffect(() => {
      if (E)
        return b.addEventListener("keydown", D, { capture: !0 }), () => b.removeEventListener("keydown", D, { capture: !0 });
    }, [b, E, D]), m.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Wa = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Oi(), () => {
          r && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (b.body.style.pointerEvents = Wa));
        };
    }, [f, b, r, u]), m.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Oi());
    }, [f, u]), m.useEffect(() => {
      const _ = /* @__PURE__ */ Fe(() => p({}), "handleUpdate");
      return document.addEventListener(Mi, _), () => document.removeEventListener(Mi, _);
    }, []), /* @__PURE__ */ g(
      xe.div,
      {
        ...d,
        ref: v,
        style: {
          pointerEvents: k ? I ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: oe(t.onFocusCapture, N.onFocusCapture),
        onBlurCapture: oe(t.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: oe(
          t.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function ru() {
  const e = m.useContext(tu), [t, n] = m.useState(null);
  return m.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
Fe(ru, "useDismissableLayerSurface");
var ym = /* @__PURE__ */ Fe(() => !0, "IS_TRUE");
function ou(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = ym
  } = t, a = St(e), c = m.useRef(!1), l = m.useRef(!1), d = m.useRef(/* @__PURE__ */ new Map()), u = m.useRef(() => {
  });
  return m.useEffect(() => {
    function f() {
      l.current = !1, o.current = !1, d.current.clear();
    }
    Fe(f, "resetOutsideInteraction");
    function h() {
      return Array.from(d.current.values()).some(Boolean);
    }
    Fe(h, "isOutsideInteractionIntercepted");
    function b(x) {
      if (!l.current)
        return;
      const S = x.target;
      S instanceof Node && [...i].some((I) => I.contains(S)) || d.current.set(x.type, !0), x.type === "click" && window.setTimeout(() => {
        l.current && u.current();
      }, 0);
    }
    Fe(b, "handleInteractionCapture");
    function p(x) {
      l.current && d.current.set(x.type, !1);
    }
    Fe(p, "handleInteractionBubble");
    const v = /* @__PURE__ */ Fe((x) => {
      if (x.target && !c.current) {
        let S = function() {
          n.removeEventListener("click", u.current);
          const I = h();
          f(), I || ys(
            vm,
            a,
            k,
            { discrete: !0 }
          );
        };
        if (Fe(S, "handleAndDispatchPointerDownOutsideEvent"), !s(x.target)) {
          n.removeEventListener("click", u.current), f(), c.current = !1;
          return;
        }
        const k = { originalEvent: x };
        l.current = !0, o.current = r && x.button === 0, d.current.clear(), !r || x.button !== 0 ? S() : (n.removeEventListener("click", u.current), u.current = S, n.addEventListener("click", u.current, { once: !0 }));
      } else
        n.removeEventListener("click", u.current), f();
      c.current = !1;
    }, "handlePointerDown"), y = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const x of y)
      n.addEventListener(x, b, !0), n.addEventListener(x, p);
    const w = window.setTimeout(() => {
      n.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(w), n.removeEventListener("pointerdown", v), n.removeEventListener("click", u.current);
      for (const x of y)
        n.removeEventListener(x, b, !0), n.removeEventListener(x, p);
    };
  }, [
    n,
    a,
    r,
    o,
    i,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Fe(() => c.current = !0, "onPointerDownCapture")
  };
}
Fe(ou, "usePointerDownOutside");
function iu(e, t = globalThis?.document) {
  const n = St(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = /* @__PURE__ */ Fe((i) => {
      i.target && !r.current && ys(bm, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ Fe(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Fe(() => r.current = !1, "onBlurCapture")
  };
}
Fe(iu, "useFocusOutside");
function Oi() {
  const e = new CustomEvent(Mi);
  document.dispatchEvent(e);
}
Fe(Oi, "dispatchUpdate");
function ys(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? vs(o, i) : o.dispatchEvent(i);
}
Fe(ys, "handleAndDispatchCustomEvent");
var wm = Object.defineProperty, ws = (e, t) => wm(e, "name", { value: t, configurable: !0 }), Kr = 0, Dn = null;
function xm(e) {
  return Eo(), e.children;
}
ws(xm, "FocusGuards");
function Eo() {
  m.useEffect(() => {
    Dn || (Dn = { start: _i(), end: _i() });
    const { start: e, end: t } = Dn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Kr++, () => {
      Kr === 1 && (Dn?.start.remove(), Dn?.end.remove(), Dn = null), Kr = Math.max(0, Kr - 1);
    };
  }, []);
}
ws(Eo, "useFocusGuards");
function _i() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
ws(_i, "createFocusGuard");
var Cm = Object.defineProperty, He = (e, t) => Cm(e, "name", { value: t, configurable: !0 }), ti = "focusScope.autoFocusOnMount", ni = "focusScope.autoFocusOnUnmount", Ga = { bubbles: !1, cancelable: !0 }, su = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ He(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...a
    } = t, [c, l] = m.useState(null), d = St(i), u = St(s), f = m.useRef(null), h = be(n, l), b = m.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    m.useEffect(() => {
      if (o) {
        let v = function(S) {
          if (b.paused || !c) return;
          const k = S.target;
          c.contains(k) ? f.current = k : Rt(f.current, { select: !0 });
        }, y = function(S) {
          if (b.paused || !c) return;
          const k = S.relatedTarget;
          k !== null && (c.contains(k) || Rt(f.current, { select: !0 }));
        }, w = function(S) {
          if (document.activeElement === document.body)
            for (const I of S)
              I.removedNodes.length > 0 && Rt(c);
        };
        He(v, "handleFocusIn"), He(y, "handleFocusOut"), He(w, "handleMutations"), document.addEventListener("focusin", v), document.addEventListener("focusout", y);
        const x = new MutationObserver(w);
        return c && x.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), x.disconnect();
        };
      }
    }, [o, c, b.paused]), m.useEffect(() => {
      if (c) {
        Va.add(b);
        const v = document.activeElement;
        if (!c.contains(v)) {
          const w = new CustomEvent(ti, Ga);
          c.addEventListener(ti, d), c.dispatchEvent(w), w.defaultPrevented || (au(fu(xs(c)), { select: !0 }), document.activeElement === v && Rt(c));
        }
        return () => {
          c.removeEventListener(ti, d), setTimeout(() => {
            const w = new CustomEvent(ni, Ga);
            c.addEventListener(ni, u), c.dispatchEvent(w), w.defaultPrevented || Rt(v ?? document.body, { select: !0 }), c.removeEventListener(ni, u), Va.remove(b);
          }, 0);
        };
      }
    }, [c, d, u, b]);
    const p = m.useCallback(
      (v) => {
        if (!r && !o || b.paused) return;
        const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
        if (y && w) {
          const x = v.currentTarget, [S, k] = cu(x);
          S && k ? !v.shiftKey && w === k ? (v.preventDefault(), r && Rt(S, { select: !0 })) : v.shiftKey && w === S && (v.preventDefault(), r && Rt(k, { select: !0 })) : w === x && v.preventDefault();
        }
      },
      [r, o, b.paused]
    );
    return /* @__PURE__ */ g(xe.div, { tabIndex: -1, ...a, ref: h, onKeyDown: p });
  }, "FocusScope")
);
function au(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, { select: t }), document.activeElement !== n) return;
}
He(au, "focusFirst");
function cu(e) {
  const t = xs(e), n = Ti(t, e), r = Ti(t.reverse(), e);
  return [n, r];
}
He(cu, "getTabbableEdges");
function xs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ He((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
He(xs, "getTabbableCandidates");
function Ti(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : lu(r, { upTo: t })))
      return r;
}
He(Ti, "findVisible");
function lu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
He(lu, "isHidden");
function uu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
He(uu, "isSelectableInput");
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uu(e) && t && e.select();
  }
}
He(Rt, "focus");
var Va = du();
function du() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Fi(e, t), e.unshift(t);
    },
    remove(t) {
      e = Fi(e, t), e[0]?.resume();
    }
  };
}
He(du, "createFocusScopesStack");
function Fi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
He(Fi, "arrayRemove");
function fu(e) {
  return e.filter((t) => t.tagName !== "A");
}
He(fu, "removeLinks");
var Sm = Object.defineProperty, Pm = (e, t) => Sm(e, "name", { value: t, configurable: !0 }), Im = m[" useId ".trim().toString()] || (() => {
}), km = 0;
function At(e) {
  const [t, n] = m.useState(Im());
  return Xe(() => {
    e || n((r) => r ?? String(km++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Pm(At, "useId");
const Nm = ["top", "right", "bottom", "left"], Qt = Math.min, Dt = Math.max, ho = Math.round, Wr = Math.floor, Mt = (e) => ({
  x: e,
  y: e
}), Rm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hu(e, t, n) {
  return Dt(e, Qt(t, n));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function en(e) {
  return e.split("-")[0];
}
function Gn(e) {
  return e.split("-")[1];
}
function Cs(e) {
  return e === "x" ? "y" : "x";
}
function Ss(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ps(e) {
  return Cs(Ct(e));
}
function Em(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gn(e), o = Ps(e), i = Ss(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = go(s)), [s, go(s)];
}
function Am(e) {
  const t = go(e);
  return [$i(e), t, $i(t)];
}
function $i(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ua = ["left", "right"], Ya = ["right", "left"], Dm = ["top", "bottom"], Mm = ["bottom", "top"];
function Om(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ya : Ua : t ? Ua : Ya;
    case "left":
    case "right":
      return t ? Dm : Mm;
    default:
      return [];
  }
}
function _m(e, t, n, r) {
  const o = Gn(e);
  let i = Om(en(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map($i)))), i;
}
function go(e) {
  const t = en(e);
  return Rm[t] + e.slice(t.length);
}
function Tm(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function gu(e) {
  return typeof e != "number" ? Tm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function po(e) {
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
function qa(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ct(t), s = Ps(t), a = Ss(s), c = en(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  const b = Gn(t);
  return b && (h[s] += f * (b === "end" ? 1 : -1) * (n && l ? -1 : 1)), h;
}
async function Fm(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = _t(t, e), b = gu(h), v = a[f ? u === "floating" ? "reference" : "floating" : u], y = po(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), w = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) && await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  }, k = po(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return {
    top: (y.top - k.top + b.top) / S.y,
    bottom: (k.bottom - y.bottom + b.bottom) / S.y,
    left: (y.left - k.left + b.left) / S.x,
    right: (k.right - y.right + b.right) / S.x
  };
}
const $m = 50, Lm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Fm
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = qa(l, r, c), f = r, h = 0;
  const b = {};
  for (let p = 0; p < i.length; p++) {
    const v = i[p];
    if (!v)
      continue;
    const {
      name: y,
      fn: w
    } = v, {
      x,
      y: S,
      data: k,
      reset: I
    } = await w({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: b,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, u = S ?? u, b[y] = {
      ...b[y],
      ...k
    }, I && h < $m && (h++, typeof I == "object" && (I.placement && (f = I.placement), I.rects && (l = I.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: d,
      y: u
    } = qa(l, f, c)), p = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: b
  };
}, Bm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: d = 0
    } = _t(e, t) || {};
    if (l == null)
      return {};
    const u = gu(d), f = {
      x: n,
      y: r
    }, h = Ps(o), b = Ss(h), p = await s.getDimensions(l), v = h === "y", y = v ? "top" : "left", w = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", S = i.reference[b] + i.reference[h] - f[h] - i.floating[b], k = f[h] - i.reference[h], I = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = I ? I[x] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(I))) && (P = a.floating[x] || i.floating[b]);
    const C = S / 2 - k / 2, N = P / 2 - p[b] / 2 - 1, E = Qt(u[y], N), D = Qt(u[w], N), _ = P - p[b] - D, B = P / 2 - p[b] / 2 + C, T = hu(E, B, _), W = !c.arrow && Gn(o) != null && B !== T && i.reference[b] / 2 - (B < E ? E : D) - p[b] / 2 < 0, F = W ? B < E ? B - E : B - _ : 0;
    return {
      [h]: f[h] + F,
      data: {
        [h]: T,
        centerOffset: B - T - F,
        ...W && {
          alignmentOffset: F
        }
      },
      reset: W
    };
  }
}), zm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...v
      } = _t(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = en(o), w = Ct(a), x = en(a) === a, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), k = f || (x || !p ? [go(a)] : Am(a)), I = b !== "none";
      !f && I && k.push(..._m(a, p, b, S));
      const P = [a, ...k], C = await c.detectOverflow(t, v), N = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && N.push(C[y]), u) {
        const T = Em(o, s, S);
        N.push(C[T[0]], C[T[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: N
      }], !N.every((T) => T <= 0)) {
        var D, _;
        const T = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, W = P[T];
        if (W && (!(u === "alignment" ? w !== Ct(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((R) => Ct(R.placement) === w ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: T,
              overflows: E
            },
            reset: {
              placement: W
            }
          };
        let F = (_ = E.filter(($) => $.overflows[0] <= 0).sort(($, R) => $.overflows[1] - R.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!F)
          switch (h) {
            case "bestFit": {
              var B;
              const $ = (B = E.filter((R) => {
                if (I) {
                  const M = Ct(R.placement);
                  return M === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, A) => M + A, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : B[0];
              $ && (F = $);
              break;
            }
            case "initialPlacement":
              F = a;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function Xa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Za(e) {
  return Nm.some((t) => e[t] >= 0);
}
const jm = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = _t(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = Xa(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Za(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = Xa(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Za(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, pu = /* @__PURE__ */ new Set(["left", "top"]);
async function Hm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = en(n), a = Gn(n), c = Ct(n) === "y", l = pu.has(s) ? -1 : 1, d = i && c ? -1 : 1, u = _t(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: b
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof b == "number" && (h = a === "end" ? b * -1 : b), c ? {
    x: h * d,
    y: f * l
  } : {
    x: f * l,
    y: h * d
  };
}
const Km = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await Hm(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Wm = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x,
              y: S
            } = w;
            return {
              x,
              y: S
            };
          }
        },
        ...l
      } = _t(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, l), f = Ct(o), h = Cs(f);
      let b = d[h], p = d[f];
      const v = (w, x) => hu(x + u[w === "y" ? "top" : "left"], x, x - u[w === "y" ? "bottom" : "right"]);
      s && (b = v(h, b)), a && (p = v(f, p));
      const y = c.fn({
        ...t,
        [h]: b,
        [f]: p
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [f]: a
          }
        }
      };
    }
  };
}, Gm = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        rects: a,
        middlewareData: c
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = _t(e, t), f = {
        x: o,
        y: i
      }, h = Ct(s), b = Cs(h);
      let p = f[b], v = f[h];
      const y = _t(l, t), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: (n = y.mainAxis) != null ? n : 0,
        crossAxis: (r = y.crossAxis) != null ? r : 0
      };
      if (d) {
        const k = b === "y" ? "height" : "width", I = a.reference[b] - a.floating[k] + w.mainAxis, P = a.reference[b] + a.reference[k] - w.mainAxis;
        p < I ? p = I : p > P && (p = P);
      }
      if (u) {
        var x, S;
        const k = b === "y" ? "width" : "height", I = pu.has(en(s)), P = a.reference[h] - a.floating[k] + (I && ((x = c.offset) == null ? void 0 : x[h]) || 0) + (I ? 0 : w.crossAxis), C = a.reference[h] + a.reference[k] + (I ? 0 : ((S = c.offset) == null ? void 0 : S[h]) || 0) - (I ? w.crossAxis : 0);
        v < P ? v = P : v > C && (v = C);
      }
      return {
        [b]: p,
        [h]: v
      };
    }
  };
}, Vm = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = _t(e, t), c = await o.detectOverflow(t, a), l = en(n), d = Gn(n), u = Ct(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let b, p;
      l === "top" || l === "bottom" ? (b = l, p = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (p = l, b = d === "end" ? "top" : "bottom");
      const v = h - c.top - c.bottom, y = f - c.left - c.right, w = Qt(h - c[b], v), x = Qt(f - c[p], y), S = t.middlewareData.shift, k = !S;
      let I = w, P = x;
      S != null && S.enabled.x && (P = y), S != null && S.enabled.y && (I = v), k && !d && (u ? P = f - 2 * Dt(c.left, c.right) : I = h - 2 * Dt(c.top, c.bottom)), await s({
        ...t,
        availableWidth: P,
        availableHeight: I
      });
      const C = await o.getDimensions(i.floating);
      return f !== C.width || h !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ao() {
  return typeof window < "u";
}
function Vn(e) {
  return mu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lt(e) {
  var t;
  return (t = (mu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mu(e) {
  return Ao() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function Pt(e) {
  return Ao() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function an(e) {
  return Ao() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function Ja(e) {
  return !Ao() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function Do(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Um(e) {
  return /^(table|td|th)$/.test(Vn(e));
}
function Mo(e) {
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
const Ym = /transform|translate|scale|rotate|perspective|filter/, qm = /paint|layout|strict|content/, vn = (e) => !!e && e !== "none";
let ri;
function Is(e) {
  const t = Pt(e) ? It(e) : e;
  return vn(t.transform) || vn(t.translate) || vn(t.scale) || vn(t.rotate) || vn(t.perspective) || !ks() && (vn(t.backdropFilter) || vn(t.filter)) || Ym.test(t.willChange || "") || qm.test(t.contain || "");
}
function Xm(e) {
  let t = wn(e);
  for (; an(t) && !dr(t); ) {
    if (Is(t))
      return t;
    if (Mo(t))
      return null;
    t = wn(t);
  }
  return null;
}
function ks() {
  return ri == null && (ri = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ri;
}
function dr(e) {
  return /^(html|body|#document)$/.test(Vn(e));
}
function It(e) {
  return Ge(e).getComputedStyle(e);
}
function Oo(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function wn(e) {
  if (Vn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ja(e) && e.host || // Fallback.
    Lt(e)
  );
  return Ja(t) ? t.host : t;
}
function vu(e) {
  const t = wn(e);
  return dr(t) ? (e.ownerDocument || e).body : an(t) && Do(t) ? t : vu(t);
}
function fr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = vu(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ge(o);
  if (i) {
    const a = Li(s);
    return t.concat(s, s.visualViewport || [], Do(o) ? o : [], a && n ? fr(a) : []);
  } else
    return t.concat(o, fr(o, [], n));
}
function Li(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bu(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = an(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = ho(n) !== i || ho(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ns(e) {
  return Pt(e) ? e : e.contextElement;
}
function Ln(e) {
  const t = Ns(e);
  if (!an(t))
    return Mt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = bu(t);
  let s = (i ? ho(n.width) : n.width) / r, a = (i ? ho(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Zm = /* @__PURE__ */ Mt(0);
function yu(e) {
  const t = Ge(e);
  return !ks() || !t.visualViewport ? Zm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Jm(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === Ge(e);
}
function xn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ns(e);
  let s = Mt(1);
  t && (r ? Pt(r) && (s = Ln(r)) : s = Ln(e));
  const a = Jm(i, n, r) ? yu(i) : Mt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i && r) {
    const f = Ge(i), h = Pt(r) ? Ge(r) : r;
    let b = f, p = Li(b);
    for (; p && h !== b; ) {
      const v = Ln(p), y = p.getBoundingClientRect(), w = It(p), x = y.left + (p.clientLeft + parseFloat(w.paddingLeft)) * v.x, S = y.top + (p.clientTop + parseFloat(w.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, u *= v.y, c += x, l += S, b = Ge(p), p = Li(b);
    }
  }
  return po({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function _o(e, t) {
  const n = Oo(e).scrollLeft;
  return t ? t.left + n : xn(Lt(e)).left + n;
}
function wu(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - _o(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Qm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Lt(r), a = t ? Mo(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Mt(1);
  const d = Mt(0), u = an(r);
  if ((u || !i) && ((Vn(r) !== "body" || Do(s)) && (c = Oo(r)), u)) {
    const h = xn(r);
    l = Ln(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !i ? wu(s, c) : Mt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + f.y
  };
}
function ev(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function tv(e) {
  const t = Oo(e), n = e.ownerDocument.body, r = Dt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = Dt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + _o(e);
  const s = -t.scrollTop;
  return It(n).direction === "rtl" && (i += Dt(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: s
  };
}
const nv = 25;
function rv(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = Ge(e), i = Lt(e), s = o.visualViewport;
  let a = i.clientWidth, c = i.clientHeight, l = 0, d = 0;
  if (s) {
    const f = !ks() || t === "fixed";
    r ? f || (l = -s.offsetLeft, d = -s.offsetTop) : (a = s.width, c = s.height, f && (l = s.offsetLeft, d = s.offsetTop));
  }
  if (_o(i) <= 0) {
    const f = i.ownerDocument, h = f.body, b = getComputedStyle(h), p = f.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, v = Math.abs(i.clientWidth - h.clientWidth - p), y = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? v / 2 : v;
    y <= nv && (a -= y);
  }
  return {
    width: a,
    height: c,
    x: l,
    y: d
  };
}
function ov(e, t) {
  const n = xn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ln(e), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Qa(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = rv(e, n, t);
  else if (t === "document")
    r = tv(Lt(e));
  else if (Pt(t))
    r = ov(t, n);
  else {
    const o = yu(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return po(r);
}
function iv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fr(e, [], !1).filter((a) => Pt(a) && Vn(a) !== "body"), o = null;
  const i = It(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; Pt(s) && !dr(s); ) {
    const a = It(s), c = Is(s), l = o ? o.position : i ? "fixed" : "";
    !c && (l === "fixed" || l === "absolute" && a.position === "static") ? r = r.filter((u) => u !== s) : o = a, s = wn(s);
  }
  return t.set(e, r), r;
}
function sv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Mo(t) ? [] : iv(t, this._c) : [].concat(n), r], a = Qa(t, s[0], o);
  let c = a.top, l = a.right, d = a.bottom, u = a.left;
  for (let f = 1; f < s.length; f++) {
    const h = Qa(t, s[f], o);
    c = Dt(h.top, c), l = Qt(h.right, l), d = Qt(h.bottom, d), u = Dt(h.left, u);
  }
  return {
    width: l - u,
    height: d - c,
    x: u,
    y: c
  };
}
function av(e) {
  const {
    width: t,
    height: n
  } = bu(e);
  return {
    width: t,
    height: n
  };
}
function cv(e, t, n) {
  const r = an(t), o = Lt(t), i = n === "fixed", s = xn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Mt(0);
  if ((r || !i) && ((Vn(t) !== "body" || Do(o)) && (a = Oo(t)), r)) {
    const f = xn(t, !0, i, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  }
  !r && o && (c.x = _o(o));
  const l = o && !r && !i ? wu(o, a) : Mt(0), d = s.left + a.scrollLeft - c.x - l.x, u = s.top + a.scrollTop - c.y - l.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function oi(e) {
  return It(e).position === "static";
}
function ec(e, t) {
  if (!an(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Lt(e) === n && (n = n.ownerDocument.body), n;
}
function xu(e, t) {
  const n = Ge(e);
  if (Mo(e))
    return n;
  if (!an(e)) {
    let o = wn(e);
    for (; o && !dr(o); ) {
      if (Pt(o) && !oi(o))
        return o;
      o = wn(o);
    }
    return n;
  }
  let r = ec(e, t);
  for (; r && Um(r) && oi(r); )
    r = ec(r, t);
  return r && dr(r) && oi(r) && !Is(r) ? n : r || Xm(e) || n;
}
const lv = async function(e) {
  const t = this.getOffsetParent || xu, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: cv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function uv(e) {
  return It(e).direction === "rtl";
}
const dv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qm,
  getDocumentElement: Lt,
  getClippingRect: sv,
  getOffsetParent: xu,
  getElementRects: lv,
  getClientRects: ev,
  getDimensions: av,
  getScale: Ln,
  isElement: Pt,
  isRTL: uv
};
function Cu(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function fv(e, t, n) {
  let r = null, o;
  const i = Lt(e);
  function s() {
    var d;
    clearTimeout(o), (d = r) == null || d.disconnect(), r = null;
  }
  function a(d, u) {
    d === void 0 && (d = !1), u === void 0 && (u = 1), s();
    const f = e.getBoundingClientRect(), {
      left: h,
      top: b,
      width: p,
      height: v
    } = f;
    if (d || t(), !p || !v)
      return;
    const y = Wr(b), w = Wr(i.clientWidth - (h + p)), x = Wr(i.clientHeight - (b + v)), S = Wr(h), I = {
      rootMargin: -y + "px " + -w + "px " + -x + "px " + -S + "px",
      threshold: Dt(0, Qt(1, u)) || 1
    };
    let P = !0;
    function C(N) {
      const E = N[0].intersectionRatio;
      if (!Cu(f, e.getBoundingClientRect()))
        return a();
      if (E !== u) {
        if (!P)
          return a();
        E ? a(!1, E) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      P = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...I,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, I);
    }
    r.observe(e);
  }
  const c = Ge(e), l = () => a(n);
  return c.addEventListener("resize", l), a(!0), () => {
    c.removeEventListener("resize", l), s();
  };
}
function hv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Ns(e), d = o || i ? [...l ? fr(l) : [], ...t ? fr(t) : []] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n), i && y.addEventListener("resize", n);
  });
  const u = l && a ? fv(l, n, i) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === l && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), l && !c && h.observe(l), t && h.observe(t));
  let b, p = c ? xn(e) : null;
  c && v();
  function v() {
    const y = xn(e);
    p && !Cu(p, y) && n(), p = y, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), u?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(b);
  };
}
const gv = Km, pv = Wm, mv = zm, vv = Vm, bv = jm, tc = Bm, yv = Gm, wv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, i = {
    ...dv,
    ...o.platform,
    _c: r
  };
  return Lm(e, t, {
    ...o,
    platform: i
  });
};
var xv = typeof document < "u", Cv = function() {
}, eo = xv ? Uc : Cv;
function mo(e, t) {
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
        if (!mo(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !mo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Su(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nc(e, t) {
  const n = Su(e);
  return Math.round(t * n) / n;
}
function ii(e) {
  const t = m.useRef(e);
  return eo(() => {
    t.current = e;
  }), t;
}
function Sv(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [d, u] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = m.useState(r);
  mo(f, r) || h(r);
  const [b, p] = m.useState(null), [v, y] = m.useState(null), w = m.useCallback((R) => {
    R !== I.current && (I.current = R, p(R));
  }, []), x = m.useCallback((R) => {
    R !== P.current && (P.current = R, y(R));
  }, []), S = i || b, k = s || v, I = m.useRef(null), P = m.useRef(null), C = m.useRef(d), N = c != null, E = ii(c), D = ii(o), _ = ii(l), B = m.useCallback(() => {
    if (!I.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    D.current && (R.platform = D.current), wv(I.current, P.current, R).then((M) => {
      const A = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      T.current && !mo(C.current, A) && (C.current = A, Ji.flushSync(() => {
        u(A);
      }));
    });
  }, [f, t, n, D, _]);
  eo(() => {
    l === !1 && C.current.isPositioned && (C.current.isPositioned = !1, u((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const T = m.useRef(!1);
  eo(() => (T.current = !0, () => {
    T.current = !1;
  }), []), eo(() => {
    if (S && (I.current = S), k && (P.current = k), S && k) {
      if (E.current)
        return E.current(S, k, B);
      B();
    }
  }, [S, k, B, E, N]);
  const W = m.useMemo(() => ({
    reference: I,
    floating: P,
    setReference: w,
    setFloating: x
  }), [w, x]), F = m.useMemo(() => ({
    reference: S,
    floating: k
  }), [S, k]), $ = m.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return R;
    const M = nc(F.floating, d.x), A = nc(F.floating, d.y);
    return a ? {
      ...R,
      transform: "translate(" + M + "px, " + A + "px)",
      ...Su(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: A
    };
  }, [n, a, F.floating, d.x, d.y]);
  return m.useMemo(() => ({
    ...d,
    update: B,
    refs: W,
    elements: F,
    floatingStyles: $
  }), [d, B, W, F, $]);
}
const Pv = (e) => {
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
      return r && t(r) ? r.current != null ? tc({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? tc({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Iv = (e, t) => {
  const n = gv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, kv = (e, t) => {
  const n = pv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Nv = (e, t) => ({
  fn: yv(e).fn,
  options: [e, t]
}), Rv = (e, t) => {
  const n = mv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ev = (e, t) => {
  const n = vv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Av = (e, t) => {
  const n = bv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Dv = (e, t) => {
  const n = Pv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Mv = Object.defineProperty, Ov = (e, t) => Mv(e, "name", { value: t, configurable: !0 });
function To(e) {
  const [t, n] = m.useState(void 0);
  return Xe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
Ov(To, "useSize");
var _v = Object.defineProperty, Zt = (e, t) => _v(e, "name", { value: t, configurable: !0 }), Pu = "Popper", [Iu, ku] = /* @__PURE__ */ gt(Pu), [Tv, Nu] = Iu(Pu), Fv = /* @__PURE__ */ Zt((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null), [i, s] = m.useState(void 0);
  return /* @__PURE__ */ g(
    Tv,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), $v = "PopperAnchor", Lv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Zt(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...i } = t, s = Nu($v, r), a = m.useRef(null), c = s.onAnchorChange, l = m.useCallback(
      (p) => {
        a.current = p, p && c(p);
      },
      [c]
    ), d = be(n, l), u = m.useRef(null);
    m.useEffect(() => {
      if (!o)
        return;
      const p = u.current;
      u.current = o.current, p !== u.current && c(u.current);
    });
    const f = s.placementState && Fo(s.placementState), h = f?.[0], b = f?.[1];
    return o ? null : /* @__PURE__ */ g(
      xe.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": b,
        ...i,
        ref: d
      }
    );
  }, "PopperAnchor")
), Ru = "PopperContent", [Bv, xP] = Iu(Ru), zv = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Zt(function(t, n) {
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: i = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: p,
      ...v
    } = t, y = Nu(Ru, r), [w, x] = m.useState(null), S = be(n, x), [k, I] = m.useState(null), P = To(k), C = P?.width ?? 0, N = P?.height ?? 0, E = o + (s !== "center" ? "-" + s : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, _ = Array.isArray(d) ? d : [d], B = _.length > 0, T = {
      padding: D,
      boundary: _.filter(Eu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: W, floatingStyles: F, placement: $, isPositioned: R, middlewareData: M } = Sv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: /* @__PURE__ */ Zt((...J) => hv(...J, {
        animationFrame: b === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Iv({ mainAxis: i + N, alignmentAxis: a }),
        l && kv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Nv() : void 0,
          ...T
        }),
        l && Rv({ ...T }),
        Ev({
          ...T,
          apply: /* @__PURE__ */ Zt(({ elements: J, rects: Z, availableWidth: re, availableHeight: ie }) => {
            const { width: we, height: se } = Z.reference, Re = J.floating.style;
            Re.setProperty("--radix-popper-available-width", `${re}px`), Re.setProperty("--radix-popper-available-height", `${ie}px`), Re.setProperty("--radix-popper-anchor-width", `${we}px`), Re.setProperty("--radix-popper-anchor-height", `${se}px`);
          }, "apply")
        }),
        k && Dv({ element: k, padding: c }),
        jv({ arrowWidth: C, arrowHeight: N }),
        h && Av({
          strategy: "referenceHidden",
          ...T,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: B ? T.boundary : void 0
        })
      ]
    }), A = y.setPlacementState;
    Xe(() => (A($), () => {
      A(void 0);
    }), [$, A]);
    const [H, K] = Fo($), j = St(p);
    Xe(() => {
      R && j?.();
    }, [R, j]);
    const V = M.arrow?.x, Y = M.arrow?.y, z = M.arrow?.centerOffset !== 0, [G, U] = m.useState();
    return Xe(() => {
      w && U(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ g(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: R ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            M.transformOrigin?.x,
            M.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...M.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ g(
          Bv,
          {
            scope: r,
            placedSide: H,
            placedAlign: K,
            onArrowChange: I,
            arrowX: V,
            arrowY: Y,
            shouldHideArrow: z,
            children: /* @__PURE__ */ g(
              xe.div,
              {
                "data-side": H,
                "data-align": K,
                ...v,
                ref: S,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: R ? v.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Eu(e) {
  return e !== null;
}
Zt(Eu, "isNotNull");
var jv = /* @__PURE__ */ Zt((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = Fo(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let b = "", p = "";
    return l === "bottom" ? (b = s ? u : `${f}px`, p = `${-c}px`) : l === "top" ? (b = s ? u : `${f}px`, p = `${r.floating.height + c}px`) : l === "right" ? (b = `${-c}px`, p = s ? u : `${h}px`) : l === "left" && (b = `${r.floating.width + c}px`, p = s ? u : `${h}px`), { data: { x: b, y: p } };
  }
}), "transformOrigin");
function Fo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Zt(Fo, "getSideAndAlignFromPlacement");
var Au = Fv, Hv = Lv, Kv = zv, Wv = Object.defineProperty, Gv = (e, t) => Wv(e, "name", { value: t, configurable: !0 }), Du = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Gv(function(t, n) {
    const { container: r, ...o } = t, [i, s] = m.useState(!1);
    Xe(() => s(!0), []);
    const a = r || i && globalThis?.document?.body;
    return a ? Ji.createPortal(/* @__PURE__ */ g(xe.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), Vv = Object.defineProperty, Tt = (e, t) => Vv(e, "name", { value: t, configurable: !0 });
function Mu(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
Tt(Mu, "useStateMachine");
var Un = /* @__PURE__ */ Tt((e) => {
  const { present: t, children: n } = e, r = Ou(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = _u(r.ref, Tu(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
}, "Presence");
function Ou(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), s = m.useRef(void 0), a = e ? "mounted" : "unmounted", [c, l] = Mu(a, {
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
  return m.useEffect(() => {
    c === "mounted" ? (i.current = s.current ?? Tn(r.current), s.current = void 0) : i.current = "none";
  }, [c]), Xe(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, b = Tn(d);
      e ? (s.current = b, l("MOUNT")) : b === "none" || d?.display === "none" ? l("UNMOUNT") : l(u && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Xe(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ Tt((b) => {
        const v = Tn(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Tt((b) => {
        b.target === t && (i.current = Tn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: m.useCallback((d) => {
      if (d) {
        const u = getComputedStyle(d);
        r.current = u, s.current = Tn(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
Tt(Ou, "usePresence");
function Bi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Tt(Bi, "setRef");
function _u(...e) {
  const t = m.useRef(e);
  return t.current = e, m.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const i = r.map((s) => {
      const a = Bi(s, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const a = i[s];
          typeof a == "function" ? a() : Bi(r[s], null);
        }
      };
  }, []);
}
Tt(_u, "useStableComposedRefs");
function Tn(e) {
  return e?.animationName || "none";
}
Tt(Tn, "getAnimationName");
function Tu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Tt(Tu, "getElementRef");
var Uv = Object.defineProperty, Rs = (e, t) => Uv(e, "name", { value: t, configurable: !0 }), si = !1;
function Fu() {
  const [e, t] = m.useState(si);
  return m.useEffect(() => {
    si || (si = !0, t(!0));
  }, []), e;
}
Rs(Fu, "useIsHydrated");
var $u = m[" useSyncExternalStore ".trim().toString()];
function Lu() {
  return () => {
  };
}
Rs(Lu, "subscribe");
function Bu() {
  return $u(
    Lu,
    () => !0,
    () => !1
  );
}
Rs(Bu, "useIsHydratedModern");
var Yv = typeof $u == "function" ? Bu : Fu, qv = Object.defineProperty, Pn = (e, t) => qv(e, "name", { value: t, configurable: !0 }), ai = "rovingFocusGroup.onEntryFocus", Xv = { bubbles: !1, cancelable: !0 }, $o = "RovingFocusGroup", [zi, zu, Zv] = /* @__PURE__ */ No($o), [Jv, ju] = /* @__PURE__ */ gt(
  $o,
  [Zv]
), [Qv, eb] = Jv($o), tb = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pn(function(t, n) {
    return /* @__PURE__ */ g(zi.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(zi.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ g(nb, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), nb = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ Pn(function(t, n) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: o,
    loop: i = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = t, h = m.useRef(null), b = be(n, h), p = Ro(s), [v, y] = Sn({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: $o
  }), [w, x] = m.useState(!1), S = St(d), k = zu(r), I = m.useRef(!1), [P, C] = m.useState(0);
  return m.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(ai, S), () => N.removeEventListener(ai, S);
  }, [S]), /* @__PURE__ */ g(
    Qv,
    {
      scope: r,
      orientation: o,
      dir: p,
      loop: i,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (N) => y(N),
        [y]
      ),
      onItemShiftTab: m.useCallback(() => x(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => C((N) => N + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => C((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ g(
        xe.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: b,
          style: { outline: "none", ...t.style },
          onMouseDown: oe(t.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: oe(t.onFocus, (N) => {
            const E = !I.current;
            if (N.target === N.currentTarget && E && !w) {
              const D = new CustomEvent(ai, Xv);
              if (N.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const _ = k().filter(($) => $.focusable), B = _.find(($) => $.active), T = _.find(($) => $.id === v), F = [B, T, ..._].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Es(F, u);
              }
            }
            I.current = !1;
          }),
          onBlur: oe(t.onBlur, () => x(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), rb = "RovingFocusGroupItem", ob = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Pn(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: i = !1,
      tabStopId: s,
      children: a,
      ...c
    } = t, l = At(), d = s || l, u = eb(rb, r), f = u.currentTabStopId === d, h = zu(r), { onFocusableItemAdd: b, onFocusableItemRemove: p, currentTabStopId: v } = u, y = Yv();
    return Xe(() => {
      if (!(!y || !o))
        return b(), () => p();
    }, [y, o, b, p]), m.useEffect(() => {
      if (!(y || !o))
        return b(), () => p();
    }, [y, o, b, p]), /* @__PURE__ */ g(
      zi.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: o,
        active: i,
        children: /* @__PURE__ */ g(
          xe.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...c,
            ref: n,
            onMouseDown: oe(t.onMouseDown, (w) => {
              o ? u.onItemFocus(d) : w.preventDefault();
            }),
            onFocus: oe(t.onFocus, () => u.onItemFocus(d)),
            onKeyDown: oe(t.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const x = Ku(w, u.orientation, u.dir);
              if (x !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let k = h().filter((I) => I.focusable).map((I) => I.ref.current);
                if (x === "last") k.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && k.reverse();
                  const I = k.indexOf(w.currentTarget);
                  k = u.loop ? Wu(k, I + 1) : k.slice(I + 1);
                }
                setTimeout(() => Es(k));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: v != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), ib = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Hu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
Pn(Hu, "getDirectionAwareKey");
function Ku(e, t, n) {
  const r = Hu(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ib[r];
}
Pn(Ku, "getFocusIntent");
function Es(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Pn(Es, "focusFirst");
function Wu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
Pn(Wu, "wrapArray");
var sb = tb, ab = ob, cb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mn = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Vr = {}, ci = 0, Gu = function(e) {
  return e && (e.host || Gu(e.parentNode));
}, lb = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Gu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ub = function(e, t, n, r) {
  var o = lb(t, Array.isArray(e) ? e : [e]);
  Vr[n] || (Vr[n] = /* @__PURE__ */ new WeakMap());
  var i = Vr[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || a.has(u) || (a.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(r), b = h !== null && h !== "false", p = (Mn.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
          Mn.set(f, p), i.set(f, v), s.push(f), p === 1 && b && Gr.set(f, !0), v === 1 && f.setAttribute(n, "true"), b || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), a.clear(), ci++, function() {
    s.forEach(function(u) {
      var f = Mn.get(u) - 1, h = i.get(u) - 1;
      Mn.set(u, f), i.set(u, h), f || (Gr.has(u) || u.removeAttribute(r), Gr.delete(u)), h || u.removeAttribute(n);
    }), ci--, ci || (Mn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Vr = {});
  };
}, Vu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = cb(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ub(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, xt = function() {
  return xt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, xt.apply(this, arguments);
};
function Uu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function db(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var to = "right-scroll-bar-position", no = "width-before-scroll-bar", fb = "with-scroll-bars-hidden", hb = "--removed-body-scroll-bar-size";
function li(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gb(e, t) {
  var n = ce(function() {
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
var pb = typeof window < "u" ? m.useLayoutEffect : m.useEffect, rc = /* @__PURE__ */ new WeakMap();
function mb(e, t) {
  var n = gb(null, function(r) {
    return e.forEach(function(o) {
      return li(o, r);
    });
  });
  return pb(function() {
    var r = rc.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || li(a, null);
      }), i.forEach(function(a) {
        o.has(a) || li(a, s);
      });
    }
    rc.set(n, e);
  }, [e]), n;
}
function vb(e) {
  return e;
}
function bb(e, t) {
  t === void 0 && (t = vb);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var c = function() {
        var d = s;
        s = [], d.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function yb(e) {
  e === void 0 && (e = {});
  var t = bb(null);
  return t.options = xt({ async: !0, ssr: !1 }, e), t;
}
var Yu = function(e) {
  var t = e.sideCar, n = Uu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, xt({}, n));
};
Yu.isSideCarExport = !0;
function wb(e, t) {
  return e.useMedium(t), Yu;
}
var qu = yb(), ui = function() {
}, Lo = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: ui,
    onWheelCapture: ui,
    onTouchMoveCapture: ui
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, h = e.noRelative, b = e.noIsolation, p = e.inert, v = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = Uu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, I = mb([n, t]), P = xt(xt({}, S), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(k, { sideCar: qu, removeScrollBar: l, shards: u, noRelative: h, noIsolation: b, inert: p, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: x }),
    s ? m.cloneElement(m.Children.only(a), xt(xt({}, P), { ref: I })) : m.createElement(w, xt({}, P, { className: c, ref: I }), a)
  );
});
Lo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Lo.classNames = {
  fullWidth: no,
  zeroRight: to
};
var xb = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Cb() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xb();
  return t && e.setAttribute("nonce", t), e;
}
function Sb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Pb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ib = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Cb()) && (Sb(t, n), Pb(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, kb = function() {
  var e = Ib();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Xu = function() {
  var e = kb(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Nb = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, di = function(e) {
  return parseInt(e || "", 10) || 0;
}, Rb = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [di(n), di(r), di(o)];
}, Eb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Nb;
  var t = Rb(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ab = Xu(), Bn = "data-scroll-locked", Db = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(fb, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Bn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(to, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(no, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(to, " .").concat(to, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(no, " .").concat(no, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Bn, `] {
    `).concat(hb, ": ").concat(a, `px;
  }
`);
}, oc = function() {
  var e = parseInt(document.body.getAttribute(Bn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mb = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Bn, (oc() + 1).toString()), function() {
      var e = oc() - 1;
      e <= 0 ? document.body.removeAttribute(Bn) : document.body.setAttribute(Bn, e.toString());
    };
  }, []);
}, Ob = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mb();
  var i = m.useMemo(function() {
    return Eb(o);
  }, [o]);
  return m.createElement(Ab, { styles: Db(i, !t, o, n ? "" : "!important") });
}, ji = !1;
if (typeof window < "u")
  try {
    var Ur = Object.defineProperty({}, "passive", {
      get: function() {
        return ji = !0, !0;
      }
    });
    window.addEventListener("test", Ur, Ur), window.removeEventListener("test", Ur, Ur);
  } catch {
    ji = !1;
  }
var On = ji ? { passive: !1 } : !1, _b = function(e) {
  return e.tagName === "TEXTAREA";
}, Zu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !_b(e) && n[t] === "visible")
  );
}, Tb = function(e) {
  return Zu(e, "overflowY");
}, Fb = function(e) {
  return Zu(e, "overflowX");
}, ic = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ju(e, r);
    if (o) {
      var i = Qu(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, $b = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Lb = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ju = function(e, t) {
  return e === "v" ? Tb(t) : Fb(t);
}, Qu = function(e, t) {
  return e === "v" ? $b(t) : Lb(t);
}, Bb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, zb = function(e, t, n, r, o) {
  var i = Bb(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, d = s > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var h = Qu(e, a), b = h[0], p = h[1], v = h[2], y = p - v - i * b;
    (b || y) && Ju(e, a) && (u += y, f += b);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (l = !0), l;
}, Yr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, sc = function(e) {
  return [e.deltaX, e.deltaY];
}, ac = function(e) {
  return e && "current" in e ? e.current : e;
}, jb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Hb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Kb = 0, _n = [];
function Wb(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(Kb++)[0], i = m.useState(Xu)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = db([e.lockRef.current], (e.shards || []).map(ac), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = m.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !s.current.allowPinchZoom;
    var y = Yr(p), w = n.current, x = "deltaX" in p ? p.deltaX : w[0] - y[0], S = "deltaY" in p ? p.deltaY : w[1] - y[1], k, I = p.target, P = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in p && P === "h" && I.type === "range")
      return !1;
    var C = window.getSelection(), N = C && C.anchorNode, E = N ? N === I || N.contains(I) : !1;
    if (E)
      return !1;
    var D = ic(P, I);
    if (!D)
      return !0;
    if (D ? k = P : (k = P === "v" ? "h" : "v", D = ic(P, I)), !D)
      return !1;
    if (!r.current && "changedTouches" in p && (x || S) && (r.current = k), !k)
      return !0;
    var _ = r.current || k;
    return zb(_, v, p, _ === "h" ? x : S);
  }, []), c = m.useCallback(function(p) {
    var v = p;
    if (!(!_n.length || _n[_n.length - 1] !== i)) {
      var y = "deltaY" in v ? sc(v) : Yr(v), w = t.current.filter(function(k) {
        return k.name === v.type && (k.target === v.target || v.target === k.shadowParent) && jb(k.delta, y);
      })[0];
      if (w && w.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!w) {
        var x = (s.current.shards || []).map(ac).filter(Boolean).filter(function(k) {
          return k.contains(v.target);
        }), S = x.length > 0 ? a(v, x[0]) : !s.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = m.useCallback(function(p, v, y, w) {
    var x = { name: p, delta: v, target: y, should: w, shadowParent: Gb(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), d = m.useCallback(function(p) {
    n.current = Yr(p), r.current = void 0;
  }, []), u = m.useCallback(function(p) {
    l(p.type, sc(p), p.target, a(p, e.lockRef.current));
  }, []), f = m.useCallback(function(p) {
    l(p.type, Yr(p), p.target, a(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return _n.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, On), document.addEventListener("touchmove", c, On), document.addEventListener("touchstart", d, On), function() {
      _n = _n.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", c, On), document.removeEventListener("touchmove", c, On), document.removeEventListener("touchstart", d, On);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: Hb(o) }) : null,
    h ? m.createElement(Ob, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Gb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vb = wb(qu, Wb);
var As = m.forwardRef(function(e, t) {
  return m.createElement(Lo, xt({}, e, { ref: t, sideCar: Vb }));
});
As.classNames = Lo.classNames;
var Ub = Object.defineProperty, ve = (e, t) => Ub(e, "name", { value: t, configurable: !0 }), Hi = ["Enter", " "], Yb = ["ArrowDown", "PageUp", "Home"], ed = ["ArrowUp", "PageDown", "End"], qb = [...Yb, ...ed], Xb = {
  ltr: [...Hi, "ArrowRight"],
  rtl: [...Hi, "ArrowLeft"]
}, Zb = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Bo = "Menu", [hr, Jb, Qb] = /* @__PURE__ */ No(Bo), [In, td] = /* @__PURE__ */ gt(Bo, [
  Qb,
  ku,
  ju
]), zo = ku(), nd = ju(), [rd, cn] = In(Bo), [ey, wr] = In(Bo), ty = /* @__PURE__ */ ve((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = zo(t), [c, l] = m.useState(null), d = m.useRef(!1), u = St(i), f = Ro(o);
  return m.useEffect(() => {
    const h = /* @__PURE__ */ ve(() => {
      d.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, "handleKeyDown"), b = /* @__PURE__ */ ve(() => d.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), m.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ ve(() => u(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, u]), /* @__PURE__ */ g(Au, { ...a, children: /* @__PURE__ */ g(
    rd,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ g(
        ey,
        {
          scope: t,
          onClose: m.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: r
        }
      )
    }
  ) });
}, "Menu"), od = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeMenu: r, ...o } = t, i = zo(r);
    return /* @__PURE__ */ g(Hv, { ...i, ...o, ref: n });
  }, "MenuAnchor")
), id = "MenuPortal", [ny, sd] = In(id, {
  forceMount: void 0
}), ry = /* @__PURE__ */ ve((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = cn(id, t);
  return /* @__PURE__ */ g(ny, { scope: t, forceMount: n, children: /* @__PURE__ */ g(Un, { present: n || i.open, children: /* @__PURE__ */ g(Du, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), dt = "MenuContent", [oy, Ds] = In(dt), iy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const r = sd(dt, t.__scopeMenu), { forceMount: o = r.forceMount, ...i } = t, s = cn(dt, t.__scopeMenu), a = wr(dt, t.__scopeMenu);
    return /* @__PURE__ */ g(hr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ g(Un, { present: o || s.open, children: /* @__PURE__ */ g(hr.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ g(sy, { ...i, ref: n }) : /* @__PURE__ */ g(ay, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), sy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const r = cn(dt, t.__scopeMenu), o = m.useRef(null), i = be(n, o);
    return m.useEffect(() => {
      const s = o.current;
      if (s) return Vu(s);
    }, []), /* @__PURE__ */ g(
      Ms,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: oe(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), ay = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ve(function(t, n) {
  const r = cn(dt, t.__scopeMenu);
  return /* @__PURE__ */ g(
    Ms,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), cy = /* @__PURE__ */ Jt("MenuContent.ScrollLock"), Ms = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const {
      __scopeMenu: r,
      loop: o = !1,
      trapFocus: i,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: u,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: b,
      disableOutsideScroll: p,
      ...v
    } = t, y = cn(dt, r), w = wr(dt, r), x = zo(r), S = nd(r), k = Jb(r), [I, P] = m.useState(null), C = m.useRef(null), N = be(n, C, y.onContentChange), E = m.useRef(0), D = m.useRef(""), _ = m.useRef(0), B = m.useRef(null), T = m.useRef("right"), W = m.useRef(0), F = p ? As : m.Fragment, $ = p ? { as: cy, allowPinchZoom: !0 } : void 0, R = /* @__PURE__ */ ve((A) => {
      const H = D.current + A, K = k().filter((U) => !U.disabled), j = document.activeElement, V = K.find((U) => U.ref.current === j)?.textValue, Y = K.map((U) => U.textValue), z = hd(Y, H, V), G = K.find((U) => U.textValue === z)?.ref.current;
      (/* @__PURE__ */ ve((function U(J) {
        D.current = J, window.clearTimeout(E.current), J !== "" && (E.current = window.setTimeout(() => U(""), 1e3));
      }), "updateSearch"))(H), G && setTimeout(() => G.focus());
    }, "handleTypeaheadSearch");
    m.useEffect(() => () => window.clearTimeout(E.current), []), Eo();
    const M = m.useCallback((A) => T.current === B.current?.side && pd(A, B.current?.area), []);
    return /* @__PURE__ */ g(
      oy,
      {
        scope: r,
        searchRef: D,
        onItemEnter: m.useCallback(
          (A) => {
            M(A) && A.preventDefault();
          },
          [M]
        ),
        onItemLeave: m.useCallback(
          (A) => {
            M(A) || (C.current?.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: m.useCallback(
          (A) => {
            M(A) && A.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: m.useCallback((A) => {
          B.current = A;
        }, []),
        children: /* @__PURE__ */ g(F, { ...$, children: /* @__PURE__ */ g(
          su,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: oe(s, (A) => {
              A.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ g(
              nu,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: b,
                children: /* @__PURE__ */ g(
                  sb,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: oe(l, (A) => {
                      w.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ g(
                      Kv,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": _s(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...x,
                        ...v,
                        ref: N,
                        style: { outline: "none", ...v.style },
                        onKeyDown: oe(v.onKeyDown, (A) => {
                          const K = A.target.closest("[data-radix-menu-content]") === A.currentTarget, j = A.ctrlKey || A.altKey || A.metaKey, V = A.key.length === 1;
                          K && (A.key === "Tab" && A.preventDefault(), !j && V && R(A.key));
                          const Y = C.current;
                          if (A.target !== Y || !qb.includes(A.key)) return;
                          A.preventDefault();
                          const G = k().filter((U) => !U.disabled).map((U) => U.ref.current);
                          ed.includes(A.key) && G.reverse(), dd(G);
                        }),
                        onBlur: oe(t.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout(E.current), D.current = "");
                        }),
                        onPointerMove: oe(
                          t.onPointerMove,
                          Hn((A) => {
                            const H = A.target, K = W.current !== A.clientX;
                            if (A.currentTarget.contains(H) && K) {
                              const j = A.clientX > W.current ? "right" : "left";
                              T.current = j, W.current = A.clientX;
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
  }, "MenuContentImpl")
), ly = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ g(xe.div, { ...o, ref: n });
  }, "MenuLabel")
), Ki = "MenuItem", cc = "menu.itemSelect", Os = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...i } = t, s = m.useRef(null), a = wr(Ki, t.__scopeMenu), c = Ds(Ki, t.__scopeMenu), l = be(n, s), d = m.useRef(!1), u = /* @__PURE__ */ ve(() => {
      const f = s.current;
      if (!r && f) {
        const h = new CustomEvent(cc, { bubbles: !0, cancelable: !0 });
        f.addEventListener(cc, (b) => o?.(b), { once: !0 }), vs(f, h), h.defaultPrevented ? d.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ g(
      ad,
      {
        ...i,
        ref: l,
        disabled: r,
        onClick: oe(t.onClick, u),
        onPointerDown: (f) => {
          t.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: oe(t.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: oe(t.onKeyDown, (f) => {
          r || f.target !== f.currentTarget || c.searchRef.current !== "" && f.key === " " || Hi.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), ad = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: i, ...s } = t, a = Ds(Ki, r), c = nd(r), l = m.useRef(null), d = be(n, l), [u, f] = m.useState(!1), [h, b] = m.useState("");
    return m.useEffect(() => {
      const p = l.current;
      p && b((p.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ g(
      hr.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: i ?? h,
        children: /* @__PURE__ */ g(ab, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ g(
          xe.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: oe(
              t.onPointerMove,
              Hn((p) => {
                o ? a.onItemLeave(p) : (a.onItemEnter(p), p.defaultPrevented || p.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: oe(
              t.onPointerLeave,
              Hn((p) => a.onItemLeave(p))
            ),
            onFocus: oe(t.onFocus, () => f(!0)),
            onBlur: oe(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), uy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ve(function(t, n) {
    const { checked: r = !1, onCheckedChange: o, ...i } = t;
    return /* @__PURE__ */ g(cd, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ g(
      Os,
      {
        role: "menuitemcheckbox",
        "aria-checked": vo(r) ? "mixed" : r,
        ...i,
        ref: n,
        "data-state": Ts(r),
        onSelect: oe(
          i.onSelect,
          () => o?.(vo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), dy = "MenuRadioGroup", [CP, fy] = In(
  dy,
  { value: void 0, onValueChange: /* @__PURE__ */ ve(() => {
  }, "onValueChange") }
), hy = "MenuRadioItem", gy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { value: r, ...o } = t, i = fy(hy, t.__scopeMenu), s = r === i.value;
    return /* @__PURE__ */ g(cd, { scope: t.__scopeMenu, checked: s, children: /* @__PURE__ */ g(
      Os,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": Ts(s),
        onSelect: oe(
          o.onSelect,
          () => i.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), py = "MenuItemIndicator", [cd, SP] = In(
  py,
  { checked: !1 }
), my = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ g(
      xe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), ld = "MenuSub", [vy, ud] = In(ld), by = /* @__PURE__ */ ve((e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = cn(ld, t), s = zo(t), [a, c] = m.useState(null), [l, d] = m.useState(null), u = St(o);
  return m.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ g(Au, { ...s, children: /* @__PURE__ */ g(
    rd,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ g(
        vy,
        {
          scope: t,
          contentId: At(),
          triggerId: At(),
          trigger: a,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
}, "MenuSub"), qr = "MenuSubTrigger", yy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const r = cn(qr, t.__scopeMenu), o = wr(qr, t.__scopeMenu), i = ud(qr, t.__scopeMenu), s = Ds(qr, t.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: t.__scopeMenu }, u = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    m.useEffect(() => u, [u]), m.useEffect(() => {
      const h = c.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [c, l]);
    const f = be(n, i.onTriggerChange);
    return /* @__PURE__ */ g(od, { asChild: !0, ...d, children: /* @__PURE__ */ g(
      ad,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": r.open ? i.contentId : void 0,
        "data-state": _s(r.open),
        ...t,
        ref: f,
        onClick: (h) => {
          t.onClick?.(h), !(t.disabled || h.defaultPrevented) && (h.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: oe(
          t.onPointerMove,
          Hn((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !t.disabled && !r.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: oe(
          t.onPointerLeave,
          Hn((h) => {
            u();
            const b = r.content?.getBoundingClientRect();
            if (b) {
              const p = r.content?.dataset.side, v = p === "right", y = v ? -5 : 5, w = b[v ? "left" : "right"], x = b[v ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + y, y: h.clientY },
                  { x: w, y: b.top },
                  { x, y: b.top },
                  { x, y: b.bottom },
                  { x: w, y: b.bottom }
                ],
                side: p
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(h), h.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: oe(t.onKeyDown, (h) => {
          t.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || Xb[o.dir].includes(h.key) && (r.onOpenChange(!0), r.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), wy = "MenuSubContent", xy = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ ve(function(t, n) {
    const r = sd(dt, t.__scopeMenu), { forceMount: o = r.forceMount, align: i = "start", ...s } = t, a = cn(dt, t.__scopeMenu), c = wr(dt, t.__scopeMenu), l = ud(wy, t.__scopeMenu), d = m.useRef(null), u = be(n, d);
    return /* @__PURE__ */ g(hr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ g(Un, { present: o || a.open, children: /* @__PURE__ */ g(hr.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ g(
      Ms,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...s,
        ref: u,
        align: i,
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          c.isUsingKeyboardRef.current && d.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: oe(t.onFocusOutside, (f) => {
          f.target !== l.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: oe(t.onEscapeKeyDown, (f) => {
          c.onClose(), f.preventDefault();
        }),
        onKeyDown: oe(t.onKeyDown, (f) => {
          const h = f.currentTarget.contains(f.target), b = Zb[c.dir].includes(f.key);
          h && b && (a.onOpenChange(!1), l.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function _s(e) {
  return e ? "open" : "closed";
}
ve(_s, "getOpenState");
function vo(e) {
  return e === "indeterminate";
}
ve(vo, "isIndeterminate");
function Ts(e) {
  return vo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
ve(Ts, "getCheckedState");
function dd(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
ve(dd, "focusFirst");
function fd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
ve(fd, "wrapArray");
function hd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = fd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
ve(hd, "getNextMatch");
function gd(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], c = t[s], l = a.x, d = a.y, u = c.x, f = c.y;
    d > r != f > r && n < (u - l) * (r - d) / (f - d) + l && (o = !o);
  }
  return o;
}
ve(gd, "isPointInPolygon");
function pd(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gd(n, t);
}
ve(pd, "isPointerInGraceArea");
function Hn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
ve(Hn, "whenMouse");
var Cy = ty, Sy = od, Py = ry, Iy = iy, ky = ly, Ny = Os, Ry = uy, Ey = gy, Ay = my, Dy = by, My = yy, Oy = xy, _y = Object.defineProperty, ot = (e, t) => _y(e, "name", { value: t, configurable: !0 }), Fs = "DropdownMenu", [Ty, PP] = /* @__PURE__ */ gt(
  Fs,
  [td]
), it = td(), [Fy, md] = Ty(Fs), $y = /* @__PURE__ */ ot((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, c = it(t), l = m.useRef(null), [d, u] = Sn({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Fs
  });
  return /* @__PURE__ */ g(
    Fy,
    {
      scope: t,
      triggerId: At(),
      triggerRef: l,
      contentId: At(),
      open: d,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((f) => !f), [u]),
      modal: a,
      children: /* @__PURE__ */ g(Cy, { ...c, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), Ly = "DropdownMenuTrigger", By = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...i } = t, s = md(Ly, r), a = it(r), c = be(n, s.triggerRef);
    return /* @__PURE__ */ g(Sy, { asChild: !0, ...a, children: /* @__PURE__ */ g(
      xe.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...i,
        ref: c,
        onPointerDown: oe(t.onPointerDown, (l) => {
          !o && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: oe(t.onKeyDown, (l) => {
          o || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), zy = /* @__PURE__ */ ot((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = it(t);
  return /* @__PURE__ */ g(Py, { ...r, ...n });
}, "DropdownMenuPortal"), jy = "DropdownMenuContent", Hy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = md(jy, r), s = it(r), a = m.useRef(!1);
    return /* @__PURE__ */ g(
      Iy,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: oe(t.onCloseAutoFocus, (c) => {
          a.current || i.triggerRef.current?.focus(), a.current = !1, c.preventDefault();
        }),
        onInteractOutside: oe(t.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || d;
          (!i.modal || u) && (a.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), Ky = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
    return /* @__PURE__ */ g(ky, { ...i, ...o, ref: n });
  }, "DropdownMenuLabel")
), Wy = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
    return /* @__PURE__ */ g(Ny, { ...i, ...o, ref: n });
  }, "DropdownMenuItem")
), Gy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ g(Ry, { ...i, ...o, ref: n });
}, "DropdownMenuCheckboxItem")), Vy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ g(Ey, { ...i, ...o, ref: n });
}, "DropdownMenuRadioItem")), Uy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ g(Ay, { ...i, ...o, ref: n });
}, "DropdownMenuSeparator")), Yy = /* @__PURE__ */ ot((e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = it(t), [a, c] = Sn({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ g(Dy, { ...s, open: a, onOpenChange: c, children: n });
}, "DropdownMenuSub"), qy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ g(My, { ...i, ...o, ref: n });
}, "DropdownMenuSubTrigger")), Xy = /* @__PURE__ */ m.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ g(
    Oy,
    {
      ...i,
      ...o,
      ref: n,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "DropdownMenuSubContent")), Zy = $y, Jy = By, Qy = zy, vd = Hy, bd = Ky, yd = Wy, wd = Gy, xd = Vy, Cd = Uy, ew = Yy, Sd = qy, Pd = Xy;
const xr = Zy, Cr = Jy, lc = ew, Id = m.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ g(
  Sd,
  {
    ref: o,
    className: fe(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
Id.displayName = Sd.displayName;
const Wi = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Pd,
  {
    ref: n,
    className: fe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Wi.displayName = Pd.displayName;
const Yn = m.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = hs();
  return /* @__PURE__ */ g(Qy, { container: o || void 0, children: /* @__PURE__ */ g(
    vd,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: fe(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
Yn.displayName = vd.displayName;
const qe = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  yd,
  {
    ref: r,
    className: fe(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
qe.displayName = yd.displayName;
const tw = m.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ g(
  wd,
  {
    ref: o,
    className: fe(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
tw.displayName = wd.displayName;
const nw = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g(
  xd,
  {
    ref: r,
    className: fe(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
nw.displayName = xd.displayName;
const kd = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ g(
  bd,
  {
    ref: r,
    className: fe(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
kd.displayName = bd.displayName;
const yn = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Cd,
  {
    ref: n,
    className: fe("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
yn.displayName = Cd.displayName;
const rw = (e, t) => {
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
    const o = n.replace(/<svg\b([^>]*)>/i, (i, s) => {
      let a = s;
      return /\bwidth=/.test(a) ? a = a.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'width="100%"') : a += ' width="100%"', /\bheight=/.test(a) ? a = a.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'height="100%"') : a += ' height="100%"', /\bpreserveAspectRatio=/.test(a) ? a = a.replace(
        /\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i,
        'preserveAspectRatio="xMidYMid slice"'
      ) : a += ' preserveAspectRatio="xMidYMid slice"', `<svg${a}>`;
    });
    return /* @__PURE__ */ g(
      "div",
      {
        className: fe("pointer-events-none absolute inset-0 z-10", t),
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: o }
      }
    );
  }
  return /* @__PURE__ */ g(
    "img",
    {
      src: e,
      alt: "",
      "aria-hidden": "true",
      className: fe(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, Ls = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ g("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ L(xr, { modal: !1, children: [
    /* @__PURE__ */ g(Cr, { asChild: !0, children: /* @__PURE__ */ g(
      ze,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ g(Ml, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ g(Yn, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ L(
      qe,
      {
        onSelect: (i) => rw(i, o),
        disabled: o.disabled,
        children: [
          o.icon && /* @__PURE__ */ g("span", { className: "mr-2 inline-flex", children: o.icon }),
          /* @__PURE__ */ g("span", { children: o.label })
        ]
      },
      o.id
    )) })
  ] }) });
  return n ? /* @__PURE__ */ g("div", { className: "pointer-events-none absolute z-20", style: n, children: r }) : r;
}, Bs = (e = []) => {
  const t = ps();
  return e.length > 0 && !t;
}, ow = ({
  className: e,
  style: t,
  overlaySvg: n,
  overlayClassName: r,
  options: o = [],
  dialog: i,
  dialogProps: s,
  bleedProps: a,
  children: c
}) => {
  const l = Se($t), d = Bs(o), u = El(
    {
      ...a,
      pageWidth: a?.pageWidth ?? l?.page?.width ?? 210,
      bleed: a?.bleed ?? l?.page?.bleed ?? 0
    },
    "bleed"
  ), f = i ? Kn({ dialog: i }, l) : {};
  return m.useMemo(() => {
    if (!s) return f;
    const h = { ...f, ...s };
    return (f.className || s.className) && (h.className = `${f.className || ""} ${s.className || ""}`.trim()), Object.keys(f).forEach((b) => {
      const p = f[b], v = s[b];
      b.startsWith("on") && typeof p == "function" && typeof v == "function" && (h[b] = (y) => {
        p(y), v(y);
      });
    }), h;
  }, [f, s]), /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ L(ds, { ...a, dialog: i, children: [
      $s(n, r),
      c
    ] }),
    Ls(o, d, u)
  ] });
};
function zs(e) {
  const t = Se($t), n = ls({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: s,
    imageClassName: a,
    side: c,
    backgroundColor: l,
    width: d,
    height: u,
    left: f = 0,
    right: h = 0,
    top: b = 0,
    bottom: p = 0
  } = e, v = (T) => `${T}mm`, y = () => us({ width: d, left: f, right: h }, o, r, 2), w = () => {
    let T = u;
    return u ? !b && !p && (T += r) : (T = i, b || (T += r), p || (T += r), (b || p) && (T -= (b ?? 0) + (p ?? 0))), T;
  }, x = y(), S = w(), k = (T) => T !== void 0 ? v(T) : void 0, I = (T) => Object.fromEntries(
    Object.entries(T).filter(([W, F]) => F !== void 0)
  ), P = f > 0 ? f + r : 0, C = b > 0 ? b + r : 0, N = p > 0 ? p + r : 0, E = -1 * o + P, D = b > 0 && p > 0, _ = I({
    backgroundColor: l,
    width: k(x),
    ...D ? { height: k(S) } : {},
    left: k(P),
    top: k(C),
    bottom: k(N)
  }), B = I({
    width: k(x),
    ...D ? { height: k(S) } : {},
    left: k(E),
    top: k(C),
    bottom: k(N)
  });
  return /* @__PURE__ */ g("div", { className: "uhuu-image-container", style: c == "end" ? B : _, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ L("div", { className: "uhuu-image-inner", ...Kn(e, t), children: [
    /* @__PURE__ */ g(
      "img",
      {
        className: fe("cover-image object-cover object-center", a),
        src: s || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const iw = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const s = Se($t), a = Bs(n), c = El(
    {
      ...o,
      pageWidth: o?.pageWidth ?? s?.page?.width ?? 210,
      bleed: o?.bleed ?? s?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ L(zs, { ...o, dialog: r, children: [
      $s(e, t),
      i
    ] }),
    Ls(n, a, c)
  ] });
}, sw = ({
  src: e,
  alt: t = "",
  className: n,
  imageClassName: r,
  style: o,
  imageStyle: i,
  overlaySvg: s,
  overlayClassName: a,
  options: c = [],
  dialog: l,
  dialogProps: d,
  placeholder: u,
  children: f,
  imageProps: h,
  renderImage: b,
  onError: p
}) => {
  const v = Se($t), y = l ? Kn({ dialog: l }, v) : {}, w = Bs(c), x = ls({
    onError: (_) => {
      p?.(_), h?.onError?.(_);
    }
  }), S = m.useMemo(() => {
    if (!d) return y;
    const _ = { ...y, ...d };
    return (y.className || d.className) && (_.className = fe(y.className, d.className)), Object.keys(y).forEach((B) => {
      const T = y[B], W = d[B];
      B.startsWith("on") && typeof T == "function" && typeof W == "function" && (_[B] = (F) => {
        T(F), W(F);
      });
    }), _;
  }, [y, d]), k = h?.src ?? e, I = !k && !u && !b, P = () => {
    const _ = h?.className, B = h?.style, T = k, W = h?.alt ?? t, F = {
      ...h,
      src: T,
      alt: W,
      className: fe("h-full w-full object-cover", r, _),
      style: { ...i, ...B }
    };
    return b ? b(F) : T ? /* @__PURE__ */ g("img", { ...F, onError: x }) : u ?? null;
  }, C = S["data-uhuu"], N = m.Children.toArray(f).some((_) => m.isValidElement(_) ? _.type === zs || _.type === ds : !1);
  N && delete S["data-uhuu"];
  const E = m.Children.map(f, (_) => m.isValidElement(_) ? m.cloneElement(_, { dataUhuu: C }) : _);
  return /* @__PURE__ */ L("div", { className: fe(N ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ L(
      "div",
      {
        ...S,
        className: fe(
          "relative h-full w-full",
          I && "uhuu-image-empty",
          S.className
        ),
        children: [
          P(),
          E,
          $s(s, a)
        ]
      }
    ),
    Ls(c, w)
  ] });
}, IP = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = ee(() => {
    const { annotation: F, dialog: $, overlaySvg: R, options: M, src: A } = e;
    if (!F && !$)
      return {
        computedOverlaySvg: R,
        computedOptions: M,
        computedDirectDialog: void 0
      };
    const H = F?.value || {}, K = R ?? H.annotationSvg ?? "", j = [];
    if (F) {
      if ($) {
        const ie = {
          ...$
          // Spread everything (path, type, ratio, etc.)
        };
        if ($.type === "satellite") {
          const { path: we, type: se, ...Re } = $;
          ie.config = {
            ...Re,
            path: "image"
          }, ie.path = we, ie.type = se;
        }
        j.push({
          id: "edit",
          label: "Edit image",
          dialog: ie
        });
      }
      const z = Array.isArray(H.annotations) ? H.annotations : [], { path: G, value: U, annotations: J, ...Z } = F, re = {
        path: F.path,
        type: "annotation",
        image: A,
        annotations: z,
        ...Z
        // Spread extra config (visualGallery, etc.)
      };
      j.push({
        id: "annotate",
        label: "Annotate",
        dialog: re
      });
    }
    const V = M ? [...j, ...M] : j;
    let Y;
    if ($) {
      const z = {
        ...$
        // Spread everything (path, type, ratio, etc.)
      };
      if ($.type === "satellite") {
        const { path: G, type: U, ...J } = $;
        z.config = {
          ...J,
          path: "image"
        }, z.path = G, z.type = U;
      }
      Y = z;
    }
    return {
      computedOverlaySvg: K,
      computedOptions: V.length > 0 ? V : void 0,
      computedDirectDialog: Y
    };
  }, [e.annotation, e.dialog, e.overlaySvg, e.options, e.src]), o = ee(() => e.mode ? e.mode : e.side !== void 0 ? "spread" : e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto", [e.mode, e.side, e.width, e.height, e.left, e.right, e.top, e.bottom]), i = o === "auto" || // Auto mode always uses ImageWithOptions
  n && n.length > 0 || t || r || // Need wrapper for click-to-edit
  e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, {
    mode: s,
    side: a,
    src: c,
    alt: l,
    className: d,
    imageClassName: u,
    style: f,
    imageStyle: h,
    backgroundColor: b,
    width: p,
    height: v,
    left: y,
    right: w,
    top: x,
    bottom: S,
    pageWidth: k,
    pageHeight: I,
    bleed: P,
    overlayClassName: C,
    dialogProps: N,
    placeholder: E,
    children: D,
    imageProps: _,
    renderImage: B,
    onError: T
  } = e, W = {
    src: c,
    backgroundColor: b,
    width: p,
    height: v,
    left: y,
    right: w,
    top: x,
    bottom: S,
    pageWidth: k,
    pageHeight: I,
    bleed: P,
    imageClassName: u,
    onError: T
  };
  if (o === "auto")
    return /* @__PURE__ */ g(
      sw,
      {
        src: c,
        alt: l,
        className: d,
        style: f,
        imageClassName: u,
        imageStyle: h,
        overlaySvg: t,
        overlayClassName: C,
        options: n,
        dialog: r,
        dialogProps: N,
        placeholder: E,
        children: D,
        imageProps: _,
        renderImage: B,
        onError: T
      }
    );
  if (o === "spread") {
    const F = { ...W, side: a, imageClassName: u };
    return i && (t || n?.length || r) ? /* @__PURE__ */ g(
      iw,
      {
        className: d,
        style: f,
        overlaySvg: t,
        overlayClassName: C,
        options: n,
        dialog: r,
        dialogProps: N,
        spreadProps: F,
        children: D
      }
    ) : /* @__PURE__ */ g(zs, { ...F });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ g(
    ow,
    {
      className: d,
      style: f,
      overlaySvg: t,
      overlayClassName: C,
      options: n,
      dialog: r,
      dialogProps: N,
      bleedProps: W,
      children: D
    }
  ) : /* @__PURE__ */ g(ds, { ...W });
}, te = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Nd = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ne = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, Rd = "https://render.uhuu.io/media/thumb", aw = "2000x2000", cw = "4000x4000", uc = "image/svg+xml";
function lw(e) {
  return typeof e == "string" ? { url: ne(e) } : te(e) ? {
    url: ne(e.contentUrl) ?? ne(e.url) ?? ne(e.src),
    type: ne(e.encodingFormat) ?? ne(e.mimeType)
  } : { url: void 0 };
}
function uw() {
  try {
    return !!globalThis.$uhuu?.is?.printProduct?.();
  } catch {
    return !1;
  }
}
function dc(e) {
  try {
    return new URL(e);
  } catch {
    return;
  }
}
function dw(e, t, n) {
  if (n && n.toLowerCase().startsWith(uc)) return !0;
  if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
  if (/\.svgz?$/i.test(t.pathname)) return !0;
  for (const r of t.searchParams.values()) {
    const o = r.toLowerCase();
    if (o === "svg" || o === uc) return !0;
  }
  return !1;
}
const fw = (e) => !!e && `${e.origin}${e.pathname}` === Rd && e.searchParams.has("url");
function kP(e, t = {}) {
  const n = te(t) ? t : {}, { url: r, type: o } = lw(e);
  if (!r) return;
  if (/^(?:data|blob):/i.test(r)) return r;
  let i = r, s = dc(r), a = ne(n.format);
  if (fw(s) && (a || (a = ne(s.searchParams.get("format"))), i = ne(s.searchParams.get("url")) ?? r, s = dc(i)), !/^https?:\/\//i.test(i) || dw(i, s, o)) return i;
  const l = (typeof n.print == "boolean" ? n.print : uw()) ? ne(n.printSize) ?? cw : ne(n.size) ?? aw, d = a ? `&format=${encodeURIComponent(a)}` : "";
  return `${Rd}?blank=true&size=${encodeURIComponent(l)}${d}&url=${encodeURIComponent(i)}`;
}
const hw = [
  ["primary", ["primary", "colorPrimary", "s:primary"]],
  ["primary-foreground", ["primaryForeground", "s:primaryForeground"]],
  ["secondary", ["secondary", "colorSecondary", "s:secondary"]],
  ["secondary-foreground", ["secondaryForeground", "s:secondaryForeground"]],
  ["secondary-soft", ["accent", "colorAccent", "s:accent", "s:secondary"]],
  ["secondary-muted", ["mutedForeground", "colorMuted", "s:mutedForeground", "s:secondary"]],
  ["accent", ["accent", "colorAccent", "s:accent"]],
  ["accent-foreground", ["accentForeground", "s:accentForeground"]],
  ["text", ["foreground", "colorForeground", "s:foreground"]],
  ["muted", ["muted", "s:muted"]],
  ["muted-foreground", ["mutedForeground", "colorMuted", "s:mutedForeground", "s:foreground"]],
  ["divider", ["border", "colorBorder", "s:border"]],
  ["surface", ["card", "colorSurface", "s:card", "s:background"]],
  ["surface-foreground", ["cardForeground", "s:cardForeground", "s:foreground"]],
  ["placeholder", ["input", "s:input", "s:border"]],
  ["highlight", ["colorHighlight", "highlight", "accent", "colorAccent", "s:accent", "s:primary"]],
  ["hero-from", ["heroFrom", "hero:from"]],
  ["hero-via", ["heroVia", "hero:via"]],
  ["hero-to", ["heroTo", "hero:to"]],
  ["hero-glow", ["heroGlow", "hero:glow"]]
], Ed = [
  ["sans", { token: "fontFamilySans", primitive: "fontSans", keys: ["sans", "body"], generic: "sans-serif" }],
  ["serif", { token: "fontFamilySerif", primitive: "fontSerif", keys: ["serif"], generic: "serif" }],
  ["display", { token: "fontFamilyDisplay", primitive: "fontDisplay", keys: ["display", "heading"], generic: "sans-serif" }],
  ["mono", { token: "fontFamilyMono", primitive: "fontMono", keys: ["mono"], generic: "monospace" }]
], Ad = [
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
], gw = 2, pw = [...Ad.map(([e]) => e), "chart-1", "chart-2", "chart-3", "chart-4", "chart-5"], mw = new RegExp(`^--(?:color-)?(?:${pw.join("|")})$`), vw = /^--color-kit-[A-Za-z0-9_-]+$/, bw = /^--font-(?:kit-)?(?:sans|serif|display|mono)$/;
function Dd(e) {
  const t = te(e) ? e.runtime : void 0;
  return te(t) && t.version === gw && te(t.light) ? t : void 0;
}
const yw = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, ww = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, Xr = "(?:[+-]?(?:\\d+\\.?\\d*|\\.\\d+)(?:%|deg)?|none)", xw = new RegExp(`^ok(?:lch|lab)\\(\\s*${Xr}\\s+${Xr}\\s+${Xr}(?:\\s*\\/\\s*${Xr})?\\s*\\)$`, "i"), Cw = /^[a-z]+$/i, Sw = /* @__PURE__ */ new Set(["inherit", "initial", "unset", "revert", "none"]), Xt = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", Pw = new RegExp(
  `^(${Xt})(deg|turn|rad|grad)?\\s+(${Xt})%\\s+(${Xt})%(?:\\s*\\/\\s*(${Xt})(%)?)?$`,
  "i"
), Iw = new RegExp(
  `^hsla?\\(\\s*(${Xt})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${Xt})%\\s*(?:,\\s*|\\s+)(${Xt})%\\s*(?:(?:,|\\/)\\s*(${Xt})(%)?\\s*)?\\)$`,
  "i"
), fi = /[;{}<>\\\n\r]/, kw = /^[A-Za-z0-9_-]+$/, hi = (e, t, n) => Math.min(n, Math.max(t, e)), gi = (e) => e.toString(16).padStart(2, "0"), Nw = { deg: 1, turn: 360, rad: 180 / Math.PI, grad: 0.9 };
function Rw(e, t, n, r, o, i) {
  const s = (Number(e) * Nw[(t || "deg").toLowerCase()] % 360 + 360) % 360, a = hi(Number(n) / 100, 0, 1), c = hi(Number(r) / 100, 0, 1), l = a * Math.min(c, 1 - c), d = (p) => {
    const v = (p + s / 30) % 12;
    return Math.round((c - l * Math.max(-1, Math.min(v - 3, 9 - v, 1))) * 255);
  }, [u, f, h] = [d(0), d(8), d(4)], b = o === void 0 ? 1 : hi(Number(o) / (i ? 100 : 1), 0, 1);
  return b >= 1 ? `#${gi(u)}${gi(f)}${gi(h)}` : `rgba(${u}, ${f}, ${h}, ${Number(b.toFixed(3))})`;
}
function rr(e) {
  const t = ne(e);
  if (!t) return;
  if (yw.test(t) || ww.test(t) || xw.test(t)) return t;
  if (Cw.test(t)) return Sw.has(t.toLowerCase()) ? void 0 : t;
  const n = Pw.exec(t) ?? Iw.exec(t);
  if (n) return Rw(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function Ew(e, t) {
  if (t.startsWith("s:")) {
    const n = e.light?.semantic;
    return te(n) ? n[t.slice(2)] : void 0;
  }
  if (t.startsWith("hero:")) {
    const n = e.light?.aliases?.hero;
    return te(n) ? n[t.slice(5)] : void 0;
  }
  return e[t];
}
function Aw(e, t) {
  for (const n of t) {
    const r = rr(Ew(e, n));
    if (r !== void 0) return r;
  }
}
const pi = (e) => {
  if (!(typeof e != "string" || !e.includes(",")))
    return ne(e.slice(e.indexOf(",") + 1));
};
function fc(e, t) {
  if (e.includes(",")) return e;
  const n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
  return t ? `${n}, ${t}` : n;
}
function Dw(e, t) {
  if (!(typeof t != "string" || !t)) {
    if (Array.isArray(e)) return e.find((n) => te(n) && n.id === t);
    if (te(e))
      return Nd(e, t) && te(e[t]) ? e[t] : Object.values(e).find((n) => te(n) && n.id === t);
  }
}
function Mw(e, t) {
  const n = Ed.find(([l]) => l === t)?.[1];
  if (!n || !te(e)) return;
  const r = te(e.tokens) ? e.tokens : {}, o = ne(r[n.token]), i = ne(r.primitives?.typography?.[n.primitive]);
  let s = Dw(e.fonts, e.assignments?.[`font.${t}`]);
  !ne(s?.family) && te(e.fonts) && (s = n.keys.map((l) => Nd(e.fonts, l) ? e.fonts[l] : void 0).find((l) => te(l) && ne(l.family)));
  const a = ne(s?.family);
  if (a)
    return fc(
      a,
      ne(s.fallback) ?? pi(i) ?? pi(o) ?? n.generic
    );
  const c = o ?? i;
  return c ? fc(c, pi(i) ?? n.generic) : void 0;
}
function Ow(e, t = {}) {
  const n = {};
  if (te(t?.defaults))
    for (const [a, c] of Object.entries(t.defaults)) {
      if (!a.startsWith("--")) continue;
      const l = a.startsWith("--color-") ? rr(c) : ne(c);
      l !== void 0 && !fi.test(l) && (n[a] = l);
    }
  if (!te(e)) return n;
  const r = Dd(e);
  if (r) {
    for (const [a, c] of Object.entries(r.light)) {
      const l = mw.test(a) || vw.test(a) ? rr(c) : bw.test(a) ? ne(c) : void 0;
      l !== void 0 && !fi.test(l) && (n[a] = l);
    }
    return n;
  }
  const o = te(e.tokens) ? e.tokens : {}, i = te(o.light?.semantic) ? o.light.semantic : {};
  for (const [a, c] of Ad) {
    const l = rr(i[c]);
    l !== void 0 && (n[`--${a}`] = l, n[`--color-${a}`] = l);
  }
  for (const [a, c] of hw) {
    const l = Aw(o, c);
    l !== void 0 && (n[`--color-kit-${a}`] = l);
  }
  const s = o.light?.aliases;
  if (te(s)) {
    const a = (c, l) => {
      const d = kw.test(c) ? rr(l) : void 0;
      d !== void 0 && (n[`--color-kit-${c}`] = d);
    };
    for (const [c, l] of Object.entries(s))
      if (!(c === "hero" || !te(l)))
        for (const [d, u] of Object.entries(l))
          a(c === "template" ? d : `${c}-${d}`, u);
    for (const [c, l] of Object.entries(s))
      te(l) || a(c, l);
  }
  for (const [a] of Ed) {
    const c = Mw(e, a);
    c === void 0 || fi.test(c) || (n[`--font-${a}`] = c, n[`--font-kit-${a}`] = c);
  }
  return n;
}
const js = /^https?:\/\//i, _w = "https://uhuu-brandkit.s3.eu-west-1.amazonaws.com/live";
function jo(e, t) {
  const n = te(e) ? ne(e.baseUrl) : void 0;
  if (n) return n.replace(/\/+$/, "");
  const r = ne(t);
  if (!(!r || !js.test(r)))
    try {
      return new URL(".", r).toString().replace(/\/+$/, "");
    } catch {
      return;
    }
}
function tn(e, t) {
  const n = ne(e);
  if (!(!n || /\s/.test(n))) {
    if (js.test(n) || /^data:/i.test(n)) return n;
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
const hc = /^kit-[\w-]+$/i;
function NP(e, t = {}) {
  if (!te(e)) return null;
  const n = (ne(t.publicBaseUrl) ?? _w).replace(/\/+$/, ""), r = ne(String(e.brandKitTeamId ?? t.teamId ?? "")), o = (c) => r ? `${n}/teams/${encodeURIComponent(r)}/kits/${encodeURIComponent(c)}/brandkit.json` : null, i = ne(e.brandKitUrl);
  if (i) return hc.test(i) ? o(i) : tn(i) ?? null;
  const s = ne(e.brandKitId);
  if (s) return hc.test(s) ? o(s) : null;
  const a = te(e.brandKit?.storage) ? ne(e.brandKit.storage.publicUrl) : void 0;
  return a && js.test(a) ? a : null;
}
async function Tw(e, t = {}) {
  const n = t.fetch ?? globalThis.fetch;
  if (typeof n != "function") throw new Error("loadBrandKit needs fetch");
  const r = await n(e, { signal: t.signal, headers: { accept: "application/json" } });
  if (!r.ok) throw new Error(`Brand kit ${e} answered ${r.status}`);
  const o = await r.json();
  if (!te(o)) throw new Error(`Brand kit ${e} is not a JSON object`);
  return o;
}
const Fw = { primary: "primary", logo: "primary", lockup: "primary", mark: "mark", icon: "mark", symbol: "mark", wordmark: "wordmark" }, $w = { primary: "logo", mark: "icon" }, Lw = { primary: "logo.primary", mark: "logo.icon" }, gc = (e) => te(e) ? ne(e.svg) ?? ne(e.png) : void 0;
function Md(e, t = {}) {
  if (!te(e)) return null;
  const n = Fw[String(t.kind ?? "primary").toLowerCase()] ?? "primary", r = t.background === "dark" ? "dark" : "light", o = jo(e, t.sourceUrl), i = ne(e.name), s = Bw(e, n, r, o, i) ?? (n === "wordmark" ? null : zw(e, n, r, o, i));
  return s || n !== "wordmark" ? s : Md(e, { ...t, kind: "primary" });
}
function Bw(e, t, n, r, o) {
  const s = (Array.isArray(e.logoSystem?.variants) ? e.logoSystem.variants.filter(te) : []).filter((l) => l.kind === t && gc(l.files)), a = s.find((l) => l.background === n) ?? s.find((l) => l.background === "any") ?? s[0];
  if (!a) return null;
  const c = tn(gc(a.files), r);
  return c ? {
    src: c,
    alt: ne(a.name) ?? o,
    kind: t,
    background: a.background,
    ...te(a.minWidth) ? { minWidth: a.minWidth } : {},
    ...te(a.clearSpace) ? { clearSpace: a.clearSpace } : {}
  } : null;
}
function zw(e, t, n, r, o) {
  const i = te(e.logos) ? e.logos : {}, s = i[$w[t]];
  if (te(s)) {
    const l = n === "dark" ? "light" : "dark";
    for (const d of [n, l]) {
      const u = s[d], f = tn(te(u) ? u.src ?? u.url : u, r);
      if (f) return { src: f, alt: ne(s.alt) ?? o, kind: t, background: d };
    }
  }
  const a = ne(e.assignments?.[Lw[t]]), c = a && i[a] || e.assets?.[t === "mark" ? "icon" : "primary"];
  if (te(c)) {
    const l = tn(c.src ?? c.url, r);
    if (l) return { src: l, alt: ne(c.alt) ?? ne(c.name) ?? o, kind: t };
  }
  return null;
}
const jw = { photos: "photo", icons: "icon", graphics: "graphic", backgrounds: "background", templates: "template" };
function Hw(e, t, n = {}) {
  if (!te(e) || !te(e.collections)) return null;
  const r = e.collections, o = jw[t] ?? t, i = ne(e.assignments?.[`media.${t}`]), s = (i && te(r[i]) ? i : void 0) ?? Object.keys(r).find((p) => te(r[p]) && r[p].type === o);
  if (!s) return null;
  const a = r[s], c = jo(e, n.sourceUrl), l = te(a.versions) ? a.versions : {}, d = [ne(n.versionId), ne(a.defaultVersionId)].find((p) => p && te(l[p])), u = d ? l[d] : void 0, f = te(a.schema?.keys) ? a.schema.keys : {};
  let h = [];
  u && te(u.items) ? h = [...Object.keys(f).filter((v) => v in u.items), ...Object.keys(u.items).filter((v) => !(v in f))].map((v) => [v, u.items[v]]) : Array.isArray(a.items) && (h = a.items.map((p, v) => [String(te(p) && ne(p.key) ? p.key : v), p]));
  const b = h.flatMap(([p, v]) => {
    if (!te(v)) return [];
    const y = tn(v.src ?? v.url, c);
    if (!y) return [];
    const w = ne(v.label) ?? ne(f[p]?.label) ?? ne(v.name);
    return [{ ...v, key: p, src: y, ...w ? { label: w } : {} }];
  });
  return {
    id: s,
    name: ne(a.name),
    type: ne(a.type),
    versionId: d ?? void 0,
    items: b
  };
}
const pc = (e) => typeof e == "string" ? e.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_") : "";
function Od(e, t) {
  const n = Array.isArray(e?.config?.env) ? e.config.env : [];
  for (const r of (Array.isArray(t) ? t : [t]).map(pc)) {
    const o = n.find((i) => te(i) && pc(i.key) === r && ne(i.value));
    if (o) return o.value.trim();
  }
}
function Kw(e, t) {
  const n = t === "macro" ? "macro" : "micro", r = e?.config?.maps?.styles?.[n], o = te(r) ? ne(r.url) : void 0;
  if (o) return { url: o, ...ne(r.name) ? { name: ne(r.name) } : {}, source: "config.maps" };
  const i = n.toUpperCase(), s = Od(e, [`MAP_${i}_STYLE_URL`, `MAP_STYLE_${i}_URL`, `${i}_MAP_STYLE_URL`, "MAP_STYLE_URL"]);
  return s ? { url: s, source: "config.env" } : null;
}
const Gi = /["\\\n\r\f<>]/, Ww = (e) => (Array.isArray(e) ? e : te(e) ? Object.values(e) : []).filter(te);
function Gw(e) {
  return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : ne(e.cssUrl) ? "css" : void 0;
}
const mc = (e) => ne(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function Vw(e) {
  const n = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((r) => r?.weight)).map(Number).filter((r) => Number.isInteger(r) && r >= 1 && r <= 1e3);
  return [...new Set(n)].sort((r, o) => r - o);
}
function Uw(e, t) {
  const n = encodeURIComponent(e).replace(/%20/g, "+"), r = Vw(t), o = Array.isArray(t.faces) ? t.faces : [], i = Array.isArray(t.styles) ? t.styles : o.map((a) => a?.style);
  let s = r.length > 0 ? `:wght@${r.join(";")}` : "";
  if (i.includes("italic")) {
    const c = (Array.isArray(t.styles) ? (i.includes("normal") ? [0, 1] : [1]).flatMap((l) => (r.length ? r : [400]).map((d) => [l, d])) : o.filter((l) => l?.style === "normal" || l?.style === "italic").map((l) => [l.style === "italic" ? 1 : 0, Number(l.weight)]).filter(([, l]) => Number.isInteger(l) && l >= 1 && l <= 1e3)).sort(([l, d], [u, f]) => l - u || d - f).map((l) => l.join(","));
    s = `:ital,wght@${[...new Set(c)].join(";")}`;
  }
  return `https://fonts.googleapis.com/css2?family=${n}${s}&display=swap`;
}
function Yw(e) {
  return Array.isArray(e.files) && e.files.length > 0 ? e.files.filter(te).map((t) => ({ ...t })) : Array.isArray(e.faces) ? e.faces.filter(te).flatMap((t) => Array.isArray(t.files) ? t.files.filter(te).map((n) => ({
    ...n,
    weight: n.weight ?? t.weight,
    style: n.style ?? t.style
  })) : Object.entries(te(t.files) ? t.files : {}).map(([n, r]) => ({
    src: r,
    format: n,
    weight: t.weight,
    style: t.style
  }))) : [];
}
function qw(e) {
  const t = String(e.format ?? e.src ?? "").toLowerCase();
  return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function Xw(e) {
  const t = String(e ?? "").trim();
  return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function vc(e, t, n) {
  const r = tn(t.src, n);
  if (!(!r || Gi.test(r)))
    return [
      "@font-face {",
      `  font-family: "${e}";`,
      `  src: url("${r}") format("${qw(t)}");`,
      `  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
      `  font-weight: ${Xw(t.weight)};`,
      "  font-display: swap;",
      "}"
    ].join(`
`);
}
function Zw(e, t = {}) {
  if (!te(e)) return { fontFaceCss: "", stylesheetUrls: [] };
  const n = jo(e, t?.sourceUrl), r = [], o = [], i = (a) => {
    const c = tn(a, n);
    c && !/^data:/i.test(c) && !r.includes(c) && r.push(c);
  }, s = Dd(e);
  if (s) {
    for (const a of Array.isArray(s.fontStylesheets) ? s.fontStylesheets : []) i(a);
    for (const a of Array.isArray(s.fontFaces) ? s.fontFaces : []) {
      if (!te(a)) continue;
      const c = ne(a.family), l = c ? mc(c) : void 0;
      if (!l || Gi.test(l)) continue;
      const d = vc(l, a, n);
      d && !o.includes(d) && o.push(d);
    }
    return { fontFaceCss: o.join(`
`), stylesheetUrls: r };
  }
  for (const a of Ww(e.fonts)) {
    const c = ne(a.family), l = c ? mc(c) : void 0;
    if (!l || Gi.test(l)) continue;
    const d = Gw(a);
    if (d) {
      const u = ne(a.cssUrl) ? a.cssUrl : d === "google" ? Uw(l, a) : void 0;
      i(u);
    }
    for (const u of Array.isArray(a.faces) ? a.faces : []) i(u?.cssUrl);
    if (!d)
      for (const u of Yw(a)) {
        const f = vc(l, u, n);
        f && !o.includes(f) && o.push(f);
      }
  }
  return { fontFaceCss: o.join(`
`), stylesheetUrls: r };
}
const _d = Ft(null);
function Jw(e) {
  try {
    return typeof location > "u" ? e : new URL(e, location.href).toString();
  } catch {
    return e;
  }
}
function RP({
  brandKit: e,
  src: t,
  defaults: n,
  sourceUrl: r,
  onLoad: o,
  onError: i,
  className: s,
  style: a,
  children: c
}) {
  const l = typeof t == "string" && t.trim() !== "" ? t.trim() : void 0, [d, u] = ce(null);
  le(() => {
    if (!l) return;
    const w = new AbortController();
    return Tw(l, { signal: w.signal }).then(
      (x) => {
        w.signal.aborted || (u({ src: l, brandKit: x }), o?.(x));
      },
      (x) => {
        w.signal.aborted || (u({ src: l, brandKit: null }), i ? i(x) : console.error(x));
      }
    ), () => w.abort();
  }, [l]);
  const f = l && d?.src === l ? d : null, h = f?.brandKit ?? e ?? null, b = f?.brandKit && l ? Jw(l) : r, p = l ? f ? f.brandKit ? "ready" : "error" : "loading" : "idle", v = ee(() => {
    const w = jo(h, b);
    return {
      brandKit: h,
      cssVars: Ow(h, { defaults: n }),
      sourceUrl: b,
      status: p,
      logo: (x = {}) => Md(h, { ...x, sourceUrl: b }),
      collection: (x, S = {}) => Hw(h, x, { ...S, sourceUrl: b }),
      mapStyle: (x) => Kw(h, x),
      env: (x) => Od(h, x),
      resolveUrl: (x) => tn(x, w)
    };
  }, [h, b, n, p]), y = ee(() => Zw(h, { sourceUrl: b }), [h, b]);
  return /* @__PURE__ */ L(_d.Provider, { value: v, children: [
    y.stylesheetUrls.map((w) => /* @__PURE__ */ g("link", { rel: "stylesheet", href: w, "data-uhuu-brand-kit-font": "" }, w)),
    y.fontFaceCss ? /* @__PURE__ */ g("style", { "data-uhuu-brand-kit-font": "", children: y.fontFaceCss }) : null,
    /* @__PURE__ */ g(
      "div",
      {
        "data-uhuu-brand-kit": typeof h?.id == "string" ? h.id : "",
        "data-uhuu-brand-kit-status": p,
        className: s,
        style: { display: "contents", ...v.cssVars, ...a },
        children: c
      }
    )
  ] });
}
function EP() {
  return Se(_d);
}
const kn = "uhuu_page_editor";
function We(e) {
  return e.kind === "group";
}
function Qw(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (We(r))
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
function e0(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (We(r)) {
      const o = r.pages.map((i) => ({
        ...i,
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
function Ot(e) {
  return Qw(e).length;
}
function t0(e) {
  return e.map((t) => {
    const n = t.strictPosition;
    if (We(t)) {
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
function n0(e, t) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((o) => {
    n.set(o.id, o);
  });
  const r = [];
  for (const o of e) {
    const i = n.get(o.id);
    i && r.push(i);
  }
  return r;
}
function Hs(e) {
  return e.map((t) => {
    if ("kind" in t && t.kind)
      return t;
    if (t.pages && Array.isArray(t.pages))
      return {
        kind: "group",
        ...t,
        pages: (t.pages ?? []).map((i) => {
          const { kind: s, ...a } = i || {};
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
function Td(e, t = kn) {
  const n = Hs(e);
  return {
    key: t,
    items: n,
    totalPages: Ot(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function r0(e, t = kn) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = Hs(n.items);
  return {
    key: t,
    items: r,
    totalPages: Ot(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function o0(e, t, n = kn) {
  const r = Td(t, n);
  return { ...e ?? {}, [n]: r };
}
function Fd() {
  return Math.random().toString(36).slice(2, 11);
}
function $d(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? Fd() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function Ld(e, t, n) {
  const r = n?.repeatable ? Fd() : e;
  return {
    kind: "group",
    id: r,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable ?? !1,
    maxInstances: n?.maxInstances ?? null,
    pages: t.map((o, i) => {
      const s = typeof o == "string" ? o : o.key, a = typeof o == "string" ? void 0 : o.dataKey, c = typeof o == "string" ? void 0 : o.hasFlow;
      return {
        id: `${r}__${a ?? s}__${i}`,
        componentKey: s,
        templateId: s,
        ...a ? { dataKey: a } : {},
        ...c ? { hasFlow: c } : {}
      };
    }),
    ...n
  };
}
function bc(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function Vi(e, t, n) {
  for (const r of t) {
    const o = bc(r.start, n), i = bc(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function Bd(e, t, n = 2) {
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
function i0(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = Ot(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : Bd(r, n, o);
  if (i.length === 0)
    return [];
  const s = [];
  for (const a of e)
    if (We(a)) {
      const c = a.pages.filter((l) => l.pageNum && Vi(l.pageNum, i, n));
      c.length > 0 && s.push({
        ...a,
        pages: c
      });
    } else
      a.pageNum && Vi(a.pageNum, i, n) && s.push(a);
  return s;
}
function s0(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : Bd(r, t, o);
  return i.length === 0 ? !1 : Vi(e, i, t);
}
function zd(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function a0(e, t) {
  return t && We(t) ? t.id : e?.id ?? null;
}
function jd(e, t, n) {
  const r = a0(t, n);
  return r ? {
    instanceId: r,
    integration: zd(e, r)
  } : { instanceId: null, integration: void 0 };
}
function Hd(e, t, n) {
  return jd(e, t, n).integration;
}
function yc(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function c0(e) {
  if (!e)
    return { instanceId: null, fieldPath: e, isIntegrationPath: !1 };
  const t = "integrations.";
  if (e.startsWith(t)) {
    const n = e.slice(t.length), r = n.indexOf(".");
    if (r > 0) {
      const o = n.slice(0, r), i = n.slice(r + 1);
      return { instanceId: o, fieldPath: i, isIntegrationPath: !0 };
    } else
      return { instanceId: n, fieldPath: "", isIntegrationPath: !0 };
  }
  return { instanceId: null, fieldPath: e, isIntegrationPath: !1 };
}
function l0(e, t, n) {
  if (!t) return n;
  const r = t.split("."), o = { ...e };
  let i = o;
  for (let a = 0; a < r.length - 1; a++) {
    const c = r[a];
    !(c in i) || typeof i[c] != "object" || i[c] === null ? i[c] = {} : i[c] = { ...i[c] }, i = i[c];
  }
  const s = r[r.length - 1];
  return i[s] = n, o;
}
function u0(e, t, n) {
  const r = c0(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, s = zd(e, o) || {}, a = l0(
    s,
    i,
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
function bo(e, t) {
  if (!e || !t) return;
  const n = typeof t == "string" ? t : t?.id, r = typeof t == "string" ? void 0 : t?.templateId ?? t?.componentKey, o = typeof t == "string" ? void 0 : t?.componentKey, i = Array.from(
    new Set(
      [n, r, o].filter(Boolean)
    )
  );
  for (const s of i)
    if (e?.pages?.[s] !== void 0) return e.pages[s];
  for (const s of i)
    if (e?.groups?.[s] !== void 0) return e.groups[s];
  for (const s of i)
    if (e[s] !== void 0) return e[s];
}
const Sr = m.createContext(null);
function d0(e = kn) {
  return [e];
}
function f0(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function Kd({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = kn
}) {
  const [o, i] = m.useState(e ?? {}), s = m.useRef(null), a = m.useRef(!1), c = m.useRef(null), l = m.useRef(0), d = m.useRef(!0), u = m.useCallback((C) => {
    try {
      return JSON.stringify(C);
    } catch {
      return String(C);
    }
  }, []), f = m.useMemo(() => d0(r), [r]), h = m.useCallback((C, N) => {
    if (!C) return null;
    const E = { ...C };
    return N.forEach((D) => {
      delete E[D];
    }), E;
  }, []);
  m.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (s.current = e, i(e));
      return;
    }
    if (a.current) {
      a.current = !1;
      const E = c.current !== null ? u(h(c.current, f)) : null, D = u(h(e, f));
      if (E !== null && E === D) {
        s.current = e;
        return;
      }
    }
    if (e === s.current)
      return;
    if (Date.now() - l.current < 500 && c.current !== null) {
      const E = h(e, f), D = h(c.current, f), _ = E ? u(E) : null, B = D ? u(D) : null;
      if (_ && _ === B) {
        c.current = null, s.current = e;
        return;
      }
    }
    s.current = e, i((E) => e ? f0(E, e, f) : E);
  }, [e, f, u, h]);
  const b = m.useCallback(
    (C) => {
      if (t?.(C), typeof window > "u") return;
      const N = window.$uhuu;
      N?.emitPayload && N.emitPayload(C);
    },
    [t]
  ), p = m.useCallback(
    (C) => {
      a.current = !0, i((N) => {
        const E = typeof C == "function" ? C(N) : C;
        let D = E;
        return E && typeof E == "object" && Object.keys(E).filter(
          (B) => B.startsWith("integrations.") || B === "integrations"
        ).length > 0 && E.integrations && (D = E), c.current = D, l.current = Date.now(), queueMicrotask(() => b(D)), D;
      });
    },
    [b]
  ), v = m.useCallback(
    (C, N, E) => {
      p((D) => ({
        ...D ?? {},
        pages: {
          ...D?.pages ?? {},
          [C]: {
            ...D?.pages?.[C] ?? {},
            [N]: E
          }
        }
      }));
    },
    [p]
  ), y = m.useCallback(
    (C, N) => {
      p((E) => {
        const D = E?.integrations ?? {}, _ = D[C], B = typeof N == "function" ? N(_) : N;
        return {
          ...E ?? {},
          integrations: {
            ...D,
            [C]: B
          }
        };
      });
    },
    [p]
  ), w = m.useCallback(
    (C, N, E) => {
      y(C, (D) => ({
        ...D ?? {},
        [N]: E
      }));
    },
    [y]
  ), x = m.useCallback(
    (C) => {
      p((N) => {
        if (!N?.integrations || !N.integrations[C])
          return N;
        const { [C]: E, ...D } = N.integrations;
        return {
          ...N,
          integrations: Object.keys(D).length > 0 ? D : void 0
        };
      });
    },
    [p]
  ), S = m.useCallback(
    (C, N) => {
      p((E) => u0(E, C, N));
    },
    [p]
  ), k = m.useCallback(
    (C, N) => {
      const E = N ?? r;
      p((D) => o0(D, C, E));
    },
    [p, r]
  ), I = m.useCallback(
    (C) => bo(o, C),
    [o]
  ), P = m.useMemo(
    () => ({
      payload: o,
      setPayload: p,
      setPageOptionValue: v,
      setIntegrationPayload: y,
      setIntegrationPayloadValue: w,
      removeIntegrationPayload: x,
      updateIntegrationByDialogPath: S,
      mergePageEditorState: k,
      getPagePayload: I
    }),
    [
      o,
      p,
      v,
      y,
      w,
      x,
      S,
      k,
      I
    ]
  );
  return /* @__PURE__ */ g(Sr.Provider, { value: P, children: n });
}
function h0(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function g0(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function p0(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const s = t?.pages?.[i.id]?.[r];
      return s === void 0 ? h0(e) : e.type === "toggle" ? !!s : s;
    },
    onChange: (i, s) => {
      n(i, r, g0(e, s));
    }
  };
}
function wc(e) {
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
function m0(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function v0(e, t) {
  if (e === "two_pages")
    return m0(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function b0({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
  const r = n - Math.max(t, 0), o = [e, r].filter((i) => i > 0);
  return o.length ? Math.min(...o) : 0;
}
function y0({
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
function w0({
  mode: e,
  contentWidth: t,
  contentHeight: n,
  availableWidth: r,
  availableHeight: o,
  minZoom: i,
  maxZoom: s
}) {
  if (e === "none" || t <= 0 || n <= 0 || r <= 0 || o <= 0)
    return null;
  const a = r / t * 100, c = o / n * 100, l = e === "width" ? a : e === "height" ? c : Math.min(a, c);
  return Math.min(Math.max(l, i), s);
}
function x0(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function C0(e, t, n, r) {
  if (e.width <= 0 || e.height <= 0) return { deltaLeft: 0, deltaTop: 0 };
  const o = n - e.left, i = r - e.top, s = t.left + o * (t.width / e.width), a = t.top + i * (t.height / e.height);
  return {
    deltaLeft: s - n,
    deltaTop: a - r
  };
}
function mi(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function S0(e, t, n) {
  let r = -1, o = 1 / 0;
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    if (s.width <= 0 || s.height <= 0) continue;
    if (t >= s.left && t <= s.left + s.width && n >= s.top && n <= s.top + s.height) return i;
    const c = t - (s.left + s.width / 2), l = n - (s.top + s.height / 2), d = c * c + l * l;
    d < o && (o = d, r = i);
  }
  return r;
}
function xc(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
const P0 = 24, I0 = 64, k0 = 1e3, Cc = {
  // Auto margins centre the stack while it fits and collapse to 0 once it overflows, which is
  // what keeps both edges reachable. Padding sits on the content box so `scrollWidth` counts
  // the right-hand gutter.
  width: "max-content",
  margin: "auto",
  padding: `0 ${P0}px ${I0}px`,
  overflowAnchor: "none"
};
function N0(e) {
  let t = e, n = null, r = null;
  for (; t && t !== document.documentElement; ) {
    const i = window.getComputedStyle(t);
    if (!n && xc(i.overflowX) && (n = t), !r && xc(i.overflowY) && (r = t), n && r) return { x: n, y: r };
    t = t.parentElement;
  }
  const o = document.scrollingElement;
  return { x: n ?? o, y: r ?? o };
}
function R0(e) {
  const t = Math.max(e.getBoundingClientRect().top, 0);
  let n = 0, r = e.parentElement;
  for (; r && r !== document.documentElement; ) {
    const o = window.getComputedStyle(r);
    o.display !== "contents" && (n += (Number.parseFloat(o.paddingBottom) || 0) + (Number.parseFloat(o.borderBottomWidth) || 0) + Math.max(Number.parseFloat(o.marginBottom) || 0, 0)), r = r.parentElement;
  }
  return t + n;
}
function E0(e) {
  const t = e.querySelector("[data-section-content]"), n = t?.closest('[class*="group/section"]');
  if (!t || !n) return 0;
  const r = t.getBoundingClientRect().height;
  return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
const yo = Ft({ zoom: 100, scaleValue: 1, hideUI: !1 });
function A0({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = Se(yo), o = de(null);
  return le(() => {
    if (!o.current) return;
    const i = () => {
      const c = o.current?.querySelectorAll("[data-section-content]");
      if (!c?.length) return;
      const l = Array.from(c).reduce((d, u) => {
        const f = Number.parseInt(u.getAttribute("data-natural-width") || "0");
        return d + f;
      }, 0);
      if (l > 0) {
        const d = l * r;
        o.current?.style.setProperty("--uhuu-group-pair-width", `${d}px`);
      }
    };
    i();
    const s = new ResizeObserver(i);
    return o.current.querySelectorAll("[data-section-content]").forEach((c) => s.observe(c)), () => s.disconnect();
  }, [e, r]), /* @__PURE__ */ g(
    "div",
    {
      ref: o,
      className: `two-pages-pair two-pages-pair--${t}`,
      "data-page-item-id": n,
      children: e
    }
  );
}
function D0(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function M0(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const i = n.querySelector("[data-section-content]");
    return i ? [i] : [];
  })();
  if (!r.length) return null;
  const o = r.map(D0).filter((i) => i !== null);
  return v0(t, o);
}
function Zr({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: s } = Se(yo), a = de(null), [c, l] = ce(0), [d, u] = ce(0);
  le(() => {
    if (a.current) {
      const y = () => {
        const x = a.current;
        if (x) {
          const S = x.style.transform;
          x.style.transform = "scale(1)";
          const k = x.scrollHeight, I = x.scrollWidth;
          x.style.transform = S, l(k), u(I);
        }
      };
      y();
      const w = new ResizeObserver(y);
      return w.observe(a.current), () => {
        w.disconnect();
      };
    }
  }, [e]);
  const f = c * i, h = Math.max(d * i, 150), b = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: p, origin: v } = b[o];
  return s ? /* @__PURE__ */ g("div", { className: n, children: e }) : /* @__PURE__ */ L(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${h}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ g("div", { children: r ?? /* @__PURE__ */ g("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
          t,
          " Controls"
        ] }) }) }),
        /* @__PURE__ */ g(
          "div",
          {
            className: "pt-1",
            style: {
              height: f > 0 ? `${f + 32}px` : "auto",
              minHeight: "100px"
            },
            children: /* @__PURE__ */ g("div", { className: `flex items-start ${p}`, children: /* @__PURE__ */ g(
              "div",
              {
                ref: a,
                "data-section-content": !0,
                "data-natural-width": d,
                "data-natural-height": c,
                style: {
                  transform: `scale(${i})`,
                  transformOrigin: v
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
function O0({
  children: e,
  className: t = "",
  defaultZoom: n = 100,
  minZoom: r = 25,
  maxZoom: o = 200,
  onAddPage: i,
  menuItems: s,
  hideUI: a,
  preview: c = "single_page",
  defaultZoomMode: l = "manual",
  scrollMode: d = "pane"
}) {
  const u = ps(), f = a ?? u, [h, b] = ce(n), [p, v] = ce(() => wc(l)), [y, w] = ce(
    () => wc(l) !== "none"
  ), [x, S] = ce(0), k = de(null), I = de(null), P = de(null), C = de(null), N = de(h);
  le(() => {
    N.current = h;
  }, [h]);
  const E = pe(() => d === "pane" && I.current ? { x: I.current, y: I.current } : N0(k.current), [d]), D = pe((R, M, A) => {
    const H = Math.min(Math.max(R, r), o), K = C.current;
    if (!K) {
      b(H), v("none");
      return;
    }
    const j = E(), V = Array.from(K.querySelectorAll("[data-section-content]")), Y = S0(
      V.map((Z) => mi(Z.getBoundingClientRect())),
      M,
      A
    ), z = Y >= 0 ? V[Y] : K, G = mi(z.getBoundingClientRect()), U = x0(G, M, A);
    yh(() => {
      b(H), v("none");
    });
    const J = () => {
      const Z = mi(z.getBoundingClientRect()), { deltaLeft: re, deltaTop: ie } = C0(G, Z, U.clientX, U.clientY);
      re !== 0 && j.x && (j.x.scrollLeft += re), ie !== 0 && j.y && (j.y.scrollTop += ie);
    };
    J(), window.requestAnimationFrame(J);
  }, [o, r, E]), _ = pe(() => {
    const M = (d === "pane" ? I.current : k.current)?.getBoundingClientRect();
    return M ? { clientX: M.left + M.width / 2, clientY: M.top + M.height / 2 } : { clientX: 0, clientY: 0 };
  }, [d]), B = pe(() => {
    const R = C.current;
    if (p === "none" || !R) return;
    const M = M0(R, c);
    if (!M) return;
    const A = d === "pane" ? I.current : k.current;
    if (!A) return;
    const H = A.getBoundingClientRect(), K = A.ownerDocument.defaultView ?? window, j = K.visualViewport?.height ?? A.ownerDocument.documentElement.clientHeight ?? K.innerHeight, V = A.clientWidth || H.width, Y = d === "pane" ? b0({
      paneClientHeight: A.clientHeight || H.height,
      paneTop: H.top,
      viewportHeight: j
    }) : j - Math.max(H.top, 0), z = P.current ? window.getComputedStyle(P.current) : null, G = z ? Number.parseFloat(z.paddingLeft) + Number.parseFloat(z.paddingRight) : 0, U = z ? Number.parseFloat(z.paddingTop) + Number.parseFloat(z.paddingBottom) : 0, { availableWidth: J, availableHeight: Z } = y0({
      paneWidth: V,
      paneHeight: Y,
      paddingX: G,
      paddingY: U,
      chromeHeight: E0(R)
    }), re = w0({
      mode: p,
      contentWidth: M.width,
      contentHeight: M.height,
      availableWidth: J,
      availableHeight: Z,
      minZoom: r,
      maxZoom: o
    });
    re !== null && (b((ie) => Math.abs(ie - re) < 0.01 ? ie : re), w(!1));
  }, [p, o, r, c, d]), T = (R) => {
    v(R);
  };
  le(() => {
    if (!y) return;
    if (p === "none") {
      w(!1);
      return;
    }
    const R = window.setTimeout(() => w(!1), k0);
    return () => window.clearTimeout(R);
  }, [y, p]);
  const W = () => {
    const R = _();
    D(h + 25, R.clientX, R.clientY);
  }, F = () => {
    const R = _();
    D(h - 25, R.clientX, R.clientY);
  };
  le(() => {
    if (p === "none" || !k.current || !C.current) return;
    let R = 0;
    const M = () => {
      window.cancelAnimationFrame(R), R = window.requestAnimationFrame(B);
    }, A = new ResizeObserver(M);
    A.observe(k.current), I.current && A.observe(I.current), A.observe(C.current);
    const H = () => {
      C.current?.querySelectorAll("[data-section-content]").forEach((j) => {
        A.observe(j);
      });
    };
    H();
    const K = new MutationObserver(() => {
      H(), M();
    });
    return K.observe(C.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), M(), () => {
      window.cancelAnimationFrame(R), A.disconnect(), K.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [p, B]), le(() => {
    if (f || d !== "pane") return;
    const R = k.current;
    if (!R) return;
    const M = () => {
      const H = R0(R);
      S((K) => Math.abs(K - H) < 0.5 ? K : H);
    };
    M();
    const A = new ResizeObserver(M);
    return A.observe(R), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), () => {
      A.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [f, d]), le(() => {
    if (f) return;
    let R = null, M = null, A = null, H = { clientX: 0, clientY: 0 }, K = null, j = !1;
    const V = () => {
      R = null;
      const G = A;
      A = null, G !== null && D(G, H.clientX, H.clientY);
    }, Y = (G) => {
      if (!G.ctrlKey && !G.metaKey) return;
      G.preventDefault();
      const U = 16, J = G.deltaMode === 1 ? G.deltaY * U : G.deltaMode === 2 ? G.deltaY * U * 32 : G.deltaY, Z = A ?? N.current, re = Math.min(Math.max(Z * Math.pow(1.003, -J), r), o);
      H = { clientX: G.clientX, clientY: G.clientY }, !(re === Z && A === null) && (A = re, R === null && (R = window.requestAnimationFrame(V)));
    }, z = () => {
      if (M = null, !j) {
        if (K = d === "pane" ? I.current : k.current, !K) {
          M = window.requestAnimationFrame(z);
          return;
        }
        K.addEventListener("wheel", Y, { passive: !1 });
      }
    };
    return z(), () => {
      j = !0, R !== null && window.cancelAnimationFrame(R), M !== null && window.cancelAnimationFrame(M), K?.removeEventListener("wheel", Y);
    };
  }, [D, f, o, r, d]);
  const $ = h / 100;
  return f ? /* @__PURE__ */ g(yo.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ g("div", { className: t, children: e }) }) : /* @__PURE__ */ g(yo.Provider, { value: { zoom: h, scaleValue: $, hideUI: !1 }, children: /* @__PURE__ */ L("div", { ref: k, className: `flex flex-col flex-1 min-h-0 ${t}`, children: [
    /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      s,
      /* @__PURE__ */ g("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ L(xr, { modal: !1, children: [
        /* @__PURE__ */ g(Cr, { asChild: !0, children: /* @__PURE__ */ L(ze, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(h),
          "%",
          /* @__PURE__ */ g(Dl, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ L(Yn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("width"),
              className: `cursor-pointer flex items-center ${p === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ g(Dp, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ g("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("height"),
              className: `cursor-pointer flex items-center ${p === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ g(Op, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ g("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("both"),
              className: `cursor-pointer flex items-center ${p === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ g(wp, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ g("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ g(yn, { className: "my-1.5" }),
          /* @__PURE__ */ L("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (R) => R.stopPropagation(), children: [
            /* @__PURE__ */ g(
              ze,
              {
                variant: "ghost",
                size: "sm",
                onClick: (R) => {
                  R.stopPropagation(), F();
                },
                disabled: h <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ g(Lp, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ L("div", { className: "relative", children: [
              /* @__PURE__ */ g(
                "input",
                {
                  type: "number",
                  value: Math.round(h),
                  onChange: (R) => {
                    const M = Number.parseInt(R.target.value);
                    if (!isNaN(M)) {
                      const A = _();
                      D(M, A.clientX, A.clientY);
                    }
                  },
                  onFocus: (R) => R.target.select(),
                  className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  min: r,
                  max: o
                }
              ),
              /* @__PURE__ */ g("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ g(
              ze,
              {
                variant: "ghost",
                size: "sm",
                onClick: (R) => {
                  R.stopPropagation(), W();
                },
                disabled: h >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ g(Fp, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g(
      "div",
      {
        ref: I,
        className: d === "pane" ? "uhuu-zoom-pane" : void 0,
        style: d === "pane" ? {
          height: `calc(100dvh - ${x}px)`,
          maxHeight: "100%",
          overflow: "auto",
          overscrollBehavior: "contain"
        } : void 0,
        children: /* @__PURE__ */ g(
          "div",
          {
            ref: P,
            className: "uhuu-zoom-pane-content",
            style: y ? { ...Cc, visibility: "hidden" } : Cc,
            children: /* @__PURE__ */ g("div", { ref: C, className: c === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e })
          }
        )
      }
    )
  ] }) });
}
var _0 = Object.defineProperty, Ze = (e, t) => _0(e, "name", { value: t, configurable: !0 }), Ks = "Dialog", [Wd, Gd] = /* @__PURE__ */ gt(Ks), [T0, mt] = Wd(Ks), Vd = /* @__PURE__ */ Ze((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = m.useRef(null), c = m.useRef(null), [l, d] = Sn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Ks
  }), [u, f] = m.useState(0), [h, b] = m.useState(0);
  return /* @__PURE__ */ g(
    T0,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: At(),
      titleId: At(),
      descriptionId: At(),
      titlePresent: u > 0,
      descriptionPresent: h > 0,
      setTitleCount: f,
      setDescriptionCount: b,
      open: l,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), F0 = "DialogTrigger", $0 = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(F0, r), s = be(n, i.triggerRef);
    return /* @__PURE__ */ g(
      xe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": Ho(i.open),
        ...o,
        ref: s,
        onClick: oe(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Ud = "DialogPortal", [L0, Yd] = Wd(Ud, {
  forceMount: void 0
}), qd = /* @__PURE__ */ Ze((e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = mt(Ud, t);
  return /* @__PURE__ */ g(L0, { scope: t, forceMount: n, children: m.Children.map(r, (s) => /* @__PURE__ */ g(Un, { present: n || i.open, children: /* @__PURE__ */ g(Du, { asChild: !0, container: o, children: s }) })) });
}, "DialogPortal"), Ui = "DialogOverlay", Ws = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const r = Yd(Ui, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = mt(Ui, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ g(Un, { present: o || s.open, children: /* @__PURE__ */ g(z0, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), B0 = /* @__PURE__ */ Jt("DialogOverlay.RemoveScroll"), z0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(Ui, r), s = ru(), a = be(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ g(As, { as: B0, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ g(
        xe.div,
        {
          "data-state": Ho(i.open),
          ...o,
          ref: a,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), gr = "DialogContent", Gs = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const r = Yd(gr, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = mt(gr, t.__scopeDialog);
    return /* @__PURE__ */ g(Un, { present: o || s.open, children: s.modal ? /* @__PURE__ */ g(j0, { ...i, ref: n }) : /* @__PURE__ */ g(H0, { ...i, ref: n }) });
  }, "DialogContent")
), j0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const r = mt(gr, t.__scopeDialog), o = m.useRef(null), i = be(n, r.contentRef, o);
    return m.useEffect(() => {
      const s = o.current;
      if (s) return Vu(s);
    }, []), /* @__PURE__ */ g(
      Xd,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: oe(t.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: oe(t.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || c) && s.preventDefault();
        }),
        onFocusOutside: oe(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), H0 = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const r = mt(gr, t.__scopeDialog), o = m.useRef(!1), i = m.useRef(!1);
    return /* @__PURE__ */ g(
      Xd,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          t.onCloseAutoFocus?.(s), s.defaultPrevented || (o.current || r.triggerRef.current?.focus(), s.preventDefault()), o.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          t.onInteractOutside?.(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const a = s.target;
          r.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), Xd = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = t, c = mt(gr, r);
    return Eo(), /* @__PURE__ */ g(Be, { children: /* @__PURE__ */ g(
      su,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ g(
          nu,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": Ho(c.open),
            ...a,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), K0 = "DialogTitle", Vs = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(K0, r), { setTitleCount: s } = i;
    return Xe(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ g(xe.h2, { id: i.titleId, ...o, ref: n });
  }, "DialogTitle")
), W0 = "DialogDescription", Us = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(W0, r), { setDescriptionCount: s } = i;
    return Xe(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ g(xe.p, { id: i.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), G0 = "DialogClose", Ys = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(G0, r);
    return /* @__PURE__ */ g(
      xe.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: oe(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Ho(e) {
  return e ? "open" : "closed";
}
Ze(Ho, "getState");
const Zd = Vd, V0 = qd, Jd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Ws,
  {
    className: fe(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Jd.displayName = Ws.displayName;
const qs = m.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = hs();
  return /* @__PURE__ */ L(V0, { container: i || void 0, children: [
    /* @__PURE__ */ g(Jd, {}),
    /* @__PURE__ */ L(
      Gs,
      {
        ref: o,
        className: fe(
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
          /* @__PURE__ */ L(Ys, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ g(_l, { className: "h-4 w-4" }),
            /* @__PURE__ */ g("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
qs.displayName = Gs.displayName;
const Xs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g(
  "div",
  {
    className: fe(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Xs.displayName = "SheetHeader";
const Qd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g(
  "div",
  {
    className: fe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Qd.displayName = "SheetFooter";
const Zs = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Vs,
  {
    ref: n,
    className: fe("text-lg font-medium text-gray-900", e),
    ...t
  }
));
Zs.displayName = Vs.displayName;
const Js = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Us,
  {
    ref: n,
    className: fe("text-sm text-gray-500", e),
    ...t
  }
));
Js.displayName = Us.displayName;
function Qs(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, s = lr.resolveDimensions(r), a = s.width, c = s.height, l = a / c, d = o, u = i ?? Math.round(d / l), f = a * 3.779527559, h = c * 3.779527559;
  return (b, p, v) => {
    const y = b.strictPosition, w = y === "start" || y === "end";
    if (b.kind === "group") {
      const x = b.firstPageId, S = b.firstPageComponentKey ?? x, k = bo(n, { id: x, componentKey: S }), I = b.firstPageComponent || (S ? t[S] : null), P = n?.integrations?.[b.id];
      return /* @__PURE__ */ L(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : w ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: b.id,
          children: [
            I ? /* @__PURE__ */ g(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ g(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ g("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ g(
                      I,
                      {
                        payload: n,
                        pageId: x,
                        templateId: S,
                        pagePayload: k,
                        componentKey: S,
                        integration: P,
                        parentGroup: b
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ g("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                b.id
              ] }),
              /* @__PURE__ */ g("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            /* @__PURE__ */ L("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              b.pageCount,
              " pages)"
            ] }),
            w && /* @__PURE__ */ L("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ g(Ni, { className: "size-3" }),
              /* @__PURE__ */ g("span", { children: y === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ g("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ g("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ g("div", { className: "text-sm font-medium truncate", children: b.label || b.id }) }) }) }),
            v && /* @__PURE__ */ g("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ g("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const x = b.pageId, S = b.pageComponentKey ?? x, k = bo(n, { id: x, componentKey: S }), I = b.pageComponent || (S ? t[S] : null), P = x ? Hd(n, { id: x }) : void 0;
      return /* @__PURE__ */ L(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : w ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: b.pageId,
          children: [
            I ? /* @__PURE__ */ g(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ g(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ g("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ g(
                      I,
                      {
                        payload: n,
                        pageId: x,
                        templateId: S,
                        pagePayload: k,
                        componentKey: S,
                        integration: P
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ g("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                b.pageNum
              ] }),
              /* @__PURE__ */ g("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            w && /* @__PURE__ */ L("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ g(Ni, { className: "size-3" }),
              /* @__PURE__ */ g("span", { children: y === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ g("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ g("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ g("div", { className: "text-sm font-medium truncate", children: b.pageLabel || `Page ${b.pageNum}` }) }) }) }),
            v && /* @__PURE__ */ g("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ g("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function U0({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: i,
  setup: s = { width: 210, height: 297 },
  gridColsClass: a = "page-order-grid-cols"
}) {
  const [c, l] = m.useState(""), d = m.useMemo(() => {
    if (!c.trim()) return n;
    const I = c.toLowerCase();
    return n.filter(
      (P) => (P.label || "").toLowerCase().includes(I) || P.id.toLowerCase().includes(I)
    );
  }, [n, c]), u = (I) => {
    t(!1), r(I);
  }, f = lr.resolveDimensions(s), h = f.width, b = f.height, p = h / b, v = 200, y = Math.round(v / p), w = {
    width: `${v}px`,
    height: `${y}px`
  }, x = m.useMemo(() => o ? Qs({
    pageComponents: o,
    payload: i,
    setup: s,
    thumbnailWidth: v,
    thumbnailHeight: y
  }) : null, [o, i, s, v, y]), S = (I, P) => {
    if (!I) return [];
    if (Array.isArray(I)) return I;
    try {
      const C = I(P);
      if (!Array.isArray(C))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof C), [];
      const N = C.filter((E) => typeof E == "string");
      return N.length !== C.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), N;
    } catch (C) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", C), [];
    }
  }, k = (I, P) => {
    if (I.kind === "group") {
      const E = I, D = { payload: i, item: void 0, parent: void 0 }, _ = S(E.pageComponentKeys, D), B = _[0];
      return {
        kind: "group",
        id: I.id,
        label: I.label,
        pageCount: _.length,
        firstPageId: B,
        firstPageComponentKey: B
      };
    }
    const C = I, N = C.componentKey ?? C.id;
    return {
      kind: "page",
      id: C.id,
      pageId: C.id,
      pageComponentKey: N,
      pageLabel: C.label,
      pageNum: P + 1
    };
  };
  return /* @__PURE__ */ g(Zd, { open: e, onOpenChange: t, children: /* @__PURE__ */ L(
    qs,
    {
      side: "bottom",
      className: "h-[90vh] w-full max-w-none flex flex-col gap-0 bg-gray-50 p-0",
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ g(Xs, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ L("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ g("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ g(wt, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ L("div", { className: "flex-1", children: [
            /* @__PURE__ */ g(Zs, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
            /* @__PURE__ */ g(Js, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
          ] }),
          /* @__PURE__ */ L("div", { className: "mb-0.5 mr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200", children: [
            /* @__PURE__ */ g(Np, { className: "w-3.5 h-3.5 shrink-0" }),
            /* @__PURE__ */ g("label", { className: "sr-only", htmlFor: "uhuu-add-page-filter", children: "Filter pages and groups" }),
            /* @__PURE__ */ g(
              "input",
              {
                id: "uhuu-add-page-filter",
                type: "text",
                placeholder: "Filter…",
                value: c,
                onChange: (I) => l(I.target.value),
                className: "w-24 border-0 bg-transparent text-sm text-gray-600 placeholder:text-gray-400 outline-none transition-all duration-150 focus:w-40"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ g("div", { className: "min-h-0 flex-1 overflow-auto bg-gray-50 p-6", children: d.length === 0 ? /* @__PURE__ */ L("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ g("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ g(wt, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ g("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
          /* @__PURE__ */ g("p", { className: "text-gray-500 mb-4", children: c.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
        ] }) : /* @__PURE__ */ g("div", { className: a, children: d.map((I, P) => {
          const C = I.kind === "group", N = I.id, E = C ? I.label || `Group ${P + 1}` : I.label || `Page ${I.id}`, D = { payload: i, item: void 0, parent: void 0 }, _ = C ? S(I.pageComponentKeys, D).length : 1, B = !!x;
          return /* @__PURE__ */ L(
            "div",
            {
              onClick: () => u(I),
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), u(I));
              },
              role: "button",
              tabIndex: 0,
              "aria-label": `Add ${E}`,
              className: [
                "group relative block cursor-pointer border-0 bg-transparent p-0 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
                !B && "bg-white border-2 border-gray-200"
              ].filter(Boolean).join(" "),
              style: w,
              children: [
                /* @__PURE__ */ g("div", { className: "w-full h-full relative", children: I.thumbnail ? /* @__PURE__ */ g("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ g(
                  "img",
                  {
                    src: I.thumbnail,
                    className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                    alt: E
                  }
                ) }) : x ? /* @__PURE__ */ g("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: x(k(I, P), P, !1) }) : /* @__PURE__ */ g(Be, { children: C ? /* @__PURE__ */ L("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ g("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ g(wt, { className: "w-8 h-8 text-blue-600" }) }),
                  /* @__PURE__ */ g("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ L("div", { className: "text-xs text-gray-500 mt-1", children: [
                    _,
                    " ",
                    _ === 1 ? "page" : "pages"
                  ] })
                ] }) : /* @__PURE__ */ L("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ g("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ g(wt, { className: "w-8 h-8 text-gray-400" }) }),
                  /* @__PURE__ */ g("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ g("div", { className: "text-xs text-gray-500 mt-1", children: N })
                ] }) }) }),
                (!x || I?.thumbnail) && /* @__PURE__ */ L(Be, { children: [
                  C && /* @__PURE__ */ L("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                    "Group (",
                    _,
                    " ",
                    _ === 1 ? "page" : "pages",
                    ")"
                  ] }),
                  /* @__PURE__ */ g("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": N, children: /* @__PURE__ */ g("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ g("div", { className: "text-sm font-medium truncate", children: E }) }) }) })
                ] }),
                /* @__PURE__ */ g("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ g(wt, { className: "w-4 h-4 text-white" }) })
              ]
            },
            N
          );
        }) }) })
      ]
    }
  ) });
}
function Y0() {
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
const Ko = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function qn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ea(e) {
  return "nodeType" in e;
}
function Ke(e) {
  var t, n;
  return e ? qn(e) ? e : ea(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ta(e) {
  const {
    Document: t
  } = Ke(e);
  return e instanceof t;
}
function Pr(e) {
  return qn(e) ? !1 : e instanceof Ke(e).HTMLElement;
}
function ef(e) {
  return e instanceof Ke(e).SVGElement;
}
function Xn(e) {
  return e ? qn(e) ? e.document : ea(e) ? ta(e) ? e : Pr(e) || ef(e) ? e.ownerDocument : document : document : document;
}
const ft = Ko ? Uc : le;
function Wo(e) {
  const t = de(e);
  return ft(() => {
    t.current = e;
  }), pe(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function q0() {
  const e = de(null), t = pe((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = pe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function pr(e, t) {
  t === void 0 && (t = [e]);
  const n = de(e);
  return ft(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Ir(e, t) {
  const n = de();
  return ee(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function wo(e) {
  const t = Wo(e), n = de(null), r = pe(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function xo(e) {
  const t = de();
  return le(() => {
    t.current = e;
  }, [e]), t.current;
}
let vi = {};
function kr(e, t) {
  return ee(() => {
    if (t)
      return t;
    const n = vi[e] == null ? 0 : vi[e] + 1;
    return vi[e] = n, e + "-" + n;
  }, [e, t]);
}
function tf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((i, s) => {
      const a = Object.entries(s);
      for (const [c, l] of a) {
        const d = i[c];
        d != null && (i[c] = d + e * l);
      }
      return i;
    }, {
      ...t
    });
  };
}
const zn = /* @__PURE__ */ tf(1), mr = /* @__PURE__ */ tf(-1);
function X0(e) {
  return "clientX" in e && "clientY" in e;
}
function Go(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ke(e.target);
  return t && e instanceof t;
}
function Z0(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ke(e.target);
  return t && e instanceof t;
}
function Co(e) {
  if (Z0(e)) {
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
  return X0(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const nn = /* @__PURE__ */ Object.freeze({
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
        return [nn.Translate.toString(e), nn.Scale.toString(e)].join(" ");
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
}), Sc = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function J0(e) {
  return e.matches(Sc) ? e : e.querySelector(Sc);
}
const Q0 = {
  display: "none"
};
function ex(e) {
  let {
    id: t,
    value: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: Q0
  }, n);
}
function tx(e) {
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
  return ke.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function nx() {
  const [e, t] = ce("");
  return {
    announce: pe((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const nf = /* @__PURE__ */ Ft(null);
function rx(e) {
  const t = Se(nf);
  le(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function ox() {
  const [e] = ce(() => /* @__PURE__ */ new Set()), t = pe((r) => (e.add(r), () => e.delete(r)), [e]);
  return [pe((r) => {
    let {
      type: o,
      event: i
    } = r;
    e.forEach((s) => {
      var a;
      return (a = s[o]) == null ? void 0 : a.call(s, i);
    });
  }, [e]), t];
}
const ix = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, sx = {
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
function ax(e) {
  let {
    announcements: t = sx,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = ix
  } = e;
  const {
    announce: i,
    announcement: s
  } = nx(), a = kr("DndLiveRegion"), [c, l] = ce(!1);
  if (le(() => {
    l(!0);
  }, []), rx(ee(() => ({
    onDragStart(u) {
      let {
        active: f
      } = u;
      i(t.onDragStart({
        active: f
      }));
    },
    onDragMove(u) {
      let {
        active: f,
        over: h
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: f,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: f,
        over: h
      } = u;
      i(t.onDragOver({
        active: f,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: f,
        over: h
      } = u;
      i(t.onDragEnd({
        active: f,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: f,
        over: h
      } = u;
      i(t.onDragCancel({
        active: f,
        over: h
      }));
    }
  }), [i, t])), !c)
    return null;
  const d = ke.createElement(ke.Fragment, null, ke.createElement(ex, {
    id: r,
    value: o.draggable
  }), ke.createElement(tx, {
    id: a,
    announcement: s
  }));
  return n ? wh(d, n) : d;
}
var _e;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(_e || (_e = {}));
function So() {
}
function Pc(e, t) {
  return ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function cx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ee(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const ht = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function rf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function lx(e, t) {
  const n = Co(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function of(e, t) {
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
function ux(e, t) {
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
function Ic(e) {
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
function sf(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function kc(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const dx = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = kc(t, t.left, t.top), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = rf(kc(c), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(of);
}, fx = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ic(t), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = Ic(c), d = o.reduce((f, h, b) => f + rf(l[b], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort(of);
};
function hx(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const c = t.width * t.height, l = e.width * e.height, d = s * a, u = d / (c + l - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const gx = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const i of r) {
    const {
      id: s
    } = i, a = n.get(s);
    if (a) {
      const c = hx(a, t);
      c > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return o.sort(ux);
};
function px(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function af(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ht;
}
function mx(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return o.reduce((s, a) => ({
      ...s,
      top: s.top + e * a.y,
      bottom: s.bottom + e * a.y,
      left: s.left + e * a.x,
      right: s.right + e * a.x
    }), {
      ...n
    });
  };
}
const vx = /* @__PURE__ */ mx(1);
function cf(e) {
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
function bx(e, t, n) {
  const r = cf(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: s,
    y: a
  } = r, c = e.left - s - (1 - o) * parseFloat(n), l = e.top - a - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = o ? e.width / o : e.width, u = i ? e.height / i : e.height;
  return {
    width: d,
    height: u,
    top: l,
    right: c + d,
    bottom: l + u,
    left: c
  };
}
const yx = {
  ignoreTransform: !1
};
function Zn(e, t) {
  t === void 0 && (t = yx);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: l,
      transformOrigin: d
    } = Ke(e).getComputedStyle(e);
    l && (n = bx(n, l, d));
  }
  const {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: c
  } = n;
  return {
    top: r,
    left: o,
    width: i,
    height: s,
    bottom: a,
    right: c
  };
}
function Nc(e) {
  return Zn(e, {
    ignoreTransform: !0
  });
}
function wx(e) {
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
function xx(e, t) {
  return t === void 0 && (t = Ke(e).getComputedStyle(e)), t.position === "fixed";
}
function Cx(e, t) {
  t === void 0 && (t = Ke(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Vo(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (ta(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Pr(o) || ef(o) || n.includes(o))
      return n;
    const i = Ke(e).getComputedStyle(o);
    return o !== e && Cx(o, i) && n.push(o), xx(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function lf(e) {
  const [t] = Vo(e, 1);
  return t ?? null;
}
function bi(e) {
  return !Ko || !e ? null : qn(e) ? e : ea(e) ? ta(e) || e === Xn(e).scrollingElement ? window : Pr(e) ? e : null : null;
}
function uf(e) {
  return qn(e) ? e.scrollX : e.scrollLeft;
}
function df(e) {
  return qn(e) ? e.scrollY : e.scrollTop;
}
function Yi(e) {
  return {
    x: uf(e),
    y: df(e)
  };
}
var Te;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Te || (Te = {}));
function ff(e) {
  return !Ko || !e ? !1 : e === document.scrollingElement;
}
function hf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ff(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, s = e.scrollTop >= r.y, a = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: s,
    isRight: a,
    maxScroll: r,
    minScroll: t
  };
}
const Sx = {
  x: 0.2,
  y: 0.2
};
function Px(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: c
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = Sx);
  const {
    isTop: l,
    isBottom: d,
    isLeft: u,
    isRight: f
  } = hf(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, p = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !l && i <= t.top + p.height ? (h.y = Te.Backward, b.y = r * Math.abs((t.top + p.height - i) / p.height)) : !d && c >= t.bottom - p.height && (h.y = Te.Forward, b.y = r * Math.abs((t.bottom - p.height - c) / p.height)), !f && a >= t.right - p.width ? (h.x = Te.Forward, b.x = r * Math.abs((t.right - p.width - a) / p.width)) : !u && s <= t.left + p.width && (h.x = Te.Backward, b.x = r * Math.abs((t.left + p.width - s) / p.width)), {
    direction: h,
    speed: b
  };
}
function Ix(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: s
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: s,
      width: i,
      height: s
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
function gf(e) {
  return e.reduce((t, n) => zn(t, Yi(n)), ht);
}
function kx(e) {
  return e.reduce((t, n) => t + uf(n), 0);
}
function Nx(e) {
  return e.reduce((t, n) => t + df(n), 0);
}
function pf(e, t) {
  if (t === void 0 && (t = Zn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  lf(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Rx = [["x", ["left", "right"], kx], ["y", ["top", "bottom"], Nx]];
class na {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Vo(n), o = gf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of Rx)
      for (const c of s)
        Object.defineProperty(this, c, {
          get: () => {
            const l = a(r), d = o[i] - l;
            return this.rect[c] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class ir {
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
function Ex(e) {
  const {
    EventTarget: t
  } = Ke(e);
  return e instanceof t ? e : Xn(e);
}
function yi(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var nt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(nt || (nt = {}));
function Rc(e) {
  e.preventDefault();
}
function Ax(e) {
  e.stopPropagation();
}
var ge;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ge || (ge = {}));
const mf = {
  start: [ge.Space, ge.Enter],
  cancel: [ge.Esc],
  end: [ge.Space, ge.Enter, ge.Tab]
}, Dx = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ge.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ge.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ge.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ge.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class ra {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new ir(Xn(n)), this.windowListeners = new ir(Ke(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(nt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && pf(r), n(ht);
  }
  handleKeyDown(t) {
    if (Go(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = mf,
        coordinateGetter: s = Dx,
        scrollBehavior: a = "smooth"
      } = o, {
        code: c
      } = t;
      if (i.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: l
      } = r.current, d = l ? {
        x: l.left,
        y: l.top
      } : ht;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const f = mr(u, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const p of b) {
          const v = t.code, {
            isTop: y,
            isRight: w,
            isLeft: x,
            isBottom: S,
            maxScroll: k,
            minScroll: I
          } = hf(p), P = Ix(p), C = {
            x: Math.min(v === ge.Right ? P.right - P.width / 2 : P.right, Math.max(v === ge.Right ? P.left : P.left + P.width / 2, u.x)),
            y: Math.min(v === ge.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(v === ge.Down ? P.top : P.top + P.height / 2, u.y))
          }, N = v === ge.Right && !w || v === ge.Left && !x, E = v === ge.Down && !S || v === ge.Up && !y;
          if (N && C.x !== u.x) {
            const D = p.scrollLeft + f.x, _ = v === ge.Right && D <= k.x || v === ge.Left && D >= I.x;
            if (_ && !f.y) {
              p.scrollTo({
                left: D,
                behavior: a
              });
              return;
            }
            _ ? h.x = p.scrollLeft - D : h.x = v === ge.Right ? p.scrollLeft - k.x : p.scrollLeft - I.x, h.x && p.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (E && C.y !== u.y) {
            const D = p.scrollTop + f.y, _ = v === ge.Down && D <= k.y || v === ge.Up && D >= I.y;
            if (_ && !f.x) {
              p.scrollTo({
                top: D,
                behavior: a
              });
              return;
            }
            _ ? h.y = p.scrollTop - D : h.y = v === ge.Down ? p.scrollTop - k.y : p.scrollTop - I.y, h.y && p.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, zn(mr(u, this.referenceCoordinates), h));
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
ra.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = mf,
      onActivation: o
    } = t, {
      active: i
    } = n;
    const {
      code: s
    } = e.nativeEvent;
    if (r.start.includes(s)) {
      const a = i.activatorNode.current;
      return a && e.target !== a ? !1 : (e.preventDefault(), o?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Ec(e) {
  return !!(e && "distance" in e);
}
function Ac(e) {
  return !!(e && "delay" in e);
}
class oa {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = Ex(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Xn(s), this.documentListeners = new ir(this.document), this.listeners = new ir(r), this.windowListeners = new ir(Ke(s)), this.initialCoordinates = (o = Co(i)) != null ? o : ht, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.DragStart, Rc), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), this.windowListeners.add(nt.ContextMenu, Rc), this.documentListeners.add(nt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ac(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ec(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(nt.Click, Ax, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(nt.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: s,
      options: {
        activationConstraint: a
      }
    } = i;
    if (!o)
      return;
    const c = (n = Co(t)) != null ? n : ht, l = mr(o, c);
    if (!r && a) {
      if (Ec(a)) {
        if (a.tolerance != null && yi(l, a.tolerance))
          return this.handleCancel();
        if (yi(l, a.distance))
          return this.handleStart();
      }
      if (Ac(a) && yi(l, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, l);
      return;
    }
    t.cancelable && t.preventDefault(), s(c);
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
    t.code === ge.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Mx = {
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
class ia extends oa {
  constructor(t) {
    const {
      event: n
    } = t, r = Xn(n.target);
    super(t, Mx, r);
  }
}
ia.activators = [{
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
const Ox = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var qi;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(qi || (qi = {}));
class _x extends oa {
  constructor(t) {
    super(t, Ox, Xn(t.event.target));
  }
}
_x.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === qi.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const wi = {
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
class Tx extends oa {
  constructor(t) {
    super(t, wi);
  }
  static setup() {
    return window.addEventListener(wi.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(wi.move.name, t);
    };
    function t() {
    }
  }
}
Tx.activators = [{
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
var sr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(sr || (sr = {}));
var Po;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Po || (Po = {}));
function Fx(e) {
  let {
    acceleration: t,
    activator: n = sr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = Po.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: l,
    scrollableAncestorRects: d,
    delta: u,
    threshold: f
  } = e;
  const h = Lx({
    delta: u,
    disabled: !i
  }), [b, p] = q0(), v = de({
    x: 0,
    y: 0
  }), y = de({
    x: 0,
    y: 0
  }), w = ee(() => {
    switch (n) {
      case sr.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case sr.DraggableRect:
        return o;
    }
  }, [n, o, c]), x = de(null), S = pe(() => {
    const I = x.current;
    if (!I)
      return;
    const P = v.current.x * y.current.x, C = v.current.y * y.current.y;
    I.scrollBy(P, C);
  }, []), k = ee(() => a === Po.TreeOrder ? [...l].reverse() : l, [a, l]);
  le(
    () => {
      if (!i || !l.length || !w) {
        p();
        return;
      }
      for (const I of k) {
        if (r?.(I) === !1)
          continue;
        const P = l.indexOf(I), C = d[P];
        if (!C)
          continue;
        const {
          direction: N,
          speed: E
        } = Px(I, C, w, t, f);
        for (const D of ["x", "y"])
          h[D][N[D]] || (E[D] = 0, N[D] = 0);
        if (E.x > 0 || E.y > 0) {
          p(), x.current = I, b(S, s), v.current = E, y.current = N;
          return;
        }
      }
      v.current = {
        x: 0,
        y: 0
      }, y.current = {
        x: 0,
        y: 0
      }, p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      p,
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(w),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      b,
      l,
      k,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const $x = {
  x: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  },
  y: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  }
};
function Lx(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = xo(t);
  return Ir((o) => {
    if (n || !r || !o)
      return $x;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Te.Backward]: o.x[Te.Backward] || i.x === -1,
        [Te.Forward]: o.x[Te.Forward] || i.x === 1
      },
      y: {
        [Te.Backward]: o.y[Te.Backward] || i.y === -1,
        [Te.Forward]: o.y[Te.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Bx(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Ir((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function zx(e, t) {
  return ee(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((s) => ({
      eventName: s.eventName,
      handler: t(s.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var vr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(vr || (vr = {}));
var Xi;
(function(e) {
  e.Optimized = "optimized";
})(Xi || (Xi = {}));
const Dc = /* @__PURE__ */ new Map();
function jx(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = ce(null), {
    frequency: a,
    measure: c,
    strategy: l
  } = o, d = de(e), u = v(), f = pr(u), h = pe(function(y) {
    y === void 0 && (y = []), !f.current && s((w) => w === null ? y : w.concat(y.filter((x) => !w.includes(x))));
  }, [f]), b = de(null), p = Ir((y) => {
    if (u && !n)
      return Dc;
    if (!y || y === Dc || d.current !== e || i != null) {
      const w = /* @__PURE__ */ new Map();
      for (let x of e) {
        if (!x)
          continue;
        if (i && i.length > 0 && !i.includes(x.id) && x.rect.current) {
          w.set(x.id, x.rect.current);
          continue;
        }
        const S = x.node.current, k = S ? new na(c(S), S) : null;
        x.rect.current = k, k && w.set(x.id, k);
      }
      return w;
    }
    return y;
  }, [e, i, n, u, c]);
  return le(() => {
    d.current = e;
  }, [e]), le(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), le(
    () => {
      i && i.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), le(
    () => {
      u || typeof a != "number" || b.current !== null || (b.current = setTimeout(() => {
        h(), b.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, h, ...r]
  ), {
    droppableRects: p,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function v() {
    switch (l) {
      case vr.Always:
        return !1;
      case vr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function sa(e, t) {
  return Ir((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Hx(e, t) {
  return sa(e, t);
}
function Kx(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Wo(t), o = ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return le(() => () => o?.disconnect(), [o]), o;
}
function Uo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Wo(t), o = ee(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return le(() => () => o?.disconnect(), [o]), o;
}
function Wx(e) {
  return new na(Zn(e), e);
}
function Mc(e, t, n) {
  t === void 0 && (t = Wx);
  const [r, o] = ce(null);
  function i() {
    o((c) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var l;
        return (l = c ?? n) != null ? l : null;
      }
      const d = t(e);
      return JSON.stringify(c) === JSON.stringify(d) ? c : d;
    });
  }
  const s = Kx({
    callback(c) {
      if (e)
        for (const l of c) {
          const {
            type: d,
            target: u
          } = l;
          if (d === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), a = Uo({
    callback: i
  });
  return ft(() => {
    i(), e ? (a?.observe(e), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [e]), r;
}
function Gx(e) {
  const t = sa(e);
  return af(e, t);
}
const Oc = [];
function Vx(e) {
  const t = de(e), n = Ir((r) => e ? r && r !== Oc && e && t.current && e.parentNode === t.current.parentNode ? r : Vo(e) : Oc, [e]);
  return le(() => {
    t.current = e;
  }, [e]), n;
}
function Ux(e) {
  const [t, n] = ce(null), r = de(e), o = pe((i) => {
    const s = bi(i.target);
    s && n((a) => a ? (a.set(s, Yi(s)), new Map(a)) : null);
  }, []);
  return le(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((c) => {
        const l = bi(c);
        return l ? (l.addEventListener("scroll", o, {
          passive: !0
        }), [l, Yi(l)]) : null;
      }).filter((c) => c != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((c) => {
        const l = bi(c);
        l?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), ee(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => zn(i, s), ht) : gf(e) : ht, [e, t]);
}
function _c(e, t) {
  t === void 0 && (t = []);
  const n = de(null);
  return le(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), le(() => {
    const r = e !== ht;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? mr(e, n.current) : ht;
}
function Yx(e) {
  le(
    () => {
      if (!Ko)
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
function qx(e, t) {
  return ee(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (s) => {
      i(s, t);
    }, n;
  }, {}), [e, t]);
}
function vf(e) {
  return ee(() => e ? wx(e) : null, [e]);
}
const Tc = [];
function Xx(e, t) {
  t === void 0 && (t = Zn);
  const [n] = e, r = vf(n ? Ke(n) : null), [o, i] = ce(Tc);
  function s() {
    i(() => e.length ? e.map((c) => ff(c) ? r : new na(t(c), c)) : Tc);
  }
  const a = Uo({
    callback: s
  });
  return ft(() => {
    a?.disconnect(), s(), e.forEach((c) => a?.observe(c));
  }, [e]), o;
}
function bf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Pr(t) ? t : e;
}
function Zx(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ce(null), o = pe((l) => {
    for (const {
      target: d
    } of l)
      if (Pr(d)) {
        r((u) => {
          const f = t(d);
          return u ? {
            ...u,
            width: f.width,
            height: f.height
          } : f;
        });
        break;
      }
  }, [t]), i = Uo({
    callback: o
  }), s = pe((l) => {
    const d = bf(l);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [a, c] = wo(s);
  return ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: c
  }), [n, a, c]);
}
const Jx = [{
  sensor: ia,
  options: {}
}, {
  sensor: ra,
  options: {}
}], Qx = {
  current: {}
}, ro = {
  draggable: {
    measure: Nc
  },
  droppable: {
    measure: Nc,
    strategy: vr.WhileDragging,
    frequency: Xi.Optimized
  },
  dragOverlay: {
    measure: Zn
  }
};
class ar extends Map {
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
const eC = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ar(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: So
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ro,
  measureDroppableContainers: So,
  windowRect: null,
  measuringScheduled: !1
}, yf = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: So,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: So
}, Nr = /* @__PURE__ */ Ft(yf), wf = /* @__PURE__ */ Ft(eC);
function tC() {
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
      containers: new ar()
    }
  };
}
function nC(e, t) {
  switch (t.type) {
    case _e.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case _e.DragMove:
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
    case _e.DragEnd:
    case _e.DragCancel:
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
    case _e.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new ar(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case _e.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new ar(e.droppable.containers);
      return s.set(n, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case _e.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new ar(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function rC(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Se(Nr), i = xo(r), s = xo(n?.id);
  return le(() => {
    if (!t && !r && i && s != null) {
      if (!Go(i) || document.activeElement === i.target)
        return;
      const a = o.get(s);
      if (!a)
        return;
      const {
        activatorNode: c,
        node: l
      } = a;
      if (!c.current && !l.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [c.current, l.current]) {
          if (!d)
            continue;
          const u = J0(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function xf(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function oC(e) {
  return ee(
    () => ({
      draggable: {
        ...ro.draggable,
        ...e?.draggable
      },
      droppable: {
        ...ro.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...ro.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function iC(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = de(!1), {
    x: s,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  ft(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const l = t?.node.current;
    if (!l || l.isConnected === !1)
      return;
    const d = n(l), u = af(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = lf(l);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const Yo = /* @__PURE__ */ Ft({
  ...ht,
  scaleX: 1,
  scaleY: 1
});
var Yt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Yt || (Yt = {}));
const sC = /* @__PURE__ */ mh(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: c = !0,
    children: l,
    sensors: d = Jx,
    collisionDetection: u = gx,
    measuring: f,
    modifiers: h,
    ...b
  } = t;
  const p = vh(nC, void 0, tC), [v, y] = p, [w, x] = ox(), [S, k] = ce(Yt.Uninitialized), I = S === Yt.Initialized, {
    draggable: {
      active: P,
      nodes: C,
      translate: N
    },
    droppable: {
      containers: E
    }
  } = v, D = P != null ? C.get(P) : null, _ = de({
    initial: null,
    translated: null
  }), B = ee(() => {
    var Ce;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (Ce = D?.data) != null ? Ce : Qx,
      rect: _
    } : null;
  }, [P, D]), T = de(null), [W, F] = ce(null), [$, R] = ce(null), M = pr(b, Object.values(b)), A = kr("DndDescribedBy", s), H = ee(() => E.getEnabled(), [E]), K = oC(f), {
    droppableRects: j,
    measureDroppableContainers: V,
    measuringScheduled: Y
  } = jx(H, {
    dragging: I,
    dependencies: [N.x, N.y],
    config: K.droppable
  }), z = Bx(C, P), G = ee(() => $ ? Co($) : null, [$]), U = Fr(), J = Hx(z, K.draggable.measure);
  iC({
    activeNode: P != null ? C.get(P) : null,
    config: U.layoutShiftCompensation,
    initialRect: J,
    measure: K.draggable.measure
  });
  const Z = Mc(z, K.draggable.measure, J), re = Mc(z ? z.parentElement : null), ie = de({
    activatorEvent: null,
    active: null,
    activeNode: z,
    collisionRect: null,
    collisions: null,
    droppableRects: j,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), we = E.getNodeFor((n = ie.current.over) == null ? void 0 : n.id), se = Zx({
    measure: K.dragOverlay.measure
  }), Re = (r = se.nodeRef.current) != null ? r : z, Je = I ? (o = se.rect) != null ? o : Z : null, ln = !!(se.nodeRef.current && se.rect), un = Gx(ln ? null : Z), dn = vf(Re ? Ke(Re) : null), st = Vx(I ? we ?? z : null), jt = Xx(st), at = xf(h, {
    transform: {
      x: N.x - un.x,
      y: N.y - un.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: $,
    active: B,
    activeNodeRect: Z,
    containerNodeRect: re,
    draggingNodeRect: Je,
    over: ie.current.over,
    overlayNodeRect: se.rect,
    scrollableAncestors: st,
    scrollableAncestorRects: jt,
    windowRect: dn
  }), Jn = G ? zn(G, N) : null, Nn = Ux(st), Qn = _c(Nn), Ar = _c(Nn, [Z]), vt = zn(at, Qn), kt = Je ? vx(Je, at) : null, Ht = B && kt ? u({
    active: B,
    collisionRect: kt,
    droppableRects: j,
    droppableContainers: H,
    pointerCoordinates: Jn
  }) : null, Dr = sf(Ht, "id"), [Ve, Mr] = ce(null), Xo = ln ? at : zn(at, Ar), er = px(Xo, (i = Ve?.rect) != null ? i : null, Z), tr = de(null), Or = pe(
    (Ce, Ae) => {
      let {
        sensor: je,
        options: ct
      } = Ae;
      if (T.current == null)
        return;
      const De = C.get(T.current);
      if (!De)
        return;
      const Ee = Ce.nativeEvent, Ue = new je({
        active: T.current,
        activeNode: De,
        event: Ee,
        options: ct,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ie,
        onAbort(Me) {
          if (!C.get(Me))
            return;
          const {
            onDragAbort: Ye
          } = M.current, Qe = {
            id: Me
          };
          Ye?.(Qe), w({
            type: "onDragAbort",
            event: Qe
          });
        },
        onPending(Me, lt, Ye, Qe) {
          if (!C.get(Me))
            return;
          const {
            onDragPending: hn
          } = M.current, ut = {
            id: Me,
            constraint: lt,
            initialCoordinates: Ye,
            offset: Qe
          };
          hn?.(ut), w({
            type: "onDragPending",
            event: ut
          });
        },
        onStart(Me) {
          const lt = T.current;
          if (lt == null)
            return;
          const Ye = C.get(lt);
          if (!Ye)
            return;
          const {
            onDragStart: Qe
          } = M.current, fn = {
            activatorEvent: Ee,
            active: {
              id: lt,
              data: Ye.data,
              rect: _
            }
          };
          $r(() => {
            Qe?.(fn), k(Yt.Initializing), y({
              type: _e.DragStart,
              initialCoordinates: Me,
              active: lt
            }), w({
              type: "onDragStart",
              event: fn
            }), F(tr.current), R(Ee);
          });
        },
        onMove(Me) {
          y({
            type: _e.DragMove,
            coordinates: Me
          });
        },
        onEnd: Kt(_e.DragEnd),
        onCancel: Kt(_e.DragCancel)
      });
      tr.current = Ue;
      function Kt(Me) {
        return async function() {
          const {
            active: Ye,
            collisions: Qe,
            over: fn,
            scrollAdjustedTranslate: hn
          } = ie.current;
          let ut = null;
          if (Ye && hn) {
            const {
              cancelDrop: et
            } = M.current;
            ut = {
              activatorEvent: Ee,
              active: Ye,
              collisions: Qe,
              delta: hn,
              over: fn
            }, Me === _e.DragEnd && typeof et == "function" && await Promise.resolve(et(ut)) && (Me = _e.DragCancel);
          }
          T.current = null, $r(() => {
            y({
              type: Me
            }), k(Yt.Uninitialized), Mr(null), F(null), R(null), tr.current = null;
            const et = Me === _e.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ut) {
              const En = M.current[et];
              En?.(ut), w({
                type: et,
                event: ut
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), Zo = pe((Ce, Ae) => (je, ct) => {
    const De = je.nativeEvent, Ee = C.get(ct);
    if (
      // Another sensor is already instantiating
      T.current !== null || // No active draggable
      !Ee || // Event has already been captured
      De.dndKit || De.defaultPrevented
    )
      return;
    const Ue = {
      active: Ee
    };
    Ce(je, Ae.options, Ue) === !0 && (De.dndKit = {
      capturedBy: Ae.sensor
    }, T.current = ct, Or(je, Ae));
  }, [C, Or]), Rn = zx(d, Zo);
  Yx(d), ft(() => {
    Z && S === Yt.Initializing && k(Yt.Initialized);
  }, [Z, S]), le(
    () => {
      const {
        onDragMove: Ce
      } = M.current, {
        active: Ae,
        activatorEvent: je,
        collisions: ct,
        over: De
      } = ie.current;
      if (!Ae || !je)
        return;
      const Ee = {
        active: Ae,
        activatorEvent: je,
        collisions: ct,
        delta: {
          x: vt.x,
          y: vt.y
        },
        over: De
      };
      $r(() => {
        Ce?.(Ee), w({
          type: "onDragMove",
          event: Ee
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [vt.x, vt.y]
  ), le(
    () => {
      const {
        active: Ce,
        activatorEvent: Ae,
        collisions: je,
        droppableContainers: ct,
        scrollAdjustedTranslate: De
      } = ie.current;
      if (!Ce || T.current == null || !Ae || !De)
        return;
      const {
        onDragOver: Ee
      } = M.current, Ue = ct.get(Dr), Kt = Ue && Ue.rect.current ? {
        id: Ue.id,
        rect: Ue.rect.current,
        data: Ue.data,
        disabled: Ue.disabled
      } : null, Me = {
        active: Ce,
        activatorEvent: Ae,
        collisions: je,
        delta: {
          x: De.x,
          y: De.y
        },
        over: Kt
      };
      $r(() => {
        Mr(Kt), Ee?.(Me), w({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Dr]
  ), ft(() => {
    ie.current = {
      activatorEvent: $,
      active: B,
      activeNode: z,
      collisionRect: kt,
      collisions: Ht,
      droppableRects: j,
      draggableNodes: C,
      draggingNode: Re,
      draggingNodeRect: Je,
      droppableContainers: E,
      over: Ve,
      scrollableAncestors: st,
      scrollAdjustedTranslate: vt
    }, _.current = {
      initial: Je,
      translated: kt
    };
  }, [B, z, Ht, kt, C, Re, Je, j, E, Ve, st, vt]), Fx({
    ...U,
    delta: N,
    draggingRect: kt,
    pointerCoordinates: Jn,
    scrollableAncestors: st,
    scrollableAncestorRects: jt
  });
  const _r = ee(() => ({
    active: B,
    activeNode: z,
    activeNodeRect: Z,
    activatorEvent: $,
    collisions: Ht,
    containerNodeRect: re,
    dragOverlay: se,
    draggableNodes: C,
    droppableContainers: E,
    droppableRects: j,
    over: Ve,
    measureDroppableContainers: V,
    scrollableAncestors: st,
    scrollableAncestorRects: jt,
    measuringConfiguration: K,
    measuringScheduled: Y,
    windowRect: dn
  }), [B, z, Z, $, Ht, re, se, C, E, j, Ve, V, st, jt, K, Y, dn]), Tr = ee(() => ({
    activatorEvent: $,
    activators: Rn,
    active: B,
    activeNodeRect: Z,
    ariaDescribedById: {
      draggable: A
    },
    dispatch: y,
    draggableNodes: C,
    over: Ve,
    measureDroppableContainers: V
  }), [$, Rn, B, Z, y, A, C, Ve, V]);
  return ke.createElement(nf.Provider, {
    value: x
  }, ke.createElement(Nr.Provider, {
    value: Tr
  }, ke.createElement(wf.Provider, {
    value: _r
  }, ke.createElement(Yo.Provider, {
    value: er
  }, l)), ke.createElement(rC, {
    disabled: a?.restoreFocus === !1
  })), ke.createElement(ax, {
    ...a,
    hiddenTextDescribedById: A
  }));
  function Fr() {
    const Ce = W?.autoScrollEnabled === !1, Ae = typeof c == "object" ? c.enabled === !1 : c === !1, je = I && !Ce && !Ae;
    return typeof c == "object" ? {
      ...c,
      enabled: je
    } : {
      enabled: je
    };
  }
}), aC = /* @__PURE__ */ Ft(null), Fc = "button", cC = "Draggable";
function lC(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = kr(cC), {
    activators: s,
    activatorEvent: a,
    active: c,
    activeNodeRect: l,
    ariaDescribedById: d,
    draggableNodes: u,
    over: f
  } = Se(Nr), {
    role: h = Fc,
    roleDescription: b = "draggable",
    tabIndex: p = 0
  } = o ?? {}, v = c?.id === t, y = Se(v ? Yo : aC), [w, x] = wo(), [S, k] = wo(), I = qx(s, t), P = pr(n);
  ft(
    () => (u.set(t, {
      id: t,
      key: i,
      node: w,
      activatorNode: S,
      data: P
    }), () => {
      const N = u.get(t);
      N && N.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const C = ee(() => ({
    role: h,
    tabIndex: p,
    "aria-disabled": r,
    "aria-pressed": v && h === Fc ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": d.draggable
  }), [r, h, p, v, b, d.draggable]);
  return {
    active: c,
    activatorEvent: a,
    activeNodeRect: l,
    attributes: C,
    isDragging: v,
    listeners: r ? void 0 : I,
    node: w,
    over: f,
    setNodeRef: x,
    setActivatorNodeRef: k,
    transform: y
  };
}
function Cf() {
  return Se(wf);
}
const uC = "Droppable", dC = {
  timeout: 25
};
function fC(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = kr(uC), {
    active: s,
    dispatch: a,
    over: c,
    measureDroppableContainers: l
  } = Se(Nr), d = de({
    disabled: n
  }), u = de(!1), f = de(null), h = de(null), {
    disabled: b,
    updateMeasurementsFor: p,
    timeout: v
  } = {
    ...dC,
    ...o
  }, y = pr(p ?? r), w = pe(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        l(Array.isArray(y.current) ? y.current : [y.current]), h.current = null;
      }, v);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), x = Uo({
    callback: w,
    disabled: b || !s
  }), S = pe((C, N) => {
    x && (N && (x.unobserve(N), u.current = !1), C && x.observe(C));
  }, [x]), [k, I] = wo(S), P = pr(t);
  return le(() => {
    !x || !k.current || (x.disconnect(), u.current = !1, x.observe(k.current));
  }, [k, x]), le(
    () => (a({
      type: _e.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: k,
        rect: f,
        data: P
      }
    }), () => a({
      type: _e.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), le(() => {
    n !== d.current.disabled && (a({
      type: _e.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), d.current.disabled = n);
  }, [r, i, n, a]), {
    active: s,
    rect: f,
    isOver: c?.id === r,
    node: k,
    over: c,
    setNodeRef: I
  };
}
function hC(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = ce(null), [i, s] = ce(null), a = xo(n);
  return !n && !r && a && o(a), ft(() => {
    if (!i)
      return;
    const c = r?.key, l = r?.props.id;
    if (c == null || l == null) {
      o(null);
      return;
    }
    Promise.resolve(t(l, i)).then(() => {
      o(null);
    });
  }, [t, r, i]), ke.createElement(ke.Fragment, null, n, r ? bh(r, {
    ref: s
  }) : null);
}
const gC = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function pC(e) {
  let {
    children: t
  } = e;
  return ke.createElement(Nr.Provider, {
    value: yf
  }, ke.createElement(Yo.Provider, {
    value: gC
  }, t));
}
const mC = {
  position: "fixed",
  touchAction: "none"
}, vC = (e) => Go(e) ? "transform 250ms ease" : void 0, bC = /* @__PURE__ */ br((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: s,
    rect: a,
    style: c,
    transform: l,
    transition: d = vC
  } = e;
  if (!a)
    return null;
  const u = o ? l : {
    ...l,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...mC,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: nn.Transform.toString(u),
    transformOrigin: o && r ? lx(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...c
  };
  return ke.createElement(n, {
    className: s,
    style: f,
    ref: t
  }, i);
}), yC = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: i,
    className: s
  } = e;
  if (i != null && i.active)
    for (const [a, c] of Object.entries(i.active))
      c !== void 0 && (o[a] = n.node.style.getPropertyValue(a), n.node.style.setProperty(a, c));
  if (i != null && i.dragOverlay)
    for (const [a, c] of Object.entries(i.dragOverlay))
      c !== void 0 && r.node.style.setProperty(a, c);
  return s != null && s.active && n.node.classList.add(s.active), s != null && s.dragOverlay && r.node.classList.add(s.dragOverlay), function() {
    for (const [c, l] of Object.entries(o))
      n.node.style.setProperty(c, l);
    s != null && s.active && n.node.classList.remove(s.active);
  };
}, wC = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: nn.Transform.toString(t)
  }, {
    transform: nn.Transform.toString(n)
  }];
}, xC = {
  duration: 250,
  easing: "ease",
  keyframes: wC,
  sideEffects: /* @__PURE__ */ yC({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function CC(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return Wo((i, s) => {
    if (t === null)
      return;
    const a = n.get(i);
    if (!a)
      return;
    const c = a.node.current;
    if (!c)
      return;
    const l = bf(s);
    if (!l)
      return;
    const {
      transform: d
    } = Ke(s).getComputedStyle(s), u = cf(d);
    if (!u)
      return;
    const f = typeof t == "function" ? t : SC(t);
    return pf(c, o.draggable.measure), f({
      active: {
        id: i,
        data: a.data,
        node: c,
        rect: o.draggable.measure(c)
      },
      draggableNodes: n,
      dragOverlay: {
        node: s,
        rect: o.dragOverlay.measure(l)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: u
    });
  });
}
function SC(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...xC,
    ...e
  };
  return (i) => {
    let {
      active: s,
      dragOverlay: a,
      transform: c,
      ...l
    } = i;
    if (!t)
      return;
    const d = {
      x: a.rect.left - s.rect.left,
      y: a.rect.top - s.rect.top
    }, u = {
      scaleX: c.scaleX !== 1 ? s.rect.width * c.scaleX / a.rect.width : 1,
      scaleY: c.scaleY !== 1 ? s.rect.height * c.scaleY / a.rect.height : 1
    }, f = {
      x: c.x - d.x,
      y: c.y - d.y,
      ...u
    }, h = o({
      ...l,
      active: s,
      dragOverlay: a,
      transform: {
        initial: c,
        final: f
      }
    }), [b] = h, p = h[h.length - 1];
    if (JSON.stringify(b) === JSON.stringify(p))
      return;
    const v = r?.({
      active: s,
      dragOverlay: a,
      ...l
    }), y = a.node.animate(h, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((w) => {
      y.onfinish = () => {
        v?.(), w();
      };
    });
  };
}
let $c = 0;
function PC(e) {
  return ee(() => {
    if (e != null)
      return $c++, $c;
  }, [e]);
}
const IC = /* @__PURE__ */ ke.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: s,
    wrapperElement: a = "div",
    className: c,
    zIndex: l = 999
  } = e;
  const {
    activatorEvent: d,
    active: u,
    activeNodeRect: f,
    containerNodeRect: h,
    draggableNodes: b,
    droppableContainers: p,
    dragOverlay: v,
    over: y,
    measuringConfiguration: w,
    scrollableAncestors: x,
    scrollableAncestorRects: S,
    windowRect: k
  } = Cf(), I = Se(Yo), P = PC(u?.id), C = xf(s, {
    activatorEvent: d,
    active: u,
    activeNodeRect: f,
    containerNodeRect: h,
    draggingNodeRect: v.rect,
    over: y,
    overlayNodeRect: v.rect,
    scrollableAncestors: x,
    scrollableAncestorRects: S,
    transform: I,
    windowRect: k
  }), N = sa(f), E = CC({
    config: r,
    draggableNodes: b,
    droppableContainers: p,
    measuringConfiguration: w
  }), D = N ? v.setRef : void 0;
  return ke.createElement(pC, null, ke.createElement(hC, {
    animation: E
  }, u && P ? ke.createElement(bC, {
    key: P,
    id: u.id,
    ref: D,
    as: a,
    activatorEvent: d,
    adjustScale: t,
    className: c,
    transition: i,
    rect: N,
    style: {
      zIndex: l,
      ...o
    },
    transform: C
  }, n) : null));
});
function aa(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function kC(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function Jr(e) {
  return e !== null && e >= 0;
}
function NC(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function RC(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const ca = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = aa(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, Sf = "Sortable", Pf = /* @__PURE__ */ ke.createContext({
  activeIndex: -1,
  containerId: Sf,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ca,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function EC(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = ca,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: c,
    over: l,
    measureDroppableContainers: d
  } = Cf(), u = kr(Sf, n), f = a.rect !== null, h = ee(() => r.map((I) => typeof I == "object" && "id" in I ? I.id : I), [r]), b = s != null, p = s ? h.indexOf(s.id) : -1, v = l ? h.indexOf(l.id) : -1, y = de(h), w = !NC(h, y.current), x = v !== -1 && p === -1 || w, S = RC(i);
  ft(() => {
    w && b && d(h);
  }, [w, h, b, d]), le(() => {
    y.current = h;
  }, [h]);
  const k = ee(
    () => ({
      activeIndex: p,
      containerId: u,
      disabled: S,
      disableTransforms: x,
      items: h,
      overIndex: v,
      useDragOverlay: f,
      sortedRects: kC(h, c),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, u, S.draggable, S.droppable, x, h, v, c, f, o]
  );
  return ke.createElement(Pf.Provider, {
    value: k
  }, t);
}
const AC = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return aa(n, r, o).indexOf(t);
}, DC = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: i,
    newIndex: s,
    previousItems: a,
    previousContainerId: c,
    transition: l
  } = e;
  return !l || !r || a !== i && o === s ? !1 : n ? !0 : s !== o && t === c;
}, MC = {
  duration: 200,
  easing: "ease"
}, If = "transform", OC = /* @__PURE__ */ nn.Transition.toString({
  property: If,
  duration: 0,
  easing: "linear"
}), _C = {
  roleDescription: "sortable"
};
function TC(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = ce(null), a = de(n);
  return ft(() => {
    if (!t && n !== a.current && r.current) {
      const c = o.current;
      if (c) {
        const l = Zn(r.current, {
          ignoreTransform: !0
        }), d = {
          x: c.left - l.left,
          y: c.top - l.top,
          scaleX: c.width / l.width,
          scaleY: c.height / l.height
        };
        (d.x || d.y) && s(d);
      }
    }
    n !== a.current && (a.current = n);
  }, [t, n, r, o]), le(() => {
    i && s(null);
  }, [i]), i;
}
function FC(e) {
  let {
    animateLayoutChanges: t = DC,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = AC,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: l = MC
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: f,
    disabled: h,
    disableTransforms: b,
    sortedRects: p,
    overIndex: v,
    useDragOverlay: y,
    strategy: w
  } = Se(Pf), x = $C(r, h), S = d.indexOf(s), k = ee(() => ({
    sortable: {
      containerId: u,
      index: S,
      items: d
    },
    ...o
  }), [u, o, S, d]), I = ee(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: P,
    node: C,
    isOver: N,
    setNodeRef: E
  } = fC({
    id: s,
    data: k,
    disabled: x.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: I,
      ...c
    }
  }), {
    active: D,
    activatorEvent: _,
    activeNodeRect: B,
    attributes: T,
    setNodeRef: W,
    listeners: F,
    isDragging: $,
    over: R,
    setActivatorNodeRef: M,
    transform: A
  } = lC({
    id: s,
    data: k,
    attributes: {
      ..._C,
      ...n
    },
    disabled: x.draggable
  }), H = Y0(E, W), K = !!D, j = K && !b && Jr(f) && Jr(v), V = !y && $, Y = V && j ? A : null, G = j ? Y ?? (a ?? w)({
    rects: p,
    activeNodeRect: B,
    activeIndex: f,
    overIndex: v,
    index: S
  }) : null, U = Jr(f) && Jr(v) ? i({
    id: s,
    items: d,
    activeIndex: f,
    overIndex: v
  }) : S, J = D?.id, Z = de({
    activeId: J,
    items: d,
    newIndex: U,
    containerId: u
  }), re = d !== Z.current.items, ie = t({
    active: D,
    containerId: u,
    isDragging: $,
    isSorting: K,
    id: s,
    index: S,
    items: d,
    newIndex: Z.current.newIndex,
    previousItems: Z.current.items,
    previousContainerId: Z.current.containerId,
    transition: l,
    wasDragging: Z.current.activeId != null
  }), we = TC({
    disabled: !ie,
    index: S,
    node: C,
    rect: P
  });
  return le(() => {
    K && Z.current.newIndex !== U && (Z.current.newIndex = U), u !== Z.current.containerId && (Z.current.containerId = u), d !== Z.current.items && (Z.current.items = d);
  }, [K, U, u, d]), le(() => {
    if (J === Z.current.activeId)
      return;
    if (J != null && Z.current.activeId == null) {
      Z.current.activeId = J;
      return;
    }
    const Re = setTimeout(() => {
      Z.current.activeId = J;
    }, 50);
    return () => clearTimeout(Re);
  }, [J]), {
    active: D,
    activeIndex: f,
    attributes: T,
    data: k,
    rect: P,
    index: S,
    newIndex: U,
    items: d,
    isOver: N,
    isSorting: K,
    isDragging: $,
    listeners: F,
    node: C,
    overIndex: v,
    over: R,
    setNodeRef: H,
    setActivatorNodeRef: M,
    setDroppableNodeRef: E,
    setDraggableNodeRef: W,
    transform: we ?? G,
    transition: se()
  };
  function se() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      we || // Or to prevent items jumping to back to their "new" position when items change
      re && Z.current.newIndex === S
    )
      return OC;
    if (!(V && !Go(_) || !l) && (K || ie))
      return nn.Transition.toString({
        ...l,
        property: If
      });
  }
}
function $C(e, t) {
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
function Io(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const LC = [ge.Down, ge.Right, ge.Up, ge.Left], BC = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: i,
      over: s,
      scrollableAncestors: a
    }
  } = t;
  if (LC.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const c = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = o.get(u.id);
      if (f)
        switch (e.code) {
          case ge.Down:
            r.top < f.top && c.push(u);
            break;
          case ge.Up:
            r.top > f.top && c.push(u);
            break;
          case ge.Left:
            r.left > f.left && c.push(u);
            break;
          case ge.Right:
            r.left < f.left && c.push(u);
            break;
        }
    });
    const l = fx({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: c
    });
    let d = sf(l, "id");
    if (d === s?.id && l.length > 1 && (d = l[1].id), d != null) {
      const u = i.get(n.id), f = i.get(d), h = f ? o.get(f.id) : null, b = f?.node.current;
      if (b && h && u && f) {
        const v = Vo(b).some((I, P) => a[P] !== I), y = kf(u, f), w = zC(u, f), x = v || !y ? {
          x: 0,
          y: 0
        } : {
          x: w ? r.width - h.width : 0,
          y: w ? r.height - h.height : 0
        }, S = {
          x: h.left,
          y: h.top
        };
        return x.x && x.y ? S : mr(S, x);
      }
    }
  }
};
function kf(e, t) {
  return !Io(e) || !Io(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function zC(e, t) {
  return !Io(e) || !Io(t) || !kf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function jC({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: s, listeners: a, setNodeRef: c, transform: l, transition: d, isDragging: u } = FC({
    id: o(e),
    disabled: i
  }), f = {
    transform: nn.Transform.toString(l),
    transition: d
  };
  return /* @__PURE__ */ L("div", { ref: c, style: f, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !i && (r ? /* @__PURE__ */ g("div", { ...s, ...a, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ g(
        "div",
        {
          ...s,
          ...a,
          className: "absolute inset-0 cursor-grab active:cursor-grabbing outline-none touch-none"
        }
      )
    ))
  ] });
}
function HC({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ g("div", { className: "rotate-2", children: n(e, t, !0) });
}
function KC({
  items: e,
  onChange: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  gridColsClass: i = "page-drag-drop-grid-cols",
  className: s = "",
  renderToolbar: a,
  renderEmptyState: c,
  showDebugInfo: l = !1,
  renderDragOverlay: d,
  isItemDisabled: u,
  canDropAt: f
}) {
  const [h, b] = ce(e);
  le(() => {
    b(e);
  }, [e]);
  const [p, v] = ce(null), y = cx(
    Pc(ia),
    Pc(ra, {
      coordinateGetter: BC
    })
  ), w = (I) => {
    const P = h.find((C) => o(C) === I.active.id);
    P && u && u(P) || v(I.active.id);
  }, x = (I) => {
    const { active: P, over: C } = I;
    if (!C || P.id === C.id) {
      v(null);
      return;
    }
    const N = h.find((_) => o(_) === P.id), E = h.findIndex((_) => o(_) === P.id), D = h.findIndex((_) => o(_) === C.id);
    if (N && u && u(N)) {
      v(null);
      return;
    }
    if (f && !f(N, D, h)) {
      v(null);
      return;
    }
    if (E !== -1 && D !== -1) {
      const _ = aa(h, E, D);
      b(_), t(_);
    }
    v(null);
  }, S = h.find((I) => o(I) === p), k = S ? h.findIndex((I) => o(I) === p) : -1;
  return /* @__PURE__ */ L("div", { className: `w-full ${s}`, children: [
    a && /* @__PURE__ */ g("div", { className: "mb-6", children: a() }),
    h.length === 0 && c ? c() : /* @__PURE__ */ g("div", { className: "mb-6", children: /* @__PURE__ */ L(
      sC,
      {
        sensors: y,
        collisionDetection: dx,
        onDragStart: w,
        onDragEnd: x,
        children: [
          /* @__PURE__ */ g(EC, { items: h.map(o), strategy: ca, children: /* @__PURE__ */ g("div", { className: i, children: h.map((I, P) => /* @__PURE__ */ g(
            jC,
            {
              item: I,
              index: P,
              renderItem: n,
              renderDragIndicator: r,
              keyExtractor: o,
              disabled: u ? u(I) : !1
            },
            o(I)
          )) }) }),
          /* @__PURE__ */ g(IC, { children: S ? d ? /* @__PURE__ */ g("div", { className: "rotate-2 shadow-lg", children: d(S, k) }) : /* @__PURE__ */ g(HC, { item: S, index: k, renderItem: n }) : null })
        ]
      }
    ) }),
    l && /* @__PURE__ */ L("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ g("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ L("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        h.length,
        " | Active: ",
        p || "none"
      ] }),
      /* @__PURE__ */ L("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        h.map((I, P) => `${P + 1}:${o(I).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const WC = $l(
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
function la({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ g("div", { className: fe(WC({ variant: t }), e), ...n });
}
function GC({
  page: e,
  index: t,
  isDragging: n
}) {
  const i = e.strictPosition, s = i === "start" || i === "end";
  return /* @__PURE__ */ L(
    "div",
    {
      className: `flex items-center justify-center border relative rounded-lg bg-white overflow-hidden transition-all ${n ? "opacity-50 border-gray-400 shadow-xl scale-105" : s ? "border-gray-300 bg-gray-50" : "border-gray-200 group-hover/drag-item:border-gray-300 group-hover/drag-item:shadow-md"}`,
      children: [
        /* @__PURE__ */ g(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ g("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ g("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ g("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ g(la, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${s ? "opacity-75" : ""}`, children: s ? /* @__PURE__ */ g(Ni, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ L(Be, { children: [
          /* @__PURE__ */ g("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ g(Ol, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function VC({
  open: e,
  onOpenChange: t,
  pages: n,
  onReorder: r,
  onRemove: o,
  renderThumbnail: i,
  pageComponents: s,
  payload: a,
  setup: c,
  title: l = "Reorder Pages",
  description: d = "Drag and drop pages to change their order.",
  gridColsClass: u = "page-order-grid-cols"
}) {
  const [f, h] = m.useState(n), [b, p] = m.useState(!1), v = (N) => N.id;
  m.useEffect(() => {
    if (!e)
      h(n), p(!1);
    else if (!b)
      h(n);
    else {
      const N = new Set(f.map(v));
      (N.size !== n.length || n.some((D) => !N.has(v(D)))) && h(n);
    }
  }, [n, e, b, f]);
  const y = (N) => {
    h(N), p(!0);
  }, w = () => {
    r(f), p(!1), t(!1);
  }, x = () => {
    h(n), p(!1), t(!1);
  }, S = m.useMemo(() => (!i || typeof i != "function") && s ? Qs({ pageComponents: s, payload: a, setup: c }) : null, [i, s, a, c]), k = (N, E, D) => {
    const _ = N.strictPosition, T = !!o && !(_ === "start" || _ === "end"), W = ($) => {
      $.preventDefault(), $.stopPropagation(), o && (o(N), h((R) => R.filter((M) => v(M) !== v(N))), p(!0));
    }, F = i && typeof i == "function" ? i(N, E, D) : S ? S(N, E, D) : /* @__PURE__ */ g(GC, { page: N, index: E, isDragging: D });
    return /* @__PURE__ */ L("div", { className: "relative inline-block align-top", children: [
      F,
      T && /* @__PURE__ */ L(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: W,
          onPointerDown: ($) => $.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ g(Ol, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ g(wt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, I = () => /* @__PURE__ */ L("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ g("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ g($a, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ g("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ g("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), P = m.useCallback((N) => {
    const E = N.strictPosition;
    return E === "start" || E === "end";
  }, []), C = m.useCallback((N, E, D) => {
    const _ = N.strictPosition;
    if (_ === "start" || _ === "end")
      return !1;
    let B = -1, T = D.length;
    for (let W = 0; W < D.length; W++) {
      const F = D[W].strictPosition;
      F === "start" ? B = W : F === "end" && T === D.length && (T = W);
    }
    return !(E <= B || E >= T);
  }, []);
  return /* @__PURE__ */ g(Zd, { open: e, onOpenChange: (N) => {
    N || x();
  }, children: /* @__PURE__ */ L(
    qs,
    {
      side: "bottom",
      className: "h-[90vh] p-0 gap-0 w-full max-w-none flex flex-col [&>button]:hidden",
      onPointerDownOutside: (N) => {
        N.preventDefault();
      },
      onEscapeKeyDown: (N) => {
        N.preventDefault();
      },
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ g(Xs, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ L("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ g("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ g($a, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ L("div", { className: "flex-1", children: [
            /* @__PURE__ */ g(Zs, { className: "text-base font-medium text-gray-900 leading-tight", children: l }),
            /* @__PURE__ */ g(Js, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ L(la, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            f.length,
            " ",
            f.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ g("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ g("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ g(
          KC,
          {
            items: f,
            onChange: y,
            renderItem: k,
            keyExtractor: v,
            renderEmptyState: I,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: P,
            canDropAt: C
          }
        ) }) }),
        /* @__PURE__ */ L(Qd, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ g(
            ze,
            {
              variant: "outline",
              onClick: x,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ g(
            ze,
            {
              variant: "default",
              onClick: w,
              disabled: !b,
              children: "Save Changes"
            }
          )
        ] })
      ]
    }
  ) });
}
function UC({
  pageId: e,
  templateId: t,
  componentKey: n,
  component: r,
  payload: o,
  pagePayload: i,
  integration: s,
  page: a,
  parentGroup: c,
  setup: l,
  reference: d,
  overlay: u,
  className: f,
  pageNo: h = 0,
  totalPages: b,
  measurementPageNo: p,
  measurementTotalPages: v,
  dataBinding: y,
  flowPageIndex: w = 0,
  flowChunksByFlowId: x,
  measureFlow: S = !1,
  flowMeasurementKey: k,
  flowMeasurementVersion: I,
  onFlowMeasurement: P,
  renderVisible: C = !0,
  renderMode: N = "sheet",
  spread: E
}) {
  const D = typeof u == "function" ? (M) => u({ pageNo: M, pageId: e }) : () => u, _ = n || t || e, T = [_ ? `uhuu-page--${_}` : "", f].filter(Boolean).join(" "), W = (M = h, A = b) => r ? /* @__PURE__ */ g(
    r,
    {
      payload: o,
      pagePayload: i,
      integration: s,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: M,
      totalPages: A,
      page: a,
      parentGroup: c,
      componentKey: n,
      dataBinding: y,
      spread: E
    }
  ) : null, F = m.useMemo(
    () => ({
      mode: "visible",
      pageIndex: w,
      chunksByFlowId: x
    }),
    [w, x]
  ), $ = m.useCallback((M) => {
    k && P?.(k, M);
  }, [k, P]), R = m.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: I,
      registerMeasurement: $
    }),
    [I, $]
  );
  return N === "content" ? /* @__PURE__ */ L(Be, { children: [
    d,
    /* @__PURE__ */ g($n.Provider, { value: F, children: W(h, b) })
  ] }) : /* @__PURE__ */ L(Be, { children: [
    S && P && k && /* @__PURE__ */ g(
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
        children: /* @__PURE__ */ g(so, { setup: l, children: /* @__PURE__ */ g(ur, { className: T, pageNo: h, "data-page-key": _, children: /* @__PURE__ */ g($n.Provider, { value: R, children: W(
          p ?? h,
          v ?? b
        ) }) }) })
      }
    ),
    C && /* @__PURE__ */ g(so, { setup: l, children: /* @__PURE__ */ L(
      ur,
      {
        className: T,
        pageNo: h,
        overlay: ({ pageNo: M }) => D(M),
        "data-page-key": _,
        children: [
          d,
          /* @__PURE__ */ g($n.Provider, { value: F, children: W(h, b) })
        ]
      }
    ) })
  ] });
}
const Nf = m.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g(
    "select",
    {
      className: fe(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
Nf.displayName = "Select";
var YC = Object.defineProperty, rn = (e, t) => YC(e, "name", { value: t, configurable: !0 }), ua = "Switch", [qC, AP] = /* @__PURE__ */ gt(ua), [XC, da] = qC(ua);
function Rf(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: i,
    form: s,
    name: a,
    onCheckedChange: c,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: u
  } = e, [f, h] = Sn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ua
  }), [b, p] = m.useState(null), [v, y] = m.useState(null), w = m.useRef(!1), [x, S] = m.useReducer(
    (P) => P + 1,
    0
  ), k = b ? !!s || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), I = {
    checked: f,
    setChecked: h,
    disabled: i,
    control: b,
    setControl: p,
    name: a,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    userInteractionCount: x,
    onUserInteraction: S,
    required: l,
    defaultChecked: o,
    isFormControl: k,
    bubbleInput: v,
    setBubbleInput: y
  };
  return /* @__PURE__ */ g(XC, { scope: t, ...I, children: Af(u) ? u(I) : r });
}
rn(Rf, "SwitchProvider");
var ZC = "SwitchTrigger", JC = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ rn(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
    const {
      control: i,
      form: s,
      value: a,
      disabled: c,
      checked: l,
      required: d,
      setControl: u,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      onUserInteraction: b,
      isFormControl: p,
      bubbleInput: v
    } = da(ZC, t), y = be(o, u), w = m.useRef(l);
    return m.useEffect(() => {
      const x = s ? i?.ownerDocument.getElementById(s) : i?.form;
      if (x instanceof HTMLFormElement) {
        const S = /* @__PURE__ */ rn(() => f(w.current), "reset");
        return x.addEventListener("reset", S), () => x.removeEventListener("reset", S);
      }
    }, [i, s, f]), /* @__PURE__ */ g(
      xe.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": d,
        "data-state": fa(l),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: a,
        ...r,
        ref: y,
        onClick: oe(n, (x) => {
          b(), f((S) => !S), v && p && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), Ef = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rn(function(t, n) {
    const {
      __scopeSwitch: r,
      name: o,
      checked: i,
      defaultChecked: s,
      required: a,
      disabled: c,
      value: l,
      onCheckedChange: d,
      form: u,
      ...f
    } = t;
    return /* @__PURE__ */ g(
      Rf,
      {
        __scopeSwitch: r,
        checked: i,
        defaultChecked: s,
        disabled: c,
        required: a,
        onCheckedChange: d,
        name: o,
        form: u,
        value: l,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ L(Be, { children: [
          /* @__PURE__ */ g(
            JC,
            {
              ...f,
              ref: n,
              __scopeSwitch: r
            }
          ),
          h && /* @__PURE__ */ g(
            nS,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), QC = "SwitchThumb", eS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ rn(function(t, n) {
    const { __scopeSwitch: r, ...o } = t, i = da(QC, r);
    return /* @__PURE__ */ g(
      xe.span,
      {
        "data-state": fa(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), tS = "SwitchBubbleInput", nS = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rn(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: s,
      userInteractionCount: a,
      checked: c,
      defaultChecked: l,
      required: d,
      disabled: u,
      name: f,
      value: h,
      form: b,
      bubbleInput: p,
      setBubbleInput: v
    } = da(tS, t), y = be(o, v), w = To(i), x = m.useRef(!1), S = m.useRef(c), k = m.useRef(a);
    m.useEffect(() => {
      const P = p;
      if (!P) return;
      const C = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, D = a !== k.current;
      k.current = a;
      const _ = S.current !== c;
      S.current = c;
      const B = !(D && s.current);
      if (_ && E) {
        x.current = !D;
        const T = new Event("click", { bubbles: B });
        E.call(P, c), P.dispatchEvent(T), x.current = !1;
      }
    }, [p, c, s, a]);
    const I = m.useRef(c);
    return /* @__PURE__ */ g(
      xe.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? I.current,
        required: d,
        disabled: u,
        name: f,
        value: h,
        form: b,
        ...r,
        tabIndex: -1,
        ref: y,
        onClick: oe(n, (P) => {
          x.current && P.stopPropagation();
        }),
        style: {
          ...r.style,
          ...w,
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
  }, "SwitchBubbleInput")
);
function Af(e) {
  return typeof e == "function";
}
rn(Af, "isFunction");
function fa(e) {
  return e ? "checked" : "unchecked";
}
rn(fa, "getState");
const Df = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Ef,
  {
    ref: n,
    className: fe(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ g(
      eS,
      {
        className: fe(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Df.displayName = Ef.displayName;
var rS = Object.defineProperty, oS = (e, t) => rS(e, "name", { value: t, configurable: !0 });
function ha(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
oS(ha, "clamp");
var iS = Object.defineProperty, sS = (e, t) => iS(e, "name", { value: t, configurable: !0 });
function Mf(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
sS(Mf, "usePrevious");
var aS = Object.defineProperty, me = (e, t) => aS(e, "name", { value: t, configurable: !0 }), Of = ["PageUp", "PageDown"], _f = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Tf = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Rr = "Slider", [Zi, cS, lS] = /* @__PURE__ */ No(Rr), [ga, DP] = /* @__PURE__ */ gt(Rr, [
  lS
]), [uS, Er] = ga(Rr), Ff = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(t, n) {
    const {
      name: r,
      min: o = 0,
      max: i = 100,
      step: s = 1,
      orientation: a = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: d = [o],
      value: u,
      onValueChange: f = /* @__PURE__ */ me(() => {
      }, "onValueChange"),
      onValueCommit: h = /* @__PURE__ */ me(() => {
      }, "onValueCommit"),
      inverted: b = !1,
      form: p,
      ...v
    } = t, y = m.useRef(/* @__PURE__ */ new Set()), w = m.useRef(0), x = m.useRef(!1), k = a === "horizontal" ? dS : fS, [I, P] = m.useState(null), C = be(n, P), [N = [], E] = Sn({
      prop: u,
      defaultProp: d,
      onChange: /* @__PURE__ */ me(($) => {
        [...y.current][w.current]?.focus({
          preventScroll: !0,
          focusVisible: x.current
        }), x.current = !1, f($);
      }, "onChange")
    }), D = m.useRef(N), _ = m.useRef(N);
    m.useEffect(() => {
      const $ = p ? I?.ownerDocument.getElementById(p) : I?.closest("form");
      if ($ instanceof HTMLFormElement) {
        const R = /* @__PURE__ */ me(() => E(_.current), "reset");
        return $.addEventListener("reset", R), () => $.removeEventListener("reset", R);
      }
    }, [I, p, E]);
    function B($) {
      const R = Wf(N, $);
      F($, R);
    }
    me(B, "handleSlideStart");
    function T($) {
      F($, w.current);
    }
    me(T, "handleSlideMove");
    function W() {
      String(N) !== String(D.current) && h(N);
    }
    me(W, "handleSlideEnd");
    function F($, R, { commit: M } = { commit: !1 }) {
      const A = ma(s), H = cr(Math.round(($ - o) / s) * s + o, A), K = ha(H, [o, i]);
      E((j = []) => {
        const V = Hf(j, K, R);
        if (Uf(V, l * s)) {
          w.current = V.indexOf(K);
          const Y = String(V) !== String(j);
          return Y && M && h(V), Y ? V : j;
        } else
          return j;
      });
    }
    return me(F, "updateValues"), /* @__PURE__ */ g(
      uS,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: c,
        min: o,
        max: i,
        valueIndexToChangeRef: w,
        thumbs: y.current,
        values: N,
        orientation: a,
        form: p,
        children: /* @__PURE__ */ g(Zi.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ g(Zi.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ g(
          k,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...v,
            ref: C,
            onPointerDown: oe(v.onPointerDown, () => {
              c || (D.current = N, x.current = !1);
            }),
            min: o,
            max: i,
            inverted: b,
            onSlideStart: c ? void 0 : B,
            onSlideMove: c ? void 0 : T,
            onSlideEnd: c ? void 0 : W,
            onHomeKeyDown: () => {
              c || (x.current = !0, F(o, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (x.current = !0, F(i, N.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: $, direction: R }) => {
              if (!c) {
                x.current = !0;
                const H = Of.includes($.key) || $.shiftKey && _f.includes($.key) ? 10 : 1, K = w.current, j = N[K], V = Yf(j, {
                  min: o,
                  step: s,
                  direction: R,
                  multiplier: H
                });
                F(V, K, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [$f, Lf] = ga(Rr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), dS = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(t, n) {
    const {
      min: r,
      max: o,
      dir: i,
      inverted: s,
      onSlideStart: a,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: d,
      ...u
    } = t, [f, h] = m.useState(null), b = be(n, h), p = m.useRef(void 0), v = Ro(i), y = v === "ltr", w = y && !s || !y && s;
    function x(S) {
      const k = p.current || f.getBoundingClientRect(), I = [0, k.width], C = qo(I, w ? [r, o] : [o, r]);
      return p.current = k, C(S - k.left);
    }
    return me(x, "getValueFromPointer"), /* @__PURE__ */ g(
      $f,
      {
        scope: t.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ g(
          Bf,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...u,
            ref: b,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (S) => {
              const k = x(S.clientX);
              a?.(k);
            },
            onSlideMove: (S) => {
              const k = x(S.clientX);
              c?.(k);
            },
            onSlideEnd: () => {
              p.current = void 0, l?.();
            },
            onStepKeyDown: (S) => {
              const I = Tf[w ? "from-left" : "from-right"].includes(S.key);
              d?.({ event: S, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), fS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const {
      min: r,
      max: o,
      inverted: i,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...d
    } = t, u = m.useRef(null), f = be(n, u), h = m.useRef(void 0), b = !i;
    function p(v) {
      const y = h.current || u.current.getBoundingClientRect(), w = [0, y.height], S = qo(w, b ? [o, r] : [r, o]);
      return h.current = y, S(v - y.top);
    }
    return me(p, "getValueFromPointer"), /* @__PURE__ */ g(
      $f,
      {
        scope: t.__scopeSlider,
        startEdge: b ? "bottom" : "top",
        endEdge: b ? "top" : "bottom",
        size: "height",
        direction: b ? 1 : -1,
        children: /* @__PURE__ */ g(
          Bf,
          {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const y = p(v.clientY);
              s?.(y);
            },
            onSlideMove: (v) => {
              const y = p(v.clientY);
              a?.(y);
            },
            onSlideEnd: () => {
              h.current = void 0, c?.();
            },
            onStepKeyDown: (v) => {
              const w = Tf[b ? "from-bottom" : "from-top"].includes(v.key);
              l?.({ event: v, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), Bf = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const {
      __scopeSlider: r,
      onSlideStart: o,
      onSlideMove: i,
      onSlideEnd: s,
      onHomeKeyDown: a,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...d
    } = t, u = Er(Rr, r);
    return /* @__PURE__ */ g(
      xe.span,
      {
        ...d,
        ref: n,
        onKeyDown: oe(t.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : Of.concat(_f).includes(f.key) && (l(f), f.preventDefault());
        }),
        onPointerDown: oe(t.onPointerDown, (f) => {
          const h = f.target;
          h.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : o(f);
        }),
        onPointerMove: oe(t.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: oe(t.onPointerUp, (f) => {
          const h = f.target;
          h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), s(f));
        })
      }
    );
  }, "SliderImpl")
), hS = "SliderTrack", gS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Er(hS, r);
    return /* @__PURE__ */ g(
      xe.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...o,
        ref: n
      }
    );
  }, "SliderTrack")
), Lc = "SliderRange", pS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Er(Lc, r), s = Lf(Lc, r), a = m.useRef(null), c = be(n, a), l = i.values.length, d = i.values.map(
      (h) => pa(h, i.min, i.max)
    ), u = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
    return /* @__PURE__ */ g(
      xe.span,
      {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: c,
        style: {
          ...t.style,
          [s.startEdge]: u + "%",
          [s.endEdge]: f + "%"
        }
      }
    );
  }, "SliderRange")
), mS = "SliderThumb", [vS, zf] = ga(mS), bS = "SliderThumbProvider";
function jf(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, i = Er(bS, t), s = cS(t), [a, c] = m.useState(null), l = m.useMemo(
    () => a ? s().findIndex((v) => v.ref.current === a) : -1,
    [s, a]
  ), d = To(a), u = a ? !!i.form || !!a.closest("form") : !0, f = i.values[l], h = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0), b = f === void 0 ? 0 : pa(f, i.min, i.max);
  m.useEffect(() => {
    if (a)
      return i.thumbs.add(a), () => {
        i.thumbs.delete(a);
      };
  }, [a, i.thumbs]);
  const p = {
    value: f,
    name: h,
    form: i.form,
    isFormControl: u,
    index: l,
    thumb: a,
    onThumbChange: c,
    percent: b,
    size: d
  };
  return /* @__PURE__ */ g(vS, { scope: t, ...p, children: qf(o) ? o(p) : r });
}
me(jf, "SliderThumbProvider");
var xi = "SliderThumbTrigger", yS = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Er(xi, r), s = Lf(xi, r), { index: a, value: c, percent: l, size: d, onThumbChange: u } = zf(
      xi,
      r
    ), f = be(n, u), h = Kf(a, i.values.length), b = d?.[s.size], p = b ? Gf(b, l, s.direction) : 0;
    return /* @__PURE__ */ g(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${p}px)`
        },
        children: /* @__PURE__ */ g(Zi.ItemSlot, { scope: r, children: /* @__PURE__ */ g(
          xe.span,
          {
            role: "slider",
            "aria-label": t["aria-label"] || h,
            "aria-valuemin": i.min,
            "aria-valuenow": c,
            "aria-valuemax": i.max,
            "aria-orientation": i.orientation,
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            tabIndex: i.disabled ? void 0 : 0,
            ...o,
            ref: f,
            style: c === void 0 ? { display: "none" } : t.style,
            onFocus: oe(t.onFocus, () => {
              i.valueIndexToChangeRef.current = a;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), wS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, name: o, ...i } = t;
    return /* @__PURE__ */ g(
      jf,
      {
        __scopeSlider: r,
        name: o,
        internal_do_not_use_render: ({ index: s, isFormControl: a }) => /* @__PURE__ */ L(Be, { children: [
          /* @__PURE__ */ g(
            yS,
            {
              ...i,
              ref: n,
              __scopeSlider: r
            }
          ),
          a ? /* @__PURE__ */ g(
            CS,
            {
              __scopeSlider: r
            },
            s
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), xS = "SliderBubbleInput", CS = /* @__PURE__ */ m.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function({ __scopeSlider: t, ...n }, r) {
    const { value: o, name: i, form: s } = zf(xS, t), a = m.useRef(null), c = be(a, r), l = Mf(o);
    return m.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
      if (l !== o && h) {
        const b = new Event("input", { bubbles: !0 });
        h.call(d, o), d.dispatchEvent(b);
      }
    }, [l, o]), /* @__PURE__ */ g(
      xe.input,
      {
        style: { display: "none" },
        name: i,
        form: s,
        ...n,
        ref: c,
        defaultValue: o
      }
    );
  }, "SliderBubbleInput")
);
function Hf(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
me(Hf, "getNextSortedValues");
function pa(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return ha(i, [0, 100]);
}
me(pa, "convertValueToPercentage");
function Kf(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
me(Kf, "getLabel");
function Wf(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
me(Wf, "getClosestValueIndex");
function Gf(e, t, n) {
  const r = e / 2, i = qo([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
me(Gf, "getThumbInBoundsOffset");
function Vf(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
me(Vf, "getStepsBetweenValues");
function Uf(e, t) {
  if (t > 0) {
    const n = Vf(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
me(Uf, "hasMinStepsBetweenValues");
function qo(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
me(qo, "linearScale");
function ma(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), i = r.split(".")[1] || "", s = Number(o);
    return Math.max(0, i.length - s);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
me(ma, "getDecimalCount");
function cr(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
me(cr, "roundValue");
function Yf(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const i = ma(n), s = (e - t) / n, a = Math.round(s), c = cr(a * n + t, i) === cr(e, i);
  let l;
  return c ? l = a + o * r : r > 0 ? l = Math.ceil(s) : l = Math.floor(s), cr(l * n + t, i);
}
me(Yf, "getNextStepValue");
function qf(e) {
  return typeof e == "function";
}
me(qf, "isFunction");
const va = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L(
  Ff,
  {
    ref: n,
    className: fe(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ g(gS, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ g(pS, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ g(wS, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
va.displayName = Ff.displayName;
var SS = Object.defineProperty, PS = (e, t) => SS(e, "name", { value: t, configurable: !0 }), IS = /* @__PURE__ */ m.forwardRef(
  /* @__PURE__ */ PS(function(t, n) {
    return /* @__PURE__ */ g(
      xe.label,
      {
        ...t,
        ref: n,
        onMouseDown: (r) => {
          r.target.closest("button, input, select, textarea") || (t.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
        }
      }
    );
  }, "Label")
), Xf = IS;
const Fn = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Xf,
  {
    ref: n,
    className: fe(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Fn.displayName = Xf.displayName;
function Zf(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((s) => typeof s == "function" ? s(o) : s === o.id || s === o.templateId || o.componentKey === s) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function kS({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = Zf(e, t), o = (i) => {
    const s = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ g(Fn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ g(
            Nf,
            {
              id: i.id,
              value: String(s),
              onChange: (a) => n(i, t, a.target.value),
              className: "w-full text-sm",
              children: i.options.map((a) => /* @__PURE__ */ g("option", { value: a.value, children: a.label }, a.value))
            }
          )
        ] }, i.id);
      case "toggle": {
        const a = typeof s == "boolean" ? s : s === "true";
        return /* @__PURE__ */ L("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ g(Fn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ g(
            Df,
            {
              id: i.id,
              checked: a,
              onCheckedChange: (c) => n(i, t, String(c))
            }
          )
        ] }, i.id);
      }
      case "slider": {
        const a = typeof s == "number" ? s : Number(s) || i.min;
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ L("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ g(Fn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ g("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: a })
          ] }),
          /* @__PURE__ */ g(
            va,
            {
              id: i.id,
              min: i.min,
              max: i.max,
              step: i.step,
              value: [a],
              onValueChange: (c) => n(i, t, String(c[0]))
            }
          )
        ] }, i.id);
      }
      case "counter": {
        const a = typeof s == "number" ? s : Number(s) || i.min;
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ g(Fn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ g(
              ze,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const c = Math.max(i.min, a - i.step);
                  n(i, t, String(c));
                },
                disabled: a <= i.min,
                type: "button",
                children: /* @__PURE__ */ g(Cp, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ g("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ g("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: a }) }),
            /* @__PURE__ */ g(
              ze,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const c = Math.min(i.max, a + i.step);
                  n(i, t, String(c));
                },
                disabled: a >= i.max,
                type: "button",
                children: /* @__PURE__ */ g(wt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const a = String(s);
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ g(Fn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ g("div", { className: "flex flex-wrap gap-1.5", children: i.options.map((c) => {
            const l = a === c.value;
            return /* @__PURE__ */ g(
              "button",
              {
                onClick: () => n(i, t, c.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${l ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: c.hex || c.value },
                type: "button",
                title: `${c.label}${c.hex ? ` (${c.hex})` : ""}`,
                children: l && /* @__PURE__ */ g(fs, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
              },
              c.value
            );
          }) })
        ] }, i.id);
      }
      default:
        return console.warn(`Unknown option type: ${i.type}`), null;
    }
  };
  return /* @__PURE__ */ g("div", { className: "space-y-3", children: r.map((i) => o(i)) });
}
function NS({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || Zf(e, t).length === 0 ? null : /* @__PURE__ */ L(xr, { modal: !1, children: [
    /* @__PURE__ */ g(Cr, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ L(
      ze,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ g(Ml, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ g("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ g(Yn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ g(
      kS,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function RS({
  name: e,
  canRename: t,
  canMoveUp: n,
  canMoveDown: r,
  canAddPage: o,
  canDuplicate: i,
  canDelete: s,
  onRename: a,
  onMoveUp: c,
  onMoveDown: l,
  onAddPage: d,
  onDuplicate: u,
  onDelete: f
}) {
  const [h, b] = ce(!1), [p, v] = ce(!1), [y, w] = ce(e), x = de(null);
  le(() => {
    w(e);
  }, [e]), le(() => {
    p && setTimeout(() => {
      x.current?.focus(), x.current?.select();
    }, 10);
  }, [p]);
  const S = () => {
    const P = y.trim();
    P && P !== e && a?.(P), v(!1);
  }, k = n || r || o || i || s, I = t || k;
  return p ? /* @__PURE__ */ g(
    "input",
    {
      ref: x,
      value: y,
      onChange: (P) => w(P.target.value),
      onKeyDown: (P) => {
        P.key === "Enter" && S(), P.key === "Escape" && (w(e), v(!1)), P.stopPropagation();
      },
      onBlur: S,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : I ? /* @__PURE__ */ L(xr, { open: h, onOpenChange: b, modal: !1, children: [
    /* @__PURE__ */ g(Cr, { asChild: !0, children: /* @__PURE__ */ L(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ g("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ g(Dl, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ L(Yn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ L(qe, { onSelect: (P) => {
        P.preventDefault(), b(!1), v(!0);
      }, children: [
        /* @__PURE__ */ g(Pp, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && k && /* @__PURE__ */ g(yn, {}),
      n && /* @__PURE__ */ L(qe, { onClick: c, children: [
        /* @__PURE__ */ g(ip, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ L(qe, { onClick: l, children: [
        /* @__PURE__ */ g(np, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ g(yn, {}),
      o && /* @__PURE__ */ L(qe, { onClick: d, children: [
        /* @__PURE__ */ g(wt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ L(qe, { onClick: u, children: [
        /* @__PURE__ */ g(pp, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      s && /* @__PURE__ */ g(yn, {}),
      s && /* @__PURE__ */ L(qe, { onClick: f, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ g(Ep, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ g("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function oo(e) {
  if (!e || typeof e != "object" || !("binding" in e)) return e;
  const { binding: t, ...n } = e;
  return n;
}
function Jf(e, t) {
  return !!on(e?.binding) && t?.mode === "cover";
}
function ES({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
  const r = { active: !1, plan: null, setup: oo(e), warnings: [] };
  if (!Jf(e, t)) return r;
  const o = on(e.binding), s = { ...lr.resolveDimensions(e), bleed: lr.clampBleed(e.bleed), binding: o }, a = qc({ ...s, coverPages: n }), c = Sh({
    ...s,
    coverPageCount: t.coverPageCount ?? 2,
    coverPages: n,
    flowCoverPages: n.filter((l) => l && l.hasFlow).length
  });
  return a ? {
    active: !0,
    plan: a,
    setup: { ...e, binding: o, preview: "single_page" },
    warnings: c
  } : { ...r, warnings: c };
}
function AS(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: s,
    setup: a,
    stateKey: c = kn,
    resolveNewItem: l,
    notifyError: d,
    pageFilter: u
  } = e, [f, h] = ce(t), [b, p] = ce(!1), v = de(t);
  le(() => {
    try {
      const F = JSON.stringify(v.current), $ = JSON.stringify(t);
      F !== $ && (v.current = t, h(t));
    } catch {
      v.current !== t && (v.current = t, h(t));
    }
  }, [t]);
  const y = Se(Sr), w = pe((F) => {
    h(F);
    const $ = Td(F, c);
    y?.mergePageEditorState && y.mergePageEditorState(F, c), o?.($), r?.(F, $);
  }, [r, o, c, y]), x = ee(() => {
    const F = /* @__PURE__ */ new Map();
    return f.forEach(($) => {
      const R = $.templateId ?? $.id;
      F.set(R, (F.get(R) ?? 0) + 1), We($) && $.pages?.forEach((M) => {
        const A = M.templateId ?? M.id;
        F.set(A, (F.get(A) ?? 0) + 1);
      });
    }), F;
  }, [f]), S = ee(() => n.filter((F) => {
    if (F.kind === "page") {
      const K = F, j = K.templateId ?? K.id, V = x.get(j) ?? 0, Y = K.repeatable ?? !1, z = K.maxInstances ?? null;
      return !(!Y && V > 0 || z !== null && V >= z);
    }
    const $ = F, R = $.templateId ?? $.id, M = x.get(R) ?? 0, A = $.repeatable ?? !1, H = $.maxInstances ?? null;
    return !(!A && M > 0 || A && H !== null && M >= H);
  }), [n, x]), k = ee(() => Ot(f), [f]), I = pe(async (F, $) => {
    const R = (z) => z ? typeof z == "string" ? z : z.mode ?? "optional" : "none", M = (z, G) => {
      if (!z) return [];
      if (Array.isArray(z)) return z;
      try {
        const U = z(G);
        if (!Array.isArray(U))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof U), [];
        const J = U.filter((Z) => typeof Z == "string");
        return J.length !== U.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), J;
      } catch (U) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", U), [];
      }
    }, H = ((z) => {
      if (z.kind === "page") {
        const re = z, ie = re.templateId ?? re.id, we = re.componentKey ?? re.id;
        return $d(ie, we, {
          label: re.label,
          className: re.className,
          repeatable: re.repeatable,
          maxInstances: re.maxInstances,
          integration: re.integration,
          strictPosition: re.strictPosition
        });
      }
      const G = z, U = G.templateId ?? G.id, J = {
        payload: s,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, Z = M(G.pageComponentKeys, J);
      return Ld(U, Z, {
        label: G.label,
        repeatable: G.repeatable ?? !1,
        maxInstances: G.maxInstances ?? null,
        integration: G.integration,
        strictPosition: G.strictPosition
      });
    })(F);
    typeof window < "u" && window.$uhuu?.debug;
    let K, j = H;
    if (l)
      j = await l(H);
    else {
      const z = R(H.integration);
      let G = !1;
      if (z !== "none" && typeof window < "u") {
        const U = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        U && (K = await U({ item: H, mode: z }), K == null && z === "required" && (G = !0));
      }
      if (G) return { success: !1 };
    }
    if (j === null) return { success: !1 };
    const V = j ?? H;
    if (K !== void 0 && y?.setIntegrationPayload) {
      const z = V.id;
      y.setIntegrationPayload(z, K);
    }
    return w(((z, G, U) => {
      const J = G.strictPosition;
      if (J === "start") return [G, ...z];
      if (J === "end") return [...z, G];
      const Z = [], re = [], ie = [];
      if (z.forEach((se) => {
        const Re = se.strictPosition;
        Re === "start" ? Z.push(se) : Re === "end" ? ie.push(se) : re.push(se);
      }), !U || U.mode === "end")
        return [...Z, ...re, G, ...ie];
      const we = re.findIndex((se) => se.id === U.anchorId);
      return we === -1 ? z.find((Je) => Je.id === U.anchorId)?.strictPosition === "start" ? [...Z, G, ...re, ...ie] : [...Z, ...re, G, ...ie] : (U.mode === "before" ? re.splice(we, 0, G) : re.splice(we + 1, 0, G), [...Z, ...re, ...ie]);
    })(f, V, $)), { success: !0, insertedId: V.id };
  }, [f, w, l, y]), P = pe((F) => {
    const $ = (M) => {
      d ? d(M) : alert(M);
    }, R = f.find((M) => M.id === F);
    if (R) {
      if (Ot(f) <= 1) {
        $("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (y?.removeIntegrationPayload) {
        const A = R.id;
        y.payload?.integrations?.[A] !== void 0 && y.removeIntegrationPayload(A);
      }
      w(f.filter((A) => A.id !== F));
      return;
    }
    for (const M of f)
      if (We(M) && M.pages.some((A) => A.id === F)) {
        if (Ot(f) <= 1) {
          $("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (M.pages.length === 1) {
          if (y?.removeIntegrationPayload) {
            const H = M.id;
            y.payload?.integrations?.[H] !== void 0 && y.removeIntegrationPayload(H);
          }
          w(f.filter((H) => H.id !== M.id));
        } else
          w(f.map((H) => H.id === M.id && We(H) ? {
            ...H,
            pages: H.pages.filter((K) => K.id !== F)
          } : H));
        return;
      }
  }, [f, d, w, y]), C = pe((F, $) => {
    w(f.map((R) => R.id === F ? We(R) ? {
      ...R,
      ...$
    } : { ...R, ...$ } : R));
  }, [f, w]), N = pe((F) => {
    w(F);
  }, [w]), E = ee(() => {
    const F = e0(f);
    return u ? i0(F, u) : F;
  }, [f, u]), D = pe((F) => {
    const $ = [];
    return E.forEach((R) => {
      We(R) ? (R.pages ?? []).forEach((A) => {
        $.push(F(A, R));
      }) : $.push(F(R, R));
    }), $;
  }, [E]), _ = ee(
    () => t0(E),
    [E]
  ), B = pe((F) => {
    const $ = n0(F, f);
    w(((M) => {
      const A = [], H = [], K = [];
      return M.forEach((j) => {
        const V = j.strictPosition;
        V === "start" ? A.push(j) : V === "end" ? K.push(j) : H.push(j);
      }), [...A, ...H, ...K];
    })($));
  }, [f, w]), T = pe(() => {
    p(!0);
  }, []), W = ee(() => {
    if (i)
      return Qs({ pageComponents: i, payload: s, setup: a });
  }, [i, s, a]);
  return {
    items: f,
    itemsWithPageNum: E,
    totalPageCount: k,
    availableItemsToAdd: S,
    addItem: I,
    removeItem: P,
    updateItemFields: C,
    reorderItems: N,
    addDialogOpen: b,
    setAddDialogOpen: p,
    openAddDialog: T,
    renderItems: D,
    itemsForReorder: _,
    handleReorder: B,
    defaultRenderThumbnail: W
  };
}
function DS({
  items: e,
  reorderItems: t,
  availableItemsToAdd: n,
  setPendingInsertPosition: r,
  openAddDialog: o
}) {
  const i = ee(
    () => e.filter((a) => !a.strictPosition),
    [e]
  );
  return pe(
    (a, c) => {
      if (!a) return {};
      const l = a.id, d = i.findIndex((v) => v.id === l), u = d !== -1, f = u && d > 0 ? () => {
        const v = [...e], y = v.findIndex((w) => w.id === l);
        y < 1 || ([v[y - 1], v[y]] = [v[y], v[y - 1]], t(v));
      } : void 0, h = u && d < i.length - 1 ? () => {
        const v = [...e], y = v.findIndex((w) => w.id === l);
        y < 0 || y >= v.length - 1 || ([v[y], v[y + 1]] = [v[y + 1], v[y]], t(v));
      } : void 0, b = u && a.repeatable ? () => {
        const y = { ...e.find((S) => S.id === l) ?? a, id: `${l}_copy_${Date.now()}` }, w = [...e], x = w.findIndex((S) => S.id === l);
        w.splice(x < 0 ? w.length : x + 1, 0, y), t(w);
      } : void 0;
      return { onAddPage: c && n.length > 0 ? () => {
        r({ mode: "before", anchorId: c }), o();
      } : void 0, onMoveUp: f, onMoveDown: h, onDuplicate: b };
    },
    [e, i, t, n, r, o]
  );
}
function MS(e = [], t = {}) {
  const n = [];
  let r = 1;
  for (const o of e) {
    const i = o.hasFlow ? t[o.flowKey] : void 0, s = Object.values(i?.flows ?? {}), a = Math.max(1, ...s.map((c) => c.length));
    for (let c = 0; c < a; c += 1)
      n.push({
        ...o,
        pageNum: r++,
        virtualPageId: c === 0 ? o.id : `${o.id}__flow_${c + 1}`,
        virtualPageIndex: c,
        virtualPageCount: a,
        flowChunksByFlowId: i?.flows
      });
  }
  return n;
}
function OS({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = ce({
    layoutKey: n,
    layouts: {}
  }), i = r.layoutKey === n ? r.layouts : {}, s = ee(
    () => e.filter((h) => h.hasFlow).map((h) => h.flowKey).join("|"),
    [e]
  ), a = ee(
    () => new Set(s ? s.split("|") : []),
    [s]
  ), c = ee(() => {
    const h = {};
    for (const b of e) {
      if (!b.hasFlow) continue;
      const p = i[b.flowKey];
      p && (h[b.flowKey] = p);
    }
    return h;
  }, [i, e]), l = pe((h, b) => {
    a.has(h) && o((p) => {
      const v = p.layoutKey === n ? p.layouts : {}, y = {};
      let w = !1;
      for (const [k, I] of Object.entries(v))
        a.has(k) ? y[k] = I : w = !0;
      const x = y[h] ?? { flows: {}, signatures: {} }, S = x.signatures?.[b.flowId];
      return p.layoutKey === n && S === b.signature && !w ? p : {
        layoutKey: n,
        layouts: {
          ...y,
          [h]: {
            flows: {
              ...x.flows,
              [b.flowId]: b.chunks
            },
            signatures: {
              ...x.signatures,
              [b.flowId]: b.signature
            }
          }
        }
      };
    });
  }, [a, n]), d = ee(
    () => MS(e, c),
    [e, c]
  ), u = d.length, f = ee(
    () => d.filter((h) => s0(h.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: f,
    virtualTotalPageCount: u,
    registerMeasurement: l
  };
}
function Bc(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function _S(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function TS({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = jd(e, t, n), s = n && We(n) ? n.id : void 0, a = `pages.${t.id}`, c = s ? `pages.${s}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: s,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (l) => yc(i.instanceId, l)
    },
    paths: {
      integration: (l) => yc(i.instanceId, l),
      page: (l) => Bc(a, l),
      group: (l) => Bc(c, l),
      document: (l) => l ?? null
    },
    defaults: {
      imageGalleryPath: _S(
        e,
        i.integration,
        o
      )
    }
  };
}
const zc = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, i = r?.[o], s = typeof e == "string" ? i?.componentKey ?? o : e.componentKey ?? i?.componentKey ?? e.id, a = t ?? o, c = (typeof e == "string" ? void 0 : e.repeatable) ?? i?.repeatable ?? !1, l = (typeof e == "string" ? void 0 : e.maxInstances) ?? i?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? i?.label, u = (typeof e == "string" ? void 0 : e.className) ?? i?.className, f = (typeof e == "string" ? void 0 : e.component) ?? i?.component, h = (typeof e == "string" ? void 0 : e.integration) ?? i?.integration, b = (typeof e == "string" ? void 0 : e.strictPosition) ?? i?.strictPosition, p = (typeof e == "string" ? void 0 : e.hasFlow) ?? i?.hasFlow;
  return n ? {
    kind: "page",
    id: o,
    componentKey: s,
    templateId: a,
    label: d,
    className: u,
    repeatable: c,
    maxInstances: l,
    integration: h,
    component: f,
    strictPosition: b,
    hasFlow: p,
    ...typeof e == "string" ? {} : e
  } : $d(a, s, {
    label: d,
    className: u,
    repeatable: c,
    maxInstances: l,
    integration: h,
    component: f,
    strictPosition: b,
    hasFlow: p,
    ...typeof e == "string" ? {} : e
  });
}, jc = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, s = $S(e.pageComponentKeys, o).map((a) => {
    const c = r?.[a], l = c?.dataKey, d = c?.hasFlow;
    return l || d ? { key: a, ...l ? { dataKey: l } : {}, ...d ? { hasFlow: d } : {} } : a;
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
      pages: s.map((l, d) => {
        const u = typeof l == "string" ? l : l.key, f = typeof l == "string" ? void 0 : l.dataKey;
        return {
          id: `${a}__${f ?? u}__${d}`,
          componentKey: u,
          templateId: u,
          ...f ? { dataKey: f } : {},
          ...r?.[u]?.hasFlow ? { hasFlow: !0 } : {}
        };
      })
    };
  }
  return Ld(e.id, s, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, FS = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], $S = (e, t) => {
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
}, LS = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: s
  } = e, a = FS(n), c = /* @__PURE__ */ new Map();
  a.forEach((p) => c.set(p.id, p));
  const l = r.length ? r : Object.keys(o), d = { ...i };
  Object.entries(o).forEach(([p, v]) => {
    v.component && (d[p] = v.component);
  });
  const u = t.map((p) => {
    if (typeof p == "string") {
      const y = c.get(p);
      return y ? jc(y, !0, s, o) : zc(p, void 0, !0, o);
    }
    return p.pageComponentKeys !== void 0 ? jc(p, !0, s, o) : zc(p, void 0, !0, o);
  }), f = a.map((p) => ({
    kind: "group",
    id: p.id,
    // Template ID
    templateId: p.id,
    label: p.label,
    thumbnail: p.thumbnail,
    pageComponentKeys: p.pageComponentKeys,
    // Keep original (function or array)
    repeatable: p.repeatable ?? !1,
    maxInstances: p.maxInstances ?? null,
    integration: p.integration,
    strictPosition: p.strictPosition
  })), b = [
    ...l.filter((p) => o?.[p]?.allowAsSinglePage !== !1).map((p) => {
      const v = o?.[p];
      return {
        kind: "page",
        id: p,
        // Template ID
        templateId: p,
        componentKey: v?.componentKey ?? p,
        label: v?.label,
        className: v?.className,
        repeatable: v?.repeatable ?? !1,
        maxInstances: v?.maxInstances ?? null,
        thumbnail: v?.thumbnail,
        integration: v?.integration,
        strictPosition: v?.strictPosition,
        hasFlow: v?.hasFlow
      };
    }),
    ...f
  ];
  return { initialItems: u, availableItems: b, pageComponents: d };
};
var BS = Object.defineProperty, Bt = (e, t) => BS(e, "name", { value: t, configurable: !0 }), zS = "AlertDialog", [jS, MP] = /* @__PURE__ */ gt(zS, [
  Gd
]), zt = Gd(), HS = /* @__PURE__ */ Bt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = zt(t);
  return /* @__PURE__ */ g(Vd, { ...r, ...n, modal: !0 });
}, "AlertDialog");
m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ g($0, { ...i, ...o, ref: n });
  }, "AlertDialogTrigger")
);
var KS = /* @__PURE__ */ Bt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = zt(t);
  return /* @__PURE__ */ g(qd, { ...r, ...n });
}, "AlertDialogPortal"), WS = m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ g(Ws, { ...i, ...o, ref: n });
  }, "AlertDialogOverlay")
), GS = "AlertDialogContent", [VS, US] = jS(GS), YS = m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, children: o, ...i } = t, s = zt(r), a = m.useRef(null), c = be(n, a), l = m.useRef(null);
    return /* @__PURE__ */ g(VS, { scope: r, cancelRef: l, children: /* @__PURE__ */ g(
      Gs,
      {
        role: "alertdialog",
        ...s,
        ...i,
        ref: c,
        onOpenAutoFocus: oe(i.onOpenAutoFocus, (d) => {
          d.preventDefault(), l.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (d) => d.preventDefault(),
        onInteractOutside: (d) => d.preventDefault(),
        children: o
      }
    ) });
  }, "AlertDialogContent")
), qS = m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ g(Vs, { ...i, ...o, ref: n });
  }, "AlertDialogTitle")
), XS = m.forwardRef(/* @__PURE__ */ Bt(function(t, n) {
  const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
  return /* @__PURE__ */ g(Us, { ...i, ...o, ref: n });
}, "AlertDialogDescription")), ZS = m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ g(Ys, { ...i, ...o, ref: n });
  }, "AlertDialogAction")
), JS = "AlertDialogCancel", QS = m.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, { cancelRef: i } = US(JS, r), s = zt(r), a = be(n, i);
    return /* @__PURE__ */ g(Ys, { ...s, ...o, ref: a });
  }, "AlertDialogCancel")
), eP = HS, tP = KS, Qf = WS, eh = YS, th = ZS, nh = QS, rh = qS, oh = XS;
const nP = eP, rP = tP, ih = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  Qf,
  {
    ref: n,
    className: fe(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ih.displayName = Qf.displayName;
const sh = m.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = hs();
  return /* @__PURE__ */ L(rP, { container: r || void 0, children: [
    /* @__PURE__ */ g(ih, {}),
    /* @__PURE__ */ g(
      eh,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: fe(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
sh.displayName = eh.displayName;
const ah = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g("div", { className: fe("flex flex-col gap-2 text-left", e), ...t });
ah.displayName = "AlertDialogHeader";
const ch = ({
  className: e,
  ...t
}) => /* @__PURE__ */ g(
  "div",
  {
    className: fe("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
ch.displayName = "AlertDialogFooter";
const lh = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  rh,
  {
    ref: n,
    className: fe("text-base font-semibold text-gray-900", e),
    ...t
  }
));
lh.displayName = rh.displayName;
const uh = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  oh,
  {
    ref: n,
    className: fe("text-sm text-gray-600", e),
    ...t
  }
));
uh.displayName = oh.displayName;
const dh = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  th,
  {
    ref: n,
    className: fe(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
dh.displayName = th.displayName;
const oP = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ g(
  nh,
  {
    ref: n,
    className: fe(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
oP.displayName = nh.displayName;
const Ci = "__edit__", Si = "__print__";
function Hc({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ L(
    qe,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ g(fs, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ g("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ g("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function Kc({ label: e, value: t }) {
  return /* @__PURE__ */ L(Id, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ g("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ L("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ g("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ g(dp, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function iP({
  modes: e,
  selectedMode: t,
  onModeChange: n,
  interactive: r,
  onInteractiveChange: o,
  hasReferenceRenderer: i = !1,
  referenceOpacity: s = 50,
  onReferenceOpacityChange: a,
  brandKits: c,
  activeBrandKitId: l,
  onSelectBrandKit: d,
  onAddBrandKit: u
}) {
  const f = e ? Object.keys(e) : [], h = [
    { value: Ci, label: "Edit" },
    ...f.length > 0 ? f.map((S) => ({ value: S, label: e[S].label })) : [{ value: Si, label: "Print" }]
  ], b = r ? Ci : t || f[0] || Si, p = h.find((S) => S.value === b)?.label ?? "Edit", v = (S) => {
    if (S === Ci) {
      o(!0);
      return;
    }
    o(!1), S !== Si && e && e[S] && n?.(S, e[S]);
  }, y = !!c && c.length > 0, w = c?.find((S) => S.id === l)?.name, x = () => {
    const S = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    S && S.trim() && u?.(S.trim());
  };
  return /* @__PURE__ */ L(xr, { modal: !1, children: [
    /* @__PURE__ */ g(Cr, { asChild: !0, children: /* @__PURE__ */ L(
      ze,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ g(ap, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ g("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ L(Yn, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ L(lc, { children: [
        /* @__PURE__ */ g(Kc, { label: "Print Preview", value: p }),
        /* @__PURE__ */ g(Wi, { className: "min-w-[180px]", children: h.map((S) => /* @__PURE__ */ g(
          Hc,
          {
            checked: b === S.value,
            label: S.label,
            onSelect: () => v(S.value)
          },
          S.value
        )) })
      ] }),
      y && /* @__PURE__ */ L(lc, { children: [
        /* @__PURE__ */ g(Kc, { label: "Brand Kit", value: w }),
        /* @__PURE__ */ L(Wi, { className: "min-w-[200px]", children: [
          c.map((S) => /* @__PURE__ */ g(
            Hc,
            {
              checked: l === S.id,
              label: S.name,
              keepOpen: !0,
              onSelect: () => d?.(S.id)
            },
            S.id
          )),
          u && /* @__PURE__ */ L(Be, { children: [
            /* @__PURE__ */ g(yn, {}),
            /* @__PURE__ */ L(
              qe,
              {
                onSelect: (S) => {
                  S.preventDefault(), x();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g(wt, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ g("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ L(Be, { children: [
        /* @__PURE__ */ g(yn, {}),
        /* @__PURE__ */ g(kd, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ L("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ L("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ g("span", { children: "Opacity" }),
            /* @__PURE__ */ L("span", { children: [
              s,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ g("div", { className: "pt-2", children: /* @__PURE__ */ g(
            va,
            {
              value: [s],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (S) => {
                const k = S[0] ?? s;
                a?.(k);
              }
            }
          ) }),
          /* @__PURE__ */ L("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ g("span", { children: "Hidden" }),
            /* @__PURE__ */ g("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const sP = { width: 210, height: 297 };
function aP(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function cP({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ g("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ L("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ g("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ g(fs, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ L("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ L("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ g(ze, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ g(ze, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
const Wc = /* @__PURE__ */ new Set();
function Gc({
  initialItems: e = [],
  availableItems: t = [],
  pageComponents: n = {},
  spineComponent: r,
  payload: o,
  pageFormat: i,
  pageOptions: s = [],
  notifyError: a,
  referenceRenderer: c,
  renderOverlay: l,
  renderPage: d,
  menuItems: u,
  gridColsClass: f,
  reorderTitle: h = "Reorder Pages and Groups",
  reorderDescription: b = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: p = kn,
  onItemsChange: v,
  onStateChange: y,
  resolveNewItem: w,
  pageFilter: x,
  printConfigs: S,
  defaultZoomMode: k = "fit-page",
  brandKits: I,
  activeBrandKitId: P,
  onSelectBrandKit: C,
  onAddBrandKit: N
}) {
  const E = i ?? sP, { interactive: D, setInteractive: _, enableDevTools: B } = gs(), T = ps(), [W, F] = ce(null), [$, R] = ce(null), [M, A] = ce(void 0), [H, K] = ce(0), [j, V] = ce(0), Y = W ?? x, z = ee(() => $ ? { ...E, ...$ } : E, [E, $]), G = Se(Sr), U = G?.payload ?? o, [J, Z] = ce(!1), re = !D && Jf(z, Y), ie = z?.preview ?? "single_page", we = re ? "single_page" : ie, se = ee(() => {
    const O = oo(z);
    return ie === "two_pages" || re ? { ...O, preview: "single_page" } : O;
  }, [ie, re, z]), Re = ee(() => oo(E), [E]), Je = ee(() => Hs(e), [e]), ln = ee(() => s?.length ? s.map((O) => "getValue" in O ? O : G?.setPageOptionValue ? p0(
    O,
    G.payload,
    G.setPageOptionValue
  ) : ((Et() || B) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [s, G]), [un, dn] = ce(null), [st, jt] = ce({ mode: "end" }), [at, Jn] = ce(null), Nn = de(null), {
    items: Qn,
    itemsWithPageNum: Ar,
    availableItemsToAdd: vt,
    addItem: kt,
    removeItem: Ht,
    reorderItems: Dr,
    updateItemFields: Ve,
    addDialogOpen: Mr,
    setAddDialogOpen: Xo,
    openAddDialog: er,
    itemsForReorder: tr,
    handleReorder: Or,
    defaultRenderThumbnail: Zo
  } = AS({
    initialItems: Je,
    availableItems: t,
    pageComponents: n,
    payload: U,
    setup: se,
    stateKey: p,
    onItemsChange: v,
    onStateChange: y,
    resolveNewItem: w,
    notifyError: a
  }), Rn = ee(() => {
    const O = [];
    for (const Q of Ar) {
      const ae = We(Q) ? Q.pages ?? [] : [Q];
      for (const he of ae) {
        if (!he?.id) continue;
        const Pe = We(Q) ? Q : void 0;
        O.push({
          ...he,
          kind: "page",
          id: he.id,
          pageNum: he.pageNum ?? O.length + 1,
          basePageNum: he.pageNum ?? O.length + 1,
          parentGroup: Pe,
          flowKey: aP(he, Pe)
        });
      }
    }
    return O.sort((Q, ae) => (Q.basePageNum ?? 0) - (ae.basePageNum ?? 0));
  }, [Ar]), _r = ee(() => JSON.stringify({
    format: se?.format,
    orientation: se?.orientation,
    width: se?.width,
    height: se?.height,
    bleed: se?.bleed,
    showBleed: se?.showBleed,
    preview: se?.preview,
    flowPages: Rn.filter((O) => O.hasFlow).map((O) => O.flowKey).join("|")
  }), [se, Rn]), Tr = ee(() => Ot(Qn), [Qn]), {
    allVirtualPages: Fr,
    renderedVirtualPages: Ce,
    virtualTotalPageCount: Ae,
    registerMeasurement: je
  } = OS({
    logicalPages: Rn,
    pageFilter: Y,
    layoutKey: _r
  }), ct = ee(
    () => new Set(Ce.map((O) => O.virtualPageId)),
    [Ce]
  ), De = ee(
    () => ES({
      pageFormat: re ? z : oo(z),
      pageFilter: Y,
      pages: Ce
    }),
    [re, z, Y, Ce]
  ), Ee = De.active ? De.plan : null, Ue = ee(
    () => Ee ? { ...se, binding: De.setup.binding } : se,
    [Ee, se, De.setup]
  );
  m.useEffect(() => {
    if (!(!Et() || !De.warnings.length))
      for (const O of De.warnings)
        Wc.has(O) || (Wc.add(O), console.warn(`[uhuu-components] PageEditor cover spread: ${O}`));
  }, [De.warnings]);
  const Kt = ee(
    () => Fr.filter((O) => O.hasFlow && O.virtualPageIndex === 0 && // Cover spread panels render in `content` mode without their own measurement pass.
    (d || !!Ee || !ct.has(O.virtualPageId))),
    [Fr, ct, d, Ee]
  );
  m.useEffect(() => {
    if (!at) return;
    const O = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${at}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(O);
  }, [at]);
  const Me = DS({
    items: Qn,
    reorderItems: Dr,
    availableItemsToAdd: vt,
    setPendingInsertPosition: jt,
    openAddDialog: er
  }), lt = pe(async (O) => {
    const Q = await kt(O, st);
    Q.success && (Jn(Q.insertedId), Nn.current && clearTimeout(Nn.current), Nn.current = setTimeout(() => Jn(null), 1200), jt({ mode: "end" }), O.repeatable && O.integration && dn(O));
  }, [kt, st]), Ye = pe(() => {
    const O = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!O.length) return { mode: "end" };
    const Q = window.innerHeight / 2;
    let ae = null, he = 1 / 0;
    for (const ye of O) {
      const Ie = ye.getBoundingClientRect(), tt = Math.abs(Ie.top + Ie.height / 2 - Q);
      tt < he && (he = tt, ae = ye);
    }
    const Pe = ae?.getAttribute("data-page-item-id");
    return Pe ? { mode: "after", anchorId: Pe } : { mode: "end" };
  }, []), Qe = pe(() => {
    jt(Ye()), er();
  }, [Ye, er]), fn = m.useCallback(
    (O, Q, ae) => {
      if (!Q) return;
      const he = O.applyPatch?.(ae, Q);
      he && Ve(Q.id, he), O.onChange?.(Q.id, ae, {
        item: Q,
        updateItem: (Pe) => Ve(Q.id, Pe)
      });
    },
    [Ve]
  ), hn = (O) => /* @__PURE__ */ L("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ g("span", { children: "Page" }),
    /* @__PURE__ */ L("span", { children: [
      O.pageNo,
      " / ",
      O.total
    ] })
  ] }), ut = (O, Q, ae) => l ? l({ pageNo: O, total: Ae, pageId: Q, parent: ae }) : hn({ pageNo: O, total: Ae }), et = (O, Q = {}) => {
    const ae = O.parentGroup;
    if (d && Q.renderVisible !== !1 && Q.renderMode !== "content")
      return d({ page: O, parent: ae });
    const he = O.componentKey ?? O.id, Pe = B && c ? c(O) : null, ye = B && c ? m.isValidElement(Pe) ? m.cloneElement(Pe, {
      opacity: j
    }) : Pe : null, Ie = O.templateId ?? he, tt = n[he], gn = G?.getPagePayload ? G.getPagePayload(O) : bo(U, { id: O.id, templateId: Ie, componentKey: he }), pn = Hd(
      U,
      O,
      ae
    ), An = TS({
      payload: U,
      page: O,
      parentGroup: ae,
      pagePayload: gn
    });
    return /* @__PURE__ */ g(
      UC,
      {
        pageId: O.id,
        templateId: Ie,
        pageNo: O.pageNum,
        measurementPageNo: O.basePageNum,
        component: tt,
        payload: U,
        pagePayload: gn,
        integration: pn,
        page: O,
        parentGroup: ae,
        componentKey: he,
        setup: Ue,
        reference: ye,
        overlay: ({ pageNo: Wt }) => ut(Wt, O.id, ae),
        className: O.className,
        dataBinding: An,
        totalPages: Ae,
        measurementTotalPages: Tr,
        flowPageIndex: O.virtualPageIndex,
        flowChunksByFlowId: O.flowChunksByFlowId,
        measureFlow: Q.measureFlow ?? (!!O.hasFlow && O.virtualPageIndex === 0),
        flowMeasurementKey: O.flowKey,
        flowMeasurementVersion: _r,
        onFlowMeasurement: O.hasFlow ? je : void 0,
        renderVisible: Q.renderVisible ?? !0,
        renderMode: Q.renderMode,
        spread: Q.spread
      },
      `${Q.renderVisible === !1 ? "measure-only" : "page"}-${O.virtualPageId}`
    );
  }, En = (O) => {
    const Q = O.componentKey ?? O.templateId ?? O.id;
    return [Q ? `uhuu-page--${Q}` : "", O.className].filter(Boolean).join(" ");
  }, fh = (O) => {
    if (!Ee) return null;
    const { binding: Q, page: ae } = Ee, [he, Pe] = O.panels, ye = he.page, Ie = Pe.page, tt = (pn) => ({
      sheet: O.sheet,
      side: pn,
      spine: Q.spine,
      glue: Q.glue,
      bleed: ae.bleed
    }), gn = `Cover sheet ${O.index + 1} · ${O.sheet} (pages ${ye.pageNum} + ${Ie.pageNum})`;
    return /* @__PURE__ */ g("div", { "data-page-item-id": Ie.parentGroup?.id ?? Ie.id, children: /* @__PURE__ */ g(
      Zr,
      {
        title: gn,
        controls: /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
          /* @__PURE__ */ L("span", { className: "page-number", children: [
            ye.pageNum,
            " + ",
            Ie.pageNum
          ] }),
          /* @__PURE__ */ g("span", { className: "text-xs text-gray-500", children: gn })
        ] }),
        children: /* @__PURE__ */ g(so, { setup: Ue, children: /* @__PURE__ */ g(
          fl,
          {
            sheet: O.sheet,
            pageNo: [ye.pageNum, Ie.pageNum],
            left: et(ye, { renderMode: "content", spread: tt("left") }),
            right: et(Ie, { renderMode: "content", spread: tt("right") }),
            spine: r && O.sheet === "outer" ? /* @__PURE__ */ g(
              r,
              {
                payload: U,
                sheet: "outer",
                spine: Q.spine,
                glue: Q.glue,
                bleed: ae.bleed,
                height: ae.height,
                totalPages: Ae,
                pages: { left: ye, right: Ie }
              }
            ) : void 0,
            overlay: ({ pageNo: pn, side: An }) => {
              const Wt = An === "left" ? ye : Ie;
              return ut(pn, Wt.id, Wt.parentGroup);
            },
            leftClassName: En(ye),
            rightClassName: En(Ie),
            leftPageKey: ye.componentKey ?? ye.templateId ?? ye.id,
            rightPageKey: Ie.componentKey ?? Ie.templateId ?? Ie.id
          }
        ) })
      }
    ) }, `cover-sheet-${O.sheet}`);
  }, Jo = (O, Q, ae) => {
    const he = !!Q && We(Q), Pe = he && Q.pages[0]?.id === O.id;
    if (O.virtualPageIndex > 0)
      return /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ g("span", { className: "page-number", children: O.pageNum }),
        /* @__PURE__ */ L("span", { className: "text-xs text-gray-500", children: [
          O.label || O.componentKey || O.id,
          " continued"
        ] })
      ] });
    if (he && !Pe)
      return /* @__PURE__ */ g("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ g("span", { className: "page-number", children: O.pageNum }),
        O.label && /* @__PURE__ */ g("span", { className: "text-xs text-gray-500", children: O.label }),
        /* @__PURE__ */ g("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const ye = he ? Q : O, Ie = he ? Q.label || Q.id : O.label || `Page ${O.pageNum}`;
    return /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ g("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: O.pageNum }),
      /* @__PURE__ */ g(
        RS,
        {
          name: Ie,
          canRename: !0,
          canMoveUp: !!ae?.onMoveUp,
          canMoveDown: !!ae?.onMoveDown,
          canAddPage: !!ae?.onAddPage,
          canDuplicate: !!ae?.onDuplicate,
          canDelete: Tr > 1,
          onRename: (tt) => Ve(ye.id, { label: tt || void 0 }),
          onMoveUp: ae?.onMoveUp,
          onMoveDown: ae?.onMoveDown,
          onAddPage: ae?.onAddPage,
          onDuplicate: ae?.onDuplicate,
          onDelete: () => Ht(ye.id)
        }
      ),
      /* @__PURE__ */ g("span", { className: "pl-1", children: ln.length > 0 && /* @__PURE__ */ g(
        NS,
        {
          pageOptions: ln,
          targetItem: ye,
          onChange: fn,
          title: he ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, hh = ee(() => {
    if (we !== "two_pages") return [];
    const O = Ce;
    if (!O.length) return [];
    const Q = [{ left: void 0, right: O[0], layout: "right" }];
    for (let ae = 1; ae < O.length; ae += 2) {
      const he = O[ae], Pe = O[ae + 1];
      if (Pe)
        Q.push({ left: he, right: Pe, layout: "spread" });
      else {
        const ye = he.pageNum % 2 === 0;
        Q.push({
          left: ye ? he : void 0,
          right: ye ? void 0 : he,
          layout: ye ? "left" : "right"
        });
      }
    }
    return Q;
  }, [we, Ce]), gh = /* @__PURE__ */ L("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ L(la, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      Ae,
      " ",
      Ae === 1 ? "Page" : "Pages"
    ] }),
    B && /* @__PURE__ */ g(
      iP,
      {
        modes: S,
        selectedMode: M,
        onModeChange: (O, Q) => {
          A(O), F(Q.filter ?? null), R(Q.pageFormat ?? null), K((ae) => ae + 1);
        },
        interactive: D,
        onInteractiveChange: (O) => {
          _(O), O && R(null);
        },
        hasReferenceRenderer: !!c,
        referenceOpacity: j,
        onReferenceOpacityChange: V,
        brandKits: I,
        activeBrandKitId: P,
        onSelectBrandKit: C,
        onAddBrandKit: N
      }
    ),
    D && /* @__PURE__ */ L(Be, { children: [
      vt.length > 0 && /* @__PURE__ */ L(
        ze,
        {
          variant: "ghost",
          size: "sm",
          onClick: Qe,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ g(wt, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ L(
        ze,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => Z(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ g(hp, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ L(Be, { children: [
    Kt.map((O) => et(O, {
      renderVisible: !1,
      measureFlow: !0
    })),
    B && !D && /* @__PURE__ */ L(
      ze,
      {
        onClick: () => {
          _(!0), R(null);
        },
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ g(_l, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ g(
      O0,
      {
        defaultZoom: 80,
        defaultZoomMode: k,
        minZoom: 25,
        maxZoom: 200,
        menuItems: u ?? gh,
        onAddPage: Qe,
        preview: we,
        children: Ee ? Ee.sheets.map(fh) : we === "two_pages" ? hh.map((O, Q) => {
          const ae = O.left ?? O.right, he = O.right ?? O.left, Pe = ae?.parentGroup?.id ?? ae?.id ?? null, ye = he?.parentGroup?.id ?? he?.id ?? null, Ie = O.left?.parentGroup?.id ?? O.left?.id, tt = O.right?.parentGroup?.id ?? O.right?.id, gn = Ie === at, pn = tt === at, An = (Wt, ph) => Me(Wt ? Wt.parentGroup ?? Wt : void 0, ph);
          return /* @__PURE__ */ L(A0, { layout: O.layout, pageItemId: ye ?? void 0, children: [
            O.left && /* @__PURE__ */ g(
              "div",
              {
                "data-page-item-id": O.left.virtualPageIndex === 0 ? Ie : void 0,
                className: gn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ g(
                  Zr,
                  {
                    title: `Sheet ${O.left.pageNum}`,
                    controls: Jo(O.left, O.left.parentGroup, An(O.left, Pe)),
                    origin: O.left.pageNum % 2 === 0 ? "right" : "left",
                    children: et(O.left)
                  },
                  O.left.virtualPageId
                )
              }
            ),
            O.right && /* @__PURE__ */ g(
              "div",
              {
                "data-page-item-id": O.right.virtualPageIndex === 0 ? tt : void 0,
                className: pn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ g(
                  Zr,
                  {
                    title: `Sheet ${O.right.pageNum}`,
                    controls: Jo(O.right, O.right.parentGroup, An(O.right, ye)),
                    origin: O.right.pageNum % 2 === 0 ? "right" : "left",
                    children: et(O.right)
                  },
                  O.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Q}`);
        }) : Ce.map((O) => {
          const Q = O.parentGroup ?? O, ae = O.parentGroup?.id ?? O.id, he = Me(Q, ae), Pe = O.parentGroup?.id ?? O.id, ye = at === Pe;
          return /* @__PURE__ */ g(
            "div",
            {
              "data-page-item-id": O.virtualPageIndex === 0 ? Pe : void 0,
              className: ye ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ g(
                Zr,
                {
                  title: `Sheet ${O.pageNum}`,
                  controls: Jo(O, O.parentGroup, he),
                  children: et(O)
                }
              )
            },
            O.virtualPageId
          );
        })
      },
      `dev-mode-${H}-${M ?? "default"}`
    ),
    D && !T && /* @__PURE__ */ L(Be, { children: [
      /* @__PURE__ */ g(
        U0,
        {
          open: Mr,
          onOpenChange: Xo,
          availableItems: vt,
          onSelectItem: lt,
          pageComponents: n,
          payload: U,
          setup: Re,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ g(
        VC,
        {
          open: J,
          onOpenChange: Z,
          pages: tr,
          onReorder: (O) => {
            Or(O), Z(!1);
          },
          onRemove: (O) => Ht(O.id),
          pageComponents: n,
          payload: U,
          setup: Re,
          renderThumbnail: Zo,
          title: h,
          description: b,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ g(
      cP,
      {
        label: un ? un.label ?? un.id : null,
        onDone: () => dn(null),
        onAddAnother: () => {
          const O = un;
          dn(null), O && lt(O);
        }
      }
    )
  ] });
}
function lP(e) {
  const { templateConfig: t, ...n } = e;
  return Se(Sr) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ g(Gc, { ...n }) : /* @__PURE__ */ g(
    Kd,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ g(Gc, { ...n })
    }
  );
}
function uP(e) {
  const n = Se(Sr)?.payload ?? e.payload, r = m.useMemo(
    () => LS({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), o = e.templateConfig?.spine?.component, [i, s] = m.useState({
    open: !1,
    message: ""
  }), a = m.useCallback((d) => {
    s({ open: !0, message: d });
  }, []), c = m.useMemo(
    () => r0(n),
    [n]
  ), l = m.useMemo(() => {
    if (!c?.items)
      return r.initialItems;
    const d = e.templateConfig.groups ?? {}, u = Array.isArray(d) ? d : Object.entries(d).map(([k, I]) => ({ id: k, ...I })), f = new Map(u.map((k) => [k.id, k])), h = e.templateConfig.pages ?? {}, b = (k) => {
      const I = k?.componentKey ?? k?.templateId ?? k?.id;
      return !(h[I] ?? h[k?.templateId] ?? h[k?.id])?.hasFlow || k?.hasFlow ? k : { ...k, hasFlow: !0 };
    }, p = c.items.map((k) => {
      if (k.kind !== "group") return b(k);
      const I = k.templateId ?? k.id, P = f.get(I), C = P?.strictPosition !== void 0 && !k.strictPosition ? { ...k, strictPosition: P.strictPosition } : k, N = {
        ...C,
        pages: (C.pages ?? []).map(b)
      };
      if (!P || typeof P.pageComponentKeys != "function") return N;
      try {
        const E = P.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(E) ? E.length === 0 ? {
          ...N,
          pages: []
        } : {
          ...N,
          pages: E.map((D, _) => {
            const B = h[D], T = B?.dataKey;
            return {
              id: `${N.id}__${T ?? D}__${_}`,
              componentKey: D,
              templateId: D,
              ...T ? { dataKey: T } : {},
              ...B?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${C.id} must return an array, got:`, typeof E), C);
      } catch (E) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${N.id}:`, E), N;
      }
    }), v = new Set(r.initialItems.map((k) => k.id)), y = p.filter((k) => v.has(k.id)), w = Ot(y), x = Ot(r.initialItems);
    if (!Array.from(v).some(
      (k) => !y.some((I) => I.id === k)
    ) && w !== x) {
      const k = p.filter((E) => {
        if (E.kind !== "group") return !v.has(E.id);
        const D = E.templateId ?? E.id;
        return E.id !== D && !v.has(E.id);
      });
      if (k.length === 0) return r.initialItems;
      const I = [...r.initialItems, ...k], P = I.filter((E) => E.strictPosition === "start"), C = I.filter((E) => E.strictPosition === "end"), N = I.filter((E) => !E.strictPosition);
      return [...P, ...N, ...C];
    }
    return p;
  }, [c?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ g(
      lP,
      {
        ...e,
        payload: n,
        initialItems: l,
        availableItems: r.availableItems,
        pageComponents: r.pageComponents,
        spineComponent: o,
        notifyError: a
      }
    ),
    /* @__PURE__ */ g(
      nP,
      {
        open: i.open,
        onOpenChange: (d) => {
          d || s({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ L(sh, { children: [
          /* @__PURE__ */ L(ah, { children: [
            /* @__PURE__ */ g(lh, { children: "Cannot remove item" }),
            /* @__PURE__ */ g(uh, { children: i.message })
          ] }),
          /* @__PURE__ */ g(ch, { children: /* @__PURE__ */ g(dh, { onClick: () => s({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function dP(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Vc(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Vc(t, e);
  }
}
function Vc(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function fP(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const s = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = dP(s, t);
    }
  return r;
}
function hP(e, t, n) {
  return e(t, n);
}
function gP(e, t, n) {
  return typeof e == "function" ? hP(e, t, n) : fP(e, t);
}
function pP(e, t, n) {
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
function mP(e, t, n = {}, r, o = null) {
  const i = e?.integration?.path?.();
  if (!i) return null;
  const s = n.type === "assistant", a = n.type === "image" || n.imagePath, c = s ? e.integration.path(t) ?? [i, t].filter(Boolean).join(".") : [i, t].filter(Boolean).join(".");
  if (a) {
    const l = n.imageGalleryPath ?? (o ? `${i}.${o}` : null) ?? e.defaults.imageGalleryPath;
    return {
      path: c,
      imagePath: n.imagePath || "url",
      imageGalleryPath: l,
      type: n.type || "image",
      ratio: n.ratio,
      value: r,
      payload: n.payload ?? e.payload,
      ...n
    };
  }
  return s ? {
    path: c,
    type: "assistant",
    rows: n.rows,
    value: r,
    payload: n.payload ?? e.payload,
    ...n
  } : {
    path: i,
    subPath: t,
    type: n.type || "text",
    rows: n.rows,
    value: r,
    payload: n.payload ?? e.payload,
    ...n
  };
}
function vP(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, s = m.useMemo(() => gP(r, n, t?.payload), [r, n, t?.payload]), a = m.useMemo(() => pP(t, n, o), [t, n, o]), c = m.useCallback(
    (d, u = {}, f) => mP(
      t,
      d,
      u,
      f,
      a
    ),
    [t, a]
  ), l = m.useCallback(
    (d, u = {}, f) => {
      const h = c(d, u, f);
      if (!h) return {};
      const b = Kn({ dialog: h }, { page: { paginationType: "static" } });
      if (b.onClick) {
        const p = b.onClick;
        b.onClick = (v) => {
          v.stopPropagation(), p(v);
        };
      }
      return b;
    },
    [c]
  );
  return m.useMemo(
    () => ({
      data: s,
      dialog: c,
      dialogProps: l,
      galleryPath: a,
      instanceId: t?.integration?.instanceId ?? null,
      integration: n
    }),
    [s, c, l, a, t, n]
  );
}
const OP = {
  Pagination: so,
  Sheet: ur,
  FlowArea: nl,
  FlowPage: rl,
  Flow: sl,
  FlowColumns: Fh,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: ts,
  planFlowColumnChunks: Qc,
  // Optional cost counters for the two planners above. Diagnostic only.
  createFlowPlanMetrics: Ih,
  // The DOM reads FlowArea measures with. Hosts that run their own Flow canvas
  // must use these rather than re-deriving them, or their page boundaries can
  // drift from the delivered document by a rounding step.
  flowMeasure: Eh,
  FlowDocument: Xh,
  markdownToFlowItems: rg,
  htmlToFlowItems: dl,
  // Perfect-binding cover geometry (outer/inner sheet, spine, glue zones). Pure,
  // DOM-free; used by CoverSpread/PageEditor and by hosts that run their own
  // canvas. See docs/printer-cover-spine-support.md.
  planCoverSpread: qc,
  resolveSheetSize: es,
  // One physical cover sheet (outer/inner) for the Static-only template path.
  CoverSpread: fl
}, _P = {
  TemplateDataProvider: Kd,
  PageEditor: uP,
  InteractiveModeProvider: Hp,
  useInteractive: gs,
  useIntegrationAdapter: vP
};
export {
  _w as BRAND_KIT_PUBLIC_BASE_URL,
  RP as BrandKitProvider,
  Lh as Editable,
  _P as EditorShell,
  IP as ImageBlock,
  OP as Static,
  Hw as brandKitCollection,
  Od as brandKitEnv,
  Md as brandKitLogo,
  Kw as brandKitMapStyle,
  NP as brandKitSourceUrl,
  Kn as getDialogProps,
  kP as imageUrl,
  Tw as loadBrandKit,
  EP as useBrandKit
};
//# sourceMappingURL=uhuu-components.es.js.map
