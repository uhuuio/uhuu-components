(function(){"use strict";(function(e,r){try{if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0];if(!t)return;const o=r&&r.styleId||"uhuu-components-styles";let a=document.getElementById(o);a||(a=document.createElement("style"),a.setAttribute("id",o),r&&r.attributes&&Object.entries(r.attributes).forEach(([i,u])=>{try{a.setAttribute(i,u)}catch{}})),a.textContent!==e&&(a.textContent=e),a.parentNode!==t&&(t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a))}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})('@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 0);--color-neutral-100:oklch(97% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[220px\\],[data-uhuu-portal] .min-w-\\[220px\\]{min-width:220px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}[data-uhuu-interactive] [data-uhuu-editor],[data-uhuu-portal] [data-uhuu-editor]{--spacing:.25rem;--font-sans:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--default-font-family:var(--font-sans);--color-white:#fff;--color-black:#000;--color-red-50:oklch(97.1% .013 17.38);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--shadow-sm:0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;--shadow-md:0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;--shadow-lg:0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;--shadow-xl:0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a;--shadow-2xl:0 25px 50px -12px #00000040;--blur-sm:8px;--blur-md:12px;--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:var(--font-sans);box-sizing:border-box}[data-uhuu-interactive] [data-uhuu-editor] *,[data-uhuu-portal] [data-uhuu-editor] *,[data-uhuu-interactive] [data-uhuu-editor] :before,[data-uhuu-portal] [data-uhuu-editor] :before,[data-uhuu-interactive] [data-uhuu-editor] :after,[data-uhuu-portal] [data-uhuu-editor] :after{box-sizing:border-box}[data-uhuu-interactive] .page-options-trigger,[data-uhuu-portal] .page-options-trigger{height:calc(var(--spacing) * 7);width:calc(var(--spacing) * 7);justify-content:center;align-items:center;gap:calc(var(--spacing) * 1);border-radius:var(--radius-lg);background-color:var(--color-gray-100);padding-inline:calc(var(--spacing) * 1);padding-block:calc(var(--spacing) * .5);color:var(--color-gray-600);display:flex}@media(hover:hover){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .page-options-trigger:hover,[data-uhuu-portal] .page-options-trigger:hover{color:var(--color-gray-800)}}[data-uhuu-interactive] .page-number,[data-uhuu-portal] .page-number{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));color:var(--color-gray-500)}[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{gap:calc(var(--spacing) * 6);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-order-grid-cols,[data-uhuu-portal] .page-order-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{gap:calc(var(--spacing) * 4);grid-template-columns:repeat(2,minmax(0,1fr));display:grid}@media(min-width:48rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(min-width:96rem){[data-uhuu-interactive] .page-drag-drop-grid-cols,[data-uhuu-portal] .page-drag-drop-grid-cols{grid-template-columns:repeat(6,minmax(0,1fr))}}@media screen{body{background-color:var(--color-neutral-50)}}:root{--uhuu-page-width: 210mm;--uhuu-page-height: 297mm;--uhuu-page-bleed: 0mm;--uhuu-page-background: var(--background, #ffffff);--uhuu-outline-color: var(--outline-color, #d1d5db)}@page{size:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed)) calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));margin:0}.page-break-inside-avoid{page-break-inside:avoid;break-inside:avoid-page}.page-break-after{page-break-after:always;break-inside:avoid-page;-moz-column-break-after:page;break-after:page}.page-break-before{page-break-before:always;break-inside:avoid-page;-moz-column-break-before:page;break-before:page}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing) * 0)}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:calc(var(--spacing) * 0)}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[30mm\\]{width:30mm}.w-full{width:100%}.w-px{width:1px}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[220px\\]{min-width:220px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-500{color:var(--color-neutral-500)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}html,body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;-webkit-print-color-adjust:exact;print-color-adjust:exact}.uhuu-page-sheet{width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));height:calc(var(--uhuu-page-height) + 2 * var(--uhuu-page-bleed));min-width:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed));padding:var(--uhuu-page-bleed);background-color:var(--uhuu-page-background);box-sizing:border-box;break-inside:avoid-page;page-break-inside:avoid;margin-inline:auto;position:relative;overflow:hidden}.screen-only{display:none}@media screen{.screen-only{display:flex}.uhuu-bleed-area{top:var(--uhuu-page-bleed);left:var(--uhuu-page-bleed);right:var(--uhuu-page-bleed);bottom:var(--uhuu-page-bleed);pointer-events:none;outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);--tw-outline-style:dashed;outline-style:dashed;position:absolute}.uhuu-page-sheet{margin-bottom:calc(var(--spacing) * 6);outline-style:var(--tw-outline-style);outline-width:1px;outline-color:var(--uhuu-outline-color);flex-shrink:0}.horizontal_pages{justify-content:center;gap:calc(var(--spacing) * 6);display:flex;overflow-x:auto;width:-moz-fit-content!important;width:fit-content!important;min-width:-moz-fit-content!important;min-width:fit-content!important}.two_pages{width:calc(var(--uhuu-page-width) * 2 + 4 * var(--uhuu-page-bleed));flex-wrap:wrap;justify-content:center;margin:0 auto;display:flex}.two_pages .uhuu-page-sheet{flex-shrink:0}.two_pages .uhuu-page-sheet:first-child{margin-left:calc(var(--uhuu-page-width) + 2 * var(--uhuu-page-bleed))}.two_pages .uhuu-page-sheet:nth-child(odd):not(:first-child){margin-right:calc(var(--spacing) * 0)}.two_pages .uhuu-page-sheet:nth-child(2n):not(:first-child){margin-left:calc(var(--spacing) * 0)}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[220px\\],[data-uhuu-portal] .min-w-\\[220px\\]{min-width:220px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu],[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]{position:relative}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:before{content:" ";top:calc(var(--spacing) * 0);left:calc(var(--spacing) * 0);z-index:10;margin-top:calc(var(--spacing) * 1);margin-left:calc(var(--spacing) * 1);height:calc(var(--spacing) * 4);width:calc(var(--spacing) * 4);opacity:.2;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));background-color:#f4c;border-top-left-radius:3.40282e38px;border-top-right-radius:3.40282e38px;border-bottom-right-radius:3.40282e38px;position:absolute}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:before,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:before{opacity:1;transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:after{content:" "}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover:after,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover:after{top:calc(var(--spacing) * 0);right:calc(var(--spacing) * 0);bottom:calc(var(--spacing) * 0);left:calc(var(--spacing) * 0);z-index:10;cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c;position:absolute}[data-uhuu-interactive] :not(.skip-data-uhuu) [data-uhuu]:hover,[data-uhuu-portal] :not(.skip-data-uhuu) [data-uhuu]:hover{cursor:pointer;outline-style:var(--tw-outline-style);outline-offset:-1px;--tw-outline-style:dashed;outline:2px dashed #f4c}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing) * 0)}.inset-6{inset:calc(var(--spacing) * 6)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-3{top:calc(var(--spacing) * -3)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[50\\%\\]{top:50%}.-right-3{right:calc(var(--spacing) * -3)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.right-\\[15mm\\]{right:15mm}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-\\[10mm\\]{bottom:10mm}.left-0{left:calc(var(--spacing) * 0)}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-4{left:calc(var(--spacing) * 4)}.left-6{left:calc(var(--spacing) * 6)}.left-\\[15mm\\]{left:15mm}.left-\\[50\\%\\]{left:50%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[2\\]{z-index:2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing) * -1)}.mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-1{margin-block:calc(var(--spacing) * 1)}.my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}.my-\\[2\\.2mm\\]{margin-block:2.2mm}.my-\\[2mm\\]{margin-block:2mm}.my-\\[3mm\\]{margin-block:3mm}.my-\\[4mm\\]{margin-block:4mm}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-\\[1mm\\]{margin-top:1mm}.mt-\\[2mm\\]{margin-top:2mm}.mt-\\[4mm\\]{margin-top:4mm}.mt-\\[5mm\\]{margin-top:5mm}.mt-\\[6mm\\]{margin-top:6mm}.mt-\\[8mm\\]{margin-top:8mm}.mt-\\[10mm\\]{margin-top:10mm}.mt-\\[14mm\\]{margin-top:14mm}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-8{margin-right:calc(var(--spacing) * 8)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}.mb-\\[2mm\\]{margin-bottom:2mm}.mb-\\[4mm\\]{margin-bottom:4mm}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.aspect-square{aspect-ratio:1}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-32{height:calc(var(--spacing) * 32)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[3mm\\]{height:3mm}.h-\\[90vh\\]{height:90vh}.h-\\[280px\\]{height:280px}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[80px\\]{min-height:80px}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-\\[30mm\\]{width:30mm}.w-full{width:100%}.w-px{width:1px}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90mm\\]{max-width:90mm}.max-w-\\[100mm\\]{max-width:100mm}.max-w-\\[120mm\\]{max-width:120mm}.max-w-\\[120px\\]{max-width:120px}.max-w-\\[140mm\\]{max-width:140mm}.max-w-\\[140px\\]{max-width:140px}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-44{min-width:calc(var(--spacing) * 44)}.min-w-48{min-width:calc(var(--spacing) * 48)}.min-w-\\[1rem\\]{min-width:1rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[24px\\]{min-width:24px}.min-w-\\[220px\\]{min-width:220px}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.flex-1{flex:1}.\\!shrink-0{flex-shrink:0!important}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.rotate-2{rotate:2deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-700{border-color:var(--color-blue-700)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}.border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-green-200{border-color:var(--color-green-200)}.border-green-300{border-color:var(--color-green-300)}.border-green-500{border-color:var(--color-green-500)}.border-indigo-300{border-color:var(--color-indigo-300)}.border-purple-200{border-color:var(--color-purple-200)}.border-red-200{border-color:var(--color-red-200)}.border-red-400{border-color:var(--color-red-400)}.border-sky-100{border-color:var(--color-sky-100)}.border-transparent{border-color:#0000}.border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.\\!bg-pink-200{background-color:var(--color-pink-200)!important}.bg-\\[\\#1b4433\\]{background-color:#1b4433}.bg-\\[\\#1e293b\\]{background-color:#1e293b}.bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}.bg-\\[\\#334155\\]{background-color:#334155}.bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}.bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}.bg-\\[\\#efece7\\]{background-color:#efece7}.bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-black{background-color:var(--color-black)}.bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-700{background-color:var(--color-emerald-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){.bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-neutral-100{background-color:var(--color-neutral-100)}.bg-pink-100{background-color:var(--color-pink-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-50{background-color:var(--color-red-50)}.bg-rose-700{background-color:var(--color-rose-700)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.object-top{-o-object-position:top;object-position:top}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-\\[3mm\\]{padding:3mm}.p-\\[12mm\\]{padding:12mm}.p-\\[14mm\\]{padding:14mm}.p-\\[15mm\\]{padding:15mm}.p-\\[16mm\\]{padding:16mm}.p-\\[18mm\\]{padding:18mm}.p-\\[20mm\\]{padding:20mm}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-8{padding-inline:calc(var(--spacing) * 8)}.px-12{padding-inline:calc(var(--spacing) * 12)}.px-\\[1mm\\]{padding-inline:1mm}.px-\\[2mm\\]{padding-inline:2mm}.px-\\[16mm\\]{padding-inline:16mm}.px-\\[20mm\\]{padding-inline:20mm}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-16{padding-block:calc(var(--spacing) * 16)}.py-20{padding-block:calc(var(--spacing) * 20)}.py-\\[0\\.2mm\\]{padding-block:.2mm}.py-\\[1\\.2mm\\]{padding-block:1.2mm}.py-\\[1\\.8mm\\]{padding-block:1.8mm}.py-\\[2mm\\]{padding-block:2mm}.py-\\[14mm\\]{padding-block:14mm}.py-\\[18mm\\]{padding-block:18mm}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-\\[1mm\\]{padding-top:1mm}.pt-\\[2mm\\]{padding-top:2mm}.pt-\\[3mm\\]{padding-top:3mm}.pt-\\[4mm\\]{padding-top:4mm}.pt-\\[24mm\\]{padding-top:24mm}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-\\[4mm\\]{padding-right:4mm}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-16{padding-bottom:calc(var(--spacing) * 16)}.pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}.pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}.pb-\\[4mm\\]{padding-bottom:4mm}.pb-\\[12mm\\]{padding-bottom:12mm}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-8{padding-left:calc(var(--spacing) * 8)}.pl-\\[4mm\\]{padding-left:4mm}.pl-\\[5mm\\]{padding-left:5mm}.text-center{text-align:center}.text-left{text-align:left}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[7pt\\]{font-size:7pt}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[16px\\]{font-size:16px}.text-\\[20px\\]{font-size:20px}.text-\\[22px\\]{font-size:22px}.text-\\[30px\\]{font-size:30px}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}.leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}.leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}.leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}.tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}.tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.break-all{word-break:break-all}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#111\\]{color:#111}.text-amber-700{color:var(--color-amber-700)}.text-amber-800{color:var(--color-amber-800)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-emerald-600{color:var(--color-emerald-600)}.text-emerald-700{color:var(--color-emerald-700)}.text-emerald-900{color:var(--color-emerald-900)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-gray-950{color:var(--color-gray-950)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-indigo-600{color:var(--color-indigo-600)}.text-indigo-700{color:var(--color-indigo-700)}.text-indigo-900{color:var(--color-indigo-900)}.text-neutral-500{color:var(--color-neutral-500)}.text-orange-700{color:var(--color-orange-700)}.text-pink-700{color:var(--color-pink-700)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-900{color:var(--color-red-900)}.text-rose-700{color:var(--color-rose-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-800{color:var(--color-sky-800)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-90{opacity:.9}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-offset-2{outline-offset:2px}.outline-blue-100{outline-color:var(--color-blue-100)}.drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}.group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}.group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}.group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}.group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}.group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}.peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}.peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}.placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:w-40:focus{width:calc(var(--spacing) * 40)}.focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}.focus\\:bg-red-50:focus{background-color:var(--color-red-50)}.focus\\:text-gray-900:focus{color:var(--color-gray-900)}.focus\\:text-red-700:focus{color:var(--color-red-700)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}.focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}.focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}.data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}:where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}.sm\\:text-left{text-align:left}}@media(min-width:48rem){.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.print\\:transform-none{transform:none}}.\\[\\&\\>button\\]\\:hidden>button{display:none}.\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}.uhuu-image-container{overflow:hidden;position:absolute!important}.uhuu-image-inner{width:100%;height:100%;position:relative;overflow:hidden}.uhuu-image-inner .cover-image{width:100%;height:100%;max-width:none!important;max-height:none!important}.uhuu-image-inner .cover-image.object-cover{-o-object-fit:cover;object-fit:cover}.uhuu-image-inner .cover-image.object-contain{-o-object-fit:contain;object-fit:contain}.uhuu-image-inner .cover-image.object-fill{-o-object-fit:fill;object-fit:fill}.uhuu-image-inner .cover-image.object-center{-o-object-position:center;object-position:center}.uhuu-image-inner .cover-image.object-top{-o-object-position:top;object-position:top}.uhuu-image-inner .cover-image.object-bottom{-o-object-position:bottom;object-position:bottom}.uhuu-image-inner .cover-image.object-left{-o-object-position:left;object-position:left}.uhuu-image-inner .cover-image.object-right{-o-object-position:right;object-position:right}.uhuu-image-inner .cover-image.object-left-top{-o-object-position:left top;object-position:left top}.uhuu-image-inner .cover-image.object-right-top{-o-object-position:right top;object-position:right top}.uhuu-image-inner .cover-image.object-left-bottom{-o-object-position:left bottom;object-position:left bottom}.uhuu-image-inner .cover-image.object-right-bottom{-o-object-position:right bottom;object-position:right bottom}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-space-x-reverse:0}}}@layer theme{:root,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-700:oklch(55.3% .195 38.402);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-100:oklch(97.3% .071 103.193);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-700:oklch(50% .134 242.749);--color-sky-800:oklch(44.3% .11 240.79);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-900:oklch(35.9% .144 278.697);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-50:oklch(97.1% .014 343.198);--color-pink-100:oklch(94.8% .028 342.258);--color-pink-200:oklch(89.9% .061 343.231);--color-pink-700:oklch(52.5% .223 3.958);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-100:oklch(97% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,[data-uhuu-interactive] :after,[data-uhuu-portal] :after,[data-uhuu-interactive] :before,[data-uhuu-portal] :before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,[data-uhuu-interactive] :host,[data-uhuu-portal] :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}[data-uhuu-interactive] hr,[data-uhuu-portal] hr{height:0;color:inherit;border-top-width:1px}[data-uhuu-interactive] abbr:where([title]),[data-uhuu-portal] abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}[data-uhuu-interactive] h1,[data-uhuu-portal] h1,[data-uhuu-interactive] h2,[data-uhuu-portal] h2,[data-uhuu-interactive] h3,[data-uhuu-portal] h3,[data-uhuu-interactive] h4,[data-uhuu-portal] h4,[data-uhuu-interactive] h5,[data-uhuu-portal] h5,[data-uhuu-interactive] h6,[data-uhuu-portal] h6{font-size:inherit;font-weight:inherit}[data-uhuu-interactive] a,[data-uhuu-portal] a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}[data-uhuu-interactive] b,[data-uhuu-portal] b,[data-uhuu-interactive] strong,[data-uhuu-portal] strong{font-weight:bolder}[data-uhuu-interactive] code,[data-uhuu-portal] code,[data-uhuu-interactive] kbd,[data-uhuu-portal] kbd,[data-uhuu-interactive] samp,[data-uhuu-portal] samp,[data-uhuu-interactive] pre,[data-uhuu-portal] pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}[data-uhuu-interactive] small,[data-uhuu-portal] small{font-size:80%}[data-uhuu-interactive] sub,[data-uhuu-portal] sub,[data-uhuu-interactive] sup,[data-uhuu-portal] sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}[data-uhuu-interactive] sub,[data-uhuu-portal] sub{bottom:-.25em}[data-uhuu-interactive] sup,[data-uhuu-portal] sup{top:-.5em}[data-uhuu-interactive] table,[data-uhuu-portal] table{text-indent:0;border-color:inherit;border-collapse:collapse}[data-uhuu-interactive] :-moz-focusring,[data-uhuu-portal] :-moz-focusring{outline:auto}[data-uhuu-interactive] progress,[data-uhuu-portal] progress{vertical-align:baseline}[data-uhuu-interactive] summary,[data-uhuu-portal] summary{display:list-item}[data-uhuu-interactive] ol,[data-uhuu-portal] ol,[data-uhuu-interactive] ul,[data-uhuu-portal] ul,[data-uhuu-interactive] menu,[data-uhuu-portal] menu{list-style:none}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] svg,[data-uhuu-portal] svg,[data-uhuu-interactive] video,[data-uhuu-portal] video,[data-uhuu-interactive] canvas,[data-uhuu-portal] canvas,[data-uhuu-interactive] audio,[data-uhuu-portal] audio,[data-uhuu-interactive] iframe,[data-uhuu-portal] iframe,[data-uhuu-interactive] embed,[data-uhuu-portal] embed,[data-uhuu-interactive] object,[data-uhuu-portal] object{vertical-align:middle;display:block}[data-uhuu-interactive] img,[data-uhuu-portal] img,[data-uhuu-interactive] video,[data-uhuu-portal] video{max-width:100%;height:auto}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input,[data-uhuu-portal] input,[data-uhuu-interactive] select,[data-uhuu-portal] select,[data-uhuu-interactive] optgroup,[data-uhuu-portal] optgroup,[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup{font-weight:bolder}[data-uhuu-interactive] :where(select:is([multiple],[size])) optgroup option,[data-uhuu-portal] :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{margin-inline-end:4px}[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{opacity:1}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:currentColor}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] ::-moz-placeholder,[data-uhuu-portal] ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}[data-uhuu-interactive] ::placeholder,[data-uhuu-portal] ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}[data-uhuu-interactive] textarea,[data-uhuu-portal] textarea{resize:vertical}[data-uhuu-interactive] ::-webkit-search-decoration,[data-uhuu-portal] ::-webkit-search-decoration{-webkit-appearance:none}[data-uhuu-interactive] ::-webkit-date-and-time-value,[data-uhuu-portal] ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{display:inline-flex}[data-uhuu-interactive] ::-webkit-datetime-edit-fields-wrapper,[data-uhuu-portal] ::-webkit-datetime-edit-fields-wrapper{padding:0}[data-uhuu-interactive] ::-webkit-datetime-edit,[data-uhuu-portal] ::-webkit-datetime-edit{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-year-field,[data-uhuu-portal] ::-webkit-datetime-edit-year-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-month-field,[data-uhuu-portal] ::-webkit-datetime-edit-month-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-day-field,[data-uhuu-portal] ::-webkit-datetime-edit-day-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-hour-field,[data-uhuu-portal] ::-webkit-datetime-edit-hour-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-minute-field,[data-uhuu-portal] ::-webkit-datetime-edit-minute-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-second-field,[data-uhuu-portal] ::-webkit-datetime-edit-second-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-millisecond-field,[data-uhuu-portal] ::-webkit-datetime-edit-millisecond-field{padding-block:0}[data-uhuu-interactive] ::-webkit-datetime-edit-meridiem-field,[data-uhuu-portal] ::-webkit-datetime-edit-meridiem-field{padding-block:0}[data-uhuu-interactive] ::-webkit-calendar-picker-indicator,[data-uhuu-portal] ::-webkit-calendar-picker-indicator{line-height:1}[data-uhuu-interactive] :-moz-ui-invalid,[data-uhuu-portal] :-moz-ui-invalid{box-shadow:none}[data-uhuu-interactive] button,[data-uhuu-portal] button,[data-uhuu-interactive] input:where([type=button],[type=reset],[type=submit]),[data-uhuu-portal] input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::file-selector-button,[data-uhuu-portal] ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}[data-uhuu-interactive] ::-webkit-inner-spin-button,[data-uhuu-portal] ::-webkit-inner-spin-button{height:auto}[data-uhuu-interactive] ::-webkit-outer-spin-button,[data-uhuu-portal] ::-webkit-outer-spin-button{height:auto}[data-uhuu-interactive] [hidden]:where(:not([hidden=until-found])),[data-uhuu-portal] [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{[data-uhuu-interactive] .pointer-events-none,[data-uhuu-portal] .pointer-events-none{pointer-events:none}[data-uhuu-interactive] .invisible,[data-uhuu-portal] .invisible{visibility:hidden}[data-uhuu-interactive] .visible,[data-uhuu-portal] .visible{visibility:visible}[data-uhuu-interactive] .sr-only,[data-uhuu-portal] .sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}[data-uhuu-interactive] .absolute,[data-uhuu-portal] .absolute{position:absolute}[data-uhuu-interactive] .fixed,[data-uhuu-portal] .fixed{position:fixed}[data-uhuu-interactive] .relative,[data-uhuu-portal] .relative{position:relative}[data-uhuu-interactive] .static,[data-uhuu-portal] .static{position:static}[data-uhuu-interactive] .inset-0,[data-uhuu-portal] .inset-0{inset:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-6,[data-uhuu-portal] .inset-6{inset:calc(var(--spacing) * 6)}[data-uhuu-interactive] .inset-x-0,[data-uhuu-portal] .inset-x-0{inset-inline:calc(var(--spacing) * 0)}[data-uhuu-interactive] .inset-y-0,[data-uhuu-portal] .inset-y-0{inset-block:calc(var(--spacing) * 0)}[data-uhuu-interactive] .start,[data-uhuu-portal] .start{inset-inline-start:var(--spacing)}[data-uhuu-interactive] .end,[data-uhuu-portal] .end{inset-inline-end:var(--spacing)}[data-uhuu-interactive] .-top-3,[data-uhuu-portal] .-top-3{top:calc(var(--spacing) * -3)}[data-uhuu-interactive] .top-0,[data-uhuu-portal] .top-0{top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .top-1\\/2,[data-uhuu-portal] .top-1\\/2{top:50%}[data-uhuu-interactive] .top-2,[data-uhuu-portal] .top-2{top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .top-3,[data-uhuu-portal] .top-3{top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .top-4,[data-uhuu-portal] .top-4{top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .top-6,[data-uhuu-portal] .top-6{top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .top-\\[50\\%\\],[data-uhuu-portal] .top-\\[50\\%\\]{top:50%}[data-uhuu-interactive] .-right-3,[data-uhuu-portal] .-right-3{right:calc(var(--spacing) * -3)}[data-uhuu-interactive] .right-0,[data-uhuu-portal] .right-0{right:calc(var(--spacing) * 0)}[data-uhuu-interactive] .right-2,[data-uhuu-portal] .right-2{right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .right-4,[data-uhuu-portal] .right-4{right:calc(var(--spacing) * 4)}[data-uhuu-interactive] .right-\\[15mm\\],[data-uhuu-portal] .right-\\[15mm\\]{right:15mm}[data-uhuu-interactive] .bottom-0,[data-uhuu-portal] .bottom-0{bottom:calc(var(--spacing) * 0)}[data-uhuu-interactive] .bottom-2,[data-uhuu-portal] .bottom-2{bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .bottom-4,[data-uhuu-portal] .bottom-4{bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .bottom-\\[10mm\\],[data-uhuu-portal] .bottom-\\[10mm\\]{bottom:10mm}[data-uhuu-interactive] .left-0,[data-uhuu-portal] .left-0{left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .left-2,[data-uhuu-portal] .left-2{left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .left-3,[data-uhuu-portal] .left-3{left:calc(var(--spacing) * 3)}[data-uhuu-interactive] .left-4,[data-uhuu-portal] .left-4{left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .left-6,[data-uhuu-portal] .left-6{left:calc(var(--spacing) * 6)}[data-uhuu-interactive] .left-\\[15mm\\],[data-uhuu-portal] .left-\\[15mm\\]{left:15mm}[data-uhuu-interactive] .left-\\[50\\%\\],[data-uhuu-portal] .left-\\[50\\%\\]{left:50%}[data-uhuu-interactive] .z-10,[data-uhuu-portal] .z-10{z-index:10}[data-uhuu-interactive] .z-20,[data-uhuu-portal] .z-20{z-index:20}[data-uhuu-interactive] .z-30,[data-uhuu-portal] .z-30{z-index:30}[data-uhuu-interactive] .z-50,[data-uhuu-portal] .z-50{z-index:50}[data-uhuu-interactive] .z-\\[2\\],[data-uhuu-portal] .z-\\[2\\]{z-index:2}[data-uhuu-interactive] .container,[data-uhuu-portal] .container{width:100%}@media(min-width:40rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:40rem}}@media(min-width:48rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:48rem}}@media(min-width:64rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:64rem}}@media(min-width:80rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:80rem}}@media(min-width:96rem){[data-uhuu-interactive] .container,[data-uhuu-portal] .container{max-width:96rem}}[data-uhuu-interactive] .-mx-1,[data-uhuu-portal] .-mx-1{margin-inline:calc(var(--spacing) * -1)}[data-uhuu-interactive] .mx-0\\.5,[data-uhuu-portal] .mx-0\\.5{margin-inline:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mx-4,[data-uhuu-portal] .mx-4{margin-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mx-auto,[data-uhuu-portal] .mx-auto{margin-inline:auto}[data-uhuu-interactive] .my-1,[data-uhuu-portal] .my-1{margin-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .my-1\\.5,[data-uhuu-portal] .my-1\\.5{margin-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .my-\\[2\\.2mm\\],[data-uhuu-portal] .my-\\[2\\.2mm\\]{margin-block:2.2mm}[data-uhuu-interactive] .my-\\[2mm\\],[data-uhuu-portal] .my-\\[2mm\\]{margin-block:2mm}[data-uhuu-interactive] .my-\\[3mm\\],[data-uhuu-portal] .my-\\[3mm\\]{margin-block:3mm}[data-uhuu-interactive] .my-\\[4mm\\],[data-uhuu-portal] .my-\\[4mm\\]{margin-block:4mm}[data-uhuu-interactive] .mt-0,[data-uhuu-portal] .mt-0{margin-top:calc(var(--spacing) * 0)}[data-uhuu-interactive] .mt-0\\.5,[data-uhuu-portal] .mt-0\\.5{margin-top:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mt-1,[data-uhuu-portal] .mt-1{margin-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mt-2,[data-uhuu-portal] .mt-2{margin-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mt-3,[data-uhuu-portal] .mt-3{margin-top:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mt-4,[data-uhuu-portal] .mt-4{margin-top:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mt-6,[data-uhuu-portal] .mt-6{margin-top:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mt-8,[data-uhuu-portal] .mt-8{margin-top:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mt-\\[1mm\\],[data-uhuu-portal] .mt-\\[1mm\\]{margin-top:1mm}[data-uhuu-interactive] .mt-\\[2mm\\],[data-uhuu-portal] .mt-\\[2mm\\]{margin-top:2mm}[data-uhuu-interactive] .mt-\\[4mm\\],[data-uhuu-portal] .mt-\\[4mm\\]{margin-top:4mm}[data-uhuu-interactive] .mt-\\[5mm\\],[data-uhuu-portal] .mt-\\[5mm\\]{margin-top:5mm}[data-uhuu-interactive] .mt-\\[6mm\\],[data-uhuu-portal] .mt-\\[6mm\\]{margin-top:6mm}[data-uhuu-interactive] .mt-\\[8mm\\],[data-uhuu-portal] .mt-\\[8mm\\]{margin-top:8mm}[data-uhuu-interactive] .mt-\\[10mm\\],[data-uhuu-portal] .mt-\\[10mm\\]{margin-top:10mm}[data-uhuu-interactive] .mt-\\[14mm\\],[data-uhuu-portal] .mt-\\[14mm\\]{margin-top:14mm}[data-uhuu-interactive] .mr-2,[data-uhuu-portal] .mr-2{margin-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mr-8,[data-uhuu-portal] .mr-8{margin-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .mb-0\\.5,[data-uhuu-portal] .mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}[data-uhuu-interactive] .mb-1,[data-uhuu-portal] .mb-1{margin-bottom:calc(var(--spacing) * 1)}[data-uhuu-interactive] .mb-2,[data-uhuu-portal] .mb-2{margin-bottom:calc(var(--spacing) * 2)}[data-uhuu-interactive] .mb-3,[data-uhuu-portal] .mb-3{margin-bottom:calc(var(--spacing) * 3)}[data-uhuu-interactive] .mb-4,[data-uhuu-portal] .mb-4{margin-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .mb-5,[data-uhuu-portal] .mb-5{margin-bottom:calc(var(--spacing) * 5)}[data-uhuu-interactive] .mb-6,[data-uhuu-portal] .mb-6{margin-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .mb-\\[1\\.5mm\\],[data-uhuu-portal] .mb-\\[1\\.5mm\\]{margin-bottom:1.5mm}[data-uhuu-interactive] .mb-\\[2mm\\],[data-uhuu-portal] .mb-\\[2mm\\]{margin-bottom:2mm}[data-uhuu-interactive] .mb-\\[4mm\\],[data-uhuu-portal] .mb-\\[4mm\\]{margin-bottom:4mm}[data-uhuu-interactive] .ml-1,[data-uhuu-portal] .ml-1{margin-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .ml-auto,[data-uhuu-portal] .ml-auto{margin-left:auto}[data-uhuu-interactive] .block,[data-uhuu-portal] .block{display:block}[data-uhuu-interactive] .contents,[data-uhuu-portal] .contents{display:contents}[data-uhuu-interactive] .flex,[data-uhuu-portal] .flex{display:flex}[data-uhuu-interactive] .flow-root,[data-uhuu-portal] .flow-root{display:flow-root}[data-uhuu-interactive] .grid,[data-uhuu-portal] .grid{display:grid}[data-uhuu-interactive] .hidden,[data-uhuu-portal] .hidden{display:none}[data-uhuu-interactive] .inline,[data-uhuu-portal] .inline{display:inline}[data-uhuu-interactive] .inline-block,[data-uhuu-portal] .inline-block{display:inline-block}[data-uhuu-interactive] .inline-flex,[data-uhuu-portal] .inline-flex{display:inline-flex}[data-uhuu-interactive] .table,[data-uhuu-portal] .table{display:table}[data-uhuu-interactive] .aspect-square,[data-uhuu-portal] .aspect-square{aspect-ratio:1}[data-uhuu-interactive] .size-3,[data-uhuu-portal] .size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .size-3\\.5,[data-uhuu-portal] .size-3\\.5{width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .size-4,[data-uhuu-portal] .size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-1\\.5,[data-uhuu-portal] .h-1\\.5{height:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .h-3,[data-uhuu-portal] .h-3{height:calc(var(--spacing) * 3)}[data-uhuu-interactive] .h-3\\.5,[data-uhuu-portal] .h-3\\.5{height:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .h-4,[data-uhuu-portal] .h-4{height:calc(var(--spacing) * 4)}[data-uhuu-interactive] .h-5,[data-uhuu-portal] .h-5{height:calc(var(--spacing) * 5)}[data-uhuu-interactive] .h-6,[data-uhuu-portal] .h-6{height:calc(var(--spacing) * 6)}[data-uhuu-interactive] .h-7,[data-uhuu-portal] .h-7{height:calc(var(--spacing) * 7)}[data-uhuu-interactive] .h-8,[data-uhuu-portal] .h-8{height:calc(var(--spacing) * 8)}[data-uhuu-interactive] .h-9,[data-uhuu-portal] .h-9{height:calc(var(--spacing) * 9)}[data-uhuu-interactive] .h-10,[data-uhuu-portal] .h-10{height:calc(var(--spacing) * 10)}[data-uhuu-interactive] .h-11,[data-uhuu-portal] .h-11{height:calc(var(--spacing) * 11)}[data-uhuu-interactive] .h-12,[data-uhuu-portal] .h-12{height:calc(var(--spacing) * 12)}[data-uhuu-interactive] .h-16,[data-uhuu-portal] .h-16{height:calc(var(--spacing) * 16)}[data-uhuu-interactive] .h-20,[data-uhuu-portal] .h-20{height:calc(var(--spacing) * 20)}[data-uhuu-interactive] .h-24,[data-uhuu-portal] .h-24{height:calc(var(--spacing) * 24)}[data-uhuu-interactive] .h-28,[data-uhuu-portal] .h-28{height:calc(var(--spacing) * 28)}[data-uhuu-interactive] .h-32,[data-uhuu-portal] .h-32{height:calc(var(--spacing) * 32)}[data-uhuu-interactive] .h-48,[data-uhuu-portal] .h-48{height:calc(var(--spacing) * 48)}[data-uhuu-interactive] .h-\\[3mm\\],[data-uhuu-portal] .h-\\[3mm\\]{height:3mm}[data-uhuu-interactive] .h-\\[90vh\\],[data-uhuu-portal] .h-\\[90vh\\]{height:90vh}[data-uhuu-interactive] .h-\\[280px\\],[data-uhuu-portal] .h-\\[280px\\]{height:280px}[data-uhuu-interactive] .h-\\[var\\(--radix-select-trigger-height\\)\\],[data-uhuu-portal] .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}[data-uhuu-interactive] .h-full,[data-uhuu-portal] .h-full{height:100%}[data-uhuu-interactive] .h-px,[data-uhuu-portal] .h-px{height:1px}[data-uhuu-interactive] .h-screen,[data-uhuu-portal] .h-screen{height:100vh}[data-uhuu-interactive] .max-h-\\[--radix-select-content-available-height\\],[data-uhuu-portal] .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}[data-uhuu-interactive] .max-h-\\[calc\\(90vh-100px\\)\\],[data-uhuu-portal] .max-h-\\[calc\\(90vh-100px\\)\\]{max-height:calc(90vh - 100px)}[data-uhuu-interactive] .min-h-0,[data-uhuu-portal] .min-h-0{min-height:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-h-\\[80px\\],[data-uhuu-portal] .min-h-\\[80px\\]{min-height:80px}[data-uhuu-interactive] .w-3,[data-uhuu-portal] .w-3{width:calc(var(--spacing) * 3)}[data-uhuu-interactive] .w-3\\.5,[data-uhuu-portal] .w-3\\.5{width:calc(var(--spacing) * 3.5)}[data-uhuu-interactive] .w-3\\/4,[data-uhuu-portal] .w-3\\/4{width:75%}[data-uhuu-interactive] .w-4,[data-uhuu-portal] .w-4{width:calc(var(--spacing) * 4)}[data-uhuu-interactive] .w-6,[data-uhuu-portal] .w-6{width:calc(var(--spacing) * 6)}[data-uhuu-interactive] .w-7,[data-uhuu-portal] .w-7{width:calc(var(--spacing) * 7)}[data-uhuu-interactive] .w-8,[data-uhuu-portal] .w-8{width:calc(var(--spacing) * 8)}[data-uhuu-interactive] .w-9,[data-uhuu-portal] .w-9{width:calc(var(--spacing) * 9)}[data-uhuu-interactive] .w-10,[data-uhuu-portal] .w-10{width:calc(var(--spacing) * 10)}[data-uhuu-interactive] .w-12,[data-uhuu-portal] .w-12{width:calc(var(--spacing) * 12)}[data-uhuu-interactive] .w-16,[data-uhuu-portal] .w-16{width:calc(var(--spacing) * 16)}[data-uhuu-interactive] .w-20,[data-uhuu-portal] .w-20{width:calc(var(--spacing) * 20)}[data-uhuu-interactive] .w-24,[data-uhuu-portal] .w-24{width:calc(var(--spacing) * 24)}[data-uhuu-interactive] .w-40,[data-uhuu-portal] .w-40{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .w-48,[data-uhuu-portal] .w-48{width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .w-52,[data-uhuu-portal] .w-52{width:calc(var(--spacing) * 52)}[data-uhuu-interactive] .w-\\[30mm\\],[data-uhuu-portal] .w-\\[30mm\\]{width:30mm}[data-uhuu-interactive] .w-full,[data-uhuu-portal] .w-full{width:100%}[data-uhuu-interactive] .w-px,[data-uhuu-portal] .w-px{width:1px}[data-uhuu-interactive] .max-w-\\[85\\%\\],[data-uhuu-portal] .max-w-\\[85\\%\\]{max-width:85%}[data-uhuu-interactive] .max-w-\\[90mm\\],[data-uhuu-portal] .max-w-\\[90mm\\]{max-width:90mm}[data-uhuu-interactive] .max-w-\\[100mm\\],[data-uhuu-portal] .max-w-\\[100mm\\]{max-width:100mm}[data-uhuu-interactive] .max-w-\\[120mm\\],[data-uhuu-portal] .max-w-\\[120mm\\]{max-width:120mm}[data-uhuu-interactive] .max-w-\\[120px\\],[data-uhuu-portal] .max-w-\\[120px\\]{max-width:120px}[data-uhuu-interactive] .max-w-\\[140mm\\],[data-uhuu-portal] .max-w-\\[140mm\\]{max-width:140mm}[data-uhuu-interactive] .max-w-\\[140px\\],[data-uhuu-portal] .max-w-\\[140px\\]{max-width:140px}[data-uhuu-interactive] .max-w-md,[data-uhuu-portal] .max-w-md{max-width:var(--container-md)}[data-uhuu-interactive] .max-w-none,[data-uhuu-portal] .max-w-none{max-width:none}[data-uhuu-interactive] .max-w-sm,[data-uhuu-portal] .max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .max-w-xs,[data-uhuu-portal] .max-w-xs{max-width:var(--container-xs)}[data-uhuu-interactive] .min-w-0,[data-uhuu-portal] .min-w-0{min-width:calc(var(--spacing) * 0)}[data-uhuu-interactive] .min-w-44,[data-uhuu-portal] .min-w-44{min-width:calc(var(--spacing) * 44)}[data-uhuu-interactive] .min-w-48,[data-uhuu-portal] .min-w-48{min-width:calc(var(--spacing) * 48)}[data-uhuu-interactive] .min-w-\\[1rem\\],[data-uhuu-portal] .min-w-\\[1rem\\]{min-width:1rem}[data-uhuu-interactive] .min-w-\\[8rem\\],[data-uhuu-portal] .min-w-\\[8rem\\]{min-width:8rem}[data-uhuu-interactive] .min-w-\\[24px\\],[data-uhuu-portal] .min-w-\\[24px\\]{min-width:24px}[data-uhuu-interactive] .min-w-\\[220px\\],[data-uhuu-portal] .min-w-\\[220px\\]{min-width:220px}[data-uhuu-interactive] .min-w-\\[var\\(--radix-select-trigger-width\\)\\],[data-uhuu-portal] .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}[data-uhuu-interactive] .flex-1,[data-uhuu-portal] .flex-1{flex:1}[data-uhuu-interactive] .\\!shrink-0,[data-uhuu-portal] .\\!shrink-0{flex-shrink:0!important}[data-uhuu-interactive] .shrink,[data-uhuu-portal] .shrink{flex-shrink:1}[data-uhuu-interactive] .shrink-0,[data-uhuu-portal] .shrink-0{flex-shrink:0}[data-uhuu-interactive] .grow,[data-uhuu-portal] .grow{flex-grow:1}[data-uhuu-interactive] .border-collapse,[data-uhuu-portal] .border-collapse{border-collapse:collapse}[data-uhuu-interactive] .origin-\\[--radix-select-content-transform-origin\\],[data-uhuu-portal] .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}[data-uhuu-interactive] .translate-x-\\[-50\\%\\],[data-uhuu-portal] .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .-translate-y-1\\/2,[data-uhuu-portal] .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .translate-y-\\[-50\\%\\],[data-uhuu-portal] .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .scale-105,[data-uhuu-portal] .scale-105{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .scale-110,[data-uhuu-portal] .scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .rotate-2,[data-uhuu-portal] .rotate-2{rotate:2deg}[data-uhuu-interactive] .rotate-45,[data-uhuu-portal] .rotate-45{rotate:45deg}[data-uhuu-interactive] .transform,[data-uhuu-portal] .transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}[data-uhuu-interactive] .cursor-default,[data-uhuu-portal] .cursor-default{cursor:default}[data-uhuu-interactive] .cursor-grab,[data-uhuu-portal] .cursor-grab{cursor:grab}[data-uhuu-interactive] .cursor-pointer,[data-uhuu-portal] .cursor-pointer{cursor:pointer}[data-uhuu-interactive] .touch-none,[data-uhuu-portal] .touch-none{touch-action:none}[data-uhuu-interactive] .resize,[data-uhuu-portal] .resize{resize:both}[data-uhuu-interactive] .list-inside,[data-uhuu-portal] .list-inside{list-style-position:inside}[data-uhuu-interactive] .list-decimal,[data-uhuu-portal] .list-decimal{list-style-type:decimal}[data-uhuu-interactive] .list-disc,[data-uhuu-portal] .list-disc{list-style-type:disc}[data-uhuu-interactive] .grid-cols-2,[data-uhuu-portal] .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-3,[data-uhuu-portal] .grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-4,[data-uhuu-portal] .grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}[data-uhuu-interactive] .grid-cols-\\[35mm_1fr\\],[data-uhuu-portal] .grid-cols-\\[35mm_1fr\\]{grid-template-columns:35mm 1fr}[data-uhuu-interactive] .flex-col,[data-uhuu-portal] .flex-col{flex-direction:column}[data-uhuu-interactive] .flex-col-reverse,[data-uhuu-portal] .flex-col-reverse{flex-direction:column-reverse}[data-uhuu-interactive] .flex-wrap,[data-uhuu-portal] .flex-wrap{flex-wrap:wrap}[data-uhuu-interactive] .items-center,[data-uhuu-portal] .items-center{align-items:center}[data-uhuu-interactive] .items-end,[data-uhuu-portal] .items-end{align-items:flex-end}[data-uhuu-interactive] .items-start,[data-uhuu-portal] .items-start{align-items:flex-start}[data-uhuu-interactive] .justify-between,[data-uhuu-portal] .justify-between{justify-content:space-between}[data-uhuu-interactive] .justify-center,[data-uhuu-portal] .justify-center{justify-content:center}[data-uhuu-interactive] .justify-end,[data-uhuu-portal] .justify-end{justify-content:flex-end}[data-uhuu-interactive] .justify-start,[data-uhuu-portal] .justify-start{justify-content:flex-start}[data-uhuu-interactive] .gap-0,[data-uhuu-portal] .gap-0{gap:calc(var(--spacing) * 0)}[data-uhuu-interactive] .gap-1,[data-uhuu-portal] .gap-1{gap:calc(var(--spacing) * 1)}[data-uhuu-interactive] .gap-1\\.5,[data-uhuu-portal] .gap-1\\.5{gap:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .gap-2,[data-uhuu-portal] .gap-2{gap:calc(var(--spacing) * 2)}[data-uhuu-interactive] .gap-3,[data-uhuu-portal] .gap-3{gap:calc(var(--spacing) * 3)}[data-uhuu-interactive] .gap-4,[data-uhuu-portal] .gap-4{gap:calc(var(--spacing) * 4)}[data-uhuu-interactive] .gap-5,[data-uhuu-portal] .gap-5{gap:calc(var(--spacing) * 5)}[data-uhuu-interactive] .gap-6,[data-uhuu-portal] .gap-6{gap:calc(var(--spacing) * 6)}[data-uhuu-interactive] :where(.space-y-1>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-1\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-2\\.5>:not(:last-child)),[data-uhuu-portal] :where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-3>:not(:last-child)),[data-uhuu-portal] :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] :where(.space-y-4>:not(:last-child)),[data-uhuu-portal] :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}[data-uhuu-interactive] .truncate,[data-uhuu-portal] .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[data-uhuu-interactive] .overflow-auto,[data-uhuu-portal] .overflow-auto{overflow:auto}[data-uhuu-interactive] .overflow-hidden,[data-uhuu-portal] .overflow-hidden{overflow:hidden}[data-uhuu-interactive] .overflow-x-hidden,[data-uhuu-portal] .overflow-x-hidden{overflow-x:hidden}[data-uhuu-interactive] .overflow-y-auto,[data-uhuu-portal] .overflow-y-auto{overflow-y:auto}[data-uhuu-interactive] .rounded,[data-uhuu-portal] .rounded{border-radius:.25rem}[data-uhuu-interactive] .rounded-full,[data-uhuu-portal] .rounded-full{border-radius:3.40282e38px}[data-uhuu-interactive] .rounded-lg,[data-uhuu-portal] .rounded-lg{border-radius:var(--radius-lg)}[data-uhuu-interactive] .rounded-md,[data-uhuu-portal] .rounded-md{border-radius:var(--radius-md)}[data-uhuu-interactive] .rounded-sm,[data-uhuu-portal] .rounded-sm{border-radius:var(--radius-sm)}[data-uhuu-interactive] .border,[data-uhuu-portal] .border{border-style:var(--tw-border-style);border-width:1px}[data-uhuu-interactive] .border-0,[data-uhuu-portal] .border-0{border-style:var(--tw-border-style);border-width:0}[data-uhuu-interactive] .border-2,[data-uhuu-portal] .border-2{border-style:var(--tw-border-style);border-width:2px}[data-uhuu-interactive] .border-4,[data-uhuu-portal] .border-4{border-style:var(--tw-border-style);border-width:4px}[data-uhuu-interactive] .border-t,[data-uhuu-portal] .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}[data-uhuu-interactive] .border-r,[data-uhuu-portal] .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}[data-uhuu-interactive] .border-b,[data-uhuu-portal] .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}[data-uhuu-interactive] .border-l,[data-uhuu-portal] .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}[data-uhuu-interactive] .border-l-2,[data-uhuu-portal] .border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}[data-uhuu-interactive] .border-l-4,[data-uhuu-portal] .border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}[data-uhuu-interactive] .border-dashed,[data-uhuu-portal] .border-dashed{--tw-border-style:dashed;border-style:dashed}[data-uhuu-interactive] .border-blue-200,[data-uhuu-portal] .border-blue-200{border-color:var(--color-blue-200)}[data-uhuu-interactive] .border-blue-300,[data-uhuu-portal] .border-blue-300{border-color:var(--color-blue-300)}[data-uhuu-interactive] .border-blue-400,[data-uhuu-portal] .border-blue-400{border-color:var(--color-blue-400)}[data-uhuu-interactive] .border-blue-500,[data-uhuu-portal] .border-blue-500{border-color:var(--color-blue-500)}[data-uhuu-interactive] .border-blue-700,[data-uhuu-portal] .border-blue-700{border-color:var(--color-blue-700)}[data-uhuu-interactive] .border-emerald-100,[data-uhuu-portal] .border-emerald-100{border-color:var(--color-emerald-100)}[data-uhuu-interactive] .border-gray-200,[data-uhuu-portal] .border-gray-200{border-color:var(--color-gray-200)}[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:#e5e7eb99}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/60,[data-uhuu-portal] .border-gray-200\\/60{border-color:color-mix(in oklab,var(--color-gray-200) 60%,transparent)}}[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:#e5e7ebcc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-gray-200\\/80,[data-uhuu-portal] .border-gray-200\\/80{border-color:color-mix(in oklab,var(--color-gray-200) 80%,transparent)}}[data-uhuu-interactive] .border-gray-300,[data-uhuu-portal] .border-gray-300{border-color:var(--color-gray-300)}[data-uhuu-interactive] .border-gray-400,[data-uhuu-portal] .border-gray-400{border-color:var(--color-gray-400)}[data-uhuu-interactive] .border-gray-900,[data-uhuu-portal] .border-gray-900{border-color:var(--color-gray-900)}[data-uhuu-interactive] .border-green-200,[data-uhuu-portal] .border-green-200{border-color:var(--color-green-200)}[data-uhuu-interactive] .border-green-300,[data-uhuu-portal] .border-green-300{border-color:var(--color-green-300)}[data-uhuu-interactive] .border-green-500,[data-uhuu-portal] .border-green-500{border-color:var(--color-green-500)}[data-uhuu-interactive] .border-indigo-300,[data-uhuu-portal] .border-indigo-300{border-color:var(--color-indigo-300)}[data-uhuu-interactive] .border-purple-200,[data-uhuu-portal] .border-purple-200{border-color:var(--color-purple-200)}[data-uhuu-interactive] .border-red-200,[data-uhuu-portal] .border-red-200{border-color:var(--color-red-200)}[data-uhuu-interactive] .border-red-400,[data-uhuu-portal] .border-red-400{border-color:var(--color-red-400)}[data-uhuu-interactive] .border-sky-100,[data-uhuu-portal] .border-sky-100{border-color:var(--color-sky-100)}[data-uhuu-interactive] .border-transparent,[data-uhuu-portal] .border-transparent{border-color:#0000}[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .border-white\\/60,[data-uhuu-portal] .border-white\\/60{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}[data-uhuu-interactive] .\\!bg-pink-200,[data-uhuu-portal] .\\!bg-pink-200{background-color:var(--color-pink-200)!important}[data-uhuu-interactive] .bg-\\[\\#1b4433\\],[data-uhuu-portal] .bg-\\[\\#1b4433\\]{background-color:#1b4433}[data-uhuu-interactive] .bg-\\[\\#1e293b\\],[data-uhuu-portal] .bg-\\[\\#1e293b\\]{background-color:#1e293b}[data-uhuu-interactive] .bg-\\[\\#2d2d2d\\],[data-uhuu-portal] .bg-\\[\\#2d2d2d\\]{background-color:#2d2d2d}[data-uhuu-interactive] .bg-\\[\\#334155\\],[data-uhuu-portal] .bg-\\[\\#334155\\]{background-color:#334155}[data-uhuu-interactive] .bg-\\[\\#dcd6cd\\],[data-uhuu-portal] .bg-\\[\\#dcd6cd\\]{background-color:#dcd6cd}[data-uhuu-interactive] .bg-\\[\\#e8e3dc\\],[data-uhuu-portal] .bg-\\[\\#e8e3dc\\]{background-color:#e8e3dc}[data-uhuu-interactive] .bg-\\[\\#efece7\\],[data-uhuu-portal] .bg-\\[\\#efece7\\]{background-color:#efece7}[data-uhuu-interactive] .bg-\\[\\#f7f5f0\\],[data-uhuu-portal] .bg-\\[\\#f7f5f0\\]{background-color:#f7f5f0}[data-uhuu-interactive] .bg-amber-50,[data-uhuu-portal] .bg-amber-50{background-color:var(--color-amber-50)}[data-uhuu-interactive] .bg-amber-500,[data-uhuu-portal] .bg-amber-500{background-color:var(--color-amber-500)}[data-uhuu-interactive] .bg-black,[data-uhuu-portal] .bg-black{background-color:var(--color-black)}[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/30,[data-uhuu-portal] .bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/40,[data-uhuu-portal] .bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-black\\/50,[data-uhuu-portal] .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}[data-uhuu-interactive] .bg-blue-50,[data-uhuu-portal] .bg-blue-50{background-color:var(--color-blue-50)}[data-uhuu-interactive] .bg-blue-100,[data-uhuu-portal] .bg-blue-100{background-color:var(--color-blue-100)}[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-500\\/10,[data-uhuu-portal] .bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500) 10%,transparent)}}[data-uhuu-interactive] .bg-blue-600,[data-uhuu-portal] .bg-blue-600{background-color:var(--color-blue-600)}[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:#155dfccc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-blue-600\\/80,[data-uhuu-portal] .bg-blue-600\\/80{background-color:color-mix(in oklab,var(--color-blue-600) 80%,transparent)}}[data-uhuu-interactive] .bg-emerald-100,[data-uhuu-portal] .bg-emerald-100{background-color:var(--color-emerald-100)}[data-uhuu-interactive] .bg-emerald-700,[data-uhuu-portal] .bg-emerald-700{background-color:var(--color-emerald-700)}[data-uhuu-interactive] .bg-gray-50,[data-uhuu-portal] .bg-gray-50{background-color:var(--color-gray-50)}[data-uhuu-interactive] .bg-gray-100,[data-uhuu-portal] .bg-gray-100{background-color:var(--color-gray-100)}[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-100\\/80,[data-uhuu-portal] .bg-gray-100\\/80{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-200,[data-uhuu-portal] .bg-gray-200{background-color:var(--color-gray-200)}[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:#4a5565cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-gray-600\\/80,[data-uhuu-portal] .bg-gray-600\\/80{background-color:color-mix(in oklab,var(--color-gray-600) 80%,transparent)}}[data-uhuu-interactive] .bg-gray-900,[data-uhuu-portal] .bg-gray-900{background-color:var(--color-gray-900)}[data-uhuu-interactive] .bg-gray-950,[data-uhuu-portal] .bg-gray-950{background-color:var(--color-gray-950)}[data-uhuu-interactive] .bg-green-50,[data-uhuu-portal] .bg-green-50{background-color:var(--color-green-50)}[data-uhuu-interactive] .bg-green-100,[data-uhuu-portal] .bg-green-100{background-color:var(--color-green-100)}[data-uhuu-interactive] .bg-neutral-100,[data-uhuu-portal] .bg-neutral-100{background-color:var(--color-neutral-100)}[data-uhuu-interactive] .bg-pink-100,[data-uhuu-portal] .bg-pink-100{background-color:var(--color-pink-100)}[data-uhuu-interactive] .bg-purple-50,[data-uhuu-portal] .bg-purple-50{background-color:var(--color-purple-50)}[data-uhuu-interactive] .bg-red-50,[data-uhuu-portal] .bg-red-50{background-color:var(--color-red-50)}[data-uhuu-interactive] .bg-rose-700,[data-uhuu-portal] .bg-rose-700{background-color:var(--color-rose-700)}[data-uhuu-interactive] .bg-sky-50,[data-uhuu-portal] .bg-sky-50{background-color:var(--color-sky-50)}[data-uhuu-interactive] .bg-slate-50,[data-uhuu-portal] .bg-slate-50{background-color:var(--color-slate-50)}[data-uhuu-interactive] .bg-transparent,[data-uhuu-portal] .bg-transparent{background-color:#0000}[data-uhuu-interactive] .bg-white,[data-uhuu-portal] .bg-white{background-color:var(--color-white)}[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/50,[data-uhuu-portal] .bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/80,[data-uhuu-portal] .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/90,[data-uhuu-portal] .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .bg-white\\/95,[data-uhuu-portal] .bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}[data-uhuu-interactive] .bg-yellow-100,[data-uhuu-portal] .bg-yellow-100{background-color:var(--color-yellow-100)}[data-uhuu-interactive] .bg-gradient-to-br,[data-uhuu-portal] .bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .bg-gradient-to-t,[data-uhuu-portal] .bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}[data-uhuu-interactive] .from-black\\/80,[data-uhuu-portal] .from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-blue-50,[data-uhuu-portal] .from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-emerald-50,[data-uhuu-portal] .from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-gray-100,[data-uhuu-portal] .from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-green-50,[data-uhuu-portal] .from-green-50{--tw-gradient-from:var(--color-green-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-orange-50,[data-uhuu-portal] .from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-pink-50,[data-uhuu-portal] .from-pink-50{--tw-gradient-from:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-purple-50,[data-uhuu-portal] .from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-sky-50,[data-uhuu-portal] .from-sky-50{--tw-gradient-from:var(--color-sky-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-slate-50,[data-uhuu-portal] .from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .from-violet-50,[data-uhuu-portal] .from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .via-white,[data-uhuu-portal] .via-white{--tw-gradient-via:var(--color-white);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}[data-uhuu-interactive] .to-amber-50,[data-uhuu-portal] .to-amber-50{--tw-gradient-to:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-blue-100,[data-uhuu-portal] .to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-gray-200,[data-uhuu-portal] .to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-green-100,[data-uhuu-portal] .to-green-100{--tw-gradient-to:var(--color-green-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-orange-100,[data-uhuu-portal] .to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-50,[data-uhuu-portal] .to-pink-50{--tw-gradient-to:var(--color-pink-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-pink-100,[data-uhuu-portal] .to-pink-100{--tw-gradient-to:var(--color-pink-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-purple-100,[data-uhuu-portal] .to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-100,[data-uhuu-portal] .to-slate-100{--tw-gradient-to:var(--color-slate-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-slate-200,[data-uhuu-portal] .to-slate-200{--tw-gradient-to:var(--color-slate-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-transparent,[data-uhuu-portal] .to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .to-white,[data-uhuu-portal] .to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}[data-uhuu-interactive] .object-contain,[data-uhuu-portal] .object-contain{-o-object-fit:contain;object-fit:contain}[data-uhuu-interactive] .object-cover,[data-uhuu-portal] .object-cover{-o-object-fit:cover;object-fit:cover}[data-uhuu-interactive] .object-center,[data-uhuu-portal] .object-center{-o-object-position:center;object-position:center}[data-uhuu-interactive] .object-top,[data-uhuu-portal] .object-top{-o-object-position:top;object-position:top}[data-uhuu-interactive] .p-0,[data-uhuu-portal] .p-0{padding:calc(var(--spacing) * 0)}[data-uhuu-interactive] .p-1,[data-uhuu-portal] .p-1{padding:calc(var(--spacing) * 1)}[data-uhuu-interactive] .p-1\\.5,[data-uhuu-portal] .p-1\\.5{padding:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .p-2,[data-uhuu-portal] .p-2{padding:calc(var(--spacing) * 2)}[data-uhuu-interactive] .p-3,[data-uhuu-portal] .p-3{padding:calc(var(--spacing) * 3)}[data-uhuu-interactive] .p-4,[data-uhuu-portal] .p-4{padding:calc(var(--spacing) * 4)}[data-uhuu-interactive] .p-6,[data-uhuu-portal] .p-6{padding:calc(var(--spacing) * 6)}[data-uhuu-interactive] .p-8,[data-uhuu-portal] .p-8{padding:calc(var(--spacing) * 8)}[data-uhuu-interactive] .p-\\[3mm\\],[data-uhuu-portal] .p-\\[3mm\\]{padding:3mm}[data-uhuu-interactive] .p-\\[12mm\\],[data-uhuu-portal] .p-\\[12mm\\]{padding:12mm}[data-uhuu-interactive] .p-\\[14mm\\],[data-uhuu-portal] .p-\\[14mm\\]{padding:14mm}[data-uhuu-interactive] .p-\\[15mm\\],[data-uhuu-portal] .p-\\[15mm\\]{padding:15mm}[data-uhuu-interactive] .p-\\[16mm\\],[data-uhuu-portal] .p-\\[16mm\\]{padding:16mm}[data-uhuu-interactive] .p-\\[18mm\\],[data-uhuu-portal] .p-\\[18mm\\]{padding:18mm}[data-uhuu-interactive] .p-\\[20mm\\],[data-uhuu-portal] .p-\\[20mm\\]{padding:20mm}[data-uhuu-interactive] .px-1,[data-uhuu-portal] .px-1{padding-inline:calc(var(--spacing) * 1)}[data-uhuu-interactive] .px-2,[data-uhuu-portal] .px-2{padding-inline:calc(var(--spacing) * 2)}[data-uhuu-interactive] .px-2\\.5,[data-uhuu-portal] .px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .px-3,[data-uhuu-portal] .px-3{padding-inline:calc(var(--spacing) * 3)}[data-uhuu-interactive] .px-4,[data-uhuu-portal] .px-4{padding-inline:calc(var(--spacing) * 4)}[data-uhuu-interactive] .px-8,[data-uhuu-portal] .px-8{padding-inline:calc(var(--spacing) * 8)}[data-uhuu-interactive] .px-12,[data-uhuu-portal] .px-12{padding-inline:calc(var(--spacing) * 12)}[data-uhuu-interactive] .px-\\[1mm\\],[data-uhuu-portal] .px-\\[1mm\\]{padding-inline:1mm}[data-uhuu-interactive] .px-\\[2mm\\],[data-uhuu-portal] .px-\\[2mm\\]{padding-inline:2mm}[data-uhuu-interactive] .px-\\[16mm\\],[data-uhuu-portal] .px-\\[16mm\\]{padding-inline:16mm}[data-uhuu-interactive] .px-\\[20mm\\],[data-uhuu-portal] .px-\\[20mm\\]{padding-inline:20mm}[data-uhuu-interactive] .py-0\\.5,[data-uhuu-portal] .py-0\\.5{padding-block:calc(var(--spacing) * .5)}[data-uhuu-interactive] .py-1,[data-uhuu-portal] .py-1{padding-block:calc(var(--spacing) * 1)}[data-uhuu-interactive] .py-1\\.5,[data-uhuu-portal] .py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}[data-uhuu-interactive] .py-2,[data-uhuu-portal] .py-2{padding-block:calc(var(--spacing) * 2)}[data-uhuu-interactive] .py-2\\.5,[data-uhuu-portal] .py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}[data-uhuu-interactive] .py-3,[data-uhuu-portal] .py-3{padding-block:calc(var(--spacing) * 3)}[data-uhuu-interactive] .py-8,[data-uhuu-portal] .py-8{padding-block:calc(var(--spacing) * 8)}[data-uhuu-interactive] .py-16,[data-uhuu-portal] .py-16{padding-block:calc(var(--spacing) * 16)}[data-uhuu-interactive] .py-20,[data-uhuu-portal] .py-20{padding-block:calc(var(--spacing) * 20)}[data-uhuu-interactive] .py-\\[0\\.2mm\\],[data-uhuu-portal] .py-\\[0\\.2mm\\]{padding-block:.2mm}[data-uhuu-interactive] .py-\\[1\\.2mm\\],[data-uhuu-portal] .py-\\[1\\.2mm\\]{padding-block:1.2mm}[data-uhuu-interactive] .py-\\[1\\.8mm\\],[data-uhuu-portal] .py-\\[1\\.8mm\\]{padding-block:1.8mm}[data-uhuu-interactive] .py-\\[2mm\\],[data-uhuu-portal] .py-\\[2mm\\]{padding-block:2mm}[data-uhuu-interactive] .py-\\[14mm\\],[data-uhuu-portal] .py-\\[14mm\\]{padding-block:14mm}[data-uhuu-interactive] .py-\\[18mm\\],[data-uhuu-portal] .py-\\[18mm\\]{padding-block:18mm}[data-uhuu-interactive] .pt-1,[data-uhuu-portal] .pt-1{padding-top:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pt-2,[data-uhuu-portal] .pt-2{padding-top:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pt-\\[1mm\\],[data-uhuu-portal] .pt-\\[1mm\\]{padding-top:1mm}[data-uhuu-interactive] .pt-\\[2mm\\],[data-uhuu-portal] .pt-\\[2mm\\]{padding-top:2mm}[data-uhuu-interactive] .pt-\\[3mm\\],[data-uhuu-portal] .pt-\\[3mm\\]{padding-top:3mm}[data-uhuu-interactive] .pt-\\[4mm\\],[data-uhuu-portal] .pt-\\[4mm\\]{padding-top:4mm}[data-uhuu-interactive] .pt-\\[24mm\\],[data-uhuu-portal] .pt-\\[24mm\\]{padding-top:24mm}[data-uhuu-interactive] .pr-1,[data-uhuu-portal] .pr-1{padding-right:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pr-2,[data-uhuu-portal] .pr-2{padding-right:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pr-3,[data-uhuu-portal] .pr-3{padding-right:calc(var(--spacing) * 3)}[data-uhuu-interactive] .pr-6,[data-uhuu-portal] .pr-6{padding-right:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pr-8,[data-uhuu-portal] .pr-8{padding-right:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pr-\\[4mm\\],[data-uhuu-portal] .pr-\\[4mm\\]{padding-right:4mm}[data-uhuu-interactive] .pb-4,[data-uhuu-portal] .pb-4{padding-bottom:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pb-6,[data-uhuu-portal] .pb-6{padding-bottom:calc(var(--spacing) * 6)}[data-uhuu-interactive] .pb-16,[data-uhuu-portal] .pb-16{padding-bottom:calc(var(--spacing) * 16)}[data-uhuu-interactive] .pb-\\[1\\.3mm\\],[data-uhuu-portal] .pb-\\[1\\.3mm\\]{padding-bottom:1.3mm}[data-uhuu-interactive] .pb-\\[1\\.5mm\\],[data-uhuu-portal] .pb-\\[1\\.5mm\\]{padding-bottom:1.5mm}[data-uhuu-interactive] .pb-\\[4mm\\],[data-uhuu-portal] .pb-\\[4mm\\]{padding-bottom:4mm}[data-uhuu-interactive] .pb-\\[12mm\\],[data-uhuu-portal] .pb-\\[12mm\\]{padding-bottom:12mm}[data-uhuu-interactive] .pl-0,[data-uhuu-portal] .pl-0{padding-left:calc(var(--spacing) * 0)}[data-uhuu-interactive] .pl-1,[data-uhuu-portal] .pl-1{padding-left:calc(var(--spacing) * 1)}[data-uhuu-interactive] .pl-2,[data-uhuu-portal] .pl-2{padding-left:calc(var(--spacing) * 2)}[data-uhuu-interactive] .pl-4,[data-uhuu-portal] .pl-4{padding-left:calc(var(--spacing) * 4)}[data-uhuu-interactive] .pl-8,[data-uhuu-portal] .pl-8{padding-left:calc(var(--spacing) * 8)}[data-uhuu-interactive] .pl-\\[4mm\\],[data-uhuu-portal] .pl-\\[4mm\\]{padding-left:4mm}[data-uhuu-interactive] .pl-\\[5mm\\],[data-uhuu-portal] .pl-\\[5mm\\]{padding-left:5mm}[data-uhuu-interactive] .text-center,[data-uhuu-portal] .text-center{text-align:center}[data-uhuu-interactive] .text-left,[data-uhuu-portal] .text-left{text-align:left}[data-uhuu-interactive] .align-top,[data-uhuu-portal] .align-top{vertical-align:top}[data-uhuu-interactive] .font-mono,[data-uhuu-portal] .font-mono{font-family:var(--font-mono)}[data-uhuu-interactive] .font-sans,[data-uhuu-portal] .font-sans{font-family:var(--font-sans)}[data-uhuu-interactive] .\\!text-xs,[data-uhuu-portal] .\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}[data-uhuu-interactive] .text-2xl,[data-uhuu-portal] .text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}[data-uhuu-interactive] .text-3xl,[data-uhuu-portal] .text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}[data-uhuu-interactive] .text-4xl,[data-uhuu-portal] .text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}[data-uhuu-interactive] .text-5xl,[data-uhuu-portal] .text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}[data-uhuu-interactive] .text-base,[data-uhuu-portal] .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}[data-uhuu-interactive] .text-lg,[data-uhuu-portal] .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}[data-uhuu-interactive] .text-sm,[data-uhuu-portal] .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}[data-uhuu-interactive] .text-xl,[data-uhuu-portal] .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}[data-uhuu-interactive] .text-xs,[data-uhuu-portal] .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}[data-uhuu-interactive] .text-\\[7pt\\],[data-uhuu-portal] .text-\\[7pt\\]{font-size:7pt}[data-uhuu-interactive] .text-\\[9px\\],[data-uhuu-portal] .text-\\[9px\\]{font-size:9px}[data-uhuu-interactive] .text-\\[10px\\],[data-uhuu-portal] .text-\\[10px\\]{font-size:10px}[data-uhuu-interactive] .text-\\[11px\\],[data-uhuu-portal] .text-\\[11px\\]{font-size:11px}[data-uhuu-interactive] .text-\\[12px\\],[data-uhuu-portal] .text-\\[12px\\]{font-size:12px}[data-uhuu-interactive] .text-\\[13px\\],[data-uhuu-portal] .text-\\[13px\\]{font-size:13px}[data-uhuu-interactive] .text-\\[14px\\],[data-uhuu-portal] .text-\\[14px\\]{font-size:14px}[data-uhuu-interactive] .text-\\[16px\\],[data-uhuu-portal] .text-\\[16px\\]{font-size:16px}[data-uhuu-interactive] .text-\\[20px\\],[data-uhuu-portal] .text-\\[20px\\]{font-size:20px}[data-uhuu-interactive] .text-\\[22px\\],[data-uhuu-portal] .text-\\[22px\\]{font-size:22px}[data-uhuu-interactive] .text-\\[30px\\],[data-uhuu-portal] .text-\\[30px\\]{font-size:30px}[data-uhuu-interactive] .leading-\\[1\\.3\\],[data-uhuu-portal] .leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}[data-uhuu-interactive] .leading-\\[1\\.4\\],[data-uhuu-portal] .leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}[data-uhuu-interactive] .leading-\\[1\\.5\\],[data-uhuu-portal] .leading-\\[1\\.5\\]{--tw-leading:1.5;line-height:1.5}[data-uhuu-interactive] .leading-\\[1\\.25\\],[data-uhuu-portal] .leading-\\[1\\.25\\]{--tw-leading:1.25;line-height:1.25}[data-uhuu-interactive] .leading-\\[1\\.35\\],[data-uhuu-portal] .leading-\\[1\\.35\\]{--tw-leading:1.35;line-height:1.35}[data-uhuu-interactive] .leading-\\[1\\.45\\],[data-uhuu-portal] .leading-\\[1\\.45\\]{--tw-leading:1.45;line-height:1.45}[data-uhuu-interactive] .leading-none,[data-uhuu-portal] .leading-none{--tw-leading:1;line-height:1}[data-uhuu-interactive] .leading-relaxed,[data-uhuu-portal] .leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}[data-uhuu-interactive] .leading-tight,[data-uhuu-portal] .leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}[data-uhuu-interactive] .font-bold,[data-uhuu-portal] .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}[data-uhuu-interactive] .font-medium,[data-uhuu-portal] .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}[data-uhuu-interactive] .font-normal,[data-uhuu-portal] .font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}[data-uhuu-interactive] .font-semibold,[data-uhuu-portal] .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}[data-uhuu-interactive] .tracking-\\[0\\.3em\\],[data-uhuu-portal] .tracking-\\[0\\.3em\\]{--tw-tracking:.3em;letter-spacing:.3em}[data-uhuu-interactive] .tracking-\\[0\\.16em\\],[data-uhuu-portal] .tracking-\\[0\\.16em\\]{--tw-tracking:.16em;letter-spacing:.16em}[data-uhuu-interactive] .tracking-\\[0\\.28em\\],[data-uhuu-portal] .tracking-\\[0\\.28em\\]{--tw-tracking:.28em;letter-spacing:.28em}[data-uhuu-interactive] .tracking-wide,[data-uhuu-portal] .tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}[data-uhuu-interactive] .tracking-widest,[data-uhuu-portal] .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}[data-uhuu-interactive] .break-all,[data-uhuu-portal] .break-all{word-break:break-all}[data-uhuu-interactive] .whitespace-nowrap,[data-uhuu-portal] .whitespace-nowrap{white-space:nowrap}[data-uhuu-interactive] .text-\\[\\#111\\],[data-uhuu-portal] .text-\\[\\#111\\]{color:#111}[data-uhuu-interactive] .text-amber-700,[data-uhuu-portal] .text-amber-700{color:var(--color-amber-700)}[data-uhuu-interactive] .text-amber-800,[data-uhuu-portal] .text-amber-800{color:var(--color-amber-800)}[data-uhuu-interactive] .text-blue-600,[data-uhuu-portal] .text-blue-600{color:var(--color-blue-600)}[data-uhuu-interactive] .text-blue-700,[data-uhuu-portal] .text-blue-700{color:var(--color-blue-700)}[data-uhuu-interactive] .text-blue-800,[data-uhuu-portal] .text-blue-800{color:var(--color-blue-800)}[data-uhuu-interactive] .text-blue-900,[data-uhuu-portal] .text-blue-900{color:var(--color-blue-900)}[data-uhuu-interactive] .text-emerald-600,[data-uhuu-portal] .text-emerald-600{color:var(--color-emerald-600)}[data-uhuu-interactive] .text-emerald-700,[data-uhuu-portal] .text-emerald-700{color:var(--color-emerald-700)}[data-uhuu-interactive] .text-emerald-900,[data-uhuu-portal] .text-emerald-900{color:var(--color-emerald-900)}[data-uhuu-interactive] .text-gray-200,[data-uhuu-portal] .text-gray-200{color:var(--color-gray-200)}[data-uhuu-interactive] .text-gray-300,[data-uhuu-portal] .text-gray-300{color:var(--color-gray-300)}[data-uhuu-interactive] .text-gray-400,[data-uhuu-portal] .text-gray-400{color:var(--color-gray-400)}[data-uhuu-interactive] .text-gray-500,[data-uhuu-portal] .text-gray-500{color:var(--color-gray-500)}[data-uhuu-interactive] .text-gray-600,[data-uhuu-portal] .text-gray-600{color:var(--color-gray-600)}[data-uhuu-interactive] .text-gray-700,[data-uhuu-portal] .text-gray-700{color:var(--color-gray-700)}[data-uhuu-interactive] .text-gray-800,[data-uhuu-portal] .text-gray-800{color:var(--color-gray-800)}[data-uhuu-interactive] .text-gray-900,[data-uhuu-portal] .text-gray-900{color:var(--color-gray-900)}[data-uhuu-interactive] .text-gray-950,[data-uhuu-portal] .text-gray-950{color:var(--color-gray-950)}[data-uhuu-interactive] .text-green-600,[data-uhuu-portal] .text-green-600{color:var(--color-green-600)}[data-uhuu-interactive] .text-green-700,[data-uhuu-portal] .text-green-700{color:var(--color-green-700)}[data-uhuu-interactive] .text-green-800,[data-uhuu-portal] .text-green-800{color:var(--color-green-800)}[data-uhuu-interactive] .text-green-900,[data-uhuu-portal] .text-green-900{color:var(--color-green-900)}[data-uhuu-interactive] .text-indigo-600,[data-uhuu-portal] .text-indigo-600{color:var(--color-indigo-600)}[data-uhuu-interactive] .text-indigo-700,[data-uhuu-portal] .text-indigo-700{color:var(--color-indigo-700)}[data-uhuu-interactive] .text-indigo-900,[data-uhuu-portal] .text-indigo-900{color:var(--color-indigo-900)}[data-uhuu-interactive] .text-neutral-500,[data-uhuu-portal] .text-neutral-500{color:var(--color-neutral-500)}[data-uhuu-interactive] .text-orange-700,[data-uhuu-portal] .text-orange-700{color:var(--color-orange-700)}[data-uhuu-interactive] .text-pink-700,[data-uhuu-portal] .text-pink-700{color:var(--color-pink-700)}[data-uhuu-interactive] .text-purple-700,[data-uhuu-portal] .text-purple-700{color:var(--color-purple-700)}[data-uhuu-interactive] .text-purple-900,[data-uhuu-portal] .text-purple-900{color:var(--color-purple-900)}[data-uhuu-interactive] .text-red-600,[data-uhuu-portal] .text-red-600{color:var(--color-red-600)}[data-uhuu-interactive] .text-red-900,[data-uhuu-portal] .text-red-900{color:var(--color-red-900)}[data-uhuu-interactive] .text-rose-700,[data-uhuu-portal] .text-rose-700{color:var(--color-rose-700)}[data-uhuu-interactive] .text-sky-700,[data-uhuu-portal] .text-sky-700{color:var(--color-sky-700)}[data-uhuu-interactive] .text-sky-800,[data-uhuu-portal] .text-sky-800{color:var(--color-sky-800)}[data-uhuu-interactive] .text-slate-500,[data-uhuu-portal] .text-slate-500{color:var(--color-slate-500)}[data-uhuu-interactive] .text-slate-600,[data-uhuu-portal] .text-slate-600{color:var(--color-slate-600)}[data-uhuu-interactive] .text-violet-700,[data-uhuu-portal] .text-violet-700{color:var(--color-violet-700)}[data-uhuu-interactive] .text-white,[data-uhuu-portal] .text-white{color:var(--color-white)}[data-uhuu-interactive] .uppercase,[data-uhuu-portal] .uppercase{text-transform:uppercase}[data-uhuu-interactive] .italic,[data-uhuu-portal] .italic{font-style:italic}[data-uhuu-interactive] .tabular-nums,[data-uhuu-portal] .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}[data-uhuu-interactive] .opacity-0,[data-uhuu-portal] .opacity-0{opacity:0}[data-uhuu-interactive] .opacity-50,[data-uhuu-portal] .opacity-50{opacity:.5}[data-uhuu-interactive] .opacity-60,[data-uhuu-portal] .opacity-60{opacity:.6}[data-uhuu-interactive] .opacity-70,[data-uhuu-portal] .opacity-70{opacity:.7}[data-uhuu-interactive] .opacity-75,[data-uhuu-portal] .opacity-75{opacity:.75}[data-uhuu-interactive] .opacity-90,[data-uhuu-portal] .opacity-90{opacity:.9}[data-uhuu-interactive] .shadow,[data-uhuu-portal] .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-2xl,[data-uhuu-portal] .shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-lg,[data-uhuu-portal] .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-md,[data-uhuu-portal] .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-sm,[data-uhuu-portal] .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .shadow-xl,[data-uhuu-portal] .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-0,[data-uhuu-portal] .ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .ring-offset-white,[data-uhuu-portal] .ring-offset-white{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .outline,[data-uhuu-portal] .outline{outline-style:var(--tw-outline-style);outline-width:1px}[data-uhuu-interactive] .outline-2,[data-uhuu-portal] .outline-2{outline-style:var(--tw-outline-style);outline-width:2px}[data-uhuu-interactive] .outline-offset-2,[data-uhuu-portal] .outline-offset-2{outline-offset:2px}[data-uhuu-interactive] .outline-blue-100,[data-uhuu-portal] .outline-blue-100{outline-color:var(--color-blue-100)}[data-uhuu-interactive] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\],[data-uhuu-portal] .drop-shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.8\\)\\]{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#000c));--tw-drop-shadow:var(--tw-drop-shadow-size);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .filter,[data-uhuu-portal] .filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}[data-uhuu-interactive] .backdrop-blur-\\[1px\\],[data-uhuu-portal] .backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-md,[data-uhuu-portal] .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .backdrop-blur-sm,[data-uhuu-portal] .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}[data-uhuu-interactive] .transition,[data-uhuu-portal] .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-all,[data-uhuu-portal] .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-colors,[data-uhuu-portal] .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-opacity,[data-uhuu-portal] .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .transition-transform,[data-uhuu-portal] .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}[data-uhuu-interactive] .duration-150,[data-uhuu-portal] .duration-150{--tw-duration:.15s;transition-duration:.15s}[data-uhuu-interactive] .ease-in-out,[data-uhuu-portal] .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}[data-uhuu-interactive] .outline-none,[data-uhuu-portal] .outline-none{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .select-none,[data-uhuu-portal] .select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(hover:hover){[data-uhuu-interactive] .group-hover\\:opacity-100:is(:where(.group):hover *),[data-uhuu-portal] .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}[data-uhuu-interactive] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:block:is(:where(.group\\/drag-item):hover *){display:block}[data-uhuu-interactive] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:flex:is(:where(.group\\/drag-item):hover *){display:flex}[data-uhuu-interactive] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:hidden:is(:where(.group\\/drag-item):hover *){display:none}[data-uhuu-interactive] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:border-gray-300:is(:where(.group\\/drag-item):hover *){border-color:var(--color-gray-300)}[data-uhuu-interactive] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *),[data-uhuu-portal] .group-hover\\/drag-item\\:shadow-md:is(:where(.group\\/drag-item):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:block:is(:where(.group\\/remove-btn):hover *){display:block}[data-uhuu-interactive] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *),[data-uhuu-portal] .group-hover\\/remove-btn\\:hidden:is(:where(.group\\/remove-btn):hover *){display:none}}[data-uhuu-interactive] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled~*){cursor:not-allowed}[data-uhuu-interactive] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*),[data-uhuu-portal] .peer-disabled\\:opacity-70:is(:where(.peer):disabled~*){opacity:.7}[data-uhuu-interactive] .placeholder\\:text-gray-400::-moz-placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::-moz-placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .placeholder\\:text-gray-400::placeholder,[data-uhuu-portal] .placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}[data-uhuu-interactive] .first\\:mt-0:first-child,[data-uhuu-portal] .first\\:mt-0:first-child{margin-top:calc(var(--spacing) * 0)}@media(hover:hover){[data-uhuu-interactive] .hover\\:scale-105:hover,[data-uhuu-portal] .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}[data-uhuu-interactive] .hover\\:border-blue-300:hover,[data-uhuu-portal] .hover\\:border-blue-300:hover{border-color:var(--color-blue-300)}[data-uhuu-interactive] .hover\\:border-blue-400:hover,[data-uhuu-portal] .hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}[data-uhuu-interactive] .hover\\:border-gray-200:hover,[data-uhuu-portal] .hover\\:border-gray-200:hover{border-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:border-gray-300:hover,[data-uhuu-portal] .hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}[data-uhuu-interactive] .hover\\:border-gray-400:hover,[data-uhuu-portal] .hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}[data-uhuu-interactive] .hover\\:bg-blue-700:hover,[data-uhuu-portal] .hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}[data-uhuu-interactive] .hover\\:bg-gray-50:hover,[data-uhuu-portal] .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}[data-uhuu-interactive] .hover\\:bg-gray-100:hover,[data-uhuu-portal] .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:#f3f4f6cc}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .hover\\:bg-gray-100\\/80:hover,[data-uhuu-portal] .hover\\:bg-gray-100\\/80:hover{background-color:color-mix(in oklab,var(--color-gray-100) 80%,transparent)}}[data-uhuu-interactive] .hover\\:bg-gray-200:hover,[data-uhuu-portal] .hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}[data-uhuu-interactive] .hover\\:bg-gray-800:hover,[data-uhuu-portal] .hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}[data-uhuu-interactive] .hover\\:bg-white:hover,[data-uhuu-portal] .hover\\:bg-white:hover{background-color:var(--color-white)}[data-uhuu-interactive] .hover\\:text-gray-600:hover,[data-uhuu-portal] .hover\\:text-gray-600:hover{color:var(--color-gray-600)}[data-uhuu-interactive] .hover\\:text-gray-900:hover,[data-uhuu-portal] .hover\\:text-gray-900:hover{color:var(--color-gray-900)}[data-uhuu-interactive] .hover\\:opacity-100:hover,[data-uhuu-portal] .hover\\:opacity-100:hover{opacity:1}[data-uhuu-interactive] .hover\\:shadow-lg:hover,[data-uhuu-portal] .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}[data-uhuu-interactive] .focus\\:w-40:focus,[data-uhuu-portal] .focus\\:w-40:focus{width:calc(var(--spacing) * 40)}[data-uhuu-interactive] .focus\\:border-gray-400:focus,[data-uhuu-portal] .focus\\:border-gray-400:focus{border-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:border-transparent:focus,[data-uhuu-portal] .focus\\:border-transparent:focus{border-color:#0000}[data-uhuu-interactive] .focus\\:bg-gray-100:focus,[data-uhuu-portal] .focus\\:bg-gray-100:focus{background-color:var(--color-gray-100)}[data-uhuu-interactive] .focus\\:bg-red-50:focus,[data-uhuu-portal] .focus\\:bg-red-50:focus{background-color:var(--color-red-50)}[data-uhuu-interactive] .focus\\:text-gray-900:focus,[data-uhuu-portal] .focus\\:text-gray-900:focus{color:var(--color-gray-900)}[data-uhuu-interactive] .focus\\:text-red-700:focus,[data-uhuu-portal] .focus\\:text-red-700:focus{color:var(--color-red-700)}[data-uhuu-interactive] .focus\\:ring-1:focus,[data-uhuu-portal] .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-2:focus,[data-uhuu-portal] .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:#54a2ff4d}@supports (color:color-mix(in lab,red,red)){[data-uhuu-interactive] .focus\\:ring-blue-400\\/30:focus,[data-uhuu-portal] .focus\\:ring-blue-400\\/30:focus{--tw-ring-color:color-mix(in oklab, var(--color-blue-400) 30%, transparent)}}[data-uhuu-interactive] .focus\\:ring-blue-500:focus,[data-uhuu-portal] .focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}[data-uhuu-interactive] .focus\\:ring-gray-200:focus,[data-uhuu-portal] .focus\\:ring-gray-200:focus{--tw-ring-color:var(--color-gray-200)}[data-uhuu-interactive] .focus\\:ring-gray-400:focus,[data-uhuu-portal] .focus\\:ring-gray-400:focus{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus\\:ring-offset-0:focus,[data-uhuu-portal] .focus\\:ring-offset-0:focus{--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:ring-offset-2:focus,[data-uhuu-portal] .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus\\:outline-none:focus,[data-uhuu-portal] .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .focus-visible\\:ring-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[data-uhuu-interactive] .focus-visible\\:ring-gray-400:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-gray-400:focus-visible{--tw-ring-color:var(--color-gray-400)}[data-uhuu-interactive] .focus-visible\\:ring-offset-2:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}[data-uhuu-interactive] .focus-visible\\:ring-offset-white:focus-visible,[data-uhuu-portal] .focus-visible\\:ring-offset-white:focus-visible{--tw-ring-offset-color:var(--color-white)}[data-uhuu-interactive] .focus-visible\\:outline-none:focus-visible,[data-uhuu-portal] .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}[data-uhuu-interactive] .active\\:cursor-grabbing:active,[data-uhuu-portal] .active\\:cursor-grabbing:active{cursor:grabbing}[data-uhuu-interactive] .disabled\\:pointer-events-none:disabled,[data-uhuu-portal] .disabled\\:pointer-events-none:disabled{pointer-events:none}[data-uhuu-interactive] .disabled\\:cursor-not-allowed:disabled,[data-uhuu-portal] .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}[data-uhuu-interactive] .disabled\\:opacity-40:disabled,[data-uhuu-portal] .disabled\\:opacity-40:disabled{opacity:.4}[data-uhuu-interactive] .disabled\\:opacity-50:disabled,[data-uhuu-portal] .disabled\\:opacity-50:disabled{opacity:.5}[data-uhuu-interactive] .data-\\[disabled\\]\\:pointer-events-none[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}[data-uhuu-interactive] .data-\\[disabled\\]\\:opacity-50[data-disabled],[data-uhuu-portal] .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}[data-uhuu-interactive] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],[data-uhuu-portal] .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left],[data-uhuu-portal] .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right],[data-uhuu-portal] .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top],[data-uhuu-portal] .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked],[data-uhuu-portal] .data-\\[state\\=checked\\]\\:bg-gray-900[data-state=checked]{background-color:var(--color-gray-900)}[data-uhuu-interactive] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed],[data-uhuu-portal] .data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{--tw-duration:.3s;transition-duration:.3s}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:bg-gray-100[data-state=open]{background-color:var(--color-gray-100)}[data-uhuu-interactive] .data-\\[state\\=open\\]\\:duration-500[data-state=open],[data-uhuu-portal] .data-\\[state\\=open\\]\\:duration-500[data-state=open]{--tw-duration:.5s;transition-duration:.5s}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}[data-uhuu-interactive] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked],[data-uhuu-portal] .data-\\[state\\=unchecked\\]\\:bg-gray-200[data-state=unchecked]{background-color:var(--color-gray-200)}@media(min-width:40rem){[data-uhuu-interactive] .sm\\:max-w-sm,[data-uhuu-portal] .sm\\:max-w-sm{max-width:var(--container-sm)}[data-uhuu-interactive] .sm\\:flex-row,[data-uhuu-portal] .sm\\:flex-row{flex-direction:row}[data-uhuu-interactive] .sm\\:justify-end,[data-uhuu-portal] .sm\\:justify-end{justify-content:flex-end}[data-uhuu-interactive] :where(.sm\\:space-x-2>:not(:last-child)),[data-uhuu-portal] :where(.sm\\:space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)))}[data-uhuu-interactive] .sm\\:text-left,[data-uhuu-portal] .sm\\:text-left{text-align:left}}@media(min-width:48rem){[data-uhuu-interactive] .md\\:grid-cols-3,[data-uhuu-portal] .md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:64rem){[data-uhuu-interactive] .lg\\:grid-cols-4,[data-uhuu-portal] .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){[data-uhuu-interactive] .xl\\:grid-cols-5,[data-uhuu-portal] .xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media print{.print\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.print\\:transform-none{transform:none}}[data-uhuu-interactive] .\\[\\&\\>button\\]\\:hidden>button,[data-uhuu-portal] .\\[\\&\\>button\\]\\:hidden>button{display:none}[data-uhuu-interactive] .\\[\\&\\>span\\]\\:line-clamp-1>span,[data-uhuu-portal] .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media screen{[data-uhuu-interactive] .group_two_pages,[data-uhuu-portal] .group_two_pages{flex-direction:column;align-items:center;gap:24px;width:100%;margin:0 auto;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair,[data-uhuu-portal] .group_two_pages>.two-pages-pair{width:var(--uhuu-group-pair-width,-moz-max-content);width:var(--uhuu-group-pair-width,max-content);grid-template-columns:1fr 1fr;gap:0;margin:0 auto;display:grid}[data-uhuu-interactive] .group_two_pages>.two-pages-pair>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair>[class*="group/section"]{flex-direction:column;flex-shrink:0;display:flex}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:first-child{justify-self:end}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child,[data-uhuu-portal] .group_two_pages>.two-pages-pair--spread>[class*="group/section"]:last-child{justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--right>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--right>[class*="group/section"]{grid-column:2;justify-self:start}[data-uhuu-interactive] .group_two_pages>.two-pages-pair--left>[class*="group/section"],[data-uhuu-portal] .group_two_pages>.two-pages-pair--left>[class*="group/section"]{grid-column:1;justify-self:end}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}',{styleId:"uhuu-components-styles"})})();
import { jsx as f, jsxs as D, Fragment as Fe } from "react/jsx-runtime";
import * as m from "react";
import me, { createContext as Pt, useEffect as ue, forwardRef as Ar, useContext as xe, createElement as fo, useState as te, useLayoutEffect as Js, useMemo as Y, useRef as de, useCallback as ge, memo as pd, useReducer as vd, cloneElement as bd } from "react";
import * as Qs from "react-dom";
import yd, { unstable_batchedUpdates as Yn, createPortal as wd } from "react-dom";
class cr {
  static handlePageBreakStyles() {
    document?.querySelectorAll(".page-break-after[data-paged-css]").forEach((t) => {
      const n = t.closest("div.uhuu-page-sheet"), r = t.getAttribute("data-paged-css");
      n && r && r.split(" ").filter(Boolean).forEach((i) => n.classList.add(i));
    });
  }
  static handleUhuuDialogs() {
    const t = function() {
      const n = JSON.parse(this.getAttribute("data-uhuu") || "{}");
      $uhuu.editDialog(n);
    };
    document?.querySelectorAll("[data-uhuu]").forEach((n) => {
      n.removeEventListener("click", t), n.addEventListener("click", t);
    });
  }
  static handle() {
    cr.handlePageBreakStyles(), cr.handleUhuuDialogs();
  }
}
class Fi {
  static setupPageStyles(t) {
    if (!t || typeof document > "u") return;
    const n = document.createElement("link");
    return n.rel = "stylesheet", n.href = t, document.head.appendChild(n), n;
  }
  static removePageStyles(t) {
    t && typeof document < "u" && document?.head.removeChild(t);
  }
}
class ea {
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
    const { format: n, orientation: r, width: o, height: i } = t, a = typeof n == "string" ? n : "", s = !a || a.toLowerCase() === "custom", l = this.toValidCustomDimension(o), c = this.toValidCustomDimension(i);
    if (s && l !== null && c !== null)
      return { width: l, height: c };
    const d = s ? "A4" : a;
    return this.getDimensions({ format: d || "A4", orientation: r }) ?? this.getDimensions({ format: "A4", orientation: r }) ?? { width: 210, height: 297 };
  }
  static pageParams(t, n = {}) {
    if (typeof document > "u") return;
    const { format: r, orientation: o, bleed: i, showBleed: a, compatibility: s, printCssRaw: l, printCssUrl: c, preview: d } = n, u = this.resolveDimensions(n);
    return u && (document.documentElement.style.setProperty("--uhuu-page-width", `${u.width}mm`), document.documentElement.style.setProperty("--uhuu-page-height", `${u.height}mm`)), document.documentElement.style.setProperty("--uhuu-page-bleed", `${Math.min(Math.max(i ?? 0, 0), 400)}mm`), { page: {
      paginationType: t,
      format: r,
      orientation: o,
      bleed: i,
      width: u?.width,
      height: u?.height,
      preview: d,
      showBleed: a,
      compatibility: s,
      printCssRaw: l,
      printCssUrl: c
    } };
  }
}
const Tt = Pt(null), xd = ({ config: e, children: t }) => /* @__PURE__ */ f(Tt.Provider, { value: e, children: t }), ho = ({ children: e, className: t, setup: n }) => {
  const r = ea.pageParams("static", n);
  ue(() => {
    r?.page?.compatibility && cr.handle();
    const i = Fi.setupPageStyles(r?.page?.printCssUrl);
    return () => {
      i && Fi.removePageStyles(i);
    };
  }, [n, r?.page?.compatibility, r?.page?.printCssUrl]);
  const o = [t, r?.page?.preview].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(xd, { config: r, children: /* @__PURE__ */ f("div", { className: o, children: e }) });
}, mo = Ar(({
  children: e,
  className: t = "",
  style: n,
  pageNo: r,
  overlay: o,
  showBleed: i,
  "data-page-key": a
}, s) => {
  const l = xe(Tt), c = i ?? l?.page?.showBleed ?? !1;
  return /* @__PURE__ */ D(
    "div",
    {
      className: `uhuu-page-sheet ${t}`,
      style: n,
      ref: s,
      "data-page-key": a,
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
function Cd({
  heights: e = [],
  keys: t = [],
  metas: n = [],
  availableHeight: r = 0
} = {}) {
  const o = [{ indexes: [], keys: [] }];
  let i = 0;
  const a = (h) => {
    const g = n[h] ?? {};
    return g.avoidBreakInside && g.groupKey ? g.groupKey : null;
  }, s = (h, g) => {
    let b = 0;
    for (let p = h; p < e.length && a(p) === g; p += 1)
      b += e[p] ?? 0;
    return b;
  }, l = () => {
    o[o.length - 1].indexes.length > 0 && (o.push({ indexes: [], keys: [] }), i = 0);
  }, c = (h) => typeof h == "number" && Number.isFinite(h) ? Math.max(0, Math.floor(h)) : h ? 1 : 0, d = (h, g) => {
    let b = 0;
    for (let p = 1; p <= g; p += 1)
      b += e[h + p] ?? 0;
    return b;
  };
  for (let h = 0; h < e.length; h += 1) {
    const g = n[h] ?? {}, b = e[h] ?? 0, p = t[h] ?? String(h), v = d(h, c(g.keepWithNext)), w = b + v;
    g.breakBefore && l();
    const N = a(h), x = h > 0 ? a(h - 1) : null;
    N && N !== x && o[o.length - 1].indexes.length > 0 && i + s(h, N) > r && l(), o[o.length - 1].indexes.length > 0 && i + w > r && l(), o[o.length - 1].indexes.push(h), o[o.length - 1].keys.push(p), i += b, g.breakAfter && h < e.length - 1 && l();
  }
  const u = o.filter((h) => h.indexes.length > 0);
  return u.length ? u : [{ indexes: [], keys: [] }];
}
const ur = m.createContext(null), Sd = typeof window > "u" ? m.useEffect : m.useLayoutEffect, $i = /* @__PURE__ */ new Set();
function zi(e) {
  if (!e || typeof e != "object" || !("type" in e)) return;
  const t = e.type;
  return typeof t == "string" || typeof t == "number" ? String(t) : void 0;
}
function Nd(e, t) {
  const n = { ...e ?? {} };
  for (const [r, o] of Object.entries(t ?? {}))
    o !== void 0 && (n[r] = o);
  return n;
}
function Pd(e) {
  if (!e) return !1;
  if (e === "true") return !0;
  const t = Number.parseInt(e, 10);
  return Number.isFinite(t) && t > 0 ? t : !1;
}
function Ed(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? String(Math.floor(e)) : e ? "true" : void 0;
}
function Rd(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1)
    t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
  return (t >>> 0).toString(36);
}
function Bi(e) {
  const t = e.getBoundingClientRect(), n = window.getComputedStyle(e), r = Number.parseFloat(n.marginTop || "0") || 0, o = Number.parseFloat(n.marginBottom || "0") || 0;
  return t.height + r + o;
}
function Id(e) {
  return {
    breakBefore: e.dataset.uhuuFlowBreakBefore === "true",
    breakAfter: e.dataset.uhuuFlowBreakAfter === "true",
    keepWithNext: Pd(e.dataset.uhuuFlowKeepWithNext),
    avoidBreakInside: e.dataset.uhuuFlowAvoidBreakInside === "true",
    groupKey: e.dataset.uhuuFlowGroupKey
  };
}
function Ad(e, t, n = {}) {
  const r = t.dataset.uhuuFlowId;
  if (!r) return null;
  const o = Array.from(t.querySelectorAll('[data-uhuu-flow-item="true"]'));
  if (!o.length)
    return {
      flowId: r,
      chunks: [{ indexes: [], keys: [] }],
      signature: `${r}:empty`
    };
  const a = e.getBoundingClientRect().height || e.clientHeight, s = Number.isFinite(a) && a > 0, l = s ? a : o.reduce((b, p) => b + Bi(p), 0), c = o.map(Bi), d = o.map(Id), u = o.map((b, p) => b.dataset.uhuuFlowKey || String(p));
  if (s || n.onZeroHeight?.(), s) {
    const b = c.findIndex((p) => p > l);
    b >= 0 && n.onOversizedItem?.(u[b], c[b], l);
  }
  const h = Cd({
    heights: c,
    keys: u,
    metas: d,
    availableHeight: l
  }), g = Rd(JSON.stringify({
    version: 1,
    flowId: r,
    availableHeight: Math.round(l * 100) / 100,
    heights: c.map((b) => Math.round(b * 100) / 100),
    keys: u,
    metas: d
  }));
  return { flowId: r, chunks: h, signature: g };
}
function ta({ children: e, className: t = "", style: n }) {
  const r = m.useContext(ur), o = m.useRef(null), i = m.useRef(""), a = m.useRef(!1), s = m.useRef(!1), l = m.useRef(/* @__PURE__ */ new Set());
  return Sd(() => {
    if (r?.mode !== "measure" || !r.registerMeasurement || !o.current)
      return;
    const c = o.current;
    let d = 0, u = null;
    i.current = "";
    const h = () => {
      window.cancelAnimationFrame(d), d = window.requestAnimationFrame(p);
    }, g = /* @__PURE__ */ new Set(), b = () => {
      if (u) {
        for (const w of Array.from(g))
          c.contains(w) || (u.unobserve(w), g.delete(w));
        c.querySelectorAll('[data-uhuu-flow-item="true"]').forEach((w) => {
          g.has(w) || (g.add(w), u?.observe(w));
        });
      }
    }, p = () => {
      b();
      const w = c.querySelectorAll('[data-uhuu-flow="true"]');
      w.length > 1 && !a.current && Gt() && (a.current = !0, console.warn(
        "[uhuu-components] Static.FlowArea supports one Static.Flow child. Additional Static.Flow elements in the same area are ignored. Use one FlowArea per flow region."
      ));
      const N = w[0];
      if (!N) return;
      const x = Ad(c, N, {
        onZeroHeight: () => {
          s.current || !Gt() || (s.current = !0, console.warn(
            "[uhuu-components] Static.FlowArea has flow items but no measurable height. Give the area an explicit height or use a constrained flex layout such as flex-1 min-h-0."
          ));
        },
        onOversizedItem: (y, P, E) => {
          l.current.has(y) || !Gt() || (l.current.add(y), console.warn(
            `[uhuu-components] Static.Flow item "${y}" is taller than its FlowArea (${Math.round(P)}px > ${Math.round(E)}px). V1 can only move whole items, so split this item if it must fit within a page.`
          ));
        }
      });
      !x || x.signature === i.current || (i.current = x.signature, r.registerMeasurement?.(x));
    };
    u = new ResizeObserver(h), u.observe(c), b(), h();
    const v = new MutationObserver(() => {
      b(), h();
    });
    return v.observe(c, {
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
        "data-uhuu-flow-group-key"
      ],
      characterData: !0,
      childList: !0,
      subtree: !0
    }), () => {
      window.cancelAnimationFrame(d), u?.disconnect(), v.disconnect();
    };
  }, [r]), /* @__PURE__ */ f("div", { ref: o, className: t, style: n, "data-uhuu-flow-area": "true", children: e });
}
function na({
  children: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: i = "",
  flowAreaStyle: a
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: `h-full w-full flex flex-col ${r}`,
      style: o,
      "data-uhuu-flow-page": "true",
      children: [
        t,
        /* @__PURE__ */ f(
          ta,
          {
            className: `flex-1 min-h-0 ${i}`,
            style: a,
            children: e
          }
        ),
        n
      ]
    }
  );
}
function ra({
  id: e,
  items: t,
  getKey: n,
  renderItem: r,
  getItemMeta: o,
  metaDefaults: i,
  getItemType: a,
  className: s = "",
  itemClassName: l
}) {
  const c = m.useContext(ur), d = c?.chunksByFlowId?.[e], h = (c?.mode === "visible" && d ? d[c.pageIndex]?.indexes ?? [] : c?.mode === "visible" && c.pageIndex > 0 ? [] : t.map((g, b) => b)).filter((g) => Number.isInteger(g) && g >= 0 && g < t.length);
  return m.useEffect(() => {
    if (!Gt() || !i || !Object.keys(i).length || !t.length)
      return;
    const g = `${e}:${Object.keys(i).join("|")}`;
    $i.has(g) || t.some((p, v) => !!(a?.(p, v) ?? zi(p))) || ($i.add(g), console.warn(
      `[uhuu-components] Static.Flow "${e}" received metaDefaults, but no item type could be resolved. Add a type field to each item or pass getItemType so defaults can be applied.`
    ));
  }, [e, t, i, a]), /* @__PURE__ */ f(
    "div",
    {
      className: s,
      "data-uhuu-flow": "true",
      "data-uhuu-flow-id": e,
      children: h.map((g) => {
        const b = t[g];
        if (b === void 0) return null;
        const p = n(b, g), v = a?.(b, g) ?? zi(b), w = Nd(
          v ? i?.[v] : void 0,
          o?.(b, g)
        ), N = typeof l == "function" ? l(b, g) : l;
        return /* @__PURE__ */ f(
          "div",
          {
            className: N,
            style: { display: "flow-root" },
            "data-uhuu-flow-item": "true",
            "data-uhuu-flow-key": String(p),
            "data-uhuu-flow-index": g,
            "data-uhuu-flow-break-before": w.breakBefore ? "true" : void 0,
            "data-uhuu-flow-break-after": w.breakAfter ? "true" : void 0,
            "data-uhuu-flow-keep-with-next": Ed(w.keepWithNext),
            "data-uhuu-flow-avoid-break-inside": w.avoidBreakInside ? "true" : void 0,
            "data-uhuu-flow-group-key": w.groupKey,
            children: r(b, g)
          },
          p
        );
      })
    }
  );
}
const en = (e, t) => {
  const n = e.dialog;
  return n ? t?.page?.paginationType === "dynamic" ? {
    "data-uhuu": JSON.stringify(n)
  } : {
    onClick: (r) => {
      r.stopPropagation(), window.$uhuu?.editDialog(n);
    },
    "data-uhuu": ""
  } : {};
}, kd = (e) => {
  const t = xe(Tt);
  return /* @__PURE__ */ f(
    "div",
    {
      className: e.className,
      ...en(e, t),
      children: e.children
    }
  );
};
function Dd(e) {
  return String(e ?? "").replace(/[#*_`|>[\]()]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36);
}
function oa(e, t, n, r = "") {
  const o = Dd(t);
  return `${r}${e}-${n}-${o || "block"}`;
}
const Md = /\s*(page-break-before|break-before)\s*/i, Od = 1, Td = 3, _d = 8;
function Ld(e) {
  return String(e ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Fd(e) {
  return String(e ?? "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "").replace(/<\/?(script|style)\b[^>]*>/gi, "").replace(/\son\w+\s*=\s*"[^"]*"/gi, "").replace(/\son\w+\s*=\s*'[^']*'/gi, "").replace(/\son\w+\s*=\s*[^\s>]+/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*"javascript:[^"]*"/gi, "").replace(/\s(href|src|xlink:href)\s*=\s*'javascript:[^']*'/gi, "");
}
function $d(e, t) {
  if (typeof document > "u") return [];
  const n = document.createElement("template");
  n.innerHTML = String(e ?? "");
  const r = [];
  return n.content.childNodes.forEach((o) => {
    if (o.nodeType === _d) {
      t.test(o.textContent ?? "") && r.push({ kind: "break" });
      return;
    }
    if (o.nodeType === Td) {
      const i = (o.textContent ?? "").trim();
      i && r.push({ kind: "text", html: Ld(i), text: i });
      return;
    }
    if (o.nodeType === Od) {
      const i = o, a = i.hasAttribute("data-flow-break-before"), s = i.hasAttribute("data-flow-break-after");
      i.removeAttribute("data-flow-break-before"), i.removeAttribute("data-flow-break-after"), r.push({
        kind: "element",
        type: i.tagName.toLowerCase(),
        html: i.outerHTML,
        text: i.textContent ?? "",
        breakBefore: a,
        breakAfter: s
      });
    }
  }), r;
}
function zd(e, t) {
  const n = t.idPrefix ?? "", r = [];
  let o = !1;
  for (const i of e) {
    if (!i || i.kind === "break") {
      o = !0;
      continue;
    }
    const a = i.type ?? "text", s = i.html ?? "";
    s && (r.push({
      id: oa(a, i.text ?? s, r.length, n),
      type: a,
      html: s,
      breakBefore: o || !!i.breakBefore
    }), o = !!i.breakAfter);
  }
  return r;
}
function ia(e = "", t = {}) {
  const n = t.breakComment ?? Md, o = (t.parseHtml ?? ((i) => $d(i, n)))(e);
  return zd(Array.isArray(o) ? o : [], t);
}
const Bd = {
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
let Ki = !1;
function Kd(e) {
  return m.useMemo(() => e === !1 ? (Gt() && !Ki && (Ki = !0, console.warn(
    "[uhuu-components] Static.FlowDocument sanitize is disabled. Only pass sanitize={false} for trusted HTML."
  )), (t) => t) : typeof e == "function" ? e : Fd, [e]);
}
function Wd({
  html: e,
  header: t,
  footer: n,
  className: r = "",
  style: o,
  flowAreaClassName: i = "",
  flowAreaStyle: a,
  id: s = "flow-document",
  idPrefix: l,
  flowClassName: c = "w-full",
  itemClassName: d,
  metaDefaults: u,
  getItemMeta: h,
  renderItem: g,
  sanitize: b,
  editable: p,
  parseHtml: v
}) {
  const w = m.useMemo(
    () => ia(e, { idPrefix: l, parseHtml: v }),
    [e, l, v]
  ), N = m.useMemo(
    () => ({ ...Bd, ...u ?? {} }),
    [u]
  ), x = Kd(b), y = m.useCallback(
    (C, S) => ({
      breakBefore: C.breakBefore,
      ...h?.(C, S) ?? {}
    }),
    [h]
  ), P = m.useCallback(
    (C, S) => g ? g(C, S) : /* @__PURE__ */ f(
      "div",
      {
        className: "uhuu-flow-html-block",
        dangerouslySetInnerHTML: { __html: x(C.html) }
      }
    ),
    [g, x]
  ), E = /* @__PURE__ */ f(
    ra,
    {
      id: s,
      items: w,
      getKey: (C) => C.id,
      className: c,
      itemClassName: d,
      metaDefaults: N,
      getItemMeta: y,
      renderItem: P
    }
  );
  return /* @__PURE__ */ f(
    na,
    {
      className: r,
      style: o,
      flowAreaClassName: i,
      flowAreaStyle: a,
      header: t,
      footer: n,
      children: p ? /* @__PURE__ */ f(kd, { dialog: p, children: E }) : E
    }
  );
}
const jd = /<!--\s*(page-break-before|break-before)\s*-->/i, Vd = /^\s*\[[^\]]+\]:\s+\S+/, Wi = /^\s*!\[[^\]]*]\([^)]+\)\s*$/;
function Xn(e) {
  return e.trim() === "";
}
function ji(e) {
  return /^#{1,6}\s+/.test(e.trim());
}
function Vi(e) {
  return /^(\s*)([-*+]|\d+[.)])\s+/.test(e);
}
function Hi(e) {
  return /^(```|~~~)/.test(e.trim());
}
function Gi(e) {
  return /^([-*_])(?:\s*\1){2,}\s*$/.test(e.trim());
}
function Ui(e, t) {
  const n = e[t]?.trim() ?? "", r = e[t + 1]?.trim() ?? "";
  return n.includes("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(r);
}
function Yi(e) {
  return jd.test(e.trim());
}
function Hd(e) {
  return Vd.test(e);
}
function Gd(e, t) {
  if (!t || e.length <= t) return [e];
  const n = e.split(/\s+/).filter(Boolean), r = [];
  let o = "";
  for (const i of n) {
    const a = o ? `${o} ${i}` : i;
    o && a.length > t ? (r.push(o), o = i) : o = a;
  }
  return o && r.push(o), r.length ? r : [e];
}
function Ud(e, t) {
  return t.length ? `${e}

${t.join(`
`)}` : e;
}
function Yd(e, t, n, r, o, i) {
  const a = n.join(`
`).trim();
  if (!a) return !1;
  const s = Number.isFinite(o.maxParagraphLength) ? Math.max(0, Math.floor(o.maxParagraphLength)) : 0, l = t === "paragraph" ? Gd(a, s) : [a];
  for (let c = 0; c < l.length; c += 1) {
    const d = l[c], u = Ud(d, i);
    e.push({
      id: oa(t, d, e.length, o.idPrefix ?? ""),
      type: t,
      markdown: u,
      breakBefore: c === 0 ? r : !1
    });
  }
  return !0;
}
function Xd(e = "", t = {}) {
  const r = String(e ?? "").replace(/\r\n/g, `
`).split(`
`), o = [], i = [];
  for (const c of r)
    Hd(c) ? o.push(c) : i.push(c);
  const a = [];
  let s = 0, l = !1;
  for (; s < i.length; ) {
    if (Xn(i[s])) {
      s += 1;
      continue;
    }
    if (Yi(i[s])) {
      l = !0, s += 1;
      continue;
    }
    const c = s;
    let d = "paragraph";
    if (Hi(i[s])) {
      d = "code";
      const u = i[s].trim().slice(0, 3);
      for (s += 1; s < i.length && !i[s].trim().startsWith(u); )
        s += 1;
      s < i.length && (s += 1);
    } else if (ji(i[s]))
      d = "heading", s += 1;
    else if (Gi(i[s]))
      d = "rule", s += 1;
    else if (Wi.test(i[s]))
      d = "image", s += 1;
    else if (Ui(i, s))
      for (d = "table", s += 2; s < i.length && i[s].includes("|") && !Xn(i[s]); )
        s += 1;
    else if (Vi(i[s]))
      for (d = "list", s += 1; s < i.length && !Xn(i[s]); )
        s += 1;
    else if (i[s].trim().startsWith(">"))
      for (d = "quote", s += 1; s < i.length && i[s].trim().startsWith(">"); )
        s += 1;
    else
      for (s += 1; s < i.length && !Xn(i[s]) && !ji(i[s]) && !Hi(i[s]) && !Gi(i[s]) && !Wi.test(i[s]) && !Ui(i, s) && !Vi(i[s]) && !i[s].trim().startsWith(">") && !Yi(i[s]); )
        s += 1;
    Yd(a, d, i.slice(c, s), l, t, o) && (l = !1);
  }
  return a;
}
function sa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = sa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function aa() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = sa(e)) && (r && (r += " "), r += t);
  return r;
}
const qd = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Zd = (e, t) => ({
  classGroupId: e,
  validator: t
}), la = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), dr = "-", Xi = [], Jd = "arbitrary..", Qd = (e) => {
  const t = tf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return ef(a);
      const s = a.split(dr), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return ca(s, l, t);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const l = r[a], c = n[a];
        return l ? c ? qd(c, l) : l : c || Xi;
      }
      return n[a] || Xi;
    }
  };
}, ca = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], i = n.nextPart.get(o);
  if (i) {
    const c = ca(e, t + 1, i);
    if (c) return c;
  }
  const a = n.validators;
  if (a === null)
    return;
  const s = t === 0 ? e.join(dr) : e.slice(t).join(dr), l = a.length;
  for (let c = 0; c < l; c++) {
    const d = a[c];
    if (d.validator(s))
      return d.classGroupId;
  }
}, ef = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Jd + r : void 0;
})(), tf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return nf(n, t);
}, nf = (e, t) => {
  const n = la();
  for (const r in e) {
    const o = e[r];
    Mo(o, n, r, t);
  }
  return n;
}, Mo = (e, t, n, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    rf(a, t, n, r);
  }
}, rf = (e, t, n, r) => {
  if (typeof e == "string") {
    of(e, t, n);
    return;
  }
  if (typeof e == "function") {
    sf(e, t, n, r);
    return;
  }
  af(e, t, n, r);
}, of = (e, t, n) => {
  const r = e === "" ? t : ua(t, e);
  r.classGroupId = n;
}, sf = (e, t, n, r) => {
  if (lf(e)) {
    Mo(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Zd(n, e));
}, af = (e, t, n, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, l] = o[a];
    Mo(l, ua(t, s), n, r);
  }
}, ua = (e, t) => {
  let n = e;
  const r = t.split(dr), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = n.nextPart.get(a);
    s || (s = la(), n.nextPart.set(a, s)), n = s;
  }
  return n;
}, lf = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, cf = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, a) => {
    n[i] = a, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let a = n[i];
      if (a !== void 0)
        return a;
      if ((a = r[i]) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      i in n ? n[i] = a : o(i, a);
    }
  };
}, go = "!", qi = ":", uf = [], Zi = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), df = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, l = 0, c;
    const d = o.length;
    for (let p = 0; p < d; p++) {
      const v = o[p];
      if (a === 0 && s === 0) {
        if (v === qi) {
          i.push(o.slice(l, p)), l = p + 1;
          continue;
        }
        if (v === "/") {
          c = p;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? s++ : v === ")" && s--;
    }
    const u = i.length === 0 ? o : o.slice(l);
    let h = u, g = !1;
    u.endsWith(go) ? (h = u.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(go) && (h = u.slice(1), g = !0)
    );
    const b = c && c > l ? c - l : void 0;
    return Zi(i, g, h, b);
  };
  if (t) {
    const o = t + qi, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Zi(uf, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, ff = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const a = n[i], s = a[0] === "[", l = t.has(a);
      s || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, hf = (e) => ({
  cache: cf(e.cacheSize),
  parseClassName: df(e),
  sortModifiers: ff(e),
  ...Qd(e)
}), mf = /\s+/, gf = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = t, a = [], s = e.trim().split(mf);
  let l = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const d = s[c], {
      isExternal: u,
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!p, w = r(v ? b.substring(0, p) : b);
    if (!w) {
      if (!v) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(b), !w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const N = h.length === 0 ? "" : h.length === 1 ? h[0] : i(h).join(":"), x = g ? N + go : N, y = x + w;
    if (a.indexOf(y) > -1)
      continue;
    a.push(y);
    const P = o(w, v);
    for (let E = 0; E < P.length; ++E) {
      const C = P[E];
      a.push(x + C);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, pf = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = da(n)) && (o && (o += " "), o += r);
  return o;
}, da = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = da(e[r])) && (n && (n += " "), n += t);
  return n;
}, vf = (e, ...t) => {
  let n, r, o, i;
  const a = (l) => {
    const c = t.reduce((d, u) => u(d), e());
    return n = hf(c), r = n.cache.get, o = n.cache.set, i = s, s(l);
  }, s = (l) => {
    const c = r(l);
    if (c)
      return c;
    const d = gf(l, n);
    return o(l, d), d;
  };
  return i = a, (...l) => i(pf(...l));
}, bf = [], Ce = (e) => {
  const t = (n) => n[e] || bf;
  return t.isThemeGetter = !0, t;
}, fa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ha = /^\((?:(\w[\w-]*):)?(.+)\)$/i, yf = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, wf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Sf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vt = (e) => yf.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), bt = (e) => !!e && Number.isInteger(Number(e)), Xr = (e) => e.endsWith("%") && re(e.slice(0, -1)), at = (e) => wf.test(e), ma = () => !0, Pf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xf.test(e) && !Cf.test(e)
), Oo = () => !1, Ef = (e) => Sf.test(e), Rf = (e) => Nf.test(e), If = (e) => !W(e) && !V(e), Af = (e) => Et(e, va, Oo), W = (e) => fa.test(e), Dt = (e) => Et(e, ba, Pf), Ji = (e) => Et(e, Ff, re), kf = (e) => Et(e, wa, ma), Df = (e) => Et(e, ya, Oo), Qi = (e) => Et(e, ga, Oo), Mf = (e) => Et(e, pa, Rf), qn = (e) => Et(e, xa, Ef), V = (e) => ha.test(e), vn = (e) => _t(e, ba), Of = (e) => _t(e, ya), es = (e) => _t(e, ga), Tf = (e) => _t(e, va), _f = (e) => _t(e, pa), Zn = (e) => _t(e, xa, !0), Lf = (e) => _t(e, wa, !0), Et = (e, t, n) => {
  const r = fa.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, _t = (e, t, n = !1) => {
  const r = ha.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ga = (e) => e === "position" || e === "percentage", pa = (e) => e === "image" || e === "url", va = (e) => e === "length" || e === "size" || e === "bg-size", ba = (e) => e === "length", Ff = (e) => e === "number", ya = (e) => e === "family-name", wa = (e) => e === "number" || e === "weight", xa = (e) => e === "shadow", $f = () => {
  const e = Ce("color"), t = Ce("font"), n = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), i = Ce("leading"), a = Ce("breakpoint"), s = Ce("container"), l = Ce("spacing"), c = Ce("radius"), d = Ce("shadow"), u = Ce("inset-shadow"), h = Ce("text-shadow"), g = Ce("drop-shadow"), b = Ce("blur"), p = Ce("perspective"), v = Ce("aspect"), w = Ce("ease"), N = Ce("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], P = () => [...y(), V, W], E = () => ["auto", "hidden", "clip", "visible", "scroll"], C = () => ["auto", "contain", "none"], S = () => [V, W, l], R = () => [vt, "full", "auto", ...S()], I = () => [bt, "none", "subgrid", V, W], k = () => ["auto", {
    span: ["full", bt, V, W]
  }, bt, V, W], O = () => [bt, "auto", V, W], z = () => ["auto", "min", "max", "fr", V, W], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...S()], T = () => [vt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], $ = () => [vt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...S()], _ = () => [vt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...S()], L = () => [e, V, W], G = () => [...y(), es, Qi, {
    position: [V, W]
  }], U = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ie = () => ["auto", "cover", "contain", Tf, Af, {
    size: [V, W]
  }], le = () => [Xr, vn, Dt], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    V,
    W
  ], B = () => ["", re, vn, Dt], H = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [re, Xr, es, Qi], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    V,
    W
  ], oe = () => ["none", re, V, W], ce = () => ["none", re, V, W], he = () => [re, V, W], pe = () => [vt, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [at],
      breakpoint: [at],
      color: [ma],
      container: [at],
      "drop-shadow": [at],
      ease: ["in", "out", "in-out"],
      font: [If],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [at],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [at],
      shadow: [at],
      spacing: ["px", re],
      text: [at],
      "text-shadow": [at],
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
        aspect: ["auto", "square", vt, W, V, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [re, W, V, s]
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
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
        inset: R()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: R()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: R()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": R()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        z: [bt, "auto", V, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [vt, "full", "auto", s, ...S()]
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
        flex: [re, vt, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, V, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, V, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [bt, "first", "last", "none", V, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: k()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: k()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...K(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...K()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...K(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...K()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: S()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
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
        "space-x": S()
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
        "space-y": S()
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
        inline: ["auto", ...$()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...$()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...$()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ..._()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ..._()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ..._()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...T()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
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
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
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
        text: ["base", n, vn, Dt]
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
        font: [r, Lf, kf]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xr, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Of, Df, t]
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
        tracking: [o, V, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", V, Ji]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, W]
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
        list: ["disc", "decimal", "none", V, W]
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", V, Dt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [re, "auto", V, W]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, W]
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
        content: ["none", V, W]
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
        bg: G()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: U()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ie()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, bt, V, W],
          radial: ["", V, W],
          conic: [bt, V, W]
        }, _f, Mf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: le()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ne()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ne()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ne()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ne()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ne()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ne()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ne()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ne()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ne()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ne()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ne()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ne()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ne()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ne()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ne()
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
        border: [...H(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...H(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": L()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...H(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, V, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, vn, Dt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
          Zn,
          qn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Zn, qn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [re, Dt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
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
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Zn, qn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [re, V, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        "mask-linear": [re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": J()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": J()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
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
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
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
        mask: G()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: U()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ie()
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
        mask: ["none", V, W]
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
          V,
          W
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
        brightness: [re, V, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, V, W]
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
          g,
          Zn,
          qn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", re, V, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, V, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, V, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, V, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, V, W]
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
          V,
          W
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
        "backdrop-brightness": [re, V, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, V, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, V, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, V, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, V, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, V, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, V, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, V, W]
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, W]
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
        duration: [re, "initial", V, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, V, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, V, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, V, W]
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
        perspective: [p, V, W]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ce()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ce()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ce()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ce()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [V, W, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: P()
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
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
        caret: L()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, W]
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
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": S()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": S()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", V, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, vn, Dt, Ji]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, zf = /* @__PURE__ */ vf($f);
function se(...e) {
  return zf(aa(e));
}
const To = ({
  onError: e
}) => (n) => {
  e?.(n);
}, _o = (e) => {
  const t = xe(Tt), n = To({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: a,
    imageClassName: s,
    backgroundColor: l,
    width: c,
    height: d,
    left: u = 0,
    right: h = 0,
    top: g = 0,
    bottom: b = 0
  } = e, p = (C) => `${C}mm`, v = () => {
    let C = c;
    return c ? !u && !h && (C += r) : (C = o, u || (C += r), h || (C += r), (u || h) && (C -= (u ?? 0) + (h ?? 0))), C;
  }, w = () => {
    let C = d;
    return d ? !g && !b && (C += r) : (C = i, g || (C += r), b || (C += r), (g || b) && (C -= (g ?? 0) + (b ?? 0))), C;
  }, N = v(), x = w(), y = (C) => C !== void 0 ? p(C) : void 0, E = ((C) => Object.fromEntries(
    Object.entries(C).filter(([S, R]) => R !== void 0)
  ))({
    backgroundColor: l,
    width: y(N),
    height: y(x),
    left: y(u > 0 ? u + r : u),
    right: y(h > 0 ? h + r : h),
    top: y(g > 0 ? g + r : g),
    bottom: y(b > 0 ? b + r : b)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: E, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ D(
    "div",
    {
      className: "uhuu-image-inner",
      ...en(e, t),
      children: [
        /* @__PURE__ */ f(
          "img",
          {
            className: se("cover-image object-cover object-center", s),
            src: a || null,
            onError: n
          }
        ),
        e.children
      ]
    }
  ) });
};
const Bf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), ts = (e) => {
  const t = Kf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ca = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Wf = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var jf = {
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
const Vf = Ar(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, l) => fo(
    "svg",
    {
      ref: l,
      ...jf,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ca("lucide", o),
      ...!i && !Wf(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([c, d]) => fo(c, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const we = (e, t) => {
  const n = Ar(
    ({ className: r, ...o }, i) => fo(Vf, {
      ref: i,
      iconNode: t,
      className: Ca(
        `lucide-${Bf(ts(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = ts(e), n;
};
const Hf = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Gf = we("arrow-down", Hf);
const Uf = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ns = we("arrow-up-down", Uf);
const Yf = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Xf = we("arrow-up", Yf);
const qf = [
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
], Zf = we("book-dashed", qf);
const Jf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], fr = we("check", Jf);
const Qf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Sa = we("chevron-down", Qf);
const eh = [
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
], th = we("clipboard-list", eh);
const nh = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], rh = we("copy", nh);
const oh = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Na = we("ellipsis", oh);
const ih = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Pa = we("grip-vertical", ih);
const sh = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], po = we("lock", sh);
const ah = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], lh = we("maximize", ah);
const ch = [["path", { d: "M5 12h14", key: "1ays0h" }]], uh = we("minus", ch);
const dh = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], fh = we("pencil", dh);
const hh = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], lt = we("plus", hh);
const mh = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], gh = we("search", mh);
const ph = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], vh = we("trash-2", ph);
const bh = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], yh = we("unfold-horizontal", bh);
const wh = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], xh = we("unfold-vertical", wh);
const Ch = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ea = we("x", Ch);
const Sh = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Nh = we("zoom-in", Sh);
const Ph = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Eh = we("zoom-out", Ph), Ra = m.createContext({
  portalContainer: null
});
function Lo() {
  return m.useContext(Ra);
}
function Rh({ children: e }) {
  const [t, n] = m.useState(null);
  return m.useEffect(() => {
    if (typeof document > "u") return;
    const r = document.createElement("div");
    return r.setAttribute("data-uhuu-portal", ""), r.style.cssText = "position: fixed; top: 0; left: 0; z-index: 9999;", document.body.appendChild(r), n(r), () => {
      document.body.removeChild(r);
    };
  }, []), /* @__PURE__ */ f(Ra.Provider, { value: { portalContainer: t }, children: e });
}
const Ia = Pt({
  interactive: !0,
  setInteractive: () => {
  },
  enableDevTools: !1
});
function Fo() {
  return xe(Ia);
}
function $o() {
  const { interactive: e } = Fo();
  return !e;
}
function Ih({
  children: e,
  defaultInteractive: t = !0,
  enableDevTools: n = !1
}) {
  const o = !!(typeof window < "u" && window?.$uhuu_renderer) ? !1 : t, [i, a] = te(o);
  return /* @__PURE__ */ f(Ia.Provider, { value: { interactive: i, setInteractive: a, enableDevTools: n }, children: /* @__PURE__ */ f(Rh, { children: /* @__PURE__ */ f("div", { "data-uhuu-interactive": i ? "" : void 0, style: { display: "contents" }, children: e }) }) });
}
const rs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, os = aa, Aa = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return os(e, n?.class, n?.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((c) => {
    const d = n?.[c], u = i?.[c];
    if (d === null) return null;
    const h = rs(d) || rs(u);
    return o[c][h];
  }), s = n && Object.entries(n).reduce((c, d) => {
    let [u, h] = d;
    return h === void 0 || (c[u] = h), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: u, className: h, ...g } = d;
    return Object.entries(g).every((b) => {
      let [p, v] = b;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...s
      }[p]) : {
        ...i,
        ...s
      }[p] === v;
    }) ? [
      ...c,
      u,
      h
    ] : c;
  }, []);
  return os(e, a, l, n?.class, n?.className);
}, Ah = Aa(
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
), ke = m.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f(
    "button",
    {
      className: se(Ah({ variant: t, size: n, className: e })),
      ref: o,
      ...r
    }
  )
);
ke.displayName = "Button";
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function is(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function An(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = is(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : is(e[o], null);
        }
      };
  };
}
function ve(...e) {
  return m.useCallback(An(...e), e);
}
function kh(e, t) {
  const n = m.createContext(t), r = (i) => {
    const { children: a, ...s } = i, l = m.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = m.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ht(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = m.createContext(a), l = n.length;
    n = [...n, a];
    const c = (u) => {
      const { scope: h, children: g, ...b } = u, p = h?.[e]?.[l] || s, v = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ f(p.Provider, { value: v, children: g });
    };
    c.displayName = i + "Provider";
    function d(u, h) {
      const g = h?.[e]?.[l] || s, b = m.useContext(g);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const o = () => {
    const i = n.map((a) => m.createContext(a));
    return function(s) {
      const l = s?.[e] || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, Dh(o, ...t)];
}
function Dh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: l, scopeName: c }) => {
        const u = l(i)[`__scope${c}`];
        return { ...s, ...u };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var xt = globalThis?.document ? m.useLayoutEffect : () => {
}, Mh = m[" useInsertionEffect ".trim().toString()] || xt;
function kn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, a] = Oh({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const d = m.useRef(e !== void 0);
    m.useEffect(() => {
      const u = d.current;
      u !== s && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = s;
    }, [s, r]);
  }
  const c = m.useCallback(
    (d) => {
      if (s) {
        const u = Th(d) ? d(e) : d;
        u !== e && a.current?.(u);
      } else
        i(d);
    },
    [s, e, i, a]
  );
  return [l, c];
}
function Oh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), i = m.useRef(t);
  return Mh(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Th(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  const t = /* @__PURE__ */ _h(e), n = m.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = m.Children.toArray(i), l = s.find(Fh);
    if (l) {
      const c = l.props.children, d = s.map((u) => u === l ? m.Children.count(c) > 1 ? m.Children.only(null) : m.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: m.isValidElement(c) ? m.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function _h(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (m.isValidElement(o)) {
      const a = zh(o), s = $h(i, o.props);
      return o.type !== m.Fragment && (s.ref = r ? An(r, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ka = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Lh(e) {
  const t = ({ children: n }) => /* @__PURE__ */ f(Fe, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ka, t;
}
function Fh(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ka;
}
function $h(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function zh(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Bh = [
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
], be = Bh.reduce((e, t) => {
  const n = /* @__PURE__ */ Cn(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Da(e, t) {
  e && Qs.flushSync(() => e.dispatchEvent(t));
}
function zo(e) {
  const t = e + "CollectionProvider", [n, r] = ht(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (p) => {
    const { scope: v, children: w } = p, N = me.useRef(null), x = me.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: v, itemMap: x, collectionRef: N, children: w });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Cn(s), c = me.forwardRef(
    (p, v) => {
      const { scope: w, children: N } = p, x = i(s, w), y = ve(v, x.collectionRef);
      return /* @__PURE__ */ f(l, { ref: y, children: N });
    }
  );
  c.displayName = s;
  const d = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ Cn(d), g = me.forwardRef(
    (p, v) => {
      const { scope: w, children: N, ...x } = p, y = me.useRef(null), P = ve(v, y), E = i(d, w);
      return me.useEffect(() => (E.itemMap.set(y, { ref: y, ...x }), () => {
        E.itemMap.delete(y);
      })), /* @__PURE__ */ f(h, { [u]: "", ref: P, children: N });
    }
  );
  g.displayName = d;
  function b(p) {
    const v = i(e + "CollectionConsumer", p);
    return me.useCallback(() => {
      const N = v.collectionRef.current;
      if (!N) return [];
      const x = Array.from(N.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, C) => x.indexOf(E.ref.current) - x.indexOf(C.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: g },
    b,
    r
  ];
}
var Kh = m.createContext(void 0);
function Bo(e) {
  const t = m.useContext(Kh);
  return e || t || "ltr";
}
function ut(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => t.current?.(...n), []);
}
function Wh(e, t = globalThis?.document) {
  const n = ut(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var jh = "DismissableLayer", vo = "dismissableLayer.update", Vh = "dismissableLayer.pointerDownOutside", Hh = "dismissableLayer.focusOutside", ss, Ma = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ko = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, c = m.useContext(Ma), [d, u] = m.useState(null), h = d?.ownerDocument ?? globalThis?.document, [, g] = m.useState({}), b = ve(t, (C) => u(C)), p = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = p.indexOf(v), N = d ? p.indexOf(d) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, y = N >= w, P = Yh((C) => {
      const S = C.target, R = [...c.branches].some((I) => I.contains(S));
      !y || R || (o?.(C), a?.(C), C.defaultPrevented || s?.());
    }, h), E = Xh((C) => {
      const S = C.target;
      [...c.branches].some((I) => I.contains(S)) || (i?.(C), a?.(C), C.defaultPrevented || s?.());
    }, h);
    return Wh((C) => {
      N === c.layers.size - 1 && (r?.(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, h), m.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (ss = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), as(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ss);
        };
    }, [d, h, n, c]), m.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), as());
    }, [d, c]), m.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(vo, C), () => document.removeEventListener(vo, C);
    }, []), /* @__PURE__ */ f(
      be.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: x ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Z(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Ko.displayName = jh;
var Gh = "DismissableLayerBranch", Uh = m.forwardRef((e, t) => {
  const n = m.useContext(Ma), r = m.useRef(null), o = ve(t, r);
  return m.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ f(be.div, { ...e, ref: o });
});
Uh.displayName = Gh;
function Yh(e, t = globalThis?.document) {
  const n = ut(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Oa(
            Vh,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Xh(e, t = globalThis?.document) {
  const n = ut(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Oa(Hh, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function as() {
  const e = new CustomEvent(vo);
  document.dispatchEvent(e);
}
function Oa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Da(o, i) : o.dispatchEvent(i);
}
var qr = 0;
function Ta() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ls()), document.body.insertAdjacentElement("beforeend", e[1] ?? ls()), qr++, () => {
      qr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), qr--;
    };
  }, []);
}
function ls() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Zr = "focusScope.autoFocusOnMount", Jr = "focusScope.autoFocusOnUnmount", cs = { bubbles: !1, cancelable: !0 }, qh = "FocusScope", Wo = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, l] = m.useState(null), c = ut(o), d = ut(i), u = m.useRef(null), h = ve(t, (p) => l(p)), g = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (g.paused || !s) return;
        const y = x.target;
        s.contains(y) ? u.current = y : yt(u.current, { select: !0 });
      }, v = function(x) {
        if (g.paused || !s) return;
        const y = x.relatedTarget;
        y !== null && (s.contains(y) || yt(u.current, { select: !0 }));
      }, w = function(x) {
        if (document.activeElement === document.body)
          for (const P of x)
            P.removedNodes.length > 0 && yt(s);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const N = new MutationObserver(w);
      return s && N.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), N.disconnect();
      };
    }
  }, [r, s, g.paused]), m.useEffect(() => {
    if (s) {
      ds.add(g);
      const p = document.activeElement;
      if (!s.contains(p)) {
        const w = new CustomEvent(Zr, cs);
        s.addEventListener(Zr, c), s.dispatchEvent(w), w.defaultPrevented || (Zh(nm(_a(s)), { select: !0 }), document.activeElement === p && yt(s));
      }
      return () => {
        s.removeEventListener(Zr, c), setTimeout(() => {
          const w = new CustomEvent(Jr, cs);
          s.addEventListener(Jr, d), s.dispatchEvent(w), w.defaultPrevented || yt(p ?? document.body, { select: !0 }), s.removeEventListener(Jr, d), ds.remove(g);
        }, 0);
      };
    }
  }, [s, c, d, g]);
  const b = m.useCallback(
    (p) => {
      if (!n && !r || g.paused) return;
      const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, w = document.activeElement;
      if (v && w) {
        const N = p.currentTarget, [x, y] = Jh(N);
        x && y ? !p.shiftKey && w === y ? (p.preventDefault(), n && yt(x, { select: !0 })) : p.shiftKey && w === x && (p.preventDefault(), n && yt(y, { select: !0 })) : w === N && p.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ f(be.div, { tabIndex: -1, ...a, ref: h, onKeyDown: b });
});
Wo.displayName = qh;
function Zh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (yt(r, { select: t }), document.activeElement !== n) return;
}
function Jh(e) {
  const t = _a(e), n = us(t, e), r = us(t.reverse(), e);
  return [n, r];
}
function _a(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function us(e, t) {
  for (const n of e)
    if (!Qh(n, { upTo: t })) return n;
}
function Qh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function em(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function yt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && em(e) && t && e.select();
  }
}
var ds = tm();
function tm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = fs(e, t), e.unshift(t);
    },
    remove(t) {
      e = fs(e, t), e[0]?.resume();
    }
  };
}
function fs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function nm(e) {
  return e.filter((t) => t.tagName !== "A");
}
var rm = m[" useId ".trim().toString()] || (() => {
}), om = 0;
function Ut(e) {
  const [t, n] = m.useState(rm());
  return xt(() => {
    n((r) => r ?? String(om++));
  }, [e]), t ? `radix-${t}` : "";
}
const im = ["top", "right", "bottom", "left"], Ct = Math.min, ze = Math.max, hr = Math.round, Jn = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), sm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, am = {
  start: "end",
  end: "start"
};
function bo(e, t, n) {
  return ze(e, Ct(t, n));
}
function dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ft(e) {
  return e.split("-")[0];
}
function tn(e) {
  return e.split("-")[1];
}
function jo(e) {
  return e === "x" ? "y" : "x";
}
function Vo(e) {
  return e === "y" ? "height" : "width";
}
const lm = /* @__PURE__ */ new Set(["top", "bottom"]);
function tt(e) {
  return lm.has(ft(e)) ? "y" : "x";
}
function Ho(e) {
  return jo(tt(e));
}
function cm(e, t, n) {
  n === void 0 && (n = !1);
  const r = tn(e), o = Ho(e), i = Vo(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = mr(a)), [a, mr(a)];
}
function um(e) {
  const t = mr(e);
  return [yo(e), t, yo(t)];
}
function yo(e) {
  return e.replace(/start|end/g, (t) => am[t]);
}
const hs = ["left", "right"], ms = ["right", "left"], dm = ["top", "bottom"], fm = ["bottom", "top"];
function hm(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ms : hs : t ? hs : ms;
    case "left":
    case "right":
      return t ? dm : fm;
    default:
      return [];
  }
}
function mm(e, t, n, r) {
  const o = tn(e);
  let i = hm(ft(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(yo)))), i;
}
function mr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sm[t]);
}
function gm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function La(e) {
  return typeof e != "number" ? gm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function gr(e) {
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
function gs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = tt(t), a = Ho(t), s = Vo(a), l = ft(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (tn(t)) {
    case "start":
      g[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[a] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
async function pm(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = dt(t, e), b = La(g), v = s[h ? u === "floating" ? "reference" : "floating" : u], w = gr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), N = u === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), y = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = gr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: N,
    offsetParent: x,
    strategy: l
  }) : N);
  return {
    top: (w.top - P.top + b.top) / y.y,
    bottom: (P.bottom - w.bottom + b.bottom) / y.y,
    left: (w.left - P.left + b.left) / y.x,
    right: (P.right - w.right + b.right) / y.x
  };
}
const vm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = gs(c, r, l), h = r, g = {}, b = 0;
  for (let v = 0; v < s.length; v++) {
    var p;
    const {
      name: w,
      fn: N
    } = s[v], {
      x,
      y,
      data: P,
      reset: E
    } = await N({
      x: d,
      y: u,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: {
        ...a,
        detectOverflow: (p = a.detectOverflow) != null ? p : pm
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, u = y ?? u, g = {
      ...g,
      [w]: {
        ...g[w],
        ...P
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (c = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: u
    } = gs(c, h, l)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: g
  };
}, bm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = dt(e, t) || {};
    if (c == null)
      return {};
    const u = La(d), h = {
      x: n,
      y: r
    }, g = Ho(o), b = Vo(g), p = await a.getDimensions(c), v = g === "y", w = v ? "top" : "left", N = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = i.reference[b] + i.reference[g] - h[g] - i.floating[b], P = h[g] - i.reference[g], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let C = E ? E[x] : 0;
    (!C || !await (a.isElement == null ? void 0 : a.isElement(E))) && (C = s.floating[x] || i.floating[b]);
    const S = y / 2 - P / 2, R = C / 2 - p[b] / 2 - 1, I = Ct(u[w], R), k = Ct(u[N], R), O = I, z = C - p[b] - k, F = C / 2 - p[b] / 2 + S, K = bo(O, F, z), M = !l.arrow && tn(o) != null && F !== K && i.reference[b] / 2 - (F < O ? I : k) - p[b] / 2 < 0, T = M ? F < O ? F - O : F - z : 0;
    return {
      [g]: h[g] + T,
      data: {
        [g]: K,
        centerOffset: F - K - T,
        ...M && {
          alignmentOffset: T
        }
      },
      reset: M
    };
  }
}), ym = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...v
      } = dt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = ft(o), N = tt(s), x = ft(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = h || (x || !p ? [mr(s)] : um(s)), E = b !== "none";
      !h && E && P.push(...mm(s, p, b, y));
      const C = [s, ...P], S = await l.detectOverflow(t, v), R = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && R.push(S[w]), u) {
        const F = cm(o, a, y);
        R.push(S[F[0]], S[F[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: R
      }], !R.every((F) => F <= 0)) {
        var k, O;
        const F = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, K = C[F];
        if (K && (!(u === "alignment" ? N !== tt(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every(($) => tt($.placement) === N ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: I
            },
            reset: {
              placement: K
            }
          };
        let M = (O = I.filter((T) => T.overflows[0] <= 0).sort((T, $) => T.overflows[1] - $.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!M)
          switch (g) {
            case "bestFit": {
              var z;
              const T = (z = I.filter(($) => {
                if (E) {
                  const _ = tt($.placement);
                  return _ === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((_) => _ > 0).reduce((_, L) => _ + L, 0)]).sort(($, _) => $[1] - _[1])[0]) == null ? void 0 : z[0];
              T && (M = T);
              break;
            }
            case "initialPlacement":
              M = s;
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
function ps(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vs(e) {
  return im.some((t) => e[t] >= 0);
}
const wm = function(e) {
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
      } = dt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), s = ps(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: vs(s)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), s = ps(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: vs(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Fa = /* @__PURE__ */ new Set(["left", "top"]);
async function xm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = ft(n), s = tn(n), l = tt(n) === "y", c = Fa.has(a) ? -1 : 1, d = i && l ? -1 : 1, u = dt(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
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
  return s && typeof b == "number" && (g = s === "end" ? b * -1 : b), l ? {
    x: g * d,
    y: h * c
  } : {
    x: h * c,
    y: g * d
  };
}
const Cm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, l = await xm(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, Sm = function(e) {
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
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: N,
              y: x
            } = w;
            return {
              x: N,
              y: x
            };
          }
        },
        ...c
      } = dt(e, t), d = {
        x: n,
        y: r
      }, u = await i.detectOverflow(t, c), h = tt(ft(o)), g = jo(h);
      let b = d[g], p = d[h];
      if (a) {
        const w = g === "y" ? "top" : "left", N = g === "y" ? "bottom" : "right", x = b + u[w], y = b - u[N];
        b = bo(x, b, y);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", N = h === "y" ? "bottom" : "right", x = p + u[w], y = p - u[N];
        p = bo(x, p, y);
      }
      const v = l.fn({
        ...t,
        [g]: b,
        [h]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [g]: a,
            [h]: s
          }
        }
      };
    }
  };
}, Nm = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = dt(e, t), d = {
        x: n,
        y: r
      }, u = tt(o), h = jo(u);
      let g = d[h], b = d[u];
      const p = dt(s, t), v = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const x = h === "y" ? "height" : "width", y = i.reference[h] - i.floating[x] + v.mainAxis, P = i.reference[h] + i.reference[x] - v.mainAxis;
        g < y ? g = y : g > P && (g = P);
      }
      if (c) {
        var w, N;
        const x = h === "y" ? "width" : "height", y = Fa.has(ft(o)), P = i.reference[u] - i.floating[x] + (y && ((w = a.offset) == null ? void 0 : w[u]) || 0) + (y ? 0 : v.crossAxis), E = i.reference[u] + i.reference[x] + (y ? 0 : ((N = a.offset) == null ? void 0 : N[u]) || 0) - (y ? v.crossAxis : 0);
        b < P ? b = P : b > E && (b = E);
      }
      return {
        [h]: g,
        [u]: b
      };
    }
  };
}, Pm = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = dt(e, t), d = await a.detectOverflow(t, c), u = ft(o), h = tn(o), g = tt(o) === "y", {
        width: b,
        height: p
      } = i.floating;
      let v, w;
      u === "top" || u === "bottom" ? (v = u, w = h === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = u, v = h === "end" ? "top" : "bottom");
      const N = p - d.top - d.bottom, x = b - d.left - d.right, y = Ct(p - d[v], N), P = Ct(b - d[w], x), E = !t.middlewareData.shift;
      let C = y, S = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = x), (r = t.middlewareData.shift) != null && r.enabled.y && (C = N), E && !h) {
        const I = ze(d.left, 0), k = ze(d.right, 0), O = ze(d.top, 0), z = ze(d.bottom, 0);
        g ? S = b - 2 * (I !== 0 || k !== 0 ? I + k : ze(d.left, d.right)) : C = p - 2 * (O !== 0 || z !== 0 ? O + z : ze(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: S,
        availableHeight: C
      });
      const R = await a.getDimensions(s.floating);
      return b !== R.width || p !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function kr() {
  return typeof window < "u";
}
function nn(e) {
  return $a(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ot(e) {
  var t;
  return (t = ($a(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $a(e) {
  return kr() ? e instanceof Node || e instanceof Be(e).Node : !1;
}
function Ye(e) {
  return kr() ? e instanceof Element || e instanceof Be(e).Element : !1;
}
function rt(e) {
  return kr() ? e instanceof HTMLElement || e instanceof Be(e).HTMLElement : !1;
}
function bs(e) {
  return !kr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Be(e).ShadowRoot;
}
const Em = /* @__PURE__ */ new Set(["inline", "contents"]);
function Dn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Em.has(o);
}
const Rm = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Im(e) {
  return Rm.has(nn(e));
}
const Am = [":popover-open", ":modal"];
function Dr(e) {
  return Am.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const km = ["transform", "translate", "scale", "rotate", "perspective"], Dm = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Mm = ["paint", "layout", "strict", "content"];
function Go(e) {
  const t = Uo(), n = Ye(e) ? Xe(e) : e;
  return km.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Dm.some((r) => (n.willChange || "").includes(r)) || Mm.some((r) => (n.contain || "").includes(r));
}
function Om(e) {
  let t = St(e);
  for (; rt(t) && !Qt(t); ) {
    if (Go(t))
      return t;
    if (Dr(t))
      return null;
    t = St(t);
  }
  return null;
}
function Uo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Tm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Qt(e) {
  return Tm.has(nn(e));
}
function Xe(e) {
  return Be(e).getComputedStyle(e);
}
function Mr(e) {
  return Ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function St(e) {
  if (nn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bs(e) && e.host || // Fallback.
    ot(e)
  );
  return bs(t) ? t.host : t;
}
function za(e) {
  const t = St(e);
  return Qt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rt(t) && Dn(t) ? t : za(t);
}
function Sn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = za(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Be(o);
  if (i) {
    const s = wo(a);
    return t.concat(a, a.visualViewport || [], Dn(o) ? o : [], s && n ? Sn(s) : []);
  }
  return t.concat(o, Sn(o, [], n));
}
function wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ba(e) {
  const t = Xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = rt(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = hr(n) !== i || hr(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Yo(e) {
  return Ye(e) ? e : e.contextElement;
}
function Yt(e) {
  const t = Yo(e);
  if (!rt(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ba(t);
  let a = (i ? hr(n.width) : n.width) / r, s = (i ? hr(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const _m = /* @__PURE__ */ nt(0);
function Ka(e) {
  const t = Be(e);
  return !Uo() || !t.visualViewport ? _m : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Lm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Be(e) ? !1 : t;
}
function Mt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Yo(e);
  let a = nt(1);
  t && (r ? Ye(r) && (a = Yt(r)) : a = Yt(e));
  const s = Lm(i, n, r) ? Ka(i) : nt(0);
  let l = (o.left + s.x) / a.x, c = (o.top + s.y) / a.y, d = o.width / a.x, u = o.height / a.y;
  if (i) {
    const h = Be(i), g = r && Ye(r) ? Be(r) : r;
    let b = h, p = wo(b);
    for (; p && r && g !== b; ) {
      const v = Yt(p), w = p.getBoundingClientRect(), N = Xe(p), x = w.left + (p.clientLeft + parseFloat(N.paddingLeft)) * v.x, y = w.top + (p.clientTop + parseFloat(N.paddingTop)) * v.y;
      l *= v.x, c *= v.y, d *= v.x, u *= v.y, l += x, c += y, b = Be(p), p = wo(b);
    }
  }
  return gr({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Or(e, t) {
  const n = Mr(e).scrollLeft;
  return t ? t.left + n : Mt(ot(e)).left + n;
}
function Wa(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Or(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Fm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = ot(r), s = t ? Dr(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = nt(1);
  const d = nt(0), u = rt(r);
  if ((u || !u && !i) && ((nn(r) !== "body" || Dn(a)) && (l = Mr(r)), rt(r))) {
    const g = Mt(r);
    c = Yt(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const h = a && !u && !i ? Wa(a, l) : nt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + h.y
  };
}
function $m(e) {
  return Array.from(e.getClientRects());
}
function zm(e) {
  const t = ot(e), n = Mr(e), r = e.ownerDocument.body, o = ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Or(e);
  const s = -n.scrollTop;
  return Xe(r).direction === "rtl" && (a += ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const ys = 25;
function Bm(e, t) {
  const n = Be(e), r = ot(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const d = Uo();
    (!d || d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const c = Or(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, h = getComputedStyle(u), g = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - u.clientWidth - g);
    b <= ys && (i -= b);
  } else c <= ys && (i += c);
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
const Km = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Wm(e, t) {
  const n = Mt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = rt(e) ? Yt(e) : nt(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function ws(e, t, n) {
  let r;
  if (t === "viewport")
    r = Bm(e, n);
  else if (t === "document")
    r = zm(ot(e));
  else if (Ye(t))
    r = Wm(t, n);
  else {
    const o = Ka(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return gr(r);
}
function ja(e, t) {
  const n = St(e);
  return n === t || !Ye(n) || Qt(n) ? !1 : Xe(n).position === "fixed" || ja(n, t);
}
function jm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Sn(e, [], !1).filter((s) => Ye(s) && nn(s) !== "body"), o = null;
  const i = Xe(e).position === "fixed";
  let a = i ? St(e) : e;
  for (; Ye(a) && !Qt(a); ) {
    const s = Xe(a), l = Go(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && Km.has(o.position) || Dn(a) && !l && ja(e, a)) ? r = r.filter((d) => d !== a) : o = s, a = St(a);
  }
  return t.set(e, r), r;
}
function Vm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Dr(t) ? [] : jm(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((c, d) => {
    const u = ws(t, d, o);
    return c.top = ze(u.top, c.top), c.right = Ct(u.right, c.right), c.bottom = Ct(u.bottom, c.bottom), c.left = ze(u.left, c.left), c;
  }, ws(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Hm(e) {
  const {
    width: t,
    height: n
  } = Ba(e);
  return {
    width: t,
    height: n
  };
}
function Gm(e, t, n) {
  const r = rt(t), o = ot(t), i = n === "fixed", a = Mt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = nt(0);
  function c() {
    l.x = Or(o);
  }
  if (r || !r && !i)
    if ((nn(t) !== "body" || Dn(o)) && (s = Mr(t)), r) {
      const g = Mt(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Wa(o, s) : nt(0), u = a.left + s.scrollLeft - l.x - d.x, h = a.top + s.scrollTop - l.y - d.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Qr(e) {
  return Xe(e).position === "static";
}
function xs(e, t) {
  if (!rt(e) || Xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ot(e) === n && (n = n.ownerDocument.body), n;
}
function Va(e, t) {
  const n = Be(e);
  if (Dr(e))
    return n;
  if (!rt(e)) {
    let o = St(e);
    for (; o && !Qt(o); ) {
      if (Ye(o) && !Qr(o))
        return o;
      o = St(o);
    }
    return n;
  }
  let r = xs(e, t);
  for (; r && Im(r) && Qr(r); )
    r = xs(r, t);
  return r && Qt(r) && Qr(r) && !Go(r) ? n : r || Om(e) || n;
}
const Um = async function(e) {
  const t = this.getOffsetParent || Va, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Gm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ym(e) {
  return Xe(e).direction === "rtl";
}
const Xm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fm,
  getDocumentElement: ot,
  getClippingRect: Vm,
  getOffsetParent: Va,
  getElementRects: Um,
  getClientRects: $m,
  getDimensions: Hm,
  getScale: Yt,
  isElement: Ye,
  isRTL: Ym
};
function Ha(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qm(e, t) {
  let n = null, r;
  const o = ot(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: h,
      height: g
    } = c;
    if (s || t(), !h || !g)
      return;
    const b = Jn(u), p = Jn(o.clientWidth - (d + h)), v = Jn(o.clientHeight - (u + g)), w = Jn(d), x = {
      rootMargin: -b + "px " + -p + "px " + -v + "px " + -w + "px",
      threshold: ze(0, Ct(1, l)) || 1
    };
    let y = !0;
    function P(E) {
      const C = E[0].intersectionRatio;
      if (C !== l) {
        if (!y)
          return a();
        C ? a(!1, C) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ha(c, e.getBoundingClientRect()) && a(), y = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, x);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function Zm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Yo(e), d = o || i ? [...c ? Sn(c) : [], ...Sn(t)] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const u = c && s ? qm(c, n) : null;
  let h = -1, g = null;
  a && (g = new ResizeObserver((w) => {
    let [N] = w;
    N && N.target === c && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = g) == null || x.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let b, p = l ? Mt(e) : null;
  l && v();
  function v() {
    const w = Mt(e);
    p && !Ha(p, w) && n(), p = w, b = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    d.forEach((N) => {
      o && N.removeEventListener("scroll", n), i && N.removeEventListener("resize", n);
    }), u?.(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(b);
  };
}
const Jm = Cm, Qm = Sm, eg = ym, tg = Pm, ng = wm, Cs = bm, rg = Nm, og = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Xm,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return vm(e, t, {
    ...o,
    platform: i
  });
};
var ig = typeof document < "u", sg = function() {
}, ir = ig ? Js : sg;
function pr(e, t) {
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
        if (!pr(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !pr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ga(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ss(e, t) {
  const n = Ga(e);
  return Math.round(t * n) / n;
}
function eo(e) {
  const t = m.useRef(e);
  return ir(() => {
    t.current = e;
  }), t;
}
function ag(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, u] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = m.useState(r);
  pr(h, r) || g(r);
  const [b, p] = m.useState(null), [v, w] = m.useState(null), N = m.useCallback(($) => {
    $ !== E.current && (E.current = $, p($));
  }, []), x = m.useCallback(($) => {
    $ !== C.current && (C.current = $, w($));
  }, []), y = i || b, P = a || v, E = m.useRef(null), C = m.useRef(null), S = m.useRef(d), R = l != null, I = eo(l), k = eo(o), O = eo(c), z = m.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    k.current && ($.platform = k.current), og(E.current, C.current, $).then((_) => {
      const L = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      F.current && !pr(S.current, L) && (S.current = L, Qs.flushSync(() => {
        u(L);
      }));
    });
  }, [h, t, n, k, O]);
  ir(() => {
    c === !1 && S.current.isPositioned && (S.current.isPositioned = !1, u(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [c]);
  const F = m.useRef(!1);
  ir(() => (F.current = !0, () => {
    F.current = !1;
  }), []), ir(() => {
    if (y && (E.current = y), P && (C.current = P), y && P) {
      if (I.current)
        return I.current(y, P, z);
      z();
    }
  }, [y, P, z, I, R]);
  const K = m.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: N,
    setFloating: x
  }), [N, x]), M = m.useMemo(() => ({
    reference: y,
    floating: P
  }), [y, P]), T = m.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return $;
    const _ = Ss(M.floating, d.x), L = Ss(M.floating, d.y);
    return s ? {
      ...$,
      transform: "translate(" + _ + "px, " + L + "px)",
      ...Ga(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: L
    };
  }, [n, s, M.floating, d.x, d.y]);
  return m.useMemo(() => ({
    ...d,
    update: z,
    refs: K,
    elements: M,
    floatingStyles: T
  }), [d, z, K, M, T]);
}
const lg = (e) => {
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
      return r && t(r) ? r.current != null ? Cs({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Cs({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, cg = (e, t) => ({
  ...Jm(e),
  options: [e, t]
}), ug = (e, t) => ({
  ...Qm(e),
  options: [e, t]
}), dg = (e, t) => ({
  ...rg(e),
  options: [e, t]
}), fg = (e, t) => ({
  ...eg(e),
  options: [e, t]
}), hg = (e, t) => ({
  ...tg(e),
  options: [e, t]
}), mg = (e, t) => ({
  ...ng(e),
  options: [e, t]
}), gg = (e, t) => ({
  ...lg(e),
  options: [e, t]
});
var pg = "Arrow", Ua = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ f(
    be.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ua.displayName = pg;
var vg = Ua;
function Xo(e) {
  const [t, n] = m.useState(void 0);
  return xt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          a = c.inlineSize, s = c.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var qo = "Popper", [Ya, Xa] = ht(qo), [bg, qa] = Ya(qo), Za = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ f(bg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Za.displayName = qo;
var Ja = "PopperAnchor", Qa = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = qa(Ja, n), a = m.useRef(null), s = ve(t, a), l = m.useRef(null);
    return m.useEffect(() => {
      const c = l.current;
      l.current = r?.current || a.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ f(be.div, { ...o, ref: s });
  }
);
Qa.displayName = Ja;
var Zo = "PopperContent", [yg, wg] = Ya(Zo), el = m.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: b,
      ...p
    } = e, v = qa(Zo, n), [w, N] = m.useState(null), x = ve(t, (H) => N(H)), [y, P] = m.useState(null), E = Xo(y), C = E?.width ?? 0, S = E?.height ?? 0, R = r + (i !== "center" ? "-" + i : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, k = Array.isArray(c) ? c : [c], O = k.length > 0, z = {
      padding: I,
      boundary: k.filter(Cg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: O
    }, { refs: F, floatingStyles: K, placement: M, isPositioned: T, middlewareData: $ } = ag({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...H) => Zm(...H, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        cg({ mainAxis: o + S, alignmentAxis: a }),
        l && ug({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? dg() : void 0,
          ...z
        }),
        l && fg({ ...z }),
        hg({
          ...z,
          apply: ({ elements: H, rects: ee, availableWidth: J, availableHeight: X }) => {
            const { width: oe, height: ce } = ee.reference, he = H.floating.style;
            he.setProperty("--radix-popper-available-width", `${J}px`), he.setProperty("--radix-popper-available-height", `${X}px`), he.setProperty("--radix-popper-anchor-width", `${oe}px`), he.setProperty("--radix-popper-anchor-height", `${ce}px`);
          }
        }),
        y && gg({ element: y, padding: s }),
        Sg({ arrowWidth: C, arrowHeight: S }),
        h && mg({ strategy: "referenceHidden", ...z })
      ]
    }), [_, L] = rl(M), G = ut(b);
    xt(() => {
      T && G?.();
    }, [T, G]);
    const U = $.arrow?.x, ie = $.arrow?.y, le = $.arrow?.centerOffset !== 0, [ne, B] = m.useState();
    return xt(() => {
      w && B(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: T ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ne,
          "--radix-popper-transform-origin": [
            $.transformOrigin?.x,
            $.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...$.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          yg,
          {
            scope: n,
            placedSide: _,
            onArrowChange: P,
            arrowX: U,
            arrowY: ie,
            shouldHideArrow: le,
            children: /* @__PURE__ */ f(
              be.div,
              {
                "data-side": _,
                "data-align": L,
                ...p,
                ref: x,
                style: {
                  ...p.style,
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
el.displayName = Zo;
var tl = "PopperArrow", xg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nl = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = wg(tl, r), a = xg[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          vg,
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
nl.displayName = tl;
function Cg(e) {
  return e !== null;
}
var Sg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, d] = rl(n), u = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + l / 2;
    let b = "", p = "";
    return c === "bottom" ? (b = a ? u : `${h}px`, p = `${-l}px`) : c === "top" ? (b = a ? u : `${h}px`, p = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, p = a ? u : `${g}px`) : c === "left" && (b = `${r.floating.width + l}px`, p = a ? u : `${g}px`), { data: { x: b, y: p } };
  }
});
function rl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ng = Za, Pg = Qa, Eg = el, Rg = nl, Ig = "Portal", Jo = m.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, i] = m.useState(!1);
  xt(() => i(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? yd.createPortal(/* @__PURE__ */ f(be.div, { ...r, ref: t }), a) : null;
});
Jo.displayName = Ig;
function Ag(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Rt = (e) => {
  const { present: t, children: n } = e, r = kg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), i = ve(r.ref, Dg(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: i }) : null;
};
Rt.displayName = "Presence";
function kg(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = Ag(a, {
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
    const c = Qn(r.current);
    i.current = s === "mounted" ? c : "none";
  }, [s]), xt(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const h = i.current, g = Qn(c);
      e ? l("MOUNT") : g === "none" || c?.display === "none" ? l("UNMOUNT") : l(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), xt(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, u = (g) => {
        const p = Qn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (g) => {
        g.target === t && (i.current = Qn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: m.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Qn(e) {
  return e?.animationName || "none";
}
function Dg(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var to = "rovingFocusGroup.onEntryFocus", Mg = { bubbles: !1, cancelable: !0 }, Mn = "RovingFocusGroup", [xo, ol, Og] = zo(Mn), [Tg, il] = ht(
  Mn,
  [Og]
), [_g, Lg] = Tg(Mn), sl = m.forwardRef(
  (e, t) => /* @__PURE__ */ f(xo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(xo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Fg, { ...e, ref: t }) }) })
);
sl.displayName = Mn;
var Fg = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...u
  } = e, h = m.useRef(null), g = ve(t, h), b = Bo(i), [p, v] = kn({
    prop: a,
    defaultProp: s ?? null,
    onChange: l,
    caller: Mn
  }), [w, N] = m.useState(!1), x = ut(c), y = ol(n), P = m.useRef(!1), [E, C] = m.useState(0);
  return m.useEffect(() => {
    const S = h.current;
    if (S)
      return S.addEventListener(to, x), () => S.removeEventListener(to, x);
  }, [x]), /* @__PURE__ */ f(
    _g,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: p,
      onItemFocus: m.useCallback(
        (S) => v(S),
        [v]
      ),
      onItemShiftTab: m.useCallback(() => N(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => C((S) => S + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => C((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        be.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: Z(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: Z(e.onFocus, (S) => {
            const R = !P.current;
            if (S.target === S.currentTarget && R && !w) {
              const I = new CustomEvent(to, Mg);
              if (S.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const k = y().filter((M) => M.focusable), O = k.find((M) => M.active), z = k.find((M) => M.id === p), K = [O, z, ...k].filter(
                  Boolean
                ).map((M) => M.ref.current);
                cl(K, d);
              }
            }
            P.current = !1;
          }),
          onBlur: Z(e.onBlur, () => N(!1))
        }
      )
    }
  );
}), al = "RovingFocusGroupItem", ll = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, l = Ut(), c = i || l, d = Lg(al, n), u = d.currentTabStopId === c, h = ol(n), { onFocusableItemAdd: g, onFocusableItemRemove: b, currentTabStopId: p } = d;
    return m.useEffect(() => {
      if (r)
        return g(), () => b();
    }, [r, g, b]), /* @__PURE__ */ f(
      xo.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          be.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: Z(e.onMouseDown, (v) => {
              r ? d.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: Z(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: Z(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = Bg(v, d.orientation, d.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let x = h().filter((y) => y.focusable).map((y) => y.ref.current);
                if (w === "last") x.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && x.reverse();
                  const y = x.indexOf(v.currentTarget);
                  x = d.loop ? Kg(x, y + 1) : x.slice(y + 1);
                }
                setTimeout(() => cl(x));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: p != null }) : a
          }
        )
      }
    );
  }
);
ll.displayName = al;
var $g = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bg(e, t, n) {
  const r = zg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return $g[r];
}
function cl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Kg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Wg = sl, jg = ll, Vg = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wt = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = {}, no = 0, ul = function(e) {
  return e && (e.host || ul(e.parentNode));
}, Hg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ul(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gg = function(e, t, n, r) {
  var o = Hg(t, Array.isArray(e) ? e : [e]);
  tr[n] || (tr[n] = /* @__PURE__ */ new WeakMap());
  var i = tr[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(u) {
    !u || s.has(u) || (s.add(u), c(u.parentNode));
  };
  o.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (s.has(h))
        d(h);
      else
        try {
          var g = h.getAttribute(r), b = g !== null && g !== "false", p = (Wt.get(h) || 0) + 1, v = (i.get(h) || 0) + 1;
          Wt.set(h, p), i.set(h, v), a.push(h), p === 1 && b && er.set(h, !0), v === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), s.clear(), no++, function() {
    a.forEach(function(u) {
      var h = Wt.get(u) - 1, g = i.get(u) - 1;
      Wt.set(u, h), i.set(u, g), h || (er.has(u) || u.removeAttribute(r), er.delete(u)), g || u.removeAttribute(n);
    }), no--, no || (Wt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = {});
  };
}, dl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Vg(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Gg(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, et = function() {
  return et = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, et.apply(this, arguments);
};
function fl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ug(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var sr = "right-scroll-bar-position", ar = "width-before-scroll-bar", Yg = "with-scroll-bars-hidden", Xg = "--removed-body-scroll-bar-size";
function ro(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qg(e, t) {
  var n = te(function() {
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
var Zg = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Ns = /* @__PURE__ */ new WeakMap();
function Jg(e, t) {
  var n = qg(null, function(r) {
    return e.forEach(function(o) {
      return ro(o, r);
    });
  });
  return Zg(function() {
    var r = Ns.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || ro(s, null);
      }), i.forEach(function(s) {
        o.has(s) || ro(s, a);
      });
    }
    Ns.set(n, e);
  }, [e]), n;
}
function Qg(e) {
  return e;
}
function ep(e, t) {
  t === void 0 && (t = Qg);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var d = a;
        a = [], d.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          a.push(d), c();
        },
        filter: function(d) {
          return a = a.filter(d), n;
        }
      };
    }
  };
  return o;
}
function tp(e) {
  e === void 0 && (e = {});
  var t = ep(null);
  return t.options = et({ async: !0, ssr: !1 }, e), t;
}
var hl = function(e) {
  var t = e.sideCar, n = fl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, et({}, n));
};
hl.isSideCarExport = !0;
function np(e, t) {
  return e.useMedium(t), hl;
}
var ml = tp(), oo = function() {
}, Tr = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: oo,
    onWheelCapture: oo,
    onTouchMoveCapture: oo
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, u = e.shards, h = e.sideCar, g = e.noRelative, b = e.noIsolation, p = e.inert, v = e.allowPinchZoom, w = e.as, N = w === void 0 ? "div" : w, x = e.gapMode, y = fl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = h, E = Jg([n, t]), C = et(et({}, y), o);
  return m.createElement(
    m.Fragment,
    null,
    d && m.createElement(P, { sideCar: ml, removeScrollBar: c, shards: u, noRelative: g, noIsolation: b, inert: p, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: x }),
    a ? m.cloneElement(m.Children.only(s), et(et({}, C), { ref: E })) : m.createElement(N, et({}, C, { className: l, ref: E }), s)
  );
});
Tr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tr.classNames = {
  fullWidth: ar,
  zeroRight: sr
};
var rp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function op() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = rp();
  return t && e.setAttribute("nonce", t), e;
}
function ip(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function sp(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ap = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = op()) && (ip(t, n), sp(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, lp = function() {
  var e = ap();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, gl = function() {
  var e = lp(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, cp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, io = function(e) {
  return parseInt(e || "", 10) || 0;
}, up = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [io(n), io(r), io(o)];
}, dp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return cp;
  var t = up(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, fp = gl(), Xt = "data-scroll-locked", hp = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Yg, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Xt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(sr, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ar, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(sr, " .").concat(sr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ar, " .").concat(ar, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xt, `] {
    `).concat(Xg, ": ").concat(s, `px;
  }
`);
}, Ps = function() {
  var e = parseInt(document.body.getAttribute(Xt) || "0", 10);
  return isFinite(e) ? e : 0;
}, mp = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Xt, (Ps() + 1).toString()), function() {
      var e = Ps() - 1;
      e <= 0 ? document.body.removeAttribute(Xt) : document.body.setAttribute(Xt, e.toString());
    };
  }, []);
}, gp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  mp();
  var i = m.useMemo(function() {
    return dp(o);
  }, [o]);
  return m.createElement(fp, { styles: hp(i, !t, o, n ? "" : "!important") });
}, Co = !1;
if (typeof window < "u")
  try {
    var nr = Object.defineProperty({}, "passive", {
      get: function() {
        return Co = !0, !0;
      }
    });
    window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
  } catch {
    Co = !1;
  }
var jt = Co ? { passive: !1 } : !1, pp = function(e) {
  return e.tagName === "TEXTAREA";
}, pl = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pp(e) && n[t] === "visible")
  );
}, vp = function(e) {
  return pl(e, "overflowY");
}, bp = function(e) {
  return pl(e, "overflowX");
}, Es = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = vl(e, r);
    if (o) {
      var i = bl(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, yp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, wp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, vl = function(e, t) {
  return e === "v" ? vp(t) : bp(t);
}, bl = function(e, t) {
  return e === "v" ? yp(t) : wp(t);
}, xp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Cp = function(e, t, n, r, o) {
  var i = xp(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), c = !1, d = a > 0, u = 0, h = 0;
  do {
    if (!s)
      break;
    var g = bl(e, s), b = g[0], p = g[1], v = g[2], w = p - v - i * b;
    (b || w) && vl(e, s) && (u += w, h += b);
    var N = s.parentNode;
    s = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && Math.abs(u) < 1 || !d && Math.abs(h) < 1) && (c = !0), c;
}, rr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rs = function(e) {
  return [e.deltaX, e.deltaY];
}, Is = function(e) {
  return e && "current" in e ? e.current : e;
}, Sp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Np = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Pp = 0, Vt = [];
function Ep(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(Pp++)[0], i = m.useState(gl)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Ug([e.lockRef.current], (e.shards || []).map(Is), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = rr(p), N = n.current, x = "deltaX" in p ? p.deltaX : N[0] - w[0], y = "deltaY" in p ? p.deltaY : N[1] - w[1], P, E = p.target, C = Math.abs(x) > Math.abs(y) ? "h" : "v";
    if ("touches" in p && C === "h" && E.type === "range")
      return !1;
    var S = window.getSelection(), R = S && S.anchorNode, I = R ? R === E || R.contains(E) : !1;
    if (I)
      return !1;
    var k = Es(C, E);
    if (!k)
      return !0;
    if (k ? P = C : (P = C === "v" ? "h" : "v", k = Es(C, E)), !k)
      return !1;
    if (!r.current && "changedTouches" in p && (x || y) && (r.current = P), !P)
      return !0;
    var O = r.current || P;
    return Cp(O, v, p, O === "h" ? x : y);
  }, []), l = m.useCallback(function(p) {
    var v = p;
    if (!(!Vt.length || Vt[Vt.length - 1] !== i)) {
      var w = "deltaY" in v ? Rs(v) : rr(v), N = t.current.filter(function(P) {
        return P.name === v.type && (P.target === v.target || v.target === P.shadowParent) && Sp(P.delta, w);
      })[0];
      if (N && N.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!N) {
        var x = (a.current.shards || []).map(Is).filter(Boolean).filter(function(P) {
          return P.contains(v.target);
        }), y = x.length > 0 ? s(v, x[0]) : !a.current.noIsolation;
        y && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = m.useCallback(function(p, v, w, N) {
    var x = { name: p, delta: v, target: w, should: N, shadowParent: Rp(w) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== x;
      });
    }, 1);
  }, []), d = m.useCallback(function(p) {
    n.current = rr(p), r.current = void 0;
  }, []), u = m.useCallback(function(p) {
    c(p.type, Rs(p), p.target, s(p, e.lockRef.current));
  }, []), h = m.useCallback(function(p) {
    c(p.type, rr(p), p.target, s(p, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Vt.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, jt), document.addEventListener("touchmove", l, jt), document.addEventListener("touchstart", d, jt), function() {
      Vt = Vt.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", l, jt), document.removeEventListener("touchmove", l, jt), document.removeEventListener("touchstart", d, jt);
    };
  }, []);
  var g = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(i, { styles: Np(o) }) : null,
    g ? m.createElement(gp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Rp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ip = np(ml, Ep);
var Qo = m.forwardRef(function(e, t) {
  return m.createElement(Tr, et({}, e, { ref: t, sideCar: Ip }));
});
Qo.classNames = Tr.classNames;
var So = ["Enter", " "], Ap = ["ArrowDown", "PageUp", "Home"], yl = ["ArrowUp", "PageDown", "End"], kp = [...Ap, ...yl], Dp = {
  ltr: [...So, "ArrowRight"],
  rtl: [...So, "ArrowLeft"]
}, Mp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, On = "Menu", [Nn, Op, Tp] = zo(On), [Lt, wl] = ht(On, [
  Tp,
  Xa,
  il
]), _r = Xa(), xl = il(), [_p, Ft] = Lt(On), [Lp, Tn] = Lt(On), Cl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = _r(t), [l, c] = m.useState(null), d = m.useRef(!1), u = ut(i), h = Bo(o);
  return m.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f(Ng, { ...s, children: /* @__PURE__ */ f(
    _p,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ f(
        Lp,
        {
          scope: t,
          onClose: m.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Cl.displayName = On;
var Fp = "MenuAnchor", ei = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _r(n);
    return /* @__PURE__ */ f(Pg, { ...o, ...r, ref: t });
  }
);
ei.displayName = Fp;
var ti = "MenuPortal", [$p, Sl] = Lt(ti, {
  forceMount: void 0
}), Nl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Ft(ti, t);
  return /* @__PURE__ */ f($p, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Rt, { present: n || i.open, children: /* @__PURE__ */ f(Jo, { asChild: !0, container: o, children: r }) }) });
};
Nl.displayName = ti;
var He = "MenuContent", [zp, ni] = Lt(He), Pl = m.forwardRef(
  (e, t) => {
    const n = Sl(He, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ft(He, e.__scopeMenu), a = Tn(He, e.__scopeMenu);
    return /* @__PURE__ */ f(Nn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Rt, { present: r || i.open, children: /* @__PURE__ */ f(Nn.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ f(Bp, { ...o, ref: t }) : /* @__PURE__ */ f(Kp, { ...o, ref: t }) }) }) });
  }
), Bp = m.forwardRef(
  (e, t) => {
    const n = Ft(He, e.__scopeMenu), r = m.useRef(null), o = ve(t, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return dl(i);
    }, []), /* @__PURE__ */ f(
      ri,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Z(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Kp = m.forwardRef((e, t) => {
  const n = Ft(He, e.__scopeMenu);
  return /* @__PURE__ */ f(
    ri,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Wp = /* @__PURE__ */ Cn("MenuContent.ScrollLock"), ri = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: u,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: b,
      ...p
    } = e, v = Ft(He, n), w = Tn(He, n), N = _r(n), x = xl(n), y = Op(n), [P, E] = m.useState(null), C = m.useRef(null), S = ve(t, C, v.onContentChange), R = m.useRef(0), I = m.useRef(""), k = m.useRef(0), O = m.useRef(null), z = m.useRef("right"), F = m.useRef(0), K = b ? Qo : m.Fragment, M = b ? { as: Wp, allowPinchZoom: !0 } : void 0, T = (_) => {
      const L = I.current + _, G = y().filter((H) => !H.disabled), U = document.activeElement, ie = G.find((H) => H.ref.current === U)?.textValue, le = G.map((H) => H.textValue), ne = ev(le, L, ie), B = G.find((H) => H.textValue === ne)?.ref.current;
      (function H(ee) {
        I.current = ee, window.clearTimeout(R.current), ee !== "" && (R.current = window.setTimeout(() => H(""), 1e3));
      })(L), B && setTimeout(() => B.focus());
    };
    m.useEffect(() => () => window.clearTimeout(R.current), []), Ta();
    const $ = m.useCallback((_) => z.current === O.current?.side && nv(_, O.current?.area), []);
    return /* @__PURE__ */ f(
      zp,
      {
        scope: n,
        searchRef: I,
        onItemEnter: m.useCallback(
          (_) => {
            $(_) && _.preventDefault();
          },
          [$]
        ),
        onItemLeave: m.useCallback(
          (_) => {
            $(_) || (C.current?.focus(), E(null));
          },
          [$]
        ),
        onTriggerLeave: m.useCallback(
          (_) => {
            $(_) && _.preventDefault();
          },
          [$]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: m.useCallback((_) => {
          O.current = _;
        }, []),
        children: /* @__PURE__ */ f(K, { ...M, children: /* @__PURE__ */ f(
          Wo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Z(i, (_) => {
              _.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ f(
              Ko,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: u,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ f(
                  Wg,
                  {
                    asChild: !0,
                    ...x,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: Z(l, (_) => {
                      w.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      Eg,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Kl(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...N,
                        ...p,
                        ref: S,
                        style: { outline: "none", ...p.style },
                        onKeyDown: Z(p.onKeyDown, (_) => {
                          const G = _.target.closest("[data-radix-menu-content]") === _.currentTarget, U = _.ctrlKey || _.altKey || _.metaKey, ie = _.key.length === 1;
                          G && (_.key === "Tab" && _.preventDefault(), !U && ie && T(_.key));
                          const le = C.current;
                          if (_.target !== le || !kp.includes(_.key)) return;
                          _.preventDefault();
                          const B = y().filter((H) => !H.disabled).map((H) => H.ref.current);
                          yl.includes(_.key) && B.reverse(), Jp(B);
                        }),
                        onBlur: Z(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(R.current), I.current = "");
                        }),
                        onPointerMove: Z(
                          e.onPointerMove,
                          Pn((_) => {
                            const L = _.target, G = F.current !== _.clientX;
                            if (_.currentTarget.contains(L) && G) {
                              const U = _.clientX > F.current ? "right" : "left";
                              z.current = U, F.current = _.clientX;
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
Pl.displayName = He;
var jp = "MenuGroup", oi = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(be.div, { role: "group", ...r, ref: t });
  }
);
oi.displayName = jp;
var Vp = "MenuLabel", El = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(be.div, { ...r, ref: t });
  }
);
El.displayName = Vp;
var vr = "MenuItem", As = "menu.itemSelect", Lr = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = m.useRef(null), a = Tn(vr, e.__scopeMenu), s = ni(vr, e.__scopeMenu), l = ve(t, i), c = m.useRef(!1), d = () => {
      const u = i.current;
      if (!n && u) {
        const h = new CustomEvent(As, { bubbles: !0, cancelable: !0 });
        u.addEventListener(As, (g) => r?.(g), { once: !0 }), Da(u, h), h.defaultPrevented ? c.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ f(
      Rl,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: Z(e.onClick, d),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), c.current = !0;
        },
        onPointerUp: Z(e.onPointerUp, (u) => {
          c.current || u.currentTarget?.click();
        }),
        onKeyDown: Z(e.onKeyDown, (u) => {
          const h = s.searchRef.current !== "";
          n || h && u.key === " " || So.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Lr.displayName = vr;
var Rl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = ni(vr, n), s = xl(n), l = m.useRef(null), c = ve(t, l), [d, u] = m.useState(!1), [h, g] = m.useState("");
    return m.useEffect(() => {
      const b = l.current;
      b && g((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ f(
      Nn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ f(jg, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ f(
          be.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: Z(
              e.onPointerMove,
              Pn((b) => {
                r ? a.onItemLeave(b) : (a.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Z(
              e.onPointerLeave,
              Pn((b) => a.onItemLeave(b))
            ),
            onFocus: Z(e.onFocus, () => u(!0)),
            onBlur: Z(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Hp = "MenuCheckboxItem", Il = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f(Ol, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f(
      Lr,
      {
        role: "menuitemcheckbox",
        "aria-checked": br(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": si(n),
        onSelect: Z(
          o.onSelect,
          () => r?.(br(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Il.displayName = Hp;
var Al = "MenuRadioGroup", [Gp, Up] = Lt(
  Al,
  { value: void 0, onValueChange: () => {
  } }
), kl = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = ut(r);
    return /* @__PURE__ */ f(Gp, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ f(oi, { ...o, ref: t }) });
  }
);
kl.displayName = Al;
var Dl = "MenuRadioItem", Ml = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Up(Dl, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ f(Ol, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ f(
      Lr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": si(i),
        onSelect: Z(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ml.displayName = Dl;
var ii = "MenuItemIndicator", [Ol, Yp] = Lt(
  ii,
  { checked: !1 }
), Tl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = Yp(ii, n);
    return /* @__PURE__ */ f(
      Rt,
      {
        present: r || br(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ f(
          be.span,
          {
            ...o,
            ref: t,
            "data-state": si(i.checked)
          }
        )
      }
    );
  }
);
Tl.displayName = ii;
var Xp = "MenuSeparator", _l = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f(
      be.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
_l.displayName = Xp;
var qp = "MenuArrow", Ll = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = _r(n);
    return /* @__PURE__ */ f(Rg, { ...o, ...r, ref: t });
  }
);
Ll.displayName = qp;
var Zp = "MenuSub", [Y0, Fl] = Lt(Zp), bn = "MenuSubTrigger", $l = m.forwardRef(
  (e, t) => {
    const n = Ft(bn, e.__scopeMenu), r = Tn(bn, e.__scopeMenu), o = Fl(bn, e.__scopeMenu), i = ni(bn, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, d = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => d, [d]), m.useEffect(() => {
      const u = s.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [s, l]), /* @__PURE__ */ f(ei, { asChild: !0, ...c, children: /* @__PURE__ */ f(
      Rl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Kl(n.open),
        ...e,
        ref: An(t, o.onTriggerChange),
        onClick: (u) => {
          e.onClick?.(u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Z(
          e.onPointerMove,
          Pn((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: Z(
          e.onPointerLeave,
          Pn((u) => {
            d();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const g = n.content?.dataset.side, b = g === "right", p = b ? -5 : 5, v = h[b ? "left" : "right"], w = h[b ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + p, y: u.clientY },
                  { x: v, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x: v, y: h.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(u), u.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Z(e.onKeyDown, (u) => {
          const h = i.searchRef.current !== "";
          e.disabled || h && u.key === " " || Dp[r.dir].includes(u.key) && (n.onOpenChange(!0), n.content?.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
$l.displayName = bn;
var zl = "MenuSubContent", Bl = m.forwardRef(
  (e, t) => {
    const n = Sl(He, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ft(He, e.__scopeMenu), a = Tn(He, e.__scopeMenu), s = Fl(zl, e.__scopeMenu), l = m.useRef(null), c = ve(t, l);
    return /* @__PURE__ */ f(Nn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(Rt, { present: r || i.open, children: /* @__PURE__ */ f(Nn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f(
      ri,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          a.isUsingKeyboardRef.current && l.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: Z(e.onFocusOutside, (d) => {
          d.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: Z(e.onEscapeKeyDown, (d) => {
          a.onClose(), d.preventDefault();
        }),
        onKeyDown: Z(e.onKeyDown, (d) => {
          const u = d.currentTarget.contains(d.target), h = Mp[a.dir].includes(d.key);
          u && h && (i.onOpenChange(!1), s.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Bl.displayName = zl;
function Kl(e) {
  return e ? "open" : "closed";
}
function br(e) {
  return e === "indeterminate";
}
function si(e) {
  return br(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Jp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Qp(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function ev(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = Qp(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((c) => c !== n));
  const l = a.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function tv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], l = t[a], c = s.x, d = s.y, u = l.x, h = l.y;
    d > r != h > r && n < (u - c) * (r - d) / (h - d) + c && (o = !o);
  }
  return o;
}
function nv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return tv(n, t);
}
function Pn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var rv = Cl, ov = ei, iv = Nl, sv = Pl, av = oi, lv = El, cv = Lr, uv = Il, dv = kl, fv = Ml, hv = Tl, mv = _l, gv = Ll, pv = $l, vv = Bl, Fr = "DropdownMenu", [bv] = ht(
  Fr,
  [wl]
), Te = wl(), [yv, Wl] = bv(Fr), jl = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, l = Te(t), c = m.useRef(null), [d, u] = kn({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Fr
  });
  return /* @__PURE__ */ f(
    yv,
    {
      scope: t,
      triggerId: Ut(),
      triggerRef: c,
      contentId: Ut(),
      open: d,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((h) => !h), [u]),
      modal: s,
      children: /* @__PURE__ */ f(rv, { ...l, open: d, onOpenChange: u, dir: r, modal: s, children: n })
    }
  );
};
jl.displayName = Fr;
var Vl = "DropdownMenuTrigger", Hl = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Wl(Vl, n), a = Te(n);
    return /* @__PURE__ */ f(ov, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      be.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: An(t, i.triggerRef),
        onPointerDown: Z(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: Z(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Hl.displayName = Vl;
var wv = "DropdownMenuPortal", Gl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Te(t);
  return /* @__PURE__ */ f(iv, { ...r, ...n });
};
Gl.displayName = wv;
var Ul = "DropdownMenuContent", Yl = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Wl(Ul, n), i = Te(n), a = m.useRef(!1);
    return /* @__PURE__ */ f(
      sv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: Z(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!o.modal || d) && (a.current = !0);
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
Yl.displayName = Ul;
var xv = "DropdownMenuGroup", Cv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ f(av, { ...o, ...r, ref: t });
  }
);
Cv.displayName = xv;
var Sv = "DropdownMenuLabel", Xl = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ f(lv, { ...o, ...r, ref: t });
  }
);
Xl.displayName = Sv;
var Nv = "DropdownMenuItem", ql = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ f(cv, { ...o, ...r, ref: t });
  }
);
ql.displayName = Nv;
var Pv = "DropdownMenuCheckboxItem", Zl = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(uv, { ...o, ...r, ref: t });
});
Zl.displayName = Pv;
var Ev = "DropdownMenuRadioGroup", Jl = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(dv, { ...o, ...r, ref: t });
});
Jl.displayName = Ev;
var Rv = "DropdownMenuRadioItem", Ql = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(fv, { ...o, ...r, ref: t });
});
Ql.displayName = Rv;
var Iv = "DropdownMenuItemIndicator", Av = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(hv, { ...o, ...r, ref: t });
});
Av.displayName = Iv;
var kv = "DropdownMenuSeparator", ec = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(mv, { ...o, ...r, ref: t });
});
ec.displayName = kv;
var Dv = "DropdownMenuArrow", Mv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
    return /* @__PURE__ */ f(gv, { ...o, ...r, ref: t });
  }
);
Mv.displayName = Dv;
var Ov = "DropdownMenuSubTrigger", tc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(pv, { ...o, ...r, ref: t });
});
tc.displayName = Ov;
var Tv = "DropdownMenuSubContent", nc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Te(n);
  return /* @__PURE__ */ f(
    vv,
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
nc.displayName = Tv;
var _v = jl, Lv = Hl, Fv = Gl, rc = Yl, oc = Xl, ic = ql, sc = Zl, $v = Jl, ac = Ql, lc = ec, cc = tc, uc = nc;
const _n = _v, Ln = Lv, zv = $v, Bv = m.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f(
  cc,
  {
    ref: o,
    className: se(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100",
      t && "pl-8",
      e
    ),
    ...r,
    children: n
  }
));
Bv.displayName = cc.displayName;
const Kv = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  uc,
  {
    ref: n,
    className: se(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Kv.displayName = uc.displayName;
const rn = m.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => {
  const { portalContainer: o } = Lo();
  return /* @__PURE__ */ f(Fv, { container: o || void 0, children: /* @__PURE__ */ f(
    rc,
    {
      ref: r,
      sideOffset: t,
      "data-uhuu-editor": !0,
      className: se(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) });
});
rn.displayName = rc.displayName;
const Ve = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  ic,
  {
    ref: r,
    className: se(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ve.displayName = ic.displayName;
const Wv = m.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f(
  sc,
  {
    ref: o,
    className: se(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: t
  }
));
Wv.displayName = sc.displayName;
const dc = m.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
  ac,
  {
    ref: r,
    className: se(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: t
  }
));
dc.displayName = ac.displayName;
const No = m.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f(
  oc,
  {
    ref: r,
    className: se(
      "px-2 py-1.5 text-sm font-medium",
      t && "pl-8",
      e
    ),
    ...n
  }
));
No.displayName = oc.displayName;
const qt = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  lc,
  {
    ref: n,
    className: se("-mx-1 my-1 h-px bg-gray-200", e),
    ...t
  }
));
qt.displayName = lc.displayName;
const jv = (e, t) => {
  if (e.stopPropagation(), t.onSelect) {
    t.onSelect(e);
    return;
  }
  t.dialog && typeof window < "u" && window.$uhuu?.editDialog?.(t.dialog);
}, ai = (e, t) => {
  if (!e) return null;
  const n = e.trim();
  if (n.startsWith("<")) {
    const o = n.replace(/<svg\b([^>]*)>/i, (i, a) => {
      let s = a;
      return /\bwidth=/.test(s) ? s = s.replace(/\bwidth=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'width="100%"') : s += ' width="100%"', /\bheight=/.test(s) ? s = s.replace(/\bheight=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i, 'height="100%"') : s += ' height="100%"', /\bpreserveAspectRatio=/.test(s) ? s = s.replace(
        /\bpreserveAspectRatio=(\"[^\"]*\"|'[^']*'|[^\s>]+)/i,
        'preserveAspectRatio="xMidYMid slice"'
      ) : s += ' preserveAspectRatio="xMidYMid slice"', `<svg${s}>`;
    });
    return /* @__PURE__ */ f(
      "div",
      {
        className: se("pointer-events-none absolute inset-0 z-10", t),
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
      className: se(
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover",
        t
      )
    }
  );
}, li = (e, t) => t ? /* @__PURE__ */ f("div", { className: "absolute right-2 top-2 z-20", children: /* @__PURE__ */ D(_n, { modal: !1, children: [
  /* @__PURE__ */ f(Ln, { asChild: !0, children: /* @__PURE__ */ f(
    ke,
    {
      variant: "secondary",
      size: "icon",
      title: "Image options",
      className: "h-7 w-7 shadow-sm",
      onPointerDown: (n) => n.stopPropagation(),
      onClick: (n) => n.stopPropagation(),
      children: /* @__PURE__ */ f(Na, { className: "h-4 w-4" })
    }
  ) }),
  /* @__PURE__ */ f(rn, { className: "w-40 p-1.5", align: "end", children: e.map((n) => /* @__PURE__ */ D(
    Ve,
    {
      onSelect: (r) => jv(r, n),
      disabled: n.disabled,
      children: [
        n.icon && /* @__PURE__ */ f("span", { className: "mr-2 inline-flex", children: n.icon }),
        /* @__PURE__ */ f("span", { children: n.label })
      ]
    },
    n.id
  )) })
] }) }) : null, ci = (e = []) => {
  const t = $o();
  return e.length > 0 && !t;
}, Vv = ({
  className: e,
  style: t,
  overlaySvg: n,
  overlayClassName: r,
  options: o = [],
  dialog: i,
  dialogProps: a,
  bleedProps: s,
  children: l
}) => {
  const c = xe(Tt), d = ci(o), u = i ? en({ dialog: i }, c) : {};
  return m.useMemo(() => {
    if (!a) return u;
    const h = { ...u, ...a };
    return (u.className || a.className) && (h.className = `${u.className || ""} ${a.className || ""}`.trim()), Object.keys(u).forEach((g) => {
      const b = u[g], p = a[g];
      g.startsWith("on") && typeof b == "function" && typeof p == "function" && (h[g] = (v) => {
        b(v), p(v);
      });
    }), h;
  }, [u, a]), /* @__PURE__ */ D(Fe, { children: [
    /* @__PURE__ */ D(_o, { ...s, dialog: i, children: [
      ai(n, r),
      l
    ] }),
    li(o, d)
  ] });
};
function ui(e) {
  const t = xe(Tt), n = To({
    onError: e.onError
  }), r = e.bleed ?? t?.page?.bleed ?? 0, o = e.pageWidth ?? t?.page?.width ?? 210, i = e.pageHeight ?? t?.page?.height ?? 297, {
    src: a,
    imageClassName: s,
    side: l,
    backgroundColor: c,
    width: d,
    height: u,
    left: h = 0,
    right: g = 0,
    top: b = 0,
    bottom: p = 0
  } = e, v = (F) => `${F}mm`, w = () => {
    let F = d;
    return d ? !h && !g && (F += r) : (F = 2 * o, h || (F += 2 * r), g || (F += 2 * r), (h || g) && (F -= (h ?? 0) + (g ?? 0))), F;
  }, N = () => {
    let F = u;
    return u ? !b && !p && (F += r) : (F = i, b || (F += r), p || (F += r), (b || p) && (F -= (b ?? 0) + (p ?? 0))), F;
  }, x = w(), y = N(), P = (F) => F !== void 0 ? v(F) : void 0, E = (F) => Object.fromEntries(
    Object.entries(F).filter(([K, M]) => M !== void 0)
  ), C = h > 0 ? h + r : 0, S = b > 0 ? b + r : 0, R = p > 0 ? p + r : 0, I = -1 * o + C, k = b > 0 && p > 0, O = E({
    backgroundColor: c,
    width: P(x),
    ...k ? { height: P(y) } : {},
    left: P(C),
    top: P(S),
    bottom: P(R)
  }), z = E({
    width: P(x),
    ...k ? { height: P(y) } : {},
    left: P(I),
    top: P(S),
    bottom: P(R)
  });
  return /* @__PURE__ */ f("div", { className: "uhuu-image-container", style: l == "end" ? z : O, ...e.dataUhuu !== void 0 ? { "data-uhuu": e.dataUhuu } : {}, children: /* @__PURE__ */ D("div", { className: "uhuu-image-inner", ...en(e, t), children: [
    /* @__PURE__ */ f(
      "img",
      {
        className: se("cover-image object-cover object-center", s),
        src: a || null,
        onError: n
      }
    ),
    e.children
  ] }) });
}
const Hv = ({
  overlaySvg: e,
  overlayClassName: t,
  options: n = [],
  dialog: r,
  spreadProps: o,
  children: i
}) => {
  const a = ci(n);
  return /* @__PURE__ */ D(Fe, { children: [
    /* @__PURE__ */ D(ui, { ...o, dialog: r, children: [
      ai(e, t),
      i
    ] }),
    li(n, a)
  ] });
}, Gv = ({
  src: e,
  alt: t = "",
  className: n,
  imageClassName: r,
  style: o,
  imageStyle: i,
  overlaySvg: a,
  overlayClassName: s,
  options: l = [],
  dialog: c,
  dialogProps: d,
  placeholder: u,
  children: h,
  imageProps: g,
  renderImage: b,
  onError: p
}) => {
  const v = xe(Tt), w = c ? en({ dialog: c }, v) : {}, N = ci(l), x = To({
    onError: (I) => {
      p?.(I), g?.onError?.(I);
    }
  }), y = m.useMemo(() => {
    if (!d) return w;
    const I = { ...w, ...d };
    return (w.className || d.className) && (I.className = se(w.className, d.className)), Object.keys(w).forEach((k) => {
      const O = w[k], z = d[k];
      k.startsWith("on") && typeof O == "function" && typeof z == "function" && (I[k] = (F) => {
        O(F), z(F);
      });
    }), I;
  }, [w, d]), P = () => {
    const I = g?.className, k = g?.style, O = g?.src ?? e, z = g?.alt ?? t, F = {
      ...g,
      src: O,
      alt: z,
      className: se("h-full w-full object-cover", r, I),
      style: { ...i, ...k }
    };
    return b ? b(F) : O ? /* @__PURE__ */ f("img", { ...F, onError: x }) : u ?? null;
  }, E = y["data-uhuu"], C = m.Children.toArray(h).some((I) => m.isValidElement(I) ? I.type === ui || I.type === _o : !1);
  C && delete y["data-uhuu"];
  const S = m.Children.map(h, (I) => m.isValidElement(I) ? m.cloneElement(I, { dataUhuu: E }) : I);
  return /* @__PURE__ */ D("div", { className: se(C ? "relative h-full w-full" : "relative", n), style: o, children: [
    /* @__PURE__ */ D("div", { className: "relative h-full w-full", ...y, children: [
      P(),
      S,
      ai(a, s)
    ] }),
    li(l, N)
  ] });
}, X0 = (e) => {
  const { computedOverlaySvg: t, computedOptions: n, computedDirectDialog: r } = Y(() => {
    const { annotation: M, dialog: T, overlaySvg: $, options: _, src: L } = e;
    if (!M && !T)
      return {
        computedOverlaySvg: $,
        computedOptions: _,
        computedDirectDialog: void 0
      };
    const G = M?.value || {}, U = $ ?? G.annotationSvg ?? "", ie = [];
    if (M) {
      if (T) {
        const ce = {
          ...T
          // Spread everything (path, type, ratio, etc.)
        };
        if (T.type === "satellite") {
          const { path: he, type: pe, ...Re } = T;
          ce.config = {
            ...Re,
            path: "image"
          }, ce.path = he, ce.type = pe;
        }
        ie.push({
          id: "edit",
          label: "Edit image",
          dialog: ce
        });
      }
      const B = Array.isArray(G.annotations) ? G.annotations : [], { path: H, value: ee, annotations: J, ...X } = M, oe = {
        path: M.path,
        type: "annotation",
        image: L,
        annotations: B,
        ...X
        // Spread extra config (visualGallery, etc.)
      };
      ie.push({
        id: "annotate",
        label: "Annotate",
        dialog: oe
      });
    }
    const le = _ ? [...ie, ..._] : ie;
    let ne;
    if (T) {
      const B = {
        ...T
        // Spread everything (path, type, ratio, etc.)
      };
      if (T.type === "satellite") {
        const { path: H, type: ee, ...J } = T;
        B.config = {
          ...J,
          path: "image"
        }, B.path = H, B.type = ee;
      }
      ne = B;
    }
    return {
      computedOverlaySvg: U,
      computedOptions: le.length > 0 ? le : void 0,
      computedDirectDialog: ne
    };
  }, [e.annotation, e.dialog, e.overlaySvg, e.options, e.src]), o = Y(() => e.mode ? e.mode : e.side !== void 0 ? "spread" : e.width !== void 0 || e.height !== void 0 || e.left !== void 0 || e.right !== void 0 || e.top !== void 0 || e.bottom !== void 0 ? "bleed" : "auto", [e.mode, e.side, e.width, e.height, e.left, e.right, e.top, e.bottom]), i = o === "auto" || // Auto mode always uses ImageWithOptions
  n && n.length > 0 || t || r || // Need wrapper for click-to-edit
  e.renderImage !== void 0 || e.placeholder !== void 0 || e.children !== void 0, {
    mode: a,
    side: s,
    src: l,
    alt: c,
    className: d,
    imageClassName: u,
    style: h,
    imageStyle: g,
    backgroundColor: b,
    width: p,
    height: v,
    left: w,
    right: N,
    top: x,
    bottom: y,
    pageWidth: P,
    pageHeight: E,
    bleed: C,
    overlayClassName: S,
    dialogProps: R,
    placeholder: I,
    children: k,
    imageProps: O,
    renderImage: z,
    onError: F
  } = e, K = {
    src: l,
    backgroundColor: b,
    width: p,
    height: v,
    left: w,
    right: N,
    top: x,
    bottom: y,
    pageWidth: P,
    pageHeight: E,
    bleed: C,
    imageClassName: u,
    onError: F
  };
  if (o === "auto")
    return /* @__PURE__ */ f(
      Gv,
      {
        src: l,
        alt: c,
        className: d,
        style: h,
        imageClassName: u,
        imageStyle: g,
        overlaySvg: t,
        overlayClassName: S,
        options: n,
        dialog: r,
        dialogProps: R,
        placeholder: I,
        children: k,
        imageProps: O,
        renderImage: z,
        onError: F
      }
    );
  if (o === "spread") {
    const M = { ...K, side: s, imageClassName: u };
    return i && (t || n?.length || r) ? /* @__PURE__ */ f(
      Hv,
      {
        className: d,
        style: h,
        overlaySvg: t,
        overlayClassName: S,
        options: n,
        dialog: r,
        dialogProps: R,
        spreadProps: M,
        children: k
      }
    ) : /* @__PURE__ */ f(ui, { ...M });
  }
  return i && (t || n?.length || r) ? /* @__PURE__ */ f(
    Vv,
    {
      className: d,
      style: h,
      overlaySvg: t,
      overlayClassName: S,
      options: n,
      dialog: r,
      dialogProps: R,
      bleedProps: K,
      children: k
    }
  ) : /* @__PURE__ */ f(_o, { ...K });
}, $t = "uhuu_page_editor";
function Le(e) {
  return e.kind === "group";
}
function Uv(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Le(r))
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
function Yv(e) {
  const t = [];
  let n = 1;
  for (const r of e)
    if (Le(r)) {
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
function ct(e) {
  return Uv(e).length;
}
function Xv(e) {
  return e.map((t) => {
    const n = t.strictPosition;
    if (Le(t)) {
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
function qv(e, t) {
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
function di(e) {
  return e.map((t) => {
    if ("kind" in t && t.kind)
      return t;
    if (t.pages && Array.isArray(t.pages))
      return {
        kind: "group",
        ...t,
        pages: (t.pages ?? []).map((i) => {
          const { kind: a, ...s } = i || {};
          return {
            kind: "page",
            ...s
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
function fc(e, t = $t) {
  const n = di(e);
  return {
    key: t,
    items: n,
    totalPages: ct(n),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Zv(e, t = $t) {
  const n = e?.[t];
  if (!n?.items) return null;
  const r = di(n.items);
  return {
    key: t,
    items: r,
    totalPages: ct(r),
    updatedAt: n.updatedAt || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function Jv(e, t, n = $t) {
  const r = fc(t, n);
  return { ...e ?? {}, [n]: r };
}
function hc() {
  return Math.random().toString(36).slice(2, 11);
}
function mc(e, t, n) {
  return {
    kind: "page",
    id: n?.repeatable ? hc() : e,
    componentKey: t,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable,
    maxInstances: n?.maxInstances,
    ...n
  };
}
function gc(e, t, n) {
  const r = n?.repeatable ? hc() : e;
  return {
    kind: "group",
    id: r,
    templateId: e,
    label: n?.label,
    repeatable: n?.repeatable ?? !1,
    maxInstances: n?.maxInstances ?? null,
    pages: t.map((o, i) => {
      const a = typeof o == "string" ? o : o.key, s = typeof o == "string" ? void 0 : o.dataKey, l = typeof o == "string" ? void 0 : o.hasFlow;
      return {
        id: `${r}__${s ?? a}__${i}`,
        componentKey: a,
        templateId: a,
        ...s ? { dataKey: s } : {},
        ...l ? { hasFlow: l } : {}
      };
    }),
    ...n
  };
}
function ks(e, t) {
  return e < 0 ? t + e + 1 : e;
}
function Po(e, t, n) {
  for (const r of t) {
    const o = ks(r.start, n), i = ks(r.end, n);
    if (e >= o && e <= i)
      return !0;
  }
  return !1;
}
function pc(e, t, n = 2) {
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
function Qv(e, t) {
  if (!t || t.mode === "all")
    return e;
  const n = ct(e), r = t.mode ?? "all", o = t.coverPageCount ?? 2, i = r === "custom" && t.ranges ? t.ranges : pc(r, n, o);
  if (i.length === 0)
    return [];
  const a = [];
  for (const s of e)
    if (Le(s)) {
      const l = s.pages.filter((c) => c.pageNum && Po(c.pageNum, i, n));
      l.length > 0 && a.push({
        ...s,
        pages: l
      });
    } else
      s.pageNum && Po(s.pageNum, i, n) && a.push(s);
  return a;
}
function eb(e, t, n) {
  if (!n || n.mode === "all") return !0;
  const r = n.mode ?? "all", o = n.coverPageCount ?? 2, i = r === "custom" && n.ranges ? n.ranges : pc(r, t, o);
  return i.length === 0 ? !1 : Po(e, i, t);
}
function vc(e, t) {
  if (e?.integrations)
    return e.integrations[t];
}
function tb(e, t) {
  return t && Le(t) ? t.id : e?.id ?? null;
}
function bc(e, t, n) {
  const r = tb(t, n);
  return r ? {
    instanceId: r,
    integration: vc(e, r)
  } : { instanceId: null, integration: void 0 };
}
function yc(e, t, n) {
  return bc(e, t, n).integration;
}
function Ds(e, t) {
  if (!e) return null;
  const n = `integrations.${e}`;
  return t ? `${n}.${t}` : n;
}
function nb(e) {
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
function rb(e, t, n) {
  if (!t) return n;
  const r = t.split("."), o = { ...e };
  let i = o;
  for (let s = 0; s < r.length - 1; s++) {
    const l = r[s];
    !(l in i) || typeof i[l] != "object" || i[l] === null ? i[l] = {} : i[l] = { ...i[l] }, i = i[l];
  }
  const a = r[r.length - 1];
  return i[a] = n, o;
}
function ob(e, t, n) {
  const r = nb(t);
  if (!r.isIntegrationPath || !r.instanceId)
    return e;
  const { instanceId: o, fieldPath: i } = r, a = vc(e, o) || {}, s = rb(
    a,
    i,
    n
  );
  return {
    ...e,
    integrations: {
      ...e?.integrations || {},
      [o]: s
    }
  };
}
function yr(e, t) {
  if (!e || !t) return;
  const n = typeof t == "string" ? t : t?.id, r = typeof t == "string" ? void 0 : t?.templateId ?? t?.componentKey, o = typeof t == "string" ? void 0 : t?.componentKey, i = Array.from(
    new Set(
      [n, r, o].filter(Boolean)
    )
  );
  for (const a of i)
    if (e?.pages?.[a] !== void 0) return e.pages[a];
  for (const a of i)
    if (e?.groups?.[a] !== void 0) return e.groups[a];
  for (const a of i)
    if (e[a] !== void 0) return e[a];
}
const Fn = m.createContext(null);
function ib(e = $t) {
  return [e];
}
function sb(e, t, n) {
  if (!t) return e;
  if (!e) return t;
  const r = { ...t };
  return n.forEach((o) => {
    e[o] !== void 0 && (r[o] = e[o]);
  }), r;
}
function wc({
  payload: e,
  onPayloadChange: t,
  children: n,
  stateKey: r = $t
}) {
  const [o, i] = m.useState(e ?? {}), a = m.useRef(null), s = m.useRef(!1), l = m.useRef(null), c = m.useRef(0), d = m.useRef(!0), u = m.useCallback((S) => {
    try {
      return JSON.stringify(S);
    } catch {
      return String(S);
    }
  }, []), h = m.useMemo(() => ib(r), [r]), g = m.useCallback((S, R) => {
    if (!S) return null;
    const I = { ...S };
    return R.forEach((k) => {
      delete I[k];
    }), I;
  }, []);
  m.useEffect(() => {
    if (d.current) {
      d.current = !1, e && (a.current = e, i(e));
      return;
    }
    if (s.current) {
      s.current = !1;
      const I = l.current !== null ? u(g(l.current, h)) : null, k = u(g(e, h));
      if (I !== null && I === k) {
        a.current = e;
        return;
      }
    }
    if (e === a.current)
      return;
    if (Date.now() - c.current < 500 && l.current !== null) {
      const I = g(e, h), k = g(l.current, h), O = I ? u(I) : null, z = k ? u(k) : null;
      if (O && O === z) {
        l.current = null, a.current = e;
        return;
      }
    }
    a.current = e, i((I) => e ? sb(I, e, h) : I);
  }, [e, h, u, g]);
  const b = m.useCallback(
    (S) => {
      if (t?.(S), typeof window > "u") return;
      const R = window.$uhuu;
      R?.emitPayload && R.emitPayload(S);
    },
    [t]
  ), p = m.useCallback(
    (S) => {
      s.current = !0, i((R) => {
        const I = typeof S == "function" ? S(R) : S;
        let k = I;
        return I && typeof I == "object" && Object.keys(I).filter(
          (z) => z.startsWith("integrations.") || z === "integrations"
        ).length > 0 && I.integrations && (k = I), l.current = k, c.current = Date.now(), queueMicrotask(() => b(k)), k;
      });
    },
    [b]
  ), v = m.useCallback(
    (S, R, I) => {
      p((k) => ({
        ...k ?? {},
        pages: {
          ...k?.pages ?? {},
          [S]: {
            ...k?.pages?.[S] ?? {},
            [R]: I
          }
        }
      }));
    },
    [p]
  ), w = m.useCallback(
    (S, R) => {
      p((I) => {
        const k = I?.integrations ?? {}, O = k[S], z = typeof R == "function" ? R(O) : R;
        return {
          ...I ?? {},
          integrations: {
            ...k,
            [S]: z
          }
        };
      });
    },
    [p]
  ), N = m.useCallback(
    (S, R, I) => {
      w(S, (k) => ({
        ...k ?? {},
        [R]: I
      }));
    },
    [w]
  ), x = m.useCallback(
    (S) => {
      p((R) => {
        if (!R?.integrations || !R.integrations[S])
          return R;
        const { [S]: I, ...k } = R.integrations;
        return {
          ...R,
          integrations: Object.keys(k).length > 0 ? k : void 0
        };
      });
    },
    [p]
  ), y = m.useCallback(
    (S, R) => {
      p((I) => ob(I, S, R));
    },
    [p]
  ), P = m.useCallback(
    (S, R) => {
      const I = R ?? r;
      p((k) => Jv(k, S, I));
    },
    [p, r]
  ), E = m.useCallback(
    (S) => yr(o, S),
    [o]
  ), C = m.useMemo(
    () => ({
      payload: o,
      setPayload: p,
      setPageOptionValue: v,
      setIntegrationPayload: w,
      setIntegrationPayloadValue: N,
      removeIntegrationPayload: x,
      updateIntegrationByDialogPath: y,
      mergePageEditorState: P,
      getPagePayload: E
    }),
    [
      o,
      p,
      v,
      w,
      N,
      x,
      y,
      P,
      E
    ]
  );
  return /* @__PURE__ */ f(Fn.Provider, { value: C, children: n });
}
function ab(e) {
  return e.defaultValue !== void 0 ? e.defaultValue : e.type === "toggle" ? !1 : e.type === "slider" || e.type === "counter" ? 0 : "";
}
function lb(e, t) {
  return e.type === "toggle" ? t === !0 || t === "true" : e.type === "slider" || e.type === "counter" ? Number(t) : t;
}
function cb(e, t, n) {
  const r = e.field ?? e.id;
  return {
    ...e,
    getValue: (i) => {
      const a = t?.pages?.[i.id]?.[r];
      return a === void 0 ? ab(e) : e.type === "toggle" ? !!a : a;
    },
    onChange: (i, a) => {
      n(i, r, lb(e, a));
    }
  };
}
const wr = Pt({ zoom: 100, scaleValue: 1, hideUI: !1 });
function ub({ children: e, layout: t = "spread", pageItemId: n }) {
  const { scaleValue: r } = xe(wr), o = de(null);
  return ue(() => {
    if (!o.current) return;
    const i = () => {
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
    i();
    const a = new ResizeObserver(i);
    return o.current.querySelectorAll("[data-section-content]").forEach((l) => a.observe(l)), () => a.disconnect();
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
function so({ children: e, title: t, className: n = "", controls: r, origin: o = "center" }) {
  const { scaleValue: i, hideUI: a } = xe(wr), s = de(null), [l, c] = te(0), [d, u] = te(0);
  ue(() => {
    if (s.current) {
      const w = () => {
        const x = s.current;
        if (x) {
          const y = x.style.transform;
          x.style.transform = "scale(1)";
          const P = x.scrollHeight, E = x.scrollWidth;
          x.style.transform = y, c(P), u(E);
        }
      };
      w();
      const N = new ResizeObserver(w);
      return N.observe(s.current), () => {
        N.disconnect();
      };
    }
  }, [e]);
  const h = l * i, g = Math.max(d * i, 150), b = {
    left: { justify: "justify-start", origin: "top left" },
    right: { justify: "justify-end", origin: "top right" },
    center: { justify: "justify-center", origin: "top center" }
  }, { justify: p, origin: v } = b[o];
  return a ? /* @__PURE__ */ f("div", { className: n, children: e }) : /* @__PURE__ */ D(
    "div",
    {
      className: `group/section ${n}`,
      style: {
        width: `${g}px`,
        minWidth: "150px"
      },
      children: [
        /* @__PURE__ */ f("div", { children: r ?? /* @__PURE__ */ f("div", { className: "px-4 py-2 border-b border-gray-200", children: /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
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
            children: /* @__PURE__ */ f("div", { className: `flex items-start ${p}`, children: /* @__PURE__ */ f(
              "div",
              {
                ref: s,
                "data-section-content": !0,
                "data-natural-width": d,
                "data-natural-height": l,
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
function db({
  children: e,
  className: t = "",
  defaultZoom: n = 100,
  minZoom: r = 25,
  maxZoom: o = 200,
  onAddPage: i,
  menuItems: a,
  hideUI: s,
  preview: l = "single_page"
}) {
  const c = $o(), d = s ?? c, [u, h] = te(n), [g, b] = te("none"), p = de(null), v = de(null), [w, N] = te(!1), [x, y] = te(0), [P, E] = te(!0), C = (O) => {
    if (!p.current || !v.current) return u;
    const z = p.current.getBoundingClientRect(), F = v.current.querySelector("[data-section-content]");
    if (!F) return u;
    let K = Number.parseInt(F.getAttribute("data-natural-width") || "0");
    const M = Number.parseInt(F.getAttribute("data-natural-height") || "0");
    if (K === 0 || M === 0) return u;
    l === "two_pages" && (K = K * 2);
    const T = z.width - 32, $ = screen.height - 120, _ = T / K * 100, L = $ / M * 100;
    switch (O) {
      case "width":
        return Math.min(Math.max(_, r), o);
      case "height":
        return Math.min(Math.max(L, r), o);
      case "both":
        return Math.min(Math.max(Math.min(_, L), r), o);
      default:
        return u;
    }
  }, S = (O) => {
    if (b(O), O !== "none") {
      const z = C(O);
      h(z);
    }
  }, R = () => {
    const O = Math.min(u + 25, o);
    h(O), b("none");
  }, I = () => {
    const O = Math.max(u - 25, r);
    h(O), b("none");
  };
  ue(() => {
    const O = () => {
      if (!p.current || !v.current) return;
      const K = p.current.getBoundingClientRect().width;
      if (!w) {
        const M = v.current.querySelector("[data-section-content]");
        if (M) {
          const T = Number.parseInt(M.getAttribute("data-natural-width") || "0");
          if (T > 0) {
            if (T > K - 48) {
              const $ = C("both");
              b("both"), h($);
            }
            N(!0), y(K), E(!1);
            return;
          }
        }
        if (P) {
          setTimeout(O, 50);
          return;
        }
      }
      E(!1);
    }, z = () => {
      if (!p.current || P) return;
      const K = p.current.getBoundingClientRect().width;
      if (Math.abs(K - x) > 10) {
        if (g !== "none") {
          const M = C(g);
          h(M);
        }
        y(K);
      }
    };
    return O(), window.addEventListener("resize", z), () => {
      window.removeEventListener("resize", z);
    };
  }, [g, r, o, w, x, P]);
  const k = u / 100;
  return d ? /* @__PURE__ */ f(wr.Provider, { value: { zoom: 100, scaleValue: 1, hideUI: !0 }, children: /* @__PURE__ */ f("div", { className: t, children: e }) }) : /* @__PURE__ */ f(wr.Provider, { value: { zoom: u, scaleValue: k, hideUI: !1 }, children: /* @__PURE__ */ D("div", { ref: p, className: `flex flex-col min-h-0 ${t}`, children: [
    /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "fixed right-4 bottom-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-lg shadow-sm", children: [
      a,
      /* @__PURE__ */ f("div", { className: "h-4 w-px bg-gray-200 mx-0.5" }),
      /* @__PURE__ */ D(_n, { modal: !1, children: [
        /* @__PURE__ */ f(Ln, { asChild: !0, children: /* @__PURE__ */ D(ke, { variant: "ghost", size: "sm", title: "Zoom", className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5", children: [
          Math.round(u),
          "%",
          /* @__PURE__ */ f(Sa, { className: "w-3 h-3 ml-1 opacity-60" })
        ] }) }),
        /* @__PURE__ */ D(rn, { className: "w-52 p-1.5", align: "end", children: [
          /* @__PURE__ */ D(
            Ve,
            {
              onClick: () => S("width"),
              className: `cursor-pointer flex items-center ${g === "width" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(yh, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Width" })
              ]
            }
          ),
          /* @__PURE__ */ D(
            Ve,
            {
              onClick: () => S("height"),
              className: `cursor-pointer flex items-center ${g === "height" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(xh, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Height" })
              ]
            }
          ),
          /* @__PURE__ */ D(
            Ve,
            {
              onClick: () => S("both"),
              className: `cursor-pointer flex items-center ${g === "both" ? "bg-gray-100" : ""}`,
              children: [
                /* @__PURE__ */ f(lh, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ f("span", { children: "Fit to Page" })
              ]
            }
          ),
          /* @__PURE__ */ f(qt, { className: "my-1.5" }),
          /* @__PURE__ */ D("div", { className: "flex items-center justify-center gap-2 px-3 py-2.5", onClick: (O) => O.stopPropagation(), children: [
            /* @__PURE__ */ f(
              ke,
              {
                variant: "ghost",
                size: "sm",
                onClick: (O) => {
                  O.stopPropagation(), I();
                },
                disabled: u <= r,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom out (25%)",
                children: /* @__PURE__ */ f(Eh, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ D("div", { className: "relative", children: [
              /* @__PURE__ */ f(
                "input",
                {
                  type: "number",
                  value: Math.round(u),
                  onChange: (O) => {
                    const z = Number.parseInt(O.target.value);
                    if (!isNaN(z)) {
                      const F = Math.min(Math.max(z, r), o);
                      h(F), b("none");
                    }
                  },
                  onFocus: (O) => O.target.select(),
                  className: "w-20 pr-6 text-center text-sm text-gray-700 bg-white border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                  min: r,
                  max: o
                }
              ),
              /* @__PURE__ */ f("span", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none", children: "%" })
            ] }),
            /* @__PURE__ */ f(
              ke,
              {
                variant: "ghost",
                size: "sm",
                onClick: (O) => {
                  O.stopPropagation(), R();
                },
                disabled: u >= o,
                className: "h-8 w-8 p-0 hover:bg-gray-100 disabled:opacity-40",
                title: "Zoom in (25%)",
                children: /* @__PURE__ */ f(Nh, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f("div", { ref: v, children: /* @__PURE__ */ f("div", { className: l === "two_pages" ? "group_two_pages" : "flex flex-col items-center", children: e }) }),
    /* @__PURE__ */ f("div", { className: "pb-16" })
  ] }) });
}
var $r = "Dialog", [xc, Cc] = ht($r), [fb, Je] = xc($r), Sc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = m.useRef(null), l = m.useRef(null), [c, d] = kn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: $r
  });
  return /* @__PURE__ */ f(
    fb,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Ut(),
      titleId: Ut(),
      descriptionId: Ut(),
      open: c,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((u) => !u), [d]),
      modal: a,
      children: n
    }
  );
};
Sc.displayName = $r;
var Nc = "DialogTrigger", Pc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Nc, n), i = ve(t, o.triggerRef);
    return /* @__PURE__ */ f(
      be.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": mi(o.open),
        ...r,
        ref: i,
        onClick: Z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Pc.displayName = Nc;
var fi = "DialogPortal", [hb, Ec] = xc(fi, {
  forceMount: void 0
}), Rc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Je(fi, t);
  return /* @__PURE__ */ f(hb, { scope: t, forceMount: n, children: m.Children.map(r, (a) => /* @__PURE__ */ f(Rt, { present: n || i.open, children: /* @__PURE__ */ f(Jo, { asChild: !0, container: o, children: a }) })) });
};
Rc.displayName = fi;
var xr = "DialogOverlay", Ic = m.forwardRef(
  (e, t) => {
    const n = Ec(xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Je(xr, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ f(Rt, { present: r || i.open, children: /* @__PURE__ */ f(gb, { ...o, ref: t }) }) : null;
  }
);
Ic.displayName = xr;
var mb = /* @__PURE__ */ Cn("DialogOverlay.RemoveScroll"), gb = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(xr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Qo, { as: mb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        be.div,
        {
          "data-state": mi(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ot = "DialogContent", Ac = m.forwardRef(
  (e, t) => {
    const n = Ec(Ot, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Je(Ot, e.__scopeDialog);
    return /* @__PURE__ */ f(Rt, { present: r || i.open, children: i.modal ? /* @__PURE__ */ f(pb, { ...o, ref: t }) : /* @__PURE__ */ f(vb, { ...o, ref: t }) });
  }
);
Ac.displayName = Ot;
var pb = m.forwardRef(
  (e, t) => {
    const n = Je(Ot, e.__scopeDialog), r = m.useRef(null), o = ve(t, n.contentRef, r);
    return m.useEffect(() => {
      const i = r.current;
      if (i) return dl(i);
    }, []), /* @__PURE__ */ f(
      kc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: Z(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), vb = m.forwardRef(
  (e, t) => {
    const n = Je(Ot, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ f(
      kc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || n.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          n.triggerRef.current?.contains(a) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), kc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Je(Ot, n), l = m.useRef(null), c = ve(t, l);
    return Ta(), /* @__PURE__ */ D(Fe, { children: [
      /* @__PURE__ */ f(
        Wo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ f(
            Ko,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": mi(s.open),
              ...a,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ D(Fe, { children: [
        /* @__PURE__ */ f(yb, { titleId: s.titleId }),
        /* @__PURE__ */ f(xb, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), hi = "DialogTitle", Dc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(hi, n);
    return /* @__PURE__ */ f(be.h2, { id: o.titleId, ...r, ref: t });
  }
);
Dc.displayName = hi;
var Mc = "DialogDescription", Oc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Mc, n);
    return /* @__PURE__ */ f(be.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Oc.displayName = Mc;
var Tc = "DialogClose", _c = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Je(Tc, n);
    return /* @__PURE__ */ f(
      be.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
_c.displayName = Tc;
function mi(e) {
  return e ? "open" : "closed";
}
var Lc = "DialogTitleWarning", [bb, Fc] = kh(Lc, {
  contentName: Ot,
  titleName: hi,
  docsSlug: "dialog"
}), yb = ({ titleId: e }) => {
  const t = Fc(Lc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, wb = "DialogDescriptionWarning", xb = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fc(wb).contentName}}.`;
  return m.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, $c = Sc, Cb = Pc, zc = Rc, gi = Ic, pi = Ac, vi = Dc, bi = Oc, yi = _c;
const Bc = $c, Sb = zc, Kc = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  gi,
  {
    className: se(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Kc.displayName = gi.displayName;
const wi = m.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => {
  const { portalContainer: i } = Lo();
  return /* @__PURE__ */ D(Sb, { container: i || void 0, children: [
    /* @__PURE__ */ f(Kc, {}),
    /* @__PURE__ */ D(
      pi,
      {
        ref: o,
        className: se(
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
          /* @__PURE__ */ D(yi, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100", children: [
            /* @__PURE__ */ f(Ea, { className: "h-4 w-4" }),
            /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
wi.displayName = pi.displayName;
const xi = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: se(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
xi.displayName = "SheetHeader";
const Wc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: se(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Wc.displayName = "SheetFooter";
const Ci = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  vi,
  {
    ref: n,
    className: se("text-lg font-medium text-gray-900", e),
    ...t
  }
));
Ci.displayName = vi.displayName;
const Si = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  bi,
  {
    ref: n,
    className: se("text-sm text-gray-500", e),
    ...t
  }
));
Si.displayName = bi.displayName;
function Ni(e) {
  const {
    pageComponents: t,
    payload: n,
    setup: r = { width: 210, height: 297 },
    // Default A4 size in mm
    thumbnailWidth: o = 200,
    thumbnailHeight: i
  } = e, a = ea.resolveDimensions(r), s = a.width, l = a.height, c = s / l, d = o, u = i ?? Math.round(d / c), h = s * 3.779527559, g = l * 3.779527559;
  return (b, p, v) => {
    const w = b.strictPosition, N = w === "start" || w === "end";
    if (b.kind === "group") {
      const x = b.firstPageId, y = b.firstPageComponentKey ?? x, P = yr(n, { id: x, componentKey: y }), E = b.firstPageComponent || (y ? t[y] : null), C = n?.integrations?.[b.id];
      return /* @__PURE__ */ D(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: b.id,
          children: [
            E ? /* @__PURE__ */ f(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ f(
                  "div",
                  {
                    style: {
                      transform: `scale(${Math.min(d / h, u / g)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ f("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${g}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ f(
                      E,
                      {
                        payload: n,
                        pageId: x,
                        templateId: y,
                        pagePayload: P,
                        componentKey: y,
                        integration: C,
                        parentGroup: b
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ f("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
                "Group ",
                b.id
              ] }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            /* @__PURE__ */ D("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
              "Group (",
              b.pageCount,
              " pages)"
            ] }),
            N && /* @__PURE__ */ D("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(po, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: b.label || b.id }) }) }) }),
            v && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging Group..." }) })
          ]
        }
      );
    } else {
      const x = b.pageId, y = b.pageComponentKey ?? x, P = yr(n, { id: x, componentKey: y }), E = b.pageComponent || (y ? t[y] : null), C = x ? yc(n, { id: x }) : void 0;
      return /* @__PURE__ */ D(
        "div",
        {
          className: `relative bg-white border transition-all ${v ? "border-blue-400 shadow-2xl scale-105" : N ? "border-gray-300 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,
          style: { width: `${d}px`, height: `${u}px` },
          title: b.pageId,
          children: [
            E ? /* @__PURE__ */ f(
              "div",
              {
                className: "w-full h-full flex items-center justify-center bg-gray-50 overflow-hidden relative pointer-events-none",
                children: /* @__PURE__ */ f(
                  "div",
                  {
                    className: "flex items-center justify-center pointer-events-none",
                    style: {
                      transform: `scale(${Math.min(d / h, u / g)})`,
                      transformOrigin: "center"
                    },
                    children: /* @__PURE__ */ f("div", { className: "!shrink-0", style: { width: `${h}px`, height: `${g}px`, backgroundColor: "white", pointerEvents: "none" }, children: /* @__PURE__ */ f(
                      E,
                      {
                        payload: n,
                        pageId: x,
                        templateId: y,
                        pagePayload: P,
                        componentKey: y,
                        integration: C
                      }
                    ) })
                  }
                )
              }
            ) : /* @__PURE__ */ f("div", { className: "w-full h-full flex items-center justify-center bg-gray-50 pointer-events-none", children: /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ D("div", { className: "text-sm font-medium text-gray-700", children: [
                "Page ",
                b.pageNum
              ] }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: x || "No preview" })
            ] }) }),
            N && /* @__PURE__ */ D("div", { className: "absolute top-2 left-2 px-2 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none flex items-center gap-1", children: [
              /* @__PURE__ */ f(po, { className: "size-3" }),
              /* @__PURE__ */ f("span", { children: w === "start" ? "Start" : "End" })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: b.pageLabel || `Page ${b.pageNum}` }) }) }) }),
            v && /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center justify-center bg-blue-500/10 pointer-events-none", children: /* @__PURE__ */ f("div", { className: "text-blue-600 font-medium text-sm bg-white/90 px-3 py-1 rounded-full shadow-lg", children: "Dragging..." }) })
          ]
        }
      );
    }
  };
}
function Nb({
  open: e,
  onOpenChange: t,
  availableItems: n,
  onSelectItem: r,
  pageComponents: o,
  payload: i,
  setup: a = { width: 210, height: 297 },
  gridColsClass: s = "page-order-grid-cols"
}) {
  const [l, c] = m.useState(""), d = m.useMemo(() => {
    if (!l.trim()) return n;
    const y = l.toLowerCase();
    return n.filter(
      (P) => (P.label || "").toLowerCase().includes(y) || P.id.toLowerCase().includes(y)
    );
  }, [n, l]), u = (y) => {
    t(!1), r(y);
  }, h = a.width || 210, g = a.height || 297, b = h / g, p = 200, v = Math.round(p / b), w = m.useMemo(() => o ? Ni({
    pageComponents: o,
    payload: i,
    setup: a,
    thumbnailWidth: p,
    thumbnailHeight: v
  }) : null, [o, i, a, p, v]), N = (y, P) => {
    if (!y) return [];
    if (Array.isArray(y)) return y;
    try {
      const E = y(P);
      if (!Array.isArray(E))
        return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof E), [];
      const C = E.filter((S) => typeof S == "string");
      return C.length !== E.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), C;
    } catch (E) {
      return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", E), [];
    }
  }, x = (y, P) => {
    if (y.kind === "group") {
      const S = y, R = { payload: i, item: void 0, parent: void 0 }, I = N(S.pageComponentKeys, R), k = I[0];
      return {
        kind: "group",
        id: y.id,
        label: y.label,
        pageCount: I.length,
        firstPageId: k,
        firstPageComponentKey: k
      };
    }
    const E = y, C = E.componentKey ?? E.id;
    return {
      kind: "page",
      id: E.id,
      pageId: E.id,
      pageComponentKey: C,
      pageLabel: E.label,
      pageNum: P + 1
    };
  };
  return /* @__PURE__ */ f(Bc, { open: e, onOpenChange: t, children: /* @__PURE__ */ D(wi, { side: "bottom", className: "h-[90vh] p-0 gap-0 w-full max-w-none bg-gray-50", "data-uhuu-editor": !0, children: [
    /* @__PURE__ */ f(xi, { className: "border-b border-gray-200 p-4 bg-white", children: /* @__PURE__ */ D("div", { className: "flex items-end gap-3", children: [
      /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(lt, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ D("div", { className: "flex-1", children: [
        /* @__PURE__ */ f(Ci, { className: "text-base font-medium text-gray-900 leading-tight", children: "Add Page or Group" }),
        /* @__PURE__ */ f(Si, { className: "text-xs text-gray-400 mt-0.5", children: "Select a page or group to add to your document." })
      ] }),
      /* @__PURE__ */ D("div", { className: "flex items-center gap-1.5 text-gray-400 mb-0.5 mr-8", children: [
        /* @__PURE__ */ f(gh, { className: "w-3.5 h-3.5 shrink-0" }),
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
    /* @__PURE__ */ f("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ f("div", { className: "h-full max-h-[calc(90vh-100px)] overflow-auto p-6", children: d.length === 0 ? /* @__PURE__ */ D("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ f(lt, { className: "w-8 h-8 text-gray-400" }) }),
      /* @__PURE__ */ f("div", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items available" }),
      /* @__PURE__ */ f("p", { className: "text-gray-500 mb-4", children: l.trim() ? "No pages or groups match your search." : "All pages and groups have been added." })
    ] }) : /* @__PURE__ */ f("div", { className: s, children: d.map((y, P) => {
      const E = y.kind === "group", C = y.id, S = E ? y.label || `Group ${P + 1}` : y.label || `Page ${y.id}`, R = { payload: i, item: void 0, parent: void 0 }, I = E ? N(y.pageComponentKeys, R).length : 1;
      return /* @__PURE__ */ D(
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
                alt: S
              }
            ) }) : w ? /* @__PURE__ */ f("div", { className: "absolute inset-0 flex items-center pointer-events-none", children: w(x(y, P), P, !1) }) : /* @__PURE__ */ f(Fe, { children: E ? /* @__PURE__ */ D("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(lt, { className: "w-8 h-8 text-blue-600" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: S }),
              /* @__PURE__ */ D("div", { className: "text-xs text-gray-500 mt-1", children: [
                I,
                " ",
                I === 1 ? "page" : "pages"
              ] })
            ] }) : /* @__PURE__ */ D("div", { className: "p-4", children: [
              /* @__PURE__ */ f("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(lt, { className: "w-8 h-8 text-gray-400" }) }),
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: S }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-500 mt-1", children: C })
            ] }) }) }),
            (!w || y?.thumbnail) && /* @__PURE__ */ D(Fe, { children: [
              E && /* @__PURE__ */ D("div", { className: "absolute top-2 right-2 px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded shadow-lg pointer-events-none", children: [
                "Group (",
                I,
                " ",
                I === 1 ? "page" : "pages",
                ")"
              ] }),
              /* @__PURE__ */ f("div", { className: "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 pointer-events-none", "data-item-id": C, children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 text-white", children: /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ f("div", { className: "text-sm font-medium truncate", children: S }) }) }) })
            ] }),
            /* @__PURE__ */ f("div", { className: "absolute top-3 left-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10", children: /* @__PURE__ */ f(lt, { className: "w-4 h-4 text-white" }) })
          ]
        },
        C
      );
    }) }) }) })
  ] }) });
}
function Pb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Y(
    () => (r) => {
      t.forEach((o) => o(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const zr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function on(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Pi(e) {
  return "nodeType" in e;
}
function _e(e) {
  var t, n;
  return e ? on(e) ? e : Pi(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ei(e) {
  const {
    Document: t
  } = _e(e);
  return e instanceof t;
}
function $n(e) {
  return on(e) ? !1 : e instanceof _e(e).HTMLElement;
}
function jc(e) {
  return e instanceof _e(e).SVGElement;
}
function sn(e) {
  return e ? on(e) ? e.document : Pi(e) ? Ei(e) ? e : $n(e) || jc(e) ? e.ownerDocument : document : document : document;
}
const qe = zr ? Js : ue;
function Br(e) {
  const t = de(e);
  return qe(() => {
    t.current = e;
  }), ge(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Eb() {
  const e = de(null), t = ge((r, o) => {
    e.current = setInterval(r, o);
  }, []), n = ge(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function En(e, t) {
  t === void 0 && (t = [e]);
  const n = de(e);
  return qe(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function zn(e, t) {
  const n = de();
  return Y(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Cr(e) {
  const t = Br(e), n = de(null), r = ge(
    (o) => {
      o !== n.current && t?.(o, n.current), n.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Sr(e) {
  const t = de();
  return ue(() => {
    t.current = e;
  }, [e]), t.current;
}
let ao = {};
function Bn(e, t) {
  return Y(() => {
    if (t)
      return t;
    const n = ao[e] == null ? 0 : ao[e] + 1;
    return ao[e] = n, e + "-" + n;
  }, [e, t]);
}
function Vc(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return r.reduce((i, a) => {
      const s = Object.entries(a);
      for (const [l, c] of s) {
        const d = i[l];
        d != null && (i[l] = d + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const Zt = /* @__PURE__ */ Vc(1), Rn = /* @__PURE__ */ Vc(-1);
function Rb(e) {
  return "clientX" in e && "clientY" in e;
}
function Kr(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Ib(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = _e(e.target);
  return t && e instanceof t;
}
function Nr(e) {
  if (Ib(e)) {
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
  return Rb(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Nt = /* @__PURE__ */ Object.freeze({
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
        return [Nt.Translate.toString(e), Nt.Scale.toString(e)].join(" ");
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
}), Ms = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ab(e) {
  return e.matches(Ms) ? e : e.querySelector(Ms);
}
const kb = {
  display: "none"
};
function Db(e) {
  let {
    id: t,
    value: n
  } = e;
  return me.createElement("div", {
    id: t,
    style: kb
  }, n);
}
function Mb(e) {
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
  return me.createElement("div", {
    id: t,
    style: o,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Ob() {
  const [e, t] = te("");
  return {
    announce: ge((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Hc = /* @__PURE__ */ Pt(null);
function Tb(e) {
  const t = xe(Hc);
  ue(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function _b() {
  const [e] = te(() => /* @__PURE__ */ new Set()), t = ge((r) => (e.add(r), () => e.delete(r)), [e]);
  return [ge((r) => {
    let {
      type: o,
      event: i
    } = r;
    e.forEach((a) => {
      var s;
      return (s = a[o]) == null ? void 0 : s.call(a, i);
    });
  }, [e]), t];
}
const Lb = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Fb = {
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
function $b(e) {
  let {
    announcements: t = Fb,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: o = Lb
  } = e;
  const {
    announce: i,
    announcement: a
  } = Ob(), s = Bn("DndLiveRegion"), [l, c] = te(!1);
  if (ue(() => {
    c(!0);
  }, []), Tb(Y(() => ({
    onDragStart(u) {
      let {
        active: h
      } = u;
      i(t.onDragStart({
        active: h
      }));
    },
    onDragMove(u) {
      let {
        active: h,
        over: g
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: h,
        over: g
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: g
      } = u;
      i(t.onDragOver({
        active: h,
        over: g
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: g
      } = u;
      i(t.onDragEnd({
        active: h,
        over: g
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: g
      } = u;
      i(t.onDragCancel({
        active: h,
        over: g
      }));
    }
  }), [i, t])), !l)
    return null;
  const d = me.createElement(me.Fragment, null, me.createElement(Db, {
    id: r,
    value: o.draggable
  }), me.createElement(Mb, {
    id: s,
    announcement: a
  }));
  return n ? wd(d, n) : d;
}
var Se;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Se || (Se = {}));
function Pr() {
}
function Os(e, t) {
  return Y(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function zb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Y(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const Ze = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Gc(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Bb(e, t) {
  const n = Nr(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function Uc(e, t) {
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
function Kb(e, t) {
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
function Ts(e) {
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
function Yc(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function _s(e, t, n) {
  return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
    x: t + e.width * 0.5,
    y: n + e.height * 0.5
  };
}
const Wb = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = _s(t, t.left, t.top), i = [];
  for (const a of r) {
    const {
      id: s
    } = a, l = n.get(s);
    if (l) {
      const c = Gc(_s(l), o);
      i.push({
        id: s,
        data: {
          droppableContainer: a,
          value: c
        }
      });
    }
  }
  return i.sort(Uc);
}, jb = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = Ts(t), i = [];
  for (const a of r) {
    const {
      id: s
    } = a, l = n.get(s);
    if (l) {
      const c = Ts(l), d = o.reduce((h, g, b) => h + Gc(c[b], g), 0), u = Number((d / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: a,
          value: u
        }
      });
    }
  }
  return i.sort(Uc);
};
function Vb(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), a = o - r, s = i - n;
  if (r < o && n < i) {
    const l = t.width * t.height, c = e.width * e.height, d = a * s, u = d / (l + c - d);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Hb = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const o = [];
  for (const i of r) {
    const {
      id: a
    } = i, s = n.get(a);
    if (s) {
      const l = Vb(s, t);
      l > 0 && o.push({
        id: a,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return o.sort(Kb);
};
function Gb(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Xc(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Ze;
}
function Ub(e) {
  return function(n) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return o.reduce((a, s) => ({
      ...a,
      top: a.top + e * s.y,
      bottom: a.bottom + e * s.y,
      left: a.left + e * s.x,
      right: a.right + e * s.x
    }), {
      ...n
    });
  };
}
const Yb = /* @__PURE__ */ Ub(1);
function qc(e) {
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
function Xb(e, t, n) {
  const r = qc(t);
  if (!r)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: a,
    y: s
  } = r, l = e.left - a - (1 - o) * parseFloat(n), c = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = o ? e.width / o : e.width, u = i ? e.height / i : e.height;
  return {
    width: d,
    height: u,
    top: c,
    right: l + d,
    bottom: c + u,
    left: l
  };
}
const qb = {
  ignoreTransform: !1
};
function an(e, t) {
  t === void 0 && (t = qb);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = _e(e).getComputedStyle(e);
    c && (n = Xb(n, c, d));
  }
  const {
    top: r,
    left: o,
    width: i,
    height: a,
    bottom: s,
    right: l
  } = n;
  return {
    top: r,
    left: o,
    width: i,
    height: a,
    bottom: s,
    right: l
  };
}
function Ls(e) {
  return an(e, {
    ignoreTransform: !0
  });
}
function Zb(e) {
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
function Jb(e, t) {
  return t === void 0 && (t = _e(e).getComputedStyle(e)), t.position === "fixed";
}
function Qb(e, t) {
  t === void 0 && (t = _e(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Wr(e, t) {
  const n = [];
  function r(o) {
    if (t != null && n.length >= t || !o)
      return n;
    if (Ei(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
      return n.push(o.scrollingElement), n;
    if (!$n(o) || jc(o) || n.includes(o))
      return n;
    const i = _e(e).getComputedStyle(o);
    return o !== e && Qb(o, i) && n.push(o), Jb(o, i) ? n : r(o.parentNode);
  }
  return e ? r(e) : n;
}
function Zc(e) {
  const [t] = Wr(e, 1);
  return t ?? null;
}
function lo(e) {
  return !zr || !e ? null : on(e) ? e : Pi(e) ? Ei(e) || e === sn(e).scrollingElement ? window : $n(e) ? e : null : null;
}
function Jc(e) {
  return on(e) ? e.scrollX : e.scrollLeft;
}
function Qc(e) {
  return on(e) ? e.scrollY : e.scrollTop;
}
function Eo(e) {
  return {
    x: Jc(e),
    y: Qc(e)
  };
}
var Ee;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ee || (Ee = {}));
function eu(e) {
  return !zr || !e ? !1 : e === document.scrollingElement;
}
function tu(e) {
  const t = {
    x: 0,
    y: 0
  }, n = eu(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, a = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: a,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const ey = {
  x: 0.2,
  y: 0.2
};
function ty(e, t, n, r, o) {
  let {
    top: i,
    left: a,
    right: s,
    bottom: l
  } = n;
  r === void 0 && (r = 10), o === void 0 && (o = ey);
  const {
    isTop: c,
    isBottom: d,
    isLeft: u,
    isRight: h
  } = tu(e), g = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, p = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !c && i <= t.top + p.height ? (g.y = Ee.Backward, b.y = r * Math.abs((t.top + p.height - i) / p.height)) : !d && l >= t.bottom - p.height && (g.y = Ee.Forward, b.y = r * Math.abs((t.bottom - p.height - l) / p.height)), !h && s >= t.right - p.width ? (g.x = Ee.Forward, b.x = r * Math.abs((t.right - p.width - s) / p.width)) : !u && a <= t.left + p.width && (g.x = Ee.Backward, b.x = r * Math.abs((t.left + p.width - a) / p.width)), {
    direction: g,
    speed: b
  };
}
function ny(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: a,
      width: i,
      height: a
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
function nu(e) {
  return e.reduce((t, n) => Zt(t, Eo(n)), Ze);
}
function ry(e) {
  return e.reduce((t, n) => t + Jc(n), 0);
}
function oy(e) {
  return e.reduce((t, n) => t + Qc(n), 0);
}
function ru(e, t) {
  if (t === void 0 && (t = an), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: o,
    right: i
  } = t(e);
  Zc(e) && (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const iy = [["x", ["left", "right"], ry], ["y", ["top", "bottom"], oy]];
class Ri {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Wr(n), o = nu(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, a, s] of iy)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const c = s(r), d = o[i] - c;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class yn {
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
function sy(e) {
  const {
    EventTarget: t
  } = _e(e);
  return e instanceof t ? e : sn(e);
}
function co(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var je;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(je || (je = {}));
function Fs(e) {
  e.preventDefault();
}
function ay(e) {
  e.stopPropagation();
}
var ae;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(ae || (ae = {}));
const ou = {
  start: [ae.Space, ae.Enter],
  cancel: [ae.Esc],
  end: [ae.Space, ae.Enter, ae.Tab]
}, ly = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ae.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ae.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ae.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ae.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Ii {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new yn(sn(n)), this.windowListeners = new yn(_e(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(je.Resize, this.handleCancel), this.windowListeners.add(je.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(je.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && ru(r), n(Ze);
  }
  handleKeyDown(t) {
    if (Kr(t)) {
      const {
        active: n,
        context: r,
        options: o
      } = this.props, {
        keyboardCodes: i = ou,
        coordinateGetter: a = ly,
        scrollBehavior: s = "smooth"
      } = o, {
        code: l
      } = t;
      if (i.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : Ze;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = a(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (u) {
        const h = Rn(u, d), g = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const p of b) {
          const v = t.code, {
            isTop: w,
            isRight: N,
            isLeft: x,
            isBottom: y,
            maxScroll: P,
            minScroll: E
          } = tu(p), C = ny(p), S = {
            x: Math.min(v === ae.Right ? C.right - C.width / 2 : C.right, Math.max(v === ae.Right ? C.left : C.left + C.width / 2, u.x)),
            y: Math.min(v === ae.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(v === ae.Down ? C.top : C.top + C.height / 2, u.y))
          }, R = v === ae.Right && !N || v === ae.Left && !x, I = v === ae.Down && !y || v === ae.Up && !w;
          if (R && S.x !== u.x) {
            const k = p.scrollLeft + h.x, O = v === ae.Right && k <= P.x || v === ae.Left && k >= E.x;
            if (O && !h.y) {
              p.scrollTo({
                left: k,
                behavior: s
              });
              return;
            }
            O ? g.x = p.scrollLeft - k : g.x = v === ae.Right ? p.scrollLeft - P.x : p.scrollLeft - E.x, g.x && p.scrollBy({
              left: -g.x,
              behavior: s
            });
            break;
          } else if (I && S.y !== u.y) {
            const k = p.scrollTop + h.y, O = v === ae.Down && k <= P.y || v === ae.Up && k >= E.y;
            if (O && !h.x) {
              p.scrollTo({
                top: k,
                behavior: s
              });
              return;
            }
            O ? g.y = p.scrollTop - k : g.y = v === ae.Down ? p.scrollTop - P.y : p.scrollTop - E.y, g.y && p.scrollBy({
              top: -g.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Zt(Rn(u, this.referenceCoordinates), g));
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
Ii.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = ou,
      onActivation: o
    } = t, {
      active: i
    } = n;
    const {
      code: a
    } = e.nativeEvent;
    if (r.start.includes(a)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), o?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function $s(e) {
  return !!(e && "distance" in e);
}
function zs(e) {
  return !!(e && "delay" in e);
}
class Ai {
  constructor(t, n, r) {
    var o;
    r === void 0 && (r = sy(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: a
    } = i;
    this.props = t, this.events = n, this.document = sn(a), this.documentListeners = new yn(this.document), this.listeners = new yn(r), this.windowListeners = new yn(_e(a)), this.initialCoordinates = (o = Nr(i)) != null ? o : Ze, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(je.Resize, this.handleCancel), this.windowListeners.add(je.DragStart, Fs), this.windowListeners.add(je.VisibilityChange, this.handleCancel), this.windowListeners.add(je.ContextMenu, Fs), this.documentListeners.add(je.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (zs(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if ($s(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(je.Click, ay, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(je.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: a,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!o)
      return;
    const l = (n = Nr(t)) != null ? n : Ze, c = Rn(o, l);
    if (!r && s) {
      if ($s(s)) {
        if (s.tolerance != null && co(c, s.tolerance))
          return this.handleCancel();
        if (co(c, s.distance))
          return this.handleStart();
      }
      if (zs(s) && co(c, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, c);
      return;
    }
    t.cancelable && t.preventDefault(), a(l);
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
    t.code === ae.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const cy = {
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
class ki extends Ai {
  constructor(t) {
    const {
      event: n
    } = t, r = sn(n.target);
    super(t, cy, r);
  }
}
ki.activators = [{
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
const uy = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ro;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Ro || (Ro = {}));
class dy extends Ai {
  constructor(t) {
    super(t, uy, sn(t.event.target));
  }
}
dy.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Ro.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const uo = {
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
class fy extends Ai {
  constructor(t) {
    super(t, uo);
  }
  static setup() {
    return window.addEventListener(uo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(uo.move.name, t);
    };
    function t() {
    }
  }
}
fy.activators = [{
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
var wn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(wn || (wn = {}));
var Er;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Er || (Er = {}));
function hy(e) {
  let {
    acceleration: t,
    activator: n = wn.Pointer,
    canScroll: r,
    draggingRect: o,
    enabled: i,
    interval: a = 5,
    order: s = Er.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: u,
    threshold: h
  } = e;
  const g = gy({
    delta: u,
    disabled: !i
  }), [b, p] = Eb(), v = de({
    x: 0,
    y: 0
  }), w = de({
    x: 0,
    y: 0
  }), N = Y(() => {
    switch (n) {
      case wn.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case wn.DraggableRect:
        return o;
    }
  }, [n, o, l]), x = de(null), y = ge(() => {
    const E = x.current;
    if (!E)
      return;
    const C = v.current.x * w.current.x, S = v.current.y * w.current.y;
    E.scrollBy(C, S);
  }, []), P = Y(() => s === Er.TreeOrder ? [...c].reverse() : c, [s, c]);
  ue(
    () => {
      if (!i || !c.length || !N) {
        p();
        return;
      }
      for (const E of P) {
        if (r?.(E) === !1)
          continue;
        const C = c.indexOf(E), S = d[C];
        if (!S)
          continue;
        const {
          direction: R,
          speed: I
        } = ty(E, S, N, t, h);
        for (const k of ["x", "y"])
          g[k][R[k]] || (I[k] = 0, R[k] = 0);
        if (I.x > 0 || I.y > 0) {
          p(), x.current = E, b(y, a), v.current = I, w.current = R;
          return;
        }
      }
      v.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      y,
      r,
      p,
      i,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g),
      b,
      c,
      P,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const my = {
  x: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  },
  y: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  }
};
function gy(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Sr(t);
  return zn((o) => {
    if (n || !r || !o)
      return my;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ee.Backward]: o.x[Ee.Backward] || i.x === -1,
        [Ee.Forward]: o.x[Ee.Forward] || i.x === 1
      },
      y: {
        [Ee.Backward]: o.y[Ee.Backward] || i.y === -1,
        [Ee.Forward]: o.y[Ee.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function py(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return zn((o) => {
    var i;
    return t == null ? null : (i = r ?? o) != null ? i : null;
  }, [r, t]);
}
function vy(e, t) {
  return Y(() => e.reduce((n, r) => {
    const {
      sensor: o
    } = r, i = o.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var In;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(In || (In = {}));
var Io;
(function(e) {
  e.Optimized = "optimized";
})(Io || (Io = {}));
const Bs = /* @__PURE__ */ new Map();
function by(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: o
  } = t;
  const [i, a] = te(null), {
    frequency: s,
    measure: l,
    strategy: c
  } = o, d = de(e), u = v(), h = En(u), g = ge(function(w) {
    w === void 0 && (w = []), !h.current && a((N) => N === null ? w : N.concat(w.filter((x) => !N.includes(x))));
  }, [h]), b = de(null), p = zn((w) => {
    if (u && !n)
      return Bs;
    if (!w || w === Bs || d.current !== e || i != null) {
      const N = /* @__PURE__ */ new Map();
      for (let x of e) {
        if (!x)
          continue;
        if (i && i.length > 0 && !i.includes(x.id) && x.rect.current) {
          N.set(x.id, x.rect.current);
          continue;
        }
        const y = x.node.current, P = y ? new Ri(l(y), y) : null;
        x.rect.current = P, P && N.set(x.id, P);
      }
      return N;
    }
    return w;
  }, [e, i, n, u, l]);
  return ue(() => {
    d.current = e;
  }, [e]), ue(
    () => {
      u || g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), ue(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), ue(
    () => {
      u || typeof s != "number" || b.current !== null || (b.current = setTimeout(() => {
        g(), b.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, g, ...r]
  ), {
    droppableRects: p,
    measureDroppableContainers: g,
    measuringScheduled: i != null
  };
  function v() {
    switch (c) {
      case In.Always:
        return !1;
      case In.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Di(e, t) {
  return zn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function yy(e, t) {
  return Di(e, t);
}
function wy(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Br(t), o = Y(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return ue(() => () => o?.disconnect(), [o]), o;
}
function jr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Br(t), o = Y(
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
  return ue(() => () => o?.disconnect(), [o]), o;
}
function xy(e) {
  return new Ri(an(e), e);
}
function Ks(e, t, n) {
  t === void 0 && (t = xy);
  const [r, o] = te(null);
  function i() {
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
  const a = wy({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: d,
            target: u
          } = c;
          if (d === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), s = jr({
    callback: i
  });
  return qe(() => {
    i(), e ? (s?.observe(e), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s?.disconnect(), a?.disconnect());
  }, [e]), r;
}
function Cy(e) {
  const t = Di(e);
  return Xc(e, t);
}
const Ws = [];
function Sy(e) {
  const t = de(e), n = zn((r) => e ? r && r !== Ws && e && t.current && e.parentNode === t.current.parentNode ? r : Wr(e) : Ws, [e]);
  return ue(() => {
    t.current = e;
  }, [e]), n;
}
function Ny(e) {
  const [t, n] = te(null), r = de(e), o = ge((i) => {
    const a = lo(i.target);
    a && n((s) => s ? (s.set(a, Eo(a)), new Map(s)) : null);
  }, []);
  return ue(() => {
    const i = r.current;
    if (e !== i) {
      a(i);
      const s = e.map((l) => {
        const c = lo(l);
        return c ? (c.addEventListener("scroll", o, {
          passive: !0
        }), [c, Eo(c)]) : null;
      }).filter((l) => l != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      a(e), a(i);
    };
    function a(s) {
      s.forEach((l) => {
        const c = lo(l);
        c?.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), Y(() => e.length ? t ? Array.from(t.values()).reduce((i, a) => Zt(i, a), Ze) : nu(e) : Ze, [e, t]);
}
function js(e, t) {
  t === void 0 && (t = []);
  const n = de(null);
  return ue(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), ue(() => {
    const r = e !== Ze;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Rn(e, n.current) : Ze;
}
function Py(e) {
  ue(
    () => {
      if (!zr)
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
function Ey(e, t) {
  return Y(() => e.reduce((n, r) => {
    let {
      eventName: o,
      handler: i
    } = r;
    return n[o] = (a) => {
      i(a, t);
    }, n;
  }, {}), [e, t]);
}
function iu(e) {
  return Y(() => e ? Zb(e) : null, [e]);
}
const Vs = [];
function Ry(e, t) {
  t === void 0 && (t = an);
  const [n] = e, r = iu(n ? _e(n) : null), [o, i] = te(Vs);
  function a() {
    i(() => e.length ? e.map((l) => eu(l) ? r : new Ri(t(l), l)) : Vs);
  }
  const s = jr({
    callback: a
  });
  return qe(() => {
    s?.disconnect(), a(), e.forEach((l) => s?.observe(l));
  }, [e]), o;
}
function su(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return $n(t) ? t : e;
}
function Iy(e) {
  let {
    measure: t
  } = e;
  const [n, r] = te(null), o = ge((c) => {
    for (const {
      target: d
    } of c)
      if ($n(d)) {
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
  }, [t]), i = jr({
    callback: o
  }), a = ge((c) => {
    const d = su(c);
    i?.disconnect(), d && i?.observe(d), r(d ? t(d) : null);
  }, [t, i]), [s, l] = Cr(a);
  return Y(() => ({
    nodeRef: s,
    rect: n,
    setRef: l
  }), [n, s, l]);
}
const Ay = [{
  sensor: ki,
  options: {}
}, {
  sensor: Ii,
  options: {}
}], ky = {
  current: {}
}, lr = {
  draggable: {
    measure: Ls
  },
  droppable: {
    measure: Ls,
    strategy: In.WhileDragging,
    frequency: Io.Optimized
  },
  dragOverlay: {
    measure: an
  }
};
class xn extends Map {
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
const Dy = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new xn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Pr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: lr,
  measureDroppableContainers: Pr,
  windowRect: null,
  measuringScheduled: !1
}, au = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Pr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Pr
}, Kn = /* @__PURE__ */ Pt(au), lu = /* @__PURE__ */ Pt(Dy);
function My() {
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
      containers: new xn()
    }
  };
}
function Oy(e, t) {
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
      } = n, o = new xn(e.droppable.containers);
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
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const a = new xn(e.droppable.containers);
      return a.set(n, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
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
      const i = new xn(e.droppable.containers);
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
function Ty(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: o
  } = xe(Kn), i = Sr(r), a = Sr(n?.id);
  return ue(() => {
    if (!t && !r && i && a != null) {
      if (!Kr(i) || document.activeElement === i.target)
        return;
      const s = o.get(a);
      if (!s)
        return;
      const {
        activatorNode: l,
        node: c
      } = s;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, c.current]) {
          if (!d)
            continue;
          const u = Ab(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, o, a, i]), null;
}
function cu(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...r
  }), n) : n;
}
function _y(e) {
  return Y(
    () => ({
      draggable: {
        ...lr.draggable,
        ...e?.draggable
      },
      droppable: {
        ...lr.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...lr.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function Ly(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: o = !0
  } = e;
  const i = de(!1), {
    x: a,
    y: s
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  qe(() => {
    if (!a && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = n(c), u = Xc(d, r);
    if (a || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const h = Zc(c);
      h && h.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, a, s, r, n]);
}
const Vr = /* @__PURE__ */ Pt({
  ...Ze,
  scaleX: 1,
  scaleY: 1
});
var wt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(wt || (wt = {}));
const Fy = /* @__PURE__ */ pd(function(t) {
  var n, r, o, i;
  let {
    id: a,
    accessibility: s,
    autoScroll: l = !0,
    children: c,
    sensors: d = Ay,
    collisionDetection: u = Hb,
    measuring: h,
    modifiers: g,
    ...b
  } = t;
  const p = vd(Oy, void 0, My), [v, w] = p, [N, x] = _b(), [y, P] = te(wt.Uninitialized), E = y === wt.Initialized, {
    draggable: {
      active: C,
      nodes: S,
      translate: R
    },
    droppable: {
      containers: I
    }
  } = v, k = C != null ? S.get(C) : null, O = de({
    initial: null,
    translated: null
  }), z = Y(() => {
    var Ne;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (Ne = k?.data) != null ? Ne : ky,
      rect: O
    } : null;
  }, [C, k]), F = de(null), [K, M] = te(null), [T, $] = te(null), _ = En(b, Object.values(b)), L = Bn("DndDescribedBy", a), G = Y(() => I.getEnabled(), [I]), U = _y(h), {
    droppableRects: ie,
    measureDroppableContainers: le,
    measuringScheduled: ne
  } = by(G, {
    dragging: E,
    dependencies: [R.x, R.y],
    config: U.droppable
  }), B = py(S, C), H = Y(() => T ? Nr(T) : null, [T]), ee = Gn(), J = yy(B, U.draggable.measure);
  Ly({
    activeNode: C != null ? S.get(C) : null,
    config: ee.layoutShiftCompensation,
    initialRect: J,
    measure: U.draggable.measure
  });
  const X = Ks(B, U.draggable.measure, J), oe = Ks(B ? B.parentElement : null), ce = de({
    activatorEvent: null,
    active: null,
    activeNode: B,
    collisionRect: null,
    collisions: null,
    droppableRects: ie,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), he = I.getNodeFor((n = ce.current.over) == null ? void 0 : n.id), pe = Iy({
    measure: U.dragOverlay.measure
  }), Re = (r = pe.nodeRef.current) != null ? r : B, Ke = E ? (o = pe.rect) != null ? o : X : null, cn = !!(pe.nodeRef.current && pe.rect), zt = Cy(cn ? null : X), Bt = iu(Re ? _e(Re) : null), Ge = Sy(E ? he ?? B : null), Kt = Ry(Ge), it = cu(g, {
    transform: {
      x: R.x - zt.x,
      y: R.y - zt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: T,
    active: z,
    activeNodeRect: X,
    containerNodeRect: oe,
    draggingNodeRect: Ke,
    over: ce.current.over,
    overlayNodeRect: pe.rect,
    scrollableAncestors: Ge,
    scrollableAncestorRects: Kt,
    windowRect: Bt
  }), Wn = H ? Zt(H, R) : null, jn = Ny(Ge), un = js(jn), Ur = js(jn, [X]), gt = Zt(it, un), pt = Ke ? Yb(Ke, it) : null, st = z && pt ? u({
    active: z,
    collisionRect: pt,
    droppableRects: ie,
    droppableContainers: G,
    pointerCoordinates: Wn
  }) : null, dn = Yc(st, "id"), [Ue, fn] = te(null), It = cn ? it : Zt(it, Ur), At = Gb(It, (i = Ue?.rect) != null ? i : null, X), hn = de(null), mn = ge(
    (Ne, De) => {
      let {
        sensor: Me,
        options: $e
      } = De;
      if (F.current == null)
        return;
      const Ie = S.get(F.current);
      if (!Ie)
        return;
      const Oe = Ne.nativeEvent, We = new Me({
        active: F.current,
        activeNode: Ie,
        event: Oe,
        options: $e,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ce,
        onAbort(j) {
          if (!S.get(j))
            return;
          const {
            onDragAbort: Q
          } = _.current, fe = {
            id: j
          };
          Q?.(fe), N({
            type: "onDragAbort",
            event: fe
          });
        },
        onPending(j, q, Q, fe) {
          if (!S.get(j))
            return;
          const {
            onDragPending: Ae
          } = _.current, Pe = {
            id: j,
            constraint: q,
            initialCoordinates: Q,
            offset: fe
          };
          Ae?.(Pe), N({
            type: "onDragPending",
            event: Pe
          });
        },
        onStart(j) {
          const q = F.current;
          if (q == null)
            return;
          const Q = S.get(q);
          if (!Q)
            return;
          const {
            onDragStart: fe
          } = _.current, ye = {
            activatorEvent: Oe,
            active: {
              id: q,
              data: Q.data,
              rect: O
            }
          };
          Yn(() => {
            fe?.(ye), P(wt.Initializing), w({
              type: Se.DragStart,
              initialCoordinates: j,
              active: q
            }), N({
              type: "onDragStart",
              event: ye
            }), M(hn.current), $(Oe);
          });
        },
        onMove(j) {
          w({
            type: Se.DragMove,
            coordinates: j
          });
        },
        onEnd: A(Se.DragEnd),
        onCancel: A(Se.DragCancel)
      });
      hn.current = We;
      function A(j) {
        return async function() {
          const {
            active: Q,
            collisions: fe,
            over: ye,
            scrollAdjustedTranslate: Ae
          } = ce.current;
          let Pe = null;
          if (Q && Ae) {
            const {
              cancelDrop: Qe
            } = _.current;
            Pe = {
              activatorEvent: Oe,
              active: Q,
              collisions: fe,
              delta: Ae,
              over: ye
            }, j === Se.DragEnd && typeof Qe == "function" && await Promise.resolve(Qe(Pe)) && (j = Se.DragCancel);
          }
          F.current = null, Yn(() => {
            w({
              type: j
            }), P(wt.Uninitialized), fn(null), M(null), $(null), hn.current = null;
            const Qe = j === Se.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Pe) {
              const kt = _.current[Qe];
              kt?.(Pe), N({
                type: Qe,
                event: Pe
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), Yr = ge((Ne, De) => (Me, $e) => {
    const Ie = Me.nativeEvent, Oe = S.get($e);
    if (
      // Another sensor is already instantiating
      F.current !== null || // No active draggable
      !Oe || // Event has already been captured
      Ie.dndKit || Ie.defaultPrevented
    )
      return;
    const We = {
      active: Oe
    };
    Ne(Me, De.options, We) === !0 && (Ie.dndKit = {
      capturedBy: De.sensor
    }, F.current = $e, mn(Me, De));
  }, [S, mn]), gn = vy(d, Yr);
  Py(d), qe(() => {
    X && y === wt.Initializing && P(wt.Initialized);
  }, [X, y]), ue(
    () => {
      const {
        onDragMove: Ne
      } = _.current, {
        active: De,
        activatorEvent: Me,
        collisions: $e,
        over: Ie
      } = ce.current;
      if (!De || !Me)
        return;
      const Oe = {
        active: De,
        activatorEvent: Me,
        collisions: $e,
        delta: {
          x: gt.x,
          y: gt.y
        },
        over: Ie
      };
      Yn(() => {
        Ne?.(Oe), N({
          type: "onDragMove",
          event: Oe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gt.x, gt.y]
  ), ue(
    () => {
      const {
        active: Ne,
        activatorEvent: De,
        collisions: Me,
        droppableContainers: $e,
        scrollAdjustedTranslate: Ie
      } = ce.current;
      if (!Ne || F.current == null || !De || !Ie)
        return;
      const {
        onDragOver: Oe
      } = _.current, We = $e.get(dn), A = We && We.rect.current ? {
        id: We.id,
        rect: We.rect.current,
        data: We.data,
        disabled: We.disabled
      } : null, j = {
        active: Ne,
        activatorEvent: De,
        collisions: Me,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: A
      };
      Yn(() => {
        fn(A), Oe?.(j), N({
          type: "onDragOver",
          event: j
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dn]
  ), qe(() => {
    ce.current = {
      activatorEvent: T,
      active: z,
      activeNode: B,
      collisionRect: pt,
      collisions: st,
      droppableRects: ie,
      draggableNodes: S,
      draggingNode: Re,
      draggingNodeRect: Ke,
      droppableContainers: I,
      over: Ue,
      scrollableAncestors: Ge,
      scrollAdjustedTranslate: gt
    }, O.current = {
      initial: Ke,
      translated: pt
    };
  }, [z, B, st, pt, S, Re, Ke, ie, I, Ue, Ge, gt]), hy({
    ...ee,
    delta: R,
    draggingRect: pt,
    pointerCoordinates: Wn,
    scrollableAncestors: Ge,
    scrollableAncestorRects: Kt
  });
  const Vn = Y(() => ({
    active: z,
    activeNode: B,
    activeNodeRect: X,
    activatorEvent: T,
    collisions: st,
    containerNodeRect: oe,
    dragOverlay: pe,
    draggableNodes: S,
    droppableContainers: I,
    droppableRects: ie,
    over: Ue,
    measureDroppableContainers: le,
    scrollableAncestors: Ge,
    scrollableAncestorRects: Kt,
    measuringConfiguration: U,
    measuringScheduled: ne,
    windowRect: Bt
  }), [z, B, X, T, st, oe, pe, S, I, ie, Ue, le, Ge, Kt, U, ne, Bt]), Hn = Y(() => ({
    activatorEvent: T,
    activators: gn,
    active: z,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: L
    },
    dispatch: w,
    draggableNodes: S,
    over: Ue,
    measureDroppableContainers: le
  }), [T, gn, z, X, w, L, S, Ue, le]);
  return me.createElement(Hc.Provider, {
    value: x
  }, me.createElement(Kn.Provider, {
    value: Hn
  }, me.createElement(lu.Provider, {
    value: Vn
  }, me.createElement(Vr.Provider, {
    value: At
  }, c)), me.createElement(Ty, {
    disabled: s?.restoreFocus === !1
  })), me.createElement($b, {
    ...s,
    hiddenTextDescribedById: L
  }));
  function Gn() {
    const Ne = K?.autoScrollEnabled === !1, De = typeof l == "object" ? l.enabled === !1 : l === !1, Me = E && !Ne && !De;
    return typeof l == "object" ? {
      ...l,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), $y = /* @__PURE__ */ Pt(null), Hs = "button", zy = "Draggable";
function By(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: o
  } = e;
  const i = Bn(zy), {
    activators: a,
    activatorEvent: s,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: u,
    over: h
  } = xe(Kn), {
    role: g = Hs,
    roleDescription: b = "draggable",
    tabIndex: p = 0
  } = o ?? {}, v = l?.id === t, w = xe(v ? Vr : $y), [N, x] = Cr(), [y, P] = Cr(), E = Ey(a, t), C = En(n);
  qe(
    () => (u.set(t, {
      id: t,
      key: i,
      node: N,
      activatorNode: y,
      data: C
    }), () => {
      const R = u.get(t);
      R && R.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const S = Y(() => ({
    role: g,
    tabIndex: p,
    "aria-disabled": r,
    "aria-pressed": v && g === Hs ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": d.draggable
  }), [r, g, p, v, b, d.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: c,
    attributes: S,
    isDragging: v,
    listeners: r ? void 0 : E,
    node: N,
    over: h,
    setNodeRef: x,
    setActivatorNodeRef: P,
    transform: w
  };
}
function uu() {
  return xe(lu);
}
const Ky = "Droppable", Wy = {
  timeout: 25
};
function jy(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: o
  } = e;
  const i = Bn(Ky), {
    active: a,
    dispatch: s,
    over: l,
    measureDroppableContainers: c
  } = xe(Kn), d = de({
    disabled: n
  }), u = de(!1), h = de(null), g = de(null), {
    disabled: b,
    updateMeasurementsFor: p,
    timeout: v
  } = {
    ...Wy,
    ...o
  }, w = En(p ?? r), N = ge(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current), g.current = setTimeout(() => {
        c(Array.isArray(w.current) ? w.current : [w.current]), g.current = null;
      }, v);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), x = jr({
    callback: N,
    disabled: b || !a
  }), y = ge((S, R) => {
    x && (R && (x.unobserve(R), u.current = !1), S && x.observe(S));
  }, [x]), [P, E] = Cr(y), C = En(t);
  return ue(() => {
    !x || !P.current || (x.disconnect(), u.current = !1, x.observe(P.current));
  }, [P, x]), ue(
    () => (s({
      type: Se.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: P,
        rect: h,
        data: C
      }
    }), () => s({
      type: Se.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), ue(() => {
    n !== d.current.disabled && (s({
      type: Se.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), d.current.disabled = n);
  }, [r, i, n, s]), {
    active: a,
    rect: h,
    isOver: l?.id === r,
    node: P,
    over: l,
    setNodeRef: E
  };
}
function Vy(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, o] = te(null), [i, a] = te(null), s = Sr(n);
  return !n && !r && s && o(s), qe(() => {
    if (!i)
      return;
    const l = r?.key, c = r?.props.id;
    if (l == null || c == null) {
      o(null);
      return;
    }
    Promise.resolve(t(c, i)).then(() => {
      o(null);
    });
  }, [t, r, i]), me.createElement(me.Fragment, null, n, r ? bd(r, {
    ref: a
  }) : null);
}
const Hy = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Gy(e) {
  let {
    children: t
  } = e;
  return me.createElement(Kn.Provider, {
    value: au
  }, me.createElement(Vr.Provider, {
    value: Hy
  }, t));
}
const Uy = {
  position: "fixed",
  touchAction: "none"
}, Yy = (e) => Kr(e) ? "transform 250ms ease" : void 0, Xy = /* @__PURE__ */ Ar((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: o,
    children: i,
    className: a,
    rect: s,
    style: l,
    transform: c,
    transition: d = Yy
  } = e;
  if (!s)
    return null;
  const u = o ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Uy,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Nt.Transform.toString(u),
    transformOrigin: o && r ? Bb(r, s) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...l
  };
  return me.createElement(n, {
    className: a,
    style: h,
    ref: t
  }, i);
}), qy = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const o = {}, {
    styles: i,
    className: a
  } = e;
  if (i != null && i.active)
    for (const [s, l] of Object.entries(i.active))
      l !== void 0 && (o[s] = n.node.style.getPropertyValue(s), n.node.style.setProperty(s, l));
  if (i != null && i.dragOverlay)
    for (const [s, l] of Object.entries(i.dragOverlay))
      l !== void 0 && r.node.style.setProperty(s, l);
  return a != null && a.active && n.node.classList.add(a.active), a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay), function() {
    for (const [l, c] of Object.entries(o))
      n.node.style.setProperty(l, c);
    a != null && a.active && n.node.classList.remove(a.active);
  };
}, Zy = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Nt.Transform.toString(t)
  }, {
    transform: Nt.Transform.toString(n)
  }];
}, Jy = {
  duration: 250,
  easing: "ease",
  keyframes: Zy,
  sideEffects: /* @__PURE__ */ qy({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Qy(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: o
  } = e;
  return Br((i, a) => {
    if (t === null)
      return;
    const s = n.get(i);
    if (!s)
      return;
    const l = s.node.current;
    if (!l)
      return;
    const c = su(a);
    if (!c)
      return;
    const {
      transform: d
    } = _e(a).getComputedStyle(a), u = qc(d);
    if (!u)
      return;
    const h = typeof t == "function" ? t : ew(t);
    return ru(l, o.draggable.measure), h({
      active: {
        id: i,
        data: s.data,
        node: l,
        rect: o.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: a,
        rect: o.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: o,
      transform: u
    });
  });
}
function ew(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: o
  } = {
    ...Jy,
    ...e
  };
  return (i) => {
    let {
      active: a,
      dragOverlay: s,
      transform: l,
      ...c
    } = i;
    if (!t)
      return;
    const d = {
      x: s.rect.left - a.rect.left,
      y: s.rect.top - a.rect.top
    }, u = {
      scaleX: l.scaleX !== 1 ? a.rect.width * l.scaleX / s.rect.width : 1,
      scaleY: l.scaleY !== 1 ? a.rect.height * l.scaleY / s.rect.height : 1
    }, h = {
      x: l.x - d.x,
      y: l.y - d.y,
      ...u
    }, g = o({
      ...c,
      active: a,
      dragOverlay: s,
      transform: {
        initial: l,
        final: h
      }
    }), [b] = g, p = g[g.length - 1];
    if (JSON.stringify(b) === JSON.stringify(p))
      return;
    const v = r?.({
      active: a,
      dragOverlay: s,
      ...c
    }), w = s.node.animate(g, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((N) => {
      w.onfinish = () => {
        v?.(), N();
      };
    });
  };
}
let Gs = 0;
function tw(e) {
  return Y(() => {
    if (e != null)
      return Gs++, Gs;
  }, [e]);
}
const nw = /* @__PURE__ */ me.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: o,
    transition: i,
    modifiers: a,
    wrapperElement: s = "div",
    className: l,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: g,
    draggableNodes: b,
    droppableContainers: p,
    dragOverlay: v,
    over: w,
    measuringConfiguration: N,
    scrollableAncestors: x,
    scrollableAncestorRects: y,
    windowRect: P
  } = uu(), E = xe(Vr), C = tw(u?.id), S = cu(a, {
    activatorEvent: d,
    active: u,
    activeNodeRect: h,
    containerNodeRect: g,
    draggingNodeRect: v.rect,
    over: w,
    overlayNodeRect: v.rect,
    scrollableAncestors: x,
    scrollableAncestorRects: y,
    transform: E,
    windowRect: P
  }), R = Di(h), I = Qy({
    config: r,
    draggableNodes: b,
    droppableContainers: p,
    measuringConfiguration: N
  }), k = R ? v.setRef : void 0;
  return me.createElement(Gy, null, me.createElement(Vy, {
    animation: I
  }, u && C ? me.createElement(Xy, {
    key: C,
    id: u.id,
    ref: k,
    as: s,
    activatorEvent: d,
    adjustScale: t,
    className: l,
    transition: i,
    rect: R,
    style: {
      zIndex: c,
      ...o
    },
    transform: S
  }, n) : null));
});
function Mi(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function rw(e, t) {
  return e.reduce((n, r, o) => {
    const i = t.get(r);
    return i && (n[o] = i), n;
  }, Array(e.length));
}
function or(e) {
  return e !== null && e >= 0;
}
function ow(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function iw(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Oi = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: o
  } = e;
  const i = Mi(t, r, n), a = t[o], s = i[o];
  return !s || !a ? null : {
    x: s.left - a.left,
    y: s.top - a.top,
    scaleX: s.width / a.width,
    scaleY: s.height / a.height
  };
}, du = "Sortable", fu = /* @__PURE__ */ me.createContext({
  activeIndex: -1,
  containerId: du,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Oi,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function sw(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: o = Oi,
    disabled: i = !1
  } = e;
  const {
    active: a,
    dragOverlay: s,
    droppableRects: l,
    over: c,
    measureDroppableContainers: d
  } = uu(), u = Bn(du, n), h = s.rect !== null, g = Y(() => r.map((E) => typeof E == "object" && "id" in E ? E.id : E), [r]), b = a != null, p = a ? g.indexOf(a.id) : -1, v = c ? g.indexOf(c.id) : -1, w = de(g), N = !ow(g, w.current), x = v !== -1 && p === -1 || N, y = iw(i);
  qe(() => {
    N && b && d(g);
  }, [N, g, b, d]), ue(() => {
    w.current = g;
  }, [g]);
  const P = Y(
    () => ({
      activeIndex: p,
      containerId: u,
      disabled: y,
      disableTransforms: x,
      items: g,
      overIndex: v,
      useDragOverlay: h,
      sortedRects: rw(g, l),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, u, y.draggable, y.droppable, x, g, v, l, h, o]
  );
  return me.createElement(fu.Provider, {
    value: P
  }, t);
}
const aw = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: o
  } = e;
  return Mi(n, r, o).indexOf(t);
}, lw = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: o,
    items: i,
    newIndex: a,
    previousItems: s,
    previousContainerId: l,
    transition: c
  } = e;
  return !c || !r || s !== i && o === a ? !1 : n ? !0 : a !== o && t === l;
}, cw = {
  duration: 200,
  easing: "ease"
}, hu = "transform", uw = /* @__PURE__ */ Nt.Transition.toString({
  property: hu,
  duration: 0,
  easing: "linear"
}), dw = {
  roleDescription: "sortable"
};
function fw(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: o
  } = e;
  const [i, a] = te(null), s = de(n);
  return qe(() => {
    if (!t && n !== s.current && r.current) {
      const l = o.current;
      if (l) {
        const c = an(r.current, {
          ignoreTransform: !0
        }), d = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (d.x || d.y) && a(d);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, o]), ue(() => {
    i && a(null);
  }, [i]), i;
}
function hw(e) {
  let {
    animateLayoutChanges: t = lw,
    attributes: n,
    disabled: r,
    data: o,
    getNewIndex: i = aw,
    id: a,
    strategy: s,
    resizeObserverConfig: l,
    transition: c = cw
  } = e;
  const {
    items: d,
    containerId: u,
    activeIndex: h,
    disabled: g,
    disableTransforms: b,
    sortedRects: p,
    overIndex: v,
    useDragOverlay: w,
    strategy: N
  } = xe(fu), x = mw(r, g), y = d.indexOf(a), P = Y(() => ({
    sortable: {
      containerId: u,
      index: y,
      items: d
    },
    ...o
  }), [u, o, y, d]), E = Y(() => d.slice(d.indexOf(a)), [d, a]), {
    rect: C,
    node: S,
    isOver: R,
    setNodeRef: I
  } = jy({
    id: a,
    data: P,
    disabled: x.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: E,
      ...l
    }
  }), {
    active: k,
    activatorEvent: O,
    activeNodeRect: z,
    attributes: F,
    setNodeRef: K,
    listeners: M,
    isDragging: T,
    over: $,
    setActivatorNodeRef: _,
    transform: L
  } = By({
    id: a,
    data: P,
    attributes: {
      ...dw,
      ...n
    },
    disabled: x.draggable
  }), G = Pb(I, K), U = !!k, ie = U && !b && or(h) && or(v), le = !w && T, ne = le && ie ? L : null, H = ie ? ne ?? (s ?? N)({
    rects: p,
    activeNodeRect: z,
    activeIndex: h,
    overIndex: v,
    index: y
  }) : null, ee = or(h) && or(v) ? i({
    id: a,
    items: d,
    activeIndex: h,
    overIndex: v
  }) : y, J = k?.id, X = de({
    activeId: J,
    items: d,
    newIndex: ee,
    containerId: u
  }), oe = d !== X.current.items, ce = t({
    active: k,
    containerId: u,
    isDragging: T,
    isSorting: U,
    id: a,
    index: y,
    items: d,
    newIndex: X.current.newIndex,
    previousItems: X.current.items,
    previousContainerId: X.current.containerId,
    transition: c,
    wasDragging: X.current.activeId != null
  }), he = fw({
    disabled: !ce,
    index: y,
    node: S,
    rect: C
  });
  return ue(() => {
    U && X.current.newIndex !== ee && (X.current.newIndex = ee), u !== X.current.containerId && (X.current.containerId = u), d !== X.current.items && (X.current.items = d);
  }, [U, ee, u, d]), ue(() => {
    if (J === X.current.activeId)
      return;
    if (J != null && X.current.activeId == null) {
      X.current.activeId = J;
      return;
    }
    const Re = setTimeout(() => {
      X.current.activeId = J;
    }, 50);
    return () => clearTimeout(Re);
  }, [J]), {
    active: k,
    activeIndex: h,
    attributes: F,
    data: P,
    rect: C,
    index: y,
    newIndex: ee,
    items: d,
    isOver: R,
    isSorting: U,
    isDragging: T,
    listeners: M,
    node: S,
    overIndex: v,
    over: $,
    setNodeRef: G,
    setActivatorNodeRef: _,
    setDroppableNodeRef: I,
    setDraggableNodeRef: K,
    transform: he ?? H,
    transition: pe()
  };
  function pe() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      he || // Or to prevent items jumping to back to their "new" position when items change
      oe && X.current.newIndex === y
    )
      return uw;
    if (!(le && !Kr(O) || !c) && (U || ce))
      return Nt.Transition.toString({
        ...c,
        property: hu
      });
  }
}
function mw(e, t) {
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
function Rr(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const gw = [ae.Down, ae.Right, ae.Up, ae.Left], pw = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: o,
      droppableContainers: i,
      over: a,
      scrollableAncestors: s
    }
  } = t;
  if (gw.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const l = [];
    i.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const h = o.get(u.id);
      if (h)
        switch (e.code) {
          case ae.Down:
            r.top < h.top && l.push(u);
            break;
          case ae.Up:
            r.top > h.top && l.push(u);
            break;
          case ae.Left:
            r.left > h.left && l.push(u);
            break;
          case ae.Right:
            r.left < h.left && l.push(u);
            break;
        }
    });
    const c = jb({
      collisionRect: r,
      droppableRects: o,
      droppableContainers: l
    });
    let d = Yc(c, "id");
    if (d === a?.id && c.length > 1 && (d = c[1].id), d != null) {
      const u = i.get(n.id), h = i.get(d), g = h ? o.get(h.id) : null, b = h?.node.current;
      if (b && g && u && h) {
        const v = Wr(b).some((E, C) => s[C] !== E), w = mu(u, h), N = vw(u, h), x = v || !w ? {
          x: 0,
          y: 0
        } : {
          x: N ? r.width - g.width : 0,
          y: N ? r.height - g.height : 0
        }, y = {
          x: g.left,
          y: g.top
        };
        return x.x && x.y ? y : Rn(y, x);
      }
    }
  }
};
function mu(e, t) {
  return !Rr(e) || !Rr(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function vw(e, t) {
  return !Rr(e) || !Rr(t) || !mu(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
function bw({
  item: e,
  index: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  disabled: i = !1
}) {
  const { attributes: a, listeners: s, setNodeRef: l, transform: c, transition: d, isDragging: u } = hw({
    id: o(e),
    disabled: i
  }), h = {
    transform: Nt.Transform.toString(c),
    transition: d
  };
  return /* @__PURE__ */ D("div", { ref: l, style: h, className: `relative group/drag-item ${u ? "opacity-50" : ""} ${i ? "opacity-60" : ""}`, children: [
    n(e, t, u),
    !i && (r ? /* @__PURE__ */ f("div", { ...a, ...s, children: r(e, t) }) : (
      /* If no drag indicator, make entire item draggable */
      /* @__PURE__ */ f(
        "div",
        {
          ...a,
          ...s,
          className: "absolute inset-0 cursor-grab active:cursor-grabbing outline-none touch-none"
        }
      )
    ))
  ] });
}
function yw({
  item: e,
  index: t,
  renderItem: n
}) {
  return /* @__PURE__ */ f("div", { className: "rotate-2", children: n(e, t, !0) });
}
function ww({
  items: e,
  onChange: t,
  renderItem: n,
  renderDragIndicator: r,
  keyExtractor: o,
  gridColsClass: i = "page-drag-drop-grid-cols",
  className: a = "",
  renderToolbar: s,
  renderEmptyState: l,
  showDebugInfo: c = !1,
  renderDragOverlay: d,
  isItemDisabled: u,
  canDropAt: h
}) {
  const [g, b] = te(e);
  ue(() => {
    b(e);
  }, [e]);
  const [p, v] = te(null), w = zb(
    Os(ki),
    Os(Ii, {
      coordinateGetter: pw
    })
  ), N = (E) => {
    const C = g.find((S) => o(S) === E.active.id);
    C && u && u(C) || v(E.active.id);
  }, x = (E) => {
    const { active: C, over: S } = E;
    if (!S || C.id === S.id) {
      v(null);
      return;
    }
    const R = g.find((O) => o(O) === C.id), I = g.findIndex((O) => o(O) === C.id), k = g.findIndex((O) => o(O) === S.id);
    if (R && u && u(R)) {
      v(null);
      return;
    }
    if (h && !h(R, k, g)) {
      v(null);
      return;
    }
    if (I !== -1 && k !== -1) {
      const O = Mi(g, I, k);
      b(O), t(O);
    }
    v(null);
  }, y = g.find((E) => o(E) === p), P = y ? g.findIndex((E) => o(E) === p) : -1;
  return /* @__PURE__ */ D("div", { className: `w-full ${a}`, children: [
    s && /* @__PURE__ */ f("div", { className: "mb-6", children: s() }),
    g.length === 0 && l ? l() : /* @__PURE__ */ f("div", { className: "mb-6", children: /* @__PURE__ */ D(
      Fy,
      {
        sensors: w,
        collisionDetection: Wb,
        onDragStart: N,
        onDragEnd: x,
        children: [
          /* @__PURE__ */ f(sw, { items: g.map(o), strategy: Oi, children: /* @__PURE__ */ f("div", { className: i, children: g.map((E, C) => /* @__PURE__ */ f(
            bw,
            {
              item: E,
              index: C,
              renderItem: n,
              renderDragIndicator: r,
              keyExtractor: o,
              disabled: u ? u(E) : !1
            },
            o(E)
          )) }) }),
          /* @__PURE__ */ f(nw, { children: y ? d ? /* @__PURE__ */ f("div", { className: "rotate-2 shadow-lg", children: d(y, P) }) : /* @__PURE__ */ f(yw, { item: y, index: P, renderItem: n }) : null })
        ]
      }
    ) }),
    c && /* @__PURE__ */ D("div", { className: "fixed top-4 left-4 bg-white rounded-lg border shadow-lg p-3 text-sm max-w-xs", children: [
      /* @__PURE__ */ f("div", { className: "font-medium mb-1", children: "Debug Info" }),
      /* @__PURE__ */ D("div", { className: "text-gray-600 text-xs", children: [
        "Items: ",
        g.length,
        " | Active: ",
        p || "none"
      ] }),
      /* @__PURE__ */ D("div", { className: "text-xs text-gray-500 mt-1 break-all", children: [
        "Order: ",
        g.map((E, C) => `${C + 1}:${o(E).slice(0, 3)}`).join(" → ")
      ] })
    ] })
  ] });
}
const xw = Aa(
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
function Ti({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: se(xw({ variant: t }), e), ...n });
}
function Cw({
  page: e,
  index: t,
  isDragging: n
}) {
  const i = e.strictPosition, a = i === "start" || i === "end";
  return /* @__PURE__ */ D(
    "div",
    {
      className: `flex items-center justify-center border relative rounded-lg bg-white overflow-hidden transition-all ${n ? "opacity-50 border-gray-400 shadow-xl scale-105" : a ? "border-gray-300 bg-gray-50" : "border-gray-200 group-hover/drag-item:border-gray-300 group-hover/drag-item:shadow-md"}`,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "200px",
              height: "280px"
            },
            children: e.content || /* @__PURE__ */ D("div", { className: "text-center p-4", children: [
              /* @__PURE__ */ f("div", { className: "text-sm font-medium text-gray-700", children: e.label || `Page ${t + 1}` }),
              /* @__PURE__ */ f("div", { className: "text-xs text-gray-400 mt-1 font-mono", children: e.id })
            ] })
          }
        ),
        /* @__PURE__ */ f("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ f(Ti, { variant: "secondary", className: `text-xs min-w-[24px] h-6 font-medium bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200 ${a ? "opacity-75" : ""}`, children: a ? /* @__PURE__ */ f(po, { className: "size-3 text-gray-500" }) : /* @__PURE__ */ D(Fe, { children: [
          /* @__PURE__ */ f("span", { className: "group-hover/drag-item:hidden", children: t + 1 }),
          /* @__PURE__ */ f(Pa, { className: "size-4 text-gray-400 hidden group-hover/drag-item:block" })
        ] }) }) })
      ]
    }
  );
}
function Sw({
  open: e,
  onOpenChange: t,
  pages: n,
  onReorder: r,
  onRemove: o,
  renderThumbnail: i,
  pageComponents: a,
  payload: s,
  setup: l,
  title: c = "Reorder Pages",
  description: d = "Drag and drop pages to change their order.",
  gridColsClass: u = "page-order-grid-cols"
}) {
  const [h, g] = m.useState(n), [b, p] = m.useState(!1), v = (R) => R.id;
  m.useEffect(() => {
    if (!e)
      g(n), p(!1);
    else if (!b)
      g(n);
    else {
      const R = new Set(h.map(v));
      (R.size !== n.length || n.some((k) => !R.has(v(k)))) && g(n);
    }
  }, [n, e, b, h]);
  const w = (R) => {
    g(R), p(!0);
  }, N = () => {
    r(h), p(!1), t(!1);
  }, x = () => {
    g(n), p(!1), t(!1);
  }, y = m.useMemo(() => (!i || typeof i != "function") && a ? Ni({ pageComponents: a, payload: s, setup: l }) : null, [i, a, s, l]), P = (R, I, k) => {
    const O = R.strictPosition, F = !!o && !(O === "start" || O === "end"), K = (T) => {
      T.preventDefault(), T.stopPropagation(), o && (o(R), g(($) => $.filter((_) => v(_) !== v(R))), p(!0));
    }, M = i && typeof i == "function" ? i(R, I, k) : y ? y(R, I, k) : /* @__PURE__ */ f(Cw, { page: R, index: I, isDragging: k });
    return /* @__PURE__ */ D("div", { className: "relative inline-block align-top", children: [
      M,
      F && /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          title: "Remove",
          onClick: K,
          onPointerDown: (T) => T.stopPropagation(),
          className: "group/remove-btn absolute -top-3 -right-3 z-30 hidden h-6 w-6 items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-900 backdrop-blur-md group-hover/drag-item:flex border border-gray-200",
          children: [
            /* @__PURE__ */ f(Pa, { className: "size-3.5 opacity-60 group-hover/remove-btn:hidden" }),
            /* @__PURE__ */ f(lt, { className: "size-3.5 rotate-45 hidden group-hover/remove-btn:block" })
          ]
        }
      )
    ] });
  }, E = () => /* @__PURE__ */ D("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ f("div", { className: "w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ f(ns, { className: "w-6 h-6 text-gray-400" }) }),
    /* @__PURE__ */ f("div", { className: "text-base font-medium text-gray-900 mb-1", children: "No pages found" }),
    /* @__PURE__ */ f("p", { className: "text-sm text-gray-500", children: "Add some pages to get started with reordering." })
  ] }), C = m.useCallback((R) => {
    const I = R.strictPosition;
    return I === "start" || I === "end";
  }, []), S = m.useCallback((R, I, k) => {
    const O = R.strictPosition;
    if (O === "start" || O === "end")
      return !1;
    let z = -1, F = k.length;
    for (let K = 0; K < k.length; K++) {
      const M = k[K].strictPosition;
      M === "start" ? z = K : M === "end" && F === k.length && (F = K);
    }
    return !(I <= z || I >= F);
  }, []);
  return /* @__PURE__ */ f(Bc, { open: e, onOpenChange: (R) => {
    R || x();
  }, children: /* @__PURE__ */ D(
    wi,
    {
      side: "bottom",
      className: "h-[90vh] p-0 gap-0 w-full max-w-none flex flex-col [&>button]:hidden",
      onPointerDownOutside: (R) => {
        R.preventDefault();
      },
      onEscapeKeyDown: (R) => {
        R.preventDefault();
      },
      "data-uhuu-editor": !0,
      children: [
        /* @__PURE__ */ f(xi, { className: "border-b border-gray-200 p-4", children: /* @__PURE__ */ D("div", { className: "flex items-end gap-3", children: [
          /* @__PURE__ */ f("div", { className: "w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mb-0.5", children: /* @__PURE__ */ f(ns, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ D("div", { className: "flex-1", children: [
            /* @__PURE__ */ f(Ci, { className: "text-base font-medium text-gray-900 leading-tight", children: c }),
            /* @__PURE__ */ f(Si, { className: "text-xs text-gray-400 mt-0.5", children: d })
          ] }),
          /* @__PURE__ */ D(Ti, { variant: "outline", className: "text-xs mb-0.5 mr-8", children: [
            h.length,
            " ",
            h.length === 1 ? "page" : "pages"
          ] })
        ] }) }),
        /* @__PURE__ */ f("div", { className: "flex-1 overflow-hidden flex flex-col", children: /* @__PURE__ */ f("div", { className: "flex-1 overflow-auto p-6 bg-gray-50", children: /* @__PURE__ */ f(
          ww,
          {
            items: h,
            onChange: w,
            renderItem: P,
            keyExtractor: v,
            renderEmptyState: E,
            gridColsClass: u,
            className: "pb-4",
            isItemDisabled: C,
            canDropAt: S
          }
        ) }) }),
        /* @__PURE__ */ D(Wc, { className: "border-t border-gray-200 px-4 py-3 gap-3", children: [
          /* @__PURE__ */ f(
            ke,
            {
              variant: "outline",
              onClick: x,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ f(
            ke,
            {
              variant: "default",
              onClick: N,
              disabled: !b,
              children: "Save Changes"
            }
          )
        ] })
      ]
    }
  ) });
}
function Nw({
  pageId: e,
  templateId: t,
  componentKey: n,
  component: r,
  payload: o,
  pagePayload: i,
  integration: a,
  page: s,
  parentGroup: l,
  setup: c,
  reference: d,
  overlay: u,
  className: h,
  pageNo: g = 0,
  totalPages: b,
  measurementPageNo: p,
  measurementTotalPages: v,
  dataBinding: w,
  flowPageIndex: N = 0,
  flowChunksByFlowId: x,
  measureFlow: y = !1,
  flowMeasurementKey: P,
  flowMeasurementVersion: E,
  onFlowMeasurement: C,
  renderVisible: S = !0
}) {
  const R = typeof u == "function" ? (T) => u({ pageNo: T, pageId: e }) : () => u, I = n || t || e, O = [I ? `uhuu-page--${I}` : "", h].filter(Boolean).join(" "), z = (T = g, $ = b) => r ? /* @__PURE__ */ f(
    r,
    {
      payload: o,
      pagePayload: i,
      integration: a,
      pageId: e,
      templateId: t ?? n ?? e,
      pageNum: T,
      totalPages: $,
      page: s,
      parentGroup: l,
      componentKey: n,
      dataBinding: w
    }
  ) : null, F = m.useMemo(
    () => ({
      mode: "visible",
      pageIndex: N,
      chunksByFlowId: x
    }),
    [N, x]
  ), K = m.useCallback((T) => {
    P && C?.(P, T);
  }, [P, C]), M = m.useMemo(
    () => ({
      mode: "measure",
      pageIndex: 0,
      measurementVersion: E,
      registerMeasurement: K
    }),
    [E, K]
  );
  return /* @__PURE__ */ D(Fe, { children: [
    y && C && P && /* @__PURE__ */ f(
      "div",
      {
        style: {
          position: "fixed",
          visibility: "hidden",
          pointerEvents: "none",
          left: "-100000px",
          top: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
          zIndex: -1
        },
        "aria-hidden": "true",
        "data-uhuu-flow-measurement": "true",
        children: /* @__PURE__ */ f(ho, { setup: c, children: /* @__PURE__ */ f(mo, { className: O, pageNo: g, "data-page-key": I, children: /* @__PURE__ */ f(ur.Provider, { value: M, children: z(
          p ?? g,
          v ?? b
        ) }) }) })
      }
    ),
    S && /* @__PURE__ */ f(ho, { setup: c, children: /* @__PURE__ */ D(
      mo,
      {
        className: O,
        pageNo: g,
        overlay: ({ pageNo: T }) => R(T),
        "data-page-key": I,
        children: [
          d,
          /* @__PURE__ */ f(ur.Provider, { value: F, children: z(g, b) })
        ]
      }
    ) })
  ] });
}
const gu = m.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
    "select",
    {
      className: se(
        "flex h-8 w-full rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-900 outline-none transition-colors focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
      children: t
    }
  )
);
gu.displayName = "Select";
function pu(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Hr = "Switch", [Pw] = ht(Hr), [Ew, Rw] = Pw(Hr), vu = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: d,
      ...u
    } = e, [h, g] = m.useState(null), b = ve(t, (x) => g(x)), p = m.useRef(!1), v = h ? d || !!h.closest("form") : !0, [w, N] = kn({
      prop: o,
      defaultProp: i ?? !1,
      onChange: c,
      caller: Hr
    });
    return /* @__PURE__ */ D(Ew, { scope: n, checked: w, disabled: s, children: [
      /* @__PURE__ */ f(
        be.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": xu(w),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...u,
          ref: b,
          onClick: Z(e.onClick, (x) => {
            N((y) => !y), v && (p.current = x.isPropagationStopped(), p.current || x.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ f(
        wu,
        {
          control: h,
          bubbles: !p.current,
          name: r,
          value: l,
          checked: w,
          required: a,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
vu.displayName = Hr;
var bu = "SwitchThumb", yu = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Rw(bu, n);
    return /* @__PURE__ */ f(
      be.span,
      {
        "data-state": xu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
yu.displayName = bu;
var Iw = "SwitchBubbleInput", wu = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, i) => {
    const a = m.useRef(null), s = ve(a, i), l = pu(n), c = Xo(t);
    return m.useEffect(() => {
      const d = a.current;
      if (!d) return;
      const u = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== n && g) {
        const b = new Event("click", { bubbles: r });
        g.call(d, n), d.dispatchEvent(b);
      }
    }, [l, n, r]), /* @__PURE__ */ f(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
wu.displayName = Iw;
function xu(e) {
  return e ? "checked" : "unchecked";
}
var Cu = vu, Aw = yu;
const Su = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Cu,
  {
    ref: n,
    className: se(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f(
      Aw,
      {
        className: se(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Su.displayName = Cu.displayName;
function Nu(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Pu = ["PageUp", "PageDown"], Eu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ru = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, ln = "Slider", [Ao, kw, Dw] = zo(ln), [Iu] = ht(ln, [
  Dw
]), [Mw, Gr] = Iu(ln), Au = m.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: i = 1,
      orientation: a = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: d,
      onValueChange: u = () => {
      },
      onValueCommit: h = () => {
      },
      inverted: g = !1,
      form: b,
      ...p
    } = e, v = m.useRef(/* @__PURE__ */ new Set()), w = m.useRef(0), x = a === "horizontal" ? Ow : Tw, [y = [], P] = kn({
      prop: d,
      defaultProp: c,
      onChange: (k) => {
        [...v.current][w.current]?.focus(), u(k);
      }
    }), E = m.useRef(y);
    function C(k) {
      const O = zw(y, k);
      I(k, O);
    }
    function S(k) {
      I(k, w.current);
    }
    function R() {
      const k = E.current[w.current];
      y[w.current] !== k && h(y);
    }
    function I(k, O, { commit: z } = { commit: !1 }) {
      const F = jw(i), K = Vw(Math.round((k - r) / i) * i + r, F), M = Nu(K, [r, o]);
      P((T = []) => {
        const $ = Fw(T, M, O);
        if (Ww($, l * i)) {
          w.current = $.indexOf(M);
          const _ = String($) !== String(T);
          return _ && z && h($), _ ? $ : T;
        } else
          return T;
      });
    }
    return /* @__PURE__ */ f(
      Mw,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: w,
        thumbs: v.current,
        values: y,
        orientation: a,
        form: b,
        children: /* @__PURE__ */ f(Ao.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(Ao.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...p,
            ref: t,
            onPointerDown: Z(p.onPointerDown, () => {
              s || (E.current = y);
            }),
            min: r,
            max: o,
            inverted: g,
            onSlideStart: s ? void 0 : C,
            onSlideMove: s ? void 0 : S,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && I(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && I(o, y.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: k, direction: O }) => {
              if (!s) {
                const K = Pu.includes(k.key) || k.shiftKey && Eu.includes(k.key) ? 10 : 1, M = w.current, T = y[M], $ = i * K * O;
                I(T + $, M, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Au.displayName = ln;
var [ku, Du] = Iu(ln, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Ow = m.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: i,
      onSlideStart: a,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...d
    } = e, [u, h] = m.useState(null), g = ve(t, (x) => h(x)), b = m.useRef(void 0), p = Bo(o), v = p === "ltr", w = v && !i || !v && i;
    function N(x) {
      const y = b.current || u.getBoundingClientRect(), P = [0, y.width], C = _i(P, w ? [n, r] : [r, n]);
      return b.current = y, C(x - y.left);
    }
    return /* @__PURE__ */ f(
      ku,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ f(
          Mu,
          {
            dir: p,
            "data-orientation": "horizontal",
            ...d,
            ref: g,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const y = N(x.clientX);
              a?.(y);
            },
            onSlideMove: (x) => {
              const y = N(x.clientX);
              s?.(y);
            },
            onSlideEnd: () => {
              b.current = void 0, l?.();
            },
            onStepKeyDown: (x) => {
              const P = Ru[w ? "from-left" : "from-right"].includes(x.key);
              c?.({ event: x, direction: P ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Tw = m.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: i,
      onSlideMove: a,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...c
    } = e, d = m.useRef(null), u = ve(t, d), h = m.useRef(void 0), g = !o;
    function b(p) {
      const v = h.current || d.current.getBoundingClientRect(), w = [0, v.height], x = _i(w, g ? [r, n] : [n, r]);
      return h.current = v, x(p - v.top);
    }
    return /* @__PURE__ */ f(
      ku,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "bottom" : "top",
        endEdge: g ? "top" : "bottom",
        size: "height",
        direction: g ? 1 : -1,
        children: /* @__PURE__ */ f(
          Mu,
          {
            "data-orientation": "vertical",
            ...c,
            ref: u,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (p) => {
              const v = b(p.clientY);
              i?.(v);
            },
            onSlideMove: (p) => {
              const v = b(p.clientY);
              a?.(v);
            },
            onSlideEnd: () => {
              h.current = void 0, s?.();
            },
            onStepKeyDown: (p) => {
              const w = Ru[g ? "from-bottom" : "from-top"].includes(p.key);
              l?.({ event: p, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Mu = m.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: i,
      onHomeKeyDown: a,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...c
    } = e, d = Gr(ln, n);
    return /* @__PURE__ */ f(
      be.span,
      {
        ...c,
        ref: t,
        onKeyDown: Z(e.onKeyDown, (u) => {
          u.key === "Home" ? (a(u), u.preventDefault()) : u.key === "End" ? (s(u), u.preventDefault()) : Pu.concat(Eu).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: Z(e.onPointerDown, (u) => {
          const h = u.target;
          h.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(h) ? h.focus() : r(u);
        }),
        onPointerMove: Z(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && o(u);
        }),
        onPointerUp: Z(e.onPointerUp, (u) => {
          const h = u.target;
          h.hasPointerCapture(u.pointerId) && (h.releasePointerCapture(u.pointerId), i(u));
        })
      }
    );
  }
), Ou = "SliderTrack", Tu = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Gr(Ou, n);
    return /* @__PURE__ */ f(
      be.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
Tu.displayName = Ou;
var ko = "SliderRange", _u = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = Gr(ko, n), i = Du(ko, n), a = m.useRef(null), s = ve(t, a), l = o.values.length, c = o.values.map(
      (h) => $u(h, o.min, o.max)
    ), d = l > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
    return /* @__PURE__ */ f(
      be.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [i.startEdge]: d + "%",
          [i.endEdge]: u + "%"
        }
      }
    );
  }
);
_u.displayName = ko;
var Do = "SliderThumb", Lu = m.forwardRef(
  (e, t) => {
    const n = kw(e.__scopeSlider), [r, o] = m.useState(null), i = ve(t, (s) => o(s)), a = m.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ f(_w, { ...e, ref: i, index: a });
  }
), _w = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...i } = e, a = Gr(Do, n), s = Du(Do, n), [l, c] = m.useState(null), d = ve(t, (N) => c(N)), u = l ? a.form || !!l.closest("form") : !0, h = Xo(l), g = a.values[r], b = g === void 0 ? 0 : $u(g, a.min, a.max), p = $w(r, a.values.length), v = h?.[s.size], w = v ? Bw(v, b, s.direction) : 0;
    return m.useEffect(() => {
      if (l)
        return a.thumbs.add(l), () => {
          a.thumbs.delete(l);
        };
    }, [l, a.thumbs]), /* @__PURE__ */ D(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${b}% + ${w}px)`
        },
        children: [
          /* @__PURE__ */ f(Ao.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f(
            be.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || p,
              "aria-valuemin": a.min,
              "aria-valuenow": g,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...i,
              ref: d,
              style: g === void 0 ? { display: "none" } : e.style,
              onFocus: Z(e.onFocus, () => {
                a.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          u && /* @__PURE__ */ f(
            Fu,
            {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: g
            },
            r
          )
        ]
      }
    );
  }
);
Lu.displayName = Do;
var Lw = "RadioBubbleInput", Fu = m.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = m.useRef(null), i = ve(o, r), a = pu(t);
    return m.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (a !== t && d) {
        const u = new Event("input", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ f(
      be.input,
      {
        style: { display: "none" },
        ...n,
        ref: i,
        defaultValue: t
      }
    );
  }
);
Fu.displayName = Lw;
function Fw(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
function $u(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return Nu(i, [0, 100]);
}
function $w(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function zw(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function Bw(e, t, n) {
  const r = e / 2, i = _i([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
function Kw(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Ww(e, t) {
  if (t > 0) {
    const n = Kw(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function _i(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function jw(e) {
  return (String(e).split(".")[1] || "").length;
}
function Vw(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var zu = Au, Hw = Tu, Gw = _u, Uw = Lu;
const Li = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ D(
  zu,
  {
    ref: n,
    className: se(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f(Hw, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ f(Gw, { className: "absolute h-full bg-gray-900" }) }),
      /* @__PURE__ */ f(Uw, { className: "block h-4 w-4 rounded-full border-2 border-gray-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Li.displayName = zu.displayName;
var Yw = /* @__PURE__ */ Symbol.for("react.lazy"), Ir = m[" use ".trim().toString()];
function Xw(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Bu(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Yw && "_payload" in e && Xw(e._payload);
}
// @__NO_SIDE_EFFECTS__
function qw(e) {
  const t = /* @__PURE__ */ Zw(e), n = m.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    Bu(i) && typeof Ir == "function" && (i = Ir(i._payload));
    const s = m.Children.toArray(i), l = s.find(Qw);
    if (l) {
      const c = l.props.children, d = s.map((u) => u === l ? m.Children.count(c) > 1 ? m.Children.only(null) : m.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: m.isValidElement(c) ? m.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Zw(e) {
  const t = m.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (Bu(o) && typeof Ir == "function" && (o = Ir(o._payload)), m.isValidElement(o)) {
      const a = t0(o), s = e0(i, o.props);
      return o.type !== m.Fragment && (s.ref = r ? An(r, a) : a), m.cloneElement(o, s);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Jw = /* @__PURE__ */ Symbol("radix.slottable");
function Qw(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jw;
}
function e0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function t0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var n0 = [
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
], r0 = n0.reduce((e, t) => {
  const n = /* @__PURE__ */ qw(`Primitive.${t}`), r = m.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), o0 = "Label", Ku = m.forwardRef((e, t) => /* @__PURE__ */ f(
  r0.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ku.displayName = o0;
var Wu = Ku;
const Ht = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Wu,
  {
    ref: n,
    className: se(
      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...t
  }
));
Ht.displayName = Wu.displayName;
function ju(e, t) {
  const n = (r, o) => r.appliesTo ? (Array.isArray(r.appliesTo) ? r.appliesTo : [r.appliesTo]).some((a) => typeof a == "function" ? a(o) : a === o.id || a === o.templateId || o.componentKey === a) : !0;
  return e.filter((r) => {
    if (!n(r, t)) return !1;
    const o = r.getValue(t);
    return r.type === "select" || r.type === "color-series" ? o !== "" : !0;
  });
}
function i0({
  pageOptions: e,
  targetItem: t,
  onChange: n
}) {
  const r = ju(e, t), o = (i) => {
    const a = i.getValue(t);
    switch (i.type) {
      case "select":
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(Ht, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ f(
            gu,
            {
              id: i.id,
              value: String(a),
              onChange: (s) => n(i, t, s.target.value),
              className: "w-full text-sm",
              children: i.options.map((s) => /* @__PURE__ */ f("option", { value: s.value, children: s.label }, s.value))
            }
          )
        ] }, i.id);
      case "toggle": {
        const s = typeof a == "boolean" ? a : a === "true";
        return /* @__PURE__ */ D("div", { className: "flex items-center justify-between py-1.5", children: [
          /* @__PURE__ */ f(Ht, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ f(
            Su,
            {
              id: i.id,
              checked: s,
              onCheckedChange: (l) => n(i, t, String(l))
            }
          )
        ] }, i.id);
      }
      case "slider": {
        const s = typeof a == "number" ? a : Number(a) || i.min;
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ D("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ f(Ht, { htmlFor: i.id, className: "text-xs font-medium text-gray-500", children: i.label }),
            /* @__PURE__ */ f("span", { className: "text-xs font-mono tabular-nums text-gray-700", children: s })
          ] }),
          /* @__PURE__ */ f(
            Li,
            {
              id: i.id,
              min: i.min,
              max: i.max,
              step: i.step,
              value: [s],
              onValueChange: (l) => n(i, t, String(l[0]))
            }
          )
        ] }, i.id);
      }
      case "counter": {
        const s = typeof a == "number" ? a : Number(a) || i.min;
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(Ht, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ f(
              ke,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const l = Math.max(i.min, s - i.step);
                  n(i, t, String(l));
                },
                disabled: s <= i.min,
                type: "button",
                children: /* @__PURE__ */ f(uh, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ f("div", { className: "flex-1 text-center px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200", children: /* @__PURE__ */ f("span", { className: "text-sm font-mono tabular-nums font-medium text-gray-900", children: s }) }),
            /* @__PURE__ */ f(
              ke,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 w-8 shrink-0 p-0",
                onClick: () => {
                  const l = Math.min(i.max, s + i.step);
                  n(i, t, String(l));
                },
                disabled: s >= i.max,
                type: "button",
                children: /* @__PURE__ */ f(lt, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }, i.id);
      }
      case "color-series": {
        const s = String(a);
        return /* @__PURE__ */ D("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ f(Ht, { className: "text-xs font-medium text-gray-500", children: i.label }),
          /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-1.5", children: i.options.map((l) => {
            const c = s === l.value;
            return /* @__PURE__ */ f(
              "button",
              {
                onClick: () => n(i, t, l.value),
                className: `h-7 w-7 rounded-md border-2 transition-all flex items-center justify-center ${c ? "border-gray-900 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"}`,
                style: { backgroundColor: l.hex || l.value },
                type: "button",
                title: `${l.label}${l.hex ? ` (${l.hex})` : ""}`,
                children: c && /* @__PURE__ */ f(fr, { className: "h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]", strokeWidth: 3 })
              },
              l.value
            );
          }) })
        ] }, i.id);
      }
      default:
        return console.warn(`Unknown option type: ${i.type}`), null;
    }
  };
  return /* @__PURE__ */ f("div", { className: "space-y-3", children: r.map((i) => o(i)) });
}
function s0({
  pageOptions: e,
  targetItem: t,
  onChange: n,
  title: r = "Options",
  triggerClassName: o
}) {
  return !t || ju(e, t).length === 0 ? null : /* @__PURE__ */ D(_n, { modal: !1, children: [
    /* @__PURE__ */ f(Ln, { asChild: !0, className: o || "page-options-trigger", children: /* @__PURE__ */ D(
      ke,
      {
        variant: "ghost",
        size: "sm",
        className: "h-7 w-7 text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200 rounded-md",
        title: r,
        children: [
          /* @__PURE__ */ f(Na, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ f(rn, { className: "min-w-48 p-3", align: "center", children: /* @__PURE__ */ f(
      i0,
      {
        pageOptions: e,
        targetItem: t,
        onChange: n
      }
    ) })
  ] });
}
function a0({
  name: e,
  canRename: t,
  canMoveUp: n,
  canMoveDown: r,
  canAddPage: o,
  canDuplicate: i,
  canDelete: a,
  onRename: s,
  onMoveUp: l,
  onMoveDown: c,
  onAddPage: d,
  onDuplicate: u,
  onDelete: h
}) {
  const [g, b] = te(!1), [p, v] = te(!1), [w, N] = te(e), x = de(null);
  ue(() => {
    N(e);
  }, [e]), ue(() => {
    p && setTimeout(() => {
      x.current?.focus(), x.current?.select();
    }, 10);
  }, [p]);
  const y = () => {
    const C = w.trim();
    C && C !== e && s?.(C), v(!1);
  }, P = n || r || o || i || a, E = t || P;
  return p ? /* @__PURE__ */ f(
    "input",
    {
      ref: x,
      value: w,
      onChange: (C) => N(C.target.value),
      onKeyDown: (C) => {
        C.key === "Enter" && y(), C.key === "Escape" && (N(e), v(!1)), C.stopPropagation();
      },
      onBlur: y,
      className: "text-xs font-medium text-gray-800 bg-white border border-blue-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/30 max-w-[140px] h-7",
      "data-uhuu-editor": !0
    }
  ) : E ? /* @__PURE__ */ D(_n, { open: g, onOpenChange: b, modal: !1, children: [
    /* @__PURE__ */ f(Ln, { asChild: !0, children: /* @__PURE__ */ D(
      "button",
      {
        className: "flex items-center gap-1 text-xs font-medium text-gray-700 hover:text-gray-900 rounded-md px-2 h-7 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200",
        "data-uhuu-editor": !0,
        children: [
          /* @__PURE__ */ f("span", { className: "truncate max-w-[120px]", children: e }),
          /* @__PURE__ */ f(Sa, { className: "w-3.5 h-3.5 text-gray-500 shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ D(rn, { className: "min-w-44 p-1", align: "start", children: [
      t && /* @__PURE__ */ D(Ve, { onSelect: (C) => {
        C.preventDefault(), b(!1), v(!0);
      }, children: [
        /* @__PURE__ */ f(fh, { className: "w-3.5 h-3.5 mr-2" }),
        "Rename"
      ] }),
      t && P && /* @__PURE__ */ f(qt, {}),
      n && /* @__PURE__ */ D(Ve, { onClick: l, children: [
        /* @__PURE__ */ f(Xf, { className: "w-3.5 h-3.5 mr-2" }),
        "Move up"
      ] }),
      r && /* @__PURE__ */ D(Ve, { onClick: c, children: [
        /* @__PURE__ */ f(Gf, { className: "w-3.5 h-3.5 mr-2" }),
        "Move down"
      ] }),
      o && (n || r) && /* @__PURE__ */ f(qt, {}),
      o && /* @__PURE__ */ D(Ve, { onClick: d, children: [
        /* @__PURE__ */ f(lt, { className: "w-3.5 h-3.5 mr-2" }),
        "Add page"
      ] }),
      i && /* @__PURE__ */ D(Ve, { onClick: u, children: [
        /* @__PURE__ */ f(rh, { className: "w-3.5 h-3.5 mr-2" }),
        "Duplicate"
      ] }),
      a && /* @__PURE__ */ f(qt, {}),
      a && /* @__PURE__ */ D(Ve, { onClick: h, className: "text-red-600 focus:text-red-700 focus:bg-red-50", children: [
        /* @__PURE__ */ f(vh, { className: "w-3.5 h-3.5 mr-2" }),
        "Delete"
      ] })
    ] })
  ] }) : /* @__PURE__ */ f("span", { className: "text-xs font-medium text-gray-600 truncate max-w-[120px]", children: e });
}
function l0(e) {
  const {
    initialItems: t,
    availableItems: n = [],
    onItemsChange: r,
    onStateChange: o,
    pageComponents: i,
    payload: a,
    setup: s,
    stateKey: l = $t,
    resolveNewItem: c,
    notifyError: d,
    pageFilter: u
  } = e, [h, g] = te(t), [b, p] = te(!1), v = de(t);
  ue(() => {
    try {
      const M = JSON.stringify(v.current), T = JSON.stringify(t);
      M !== T && (v.current = t, g(t));
    } catch {
      v.current !== t && (v.current = t, g(t));
    }
  }, [t]);
  const w = xe(Fn), N = ge((M) => {
    g(M);
    const T = fc(M, l);
    w?.mergePageEditorState && w.mergePageEditorState(M, l), o?.(T), r?.(M, T);
  }, [r, o, l, w]), x = Y(() => {
    const M = /* @__PURE__ */ new Map();
    return h.forEach((T) => {
      const $ = T.templateId ?? T.id;
      M.set($, (M.get($) ?? 0) + 1), Le(T) && T.pages?.forEach((_) => {
        const L = _.templateId ?? _.id;
        M.set(L, (M.get(L) ?? 0) + 1);
      });
    }), M;
  }, [h]), y = Y(() => n.filter((M) => {
    if (M.kind === "page") {
      const U = M, ie = U.templateId ?? U.id, le = x.get(ie) ?? 0, ne = U.repeatable ?? !1, B = U.maxInstances ?? null;
      return !(!ne && le > 0 || B !== null && le >= B);
    }
    const T = M, $ = T.templateId ?? T.id, _ = x.get($) ?? 0, L = T.repeatable ?? !1, G = T.maxInstances ?? null;
    return !(!L && _ > 0 || L && G !== null && _ >= G);
  }), [n, x]), P = Y(() => ct(h), [h]), E = ge(async (M, T) => {
    const $ = (B) => B ? typeof B == "string" ? B : B.mode ?? "optional" : "none", _ = (B, H) => {
      if (!B) return [];
      if (Array.isArray(B)) return B;
      try {
        const ee = B(H);
        if (!Array.isArray(ee))
          return console.error("[uhuu-components] pageComponentKeys function must return an array, got:", typeof ee), [];
        const J = ee.filter((X) => typeof X == "string");
        return J.length !== ee.length && console.warn("[uhuu-components] pageComponentKeys returned non-string values, filtering them out"), J;
      } catch (ee) {
        return console.error("[uhuu-components] Error evaluating pageComponentKeys function:", ee), [];
      }
    }, G = ((B) => {
      if (B.kind === "page") {
        const oe = B, ce = oe.templateId ?? oe.id, he = oe.componentKey ?? oe.id;
        return mc(ce, he, {
          label: oe.label,
          className: oe.className,
          repeatable: oe.repeatable,
          maxInstances: oe.maxInstances,
          integration: oe.integration,
          strictPosition: oe.strictPosition
        });
      }
      const H = B, ee = H.templateId ?? H.id, J = {
        payload: a,
        item: void 0,
        // Will be set after construction
        parent: void 0
      }, X = _(H.pageComponentKeys, J);
      return gc(ee, X, {
        label: H.label,
        repeatable: H.repeatable ?? !1,
        maxInstances: H.maxInstances ?? null,
        integration: H.integration,
        strictPosition: H.strictPosition
      });
    })(M);
    typeof window < "u" && window.$uhuu?.debug;
    let U, ie = G;
    if (c)
      ie = await c(G);
    else {
      const B = $(G.integration);
      let H = !1;
      if (B !== "none" && typeof window < "u") {
        const ee = window.$uhuu?.requestIntegration?.bind(window.$uhuu);
        ee && (U = await ee({ item: G, mode: B }), U == null && B === "required" && (H = !0));
      }
      if (H) return { success: !1 };
    }
    if (ie === null) return { success: !1 };
    const le = ie ?? G;
    if (U !== void 0 && w?.setIntegrationPayload) {
      const B = le.id;
      w.setIntegrationPayload(B, U);
    }
    return N(((B, H, ee) => {
      const J = H.strictPosition;
      if (J === "start") return [H, ...B];
      if (J === "end") return [...B, H];
      const X = [], oe = [], ce = [];
      if (B.forEach((pe) => {
        const Re = pe.strictPosition;
        Re === "start" ? X.push(pe) : Re === "end" ? ce.push(pe) : oe.push(pe);
      }), !ee || ee.mode === "end")
        return [...X, ...oe, H, ...ce];
      const he = oe.findIndex((pe) => pe.id === ee.anchorId);
      return he === -1 ? B.find((Ke) => Ke.id === ee.anchorId)?.strictPosition === "start" ? [...X, H, ...oe, ...ce] : [...X, ...oe, H, ...ce] : (ee.mode === "before" ? oe.splice(he, 0, H) : oe.splice(he + 1, 0, H), [...X, ...oe, ...ce]);
    })(h, le, T)), { success: !0, insertedId: le.id };
  }, [h, N, c, w]), C = ge((M) => {
    const T = (_) => {
      d ? d(_) : alert(_);
    }, $ = h.find((_) => _.id === M);
    if ($) {
      if (ct(h) <= 1) {
        T("Cannot remove the last page. At least one page is required.");
        return;
      }
      if (w?.removeIntegrationPayload) {
        const L = $.id;
        w.payload?.integrations?.[L] !== void 0 && w.removeIntegrationPayload(L);
      }
      N(h.filter((L) => L.id !== M));
      return;
    }
    for (const _ of h)
      if (Le(_) && _.pages.some((L) => L.id === M)) {
        if (ct(h) <= 1) {
          T("Cannot remove the last page. At least one page is required.");
          return;
        }
        if (_.pages.length === 1) {
          if (w?.removeIntegrationPayload) {
            const G = _.id;
            w.payload?.integrations?.[G] !== void 0 && w.removeIntegrationPayload(G);
          }
          N(h.filter((G) => G.id !== _.id));
        } else
          N(h.map((G) => G.id === _.id && Le(G) ? {
            ...G,
            pages: G.pages.filter((U) => U.id !== M)
          } : G));
        return;
      }
  }, [h, d, N, w]), S = ge((M, T) => {
    N(h.map(($) => $.id === M ? Le($) ? {
      ...$,
      ...T
    } : { ...$, ...T } : $));
  }, [h, N]), R = ge((M) => {
    N(M);
  }, [N]), I = Y(() => {
    const M = Yv(h);
    return u ? Qv(M, u) : M;
  }, [h, u]), k = ge((M) => {
    const T = [];
    return I.forEach(($) => {
      Le($) ? ($.pages ?? []).forEach((L) => {
        T.push(M(L, $));
      }) : T.push(M($, $));
    }), T;
  }, [I]), O = Y(
    () => Xv(I),
    [I]
  ), z = ge((M) => {
    const T = qv(M, h);
    N(((_) => {
      const L = [], G = [], U = [];
      return _.forEach((ie) => {
        const le = ie.strictPosition;
        le === "start" ? L.push(ie) : le === "end" ? U.push(ie) : G.push(ie);
      }), [...L, ...G, ...U];
    })(T));
  }, [h, N]), F = ge(() => {
    p(!0);
  }, []), K = Y(() => {
    if (i)
      return Ni({ pageComponents: i, payload: a, setup: s });
  }, [i, a, s]);
  return {
    items: h,
    itemsWithPageNum: I,
    totalPageCount: P,
    availableItemsToAdd: y,
    addItem: E,
    removeItem: C,
    updateItemFields: S,
    reorderItems: R,
    addDialogOpen: b,
    setAddDialogOpen: p,
    openAddDialog: F,
    renderItems: k,
    itemsForReorder: O,
    handleReorder: z,
    defaultRenderThumbnail: K
  };
}
function c0({
  items: e,
  reorderItems: t,
  availableItemsToAdd: n,
  setPendingInsertPosition: r,
  openAddDialog: o
}) {
  const i = Y(
    () => e.filter((s) => !s.strictPosition),
    [e]
  );
  return ge(
    (s, l) => {
      if (!s) return {};
      const c = s.id, d = i.findIndex((v) => v.id === c), u = d !== -1, h = u && d > 0 ? () => {
        const v = [...e], w = v.findIndex((N) => N.id === c);
        w < 1 || ([v[w - 1], v[w]] = [v[w], v[w - 1]], t(v));
      } : void 0, g = u && d < i.length - 1 ? () => {
        const v = [...e], w = v.findIndex((N) => N.id === c);
        w < 0 || w >= v.length - 1 || ([v[w], v[w + 1]] = [v[w + 1], v[w]], t(v));
      } : void 0, b = u && s.repeatable ? () => {
        const w = { ...e.find((y) => y.id === c) ?? s, id: `${c}_copy_${Date.now()}` }, N = [...e], x = N.findIndex((y) => y.id === c);
        N.splice(x < 0 ? N.length : x + 1, 0, w), t(N);
      } : void 0;
      return { onAddPage: l && n.length > 0 ? () => {
        r({ mode: "before", anchorId: l }), o();
      } : void 0, onMoveUp: h, onMoveDown: g, onDuplicate: b };
    },
    [e, i, t, n, r, o]
  );
}
function u0(e = [], t = {}) {
  const n = [];
  let r = 1;
  for (const o of e) {
    const i = o.hasFlow ? t[o.flowKey] : void 0, a = Object.values(i?.flows ?? {}), s = Math.max(1, ...a.map((l) => l.length));
    for (let l = 0; l < s; l += 1)
      n.push({
        ...o,
        pageNum: r++,
        virtualPageId: l === 0 ? o.id : `${o.id}__flow_${l + 1}`,
        virtualPageIndex: l,
        virtualPageCount: s,
        flowChunksByFlowId: i?.flows
      });
  }
  return n;
}
function d0({
  logicalPages: e,
  pageFilter: t,
  layoutKey: n = ""
}) {
  const [r, o] = te({
    layoutKey: n,
    layouts: {}
  }), i = r.layoutKey === n ? r.layouts : {}, a = Y(
    () => e.filter((g) => g.hasFlow).map((g) => g.flowKey).join("|"),
    [e]
  ), s = Y(
    () => new Set(a ? a.split("|") : []),
    [a]
  ), l = Y(() => {
    const g = {};
    for (const b of e) {
      if (!b.hasFlow) continue;
      const p = i[b.flowKey];
      p && (g[b.flowKey] = p);
    }
    return g;
  }, [i, e]), c = ge((g, b) => {
    s.has(g) && o((p) => {
      const v = p.layoutKey === n ? p.layouts : {}, w = {};
      let N = !1;
      for (const [C, S] of Object.entries(v))
        s.has(C) ? w[C] = S : N = !0;
      const x = w[g] ?? { flows: {} }, y = x.flows[b.flowId], P = y ? JSON.stringify(y) : "", E = JSON.stringify(b.chunks);
      return p.layoutKey === n && P === E && !N ? p : {
        layoutKey: n,
        layouts: {
          ...w,
          [g]: {
            flows: {
              ...x.flows,
              [b.flowId]: b.chunks
            }
          }
        }
      };
    });
  }, [s, n]), d = Y(
    () => u0(e, l),
    [e, l]
  ), u = d.length, h = Y(
    () => d.filter((g) => eb(g.pageNum, u, t)),
    [d, u, t]
  );
  return {
    allVirtualPages: d,
    renderedVirtualPages: h,
    virtualTotalPageCount: u,
    registerMeasurement: c
  };
}
function Us(e, t) {
  return e ? t ? `${e}.${t}` : e : null;
}
function f0(e, t, n) {
  return t?.meta?.imageGalleryPath ?? t?.config?.imageGalleryPath ?? t?.imageGalleryPath ?? e?.options?.imageGalleryPath ?? e?.templateSetup?.options?.imageGalleryPath ?? n?.imageGalleryPath;
}
function h0({
  payload: e,
  page: t,
  parentGroup: n,
  pagePayload: r,
  defaults: o
}) {
  const i = bc(e, t, n), a = n && Le(n) ? n.id : void 0, s = `pages.${t.id}`, l = a ? `pages.${a}` : null;
  return {
    payload: e,
    pageId: t.id,
    pagePayload: r,
    parentGroupId: a,
    integration: {
      instanceId: i.instanceId,
      data: i.integration,
      path: (c) => Ds(i.instanceId, c)
    },
    paths: {
      integration: (c) => Ds(i.instanceId, c),
      page: (c) => Us(s, c),
      group: (c) => Us(l, c),
      document: (c) => c ?? null
    },
    defaults: {
      imageGalleryPath: f0(
        e,
        i.integration,
        o
      )
    }
  };
}
const Ys = (e, t, n = !1, r) => {
  const o = typeof e == "string" ? e : e.id, i = r?.[o], a = typeof e == "string" ? i?.componentKey ?? o : e.componentKey ?? i?.componentKey ?? e.id, s = t ?? o, l = (typeof e == "string" ? void 0 : e.repeatable) ?? i?.repeatable ?? !1, c = (typeof e == "string" ? void 0 : e.maxInstances) ?? i?.maxInstances ?? null, d = (typeof e == "string" ? void 0 : e.label) ?? i?.label, u = (typeof e == "string" ? void 0 : e.className) ?? i?.className, h = (typeof e == "string" ? void 0 : e.component) ?? i?.component, g = (typeof e == "string" ? void 0 : e.integration) ?? i?.integration, b = (typeof e == "string" ? void 0 : e.strictPosition) ?? i?.strictPosition, p = (typeof e == "string" ? void 0 : e.hasFlow) ?? i?.hasFlow;
  return n ? {
    kind: "page",
    id: o,
    componentKey: a,
    templateId: s,
    label: d,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: g,
    component: h,
    strictPosition: b,
    hasFlow: p,
    ...typeof e == "string" ? {} : e
  } : mc(s, a, {
    label: d,
    className: u,
    repeatable: l,
    maxInstances: c,
    integration: g,
    component: h,
    strictPosition: b,
    hasFlow: p,
    ...typeof e == "string" ? {} : e
  });
}, Xs = (e, t = !1, n, r) => {
  const o = {
    payload: n,
    item: void 0,
    // Not available during initial construction
    parent: void 0
  }, a = g0(e.pageComponentKeys, o).map((s) => {
    const l = r?.[s], c = l?.dataKey, d = l?.hasFlow;
    return c || d ? { key: s, ...c ? { dataKey: c } : {}, ...d ? { hasFlow: d } : {} } : s;
  });
  if (t) {
    const s = e.id;
    return {
      kind: "group",
      id: s,
      templateId: e.id,
      label: e.label,
      repeatable: e.repeatable ?? !1,
      maxInstances: e.maxInstances ?? null,
      integration: e.integration,
      strictPosition: e.strictPosition,
      pages: a.map((c, d) => {
        const u = typeof c == "string" ? c : c.key, h = typeof c == "string" ? void 0 : c.dataKey;
        return {
          id: `${s}__${h ?? u}__${d}`,
          componentKey: u,
          templateId: u,
          ...h ? { dataKey: h } : {},
          ...r?.[u]?.hasFlow ? { hasFlow: !0 } : {}
        };
      })
    };
  }
  return gc(e.id, a, {
    label: e.label,
    repeatable: e.repeatable ?? !1,
    maxInstances: e.maxInstances ?? null,
    integration: e.integration,
    strictPosition: e.strictPosition
  });
}, m0 = (e) => e ? Array.isArray(e) ? e : Object.entries(e).map(([t, n]) => ({ ...n, id: t })) : [], g0 = (e, t) => {
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
}, p0 = (e) => {
  const {
    initial: t,
    groups: n,
    pageComponentKeys: r = [],
    pages: o = {},
    pageComponents: i = {},
    payload: a
  } = e, s = m0(n), l = /* @__PURE__ */ new Map();
  s.forEach((p) => l.set(p.id, p));
  const c = r.length ? r : Object.keys(o), d = { ...i };
  Object.entries(o).forEach(([p, v]) => {
    v.component && (d[p] = v.component);
  });
  const u = t.map((p) => {
    if (typeof p == "string") {
      const w = l.get(p);
      return w ? Xs(w, !0, a, o) : Ys(p, void 0, !0, o);
    }
    return p.pageComponentKeys !== void 0 ? Xs(p, !0, a, o) : Ys(p, void 0, !0, o);
  }), h = s.map((p) => ({
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
    ...c.filter((p) => o?.[p]?.allowAsSinglePage !== !1).map((p) => {
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
    ...h
  ];
  return { initialItems: u, availableItems: b, pageComponents: d };
};
var Vu = "AlertDialog", [v0] = ht(Vu, [
  Cc
]), mt = Cc(), Hu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = mt(t);
  return /* @__PURE__ */ f($c, { ...r, ...n, modal: !0 });
};
Hu.displayName = Vu;
var b0 = "AlertDialogTrigger", y0 = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f(Cb, { ...o, ...r, ref: t });
  }
);
y0.displayName = b0;
var w0 = "AlertDialogPortal", Gu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = mt(t);
  return /* @__PURE__ */ f(zc, { ...r, ...n });
};
Gu.displayName = w0;
var x0 = "AlertDialogOverlay", Uu = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f(gi, { ...o, ...r, ref: t });
  }
);
Uu.displayName = x0;
var Jt = "AlertDialogContent", [C0, S0] = v0(Jt), N0 = /* @__PURE__ */ Lh("AlertDialogContent"), Yu = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, i = mt(n), a = m.useRef(null), s = ve(t, a), l = m.useRef(null);
    return /* @__PURE__ */ f(
      bb,
      {
        contentName: Jt,
        titleName: Xu,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ f(C0, { scope: n, cancelRef: l, children: /* @__PURE__ */ D(
          pi,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: Z(o.onOpenAutoFocus, (c) => {
              c.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ f(N0, { children: r }),
              /* @__PURE__ */ f(E0, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Yu.displayName = Jt;
var Xu = "AlertDialogTitle", qu = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f(vi, { ...o, ...r, ref: t });
  }
);
qu.displayName = Xu;
var Zu = "AlertDialogDescription", Ju = m.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f(bi, { ...o, ...r, ref: t });
});
Ju.displayName = Zu;
var P0 = "AlertDialogAction", Qu = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f(yi, { ...o, ...r, ref: t });
  }
);
Qu.displayName = P0;
var ed = "AlertDialogCancel", td = m.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = S0(ed, n), i = mt(n), a = ve(t, o);
    return /* @__PURE__ */ f(yi, { ...i, ...r, ref: a });
  }
);
td.displayName = ed;
var E0 = ({ contentRef: e }) => {
  const t = `\`${Jt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Jt}\` by passing a \`${Zu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Jt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return m.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, R0 = Hu, I0 = Gu, nd = Uu, rd = Yu, od = Qu, id = td, sd = qu, ad = Ju;
const A0 = R0, k0 = I0, ld = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  nd,
  {
    ref: n,
    className: se(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ld.displayName = nd.displayName;
const cd = m.forwardRef(({ className: e, ...t }, n) => {
  const { portalContainer: r } = Lo();
  return /* @__PURE__ */ D(k0, { container: r || void 0, children: [
    /* @__PURE__ */ f(ld, {}),
    /* @__PURE__ */ f(
      rd,
      {
        ref: n,
        "data-uhuu-editor": !0,
        className: se(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md border border-gray-200 bg-white p-6 shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e
        ),
        ...t
      }
    )
  ] });
});
cd.displayName = rd.displayName;
const ud = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f("div", { className: se("flex flex-col gap-2 text-left", e), ...t });
ud.displayName = "AlertDialogHeader";
const dd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: se("mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
    ...t
  }
);
dd.displayName = "AlertDialogFooter";
const fd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  sd,
  {
    ref: n,
    className: se("text-base font-semibold text-gray-900", e),
    ...t
  }
));
fd.displayName = sd.displayName;
const hd = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  ad,
  {
    ref: n,
    className: se("text-sm text-gray-600", e),
    ...t
  }
));
hd.displayName = ad.displayName;
const md = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  od,
  {
    ref: n,
    className: se(
      "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800",
      e
    ),
    ...t
  }
));
md.displayName = od.displayName;
const D0 = m.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  id,
  {
    ref: n,
    className: se(
      "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50",
      e
    ),
    ...t
  }
));
D0.displayName = id.displayName;
function M0({
  modes: e,
  selectedMode: t,
  onModeChange: n,
  interactive: r,
  onInteractiveChange: o,
  hasReferenceRenderer: i = !1,
  referenceOpacity: a = 50,
  onReferenceOpacityChange: s
}) {
  const l = e ? Object.keys(e) : [], c = t || l[0] || "all", d = (u) => {
    o(!1), n && e && e[u] && n(u, e[u]);
  };
  return e && e[c] && e[c].label, /* @__PURE__ */ D(_n, { modal: !1, children: [
    /* @__PURE__ */ f(Ln, { asChild: !0, children: /* @__PURE__ */ D(
      ke,
      {
        variant: "ghost",
        size: "sm",
        className: `text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5 ${r ? "" : "bg-gray-100/80"}`,
        children: [
          /* @__PURE__ */ f(Zf, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ f("span", { className: "text-[10px] uppercase tracking-wide", children: "Dev" })
        ]
      }
    ) }),
    /* @__PURE__ */ D(rn, { align: "end", className: "min-w-[220px]", children: [
      /* @__PURE__ */ f(No, { className: "text-xs text-gray-500", children: "Print Preview" }),
      l.length > 0 ? /* @__PURE__ */ f(
        zv,
        {
          value: c,
          onValueChange: (u) => d(u),
          children: l.map((u) => /* @__PURE__ */ D(
            dc,
            {
              value: u,
              className: "flex items-center gap-2",
              children: [
                c === u ? /* @__PURE__ */ f(fr, { className: "w-3 h-3 text-gray-400" }) : /* @__PURE__ */ f("span", { className: "w-3 h-3" }),
                e[u].label
              ]
            },
            u
          ))
        }
      ) : /* @__PURE__ */ D(
        Ve,
        {
          onSelect: () => o(!r),
          onClick: () => o(!r),
          className: "flex items-center gap-2",
          children: [
            r ? /* @__PURE__ */ f("span", { className: "w-3 h-3" }) : /* @__PURE__ */ f(fr, { className: "w-3 h-3 text-gray-400" }),
            r ? "Enter Print Mode" : "Exit Print Mode"
          ]
        }
      ),
      i && /* @__PURE__ */ D(Fe, { children: [
        /* @__PURE__ */ f(qt, {}),
        /* @__PURE__ */ f(No, { className: "text-xs text-gray-500", children: "Reference Overlay" }),
        /* @__PURE__ */ D("div", { className: "px-2 py-2", children: [
          /* @__PURE__ */ D("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ f("span", { children: "Opacity" }),
            /* @__PURE__ */ D("span", { children: [
              a,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "pt-2", children: /* @__PURE__ */ f(
            Li,
            {
              value: [a],
              min: 0,
              max: 100,
              step: 5,
              onValueChange: (u) => {
                const h = u[0] ?? a;
                s?.(h);
              }
            }
          ) }),
          /* @__PURE__ */ D("div", { className: "pt-2 flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ f("span", { children: "Hidden" }),
            /* @__PURE__ */ f("span", { children: "Solid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const O0 = { width: 210, height: 297 };
function T0(e, t) {
  return t ? `${t.id}/${e.id}` : e.id;
}
function _0({ label: e, onDone: t, onAddAnother: n }) {
  return e ? /* @__PURE__ */ f("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30", children: /* @__PURE__ */ D("div", { className: "bg-white rounded-lg border border-gray-200/80 shadow-xl p-6 w-full max-w-sm mx-4 flex flex-col items-center text-center", children: [
    /* @__PURE__ */ f("div", { className: "rounded-full bg-emerald-100 p-3 mb-4", children: /* @__PURE__ */ f(fr, { className: "h-6 w-6 text-emerald-600", strokeWidth: 2.5 }) }),
    /* @__PURE__ */ D("h2", { className: "text-base font-medium text-gray-900 mb-5", children: [
      e,
      " added"
    ] }),
    /* @__PURE__ */ D("div", { className: "flex gap-2 w-full", children: [
      /* @__PURE__ */ f(ke, { variant: "outline", size: "sm", onClick: n, className: "flex-1", children: "Add another" }),
      /* @__PURE__ */ f(ke, { variant: "default", size: "sm", onClick: t, className: "flex-1", children: "Done" })
    ] })
  ] }) }) : null;
}
function qs({
  initialItems: e = [],
  availableItems: t = [],
  pageComponents: n = {},
  payload: r,
  pageFormat: o,
  pageOptions: i = [],
  notifyError: a,
  referenceRenderer: s,
  renderOverlay: l,
  renderPage: c,
  menuItems: d,
  gridColsClass: u,
  reorderTitle: h = "Reorder Pages and Groups",
  reorderDescription: g = "Drag and drop to reorder. Groups move as a single unit.",
  stateKey: b = $t,
  onItemsChange: p,
  onStateChange: v,
  resolveNewItem: w,
  pageFilter: N,
  printConfigs: x
}) {
  const y = o ?? O0, { interactive: P, setInteractive: E, enableDevTools: C } = Fo(), S = $o(), [R, I] = te(null), [k, O] = te(null), [z, F] = te(void 0), [K, M] = te(0), [T, $] = te(0), _ = R ?? N, L = Y(() => k ? { ...y, ...k } : y, [y, k]), G = xe(Fn), U = G?.payload ?? r, [ie, le] = te(!1), ne = L?.preview ?? "single_page", B = Y(
    () => ne === "two_pages" ? { ...L, preview: "single_page" } : L,
    [ne, L]
  ), H = Y(() => di(e), [e]), ee = Y(() => i?.length ? i.map((A) => "getValue" in A ? A : G?.setPageOptionValue ? cb(
    A,
    G.payload,
    G.setPageOptionValue
  ) : ((Gt() || C) && console.warn(
    "PageEditor: payload-backed pageOptions require TemplateDataProvider or payload/onPayloadChange."
  ), null)).filter(Boolean) : [], [i, G]), [J, X] = te(null), [oe, ce] = te({ mode: "end" }), [he, pe] = te(null), Re = de(null), {
    items: Ke,
    itemsWithPageNum: cn,
    availableItemsToAdd: zt,
    addItem: Bt,
    removeItem: Ge,
    reorderItems: Kt,
    updateItemFields: it,
    addDialogOpen: Wn,
    setAddDialogOpen: jn,
    openAddDialog: un,
    itemsForReorder: Ur,
    handleReorder: gt,
    defaultRenderThumbnail: pt
  } = l0({
    initialItems: H,
    availableItems: t,
    pageComponents: n,
    payload: U,
    setup: L,
    stateKey: b,
    onItemsChange: p,
    onStateChange: v,
    resolveNewItem: w,
    notifyError: a
  }), st = Y(() => {
    const A = [];
    for (const j of cn) {
      const q = Le(j) ? j.pages ?? [] : [j];
      for (const Q of q) {
        if (!Q?.id) continue;
        const fe = Le(j) ? j : void 0;
        A.push({
          ...Q,
          kind: "page",
          id: Q.id,
          pageNum: Q.pageNum ?? A.length + 1,
          basePageNum: Q.pageNum ?? A.length + 1,
          parentGroup: fe,
          flowKey: T0(Q, fe)
        });
      }
    }
    return A.sort((j, q) => (j.basePageNum ?? 0) - (q.basePageNum ?? 0));
  }, [cn]), dn = Y(() => JSON.stringify({
    format: B?.format,
    orientation: B?.orientation,
    width: B?.width,
    height: B?.height,
    bleed: B?.bleed,
    showBleed: B?.showBleed,
    preview: B?.preview,
    flowPages: st.filter((A) => A.hasFlow).map((A) => A.flowKey).join("|")
  }), [B, st]), Ue = Y(() => ct(Ke), [Ke]), {
    allVirtualPages: fn,
    renderedVirtualPages: It,
    virtualTotalPageCount: At,
    registerMeasurement: hn
  } = d0({
    logicalPages: st,
    pageFilter: _,
    layoutKey: dn
  }), mn = Y(
    () => new Set(It.map((A) => A.virtualPageId)),
    [It]
  ), Yr = Y(
    () => fn.filter((A) => A.hasFlow && A.virtualPageIndex === 0 && (c || !mn.has(A.virtualPageId))),
    [fn, mn, c]
  );
  m.useEffect(() => {
    if (!he) return;
    const A = setTimeout(() => {
      document.querySelector(`[data-page-item-id="${he}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(A);
  }, [he]);
  const gn = c0({
    items: Ke,
    reorderItems: Kt,
    availableItemsToAdd: zt,
    setPendingInsertPosition: ce,
    openAddDialog: un
  }), Vn = ge(async (A) => {
    const j = await Bt(A, oe);
    j.success && (pe(j.insertedId), Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => pe(null), 1200), ce({ mode: "end" }), A.repeatable && A.integration && X(A));
  }, [Bt, oe]), Hn = ge(() => {
    const A = Array.from(document.querySelectorAll("[data-page-item-id]"));
    if (!A.length) return { mode: "end" };
    const j = window.innerHeight / 2;
    let q = null, Q = 1 / 0;
    for (const ye of A) {
      const Ae = ye.getBoundingClientRect(), Pe = Math.abs(Ae.top + Ae.height / 2 - j);
      Pe < Q && (Q = Pe, q = ye);
    }
    const fe = q?.getAttribute("data-page-item-id");
    return fe ? { mode: "after", anchorId: fe } : { mode: "end" };
  }, []), Gn = ge(() => {
    ce(Hn()), un();
  }, [Hn, un]), Ne = m.useCallback(
    (A, j, q) => {
      if (!j) return;
      const Q = A.applyPatch?.(q, j);
      Q && it(j.id, Q), A.onChange?.(j.id, q, {
        item: j,
        updateItem: (fe) => it(j.id, fe)
      });
    },
    [it]
  ), De = (A) => /* @__PURE__ */ D("div", { className: "absolute bottom-[10mm] left-[15mm] right-[15mm] text-[7pt] text-gray-600 flex items-center justify-between pointer-events-none", children: [
    /* @__PURE__ */ f("span", { children: "Page" }),
    /* @__PURE__ */ D("span", { children: [
      A.pageNo,
      " / ",
      A.total
    ] })
  ] }), Me = (A, j, q) => l ? l({ pageNo: A, total: At, pageId: j, parent: q }) : De({ pageNo: A, total: At }), $e = (A, j = {}) => {
    const q = A.parentGroup;
    if (c && j.renderVisible !== !1)
      return c({ page: A, parent: q });
    const Q = A.componentKey ?? A.id, fe = C && s ? s(A) : null, ye = C && s ? m.isValidElement(fe) ? m.cloneElement(fe, {
      opacity: T
    }) : fe : null, Ae = A.templateId ?? Q, Pe = n[Q], Qe = G?.getPagePayload ? G.getPagePayload(A) : yr(U, { id: A.id, templateId: Ae, componentKey: Q }), kt = yc(
      U,
      A,
      q
    ), Un = h0({
      payload: U,
      page: A,
      parentGroup: q,
      pagePayload: Qe
    });
    return /* @__PURE__ */ f(
      Nw,
      {
        pageId: A.id,
        templateId: Ae,
        pageNo: A.pageNum,
        measurementPageNo: A.basePageNum,
        component: Pe,
        payload: U,
        pagePayload: Qe,
        integration: kt,
        page: A,
        parentGroup: q,
        componentKey: Q,
        setup: B,
        reference: ye,
        overlay: ({ pageNo: pn }) => Me(pn, A.id, q),
        className: A.className,
        dataBinding: Un,
        totalPages: At,
        measurementTotalPages: Ue,
        flowPageIndex: A.virtualPageIndex,
        flowChunksByFlowId: A.flowChunksByFlowId,
        measureFlow: j.measureFlow ?? (!!A.hasFlow && A.virtualPageIndex === 0),
        flowMeasurementKey: A.flowKey,
        flowMeasurementVersion: dn,
        onFlowMeasurement: A.hasFlow ? hn : void 0,
        renderVisible: j.renderVisible ?? !0
      },
      `${j.renderVisible === !1 ? "measure-only" : "page"}-${A.virtualPageId}`
    );
  }, Ie = (A, j, q) => {
    const Q = !!j && Le(j), fe = Q && j.pages[0]?.id === A.id;
    if (A.virtualPageIndex > 0)
      return /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex items-center gap-2 h-9", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: A.pageNum }),
        /* @__PURE__ */ D("span", { className: "text-xs text-gray-500", children: [
          A.label || A.componentKey || A.id,
          " continued"
        ] })
      ] });
    if (Q && !fe)
      return /* @__PURE__ */ f("div", { "data-uhuu-editor": !0, className: "pl-0 pr-3 py-1.5 flex justify-between items-center h-9", children: /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ f("span", { className: "page-number", children: A.pageNum }),
        A.label && /* @__PURE__ */ f("span", { className: "text-xs text-gray-500", children: A.label }),
        /* @__PURE__ */ f("span", { className: "text-xs text-gray-400", children: "·" })
      ] }) });
    const ye = Q ? j : A, Ae = Q ? j.label || j.id : A.label || `Page ${A.pageNum}`;
    return /* @__PURE__ */ D("div", { "data-uhuu-editor": !0, className: "pl-0 flex items-center h-9", children: [
      /* @__PURE__ */ f("span", { className: "page-number shrink-0 text-xs tabular-nums text-gray-400 font-medium pr-1", children: A.pageNum }),
      /* @__PURE__ */ f(
        a0,
        {
          name: Ae,
          canRename: !0,
          canMoveUp: !!q?.onMoveUp,
          canMoveDown: !!q?.onMoveDown,
          canAddPage: !!q?.onAddPage,
          canDuplicate: !!q?.onDuplicate,
          canDelete: Ue > 1,
          onRename: (Pe) => it(ye.id, { label: Pe || void 0 }),
          onMoveUp: q?.onMoveUp,
          onMoveDown: q?.onMoveDown,
          onAddPage: q?.onAddPage,
          onDuplicate: q?.onDuplicate,
          onDelete: () => Ge(ye.id)
        }
      ),
      /* @__PURE__ */ f("span", { className: "pl-1", children: ee.length > 0 && /* @__PURE__ */ f(
        s0,
        {
          pageOptions: ee,
          targetItem: ye,
          onChange: Ne,
          title: Q ? "Group options" : "Page options"
        }
      ) })
    ] });
  }, Oe = Y(() => {
    if (ne !== "two_pages") return [];
    const A = It;
    if (!A.length) return [];
    const j = [{ left: void 0, right: A[0], layout: "right" }];
    for (let q = 1; q < A.length; q += 2) {
      const Q = A[q], fe = A[q + 1];
      if (fe)
        j.push({ left: Q, right: fe, layout: "spread" });
      else {
        const ye = Q.pageNum % 2 === 0;
        j.push({
          left: ye ? Q : void 0,
          right: ye ? void 0 : Q,
          layout: ye ? "left" : "right"
        });
      }
    }
    return j;
  }, [ne, It]), We = /* @__PURE__ */ D("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ D(Ti, { variant: "secondary", className: "font-normal text-xs bg-gray-100/80 text-gray-700 border-0", children: [
      At,
      " ",
      At === 1 ? "Page" : "Pages"
    ] }),
    C && /* @__PURE__ */ f(
      M0,
      {
        modes: x,
        selectedMode: z,
        onModeChange: (A, j) => {
          F(A), I(j.filter ?? null), O(j.pageFormat ?? null), M((q) => q + 1);
        },
        interactive: P,
        onInteractiveChange: (A) => {
          E(A), A && O(null);
        },
        hasReferenceRenderer: !!s,
        referenceOpacity: T,
        onReferenceOpacityChange: $
      }
    ),
    P && /* @__PURE__ */ D(Fe, { children: [
      zt.length > 0 && /* @__PURE__ */ D(
        ke,
        {
          variant: "ghost",
          size: "sm",
          onClick: Gn,
          title: "Add page or group",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ f(lt, { className: "w-3.5 h-3.5" }),
            "Add"
          ]
        }
      ),
      /* @__PURE__ */ D(
        ke,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => le(!0),
          title: "Reorder pages and groups using drag and drop",
          className: "text-xs font-medium text-gray-700 hover:bg-gray-100/80 h-7 px-2.5",
          children: [
            /* @__PURE__ */ f(th, { className: "w-3.5 h-3.5" }),
            "Reorder"
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ D(Fe, { children: [
    Yr.map((A) => $e(A, {
      renderVisible: !1,
      measureFlow: !0
    })),
    C && !P && /* @__PURE__ */ D(
      ke,
      {
        onClick: () => E(!0),
        "data-uhuu-editor": !0,
        size: "sm",
        className: "screen-only fixed top-4 right-4 z-50 flex items-center gap-1.5 !text-xs rounded-full",
        title: "Back to Edit Mode",
        children: [
          /* @__PURE__ */ f(Ea, { className: "w-4 h-4" }),
          "Back to Editor"
        ]
      }
    ),
    /* @__PURE__ */ f(
      db,
      {
        defaultZoom: 80,
        minZoom: 25,
        maxZoom: 200,
        menuItems: d ?? We,
        onAddPage: Gn,
        preview: ne,
        children: ne === "two_pages" ? Oe.map((A, j) => {
          const q = A.left ?? A.right, Q = A.right ?? A.left, fe = q?.parentGroup?.id ?? q?.id ?? null, ye = Q?.parentGroup?.id ?? Q?.id ?? null, Ae = A.left?.parentGroup?.id ?? A.left?.id, Pe = A.right?.parentGroup?.id ?? A.right?.id, Qe = Ae === he, kt = Pe === he, Un = (pn, gd) => gn(pn ? pn.parentGroup ?? pn : void 0, gd);
          return /* @__PURE__ */ D(ub, { layout: A.layout, pageItemId: ye ?? void 0, children: [
            A.left && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": A.left.virtualPageIndex === 0 ? Ae : void 0,
                className: Qe ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  so,
                  {
                    title: `Sheet ${A.left.pageNum}`,
                    controls: Ie(A.left, A.left.parentGroup, Un(A.left, fe)),
                    origin: A.left.pageNum % 2 === 0 ? "right" : "left",
                    children: $e(A.left)
                  },
                  A.left.virtualPageId
                )
              }
            ),
            A.right && /* @__PURE__ */ f(
              "div",
              {
                "data-page-item-id": A.right.virtualPageIndex === 0 ? Pe : void 0,
                className: kt ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
                children: /* @__PURE__ */ f(
                  so,
                  {
                    title: `Sheet ${A.right.pageNum}`,
                    controls: Ie(A.right, A.right.parentGroup, Un(A.right, ye)),
                    origin: A.right.pageNum % 2 === 0 ? "right" : "left",
                    children: $e(A.right)
                  },
                  A.right.virtualPageId
                )
              }
            )
          ] }, `pair-${j}`);
        }) : It.map((A) => {
          const j = A.parentGroup ?? A, q = A.parentGroup?.id ?? A.id, Q = gn(j, q), fe = A.parentGroup?.id ?? A.id, ye = he === fe;
          return /* @__PURE__ */ f(
            "div",
            {
              "data-page-item-id": A.virtualPageIndex === 0 ? fe : void 0,
              className: ye ? "outline outline-2 outline-offset-2 outline-blue-100 bg-blue-50" : void 0,
              children: /* @__PURE__ */ f(
                so,
                {
                  title: `Sheet ${A.pageNum}`,
                  controls: Ie(A, A.parentGroup, Q),
                  children: $e(A)
                }
              )
            },
            A.virtualPageId
          );
        })
      },
      `dev-mode-${K}-${z ?? "default"}`
    ),
    P && !S && /* @__PURE__ */ D(Fe, { children: [
      /* @__PURE__ */ f(
        Nb,
        {
          open: Wn,
          onOpenChange: jn,
          availableItems: zt,
          onSelectItem: Vn,
          pageComponents: n,
          payload: U,
          setup: y,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      ),
      /* @__PURE__ */ f(
        Sw,
        {
          open: ie,
          onOpenChange: le,
          pages: Ur,
          onReorder: (A) => {
            gt(A), le(!1);
          },
          onRemove: (A) => Ge(A.id),
          pageComponents: n,
          payload: U,
          setup: y,
          renderThumbnail: pt,
          title: h,
          description: g,
          gridColsClass: u,
          "data-uhuu-editor": !0
        }
      )
    ] }),
    /* @__PURE__ */ f(
      _0,
      {
        label: J ? J.label ?? J.id : null,
        onDone: () => X(null),
        onAddAnother: () => {
          const A = J;
          X(null), A && Vn(A);
        }
      }
    )
  ] });
}
function L0(e) {
  const { templateConfig: t, ...n } = e;
  return xe(Fn) || !e.payload && !e.onPayloadChange ? /* @__PURE__ */ f(qs, { ...n }) : /* @__PURE__ */ f(
    wc,
    {
      payload: e.payload,
      onPayloadChange: e.onPayloadChange,
      stateKey: e.stateKey,
      children: /* @__PURE__ */ f(qs, { ...n })
    }
  );
}
function F0(e) {
  const n = xe(Fn)?.payload ?? e.payload, r = m.useMemo(
    () => p0({ ...e.templateConfig, payload: n }),
    [e.templateConfig, n]
  ), [o, i] = m.useState({
    open: !1,
    message: ""
  }), a = m.useCallback((c) => {
    i({ open: !0, message: c });
  }, []), s = m.useMemo(
    () => Zv(n),
    [n]
  ), l = m.useMemo(() => {
    if (!s?.items)
      return r.initialItems;
    const c = e.templateConfig.groups ?? {}, d = Array.isArray(c) ? c : Object.entries(c).map(([y, P]) => ({ id: y, ...P })), u = new Map(d.map((y) => [y.id, y])), h = e.templateConfig.pages ?? {}, g = (y) => {
      const P = y?.componentKey ?? y?.templateId ?? y?.id;
      return !(h[P] ?? h[y?.templateId] ?? h[y?.id])?.hasFlow || y?.hasFlow ? y : { ...y, hasFlow: !0 };
    }, b = s.items.map((y) => {
      if (y.kind !== "group") return g(y);
      const P = y.templateId ?? y.id, E = u.get(P), C = E?.strictPosition !== void 0 && !y.strictPosition ? { ...y, strictPosition: E.strictPosition } : y, S = {
        ...C,
        pages: (C.pages ?? []).map(g)
      };
      if (!E || typeof E.pageComponentKeys != "function") return S;
      try {
        const R = E.pageComponentKeys({ payload: n, item: void 0, parent: void 0 });
        return Array.isArray(R) ? R.length === 0 ? {
          ...S,
          pages: []
        } : {
          ...S,
          pages: R.map((I, k) => {
            const O = h[I], z = O?.dataKey;
            return {
              id: `${S.id}__${z ?? I}__${k}`,
              componentKey: I,
              templateId: I,
              ...z ? { dataKey: z } : {},
              ...O?.hasFlow ? { hasFlow: !0 } : {}
            };
          })
        } : (console.error(`[PageEditor] pageComponentKeys for group ${C.id} must return an array, got:`, typeof R), C);
      } catch (R) {
        return console.error(`[PageEditor] Error evaluating pageComponentKeys for group ${S.id}:`, R), S;
      }
    }), p = new Set(r.initialItems.map((y) => y.id)), v = b.filter((y) => p.has(y.id)), w = ct(v), N = ct(r.initialItems);
    if (!Array.from(p).some(
      (y) => !v.some((P) => P.id === y)
    ) && w !== N) {
      const y = b.filter((R) => {
        if (R.kind !== "group") return !p.has(R.id);
        const I = R.templateId ?? R.id;
        return R.id !== I && !p.has(R.id);
      });
      if (y.length === 0) return r.initialItems;
      const P = [...r.initialItems, ...y], E = P.filter((R) => R.strictPosition === "start"), C = P.filter((R) => R.strictPosition === "end"), S = P.filter((R) => !R.strictPosition);
      return [...E, ...S, ...C];
    }
    return b;
  }, [s?.items, r.initialItems, n, e.templateConfig.groups, e.templateConfig.pages]);
  return /* @__PURE__ */ D(Fe, { children: [
    /* @__PURE__ */ f(
      L0,
      {
        ...e,
        payload: n,
        initialItems: l,
        availableItems: r.availableItems,
        pageComponents: r.pageComponents,
        notifyError: a
      }
    ),
    /* @__PURE__ */ f(
      A0,
      {
        open: o.open,
        onOpenChange: (c) => {
          c || i({ open: !1, message: "" });
        },
        children: /* @__PURE__ */ D(cd, { children: [
          /* @__PURE__ */ D(ud, { children: [
            /* @__PURE__ */ f(fd, { children: "Cannot remove item" }),
            /* @__PURE__ */ f(hd, { children: o.message })
          ] }),
          /* @__PURE__ */ f(dd, { children: /* @__PURE__ */ f(md, { onClick: () => i({ open: !1, message: "" }), children: "OK" }) })
        ] })
      }
    )
  ] });
}
function $0(e, t) {
  if (!(!e || !t)) {
    if (e.includes("??")) {
      const n = e.split("??").map((r) => r.trim());
      for (const r of n) {
        const o = Zs(t, r);
        if (o != null)
          return o;
      }
      return;
    }
    return Zs(t, e);
  }
}
function Zs(e, t) {
  if (!t) return e;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function z0(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(e))
    if (typeof i == "function")
      r[o] = i(t);
    else if (typeof i == "string") {
      const a = i.startsWith("integration.") ? i.slice(12) : i;
      r[o] = $0(a, t);
    }
  return r;
}
function B0(e, t, n) {
  return e(t, n);
}
function K0(e, t, n) {
  return typeof e == "function" ? B0(e, t, n) : z0(e, t);
}
function W0(e, t, n) {
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
function j0(e, t, n = {}, r, o = null) {
  const i = e?.integration?.path?.();
  if (!i) return null;
  const a = n.type === "assistant", s = n.type === "image" || n.imagePath, l = a ? e.integration.path(t) ?? [i, t].filter(Boolean).join(".") : [i, t].filter(Boolean).join(".");
  if (s) {
    const c = n.imageGalleryPath ?? (o ? `${i}.${o}` : null) ?? e.defaults.imageGalleryPath;
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
  return a ? {
    path: l,
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
function V0(e) {
  const { dataBinding: t, integration: n, resolver: r, galleryPath: o, defaults: i } = e, a = m.useMemo(() => K0(r, n, t?.payload), [r, n, t?.payload]), s = m.useMemo(() => W0(t, n, o), [t, n, o]), l = m.useCallback(
    (d, u = {}, h) => j0(
      t,
      d,
      u,
      h,
      s
    ),
    [t, s]
  ), c = m.useCallback(
    (d, u = {}, h) => {
      const g = l(d, u, h);
      if (!g) return {};
      const b = en({ dialog: g }, { page: { paginationType: "static" } });
      if (b.onClick) {
        const p = b.onClick;
        b.onClick = (v) => {
          v.stopPropagation(), p(v);
        };
      }
      return b;
    },
    [l]
  );
  return m.useMemo(
    () => ({
      data: a,
      dialog: l,
      dialogProps: c,
      galleryPath: s,
      instanceId: t?.integration?.instanceId ?? null,
      integration: n
    }),
    [a, l, c, s, t, n]
  );
}
const q0 = {
  Pagination: ho,
  Sheet: mo,
  FlowArea: ta,
  FlowPage: na,
  Flow: ra,
  FlowDocument: Wd,
  markdownToFlowItems: Xd,
  htmlToFlowItems: ia
}, Z0 = {
  TemplateDataProvider: wc,
  PageEditor: F0,
  InteractiveModeProvider: Ih,
  useInteractive: Fo,
  useIntegrationAdapter: V0
};
export {
  kd as Editable,
  Z0 as EditorShell,
  X0 as ImageBlock,
  q0 as Static
};
//# sourceMappingURL=uhuu-components.es.js.map
