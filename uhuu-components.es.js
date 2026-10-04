(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db);--uhuu-sheet-width: calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));--uhuu-sheet-height: calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));--uhuu-spine-width: 0mm;--uhuu-glue-width: 0mm;--uhuu-paper-color: #ffffff}@page{size:var(--uhuu-sheet-width) var(--uhuu-sheet-height);margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[3mm\\]{margin-bottom:3mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[148mm\\]{width:148mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#415662\\]{background-color:#415662}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.uhuu-page-sheet.uhuu-cover-spread{width:var(--uhuu-sheet-width);height:var(--uhuu-sheet-height);min-width:var(--uhuu-sheet-width);flex-direction:row;align-items:stretch;padding:0;display:flex}.uhuu-spread-panel{width:calc(var(--uhuu-page-width) + var(--uhuu-page-bleed));flex:none;height:100%;position:relative;overflow:hidden}.uhuu-cover-spread .uhuu-page-sheet--panel{box-shadow:none;outline:none;margin:0}.uhuu-spread-panel[data-side=right] .uhuu-page-sheet--panel{margin-left:calc(-1 * var(--uhuu-page-bleed))}.uhuu-spread-spine{width:var(--uhuu-spine-width);flex:none;height:100%;position:relative;overflow:hidden}.uhuu-spread-spine[data-blank=true]{background-color:var(--uhuu-paper-color)}.uhuu-glue-zone{width:var(--uhuu-glue-width);background-color:var(--uhuu-paper-color);pointer-events:none;z-index:2;position:absolute;top:0;bottom:0}.uhuu-glue-zone[data-side=left]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) - var(--uhuu-glue-width))}.uhuu-glue-zone[data-side=right]{left:calc(var(--uhuu-page-bleed) + var(--uhuu-page-width) + var(--uhuu-spine-width))}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.uhuu-spread-guide{pointer-events:none;outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;background-image:repeating-linear-gradient(45deg,#0000001f 0 1px,#0000 1px 5px);outline-style:dashed;position:absolute;inset:0}.uhuu-spread-guide:after{content:attr(data-label);white-space:nowrap;letter-spacing:.04em;color:#6b7280;background:#ffffffd9;border-radius:2px;padding:1px 4px;font:500 7pt/1 ui-sans-serif,system-ui,sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)rotate(-90deg)}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}[data-uhuu-interactive] :where([data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where([data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where([data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where([data-uhuu][data-uhuu-type=markdown]:empty){background-color:#ff44cc14;min-width:3em;min-height:1lh}[data-uhuu-interactive] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-portal] :where(span[data-uhuu].uhuu-text-empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=text]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=textarea]:empty),[data-uhuu-interactive] :where(span[data-uhuu][data-uhuu-type=markdown]:empty),[data-uhuu-portal] :where(span[data-uhuu][data-uhuu-type=markdown]:empty){vertical-align:top;display:inline-block}}}@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.left-\\[191\\.5mm\\]{left:191.5mm}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[3mm\\]{margin-bottom:3mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[15mm\\]{width:15mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[148mm\\]{width:148mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-black{background-color:var(--color-black)!important}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#4a5157\\]{background-color:#4a5157}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#415662\\]{background-color:#415662}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-1\\/2,[data-uhuu-portal] .left-1\\/2{left:50%}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .left-\\[191\\.5mm\\],[data-uhuu-portal] .left-\\[191\\.5mm\\]{left:191.5mm}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[3mm\\],[data-uhuu-portal] .mb-\\[3mm\\]{margin-bottom:3mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[-7\\.5mm\\],[data-uhuu-portal] .ml-\\[-7\\.5mm\\]{margin-left:-7.5mm}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[15mm\\],[data-uhuu-portal] .w-\\[15mm\\]{width:15mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[148mm\\],[data-uhuu-portal] .w-\\[148mm\\]{width:148mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-baseline,[data-uhuu-portal] .items-baseline{align-items:baseline}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-black,[data-uhuu-portal] .\\!bg-black{background-color:var(--color-black)!important}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#4a5157\\],[data-uhuu-portal] .bg-\\[\\#4a5157\\]{background-color:#4a5157}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#415662\\],[data-uhuu-portal] .bg-\\[\\#415662\\]{background-color:#415662}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:-moz-max-content;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:-moz-max-content;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as p, jsxs as L, Fragment as Be } from "react/jsx-runtime";
import * as g from "react";
import Ne, { createContext as Ft, useEffect as ce, forwardRef as mr, useContext as Se, useRef as le, createElement as yi, useState as se, useLayoutEffect as $c, useMemo as ee, useCallback as he, memo as ih, useReducer as sh, cloneElement as ah } from "react";
import * as Ui from "react-dom";
import { flushSync as ch, unstable_batchedUpdates as Tr, createPortal as lh } from "react-dom";
class no {
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
    no.handlePageBreakStyles(), no.handleUhuuDialogs();
  }
}
class fa {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
const uh = 400;
function vn(e) {
  const t = typeof e == "string" && e.trim() !== "" ? Number(e) : e;
  return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function Le(e) {
  return Math.round(e * 1e4) / 1e4;
}
function rn(e) {
  if (!e || typeof e != "object" || e.type === "saddle") return null;
  const t = vn(e.spine);
  if (t === null || t <= 0) return null;
  const n = vn(e.glue);
  return {
    type: "perfect",
    spine: Le(t),
    glue: n === null || n < 0 ? 0 : Le(n)
  };
}
function Yi(e = {}) {
  const t = vn(e.width), n = vn(e.height);
  if (t === null || n === null || t <= 0 || n <= 0) return null;
  const r = vn(e.bleed);
  return {
    width: Le(t),
    height: Le(n),
    bleed: r === null ? 0 : Le(Math.min(Math.max(r, 0), uh))
  };
}
function qi(e = {}) {
  const t = Yi(e);
  if (!t) return null;
  const n = rn(e.binding), r = n ? t.width * 2 + n.spine : t.width, o = t.height;
  return {
    trimWidth: Le(r),
    trimHeight: Le(o),
    width: Le(r + t.bleed * 2),
    height: Le(o + t.bleed * 2),
    spread: !!n
  };
}
function Lc(e) {
  return Array.isArray(e) ? e.length === 2 ? [{ sheet: "outer", left: e[1], right: e[0] }] : e.length === 4 ? [
    { sheet: "outer", left: e[3], right: e[0] },
    { sheet: "inner", left: e[1], right: e[2] }
  ] : null : null;
}
function Bc(e = {}) {
  const t = Yi(e), n = rn(e.binding), r = Lc(e.coverPages);
  if (!t || !n || !r) return null;
  const { width: o, height: i, bleed: s } = t, { spine: a, glue: c } = n, l = Le(i + s * 2), d = Le(o * 2 + a), u = Le(d + s * 2), f = Le(s + o), h = Le(s + o + a), v = (y) => ({
    side: "left",
    page: y,
    trim: { x: s, y: s, width: o, height: i },
    // Outer bleed on top/left/bottom only; the panel is cut at the spine.
    bleedBox: { x: 0, y: 0, width: Le(s + o), height: l }
  }), m = (y) => ({
    side: "right",
    page: y,
    trim: { x: h, y: s, width: o, height: i },
    bleedBox: { x: h, y: 0, width: Le(o + s), height: l }
  }), b = r.map((y, x) => {
    const S = y.sheet === "inner", C = S && c > 0 ? [
      { side: "left", x: Le(f - c), y: 0, width: c, height: l },
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
function dh(e = {}) {
  const t = qi(e);
  if (!t) return null;
  const n = rn(e.binding);
  return {
    "--uhuu-sheet-width": `${t.width}mm`,
    "--uhuu-sheet-height": `${t.height}mm`,
    "--uhuu-spine-width": `${n ? n.spine : 0}mm`,
    "--uhuu-glue-width": `${n ? n.glue : 0}mm`
  };
}
function fh(e = {}) {
  const t = rn(e.binding);
  if (!t) return [];
  const n = [], r = Yi(e), o = vn(e.coverPageCount);
  return r || n.push("binding.spine is set but the page format has no valid width/height; cover spread skipped."), o !== null && o !== 1 && o !== 2 && n.push(
    `binding.spine is set but pageFilter.coverPageCount is ${o}; a cover spread needs 1 (outer sheet only) or 2 (outer + inner). Rendering plain cover pages.`
  ), Array.isArray(e.coverPages) && !Lc(e.coverPages) && n.push(
    `binding.spine is set but the cover filter produced ${e.coverPages.length} page(s); a cover spread needs 2 or 4. Rendering plain cover pages.`
  ), r && t.glue > 0 && t.glue >= r.width / 2 && n.push(
    `binding.glue (${t.glue}mm) is at least half the page width (${r.width}mm); the glue mask would hide most of the inside covers.`
  ), r && r.bleed > 0 && t.spine < r.bleed && n.push(
    `binding.spine (${t.spine}mm) is narrower than the bleed (${r.bleed}mm); panels are cut at the spine, so artwork will not run across it unless the spine component paints it.`
  ), e.preview === "two_pages" && n.push('preview "two_pages" is ignored while a cover spread is active; each sheet is already a spread.'), vn(e.flowCoverPages) > 0 && n.push("a cover page has hasFlow: true; only its first chunk is placed on the cover sheet."), n;
}
class ar {
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
    }, i = dh({ ...n, bleed: r, binding: t.binding });
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
      binding: rn(u),
      // Physical sheet incl. bleed — the `@page` size.
      sheet: qi({ ...f, bleed: this.clampBleed(i), binding: u })
    } };
  }
}
const $t = Ft(null), hh = ({ config: e, children: t }) => /* @__PURE__ */ p($t.Provider, { value: e, children: t }), ro = ({ children: e, className: t, setup: n }) => {
  const r = ar.pageParams("static", n);
  ce(() => {
    r?.page?.compatibility && no.handle();
    const i = fa.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && fa.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(hh, { config: r, children: /* @__PURE__ */ p("div", { className: o, children: e }) });
}, cr = mr(({
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
        l && /* @__PURE__ */ p("div", { className: "uhuu-bleed-area" })
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
function nr(e) {
  return typeof e == "string" && e ? e : null;
}
function zc(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function Hc({
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
  const c = Number.isInteger(a) ? a : t.indexOf(e), l = nr(n[e]), d = c > 0 ? t[c - 1] : null, u = d === null ? null : nr(n[d]), f = c > 0 ? t[c - 1] : s ?? (e > 0 ? e - 1 : null), h = f !== null ? nr(n[f]) : null, v = !!(l && h !== l), m = !!(l && u !== l);
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
function ph() {
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
function Xi({
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
  const f = l?.indexes, h = l?.offset ?? 0, v = f ? Math.max(0, f.length - h) : e.length, m = f ? (R) => f[h + R] : (R) => R, b = qt(r) || Number.POSITIVE_INFINITY, y = [{ indexes: [], keys: [] }];
  let x = 0;
  const S = () => y[y.length - 1], C = () => {
    const R = S().indexes;
    return R.length ? R[R.length - 1] : null;
  }, N = () => S().indexes.length > 0 || !!S().unplaceable, I = (R) => nr(o[m(R)]), P = (R) => qt(i[R] ?? 0), w = (R) => s[R] !== !1, k = (R, M) => {
    const A = I(R);
    return A ? M == null ? (R > 0 ? I(R - 1) : nr(a)) !== A || w(A) : I(M) !== A : !1;
  }, E = (R, M) => {
    const A = I(R);
    return qt(e[m(R)]) + (A && k(R, M) ? P(A) : 0);
  }, D = (R) => {
    const M = n[m(R)] ?? {};
    return M.avoidBreakInside && M.groupKey ? M.groupKey : null;
  }, _ = (R, M, A) => {
    let j = 0, K = A;
    for (let H = R; H < v && D(H) === M; H += 1)
      u && (u.scannedItems += 1), j += E(H, K), K = H;
    return j;
  }, B = (R, M, { currentHeight: A, ownHeight: j, stopEarly: K } = {}) => {
    let H = 0, V = R;
    for (let Y = 1; Y <= M; Y += 1) {
      const z = R + Y;
      if (z >= v || (u && (u.scannedItems += 1), H += E(z, V), K && A + (j + H) > b)) break;
      V = z;
    }
    return H;
  }, T = () => {
    N() && (y.push({ indexes: [], keys: [] }), x = 0);
  }, W = (R, M, A) => {
    const j = t[m(R)] ?? String(m(R)), K = I(R) ?? void 0, H = K && k(R, null) ? P(K) : 0, V = {
      index: R,
      key: j,
      height: M,
      headerHeight: H,
      requiredHeight: A,
      availableHeight: b,
      groupKey: K,
      reason: H > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    S().unplaceable = V, c?.(V), y.push({ indexes: [], keys: [] }), x = 0;
  };
  for (let R = 0; R < v && !(d && y.length > d); R += 1) {
    u && (u.scannedItems += 1);
    const M = n[m(R)] ?? {}, A = qt(e[m(R)]), j = t[m(R)] ?? String(m(R));
    M.breakBefore && T();
    const K = D(R), H = R > 0 ? D(R - 1) : null;
    K && K !== H && N() && x + _(R, K, C()) > b && T();
    let V = C(), Y = E(R, V);
    if (N() && Y > b - x && (T(), V = null, Y = E(R, V)), Y > b) {
      W(R, A, Y);
      continue;
    }
    const z = N(), G = z ? B(R, zc(M.keepWithNext), {
      currentHeight: x,
      ownHeight: Y,
      stopEarly: Number.isFinite(b)
    }) : 0, U = Y + G;
    if (z && x + U > b && (T(), V = null, Y = E(R, V), Y > b)) {
      W(R, A, Y);
      continue;
    }
    S().indexes.push(R), S().keys.push(j), x += Y, M.breakAfter && R < v - 1 && T();
  }
  const F = y.filter((R) => R.indexes.length > 0 || !!R.unplaceable);
  if (!F.length)
    return u && !d && (u.pages = 1), [{ indexes: [], keys: [] }];
  const $ = d ? F.slice(0, d) : F;
  return u && !d && (u.pages = $.length), $.map((R) => {
    if (!R.indexes.length) return R;
    const M = [];
    for (let A = 0; A < R.indexes.length; A += 1) {
      const j = R.indexes[A], K = I(j), H = A > 0 ? R.indexes[A - 1] : null;
      if (!K || !k(j, H)) continue;
      const V = j > 0 ? I(j - 1) : null;
      M.push({
        groupKey: K,
        itemIndex: j,
        isContinuation: V === K
      });
    }
    return M.length ? { ...R, groupHeaders: M } : R;
  });
}
function gh(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (i, s) => i + qt(t[s]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (i, s) => i + qt(n[s.groupKey]),
    0
  );
  return r + o;
}
function mh(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function vh(e, t, n, r, o, i) {
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
function Fr(e, t, n, r, o, i, s) {
  if (n >= t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const a = mh(e, o, i);
  e.metrics && (e.metrics.chunkerCalls += 1);
  const l = Xi({
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
  })[0] ?? { indexes: [], keys: [] }, d = vh(
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
    height: gh(
      d,
      e.heights ?? [],
      a.headerGroupHeights ?? {}
    )
  };
}
function jc({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function ha(e, t, n, r, o) {
  const i = qt(r.chunk.unplaceable?.requiredHeight);
  if (i > 0 && i <= o) return "move";
  const s = t[n];
  if (s === void 0) return "no";
  const a = e.metas?.[s] ?? {};
  return zc(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey) ? "compare" : "no";
}
function Gt(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function Kc({
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
  jc({ nodes: e, itemCount: t.length });
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
  }, v = [{ indexes: [], keys: [], layout: [] }];
  let m = 0;
  const b = () => v[v.length - 1], y = () => {
    Gt(b()) && (v.push({ indexes: [], keys: [], layout: [] }), m = 0);
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
        f - m <= 0 && Gt(b()) && y();
        const E = P[k];
        r[E]?.breakBefore && Gt(b()) && y();
        const D = k > 0 ? P[k - 1] : void 0;
        let _ = Fr(
          h,
          P,
          k,
          f - m,
          void 0,
          void 0,
          D
        );
        if (Gt(b())) {
          const W = ha(
            h,
            P,
            k,
            _,
            f
          );
          if (W !== "no") {
            u && (u.freshPageAttempts += 1);
            const F = Fr(
              h,
              P,
              k,
              f,
              void 0,
              void 0,
              D
            );
            (W === "move" || F.consumed > _.consumed) && (y(), _ = F);
          }
        }
        b().layout.push({ kind: "items", chunk: _.chunk }), x(_.chunk), m += _.height, k += _.consumed, _.consumed === 0 && (k += 1);
        const B = _.chunk.indexes?.at(-1) ?? _.chunk.unplaceable?.index;
        (k < P.length || _.chunk.unplaceable || B !== void 0 && r[B]?.breakAfter) && y();
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
        f - m <= 0 && Gt(b()) && y(), I.some((R) => {
          const M = R.indexes[R.cursor];
          return M !== void 0 && r[M]?.breakBefore;
        }) && Gt(b()) && y();
        const w = f - m;
        let k = I.map((R) => Fr(
          h,
          R.indexes,
          R.cursor,
          w,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )), E;
        const D = () => E ??= I.map((R) => (u && (u.freshPageAttempts += 1), Fr(
          h,
          R.indexes,
          R.cursor,
          f,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )));
        if (Gt(b()) && I.some((R, M) => {
          const A = ha(
            h,
            R.indexes,
            R.cursor,
            k[M],
            f
          );
          return A === "no" ? !1 : A === "move" ? !0 : D()[M].consumed > k[M].consumed;
        }) && (y(), k = D()), !k.some((R) => R.consumed > 0)) {
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
        const T = Math.max(0, ...k.map((R) => R.height));
        m += T, I.forEach((R, M) => {
          R.cursor += k[M].consumed;
        });
        const W = I.some((R) => R.cursor < R.indexes.length), F = k.some((R) => {
          const M = R.chunk.indexes?.at(-1) ?? R.chunk.unplaceable?.index;
          return M !== void 0 && r[M]?.breakAfter;
        }), $ = k.some((R) => !!R.chunk.unplaceable);
        (W || F || $) && y();
      }
  }
  const S = v.filter(Gt);
  return S.length ? (u && (u.pages = S.length), S) : (u && (u.pages = 1), [{ indexes: [], keys: [], layout: [] }]);
}
function Zi(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function zn(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, i = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + i;
}
function Ji(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: Wc(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function Wc(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function Qi(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function So(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function oo(e) {
  const t = {};
  for (const n of e) {
    const r = So(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function io(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, zn(r, t)));
  }
  return n;
}
function es(e) {
  return Array.from(e.querySelectorAll('[data-uhuu-flow-item="true"]'));
}
function ts(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
const bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getEffectiveScale: Zi,
  getOuterHeight: zn,
  hashString: ts,
  parseKeepWithNext: Wc,
  readFlowItemElements: es,
  readHeaderGroupHeights: io,
  readHeaderGroupKey: So,
  readHeaderGroupRepeats: oo,
  readItemMeta: Ji,
  serializeKeepWithNext: Qi
}, Symbol.toStringTag, { value: "Module" })), yh = Xi, wh = Kc, Fn = g.createContext(null), xh = typeof window > "u" ? g.useEffect : g.useLayoutEffect, so = /* @__PURE__ */ new Set();
function ao(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Gc(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function bt(e) {
  return Number.parseFloat(e || "0") || 0;
}
function Ch(e, t) {
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
      ).reduce((f, h) => f + zn(h, t), 0);
      s.push(u);
    }
    const a = Math.max(0, ...s);
    if (zn(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function Sh(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return Ph(e, t, n);
  const o = es(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Zi(e), a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = o.map((S) => zn(S, s)), d = o.map(Ji), u = o.map((S, C) => S.dataset.uhuuFlowKey || String(C)), f = o.map(So), h = oo(o), v = io(t, s), m = [], b = c ? a : l.reduce((S, C) => S + C, 0) + Object.values(v).reduce((S, C) => S + C, 0);
  c || n.onZeroHeight?.();
  const y = yh({
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
  }), x = ts(JSON.stringify({
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
function Ph(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = es(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Zi(e);
  Ch(t, s);
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
    !Number.isInteger(w) || w < 0 || (d[w] = zn(P, s), u[w] = P.dataset.uhuuFlowKey || String(w), f[w] = Ji(P), h[w] = So(P));
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
      const D = Array.from(
        k.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map((_) => Number.parseInt(_.dataset.uhuuFlowIndex ?? "-1", 10)).filter((_) => Number.isInteger(_) && _ >= 0);
      return [{ id: E, indexes: D }];
    });
    return w.length ? [{ kind: "columns", id: P.dataset.uhuuFlowLayoutId || "columns", columns: w }] : [];
  }), m = oo(o), b = io(t, s), y = {}, x = {};
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
        const D = Array.from(
          k.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        y[w][E] = io(k, s), x[w][E] = oo(D);
      }
    }
  }
  const S = [], C = c ? a : d.reduce((P, w) => P + w, 0) + Object.values(b).reduce((P, w) => P + w, 0);
  c || n.onZeroHeight?.();
  const N = wh({
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
  }), I = ts(JSON.stringify({
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
function Vc({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = g.useContext(Fn), i = g.useRef(null), s = g.useRef(""), a = g.useRef(!1), c = g.useRef(!1), l = g.useRef(/* @__PURE__ */ new Set());
  return xh(() => {
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
      x.length > 1 && !a.current && Et() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const S = x[0];
      if (!S) return;
      const C = Sh(d, S, {
        onZeroHeight: () => {
          c.current || !Et() || (c.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (N) => {
          l.current.has(N.key) || !Et() || (l.current.add(N.key), console.warn(
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
function Uc({
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
        /* @__PURE__ */ p(
          Vc,
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
function Yc(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function wi(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    t.has(n) || t.set(n, r);
  }), t;
}
function qc(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    let r = t.get(n.itemIndex);
    r || (r = /* @__PURE__ */ new Set(), t.set(n.itemIndex, r)), r.add(n.groupKey);
  }
  return t;
}
function Xc({
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
  const h = g.useContext(Fn), v = h?.chunksByFlowId?.[e], m = h?.mode === "visible" && v ? v[h.pageIndex] : void 0, y = (h?.mode === "visible" && v ? m?.indexes ?? [] : h?.mode === "visible" && h.pageIndex > 0 ? [] : t.map((w, k) => k)).filter((w) => Number.isInteger(w) && w >= 0 && w < t.length), x = t.map((w, k) => Yc(a?.(w, k))), S = x.map((w) => w?.key), C = wi(y), N = c ? qc(m?.groupHeaders) : void 0, I = h?.mode === "visible" ? h.pageIndex : 0, P = h?.mode === "visible" && v ? v.length : 1;
  return g.useEffect(() => {
    if (!Et() || !i || !Object.keys(i).length || !t.length)
      return;
    const w = `${e}:${Object.keys(i).join("|")}`;
    so.has(w) || t.some((E, D) => !!(s?.(E, D) ?? ao(E))) || (so.add(w), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, s]), /* @__PURE__ */ L(
    "div",
    {
      className: l,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        m?.unplaceable && (f?.(m.unplaceable, { flowId: e, pageIndex: I, pageCount: P }) ?? /* @__PURE__ */ L(
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
          const E = n(k, w), D = x[w], B = {
            ...Hc({
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
          }, T = s?.(k, w) ?? ao(k), W = Gc(
            T ? i?.[T] : void 0,
            o?.(k, w)
          ), F = typeof d == "function" ? d(k, w) : d, $ = !!(D && N?.get(w)?.has(D.key)), R = !!(D && c && ($ || !N && B.isFirstInGroupOnPage && (B.isFirstInGroup || D.repeatHeader !== !1))), M = typeof u == "function" ? D ? u(D, B) : void 0 : u;
          return /* @__PURE__ */ L(g.Fragment, { children: [
            R && D && /* @__PURE__ */ p(
              "div",
              {
                className: M,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": D.key,
                children: c?.(D, B)
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: F,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(E),
                "data-uhuu-flow-index": w,
                "data-uhuu-flow-break-before": W.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": W.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": Qi(W.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": W.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": W.groupKey,
                "data-uhuu-flow-header-group-key": D?.key,
                "data-uhuu-flow-header-repeat": D ? D.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(k, w, B)
              }
            )
          ] }, E);
        })
      ]
    }
  );
}
function Ih({
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
  jc({ nodes: n, itemCount: t.length });
  const y = g.useContext(Fn), x = y?.chunksByFlowId?.[e], S = y?.mode === "visible" && x ? x[y.pageIndex] : void 0, C = y?.mode !== "visible", N = y?.mode === "visible" ? y.pageIndex : 0, I = y?.mode === "visible" && x ? x.length : 1, P = t.map((T, W) => Yc(c?.(T, W))), w = P.map((T) => T?.key), k = {
    flowId: e
  };
  g.useEffect(() => {
    if (!Et() || !s || !Object.keys(s).length || !t.length)
      return;
    const T = `${e}:columns:${Object.keys(s).join("|")}`;
    so.has(T) || t.some((F, $) => !!(a?.(F, $) ?? ao(F))) || (so.add(T), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, a]);
  const E = (T) => T ? h?.(T, { flowId: e, pageIndex: N, pageCount: I }) ?? /* @__PURE__ */ L(
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
    const M = T.filter((H) => Number.isInteger(H) && H >= 0 && H < t.length), A = wi(M), j = R ? wi(R) : void 0, K = l ? qc(W?.groupHeaders) : void 0;
    return M.map((H) => {
      const V = t[H];
      if (V === void 0) return null;
      const Y = r(V, H), z = P[H], G = A.get(H) ?? -1, U = j?.get(H) ?? -1, Z = {
        ...Hc({
          itemIndex: H,
          fragmentIndexes: M,
          fragmentIndex: G,
          groupKeys: w,
          pageIndex: N,
          pageCount: I,
          itemCount: t.length,
          previousSourceIndex: W?.previousSourceIndex ?? (U > 0 ? R?.[U - 1] : void 0)
        }),
        flowId: e,
        itemKey: Y,
        item: V
      }, te = a?.(V, H) ?? ao(V), re = Gc(
        te ? s?.[te] : void 0,
        i?.(V, H)
      ), be = typeof u == "function" ? u(V, H) : u, oe = F?.(H), Re = !!(z && K?.get(H)?.has(z.key)), Je = !!(z && l && (Re || !K && Z.isFirstInGroupOnPage && (Z.isFirstInGroup || z.repeatHeader !== !1))), cn = typeof f == "function" ? z ? f(z, Z) : void 0 : f;
      return /* @__PURE__ */ L(g.Fragment, { children: [
        Je && z && /* @__PURE__ */ p(
          "div",
          {
            className: cn,
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
            "data-uhuu-flow-layout-node": $ ? "item" : void 0,
            "data-uhuu-flow-key": String(Y),
            "data-uhuu-flow-index": H,
            "data-uhuu-flow-break-before": re.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": re.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": Qi(re.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": re.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": re.groupKey,
            "data-uhuu-flow-header-group-key": z?.key,
            "data-uhuu-flow-header-repeat": z ? z.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(V, H, Z)
          }
        )
      ] }, Y);
    });
  }, _ = new Map(
    n.filter((T) => T.kind === "columns").map((T) => [T.id, T])
  ), B = C ? n : S?.layout ?? [];
  return /* @__PURE__ */ p(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: B.map((T, W) => {
        if (T.kind === "item")
          return /* @__PURE__ */ p(g.Fragment, { children: D([T.index], void 0, void 0, !0) }, `item:${T.index}:${W}`);
        if (T.kind === "items")
          return /* @__PURE__ */ L(g.Fragment, { children: [
            E(T.chunk.unplaceable),
            D(T.chunk.indexes, T.chunk, void 0, !0)
          ] }, `items:${W}`);
        const F = C ? T : _.get(T.id);
        if (!F) return null;
        const $ = new Map(F.columns.map((A) => [A.id, A])), R = C ? F.columns.map((A) => ({ id: A.id })) : T.columns, M = v?.(F, k);
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
            "data-uhuu-flow-layout-id": F.id,
            children: R.map((A) => {
              const j = $.get(A.id);
              if (!j) return null;
              const K = m?.(F, j, k), H = A.chunk?.indexes ?? j.indexes;
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
                  "data-uhuu-flow-column": j.id,
                  children: [
                    E(A.chunk?.unplaceable),
                    D(
                      H,
                      A.chunk,
                      (V) => b?.(
                        F,
                        j,
                        V,
                        k
                      ),
                      !1,
                      j.indexes
                    )
                  ]
                },
                j.id
              );
            })
          },
          `columns:${F.id}:${W}`
        );
      })
    }
  );
}
const jn = (e, t) => {
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
}, Zc = "uhuu-text-empty", Nh = /* @__PURE__ */ new Set(["text", "textarea", "markdown"]), Jc = (e) => e !== null && typeof e == "object" && "type" in e && typeof e.type == "string" && Nh.has(e.type), Qc = (e) => e == null || typeof e == "boolean" ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.every(Qc) : !1, kh = (e) => {
  const t = Se($t), r = Jc(e.dialog) && Qc(e.children) ? [e.className, Zc].filter(Boolean).join(" ") : e.className;
  return /* @__PURE__ */ p(
    "div",
    {
      className: r,
      ...jn(e, t),
      children: e.children
    }
  );
};
function Rh(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function el(e, t, n, r = "") {
  const o = Rh(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Eh = /\s*(page-break-before|break-before)\s*/i, Ah = 1, Dh = 3, Mh = 8;
function Oh(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _h(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Th(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === Mh) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Dh) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: Oh(i), text: i });
      return;
    }
    if (o.nodeType === Ah) {
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
function Fh(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const s = i.type ?? "text", a = i.html ?? "";
    a && (r.push({
      id: el(s, i.text ?? a, r.length, n),
      type: s,
      html: a,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function tl(e = "", t = {}) {
  const n = t.breakComment ?? Eh, o = (t.parseHtml ?? ((i) => Th(i, n)))(e);
  return Fh(Array.isArray(o) ? o : [], t);
}
const $h = {
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
let pa = !1;
function Lh(e) {
  return g.useMemo(() => e === !1 ? (Et() && !pa && (pa = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : _h, [e]);
}
function Bh({
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
    () => tl(e, { idPrefix: c, parseHtml: b }),
    [e, c, b]
  ), x = g.useMemo(
    () => ({ ...$h, ...u ?? {} }),
    [u]
  ), S = Lh(v), C = g.useCallback(
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
    Xc,
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
    Uc,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: s,
      header: t,
      footer: n,
      children: m ? /* @__PURE__ */ p(kh, { dialog: m, className: !y.length && Jc(m) ? Zc : void 0, children: I }) : I
    }
  );
}
const zh = /<!--\s*(page-break-before|break-before)\s*-->/i, Hh = /^\s*\[[^\]]+\]:\s+\S+/, ga = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function $r(e) {
  return e.trim() === "";
}
function ma(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function va(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function ba(e) {
  return /^(```|~~~)/.test(e.trim());
}
function ya(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function wa(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function xa(e) {
  return zh.test(e.trim());
}
function jh(e) {
  return Hh.test(e);
}
function Kh(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const s = o ? `${o} ${i}` : i;
    o && s.length > t ? (r.push(o), o = i) : o = s;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Wh(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function Gh(e, t, n, r, o, i) {
  const s = n.join(`
`).trim();
  if (!s) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, c = t === "paragraph" ? Kh(s, a) : [s];
  for (let l = 0; l < c.length; l += 1) {
    const d = c[l], u = Wh(d, i);
    e.push({
      id: el(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: l === 0 ? r : !1
    });
  }
  return !0;
}
function Vh(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const l of r)
    jh(l) ? o.push(l) : i.push(l);
  const s = [];
  let a = 0, c = !1;
  for (; a < i.length; ) {
    if ($r(i[a])) {
      a += 1;
      continue;
    }
    if (xa(i[a])) {
      c = !0, a += 1;
      continue;
    }
    const l = a;
    let d = "paragraph";
    if (ba(i[a])) {
      d = "code";
      const u = i[a].trim().slice(0, 3);
      for (a += 1; a < i.length && !i[a].trim().startsWith(u); )
        a += 1;
      a < i.length && (a += 1);
    } else if (ma(i[a]))
      d = "heading", a += 1;
    else if (ya(i[a]))
      d = "rule", a += 1;
    else if (ga.test(i[a]))
      d = "image", a += 1;
    else if (wa(i, a))
      for (d = "table", a += 2; a < i.length && i[a].includes("|") && !$r(i[a]); )
        a += 1;
    else if (va(i[a]))
      for (d = "list", a += 1; a < i.length && !$r(i[a]); )
        a += 1;
    else if (i[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < i.length && i[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < i.length && !$r(i[a]) && !ma(i[a]) && !ba(i[a]) && !ya(i[a]) && !ga.test(i[a]) && !wa(i, a) && !va(i[a]) && !i[a].trim().startsWith(">") && !xa(i[a]); )
        a += 1;
    Gh(s, d, i.slice(l, a), c, t, o) && (c = !1);
  }
  return s;
}
const Ca = (e) => `${Number(e.toFixed(4))}mm`;
function Uh(e, t) {
  const n = le(!1);
  ce(() => {
    t || n.current || !Et() || (n.current = !0, console.warn(
      `[uhuu-components] Static.CoverSpread sheet="${e}" rendered without a perfect binding. Pass binding={{ spine, glue }} on the Pagination setup (or the binding prop) to compose a cover spread. Rendering the two panels as plain sheets instead.`
    ));
  }, [e, t]);
}
const nl = mr(function({
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
  const b = Se($t), y = a !== void 0 ? rn(a) : b?.page?.binding ?? null, x = c ?? b?.page?.showBleed ?? !1, [S, C] = i ?? [0, 0];
  Uh(t, y);
  const N = (E) => s ? ({ pageNo: D }) => s({ pageNo: D, side: E, sheet: t }) : void 0, I = /* @__PURE__ */ p(
    cr,
    {
      className: `uhuu-page-sheet--panel ${u}`.trim(),
      pageNo: S,
      overlay: N("left"),
      showBleed: x,
      "data-page-key": h,
      children: n
    }
  ), P = /* @__PURE__ */ p(
    cr,
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
    return /* @__PURE__ */ L(Be, { children: [
      I,
      P
    ] });
  const w = t === "inner", k = w && y.glue > 0;
  return /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("div", { className: "uhuu-spread-spine", "data-blank": w ? "true" : "false", children: [
          !w && o,
          x && /* @__PURE__ */ p(
            "div",
            {
              className: "uhuu-spread-guide",
              "data-label": `spine ${Ca(y.spine)}${w ? " · blank" : ""}`
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "uhuu-spread-panel", "data-side": "right", children: P }),
        k && ["left", "right"].map((E) => /* @__PURE__ */ p("div", { className: "uhuu-glue-zone", "data-side": E, children: x && /* @__PURE__ */ p("div", { className: "uhuu-spread-guide", "data-label": `glue ${Ca(y.glue)}` }) }, E))
      ]
    }
  );
});
function rl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = rl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ol() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = rl(e)) && (r && (r += " "), r += t);
  return r;
}
const Yh = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, qh = (e, t) => ({
  classGroupId: e,
  validator: t
}), il = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), co = "-", Sa = [], Xh = "arbitrary..", Zh = (e) => {
  const t = Qh(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Jh(s);
      const a = s.split(co), c = a[0] === "" && a.length > 1 ? 1 : 0;
      return sl(a, c, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const c = r[s], l = n[s];
        return c ? l ? Yh(l, c) : c : l || Sa;
      }
      return n[s] || Sa;
    }
  };
}, sl = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const l = sl(e, t + 1, i);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(co) : e.slice(t).join(co), c = s.length;
  for (let l = 0; l < c; l++) {
    const d = s[l];
    if (d.validator(a))
      return d.classGroupId;
  }
}, Jh = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Xh + r : void 0;
})(), Qh = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return ep(n, t);
}, ep = (e, t) => {
  const n = il();
  for (const r in e) {
    const o = e[r];
    ns(o, n, r, t);
  }
  return n;
}, ns = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    tp(s, t, n, r);
  }
}, tp = (e, t, n, r) => {
  if (typeof e == "string") {
    np(e, t, n);
    return;
  }
  if (typeof e == "function") {
    rp(e, t, n, r);
    return;
  }
  op(e, t, n, r);
}, np = (e, t, n) => {
  const r = e === "" ? t : al(t, e);
  r.classGroupId = n;
}, rp = (e, t, n, r) => {
  if (ip(e)) {
    ns(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(qh(n, e));
}, op = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, c] = o[s];
    ns(c, al(t, a), n, r);
  }
}, al = (e, t) => {
  let n = e;
  const r = t.split(co), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = il(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, ip = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, sp = (e) => {
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
}, xi = "!", Pa = ":", ap = [], Ia = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), cp = (e) => {
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
        if (b === Pa) {
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
    u.endsWith(xi) ? (f = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(xi) && (f = u.slice(1), h = !0)
    );
    const v = l && l > c ? l - c : void 0;
    return Ia(i, h, f, v);
  };
  if (t) {
    const o = t + Pa, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Ia(ap, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, lp = (e) => {
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
}, up = (e) => ({
  cache: sp(e.cacheSize),
  parseClassName: cp(e),
  sortModifiers: lp(e),
  postfixLookupClassGroupIds: dp(e),
  ...Zh(e)
}), dp = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, fp = /\s+/, hp = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i,
    postfixLookupClassGroupIds: s
  } = t, a = [], c = e.trim().split(fp);
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
    const S = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), C = v ? S + xi : S, N = C + x;
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
}, pp = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = cl(n)) && (o && (o += " "), o += r);
  return o;
}, cl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cl(e[r])) && (n && (n += " "), n += t);
  return n;
}, gp = (e, ...t) => {
  let n, r, o, i;
  const s = (c) => {
    const l = t.reduce((d, u) => u(d), e());
    return n = up(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }, a = (c) => {
    const l = r(c);
    if (l)
      return l;
    const d = hp(c, n);
    return o(c, d), d;
  };
  return i = s, (...c) => i(pp(...c));
}, mp = [], Oe = (e) => {
  const t = (n) => n[e] || mp;
  return t.isThemeGetter = !0, t;
}, ll = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ul = /^\((?:(\w[\w-]*):)?(.+)\)$/i, vp = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, bp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vt = (e) => vp.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), yt = (e) => !!e && Number.isInteger(Number(e)), qo = (e) => e.endsWith("%") && ae(e.slice(0, -1)), kt = (e) => bp.test(e), dl = () => !0, Sp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yp.test(e) && !wp.test(e)
), rs = () => !1, Pp = (e) => xp.test(e), Ip = (e) => Cp.test(e), Np = (e) => !q(e) && !X(e), kp = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Rp = (e) => on(e, pl, rs), q = (e) => ll.test(e), gn = (e) => on(e, gl, Sp), Na = (e) => on(e, Fp, ae), Ep = (e) => on(e, vl, dl), Ap = (e) => on(e, ml, rs), ka = (e) => on(e, fl, rs), Dp = (e) => on(e, hl, Ip), Lr = (e) => on(e, bl, Pp), X = (e) => ul.test(e), tr = (e) => xn(e, gl), Mp = (e) => xn(e, ml), Ra = (e) => xn(e, fl), Op = (e) => xn(e, pl), _p = (e) => xn(e, hl), Br = (e) => xn(e, bl, !0), Tp = (e) => xn(e, vl, !0), on = (e, t, n) => {
  const r = ll.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, xn = (e, t, n = !1) => {
  const r = ul.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, fl = (e) => e === "position" || e === "percentage", hl = (e) => e === "image" || e === "url", pl = (e) => e === "length" || e === "size" || e === "bg-size", gl = (e) => e === "length", Fp = (e) => e === "number", ml = (e) => e === "family-name", vl = (e) => e === "number" || e === "weight", bl = (e) => e === "shadow", $p = () => {
  const e = Oe("color"), t = Oe("font"), n = Oe("text"), r = Oe("font-weight"), o = Oe("tracking"), i = Oe("leading"), s = Oe("breakpoint"), a = Oe("container"), c = Oe("spacing"), l = Oe("radius"), d = Oe("shadow"), u = Oe("inset-shadow"), f = Oe("text-shadow"), h = Oe("drop-shadow"), v = Oe("blur"), m = Oe("perspective"), b = Oe("aspect"), y = Oe("ease"), x = Oe("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], N = () => [...C(), X, q], I = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], w = () => [X, q, c], k = () => [Vt, "full", "auto", ...w()], E = () => [yt, "none", "subgrid", X, q], D = () => ["auto", {
    span: ["full", yt, X, q]
  }, yt, X, q], _ = () => [yt, "auto", X, q], B = () => ["auto", "min", "max", "fr", X, q], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...w()], $ = () => [Vt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], R = () => [Vt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()], M = () => [Vt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...w()], A = () => [e, X, q], j = () => [...C(), Ra, ka, {
    position: [X, q]
  }], K = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", Op, Rp, {
    size: [X, q]
  }], V = () => [qo, tr, gn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    X,
    q
  ], z = () => ["", ae, tr, gn], G = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [ae, qo, Ra, ka], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    X,
    q
  ], te = () => ["none", ae, X, q], re = () => ["none", ae, X, q], be = () => [ae, X, q], oe = () => [Vt, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [kt],
      breakpoint: [kt],
      color: [dl],
      container: [kt],
      "drop-shadow": [kt],
      ease: ["in", "out", "in-out"],
      font: [Np],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [kt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [kt],
      shadow: [kt],
      spacing: ["px", ae],
      text: [kt],
      "text-shadow": [kt],
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
        aspect: ["auto", "square", Vt, q, X, b]
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
      "container-named": [kp],
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
        basis: [Vt, "full", "auto", a, ...w()]
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
        flex: [ae, Vt, "auto", "initial", "none", q]
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
        text: ["base", n, tr, gn]
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
        font: [r, Tp, Ep]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qo, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mp, Ap, t]
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
        "line-clamp": [ae, "none", X, Na]
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
        decoration: [ae, "from-font", "auto", X, gn]
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
        bg: j()
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
          }, yt, X, q],
          radial: ["", X, q],
          conic: [yt, X, q]
        }, _p, Dp]
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
        "outline-offset": [ae, X, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, tr, gn]
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
          Br,
          Lr
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
        "inset-shadow": ["none", u, Br, Lr]
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
        "ring-offset": [ae, gn]
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
        "text-shadow": ["none", f, Br, Lr]
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
        mask: j()
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
          Br,
          Lr
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
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, tr, gn, Na]
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
}, Lp = /* @__PURE__ */ gp($p);
function ue(...e) {
  return Lp(ol(e));
}
const os = ({
  onError: e
}) => (n) => {
  e?.(n);
}, Ea = (e, t) => e && e > 0 ? e + t : 0, is = ({ width: e, left: t = 0, right: n = 0 }, r, o, i) => {
  if (e)
    return !t && !n ? e + o : e;
  let s = i * r;
  return t || (s += i * o), n || (s += i * o), (t || n) && (s -= t + n), s;
}, yl = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, i = r + 2 * n, s = is(e, r, n, o), a = Ea(e.left, n), c = t === "spread" && e.side === "end" ? -r + a : a, l = i - (c + s);
  return {
    top: `${Math.max(0, Ea(e.top, n))}mm`,
    right: `${Math.max(0, l)}mm`
  };
}, ss = (e) => {
  const t = Se($t), n = os({
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
  } = e, m = (P) => `${P}mm`, b = () => is({ width: l, left: u, right: f }, o, r, 1), y = () => {
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
  return /* @__PURE__ */ p("div", { className: "uhuu-image-container", style: I, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ L(
    "div",
    {
      className: "uhuu-image-inner",
      ...jn(e, t),
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
const Bp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Aa = (e) => {
  const t = zp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, wl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Hp = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var jp = {
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
const Kp = mr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, c) => yi(
    "svg",
    {
      ref: c,
      ...jp,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: wl("lucide", o),
      ...!i && !Hp(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([l, d]) => yi(l, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const ke = (e, t) => {
  const n = mr(
    ({ className: r, ...o }, i) => yi(Kp, {
      ref: i,
      iconNode: t,
      className: wl(
        `lucide-${Bp(Aa(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Aa(e), n;
};
const Wp = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Gp = ke("arrow-down", Wp);
const Vp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Da = ke("arrow-up-down", Vp);
const Up = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Yp = ke("arrow-up", Up);
const qp = [
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
], Xp = ke("book-dashed", qp);
const Zp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], as = ke("check", Zp);
const Jp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xl = ke("chevron-down", Jp);
const Qp = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], eg = ke("chevron-right", Qp);
const tg = [
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
], ng = ke("clipboard-list", tg);
const rg = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], og = ke("copy", rg);
const ig = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Cl = ke("ellipsis", ig);
const sg = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Sl = ke("grip-vertical", sg);
const ag = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Ci = ke("lock", ag);
const cg = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], lg = ke("maximize", cg);
const ug = [["path", { d: "M5 12h14", key: "1ays0h" }]], dg = ke("minus", ug);
const fg = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], hg = ke("pencil", fg);
const pg = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], wt = ke("plus", pg);
const gg = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], mg = ke("search", gg);
const vg = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], bg = ke("trash-2", vg);
const yg = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], wg = ke("unfold-horizontal", yg);
const xg = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], Cg = ke("unfold-vertical", xg);
const Sg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Pl = ke("x", Sg);
const Pg = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ig = ke("zoom-in", Pg);
const Ng = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], kg = ke("zoom-out", Ng), Il = g.createContext({
  portalContainer: null
});
function cs() {
  return g.useContext(Il);
}
function Rg({ children: e }) {
  const [t, n] = g.useState(null);
  return g.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ p(Il.Provider, { value: { portalContainer: t }, children: e });
}
const Nl = Ft({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function ls() {
  return Se(Nl);
}
function us() {
  const { interactive: e } = ls();
  return !e;
}
function Eg() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function Ag() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Dg({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = Eg(), o = n || Ag(), i = r ? !1 : t, [s, a] = se(i);
  return /* @__PURE__ */ p(Nl.Provider, { value: { interactive: s, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ p(Rg, { children: /* @__PURE__ */ p("div", { "data-uhuu-interactive": s ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const Ma = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Oa = ol, kl = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Oa(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const d = n?.[l], u = i?.[l];
    if (d === null) return null;
    const f = Ma(d) || Ma(u);
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
  return Oa(e, s, c, n?.class, n?.className);
}, Mg = kl(
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
), ze = g.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ p(
    "button",
    {
      className: ue(Mg({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
ze.displayName = "Button";
var Og = Object.defineProperty, Kn = (e, t) => Og(e, "name", { value: t, configurable: !0 }), Rl = !!(typeof window < "u" && window.document && window.document.createElement);
function ne(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Kn(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
Kn(ne, "composeEventHandlers");
function _g(e) {
  if (!Rl)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
Kn(_g, "getOwnerWindow");
function Si(e) {
  if (!Rl)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
Kn(Si, "getOwnerDocument");
function El(e, t = !1) {
  const { activeElement: n } = Si(e);
  if (!n?.nodeName)
    return null;
  if (Al(n) && n.contentDocument)
    return El(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Si(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
Kn(El, "getActiveElement");
function Al(e) {
  return e.tagName === "IFRAME";
}
Kn(Al, "isFrame");
var Tg = Object.defineProperty, ds = (e, t) => Tg(e, "name", { value: t, configurable: !0 });
function Pi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
ds(Pi, "setRef");
function Dl(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Pi(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Pi(e[o], null);
        }
      };
  };
}
ds(Dl, "composeRefs");
function me(...e) {
  return g.useCallback(Dl(...e), e);
}
ds(me, "useComposedRefs");
var Fg = Object.defineProperty, rt = (e, t) => Fg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function $g(e, t) {
  const n = g.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ rt((i) => {
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
  return rt(o, "useContext"), [r, o];
}
rt($g, "createContext");
// @__NO_SIDE_EFFECTS__
function pt(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s);
    a.displayName = i + "Context";
    const c = n.length;
    n = [...n, s];
    const l = /* @__PURE__ */ rt((u) => {
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
    return rt(d, "useContext"), [l, d];
  }
  rt(r, "createContext");
  const o = /* @__PURE__ */ rt(() => {
    const i = n.map((s) => g.createContext(s));
    return /* @__PURE__ */ rt(function(a) {
      const c = a?.[e] || i;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Ml(o, ...t)];
}
rt(pt, "createContextScope");
function Ml(...e) {
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
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
rt(Ml, "composeContextScopes");
var Xe = globalThis?.document ? g.useLayoutEffect : () => {
}, Lg = Object.defineProperty, Bg = (e, t) => Lg(e, "name", { value: t, configurable: !0 }), _a = g[" useEffectEvent ".trim().toString()], Ta = g[" useInsertionEffect ".trim().toString()];
function Ol(e) {
  if (typeof _a == "function")
    return _a(e);
  const t = g.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Ta == "function" ? Ta(() => {
    t.current = e;
  }) : Xe(() => {
    t.current = e;
  }), g.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Bg(Ol, "useEffectEvent");
var zg = Object.defineProperty, vr = (e, t) => zg(e, "name", { value: t, configurable: !0 }), Hg = g[" useInsertionEffect ".trim().toString()] || Xe;
function Cn({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ vr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, i, s] = _l({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o, l = g.useCallback(
    (d) => {
      if (a) {
        const u = Tl(d) ? d(e) : d;
        u !== e && s.current?.(u);
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [c, l];
}
vr(Cn, "useControllableState");
function _l({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), i = g.useRef(t);
  return Hg(() => {
    i.current = t;
  }, [t]), g.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
vr(_l, "useUncontrolledState");
function Tl(e) {
  return typeof e == "function";
}
vr(Tl, "isFunction");
var Fa = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function jg(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: s, caller: a } = t, c = o !== void 0, l = Ol(s), d = [{ ...n, state: i }];
  r && d.push(r);
  const [u, f] = g.useReducer(
    (b, y) => {
      if (y.type === Fa)
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
    c && !Object.is(o, u.state) && f({ type: Fa, state: o });
  }, [o, u.state, c]), [m, f];
}
vr(jg, "useControllableStateReducer");
var Kg = Object.defineProperty, gt = (e, t) => Kg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const t = g.forwardRef((n, r) => {
    let { children: o, ...i } = n, s = null, a = !1;
    const c = [];
    Ii(o) && typeof zr == "function" && (o = zr(o._payload)), g.Children.forEach(o, (f) => {
      if (Bl(f)) {
        a = !0;
        const h = f;
        let v = "child" in h.props ? h.props.child : h.props.children;
        Ii(v) && typeof zr == "function" && (v = zr(v._payload)), s = Gg(h, v), c.push(s?.props?.children);
      } else
        c.push(f);
    }), s ? s = g.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && g.Children.count(o) === 1 && g.isValidElement(o) && (s = o)
    );
    const l = s ? Ll(s) : void 0, d = me(r, l);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          a ? Yg(e) : Ug(e)
        );
      return o;
    }
    const u = $l(i, s.props ?? {});
    return s.type !== g.Fragment && (u.ref = r ? d : l), g.cloneElement(s, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
gt(Jt, "createSlot");
var Fl = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Wg(e) {
  const t = /* @__PURE__ */ gt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Fl, t;
}
gt(Wg, "createSlottable");
var Gg = /* @__PURE__ */ gt((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return g.isValidElement(n) ? g.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return g.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function $l(e, t) {
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
gt($l, "mergeProps");
function Ll(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
gt(Ll, "getElementRef");
function Bl(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fl;
}
gt(Bl, "isSlottable");
var Vg = /* @__PURE__ */ Symbol.for("react.lazy");
function Ii(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Vg && "_payload" in e && zl(e._payload);
}
gt(Ii, "isLazyComponent");
function zl(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
gt(zl, "isPromiseLike");
var Ug = /* @__PURE__ */ gt((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Yg = /* @__PURE__ */ gt((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), zr = g[" use ".trim().toString()], qg = Object.defineProperty, Xg = (e, t) => qg(e, "name", { value: t, configurable: !0 }), Zg = [
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
], xe = Zg.reduce((e, t) => {
  const n = /* @__PURE__ */ Jt(`Primitive.${t}`), r = g.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(c, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function fs(e, t) {
  e && Ui.flushSync(() => e.dispatchEvent(t));
}
Xg(fs, "dispatchDiscreteCustomEvent");
var Jg = Object.defineProperty, $e = (e, t) => Jg(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Po(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ pt(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ $e((m) => {
    const { scope: b, children: y } = m, x = g.useRef(null), S = g.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: b, itemMap: S, collectionRef: x, children: y });
  }, "CollectionProvider");
  s.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ Jt(a), l = g.forwardRef(
    (m, b) => {
      const { scope: y, children: x } = m, S = i(a, y), C = me(b, S.collectionRef);
      return /* @__PURE__ */ p(c, { ref: C, children: x });
    }
  );
  l.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ Jt(d), h = g.forwardRef(
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
  return $e(v, "useCollection"), [
    { Provider: s, Slot: l, ItemSlot: h },
    v,
    r
  ];
}
$e(Po, "createCollection");
var $a = /* @__PURE__ */ new WeakMap(), Xo = class Ut extends Map {
  static {
    $e(this, "OrderedDict");
  }
  #e;
  constructor(t) {
    super(t), this.#e = [...super.keys()], $a.set(this, !0);
  }
  set(t, n) {
    return $a.get(this) && (this.has(t) ? this.#e[this.#e.indexOf(t)] = t : this.#e.push(t)), super.set(t, n), this;
  }
  insert(t, n, r) {
    const o = this.has(n), i = this.#e.length, s = hs(t);
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
    const n = Xr(this.#e, t);
    if (n !== void 0)
      return this.get(n);
  }
  entryAt(t) {
    const n = Xr(this.#e, t);
    if (n !== void 0)
      return [n, this.get(n)];
  }
  indexOf(t) {
    return this.#e.indexOf(t);
  }
  keyAt(t) {
    return Xr(this.#e, t);
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
function Xr(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Hl(e, t);
  return n === -1 ? void 0 : e[n];
}
$e(Xr, "at");
function Hl(e, t) {
  const n = e.length, r = hs(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
$e(Hl, "toSafeIndex");
function hs(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
$e(hs, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Qg(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ pt(t), [o, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Xo(),
      setItemMap: /* @__PURE__ */ $e(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ $e(({ state: S, ...C }) => S ? /* @__PURE__ */ p(c, { ...C, state: S }) : /* @__PURE__ */ p(a, { ...C }), "CollectionProvider");
  s.displayName = t;
  const a = /* @__PURE__ */ $e((S) => {
    const C = b();
    return /* @__PURE__ */ p(c, { ...S, state: C });
  }, "CollectionInit");
  a.displayName = t + "Init";
  const c = /* @__PURE__ */ $e((S) => {
    const { scope: C, children: N, state: I } = S, P = g.useRef(null), [w, k] = g.useState(
      null
    ), E = me(P, k), [D, _] = I;
    return g.useEffect(() => {
      if (!w) return;
      const B = Wl(() => {
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
        itemMap: D,
        setItemMap: _,
        collectionRef: E,
        collectionRefObject: P,
        collectionElement: w,
        children: N
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = t + "Impl";
  const l = e + "CollectionSlot", d = /* @__PURE__ */ Jt(l), u = g.forwardRef(
    (S, C) => {
      const { scope: N, children: I } = S, P = i(l, N), w = me(C, P.collectionRef);
      return /* @__PURE__ */ p(d, { ref: w, children: I });
    }
  );
  u.displayName = l;
  const f = e + "CollectionItemSlot", h = "data-radix-collection-item", v = /* @__PURE__ */ Jt(f), m = g.forwardRef(
    (S, C) => {
      const { scope: N, children: I, ...P } = S, w = g.useRef(null), [k, E] = g.useState(null), D = me(C, w, E), _ = i(f, N), { setItemMap: B } = _, T = g.useRef(P);
      jl(T.current, P) || (T.current = P);
      const W = T.current;
      return g.useEffect(() => {
        const F = W;
        return B(($) => k ? $.has(k) ? $.set(k, { ...F, element: k }).toSorted(Ni) : ($.set(k, { ...F, element: k }), $.toSorted(Ni)) : $), () => {
          B(($) => !k || !$.has(k) ? $ : ($.delete(k), new Xo($)));
        };
      }, [k, W, B]), /* @__PURE__ */ p(v, { [h]: "", ref: D, children: I });
    }
  );
  m.displayName = f;
  function b() {
    return g.useState(new Xo());
  }
  $e(b, "useInitCollection");
  function y(S) {
    const { itemMap: C } = i(e + "CollectionConsumer", S);
    return C;
  }
  return $e(y, "useCollection"), [
    { Provider: s, Slot: u, ItemSlot: m },
    {
      createCollectionScope: r,
      useCollection: y,
      useInitCollection: b
    }
  ];
}
$e(Qg, "createCollection");
function jl(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
$e(jl, "shallowEqual");
function Kl(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
$e(Kl, "isElementPreceding");
function Ni(e, t) {
  return !e[1].element || !t[1].element ? 0 : Kl(e[1].element, t[1].element) ? -1 : 1;
}
$e(Ni, "sortByDocumentPosition");
function Wl(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
$e(Wl, "getChildListObserver");
var em = Object.defineProperty, tm = (e, t) => em(e, "name", { value: t, configurable: !0 }), nm = g.createContext(void 0);
function Io(e) {
  const t = g.useContext(nm);
  return e || t || "ltr";
}
tm(Io, "useDirection");
var rm = Object.defineProperty, om = (e, t) => rm(e, "name", { value: t, configurable: !0 });
function St(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => ((...n) => t.current?.(...n)), []);
}
om(St, "useCallbackRef");
var im = Object.defineProperty, Fe = (e, t) => im(e, "name", { value: t, configurable: !0 }), ki = "dismissableLayer.update", sm = "dismissableLayer.pointerDownOutside", am = "dismissableLayer.focusOutside", La, Gl = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Vl = /* @__PURE__ */ g.forwardRef(
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
    } = t, u = g.useContext(Gl), [f, h] = g.useState(null), v = f?.ownerDocument ?? globalThis?.document, [, m] = g.useState({}), b = me(n, h), y = Array.from(u.layers), [x] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), S = x ? y.indexOf(x) : -1, C = f ? y.indexOf(f) : -1, N = u.layersWithOutsidePointerEventsDisabled.size > 0, I = C >= S, P = g.useRef(!1), w = Yl(
      (_) => {
        s?.(_), c?.(_), _.defaultPrevented || l?.();
      },
      {
        ownerDocument: v,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: P,
        dismissableSurfaces: u.dismissableSurfaces,
        shouldHandlePointerDownOutside: g.useCallback(
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
    ), k = ql((_) => {
      if (o && P.current)
        return;
      const B = _.target;
      [...u.branches].some((W) => W.contains(B)) || (a?.(_), c?.(_), _.defaultPrevented || l?.());
    }, v), E = f ? C === y.length - 1 : !1, D = St((_) => {
      _.key === "Escape" && (i?.(_), !_.defaultPrevented && l && (_.preventDefault(), l()));
    });
    return g.useEffect(() => {
      if (E)
        return v.addEventListener("keydown", D, { capture: !0 }), () => v.removeEventListener("keydown", D, { capture: !0 });
    }, [v, E, D]), g.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (La = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Ri(), () => {
          r && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (v.body.style.pointerEvents = La));
        };
    }, [f, v, r, u]), g.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Ri());
    }, [f, u]), g.useEffect(() => {
      const _ = /* @__PURE__ */ Fe(() => m({}), "handleUpdate");
      return document.addEventListener(ki, _), () => document.removeEventListener(ki, _);
    }, []), /* @__PURE__ */ p(
      xe.div,
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
function Ul() {
  const e = g.useContext(Gl), [t, n] = g.useState(null);
  return g.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
Fe(Ul, "useDismissableLayerSurface");
var cm = /* @__PURE__ */ Fe(() => !0, "IS_TRUE");
function Yl(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = cm
  } = t, a = St(e), c = g.useRef(!1), l = g.useRef(!1), d = g.useRef(/* @__PURE__ */ new Map()), u = g.useRef(() => {
  });
  return g.useEffect(() => {
    function f() {
      l.current = !1, o.current = !1, d.current.clear();
    }
    Fe(f, "resetOutsideInteraction");
    function h() {
      return Array.from(d.current.values()).some(Boolean);
    }
    Fe(h, "isOutsideInteractionIntercepted");
    function v(S) {
      if (!l.current)
        return;
      const C = S.target;
      C instanceof Node && [...i].some((I) => I.contains(C)) || d.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        l.current && u.current();
      }, 0);
    }
    Fe(v, "handleInteractionCapture");
    function m(S) {
      l.current && d.current.set(S.type, !1);
    }
    Fe(m, "handleInteractionBubble");
    const b = /* @__PURE__ */ Fe((S) => {
      if (S.target && !c.current) {
        let C = function() {
          n.removeEventListener("click", u.current);
          const I = h();
          f(), I || ps(
            sm,
            a,
            N,
            { discrete: !0 }
          );
        };
        if (Fe(C, "handleAndDispatchPointerDownOutsideEvent"), !s(S.target)) {
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
    onPointerDownCapture: /* @__PURE__ */ Fe(() => c.current = !0, "onPointerDownCapture")
  };
}
Fe(Yl, "usePointerDownOutside");
function ql(e, t = globalThis?.document) {
  const n = St(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = /* @__PURE__ */ Fe((i) => {
      i.target && !r.current && ps(am, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ Fe(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Fe(() => r.current = !1, "onBlurCapture")
  };
}
Fe(ql, "useFocusOutside");
function Ri() {
  const e = new CustomEvent(ki);
  document.dispatchEvent(e);
}
Fe(Ri, "dispatchUpdate");
function ps(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? fs(o, i) : o.dispatchEvent(i);
}
Fe(ps, "handleAndDispatchCustomEvent");
var lm = Object.defineProperty, gs = (e, t) => lm(e, "name", { value: t, configurable: !0 }), Hr = 0, An = null;
function um(e) {
  return No(), e.children;
}
gs(um, "FocusGuards");
function No() {
  g.useEffect(() => {
    An || (An = { start: Ei(), end: Ei() });
    const { start: e, end: t } = An;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Hr++, () => {
      Hr === 1 && (An?.start.remove(), An?.end.remove(), An = null), Hr = Math.max(0, Hr - 1);
    };
  }, []);
}
gs(No, "useFocusGuards");
function Ei() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
gs(Ei, "createFocusGuard");
var dm = Object.defineProperty, je = (e, t) => dm(e, "name", { value: t, configurable: !0 }), Zo = "focusScope.autoFocusOnMount", Jo = "focusScope.autoFocusOnUnmount", Ba = { bubbles: !1, cancelable: !0 }, Xl = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ je(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...a
    } = t, [c, l] = g.useState(null), d = St(i), u = St(s), f = g.useRef(null), h = me(n, l), v = g.useRef({
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
          c.contains(N) ? f.current = N : Rt(f.current, { select: !0 });
        }, y = function(C) {
          if (v.paused || !c) return;
          const N = C.relatedTarget;
          N !== null && (c.contains(N) || Rt(f.current, { select: !0 }));
        }, x = function(C) {
          if (document.activeElement === document.body)
            for (const I of C)
              I.removedNodes.length > 0 && Rt(c);
        };
        je(b, "handleFocusIn"), je(y, "handleFocusOut"), je(x, "handleMutations"), document.addEventListener("focusin", b), document.addEventListener("focusout", y);
        const S = new MutationObserver(x);
        return c && S.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", b), document.removeEventListener("focusout", y), S.disconnect();
        };
      }
    }, [o, c, v.paused]), g.useEffect(() => {
      if (c) {
        za.add(v);
        const b = document.activeElement;
        if (!c.contains(b)) {
          const x = new CustomEvent(Zo, Ba);
          c.addEventListener(Zo, d), c.dispatchEvent(x), x.defaultPrevented || (Zl(nu(ms(c)), { select: !0 }), document.activeElement === b && Rt(c));
        }
        return () => {
          c.removeEventListener(Zo, d), setTimeout(() => {
            const x = new CustomEvent(Jo, Ba);
            c.addEventListener(Jo, u), c.dispatchEvent(x), x.defaultPrevented || Rt(b ?? document.body, { select: !0 }), c.removeEventListener(Jo, u), za.remove(v);
          }, 0);
        };
      }
    }, [c, d, u, v]);
    const m = g.useCallback(
      (b) => {
        if (!r && !o || v.paused) return;
        const y = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, x = document.activeElement;
        if (y && x) {
          const S = b.currentTarget, [C, N] = Jl(S);
          C && N ? !b.shiftKey && x === N ? (b.preventDefault(), r && Rt(C, { select: !0 })) : b.shiftKey && x === C && (b.preventDefault(), r && Rt(N, { select: !0 })) : x === S && b.preventDefault();
        }
      },
      [r, o, v.paused]
    );
    return /* @__PURE__ */ p(xe.div, { tabIndex: -1, ...a, ref: h, onKeyDown: m });
  }, "FocusScope")
);
function Zl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, { select: t }), document.activeElement !== n) return;
}
je(Zl, "focusFirst");
function Jl(e) {
  const t = ms(e), n = Ai(t, e), r = Ai(t.reverse(), e);
  return [n, r];
}
je(Jl, "getTabbableEdges");
function ms(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ je((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
je(ms, "getTabbableCandidates");
function Ai(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ql(r, { upTo: t })))
      return r;
}
je(Ai, "findVisible");
function Ql(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
je(Ql, "isHidden");
function eu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
je(eu, "isSelectableInput");
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && eu(e) && t && e.select();
  }
}
je(Rt, "focus");
var za = tu();
function tu() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Di(e, t), e.unshift(t);
    },
    remove(t) {
      e = Di(e, t), e[0]?.resume();
    }
  };
}
je(tu, "createFocusScopesStack");
function Di(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
je(Di, "arrayRemove");
function nu(e) {
  return e.filter((t) => t.tagName !== "A");
}
je(nu, "removeLinks");
var fm = Object.defineProperty, hm = (e, t) => fm(e, "name", { value: t, configurable: !0 }), pm = g[" useId ".trim().toString()] || (() => {
}), gm = 0;
function At(e) {
  const [t, n] = g.useState(pm());
  return Xe(() => {
    e || n((r) => r ?? String(gm++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
hm(At, "useId");
const mm = ["top", "right", "bottom", "left"], Qt = Math.min, Dt = Math.max, lo = Math.round, jr = Math.floor, Mt = (e) => ({
  x: e,
  y: e
}), vm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ru(e, t, n) {
  return Dt(e, Qt(t, n));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function en(e) {
  return e.split("-")[0];
}
function Wn(e) {
  return e.split("-")[1];
}
function vs(e) {
  return e === "x" ? "y" : "x";
}
function bs(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ys(e) {
  return vs(Ct(e));
}
function bm(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wn(e), o = ys(e), i = bs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = uo(s)), [s, uo(s)];
}
function ym(e) {
  const t = uo(e);
  return [Mi(e), t, Mi(t)];
}
function Mi(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ha = ["left", "right"], ja = ["right", "left"], wm = ["top", "bottom"], xm = ["bottom", "top"];
function Cm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ja : Ha : t ? Ha : ja;
    case "left":
    case "right":
      return t ? wm : xm;
    default:
      return [];
  }
}
function Sm(e, t, n, r) {
  const o = Wn(e);
  let i = Cm(en(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Mi)))), i;
}
function uo(e) {
  const t = en(e);
  return vm[t] + e.slice(t.length);
}
function Pm(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function ou(e) {
  return typeof e != "number" ? Pm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fo(e) {
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
function Ka(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ct(t), s = ys(t), a = bs(s), c = en(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  const v = Wn(t);
  return v && (h[s] += f * (v === "end" ? 1 : -1) * (n && l ? -1 : 1)), h;
}
async function Im(e, t) {
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
  } = _t(t, e), v = ou(h), b = a[f ? u === "floating" ? "reference" : "floating" : u], y = fo(await i.getClippingRect({
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
  }, N = fo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Nm = 50, km = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Im
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Ka(l, r, c), f = r, h = 0;
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
    }, I && h < Nm && (h++, typeof I == "object" && (I.placement && (f = I.placement), I.rects && (l = I.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: d,
      y: u
    } = Ka(l, f, c)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: v
  };
}, Rm = (e) => ({
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
    const u = ou(d), f = {
      x: n,
      y: r
    }, h = ys(o), v = bs(h), m = await s.getDimensions(l), b = h === "y", y = b ? "top" : "left", x = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", C = i.reference[v] + i.reference[h] - f[h] - i.floating[v], N = f[h] - i.reference[h], I = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = I ? I[S] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(I))) && (P = a.floating[S] || i.floating[v]);
    const w = C / 2 - N / 2, k = P / 2 - m[v] / 2 - 1, E = Qt(u[y], k), D = Qt(u[x], k), _ = P - m[v] - D, B = P / 2 - m[v] / 2 + w, T = ru(E, B, _), W = !c.arrow && Wn(o) != null && B !== T && i.reference[v] / 2 - (B < E ? E : D) - m[v] / 2 < 0, F = W ? B < E ? B - E : B - _ : 0;
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
}), Em = function(e) {
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
      } = _t(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = en(o), x = Ct(a), S = en(a) === a, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), N = f || (S || !m ? [uo(a)] : ym(a)), I = v !== "none";
      !f && I && N.push(...Sm(a, m, v, C));
      const P = [a, ...N], w = await c.detectOverflow(t, b), k = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && k.push(w[y]), u) {
        const T = bm(o, s, C);
        k.push(w[T[0]], w[T[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: k
      }], !k.every((T) => T <= 0)) {
        var D, _;
        const T = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, W = P[T];
        if (W && (!(u === "alignment" ? x !== Ct(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((R) => Ct(R.placement) === x ? R.overflows[0] > 0 : !0)))
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
                  return M === x || // Create a bias to the `y` side axis due to horizontal
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
function Wa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ga(e) {
  return mm.some((t) => e[t] >= 0);
}
const Am = function(e) {
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
          }), a = Wa(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ga(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = Wa(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ga(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, iu = /* @__PURE__ */ new Set(["left", "top"]);
async function Dm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = en(n), a = Wn(n), c = Ct(n) === "y", l = iu.has(s) ? -1 : 1, d = i && c ? -1 : 1, u = _t(t, e);
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
const Mm = function(e) {
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
      } = t, c = await Dm(t, e);
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
}, Om = function(e) {
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
      } = _t(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, l), f = Ct(o), h = vs(f);
      let v = d[h], m = d[f];
      const b = (x, S) => ru(S + u[x === "y" ? "top" : "left"], S, S - u[x === "y" ? "bottom" : "right"]);
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
}, _m = function(e) {
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
      }, h = Ct(s), v = vs(h);
      let m = f[v], b = f[h];
      const y = _t(l, t), x = typeof y == "number" ? {
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
        const N = v === "y" ? "width" : "height", I = iu.has(en(s)), P = a.reference[h] - a.floating[N] + (I && ((S = c.offset) == null ? void 0 : S[h]) || 0) + (I ? 0 : x.crossAxis), w = a.reference[h] + a.reference[N] + (I ? 0 : ((C = c.offset) == null ? void 0 : C[h]) || 0) - (I ? x.crossAxis : 0);
        b < P ? b = P : b > w && (b = w);
      }
      return {
        [v]: m,
        [h]: b
      };
    }
  };
}, Tm = function(e) {
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
      } = _t(e, t), c = await o.detectOverflow(t, a), l = en(n), d = Wn(n), u = Ct(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let v, m;
      l === "top" || l === "bottom" ? (v = l, m = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = l, v = d === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, y = f - c.left - c.right, x = Qt(h - c[v], b), S = Qt(f - c[m], y), C = t.middlewareData.shift, N = !C;
      let I = x, P = S;
      C != null && C.enabled.x && (P = y), C != null && C.enabled.y && (I = b), N && !d && (u ? P = f - 2 * Dt(c.left, c.right) : I = h - 2 * Dt(c.top, c.bottom)), await s({
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
function ko() {
  return typeof window < "u";
}
function Gn(e) {
  return su(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lt(e) {
  var t;
  return (t = (su(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function su(e) {
  return ko() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function Pt(e) {
  return ko() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function sn(e) {
  return ko() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function Va(e) {
  return !ko() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function Ro(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Fm(e) {
  return /^(table|td|th)$/.test(Gn(e));
}
function Eo(e) {
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
const $m = /transform|translate|scale|rotate|perspective|filter/, Lm = /paint|layout|strict|content/, mn = (e) => !!e && e !== "none";
let Qo;
function ws(e) {
  const t = Pt(e) ? It(e) : e;
  return mn(t.transform) || mn(t.translate) || mn(t.scale) || mn(t.rotate) || mn(t.perspective) || !xs() && (mn(t.backdropFilter) || mn(t.filter)) || $m.test(t.willChange || "") || Lm.test(t.contain || "");
}
function Bm(e) {
  let t = yn(e);
  for (; sn(t) && !lr(t); ) {
    if (ws(t))
      return t;
    if (Eo(t))
      return null;
    t = yn(t);
  }
  return null;
}
function xs() {
  return Qo == null && (Qo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Qo;
}
function lr(e) {
  return /^(html|body|#document)$/.test(Gn(e));
}
function It(e) {
  return Ge(e).getComputedStyle(e);
}
function Ao(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yn(e) {
  if (Gn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Va(e) && e.host || // Fallback.
    Lt(e)
  );
  return Va(t) ? t.host : t;
}
function au(e) {
  const t = yn(e);
  return lr(t) ? (e.ownerDocument || e).body : sn(t) && Ro(t) ? t : au(t);
}
function ur(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = au(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ge(o);
  if (i) {
    const a = Oi(s);
    return t.concat(s, s.visualViewport || [], Ro(o) ? o : [], a && n ? ur(a) : []);
  } else
    return t.concat(o, ur(o, [], n));
}
function Oi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cu(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = sn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = lo(n) !== i || lo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Cs(e) {
  return Pt(e) ? e : e.contextElement;
}
function $n(e) {
  const t = Cs(e);
  if (!sn(t))
    return Mt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = cu(t);
  let s = (i ? lo(n.width) : n.width) / r, a = (i ? lo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const zm = /* @__PURE__ */ Mt(0);
function lu(e) {
  const t = Ge(e);
  return !xs() || !t.visualViewport ? zm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hm(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === Ge(e);
}
function wn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Cs(e);
  let s = Mt(1);
  t && (r ? Pt(r) && (s = $n(r)) : s = $n(e));
  const a = Hm(i, n, r) ? lu(i) : Mt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i && r) {
    const f = Ge(i), h = Pt(r) ? Ge(r) : r;
    let v = f, m = Oi(v);
    for (; m && h !== v; ) {
      const b = $n(m), y = m.getBoundingClientRect(), x = It(m), S = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * b.x, C = y.top + (m.clientTop + parseFloat(x.paddingTop)) * b.y;
      c *= b.x, l *= b.y, d *= b.x, u *= b.y, c += S, l += C, v = Ge(m), m = Oi(v);
    }
  }
  return fo({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function Do(e, t) {
  const n = Ao(e).scrollLeft;
  return t ? t.left + n : wn(Lt(e)).left + n;
}
function uu(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Do(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function jm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Lt(r), a = t ? Eo(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Mt(1);
  const d = Mt(0), u = sn(r);
  if ((u || !i) && ((Gn(r) !== "body" || Ro(s)) && (c = Ao(r)), u)) {
    const h = wn(r);
    l = $n(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !i ? uu(s, c) : Mt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + f.y
  };
}
function Km(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Wm(e) {
  const t = Ao(e), n = e.ownerDocument.body, r = Dt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = Dt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + Do(e);
  const s = -t.scrollTop;
  return It(n).direction === "rtl" && (i += Dt(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: s
  };
}
const Gm = 25;
function Vm(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = Ge(e), i = Lt(e), s = o.visualViewport;
  let a = i.clientWidth, c = i.clientHeight, l = 0, d = 0;
  if (s) {
    const f = !xs() || t === "fixed";
    r ? f || (l = -s.offsetLeft, d = -s.offsetTop) : (a = s.width, c = s.height, f && (l = s.offsetLeft, d = s.offsetTop));
  }
  if (Do(i) <= 0) {
    const f = i.ownerDocument, h = f.body, v = getComputedStyle(h), m = f.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, b = Math.abs(i.clientWidth - h.clientWidth - m), y = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? b / 2 : b;
    y <= Gm && (a -= y);
  }
  return {
    width: a,
    height: c,
    x: l,
    y: d
  };
}
function Um(e, t) {
  const n = wn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $n(e), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ua(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = Vm(e, n, t);
  else if (t === "document")
    r = Wm(Lt(e));
  else if (Pt(t))
    r = Um(t, n);
  else {
    const o = lu(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return fo(r);
}
function Ym(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ur(e, [], !1).filter((a) => Pt(a) && Gn(a) !== "body"), o = null;
  const i = It(e).position === "fixed";
  let s = i ? yn(e) : e;
  for (; Pt(s) && !lr(s); ) {
    const a = It(s), c = ws(s), l = o ? o.position : i ? "fixed" : "";
    !c && (l === "fixed" || l === "absolute" && a.position === "static") ? r = r.filter((u) => u !== s) : o = a, s = yn(s);
  }
  return t.set(e, r), r;
}
function qm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Eo(t) ? [] : Ym(t, this._c) : [].concat(n), r], a = Ua(t, s[0], o);
  let c = a.top, l = a.right, d = a.bottom, u = a.left;
  for (let f = 1; f < s.length; f++) {
    const h = Ua(t, s[f], o);
    c = Dt(h.top, c), l = Qt(h.right, l), d = Qt(h.bottom, d), u = Dt(h.left, u);
  }
  return {
    width: l - u,
    height: d - c,
    x: u,
    y: c
  };
}
function Xm(e) {
  const {
    width: t,
    height: n
  } = cu(e);
  return {
    width: t,
    height: n
  };
}
function Zm(e, t, n) {
  const r = sn(t), o = Lt(t), i = n === "fixed", s = wn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Mt(0);
  if ((r || !i) && ((Gn(t) !== "body" || Ro(o)) && (a = Ao(t)), r)) {
    const f = wn(t, !0, i, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  }
  !r && o && (c.x = Do(o));
  const l = o && !r && !i ? uu(o, a) : Mt(0), d = s.left + a.scrollLeft - c.x - l.x, u = s.top + a.scrollTop - c.y - l.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function ei(e) {
  return It(e).position === "static";
}
function Ya(e, t) {
  if (!sn(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Lt(e) === n && (n = n.ownerDocument.body), n;
}
function du(e, t) {
  const n = Ge(e);
  if (Eo(e))
    return n;
  if (!sn(e)) {
    let o = yn(e);
    for (; o && !lr(o); ) {
      if (Pt(o) && !ei(o))
        return o;
      o = yn(o);
    }
    return n;
  }
  let r = Ya(e, t);
  for (; r && Fm(r) && ei(r); )
    r = Ya(r, t);
  return r && lr(r) && ei(r) && !ws(r) ? n : r || Bm(e) || n;
}
const Jm = async function(e) {
  const t = this.getOffsetParent || du, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Zm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Qm(e) {
  return It(e).direction === "rtl";
}
const ev = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jm,
  getDocumentElement: Lt,
  getClippingRect: qm,
  getOffsetParent: du,
  getElementRects: Jm,
  getClientRects: Km,
  getDimensions: Xm,
  getScale: $n,
  isElement: Pt,
  isRTL: Qm
};
function fu(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tv(e, t, n) {
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
      top: v,
      width: m,
      height: b
    } = f;
    if (d || t(), !m || !b)
      return;
    const y = jr(v), x = jr(i.clientWidth - (h + m)), S = jr(i.clientHeight - (v + b)), C = jr(h), I = {
      rootMargin: -y + "px " + -x + "px " + -S + "px " + -C + "px",
      threshold: Dt(0, Qt(1, u)) || 1
    };
    let P = !0;
    function w(k) {
      const E = k[0].intersectionRatio;
      if (!fu(f, e.getBoundingClientRect()))
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
  const c = Ge(e), l = () => a(n);
  return c.addEventListener("resize", l), a(!0), () => {
    c.removeEventListener("resize", l), s();
  };
}
function nv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Cs(e), d = o || i ? [...l ? ur(l) : [], ...t ? ur(t) : []] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n), i && y.addEventListener("resize", n);
  });
  const u = l && a ? tv(l, n, i) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === l && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), t && h.observe(t));
  let v, m = c ? wn(e) : null;
  c && b();
  function b() {
    const y = wn(e);
    m && !fu(m, y) && n(), m = y, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const rv = Mm, ov = Om, iv = Em, sv = Tm, av = Am, qa = Rm, cv = _m, lv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, i = {
    ...ev,
    ...o.platform,
    _c: r
  };
  return km(e, t, {
    ...o,
    platform: i
  });
};
var uv = typeof document < "u", dv = function() {
}, Zr = uv ? $c : dv;
function ho(e, t) {
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
        if (!ho(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !ho(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xa(e, t) {
  const n = hu(e);
  return Math.round(t * n) / n;
}
function ti(e) {
  const t = g.useRef(e);
  return Zr(() => {
    t.current = e;
  }), t;
}
function fv(e) {
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
  ho(f, r) || h(r);
  const [v, m] = g.useState(null), [b, y] = g.useState(null), x = g.useCallback((R) => {
    R !== I.current && (I.current = R, m(R));
  }, []), S = g.useCallback((R) => {
    R !== P.current && (P.current = R, y(R));
  }, []), C = i || v, N = s || b, I = g.useRef(null), P = g.useRef(null), w = g.useRef(d), k = c != null, E = ti(c), D = ti(o), _ = ti(l), B = g.useCallback(() => {
    if (!I.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    D.current && (R.platform = D.current), lv(I.current, P.current, R).then((M) => {
      const A = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      T.current && !ho(w.current, A) && (w.current = A, Ui.flushSync(() => {
        u(A);
      }));
    });
  }, [f, t, n, D, _]);
  Zr(() => {
    l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, u((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const T = g.useRef(!1);
  Zr(() => (T.current = !0, () => {
    T.current = !1;
  }), []), Zr(() => {
    if (C && (I.current = C), N && (P.current = N), C && N) {
      if (E.current)
        return E.current(C, N, B);
      B();
    }
  }, [C, N, B, E, k]);
  const W = g.useMemo(() => ({
    reference: I,
    floating: P,
    setReference: x,
    setFloating: S
  }), [x, S]), F = g.useMemo(() => ({
    reference: C,
    floating: N
  }), [C, N]), $ = g.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return R;
    const M = Xa(F.floating, d.x), A = Xa(F.floating, d.y);
    return a ? {
      ...R,
      transform: "translate(" + M + "px, " + A + "px)",
      ...hu(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: A
    };
  }, [n, a, F.floating, d.x, d.y]);
  return g.useMemo(() => ({
    ...d,
    update: B,
    refs: W,
    elements: F,
    floatingStyles: $
  }), [d, B, W, F, $]);
}
const hv = (e) => {
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
      return r && t(r) ? r.current != null ? qa({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qa({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, pv = (e, t) => {
  const n = rv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, gv = (e, t) => {
  const n = ov(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, mv = (e, t) => ({
  fn: cv(e).fn,
  options: [e, t]
}), vv = (e, t) => {
  const n = iv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, bv = (e, t) => {
  const n = sv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, yv = (e, t) => {
  const n = av(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, wv = (e, t) => {
  const n = hv(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var xv = Object.defineProperty, Cv = (e, t) => xv(e, "name", { value: t, configurable: !0 });
function Mo(e) {
  const [t, n] = g.useState(void 0);
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
Cv(Mo, "useSize");
var Sv = Object.defineProperty, Zt = (e, t) => Sv(e, "name", { value: t, configurable: !0 }), pu = "Popper", [gu, mu] = /* @__PURE__ */ pt(pu), [Pv, vu] = gu(pu), Iv = /* @__PURE__ */ Zt((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null), [i, s] = g.useState(void 0);
  return /* @__PURE__ */ p(
    Pv,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), Nv = "PopperAnchor", kv = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Zt(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...i } = t, s = vu(Nv, r), a = g.useRef(null), c = s.onAnchorChange, l = g.useCallback(
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
    const f = s.placementState && Oo(s.placementState), h = f?.[0], v = f?.[1];
    return o ? null : /* @__PURE__ */ p(
      xe.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": v,
        ...i,
        ref: d
      }
    );
  }, "PopperAnchor")
), bu = "PopperContent", [Rv, XS] = gu(bu), Ev = /* @__PURE__ */ g.forwardRef(
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
      updatePositionStrategy: v = "optimized",
      onPlaced: m,
      ...b
    } = t, y = vu(bu, r), [x, S] = g.useState(null), C = me(n, S), [N, I] = g.useState(null), P = Mo(N), w = P?.width ?? 0, k = P?.height ?? 0, E = o + (s !== "center" ? "-" + s : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, _ = Array.isArray(d) ? d : [d], B = _.length > 0, T = {
      padding: D,
      boundary: _.filter(yu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: W, floatingStyles: F, placement: $, isPositioned: R, middlewareData: M } = fv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: /* @__PURE__ */ Zt((...J) => nv(...J, {
        animationFrame: v === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: y.anchor
      },
      middleware: [
        pv({ mainAxis: i + k, alignmentAxis: a }),
        l && gv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? mv() : void 0,
          ...T
        }),
        l && vv({ ...T }),
        bv({
          ...T,
          apply: /* @__PURE__ */ Zt(({ elements: J, rects: Z, availableWidth: te, availableHeight: re }) => {
            const { width: be, height: oe } = Z.reference, Re = J.floating.style;
            Re.setProperty("--radix-popper-available-width", `${te}px`), Re.setProperty("--radix-popper-available-height", `${re}px`), Re.setProperty("--radix-popper-anchor-width", `${be}px`), Re.setProperty("--radix-popper-anchor-height", `${oe}px`);
          }, "apply")
        }),
        N && wv({ element: N, padding: c }),
        Av({ arrowWidth: w, arrowHeight: k }),
        h && yv({
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
    const [j, K] = Oo($), H = St(m);
    Xe(() => {
      R && H?.();
    }, [R, H]);
    const V = M.arrow?.x, Y = M.arrow?.y, z = M.arrow?.centerOffset !== 0, [G, U] = g.useState();
    return Xe(() => {
      x && U(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p(
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
        children: /* @__PURE__ */ p(
          Rv,
          {
            scope: r,
            placedSide: j,
            placedAlign: K,
            onArrowChange: I,
            arrowX: V,
            arrowY: Y,
            shouldHideArrow: z,
            children: /* @__PURE__ */ p(
              xe.div,
              {
                "data-side": j,
                "data-align": K,
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
function yu(e) {
  return e !== null;
}
Zt(yu, "isNotNull");
var Av = /* @__PURE__ */ Zt((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = Oo(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", m = "";
    return l === "bottom" ? (v = s ? u : `${f}px`, m = `${-c}px`) : l === "top" ? (v = s ? u : `${f}px`, m = `${r.floating.height + c}px`) : l === "right" ? (v = `${-c}px`, m = s ? u : `${h}px`) : l === "left" && (v = `${r.floating.width + c}px`, m = s ? u : `${h}px`), { data: { x: v, y: m } };
  }
}), "transformOrigin");
function Oo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Zt(Oo, "getSideAndAlignFromPlacement");
var wu = Iv, Dv = kv, Mv = Ev, Ov = Object.defineProperty, _v = (e, t) => Ov(e, "name", { value: t, configurable: !0 }), xu = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ _v(function(t, n) {
    const { container: r, ...o } = t, [i, s] = g.useState(!1);
    Xe(() => s(!0), []);
    const a = r || i && globalThis?.document?.body;
    return a ? Ui.createPortal(/* @__PURE__ */ p(xe.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), Tv = Object.defineProperty, Tt = (e, t) => Tv(e, "name", { value: t, configurable: !0 });
function Cu(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
Tt(Cu, "useStateMachine");
var Vn = /* @__PURE__ */ Tt((e) => {
  const { present: t, children: n } = e, r = Su(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), i = Pu(r.ref, Iu(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: i }) : null;
}, "Presence");
function Su(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), i = g.useRef("none"), s = g.useRef(void 0), a = e ? "mounted" : "unmounted", [c, l] = Cu(a, {
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
    c === "mounted" ? (i.current = s.current ?? _n(r.current), s.current = void 0) : i.current = "none";
  }, [c]), Xe(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, v = _n(d);
      e ? (s.current = v, l("MOUNT")) : v === "none" || d?.display === "none" ? l("UNMOUNT") : l(u && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Xe(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ Tt((v) => {
        const b = _n(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && b && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Tt((v) => {
        v.target === t && (i.current = _n(r.current));
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
        r.current = u, s.current = _n(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
Tt(Su, "usePresence");
function _i(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Tt(_i, "setRef");
function Pu(...e) {
  const t = g.useRef(e);
  return t.current = e, g.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const i = r.map((s) => {
      const a = _i(s, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const a = i[s];
          typeof a == "function" ? a() : _i(r[s], null);
        }
      };
  }, []);
}
Tt(Pu, "useStableComposedRefs");
function _n(e) {
  return e?.animationName || "none";
}
Tt(_n, "getAnimationName");
function Iu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Tt(Iu, "getElementRef");
var Fv = Object.defineProperty, Ss = (e, t) => Fv(e, "name", { value: t, configurable: !0 }), ni = !1;
function Nu() {
  const [e, t] = g.useState(ni);
  return g.useEffect(() => {
    ni || (ni = !0, t(!0));
  }, []), e;
}
Ss(Nu, "useIsHydrated");
var ku = g[" useSyncExternalStore ".trim().toString()];
function Ru() {
  return () => {
  };
}
Ss(Ru, "subscribe");
function Eu() {
  return ku(
    Ru,
    () => !0,
    () => !1
  );
}
Ss(Eu, "useIsHydratedModern");
var $v = typeof ku == "function" ? Eu : Nu, Lv = Object.defineProperty, Sn = (e, t) => Lv(e, "name", { value: t, configurable: !0 }), ri = "rovingFocusGroup.onEntryFocus", Bv = { bubbles: !1, cancelable: !0 }, _o = "RovingFocusGroup", [Ti, Au, zv] = /* @__PURE__ */ Po(_o), [Hv, Du] = /* @__PURE__ */ pt(
  _o,
  [zv]
), [jv, Kv] = Hv(_o), Wv = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Sn(function(t, n) {
    return /* @__PURE__ */ p(Ti.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Ti.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Gv, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Gv = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ Sn(function(t, n) {
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
  } = t, h = g.useRef(null), v = me(n, h), m = Io(s), [b, y] = Cn({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: _o
  }), [x, S] = g.useState(!1), C = St(d), N = Au(r), I = g.useRef(!1), [P, w] = g.useState(0);
  return g.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(ri, C), () => k.removeEventListener(ri, C);
  }, [C]), /* @__PURE__ */ p(
    jv,
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
        xe.div,
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
              const D = new CustomEvent(ri, Bv);
              if (k.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const _ = N().filter(($) => $.focusable), B = _.find(($) => $.active), T = _.find(($) => $.id === b), F = [B, T, ..._].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Ps(F, u);
              }
            }
            I.current = !1;
          }),
          onBlur: ne(t.onBlur, () => S(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Vv = "RovingFocusGroupItem", Uv = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Sn(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: i = !1,
      tabStopId: s,
      children: a,
      ...c
    } = t, l = At(), d = s || l, u = Kv(Vv, r), f = u.currentTabStopId === d, h = Au(r), { onFocusableItemAdd: v, onFocusableItemRemove: m, currentTabStopId: b } = u, y = $v();
    return Xe(() => {
      if (!(!y || !o))
        return v(), () => m();
    }, [y, o, v, m]), g.useEffect(() => {
      if (!(y || !o))
        return v(), () => m();
    }, [y, o, v, m]), /* @__PURE__ */ p(
      Ti.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: o,
        active: i,
        children: /* @__PURE__ */ p(
          xe.span,
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
              const S = Ou(x, u.orientation, u.dir);
              if (S !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let N = h().filter((I) => I.focusable).map((I) => I.ref.current);
                if (S === "last") N.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && N.reverse();
                  const I = N.indexOf(x.currentTarget);
                  N = u.loop ? _u(N, I + 1) : N.slice(I + 1);
                }
                setTimeout(() => Ps(N));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: b != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Yv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Mu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
Sn(Mu, "getDirectionAwareKey");
function Ou(e, t, n) {
  const r = Mu(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Yv[r];
}
Sn(Ou, "getFocusIntent");
function Ps(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Sn(Ps, "focusFirst");
function _u(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
Sn(_u, "wrapArray");
var qv = Wv, Xv = Uv, Zv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Dn = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Wr = {}, oi = 0, Tu = function(e) {
  return e && (e.host || Tu(e.parentNode));
}, Jv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Tu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Qv = function(e, t, n, r) {
  var o = Jv(t, Array.isArray(e) ? e : [e]);
  Wr[n] || (Wr[n] = /* @__PURE__ */ new WeakMap());
  var i = Wr[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || a.has(u) || (a.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(r), v = h !== null && h !== "false", m = (Dn.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          Dn.set(f, m), i.set(f, b), s.push(f), m === 1 && v && Kr.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return d(t), a.clear(), oi++, function() {
    s.forEach(function(u) {
      var f = Dn.get(u) - 1, h = i.get(u) - 1;
      Dn.set(u, f), i.set(u, h), f || (Kr.has(u) || u.removeAttribute(r), Kr.delete(u)), h || u.removeAttribute(n);
    }), oi--, oi || (Dn = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Wr = {});
  };
}, Fu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Zv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Qv(r, o, n, "aria-hidden")) : function() {
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
function $u(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function eb(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Jr = "right-scroll-bar-position", Qr = "width-before-scroll-bar", tb = "with-scroll-bars-hidden", nb = "--removed-body-scroll-bar-size";
function ii(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rb(e, t) {
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
var ob = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Za = /* @__PURE__ */ new WeakMap();
function ib(e, t) {
  var n = rb(null, function(r) {
    return e.forEach(function(o) {
      return ii(o, r);
    });
  });
  return ob(function() {
    var r = Za.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || ii(a, null);
      }), i.forEach(function(a) {
        o.has(a) || ii(a, s);
      });
    }
    Za.set(n, e);
  }, [e]), n;
}
function sb(e) {
  return e;
}
function ab(e, t) {
  t === void 0 && (t = sb);
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
function cb(e) {
  e === void 0 && (e = {});
  var t = ab(null);
  return t.options = xt({ async: !0, ssr: !1 }, e), t;
}
var Lu = function(e) {
  var t = e.sideCar, n = $u(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, xt({}, n));
};
Lu.isSideCarExport = !0;
function lb(e, t) {
  return e.useMedium(t), Lu;
}
var Bu = cb(), si = function() {
}, To = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: si,
    onWheelCapture: si,
    onTouchMoveCapture: si
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, b = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, S = e.gapMode, C = $u(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = f, I = ib([n, t]), P = xt(xt({}, C), o);
  return g.createElement(
    g.Fragment,
    null,
    d && g.createElement(N, { sideCar: Bu, removeScrollBar: l, shards: u, noRelative: h, noIsolation: v, inert: m, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: S }),
    s ? g.cloneElement(g.Children.only(a), xt(xt({}, P), { ref: I })) : g.createElement(x, xt({}, P, { className: c, ref: I }), a)
  );
});
To.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
To.classNames = {
  fullWidth: Qr,
  zeroRight: Jr
};
var ub = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function db() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ub();
  return t && e.setAttribute("nonce", t), e;
}
function fb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function hb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pb = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = db()) && (fb(t, n), hb(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, gb = function() {
  var e = pb();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, zu = function() {
  var e = gb(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, mb = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ai = function(e) {
  return parseInt(e || "", 10) || 0;
}, vb = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ai(n), ai(r), ai(o)];
}, bb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return mb;
  var t = vb(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yb = zu(), Ln = "data-scroll-locked", wb = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(tb, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ln, `] {
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
  
  .`).concat(Jr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Jr, " .").concat(Jr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Qr, " .").concat(Qr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ln, `] {
    `).concat(nb, ": ").concat(a, `px;
  }
`);
}, Ja = function() {
  var e = parseInt(document.body.getAttribute(Ln) || "0", 10);
  return isFinite(e) ? e : 0;
}, xb = function() {
  g.useEffect(function() {
    return document.body.setAttribute(Ln, (Ja() + 1).toString()), function() {
      var e = Ja() - 1;
      e <= 0 ? document.body.removeAttribute(Ln) : document.body.setAttribute(Ln, e.toString());
    };
  }, []);
}, Cb = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  xb();
  var i = g.useMemo(function() {
    return bb(o);
  }, [o]);
  return g.createElement(yb, { styles: wb(i, !t, o, n ? "" : "!important") });
}, Fi = !1;
if (typeof window < "u")
  try {
    var Gr = Object.defineProperty({}, "passive", {
      get: function() {
        return Fi = !0, !0;
      }
    });
    window.addEventListener("test", Gr, Gr), window.removeEventListener("test", Gr, Gr);
  } catch {
    Fi = !1;
  }
var Mn = Fi ? { passive: !1 } : !1, Sb = function(e) {
  return e.tagName === "TEXTAREA";
}, Hu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Sb(e) && n[t] === "visible")
  );
}, Pb = function(e) {
  return Hu(e, "overflowY");
}, Ib = function(e) {
  return Hu(e, "overflowX");
}, Qa = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ju(e, r);
    if (o) {
      var i = Ku(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Nb = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, kb = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ju = function(e, t) {
  return e === "v" ? Pb(t) : Ib(t);
}, Ku = function(e, t) {
  return e === "v" ? Nb(t) : kb(t);
}, Rb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Eb = function(e, t, n, r, o) {
  var i = Rb(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, d = s > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var h = Ku(e, a), v = h[0], m = h[1], b = h[2], y = m - b - i * v;
    (v || y) && ju(e, a) && (u += y, f += v);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (l = !0), l;
}, Vr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ec = function(e) {
  return [e.deltaX, e.deltaY];
}, tc = function(e) {
  return e && "current" in e ? e.current : e;
}, Ab = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Db = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mb = 0, On = [];
function Ob(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(Mb++)[0], i = g.useState(zu)[0], s = g.useRef(e);
  g.useEffect(function() {
    s.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = eb([e.lockRef.current], (e.shards || []).map(tc), !0).filter(Boolean);
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
    var y = Vr(m), x = n.current, S = "deltaX" in m ? m.deltaX : x[0] - y[0], C = "deltaY" in m ? m.deltaY : x[1] - y[1], N, I = m.target, P = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && P === "h" && I.type === "range")
      return !1;
    var w = window.getSelection(), k = w && w.anchorNode, E = k ? k === I || k.contains(I) : !1;
    if (E)
      return !1;
    var D = Qa(P, I);
    if (!D)
      return !0;
    if (D ? N = P : (N = P === "v" ? "h" : "v", D = Qa(P, I)), !D)
      return !1;
    if (!r.current && "changedTouches" in m && (S || C) && (r.current = N), !N)
      return !0;
    var _ = r.current || N;
    return Eb(_, b, m, _ === "h" ? S : C);
  }, []), c = g.useCallback(function(m) {
    var b = m;
    if (!(!On.length || On[On.length - 1] !== i)) {
      var y = "deltaY" in b ? ec(b) : Vr(b), x = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && Ab(N.delta, y);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var S = (s.current.shards || []).map(tc).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), C = S.length > 0 ? a(b, S[0]) : !s.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = g.useCallback(function(m, b, y, x) {
    var S = { name: m, delta: b, target: y, should: x, shadowParent: _b(y) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), d = g.useCallback(function(m) {
    n.current = Vr(m), r.current = void 0;
  }, []), u = g.useCallback(function(m) {
    l(m.type, ec(m), m.target, a(m, e.lockRef.current));
  }, []), f = g.useCallback(function(m) {
    l(m.type, Vr(m), m.target, a(m, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return On.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Mn), document.addEventListener("touchmove", c, Mn), document.addEventListener("touchstart", d, Mn), function() {
      On = On.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", c, Mn), document.removeEventListener("touchmove", c, Mn), document.removeEventListener("touchstart", d, Mn);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(i, { styles: Db(o) }) : null,
    h ? g.createElement(Cb, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function _b(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Tb = lb(Bu, Ob);
var Is = g.forwardRef(function(e, t) {
  return g.createElement(To, xt({}, e, { ref: t, sideCar: Tb }));
});
Is.classNames = To.classNames;
var Fb = Object.defineProperty, ge = (e, t) => Fb(e, "name", { value: t, configurable: !0 }), $i = ["Enter", " "], $b = ["ArrowDown", "PageUp", "Home"], Wu = ["ArrowUp", "PageDown", "End"], Lb = [...$b, ...Wu], Bb = {
  ltr: [...$i, "ArrowRight"],
  rtl: [...$i, "ArrowLeft"]
}, zb = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Fo = "Menu", [dr, Hb, jb] = /* @__PURE__ */ Po(Fo), [Pn, Gu] = /* @__PURE__ */ pt(Fo, [
  jb,
  mu,
  Du
]), $o = mu(), Vu = Du(), [Uu, an] = Pn(Fo), [Kb, br] = Pn(Fo), Wb = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = $o(t), [c, l] = g.useState(null), d = g.useRef(!1), u = St(i), f = Io(o);
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
  }, [n, u]), /* @__PURE__ */ p(wu, { ...a, children: /* @__PURE__ */ p(
    Uu,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ p(
        Kb,
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
}, "Menu"), Yu = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t, i = $o(r);
    return /* @__PURE__ */ p(Dv, { ...i, ...o, ref: n });
  }, "MenuAnchor")
), qu = "MenuPortal", [Gb, Xu] = Pn(qu, {
  forceMount: void 0
}), Vb = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = an(qu, t);
  return /* @__PURE__ */ p(Gb, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Vn, { present: n || i.open, children: /* @__PURE__ */ p(xu, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), dt = "MenuContent", [Ub, Ns] = Pn(dt), Yb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = Xu(dt, t.__scopeMenu), { forceMount: o = r.forceMount, ...i } = t, s = an(dt, t.__scopeMenu), a = br(dt, t.__scopeMenu);
    return /* @__PURE__ */ p(dr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(Vn, { present: o || s.open, children: /* @__PURE__ */ p(dr.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ p(qb, { ...i, ref: n }) : /* @__PURE__ */ p(Xb, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), qb = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const r = an(dt, t.__scopeMenu), o = g.useRef(null), i = me(n, o);
    return g.useEffect(() => {
      const s = o.current;
      if (s) return Fu(s);
    }, []), /* @__PURE__ */ p(
      ks,
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
), Xb = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ge(function(t, n) {
  const r = an(dt, t.__scopeMenu);
  return /* @__PURE__ */ p(
    ks,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Zb = /* @__PURE__ */ Jt("MenuContent.ScrollLock"), ks = /* @__PURE__ */ g.forwardRef(
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
    } = t, y = an(dt, r), x = br(dt, r), S = $o(r), C = Vu(r), N = Hb(r), [I, P] = g.useState(null), w = g.useRef(null), k = me(n, w, y.onContentChange), E = g.useRef(0), D = g.useRef(""), _ = g.useRef(0), B = g.useRef(null), T = g.useRef("right"), W = g.useRef(0), F = m ? Is : g.Fragment, $ = m ? { as: Zb, allowPinchZoom: !0 } : void 0, R = /* @__PURE__ */ ge((A) => {
      const j = D.current + A, K = N().filter((U) => !U.disabled), H = document.activeElement, V = K.find((U) => U.ref.current === H)?.textValue, Y = K.map((U) => U.textValue), z = rd(Y, j, V), G = K.find((U) => U.textValue === z)?.ref.current;
      (/* @__PURE__ */ ge((function U(J) {
        D.current = J, window.clearTimeout(E.current), J !== "" && (E.current = window.setTimeout(() => U(""), 1e3));
      }), "updateSearch"))(j), G && setTimeout(() => G.focus());
    }, "handleTypeaheadSearch");
    g.useEffect(() => () => window.clearTimeout(E.current), []), No();
    const M = g.useCallback((A) => T.current === B.current?.side && id(A, B.current?.area), []);
    return /* @__PURE__ */ p(
      Ub,
      {
        scope: r,
        searchRef: D,
        onItemEnter: g.useCallback(
          (A) => {
            M(A) && A.preventDefault();
          },
          [M]
        ),
        onItemLeave: g.useCallback(
          (A) => {
            M(A) || (w.current?.focus(), P(null));
          },
          [M]
        ),
        onTriggerLeave: g.useCallback(
          (A) => {
            M(A) && A.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: g.useCallback((A) => {
          B.current = A;
        }, []),
        children: /* @__PURE__ */ p(F, { ...$, children: /* @__PURE__ */ p(
          Xl,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: ne(s, (A) => {
              A.preventDefault(), w.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ p(
              Vl,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ p(
                  qv,
                  {
                    asChild: !0,
                    ...C,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: ne(l, (A) => {
                      x.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      Mv,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Es(y.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...S,
                        ...b,
                        ref: k,
                        style: { outline: "none", ...b.style },
                        onKeyDown: ne(b.onKeyDown, (A) => {
                          const K = A.target.closest("[data-radix-menu-content]") === A.currentTarget, H = A.ctrlKey || A.altKey || A.metaKey, V = A.key.length === 1;
                          K && (A.key === "Tab" && A.preventDefault(), !H && V && R(A.key));
                          const Y = w.current;
                          if (A.target !== Y || !Lb.includes(A.key)) return;
                          A.preventDefault();
                          const G = N().filter((U) => !U.disabled).map((U) => U.ref.current);
                          Wu.includes(A.key) && G.reverse(), td(G);
                        }),
                        onBlur: ne(t.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout(E.current), D.current = "");
                        }),
                        onPointerMove: ne(
                          t.onPointerMove,
                          Hn((A) => {
                            const j = A.target, K = W.current !== A.clientX;
                            if (A.currentTarget.contains(j) && K) {
                              const H = A.clientX > W.current ? "right" : "left";
                              T.current = H, W.current = A.clientX;
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
), Jb = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ p(xe.div, { ...o, ref: n });
  }, "MenuLabel")
), Li = "MenuItem", nc = "menu.itemSelect", Rs = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...i } = t, s = g.useRef(null), a = br(Li, t.__scopeMenu), c = Ns(Li, t.__scopeMenu), l = me(n, s), d = g.useRef(!1), u = /* @__PURE__ */ ge(() => {
      const f = s.current;
      if (!r && f) {
        const h = new CustomEvent(nc, { bubbles: !0, cancelable: !0 });
        f.addEventListener(nc, (v) => o?.(v), { once: !0 }), fs(f, h), h.defaultPrevented ? d.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ p(
      Zu,
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
          r || f.target !== f.currentTarget || c.searchRef.current !== "" && f.key === " " || $i.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), Zu = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: i, ...s } = t, a = Ns(Li, r), c = Vu(r), l = g.useRef(null), d = me(n, l), [u, f] = g.useState(!1), [h, v] = g.useState("");
    return g.useEffect(() => {
      const m = l.current;
      m && v((m.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ p(
      dr.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: i ?? h,
        children: /* @__PURE__ */ p(Xv, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ p(
          xe.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: ne(
              t.onPointerMove,
              Hn((m) => {
                o ? a.onItemLeave(m) : (a.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ne(
              t.onPointerLeave,
              Hn((m) => a.onItemLeave(m))
            ),
            onFocus: ne(t.onFocus, () => f(!0)),
            onBlur: ne(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), Qb = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { checked: r = !1, onCheckedChange: o, ...i } = t;
    return /* @__PURE__ */ p(Ju, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ p(
      Rs,
      {
        role: "menuitemcheckbox",
        "aria-checked": po(r) ? "mixed" : r,
        ...i,
        ref: n,
        "data-state": As(r),
        onSelect: ne(
          i.onSelect,
          () => o?.(po(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), ey = "MenuRadioGroup", [ZS, ty] = Pn(
  ey,
  { value: void 0, onValueChange: /* @__PURE__ */ ge(() => {
  }, "onValueChange") }
), ny = "MenuRadioItem", ry = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { value: r, ...o } = t, i = ty(ny, t.__scopeMenu), s = r === i.value;
    return /* @__PURE__ */ p(Ju, { scope: t.__scopeMenu, checked: s, children: /* @__PURE__ */ p(
      Rs,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": As(s),
        onSelect: ne(
          o.onSelect,
          () => i.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), oy = "MenuItemIndicator", [Ju, JS] = Pn(
  oy,
  { checked: !1 }
), iy = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ p(
      xe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), Qu = "MenuSub", [sy, ed] = Pn(Qu), ay = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = an(Qu, t), s = $o(t), [a, c] = g.useState(null), [l, d] = g.useState(null), u = St(o);
  return g.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ p(wu, { ...s, children: /* @__PURE__ */ p(
    Uu,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ p(
        sy,
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
}, "MenuSub"), Ur = "MenuSubTrigger", cy = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = an(Ur, t.__scopeMenu), o = br(Ur, t.__scopeMenu), i = ed(Ur, t.__scopeMenu), s = Ns(Ur, t.__scopeMenu), a = g.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: t.__scopeMenu }, u = g.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    g.useEffect(() => u, [u]), g.useEffect(() => {
      const h = c.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [c, l]);
    const f = me(n, i.onTriggerChange);
    return /* @__PURE__ */ p(Yu, { asChild: !0, ...d, children: /* @__PURE__ */ p(
      Zu,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": r.open ? i.contentId : void 0,
        "data-state": Es(r.open),
        ...t,
        ref: f,
        onClick: (h) => {
          t.onClick?.(h), !(t.disabled || h.defaultPrevented) && (h.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: ne(
          t.onPointerMove,
          Hn((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !t.disabled && !r.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: ne(
          t.onPointerLeave,
          Hn((h) => {
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
          t.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || Bb[o.dir].includes(h.key) && (r.onOpenChange(!0), r.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), ly = "MenuSubContent", uy = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = Xu(dt, t.__scopeMenu), { forceMount: o = r.forceMount, align: i = "start", ...s } = t, a = an(dt, t.__scopeMenu), c = br(dt, t.__scopeMenu), l = ed(ly, t.__scopeMenu), d = g.useRef(null), u = me(n, d);
    return /* @__PURE__ */ p(dr.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(Vn, { present: o || a.open, children: /* @__PURE__ */ p(dr.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ p(
      ks,
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
          const h = f.currentTarget.contains(f.target), v = zb[c.dir].includes(f.key);
          h && v && (a.onOpenChange(!1), l.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function Es(e) {
  return e ? "open" : "closed";
}
ge(Es, "getOpenState");
function po(e) {
  return e === "indeterminate";
}
ge(po, "isIndeterminate");
function As(e) {
  return po(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
ge(As, "getCheckedState");
function td(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
ge(td, "focusFirst");
function nd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
ge(nd, "wrapArray");
function rd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = nd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
ge(rd, "getNextMatch");
function od(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], c = t[s], l = a.x, d = a.y, u = c.x, f = c.y;
    d > r != f > r && n < (u - l) * (r - d) / (f - d) + l && (o = !o);
  }
  return o;
}
ge(od, "isPointInPolygon");
function id(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return od(n, t);
}
ge(id, "isPointerInGraceArea");
function Hn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
ge(Hn, "whenMouse");
var dy = Wb, fy = Yu, hy = Vb, py = Yb, gy = Jb, my = Rs, vy = Qb, by = ry, yy = iy, wy = ay, xy = cy, Cy = uy, Sy = Object.defineProperty, ot = (e, t) => Sy(e, "name", { value: t, configurable: !0 }), Ds = "DropdownMenu", [Py, QS] = /* @__PURE__ */ pt(
  Ds,
  [Gu]
), it = Gu(), [Iy, sd] = Py(Ds), Ny = /* @__PURE__ */ ot((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, c = it(t), l = g.useRef(null), [d, u] = Cn({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Ds
  });
  return /* @__PURE__ */ p(
    Iy,
    {
      scope: t,
      triggerId: At(),
      triggerRef: l,
      contentId: At(),
      open: d,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((f) => !f), [u]),
      modal: a,
      children: /* @__PURE__ */ p(dy, { ...c, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), ky = "DropdownMenuTrigger", Ry = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...i } = t, s = sd(ky, r), a = it(r), c = me(n, s.triggerRef);
    return /* @__PURE__ */ p(fy, { asChild: !0, ...a, children: /* @__PURE__ */ p(
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
        onPointerDown: ne(t.onPointerDown, (l) => {
          !o && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: ne(t.onKeyDown, (l) => {
          o || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), Ey = /* @__PURE__ */ ot((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = it(t);
  return /* @__PURE__ */ p(hy, { ...r, ...n });
}, "DropdownMenuPortal"), Ay = "DropdownMenuContent", Dy = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = sd(Ay, r), s = it(r), a = g.useRef(!1);
    return /* @__PURE__ */ p(
      py,
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
), My = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
    return /* @__PURE__ */ p(gy, { ...i, ...o, ref: n });
  }, "DropdownMenuLabel")
), Oy = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ot(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
    return /* @__PURE__ */ p(my, { ...i, ...o, ref: n });
  }, "DropdownMenuItem")
), _y = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ p(vy, { ...i, ...o, ref: n });
}, "DropdownMenuCheckboxItem")), Ty = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ p(by, { ...i, ...o, ref: n });
}, "DropdownMenuRadioItem")), Fy = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ p(yy, { ...i, ...o, ref: n });
}, "DropdownMenuSeparator")), $y = /* @__PURE__ */ ot((e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = it(t), [a, c] = Cn({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ p(wy, { ...s, open: a, onOpenChange: c, children: n });
}, "DropdownMenuSub"), Ly = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ p(xy, { ...i, ...o, ref: n });
}, "DropdownMenuSubTrigger")), By = /* @__PURE__ */ g.forwardRef(/* @__PURE__ */ ot(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = it(r);
  return /* @__PURE__ */ p(
    Cy,
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
}, "DropdownMenuSubContent")), zy = Ny, Hy = Ry, jy = Ey, ad = Dy, cd = My, ld = Oy, ud = _y, dd = Ty, fd = Fy, Ky = $y, hd = Ly, pd = By;
const yr = zy, wr = Hy, rc = Ky, gd = g.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p(
  hd,
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
gd.displayName = hd.displayName;
const Bi = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  pd,
  {
    ref: n,
    className: ue(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Bi.displayName = pd.displayName;
const Un = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = cs();
  return /* @__PURE__ */ p(jy, { container: o || void 0, children: /* @__PURE__ */ p(
    ad,
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
Un.displayName = ad.displayName;
const qe = g.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  ld,
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
qe.displayName = ld.displayName;
const Wy = g.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p(
  ud,
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
Wy.displayName = ud.displayName;
const Gy = g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p(
  dd,
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
Gy.displayName = dd.displayName;
const md = g.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p(
  cd,
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
md.displayName = cd.displayName;
const bn = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  fd,
  {
    ref: n,
    className: ue("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
bn.displayName = fd.displayName;
const Vy = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, Ms = (e, t) => {
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
}, Os = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ p("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ L(yr, { modal: !1, children: [
    /* @__PURE__ */ p(wr, { asChild: !0, children: /* @__PURE__ */ p(
      ze,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ p(Cl, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ p(Un, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ L(
      qe,
      {
        onSelect: (i) => Vy(i, o),
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
}, _s = (e = []) => {
  const t = us();
  return e.length > 0 && !t;
}, Uy = ({
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
  const l = Se($t), d = _s(o), u = yl(
    {
      ...a,
      pageWidth: a?.pageWidth ?? l?.page?.width ?? 210,
      bleed: a?.bleed ?? l?.page?.bleed ?? 0
    },
    "bleed"
  ), f = i ? jn({ dialog: i }, l) : {};
  return g.useMemo(() => {
    if (!s) return f;
    const h = { ...f, ...s };
    return (f.className || s.className) && (h.className = `${f.className || ""} ${s.className || ""}`.trim()), Object.keys(f).forEach((v) => {
      const m = f[v], b = s[v];
      v.startsWith("on") && typeof m == "function" && typeof b == "function" && (h[v] = (y) => {
        m(y), b(y);
      });
    }), h;
  }, [f, s]), /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ L(ss, { ...a, dialog: i, children: [
      Ms(n, r),
      c
    ] }),
    Os(o, d, u)
  ] });
};
function Ts(e) {
  const t = Se($t), n = os({
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
  } = e, b = (T) => `${T}mm`, y = () => is({ width: d, left: f, right: h }, o, r, 2), x = () => {
    let T = u;
    return u ? !v && !m && (T += r) : (T = i, v || (T += r), m || (T += r), (v || m) && (T -= (v ?? 0) + (m ?? 0))), T;
  }, S = y(), C = x(), N = (T) => T !== void 0 ? b(T) : void 0, I = (T) => Object.fromEntries(
    Object.entries(T).filter(([W, F]) => F !== void 0)
  ), P = f > 0 ? f + r : 0, w = v > 0 ? v + r : 0, k = m > 0 ? m + r : 0, E = -1 * o + P, D = v > 0 && m > 0, _ = I({
    backgroundColor: l,
    width: N(S),
    ...D ? { height: N(C) } : {},
    left: N(P),
    top: N(w),
    bottom: N(k)
  }), B = I({
    width: N(S),
    ...D ? { height: N(C) } : {},
    left: N(E),
    top: N(w),
    bottom: N(k)
  });
  return /* @__PURE__ */ p("div", { className: "uhuu-image-container", style: c == "end" ? B : _, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ L("div", { className: "uhuu-image-inner", ...jn(e, t), children: [
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
const Yy = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const s = Se($t), a = _s(n), c = yl(
    {
      ...o,
      pageWidth: o?.pageWidth ?? s?.page?.width ?? 210,
      bleed: o?.bleed ?? s?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ L(Ts, { ...o, dialog: r, children: [
      Ms(e, t),
      i
    ] }),
    Os(n, a, c)
  ] });
}, qy = ({
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
  const b = Se($t), y = l ? jn({ dialog: l }, b) : {}, x = _s(c), S = os({
    onError: (_) => {
      m?.(_), h?.onError?.(_);
    }
  }), C = g.useMemo(() => {
    if (!d) return y;
    const _ = { ...y, ...d };
    return (y.className || d.className) && (_.className = ue(y.className, d.className)), Object.keys(y).forEach((B) => {
      const T = y[B], W = d[B];
      B.startsWith("on") && typeof T == "function" && typeof W == "function" && (_[B] = (F) => {
        T(F), W(F);
      });
    }), _;
  }, [y, d]), N = h?.src ?? e, I = !N && !u && !v, P = () => {
    const _ = h?.className, B = h?.style, T = N, W = h?.alt ?? t, F = {
      ...h,
      src: T,
      alt: W,
      className: ue("h-full w-full object-cover", r, _),
      style: { ...i, ...B }
    };
    return v ? v(F) : T ? /* @__PURE__ */ p("img", { ...F, onError: S }) : u ?? null;
  }, w = C["data-uhuu"], k = g.Children.toArray(f).some((_) => g.isValidElement(_) ? _.type === Ts || _.type === ss : !1);
  k && delete C["data-uhuu"];
  const E = g.Children.map(f, (_) => g.isValidElement(_) ? g.cloneElement(_, { dataUhuu: w }) : _);
  return /* @__PURE__ */ L("div", { className: ue(k ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ L(
      "div",
      {
        ...C,
        className: ue(
          "relative h-full w-full",
          I && "uhuu-image-empty",
          C.className
        ),
        children: [
          P(),
          E,
          Ms(s, a)
        ]
      }
    ),
    Os(c, x)
  ] });
}, eP = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = ee(() => {
    const { annotation: F, dialog: $, overlaySvg: R, options: M, src: A } = e;
    if (!F && !$)
      return {
        computedOverlaySvg: R,
        computedOptions: M,
        computedDirectDialog: void 0
      };
    const j = F?.value || {}, K = R ?? j.annotationSvg ?? "", H = [];
    if (F) {
      if ($) {
        const re = {
          ...$
          // Spread everything (path, type, ratio, etc.)
        };
        if ($.type === "satellite") {
          const { path: be, type: oe, ...Re } = $;
          re.config = {
            ...Re,
            path: "image"
          }, re.path = be, re.type = oe;
        }
        H.push({
          id: "edit",
          label: "Edit image",
          dialog: re
        });
      }
      const z = Array.isArray(j.annotations) ? j.annotations : [], { path: G, value: U, annotations: J, ...Z } = F, te = {
        path: F.path,
        type: "annotation",
        image: A,
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
    children: D,
    imageProps: _,
    renderImage: B,
    onError: T
  } = e, W = {
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
    onError: T
  };
  if (o === "auto")
    return /* @__PURE__ */ p(
      qy,
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
        children: D,
        imageProps: _,
        renderImage: B,
        onError: T
      }
    );
  if (o === "spread") {
    const F = { ...W, side: a, imageClassName: u };
    return i && (t || n?.length || r) ? /* @__PURE__ */ p(
      Yy,
      {
        className: d,
        style: f,
        overlaySvg: t,
        overlayClassName: w,
        options: n,
        dialog: r,
        dialogProps: k,
        spreadProps: F,
        children: D
      }
    ) : /* @__PURE__ */ p(Ts, { ...F });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ p(
    Uy,
    {
      className: d,
      style: f,
      overlaySvg: t,
      overlayClassName: w,
      options: n,
      dialog: r,
      dialogProps: k,
      bleedProps: W,
      children: D
    }
  ) : /* @__PURE__ */ p(ss, { ...W });
}, we = (e) => e !== null && typeof e == "object" && !Array.isArray(e), vd = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ye = (e) => typeof e == "string" && e.trim() !== "" ? e.trim() : void 0, bd = "https://render.uhuu.io/media/thumb", Xy = "2000x2000", Zy = "4000x4000", oc = "image/svg+xml";
function Jy(e) {
  return typeof e == "string" ? { url: ye(e) } : we(e) ? {
    url: ye(e.contentUrl) ?? ye(e.url) ?? ye(e.src),
    type: ye(e.encodingFormat) ?? ye(e.mimeType)
  } : { url: void 0 };
}
function Qy() {
  try {
    return !!globalThis.$uhuu?.is?.printProduct?.();
  } catch {
    return !1;
  }
}
function ic(e) {
  try {
    return new URL(e);
  } catch {
    return;
  }
}
function ew(e, t, n) {
  if (n && n.toLowerCase().startsWith(oc)) return !0;
  if (!t) return /\.svgz?(?:[?#]|$)/i.test(e);
  if (/\.svgz?$/i.test(t.pathname)) return !0;
  for (const r of t.searchParams.values()) {
    const o = r.toLowerCase();
    if (o === "svg" || o === oc) return !0;
  }
  return !1;
}
const tw = (e) => !!e && `${e.origin}${e.pathname}` === bd && e.searchParams.has("url");
function tP(e, t = {}) {
  const n = we(t) ? t : {}, { url: r, type: o } = Jy(e);
  if (!r) return;
  if (/^(?:data|blob):/i.test(r)) return r;
  let i = r, s = ic(r), a = ye(n.format);
  if (tw(s) && (a || (a = ye(s.searchParams.get("format"))), i = ye(s.searchParams.get("url")) ?? r, s = ic(i)), !/^https?:\/\//i.test(i) || ew(i, s, o)) return i;
  const l = (typeof n.print == "boolean" ? n.print : Qy()) ? ye(n.printSize) ?? Zy : ye(n.size) ?? Xy, d = a ? `&format=${encodeURIComponent(a)}` : "";
  return `${bd}?blank=true&size=${encodeURIComponent(l)}${d}&url=${encodeURIComponent(i)}`;
}
const nw = [
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
], yd = [
  ["sans", { token: "fontFamilySans", primitive: "fontSans", keys: ["sans", "body"], generic: "sans-serif" }],
  ["serif", { token: "fontFamilySerif", primitive: "fontSerif", keys: ["serif"], generic: "serif" }],
  ["display", { token: "fontFamilyDisplay", primitive: "fontDisplay", keys: ["display", "heading"], generic: "sans-serif" }],
  ["mono", { token: "fontFamilyMono", primitive: "fontMono", keys: ["mono"], generic: "monospace" }]
], rw = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, ow = /^rgba?\(\s*[\d.%\s,/+-]+\)$/i, iw = /^[a-z]+$/i, sw = /* @__PURE__ */ new Set(["inherit", "initial", "unset", "revert", "none"]), Xt = "[+-]?(?:\\d+\\.?\\d*|\\.\\d+)", aw = new RegExp(
  `^(${Xt})(deg|turn|rad|grad)?\\s+(${Xt})%\\s+(${Xt})%(?:\\s*\\/\\s*(${Xt})(%)?)?$`,
  "i"
), cw = new RegExp(
  `^hsla?\\(\\s*(${Xt})(deg|turn|rad|grad)?\\s*(?:,\\s*|\\s+)(${Xt})%\\s*(?:,\\s*|\\s+)(${Xt})%\\s*(?:(?:,|\\/)\\s*(${Xt})(%)?\\s*)?\\)$`,
  "i"
), sc = /[;{}<>\\\n\r]/, lw = /^[A-Za-z0-9_-]+$/, ci = (e, t, n) => Math.min(n, Math.max(t, e)), li = (e) => e.toString(16).padStart(2, "0"), uw = { deg: 1, turn: 360, rad: 180 / Math.PI, grad: 0.9 };
function dw(e, t, n, r, o, i) {
  const s = (Number(e) * uw[(t || "deg").toLowerCase()] % 360 + 360) % 360, a = ci(Number(n) / 100, 0, 1), c = ci(Number(r) / 100, 0, 1), l = a * Math.min(c, 1 - c), d = (m) => {
    const b = (m + s / 30) % 12;
    return Math.round((c - l * Math.max(-1, Math.min(b - 3, 9 - b, 1))) * 255);
  }, [u, f, h] = [d(0), d(8), d(4)], v = o === void 0 ? 1 : ci(Number(o) / (i ? 100 : 1), 0, 1);
  return v >= 1 ? `#${li(u)}${li(f)}${li(h)}` : `rgba(${u}, ${f}, ${h}, ${Number(v.toFixed(3))})`;
}
function zi(e) {
  const t = ye(e);
  if (!t) return;
  if (rw.test(t) || ow.test(t)) return t;
  if (iw.test(t)) return sw.has(t.toLowerCase()) ? void 0 : t;
  const n = aw.exec(t) ?? cw.exec(t);
  if (n) return dw(n[1], n[2], n[3], n[4], n[5], !!n[6]);
}
function fw(e, t) {
  if (t.startsWith("s:")) {
    const n = e.light?.semantic;
    return we(n) ? n[t.slice(2)] : void 0;
  }
  if (t.startsWith("hero:")) {
    const n = e.light?.aliases?.hero;
    return we(n) ? n[t.slice(5)] : void 0;
  }
  return e[t];
}
function hw(e, t) {
  for (const n of t) {
    const r = zi(fw(e, n));
    if (r !== void 0) return r;
  }
}
const ui = (e) => {
  if (!(typeof e != "string" || !e.includes(",")))
    return ye(e.slice(e.indexOf(",") + 1));
};
function ac(e, t) {
  if (e.includes(",")) return e;
  const n = /^(["']).*\1$/.test(e) ? e : `"${e}"`;
  return t ? `${n}, ${t}` : n;
}
function pw(e, t) {
  if (!(typeof t != "string" || !t)) {
    if (Array.isArray(e)) return e.find((n) => we(n) && n.id === t);
    if (we(e))
      return vd(e, t) && we(e[t]) ? e[t] : Object.values(e).find((n) => we(n) && n.id === t);
  }
}
function gw(e, t) {
  const n = yd.find(([l]) => l === t)?.[1];
  if (!n || !we(e)) return;
  const r = we(e.tokens) ? e.tokens : {}, o = ye(r[n.token]), i = ye(r.primitives?.typography?.[n.primitive]);
  let s = pw(e.fonts, e.assignments?.[`font.${t}`]);
  !ye(s?.family) && we(e.fonts) && (s = n.keys.map((l) => vd(e.fonts, l) ? e.fonts[l] : void 0).find((l) => we(l) && ye(l.family)));
  const a = ye(s?.family);
  if (a)
    return ac(
      a,
      ye(s.fallback) ?? ui(i) ?? ui(o) ?? n.generic
    );
  const c = o ?? i;
  return c ? ac(c, ui(i) ?? n.generic) : void 0;
}
function mw(e, t = {}) {
  const n = {};
  if (we(t?.defaults))
    for (const [i, s] of Object.entries(t.defaults)) {
      if (!i.startsWith("--")) continue;
      const a = i.startsWith("--color-") ? zi(s) : ye(s);
      a !== void 0 && !sc.test(a) && (n[i] = a);
    }
  if (!we(e)) return n;
  const r = we(e.tokens) ? e.tokens : {};
  for (const [i, s] of nw) {
    const a = hw(r, s);
    a !== void 0 && (n[`--color-kit-${i}`] = a);
  }
  const o = r.light?.aliases;
  if (we(o)) {
    const i = (s, a) => {
      const c = lw.test(s) ? zi(a) : void 0;
      c !== void 0 && (n[`--color-kit-${s}`] = c);
    };
    for (const [s, a] of Object.entries(o))
      if (!(s === "hero" || !we(a)))
        for (const [c, l] of Object.entries(a))
          i(s === "template" ? c : `${s}-${c}`, l);
    for (const [s, a] of Object.entries(o))
      we(a) || i(s, a);
  }
  for (const [i] of yd) {
    const s = gw(e, i);
    s === void 0 || sc.test(s) || (n[`--font-${i}`] = s, n[`--font-kit-${i}`] = s);
  }
  return n;
}
const wd = /^https?:\/\//i, xd = /["\\\n\r\f<>]/;
function vw(e, t) {
  const n = ye(e.baseUrl);
  if (n) return n.replace(/\/+$/, "");
  const r = ye(t);
  if (!(!r || !wd.test(r)))
    try {
      return new URL(".", r).toString().replace(/\/+$/, "");
    } catch {
      return;
    }
}
function Cd(e, t) {
  const n = ye(e);
  if (!(!n || /\s/.test(n))) {
    if (wd.test(n) || /^data:/i.test(n)) return n;
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
const bw = (e) => (Array.isArray(e) ? e : we(e) ? Object.values(e) : []).filter(we);
function yw(e) {
  return e.provider === "google" || e.provider === "css" ? e.provider : e.source === "google" || e.source === "css" ? e.source : ye(e.cssUrl) ? "css" : void 0;
}
const ww = (e) => ye(e.split(",")[0]?.replace(/^\s*(["'])(.*)\1\s*$/, "$2"));
function xw(e) {
  const n = (Array.isArray(e.weights) ? e.weights : (e.faces ?? []).map((r) => r?.weight)).map(Number).filter((r) => Number.isInteger(r) && r >= 1 && r <= 1e3);
  return [...new Set(n)].sort((r, o) => r - o);
}
function Cw(e, t) {
  const n = encodeURIComponent(e).replace(/%20/g, "+"), r = xw(t), o = Array.isArray(t.faces) ? t.faces : [], i = Array.isArray(t.styles) ? t.styles : o.map((a) => a?.style);
  let s = r.length > 0 ? `:wght@${r.join(";")}` : "";
  if (i.includes("italic")) {
    const c = (Array.isArray(t.styles) ? (i.includes("normal") ? [0, 1] : [1]).flatMap((l) => (r.length ? r : [400]).map((d) => [l, d])) : o.filter((l) => l?.style === "normal" || l?.style === "italic").map((l) => [l.style === "italic" ? 1 : 0, Number(l.weight)]).filter(([, l]) => Number.isInteger(l) && l >= 1 && l <= 1e3)).sort(([l, d], [u, f]) => l - u || d - f).map((l) => l.join(","));
    s = `:ital,wght@${[...new Set(c)].join(";")}`;
  }
  return `https://fonts.googleapis.com/css2?family=${n}${s}&display=swap`;
}
function Sw(e) {
  return Array.isArray(e.files) && e.files.length > 0 ? e.files.filter(we).map((t) => ({ ...t })) : Array.isArray(e.faces) ? e.faces.filter(we).flatMap((t) => Array.isArray(t.files) ? t.files.filter(we).map((n) => ({
    ...n,
    weight: n.weight ?? t.weight,
    style: n.style ?? t.style
  })) : Object.entries(we(t.files) ? t.files : {}).map(([n, r]) => ({
    src: r,
    format: n,
    weight: t.weight,
    style: t.style
  }))) : [];
}
function Pw(e) {
  const t = String(e.format ?? e.src ?? "").toLowerCase();
  return t.includes("woff2") ? "woff2" : t.includes("woff") ? "woff" : t.includes("otf") || t.includes("opentype") ? "opentype" : "truetype";
}
function Iw(e) {
  const t = String(e ?? "").trim();
  return /^\d{1,4}(?:\s+\d{1,4})?$/.test(t) ? t : "400";
}
function Nw(e, t, n) {
  const r = Cd(t.src, n);
  if (!(!r || xd.test(r)))
    return [
      "@font-face {",
      `  font-family: "${e}";`,
      `  src: url("${r}") format("${Pw(t)}");`,
      `  font-style: ${t.style === "italic" ? "italic" : "normal"};`,
      `  font-weight: ${Iw(t.weight)};`,
      "  font-display: swap;",
      "}"
    ].join(`
`);
}
function kw(e, t = {}) {
  if (!we(e)) return { fontFaceCss: "", stylesheetUrls: [] };
  const n = vw(e, t?.sourceUrl), r = [], o = [], i = (s) => {
    const a = Cd(s, n);
    a && !/^data:/i.test(a) && !r.includes(a) && r.push(a);
  };
  for (const s of bw(e.fonts)) {
    const a = ye(s.family), c = a ? ww(a) : void 0;
    if (!c || xd.test(c)) continue;
    const l = yw(s);
    if (l) {
      const d = ye(s.cssUrl) ? s.cssUrl : l === "google" ? Cw(c, s) : void 0;
      i(d);
    }
    for (const d of Array.isArray(s.faces) ? s.faces : []) i(d?.cssUrl);
    if (!l)
      for (const d of Sw(s)) {
        const u = Nw(c, d, n);
        u && !o.includes(u) && o.push(u);
      }
  }
  return { fontFaceCss: o.join(`
`), stylesheetUrls: r };
}
const Sd = Ft(null);
function nP({ brandKit: e, defaults: t, sourceUrl: n, className: r, style: o, children: i }) {
  const s = ee(
    () => ({ brandKit: e ?? null, cssVars: mw(e, { defaults: t }) }),
    [e, t]
  ), a = ee(() => kw(e, { sourceUrl: n }), [e, n]);
  return /* @__PURE__ */ L(Sd.Provider, { value: s, children: [
    a.stylesheetUrls.map((c) => /* @__PURE__ */ p("link", { rel: "stylesheet", href: c, "data-uhuu-brand-kit-font": "" }, c)),
    a.fontFaceCss ? /* @__PURE__ */ p("style", { "data-uhuu-brand-kit-font": "", children: a.fontFaceCss }) : null,
    /* @__PURE__ */ p(
      "div",
      {
        "data-uhuu-brand-kit": typeof e?.id == "string" ? e.id : "",
        className: r,
        style: { display: "contents", ...s.cssVars, ...o },
        children: i
      }
    )
  ] });
}
function rP() {
  return Se(Sd);
}
const In = "uhuu_page_editor";
function We(e) {
  return e.kind === "group";
}
function Rw(e) {
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
function Ew(e) {
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
  return Rw(e).length;
}
function Aw(e) {
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
function Dw(e, t) {
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
function Fs(e) {
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
function Pd(e, t = In) {
  const n = Fs(e);
  return {
    key: t,
    items: n,
    totalPages: Ot(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Mw(e, t = In) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = Fs(n.items);
  return {
    key: t,
    items: r,
    totalPages: Ot(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Ow(e, t, n = In) {
  const r = Pd(t, n);
  return { ...e ?? {}, [n]: r };
}
function Id() {
  return Math.random().toString(36).slice(2, 11);
}
function Nd(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? Id() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function kd(e, t, n) {
  const r = n?.repeatable ? Id() : e;
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
function cc(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function Hi(e, t, n) {
  for (const r of t) {
    const o = cc(r.start, n), i = cc(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function Rd(e, t, n = 2) {
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
function _w(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = Ot(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : Rd(r, n, o);
  if (i.length === 0)
    return [];
  const s = [];
  for (const a of e)
    if (We(a)) {
      const c = a.pages.filter((l) => l.pageNum && Hi(l.pageNum, i, n));
      c.length > 0 && s.push({
        ...a,
        pages: c
      });
    } else
      a.pageNum && Hi(a.pageNum, i, n) && s.push(a);
  return s;
}
function Tw(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : Rd(r, t, o);
  return i.length === 0 ? !1 : Hi(e, i, t);
}
function Ed(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function Fw(e, t) {
  return t && We(t) ? t.id : e?.id ?? null;
}
function Ad(e, t, n) {
  const r = Fw(t, n);
  return r ? {
    instanceId: r,
    integration: Ed(e, r)
  } : { instanceId: null, integration: void 0 };
}
function Dd(e, t, n) {
  return Ad(e, t, n).integration;
}
function lc(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function $w(e) {
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
function Lw(e, t, n) {
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
function Bw(e, t, n) {
  const r = $w(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, s = Ed(e, o) || {}, a = Lw(
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
function go(e, t) {
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
const xr = g.createContext(null);
function zw(e = In) {
  return [e];
}
function Hw(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function Md({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = In
}) {
  const [o, i] = g.useState(e ?? {}), s = g.useRef(null), a = g.useRef(!1), c = g.useRef(null), l = g.useRef(0), d = g.useRef(!0), u = g.useCallback((w) => {
    try {
      return JSON.stringify(w);
    } catch {
      return String(w);
    }
  }, []), f = g.useMemo(() => zw(r), [r]), h = g.useCallback((w, k) => {
    if (!w) return null;
    const E = { ...w };
    return k.forEach((D) => {
      delete E[D];
    }), E;
  }, []);
  g.useEffect(() => {
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
    s.current = e, i((E) => e ? Hw(E, e, f) : E);
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
        let D = E;
        return E && typeof E == "object" && Object.keys(E).filter(
          (B) => B.startsWith("integrations.") || B === "integrations"
        ).length > 0 && E.integrations && (D = E), c.current = D, l.current = Date.now(), queueMicrotask(() => v(D)), D;
      });
    },
    [v]
  ), b = g.useCallback(
    (w, k, E) => {
      m((D) => ({
        ...D ?? {},
        pages: {
          ...D?.pages ?? {},
          [w]: {
            ...D?.pages?.[w] ?? {},
            [k]: E
          }
        }
      }));
    },
    [m]
  ), y = g.useCallback(
    (w, k) => {
      m((E) => {
        const D = E?.integrations ?? {}, _ = D[w], B = typeof k == "function" ? k(_) : k;
        return {
          ...E ?? {},
          integrations: {
            ...D,
            [w]: B
          }
        };
      });
    },
    [m]
  ), x = g.useCallback(
    (w, k, E) => {
      y(w, (D) => ({
        ...D ?? {},
        [k]: E
      }));
    },
    [y]
  ), S = g.useCallback(
    (w) => {
      m((k) => {
        if (!k?.integrations || !k.integrations[w])
          return k;
        const { [w]: E, ...D } = k.integrations;
        return {
          ...k,
          integrations: Object.keys(D).length > 0 ? D : void 0
        };
      });
    },
    [m]
  ), C = g.useCallback(
    (w, k) => {
      m((E) => Bw(E, w, k));
    },
    [m]
  ), N = g.useCallback(
    (w, k) => {
      const E = k ?? r;
      m((D) => Ow(D, w, E));
    },
    [m, r]
  ), I = g.useCallback(
    (w) => go(o, w),
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
  return /* @__PURE__ */ p(xr.Provider, { value: P, children: n });
}
function jw(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function Kw(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function Ww(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const s = t?.pages?.[i.id]?.[r];
      return s === void 0 ? jw(e) : e.type === "toggle" ? !!s : s;
    },
    onChange: (i, s) => {
      n(i, r, Kw(e, s));
    }
  };
}
function uc(e) {
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
function Gw(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function Vw(e, t) {
  if (e === "two_pages")
    return Gw(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function Uw({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
  const r = n - Math.max(t, 0), o = [e, r].filter((i) => i > 0);
  return o.length ? Math.min(...o) : 0;
}
function Yw({
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
function qw({
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
function Xw(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function Zw(e, t, n, r) {
  if (e.width <= 0 || e.height <= 0) return { deltaLeft: 0, deltaTop: 0 };
  const o = n - e.left, i = r - e.top, s = t.left + o * (t.width / e.width), a = t.top + i * (t.height / e.height);
  return {
    deltaLeft: s - n,
    deltaTop: a - r
  };
}
function di(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function Jw(e, t, n) {
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
function dc(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
const Qw = 24, e0 = 64, t0 = 1e3, fc = {
  // Auto margins centre the stack while it fits and collapse to 0 once it overflows, which is
  // what keeps both edges reachable. Padding sits on the content box so `scrollWidth` counts
  // the right-hand gutter.
  width: "max-content",
  margin: "auto",
  padding: `0 ${Qw}px ${e0}px`,
  overflowAnchor: "none"
};
function n0(e) {
  let t = e, n = null, r = null;
  for (; t && t !== document.documentElement; ) {
    const i = window.getComputedStyle(t);
    if (!n && dc(i.overflowX) && (n = t), !r && dc(i.overflowY) && (r = t), n && r) return { x: n, y: r };
    t = t.parentElement;
  }
  const o = document.scrollingElement;
  return { x: n ?? o, y: r ?? o };
}
function r0(e) {
  const t = Math.max(e.getBoundingClientRect().top, 0);
  let n = 0, r = e.parentElement;
  for (; r && r !== document.documentElement; ) {
    const o = window.getComputedStyle(r);
    o.display !== "contents" && (n += (Number.parseFloat(o.paddingBottom) || 0) + (Number.parseFloat(o.borderBottomWidth) || 0) + Math.max(Number.parseFloat(o.marginBottom) || 0, 0)), r = r.parentElement;
  }
  return t + n;
}
function o0(e) {
  const t = e.querySelector("[data-section-content]"), n = t?.closest('[class*="group/section"]');
  if (!t || !n) return 0;
  const r = t.getBoundingClientRect().height;
  return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
const mo = Ft({ zoom: 100, scaleValue: 1, hideUI: !1 });
function i0({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = Se(mo), o = le(null);
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
function s0(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function a0(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const i = n.querySelector("[data-section-content]");
    return i ? [i] : [];
  })();
  if (!r.length) return null;
  const o = r.map(s0).filter((i) => i !== null);
  return Vw(t, o);
}
function Yr({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: s } = Se(mo), a = le(null), [c, l] = se(0), [d, u] = se(0);
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
  return s ? /* @__PURE__ */ p("div", { className: n, children: e }) : /* @__PURE__ */ L(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${h}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ p("div", { children: r ?? /* @__PURE__ */ p("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
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
function c0({
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
  const u = us(), f = a ?? u, [h, v] = se(n), [m, b] = se(() => uc(l)), [y, x] = se(
    () => uc(l) !== "none"
  ), [S, C] = se(0), N = le(null), I = le(null), P = le(null), w = le(null), k = le(h);
  ce(() => {
    k.current = h;
  }, [h]);
  const E = he(() => d === "pane" && I.current ? { x: I.current, y: I.current } : n0(N.current), [d]), D = he((R, M, A) => {
    const j = Math.min(Math.max(R, r), o), K = w.current;
    if (!K) {
      v(j), b("none");
      return;
    }
    const H = E(), V = Array.from(K.querySelectorAll("[data-section-content]")), Y = Jw(
      V.map((Z) => di(Z.getBoundingClientRect())),
      M,
      A
    ), z = Y >= 0 ? V[Y] : K, G = di(z.getBoundingClientRect()), U = Xw(G, M, A);
    ch(() => {
      v(j), b("none");
    });
    const J = () => {
      const Z = di(z.getBoundingClientRect()), { deltaLeft: te, deltaTop: re } = Zw(G, Z, U.clientX, U.clientY);
      te !== 0 && H.x && (H.x.scrollLeft += te), re !== 0 && H.y && (H.y.scrollTop += re);
    };
    J(), window.requestAnimationFrame(J);
  }, [o, r, E]), _ = he(() => {
    const M = (d === "pane" ? I.current : N.current)?.getBoundingClientRect();
    return M ? { clientX: M.left + M.width / 2, clientY: M.top + M.height / 2 } : { clientX: 0, clientY: 0 };
  }, [d]), B = he(() => {
    const R = w.current;
    if (m === "none" || !R) return;
    const M = a0(R, c);
    if (!M) return;
    const A = d === "pane" ? I.current : N.current;
    if (!A) return;
    const j = A.getBoundingClientRect(), K = A.ownerDocument.defaultView ?? window, H = K.visualViewport?.height ?? A.ownerDocument.documentElement.clientHeight ?? K.innerHeight, V = A.clientWidth || j.width, Y = d === "pane" ? Uw({
      paneClientHeight: A.clientHeight || j.height,
      paneTop: j.top,
      viewportHeight: H
    }) : H - Math.max(j.top, 0), z = P.current ? window.getComputedStyle(P.current) : null, G = z ? Number.parseFloat(z.paddingLeft) + Number.parseFloat(z.paddingRight) : 0, U = z ? Number.parseFloat(z.paddingTop) + Number.parseFloat(z.paddingBottom) : 0, { availableWidth: J, availableHeight: Z } = Yw({
      paneWidth: V,
      paneHeight: Y,
      paddingX: G,
      paddingY: U,
      chromeHeight: o0(R)
    }), te = qw({
      mode: m,
      contentWidth: M.width,
      contentHeight: M.height,
      availableWidth: J,
      availableHeight: Z,
      minZoom: r,
      maxZoom: o
    });
    te !== null && (v((re) => Math.abs(re - te) < 0.01 ? re : te), x(!1));
  }, [m, o, r, c, d]), T = (R) => {
    b(R);
  };
  ce(() => {
    if (!y) return;
    if (m === "none") {
      x(!1);
      return;
    }
    const R = window.setTimeout(() => x(!1), t0);
    return () => window.clearTimeout(R);
  }, [y, m]);
  const W = () => {
    const R = _();
    D(h + 25, R.clientX, R.clientY);
  }, F = () => {
    const R = _();
    D(h - 25, R.clientX, R.clientY);
  };
  ce(() => {
    if (m === "none" || !N.current || !w.current) return;
    let R = 0;
    const M = () => {
      window.cancelAnimationFrame(R), R = window.requestAnimationFrame(B);
    }, A = new ResizeObserver(M);
    A.observe(N.current), I.current && A.observe(I.current), A.observe(w.current);
    const j = () => {
      w.current?.querySelectorAll("[data-section-content]").forEach((H) => {
        A.observe(H);
      });
    };
    j();
    const K = new MutationObserver(() => {
      j(), M();
    });
    return K.observe(w.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), M(), () => {
      window.cancelAnimationFrame(R), A.disconnect(), K.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [m, B]), ce(() => {
    if (f || d !== "pane") return;
    const R = N.current;
    if (!R) return;
    const M = () => {
      const j = r0(R);
      C((K) => Math.abs(K - j) < 0.5 ? K : j);
    };
    M();
    const A = new ResizeObserver(M);
    return A.observe(R), window.addEventListener("resize", M), window.visualViewport?.addEventListener("resize", M), () => {
      A.disconnect(), window.removeEventListener("resize", M), window.visualViewport?.removeEventListener("resize", M);
    };
  }, [f, d]), ce(() => {
    if (f) return;
    let R = null, M = null, A = null, j = { clientX: 0, clientY: 0 }, K = null, H = !1;
    const V = () => {
      R = null;
      const G = A;
      A = null, G !== null && D(G, j.clientX, j.clientY);
    }, Y = (G) => {
      if (!G.ctrlKey && !G.metaKey) return;
      G.preventDefault();
      const U = 16, J = G.deltaMode === 1 ? G.deltaY * U : G.deltaMode === 2 ? G.deltaY * U * 32 : G.deltaY, Z = A ?? k.current, te = Math.min(Math.max(Z * Math.pow(1.003, -J), r), o);
      j = { clientX: G.clientX, clientY: G.clientY }, !(te === Z && A === null) && (A = te, R === null && (R = window.requestAnimationFrame(V)));
    }, z = () => {
      if (M = null, !H) {
        if (K = d === "pane" ? I.current : N.current, !K) {
          M = window.requestAnimationFrame(z);
          return;
        }
        K.addEventListener("wheel", Y, { passive: !1 });
      }
    };
    return z(), () => {
      H = !0, R !== null && window.cancelAnimationFrame(R), M !== null && window.cancelAnimationFrame(M), K?.removeEventListener("wheel", Y);
    };
  }, [D, f, o, r, d]);
  const $ = h / 100;
  return f ? /* @__PURE__ */ p(mo.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ p("div", { className: t, children: e }) }) : /* @__PURE__ */ p(mo.Provider, { value: { zoom: h, scaleValue: $, hideUI: !1 }, children: /* @__PURE__ */ L("div", { ref: N, className: `flex flex-col flex-1 min-h-0 ${t}`, children: [
    /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      s,
      /* @__PURE__ */ p("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ L(yr, { modal: !1, children: [
        /* @__PURE__ */ p(wr, { asChild: !0, children: /* @__PURE__ */ L(ze, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(h),
          "%",
          /* @__PURE__ */ p(xl, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ L(Un, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("width"),
              className: `cursor-pointer flex items-center ${m === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(wg, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("height"),
              className: `cursor-pointer flex items-center ${m === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(Cg, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ L(
            qe,
            {
              onClick: () => T("both"),
              className: `cursor-pointer flex items-center ${m === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ p(lg, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ p("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ p(bn, { className: "my-1.5" }),
          /* @__PURE__ */ L("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (R) => R.stopPropagation(), children: [
            /* @__PURE__ */ p(
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
                children: /* @__PURE__ */ p(kg, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ L("div", { className: "relative", children: [
              /* @__PURE__ */ p(
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
              /* @__PURE__ */ p("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ p(
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
                children: /* @__PURE__ */ p(Ig, { className: "w-4 h-4" })
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
            style: y ? { ...fc, visibility: "hidden" } : fc,
            children: /* @__PURE__ */ p("div", { ref: w, className: c === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e })
          }
        )
      }
    )
  ] }) });
}
var l0 = Object.defineProperty, Ze = (e, t) => l0(e, "name", { value: t, configurable: !0 }), $s = "Dialog", [Od, _d] = /* @__PURE__ */ pt($s), [u0, mt] = Od($s), Td = /* @__PURE__ */ Ze((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = g.useRef(null), c = g.useRef(null), [l, d] = Cn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: $s
  }), [u, f] = g.useState(0), [h, v] = g.useState(0);
  return /* @__PURE__ */ p(
    u0,
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
      setDescriptionCount: v,
      open: l,
      onOpenChange: d,
      onOpenToggle: g.useCallback(() => d((m) => !m), [d]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), d0 = "DialogTrigger", f0 = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(d0, r), s = me(n, i.triggerRef);
    return /* @__PURE__ */ p(
      xe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": Lo(i.open),
        ...o,
        ref: s,
        onClick: ne(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Fd = "DialogPortal", [h0, $d] = Od(Fd, {
  forceMount: void 0
}), Ld = /* @__PURE__ */ Ze((e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = mt(Fd, t);
  return /* @__PURE__ */ p(h0, { scope: t, forceMount: n, children: g.Children.map(r, (s) => /* @__PURE__ */ p(Vn, { present: n || i.open, children: /* @__PURE__ */ p(xu, { asChild: !0, container: o, children: s }) })) });
}, "DialogPortal"), ji = "DialogOverlay", Ls = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const r = $d(ji, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = mt(ji, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p(Vn, { present: o || s.open, children: /* @__PURE__ */ p(g0, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), p0 = /* @__PURE__ */ Jt("DialogOverlay.RemoveScroll"), g0 = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(ji, r), s = Ul(), a = me(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p(Is, { as: p0, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ p(
        xe.div,
        {
          "data-state": Lo(i.open),
          ...o,
          ref: a,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), fr = "DialogContent", Bs = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const r = $d(fr, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = mt(fr, t.__scopeDialog);
    return /* @__PURE__ */ p(Vn, { present: o || s.open, children: s.modal ? /* @__PURE__ */ p(m0, { ...i, ref: n }) : /* @__PURE__ */ p(v0, { ...i, ref: n }) });
  }, "DialogContent")
), m0 = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const r = mt(fr, t.__scopeDialog), o = g.useRef(null), i = me(n, r.contentRef, o);
    return g.useEffect(() => {
      const s = o.current;
      if (s) return Fu(s);
    }, []), /* @__PURE__ */ p(
      Bd,
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
), v0 = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const r = mt(fr, t.__scopeDialog), o = g.useRef(!1), i = g.useRef(!1);
    return /* @__PURE__ */ p(
      Bd,
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
), Bd = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = t, c = mt(fr, r);
    return No(), /* @__PURE__ */ p(Be, { children: /* @__PURE__ */ p(
      Xl,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ p(
          Vl,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": Lo(c.open),
            ...a,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), b0 = "DialogTitle", zs = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(b0, r), { setTitleCount: s } = i;
    return Xe(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ p(xe.h2, { id: i.titleId, ...o, ref: n });
  }, "DialogTitle")
), y0 = "DialogDescription", Hs = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(y0, r), { setDescriptionCount: s } = i;
    return Xe(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ p(xe.p, { id: i.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), w0 = "DialogClose", js = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = mt(w0, r);
    return /* @__PURE__ */ p(
      xe.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: ne(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Lo(e) {
  return e ? "open" : "closed";
}
Ze(Lo, "getState");
const zd = Td, x0 = Ld, Hd = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ls,
  {
    className: ue(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Hd.displayName = Ls.displayName;
const Ks = g.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = cs();
  return /* @__PURE__ */ L(x0, { container: i || void 0, children: [
    /* @__PURE__ */ p(Hd, {}),
    /* @__PURE__ */ L(
      Bs,
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
          /* @__PURE__ */ L(js, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ p(Pl, { className: "h-4 w-4" }),
            /* @__PURE__ */ p("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Ks.displayName = Bs.displayName;
const Ws = ({
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
Ws.displayName = "SheetHeader";
const jd = ({
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
jd.displayName = "SheetFooter";
const Gs = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  zs,
  {
    ref: n,
    className: ue("text-lg font-medium text-gray-900", e),
    ...t
  }
));
Gs.displayName = zs.displayName;
const Vs = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Hs,
  {
    ref: n,
    className: ue("text-sm text-gray-500", e),
    ...t
  }
));
Vs.displayName = Hs.displayName;
function Us(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, s = ar.resolveDimensions(r), a = s.width, c = s.height, l = a / c, d = o, u = i ?? Math.round(d / l), f = a * 3.779527559, h = c * 3.779527559;
  return (v, m, b) => {
    const y = v.strictPosition, x = y === "start" || y === "end";
    if (v.kind === "group") {
      const S = v.firstPageId, C = v.firstPageComponentKey ?? S, N = go(n, { id: S, componentKey: C }), I = v.firstPageComponent || (C ? t[C] : null), P = n?.integrations?.[v.id];
      return /* @__PURE__ */ L(
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
            ) : /* @__PURE__ */ p("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                v.id
              ] }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            /* @__PURE__ */ L("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              v.pageCount,
              " pages)"
            ] }),
            x && /* @__PURE__ */ L("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ p(Ci, { className: "size-3" }),
              /* @__PURE__ */ p("span", { children: y === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p("div", { className: "text-sm font-medium truncate", children: v.label || v.id }) }) }) }),
            b && /* @__PURE__ */ p("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ p("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const S = v.pageId, C = v.pageComponentKey ?? S, N = go(n, { id: S, componentKey: C }), I = v.pageComponent || (C ? t[C] : null), P = S ? Dd(n, { id: S }) : void 0;
      return /* @__PURE__ */ L(
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
            ) : /* @__PURE__ */ p("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ L("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                v.pageNum
              ] }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            x && /* @__PURE__ */ L("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ p(Ci, { className: "size-3" }),
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
function C0({
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
  }, f = ar.resolveDimensions(s), h = f.width, v = f.height, m = h / v, b = 200, y = Math.round(b / m), x = {
    width: `${b}px`,
    height: `${y}px`
  }, S = g.useMemo(() => o ? Us({
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
      const E = I, D = { payload: i, item: void 0, parent: void 0 }, _ = C(E.pageComponentKeys, D), B = _[0];
      return {
        kind: "group",
        id: I.id,
        label: I.label,
        pageCount: _.length,
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
  return /* @__PURE__ */ p(zd, { open: e, onOpenChange: t, children: /* @__PURE__ */ L(
    Ks,
    {
      side: "bottom",
      className: "h-[90vh] w-full max-w-none flex flex-col gap-0 bg-gray-50 p-0",
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ p(Ws, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ L("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ p("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ p(wt, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ L("div", { className: "flex-1", children: [
            /* @__PURE__ */ p(Gs, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
            /* @__PURE__ */ p(Vs, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
          ] }),
          /* @__PURE__ */ L("div", { className: "mb-0.5 mr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200", children: [
            /* @__PURE__ */ p(mg, { className: "w-3.5 h-3.5 shrink-0" }),
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
        /* @__PURE__ */ p("div", { className: "min-h-0 flex-1 overflow-auto bg-gray-50 p-6", children: d.length === 0 ? /* @__PURE__ */ L("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ p(wt, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ p("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
          /* @__PURE__ */ p("p", { className: "text-gray-500 mb-4", children: c.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
        ] }) : /* @__PURE__ */ p("div", { className: a, children: d.map((I, P) => {
          const w = I.kind === "group", k = I.id, E = w ? I.label || `Group ${P + 1}` : I.label || `Page ${I.id}`, D = { payload: i, item: void 0, parent: void 0 }, _ = w ? C(I.pageComponentKeys, D).length : 1, B = !!S;
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
              style: x,
              children: [
                /* @__PURE__ */ p("div", { className: "w-full h-full relative", children: I.thumbnail ? /* @__PURE__ */ p("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ p(
                  "img",
                  {
                    src: I.thumbnail,
                    className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                    alt: E
                  }
                ) }) : S ? /* @__PURE__ */ p("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: S(N(I, P), P, !1) }) : /* @__PURE__ */ p(Be, { children: w ? /* @__PURE__ */ L("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(wt, { className: "w-8 h-8 text-blue-600" }) }),
                  /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ L("div", { className: "text-xs text-gray-500 mt-1", children: [
                    _,
                    " ",
                    _ === 1 ? "page" : "pages"
                  ] })
                ] }) : /* @__PURE__ */ L("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ p("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(wt, { className: "w-8 h-8 text-gray-400" }) }),
                  /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ p("div", { className: "text-xs text-gray-500 mt-1", children: k })
                ] }) }) }),
                (!S || I?.thumbnail) && /* @__PURE__ */ L(Be, { children: [
                  w && /* @__PURE__ */ L("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                    "Group (",
                    _,
                    " ",
                    _ === 1 ? "page" : "pages",
                    ")"
                  ] }),
                  /* @__PURE__ */ p("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": k, children: /* @__PURE__ */ p("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ p("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ p("div", { className: "text-sm font-medium truncate", children: E }) }) }) })
                ] }),
                /* @__PURE__ */ p("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ p(wt, { className: "w-4 h-4 text-white" }) })
              ]
            },
            k
          );
        }) }) })
      ]
    }
  ) });
}
function S0() {
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
const Bo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Yn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Ys(e) {
  return "nodeType" in e;
}
function Ke(e) {
  var t, n;
  return e ? Yn(e) ? e : Ys(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function qs(e) {
  const {
    Document: t
  } = Ke(e);
  return e instanceof t;
}
function Cr(e) {
  return Yn(e) ? !1 : e instanceof Ke(e).HTMLElement;
}
function Kd(e) {
  return e instanceof Ke(e).SVGElement;
}
function qn(e) {
  return e ? Yn(e) ? e.document : Ys(e) ? qs(e) ? e : Cr(e) || Kd(e) ? e.ownerDocument : document : document : document;
}
const ft = Bo ? $c : ce;
function zo(e) {
  const t = le(e);
  return ft(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function P0() {
  const e = le(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function hr(e, t) {
  t === void 0 && (t = [e]);
  const n = le(e);
  return ft(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Sr(e, t) {
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
function vo(e) {
  const t = zo(e), n = le(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function bo(e) {
  const t = le();
  return ce(() => {
    t.current = e;
  }, [e]), t.current;
}
let fi = {};
function Pr(e, t) {
  return ee(() => {
    if (t)
      return t;
    const n = fi[e] == null ? 0 : fi[e] + 1;
    return fi[e] = n, e + "-" + n;
  }, [e, t]);
}
function Wd(e) {
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
const Bn = /* @__PURE__ */ Wd(1), pr = /* @__PURE__ */ Wd(-1);
function I0(e) {
  return "clientX" in e && "clientY" in e;
}
function Ho(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ke(e.target);
  return t && e instanceof t;
}
function N0(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ke(e.target);
  return t && e instanceof t;
}
function yo(e) {
  if (N0(e)) {
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
  return I0(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const tn = /* @__PURE__ */ Object.freeze({
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
        return [tn.Translate.toString(e), tn.Scale.toString(e)].join(" ");
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
}), hc = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function k0(e) {
  return e.matches(hc) ? e : e.querySelector(hc);
}
const R0 = {
  display: "none"
};
function E0(e) {
  let {
    id: t,
    value: n
  } = e;
  return Ne.createElement("div", {
    id: t,
    style: R0
  }, n);
}
function A0(e) {
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
  return Ne.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function D0() {
  const [e, t] = se("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Gd = /* @__PURE__ */ Ft(null);
function M0(e) {
  const t = Se(Gd);
  ce(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function O0() {
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
const _0 = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, T0 = {
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
function F0(e) {
  let {
    announcements: t = T0,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = _0
  } = e;
  const {
    announce: i,
    announcement: s
  } = D0(), a = Pr("DndLiveRegion"), [c, l] = se(!1);
  if (ce(() => {
    l(!0);
  }, []), M0(ee(() => ({
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
  const d = Ne.createElement(Ne.Fragment, null, Ne.createElement(E0, {
    id: r,
    value: o.draggable
  }), Ne.createElement(A0, {
    id: a,
    announcement: s
  }));
  return n ? lh(d, n) : d;
}
var _e;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(_e || (_e = {}));
function wo() {
}
function pc(e, t) {
  return ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function $0() {
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
function Vd(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function L0(e, t) {
  const n = yo(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Ud(e, t) {
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
function B0(e, t) {
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
function gc(e) {
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
function Yd(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function mc(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const z0 = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = mc(t, t.left, t.top), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = Vd(mc(c), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(Ud);
}, H0 = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = gc(t), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = gc(c), d = o.reduce((f, h, v) => f + Vd(l[v], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort(Ud);
};
function j0(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const c = t.width * t.height, l = e.width * e.height, d = s * a, u = d / (c + l - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const K0 = (e) => {
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
      const c = j0(a, t);
      c > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return o.sort(B0);
};
function W0(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function qd(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ht;
}
function G0(e) {
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
const V0 = /* @__PURE__ */ G0(1);
function Xd(e) {
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
function U0(e, t, n) {
  const r = Xd(t);
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
const Y0 = {
  ignoreTransform: !1
};
function Xn(e, t) {
  t === void 0 && (t = Y0);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: l,
      transformOrigin: d
    } = Ke(e).getComputedStyle(e);
    l && (n = U0(n, l, d));
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
function vc(e) {
  return Xn(e, {
    ignoreTransform: !0
  });
}
function q0(e) {
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
function X0(e, t) {
  return t === void 0 && (t = Ke(e).getComputedStyle(e)), t.position === "fixed";
}
function Z0(e, t) {
  t === void 0 && (t = Ke(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function jo(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (qs(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!Cr(o) || Kd(o) || n.includes(o))
      return n;
    const i = Ke(e).getComputedStyle(o);
    return o !== e && Z0(o, i) && n.push(o), X0(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function Zd(e) {
  const [t] = jo(e, 1);
  return t ?? null;
}
function hi(e) {
  return !Bo || !e ? null : Yn(e) ? e : Ys(e) ? qs(e) || e === qn(e).scrollingElement ? window : Cr(e) ? e : null : null;
}
function Jd(e) {
  return Yn(e) ? e.scrollX : e.scrollLeft;
}
function Qd(e) {
  return Yn(e) ? e.scrollY : e.scrollTop;
}
function Ki(e) {
  return {
    x: Jd(e),
    y: Qd(e)
  };
}
var Te;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Te || (Te = {}));
function ef(e) {
  return !Bo || !e ? !1 : e === document.scrollingElement;
}
function tf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ef(e) ? {
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
const J0 = {
  x: 0.2,
  y: 0.2
};
function Q0(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: c
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = J0);
  const {
    isTop: l,
    isBottom: d,
    isLeft: u,
    isRight: f
  } = tf(e), h = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, m = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !l && i <= t.top + m.height ? (h.y = Te.Backward, v.y = r * Math.abs((t.top + m.height - i) / m.height)) : !d && c >= t.bottom - m.height && (h.y = Te.Forward, v.y = r * Math.abs((t.bottom - m.height - c) / m.height)), !f && a >= t.right - m.width ? (h.x = Te.Forward, v.x = r * Math.abs((t.right - m.width - a) / m.width)) : !u && s <= t.left + m.width && (h.x = Te.Backward, v.x = r * Math.abs((t.left + m.width - s) / m.width)), {
    direction: h,
    speed: v
  };
}
function ex(e) {
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
function nf(e) {
  return e.reduce((t, n) => Bn(t, Ki(n)), ht);
}
function tx(e) {
  return e.reduce((t, n) => t + Jd(n), 0);
}
function nx(e) {
  return e.reduce((t, n) => t + Qd(n), 0);
}
function rf(e, t) {
  if (t === void 0 && (t = Xn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  Zd(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const rx = [["x", ["left", "right"], tx], ["y", ["top", "bottom"], nx]];
class Xs {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = jo(n), o = nf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of rx)
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
class rr {
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
function ox(e) {
  const {
    EventTarget: t
  } = Ke(e);
  return e instanceof t ? e : qn(e);
}
function pi(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var nt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(nt || (nt = {}));
function bc(e) {
  e.preventDefault();
}
function ix(e) {
  e.stopPropagation();
}
var fe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(fe || (fe = {}));
const of = {
  start: [fe.Space, fe.Enter],
  cancel: [fe.Esc],
  end: [fe.Space, fe.Enter, fe.Tab]
}, sx = (e, t) => {
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
class Zs {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new rr(qn(n)), this.windowListeners = new rr(Ke(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(nt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && rf(r), n(ht);
  }
  handleKeyDown(t) {
    if (Ho(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = of,
        coordinateGetter: s = sx,
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
        const f = pr(u, d), h = {
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
          } = tf(m), P = ex(m), w = {
            x: Math.min(b === fe.Right ? P.right - P.width / 2 : P.right, Math.max(b === fe.Right ? P.left : P.left + P.width / 2, u.x)),
            y: Math.min(b === fe.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(b === fe.Down ? P.top : P.top + P.height / 2, u.y))
          }, k = b === fe.Right && !x || b === fe.Left && !S, E = b === fe.Down && !C || b === fe.Up && !y;
          if (k && w.x !== u.x) {
            const D = m.scrollLeft + f.x, _ = b === fe.Right && D <= N.x || b === fe.Left && D >= I.x;
            if (_ && !f.y) {
              m.scrollTo({
                left: D,
                behavior: a
              });
              return;
            }
            _ ? h.x = m.scrollLeft - D : h.x = b === fe.Right ? m.scrollLeft - N.x : m.scrollLeft - I.x, h.x && m.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (E && w.y !== u.y) {
            const D = m.scrollTop + f.y, _ = b === fe.Down && D <= N.y || b === fe.Up && D >= I.y;
            if (_ && !f.x) {
              m.scrollTo({
                top: D,
                behavior: a
              });
              return;
            }
            _ ? h.y = m.scrollTop - D : h.y = b === fe.Down ? m.scrollTop - N.y : m.scrollTop - I.y, h.y && m.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, Bn(pr(u, this.referenceCoordinates), h));
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
Zs.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = of,
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
function yc(e) {
  return !!(e && "distance" in e);
}
function wc(e) {
  return !!(e && "delay" in e);
}
class Js {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = ox(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = qn(s), this.documentListeners = new rr(this.document), this.listeners = new rr(r), this.windowListeners = new rr(Ke(s)), this.initialCoordinates = (o = yo(i)) != null ? o : ht, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.DragStart, bc), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), this.windowListeners.add(nt.ContextMenu, bc), this.documentListeners.add(nt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (wc(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (yc(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(nt.Click, ix, {
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
    const c = (n = yo(t)) != null ? n : ht, l = pr(o, c);
    if (!r && a) {
      if (yc(a)) {
        if (a.tolerance != null && pi(l, a.tolerance))
          return this.handleCancel();
        if (pi(l, a.distance))
          return this.handleStart();
      }
      if (wc(a) && pi(l, a.tolerance))
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
const ax = {
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
class Qs extends Js {
  constructor(t) {
    const {
      event: n
    } = t, r = qn(n.target);
    super(t, ax, r);
  }
}
Qs.activators = [{
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
const cx = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Wi;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Wi || (Wi = {}));
class lx extends Js {
  constructor(t) {
    super(t, cx, qn(t.event.target));
  }
}
lx.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Wi.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const gi = {
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
class ux extends Js {
  constructor(t) {
    super(t, gi);
  }
  static setup() {
    return window.addEventListener(gi.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(gi.move.name, t);
    };
    function t() {
    }
  }
}
ux.activators = [{
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
var or;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(or || (or = {}));
var xo;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(xo || (xo = {}));
function dx(e) {
  let {
    acceleration: t,
    activator: n = or.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = xo.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: l,
    scrollableAncestorRects: d,
    delta: u,
    threshold: f
  } = e;
  const h = hx({
    delta: u,
    disabled: !i
  }), [v, m] = P0(), b = le({
    x: 0,
    y: 0
  }), y = le({
    x: 0,
    y: 0
  }), x = ee(() => {
    switch (n) {
      case or.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case or.DraggableRect:
        return o;
    }
  }, [n, o, c]), S = le(null), C = he(() => {
    const I = S.current;
    if (!I)
      return;
    const P = b.current.x * y.current.x, w = b.current.y * y.current.y;
    I.scrollBy(P, w);
  }, []), N = ee(() => a === xo.TreeOrder ? [...l].reverse() : l, [a, l]);
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
        } = Q0(I, w, x, t, f);
        for (const D of ["x", "y"])
          h[D][k[D]] || (E[D] = 0, k[D] = 0);
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
const fx = {
  x: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  },
  y: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  }
};
function hx(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = bo(t);
  return Sr((o) => {
    if (n || !r || !o)
      return fx;
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
function px(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Sr((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function gx(e, t) {
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
var gr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(gr || (gr = {}));
var Gi;
(function(e) {
  e.Optimized = "optimized";
})(Gi || (Gi = {}));
const xc = /* @__PURE__ */ new Map();
function mx(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = se(null), {
    frequency: a,
    measure: c,
    strategy: l
  } = o, d = le(e), u = b(), f = hr(u), h = he(function(y) {
    y === void 0 && (y = []), !f.current && s((x) => x === null ? y : x.concat(y.filter((S) => !x.includes(S))));
  }, [f]), v = le(null), m = Sr((y) => {
    if (u && !n)
      return xc;
    if (!y || y === xc || d.current !== e || i != null) {
      const x = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          x.set(S.id, S.rect.current);
          continue;
        }
        const C = S.node.current, N = C ? new Xs(c(C), C) : null;
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
      case gr.Always:
        return !1;
      case gr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function ea(e, t) {
  return Sr((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function vx(e, t) {
  return ea(e, t);
}
function bx(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = zo(t), o = ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return ce(() => () => o?.disconnect(), [o]), o;
}
function Ko(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = zo(t), o = ee(
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
function yx(e) {
  return new Xs(Xn(e), e);
}
function Cc(e, t, n) {
  t === void 0 && (t = yx);
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
  const s = bx({
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
  }), a = Ko({
    callback: i
  });
  return ft(() => {
    i(), e ? (a?.observe(e), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [e]), r;
}
function wx(e) {
  const t = ea(e);
  return qd(e, t);
}
const Sc = [];
function xx(e) {
  const t = le(e), n = Sr((r) => e ? r && r !== Sc && e && t.current && e.parentNode === t.current.parentNode ? r : jo(e) : Sc, [e]);
  return ce(() => {
    t.current = e;
  }, [e]), n;
}
function Cx(e) {
  const [t, n] = se(null), r = le(e), o = he((i) => {
    const s = hi(i.target);
    s && n((a) => a ? (a.set(s, Ki(s)), new Map(a)) : null);
  }, []);
  return ce(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((c) => {
        const l = hi(c);
        return l ? (l.addEventListener("scroll", o, {
          passive: !0
        }), [l, Ki(l)]) : null;
      }).filter((c) => c != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((c) => {
        const l = hi(c);
        l?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), ee(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => Bn(i, s), ht) : nf(e) : ht, [e, t]);
}
function Pc(e, t) {
  t === void 0 && (t = []);
  const n = le(null);
  return ce(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ce(() => {
    const r = e !== ht;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? pr(e, n.current) : ht;
}
function Sx(e) {
  ce(
    () => {
      if (!Bo)
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
function Px(e, t) {
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
function sf(e) {
  return ee(() => e ? q0(e) : null, [e]);
}
const Ic = [];
function Ix(e, t) {
  t === void 0 && (t = Xn);
  const [n] = e, r = sf(n ? Ke(n) : null), [o, i] = se(Ic);
  function s() {
    i(() => e.length ? e.map((c) => ef(c) ? r : new Xs(t(c), c)) : Ic);
  }
  const a = Ko({
    callback: s
  });
  return ft(() => {
    a?.disconnect(), s(), e.forEach((c) => a?.observe(c));
  }, [e]), o;
}
function af(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Cr(t) ? t : e;
}
function Nx(e) {
  let {
    measure: t
  } = e;
  const [n, r] = se(null), o = he((l) => {
    for (const {
      target: d
    } of l)
      if (Cr(d)) {
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
  }, [t]), i = Ko({
    callback: o
  }), s = he((l) => {
    const d = af(l);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [a, c] = vo(s);
  return ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: c
  }), [n, a, c]);
}
const kx = [{
  sensor: Qs,
  options: {}
}, {
  sensor: Zs,
  options: {}
}], Rx = {
  current: {}
}, eo = {
  draggable: {
    measure: vc
  },
  droppable: {
    measure: vc,
    strategy: gr.WhileDragging,
    frequency: Gi.Optimized
  },
  dragOverlay: {
    measure: Xn
  }
};
class ir extends Map {
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
const Ex = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ir(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: wo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: eo,
  measureDroppableContainers: wo,
  windowRect: null,
  measuringScheduled: !1
}, cf = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: wo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: wo
}, Ir = /* @__PURE__ */ Ft(cf), lf = /* @__PURE__ */ Ft(Ex);
function Ax() {
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
      containers: new ir()
    }
  };
}
function Dx(e, t) {
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
      } = n, o = new ir(e.droppable.containers);
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
      const s = new ir(e.droppable.containers);
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
      const i = new ir(e.droppable.containers);
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
function Mx(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Se(Ir), i = bo(r), s = bo(n?.id);
  return ce(() => {
    if (!t && !r && i && s != null) {
      if (!Ho(i) || document.activeElement === i.target)
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
          const u = k0(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function uf(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function Ox(e) {
  return ee(
    () => ({
      draggable: {
        ...eo.draggable,
        ...e?.draggable
      },
      droppable: {
        ...eo.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...eo.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function _x(e) {
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
    const d = n(l), u = qd(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = Zd(l);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const Wo = /* @__PURE__ */ Ft({
  ...ht,
  scaleX: 1,
  scaleY: 1
});
var Yt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Yt || (Yt = {}));
const Tx = /* @__PURE__ */ ih(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: c = !0,
    children: l,
    sensors: d = kx,
    collisionDetection: u = K0,
    measuring: f,
    modifiers: h,
    ...v
  } = t;
  const m = sh(Dx, void 0, Ax), [b, y] = m, [x, S] = O0(), [C, N] = se(Yt.Uninitialized), I = C === Yt.Initialized, {
    draggable: {
      active: P,
      nodes: w,
      translate: k
    },
    droppable: {
      containers: E
    }
  } = b, D = P != null ? w.get(P) : null, _ = le({
    initial: null,
    translated: null
  }), B = ee(() => {
    var Ce;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (Ce = D?.data) != null ? Ce : Rx,
      rect: _
    } : null;
  }, [P, D]), T = le(null), [W, F] = se(null), [$, R] = se(null), M = hr(v, Object.values(v)), A = Pr("DndDescribedBy", s), j = ee(() => E.getEnabled(), [E]), K = Ox(f), {
    droppableRects: H,
    measureDroppableContainers: V,
    measuringScheduled: Y
  } = mx(j, {
    dragging: I,
    dependencies: [k.x, k.y],
    config: K.droppable
  }), z = px(w, P), G = ee(() => $ ? yo($) : null, [$]), U = _r(), J = vx(z, K.draggable.measure);
  _x({
    activeNode: P != null ? w.get(P) : null,
    config: U.layoutShiftCompensation,
    initialRect: J,
    measure: K.draggable.measure
  });
  const Z = Cc(z, K.draggable.measure, J), te = Cc(z ? z.parentElement : null), re = le({
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
  }), be = E.getNodeFor((n = re.current.over) == null ? void 0 : n.id), oe = Nx({
    measure: K.dragOverlay.measure
  }), Re = (r = oe.nodeRef.current) != null ? r : z, Je = I ? (o = oe.rect) != null ? o : Z : null, cn = !!(oe.nodeRef.current && oe.rect), ln = wx(cn ? null : Z), un = sf(Re ? Ke(Re) : null), st = xx(I ? be ?? z : null), Ht = Ix(st), at = uf(h, {
    transform: {
      x: k.x - ln.x,
      y: k.y - ln.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: $,
    active: B,
    activeNodeRect: Z,
    containerNodeRect: te,
    draggingNodeRect: Je,
    over: re.current.over,
    overlayNodeRect: oe.rect,
    scrollableAncestors: st,
    scrollableAncestorRects: Ht,
    windowRect: un
  }), Zn = G ? Bn(G, k) : null, Nn = Cx(st), Jn = Pc(Nn), Rr = Pc(Nn, [Z]), vt = Bn(at, Jn), Nt = Je ? V0(Je, at) : null, jt = B && Nt ? u({
    active: B,
    collisionRect: Nt,
    droppableRects: H,
    droppableContainers: j,
    pointerCoordinates: Zn
  }) : null, Er = Yd(jt, "id"), [Ve, Ar] = se(null), Vo = cn ? at : Bn(at, Rr), Qn = W0(Vo, (i = Ve?.rect) != null ? i : null, Z), er = le(null), Dr = he(
    (Ce, Ae) => {
      let {
        sensor: He,
        options: ct
      } = Ae;
      if (T.current == null)
        return;
      const De = w.get(T.current);
      if (!De)
        return;
      const Ee = Ce.nativeEvent, Ue = new He({
        active: T.current,
        activeNode: De,
        event: Ee,
        options: ct,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: re,
        onAbort(Me) {
          if (!w.get(Me))
            return;
          const {
            onDragAbort: Ye
          } = M.current, Qe = {
            id: Me
          };
          Ye?.(Qe), x({
            type: "onDragAbort",
            event: Qe
          });
        },
        onPending(Me, lt, Ye, Qe) {
          if (!w.get(Me))
            return;
          const {
            onDragPending: fn
          } = M.current, ut = {
            id: Me,
            constraint: lt,
            initialCoordinates: Ye,
            offset: Qe
          };
          fn?.(ut), x({
            type: "onDragPending",
            event: ut
          });
        },
        onStart(Me) {
          const lt = T.current;
          if (lt == null)
            return;
          const Ye = w.get(lt);
          if (!Ye)
            return;
          const {
            onDragStart: Qe
          } = M.current, dn = {
            activatorEvent: Ee,
            active: {
              id: lt,
              data: Ye.data,
              rect: _
            }
          };
          Tr(() => {
            Qe?.(dn), N(Yt.Initializing), y({
              type: _e.DragStart,
              initialCoordinates: Me,
              active: lt
            }), x({
              type: "onDragStart",
              event: dn
            }), F(er.current), R(Ee);
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
      er.current = Ue;
      function Kt(Me) {
        return async function() {
          const {
            active: Ye,
            collisions: Qe,
            over: dn,
            scrollAdjustedTranslate: fn
          } = re.current;
          let ut = null;
          if (Ye && fn) {
            const {
              cancelDrop: et
            } = M.current;
            ut = {
              activatorEvent: Ee,
              active: Ye,
              collisions: Qe,
              delta: fn,
              over: dn
            }, Me === _e.DragEnd && typeof et == "function" && await Promise.resolve(et(ut)) && (Me = _e.DragCancel);
          }
          T.current = null, Tr(() => {
            y({
              type: Me
            }), N(Yt.Uninitialized), Ar(null), F(null), R(null), er.current = null;
            const et = Me === _e.DragEnd ? "onDragEnd" : "onDragCancel";
            if (ut) {
              const Rn = M.current[et];
              Rn?.(ut), x({
                type: et,
                event: ut
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), Uo = he((Ce, Ae) => (He, ct) => {
    const De = He.nativeEvent, Ee = w.get(ct);
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
    Ce(He, Ae.options, Ue) === !0 && (De.dndKit = {
      capturedBy: Ae.sensor
    }, T.current = ct, Dr(He, Ae));
  }, [w, Dr]), kn = gx(d, Uo);
  Sx(d), ft(() => {
    Z && C === Yt.Initializing && N(Yt.Initialized);
  }, [Z, C]), ce(
    () => {
      const {
        onDragMove: Ce
      } = M.current, {
        active: Ae,
        activatorEvent: He,
        collisions: ct,
        over: De
      } = re.current;
      if (!Ae || !He)
        return;
      const Ee = {
        active: Ae,
        activatorEvent: He,
        collisions: ct,
        delta: {
          x: vt.x,
          y: vt.y
        },
        over: De
      };
      Tr(() => {
        Ce?.(Ee), x({
          type: "onDragMove",
          event: Ee
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [vt.x, vt.y]
  ), ce(
    () => {
      const {
        active: Ce,
        activatorEvent: Ae,
        collisions: He,
        droppableContainers: ct,
        scrollAdjustedTranslate: De
      } = re.current;
      if (!Ce || T.current == null || !Ae || !De)
        return;
      const {
        onDragOver: Ee
      } = M.current, Ue = ct.get(Er), Kt = Ue && Ue.rect.current ? {
        id: Ue.id,
        rect: Ue.rect.current,
        data: Ue.data,
        disabled: Ue.disabled
      } : null, Me = {
        active: Ce,
        activatorEvent: Ae,
        collisions: He,
        delta: {
          x: De.x,
          y: De.y
        },
        over: Kt
      };
      Tr(() => {
        Ar(Kt), Ee?.(Me), x({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Er]
  ), ft(() => {
    re.current = {
      activatorEvent: $,
      active: B,
      activeNode: z,
      collisionRect: Nt,
      collisions: jt,
      droppableRects: H,
      draggableNodes: w,
      draggingNode: Re,
      draggingNodeRect: Je,
      droppableContainers: E,
      over: Ve,
      scrollableAncestors: st,
      scrollAdjustedTranslate: vt
    }, _.current = {
      initial: Je,
      translated: Nt
    };
  }, [B, z, jt, Nt, w, Re, Je, H, E, Ve, st, vt]), dx({
    ...U,
    delta: k,
    draggingRect: Nt,
    pointerCoordinates: Zn,
    scrollableAncestors: st,
    scrollableAncestorRects: Ht
  });
  const Mr = ee(() => ({
    active: B,
    activeNode: z,
    activeNodeRect: Z,
    activatorEvent: $,
    collisions: jt,
    containerNodeRect: te,
    dragOverlay: oe,
    draggableNodes: w,
    droppableContainers: E,
    droppableRects: H,
    over: Ve,
    measureDroppableContainers: V,
    scrollableAncestors: st,
    scrollableAncestorRects: Ht,
    measuringConfiguration: K,
    measuringScheduled: Y,
    windowRect: un
  }), [B, z, Z, $, jt, te, oe, w, E, H, Ve, V, st, Ht, K, Y, un]), Or = ee(() => ({
    activatorEvent: $,
    activators: kn,
    active: B,
    activeNodeRect: Z,
    ariaDescribedById: {
      draggable: A
    },
    dispatch: y,
    draggableNodes: w,
    over: Ve,
    measureDroppableContainers: V
  }), [$, kn, B, Z, y, A, w, Ve, V]);
  return Ne.createElement(Gd.Provider, {
    value: S
  }, Ne.createElement(Ir.Provider, {
    value: Or
  }, Ne.createElement(lf.Provider, {
    value: Mr
  }, Ne.createElement(Wo.Provider, {
    value: Qn
  }, l)), Ne.createElement(Mx, {
    disabled: a?.restoreFocus === !1
  })), Ne.createElement(F0, {
    ...a,
    hiddenTextDescribedById: A
  }));
  function _r() {
    const Ce = W?.autoScrollEnabled === !1, Ae = typeof c == "object" ? c.enabled === !1 : c === !1, He = I && !Ce && !Ae;
    return typeof c == "object" ? {
      ...c,
      enabled: He
    } : {
      enabled: He
    };
  }
}), Fx = /* @__PURE__ */ Ft(null), Nc = "button", $x = "Draggable";
function Lx(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = Pr($x), {
    activators: s,
    activatorEvent: a,
    active: c,
    activeNodeRect: l,
    ariaDescribedById: d,
    draggableNodes: u,
    over: f
  } = Se(Ir), {
    role: h = Nc,
    roleDescription: v = "draggable",
    tabIndex: m = 0
  } = o ?? {}, b = c?.id === t, y = Se(b ? Wo : Fx), [x, S] = vo(), [C, N] = vo(), I = Px(s, t), P = hr(n);
  ft(
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
    "aria-pressed": b && h === Nc ? !0 : void 0,
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
function df() {
  return Se(lf);
}
const Bx = "Droppable", zx = {
  timeout: 25
};
function Hx(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = Pr(Bx), {
    active: s,
    dispatch: a,
    over: c,
    measureDroppableContainers: l
  } = Se(Ir), d = le({
    disabled: n
  }), u = le(!1), f = le(null), h = le(null), {
    disabled: v,
    updateMeasurementsFor: m,
    timeout: b
  } = {
    ...zx,
    ...o
  }, y = hr(m ?? r), x = he(
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
  ), S = Ko({
    callback: x,
    disabled: v || !s
  }), C = he((w, k) => {
    S && (k && (S.unobserve(k), u.current = !1), w && S.observe(w));
  }, [S]), [N, I] = vo(C), P = hr(t);
  return ce(() => {
    !S || !N.current || (S.disconnect(), u.current = !1, S.observe(N.current));
  }, [N, S]), ce(
    () => (a({
      type: _e.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: N,
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
  ), ce(() => {
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
    node: N,
    over: c,
    setNodeRef: I
  };
}
function jx(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = se(null), [i, s] = se(null), a = bo(n);
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
  }, [t, r, i]), Ne.createElement(Ne.Fragment, null, n, r ? ah(r, {
    ref: s
  }) : null);
}
const Kx = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Wx(e) {
  let {
    children: t
  } = e;
  return Ne.createElement(Ir.Provider, {
    value: cf
  }, Ne.createElement(Wo.Provider, {
    value: Kx
  }, t));
}
const Gx = {
  position: "fixed",
  touchAction: "none"
}, Vx = (e) => Ho(e) ? "transform 250ms ease" : void 0, Ux = /* @__PURE__ */ mr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: s,
    rect: a,
    style: c,
    transform: l,
    transition: d = Vx
  } = e;
  if (!a)
    return null;
  const u = o ? l : {
    ...l,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...Gx,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: tn.Transform.toString(u),
    transformOrigin: o && r ? L0(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...c
  };
  return Ne.createElement(n, {
    className: s,
    style: f,
    ref: t
  }, i);
}), Yx = (e) => (t) => {
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
}, qx = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: tn.Transform.toString(t)
  }, {
    transform: tn.Transform.toString(n)
  }];
}, Xx = {
  duration: 250,
  easing: "ease",
  keyframes: qx,
  sideEffects: /* @__PURE__ */ Yx({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Zx(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return zo((i, s) => {
    if (t === null)
      return;
    const a = n.get(i);
    if (!a)
      return;
    const c = a.node.current;
    if (!c)
      return;
    const l = af(s);
    if (!l)
      return;
    const {
      transform: d
    } = Ke(s).getComputedStyle(s), u = Xd(d);
    if (!u)
      return;
    const f = typeof t == "function" ? t : Jx(t);
    return rf(c, o.draggable.measure), f({
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
function Jx(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...Xx,
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
let kc = 0;
function Qx(e) {
  return ee(() => {
    if (e != null)
      return kc++, kc;
  }, [e]);
}
const eC = /* @__PURE__ */ Ne.memo((e) => {
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
  } = df(), I = Se(Wo), P = Qx(u?.id), w = uf(s, {
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
  }), k = ea(f), E = Zx({
    config: r,
    draggableNodes: v,
    droppableContainers: m,
    measuringConfiguration: x
  }), D = k ? b.setRef : void 0;
  return Ne.createElement(Wx, null, Ne.createElement(jx, {
    animation: E
  }, u && P ? Ne.createElement(Ux, {
    key: P,
    id: u.id,
    ref: D,
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
function ta(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function tC(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function qr(e) {
  return e !== null && e >= 0;
}
function nC(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function rC(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const na = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = ta(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, ff = "Sortable", hf = /* @__PURE__ */ Ne.createContext({
  activeIndex: -1,
  containerId: ff,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: na,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function oC(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = na,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: c,
    over: l,
    measureDroppableContainers: d
  } = df(), u = Pr(ff, n), f = a.rect !== null, h = ee(() => r.map((I) => typeof I == "object" && "id" in I ? I.id : I), [r]), v = s != null, m = s ? h.indexOf(s.id) : -1, b = l ? h.indexOf(l.id) : -1, y = le(h), x = !nC(h, y.current), S = b !== -1 && m === -1 || x, C = rC(i);
  ft(() => {
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
      sortedRects: tC(h, c),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, u, C.draggable, C.droppable, S, h, b, c, f, o]
  );
  return Ne.createElement(hf.Provider, {
    value: N
  }, t);
}
const iC = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return ta(n, r, o).indexOf(t);
}, sC = (e) => {
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
}, aC = {
  duration: 200,
  easing: "ease"
}, pf = "transform", cC = /* @__PURE__ */ tn.Transition.toString({
  property: pf,
  duration: 0,
  easing: "linear"
}), lC = {
  roleDescription: "sortable"
};
function uC(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = se(null), a = le(n);
  return ft(() => {
    if (!t && n !== a.current && r.current) {
      const c = o.current;
      if (c) {
        const l = Xn(r.current, {
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
function dC(e) {
  let {
    animateLayoutChanges: t = sC,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = iC,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: l = aC
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
  } = Se(hf), S = fC(r, h), C = d.indexOf(s), N = ee(() => ({
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
  } = Hx({
    id: s,
    data: N,
    disabled: S.droppable,
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
  } = Lx({
    id: s,
    data: N,
    attributes: {
      ...lC,
      ...n
    },
    disabled: S.draggable
  }), j = S0(E, W), K = !!D, H = K && !v && qr(f) && qr(b), V = !y && $, Y = V && H ? A : null, G = H ? Y ?? (a ?? x)({
    rects: m,
    activeNodeRect: B,
    activeIndex: f,
    overIndex: b,
    index: C
  }) : null, U = qr(f) && qr(b) ? i({
    id: s,
    items: d,
    activeIndex: f,
    overIndex: b
  }) : C, J = D?.id, Z = le({
    activeId: J,
    items: d,
    newIndex: U,
    containerId: u
  }), te = d !== Z.current.items, re = t({
    active: D,
    containerId: u,
    isDragging: $,
    isSorting: K,
    id: s,
    index: C,
    items: d,
    newIndex: Z.current.newIndex,
    previousItems: Z.current.items,
    previousContainerId: Z.current.containerId,
    transition: l,
    wasDragging: Z.current.activeId != null
  }), be = uC({
    disabled: !re,
    index: C,
    node: w,
    rect: P
  });
  return ce(() => {
    K && Z.current.newIndex !== U && (Z.current.newIndex = U), u !== Z.current.containerId && (Z.current.containerId = u), d !== Z.current.items && (Z.current.items = d);
  }, [K, U, u, d]), ce(() => {
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
    data: N,
    rect: P,
    index: C,
    newIndex: U,
    items: d,
    isOver: k,
    isSorting: K,
    isDragging: $,
    listeners: F,
    node: w,
    overIndex: b,
    over: R,
    setNodeRef: j,
    setActivatorNodeRef: M,
    setDroppableNodeRef: E,
    setDraggableNodeRef: W,
    transform: be ?? G,
    transition: oe()
  };
  function oe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      be || // Or to prevent items jumping to back to their "new" position when items change
      te && Z.current.newIndex === C
    )
      return cC;
    if (!(V && !Ho(_) || !l) && (K || re))
      return tn.Transition.toString({
        ...l,
        property: pf
      });
  }
}
function fC(e, t) {
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
function Co(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const hC = [fe.Down, fe.Right, fe.Up, fe.Left], pC = (e, t) => {
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
  if (hC.includes(e.code)) {
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
    const l = H0({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: c
    });
    let d = Yd(l, "id");
    if (d === s?.id && l.length > 1 && (d = l[1].id), d != null) {
      const u = i.get(n.id), f = i.get(d), h = f ? o.get(f.id) : null, v = f?.node.current;
      if (v && h && u && f) {
        const b = jo(v).some((I, P) => a[P] !== I), y = gf(u, f), x = gC(u, f), S = b || !y ? {
          x: 0,
          y: 0
        } : {
          x: x ? r.width - h.width : 0,
          y: x ? r.height - h.height : 0
        }, C = {
          x: h.left,
          y: h.top
        };
        return S.x && S.y ? C : pr(C, S);
      }
    }
  }
};
function gf(e, t) {
  return !Co(e) || !Co(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function gC(e, t) {
  return !Co(e) || !Co(t) || !gf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function mC({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: s, listeners: a, setNodeRef: c, transform: l, transition: d, isDragging: u } = dC({
    id: o(e),
    disabled: i
  }), f = {
    transform: tn.Transform.toString(l),
    transition: d
  };
  return /* @__PURE__ */ L("div", { ref: c, style: f, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
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
function vC({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ p("div", { className: "rotate-2", children: n(e, t, !0) });
}
function bC({
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
  const [m, b] = se(null), y = $0(
    pc(Qs),
    pc(Zs, {
      coordinateGetter: pC
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
    const k = h.find((_) => o(_) === P.id), E = h.findIndex((_) => o(_) === P.id), D = h.findIndex((_) => o(_) === w.id);
    if (k && u && u(k)) {
      b(null);
      return;
    }
    if (f && !f(k, D, h)) {
      b(null);
      return;
    }
    if (E !== -1 && D !== -1) {
      const _ = ta(h, E, D);
      v(_), t(_);
    }
    b(null);
  }, C = h.find((I) => o(I) === m), N = C ? h.findIndex((I) => o(I) === m) : -1;
  return /* @__PURE__ */ L("div", { className: `w-full ${s}`, children: [
    a && /* @__PURE__ */ p("div", { className: "mb-6", children: a() }),
    h.length === 0 && c ? c() : /* @__PURE__ */ p("div", { className: "mb-6", children: /* @__PURE__ */ L(
      Tx,
      {
        sensors: y,
        collisionDetection: z0,
        onDragStart: x,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ p(oC, { items: h.map(o), strategy: na, children: /* @__PURE__ */ p("div", { className: i, children: h.map((I, P) => /* @__PURE__ */ p(
            mC,
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
          /* @__PURE__ */ p(eC, { children: C ? d ? /* @__PURE__ */ p("div", { className: "rotate-2 shadow-lg", children: d(C, N) }) : /* @__PURE__ */ p(vC, { item: C, index: N, renderItem: n }) : null })
        ]
      }
    ) }),
    l && /* @__PURE__ */ L("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ p("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ L("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        h.length,
        " | Active: ",
        m || "none"
      ] }),
      /* @__PURE__ */ L("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        h.map((I, P) => `${P + 1}:${o(I).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const yC = kl(
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
function ra({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p("div", { className: ue(yC({ variant: t }), e), ...n });
}
function wC({
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
        /* @__PURE__ */ p(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ L("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ p("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ p("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ p("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ p(ra, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${s ? "opacity-75" : ""}`, children: s ? /* @__PURE__ */ p(Ci, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ L(Be, { children: [
          /* @__PURE__ */ p("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ p(Sl, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function xC({
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
      (k.size !== n.length || n.some((D) => !k.has(b(D)))) && h(n);
    }
  }, [n, e, v, f]);
  const y = (k) => {
    h(k), m(!0);
  }, x = () => {
    r(f), m(!1), t(!1);
  }, S = () => {
    h(n), m(!1), t(!1);
  }, C = g.useMemo(() => (!i || typeof i != "function") && s ? Us({ pageComponents: s, payload: a, setup: c }) : null, [i, s, a, c]), N = (k, E, D) => {
    const _ = k.strictPosition, T = !!o && !(_ === "start" || _ === "end"), W = ($) => {
      $.preventDefault(), $.stopPropagation(), o && (o(k), h((R) => R.filter((M) => b(M) !== b(k))), m(!0));
    }, F = i && typeof i == "function" ? i(k, E, D) : C ? C(k, E, D) : /* @__PURE__ */ p(wC, { page: k, index: E, isDragging: D });
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
            /* @__PURE__ */ p(Sl, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ p(wt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, I = () => /* @__PURE__ */ L("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ p("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ p(Da, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ p("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ p("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), P = g.useCallback((k) => {
    const E = k.strictPosition;
    return E === "start" || E === "end";
  }, []), w = g.useCallback((k, E, D) => {
    const _ = k.strictPosition;
    if (_ === "start" || _ === "end")
      return !1;
    let B = -1, T = D.length;
    for (let W = 0; W < D.length; W++) {
      const F = D[W].strictPosition;
      F === "start" ? B = W : F === "end" && T === D.length && (T = W);
    }
    return !(E <= B || E >= T);
  }, []);
  return /* @__PURE__ */ p(zd, { open: e, onOpenChange: (k) => {
    k || S();
  }, children: /* @__PURE__ */ L(
    Ks,
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
        /* @__PURE__ */ p(Ws, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ L("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ p("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ p(Da, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ L("div", { className: "flex-1", children: [
            /* @__PURE__ */ p(Gs, { className: "text-base font-medium text-gray-900 leading-tight", children: l }),
            /* @__PURE__ */ p(Vs, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ L(ra, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            f.length,
            " ",
            f.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ p("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ p("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ p(
          bC,
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
        /* @__PURE__ */ L(jd, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ p(
            ze,
            {
              variant: "outline",
              onClick: S,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ p(
            ze,
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
function CC({
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
  const D = typeof u == "function" ? (M) => u({ pageNo: M, pageId: e }) : () => u, _ = n || t || e, T = [_ ? `uhuu-page--${_}` : "", f].filter(Boolean).join(" "), W = (M = h, A = v) => r ? /* @__PURE__ */ p(
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
  ) : null, F = g.useMemo(
    () => ({
      mode: "visible",
      pageIndex: x,
      chunksByFlowId: S
    }),
    [x, S]
  ), $ = g.useCallback((M) => {
    N && P?.(N, M);
  }, [N, P]), R = g.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: I,
      registerMeasurement: $
    }),
    [I, $]
  );
  return k === "content" ? /* @__PURE__ */ L(Be, { children: [
    d,
    /* @__PURE__ */ p(Fn.Provider, { value: F, children: W(h, v) })
  ] }) : /* @__PURE__ */ L(Be, { children: [
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
        children: /* @__PURE__ */ p(ro, { setup: l, children: /* @__PURE__ */ p(cr, { className: T, pageNo: h, "data-page-key": _, children: /* @__PURE__ */ p(Fn.Provider, { value: R, children: W(
          m ?? h,
          b ?? v
        ) }) }) })
      }
    ),
    w && /* @__PURE__ */ p(ro, { setup: l, children: /* @__PURE__ */ L(
      cr,
      {
        className: T,
        pageNo: h,
        overlay: ({ pageNo: M }) => D(M),
        "data-page-key": _,
        children: [
          d,
          /* @__PURE__ */ p(Fn.Provider, { value: F, children: W(h, v) })
        ]
      }
    ) })
  ] });
}
const mf = g.forwardRef(
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
mf.displayName = "Select";
var SC = Object.defineProperty, nn = (e, t) => SC(e, "name", { value: t, configurable: !0 }), oa = "Switch", [PC, oP] = /* @__PURE__ */ pt(oa), [IC, ia] = PC(oa);
function vf(e) {
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
  } = e, [f, h] = Cn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: oa
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
  return /* @__PURE__ */ p(IC, { scope: t, ...I, children: yf(u) ? u(I) : r });
}
nn(vf, "SwitchProvider");
var NC = "SwitchTrigger", kC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ nn(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
    } = ia(NC, t), y = me(o, u), x = g.useRef(l);
    return g.useEffect(() => {
      const S = s ? i?.ownerDocument.getElementById(s) : i?.form;
      if (S instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ nn(() => f(x.current), "reset");
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [i, s, f]), /* @__PURE__ */ p(
      xe.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": d,
        "data-state": sa(l),
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
), bf = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function(t, n) {
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
      vf,
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
          /* @__PURE__ */ p(
            kC,
            {
              ...f,
              ref: n,
              __scopeSwitch: r
            }
          ),
          h && /* @__PURE__ */ p(
            DC,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), RC = "SwitchThumb", EC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ nn(function(t, n) {
    const { __scopeSwitch: r, ...o } = t, i = ia(RC, r);
    return /* @__PURE__ */ p(
      xe.span,
      {
        "data-state": sa(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), AC = "SwitchBubbleInput", DC = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
    } = ia(AC, t), y = me(o, b), x = Mo(i), S = g.useRef(!1), C = g.useRef(c), N = g.useRef(a);
    g.useEffect(() => {
      const P = m;
      if (!P) return;
      const w = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, D = a !== N.current;
      N.current = a;
      const _ = C.current !== c;
      C.current = c;
      const B = !(D && s.current);
      if (_ && E) {
        S.current = !D;
        const T = new Event("click", { bubbles: B });
        E.call(P, c), P.dispatchEvent(T), S.current = !1;
      }
    }, [m, c, s, a]);
    const I = g.useRef(c);
    return /* @__PURE__ */ p(
      xe.input,
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
function yf(e) {
  return typeof e == "function";
}
nn(yf, "isFunction");
function sa(e) {
  return e ? "checked" : "unchecked";
}
nn(sa, "getState");
const wf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  bf,
  {
    ref: n,
    className: ue(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      EC,
      {
        className: ue(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
wf.displayName = bf.displayName;
var MC = Object.defineProperty, OC = (e, t) => MC(e, "name", { value: t, configurable: !0 });
function aa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
OC(aa, "clamp");
var _C = Object.defineProperty, TC = (e, t) => _C(e, "name", { value: t, configurable: !0 });
function xf(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
TC(xf, "usePrevious");
var FC = Object.defineProperty, pe = (e, t) => FC(e, "name", { value: t, configurable: !0 }), Cf = ["PageUp", "PageDown"], Sf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Pf = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Nr = "Slider", [Vi, $C, LC] = /* @__PURE__ */ Po(Nr), [ca, iP] = /* @__PURE__ */ pt(Nr, [
  LC
]), [BC, kr] = ca(Nr), If = /* @__PURE__ */ g.forwardRef(
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
    } = t, y = g.useRef(/* @__PURE__ */ new Set()), x = g.useRef(0), S = g.useRef(!1), N = a === "horizontal" ? zC : HC, [I, P] = g.useState(null), w = me(n, P), [k = [], E] = Cn({
      prop: u,
      defaultProp: d,
      onChange: /* @__PURE__ */ pe(($) => {
        [...y.current][x.current]?.focus({
          preventScroll: !0,
          focusVisible: S.current
        }), S.current = !1, f($);
      }, "onChange")
    }), D = g.useRef(k), _ = g.useRef(k);
    g.useEffect(() => {
      const $ = m ? I?.ownerDocument.getElementById(m) : I?.closest("form");
      if ($ instanceof HTMLFormElement) {
        const R = /* @__PURE__ */ pe(() => E(_.current), "reset");
        return $.addEventListener("reset", R), () => $.removeEventListener("reset", R);
      }
    }, [I, m, E]);
    function B($) {
      const R = Of(k, $);
      F($, R);
    }
    pe(B, "handleSlideStart");
    function T($) {
      F($, x.current);
    }
    pe(T, "handleSlideMove");
    function W() {
      String(k) !== String(D.current) && h(k);
    }
    pe(W, "handleSlideEnd");
    function F($, R, { commit: M } = { commit: !1 }) {
      const A = ua(s), j = sr(Math.round(($ - o) / s) * s + o, A), K = aa(j, [o, i]);
      E((H = []) => {
        const V = Df(H, K, R);
        if (Ff(V, l * s)) {
          x.current = V.indexOf(K);
          const Y = String(V) !== String(H);
          return Y && M && h(V), Y ? V : H;
        } else
          return H;
      });
    }
    return pe(F, "updateValues"), /* @__PURE__ */ p(
      BC,
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
        children: /* @__PURE__ */ p(Vi.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ p(Vi.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ p(
          N,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...b,
            ref: w,
            onPointerDown: ne(b.onPointerDown, () => {
              c || (D.current = k, S.current = !1);
            }),
            min: o,
            max: i,
            inverted: v,
            onSlideStart: c ? void 0 : B,
            onSlideMove: c ? void 0 : T,
            onSlideEnd: c ? void 0 : W,
            onHomeKeyDown: () => {
              c || (S.current = !0, F(o, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (S.current = !0, F(i, k.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: $, direction: R }) => {
              if (!c) {
                S.current = !0;
                const j = Cf.includes($.key) || $.shiftKey && Sf.includes($.key) ? 10 : 1, K = x.current, H = k[K], V = $f(H, {
                  min: o,
                  step: s,
                  direction: R,
                  multiplier: j
                });
                F(V, K, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [Nf, kf] = ca(Nr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), zC = /* @__PURE__ */ g.forwardRef(
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
    } = t, [f, h] = g.useState(null), v = me(n, h), m = g.useRef(void 0), b = Io(i), y = b === "ltr", x = y && !s || !y && s;
    function S(C) {
      const N = m.current || f.getBoundingClientRect(), I = [0, N.width], w = Go(I, x ? [r, o] : [o, r]);
      return m.current = N, w(C - N.left);
    }
    return pe(S, "getValueFromPointer"), /* @__PURE__ */ p(
      Nf,
      {
        scope: t.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ p(
          Rf,
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
              const I = Pf[x ? "from-left" : "from-right"].includes(C.key);
              d?.({ event: C, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), HC = /* @__PURE__ */ g.forwardRef(
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
      const y = h.current || u.current.getBoundingClientRect(), x = [0, y.height], C = Go(x, v ? [o, r] : [r, o]);
      return h.current = y, C(b - y.top);
    }
    return pe(m, "getValueFromPointer"), /* @__PURE__ */ p(
      Nf,
      {
        scope: t.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ p(
          Rf,
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
              const x = Pf[v ? "from-bottom" : "from-top"].includes(b.key);
              l?.({ event: b, direction: x ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), Rf = /* @__PURE__ */ g.forwardRef(
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
    } = t, u = kr(Nr, r);
    return /* @__PURE__ */ p(
      xe.span,
      {
        ...d,
        ref: n,
        onKeyDown: ne(t.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : Cf.concat(Sf).includes(f.key) && (l(f), f.preventDefault());
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
), jC = "SliderTrack", KC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = kr(jC, r);
    return /* @__PURE__ */ p(
      xe.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...o,
        ref: n
      }
    );
  }, "SliderTrack")
), Rc = "SliderRange", WC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = kr(Rc, r), s = kf(Rc, r), a = g.useRef(null), c = me(n, a), l = i.values.length, d = i.values.map(
      (h) => la(h, i.min, i.max)
    ), u = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
    return /* @__PURE__ */ p(
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
), GC = "SliderThumb", [VC, Ef] = ca(GC), UC = "SliderThumbProvider";
function Af(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, i = kr(UC, t), s = $C(t), [a, c] = g.useState(null), l = g.useMemo(
    () => a ? s().findIndex((b) => b.ref.current === a) : -1,
    [s, a]
  ), d = Mo(a), u = a ? !!i.form || !!a.closest("form") : !0, f = i.values[l], h = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0), v = f === void 0 ? 0 : la(f, i.min, i.max);
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
  return /* @__PURE__ */ p(VC, { scope: t, ...m, children: Lf(o) ? o(m) : r });
}
pe(Af, "SliderThumbProvider");
var mi = "SliderThumbTrigger", YC = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = kr(mi, r), s = kf(mi, r), { index: a, value: c, percent: l, size: d, onThumbChange: u } = Ef(
      mi,
      r
    ), f = me(n, u), h = Mf(a, i.values.length), v = d?.[s.size], m = v ? _f(v, l, s.direction) : 0;
    return /* @__PURE__ */ p(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${m}px)`
        },
        children: /* @__PURE__ */ p(Vi.ItemSlot, { scope: r, children: /* @__PURE__ */ p(
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
            onFocus: ne(t.onFocus, () => {
              i.valueIndexToChangeRef.current = a;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), qC = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeSlider: r, name: o, ...i } = t;
    return /* @__PURE__ */ p(
      Af,
      {
        __scopeSlider: r,
        name: o,
        internal_do_not_use_render: ({ index: s, isFormControl: a }) => /* @__PURE__ */ L(Be, { children: [
          /* @__PURE__ */ p(
            YC,
            {
              ...i,
              ref: n,
              __scopeSlider: r
            }
          ),
          a ? /* @__PURE__ */ p(
            ZC,
            {
              __scopeSlider: r
            },
            s
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), XC = "SliderBubbleInput", ZC = /* @__PURE__ */ g.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function({ __scopeSlider: t, ...n }, r) {
    const { value: o, name: i, form: s } = Ef(XC, t), a = g.useRef(null), c = me(a, r), l = xf(o);
    return g.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
      if (l !== o && h) {
        const v = new Event("input", { bubbles: !0 });
        h.call(d, o), d.dispatchEvent(v);
      }
    }, [l, o]), /* @__PURE__ */ p(
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
function Df(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
pe(Df, "getNextSortedValues");
function la(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return aa(i, [0, 100]);
}
pe(la, "convertValueToPercentage");
function Mf(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
pe(Mf, "getLabel");
function Of(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
pe(Of, "getClosestValueIndex");
function _f(e, t, n) {
  const r = e / 2, i = Go([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
pe(_f, "getThumbInBoundsOffset");
function Tf(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
pe(Tf, "getStepsBetweenValues");
function Ff(e, t) {
  if (t > 0) {
    const n = Tf(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
pe(Ff, "hasMinStepsBetweenValues");
function Go(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
pe(Go, "linearScale");
function ua(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), i = r.split(".")[1] || "", s = Number(o);
    return Math.max(0, i.length - s);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
pe(ua, "getDecimalCount");
function sr(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
pe(sr, "roundValue");
function $f(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const i = ua(n), s = (e - t) / n, a = Math.round(s), c = sr(a * n + t, i) === sr(e, i);
  let l;
  return c ? l = a + o * r : r > 0 ? l = Math.ceil(s) : l = Math.floor(s), sr(l * n + t, i);
}
pe($f, "getNextStepValue");
function Lf(e) {
  return typeof e == "function";
}
pe(Lf, "isFunction");
const da = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ L(
  If,
  {
    ref: n,
    className: ue(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p(KC, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ p(WC, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ p(qC, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
da.displayName = If.displayName;
var JC = Object.defineProperty, QC = (e, t) => JC(e, "name", { value: t, configurable: !0 }), eS = /* @__PURE__ */ g.forwardRef(
  /* @__PURE__ */ QC(function(t, n) {
    return /* @__PURE__ */ p(
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
), Bf = eS;
const Tn = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Bf,
  {
    ref: n,
    className: ue(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Tn.displayName = Bf.displayName;
function zf(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((s) => typeof s == "function" ? s(o) : s === o.id || s === o.templateId || o.componentKey === s) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function tS({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = zf(e, t), o = (i) => {
    const s = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p(Tn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ p(
            mf,
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
        return /* @__PURE__ */ L("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ p(Tn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ p(
            wf,
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
            /* @__PURE__ */ p(Tn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ p("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: a })
          ] }),
          /* @__PURE__ */ p(
            da,
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
          /* @__PURE__ */ p(Tn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ p(
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
                children: /* @__PURE__ */ p(dg, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ p("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ p("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: a }) }),
            /* @__PURE__ */ p(
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
                children: /* @__PURE__ */ p(wt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const a = String(s);
        return /* @__PURE__ */ L("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p(Tn, { className: "text-xs font-medium text-gray-500", children: i.label }),
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
                children: l && /* @__PURE__ */ p(as, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
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
function nS({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || zf(e, t).length === 0 ? null : /* @__PURE__ */ L(yr, { modal: !1, children: [
    /* @__PURE__ */ p(wr, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ L(
      ze,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ p(Cl, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ p("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ p(Un, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ p(
      tS,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function rS({
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
  ) : I ? /* @__PURE__ */ L(yr, { open: h, onOpenChange: v, modal: !1, children: [
    /* @__PURE__ */ p(wr, { asChild: !0, children: /* @__PURE__ */ L(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ p("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ p(xl, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ L(Un, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ L(qe, { onSelect: (P) => {
        P.preventDefault(), v(!1), b(!0);
      }, children: [
        /* @__PURE__ */ p(hg, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && N && /* @__PURE__ */ p(bn, {}),
      n && /* @__PURE__ */ L(qe, { onClick: c, children: [
        /* @__PURE__ */ p(Yp, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ L(qe, { onClick: l, children: [
        /* @__PURE__ */ p(Gp, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ p(bn, {}),
      o && /* @__PURE__ */ L(qe, { onClick: d, children: [
        /* @__PURE__ */ p(wt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ L(qe, { onClick: u, children: [
        /* @__PURE__ */ p(og, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      s && /* @__PURE__ */ p(bn, {}),
      s && /* @__PURE__ */ L(qe, { onClick: f, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ p(bg, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ p("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function to(e) {
  if (!e || typeof e != "object" || !("binding" in e)) return e;
  const { binding: t, ...n } = e;
  return n;
}
function Hf(e, t) {
  return !!rn(e?.binding) && t?.mode === "cover";
}
function oS({ pageFormat: e = {}, pageFilter: t, pages: n = [] } = {}) {
  const r = { active: !1, plan: null, setup: to(e), warnings: [] };
  if (!Hf(e, t)) return r;
  const o = rn(e.binding), s = { ...ar.resolveDimensions(e), bleed: ar.clampBleed(e.bleed), binding: o }, a = Bc({ ...s, coverPages: n }), c = fh({
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
function iS(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: s,
    setup: a,
    stateKey: c = In,
    resolveNewItem: l,
    notifyError: d,
    pageFilter: u
  } = e, [f, h] = se(t), [v, m] = se(!1), b = le(t);
  ce(() => {
    try {
      const F = JSON.stringify(b.current), $ = JSON.stringify(t);
      F !== $ && (b.current = t, h(t));
    } catch {
      b.current !== t && (b.current = t, h(t));
    }
  }, [t]);
  const y = Se(xr), x = he((F) => {
    h(F);
    const $ = Pd(F, c);
    y?.mergePageEditorState && y.mergePageEditorState(F, c), o?.($), r?.(F, $);
  }, [r, o, c, y]), S = ee(() => {
    const F = /* @__PURE__ */ new Map();
    return f.forEach(($) => {
      const R = $.templateId ?? $.id;
      F.set(R, (F.get(R) ?? 0) + 1), We($) && $.pages?.forEach((M) => {
        const A = M.templateId ?? M.id;
        F.set(A, (F.get(A) ?? 0) + 1);
      });
    }), F;
  }, [f]), C = ee(() => n.filter((F) => {
    if (F.kind === "page") {
      const K = F, H = K.templateId ?? K.id, V = S.get(H) ?? 0, Y = K.repeatable ?? !1, z = K.maxInstances ?? null;
      return !(!Y && V > 0 || z !== null && V >= z);
    }
    const $ = F, R = $.templateId ?? $.id, M = S.get(R) ?? 0, A = $.repeatable ?? !1, j = $.maxInstances ?? null;
    return !(!A && M > 0 || A && j !== null && M >= j);
  }), [n, S]), N = ee(() => Ot(f), [f]), I = he(async (F, $) => {
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
    }, j = ((z) => {
      if (z.kind === "page") {
        const te = z, re = te.templateId ?? te.id, be = te.componentKey ?? te.id;
        return Nd(re, be, {
          label: te.label,
          className: te.className,
          repeatable: te.repeatable,
          maxInstances: te.maxInstances,
          integration: te.integration,
          strictPosition: te.strictPosition
        });
      }
      const G = z, U = G.templateId ?? G.id, J = {
        payload: s,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, Z = M(G.pageComponentKeys, J);
      return kd(U, Z, {
        label: G.label,
        repeatable: G.repeatable ?? !1,
        maxInstances: G.maxInstances ?? null,
        integration: G.integration,
        strictPosition: G.strictPosition
      });
    })(F);
    typeof window < "u" && window.$uhuu?.debug;
    let K, H = j;
    if (l)
      H = await l(j);
    else {
      const z = R(j.integration);
      let G = !1;
      if (z !== "none" && typeof window < "u") {
        const U = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        U && (K = await U({ item: j, mode: z }), K == null && z === "required" && (G = !0));
      }
      if (G) return { success: !1 };
    }
    if (H === null) return { success: !1 };
    const V = H ?? j;
    if (K !== void 0 && y?.setIntegrationPayload) {
      const z = V.id;
      y.setIntegrationPayload(z, K);
    }
    return x(((z, G, U) => {
      const J = G.strictPosition;
      if (J === "start") return [G, ...z];
      if (J === "end") return [...z, G];
      const Z = [], te = [], re = [];
      if (z.forEach((oe) => {
        const Re = oe.strictPosition;
        Re === "start" ? Z.push(oe) : Re === "end" ? re.push(oe) : te.push(oe);
      }), !U || U.mode === "end")
        return [...Z, ...te, G, ...re];
      const be = te.findIndex((oe) => oe.id === U.anchorId);
      return be === -1 ? z.find((Je) => Je.id === U.anchorId)?.strictPosition === "start" ? [...Z, G, ...te, ...re] : [...Z, ...te, G, ...re] : (U.mode === "before" ? te.splice(be, 0, G) : te.splice(be + 1, 0, G), [...Z, ...te, ...re]);
    })(f, V, $)), { success: !0, insertedId: V.id };
  }, [f, x, l, y]), P = he((F) => {
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
      x(f.filter((A) => A.id !== F));
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
            const j = M.id;
            y.payload?.integrations?.[j] !== void 0 && y.removeIntegrationPayload(j);
          }
          x(f.filter((j) => j.id !== M.id));
        } else
          x(f.map((j) => j.id === M.id && We(j) ? {
            ...j,
            pages: j.pages.filter((K) => K.id !== F)
          } : j));
        return;
      }
  }, [f, d, x, y]), w = he((F, $) => {
    x(f.map((R) => R.id === F ? We(R) ? {
      ...R,
      ...$
    } : { ...R, ...$ } : R));
  }, [f, x]), k = he((F) => {
    x(F);
  }, [x]), E = ee(() => {
    const F = Ew(f);
    return u ? _w(F, u) : F;
  }, [f, u]), D = he((F) => {
    const $ = [];
    return E.forEach((R) => {
      We(R) ? (R.pages ?? []).forEach((A) => {
        $.push(F(A, R));
      }) : $.push(F(R, R));
    }), $;
  }, [E]), _ = ee(
    () => Aw(E),
    [E]
  ), B = he((F) => {
    const $ = Dw(F, f);
    x(((M) => {
      const A = [], j = [], K = [];
      return M.forEach((H) => {
        const V = H.strictPosition;
        V === "start" ? A.push(H) : V === "end" ? K.push(H) : j.push(H);
      }), [...A, ...j, ...K];
    })($));
  }, [f, x]), T = he(() => {
    m(!0);
  }, []), W = ee(() => {
    if (i)
      return Us({ pageComponents: i, payload: s, setup: a });
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
    openAddDialog: T,
    renderItems: D,
    itemsForReorder: _,
    handleReorder: B,
    defaultRenderThumbnail: W
  };
}
function sS({
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
function aS(e = [], t = {}) {
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
function cS({
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
    () => aS(e, c),
    [e, c]
  ), u = d.length, f = ee(
    () => d.filter((h) => Tw(h.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: f,
    virtualTotalPageCount: u,
    registerMeasurement: l
  };
}
function Ec(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function lS(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function uS({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = Ad(e, t, n), s = n && We(n) ? n.id : void 0, a = `pages.${t.id}`, c = s ? `pages.${s}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: s,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (l) => lc(i.instanceId, l)
    },
    paths: {
      integration: (l) => lc(i.instanceId, l),
      page: (l) => Ec(a, l),
      group: (l) => Ec(c, l),
      document: (l) => l ?? null
    },
    defaults: {
      imageGalleryPath: lS(
        e,
        i.integration,
        o
      )
    }
  };
}
const Ac = (e, t, n = !1, r) => {
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
  } : Nd(a, s, {
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
}, Dc = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, s = fS(e.pageComponentKeys, o).map((a) => {
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
  return kd(e.id, s, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, dS = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], fS = (e, t) => {
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
}, hS = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: s
  } = e, a = dS(n), c = /* @__PURE__ */ new Map();
  a.forEach((m) => c.set(m.id, m));
  const l = r.length ? r : Object.keys(o), d = { ...i };
  Object.entries(o).forEach(([m, b]) => {
    b.component && (d[m] = b.component);
  });
  const u = t.map((m) => {
    if (typeof m == "string") {
      const y = c.get(m);
      return y ? Dc(y, !0, s, o) : Ac(m, void 0, !0, o);
    }
    return m.pageComponentKeys !== void 0 ? Dc(m, !0, s, o) : Ac(m, void 0, !0, o);
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
var pS = Object.defineProperty, Bt = (e, t) => pS(e, "name", { value: t, configurable: !0 }), gS = "AlertDialog", [mS, sP] = /* @__PURE__ */ pt(gS, [
  _d
]), zt = _d(), vS = /* @__PURE__ */ Bt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = zt(t);
  return /* @__PURE__ */ p(Td, { ...r, ...n, modal: !0 });
}, "AlertDialog");
g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ p(f0, { ...i, ...o, ref: n });
  }, "AlertDialogTrigger")
);
var bS = /* @__PURE__ */ Bt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = zt(t);
  return /* @__PURE__ */ p(Ld, { ...r, ...n });
}, "AlertDialogPortal"), yS = g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ p(Ls, { ...i, ...o, ref: n });
  }, "AlertDialogOverlay")
), wS = "AlertDialogContent", [xS, CS] = mS(wS), SS = g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, children: o, ...i } = t, s = zt(r), a = g.useRef(null), c = me(n, a), l = g.useRef(null);
    return /* @__PURE__ */ p(xS, { scope: r, cancelRef: l, children: /* @__PURE__ */ p(
      Bs,
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
), PS = g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ p(zs, { ...i, ...o, ref: n });
  }, "AlertDialogTitle")
), IS = g.forwardRef(/* @__PURE__ */ Bt(function(t, n) {
  const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
  return /* @__PURE__ */ p(Hs, { ...i, ...o, ref: n });
}, "AlertDialogDescription")), NS = g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = zt(r);
    return /* @__PURE__ */ p(js, { ...i, ...o, ref: n });
  }, "AlertDialogAction")
), kS = "AlertDialogCancel", RS = g.forwardRef(
  /* @__PURE__ */ Bt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, { cancelRef: i } = CS(kS, r), s = zt(r), a = me(n, i);
    return /* @__PURE__ */ p(js, { ...s, ...o, ref: a });
  }, "AlertDialogCancel")
), ES = vS, AS = bS, jf = yS, Kf = SS, Wf = NS, Gf = RS, Vf = PS, Uf = IS;
const DS = ES, MS = AS, Yf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  jf,
  {
    ref: n,
    className: ue(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Yf.displayName = jf.displayName;
const qf = g.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = cs();
  return /* @__PURE__ */ L(MS, { container: r || void 0, children: [
    /* @__PURE__ */ p(Yf, {}),
    /* @__PURE__ */ p(
      Kf,
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
qf.displayName = Kf.displayName;
const Xf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p("div", { className: ue("flex flex-col gap-2 text-left", e), ...t });
Xf.displayName = "AlertDialogHeader";
const Zf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p(
  "div",
  {
    className: ue("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
Zf.displayName = "AlertDialogFooter";
const Jf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Vf,
  {
    ref: n,
    className: ue("text-base font-semibold text-gray-900", e),
    ...t
  }
));
Jf.displayName = Vf.displayName;
const Qf = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Uf,
  {
    ref: n,
    className: ue("text-sm text-gray-600", e),
    ...t
  }
));
Qf.displayName = Uf.displayName;
const eh = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Wf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
eh.displayName = Wf.displayName;
const OS = g.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Gf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
OS.displayName = Gf.displayName;
const vi = "__edit__", bi = "__print__";
function Mc({
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
        e ? /* @__PURE__ */ p(as, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ p("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ p("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function Oc({ label: e, value: t }) {
  return /* @__PURE__ */ L(gd, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ p("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ L("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ p("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ p(eg, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function _S({
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
    { value: vi, label: "Edit" },
    ...f.length > 0 ? f.map((C) => ({ value: C, label: e[C].label })) : [{ value: bi, label: "Print" }]
  ], v = r ? vi : t || f[0] || bi, m = h.find((C) => C.value === v)?.label ?? "Edit", b = (C) => {
    if (C === vi) {
      o(!0);
      return;
    }
    o(!1), C !== bi && e && e[C] && n?.(C, e[C]);
  }, y = !!c && c.length > 0, x = c?.find((C) => C.id === l)?.name, S = () => {
    const C = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    C && C.trim() && u?.(C.trim());
  };
  return /* @__PURE__ */ L(yr, { modal: !1, children: [
    /* @__PURE__ */ p(wr, { asChild: !0, children: /* @__PURE__ */ L(
      ze,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ p(Xp, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ p("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ L(Un, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ L(rc, { children: [
        /* @__PURE__ */ p(Oc, { label: "Print Preview", value: m }),
        /* @__PURE__ */ p(Bi, { className: "min-w-[180px]", children: h.map((C) => /* @__PURE__ */ p(
          Mc,
          {
            checked: v === C.value,
            label: C.label,
            onSelect: () => b(C.value)
          },
          C.value
        )) })
      ] }),
      y && /* @__PURE__ */ L(rc, { children: [
        /* @__PURE__ */ p(Oc, { label: "Brand Kit", value: x }),
        /* @__PURE__ */ L(Bi, { className: "min-w-[200px]", children: [
          c.map((C) => /* @__PURE__ */ p(
            Mc,
            {
              checked: l === C.id,
              label: C.name,
              keepOpen: !0,
              onSelect: () => d?.(C.id)
            },
            C.id
          )),
          u && /* @__PURE__ */ L(Be, { children: [
            /* @__PURE__ */ p(bn, {}),
            /* @__PURE__ */ L(
              qe,
              {
                onSelect: (C) => {
                  C.preventDefault(), S();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ p(wt, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ p("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ L(Be, { children: [
        /* @__PURE__ */ p(bn, {}),
        /* @__PURE__ */ p(md, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ L("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ L("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ p("span", { children: "Opacity" }),
            /* @__PURE__ */ L("span", { children: [
              s,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: "pt-2", children: /* @__PURE__ */ p(
            da,
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
          /* @__PURE__ */ L("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ p("span", { children: "Hidden" }),
            /* @__PURE__ */ p("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const TS = { width: 210, height: 297 };
function FS(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function $S({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ p("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ L("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ p("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ p(as, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ L("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ L("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ p(ze, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ p(ze, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
const _c = /* @__PURE__ */ new Set();
function Tc({
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
  stateKey: m = In,
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
  const E = i ?? TS, { interactive: D, setInteractive: _, enableDevTools: B } = ls(), T = us(), [W, F] = se(null), [$, R] = se(null), [M, A] = se(void 0), [j, K] = se(0), [H, V] = se(0), Y = W ?? S, z = ee(() => $ ? { ...E, ...$ } : E, [E, $]), G = Se(xr), U = G?.payload ?? o, [J, Z] = se(!1), te = !D && Hf(z, Y), re = z?.preview ?? "single_page", be = te ? "single_page" : re, oe = ee(() => {
    const O = to(z);
    return re === "two_pages" || te ? { ...O, preview: "single_page" } : O;
  }, [re, te, z]), Re = ee(() => to(E), [E]), Je = ee(() => Fs(e), [e]), cn = ee(() => s?.length ? s.map((O) => "getValue" in O ? O : G?.setPageOptionValue ? Ww(
    O,
    G.payload,
    G.setPageOptionValue
  ) : ((Et() || B) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [s, G]), [ln, un] = se(null), [st, Ht] = se({ mode: "end" }), [at, Zn] = se(null), Nn = le(null), {
    items: Jn,
    itemsWithPageNum: Rr,
    availableItemsToAdd: vt,
    addItem: Nt,
    removeItem: jt,
    reorderItems: Er,
    updateItemFields: Ve,
    addDialogOpen: Ar,
    setAddDialogOpen: Vo,
    openAddDialog: Qn,
    itemsForReorder: er,
    handleReorder: Dr,
    defaultRenderThumbnail: Uo
  } = iS({
    initialItems: Je,
    availableItems: t,
    pageComponents: n,
    payload: U,
    setup: oe,
    stateKey: m,
    onItemsChange: b,
    onStateChange: y,
    resolveNewItem: x,
    notifyError: a
  }), kn = ee(() => {
    const O = [];
    for (const Q of Rr) {
      const ie = We(Q) ? Q.pages ?? [] : [Q];
      for (const de of ie) {
        if (!de?.id) continue;
        const Pe = We(Q) ? Q : void 0;
        O.push({
          ...de,
          kind: "page",
          id: de.id,
          pageNum: de.pageNum ?? O.length + 1,
          basePageNum: de.pageNum ?? O.length + 1,
          parentGroup: Pe,
          flowKey: FS(de, Pe)
        });
      }
    }
    return O.sort((Q, ie) => (Q.basePageNum ?? 0) - (ie.basePageNum ?? 0));
  }, [Rr]), Mr = ee(() => JSON.stringify({
    format: oe?.format,
    orientation: oe?.orientation,
    width: oe?.width,
    height: oe?.height,
    bleed: oe?.bleed,
    showBleed: oe?.showBleed,
    preview: oe?.preview,
    flowPages: kn.filter((O) => O.hasFlow).map((O) => O.flowKey).join("|")
  }), [oe, kn]), Or = ee(() => Ot(Jn), [Jn]), {
    allVirtualPages: _r,
    renderedVirtualPages: Ce,
    virtualTotalPageCount: Ae,
    registerMeasurement: He
  } = cS({
    logicalPages: kn,
    pageFilter: Y,
    layoutKey: Mr
  }), ct = ee(
    () => new Set(Ce.map((O) => O.virtualPageId)),
    [Ce]
  ), De = ee(
    () => oS({
      pageFormat: te ? z : to(z),
      pageFilter: Y,
      pages: Ce
    }),
    [te, z, Y, Ce]
  ), Ee = De.active ? De.plan : null, Ue = ee(
    () => Ee ? { ...oe, binding: De.setup.binding } : oe,
    [Ee, oe, De.setup]
  );
  g.useEffect(() => {
    if (!(!Et() || !De.warnings.length))
      for (const O of De.warnings)
        _c.has(O) || (_c.add(O), console.warn(`[uhuu-components] PageEditor cover spread: ${O}`));
  }, [De.warnings]);
  const Kt = ee(
    () => _r.filter((O) => O.hasFlow && O.virtualPageIndex === 0 && // Cover spread panels render in `content` mode without their own measurement pass.
    (d || !!Ee || !ct.has(O.virtualPageId))),
    [_r, ct, d, Ee]
  );
  g.useEffect(() => {
    if (!at) return;
    const O = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${at}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(O);
  }, [at]);
  const Me = sS({
    items: Jn,
    reorderItems: Er,
    availableItemsToAdd: vt,
    setPendingInsertPosition: Ht,
    openAddDialog: Qn
  }), lt = he(async (O) => {
    const Q = await Nt(O, st);
    Q.success && (Zn(Q.insertedId), Nn.current && clearTimeout(Nn.current), Nn.current = setTimeout(() => Zn(null), 1200), Ht({ mode: "end" }), O.repeatable && O.integration && un(O));
  }, [Nt, st]), Ye = he(() => {
    const O = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!O.length) return { mode: "end" };
    const Q = window.innerHeight / 2;
    let ie = null, de = 1 / 0;
    for (const ve of O) {
      const Ie = ve.getBoundingClientRect(), tt = Math.abs(Ie.top + Ie.height / 2 - Q);
      tt < de && (de = tt, ie = ve);
    }
    const Pe = ie?.getAttribute("data-page-item-id");
    return Pe ? { mode: "after", anchorId: Pe } : { mode: "end" };
  }, []), Qe = he(() => {
    Ht(Ye()), Qn();
  }, [Ye, Qn]), dn = g.useCallback(
    (O, Q, ie) => {
      if (!Q) return;
      const de = O.applyPatch?.(ie, Q);
      de && Ve(Q.id, de), O.onChange?.(Q.id, ie, {
        item: Q,
        updateItem: (Pe) => Ve(Q.id, Pe)
      });
    },
    [Ve]
  ), fn = (O) => /* @__PURE__ */ L("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ p("span", { children: "Page" }),
    /* @__PURE__ */ L("span", { children: [
      O.pageNo,
      " / ",
      O.total
    ] })
  ] }), ut = (O, Q, ie) => l ? l({ pageNo: O, total: Ae, pageId: Q, parent: ie }) : fn({ pageNo: O, total: Ae }), et = (O, Q = {}) => {
    const ie = O.parentGroup;
    if (d && Q.renderVisible !== !1 && Q.renderMode !== "content")
      return d({ page: O, parent: ie });
    const de = O.componentKey ?? O.id, Pe = B && c ? c(O) : null, ve = B && c ? g.isValidElement(Pe) ? g.cloneElement(Pe, {
      opacity: H
    }) : Pe : null, Ie = O.templateId ?? de, tt = n[de], hn = G?.getPagePayload ? G.getPagePayload(O) : go(U, { id: O.id, templateId: Ie, componentKey: de }), pn = Dd(
      U,
      O,
      ie
    ), En = uS({
      payload: U,
      page: O,
      parentGroup: ie,
      pagePayload: hn
    });
    return /* @__PURE__ */ p(
      CC,
      {
        pageId: O.id,
        templateId: Ie,
        pageNo: O.pageNum,
        measurementPageNo: O.basePageNum,
        component: tt,
        payload: U,
        pagePayload: hn,
        integration: pn,
        page: O,
        parentGroup: ie,
        componentKey: de,
        setup: Ue,
        reference: ve,
        overlay: ({ pageNo: Wt }) => ut(Wt, O.id, ie),
        className: O.className,
        dataBinding: En,
        totalPages: Ae,
        measurementTotalPages: Or,
        flowPageIndex: O.virtualPageIndex,
        flowChunksByFlowId: O.flowChunksByFlowId,
        measureFlow: Q.measureFlow ?? (!!O.hasFlow && O.virtualPageIndex === 0),
        flowMeasurementKey: O.flowKey,
        flowMeasurementVersion: Mr,
        onFlowMeasurement: O.hasFlow ? He : void 0,
        renderVisible: Q.renderVisible ?? !0,
        renderMode: Q.renderMode,
        spread: Q.spread
      },
      `${Q.renderVisible === !1 ? "measure-only" : "page"}-${O.virtualPageId}`
    );
  }, Rn = (O) => {
    const Q = O.componentKey ?? O.templateId ?? O.id;
    return [Q ? `uhuu-page--${Q}` : "", O.className].filter(Boolean).join(" ");
  }, th = (O) => {
    if (!Ee) return null;
    const { binding: Q, page: ie } = Ee, [de, Pe] = O.panels, ve = de.page, Ie = Pe.page, tt = (pn) => ({
      sheet: O.sheet,
      side: pn,
      spine: Q.spine,
      glue: Q.glue,
      bleed: ie.bleed
    }), hn = `Cover sheet ${O.index + 1} · ${O.sheet} (pages ${ve.pageNum} + ${Ie.pageNum})`;
    return /* @__PURE__ */ p("div", { "data-page-item-id": Ie.parentGroup?.id ?? Ie.id, children: /* @__PURE__ */ p(
      Yr,
      {
        title: hn,
        controls: /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
          /* @__PURE__ */ L("span", { className: "page-number", children: [
            ve.pageNum,
            " + ",
            Ie.pageNum
          ] }),
          /* @__PURE__ */ p("span", { className: "text-xs text-gray-500", children: hn })
        ] }),
        children: /* @__PURE__ */ p(ro, { setup: Ue, children: /* @__PURE__ */ p(
          nl,
          {
            sheet: O.sheet,
            pageNo: [ve.pageNum, Ie.pageNum],
            left: et(ve, { renderMode: "content", spread: tt("left") }),
            right: et(Ie, { renderMode: "content", spread: tt("right") }),
            spine: r && O.sheet === "outer" ? /* @__PURE__ */ p(
              r,
              {
                payload: U,
                sheet: "outer",
                spine: Q.spine,
                glue: Q.glue,
                bleed: ie.bleed,
                height: ie.height,
                totalPages: Ae,
                pages: { left: ve, right: Ie }
              }
            ) : void 0,
            overlay: ({ pageNo: pn, side: En }) => {
              const Wt = En === "left" ? ve : Ie;
              return ut(pn, Wt.id, Wt.parentGroup);
            },
            leftClassName: Rn(ve),
            rightClassName: Rn(Ie),
            leftPageKey: ve.componentKey ?? ve.templateId ?? ve.id,
            rightPageKey: Ie.componentKey ?? Ie.templateId ?? Ie.id
          }
        ) })
      }
    ) }, `cover-sheet-${O.sheet}`);
  }, Yo = (O, Q, ie) => {
    const de = !!Q && We(Q), Pe = de && Q.pages[0]?.id === O.id;
    if (O.virtualPageIndex > 0)
      return /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ p("span", { className: "page-number", children: O.pageNum }),
        /* @__PURE__ */ L("span", { className: "text-xs text-gray-500", children: [
          O.label || O.componentKey || O.id,
          " continued"
        ] })
      ] });
    if (de && !Pe)
      return /* @__PURE__ */ p("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ p("span", { className: "page-number", children: O.pageNum }),
        O.label && /* @__PURE__ */ p("span", { className: "text-xs text-gray-500", children: O.label }),
        /* @__PURE__ */ p("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const ve = de ? Q : O, Ie = de ? Q.label || Q.id : O.label || `Page ${O.pageNum}`;
    return /* @__PURE__ */ L("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ p("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: O.pageNum }),
      /* @__PURE__ */ p(
        rS,
        {
          name: Ie,
          canRename: !0,
          canMoveUp: !!ie?.onMoveUp,
          canMoveDown: !!ie?.onMoveDown,
          canAddPage: !!ie?.onAddPage,
          canDuplicate: !!ie?.onDuplicate,
          canDelete: Or > 1,
          onRename: (tt) => Ve(ve.id, { label: tt || void 0 }),
          onMoveUp: ie?.onMoveUp,
          onMoveDown: ie?.onMoveDown,
          onAddPage: ie?.onAddPage,
          onDuplicate: ie?.onDuplicate,
          onDelete: () => jt(ve.id)
        }
      ),
      /* @__PURE__ */ p("span", { className: "pl-1", children: cn.length > 0 && /* @__PURE__ */ p(
        nS,
        {
          pageOptions: cn,
          targetItem: ve,
          onChange: dn,
          title: de ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, nh = ee(() => {
    if (be !== "two_pages") return [];
    const O = Ce;
    if (!O.length) return [];
    const Q = [{ left: void 0, right: O[0], layout: "right" }];
    for (let ie = 1; ie < O.length; ie += 2) {
      const de = O[ie], Pe = O[ie + 1];
      if (Pe)
        Q.push({ left: de, right: Pe, layout: "spread" });
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
  }, [be, Ce]), rh = /* @__PURE__ */ L("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ L(ra, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      Ae,
      " ",
      Ae === 1 ? "Page" : "Pages"
    ] }),
    B && /* @__PURE__ */ p(
      _S,
      {
        modes: C,
        selectedMode: M,
        onModeChange: (O, Q) => {
          A(O), F(Q.filter ?? null), R(Q.pageFormat ?? null), K((ie) => ie + 1);
        },
        interactive: D,
        onInteractiveChange: (O) => {
          _(O), O && R(null);
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
            /* @__PURE__ */ p(wt, { className: "w-3.5 h-3.5" }),
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
            /* @__PURE__ */ p(ng, { className: "w-3.5 h-3.5" }),
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
          /* @__PURE__ */ p(Pl, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ p(
      c0,
      {
        defaultZoom: 80,
        defaultZoomMode: N,
        minZoom: 25,
        maxZoom: 200,
        menuItems: u ?? rh,
        onAddPage: Qe,
        preview: be,
        children: Ee ? Ee.sheets.map(th) : be === "two_pages" ? nh.map((O, Q) => {
          const ie = O.left ?? O.right, de = O.right ?? O.left, Pe = ie?.parentGroup?.id ?? ie?.id ?? null, ve = de?.parentGroup?.id ?? de?.id ?? null, Ie = O.left?.parentGroup?.id ?? O.left?.id, tt = O.right?.parentGroup?.id ?? O.right?.id, hn = Ie === at, pn = tt === at, En = (Wt, oh) => Me(Wt ? Wt.parentGroup ?? Wt : void 0, oh);
          return /* @__PURE__ */ L(i0, { layout: O.layout, pageItemId: ve ?? void 0, children: [
            O.left && /* @__PURE__ */ p(
              "div",
              {
                "data-page-item-id": O.left.virtualPageIndex === 0 ? Ie : void 0,
                className: hn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ p(
                  Yr,
                  {
                    title: `Sheet ${O.left.pageNum}`,
                    controls: Yo(O.left, O.left.parentGroup, En(O.left, Pe)),
                    origin: O.left.pageNum % 2 === 0 ? "right" : "left",
                    children: et(O.left)
                  },
                  O.left.virtualPageId
                )
              }
            ),
            O.right && /* @__PURE__ */ p(
              "div",
              {
                "data-page-item-id": O.right.virtualPageIndex === 0 ? tt : void 0,
                className: pn ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ p(
                  Yr,
                  {
                    title: `Sheet ${O.right.pageNum}`,
                    controls: Yo(O.right, O.right.parentGroup, En(O.right, ve)),
                    origin: O.right.pageNum % 2 === 0 ? "right" : "left",
                    children: et(O.right)
                  },
                  O.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Q}`);
        }) : Ce.map((O) => {
          const Q = O.parentGroup ?? O, ie = O.parentGroup?.id ?? O.id, de = Me(Q, ie), Pe = O.parentGroup?.id ?? O.id, ve = at === Pe;
          return /* @__PURE__ */ p(
            "div",
            {
              "data-page-item-id": O.virtualPageIndex === 0 ? Pe : void 0,
              className: ve ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ p(
                Yr,
                {
                  title: `Sheet ${O.pageNum}`,
                  controls: Yo(O, O.parentGroup, de),
                  children: et(O)
                }
              )
            },
            O.virtualPageId
          );
        })
      },
      `dev-mode-${j}-${M ?? "default"}`
    ),
    D && !T && /* @__PURE__ */ L(Be, { children: [
      /* @__PURE__ */ p(
        C0,
        {
          open: Ar,
          onOpenChange: Vo,
          availableItems: vt,
          onSelectItem: lt,
          pageComponents: n,
          payload: U,
          setup: Re,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ p(
        xC,
        {
          open: J,
          onOpenChange: Z,
          pages: er,
          onReorder: (O) => {
            Dr(O), Z(!1);
          },
          onRemove: (O) => jt(O.id),
          pageComponents: n,
          payload: U,
          setup: Re,
          renderThumbnail: Uo,
          title: h,
          description: v,
          gridColsClass: f,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ p(
      $S,
      {
        label: ln ? ln.label ?? ln.id : null,
        onDone: () => un(null),
        onAddAnother: () => {
          const O = ln;
          un(null), O && lt(O);
        }
      }
    )
  ] });
}
function LS(e) {
  const { templateConfig: t, ...n } = e;
  return Se(xr) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ p(Tc, { ...n }) : /* @__PURE__ */ p(
    Md,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ p(Tc, { ...n })
    }
  );
}
function BS(e) {
  const n = Se(xr)?.payload ?? e.payload, r = g.useMemo(
    () => hS({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), o = e.templateConfig?.spine?.component, [i, s] = g.useState({
    open: !1,
    message: ""
  }), a = g.useCallback((d) => {
    s({ open: !0, message: d });
  }, []), c = g.useMemo(
    () => Mw(n),
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
          pages: E.map((D, _) => {
            const B = h[D], T = B?.dataKey;
            return {
              id: `${k.id}__${T ?? D}__${_}`,
              componentKey: D,
              templateId: D,
              ...T ? { dataKey: T } : {},
              ...B?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${w.id} must return an array, got:`, typeof E), w);
      } catch (E) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${k.id}:`, E), k;
      }
    }), b = new Set(r.initialItems.map((N) => N.id)), y = m.filter((N) => b.has(N.id)), x = Ot(y), S = Ot(r.initialItems);
    if (!Array.from(b).some(
      (N) => !y.some((I) => I.id === N)
    ) && x !== S) {
      const N = m.filter((E) => {
        if (E.kind !== "group") return !b.has(E.id);
        const D = E.templateId ?? E.id;
        return E.id !== D && !b.has(E.id);
      });
      if (N.length === 0) return r.initialItems;
      const I = [...r.initialItems, ...N], P = I.filter((E) => E.strictPosition === "start"), w = I.filter((E) => E.strictPosition === "end"), k = I.filter((E) => !E.strictPosition);
      return [...P, ...k, ...w];
    }
    return m;
  }, [c?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ L(Be, { children: [
    /* @__PURE__ */ p(
      LS,
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
      DS,
      {
        open: i.open,
        onOpenChange: (d) => {
          d || s({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ L(qf, { children: [
          /* @__PURE__ */ L(Xf, { children: [
            /* @__PURE__ */ p(Jf, { children: "Cannot remove item" }),
            /* @__PURE__ */ p(Qf, { children: i.message })
          ] }),
          /* @__PURE__ */ p(Zf, { children: /* @__PURE__ */ p(eh, { onClick: () => s({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function zS(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Fc(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Fc(t, e);
  }
}
function Fc(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function HS(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const s = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = zS(s, t);
    }
  return r;
}
function jS(e, t, n) {
  return e(t, n);
}
function KS(e, t, n) {
  return typeof e == "function" ? jS(e, t, n) : HS(e, t);
}
function WS(e, t, n) {
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
function GS(e, t, n = {}, r, o = null) {
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
function VS(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, s = g.useMemo(() => KS(r, n, t?.payload), [r, n, t?.payload]), a = g.useMemo(() => WS(t, n, o), [t, n, o]), c = g.useCallback(
    (d, u = {}, f) => GS(
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
      const v = jn({ dialog: h }, { page: { paginationType: "static" } });
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
const aP = {
  Pagination: ro,
  Sheet: cr,
  FlowArea: Vc,
  FlowPage: Uc,
  Flow: Xc,
  FlowColumns: Ih,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: Xi,
  planFlowColumnChunks: Kc,
  // Optional cost counters for the two planners above. Diagnostic only.
  createFlowPlanMetrics: ph,
  // The DOM reads FlowArea measures with. Hosts that run their own Flow canvas
  // must use these rather than re-deriving them, or their page boundaries can
  // drift from the delivered document by a rounding step.
  flowMeasure: bh,
  FlowDocument: Bh,
  markdownToFlowItems: Vh,
  htmlToFlowItems: tl,
  // Perfect-binding cover geometry (outer/inner sheet, spine, glue zones). Pure,
  // DOM-free; used by CoverSpread/PageEditor and by hosts that run their own
  // canvas. See docs/printer-cover-spine-support.md.
  planCoverSpread: Bc,
  resolveSheetSize: qi,
  // One physical cover sheet (outer/inner) for the Static-only template path.
  CoverSpread: nl
}, cP = {
  TemplateDataProvider: Md,
  PageEditor: BS,
  InteractiveModeProvider: Dg,
  useInteractive: ls,
  useIntegrationAdapter: VS
};
export {
  nP as BrandKitProvider,
  kh as Editable,
  cP as EditorShell,
  eP as ImageBlock,
  aP as Static,
  jn as getDialogProps,
  tP as imageUrl,
  rP as useBrandKit
};
//# sourceMappingURL=uhuu-components.es.js.map
