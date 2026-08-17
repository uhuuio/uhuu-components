(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 none);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:var(--spacing);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:var(--spacing);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}@media print{body>section[aria-live],body>next-route-announcer{display:none!important}}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:0}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:0}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";z-index:10;margin-top:var(--spacing);margin-left:var(--spacing);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute;top:0;left:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute;inset:0}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:0}.inset-y-0{inset-block:0}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:0}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:0}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:var(--spacing)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:0}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[3mm\\]{margin-top:3mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:var(--spacing)}.ml-\\[4mm\\]{margin-left:4mm}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[28mm\\]{height:28mm}.h-\\[40\\%\\]{height:40%}.h-\\[62\\%\\]{height:62%}.h-\\[85\\%\\]{height:85%}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[297mm\\]{height:297mm}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.min-h-0{min-height:0}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[3mm\\]{width:3mm}.w-\\[16mm\\]{width:16mm}.w-\\[30mm\\]{width:30mm}.w-\\[210mm\\]{width:210mm}.w-full{width:100%}.w-px{width:1px}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[110px\\]{max-width:110px}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:0}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[2mm\\]{gap:2mm}.gap-\\[4mm\\]{gap:4mm}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-neutral-200{border-color:var(--color-neutral-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-neutral-950{background-color:var(--color-neutral-950)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:0}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:var(--spacing)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[1mm\\]{padding-block:1mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:var(--spacing)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:var(--spacing)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:0}.pl-1{padding-left:var(--spacing)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.font-serif{font-family:var(--font-serif)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-100{color:var(--color-neutral-100)}.text-neutral-500{color:var(--color-neutral-500)}.text-neutral-600{color:var(--color-neutral-600)}.text-neutral-700{color:var(--color-neutral-700)}.text-neutral-900{color:var(--color-neutral-900)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:0}.focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-serif:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 none);--color-neutral-200:oklch(92.2% 0 none);--color-neutral-500:oklch(55.6% 0 none);--color-neutral-600:oklch(43.9% 0 none);--color-neutral-700:oklch(37.1% 0 none);--color-neutral-900:oklch(20.5% 0 none);--color-neutral-950:oklch(14.5% 0 none);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring:where(:not(iframe)),[data-uhuu-portal] :-moz-focusring:where(:not(iframe)){outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-auto,[data-uhuu-portal] .pointer-events-auto{pointer-events:auto}[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .collapse,[data-uhuu-portal] .collapse{visibility:collapse}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:0}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:0}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:0}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:0}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:0}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:0}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:0}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:var(--spacing)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:0}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:var(--spacing)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[3mm\\],[data-uhuu-portal] .mt-\\[3mm\\]{margin-top:3mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:var(--spacing)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:var(--spacing)}[data-uhuu-interactive] .ml-\\[4mm\\],[data-uhuu-portal] .ml-\\[4mm\\]{margin-left:4mm}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[28mm\\],[data-uhuu-portal] .h-\\[28mm\\]{height:28mm}[data-uhuu-interactive] .h-\\[40\\%\\],[data-uhuu-portal] .h-\\[40\\%\\]{height:40%}[data-uhuu-interactive] .h-\\[62\\%\\],[data-uhuu-portal] .h-\\[62\\%\\]{height:62%}[data-uhuu-interactive] .h-\\[85\\%\\],[data-uhuu-portal] .h-\\[85\\%\\]{height:85%}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[297mm\\],[data-uhuu-portal] .h-\\[297mm\\]{height:297mm}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:0}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[3mm\\],[data-uhuu-portal] .w-\\[3mm\\]{width:3mm}[data-uhuu-interactive] .w-\\[16mm\\],[data-uhuu-portal] .w-\\[16mm\\]{width:16mm}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-\\[210mm\\],[data-uhuu-portal] .w-\\[210mm\\]{width:210mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-4xl,[data-uhuu-portal] .max-w-4xl{max-width:var(--container-4xl)}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[110px\\],[data-uhuu-portal] .max-w-\\[110px\\]{max-width:110px}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:0}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[180px\\],[data-uhuu-portal] .min-w-\\[180px\\]{min-width:180px}[data-uhuu-interactive] .min-w-\\[200px\\],[data-uhuu-portal] .min-w-\\[200px\\]{min-width:200px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:0}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:var(--spacing)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] .gap-\\[2mm\\],[data-uhuu-portal] .gap-\\[2mm\\]{gap:2mm}[data-uhuu-interactive] .gap-\\[4mm\\],[data-uhuu-portal] .gap-\\[4mm\\]{gap:4mm}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-6>:not(:last-child)),[data-uhuu-portal] :where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-neutral-200,[data-uhuu-portal] .border-neutral-200{border-color:var(--color-neutral-200)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-neutral-950,[data-uhuu-portal] .bg-neutral-950{background-color:var(--color-neutral-950)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-slate-100,[data-uhuu-portal] .bg-slate-100{background-color:var(--color-slate-100)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:0}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:var(--spacing)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:var(--spacing)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:var(--spacing)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[1mm\\],[data-uhuu-portal] .py-\\[1mm\\]{padding-block:1mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:var(--spacing)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:var(--spacing)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:0}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:var(--spacing)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-5,[data-uhuu-portal] .pl-5{padding-left:calc(var(--spacing) * 5)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .text-right,[data-uhuu-portal] .text-right{text-align:right}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .font-serif,[data-uhuu-portal] .font-serif{font-family:var(--font-serif)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[15px\\],[data-uhuu-portal] .text-\\[15px\\]{font-size:15px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[26px\\],[data-uhuu-portal] .text-\\[26px\\]{font-size:26px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-100,[data-uhuu-portal] .text-neutral-100{color:var(--color-neutral-100)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-neutral-600,[data-uhuu-portal] .text-neutral-600{color:var(--color-neutral-600)}[data-uhuu-interactive] .text-neutral-700,[data-uhuu-portal] .text-neutral-700{color:var(--color-neutral-700)}[data-uhuu-interactive] .text-neutral-900,[data-uhuu-portal] .text-neutral-900{color:var(--color-neutral-900)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-slate-700,[data-uhuu-portal] .text-slate-700{color:var(--color-slate-700)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .capitalize,[data-uhuu-portal] .capitalize{text-transform:capitalize}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:0}[data-uhuu-interactive] .focus-within\\:border-gray-400:focus-within,[data-uhuu-portal] .focus-within\\:border-gray-400:focus-within{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-within\\:ring-2:focus-within,[data-uhuu-portal] .focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-within\\:ring-gray-200:focus-within,[data-uhuu-portal] .focus-within\\:ring-gray-200:focus-within{--tw-ring-color:var(--color-gray-200)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-gray-900:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-900:focus-visible{--tw-ring-color:var(--color-gray-900)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:var(--spacing);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:grid-cols-2,[data-uhuu-portal] .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .uhuu-zoom-pane,[data-uhuu-portal] .uhuu-zoom-pane{overscroll-behavior:contain;max-height:100%;overflow:auto}[data-uhuu-interactive] .uhuu-zoom-pane-content,[data-uhuu-portal] .uhuu-zoom-pane-content{overflow-anchor:none;width:-moz-max-content;width:max-content;margin:auto;padding:0 24px 64px}}@media print{.uhuu-zoom-pane{height:auto;max-height:none;overflow:visible}.uhuu-zoom-pane-content{width:auto;padding:0}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:-moz-max-content;width:max-content;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as m, jsxs as $, Fragment as $e } from "react/jsx-runtime";
import * as p from "react";
import xe, { createContext as Yt, useEffect as ce, forwardRef as ro, useContext as Pe, createElement as ei, useState as se, useLayoutEffect as uc, useMemo as ee, useRef as le, useCallback as he, memo as pf, useReducer as gf, cloneElement as vf } from "react";
import * as Ei from "react-dom";
import { flushSync as bf, unstable_batchedUpdates as yr, createPortal as yf } from "react-dom";
class $r {
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
    $r.handlePageBreakStyles(), $r.handleUhuuDialogs();
  }
}
class Us {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
class Di {
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
  static pageParams(t, n = {}) {
    if (typeof document > "u") return;
    const { format: r, orientation: o, bleed: i, showBleed: s, compatibility: a, printCssRaw: c, printCssUrl: l, preview: d } = n, u = this.resolveDimensions(n);
    return u && (document.documentElement.style.setProperty("--uhuu-page-width", `${u.width}mm`), document.documentElement.style.setProperty("--uhuu-page-height", `${u.height}mm`)), document.documentElement.style.setProperty("--uhuu-page-bleed", `${Math.min(Math.max(i ?? 0, 0), 400)}mm`), { page: {
      paginationType: t,
      format: r,
      orientation: o,
      bleed: i,
      width: u?.width,
      height: u?.height,
      preview: d,
      showBleed: s,
      compatibility: a,
      printCssRaw: c,
      printCssUrl: l
    } };
  }
}
const qt = Yt(null), wf = ({ config: e, children: t }) => /* @__PURE__ */ m(qt.Provider, { value: e, children: t }), ti = ({ children: e, className: t, setup: n }) => {
  const r = Di.pageParams("static", n);
  ce(() => {
    r?.page?.compatibility && $r.handle();
    const i = Us.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && Us.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ m(wf, { config: r, children: /* @__PURE__ */ m("div", { className: o, children: e }) });
}, ni = ro(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: i,
  "data-page-key": s
}, a) => {
  const c = Pe(qt), l = i ?? c?.page?.showBleed ?? !1;
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
        l && /* @__PURE__ */ m("div", { className: "uhuu-bleed-area" })
      ]
    }
  );
});
function on() {
  if (typeof window < "u") {
    const e = window.location.hostname;
    return e === "localhost" || e === "127.0.0.1" || e.endsWith(".local") || window.location.port !== "";
  }
  return !1;
}
function Ht(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 0;
}
function jn(e) {
  return typeof e == "string" && e ? e : null;
}
function dc(e) {
  return typeof e == "number" && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : e ? 1 : 0;
}
function fc({
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
  const c = Number.isInteger(a) ? a : t.indexOf(e), l = jn(n[e]), d = c > 0 ? t[c - 1] : null, u = d === null ? null : jn(n[d]), f = c > 0 ? t[c - 1] : s ?? (e > 0 ? e - 1 : null), h = f !== null ? jn(n[f]) : null, v = !!(l && h !== l), g = !!(l && u !== l);
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
    isFirstInGroupOnPage: g,
    // `isContinuation` refers to the virtual Flow page. `isGroupContinuation`
    // is the narrower signal for a repeated group header.
    isContinuation: r > 0,
    isGroupContinuation: !!(g && !v && h === l)
  };
}
function xf() {
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
function Ai({
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
  const f = l?.indexes, h = l?.offset ?? 0, v = f ? Math.max(0, f.length - h) : e.length, g = f ? (R) => f[h + R] : (R) => R, b = Ht(r) || Number.POSITIVE_INFINITY, w = [{ indexes: [], keys: [] }];
  let C = 0;
  const S = () => w[w.length - 1], y = () => {
    const R = S().indexes;
    return R.length ? R[R.length - 1] : null;
  }, N = () => S().indexes.length > 0 || !!S().unplaceable, I = (R) => jn(o[g(R)]), P = (R) => Ht(i[R] ?? 0), x = (R) => s[R] !== !1, k = (R, T) => {
    const D = I(R);
    return D ? T == null ? (R > 0 ? I(R - 1) : jn(a)) !== D || x(D) : I(T) !== D : !1;
  }, E = (R, T) => {
    const D = I(R);
    return Ht(e[g(R)]) + (D && k(R, T) ? P(D) : 0);
  }, O = (R) => {
    const T = n[g(R)] ?? {};
    return T.avoidBreakInside && T.groupKey ? T.groupKey : null;
  }, _ = (R, T, D) => {
    let K = 0, j = D;
    for (let H = R; H < v && O(H) === T; H += 1)
      u && (u.scannedItems += 1), K += E(H, j), j = H;
    return K;
  }, B = (R, T, { currentHeight: D, ownHeight: K, stopEarly: j } = {}) => {
    let H = 0, W = R;
    for (let V = 1; V <= T; V += 1) {
      const z = R + V;
      if (z >= v || (u && (u.scannedItems += 1), H += E(z, W), j && D + (K + H) > b)) break;
      W = z;
    }
    return H;
  }, L = () => {
    N() && (w.push({ indexes: [], keys: [] }), C = 0);
  }, G = (R, T, D) => {
    const K = t[g(R)] ?? String(g(R)), j = I(R) ?? void 0, H = j && k(R, null) ? P(j) : 0, W = {
      index: R,
      key: K,
      height: T,
      headerHeight: H,
      requiredHeight: D,
      availableHeight: b,
      groupKey: j,
      reason: H > 0 ? "item-with-header-too-tall" : "item-too-tall"
    };
    S().unplaceable = W, c?.(W), w.push({ indexes: [], keys: [] }), C = 0;
  };
  for (let R = 0; R < v && !(d && w.length > d); R += 1) {
    u && (u.scannedItems += 1);
    const T = n[g(R)] ?? {}, D = Ht(e[g(R)]), K = t[g(R)] ?? String(g(R));
    T.breakBefore && L();
    const j = O(R), H = R > 0 ? O(R - 1) : null;
    j && j !== H && N() && C + _(R, j, y()) > b && L();
    let W = y(), V = E(R, W);
    if (N() && V > b - C && (L(), W = null, V = E(R, W)), V > b) {
      G(R, D, V);
      continue;
    }
    const z = N(), Z = z ? B(R, dc(T.keepWithNext), {
      currentHeight: C,
      ownHeight: V,
      stopEarly: Number.isFinite(b)
    }) : 0, X = V + Z;
    if (z && C + X > b && (L(), W = null, V = E(R, W), V > b)) {
      G(R, D, V);
      continue;
    }
    S().indexes.push(R), S().keys.push(K), C += V, T.breakAfter && R < v - 1 && L();
  }
  const M = w.filter((R) => R.indexes.length > 0 || !!R.unplaceable);
  if (!M.length)
    return u && !d && (u.pages = 1), [{ indexes: [], keys: [] }];
  const A = d ? M.slice(0, d) : M;
  return u && !d && (u.pages = A.length), A.map((R) => {
    if (!R.indexes.length) return R;
    const T = [];
    for (let D = 0; D < R.indexes.length; D += 1) {
      const K = R.indexes[D], j = I(K), H = D > 0 ? R.indexes[D - 1] : null;
      if (!j || !k(K, H)) continue;
      const W = K > 0 ? I(K - 1) : null;
      T.push({
        groupKey: j,
        itemIndex: K,
        isContinuation: W === j
      });
    }
    return T.length ? { ...R, groupHeaders: T } : R;
  });
}
function Cf(e, t, n) {
  const r = (e.indexes ?? []).reduce(
    (i, s) => i + Ht(t[s]),
    0
  ), o = (e.groupHeaders ?? []).reduce(
    (i, s) => i + Ht(n[s.groupKey]),
    0
  );
  return r + o;
}
function Sf(e, t, n) {
  return !t || !n ? e : {
    ...e,
    headerGroupHeights: e.columnHeaderGroupHeights?.[t]?.[n] ?? e.headerGroupHeights,
    headerGroupRepeats: e.columnHeaderGroupRepeats?.[t]?.[n] ?? e.headerGroupRepeats
  };
}
function Pf(e, t, n, r, o, i) {
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
function wr(e, t, n, r, o, i, s) {
  if (n >= t.length)
    return {
      chunk: { indexes: [], keys: [] },
      consumed: 0,
      height: 0
    };
  const a = Sf(e, o, i);
  e.metrics && (e.metrics.chunkerCalls += 1);
  const l = Ai({
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
  })[0] ?? { indexes: [], keys: [] }, d = Pf(
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
    height: Cf(
      d,
      e.heights ?? [],
      a.headerGroupHeights ?? {}
    )
  };
}
function hc({ nodes: e = [], itemCount: t = 0 } = {}) {
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
function Ys(e, t, n, r, o) {
  const i = Ht(r.chunk.unplaceable?.requiredHeight);
  if (i > 0 && i <= o) return "move";
  const s = t[n];
  if (s === void 0) return "no";
  const a = e.metas?.[s] ?? {};
  return dc(a.keepWithNext) > 0 || !!(a.avoidBreakInside && a.groupKey) ? "compare" : "no";
}
function Lt(e) {
  return !!(e.layout?.length || e.unplaceable);
}
function mc({
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
  hc({ nodes: e, itemCount: t.length });
  const f = Ht(o) || Number.POSITIVE_INFINITY, h = {
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
  let g = 0;
  const b = () => v[v.length - 1], w = () => {
    Lt(b()) && (v.push({ indexes: [], keys: [], layout: [] }), g = 0);
  }, C = (y) => {
    b().indexes.push(...y.indexes ?? []), b().keys.push(...y.keys ?? []), !b().unplaceable && y.unplaceable && (b().unplaceable = y.unplaceable), y.unplaceable && d?.(y.unplaceable);
  };
  for (let y = 0; y < e.length; y += 1) {
    const N = e[y];
    if (!N || N.kind !== "item" && N.kind !== "columns") continue;
    if (N.kind === "item") {
      const P = [];
      let x = y;
      for (; x < e.length && e[x]?.kind === "item"; ) {
        const E = Number(e[x].index);
        Number.isInteger(E) && E >= 0 && E < t.length && P.push(E), x += 1;
      }
      y = x - 1;
      let k = 0;
      for (; k < P.length; ) {
        f - g <= 0 && Lt(b()) && w();
        const E = P[k];
        r[E]?.breakBefore && Lt(b()) && w();
        const O = k > 0 ? P[k - 1] : void 0;
        let _ = wr(
          h,
          P,
          k,
          f - g,
          void 0,
          void 0,
          O
        );
        if (Lt(b())) {
          const G = Ys(
            h,
            P,
            k,
            _,
            f
          );
          if (G !== "no") {
            u && (u.freshPageAttempts += 1);
            const M = wr(
              h,
              P,
              k,
              f,
              void 0,
              void 0,
              O
            );
            (G === "move" || M.consumed > _.consumed) && (w(), _ = M);
          }
        }
        b().layout.push({ kind: "items", chunk: _.chunk }), C(_.chunk), g += _.height, k += _.consumed, _.consumed === 0 && (k += 1);
        const B = _.chunk.indexes?.at(-1) ?? _.chunk.unplaceable?.index;
        (k < P.length || _.chunk.unplaceable || B !== void 0 && r[B]?.breakAfter) && w();
      }
      continue;
    }
    const I = (N.columns ?? []).map((P) => ({
      id: String(P?.id ?? ""),
      indexes: (P?.indexes ?? []).filter(
        (x) => Number.isInteger(x) && x >= 0 && x < t.length
      ),
      cursor: 0
    })).filter((P) => P.id && P.indexes.length);
    if (I.length)
      for (; I.some((P) => P.cursor < P.indexes.length); ) {
        f - g <= 0 && Lt(b()) && w(), I.some((R) => {
          const T = R.indexes[R.cursor];
          return T !== void 0 && r[T]?.breakBefore;
        }) && Lt(b()) && w();
        const x = f - g;
        let k = I.map((R) => wr(
          h,
          R.indexes,
          R.cursor,
          x,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )), E;
        const O = () => E ??= I.map((R) => (u && (u.freshPageAttempts += 1), wr(
          h,
          R.indexes,
          R.cursor,
          f,
          N.id,
          R.id,
          R.cursor > 0 ? R.indexes[R.cursor - 1] : void 0
        )));
        if (Lt(b()) && I.some((R, T) => {
          const D = Ys(
            h,
            R.indexes,
            R.cursor,
            k[T],
            f
          );
          return D === "no" ? !1 : D === "move" ? !0 : O()[T].consumed > k[T].consumed;
        }) && (w(), k = O()), !k.some((R) => R.consumed > 0)) {
          const R = I.find((T) => T.cursor < T.indexes.length);
          throw new TypeError(
            `[uhuu-components] Static.FlowColumns made no pagination progress${R ? ` in column "${R.id}"` : ""}.`
          );
        }
        const B = I.map((R, T) => ({
          id: R.id,
          chunk: k[T].chunk
        }));
        b().layout.push({
          kind: "columns",
          id: String(N.id ?? "columns"),
          columns: B
        });
        for (const { chunk: R } of B) C(R);
        const L = Math.max(0, ...k.map((R) => R.height));
        g += L, I.forEach((R, T) => {
          R.cursor += k[T].consumed;
        });
        const G = I.some((R) => R.cursor < R.indexes.length), M = k.some((R) => {
          const T = R.chunk.indexes?.at(-1) ?? R.chunk.unplaceable?.index;
          return T !== void 0 && r[T]?.breakAfter;
        }), A = k.some((R) => !!R.chunk.unplaceable);
        (G || M || A) && w();
      }
  }
  const S = v.filter(Lt);
  return S.length ? (u && (u.pages = S.length), S) : (u && (u.pages = 1), [{ indexes: [], keys: [], layout: [] }]);
}
function Mi(e) {
  const t = e.getBoundingClientRect().width, n = e.offsetWidth;
  if (!(t > 0) || !(n > 0)) return 1;
  const r = t / n;
  return Math.abs(r - 1) < 2e-3 ? 1 : r;
}
function Nn(e, t = 1) {
  const n = e.getBoundingClientRect(), r = window.getComputedStyle(e), o = Number.parseFloat(r.marginTop || "0") || 0, i = Number.parseFloat(r.marginBottom || "0") || 0;
  return n.height / t + o + i;
}
function Oi(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: pc(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function pc(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function _i(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function oo(e) {
  return e.dataset.uhuuFlowHeaderGroupKey || void 0;
}
function Br(e) {
  const t = {};
  for (const n of e) {
    const r = oo(n);
    r && (n.dataset.uhuuFlowHeaderRepeat === "false" ? t[r] = !1 : r in t || (t[r] = !0));
  }
  return t;
}
function zr(e, t = 1) {
  const n = {};
  for (const r of Array.from(
    e.querySelectorAll('[data-uhuu-flow-group-header="true"]')
  )) {
    const o = r.dataset.uhuuFlowHeaderGroupKey;
    o && (n[o] = Math.max(n[o] ?? 0, Nn(r, t)));
  }
  return n;
}
function Ti(e) {
  return Array.from(e.querySelectorAll('[data-uhuu-flow-item="true"]'));
}
function Fi(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
const If = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getEffectiveScale: Mi,
  getOuterHeight: Nn,
  hashString: Fi,
  parseKeepWithNext: pc,
  readFlowItemElements: Ti,
  readHeaderGroupHeights: zr,
  readHeaderGroupKey: oo,
  readHeaderGroupRepeats: Br,
  readItemMeta: Oi,
  serializeKeepWithNext: _i
}, Symbol.toStringTag, { value: "Module" })), kf = Ai, Nf = mc, Yn = p.createContext(null), Rf = typeof window > "u" ? p.useEffect : p.useLayoutEffect, Hr = /* @__PURE__ */ new Set();
function Kr(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function gc(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function dt(e) {
  return Number.parseFloat(e || "0") || 0;
}
function Ef(e, t) {
  const n = (r) => {
    const o = window.getComputedStyle(r);
    return dt(o.paddingTop) + dt(o.paddingBottom) + dt(o.borderTopWidth) + dt(o.borderBottomWidth);
  };
  for (const r of Array.from(
    e.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const o = window.getComputedStyle(r), i = dt(o.marginTop) + dt(o.marginBottom);
    if (n(r) > 0.01 || i > 0.01)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group vertical margin, padding, and borders are unsupported; put measured vertical spacing on items with getColumnItemProps."
      );
    const s = [];
    for (const c of Array.from(
      r.querySelectorAll(":scope > [data-uhuu-flow-column]")
    )) {
      const l = window.getComputedStyle(c), d = dt(l.marginTop) + dt(l.marginBottom);
      if (n(c) > 0.01 || d > 0.01 || dt(l.rowGap) > 0.01 || dt(l.minHeight) > 0.01 || l.maxHeight !== "none")
        throw new TypeError(
          "[uhuu-components] Static.FlowColumns column vertical margin, padding, borders, min/max height, and row-gap are unsupported; put measured vertical spacing on items with getColumnItemProps."
        );
      const u = Array.from(
        c.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        )
      ).reduce((f, h) => f + Nn(h, t), 0);
      s.push(u);
    }
    const a = Math.max(0, ...s);
    if (Nn(r, t) > a + 1)
      throw new TypeError(
        "[uhuu-components] Static.FlowColumns group/column fixed height or wrapping adds unmeasured vertical extent."
      );
  }
}
function Df(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  if (t.dataset.uhuuFlowLayout === "columns")
    return Af(e, t, n);
  const o = Ti(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Mi(e), a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = o.map((S) => Nn(S, s)), d = o.map(Oi), u = o.map((S, y) => S.dataset.uhuuFlowKey || String(y)), f = o.map(oo), h = Br(o), v = zr(t, s), g = [], b = c ? a : l.reduce((S, y) => S + y, 0) + Object.values(v).reduce((S, y) => S + y, 0);
  c || n.onZeroHeight?.();
  const w = kf({
    heights: l,
    keys: u,
    metas: d,
    availableHeight: b,
    headerGroupKeys: f,
    headerGroupHeights: v,
    headerGroupRepeats: h,
    onUnplaceableItem: (S) => {
      g.push(S), n.onUnplaceableItem?.(S);
    }
  }), C = Fi(JSON.stringify({
    version: 2,
    flowId: r,
    availableHeight: Math.round(b * 100) / 100,
    heights: l.map((S) => Math.round(S * 100) / 100),
    keys: u,
    metas: d,
    headerGroupKeys: f,
    headerGroupHeights: v,
    headerGroupRepeats: h,
    unplaceableItems: g
  }));
  return { flowId: r, chunks: w, signature: C, unplaceableItems: g };
}
function Af(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = Ti(t);
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [], layout: [] }],
      signature: `${r}:columns:empty`,
      unplaceableItems: []
    };
  const i = e.getBoundingClientRect(), s = Mi(e);
  Ef(t, s);
  const a = i.height ? i.height / s : e.clientHeight, c = Number.isFinite(a) && a > 0, l = Math.max(
    -1,
    ...o.map((P) => Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10))
  ), d = Array.from({ length: l + 1 }, () => 0), u = Array.from({ length: l + 1 }, (P, x) => String(x)), f = Array.from({ length: l + 1 }, () => ({})), h = Array.from(
    { length: l + 1 },
    () => {
    }
  );
  for (const P of o) {
    const x = Number.parseInt(P.dataset.uhuuFlowIndex ?? "-1", 10);
    !Number.isInteger(x) || x < 0 || (d[x] = Nn(P, s), u[x] = P.dataset.uhuuFlowKey || String(x), f[x] = Oi(P), h[x] = oo(P));
  }
  const v = Array.from(t.children).flatMap((P) => {
    if (!(P instanceof HTMLElement)) return [];
    if (P.dataset.uhuuFlowLayoutNode === "item") {
      const k = P.matches('[data-uhuu-flow-item="true"]') ? P : P.querySelector('[data-uhuu-flow-item="true"]'), E = Number.parseInt(k?.dataset.uhuuFlowIndex ?? "-1", 10);
      return Number.isInteger(E) && E >= 0 ? [{ kind: "item", index: E }] : [];
    }
    if (P.dataset.uhuuFlowLayoutNode !== "columns") return [];
    const x = Array.from(
      P.querySelectorAll(":scope > [data-uhuu-flow-column]")
    ).flatMap((k) => {
      const E = k.dataset.uhuuFlowColumn;
      if (!E) return [];
      const O = Array.from(
        k.querySelectorAll('[data-uhuu-flow-item="true"]')
      ).map((_) => Number.parseInt(_.dataset.uhuuFlowIndex ?? "-1", 10)).filter((_) => Number.isInteger(_) && _ >= 0);
      return [{ id: E, indexes: O }];
    });
    return x.length ? [{ kind: "columns", id: P.dataset.uhuuFlowLayoutId || "columns", columns: x }] : [];
  }), g = Br(o), b = zr(t, s), w = {}, C = {};
  for (const P of Array.from(
    t.querySelectorAll(':scope > [data-uhuu-flow-layout-node="columns"]')
  )) {
    const x = P.dataset.uhuuFlowLayoutId;
    if (x) {
      w[x] = {}, C[x] = {};
      for (const k of Array.from(
        P.querySelectorAll(":scope > [data-uhuu-flow-column]")
      )) {
        const E = k.dataset.uhuuFlowColumn;
        if (!E) continue;
        const O = Array.from(
          k.querySelectorAll('[data-uhuu-flow-item="true"]')
        );
        w[x][E] = zr(k, s), C[x][E] = Br(O);
      }
    }
  }
  const S = [], y = c ? a : d.reduce((P, x) => P + x, 0) + Object.values(b).reduce((P, x) => P + x, 0);
  c || n.onZeroHeight?.();
  const N = Nf({
    nodes: v,
    heights: d,
    keys: u,
    metas: f,
    availableHeight: y,
    headerGroupKeys: h,
    headerGroupHeights: b,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: C,
    onUnplaceableItem: (P) => {
      S.push(P), n.onUnplaceableItem?.(P);
    }
  }), I = Fi(JSON.stringify({
    version: 3,
    flowId: r,
    availableHeight: Math.round(y * 100) / 100,
    nodes: v,
    heights: d.map((P) => Math.round(P * 100) / 100),
    keys: u,
    metas: f,
    headerGroupKeys: h,
    headerGroupHeights: b,
    headerGroupRepeats: g,
    columnHeaderGroupHeights: w,
    columnHeaderGroupRepeats: C,
    unplaceableItems: S
  }));
  return { flowId: r, chunks: N, signature: I, unplaceableItems: S };
}
function vc({
  children: e,
  className: t = "",
  style: n,
  onFlowMeasurement: r
}) {
  const o = p.useContext(Yn), i = p.useRef(null), s = p.useRef(""), a = p.useRef(!1), c = p.useRef(!1), l = p.useRef(/* @__PURE__ */ new Set());
  return Rf(() => {
    if (o?.mode !== "measure" || !o.registerMeasurement || !i.current)
      return;
    const d = i.current;
    let u = null, f = null;
    s.current = "";
    const h = /* @__PURE__ */ new Set(), v = () => {
      if (f) {
        for (const C of Array.from(h))
          d.contains(C) || (f.unobserve(C), h.delete(C));
        d.querySelectorAll(
          '[data-uhuu-flow-item="true"], [data-uhuu-flow-group-header="true"]'
        ).forEach((C) => {
          h.has(C) || (h.add(C), f?.observe(C));
        });
      }
    };
    function g() {
      v();
      const C = d.querySelectorAll('[data-uhuu-flow="true"]');
      C.length > 1 && !a.current && on() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const S = C[0];
      if (!S) return;
      const y = Df(d, S, {
        onZeroHeight: () => {
          c.current || !on() || (c.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onUnplaceableItem: (N) => {
          l.current.has(N.key) || !on() || (l.current.add(N.key), console.warn(
            `[uhuu-components] Static.Flow item "${N.key}" cannot fit in its FlowArea (${Math.round(N.requiredHeight)}px required > ${Math.round(N.availableHeight)}px available). It is rendered as a controlled flow error instead of clipped content.`
          ));
        }
      });
      !y || y.signature === s.current || (s.current = y.signature, r?.(y), o?.registerMeasurement?.(y));
    }
    const b = () => {
      u === null && (u = window.requestAnimationFrame(() => {
        u = null, g();
      }));
    };
    f = new ResizeObserver(b), f.observe(d), v(), b();
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
      u !== null && window.cancelAnimationFrame(u), f?.disconnect(), w.disconnect();
    };
  }, [o, r]), /* @__PURE__ */ m("div", { ref: i, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function bc({
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
        /* @__PURE__ */ m(
          vc,
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
function yc(e) {
  if (typeof e == "string")
    return e ? { key: e, repeatHeader: !0 } : void 0;
  if (e?.key)
    return {
      key: e.key,
      repeatHeader: e.repeatHeader !== !1
    };
}
function ri(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n, r) => {
    t.has(n) || t.set(n, r);
  }), t;
}
function wc(e) {
  if (!e) return;
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    let r = t.get(n.itemIndex);
    r || (r = /* @__PURE__ */ new Set(), t.set(n.itemIndex, r)), r.add(n.groupKey);
  }
  return t;
}
function xc({
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
  const h = p.useContext(Yn), v = h?.chunksByFlowId?.[e], g = h?.mode === "visible" && v ? v[h.pageIndex] : void 0, w = (h?.mode === "visible" && v ? g?.indexes ?? [] : h?.mode === "visible" && h.pageIndex > 0 ? [] : t.map((x, k) => k)).filter((x) => Number.isInteger(x) && x >= 0 && x < t.length), C = t.map((x, k) => yc(a?.(x, k))), S = C.map((x) => x?.key), y = ri(w), N = c ? wc(g?.groupHeaders) : void 0, I = h?.mode === "visible" ? h.pageIndex : 0, P = h?.mode === "visible" && v ? v.length : 1;
  return p.useEffect(() => {
    if (!on() || !i || !Object.keys(i).length || !t.length)
      return;
    const x = `${e}:${Object.keys(i).join("|")}`;
    Hr.has(x) || t.some((E, O) => !!(s?.(E, O) ?? Kr(E))) || (Hr.add(x), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, s]), /* @__PURE__ */ $(
    "div",
    {
      className: l,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: [
        g?.unplaceable && (f?.(g.unplaceable, { flowId: e, pageIndex: I, pageCount: P }) ?? /* @__PURE__ */ $(
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
          const k = t[x];
          if (k === void 0) return null;
          const E = n(k, x), O = C[x], B = {
            ...fc({
              itemIndex: x,
              fragmentIndexes: w,
              fragmentIndex: y.get(x) ?? -1,
              groupKeys: S,
              pageIndex: I,
              pageCount: P,
              itemCount: t.length
            }),
            flowId: e,
            itemKey: E,
            item: k
          }, L = s?.(k, x) ?? Kr(k), G = gc(
            L ? i?.[L] : void 0,
            o?.(k, x)
          ), M = typeof d == "function" ? d(k, x) : d, A = !!(O && N?.get(x)?.has(O.key)), R = !!(O && c && (A || !N && B.isFirstInGroupOnPage && (B.isFirstInGroup || O.repeatHeader !== !1))), T = typeof u == "function" ? O ? u(O, B) : void 0 : u;
          return /* @__PURE__ */ $(p.Fragment, { children: [
            R && O && /* @__PURE__ */ m(
              "div",
              {
                className: T,
                style: { display: "flow-root" },
                "data-uhuu-flow-group-header": "true",
                "data-uhuu-flow-header-group-key": O.key,
                children: c?.(O, B)
              }
            ),
            /* @__PURE__ */ m(
              "div",
              {
                className: M,
                style: { display: "flow-root" },
                "data-uhuu-flow-item": "true",
                "data-uhuu-flow-key": String(E),
                "data-uhuu-flow-index": x,
                "data-uhuu-flow-break-before": G.breakBefore ? "true" : void 0,
                "data-uhuu-flow-break-after": G.breakAfter ? "true" : void 0,
                "data-uhuu-flow-keep-with-next": _i(G.keepWithNext),
                "data-uhuu-flow-avoid-break-inside": G.avoidBreakInside ? "true" : void 0,
                "data-uhuu-flow-group-key": G.groupKey,
                "data-uhuu-flow-header-group-key": O?.key,
                "data-uhuu-flow-header-repeat": O ? O.repeatHeader === !1 ? "false" : "true" : void 0,
                children: r(k, x, B)
              }
            )
          ] }, E);
        })
      ]
    }
  );
}
function Mf({
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
  getColumnProps: g,
  getColumnItemProps: b
}) {
  hc({ nodes: n, itemCount: t.length });
  const w = p.useContext(Yn), C = w?.chunksByFlowId?.[e], S = w?.mode === "visible" && C ? C[w.pageIndex] : void 0, y = w?.mode !== "visible", N = w?.mode === "visible" ? w.pageIndex : 0, I = w?.mode === "visible" && C ? C.length : 1, P = t.map((L, G) => yc(c?.(L, G))), x = P.map((L) => L?.key), k = {
    flowId: e
  };
  p.useEffect(() => {
    if (!on() || !s || !Object.keys(s).length || !t.length)
      return;
    const L = `${e}:columns:${Object.keys(s).join("|")}`;
    Hr.has(L) || t.some((M, A) => !!(a?.(M, A) ?? Kr(M))) || (Hr.add(L), console.warn(
      `[uhuu-components] Static.FlowColumns "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, s, a]);
  const E = (L) => L ? h?.(L, { flowId: e, pageIndex: N, pageCount: I }) ?? /* @__PURE__ */ $(
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
  ) : null, O = (L, G, M, A = !1, R) => {
    const T = L.filter((H) => Number.isInteger(H) && H >= 0 && H < t.length), D = ri(T), K = R ? ri(R) : void 0, j = l ? wc(G?.groupHeaders) : void 0;
    return T.map((H) => {
      const W = t[H];
      if (W === void 0) return null;
      const V = r(W, H), z = P[H], Z = D.get(H) ?? -1, X = K?.get(H) ?? -1, q = {
        ...fc({
          itemIndex: H,
          fragmentIndexes: T,
          fragmentIndex: Z,
          groupKeys: x,
          pageIndex: N,
          pageCount: I,
          itemCount: t.length,
          previousSourceIndex: G?.previousSourceIndex ?? (X > 0 ? R?.[X - 1] : void 0)
        }),
        flowId: e,
        itemKey: V,
        item: W
      }, ne = a?.(W, H) ?? Kr(W), ae = gc(
        ne ? s?.[ne] : void 0,
        i?.(W, H)
      ), ve = typeof u == "function" ? u(W, H) : u, fe = M?.(H), we = !!(z && j?.get(H)?.has(z.key)), Ke = !!(z && l && (we || !j && q.isFirstInGroupOnPage && (q.isFirstInGroup || z.repeatHeader !== !1))), Mt = typeof f == "function" ? z ? f(z, q) : void 0 : f;
      return /* @__PURE__ */ $(p.Fragment, { children: [
        Ke && z && /* @__PURE__ */ m(
          "div",
          {
            className: Mt,
            style: { display: "flow-root" },
            "data-uhuu-flow-group-header": "true",
            "data-uhuu-flow-header-group-key": z.key,
            children: l?.(z, q)
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: [ve, fe?.className].filter(Boolean).join(" "),
            style: { display: "flow-root", ...fe?.style },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-layout-node": A ? "item" : void 0,
            "data-uhuu-flow-key": String(V),
            "data-uhuu-flow-index": H,
            "data-uhuu-flow-break-before": ae.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": ae.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": _i(ae.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": ae.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": ae.groupKey,
            "data-uhuu-flow-header-group-key": z?.key,
            "data-uhuu-flow-header-repeat": z ? z.repeatHeader === !1 ? "false" : "true" : void 0,
            children: o(W, H, q)
          }
        )
      ] }, V);
    });
  }, _ = new Map(
    n.filter((L) => L.kind === "columns").map((L) => [L.id, L])
  ), B = y ? n : S?.layout ?? [];
  return /* @__PURE__ */ m(
    "div",
    {
      className: d,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      "data-uhuu-flow-layout": "columns",
      children: B.map((L, G) => {
        if (L.kind === "item")
          return /* @__PURE__ */ m(p.Fragment, { children: O([L.index], void 0, void 0, !0) }, `item:${L.index}:${G}`);
        if (L.kind === "items")
          return /* @__PURE__ */ $(p.Fragment, { children: [
            E(L.chunk.unplaceable),
            O(L.chunk.indexes, L.chunk, void 0, !0)
          ] }, `items:${G}`);
        const M = y ? L : _.get(L.id);
        if (!M) return null;
        const A = new Map(M.columns.map((D) => [D.id, D])), R = y ? M.columns.map((D) => ({ id: D.id })) : L.columns, T = v?.(M, k);
        return /* @__PURE__ */ m(
          "div",
          {
            className: T?.className,
            style: {
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              ...T?.style
            },
            "data-uhuu-flow-layout-node": "columns",
            "data-uhuu-flow-layout-id": M.id,
            children: R.map((D) => {
              const K = A.get(D.id);
              if (!K) return null;
              const j = g?.(M, K, k), H = D.chunk?.indexes ?? K.indexes;
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
                    O(
                      H,
                      D.chunk,
                      (W) => b?.(
                        M,
                        K,
                        W,
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
          `columns:${M.id}:${G}`
        );
      })
    }
  );
}
const En = (e, t) => {
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
}, Of = (e) => {
  const t = Pe(qt);
  return /* @__PURE__ */ m(
    "div",
    {
      className: e.className,
      ...En(e, t),
      children: e.children
    }
  );
};
function _f(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function Cc(e, t, n, r = "") {
  const o = _f(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Tf = /\s*(page-break-before|break-before)\s*/i, Ff = 1, Lf = 3, $f = 8;
function Bf(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function zf(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function Hf(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === $f) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Lf) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: Bf(i), text: i });
      return;
    }
    if (o.nodeType === Ff) {
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
function Kf(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const s = i.type ?? "text", a = i.html ?? "";
    a && (r.push({
      id: Cc(s, i.text ?? a, r.length, n),
      type: s,
      html: a,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function Sc(e = "", t = {}) {
  const n = t.breakComment ?? Tf, o = (t.parseHtml ?? ((i) => Hf(i, n)))(e);
  return Kf(Array.isArray(o) ? o : [], t);
}
const jf = {
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
let qs = !1;
function Gf(e) {
  return p.useMemo(() => e === !1 ? (on() && !qs && (qs = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : zf, [e]);
}
function Vf({
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
  editable: g,
  parseHtml: b
}) {
  const w = p.useMemo(
    () => Sc(e, { idPrefix: c, parseHtml: b }),
    [e, c, b]
  ), C = p.useMemo(
    () => ({ ...jf, ...u ?? {} }),
    [u]
  ), S = Gf(v), y = p.useCallback(
    (P, x) => ({
      breakBefore: P.breakBefore,
      ...f?.(P, x) ?? {}
    }),
    [f]
  ), N = p.useCallback(
    (P, x) => h ? h(P, x) : /* @__PURE__ */ m(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: S(P.html) }
      }
    ),
    [h, S]
  ), I = /* @__PURE__ */ m(
    xc,
    {
      id: a,
      items: w,
      getKey: (P) => P.id,
      className: l,
      itemClassName: d,
      metaDefaults: C,
      getItemMeta: y,
      renderItem: N
    }
  );
  return /* @__PURE__ */ m(
    bc,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: s,
      header: t,
      footer: n,
      children: g ? /* @__PURE__ */ m(Of, { dialog: g, children: I }) : I
    }
  );
}
const Wf = /<!--\s*(page-break-before|break-before)\s*-->/i, Uf = /^\s*\[[^\]]+\]:\s+\S+/, Xs = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function xr(e) {
  return e.trim() === "";
}
function Zs(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function Js(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Qs(e) {
  return /^(```|~~~)/.test(e.trim());
}
function ea(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function ta(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function na(e) {
  return Wf.test(e.trim());
}
function Yf(e) {
  return Uf.test(e);
}
function qf(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const s = o ? `${o} ${i}` : i;
    o && s.length > t ? (r.push(o), o = i) : o = s;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Xf(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function Zf(e, t, n, r, o, i) {
  const s = n.join(`
`).trim();
  if (!s) return !1;
  const a = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, c = t === "paragraph" ? qf(s, a) : [s];
  for (let l = 0; l < c.length; l += 1) {
    const d = c[l], u = Xf(d, i);
    e.push({
      id: Cc(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: l === 0 ? r : !1
    });
  }
  return !0;
}
function Jf(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const l of r)
    Yf(l) ? o.push(l) : i.push(l);
  const s = [];
  let a = 0, c = !1;
  for (; a < i.length; ) {
    if (xr(i[a])) {
      a += 1;
      continue;
    }
    if (na(i[a])) {
      c = !0, a += 1;
      continue;
    }
    const l = a;
    let d = "paragraph";
    if (Qs(i[a])) {
      d = "code";
      const u = i[a].trim().slice(0, 3);
      for (a += 1; a < i.length && !i[a].trim().startsWith(u); )
        a += 1;
      a < i.length && (a += 1);
    } else if (Zs(i[a]))
      d = "heading", a += 1;
    else if (ea(i[a]))
      d = "rule", a += 1;
    else if (Xs.test(i[a]))
      d = "image", a += 1;
    else if (ta(i, a))
      for (d = "table", a += 2; a < i.length && i[a].includes("|") && !xr(i[a]); )
        a += 1;
    else if (Js(i[a]))
      for (d = "list", a += 1; a < i.length && !xr(i[a]); )
        a += 1;
    else if (i[a].trim().startsWith(">"))
      for (d = "quote", a += 1; a < i.length && i[a].trim().startsWith(">"); )
        a += 1;
    else
      for (a += 1; a < i.length && !xr(i[a]) && !Zs(i[a]) && !Qs(i[a]) && !ea(i[a]) && !Xs.test(i[a]) && !ta(i, a) && !Js(i[a]) && !i[a].trim().startsWith(">") && !na(i[a]); )
        a += 1;
    Zf(s, d, i.slice(l, a), c, t, o) && (c = !1);
  }
  return s;
}
function Pc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Pc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ic() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Pc(e)) && (r && (r += " "), r += t);
  return r;
}
const Qf = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, eh = (e, t) => ({
  classGroupId: e,
  validator: t
}), kc = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), jr = "-", ra = [], th = "arbitrary..", nh = (e) => {
  const t = oh(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return rh(s);
      const a = s.split(jr), c = a[0] === "" && a.length > 1 ? 1 : 0;
      return Nc(a, c, t);
    },
    getConflictingClassGroupIds: (s, a) => {
      if (a) {
        const c = r[s], l = n[s];
        return c ? l ? Qf(l, c) : c : l || ra;
      }
      return n[s] || ra;
    }
  };
}, Nc = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const l = Nc(e, t + 1, i);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const a = t === 0 ? e.join(jr) : e.slice(t).join(jr), c = s.length;
  for (let l = 0; l < c; l++) {
    const d = s[l];
    if (d.validator(a))
      return d.classGroupId;
  }
}, rh = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? th + r : void 0;
})(), oh = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return ih(n, t);
}, ih = (e, t) => {
  const n = kc();
  for (const r in e) {
    const o = e[r];
    Li(o, n, r, t);
  }
  return n;
}, Li = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const s = e[i];
    sh(s, t, n, r);
  }
}, sh = (e, t, n, r) => {
  if (typeof e == "string") {
    ah(e, t, n);
    return;
  }
  if (typeof e == "function") {
    ch(e, t, n, r);
    return;
  }
  lh(e, t, n, r);
}, ah = (e, t, n) => {
  const r = e === "" ? t : Rc(t, e);
  r.classGroupId = n;
}, ch = (e, t, n, r) => {
  if (uh(e)) {
    Li(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(eh(n, e));
}, lh = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, c] = o[s];
    Li(c, Rc(t, a), n, r);
  }
}, Rc = (e, t) => {
  let n = e;
  const r = t.split(jr), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = kc(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, uh = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, dh = (e) => {
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
}, oi = "!", oa = ":", fh = [], ia = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), hh = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, c = 0, l;
    const d = o.length;
    for (let g = 0; g < d; g++) {
      const b = o[g];
      if (s === 0 && a === 0) {
        if (b === oa) {
          i.push(o.slice(c, g)), c = g + 1;
          continue;
        }
        if (b === "/") {
          l = g;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? a++ : b === ")" && a--;
    }
    const u = i.length === 0 ? o : o.slice(c);
    let f = u, h = !1;
    u.endsWith(oi) ? (f = u.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(oi) && (f = u.slice(1), h = !0)
    );
    const v = l && l > c ? l - c : void 0;
    return ia(i, h, f, v);
  };
  if (t) {
    const o = t + oa, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : ia(fh, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, mh = (e) => {
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
}, ph = (e) => ({
  cache: dh(e.cacheSize),
  parseClassName: hh(e),
  sortModifiers: mh(e),
  postfixLookupClassGroupIds: gh(e),
  ...nh(e)
}), gh = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      t[n[r]] = !0;
  return t;
}, vh = /\s+/, bh = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i,
    postfixLookupClassGroupIds: s
  } = t, a = [], c = e.trim().split(vh);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: b
    } = n(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let w = !!b, C;
    if (w) {
      const P = g.substring(0, b);
      C = r(P);
      const x = C && s[C] ? r(g) : void 0;
      x && x !== C && (C = x, w = !1);
    } else
      C = r(g);
    if (!C) {
      if (!w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (C = r(g), !C) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const S = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), y = v ? S + oi : S, N = y + C;
    if (a.indexOf(N) > -1)
      continue;
    a.push(N);
    const I = o(C, w);
    for (let P = 0; P < I.length; ++P) {
      const x = I[P];
      a.push(y + x);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
}, yh = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Ec(n)) && (o && (o += " "), o += r);
  return o;
}, Ec = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ec(e[r])) && (n && (n += " "), n += t);
  return n;
}, wh = (e, ...t) => {
  let n, r, o, i;
  const s = (c) => {
    const l = t.reduce((d, u) => u(d), e());
    return n = ph(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }, a = (c) => {
    const l = r(c);
    if (l)
      return l;
    const d = bh(c, n);
    return o(c, d), d;
  };
  return i = s, (...c) => i(yh(...c));
}, xh = [], Ie = (e) => {
  const t = (n) => n[e] || xh;
  return t.isThemeGetter = !0, t;
}, Dc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ac = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ch = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Sh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ph = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ih = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, kh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e) => Ch.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), ft = (e) => !!e && Number.isInteger(Number(e)), Mo = (e) => e.endsWith("%") && ie(e.slice(0, -1)), xt = (e) => Sh.test(e), Mc = () => !0, Rh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ph.test(e) && !Ih.test(e)
), $i = () => !1, Eh = (e) => kh.test(e), Dh = (e) => Nh.test(e), Ah = (e) => !U(e) && !Y(e), Mh = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Oh = (e) => Xt(e, Tc, $i), U = (e) => Dc.test(e), nn = (e) => Xt(e, Fc, Rh), sa = (e) => Xt(e, Hh, ie), _h = (e) => Xt(e, $c, Mc), Th = (e) => Xt(e, Lc, $i), aa = (e) => Xt(e, Oc, $i), Fh = (e) => Xt(e, _c, Dh), Cr = (e) => Xt(e, Bc, Eh), Y = (e) => Ac.test(e), Kn = (e) => ln(e, Fc), Lh = (e) => ln(e, Lc), ca = (e) => ln(e, Oc), $h = (e) => ln(e, Tc), Bh = (e) => ln(e, _c), Sr = (e) => ln(e, Bc, !0), zh = (e) => ln(e, $c, !0), Xt = (e, t, n) => {
  const r = Dc.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, ln = (e, t, n = !1) => {
  const r = Ac.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Oc = (e) => e === "position" || e === "percentage", _c = (e) => e === "image" || e === "url", Tc = (e) => e === "length" || e === "size" || e === "bg-size", Fc = (e) => e === "length", Hh = (e) => e === "number", Lc = (e) => e === "family-name", $c = (e) => e === "number" || e === "weight", Bc = (e) => e === "shadow", Kh = () => {
  const e = Ie("color"), t = Ie("font"), n = Ie("text"), r = Ie("font-weight"), o = Ie("tracking"), i = Ie("leading"), s = Ie("breakpoint"), a = Ie("container"), c = Ie("spacing"), l = Ie("radius"), d = Ie("shadow"), u = Ie("inset-shadow"), f = Ie("text-shadow"), h = Ie("drop-shadow"), v = Ie("blur"), g = Ie("perspective"), b = Ie("aspect"), w = Ie("ease"), C = Ie("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], N = () => [...y(), Y, U], I = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], x = () => [Y, U, c], k = () => [$t, "full", "auto", ...x()], E = () => [ft, "none", "subgrid", Y, U], O = () => ["auto", {
    span: ["full", ft, Y, U]
  }, ft, Y, U], _ = () => [ft, "auto", Y, U], B = () => ["auto", "min", "max", "fr", Y, U], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...x()], A = () => [$t, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], R = () => [$t, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...x()], T = () => [$t, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...x()], D = () => [e, Y, U], K = () => [...y(), ca, aa, {
    position: [Y, U]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], H = () => ["auto", "cover", "contain", $h, Oh, {
    size: [Y, U]
  }], W = () => [Mo, Kn, nn], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    Y,
    U
  ], z = () => ["", ie, Kn, nn], Z = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [ie, Mo, ca, aa], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    Y,
    U
  ], ne = () => ["none", ie, Y, U], ae = () => ["none", ie, Y, U], ve = () => [ie, Y, U], fe = () => [$t, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [xt],
      breakpoint: [xt],
      color: [Mc],
      container: [xt],
      "drop-shadow": [xt],
      ease: ["in", "out", "in-out"],
      font: [Ah],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [xt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [xt],
      shadow: [xt],
      spacing: ["px", ie],
      text: [xt],
      "text-shadow": [xt],
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
        aspect: ["auto", "square", $t, U, Y, b]
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
        "@container": ["", "normal", "size", Y, U]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Mh],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ie, U, Y, a]
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
        z: [ft, "auto", Y, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [$t, "full", "auto", a, ...x()]
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
        flex: [ie, $t, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, Y, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, Y, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ft, "first", "last", "none", Y, U]
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
        col: O()
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
        row: O()
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
        content: ["normal", ...L()]
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
        "place-content": L()
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
        m: M()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: M()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
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
        size: A()
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
        block: ["auto", ...T()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...T()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...T()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...A()]
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
          ...A()
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
          ...A()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...A()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...A()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...A()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Kn, nn]
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
        font: [r, zh, _h]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Mo, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Lh, Th, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [U]
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
        tracking: [o, Y, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ie, "none", Y, sa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y, U]
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
        list: ["disc", "decimal", "none", Y, U]
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ie, "from-font", "auto", Y, nn]
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
        "underline-offset": [ie, "auto", Y, U]
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
        tab: [ft, Y, U]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, U]
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
        content: ["none", Y, U]
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
          }, ft, Y, U],
          radial: ["", Y, U],
          conic: [ft, Y, U]
        }, Bh, Fh]
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
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
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
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
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
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ie, Y, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, Kn, nn]
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
          Sr,
          Cr
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
        "inset-shadow": ["none", u, Sr, Cr]
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
        "ring-offset": [ie, nn]
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
        "text-shadow": ["none", f, Sr, Cr]
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
        opacity: [ie, Y, U]
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
        "mask-linear": [ie]
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
        "mask-radial": [Y, U]
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
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ie]
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
        mask: ["none", Y, U]
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
          Y,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ie, Y, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, Y, U]
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
          Sr,
          Cr
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
        grayscale: ["", ie, Y, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, Y, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, Y, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, Y, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, Y, U]
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
          Y,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ie, Y, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, Y, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, Y, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, Y, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, Y, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, Y, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, Y, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, Y, U]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, U]
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
        duration: [ie, "initial", Y, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, Y, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ie, Y, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, Y, U]
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
        perspective: [g, Y, U]
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
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
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
        skew: ve()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ve()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ve()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Y, U, "", "none", "gpu", "cpu"]
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
        translate: fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fe()
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
        zoom: [ft, Y, U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, U]
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
        "will-change": ["auto", "scroll", "contents", "transform", Y, U]
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
        stroke: [ie, Kn, nn, sa]
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
}, jh = /* @__PURE__ */ wh(Kh);
function ue(...e) {
  return jh(Ic(e));
}
const Bi = ({
  onError: e
}) => (n) => {
  e?.(n);
}, la = (e, t) => e && e > 0 ? e + t : 0, zi = ({ width: e, left: t = 0, right: n = 0 }, r, o, i) => {
  if (e)
    return !t && !n ? e + o : e;
  let s = i * r;
  return t || (s += i * o), n || (s += i * o), (t || n) && (s -= t + n), s;
}, zc = (e, t) => {
  const n = e.bleed ?? 0, r = e.pageWidth ?? 210, o = t === "spread" ? 2 : 1, i = r + 2 * n, s = zi(e, r, n, o), a = la(e.left, n), c = t === "spread" && e.side === "end" ? -r + a : a, l = i - (c + s);
  return {
    top: `${Math.max(0, la(e.top, n))}mm`,
    right: `${Math.max(0, l)}mm`
  };
}, Hi = (e) => {
  const t = Pe(qt), n = Bi({
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
  } = e, g = (P) => `${P}mm`, b = () => zi({ width: l, left: u, right: f }, o, r, 1), w = () => {
    let P = d;
    return d ? !h && !v && (P += r) : (P = i, h || (P += r), v || (P += r), (h || v) && (P -= (h ?? 0) + (v ?? 0))), P;
  }, C = b(), S = w(), y = (P) => P !== void 0 ? g(P) : void 0, I = ((P) => Object.fromEntries(
    Object.entries(P).filter(([x, k]) => k !== void 0)
  ))({
    backgroundColor: c,
    width: y(C),
    height: y(S),
    left: y(u > 0 ? u + r : u),
    right: y(f > 0 ? f + r : f),
    top: y(h > 0 ? h + r : h),
    bottom: y(v > 0 ? v + r : v)
  });
  return /* @__PURE__ */ m("div", { className: "uhuu-image-container", style: I, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ $(
    "div",
    {
      className: "uhuu-image-inner",
      ...En(e, t),
      children: [
        /* @__PURE__ */ m(
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
const Gh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), ua = (e) => {
  const t = Vh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Hc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Wh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Uh = {
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
const Yh = ro(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, c) => ei(
    "svg",
    {
      ref: c,
      ...Uh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Hc("lucide", o),
      ...!i && !Wh(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([l, d]) => ei(l, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Ce = (e, t) => {
  const n = ro(
    ({ className: r, ...o }, i) => ei(Yh, {
      ref: i,
      iconNode: t,
      className: Hc(
        `lucide-${Gh(ua(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = ua(e), n;
};
const qh = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Xh = Ce("arrow-down", qh);
const Zh = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], da = Ce("arrow-up-down", Zh);
const Jh = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Qh = Ce("arrow-up", Jh);
const em = [
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
], tm = Ce("book-dashed", em);
const nm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ki = Ce("check", nm);
const rm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Kc = Ce("chevron-down", rm);
const om = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], im = Ce("chevron-right", om);
const sm = [
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
], am = Ce("clipboard-list", sm);
const cm = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], lm = Ce("copy", cm);
const um = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], jc = Ce("ellipsis", um);
const dm = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Gc = Ce("grip-vertical", dm);
const fm = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], ii = Ce("lock", fm);
const hm = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], mm = Ce("maximize", hm);
const pm = [["path", { d: "M5 12h14", key: "1ays0h" }]], gm = Ce("minus", pm);
const vm = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], bm = Ce("pencil", vm);
const ym = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ht = Ce("plus", ym);
const wm = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], xm = Ce("search", wm);
const Cm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Sm = Ce("trash-2", Cm);
const Pm = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], Im = Ce("unfold-horizontal", Pm);
const km = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], Nm = Ce("unfold-vertical", km);
const Rm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Vc = Ce("x", Rm);
const Em = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Dm = Ce("zoom-in", Em);
const Am = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Mm = Ce("zoom-out", Am), Wc = p.createContext({
  portalContainer: null
});
function ji() {
  return p.useContext(Wc);
}
function Om({ children: e }) {
  const [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ m(Wc.Provider, { value: { portalContainer: t }, children: e });
}
const Uc = Yt({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function Gi() {
  return Pe(Uc);
}
function Vi() {
  const { interactive: e } = Gi();
  return !e;
}
function _m() {
  return typeof window < "u" && !!window?.$uhuu_renderer;
}
function Tm() {
  return typeof window > "u" ? !1 : !!window?.__uhuuPreviewHost?.enableEditorShellDevTools;
}
function Fm({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const r = _m(), o = n || Tm(), i = r ? !1 : t, [s, a] = se(i);
  return /* @__PURE__ */ m(Uc.Provider, { value: { interactive: s, setInteractive: a, enableDevTools: o }, children: /* @__PURE__ */ m(Om, { children: /* @__PURE__ */ m("div", { "data-uhuu-interactive": s ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const fa = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ha = Ic, Yc = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return ha(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((l) => {
    const d = n?.[l], u = i?.[l];
    if (d === null) return null;
    const f = fa(d) || fa(u);
    return o[l][f];
  }), a = n && Object.entries(n).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: f, ...h } = d;
    return Object.entries(h).every((v) => {
      let [g, b] = v;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...a
      }[g]) : {
        ...i,
        ...a
      }[g] === b;
    }) ? [
      ...l,
      u,
      f
    ] : l;
  }, []);
  return ha(e, s, c, n?.class, n?.className);
}, Lm = Yc(
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
), _e = p.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ m(
    "button",
    {
      className: ue(Lm({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
_e.displayName = "Button";
var $m = Object.defineProperty, Dn = (e, t) => $m(e, "name", { value: t, configurable: !0 }), qc = !!(typeof window < "u" && window.document && window.document.createElement);
function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Dn(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
Dn(te, "composeEventHandlers");
function Bm(e) {
  if (!qc)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
Dn(Bm, "getOwnerWindow");
function si(e) {
  if (!qc)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
Dn(si, "getOwnerDocument");
function Xc(e, t = !1) {
  const { activeElement: n } = si(e);
  if (!n?.nodeName)
    return null;
  if (Zc(n) && n.contentDocument)
    return Xc(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = si(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
Dn(Xc, "getActiveElement");
function Zc(e) {
  return e.tagName === "IFRAME";
}
Dn(Zc, "isFrame");
var zm = Object.defineProperty, Wi = (e, t) => zm(e, "name", { value: t, configurable: !0 });
function ai(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Wi(ai, "setRef");
function Jc(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = ai(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ai(e[o], null);
        }
      };
  };
}
Wi(Jc, "composeRefs");
function ge(...e) {
  return p.useCallback(Jc(...e), e);
}
Wi(ge, "useComposedRefs");
var Hm = Object.defineProperty, Ze = (e, t) => Hm(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Km(e, t) {
  const n = p.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ Ze((i) => {
    const { children: s, ...a } = i, c = p.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m(n.Provider, { value: c, children: s });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(i, s = {}) {
    const { optional: a = !1 } = s, c = p.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return Ze(o, "useContext"), [r, o];
}
Ze(Km, "createContext");
// @__NO_SIDE_EFFECTS__
function st(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s);
    a.displayName = i + "Context";
    const c = n.length;
    n = [...n, s];
    const l = /* @__PURE__ */ Ze((u) => {
      const { scope: f, children: h, ...v } = u, g = f?.[e]?.[c] || a, b = p.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ m(g.Provider, { value: b, children: h });
    }, "Provider");
    l.displayName = i + "Provider";
    function d(u, f, h = {}) {
      const { optional: v = !1 } = h, g = f?.[e]?.[c] || a, b = p.useContext(g);
      if (b) return b;
      if (s !== void 0) return s;
      if (!v)
        throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return Ze(d, "useContext"), [l, d];
  }
  Ze(r, "createContext");
  const o = /* @__PURE__ */ Ze(() => {
    const i = n.map((s) => p.createContext(s));
    return /* @__PURE__ */ Ze(function(a) {
      const c = a?.[e] || i;
      return p.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Qc(o, ...t)];
}
Ze(st, "createContextScope");
function Qc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ Ze(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ Ze(function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
Ze(Qc, "composeContextScopes");
var Ge = globalThis?.document ? p.useLayoutEffect : () => {
}, jm = Object.defineProperty, Gm = (e, t) => jm(e, "name", { value: t, configurable: !0 }), ma = p[" useEffectEvent ".trim().toString()], pa = p[" useInsertionEffect ".trim().toString()];
function el(e) {
  if (typeof ma == "function")
    return ma(e);
  const t = p.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof pa == "function" ? pa(() => {
    t.current = e;
  }) : Ge(() => {
    t.current = e;
  }), p.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Gm(el, "useEffectEvent");
var Vm = Object.defineProperty, nr = (e, t) => Vm(e, "name", { value: t, configurable: !0 }), Wm = p[" useInsertionEffect ".trim().toString()] || Ge;
function un({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ nr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, i, s] = tl({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o, l = p.useCallback(
    (d) => {
      if (a) {
        const u = nl(d) ? d(e) : d;
        u !== e && s.current?.(u);
      } else
        i(d);
    },
    [a, e, i, s]
  );
  return [c, l];
}
nr(un, "useControllableState");
function tl({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = p.useState(e), o = p.useRef(n), i = p.useRef(t);
  return Wm(() => {
    i.current = t;
  }, [t]), p.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
nr(tl, "useUncontrolledState");
function nl(e) {
  return typeof e == "function";
}
nr(nl, "isFunction");
var ga = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function Um(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: s, caller: a } = t, c = o !== void 0, l = el(s), d = [{ ...n, state: i }];
  r && d.push(r);
  const [u, f] = p.useReducer(
    (b, w) => {
      if (w.type === ga)
        return { ...b, state: w.state };
      const C = e(b, w);
      return c && !Object.is(C.state, b.state) && l(C.state), C;
    },
    ...d
  ), h = u.state, v = p.useRef(h);
  p.useEffect(() => {
    v.current !== h && (v.current = h, c || l(h));
  }, [h, v, c]);
  const g = p.useMemo(() => o !== void 0 ? { ...u, state: o } : u, [u, o]);
  return p.useEffect(() => {
    c && !Object.is(o, u.state) && f({ type: ga, state: o });
  }, [o, u.state, c]), [g, f];
}
nr(Um, "useControllableStateReducer");
var Ym = Object.defineProperty, at = (e, t) => Ym(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const t = p.forwardRef((n, r) => {
    let { children: o, ...i } = n, s = null, a = !1;
    const c = [];
    ci(o) && typeof Pr == "function" && (o = Pr(o._payload)), p.Children.forEach(o, (f) => {
      if (sl(f)) {
        a = !0;
        const h = f;
        let v = "child" in h.props ? h.props.child : h.props.children;
        ci(v) && typeof Pr == "function" && (v = Pr(v._payload)), s = Xm(h, v), c.push(s?.props?.children);
      } else
        c.push(f);
    }), s ? s = p.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && p.Children.count(o) === 1 && p.isValidElement(o) && (s = o)
    );
    const l = s ? il(s) : void 0, d = ge(r, l);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          a ? Qm(e) : Jm(e)
        );
      return o;
    }
    const u = ol(i, s.props ?? {});
    return s.type !== p.Fragment && (u.ref = r ? d : l), p.cloneElement(s, u);
  });
  return t.displayName = `${e}.Slot`, t;
}
at(jt, "createSlot");
var rl = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function qm(e) {
  const t = /* @__PURE__ */ at((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = rl, t;
}
at(qm, "createSlottable");
var Xm = /* @__PURE__ */ at((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return p.isValidElement(n) ? p.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return p.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function ol(e, t) {
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
at(ol, "mergeProps");
function il(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
at(il, "getElementRef");
function sl(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rl;
}
at(sl, "isSlottable");
var Zm = /* @__PURE__ */ Symbol.for("react.lazy");
function ci(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Zm && "_payload" in e && al(e._payload);
}
at(ci, "isLazyComponent");
function al(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
at(al, "isPromiseLike");
var Jm = /* @__PURE__ */ at((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Qm = /* @__PURE__ */ at((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Pr = p[" use ".trim().toString()], ep = Object.defineProperty, tp = (e, t) => ep(e, "name", { value: t, configurable: !0 }), np = [
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
], ye = np.reduce((e, t) => {
  const n = /* @__PURE__ */ jt(`Primitive.${t}`), r = p.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(c, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ui(e, t) {
  e && Ei.flushSync(() => e.dispatchEvent(t));
}
tp(Ui, "dispatchDiscreteCustomEvent");
var rp = Object.defineProperty, De = (e, t) => rp(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function io(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ st(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ De((g) => {
    const { scope: b, children: w } = g, C = p.useRef(null), S = p.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: b, itemMap: S, collectionRef: C, children: w });
  }, "CollectionProvider");
  s.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ jt(a), l = p.forwardRef(
    (g, b) => {
      const { scope: w, children: C } = g, S = i(a, w), y = ge(b, S.collectionRef);
      return /* @__PURE__ */ m(c, { ref: y, children: C });
    }
  );
  l.displayName = a;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ jt(d), h = p.forwardRef(
    (g, b) => {
      const { scope: w, children: C, ...S } = g, y = p.useRef(null), N = ge(b, y), I = i(d, w);
      return p.useEffect(() => (I.itemMap.set(y, { ref: y, ...S }), () => {
        I.itemMap.delete(y);
      })), /* @__PURE__ */ m(f, { [u]: "", ref: N, children: C });
    }
  );
  h.displayName = d;
  function v(g) {
    const b = i(e + "CollectionConsumer", g);
    return p.useCallback(() => {
      const C = b.collectionRef.current;
      if (!C) return [];
      const S = Array.from(C.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (I, P) => S.indexOf(I.ref.current) - S.indexOf(P.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return De(v, "useCollection"), [
    { Provider: s, Slot: l, ItemSlot: h },
    v,
    r
  ];
}
De(io, "createCollection");
var va = /* @__PURE__ */ new WeakMap(), Oo = class Bt extends Map {
  static {
    De(this, "OrderedDict");
  }
  #e;
  constructor(t) {
    super(t), this.#e = [...super.keys()], va.set(this, !0);
  }
  set(t, n) {
    return va.get(this) && (this.has(t) ? this.#e[this.#e.indexOf(t)] = t : this.#e.push(t)), super.set(t, n), this;
  }
  insert(t, n, r) {
    const o = this.has(n), i = this.#e.length, s = Yi(t);
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
        const v = d[f ? h : h - 1], g = u;
        u = this.get(v), this.delete(v), this.set(v, g);
      }
    return this;
  }
  with(t, n, r) {
    const o = new Bt(this);
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
    const n = Or(this.#e, t);
    if (n !== void 0)
      return this.get(n);
  }
  entryAt(t) {
    const n = Or(this.#e, t);
    if (n !== void 0)
      return [n, this.get(n)];
  }
  indexOf(t) {
    return this.#e.indexOf(t);
  }
  keyAt(t) {
    return Or(this.#e, t);
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
    return new Bt(r);
  }
  map(t, n) {
    const r = [];
    let o = 0;
    for (const i of this)
      r.push([i[0], Reflect.apply(t, n, [i, o, this])]), o++;
    return new Bt(r);
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
    return new Bt(n);
  }
  toReversed() {
    const t = new Bt();
    for (let n = this.size - 1; n >= 0; n--) {
      const r = this.keyAt(n), o = this.get(r);
      t.set(r, o);
    }
    return t;
  }
  toSpliced(...t) {
    const n = [...this.entries()];
    return n.splice(...t), new Bt(n);
  }
  slice(t, n) {
    const r = new Bt();
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
function Or(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = cl(e, t);
  return n === -1 ? void 0 : e[n];
}
De(Or, "at");
function cl(e, t) {
  const n = e.length, r = Yi(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
De(cl, "toSafeIndex");
function Yi(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
De(Yi, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function op(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ st(t), [o, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Oo(),
      setItemMap: /* @__PURE__ */ De(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ De(({ state: S, ...y }) => S ? /* @__PURE__ */ m(c, { ...y, state: S }) : /* @__PURE__ */ m(a, { ...y }), "CollectionProvider");
  s.displayName = t;
  const a = /* @__PURE__ */ De((S) => {
    const y = b();
    return /* @__PURE__ */ m(c, { ...S, state: y });
  }, "CollectionInit");
  a.displayName = t + "Init";
  const c = /* @__PURE__ */ De((S) => {
    const { scope: y, children: N, state: I } = S, P = p.useRef(null), [x, k] = p.useState(
      null
    ), E = ge(P, k), [O, _] = I;
    return p.useEffect(() => {
      if (!x) return;
      const B = dl(() => {
      });
      return B.observe(x, {
        childList: !0,
        subtree: !0
      }), () => {
        B.disconnect();
      };
    }, [x]), /* @__PURE__ */ m(
      o,
      {
        scope: y,
        itemMap: O,
        setItemMap: _,
        collectionRef: E,
        collectionRefObject: P,
        collectionElement: x,
        children: N
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = t + "Impl";
  const l = e + "CollectionSlot", d = /* @__PURE__ */ jt(l), u = p.forwardRef(
    (S, y) => {
      const { scope: N, children: I } = S, P = i(l, N), x = ge(y, P.collectionRef);
      return /* @__PURE__ */ m(d, { ref: x, children: I });
    }
  );
  u.displayName = l;
  const f = e + "CollectionItemSlot", h = "data-radix-collection-item", v = /* @__PURE__ */ jt(f), g = p.forwardRef(
    (S, y) => {
      const { scope: N, children: I, ...P } = S, x = p.useRef(null), [k, E] = p.useState(null), O = ge(y, x, E), _ = i(f, N), { setItemMap: B } = _, L = p.useRef(P);
      ll(L.current, P) || (L.current = P);
      const G = L.current;
      return p.useEffect(() => {
        const M = G;
        return B((A) => k ? A.has(k) ? A.set(k, { ...M, element: k }).toSorted(li) : (A.set(k, { ...M, element: k }), A.toSorted(li)) : A), () => {
          B((A) => !k || !A.has(k) ? A : (A.delete(k), new Oo(A)));
        };
      }, [k, G, B]), /* @__PURE__ */ m(v, { [h]: "", ref: O, children: I });
    }
  );
  g.displayName = f;
  function b() {
    return p.useState(new Oo());
  }
  De(b, "useInitCollection");
  function w(S) {
    const { itemMap: y } = i(e + "CollectionConsumer", S);
    return y;
  }
  return De(w, "useCollection"), [
    { Provider: s, Slot: u, ItemSlot: g },
    {
      createCollectionScope: r,
      useCollection: w,
      useInitCollection: b
    }
  ];
}
De(op, "createCollection");
function ll(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
De(ll, "shallowEqual");
function ul(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
De(ul, "isElementPreceding");
function li(e, t) {
  return !e[1].element || !t[1].element ? 0 : ul(e[1].element, t[1].element) ? -1 : 1;
}
De(li, "sortByDocumentPosition");
function dl(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
De(dl, "getChildListObserver");
var ip = Object.defineProperty, sp = (e, t) => ip(e, "name", { value: t, configurable: !0 }), ap = p.createContext(void 0);
function so(e) {
  const t = p.useContext(ap);
  return e || t || "ltr";
}
sp(so, "useDirection");
var cp = Object.defineProperty, lp = (e, t) => cp(e, "name", { value: t, configurable: !0 });
function gt(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => ((...n) => t.current?.(...n)), []);
}
lp(gt, "useCallbackRef");
var up = Object.defineProperty, Ee = (e, t) => up(e, "name", { value: t, configurable: !0 }), ui = "dismissableLayer.update", dp = "dismissableLayer.pointerDownOutside", fp = "dismissableLayer.focusOutside", ba, fl = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), hl = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ee(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: l,
      ...d
    } = t, u = p.useContext(fl), [f, h] = p.useState(null), v = f?.ownerDocument ?? globalThis?.document, [, g] = p.useState({}), b = ge(n, h), w = Array.from(u.layers), [C] = [
      ...u.layersWithOutsidePointerEventsDisabled
    ].slice(-1), S = C ? w.indexOf(C) : -1, y = f ? w.indexOf(f) : -1, N = u.layersWithOutsidePointerEventsDisabled.size > 0, I = y >= S, P = p.useRef(!1), x = pl(
      (_) => {
        s?.(_), c?.(_), _.defaultPrevented || l?.();
      },
      {
        ownerDocument: v,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: P,
        dismissableSurfaces: u.dismissableSurfaces,
        shouldHandlePointerDownOutside: p.useCallback(
          (_) => {
            if (!(_ instanceof Node))
              return !1;
            const B = [...u.branches].some(
              (L) => L.contains(_)
            );
            return I && !B;
          },
          [u.branches, I]
        )
      }
    ), k = gl((_) => {
      if (o && P.current)
        return;
      const B = _.target;
      [...u.branches].some((G) => G.contains(B)) || (a?.(_), c?.(_), _.defaultPrevented || l?.());
    }, v), E = f ? y === w.length - 1 : !1, O = gt((_) => {
      _.key === "Escape" && (i?.(_), !_.defaultPrevented && l && (_.preventDefault(), l()));
    });
    return p.useEffect(() => {
      if (E)
        return v.addEventListener("keydown", O, { capture: !0 }), () => v.removeEventListener("keydown", O, { capture: !0 });
    }, [v, E, O]), p.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ba = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), di(), () => {
          r && (u.layersWithOutsidePointerEventsDisabled.delete(f), u.layersWithOutsidePointerEventsDisabled.size === 0 && (v.body.style.pointerEvents = ba));
        };
    }, [f, v, r, u]), p.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), di());
    }, [f, u]), p.useEffect(() => {
      const _ = /* @__PURE__ */ Ee(() => g({}), "handleUpdate");
      return document.addEventListener(ui, _), () => document.removeEventListener(ui, _);
    }, []), /* @__PURE__ */ m(
      ye.div,
      {
        ...d,
        ref: b,
        style: {
          pointerEvents: N ? I ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: te(t.onFocusCapture, k.onFocusCapture),
        onBlurCapture: te(t.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: te(
          t.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function ml() {
  const e = p.useContext(fl), [t, n] = p.useState(null);
  return p.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
Ee(ml, "useDismissableLayerSurface");
var hp = /* @__PURE__ */ Ee(() => !0, "IS_TRUE");
function pl(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = hp
  } = t, a = gt(e), c = p.useRef(!1), l = p.useRef(!1), d = p.useRef(/* @__PURE__ */ new Map()), u = p.useRef(() => {
  });
  return p.useEffect(() => {
    function f() {
      l.current = !1, o.current = !1, d.current.clear();
    }
    Ee(f, "resetOutsideInteraction");
    function h() {
      return Array.from(d.current.values()).some(Boolean);
    }
    Ee(h, "isOutsideInteractionIntercepted");
    function v(S) {
      if (!l.current)
        return;
      const y = S.target;
      y instanceof Node && [...i].some((I) => I.contains(y)) || d.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        l.current && u.current();
      }, 0);
    }
    Ee(v, "handleInteractionCapture");
    function g(S) {
      l.current && d.current.set(S.type, !1);
    }
    Ee(g, "handleInteractionBubble");
    const b = /* @__PURE__ */ Ee((S) => {
      if (S.target && !c.current) {
        let y = function() {
          n.removeEventListener("click", u.current);
          const I = h();
          f(), I || qi(
            dp,
            a,
            N,
            { discrete: !0 }
          );
        };
        if (Ee(y, "handleAndDispatchPointerDownOutsideEvent"), !s(S.target)) {
          n.removeEventListener("click", u.current), f(), c.current = !1;
          return;
        }
        const N = { originalEvent: S };
        l.current = !0, o.current = r && S.button === 0, d.current.clear(), !r || S.button !== 0 ? y() : (n.removeEventListener("click", u.current), u.current = y, n.addEventListener("click", u.current, { once: !0 }));
      } else
        n.removeEventListener("click", u.current), f();
      c.current = !1;
    }, "handlePointerDown"), w = [
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
    i,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Ee(() => c.current = !0, "onPointerDownCapture")
  };
}
Ee(pl, "usePointerDownOutside");
function gl(e, t = globalThis?.document) {
  const n = gt(e), r = p.useRef(!1);
  return p.useEffect(() => {
    const o = /* @__PURE__ */ Ee((i) => {
      i.target && !r.current && qi(fp, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ Ee(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Ee(() => r.current = !1, "onBlurCapture")
  };
}
Ee(gl, "useFocusOutside");
function di() {
  const e = new CustomEvent(ui);
  document.dispatchEvent(e);
}
Ee(di, "dispatchUpdate");
function qi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ui(o, i) : o.dispatchEvent(i);
}
Ee(qi, "handleAndDispatchCustomEvent");
var mp = Object.defineProperty, Xi = (e, t) => mp(e, "name", { value: t, configurable: !0 }), Ir = 0, bn = null;
function pp(e) {
  return ao(), e.children;
}
Xi(pp, "FocusGuards");
function ao() {
  p.useEffect(() => {
    bn || (bn = { start: fi(), end: fi() });
    const { start: e, end: t } = bn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ir++, () => {
      Ir === 1 && (bn?.start.remove(), bn?.end.remove(), bn = null), Ir = Math.max(0, Ir - 1);
    };
  }, []);
}
Xi(ao, "useFocusGuards");
function fi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Xi(fi, "createFocusGuard");
var gp = Object.defineProperty, Le = (e, t) => gp(e, "name", { value: t, configurable: !0 }), _o = "focusScope.autoFocusOnMount", To = "focusScope.autoFocusOnUnmount", ya = { bubbles: !1, cancelable: !0 }, vl = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Le(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...a
    } = t, [c, l] = p.useState(null), d = gt(i), u = gt(s), f = p.useRef(null), h = ge(n, l), v = p.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    p.useEffect(() => {
      if (o) {
        let b = function(y) {
          if (v.paused || !c) return;
          const N = y.target;
          c.contains(N) ? f.current = N : Ct(f.current, { select: !0 });
        }, w = function(y) {
          if (v.paused || !c) return;
          const N = y.relatedTarget;
          N !== null && (c.contains(N) || Ct(f.current, { select: !0 }));
        }, C = function(y) {
          if (document.activeElement === document.body)
            for (const I of y)
              I.removedNodes.length > 0 && Ct(c);
        };
        Le(b, "handleFocusIn"), Le(w, "handleFocusOut"), Le(C, "handleMutations"), document.addEventListener("focusin", b), document.addEventListener("focusout", w);
        const S = new MutationObserver(C);
        return c && S.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", b), document.removeEventListener("focusout", w), S.disconnect();
        };
      }
    }, [o, c, v.paused]), p.useEffect(() => {
      if (c) {
        wa.add(v);
        const b = document.activeElement;
        if (!c.contains(b)) {
          const C = new CustomEvent(_o, ya);
          c.addEventListener(_o, d), c.dispatchEvent(C), C.defaultPrevented || (bl(Sl(Zi(c)), { select: !0 }), document.activeElement === b && Ct(c));
        }
        return () => {
          c.removeEventListener(_o, d), setTimeout(() => {
            const C = new CustomEvent(To, ya);
            c.addEventListener(To, u), c.dispatchEvent(C), C.defaultPrevented || Ct(b ?? document.body, { select: !0 }), c.removeEventListener(To, u), wa.remove(v);
          }, 0);
        };
      }
    }, [c, d, u, v]);
    const g = p.useCallback(
      (b) => {
        if (!r && !o || v.paused) return;
        const w = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, C = document.activeElement;
        if (w && C) {
          const S = b.currentTarget, [y, N] = yl(S);
          y && N ? !b.shiftKey && C === N ? (b.preventDefault(), r && Ct(y, { select: !0 })) : b.shiftKey && C === y && (b.preventDefault(), r && Ct(N, { select: !0 })) : C === S && b.preventDefault();
        }
      },
      [r, o, v.paused]
    );
    return /* @__PURE__ */ m(ye.div, { tabIndex: -1, ...a, ref: h, onKeyDown: g });
  }, "FocusScope")
);
function bl(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ct(r, { select: t }), document.activeElement !== n) return;
}
Le(bl, "focusFirst");
function yl(e) {
  const t = Zi(e), n = hi(t, e), r = hi(t.reverse(), e);
  return [n, r];
}
Le(yl, "getTabbableEdges");
function Zi(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Le((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
Le(Zi, "getTabbableCandidates");
function hi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : wl(r, { upTo: t })))
      return r;
}
Le(hi, "findVisible");
function wl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
Le(wl, "isHidden");
function xl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
Le(xl, "isSelectableInput");
function Ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && xl(e) && t && e.select();
  }
}
Le(Ct, "focus");
var wa = Cl();
function Cl() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = mi(e, t), e.unshift(t);
    },
    remove(t) {
      e = mi(e, t), e[0]?.resume();
    }
  };
}
Le(Cl, "createFocusScopesStack");
function mi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Le(mi, "arrayRemove");
function Sl(e) {
  return e.filter((t) => t.tagName !== "A");
}
Le(Sl, "removeLinks");
var vp = Object.defineProperty, bp = (e, t) => vp(e, "name", { value: t, configurable: !0 }), yp = p[" useId ".trim().toString()] || (() => {
}), wp = 0;
function St(e) {
  const [t, n] = p.useState(yp());
  return Ge(() => {
    e || n((r) => r ?? String(wp++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
bp(St, "useId");
const xp = ["top", "right", "bottom", "left"], Gt = Math.min, Pt = Math.max, Gr = Math.round, kr = Math.floor, It = (e) => ({
  x: e,
  y: e
}), Cp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pl(e, t, n) {
  return Pt(e, Gt(t, n));
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vt(e) {
  return e.split("-")[0];
}
function An(e) {
  return e.split("-")[1];
}
function Ji(e) {
  return e === "x" ? "y" : "x";
}
function Qi(e) {
  return e === "y" ? "height" : "width";
}
function pt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function es(e) {
  return Ji(pt(e));
}
function Sp(e, t, n) {
  n === void 0 && (n = !1);
  const r = An(e), o = es(e), i = Qi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Vr(s)), [s, Vr(s)];
}
function Pp(e) {
  const t = Vr(e);
  return [pi(e), t, pi(t)];
}
function pi(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const xa = ["left", "right"], Ca = ["right", "left"], Ip = ["top", "bottom"], kp = ["bottom", "top"];
function Np(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ca : xa : t ? xa : Ca;
    case "left":
    case "right":
      return t ? Ip : kp;
    default:
      return [];
  }
}
function Rp(e, t, n, r) {
  const o = An(e);
  let i = Np(Vt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(pi)))), i;
}
function Vr(e) {
  const t = Vt(e);
  return Cp[t] + e.slice(t.length);
}
function Ep(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function Il(e) {
  return typeof e != "number" ? Ep(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Wr(e) {
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
function Sa(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = pt(t), s = es(t), a = Qi(s), c = Vt(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  const v = An(t);
  return v && (h[s] += f * (v === "end" ? 1 : -1) * (n && l ? -1 : 1)), h;
}
async function Dp(e, t) {
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
  } = Nt(t, e), v = Il(h), b = a[f ? u === "floating" ? "reference" : "floating" : u], w = Wr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), C = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), y = await (i.isElement == null ? void 0 : i.isElement(S)) && await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  }, N = Wr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: C,
    offsetParent: S,
    strategy: c
  }) : C);
  return {
    top: (w.top - N.top + v.top) / y.y,
    bottom: (N.bottom - w.bottom + v.bottom) / y.y,
    left: (w.left - N.left + v.left) / y.x,
    right: (N.right - w.right + v.right) / y.x
  };
}
const Ap = 50, Mp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Dp
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = Sa(l, r, c), f = r, h = 0;
  const v = {};
  for (let g = 0; g < i.length; g++) {
    const b = i[g];
    if (!b)
      continue;
    const {
      name: w,
      fn: C
    } = b, {
      x: S,
      y,
      data: N,
      reset: I
    } = await C({
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
    d = S ?? d, u = y ?? u, v[w] = {
      ...v[w],
      ...N
    }, I && h < Ap && (h++, typeof I == "object" && (I.placement && (f = I.placement), I.rects && (l = I.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : I.rects), {
      x: d,
      y: u
    } = Sa(l, f, c)), g = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: v
  };
}, Op = (e) => ({
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
    } = Nt(e, t) || {};
    if (l == null)
      return {};
    const u = Il(d), f = {
      x: n,
      y: r
    }, h = es(o), v = Qi(h), g = await s.getDimensions(l), b = h === "y", w = b ? "top" : "left", C = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", y = i.reference[v] + i.reference[h] - f[h] - i.floating[v], N = f[h] - i.reference[h], I = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = I ? I[S] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(I))) && (P = a.floating[S] || i.floating[v]);
    const x = y / 2 - N / 2, k = P / 2 - g[v] / 2 - 1, E = Gt(u[w], k), O = Gt(u[C], k), _ = P - g[v] - O, B = P / 2 - g[v] / 2 + x, L = Pl(E, B, _), G = !c.arrow && An(o) != null && B !== L && i.reference[v] / 2 - (B < E ? E : O) - g[v] / 2 < 0, M = G ? B < E ? B - E : B - _ : 0;
    return {
      [h]: f[h] + M,
      data: {
        [h]: L,
        centerOffset: B - L - M,
        ...G && {
          alignmentOffset: M
        }
      },
      reset: G
    };
  }
}), _p = function(e) {
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
        flipAlignment: g = !0,
        ...b
      } = Nt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Vt(o), C = pt(a), S = Vt(a) === a, y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), N = f || (S || !g ? [Vr(a)] : Pp(a)), I = v !== "none";
      !f && I && N.push(...Rp(a, g, v, y));
      const P = [a, ...N], x = await c.detectOverflow(t, b), k = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && k.push(x[w]), u) {
        const L = Sp(o, s, y);
        k.push(x[L[0]], x[L[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: k
      }], !k.every((L) => L <= 0)) {
        var O, _;
        const L = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, G = P[L];
        if (G && (!(u === "alignment" ? C !== pt(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((R) => pt(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: E
            },
            reset: {
              placement: G
            }
          };
        let M = (_ = E.filter((A) => A.overflows[0] <= 0).sort((A, R) => A.overflows[1] - R.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var B;
              const A = (B = E.filter((R) => {
                if (I) {
                  const T = pt(R.placement);
                  return T === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((T) => T > 0).reduce((T, D) => T + D, 0)]).sort((R, T) => R[1] - T[1])[0]) == null ? void 0 : B[0];
              A && (M = A);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Pa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ia(e) {
  return xp.some((t) => e[t] >= 0);
}
const Tp = function(e) {
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
      } = Nt(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = Pa(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ia(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = Pa(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ia(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, kl = /* @__PURE__ */ new Set(["left", "top"]);
async function Fp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Vt(n), a = An(n), c = pt(n) === "y", l = kl.has(s) ? -1 : 1, d = i && c ? -1 : 1, u = Nt(t, e);
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
const Lp = function(e) {
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
      } = t, c = await Fp(t, e);
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
}, $p = function(e) {
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
        ...l
      } = Nt(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, l), f = pt(o), h = Ji(f);
      let v = d[h], g = d[f];
      const b = (C, S) => Pl(S + u[C === "y" ? "top" : "left"], S, S - u[C === "y" ? "bottom" : "right"]);
      s && (v = b(h, v)), a && (g = b(f, g));
      const w = c.fn({
        ...t,
        [h]: v,
        [f]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [h]: s,
            [f]: a
          }
        }
      };
    }
  };
}, Bp = function(e) {
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
      } = Nt(e, t), f = {
        x: o,
        y: i
      }, h = pt(s), v = Ji(h);
      let g = f[v], b = f[h];
      const w = Nt(l, t), C = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: (n = w.mainAxis) != null ? n : 0,
        crossAxis: (r = w.crossAxis) != null ? r : 0
      };
      if (d) {
        const N = v === "y" ? "height" : "width", I = a.reference[v] - a.floating[N] + C.mainAxis, P = a.reference[v] + a.reference[N] - C.mainAxis;
        g < I ? g = I : g > P && (g = P);
      }
      if (u) {
        var S, y;
        const N = v === "y" ? "width" : "height", I = kl.has(Vt(s)), P = a.reference[h] - a.floating[N] + (I && ((S = c.offset) == null ? void 0 : S[h]) || 0) + (I ? 0 : C.crossAxis), x = a.reference[h] + a.reference[N] + (I ? 0 : ((y = c.offset) == null ? void 0 : y[h]) || 0) - (I ? C.crossAxis : 0);
        b < P ? b = P : b > x && (b = x);
      }
      return {
        [v]: g,
        [h]: b
      };
    }
  };
}, zp = function(e) {
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
      } = Nt(e, t), c = await o.detectOverflow(t, a), l = Vt(n), d = An(n), u = pt(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let v, g;
      l === "top" || l === "bottom" ? (v = l, g = d === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, v = d === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, w = f - c.left - c.right, C = Gt(h - c[v], b), S = Gt(f - c[g], w), y = t.middlewareData.shift, N = !y;
      let I = C, P = S;
      y != null && y.enabled.x && (P = w), y != null && y.enabled.y && (I = b), N && !d && (u ? P = f - 2 * Pt(c.left, c.right) : I = h - 2 * Pt(c.top, c.bottom)), await s({
        ...t,
        availableWidth: P,
        availableHeight: I
      });
      const x = await o.getDimensions(i.floating);
      return f !== x.width || h !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function co() {
  return typeof window < "u";
}
function Mn(e) {
  return Nl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function He(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  var t;
  return (t = (Nl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nl(e) {
  return co() ? e instanceof Node || e instanceof He(e).Node : !1;
}
function vt(e) {
  return co() ? e instanceof Element || e instanceof He(e).Element : !1;
}
function Zt(e) {
  return co() ? e instanceof HTMLElement || e instanceof He(e).HTMLElement : !1;
}
function ka(e) {
  return !co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof He(e).ShadowRoot;
}
function lo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Hp(e) {
  return /^(table|td|th)$/.test(Mn(e));
}
function uo(e) {
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
const Kp = /transform|translate|scale|rotate|perspective|filter/, jp = /paint|layout|strict|content/, rn = (e) => !!e && e !== "none";
let Fo;
function ts(e) {
  const t = vt(e) ? bt(e) : e;
  return rn(t.transform) || rn(t.translate) || rn(t.scale) || rn(t.rotate) || rn(t.perspective) || !ns() && (rn(t.backdropFilter) || rn(t.filter)) || Kp.test(t.willChange || "") || jp.test(t.contain || "");
}
function Gp(e) {
  let t = an(e);
  for (; Zt(t) && !qn(t); ) {
    if (ts(t))
      return t;
    if (uo(t))
      return null;
    t = an(t);
  }
  return null;
}
function ns() {
  return Fo == null && (Fo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Fo;
}
function qn(e) {
  return /^(html|body|#document)$/.test(Mn(e));
}
function bt(e) {
  return He(e).getComputedStyle(e);
}
function fo(e) {
  return vt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function an(e) {
  if (Mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ka(e) && e.host || // Fallback.
    Et(e)
  );
  return ka(t) ? t.host : t;
}
function Rl(e) {
  const t = an(e);
  return qn(t) ? (e.ownerDocument || e).body : Zt(t) && lo(t) ? t : Rl(t);
}
function Xn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Rl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = He(o);
  if (i) {
    const a = gi(s);
    return t.concat(s, s.visualViewport || [], lo(o) ? o : [], a && n ? Xn(a) : []);
  } else
    return t.concat(o, Xn(o, [], n));
}
function gi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function El(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Zt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Gr(n) !== i || Gr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function rs(e) {
  return vt(e) ? e : e.contextElement;
}
function Pn(e) {
  const t = rs(e);
  if (!Zt(t))
    return It(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = El(t);
  let s = (i ? Gr(n.width) : n.width) / r, a = (i ? Gr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Vp = /* @__PURE__ */ It(0);
function Dl(e) {
  const t = He(e);
  return !ns() || !t.visualViewport ? Vp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wp(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === He(e);
}
function cn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = rs(e);
  let s = It(1);
  t && (r ? vt(r) && (s = Pn(r)) : s = Pn(e));
  const a = Wp(i, n, r) ? Dl(i) : It(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i && r) {
    const f = He(i), h = vt(r) ? He(r) : r;
    let v = f, g = gi(v);
    for (; g && h !== v; ) {
      const b = Pn(g), w = g.getBoundingClientRect(), C = bt(g), S = w.left + (g.clientLeft + parseFloat(C.paddingLeft)) * b.x, y = w.top + (g.clientTop + parseFloat(C.paddingTop)) * b.y;
      c *= b.x, l *= b.y, d *= b.x, u *= b.y, c += S, l += y, v = He(g), g = gi(v);
    }
  }
  return Wr({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function ho(e, t) {
  const n = fo(e).scrollLeft;
  return t ? t.left + n : cn(Et(e)).left + n;
}
function Al(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ho(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Up(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Et(r), a = t ? uo(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = It(1);
  const d = It(0), u = Zt(r);
  if ((u || !i) && ((Mn(r) !== "body" || lo(s)) && (c = fo(r)), u)) {
    const h = cn(r);
    l = Pn(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !i ? Al(s, c) : It(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + f.y
  };
}
function Yp(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function qp(e) {
  const t = fo(e), n = e.ownerDocument.body, r = Pt(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = Pt(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + ho(e);
  const s = -t.scrollTop;
  return bt(n).direction === "rtl" && (i += Pt(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: s
  };
}
const Xp = 25;
function Zp(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = He(e), i = Et(e), s = o.visualViewport;
  let a = i.clientWidth, c = i.clientHeight, l = 0, d = 0;
  if (s) {
    const f = !ns() || t === "fixed";
    r ? f || (l = -s.offsetLeft, d = -s.offsetTop) : (a = s.width, c = s.height, f && (l = s.offsetLeft, d = s.offsetTop));
  }
  if (ho(i) <= 0) {
    const f = i.ownerDocument, h = f.body, v = getComputedStyle(h), g = f.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, b = Math.abs(i.clientWidth - h.clientWidth - g), w = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? b / 2 : b;
    w <= Xp && (a -= w);
  }
  return {
    width: a,
    height: c,
    x: l,
    y: d
  };
}
function Jp(e, t) {
  const n = cn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Pn(e), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Na(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = Zp(e, n, t);
  else if (t === "document")
    r = qp(Et(e));
  else if (vt(t))
    r = Jp(t, n);
  else {
    const o = Dl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Wr(r);
}
function Qp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xn(e, [], !1).filter((a) => vt(a) && Mn(a) !== "body"), o = null;
  const i = bt(e).position === "fixed";
  let s = i ? an(e) : e;
  for (; vt(s) && !qn(s); ) {
    const a = bt(s), c = ts(s), l = o ? o.position : i ? "fixed" : "";
    !c && (l === "fixed" || l === "absolute" && a.position === "static") ? r = r.filter((u) => u !== s) : o = a, s = an(s);
  }
  return t.set(e, r), r;
}
function eg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? uo(t) ? [] : Qp(t, this._c) : [].concat(n), r], a = Na(t, s[0], o);
  let c = a.top, l = a.right, d = a.bottom, u = a.left;
  for (let f = 1; f < s.length; f++) {
    const h = Na(t, s[f], o);
    c = Pt(h.top, c), l = Gt(h.right, l), d = Gt(h.bottom, d), u = Pt(h.left, u);
  }
  return {
    width: l - u,
    height: d - c,
    x: u,
    y: c
  };
}
function tg(e) {
  const {
    width: t,
    height: n
  } = El(e);
  return {
    width: t,
    height: n
  };
}
function ng(e, t, n) {
  const r = Zt(t), o = Et(t), i = n === "fixed", s = cn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = It(0);
  if ((r || !i) && ((Mn(t) !== "body" || lo(o)) && (a = fo(t)), r)) {
    const f = cn(t, !0, i, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  }
  !r && o && (c.x = ho(o));
  const l = o && !r && !i ? Al(o, a) : It(0), d = s.left + a.scrollLeft - c.x - l.x, u = s.top + a.scrollTop - c.y - l.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function Lo(e) {
  return bt(e).position === "static";
}
function Ra(e, t) {
  if (!Zt(e) || bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Et(e) === n && (n = n.ownerDocument.body), n;
}
function Ml(e, t) {
  const n = He(e);
  if (uo(e))
    return n;
  if (!Zt(e)) {
    let o = an(e);
    for (; o && !qn(o); ) {
      if (vt(o) && !Lo(o))
        return o;
      o = an(o);
    }
    return n;
  }
  let r = Ra(e, t);
  for (; r && Hp(r) && Lo(r); )
    r = Ra(r, t);
  return r && qn(r) && Lo(r) && !ts(r) ? n : r || Gp(e) || n;
}
const rg = async function(e) {
  const t = this.getOffsetParent || Ml, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ng(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function og(e) {
  return bt(e).direction === "rtl";
}
const ig = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Up,
  getDocumentElement: Et,
  getClippingRect: eg,
  getOffsetParent: Ml,
  getElementRects: rg,
  getClientRects: Yp,
  getDimensions: tg,
  getScale: Pn,
  isElement: vt,
  isRTL: og
};
function Ol(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sg(e, t, n) {
  let r = null, o;
  const i = Et(e);
  function s() {
    var d;
    clearTimeout(o), (d = r) == null || d.disconnect(), r = null;
  }
  function a(d, u) {
    d === void 0 && (d = !1), u === void 0 && (u = 1), s();
    const f = e.getBoundingClientRect(), {
      left: h,
      top: v,
      width: g,
      height: b
    } = f;
    if (d || t(), !g || !b)
      return;
    const w = kr(v), C = kr(i.clientWidth - (h + g)), S = kr(i.clientHeight - (v + b)), y = kr(h), I = {
      rootMargin: -w + "px " + -C + "px " + -S + "px " + -y + "px",
      threshold: Pt(0, Gt(1, u)) || 1
    };
    let P = !0;
    function x(k) {
      const E = k[0].intersectionRatio;
      if (!Ol(f, e.getBoundingClientRect()))
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
      r = new IntersectionObserver(x, {
        ...I,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, I);
    }
    r.observe(e);
  }
  const c = He(e), l = () => a(n);
  return c.addEventListener("resize", l), a(!0), () => {
    c.removeEventListener("resize", l), s();
  };
}
function ag(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = rs(e), d = o || i ? [...l ? Xn(l) : [], ...t ? Xn(t) : []] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n), i && w.addEventListener("resize", n);
  });
  const u = l && a ? sg(l, n, i) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [C] = w;
    C && C.target === l && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), t && h.observe(t));
  let v, g = c ? cn(e) : null;
  c && b();
  function b() {
    const w = cn(e);
    g && !Ol(g, w) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    d.forEach((C) => {
      o && C.removeEventListener("scroll", n), i && C.removeEventListener("resize", n);
    }), u?.(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const cg = Lp, lg = $p, ug = _p, dg = zp, fg = Tp, Ea = Op, hg = Bp, mg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, i = {
    ...ig,
    ...o.platform,
    _c: r
  };
  return Mp(e, t, {
    ...o,
    platform: i
  });
};
var pg = typeof document < "u", gg = function() {
}, _r = pg ? uc : gg;
function Ur(e, t) {
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
        if (!Ur(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ur(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _l(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Da(e, t) {
  const n = _l(e);
  return Math.round(t * n) / n;
}
function $o(e) {
  const t = p.useRef(e);
  return _r(() => {
    t.current = e;
  }), t;
}
function vg(e) {
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
  } = e, [d, u] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = p.useState(r);
  Ur(f, r) || h(r);
  const [v, g] = p.useState(null), [b, w] = p.useState(null), C = p.useCallback((R) => {
    R !== I.current && (I.current = R, g(R));
  }, []), S = p.useCallback((R) => {
    R !== P.current && (P.current = R, w(R));
  }, []), y = i || v, N = s || b, I = p.useRef(null), P = p.useRef(null), x = p.useRef(d), k = c != null, E = $o(c), O = $o(o), _ = $o(l), B = p.useCallback(() => {
    if (!I.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    O.current && (R.platform = O.current), mg(I.current, P.current, R).then((T) => {
      const D = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      L.current && !Ur(x.current, D) && (x.current = D, Ei.flushSync(() => {
        u(D);
      }));
    });
  }, [f, t, n, O, _]);
  _r(() => {
    l === !1 && x.current.isPositioned && (x.current.isPositioned = !1, u((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const L = p.useRef(!1);
  _r(() => (L.current = !0, () => {
    L.current = !1;
  }), []), _r(() => {
    if (y && (I.current = y), N && (P.current = N), y && N) {
      if (E.current)
        return E.current(y, N, B);
      B();
    }
  }, [y, N, B, E, k]);
  const G = p.useMemo(() => ({
    reference: I,
    floating: P,
    setReference: C,
    setFloating: S
  }), [C, S]), M = p.useMemo(() => ({
    reference: y,
    floating: N
  }), [y, N]), A = p.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return R;
    const T = Da(M.floating, d.x), D = Da(M.floating, d.y);
    return a ? {
      ...R,
      transform: "translate(" + T + "px, " + D + "px)",
      ..._l(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: D
    };
  }, [n, a, M.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: B,
    refs: G,
    elements: M,
    floatingStyles: A
  }), [d, B, G, M, A]);
}
const bg = (e) => {
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
      return r && t(r) ? r.current != null ? Ea({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ea({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, yg = (e, t) => {
  const n = cg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, wg = (e, t) => {
  const n = lg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, xg = (e, t) => ({
  fn: hg(e).fn,
  options: [e, t]
}), Cg = (e, t) => {
  const n = ug(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sg = (e, t) => {
  const n = dg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Pg = (e, t) => {
  const n = fg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ig = (e, t) => {
  const n = bg(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var kg = Object.defineProperty, Ng = (e, t) => kg(e, "name", { value: t, configurable: !0 });
function mo(e) {
  const [t, n] = p.useState(void 0);
  return Ge(() => {
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
Ng(mo, "useSize");
var Rg = Object.defineProperty, Kt = (e, t) => Rg(e, "name", { value: t, configurable: !0 }), Tl = "Popper", [Fl, Ll] = /* @__PURE__ */ st(Tl), [Eg, $l] = Fl(Tl), Dg = /* @__PURE__ */ Kt((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = p.useState(null), [i, s] = p.useState(void 0);
  return /* @__PURE__ */ m(
    Eg,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), Ag = "PopperAnchor", Mg = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Kt(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...i } = t, s = $l(Ag, r), a = p.useRef(null), c = s.onAnchorChange, l = p.useCallback(
      (g) => {
        a.current = g, g && c(g);
      },
      [c]
    ), d = ge(n, l), u = p.useRef(null);
    p.useEffect(() => {
      if (!o)
        return;
      const g = u.current;
      u.current = o.current, g !== u.current && c(u.current);
    });
    const f = s.placementState && po(s.placementState), h = f?.[0], v = f?.[1];
    return o ? null : /* @__PURE__ */ m(
      ye.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": v,
        ...i,
        ref: d
      }
    );
  }, "PopperAnchor")
), Bl = "PopperContent", [Og, SC] = Fl(Bl), _g = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Kt(function(t, n) {
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
      onPlaced: g,
      ...b
    } = t, w = $l(Bl, r), [C, S] = p.useState(null), y = ge(n, S), [N, I] = p.useState(null), P = mo(N), x = P?.width ?? 0, k = P?.height ?? 0, E = o + (s !== "center" ? "-" + s : ""), O = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, _ = Array.isArray(d) ? d : [d], B = _.length > 0, L = {
      padding: O,
      boundary: _.filter(zl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: G, floatingStyles: M, placement: A, isPositioned: R, middlewareData: T } = vg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: /* @__PURE__ */ Kt((...J) => ag(...J, {
        animationFrame: v === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        yg({ mainAxis: i + k, alignmentAxis: a }),
        l && wg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? xg() : void 0,
          ...L
        }),
        l && Cg({ ...L }),
        Sg({
          ...L,
          apply: /* @__PURE__ */ Kt(({ elements: J, rects: q, availableWidth: ne, availableHeight: ae }) => {
            const { width: ve, height: fe } = q.reference, we = J.floating.style;
            we.setProperty("--radix-popper-available-width", `${ne}px`), we.setProperty("--radix-popper-available-height", `${ae}px`), we.setProperty("--radix-popper-anchor-width", `${ve}px`), we.setProperty("--radix-popper-anchor-height", `${fe}px`);
          }, "apply")
        }),
        N && Ig({ element: N, padding: c }),
        Tg({ arrowWidth: x, arrowHeight: k }),
        h && Pg({
          strategy: "referenceHidden",
          ...L,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: B ? L.boundary : void 0
        })
      ]
    }), D = w.setPlacementState;
    Ge(() => (D(A), () => {
      D(void 0);
    }), [A, D]);
    const [K, j] = po(A), H = gt(g);
    Ge(() => {
      R && H?.();
    }, [R, H]);
    const W = T.arrow?.x, V = T.arrow?.y, z = T.arrow?.centerOffset !== 0, [Z, X] = p.useState();
    return Ge(() => {
      C && X(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ m(
      "div",
      {
        ref: G.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...M,
          transform: R ? M.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            T.transformOrigin?.x,
            T.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...T.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ m(
          Og,
          {
            scope: r,
            placedSide: K,
            placedAlign: j,
            onArrowChange: I,
            arrowX: W,
            arrowY: V,
            shouldHideArrow: z,
            children: /* @__PURE__ */ m(
              ye.div,
              {
                "data-side": K,
                "data-align": j,
                ...b,
                ref: y,
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
function zl(e) {
  return e !== null;
}
Kt(zl, "isNotNull");
var Tg = /* @__PURE__ */ Kt((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = po(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let v = "", g = "";
    return l === "bottom" ? (v = s ? u : `${f}px`, g = `${-c}px`) : l === "top" ? (v = s ? u : `${f}px`, g = `${r.floating.height + c}px`) : l === "right" ? (v = `${-c}px`, g = s ? u : `${h}px`) : l === "left" && (v = `${r.floating.width + c}px`, g = s ? u : `${h}px`), { data: { x: v, y: g } };
  }
}), "transformOrigin");
function po(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Kt(po, "getSideAndAlignFromPlacement");
var Hl = Dg, Fg = Mg, Lg = _g, $g = Object.defineProperty, Bg = (e, t) => $g(e, "name", { value: t, configurable: !0 }), Kl = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Bg(function(t, n) {
    const { container: r, ...o } = t, [i, s] = p.useState(!1);
    Ge(() => s(!0), []);
    const a = r || i && globalThis?.document?.body;
    return a ? Ei.createPortal(/* @__PURE__ */ m(ye.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), zg = Object.defineProperty, Rt = (e, t) => zg(e, "name", { value: t, configurable: !0 });
function jl(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
Rt(jl, "useStateMachine");
var On = /* @__PURE__ */ Rt((e) => {
  const { present: t, children: n } = e, r = Gl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n), i = Vl(r.ref, Wl(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, { ref: i }) : null;
}, "Presence");
function Gl(e) {
  const [t, n] = p.useState(), r = p.useRef(null), o = p.useRef(e), i = p.useRef("none"), s = p.useRef(void 0), a = e ? "mounted" : "unmounted", [c, l] = jl(a, {
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
    c === "mounted" ? (i.current = s.current ?? Cn(r.current), s.current = void 0) : i.current = "none";
  }, [c]), Ge(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const h = i.current, v = Cn(d);
      e ? (s.current = v, l("MOUNT")) : v === "none" || d?.display === "none" ? l("UNMOUNT") : l(u && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ge(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ Rt((v) => {
        const b = Cn(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && b && (l("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Rt((v) => {
        v.target === t && (i.current = Cn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: p.useCallback((d) => {
      if (d) {
        const u = getComputedStyle(d);
        r.current = u, s.current = Cn(u);
      } else
        r.current = null;
      n(d);
    }, [])
  };
}
Rt(Gl, "usePresence");
function vi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Rt(vi, "setRef");
function Vl(...e) {
  const t = p.useRef(e);
  return t.current = e, p.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const i = r.map((s) => {
      const a = vi(s, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const a = i[s];
          typeof a == "function" ? a() : vi(r[s], null);
        }
      };
  }, []);
}
Rt(Vl, "useStableComposedRefs");
function Cn(e) {
  return e?.animationName || "none";
}
Rt(Cn, "getAnimationName");
function Wl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Rt(Wl, "getElementRef");
var Hg = Object.defineProperty, os = (e, t) => Hg(e, "name", { value: t, configurable: !0 }), Bo = !1;
function Ul() {
  const [e, t] = p.useState(Bo);
  return p.useEffect(() => {
    Bo || (Bo = !0, t(!0));
  }, []), e;
}
os(Ul, "useIsHydrated");
var Yl = p[" useSyncExternalStore ".trim().toString()];
function ql() {
  return () => {
  };
}
os(ql, "subscribe");
function Xl() {
  return Yl(
    ql,
    () => !0,
    () => !1
  );
}
os(Xl, "useIsHydratedModern");
var Kg = typeof Yl == "function" ? Xl : Ul, jg = Object.defineProperty, dn = (e, t) => jg(e, "name", { value: t, configurable: !0 }), zo = "rovingFocusGroup.onEntryFocus", Gg = { bubbles: !1, cancelable: !0 }, go = "RovingFocusGroup", [bi, Zl, Vg] = /* @__PURE__ */ io(go), [Wg, Jl] = /* @__PURE__ */ st(
  go,
  [Vg]
), [Ug, Yg] = Wg(go), qg = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(t, n) {
    return /* @__PURE__ */ m(bi.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(bi.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(Xg, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Xg = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ dn(function(t, n) {
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
  } = t, h = p.useRef(null), v = ge(n, h), g = so(s), [b, w] = un({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: go
  }), [C, S] = p.useState(!1), y = gt(d), N = Zl(r), I = p.useRef(!1), [P, x] = p.useState(0);
  return p.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(zo, y), () => k.removeEventListener(zo, y);
  }, [y]), /* @__PURE__ */ m(
    Ug,
    {
      scope: r,
      orientation: o,
      dir: g,
      loop: i,
      currentTabStopId: b,
      onItemFocus: p.useCallback(
        (k) => w(k),
        [w]
      ),
      onItemShiftTab: p.useCallback(() => S(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => x((k) => k + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => x((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        ye.div,
        {
          tabIndex: C || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: v,
          style: { outline: "none", ...t.style },
          onMouseDown: te(t.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: te(t.onFocus, (k) => {
            const E = !I.current;
            if (k.target === k.currentTarget && E && !C) {
              const O = new CustomEvent(zo, Gg);
              if (k.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const _ = N().filter((A) => A.focusable), B = _.find((A) => A.active), L = _.find((A) => A.id === b), M = [B, L, ..._].filter(
                  Boolean
                ).map((A) => A.ref.current);
                is(M, u);
              }
            }
            I.current = !1;
          }),
          onBlur: te(t.onBlur, () => S(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Zg = "RovingFocusGroupItem", Jg = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ dn(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: i = !1,
      tabStopId: s,
      children: a,
      ...c
    } = t, l = St(), d = s || l, u = Yg(Zg, r), f = u.currentTabStopId === d, h = Zl(r), { onFocusableItemAdd: v, onFocusableItemRemove: g, currentTabStopId: b } = u, w = Kg();
    return Ge(() => {
      if (!(!w || !o))
        return v(), () => g();
    }, [w, o, v, g]), p.useEffect(() => {
      if (!(w || !o))
        return v(), () => g();
    }, [w, o, v, g]), /* @__PURE__ */ m(
      bi.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: o,
        active: i,
        children: /* @__PURE__ */ m(
          ye.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...c,
            ref: n,
            onMouseDown: te(t.onMouseDown, (C) => {
              o ? u.onItemFocus(d) : C.preventDefault();
            }),
            onFocus: te(t.onFocus, () => u.onItemFocus(d)),
            onKeyDown: te(t.onKeyDown, (C) => {
              if (C.key === "Tab" && C.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (C.target !== C.currentTarget) return;
              const S = eu(C, u.orientation, u.dir);
              if (S !== void 0) {
                if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
                C.preventDefault();
                let N = h().filter((I) => I.focusable).map((I) => I.ref.current);
                if (S === "last") N.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && N.reverse();
                  const I = N.indexOf(C.currentTarget);
                  N = u.loop ? tu(N, I + 1) : N.slice(I + 1);
                }
                setTimeout(() => is(N));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: b != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Qg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ql(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
dn(Ql, "getDirectionAwareKey");
function eu(e, t, n) {
  const r = Ql(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Qg[r];
}
dn(eu, "getFocusIntent");
function is(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
dn(is, "focusFirst");
function tu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
dn(tu, "wrapArray");
var ev = qg, tv = Jg, nv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, yn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Rr = {}, Ho = 0, nu = function(e) {
  return e && (e.host || nu(e.parentNode));
}, rv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = nu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ov = function(e, t, n, r) {
  var o = rv(t, Array.isArray(e) ? e : [e]);
  Rr[n] || (Rr[n] = /* @__PURE__ */ new WeakMap());
  var i = Rr[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || a.has(u) || (a.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        d(f);
      else
        try {
          var h = f.getAttribute(r), v = h !== null && h !== "false", g = (yn.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          yn.set(f, g), i.set(f, b), s.push(f), g === 1 && v && Nr.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return d(t), a.clear(), Ho++, function() {
    s.forEach(function(u) {
      var f = yn.get(u) - 1, h = i.get(u) - 1;
      yn.set(u, f), i.set(u, h), f || (Nr.has(u) || u.removeAttribute(r), Nr.delete(u)), h || u.removeAttribute(n);
    }), Ho--, Ho || (yn = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Rr = {});
  };
}, ru = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = nv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ov(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, mt = function() {
  return mt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, mt.apply(this, arguments);
};
function ou(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function iv(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Tr = "right-scroll-bar-position", Fr = "width-before-scroll-bar", sv = "with-scroll-bars-hidden", av = "--removed-body-scroll-bar-size";
function Ko(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function cv(e, t) {
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
var lv = typeof window < "u" ? p.useLayoutEffect : p.useEffect, Aa = /* @__PURE__ */ new WeakMap();
function uv(e, t) {
  var n = cv(null, function(r) {
    return e.forEach(function(o) {
      return Ko(o, r);
    });
  });
  return lv(function() {
    var r = Aa.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Ko(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Ko(a, s);
      });
    }
    Aa.set(n, e);
  }, [e]), n;
}
function dv(e) {
  return e;
}
function fv(e, t) {
  t === void 0 && (t = dv);
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
function hv(e) {
  e === void 0 && (e = {});
  var t = fv(null);
  return t.options = mt({ async: !0, ssr: !1 }, e), t;
}
var iu = function(e) {
  var t = e.sideCar, n = ou(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, mt({}, n));
};
iu.isSideCarExport = !0;
function mv(e, t) {
  return e.useMedium(t), iu;
}
var su = hv(), jo = function() {
}, vo = p.forwardRef(function(e, t) {
  var n = p.useRef(null), r = p.useState({
    onScrollCapture: jo,
    onWheelCapture: jo,
    onTouchMoveCapture: jo
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, f = e.sideCar, h = e.noRelative, v = e.noIsolation, g = e.inert, b = e.allowPinchZoom, w = e.as, C = w === void 0 ? "div" : w, S = e.gapMode, y = ou(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = f, I = uv([n, t]), P = mt(mt({}, y), o);
  return p.createElement(
    p.Fragment,
    null,
    d && p.createElement(N, { sideCar: su, removeScrollBar: l, shards: u, noRelative: h, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: S }),
    s ? p.cloneElement(p.Children.only(a), mt(mt({}, P), { ref: I })) : p.createElement(C, mt({}, P, { className: c, ref: I }), a)
  );
});
vo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vo.classNames = {
  fullWidth: Fr,
  zeroRight: Tr
};
var pv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = pv();
  return t && e.setAttribute("nonce", t), e;
}
function vv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = gv()) && (vv(t, n), bv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wv = function() {
  var e = yv();
  return function(t, n) {
    p.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, au = function() {
  var e = wv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, xv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Go = function(e) {
  return parseInt(e || "", 10) || 0;
}, Cv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Go(n), Go(r), Go(o)];
}, Sv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return xv;
  var t = Cv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Pv = au(), In = "data-scroll-locked", Iv = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sv, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(In, `] {
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
  
  .`).concat(Tr, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Fr, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Tr, " .").concat(Tr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Fr, " .").concat(Fr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(In, `] {
    `).concat(av, ": ").concat(a, `px;
  }
`);
}, Ma = function() {
  var e = parseInt(document.body.getAttribute(In) || "0", 10);
  return isFinite(e) ? e : 0;
}, kv = function() {
  p.useEffect(function() {
    return document.body.setAttribute(In, (Ma() + 1).toString()), function() {
      var e = Ma() - 1;
      e <= 0 ? document.body.removeAttribute(In) : document.body.setAttribute(In, e.toString());
    };
  }, []);
}, Nv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  kv();
  var i = p.useMemo(function() {
    return Sv(o);
  }, [o]);
  return p.createElement(Pv, { styles: Iv(i, !t, o, n ? "" : "!important") });
}, yi = !1;
if (typeof window < "u")
  try {
    var Er = Object.defineProperty({}, "passive", {
      get: function() {
        return yi = !0, !0;
      }
    });
    window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
  } catch {
    yi = !1;
  }
var wn = yi ? { passive: !1 } : !1, Rv = function(e) {
  return e.tagName === "TEXTAREA";
}, cu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Rv(e) && n[t] === "visible")
  );
}, Ev = function(e) {
  return cu(e, "overflowY");
}, Dv = function(e) {
  return cu(e, "overflowX");
}, Oa = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = lu(e, r);
    if (o) {
      var i = uu(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Av = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Mv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, lu = function(e, t) {
  return e === "v" ? Ev(t) : Dv(t);
}, uu = function(e, t) {
  return e === "v" ? Av(t) : Mv(t);
}, Ov = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, _v = function(e, t, n, r, o) {
  var i = Ov(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, d = s > 0, u = 0, f = 0;
  do {
    if (!a)
      break;
    var h = uu(e, a), v = h[0], g = h[1], b = h[2], w = g - b - i * v;
    (v || w) && lu(e, a) && (u += w, f += v);
    var C = a.parentNode;
    a = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(f) < 1) && (l = !0), l;
}, Dr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _a = function(e) {
  return [e.deltaX, e.deltaY];
}, Ta = function(e) {
  return e && "current" in e ? e.current : e;
}, Tv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Fv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Lv = 0, xn = [];
function $v(e) {
  var t = p.useRef([]), n = p.useRef([0, 0]), r = p.useRef(), o = p.useState(Lv++)[0], i = p.useState(au)[0], s = p.useRef(e);
  p.useEffect(function() {
    s.current = e;
  }, [e]), p.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = iv([e.lockRef.current], (e.shards || []).map(Ta), !0).filter(Boolean);
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
      return !s.current.allowPinchZoom;
    var w = Dr(g), C = n.current, S = "deltaX" in g ? g.deltaX : C[0] - w[0], y = "deltaY" in g ? g.deltaY : C[1] - w[1], N, I = g.target, P = Math.abs(S) > Math.abs(y) ? "h" : "v";
    if ("touches" in g && P === "h" && I.type === "range")
      return !1;
    var x = window.getSelection(), k = x && x.anchorNode, E = k ? k === I || k.contains(I) : !1;
    if (E)
      return !1;
    var O = Oa(P, I);
    if (!O)
      return !0;
    if (O ? N = P : (N = P === "v" ? "h" : "v", O = Oa(P, I)), !O)
      return !1;
    if (!r.current && "changedTouches" in g && (S || y) && (r.current = N), !N)
      return !0;
    var _ = r.current || N;
    return _v(_, b, g, _ === "h" ? S : y);
  }, []), c = p.useCallback(function(g) {
    var b = g;
    if (!(!xn.length || xn[xn.length - 1] !== i)) {
      var w = "deltaY" in b ? _a(b) : Dr(b), C = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && Tv(N.delta, w);
      })[0];
      if (C && C.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!C) {
        var S = (s.current.shards || []).map(Ta).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), y = S.length > 0 ? a(b, S[0]) : !s.current.noIsolation;
        y && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = p.useCallback(function(g, b, w, C) {
    var S = { name: g, delta: b, target: w, should: C, shadowParent: Bv(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== S;
      });
    }, 1);
  }, []), d = p.useCallback(function(g) {
    n.current = Dr(g), r.current = void 0;
  }, []), u = p.useCallback(function(g) {
    l(g.type, _a(g), g.target, a(g, e.lockRef.current));
  }, []), f = p.useCallback(function(g) {
    l(g.type, Dr(g), g.target, a(g, e.lockRef.current));
  }, []);
  p.useEffect(function() {
    return xn.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, wn), document.addEventListener("touchmove", c, wn), document.addEventListener("touchstart", d, wn), function() {
      xn = xn.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", c, wn), document.removeEventListener("touchmove", c, wn), document.removeEventListener("touchstart", d, wn);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    v ? p.createElement(i, { styles: Fv(o) }) : null,
    h ? p.createElement(Nv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Bv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zv = mv(su, $v);
var ss = p.forwardRef(function(e, t) {
  return p.createElement(vo, mt({}, e, { ref: t, sideCar: zv }));
});
ss.classNames = vo.classNames;
var Hv = Object.defineProperty, pe = (e, t) => Hv(e, "name", { value: t, configurable: !0 }), wi = ["Enter", " "], Kv = ["ArrowDown", "PageUp", "Home"], du = ["ArrowUp", "PageDown", "End"], jv = [...Kv, ...du], Gv = {
  ltr: [...wi, "ArrowRight"],
  rtl: [...wi, "ArrowLeft"]
}, Vv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, bo = "Menu", [Zn, Wv, Uv] = /* @__PURE__ */ io(bo), [fn, fu] = /* @__PURE__ */ st(bo, [
  Uv,
  Ll,
  Jl
]), yo = Ll(), hu = Jl(), [mu, Jt] = fn(bo), [Yv, rr] = fn(bo), qv = /* @__PURE__ */ pe((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = yo(t), [c, l] = p.useState(null), d = p.useRef(!1), u = gt(i), f = so(o);
  return p.useEffect(() => {
    const h = /* @__PURE__ */ pe(() => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, "handleKeyDown"), v = /* @__PURE__ */ pe(() => d.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), p.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ pe(() => u(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, u]), /* @__PURE__ */ m(Hl, { ...a, children: /* @__PURE__ */ m(
    mu,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ m(
        Yv,
        {
          scope: t,
          onClose: p.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: r
        }
      )
    }
  ) });
}, "Menu"), pu = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeMenu: r, ...o } = t, i = yo(r);
    return /* @__PURE__ */ m(Fg, { ...i, ...o, ref: n });
  }, "MenuAnchor")
), gu = "MenuPortal", [Xv, vu] = fn(gu, {
  forceMount: void 0
}), Zv = /* @__PURE__ */ pe((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Jt(gu, t);
  return /* @__PURE__ */ m(Xv, { scope: t, forceMount: n, children: /* @__PURE__ */ m(On, { present: n || i.open, children: /* @__PURE__ */ m(Kl, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), rt = "MenuContent", [Jv, as] = fn(rt), Qv = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const r = vu(rt, t.__scopeMenu), { forceMount: o = r.forceMount, ...i } = t, s = Jt(rt, t.__scopeMenu), a = rr(rt, t.__scopeMenu);
    return /* @__PURE__ */ m(Zn.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(On, { present: o || s.open, children: /* @__PURE__ */ m(Zn.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ m(eb, { ...i, ref: n }) : /* @__PURE__ */ m(tb, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), eb = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const r = Jt(rt, t.__scopeMenu), o = p.useRef(null), i = ge(n, o);
    return p.useEffect(() => {
      const s = o.current;
      if (s) return ru(s);
    }, []), /* @__PURE__ */ m(
      cs,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: te(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), tb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ pe(function(t, n) {
  const r = Jt(rt, t.__scopeMenu);
  return /* @__PURE__ */ m(
    cs,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), nb = /* @__PURE__ */ jt("MenuContent.ScrollLock"), cs = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
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
      disableOutsideScroll: g,
      ...b
    } = t, w = Jt(rt, r), C = rr(rt, r), S = yo(r), y = hu(r), N = Wv(r), [I, P] = p.useState(null), x = p.useRef(null), k = ge(n, x, w.onContentChange), E = p.useRef(0), O = p.useRef(""), _ = p.useRef(0), B = p.useRef(null), L = p.useRef("right"), G = p.useRef(0), M = g ? ss : p.Fragment, A = g ? { as: nb, allowPinchZoom: !0 } : void 0, R = /* @__PURE__ */ pe((D) => {
      const K = O.current + D, j = N().filter((X) => !X.disabled), H = document.activeElement, W = j.find((X) => X.ref.current === H)?.textValue, V = j.map((X) => X.textValue), z = Pu(V, K, W), Z = j.find((X) => X.textValue === z)?.ref.current;
      (/* @__PURE__ */ pe((function X(J) {
        O.current = J, window.clearTimeout(E.current), J !== "" && (E.current = window.setTimeout(() => X(""), 1e3));
      }), "updateSearch"))(K), Z && setTimeout(() => Z.focus());
    }, "handleTypeaheadSearch");
    p.useEffect(() => () => window.clearTimeout(E.current), []), ao();
    const T = p.useCallback((D) => L.current === B.current?.side && ku(D, B.current?.area), []);
    return /* @__PURE__ */ m(
      Jv,
      {
        scope: r,
        searchRef: O,
        onItemEnter: p.useCallback(
          (D) => {
            T(D) && D.preventDefault();
          },
          [T]
        ),
        onItemLeave: p.useCallback(
          (D) => {
            T(D) || (x.current?.focus(), P(null));
          },
          [T]
        ),
        onTriggerLeave: p.useCallback(
          (D) => {
            T(D) && D.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: p.useCallback((D) => {
          B.current = D;
        }, []),
        children: /* @__PURE__ */ m(M, { ...A, children: /* @__PURE__ */ m(
          vl,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: te(s, (D) => {
              D.preventDefault(), x.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ m(
              hl,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ m(
                  ev,
                  {
                    asChild: !0,
                    ...y,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: I,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: te(l, (D) => {
                      C.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Lg,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": us(w.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...S,
                        ...b,
                        ref: k,
                        style: { outline: "none", ...b.style },
                        onKeyDown: te(b.onKeyDown, (D) => {
                          const j = D.target.closest("[data-radix-menu-content]") === D.currentTarget, H = D.ctrlKey || D.altKey || D.metaKey, W = D.key.length === 1;
                          j && (D.key === "Tab" && D.preventDefault(), !H && W && R(D.key));
                          const V = x.current;
                          if (D.target !== V || !jv.includes(D.key)) return;
                          D.preventDefault();
                          const Z = N().filter((X) => !X.disabled).map((X) => X.ref.current);
                          du.includes(D.key) && Z.reverse(), Cu(Z);
                        }),
                        onBlur: te(t.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(E.current), O.current = "");
                        }),
                        onPointerMove: te(
                          t.onPointerMove,
                          Rn((D) => {
                            const K = D.target, j = G.current !== D.clientX;
                            if (D.currentTarget.contains(K) && j) {
                              const H = D.clientX > G.current ? "right" : "left";
                              L.current = H, G.current = D.clientX;
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
), rb = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ m(ye.div, { ...o, ref: n });
  }, "MenuLabel")
), xi = "MenuItem", Fa = "menu.itemSelect", ls = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...i } = t, s = p.useRef(null), a = rr(xi, t.__scopeMenu), c = as(xi, t.__scopeMenu), l = ge(n, s), d = p.useRef(!1), u = /* @__PURE__ */ pe(() => {
      const f = s.current;
      if (!r && f) {
        const h = new CustomEvent(Fa, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Fa, (v) => o?.(v), { once: !0 }), Ui(f, h), h.defaultPrevented ? d.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ m(
      bu,
      {
        ...i,
        ref: l,
        disabled: r,
        onClick: te(t.onClick, u),
        onPointerDown: (f) => {
          t.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: te(t.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: te(t.onKeyDown, (f) => {
          r || f.target !== f.currentTarget || c.searchRef.current !== "" && f.key === " " || wi.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), bu = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: i, ...s } = t, a = as(xi, r), c = hu(r), l = p.useRef(null), d = ge(n, l), [u, f] = p.useState(!1), [h, v] = p.useState("");
    return p.useEffect(() => {
      const g = l.current;
      g && v((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ m(
      Zn.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: i ?? h,
        children: /* @__PURE__ */ m(tv, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ m(
          ye.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: te(
              t.onPointerMove,
              Rn((g) => {
                o ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: te(
              t.onPointerLeave,
              Rn((g) => a.onItemLeave(g))
            ),
            onFocus: te(t.onFocus, () => f(!0)),
            onBlur: te(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), ob = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { checked: r = !1, onCheckedChange: o, ...i } = t;
    return /* @__PURE__ */ m(yu, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ m(
      ls,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yr(r) ? "mixed" : r,
        ...i,
        ref: n,
        "data-state": ds(r),
        onSelect: te(
          i.onSelect,
          () => o?.(Yr(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), ib = "MenuRadioGroup", [PC, sb] = fn(
  ib,
  { value: void 0, onValueChange: /* @__PURE__ */ pe(() => {
  }, "onValueChange") }
), ab = "MenuRadioItem", cb = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { value: r, ...o } = t, i = sb(ab, t.__scopeMenu), s = r === i.value;
    return /* @__PURE__ */ m(yu, { scope: t.__scopeMenu, checked: s, children: /* @__PURE__ */ m(
      ls,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: n,
        "data-state": ds(s),
        onSelect: te(
          o.onSelect,
          () => i.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), lb = "MenuItemIndicator", [yu, IC] = fn(
  lb,
  { checked: !1 }
), ub = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ m(
      ye.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), wu = "MenuSub", [db, xu] = fn(wu), fb = /* @__PURE__ */ pe((e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, i = Jt(wu, t), s = yo(t), [a, c] = p.useState(null), [l, d] = p.useState(null), u = gt(o);
  return p.useEffect(() => (i.open === !1 && u(!1), () => u(!1)), [i.open, u]), /* @__PURE__ */ m(Hl, { ...s, children: /* @__PURE__ */ m(
    mu,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ m(
        db,
        {
          scope: t,
          contentId: St(),
          triggerId: St(),
          trigger: a,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
}, "MenuSub"), Ar = "MenuSubTrigger", hb = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const r = Jt(Ar, t.__scopeMenu), o = rr(Ar, t.__scopeMenu), i = xu(Ar, t.__scopeMenu), s = as(Ar, t.__scopeMenu), a = p.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = s, d = { __scopeMenu: t.__scopeMenu }, u = p.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    p.useEffect(() => u, [u]), p.useEffect(() => {
      const h = c.current;
      return () => {
        window.clearTimeout(h), l(null);
      };
    }, [c, l]);
    const f = ge(n, i.onTriggerChange);
    return /* @__PURE__ */ m(pu, { asChild: !0, ...d, children: /* @__PURE__ */ m(
      bu,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": r.open ? i.contentId : void 0,
        "data-state": us(r.open),
        ...t,
        ref: f,
        onClick: (h) => {
          t.onClick?.(h), !(t.disabled || h.defaultPrevented) && (h.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: te(
          t.onPointerMove,
          Rn((h) => {
            s.onItemEnter(h), !h.defaultPrevented && !t.disabled && !r.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: te(
          t.onPointerLeave,
          Rn((h) => {
            u();
            const v = r.content?.getBoundingClientRect();
            if (v) {
              const g = r.content?.dataset.side, b = g === "right", w = b ? -5 : 5, C = v[b ? "left" : "right"], S = v[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + w, y: h.clientY },
                  { x: C, y: v.top },
                  { x: S, y: v.top },
                  { x: S, y: v.bottom },
                  { x: C, y: v.bottom }
                ],
                side: g
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
        onKeyDown: te(t.onKeyDown, (h) => {
          t.disabled || h.target !== h.currentTarget || s.searchRef.current !== "" && h.key === " " || Gv[o.dir].includes(h.key) && (r.onOpenChange(!0), r.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), mb = "MenuSubContent", pb = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const r = vu(rt, t.__scopeMenu), { forceMount: o = r.forceMount, align: i = "start", ...s } = t, a = Jt(rt, t.__scopeMenu), c = rr(rt, t.__scopeMenu), l = xu(mb, t.__scopeMenu), d = p.useRef(null), u = ge(n, d);
    return /* @__PURE__ */ m(Zn.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(On, { present: o || a.open, children: /* @__PURE__ */ m(Zn.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(
      cs,
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
        onFocusOutside: te(t.onFocusOutside, (f) => {
          f.target !== l.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: te(t.onEscapeKeyDown, (f) => {
          c.onClose(), f.preventDefault();
        }),
        onKeyDown: te(t.onKeyDown, (f) => {
          const h = f.currentTarget.contains(f.target), v = Vv[c.dir].includes(f.key);
          h && v && (a.onOpenChange(!1), l.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function us(e) {
  return e ? "open" : "closed";
}
pe(us, "getOpenState");
function Yr(e) {
  return e === "indeterminate";
}
pe(Yr, "isIndeterminate");
function ds(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
pe(ds, "getCheckedState");
function Cu(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
pe(Cu, "focusFirst");
function Su(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
pe(Su, "wrapArray");
function Pu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Su(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
pe(Pu, "getNextMatch");
function Iu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], c = t[s], l = a.x, d = a.y, u = c.x, f = c.y;
    d > r != f > r && n < (u - l) * (r - d) / (f - d) + l && (o = !o);
  }
  return o;
}
pe(Iu, "isPointInPolygon");
function ku(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Iu(n, t);
}
pe(ku, "isPointerInGraceArea");
function Rn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
pe(Rn, "whenMouse");
var gb = qv, vb = pu, bb = Zv, yb = Qv, wb = rb, xb = ls, Cb = ob, Sb = cb, Pb = ub, Ib = fb, kb = hb, Nb = pb, Rb = Object.defineProperty, Je = (e, t) => Rb(e, "name", { value: t, configurable: !0 }), fs = "DropdownMenu", [Eb, kC] = /* @__PURE__ */ st(
  fs,
  [fu]
), Qe = fu(), [Db, Nu] = Eb(fs), Ab = /* @__PURE__ */ Je((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, c = Qe(t), l = p.useRef(null), [d, u] = un({
    prop: o,
    defaultProp: i ?? !1,
    onChange: s,
    caller: fs
  });
  return /* @__PURE__ */ m(
    Db,
    {
      scope: t,
      triggerId: St(),
      triggerRef: l,
      contentId: St(),
      open: d,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u((f) => !f), [u]),
      modal: a,
      children: /* @__PURE__ */ m(gb, { ...c, open: d, onOpenChange: u, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), Mb = "DropdownMenuTrigger", Ob = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Je(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...i } = t, s = Nu(Mb, r), a = Qe(r), c = ge(n, s.triggerRef);
    return /* @__PURE__ */ m(vb, { asChild: !0, ...a, children: /* @__PURE__ */ m(
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
        onPointerDown: te(t.onPointerDown, (l) => {
          !o && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: te(t.onKeyDown, (l) => {
          o || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), _b = /* @__PURE__ */ Je((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Qe(t);
  return /* @__PURE__ */ m(bb, { ...r, ...n });
}, "DropdownMenuPortal"), Tb = "DropdownMenuContent", Fb = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Je(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = Nu(Tb, r), s = Qe(r), a = p.useRef(!1);
    return /* @__PURE__ */ m(
      yb,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...s,
        ...o,
        ref: n,
        onCloseAutoFocus: te(t.onCloseAutoFocus, (c) => {
          a.current || i.triggerRef.current?.focus(), a.current = !1, c.preventDefault();
        }),
        onInteractOutside: te(t.onInteractOutside, (c) => {
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
), Lb = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Je(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
    return /* @__PURE__ */ m(wb, { ...i, ...o, ref: n });
  }, "DropdownMenuLabel")
), $b = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Je(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
    return /* @__PURE__ */ m(xb, { ...i, ...o, ref: n });
  }, "DropdownMenuItem")
), Bb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ Je(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
  return /* @__PURE__ */ m(Cb, { ...i, ...o, ref: n });
}, "DropdownMenuCheckboxItem")), zb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ Je(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
  return /* @__PURE__ */ m(Sb, { ...i, ...o, ref: n });
}, "DropdownMenuRadioItem")), Hb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ Je(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
  return /* @__PURE__ */ m(Pb, { ...i, ...o, ref: n });
}, "DropdownMenuSeparator")), Kb = /* @__PURE__ */ Je((e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: i } = e, s = Qe(t), [a, c] = un({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ m(Ib, { ...s, open: a, onOpenChange: c, children: n });
}, "DropdownMenuSub"), jb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ Je(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
  return /* @__PURE__ */ m(kb, { ...i, ...o, ref: n });
}, "DropdownMenuSubTrigger")), Gb = /* @__PURE__ */ p.forwardRef(/* @__PURE__ */ Je(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = Qe(r);
  return /* @__PURE__ */ m(
    Nb,
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
}, "DropdownMenuSubContent")), Vb = Ab, Wb = Ob, Ub = _b, Ru = Fb, Eu = Lb, Du = $b, Au = Bb, Mu = zb, Ou = Hb, Yb = Kb, _u = jb, Tu = Gb;
const or = Vb, ir = Wb, La = Yb, Fu = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ m(
  _u,
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
Fu.displayName = _u.displayName;
const Ci = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Tu,
  {
    ref: n,
    className: ue(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Ci.displayName = Tu.displayName;
const _n = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = ji();
  return /* @__PURE__ */ m(Ub, { container: o || void 0, children: /* @__PURE__ */ m(
    Ru,
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
_n.displayName = Ru.displayName;
const je = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  Du,
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
je.displayName = Du.displayName;
const qb = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ m(
  Au,
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
qb.displayName = Au.displayName;
const Xb = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m(
  Mu,
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
Xb.displayName = Mu.displayName;
const Lu = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ m(
  Eu,
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
Lu.displayName = Eu.displayName;
const sn = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ou,
  {
    ref: n,
    className: ue("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
sn.displayName = Ou.displayName;
const Zb = (e, t) => {
  if (!(typeof window < "u" && window.$uhuu_renderer)) {
    if (e.stopPropagation(), t.onSelect) {
      t.onSelect(e);
      return;
    }
    t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
  }
}, hs = (e, t) => {
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
    return /* @__PURE__ */ m(
      "div",
      {
        className: ue("pointer-events-none absolute inset-0 z-10", t),
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: o }
      }
    );
  }
  return /* @__PURE__ */ m(
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
}, ms = (e, t, n) => {
  if (!t) return null;
  const r = /* @__PURE__ */ m("div", { className: "pointer-events-auto absolute right-2 top-2 z-20", children: /* @__PURE__ */ $(or, { modal: !1, children: [
    /* @__PURE__ */ m(ir, { asChild: !0, children: /* @__PURE__ */ m(
      _e,
      {
        variant: "secondary",
        size: "icon",
        title: "Image options",
        className: "h-7 w-7 shadow-sm",
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => o.stopPropagation(),
        children: /* @__PURE__ */ m(jc, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ m(_n, { className: "w-40 p-1.5", align: "end", children: e.map((o) => /* @__PURE__ */ $(
      je,
      {
        onSelect: (i) => Zb(i, o),
        disabled: o.disabled,
        children: [
          o.icon && /* @__PURE__ */ m("span", { className: "mr-2 inline-flex", children: o.icon }),
          /* @__PURE__ */ m("span", { children: o.label })
        ]
      },
      o.id
    )) })
  ] }) });
  return n ? /* @__PURE__ */ m("div", { className: "pointer-events-none absolute z-20", style: n, children: r }) : r;
}, ps = (e = []) => {
  const t = Vi();
  return e.length > 0 && !t;
}, Jb = ({
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
  const l = Pe(qt), d = ps(o), u = zc(
    {
      ...a,
      pageWidth: a?.pageWidth ?? l?.page?.width ?? 210,
      bleed: a?.bleed ?? l?.page?.bleed ?? 0
    },
    "bleed"
  ), f = i ? En({ dialog: i }, l) : {};
  return p.useMemo(() => {
    if (!s) return f;
    const h = { ...f, ...s };
    return (f.className || s.className) && (h.className = `${f.className || ""} ${s.className || ""}`.trim()), Object.keys(f).forEach((v) => {
      const g = f[v], b = s[v];
      v.startsWith("on") && typeof g == "function" && typeof b == "function" && (h[v] = (w) => {
        g(w), b(w);
      });
    }), h;
  }, [f, s]), /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ $(Hi, { ...a, dialog: i, children: [
      hs(n, r),
      c
    ] }),
    ms(o, d, u)
  ] });
};
function gs(e) {
  const t = Pe(qt), n = Bi({
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
    bottom: g = 0
  } = e, b = (L) => `${L}mm`, w = () => zi({ width: d, left: f, right: h }, o, r, 2), C = () => {
    let L = u;
    return u ? !v && !g && (L += r) : (L = i, v || (L += r), g || (L += r), (v || g) && (L -= (v ?? 0) + (g ?? 0))), L;
  }, S = w(), y = C(), N = (L) => L !== void 0 ? b(L) : void 0, I = (L) => Object.fromEntries(
    Object.entries(L).filter(([G, M]) => M !== void 0)
  ), P = f > 0 ? f + r : 0, x = v > 0 ? v + r : 0, k = g > 0 ? g + r : 0, E = -1 * o + P, O = v > 0 && g > 0, _ = I({
    backgroundColor: l,
    width: N(S),
    ...O ? { height: N(y) } : {},
    left: N(P),
    top: N(x),
    bottom: N(k)
  }), B = I({
    width: N(S),
    ...O ? { height: N(y) } : {},
    left: N(E),
    top: N(x),
    bottom: N(k)
  });
  return /* @__PURE__ */ m("div", { className: "uhuu-image-container", style: c == "end" ? B : _, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ $("div", { className: "uhuu-image-inner", ...En(e, t), children: [
    /* @__PURE__ */ m(
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
const Qb = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const s = Pe(qt), a = ps(n), c = zc(
    {
      ...o,
      pageWidth: o?.pageWidth ?? s?.page?.width ?? 210,
      bleed: o?.bleed ?? s?.page?.bleed ?? 0
    },
    "spread"
  );
  return /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ $(gs, { ...o, dialog: r, children: [
      hs(e, t),
      i
    ] }),
    ms(n, a, c)
  ] });
}, ey = ({
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
  onError: g
}) => {
  const b = Pe(qt), w = l ? En({ dialog: l }, b) : {}, C = ps(c), S = Bi({
    onError: (E) => {
      g?.(E), h?.onError?.(E);
    }
  }), y = p.useMemo(() => {
    if (!d) return w;
    const E = { ...w, ...d };
    return (w.className || d.className) && (E.className = ue(w.className, d.className)), Object.keys(w).forEach((O) => {
      const _ = w[O], B = d[O];
      O.startsWith("on") && typeof _ == "function" && typeof B == "function" && (E[O] = (L) => {
        _(L), B(L);
      });
    }), E;
  }, [w, d]), N = () => {
    const E = h?.className, O = h?.style, _ = h?.src ?? e, B = h?.alt ?? t, L = {
      ...h,
      src: _,
      alt: B,
      className: ue("h-full w-full object-cover", r, E),
      style: { ...i, ...O }
    };
    return v ? v(L) : _ ? /* @__PURE__ */ m("img", { ...L, onError: S }) : u ?? null;
  }, I = y["data-uhuu"], P = p.Children.toArray(f).some((E) => p.isValidElement(E) ? E.type === gs || E.type === Hi : !1);
  P && delete y["data-uhuu"];
  const x = p.Children.map(f, (E) => p.isValidElement(E) ? p.cloneElement(E, { dataUhuu: I }) : E);
  return /* @__PURE__ */ $("div", { className: ue(P ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ $("div", { className: "relative h-full w-full", ...y, children: [
      N(),
      x,
      hs(s, a)
    ] }),
    ms(c, C)
  ] });
}, NC = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = ee(() => {
    const { annotation: M, dialog: A, overlaySvg: R, options: T, src: D } = e;
    if (!M && !A)
      return {
        computedOverlaySvg: R,
        computedOptions: T,
        computedDirectDialog: void 0
      };
    const K = M?.value || {}, j = R ?? K.annotationSvg ?? "", H = [];
    if (M) {
      if (A) {
        const ae = {
          ...A
          // Spread everything (path, type, ratio, etc.)
        };
        if (A.type === "satellite") {
          const { path: ve, type: fe, ...we } = A;
          ae.config = {
            ...we,
            path: "image"
          }, ae.path = ve, ae.type = fe;
        }
        H.push({
          id: "edit",
          label: "Edit image",
          dialog: ae
        });
      }
      const z = Array.isArray(K.annotations) ? K.annotations : [], { path: Z, value: X, annotations: J, ...q } = M, ne = {
        path: M.path,
        type: "annotation",
        image: D,
        annotations: z,
        ...q
        // Spread extra config (visualGallery, etc.)
      };
      H.push({
        id: "annotate",
        label: "Annotate",
        dialog: ne
      });
    }
    const W = T ? [...H, ...T] : H;
    let V;
    if (A) {
      const z = {
        ...A
        // Spread everything (path, type, ratio, etc.)
      };
      if (A.type === "satellite") {
        const { path: Z, type: X, ...J } = A;
        z.config = {
          ...J,
          path: "image"
        }, z.path = Z, z.type = X;
      }
      V = z;
    }
    return {
      computedOverlaySvg: j,
      computedOptions: W.length > 0 ? W : void 0,
      computedDirectDialog: V
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
    width: g,
    height: b,
    left: w,
    right: C,
    top: S,
    bottom: y,
    pageWidth: N,
    pageHeight: I,
    bleed: P,
    overlayClassName: x,
    dialogProps: k,
    placeholder: E,
    children: O,
    imageProps: _,
    renderImage: B,
    onError: L
  } = e, G = {
    src: c,
    backgroundColor: v,
    width: g,
    height: b,
    left: w,
    right: C,
    top: S,
    bottom: y,
    pageWidth: N,
    pageHeight: I,
    bleed: P,
    imageClassName: u,
    onError: L
  };
  if (o === "auto")
    return /* @__PURE__ */ m(
      ey,
      {
        src: c,
        alt: l,
        className: d,
        style: f,
        imageClassName: u,
        imageStyle: h,
        overlaySvg: t,
        overlayClassName: x,
        options: n,
        dialog: r,
        dialogProps: k,
        placeholder: E,
        children: O,
        imageProps: _,
        renderImage: B,
        onError: L
      }
    );
  if (o === "spread") {
    const M = { ...G, side: a, imageClassName: u };
    return i && (t || n?.length || r) ? /* @__PURE__ */ m(
      Qb,
      {
        className: d,
        style: f,
        overlaySvg: t,
        overlayClassName: x,
        options: n,
        dialog: r,
        dialogProps: k,
        spreadProps: M,
        children: O
      }
    ) : /* @__PURE__ */ m(gs, { ...M });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ m(
    Jb,
    {
      className: d,
      style: f,
      overlaySvg: t,
      overlayClassName: x,
      options: n,
      dialog: r,
      dialogProps: k,
      bleedProps: G,
      children: O
    }
  ) : /* @__PURE__ */ m(Hi, { ...G });
}, hn = "uhuu_page_editor";
function ze(e) {
  return e.kind === "group";
}
function ty(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (ze(r))
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
function ny(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (ze(r)) {
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
function kt(e) {
  return ty(e).length;
}
function ry(e) {
  return e.map((t) => {
    const n = t.strictPosition;
    if (ze(t)) {
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
function oy(e, t) {
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
function vs(e) {
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
function $u(e, t = hn) {
  const n = vs(e);
  return {
    key: t,
    items: n,
    totalPages: kt(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function iy(e, t = hn) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = vs(n.items);
  return {
    key: t,
    items: r,
    totalPages: kt(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function sy(e, t, n = hn) {
  const r = $u(t, n);
  return { ...e ?? {}, [n]: r };
}
function Bu() {
  return Math.random().toString(36).slice(2, 11);
}
function zu(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? Bu() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function Hu(e, t, n) {
  const r = n?.repeatable ? Bu() : e;
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
function $a(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function Si(e, t, n) {
  for (const r of t) {
    const o = $a(r.start, n), i = $a(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function Ku(e, t, n = 2) {
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
function ay(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = kt(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : Ku(r, n, o);
  if (i.length === 0)
    return [];
  const s = [];
  for (const a of e)
    if (ze(a)) {
      const c = a.pages.filter((l) => l.pageNum && Si(l.pageNum, i, n));
      c.length > 0 && s.push({
        ...a,
        pages: c
      });
    } else
      a.pageNum && Si(a.pageNum, i, n) && s.push(a);
  return s;
}
function cy(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : Ku(r, t, o);
  return i.length === 0 ? !1 : Si(e, i, t);
}
function ju(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function ly(e, t) {
  return t && ze(t) ? t.id : e?.id ?? null;
}
function Gu(e, t, n) {
  const r = ly(t, n);
  return r ? {
    instanceId: r,
    integration: ju(e, r)
  } : { instanceId: null, integration: void 0 };
}
function Vu(e, t, n) {
  return Gu(e, t, n).integration;
}
function Ba(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function uy(e) {
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
function dy(e, t, n) {
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
function fy(e, t, n) {
  const r = uy(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, s = ju(e, o) || {}, a = dy(
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
function qr(e, t) {
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
const sr = p.createContext(null);
function hy(e = hn) {
  return [e];
}
function my(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function Wu({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = hn
}) {
  const [o, i] = p.useState(e ?? {}), s = p.useRef(null), a = p.useRef(!1), c = p.useRef(null), l = p.useRef(0), d = p.useRef(!0), u = p.useCallback((x) => {
    try {
      return JSON.stringify(x);
    } catch {
      return String(x);
    }
  }, []), f = p.useMemo(() => hy(r), [r]), h = p.useCallback((x, k) => {
    if (!x) return null;
    const E = { ...x };
    return k.forEach((O) => {
      delete E[O];
    }), E;
  }, []);
  p.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (s.current = e, i(e));
      return;
    }
    if (a.current) {
      a.current = !1;
      const E = c.current !== null ? u(h(c.current, f)) : null, O = u(h(e, f));
      if (E !== null && E === O) {
        s.current = e;
        return;
      }
    }
    if (e === s.current)
      return;
    if (Date.now() - l.current < 500 && c.current !== null) {
      const E = h(e, f), O = h(c.current, f), _ = E ? u(E) : null, B = O ? u(O) : null;
      if (_ && _ === B) {
        c.current = null, s.current = e;
        return;
      }
    }
    s.current = e, i((E) => e ? my(E, e, f) : E);
  }, [e, f, u, h]);
  const v = p.useCallback(
    (x) => {
      if (t?.(x), typeof window > "u") return;
      const k = window.$uhuu;
      k?.emitPayload && k.emitPayload(x);
    },
    [t]
  ), g = p.useCallback(
    (x) => {
      a.current = !0, i((k) => {
        const E = typeof x == "function" ? x(k) : x;
        let O = E;
        return E && typeof E == "object" && Object.keys(E).filter(
          (B) => B.startsWith("integrations.") || B === "integrations"
        ).length > 0 && E.integrations && (O = E), c.current = O, l.current = Date.now(), queueMicrotask(() => v(O)), O;
      });
    },
    [v]
  ), b = p.useCallback(
    (x, k, E) => {
      g((O) => ({
        ...O ?? {},
        pages: {
          ...O?.pages ?? {},
          [x]: {
            ...O?.pages?.[x] ?? {},
            [k]: E
          }
        }
      }));
    },
    [g]
  ), w = p.useCallback(
    (x, k) => {
      g((E) => {
        const O = E?.integrations ?? {}, _ = O[x], B = typeof k == "function" ? k(_) : k;
        return {
          ...E ?? {},
          integrations: {
            ...O,
            [x]: B
          }
        };
      });
    },
    [g]
  ), C = p.useCallback(
    (x, k, E) => {
      w(x, (O) => ({
        ...O ?? {},
        [k]: E
      }));
    },
    [w]
  ), S = p.useCallback(
    (x) => {
      g((k) => {
        if (!k?.integrations || !k.integrations[x])
          return k;
        const { [x]: E, ...O } = k.integrations;
        return {
          ...k,
          integrations: Object.keys(O).length > 0 ? O : void 0
        };
      });
    },
    [g]
  ), y = p.useCallback(
    (x, k) => {
      g((E) => fy(E, x, k));
    },
    [g]
  ), N = p.useCallback(
    (x, k) => {
      const E = k ?? r;
      g((O) => sy(O, x, E));
    },
    [g, r]
  ), I = p.useCallback(
    (x) => qr(o, x),
    [o]
  ), P = p.useMemo(
    () => ({
      payload: o,
      setPayload: g,
      setPageOptionValue: b,
      setIntegrationPayload: w,
      setIntegrationPayloadValue: C,
      removeIntegrationPayload: S,
      updateIntegrationByDialogPath: y,
      mergePageEditorState: N,
      getPagePayload: I
    }),
    [
      o,
      g,
      b,
      w,
      C,
      S,
      y,
      N,
      I
    ]
  );
  return /* @__PURE__ */ m(sr.Provider, { value: P, children: n });
}
function py(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function gy(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function vy(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const s = t?.pages?.[i.id]?.[r];
      return s === void 0 ? py(e) : e.type === "toggle" ? !!s : s;
    },
    onChange: (i, s) => {
      n(i, r, gy(e, s));
    }
  };
}
function by(e) {
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
function yy(e) {
  const t = e.filter(({ width: n, height: r }) => n > 0 && r > 0);
  return t.length ? {
    width: t.reduce((n, r) => n + r.width, 0),
    height: Math.max(...t.map((n) => n.height))
  } : null;
}
function wy(e, t) {
  if (e === "two_pages")
    return yy(t);
  const n = t.find(({ width: r, height: o }) => r > 0 && o > 0);
  return n ? { width: n.width, height: n.height } : null;
}
function xy({ paneClientHeight: e, paneTop: t, viewportHeight: n }) {
  const r = n - Math.max(t, 0), o = [e, r].filter((i) => i > 0);
  return o.length ? Math.min(...o) : 0;
}
function Cy({
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
function Sy({
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
function Py(e, t, n) {
  return t >= e.left && t <= e.left + e.width && n >= e.top && n <= e.top + e.height ? { clientX: t, clientY: n } : {
    clientX: e.left + e.width / 2,
    clientY: e.top + e.height / 2
  };
}
function Iy(e, t, n, r) {
  if (e.width <= 0 || e.height <= 0) return { deltaLeft: 0, deltaTop: 0 };
  const o = n - e.left, i = r - e.top, s = t.left + o * (t.width / e.width), a = t.top + i * (t.height / e.height);
  return {
    deltaLeft: s - n,
    deltaTop: a - r
  };
}
function Vo(e) {
  return { left: e.left, top: e.top, width: e.width, height: e.height };
}
function ky(e, t, n) {
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
function za(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
const Ny = 24, Ry = 64, Ey = {
  // Auto margins centre the stack while it fits and collapse to 0 once it overflows, which is
  // what keeps both edges reachable. Padding sits on the content box so `scrollWidth` counts
  // the right-hand gutter.
  width: "max-content",
  margin: "auto",
  padding: `0 ${Ny}px ${Ry}px`,
  overflowAnchor: "none"
};
function Dy(e) {
  let t = e, n = null, r = null;
  for (; t && t !== document.documentElement; ) {
    const i = window.getComputedStyle(t);
    if (!n && za(i.overflowX) && (n = t), !r && za(i.overflowY) && (r = t), n && r) return { x: n, y: r };
    t = t.parentElement;
  }
  const o = document.scrollingElement;
  return { x: n ?? o, y: r ?? o };
}
function Ay(e) {
  const t = Math.max(e.getBoundingClientRect().top, 0);
  let n = 0, r = e.parentElement;
  for (; r && r !== document.documentElement; ) {
    const o = window.getComputedStyle(r);
    o.display !== "contents" && (n += (Number.parseFloat(o.paddingBottom) || 0) + (Number.parseFloat(o.borderBottomWidth) || 0) + Math.max(Number.parseFloat(o.marginBottom) || 0, 0)), r = r.parentElement;
  }
  return t + n;
}
function My(e) {
  const t = e.querySelector("[data-section-content]"), n = t?.closest('[class*="group/section"]');
  if (!t || !n) return 0;
  const r = t.getBoundingClientRect().height;
  return r > 0 ? Math.max(n.getBoundingClientRect().height - r, 0) : 0;
}
const Xr = Yt({ zoom: 100, scaleValue: 1, hideUI: !1 });
function Oy({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = Pe(Xr), o = le(null);
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
  }, [e, r]), /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: `two-pages-pair two-pages-pair--${t}`,
      "data-page-item-id": n,
      children: e
    }
  );
}
function _y(e) {
  const t = Number.parseFloat(e.getAttribute("data-natural-width") || "0"), n = Number.parseFloat(e.getAttribute("data-natural-height") || "0");
  return t > 0 && n > 0 ? { width: t, height: n } : null;
}
function Ty(e, t) {
  const n = t === "two_pages" ? e.querySelector(".two-pages-pair") : e;
  if (!n) return null;
  const r = t === "two_pages" ? Array.from(n.querySelectorAll("[data-section-content]")) : (() => {
    const i = n.querySelector("[data-section-content]");
    return i ? [i] : [];
  })();
  if (!r.length) return null;
  const o = r.map(_y).filter((i) => i !== null);
  return wy(t, o);
}
function Wo({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: s } = Pe(Xr), a = le(null), [c, l] = se(0), [d, u] = se(0);
  ce(() => {
    if (a.current) {
      const w = () => {
        const S = a.current;
        if (S) {
          const y = S.style.transform;
          S.style.transform = "scale(1)";
          const N = S.scrollHeight, I = S.scrollWidth;
          S.style.transform = y, l(N), u(I);
        }
      };
      w();
      const C = new ResizeObserver(w);
      return C.observe(a.current), () => {
        C.disconnect();
      };
    }
  }, [e]);
  const f = c * i, h = Math.max(d * i, 150), v = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: g, origin: b } = v[o];
  return s ? /* @__PURE__ */ m("div", { className: n, children: e }) : /* @__PURE__ */ $(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${h}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ m("div", { children: r ?? /* @__PURE__ */ m("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
          t,
          " Controls"
        ] }) }) }),
        /* @__PURE__ */ m(
          "div",
          {
            className: "pt-1",
            style: {
              height: f > 0 ? `${f + 32}px` : "auto",
              minHeight: "100px"
            },
            children: /* @__PURE__ */ m("div", { className: `flex items-start ${g}`, children: /* @__PURE__ */ m(
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
function Fy({
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
  const u = Vi(), f = a ?? u, [h, v] = se(n), [g, b] = se(() => by(l)), [w, C] = se(0), S = le(null), y = le(null), N = le(null), I = le(null), P = le(h);
  ce(() => {
    P.current = h;
  }, [h]);
  const x = he(() => d === "pane" && y.current ? { x: y.current, y: y.current } : Dy(S.current), [d]), k = he((M, A, R) => {
    const T = Math.min(Math.max(M, r), o), D = I.current;
    if (!D) {
      v(T), b("none");
      return;
    }
    const K = x(), j = Array.from(D.querySelectorAll("[data-section-content]")), H = ky(
      j.map((X) => Vo(X.getBoundingClientRect())),
      A,
      R
    ), W = H >= 0 ? j[H] : D, V = Vo(W.getBoundingClientRect()), z = Py(V, A, R);
    bf(() => {
      v(T), b("none");
    });
    const Z = () => {
      const X = Vo(W.getBoundingClientRect()), { deltaLeft: J, deltaTop: q } = Iy(V, X, z.clientX, z.clientY);
      J !== 0 && K.x && (K.x.scrollLeft += J), q !== 0 && K.y && (K.y.scrollTop += q);
    };
    Z(), window.requestAnimationFrame(Z);
  }, [o, r, x]), E = he(() => {
    const A = (d === "pane" ? y.current : S.current)?.getBoundingClientRect();
    return A ? { clientX: A.left + A.width / 2, clientY: A.top + A.height / 2 } : { clientX: 0, clientY: 0 };
  }, [d]), O = he(() => {
    const M = I.current;
    if (g === "none" || !M) return;
    const A = Ty(M, c);
    if (!A) return;
    const R = d === "pane" ? y.current : S.current;
    if (!R) return;
    const T = R.getBoundingClientRect(), D = R.ownerDocument.defaultView ?? window, K = D.visualViewport?.height ?? R.ownerDocument.documentElement.clientHeight ?? D.innerHeight, j = R.clientWidth || T.width, H = d === "pane" ? xy({
      paneClientHeight: R.clientHeight || T.height,
      paneTop: T.top,
      viewportHeight: K
    }) : K - Math.max(T.top, 0), W = N.current ? window.getComputedStyle(N.current) : null, V = W ? Number.parseFloat(W.paddingLeft) + Number.parseFloat(W.paddingRight) : 0, z = W ? Number.parseFloat(W.paddingTop) + Number.parseFloat(W.paddingBottom) : 0, { availableWidth: Z, availableHeight: X } = Cy({
      paneWidth: j,
      paneHeight: H,
      paddingX: V,
      paddingY: z,
      chromeHeight: My(M)
    }), J = Sy({
      mode: g,
      contentWidth: A.width,
      contentHeight: A.height,
      availableWidth: Z,
      availableHeight: X,
      minZoom: r,
      maxZoom: o
    });
    J !== null && v((q) => Math.abs(q - J) < 0.01 ? q : J);
  }, [g, o, r, c, d]), _ = (M) => {
    b(M);
  }, B = () => {
    const M = E();
    k(h + 25, M.clientX, M.clientY);
  }, L = () => {
    const M = E();
    k(h - 25, M.clientX, M.clientY);
  };
  ce(() => {
    if (g === "none" || !S.current || !I.current) return;
    let M = 0;
    const A = () => {
      window.cancelAnimationFrame(M), M = window.requestAnimationFrame(O);
    }, R = new ResizeObserver(A);
    R.observe(S.current), y.current && R.observe(y.current), R.observe(I.current);
    const T = () => {
      I.current?.querySelectorAll("[data-section-content]").forEach((K) => {
        R.observe(K);
      });
    };
    T();
    const D = new MutationObserver(() => {
      T(), A();
    });
    return D.observe(I.current, { childList: !0, subtree: !0 }), window.addEventListener("resize", A), window.visualViewport?.addEventListener("resize", A), A(), () => {
      window.cancelAnimationFrame(M), R.disconnect(), D.disconnect(), window.removeEventListener("resize", A), window.visualViewport?.removeEventListener("resize", A);
    };
  }, [g, O]), ce(() => {
    if (f || d !== "pane") return;
    const M = S.current;
    if (!M) return;
    const A = () => {
      const T = Ay(M);
      C((D) => Math.abs(D - T) < 0.5 ? D : T);
    };
    A();
    const R = new ResizeObserver(A);
    return R.observe(M), window.addEventListener("resize", A), window.visualViewport?.addEventListener("resize", A), () => {
      R.disconnect(), window.removeEventListener("resize", A), window.visualViewport?.removeEventListener("resize", A);
    };
  }, [f, d]), ce(() => {
    if (f) return;
    let M = null, A = null, R = null, T = { clientX: 0, clientY: 0 }, D = null, K = !1;
    const j = () => {
      M = null;
      const V = R;
      R = null, V !== null && k(V, T.clientX, T.clientY);
    }, H = (V) => {
      if (!V.ctrlKey && !V.metaKey) return;
      V.preventDefault();
      const z = 16, Z = V.deltaMode === 1 ? V.deltaY * z : V.deltaMode === 2 ? V.deltaY * z * 32 : V.deltaY, X = R ?? P.current, J = Math.min(Math.max(X * Math.pow(1.003, -Z), r), o);
      T = { clientX: V.clientX, clientY: V.clientY }, !(J === X && R === null) && (R = J, M === null && (M = window.requestAnimationFrame(j)));
    }, W = () => {
      if (A = null, !K) {
        if (D = d === "pane" ? y.current : S.current, !D) {
          A = window.requestAnimationFrame(W);
          return;
        }
        D.addEventListener("wheel", H, { passive: !1 });
      }
    };
    return W(), () => {
      K = !0, M !== null && window.cancelAnimationFrame(M), A !== null && window.cancelAnimationFrame(A), D?.removeEventListener("wheel", H);
    };
  }, [k, f, o, r, d]);
  const G = h / 100;
  return f ? /* @__PURE__ */ m(Xr.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ m("div", { className: t, children: e }) }) : /* @__PURE__ */ m(Xr.Provider, { value: { zoom: h, scaleValue: G, hideUI: !1 }, children: /* @__PURE__ */ $("div", { ref: S, className: `flex flex-col flex-1 min-h-0 ${t}`, children: [
    /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      s,
      /* @__PURE__ */ m("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ $(or, { modal: !1, children: [
        /* @__PURE__ */ m(ir, { asChild: !0, children: /* @__PURE__ */ $(_e, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(h),
          "%",
          /* @__PURE__ */ m(Kc, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ $(_n, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ $(
            je,
            {
              onClick: () => _("width"),
              className: `cursor-pointer flex items-center ${g === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ m(Im, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ m("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ $(
            je,
            {
              onClick: () => _("height"),
              className: `cursor-pointer flex items-center ${g === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ m(Nm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ m("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ $(
            je,
            {
              onClick: () => _("both"),
              className: `cursor-pointer flex items-center ${g === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ m(mm, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ m("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ m(sn, { className: "my-1.5" }),
          /* @__PURE__ */ $("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (M) => M.stopPropagation(), children: [
            /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "sm",
                onClick: (M) => {
                  M.stopPropagation(), L();
                },
                disabled: h <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ m(Mm, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ $("div", { className: "relative", children: [
              /* @__PURE__ */ m(
                "input",
                {
                  type: "number",
                  value: Math.round(h),
                  onChange: (M) => {
                    const A = Number.parseInt(M.target.value);
                    if (!isNaN(A)) {
                      const R = E();
                      k(A, R.clientX, R.clientY);
                    }
                  },
                  onFocus: (M) => M.target.select(),
                  className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  min: r,
                  max: o
                }
              ),
              /* @__PURE__ */ m("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ m(
              _e,
              {
                variant: "ghost",
                size: "sm",
                onClick: (M) => {
                  M.stopPropagation(), B();
                },
                disabled: h >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ m(Dm, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m(
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
        children: /* @__PURE__ */ m("div", { ref: N, className: "uhuu-zoom-pane-content", style: Ey, children: /* @__PURE__ */ m("div", { ref: I, className: c === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e }) })
      }
    )
  ] }) });
}
var Ly = Object.defineProperty, Ve = (e, t) => Ly(e, "name", { value: t, configurable: !0 }), bs = "Dialog", [Uu, Yu] = /* @__PURE__ */ st(bs), [$y, ct] = Uu(bs), qu = /* @__PURE__ */ Ve((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = p.useRef(null), c = p.useRef(null), [l, d] = un({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: bs
  }), [u, f] = p.useState(0), [h, v] = p.useState(0);
  return /* @__PURE__ */ m(
    $y,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: St(),
      titleId: St(),
      descriptionId: St(),
      titlePresent: u > 0,
      descriptionPresent: h > 0,
      setTitleCount: f,
      setDescriptionCount: v,
      open: l,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((g) => !g), [d]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), By = "DialogTrigger", zy = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = ct(By, r), s = ge(n, i.triggerRef);
    return /* @__PURE__ */ m(
      ye.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": wo(i.open),
        ...o,
        ref: s,
        onClick: te(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Xu = "DialogPortal", [Hy, Zu] = Uu(Xu, {
  forceMount: void 0
}), Ju = /* @__PURE__ */ Ve((e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = ct(Xu, t);
  return /* @__PURE__ */ m(Hy, { scope: t, forceMount: n, children: p.Children.map(r, (s) => /* @__PURE__ */ m(On, { present: n || i.open, children: /* @__PURE__ */ m(Kl, { asChild: !0, container: o, children: s }) })) });
}, "DialogPortal"), Pi = "DialogOverlay", ys = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const r = Zu(Pi, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = ct(Pi, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m(On, { present: o || s.open, children: /* @__PURE__ */ m(jy, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), Ky = /* @__PURE__ */ jt("DialogOverlay.RemoveScroll"), jy = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = ct(Pi, r), s = ml(), a = ge(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(ss, { as: Ky, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ m(
        ye.div,
        {
          "data-state": wo(i.open),
          ...o,
          ref: a,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Jn = "DialogContent", ws = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const r = Zu(Jn, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, s = ct(Jn, t.__scopeDialog);
    return /* @__PURE__ */ m(On, { present: o || s.open, children: s.modal ? /* @__PURE__ */ m(Gy, { ...i, ref: n }) : /* @__PURE__ */ m(Vy, { ...i, ref: n }) });
  }, "DialogContent")
), Gy = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ve(function(t, n) {
    const r = ct(Jn, t.__scopeDialog), o = p.useRef(null), i = ge(n, r.contentRef, o);
    return p.useEffect(() => {
      const s = o.current;
      if (s) return ru(s);
    }, []), /* @__PURE__ */ m(
      Qu,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: te(t.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: te(t.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || c) && s.preventDefault();
        }),
        onFocusOutside: te(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), Vy = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ve(function(t, n) {
    const r = ct(Jn, t.__scopeDialog), o = p.useRef(!1), i = p.useRef(!1);
    return /* @__PURE__ */ m(
      Qu,
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
), Qu = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = t, c = ct(Jn, r);
    return ao(), /* @__PURE__ */ m($e, { children: /* @__PURE__ */ m(
      vl,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ m(
          hl,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": wo(c.open),
            ...a,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Wy = "DialogTitle", xs = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = ct(Wy, r), { setTitleCount: s } = i;
    return Ge(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ m(ye.h2, { id: i.titleId, ...o, ref: n });
  }, "DialogTitle")
), Uy = "DialogDescription", Cs = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = ct(Uy, r), { setDescriptionCount: s } = i;
    return Ge(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ m(ye.p, { id: i.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), Yy = "DialogClose", Ss = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ve(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = ct(Yy, r);
    return /* @__PURE__ */ m(
      ye.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: te(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function wo(e) {
  return e ? "open" : "closed";
}
Ve(wo, "getState");
const ed = qu, qy = Ju, td = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ys,
  {
    className: ue(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
td.displayName = ys.displayName;
const Ps = p.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = ji();
  return /* @__PURE__ */ $(qy, { container: i || void 0, children: [
    /* @__PURE__ */ m(td, {}),
    /* @__PURE__ */ $(
      ws,
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
          /* @__PURE__ */ $(Ss, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ m(Vc, { className: "h-4 w-4" }),
            /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Ps.displayName = ws.displayName;
const Is = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: ue(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Is.displayName = "SheetHeader";
const nd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: ue(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
nd.displayName = "SheetFooter";
const ks = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  xs,
  {
    ref: n,
    className: ue("text-lg font-medium text-gray-900", e),
    ...t
  }
));
ks.displayName = xs.displayName;
const Ns = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Cs,
  {
    ref: n,
    className: ue("text-sm text-gray-500", e),
    ...t
  }
));
Ns.displayName = Cs.displayName;
function Rs(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, s = Di.resolveDimensions(r), a = s.width, c = s.height, l = a / c, d = o, u = i ?? Math.round(d / l), f = a * 3.779527559, h = c * 3.779527559;
  return (v, g, b) => {
    const w = v.strictPosition, C = w === "start" || w === "end";
    if (v.kind === "group") {
      const S = v.firstPageId, y = v.firstPageComponentKey ?? S, N = qr(n, { id: S, componentKey: y }), I = v.firstPageComponent || (y ? t[y] : null), P = n?.integrations?.[v.id];
      return /* @__PURE__ */ $(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : C ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.id,
          children: [
            I ? /* @__PURE__ */ m(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ m(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ m("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ m(
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: y,
                        pagePayload: N,
                        componentKey: y,
                        integration: P,
                        parentGroup: v
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ m("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                v.id
              ] }),
              /* @__PURE__ */ m("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            /* @__PURE__ */ $("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              v.pageCount,
              " pages)"
            ] }),
            C && /* @__PURE__ */ $("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ m(ii, { className: "size-3" }),
              /* @__PURE__ */ m("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ m("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ m("div", { className: "text-sm font-medium truncate", children: v.label || v.id }) }) }) }),
            b && /* @__PURE__ */ m("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ m("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const S = v.pageId, y = v.pageComponentKey ?? S, N = qr(n, { id: S, componentKey: y }), I = v.pageComponent || (y ? t[y] : null), P = S ? Vu(n, { id: S }) : void 0;
      return /* @__PURE__ */ $(
        "div",
        {
          className: `relative bg-white border transition-all ${b ? "border-blue-400 shadow-2xl scale-105" : C ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: v.pageId,
          children: [
            I ? /* @__PURE__ */ m(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ m(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(d / f, u / h)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ m("div", { className: "!shrink-0", style: { width: `${f}px`, height: `${h}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ m(
                      I,
                      {
                        payload: n,
                        pageId: S,
                        templateId: y,
                        pagePayload: N,
                        componentKey: y,
                        integration: P
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ m("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ $("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                v.pageNum
              ] }),
              /* @__PURE__ */ m("div", { className: "text-xs text-gray-500 mt-1", children: S || "No preview" })
            ] }) }),
            C && /* @__PURE__ */ $("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ m(ii, { className: "size-3" }),
              /* @__PURE__ */ m("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ m("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ m("div", { className: "text-sm font-medium truncate", children: v.pageLabel || `Page ${v.pageNum}` }) }) }) }),
            b && /* @__PURE__ */ m("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ m("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function Xy({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: i,
  setup: s = { width: 210, height: 297 },
  gridColsClass: a = "page-order-grid-cols"
}) {
  const [c, l] = p.useState(""), d = p.useMemo(() => {
    if (!c.trim()) return n;
    const I = c.toLowerCase();
    return n.filter(
      (P) => (P.label || "").toLowerCase().includes(I) || P.id.toLowerCase().includes(I)
    );
  }, [n, c]), u = (I) => {
    t(!1), r(I);
  }, f = Di.resolveDimensions(s), h = f.width, v = f.height, g = h / v, b = 200, w = Math.round(b / g), C = {
    width: `${b}px`,
    height: `${w}px`
  }, S = p.useMemo(() => o ? Rs({
    pageComponents: o,
    payload: i,
    setup: s,
    thumbnailWidth: b,
    thumbnailHeight: w
  }) : null, [o, i, s, b, w]), y = (I, P) => {
    if (!I) return [];
    if (Array.isArray(I)) return I;
    try {
      const x = I(P);
      if (!Array.isArray(x))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof x), [];
      const k = x.filter((E) => typeof E == "string");
      return k.length !== x.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), k;
    } catch (x) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", x), [];
    }
  }, N = (I, P) => {
    if (I.kind === "group") {
      const E = I, O = { payload: i, item: void 0, parent: void 0 }, _ = y(E.pageComponentKeys, O), B = _[0];
      return {
        kind: "group",
        id: I.id,
        label: I.label,
        pageCount: _.length,
        firstPageId: B,
        firstPageComponentKey: B
      };
    }
    const x = I, k = x.componentKey ?? x.id;
    return {
      kind: "page",
      id: x.id,
      pageId: x.id,
      pageComponentKey: k,
      pageLabel: x.label,
      pageNum: P + 1
    };
  };
  return /* @__PURE__ */ m(ed, { open: e, onOpenChange: t, children: /* @__PURE__ */ $(
    Ps,
    {
      side: "bottom",
      className: "h-[90vh] w-full max-w-none flex flex-col gap-0 bg-gray-50 p-0",
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ m(Is, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ $("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ m("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ m(ht, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ $("div", { className: "flex-1", children: [
            /* @__PURE__ */ m(ks, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
            /* @__PURE__ */ m(Ns, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
          ] }),
          /* @__PURE__ */ $("div", { className: "mb-0.5 mr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2 py-1 text-gray-400 focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200", children: [
            /* @__PURE__ */ m(xm, { className: "w-3.5 h-3.5 shrink-0" }),
            /* @__PURE__ */ m("label", { className: "sr-only", htmlFor: "uhuu-add-page-filter", children: "Filter pages and groups" }),
            /* @__PURE__ */ m(
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
        /* @__PURE__ */ m("div", { className: "min-h-0 flex-1 overflow-auto bg-gray-50 p-6", children: d.length === 0 ? /* @__PURE__ */ $("div", { className: "text-center py-16", children: [
          /* @__PURE__ */ m("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ m(ht, { className: "w-8 h-8 text-gray-400" }) }),
          /* @__PURE__ */ m("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
          /* @__PURE__ */ m("p", { className: "text-gray-500 mb-4", children: c.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
        ] }) : /* @__PURE__ */ m("div", { className: a, children: d.map((I, P) => {
          const x = I.kind === "group", k = I.id, E = x ? I.label || `Group ${P + 1}` : I.label || `Page ${I.id}`, O = { payload: i, item: void 0, parent: void 0 }, _ = x ? y(I.pageComponentKeys, O).length : 1, B = !!S;
          return /* @__PURE__ */ $(
            "div",
            {
              onClick: () => u(I),
              onKeyDown: (L) => {
                (L.key === "Enter" || L.key === " ") && (L.preventDefault(), u(I));
              },
              role: "button",
              tabIndex: 0,
              "aria-label": `Add ${E}`,
              className: [
                "group relative block cursor-pointer border-0 bg-transparent p-0 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
                !B && "bg-white border-2 border-gray-200"
              ].filter(Boolean).join(" "),
              style: C,
              children: [
                /* @__PURE__ */ m("div", { className: "w-full h-full relative", children: I.thumbnail ? /* @__PURE__ */ m("div", { className: "absolute inset-0 bg-gray-100 hover:bg-white", children: /* @__PURE__ */ m(
                  "img",
                  {
                    src: I.thumbnail,
                    className: "w-full h-full object-contain pointer-events-none object-top border border-gray-200 p-4",
                    alt: E
                  }
                ) }) : S ? /* @__PURE__ */ m("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: S(N(I, P), P, !1) }) : /* @__PURE__ */ m($e, { children: x ? /* @__PURE__ */ $("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ m("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ m(ht, { className: "w-8 h-8 text-blue-600" }) }),
                  /* @__PURE__ */ m("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ $("div", { className: "text-xs text-gray-500 mt-1", children: [
                    _,
                    " ",
                    _ === 1 ? "page" : "pages"
                  ] })
                ] }) : /* @__PURE__ */ $("div", { className: "flex h-full flex-col items-center justify-center p-4 text-center", children: [
                  /* @__PURE__ */ m("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ m(ht, { className: "w-8 h-8 text-gray-400" }) }),
                  /* @__PURE__ */ m("div", { className: "text-sm font-medium text-gray-700", children: E }),
                  /* @__PURE__ */ m("div", { className: "text-xs text-gray-500 mt-1", children: k })
                ] }) }) }),
                (!S || I?.thumbnail) && /* @__PURE__ */ $($e, { children: [
                  x && /* @__PURE__ */ $("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                    "Group (",
                    _,
                    " ",
                    _ === 1 ? "page" : "pages",
                    ")"
                  ] }),
                  /* @__PURE__ */ m("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": k, children: /* @__PURE__ */ m("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ m("div", { className: "text-sm font-medium truncate", children: E }) }) }) })
                ] }),
                /* @__PURE__ */ m("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ m(ht, { className: "w-4 h-4 text-white" }) })
              ]
            },
            k
          );
        }) }) })
      ]
    }
  ) });
}
function Zy() {
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
const xo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Tn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Es(e) {
  return "nodeType" in e;
}
function Be(e) {
  var t, n;
  return e ? Tn(e) ? e : Es(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ds(e) {
  const {
    Document: t
  } = Be(e);
  return e instanceof t;
}
function ar(e) {
  return Tn(e) ? !1 : e instanceof Be(e).HTMLElement;
}
function rd(e) {
  return e instanceof Be(e).SVGElement;
}
function Fn(e) {
  return e ? Tn(e) ? e.document : Es(e) ? Ds(e) ? e : ar(e) || rd(e) ? e.ownerDocument : document : document : document;
}
const ot = xo ? uc : ce;
function Co(e) {
  const t = le(e);
  return ot(() => {
    t.current = e;
  }), he(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Jy() {
  const e = le(null), t = he((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = he(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Qn(e, t) {
  t === void 0 && (t = [e]);
  const n = le(e);
  return ot(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function cr(e, t) {
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
function Zr(e) {
  const t = Co(e), n = le(null), r = he(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Jr(e) {
  const t = le();
  return ce(() => {
    t.current = e;
  }, [e]), t.current;
}
let Uo = {};
function lr(e, t) {
  return ee(() => {
    if (t)
      return t;
    const n = Uo[e] == null ? 0 : Uo[e] + 1;
    return Uo[e] = n, e + "-" + n;
  }, [e, t]);
}
function od(e) {
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
const kn = /* @__PURE__ */ od(1), er = /* @__PURE__ */ od(-1);
function Qy(e) {
  return "clientX" in e && "clientY" in e;
}
function So(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function ew(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function Qr(e) {
  if (ew(e)) {
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
  return Qy(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Wt = /* @__PURE__ */ Object.freeze({
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
        return [Wt.Translate.toString(e), Wt.Scale.toString(e)].join(" ");
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
}), Ha = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function tw(e) {
  return e.matches(Ha) ? e : e.querySelector(Ha);
}
const nw = {
  display: "none"
};
function rw(e) {
  let {
    id: t,
    value: n
  } = e;
  return xe.createElement("div", {
    id: t,
    style: nw
  }, n);
}
function ow(e) {
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
  return xe.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function iw() {
  const [e, t] = se("");
  return {
    announce: he((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const id = /* @__PURE__ */ Yt(null);
function sw(e) {
  const t = Pe(id);
  ce(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function aw() {
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
const cw = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, lw = {
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
function uw(e) {
  let {
    announcements: t = lw,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = cw
  } = e;
  const {
    announce: i,
    announcement: s
  } = iw(), a = lr("DndLiveRegion"), [c, l] = se(!1);
  if (ce(() => {
    l(!0);
  }, []), sw(ee(() => ({
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
  const d = xe.createElement(xe.Fragment, null, xe.createElement(rw, {
    id: r,
    value: o.draggable
  }), xe.createElement(ow, {
    id: a,
    announcement: s
  }));
  return n ? yf(d, n) : d;
}
var ke;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ke || (ke = {}));
function eo() {
}
function Ka(e, t) {
  return ee(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function dw() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ee(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const it = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function sd(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function fw(e, t) {
  const n = Qr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function ad(e, t) {
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
function hw(e, t) {
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
function ja(e) {
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
function cd(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function Ga(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const mw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ga(t, t.left, t.top), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = sd(Ga(c), o);
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: l
        }
      });
    }
  }
  return i.sort(ad);
}, pw = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = ja(t), i = [];
  for (const s of r) {
    const {
      id: a
    } = s, c = n.get(a);
    if (c) {
      const l = ja(c), d = o.reduce((f, h, v) => f + sd(l[v], h), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: a,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return i.sort(ad);
};
function gw(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), s = o - r, a = i - n;
  if (r < o && n < i) {
    const c = t.width * t.height, l = e.width * e.height, d = s * a, u = d / (c + l - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const vw = (e) => {
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
      const c = gw(a, t);
      c > 0 && o.push({
        id: s,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return o.sort(hw);
};
function bw(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ld(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : it;
}
function yw(e) {
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
const ww = /* @__PURE__ */ yw(1);
function ud(e) {
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
function xw(e, t, n) {
  const r = ud(t);
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
const Cw = {
  ignoreTransform: !1
};
function Ln(e, t) {
  t === void 0 && (t = Cw);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: l,
      transformOrigin: d
    } = Be(e).getComputedStyle(e);
    l && (n = xw(n, l, d));
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
function Va(e) {
  return Ln(e, {
    ignoreTransform: !0
  });
}
function Sw(e) {
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
function Pw(e, t) {
  return t === void 0 && (t = Be(e).getComputedStyle(e)), t.position === "fixed";
}
function Iw(e, t) {
  t === void 0 && (t = Be(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Po(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ds(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!ar(o) || rd(o) || n.includes(o))
      return n;
    const i = Be(e).getComputedStyle(o);
    return o !== e && Iw(o, i) && n.push(o), Pw(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function dd(e) {
  const [t] = Po(e, 1);
  return t ?? null;
}
function Yo(e) {
  return !xo || !e ? null : Tn(e) ? e : Es(e) ? Ds(e) || e === Fn(e).scrollingElement ? window : ar(e) ? e : null : null;
}
function fd(e) {
  return Tn(e) ? e.scrollX : e.scrollLeft;
}
function hd(e) {
  return Tn(e) ? e.scrollY : e.scrollTop;
}
function Ii(e) {
  return {
    x: fd(e),
    y: hd(e)
  };
}
var Re;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Re || (Re = {}));
function md(e) {
  return !xo || !e ? !1 : e === document.scrollingElement;
}
function pd(e) {
  const t = {
    x: 0,
    y: 0
  }, n = md(e) ? {
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
const kw = {
  x: 0.2,
  y: 0.2
};
function Nw(e, t, n, r, o) {
  let {
    top: i,
    left: s,
    right: a,
    bottom: c
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = kw);
  const {
    isTop: l,
    isBottom: d,
    isLeft: u,
    isRight: f
  } = pd(e), h = {
    x: 0,
    y: 0
  }, v = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !l && i <= t.top + g.height ? (h.y = Re.Backward, v.y = r * Math.abs((t.top + g.height - i) / g.height)) : !d && c >= t.bottom - g.height && (h.y = Re.Forward, v.y = r * Math.abs((t.bottom - g.height - c) / g.height)), !f && a >= t.right - g.width ? (h.x = Re.Forward, v.x = r * Math.abs((t.right - g.width - a) / g.width)) : !u && s <= t.left + g.width && (h.x = Re.Backward, v.x = r * Math.abs((t.left + g.width - s) / g.width)), {
    direction: h,
    speed: v
  };
}
function Rw(e) {
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
function gd(e) {
  return e.reduce((t, n) => kn(t, Ii(n)), it);
}
function Ew(e) {
  return e.reduce((t, n) => t + fd(n), 0);
}
function Dw(e) {
  return e.reduce((t, n) => t + hd(n), 0);
}
function vd(e, t) {
  if (t === void 0 && (t = Ln), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  dd(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Aw = [["x", ["left", "right"], Ew], ["y", ["top", "bottom"], Dw]];
class As {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Po(n), o = gd(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, s, a] of Aw)
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
class Gn {
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
function Mw(e) {
  const {
    EventTarget: t
  } = Be(e);
  return e instanceof t ? e : Fn(e);
}
function qo(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Xe;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Xe || (Xe = {}));
function Wa(e) {
  e.preventDefault();
}
function Ow(e) {
  e.stopPropagation();
}
var de;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(de || (de = {}));
const bd = {
  start: [de.Space, de.Enter],
  cancel: [de.Esc],
  end: [de.Space, de.Enter, de.Tab]
}, _w = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case de.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case de.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case de.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case de.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Ms {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Gn(Fn(n)), this.windowListeners = new Gn(Be(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Xe.Resize, this.handleCancel), this.windowListeners.add(Xe.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Xe.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && vd(r), n(it);
  }
  handleKeyDown(t) {
    if (So(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = bd,
        coordinateGetter: s = _w,
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
      } : it;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = s(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const f = er(u, d), h = {
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
            maxScroll: N,
            minScroll: I
          } = pd(g), P = Rw(g), x = {
            x: Math.min(b === de.Right ? P.right - P.width / 2 : P.right, Math.max(b === de.Right ? P.left : P.left + P.width / 2, u.x)),
            y: Math.min(b === de.Down ? P.bottom - P.height / 2 : P.bottom, Math.max(b === de.Down ? P.top : P.top + P.height / 2, u.y))
          }, k = b === de.Right && !C || b === de.Left && !S, E = b === de.Down && !y || b === de.Up && !w;
          if (k && x.x !== u.x) {
            const O = g.scrollLeft + f.x, _ = b === de.Right && O <= N.x || b === de.Left && O >= I.x;
            if (_ && !f.y) {
              g.scrollTo({
                left: O,
                behavior: a
              });
              return;
            }
            _ ? h.x = g.scrollLeft - O : h.x = b === de.Right ? g.scrollLeft - N.x : g.scrollLeft - I.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: a
            });
            break;
          } else if (E && x.y !== u.y) {
            const O = g.scrollTop + f.y, _ = b === de.Down && O <= N.y || b === de.Up && O >= I.y;
            if (_ && !f.x) {
              g.scrollTo({
                top: O,
                behavior: a
              });
              return;
            }
            _ ? h.y = g.scrollTop - O : h.y = b === de.Down ? g.scrollTop - N.y : g.scrollTop - I.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(t, kn(er(u, this.referenceCoordinates), h));
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
Ms.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = bd,
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
function Ua(e) {
  return !!(e && "distance" in e);
}
function Ya(e) {
  return !!(e && "delay" in e);
}
class Os {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = Mw(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: s
    } = i;
    this.props = t, this.events = n, this.document = Fn(s), this.documentListeners = new Gn(this.document), this.listeners = new Gn(r), this.windowListeners = new Gn(Be(s)), this.initialCoordinates = (o = Qr(i)) != null ? o : it, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Xe.Resize, this.handleCancel), this.windowListeners.add(Xe.DragStart, Wa), this.windowListeners.add(Xe.VisibilityChange, this.handleCancel), this.windowListeners.add(Xe.ContextMenu, Wa), this.documentListeners.add(Xe.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ya(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ua(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Xe.Click, Ow, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Xe.SelectionChange, this.removeTextSelection), n(t));
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
    const c = (n = Qr(t)) != null ? n : it, l = er(o, c);
    if (!r && a) {
      if (Ua(a)) {
        if (a.tolerance != null && qo(l, a.tolerance))
          return this.handleCancel();
        if (qo(l, a.distance))
          return this.handleStart();
      }
      if (Ya(a) && qo(l, a.tolerance))
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
    t.code === de.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Tw = {
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
class _s extends Os {
  constructor(t) {
    const {
      event: n
    } = t, r = Fn(n.target);
    super(t, Tw, r);
  }
}
_s.activators = [{
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
const Fw = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ki;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ki || (ki = {}));
class Lw extends Os {
  constructor(t) {
    super(t, Fw, Fn(t.event.target));
  }
}
Lw.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ki.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Xo = {
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
class $w extends Os {
  constructor(t) {
    super(t, Xo);
  }
  static setup() {
    return window.addEventListener(Xo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Xo.move.name, t);
    };
    function t() {
    }
  }
}
$w.activators = [{
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
var Vn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Vn || (Vn = {}));
var to;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(to || (to = {}));
function Bw(e) {
  let {
    acceleration: t,
    activator: n = Vn.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: s = 5,
    order: a = to.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: l,
    scrollableAncestorRects: d,
    delta: u,
    threshold: f
  } = e;
  const h = Hw({
    delta: u,
    disabled: !i
  }), [v, g] = Jy(), b = le({
    x: 0,
    y: 0
  }), w = le({
    x: 0,
    y: 0
  }), C = ee(() => {
    switch (n) {
      case Vn.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case Vn.DraggableRect:
        return o;
    }
  }, [n, o, c]), S = le(null), y = he(() => {
    const I = S.current;
    if (!I)
      return;
    const P = b.current.x * w.current.x, x = b.current.y * w.current.y;
    I.scrollBy(P, x);
  }, []), N = ee(() => a === to.TreeOrder ? [...l].reverse() : l, [a, l]);
  ce(
    () => {
      if (!i || !l.length || !C) {
        g();
        return;
      }
      for (const I of N) {
        if (r?.(I) === !1)
          continue;
        const P = l.indexOf(I), x = d[P];
        if (!x)
          continue;
        const {
          direction: k,
          speed: E
        } = Nw(I, x, C, t, f);
        for (const O of ["x", "y"])
          h[O][k[O]] || (E[O] = 0, k[O] = 0);
        if (E.x > 0 || E.y > 0) {
          g(), S.current = I, v(y, s), b.current = E, w.current = k;
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
      i,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(C),
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
const zw = {
  x: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  },
  y: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  }
};
function Hw(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Jr(t);
  return cr((o) => {
    if (n || !r || !o)
      return zw;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Re.Backward]: o.x[Re.Backward] || i.x === -1,
        [Re.Forward]: o.x[Re.Forward] || i.x === 1
      },
      y: {
        [Re.Backward]: o.y[Re.Backward] || i.y === -1,
        [Re.Forward]: o.y[Re.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Kw(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return cr((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function jw(e, t) {
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
var tr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(tr || (tr = {}));
var Ni;
(function(e) {
  e.Optimized = "optimized";
})(Ni || (Ni = {}));
const qa = /* @__PURE__ */ new Map();
function Gw(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, s] = se(null), {
    frequency: a,
    measure: c,
    strategy: l
  } = o, d = le(e), u = b(), f = Qn(u), h = he(function(w) {
    w === void 0 && (w = []), !f.current && s((C) => C === null ? w : C.concat(w.filter((S) => !C.includes(S))));
  }, [f]), v = le(null), g = cr((w) => {
    if (u && !n)
      return qa;
    if (!w || w === qa || d.current !== e || i != null) {
      const C = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          C.set(S.id, S.rect.current);
          continue;
        }
        const y = S.node.current, N = y ? new As(c(y), y) : null;
        S.rect.current = N, N && C.set(S.id, N);
      }
      return C;
    }
    return w;
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
    droppableRects: g,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function b() {
    switch (l) {
      case tr.Always:
        return !1;
      case tr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Ts(e, t) {
  return cr((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Vw(e, t) {
  return Ts(e, t);
}
function Ww(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Co(t), o = ee(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return ce(() => () => o?.disconnect(), [o]), o;
}
function Io(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Co(t), o = ee(
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
function Uw(e) {
  return new As(Ln(e), e);
}
function Xa(e, t, n) {
  t === void 0 && (t = Uw);
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
  const s = Ww({
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
  }), a = Io({
    callback: i
  });
  return ot(() => {
    i(), e ? (a?.observe(e), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [e]), r;
}
function Yw(e) {
  const t = Ts(e);
  return ld(e, t);
}
const Za = [];
function qw(e) {
  const t = le(e), n = cr((r) => e ? r && r !== Za && e && t.current && e.parentNode === t.current.parentNode ? r : Po(e) : Za, [e]);
  return ce(() => {
    t.current = e;
  }, [e]), n;
}
function Xw(e) {
  const [t, n] = se(null), r = le(e), o = he((i) => {
    const s = Yo(i.target);
    s && n((a) => a ? (a.set(s, Ii(s)), new Map(a)) : null);
  }, []);
  return ce(() => {
    const i = r.current;
    if (e !== i) {
      s(i);
      const a = e.map((c) => {
        const l = Yo(c);
        return l ? (l.addEventListener("scroll", o, {
          passive: !0
        }), [l, Ii(l)]) : null;
      }).filter((c) => c != null);
      n(a.length ? new Map(a) : null), r.current = e;
    }
    return () => {
      s(e), s(i);
    };
    function s(a) {
      a.forEach((c) => {
        const l = Yo(c);
        l?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), ee(() => e.length ? t ? Array.from(t.values()).reduce((i, s) => kn(i, s), it) : gd(e) : it, [e, t]);
}
function Ja(e, t) {
  t === void 0 && (t = []);
  const n = le(null);
  return ce(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ce(() => {
    const r = e !== it;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? er(e, n.current) : it;
}
function Zw(e) {
  ce(
    () => {
      if (!xo)
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
function Jw(e, t) {
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
function yd(e) {
  return ee(() => e ? Sw(e) : null, [e]);
}
const Qa = [];
function Qw(e, t) {
  t === void 0 && (t = Ln);
  const [n] = e, r = yd(n ? Be(n) : null), [o, i] = se(Qa);
  function s() {
    i(() => e.length ? e.map((c) => md(c) ? r : new As(t(c), c)) : Qa);
  }
  const a = Io({
    callback: s
  });
  return ot(() => {
    a?.disconnect(), s(), e.forEach((c) => a?.observe(c));
  }, [e]), o;
}
function wd(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ar(t) ? t : e;
}
function e0(e) {
  let {
    measure: t
  } = e;
  const [n, r] = se(null), o = he((l) => {
    for (const {
      target: d
    } of l)
      if (ar(d)) {
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
  }, [t]), i = Io({
    callback: o
  }), s = he((l) => {
    const d = wd(l);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [a, c] = Zr(s);
  return ee(() => ({
    nodeRef: a,
    rect: n,
    setRef: c
  }), [n, a, c]);
}
const t0 = [{
  sensor: _s,
  options: {}
}, {
  sensor: Ms,
  options: {}
}], n0 = {
  current: {}
}, Lr = {
  draggable: {
    measure: Va
  },
  droppable: {
    measure: Va,
    strategy: tr.WhileDragging,
    frequency: Ni.Optimized
  },
  dragOverlay: {
    measure: Ln
  }
};
class Wn extends Map {
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
const r0 = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Wn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: eo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Lr,
  measureDroppableContainers: eo,
  windowRect: null,
  measuringScheduled: !1
}, xd = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: eo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: eo
}, ur = /* @__PURE__ */ Yt(xd), Cd = /* @__PURE__ */ Yt(r0);
function o0() {
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
      containers: new Wn()
    }
  };
}
function i0(e, t) {
  switch (t.type) {
    case ke.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ke.DragMove:
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
    case ke.DragEnd:
    case ke.DragCancel:
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
    case ke.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, o = new Wn(e.droppable.containers);
      return o.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case ke.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: o
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new Wn(e.droppable.containers);
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
    case ke.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Wn(e.droppable.containers);
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
function s0(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = Pe(ur), i = Jr(r), s = Jr(n?.id);
  return ce(() => {
    if (!t && !r && i && s != null) {
      if (!So(i) || document.activeElement === i.target)
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
          const u = tw(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, s, i]), null;
}
function Sd(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function a0(e) {
  return ee(
    () => ({
      draggable: {
        ...Lr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...Lr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...Lr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function c0(e) {
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
  ot(() => {
    if (!s && !a || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const l = t?.node.current;
    if (!l || l.isConnected === !1)
      return;
    const d = n(l), u = ld(d, r);
    if (s || (u.x = 0), a || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const f = dd(l);
      f && f.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, s, a, r, n]);
}
const ko = /* @__PURE__ */ Yt({
  ...it,
  scaleX: 1,
  scaleY: 1
});
var zt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(zt || (zt = {}));
const l0 = /* @__PURE__ */ pf(function(t) {
  var n, r, o, i;
  let {
    id: s,
    accessibility: a,
    autoScroll: c = !0,
    children: l,
    sensors: d = t0,
    collisionDetection: u = vw,
    measuring: f,
    modifiers: h,
    ...v
  } = t;
  const g = gf(i0, void 0, o0), [b, w] = g, [C, S] = aw(), [y, N] = se(zt.Uninitialized), I = y === zt.Initialized, {
    draggable: {
      active: P,
      nodes: x,
      translate: k
    },
    droppable: {
      containers: E
    }
  } = b, O = P != null ? x.get(P) : null, _ = le({
    initial: null,
    translated: null
  }), B = ee(() => {
    var Ne;
    return P != null ? {
      id: P,
      // It's possible for the active node to unmount while dragging
      data: (Ne = O?.data) != null ? Ne : n0,
      rect: _
    } : null;
  }, [P, O]), L = le(null), [G, M] = se(null), [A, R] = se(null), T = Qn(v, Object.values(v)), D = lr("DndDescribedBy", s), K = ee(() => E.getEnabled(), [E]), j = a0(f), {
    droppableRects: H,
    measureDroppableContainers: W,
    measuringScheduled: V
  } = Gw(K, {
    dragging: I,
    dependencies: [k.x, k.y],
    config: j.droppable
  }), z = Kw(x, P), Z = ee(() => A ? Qr(A) : null, [A]), X = gr(), J = Vw(z, j.draggable.measure);
  c0({
    activeNode: P != null ? x.get(P) : null,
    config: X.layoutShiftCompensation,
    initialRect: J,
    measure: j.draggable.measure
  });
  const q = Xa(z, j.draggable.measure, J), ne = Xa(z ? z.parentElement : null), ae = le({
    activatorEvent: null,
    active: null,
    activeNode: z,
    collisionRect: null,
    collisions: null,
    droppableRects: H,
    draggableNodes: x,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: E,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ve = E.getNodeFor((n = ae.current.over) == null ? void 0 : n.id), fe = e0({
    measure: j.dragOverlay.measure
  }), we = (r = fe.nodeRef.current) != null ? r : z, Ke = I ? (o = fe.rect) != null ? o : q : null, Mt = !!(fe.nodeRef.current && fe.rect), yt = Yw(Mt ? null : q), mn = yd(we ? Be(we) : null), We = qw(I ? ve ?? z : null), Ot = Qw(We), Qt = Sd(h, {
    transform: {
      x: k.x - yt.x,
      y: k.y - yt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: A,
    active: B,
    activeNodeRect: q,
    containerNodeRect: ne,
    draggingNodeRect: Ke,
    over: ae.current.over,
    overlayNodeRect: fe.rect,
    scrollableAncestors: We,
    scrollableAncestorRects: Ot,
    windowRect: mn
  }), pn = Z ? kn(Z, k) : null, $n = Xw(We), hr = Ja($n), Ro = Ja($n, [q]), et = kn(Qt, hr), _t = Ke ? ww(Ke, Qt) : null, en = B && _t ? u({
    active: B,
    collisionRect: _t,
    droppableRects: H,
    droppableContainers: K,
    pointerCoordinates: pn
  }) : null, gn = cd(en, "id"), [lt, mr] = se(null), Eo = Mt ? Qt : kn(Qt, Ro), Bn = bw(Eo, (i = lt?.rect) != null ? i : null, q), vn = le(null), zn = he(
    (Ne, Me) => {
      let {
        sensor: Oe,
        options: tt
      } = Me;
      if (L.current == null)
        return;
      const Te = x.get(L.current);
      if (!Te)
        return;
      const Fe = Ne.nativeEvent, Ue = new Oe({
        active: L.current,
        activeNode: Te,
        event: Fe,
        options: tt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ae,
        onAbort(Se) {
          if (!x.get(Se))
            return;
          const {
            onDragAbort: qe
          } = T.current, nt = {
            id: Se
          };
          qe?.(nt), C({
            type: "onDragAbort",
            event: nt
          });
        },
        onPending(Se, Ye, qe, nt) {
          if (!x.get(Se))
            return;
          const {
            onDragPending: Q
          } = T.current, re = {
            id: Se,
            constraint: Ye,
            initialCoordinates: qe,
            offset: nt
          };
          Q?.(re), C({
            type: "onDragPending",
            event: re
          });
        },
        onStart(Se) {
          const Ye = L.current;
          if (Ye == null)
            return;
          const qe = x.get(Ye);
          if (!qe)
            return;
          const {
            onDragStart: nt
          } = T.current, F = {
            activatorEvent: Fe,
            active: {
              id: Ye,
              data: qe.data,
              rect: _
            }
          };
          yr(() => {
            nt?.(F), N(zt.Initializing), w({
              type: ke.DragStart,
              initialCoordinates: Se,
              active: Ye
            }), C({
              type: "onDragStart",
              event: F
            }), M(vn.current), R(Fe);
          });
        },
        onMove(Se) {
          w({
            type: ke.DragMove,
            coordinates: Se
          });
        },
        onEnd: Ft(ke.DragEnd),
        onCancel: Ft(ke.DragCancel)
      });
      vn.current = Ue;
      function Ft(Se) {
        return async function() {
          const {
            active: qe,
            collisions: nt,
            over: F,
            scrollAdjustedTranslate: Q
          } = ae.current;
          let re = null;
          if (qe && Q) {
            const {
              cancelDrop: oe
            } = T.current;
            re = {
              activatorEvent: Fe,
              active: qe,
              collisions: nt,
              delta: Q,
              over: F
            }, Se === ke.DragEnd && typeof oe == "function" && await Promise.resolve(oe(re)) && (Se = ke.DragCancel);
          }
          L.current = null, yr(() => {
            w({
              type: Se
            }), N(zt.Uninitialized), mr(null), M(null), R(null), vn.current = null;
            const oe = Se === ke.DragEnd ? "onDragEnd" : "onDragCancel";
            if (re) {
              const be = T.current[oe];
              be?.(re), C({
                type: oe,
                event: re
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), pr = he((Ne, Me) => (Oe, tt) => {
    const Te = Oe.nativeEvent, Fe = x.get(tt);
    if (
      // Another sensor is already instantiating
      L.current !== null || // No active draggable
      !Fe || // Event has already been captured
      Te.dndKit || Te.defaultPrevented
    )
      return;
    const Ue = {
      active: Fe
    };
    Ne(Oe, Me.options, Ue) === !0 && (Te.dndKit = {
      capturedBy: Me.sensor
    }, L.current = tt, zn(Oe, Me));
  }, [x, zn]), Tt = jw(d, pr);
  Zw(d), ot(() => {
    q && y === zt.Initializing && N(zt.Initialized);
  }, [q, y]), ce(
    () => {
      const {
        onDragMove: Ne
      } = T.current, {
        active: Me,
        activatorEvent: Oe,
        collisions: tt,
        over: Te
      } = ae.current;
      if (!Me || !Oe)
        return;
      const Fe = {
        active: Me,
        activatorEvent: Oe,
        collisions: tt,
        delta: {
          x: et.x,
          y: et.y
        },
        over: Te
      };
      yr(() => {
        Ne?.(Fe), C({
          type: "onDragMove",
          event: Fe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [et.x, et.y]
  ), ce(
    () => {
      const {
        active: Ne,
        activatorEvent: Me,
        collisions: Oe,
        droppableContainers: tt,
        scrollAdjustedTranslate: Te
      } = ae.current;
      if (!Ne || L.current == null || !Me || !Te)
        return;
      const {
        onDragOver: Fe
      } = T.current, Ue = tt.get(gn), Ft = Ue && Ue.rect.current ? {
        id: Ue.id,
        rect: Ue.rect.current,
        data: Ue.data,
        disabled: Ue.disabled
      } : null, Se = {
        active: Ne,
        activatorEvent: Me,
        collisions: Oe,
        delta: {
          x: Te.x,
          y: Te.y
        },
        over: Ft
      };
      yr(() => {
        mr(Ft), Fe?.(Se), C({
          type: "onDragOver",
          event: Se
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gn]
  ), ot(() => {
    ae.current = {
      activatorEvent: A,
      active: B,
      activeNode: z,
      collisionRect: _t,
      collisions: en,
      droppableRects: H,
      draggableNodes: x,
      draggingNode: we,
      draggingNodeRect: Ke,
      droppableContainers: E,
      over: lt,
      scrollableAncestors: We,
      scrollAdjustedTranslate: et
    }, _.current = {
      initial: Ke,
      translated: _t
    };
  }, [B, z, en, _t, x, we, Ke, H, E, lt, We, et]), Bw({
    ...X,
    delta: k,
    draggingRect: _t,
    pointerCoordinates: pn,
    scrollableAncestors: We,
    scrollableAncestorRects: Ot
  });
  const tn = ee(() => ({
    active: B,
    activeNode: z,
    activeNodeRect: q,
    activatorEvent: A,
    collisions: en,
    containerNodeRect: ne,
    dragOverlay: fe,
    draggableNodes: x,
    droppableContainers: E,
    droppableRects: H,
    over: lt,
    measureDroppableContainers: W,
    scrollableAncestors: We,
    scrollableAncestorRects: Ot,
    measuringConfiguration: j,
    measuringScheduled: V,
    windowRect: mn
  }), [B, z, q, A, en, ne, fe, x, E, H, lt, W, We, Ot, j, V, mn]), Do = ee(() => ({
    activatorEvent: A,
    activators: Tt,
    active: B,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: D
    },
    dispatch: w,
    draggableNodes: x,
    over: lt,
    measureDroppableContainers: W
  }), [A, Tt, B, q, w, D, x, lt, W]);
  return xe.createElement(id.Provider, {
    value: S
  }, xe.createElement(ur.Provider, {
    value: Do
  }, xe.createElement(Cd.Provider, {
    value: tn
  }, xe.createElement(ko.Provider, {
    value: Bn
  }, l)), xe.createElement(s0, {
    disabled: a?.restoreFocus === !1
  })), xe.createElement(uw, {
    ...a,
    hiddenTextDescribedById: D
  }));
  function gr() {
    const Ne = G?.autoScrollEnabled === !1, Me = typeof c == "object" ? c.enabled === !1 : c === !1, Oe = I && !Ne && !Me;
    return typeof c == "object" ? {
      ...c,
      enabled: Oe
    } : {
      enabled: Oe
    };
  }
}), u0 = /* @__PURE__ */ Yt(null), ec = "button", d0 = "Draggable";
function f0(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = lr(d0), {
    activators: s,
    activatorEvent: a,
    active: c,
    activeNodeRect: l,
    ariaDescribedById: d,
    draggableNodes: u,
    over: f
  } = Pe(ur), {
    role: h = ec,
    roleDescription: v = "draggable",
    tabIndex: g = 0
  } = o ?? {}, b = c?.id === t, w = Pe(b ? ko : u0), [C, S] = Zr(), [y, N] = Zr(), I = Jw(s, t), P = Qn(n);
  ot(
    () => (u.set(t, {
      id: t,
      key: i,
      node: C,
      activatorNode: y,
      data: P
    }), () => {
      const k = u.get(t);
      k && k.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const x = ee(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": b && h === ec ? !0 : void 0,
    "aria-roledescription": v,
    "aria-describedby": d.draggable
  }), [r, h, g, b, v, d.draggable]);
  return {
    active: c,
    activatorEvent: a,
    activeNodeRect: l,
    attributes: x,
    isDragging: b,
    listeners: r ? void 0 : I,
    node: C,
    over: f,
    setNodeRef: S,
    setActivatorNodeRef: N,
    transform: w
  };
}
function Pd() {
  return Pe(Cd);
}
const h0 = "Droppable", m0 = {
  timeout: 25
};
function p0(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = lr(h0), {
    active: s,
    dispatch: a,
    over: c,
    measureDroppableContainers: l
  } = Pe(ur), d = le({
    disabled: n
  }), u = le(!1), f = le(null), h = le(null), {
    disabled: v,
    updateMeasurementsFor: g,
    timeout: b
  } = {
    ...m0,
    ...o
  }, w = Qn(g ?? r), C = he(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        l(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), S = Io({
    callback: C,
    disabled: v || !s
  }), y = he((x, k) => {
    S && (k && (S.unobserve(k), u.current = !1), x && S.observe(x));
  }, [S]), [N, I] = Zr(y), P = Qn(t);
  return ce(() => {
    !S || !N.current || (S.disconnect(), u.current = !1, S.observe(N.current));
  }, [N, S]), ce(
    () => (a({
      type: ke.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: N,
        rect: f,
        data: P
      }
    }), () => a({
      type: ke.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ce(() => {
    n !== d.current.disabled && (a({
      type: ke.SetDroppableDisabled,
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
function g0(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = se(null), [i, s] = se(null), a = Jr(n);
  return !n && !r && a && o(a), ot(() => {
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
  }, [t, r, i]), xe.createElement(xe.Fragment, null, n, r ? vf(r, {
    ref: s
  }) : null);
}
const v0 = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function b0(e) {
  let {
    children: t
  } = e;
  return xe.createElement(ur.Provider, {
    value: xd
  }, xe.createElement(ko.Provider, {
    value: v0
  }, t));
}
const y0 = {
  position: "fixed",
  touchAction: "none"
}, w0 = (e) => So(e) ? "transform 250ms ease" : void 0, x0 = /* @__PURE__ */ ro((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: s,
    rect: a,
    style: c,
    transform: l,
    transition: d = w0
  } = e;
  if (!a)
    return null;
  const u = o ? l : {
    ...l,
    scaleX: 1,
    scaleY: 1
  }, f = {
    ...y0,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: Wt.Transform.toString(u),
    transformOrigin: o && r ? fw(r, a) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...c
  };
  return xe.createElement(n, {
    className: s,
    style: f,
    ref: t
  }, i);
}), C0 = (e) => (t) => {
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
}, S0 = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Wt.Transform.toString(t)
  }, {
    transform: Wt.Transform.toString(n)
  }];
}, P0 = {
  duration: 250,
  easing: "ease",
  keyframes: S0,
  sideEffects: /* @__PURE__ */ C0({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function I0(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return Co((i, s) => {
    if (t === null)
      return;
    const a = n.get(i);
    if (!a)
      return;
    const c = a.node.current;
    if (!c)
      return;
    const l = wd(s);
    if (!l)
      return;
    const {
      transform: d
    } = Be(s).getComputedStyle(s), u = ud(d);
    if (!u)
      return;
    const f = typeof t == "function" ? t : k0(t);
    return vd(c, o.draggable.measure), f({
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
function k0(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...P0,
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
    }), [v] = h, g = h[h.length - 1];
    if (JSON.stringify(v) === JSON.stringify(g))
      return;
    const b = r?.({
      active: s,
      dragOverlay: a,
      ...l
    }), w = a.node.animate(h, {
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
let tc = 0;
function N0(e) {
  return ee(() => {
    if (e != null)
      return tc++, tc;
  }, [e]);
}
const R0 = /* @__PURE__ */ xe.memo((e) => {
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
    droppableContainers: g,
    dragOverlay: b,
    over: w,
    measuringConfiguration: C,
    scrollableAncestors: S,
    scrollableAncestorRects: y,
    windowRect: N
  } = Pd(), I = Pe(ko), P = N0(u?.id), x = Sd(s, {
    activatorEvent: d,
    active: u,
    activeNodeRect: f,
    containerNodeRect: h,
    draggingNodeRect: b.rect,
    over: w,
    overlayNodeRect: b.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: y,
    transform: I,
    windowRect: N
  }), k = Ts(f), E = I0({
    config: r,
    draggableNodes: v,
    droppableContainers: g,
    measuringConfiguration: C
  }), O = k ? b.setRef : void 0;
  return xe.createElement(b0, null, xe.createElement(g0, {
    animation: E
  }, u && P ? xe.createElement(x0, {
    key: P,
    id: u.id,
    ref: O,
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
    transform: x
  }, n) : null));
});
function Fs(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function E0(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function Mr(e) {
  return e !== null && e >= 0;
}
function D0(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function A0(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Ls = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Fs(t, r, n), s = t[o], a = i[o];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, Id = "Sortable", kd = /* @__PURE__ */ xe.createContext({
  activeIndex: -1,
  containerId: Id,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Ls,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function M0(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Ls,
    disabled: i = !1
  } = e;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: c,
    over: l,
    measureDroppableContainers: d
  } = Pd(), u = lr(Id, n), f = a.rect !== null, h = ee(() => r.map((I) => typeof I == "object" && "id" in I ? I.id : I), [r]), v = s != null, g = s ? h.indexOf(s.id) : -1, b = l ? h.indexOf(l.id) : -1, w = le(h), C = !D0(h, w.current), S = b !== -1 && g === -1 || C, y = A0(i);
  ot(() => {
    C && v && d(h);
  }, [C, h, v, d]), ce(() => {
    w.current = h;
  }, [h]);
  const N = ee(
    () => ({
      activeIndex: g,
      containerId: u,
      disabled: y,
      disableTransforms: S,
      items: h,
      overIndex: b,
      useDragOverlay: f,
      sortedRects: E0(h, c),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, u, y.draggable, y.droppable, S, h, b, c, f, o]
  );
  return xe.createElement(kd.Provider, {
    value: N
  }, t);
}
const O0 = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Fs(n, r, o).indexOf(t);
}, _0 = (e) => {
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
}, T0 = {
  duration: 200,
  easing: "ease"
}, Nd = "transform", F0 = /* @__PURE__ */ Wt.Transition.toString({
  property: Nd,
  duration: 0,
  easing: "linear"
}), L0 = {
  roleDescription: "sortable"
};
function $0(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, s] = se(null), a = le(n);
  return ot(() => {
    if (!t && n !== a.current && r.current) {
      const c = o.current;
      if (c) {
        const l = Ln(r.current, {
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
function B0(e) {
  let {
    animateLayoutChanges: t = _0,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = O0,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: l = T0
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: f,
    disabled: h,
    disableTransforms: v,
    sortedRects: g,
    overIndex: b,
    useDragOverlay: w,
    strategy: C
  } = Pe(kd), S = z0(r, h), y = d.indexOf(s), N = ee(() => ({
    sortable: {
      containerId: u,
      index: y,
      items: d
    },
    ...o
  }), [u, o, y, d]), I = ee(() => d.slice(d.indexOf(s)), [d, s]), {
    rect: P,
    node: x,
    isOver: k,
    setNodeRef: E
  } = p0({
    id: s,
    data: N,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: I,
      ...c
    }
  }), {
    active: O,
    activatorEvent: _,
    activeNodeRect: B,
    attributes: L,
    setNodeRef: G,
    listeners: M,
    isDragging: A,
    over: R,
    setActivatorNodeRef: T,
    transform: D
  } = f0({
    id: s,
    data: N,
    attributes: {
      ...L0,
      ...n
    },
    disabled: S.draggable
  }), K = Zy(E, G), j = !!O, H = j && !v && Mr(f) && Mr(b), W = !w && A, V = W && H ? D : null, Z = H ? V ?? (a ?? C)({
    rects: g,
    activeNodeRect: B,
    activeIndex: f,
    overIndex: b,
    index: y
  }) : null, X = Mr(f) && Mr(b) ? i({
    id: s,
    items: d,
    activeIndex: f,
    overIndex: b
  }) : y, J = O?.id, q = le({
    activeId: J,
    items: d,
    newIndex: X,
    containerId: u
  }), ne = d !== q.current.items, ae = t({
    active: O,
    containerId: u,
    isDragging: A,
    isSorting: j,
    id: s,
    index: y,
    items: d,
    newIndex: q.current.newIndex,
    previousItems: q.current.items,
    previousContainerId: q.current.containerId,
    transition: l,
    wasDragging: q.current.activeId != null
  }), ve = $0({
    disabled: !ae,
    index: y,
    node: x,
    rect: P
  });
  return ce(() => {
    j && q.current.newIndex !== X && (q.current.newIndex = X), u !== q.current.containerId && (q.current.containerId = u), d !== q.current.items && (q.current.items = d);
  }, [j, X, u, d]), ce(() => {
    if (J === q.current.activeId)
      return;
    if (J != null && q.current.activeId == null) {
      q.current.activeId = J;
      return;
    }
    const we = setTimeout(() => {
      q.current.activeId = J;
    }, 50);
    return () => clearTimeout(we);
  }, [J]), {
    active: O,
    activeIndex: f,
    attributes: L,
    data: N,
    rect: P,
    index: y,
    newIndex: X,
    items: d,
    isOver: k,
    isSorting: j,
    isDragging: A,
    listeners: M,
    node: x,
    overIndex: b,
    over: R,
    setNodeRef: K,
    setActivatorNodeRef: T,
    setDroppableNodeRef: E,
    setDraggableNodeRef: G,
    transform: ve ?? Z,
    transition: fe()
  };
  function fe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ve || // Or to prevent items jumping to back to their "new" position when items change
      ne && q.current.newIndex === y
    )
      return F0;
    if (!(W && !So(_) || !l) && (j || ae))
      return Wt.Transition.toString({
        ...l,
        property: Nd
      });
  }
}
function z0(e, t) {
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
function no(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const H0 = [de.Down, de.Right, de.Up, de.Left], K0 = (e, t) => {
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
  if (H0.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const c = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const f = o.get(u.id);
      if (f)
        switch (e.code) {
          case de.Down:
            r.top < f.top && c.push(u);
            break;
          case de.Up:
            r.top > f.top && c.push(u);
            break;
          case de.Left:
            r.left > f.left && c.push(u);
            break;
          case de.Right:
            r.left < f.left && c.push(u);
            break;
        }
    });
    const l = pw({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: c
    });
    let d = cd(l, "id");
    if (d === s?.id && l.length > 1 && (d = l[1].id), d != null) {
      const u = i.get(n.id), f = i.get(d), h = f ? o.get(f.id) : null, v = f?.node.current;
      if (v && h && u && f) {
        const b = Po(v).some((I, P) => a[P] !== I), w = Rd(u, f), C = j0(u, f), S = b || !w ? {
          x: 0,
          y: 0
        } : {
          x: C ? r.width - h.width : 0,
          y: C ? r.height - h.height : 0
        }, y = {
          x: h.left,
          y: h.top
        };
        return S.x && S.y ? y : er(y, S);
      }
    }
  }
};
function Rd(e, t) {
  return !no(e) || !no(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function j0(e, t) {
  return !no(e) || !no(t) || !Rd(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function G0({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: s, listeners: a, setNodeRef: c, transform: l, transition: d, isDragging: u } = B0({
    id: o(e),
    disabled: i
  }), f = {
    transform: Wt.Transform.toString(l),
    transition: d
  };
  return /* @__PURE__ */ $("div", { ref: c, style: f, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !i && (r ? /* @__PURE__ */ m("div", { ...s, ...a, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ m(
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
function V0({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ m("div", { className: "rotate-2", children: n(e, t, !0) });
}
function W0({
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
  const [g, b] = se(null), w = dw(
    Ka(_s),
    Ka(Ms, {
      coordinateGetter: K0
    })
  ), C = (I) => {
    const P = h.find((x) => o(x) === I.active.id);
    P && u && u(P) || b(I.active.id);
  }, S = (I) => {
    const { active: P, over: x } = I;
    if (!x || P.id === x.id) {
      b(null);
      return;
    }
    const k = h.find((_) => o(_) === P.id), E = h.findIndex((_) => o(_) === P.id), O = h.findIndex((_) => o(_) === x.id);
    if (k && u && u(k)) {
      b(null);
      return;
    }
    if (f && !f(k, O, h)) {
      b(null);
      return;
    }
    if (E !== -1 && O !== -1) {
      const _ = Fs(h, E, O);
      v(_), t(_);
    }
    b(null);
  }, y = h.find((I) => o(I) === g), N = y ? h.findIndex((I) => o(I) === g) : -1;
  return /* @__PURE__ */ $("div", { className: `w-full ${s}`, children: [
    a && /* @__PURE__ */ m("div", { className: "mb-6", children: a() }),
    h.length === 0 && c ? c() : /* @__PURE__ */ m("div", { className: "mb-6", children: /* @__PURE__ */ $(
      l0,
      {
        sensors: w,
        collisionDetection: mw,
        onDragStart: C,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ m(M0, { items: h.map(o), strategy: Ls, children: /* @__PURE__ */ m("div", { className: i, children: h.map((I, P) => /* @__PURE__ */ m(
            G0,
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
          /* @__PURE__ */ m(R0, { children: y ? d ? /* @__PURE__ */ m("div", { className: "rotate-2 shadow-lg", children: d(y, N) }) : /* @__PURE__ */ m(V0, { item: y, index: N, renderItem: n }) : null })
        ]
      }
    ) }),
    l && /* @__PURE__ */ $("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ m("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ $("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        h.length,
        " | Active: ",
        g || "none"
      ] }),
      /* @__PURE__ */ $("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        h.map((I, P) => `${P + 1}:${o(I).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const U0 = Yc(
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
function $s({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ m("div", { className: ue(U0({ variant: t }), e), ...n });
}
function Y0({
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
        /* @__PURE__ */ m(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ $("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ m("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ m("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ m("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ m($s, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${s ? "opacity-75" : ""}`, children: s ? /* @__PURE__ */ m(ii, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ $($e, { children: [
          /* @__PURE__ */ m("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ m(Gc, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function q0({
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
  const [f, h] = p.useState(n), [v, g] = p.useState(!1), b = (k) => k.id;
  p.useEffect(() => {
    if (!e)
      h(n), g(!1);
    else if (!v)
      h(n);
    else {
      const k = new Set(f.map(b));
      (k.size !== n.length || n.some((O) => !k.has(b(O)))) && h(n);
    }
  }, [n, e, v, f]);
  const w = (k) => {
    h(k), g(!0);
  }, C = () => {
    r(f), g(!1), t(!1);
  }, S = () => {
    h(n), g(!1), t(!1);
  }, y = p.useMemo(() => (!i || typeof i != "function") && s ? Rs({ pageComponents: s, payload: a, setup: c }) : null, [i, s, a, c]), N = (k, E, O) => {
    const _ = k.strictPosition, L = !!o && !(_ === "start" || _ === "end"), G = (A) => {
      A.preventDefault(), A.stopPropagation(), o && (o(k), h((R) => R.filter((T) => b(T) !== b(k))), g(!0));
    }, M = i && typeof i == "function" ? i(k, E, O) : y ? y(k, E, O) : /* @__PURE__ */ m(Y0, { page: k, index: E, isDragging: O });
    return /* @__PURE__ */ $("div", { className: "relative inline-block align-top", children: [
      M,
      L && /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: G,
          onPointerDown: (A) => A.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ m(Gc, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ m(ht, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, I = () => /* @__PURE__ */ $("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ m("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ m(da, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ m("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ m("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), P = p.useCallback((k) => {
    const E = k.strictPosition;
    return E === "start" || E === "end";
  }, []), x = p.useCallback((k, E, O) => {
    const _ = k.strictPosition;
    if (_ === "start" || _ === "end")
      return !1;
    let B = -1, L = O.length;
    for (let G = 0; G < O.length; G++) {
      const M = O[G].strictPosition;
      M === "start" ? B = G : M === "end" && L === O.length && (L = G);
    }
    return !(E <= B || E >= L);
  }, []);
  return /* @__PURE__ */ m(ed, { open: e, onOpenChange: (k) => {
    k || S();
  }, children: /* @__PURE__ */ $(
    Ps,
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
        /* @__PURE__ */ m(Is, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ $("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ m("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ m(da, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ $("div", { className: "flex-1", children: [
            /* @__PURE__ */ m(ks, { className: "text-base font-medium text-gray-900 leading-tight", children: l }),
            /* @__PURE__ */ m(Ns, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ $($s, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            f.length,
            " ",
            f.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ m("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ m("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ m(
          W0,
          {
            items: f,
            onChange: w,
            renderItem: N,
            keyExtractor: b,
            renderEmptyState: I,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: P,
            canDropAt: x
          }
        ) }) }),
        /* @__PURE__ */ $(nd, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ m(
            _e,
            {
              variant: "outline",
              onClick: S,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ m(
            _e,
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
function X0({
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
  measurementPageNo: g,
  measurementTotalPages: b,
  dataBinding: w,
  flowPageIndex: C = 0,
  flowChunksByFlowId: S,
  measureFlow: y = !1,
  flowMeasurementKey: N,
  flowMeasurementVersion: I,
  onFlowMeasurement: P,
  renderVisible: x = !0
}) {
  const k = typeof u == "function" ? (A) => u({ pageNo: A, pageId: e }) : () => u, E = n || t || e, _ = [E ? `uhuu-page--${E}` : "", f].filter(Boolean).join(" "), B = (A = h, R = v) => r ? /* @__PURE__ */ m(
    r,
    {
      payload: o,
      pagePayload: i,
      integration: s,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: A,
      totalPages: R,
      page: a,
      parentGroup: c,
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
  ), G = p.useCallback((A) => {
    N && P?.(N, A);
  }, [N, P]), M = p.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: I,
      registerMeasurement: G
    }),
    [I, G]
  );
  return /* @__PURE__ */ $($e, { children: [
    y && P && N && /* @__PURE__ */ m(
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
        children: /* @__PURE__ */ m(ti, { setup: l, children: /* @__PURE__ */ m(ni, { className: _, pageNo: h, "data-page-key": E, children: /* @__PURE__ */ m(Yn.Provider, { value: M, children: B(
          g ?? h,
          b ?? v
        ) }) }) })
      }
    ),
    x && /* @__PURE__ */ m(ti, { setup: l, children: /* @__PURE__ */ $(
      ni,
      {
        className: _,
        pageNo: h,
        overlay: ({ pageNo: A }) => k(A),
        "data-page-key": E,
        children: [
          d,
          /* @__PURE__ */ m(Yn.Provider, { value: L, children: B(h, v) })
        ]
      }
    ) })
  ] });
}
const Ed = p.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m(
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
Ed.displayName = "Select";
var Z0 = Object.defineProperty, Ut = (e, t) => Z0(e, "name", { value: t, configurable: !0 }), Bs = "Switch", [J0, RC] = /* @__PURE__ */ st(Bs), [Q0, zs] = J0(Bs);
function Dd(e) {
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
  } = e, [f, h] = un({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Bs
  }), [v, g] = p.useState(null), [b, w] = p.useState(null), C = p.useRef(!1), [S, y] = p.useReducer(
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
    setControl: g,
    name: a,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: C,
    userInteractionCount: S,
    onUserInteraction: y,
    required: l,
    defaultChecked: o,
    isFormControl: N,
    bubbleInput: b,
    setBubbleInput: w
  };
  return /* @__PURE__ */ m(Q0, { scope: t, ...I, children: Md(u) ? u(I) : r });
}
Ut(Dd, "SwitchProvider");
var ex = "SwitchTrigger", tx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ut(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
      isFormControl: g,
      bubbleInput: b
    } = zs(ex, t), w = ge(o, u), C = p.useRef(l);
    return p.useEffect(() => {
      const S = s ? i?.ownerDocument.getElementById(s) : i?.form;
      if (S instanceof HTMLFormElement) {
        const y = /* @__PURE__ */ Ut(() => f(C.current), "reset");
        return S.addEventListener("reset", y), () => S.removeEventListener("reset", y);
      }
    }, [i, s, f]), /* @__PURE__ */ m(
      ye.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": d,
        "data-state": Hs(l),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: a,
        ...r,
        ref: w,
        onClick: te(n, (S) => {
          v(), f((y) => !y), b && g && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), Ad = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ut(function(t, n) {
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
    return /* @__PURE__ */ m(
      Dd,
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
          /* @__PURE__ */ m(
            tx,
            {
              ...f,
              ref: n,
              __scopeSwitch: r
            }
          ),
          h && /* @__PURE__ */ m(
            ix,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), nx = "SwitchThumb", rx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Ut(function(t, n) {
    const { __scopeSwitch: r, ...o } = t, i = zs(nx, r);
    return /* @__PURE__ */ m(
      ye.span,
      {
        "data-state": Hs(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), ox = "SwitchBubbleInput", ix = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ut(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
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
      bubbleInput: g,
      setBubbleInput: b
    } = zs(ox, t), w = ge(o, b), C = mo(i), S = p.useRef(!1), y = p.useRef(c), N = p.useRef(a);
    p.useEffect(() => {
      const P = g;
      if (!P) return;
      const x = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, O = a !== N.current;
      N.current = a;
      const _ = y.current !== c;
      y.current = c;
      const B = !(O && s.current);
      if (_ && E) {
        S.current = !O;
        const L = new Event("click", { bubbles: B });
        E.call(P, c), P.dispatchEvent(L), S.current = !1;
      }
    }, [g, c, s, a]);
    const I = p.useRef(c);
    return /* @__PURE__ */ m(
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
        ref: w,
        onClick: te(n, (P) => {
          S.current && P.stopPropagation();
        }),
        style: {
          ...r.style,
          ...C,
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
function Md(e) {
  return typeof e == "function";
}
Ut(Md, "isFunction");
function Hs(e) {
  return e ? "checked" : "unchecked";
}
Ut(Hs, "getState");
const Od = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Ad,
  {
    ref: n,
    className: ue(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m(
      rx,
      {
        className: ue(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Od.displayName = Ad.displayName;
var sx = Object.defineProperty, ax = (e, t) => sx(e, "name", { value: t, configurable: !0 });
function Ks(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
ax(Ks, "clamp");
var cx = Object.defineProperty, lx = (e, t) => cx(e, "name", { value: t, configurable: !0 });
function _d(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
lx(_d, "usePrevious");
var ux = Object.defineProperty, me = (e, t) => ux(e, "name", { value: t, configurable: !0 }), Td = ["PageUp", "PageDown"], Fd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ld = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, dr = "Slider", [Ri, dx, fx] = /* @__PURE__ */ io(dr), [js, EC] = /* @__PURE__ */ st(dr, [
  fx
]), [hx, fr] = js(dr), $d = /* @__PURE__ */ p.forwardRef(
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
      inverted: v = !1,
      form: g,
      ...b
    } = t, w = p.useRef(/* @__PURE__ */ new Set()), C = p.useRef(0), S = p.useRef(!1), N = a === "horizontal" ? mx : px, [I, P] = p.useState(null), x = ge(n, P), [k = [], E] = un({
      prop: u,
      defaultProp: d,
      onChange: /* @__PURE__ */ me((A) => {
        [...w.current][C.current]?.focus({
          preventScroll: !0,
          focusVisible: S.current
        }), S.current = !1, f(A);
      }, "onChange")
    }), O = p.useRef(k), _ = p.useRef(k);
    p.useEffect(() => {
      const A = g ? I?.ownerDocument.getElementById(g) : I?.closest("form");
      if (A instanceof HTMLFormElement) {
        const R = /* @__PURE__ */ me(() => E(_.current), "reset");
        return A.addEventListener("reset", R), () => A.removeEventListener("reset", R);
      }
    }, [I, g, E]);
    function B(A) {
      const R = Wd(k, A);
      M(A, R);
    }
    me(B, "handleSlideStart");
    function L(A) {
      M(A, C.current);
    }
    me(L, "handleSlideMove");
    function G() {
      String(k) !== String(O.current) && h(k);
    }
    me(G, "handleSlideEnd");
    function M(A, R, { commit: T } = { commit: !1 }) {
      const D = Vs(s), K = Un(Math.round((A - o) / s) * s + o, D), j = Ks(K, [o, i]);
      E((H = []) => {
        const W = Gd(H, j, R);
        if (qd(W, l * s)) {
          C.current = W.indexOf(j);
          const V = String(W) !== String(H);
          return V && T && h(W), V ? W : H;
        } else
          return H;
      });
    }
    return me(M, "updateValues"), /* @__PURE__ */ m(
      hx,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: c,
        min: o,
        max: i,
        valueIndexToChangeRef: C,
        thumbs: w.current,
        values: k,
        orientation: a,
        form: g,
        children: /* @__PURE__ */ m(Ri.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ m(Ri.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ m(
          N,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...b,
            ref: x,
            onPointerDown: te(b.onPointerDown, () => {
              c || (O.current = k, S.current = !1);
            }),
            min: o,
            max: i,
            inverted: v,
            onSlideStart: c ? void 0 : B,
            onSlideMove: c ? void 0 : L,
            onSlideEnd: c ? void 0 : G,
            onHomeKeyDown: () => {
              c || (S.current = !0, M(o, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (S.current = !0, M(i, k.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: A, direction: R }) => {
              if (!c) {
                S.current = !0;
                const K = Td.includes(A.key) || A.shiftKey && Fd.includes(A.key) ? 10 : 1, j = C.current, H = k[j], W = Xd(H, {
                  min: o,
                  step: s,
                  direction: R,
                  multiplier: K
                });
                M(W, j, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [Bd, zd] = js(dr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), mx = /* @__PURE__ */ p.forwardRef(
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
    } = t, [f, h] = p.useState(null), v = ge(n, h), g = p.useRef(void 0), b = so(i), w = b === "ltr", C = w && !s || !w && s;
    function S(y) {
      const N = g.current || f.getBoundingClientRect(), I = [0, N.width], x = No(I, C ? [r, o] : [o, r]);
      return g.current = N, x(y - N.left);
    }
    return me(S, "getValueFromPointer"), /* @__PURE__ */ m(
      Bd,
      {
        scope: t.__scopeSlider,
        startEdge: C ? "left" : "right",
        endEdge: C ? "right" : "left",
        direction: C ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ m(
          Hd,
          {
            dir: b,
            "data-orientation": "horizontal",
            ...u,
            ref: v,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (y) => {
              const N = S(y.clientX);
              a?.(N);
            },
            onSlideMove: (y) => {
              const N = S(y.clientX);
              c?.(N);
            },
            onSlideEnd: () => {
              g.current = void 0, l?.();
            },
            onStepKeyDown: (y) => {
              const I = Ld[C ? "from-left" : "from-right"].includes(y.key);
              d?.({ event: y, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), px = /* @__PURE__ */ p.forwardRef(
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
    } = t, u = p.useRef(null), f = ge(n, u), h = p.useRef(void 0), v = !i;
    function g(b) {
      const w = h.current || u.current.getBoundingClientRect(), C = [0, w.height], y = No(C, v ? [o, r] : [r, o]);
      return h.current = w, y(b - w.top);
    }
    return me(g, "getValueFromPointer"), /* @__PURE__ */ m(
      Bd,
      {
        scope: t.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ m(
          Hd,
          {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (b) => {
              const w = g(b.clientY);
              s?.(w);
            },
            onSlideMove: (b) => {
              const w = g(b.clientY);
              a?.(w);
            },
            onSlideEnd: () => {
              h.current = void 0, c?.();
            },
            onStepKeyDown: (b) => {
              const C = Ld[v ? "from-bottom" : "from-top"].includes(b.key);
              l?.({ event: b, direction: C ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), Hd = /* @__PURE__ */ p.forwardRef(
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
    } = t, u = fr(dr, r);
    return /* @__PURE__ */ m(
      ye.span,
      {
        ...d,
        ref: n,
        onKeyDown: te(t.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : Td.concat(Fd).includes(f.key) && (l(f), f.preventDefault());
        }),
        onPointerDown: te(t.onPointerDown, (f) => {
          const h = f.target;
          h.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : o(f);
        }),
        onPointerMove: te(t.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: te(t.onPointerUp, (f) => {
          const h = f.target;
          h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), s(f));
        })
      }
    );
  }, "SliderImpl")
), gx = "SliderTrack", vx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = fr(gx, r);
    return /* @__PURE__ */ m(
      ye.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...o,
        ref: n
      }
    );
  }, "SliderTrack")
), nc = "SliderRange", bx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = fr(nc, r), s = zd(nc, r), a = p.useRef(null), c = ge(n, a), l = i.values.length, d = i.values.map(
      (h) => Gs(h, i.min, i.max)
    ), u = l > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
    return /* @__PURE__ */ m(
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
), yx = "SliderThumb", [wx, Kd] = js(yx), xx = "SliderThumbProvider";
function jd(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, i = fr(xx, t), s = dx(t), [a, c] = p.useState(null), l = p.useMemo(
    () => a ? s().findIndex((b) => b.ref.current === a) : -1,
    [s, a]
  ), d = mo(a), u = a ? !!i.form || !!a.closest("form") : !0, f = i.values[l], h = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0), v = f === void 0 ? 0 : Gs(f, i.min, i.max);
  p.useEffect(() => {
    if (a)
      return i.thumbs.add(a), () => {
        i.thumbs.delete(a);
      };
  }, [a, i.thumbs]);
  const g = {
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
  return /* @__PURE__ */ m(wx, { scope: t, ...g, children: Zd(o) ? o(g) : r });
}
me(jd, "SliderThumbProvider");
var Zo = "SliderThumbTrigger", Cx = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = fr(Zo, r), s = zd(Zo, r), { index: a, value: c, percent: l, size: d, onThumbChange: u } = Kd(
      Zo,
      r
    ), f = ge(n, u), h = Vd(a, i.values.length), v = d?.[s.size], g = v ? Ud(v, l, s.direction) : 0;
    return /* @__PURE__ */ m(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${l}% + ${g}px)`
        },
        children: /* @__PURE__ */ m(Ri.ItemSlot, { scope: r, children: /* @__PURE__ */ m(
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
            onFocus: te(t.onFocus, () => {
              i.valueIndexToChangeRef.current = a;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), Sx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ me(function(t, n) {
    const { __scopeSlider: r, name: o, ...i } = t;
    return /* @__PURE__ */ m(
      jd,
      {
        __scopeSlider: r,
        name: o,
        internal_do_not_use_render: ({ index: s, isFormControl: a }) => /* @__PURE__ */ $($e, { children: [
          /* @__PURE__ */ m(
            Cx,
            {
              ...i,
              ref: n,
              __scopeSlider: r
            }
          ),
          a ? /* @__PURE__ */ m(
            Ix,
            {
              __scopeSlider: r
            },
            s
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), Px = "SliderBubbleInput", Ix = /* @__PURE__ */ p.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function({ __scopeSlider: t, ...n }, r) {
    const { value: o, name: i, form: s } = Kd(Px, t), a = p.useRef(null), c = ge(a, r), l = _d(o);
    return p.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
      if (l !== o && h) {
        const v = new Event("input", { bubbles: !0 });
        h.call(d, o), d.dispatchEvent(v);
      }
    }, [l, o]), /* @__PURE__ */ m(
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
function Gd(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
me(Gd, "getNextSortedValues");
function Gs(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return Ks(i, [0, 100]);
}
me(Gs, "convertValueToPercentage");
function Vd(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
me(Vd, "getLabel");
function Wd(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
me(Wd, "getClosestValueIndex");
function Ud(e, t, n) {
  const r = e / 2, i = No([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
me(Ud, "getThumbInBoundsOffset");
function Yd(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
me(Yd, "getStepsBetweenValues");
function qd(e, t) {
  if (t > 0) {
    const n = Yd(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
me(qd, "hasMinStepsBetweenValues");
function No(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
me(No, "linearScale");
function Vs(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), i = r.split(".")[1] || "", s = Number(o);
    return Math.max(0, i.length - s);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
me(Vs, "getDecimalCount");
function Un(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
me(Un, "roundValue");
function Xd(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const i = Vs(n), s = (e - t) / n, a = Math.round(s), c = Un(a * n + t, i) === Un(e, i);
  let l;
  return c ? l = a + o * r : r > 0 ? l = Math.ceil(s) : l = Math.floor(s), Un(l * n + t, i);
}
me(Xd, "getNextStepValue");
function Zd(e) {
  return typeof e == "function";
}
me(Zd, "isFunction");
const Ws = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ $(
  $d,
  {
    ref: n,
    className: ue(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ m(vx, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ m(bx, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ m(Sx, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Ws.displayName = $d.displayName;
var kx = Object.defineProperty, Nx = (e, t) => kx(e, "name", { value: t, configurable: !0 }), Rx = /* @__PURE__ */ p.forwardRef(
  /* @__PURE__ */ Nx(function(t, n) {
    return /* @__PURE__ */ m(
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
), Jd = Rx;
const Sn = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Jd,
  {
    ref: n,
    className: ue(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Sn.displayName = Jd.displayName;
function Qd(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((s) => typeof s == "function" ? s(o) : s === o.id || s === o.templateId || o.componentKey === s) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function Ex({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = Qd(e, t), o = (i) => {
    const s = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ m(Sn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ m(
            Ed,
            {
              id: i.id,
              value: String(s),
              onChange: (a) => n(i, t, a.target.value),
              className: "w-full text-sm",
              children: i.options.map((a) => /* @__PURE__ */ m("option", { value: a.value, children: a.label }, a.value))
            }
          )
        ] }, i.id);
      case "toggle": {
        const a = typeof s == "boolean" ? s : s === "true";
        return /* @__PURE__ */ $("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ m(Sn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ m(
            Od,
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
            /* @__PURE__ */ m(Sn, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ m("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: a })
          ] }),
          /* @__PURE__ */ m(
            Ws,
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
          /* @__PURE__ */ m(Sn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ m(
              _e,
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
                children: /* @__PURE__ */ m(gm, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ m("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ m("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: a }) }),
            /* @__PURE__ */ m(
              _e,
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
                children: /* @__PURE__ */ m(ht, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const a = String(s);
        return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ m(Sn, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ m("div", { className: "flex flex-wrap gap-1.5", children: i.options.map((c) => {
            const l = a === c.value;
            return /* @__PURE__ */ m(
              "button",
              {
                onClick: () => n(i, t, c.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${l ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: c.hex || c.value },
                type: "button",
                title: `${c.label}${c.hex ? ` (${c.hex})` : ""}`,
                children: l && /* @__PURE__ */ m(Ki, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
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
  return /* @__PURE__ */ m("div", { className: "space-y-3", children: r.map((i) => o(i)) });
}
function Dx({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || Qd(e, t).length === 0 ? null : /* @__PURE__ */ $(or, { modal: !1, children: [
    /* @__PURE__ */ m(ir, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ $(
      _e,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ m(jc, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ m(_n, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ m(
      Ex,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function Ax({
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
  const [h, v] = se(!1), [g, b] = se(!1), [w, C] = se(e), S = le(null);
  ce(() => {
    C(e);
  }, [e]), ce(() => {
    g && setTimeout(() => {
      S.current?.focus(), S.current?.select();
    }, 10);
  }, [g]);
  const y = () => {
    const P = w.trim();
    P && P !== e && a?.(P), b(!1);
  }, N = n || r || o || i || s, I = t || N;
  return g ? /* @__PURE__ */ m(
    "input",
    {
      ref: S,
      value: w,
      onChange: (P) => C(P.target.value),
      onKeyDown: (P) => {
        P.key === "Enter" && y(), P.key === "Escape" && (C(e), b(!1)), P.stopPropagation();
      },
      onBlur: y,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : I ? /* @__PURE__ */ $(or, { open: h, onOpenChange: v, modal: !1, children: [
    /* @__PURE__ */ m(ir, { asChild: !0, children: /* @__PURE__ */ $(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ m("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ m(Kc, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ $(_n, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ $(je, { onSelect: (P) => {
        P.preventDefault(), v(!1), b(!0);
      }, children: [
        /* @__PURE__ */ m(bm, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && N && /* @__PURE__ */ m(sn, {}),
      n && /* @__PURE__ */ $(je, { onClick: c, children: [
        /* @__PURE__ */ m(Qh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ $(je, { onClick: l, children: [
        /* @__PURE__ */ m(Xh, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ m(sn, {}),
      o && /* @__PURE__ */ $(je, { onClick: d, children: [
        /* @__PURE__ */ m(ht, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ $(je, { onClick: u, children: [
        /* @__PURE__ */ m(lm, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      s && /* @__PURE__ */ m(sn, {}),
      s && /* @__PURE__ */ $(je, { onClick: f, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ m(Sm, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ m("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function Mx(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: s,
    setup: a,
    stateKey: c = hn,
    resolveNewItem: l,
    notifyError: d,
    pageFilter: u
  } = e, [f, h] = se(t), [v, g] = se(!1), b = le(t);
  ce(() => {
    try {
      const M = JSON.stringify(b.current), A = JSON.stringify(t);
      M !== A && (b.current = t, h(t));
    } catch {
      b.current !== t && (b.current = t, h(t));
    }
  }, [t]);
  const w = Pe(sr), C = he((M) => {
    h(M);
    const A = $u(M, c);
    w?.mergePageEditorState && w.mergePageEditorState(M, c), o?.(A), r?.(M, A);
  }, [r, o, c, w]), S = ee(() => {
    const M = /* @__PURE__ */ new Map();
    return f.forEach((A) => {
      const R = A.templateId ?? A.id;
      M.set(R, (M.get(R) ?? 0) + 1), ze(A) && A.pages?.forEach((T) => {
        const D = T.templateId ?? T.id;
        M.set(D, (M.get(D) ?? 0) + 1);
      });
    }), M;
  }, [f]), y = ee(() => n.filter((M) => {
    if (M.kind === "page") {
      const j = M, H = j.templateId ?? j.id, W = S.get(H) ?? 0, V = j.repeatable ?? !1, z = j.maxInstances ?? null;
      return !(!V && W > 0 || z !== null && W >= z);
    }
    const A = M, R = A.templateId ?? A.id, T = S.get(R) ?? 0, D = A.repeatable ?? !1, K = A.maxInstances ?? null;
    return !(!D && T > 0 || D && K !== null && T >= K);
  }), [n, S]), N = ee(() => kt(f), [f]), I = he(async (M, A) => {
    const R = (z) => z ? typeof z == "string" ? z : z.mode ?? "optional" : "none", T = (z, Z) => {
      if (!z) return [];
      if (Array.isArray(z)) return z;
      try {
        const X = z(Z);
        if (!Array.isArray(X))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof X), [];
        const J = X.filter((q) => typeof q == "string");
        return J.length !== X.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), J;
      } catch (X) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", X), [];
      }
    }, K = ((z) => {
      if (z.kind === "page") {
        const ne = z, ae = ne.templateId ?? ne.id, ve = ne.componentKey ?? ne.id;
        return zu(ae, ve, {
          label: ne.label,
          className: ne.className,
          repeatable: ne.repeatable,
          maxInstances: ne.maxInstances,
          integration: ne.integration,
          strictPosition: ne.strictPosition
        });
      }
      const Z = z, X = Z.templateId ?? Z.id, J = {
        payload: s,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, q = T(Z.pageComponentKeys, J);
      return Hu(X, q, {
        label: Z.label,
        repeatable: Z.repeatable ?? !1,
        maxInstances: Z.maxInstances ?? null,
        integration: Z.integration,
        strictPosition: Z.strictPosition
      });
    })(M);
    typeof window < "u" && window.$uhuu?.debug;
    let j, H = K;
    if (l)
      H = await l(K);
    else {
      const z = R(K.integration);
      let Z = !1;
      if (z !== "none" && typeof window < "u") {
        const X = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        X && (j = await X({ item: K, mode: z }), j == null && z === "required" && (Z = !0));
      }
      if (Z) return { success: !1 };
    }
    if (H === null) return { success: !1 };
    const W = H ?? K;
    if (j !== void 0 && w?.setIntegrationPayload) {
      const z = W.id;
      w.setIntegrationPayload(z, j);
    }
    return C(((z, Z, X) => {
      const J = Z.strictPosition;
      if (J === "start") return [Z, ...z];
      if (J === "end") return [...z, Z];
      const q = [], ne = [], ae = [];
      if (z.forEach((fe) => {
        const we = fe.strictPosition;
        we === "start" ? q.push(fe) : we === "end" ? ae.push(fe) : ne.push(fe);
      }), !X || X.mode === "end")
        return [...q, ...ne, Z, ...ae];
      const ve = ne.findIndex((fe) => fe.id === X.anchorId);
      return ve === -1 ? z.find((Ke) => Ke.id === X.anchorId)?.strictPosition === "start" ? [...q, Z, ...ne, ...ae] : [...q, ...ne, Z, ...ae] : (X.mode === "before" ? ne.splice(ve, 0, Z) : ne.splice(ve + 1, 0, Z), [...q, ...ne, ...ae]);
    })(f, W, A)), { success: !0, insertedId: W.id };
  }, [f, C, l, w]), P = he((M) => {
    const A = (T) => {
      d ? d(T) : alert(T);
    }, R = f.find((T) => T.id === M);
    if (R) {
      if (kt(f) <= 1) {
        A("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (w?.removeIntegrationPayload) {
        const D = R.id;
        w.payload?.integrations?.[D] !== void 0 && w.removeIntegrationPayload(D);
      }
      C(f.filter((D) => D.id !== M));
      return;
    }
    for (const T of f)
      if (ze(T) && T.pages.some((D) => D.id === M)) {
        if (kt(f) <= 1) {
          A("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (T.pages.length === 1) {
          if (w?.removeIntegrationPayload) {
            const K = T.id;
            w.payload?.integrations?.[K] !== void 0 && w.removeIntegrationPayload(K);
          }
          C(f.filter((K) => K.id !== T.id));
        } else
          C(f.map((K) => K.id === T.id && ze(K) ? {
            ...K,
            pages: K.pages.filter((j) => j.id !== M)
          } : K));
        return;
      }
  }, [f, d, C, w]), x = he((M, A) => {
    C(f.map((R) => R.id === M ? ze(R) ? {
      ...R,
      ...A
    } : { ...R, ...A } : R));
  }, [f, C]), k = he((M) => {
    C(M);
  }, [C]), E = ee(() => {
    const M = ny(f);
    return u ? ay(M, u) : M;
  }, [f, u]), O = he((M) => {
    const A = [];
    return E.forEach((R) => {
      ze(R) ? (R.pages ?? []).forEach((D) => {
        A.push(M(D, R));
      }) : A.push(M(R, R));
    }), A;
  }, [E]), _ = ee(
    () => ry(E),
    [E]
  ), B = he((M) => {
    const A = oy(M, f);
    C(((T) => {
      const D = [], K = [], j = [];
      return T.forEach((H) => {
        const W = H.strictPosition;
        W === "start" ? D.push(H) : W === "end" ? j.push(H) : K.push(H);
      }), [...D, ...K, ...j];
    })(A));
  }, [f, C]), L = he(() => {
    g(!0);
  }, []), G = ee(() => {
    if (i)
      return Rs({ pageComponents: i, payload: s, setup: a });
  }, [i, s, a]);
  return {
    items: f,
    itemsWithPageNum: E,
    totalPageCount: N,
    availableItemsToAdd: y,
    addItem: I,
    removeItem: P,
    updateItemFields: x,
    reorderItems: k,
    addDialogOpen: v,
    setAddDialogOpen: g,
    openAddDialog: L,
    renderItems: O,
    itemsForReorder: _,
    handleReorder: B,
    defaultRenderThumbnail: G
  };
}
function Ox({
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
        const b = [...e], w = b.findIndex((C) => C.id === l);
        w < 1 || ([b[w - 1], b[w]] = [b[w], b[w - 1]], t(b));
      } : void 0, h = u && d < i.length - 1 ? () => {
        const b = [...e], w = b.findIndex((C) => C.id === l);
        w < 0 || w >= b.length - 1 || ([b[w], b[w + 1]] = [b[w + 1], b[w]], t(b));
      } : void 0, v = u && a.repeatable ? () => {
        const w = { ...e.find((y) => y.id === l) ?? a, id: `${l}_copy_${Date.now()}` }, C = [...e], S = C.findIndex((y) => y.id === l);
        C.splice(S < 0 ? C.length : S + 1, 0, w), t(C);
      } : void 0;
      return { onAddPage: c && n.length > 0 ? () => {
        r({ mode: "before", anchorId: c }), o();
      } : void 0, onMoveUp: f, onMoveDown: h, onDuplicate: v };
    },
    [e, i, t, n, r, o]
  );
}
function _x(e = [], t = {}) {
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
function Tx({
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
      const g = i[v.flowKey];
      g && (h[v.flowKey] = g);
    }
    return h;
  }, [i, e]), l = he((h, v) => {
    a.has(h) && o((g) => {
      const b = g.layoutKey === n ? g.layouts : {}, w = {};
      let C = !1;
      for (const [N, I] of Object.entries(b))
        a.has(N) ? w[N] = I : C = !0;
      const S = w[h] ?? { flows: {}, signatures: {} }, y = S.signatures?.[v.flowId];
      return g.layoutKey === n && y === v.signature && !C ? g : {
        layoutKey: n,
        layouts: {
          ...w,
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
    () => _x(e, c),
    [e, c]
  ), u = d.length, f = ee(
    () => d.filter((h) => cy(h.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: f,
    virtualTotalPageCount: u,
    registerMeasurement: l
  };
}
function rc(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function Fx(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function Lx({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = Gu(e, t, n), s = n && ze(n) ? n.id : void 0, a = `pages.${t.id}`, c = s ? `pages.${s}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: s,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (l) => Ba(i.instanceId, l)
    },
    paths: {
      integration: (l) => Ba(i.instanceId, l),
      page: (l) => rc(a, l),
      group: (l) => rc(c, l),
      document: (l) => l ?? null
    },
    defaults: {
      imageGalleryPath: Fx(
        e,
        i.integration,
        o
      )
    }
  };
}
const oc = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, i = r?.[o], s = typeof e == "string" ? i?.componentKey ?? o : e.componentKey ?? i?.componentKey ?? e.id, a = t ?? o, c = (typeof e == "string" ? void 0 : e.repeatable) ?? i?.repeatable ?? !1, l = (typeof e == "string" ? void 0 : e.maxInstances) ?? i?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? i?.label, u = (typeof e == "string" ? void 0 : e.className) ?? i?.className, f = (typeof e == "string" ? void 0 : e.component) ?? i?.component, h = (typeof e == "string" ? void 0 : e.integration) ?? i?.integration, v = (typeof e == "string" ? void 0 : e.strictPosition) ?? i?.strictPosition, g = (typeof e == "string" ? void 0 : e.hasFlow) ?? i?.hasFlow;
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
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  } : zu(a, s, {
    label: d,
    className: u,
    repeatable: c,
    maxInstances: l,
    integration: h,
    component: f,
    strictPosition: v,
    hasFlow: g,
    ...typeof e == "string" ? {} : e
  });
}, ic = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, s = Bx(e.pageComponentKeys, o).map((a) => {
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
  return Hu(e.id, s, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, $x = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], Bx = (e, t) => {
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
}, zx = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: s
  } = e, a = $x(n), c = /* @__PURE__ */ new Map();
  a.forEach((g) => c.set(g.id, g));
  const l = r.length ? r : Object.keys(o), d = { ...i };
  Object.entries(o).forEach(([g, b]) => {
    b.component && (d[g] = b.component);
  });
  const u = t.map((g) => {
    if (typeof g == "string") {
      const w = c.get(g);
      return w ? ic(w, !0, s, o) : oc(g, void 0, !0, o);
    }
    return g.pageComponentKeys !== void 0 ? ic(g, !0, s, o) : oc(g, void 0, !0, o);
  }), f = a.map((g) => ({
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
    ...l.filter((g) => o?.[g]?.allowAsSinglePage !== !1).map((g) => {
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
    ...f
  ];
  return { initialItems: u, availableItems: v, pageComponents: d };
};
var Hx = Object.defineProperty, Dt = (e, t) => Hx(e, "name", { value: t, configurable: !0 }), Kx = "AlertDialog", [jx, DC] = /* @__PURE__ */ st(Kx, [
  Yu
]), At = Yu(), Gx = /* @__PURE__ */ Dt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ m(qu, { ...r, ...n, modal: !0 });
}, "AlertDialog");
p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = At(r);
    return /* @__PURE__ */ m(zy, { ...i, ...o, ref: n });
  }, "AlertDialogTrigger")
);
var Vx = /* @__PURE__ */ Dt((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ m(Ju, { ...r, ...n });
}, "AlertDialogPortal"), Wx = p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = At(r);
    return /* @__PURE__ */ m(ys, { ...i, ...o, ref: n });
  }, "AlertDialogOverlay")
), Ux = "AlertDialogContent", [Yx, qx] = jx(Ux), Xx = p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, children: o, ...i } = t, s = At(r), a = p.useRef(null), c = ge(n, a), l = p.useRef(null);
    return /* @__PURE__ */ m(Yx, { scope: r, cancelRef: l, children: /* @__PURE__ */ m(
      ws,
      {
        role: "alertdialog",
        ...s,
        ...i,
        ref: c,
        onOpenAutoFocus: te(i.onOpenAutoFocus, (d) => {
          d.preventDefault(), l.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (d) => d.preventDefault(),
        onInteractOutside: (d) => d.preventDefault(),
        children: o
      }
    ) });
  }, "AlertDialogContent")
), Zx = p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = At(r);
    return /* @__PURE__ */ m(xs, { ...i, ...o, ref: n });
  }, "AlertDialogTitle")
), Jx = p.forwardRef(/* @__PURE__ */ Dt(function(t, n) {
  const { __scopeAlertDialog: r, ...o } = t, i = At(r);
  return /* @__PURE__ */ m(Cs, { ...i, ...o, ref: n });
}, "AlertDialogDescription")), Qx = p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = At(r);
    return /* @__PURE__ */ m(Ss, { ...i, ...o, ref: n });
  }, "AlertDialogAction")
), eC = "AlertDialogCancel", tC = p.forwardRef(
  /* @__PURE__ */ Dt(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, { cancelRef: i } = qx(eC, r), s = At(r), a = ge(n, i);
    return /* @__PURE__ */ m(Ss, { ...s, ...o, ref: a });
  }, "AlertDialogCancel")
), nC = Gx, rC = Vx, ef = Wx, tf = Xx, nf = Qx, rf = tC, of = Zx, sf = Jx;
const oC = nC, iC = rC, af = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  ef,
  {
    ref: n,
    className: ue(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
af.displayName = ef.displayName;
const cf = p.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = ji();
  return /* @__PURE__ */ $(iC, { container: r || void 0, children: [
    /* @__PURE__ */ m(af, {}),
    /* @__PURE__ */ m(
      tf,
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
cf.displayName = tf.displayName;
const lf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m("div", { className: ue("flex flex-col gap-2 text-left", e), ...t });
lf.displayName = "AlertDialogHeader";
const uf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: ue("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
uf.displayName = "AlertDialogFooter";
const df = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  of,
  {
    ref: n,
    className: ue("text-base font-semibold text-gray-900", e),
    ...t
  }
));
df.displayName = of.displayName;
const ff = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  sf,
  {
    ref: n,
    className: ue("text-sm text-gray-600", e),
    ...t
  }
));
ff.displayName = sf.displayName;
const hf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  nf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
hf.displayName = nf.displayName;
const sC = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  rf,
  {
    ref: n,
    className: ue(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
sC.displayName = rf.displayName;
const Jo = "__edit__", Qo = "__print__";
function sc({
  checked: e,
  label: t,
  onSelect: n,
  keepOpen: r = !1
}) {
  return /* @__PURE__ */ $(
    je,
    {
      onSelect: (o) => {
        r && o.preventDefault(), n();
      },
      className: "flex items-center gap-2",
      children: [
        e ? /* @__PURE__ */ m(Ki, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ m("span", { className: "w-3 h-3" }),
        /* @__PURE__ */ m("span", { className: "flex-1 truncate", children: t })
      ]
    }
  );
}
function ac({ label: e, value: t }) {
  return /* @__PURE__ */ $(Fu, { className: "flex items-center justify-between gap-4 text-xs", children: [
    /* @__PURE__ */ m("span", { className: "text-gray-700", children: e }),
    /* @__PURE__ */ $("span", { className: "flex items-center gap-1 text-gray-400", children: [
      t ? /* @__PURE__ */ m("span", { className: "max-w-[110px] truncate", children: t }) : null,
      /* @__PURE__ */ m(im, { className: "w-3.5 h-3.5" })
    ] })
  ] });
}
function aC({
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
    { value: Jo, label: "Edit" },
    ...f.length > 0 ? f.map((y) => ({ value: y, label: e[y].label })) : [{ value: Qo, label: "Print" }]
  ], v = r ? Jo : t || f[0] || Qo, g = h.find((y) => y.value === v)?.label ?? "Edit", b = (y) => {
    if (y === Jo) {
      o(!0);
      return;
    }
    o(!1), y !== Qo && e && e[y] && n?.(y, e[y]);
  }, w = !!c && c.length > 0, C = c?.find((y) => y.id === l)?.name, S = () => {
    const y = window.prompt(
      "Add a published brand kit to test — paste a brandkit.json URL, a kit id, or raw JSON:"
    );
    y && y.trim() && u?.(y.trim());
  };
  return /* @__PURE__ */ $(or, { modal: !1, children: [
    /* @__PURE__ */ m(ir, { asChild: !0, children: /* @__PURE__ */ $(
      _e,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ m(tm, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ m("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ $(_n, { align: "end", className: "min-w-[200px]", children: [
      /* @__PURE__ */ $(La, { children: [
        /* @__PURE__ */ m(ac, { label: "Print Preview", value: g }),
        /* @__PURE__ */ m(Ci, { className: "min-w-[180px]", children: h.map((y) => /* @__PURE__ */ m(
          sc,
          {
            checked: v === y.value,
            label: y.label,
            onSelect: () => b(y.value)
          },
          y.value
        )) })
      ] }),
      w && /* @__PURE__ */ $(La, { children: [
        /* @__PURE__ */ m(ac, { label: "Brand Kit", value: C }),
        /* @__PURE__ */ $(Ci, { className: "min-w-[200px]", children: [
          c.map((y) => /* @__PURE__ */ m(
            sc,
            {
              checked: l === y.id,
              label: y.name,
              keepOpen: !0,
              onSelect: () => d?.(y.id)
            },
            y.id
          )),
          u && /* @__PURE__ */ $($e, { children: [
            /* @__PURE__ */ m(sn, {}),
            /* @__PURE__ */ $(
              je,
              {
                onSelect: (y) => {
                  y.preventDefault(), S();
                },
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ m(ht, { className: "w-3 h-3 text-gray-400" }),
                  /* @__PURE__ */ m("span", { className: "flex-1", children: "Add published kit…" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ $($e, { children: [
        /* @__PURE__ */ m(sn, {}),
        /* @__PURE__ */ m(Lu, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ $("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ $("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ m("span", { children: "Opacity" }),
            /* @__PURE__ */ $("span", { children: [
              s,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ m("div", { className: "pt-2", children: /* @__PURE__ */ m(
            Ws,
            {
              value: [s],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (y) => {
                const N = y[0] ?? s;
                a?.(N);
              }
            }
          ) }),
          /* @__PURE__ */ $("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ m("span", { children: "Hidden" }),
            /* @__PURE__ */ m("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const cC = { width: 210, height: 297 };
function lC(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function uC({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ m("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ $("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ m("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ m(Ki, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ $("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ $("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ m(_e, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ m(_e, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
function cc({
  initialItems: e = [],
  availableItems: t = [],
  pageComponents: n = {},
  payload: r,
  pageFormat: o,
  pageOptions: i = [],
  notifyError: s,
  referenceRenderer: a,
  renderOverlay: c,
  renderPage: l,
  menuItems: d,
  gridColsClass: u,
  reorderTitle: f = "Reorder Pages and Groups",
  reorderDescription: h = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: v = hn,
  onItemsChange: g,
  onStateChange: b,
  resolveNewItem: w,
  pageFilter: C,
  printConfigs: S,
  defaultZoomMode: y = "manual",
  brandKits: N,
  activeBrandKitId: I,
  onSelectBrandKit: P,
  onAddBrandKit: x
}) {
  const k = o ?? cC, { interactive: E, setInteractive: O, enableDevTools: _ } = Gi(), B = Vi(), [L, G] = se(null), [M, A] = se(null), [R, T] = se(void 0), [D, K] = se(0), [j, H] = se(0), W = L ?? C, V = ee(() => M ? { ...k, ...M } : k, [k, M]), z = Pe(sr), Z = z?.payload ?? r, [X, J] = se(!1), q = V?.preview ?? "single_page", ne = ee(
    () => q === "two_pages" ? { ...V, preview: "single_page" } : V,
    [q, V]
  ), ae = ee(() => vs(e), [e]), ve = ee(() => i?.length ? i.map((F) => "getValue" in F ? F : z?.setPageOptionValue ? vy(
    F,
    z.payload,
    z.setPageOptionValue
  ) : ((on() || _) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [i, z]), [fe, we] = se(null), [Ke, Mt] = se({ mode: "end" }), [yt, mn] = se(null), We = le(null), {
    items: Ot,
    itemsWithPageNum: Qt,
    availableItemsToAdd: pn,
    addItem: $n,
    removeItem: hr,
    reorderItems: Ro,
    updateItemFields: et,
    addDialogOpen: _t,
    setAddDialogOpen: en,
    openAddDialog: gn,
    itemsForReorder: lt,
    handleReorder: mr,
    defaultRenderThumbnail: Eo
  } = Mx({
    initialItems: ae,
    availableItems: t,
    pageComponents: n,
    payload: Z,
    setup: V,
    stateKey: v,
    onItemsChange: g,
    onStateChange: b,
    resolveNewItem: w,
    notifyError: s
  }), Bn = ee(() => {
    const F = [];
    for (const Q of Qt) {
      const re = ze(Q) ? Q.pages ?? [] : [Q];
      for (const oe of re) {
        if (!oe?.id) continue;
        const be = ze(Q) ? Q : void 0;
        F.push({
          ...oe,
          kind: "page",
          id: oe.id,
          pageNum: oe.pageNum ?? F.length + 1,
          basePageNum: oe.pageNum ?? F.length + 1,
          parentGroup: be,
          flowKey: lC(oe, be)
        });
      }
    }
    return F.sort((Q, re) => (Q.basePageNum ?? 0) - (re.basePageNum ?? 0));
  }, [Qt]), vn = ee(() => JSON.stringify({
    format: ne?.format,
    orientation: ne?.orientation,
    width: ne?.width,
    height: ne?.height,
    bleed: ne?.bleed,
    showBleed: ne?.showBleed,
    preview: ne?.preview,
    flowPages: Bn.filter((F) => F.hasFlow).map((F) => F.flowKey).join("|")
  }), [ne, Bn]), zn = ee(() => kt(Ot), [Ot]), {
    allVirtualPages: pr,
    renderedVirtualPages: Tt,
    virtualTotalPageCount: tn,
    registerMeasurement: Do
  } = Tx({
    logicalPages: Bn,
    pageFilter: W,
    layoutKey: vn
  }), gr = ee(
    () => new Set(Tt.map((F) => F.virtualPageId)),
    [Tt]
  ), Ne = ee(
    () => pr.filter((F) => F.hasFlow && F.virtualPageIndex === 0 && (l || !gr.has(F.virtualPageId))),
    [pr, gr, l]
  );
  p.useEffect(() => {
    if (!yt) return;
    const F = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${yt}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(F);
  }, [yt]);
  const Me = Ox({
    items: Ot,
    reorderItems: Ro,
    availableItemsToAdd: pn,
    setPendingInsertPosition: Mt,
    openAddDialog: gn
  }), Oe = he(async (F) => {
    const Q = await $n(F, Ke);
    Q.success && (mn(Q.insertedId), We.current && clearTimeout(We.current), We.current = setTimeout(() => mn(null), 1200), Mt({ mode: "end" }), F.repeatable && F.integration && we(F));
  }, [$n, Ke]), tt = he(() => {
    const F = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!F.length) return { mode: "end" };
    const Q = window.innerHeight / 2;
    let re = null, oe = 1 / 0;
    for (const Ae of F) {
      const ut = Ae.getBoundingClientRect(), wt = Math.abs(ut.top + ut.height / 2 - Q);
      wt < oe && (oe = wt, re = Ae);
    }
    const be = re?.getAttribute("data-page-item-id");
    return be ? { mode: "after", anchorId: be } : { mode: "end" };
  }, []), Te = he(() => {
    Mt(tt()), gn();
  }, [tt, gn]), Fe = p.useCallback(
    (F, Q, re) => {
      if (!Q) return;
      const oe = F.applyPatch?.(re, Q);
      oe && et(Q.id, oe), F.onChange?.(Q.id, re, {
        item: Q,
        updateItem: (be) => et(Q.id, be)
      });
    },
    [et]
  ), Ue = (F) => /* @__PURE__ */ $("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ m("span", { children: "Page" }),
    /* @__PURE__ */ $("span", { children: [
      F.pageNo,
      " / ",
      F.total
    ] })
  ] }), Ft = (F, Q, re) => c ? c({ pageNo: F, total: tn, pageId: Q, parent: re }) : Ue({ pageNo: F, total: tn }), Se = (F, Q = {}) => {
    const re = F.parentGroup;
    if (l && Q.renderVisible !== !1)
      return l({ page: F, parent: re });
    const oe = F.componentKey ?? F.id, be = _ && a ? a(F) : null, Ae = _ && a ? p.isValidElement(be) ? p.cloneElement(be, {
      opacity: j
    }) : be : null, ut = F.templateId ?? oe, wt = n[oe], vr = z?.getPagePayload ? z.getPagePayload(F) : qr(Z, { id: F.id, templateId: ut, componentKey: oe }), Ao = Vu(
      Z,
      F,
      re
    ), br = Lx({
      payload: Z,
      page: F,
      parentGroup: re,
      pagePayload: vr
    });
    return /* @__PURE__ */ m(
      X0,
      {
        pageId: F.id,
        templateId: ut,
        pageNo: F.pageNum,
        measurementPageNo: F.basePageNum,
        component: wt,
        payload: Z,
        pagePayload: vr,
        integration: Ao,
        page: F,
        parentGroup: re,
        componentKey: oe,
        setup: ne,
        reference: Ae,
        overlay: ({ pageNo: Hn }) => Ft(Hn, F.id, re),
        className: F.className,
        dataBinding: br,
        totalPages: tn,
        measurementTotalPages: zn,
        flowPageIndex: F.virtualPageIndex,
        flowChunksByFlowId: F.flowChunksByFlowId,
        measureFlow: Q.measureFlow ?? (!!F.hasFlow && F.virtualPageIndex === 0),
        flowMeasurementKey: F.flowKey,
        flowMeasurementVersion: vn,
        onFlowMeasurement: F.hasFlow ? Do : void 0,
        renderVisible: Q.renderVisible ?? !0
      },
      `${Q.renderVisible === !1 ? "measure-only" : "page"}-${F.virtualPageId}`
    );
  }, Ye = (F, Q, re) => {
    const oe = !!Q && ze(Q), be = oe && Q.pages[0]?.id === F.id;
    if (F.virtualPageIndex > 0)
      return /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ m("span", { className: "page-number", children: F.pageNum }),
        /* @__PURE__ */ $("span", { className: "text-xs text-gray-500", children: [
          F.label || F.componentKey || F.id,
          " continued"
        ] })
      ] });
    if (oe && !be)
      return /* @__PURE__ */ m("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ m("span", { className: "page-number", children: F.pageNum }),
        F.label && /* @__PURE__ */ m("span", { className: "text-xs text-gray-500", children: F.label }),
        /* @__PURE__ */ m("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const Ae = oe ? Q : F, ut = oe ? Q.label || Q.id : F.label || `Page ${F.pageNum}`;
    return /* @__PURE__ */ $("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ m("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: F.pageNum }),
      /* @__PURE__ */ m(
        Ax,
        {
          name: ut,
          canRename: !0,
          canMoveUp: !!re?.onMoveUp,
          canMoveDown: !!re?.onMoveDown,
          canAddPage: !!re?.onAddPage,
          canDuplicate: !!re?.onDuplicate,
          canDelete: zn > 1,
          onRename: (wt) => et(Ae.id, { label: wt || void 0 }),
          onMoveUp: re?.onMoveUp,
          onMoveDown: re?.onMoveDown,
          onAddPage: re?.onAddPage,
          onDuplicate: re?.onDuplicate,
          onDelete: () => hr(Ae.id)
        }
      ),
      /* @__PURE__ */ m("span", { className: "pl-1", children: ve.length > 0 && /* @__PURE__ */ m(
        Dx,
        {
          pageOptions: ve,
          targetItem: Ae,
          onChange: Fe,
          title: oe ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, qe = ee(() => {
    if (q !== "two_pages") return [];
    const F = Tt;
    if (!F.length) return [];
    const Q = [{ left: void 0, right: F[0], layout: "right" }];
    for (let re = 1; re < F.length; re += 2) {
      const oe = F[re], be = F[re + 1];
      if (be)
        Q.push({ left: oe, right: be, layout: "spread" });
      else {
        const Ae = oe.pageNum % 2 === 0;
        Q.push({
          left: Ae ? oe : void 0,
          right: Ae ? void 0 : oe,
          layout: Ae ? "left" : "right"
        });
      }
    }
    return Q;
  }, [q, Tt]), nt = /* @__PURE__ */ $("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ $($s, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      tn,
      " ",
      tn === 1 ? "Page" : "Pages"
    ] }),
    _ && /* @__PURE__ */ m(
      aC,
      {
        modes: S,
        selectedMode: R,
        onModeChange: (F, Q) => {
          T(F), G(Q.filter ?? null), A(Q.pageFormat ?? null), K((re) => re + 1);
        },
        interactive: E,
        onInteractiveChange: (F) => {
          O(F), F && A(null);
        },
        hasReferenceRenderer: !!a,
        referenceOpacity: j,
        onReferenceOpacityChange: H,
        brandKits: N,
        activeBrandKitId: I,
        onSelectBrandKit: P,
        onAddBrandKit: x
      }
    ),
    E && /* @__PURE__ */ $($e, { children: [
      pn.length > 0 && /* @__PURE__ */ $(
        _e,
        {
          variant: "ghost",
          size: "sm",
          onClick: Te,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ m(ht, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ $(
        _e,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => J(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ m(am, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ $($e, { children: [
    Ne.map((F) => Se(F, {
      renderVisible: !1,
      measureFlow: !0
    })),
    _ && !E && /* @__PURE__ */ $(
      _e,
      {
        onClick: () => O(!0),
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ m(Vc, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ m(
      Fy,
      {
        defaultZoom: 80,
        defaultZoomMode: y,
        minZoom: 25,
        maxZoom: 200,
        menuItems: d ?? nt,
        onAddPage: Te,
        preview: q,
        children: q === "two_pages" ? qe.map((F, Q) => {
          const re = F.left ?? F.right, oe = F.right ?? F.left, be = re?.parentGroup?.id ?? re?.id ?? null, Ae = oe?.parentGroup?.id ?? oe?.id ?? null, ut = F.left?.parentGroup?.id ?? F.left?.id, wt = F.right?.parentGroup?.id ?? F.right?.id, vr = ut === yt, Ao = wt === yt, br = (Hn, mf) => Me(Hn ? Hn.parentGroup ?? Hn : void 0, mf);
          return /* @__PURE__ */ $(Oy, { layout: F.layout, pageItemId: Ae ?? void 0, children: [
            F.left && /* @__PURE__ */ m(
              "div",
              {
                "data-page-item-id": F.left.virtualPageIndex === 0 ? ut : void 0,
                className: vr ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ m(
                  Wo,
                  {
                    title: `Sheet ${F.left.pageNum}`,
                    controls: Ye(F.left, F.left.parentGroup, br(F.left, be)),
                    origin: F.left.pageNum % 2 === 0 ? "right" : "left",
                    children: Se(F.left)
                  },
                  F.left.virtualPageId
                )
              }
            ),
            F.right && /* @__PURE__ */ m(
              "div",
              {
                "data-page-item-id": F.right.virtualPageIndex === 0 ? wt : void 0,
                className: Ao ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ m(
                  Wo,
                  {
                    title: `Sheet ${F.right.pageNum}`,
                    controls: Ye(F.right, F.right.parentGroup, br(F.right, Ae)),
                    origin: F.right.pageNum % 2 === 0 ? "right" : "left",
                    children: Se(F.right)
                  },
                  F.right.virtualPageId
                )
              }
            )
          ] }, `pair-${Q}`);
        }) : Tt.map((F) => {
          const Q = F.parentGroup ?? F, re = F.parentGroup?.id ?? F.id, oe = Me(Q, re), be = F.parentGroup?.id ?? F.id, Ae = yt === be;
          return /* @__PURE__ */ m(
            "div",
            {
              "data-page-item-id": F.virtualPageIndex === 0 ? be : void 0,
              className: Ae ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ m(
                Wo,
                {
                  title: `Sheet ${F.pageNum}`,
                  controls: Ye(F, F.parentGroup, oe),
                  children: Se(F)
                }
              )
            },
            F.virtualPageId
          );
        })
      },
      `dev-mode-${D}-${R ?? "default"}`
    ),
    E && !B && /* @__PURE__ */ $($e, { children: [
      /* @__PURE__ */ m(
        Xy,
        {
          open: _t,
          onOpenChange: en,
          availableItems: pn,
          onSelectItem: Oe,
          pageComponents: n,
          payload: Z,
          setup: k,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ m(
        q0,
        {
          open: X,
          onOpenChange: J,
          pages: lt,
          onReorder: (F) => {
            mr(F), J(!1);
          },
          onRemove: (F) => hr(F.id),
          pageComponents: n,
          payload: Z,
          setup: k,
          renderThumbnail: Eo,
          title: f,
          description: h,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ m(
      uC,
      {
        label: fe ? fe.label ?? fe.id : null,
        onDone: () => we(null),
        onAddAnother: () => {
          const F = fe;
          we(null), F && Oe(F);
        }
      }
    )
  ] });
}
function dC(e) {
  const { templateConfig: t, ...n } = e;
  return Pe(sr) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ m(cc, { ...n }) : /* @__PURE__ */ m(
    Wu,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ m(cc, { ...n })
    }
  );
}
function fC(e) {
  const n = Pe(sr)?.payload ?? e.payload, r = p.useMemo(
    () => zx({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), [o, i] = p.useState({
    open: !1,
    message: ""
  }), s = p.useCallback((l) => {
    i({ open: !0, message: l });
  }, []), a = p.useMemo(
    () => iy(n),
    [n]
  ), c = p.useMemo(() => {
    if (!a?.items)
      return r.initialItems;
    const l = e.templateConfig.groups ?? {}, d = Array.isArray(l) ? l : Object.entries(l).map(([y, N]) => ({ id: y, ...N })), u = new Map(d.map((y) => [y.id, y])), f = e.templateConfig.pages ?? {}, h = (y) => {
      const N = y?.componentKey ?? y?.templateId ?? y?.id;
      return !(f[N] ?? f[y?.templateId] ?? f[y?.id])?.hasFlow || y?.hasFlow ? y : { ...y, hasFlow: !0 };
    }, v = a.items.map((y) => {
      if (y.kind !== "group") return h(y);
      const N = y.templateId ?? y.id, I = u.get(N), P = I?.strictPosition !== void 0 && !y.strictPosition ? { ...y, strictPosition: I.strictPosition } : y, x = {
        ...P,
        pages: (P.pages ?? []).map(h)
      };
      if (!I || typeof I.pageComponentKeys != "function") return x;
      try {
        const k = I.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(k) ? k.length === 0 ? {
          ...x,
          pages: []
        } : {
          ...x,
          pages: k.map((E, O) => {
            const _ = f[E], B = _?.dataKey;
            return {
              id: `${x.id}__${B ?? E}__${O}`,
              componentKey: E,
              templateId: E,
              ...B ? { dataKey: B } : {},
              ..._?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${P.id} must return an array, got:`, typeof k), P);
      } catch (k) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${x.id}:`, k), x;
      }
    }), g = new Set(r.initialItems.map((y) => y.id)), b = v.filter((y) => g.has(y.id)), w = kt(b), C = kt(r.initialItems);
    if (!Array.from(g).some(
      (y) => !b.some((N) => N.id === y)
    ) && w !== C) {
      const y = v.filter((k) => {
        if (k.kind !== "group") return !g.has(k.id);
        const E = k.templateId ?? k.id;
        return k.id !== E && !g.has(k.id);
      });
      if (y.length === 0) return r.initialItems;
      const N = [...r.initialItems, ...y], I = N.filter((k) => k.strictPosition === "start"), P = N.filter((k) => k.strictPosition === "end"), x = N.filter((k) => !k.strictPosition);
      return [...I, ...x, ...P];
    }
    return v;
  }, [a?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ $($e, { children: [
    /* @__PURE__ */ m(
      dC,
      {
        ...e,
        payload: n,
        initialItems: c,
        availableItems: r.availableItems,
        pageComponents: r.pageComponents,
        notifyError: s
      }
    ),
    /* @__PURE__ */ m(
      oC,
      {
        open: o.open,
        onOpenChange: (l) => {
          l || i({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ $(cf, { children: [
          /* @__PURE__ */ $(lf, { children: [
            /* @__PURE__ */ m(df, { children: "Cannot remove item" }),
            /* @__PURE__ */ m(ff, { children: o.message })
          ] }),
          /* @__PURE__ */ m(uf, { children: /* @__PURE__ */ m(hf, { onClick: () => i({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function hC(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = lc(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return lc(t, e);
  }
}
function lc(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function mC(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const s = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = hC(s, t);
    }
  return r;
}
function pC(e, t, n) {
  return e(t, n);
}
function gC(e, t, n) {
  return typeof e == "function" ? pC(e, t, n) : mC(e, t);
}
function vC(e, t, n) {
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
function bC(e, t, n = {}, r, o = null) {
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
function yC(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, s = p.useMemo(() => gC(r, n, t?.payload), [r, n, t?.payload]), a = p.useMemo(() => vC(t, n, o), [t, n, o]), c = p.useCallback(
    (d, u = {}, f) => bC(
      t,
      d,
      u,
      f,
      a
    ),
    [t, a]
  ), l = p.useCallback(
    (d, u = {}, f) => {
      const h = c(d, u, f);
      if (!h) return {};
      const v = En({ dialog: h }, { page: { paginationType: "static" } });
      if (v.onClick) {
        const g = v.onClick;
        v.onClick = (b) => {
          b.stopPropagation(), g(b);
        };
      }
      return v;
    },
    [c]
  );
  return p.useMemo(
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
const AC = {
  Pagination: ti,
  Sheet: ni,
  FlowArea: vc,
  FlowPage: bc,
  Flow: xc,
  FlowColumns: Mf,
  // Exposes the same deterministic chunking algorithm used by FlowArea
  // measurements for consumers that already have measured item heights.
  planFlowChunks: Ai,
  planFlowColumnChunks: mc,
  // Optional cost counters for the two planners above. Diagnostic only.
  createFlowPlanMetrics: xf,
  // The DOM reads FlowArea measures with. Hosts that run their own Flow canvas
  // must use these rather than re-deriving them, or their page boundaries can
  // drift from the delivered document by a rounding step.
  flowMeasure: If,
  FlowDocument: Vf,
  markdownToFlowItems: Jf,
  htmlToFlowItems: Sc
}, MC = {
  TemplateDataProvider: Wu,
  PageEditor: fC,
  InteractiveModeProvider: Fm,
  useInteractive: Gi,
  useIntegrationAdapter: yC
};
export {
  Of as Editable,
  MC as EditorShell,
  NC as ImageBlock,
  AC as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
