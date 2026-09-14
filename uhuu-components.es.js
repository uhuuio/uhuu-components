(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db);--uhuu-sheet-width: calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height: calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width: 0mm;--uhuu-glue-width: 0mm;--uhuu-paper-color: #ffffff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}}@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:-moz-max-content;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:-moz-max-content;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as p, jsxs as $, Fragment as $e } from "react/jsx-runtime";
import * as g from "react";
import Se, { createContext as Qt, useEffect as ce, forwardRef as hr, useContext as Pe, useRef as le, createElement as hi, useState as se, useLayoutEffect as Nc, useMemo as ee, useCallback as he, memo as Lf, useReducer as Bf, cloneElement as zf } from "react";
import * as zi from "react-dom";
import { flushSync as Hf, unstable_batchedUpdates as Mr, createPortal as Kf } from "react-dom";
class Qr {
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
    Qr.handlePageBreakStyles(), Qr.handleUhuuDialogs();
  }
}
class ia {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
const jf = 400;
function pn(e) {
  const t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
  return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function Fe(e) {
  return Math.round(e * 1e4) / 1e4;
}
function en(e) {
  if (!e || typeof e != "object" || e.type === "saddle") return null;
  const t = pn(e.spine);
  if (t === null || t <= 0) return null;
  const n = pn(e.glue);
  return {
    type: "perfect",
    spine: Fe(t),
    glue: n === null || n < 0 ? 0 : Fe(n)
  };
}
function Hi(e = {}) {
  const t = pn(e.width), n = pn(e.height);
  if (t === null || n === null || t <= 0 || n <= 0) return null;
  const r = pn(e.bleed);
  return {
    width: Fe(t),
    height: Fe(n),
    bleed: r === null ? 0 : Fe(Math.min(Math.max(r, 0), jf))
  };
}
function Ki(e = {}) {
  const t = Hi(e);
  if (!t) return null;
  const n = en(e.binding), r = n ? t.width * 2 + n.spine : t.width, o = t.height;
  return {
    trimWidth: Fe(r),
    trimHeight: Fe(o),
    width: Fe(r + t.bleed * 2),
    height: Fe(o + t.bleed * 2),
    spread: !!n
  };
}
function kc(e) {
  return Array.isArray(e) ? e.length === 2 ? [{ sheet: "outer", left: e[1], right: e[0] }] : e.length === 4 ? [
    { sheet: "outer", left: e[3], right: e[0] },
    { sheet: "inner", left: e[1], right: e[2] }
  ] : null : null;
}
function Rc(e = {}) {
  const t = Hi(e), n = en(e.binding), r = kc(e.coverPages);
  if (!t || !n || !r) return null;
  const { width: o, height: i, bleed: s } = t, { spine: a, glue: c } = n, l = Fe(i + s * 2), d = Fe(o * 2 + a), u = Fe(d + s * 2), f = Fe(s + o), h = Fe(s + o + a), v = (y) => ({
    side: "left",
    page: y,
    trim: { x: s, y: s, width: o, height: i },
    // Outer bleed on top/left/bottom only; the panel is cut at the spine.
    bleedBox: { x: 0, y: 0, width: Fe(s + o), height: l }
  }), m = (y) => ({
    side: "right",
    page: y,
    trim: { x: h, y: s, width: o, height: i },
    bleedBox: { x: h, y: 0, width: Fe(o + s), height: l }
  }), b = r.map((y, x) => {
    const S = y.sheet === "inner", C = S && c > 0 ? [
      { side: "left", x: Fe(f - c), y: 0, width: c, height: l },
      { side: "right", x: h, y: 0, width: c, height: l }
    ] : [];
    return {
      sheet: y.sheet,
      index: x,
      panels: [v(y.left), m(y.right)],
      spine: { x: f, y: 0, width: a, height: l, blank: S },
      glueZones: C
    };
  });
  return {
    binding: n,
    page: t,
    sheet: { width: u, height: l, trimWidth: d, trimHeight: i },
    sheets: b
  };
}
function Gf(e = {}) {
  const t = Ki(e);
  if (!t) return null;
  const n = en(e.binding);
  return {
    "--uhuu-sheet-width": `${t.width}mm`,
    "--uhuu-sheet-height": `${t.height}mm`,
    "--uhuu-spine-width": `${n ? n.spine : 0}mm`,
    "--uhuu-glue-width": `${n ? n.glue : 0}mm`
  };
}
function Wf(e = {}) {
  const t = en(e.binding);
  if (!t) return [];
  const n = [], r = Hi(e), o = pn(e.coverPageCount);
  return r || n.push("binding.spine is set but the page format has no valid width/height; cover spread skipped."), o !== null && o !== 1 && o !== 2 && n.push(
    `binding.spine is set but pageFilter.coverPageCount is ${o}; a cover spread needs 1 (outer sheet only) or 2 (outer + inner). Rendering plain cover pages.`
  ), Array.isArray(e.coverPages) && !kc(e.coverPages) && n.push(
    `binding.spine is set but the cover filter produced ${e.coverPages.length} page(s); a cover spread needs 2 or 4. Rendering plain cover pages.`
  ), r && t.glue > 0 && t.glue >= r.width / 2 && n.push(
    `binding.glue (${t.glue}mm) is at least half the page width (${r.width}mm); the glue mask would hide most of the inside covers.`
  ), r && r.bleed > 0 && t.spine < r.bleed && n.push(
    `binding.spine (${t.spine}mm) is narrower than the bleed (${r.bleed}mm); panels are cut at the spine, so artwork will not run across it unless the spine component paints it.`
  ), e.preview === "two_pages" && n.push('preview "two_pages" is ignored while a cover spread is active; each sheet is already a spread.'), pn(e.flowCoverPages) > 0 && n.push("a cover page has hasFlow: true; only its first chunk is placed on the cover sheet."), n;
}
class or {
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
    }, i = Gf({ ...n, bleed: r, binding: t.binding });
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
      for (const [m, b] of Object.entries(h))
        document.documentElement.style.setProperty(m, b);
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
      binding: en(u),
      // Physical sheet incl. bleed — the `@page` size.
      sheet: Ki({ ...f, bleed: this.clampBleed(i), binding: u })
    } };
  }
}
const _t = Qt(null), Vf = ({ config: e, children: t }) => /* @__PURE__ */ p(_t.Provider, { value: e, children: t }), eo = ({ children: e, className: t, setup: n }) => {
  const r = or.pageParams("static", n);
  ce(() => {
    r?.page?.compatibility && Qr.handle();
    const i = ia.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && ia.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(Vf, { config: r, children: /* @__PURE__ */ p("div", { className: o, children: e }) });
}, ir = hr(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: i,
  "data-page-key": s
}, a) => {
  const c = Pe(_t), l = i ?? c?.page?.showBleed ?? !1;
  return /* @__PURE__ */ $(
    "div",
    {
      className: `uhuu-page-sheet ${t}`,
      style: n,
      ref: a,
      "data-page-key": s,
      children: [
        e,
        o && o({ pageNo: r }),
        l && /* @__PURE__ */ p("div", { className: "uhuu-bleed-area" })
      ]
    }
  );
});
function kt() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function Vt(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function Qn(e) {
  return typeof e == "string" && e ? e : null;
}
function Ec(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function Dc({
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
  const c = Number.isInteger(a) ? a : t.indexOf(e), l = Qn(n[e]), d = c > 0 ? t[c - 1] : null, u = d === null ? null : Qn(n[d]), f = c > 0 ? t[c - 1] : s ?? (e > 0 ? e - 1 : null), h = f !== null ? Qn(n[f]) : null, v = !!(l && h !== l), m = !!(l && u !== l);
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
    isFirstInGroup: v,
    isFirstInGroupOnPage: m,
    // `isContinuation` refers to the virtual Flow page. `isGroupContinuation`
    // is the narrower signal for a repeated group header.
    isContinuation: r > 0,
    isGroupContinuation: !!(m && !v && h === l)
  };
}
function Uf() {
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
function ji({
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
  const f = l?.indexes, h = l?.offset ?? 0, v = f ? Math.max(0, f.length - h) : e.length, m = f ? (R) => f[h + R] : (R) => R, b = Vt(r) || Number.POSITIVE_INFINITY, y = [{ indexes: [], keys: [] }];
  let x = 0;
  const S = () => y[y.length - 1], C = () => {
    const R = S().indexes;
    return R.length ? R[R.length - 1] : null;
  }, N = () => S().indexes.length > 0 || !!S().unplaceable, I = (R) => Qn(o[m(R)]), P = (R) => Vt(i[R] ?? 0), w = (R) => s[R] !== !1, k = (R, M) => {
    const D = I(R);
    return D ? M == null ? (R > 0 ? I(R - 1) : Qn(a)) !== D || w(D) : I(M) !== D : !1;
  }, E = (R, M) => {
    const D = I(R);
    return Vt(e[m(R)]) + (D && k(R, M) ? P(D) : 0);
  }, A = (R) => {
    const M = n[m(R)] ?? {};
    return M.avoidBreakInside && M.groupKey ? M.groupKey : null;
  }, T = (R, M, D) => {
    let K = 0, j = D;
    for (let H = R; H < v && A(H) === M; H += 1)
      u && (u.scannedItems += 1), K += E(H, j), j = H;
    return K;
  }, B = (R, M, { currentHeight: D, ownHeight: K, stopEarly: j } = {}) => {
    let H = 0, V = R;
    for (let Y = 1; Y <= M; Y += 1) {
      const z = R + Y;
      if (z >= v || (u && (u.scannedItems += 1), H += E(z, V), j && D + (K + H) > b)) break;
      V = z;
    }
    return H;
  }, _ = () => {
    N() && (y.push({ indexes: [], keys: [] }), x = 0);
  }, G = (R, M, D) => {
    const K = t[m(R)] ?? String(m(R)), j = I(R) ?? void 0, H = j && k(R, null) ? P(j) : 0, V = {
      index: R,
      key: K,
      height: M,
      headerHeight: H,
      requiredHeight: D,
      availableHeight: b,
      groupKey: j,
      reason: H > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    S().unplaceable = V, c?.(V), y.push({ indexes: [], keys: [] }), x = 0;
  };
  for (let R = 0; R < v && !(d && y.length > d); R += 1) {
    u && (u.scannedItems += 1);
    const M = n[m(R)] ?? {}, D = Vt(e[m(R)]), K = t[m(R)] ?? String(m(R));
    M.breakBefore && _();
    const j = A(R), H = R > 0 ? A(R - 1) : null;
    j && j !== H && N() && x + T(R, j, C()) > b && _();
    let V = C(), Y = E(R, V);
    if (N() && Y > b - x && (_(), V = null, Y = E(R, V)), Y > b) {
      G(R, D, Y);
      continue;
    }
    const z = N(), W = z ? B(R, Ec(M.keepWithNext), {
      currentHeight: x,
      ownHeight: Y,
      stopEarly: Number.isFinite(b)
    }) : 0, U = Y + W;
    if (z && x + U > b && (_(), V = null, Y = E(R, V), Y > b)) {
      G(R, D, Y);
      continue;
    }
    S().indexes.push(R), S().keys.push(K), x += Y, M.breakAfter && R < v - 1 && _();
  }
  const L = y.filter((R) => R.indexes.length > 0 || !!R.unplaceable);
  if (!L.length)
    return u && !d && (u.pages = 1), [{ indexes: [], keys: [] }];
  const F = d ? L.slice(0, d) : L;
  return u && !d && (u.pages = F.length), F.map((R) => {
    if (!R.indexes.length) return R;
    const M = [];
    for (let D = 0; D < R.indexes.length; D += 1) {
      const K = R.indexes[D], j = I(K), H = D > 0 ? R.indexes[D - 1] : null;
      if (!j || !k(K, H)) continue;
      const V = K > 0 ? I(K - 1) : null;
      M.push({
        groupKey: j,
        itemIndex: K,
        isContinuation: V === j
      });
    }
    return M.length ? { ...R, groupHeaders: M } : R;
  });
}
function Yf(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (i, s) => i + Vt(t[s]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (i, s) => i + Vt(n[s.groupKey]),
    0
  );
  return r + o;
}
function qf(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function Xf(e, t, n, r, o, i) {
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
function Or(e, t, n, r, o, i, s) {
  if (n >= t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const a = qf(e, o, i);
  e.metrics && (e.metrics.chunkerCalls += 1);
  const l = ji({
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
  })[0] ?? { indexes: [], keys: [] }, d = Xf(
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
    height: Yf(
      d,
      e.heights ?? [],
      a.headerGroupHeights ?? {}
    )
  };
}
function Ac({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function sa(e, t, n, r, o) {
  const i = Vt(r.chunk.unplaceable?.requiredHeight);
  if (i > 0 && i <= o) return "move";
  const s = t[n];
  if (s === void 0) return "no";
  const a = e.metas?.[s] ?? {};
  return Ec(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey) ? "compare" : "no";
}
function Kt(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function Mc({
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
  Ac({ nodes: e, itemCount: t.length });
  const f = Vt(o) || Number.POSITIVE_INFINITY, h = {
    heights: t,
    keys: n,
    metas: r,
    headerGroupKeys: i,
    headerGroupHeights: s,
    headerGroupRepeats: a,
    columnHeaderGroupHeights: c,
    columnHeaderGroupRepeats: l,
    metrics: u
  }, v = [{ indexes: [], keys: [], layout: [] }];
  let m = 0;
  const b = () => v[v.length - 1], y = () => {
    Kt(b()) && (v.push({ indexes: [], keys: [], layout: [] }), m = 0);
  }, x = (C) => {
    b().indexes.push(...C.indexes ?? []), b().keys.push(...C.keys ?? []), !b().unplaceable && C.unplaceable && (b().unplaceable = C.unplaceable), C.unplaceable && d?.(C.unplaceable);
  };
  for (let C = 0; C < e.length; C += 1) {
    const N = e[C];
    if (!N || N.kind !== "item" && N.kind !== "columns") continue;
    if (N.kind === "item") {
      const P = [];
      let w = C;
      for (; w < e.length && e[w]?.kind === "item"; ) {
        const E = Number(e[w].index);
        Number.isInteger(E) && E >= 0 && E < t.length && P.push(E), w += 1;
      }
      C = w - 1;
      let k = 0;
      for (; k < P.length; ) {
        f - m <= 0 && Kt(b()) && y();
        const E = P[k];
        r[E]?.breakBefore && Kt(b()) && y();
        const A = k > 0 ? P[k - 1] : void 0;
        let T = Or(
          h,
          P,
          k,
          f - m,
          void 0,
          void 0,
          A
        );
        if (Kt(b())) {
          const G = sa(
            h,
            P,
            k,
            T,
            f
          );
          if (G !== "no") {
            u && (u.freshPageAttempts += 1);
            const L = Or(
              h,
              P,
              k,
              f,
              void 0,
              void 0,
              A
            );
            (G === "move" || L.consumed > T.consumed) && (y(), T = L);
          }
        }
        b().layout.push({ kind: "items", chunk: T.chunk }), x(T.chunk), m += T.height, k += T.consumed, T.consumed === 0 && (k += 1);
        const B = T.chunk.indexes?.at(-1) ?? T.chunk.unplaceable?.index;
        (k < P.length || T.chunk.unplaceable || B !== void 0 && r[B]?.breakAfter) && y();
      }
      continue;
    }
    const I = (N.columns ?? []).map((P) => ({
      id: String(P?.id ?? ""),
      indexes: (P?.indexes ?? []).filter(
        (w) => Number.isInteger(w) && w >= 0 && w < t.length
      ),
      cursor: 0
    })).filter((P) => P.id && P.indexes.length);
    if (I.length)
      for (; I.some((P) => P.cursor < P.indexes.length); ) {
        f - m <= 0 && Kt(b()) && y(), I.some((R) => {
          const M = R.indexes[R.cursor];
          return M !== void 0 && r[M]?.breakBefore;
        }) && Kt(b()) && y();
        const w = f - m;
        let k = I.map((R) => Or(
          h,
          R.indexes,
          R.cursor,
          w,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )), E;
        const A = () => E ??= I.map((R) => (u && (u.freshPageAttempts += 1), Or(
          h,
          R.indexes,
          R.cursor,
          f,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )));
        if (Kt(b()) && I.some((R, M) => {
          const D = sa(
            h,
            R.indexes,
            R.cursor,
            k[M],
            f
          );
          return D === "no" ? !1 : D === "move" ? !0 : A()[M].consumed > k[M].consumed;
        }) && (y(), k = A()), !k.some((R) => R.consumed > 0)) {
          const R = I.find((M) => M.cursor < M.indexes.length);
          throw new TypeError(
            `[uhuu-components] Static.FlowColumns made no pagination progress${R ? ` in column "${R.id}"` : ""}.`
          );
        }
        const B = I.map((R, M) => ({
          id: R.id,
          chunk: k[M].chunk
        }));
        b().layout.push({
          kind: "columns",
          id: String(N.id ?? "columns"),
          columns: B
        });
        for (const { chunk: R } of B) x(R);
        const _ = Math.max(0, ...k.map((R) => R.height));
        m += _, I.forEach((R, M) => {
          R.cursor += k[M].consumed;
        });
        const G = I.some((R) => R.cursor < R.indexes.length), L = k.some((R) => {
          const M = R.chunk.indexes?.at(-1) ?? R.chunk.unplaceable?.index;
          return M !== void 0 && r[M]?.breakAfter;
        }), F = k.some((R) => !!R.chunk.unplaceable);
        (G || L || F) && y();
      }
  }
  const S = v.filter(Kt);
  return S.length ? (u && (u.pages = S.length), S) : (u && (u.pages = 1), [{ indexes: [], keys: [], layout: [] }]);
}
function Gi(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function $n(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, i = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + i;
}
function Wi(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: Oc(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function Oc(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function Vi(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function wo(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function to(e) {
  const t = {};
  for (const n of e) {
    const r = wo(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function no(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, $n(r, t)));
  }
  return n;
}
function Ui(e) {
  return Array.from(e.querySelectorAll('[data-uhuu-flow-item="true"]'));
}
function Yi(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getEffectiveScale: Gi,
  getOuterHeight: $n,
  hashString: Yi,
  parseKeepWithNext: Oc,
  readFlowItemElements: Ui,
  readHeaderGroupHeights: no,
  readHeaderGroupKey: wo,
  readHeaderGroupRepeats: to,
  readItemMeta: Wi,
  serializeKeepWithNext: Vi
}, Symbol.toStringTag, { value: "Module" })), Jf = ji, Qf = Mc, On = g.createContext(null), eh = typeof window > "u" ? g.useEffect : g.useLayoutEffect, ro = /* @__PURE__ */ new Set();
function oo(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function _c(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function mt(e) {
  return Number.parseFloat(e || "0") || 0;
}
function th(e, t) {
  const n = (r) => {
    const o = window.getComputedStyle(r);
    return mt(o.paddingTop) + mt(o.paddingBottom) + mt(o.borderTopWidth) + mt(o.borderBottomWidth);
  };
  for (const r of Array.from(
    e.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const o = window.getComputedStyle(r), i = mt(o.marginTop) + mt(o.marginBottom);
    if (n(r) > 0.01 || i > 0.01)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps."
      );
    const s = [];
    for (const c of Array.from(
      r.querySelectorAll(":scope > [data-uhuu-flow-column]")
    )) {
      const l = window.getComputedStyle(c), d = mt(l.marginTop) + mt(l.marginBottom);
      if (n(c) > 0.01 || d > 0.01 || mt(l.rowGap) > 0.01 || mt(l.minHeight) > 0.01 || l.maxHeight !== "none")
        throw new TypeError(
          "[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps."
        );
      const u = Array.from(
        c.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        )
      ).reduce((f, h) => f + $n(h, t), 0);
      s.push(u);
    }
    const a = Math.max(0, ...s);
    if ($n(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function nh(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return rh(e, t, n);
  const o = Ui(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Gi(e), a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = o.map((S) => $n(S, s)), d = o.map(Wi), u = o.map((S, C) => S.dataset.uhuuFlowKey || String(C)), f = o.map(wo), h = to(o), v = no(t, s), m = [], b = c ? a : l.reduce((S, C) => S + C, 0) + Object.values(v).reduce((S, C) => S + C, 0);
  c || n.onZeroHeight?.();
  const y = Jf({
    heights: l,
    keys: u,
    metas: d,
    availableHeight: b,
    headerGroupKeys: f,
    headerGroupHeights: v,
    headerGroupRepeats: h,
    onUnplaceableItem: (S) => {
      m.push(S), n.onUnplaceableItem?.(S);
    }
  }), x = Yi(JSON.stringify({
    version: 2,
    flowId: r,
    availableHeight: Math.round(b * 100) / 100,
    heights: l.map((S) => Math.round(S * 100) / 100),
    keys: u,
    metas: d,
    headerGroupKeys: f,
    headerGroupHeights: v,
    headerGroupRepeats: h,
    unplaceableItems: m
  }));
  return { flowId: r, chunks: y, signature: x, unplaceableItems: m };
}
function rh(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = Ui(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Gi(e);
  th(t, s);
  const a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = Math.max(
    -1,
    ...o.map((P) => Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10))
  ), d = Array.from({ length: l + 1 }, () => 0), u = Array.from({ length: l + 1 }, (P, w) => String(w)), f = Array.from({ length: l + 1 }, () => ({})), h = Array.from(
    { length: l + 1 },
    () => {
    }
  );
  for (const P of o) {
    const w = Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10);
    !Number.isInteger(w) || w < 0 || (d[w] = $n(P, s), u[w] = P.dataset.uhuuFlowKey || String(w), f[w] = Wi(P), h[w] = wo(P));
  }
  const v = Array.from(t.children).flatMap((P) => {
    if (!(P instanceof HTMLElement)) return [];
    if (P.dataset.uhuuFlowLayoutNode === "item") {
      const k = P.matches('[data-uhuu-flow-item="true"]') ? P : P.querySelector('[data-uhuu-flow-item="true"]'), E = Number.parseInt(k?.dataset.uhuuFlowIndex ?? "-1", 10);
      return Number.isInteger(E) && E >= 0 ? [{ kind: "item", index: E }] : [];
    }
    if (P.dataset.uhuuFlowLayoutNode !== "columns") return [];
    const w = Array.from(
      P.querySelectorAll(":scope > [data-uhuu-flow-column]")
    ).flatMap((k) => {
      const E = k.dataset.uhuuFlowColumn;
      if (!E) return [];
      const A = Array.from(
        k.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map((T) => Number.parseInt(T.dataset.uhuuFlowIndex ?? "-1", 10)).filter((T) => Number.isInteger(T) && T >= 0);
      return [{ id: E, indexes: A }];
    });
    return w.length ? [{ kind: "columns", id: P.dataset.uhuuFlowLayoutId || "columns", columns: w }] : [];
  }), m = to(o), b = no(t, s), y = {}, x = {};
  for (const P of Array.from(
    t.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const w = P.dataset.uhuuFlowLayoutId;
    if (w) {
      y[w] = {}, x[w] = {};
      for (const k of Array.from(
        P.querySelectorAll(":scope > [data-uhuu-flow-column]")
      )) {
        const E = k.dataset.uhuuFlowColumn;
        if (!E) continue;
        const A = Array.from(
          k.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        y[w][E] = no(k, s), x[w][E] = to(A);
      }
    }
  }
  const S = [], C = c ? a : d.reduce((P, w) => P + w, 0) + Object.values(b).reduce((P, w) => P + w, 0);
  c || n.onZeroHeight?.();
  const N = Qf({
    nodes: v,
    heights: d,
    keys: u,
    metas: f,
    availableHeight: C,
    headerGroupKeys: h,
    headerGroupHeights: b,
    headerGroupRepeats: m,
    columnHeaderGroupHeights: y,
    columnHeaderGroupRepeats: x,
    onUnplaceableItem: (P) => {
      S.push(P), n.onUnplaceableItem?.(P);
    }
  }), I = Yi(JSON.stringify({
    version: 3,
    flowId: r,
    availableHeight: Math.round(C * 100) / 100,
    nodes: v,
    heights: d.map((P) => Math.round(P * 100) / 100),
    keys: u,
    metas: f,
    headerGroupKeys: h,
    headerGroupHeights: b,
    headerGroupRepeats: m,
    columnHeaderGroupHeights: y,
    columnHeaderGroupRepeats: x,
    unplaceableItems: S
  }));
  return { flowId: r, chunks: N, signature: I, unplaceableItems: S };
}
function Tc({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = g.useContext(On), i = g.useRef(null), s = g.useRef(""), a = g.useRef(!1), c = g.useRef(!1), l = g.useRef(/* @__PURE__ */ new Set());
  return eh(() => {
    if (o?.mode !== "measure" || !o.registerMeasurement || !i.current)
      return;
    const d = i.current;
    let u = null, f = null;
    s.current = "";
    const h = /* @__PURE__ */ new Set(), v = () => {
      if (f) {
        for (const x of Array.from(h))
          d.contains(x) || (f.unobserve(x), h.delete(x));
        d.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        ).forEach((x) => {
          h.has(x) || (h.add(x), f?.observe(x));
        });
      }
    };
    function m() {
      v();
      const x = d.querySelectorAll('[data-uhuu-flow="true"]');
      x.length > 1 && !a.current && kt() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const S = x[0];
      if (!S) return;
      const C = nh(d, S, {
        onZeroHeight: () => {
          c.current || !kt() || (c.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (N) => {
          l.current.has(N.key) || !kt() || (l.current.add(N.key), console.warn(
            `[uhuu-components] Static.Flow item "${N.key}" cannot fit in its FlowArea (${Math.round(N.requiredHeight)}px required > ${Math.round(N.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`
          ));
        }
      });
      !C || C.signature === s.current || (s.current = C.signature, r?.(C), o?.registerMeasurement?.(C));
    }
    const b = () => {
      u === null && (u = window.requestAnimationFrame(() => {
        u = null, m();
      }));
    };
    f = new ResizeObserver(b), f.observe(d), v(), b();
    const y = new MutationObserver(() => {
      b();
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
  }, [o, r]), /* @__PURE__ */ p("div", { ref: i, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function Fc({
  children: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: i = "",
  flowAreaStyle: s,
  onFlowMeasurement: a
}) {
  return /* @__PURE__ */ $(
    "div",
    {
      className: `h-full w-full flex flex-col ${r}`,
      style: o,
      "data-uhuu-flow-page": "true",
      children: [
        t,
        /* @__PURE__ */ p(
          Tc,
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
function $c(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function pi(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    t.has(n) || t.set(n, r);
  }), t;
}
function Lc(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    let r = t.get(n.itemIndex);
    r || (r = /* @__PURE__ */ new Set(), t.set(n.itemIndex, r)), r.add(n.groupKey);
  }
  return t;
}
function Bc({
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
  const h = g.useContext(On), v = h?.chunksByFlowId?.[e], m = h?.mode === "visible" && v ? v[h.pageIndex] : void 0, y = (h?.mode === "visible" && v ? m?.indexes ?? [] : h?.mode === "visible" && h.pageIndex > 0 ? [] : t.map((w, k) => k)).filter((w) => Number.isInteger(w) && w >= 0 && w < t.length), x = t.map((w, k) => $c(a?.(w, k))), S = x.map((w) => w?.key), C = pi(y), N = c ? Lc(m?.groupHeaders) : void 0, I = h?.mode === "visible" ? h.pageIndex : 0, P = h?.mode === "visible" && v ? v.length : 1;
  return g.useEffect(() => {
    if (!kt() || !i || !Object.keys(i).length || !t.length)
      return;
    const w = `${e}:${Object.keys(i).join("|")}`;
    ro.has(w) || t.some((E, A) => !!(s?.(E, A) ?? oo(E))) || (ro.add(w), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, s]), /* @__PURE__ */ $(
    "div",
    {
      className: l,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        m?.unplaceable && (f?.(m.unplaceable, { flowId: e, pageIndex: I, pageCount: P }) ?? /* @__PURE__ */ $(
          "div",
          {
            role: "alert",
            className: "uhuu-flow-unplaceable",
            "data-uhuu-flow-unplaceable": "true",
            "data-uhuu-flow-unplaceable-key": m.unplaceable.key,
            children: [
              "Unable to fit “",
              m.unplaceable.key,
              "” on a page. Reduce its height or split it."
            ]
          }
        )),
        y.map((w) => {
          const k = t[w];
          if (k === void 0) return null;
          const E = n(k, w), A = x[w], B = {
            ...Dc({
              itemIndex: w,
              fragmentIndexes: y,
              fragmentIndex: C.get(w) ?? -1,
              groupKeys: S,
              pageIndex: I,
              pageCount: P,
              itemCount: t.length
            }),
            flowId: e,
            itemKey: E,
            item: k
          }, _ = s?.(k, w) ?? oo(k), G = _c(
            _ ? i?.[_] : void 0,
            o?.(k, w)
          ), L = typeof d == "function" ? d(k, w) : d, F = !!(A && N?.get(w)?.has(A.key)), R = !!(A && c && (F || !N && B.isFirstInGroupOnPage && (B.isFirstInGroup || A.repeatHeader !== !1))), M = typeof u == "function" ? A ? u(A, B) : void 0 : u;
          return /* @__PURE__ */ $(g.Fragment, { children: [
            R && A && /* @__PURE__ */ p(
              "div",
              {
                className: M,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": A.key,
                children: c?.(A, B)
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: L,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(E),
                "data-uhuu-flow-index": w,
                "data-uhuu-flow-break-before": G.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": G.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": Vi(G.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": G.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": G.groupKey,
                "data-uhuu-flow-header-group-key": A?.key,
                "data-uhuu-flow-header-repeat": A ? A.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(k, w, B)
              }
            )
          ] }, E);
        })
      ]
    }
  );
}
function oh({
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
  getColumnGroupProps: v,
  getColumnProps: m,
  getColumnItemProps: b
}) {
  Ac({ nodes: n, itemCount: t.length });
  const y = g.useContext(On), x = y?.chunksByFlowId?.[e], S = y?.mode === "visible" && x ? x[y.pageIndex] : void 0, C = y?.mode !== "visible", N = y?.mode === "visible" ? y.pageIndex : 0, I = y?.mode === "visible" && x ? x.length : 1, P = t.map((_, G) => $c(c?.(_, G))), w = P.map((_) => _?.key), k = {
    flowId: e
  };
  g.useEffect(() => {
    if (!kt() || !s || !Object.keys(s).length || !t.length)
      return;
    const _ = `${e}:columns:${Object.keys(s).join("|")}`;
    ro.has(_) || t.some((L, F) => !!(a?.(L, F) ?? oo(L))) || (ro.add(_), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, a]);
  const E = (_) => _ ? h?.(_, { flowId: e, pageIndex: N, pageCount: I }) ?? /* @__PURE__ */ $(
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
  ) : null, A = (_, G, L, F = !1, R) => {
    const M = _.filter((H) => Number.isInteger(H) && H >= 0 && H < t.length), D = pi(M), K = R ? pi(R) : void 0, j = l ? Lc(G?.groupHeaders) : void 0;
    return M.map((H) => {
      const V = t[H];
      if (V === void 0) return null;
      const Y = r(V, H), z = P[H], W = D.get(H) ?? -1, U = K?.get(H) ?? -1, Z = {
        ...Dc({
          itemIndex: H,
          fragmentIndexes: M,
          fragmentIndex: W,
          groupKeys: w,
          pageIndex: N,
          pageCount: I,
          itemCount: t.length,
          previousSourceIndex: G?.previousSourceIndex ?? (U > 0 ? R?.[U - 1] : void 0)
        }),
        flowId: e,
        itemKey: Y,
        item: V
      }, te = a?.(V, H) ?? oo(V), re = _c(
        te ? s?.[te] : void 0,
        i?.(V, H)
      ), be = typeof u == "function" ? u(V, H) : u, oe = L?.(H), Ne = !!(z && j?.get(H)?.has(z.key)), Xe = !!(z && l && (Ne || !j && Z.isFirstInGroupOnPage && (Z.isFirstInGroup || z.repeatHeader !== !1))), on = typeof f == "function" ? z ? f(z, Z) : void 0 : f;
      return /* @__PURE__ */ $(g.Fragment, { children: [
        Xe && z && /* @__PURE__ */ p(
          "div",
          {
            className: on,
            style: { display: "flow-root" },
            "data-uhuu-flow-group-header": "true",
            "data-uhuu-flow-header-group-key": z.key,
            children: l?.(z, Z)
          }
        ),
        /* @__PURE__ */ p(
          "div",
          {
            className: [be, oe?.className].filter(Boolean).join(" "),
            style: { display: "flow-root", ...oe?.style },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-layout-node": F ? "item" : void 0,
            "data-uhuu-flow-key": String(Y),
            "data-uhuu-flow-index": H,
            "data-uhuu-flow-break-before": re.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": re.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": Vi(re.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": re.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": re.groupKey,
            "data-uhuu-flow-header-group-key": z?.key,
            "data-uhuu-flow-header-repeat": z ? z.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(V, H, Z)
          }
        )
      ] }, Y);
    });
  }, T = new Map(
    n.filter((_) => _.kind === "columns").map((_) => [_.id, _])
  ), B = C ? n : S?.layout ?? [];
  return /* @__PURE__ */ p(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: B.map((_, G) => {
        if (_.kind === "item")
          return /* @__PURE__ */ p(g.Fragment, { children: A([_.index], void 0, void 0, !0) }, `item:${_.index}:${G}`);
        if (_.kind === "items")
          return /* @__PURE__ */ $(g.Fragment, { children: [
            E(_.chunk.unplaceable),
            A(_.chunk.indexes, _.chunk, void 0, !0)
          ] }, `items:${G}`);
        const L = C ? _ : T.get(_.id);
        if (!L) return null;
        const F = new Map(L.columns.map((D) => [D.id, D])), R = C ? L.columns.map((D) => ({ id: D.id })) : _.columns, M = v?.(L, k);
        return /* @__PURE__ */ p(
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
            "data-uhuu-flow-layout-id": L.id,
            children: R.map((D) => {
              const K = F.get(D.id);
              if (!K) return null;
              const j = m?.(L, K, k), H = D.chunk?.indexes ?? K.indexes;
              return /* @__PURE__ */ $(
                "div",
                {
                  className: j?.className,
                  style: {
                    minWidth: 0,
                    flex: "1 1 0%",
                    display: "flex",
                    flexDirection: "column",
                    ...j?.style
                  },
                  "data-uhuu-flow-column": K.id,
                  children: [
                    E(D.chunk?.unplaceable),
                    A(
                      H,
                      D.chunk,
                      (V) => b?.(
                        L,
                        K,
                        V,
                        k
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
          `columns:${L.id}:${G}`
        );
      })
    }
  );
}
const Bn = (e, t) => {
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
}, ih = (e) => {
  const t = Pe(_t);
  return /* @__PURE__ */ p(
    "div",
    {
      className: e.className,
      ...Bn(e, t),
      children: e.children
    }
  );
};
function sh(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function zc(e, t, n, r = "") {
  const o = sh(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const ah = /\s*(page-break-before|break-before)\s*/i, ch = 1, lh = 3, uh = 8;
function dh(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fh(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function hh(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === uh) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === lh) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: dh(i), text: i });
      return;
    }
    if (o.nodeType === ch) {
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
function ph(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const s = i.type ?? "text", a = i.html ?? "";
    a && (r.push({
      id: zc(s, i.text ?? a, r.length, n),
      type: s,
      html: a,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function Hc(e = "", t = {}) {
  const n = t.breakComment ?? ah, o = (t.parseHtml ?? ((i) => hh(i, n)))(e);
  return ph(Array.isArray(o) ? o : [], t);
}
const gh = {
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
let aa = !1;
function mh(e) {
  return g.useMemo(() => e === !1 ? (kt() && !aa && (aa = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : fh, [e]);
}
function vh({
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
  sanitize: v,
  editable: m,
  parseHtml: b
}) {
  const y = g.useMemo(
    () => Hc(e, { idPrefix: c, parseHtml: b }),
    [e, c, b]
  ), x = g.useMemo(
    () => ({ ...gh, ...u ?? {} }),
    [u]
  ), S = mh(v), C = g.useCallback(
    (P, w) => ({
      breakBefore: P.breakBefore,
      ...f?.(P, w) ?? {}
    }),
    [f]
  ), N = g.useCallback(
    (P, w) => h ? h(P, w) : /* @__PURE__ */ p(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: S(P.html) }
      }
    ),
    [h, S]
  ), I = /* @__PURE__ */ p(
    Bc,
    {
      id: a,
      items: y,
      getKey: (P) => P.id,
      className: l,
      itemClassName: d,
      metaDefaults: x,
      getItemMeta: C,
      renderItem: N
    }
  );
  return /* @__PURE__ */ p(
    Fc,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: s,
      header: t,
      footer: n,
      children: m ? /* @__PURE__ */ p(ih, { dialog: m, children: I }) : I
    }
  );
}
const bh = /<!--\s*(page-break-before|break-before)\s*-->/i, yh = /^\s*\[[^\]]+\]:\s+\S+/, ca = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function _r(e) {
  return e.trim() === "";
}
function la(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function ua(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function da(e) {
  return /^(```|~~~)/.test(e.trim());
}
function fa(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function ha(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function pa(e) {
  return bh.test(e.trim());
}
function wh(e) {
  return yh.test(e);
}
function xh(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const s = o ? `${o} ${i}` : i;
    o && s.length > t ? (r.push(o), o = i) : o = s;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Ch(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function Sh(e, t, n, r, o, i) {
  const s = n.join(`
`).trim();
  if (!s) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, c = t === "paragraph" ? xh(s, a) : [s];
  for (let l = 0; l < c.length; l += 1) {
    const d = c[l], u = Ch(d, i);
    e.push({
      id: zc(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: l === 0 ? r : !1
    });
  }
  return !0;
}
function Ph(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const l of r)
    wh(l) ? o.push(l) : i.push(l);
  const s = [];
  let a = 0, c = !1;
  for (; a < i.length; ) {
    if (_r(i[a])) {
      a += 1;
      continue;
    }
    if (pa(i[a])) {
      c = !0, a += 1;
      continue;
    }
    const l = a;
    let d = "paragraph";
    if (da(i[a])) {
      d = "code";
      const u = i[a].trim().slice(0, 3);
      for (a += 1; a < i.length && !i[a].trim().startsWith(u); )
        a += 1;
      a < i.length && (a += 1);
    } else if (la(i[a]))
      d = "heading", a += 1;
    else if (fa(i[a]))
      d = "rule", a += 1;
    else if (ca.test(i[a]))
      d = "image", a += 1;
    else if (ha(i, a))
      for (d = "table", a += 2; a < i.length && i[a].includes("|") && !_r(i[a]); )
        a += 1;
    else if (ua(i[a]))
      for (d = "list", a += 1; a < i.length && !_r(i[a]); )
        a += 1;
    else if (i[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < i.length && i[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < i.length && !_r(i[a]) && !la(i[a]) && !da(i[a]) && !fa(i[a]) && !ca.test(i[a]) && !ha(i, a) && !ua(i[a]) && !i[a].trim().startsWith(">") && !pa(i[a]); )
        a += 1;
    Sh(s, d, i.slice(l, a), c, t, o) && (c = !1);
  }
  return s;
}
const ga = (e) => `${Number(e.toFixed(4))}mm`;
function Ih(e, t) {
  const n = le(!1);
  ce(() => {
    t || n.current || !kt() || (n.current = !0, console.warn(
      `[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`
    ));
  }, [e, t]);
}
const Kc = hr(function({
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
  rightPageKey: v
}, m) {
  const b = Pe(_t), y = a !== void 0 ? en(a) : b?.page?.binding ?? null, x = c ?? b?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
  Ih(t, y);
  const N = (E) => s ? ({ pageNo: A }) => s({ pageNo: A, side: E, sheet: t }) : void 0, I = /* @__PURE__ */ p(
    ir,
    {
      className: `uhuu-page-sheet--panel ${u}`.trim(),
      pageNo: S,
      overlay: N("left"),
      showBleed: x,
      "data-page-key": h,
      children: n
    }
  ), P = /* @__PURE__ */ p(
    ir,
    {
      className: `uhuu-page-sheet--panel ${f}`.trim(),
      pageNo: C,
      overlay: N("right"),
      showBleed: x,
      "data-page-key": v,
      children: r
    }
  );
  if (!y)
    return /* @__PURE__ */ $($e, { children: [
      I,
      P
    ] });
  const w = t === "inner", k = w && y.glue > 0;
  return /* @__PURE__ */ $(
    "div",
    {
      ref: m,
      className: `uhuu-page-sheet uhuu-cover-spread ${l}`.trim(),
      style: d,
      "data-sheet": t,
      "data-spine": y.spine,
      "data-glue": y.glue,
      children: [
        /* @__PURE__ */ p("div", { className: "uhuu-spread-panel", "data-side": "left", children: I }),
        /* @__PURE__ */ $("div", { className: "uhuu-spread-spine", "data-blank": w ? "true" : "false", children: [
          !w && o,
          x && /* @__PURE__ */ p(
            "div",
            {
              className: "uhuu-spread-guide",
              "data-label": `spine ${ga(y.spine)}${w ? " · blank" : ""}`
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "uhuu-spread-panel", "data-side": "right", children: P }),
        k && ["left", "right"].map((E) => /* @__PURE__ */ p("div", { className: "uhuu-glue-zone", "data-side": E, children: x && /* @__PURE__ */ p("div", { className: "uhuu-spread-guide", "data-label": `glue ${ga(y.glue)}` }) }, E))
      ]
    }
  );
});
function jc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = jc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Gc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = jc(e)) && (r && (r += " "), r += t);
  return r;
}
const Nh = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, kh = (e, t) => ({
  classGroupId: e,
  validator: t
}), Wc = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), io = "-", ma = [], Rh = "arbitrary..", Eh = (e) => {
  const t = Ah(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Dh(s);
      const a = s.split(io), c = a[0] === "" && a.length > 1 ? 1 : 0;
      return Vc(a, c, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const c = r[s], l = n[s];
        return c ? l ? Nh(l, c) : c : l || ma;
      }
      return n[s] || ma;
    }
  };
}, Vc = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const l = Vc(e, t + 1, i);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(io) : e.slice(t).join(io), c = s.length;
  for (let l = 0; l < c; l++) {
    const d = s[l];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Dh = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Rh + r : void 0;
})(), Ah = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Mh(n, t);
}, Mh = (e, t) => {
  const n = Wc();
  for (const r in e) {
    const o = e[r];
    qi(o, n, r, t);
  }
  return n;
}, qi = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    Oh(s, t, n, r);
  }
}, Oh = (e, t, n, r) => {
  if (typeof e == "string") {
    _h(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Th(e, t, n, r);
    return;
  }
  Fh(e, t, n, r);
}, _h = (e, t, n) => {
  const r = e === "" ? t : Uc(t, e);
  r.classGroupId = n;
}, Th = (e, t, n, r) => {
  if ($h(e)) {
    qi(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(kh(n, e));
}, Fh = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, c] = o[s];
    qi(c, Uc(t, a), n, r);
  }
}, Uc = (e, t) => {
  let n = e;
  const r = t.split(io), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = Wc(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, $h = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Lh = (e) => {
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
}, gi = "!", va = ":", Bh = [], ba = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), zh = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, c = 0, l;
    const d = o.length;
    for (let m = 0; m < d; m++) {
      const b = o[m];
      if (s === 0 && a === 0) {
        if (b === va) {
          i.push(o.slice(c, m)), c = m + 1;
          continue;
        }
        if (b === "/") {
          l = m;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? a++ : b === ")" && a--;
    }
    const u = i.length === 0 ? o : o.slice(c);
    let f = u, h = !1;
    u.endsWith(gi) ? (f = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(gi) && (f = u.slice(1), h = !0)
    );
    const v = l && l > c ? l - c : void 0;
    return ba(i, h, f, v);
  };
  if (t) {
    const o = t + va, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : ba(Bh, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Hh = (e) => {
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
}, Kh = (e) => ({
  cache: Lh(e.cacheSize),
  parseClassName: zh(e),
  sortModifiers: Hh(e),
  postfixLookupClassGroupIds: jh(e),
  ...Eh(e)
}), jh = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, Gh = /\s+/, Wh = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i,
    postfixLookupClassGroupIds: s
  } = t, a = [], c = e.trim().split(Gh);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: b
    } = n(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!b, x;
    if (y) {
      const P = m.substring(0, b);
      x = r(P);
      const w = x && s[x] ? r(m) : void 0;
      w && w !== x && (x = w, y = !1);
    } else
      x = r(m);
    if (!x) {
      if (!y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = r(m), !x) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const S = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), C = v ? S + gi : S, N = C + x;
    if (a.indexOf(N) > -1)
      continue;
    a.push(N);
    const I = o(x, y);
    for (let P = 0; P < I.length; ++P) {
      const w = I[P];
      a.push(C + w);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Vh = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Yc(n)) && (o && (o += " "), o += r);
  return o;
}, Yc = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Yc(e[r])) && (n && (n += " "), n += t);
  return n;
}, Uh = (e, ...t) => {
  let n, r, o, i;
  const s = (c) => {
    const l = t.reduce((d, u) => u(d), e());
    return n = Kh(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }, a = (c) => {
    const l = r(c);
    if (l)
      return l;
    const d = Wh(c, n);
    return o(c, d), d;
  };
  return i = s, (...c) => i(Vh(...c));
}, Yh = [], Ae = (e) => {
  const t = (n) => n[e] || Yh;
  return t.isThemeGetter = !0, t;
}, qc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Xc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qh = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Xh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ep = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => qh.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), vt = (e) => !!e && Number.isInteger(Number(e)), Vo = (e) => e.endsWith("%") && ae(e.slice(0, -1)), It = (e) => Xh.test(e), Zc = () => !0, tp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zh.test(e) && !Jh.test(e)
), Xi = () => !1, np = (e) => Qh.test(e), rp = (e) => ep.test(e), op = (e) => !q(e) && !X(e), ip = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), sp = (e) => tn(e, el, Xi), q = (e) => qc.test(e), fn = (e) => tn(e, tl, tp), ya = (e) => tn(e, pp, ae), ap = (e) => tn(e, rl, Zc), cp = (e) => tn(e, nl, Xi), wa = (e) => tn(e, Jc, Xi), lp = (e) => tn(e, Qc, rp), Tr = (e) => tn(e, ol, np), X = (e) => Xc.test(e), Jn = (e) => bn(e, tl), up = (e) => bn(e, nl), xa = (e) => bn(e, Jc), dp = (e) => bn(e, el), fp = (e) => bn(e, Qc), Fr = (e) => bn(e, ol, !0), hp = (e) => bn(e, rl, !0), tn = (e, t, n) => {
  const r = qc.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, bn = (e, t, n = !1) => {
  const r = Xc.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Jc = (e) => e === "position" || e === "percentage", Qc = (e) => e === "image" || e === "url", el = (e) => e === "length" || e === "size" || e === "bg-size", tl = (e) => e === "length", pp = (e) => e === "number", nl = (e) => e === "family-name", rl = (e) => e === "number" || e === "weight", ol = (e) => e === "shadow", gp = () => {
  const e = Ae("color"), t = Ae("font"), n = Ae("text"), r = Ae("font-weight"), o = Ae("tracking"), i = Ae("leading"), s = Ae("breakpoint"), a = Ae("container"), c = Ae("spacing"), l = Ae("radius"), d = Ae("shadow"), u = Ae("inset-shadow"), f = Ae("text-shadow"), h = Ae("drop-shadow"), v = Ae("blur"), m = Ae("perspective"), b = Ae("aspect"), y = Ae("ease"), x = Ae("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], N = () => [...C(), X, q], I = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], w = () => [X, q, c], k = () => [jt, "full", "auto", ...w()], E = () => [vt, "none", "subgrid", X, q], A = () => ["auto", {
    span: ["full", vt, X, q]
  }, vt, X, q], T = () => [vt, "auto", X, q], B = () => ["auto", "min", "max", "fr", X, q], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...w()], F = () => [jt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], R = () => [jt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()], M = () => [jt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...w()], D = () => [e, X, q], K = () => [...C(), xa, wa, {
    position: [X, q]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", dp, sp, {
    size: [X, q]
  }], V = () => [Vo, Jn, fn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    X,
    q
  ], z = () => ["", ae, Jn, fn], W = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [ae, Vo, xa, wa], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    q
  ], te = () => ["none", ae, X, q], re = () => ["none", ae, X, q], be = () => [ae, X, q], oe = () => [jt, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [It],
      breakpoint: [It],
      color: [Zc],
      container: [It],
      "drop-shadow": [It],
      ease: ["in", "out", "in-out"],
      font: [op],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [It],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [It],
      shadow: [It],
      spacing: ["px", ae],
      text: [It],
      "text-shadow": [It],
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
        aspect: ["auto", "square", jt, q, X, b]
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
      "container-named": [ip],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, q, X, a]
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
        object: N()
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
        inset: k()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": k()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": k()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": k(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: k()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": k(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: k()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": k()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": k()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: k()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: k()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: k()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: k()
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
        z: [vt, "auto", X, q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [jt, "full", "auto", a, ...w()]
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
        flex: [ae, jt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, X, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, X, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [vt, "first", "last", "none", X, q]
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
        col: A()
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
        "grid-rows": E()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: A()
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
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
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
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
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
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
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
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: w()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: L()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
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
        "space-y": w()
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
        size: F()
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
        w: [a, "screen", ...F()]
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
          ...F()
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
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Jn, fn]
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
        font: [r, hp, ap]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Vo, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [up, cp, t]
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
        "line-clamp": [ae, "none", X, ya]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...w()
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", X, fn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", X, q]
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
        indent: w()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [vt, X, q]
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
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: j()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: H()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, vt, X, q],
          radial: ["", X, q],
          conic: [vt, X, q]
        }, fp, lp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
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
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
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
        border: [...W(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": D()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, X, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Jn, fn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
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
          Fr,
          Tr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Fr, Tr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, fn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
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
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, Fr, Tr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, X, q]
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
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
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
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: j()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: H()
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
        brightness: [ae, X, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, X, q]
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
          Fr,
          Tr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, X, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, X, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, X, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, X, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, X, q]
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
        "backdrop-brightness": [ae, X, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, X, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, X, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, X, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, X, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, X, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, X, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, X, q]
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
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
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
        duration: [ae, "initial", X, q]
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
        delay: [ae, X, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, X, q]
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
        perspective: [m, X, q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
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
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: be()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": be()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": be()
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
        origin: N()
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
        translate: oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": oe()
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
        zoom: [vt, X, q]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: D()
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
        caret: D()
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
        "scrollbar-thumb": D()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": D()
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": w()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": w()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Jn, fn, ya]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, mp = /* @__PURE__ */ Uh(gp);
function ue(...e) {
  return mp(Gc(e));
}
const Zi = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Ca = (e, t) => e && e > 0 ? e + t : 0, Ji = ({ width: e, left: t = 0, right: n = 0 }, r, o, i) => {
  if (e)
    return !t && !n ? e + o : e;
  let s = i * r;
  return t || (s += i * o), n || (s += i * o), (t || n) && (s -= t + n), s;
}, il = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, i = r + 2 * n, s = Ji(e, r, n, o), a = Ca(e.left, n), c = t === "spread" && e.side === "end" ? -r + a : a, l = i - (c + s);
  return {
    top: `${Math.max(0, Ca(e.top, n))}mm`,
    right: `${Math.max(0, l)}mm`
  };
}, Qi = (e) => {
  const t = Pe(_t), n = Zi({
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
    bottom: v = 0
  } = e, m = (P) => `${P}mm`, b = () => Ji({ width: l, left: u, right: f }, o, r, 1), y = () => {
    let P = d;
    return d ? !h && !v && (P += r) : (P = i, h || (P += r), v || (P += r), (h || v) && (P -= (h ?? 0) + (v ?? 0))), P;
  }, x = b(), S = y(), C = (P) => P !== void 0 ? m(P) : void 0, I = ((P) => Object.fromEntries(
    Object.entries(P).filter(([w, k]) => k !== void 0)
  ))({
    backgroundColor: c,
    width: C(x),
    height: C(S),
    left: C(u > 0 ? u + r : u),
    right: C(f > 0 ? f + r : f),
    top: C(h > 0 ? h + r : h),
    bottom: C(v > 0 ? v + r : v)
  });
  return /* @__PURE__ */ p("div", { className: "uhuu-image-container", style: I, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ $(
    "div",
    {
      className: "uhuu-image-inner",
      ...Bn(e, t),
      children: [
        /* @__PURE__ */ p(
          "img",
          {
            className: ue("cover-image object-cover object-center", a),
            src: s || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const vp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Sa = (e) => {
  const t = bp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, sl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), yp = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var wp = {
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
const xp = hr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, c) => hi(
    "svg",
    {
      ref: c,
      ...wp,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: sl("lucide", o),
      ...!i && !yp(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([l, d]) => hi(l, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Ie = (e, t) => {
  const n = hr(
    ({ className: r, ...o }, i) => hi(xp, {
      ref: i,
      iconNode: t,
      className: sl(
        `lucide-${vp(Sa(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Sa(e), n;
};
const Cp = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Sp = Ie("arrow-down", Cp);
const Pp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Pa = Ie("arrow-up-down", Pp);
const Ip = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Np = Ie("arrow-up", Ip);
const kp = [
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
], Rp = Ie("book-dashed", kp);
const Ep = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], es = Ie("check", Ep);
const Dp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], al = Ie("chevron-down", Dp);
const Ap = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Mp = Ie("chevron-right", Ap);
const Op = [
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
], _p = Ie("clipboard-list", Op);
const Tp = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Fp = Ie("copy", Tp);
const $p = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], cl = Ie("ellipsis", $p);
const Lp = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], ll = Ie("grip-vertical", Lp);
const Bp = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], mi = Ie("lock", Bp);
const zp = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], Hp = Ie("maximize", zp);
const Kp = [["path", { d: "M5 12h14", key: "1ays0h" }]], jp = Ie("minus", Kp);
const Gp = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], Wp = Ie("pencil", Gp);
const Vp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], bt = Ie("plus", Vp);
const Up = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Yp = Ie("search", Up);
const qp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Xp = Ie("trash-2", qp);
const Zp = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], Jp = Ie("unfold-horizontal", Zp);
const Qp = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], eg = Ie("unfold-vertical", Qp);
const tg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ul = Ie("x", tg);
const ng = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], rg = Ie("zoom-in", ng);
const og = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], ig = Ie("zoom-out", og), dl = g.createContext({
  portalContainer: null
});
function ts() {
  return g.useContext(dl);
}
function sg({ children: e }) {
  const [t, n] = g.useState(null);
  return g.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ p(dl.Provider, { value: { portalContainer: t }, children: e });
}
const fl = Qt({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function ns() {
  return Pe(fl);
}
function rs() {
  const { interactive: e } = ns();
  return !e;
}
function ag() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function cg() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function lg({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = ag(), o = n || cg(), i = r ? !1 : t, [s, a] = se(i);
  return /* @__PURE__ */ p(fl.Provider, { value: { interactive: s, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ p(sg, { children: /* @__PURE__ */ p("div", { "data-uhuu-interactive": s ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const Ia = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Na = Gc, hl = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Na(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const d = n?.[l], u = i?.[l];
    if (d === null) return null;
    const f = Ia(d) || Ia(u);
    return o[l][f];
  }), a = n && Object.entries(n).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: f, ...h } = d;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...a
      }[m]) : {
        ...i,
        ...a
      }[m] === b;
    }) ? [
      ...l,
      u,
      f
    ] : l;
  }, []);
  return Na(e, s, c, n?.class, n?.className);
}, ug = hl(
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
), Le = g.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ p(
    "button",
    {
      className: ue(ug({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
Le.displayName = "Button";
var dg = Object.defineProperty, zn = (e, t) => dg(e, "name", { value: t, configurable: !0 }), pl = !!(typeof window < "u" && window.document && window.document.createElement);
function ne(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ zn(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
zn(ne, "composeEventHandlers");
function fg(e) {
  if (!pl)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
zn(fg, "getOwnerWindow");
function vi(e) {
  if (!pl)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
zn(vi, "getOwnerDocument");
function gl(e, t = !1) {
  const { activeElement: n } = vi(e);
  if (!n?.nodeName)
    return null;
  if (ml(n) && n.contentDocument)
    return gl(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = vi(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
zn(gl, "getActiveElement");
function ml(e) {
  return e.tagName === "IFRAME";
}
zn(ml, "isFrame");
var hg = Object.defineProperty, os = (e, t) => hg(e, "name", { value: t, configurable: !0 });
function bi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
os(bi, "setRef");
function vl(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = bi(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : bi(e[o], null);
        }
      };
  };
}
os(vl, "composeRefs");
function me(...e) {
  return g.useCallback(vl(...e), e);
}
os(me, "useComposedRefs");
var pg = Object.defineProperty, tt = (e, t) => pg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function gg(e, t) {
  const n = g.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ tt((i) => {
    const { children: s, ...a } = i, c = g.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ p(n.Provider, { value: c, children: s });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(i, s = {}) {
    const { optional: a = !1 } = s, c = g.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return tt(o, "useContext"), [r, o];
}
tt(gg, "createContext");
// @__NO_SIDE_EFFECTS__
function ft(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s);
    a.displayName = i + "Context";
    const c = n.length;
    n = [...n, s];
    const l = /* @__PURE__ */ tt((u) => {
      const { scope: f, children: h, ...v } = u, m = f?.[e]?.[c] || a, b = g.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(m.Provider, { value: b, children: h });
    }, "Provider");
    l.displayName = i + "Provider";
    function d(u, f, h = {}) {
      const { optional: v = !1 } = h, m = f?.[e]?.[c] || a, b = g.useContext(m);
      if (b) return b;
      if (s !== void 0) return s;
      if (!v)
        throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return tt(d, "useContext"), [l, d];
  }
  tt(r, "createContext");
  const o = /* @__PURE__ */ tt(() => {
    const i = n.map((s) => g.createContext(s));
    return /* @__PURE__ */ tt(function(a) {
      const c = a?.[e] || i;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, bl(o, ...t)];
}
tt(ft, "createContextScope");
function bl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ tt(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ tt(function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
tt(bl, "composeContextScopes");
var Ye = globalThis?.document ? g.useLayoutEffect : () => {
}, mg = Object.defineProperty, vg = (e, t) => mg(e, "name", { value: t, configurable: !0 }), ka = g[" useEffectEvent ".trim().toString()], Ra = g[" useInsertionEffect ".trim().toString()];
function yl(e) {
  if (typeof ka == "function")
    return ka(e);
  const t = g.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Ra == "function" ? Ra(() => {
    t.current = e;
  }) : Ye(() => {
    t.current = e;
  }), g.useMemo(() => ((...n) => t.current?.(...n)), []);
}
vg(yl, "useEffectEvent");
var bg = Object.defineProperty, pr = (e, t) => bg(e, "name", { value: t, configurable: !0 }), yg = g[" useInsertionEffect ".trim().toString()] || Ye;
function yn({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ pr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, i, s] = wl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o, l = g.useCallback(
    (d) => {
      if (a) {
        const u = xl(d) ? d(e) : d;
        u !== e && s.current?.(u);
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [c, l];
}
pr(yn, "useControllableState");
function wl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), i = g.useRef(t);
  return yg(() => {
    i.current = t;
  }, [t]), g.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
pr(wl, "useUncontrolledState");
function xl(e) {
  return typeof e == "function";
}
pr(xl, "isFunction");
var Ea = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function wg(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: s, caller: a } = t, c = o !== void 0, l = yl(s), d = [{ ...n, state: i }];
  r && d.push(r);
  const [u, f] = g.useReducer(
    (b, y) => {
      if (y.type === Ea)
        return { ...b, state: y.state };
      const x = e(b, y);
      return c && !Object.is(x.state, b.state) && l(x.state), x;
    },
    ...d
  ), h = u.state, v = g.useRef(h);
  g.useEffect(() => {
    v.current !== h && (v.current = h, c || l(h));
  }, [h, v, c]);
  const m = g.useMemo(() => o !== void 0 ? { ...u, state: o } : u, [u, o]);
  return g.useEffect(() => {
    c && !Object.is(o, u.state) && f({ type: Ea, state: o });
  }, [o, u.state, c]), [m, f];
}
pr(wg, "useControllableStateReducer");
var xg = Object.defineProperty, ht = (e, t) => xg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  const t = g.forwardRef((n, r) => {
    let { children: o, ...i } = n, s = null, a = !1;
    const c = [];
    yi(o) && typeof $r == "function" && (o = $r(o._payload)), g.Children.forEach(o, (f) => {
      if (Il(f)) {
        a = !0;
        const h = f;
        let v = "child" in h.props ? h.props.child : h.props.children;
        yi(v) && typeof $r == "function" && (v = $r(v._payload)), s = Sg(h, v), c.push(s?.props?.children);
      } else
        c.push(f);
    }), s ? s = g.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && g.Children.count(o) === 1 && g.isValidElement(o) && (s = o)
    );
    const l = s ? Pl(s) : void 0, d = me(r, l);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          a ? Ng(e) : Ig(e)
        );
      return o;
    }
    const u = Sl(i, s.props ?? {});
    return s.type !== g.Fragment && (u.ref = r ? d : l), g.cloneElement(s, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
ht(Yt, "createSlot");
var Cl = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Cg(e) {
  const t = /* @__PURE__ */ ht((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Cl, t;
}
ht(Cg, "createSlottable");
var Sg = /* @__PURE__ */ ht((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return g.isValidElement(n) ? g.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return g.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Sl(e, t) {
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
ht(Sl, "mergeProps");
function Pl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
ht(Pl, "getElementRef");
function Il(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Cl;
}
ht(Il, "isSlottable");
var Pg = /* @__PURE__ */ Symbol.for("react.lazy");
function yi(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Pg && "_payload" in e && Nl(e._payload);
}
ht(yi, "isLazyComponent");
function Nl(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
ht(Nl, "isPromiseLike");
var Ig = /* @__PURE__ */ ht((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Ng = /* @__PURE__ */ ht((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), $r = g[" use ".trim().toString()], kg = Object.defineProperty, Rg = (e, t) => kg(e, "name", { value: t, configurable: !0 }), Eg = [
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
], ye = Eg.reduce((e, t) => {
  const n = /* @__PURE__ */ Yt(`Primitive.${t}`), r = g.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(c, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function is(e, t) {
  e && zi.flushSync(() => e.dispatchEvent(t));
}
Rg(is, "dispatchDiscreteCustomEvent");
var Dg = Object.defineProperty, Te = (e, t) => Dg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function xo(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ft(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ Te((m) => {
    const { scope: b, children: y } = m, x = g.useRef(null), S = g.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: b, itemMap: S, collectionRef: x, children: y });
  }, "CollectionProvider");
  s.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ Yt(a), l = g.forwardRef(
    (m, b) => {
      const { scope: y, children: x } = m, S = i(a, y), C = me(b, S.collectionRef);
      return /* @__PURE__ */ p(c, { ref: C, children: x });
    }
  );
  l.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ Yt(d), h = g.forwardRef(
    (m, b) => {
      const { scope: y, children: x, ...S } = m, C = g.useRef(null), N = me(b, C), I = i(d, y);
      return g.useEffect(() => (I.itemMap.set(C, { ref: C, ...S }), () => {
        I.itemMap.delete(C);
      })), /* @__PURE__ */ p(f, { [u]: "", ref: N, children: x });
    }
  );
  h.displayName = d;
  function v(m) {
    const b = i(e + "CollectionConsumer", m);
    return g.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const S = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (I, P) => S.indexOf(I.ref.current) - S.indexOf(P.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return Te(v, "useCollection"), [
    { Provider: s, Slot: l, ItemSlot: h },
    v,
    r
  ];
}
Te(xo, "createCollection");
var Da = /* @__PURE__ */ new WeakMap(), Uo = class Gt extends Map {
  static {
    Te(this, "OrderedDict");
  }
  #e;
  constructor(t) {
    super(t), this.#e = [...super.keys()], Da.set(this, !0);
  }
  set(t, n) {
    return Da.get(this) && (this.has(t) ? this.#e[this.#e.indexOf(t)] = t : this.#e.push(t)), super.set(t, n), this;
  }
  insert(t, n, r) {
    const o = this.has(n), i = this.#e.length, s = ss(t);
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
        let v = d[h];
        d[h] === n && (v = d[h + 1]), o && this.delete(n), u = this.get(v), this.set(n, r);
      } else {
        !f && d[h - 1] === n && (f = !0);
        const v = d[f ? h : h - 1], m = u;
        u = this.get(v), this.delete(v), this.set(v, m);
      }
    return this;
  }
  with(t, n, r) {
    const o = new Gt(this);
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
    const n = Ur(this.#e, t);
    if (n !== void 0)
      return this.get(n);
  }
  entryAt(t) {
    const n = Ur(this.#e, t);
    if (n !== void 0)
      return [n, this.get(n)];
  }
  indexOf(t) {
    return this.#e.indexOf(t);
  }
  keyAt(t) {
    return Ur(this.#e, t);
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
    return new Gt(r);
  }
  map(t, n) {
    const r = [];
    let o = 0;
    for (const i of this)
      r.push([i[0], Reflect.apply(t, n, [i, o, this])]), o++;
    return new Gt(r);
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
    return new Gt(n);
  }
  toReversed() {
    const t = new Gt();
    for (let n = this.size - 1; n >= 0; n--) {
      const r = this.keyAt(n), o = this.get(r);
      t.set(r, o);
    }
    return t;
  }
  toSpliced(...t) {
    const n = [...this.entries()];
    return n.splice(...t), new Gt(n);
  }
  slice(t, n) {
    const r = new Gt();
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
function Ur(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = kl(e, t);
  return n === -1 ? void 0 : e[n];
}
Te(Ur, "at");
function kl(e, t) {
  const n = e.length, r = ss(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Te(kl, "toSafeIndex");
function ss(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Te(ss, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Ag(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ft(t), [o, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Uo(),
      setItemMap: /* @__PURE__ */ Te(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ Te(({ state: S, ...C }) => S ? /* @__PURE__ */ p(c, { ...C, state: S }) : /* @__PURE__ */ p(a, { ...C }), "CollectionProvider");
  s.displayName = t;
  const a = /* @__PURE__ */ Te((S) => {
    const C = b();
    return /* @__PURE__ */ p(c, { ...S, state: C });
  }, "CollectionInit");
  a.displayName = t + "Init";
  const c = /* @__PURE__ */ Te((S) => {
    const { scope: C, children: N, state: I } = S, P = g.useRef(null), [w, k] = g.useState(
      null
    ), E = me(P, k), [A, T] = I;
    return g.useEffect(() => {
      if (!w) return;
      const B = Dl(() => {
      });
      return B.observe(w, {
        childList: !0,
        subtree: !0
      }), () => {
        B.disconnect();
      };
    }, [w]), /* @__PURE__ */ p(
      o,
      {
        scope: C,
        itemMap: A,
        setItemMap: T,
        collectionRef: E,
        collectionRefObject: P,
        collectionElement: w,
        children: N
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = t + "Impl";
  const l = e + "CollectionSlot", d = /* @__PURE__ */ Yt(l), u = g.forwardRef(
    (S, C) => {
      const { scope: N, children: I } = S, P = i(l, N), w = me(C, P.collectionRef);
      return /* @__PURE__ */ p(d, { ref: w, children: I });
    }
  );
  u.displayName = l;
  const f = e + "CollectionItemSlot", h = "data-radix-collection-item", v = /* @__PURE__ */ Yt(f), m = g.forwardRef(
    (S, C) => {
      const { scope: N, children: I, ...P } = S, w = g.useRef(null), [k, E] = g.useState(null), A = me(C, w, E), T = i(f, N), { setItemMap: B } = T, _ = g.useRef(P);
      Rl(_.current, P) || (_.current = P);
      const G = _.current;
      return g.useEffect(() => {
        const L = G;
        return B((F) => k ? F.has(k) ? F.set(k, { ...L, element: k }).toSorted(wi) : (F.set(k, { ...L, element: k }), F.toSorted(wi)) : F), () => {
          B((F) => !k || !F.has(k) ? F : (F.delete(k), new Uo(F)));
        };
      }, [k, G, B]), /* @__PURE__ */ p(v, { [h]: "", ref: A, children: I });
    }
  );
  m.displayName = f;
  function b() {
    return g.useState(new Uo());
  }
  Te(b, "useInitCollection");
  function y(S) {
    const { itemMap: C } = i(e + "CollectionConsumer", S);
    return C;
  }
  return Te(y, "useCollection"), [
    { Provider: s, Slot: u, ItemSlot: m },
    {
      createCollectionScope: r,
      useCollection: y,
      useInitCollection: b
    }
  ];
}
Te(Ag, "createCollection");
function Rl(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Te(Rl, "shallowEqual");
function El(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Te(El, "isElementPreceding");
function wi(e, t) {
  return !e[1].element || !t[1].element ? 0 : El(e[1].element, t[1].element) ? -1 : 1;
}
Te(wi, "sortByDocumentPosition");
function Dl(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Te(Dl, "getChildListObserver");
var Mg = Object.defineProperty, Og = (e, t) => Mg(e, "name", { value: t, configurable: !0 }), _g = g.createContext(void 0);
function Co(e) {
  const t = g.useContext(_g);
  return e || t || "ltr";
}
Og(Co, "useDirection");
var Tg = Object.defineProperty, Fg = (e, t) => Tg(e, "name", { value: t, configurable: !0 });
function xt(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Fg(xt, "useCallbackRef");
var $g = Object.defineProperty, _e = (e, t) => $g(e, "name", { value: t, configurable: !0 }), xi = "dismissableLayer.update", Lg = "dismissableLayer.pointerDownOutside", Bg = "dismissableLayer.focusOutside", Aa, Al = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Ml = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _e(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: l,
      ...d
    } = t, u = g.useContext(Al), [f, h] = g.useState(null), v = f?.ownerDocument ?? globalThis?.document, [, m] = g.useState({}), b = me(n, h), y = Array.from(u.layers), [x] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), S = x ? y.indexOf(x) : -1, C = f ? y.indexOf(f) : -1, N = u.layersWithOutsidePointerEventsDisabled.size > 0, I = C >= S, P = g.useRef(!1), w = _l(
      (T) => {
        s?.(T), c?.(T), T.defaultPrevented || l?.();
      },
      {
        ownerDocument: v,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: P,
        dismissableSurfaces: u.dismissableSurfaces,
        shouldHandlePointerDownOutside: g.useCallback(
          (T) => {
            if (!(T instanceof Node))
              return !1;
            const B = [...u.branches].some(
              (_) => _.contains(T)
            );
            return I && !B;
          },
          [u.branches, I]
        )
      }
    ), k = Tl((T) => {
      if (o && P.current)
        return;
      const B = T.target;
      [...u.branches].some((G) => G.contains(B)) || (a?.(T), c?.(T), T.defaultPrevented || l?.());
    }, v), E = f ? C === y.length - 1 : !1, A = xt((T) => {
      T.key === "Escape" && (i?.(T), !T.defaultPrevented && l && (T.preventDefault(), l()));
    });
    return g.useEffect(() => {
      if (E)
        return v.addEventListener("keydown", A, { capture: !0 }), () => v.removeEventListener("keydown", A, { capture: !0 });
    }, [v, E, A]), g.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Aa = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Ci(), () => {
          r && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (v.body.style.pointerEvents = Aa));
        };
    }, [f, v, r, u]), g.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Ci());
    }, [f, u]), g.useEffect(() => {
      const T = /* @__PURE__ */ _e(() => m({}), "handleUpdate");
      return document.addEventListener(xi, T), () => document.removeEventListener(xi, T);
    }, []), /* @__PURE__ */ p(
      ye.div,
      {
        ...d,
        ref: b,
        style: {
          pointerEvents: N ? I ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: ne(t.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ne(t.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ne(
          t.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function Ol() {
  const e = g.useContext(Al), [t, n] = g.useState(null);
  return g.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
_e(Ol, "useDismissableLayerSurface");
var zg = /* @__PURE__ */ _e(() => !0, "IS_TRUE");
function _l(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = zg
  } = t, a = xt(e), c = g.useRef(!1), l = g.useRef(!1), d = g.useRef(/* @__PURE__ */ new Map()), u = g.useRef(() => {
  });
  return g.useEffect(() => {
    function f() {
      l.current = !1, o.current = !1, d.current.clear();
    }
    _e(f, "resetOutsideInteraction");
    function h() {
      return Array.from(d.current.values()).some(Boolean);
    }
    _e(h, "isOutsideInteractionIntercepted");
    function v(S) {
      if (!l.current)
        return;
      const C = S.target;
      C instanceof Node && [...i].some((I) => I.contains(C)) || d.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        l.current && u.current();
      }, 0);
    }
    _e(v, "handleInteractionCapture");
    function m(S) {
      l.current && d.current.set(S.type, !1);
    }
    _e(m, "handleInteractionBubble");
    const b = /* @__PURE__ */ _e((S) => {
      if (S.target && !c.current) {
        let C = function() {
          n.removeEventListener("click", u.current);
          const I = h();
          f(), I || as(
            Lg,
            a,
            N,
            { discrete: !0 }
          );
        };
        if (_e(C, "handleAndDispatchPointerDownOutsideEvent"), !s(S.target)) {
          n.removeEventListener("click", u.current), f(), c.current = !1;
          return;
        }
        const N = { originalEvent: S };
        l.current = !0, o.current = r && S.button === 0, d.current.clear(), !r || S.button !== 0 ? C() : (n.removeEventListener("click", u.current), u.current = C, n.addEventListener("click", u.current, { once: !0 }));
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
    for (const S of y)
      n.addEventListener(S, v, !0), n.addEventListener(S, m);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", b), n.removeEventListener("click", u.current);
      for (const S of y)
        n.removeEventListener(S, v, !0), n.removeEventListener(S, m);
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
    onPointerDownCapture: /* @__PURE__ */ _e(() => c.current = !0, "onPointerDownCapture")
  };
}
_e(_l, "usePointerDownOutside");
function Tl(e, t = globalThis?.document) {
  const n = xt(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = /* @__PURE__ */ _e((i) => {
      i.target && !r.current && as(Bg, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ _e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ _e(() => r.current = !1, "onBlurCapture")
  };
}
_e(Tl, "useFocusOutside");
function Ci() {
  const e = new CustomEvent(xi);
  document.dispatchEvent(e);
}
_e(Ci, "dispatchUpdate");
function as(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? is(o, i) : o.dispatchEvent(i);
}
_e(as, "handleAndDispatchCustomEvent");
var Hg = Object.defineProperty, cs = (e, t) => Hg(e, "name", { value: t, configurable: !0 }), Lr = 0, kn = null;
function Kg(e) {
  return So(), e.children;
}
cs(Kg, "FocusGuards");
function So() {
  g.useEffect(() => {
    kn || (kn = { start: Si(), end: Si() });
    const { start: e, end: t } = kn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Lr++, () => {
      Lr === 1 && (kn?.start.remove(), kn?.end.remove(), kn = null), Lr = Math.max(0, Lr - 1);
    };
  }, []);
}
cs(So, "useFocusGuards");
function Si() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
cs(Si, "createFocusGuard");
var jg = Object.defineProperty, ze = (e, t) => jg(e, "name", { value: t, configurable: !0 }), Yo = "focusScope.autoFocusOnMount", qo = "focusScope.autoFocusOnUnmount", Ma = { bubbles: !1, cancelable: !0 }, Fl = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ze(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...a
    } = t, [c, l] = g.useState(null), d = xt(i), u = xt(s), f = g.useRef(null), h = me(n, l), v = g.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    g.useEffect(() => {
      if (o) {
        let b = function(C) {
          if (v.paused || !c) return;
          const N = C.target;
          c.contains(N) ? f.current = N : Nt(f.current, { select: !0 });
        }, y = function(C) {
          if (v.paused || !c) return;
          const N = C.relatedTarget;
          N !== null && (c.contains(N) || Nt(f.current, { select: !0 }));
        }, x = function(C) {
          if (document.activeElement === document.body)
            for (const I of C)
              I.removedNodes.length > 0 && Nt(c);
        };
        ze(b, "handleFocusIn"), ze(y, "handleFocusOut"), ze(x, "handleMutations"), document.addEventListener("focusin", b), document.addEventListener("focusout", y);
        const S = new MutationObserver(x);
        return c && S.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", b), document.removeEventListener("focusout", y), S.disconnect();
        };
      }
    }, [o, c, v.paused]), g.useEffect(() => {
      if (c) {
        Oa.add(v);
        const b = document.activeElement;
        if (!c.contains(b)) {
          const x = new CustomEvent(Yo, Ma);
          c.addEventListener(Yo, d), c.dispatchEvent(x), x.defaultPrevented || ($l(Kl(ls(c)), { select: !0 }), document.activeElement === b && Nt(c));
        }
        return () => {
          c.removeEventListener(Yo, d), setTimeout(() => {
            const x = new CustomEvent(qo, Ma);
            c.addEventListener(qo, u), c.dispatchEvent(x), x.defaultPrevented || Nt(b ?? document.body, { select: !0 }), c.removeEventListener(qo, u), Oa.remove(v);
          }, 0);
        };
      }
    }, [c, d, u, v]);
    const m = g.useCallback(
      (b) => {
        if (!r && !o || v.paused) return;
        const y = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, x = document.activeElement;
        if (y && x) {
          const S = b.currentTarget, [C, N] = Ll(S);
          C && N ? !b.shiftKey && x === N ? (b.preventDefault(), r && Nt(C, { select: !0 })) : b.shiftKey && x === C && (b.preventDefault(), r && Nt(N, { select: !0 })) : x === S && b.preventDefault();
        }
      },
      [r, o, v.paused]
    );
    return /* @__PURE__ */ p(ye.div, { tabIndex: -1, ...a, ref: h, onKeyDown: m });
  }, "FocusScope")
);
function $l(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nt(r, { select: t }), document.activeElement !== n) return;
}
ze($l, "focusFirst");
function Ll(e) {
  const t = ls(e), n = Pi(t, e), r = Pi(t.reverse(), e);
  return [n, r];
}
ze(Ll, "getTabbableEdges");
function ls(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ ze((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
ze(ls, "getTabbableCandidates");
function Pi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Bl(r, { upTo: t })))
      return r;
}
ze(Pi, "findVisible");
function Bl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
ze(Bl, "isHidden");
function zl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
ze(zl, "isSelectableInput");
function Nt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zl(e) && t && e.select();
  }
}
ze(Nt, "focus");
var Oa = Hl();
function Hl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Ii(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ii(e, t), e[0]?.resume();
    }
  };
}
ze(Hl, "createFocusScopesStack");
function Ii(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
ze(Ii, "arrayRemove");
function Kl(e) {
  return e.filter((t) => t.tagName !== "A");
}
ze(Kl, "removeLinks");
var Gg = Object.defineProperty, Wg = (e, t) => Gg(e, "name", { value: t, configurable: !0 }), Vg = g[" useId ".trim().toString()] || (() => {
}), Ug = 0;
function Rt(e) {
  const [t, n] = g.useState(Vg());
  return Ye(() => {
    e || n((r) => r ?? String(Ug++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Wg(Rt, "useId");
const Yg = ["top", "right", "bottom", "left"], qt = Math.min, Et = Math.max, so = Math.round, Br = Math.floor, Dt = (e) => ({
  x: e,
  y: e
}), qg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jl(e, t, n) {
  return Et(e, qt(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function Hn(e) {
  return e.split("-")[1];
}
function us(e) {
  return e === "x" ? "y" : "x";
}
function ds(e) {
  return e === "y" ? "height" : "width";
}
function wt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function fs(e) {
  return us(wt(e));
}
function Xg(e, t, n) {
  n === void 0 && (n = !1);
  const r = Hn(e), o = fs(e), i = ds(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ao(s)), [s, ao(s)];
}
function Zg(e) {
  const t = ao(e);
  return [Ni(e), t, Ni(t)];
}
function Ni(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const _a = ["left", "right"], Ta = ["right", "left"], Jg = ["top", "bottom"], Qg = ["bottom", "top"];
function em(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ta : _a : t ? _a : Ta;
    case "left":
    case "right":
      return t ? Jg : Qg;
    default:
      return [];
  }
}
function tm(e, t, n, r) {
  const o = Hn(e);
  let i = em(Xt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ni)))), i;
}
function ao(e) {
  const t = Xt(e);
  return qg[t] + e.slice(t.length);
}
function nm(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function Gl(e) {
  return typeof e != "number" ? nm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function co(e) {
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
function Fa(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = wt(t), s = fs(t), a = ds(s), c = Xt(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  const v = Hn(t);
  return v && (h[s] += f * (v === "end" ? 1 : -1) * (n && l ? -1 : 1)), h;
}
async function rm(e, t) {
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
  } = Mt(t, e), v = Gl(h), b = a[f ? u === "floating" ? "reference" : "floating" : u], y = co(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(S)) && await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  }, N = co(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: S,
    strategy: c
  }) : x);
  return {
    top: (y.top - N.top + v.top) / C.y,
    bottom: (N.bottom - y.bottom + v.bottom) / C.y,
    left: (y.left - N.left + v.left) / C.x,
    right: (N.right - y.right + v.right) / C.x
  };
}
const om = 50, im = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: rm
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Fa(l, r, c), f = r, h = 0;
  const v = {};
  for (let m = 0; m < i.length; m++) {
    const b = i[m];
    if (!b)
      continue;
    const {
      name: y,
      fn: x
    } = b, {
      x: S,
      y: C,
      data: N,
      reset: I
    } = await x({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = S ?? d, u = C ?? u, v[y] = {
      ...v[y],
      ...N
    }, I && h < om && (h++, typeof I == "object" && (I.placement && (f = I.placement), I.rects && (l = I.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: d,
      y: u
    } = Fa(l, f, c)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: v
  };
}, sm = (e) => ({
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
    } = Mt(e, t) || {};
    if (l == null)
      return {};
    const u = Gl(d), f = {
      x: n,
      y: r
    }, h = fs(o), v = ds(h), m = await s.getDimensions(l), b = h === "y", y = b ? "top" : "left", x = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", C = i.reference[v] + i.reference[h] - f[h] - i.floating[v], N = f[h] - i.reference[h], I = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = I ? I[S] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(I))) && (P = a.floating[S] || i.floating[v]);
    const w = C / 2 - N / 2, k = P / 2 - m[v] / 2 - 1, E = qt(u[y], k), A = qt(u[x], k), T = P - m[v] - A, B = P / 2 - m[v] / 2 + w, _ = jl(E, B, T), G = !c.arrow && Hn(o) != null && B !== _ && i.reference[v] / 2 - (B < E ? E : A) - m[v] / 2 < 0, L = G ? B < E ? B - E : B - T : 0;
    return {
      [h]: f[h] + L,
      data: {
        [h]: _,
        centerOffset: B - _ - L,
        ...G && {
          alignmentOffset: L
        }
      },
      reset: G
    };
  }
}), am = function(e) {
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
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...b
      } = Mt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = Xt(o), x = wt(a), S = Xt(a) === a, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), N = f || (S || !m ? [ao(a)] : Zg(a)), I = v !== "none";
      !f && I && N.push(...tm(a, m, v, C));
      const P = [a, ...N], w = await c.detectOverflow(t, b), k = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && k.push(w[y]), u) {
        const _ = Xg(o, s, C);
        k.push(w[_[0]], w[_[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: k
      }], !k.every((_) => _ <= 0)) {
        var A, T;
        const _ = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, G = P[_];
        if (G && (!(u === "alignment" ? x !== wt(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((R) => wt(R.placement) === x ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let L = (T = E.filter((F) => F.overflows[0] <= 0).sort((F, R) => F.overflows[1] - R.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var B;
              const F = (B = E.filter((R) => {
                if (I) {
                  const M = wt(R.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, D) => M + D, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : B[0];
              F && (L = F);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function $a(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function La(e) {
  return Yg.some((t) => e[t] >= 0);
}
const cm = function(e) {
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
      } = Mt(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = $a(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: La(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = $a(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: La(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wl = /* @__PURE__ */ new Set(["left", "top"]);
async function lm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Xt(n), a = Hn(n), c = wt(n) === "y", l = Wl.has(s) ? -1 : 1, d = i && c ? -1 : 1, u = Mt(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
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
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), c ? {
    x: h * d,
    y: f * l
  } : {
    x: f * l,
    y: h * d
  };
}
const um = function(e) {
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
      } = t, c = await lm(t, e);
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
}, dm = function(e) {
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
          fn: (x) => {
            let {
              x: S,
              y: C
            } = x;
            return {
              x: S,
              y: C
            };
          }
        },
        ...l
      } = Mt(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, l), f = wt(o), h = us(f);
      let v = d[h], m = d[f];
      const b = (x, S) => jl(S + u[x === "y" ? "top" : "left"], S, S - u[x === "y" ? "bottom" : "right"]);
      s && (v = b(h, v)), a && (m = b(f, m));
      const y = c.fn({
        ...t,
        [h]: v,
        [f]: m
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
}, fm = function(e) {
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
      } = Mt(e, t), f = {
        x: o,
        y: i
      }, h = wt(s), v = us(h);
      let m = f[v], b = f[h];
      const y = Mt(l, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: (n = y.mainAxis) != null ? n : 0,
        crossAxis: (r = y.crossAxis) != null ? r : 0
      };
      if (d) {
        const N = v === "y" ? "height" : "width", I = a.reference[v] - a.floating[N] + x.mainAxis, P = a.reference[v] + a.reference[N] - x.mainAxis;
        m < I ? m = I : m > P && (m = P);
      }
      if (u) {
        var S, C;
        const N = v === "y" ? "width" : "height", I = Wl.has(Xt(s)), P = a.reference[h] - a.floating[N] + (I && ((S = c.offset) == null ? void 0 : S[h]) || 0) + (I ? 0 : x.crossAxis), w = a.reference[h] + a.reference[N] + (I ? 0 : ((C = c.offset) == null ? void 0 : C[h]) || 0) - (I ? x.crossAxis : 0);
        b < P ? b = P : b > w && (b = w);
      }
      return {
        [v]: m,
        [h]: b
      };
    }
  };
}, hm = function(e) {
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
      } = Mt(e, t), c = await o.detectOverflow(t, a), l = Xt(n), d = Hn(n), u = wt(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let v, m;
      l === "top" || l === "bottom" ? (v = l, m = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = d === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, y = f - c.left - c.right, x = qt(h - c[v], b), S = qt(f - c[m], y), C = t.middlewareData.shift, N = !C;
      let I = x, P = S;
      C != null && C.enabled.x && (P = y), C != null && C.enabled.y && (I = b), N && !d && (u ? P = f - 2 * Et(c.left, c.right) : I = h - 2 * Et(c.top, c.bottom)), await s({
        ...t,
        availableWidth: P,
        availableHeight: I
      });
      const w = await o.getDimensions(i.floating);
      return f !== w.width || h !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Po() {
  return typeof window < "u";
}
function Kn(e) {
  return Vl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tt(e) {
  var t;
  return (t = (Vl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vl(e) {
  return Po() ? e instanceof Node || e instanceof je(e).Node : !1;
}
function Ct(e) {
  return Po() ? e instanceof Element || e instanceof je(e).Element : !1;
}
function nn(e) {
  return Po() ? e instanceof HTMLElement || e instanceof je(e).HTMLElement : !1;
}
function Ba(e) {
  return !Po() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
function Io(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function pm(e) {
  return /^(table|td|th)$/.test(Kn(e));
}
function No(e) {
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
const gm = /transform|translate|scale|rotate|perspective|filter/, mm = /paint|layout|strict|content/, hn = (e) => !!e && e !== "none";
let Xo;
function hs(e) {
  const t = Ct(e) ? St(e) : e;
  return hn(t.transform) || hn(t.translate) || hn(t.scale) || hn(t.rotate) || hn(t.perspective) || !ps() && (hn(t.backdropFilter) || hn(t.filter)) || gm.test(t.willChange || "") || mm.test(t.contain || "");
}
function vm(e) {
  let t = mn(e);
  for (; nn(t) && !sr(t); ) {
    if (hs(t))
      return t;
    if (No(t))
      return null;
    t = mn(t);
  }
  return null;
}
function ps() {
  return Xo == null && (Xo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Xo;
}
function sr(e) {
  return /^(html|body|#document)$/.test(Kn(e));
}
function St(e) {
  return je(e).getComputedStyle(e);
}
function ko(e) {
  return Ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mn(e) {
  if (Kn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ba(e) && e.host || // Fallback.
    Tt(e)
  );
  return Ba(t) ? t.host : t;
}
function Ul(e) {
  const t = mn(e);
  return sr(t) ? (e.ownerDocument || e).body : nn(t) && Io(t) ? t : Ul(t);
}
function ar(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ul(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = je(o);
  if (i) {
    const a = ki(s);
    return t.concat(s, s.visualViewport || [], Io(o) ? o : [], a && n ? ar(a) : []);
  } else
    return t.concat(o, ar(o, [], n));
}
function ki(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yl(e) {
  const t = St(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = nn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = so(n) !== i || so(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function gs(e) {
  return Ct(e) ? e : e.contextElement;
}
function _n(e) {
  const t = gs(e);
  if (!nn(t))
    return Dt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Yl(t);
  let s = (i ? so(n.width) : n.width) / r, a = (i ? so(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const bm = /* @__PURE__ */ Dt(0);
function ql(e) {
  const t = je(e);
  return !ps() || !t.visualViewport ? bm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ym(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === je(e);
}
function vn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = gs(e);
  let s = Dt(1);
  t && (r ? Ct(r) && (s = _n(r)) : s = _n(e));
  const a = ym(i, n, r) ? ql(i) : Dt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i && r) {
    const f = je(i), h = Ct(r) ? je(r) : r;
    let v = f, m = ki(v);
    for (; m && h !== v; ) {
      const b = _n(m), y = m.getBoundingClientRect(), x = St(m), S = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * b.x, C = y.top + (m.clientTop + parseFloat(x.paddingTop)) * b.y;
      c *= b.x, l *= b.y, d *= b.x, u *= b.y, c += S, l += C, v = je(m), m = ki(v);
    }
  }
  return co({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function Ro(e, t) {
  const n = ko(e).scrollLeft;
  return t ? t.left + n : vn(Tt(e)).left + n;
}
function Xl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Ro(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function wm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Tt(r), a = t ? No(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Dt(1);
  const d = Dt(0), u = nn(r);
  if ((u || !i) && ((Kn(r) !== "body" || Io(s)) && (c = ko(r)), u)) {
    const h = vn(r);
    l = _n(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !i ? Xl(s, c) : Dt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + f.y
  };
}
function xm(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Cm(e) {
  const t = ko(e), n = e.ownerDocument.body, r = Et(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = Et(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + Ro(e);
  const s = -t.scrollTop;
  return St(n).direction === "rtl" && (i += Et(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: s
  };
}
const Sm = 25;
function Pm(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = je(e), i = Tt(e), s = o.visualViewport;
  let a = i.clientWidth, c = i.clientHeight, l = 0, d = 0;
  if (s) {
    const f = !ps() || t === "fixed";
    r ? f || (l = -s.offsetLeft, d = -s.offsetTop) : (a = s.width, c = s.height, f && (l = s.offsetLeft, d = s.offsetTop));
  }
  if (Ro(i) <= 0) {
    const f = i.ownerDocument, h = f.body, v = getComputedStyle(h), m = f.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, b = Math.abs(i.clientWidth - h.clientWidth - m), y = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? b / 2 : b;
    y <= Sm && (a -= y);
  }
  return {
    width: a,
    height: c,
    x: l,
    y: d
  };
}
function Im(e, t) {
  const n = vn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = _n(e), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function za(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = Pm(e, n, t);
  else if (t === "document")
    r = Cm(Tt(e));
  else if (Ct(t))
    r = Im(t, n);
  else {
    const o = ql(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return co(r);
}
function Nm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ar(e, [], !1).filter((a) => Ct(a) && Kn(a) !== "body"), o = null;
  const i = St(e).position === "fixed";
  let s = i ? mn(e) : e;
  for (; Ct(s) && !sr(s); ) {
    const a = St(s), c = hs(s), l = o ? o.position : i ? "fixed" : "";
    !c && (l === "fixed" || l === "absolute" && a.position === "static") ? r = r.filter((u) => u !== s) : o = a, s = mn(s);
  }
  return t.set(e, r), r;
}
function km(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? No(t) ? [] : Nm(t, this._c) : [].concat(n), r], a = za(t, s[0], o);
  let c = a.top, l = a.right, d = a.bottom, u = a.left;
  for (let f = 1; f < s.length; f++) {
    const h = za(t, s[f], o);
    c = Et(h.top, c), l = qt(h.right, l), d = qt(h.bottom, d), u = Et(h.left, u);
  }
  return {
    width: l - u,
    height: d - c,
    x: u,
    y: c
  };
}
function Rm(e) {
  const {
    width: t,
    height: n
  } = Yl(e);
  return {
    width: t,
    height: n
  };
}
function Em(e, t, n) {
  const r = nn(t), o = Tt(t), i = n === "fixed", s = vn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Dt(0);
  if ((r || !i) && ((Kn(t) !== "body" || Io(o)) && (a = ko(t)), r)) {
    const f = vn(t, !0, i, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  }
  !r && o && (c.x = Ro(o));
  const l = o && !r && !i ? Xl(o, a) : Dt(0), d = s.left + a.scrollLeft - c.x - l.x, u = s.top + a.scrollTop - c.y - l.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function Zo(e) {
  return St(e).position === "static";
}
function Ha(e, t) {
  if (!nn(e) || St(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tt(e) === n && (n = n.ownerDocument.body), n;
}
function Zl(e, t) {
  const n = je(e);
  if (No(e))
    return n;
  if (!nn(e)) {
    let o = mn(e);
    for (; o && !sr(o); ) {
      if (Ct(o) && !Zo(o))
        return o;
      o = mn(o);
    }
    return n;
  }
  let r = Ha(e, t);
  for (; r && pm(r) && Zo(r); )
    r = Ha(r, t);
  return r && sr(r) && Zo(r) && !hs(r) ? n : r || vm(e) || n;
}
const Dm = async function(e) {
  const t = this.getOffsetParent || Zl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Em(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Am(e) {
  return St(e).direction === "rtl";
}
const Mm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wm,
  getDocumentElement: Tt,
  getClippingRect: km,
  getOffsetParent: Zl,
  getElementRects: Dm,
  getClientRects: xm,
  getDimensions: Rm,
  getScale: _n,
  isElement: Ct,
  isRTL: Am
};
function Jl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Om(e, t, n) {
  let r = null, o;
  const i = Tt(e);
  function s() {
    var d;
    clearTimeout(o), (d = r) == null || d.disconnect(), r = null;
  }
  function a(d, u) {
    d === void 0 && (d = !1), u === void 0 && (u = 1), s();
    const f = e.getBoundingClientRect(), {
      left: h,
      top: v,
      width: m,
      height: b
    } = f;
    if (d || t(), !m || !b)
      return;
    const y = Br(v), x = Br(i.clientWidth - (h + m)), S = Br(i.clientHeight - (v + b)), C = Br(h), I = {
      rootMargin: -y + "px " + -x + "px " + -S + "px " + -C + "px",
      threshold: Et(0, qt(1, u)) || 1
    };
    let P = !0;
    function w(k) {
      const E = k[0].intersectionRatio;
      if (!Jl(f, e.getBoundingClientRect()))
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
      r = new IntersectionObserver(w, {
        ...I,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(w, I);
    }
    r.observe(e);
  }
  const c = je(e), l = () => a(n);
  return c.addEventListener("resize", l), a(!0), () => {
    c.removeEventListener("resize", l), s();
  };
}
function _m(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = gs(e), d = o || i ? [...l ? ar(l) : [], ...t ? ar(t) : []] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n), i && y.addEventListener("resize", n);
  });
  const u = l && a ? Om(l, n, i) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === l && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), t && h.observe(t));
  let v, m = c ? vn(e) : null;
  c && b();
  function b() {
    const y = vn(e);
    m && !Jl(m, y) && n(), m = y, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const Tm = um, Fm = dm, $m = am, Lm = hm, Bm = cm, Ka = sm, zm = fm, Hm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, i = {
    ...Mm,
    ...o.platform,
    _c: r
  };
  return im(e, t, {
    ...o,
    platform: i
  });
};
var Km = typeof document < "u", jm = function() {
}, Yr = Km ? Nc : jm;
function lo(e, t) {
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
        if (!lo(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !lo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ql(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ja(e, t) {
  const n = Ql(e);
  return Math.round(t * n) / n;
}
function Jo(e) {
  const t = g.useRef(e);
  return Yr(() => {
    t.current = e;
  }), t;
}
function Gm(e) {
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
  } = e, [d, u] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = g.useState(r);
  lo(f, r) || h(r);
  const [v, m] = g.useState(null), [b, y] = g.useState(null), x = g.useCallback((R) => {
    R !== I.current && (I.current = R, m(R));
  }, []), S = g.useCallback((R) => {
    R !== P.current && (P.current = R, y(R));
  }, []), C = i || v, N = s || b, I = g.useRef(null), P = g.useRef(null), w = g.useRef(d), k = c != null, E = Jo(c), A = Jo(o), T = Jo(l), B = g.useCallback(() => {
    if (!I.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    A.current && (R.platform = A.current), Hm(I.current, P.current, R).then((M) => {
      const D = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      _.current && !lo(w.current, D) && (w.current = D, zi.flushSync(() => {
        u(D);
      }));
    });
  }, [f, t, n, A, T]);
  Yr(() => {
    l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, u((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const _ = g.useRef(!1);
  Yr(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Yr(() => {
    if (C && (I.current = C), N && (P.current = N), C && N) {
      if (E.current)
        return E.current(C, N, B);
      B();
    }
  }, [C, N, B, E, k]);
  const G = g.useMemo(() => ({
    reference: I,
    floating: P,
    setReference: x,
    setFloating: S
  }), [x, S]), L = g.useMemo(() => ({
    reference: C,
    floating: N
  }), [C, N]), F = g.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return R;
    const M = ja(L.floating, d.x), D = ja(L.floating, d.y);
    return a ? {
      ...R,
      transform: "translate(" + M + "px, " + D + "px)",
      ...Ql(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: D
    };
  }, [n, a, L.floating, d.x, d.y]);
  return g.useMemo(() => ({
    ...d,
    update: B,
    refs: G,
    elements: L,
    floatingStyles: F
  }), [d, B, G, L, F]);
}
const Wm = (e) => {
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
      return r && t(r) ? r.current != null ? Ka({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ka({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Vm = (e, t) => {
  const n = Tm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Um = (e, t) => {
  const n = Fm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ym = (e, t) => ({
  fn: zm(e).fn,
  options: [e, t]
}), qm = (e, t) => {
  const n = $m(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xm = (e, t) => {
  const n = Lm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Zm = (e, t) => {
  const n = Bm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Jm = (e, t) => {
  const n = Wm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Qm = Object.defineProperty, ev = (e, t) => Qm(e, "name", { value: t, configurable: !0 });
function Eo(e) {
  const [t, n] = g.useState(void 0);
  return Ye(() => {
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
ev(Eo, "useSize");
var tv = Object.defineProperty, Ut = (e, t) => tv(e, "name", { value: t, configurable: !0 }), eu = "Popper", [tu, nu] = /* @__PURE__ */ ft(eu), [nv, ru] = tu(eu), rv = /* @__PURE__ */ Ut((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null), [i, s] = g.useState(void 0);
  return /* @__PURE__ */ p(
    nv,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), ov = "PopperAnchor", iv = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ut(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...i } = t, s = ru(ov, r), a = g.useRef(null), c = s.onAnchorChange, l = g.useCallback(
      (m) => {
        a.current = m, m && c(m);
      },
      [c]
    ), d = me(n, l), u = g.useRef(null);
    g.useEffect(() => {
      if (!o)
        return;
      const m = u.current;
      u.current = o.current, m !== u.current && c(u.current);
    });
    const f = s.placementState && Do(s.placementState), h = f?.[0], v = f?.[1];
    return o ? null : /* @__PURE__ */ p(
      ye.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": v,
        ...i,
        ref: d
      }
    );
  }, "PopperAnchor")
), ou = "PopperContent", [sv, XC] = tu(ou), av = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ut(function(t, n) {
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
      updatePositionStrategy: v = "optimized",
      onPlaced: m,
      ...b
    } = t, y = ru(ou, r), [x, S] = g.useState(null), C = me(n, S), [N, I] = g.useState(null), P = Eo(N), w = P?.width ?? 0, k = P?.height ?? 0, E = o + (s !== "center" ? "-" + s : ""), A = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, T = Array.isArray(d) ? d : [d], B = T.length > 0, _ = {
      padding: A,
      boundary: T.filter(iu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: G, floatingStyles: L, placement: F, isPositioned: R, middlewareData: M } = Gm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: /* @__PURE__ */ Ut((...J) => _m(...J, {
        animationFrame: v === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Vm({ mainAxis: i + k, alignmentAxis: a }),
        l && Um({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Ym() : void 0,
          ..._
        }),
        l && qm({ ..._ }),
        Xm({
          ..._,
          apply: /* @__PURE__ */ Ut(({ elements: J, rects: Z, availableWidth: te, availableHeight: re }) => {
            const { width: be, height: oe } = Z.reference, Ne = J.floating.style;
            Ne.setProperty("--radix-popper-available-width", `${te}px`), Ne.setProperty("--radix-popper-available-height", `${re}px`), Ne.setProperty("--radix-popper-anchor-width", `${be}px`), Ne.setProperty("--radix-popper-anchor-height", `${oe}px`);
          }, "apply")
        }),
        N && Jm({ element: N, padding: c }),
        cv({ arrowWidth: w, arrowHeight: k }),
        h && Zm({
          strategy: "referenceHidden",
          ..._,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: B ? _.boundary : void 0
        })
      ]
    }), D = y.setPlacementState;
    Ye(() => (D(F), () => {
      D(void 0);
    }), [F, D]);
    const [K, j] = Do(F), H = xt(m);
    Ye(() => {
      R && H?.();
    }, [R, H]);
    const V = M.arrow?.x, Y = M.arrow?.y, z = M.arrow?.centerOffset !== 0, [W, U] = g.useState();
    return Ye(() => {
      x && U(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p(
      "div",
      {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...L,
          transform: R ? L.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: W,
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
        children: /* @__PURE__ */ p(
          sv,
          {
            scope: r,
            placedSide: K,
            placedAlign: j,
            onArrowChange: I,
            arrowX: V,
            arrowY: Y,
            shouldHideArrow: z,
            children: /* @__PURE__ */ p(
              ye.div,
              {
                "data-side": K,
                "data-align": j,
                ...b,
                ref: C,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: R ? b.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function iu(e) {
  return e !== null;
}
Ut(iu, "isNotNull");
var cv = /* @__PURE__ */ Ut((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = Do(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", m = "";
    return l === "bottom" ? (v = s ? u : `${f}px`, m = `${-c}px`) : l === "top" ? (v = s ? u : `${f}px`, m = `${r.floating.height + c}px`) : l === "right" ? (v = `${-c}px`, m = s ? u : `${h}px`) : l === "left" && (v = `${r.floating.width + c}px`, m = s ? u : `${h}px`), { data: { x: v, y: m } };
  }
}), "transformOrigin");
function Do(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Ut(Do, "getSideAndAlignFromPlacement");
var su = rv, lv = iv, uv = av, dv = Object.defineProperty, fv = (e, t) => dv(e, "name", { value: t, configurable: !0 }), au = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ fv(function(t, n) {
    const { container: r, ...o } = t, [i, s] = g.useState(!1);
    Ye(() => s(!0), []);
    const a = r || i && globalThis?.document?.body;
    return a ? zi.createPortal(/* @__PURE__ */ p(ye.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), hv = Object.defineProperty, Ot = (e, t) => hv(e, "name", { value: t, configurable: !0 });
function cu(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
Ot(cu, "useStateMachine");
var jn = /* @__PURE__ */ Ot((e) => {
  const { present: t, children: n } = e, r = lu(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), i = uu(r.ref, du(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: i }) : null;
}, "Presence");
function lu(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), i = g.useRef("none"), s = g.useRef(void 0), a = e ? "mounted" : "unmounted", [c, l] = cu(a, {
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
  return g.useEffect(() => {
    c === "mounted" ? (i.current = s.current ?? An(r.current), s.current = void 0) : i.current = "none";
  }, [c]), Ye(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, v = An(d);
      e ? (s.current = v, l("MOUNT")) : v === "none" || d?.display === "none" ? l("UNMOUNT") : l(u && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ye(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ Ot((v) => {
        const b = An(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && b && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Ot((v) => {
        v.target === t && (i.current = An(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: g.useCallback((d) => {
      if (d) {
        const u = getComputedStyle(d);
        r.current = u, s.current = An(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
Ot(lu, "usePresence");
function Ri(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ot(Ri, "setRef");
function uu(...e) {
  const t = g.useRef(e);
  return t.current = e, g.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const i = r.map((s) => {
      const a = Ri(s, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const a = i[s];
          typeof a == "function" ? a() : Ri(r[s], null);
        }
      };
  }, []);
}
Ot(uu, "useStableComposedRefs");
function An(e) {
  return e?.animationName || "none";
}
Ot(An, "getAnimationName");
function du(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ot(du, "getElementRef");
var pv = Object.defineProperty, ms = (e, t) => pv(e, "name", { value: t, configurable: !0 }), Qo = !1;
function fu() {
  const [e, t] = g.useState(Qo);
  return g.useEffect(() => {
    Qo || (Qo = !0, t(!0));
  }, []), e;
}
ms(fu, "useIsHydrated");
var hu = g[" useSyncExternalStore ".trim().toString()];
function pu() {
  return () => {
  };
}
ms(pu, "subscribe");
function gu() {
  return hu(
    pu,
    () => !0,
    () => !1
  );
}
ms(gu, "useIsHydratedModern");
var gv = typeof hu == "function" ? gu : fu, mv = Object.defineProperty, wn = (e, t) => mv(e, "name", { value: t, configurable: !0 }), ei = "rovingFocusGroup.onEntryFocus", vv = { bubbles: !1, cancelable: !0 }, Ao = "RovingFocusGroup", [Ei, mu, bv] = /* @__PURE__ */ xo(Ao), [yv, vu] = /* @__PURE__ */ ft(
  Ao,
  [bv]
), [wv, xv] = yv(Ao), Cv = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wn(function(t, n) {
    return /* @__PURE__ */ p(Ei.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Ei.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Sv, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Sv = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ wn(function(t, n) {
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
  } = t, h = g.useRef(null), v = me(n, h), m = Co(s), [b, y] = yn({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: Ao
  }), [x, S] = g.useState(!1), C = xt(d), N = mu(r), I = g.useRef(!1), [P, w] = g.useState(0);
  return g.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(ei, C), () => k.removeEventListener(ei, C);
  }, [C]), /* @__PURE__ */ p(
    wv,
    {
      scope: r,
      orientation: o,
      dir: m,
      loop: i,
      currentTabStopId: b,
      onItemFocus: g.useCallback(
        (k) => y(k),
        [y]
      ),
      onItemShiftTab: g.useCallback(() => S(!0), []),
      onFocusableItemAdd: g.useCallback(
        () => w((k) => k + 1),
        []
      ),
      onFocusableItemRemove: g.useCallback(
        () => w((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        ye.div,
        {
          tabIndex: x || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: v,
          style: { outline: "none", ...t.style },
          onMouseDown: ne(t.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: ne(t.onFocus, (k) => {
            const E = !I.current;
            if (k.target === k.currentTarget && E && !x) {
              const A = new CustomEvent(ei, vv);
              if (k.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                const T = N().filter((F) => F.focusable), B = T.find((F) => F.active), _ = T.find((F) => F.id === b), L = [B, _, ...T].filter(
                  Boolean
                ).map((F) => F.ref.current);
                vs(L, u);
              }
            }
            I.current = !1;
          }),
          onBlur: ne(t.onBlur, () => S(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Pv = "RovingFocusGroupItem", Iv = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ wn(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: i = !1,
      tabStopId: s,
      children: a,
      ...c
    } = t, l = Rt(), d = s || l, u = xv(Pv, r), f = u.currentTabStopId === d, h = mu(r), { onFocusableItemAdd: v, onFocusableItemRemove: m, currentTabStopId: b } = u, y = gv();
    return Ye(() => {
      if (!(!y || !o))
        return v(), () => m();
    }, [y, o, v, m]), g.useEffect(() => {
      if (!(y || !o))
        return v(), () => m();
    }, [y, o, v, m]), /* @__PURE__ */ p(
      Ei.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: o,
        active: i,
        children: /* @__PURE__ */ p(
          ye.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...c,
            ref: n,
            onMouseDown: ne(t.onMouseDown, (x) => {
              o ? u.onItemFocus(d) : x.preventDefault();
            }),
            onFocus: ne(t.onFocus, () => u.onItemFocus(d)),
            onKeyDown: ne(t.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const S = yu(x, u.orientation, u.dir);
              if (S !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let N = h().filter((I) => I.focusable).map((I) => I.ref.current);
                if (S === "last") N.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && N.reverse();
                  const I = N.indexOf(x.currentTarget);
                  N = u.loop ? wu(N, I + 1) : N.slice(I + 1);
                }
                setTimeout(() => vs(N));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: b != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Nv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function bu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
wn(bu, "getDirectionAwareKey");
function yu(e, t, n) {
  const r = bu(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Nv[r];
}
wn(yu, "getFocusIntent");
function vs(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
wn(vs, "focusFirst");
function wu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
wn(wu, "wrapArray");
var kv = Cv, Rv = Iv, Ev = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Rn = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Hr = {}, ti = 0, xu = function(e) {
  return e && (e.host || xu(e.parentNode));
}, Dv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Av = function(e, t, n, r) {
  var o = Dv(t, Array.isArray(e) ? e : [e]);
  Hr[n] || (Hr[n] = /* @__PURE__ */ new WeakMap());
  var i = Hr[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || a.has(u) || (a.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(r), v = h !== null && h !== "false", m = (Rn.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          Rn.set(f, m), i.set(f, b), s.push(f), m === 1 && v && zr.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), a.clear(), ti++, function() {
    s.forEach(function(u) {
      var f = Rn.get(u) - 1, h = i.get(u) - 1;
      Rn.set(u, f), i.set(u, h), f || (zr.has(u) || u.removeAttribute(r), zr.delete(u)), h || u.removeAttribute(n);
    }), ti--, ti || (Rn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Hr = {});
  };
}, Cu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ev(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Av(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, yt = function() {
  return yt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, yt.apply(this, arguments);
};
function Su(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Mv(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var qr = "right-scroll-bar-position", Xr = "width-before-scroll-bar", Ov = "with-scroll-bars-hidden", _v = "--removed-body-scroll-bar-size";
function ni(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Tv(e, t) {
  var n = se(function() {
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
var Fv = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Ga = /* @__PURE__ */ new WeakMap();
function $v(e, t) {
  var n = Tv(null, function(r) {
    return e.forEach(function(o) {
      return ni(o, r);
    });
  });
  return Fv(function() {
    var r = Ga.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || ni(a, null);
      }), i.forEach(function(a) {
        o.has(a) || ni(a, s);
      });
    }
    Ga.set(n, e);
  }, [e]), n;
}
function Lv(e) {
  return e;
}
function Bv(e, t) {
  t === void 0 && (t = Lv);
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
function zv(e) {
  e === void 0 && (e = {});
  var t = Bv(null);
  return t.options = yt({ async: !0, ssr: !1 }, e), t;
}
var Pu = function(e) {
  var t = e.sideCar, n = Su(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, yt({}, n));
};
Pu.isSideCarExport = !0;
function Hv(e, t) {
  return e.useMedium(t), Pu;
}
var Iu = zv(), ri = function() {
}, Mo = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: ri,
    onWheelCapture: ri,
    onTouchMoveCapture: ri
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, b = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, S = e.gapMode, C = Su(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = f, I = $v([n, t]), P = yt(yt({}, C), o);
  return g.createElement(
    g.Fragment,
    null,
    d && g.createElement(N, { sideCar: Iu, removeScrollBar: l, shards: u, noRelative: h, noIsolation: v, inert: m, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: S }),
    s ? g.cloneElement(g.Children.only(a), yt(yt({}, P), { ref: I })) : g.createElement(x, yt({}, P, { className: c, ref: I }), a)
  );
});
Mo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mo.classNames = {
  fullWidth: Xr,
  zeroRight: qr
};
var Kv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Kv();
  return t && e.setAttribute("nonce", t), e;
}
function Gv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Wv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Vv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = jv()) && (Gv(t, n), Wv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Uv = function() {
  var e = Vv();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Nu = function() {
  var e = Uv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Yv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, oi = function(e) {
  return parseInt(e || "", 10) || 0;
}, qv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [oi(n), oi(r), oi(o)];
}, Xv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yv;
  var t = qv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Zv = Nu(), Tn = "data-scroll-locked", Jv = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ov, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Tn, `] {
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
  
  .`).concat(qr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Xr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(qr, " .").concat(qr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xr, " .").concat(Xr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Tn, `] {
    `).concat(_v, ": ").concat(a, `px;
  }
`);
}, Wa = function() {
  var e = parseInt(document.body.getAttribute(Tn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Qv = function() {
  g.useEffect(function() {
    return document.body.setAttribute(Tn, (Wa() + 1).toString()), function() {
      var e = Wa() - 1;
      e <= 0 ? document.body.removeAttribute(Tn) : document.body.setAttribute(Tn, e.toString());
    };
  }, []);
}, eb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Qv();
  var i = g.useMemo(function() {
    return Xv(o);
  }, [o]);
  return g.createElement(Zv, { styles: Jv(i, !t, o, n ? "" : "!important") });
}, Di = !1;
if (typeof window < "u")
  try {
    var Kr = Object.defineProperty({}, "passive", {
      get: function() {
        return Di = !0, !0;
      }
    });
    window.addEventListener("test", Kr, Kr), window.removeEventListener("test", Kr, Kr);
  } catch {
    Di = !1;
  }
var En = Di ? { passive: !1 } : !1, tb = function(e) {
  return e.tagName === "TEXTAREA";
}, ku = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !tb(e) && n[t] === "visible")
  );
}, nb = function(e) {
  return ku(e, "overflowY");
}, rb = function(e) {
  return ku(e, "overflowX");
}, Va = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ru(e, r);
    if (o) {
      var i = Eu(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ob = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ib = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ru = function(e, t) {
  return e === "v" ? nb(t) : rb(t);
}, Eu = function(e, t) {
  return e === "v" ? ob(t) : ib(t);
}, sb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ab = function(e, t, n, r, o) {
  var i = sb(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, d = s > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var h = Eu(e, a), v = h[0], m = h[1], b = h[2], y = m - b - i * v;
    (v || y) && Ru(e, a) && (u += y, f += v);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (l = !0), l;
}, jr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ua = function(e) {
  return [e.deltaX, e.deltaY];
}, Ya = function(e) {
  return e && "current" in e ? e.current : e;
}, cb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, lb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ub = 0, Dn = [];
function db(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(ub++)[0], i = g.useState(Nu)[0], s = g.useRef(e);
  g.useEffect(function() {
    s.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Mv([e.lockRef.current], (e.shards || []).map(Ya), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = g.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var y = jr(m), x = n.current, S = "deltaX" in m ? m.deltaX : x[0] - y[0], C = "deltaY" in m ? m.deltaY : x[1] - y[1], N, I = m.target, P = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && P === "h" && I.type === "range")
      return !1;
    var w = window.getSelection(), k = w && w.anchorNode, E = k ? k === I || k.contains(I) : !1;
    if (E)
      return !1;
    var A = Va(P, I);
    if (!A)
      return !0;
    if (A ? N = P : (N = P === "v" ? "h" : "v", A = Va(P, I)), !A)
      return !1;
    if (!r.current && "changedTouches" in m && (S || C) && (r.current = N), !N)
      return !0;
    var T = r.current || N;
    return ab(T, b, m, T === "h" ? S : C);
  }, []), c = g.useCallback(function(m) {
    var b = m;
    if (!(!Dn.length || Dn[Dn.length - 1] !== i)) {
      var y = "deltaY" in b ? Ua(b) : jr(b), x = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && cb(N.delta, y);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var S = (s.current.shards || []).map(Ya).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), C = S.length > 0 ? a(b, S[0]) : !s.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = g.useCallback(function(m, b, y, x) {
    var S = { name: m, delta: b, target: y, should: x, shadowParent: fb(y) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), d = g.useCallback(function(m) {
    n.current = jr(m), r.current = void 0;
  }, []), u = g.useCallback(function(m) {
    l(m.type, Ua(m), m.target, a(m, e.lockRef.current));
  }, []), f = g.useCallback(function(m) {
    l(m.type, jr(m), m.target, a(m, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return Dn.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, En), document.addEventListener("touchmove", c, En), document.addEventListener("touchstart", d, En), function() {
      Dn = Dn.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", c, En), document.removeEventListener("touchmove", c, En), document.removeEventListener("touchstart", d, En);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(i, { styles: lb(o) }) : null,
    h ? g.createElement(eb, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function fb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const hb = Hv(Iu, db);
var bs = g.forwardRef(function(e, t) {
  return g.createElement(Mo, yt({}, e, { ref: t, sideCar: hb }));
});
bs.classNames = Mo.classNames;
var pb = Object.defineProperty, ge = (e, t) => pb(e, "name", { value: t, configurable: !0 }), Ai = ["Enter", " "], gb = ["ArrowDown", "PageUp", "Home"], Du = ["ArrowUp", "PageDown", "End"], mb = [...gb, ...Du], vb = {
  ltr: [...Ai, "ArrowRight"],
  rtl: [...Ai, "ArrowLeft"]
}, bb = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Oo = "Menu", [cr, yb, wb] = /* @__PURE__ */ xo(Oo), [xn, Au] = /* @__PURE__ */ ft(Oo, [
  wb,
  nu,
  vu
]), _o = nu(), Mu = vu(), [Ou, rn] = xn(Oo), [xb, gr] = xn(Oo), Cb = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = _o(t), [c, l] = g.useState(null), d = g.useRef(!1), u = xt(i), f = Co(o);
  return g.useEffect(() => {
    const h = /* @__PURE__ */ ge(() => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, "handleKeyDown"), v = /* @__PURE__ */ ge(() => d.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), g.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ ge(() => u(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, u]), /* @__PURE__ */ p(su, { ...a, children: /* @__PURE__ */ p(
    Ou,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ p(
        xb,
        {
          scope: t,
          onClose: g.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: r
        }
      )
    }
  ) });
}, "Menu"), _u = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t, i = _o(r);
    return /* @__PURE__ */ p(lv, { ...i, ...o, ref: n });
  }, "MenuAnchor")
), Tu = "MenuPortal", [Sb, Fu] = xn(Tu, {
  forceMount: void 0
}), Pb = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = rn(Tu, t);
  return /* @__PURE__ */ p(Sb, { scope: t, forceMount: n, children: /* @__PURE__ */ p(jn, { present: n || i.open, children: /* @__PURE__ */ p(au, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), lt = "MenuContent", [Ib, ys] = xn(lt), Nb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = Fu(lt, t.__scopeMenu), { forceMount: o = r.forceMount, ...i } = t, s = rn(lt, t.__scopeMenu), a = gr(lt, t.__scopeMenu);
    return /* @__PURE__ */ p(cr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(jn, { present: o || s.open, children: /* @__PURE__ */ p(cr.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ p(kb, { ...i, ref: n }) : /* @__PURE__ */ p(Rb, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), kb = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const r = rn(lt, t.__scopeMenu), o = g.useRef(null), i = me(n, o);
    return g.useEffect(() => {
      const s = o.current;
      if (s) return Cu(s);
    }, []), /* @__PURE__ */ p(
      ws,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: ne(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), Rb = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ge(function(t, n) {
  const r = rn(lt, t.__scopeMenu);
  return /* @__PURE__ */ p(
    ws,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Eb = /* @__PURE__ */ Yt("MenuContent.ScrollLock"), ws = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
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
      onDismiss: v,
      disableOutsideScroll: m,
      ...b
    } = t, y = rn(lt, r), x = gr(lt, r), S = _o(r), C = Mu(r), N = yb(r), [I, P] = g.useState(null), w = g.useRef(null), k = me(n, w, y.onContentChange), E = g.useRef(0), A = g.useRef(""), T = g.useRef(0), B = g.useRef(null), _ = g.useRef("right"), G = g.useRef(0), L = m ? bs : g.Fragment, F = m ? { as: Eb, allowPinchZoom: !0 } : void 0, R = /* @__PURE__ */ ge((D) => {
      const K = A.current + D, j = N().filter((U) => !U.disabled), H = document.activeElement, V = j.find((U) => U.ref.current === H)?.textValue, Y = j.map((U) => U.textValue), z = ju(Y, K, V), W = j.find((U) => U.textValue === z)?.ref.current;
      (/* @__PURE__ */ ge((function U(J) {
        A.current = J, window.clearTimeout(E.current), J !== "" && (E.current = window.setTimeout(() => U(""), 1e3));
      }), "updateSearch"))(K), W && setTimeout(() => W.focus());
    }, "handleTypeaheadSearch");
    g.useEffect(() => () => window.clearTimeout(E.current), []), So();
    const M = g.useCallback((D) => _.current === B.current?.side && Wu(D, B.current?.area), []);
    return /* @__PURE__ */ p(
      Ib,
      {
        scope: r,
        searchRef: A,
        onItemEnter: g.useCallback(
          (D) => {
            M(D) && D.preventDefault();
          },
          [M]
        ),
        onItemLeave: g.useCallback(
          (D) => {
            M(D) || (w.current?.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: g.useCallback(
          (D) => {
            M(D) && D.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: g.useCallback((D) => {
          B.current = D;
        }, []),
        children: /* @__PURE__ */ p(L, { ...F, children: /* @__PURE__ */ p(
          Fl,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: ne(s, (D) => {
              D.preventDefault(), w.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ p(
              Ml,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ p(
                  kv,
                  {
                    asChild: !0,
                    ...C,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: ne(l, (D) => {
                      x.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      uv,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Cs(y.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...S,
                        ...b,
                        ref: k,
                        style: { outline: "none", ...b.style },
                        onKeyDown: ne(b.onKeyDown, (D) => {
                          const j = D.target.closest("[data-radix-menu-content]") === D.currentTarget, H = D.ctrlKey || D.altKey || D.metaKey, V = D.key.length === 1;
                          j && (D.key === "Tab" && D.preventDefault(), !H && V && R(D.key));
                          const Y = w.current;
                          if (D.target !== Y || !mb.includes(D.key)) return;
                          D.preventDefault();
                          const W = N().filter((U) => !U.disabled).map((U) => U.ref.current);
                          Du.includes(D.key) && W.reverse(), Hu(W);
                        }),
                        onBlur: ne(t.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(E.current), A.current = "");
                        }),
                        onPointerMove: ne(
                          t.onPointerMove,
                          Ln((D) => {
                            const K = D.target, j = G.current !== D.clientX;
                            if (D.currentTarget.contains(K) && j) {
                              const H = D.clientX > G.current ? "right" : "left";
                              _.current = H, G.current = D.clientX;
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
), Db = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ p(ye.div, { ...o, ref: n });
  }, "MenuLabel")
), Mi = "MenuItem", qa = "menu.itemSelect", xs = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...i } = t, s = g.useRef(null), a = gr(Mi, t.__scopeMenu), c = ys(Mi, t.__scopeMenu), l = me(n, s), d = g.useRef(!1), u = /* @__PURE__ */ ge(() => {
      const f = s.current;
      if (!r && f) {
        const h = new CustomEvent(qa, { bubbles: !0, cancelable: !0 });
        f.addEventListener(qa, (v) => o?.(v), { once: !0 }), is(f, h), h.defaultPrevented ? d.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ p(
      $u,
      {
        ...i,
        ref: l,
        disabled: r,
        onClick: ne(t.onClick, u),
        onPointerDown: (f) => {
          t.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: ne(t.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: ne(t.onKeyDown, (f) => {
          r || f.target !== f.currentTarget || c.searchRef.current !== "" && f.key === " " || Ai.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), $u = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: i, ...s } = t, a = ys(Mi, r), c = Mu(r), l = g.useRef(null), d = me(n, l), [u, f] = g.useState(!1), [h, v] = g.useState("");
    return g.useEffect(() => {
      const m = l.current;
      m && v((m.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ p(
      cr.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: i ?? h,
        children: /* @__PURE__ */ p(Rv, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ p(
          ye.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: ne(
              t.onPointerMove,
              Ln((m) => {
                o ? a.onItemLeave(m) : (a.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ne(
              t.onPointerLeave,
              Ln((m) => a.onItemLeave(m))
            ),
            onFocus: ne(t.onFocus, () => f(!0)),
            onBlur: ne(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), Ab = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { checked: r = !1, onCheckedChange: o, ...i } = t;
    return /* @__PURE__ */ p(Lu, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ p(
      xs,
      {
        role: "menuitemcheckbox",
        "aria-checked": uo(r) ? "mixed" : r,
        ...i,
        ref: n,
        "data-state": Ss(r),
        onSelect: ne(
          i.onSelect,
          () => o?.(uo(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), Mb = "MenuRadioGroup", [ZC, Ob] = xn(
  Mb,
  { value: void 0, onValueChange: /* @__PURE__ */ ge(() => {
  }, "onValueChange") }
), _b = "MenuRadioItem", Tb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { value: r, ...o } = t, i = Ob(_b, t.__scopeMenu), s = r === i.value;
    return /* @__PURE__ */ p(Lu, { scope: t.__scopeMenu, checked: s, children: /* @__PURE__ */ p(
      xs,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": Ss(s),
        onSelect: ne(
          o.onSelect,
          () => i.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), Fb = "MenuItemIndicator", [Lu, JC] = xn(
  Fb,
  { checked: !1 }
), $b = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ p(
      ye.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), Bu = "MenuSub", [Lb, zu] = xn(Bu), Bb = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = rn(Bu, t), s = _o(t), [a, c] = g.useState(null), [l, d] = g.useState(null), u = xt(o);
  return g.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ p(su, { ...s, children: /* @__PURE__ */ p(
    Ou,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ p(
        Lb,
        {
          scope: t,
          contentId: Rt(),
          triggerId: Rt(),
          trigger: a,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
}, "MenuSub"), Gr = "MenuSubTrigger", zb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = rn(Gr, t.__scopeMenu), o = gr(Gr, t.__scopeMenu), i = zu(Gr, t.__scopeMenu), s = ys(Gr, t.__scopeMenu), a = g.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: t.__scopeMenu }, u = g.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    g.useEffect(() => u, [u]), g.useEffect(() => {
      const h = c.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [c, l]);
    const f = me(n, i.onTriggerChange);
    return /* @__PURE__ */ p(_u, { asChild: !0, ...d, children: /* @__PURE__ */ p(
      $u,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": r.open ? i.contentId : void 0,
        "data-state": Cs(r.open),
        ...t,
        ref: f,
        onClick: (h) => {
          t.onClick?.(h), !(t.disabled || h.defaultPrevented) && (h.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: ne(
          t.onPointerMove,
          Ln((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !t.disabled && !r.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: ne(
          t.onPointerLeave,
          Ln((h) => {
            u();
            const v = r.content?.getBoundingClientRect();
            if (v) {
              const m = r.content?.dataset.side, b = m === "right", y = b ? -5 : 5, x = v[b ? "left" : "right"], S = v[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + y, y: h.clientY },
                  { x, y: v.top },
                  { x: S, y: v.top },
                  { x: S, y: v.bottom },
                  { x, y: v.bottom }
                ],
                side: m
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
        onKeyDown: ne(t.onKeyDown, (h) => {
          t.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || vb[o.dir].includes(h.key) && (r.onOpenChange(!0), r.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), Hb = "MenuSubContent", Kb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = Fu(lt, t.__scopeMenu), { forceMount: o = r.forceMount, align: i = "start", ...s } = t, a = rn(lt, t.__scopeMenu), c = gr(lt, t.__scopeMenu), l = zu(Hb, t.__scopeMenu), d = g.useRef(null), u = me(n, d);
    return /* @__PURE__ */ p(cr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(jn, { present: o || a.open, children: /* @__PURE__ */ p(cr.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(
      ws,
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
        onFocusOutside: ne(t.onFocusOutside, (f) => {
          f.target !== l.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: ne(t.onEscapeKeyDown, (f) => {
          c.onClose(), f.preventDefault();
        }),
        onKeyDown: ne(t.onKeyDown, (f) => {
          const h = f.currentTarget.contains(f.target), v = bb[c.dir].includes(f.key);
          h && v && (a.onOpenChange(!1), l.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function Cs(e) {
  return e ? "open" : "closed";
}
ge(Cs, "getOpenState");
function uo(e) {
  return e === "indeterminate";
}
ge(uo, "isIndeterminate");
function Ss(e) {
  return uo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
ge(Ss, "getCheckedState");
function Hu(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
ge(Hu, "focusFirst");
function Ku(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
ge(Ku, "wrapArray");
function ju(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Ku(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
ge(ju, "getNextMatch");
function Gu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], c = t[s], l = a.x, d = a.y, u = c.x, f = c.y;
    d > r != f > r && n < (u - l) * (r - d) / (f - d) + l && (o = !o);
  }
  return o;
}
ge(Gu, "isPointInPolygon");
function Wu(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Gu(n, t);
}
ge(Wu, "isPointerInGraceArea");
function Ln(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
ge(Ln, "whenMouse");
var jb = Cb, Gb = _u, Wb = Pb, Vb = Nb, Ub = Db, Yb = xs, qb = Ab, Xb = Tb, Zb = $b, Jb = Bb, Qb = zb, ey = Kb, ty = Object.defineProperty, nt = (e, t) => ty(e, "name", { value: t, configurable: !0 }), Ps = "DropdownMenu", [ny, QC] = /* @__PURE__ */ ft(
  Ps,
  [Au]
), rt = Au(), [ry, Vu] = ny(Ps), oy = /* @__PURE__ */ nt((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, c = rt(t), l = g.useRef(null), [d, u] = yn({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Ps
  });
  return /* @__PURE__ */ p(
    ry,
    {
      scope: t,
      triggerId: Rt(),
      triggerRef: l,
      contentId: Rt(),
      open: d,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((f) => !f), [u]),
      modal: a,
      children: /* @__PURE__ */ p(jb, { ...c, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), iy = "DropdownMenuTrigger", sy = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nt(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...i } = t, s = Vu(iy, r), a = rt(r), c = me(n, s.triggerRef);
    return /* @__PURE__ */ p(Gb, { asChild: !0, ...a, children: /* @__PURE__ */ p(
      ye.button,
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
        onPointerDown: ne(t.onPointerDown, (l) => {
          !o && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: ne(t.onKeyDown, (l) => {
          o || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), ay = /* @__PURE__ */ nt((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = rt(t);
  return /* @__PURE__ */ p(Wb, { ...r, ...n });
}, "DropdownMenuPortal"), cy = "DropdownMenuContent", ly = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nt(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = Vu(cy, r), s = rt(r), a = g.useRef(!1);
    return /* @__PURE__ */ p(
      Vb,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: ne(t.onCloseAutoFocus, (c) => {
          a.current || i.triggerRef.current?.focus(), a.current = !1, c.preventDefault();
        }),
        onInteractOutside: ne(t.onInteractOutside, (c) => {
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
), uy = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nt(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
    return /* @__PURE__ */ p(Ub, { ...i, ...o, ref: n });
  }, "DropdownMenuLabel")
), dy = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nt(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
    return /* @__PURE__ */ p(Yb, { ...i, ...o, ref: n });
  }, "DropdownMenuItem")
), fy = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ nt(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
  return /* @__PURE__ */ p(qb, { ...i, ...o, ref: n });
}, "DropdownMenuCheckboxItem")), hy = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ nt(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
  return /* @__PURE__ */ p(Xb, { ...i, ...o, ref: n });
}, "DropdownMenuRadioItem")), py = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ nt(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
  return /* @__PURE__ */ p(Zb, { ...i, ...o, ref: n });
}, "DropdownMenuSeparator")), gy = /* @__PURE__ */ nt((e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = rt(t), [a, c] = yn({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ p(Jb, { ...s, open: a, onOpenChange: c, children: n });
}, "DropdownMenuSub"), my = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ nt(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
  return /* @__PURE__ */ p(Qb, { ...i, ...o, ref: n });
}, "DropdownMenuSubTrigger")), vy = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ nt(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = rt(r);
  return /* @__PURE__ */ p(
    ey,
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
}, "DropdownMenuSubContent")), by = oy, yy = sy, wy = ay, Uu = ly, Yu = uy, qu = dy, Xu = fy, Zu = hy, Ju = py, xy = gy, Qu = my, ed = vy;
const mr = by, vr = yy, Xa = xy, td = g.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p(
  Qu,
  {
    ref: o,
    className: ue(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
td.displayName = Qu.displayName;
const Oi = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  ed,
  {
    ref: n,
    className: ue(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Oi.displayName = ed.displayName;
const Gn = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = ts();
  return /* @__PURE__ */ p(wy, { container: o || void 0, children: /* @__PURE__ */ p(
    Uu,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: ue(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
Gn.displayName = Uu.displayName;
const Ue = g.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  qu,
  {
    ref: r,
    className: ue(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ue.displayName = qu.displayName;
const Cy = g.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p(
  Xu,
  {
    ref: o,
    className: ue(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
Cy.displayName = Xu.displayName;
const Sy = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p(
  Zu,
  {
    ref: r,
    className: ue(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
Sy.displayName = Zu.displayName;
const nd = g.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  Yu,
  {
    ref: r,
    className: ue(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
nd.displayName = Yu.displayName;
const gn = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ju,
  {
    ref: n,
    className: ue("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
gn.displayName = Ju.displayName;
const Py = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, Is = (e, t) => {
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
    return /* @__PURE__ */ p(
      "div",
      {
        className: ue("pointer-events-none absolute inset-0 z-10", t),
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: o }
      }
    );
  }
  return /* @__PURE__ */ p(
    "img",
    {
      src: e,
      alt: "",
      "aria-hidden": "true",
      className: ue(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, Ns = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ p("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ $(mr, { modal: !1, children: [
    /* @__PURE__ */ p(vr, { asChild: !0, children: /* @__PURE__ */ p(
      Le,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ p(cl, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ p(Gn, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ $(
      Ue,
      {
        onSelect: (i) => Py(i, o),
        disabled: o.disabled,
        children: [
          o.icon && /* @__PURE__ */ p("span", { className: "mr-2 inline-flex", children: o.icon }),
          /* @__PURE__ */ p("span", { children: o.label })
        ]
      },
      o.id
    )) })
  ] }) });
  return n ? /* @__PURE__ */ p("div", { className: "pointer-events-none absolute z-20", style: n, children: r }) : r;
}, ks = (e = []) => {
  const t = rs();
  return e.length > 0 && !t;
}, Iy = ({
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
  const l = Pe(_t), d = ks(o), u = il(
    {
      ...a,
      pageWidth: a?.pageWidth ?? l?.page?.width ?? 210,
      bleed: a?.bleed ?? l?.page?.bleed ?? 0
    },
    "bleed"
  ), f = i ? Bn({ dialog: i }, l) : {};
  return g.useMemo(() => {
    if (!s) return f;
    const h = { ...f, ...s };
    return (f.className || s.className) && (h.className = `${f.className || ""} ${s.className || ""}`.trim()), Object.keys(f).forEach((v) => {
      const m = f[v], b = s[v];
      v.startsWith("on") && typeof m == "function" && typeof b == "function" && (h[v] = (y) => {
        m(y), b(y);
      });
    }), h;
  }, [f, s]), /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ $(Qi, { ...a, dialog: i, children: [
      Is(n, r),
      c
    ] }),
    Ns(o, d, u)
  ] });
};
function Rs(e) {
  const t = Pe(_t), n = Zi({
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
    top: v = 0,
    bottom: m = 0
  } = e, b = (_) => `${_}mm`, y = () => Ji({ width: d, left: f, right: h }, o, r, 2), x = () => {
    let _ = u;
    return u ? !v && !m && (_ += r) : (_ = i, v || (_ += r), m || (_ += r), (v || m) && (_ -= (v ?? 0) + (m ?? 0))), _;
  }, S = y(), C = x(), N = (_) => _ !== void 0 ? b(_) : void 0, I = (_) => Object.fromEntries(
    Object.entries(_).filter(([G, L]) => L !== void 0)
  ), P = f > 0 ? f + r : 0, w = v > 0 ? v + r : 0, k = m > 0 ? m + r : 0, E = -1 * o + P, A = v > 0 && m > 0, T = I({
    backgroundColor: l,
    width: N(S),
    ...A ? { height: N(C) } : {},
    left: N(P),
    top: N(w),
    bottom: N(k)
  }), B = I({
    width: N(S),
    ...A ? { height: N(C) } : {},
    left: N(E),
    top: N(w),
    bottom: N(k)
  });
  return /* @__PURE__ */ p("div", { className: "uhuu-image-container", style: c == "end" ? B : T, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ $("div", { className: "uhuu-image-inner", ...Bn(e, t), children: [
    /* @__PURE__ */ p(
      "img",
      {
        className: ue("cover-image object-cover object-center", a),
        src: s || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const Ny = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const s = Pe(_t), a = ks(n), c = il(
    {
      ...o,
      pageWidth: o?.pageWidth ?? s?.page?.width ?? 210,
      bleed: o?.bleed ?? s?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ $(Rs, { ...o, dialog: r, children: [
      Is(e, t),
      i
    ] }),
    Ns(n, a, c)
  ] });
}, ky = ({
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
  renderImage: v,
  onError: m
}) => {
  const b = Pe(_t), y = l ? Bn({ dialog: l }, b) : {}, x = ks(c), S = Zi({
    onError: (E) => {
      m?.(E), h?.onError?.(E);
    }
  }), C = g.useMemo(() => {
    if (!d) return y;
    const E = { ...y, ...d };
    return (y.className || d.className) && (E.className = ue(y.className, d.className)), Object.keys(y).forEach((A) => {
      const T = y[A], B = d[A];
      A.startsWith("on") && typeof T == "function" && typeof B == "function" && (E[A] = (_) => {
        T(_), B(_);
      });
    }), E;
  }, [y, d]), N = () => {
    const E = h?.className, A = h?.style, T = h?.src ?? e, B = h?.alt ?? t, _ = {
      ...h,
      src: T,
      alt: B,
      className: ue("h-full w-full object-cover", r, E),
      style: { ...i, ...A }
    };
    return v ? v(_) : T ? /* @__PURE__ */ p("img", { ..._, onError: S }) : u ?? null;
  }, I = C["data-uhuu"], P = g.Children.toArray(f).some((E) => g.isValidElement(E) ? E.type === Rs || E.type === Qi : !1);
  P && delete C["data-uhuu"];
  const w = g.Children.map(f, (E) => g.isValidElement(E) ? g.cloneElement(E, { dataUhuu: I }) : E);
  return /* @__PURE__ */ $("div", { className: ue(P ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ $("div", { className: "relative h-full w-full", ...C, children: [
      N(),
      w,
      Is(s, a)
    ] }),
    Ns(c, x)
  ] });
}, eS = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = ee(() => {
    const { annotation: L, dialog: F, overlaySvg: R, options: M, src: D } = e;
    if (!L && !F)
      return {
        computedOverlaySvg: R,
        computedOptions: M,
        computedDirectDialog: void 0
      };
    const K = L?.value || {}, j = R ?? K.annotationSvg ?? "", H = [];
    if (L) {
      if (F) {
        const re = {
          ...F
          // Spread everything (path, type, ratio, etc.)
        };
        if (F.type === "satellite") {
          const { path: be, type: oe, ...Ne } = F;
          re.config = {
            ...Ne,
            path: "image"
          }, re.path = be, re.type = oe;
        }
        H.push({
          id: "edit",
          label: "Edit image",
          dialog: re
        });
      }
      const z = Array.isArray(K.annotations) ? K.annotations : [], { path: W, value: U, annotations: J, ...Z } = L, te = {
        path: L.path,
        type: "annotation",
        image: D,
        annotations: z,
        ...Z
        // Spread extra config (visualGallery, etc.)
      };
      H.push({
        id: "annotate",
        label: "Annotate",
        dialog: te
      });
    }
    const V = M ? [...H, ...M] : H;
    let Y;
    if (F) {
      const z = {
        ...F
        // Spread everything (path, type, ratio, etc.)
      };
      if (F.type === "satellite") {
        const { path: W, type: U, ...J } = F;
        z.config = {
          ...J,
          path: "image"
        }, z.path = W, z.type = U;
      }
      Y = z;
    }
    return {
      computedOverlaySvg: j,
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
    backgroundColor: v,
    width: m,
    height: b,
    left: y,
    right: x,
    top: S,
    bottom: C,
    pageWidth: N,
    pageHeight: I,
    bleed: P,
    overlayClassName: w,
    dialogProps: k,
    placeholder: E,
    children: A,
    imageProps: T,
    renderImage: B,
    onError: _
  } = e, G = {
    src: c,
    backgroundColor: v,
    width: m,
    height: b,
    left: y,
    right: x,
    top: S,
    bottom: C,
    pageWidth: N,
    pageHeight: I,
    bleed: P,
    imageClassName: u,
    onError: _
  };
  if (o === "auto")
    return /* @__PURE__ */ p(
      ky,
      {
        src: c,
        alt: l,
        className: d,
        style: f,
        imageClassName: u,
        imageStyle: h,
        overlaySvg: t,
        overlayClassName: w,
        options: n,
        dialog: r,
        dialogProps: k,
        placeholder: E,
        children: A,
        imageProps: T,
        renderImage: B,
        onError: _
      }
    );
  if (o === "spread") {
    const L = { ...G, side: a, imageClassName: u };
    return i && (t || n?.length || r) ? /* @__PURE__ */ p(
      Ny,
      {
        className: d,
        style: f,
        overlaySvg: t,
        overlayClassName: w,
        options: n,
        dialog: r,
        dialogProps: k,
        spreadProps: L,
        children: A
      }
    ) : /* @__PURE__ */ p(Rs, { ...L });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ p(
    Iy,
    {
      className: d,
      style: f,
      overlaySvg: t,
      overlayClassName: w,
      options: n,
      dialog: r,
      dialogProps: k,
      bleedProps: G,
      children: A
    }
  ) : /* @__PURE__ */ p(Qi, { ...G });
}, Cn = "uhuu_page_editor";
function Ke(e) {
  return e.kind === "group";
}
function Ry(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Ke(r))
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
function Ey(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Ke(r)) {
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
function At(e) {
  return Ry(e).length;
}
function Dy(e) {
  return e.map((t) => {
    const n = t.strictPosition;
    if (Ke(t)) {
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
function Ay(e, t) {
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
function Es(e) {
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
function rd(e, t = Cn) {
  const n = Es(e);
  return {
    key: t,
    items: n,
    totalPages: At(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function My(e, t = Cn) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = Es(n.items);
  return {
    key: t,
    items: r,
    totalPages: At(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Oy(e, t, n = Cn) {
  const r = rd(t, n);
  return { ...e ?? {}, [n]: r };
}
function od() {
  return Math.random().toString(36).slice(2, 11);
}
function id(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? od() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function sd(e, t, n) {
  const r = n?.repeatable ? od() : e;
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
function Za(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function _i(e, t, n) {
  for (const r of t) {
    const o = Za(r.start, n), i = Za(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function ad(e, t, n = 2) {
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
function _y(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = At(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : ad(r, n, o);
  if (i.length === 0)
    return [];
  const s = [];
  for (const a of e)
    if (Ke(a)) {
      const c = a.pages.filter((l) => l.pageNum && _i(l.pageNum, i, n));
      c.length > 0 && s.push({
        ...a,
        pages: c
      });
    } else
      a.pageNum && _i(a.pageNum, i, n) && s.push(a);
  return s;
}
function Ty(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : ad(r, t, o);
  return i.length === 0 ? !1 : _i(e, i, t);
}
function cd(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function Fy(e, t) {
  return t && Ke(t) ? t.id : e?.id ?? null;
}
function ld(e, t, n) {
  const r = Fy(t, n);
  return r ? {
    instanceId: r,
    integration: cd(e, r)
  } : { instanceId: null, integration: void 0 };
}
function ud(e, t, n) {
  return ld(e, t, n).integration;
}
function Ja(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function $y(e) {
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
function Ly(e, t, n) {
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
function By(e, t, n) {
  const r = $y(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, s = cd(e, o) || {}, a = Ly(
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
function fo(e, t) {
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
const br = g.createContext(null);
function zy(e = Cn) {
  return [e];
}
function Hy(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function dd({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = Cn
}) {
  const [o, i] = g.useState(e ?? {}), s = g.useRef(null), a = g.useRef(!1), c = g.useRef(null), l = g.useRef(0), d = g.useRef(!0), u = g.useCallback((w) => {
    try {
      return JSON.stringify(w);
    } catch {
      return String(w);
    }
  }, []), f = g.useMemo(() => zy(r), [r]), h = g.useCallback((w, k) => {
    if (!w) return null;
    const E = { ...w };
    return k.forEach((A) => {
      delete E[A];
    }), E;
  }, []);
  g.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (s.current = e, i(e));
      return;
    }
    if (a.current) {
      a.current = !1;
      const E = c.current !== null ? u(h(c.current, f)) : null, A = u(h(e, f));
      if (E !== null && E === A) {
        s.current = e;
        return;
      }
    }
    if (e === s.current)
      return;
    if (Date.now() - l.current < 500 && c.current !== null) {
      const E = h(e, f), A = h(c.current, f), T = E ? u(E) : null, B = A ? u(A) : null;
      if (T && T === B) {
        c.current = null, s.current = e;
        return;
      }
    }
    s.current = e, i((E) => e ? Hy(E, e, f) : E);
  }, [e, f, u, h]);
  const v = g.useCallback(
    (w) => {
      if (t?.(w), typeof window > "u") return;
      const k = window.$uhuu;
      k?.emitPayload && k.emitPayload(w);
    },
    [t]
  ), m = g.useCallback(
    (w) => {
      a.current = !0, i((k) => {
        const E = typeof w == "function" ? w(k) : w;
        let A = E;
        return E && typeof E == "object" && Object.keys(E).filter(
          (B) => B.startsWith("integrations.") || B === "integrations"
        ).length > 0 && E.integrations && (A = E), c.current = A, l.current = Date.now(), queueMicrotask(() => v(A)), A;
      });
    },
    [v]
  ), b = g.useCallback(
    (w, k, E) => {
      m((A) => ({
        ...A ?? {},
        pages: {
          ...A?.pages ?? {},
          [w]: {
            ...A?.pages?.[w] ?? {},
            [k]: E
          }
        }
      }));
    },
    [m]
  ), y = g.useCallback(
    (w, k) => {
      m((E) => {
        const A = E?.integrations ?? {}, T = A[w], B = typeof k == "function" ? k(T) : k;
        return {
          ...E ?? {},
          integrations: {
            ...A,
            [w]: B
          }
        };
      });
    },
    [m]
  ), x = g.useCallback(
    (w, k, E) => {
      y(w, (A) => ({
        ...A ?? {},
        [k]: E
      }));
    },
    [y]
  ), S = g.useCallback(
    (w) => {
      m((k) => {
        if (!k?.integrations || !k.integrations[w])
          return k;
        const { [w]: E, ...A } = k.integrations;
        return {
          ...k,
          integrations: Object.keys(A).length > 0 ? A : void 0
        };
      });
    },
    [m]
  ), C = g.useCallback(
    (w, k) => {
      m((E) => By(E, w, k));
    },
    [m]
  ), N = g.useCallback(
    (w, k) => {
      const E = k ?? r;
      m((A) => Oy(A, w, E));
    },
    [m, r]
  ), I = g.useCallback(
    (w) => fo(o, w),
    [o]
  ), P = g.useMemo(
    () => ({
      payload: o,
      setPayload: m,
      setPageOptionValue: b,
      setIntegrationPayload: y,
      setIntegrationPayloadValue: x,
      removeIntegrationPayload: S,
      updateIntegrationByDialogPath: C,
      mergePageEditorState: N,
      getPagePayload: I
    }),
    [
      o,
      m,
      b,
      y,
      x,
      S,
      C,
      N,
      I
    ]
  );
  return /* @__PURE__ */ p(br.Provider, { value: P, children: n });
}
function Ky(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function jy(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function Gy(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const s = t?.pages?.[i.id]?.[r];
      return s === void 0 ? Ky(e) : e.type === "toggle" ? !!s : s;
    },
    onChange: (i, s) => {
      n(i, r, jy(e, s));
    }
  };
}
function Qa(e) {
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
function Wy(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function Vy(e, t) {
  if (e === "two_pages")
    return Wy(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function Uy({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
  const r = n - Math.max(t, 0), o = [e, r].filter((i) => i > 0);
  return o.length ? Math.min(...o) : 0;
}
function Yy({
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
function qy({
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
function Xy(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function Zy(e, t, n, r) {
  if (e.width <= 0 || e.height <= 0) return { deltaLeft: 0, deltaTop: 0 };
  const o = n - e.left, i = r - e.top, s = t.left + o * (t.width / e.width), a = t.top + i * (t.height / e.height);
  return {
    deltaLeft: s - n,
    deltaTop: a - r
  };
}
function ii(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function Jy(e, t, n) {
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
function ec(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
const Qy = 24, ew = 64, tw = 1e3, tc = {
  // Auto margins centre the stack while it fits and collapse to 0 once it overflows, which is
  // what keeps both edges reachable. Padding sits on the content box so `scrollWidth` counts
  // the right-hand gutter.
  width: "max-content",
  margin: "auto",
  padding: `0 ${Qy}px ${ew}px`,
  overflowAnchor: "none"
};
function nw(e) {
  let t = e, n = null, r = null;
  for (; t && t !== document.documentElement; ) {
    const i = window.getComputedStyle(t);
    if (!n && ec(i.overflowX) && (n = t), !r && ec(i.overflowY) && (r = t), n && r) return { x: n, y: r };
    t = t.parentElement;
  }
  const o = document.scrollingElement;
  return { x: n ?? o, y: r ?? o };
}
function rw(e) {
  const t = Math.max(e.getBoundingClientRect().top, 0);
  let n = 0, r = e.parentElement;
  for (; r && r !== document.documentElement; ) {
    const o = window.getComputedStyle(r);
    o.display !== "contents" && (n += (Number.parseFloat(o.paddingBottom) || 0) + (Number.parseFloat(o.borderBottomWidth) || 0) + Math.max(Number.parseFloat(o.marginBottom) || 0, 0)), r = r.parentElement;
  }
  return t + n;
}
function ow(e) {
  const t = e.querySelector("[data-section-content]"), n = t?.closest('[class*="group/section"]');
  if (!t || !n) return 0;
  const r = t.getBoundingClientRect().height;
  return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
const ho = Qt({ zoom: 100, scaleValue: 1, hideUI: !1 });
function iw({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = Pe(ho), o = le(null);
  return ce(() => {
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
  }, [e, r]), /* @__PURE__ */ p(
    "div",
    {
      ref: o,
      className: `two-pages-pair two-pages-pair--${t}`,
      "data-page-item-id": n,
      children: e
    }
  );
}
function sw(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function aw(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const i = n.querySelector("[data-section-content]");
    return i ? [i] : [];
  })();
  if (!r.length) return null;
  const o = r.map(sw).filter((i) => i !== null);
  return Vy(t, o);
}
function Wr({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: s } = Pe(ho), a = le(null), [c, l] = se(0), [d, u] = se(0);
  ce(() => {
    if (a.current) {
      const y = () => {
        const S = a.current;
        if (S) {
          const C = S.style.transform;
          S.style.transform = "scale(1)";
          const N = S.scrollHeight, I = S.scrollWidth;
          S.style.transform = C, l(N), u(I);
        }
      };
      y();
      const x = new ResizeObserver(y);
      return x.observe(a.current), () => {
        x.disconnect();
      };
    }
  }, [e]);
  const f = c * i, h = Math.max(d * i, 150), v = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: m, origin: b } = v[o];
  return s ? /* @__PURE__ */ p("div", { className: n, children: e }) : /* @__PURE__ */ $(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${h}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ p("div", { children: r ?? /* @__PURE__ */ p("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
          t,
          " Controls"
        ] }) }) }),
        /* @__PURE__ */ p(
          "div",
          {
            className: "pt-1",
            style: {
              height: f > 0 ? `${f + 32}px` : "auto",
              minHeight: "100px"
            },
            children: /* @__PURE__ */ p("div", { className: `flex items-start ${m}`, children: /* @__PURE__ */ p(
              "div",
              {
                ref: a,
                "data-section-content": !0,
                "data-natural-width": d,
                "data-natural-height": c,
                style: {
                  transform: `scale(${i})`,
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
function cw({
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
  const u = rs(), f = a ?? u, [h, v] = se(n), [m, b] = se(() => Qa(l)), [y, x] = se(
    () => Qa(l) !== "none"
  ), [S, C] = se(0), N = le(null), I = le(null), P = le(null), w = le(null), k = le(h);
  ce(() => {
    k.current = h;
  }, [h]);
  const E = he(() => d === "pane" && I.current ? { x: I.current, y: I.current } : nw(N.current), [d]), A = he((R, M, D) => {
    const K = Math.min(Math.max(R, r), o), j = w.current;
    if (!j) {
      v(K), b("none");
      return;
    }
    const H = E(), V = Array.from(j.querySelectorAll("[data-section-content]")), Y = Jy(
      V.map((Z) => ii(Z.getBoundingClientRect())),
      M,
      D
    ), z = Y >= 0 ? V[Y] : j, W = ii(z.getBoundingClientRect()), U = Xy(W, M, D);
    Hf(() => {
      v(K), b("none");
    });
    const J = () => {
      const Z = ii(z.getBoundingClientRect()), { deltaLeft: te, deltaTop: re } = Zy(W, Z, U.clientX, U.clientY);
      te !== 0 && H.x && (H.x.scrollLeft += te), re !== 0 && H.y && (H.y.scrollTop += re);
    };
    J(), window.requestAnimationFrame(J);
  }, [o, r, E]), T = he(() => {
    const M = (d === "pane" ? I.current : N.current)?.getBoundingClientRect();
    return M ? { clientX: M.left + M.width / 2, clientY: M.top + M.height / 2 } : { clientX: 0, clientY: 0 };
  }, [d]), B = he(() => {
    const R = w.current;
    if (m === "none" || !R) return;
    const M = aw(R, c);
    if (!M) return;
    const D = d === "pane" ? I.current : N.current;
    if (!D) return;
    const K = D.getBoundingClientRect(), j = D.ownerDocument.defaultView ?? window, H = j.visualViewport?.height ?? D.ownerDocument.documentElement.clientHeight ?? j.innerHeight, V = D.clientWidth || K.width, Y = d === "pane" ? Uy({
      paneClientHeight: D.clientHeight || K.height,
      paneTop: K.top,
      viewportHeight: H
    }) : H - Math.max(K.top, 0), z = P.current ? window.getComputedStyle(P.current) : null, W = z ? Number.parseFloat(z.paddingLeft) + Number.parseFloat(z.paddingRight) : 0, U = z ? Number.parseFloat(z.paddingTop) + Number.parseFloat(z.paddingBottom) : 0, { availableWidth: J, availableHeight: Z } = Yy({
      paneWidth: V,
      paneHeight: Y,
      paddingX: W,
      paddingY: U,
      chromeHeight: ow(R)
    }), te = qy({
      mode: m,
      contentWidth: M.width,
      contentHeight: M.height,
      availableWidth: J,
      availableHeight: Z,
      minZoom: r,
      maxZoom: o
    });
    te !== null && (v((re) => Math.abs(re - te) < 0.01 ? re : te), x(!1));
  }, [m, o, r, c, d]), _ = (R) => {
    b(R);
  };
  ce(() => {
    if (!y) return;
    if (m === "none") {
      x(!1);
      return;
    }
    const R = window.setTimeout(() => x(!1), tw);
    return () => window.clearTimeout(R);
  }, [y, m]);
  const G = () => {
    const R = T();
    A(h + 25, R.clientX, R.clientY);
  }, L = () => {
    const R = T();
    A(h - 25, R.clientX, R.clientY);
  };
  ce(() => {
    if (m === "none" || !N.current || !w.current) return;
    let R = 0;
    const M = () => {
      window.cancelAnimationFrame(R), R = window.requestAnimationFrame(B);
    }, D = new ResizeObserver(M);
    D.observe(N.current), I.current && D.observe(I.current), D.observe(w.current);
    const K = () => {
      w.current?.querySelectorAll("[data-section-content]").forEach((H) => {
        D.observe(H);
      });
    };
    K();
    const j = new MutationObserver(() => {
      K(), M();
    });
    return j.observe(w.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), M(), () => {
      window.cancelAnimationFrame(R), D.disconnect(), j.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [m, B]), ce(() => {
    if (f || d !== "pane") return;
    const R = N.current;
    if (!R) return;
    const M = () => {
      const K = rw(R);
      C((j) => Math.abs(j - K) < 0.5 ? j : K);
    };
    M();
    const D = new ResizeObserver(M);
    return D.observe(R), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), () => {
      D.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [f, d]), ce(() => {
    if (f) return;
    let R = null, M = null, D = null, K = { clientX: 0, clientY: 0 }, j = null, H = !1;
    const V = () => {
      R = null;
      const W = D;
      D = null, W !== null && A(W, K.clientX, K.clientY);
    }, Y = (W) => {
      if (!W.ctrlKey && !W.metaKey) return;
      W.preventDefault();
      const U = 16, J = W.deltaMode === 1 ? W.deltaY * U : W.deltaMode === 2 ? W.deltaY * U * 32 : W.deltaY, Z = D ?? k.current, te = Math.min(Math.max(Z * Math.pow(1.003, -J), r), o);
      K = { clientX: W.clientX, clientY: W.clientY }, !(te === Z && D === null) && (D = te, R === null && (R = window.requestAnimationFrame(V)));
    }, z = () => {
      if (M = null, !H) {
        if (j = d === "pane" ? I.current : N.current, !j) {
          M = window.requestAnimationFrame(z);
          return;
        }
        j.addEventListener("wheel", Y, { passive: !1 });
      }
    };
    return z(), () => {
      H = !0, R !== null && window.cancelAnimationFrame(R), M !== null && window.cancelAnimationFrame(M), j?.removeEventListener("wheel", Y);
    };
  }, [A, f, o, r, d]);
  const F = h / 100;
  return f ? /* @__PURE__ */ p(ho.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ p("div", { className: t, children: e }) }) : /* @__PURE__ */ p(ho.Provider, { value: { zoom: h, scaleValue: F, hideUI: !1 }, children: /* @__PURE__ */ $("div", { ref: N, className: `flex flex-col flex-1 min-h-0 ${t}`, children: [
    /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      s,
      /* @__PURE__ */ p("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ $(mr, { modal: !1, children: [
        /* @__PURE__ */ p(vr, { asChild: !0, children: /* @__PURE__ */ $(Le, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(h),
          "%",
          /* @__PURE__ */ p(al, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ $(Gn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ $(
            Ue,
            {
              onClick: () => _("width"),
              className: `cursor-pointer flex items-center ${m === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(Jp, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ $(
            Ue,
            {
              onClick: () => _("height"),
              className: `cursor-pointer flex items-center ${m === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(eg, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ $(
            Ue,
            {
              onClick: () => _("both"),
              className: `cursor-pointer flex items-center ${m === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(Hp, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ p(gn, { className: "my-1.5" }),
          /* @__PURE__ */ $("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (R) => R.stopPropagation(), children: [
            /* @__PURE__ */ p(
              Le,
              {
                variant: "ghost",
                size: "sm",
                onClick: (R) => {
                  R.stopPropagation(), L();
                },
                disabled: h <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ p(ig, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ $("div", { className: "relative", children: [
              /* @__PURE__ */ p(
                "input",
                {
                  type: "number",
                  value: Math.round(h),
                  onChange: (R) => {
                    const M = Number.parseInt(R.target.value);
                    if (!isNaN(M)) {
                      const D = T();
                      A(M, D.clientX, D.clientY);
                    }
                  },
                  onFocus: (R) => R.target.select(),
                  className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  min: r,
                  max: o
                }
              ),
              /* @__PURE__ */ p("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ p(
              Le,
              {
                variant: "ghost",
                size: "sm",
                onClick: (R) => {
                  R.stopPropagation(), G();
                },
                disabled: h >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ p(rg, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p(
      "div",
      {
        ref: I,
        className: d === "pane" ? "uhuu-zoom-pane" : void 0,
        style: d === "pane" ? {
          height: `calc(100dvh - ${S}px)`,
          maxHeight: "100%",
          overflow: "auto",
          overscrollBehavior: "contain"
        } : void 0,
        children: /* @__PURE__ */ p(
          "div",
          {
            ref: P,
            className: "uhuu-zoom-pane-content",
            style: y ? { ...tc, visibility: "hidden" } : tc,
            children: /* @__PURE__ */ p("div", { ref: w, className: c === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e })
          }
        )
      }
    )
  ] }) });
}
var lw = Object.defineProperty, qe = (e, t) => lw(e, "name", { value: t, configurable: !0 }), Ds = "Dialog", [fd, hd] = /* @__PURE__ */ ft(Ds), [uw, pt] = fd(Ds), pd = /* @__PURE__ */ qe((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = g.useRef(null), c = g.useRef(null), [l, d] = yn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Ds
  }), [u, f] = g.useState(0), [h, v] = g.useState(0);
  return /* @__PURE__ */ p(
    uw,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: Rt(),
      titleId: Rt(),
      descriptionId: Rt(),
      titlePresent: u > 0,
      descriptionPresent: h > 0,
      setTitleCount: f,
      setDescriptionCount: v,
      open: l,
      onOpenChange: d,
      onOpenToggle: g.useCallback(() => d((m) => !m), [d]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), dw = "DialogTrigger", fw = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = pt(dw, r), s = me(n, i.triggerRef);
    return /* @__PURE__ */ p(
      ye.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": To(i.open),
        ...o,
        ref: s,
        onClick: ne(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), gd = "DialogPortal", [hw, md] = fd(gd, {
  forceMount: void 0
}), vd = /* @__PURE__ */ qe((e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = pt(gd, t);
  return /* @__PURE__ */ p(hw, { scope: t, forceMount: n, children: g.Children.map(r, (s) => /* @__PURE__ */ p(jn, { present: n || i.open, children: /* @__PURE__ */ p(au, { asChild: !0, container: o, children: s }) })) });
}, "DialogPortal"), Ti = "DialogOverlay", As = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const r = md(Ti, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = pt(Ti, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p(jn, { present: o || s.open, children: /* @__PURE__ */ p(gw, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), pw = /* @__PURE__ */ Yt("DialogOverlay.RemoveScroll"), gw = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = pt(Ti, r), s = Ol(), a = me(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(bs, { as: pw, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ p(
        ye.div,
        {
          "data-state": To(i.open),
          ...o,
          ref: a,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), lr = "DialogContent", Ms = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const r = md(lr, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = pt(lr, t.__scopeDialog);
    return /* @__PURE__ */ p(jn, { present: o || s.open, children: s.modal ? /* @__PURE__ */ p(mw, { ...i, ref: n }) : /* @__PURE__ */ p(vw, { ...i, ref: n }) });
  }, "DialogContent")
), mw = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const r = pt(lr, t.__scopeDialog), o = g.useRef(null), i = me(n, r.contentRef, o);
    return g.useEffect(() => {
      const s = o.current;
      if (s) return Cu(s);
    }, []), /* @__PURE__ */ p(
      bd,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: ne(t.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: ne(t.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || c) && s.preventDefault();
        }),
        onFocusOutside: ne(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), vw = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const r = pt(lr, t.__scopeDialog), o = g.useRef(!1), i = g.useRef(!1);
    return /* @__PURE__ */ p(
      bd,
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
), bd = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = t, c = pt(lr, r);
    return So(), /* @__PURE__ */ p($e, { children: /* @__PURE__ */ p(
      Fl,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ p(
          Ml,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": To(c.open),
            ...a,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), bw = "DialogTitle", Os = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = pt(bw, r), { setTitleCount: s } = i;
    return Ye(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ p(ye.h2, { id: i.titleId, ...o, ref: n });
  }, "DialogTitle")
), yw = "DialogDescription", _s = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = pt(yw, r), { setDescriptionCount: s } = i;
    return Ye(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ p(ye.p, { id: i.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), ww = "DialogClose", Ts = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = pt(ww, r);
    return /* @__PURE__ */ p(
      ye.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: ne(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function To(e) {
  return e ? "open" : "closed";
}
qe(To, "getState");
const yd = pd, xw = vd, wd = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  As,
  {
    className: ue(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
wd.displayName = As.displayName;
const Fs = g.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = ts();
  return /* @__PURE__ */ $(xw, { container: i || void 0, children: [
    /* @__PURE__ */ p(wd, {}),
    /* @__PURE__ */ $(
      Ms,
      {
        ref: o,
        className: ue(
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
          /* @__PURE__ */ $(Ts, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ p(ul, { className: "h-4 w-4" }),
            /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Fs.displayName = Ms.displayName;
const $s = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: ue(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$s.displayName = "SheetHeader";
const xd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: ue(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
xd.displayName = "SheetFooter";
const Ls = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Os,
  {
    ref: n,
    className: ue("text-lg font-medium text-gray-900", e),
    ...t
  }
));
Ls.displayName = Os.displayName;
const Bs = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  _s,
  {
    ref: n,
    className: ue("text-sm text-gray-500", e),
    ...t
  }
));
Bs.displayName = _s.displayName;
function zs(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, s = or.resolveDimensions(r), a = s.width, c = s.height, l = a / c, d = o, u = i ?? Math.round(d / l), f = a * 3.779527559, h = c * 3.779527559;
  return (v, m, b) => {
    const y = v.strictPosition, x = y === "start" || y === "end";
    if (v.kind === "group") {
      const S = v.firstPageId, C = v.firstPageComponentKey ?? S, N = fo(n, { id: S, componentKey: C }), I = v.firstPageComponent || (C ? t[C] : null), P = n?.integrations?.[v.id];
      return /* @__PURE__ */ $(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : x ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.id,
          children: [
            I ? /* @__PURE__ */ p(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ p("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ p(
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: C,
                        pagePayload: N,
                        componentKey: C,
                        integration: P,
                        parentGroup: v
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ p("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                v.id
              ] }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            /* @__PURE__ */ $("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              v.pageCount,
              " pages)"
            ] }),
            x && /* @__PURE__ */ $("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ p(mi, { className: "size-3" }),
              /* @__PURE__ */ p("span", { children: y === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p("div", { className: "text-sm font-medium truncate", children: v.label || v.id }) }) }) }),
            b && /* @__PURE__ */ p("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const S = v.pageId, C = v.pageComponentKey ?? S, N = fo(n, { id: S, componentKey: C }), I = v.pageComponent || (C ? t[C] : null), P = S ? ud(n, { id: S }) : void 0;
      return /* @__PURE__ */ $(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : x ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.pageId,
          children: [
            I ? /* @__PURE__ */ p(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ p(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ p("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ p(
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: C,
                        pagePayload: N,
                        componentKey: C,
                        integration: P
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ p("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                v.pageNum
              ] }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            x && /* @__PURE__ */ $("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ p(mi, { className: "size-3" }),
              /* @__PURE__ */ p("span", { children: y === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p("div", { className: "text-sm font-medium truncate", children: v.pageLabel || `Page ${v.pageNum}` }) }) }) }),
            b && /* @__PURE__ */ p("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function Cw({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: i,
  setup: s = { width: 210, height: 297 },
  gridColsClass: a = "page-order-grid-cols"
}) {
  const [c, l] = g.useState(""), d = g.useMemo(() => {
    if (!c.trim()) return n;
    const I = c.toLowerCase();
    return n.filter(
      (P) => (P.label || "").toLowerCase().includes(I) || P.id.toLowerCase().includes(I)
    );
  }, [n, c]), u = (I) => {
    t(!1), r(I);
  }, f = or.resolveDimensions(s), h = f.width, v = f.height, m = h / v, b = 200, y = Math.round(b / m), x = {
    width: `${b}px`,
    height: `${y}px`
  }, S = g.useMemo(() => o ? zs({
    pageComponents: o,
    payload: i,
    setup: s,
    thumbnailWidth: b,
    thumbnailHeight: y
  }) : null, [o, i, s, b, y]), C = (I, P) => {
    if (!I) return [];
    if (Array.isArray(I)) return I;
    try {
      const w = I(P);
      if (!Array.isArray(w))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof w), [];
      const k = w.filter((E) => typeof E == "string");
      return k.length !== w.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), k;
    } catch (w) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", w), [];
    }
  }, N = (I, P) => {
    if (I.kind === "group") {
      const E = I, A = { payload: i, item: void 0, parent: void 0 }, T = C(E.pageComponentKeys, A), B = T[0];
      return {
        kind: "group",
        id: I.id,
        label: I.label,
        pageCount: T.length,
        firstPageId: B,
        firstPageComponentKey: B
      };
    }
    const w = I, k = w.componentKey ?? w.id;
    return {
      kind: "page",
      id: w.id,
      pageId: w.id,
      pageComponentKey: k,
      pageLabel: w.label,
      pageNum: P + 1
    };
  };
  return /* @__PURE__ */ p(yd, { open: e, onOpenChange: t, children: /* @__PURE__ */ $(
    Fs,
    {
      side: "bottom",
      className: "h-[90vh] w-full max-w-none flex flex-col gap-0 bg-gray-50 p-0",
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ p($s, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ $("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ p("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ p(bt, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ $("div", { className: "flex-1", children: [
            /* @__PURE__ */ p(Ls, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
            /* @__PURE__ */ p(Bs, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
          ] }),
          /* @__PURE__ */ $("div", { className: "mb-0.5 mr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200", children: [
            /* @__PURE__ */ p(Yp, { className: "w-3.5 h-3.5 shrink-0" }),
            /* @__PURE__ */ p("label", { className: "sr-only", htmlFor: "uhuu-add-page-filter", children: "Filter pages and groups" }),
            /* @__PURE__ */ p(
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
        /* @__PURE__ */ p("div", { className: "min-h-0 flex-1 overflow-auto bg-gray-50 p-6", children: d.length === 0 ? /* @__PURE__ */ $("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ p(bt, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ p("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
          /* @__PURE__ */ p("p", { className: "text-gray-500 mb-4", children: c.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
        ] }) : /* @__PURE__ */ p("div", { className: a, children: d.map((I, P) => {
          const w = I.kind === "group", k = I.id, E = w ? I.label || `Group ${P + 1}` : I.label || `Page ${I.id}`, A = { payload: i, item: void 0, parent: void 0 }, T = w ? C(I.pageComponentKeys, A).length : 1, B = !!S;
          return /* @__PURE__ */ $(
            "div",
            {
              onClick: () => u(I),
              onKeyDown: (_) => {
                (_.key === "Enter" || _.key === " ") && (_.preventDefault(), u(I));
              },
              role: "button",
              tabIndex: 0,
              "aria-label": `Add ${E}`,
              className: [
                "group relative block cursor-pointer border-0 bg-transparent p-0 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
                !B && "bg-white border-2 border-gray-200"
              ].filter(Boolean).join(" "),
              style: x,
              children: [
                /* @__PURE__ */ p("div", { className: "w-full h-full relative", children: I.thumbnail ? /* @__PURE__ */ p("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ p(
                  "img",
                  {
                    src: I.thumbnail,
                    className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                    alt: E
                  }
                ) }) : S ? /* @__PURE__ */ p("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: S(N(I, P), P, !1) }) : /* @__PURE__ */ p($e, { children: w ? /* @__PURE__ */ $("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(bt, { className: "w-8 h-8 text-blue-600" }) }),
                  /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ $("div", { className: "text-xs text-gray-500 mt-1", children: [
                    T,
                    " ",
                    T === 1 ? "page" : "pages"
                  ] })
                ] }) : /* @__PURE__ */ $("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(bt, { className: "w-8 h-8 text-gray-400" }) }),
                  /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: k })
                ] }) }) }),
                (!S || I?.thumbnail) && /* @__PURE__ */ $($e, { children: [
                  w && /* @__PURE__ */ $("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                    "Group (",
                    T,
                    " ",
                    T === 1 ? "page" : "pages",
                    ")"
                  ] }),
                  /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": k, children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p("div", { className: "text-sm font-medium truncate", children: E }) }) }) })
                ] }),
                /* @__PURE__ */ p("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ p(bt, { className: "w-4 h-4 text-white" }) })
              ]
            },
            k
          );
        }) }) })
      ]
    }
  ) });
}
function Sw() {
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
const Fo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Wn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Hs(e) {
  return "nodeType" in e;
}
function He(e) {
  var t, n;
  return e ? Wn(e) ? e : Hs(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ks(e) {
  const {
    Document: t
  } = He(e);
  return e instanceof t;
}
function yr(e) {
  return Wn(e) ? !1 : e instanceof He(e).HTMLElement;
}
function Cd(e) {
  return e instanceof He(e).SVGElement;
}
function Vn(e) {
  return e ? Wn(e) ? e.document : Hs(e) ? Ks(e) ? e : yr(e) || Cd(e) ? e.ownerDocument : document : document : document;
}
const ut = Fo ? Nc : ce;
function $o(e) {
  const t = le(e);
  return ut(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Pw() {
  const e = le(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function ur(e, t) {
  t === void 0 && (t = [e]);
  const n = le(e);
  return ut(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function wr(e, t) {
  const n = le();
  return ee(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function po(e) {
  const t = $o(e), n = le(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function go(e) {
  const t = le();
  return ce(() => {
    t.current = e;
  }, [e]), t.current;
}
let si = {};
function xr(e, t) {
  return ee(() => {
    if (t)
      return t;
    const n = si[e] == null ? 0 : si[e] + 1;
    return si[e] = n, e + "-" + n;
  }, [e, t]);
}
function Sd(e) {
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
const Fn = /* @__PURE__ */ Sd(1), dr = /* @__PURE__ */ Sd(-1);
function Iw(e) {
  return "clientX" in e && "clientY" in e;
}
function Lo(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function Nw(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function mo(e) {
  if (Nw(e)) {
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
  return Iw(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Zt = /* @__PURE__ */ Object.freeze({
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
        return [Zt.Translate.toString(e), Zt.Scale.toString(e)].join(" ");
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
}), nc = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function kw(e) {
  return e.matches(nc) ? e : e.querySelector(nc);
}
const Rw = {
  display: "none"
};
function Ew(e) {
  let {
    id: t,
    value: n
  } = e;
  return Se.createElement("div", {
    id: t,
    style: Rw
  }, n);
}
function Dw(e) {
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
  return Se.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Aw() {
  const [e, t] = se("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Pd = /* @__PURE__ */ Qt(null);
function Mw(e) {
  const t = Pe(Pd);
  ce(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ow() {
  const [e] = se(() => /* @__PURE__ */ new Set()), t = he((r) => (e.add(r), () => e.delete(r)), [e]);
  return [he((r) => {
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
const _w = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Tw = {
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
function Fw(e) {
  let {
    announcements: t = Tw,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = _w
  } = e;
  const {
    announce: i,
    announcement: s
  } = Aw(), a = xr("DndLiveRegion"), [c, l] = se(!1);
  if (ce(() => {
    l(!0);
  }, []), Mw(ee(() => ({
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
  const d = Se.createElement(Se.Fragment, null, Se.createElement(Ew, {
    id: r,
    value: o.draggable
  }), Se.createElement(Dw, {
    id: a,
    announcement: s
  }));
  return n ? Kf(d, n) : d;
}
var Me;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Me || (Me = {}));
function vo() {
}
function rc(e, t) {
  return ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function $w() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ee(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const dt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Id(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Lw(e, t) {
  const n = mo(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Nd(e, t) {
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
function Bw(e, t) {
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
function oc(e) {
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
function kd(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function ic(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const zw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = ic(t, t.left, t.top), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = Id(ic(c), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(Nd);
}, Hw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = oc(t), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = oc(c), d = o.reduce((f, h, v) => f + Id(l[v], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort(Nd);
};
function Kw(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const c = t.width * t.height, l = e.width * e.height, d = s * a, u = d / (c + l - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const jw = (e) => {
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
      const c = Kw(a, t);
      c > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return o.sort(Bw);
};
function Gw(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Rd(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : dt;
}
function Ww(e) {
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
const Vw = /* @__PURE__ */ Ww(1);
function Ed(e) {
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
function Uw(e, t, n) {
  const r = Ed(t);
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
const Yw = {
  ignoreTransform: !1
};
function Un(e, t) {
  t === void 0 && (t = Yw);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: l,
      transformOrigin: d
    } = He(e).getComputedStyle(e);
    l && (n = Uw(n, l, d));
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
function sc(e) {
  return Un(e, {
    ignoreTransform: !0
  });
}
function qw(e) {
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
function Xw(e, t) {
  return t === void 0 && (t = He(e).getComputedStyle(e)), t.position === "fixed";
}
function Zw(e, t) {
  t === void 0 && (t = He(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Bo(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ks(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!yr(o) || Cd(o) || n.includes(o))
      return n;
    const i = He(e).getComputedStyle(o);
    return o !== e && Zw(o, i) && n.push(o), Xw(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function Dd(e) {
  const [t] = Bo(e, 1);
  return t ?? null;
}
function ai(e) {
  return !Fo || !e ? null : Wn(e) ? e : Hs(e) ? Ks(e) || e === Vn(e).scrollingElement ? window : yr(e) ? e : null : null;
}
function Ad(e) {
  return Wn(e) ? e.scrollX : e.scrollLeft;
}
function Md(e) {
  return Wn(e) ? e.scrollY : e.scrollTop;
}
function Fi(e) {
  return {
    x: Ad(e),
    y: Md(e)
  };
}
var Oe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Oe || (Oe = {}));
function Od(e) {
  return !Fo || !e ? !1 : e === document.scrollingElement;
}
function _d(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Od(e) ? {
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
const Jw = {
  x: 0.2,
  y: 0.2
};
function Qw(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: c
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = Jw);
  const {
    isTop: l,
    isBottom: d,
    isLeft: u,
    isRight: f
  } = _d(e), h = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, m = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !l && i <= t.top + m.height ? (h.y = Oe.Backward, v.y = r * Math.abs((t.top + m.height - i) / m.height)) : !d && c >= t.bottom - m.height && (h.y = Oe.Forward, v.y = r * Math.abs((t.bottom - m.height - c) / m.height)), !f && a >= t.right - m.width ? (h.x = Oe.Forward, v.x = r * Math.abs((t.right - m.width - a) / m.width)) : !u && s <= t.left + m.width && (h.x = Oe.Backward, v.x = r * Math.abs((t.left + m.width - s) / m.width)), {
    direction: h,
    speed: v
  };
}
function e0(e) {
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
function Td(e) {
  return e.reduce((t, n) => Fn(t, Fi(n)), dt);
}
function t0(e) {
  return e.reduce((t, n) => t + Ad(n), 0);
}
function n0(e) {
  return e.reduce((t, n) => t + Md(n), 0);
}
function Fd(e, t) {
  if (t === void 0 && (t = Un), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  Dd(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const r0 = [["x", ["left", "right"], t0], ["y", ["top", "bottom"], n0]];
class js {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Bo(n), o = Td(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of r0)
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
class er {
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
function o0(e) {
  const {
    EventTarget: t
  } = He(e);
  return e instanceof t ? e : Vn(e);
}
function ci(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var et;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(et || (et = {}));
function ac(e) {
  e.preventDefault();
}
function i0(e) {
  e.stopPropagation();
}
var fe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(fe || (fe = {}));
const $d = {
  start: [fe.Space, fe.Enter],
  cancel: [fe.Esc],
  end: [fe.Space, fe.Enter, fe.Tab]
}, s0 = (e, t) => {
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
class Gs {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new er(Vn(n)), this.windowListeners = new er(He(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(et.Resize, this.handleCancel), this.windowListeners.add(et.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(et.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Fd(r), n(dt);
  }
  handleKeyDown(t) {
    if (Lo(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = $d,
        coordinateGetter: s = s0,
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
      } : dt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const f = dr(u, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: v
        } = r.current;
        for (const m of v) {
          const b = t.code, {
            isTop: y,
            isRight: x,
            isLeft: S,
            isBottom: C,
            maxScroll: N,
            minScroll: I
          } = _d(m), P = e0(m), w = {
            x: Math.min(b === fe.Right ? P.right - P.width / 2 : P.right, Math.max(b === fe.Right ? P.left : P.left + P.width / 2, u.x)),
            y: Math.min(b === fe.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(b === fe.Down ? P.top : P.top + P.height / 2, u.y))
          }, k = b === fe.Right && !x || b === fe.Left && !S, E = b === fe.Down && !C || b === fe.Up && !y;
          if (k && w.x !== u.x) {
            const A = m.scrollLeft + f.x, T = b === fe.Right && A <= N.x || b === fe.Left && A >= I.x;
            if (T && !f.y) {
              m.scrollTo({
                left: A,
                behavior: a
              });
              return;
            }
            T ? h.x = m.scrollLeft - A : h.x = b === fe.Right ? m.scrollLeft - N.x : m.scrollLeft - I.x, h.x && m.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (E && w.y !== u.y) {
            const A = m.scrollTop + f.y, T = b === fe.Down && A <= N.y || b === fe.Up && A >= I.y;
            if (T && !f.x) {
              m.scrollTo({
                top: A,
                behavior: a
              });
              return;
            }
            T ? h.y = m.scrollTop - A : h.y = b === fe.Down ? m.scrollTop - N.y : m.scrollTop - I.y, h.y && m.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, Fn(dr(u, this.referenceCoordinates), h));
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
Gs.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = $d,
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
function cc(e) {
  return !!(e && "distance" in e);
}
function lc(e) {
  return !!(e && "delay" in e);
}
class Ws {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = o0(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Vn(s), this.documentListeners = new er(this.document), this.listeners = new er(r), this.windowListeners = new er(He(s)), this.initialCoordinates = (o = mo(i)) != null ? o : dt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(et.Resize, this.handleCancel), this.windowListeners.add(et.DragStart, ac), this.windowListeners.add(et.VisibilityChange, this.handleCancel), this.windowListeners.add(et.ContextMenu, ac), this.documentListeners.add(et.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (lc(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (cc(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(et.Click, i0, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(et.SelectionChange, this.removeTextSelection), n(t));
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
    const c = (n = mo(t)) != null ? n : dt, l = dr(o, c);
    if (!r && a) {
      if (cc(a)) {
        if (a.tolerance != null && ci(l, a.tolerance))
          return this.handleCancel();
        if (ci(l, a.distance))
          return this.handleStart();
      }
      if (lc(a) && ci(l, a.tolerance))
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
    t.code === fe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const a0 = {
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
class Vs extends Ws {
  constructor(t) {
    const {
      event: n
    } = t, r = Vn(n.target);
    super(t, a0, r);
  }
}
Vs.activators = [{
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
const c0 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var $i;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})($i || ($i = {}));
class l0 extends Ws {
  constructor(t) {
    super(t, c0, Vn(t.event.target));
  }
}
l0.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === $i.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const li = {
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
class u0 extends Ws {
  constructor(t) {
    super(t, li);
  }
  static setup() {
    return window.addEventListener(li.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(li.move.name, t);
    };
    function t() {
    }
  }
}
u0.activators = [{
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
var tr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(tr || (tr = {}));
var bo;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(bo || (bo = {}));
function d0(e) {
  let {
    acceleration: t,
    activator: n = tr.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = bo.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: l,
    scrollableAncestorRects: d,
    delta: u,
    threshold: f
  } = e;
  const h = h0({
    delta: u,
    disabled: !i
  }), [v, m] = Pw(), b = le({
    x: 0,
    y: 0
  }), y = le({
    x: 0,
    y: 0
  }), x = ee(() => {
    switch (n) {
      case tr.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case tr.DraggableRect:
        return o;
    }
  }, [n, o, c]), S = le(null), C = he(() => {
    const I = S.current;
    if (!I)
      return;
    const P = b.current.x * y.current.x, w = b.current.y * y.current.y;
    I.scrollBy(P, w);
  }, []), N = ee(() => a === bo.TreeOrder ? [...l].reverse() : l, [a, l]);
  ce(
    () => {
      if (!i || !l.length || !x) {
        m();
        return;
      }
      for (const I of N) {
        if (r?.(I) === !1)
          continue;
        const P = l.indexOf(I), w = d[P];
        if (!w)
          continue;
        const {
          direction: k,
          speed: E
        } = Qw(I, w, x, t, f);
        for (const A of ["x", "y"])
          h[A][k[A]] || (E[A] = 0, k[A] = 0);
        if (E.x > 0 || E.y > 0) {
          m(), S.current = I, v(C, s), b.current = E, y.current = k;
          return;
        }
      }
      b.current = {
        x: 0,
        y: 0
      }, y.current = {
        x: 0,
        y: 0
      }, m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      C,
      r,
      m,
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(x),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      v,
      l,
      N,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f)
    ]
  );
}
const f0 = {
  x: {
    [Oe.Backward]: !1,
    [Oe.Forward]: !1
  },
  y: {
    [Oe.Backward]: !1,
    [Oe.Forward]: !1
  }
};
function h0(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = go(t);
  return wr((o) => {
    if (n || !r || !o)
      return f0;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Oe.Backward]: o.x[Oe.Backward] || i.x === -1,
        [Oe.Forward]: o.x[Oe.Forward] || i.x === 1
      },
      y: {
        [Oe.Backward]: o.y[Oe.Backward] || i.y === -1,
        [Oe.Forward]: o.y[Oe.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function p0(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return wr((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function g0(e, t) {
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
var fr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(fr || (fr = {}));
var Li;
(function(e) {
  e.Optimized = "optimized";
})(Li || (Li = {}));
const uc = /* @__PURE__ */ new Map();
function m0(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = se(null), {
    frequency: a,
    measure: c,
    strategy: l
  } = o, d = le(e), u = b(), f = ur(u), h = he(function(y) {
    y === void 0 && (y = []), !f.current && s((x) => x === null ? y : x.concat(y.filter((S) => !x.includes(S))));
  }, [f]), v = le(null), m = wr((y) => {
    if (u && !n)
      return uc;
    if (!y || y === uc || d.current !== e || i != null) {
      const x = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          x.set(S.id, S.rect.current);
          continue;
        }
        const C = S.node.current, N = C ? new js(c(C), C) : null;
        S.rect.current = N, N && x.set(S.id, N);
      }
      return x;
    }
    return y;
  }, [e, i, n, u, c]);
  return ce(() => {
    d.current = e;
  }, [e]), ce(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), ce(
    () => {
      i && i.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), ce(
    () => {
      u || typeof a != "number" || v.current !== null || (v.current = setTimeout(() => {
        h(), v.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, u, h, ...r]
  ), {
    droppableRects: m,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function b() {
    switch (l) {
      case fr.Always:
        return !1;
      case fr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Us(e, t) {
  return wr((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function v0(e, t) {
  return Us(e, t);
}
function b0(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = $o(t), o = ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return ce(() => () => o?.disconnect(), [o]), o;
}
function zo(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = $o(t), o = ee(
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
  return ce(() => () => o?.disconnect(), [o]), o;
}
function y0(e) {
  return new js(Un(e), e);
}
function dc(e, t, n) {
  t === void 0 && (t = y0);
  const [r, o] = se(null);
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
  const s = b0({
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
  }), a = zo({
    callback: i
  });
  return ut(() => {
    i(), e ? (a?.observe(e), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [e]), r;
}
function w0(e) {
  const t = Us(e);
  return Rd(e, t);
}
const fc = [];
function x0(e) {
  const t = le(e), n = wr((r) => e ? r && r !== fc && e && t.current && e.parentNode === t.current.parentNode ? r : Bo(e) : fc, [e]);
  return ce(() => {
    t.current = e;
  }, [e]), n;
}
function C0(e) {
  const [t, n] = se(null), r = le(e), o = he((i) => {
    const s = ai(i.target);
    s && n((a) => a ? (a.set(s, Fi(s)), new Map(a)) : null);
  }, []);
  return ce(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((c) => {
        const l = ai(c);
        return l ? (l.addEventListener("scroll", o, {
          passive: !0
        }), [l, Fi(l)]) : null;
      }).filter((c) => c != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((c) => {
        const l = ai(c);
        l?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), ee(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => Fn(i, s), dt) : Td(e) : dt, [e, t]);
}
function hc(e, t) {
  t === void 0 && (t = []);
  const n = le(null);
  return ce(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ce(() => {
    const r = e !== dt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? dr(e, n.current) : dt;
}
function S0(e) {
  ce(
    () => {
      if (!Fo)
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
function P0(e, t) {
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
function Ld(e) {
  return ee(() => e ? qw(e) : null, [e]);
}
const pc = [];
function I0(e, t) {
  t === void 0 && (t = Un);
  const [n] = e, r = Ld(n ? He(n) : null), [o, i] = se(pc);
  function s() {
    i(() => e.length ? e.map((c) => Od(c) ? r : new js(t(c), c)) : pc);
  }
  const a = zo({
    callback: s
  });
  return ut(() => {
    a?.disconnect(), s(), e.forEach((c) => a?.observe(c));
  }, [e]), o;
}
function Bd(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return yr(t) ? t : e;
}
function N0(e) {
  let {
    measure: t
  } = e;
  const [n, r] = se(null), o = he((l) => {
    for (const {
      target: d
    } of l)
      if (yr(d)) {
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
  }, [t]), i = zo({
    callback: o
  }), s = he((l) => {
    const d = Bd(l);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [a, c] = po(s);
  return ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: c
  }), [n, a, c]);
}
const k0 = [{
  sensor: Vs,
  options: {}
}, {
  sensor: Gs,
  options: {}
}], R0 = {
  current: {}
}, Zr = {
  draggable: {
    measure: sc
  },
  droppable: {
    measure: sc,
    strategy: fr.WhileDragging,
    frequency: Li.Optimized
  },
  dragOverlay: {
    measure: Un
  }
};
class nr extends Map {
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
const E0 = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new nr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: vo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Zr,
  measureDroppableContainers: vo,
  windowRect: null,
  measuringScheduled: !1
}, zd = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: vo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: vo
}, Cr = /* @__PURE__ */ Qt(zd), Hd = /* @__PURE__ */ Qt(E0);
function D0() {
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
      containers: new nr()
    }
  };
}
function A0(e, t) {
  switch (t.type) {
    case Me.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Me.DragMove:
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
    case Me.DragEnd:
    case Me.DragCancel:
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
    case Me.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new nr(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Me.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new nr(e.droppable.containers);
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
    case Me.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new nr(e.droppable.containers);
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
function M0(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Pe(Cr), i = go(r), s = go(n?.id);
  return ce(() => {
    if (!t && !r && i && s != null) {
      if (!Lo(i) || document.activeElement === i.target)
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
          const u = kw(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function Kd(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function O0(e) {
  return ee(
    () => ({
      draggable: {
        ...Zr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...Zr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...Zr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function _0(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = le(!1), {
    x: s,
    y: a
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  ut(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const l = t?.node.current;
    if (!l || l.isConnected === !1)
      return;
    const d = n(l), u = Rd(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = Dd(l);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const Ho = /* @__PURE__ */ Qt({
  ...dt,
  scaleX: 1,
  scaleY: 1
});
var Wt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Wt || (Wt = {}));
const T0 = /* @__PURE__ */ Lf(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: c = !0,
    children: l,
    sensors: d = k0,
    collisionDetection: u = jw,
    measuring: f,
    modifiers: h,
    ...v
  } = t;
  const m = Bf(A0, void 0, D0), [b, y] = m, [x, S] = Ow(), [C, N] = se(Wt.Uninitialized), I = C === Wt.Initialized, {
    draggable: {
      active: P,
      nodes: w,
      translate: k
    },
    droppable: {
      containers: E
    }
  } = b, A = P != null ? w.get(P) : null, T = le({
    initial: null,
    translated: null
  }), B = ee(() => {
    var we;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (we = A?.data) != null ? we : R0,
      rect: T
    } : null;
  }, [P, A]), _ = le(null), [G, L] = se(null), [F, R] = se(null), M = ur(v, Object.values(v)), D = xr("DndDescribedBy", s), K = ee(() => E.getEnabled(), [E]), j = O0(f), {
    droppableRects: H,
    measureDroppableContainers: V,
    measuringScheduled: Y
  } = m0(K, {
    dragging: I,
    dependencies: [k.x, k.y],
    config: j.droppable
  }), z = p0(w, P), W = ee(() => F ? mo(F) : null, [F]), U = Ar(), J = v0(z, j.draggable.measure);
  _0({
    activeNode: P != null ? w.get(P) : null,
    config: U.layoutShiftCompensation,
    initialRect: J,
    measure: j.draggable.measure
  });
  const Z = dc(z, j.draggable.measure, J), te = dc(z ? z.parentElement : null), re = le({
    activatorEvent: null,
    active: null,
    activeNode: z,
    collisionRect: null,
    collisions: null,
    droppableRects: H,
    draggableNodes: w,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), be = E.getNodeFor((n = re.current.over) == null ? void 0 : n.id), oe = N0({
    measure: j.dragOverlay.measure
  }), Ne = (r = oe.nodeRef.current) != null ? r : z, Xe = I ? (o = oe.rect) != null ? o : Z : null, on = !!(oe.nodeRef.current && oe.rect), sn = w0(on ? null : Z), an = Ld(Ne ? He(Ne) : null), ot = x0(I ? be ?? z : null), Lt = I0(ot), it = Kd(h, {
    transform: {
      x: k.x - sn.x,
      y: k.y - sn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: F,
    active: B,
    activeNodeRect: Z,
    containerNodeRect: te,
    draggingNodeRect: Xe,
    over: re.current.over,
    overlayNodeRect: oe.rect,
    scrollableAncestors: ot,
    scrollableAncestorRects: Lt,
    windowRect: an
  }), Yn = W ? Fn(W, k) : null, Sn = C0(ot), qn = hc(Sn), Ir = hc(Sn, [Z]), gt = Fn(it, qn), Pt = Xe ? Vw(Xe, it) : null, Bt = B && Pt ? u({
    active: B,
    collisionRect: Pt,
    droppableRects: H,
    droppableContainers: K,
    pointerCoordinates: Yn
  }) : null, Nr = kd(Bt, "id"), [Ge, kr] = se(null), jo = on ? it : Fn(it, Ir), Xn = Gw(jo, (i = Ge?.rect) != null ? i : null, Z), Zn = le(null), Rr = he(
    (we, Re) => {
      let {
        sensor: Be,
        options: st
      } = Re;
      if (_.current == null)
        return;
      const Ee = w.get(_.current);
      if (!Ee)
        return;
      const ke = we.nativeEvent, We = new Be({
        active: _.current,
        activeNode: Ee,
        event: ke,
        options: st,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: re,
        onAbort(De) {
          if (!w.get(De))
            return;
          const {
            onDragAbort: Ve
          } = M.current, Ze = {
            id: De
          };
          Ve?.(Ze), x({
            type: "onDragAbort",
            event: Ze
          });
        },
        onPending(De, at, Ve, Ze) {
          if (!w.get(De))
            return;
          const {
            onDragPending: ln
          } = M.current, ct = {
            id: De,
            constraint: at,
            initialCoordinates: Ve,
            offset: Ze
          };
          ln?.(ct), x({
            type: "onDragPending",
            event: ct
          });
        },
        onStart(De) {
          const at = _.current;
          if (at == null)
            return;
          const Ve = w.get(at);
          if (!Ve)
            return;
          const {
            onDragStart: Ze
          } = M.current, cn = {
            activatorEvent: ke,
            active: {
              id: at,
              data: Ve.data,
              rect: T
            }
          };
          Mr(() => {
            Ze?.(cn), N(Wt.Initializing), y({
              type: Me.DragStart,
              initialCoordinates: De,
              active: at
            }), x({
              type: "onDragStart",
              event: cn
            }), L(Zn.current), R(ke);
          });
        },
        onMove(De) {
          y({
            type: Me.DragMove,
            coordinates: De
          });
        },
        onEnd: zt(Me.DragEnd),
        onCancel: zt(Me.DragCancel)
      });
      Zn.current = We;
      function zt(De) {
        return async function() {
          const {
            active: Ve,
            collisions: Ze,
            over: cn,
            scrollAdjustedTranslate: ln
          } = re.current;
          let ct = null;
          if (Ve && ln) {
            const {
              cancelDrop: Je
            } = M.current;
            ct = {
              activatorEvent: ke,
              active: Ve,
              collisions: Ze,
              delta: ln,
              over: cn
            }, De === Me.DragEnd && typeof Je == "function" && await Promise.resolve(Je(ct)) && (De = Me.DragCancel);
          }
          _.current = null, Mr(() => {
            y({
              type: De
            }), N(Wt.Uninitialized), kr(null), L(null), R(null), Zn.current = null;
            const Je = De === Me.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ct) {
              const In = M.current[Je];
              In?.(ct), x({
                type: Je,
                event: ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), Go = he((we, Re) => (Be, st) => {
    const Ee = Be.nativeEvent, ke = w.get(st);
    if (
      // Another sensor is already instantiating
      _.current !== null || // No active draggable
      !ke || // Event has already been captured
      Ee.dndKit || Ee.defaultPrevented
    )
      return;
    const We = {
      active: ke
    };
    we(Be, Re.options, We) === !0 && (Ee.dndKit = {
      capturedBy: Re.sensor
    }, _.current = st, Rr(Be, Re));
  }, [w, Rr]), Pn = g0(d, Go);
  S0(d), ut(() => {
    Z && C === Wt.Initializing && N(Wt.Initialized);
  }, [Z, C]), ce(
    () => {
      const {
        onDragMove: we
      } = M.current, {
        active: Re,
        activatorEvent: Be,
        collisions: st,
        over: Ee
      } = re.current;
      if (!Re || !Be)
        return;
      const ke = {
        active: Re,
        activatorEvent: Be,
        collisions: st,
        delta: {
          x: gt.x,
          y: gt.y
        },
        over: Ee
      };
      Mr(() => {
        we?.(ke), x({
          type: "onDragMove",
          event: ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gt.x, gt.y]
  ), ce(
    () => {
      const {
        active: we,
        activatorEvent: Re,
        collisions: Be,
        droppableContainers: st,
        scrollAdjustedTranslate: Ee
      } = re.current;
      if (!we || _.current == null || !Re || !Ee)
        return;
      const {
        onDragOver: ke
      } = M.current, We = st.get(Nr), zt = We && We.rect.current ? {
        id: We.id,
        rect: We.rect.current,
        data: We.data,
        disabled: We.disabled
      } : null, De = {
        active: we,
        activatorEvent: Re,
        collisions: Be,
        delta: {
          x: Ee.x,
          y: Ee.y
        },
        over: zt
      };
      Mr(() => {
        kr(zt), ke?.(De), x({
          type: "onDragOver",
          event: De
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Nr]
  ), ut(() => {
    re.current = {
      activatorEvent: F,
      active: B,
      activeNode: z,
      collisionRect: Pt,
      collisions: Bt,
      droppableRects: H,
      draggableNodes: w,
      draggingNode: Ne,
      draggingNodeRect: Xe,
      droppableContainers: E,
      over: Ge,
      scrollableAncestors: ot,
      scrollAdjustedTranslate: gt
    }, T.current = {
      initial: Xe,
      translated: Pt
    };
  }, [B, z, Bt, Pt, w, Ne, Xe, H, E, Ge, ot, gt]), d0({
    ...U,
    delta: k,
    draggingRect: Pt,
    pointerCoordinates: Yn,
    scrollableAncestors: ot,
    scrollableAncestorRects: Lt
  });
  const Er = ee(() => ({
    active: B,
    activeNode: z,
    activeNodeRect: Z,
    activatorEvent: F,
    collisions: Bt,
    containerNodeRect: te,
    dragOverlay: oe,
    draggableNodes: w,
    droppableContainers: E,
    droppableRects: H,
    over: Ge,
    measureDroppableContainers: V,
    scrollableAncestors: ot,
    scrollableAncestorRects: Lt,
    measuringConfiguration: j,
    measuringScheduled: Y,
    windowRect: an
  }), [B, z, Z, F, Bt, te, oe, w, E, H, Ge, V, ot, Lt, j, Y, an]), Dr = ee(() => ({
    activatorEvent: F,
    activators: Pn,
    active: B,
    activeNodeRect: Z,
    ariaDescribedById: {
      draggable: D
    },
    dispatch: y,
    draggableNodes: w,
    over: Ge,
    measureDroppableContainers: V
  }), [F, Pn, B, Z, y, D, w, Ge, V]);
  return Se.createElement(Pd.Provider, {
    value: S
  }, Se.createElement(Cr.Provider, {
    value: Dr
  }, Se.createElement(Hd.Provider, {
    value: Er
  }, Se.createElement(Ho.Provider, {
    value: Xn
  }, l)), Se.createElement(M0, {
    disabled: a?.restoreFocus === !1
  })), Se.createElement(Fw, {
    ...a,
    hiddenTextDescribedById: D
  }));
  function Ar() {
    const we = G?.autoScrollEnabled === !1, Re = typeof c == "object" ? c.enabled === !1 : c === !1, Be = I && !we && !Re;
    return typeof c == "object" ? {
      ...c,
      enabled: Be
    } : {
      enabled: Be
    };
  }
}), F0 = /* @__PURE__ */ Qt(null), gc = "button", $0 = "Draggable";
function L0(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = xr($0), {
    activators: s,
    activatorEvent: a,
    active: c,
    activeNodeRect: l,
    ariaDescribedById: d,
    draggableNodes: u,
    over: f
  } = Pe(Cr), {
    role: h = gc,
    roleDescription: v = "draggable",
    tabIndex: m = 0
  } = o ?? {}, b = c?.id === t, y = Pe(b ? Ho : F0), [x, S] = po(), [C, N] = po(), I = P0(s, t), P = ur(n);
  ut(
    () => (u.set(t, {
      id: t,
      key: i,
      node: x,
      activatorNode: C,
      data: P
    }), () => {
      const k = u.get(t);
      k && k.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const w = ee(() => ({
    role: h,
    tabIndex: m,
    "aria-disabled": r,
    "aria-pressed": b && h === gc ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": d.draggable
  }), [r, h, m, b, v, d.draggable]);
  return {
    active: c,
    activatorEvent: a,
    activeNodeRect: l,
    attributes: w,
    isDragging: b,
    listeners: r ? void 0 : I,
    node: x,
    over: f,
    setNodeRef: S,
    setActivatorNodeRef: N,
    transform: y
  };
}
function jd() {
  return Pe(Hd);
}
const B0 = "Droppable", z0 = {
  timeout: 25
};
function H0(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = xr(B0), {
    active: s,
    dispatch: a,
    over: c,
    measureDroppableContainers: l
  } = Pe(Cr), d = le({
    disabled: n
  }), u = le(!1), f = le(null), h = le(null), {
    disabled: v,
    updateMeasurementsFor: m,
    timeout: b
  } = {
    ...z0,
    ...o
  }, y = ur(m ?? r), x = he(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        l(Array.isArray(y.current) ? y.current : [y.current]), h.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), S = zo({
    callback: x,
    disabled: v || !s
  }), C = he((w, k) => {
    S && (k && (S.unobserve(k), u.current = !1), w && S.observe(w));
  }, [S]), [N, I] = po(C), P = ur(t);
  return ce(() => {
    !S || !N.current || (S.disconnect(), u.current = !1, S.observe(N.current));
  }, [N, S]), ce(
    () => (a({
      type: Me.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: N,
        rect: f,
        data: P
      }
    }), () => a({
      type: Me.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ce(() => {
    n !== d.current.disabled && (a({
      type: Me.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), d.current.disabled = n);
  }, [r, i, n, a]), {
    active: s,
    rect: f,
    isOver: c?.id === r,
    node: N,
    over: c,
    setNodeRef: I
  };
}
function K0(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = se(null), [i, s] = se(null), a = go(n);
  return !n && !r && a && o(a), ut(() => {
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
  }, [t, r, i]), Se.createElement(Se.Fragment, null, n, r ? zf(r, {
    ref: s
  }) : null);
}
const j0 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function G0(e) {
  let {
    children: t
  } = e;
  return Se.createElement(Cr.Provider, {
    value: zd
  }, Se.createElement(Ho.Provider, {
    value: j0
  }, t));
}
const W0 = {
  position: "fixed",
  touchAction: "none"
}, V0 = (e) => Lo(e) ? "transform 250ms ease" : void 0, U0 = /* @__PURE__ */ hr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: s,
    rect: a,
    style: c,
    transform: l,
    transition: d = V0
  } = e;
  if (!a)
    return null;
  const u = o ? l : {
    ...l,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...W0,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Zt.Transform.toString(u),
    transformOrigin: o && r ? Lw(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...c
  };
  return Se.createElement(n, {
    className: s,
    style: f,
    ref: t
  }, i);
}), Y0 = (e) => (t) => {
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
}, q0 = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Zt.Transform.toString(t)
  }, {
    transform: Zt.Transform.toString(n)
  }];
}, X0 = {
  duration: 250,
  easing: "ease",
  keyframes: q0,
  sideEffects: /* @__PURE__ */ Y0({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Z0(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return $o((i, s) => {
    if (t === null)
      return;
    const a = n.get(i);
    if (!a)
      return;
    const c = a.node.current;
    if (!c)
      return;
    const l = Bd(s);
    if (!l)
      return;
    const {
      transform: d
    } = He(s).getComputedStyle(s), u = Ed(d);
    if (!u)
      return;
    const f = typeof t == "function" ? t : J0(t);
    return Fd(c, o.draggable.measure), f({
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
function J0(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...X0,
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
    }), [v] = h, m = h[h.length - 1];
    if (JSON.stringify(v) === JSON.stringify(m))
      return;
    const b = r?.({
      active: s,
      dragOverlay: a,
      ...l
    }), y = a.node.animate(h, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((x) => {
      y.onfinish = () => {
        b?.(), x();
      };
    });
  };
}
let mc = 0;
function Q0(e) {
  return ee(() => {
    if (e != null)
      return mc++, mc;
  }, [e]);
}
const ex = /* @__PURE__ */ Se.memo((e) => {
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
    draggableNodes: v,
    droppableContainers: m,
    dragOverlay: b,
    over: y,
    measuringConfiguration: x,
    scrollableAncestors: S,
    scrollableAncestorRects: C,
    windowRect: N
  } = jd(), I = Pe(Ho), P = Q0(u?.id), w = Kd(s, {
    activatorEvent: d,
    active: u,
    activeNodeRect: f,
    containerNodeRect: h,
    draggingNodeRect: b.rect,
    over: y,
    overlayNodeRect: b.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: C,
    transform: I,
    windowRect: N
  }), k = Us(f), E = Z0({
    config: r,
    draggableNodes: v,
    droppableContainers: m,
    measuringConfiguration: x
  }), A = k ? b.setRef : void 0;
  return Se.createElement(G0, null, Se.createElement(K0, {
    animation: E
  }, u && P ? Se.createElement(U0, {
    key: P,
    id: u.id,
    ref: A,
    as: a,
    activatorEvent: d,
    adjustScale: t,
    className: c,
    transition: i,
    rect: k,
    style: {
      zIndex: l,
      ...o
    },
    transform: w
  }, n) : null));
});
function Ys(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function tx(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function Vr(e) {
  return e !== null && e >= 0;
}
function nx(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function rx(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const qs = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Ys(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, Gd = "Sortable", Wd = /* @__PURE__ */ Se.createContext({
  activeIndex: -1,
  containerId: Gd,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: qs,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ox(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = qs,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: c,
    over: l,
    measureDroppableContainers: d
  } = jd(), u = xr(Gd, n), f = a.rect !== null, h = ee(() => r.map((I) => typeof I == "object" && "id" in I ? I.id : I), [r]), v = s != null, m = s ? h.indexOf(s.id) : -1, b = l ? h.indexOf(l.id) : -1, y = le(h), x = !nx(h, y.current), S = b !== -1 && m === -1 || x, C = rx(i);
  ut(() => {
    x && v && d(h);
  }, [x, h, v, d]), ce(() => {
    y.current = h;
  }, [h]);
  const N = ee(
    () => ({
      activeIndex: m,
      containerId: u,
      disabled: C,
      disableTransforms: S,
      items: h,
      overIndex: b,
      useDragOverlay: f,
      sortedRects: tx(h, c),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, u, C.draggable, C.droppable, S, h, b, c, f, o]
  );
  return Se.createElement(Wd.Provider, {
    value: N
  }, t);
}
const ix = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Ys(n, r, o).indexOf(t);
}, sx = (e) => {
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
}, ax = {
  duration: 200,
  easing: "ease"
}, Vd = "transform", cx = /* @__PURE__ */ Zt.Transition.toString({
  property: Vd,
  duration: 0,
  easing: "linear"
}), lx = {
  roleDescription: "sortable"
};
function ux(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = se(null), a = le(n);
  return ut(() => {
    if (!t && n !== a.current && r.current) {
      const c = o.current;
      if (c) {
        const l = Un(r.current, {
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
  }, [t, n, r, o]), ce(() => {
    i && s(null);
  }, [i]), i;
}
function dx(e) {
  let {
    animateLayoutChanges: t = sx,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = ix,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: l = ax
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: f,
    disabled: h,
    disableTransforms: v,
    sortedRects: m,
    overIndex: b,
    useDragOverlay: y,
    strategy: x
  } = Pe(Wd), S = fx(r, h), C = d.indexOf(s), N = ee(() => ({
    sortable: {
      containerId: u,
      index: C,
      items: d
    },
    ...o
  }), [u, o, C, d]), I = ee(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: P,
    node: w,
    isOver: k,
    setNodeRef: E
  } = H0({
    id: s,
    data: N,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: I,
      ...c
    }
  }), {
    active: A,
    activatorEvent: T,
    activeNodeRect: B,
    attributes: _,
    setNodeRef: G,
    listeners: L,
    isDragging: F,
    over: R,
    setActivatorNodeRef: M,
    transform: D
  } = L0({
    id: s,
    data: N,
    attributes: {
      ...lx,
      ...n
    },
    disabled: S.draggable
  }), K = Sw(E, G), j = !!A, H = j && !v && Vr(f) && Vr(b), V = !y && F, Y = V && H ? D : null, W = H ? Y ?? (a ?? x)({
    rects: m,
    activeNodeRect: B,
    activeIndex: f,
    overIndex: b,
    index: C
  }) : null, U = Vr(f) && Vr(b) ? i({
    id: s,
    items: d,
    activeIndex: f,
    overIndex: b
  }) : C, J = A?.id, Z = le({
    activeId: J,
    items: d,
    newIndex: U,
    containerId: u
  }), te = d !== Z.current.items, re = t({
    active: A,
    containerId: u,
    isDragging: F,
    isSorting: j,
    id: s,
    index: C,
    items: d,
    newIndex: Z.current.newIndex,
    previousItems: Z.current.items,
    previousContainerId: Z.current.containerId,
    transition: l,
    wasDragging: Z.current.activeId != null
  }), be = ux({
    disabled: !re,
    index: C,
    node: w,
    rect: P
  });
  return ce(() => {
    j && Z.current.newIndex !== U && (Z.current.newIndex = U), u !== Z.current.containerId && (Z.current.containerId = u), d !== Z.current.items && (Z.current.items = d);
  }, [j, U, u, d]), ce(() => {
    if (J === Z.current.activeId)
      return;
    if (J != null && Z.current.activeId == null) {
      Z.current.activeId = J;
      return;
    }
    const Ne = setTimeout(() => {
      Z.current.activeId = J;
    }, 50);
    return () => clearTimeout(Ne);
  }, [J]), {
    active: A,
    activeIndex: f,
    attributes: _,
    data: N,
    rect: P,
    index: C,
    newIndex: U,
    items: d,
    isOver: k,
    isSorting: j,
    isDragging: F,
    listeners: L,
    node: w,
    overIndex: b,
    over: R,
    setNodeRef: K,
    setActivatorNodeRef: M,
    setDroppableNodeRef: E,
    setDraggableNodeRef: G,
    transform: be ?? W,
    transition: oe()
  };
  function oe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      be || // Or to prevent items jumping to back to their "new" position when items change
      te && Z.current.newIndex === C
    )
      return cx;
    if (!(V && !Lo(T) || !l) && (j || re))
      return Zt.Transition.toString({
        ...l,
        property: Vd
      });
  }
}
function fx(e, t) {
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
function yo(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const hx = [fe.Down, fe.Right, fe.Up, fe.Left], px = (e, t) => {
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
  if (hx.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const c = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = o.get(u.id);
      if (f)
        switch (e.code) {
          case fe.Down:
            r.top < f.top && c.push(u);
            break;
          case fe.Up:
            r.top > f.top && c.push(u);
            break;
          case fe.Left:
            r.left > f.left && c.push(u);
            break;
          case fe.Right:
            r.left < f.left && c.push(u);
            break;
        }
    });
    const l = Hw({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: c
    });
    let d = kd(l, "id");
    if (d === s?.id && l.length > 1 && (d = l[1].id), d != null) {
      const u = i.get(n.id), f = i.get(d), h = f ? o.get(f.id) : null, v = f?.node.current;
      if (v && h && u && f) {
        const b = Bo(v).some((I, P) => a[P] !== I), y = Ud(u, f), x = gx(u, f), S = b || !y ? {
          x: 0,
          y: 0
        } : {
          x: x ? r.width - h.width : 0,
          y: x ? r.height - h.height : 0
        }, C = {
          x: h.left,
          y: h.top
        };
        return S.x && S.y ? C : dr(C, S);
      }
    }
  }
};
function Ud(e, t) {
  return !yo(e) || !yo(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function gx(e, t) {
  return !yo(e) || !yo(t) || !Ud(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function mx({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: s, listeners: a, setNodeRef: c, transform: l, transition: d, isDragging: u } = dx({
    id: o(e),
    disabled: i
  }), f = {
    transform: Zt.Transform.toString(l),
    transition: d
  };
  return /* @__PURE__ */ $("div", { ref: c, style: f, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !i && (r ? /* @__PURE__ */ p("div", { ...s, ...a, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ p(
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
function vx({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ p("div", { className: "rotate-2", children: n(e, t, !0) });
}
function bx({
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
  const [h, v] = se(e);
  ce(() => {
    v(e);
  }, [e]);
  const [m, b] = se(null), y = $w(
    rc(Vs),
    rc(Gs, {
      coordinateGetter: px
    })
  ), x = (I) => {
    const P = h.find((w) => o(w) === I.active.id);
    P && u && u(P) || b(I.active.id);
  }, S = (I) => {
    const { active: P, over: w } = I;
    if (!w || P.id === w.id) {
      b(null);
      return;
    }
    const k = h.find((T) => o(T) === P.id), E = h.findIndex((T) => o(T) === P.id), A = h.findIndex((T) => o(T) === w.id);
    if (k && u && u(k)) {
      b(null);
      return;
    }
    if (f && !f(k, A, h)) {
      b(null);
      return;
    }
    if (E !== -1 && A !== -1) {
      const T = Ys(h, E, A);
      v(T), t(T);
    }
    b(null);
  }, C = h.find((I) => o(I) === m), N = C ? h.findIndex((I) => o(I) === m) : -1;
  return /* @__PURE__ */ $("div", { className: `w-full ${s}`, children: [
    a && /* @__PURE__ */ p("div", { className: "mb-6", children: a() }),
    h.length === 0 && c ? c() : /* @__PURE__ */ p("div", { className: "mb-6", children: /* @__PURE__ */ $(
      T0,
      {
        sensors: y,
        collisionDetection: zw,
        onDragStart: x,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ p(ox, { items: h.map(o), strategy: qs, children: /* @__PURE__ */ p("div", { className: i, children: h.map((I, P) => /* @__PURE__ */ p(
            mx,
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
          /* @__PURE__ */ p(ex, { children: C ? d ? /* @__PURE__ */ p("div", { className: "rotate-2 shadow-lg", children: d(C, N) }) : /* @__PURE__ */ p(vx, { item: C, index: N, renderItem: n }) : null })
        ]
      }
    ) }),
    l && /* @__PURE__ */ $("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ p("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ $("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        h.length,
        " | Active: ",
        m || "none"
      ] }),
      /* @__PURE__ */ $("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        h.map((I, P) => `${P + 1}:${o(I).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const yx = hl(
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
function Xs({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p("div", { className: ue(yx({ variant: t }), e), ...n });
}
function wx({
  page: e,
  index: t,
  isDragging: n
}) {
  const i = e.strictPosition, s = i === "start" || i === "end";
  return /* @__PURE__ */ $(
    "div",
    {
      className: `flex items-center justify-center border relative rounded-lg bg-white overflow-hidden transition-all ${n ? "opacity-50 border-gray-400 shadow-xl scale-105" : s ? "border-gray-300 bg-gray-50" : "border-gray-200 group-hover/drag-item:border-gray-300 group-hover/drag-item:shadow-md"}`,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ p("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ p(Xs, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${s ? "opacity-75" : ""}`, children: s ? /* @__PURE__ */ p(mi, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ $($e, { children: [
          /* @__PURE__ */ p("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ p(ll, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function xx({
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
  const [f, h] = g.useState(n), [v, m] = g.useState(!1), b = (k) => k.id;
  g.useEffect(() => {
    if (!e)
      h(n), m(!1);
    else if (!v)
      h(n);
    else {
      const k = new Set(f.map(b));
      (k.size !== n.length || n.some((A) => !k.has(b(A)))) && h(n);
    }
  }, [n, e, v, f]);
  const y = (k) => {
    h(k), m(!0);
  }, x = () => {
    r(f), m(!1), t(!1);
  }, S = () => {
    h(n), m(!1), t(!1);
  }, C = g.useMemo(() => (!i || typeof i != "function") && s ? zs({ pageComponents: s, payload: a, setup: c }) : null, [i, s, a, c]), N = (k, E, A) => {
    const T = k.strictPosition, _ = !!o && !(T === "start" || T === "end"), G = (F) => {
      F.preventDefault(), F.stopPropagation(), o && (o(k), h((R) => R.filter((M) => b(M) !== b(k))), m(!0));
    }, L = i && typeof i == "function" ? i(k, E, A) : C ? C(k, E, A) : /* @__PURE__ */ p(wx, { page: k, index: E, isDragging: A });
    return /* @__PURE__ */ $("div", { className: "relative inline-block align-top", children: [
      L,
      _ && /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: G,
          onPointerDown: (F) => F.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ p(ll, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ p(bt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, I = () => /* @__PURE__ */ $("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ p("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(Pa, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ p("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ p("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), P = g.useCallback((k) => {
    const E = k.strictPosition;
    return E === "start" || E === "end";
  }, []), w = g.useCallback((k, E, A) => {
    const T = k.strictPosition;
    if (T === "start" || T === "end")
      return !1;
    let B = -1, _ = A.length;
    for (let G = 0; G < A.length; G++) {
      const L = A[G].strictPosition;
      L === "start" ? B = G : L === "end" && _ === A.length && (_ = G);
    }
    return !(E <= B || E >= _);
  }, []);
  return /* @__PURE__ */ p(yd, { open: e, onOpenChange: (k) => {
    k || S();
  }, children: /* @__PURE__ */ $(
    Fs,
    {
      side: "bottom",
      className: "h-[90vh] p-0 gap-0 w-full max-w-none flex flex-col [&>button]:hidden",
      onPointerDownOutside: (k) => {
        k.preventDefault();
      },
      onEscapeKeyDown: (k) => {
        k.preventDefault();
      },
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ p($s, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ $("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ p("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ p(Pa, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ $("div", { className: "flex-1", children: [
            /* @__PURE__ */ p(Ls, { className: "text-base font-medium text-gray-900 leading-tight", children: l }),
            /* @__PURE__ */ p(Bs, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ $(Xs, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            f.length,
            " ",
            f.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ p("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ p("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ p(
          bx,
          {
            items: f,
            onChange: y,
            renderItem: N,
            keyExtractor: b,
            renderEmptyState: I,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: P,
            canDropAt: w
          }
        ) }) }),
        /* @__PURE__ */ $(xd, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ p(
            Le,
            {
              variant: "outline",
              onClick: S,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ p(
            Le,
            {
              variant: "default",
              onClick: x,
              disabled: !v,
              children: "Save Changes"
            }
          )
        ] })
      ]
    }
  ) });
}
function Cx({
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
  totalPages: v,
  measurementPageNo: m,
  measurementTotalPages: b,
  dataBinding: y,
  flowPageIndex: x = 0,
  flowChunksByFlowId: S,
  measureFlow: C = !1,
  flowMeasurementKey: N,
  flowMeasurementVersion: I,
  onFlowMeasurement: P,
  renderVisible: w = !0,
  renderMode: k = "sheet",
  spread: E
}) {
  const A = typeof u == "function" ? (M) => u({ pageNo: M, pageId: e }) : () => u, T = n || t || e, _ = [T ? `uhuu-page--${T}` : "", f].filter(Boolean).join(" "), G = (M = h, D = v) => r ? /* @__PURE__ */ p(
    r,
    {
      payload: o,
      pagePayload: i,
      integration: s,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: M,
      totalPages: D,
      page: a,
      parentGroup: c,
      componentKey: n,
      dataBinding: y,
      spread: E
    }
  ) : null, L = g.useMemo(
    () => ({
      mode: "visible",
      pageIndex: x,
      chunksByFlowId: S
    }),
    [x, S]
  ), F = g.useCallback((M) => {
    N && P?.(N, M);
  }, [N, P]), R = g.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: I,
      registerMeasurement: F
    }),
    [I, F]
  );
  return k === "content" ? /* @__PURE__ */ $($e, { children: [
    d,
    /* @__PURE__ */ p(On.Provider, { value: L, children: G(h, v) })
  ] }) : /* @__PURE__ */ $($e, { children: [
    C && P && N && /* @__PURE__ */ p(
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
        children: /* @__PURE__ */ p(eo, { setup: l, children: /* @__PURE__ */ p(ir, { className: _, pageNo: h, "data-page-key": T, children: /* @__PURE__ */ p(On.Provider, { value: R, children: G(
          m ?? h,
          b ?? v
        ) }) }) })
      }
    ),
    w && /* @__PURE__ */ p(eo, { setup: l, children: /* @__PURE__ */ $(
      ir,
      {
        className: _,
        pageNo: h,
        overlay: ({ pageNo: M }) => A(M),
        "data-page-key": T,
        children: [
          d,
          /* @__PURE__ */ p(On.Provider, { value: L, children: G(h, v) })
        ]
      }
    ) })
  ] });
}
const Yd = g.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p(
    "select",
    {
      className: ue(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
Yd.displayName = "Select";
var Sx = Object.defineProperty, Jt = (e, t) => Sx(e, "name", { value: t, configurable: !0 }), Zs = "Switch", [Px, tS] = /* @__PURE__ */ ft(Zs), [Ix, Js] = Px(Zs);
function qd(e) {
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
  } = e, [f, h] = yn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Zs
  }), [v, m] = g.useState(null), [b, y] = g.useState(null), x = g.useRef(!1), [S, C] = g.useReducer(
    (P) => P + 1,
    0
  ), N = v ? !!s || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), I = {
    checked: f,
    setChecked: h,
    disabled: i,
    control: v,
    setControl: m,
    name: a,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: x,
    userInteractionCount: S,
    onUserInteraction: C,
    required: l,
    defaultChecked: o,
    isFormControl: N,
    bubbleInput: b,
    setBubbleInput: y
  };
  return /* @__PURE__ */ p(Ix, { scope: t, ...I, children: Zd(u) ? u(I) : r });
}
Jt(qd, "SwitchProvider");
var Nx = "SwitchTrigger", kx = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Jt(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
      onUserInteraction: v,
      isFormControl: m,
      bubbleInput: b
    } = Js(Nx, t), y = me(o, u), x = g.useRef(l);
    return g.useEffect(() => {
      const S = s ? i?.ownerDocument.getElementById(s) : i?.form;
      if (S instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ Jt(() => f(x.current), "reset");
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [i, s, f]), /* @__PURE__ */ p(
      ye.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": d,
        "data-state": Qs(l),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: a,
        ...r,
        ref: y,
        onClick: ne(n, (S) => {
          v(), f((C) => !C), b && m && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), Xd = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Jt(function(t, n) {
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
    return /* @__PURE__ */ p(
      qd,
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
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ $($e, { children: [
          /* @__PURE__ */ p(
            kx,
            {
              ...f,
              ref: n,
              __scopeSwitch: r
            }
          ),
          h && /* @__PURE__ */ p(
            Ax,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), Rx = "SwitchThumb", Ex = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Jt(function(t, n) {
    const { __scopeSwitch: r, ...o } = t, i = Js(Rx, r);
    return /* @__PURE__ */ p(
      ye.span,
      {
        "data-state": Qs(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), Dx = "SwitchBubbleInput", Ax = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Jt(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
      form: v,
      bubbleInput: m,
      setBubbleInput: b
    } = Js(Dx, t), y = me(o, b), x = Eo(i), S = g.useRef(!1), C = g.useRef(c), N = g.useRef(a);
    g.useEffect(() => {
      const P = m;
      if (!P) return;
      const w = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, A = a !== N.current;
      N.current = a;
      const T = C.current !== c;
      C.current = c;
      const B = !(A && s.current);
      if (T && E) {
        S.current = !A;
        const _ = new Event("click", { bubbles: B });
        E.call(P, c), P.dispatchEvent(_), S.current = !1;
      }
    }, [m, c, s, a]);
    const I = g.useRef(c);
    return /* @__PURE__ */ p(
      ye.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? I.current,
        required: d,
        disabled: u,
        name: f,
        value: h,
        form: v,
        ...r,
        tabIndex: -1,
        ref: y,
        onClick: ne(n, (P) => {
          S.current && P.stopPropagation();
        }),
        style: {
          ...r.style,
          ...x,
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
function Zd(e) {
  return typeof e == "function";
}
Jt(Zd, "isFunction");
function Qs(e) {
  return e ? "checked" : "unchecked";
}
Jt(Qs, "getState");
const Jd = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Xd,
  {
    ref: n,
    className: ue(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      Ex,
      {
        className: ue(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Jd.displayName = Xd.displayName;
var Mx = Object.defineProperty, Ox = (e, t) => Mx(e, "name", { value: t, configurable: !0 });
function ea(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
Ox(ea, "clamp");
var _x = Object.defineProperty, Tx = (e, t) => _x(e, "name", { value: t, configurable: !0 });
function Qd(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
Tx(Qd, "usePrevious");
var Fx = Object.defineProperty, pe = (e, t) => Fx(e, "name", { value: t, configurable: !0 }), ef = ["PageUp", "PageDown"], tf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], nf = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Sr = "Slider", [Bi, $x, Lx] = /* @__PURE__ */ xo(Sr), [ta, nS] = /* @__PURE__ */ ft(Sr, [
  Lx
]), [Bx, Pr] = ta(Sr), rf = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
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
      onValueChange: f = /* @__PURE__ */ pe(() => {
      }, "onValueChange"),
      onValueCommit: h = /* @__PURE__ */ pe(() => {
      }, "onValueCommit"),
      inverted: v = !1,
      form: m,
      ...b
    } = t, y = g.useRef(/* @__PURE__ */ new Set()), x = g.useRef(0), S = g.useRef(!1), N = a === "horizontal" ? zx : Hx, [I, P] = g.useState(null), w = me(n, P), [k = [], E] = yn({
      prop: u,
      defaultProp: d,
      onChange: /* @__PURE__ */ pe((F) => {
        [...y.current][x.current]?.focus({
          preventScroll: !0,
          focusVisible: S.current
        }), S.current = !1, f(F);
      }, "onChange")
    }), A = g.useRef(k), T = g.useRef(k);
    g.useEffect(() => {
      const F = m ? I?.ownerDocument.getElementById(m) : I?.closest("form");
      if (F instanceof HTMLFormElement) {
        const R = /* @__PURE__ */ pe(() => E(T.current), "reset");
        return F.addEventListener("reset", R), () => F.removeEventListener("reset", R);
      }
    }, [I, m, E]);
    function B(F) {
      const R = ff(k, F);
      L(F, R);
    }
    pe(B, "handleSlideStart");
    function _(F) {
      L(F, x.current);
    }
    pe(_, "handleSlideMove");
    function G() {
      String(k) !== String(A.current) && h(k);
    }
    pe(G, "handleSlideEnd");
    function L(F, R, { commit: M } = { commit: !1 }) {
      const D = ra(s), K = rr(Math.round((F - o) / s) * s + o, D), j = ea(K, [o, i]);
      E((H = []) => {
        const V = uf(H, j, R);
        if (gf(V, l * s)) {
          x.current = V.indexOf(j);
          const Y = String(V) !== String(H);
          return Y && M && h(V), Y ? V : H;
        } else
          return H;
      });
    }
    return pe(L, "updateValues"), /* @__PURE__ */ p(
      Bx,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: c,
        min: o,
        max: i,
        valueIndexToChangeRef: x,
        thumbs: y.current,
        values: k,
        orientation: a,
        form: m,
        children: /* @__PURE__ */ p(Bi.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ p(Bi.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ p(
          N,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...b,
            ref: w,
            onPointerDown: ne(b.onPointerDown, () => {
              c || (A.current = k, S.current = !1);
            }),
            min: o,
            max: i,
            inverted: v,
            onSlideStart: c ? void 0 : B,
            onSlideMove: c ? void 0 : _,
            onSlideEnd: c ? void 0 : G,
            onHomeKeyDown: () => {
              c || (S.current = !0, L(o, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (S.current = !0, L(i, k.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: F, direction: R }) => {
              if (!c) {
                S.current = !0;
                const K = ef.includes(F.key) || F.shiftKey && tf.includes(F.key) ? 10 : 1, j = x.current, H = k[j], V = mf(H, {
                  min: o,
                  step: s,
                  direction: R,
                  multiplier: K
                });
                L(V, j, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [of, sf] = ta(Sr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), zx = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
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
    } = t, [f, h] = g.useState(null), v = me(n, h), m = g.useRef(void 0), b = Co(i), y = b === "ltr", x = y && !s || !y && s;
    function S(C) {
      const N = m.current || f.getBoundingClientRect(), I = [0, N.width], w = Ko(I, x ? [r, o] : [o, r]);
      return m.current = N, w(C - N.left);
    }
    return pe(S, "getValueFromPointer"), /* @__PURE__ */ p(
      of,
      {
        scope: t.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p(
          af,
          {
            dir: b,
            "data-orientation": "horizontal",
            ...u,
            ref: v,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const N = S(C.clientX);
              a?.(N);
            },
            onSlideMove: (C) => {
              const N = S(C.clientX);
              c?.(N);
            },
            onSlideEnd: () => {
              m.current = void 0, l?.();
            },
            onStepKeyDown: (C) => {
              const I = nf[x ? "from-left" : "from-right"].includes(C.key);
              d?.({ event: C, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), Hx = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const {
      min: r,
      max: o,
      inverted: i,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...d
    } = t, u = g.useRef(null), f = me(n, u), h = g.useRef(void 0), v = !i;
    function m(b) {
      const y = h.current || u.current.getBoundingClientRect(), x = [0, y.height], C = Ko(x, v ? [o, r] : [r, o]);
      return h.current = y, C(b - y.top);
    }
    return pe(m, "getValueFromPointer"), /* @__PURE__ */ p(
      of,
      {
        scope: t.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ p(
          af,
          {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (b) => {
              const y = m(b.clientY);
              s?.(y);
            },
            onSlideMove: (b) => {
              const y = m(b.clientY);
              a?.(y);
            },
            onSlideEnd: () => {
              h.current = void 0, c?.();
            },
            onStepKeyDown: (b) => {
              const x = nf[v ? "from-bottom" : "from-top"].includes(b.key);
              l?.({ event: b, direction: x ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), af = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const {
      __scopeSlider: r,
      onSlideStart: o,
      onSlideMove: i,
      onSlideEnd: s,
      onHomeKeyDown: a,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...d
    } = t, u = Pr(Sr, r);
    return /* @__PURE__ */ p(
      ye.span,
      {
        ...d,
        ref: n,
        onKeyDown: ne(t.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : ef.concat(tf).includes(f.key) && (l(f), f.preventDefault());
        }),
        onPointerDown: ne(t.onPointerDown, (f) => {
          const h = f.target;
          h.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : o(f);
        }),
        onPointerMove: ne(t.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: ne(t.onPointerUp, (f) => {
          const h = f.target;
          h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), s(f));
        })
      }
    );
  }, "SliderImpl")
), Kx = "SliderTrack", jx = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Pr(Kx, r);
    return /* @__PURE__ */ p(
      ye.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...o,
        ref: n
      }
    );
  }, "SliderTrack")
), vc = "SliderRange", Gx = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Pr(vc, r), s = sf(vc, r), a = g.useRef(null), c = me(n, a), l = i.values.length, d = i.values.map(
      (h) => na(h, i.min, i.max)
    ), u = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
    return /* @__PURE__ */ p(
      ye.span,
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
), Wx = "SliderThumb", [Vx, cf] = ta(Wx), Ux = "SliderThumbProvider";
function lf(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, i = Pr(Ux, t), s = $x(t), [a, c] = g.useState(null), l = g.useMemo(
    () => a ? s().findIndex((b) => b.ref.current === a) : -1,
    [s, a]
  ), d = Eo(a), u = a ? !!i.form || !!a.closest("form") : !0, f = i.values[l], h = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0), v = f === void 0 ? 0 : na(f, i.min, i.max);
  g.useEffect(() => {
    if (a)
      return i.thumbs.add(a), () => {
        i.thumbs.delete(a);
      };
  }, [a, i.thumbs]);
  const m = {
    value: f,
    name: h,
    form: i.form,
    isFormControl: u,
    index: l,
    thumb: a,
    onThumbChange: c,
    percent: v,
    size: d
  };
  return /* @__PURE__ */ p(Vx, { scope: t, ...m, children: vf(o) ? o(m) : r });
}
pe(lf, "SliderThumbProvider");
var ui = "SliderThumbTrigger", Yx = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = Pr(ui, r), s = sf(ui, r), { index: a, value: c, percent: l, size: d, onThumbChange: u } = cf(
      ui,
      r
    ), f = me(n, u), h = df(a, i.values.length), v = d?.[s.size], m = v ? hf(v, l, s.direction) : 0;
    return /* @__PURE__ */ p(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${m}px)`
        },
        children: /* @__PURE__ */ p(Bi.ItemSlot, { scope: r, children: /* @__PURE__ */ p(
          ye.span,
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
            onFocus: ne(t.onFocus, () => {
              i.valueIndexToChangeRef.current = a;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), qx = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, name: o, ...i } = t;
    return /* @__PURE__ */ p(
      lf,
      {
        __scopeSlider: r,
        name: o,
        internal_do_not_use_render: ({ index: s, isFormControl: a }) => /* @__PURE__ */ $($e, { children: [
          /* @__PURE__ */ p(
            Yx,
            {
              ...i,
              ref: n,
              __scopeSlider: r
            }
          ),
          a ? /* @__PURE__ */ p(
            Zx,
            {
              __scopeSlider: r
            },
            s
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), Xx = "SliderBubbleInput", Zx = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function({ __scopeSlider: t, ...n }, r) {
    const { value: o, name: i, form: s } = cf(Xx, t), a = g.useRef(null), c = me(a, r), l = Qd(o);
    return g.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
      if (l !== o && h) {
        const v = new Event("input", { bubbles: !0 });
        h.call(d, o), d.dispatchEvent(v);
      }
    }, [l, o]), /* @__PURE__ */ p(
      ye.input,
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
function uf(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
pe(uf, "getNextSortedValues");
function na(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return ea(i, [0, 100]);
}
pe(na, "convertValueToPercentage");
function df(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
pe(df, "getLabel");
function ff(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
pe(ff, "getClosestValueIndex");
function hf(e, t, n) {
  const r = e / 2, i = Ko([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
pe(hf, "getThumbInBoundsOffset");
function pf(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
pe(pf, "getStepsBetweenValues");
function gf(e, t) {
  if (t > 0) {
    const n = pf(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
pe(gf, "hasMinStepsBetweenValues");
function Ko(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
pe(Ko, "linearScale");
function ra(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), i = r.split(".")[1] || "", s = Number(o);
    return Math.max(0, i.length - s);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
pe(ra, "getDecimalCount");
function rr(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
pe(rr, "roundValue");
function mf(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const i = ra(n), s = (e - t) / n, a = Math.round(s), c = rr(a * n + t, i) === rr(e, i);
  let l;
  return c ? l = a + o * r : r > 0 ? l = Math.ceil(s) : l = Math.floor(s), rr(l * n + t, i);
}
pe(mf, "getNextStepValue");
function vf(e) {
  return typeof e == "function";
}
pe(vf, "isFunction");
const oa = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ $(
  rf,
  {
    ref: n,
    className: ue(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p(jx, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ p(Gx, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ p(qx, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
oa.displayName = rf.displayName;
var Jx = Object.defineProperty, Qx = (e, t) => Jx(e, "name", { value: t, configurable: !0 }), eC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Qx(function(t, n) {
    return /* @__PURE__ */ p(
      ye.label,
      {
        ...t,
        ref: n,
        onMouseDown: (r) => {
          r.target.closest("button, input, select, textarea") || (t.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
        }
      }
    );
  }, "Label")
), bf = eC;
const Mn = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bf,
  {
    ref: n,
    className: ue(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Mn.displayName = bf.displayName;
function yf(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((s) => typeof s == "function" ? s(o) : s === o.id || s === o.templateId || o.componentKey === s) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function tC({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = yf(e, t), o = (i) => {
    const s = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p(Mn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ p(
            Yd,
            {
              id: i.id,
              value: String(s),
              onChange: (a) => n(i, t, a.target.value),
              className: "w-full text-sm",
              children: i.options.map((a) => /* @__PURE__ */ p("option", { value: a.value, children: a.label }, a.value))
            }
          )
        ] }, i.id);
      case "toggle": {
        const a = typeof s == "boolean" ? s : s === "true";
        return /* @__PURE__ */ $("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ p(Mn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ p(
            Jd,
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
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ $("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ p(Mn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ p("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: a })
          ] }),
          /* @__PURE__ */ p(
            oa,
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
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p(Mn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ p(
              Le,
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
                children: /* @__PURE__ */ p(jp, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ p("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ p("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: a }) }),
            /* @__PURE__ */ p(
              Le,
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
                children: /* @__PURE__ */ p(bt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const a = String(s);
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p(Mn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ p("div", { className: "flex flex-wrap gap-1.5", children: i.options.map((c) => {
            const l = a === c.value;
            return /* @__PURE__ */ p(
              "button",
              {
                onClick: () => n(i, t, c.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${l ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: c.hex || c.value },
                type: "button",
                title: `${c.label}${c.hex ? ` (${c.hex})` : ""}`,
                children: l && /* @__PURE__ */ p(es, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
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
  return /* @__PURE__ */ p("div", { className: "space-y-3", children: r.map((i) => o(i)) });
}
function nC({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || yf(e, t).length === 0 ? null : /* @__PURE__ */ $(mr, { modal: !1, children: [
    /* @__PURE__ */ p(vr, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ $(
      Le,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ p(cl, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ p(Gn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ p(
      tC,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function rC({
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
  const [h, v] = se(!1), [m, b] = se(!1), [y, x] = se(e), S = le(null);
  ce(() => {
    x(e);
  }, [e]), ce(() => {
    m && setTimeout(() => {
      S.current?.focus(), S.current?.select();
    }, 10);
  }, [m]);
  const C = () => {
    const P = y.trim();
    P && P !== e && a?.(P), b(!1);
  }, N = n || r || o || i || s, I = t || N;
  return m ? /* @__PURE__ */ p(
    "input",
    {
      ref: S,
      value: y,
      onChange: (P) => x(P.target.value),
      onKeyDown: (P) => {
        P.key === "Enter" && C(), P.key === "Escape" && (x(e), b(!1)), P.stopPropagation();
      },
      onBlur: C,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : I ? /* @__PURE__ */ $(mr, { open: h, onOpenChange: v, modal: !1, children: [
    /* @__PURE__ */ p(vr, { asChild: !0, children: /* @__PURE__ */ $(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ p("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ p(al, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ $(Gn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ $(Ue, { onSelect: (P) => {
        P.preventDefault(), v(!1), b(!0);
      }, children: [
        /* @__PURE__ */ p(Wp, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && N && /* @__PURE__ */ p(gn, {}),
      n && /* @__PURE__ */ $(Ue, { onClick: c, children: [
        /* @__PURE__ */ p(Np, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ $(Ue, { onClick: l, children: [
        /* @__PURE__ */ p(Sp, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ p(gn, {}),
      o && /* @__PURE__ */ $(Ue, { onClick: d, children: [
        /* @__PURE__ */ p(bt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ $(Ue, { onClick: u, children: [
        /* @__PURE__ */ p(Fp, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      s && /* @__PURE__ */ p(gn, {}),
      s && /* @__PURE__ */ $(Ue, { onClick: f, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ p(Xp, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ p("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function Jr(e) {
  if (!e || typeof e != "object" || !("binding" in e)) return e;
  const { binding: t, ...n } = e;
  return n;
}
function wf(e, t) {
  return !!en(e?.binding) && t?.mode === "cover";
}
function oC({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
  const r = { active: !1, plan: null, setup: Jr(e), warnings: [] };
  if (!wf(e, t)) return r;
  const o = en(e.binding), s = { ...or.resolveDimensions(e), bleed: or.clampBleed(e.bleed), binding: o }, a = Rc({ ...s, coverPages: n }), c = Wf({
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
function iC(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: s,
    setup: a,
    stateKey: c = Cn,
    resolveNewItem: l,
    notifyError: d,
    pageFilter: u
  } = e, [f, h] = se(t), [v, m] = se(!1), b = le(t);
  ce(() => {
    try {
      const L = JSON.stringify(b.current), F = JSON.stringify(t);
      L !== F && (b.current = t, h(t));
    } catch {
      b.current !== t && (b.current = t, h(t));
    }
  }, [t]);
  const y = Pe(br), x = he((L) => {
    h(L);
    const F = rd(L, c);
    y?.mergePageEditorState && y.mergePageEditorState(L, c), o?.(F), r?.(L, F);
  }, [r, o, c, y]), S = ee(() => {
    const L = /* @__PURE__ */ new Map();
    return f.forEach((F) => {
      const R = F.templateId ?? F.id;
      L.set(R, (L.get(R) ?? 0) + 1), Ke(F) && F.pages?.forEach((M) => {
        const D = M.templateId ?? M.id;
        L.set(D, (L.get(D) ?? 0) + 1);
      });
    }), L;
  }, [f]), C = ee(() => n.filter((L) => {
    if (L.kind === "page") {
      const j = L, H = j.templateId ?? j.id, V = S.get(H) ?? 0, Y = j.repeatable ?? !1, z = j.maxInstances ?? null;
      return !(!Y && V > 0 || z !== null && V >= z);
    }
    const F = L, R = F.templateId ?? F.id, M = S.get(R) ?? 0, D = F.repeatable ?? !1, K = F.maxInstances ?? null;
    return !(!D && M > 0 || D && K !== null && M >= K);
  }), [n, S]), N = ee(() => At(f), [f]), I = he(async (L, F) => {
    const R = (z) => z ? typeof z == "string" ? z : z.mode ?? "optional" : "none", M = (z, W) => {
      if (!z) return [];
      if (Array.isArray(z)) return z;
      try {
        const U = z(W);
        if (!Array.isArray(U))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof U), [];
        const J = U.filter((Z) => typeof Z == "string");
        return J.length !== U.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), J;
      } catch (U) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", U), [];
      }
    }, K = ((z) => {
      if (z.kind === "page") {
        const te = z, re = te.templateId ?? te.id, be = te.componentKey ?? te.id;
        return id(re, be, {
          label: te.label,
          className: te.className,
          repeatable: te.repeatable,
          maxInstances: te.maxInstances,
          integration: te.integration,
          strictPosition: te.strictPosition
        });
      }
      const W = z, U = W.templateId ?? W.id, J = {
        payload: s,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, Z = M(W.pageComponentKeys, J);
      return sd(U, Z, {
        label: W.label,
        repeatable: W.repeatable ?? !1,
        maxInstances: W.maxInstances ?? null,
        integration: W.integration,
        strictPosition: W.strictPosition
      });
    })(L);
    typeof window < "u" && window.$uhuu?.debug;
    let j, H = K;
    if (l)
      H = await l(K);
    else {
      const z = R(K.integration);
      let W = !1;
      if (z !== "none" && typeof window < "u") {
        const U = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        U && (j = await U({ item: K, mode: z }), j == null && z === "required" && (W = !0));
      }
      if (W) return { success: !1 };
    }
    if (H === null) return { success: !1 };
    const V = H ?? K;
    if (j !== void 0 && y?.setIntegrationPayload) {
      const z = V.id;
      y.setIntegrationPayload(z, j);
    }
    return x(((z, W, U) => {
      const J = W.strictPosition;
      if (J === "start") return [W, ...z];
      if (J === "end") return [...z, W];
      const Z = [], te = [], re = [];
      if (z.forEach((oe) => {
        const Ne = oe.strictPosition;
        Ne === "start" ? Z.push(oe) : Ne === "end" ? re.push(oe) : te.push(oe);
      }), !U || U.mode === "end")
        return [...Z, ...te, W, ...re];
      const be = te.findIndex((oe) => oe.id === U.anchorId);
      return be === -1 ? z.find((Xe) => Xe.id === U.anchorId)?.strictPosition === "start" ? [...Z, W, ...te, ...re] : [...Z, ...te, W, ...re] : (U.mode === "before" ? te.splice(be, 0, W) : te.splice(be + 1, 0, W), [...Z, ...te, ...re]);
    })(f, V, F)), { success: !0, insertedId: V.id };
  }, [f, x, l, y]), P = he((L) => {
    const F = (M) => {
      d ? d(M) : alert(M);
    }, R = f.find((M) => M.id === L);
    if (R) {
      if (At(f) <= 1) {
        F("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (y?.removeIntegrationPayload) {
        const D = R.id;
        y.payload?.integrations?.[D] !== void 0 && y.removeIntegrationPayload(D);
      }
      x(f.filter((D) => D.id !== L));
      return;
    }
    for (const M of f)
      if (Ke(M) && M.pages.some((D) => D.id === L)) {
        if (At(f) <= 1) {
          F("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (M.pages.length === 1) {
          if (y?.removeIntegrationPayload) {
            const K = M.id;
            y.payload?.integrations?.[K] !== void 0 && y.removeIntegrationPayload(K);
          }
          x(f.filter((K) => K.id !== M.id));
        } else
          x(f.map((K) => K.id === M.id && Ke(K) ? {
            ...K,
            pages: K.pages.filter((j) => j.id !== L)
          } : K));
        return;
      }
  }, [f, d, x, y]), w = he((L, F) => {
    x(f.map((R) => R.id === L ? Ke(R) ? {
      ...R,
      ...F
    } : { ...R, ...F } : R));
  }, [f, x]), k = he((L) => {
    x(L);
  }, [x]), E = ee(() => {
    const L = Ey(f);
    return u ? _y(L, u) : L;
  }, [f, u]), A = he((L) => {
    const F = [];
    return E.forEach((R) => {
      Ke(R) ? (R.pages ?? []).forEach((D) => {
        F.push(L(D, R));
      }) : F.push(L(R, R));
    }), F;
  }, [E]), T = ee(
    () => Dy(E),
    [E]
  ), B = he((L) => {
    const F = Ay(L, f);
    x(((M) => {
      const D = [], K = [], j = [];
      return M.forEach((H) => {
        const V = H.strictPosition;
        V === "start" ? D.push(H) : V === "end" ? j.push(H) : K.push(H);
      }), [...D, ...K, ...j];
    })(F));
  }, [f, x]), _ = he(() => {
    m(!0);
  }, []), G = ee(() => {
    if (i)
      return zs({ pageComponents: i, payload: s, setup: a });
  }, [i, s, a]);
  return {
    items: f,
    itemsWithPageNum: E,
    totalPageCount: N,
    availableItemsToAdd: C,
    addItem: I,
    removeItem: P,
    updateItemFields: w,
    reorderItems: k,
    addDialogOpen: v,
    setAddDialogOpen: m,
    openAddDialog: _,
    renderItems: A,
    itemsForReorder: T,
    handleReorder: B,
    defaultRenderThumbnail: G
  };
}
function sC({
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
  return he(
    (a, c) => {
      if (!a) return {};
      const l = a.id, d = i.findIndex((b) => b.id === l), u = d !== -1, f = u && d > 0 ? () => {
        const b = [...e], y = b.findIndex((x) => x.id === l);
        y < 1 || ([b[y - 1], b[y]] = [b[y], b[y - 1]], t(b));
      } : void 0, h = u && d < i.length - 1 ? () => {
        const b = [...e], y = b.findIndex((x) => x.id === l);
        y < 0 || y >= b.length - 1 || ([b[y], b[y + 1]] = [b[y + 1], b[y]], t(b));
      } : void 0, v = u && a.repeatable ? () => {
        const y = { ...e.find((C) => C.id === l) ?? a, id: `${l}_copy_${Date.now()}` }, x = [...e], S = x.findIndex((C) => C.id === l);
        x.splice(S < 0 ? x.length : S + 1, 0, y), t(x);
      } : void 0;
      return { onAddPage: c && n.length > 0 ? () => {
        r({ mode: "before", anchorId: c }), o();
      } : void 0, onMoveUp: f, onMoveDown: h, onDuplicate: v };
    },
    [e, i, t, n, r, o]
  );
}
function aC(e = [], t = {}) {
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
function cC({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = se({
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
    for (const v of e) {
      if (!v.hasFlow) continue;
      const m = i[v.flowKey];
      m && (h[v.flowKey] = m);
    }
    return h;
  }, [i, e]), l = he((h, v) => {
    a.has(h) && o((m) => {
      const b = m.layoutKey === n ? m.layouts : {}, y = {};
      let x = !1;
      for (const [N, I] of Object.entries(b))
        a.has(N) ? y[N] = I : x = !0;
      const S = y[h] ?? { flows: {}, signatures: {} }, C = S.signatures?.[v.flowId];
      return m.layoutKey === n && C === v.signature && !x ? m : {
        layoutKey: n,
        layouts: {
          ...y,
          [h]: {
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
    () => aC(e, c),
    [e, c]
  ), u = d.length, f = ee(
    () => d.filter((h) => Ty(h.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: f,
    virtualTotalPageCount: u,
    registerMeasurement: l
  };
}
function bc(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function lC(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function uC({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = ld(e, t, n), s = n && Ke(n) ? n.id : void 0, a = `pages.${t.id}`, c = s ? `pages.${s}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: s,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (l) => Ja(i.instanceId, l)
    },
    paths: {
      integration: (l) => Ja(i.instanceId, l),
      page: (l) => bc(a, l),
      group: (l) => bc(c, l),
      document: (l) => l ?? null
    },
    defaults: {
      imageGalleryPath: lC(
        e,
        i.integration,
        o
      )
    }
  };
}
const yc = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, i = r?.[o], s = typeof e == "string" ? i?.componentKey ?? o : e.componentKey ?? i?.componentKey ?? e.id, a = t ?? o, c = (typeof e == "string" ? void 0 : e.repeatable) ?? i?.repeatable ?? !1, l = (typeof e == "string" ? void 0 : e.maxInstances) ?? i?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? i?.label, u = (typeof e == "string" ? void 0 : e.className) ?? i?.className, f = (typeof e == "string" ? void 0 : e.component) ?? i?.component, h = (typeof e == "string" ? void 0 : e.integration) ?? i?.integration, v = (typeof e == "string" ? void 0 : e.strictPosition) ?? i?.strictPosition, m = (typeof e == "string" ? void 0 : e.hasFlow) ?? i?.hasFlow;
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
    strictPosition: v,
    hasFlow: m,
    ...typeof e == "string" ? {} : e
  } : id(a, s, {
    label: d,
    className: u,
    repeatable: c,
    maxInstances: l,
    integration: h,
    component: f,
    strictPosition: v,
    hasFlow: m,
    ...typeof e == "string" ? {} : e
  });
}, wc = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, s = fC(e.pageComponentKeys, o).map((a) => {
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
  return sd(e.id, s, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, dC = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], fC = (e, t) => {
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
}, hC = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: s
  } = e, a = dC(n), c = /* @__PURE__ */ new Map();
  a.forEach((m) => c.set(m.id, m));
  const l = r.length ? r : Object.keys(o), d = { ...i };
  Object.entries(o).forEach(([m, b]) => {
    b.component && (d[m] = b.component);
  });
  const u = t.map((m) => {
    if (typeof m == "string") {
      const y = c.get(m);
      return y ? wc(y, !0, s, o) : yc(m, void 0, !0, o);
    }
    return m.pageComponentKeys !== void 0 ? wc(m, !0, s, o) : yc(m, void 0, !0, o);
  }), f = a.map((m) => ({
    kind: "group",
    id: m.id,
    // Template ID
    templateId: m.id,
    label: m.label,
    thumbnail: m.thumbnail,
    pageComponentKeys: m.pageComponentKeys,
    // Keep original (function or array)
    repeatable: m.repeatable ?? !1,
    maxInstances: m.maxInstances ?? null,
    integration: m.integration,
    strictPosition: m.strictPosition
  })), v = [
    ...l.filter((m) => o?.[m]?.allowAsSinglePage !== !1).map((m) => {
      const b = o?.[m];
      return {
        kind: "page",
        id: m,
        // Template ID
        templateId: m,
        componentKey: b?.componentKey ?? m,
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
    ...f
  ];
  return { initialItems: u, availableItems: v, pageComponents: d };
};
var pC = Object.defineProperty, Ft = (e, t) => pC(e, "name", { value: t, configurable: !0 }), gC = "AlertDialog", [mC, rS] = /* @__PURE__ */ ft(gC, [
  hd
]), $t = hd(), vC = /* @__PURE__ */ Ft((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ p(pd, { ...r, ...n, modal: !0 });
}, "AlertDialog");
g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = $t(r);
    return /* @__PURE__ */ p(fw, { ...i, ...o, ref: n });
  }, "AlertDialogTrigger")
);
var bC = /* @__PURE__ */ Ft((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ p(vd, { ...r, ...n });
}, "AlertDialogPortal"), yC = g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = $t(r);
    return /* @__PURE__ */ p(As, { ...i, ...o, ref: n });
  }, "AlertDialogOverlay")
), wC = "AlertDialogContent", [xC, CC] = mC(wC), SC = g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, children: o, ...i } = t, s = $t(r), a = g.useRef(null), c = me(n, a), l = g.useRef(null);
    return /* @__PURE__ */ p(xC, { scope: r, cancelRef: l, children: /* @__PURE__ */ p(
      Ms,
      {
        role: "alertdialog",
        ...s,
        ...i,
        ref: c,
        onOpenAutoFocus: ne(i.onOpenAutoFocus, (d) => {
          d.preventDefault(), l.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (d) => d.preventDefault(),
        onInteractOutside: (d) => d.preventDefault(),
        children: o
      }
    ) });
  }, "AlertDialogContent")
), PC = g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = $t(r);
    return /* @__PURE__ */ p(Os, { ...i, ...o, ref: n });
  }, "AlertDialogTitle")
), IC = g.forwardRef(/* @__PURE__ */ Ft(function(t, n) {
  const { __scopeAlertDialog: r, ...o } = t, i = $t(r);
  return /* @__PURE__ */ p(_s, { ...i, ...o, ref: n });
}, "AlertDialogDescription")), NC = g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = $t(r);
    return /* @__PURE__ */ p(Ts, { ...i, ...o, ref: n });
  }, "AlertDialogAction")
), kC = "AlertDialogCancel", RC = g.forwardRef(
  /* @__PURE__ */ Ft(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, { cancelRef: i } = CC(kC, r), s = $t(r), a = me(n, i);
    return /* @__PURE__ */ p(Ts, { ...s, ...o, ref: a });
  }, "AlertDialogCancel")
), EC = vC, DC = bC, xf = yC, Cf = SC, Sf = NC, Pf = RC, If = PC, Nf = IC;
const AC = EC, MC = DC, kf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  xf,
  {
    ref: n,
    className: ue(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
kf.displayName = xf.displayName;
const Rf = g.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = ts();
  return /* @__PURE__ */ $(MC, { container: r || void 0, children: [
    /* @__PURE__ */ p(kf, {}),
    /* @__PURE__ */ p(
      Cf,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: ue(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
Rf.displayName = Cf.displayName;
const Ef = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p("div", { className: ue("flex flex-col gap-2 text-left", e), ...t });
Ef.displayName = "AlertDialogHeader";
const Df = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: ue("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
Df.displayName = "AlertDialogFooter";
const Af = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  If,
  {
    ref: n,
    className: ue("text-base font-semibold text-gray-900", e),
    ...t
  }
));
Af.displayName = If.displayName;
const Mf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Nf,
  {
    ref: n,
    className: ue("text-sm text-gray-600", e),
    ...t
  }
));
Mf.displayName = Nf.displayName;
const Of = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Sf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
Of.displayName = Sf.displayName;
const OC = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Pf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
OC.displayName = Pf.displayName;
const di = "__edit__", fi = "__print__";
function xc({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ $(
    Ue,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ p(es, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ p("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ p("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function Cc({ label: e, value: t }) {
  return /* @__PURE__ */ $(td, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ p("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ $("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ p("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ p(Mp, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function _C({
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
    { value: di, label: "Edit" },
    ...f.length > 0 ? f.map((C) => ({ value: C, label: e[C].label })) : [{ value: fi, label: "Print" }]
  ], v = r ? di : t || f[0] || fi, m = h.find((C) => C.value === v)?.label ?? "Edit", b = (C) => {
    if (C === di) {
      o(!0);
      return;
    }
    o(!1), C !== fi && e && e[C] && n?.(C, e[C]);
  }, y = !!c && c.length > 0, x = c?.find((C) => C.id === l)?.name, S = () => {
    const C = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    C && C.trim() && u?.(C.trim());
  };
  return /* @__PURE__ */ $(mr, { modal: !1, children: [
    /* @__PURE__ */ p(vr, { asChild: !0, children: /* @__PURE__ */ $(
      Le,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ p(Rp, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ p("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ $(Gn, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ $(Xa, { children: [
        /* @__PURE__ */ p(Cc, { label: "Print Preview", value: m }),
        /* @__PURE__ */ p(Oi, { className: "min-w-[180px]", children: h.map((C) => /* @__PURE__ */ p(
          xc,
          {
            checked: v === C.value,
            label: C.label,
            onSelect: () => b(C.value)
          },
          C.value
        )) })
      ] }),
      y && /* @__PURE__ */ $(Xa, { children: [
        /* @__PURE__ */ p(Cc, { label: "Brand Kit", value: x }),
        /* @__PURE__ */ $(Oi, { className: "min-w-[200px]", children: [
          c.map((C) => /* @__PURE__ */ p(
            xc,
            {
              checked: l === C.id,
              label: C.name,
              keepOpen: !0,
              onSelect: () => d?.(C.id)
            },
            C.id
          )),
          u && /* @__PURE__ */ $($e, { children: [
            /* @__PURE__ */ p(gn, {}),
            /* @__PURE__ */ $(
              Ue,
              {
                onSelect: (C) => {
                  C.preventDefault(), S();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ p(bt, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ p("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ $($e, { children: [
        /* @__PURE__ */ p(gn, {}),
        /* @__PURE__ */ p(nd, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ $("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ $("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ p("span", { children: "Opacity" }),
            /* @__PURE__ */ $("span", { children: [
              s,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: "pt-2", children: /* @__PURE__ */ p(
            oa,
            {
              value: [s],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (C) => {
                const N = C[0] ?? s;
                a?.(N);
              }
            }
          ) }),
          /* @__PURE__ */ $("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ p("span", { children: "Hidden" }),
            /* @__PURE__ */ p("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const TC = { width: 210, height: 297 };
function FC(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function $C({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ p("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ $("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ p("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ p(es, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ $("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ $("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ p(Le, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ p(Le, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
const Sc = /* @__PURE__ */ new Set();
function Pc({
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
  reorderDescription: v = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: m = Cn,
  onItemsChange: b,
  onStateChange: y,
  resolveNewItem: x,
  pageFilter: S,
  printConfigs: C,
  defaultZoomMode: N = "fit-page",
  brandKits: I,
  activeBrandKitId: P,
  onSelectBrandKit: w,
  onAddBrandKit: k
}) {
  const E = i ?? TC, { interactive: A, setInteractive: T, enableDevTools: B } = ns(), _ = rs(), [G, L] = se(null), [F, R] = se(null), [M, D] = se(void 0), [K, j] = se(0), [H, V] = se(0), Y = G ?? S, z = ee(() => F ? { ...E, ...F } : E, [E, F]), W = Pe(br), U = W?.payload ?? o, [J, Z] = se(!1), te = !A && wf(z, Y), re = z?.preview ?? "single_page", be = te ? "single_page" : re, oe = ee(() => {
    const O = Jr(z);
    return re === "two_pages" || te ? { ...O, preview: "single_page" } : O;
  }, [re, te, z]), Ne = ee(() => Jr(E), [E]), Xe = ee(() => Es(e), [e]), on = ee(() => s?.length ? s.map((O) => "getValue" in O ? O : W?.setPageOptionValue ? Gy(
    O,
    W.payload,
    W.setPageOptionValue
  ) : ((kt() || B) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [s, W]), [sn, an] = se(null), [ot, Lt] = se({ mode: "end" }), [it, Yn] = se(null), Sn = le(null), {
    items: qn,
    itemsWithPageNum: Ir,
    availableItemsToAdd: gt,
    addItem: Pt,
    removeItem: Bt,
    reorderItems: Nr,
    updateItemFields: Ge,
    addDialogOpen: kr,
    setAddDialogOpen: jo,
    openAddDialog: Xn,
    itemsForReorder: Zn,
    handleReorder: Rr,
    defaultRenderThumbnail: Go
  } = iC({
    initialItems: Xe,
    availableItems: t,
    pageComponents: n,
    payload: U,
    setup: oe,
    stateKey: m,
    onItemsChange: b,
    onStateChange: y,
    resolveNewItem: x,
    notifyError: a
  }), Pn = ee(() => {
    const O = [];
    for (const Q of Ir) {
      const ie = Ke(Q) ? Q.pages ?? [] : [Q];
      for (const de of ie) {
        if (!de?.id) continue;
        const xe = Ke(Q) ? Q : void 0;
        O.push({
          ...de,
          kind: "page",
          id: de.id,
          pageNum: de.pageNum ?? O.length + 1,
          basePageNum: de.pageNum ?? O.length + 1,
          parentGroup: xe,
          flowKey: FC(de, xe)
        });
      }
    }
    return O.sort((Q, ie) => (Q.basePageNum ?? 0) - (ie.basePageNum ?? 0));
  }, [Ir]), Er = ee(() => JSON.stringify({
    format: oe?.format,
    orientation: oe?.orientation,
    width: oe?.width,
    height: oe?.height,
    bleed: oe?.bleed,
    showBleed: oe?.showBleed,
    preview: oe?.preview,
    flowPages: Pn.filter((O) => O.hasFlow).map((O) => O.flowKey).join("|")
  }), [oe, Pn]), Dr = ee(() => At(qn), [qn]), {
    allVirtualPages: Ar,
    renderedVirtualPages: we,
    virtualTotalPageCount: Re,
    registerMeasurement: Be
  } = cC({
    logicalPages: Pn,
    pageFilter: Y,
    layoutKey: Er
  }), st = ee(
    () => new Set(we.map((O) => O.virtualPageId)),
    [we]
  ), Ee = ee(
    () => oC({
      pageFormat: te ? z : Jr(z),
      pageFilter: Y,
      pages: we
    }),
    [te, z, Y, we]
  ), ke = Ee.active ? Ee.plan : null, We = ee(
    () => ke ? { ...oe, binding: Ee.setup.binding } : oe,
    [ke, oe, Ee.setup]
  );
  g.useEffect(() => {
    if (!(!kt() || !Ee.warnings.length))
      for (const O of Ee.warnings)
        Sc.has(O) || (Sc.add(O), console.warn(`[uhuu-components] PageEditor cover spread: ${O}`));
  }, [Ee.warnings]);
  const zt = ee(
    () => Ar.filter((O) => O.hasFlow && O.virtualPageIndex === 0 && // Cover spread panels render in `content` mode without their own measurement pass.
    (d || !!ke || !st.has(O.virtualPageId))),
    [Ar, st, d, ke]
  );
  g.useEffect(() => {
    if (!it) return;
    const O = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${it}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(O);
  }, [it]);
  const De = sC({
    items: qn,
    reorderItems: Nr,
    availableItemsToAdd: gt,
    setPendingInsertPosition: Lt,
    openAddDialog: Xn
  }), at = he(async (O) => {
    const Q = await Pt(O, ot);
    Q.success && (Yn(Q.insertedId), Sn.current && clearTimeout(Sn.current), Sn.current = setTimeout(() => Yn(null), 1200), Lt({ mode: "end" }), O.repeatable && O.integration && an(O));
  }, [Pt, ot]), Ve = he(() => {
    const O = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!O.length) return { mode: "end" };
    const Q = window.innerHeight / 2;
    let ie = null, de = 1 / 0;
    for (const ve of O) {
      const Ce = ve.getBoundingClientRect(), Qe = Math.abs(Ce.top + Ce.height / 2 - Q);
      Qe < de && (de = Qe, ie = ve);
    }
    const xe = ie?.getAttribute("data-page-item-id");
    return xe ? { mode: "after", anchorId: xe } : { mode: "end" };
  }, []), Ze = he(() => {
    Lt(Ve()), Xn();
  }, [Ve, Xn]), cn = g.useCallback(
    (O, Q, ie) => {
      if (!Q) return;
      const de = O.applyPatch?.(ie, Q);
      de && Ge(Q.id, de), O.onChange?.(Q.id, ie, {
        item: Q,
        updateItem: (xe) => Ge(Q.id, xe)
      });
    },
    [Ge]
  ), ln = (O) => /* @__PURE__ */ $("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ p("span", { children: "Page" }),
    /* @__PURE__ */ $("span", { children: [
      O.pageNo,
      " / ",
      O.total
    ] })
  ] }), ct = (O, Q, ie) => l ? l({ pageNo: O, total: Re, pageId: Q, parent: ie }) : ln({ pageNo: O, total: Re }), Je = (O, Q = {}) => {
    const ie = O.parentGroup;
    if (d && Q.renderVisible !== !1 && Q.renderMode !== "content")
      return d({ page: O, parent: ie });
    const de = O.componentKey ?? O.id, xe = B && c ? c(O) : null, ve = B && c ? g.isValidElement(xe) ? g.cloneElement(xe, {
      opacity: H
    }) : xe : null, Ce = O.templateId ?? de, Qe = n[de], un = W?.getPagePayload ? W.getPagePayload(O) : fo(U, { id: O.id, templateId: Ce, componentKey: de }), dn = ud(
      U,
      O,
      ie
    ), Nn = uC({
      payload: U,
      page: O,
      parentGroup: ie,
      pagePayload: un
    });
    return /* @__PURE__ */ p(
      Cx,
      {
        pageId: O.id,
        templateId: Ce,
        pageNo: O.pageNum,
        measurementPageNo: O.basePageNum,
        component: Qe,
        payload: U,
        pagePayload: un,
        integration: dn,
        page: O,
        parentGroup: ie,
        componentKey: de,
        setup: We,
        reference: ve,
        overlay: ({ pageNo: Ht }) => ct(Ht, O.id, ie),
        className: O.className,
        dataBinding: Nn,
        totalPages: Re,
        measurementTotalPages: Dr,
        flowPageIndex: O.virtualPageIndex,
        flowChunksByFlowId: O.flowChunksByFlowId,
        measureFlow: Q.measureFlow ?? (!!O.hasFlow && O.virtualPageIndex === 0),
        flowMeasurementKey: O.flowKey,
        flowMeasurementVersion: Er,
        onFlowMeasurement: O.hasFlow ? Be : void 0,
        renderVisible: Q.renderVisible ?? !0,
        renderMode: Q.renderMode,
        spread: Q.spread
      },
      `${Q.renderVisible === !1 ? "measure-only" : "page"}-${O.virtualPageId}`
    );
  }, In = (O) => {
    const Q = O.componentKey ?? O.templateId ?? O.id;
    return [Q ? `uhuu-page--${Q}` : "", O.className].filter(Boolean).join(" ");
  }, _f = (O) => {
    if (!ke) return null;
    const { binding: Q, page: ie } = ke, [de, xe] = O.panels, ve = de.page, Ce = xe.page, Qe = (dn) => ({
      sheet: O.sheet,
      side: dn,
      spine: Q.spine,
      glue: Q.glue,
      bleed: ie.bleed
    }), un = `Cover sheet ${O.index + 1} · ${O.sheet} (pages ${ve.pageNum} + ${Ce.pageNum})`;
    return /* @__PURE__ */ p("div", { "data-page-item-id": Ce.parentGroup?.id ?? Ce.id, children: /* @__PURE__ */ p(
      Wr,
      {
        title: un,
        controls: /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
          /* @__PURE__ */ $("span", { className: "page-number", children: [
            ve.pageNum,
            " + ",
            Ce.pageNum
          ] }),
          /* @__PURE__ */ p("span", { className: "text-xs text-gray-500", children: un })
        ] }),
        children: /* @__PURE__ */ p(eo, { setup: We, children: /* @__PURE__ */ p(
          Kc,
          {
            sheet: O.sheet,
            pageNo: [ve.pageNum, Ce.pageNum],
            left: Je(ve, { renderMode: "content", spread: Qe("left") }),
            right: Je(Ce, { renderMode: "content", spread: Qe("right") }),
            spine: r && O.sheet === "outer" ? /* @__PURE__ */ p(
              r,
              {
                payload: U,
                sheet: "outer",
                spine: Q.spine,
                glue: Q.glue,
                bleed: ie.bleed,
                height: ie.height,
                totalPages: Re,
                pages: { left: ve, right: Ce }
              }
            ) : void 0,
            overlay: ({ pageNo: dn, side: Nn }) => {
              const Ht = Nn === "left" ? ve : Ce;
              return ct(dn, Ht.id, Ht.parentGroup);
            },
            leftClassName: In(ve),
            rightClassName: In(Ce),
            leftPageKey: ve.componentKey ?? ve.templateId ?? ve.id,
            rightPageKey: Ce.componentKey ?? Ce.templateId ?? Ce.id
          }
        ) })
      }
    ) }, `cover-sheet-${O.sheet}`);
  }, Wo = (O, Q, ie) => {
    const de = !!Q && Ke(Q), xe = de && Q.pages[0]?.id === O.id;
    if (O.virtualPageIndex > 0)
      return /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ p("span", { className: "page-number", children: O.pageNum }),
        /* @__PURE__ */ $("span", { className: "text-xs text-gray-500", children: [
          O.label || O.componentKey || O.id,
          " continued"
        ] })
      ] });
    if (de && !xe)
      return /* @__PURE__ */ p("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ p("span", { className: "page-number", children: O.pageNum }),
        O.label && /* @__PURE__ */ p("span", { className: "text-xs text-gray-500", children: O.label }),
        /* @__PURE__ */ p("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const ve = de ? Q : O, Ce = de ? Q.label || Q.id : O.label || `Page ${O.pageNum}`;
    return /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ p("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: O.pageNum }),
      /* @__PURE__ */ p(
        rC,
        {
          name: Ce,
          canRename: !0,
          canMoveUp: !!ie?.onMoveUp,
          canMoveDown: !!ie?.onMoveDown,
          canAddPage: !!ie?.onAddPage,
          canDuplicate: !!ie?.onDuplicate,
          canDelete: Dr > 1,
          onRename: (Qe) => Ge(ve.id, { label: Qe || void 0 }),
          onMoveUp: ie?.onMoveUp,
          onMoveDown: ie?.onMoveDown,
          onAddPage: ie?.onAddPage,
          onDuplicate: ie?.onDuplicate,
          onDelete: () => Bt(ve.id)
        }
      ),
      /* @__PURE__ */ p("span", { className: "pl-1", children: on.length > 0 && /* @__PURE__ */ p(
        nC,
        {
          pageOptions: on,
          targetItem: ve,
          onChange: cn,
          title: de ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, Tf = ee(() => {
    if (be !== "two_pages") return [];
    const O = we;
    if (!O.length) return [];
    const Q = [{ left: void 0, right: O[0], layout: "right" }];
    for (let ie = 1; ie < O.length; ie += 2) {
      const de = O[ie], xe = O[ie + 1];
      if (xe)
        Q.push({ left: de, right: xe, layout: "spread" });
      else {
        const ve = de.pageNum % 2 === 0;
        Q.push({
          left: ve ? de : void 0,
          right: ve ? void 0 : de,
          layout: ve ? "left" : "right"
        });
      }
    }
    return Q;
  }, [be, we]), Ff = /* @__PURE__ */ $("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ $(Xs, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      Re,
      " ",
      Re === 1 ? "Page" : "Pages"
    ] }),
    B && /* @__PURE__ */ p(
      _C,
      {
        modes: C,
        selectedMode: M,
        onModeChange: (O, Q) => {
          D(O), L(Q.filter ?? null), R(Q.pageFormat ?? null), j((ie) => ie + 1);
        },
        interactive: A,
        onInteractiveChange: (O) => {
          T(O), O && R(null);
        },
        hasReferenceRenderer: !!c,
        referenceOpacity: H,
        onReferenceOpacityChange: V,
        brandKits: I,
        activeBrandKitId: P,
        onSelectBrandKit: w,
        onAddBrandKit: k
      }
    ),
    A && /* @__PURE__ */ $($e, { children: [
      gt.length > 0 && /* @__PURE__ */ $(
        Le,
        {
          variant: "ghost",
          size: "sm",
          onClick: Ze,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ p(bt, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ $(
        Le,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => Z(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ p(_p, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ $($e, { children: [
    zt.map((O) => Je(O, {
      renderVisible: !1,
      measureFlow: !0
    })),
    B && !A && /* @__PURE__ */ $(
      Le,
      {
        onClick: () => {
          T(!0), R(null);
        },
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ p(ul, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ p(
      cw,
      {
        defaultZoom: 80,
        defaultZoomMode: N,
        minZoom: 25,
        maxZoom: 200,
        menuItems: u ?? Ff,
        onAddPage: Ze,
        preview: be,
        children: ke ? ke.sheets.map(_f) : be === "two_pages" ? Tf.map((O, Q) => {
          const ie = O.left ?? O.right, de = O.right ?? O.left, xe = ie?.parentGroup?.id ?? ie?.id ?? null, ve = de?.parentGroup?.id ?? de?.id ?? null, Ce = O.left?.parentGroup?.id ?? O.left?.id, Qe = O.right?.parentGroup?.id ?? O.right?.id, un = Ce === it, dn = Qe === it, Nn = (Ht, $f) => De(Ht ? Ht.parentGroup ?? Ht : void 0, $f);
          return /* @__PURE__ */ $(iw, { layout: O.layout, pageItemId: ve ?? void 0, children: [
            O.left && /* @__PURE__ */ p(
              "div",
              {
                "data-page-item-id": O.left.virtualPageIndex === 0 ? Ce : void 0,
                className: un ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ p(
                  Wr,
                  {
                    title: `Sheet ${O.left.pageNum}`,
                    controls: Wo(O.left, O.left.parentGroup, Nn(O.left, xe)),
                    origin: O.left.pageNum % 2 === 0 ? "right" : "left",
                    children: Je(O.left)
                  },
                  O.left.virtualPageId
                )
              }
            ),
            O.right && /* @__PURE__ */ p(
              "div",
              {
                "data-page-item-id": O.right.virtualPageIndex === 0 ? Qe : void 0,
                className: dn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ p(
                  Wr,
                  {
                    title: `Sheet ${O.right.pageNum}`,
                    controls: Wo(O.right, O.right.parentGroup, Nn(O.right, ve)),
                    origin: O.right.pageNum % 2 === 0 ? "right" : "left",
                    children: Je(O.right)
                  },
                  O.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Q}`);
        }) : we.map((O) => {
          const Q = O.parentGroup ?? O, ie = O.parentGroup?.id ?? O.id, de = De(Q, ie), xe = O.parentGroup?.id ?? O.id, ve = it === xe;
          return /* @__PURE__ */ p(
            "div",
            {
              "data-page-item-id": O.virtualPageIndex === 0 ? xe : void 0,
              className: ve ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ p(
                Wr,
                {
                  title: `Sheet ${O.pageNum}`,
                  controls: Wo(O, O.parentGroup, de),
                  children: Je(O)
                }
              )
            },
            O.virtualPageId
          );
        })
      },
      `dev-mode-${K}-${M ?? "default"}`
    ),
    A && !_ && /* @__PURE__ */ $($e, { children: [
      /* @__PURE__ */ p(
        Cw,
        {
          open: kr,
          onOpenChange: jo,
          availableItems: gt,
          onSelectItem: at,
          pageComponents: n,
          payload: U,
          setup: Ne,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ p(
        xx,
        {
          open: J,
          onOpenChange: Z,
          pages: Zn,
          onReorder: (O) => {
            Rr(O), Z(!1);
          },
          onRemove: (O) => Bt(O.id),
          pageComponents: n,
          payload: U,
          setup: Ne,
          renderThumbnail: Go,
          title: h,
          description: v,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ p(
      $C,
      {
        label: sn ? sn.label ?? sn.id : null,
        onDone: () => an(null),
        onAddAnother: () => {
          const O = sn;
          an(null), O && at(O);
        }
      }
    )
  ] });
}
function LC(e) {
  const { templateConfig: t, ...n } = e;
  return Pe(br) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ p(Pc, { ...n }) : /* @__PURE__ */ p(
    dd,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ p(Pc, { ...n })
    }
  );
}
function BC(e) {
  const n = Pe(br)?.payload ?? e.payload, r = g.useMemo(
    () => hC({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), o = e.templateConfig?.spine?.component, [i, s] = g.useState({
    open: !1,
    message: ""
  }), a = g.useCallback((d) => {
    s({ open: !0, message: d });
  }, []), c = g.useMemo(
    () => My(n),
    [n]
  ), l = g.useMemo(() => {
    if (!c?.items)
      return r.initialItems;
    const d = e.templateConfig.groups ?? {}, u = Array.isArray(d) ? d : Object.entries(d).map(([N, I]) => ({ id: N, ...I })), f = new Map(u.map((N) => [N.id, N])), h = e.templateConfig.pages ?? {}, v = (N) => {
      const I = N?.componentKey ?? N?.templateId ?? N?.id;
      return !(h[I] ?? h[N?.templateId] ?? h[N?.id])?.hasFlow || N?.hasFlow ? N : { ...N, hasFlow: !0 };
    }, m = c.items.map((N) => {
      if (N.kind !== "group") return v(N);
      const I = N.templateId ?? N.id, P = f.get(I), w = P?.strictPosition !== void 0 && !N.strictPosition ? { ...N, strictPosition: P.strictPosition } : N, k = {
        ...w,
        pages: (w.pages ?? []).map(v)
      };
      if (!P || typeof P.pageComponentKeys != "function") return k;
      try {
        const E = P.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(E) ? E.length === 0 ? {
          ...k,
          pages: []
        } : {
          ...k,
          pages: E.map((A, T) => {
            const B = h[A], _ = B?.dataKey;
            return {
              id: `${k.id}__${_ ?? A}__${T}`,
              componentKey: A,
              templateId: A,
              ..._ ? { dataKey: _ } : {},
              ...B?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${w.id} must return an array, got:`, typeof E), w);
      } catch (E) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${k.id}:`, E), k;
      }
    }), b = new Set(r.initialItems.map((N) => N.id)), y = m.filter((N) => b.has(N.id)), x = At(y), S = At(r.initialItems);
    if (!Array.from(b).some(
      (N) => !y.some((I) => I.id === N)
    ) && x !== S) {
      const N = m.filter((E) => {
        if (E.kind !== "group") return !b.has(E.id);
        const A = E.templateId ?? E.id;
        return E.id !== A && !b.has(E.id);
      });
      if (N.length === 0) return r.initialItems;
      const I = [...r.initialItems, ...N], P = I.filter((E) => E.strictPosition === "start"), w = I.filter((E) => E.strictPosition === "end"), k = I.filter((E) => !E.strictPosition);
      return [...P, ...k, ...w];
    }
    return m;
  }, [c?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ p(
      LC,
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
    /* @__PURE__ */ p(
      AC,
      {
        open: i.open,
        onOpenChange: (d) => {
          d || s({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ $(Rf, { children: [
          /* @__PURE__ */ $(Ef, { children: [
            /* @__PURE__ */ p(Af, { children: "Cannot remove item" }),
            /* @__PURE__ */ p(Mf, { children: i.message })
          ] }),
          /* @__PURE__ */ p(Df, { children: /* @__PURE__ */ p(Of, { onClick: () => s({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function zC(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Ic(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Ic(t, e);
  }
}
function Ic(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function HC(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const s = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = zC(s, t);
    }
  return r;
}
function KC(e, t, n) {
  return e(t, n);
}
function jC(e, t, n) {
  return typeof e == "function" ? KC(e, t, n) : HC(e, t);
}
function GC(e, t, n) {
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
function WC(e, t, n = {}, r, o = null) {
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
function VC(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, s = g.useMemo(() => jC(r, n, t?.payload), [r, n, t?.payload]), a = g.useMemo(() => GC(t, n, o), [t, n, o]), c = g.useCallback(
    (d, u = {}, f) => WC(
      t,
      d,
      u,
      f,
      a
    ),
    [t, a]
  ), l = g.useCallback(
    (d, u = {}, f) => {
      const h = c(d, u, f);
      if (!h) return {};
      const v = Bn({ dialog: h }, { page: { paginationType: "static" } });
      if (v.onClick) {
        const m = v.onClick;
        v.onClick = (b) => {
          b.stopPropagation(), m(b);
        };
      }
      return v;
    },
    [c]
  );
  return g.useMemo(
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
const oS = {
  Pagination: eo,
  Sheet: ir,
  FlowArea: Tc,
  FlowPage: Fc,
  Flow: Bc,
  FlowColumns: oh,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: ji,
  planFlowColumnChunks: Mc,
  // Optional cost counters for the two planners above. Diagnostic only.
  createFlowPlanMetrics: Uf,
  // The DOM reads FlowArea measures with. Hosts that run their own Flow canvas
  // must use these rather than re-deriving them, or their page boundaries can
  // drift from the delivered document by a rounding step.
  flowMeasure: Zf,
  FlowDocument: vh,
  markdownToFlowItems: Ph,
  htmlToFlowItems: Hc,
  // Perfect-binding cover geometry (outer/inner sheet, spine, glue zones). Pure,
  // DOM-free; used by CoverSpread/PageEditor and by hosts that run their own
  // canvas. See docs/printer-cover-spine-support.md.
  planCoverSpread: Rc,
  resolveSheetSize: Ki,
  // One physical cover sheet (outer/inner) for the Static-only template path.
  CoverSpread: Kc
}, iS = {
  TemplateDataProvider: dd,
  PageEditor: BC,
  InteractiveModeProvider: lg,
  useInteractive: ns,
  useIntegrationAdapter: VC
};
export {
  ih as Editable,
  iS as EditorShell,
  eS as ImageBlock,
  oS as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
